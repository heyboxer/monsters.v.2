import { NecklaceComponent } from './necklace';
import { joyfulAnimBefore, joyfulAnimAfter } from '../lib'

export default {
  id: 16,
  component: NecklaceComponent,
  emotion: 'joyful',
  meta: {
    container: 'body',
    getContainer: function(name) {
      if(['yaga', 'bed'].includes(name)) {
        return 'necklace';
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
        skeleton: ({width}) => 201.947 * 1.2,
        zombie: ({width}) => 107.787,
        mummy: ({width}) => 47.372,
        yaga: ({width}) => 71.389,
        doctor: ({width}) => 96.519,
        spider: ({width}) => 161.664,
        alien: ({width}) => 95.425,
        vampire: ({width}) => 112.848,
        yeti: ({width}) => 133.37,
        ghost: ({width}) => 214.32,
        wolf: ({width}) => 171.669,
        bed: ({width}) => 39.916,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 103.88 * 1.2,
        zombie: ({height}) => 55.445,
        mummy: ({height}) => 24.368,
        yaga: ({height}) => 43.312,
        doctor: ({height}) => 49.649,
        spider: ({height}) => 146.575,
        alien: ({height}) => 67.599,
        vampire: ({height}) => 58.048,
        yeti: ({height}) => 68.605,
        ghost: ({height}) => 112.984,
        wolf: ({height}) => 107.837,
        bed: ({height}) => 25.98,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => (x - (201.947 * 1.2) / 2) + width / 2,
        zombie: ({x, width}) => x + 30,
        mummy: ({x, width}) => ((x - (47.372) / 2) + width / 2) + 6,
        yaga: ({x, width}) => x + 32,
        doctor: ({x, width}) => (x - (96.519) / 2) + width / 2,
        spider: ({x, width}) => ((x - (161.664) / 2) + width / 2) - 20,
        alien: ({x, width}) => (x - (95.425) / 2) + width / 2,
        vampire: ({x, width}) => (x - (112.848) / 2) + width / 2,
        yeti: ({x, width}) => ((x - (133.37) / 2) + width / 2) + 10,
        ghost: ({x, width}) => (x - (214.32) / 2) + width / 2,
        wolf: ({x, width}) => x + width - 171.669 + 10,
        bed: ({x, width}) => 80.75999450683594,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => y - 40,
        zombie: ({y, height}) => y + 35,
        mummy: ({y, height}) => y,
        yaga: ({y, height}) => y + height - 43.312 - 60,
        doctor: ({y, height}) => y + 8,
        spider: ({y, height}) => y + 75,
        alien: ({y, height}) => y + 2,
        vampire: ({y, height}) => y + 60,
        yeti: ({y, height}) => y + 95,
        ghost: ({y, height}) => y + 140,
        wolf: ({y, height}) => y - 30,
        bed: ({y, height}) => 218.74000549316406,
      }
    }
  }
};
