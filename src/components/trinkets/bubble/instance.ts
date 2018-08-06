import { BubbleComponent } from './bubble';
import { joyfulAnimBefore, joyfulAnimAfter } from '../lib'

export default {
  id: 19,
  component: BubbleComponent,
  meta: {
    container: { name: 'outer', mod: 'forward' },
    name: 'bubble',
    getContainer: function(name) {
      return this.container;
    },
    uniq: true,
    emotion: 'joyful',
    before: ({monster, items, instance, item}) => {
      monster.makeSound('song');

      joyfulAnimBefore(monster, items, item, instance, true, true);
    },
    after: ({monster, items, instance, item}) => {

      joyfulAnimAfter(monster, items, item, instance, true);
    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 217.362 * 1.2,
        zombie: ({width}) => 67.189,
        mummy: ({width}) => 176.488,
        yaga: ({width}) => 173.703 * 1.1,
        doctor: ({width}) => 175.86,
        spider: ({width}) => 150.093 * 1.2,
        alien: ({width}) => 67.189,
        vampire: ({width}) => 185.098,
        yeti: ({width}) => 67.189,
        ghost: ({width}) => 166.299,
        wolf: ({width}) => 74.115,
        bed: ({width}) => 174.086,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 192.661 * 1.2,
        zombie: ({height}) => 51.553 ,
        mummy: ({height}) => 64.122,
        yaga: ({height}) => 177.235 * 1.1,
        doctor: ({height}) => 209.593,
        spider: ({height}) => 143.048 * 1.2,
        alien: ({height}) => 51.553,
        vampire: ({height}) => 173.499,
        yeti: ({height}) => 51.553,
        ghost: ({height}) => 134.702,
        wolf: ({height}) => 217.648 ,
        bed: ({height}) => 86.03 ,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => -35,
        zombie: ({x, width}) => 30,
        mummy: ({x, width}) => 50,
        yaga: ({x, width}) => -10,
        doctor: ({x, width}) => -15,
        spider: ({x, width}) => 40,
        alien: ({x, width}) => 15,
        vampire: ({x, width}) => 20,
        yeti: ({x, width}) => 170,
        ghost: ({x, width}) => 40,
        wolf: ({x, width}) => 150,
        bed: ({x, width}) => -10,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => 0,
        zombie: ({y, height}) => 190,
        mummy: ({y, height}) => 170,
        yaga: ({y, height}) => 58,
        doctor: ({y, height}) => 80,
        spider: ({y, height}) => 145,
        alien: ({y, height}) => 135,
        vampire: ({y, height}) => 100,
        yeti: ({y, height}) => 100,
        ghost: ({y, height}) => 100,
        wolf: ({y, height}) => 15,
        bed: ({y, height}) => 170,
      }
    }
  }
};
