import { Injectable } from '@angular/core';

import { ZombieComponent } from './zombie/zombie';
import { SkeletonComponent } from './skeleton/skeleton';

@Injectable()
export class MonstersService {
  constructor() {
  }
  getMonsters() {
    return [
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
