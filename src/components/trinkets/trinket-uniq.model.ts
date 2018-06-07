import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { TrinketUniqPartDirective } from './trinket-uniq-part.directive';

import { ElementComponentModel } from '../../model/element-component.model';


@Component({
})
export class TrinketUniqModel extends ElementComponentModel implements AfterViewInit {
  private afterInit: Function[] = [];
  private initiated: boolean = false;

  @ViewChildren(TrinketUniqPartDirective) protected parts: QueryList<TrinketUniqPartDirective>;
  constructor(name, element){
    super(name, element);
  }

  ngAfterViewInit() {
    this.initiated = true;
    if(!this.afterInit.length) this.load('default');

    this.afterInit.forEach(fn => fn());
  }

  load(name: string): void {
    if(!this.initiated) {
      this.afterInit = [...this.afterInit, () => this.load(name) ];
      return;
    }

    console.log(this.parts);

    const part = this.parts.find(p => p.name === name);
    part.show();
    return;
  }

  getInstance(cb): void {
    if(!this.initiated) {
      this.afterInit = [...this.afterInit, () => this.getInstance(cb) ];
      return;
    }

    cb(this.node);

    return;
  }
}
