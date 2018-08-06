const animations = {
  lidLeft: {
    fn: p => p.name === 'lid' && p.mod === 'left',
    close: (l, cb) => {
      l.attr({
        d: 'M53.75,70a22.69,22.69,0,0,0,32.1,0a22.69,22.69,0,0,0-32.1,0z'
      });
      l.animate({
        d: 'M53.75,82.9a22.69,22.69,0,0,0,32.1,0a22.69,22.69,0,0,0-32.1,0z'
      }, 42, cb)
    },
    open: (l, cb) => {
      l.attr({
        d: 'M53.75,82.9a22.69,22.69,0,0,0,32.1,0a22.69,22.69,0,0,0-32.1,0z'
      });
      l.animate({
        d: 'M53.75,70a22.69,22.69,0,0,0,32.1,0a22.69,22.69,0,0,0-32.1,0z'
      }, 42, cb)
    },
  },
  lidRight: {
    fn: p => p.name === 'lid' && p.mod === 'right',
    close: (l, cb) => {
      l.attr({
        d: 'M95,70a22.69,22.69,0,0,0,32.1,0a22.69,22.69,0,0,0-32.1,0z'
      });

      l.animate({
        d: 'M95,82.9a22.69,22.69,0,0,0,32.1,0a22.69,22.69,0,0,0-32.1,0z'
      }, 42, cb)
    },
    open: (l, cb) => {
      l.attr({
        d: 'M95,82.9a22.69,22.69,0,0,0,32.1,0a22.69,22.69,0,0,0-32.1,0z'
      });

      l.animate({
        d: 'M95,70a22.69,22.69,0,0,0,32.1,0a22.69,22.69,0,0,0-32.1,0z'
      }, 42, cb)
    },
  },
  eyeLeft: {
    fn: p => p.name === 'eye' && p.mod === 'left',
    incline: (instance, cb) => {
      instance.attr({ transform: 'r0,69,82' });

      instance.animate({
        transform: 'r-10,69,82'
      }, 200, cb);

      return
    },
    straight: (instance, cb) => {
      instance.attr({ transform: 'r-10,69,82' });

      instance.animate({
        transform: 'r0,69,82'
      }, 200, cb);

      return
    },
  },
  eyeRight: {
    fn: p => p.name === 'eye' && p.mod === 'right',
    incline: (instance, cb) => {
      instance.attr({ transform: 'r0,110,82' });

      instance.animate({
        transform: 'r10,110,82'
      }, 200, cb);

      return;
    },
    straight: (instance, cb) => {
      instance.attr({ transform: 'r10,110,82' });

      instance.animate({
        transform: 'r0,110,82'
      }, 200, cb);

      return
    },
  },
  tongue: {
    putAway: (instance, cb) => {
      instance.attr({ width: 226.72 });

      instance.animate({
        width: 110,
      }, 100, cb);

      return;
    },
    getBack: (instance, cb) => {
      instance.attr({ width: 110 });

      instance.animate({
        width: 226.72,
      }, 100, cb);

      return;
    },
  },
  smileTop: {
    fn: p => p.name === 'smile-part' && p.mod === 'top',
    smileIn: (instance, cb) => {
      instance.attr({
        d: 'M99,119a85.1,0,0,0,0,120.42,0',
      })

      instance.animate({
        d: 'M99,119a85.1,85.1,0,0,0,120.42,0',
      }, 200, cb);

      return;
    },
    smileOut: (instance, cb) => {
      instance.attr({
        d: 'M99,119a85.1,85.1,0,0,0,120.42,0',
      })

      instance.animate({
        d: 'M99,119a85.1,0,0,0,0,120.42,0',
      }, 200, cb);

      return;
    }
  },
  smileBottom: {
    fn: p => p.name === 'smile-part' && p.mod === 'bottom',
    smileIn: (instance, cb) => {
      instance.attr({
        d: 'M195,185c-44.61,0,-61.38,-12.53,-70.45,-40.63v47.51h61.59z',
      })

      instance.animate({
        d: 'M219,175c-44.61,0,-61.38,-12.53,-70.45,-40.63v47.51h61.59z',
      }, 200, cb);

      return;
    },
    smileOut: (instance, cb) => {
      instance.attr({
        d: 'M219,175c-44.61,0,-61.38,-12.53,-70.45,-40.63v47.51h61.59z',
      })

      instance.animate({
        d: 'M195,185c-44.61,0,-61.38,-12.53,-70.45,-40.63v47.51h61.59z',
      }, 200, cb);

      return;
    }
  },
};

const sequances = {
  joyful: function(tongue, smileTop, smileBottom, isForward, cb) {
    const config = {
      tongue: isForward? 'putAway' : 'getBack',
      smileTop: isForward? 'smileIn' : 'smileOut',
      smileBottom: isForward? 'smileIn' : 'smileOut',
    }

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 3) {
        return cb();
      }

      return;
    };

    tongue.animations.run(config.tongue).onDisengage(afterFinish);
    smileTop.animations.run(config.smileTop).onDisengage(afterFinish);
    smileBottom.animations.run(config.smileBottom).onDisengage(afterFinish);

    return;
  },
  sad: function(eyeLeft, eyeRight, tongue, isForward, cb) {
    const config = {
      eyes: isForward? 'incline' : 'straight',
      tongue: isForward? 'putAway' : 'getBack',
    }

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 3) {
        return cb();
      }

      return;
    };

    tongue.animations.run(config.tongue).onDisengage(afterFinish);
    eyeLeft.animations.run(config.eyes).onDisengage(afterFinish);
    eyeRight.animations.run(config.eyes).onDisengage(afterFinish);

    return;
  },
  default: function(lidRight, lidLeft, cb) {
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

    return;
  },
};


export { animations, sequances };
