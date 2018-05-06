import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import zombie from './temp-zombie';
import ElementsRepository from '../../app/model/elements.repository';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage implements AfterViewInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit() {
    const svg = zombie.builder.getDom();

    const target = document.getElementById('nb-target');

    target.appendChild(svg);

    const element = zombie.ast;

    console.log(ElementsRepository);
  }

}
