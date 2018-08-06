import { EarringsComponent } from './earrings';

export default {
  id: 15,
  component: EarringsComponent,
  meta: {
    container: 'ears',
    name: 'earrings',
    getContainer: function() {
      return this.container;
    },
    uniq: true,
    before: ({monster, items, instance}) => {
      monster.open('ears');
    },
    after: ({monster, items, instance}) => {
      if(!['doctor', 'vampire', 'yeti', 'wolf'].includes(monster.name)) {
        monster.close('ears');
      }
    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 150.972 * 1.4,
        zombie: ({width}) => 30.9,
        mummy: ({width}) => 182.231 * 1.1,
        yaga: ({width}) => 74.1,
        doctor: ({width}) => 121.678 * 1.2,
        spider: ({width}) => 139.306 * 1.2,
        alien: ({width}) => 179.948 * 1.05,
        vampire: ({width}) => 84.972 * 1.1,
        yeti: ({width}) => 179.827,
        ghost: ({width}) => 213.687,
        wolf: ({width}) => 104.50,
        bed: ({width}) => 79.667,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 26.887 * 1.4,
        zombie: ({height}) => 46.233,
        mummy: ({height}) => 46.233 * 1.1,
        yaga: ({height}) => 19.844,
        doctor: ({height}) => 37.141 *1.2,
        spider: ({height}) => 100.455 * 1.2,
        alien: ({height}) => 26.887 * 1.05,
        vampire: ({height}) => 26.887 * 1.1,
        yeti: ({height}) => 37.141,
        ghost: ({height}) => 44.04,
        wolf: ({height}) => 40.501,
        bed: ({height}) => 23.187,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => (x - (150.972 * 1.4) / 2) + width / 2,
        zombie: ({x, width}) => (x - (30.9) / 2) + width / 2,
        mummy: ({x, width}) => (x - (182.231 * 1.1) / 2) + width / 2,
        yaga: ({x, width}) => ((x - (74.1 * 1.1) / 2) + width / 2) + 3,
        doctor: ({x, width}) => (x - (121.678 * 1.2) / 2) + width / 2,
        spider: ({x, width}) => (x - (139.3 * 1.2) / 2) + width / 2,
        alien: ({x, width}) => (x - (179.948 * 1.05) / 2) + width / 2,
        vampire: ({x, width}) => (x - (84.972 * 1.1) / 2) + width / 2,
        yeti: ({x, width}) => (x - (179.827) / 2) + width / 2,
        ghost: ({x, width}) => (x - (213.687) / 2) + width / 2,
        wolf: ({x, width}) => (x - (104.50) / 2) + width / 2,
        bed: ({x, width}) => (x - (79.667) / 2) + width / 2,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => y + 22,
        zombie: ({y, height}) => y + 20,
        mummy: ({y, height}) => y + 35,
        yaga: ({y, height}) => y + 23,
        doctor: ({y, height}) => y + 30,
        spider: ({y, height}) => y + 15,
        alien: ({y, height}) => y + 22,
        vampire: ({y, height}) => y + 30,
        yeti: ({y, height}) => y + 15,
        ghost: ({y, height}) => y + 45,
        wolf: ({y, height}) => y + 10,
        bed: ({y, height}) => y + 20,
      }
    }
  }
};
