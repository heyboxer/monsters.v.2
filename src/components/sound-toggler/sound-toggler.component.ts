import { Component, AfterViewInit, Input } from '@angular/core';

import { SoundManagerService } from './sound-manager.service';

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
      on: 'md-volume-up',
      off: 'md-volume-off',
    };

    this.iconName = icons[name] || icons.on;

    return this;
  }

  public play() {
    this.manager.play();
    this.setIcon('on');

    return;
  }

  public stop() {
    this.manager.stop();
    this.setIcon('off');

    return;
  }

  public toggle() {
    this.manager.isPlaying() ? this.stop() : this.play();

    return;
  }
}
