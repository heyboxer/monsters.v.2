import { ActiveElementModel } from './active-element.model';
import { GameFinistStateMachine } from './game-fsm';

const lib: { [key: string] : (item: ActiveElementModel, ev: Event) => void } = {
  mouseEnterOnItem: function(item, ev) {
    this.update(item);
    this.fsm.select();
    return;
  },
  mouseLeaveFromItem: function(item, ev) {
    this.fsm.unselect();
    return;
  },
  handleCursorPosition: function(item, ev) {
    this.callbacks.onItemDragging.forEach(fn => fn(this, item, ev));

    if(this.onDashboard(ev)) {
      if(!this.fsm.isDraggedOut()) {
        this.fsm.moveOut();
      }
    } else {
      if(!this.fsm.isDraggedIn()) {
        this.fsm.moveIn();
      }
    }

    return;
  },

  mouseDown: function(item, ev) {
    item.isCopy() ? this.fsm.grabIn() : this.fsm.grabOut();

    this.callbacks.onItemClick.forEach(fn => fn(this, item, ev));

    return;
  },

  mouseUp: function(item, ev) {
    this.callbacks.afterItemDropped.forEach(fn => fn(this, item, ev));

    if(this.fsm.isDraggedIn()) {
      this.callbacks.afterItemPlaced.forEach(fn => fn(this, item, ev));
      this.fsm.place();
      return;
    }

    if(this.fsm.isDraggedOut()) {
      this.callbacks.afterItemDesroyed.forEach(fn => fn(this, item, ev));
      this.fsm.destroy();
      return;
    }
  }
}

export class ActiveElementRepository {
  private items: ActiveElementModel[] = [];
  private current: ActiveElementModel;

  private callbacks: {
    onItemClick: Function[];
    afterItemDropped: Function[];
    afterItemPlaced: Function[];
    afterItemDesroyed: Function[];
    onItemDragging: Function[];
    afterClear: Function[];
  };

  constructor(
    private fsm: GameFinistStateMachine,
    private onDashboard: Function,
    items: { node, component, meta? }[]
  ) {
    this.callbacks = {
      onItemClick: [],
      afterItemDropped: [],
      afterItemPlaced: [],
      afterItemDesroyed: [],
      onItemDragging: [],
      afterClear: [],
    }

    items.forEach(item => this.addActiveElement(new ActiveElementModel(
      {
        instance: item.node,
        component: item.component,
        meta: item.meta
      }
    )));
  }

  private addActiveElement(element: ActiveElementModel) {
    const functions = Object.keys(lib);

    functions.forEach(name => {
      const fn = lib[name].bind(this, element);
      element.addFn(name, fn);

      return;
    });

    this.items.push(element);

    return this;
  }

  private update(arg: ActiveElementModel | null): this {
    this.current = arg;
    return this;
  }

  public addActiveElementCopy(element: ActiveElementModel, instance: HTMLElement) {
    const copy = element.copy(instance);

    this.addActiveElement(copy);

    return copy;
  }

  public removeActiveElement(element) {
    const filtered = this.items.filter(e => e !== element);
    this.items = filtered;

    return this;
  }

  public findActiveElementByInstance(instance) {
    return this.items.find(e => e.instance === instance);
  }

  public getCurrent() {
    return this.current;
  }

  public getActive() {
    return this.items.filter(item => item.isActive());
  }

  public getCopies() {
    return this.items.filter(item => item.isCopy());
  }

  public clear() {
    const filtered = this.items.filter(e => e.type === 'original');
    this.items = filtered;

    const originals = this.items.forEach(e => e.deleteAllCopies());

    this.callbacks.afterClear.forEach(fn => fn(this, this.items));

    return;
  }

  public setFns(name: string, ...fns: any[]): this {
    const oldFns = this.callbacks[name];
    this.callbacks[name] = [...oldFns, ...fns];
    return this;
  }
}
