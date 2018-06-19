import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'moustache',
  templateUrl: 'moustache.html',
})
export class MoustacheComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('moustache', element.nativeElement);
  }
}
