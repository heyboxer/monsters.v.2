import { Component, ElementRef, HostBinding } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

@Component({
  selector: 'moustache',
  templateUrl: 'moustache.html',
})
export class MoustacheComponent extends ElementComponentModel {
  constructor(element: ElementRef) {
    super('moustache', element.nativeElement);
  }
}
