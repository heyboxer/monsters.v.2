import { Component, ElementRef, HostBinding } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

@Component({
  selector: 'heart',
  templateUrl: 'heart.svg',
})
export class HeartComponent extends ElementComponentModel {
  constructor(element: ElementRef) {
    super();

    this.make('heart', element.nativeElement)
  }
}
