const animations = {
  lidRight: {
    fn: p => p.name === 'lid' && p.mod === 'right',
    close: (l, cb) => {
      l.attr({cy: 107});
      l.animate({cy: 137.5,}, 42, cb)
    },
    open: (l, cb) => {
      l.attr({cy: 137.5});
      l.animate({cy: 107,}, 84, cb)
    },
  },
  lidLeft: {
    fn: p => p.name === 'lid' && p.mod === 'left',
    close: (l, cb) => {
      l.attr({cy: 127});
      l.animate({cy: 143.35,}, 42, cb)
    },
    open: (l, cb) => {
      l.attr({cy: 143.35});
      l.animate({cy: 127,}, 84, cb)
    },
  },
  mouth: {
    fn: (p) => p.name === 'mouth-figure',
    smileIn: (instance, cb) => {
      instance.attr({ class: 'mouth-figure fadeOut'});
      instance.animate({
        d: 'M98,231.5h-45v-1h45z'
      }, 100, () => {
        instance.animate({
          d: 'M48.5,232c15.13,12.67,39.61,12.67,54.74,0z',
        }, 100, cb);
      });
    },
    smileOut: (instance, cb) => {
      instance.animate({
        d: 'M98,231.5h-45v-1h45z'
      }, 100, () => {
        instance.animate({
          d: 'M98,231.5h-45v-7.34h45z',
        }, 100, cb);
      });
    },
    sadIn: (instance, cb) => {
      instance.attr({ class: 'mouth-figure fadeIn'});
      instance.animate({
        d: 'M98,231.5h-45v-1h45z'
      }, 100, () => {
        instance.animate({
          d: 'M103,247c-15.69,-13.13,-41.07,-13.13,-56.76,0z',
        }, 100, cb);
      });
    },
    sadOut: (instance, cb) => {
      instance.attr({ class: 'mouth-figure fadeOut'});
      instance.animate({
        d: 'M98,231.5h-45v-1h45z'
      }, 100, () => {
        instance.animate({
          d: 'M98,231.5h-45v-7.34h45z',
        }, 100, cb);
      });
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
  sad: function(mouth, isForward, cb) {
    const config = {
      mouth: isForward? 'sadIn' : 'sadOut',
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

    //
    // setTimeout(() => {
    //   pupils[0].animations.onDisengage(afterFinish);
    //   pupils.forEach(l => {
    //     l.animations.run('right');
    //     return;
    //   });
    // }, 500);

  },
};


export { animations, sequances };
