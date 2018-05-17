import { Component, Input, OnInit, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { MonstersHostDirective } from './monsters-host.directive';
import { MonstersService } from './monsters.service';
import { MonsterModel } from './monster.model';

@Component({
  selector: 'monster',
  templateUrl: 'monsters.component.html',
  // styleUrls: ['monsters.component.scss'],
  providers: [ MonstersService ],
  host: {
    '[class.monster]':'true'
  }
})
export class MonstersComponent implements OnInit, AfterViewInit {
  @Input() monsterId: string | number;
  private monsters: { id, component }[];
  private monster;
  @ViewChild(MonstersHostDirective) monsterHost: MonstersHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver, private monstersService: MonstersService
  ) {}

  ngOnInit() {
    this.monsters = this.monstersService.getMonsters();
    this.loadMonster(this.monsterId);
  }

  ngAfterViewInit() {
  }

  loadMonster(id) {
    const monster = this.monsters.find(e => e.id == id);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(monster.component);


    const viewContainerRef = this.monsterHost.viewContainerRef;
    viewContainerRef.clear();
    const { instance } = viewContainerRef.createComponent(componentFactory);
    this.monster = instance;
  }

  public getCurrentMonster() {
    return this.monster;
  }
}
