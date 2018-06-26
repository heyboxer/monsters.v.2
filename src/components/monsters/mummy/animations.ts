const animations = {
  lid: {
    close: (l, cb) => {
      l.attr({cy: 64});
      l.animate({cy: 82.46,}, 42, cb)
    },
    open: (l, cb) => {
      l.attr({cy: 82.46});
      l.animate({cy: 64,}, 84, cb)
    },
  },
  tooth: {
    down: (instance, cb) => {
      instance.attr({ d: 'M115.34,154h10.86v16l-10.86,-2.16z' });
      instance.animate({
        d: 'M145.34,186.66h-10.86v-16l10.86,2.13z',
      }, 200, cb);
    },
    up: (instance, cb) => {
      instance.attr({ d: 'M145.34,186.66h-10.86v-16l10.86,2.13z' });
      instance.animate({
        d: 'M115.34,154h10.86v16l-10.86,-2.16z',
      }, 200, cb);
    },
  },
  mouth: {
    fn: (p) => p.name === 'mouth' && p.type === 'element',
    smileIn: (instance, cb) => {
      instance.attr({ class: 'mouth-figure fadeOut'});
      instance.animate({
        d: 'M193.13,182.24c-44.08,36.24,-101.89,25,-129.26,-25z'
      }, 200, cb);
    },
    smileOut: (instance, cb) => {
      instance.animate({
        d: 'M193.13,182.24,64.24,156.85c.14.64.29,1.27.43,1.91l124.6,32.29Q191.32,186.79,193.13,182.24Z'
      }, 200, cb);
    },
    sadIn: (instance, cb) => {
      instance.attr({
        d: 'M193.13,182.24,64.24,156.85c.14.64.29,1.27.43,1.91l124.6,32.29Q191.32,186.79,193.13,182.24Z',
      });

      instance.animate({
        d: 'M64.24,158c44.08,-36.24,101.89,-25,129.26,25z'
      }, 100, cb);
    },
    sadOut: (instance, cb) => {
      instance.attr({
        d: 'M64.24,158c44.08,-36.24,101.89,-25,129.26,25z',
      });
      instance.animate({
        d: 'M193.13,182.24,64.24,156.85c.14.64.29,1.27.43,1.91l124.6,32.29Q191.32,186.79,193.13,182.24Z'
      }, 100, cb);
    },
  }
};

const sequances = {
  joyful: function(mouth, isForward, cb) {
    const config = {
      mouth: isForward? 'smileIn' : 'smileOut',
    }

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 1) {
        return cb();
      }

      return;
    };

    mouth.animations.run(config.mouth).onDisengage(afterFinish);

    return;
  },
  sad: function(mouth, tooth, isForward, cb) {
    const config = {
      mouth: isForward? 'sadIn' : 'sadOut',
      tooth: isForward? 'up' : 'down',
    }

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 2) {
        return cb();
      }

      return;
    };

    mouth.animations.run(config.mouth).onDisengage(afterFinish);
    tooth.animations.run(config.tooth).onDisengage(afterFinish);

    return;
  },
  default: function(lids, cb) {
    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === lids.length) {
        return cb();
      }

      return;
    };

    lids.forEach(l => l.animations.run('close').delay(50).run('open').onDisengage(afterFinish));

  },
};


export { animations, sequances };
