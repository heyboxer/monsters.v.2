import { Directive, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';


@Directive({
  selector: '[trinket-random-part]',
})
export class TrinketRandomPartDirective {
  private shown: boolean = false;
  readonly element: HTMLElement;

  constructor(
    el: ElementRef,
    private templateRef: TemplateRef<any>,
    public viewContainerRef: ViewContainerRef) {
    this.element = el.nativeElement;
    this.show();
  }

  public show() {
    if(!this.shown) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.shown = true;
    }

    return this;
  }

  public hide() {
    if(this.shown) {
      this.viewContainerRef.clear();
      this.shown = false;
    }
    return this;
  }

}
