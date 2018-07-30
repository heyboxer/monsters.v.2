import { Injectable } from '@angular/core';
import { SoundModel } from './sound.model';

import SOUNDS from './sounds';


@Injectable()
export class SoundManagerService {
  protected lib: { [key: string] : SoundModel | SoundModel[] };
  protected current: SoundModel;

  constructor() {
    this.lib = SOUNDS.filter(n => !n.monster).reduce((acc, cur) => {
      return { ...acc, [cur.name] : cur.item };
    }, {});
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

    if(playing) this.play();

    return this;
  }

  public has( name ) {
    return !!this.lib[name];
  }

  public play() {
    if(!this.isPlaying()) this.current.play();

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
