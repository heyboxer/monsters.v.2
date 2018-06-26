const animations = {
  lidLeft: {
    fn: p => p.name === 'lid' && p.mod === 'left',
    close: (l, cb) => {
      l.attr({
        d: 'M45,2a52.14,52.14,0,0,0,52.17,52.17a52.14,52.14,0,0,0,-52.17,-52.17z',
      });

      l.animate({
        d: 'M25.19,26.89a52.14,52.14,0,0,0,52.17,52.17a52.14,52.14,0,0,0,-52.17,-52.17z'
      }, 42, cb)
    },
    open: (l, cb) => {
      l.attr({
        d: 'M25.19,26.89a52.14,52.14,0,0,0,52.17,52.17a52.14,52.14,0,0,0,-52.17,-52.17z',
      });

      l.animate({
        d: 'M45,2a52.14,52.14,0,0,0,52.17,52.17a52.14,52.14,0,0,0,-52.17,-52.17z'
      }, 42, cb)
    },
  },
  lidRight: {
    fn: p => p.name === 'lid' && p.mod === 'right',
    close: (l, cb) => {
      l.attr({
        d: 'M115.14,2a52.14,52.14,0,0,0,-52.14,52.17a52.14,52.14,0,0,0,52.14,-52.17z',
      });

      l.animate({
        d: 'M140.14,26.89A52.14,52.14,0,0,0,88,79.06,52.14,52.14,0,0,0,140.14,26.89Z'
      }, 42, cb)
    },
    open: (l, cb) => {
      l.attr({
        d: 'M140.14,26.89A52.14,52.14,0,0,0,88,79.06,52.14,52.14,0,0,0,140.14,26.89Z',
      });

      l.animate({
        d: 'M115.14,2a52.14,52.14,0,0,0,-52.14,52.17a52.14,52.14,0,0,0,52.14,-52.17z'
      }, 42, cb)
    },
  },
  mouth: {
    fn: (p) => p.name === 'mouth-figure',
    smileIn: (instance, cb) => {
      instance.attr({
        class: 'mouth fadeIn',
        d: 'M82.66,131.54a2.83,2.83,0,0,1-2.45-1.41l-3.15-5.45a2.83,2.83,0,0,1,2.45-4.24h6.29a2.83,2.83,0,0,1,2.45,4.24l-3.15,5.45A2.83,2.83,0,0,1,82.66,131.54Z'
      });
      instance.animate({
        d: 'M49.75,116c18.26,30.66,47.82,30.66,66.08,0z'
      }, 200, cb);
    },
    smileOut: (instance, cb) => {
      instance.attr({
        class: 'mouth fadeOut',
        d: 'M49.75,116c18.26,30.66,47.82,30.66,66.08,0z'
      });
      instance.animate({
        d: 'M82.66,131.54a2.83,2.83,0,0,1-2.45-1.41l-3.15-5.45a2.83,2.83,0,0,1,2.45-4.24h6.29a2.83,2.83,0,0,1,2.45,4.24l-3.15,5.45A2.83,2.83,0,0,1,82.66,131.54Z'
      }, 200, cb);
    },
    sadIn: (instance, cb) => {
      instance.attr({
        class: 'mouth fadeIn',
        d: 'M82.66,131.54a2.83,2.83,0,0,1-2.45-1.41l-3.15-5.45a2.83,2.83,0,0,1,2.45-4.24h6.29a2.83,2.83,0,0,1,2.45,4.24l-3.15,5.45A2.83,2.83,0,0,1,82.66,131.54Z'
      });
      instance.animate({
        d: 'M60,136c12,-25,30,-25,45.08,0z'
      }, 200, cb);
    },
    sadOut: (instance, cb) => {
      instance.attr({
        class: 'mouth fadeOut',
        d: 'M60,136c12,-25,30,-25,45.08,0z'
      });
      instance.animate({
        d: 'M82.66,131.54a2.83,2.83,0,0,1-2.45-1.41l-3.15-5.45a2.83,2.83,0,0,1,2.45-4.24h6.29a2.83,2.83,0,0,1,2.45,4.24l-3.15,5.45A2.83,2.83,0,0,1,82.66,131.54Z'
      }, 200, cb);
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

  },
};


export { animations, sequances };
