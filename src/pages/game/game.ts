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
    this.monsterId = Math.round(Math.random() * (3 - 1) + 1);
//
  }

  ngAfterViewInit() {
    const instances = this.trinkets.getInstances();
    const parts = this.monsters.getCurrentMonster().getParts();
    const innerEyes = {
      renderer: this.renderer,
      eyeLeft: parts.find(p => p.type === 'eyeLeft').element,
      eyeRight: parts.find(p => p.type === 'eyeRight').element,
      close: function() {
        this.renderer.setAttribute(this.eyeLeft, 'visibility', 'hidden');
        this.renderer.setAttribute(this.eyeRight, 'visibility', 'hidden');
      },
      open: function() {
        this.renderer.setAttribute(this.eyeLeft, 'visibility',  'visible');
        this.renderer.setAttribute(this.eyeRight, 'visibility',  'visible');
      },
    }

    const eyes = parts.find(p => p.type === 'eyes' && p.name == 'eyes');
    const eyesContainer = parts.find(p => p.name === 'container');

    const dashboard = document.getElementById('panel');


    this.logic = new GameLogic(this.renderer, instances, dashboard, eyesContainer.element);

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
      ({ component }, ev) => {
        this.holder.loadComponent(component);
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
      ({ component }) => {
        // innerEyes.close();

        const { width, height, x, y } = (eyes.element as SVGGraphicsElement).getBBox();

        const viewContainerRef = eyes.viewContainerRef;
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);

        const ref = factory.create(this.injector, [], eyesContainer.element);
        this.app.attachView(ref.hostView);

        const glassesInstance = (ref.instance as { node }).node.firstChild;


        this.renderer.setAttribute(glassesInstance, 'width', (width * 2).toString());
        this.renderer.setAttribute(glassesInstance, 'height', (height * 2).toString());
        this.renderer.setAttribute(glassesInstance, 'x', (x - width/2).toString());
        this.renderer.setAttribute(glassesInstance, 'y', (y - height/2).toString());
      }
    )

  }

}
