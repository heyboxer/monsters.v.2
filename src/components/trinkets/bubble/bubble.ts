import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'bubble',
  templateUrl: 'bubble.html',
})
export class BubbleComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('bubble', element.nativeElement);
  }
}
