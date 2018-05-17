import { Injectable } from '@angular/core';

import { GlassComponent } from './glass/glass';

@Injectable()
export class TrinketsService {
  constructor() {
  }
  getTrinkets() {
    return [
      {
        id: 1,
        component: GlassComponent,
      },
      // {
      //   id: 2,
      //   component: GlassComponent,
      // },
      // {
      //   id: 3,
      //   component: GlassComponent,
      // },
    ]
  }
}
