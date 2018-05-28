import { Component, ElementRef, Renderer2, ComponentFactoryResolver, Injector, ApplicationRef, AfterViewInit } from '@angular/core';
import { MonsterModel } from '../monster.model';

// @ts-ignore: Unreachable code error
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

const aniamtions = function(instance) {
  const root = Snap(instance);

  const config = {
  	pupilL: {begin: 74.18, end: 64.18},
    pupilR: {begin: 142.93, end: 132.93},
    lids: {begin: 64, end: 97.54}
  }

  return {
    blink: () => {
      const lids = this.getParts(p => p.name === 'lid')
        .map(({element}) => Snap(element));

      return () => {
      	lids.forEach(l => {
          l.animate({cy: config.lids.end,}, 42, () => {
          	l.animate({cy: config.lids.begin,}, 84);
          });
        })
      }
    },
    eyesMovement: () => {
      const pupils = this.getParts(p => p.name === 'pupil')
        .reduce((acc, { mod, element }) => {
          return { ...acc, [mod]: Snap(element) };
        }, {});

      const animatePupilRightForward = () => pupils.right.animate({cx: config.pupilR.end,}, 100);
      const animatePupilLeftForward = () => pupils.left.animate({cx: config.pupilL.end,}, 100);

      const animatePupilRightBackward = () => pupils.right.animate({cx: config.pupilR.begin,}, 250);
      const animatePupilLeftBackward = () => pupils.left.animate({cx: config.pupilL.begin,}, 250);

      return () => {
        animatePupilRightForward();
        animatePupilLeftForward();

        setTimeout(() => {
          animatePupilRightBackward();
          animatePupilLeftBackward();
        }, 588);
      };
    }
  }
}


@Component({
  selector: 'zombie',
  templateUrl: 'zombie.html'
})
export class ZombieComponent extends MonsterModel implements AfterViewInit {
  private snap;

  constructor(el: ElementRef, protected renderer: Renderer2,  componentFactoryResolver: ComponentFactoryResolver, injector: Injector,
  app: ApplicationRef) {
    super('zombie', el.nativeElement, componentFactoryResolver, injector, app);
  }


  ngAfterViewInit() {
    this.snap = aniamtions.bind(this)(this.getRoot());
  }

  public animate() {
    const eyesMovement = this.snap.eyesMovement();
    const blink = this.snap.blink();

    const timeLine = () => {
    	setTimeout(blink, 0);
      setTimeout(blink, 966);
      setTimeout(eyesMovement, 1680);
    }

    (() => {
    	timeLine();

    	setInterval(timeLine, 3000);
    })();
  }
}
