import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MonsterModel } from '../monster.model';
import { MonsterPartDirective } from '../monster-part.directive';

@Component({
  selector: 'alien',
  templateUrl: 'alien.html'
})
export class AlienComponent extends MonsterModel {
  constructor(private el: ElementRef, protected renderer: Renderer2) {
    super('alien', el.nativeElement);
  }
}
