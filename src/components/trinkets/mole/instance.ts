import { MoleComponent } from './mole';
import { zombieJoyAnimBefore, zombieJoyAnimAfter } from '../lib'

export default {
  id: 4,
  component: MoleComponent,
  meta: {
    onScreen: true,
    multiple: true,
    random: true,
    getContainer: function() {
      return null;
    },
    before: (monster, items, instance) => {
      if(monster.animate() && monster.isOnMonster( instance.getBoundingClientRect() )) {
        const smile = monster.animate('smile')(true)();
        const smileLids = monster.animate('smileLids')(true)();
      }
    },
    after: (monster, items) => {
      if(monster.animate()) {
        const smile = monster.animate('smile')(false)();
        const smileLids = monster.animate('smileLids')(false)();
      }
    },
  }
};
