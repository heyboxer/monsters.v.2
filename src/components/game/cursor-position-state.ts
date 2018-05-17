import StateMachine from 'javascript-state-machine';

export class CursorPositionState {
  private state: StateMachine;
  private fnsRegister: {
    toDisplay: Function[],
    toDisplayBorder: Function[],
    toDashboard: Function[],
    goOut: Function[],
  };

  constructor() {
    this.fnsRegister = { toDisplay: [], toDashboard: [], toDisplayBorder: [], goOut: [] };

    this.state = new StateMachine({
      init: 'out',
      transitions: [
        { name: 'goOut', from: 'onDisplayBorder', to: 'outScreen' },
        { name: 'goOut', from: 'onDisplay', to: 'outScreen' },
        { name: 'goOut', from: 'onDashboard', to: 'outScreen' },
        { name: 'toDisplayBorder', from: 'outScreen', to: 'onDisplayBorder' },
        { name: 'toDisplayBorder', from: 'onDashboard', to: 'onDisplayBorder' },
        { name: 'toDisplayBorder', from: 'onDisplay', to: 'onDisplayBorder' },
        { name: 'toDisplay', from: 'onDisplayBorder', to: 'onDisplay' },
        { name: 'toDisplay', from: 'onDashboard', to: 'onDisplay' },
        { name: 'toDashboard', from: 'onDisplayBorder', to: 'onDashboard' },
        { name: 'toDashboard', from: 'outScreen', to: 'onDashboard' },
        { name: 'toDashboard', from: 'onDisplay', to: 'onDashboard' },
      ],
      methods: {
        onGoOut: this.stateMethodsHandler('out'),
        onToDisplayBorder: this.stateMethodsHandler('displayBorder'),
        onToDisplay: this.stateMethodsHandler('display'),
        onToDashboard: this.stateMethodsHandler('dashboard'),
      }
    });
  }

  private stateMethodsHandler = (name: string) : Function => {
    return (obj) => {
      return this.fnsRegister[name].forEach(fn => {
        return fn(obj, this);
      });
    };
  }

  public setFns(
    name: string,
    ...fns: ((state: Object, machine: CursorPositionState) => any)[]
  ): CursorPositionState {

    const oldFns = this.fnsRegister[name];
    this.fnsRegister[name] = [...oldFns, ...fns];

    return this;
  }

  public toDashboard() {
    this.state.toDashboard();
    return this;
  }
  public toDisplay() {
    this.state.toDisplay();
    return this;
  }
  public toDisplayBorder() {
    this.state.toDisplayBorder();
    return this;
  }
  public goOut() {
    this.state.goOut();
    return this;
  }
}
