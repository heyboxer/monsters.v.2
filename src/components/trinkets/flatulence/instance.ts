import { FlatulenceComponent } from './flatulence';
import { sadAnimBefore, sadAnimAfter } from '../lib'

export default {
  id: 17,
  component: FlatulenceComponent,
  meta: {
    container: { name: 'outer', mod: 'forward' },
    getContainer: function(name) {
      return this.container;
    },
    uniq: true,
    emotion: 'sad',
    before: ({monster, items, item, instance}) => {
      monster.makeSound('fart');
      sadAnimBefore(monster, items, item, instance, true, true);
    },
    after: ({monster, items, item, instance}) => sadAnimAfter(monster, items, item, instance, true),
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 235.672 * 1.2,
        zombie: ({width}) => 238.446,
        mummy: ({width}) => 241.883,
        yaga: ({width}) => 240.651 * 1.1,
        doctor: ({width}) => 234.85,
        spider: ({width}) => 231.152,
        alien: ({width}) => 234.631,
        vampire: ({width}) => 244.895,
        yeti: ({width}) => 253.92,
        ghost: ({width}) => 230.76,
        wolf: ({width}) => 245.405,
        bed: ({width}) => 94.365,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 156.342 * 1.2,
        zombie: ({height}) => 253.37,
        mummy: ({height}) => 72.688,
        yaga: ({height}) => 129.431 * 1.1,
        doctor: ({height}) => 119.315,
        spider: ({height}) => 40.39,
        alien: ({height}) => 135.696,
        vampire: ({height}) => 212.819,
        yeti: ({height}) => 126.296,
        ghost: ({height}) => 109.169,
        wolf: ({height}) => 225.729,
        bed: ({height}) => 81.429,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => -45,
        zombie: ({x, width}) => 0,
        mummy: ({x, width}) => 10,
        yaga: ({x, width}) => -45,
        doctor: ({x, width}) => -50,
        spider: ({x, width}) => 20,
        alien: ({x, width}) => -30,
        vampire: ({x, width}) => -20,
        yeti: ({x, width}) => 0,
        ghost: ({x, width}) => 10,
        wolf: ({x, width}) => 0,
        bed: ({x, width}) => 130,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => 50,
        zombie: ({y, height}) => 0,
        mummy: ({y, height}) => 160,
        yaga: ({y, height}) => 120,
        doctor: ({y, height}) => 150,
        spider: ({y, height}) => 300,
        alien: ({y, height}) => 110,
        vampire: ({y, height}) => 70,
        yeti: ({y, height}) => -30,
        ghost: ({y, height}) => -10,
        wolf: ({y, height}) => 20,
        bed: ({y, height}) => 0,
      }
    }
  }
};
