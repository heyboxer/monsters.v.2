export class SoundModel {
  private sound: HTMLMediaElement;
  private callback: Function;

  constructor(url, callback?) {
    this.sound = new Audio(url);

    if(callback) this.setCallback(callback);
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

  public setCallback(cb: Function) {
    this.sound.addEventListener('ended', cb.bind(this));

    return this;
  }

  public isPlaying() {
    return !this.sound.paused;
  }
}
