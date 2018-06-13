import { Component, ViewChildren, QueryList, Renderer2, ComponentFactoryResolver, Injector, ApplicationRef, AfterViewInit } from '@angular/core';
import { MonsterPartDirective, MonsterPartTypes } from './monster-part.directive';
import { Node } from '../../app/model/node.model';

@Component({
})
export abstract class MonsterModel implements AfterViewInit {
  @ViewChildren(MonsterPartDirective) parts: QueryList<MonsterPartDirective>;
  protected renderer: Renderer2;
  private emotion = 'default';

  constructor(private name, protected element: HTMLElement, private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private app: ApplicationRef) {}

  ngAfterViewInit() {}

  public getPartsArray() {
    return this.parts.toArray();
  }

  public isOnMonster({ top, left, bottom, right }) {
    const point = (x, y) => ({ x, y,});

    const rect = (p1, p2) => ({
      p1, p2,
      onRect: function(point) {
        const compareX = (x) => {
          return (p1.x <= point.x) && (point.x <= p2.x);
        }

        const compareY = (x) => {
          return (p1.y <= point.y) && (point.y <= p2.y);
        }

        return compareX(point.x) && compareY(point.y);
      }
    });

    const outline = this.getParts(p => p.outline).map(p => {
      const { top, right, left, bottom } = p.element.getBoundingClientRect();

      const point1 = point(Number(left), Number(top));
      const point2 = point(Number(right), Number(bottom));

      return rect( point1, point2 );
    });

    const leftTop = point(Number(left), Number(top));
    const rightBottom = point(Number(right), Number(bottom));

    return outline.find(
      rect => rect.onRect(leftTop) || rect.onRect(rightBottom)
    ) ? true : false;
  }

  public getParts(fn = (el) => true) {
    const parts = this.getPartsArray();
    return parts.filter(fn);
  }

  public getRoot() {
    return this.getPart(p => p.type === 'root');
  }

  public getPart(arg: ((i) => boolean) | string) {
    const parts = this.getPartsArray();
    const fn = (arg as (i) => boolean) || ((p) => p.name === (arg as string));

    return parts.find(fn);
  }

  public getContainer(name: string) {
    return this.getPart(p => p.group === name && p.type === 'container');
  }

  public getGroup(name: string) {
    return this.getPart(p => p.name === name && p.type === 'group');
  }

  public getContainers() {
    return this.getParts((p) => p.type === 'container');
  }

  public render(component, name, callback = (instance, ref?) => {}) {
    const obj = this.getContainer(name);
    const { viewContainerRef: container, element, content  } = obj;

    this.clear(name);

    const factory = this.componentFactoryResolver.resolveComponentFactory(component);

    const ref = factory.create(this.injector, [], element);
    this.app.attachView(ref.hostView);

    const instance = (ref.instance as { node }).node.children.item(0);

    obj.content = ref.instance;

    return callback(ref.instance, ref);
  }

  public clear(name) {
    const object = this.getContainer(name);
    const { element } = object;


    const children = Array.from(element.children).forEach(e => {
      return this.renderer.removeChild(element, e);
    });

    object.content = null;

    return this;
  }

  public makeSad() {
    this.emotion = 'sad';
    return this;
  }

  public makeJoyjul() {
    this.emotion = 'joyful';
    return this;
  }

  public clearEmotion() {
    this.emotion = 'default';
    return this;
  }

  public getEmotion() {
    return this.emotion;
  }

  private trigger(name, fn) {
    const gr = this.getParts((p) => p.name === name);

    gr.forEach(({ element }) => fn(element));
  }

  public close(name) {
    this.trigger(name, (element) => {
      this.renderer.setAttribute(element, 'visibility', 'hidden');
      return;
    });

    return () => this.open(name);
  }

  public open(name) {
    this.trigger(name, (element) => {
      element.removeAttribute('visibility');
    });

    return () => this.close(name);;
  }

  public clearAll() {
    this.getContainers().forEach(({ group }) => this.clear(group));
    this.getParts(p => p.type !== 'container').forEach(({name}) => {
      this.open(name);
    });

    this.getParts(p => p.hidden).forEach(({name}) => {
      this.close(name);
    });

    return;
  }

  public animate(name?, cb?): any {
    return false;
  }
}
