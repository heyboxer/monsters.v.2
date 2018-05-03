import { Node } from './node.model';
import { RootMeta } from './root-meta.model';

export class Element {
  readonly structure: Node;
  protected node: Node;

  constructor(tree) {
    if(!tree.isRoot) throw new Error('ElementConstructor Error! Passed value was not root node type.');

    this.structure = tree;
    this.node = tree;
  }

  protected getRootMeta() : RootMeta {
    return this.structure.getMeta() as RootMeta;
  }

  protected makeDescendant(node) : Element {
    return new Fragment(this.structure, node);
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
    return new Element(this.structure);
  }
}

class Fragment extends Element {
  protected node: Node;

  constructor(tree, node) {
    super(tree);
    this.node = node;
  }

  public isFragment() : boolean {
    return true;
  }
}
