const animations = {
  lid: {
    close: (l, cb) => {
      l.attr({cy: 68});
      l.animate({cy: 104,}, 42, cb)
    },
    open: (l, cb) => {
      l.attr({cy: 104});
      l.animate({cy: 68,}, 84, cb)
    },
  },
  mouthTop: {
    fn: (p) => p.name === 'mouth-figure' && p.mod === 'top',
    smileIn: (instance, cb) => {
      instance.attr({
        d: 'M100,126c17.41,0,45.58,0,63,0z'
      });

      instance.animate({
        d: 'M100,126c17.41,29.23,45.58,29.23,63,0z'
      }, 200, cb);
    },
    smileOut: (instance, cb) => {
      instance.attr({
        d: 'M100,126c17.41,29.23,45.58,29.23,63,0z'
      });

      instance.animate({
        d: 'M100,126c17.41,0,45.58,0,63,0z'
      }, 200, cb);
    },
    sadIn: (instance, cb) => {
      instance.attr({
        d: 'M100,126c17.41,0,45.58,0,63,0z'
      });

      instance.animate({
        d: 'M100,145c17.41,-29.23,45.58,-29.23,63,0z'
      }, 200, cb);
    },
    sadOut: (instance, cb) => {
      instance.attr({
        d: 'M100,145c17.41,-29.23,45.58,-29.23,63,0z'
      });

      instance.animate({
        d: 'M100,126c17.41,0,45.58,0,63,0z'
      }, 200, cb);
    },
  },
  mouthBottom: {
    fn: (p) => p.name === 'mouth-figure' && p.mod === 'bottom',
    smileIn: (instance, cb) => {
      instance.attr({
        d: 'M93,225c12,0,65,0,80,0z'
      });

      instance.animate({
        d: 'M93,225c12,35,65,35,80,0z'
      }, 200, cb);
    },
    smileOut: (instance, cb) => {
      instance.attr({
        d: 'M93,225c12,35,65,35,80,0z'
      });

      instance.animate({
        d: 'M93,225c12,0,65,0,80,0z'
      }, 200, cb);
    },
    sadIn: (instance, cb) => {
      instance.attr({
        d: 'M93,225c12,0,65,0,80,0z'
      });

      instance.animate({
        d: 'M93,245c12,-35,65,-35,80,0z'
      }, 200, cb);
    },
    sadOut: (instance, cb) => {
      instance.attr({
        d: 'M93,245c12,-35,65,-35,80,0z'
      });

      instance.animate({
        d: 'M93,225c12,0,65,0,80,0z'
      }, 200, cb);
    },
  },
  teeth: {
    rotateInSync: (instance, cb) => {
      const { 'data-origin-x': x, 'data-origin-y': y} = instance.attr();

      instance.attr({ transform: `r180,${x},${y}`})
      return cb();
    },
    rotateOutSync: (instance, cb) => {
      const { 'data-origin-x': x, 'data-origin-y': y} = instance.attr();
      instance.attr({ transform: `r0,${x},${y}`})
      return cb();
    },
  }
};

const sequances = {
  joyful: function(mouthTop, mouthBottom, isForward, cb) {
    const config = {
      mouth: isForward? 'smileIn' : 'smileOut',
    }

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 2) {
        return cb();
      }

      return;
    };

    mouthTop.animations.run(config.mouth).onDisengage(afterFinish);
    mouthBottom.animations.run(config.mouth).onDisengage(afterFinish);

    return;
  },
  sad: function(mouthTop, mouthBottom, teeth, isForward, cb) {
    const config = {
      mouth: isForward? 'sadIn' : 'sadOut',
      teeth: isForward? 'rotateInSync' : 'rotateOutSync',
    }

    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 2) {
        return cb();
      }

      return;
    };

    teeth.forEach(t => t.animations.run(config.teeth));

    mouthTop.animations.run(config.mouth).onDisengage(afterFinish);
    mouthBottom.animations.run(config.mouth).onDisengage(afterFinish);


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
