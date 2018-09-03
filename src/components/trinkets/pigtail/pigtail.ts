import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'pigtail',
  templateUrl: 'pigtail.html',
})
export class PigtailComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super();

    this.make('pigtail', element.nativeElement);
  }
}
