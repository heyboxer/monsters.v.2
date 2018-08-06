import { EggComponent } from './egg';
import { sadAnimBefore, sadAnimAfter } from '../lib'

export default {
  id: 14,
  component: EggComponent,
  meta: {
    container: { name: 'outer', mod: 'forward' },
    name: 'egg',
    getContainer: function() {
      return this.container;
    },
    uniq: true,
    emotion: 'sad',
    before: ({monster, items, instance, item}) => sadAnimBefore(monster, items, item, instance, true),
    after: ({monster, items, instance, item}) => sadAnimAfter(monster, items, item, instance, true),
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 225.9 * 1.1,
        zombie: ({width}) => 238.8,
        mummy: ({width}) => 210.98,
        yaga: ({width}) => 222.231,
        doctor: ({width}) => 228.369,
        spider: ({width}) => 159.738,
        alien: ({width}) => 199.879,
        vampire: ({width}) => 234.296,
        yeti: ({width}) => 241.66,
        ghost: ({width}) => 205.639,
        wolf: ({width}) => 228.77,
        bed: ({width}) => 242.647,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 266.416 * 1.1,
        zombie: ({height}) => 220.19,
        mummy: ({height}) => 246.6,
        yaga: ({height}) => 212.065,
        doctor: ({height}) => 208.781,
        spider: ({height}) => 237.555,
        alien: ({height}) => 246.747,
        vampire: ({height}) => 235.648,
        yeti: ({height}) => 257.487,
        ghost: ({height}) => 259.417,
        wolf: ({height}) => 233.316,
        bed: ({height}) => 231.647,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => -25,
        zombie: ({x, width}) => -20,
        mummy: ({x, width}) => 5,
        yaga: ({x, width}) => -30,
        doctor: ({x, width}) => -40,
        spider: ({x, width}) => 70,
        alien: ({x, width}) => -20,
        vampire: ({x, width}) => -20,
        yeti: ({x, width}) => 10,
        ghost: ({x, width}) => 20,
        wolf: ({x, width}) => 5,
        bed: ({x, width}) => -20,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => -10,
        zombie: ({y, height}) => y,
        mummy: ({y, height}) => -10,
        yaga: ({y, height}) => 30,
        doctor: ({y, height}) => 80,
        spider: ({y, height}) => 50,
        alien: ({y, height}) => -20,
        vampire: ({y, height}) => 40,
        yeti: ({y, height}) => -20,
        ghost: ({y, height}) => -10,
        wolf: ({y, height}) => -5,
        bed: ({y, height}) => 20,
      }
    }
  }
};
