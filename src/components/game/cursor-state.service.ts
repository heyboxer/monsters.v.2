import StateMachine from 'javascript-state-machine';

export class CursorState {
  private state: StateMachine;
  private fnsRegister: {
    up: Function[],
    down: Function[],
    grab: Function[],
    drop: Function[],
  };

  constructor() {
    this.fnsRegister = { up: [], down: [], grab: [], drop: [] };

    this.state = new StateMachine({
      init: 'mouseup',
      transitions: [
        { name: 'down', from: 'mouseup', to: 'mousedown' },
        { name: 'up', from: 'mousedown', to: 'mouseup' },
        { name: 'grab', from: 'mousedown', to: 'grabbed' },
        { name: 'drop', from: 'grabbed', to: 'mouseup' },
      ],
      methods: {
        onDown: this.stateMethodsHandler('down'),
        onUp: this.stateMethodsHandler('up'),
        onGrab: this.stateMethodsHandler('grab'),
        onDrop: this.stateMethodsHandler('drop'),
      }
    });
  };

  private stateMethodsHandler = (name: string) : Function => {
    return (obj) => {
      return this.fnsRegister[name].forEach(fn => {
        return fn(obj, this);
      });
    };
  }

  public setFns(
    name: string,
    ...fns: ((state: Object, machine: CursorState) => any)[]
  ): CursorState {
    
    const oldFns = this.fnsRegister[name];
    this.fnsRegister[name] = [...oldFns, ...fns];

    return this;
  }

  up() {
    this.state.up();
    return this;
  }

  down() {
    this.state.down();
    return this;
  }
}
