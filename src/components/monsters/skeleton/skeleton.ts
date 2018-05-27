import { Component, ElementRef, Renderer2, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { MonsterModel } from '../monster.model';
import { MonsterPartDirective } from '../monster-part.directive';

@Component({
  selector: 'skeleton',
  templateUrl: 'skeleton.html'
})
export class SkeletonComponent extends MonsterModel {

  constructor(private el: ElementRef, protected renderer: Renderer2,  componentFactoryResolver: ComponentFactoryResolver, injector: Injector,
  app: ApplicationRef) {
    super('skeleton', el.nativeElement, componentFactoryResolver, injector, app);
  }
}
