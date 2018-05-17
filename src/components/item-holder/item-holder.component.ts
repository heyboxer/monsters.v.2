import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Renderer2, ElementRef } from '@angular/core';

import { TemplateHostDriective } from './template-host.directive';

@Component({
  selector: 'item-holder',
  templateUrl: 'item-holder.html'
})
export class ItemHolderComponent {
  private el: HTMLElement;
  @ViewChild(TemplateHostDriective) host: TemplateHostDriective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private r: Renderer2,
    el: ElementRef
  ) {
    this.el = el.nativeElement;
  }

  public clear() {
    this.host.viewContainerRef.clear();
    return this;
  }

  public loadComponent(component) {
    this.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const instance = this.host.viewContainerRef.createComponent(componentFactory);

    return instance;
  }

  public setAttributes(obj: Object): void {
    const attrs = Object.keys(obj);

    attrs.forEach(attr => this.r.setAttribute(this.el, attr, obj[attr]));

    return;
  }

  public getSize(): { width: number, height:number } {
    return { width: this.el.offsetWidth, height: this.el.offsetHeight };
  }
}
