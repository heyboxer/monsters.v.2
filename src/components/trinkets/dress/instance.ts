import { DressComponent } from './dress';
import { zombieJoyAnimBefore, zombieJoyAnimAfter } from '../lib'

export default {
  id: 9,
  component: DressComponent,
  meta: {
    container: 'body',
    getContainer: function() {
      return this.container;
    },
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
        bed: ({width}) => 159.49,
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
        bed: ({height}) => 27.637,
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
        bed: ({x, width}) => x - 37,
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
        bed: ({y, height}) => y + 8,
      }
    }
  }
};
