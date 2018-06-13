import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';

import { AnimationSetController } from './animation/animation-set.controller';

import uuid from 'uuid';

export type MonsterPartTypes = 'group' | 'container' | 'element' | 'root' | 'hidden';

@Directive({
  selector: '[monster-part]',
})
export class MonsterPartDirective {
  @Input('part-type') type: MonsterPartTypes;
  @Input('part-name') name: string;
  @Input('part-name-mod') mod: string;
  @Input('part-group') group: string;
  @Input('part-outline') outline: boolean;
  @Input('part-hidden') hidden: boolean = false;

  readonly element: HTMLElement | SVGGraphicsElement;
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
