import { Node } from '../../app/model/node.model/node';

const zombie = new Node('zombie', '');

const eyes = zombie.addChild('eyes', '');

const eyeLeft = eyes.addChild('eyeLeft', '');
eyeLeft.addChild('eyeball', {
	tag: 'ellipse',
	cx: 66.08,
	cy: 97.54,
	rx: 27.81,
	ry: 16.86,
});
eyeLeft.addChild('pupil', {
	tag: 'circle',
	cx: 74.18,
	cy: 97.32,
	r: 8.32,
});


const eyeRight = eyes.addChild('eyeRight', '');
eyeRight.addChild('eyeball', {
	tag: 'ellipse',
	cx: 135.7,
	cy: 97.54,
	rx: 27.81,
	ry: 16.86,
});
eyeRight.addChild('pupil', {
	tag: 'circle',
	cx: 142.93,
	cy: 97.32,
	r: 8.32,
});


export default zombie;
