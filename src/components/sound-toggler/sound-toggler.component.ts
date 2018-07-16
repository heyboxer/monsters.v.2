import { Component, Input, AfterViewInit } from '@angular/core';

import { SoundManagerService } from './sound-manager.service';

@Component({
  selector: 'sound-toggler',
  templateUrl: 'sound-toggler.component.html',
  providers: [ SoundManagerService ]
})
export class SoundTogglerComponent {
  private iconName: string;
  constructor(private soundManagerService: SoundManagerService) {
    this.setIcon('on');
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
    this.soundManagerService.play();
    this.setIcon('on');

    return;
  }

  public stop() {
    this.soundManagerService.stop();
    this.setIcon('off');

    return;
  }

  public toggle() {
    this.soundManagerService.isPlaying() ? this.stop() : this.play();

    return;
  }
}
