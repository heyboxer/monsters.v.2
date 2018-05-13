import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { MonstersDirective } from './monsters.directive';

@Component({
  selector: 'monster',
  templateUrl: 'monsters.component.html'
})
export class MonstersComponent implements OnInit {
  @Input() monsters: { id, component }[];
  @ViewChild(MonstersDirective) monsterHost: MonstersDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadMonster(2);
  }

  loadMonster(id) {
    const monster = this.monsters.find(e => e.id == id);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(monster.component);

    const viewContainerRef = this.monsterHost.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(componentFactory);
  }
}
