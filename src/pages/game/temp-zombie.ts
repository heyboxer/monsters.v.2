import { Node } from '../../app/model/node.model';
import { Meta } from '../../app/model/meta.model';
import { RootMeta } from '../../app/model/root-meta.model';
import { Element } from '../../app/model/element.model';
import { SvgBuilder } from '../../app/model/svg-builder';

const config = {
	viewBox: [0, 0, 233.58, 324.24],
	width: 'auto',
	height: '95%',
	className: 'zombie svg-container',
}
const zombie = new Node('zombie', new RootMeta(config));

const eyes = zombie.addChild('eyes', new Meta('g', { class: 'eyes', }));

const eyeLeft = eyes.addChild('eyeLeft', new Meta('g', { class: 'eye eye--left', }));

eyeLeft.addChild('eyeball', new Meta('ellipse', {
	cx: 66.08,
	cy: 97.54,
	rx: 27.81,
	ry: 16.86,
}));

eyeLeft.addChild('pupil', new Meta('circle', {
	cx: 74.18,
	cy: 97.32,
	r: 8.32,
	class: 'pupil'
}));


const eyeRight = eyes.addChild('eyeRight', new Meta('g', { class: 'eye eye--right', }));
eyeRight.addChild('eyeball', new Meta('ellipse', {
	cx: 135.7,
	cy: 97.54,
	rx: 27.81,
	ry: 16.86,
}));

eyeRight.addChild('pupil', new Meta('circle', {
	cx: 142.93,
	cy: 97.32,
	r: 8.32,
	class: 'pupil'
}));

const zombieEl = new Element(zombie);
const zombieNode = () => new SvgBuilder(zombieEl);

export default zombieNode;
