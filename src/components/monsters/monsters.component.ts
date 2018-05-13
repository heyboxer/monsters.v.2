import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { MonstersDirective } from './monsters.directive';
import { MonstersService } from './monsters.service';

@Component({
  selector: 'monster',
  templateUrl: 'monsters.component.html',
  providers: [ MonstersService ],
})
export class MonstersComponent implements OnInit {
  @Input() monsterId: string | number;
  private monsters: { id, component }[];
  @ViewChild(MonstersDirective) monsterHost: MonstersDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private monstersService: MonstersService) {
  }

  ngOnInit() {
    this.monsters = this.monstersService.getMonsters();
    this.loadMonster(this.monsterId);
  }

  loadMonster(id) {
    const monster = this.monsters.find(e => e.id == id);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(monster.component);

    const viewContainerRef = this.monsterHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
