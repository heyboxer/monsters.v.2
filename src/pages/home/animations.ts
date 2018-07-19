// @ts-ignore: Unreachable code error
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

export default () => {
  const first = Snap( document.getElementById('logo_eye_first') );
  const second = Snap( document.getElementById('logo_eye_second') );
  const third = Snap( document.getElementById('logo_eye_third') );
  const last = Snap( document.getElementById('logo_eye_last') );


  const path1 = {
   	string: 'M60.4,46 c2,-25 -10,-32 -39.5,-23',
     initialPoint: { x: 97.4, y: 64 },
     getLength() {
     	return Snap.path.getTotalLength( this.string );
     },
     getPoints(length) {
     	const { x, y } = Snap.path.getPointAtLength( this.string, length );

     	return { x: x - this.initialPoint.x, y: y - this.initialPoint.y };
     },
   }

   const animation = ({start, end, element, getPoints, interval, callback, easing}) => {
      return Snap.animate(start, end, (step) => {
       const { x,y } = getPoints(step);

       element.transform(`t${x},${y}`);

     }, interval, easing, callback);
   }

  const rotate = {

    first: function() {

      first.animate({
        transform: 'r360,16,4.5',
      }, 1500, () => {
        first.attr({ transform: 'r0,16,4.5' });

        return this.first();
      });

      return;
    },
// M13.5,5a3,3 0 1,0 6,0a3,3 0 1,0 -6,0

  }

  // rotate.first();

  return;
}
