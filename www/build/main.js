webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/game/game.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ElementsRepository = /** @class */ (function () {
    function ElementsRepository() {
        this.elements = [];
    }
    ElementsRepository.prototype.add = function (id, node) {
        var arr = this.elements.slice();
        var e = new Element(id, node);
        this.elements = arr.concat([e]);
        return;
    };
    ElementsRepository.prototype.get = function () {
        return this.elements.slice();
    };
    return ElementsRepository;
}());
var Element = /** @class */ (function () {
    function Element(id, node) {
        this.id = id;
        // this.root = root;
        this.node = node;
    }
    return Element;
}());
/* harmony default export */ __webpack_exports__["a"] = (new ElementsRepository());
//# sourceMappingURL=elements.repository.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_components_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_model_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_model_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__model_model_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_game_game__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { File } from '@ionic-native/file';
// Modules


// Components

// Pages


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_game_game__["a" /* GamePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["ComponentsModule"],
                __WEBPACK_IMPORTED_MODULE_6__model_model_module__["ModelModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_game_game__["a" /* GamePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                // File,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_parser_model__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_parser_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_model_parser_model__);

var eyeLeft = {
    tag: 'g',
    config: {
        class: 'eye eye--left',
    },
    children: {
        'eyeball': {
            tag: 'ellipse',
            config: {
                cx: 66.08, cy: 97.54, rx: 27.81, ry: 16.86,
                class: 'eyeball'
            }
        },
        'pupil': {
            tag: 'circle',
            config: {
                cx: 74.18, cy: 97.32, r: 8.32,
                class: 'pupil'
            }
        },
    },
};
var eyeRight = {
    tag: 'g',
    config: {
        class: 'eye eye--right',
    },
    children: {
        'eyeball': {
            tag: 'ellipse',
            config: {
                cx: 135.7, cy: 97.54, rx: 27.81, ry: 16.86,
                class: 'eyeball'
            }
        },
        'pupil': {
            tag: 'circle',
            config: {
                cx: 142.93, cy: 97.32, r: 8.32,
                class: 'pupil'
            }
        },
    },
};
var eyes = {
    tag: 'g',
    config: { class: 'eyes' },
    children: {
        eyeLeft: eyeLeft,
        eyeRight: eyeRight
    }
};
var hair = {
    tag: 'g',
    config: { class: 'hair' },
    children: {
        'hairPart': {
            tag: 'polygon',
            config: {
                points: '132.33 -0.05 96.08 48.13 87.64 48.13 79.21 48.13 132.33 -0.05',
                class: 'hair-part'
            },
            siblings: [
                { points: '145.47 -0.05 109.21 48.13 100.78 48.13 92.34 48.13 145.47 -0.05', },
                { points: '158.6 -0.05 122.35 48.13 113.91 48.13 105.48 48.13 158.6 -0.05', },
            ]
        },
    }
};
var face = {
    tag: 'rect',
    config: {
        'x': 18.13, 'y': 47.84, 'width': 168.14, 'height': 168.14, 'rx': 52.98, 'ry': 52.98,
        class: 'face'
    }
};
var headFigure = {
    tag: 'g',
    config: { class: 'head-figure' },
    children: { hair: hair, face: face }
};
var nose = {
    key: 'nose',
    tag: 'path',
    config: {
        d: 'M19.21,122.49A19.3,19.3,0,0,0,0,141.74H0A19.3,19.3,0,0,0,19.21,161h83.43v-38.5Z',
        class: 'nose'
    }
};
var mouth = {
    key: 'mouth',
    tag: 'path',
    config: {
        d: 'M102.43,194c15.36,0,27.81-7.55,27.81-16.86H74.62C74.62,186.43,87.07,194,102.43,194Z',
        class: 'mouth'
    }
};
var steamRight = {
    key: 'steamRight',
    tag: 'g',
    config: {
        class: 'steam steam--right'
    },
    children: {
        'steamPart': {
            key: 'steamPart',
            tag: 'line',
            config: {
                'x1': 128.09, 'y1': 159.01, 'x2': 162.15, 'y2': 124.95,
                class: 'steam-part'
            },
            siblings: [
                { 'x1': 130.88, 'y1': 148.79, 'x2': 138.31, 'y2': 156.22, },
                { 'x1': 136.14, 'y1': 143.53, 'x2': 143.57, 'y2': 150.96, },
                { 'x1': 141.4, 'y1': 138.26, 'x2': 148.84, 'y2': 145.69, },
                { 'x1': 146.67, 'y1': 133, 'x2': 154.1, 'y2': 140.43, },
                { 'x1': 151.93, 'y1': 127.74, 'x2': 159.36, 'y2': 135.17, }
            ]
        }
    }
};
var steams = {
    key: 'steams',
    tag: 'g',
    config: {
        class: 'steams',
    },
    children: { steamRight: steamRight, }
};
var head = {
    key: 'head',
    tag: 'g',
    config: {
        class: 'head'
    },
    children: { headFigure: headFigure, eyes: eyes, nose: nose, mouth: mouth, steams: steams }
};
var body = {
    key: 'body',
    tag: 'path',
    config: {
        class: 'body',
        d: 'M260.9,280.8c0-64.94-53.13-118.07-118.07-118.07h0c-64.94,0-118.07,53.13-118.07,118.07V539.15H260.9Z',
    },
};
var zombie = {
    key: 'zombie',
    tag: 'g',
    config: {
        class: '',
    },
    children: {
        body: body, head: head
    }
};
var structure = {
    key: 'zombie',
    meta: {
        viewBox: [0, 0, 233.58, 324.24],
        width: 'auto',
        height: '95%',
        class: 'zombie svg-container',
    },
    zombie: zombie,
};
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__app_model_parser_model___default.a(structure));
//# sourceMappingURL=temp-zombie.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__) {

"use strict";
// import { Node } from './node.model';
// import { RootMeta } from './root-meta.model';
// import { Meta } from './meta.model';
// import { Explorer } from './explorer.model';
// import { SvgBuilder } from './svg-builder';
//
// export default class {
//   public builder : SvgBuilder;
//   public ast: Node;
//
//   constructor({ key, meta, ...descendants}) {
//     this.ast = this.makeAbstractSyntaxTree(key, meta, descendants);
//
//     const explorer = new Explorer(this.ast);
//     this.builder = new SvgBuilder(explorer);
//   }
//
//   private makeAbstractSyntaxTree(key, meta, descendants: Object) : Node {
//     const root = new Node(key, new RootMeta(meta));
//     const childrenNames = Object.keys(descendants);
//
//     const rec = (name, obj, parent: Node) => {
//       const { config, tag, children = {}, siblings = {} } = obj;
//
//       const newParent = parent.addChild(name);
//
//       if(siblings.length) {
//         siblings.forEach(attrs => rec(
//           name,
//           {
//             tag,
//             config: { ...config, ...attrs }
//           },
//           parent
//         ));
//       }
//
//       const childrenNames = Object.keys(children);
//
//       if(childrenNames.length) {
//         return childrenNames.forEach(name => rec(name, children[name], newParent));
//       }
//
//       return;
//     }
//
//     childrenNames.forEach(v => rec(v, descendants[v], root));
//
//     return root;
//   }
// }
//# sourceMappingURL=parser.model.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_game_game__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_game_game__["a" /* GamePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.selectGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/pages/home/home.html"*/'<ion-content class="container" padding fixed no-bounce>\n  <div class="image">\n    <img class="btn-play" (click)="selectGame()" src="assets/imgs/home/play.svg" alt="hit the btn to play!" />\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ned4ded/dev/monsters.v.2/src/components/components.module.js'");

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ned4ded/dev/monsters.v.2/src/model/model.module.js.map'");

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__temp_zombie__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_elements_repository__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GamePage.prototype.ngAfterViewInit = function () {
        var svg = __WEBPACK_IMPORTED_MODULE_2__temp_zombie__["a" /* default */].builder.getDom();
        var target = document.getElementById('nb-target');
        target.appendChild(svg);
        var element = __WEBPACK_IMPORTED_MODULE_2__temp_zombie__["a" /* default */].ast;
        console.log(__WEBPACK_IMPORTED_MODULE_3__app_model_elements_repository__["a" /* default */]);
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/pages/game/game.html"*/'<ion-content fixed no-bounce>\n  <div id="container" class="container">\n    <div id="nb-target" class="screen zombie__screen">\n      <div id="on-screen">\n\n        <!-- MONSTER START -->\n        <!-- <svg id="monster" class="zombie zombie__screen svg-container" viewBox="0 0 233.58 324.24" height="95%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        	<g class="zombie">\n        		<path class="body" d="M260.9,280.8c0-64.94-53.13-118.07-118.07-118.07h0c-64.94,0-118.07,53.13-118.07,118.07V539.15H260.9Z"></path>\n        		<g class="head">\n        			<g class="head-figure">\n        				<g class="hair">\n        					<polygon class="hair-part" points="132.33 -0.05 96.08 48.13 87.64 48.13 79.21 48.13 132.33 -0.05"></polygon>\n        					<polygon class="hair-part" points="145.47 -0.05 109.21 48.13 100.78 48.13 92.34 48.13 145.47 -0.05"></polygon>\n        					<polygon class="hair-part" points="158.6 -0.05 122.35 48.13 113.91 48.13 105.48 48.13 158.6 -0.05"></polygon>\n        				</g>\n        				<rect class="face" x="18.13" y="47.84" width="168.14" height="168.14" rx="52.98" ry="52.98"></rect>\n        			</g>\n        			<g class="eyes">\n        				<g class="eye eye--left">\n                  <clipPath id="eyeball--left-mask">\n                    <ellipse class="" cx="66.08" cy="97.54" rx="27.81" ry="16.86"></ellipse>\n                  </clipPath>\n                  <ellipse class="eyeball" cx="66.08" cy="97.54" rx="27.81" ry="16.86"></ellipse>\n        					<circle class="pupil pupil--left" cx="74.18" cy="97.32" r="8.32"></circle>\n                  <ellipse clip-path="url(#eyeball--left-mask)" class="eyeball eyeball--lid eyeball--left" cx="66.08" cy="64" rx="27.81" ry="16.86"></ellipse>\n        				</g>\n        				<g class="eye eye--right">\n                  <clipPath id="eyeball--right-mask">\n                    <ellipse class="" cx="135.7" cy="97.54" rx="27.81" ry="16.86"></ellipse>\n                  </clipPath>\n\n                  <ellipse class="eyeball" cx="135.7" cy="97.54" rx="27.81" ry="16.86"></ellipse>\n        					<circle class="pupil pupil--right" cx="142.93" cy="97.32" r="8.32"></circle>\n                  <ellipse clip-path="url(#eyeball--right-mask)" class="eyeball eyeball--lid eyeball--right" cx="135.7" cy="64" rx="27.81" ry="16.86"></ellipse>\n        				</g>\n        			</g>\n        			<path class="nose" d="M19.21,122.49A19.3,19.3,0,0,0,0,141.74H0A19.3,19.3,0,0,0,19.21,161h83.43v-38.5Z"></path>\n        			<path class="mouth" d="M102.43,194c15.36,0,27.81-7.55,27.81-16.86H74.62C74.62,186.43,87.07,194,102.43,194Z"></path>\n        			<g class="steams decor__steams">\n        				<g class="steam steam--right">\n        					<line class="steam-part" x1="128.09" y1="159.01" x2="162.15" y2="124.95"></line>\n        					<line class="steam-part" x1="130.88" y1="148.79" x2="138.31" y2="156.22"></line>\n        					<line class="steam-part" x1="136.14" y1="143.53" x2="143.57" y2="150.96"></line>\n        					<line class="steam-part" x1="141.4" y1="138.26" x2="148.84" y2="145.69"></line>\n        					<line class="steam-part" x1="146.67" y1="133" x2="154.1" y2="140.43"></line>\n        					<line class="steam-part" x1="151.93" y1="127.74" x2="159.36" y2="135.17"></line>\n        				</g>\n        				<g class="steam steam--left">\n        					<line class="steam-part" x1="40.51" y1="170.93" x2="74.57" y2="204.99"></line>\n        					<line class="steam-part" x1="50.73" y1="173.71" x2="43.3" y2="181.14"></line>\n        					<line class="steam-part" x1="55.99" y1="178.98" x2="48.56" y2="186.41"></line>\n        					<line class="steam-part" x1="61.26" y1="184.24" x2="53.84" y2="191.67"></line>\n        					<line class="steam-part" x1="66.52" y1="189.5" x2="59.09" y2="196.94"></line>\n        					<line class="steam-part" x1="71.79" y1="194.77" x2="64.35" y2="202.2"></line>\n        				</g>\n        			</g>\n        		</g>\n        	</g>\n        </svg> -->\n        <!-- MONSTER END -->\n\n      </div>\n      <button ion-button icon-only outline class="btn-close" (click)="endGame()">\n        <ion-icon name="close" class="icon-close"></ion-icon>\n      </button>\n\n      <button ion-button icon-only outline class="btn-reset" (click)="reset()">\n        <ion-icon name="refresh" class="icon-reset"></ion-icon>\n      </button>\n    </div>\n    <div id="panel" class="panel-container">\n      <ul class="panel">\n        <!-- <li *ngFor="let item of getItems()" class="panel__item{{item.el.doubled ? \' panel__doubled\' : \'\'}}">\n            <img\n            id="{{item.id}}"\n            src="assets/imgs/GameItems/{{item.el.name}}.svg"\n            alt="image of {{item.el.name}}"\n            data-blocked="false"\n            class="GameItem\n                  {{item.el.vertical? \'GameItem--vertical\' : \'\'}}\n                  GameItem__{{item.el.name}}">\n        </li> -->\n        <li class="panel__item panel__item--fraud">\n\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div id="active-ct"></div>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/pages/game/game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map