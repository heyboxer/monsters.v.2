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
    // this.monsterId = 3;
    this.monsterId = Math.round(Math.random() * (6 - 1) + 1);
//
  }

  ngAfterViewInit() {
    const instances = this.trinkets.getInstances();
    const parts = this.monsters.getCurrentMonster().getParts();

    const monster = this.monsters.getCurrentMonster();

    const eyes = monster.getGroup('eyes');
    const eyesContainer = monster.getContainer('eyes')

    const dashboard = document.getElementById('panel');

    this.logic = new GameLogic(this.renderer, instances, dashboard);

    const setHolderPosition = (ref, item, event) => {
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
      (items, item, ev) => {
        if(item.isCopy()) {
          const { after } = item.meta;
          after ? after(monster) : null;

          const parent = item.isCopy();
          monster.clear(item.meta.container);
          items.removeActiveElement(item);
          (item).deleteCopy();

          this.holder.loadComponent(parent.component);

          return;
        }

        item.deactivate();
        this.renderer.addClass(item.instance, 'blocked');
        this.holder.loadComponent(item.component);

        return;
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
      'afterItemPlaced',
      (items, item) => {
        const { before } = item.meta;

        before ? before(monster) : null;

        const { content } = monster.getContainer(item.meta.container);
        const { element } = monster.getGroup(item.meta.container);

        if(content) {
          const active = items.findActiveElementByInstance(content);
          const { after } = active.meta;

          after ? after(monster) : null;

          const parent = active.isCopy();
          parent.activate();
          this.renderer.removeClass(parent.instance, 'blocked');
          items.removeActiveElement(active);
        }

        const config = (element as SVGGraphicsElement).getBBox();

        monster.render(item.component, item.meta.container, (instance) => {
          const { attr } = item.meta;

          Object.keys(attr).forEach(name => {
            const funcs = attr[name];
            const fn = funcs[monster.name] || funcs['default'];
            this.renderer.setAttribute(instance, name, fn(config).toString());
            return;
          });

          const copy = items.addActiveElementCopy(item, instance);

          return;
        });
      }
    )

    this.logic.setFns(
      'afterItemDesroyed',
      (ref, item) => {
        const parent = item.isCopy();
        const el = parent ? parent : item;

        el.activate();
        this.renderer.removeClass(el.instance, 'blocked');
      }
    )

    this.logic.start();
  }

}
