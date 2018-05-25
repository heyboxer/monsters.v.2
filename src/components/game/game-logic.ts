import { Renderer2, ComponentRef } from '@angular/core';

import { ActiveElementModel } from './active-element.model';
import { GameFinistStateMachine } from './game-fsm';
import { ListnersHandler } from './listners-handler';

const lib = {
  mouseEnterOnItem: function(item, ev) {
    // console.log('mouseEnter');
    this.next(item);
    this.fsm.select();
  },

  mouseLeaveFromItem: function(item, ev) {
    // console.log('mouseLeave');
    this.fsm.unselect();
  },
}

export class GameLogic {
  private fsm = new GameFinistStateMachine();
  private listners: ListnersHandler;
  private activeElement: ActiveElementModel;
  private items: ActiveElementModel[] = [];
  private prev: Function = () => {};

  private callbacks: {
    onItemClick: Function[];
    afterItemDropped: Function[];
    afterItemPlaced: Function[];
    onItemDragging: Function[];
    onContainerClick: Function[];
  };

  constructor(
    private r: Renderer2,
    items: { node, component }[],
    private monster,
    private dashboard,
    container,
  ){
    this.listners = new ListnersHandler(this.r);

    this.callbacks = {
      onItemClick: [],
      afterItemDropped: [],
      afterItemPlaced: [],
      onItemDragging: [],
      onContainerClick: [],
    }

    items.forEach(
      item =>
        this.addActiveElement(new ActiveElementModel({ instance: item.node, component: item.component }))
    );

    this.fsm.setFns(
      'select',
      this.itemsMouseEnterListners.bind(this, false),
      this.itemMouseLeaveListner.bind(this, true, null),
      this.itemMouseDownListner.bind(this, true),
    )

    this.fsm.setFns(
      'unselect',
      this.itemMouseLeaveListner.bind(this, false, null),
      this.itemsMouseEnterListners.bind(this, true),
      this.itemMouseDownListner.bind(this, false),
    );

    this.fsm.setFns(
      'grab',
      this.itemMouseLeaveListner.bind(this, false, null),
      this.itemMouseDownListner.bind(this, false),
      this.itemMouseUpListner.bind(this, true),
      this.listenCursorPosition.bind(this, true),
    );

    this.fsm.setFns(
      'destroy',
      this.listenCursorPosition.bind(this, false),
      this.itemMouseUpListner.bind(this, false),
      this.itemsMouseEnterListners.bind(this, true),
    );

    this.fsm.setFns(
      'place',
      this.listenCursorPosition.bind(this, false),
      this.itemMouseUpListner.bind(this, false),
      this.itemsMouseEnterListners.bind(this, true),
    );
  };

  public start() : this {
    this.itemsMouseEnterListners(true);
    return this;
  }

  public over() : this {
    this.listners.removeListners();
    return this;
  }

  private addActiveElement(
    element: ActiveElementModel
  ) {
    element.addFn(
      'mouseEnterOnItem',
      lib.mouseEnterOnItem.bind(this, element)
    );

    element.addFn(
      'mouseLeaveFromItem',
      lib.mouseLeaveFromItem.bind(this, element)
    );

    this.items.push(element);

    return this;
  }

  public AddActiveElementCopy(
    element: ActiveElementModel,
    instance: HTMLElement
  ) {
    const copy = element.copy(instance);

    this.addActiveElement(copy);

    return this;
  }

  private removeActiveElement(element) {
    const filtered = this.items.filter(e => e !== element);
    this.items = filtered;

    return this;
  }

  private next = (...args: any[]) => {
    this.prev = () => {
      return args;
    };
    return;
  }

  private makeListner(arg: boolean) {
    return (e, ev, fn) =>
    this.listners[arg ? 'addListner' : 'removeListner'](e, ev, fn);
  }

  private itemsMouseEnterListners = (arg: boolean) => {
    const items = this.items.filter(item => item.isActive());

    return items.forEach(
      item => this.makeListner(arg)(
        item.instance, 'mouseenter', item.getFn('mouseEnterOnItem')
      )
    );
  }

  private itemMouseLeaveListner = (arg: boolean, i) => {
    const item = i || this.prev()[0];

    return this.makeListner(arg)(
        item.instance, 'mouseleave', item.getFn('mouseLeaveFromItem')
      );
  }

  private itemMouseDownListner = (arg: boolean) => {
    return this.makeListner(arg)(window, 'mousedown', this.mouseDown);
  }

  private itemMouseUpListner = (arg: boolean) => {
    return this.makeListner(arg)(window, 'mouseup', this.mouseUp);
  }

  private listenCursorPosition = (arg: boolean) => {
    return this.makeListner(arg)(
      window, 'mousemove', this.handleCursorPosition
    );
  }

  private handleCursorPosition = (ev: MouseEvent) => {
    const item = this.prev()[0];
    // console.log('cursor');

    const { clientX, clientY } = ev;
    const top = this.dashboard.offsetTop;
    const bottom = top + this.dashboard.offsetHeight;
    const left = this.dashboard.offsetLeft;
    const right = left + this.dashboard.offsetWidth;

    const isOnDashboard = () => clientX > left && clientX < right && clientY > top && clientY < bottom;

    this.callbacks.onItemDragging.forEach(fn => fn(item, ev));

    if(isOnDashboard()) {
      if(!this.fsm.isDraggedOut()) {
        this.fsm.moveOut();
      }
    } else {
      if(!this.fsm.isDraggedIn()) {
        this.fsm.moveIn();
      }
    }
  }

  private activateInstance(i) {
    const item = this.items.find(item => item.instance === i);
    if(!item) return undefined;

    this.r.removeClass(item.instance, 'blocked');

    item.activate();
    return;
  }

  private mouseDown = (ev) => {
    // console.log('mouseDown');
    this.fsm.grab();

    const item = this.prev()[0];

    if(item.isCopy()) {
      this.monster.clear('eyes');
      this.removeActiveElement(item);

      return this.callbacks.onContainerClick.forEach(fn => fn(item.parent, ev));
    }

    this.callbacks.onItemClick.forEach(fn => fn(item, ev));
    return;
  }

  private mouseUp = (ev) => {
    // console.log('mouseUp');
    const item = this.prev()[0];
    this.callbacks.afterItemDropped.forEach(fn => fn(this, item, ev));

    if(this.fsm.isDraggedIn()) {
      if(item.isCopy()) {
        this.callbacks.afterItemPlaced.forEach(fn => fn(this, item, ev));
        return this.fsm.place();
      }

      if(this.activeElement) {
        this.activateInstance(this.activeElement.instance);
      };

      this.setActiveElement(item);

      this.callbacks.afterItemPlaced.forEach(fn => fn(this, item, ev));
      this.fsm.place()
      return;
    }
    if(this.fsm.isDraggedOut()) {

      if(item.isCopy()) {
        this.activateInstance(this.activeElement.instance);

        this.setActiveElement(null);

        this.fsm.destroy()
        return;
      }

      this.activateInstance(item.instance);
      this.fsm.destroy()
      return;
    }

    return;
  }

  private setActiveElement(i: ActiveElementModel) {
    this.activeElement = i;
    return;
  }

  public setFns(
    name: string,
    ...fns: any[]
  ): GameLogic {
    const oldFns = this.callbacks[name];
    this.callbacks[name] = [...oldFns, ...fns];
    return this;
  }
}
