import { PigtailComponent } from './pigtail';
import { joyfulAnimBefore, joyfulAnimAfter } from '../lib'

export default {
  id: 20,
  component: PigtailComponent,
  emotion: 'joyful',
  meta: {
    container: 'head-figure',
    getContainer: function(name) {
      return this.container;
    },
    uniq: true,
    before: (monster, repo, instance) => {
      joyfulAnimBefore(monster, repo, instance, true);

      if(monster.name === 'zombie') {
        monster.close('hair');
      }
    },
    after: (monster, repo, instance) => {
      joyfulAnimAfter(monster, repo, instance, true);

      if(monster.name === 'zombie') {
        monster.open('hair');
      }
    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 163.087 * 1.2,
        zombie: ({width}) => 84.62,
        mummy: ({width}) => 163.545,
        yaga: ({width}) => 65.945,
        doctor: ({width}) => 212.546 * 1.2,
        spider: ({width}) => 138.76 * 1.2,
        alien: ({width}) => 167.427,
        vampire: ({width}) => 77.475,
        yeti: ({width}) => 169.779,
        ghost: ({width}) => 206.012,
        wolf: ({width}) => 26.76,
        bed: ({width}) => 86.072,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 102.023 * 1.2,
        zombie: ({height}) => 56.403,
        mummy: ({height}) => 120.569,
        yaga: ({height}) => 109.793,
        doctor: ({height}) => 86.35 * 1.2,
        spider: ({height}) => 113.13 * 1.2,
        alien: ({height}) => 113.13,
        vampire: ({height}) => 92.33,
        yeti: ({height}) => 78.814,
        ghost: ({height}) => 123.434,
        wolf: ({height}) => 113.13,
        bed: ({height}) => 75.543,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => (x - (163.087 * 1.2) / 2) + width / 2,
        zombie: ({x, width}) => (x - (84.62) / 2) + width / 2,
        mummy: ({x, width}) => (x - (163.545) / 2) + width / 2,
        yaga: ({x, width}) => x - 45,
        doctor: ({x, width}) => ((x - (212.546 * 1.2) / 2) + width / 2) + 5,
        spider: ({x, width}) => (x - (138.76 * 1.2) / 2) + width / 2,
        alien: ({x, width}) => (x - (167.427) / 2) + width / 2,
        vampire: ({x, width}) => x - 77.475 + 26,
        yeti: ({x, width}) => (x - (169.779) / 2) + width / 2,
        ghost: ({x, width}) => (x - (206.012) / 2) + width / 2,
        wolf: ({x, width}) => x - 10,
        bed: ({x, width}) => ((x - (86.072) / 2) + width / 2) - 10,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => y + 60,
        zombie: ({y, height}) => y - 6,
        mummy: ({y, height}) => y + 76,
        yaga: ({y, height}) => y + 150,
        doctor: ({y, height}) => y - 10,
        spider: ({y, height}) => y + 75,
        alien: ({y, height}) => y + 66,
        vampire: ({y, height}) => y + 80,
        yeti: ({y, height}) => y + height - 78.814 + 18,
        ghost: ({y, height}) => y + 32,
        wolf: ({y, height}) => y + 35,
        bed: ({y, height}) => y + 35,
      }
    }
  }
};
