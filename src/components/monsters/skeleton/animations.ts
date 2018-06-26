const animations = {
  lid: {
    close: (l, cb) => {
      l.attr({cy: 16});
      l.animate({cy: 66.37,}, 42, cb)
    },
    open: (l, cb) => {
      l.attr({cy: 66.37});
      l.animate({cy: 16,}, 84, cb)
    },
  },
  mouth: {
    fn: (p) => p.name === 'mouth-figure',
    smileIn: (instance, cb) => {
      instance.attr({
        d: 'M43.33,143h113.24v0h-113.24z'
      });

      instance.animate({
        d: 'M43.33,143.4c40,76,90,45.22,113.24,0z'
      }, 200, cb);
    },
    smileOut: (instance, cb) => {
      instance.attr({
        d: 'M43.33,143.4c40,76,90,45.22,113.24,0z'
      });

      instance.animate({
        d: 'M43.33,143h113.24v0h-113.24z'
      }, 200, cb);
    },
    sadIn: (instance, cb) => {
      // M43.33,143h113.24v0h-113.24z
      instance.attr({
        d: 'M43.33,143h113.24v0h-113.24z'
      });

      instance.animate({
        d: 'M43.33,188.5c40,-74,90,-45.22,113.24,0z'
      }, 200, cb);
    },
    sadOut: (instance, cb) => {
      instance.attr({
        d: 'M43.33,188.5c40,-74,90,-45.22,113.24,0z'
      });

      instance.animate({
        d: 'M43.33,143h113.24v0h-113.24z'
      }, 200, cb);
    },
  },
  teeth: {
    fn: p => p.name === 'teeth-top' || p.name === 'teeth-bottom',
    addOutClassSync: (instance, cb) => {
      instance.attr({ class: 'teeth fadeOut'});

      return cb();
    },
    addInClassSync: (instance, cb) => {
      instance.attr({ class: 'teeth fadeIn' });

      return cb();
    },
    hideClassSync: (instance, cb) => {
      const { class: c } = instance.attr();

      instance.attr({ class: c + ' teeth--hidden' });

      return cb();
    },
  }
};

const sequances = {
  joyful: function(mouth, topTeeth, bottomTeeth, isForward, cb) {
    const config = {
      mouth: isForward? 'smileIn' : 'smileOut',
      teeth: isForward? 'addInClassSync' : 'addOutClassSync',
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
    topTeeth.animations.run(config.teeth);
    bottomTeeth.animations.run(config.teeth).run('hideClassSync');

    return;
  },
  sad: function(mouth, topTeeth, bottomTeeth, isForward, cb) {
    const config = {
      mouth: isForward? 'sadIn' : 'sadOut',
      teeth: isForward? 'addInClassSync' : 'addOutClassSync',
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
    topTeeth.animations.run(config.teeth).run('hideClassSync');
    bottomTeeth.animations.run(config.teeth);

    return;
  },
  default: function(lidLeft, lidRight, cb) {
    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 2) {
        return cb();
      }

      return;
    };

    lidLeft.animations.run('close').delay(50).run('open').onDisengage(afterFinish);
    lidRight.animations.run('close').delay(50).run('open').onDisengage(afterFinish);

  },
};


export { animations, sequances };
