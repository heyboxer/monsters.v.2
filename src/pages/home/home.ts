import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SelectPage } from '../select/select';
import { SoundManagerService } from '../../components/sound-toggler/sound-manager.service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements AfterViewInit {

  constructor(
    private soundManagerService: SoundManagerService,
    public navCtrl: NavController
  ) {
  }

  ngAfterViewInit() {
    this.soundManagerService.setCurrent('door');
    this.soundManagerService.play();
  }

  select() {
    this.navCtrl.push(SelectPage);
  }
}
