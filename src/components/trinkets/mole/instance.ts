import { MoleComponent } from './mole';
import { sadAnimBefore, sadAnimAfter } from '../lib'

export default {
  id: 4,
  component: MoleComponent,
  meta: {
    onScreen: true,
    name: 'mole',
    multiple: true,
    emotion: 'sad',
    random: true,
    getContainer: function() {
      return null;
    },
    before: ({ monster, items, item, instance}) => sadAnimBefore(monster, items, item, instance),
    after: ({ monster, items, item, instance}) => sadAnimAfter(monster, items, item, instance),
  }
};
