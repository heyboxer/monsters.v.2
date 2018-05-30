import { Component, Input, OnInit, AfterViewInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, Renderer2 } from '@angular/core';

import { MonstersHostDirective } from './monsters-host.directive';
import { MonstersScreenDirective } from './monsters-screen.directive';
import { MonstersService } from './monsters.service';
import { MonsterModel } from './monster.model';

@Component({
  selector: 'monster',
  templateUrl: 'monsters.component.html',
  // styleUrls: ['monsters.component.scss'],
  providers: [ MonstersService ],
  host: {
    '[class]':'monster.name + "__screen"',
    '[class.monster]':'true',
  }
})
export class MonstersComponent implements OnInit, AfterViewInit {
  @Input() monsterId: string | number;
  private monsters: { id, component }[];
  private monster;
  private onScreen:{ host, instance }[] = [];
  @ViewChild(MonstersHostDirective) monsterHost: MonstersHostDirective;
  @ViewChild(MonstersScreenDirective) screen: MonstersScreenDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private monstersService: MonstersService,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.monsters = this.monstersService.getMonsters();
    this.loadMonster(this.monsterId);
  }

  ngAfterViewInit() {
  }

  private loadMonster(id) {
    const monster = this.monsters.find(e => e.id == id);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(monster.component);


    const viewContainerRef = this.monsterHost.viewContainerRef;
    viewContainerRef.clear();
    const { instance } = viewContainerRef.createComponent(componentFactory);
    this.monster = instance;
  }

  public render(component, cb) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.screen.viewContainerRef;
    const { hostView, instance} = viewContainerRef.createComponent(componentFactory);

    this.addOnScreen((instance as { node }).node, hostView);

    return cb((instance as { node }).node);
  }

  private addOnScreen(instance, host) {
    this.onScreen = [ ...this.onScreen, { instance, host } ];
    return this;
  }

  public remove(instance) {
    const { host } = this.onScreen.find(({instance: i}) => i === instance);

    const index = this.screen.viewContainerRef.indexOf( host );
    this.screen.viewContainerRef.remove(index);

    this.onScreen = this.onScreen.filter(({instance: i}) => i !== instance);

    return this;
  }

  public getCurrentMonster() {
    return this.monster;
  }
}
