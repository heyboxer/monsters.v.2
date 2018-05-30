import { Injectable } from '@angular/core';

import { GlassComponent } from './glass/glass';
import { EyesComponent } from './eyes/eyes';
import { HoodComponent } from './hood/hood';
import { MoleComponent } from './mole/mole';

@Injectable()
export class TrinketsService {
  constructor() {
  }
  getTrinkets() {
    return [
      {
        id: 4,
        component: MoleComponent,
        meta: {
          onScreen: true,
          multiple: true,
          random: true,
          before: (monster, host, instance) => {
            // const { top, left, width, height } = instance.getBoundingClientRect();
            //
            // console.log(monster.isOnMonster(top, left, width, height));
            // if(monster.animate()) {
            //   const smile = monster.animate('smile')(true)();
            //   const smileLids = monster.animate('smileLids')(true)();
            // }
          },
          after: (monster, host, instance) => {
            // if(monster.animate()) {
            //   const smile = monster.animate('smile')(false)();
            //   const smileLids = monster.animate('smileLids')(false)();
            // }
          },
        }
      },
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
      {
        id: 3,
        component: HoodComponent,
        meta: {
          container: 'head-figure',
          before: (monster) => {
            if(monster.animate()) {
              const smile = monster.animate('smile')(true)();
              const smileLids = monster.animate('smileLids')(true)();
            }
          },
          after: (monster) => {
            if(monster.animate()) {
              const smile = monster.animate('smile')(false)();
              const smileLids = monster.animate('smileLids')(false)();
            }
          },
          attr: {
            width: {
              default: ({width}) => width * 0.3,
              skeleton: ({width}) => width * 0.55,
              alien: ({width}) => width * 0.55,
              zombie: ({width}) => width * 0.38,
              wolf: ({width}) => width * 0.81,
              spider: ({width}) => width * 1.5,
            },
            height: {
              default: ({height}) => height * 0.3,
              skeleton: ({height}) => height * 0.55,
              alien: ({height}) => height * 0.55,
              zombie: ({height}) => height * 0.38,
              wolf: ({height}) => height * 0.81,
              spider: ({height}) => height * 1.5,
            },
            x: {
              default: ({x, width}) => 0,
              vampire: ({x, width}) => x,
              skeleton: ({x, width}) => x - 30,
              alien: ({x, width}) => x - 30,
              zombie: ({x, width}) => -2.5,
              spider: ({x, width}) => x - width,
            },
            y: {
              default: ({y, height}) => 0,
              vampire: ({y, height}) => y,
              skeleton: ({y, height}) => y - 30,
              alien: ({y, height}) => y - 50,
              zombie: ({y, height}) => -5,
              spider: ({y, height}) => y - height,
            }
          }
        }
      },

    ]
  }
}
