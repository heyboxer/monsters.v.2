import { Component, AfterViewInit, Renderer2, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { MonstersService } from '../../components/monsters/monsters.service';
import { GamePage } from '../game/game';

import { BackgroundTabletComponent } from './background/background-tablet.component';
import { BackgroundMobileComponent } from './background/background-mobile.component';
import runAnimations from './animations';

import { SoundManagerService } from '../../components/sound-toggler/sound-manager.service';

@Component({
  selector: 'select-page',
  templateUrl: 'select.html',
  providers: [ MonstersService ],
})
export class SelectPage implements AfterViewInit, OnDestroy {
  private monsters: { name, top?, left? }[];
  private stopAnimations: Function;

  @ViewChild(BackgroundTabletComponent) bg: BackgroundTabletComponent;
  @ViewChild(BackgroundMobileComponent) bgMobile: BackgroundMobileComponent;

  constructor(
    public navCtrl: NavController,
    private soundManagerService: SoundManagerService,
    private repo: MonstersService,
    private r: Renderer2,
    private platform: Platform) {
      this.monsters = this.repo.getMonsters().map(m => ({ name: m.name, id: m.id }));
    }

  ngOnDestroy() {
    this.soundManagerService.setCurrent('door');
    this.stopAnimations();
  }

  ngAfterViewInit() {
    this.soundManagerService.setCurrent('menu');

    this.monsters = this.repo.getMonsters().map(m => {
      const { top, left } = this.isIphone() ? this.bgMobile.find(m.name) : this.bg.find(m.name);

      return { name: m.name, top: Math.floor(top), left: Math.floor(left), id: m.id };
    });

    setTimeout(() => {
      this.stopAnimations = runAnimations();
    }, 1000);
  }

  isIphone() {
    return this.platform.is('iphone');
    // return true;
  }

  beginGame(monster) {
    this.navCtrl.push(GamePage, { monster: monster });
  }
}
