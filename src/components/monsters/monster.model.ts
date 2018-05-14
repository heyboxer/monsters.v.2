import { Component, ViewChildren, QueryList, Renderer2, AfterViewInit } from '@angular/core';
import { ElementComponentModel } from '../../model/element-component.model';
import { MonsterPartDirective } from './monster-part.directive';
import { Node } from '../../app/model/node.model';

@Component({

})
export abstract class MonsterModel implements AfterViewInit {
  @ViewChildren(MonsterPartDirective) parts: QueryList<MonsterPartDirective>;
  protected renderer: Renderer2;

  constructor(private name, private element: HTMLElement) {
    // super(name, el);
  }

  ngAfterViewInit() {
    const array = this.parts.map(v => v);

    const fn = (element: HTMLElement) => {
      if(element.hasAttribute('monster-part') && element.hasAttribute('part-type')) {

      }
      return;
    }

    this.eachElement(this.element.children, fn);
  }

  eachElement = (arr: HTMLCollection, cb: Function) : void => {
    return Array.from(arr).forEach(v => {
      return cb(v);
    });
  }
}
