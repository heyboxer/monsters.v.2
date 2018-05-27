import { Injectable } from '@angular/core';

import { GlassComponent } from './glass/glass';
import { EyesComponent } from './eyes/eyes';

@Injectable()
export class TrinketsService {
  constructor() {
  }
  getTrinkets() {
    return [
      {
        id: 1,
        component: EyesComponent,
        meta: {
          container: 'eyes',
          before: (monster) => {
            monster.close('eyes');
            return;
          },
          after: (monster) => {
            monster.open('eyes');
            return;
          },
          attr: {
            width: {
              default: ({width}) => width * 1.5,
            },
            height: {
              default: ({height}) => height * 1.5,
            },
            x: {
              default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
            },
            y: {
              default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
            }
          }
        }
      },
      {
        id: 2,
        component: GlassComponent,
        meta: {
          container: 'eyes',
          attr: {
            width: {
              default: ({width}) => width * 2,
              skeleton: ({width}) => width * 2.113,
            },
            height: {
              default: ({height}) => height * 2,
              skeleton: ({height}) => height * 2.113
            },
            x: {
              default: ({x, width}) => x - width / 2,
              skeleton: ({x, width}) => (x - width / 2) - 6,
            },
            y: {
              default: ({y, height}) => y - height / 2,
              skeleton: ({y, height}) => (y - height / 2) + 15
            }
          }
        }
      },
    ]
  }
}
