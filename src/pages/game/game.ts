import { Component, AfterViewInit, OnInit, ViewChild, Renderer2, ContentChild, ViewContainerRef, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { TrinketsComponent } from '../../components/trinkets/trinkets.component';
import { MonstersComponent } from '../../components/monsters/monsters.component';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Game } from '../../components/game/game.service';
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
  }

  ngAfterViewInit() {
    const instances = this.trinkets.getInstances();

    const setHolderPosition = () => {
      const { x,y } = this.position.get();
      const { width, height } = this.holder.getSize();

      this.holder.setAttributes({
        style: `left: ${x - width / 2}px; top: ${y - height / 2}px`,
      });
    };

    var glassesOn = false;
    const displayH = document.getElementById('nb-target').offsetHeight;

    const isOnDisplay = (y) => displayH > y ? true : false;

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

    const instanceFunc = ({ component, node }) => {
      const rmMouseDown = this.renderer.listen(node, 'mousedown', (ev) => {
        this.holder.loadComponent(component);
        setHolderPosition();

        this.renderer.addClass(node, 'blocked');
        const unblock = this.renderer.listen(node, 'click', (ev) => ev.preventDefault());

        const rmMouseMove = this.renderer.listen(window, 'mousemove', setHolderPosition);

        const rmMouseUp = this.renderer.listen(window, 'mouseup', ({ clientY }) => {
          if(isOnDisplay(clientY)) {
            this.holder.clear();
            rmMouseMove();
            rmMouseUp();
            rmMouseDown();

            glassesOn = true;

            innerEyes.close();

            const { width, height, x, y } = (eyes.element as SVGGraphicsElement).getBBox();

            const viewContainerRef = eyes.viewContainerRef;
            const factory = this.componentFactoryResolver.resolveComponentFactory(component);

            const ref = factory.create(this.injector, [], eyesContainer.element);
            this.app.attachView(ref.hostView);

            // const { instance } = viewContainerRef.createComponent(factory);
            const glassesInstance = ref.instance.node.firstChild;


            this.renderer.setAttribute(glassesInstance, 'width', (width * 2).toString());
            this.renderer.setAttribute(glassesInstance, 'height', (height * 2).toString());
            this.renderer.setAttribute(glassesInstance, 'x', (x - width/2).toString());
            this.renderer.setAttribute(glassesInstance, 'y', (y - height/2).toString());
          } else {
            this.renderer.removeClass(node, 'blocked');
            this.holder.clear();
            unblock();
            rmMouseMove();
            rmMouseUp();
          }
          return;
        });

        return;
      });
    }

    instances.forEach(instanceFunc);


    // this.holder.loadComponent(component);

    // this.holder.clear();

  }

}
