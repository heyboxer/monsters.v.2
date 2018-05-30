import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { TrinketRandomPartDirective } from './trinket-random-part.directive';

import { ElementComponentModel } from '../../model/element-component.model';


@Component({
})
export class TrinketRandomModel extends ElementComponentModel implements AfterViewInit {
  private afterInit: Function[] = [];
  private initiated: boolean = false;

  @ViewChildren(TrinketRandomPartDirective) protected parts: QueryList<TrinketRandomPartDirective>;
  constructor(name, element){
    super(name, element);
  };

  ngAfterViewInit() {
    this.initiated = true;
    this.afterInit.forEach(fn => fn(this));
  }

  public randomize = (cb?) => {
    if(!this.initiated) {
      this.afterInit = [...this.afterInit, () => this.randomize(cb) ];
      return;
    }

    const random = Math.round((this.parts.length - 1) * Math.random()) + 1;

    const parts = this.parts.reduce((acc, el) => [...acc, el], []);

    const randomParts = (arr, acc, cur) => {
      if(!cur) return acc;

      const randomIndex = Math.round((arr.length - 1) * Math.random());

      const randomPart = arr[randomIndex];

      const filteredArray = arr.slice(0, randomIndex).concat(arr.slice(randomIndex + 1, arr.length));

      return randomParts(filteredArray, [...acc, randomIndex], cur - 1);
    }

    const selected = randomParts(parts, [], random);

    this.hide(selected);

    return cb? cb(selected) : selected;
  }

  public hide(selected) {
    if(!this.initiated) {
      this.afterInit = [...this.afterInit, () => this.hide(selected) ];
      return;
    }

    selected.forEach(i => this.parts.toArray()[i].hide());
    return this;
  }
}
