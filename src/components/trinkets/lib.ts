const joyfulAnimBefore = (monster, repo, instance, onMonsterDefault?, nosound?) => {
  const filtered = repo.getCopies().filter(i => {
      if(i.meta.onScreen) {
        return (i.onMonster || onMonsterDefault) && (i.meta.emotion);
      }

      return i.meta.emotion;
  });

  const hasSad = filtered.find(i => {
    if(i.meta.onScreen) {
      return (i.onMonster  || onMonsterDefault) && (i.meta.emotion === 'sad');
    }

    return i.meta.emotion === 'sad';
  });

  const onMonster = onMonsterDefault || monster.isOnMonster( instance.getBoundingClientRect() );

  if(onMonster && !nosound) monster.makeSound('joy');


  if(monster.getEmotion() === 'default' && onMonster) {
    monster.makeJoyful();
  } else if(hasSad) {
    // monster.setAnimationStack('joyful');
  };

  return;
}

const joyfulAnimAfter = (monster, repo, instance, onMonsterDefault?) => {
  const filtered = repo.getCopies().filter(i => {
      if(i.meta.onScreen) {
        return (i.onMonster  || onMonsterDefault) && i.meta.emotion;
      }

      return i.meta.emotion;
  });

  if(filtered.length === 0 && monster.getEmotion() === 'joyful') {
    monster.clearEmotion();
  }
}

const sadAnimBefore = (monster, repo, instance, onMonsterDefault?, nosound?) => {
  const filtered = repo.getCopies().filter(i => {
      if(i.meta.onScreen) {
        return (i.onMonster || onMonsterDefault) && i.meta.emotion === 'sad';
      }

      return i.meta.emotion === 'sad';
  });

  const onMonster = onMonsterDefault || monster.isOnMonster( instance.getBoundingClientRect() );
  const emotion = monster.getEmotion();

  if(onMonster && !nosound) monster.makeSound('sad');

  if(filtered.length === 0 &&  emotion !== 'sad' && onMonster) {
    if(emotion === 'joyful') {
      monster.clearEmotion(() => {
        monster.makeSad();
      });
    } else {
      monster.makeSad();
    }

    return;
  };

  return;
}

const sadAnimAfter = (monster, repo, instance, onMonsterDefault?) => {
  const filtered = repo.getCopies().filter(i => {
      if(i.meta.onScreen) {
        return (i.onMonster || onMonsterDefault) && i.meta.emotion;
      }

      return i.meta.emotion;
  });

  const filteredSad = filtered.filter(i => {
      if(i.meta.onScreen) {
        return (i.onMonster || onMonsterDefault) && i.meta.emotion === 'sad';
      }

      return i.meta.emotion === 'sad';
  });

  const hasJoyful = filtered.find(i => {
    if(i.meta.onScreen) {
      return (i.onMonster || onMonsterDefault) && (i.meta.emotion === 'joyful');
    }

    return i.meta.emotion === 'joyful';
  });

  if(filteredSad.length === 0 && monster.getEmotion() === 'sad') {
    monster.clearEmotion(() => {
      if(hasJoyful) monster.makeJoyful();
    });
  }
}

export { joyfulAnimBefore, joyfulAnimAfter, sadAnimBefore, sadAnimAfter };
