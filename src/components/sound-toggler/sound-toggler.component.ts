import { Component, AfterViewInit, Input } from '@angular/core';

import { SoundManagerService } from './sound-manager.service';
// import { Sound}

@Component({
  selector: 'sound-toggler',
  templateUrl: 'sound-toggler.component.html',
  providers: [ SoundManagerService ]
})
export class SoundTogglerComponent implements AfterViewInit {
  private iconName: string;
  @Input('manager') manager: SoundManagerService;

  constructor() {
  }

  ngAfterViewInit() {
    this.setIcon('on');

    return;
  }

  private setIcon(name: string) {
    const icons = {
      on: 'btn',
      off: 'btn btn--no-sound',
    };

    this.iconName = icons[name] || icons.on;

    return this;
  }

  public play() {
    this.manager.turn('on');
    this.manager.play();
    this.setIcon('on');

    return;
  }

  public stop() {
    this.manager.turn('off');
    this.manager.stop();
    this.setIcon('off');

    return;
  }

  public toggle() {
    console.log(this.manager.isOff());

    !this.manager.isOff() ? this.stop() : this.play();

    return;
  }
}
