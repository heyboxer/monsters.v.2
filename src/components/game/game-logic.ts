import { Renderer2 } from '@angular/core';
import { GameFinistStateMachine } from './game-fsm';
import { ListnersHandler } from './listners-handler';
import { CursorPosition } from './cursor-position';

const lib = {
  mouseEnterOnItem: function(instance, ev) {
    // console.log('mouseEnter');
    this.next(instance);
    this.fsm.select();
  },

  mouseLeaveFromItem: function(instance, ev) {
    // console.log('mouseLeave');
    this.fsm.unselect();
  },
}

export class GameLogic {
  private fsm = new GameFinistStateMachine();
  private listners: ListnersHandler;
  private activeElement: HTMLElement;
  private items: { instance, mouseEnterOnItem, mouseLeaveFromItem, component, deactivated }[];
  private prev: Function = () => {};
  private container;
  private callbacks: {
    onItemClick: Function[];
    afterItemDropped: Function[];
    afterItemPlaced: Function[];
    onItemDragging: Function[];
    onContainerClick: Function[];
  };

  constructor(
    private r: Renderer2,
    items: any[],
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

    this.container = {
      instance: container,
      mouseEnterOnItem: lib.mouseEnterOnItem.bind(this, container),
      mouseLeaveFromItem: lib.mouseLeaveFromItem.bind(this, container),
    }

    this.items = items.map(
      item => ({
        instance: item.node,
        component: item.component,
        deactivated: false,
        mouseEnterOnItem: lib.mouseEnterOnItem.bind(this, item.node),
        mouseLeaveFromItem: lib.mouseLeaveFromItem.bind(this, item.node),
      })
    );

    this.itemsMouseEnterListners(true);

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

  private next = (...args: any[]) => {
    this.prev = () => {
      return args;
    };
    return;
  }

  private itemsMouseEnterListners = (arg: boolean) => {
    const items = this.items.filter(item => !item.deactivated);

    if(this.activeElement) {
      const { instance, mouseEnterOnItem } = this.container;

      arg ?
        this.listners.addListner(instance, 'mouseenter', mouseEnterOnItem) :
        this.listners.removeListner(instance, 'mouseenter', mouseEnterOnItem);
    }

    return items.forEach(({ instance, mouseEnterOnItem }) => {
      return arg ?
        this.listners.addListner(instance, 'mouseenter', mouseEnterOnItem) :
        this.listners.removeListner(instance, 'mouseenter', mouseEnterOnItem);
    });
  }

  private itemMouseLeaveListner = (arg: boolean, i) => {
    const inst = i || this.prev()[0];

    if(inst === this.container.instance) {
      const { instance, mouseLeaveFromItem } = this.container;
      return arg ?
        this.listners.addListner(instance, 'mouseleave', mouseLeaveFromItem) :
        this.listners.removeListner(instance, 'mouseleave', mouseLeaveFromItem);
    }

    const { instance, mouseLeaveFromItem } = this.items.find(el => el.instance === inst);
    return arg ?
      this.listners.addListner(instance, 'mouseleave', mouseLeaveFromItem) :
      this.listners.removeListner(instance, 'mouseleave', mouseLeaveFromItem);
  }

  private itemMouseDownListner = (arg: boolean) => {
    return arg ?
      this.listners.addListner(window, 'mousedown', this.mouseDown) :
      this.listners.removeListner(window, 'mousedown', this.mouseDown);
  }

  private itemMouseUpListner = (arg: boolean) => {
    return arg ?
      this.listners.addListner(window, 'mouseup', this.mouseUp) :
      this.listners.removeListner(window, 'mouseup', this.mouseUp);
  }

  private listenCursorPosition = (arg: boolean) => {
    return arg ?
      this.listners.addListner(window, 'mousemove', this.handleCursorPosition) :
      this.listners.removeListner(window, 'mousemove', this.handleCursorPosition);
  }

  private handleCursorPosition = (ev: MouseEvent) => {
    const inst = this.prev()[0];
    const item = this.items.find(item => item.instance === inst);
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

    item.deactivated = false;
    return;
  }

  private deactivateInstance(i) {
    const item = this.items.find(item => item.instance === i);
    if(!item) return undefined;

    this.r.addClass(item.instance, 'blocked');

    item.deactivated = true;
    return;
  }

  private mouseDown = (ev) => {
    // console.log('mouseDown');
    this.fsm.grab();

    const inst = this.prev()[0];

    if(inst === this.container.instance) {
      const item = this.items.find(item => item.instance === this.activeElement);

      const children = Array.from(this.container.instance.children);
      children.forEach(ch => {
        this.r.removeChild(this.container.instance, ch);
      });

      return this.callbacks.onContainerClick.forEach(fn => fn(item, ev));
    }
    const item = this.items.find(item => item.instance === inst);
    this.callbacks.onItemClick.forEach(fn => fn(item, ev));

    this.deactivateInstance(inst);
    return;
  }

  private mouseUp = (ev) => {
    // console.log('mouseUp');
    const inst = this.prev()[0];
    const item = this.items.find(item => item.instance === inst);
    this.callbacks.afterItemDropped.forEach(fn => fn(item, ev));

    if(this.fsm.isDraggedIn()) {
      if(inst === this.container.instance) {
        const item = this.items.find(item => item.instance === this.activeElement);
        this.callbacks.afterItemPlaced.forEach(fn => fn(item, ev));
        return this.fsm.place();
      }

      if(this.activeElement) {
        this.activateInstance(this.activeElement);
      };

      this.setActiveElement(inst);

      this.callbacks.afterItemPlaced.forEach(fn => fn(item, ev));
      return this.fsm.place();
    }
    if(this.fsm.isDraggedOut()) {

      if(inst === this.container.instance) {
        this.activateInstance(this.activeElement);

        this.setActiveElement(null);

        return this.fsm.destroy();
      }

      this.activateInstance(inst);
      return this.fsm.destroy();
    }

    return;
  }

  private setActiveElement(i: HTMLElement) {
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
