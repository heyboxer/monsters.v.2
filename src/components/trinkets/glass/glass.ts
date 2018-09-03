import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'glass',
  templateUrl: 'glass.html',
})
export class GlassComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super();

    this.make('glass', element.nativeElement);
  }
}
