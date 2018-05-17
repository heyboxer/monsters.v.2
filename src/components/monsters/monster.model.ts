import { Component, ViewChildren, QueryList, Renderer2, AfterViewInit } from '@angular/core';
import { MonsterPartDirective } from './monster-part.directive';
import { Node } from '../../app/model/node.model';

@Component({

})
export abstract class MonsterModel implements AfterViewInit {
  @ViewChildren(MonsterPartDirective) parts: QueryList<MonsterPartDirective>;
  protected renderer: Renderer2;

  constructor(private name, private element: HTMLElement) {}

  ngAfterViewInit() {}

  eachElement = (arr: HTMLCollection, cb: Function) : void => {
    return Array.from(arr).forEach(v => {
      return cb(v);
    });
  }

  getParts() {
    return this.parts;
  }
}
