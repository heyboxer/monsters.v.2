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
    const { clientX, clientY } = (ev as MouseEvent);
    const top = this.dashboard.offsetTop;
    const bottom = top + this.dashboard.offsetHeight;
    const left = this.dashboard.offsetLeft;
    const right = left + this.dashboard.offsetWidth;

    const isOnDashboard = () => clientX > left && clientX < right && clientY > top && clientY < bottom;

    this.callbacks.onItemDragging.forEach(fn => fn(this, item, ev));

    if(isOnDashboard()) {
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
    this.fsm.grab();

    this.callbacks.onItemClick.forEach(fn => fn(this, item, ev));
    return;
  },

  mouseUp: function(item, ev) {
    // console.log('mouseUp');
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
  };

  constructor(
    private fsm: GameFinistStateMachine,
    private dashboard: HTMLElement,
    items: { node, component, meta? }[]
  ) {
    this.callbacks = {
      onItemClick: [],
      afterItemDropped: [],
      afterItemPlaced: [],
      afterItemDesroyed: [],
      onItemDragging: [],
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

  public setFns(name: string, ...fns: any[]): this {
    const oldFns = this.callbacks[name];
    this.callbacks[name] = [...oldFns, ...fns];
    return this;
  }
}
