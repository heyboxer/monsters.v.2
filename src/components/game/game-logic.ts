import { Renderer2, ComponentRef } from '@angular/core';

import { ActiveElementModel, ActiveElementDescendentModel } from './active-element.model';
import { ActiveElementRepository } from './active-element.repository'
import { GameFinistStateMachine } from './game-fsm';
import { ListnersHandler } from './listners-handler';

export class GameLogic {
  private fsm = new GameFinistStateMachine();
  private listners: ListnersHandler;
  private items: ActiveElementModel[] = [];
  private repo: ActiveElementRepository;

  constructor(
    private r: Renderer2,
    items: { node, component }[],
    dashboard: Function,
  ){
    this.listners = new ListnersHandler(this.r);

    this.repo = new ActiveElementRepository(this.fsm, dashboard, items);

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

  public stop() : this {
    this.itemsMouseEnterListners(false);
    return this;
  }

  public over() : this {
    this.listners.removeListners();
    this.repo.clear();
    return this;
  }

  private makeListner(arg: boolean) {
    return (e, ev, fn) =>
    this.listners[arg ? 'addListner' : 'removeListner'](e, ev, fn);
  }

  private itemsMouseEnterListners = (arg: boolean) => {
    const items = this.repo.getActive();

    return items.forEach(
      item => this.makeListner(arg)(
        item.instance, 'mouseenter', item.getFn('mouseEnterOnItem')
      )
    );
  }

  private itemMouseLeaveListner = (arg: boolean) => {
    const item = this.repo.getCurrent();

    return this.makeListner(arg)(
        item.instance, 'mouseleave', item.getFn('mouseLeaveFromItem')
      );
  }

  private itemMouseDownListner = (arg: boolean) => {
    const item = this.repo.getCurrent();

    return this.makeListner(arg)(window, 'mousedown', item.getFn('mouseDown'));
  }

  private itemMouseUpListner = (arg: boolean) => {
    const item = this.repo.getCurrent();

    return this.makeListner(arg)(window, 'mouseup', item.getFn('mouseUp'));
  }

  private listenCursorPosition = (arg: boolean) => {
    const item = this.repo.getCurrent();

    return this.makeListner(arg)(
      window, 'mousemove', item.getFn('handleCursorPosition')
    );
  }

  public setFns(name: string, ...fns: any[]): this {
    this.repo.setFns(name, ...fns);
    return this;
  }
}
