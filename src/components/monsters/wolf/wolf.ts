import { Component, ElementRef, Renderer2, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { MonsterModel } from '../monster.model';
import { MonsterPartDirective } from '../monster-part.directive';

import { animations, sequances } from './animations';


@Component({
  selector: 'wolf',
  templateUrl: 'wolf.html'
})
export class WolfComponent extends MonsterModel {
  constructor(private el: ElementRef, protected renderer: Renderer2,  componentFactoryResolver: ComponentFactoryResolver, injector: Injector,
  app: ApplicationRef) {
    super('wolf', el.nativeElement, componentFactoryResolver, injector, app);
  }

  ngAfterViewInit() {
    this.loadAnimations(animations);

    const lidRight = this.getPart(p => p.name === 'lid' && p.mod === 'right');
    const lidLeft = this.getPart(p => p.name === 'lid' && p.mod === 'left');

    const defaultSeq = () => {
      if(this.checkAnimationStack()) return;
      this.isAnimating = true;

      sequances.default(lidRight, lidLeft, () => {
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

    const tongue = this.getPart(p => p.name === 'tongue');
    const smileTop = this.getPart(p => p.name === 'smile-part' && p.mod === 'top');
    const smileBottom = this.getPart(p => p.name === 'smile-part' && p.mod === 'bottom');


    sequances.joyful(tongue, smileTop, smileBottom, arg, () => {
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

    arg ? this.open('tears') : this.close('tears');

    const eyeRight = this.getPart(p => p.name === 'eye' && p.mod === 'right');
    const eyeLeft = this.getPart(p => p.name === 'eye' && p.mod === 'left');
    const tongue = this.getPart(p => p.name === 'tongue');

    sequances.sad(eyeLeft, eyeRight, tongue, arg, () => {
      this.isAnimating = false;
      if(cb) cb();
      this.checkAnimationStack();
    })

    return;
  }
}
