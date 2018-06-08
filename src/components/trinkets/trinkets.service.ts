import { Injectable } from '@angular/core';

import { GlassComponent } from './glass/glass';
import { EyesComponent } from './eyes/eyes';
import { HoodComponent } from './hood/hood';
import { MoleComponent } from './mole/mole';
import { HeartComponent } from './heart/heart';
import { BeardComponent } from './beard/beard';
import { MoustacheComponent } from './moustache/moustache';
import { SnivelComponent } from './snivel/snivel';
import { DressComponent } from './dress/dress';
import { BraComponent } from './bra/bra';

const zombieJoyAnimBefore = (monster, repo, instance) => {
  const filtered = repo.getCopies().filter(i => {
      if(i.meta.onScreen) {
        return i.onMonster && i.meta.emotion === 'joyful';
      }

      return i.meta.emotion === 'joyful';
  });

  const onMonster = monster.isOnMonster( instance.getBoundingClientRect() );

  if(monster.animate() && filtered.length === 0 && monster.getEmotion() !== 'joyful' && onMonster) {
    monster.makeJoyjul();

    const smile = monster.animate('smile')(true)();
    const smileLids = monster.animate('smileLids')(true)();
  };

  return;
}

const zombieJoyAnimAfter = (monster, repo, instance) => {
  const filtered = repo.getCopies().filter(i => {
      if(i.meta.onScreen) {
        return i.onMonster && i.meta.emotion === 'joyful';
      }

      return i.meta.emotion === 'joyful';
  });

  if(monster.animate() && filtered.length === 0 && monster.getEmotion() === 'joyful') {
    monster.clearEmotion()

    const smile = monster.animate('smile')(false)();
    const smileLids = monster.animate('smileLids')(false)();
  }
}

