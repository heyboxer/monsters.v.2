import { FlowerComponent } from './flower';
import { joyfulAnimBefore, joyfulAnimAfter } from '../lib'


export default {
  id: 18,
  component: FlowerComponent,
  emotion: 'joyful',
  meta: {
    container: 'head-figure',
    getContainer: function(name) {
      if(['bed'].includes(name)) {
        return 'flower';
      }

      return this.container;
    },
    uniq: true,
    before: (monster, repo, instance) => {
      joyfulAnimBefore(monster, repo, instance, true);

    },
    after: (monster, repo, instance) => {
      joyfulAnimAfter(monster, repo, instance, true);

    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 188.404 * 1.2,
        zombie: ({width}) => 76.766,
        mummy: ({width}) => 63.789,
        yaga: ({width}) => 116,
        doctor: ({width}) => 132.431 * 1.2,
        spider: ({width}) => 98.766 * 1.2,
        alien: ({width}) => 197.535,
        vampire: ({width}) => 40.896,
        yeti: ({width}) => 173.523,
        ghost: ({width}) => 136.767 * 1.2,
        wolf: ({width}) => 159.729,
        bed: ({width}) => 43.352,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 217.311 * 1.2,
        zombie: ({height}) => 35.215,
        mummy: ({height}) => 46.505,
        yaga: ({height}) => 48.546,
        doctor: ({height}) => 214.873 * 1.2,
        spider: ({height}) => 121.903 * 1.2,
        alien: ({height}) => 82.662,
        vampire: ({height}) => 52.717,
        yeti: ({height}) => 106.196,
        ghost: ({height}) => 116.366 * 1.2,
        wolf: ({height}) => 86.284,
        bed: ({height}) => 34.728,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => -13,
        zombie: ({x, width}) => 102.2,
        mummy: ({x, width}) => 150,
        yaga: ({x, width}) => 38.375,
        doctor: ({x, width}) => 6,
        spider: ({x, width}) => (x - (98.766 * 1.2) / 2) + width / 2,
        alien: ({x, width}) => (x - (197.535) / 2) + width / 2,
        vampire: ({x, width}) => x,
        yeti: ({x, width}) => ((x - (173.523) / 2) + width / 2) + 2,
        ghost: ({x, width}) => 51,
        wolf: ({x, width}) => 10,
        bed: ({x, width}) => 100,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => -30,
        zombie: ({y, height}) => 160,
        mummy: ({y, height}) => 130,
        yaga: ({y, height}) => 30,
        doctor: ({y, height}) => 51,
        spider: ({y, height}) => 150,
        alien: ({y, height}) => y - 30,
        vampire: ({y, height}) => y + 20,
        yeti: ({y, height}) => y + 25,
        ghost: ({y, height}) => -31,
        wolf: ({y, height}) => 160,
        bed: ({y, height}) => 225,
      }
    }
  }
};
