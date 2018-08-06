import { LollipopComponent } from './lollipop';
import { deleteAllEmotionElements } from '../lib';

export default {
  id: 13,
  component: LollipopComponent,
  meta: {
    container: 'mouth',
    name: 'lollipop',
    getContainer: function() {
      return this.container;
    },
    uniq: true,
    before: ({monster, items, instance, game}) => {
      monster.makeSound('chupa');

      if(['ghost'].includes(monster.name)) {
        deleteAllEmotionElements(monster, game, items);
      }
    },
    after: ({monster, repo, instance}) => {

    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 69.96,
        zombie: ({width}) => 99.1,
        mummy: ({width}) => 101.163,
        yaga: ({width}) => 36,
        doctor: ({width}) => 36.07,
        spider: ({width}) => 113 * 1.2,
        alien: ({width}) => 75.84,
        vampire: ({width}) => 74.68,
        yeti: ({width}) => 91.884,
        ghost: ({width}) => 98.34,
        wolf: ({width}) => 36.06,
        bed: ({width}) => 63.77,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 104.667,
        zombie: ({height}) => 72.6,
        mummy: ({height}) => 89.37,
        yaga: ({height}) => 124.9,
        doctor: ({height}) => 66.44,
        spider: ({height}) => 140.9 * 1.2,
        alien: ({height}) => 70.92,
        vampire: ({height}) => 72.17,
        yeti: ({height}) => 44.3,
        ghost: ({height}) => 64.22,
        wolf: ({height}) => 95.2,
        bed: ({height}) => 34.39,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => 84.97000457763673,
        zombie: ({x, width}) => 84.62109375,
        mummy: ({x, width}) => 89.23828125,
        yaga: ({x, width}) => 94.63999938964844,
        doctor: ({x, width}) => 57.384998168945316,
        spider: ({x, width}) => 57.13499755859375,
        alien: ({x, width}) => 71.68359375,
        vampire: ({x, width}) => 27,
        yeti: ({x, width}) => 131.724609375,
        ghost: ({x, width}) => 84.59000396728516,
        wolf: ({x, width}) => 209.9700006866455,
        bed: ({x, width}) => 67.86000061035156,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => 160.5199966430664,
        zombie: ({y, height}) => 187.140625,
        mummy: ({y, height}) => 176.8515625,
        yaga: ({y, height}) => 185.89999389648438,
        doctor: ({y, height}) => 237.0699920654297,
        spider: ({y, height}) => 140.79000091552734,
        alien: ({y, height}) => 123.44140625,
        vampire: ({y, height}) => 210.5,
        yeti: ({y, height}) => 140.7890625,
        ghost: ({y, height}) => 167.77001190185547,
        wolf: ({y, height}) => 160.5500030517578,
        bed: ({y, height}) => 209.1999969482422,
      }
    }
  }
};
