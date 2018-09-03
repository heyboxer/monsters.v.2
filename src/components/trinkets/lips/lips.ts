import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'lips',
  templateUrl: 'lips.html',
})
export class LipsComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super();

    this.make('lips', element.nativeElement);
  }
}
