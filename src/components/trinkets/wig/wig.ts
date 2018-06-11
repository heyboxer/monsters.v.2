import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketUniqModel } from '../trinket-uniq.model';

@Component({
  selector: 'wig',
  templateUrl: 'wig.html',
})
export class WigComponent extends TrinketUniqModel {
  constructor(element: ElementRef) {
    super('wig', element.nativeElement);
  }
}
