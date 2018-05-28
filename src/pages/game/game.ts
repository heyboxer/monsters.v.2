import { Component, AfterViewInit, OnInit, ViewChild, Renderer2, ContentChild, ViewContainerRef, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { TrinketsComponent } from '../../components/trinkets/trinkets.component';
import { MonstersComponent } from '../../components/monsters/monsters.component';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Game } from '../../components/game/game.service';
import { GameLogic } from '../../components/game/game-logic';
import { ItemHolderComponent } from '../../components/item-holder/item-holder.component';




@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
  providers: [],
})
export class GamePage extends Game implements AfterViewInit {
  private monsterId: string | number;
  private monster;
  private logic: GameLogic;

  @ViewChild( TrinketsComponent ) trinkets: TrinketsComponent;
  @ViewChild( MonstersComponent ) monsterComponent: MonstersComponent;
  @ViewChild( ItemHolderComponent ) holder: ItemHolderComponent;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    readonly renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef
  ) {
    super(renderer);
    this.monsterId = this.params.get('monster');
  }

  ngAfterViewInit() {
    this.monster = this.monsterComponent.getCurrentMonster();

    const instances = this.trinkets.getInstances();

    const canPlace = (ev) => {
      const { clientX, clientY } = (ev as MouseEvent);
      const dashboard = document.getElementById('panel');
      const top = dashboard.offsetTop;
      const bottom = top + dashboard.offsetHeight;
      const left = dashboard.offsetLeft;
      const right = left + dashboard.offsetWidth;

      const isOnDashboard = () => clientX > left && clientX < right && clientY > top && clientY < bottom;

      const { clientHeight: bodyH, clientWidth: bodyW } = document.getElementsByTagName('body').item(0);

      const isNearEdges = (p) => {
        return clientX < p || clientX > bodyW - p || clientY < p || clientY > bodyH - p;
      };

      return isOnDashboard() || isNearEdges(40);
    };

    this.logic = new GameLogic(this.renderer, instances, canPlace);

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
          after ? after(this.monster) : null;

          const parent = item.isCopy();
          this.monster.clear(item.meta.container);
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

        before ? before(this.monster) : null;

        const { content } = this.monster.getContainer(item.meta.container);
        const { element } = this.monster.getGroup(item.meta.container);

        if(content) {
          const active = items.findActiveElementByInstance(content);
          const { after } = active.meta;

          after ? after(this.monster) : null;

          const parent = active.isCopy();
          parent.activate();
          this.renderer.removeClass(parent.instance, 'blocked');
          items.removeActiveElement(active);
        }

        const config = (element as SVGGraphicsElement).getBBox();

        this.monster.render(item.component, item.meta.container, (instance) => {
          const { attr } = item.meta;

          Object.keys(attr).forEach(name => {
            const funcs = attr[name];
            const fn = funcs[this.monster.name] || funcs['default'];
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

    this.logic.setFns(
      'afterClear',
      (ref, items) => {
        items.forEach(el => {
          el.activate();
          this.renderer.removeClass(el.instance, 'blocked');
        })
      }
    )

    this.logic.start();
  }

  endGame() {
    this.logic.over();
    this.holder.clear();
    this.navCtrl.pop();
  }

  reset() {
    this.logic.over();
    this.holder.clear();
    this.monster.clearAll();
    this.logic.start();
  }

}
