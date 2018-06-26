import { EventEmitter } from '@angular/core';
import { AnimationModel } from './animation.model';

type AnimationMap = Map<string, AnimationModel>;

const once = fn => {
  let called = false;

  return (...args) => {
    if(called) throw Error('AnimationSet has been configured already');
    called = true;
    return fn(...args);
  };
};

class DelayModel extends AnimationModel {
  constructor(private interval: number) {
    super(null, (instance, callback) => setTimeout(callback, this.interval));
  };
}

export class AnimationSetController {
  private animations: Map<string, AnimationModel>;
  private state: boolean = false;
  private current: AnimationModel | null = null;
  private queue: (AnimationModel | DelayModel)[] = [];
  private queueCleared = new EventEmitter();
  private end = new EventEmitter();

  constructor(
    private instance,
    animations:
    { [name : string] : (instance: HTMLElement, callback: Function) => void } | AnimationMap,
    private recoveryPoint? : Object,
    private recoveryFn? : (instance, recoveryPoint) => void
  ) {

    this.recoveryPoint = this.instance.attr();
    this.recoveryFn = (instance, recoveryPoint) => instance.attr(recoveryPoint);

    this.end.subscribe(() => {
      if(!this.queue.length) return this.queueCleared.emit(null);

      const [ first, ...rest ] = this.queue;
      this.queue = rest;

      first.run();

      return;
    });

    this.config(animations);

  }

  private config = once(animations => {
    this.animations = Object.keys(animations).reduce((acc, k) => {
      const animation = new AnimationModel(this.instance, animations[k]);

      animation.onStart((animation) => {
        this.setState(true);
        this.setCurrent(animation);
        return;
      });

      animation.onEnd((animation) => {
        this.setState(false);
        this.setCurrent(null);
        return;
      });

      return acc.set(k, animation);
    }, new Map());

    return;
  });

  private get(name) {
    return this.animations.get(name);
  }

  private setState(arg : boolean) {
    this.state = arg;

    if(this.state === false) this.end.emit(null);

    return this;
  }

  private setCurrent(animation: AnimationModel | null): this {
    this.current = animation;
    return this;
  }

  private isAnimating(): boolean {
    return this.state;
  }

  private getInQueue(animation: AnimationModel | DelayModel): void {
    this.queue.push(animation);

    return;
  }

  public onDisengage(cb: (...args) => void): this {
    this.queueCleared.subscribe(cb);
    return this;
  }

  public recovery(): this {
    const recovery = () => this.recoveryFn( this.instance, this.recoveryPoint );

    this.isAnimating() ? this.onDisengage(recovery) : recovery();

    return this;
  }

  public getRecoveryPoint(): Object {
    return this.recoveryPoint;
  }

  public run(name): this {
    const animation = this.animations.get(name);

    if(!animation) throw Error('AnimationSet: No animation was found');

    if(this.isAnimating()) {
      this.getInQueue(animation);
      return this;
    }

    animation.run();
    return this;
  }

  public delay(interval: number): this {
    const delay = new DelayModel(interval);

    delay.onStart((animation) => {
      this.setState(true);
      this.setCurrent(animation);
      return;
    });

    delay.onEnd((animation) => {
      this.setState(false);
      this.setCurrent(null);
      return;
    });

    if(this.isAnimating()) {
      this.getInQueue(delay);
      return this;
    }

    delay.run();

    return this;
  }

  public specify(name): AnimationSetControllerSpecified {
    return new AnimationSetControllerSpecified(this, name);
  }
}

class AnimationSetControllerSpecified {
  constructor(private parent, private name) {};

  public run(): this {
    this.parent.run(this.name);
    return this;
  }

  public specify(name): false {
    return false;
  }
}
