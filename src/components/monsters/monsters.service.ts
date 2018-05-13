import { Injectable } from '@angular/core';

import { GlassComponent } from './glass/glass';
import { ZombieComponent } from './zombie/zombie';

@Injectable()
export class MonstersService {
  constructor() {
  }
  getMonsters() {
    return [
      {
        id: 1,
        component: GlassComponent,
      },
      {
        id: 2,
        component: ZombieComponent,
      },
    ]
  }
}
