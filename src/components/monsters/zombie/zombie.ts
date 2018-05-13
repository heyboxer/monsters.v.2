import { Component, ElementRef } from '@angular/core';
import { ElementComponentModel } from '../../../model/element-component.model';

@Component({
  selector: 'zombie',
  templateUrl: 'zombie.svg'
})
export class ZombieComponent extends ElementComponentModel {
  constructor(element: ElementRef) {
    super('zombie', element.nativeElement);
  }
}
