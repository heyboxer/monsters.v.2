import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';

import uuid from 'uuid';

export type MonsterPartTypes = 'group' | 'container' | 'element' | 'root';

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
  public content;

  constructor(
    el: ElementRef,
    readonly viewContainerRef: ViewContainerRef
  ) {
    this.element = el.nativeElement;
    if(this.type === 'container') {
      this.content = null;
    }
  }
}
