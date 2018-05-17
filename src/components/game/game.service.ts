import { Renderer2 } from '@angular/core';
import { CursorState } from './cursor-state.service';
import { CursorPosition } from './cursor-position';
import { CursorPositionState } from './cursor-position-state';
import { ListnerRegister, ListnerConfig } from './listner-register.class';

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
  private cursor = new CursorState();
  private cursorOnScreen = new CursorPositionState();
  private register: ListnerRegister = new ListnerRegister();
  private r: Renderer2;
  protected position: CursorPosition = new CursorPosition();

  constructor(renderer) {
    this.r = renderer;

    this.triggerOnMouseMove(lib.bind('setPosition', this, this.position));
    this.triggerOnMouseOut(lib.bind('nullifyPosition', this, this.position));
    this.triggerOnMouseUp(lib.changeCursorStateToUp.bind(null, this.cursor));
    this.triggerOnMouseDown(lib.changeCursorStateToDown.bind(null, this.cursor));

    this.cursor.setFns('down', (...args) => { console.log(args) });
  }

  private triggerListner(
    event : string,
    fn: (event: any) => boolean | void
  ) {
    const config = { target: window, event, fn };

    if(this.register.has(config)) {

      (this.register.remove(config) as ListnerConfig).rmFunc();
      return;

    } else {

      const rmFunc = this.r.listen(window, (event as string), fn);

      this.register.add(
        ({ ...config, rmFunc } as ListnerConfig),
        (err, register) => {
          if(err) console.log(err);

          return;
      });
    }

    return;
  }

  private triggerOnMouseMove(fn: (event: any) => boolean | void) : void {
    this.triggerListner('mousemove', fn);
    return;
  }

  private triggerOnMouseDown(fn: (event: any) => boolean | void) : void {
    this.triggerListner('mousedown', fn);
    return;
  }

  private triggerOnMouseUp(fn: (event: any) => boolean | void) : void {
    this.triggerListner('mouseup', fn);
    return;
  }

  private triggerOnMouseOut(fn: (event: any) => boolean | void) : void {
    this.triggerListner('mouseout', fn);
    return;
  }

  private removeListners(): void {
    this.register.forEach(({ rmFunc }) => {
      if(!rmFunc) return;

      return setTimeout(rmFunc, 0);
    });

    this.register.clear();

    return;
  }
};
