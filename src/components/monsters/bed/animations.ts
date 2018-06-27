const animations = {
  lidLeft: {
    fn: p => p.name === 'lid' && p.mod === 'left',
    close: (l, cb) => {
      l.attr({
        d: 'M56.66,168.28a13.34,13.34,0,0,0,18.88,0a13.34,13.34,0,0,0,-18.88,0z'
      });
      l.animate({
        d: 'M56.66,176.28a13.34,13.34,0,0,0,18.88,0a13.34,13.34,0,0,0,-18.88,0z'
      }, 42, cb)
    },
    open: (l, cb) => {
      l.attr({
        d: 'M56.66,176.28a13.34,13.34,0,0,0,18.88,0a13.34,13.34,0,0,0,-18.88,0z'
      });
      l.animate({
        d: 'M56.66,168.28a13.34,13.34,0,0,0,18.88,0a13.34,13.34,0,0,0,-18.88,0z'
      }, 42, cb)
    },
  },
  lidRight: {
    fn: p => p.name === 'lid' && p.mod === 'right',
    close: (l, cb) => {
      l.attr({
        d: 'M79.53,168.28a13.34,13.34,0,0,0,18.88,0a13.34,13.34,0,0,0,-18.88,0z'
      });

      l.animate({
        d: 'M79.53,176.28a13.34,13.34,0,0,0,18.88,0a13.34,13.34,0,0,0,-18.88,0z'
      }, 42, cb)
    },
    open: (l, cb) => {
      l.attr({
        d: 'M79.53,176.28a13.34,13.34,0,0,0,18.88,0a13.34,13.34,0,0,0,-18.88,0z'
      });

      l.animate({
        d: 'M79.53,168.28a13.34,13.34,0,0,0,18.88,0a13.34,13.34,0,0,0,-18.88,0z'
      }, 42, cb)
    },
  },
  teeth: {
    fn: p => p.name === 'mouth',
    scaleIn: (instance, cb) => {
      instance.animate({
        transform: 's1.5,1.5'
      }, 200, cb);
    },
    scaleOut: (instance, cb) => {
      instance.animate({
        transform: 's1,1'
      }, 200, cb);
    },
    rotateInSync: (instance, cb) => {
      instance.attr({
        transform: 'r180 t0,12'
      });

      return cb();
    },
    rotateOutSync: (instance, cb) => {
      instance.attr({
        transform: 'r0 t0,0'
      });

      return cb();
    },
  },
  mouth: {
    fn: (p) => p.name === 'mouth-figure',
    smileIn: (instance, cb) => {
      instance.attr({
        d: 'M94,209a0,0,0,0,1,-32.76,0z'
      });

      instance.animate({
        d: 'M94,209a23.15,23.15,0,0,1,-32.76,0z'
      }, 200, cb)
    },
    smileOut: (instance, cb) => {
      instance.attr({
        d: 'M94,209a23.15,23.15,0,0,1,-32.76,0z'
      });

      instance.animate({
        d: 'M94,209a0,0,0,0,1,-32.76,0z'
      }, 200, cb)
    },
    rotateInSync: (instance, cb) => {
      instance.attr({ transform: 'r180' });
      return cb();
    },
    rotateOutSync: (instance, cb) => {
      instance.attr({ transform: 'r0' });
      return cb();
    }
  },
};

const sequances = {
  joyful: function(mouth, teeth, isForward, cb) {
    const config = {
      mouth: isForward? 'smileIn' : 'smileOut',
      teeth: isForward? 'scaleIn' : 'scaleOut',
    }

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 2) {
        return cb();
      }

      return;
    };

    teeth.animations.run(config.teeth).onDisengage(afterFinish);
    mouth.animations.run(config.mouth).onDisengage(afterFinish);

    return;
  },
  sad: function(mouth, teeth, isForward, cb) {
    const config = {
      mouth: isForward? 'smileIn' : 'smileOut',
      mouthRotate: isForward? 'rotateInSync' : 'rotateOutSync',
      teeth: isForward? 'rotateInSync' : 'rotateOutSync',
    }

    const seq = isForward?
      [config.mouthRotate, config.mouth] :
      [config.mouth, config.mouthRotate];

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 2) {
        return cb();
      }

      return;
    };

    const mouthSeq = seq.reduce((acc, el) => {
      return acc.run(el);
    }, mouth.animations);

    mouthSeq.onDisengage(afterFinish);

    if(isForward) {
      teeth.animations.delay(0).run(config.teeth).onDisengage(afterFinish);
      return;
    }
    
    teeth.animations.delay(200).run(config.teeth).onDisengage(afterFinish);

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

    return;
  },
};


export { animations, sequances };
