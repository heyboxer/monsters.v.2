import { Component, ElementRef, HostBinding } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

@Component({
  selector: 'snivel',
  templateUrl: 'snivel.html',
})
export class SnivelComponent extends ElementComponentModel {
  constructor(element: ElementRef) {
    super('snivel', element.nativeElement);
  }
}
