import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[monster-host]',
})
export class MonstersDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
