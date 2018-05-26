import { ComponentRef } from '@angular/core';

type ActiveElementState = 'deactivated' | 'activated';
type ActiveElementType = 'original' | 'copy';

export interface ActiveElementConfig {
  instance: HTMLElement,
  component: ComponentRef<any>,
}

export class ActiveElementModel {
  public instance: HTMLElement;
  public component: ComponentRef<any>;
  public state: ActiveElementState = 'activated';
  public type: ActiveElementType = 'original';
  private funcReg: Map<string, (ev) => void> = new Map();
  private children: ActiveElementDescendentModel[] = [];
  private breakpoints: {
    afterActivation: Function[];
    afterDeactivation: Function[];
  }

  constructor(obj: ActiveElementConfig) {
    this.instance = obj.instance;
    this.component = obj.component;
    this.breakpoints = { afterActivation: [], afterDeactivation: [] };
  };

  public addFn(name: string, fn: (ev) => void): ActiveElementModel | boolean {
    this.funcReg.set(name, fn);
    return this;
  }

  public getFn(name: string): (ev) => void {
    return this.funcReg.get(name);
  }

  public setFns(
    name: string,
    ...fns: any[]
  ): ActiveElementModel {
    const oldFns = this.breakpoints[name];
    this.breakpoints[name] = [...oldFns, ...fns];
    return this;
  }

  public copy(instance): ActiveElementDescendentModel {
    const child = new ActiveElementDescendentModel(
      {
        instance,
        component: this.component,
      },
      this
    );

    this.children = [...this.children, child];
    return child;
  }

  public deleteCopy(instance): ActiveElementModel {
    this.children = this.children.filter(i => i === instance);
    return this;
  }

  public isCopy(): boolean | ActiveElementModel {
    return false;
  }

  public deactivate(): void {
    this.state = 'deactivated';

    this.breakpoints.afterDeactivation.forEach(fn => fn(this.instance));
    return;
  }

  public activate() {
    this.state = 'activated';

    this.breakpoints.afterActivation.forEach(fn => fn(this.instance));
    return;
  }

  public isActive() {
    if(this.state == 'activated') return true;
    return false;
  }
}

export class ActiveElementDescendentModel extends ActiveElementModel {
  public type: ActiveElementType = 'copy';

  constructor(obj: ActiveElementConfig, private parent: ActiveElementModel) {
    super(obj);
  }

  public copy(instance): ActiveElementDescendentModel {
    return this.parent.copy(instance);
  }

  public isCopy(): boolean | ActiveElementModel {
    return this.parent;
  }

  public deleteCopy(): ActiveElementModel {
    return this.parent.deleteCopy(this);
  }
}
