import { Node } from './node.model';

export class Explorer {
  readonly structure: Node;
  protected node: Node;

  constructor(tree) {
    if(!tree.isRoot) throw new Error('ElementConstructor Error! Passed value was not root node type.');

    this.structure = tree;
    this.node = tree;
  }

  protected getRootMeta() {
    return this.structure.getMeta();
  }

  protected makeDescendant(node) : ExplorationPoint {
    return new ExplorationPoint(this.structure, node);
  }

  getRootAttributes() : Object {
    const meta = this.getRootMeta();
    return {
      ...meta.getAttrs(),
      'xmlns': 'http://www.w3.org/2000/svg',
      'xmlns:xlink' : 'http://www.w3.org/1999/xlink'
    }
  }

  getChildren(cb?: Function) {
    const callback = cb || ((err, children?) => { return { err, children } });
    const children = this.node.getChildren();

    return children ?
      callback(null, children.map(v => this.makeDescendant(v))) :
      callback(new Error('No child was found'));
  }

  hasChildren() {
    return this.node.hasChildren();
  }

  public isFragment() : boolean {
    return false;
  }

  public getRootElement() {
    return new Explorer(this.structure);
  }
}

class ExplorationPoint extends Explorer {
  protected node: Node;

  constructor(tree, node) {
    super(tree);
    this.node = node;
  }

  public isFragment() : boolean {
    return true;
  }
}
