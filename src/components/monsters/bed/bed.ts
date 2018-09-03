import { Component, ElementRef, Renderer2, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { MonsterModel } from '../monster.model';
import { MonsterPartDirective } from '../monster-part.directive';
import { SoundManagerService } from '../../sound-toggler/sound-manager.service';
import { animations, sequances } from './animations';

@Component({
  selector: 'bed',
  templateUrl: 'bed.html'
})
export class BedComponent extends MonsterModel {
  constructor(private el: ElementRef, protected renderer: Renderer2,  componentFactoryResolver: ComponentFactoryResolver, injector: Injector,
  app: ApplicationRef, manager: SoundManagerService) {
    super(componentFactoryResolver, injector, app, manager);

    this.make('bed', el.nativeElement);
  }

  ngAfterViewInit() {
    this.loadAnimations(animations);

    const lidLeft = this.getPart(p => p.name === 'lid' && p.mod === 'left');
    const lidRight = this.getPart(p => p.name === 'lid' && p.mod === 'right');

    const defaultSeq = () => {
      if(this.checkAnimationStack()) return;
      this.isAnimating = true;

      sequances.default(lidLeft, lidRight, () => {
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

    const mouth = this.getPart(p => p.name === 'mouth-figure');
    const teeth = this.getPart(p => p.name === 'mouth');

    sequances.joyful(mouth, teeth, arg, () => {
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

    const mouth = this.getPart(p => p.name === 'mouth-figure');
    const teeth = this.getPart(p => p.name === 'mouth');


    sequances.sad(mouth, teeth, arg, () => {
      this.isAnimating = false;
      if(cb) cb();
      this.checkAnimationStack();
    })

    return;
  }
}
