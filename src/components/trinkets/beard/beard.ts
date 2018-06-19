import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'beard',
  templateUrl: 'beard.html',
})
export class BeardComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('beard', element.nativeElement);
  }
}
