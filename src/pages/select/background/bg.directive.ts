import { Directive, ElementRef, Input, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[background-anchor]',
})
export abstract class BackgroundAnchorDirective implements AfterViewInit {
  readonly element: HTMLElement;
  public top: number;
  public left: number;

  @Input('monster-name') name: string;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.update();
  };

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  };

  ngAfterViewInit() {
    this.update();
  }

  private update() {
    const { top, left } = this.element.getBoundingClientRect();

    return this.set(top, left);
  }

  private set(top, left): this {
    this.top = top;
    this.left = left;
    return this;
  }
}
