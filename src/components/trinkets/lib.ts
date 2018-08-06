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

const clearItem = (monster, items, item, game?) => {
  const { onScreen, after } = item.meta;

  if(!onScreen) {
    monster.clear(item.meta.getContainer( monster.name ));
  } else {
    game.monsterComponent.remove(item.instance);
  }

  items.removeActiveElement(item);
  item.deleteCopy();

  after ? after({
    monster,
    items,
    item,
    instance: item.instance
  }) : null;

  return;
}

const clearInterferingParts = (monster, items) => {
  if(['ghost'].includes(monster.name)) {
    (() => {
      const lollipop = items.getCopies().find(i => i.meta.name === 'lollipop');

      if(!lollipop) return;

      return clearItem(monster, items, lollipop);
    })();

    (() => {
      const moustache = items.getCopies().find(i => i.meta.name === 'moustache');

      if(!moustache) return;

      return clearItem(monster, items, moustache);
    })();

    return;
  }


  if(['skeleton', 'mummy'].includes(monster.name)) {
    const moustache = items.getCopies().find(i => i.meta.name === 'moustache');

    if(!moustache) return;

    clearItem(monster, items, moustache);

    return;
  }

  return;
};


const joyfulAnimBefore = (monster, repo, item, instance, onMonsterDefault?, nosound?) => {

  clearInterferingParts(monster, repo);

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

const joyfulAnimAfter = (monster, repo, item, instance, onMonsterDefault?) => {
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

const sadAnimBefore = (monster, repo, item, instance, onMonsterDefault?, nosound?) => {
  const filtered = repo.getCopies().filter(i => {
    if(i.meta.onScreen) {
      return isOnMonster(i.instance, monster) && i.meta.emotion;
    }

    return i.meta.emotion;
  });

  clearInterferingParts(monster, repo);

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

const sadAnimAfter = (monster, repo, item, instance, onMonsterDefault?,) => {
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

const deleteAllEmotionElements = (monster, game, items) => {
  const emotionElements = items.getCopies().filter(i => i.meta.emotion && (!i.meta.onScreen || i.onMonster));

  emotionElements.forEach(item => clearItem(monster, items, item, game));

  return;
}

export { joyfulAnimBefore, joyfulAnimAfter, sadAnimBefore, sadAnimAfter, deleteAllEmotionElements };
