import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'earrings',
  templateUrl: 'earrings.html',
})
export class EarringsComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('earrings', element.nativeElement);
  }
}
