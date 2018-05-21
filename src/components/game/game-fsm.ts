import StateMachine from 'javascript-state-machine';

export class GameFinistStateMachine {
  private state: StateMachine;
  private fnsRegister: {
    select: Function[],
    unselect: Function[],
    grab: Function[],
    moveIn: Function[],
    moveOut: Function[],
    destroy: Function[],
    place: Function[],
  };

  constructor() {
    this.fnsRegister = { select: [], grab: [], moveIn: [], moveOut: [], destroy: [], place: [], unselect: [] };

    this.state = new StateMachine({
      init: 'idle',
      transitions: [
        { name: 'select', from: 'idle', to: 'itemSelected' },
        { name: 'unselect', from: 'itemSelected', to: 'idle' },
        { name: 'grab', from: 'itemSelected', to: 'draggedOut' },
        { name: 'moveIn', from: 'draggedOut', to: 'draggedIn' },
        { name: 'moveOut', from: 'draggedIn', to: 'draggedOut' },
        { name: 'destroy', from: 'draggedOut', to: 'idle' },
        { name: 'place', from: 'draggedIn', to: 'idle' },
      ],
      methods: {
        onSelect: this.stateMethodsHandler('select'),
        onUnselect: this.stateMethodsHandler('unselect'),
        onGrab: this.stateMethodsHandler('grab'),
        onMoveIn: this.stateMethodsHandler('moveIn'),
        onMoveOut: this.stateMethodsHandler('moveOut'),
        onDestroy: this.stateMethodsHandler('destroy'),
        onPlace: this.stateMethodsHandler('place'),
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
    ...fns: ((state: Object, machine: GameFinistStateMachine) => any)[]
  ): GameFinistStateMachine {
    const oldFns = this.fnsRegister[name];
    this.fnsRegister[name] = [...oldFns, ...fns];
    return this;
  }

  select() {
    this.state.select();
    return this;
  }

  unselect() {
    this.state.unselect();
    return this;
  }

  grab() {
    this.state.grab();
    return this;
  }

  moveOut() {
    this.state.moveOut();
    return this;
  }

  moveIn() {
    this.state.moveIn();
    return this;
  }

  destroy() {
    this.state.destroy();
    return this;
  }

  place() {
    this.state.place();
    return this;
  }

  isIdle() {
    return this.state.is('idle');
  }
  isDraggedOut() {
    return this.state.is('draggedOut');
  }
  isDraggedIn() {
    return this.state.is('draggedIn');
  }
}
