import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'bra',
  templateUrl: 'bra.html',
})
export class BraComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super();

    this.make('bra', element.nativeElement);
  }
}
