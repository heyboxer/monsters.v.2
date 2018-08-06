import { MoustacheComponent } from './moustache';
import { deleteAllEmotionElements } from '../lib';

export default {
  id: 7,
  component: MoustacheComponent,
  meta: {
    container: 'mouth',
    name: 'moustache',
    getContainer: function() {
      return this.container;
    },
    uniq: true,
    before: ({monster, items, game}) => {
      if(['ghost', 'skeleton', 'mummy'].includes(monster.name)) {
        deleteAllEmotionElements(monster, game, items);
      }


      if(monster.name === 'skeleton') {
        monster.close('teeth-top');
      } else if (monster.name === 'doctor') {
        monster.close('mouth-figure');
      }
      return;
    },
    after: ({monster, items, game}) => {
      if(monster.name === 'skeleton') {
        monster.open('teeth-top');
      } else if (monster.name === 'doctor') {
        monster.open('mouth-figure');
      }

      return;
    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        zombie: ({width}) => 155,
        mummy: ({width}) => 155,
        alien: ({width}) => 50,
        skeleton: ({width}) => 75,
        yaga: ({width}) => 72,
        doctor: ({width}) => 127,
        spider: ({width}) => 75.732 * 1.2,
        vampire: ({width}) => 50,
        wolf: ({width}) => 71,
        ghost: ({width}) => 127,
        yeti: ({width}) => 127,
        bed: ({width}) => 95.74,

      },
      height: {
        default: ({height}) => height * 1.5,
        zombie: ({height}) => 63,
        mummy: ({height}) => 63,
        alien: ({height}) => 20,
        skeleton: ({height}) => 30,
        yaga: ({height}) => 29,
        doctor: ({height}) => 51,
        spider: ({height}) => 108.69 * 1.2,
        vampire: ({height}) => 20,
        wolf: ({height}) => 28,
        ghost: ({height}) => 51,
        yeti: ({height}) => 51,
        bed: ({height}) => 38.9,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => 62.45000457763672,
        zombie: ({x, width}) => 24.9296875,
        mummy: ({x, width}) => 51.18359375,
        yaga: ({x, width}) => 65.09000015258789,
        doctor: ({x, width}) => 11.919998168945312,
        spider: ({x, width}) => 86.49579755859375,
        alien: ({x, width}) => 57.654296875,
        vampire: ({x, width}) => 78.43000030517578,
        yeti: ({x, width}) => 70.224609375,
        ghost: ({x, width}) => 59.3700065612793,
        wolf: ({x, width}) => 184.0300006866455,
        bed: ({x, width}) => 29.664999847412112,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => 134,
        zombie: ({y, height}) => 137.140625,
        mummy: ({y, height}) => 126.8515625,
        yaga: ({y, height}) => 160.89999389648438,
        doctor: ({y, height}) => 202,
        spider: ({y, height}) => 107.79000091552734,
        alien: ({y, height}) => 100.44140625,
        vampire: ({y, height}) => 179.5,
        yeti: ({y, height}) => 102.5,
        ghost: ({y, height}) => 60.010005950927734,
        wolf: ({y, height}) => 103,
        bed: ({y, height}) => 185.1999969482422,
      }
    }
  }
};
