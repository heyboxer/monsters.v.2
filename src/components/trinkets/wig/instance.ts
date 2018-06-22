import { WigComponent } from './wig';
import { zombieJoyAnimBefore, zombieJoyAnimAfter } from '../lib'

export default {
  id: 11,
  component: WigComponent,
  meta: {
    container: 'head-figure',
    getContainer: function() {
      return this.container;
    },
    uniq: true,
    emotion: 'joyful',
    before: (monster, repo, instance) => {
      zombieJoyAnimBefore(monster, repo, instance);
      if(monster.name === 'zombie') {
        monster.close('hair');
      }
    },
    after: (monster, repo, instance) => {
      zombieJoyAnimAfter(monster, repo, instance);
      if(monster.name === 'zombie') {
        monster.open('hair');
      }
    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 200,
        zombie: ({width}) => 206.7,
        mummy: ({width}) => 178.3,
        yaga: ({width}) => 73.3,
        doctor: ({width}) => 119.6,
        spider: ({width}) => 170.7,
        alien: ({width}) => 190.6,
        vampire: ({width}) => 108.6,
        yeti: ({width}) => 188.1,
        ghost: ({width}) => 164.2,
        wolf: ({width}) => 170.5,
        bed: ({width}) => 90.1,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 200,
        zombie: ({height}) => 203.3,
        mummy: ({height}) => 256.1,
        yaga: ({height}) => 73.4,
        doctor: ({height}) => 119.7,
        spider: ({height}) => 170.8,
        alien: ({height}) => 190.7,
        vampire: ({height}) => 186.9,
        yeti: ({height}) => 188.3,
        ghost: ({height}) => 243.8,
        wolf: ({height}) => 151.5,
        bed: ({height}) => 90.18,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => 0,
        zombie: ({x, width}) => (x - (206.7) / 2) + width / 2,
        mummy: ({x, width}) => ((x - (178.3) / 2) + width / 2) + 2,
        yaga: ({x, width}) => (x - (73.3) / 2) + width / 2,
        doctor: ({x, width}) => (x - 119.7 / 2) + width / 2,
        spider: ({x, width}) => 45,
        alien: ({x, width}) => ((x - (190.7) / 2) + width / 2) - 3.5,
        vampire: ({x, width}) => (x - (108.6) / 2) + width / 2,
        yeti: ({x, width}) => ((x - (188.1) / 2) + width / 2),
        ghost: ({x, width}) => ((x - (164.2) / 2) + width / 2) - 0.25,
        wolf: ({x, width}) => x - 15,
        bed: ({x, width}) => ((x - (90.1) / 2) + width / 2) - 10,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => y - 20,
        zombie: ({y, height}) => y + 10,
        mummy: ({y, height}) => y - 7,
        yaga: ({y, height}) => y + 30,
        doctor: ({y, height}) => y + 20,
        spider: ({y, height}) => 40,
        alien: ({y, height}) => y - 30,
        vampire: ({y, height}) => y + 30,
        yeti: ({y, height}) => y - 5,
        ghost: ({y, height}) => y - 7,
        wolf: ({y, height}) => y - 33,
        bed: ({y, height}) => y + 20,
      }
    }
  }
};
