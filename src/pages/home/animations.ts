// @ts-ignore: Unreachable code error
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

export default () => {
  const first = Snap( document.getElementById('logo_eye_first') );
  const second = Snap( document.getElementById('logo_eye_second') );
  const third = Snap( document.getElementById('logo_eye_third') );
  const last = Snap( document.getElementById('logo_eye_last') );
  const lastEyelash = Snap( document.getElementById('logo_eye_last_eyelash') );


  const path1 = {
   	string: 'M14.75,4a1.75,1.75 0 1,0 3.5,0a1.75,1.75 0 1,0 -3.5,0',
     initialPoint: { x: 16, y: 5 },
     getLength() {
     	return Snap.path.getTotalLength( this.string );
     },
     getPoints(length) {
     	const { x, y } = Snap.path.getPointAtLength( this.string, length );

     	return { x: x - this.initialPoint.x, y: y - this.initialPoint.y };
     },
   }

  const path2 = {
   	string: 'M56.25,4a1.75,1.75 0 1,0 3.5,0a1.75,1.75 0 1,0 -3.5,0',
     initialPoint: { x: 56.25, y: 3 },
     getLength() {
     	return Snap.path.getTotalLength( this.string );
     },
     getPoints(length) {
     	const { x, y } = Snap.path.getPointAtLength( this.string, length );

     	return { x: x - this.initialPoint.x, y: y - this.initialPoint.y };
     },
   }

  const path3 = {
   	string: 'M80.25,4a1.75,1.75 0 1,0 3.5,0a1.75,1.75 0 1,0 -3.5,0',
     initialPoint: { x: 82.5, y: 5 },
     getLength() {
     	return Snap.path.getTotalLength( this.string );
     },
     getPoints(length) {
     	const { x, y } = Snap.path.getPointAtLength( this.string, length );

     	return { x: x - this.initialPoint.x, y: y - this.initialPoint.y };
     },
   }

   const animation = ({start, end, element, getPoints, interval, callback }) => {
      return Snap.animate(start, end, (step) => {
       const { x,y } = getPoints(step);

       element.transform(`t${x},${y}`);

     }, interval, callback);
   }

  const rotate = {

    first: function() {
      return animation({
        start: 0,
        end: path1.getLength(),
        element: first,
        getPoints: step => path1.getPoints(step),
        interval: 800,
        callback: () => this.first(),
      });
    },
    second: function() {
      return animation({
        start: path2.getLength(),
        end: 0,
        element: second,
        getPoints: step => path2.getPoints(step),
        interval: 1300,
        callback: () => this.second(),
      });
    },
    third: function() {
      return animation({
        start: 0,
        end: path3.getLength(),
        element: third,
        getPoints: step => path3.getPoints(step),
        interval: 1000,
        callback: () => this.third(),
      });
    },

  }

  rotate.first();
  rotate.second();
  rotate.third();

  const animateLastEyelash = () => lastEyelash.animate({
    cy: 4.5,
  }, 100, () => {
    setTimeout(() => {
      lastEyelash.animate({
        cy: -5,
      }, 150, () => {
        setTimeout(animateLastEyelash, 900);
      })
    }, 50);
  });

  animateLastEyelash();

  return;
}
