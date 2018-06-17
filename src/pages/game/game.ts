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
      const { width: instanceW, height: instanceH } = item.instance.getBoundingClientRect();

      this.holder.setAttributes({
        style: `left: ${x}px; top: ${y}px; transform: translate(-50%, -50%)`,
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

          const parent = item.isCopy();

          if(!onScreen) {
            this.monster.clear(item.meta.getContainer(this.monster.name));
          } else {
            this.monsterComponent.remove(item.instance);
          }

          const holderInstance = this.holder.loadComponent(parent.component);

          if(random) {
            (holderInstance as { hide }).hide(item.randomArr);
          }

          items.removeActiveElement(item);
          (item).deleteCopy();

          after ? after(this.monster, items, item.instance) : null;

          return;
        }

        if(!multiple) {
          // item.deactivate();
          // this.renderer.addClass(item.instance, 'blocked');
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

            before ? before(this.monster, items, (instance as { node }).node) : null;

            const copy = items.addActiveElementCopy(item, (instance as { node }).node);

            if(this.monster.isOnMonster( instance.node.getBoundingClientRect() )) {
              copy.onMonster = true;
            }


            if(item.meta.random) {
              instance.hide(item.randomArr);
              copy.randomArr = item.randomArr;
              item.randomArr = null;
            }
          });

          return;
        }
        item.meta.getContainer()
        const { content } = this.monster.getContainer(item.meta.getContainer(this.monster.name));
        const { element } = this.monster.getGroup(item.meta.getContainer(this.monster.name));

        if( content ) {
          const contentElement = content.node.children.item(0);
          const active = items.findActiveElementByInstance(contentElement);
          const { after } = active.meta;


          const parent = active.isCopy();
          // parent.activate();
          // this.renderer.removeClass(parent.instance, 'blocked');

          items.removeActiveElement(active);
          after ? after(this.monster, items, item.instance) : null;
        }


        this.monster.render(item.component, item.meta.getContainer(this.monster.name), (instance, ref) => {

          const func = (instance, async?: boolean) => {
            before ? before(this.monster, items, instance) : null;

            const copy = items.addActiveElementCopy(item, instance);

            const config = (element as SVGGraphicsElement).getBBox();

            const { attr } = item.meta;

            Object.keys(attr).forEach(name => {
              const funcs = attr[name];
              const fn = funcs[this.monster.name] || funcs['default'];
              this.renderer.setAttribute(instance, name, fn(config).toString());
              return;
            });

            if(async) {
              this.logic.stop();
              this.logic.start();
            }

            return;
          }

          if(item.meta.uniq) {
            ref.instance.load(this.monster.name);
            ref.instance.getInstance((node) => {
              const svg = node.children.item(0);

              func(svg, true);
            });
          } else {
            const instanceElement = instance.node.children.item(0);
            func(instanceElement);
            return;
          }
        });
      }
    )

    this.logic.setFns(
      'afterItemDesroyed',
      (ref, item) => {
        const parent = item.isCopy();
        const el = parent ? parent : item;

        // el.activate();
        // this.renderer.removeClass(el.instance, 'blocked');
      }
    )

    this.logic.setFns(
      'afterClear',
      (ref, items) => {
        items.forEach(el => {
          // el.activate();
          // this.renderer.removeClass(el.instance, 'blocked');
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
