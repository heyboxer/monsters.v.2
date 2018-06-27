const animations = {
  lid: {
    close: (l, cb) => {
      l.attr({cy: 36});
      l.animate({cy: 65.5,}, 42, cb)
    },
    open: (l, cb) => {
      l.attr({cy: 65.5});
      l.animate({cy: 36,}, 84, cb)
    },
  },
  mouth: {
    rmClipSync: (instance, cb) => {
      instance.attr({ class: 'mouth mouth--no-clip-path'});

      return cb();
    },
    addClipSync: (instance, cb) => {
      instance.attr({ class: 'mouth'});

      return cb();
    }
  },
  ubula: {
    hide: (instance, cb) => {
      instance.attr({ opacity: 1 });

      instance.animate({ opacity: 0 }, 100, cb);
    },
    show: (instance, cb) => {
      instance.attr({ opacity: 0 });

      instance.animate({ opacity: 1 }, 100, cb);
    },
  },
  tooth: {
    fn: p => p.name === 'smile-tooth',
    hide: (instance, cb) => {
      instance.attr({ opacity: 1 });

      instance.animate({ opacity: 0 }, 200, cb);
    },
    show: (instance, cb) => {
      instance.attr({ opacity: 0 });

      instance.animate({ opacity: 1 }, 200, cb);
    },
    translateToSad: (instance, cb) => {
      instance.attr({ transform: 't25,48.5'})
      return cb();
    },
    translateToDefault: (instance, cb) => {
      instance.attr({ transform: 't0,0'});
      return cb();
    },
  },
  teeth: {
    hide: (instance, cb) => {
      instance.attr({ opacity: 1 });

      instance.animate({ opacity: 0 }, 100, cb);
    },
    show: (instance, cb) => {
      instance.attr({ opacity: 0 });

      instance.animate({ opacity: 1 }, 100, cb);
    },
  },
  mouthFigure: {
    fn: (p) => p.name === 'mouth-figure',
    smileIn: (instance, cb) => {
      instance.attr({
        d: 'M122.87,214.5c-15.62,0,-28.28,-27.67,-28.28,-61.83s12.66,-61.84,28.28,-61.84s28.29,27.69,28.29,61.84s-12.66,61.83,-28.29,61.83z',
        class: 'mouth-figure mouth-figure--stroke'
      });

      instance.animate({
        d: 'M122,150c-23,0,-43.56,-11.47,-49.9,-27.9l-1,-2.62h101.81l-1,2.62c-6.35,16.46,-26.87,27.9,-49.91,27.9z'
      }, 200, cb)
    },
    smileOut: (instance, cb) => {
      instance.attr({
        d: 'M122,150c-23,0,-43.56,-11.47,-49.9,-27.9l-1,-2.62h101.81l-1,2.62c-6.35,16.46,-26.87,27.9,-49.91,27.9z',
        class: 'mouth-figure'
      });

      instance.animate({
        d: 'M122.87,214.5c-15.62,0,-28.28,-27.67,-28.28,-61.83s12.66,-61.84,28.28,-61.84s28.29,27.69,28.29,61.84s-12.66,61.83,-28.29,61.83z'
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
  joyful: function(mouthFigure, mouth, ubula, teeth, smileTooth, isForward, cb) {
    const config = {
      mouthFigure: isForward? 'smileIn' : 'smileOut',
      mouth: isForward? 'rmClipSync' : 'addClipSync',
      ubula: isForward? 'hide' : 'show',
      teeth: isForward? 'hide' : 'show',
      smileTooth: isForward? 'show' : 'hide',
    }

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 4) {
        return cb();
      }

      return;
    };

    mouth.animations.run(config.mouth);
    ubula.animations.run(config.ubula).onDisengage(afterFinish);
    teeth.animations.run(config.teeth).onDisengage(afterFinish);
    smileTooth.animations.run(config.smileTooth).onDisengage(afterFinish);
    mouthFigure.animations.run(config.mouthFigure).onDisengage(afterFinish);

    return;
  },
  sad: function(mouthFigure, mouth, ubula, teeth, smileTooth, isForward, cb) {
    const config = {
      mouthRotate: isForward? 'rotateInSync' : 'rotateOutSync',
      mouthFigure: isForward? 'smileIn' : 'smileOut',
      mouth: isForward? 'rmClipSync' : 'addClipSync',
      ubula: isForward? 'hide' : 'show',
      teeth: isForward? 'hide' : 'show',
      smileTooth: isForward? 'show' : 'hide',
      smileToothTranslate: isForward? 'translateToSad' : 'translateToDefault',

      // teeth: isForward? 'rotateInSync' : 'rotateOutSync',
    }

    const seq = isForward?
      [config.mouthRotate, config.mouthFigure] :
      [config.mouthFigure, config.mouthRotate];

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
    }, mouthFigure.animations);

    mouthSeq.onDisengage(afterFinish);
    mouth.animations.run(config.mouth);
    ubula.animations.run(config.ubula).onDisengage(afterFinish);
    teeth.animations.run(config.teeth).onDisengage(afterFinish);
    smileTooth.animations
      .run(config.smileToothTranslate)
      .run(config.smileTooth)
      .onDisengage(afterFinish);

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
