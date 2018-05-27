import { Component, ElementRef, HostBinding } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

@Component({
  selector: 'eyes',
  templateUrl: 'eyes.html',
})
export class EyesComponent extends ElementComponentModel {
  constructor(element: ElementRef) {
    super('eyes', element.nativeElement);
  }
}
