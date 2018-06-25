import { BraComponent } from './bra';

export default {
  id: 10,
  component: BraComponent,
  meta: {
    container: 'body',
    getContainer: function() {
      return this.container;
    },
    uniq: true,
    before: (monster) => {
      if(monster.name === 'bed') {
        monster.close('eyes');
      }

      return;
    },
    after: (monster) => {
      if(monster.name === 'bed') {
        monster.open('eyes');
      }

      return;
    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        zombie: ({width}) => 160,
        mummy: ({width}) => 204,
        alien: ({width}) => 79.1,
        skeleton: ({width}) => 200.69,
        yaga: ({width}) => 139.95,
        doctor: ({width}) => 93.99,
        spider: ({width}) => 146,
        vampire: ({width}) => 70.86,
        wolf: ({width}) => 194.5,
        ghost: ({width}) => 220,
        yeti: ({width}) => 332.8,
        bed: ({width}) => 65.47,
      },
      height: {
        default: ({height}) => height * 1.5,
        zombie: ({height}) => 71,
        mummy: ({height}) => 50,
        alien: ({height}) => 58.25,
        skeleton: ({height}) => 110.29,
        yaga: ({height}) => 101.45,
        doctor: ({height}) => 47.97,
        spider: ({height}) => 173,
        vampire: ({height}) => 45.46,
        wolf: ({height}) => 69.8,
        ghost: ({height}) => 145.5,
        yeti: ({height}) => 137.75,
        bed: ({height}) => 35.973,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        zombie: ({x, width}) => x + 10,
        mummy: ({x, width}) => ((x - (204) / 2) + width / 2) + 9,
        alien: ({x, width}) => ((x - (71.9) / 2) + width / 2) - 3.5,
        skeleton: ({x, width}) => 0,
        yaga: ({x, width}) => x,
        doctor: ({x, width}) => (x - 93.99 / 2) + width / 2,
        spider: ({x, width}) => ((x - (146) / 2) + width / 2),
        vampire: ({x, width}) => (x - (70.86) / 2) + width / 2,
        wolf: ({x, width}) => x,
        ghost: ({x, width}) => ((x - (220) / 2) + width / 2) - 0.25,
        yeti: ({x, width}) => x + 1.5,
        bed: ({x, width}) => 148.5,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        ghost: ({y, height}) => y + 105,
        zombie: ({y, height}) => y + 20,
        mummy: ({y, height}) => y + 2,
        alien: ({y, height}) => y + 10,
        skeleton: ({y, height}) => y - 20,
        yaga: ({y, height}) => y,
        doctor: ({y, height}) => y + 15,
        spider: ({y, height}) => y + 80,
        vampire: ({y, height}) => y + 82,
        wolf: ({y, height}) => y,
        yeti: ({y, height}) => y + 22,
        bed: ({y, height}) => y - 60,
      }
    }
  }
};
