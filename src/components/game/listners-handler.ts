import { Renderer2 } from '@angular/core';
import { ListnerRegister, ListnerConfig } from './listner-register.class';

export class ListnersHandler {
  private register: ListnerRegister = new ListnerRegister();

  constructor(
    private r: Renderer2
  ) {};

  public addListner(
    target,
    event : string,
    fn: (event: any) => boolean | void
  ) : Boolean {
    const config = { target, event, fn };

    if(!this.register.has(config)) {

      const rmFunc = this.r.listen(target, (event as string), fn);

      this.register.add(
        ({ ...config, rmFunc } as ListnerConfig),
        (err, register) => {
          if(err) console.log(err);

          return;
      });

      return true;

    };

    return false;
  }

  public removeListner(
    target,
    event : string,
    fn: (event: any) => boolean | void
  ): Boolean {
    const config = { target, event, fn };

    if(this.register.has(config)) {
      const config = { target, event, fn };

      (this.register.remove(config) as ListnerConfig).rmFunc();

      return true;
    }

    return false;

  }

  public removeListners(): void {
    this.register.forEach(({ rmFunc }) => {
      if(!rmFunc) return;

      return setTimeout(rmFunc, 0);
    });

    this.register.clear();

    return;
  }

}
