import { Injectable } from '@angular/core';
import { SoundModel } from './sound.model';

import SOUNDS from './sounds';


@Injectable()
export class SoundManagerService {
  private lib: { [key: string] : SoundModel };
  private current: SoundModel;

  constructor() {
    this.lib = SOUNDS;
    this.setCurrent('door');
    this.play();
  }

  public setCurrent(name) {
    const playing = this.isPlaying();

    if(playing) this.stop();

    this.current = this.lib[name];

    if(playing) this.play();

    return this;
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
