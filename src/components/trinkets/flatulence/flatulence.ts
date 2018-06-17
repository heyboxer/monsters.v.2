import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'flatulence',
  templateUrl: 'flatulence.html',
})
export class FlatulenceComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('flatulence', element.nativeElement);
  }
}
