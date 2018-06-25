import { SnivelComponent } from './snivel';
import { sadAnimBefore, sadAnimAfter } from '../lib'

export default {
  id: 8,
  component: SnivelComponent,
  meta: {
    container: 'nose',
    getContainer: function() {
      return this.container;
    },
    emotion: 'sad',
    before: sadAnimBefore,
    after: sadAnimAfter,
    uniq: true,
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        zombie: ({width}) => 27,
        mummy: ({width}) => 25,
        alien: ({width}) => 11,
        skeleton: ({width}) => 22,
        yaga: ({width}) => 15 * 1.2,
        doctor: ({width}) => 15,
        spider: ({width}) => 52.9,
        vampire: ({width}) => 24,
        wolf: ({width}) => 17,
        ghost: ({width}) => 15,
        yeti: ({width}) => 24,
        bed: ({width}) => 11.64,
      },
      height: {
        default: ({height}) => height * 1.5,
        zombie: ({height}) => 47,
        mummy: ({height}) => 44,
        alien: ({height}) => 20,
        skeleton: ({height}) => 78,
        yaga: ({height}) => 26 * 1.2,
        doctor: ({height}) => 26,
        spider: ({height}) => 90.58,
        vampire: ({height}) => 42,
        wolf: ({height}) => 30,
        ghost: ({height}) => 26,
        yeti: ({height}) => 42,
        bed: ({height}) => 20.4,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        zombie: ({x, width}) => x + 20,
        mummy: ({x, width}) => x + width + 12.5,
        alien: ({x, width}) => x + width - 7,
        skeleton: ({x, width}) => x + width - 22,
        yaga: ({x, width}) => (x - (15 * 1.2) / 2) + width / 2,
        doctor: ({x, width}) => ((x - (15) / 2) + width / 2) - 5,
        spider: ({x, width}) => ((x - (52.9) / 2) + width / 2) - 4.5,
        vampire: ({x, width}) => (x - 24 / 2) + width / 2,
        wolf: ({x, width}) => (x - 17 / 2) + width / 2,
        ghost: ({x, width}) => (x - (width * 3.5) / 2) + width / 2,
        yeti: ({x, width}) => (x - 24 / 2) + width / 2,
        bed: ({x, width}) => (x - 11.64 / 2) + width / 2,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        zombie: ({y, height}) => y + height,
        mummy: ({y, height}) => y + height,
        alien: ({y, height}) => y + height,
        skeleton: ({y, height}) => y + height,
        yaga: ({y, height}) => y + height,
        doctor: ({y, height}) => y + height,
        spider: ({y, height}) => y - 10,
        vampire: ({y, height}) => y + height,
        wolf: ({y, height}) => y + height - 7,
        yeti: ({y, height}) => y + height,
        bed: ({y, height}) => y + height,
      }
    }
  }
};
