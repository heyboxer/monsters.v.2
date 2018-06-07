import { Directive, TemplateRef, ViewContainerRef, Input, ElementRef } from '@angular/core';


@Directive({
  selector: '[trinket-uniq-part]',
})
export class TrinketUniqPartDirective {
  @Input('part-name') name: string;
  readonly element: HTMLElement;

  constructor(
    el: ElementRef,
    private templateRef: TemplateRef<any>,
    public viewContainerRef: ViewContainerRef) {
    this.element = el.nativeElement;
  }

  public show() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    return this;
  }

}
