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
        const { after, multiple, onScreen, random } = item.meta;

        if(item.isCopy()) {
          after ? after(this.monster) : null;

          const parent = item.isCopy();

          if(!onScreen) {
            this.monster.clear(item.meta.container);
          } else {
            this.monsterComponent.remove(item.instance);
          }

          const holderInstance = this.holder.loadComponent(parent.component);

          if(random) {
            (holderInstance as { hide }).hide(item.randomArr);
          }

          items.removeActiveElement(item);
          (item).deleteCopy();

          return;
        }

        if(!multiple) {
          item.deactivate();
          this.renderer.addClass(item.instance, 'blocked');
        }

        const holderInstance = this.holder.loadComponent(item.component);

        if(random) {
          const selected = (holderInstance as { randomize }).randomize((selected) => {
            item.randomArr = selected;
          });
        }

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
      (items, item, ev) => {
        const { before, multiple, onScreen } = item.meta;

        if(onScreen) {
          this.monsterComponent.render(item.component, (instance) => {
            const { style: position } = (this.holder.getAttributes() as { style });

            const style = `position: absolute; z-index: 11; ${position}`;

            this.renderer.setAttribute((instance as { node }).node, 'style', style);

            const copy = items.addActiveElementCopy(item, (instance as { node }).node);

            before ? before(this.monster, this.monsterComponent, copy.instance) : null;

            if(item.meta.random) {
              instance.hide(item.randomArr);
              copy.randomArr = item.randomArr;
              item.randomArr = null;
            }
          });

          return;
        }

        const { content } = this.monster.getContainer(item.meta.container);
        const { element } = this.monster.getGroup(item.meta.container);

        if(content) {
          const active = items.findActiveElementByInstance(content);
          const { after } = active.meta;

          after ? after(this.monster, this.monsterComponent, item.instance) : null;

          const parent = active.isCopy();
          parent.activate();
          this.renderer.removeClass(parent.instance, 'blocked');
          items.removeActiveElement(active);
        }


        this.monster.render(item.component, item.meta.container, (instance) => {
          const copy = items.addActiveElementCopy(item, instance);

          before ? before(this.monster, this.monsterComponent, copy.instance) : null;

          const config = (element as SVGGraphicsElement).getBBox();

          const { attr } = item.meta;

          Object.keys(attr).forEach(name => {
            const funcs = attr[name];
            const fn = funcs[this.monster.name] || funcs['default'];
            this.renderer.setAttribute(instance, name, fn(config).toString());
            return;
          });

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
    this.monster.clearAll();
    this.monsterComponent.clearAll();
    this.navCtrl.pop();
  }

  reset() {
    this.logic.over();
    this.holder.clear();
    this.monster.clearAll();
    this.monsterComponent.clearAll();
    this.logic.start();
  }

}
