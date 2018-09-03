import { Component, ViewChildren, OnInit, OnDestroy } from '@angular/core';
import ElementRepository from './element.repository';
import { ElementModel } from './element.model';


@Component({
  template: '',
  // providers: [ElementRepository]
})
export class ElementComponentModel implements OnInit, OnDestroy {
  private repo = ElementRepository;
  protected element: ElementModel;
  private name: string;
  protected node: HTMLElement;

    constructor() {
    };

    ngOnInit() {
      this.element = new ElementModel(this.name, this.node);
      this.add(this.element);
    };

    ngOnDestroy() {
      this.repo.removeById(this.element.getId());
    };

    protected make(name, node) {
      this.name = name;
      this.node = node;
    }

    private add(element: ElementModel) {
      return this.repo.add(element);
    }
}
