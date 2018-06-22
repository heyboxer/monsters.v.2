import { EyesComponent } from './eyes';
import { zombieJoyAnimBefore, zombieJoyAnimAfter } from '../lib'

export default       {
  id: 1,
  component: EyesComponent,
  meta: {
    container: 'eyes',
    getContainer: function() {
      return this.container;
    },
    before: (monster) => {
      if(monster.name === 'vampire') {
        monster.close('eye');
      } else if(!['vampire'].includes(monster.name)) {
        monster.close('eyes');
      }

      return;
    },
    after: (monster) => {
      if(monster.name === 'vampire') {
        monster.open('eye');
      } else if(!['vampire'].includes(monster.name)) {
        monster.open('eyes');
      }

      return;
    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 164.42,
        zombie: ({width}) => 155,
        mummy: ({width}) => 155,
        yaga: ({width}) => 78.2,
        doctor: ({width}) => 81,
        spider: ({width}) => 83.95 * 1.2,
        alien: ({width}) => 197,
        vampire: ({width}) => 62.59,
        yeti: ({width}) => 111.6,
        ghost: ({width}) => 106.5,
        wolf: ({width}) => 134.8,
        bed: ({width}) => 73.414,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 75.93,
        zombie: ({height}) => 49.5,
        mummy: ({height}) => 49.5,
        yaga: ({height}) => 24.97,
        doctor: ({height}) => 25.9,
        spider: ({height}) => 26.8 * 1.2,
        alien: ({height}) => 62.9,
        vampire: ({height}) => 17.315,
        yeti: ({height}) => 35.6,
        ghost: ({height}) => 34,
        wolf: ({height}) => 43,
        bed: ({height}) => 23.414,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => 17.74,
        zombie: ({x, width}) => 8,
        mummy: ({x, width}) => 55,
        yaga: ({x, width}) => 58,
        doctor: ({x, width}) => 35.48,
        spider: ({x, width}) => 82,
        alien: ({x, width}) => -16,
        vampire: ({x, width}) => 71.5,
        yeti: ({x, width}) => 78.5,
        ghost: ({x, width}) => 70,
        wolf: ({x, width}) => 33,
        bed: ({x, width}) => 40.8,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => 28.41,
        zombie: ({y, height}) => 65,
        mummy: ({y, height}) => 65,
        yaga: ({y, height}) => 70,
        doctor: ({y, height}) => 130,
        spider: ({y, height}) => 88,
        alien: ({y, height}) => 25,
        vampire: ({y, height}) => 100,
        yeti: ({y, height}) => 60,
        ghost: ({y, height}) => 50,
        wolf: ({y, height}) => 66,
        bed: ({y, height}) => 159.2,
      }
    }
  }
};
