const animations = {
  lid: {
    close: (l, cb) => {
      l.attr({cy: 95});
      l.animate({cy: 108.56,}, 42, cb)
    },
    open: (l, cb) => {
      l.attr({cy: 108.56});
      l.animate({cy: 95,}, 84, cb)
    },
  },
  lidLeft: {
    fn: (p) => p.name === 'sad-eyelid' && p.mod === 'left',
    frownIn:  (instance, cb) => {
      instance.attr({
        d: 'M80,100 80,100 80,100z',
      });

      instance.animate({
        d: 'M80,100 95,100 80,113z',
      }, 200, cb)
    },
    frownOut:  (instance, cb) => {
      instance.attr({
        d: 'M80,100 95,100 80,113z',
      });

      instance.animate({
        d: 'M80,100 80,100 80,100z',
      }, 200, cb)
    },
  },
  lidRight: {
    fn: (p) => p.name === 'sad-eyelid' && p.mod === 'right',
    frownIn:  (instance, cb) => {
      instance.attr({
        d: 'M127,100 127,100 127,100z',
      });

      instance.animate({
        d: 'M112,100 127,100 127,113z',
      }, 200, cb)
    },
    frownOut:  (instance, cb) => {
      instance.attr({
        d: 'M112,100 127,100 127,113z',
      });

      instance.animate({
        d: 'M127,100 127,100 127,100z',
      }, 200, cb)
    },
  },
  mouth: {
    fn: (p) => p.name === 'mouth-figure',
    narrowIn: (instance, cb) => {
      instance.attr({
        d: 'M82,193.75v-6.03h42.86v6.03z'
      });

      instance.animate({
        d: 'M82,193.75v-1h42.86v1z'
      }, 100, cb)
    },
    narrowOut: (instance, cb) => {
      instance.attr({
        d: 'M82,193.75v-1h42.86v1z'
      });

      instance.animate({
        d: 'M82,193.75v-6.03h42.86v6.03z'
      }, 100, cb)
    },
    smileIn: (instance, cb) => {
      instance.attr({
        d: 'M82,193.5c11,0,32,0,43,0z',
        class: 'mouth-figure mouth-figure--black'
      });

      instance.animate({
        d: 'M82,193.5c11,33,32,33,43,0z'
      }, 100, cb);
    },
    smileOut: (instance, cb) => {
      instance.attr({
        d: 'M82,193.5c11,33,32,33,43,0z',
        class: 'mouth-figure'
      });

      instance.animate({
        d: 'M82,193.5c11,0,32,0,43,0z'
      }, 100, cb);
    },
    sadIn: (instance, cb) => {
      instance.attr({
        d: 'M82,193.5c11,0,32,0,43,0z',
        class: 'mouth-figure mouth-figure--red'
      });

      instance.animate({
        d: 'M82,193.5c11,-9.34,32,-9.34,43,0z'
      }, 100, cb);
    },
    sadOut: (instance, cb) => {
      instance.attr({
        d: 'M82,193.5c11,-9.34,32,-9.34,43,0z',
        class: 'mouth-figure'
      });

      instance.animate({
        d: 'M82,193.5c11,0,32,0,43,0z'
      }, 100, cb);
    },
  },
};

const sequances = {
  joyful: function(mouth, isForward, cb) {
    const config = {
      mouthFirst: isForward? 'narrowIn' : 'narrowOut',
      mouthSecond: isForward? 'smileIn' : 'smileOut',
    }

    const seq = isForward? [config.mouthFirst, config.mouthSecond] : [config.mouthSecond, config.mouthFirst];

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 1) {
        return cb();
      }

      return;
    };

    const mouthSeq = seq.reduce((acc, el) => {
      return acc.run(el);
    }, mouth.animations);

    mouthSeq.onDisengage(afterFinish);

    return;
  },
  sad: function(mouth, lidLeft, lidRight, isForward, cb) {
    const config = {
      mouthFirst: isForward? 'narrowIn' : 'narrowOut',
      mouthSecond: isForward? 'sadIn' : 'sadOut',
      lids: isForward? 'frownIn' : 'frownOut',
    }

    const seq = isForward? [config.mouthFirst, config.mouthSecond] : [config.mouthSecond, config.mouthFirst];

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 3) {
        return cb();
      }

      return;
    };

    const mouthSeq = seq.reduce((acc, el) => {
      return acc.run(el);
    }, mouth.animations);

    mouthSeq.onDisengage(afterFinish);

    lidLeft.animations.run(config.lids).onDisengage(afterFinish);
    lidRight.animations.run(config.lids).onDisengage(afterFinish);

    return;
  },
  default: function(lids, cb) {
    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 2) {
        return cb();
      }

      return;
    };

    lids.forEach( l => l.animations.run('close').delay(50).run('open').onDisengage(afterFinish));

    return;
  },
};


export { animations, sequances };
