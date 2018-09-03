import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { TrinketUniqPartDirective } from './trinket-uniq-part.directive';

import { TrinketUniqModel } from './trinket-uniq.model';


@Component({
  template: '',
})
export class TrinketRandomModel extends TrinketUniqModel  {
  constructor(){
    super();
  }

  public randomize = (cb?) => {
    if(!this.initiated) {
      this.afterInit = [...this.afterInit, () => this.randomize(cb) ];
      return;
    }

    const random = Math.round((this.parts.length - 1) * Math.random());

    const parts = this.parts.reduce((acc, el) => [...acc, el], []);

    const randomParts = (arr, acc, cur) => {
      if(!cur) return acc;

      const randomIndex = Math.round((arr.length - 1) * Math.random());

      const randomPart = arr[randomIndex];
      const partIndex = parts.indexOf(randomPart);

      const filteredArray = arr.slice(0, randomIndex).concat(arr.slice(randomIndex + 1, arr.length));

      return randomParts(filteredArray, [...acc, partIndex], cur - 1);
    }

    // const selected = randomParts(parts, [], random);

    const selected = Math.round((this.parts.length - 2) * Math.random() + 1);

    this.load(selected);

    return cb? cb(selected) : selected;
  }

  load(value: number | string): void {
    if(!this.initiated) {
      this.afterInit = [...this.afterInit, () => this.load(value) ];
      return;
    }

    const part = this.parts.find((p, i) =>
      (typeof(value) === 'number') ? i === value : p.name === value
    ) || this.parts.find(p => p.name === 'default');

    part.show();
    return;
  }
}
