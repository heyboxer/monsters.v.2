import { Injectable } from '@angular/core';

import { GlassComponent } from './glass/glass';
import { EyesComponent } from './eyes/eyes';
import { HoodComponent } from './hood/hood';
import { MoleComponent } from './mole/mole';
import { HeartComponent } from './heart/heart';
import { BeardComponent } from './beard/beard';

@Injectable()
export class TrinketsService {
  constructor() {
  }
  getTrinkets() {
    return [
      {
        id: 6,
        component: BeardComponent,
        meta: {
          container: 'mouth',
          before: (monster) => {
            if(monster.name !== 'wolf') {
              monster.close('mouth');
            } else {
              monster.close('tongue');
            }
            return;
          },
          after: (monster) => {
            if(monster.name !== 'wolf') {
              monster.open('mouth');
            } else {
              monster.open('tongue');
            }
            return;
          },
          attr: {
            width: {
              default: ({width}) => width * 1.5,
              mummy: ({width}) => width * 3.5,
              alien: ({width}) => width * 9.3,
              skeleton: ({width}) => width * 1.6,
              yaga: ({width}) => width * 12.8,
              doctor: ({width}) => width * 5,
              spider: ({width}) => width * 6.6,
              vampire: ({width}) => width * 2.87,
              wolf: ({width}) => width * 1.6,
              ghost: ({width}) => width * 3.5,
              yeti: ({width}) => width * 2,

            },
            height: {
              default: ({height}) => height * 1.5,
              mummy: ({height}) => height * 3.5,
              alien: ({height}) => height * 9.3,
              skeleton: ({height}) => height * 1.6,
              yaga: ({height}) => height * 12.8,
              doctor: ({height}) => height * 5,
              spider: ({height}) => height * 6.6,
              vampire: ({height}) => height * 1.83,
              wolf: ({height}) => height * 1.6,
              ghost: ({height}) => height * 1.76,
              yeti: ({height}) => height * 2,
            },
            x: {
              default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
              mummy: ({x, width}) => (x - (width * 3.5) / 2) + width / 2,
              alien: ({x, width}) => (x - (width * 9.3) / 2) + width / 2,
              skeleton: ({x, width}) => (x - (width * 1.6) / 2) + width / 2,
              yaga: ({x, width}) => (x - (width * 12.8) / 2) + width / 2,
              doctor: ({x, width}) => (x - (width * 5) / 2) + width / 2,
              spider: ({x, width}) => (x - (width * 6.6) / 2) + width / 2,
              vampire: ({x, width}) => (x - (width * 2.87) / 2) + width / 2,
              wolf: ({x, width}) => x - 20,
              ghost: ({x, width}) => (x - (width * 3.5) / 2) + width / 2,
              yeti: ({x, width}) => (x - (width * 2) / 2) + width / 2,

            },
            y: {
              default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
              mummy: ({y, height}) => y,
              alien: ({y, height}) => y - 20,
              skeleton: ({y, height}) => y + 22,
              yaga: ({y, height}) => y - 30,
              doctor: ({y, height}) => y - 30,
              spider: ({y, height}) => y - 10,
              vampire: ({y, height}) => y - 30,
              wolf: ({y, height}) => y - 10,
              yeti: ({y, height}) => y,

            }
          }
        }
      },
      {
        id: 4,
        component: MoleComponent,
        meta: {
          onScreen: true,
          multiple: true,
          random: true,
          before: (monster, host, instance) => {
            if(monster.animate() && monster.isOnMonster( instance.getBoundingClientRect() )) {
              const smile = monster.animate('smile')(true)();
              const smileLids = monster.animate('smileLids')(true)();
            }
          },
          after: (monster, host) => {
            if(monster.animate()) {
              const smile = monster.animate('smile')(false)();
              const smileLids = monster.animate('smileLids')(false)();
            }
          },
        }
      },
      {
        id: 5,
        component: HeartComponent,
        meta: {
          onScreen: true,
          multiple: true,
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
              mummy: ({width}) => width * 2.88,

            },
            height: {
              default: ({height}) => height * 1.5,
              mummy: ({height}) => height * 2.88,

            },
            x: {
              default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
              mummy: ({x, width}) => (x - (width * 2.88) / 2) + width / 2,

            },
            y: {
              default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
              mummy: ({y, height}) => (y - (height * 2.88) / 2) + height / 2,

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
              mummy: ({width}) => width * 3.82,
            },
            height: {
              default: ({height}) => height * 2,
              skeleton: ({height}) => height * 2.113,
              mummy: ({height}) => height * 3.82,
            },
            x: {
              default: ({x, width}) => x - width / 2,
              skeleton: ({x, width}) => (x - width / 2) - 6,
              mummy: ({x, width}) => (x - (width * 3.82) / 2) + width / 2,

            },
            y: {
              default: ({y, height}) => y - height / 2,
              skeleton: ({y, height}) => (y - height / 2) + 15,
              mummy: ({y, height}) => (y - (height * 3.82) / 2) + height / 2,

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
              yaga: ({x, width}) => x + 30,
              skeleton: ({x, width}) => x - 30,
              alien: ({x, width}) => x - 30,
              zombie: ({x, width}) => -2.5,
              spider: ({x, width}) => x - width,
              mummy: ({x, width}) => x + 5,
            },
            y: {
              default: ({y, height}) => 0,
              vampire: ({y, height}) => y,
              yaga: ({y, height}) => y - 20,
              skeleton: ({y, height}) => y - 30,
              alien: ({y, height}) => y - 50,
              zombie: ({y, height}) => -5,
              spider: ({y, height}) => y - height,
              mummy: ({y, height}) => y - 20,
            }
          }
        }
      },

    ]
  }
}
