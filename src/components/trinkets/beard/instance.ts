import { BeardComponent } from './beard';

export default {
  id: 6,
  component: BeardComponent,
  meta: {
    container: 'mouth',
    name: 'beard',
    getContainer: function() {
      return this.container;
    },
    before: ({monster}) => {
      if(monster.name === 'wolf') {
        monster.close('tongue');
      } else if(monster.name === 'skeleton') {
        return;
      } else if(monster.name === 'spider') {
        monster.close('mouth');
        monster.close('mouth-decor');
      } else if(monster.name === 'mummy') {
        monster.close('mouth');
        monster.open('mouth-fraud');
      } else {
        monster.close('mouth');
      }
      return;
    },
    after: ({monster}) => {
      if(monster.name === 'wolf') {
        monster.open('tongue');
      } else if(monster.name === 'skeleton') {
        return;
      } else if(monster.name === 'spider') {
        monster.open('mouth');
        monster.open('mouth-decor');
      } else if(monster.name === 'mummy') {
        monster.open('mouth');
        monster.close('mouth-fraud');
      } else {
        monster.open('mouth');
      }
      return;
    },
    uniq: true,
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 181.18,
        zombie: () => 152,
        mummy: ({width}) => 119.562,
        yaga: ({width}) => 119.56,
        doctor: ({width}) => 119.56 * 1.2,
        spider: ({width}) => 94.648,
        alien: ({width}) => 113,
        vampire: ({width}) => 113,
        yeti: ({width}) => 200,
        ghost: ({width}) => 183.75,
        wolf: ({width}) => 160,
        bed: ({width}) => 58.36,

      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 164.06,
        zombie: () => 72.1,
        mummy: ({height}) => 95.3,
        yaga: ({height}) => 119.56,
        doctor: ({height}) => 95.2 * 1.2,
        spider: ({height}) => 163.921,
        alien: ({height}) => 90.5,
        vampire: ({height}) => 90.5,
        yeti: ({height}) => 92.34,
        ghost: ({height}) => 147.4,
        wolf: ({height}) => 125,
        bed: ({height}) => 46.5,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => 9.35800018310546,
        zombie: ({x, width}) => 12,
        mummy: ({x, width}) => 73,
        yaga: ({x, width}) => 41.31000015258789,
        doctor: ({x, width}) => 3.5,
        spider: ({x, width}) => 84.61099755859375,
        alien: ({x, width}) => 26.154296875,
        vampire: ({x, width}) => 46.93000030517578,
        yeti: ({x, width}) => 33.724609375,
        ghost: ({x, width}) => 30.995006561279297,
        wolf: ({x, width}) => 108,
        bed: ({x, width}) => 48.35499984741211,

      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => 117.5199966430664,
        zombie: ({y, height}) => 172.92578125,
        mummy: ({y, height}) => 156.8515625,
        yaga: ({y, height}) => 155.89999389648438,
        doctor: ({y, height}) => 193,
        spider: ({y, height}) => 135.79000091552734,
        alien: ({y, height}) => 100.44140625,
        vampire: ({y, height}) => 176,
        yeti: ({y, height}) => 125,
        ghost: ({y, height}) => 85,
        wolf: ({y, height}) => 102,
        bed: ({y, height}) => 201.1999969482422,
      }
    }
  }
};
