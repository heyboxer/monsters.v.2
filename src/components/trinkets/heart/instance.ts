import { HeartComponent } from './heart';
import { joyfulAnimBefore, joyfulAnimAfter } from '../lib'

export default {
  id: 5,
  component: HeartComponent,
  meta: {
    name: 'heart',
    getContainer: function() {
      return null;
    },
    before: ({ monster, items, item, instance }) => joyfulAnimBefore(monster, items, item, instance),
    after: ({ monster, items, item, instance }) => joyfulAnimAfter(monster, items, item, instance),
    emotion: 'joyful',
    onScreen: true,
    multiple: true,
  }
};
