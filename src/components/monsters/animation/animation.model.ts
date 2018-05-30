import { EventEmitter } from '@angular/core';

export class AnimationModel {
  public start = new EventEmitter();
  public end = new EventEmitter();

  constructor(
    private instance: HTMLElement,
    private fn: (instance: HTMLElement, callback: Function) => void
  ) {};

  public run(): this {
    this.start.emit(this);
    this.fn( this.instance, () => this.end.emit(this) );
    return this;
  }

  public onEnd(fn: (animation) => void): this {
    this.end.subscribe(fn);
    return this;
  }

  public onStart(fn: (animation) => void): this {
    this.start.subscribe(fn);
    return this;
  }
}
