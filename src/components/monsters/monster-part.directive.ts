import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';

import { AnimationSetController } from './animation/animation-set.controller';

import uuid from 'uuid';

export type MonsterPartTypes = 'group' | 'container' | 'element' | 'root' ;

@Directive({
  selector: '[monster-part]',
})
export class MonsterPartDirective {
  @Input('part-type') type: MonsterPartTypes;
  @Input('part-name') name: string;
  @Input('part-name-mod') mod: string;
  @Input('part-group') group: string;

  readonly element: HTMLElement;
  readonly id = uuid();
  public animations: AnimationSetController;
  public content;

  constructor(
    el: ElementRef,
    readonly viewContainerRef: ViewContainerRef
  ) {
    this.element = el.nativeElement;
  }

  public setAnimations(controller) {
    this.animations = controller;
    return;
  }
}
