import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MonsterModel } from '../monster.model';
import { MonsterPartDirective } from '../monster-part.directive';

@Component({
  selector: 'zombie',
  templateUrl: 'zombie.html'
})
export class ZombieComponent extends MonsterModel {
  constructor(private el: ElementRef, protected renderer: Renderer2) {
    super('zombie', el.nativeElement);
  }
}