@Injectable()
export class TrinketsService {
  constructor() {
  }
  getTrinkets() {
    return [
      {
        id: 10,
        component: BraComponent,
        meta: {
          container: 'body',
          uniq: true,
          before: (monster) => {
            monster.open('body');
          },
          attr: {
            width: {
              default: ({width}) => width * 1.5,
              zombie: ({width}) => 160,
              mummy: ({width}) => 204,
              alien: ({width}) => 79.1,
              skeleton: ({width}) => 200.69,
              yaga: ({width}) => 139.95,
              doctor: ({width}) => 93.99,
              spider: ({width}) => 146,
              vampire: ({width}) => 70.86,
              wolf: ({width}) => 194.5,
              ghost: ({width}) => 220,
              yeti: ({width}) => 332.8,
            },
            height: {
              default: ({height}) => height * 1.5,
              zombie: ({height}) => 71,
              mummy: ({height}) => 50,
              alien: ({height}) => 58.25,
              skeleton: ({height}) => 110.29,
              yaga: ({height}) => 101.45,
              doctor: ({height}) => 47.97,
              spider: ({height}) => 173,
              vampire: ({height}) => 45.46,
              wolf: ({height}) => 69.8,
              ghost: ({height}) => 145.5,
              yeti: ({height}) => 137.75,
            },
            x: {
              default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
              zombie: ({x, width}) => x + 10,
              mummy: ({x, width}) => ((x - (204) / 2) + width / 2) + 9,
              alien: ({x, width}) => ((x - (71.9) / 2) + width / 2) - 3.5,
              skeleton: ({x, width}) => 0,
              yaga: ({x, width}) => x,
              doctor: ({x, width}) => (x - 93.99 / 2) + width / 2,
              spider: ({x, width}) => ((x - (146) / 2) + width / 2),
              vampire: ({x, width}) => (x - (70.86) / 2) + width / 2,
              wolf: ({x, width}) => x,
              ghost: ({x, width}) => ((x - (220) / 2) + width / 2) - 0.25,
              yeti: ({x, width}) => x + 1.5,
            },
            y: {
              default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
              ghost: ({y, height}) => y + 105,
              zombie: ({y, height}) => y + 20,
              mummy: ({y, height}) => y + 2,
              alien: ({y, height}) => y + 10,
              skeleton: ({y, height}) => y - 20,
              yaga: ({y, height}) => y,
              doctor: ({y, height}) => y + 15,
              spider: ({y, height}) => y + 80,
              vampire: ({y, height}) => y + 82,
              wolf: ({y, height}) => y,
              yeti: ({y, height}) => y + 22,
            }
          }
        }
      },
      {
        id: 9,
        component: DressComponent,
        meta: {
          container: 'body',
          uniq: true,
          before: (monster) => {
            if(
              ['mummy', 'yaga', 'yeti', 'doctor', 'vampire', 'zombie', 'wolf'].includes(monster.name)
            ) {
              monster.close('body');
            }

            return;
          },
          after: (monster) => {
            if(
              ['mummy', 'yaga', 'yeti', 'doctor', 'vampire', 'zombie', 'wolf'].includes(monster.name)
            ) {
              monster.open('body');
            };

            return;
          },
          attr: {
            width: {
              default: ({width}) => width * 1.5,
              zombie: ({width}) => 245,
              mummy: ({width}) => width * 0.7,
              alien: ({width}) => width * 1.3,
              skeleton: ({width}) => width * 1.3,
              yaga: ({width}) => width,
              doctor: ({width}) => width,
              spider: ({width}) => width * 1.44,
              vampire: ({width}) => 140,
              wolf: ({width}) => 217,
              ghost: ({width}) => 318.25,
              yeti: ({width}) => 326,

            },
            height: {
              default: ({height}) => height * 1.5,
              zombie: ({height}) => 210,
              mummy: ({height}) => 121.5,
              alien: ({height}) => height * 0.56,
              skeleton: ({height}) => height * 1.3,
              yaga: ({height}) => height,
              doctor: ({height}) => 190,
              spider: ({height}) => height * 1.1,
              vampire: ({height}) => 120,
              wolf: ({height}) => 274,
              ghost: ({height}) => 159.6,
              yeti: ({height}) => 237,
            },
            x: {
              default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
              zombie: ({x, width}) => (x - (width) / 2) + width / 2,
              mummy: ({x, width}) => 25,
              alien: ({x, width}) => (x - (width * 1.3) / 2) + width / 2,
              skeleton: ({x, width}) => (x - (width * 1.3) / 2) + width / 2,
              yaga: ({x, width}) => (x - width / 2) + width / 2,
              doctor: ({x, width}) => (x - width / 2) + width / 2,
              spider: ({x, width}) => ((x - (width * 1.4) / 2) + width / 2) - 3,
              vampire: ({x, width}) => (x - (140) / 2) + width / 2,
              wolf: ({x, width}) => x,
              ghost: ({x, width}) => (x - (318.25) / 2) + width / 2,
              yeti: ({x, width}) => ((x - 326 / 2) + width / 2) + 7,
            },
            y: {
              default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
              ghost: ({y, height}) => y + 220,
              zombie: ({y, height}) => y - 10,
              mummy: ({y, height}) => y - 10,
              alien: ({y, height}) => y,
              skeleton: ({y, height}) => y - 20,
              yaga: ({y, height}) => y,
              doctor: ({y, height}) => y,
              spider: ({y, height}) => y + 71,
              vampire: ({y, height}) => y + 57,
              wolf: ({y, height}) => y,
              yeti: ({y, height}) => y,
            }
          }
        }
      },
      {
        id: 8,
        component: SnivelComponent,
        meta: {
          container: 'nose',
          emotion: 'sad',
          attr: {
            width: {
              default: ({width}) => width * 1.5,
              zombie: ({width}) => 27,
              mummy: ({width}) => 25,
              alien: ({width}) => 11,
              skeleton: ({width}) => 22,
              yaga: ({width}) => 15,
              doctor: ({width}) => 15,
              spider: ({width}) => 28,
              vampire: ({width}) => 24,
              wolf: ({width}) => 17,
              ghost: ({width}) => 15,
              yeti: ({width}) => 24,

            },
            height: {
              default: ({height}) => height * 1.5,
              zombie: ({height}) => 47,
              mummy: ({height}) => 44,
              alien: ({height}) => 20,
              skeleton: ({height}) => 78,
              yaga: ({height}) => 26,
              doctor: ({height}) => 26,
              spider: ({height}) => 49,
              vampire: ({height}) => 42,
              wolf: ({height}) => 30,
              ghost: ({height}) => 26,
              yeti: ({height}) => 42,
            },
            x: {
              default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
              zombie: ({x, width}) => x + 20,
              mummy: ({x, width}) => x + width + 12.5,
              alien: ({x, width}) => x + width - 7,
              skeleton: ({x, width}) => x + width - 22,
              yaga: ({x, width}) => (x - 15 / 2) + width / 2,
              doctor: ({x, width}) => (x - (15) / 2) + width / 2,
              spider: ({x, width}) => (x - (width * 6.6) / 2) + width / 2,
              vampire: ({x, width}) => (x - 24 / 2) + width / 2,
              wolf: ({x, width}) => (x - 17 / 2) + width / 2,
              ghost: ({x, width}) => (x - (width * 3.5) / 2) + width / 2,
              yeti: ({x, width}) => (x - 24 / 2) + width / 2,
            },
            y: {
              default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
              zombie: ({y, height}) => y + height,
              mummy: ({y, height}) => y + height,
              alien: ({y, height}) => y + height,
              skeleton: ({y, height}) => y + height,
              yaga: ({y, height}) => y + height,
              doctor: ({y, height}) => y + height,
              spider: ({y, height}) => y - 10,
              vampire: ({y, height}) => y + height,
              wolf: ({y, height}) => y + height - 7,
              yeti: ({y, height}) => y + height,
            }
          }
        }
      },
      {
        id: 7,
        component: MoustacheComponent,
        meta: {
          container: 'mouth',
          attr: {
            width: {
              default: ({width}) => width * 1.5,
              zombie: ({width}) => 155,
              mummy: ({width}) => 155,
              alien: ({width}) => 50,
              skeleton: ({width}) => 75,
              yaga: ({width}) => 72,
              doctor: ({width}) => 127,
              spider: ({width}) => 50,
              vampire: ({width}) => 50,
              wolf: ({width}) => 71,
              ghost: ({width}) => 127,
              yeti: ({width}) => 127,

            },
            height: {
              default: ({height}) => height * 1.5,
              zombie: ({height}) => 63,
              mummy: ({height}) => 63,
              alien: ({height}) => 20,
              skeleton: ({height}) => 30,
              yaga: ({height}) => 29,
              doctor: ({height}) => 51,
              spider: ({height}) => 20,
              vampire: ({height}) => 20,
              wolf: ({height}) => 28,
              ghost: ({height}) => 51,
              yeti: ({height}) => 51,
            },
            x: {
              default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
              zombie: ({x, width}) => (x - 155 / 2) + width / 2,
              mummy: ({x, width}) => (x - 155 / 2) + width / 2,
              alien: ({x, width}) => (x - 50 / 2) + width / 2,
              skeleton: ({x, width}) => (x - 75 / 2) + width / 2,
              yaga: ({x, width}) => (x - 72 / 2) + width / 2,
              doctor: ({x, width}) => (x - 127 / 2) + width / 2,
              spider: ({x, width}) => (x - 50 / 2) + width / 2,
              vampire: ({x, width}) => (x - 50 / 2) + width / 2,
              wolf: ({x, width}) => x + width - 67,
              ghost: ({x, width}) => (x - 127 / 2) + width / 2,
              yeti: ({x, width}) => (x - 127 / 2) + width / 2,
            },
            y: {
              default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
              zombie: ({y, height}) => y - 40,
              mummy: ({y, height}) => y - 30,
              alien: ({y, height}) => y - 20,
              skeleton: ({y, height}) => y + 22,
              yaga: ({y, height}) => y - 25,
              doctor: ({y, height}) => y - 30,
              spider: ({y, height}) => y - 15,
              vampire: ({y, height}) => y - 11,
              wolf: ({y, height}) => y - 10,
              yeti: ({y, height}) => y - 18,
            }
          }
        }
      },
      {
        id: 6,
        component: BeardComponent,
        meta: {
          container: 'mouth',
          before: (monster) => {
            if(monster.name === 'wolf') {
              monster.close('tongue');
            } else if(monster.name === 'skeleton') {
              return;
            } else {
              monster.close('mouth');
            }
            return;
          },
          after: (monster) => {
            if(monster.name === 'wolf') {
              monster.open('tongue');
            } else if(monster.name === 'skeleton') {
              return;
            } else {
              monster.open('mouth');
            }
            return;
          },
          attr: {
            width: {
              default: ({width}) => width * 1.5,
              zombie: () => 114,
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
              zombie: () => 88,
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
              zombie: ({x, width}) => (x - (114) / 2) + width / 2,
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
          before: (monster, items, instance) => {
            if(monster.animate() && monster.isOnMonster( instance.getBoundingClientRect() )) {
              const smile = monster.animate('smile')(true)();
              const smileLids = monster.animate('smileLids')(true)();
            }
          },
          after: (monster, items) => {
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
          before: zombieJoyAnimBefore,
          after: zombieJoyAnimAfter,
          emotion: 'joyful',
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
          emotion: 'joyful',
          before: zombieJoyAnimBefore,
          after: zombieJoyAnimAfter,
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
