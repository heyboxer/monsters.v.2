import { HoodComponent } from './hood';
import { zombieJoyAnimBefore, zombieJoyAnimAfter } from '../lib'

export default {
  id: 3,
  component: HoodComponent,
  meta: {
    container: 'head-figure',
    getContainer: function() {
      return this.container;
    },
    emotion: 'joyful',
    uniq: true,
    before: (monster, repo, instance) => {
      zombieJoyAnimBefore(monster, repo, instance);
      monster.open('confetti');
    },
    after: (monster, repo, instance) => {
      zombieJoyAnimAfter(monster, repo, instance);
      monster.close('confetti');
    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 65.45,
        zombie: ({width}) => 71.8,
        mummy: ({width}) => 76.885,
        yaga: ({width}) => 47.154,
        doctor: ({width}) => 82.414,
        spider: ({width}) => 106.668,
        alien: ({width}) => 50.625,
        vampire: ({width}) => 76.885,
        yeti: ({width}) => 78.4,
        ghost: ({width}) => 90.345,
        wolf: ({width}) => 41.735,
        bed: ({width}) => 64.59,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 61.23,
        zombie: ({height}) => 98.59,
        mummy: ({height}) => 57.304,
        yaga: ({height}) => 64.746,
        doctor: ({height}) => 85.186,
        spider: ({height}) => 58.784,
        alien: ({height}) => 56.281,
        vampire: ({height}) => 57.304,
        yeti: ({height}) => 87.6,
        ghost: ({height}) => 76.6,
        wolf: ({height}) => 80.656,
        bed: ({height}) => 54.76,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => x + width - 61.23 + 10,
        zombie: ({x, width}) => x - 24,
        mummy: ({x, width}) => x - 32,
        yaga: ({x, width}) => x + 15,
        doctor: ({x, width}) => x + 49,
        spider: ({x, width}) => ((x - 106.668 / 2) + width / 2) + 4,
        alien: ({x, width}) => x + (width / 2),
        vampire: ({x, width}) => 1.5,
        yeti: ({x, width}) => x + (width / 2) - 5,
        ghost: ({x, width}) => ((x - (90.345) / 2) + width / 2) + 50,
        wolf: ({x, width}) => x - 10,
        bed: ({x, width}) => x + 34,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => y - 20,
        zombie: ({y, height}) => y - 16,
        mummy: ({y, height}) => y - 14,
        yaga: ({y, height}) => y + 10,
        doctor: ({y, height}) => y - 22,
        spider: ({y, height}) => y - 15,
        alien: ({y, height}) => y - 41,
        vampire: ({y, height}) => 20,
        yeti: ({y, height}) => y - 10,
        ghost: ({y, height}) => y - 30,
        wolf: ({y, height}) => -10,
        bed: ({y, height}) => y + 6,
      }
    },
  }
};
