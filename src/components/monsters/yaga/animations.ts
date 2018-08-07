const animations = {
  lidRight: {
    fn: p => p.name === 'lid' && p.mod === 'right',
    close: (l, cb) => {
      l.attr({cy: 50.5});
      l.animate({cy: 81,}, 42, cb)
    },
    open: (l, cb) => {
      l.attr({cy: 81});
      l.animate({cy: 50.5,}, 84, cb)
    },
  },
  lidLeft: {
    fn: p => p.name === 'lid' && p.mod === 'left',
    close: (l, cb) => {
      l.attr({cy: 57});
      l.animate({cy: 81,}, 42, cb)
    },
    open: (l, cb) => {
      l.attr({cy: 81});
      l.animate({cy: 57,}, 84, cb)
    },
  },
  mouth: {
    fn: (p) => p.name === 'mouth-figure',
    smileIn: (instance, cb) => {
      instance.attr({ class: 'mouth-figure fadeOut'});
      instance.animate({
        d: 'M81.54,185.9h32c-8.87,13.57,-23.17,13.57,-32,0z'
      }, 100, () => {
        instance.animate({
          d: 'M81.54,185.9h57.28c-15.83,20.83,-41.45,20.83,-57.28,0z'
        }, 100, cb)
      });
    },
    smileOut: (instance, cb) => {
      instance.animate({
        d: 'M81.54,185.9h32c-8.87,13.57,-23.17,13.57,-32,0z'
      }, 100, () => {
        instance.animate({
          d: 'M81.54,185.9h39.1v8.83h-39.1z'
        }, 100, cb)
      });
    },
    sadIn: (instance, cb) => {
      instance.animate({
        d: 'M81.54,185.9h39.1v1h-39.1z'
      }, 100, () => {
        instance.animate({
          d: 'M81.54,200c15.83,-20.83,41.45,-20.83,57.28,0z',
        }, 100, cb);
      });
    },
    sadOut: (instance, cb) => {
      instance.animate({
        d: 'M81.54,185.9h39.1v1h-39.1z'
      }, 100, () => {
        instance.animate({
          d: 'M81.54,185.9h39.1v8.83h-39.1z',
        }, 100, cb);
      });
    },
  },
  tooth: {
    right: (instance, cb) => {
      const { x } = instance.attr();

      instance.animate({x: Number(x) + 22}, 100, cb);
      return;
    },
    left: (instance, cb) => {
      const { x } = instance.attr();

      instance.animate({x: Number(x) - 22}, 100, cb);
      return;
    },
    down: (instance, cb) => {
      const { y } = instance.attr();

      instance.animate({y: Number(y) + 9.3}, 100, cb);
      return;
    },
    up: (instance, cb) => {
      const { y } = instance.attr();

      instance.animate({y: Number(y) - 9.3}, 100, cb);
      return;
    }
  }
};

const sequances = {
  joyful: function(mouth, teeth, isForward, cb) {
    const config = {
      mouth: isForward? 'smileIn' : 'smileOut',
      teeth: isForward? 'right' : 'left',
    }

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === teeth.length + 1) {
        return cb();
      }

      return;
    };

    mouth.animations.run(config.mouth).onDisengage(afterFinish);
    teeth.forEach(tooth => {
      if(isForward) {
        tooth.animations.delay(100);
      };

      tooth.animations.run(config.teeth).onDisengage(afterFinish);
    });

    return;
  },
  sad: function(mouth, teeth, isForward, cb) {
    const config = {
      mouth: isForward? 'sadIn' : 'sadOut',
      teeth: isForward? 'down' : 'up',
    }

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === teeth.length + 1) {
        return cb();
      }

      return;
    };

    mouth.animations.run(config.mouth).onDisengage(afterFinish);

    teeth.forEach(tooth => {
      if(isForward) {
        tooth.animations.recovery();
        tooth.animations.delay(100);
      }

      tooth.animations.run(config.teeth).onDisengage(afterFinish);
    });

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
