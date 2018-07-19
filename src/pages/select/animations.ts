// @ts-ignore: Unreachable code error
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

export default function () {
  var state = true;

  const animations = [
    // (cb) => {
    //
    //   const hand = Snap( document.getElementById('skeleton_hand') );
    //
    //   hand.animate({
    //     transform: 'r60,137,83'
    //   }, 600, () => {
    //     setTimeout(() => {
    //       hand.animate({
    //         transform: 'r0,137,83'
    //       }, 500, cb);
    //     }, 150);
    //   });
    //
    //   return;
    // },

    (cb) => {

      const hand = Snap( document.getElementById('monsters_doctor_hand') );

      hand.animate({
        transform: 'r-90,93,140'
      }, 600, () => {
        setTimeout(() => {
          hand.animate({
            transform: 'r0,93,140'
          }, 500, cb);
        }, 150);
      });

      return;
    },

    // (cb) => {
    //   const ghost = Snap( document.getElementById('monsters_ghost') );
    //
    //   ghost.animate({
    //     transform: 'r360,210,100'
    //   }, 1200, mina.easeinout, () => {
    //     ghost.attr({ transform: 'r0,210,100' });
    //     return cb();
    //   });
    //
    //   return;
    // },

    // (cb) => {
    //   const yaga = Snap( document.getElementById('monsters_yaga') );
    //
    //   yaga.animate({
    //     transform: 'r360,110,350'
    //   }, 1600, mina.easeinout, () => {
    //     yaga.attr({ transform: 'r0,110,350' });
    //     return cb();
    //   });
    //
    //   return;
    // },
    //
    // (cb) => {
    //   const spider = Snap( document.getElementById('monsters_spider') );
    //
    //   spider.animate({
    //     transform: 't0,-23'
    //   }, 700, mina.easeout, () => {
    //     return setTimeout(() => {
    //       return spider.animate({
    //         transform: 't0,0',
    //       }, 400, mina.easeout, cb);
    //     }, 250);
    //   });
    //
    //   return;
    // },

    // (cb) => {
    //   const windows = Array.from( document.getElementsByClassName('monsters_window') );
    //
    //   const counter = (() => {
    //     var count = 0;
    //
    //     return () => {
    //       count++
    //
    //       if(count === windows.length) cb();
    //
    //       return;
    //     }
    //   })();
    //
    //   windows.forEach(w => {
    //     w.classList.add('monsters_window--yellow');
    //
    //
    //     return setTimeout(() => {
    //       w.classList.remove('monsters_window--yellow');
    //
    //       return setTimeout(() => {
    //         return counter();
    //       }, 300);
    //     }, 1400);
    //   });
    //
    //   return;
    // },

    // (cb) => {
    //   const rightEye = Snap( document.getElementById('monsters_bed_eyeball_right') );
    //   const leftEye = Snap( document.getElementById('monsters_bed_eyeball_left') );
    //
    //   const counter = (() => {
    //     var count = 0;
    //
    //     return () => {
    //       count++
    //
    //       if(count === 2) cb();
    //
    //       return;
    //     }
    //   })();
    //
    //   const blink = (callback?) => {
    //     rightEye.animate({
    //       d: 'M15.49,34.25a2.6,2.6,0,0,0,3.68,0a2.6,2.6,0,0,0,-3.68,0z'
    //     }, 250, () => {
    //       rightEye.animate({
    //         d: 'M15.49,31a2.6,2.6,0,0,0,3.68,0a2.6,2.6,0,0,0,-3.68,0z',
    //       }, 190, callback)
    //     });
    //
    //     leftEye.animate({
    //       d: 'M11,34.24a2.6,2.6,0,0,0,3.68,0a2.6,2.6,0,0,0,-3.68,0z'
    //     }, 250, () => {
    //       leftEye.animate({
    //         d: 'M11,31a2.6,2.6,0,0,0,3.68,0a2.6,2.6,0,0,0,-3.68,0z',
    //       }, 190, callback);
    //     });
    //   };
    //
    //   blink();
    //
    //   setTimeout(() => {
    //     return blink(counter);
    //   }, 500);
    //
    //   return;
    // },
  ]

  const rec = (acc) => {
    if(!state) return;

    const [first, ...rest] = acc;

    first(() => {
      return setTimeout(() => {
        return rest.length ? rec(rest) : rec(animations);
      }, 1000);
    });

    return;
  }

  rec(animations);

  return () => {
    state = false;
  };
};
