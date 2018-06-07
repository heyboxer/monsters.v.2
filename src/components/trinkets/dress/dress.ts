import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'dress',
  templateUrl: 'dress.html',
})
export class DressComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('dress', element.nativeElement);
  }
}
