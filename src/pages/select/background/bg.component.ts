import { Component, ViewChildren, QueryList } from '@angular/core';
import { BackgroundAnchorDirective } from './bg.directive';

@Component({

})
export class BackgroundComponent {
  @ViewChildren(BackgroundAnchorDirective) anchors: QueryList<BackgroundAnchorDirective>;
  constructor() {};

  public find(name) {
    return this.anchors.find(a => a.name === name);
  }
}
