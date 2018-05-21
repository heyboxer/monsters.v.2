import { Injectable } from '@angular/core';

import { ZombieComponent } from './zombie/zombie';
import { SkeletonComponent } from './skeleton/skeleton';
import { AlienComponent } from './alien/alien';

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
    ]
  }
}
