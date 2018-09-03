import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { TrinketUniqPartDirective } from './trinket-uniq-part.directive';

import { ElementComponentModel } from '../../model/element-component.model';


@Component({
  template: '',
})
export class TrinketUniqModel extends ElementComponentModel implements AfterViewInit {
  protected afterInit: Function[] = [];
  protected initiated: boolean = false;

  @ViewChildren(TrinketUniqPartDirective) protected parts: QueryList<TrinketUniqPartDirective>;
  constructor(){
    super();
  }

  ngAfterViewInit() {
    this.initiated = true;
    if(!this.afterInit.length) this.load('default');

    this.afterInit.forEach(fn => fn());
  }

  load(name: string | number): void {
    if(!this.initiated) {
      this.afterInit = [...this.afterInit, () => this.load(name) ];
      return;
    }

    const part = this.parts.find(p => p.name === name) || this.parts.find(p => p.name === 'default');
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
