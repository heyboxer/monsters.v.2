import { HeartComponent } from './heart';
import { zombieJoyAnimBefore, zombieJoyAnimAfter } from '../lib'

export default {
  id: 5,
  component: HeartComponent,
  meta: {
    getContainer: function() {
      return null;
    },
    before: zombieJoyAnimBefore,
    after: zombieJoyAnimAfter,
    emotion: 'joyful',
    onScreen: true,
    multiple: true,
  }
};
