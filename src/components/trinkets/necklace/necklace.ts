import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'necklace',
  templateUrl: 'necklace.html',
})
export class NecklaceComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('necklace', element.nativeElement);
  }
}
