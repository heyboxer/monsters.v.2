import uuid from 'uuid/v4';

export class ElementModel {
  private id = uuid();
  private root: HTMLElement;

  constructor(private name: string, private node: HTMLElement, root?) {
    this.root = root || this.node;
  };

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getRoot(): HTMLElement {
    return this.root;
  }

  getNode(): HTMLElement {
    return this.node;
  }

  isRoot(): boolean {
    return this.root.isSameNode(this.node);
  }
}
