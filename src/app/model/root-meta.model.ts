export class RootMeta {
  public viewBox: Number[];
  public width: number | string;
  public height: number | string;

  constructor({ viewBox, width, height }) {
    this.viewBox = viewBox;
    this.width = width;
    this.height = height;
  }

  getViewBox() : string {
    return this.viewBox.join(' ');
  }

  getAttrs() : Object {
    return { width: this.width, height: this.height, viewBox: this.getViewBox() };
  }
}
