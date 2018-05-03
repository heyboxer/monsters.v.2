import { Element } from './element.model';

const svgNamespaceAttributes = ['xmlns:xlink', 'xmlns'];

export class SvgBuilder {
  private element : Element;
  private namespace = 'http://www.w3.org/2000/svg';

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

  private makeFigure(element: Element) {
    const fn = (err, children) => {
      if(err) return;

      return children[0];
    }

    const child = element.getChildren(fn).getChildren(fn).getChildren(fn);
    const { tag, ...args } = child.node.meta;
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);

    Object.keys(args).forEach(v => {
      return node.setAttributeNS(null, v, args[v]);
    });

    return node;
  }

  public appendTo(id : string): SVGElement {
    const target = document.getElementById(id);
    const container = this.makeContainer();
    const figure = this.makeFigure(this.element);

    container.appendChild(figure);
    target.appendChild(container);

    return container;
  }
}
