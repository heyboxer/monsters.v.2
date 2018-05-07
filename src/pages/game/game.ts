import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import zombie from './temp-zombie';
import glasses from './temp-glasses';
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
  private glasses = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit() {
    const svg = zombie.builder.getDom();
    const gls = glasses.builder.getDom();

    gls.setAttribute('width', '200');
    gls.setAttribute('height', '100%');

    const target = document.getElementById('nb-target');
    const panel = document.getElementById('test');

    target.appendChild(svg);
    panel.appendChild(gls);

    const appendGlasses = () => this.appendGlasses();
    const removeGlasses = () => this.removeGlasses();

    gls.addEventListener('click', function(ev) {
      const el = this;
      ev.preventDefault();

      if(el.classList.contains('blocked')) {
        removeGlasses();
        el.classList.remove('blocked');
      } else {
        el.classList.add('blocked');
        appendGlasses();
      };


    });
  }

  removeGlasses() {
    const eyes = document.getElementsByClassName('eye');

    Array.from(eyes).forEach(v => {
      return v.setAttribute('visibility', 'visible');
    });

    return this.glasses.remove();
  }

  appendGlasses() {
    if(this.glasses) {
      this.removeGlasses();
    }

    const gls = glasses.builder.getDom();

    const element = document.getElementsByClassName('eyes').item(0);

    const { height, width, x, y } = element.getBBox();

    gls.setAttribute('width', width * 2);
    gls.setAttribute('height', height * 2);
    gls.setAttribute('x', x - width/2);
    gls.setAttribute('y', y - height/2);

    element.appendChild(gls);

    const eyes = document.getElementsByClassName('eye');

    Array.from(eyes).forEach(v => {
      return v.setAttribute('visibility', 'hidden');
    });

    this.glasses = gls;

    return;
  }

}
