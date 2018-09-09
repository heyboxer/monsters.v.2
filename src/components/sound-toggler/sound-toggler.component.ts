import { Component, AfterViewInit, Input } from '@angular/core';
import { Platform } from 'ionic-angular';

import { SoundManagerService } from './sound-manager.service';

@Component({
  selector: 'sound-toggler',
  templateUrl: 'sound-toggler.component.html',
  providers: [ SoundManagerService ]
})
export class SoundTogglerComponent implements AfterViewInit {
  private iconName: string;
  private beenPaused: boolean = false;

  @Input('manager') manager: SoundManagerService;

  constructor(public platform: Platform) {
    this.platform.ready().then(() => {
      this.platform.pause.subscribe(() => {
        if(this.manager.isPlaying()) {
          this.stop();

          this.beenPaused = true;
        }

        return;
      });

      this.platform.resume.subscribe(() => {
        if(this.beenPaused) {
          this.play();

          this.beenPaused = false;
        }

        return;
      });
    });
  }

  ngAfterViewInit() {
    this.manager.isOff() ? this.setIcon('off') : this.setIcon('on');

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
    !this.manager.isOff() ? this.stop() : this.play();

    return;
  }
}
