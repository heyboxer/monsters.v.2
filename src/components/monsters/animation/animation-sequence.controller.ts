import { EventEmitter } from '@angular/core';

import { AnimationSequenceModel, AnimationFunctions, AnimationScheme } from './animation-sequence.model';
import { AnimationSetController } from './animation-set.controller';

export class AnimationSequenceController {
  private model: AnimationSequenceModel;
  private start = new EventEmitter();
  private end = new EventEmitter();
  private interval: boolean = false;
  private state: boolean = false;

  constructor(scheme: AnimationScheme, animations: AnimationFunctions) {
    this.model = new AnimationSequenceModel(scheme, animations);
    this.start.subscribe(() => this.setState(true));
    this.end.subscribe(() => this.setState(false));
  }

  private setState(arg: boolean):void {
    this.state = arg;
    return;
  }

  private setInterval(fn, interval) {
    this.interval = true;

    const func = () => {
      if(!this.interval) return;
      setTimeout(fn, interval);
    }

    this.end.subscribe(func);

    return fn();
  }

  public isAnimating() {
    return this.state;
  }

  public run(interval?: number) {
    if(this.isAnimating()) return false;

    this.start.emit(null);

    const rec = (acc) => {
      const [ first, ...rest ] = acc;

      if(!first) return this.end.emit(null);

      const arr = first instanceof Array ? first : [first];

      return arr.forEach(name => {
        const set = this.model.getFunction(name)((set) => set);
        return ;
      });
    }

    const scheme = this.model.getScheme();

    const run = () => rec(scheme);

    interval? this.setInterval(run, interval) : setTimeout(run, 0);

    return this;
  }

  public clear() {
    this.interval = false;
  }
}
