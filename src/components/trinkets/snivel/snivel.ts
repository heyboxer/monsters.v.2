import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'snivel',
  templateUrl: 'snivel.html',
})
export class SnivelComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('snivel', element.nativeElement);
  }
}
