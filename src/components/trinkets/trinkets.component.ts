import { Component, Input, AfterViewInit, OnInit, ViewChildren, ComponentFactoryResolver, QueryList, HostListener } from '@angular/core';

import { TrinketHostDirective } from './trinket-host.directive';
import { TrinketsService } from './trinkets.service';

@Component({
  selector: 'trinkets',
  templateUrl: 'trinkets.component.html',
  providers: [ TrinketsService ],
  // host: {
    // '[class.monster]':'true'
  // }
})
export class TrinketsComponent implements AfterViewInit, OnInit {
  public trinkets: { id, component, meta }[];
  public instances;

  @ViewChildren(TrinketHostDirective) hosts: QueryList<TrinketHostDirective>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private trinketsService: TrinketsService
  ) {};

  ngOnInit() {
    this.trinkets = this.trinketsService.getTrinkets();
  }

  ngAfterViewInit() {
    this.loadTrinkets();
  }

  loadTrinkets() {
    this.instances = this.hosts.map(({ id, viewContainerRef }) => {
      const trinket = this.trinkets.find(e => e.id == id);

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(trinket.component);

      viewContainerRef.clear();

      const { instance } = viewContainerRef.createComponent(componentFactory);

      return { ...instance, component: trinket.component, meta: trinket.meta };
    });

    return;
  }

  getInstances() {
    return this.instances;
  }
}
