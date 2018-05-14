import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[trinket-host]',
})
export class TrinketHostDirective {
  @Input('trinket-id') id : string;
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
