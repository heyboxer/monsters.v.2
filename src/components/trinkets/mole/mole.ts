import { Component, ElementRef, HostBinding } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

@Component({
  selector: 'mole',
  templateUrl: 'mole.html',
})
export class MoleComponent extends ElementComponentModel {
  constructor(element: ElementRef) {
    super('mole', element.nativeElement);
  }
}
