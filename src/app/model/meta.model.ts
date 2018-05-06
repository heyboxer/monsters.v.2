import possibleValues from './data/attributes.datasource';

const parse = (obj, tagNm) => Object.keys(obj).reduce((acc, k) => {
  const psblV = possibleValues[tagNm];
  if(!psblV.includes(k) && !possibleValues['all'].includes(k)) return acc;

  return acc.set(k, obj[k]);
}, new Map());

export class Meta {
  public tagName: string;
  public attrs: Map<string, string | number>;

  constructor(tag, obj?) {
    this.tagName = tag;
    this.attrs = obj ? parse(obj, tag) : new Map();
  }

  getTagName() : string {
    return this.tagName;
  }

  getAttrs() : Object {
    const attrs = {}

    this.attrs.forEach((v, k) => {
      attrs[k] = v;
    });

    return attrs;
  }
}
