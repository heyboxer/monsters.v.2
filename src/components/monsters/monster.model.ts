import { Component, ViewChildren, QueryList, Renderer2, ComponentFactoryResolver, Injector, ApplicationRef, AfterViewInit } from '@angular/core';
import { MonsterPartDirective, MonsterPartTypes } from './monster-part.directive';
import { AnimationSetController } from './animation/animation-set.controller';

// @ts-ignore: Unreachable code error
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

import { SoundManagerService } from '../sound-toggler/sound-manager.service';
import SOUNDS from '../sound-toggler/sounds';

class MonsterManagerService extends SoundManagerService {
  constructor(lib) {
    super();

    this.lib = lib;
  }
}


@Component({
})
export abstract class MonsterModel implements AfterViewInit {
  @ViewChildren(MonsterPartDirective) parts: QueryList<MonsterPartDirective>;
  protected renderer: Renderer2;
  protected emotion = 'default';
  protected isAnimating: boolean = false;
  protected animationsArr: {fn: Function, emotion: string, arg: boolean}[] = [];
  private soundManager: MonsterManagerService;

  constructor(private name, protected element: HTMLElement, private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private app: ApplicationRef) {

    const sounds = SOUNDS
      .filter(n => n.monster === this.name)
      .reduce((acc, cur) => {
      return { ...acc, [cur.name] : cur.item };
    }, {});;

    this.soundManager = new MonsterManagerService( sounds );
  }

  ngAfterViewInit() {

  }

  public makeSound( name: string ) {
    if(!this.soundManager || !this.soundManager.has( name )) return;

    this.soundManager.setCurrent( name );
    this.soundManager.play();

    return;
  }

  public getPartsArray() {
    return this.parts.toArray();
  }

  public isOnMonster({ top, left, bottom, right }) {
    const point = (x, y) => ({ x, y,});

    const rect = (p1, p2) => ({
      p1, p2,
      onRect: function(point) {
        const compareX = (x) => {
          return (p1.x <= point.x) && (point.x <= p2.x);
        }

        const compareY = (x) => {
          return (p1.y <= point.y) && (point.y <= p2.y);
        }

        return compareX(point.x) && compareY(point.y);
      }
    });

    const outline = this.getParts(p => p.outline).map(p => {
      const { top, right, left, bottom } = p.element.getBoundingClientRect();

      const point1 = point(Number(left), Number(top));
      const point2 = point(Number(right), Number(bottom));

      return rect( point1, point2 );
    });

    const leftTop = point(Number(left), Number(top));
    const rightBottom = point(Number(right), Number(bottom));

    return outline.find(
      rect => rect.onRect(leftTop) || rect.onRect(rightBottom)
    ) ? true : false;
  }

  public getParts(fn = (el) => true) {
    const parts = this.getPartsArray();
    return parts.filter(fn);
  }

  public getRoot() {
    return this.getPart(p => p.type === 'root');
  }

  public getPart(arg: ((i) => boolean) | string) {
    const parts = this.getPartsArray();
    const fn = (arg as (i) => boolean) || ((p) => p.name === (arg as string));

    return parts.find(fn);
  }

  public getContainer(name: string | { name, mod }, all? :boolean) : Object | Object[]  {
    const func = name instanceof Object ? ( p =>
      p.group === (name as { name, mod }).name &&
      p.type === 'container' &&
      p.mod === (name as { name, mod }).mod ) :
      ( p => p.group === name && p.type === 'container' );

    return all? this.getParts(func) : this.getPart(func);
  }

  public getGroup(name: string | { name }) {
    const n = name instanceof Object? (name as { name }).name : name;

    return this.getPart(p => p.name === n && p.type === 'group');
  }

  public getContainers() {
    return this.getParts((p) => p.type === 'container');
  }

  public render(component, name, callback = (instance, ref?) => {}) {
    const obj = this.getContainer(name);
    const { viewContainerRef: container, element, content  } = (obj as { viewContainerRef, element, content });

    this.clear(name);

    const factory = this.componentFactoryResolver.resolveComponentFactory(component);

    const ref = factory.create(this.injector, [], element);
    this.app.attachView(ref.hostView);

    const instance = (ref.instance as { node }).node.children.item(0);

    (obj as { viewContainerRef, element, content }).content = ref.instance;

    return callback(ref.instance, ref);
  }

  public clear(name) {
    const containers = this.getContainer(name, true);

    return (containers as Object[]).forEach(c => {
      const { element } = (c as { element });

      const children = Array.from(element.children).forEach(e => {
        return this.renderer.removeChild(element, e);
      });

      (c as { content }).content = null;

      return this;
    });

  }

  protected checkAnimationStack() {
    if(this.animationsArr.length !== 0) {
      const [{fn}, ...rest] = this.animationsArr;
      this.animationsArr = rest;

      fn();
      return true;
    }
  }

  protected loadAnimations(animations) {
    const partNames = Object.keys(animations);

    partNames.forEach(name => {
      const { fn } = animations[name];
      const find = fn ? fn : part => part.name === name;

      this.getParts(find)
        .forEach(part => {
          return part.setAnimations(
            new AnimationSetController(
              Snap(part.element),
              animations[name]
            )
          );
        });
    });
  }

  protected animateJoyful(arg: boolean, cb?) {
    return;
  }
  protected animateSad(arg: boolean, cb?) {
    return;
  }

  public setAnimationStack(emotion: 'joyful' | 'sad', isForward = true) {
    const newElement = {
      emotion,
      arg: isForward,
      fn: (
        emotion === 'joyful' ?
        () => this.animateJoyful(isForward) :
        () => this.animateSad(isForward)
      )
    };

    this.animationsArr = [...this.animationsArr, newElement];

    return;
  }

  public makeSad() {
    this.animateSad(true);
    this.emotion = 'sad';
    return this;
  }

  public makeJoyful() {
    this.animateJoyful(true);
    this.emotion = 'joyful';
    return this;
  }

  public clearEmotion(cb?) {
    if(this.emotion === 'joyful') {
      this.animateJoyful(false, cb);
    } else if(this.emotion === 'sad') {
      this.animateSad(false, cb);
    }

    this.emotion = 'default';
    return this;
  }

  public getEmotion() {
    return this.emotion;
  }

  private trigger(name, fn) {
    const gr = this.getParts((p) => p.name === name);

    gr.forEach(({ element }) => fn(element));
  }

  public close(name) {
    this.trigger(name, (element) => {
      this.renderer.setAttribute(element, 'visibility', 'hidden');
      return;
    });

    return () => this.open(name);
  }

  public open(name) {
    this.trigger(name, (element) => {
      element.removeAttribute('visibility');
    });

    return () => this.close(name);;
  }

  public clearAll() {
    this.getContainers().forEach(({ group }) => this.clear(group));

    this.getParts(p => p.type !== 'container').forEach(({name}) => {
      this.open(name);
    });

    this.getParts(p => p.hidden).forEach(({name}) => {
      this.close(name);
    });

    this.clearEmotion(() => {
      this.getParts(p => p.animations).forEach(p => p.animations.recovery());
    });


    return;
  }
}
