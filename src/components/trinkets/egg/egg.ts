import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'egg',
  templateUrl: 'egg.html',
})
export class EggComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super();

    this.make('egg', element.nativeElement);
  }
}
