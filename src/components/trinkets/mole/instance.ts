import { MoleComponent } from './mole';
import { sadAnimBefore, sadAnimAfter } from '../lib'

export default {
  id: 4,
  component: MoleComponent,
  meta: {
    onScreen: true,
    multiple: true,
    emotion: 'sad',
    random: true,
    getContainer: function() {
      return null;
    },
    before: sadAnimBefore,
    after: sadAnimAfter,
  }
};
