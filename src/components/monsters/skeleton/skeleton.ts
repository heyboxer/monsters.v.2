import { Component, ElementRef, Renderer2, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { MonsterModel } from '../monster.model';
import { MonsterPartDirective } from '../monster-part.directive';

import { animations, sequances } from './animations';

@Component({
  selector: 'skeleton',
  templateUrl: 'skeleton.html'
})
export class SkeletonComponent extends MonsterModel {

  constructor(private el: ElementRef, protected renderer: Renderer2,  componentFactoryResolver: ComponentFactoryResolver, injector: Injector,
  app: ApplicationRef) {
    super('skeleton', el.nativeElement, componentFactoryResolver, injector, app);
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

    const mouth = this.getPart(p => p.name == 'mouth-figure');
    const topTeeth = this.getPart(p => p.name == 'teeth-top');
    const bottomTeeth = this.getPart(p => p.name == 'teeth-bottom');

    arg ? this.open('hidden-jaw') : this.close('hidden-jaw');

    sequances.joyful(mouth, topTeeth, bottomTeeth, arg, () => {
      this.isAnimating = false;

      if(cb) cb();
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

    const mouth = this.getPart(p => p.name == 'mouth-figure');
    const topTeeth = this.getPart(p => p.name == 'teeth-top');
    const bottomTeeth = this.getPart(p => p.name == 'teeth-bottom');

    sequances.sad(mouth, topTeeth, bottomTeeth, arg, () => {
      this.isAnimating = false;

      arg ? this.open('hidden-jaw') : this.close('hidden-jaw');

      if(cb) cb();
    })

    return;
  }
}
