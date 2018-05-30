import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[monster-screen]',
})
export class MonstersScreenDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
