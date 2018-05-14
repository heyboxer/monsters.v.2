import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[monster-host]',
})
export class MonstersHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
