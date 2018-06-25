import { HeartComponent } from './heart';
import { joyfulAnimBefore, joyfulAnimAfter } from '../lib'

export default {
  id: 5,
  component: HeartComponent,
  meta: {
    getContainer: function() {
      return null;
    },
    before: joyfulAnimBefore,
    after: joyfulAnimAfter,
    emotion: 'joyful',
    onScreen: true,
    multiple: true,
  }
};
