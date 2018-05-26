import { Component, ViewChildren, QueryList, Renderer2, ComponentFactoryResolver, Injector, ApplicationRef, AfterViewInit } from '@angular/core';
import { MonsterPartDirective, MonsterPartTypes } from './monster-part.directive';
import { Node } from '../../app/model/node.model';

@Component({

})
export abstract class MonsterModel implements AfterViewInit {
  @ViewChildren(MonsterPartDirective) parts: QueryList<MonsterPartDirective>;
  protected renderer: Renderer2;

  constructor(private name, private element: HTMLElement, private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private app: ApplicationRef) {}

  ngAfterViewInit() {}

  public getPartsArray() {
    return this.parts.toArray();
  }

  public getParts(fn = (el) => true) {
    const parts = this.getPartsArray();
    return parts.filter(fn);
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

  public render(component, name, callback = (instance) => {}) {
    const obj = this.getContainer(name);
    const { viewContainerRef: container, element, content  } = obj;

    this.clear(name);

    const factory = this.componentFactoryResolver.resolveComponentFactory(component);

    const ref = factory.create(this.injector, [], element);
    // this.app.attachView(ref.hostView);

    const instance = (ref.instance as { node }).node.firstChild;

    obj.content = instance;

    return callback(instance);
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
}
