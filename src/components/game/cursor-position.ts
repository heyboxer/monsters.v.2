export class CursorPosition {
  private positionX: number;
  private positionY: number;
  private handlers: Function[] = [];

  constructor() {};

  public set(x, y) {
    this.positionX = x;
    this.positionY = y;

    if(this.handlers.length) {
      this.handlers.forEach(fn => {
        setTimeout(() => fn(this.get()), 0);
        return;
      });
    }

    return this;
  }

  public get(): { x: number, y: number } | undefined {
    return this.positionX && this.positionX ?
      { x: this.positionX, y: this.positionY } :
      undefined;
  }

  public setHandler(...fns: Function[]): CursorPosition {
    this.handlers = [...this.handlers, ...fns];
    return this;
  }

  public rmHandler(fn: Function) {
    this.handlers = this.handlers.filter( func => func !== fn );
    return this;
  }
}
