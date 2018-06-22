const zombieJoyAnimBefore = (monster, repo, instance) => {
  const filtered = repo.getCopies().filter(i => {
      if(i.meta.onScreen) {
        return i.onMonster && i.meta.emotion === 'joyful';
      }

      return i.meta.emotion === 'joyful';
  });

  const onMonster = monster.isOnMonster( instance.getBoundingClientRect() );

  if(monster.animate() && filtered.length === 0 && monster.getEmotion() !== 'joyful' && onMonster) {
    monster.makeJoyjul();

    const smile = monster.animate('smile')(true)();
    const smileLids = monster.animate('smileLids')(true)();
  };

  return;
}

const zombieJoyAnimAfter = (monster, repo, instance) => {
  const filtered = repo.getCopies().filter(i => {
      if(i.meta.onScreen) {
        return i.onMonster && i.meta.emotion === 'joyful';
      }

      return i.meta.emotion === 'joyful';
  });

  if(monster.animate() && filtered.length === 0 && monster.getEmotion() === 'joyful') {
    monster.clearEmotion()

    const smile = monster.animate('smile')(false)();
    const smileLids = monster.animate('smileLids')(false)();
  }
}

export { zombieJoyAnimBefore, zombieJoyAnimAfter };
