import { Component, AfterViewInit, OnInit, ViewChild, Renderer2, ContentChild, ViewContainerRef, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { TrinketsComponent } from '../../components/trinkets/trinkets.component';
import { MonstersComponent } from '../../components/monsters/monsters.component';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Game } from '../../components/game/game.service';
import { GameLogic } from '../../components/game/game-logic';
import { ItemHolderComponent } from '../../components/item-holder/item-holder.component';
// import { CursorStateService } from '../../components/game/cursor-state.service';


// import { MonstersService } from '../../components/monsters/monsters.service';

import ElementsRepo from '../../model/element.repository';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
  providers: [],
})
export class GamePage extends Game implements AfterViewInit {
  private glasses = null;
  monsterId: string | number;
  private logic: GameLogic;

  @ViewChild( TrinketsComponent ) trinkets: TrinketsComponent;
  @ViewChild( MonstersComponent ) monsters: MonstersComponent;
  @ViewChild( ItemHolderComponent ) holder: ItemHolderComponent;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    readonly renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef
  ) {
    super(renderer);
    this.monsterId = 2;
    // this.monsterId = Math.round(Math.random() * (3 - 1) + 1);
//
  }

  ngAfterViewInit() {
    const instances = this.trinkets.getInstances();
    const parts = this.monsters.getCurrentMonster().getParts();
    const innerEyes = {
      renderer: this.renderer,
      // eyeLeft: parts.find(p => p.type === 'eyeLeft').element,
      // eyeRight: parts.find(p => p.type === 'eyeRight').element,
      close: function() {
        this.renderer.setAttribute(this.eyeLeft, 'visibility', 'hidden');
        this.renderer.setAttribute(this.eyeRight, 'visibility', 'hidden');
      },
      open: function() {
        this.renderer.setAttribute(this.eyeLeft, 'visibility',  'visible');
        this.renderer.setAttribute(this.eyeRight, 'visibility',  'visible');
      },
    }

    const monster = this.monsters.getCurrentMonster();

    const eyes = monster.getGroup('eyes');
    const eyesContainer = monster.getContainer('eyes')

    const dashboard = document.getElementById('panel');


    this.logic = new GameLogic(this.renderer, instances, this.monsters.getCurrentMonster(), dashboard, eyesContainer.element);

    const setHolderPosition = (item, event) => {
      const { clientX: x, clientY: y } = (event as MouseEvent);
      const { width, height } = this.holder.getSize();

      this.holder.setAttributes({
        style: `left: ${x - width / 2}px; top: ${y - height / 2}px`,
      });
    };

    this.logic.setFns(
      'onItemDragging',
      setHolderPosition,
    );

    this.logic.setFns(
      'onItemClick',
      (item, ev) => {
        item.deactivate();
        this.renderer.addClass(item.instance, 'blocked');
        this.holder.loadComponent(item.component);
      },
      setHolderPosition,
    );

    this.logic.setFns(
      'afterItemDropped',
      () => {
        this.holder.clear();
      },
    );

    this.logic.setFns(
      'onContainerClick',
      ({ component }, ev) => {
        this.holder.loadComponent(component);
      },
      () => {
        // innerEyes.open();
      },
    );

    this.logic.setFns(
      'afterItemPlaced',
      (ref, item) => {
        // innerEyes.close();

        const { width, height, x, y } = (eyes.element as SVGGraphicsElement).getBBox();

        monster.render(item.component, 'eyes', (instance) => {
          this.renderer.setAttribute(instance, 'width', (width * 2).toString());
          this.renderer.setAttribute(instance, 'height', (height * 2).toString());
          this.renderer.setAttribute(instance, 'x', (x - width/2).toString());
          this.renderer.setAttribute(instance, 'y', (y - height/2).toString());

          ref.AddActiveElementCopy(item, instance);

          return;
        });
      }
    )

    this.logic.start();

  }

}
