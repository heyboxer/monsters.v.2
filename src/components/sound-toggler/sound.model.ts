export class SoundModel {
  private sound: HTMLMediaElement;

  constructor(url, callback?) {
    this.sound = new Audio(url);

    if(callback) this.sound.addEventListener('ended', callback.bind(this));
  }

  public play() {
    this.sound.play();

    return this;
  }

  public stop() {
    this.sound.pause();
    this.sound.currentTime = 0;

    return this;
  }

  public setVolume(value : number) {
    this.sound.volume = value;

    return this;
  }

  public isPlaying() {
    return !this.sound.paused;
  }
}
