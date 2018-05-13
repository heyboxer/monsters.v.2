// import Parser from '../../app/model/parser.model';
//
// const eyeLeft = {
// 	tag: 'g',
// 	config: {
// 		class: 'eye eye--left',
// 	},
// 	children: {
// 		'eyeball' : {
// 			tag: 'ellipse',
// 			config: {
// 				cx: 66.08, cy: 97.54, rx: 27.81, ry: 16.86,
// 				class: 'eyeball'
// 			}
// 		},
// 		'pupil' : {
// 			tag: 'circle',
// 			config: {
// 				cx: 74.18, cy: 97.32, r: 8.32,
// 				class: 'pupil'
// 			}
// 		},
// 	},
// }
//
// const eyeRight = {
// 	tag: 'g',
// 	config: {
// 		class: 'eye eye--right',
// 	},
// 	children: {
// 		'eyeball' : {
// 			tag: 'ellipse',
// 			config: {
// 				cx: 135.7, cy: 97.54, rx: 27.81, ry: 16.86,
// 				class: 'eyeball'
// 			}
// 		},
// 		'pupil' : {
// 			tag: 'circle',
// 			config: {
// 				cx: 142.93, cy: 97.32, r: 8.32,
// 				class: 'pupil'
// 			}
// 		},
// 	},
// }
//
// const eyes = {
// 	tag: 'g',
// 	config: { class: 'eyes' },
// 	children: {
// 		eyeLeft,
// 		eyeRight
// 	}
// }
//
// const hair = {
//   tag: 'g',
//   config: { class: 'hair' },
//   children: {
//     'hairPart': {
//       tag: 'polygon',
//       config: {
//         points: '132.33 -0.05 96.08 48.13 87.64 48.13 79.21 48.13 132.33 -0.05',
//         class: 'hair-part'
//       },
//       siblings: [
//         { points: '145.47 -0.05 109.21 48.13 100.78 48.13 92.34 48.13 145.47 -0.05', },
//         { points: '158.6 -0.05 122.35 48.13 113.91 48.13 105.48 48.13 158.6 -0.05', },
//       ]
//     },
//   }
// }
//
// const face = {
// 	tag: 'rect',
// 	config: {
// 		'x' : 18.13, 'y' : 47.84, 'width' : 168.14, 'height' : 168.14, 'rx' : 52.98, 'ry' : 52.98,
// 		class: 'face'
// 	}
// }
//
// const headFigure = {
// 	tag: 'g',
// 	config: { class: 'head-figure' },
// 	children: { hair, face }
// }
//
// const nose = {
// 	key: 'nose',
// 	tag: 'path',
// 	config: {
// 		d: 'M19.21,122.49A19.3,19.3,0,0,0,0,141.74H0A19.3,19.3,0,0,0,19.21,161h83.43v-38.5Z',
// 		class: 'nose'
// 	}
// }
//
// const mouth = {
// 	key: 'mouth',
// 	tag: 'path',
// 	config: {
// 		d: 'M102.43,194c15.36,0,27.81-7.55,27.81-16.86H74.62C74.62,186.43,87.07,194,102.43,194Z',
// 		class: 'mouth'
// 	}
// }
//
// const steamRight = {
// 	key: 'steamRight',
// 	tag: 'g',
// 	config: {
// 		class: 'steam steam--right'
// 	},
// 	children: {
// 		'steamPart' : {
// 			key: 'steamPart',
// 			tag: 'line',
// 			config: {
// 				'x1' : 128.09, 'y1' : 159.01, 'x2' : 162.15, 'y2' : 124.95,
// 				class: 'steam-part'
// 			},
// 			siblings: [
// 				{'x1' : 130.88, 'y1' : 148.79, 'x2' : 138.31, 'y2' : 156.22,},
// 				{'x1' : 136.14, 'y1' : 143.53, 'x2' : 143.57, 'y2' : 150.96,},
// 				{'x1' : 141.4, 'y1' : 138.26, 'x2' : 148.84, 'y2' : 145.69,},
// 				{'x1' : 146.67, 'y1' : 133, 'x2' : 154.1, 'y2' : 140.43,},
// 				{'x1' : 151.93, 'y1' : 127.74, 'x2' : 159.36, 'y2' : 135.17,}
// 			]
// 		}
// 	}
// }
//
// const steams = {
// 	key: 'steams',
// 	tag: 'g',
// 	config: {
// 		class: 'steams',
// 	},
// 	children: { steamRight, }
// }
//
// const head = {
// 	key: 'head',
// 	tag: 'g',
// 	config: {
// 		class: 'head'
// 	},
// 	children: { headFigure, eyes, nose, mouth, steams }
// }
//
// const body = {
// 	key: 'body',
// 	tag: 'path',
// 	config: {
// 		class: 'body',
// 		d: 'M260.9,280.8c0-64.94-53.13-118.07-118.07-118.07h0c-64.94,0-118.07,53.13-118.07,118.07V539.15H260.9Z',
// 	},
// }
//
// const zombie = {
// 	key: 'zombie',
// 	tag: 'g',
// 	config: {
// 		class: '',
// 	},
// 	children: {
// 		body, head
// 	}
// }
//
// const structure = {
// 		key: 'zombie',
// 		meta: {
// 			viewBox: [0, 0, 233.58, 324.24],
// 			width: 'auto',
// 			height: '95%',
// 			class: 'zombie svg-container',
// 		},
// 		zombie,
// }
//
// export default new Parser(structure);
