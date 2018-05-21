import { Renderer2 } from '@angular/core';
import { CursorState } from './cursor-state.service';
import { CursorPosition } from './cursor-position';
import { CursorPositionState } from './cursor-position-state';
import { GameFinistStateMachine } from './game-fsm';
import { ListnerRegister, ListnerConfig } from './listner-register.class';
import { ListnersHandler } from './listners-handler';

const lib = {
  setPosition: function(register: CursorPosition, ev: MouseEvent) {
    return register.set(ev.clientX, ev.clientY);
  },

  nullifyPosition: function(register: CursorPosition) {
    return register.set(undefined, undefined);
  },

  changeCursorStateToDown: function(cursor: CursorState, ev: MouseEvent) {
    cursor.down();
  },

  changeCursorStateToUp: function(cursor: CursorState, ev: MouseEvent) {
    cursor.up();
  },

  bind: function (name: string, context: Object, ...args: any[]) {
    return (this[name]).bind(context, ...args);
  }
}

export abstract class Game {
  private cursor = new GameFinistStateMachine();
  private listners: ListnersHandler;
  // private cursorOnScreen = new CursorPositionState();
  private r: Renderer2;
  protected position: CursorPosition = new CursorPosition();

  constructor(renderer) {
    this.r = renderer;
    this.listners = new ListnersHandler(this.r);

    // this.triggerOnMouseMove(lib.bind('setPosition', this, this.position));
    // this.triggerOnMouseOut(lib.bind('nullifyPosition', this, this.position));
    // this.triggerOnMouseUp(lib.changeCursorStateToUp.bind(null, this.cursor));
    // this.triggerOnMouseDown(lib.changeCursorStateToDown.bind(null, this.cursor));

    // this.cursor.setFns('down', (...args) => { console.log(args) });
  }

  // private triggerOnMouseMove(fn: (event: any) => boolean | void) : void {
  //   this.listners.triggerListner(window, 'mousemove', fn);
  //   return;
  // }
  //
  // private triggerOnMouseDown(fn: (event: any) => boolean | void) : void {
  //   this.listners.triggerListner(window, 'mousedown', fn);
  //   return;
  // }
  //
  // private triggerOnMouseUp(fn: (event: any) => boolean | void) : void {
  //   this.listners.triggerListner(window, 'mouseup', fn);
  //   return;
  // }
  //
  // private triggerOnMouseOut(fn: (event: any) => boolean | void) : void {
  //   this.listners.triggerListner(window, 'mouseout', fn);
  //   return;
  // }

};
