import src from './elements.repository';
import uuid from 'uuid/v4';

export class Node {
  readonly parent: Node | null = null;
  readonly key: string | number;
  readonly meta: any;
  readonly children: Map<string | number, Node>;
  readonly id: string;

  constructor(key, meta, id = uuid(), parent?, isRoot = true) {
    this.parent = isRoot ? null : parent;
    this.key = key;
    this.children = new Map();
    this.id = id;
    this.meta = meta;

    src.add(id, this);

    if(!isRoot && !parent) throw new Error('Non root node must have parent');
  }

  get isRoot() {
    return this.parent == null ? true : false;
  }

  getKey() {
    return this.key;
  }

  addChild(key, meta) {
    const id = uuid();
    const child = new Node(key, meta, id, this, false);
    this.children.set(id, child);

    return child;
  }

  getChild(id) {
    return this.children.get(id);
  }

  hasChildren() {
    return !!this.children.size;
  }

  hasChild(id) {
    return this.children.has(id);
  }

  getParent() {
    return this.parent;
  }

  getChildByKey(key) : Node | undefined {
    const [ first ] = this.getChildren(key);
    return first ? first : undefined;
  }

  getDeepChild(keys) {
    if(!keys.length) return undefined;

    const [first, ...rest] = keys;
    const child = this.getChildByKey(first);

    if(!rest.length) return child;

    return child ? child.getDeepChild(rest) : undefined;
  }

  getChildren(key?: string) : Array< Node > {
    const arr = [];

    this.children.forEach(v => {
      const k = v.getKey();

      if(key && key !== k) {
        return;
      }

      return arr.push(v);
    });

    return arr;
  }
}
