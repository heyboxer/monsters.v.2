import { GlassComponent } from './glass';

export default {
  id: 2,
  component: GlassComponent,
  meta: {
    container: 'eyes',
    getContainer: function() {
      return this.container;
    },
    uniq: true,
    attr: {
      width: {
        default: ({width}) => width * 2,
        skeleton: ({width}) => 231.61,
        zombie: ({width}) => 250.48,
        yaga: ({width}) => 139.4,
        doctor: ({width}) => 139.42,
        spider: ({width}) => 145.293 * 1.2,
        alien: ({width}) => 178,
        vampire: ({width}) => 134.12,
        yeti: ({width}) => 146.2,
        ghost: ({width}) => 234,
        wolf: ({width}) => 145.29,
        bed: ({width}) => 75.79,
      },
      height: {
        default: ({height}) => height * 2,
        skeleton: ({height}) => 106.96,
        zombie: ({height}) => 67.44,
        yaga: ({height}) => 48.89,
        doctor: ({height}) => 48.89,
        spider: ({width}) => 123.953 * 1.2,
        alien: ({width}) => 70,
        vampire: ({width}) => 50,
        yeti: ({width}) => 78.2,
        ghost: ({width}) => 82.1,
        wolf: ({width}) => 60,
        bed: ({height}) => 26.578,
      },
      x: {
        default: ({x, width}) => x - width / 2,
        skeleton: ({x, width}) => -15.67,
        zombie: ({x, width}) => -24.35,
        yaga: ({x, width}) => 26.75,
        doctor: ({x, width}) => 5,
        spider: ({x, width}) => 45.27,
        alien: ({x, width}) => -6,
        vampire: ({x, width}) => 36,
        yeti: ({x, width}) => 57,
        ghost: ({x, width}) => 5.75,
        wolf: ({x, width}) => 18,
        bed: ({x, width}) => 39.64,
      },
      y: {
        default: ({y, height}) => y - height / 2,
        skeleton: ({y, height}) => 30.75,
        zombie: ({y, height}) => 80,
        yaga: ({y, height}) => 68,
        doctor: ({y, height}) => 143,
        spider: ({y, height}) => 96.13,
        alien: ({y, height}) => 16,
        vampire: ({y, height}) => 81,
        yeti: ({y, height}) => 38,
        ghost: ({y, height}) => 38,
        wolf: ({y, height}) => 55,
        bed: ({y, height}) => 171.58,
      }
    }
  }
};
