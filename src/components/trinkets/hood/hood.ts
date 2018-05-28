import { Component, ElementRef, HostBinding } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

@Component({
  selector: 'hood',
  templateUrl: 'hood.html',
})
export class HoodComponent extends ElementComponentModel {
  constructor(element: ElementRef) {
    super('hood', element.nativeElement);
  }
}
