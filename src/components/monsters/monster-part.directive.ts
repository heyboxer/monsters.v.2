import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';

import uuid from 'uuid';

@Directive({
  selector: '[monster-part]',
})
export class MonsterPartDirective {
  @Input('part-type') type: string;
  @Input('part-name') name: string;

  readonly element: HTMLElement;
  readonly id = uuid();

  constructor(el: ElementRef, private viewContainerRef: ViewContainerRef) {
    this.element = el.nativeElement;
  }
}
