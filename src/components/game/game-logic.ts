import { Renderer2, ComponentRef } from '@angular/core';

import { ActiveElementModel, ActiveElementDescendentModel } from './active-element.model';
import { GameFinistStateMachine } from './game-fsm';
import { ListnersHandler } from './listners-handler';

export class GameLogic {
  private fsm = new GameFinistStateMachine();
  private listners: ListnersHandler;
  private lastActive: ActiveElementModel;
  private items: ActiveElementModel[] = [];

  private callbacks: {
    onItemClick: Function[];
    afterItemDropped: Function[];
    afterItemPlaced: Function[];
    afterItemDesroyed: Function[];
    onItemDragging: Function[];
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
      afterItemDesroyed: [],
      onItemDragging: [],
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

  private updateLast(arg: ActiveElementModel | null) :this {
    this.lastActive = arg;
    return this;
  }

  private getLast() {
    return this.lastActive;
  }

  public start() : this {
    this.itemsMouseEnterListners(true);
    return this;
  }

  public over() : this {
    this.listners.removeListners();
    return this;
  }

  private mouseEnterOnItem(item, ev) {
    this.updateLast(item);
    this.fsm.select();
    return;
  }

  private mouseLeaveFromItem(ev, element) {
    this.fsm.unselect();
    return;
  }

  private addActiveElement(element: ActiveElementModel) {
    element.addFn(
      'mouseEnterOnItem',
      this.mouseEnterOnItem.bind(this, element)
    );

    element.addFn(
      'mouseLeaveFromItem',
      this.mouseLeaveFromItem.bind(this, element)
    );

    this.items.push(element);

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

  private itemMouseLeaveListner = (arg: boolean) => {
    const item = this.getLast();

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
    const item = this.getLast();
    // console.log('cursor');

    const { clientX, clientY } = ev;
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
  }

  private mouseDown = (ev) => {
    // console.log('mouseDown');
    this.fsm.grab();

    const item = this.getLast();

    this.callbacks.onItemClick.forEach(fn => fn(this, item, ev));
    return;
  }

  private mouseUp = (ev) => {
    // console.log('mouseUp');
    const item = this.getLast();
    this.updateLast(null);
    this.callbacks.afterItemDropped.forEach(fn => fn(this, item, ev));


    if(this.fsm.isDraggedIn()) {
      this.callbacks.afterItemPlaced.forEach(fn => fn(this, item, ev));
      return this.fsm.place();
    }

    if(this.fsm.isDraggedOut()) {
      this.callbacks.afterItemDesroyed.forEach(fn => fn(this, item, ev));
      this.fsm.destroy()
      return;
    }
  }

  public setFns(name: string, ...fns: any[]): GameLogic {
    const oldFns = this.callbacks[name];
    this.callbacks[name] = [...oldFns, ...fns];
    return this;
  }
}
