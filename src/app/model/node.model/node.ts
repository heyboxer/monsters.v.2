export class Node {
  readonly parent: Node | null = null;
  readonly key: string | number;
  readonly meta: Object | null;
  readonly children: Map<string | number, Node>;

  constructor(key, meta = null, parent?, isRoot = true) {
    this.parent = isRoot ? null : parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();

    if(!isRoot && !parent) throw new Error('Non root node must have parent');
  }

  get isRoot() {
    return this.parent ? true : false;
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Node(key, meta, this, false);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  hasChildren() {
    return !!this.children.size;
  }

  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    return this.children.delete(key);
  }

  getDeepChild(keys) {
    if(!keys.length) return undefined;

    const [first, ...rest] = keys;
    const child = this.getChild(first);

    if(!rest.length) return this.getChild(first);

    return child ? child.getDeepChild(rest) : undefined;
  }

  getChildren() {
    const arr = [];

    this.children.forEach((v, k) => {
      return arr.push(v);
    });

    return arr;
  }
}
