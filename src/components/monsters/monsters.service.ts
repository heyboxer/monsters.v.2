import { Injectable } from '@angular/core';

import { ZombieComponent } from './zombie/zombie';
import { SkeletonComponent } from './skeleton/skeleton';
import { AlienComponent } from './alien/alien';
import { BedComponent } from './bed/bed';
import { SpiderComponent } from './spider/spider';
import { VampireComponent } from './vampire/vampire';
import { WolfComponent } from './wolf/wolf';
import { MummyComponent } from './mummy/mummy';
import { YagaComponent } from './yaga/yaga';
import { DoctorComponent } from './doctor/doctor';
import { YetiComponent } from './yeti/yeti';
import { GhostComponent } from './ghost/ghost';

@Injectable()
export class MonstersService {
  constructor() {
  }
  getMonsters() {
    return [
      {
        id: 1,
        anchor: 1,
        name: 'alien',
        component: AlienComponent,
      },
      {
        id: 2,
        anchor: 12,
        name: 'zombie',
        component: ZombieComponent,
      },
      {
        id: 3,
        anchor: 6,
        name: 'skeleton',
        component: SkeletonComponent,
      },
      {
        id: 4,
        anchor: 5,
        name: 'spider',
        component: SpiderComponent,
      },
      {
        id: 5,
        anchor: 11,
        name: 'vampire',
        component: VampireComponent,
      },
      {
        id: 6,
        anchor: 9,
        name: 'wolf',
        component: WolfComponent,
      },
      {
        id: 7,
        name: 'mummy',
        component: MummyComponent,
      },
      {
        id: 8,
        name: 'yaga',
        component: YagaComponent,
      },
      {
        id: 9,
        name: 'doctor',
        component: DoctorComponent,
      },
      {
        id: 10,
        name: 'yeti',
        component: YetiComponent,
      },
      {
        id: 11,
        name: 'ghost',
        component: GhostComponent,
      },
      // {
      //   id: 4,
      //   component: BedComponent,
      // },
    ]
  }
}
