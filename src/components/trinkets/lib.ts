const isEmotion = (monster, name : string) => {
  return monster.getEmotion() === name;
}

const hasEmotion = (monster) => {
  return !isEmotion(monster, 'default');
}

const getLast = (arr) => {
  return arr[arr.length - 1];
}

const isOnMonster = (instance, monster) => {
  return monster.isOnMonster( instance.getBoundingClientRect() );
}


const joyfulAnimBefore = (monster, repo, instance, onMonsterDefault?, nosound?) => {
  const filtered = repo.getCopies().filter(i => {
    if(i.meta.onScreen) {
      return isOnMonster(i.instance, monster) && i.meta.emotion;
    }

    return i.meta.emotion;
  });

  const onMonster = onMonsterDefault || isOnMonster(instance, monster);

  if(onMonster && !nosound) monster.makeSound('joy');

  if(!hasEmotion(monster) && onMonster) {
    return monster.makeJoyful();
  } else if(!isEmotion(monster, 'joyful') && onMonster) {
    monster.clearEmotion(() => {
      monster.makeJoyful();

      return;
    });

    return;
  }

  return;

};

const joyfulAnimAfter = (monster, repo, instance, onMonsterDefault?) => {
  const filtered = repo.getCopies().filter(i => {

    if(i.meta.onScreen) {
      return isOnMonster(i.instance, monster) && i.meta.emotion;
    }

    return i.meta.emotion;
  });

  if(filtered.length === 0) {
    monster.clearEmotion();

    return;
  };

  const last = getLast(filtered);

  if(last.meta.emotion !== 'joyful' && monster.emotion === 'joyful') {
    monster.clearEmotion(() => {
      monster.makeSad();
    });

    return;
  }

  return;
};

const sadAnimBefore = (monster, repo, instance, onMonsterDefault?, nosound?) => {
  const filtered = repo.getCopies().filter(i => {
    if(i.meta.onScreen) {
      return isOnMonster(i.instance, monster) && i.meta.emotion;
    }

    return i.meta.emotion;
  });

  const onMonster = onMonsterDefault || isOnMonster(instance, monster);

  if(onMonster && !nosound) monster.makeSound('sad');

  if(!hasEmotion(monster) && onMonster) {
    return monster.makeSad();
  } else if(!isEmotion(monster, 'sad') && onMonster) {
    monster.clearEmotion(() => {
      monster.makeSad();

      return;
    });

    return;
  }

  return;

}

const sadAnimAfter = (monster, repo, instance, onMonsterDefault?) => {
  const filtered = repo.getCopies().filter(i => {

    if(i.meta.onScreen) {
      return isOnMonster(i.instance, monster) && i.meta.emotion;
    }

    return i.meta.emotion;
  });

  if(filtered.length === 0) {
    monster.clearEmotion();

    return;
  };

  const last = getLast(filtered);

  if(last.meta.emotion !== 'sad' && monster.emotion === 'sad') {
    monster.clearEmotion(() => {
      monster.makeJoyful();
    });

    return;
  }

  return;
}

export { joyfulAnimBefore, joyfulAnimAfter, sadAnimBefore, sadAnimAfter };
