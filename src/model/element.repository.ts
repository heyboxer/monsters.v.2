import { ElementModel } from './element.model';
// import { Injectable } from "@angular/core";

// @Injectable()
export class ElementRepository {
  private elements : ElementModel[] = [];
  constructor() {};

  public add(element): ElementRepository {
    const arr = this.elements.slice();
    this.elements = [ ...arr, element ];

    return this;
  }

  public removeById(id: string | number): ElementRepository {
    const arr = this.elements.slice().filter(e => e.getId() == id);
    this.elements = arr;

    return this;
  }
}

export default new ElementRepository();
