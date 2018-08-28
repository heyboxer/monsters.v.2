import uuid from 'uuid';

export interface ListnerConfig {
  readonly target: EventTarget,
  readonly event: string,
  readonly fn: Function,
  rmFunc?: Function,
}

class Listner {
  readonly target: any;
  readonly event: string;
  readonly fn: Function;
  readonly rmFunc: Function;

  constructor({ target, event, fn, rmFunc }: ListnerConfig) {
    this.target = target;
    this.event = event;
    this.fn = fn;
    this.rmFunc = rmFunc;
  };

  public getConfig() :ListnerConfig {
    return {
      target: this.target,
      event: this.event,
      fn: this.fn,
      rmFunc: this.rmFunc,
    };
  }

  public compare(listner: ListnerConfig) :boolean {

    const res = !Object.keys(listner).find(v => {
      return listner[v] !== this[v];
    });

    return res;
  }
}

export class ListnerRegister {
  private register: Array<any> = [];

  constructor() {};

  get length() {
    return this.register.length;
  }

  private find(listner: ListnerConfig): Listner {
    return this.register.find(v => v.compare(listner));
  }

  public add(listner: ListnerConfig, callback: Function): ListnerRegister {
    if(this.has(listner)) return callback(new Error('Instance already exists'));

    const arr = this.register.slice();

    this.register = [...arr, new Listner(listner)];

    return callback(null, this);
  }

  public has(listner: ListnerConfig): boolean {
    return !!this.find(listner);
  }

  public remove(listner: ListnerConfig): ListnerConfig | false {
    const instance = this.find(listner);
    if(!instance) return false;

    this.register = this.register.filter(i => i !== instance);

    return instance.getConfig();
  }

  public clear() {
    this.register = [];
    return this;
  }

  public forEach(
    fn: (value: any, index: number, arr: any[]) => void
  ): ListnerRegister {
    this.register.slice().forEach(fn);
    return this;
  }
}
