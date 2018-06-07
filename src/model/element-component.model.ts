import { Component, ViewChildren, OnInit, OnDestroy } from '@angular/core';
import ElementRepository from './element.repository';
import { ElementModel } from './element.model';


@Component({
  // providers: [ElementRepository]
})
export class ElementComponentModel implements OnInit, OnDestroy {
  private repo = ElementRepository;
  protected element: ElementModel;

    constructor(private name: string, public node: HTMLElement) {
    };

    ngOnInit() {
      this.element = new ElementModel(this.name, this.node);
      this.add(this.element);
    };

    ngOnDestroy() {
      this.repo.removeById(this.element.getId());
    };

    private add(element: ElementModel) {
      return this.repo.add(element);
    }
}
