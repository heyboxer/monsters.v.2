import { Component, AfterViewInit, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { MonstersService } from '../../components/monsters/monsters.service';

import ElementsRepo from '../../model/element.repository';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage implements AfterViewInit, OnInit {
  private glasses = null;
  monsterId: string | number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.monsterId = 2;
  }

  ngAfterViewInit() {
    // const svg = zombie.builder.getDom();
    // const gls = glasses.builder.getDom();
    //
    // gls.setAttribute('width', '200');
    // gls.setAttribute('height', '100%');
    //
    // const target = document.getElementById('nb-target');
    // const panel = document.getElementById('test');
    //
    // target.appendChild(svg);
    // panel.appendChild(gls);
    //
    // const appendGlasses = () => this.appendGlasses();
    // const removeGlasses = () => this.removeGlasses();
    //
    // gls.addEventListener('click', function(ev) {
    //   const el = this;
    //   ev.preventDefault();
    //
    //   if(el.classList.contains('blocked')) {
    //     removeGlasses();
    //     el.classList.remove('blocked');
    //   } else {
    //     el.classList.add('blocked');
    //     appendGlasses();
    //   };
    //
    //
    // });
  }

  ngOnInit() {
    // this.monsters = this.monstersService.getMonsters();
    // console.log(this.monsters);
  }

  removeGlasses() {
    // const eyes = document.getElementsByClassName('eye');
    //
    // Array.from(eyes).forEach(v => {
    //   return v.setAttribute('visibility', 'visible');
    // });
    //
    // return this.glasses.remove();
  }

  appendGlasses() {
    // if(this.glasses) {
    //   this.removeGlasses();
    // }
    //
    // const gls = glasses.builder.getDom();
    //
    // const element = document.getElementsByClassName('eyes').item(0);
    //
    // const { height, width, x, y } = (element as SVGGraphicsElement).getBBox();
    //
    // gls.setAttribute('width', (width * 2).toString());
    // gls.setAttribute('height', (height * 2).toString());
    // gls.setAttribute('x', (x - width/2).toString());
    // gls.setAttribute('y', (y - height/2).toString());
    //
    // element.appendChild(gls);
    //
    // const eyes = document.getElementsByClassName('eye');
    //
    // Array.from(eyes).forEach(v => {
    //   return v.setAttribute('visibility', 'hidden');
    // });
    //
    // this.glasses = gls;
    //
    // return;
  }

}
