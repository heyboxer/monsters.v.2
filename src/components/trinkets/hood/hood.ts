import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'hood',
  templateUrl: 'hood.html',
})
export class HoodComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('hood', element.nativeElement);
  }
}
