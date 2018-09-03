import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

import { TrinketRandomModel } from '../trinket-random.model';

@Component({
  selector: 'mole',
  templateUrl: 'mole.html',
})
export class MoleComponent extends TrinketRandomModel {
  constructor(element: ElementRef) {
    super();

    this.make('mole', element.nativeElement);
  }
}
