import { Element } from './element.model';
import { Meta } from './meta.model';

const svgNamespaceAttributes = ['xmlns:xlink', 'xmlns'];

export class SvgBuilder {
  private element : Element;
  // private namespace = 'http://www.w3.org/2000/svg';

  constructor(element) {
    this.element = element;
    this.makeContainer();
  }

  private makeContainer() {
    const container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const attrs = this.element.getRootAttributes();

    Object.keys(attrs).forEach(v => {
      return svgNamespaceAttributes.includes(v) ?
        container.setAttributeNS('http://www.w3.org/2000/xmlns/', v, attrs[v]) :
        container.setAttribute(v, attrs[v]);
    });

    return container;
  }

  private makeDomNode(pattern: Meta) : SVGElement{
    const tag = pattern.getTagName();
    const attrs = pattern.getAttrs();

    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);

    Object.keys(attrs).forEach(v => {
      return node.setAttributeNS(null, v, attrs[v]);
    });

    return node;
  }

  private makeFigure(element: Element, container?: (HTMLElement | SVGElement)) {
    const root = container || document.createElement('svg');

    const fn = (parent, err, children) => {
      if(err) throw err;

      if(!children.length) return parent;

      children.forEach((v) => {
        const meta = v.node.getMeta();
        const node = this.makeDomNode(meta);

        if(v.hasChildren()) v.getChildren(fn.bind(null, node));

        return parent.appendChild(node);
      });

      return parent;
    }

    const dom = element.getChildren(fn.bind(null, root));

    return dom;
  }

  public appendTo(id : string): SVGElement {
    const target = document.getElementById(id);
    const figure = this.makeFigure(this.element, this.makeContainer());

    target.appendChild(figure);

    return figure;
  }
}
