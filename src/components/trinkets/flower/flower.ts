import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'flower',
  templateUrl: 'flower.html',
})
export class FlowerComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('flower', element.nativeElement);
  }
}
