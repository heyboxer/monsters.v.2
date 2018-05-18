import { Component, ElementRef, HostBinding } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

@Component({
  selector: 'glass',
  templateUrl: 'glass.svg',
})
export class GlassComponent extends ElementComponentModel {
  constructor(element: ElementRef) {
    super('glass', element.nativeElement);
  }
}
