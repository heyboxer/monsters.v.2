import { Node } from './node.model';

class ElementsRepository {
  private elements : Element[];
  constructor() {
    this.elements = [];
  }

  add(id, node) {
    const arr = this.elements.slice();
    const e = new Element(id, node);

    this.elements = [ ...arr, e ];

    return;
  }

  get() {
    return this.elements.slice();
  }
}

class Element {
  readonly id: string | number;
  // readonly root: string | number;
  readonly node: string | number;

  constructor(id, node) {
    this.id = id;
    // this.root = root;
    this.node = node;
  }
}

export default new ElementsRepository();
