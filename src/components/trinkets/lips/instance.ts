import { LipsComponent } from './lips';

export default {
  id: 12,
  component: LipsComponent,
  meta: {
    container: 'mouth',
    name: 'lips',
    getContainer: function() {
      return this.container;
    },
    uniq: true,
    before: ({monster, repo, instance}) => {
      monster.open('eyelashes');

      monster.makeSound('joy');

      if(monster.name === 'skeleton') {
        monster.close('teeth');
        monster.open('hidden-jaw-two');
        monster.close('mouth-figure');
      }

      if(monster.name === 'zombie') {
        monster.open('sad-eyes');
      }

      if(monster.name === 'mummy') {
        monster.open('mouth-fraud');
      }

      if(monster.name === 'spider') {
        monster.close('mouth-decor');
      }

      if(monster.name === 'wolf') {
        monster.close('tongue');
        monster.close('drooling');
        monster.close('jaw');
        monster.close('teeth');
        monster.close('smile-part');
        monster.open('jaw-closed');
      }

      if(monster.name === 'vampire') {
        monster.close('mouth-figure');
        monster.close('teeth');
      }

      if(!['skeleton', 'wolf', 'vampire'].includes(monster.name)) {
        monster.close('mouth');
      }
    },
    after: ({monster, repo, instance}) => {
      monster.close('eyelashes');

      if(monster.name === 'skeleton') {
        monster.open('teeth');
        monster.close('hidden-jaw-two');
        monster.open('mouth-figure');
      }

      if(monster.name === 'zombie') {
        monster.close('sad-eyes');
      }

      if(monster.name === 'mummy') {
        monster.close('mouth-fraud');
      }

      if(monster.name === 'spider') {
        monster.open('mouth-decor');
      }

      if(monster.name === 'wolf') {
        monster.open('tongue');
        monster.open('drooling');
        monster.open('jaw');
        monster.open('teeth');
        monster.open('smile-part');
        monster.close('jaw-closed');
      }

      if(monster.name === 'vampire') {
        monster.open('mouth-figure');
        monster.open('teeth');
      }

      if(!['skeleton', 'wolf', 'vampire'].includes(monster.name)) {
        monster.open('mouth');
      }
    },
    attr: {
      width: {
        default: ({width}) => width * 1.5,
        skeleton: ({width}) => 99.84,
        zombie: ({width}) => 89.5,
        mummy: ({width}) => 122.3,
        yaga: ({width}) => 73.3,
        doctor: ({width}) => 74.8,
        spider: ({width}) => 117.876,
        alien: ({width}) => 94.78 * 1.4,
        vampire: ({width}) => 56.56,
        yeti: ({width}) => 93.325,
        ghost: ({width}) => 137.74,
        wolf: ({width}) => 79.76,
        bed: ({width}) => 41.571,
      },
      height: {
        default: ({height}) => height * 1.5,
        skeleton: ({height}) => 80.52,
        zombie: ({height}) => 76.5,
        mummy: ({height}) => 94.6,
        yaga: ({height}) => 73.4,
        doctor: ({height}) => 85.62,
        spider: ({height}) => 119.6,
        alien: ({height}) => 59.46 * 1.4,
        vampire: ({height}) => 94.4,
        yeti: ({height}) => 41.1,
        ghost: ({height}) => 90.24,
        wolf: ({height}) => 31.785,
        bed: ({height}) => 27.56,
      },
      x: {
        default: ({x, width}) => (x - (width * 1.5) / 2) + width / 2,
        skeleton: ({x, width}) => 50.03000457763672,
        zombie: ({x, width}) => 84.62109375,
        mummy: ({x, width}) => 69.53359375,
        yaga: ({x, width}) => 61.540000915527344,
        doctor: ({x, width}) => 38.019998168945314,
        spider: ({x, width}) => 72.99699755859375,
        alien: ({x, width}) => 24,
        vampire: ({x, width}) => 75.15000030517578,
        yeti: ({x, width}) => 87.062109375,
        ghost: ({x, width}) => 54.00000656127929,
        wolf: ({x, width}) => 73.78000068664551,
        bed: ({x, width}) => 56.74999984741211,
      },
      y: {
        default: ({y, height}) => (y - (height * 1.5) / 2) + height / 2,
        skeleton: ({y, height}) => 105.5199966430664,
        zombie: ({y, height}) => 132.140625,
        mummy: ({y, height}) => 96.8515625,
        yaga: ({y, height}) => 155.89999389648438,
        doctor: ({y, height}) => 174.4300030517578,
        spider: ({y, height}) => 125.79000091552734,
        alien: ({y, height}) => 90,
        vampire: ({y, height}) => 150.5,
        yeti: ({y, height}) => 130.7890625,
        ghost: ({y, height}) => 110.93000793457031,
        wolf: ({y, height}) => 116.0022201538086,
        bed: ({y, height}) => 192.1999969482422,
      }
    }
  }
};
