import { SoundModel } from './sound.model';

export default [
  {
    name: 'menu',
    monster: false,
    item: new SoundModel('assets/music/menu.mp3', function() {
      return this.sound.play();
    }),
  },
  {
    name: 'door',
    monster: false,
    item: new SoundModel('assets/music/door.mp3', function() {
      return this.sound.play();
    }),
  },
  {
    name: 'characters',
    monster: false,
    item: new SoundModel('assets/music/characters.mp3', function() {
      return this.sound.play();
    }),
  },
  {
    name: 'chupa',
    monster: 'skeleton',
    item: new SoundModel('assets/music/skeleton-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'skeleton',
    item: new SoundModel('assets/music/skeleton-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'skeleton',
    item: new SoundModel('assets/music/skeleton-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'skeleton',
    item: new SoundModel('assets/music/skeleton-song.mp3'),
  },
  {
    name: 'party',
    monster: 'skeleton',
    item: new SoundModel('assets/music/skeleton-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'skeleton',
    item: [
      new SoundModel('assets/music/skeleton-joy-1.mp3'),
      new SoundModel('assets/music/skeleton-joy-2.mp3'),
      new SoundModel('assets/music/skeleton-joy-3.mp3'),
      new SoundModel('assets/music/skeleton-joy-4.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'skeleton',
    item: [
      new SoundModel('assets/music/skeleton-sad-1.mp3'),
      new SoundModel('assets/music/skeleton-sad-2.mp3'),
      new SoundModel('assets/music/skeleton-sad-3.mp3'),
      new SoundModel('assets/music/skeleton-sad-4.mp3'),
    ],
  },
  {
    name: 'chupa',
    monster: 'alien',
    item: new SoundModel('assets/music/alien-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'alien',
    item: new SoundModel('assets/music/alien-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'alien',
    item: new SoundModel('assets/music/alien-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'alien',
    item: new SoundModel('assets/music/alien-song.mp3'),
  },
  {
    name: 'party',
    monster: 'alien',
    item: new SoundModel('assets/music/alien-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'alien',
    item: [
      new SoundModel('assets/music/alien-joy-1.mp3'),
      new SoundModel('assets/music/alien-joy-2.mp3'),
      new SoundModel('assets/music/alien-joy-3.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'alien',
    item: [
      new SoundModel('assets/music/alien-sad-1.mp3'),
      new SoundModel('assets/music/alien-sad-2.mp3'),
    ],
  },

  {
    name: 'chupa',
    monster: 'yaga',
    item: new SoundModel('assets/music/yaga-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'yaga',
    item: new SoundModel('assets/music/yaga-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'yaga',
    item: new SoundModel('assets/music/yaga-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'yaga',
    item: new SoundModel('assets/music/yaga-song.mp3'),
  },
  {
    name: 'party',
    monster: 'yaga',
    item: new SoundModel('assets/music/yaga-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'yaga',
    item: [
      new SoundModel('assets/music/yaga-joy-1.mp3'),
      new SoundModel('assets/music/yaga-joy-2.mp3'),
      new SoundModel('assets/music/yaga-joy-3.mp3'),
      new SoundModel('assets/music/yaga-joy-4.mp3'),
      new SoundModel('assets/music/yaga-joy-5.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'yaga',
    item: [
      new SoundModel('assets/music/yaga-sad-1.mp3'),
      new SoundModel('assets/music/yaga-sad-2.mp3'),
      new SoundModel('assets/music/yaga-sad-3.mp3'),
      new SoundModel('assets/music/yaga-sad-4.mp3'),
    ],
  },

  {
    name: 'chupa',
    monster: 'bed',
    item: new SoundModel('assets/music/bed-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'bed',
    item: new SoundModel('assets/music/bed-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'bed',
    item: new SoundModel('assets/music/bed-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'bed',
    item: new SoundModel('assets/music/bed-song.mp3'),
  },
  {
    name: 'party',
    monster: 'bed',
    item: new SoundModel('assets/music/bed-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'bed',
    item: [
      new SoundModel('assets/music/bed-joy-1.mp3'),
      new SoundModel('assets/music/bed-joy-2.mp3'),
      new SoundModel('assets/music/bed-joy-3.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'bed',
    item: [
      new SoundModel('assets/music/bed-sad-1.mp3'),
      new SoundModel('assets/music/bed-sad-2.mp3'),
      new SoundModel('assets/music/bed-sad-3.mp3'),
    ],
  },

  {
    name: 'chupa',
    monster: 'doctor',
    item: new SoundModel('assets/music/doctor-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'doctor',
    item: new SoundModel('assets/music/doctor-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'doctor',
    item: new SoundModel('assets/music/doctor-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'doctor',
    item: new SoundModel('assets/music/doctor-song.mp3'),
  },
  {
    name: 'party',
    monster: 'doctor',
    item: new SoundModel('assets/music/doctor-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'doctor',
    item: [
      new SoundModel('assets/music/doctor-joy-1.mp3'),
      new SoundModel('assets/music/doctor-joy-2.mp3'),
      new SoundModel('assets/music/doctor-joy-3.mp3'),
      new SoundModel('assets/music/doctor-joy-4.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'doctor',
    item: [
      new SoundModel('assets/music/doctor-sad-1.mp3'),
      new SoundModel('assets/music/doctor-sad-2.mp3'),
    ],
  },

  {
    name: 'chupa',
    monster: 'ghost',
    item: new SoundModel('assets/music/ghost-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'ghost',
    item: new SoundModel('assets/music/ghost-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'ghost',
    item: new SoundModel('assets/music/ghost-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'ghost',
    item: new SoundModel('assets/music/ghost-song.mp3'),
  },
  {
    name: 'party',
    monster: 'ghost',
    item: new SoundModel('assets/music/ghost-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'ghost',
    item: [
      new SoundModel('assets/music/ghost-joy-1.mp3'),
      new SoundModel('assets/music/ghost-joy-2.mp3'),
      new SoundModel('assets/music/ghost-joy-3.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'ghost',
    item: [
      new SoundModel('assets/music/ghost-sad-1.mp3'),
      new SoundModel('assets/music/ghost-sad-2.mp3'),
      new SoundModel('assets/music/ghost-sad-3.mp3'),
    ],
  },

  {
    name: 'chupa',
    monster: 'mummy',
    item: new SoundModel('assets/music/mummy-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'mummy',
    item: new SoundModel('assets/music/mummy-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'mummy',
    item: new SoundModel('assets/music/mummy-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'mummy',
    item: new SoundModel('assets/music/mummy-song.mp3'),
  },
  {
    name: 'party',
    monster: 'mummy',
    item: new SoundModel('assets/music/mummy-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'mummy',
    item: [
      new SoundModel('assets/music/mummy-joy-1.mp3'),
      new SoundModel('assets/music/mummy-joy-2.mp3'),
      new SoundModel('assets/music/mummy-joy-3.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'mummy',
    item: [
      new SoundModel('assets/music/mummy-sad-1.mp3'),
      new SoundModel('assets/music/mummy-sad-2.mp3'),
    ],
  },

  {
    name: 'chupa',
    monster: 'spider',
    item: new SoundModel('assets/music/spider-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'spider',
    item: new SoundModel('assets/music/spider-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'spider',
    item: new SoundModel('assets/music/spider-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'spider',
    item: new SoundModel('assets/music/spider-song.mp3'),
  },
  {
    name: 'party',
    monster: 'spider',
    item: new SoundModel('assets/music/spider-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'spider',
    item: [
      new SoundModel('assets/music/spider-joy-1.mp3'),
      new SoundModel('assets/music/spider-joy-2.mp3'),
      new SoundModel('assets/music/spider-joy-3.mp3'),
      new SoundModel('assets/music/spider-joy-4.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'spider',
    item: [
      new SoundModel('assets/music/spider-sad-1.mp3'),
      new SoundModel('assets/music/spider-sad-2.mp3'),
    ],
  },

  {
    name: 'chupa',
    monster: 'vampire',
    item: new SoundModel('assets/music/vampire-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'vampire',
    item: new SoundModel('assets/music/vampire-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'vampire',
    item: new SoundModel('assets/music/vampire-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'vampire',
    item: new SoundModel('assets/music/vampire-song.mp3'),
  },
  {
    name: 'party',
    monster: 'vampire',
    item: new SoundModel('assets/music/vampire-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'vampire',
    item: [
      new SoundModel('assets/music/vampire-joy-1.mp3'),
      new SoundModel('assets/music/vampire-joy-2.mp3'),
      new SoundModel('assets/music/vampire-joy-3.mp3'),
      new SoundModel('assets/music/vampire-joy-4.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'vampire',
    item: [
      new SoundModel('assets/music/vampire-sad-1.mp3'),
      new SoundModel('assets/music/vampire-sad-2.mp3'),
    ],
  },

  {
    name: 'chupa',
    monster: 'wolf',
    item: new SoundModel('assets/music/wolf-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'wolf',
    item: new SoundModel('assets/music/wolf-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'wolf',
    item: new SoundModel('assets/music/wolf-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'wolf',
    item: new SoundModel('assets/music/wolf-song.mp3'),
  },
  {
    name: 'party',
    monster: 'wolf',
    item: new SoundModel('assets/music/wolf-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'wolf',
    item: [
      new SoundModel('assets/music/wolf-joy-1.mp3'),
      new SoundModel('assets/music/wolf-joy-2.mp3'),
      new SoundModel('assets/music/wolf-joy-3.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'wolf',
    item: [
      new SoundModel('assets/music/wolf-sad-1.mp3'),
      new SoundModel('assets/music/wolf-sad-2.mp3'),
      new SoundModel('assets/music/wolf-sad-3.mp3'),
    ],
  },

  {
    name: 'chupa',
    monster: 'yeti',
    item: new SoundModel('assets/music/yeti-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'yeti',
    item: new SoundModel('assets/music/yeti-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'yeti',
    item: new SoundModel('assets/music/yeti-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'yeti',
    item: new SoundModel('assets/music/yeti-song.mp3'),
  },
  {
    name: 'party',
    monster: 'yeti',
    item: new SoundModel('assets/music/yeti-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'yeti',
    item: [
      new SoundModel('assets/music/yeti-joy-1.mp3'),
      new SoundModel('assets/music/yeti-joy-2.mp3'),
      new SoundModel('assets/music/yeti-joy-3.mp3'),
      new SoundModel('assets/music/yeti-joy-4.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'yeti',
    item: [
      new SoundModel('assets/music/yeti-sad-1.mp3'),
      new SoundModel('assets/music/yeti-sad-2.mp3'),
      new SoundModel('assets/music/yeti-sad-3.mp3'),
    ],
  },

  {
    name: 'chupa',
    monster: 'zombie',
    item: new SoundModel('assets/music/zombie-chupa.mp3'),
  },
  {
    name: 'fart',
    monster: 'zombie',
    item: new SoundModel('assets/music/zombie-fart.mp3'),
  },
  {
    name: 'glasses',
    monster: 'zombie',
    item: new SoundModel('assets/music/zombie-glasses.mp3'),
  },
  {
    name: 'song',
    monster: 'zombie',
    item: new SoundModel('assets/music/zombie-song.mp3'),
  },
  {
    name: 'party',
    monster: 'zombie',
    item: new SoundModel('assets/music/zombie-party.mp3'),
  },
  {
    name: 'joy',
    monster: 'zombie',
    item: [
      new SoundModel('assets/music/zombie-joy-1.mp3'),
      new SoundModel('assets/music/zombie-joy-2.mp3'),
      new SoundModel('assets/music/zombie-joy-3.mp3'),
    ],
  },
  {
    name: 'sad',
    monster: 'zombie',
    item: [
      new SoundModel('assets/music/zombie-sad-1.mp3'),
      new SoundModel('assets/music/zombie-sad-2.mp3'),
      new SoundModel('assets/music/zombie-sad-3.mp3'),
      new SoundModel('assets/music/zombie-sad-4.mp3'),
    ],
  },
]
