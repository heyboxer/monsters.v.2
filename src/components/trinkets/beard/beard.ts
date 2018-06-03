import { Component, ElementRef, HostBinding } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

@Component({
  selector: 'beard',
  templateUrl: 'beard.html',
})
export class BeardComponent extends ElementComponentModel {
  constructor(element: ElementRef) {
    super('beard', element.nativeElement);
  }
}
