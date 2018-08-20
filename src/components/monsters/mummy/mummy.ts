import { Component, ElementRef, Renderer2, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { MonsterModel } from '../monster.model';
import { MonsterPartDirective } from '../monster-part.directive';
import { SoundManagerService } from '../../sound-toggler/sound-manager.service';
import { animations, sequances } from './animations';

@Component({
  selector: 'mummy',
  templateUrl: 'mummy.html'
})
export class MummyComponent extends MonsterModel {
  constructor(private el: ElementRef, protected renderer: Renderer2,  componentFactoryResolver: ComponentFactoryResolver, injector: Injector,
  app: ApplicationRef, manager: SoundManagerService) {
    super('mummy', el.nativeElement, componentFactoryResolver, injector, app, manager);
  }

  ngAfterViewInit() {
    this.loadAnimations(animations);

    const lids = this.getParts(p => p.name === 'lid');

    const defaultSeq = () => {
      if(this.checkAnimationStack()) return;
      this.isAnimating = true;

      sequances.default(lids, () => {
        this.isAnimating = false;

        this.checkAnimationStack();

        return;
      });

      return;
    };

    setInterval(() => {
      if(this.getEmotion() === 'default' && !this.isAnimating) {
        defaultSeq();
      }

      return;
    }, 3000);
  }

  protected animateJoyful(arg = true, cb?) {
    if(this.isAnimating) {
      return !this.animationsArr.find(({emotion, arg: a}) => emotion === 'joyful' && a === arg) ?
      this.animationsArr.push({
        emotion: 'joyful',
        arg,
        fn: () => this.animateJoyful(arg, cb),
      }) : null;
    }

    this.isAnimating = true;

    const mouth = this.getPart(p => p.name === 'mouth' && p.type === 'element');

    arg ? this.open('hidden-jaw') : this.close('hidden-jaw');

    sequances.joyful(mouth, arg, () => {
      this.isAnimating = false;

      if(cb) cb();
      this.checkAnimationStack();
    });

    return;
  }
  protected animateSad(arg = true, cb?) {
    if(this.isAnimating) {
      return !this.animationsArr.find(({emotion, arg: a}) => emotion === 'sad' && a === arg) ?
      this.animationsArr.push({
        emotion: 'sad',
        arg,
        fn: () => this.animateSad(arg, cb),
      }) : null;
    }

    this.isAnimating = true;

    const mouth = this.getPart(p => p.name === 'mouth' && p.type === 'element');
    const tooth = this.getPart(p => p.name === 'tooth');

    arg ? this.open('hidden-jaw') : this.close('hidden-jaw');

    sequances.sad(mouth, tooth, arg, () => {
      this.isAnimating = false;
      if(cb) cb();
      this.checkAnimationStack();
    })

    return;
  }
}
