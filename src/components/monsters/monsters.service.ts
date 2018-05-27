import { Injectable } from '@angular/core';

import { ZombieComponent } from './zombie/zombie';
import { SkeletonComponent } from './skeleton/skeleton';
import { AlienComponent } from './alien/alien';
import { BedComponent } from './bed/bed';
import { SpiderComponent } from './spider/spider';
import { VampireComponent } from './vampire/vampire';
import { WolfComponent } from './wolf/wolf';

@Injectable()
export class MonstersService {
  constructor() {
  }
  getMonsters() {
    return [
      {
        id: 1,
        component: AlienComponent,
      },
      {
        id: 2,
        component: ZombieComponent,
      },
      {
        id: 3,
        component: SkeletonComponent,
      },
      {
        id: 4,
        component: SpiderComponent,
      },
      {
        id: 5,
        component: VampireComponent,
      },
      {
        id: 6,
        component: WolfComponent,
      },
      // {
      //   id: 4,
      //   component: BedComponent,
      // },
    ]
  }
}
