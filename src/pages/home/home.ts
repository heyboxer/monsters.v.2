import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SelectPage } from '../select/select';
import { SoundManagerService } from '../../components/sound-toggler/sound-manager.service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    private soundManagerService: SoundManagerService,
    public navCtrl: NavController
  ) {
    soundManagerService.setCurrent('door');
  }

  select() {
    this.navCtrl.push(SelectPage);
  }
}
