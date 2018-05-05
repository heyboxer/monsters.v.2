export class RootMeta {
  public viewBox: Number[];
  public width: number | string;
  public height: number | string;
  public className: string;

  constructor({ viewBox, width, height, className }) {
    this.viewBox = viewBox;
    this.width = width;
    this.height = height;
    this.className = className;
  }

  getViewBox() : string {
    return this.viewBox.join(' ');
  }

  getAttrs() : Object {
    return {
      width: this.width,
      height: this.height,
      viewBox: this.getViewBox(),
      class: this.className,
    };
  }
}
