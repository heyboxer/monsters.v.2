import { Component, ElementRef, Renderer2, ComponentFactoryResolver, Injector, ApplicationRef, AfterViewInit } from '@angular/core';
import { MonsterModel } from '../monster.model';

import { AnimationSetController } from '../animation/animation-set.controller';
import { animations, sequances } from './animations';


// @ts-ignore: Unreachable code error
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

@Component({
  selector: 'zombie',
  templateUrl: 'zombie.html'
})
export class ZombieComponent extends MonsterModel implements AfterViewInit {
  constructor(el: ElementRef, protected renderer: Renderer2,  componentFactoryResolver: ComponentFactoryResolver, injector: Injector,
  app: ApplicationRef) {
    super('zombie', el.nativeElement, componentFactoryResolver, injector, app);
  }

  ngAfterViewInit() {
    this.loadAnimations(animations);

    const pupils = this.getParts(p => p.name === 'pupil');
    const lids = this.getParts(p => p.name === 'lid');
    const mouth = this.getPart(p => p.name == 'mouth' && p.type == 'element');

    const defaultSeq = () => {
      if(this.checkAnimationStack()) return;
      this.isAnimating = true;

      sequances.default(pupils, lids, () => {
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

    const lids = this.getParts(p => p.name === 'lid');
    const mouth = this.getPart(p => p.name == 'mouth' && p.type == 'element');

    sequances.joyful(lids, mouth, arg, () => {
      this.isAnimating = false;

      if(cb) cb();
      this.checkAnimationStack();
    })

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

    const lids = this.getParts(p => p.name === 'lid');
    const mouth = this.getPart(p => p.name == 'mouth' && p.type == 'element');

    sequances.sad(lids, mouth, arg, () => {
      this.isAnimating = false;
      if(cb) cb();
      this.checkAnimationStack();
    })

    return;
  }
}
