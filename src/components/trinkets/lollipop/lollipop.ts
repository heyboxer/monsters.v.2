import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'lollipop',
  templateUrl: 'lollipop.html',
})
export class LollipopComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('lollipop', element.nativeElement);
  }
}
