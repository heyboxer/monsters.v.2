import { Injectable } from '@angular/core';
import { SoundModel } from './sound.model';

import SOUNDS from './sounds';


@Injectable()
export class SoundManagerService {
  protected lib: { [key: string] : SoundModel | SoundModel[] };
  protected current: SoundModel;
  protected state: Boolean = true;

  constructor() {
    this.lib = SOUNDS.filter(n => !n.monster).reduce((acc, cur) => {
      return { ...acc, [cur.name] : cur.item };
    }, {});


  }

  public turn(state: ('on' | 'off')) {
    switch (state) {
      case 'on':
        this.state = true;
        break;
      case 'off':
        this.state = false;
        break;
      default:
        this.state = false;
        break;
    }

    return;
  }

  public isOff() {
    return this.state === false;
  }

  public setCurrent(name) {
    const playing = this.isPlaying();

    if(playing) this.stop();

    this.current = this.lib[name] instanceof Array?
    (() => {
      const arr = (this.lib[name] as [SoundModel]);

      return arr[ Math.round(Math.random() * (arr.length - 1)) ];
    })() :
    (this.lib[name] as SoundModel);

    if(playing && !this.isOff()) this.play();

    return this;
  }

  public has( name ) {
    return !!this.lib[name];
  }

  public play() {
    if(!this.isPlaying() && !this.isOff()) this.current.play();

    return this;
  }

  public stop() {
    if(this.isPlaying()) this.current.stop();

    return this;
  }

  public isPlaying() {
    return this.current ? this.current.isPlaying() : false;
  }
}
