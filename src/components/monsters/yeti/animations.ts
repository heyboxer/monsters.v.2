const animations = {
  lid: {
    close: (l, cb) => {
      l.attr({cy: 68});
      l.animate({cy: 79.49,}, 42, cb)
    },
    open: (l, cb) => {
      l.attr({cy: 79.49});
      l.animate({cy: 68,}, 84, cb)
    },
  },
  mouth: {
    fn: (p) => p.name === 'mouth-figure',
    smileIn: (instance, cb) => {
      instance.attr({
        d: 'M82.73,132.72l101.97,0l0,43.29l-101.97,0z'
      });

      instance.animate({
        d: 'M82.73,132.72l101.97,0l-5.7,43.29l-92,0z'
      }, 200, () => {
        instance.attr({
          d: 'M82.73,132.72l101.97,0l-5.7,43.29l-92,0z'
        });
        return cb();
      });
    },
    smileOut: (instance, cb) => {
      instance.attr({
        d: 'M82.73,132.72 184.7,132.72 179,176.01 87,176.01z'
      });
      instance.animate({
        d: 'M82.73,132.72 184.7,132.72 184.7,176.01 82.73,176.01z'
      }, 200, () => {
        instance.attr({
          d: 'M82.73,132.72 184.7,132.72 184.7,176.01 82.73,176.01z'
        });

        return cb();
      });
    },
    sadIn: (instance, cb) => {
      instance.attr({
        d: 'M82.73,132.72 184.7,132.72 184.7,176.01 82.73,176.01z'
      });
      instance.animate({
        d: 'M90,132.72,176,132.72,184.7,176.01,82.73,176.01z'
      }, 200, () => {
        instance.attr({
          d: 'M90,132.72,176,132.72,184.7,176.01,82.73,176.01z'
        });
        return cb();
      });
    },
    sadOut: (instance, cb) => {
      instance.attr({
        d: 'M90,132.72,176,132.72,184.7,176.01,82.73,176.01z'
      });
      instance.animate({
        d: 'M82.73,132.72 184.7,132.72 184.7,176.01 82.73,176.01z'
      }, 200, () => {
        instance.attr({
          d: 'M82.73,132.72 184.7,132.72 184.7,176.01 82.73,176.01z'
        });
        return cb();
      });
    },
  },
  eyebrows: {
    down: (instance, cb) => {
      const { y } = instance.attr();

      instance.animate({y: Number(y) + 7}, 100, cb);
      return;
    },
    up: (instance, cb) => {
      const { y } = instance.attr();

      instance.animate({y: Number(y) - 7}, 100, cb);
      return;
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
  sad: function(mouth, eyebrows, isForward, cb) {
    const config = {
      mouth: isForward? 'sadIn' : 'sadOut',
      eyebrows: isForward? 'down' : 'up',
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

    eyebrows.animations.run(config.eyebrows).onDisengage(afterFinish);

    return;
  },
  default: function(lids, cb) {
    let finished = 0;

    const afterFinish = () => {
      finished++;

      if(finished === 1) {
        return cb();
      }

      return;
    };

    lids.forEach(
      l => l.animations
        .run('close')
        .delay(50)
        .run('open')
        .onDisengage(afterFinish)
    );

  },
};


export { animations, sequances };
