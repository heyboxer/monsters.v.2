webpackJsonp([1],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/game/game.module": [
		306,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_host_directive__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trinkets_service__ = __webpack_require__(261);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrinketsComponent = /** @class */ (function () {
    function TrinketsComponent(componentFactoryResolver, trinketsService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.trinketsService = trinketsService;
    }
    ;
    TrinketsComponent.prototype.ngOnInit = function () {
        this.trinkets = this.trinketsService.getTrinkets();
    };
    TrinketsComponent.prototype.ngAfterViewInit = function () {
        this.loadTrinkets();
    };
    TrinketsComponent.prototype.loadTrinkets = function () {
        var _this = this;
        this.instances = this.hosts.map(function (_a) {
            var id = _a.id, viewContainerRef = _a.viewContainerRef;
            var trinket = _this.trinkets.find(function (e) { return e.id == id; });
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(trinket.component);
            viewContainerRef.clear();
            var instance = viewContainerRef.createComponent(componentFactory).instance;
            return __assign({}, instance, { component: trinket.component });
        });
        return;
    };
    TrinketsComponent.prototype.getInstances = function () {
        return this.instances;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__trinket_host_directive__["a" /* TrinketHostDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], TrinketsComponent.prototype, "hosts", void 0);
    TrinketsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'trinkets',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/trinkets.component.html"*/'<ul class="panel">\n  <li *ngFor="let trinket of trinkets" class="panel__item">\n    <ng-template trinket-host trinket-id="{{ trinket.id }}"></ng-template>\n  </li>\n  <li class="panel__item panel__item--fraud"></li>\n</ul>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/trinkets.component.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__trinkets_service__["a" /* TrinketsService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_2__trinkets_service__["a" /* TrinketsService */]])
    ], TrinketsComponent);
    return TrinketsComponent;
}());

//# sourceMappingURL=trinkets.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketHostDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrinketHostDirective = /** @class */ (function () {
    function TrinketHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('trinket-id'),
        __metadata("design:type", String)
    ], TrinketHostDirective.prototype, "id", void 0);
    TrinketHostDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[trinket-host]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], TrinketHostDirective);
    return TrinketHostDirective;
}());

//# sourceMappingURL=trinket-host.directive.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_element_component_model__ = __webpack_require__(262);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlassComponent = /** @class */ (function (_super) {
    __extends(GlassComponent, _super);
    function GlassComponent(element) {
        return _super.call(this, 'glass', element.nativeElement) || this;
    }
    GlassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'glass',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/glass/glass.svg"*/'<svg width="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 301.28 112.68">\n  <path class="cls-1" d="M96.84,106.39l-39.23,-50.49a20.3,20.3,0,1,1,35.17,-20.3l4.07,7l4.07,-7a20.3,20.3,0,1,1,35.16,20.3z"/>\n  <path class="cls-1" d="M204.44,106.39l-39.23,-50.49a20.3,20.3,0,1,1,35.16,-20.3l4.07,7l4.07,-7a20.3,20.3,0,1,1,35.16,20.3z"/>\n  <path class="cls-2" d="M137.65,49.83a18.36,18.36,0,0,1,26,0"/>\n  <path class="cls-3" d="M6.16,22.4a11.53,11.53,0,0,1,-0.66,-16.24h0a11.53,11.53,0,0,1,16.24,-0.66l34.09,31.41"/>\n  <path class="cls-3" d="M295.12,22.4a11.53,11.53,0,0,0,0.66,-16.24h0a11.53,11.53,0,0,0,-16.24,-0.66l-34.09,31.41"/>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/glass/glass.svg"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], GlassComponent);
    return GlassComponent;
}(__WEBPACK_IMPORTED_MODULE_1__model_element_component_model__["a" /* ElementComponentModel */]));

//# sourceMappingURL=glass.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementRepository; });
// import { Injectable } from "@angular/core";
// @Injectable()
var ElementRepository = /** @class */ (function () {
    function ElementRepository() {
        this.elements = [];
    }
    ;
    ElementRepository.prototype.add = function (element) {
        var arr = this.elements.slice();
        this.elements = arr.concat([element]);
        return this;
    };
    ElementRepository.prototype.removeById = function (id) {
        var arr = this.elements.slice().filter(function (e) { return e.getId() == id; });
        this.elements = arr;
        return this;
    };
    return ElementRepository;
}());

/* harmony default export */ __webpack_exports__["b"] = (new ElementRepository());
//# sourceMappingURL=element.repository.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonstersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monsters_host_directive__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monsters_service__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonstersComponent = /** @class */ (function () {
    function MonstersComponent(componentFactoryResolver, monstersService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.monstersService = monstersService;
    }
    MonstersComponent.prototype.ngOnInit = function () {
        this.monsters = this.monstersService.getMonsters();
        this.loadMonster(this.monsterId);
    };
    MonstersComponent.prototype.ngAfterViewInit = function () {
    };
    MonstersComponent.prototype.loadMonster = function (id) {
        var monster = this.monsters.find(function (e) { return e.id == id; });
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(monster.component);
        var viewContainerRef = this.monsterHost.viewContainerRef;
        viewContainerRef.clear();
        var instance = viewContainerRef.createComponent(componentFactory).instance;
        this.monster = instance;
    };
    MonstersComponent.prototype.getCurrentMonster = function () {
        return this.monster;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MonstersComponent.prototype, "monsterId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__monsters_host_directive__["a" /* MonstersHostDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__monsters_host_directive__["a" /* MonstersHostDirective */])
    ], MonstersComponent.prototype, "monsterHost", void 0);
    MonstersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'monster',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/monsters.component.html"*/'<ng-template monster-host></ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/monsters.component.html"*/,
            // styleUrls: ['monsters.component.scss'],
            providers: [__WEBPACK_IMPORTED_MODULE_2__monsters_service__["a" /* MonstersService */]],
            host: {
                '[class.monster]': 'true'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_2__monsters_service__["a" /* MonstersService */]])
    ], MonstersComponent);
    return MonstersComponent;
}());

//# sourceMappingURL=monsters.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonstersHostDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MonstersHostDirective = /** @class */ (function () {
    function MonstersHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    MonstersHostDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[monster-host]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], MonstersHostDirective);
    return MonstersHostDirective;
}());

//# sourceMappingURL=monsters-host.directive.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZombieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(78);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZombieComponent = /** @class */ (function (_super) {
    __extends(ZombieComponent, _super);
    function ZombieComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'zombie', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    ZombieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'zombie',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/zombie/zombie.html"*/'<svg width="auto" height="95%" viewBox="0 0 233.58 324.24" class="zombie svg-container" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g class="">\n    <path class="body" d="M260.9,280.8c0-64.94-53.13-118.07-118.07-118.07h0c-64.94,0-118.07,53.13-118.07,118.07V539.15H260.9Z"></path>\n    <g class="head">\n      <g class="head-figure">\n        <g class="hair">\n          <polygon points="132.33 -0.05 96.08 48.13 87.64 48.13 79.21 48.13 132.33 -0.05" class="hair-part"></polygon>\n          <polygon points="145.47 -0.05 109.21 48.13 100.78 48.13 92.34 48.13 145.47 -0.05" class="hair-part"></polygon>\n          <polygon points="158.6 -0.05 122.35 48.13 113.91 48.13 105.48 48.13 158.6 -0.05" class="hair-part"></polygon>\n        </g>\n        <rect x="18.13" y="47.84" width="168.14" height="168.14" rx="52.98" ry="52.98" class="face"></rect>\n      </g>\n      <g monster-part part-name="eyes" part-type="group" class="eyes">\n        <g monster-part part-name="eye" part-name-mod="left" part-type="group" part-group="eyes" class="eye eye--left" visibility="visible">\n          <ellipse cx="66.08" cy="97.54" rx="27.81" ry="16.86" class="eyeball"></ellipse>\n          <circle cx="74.18" cy="97.32" r="8.32" class="pupil"></circle>\n        </g>\n        <g monster-part part-name="eye" part-name-mod="right" part-type="group" part-group="eyes" class="eye eye--right" visibility="visible">\n          <ellipse cx="135.7" cy="97.54" rx="27.81" ry="16.86" class="eyeball"></ellipse>\n          <circle cx="142.93" cy="97.32" r="8.32" class="pupil"></circle>\n        </g>\n      </g>\n      <g monster-part part-group="eyes" part-type="container"></g>\n      <path d="M19.21,122.49A19.3,19.3,0,0,0,0,141.74H0A19.3,19.3,0,0,0,19.21,161h83.43v-38.5Z" class="nose"></path>\n      <path d="M102.43,194c15.36,0,27.81-7.55,27.81-16.86H74.62C74.62,186.43,87.07,194,102.43,194Z" class="mouth"></path>\n      <g class="steams">\n        <g class="steam steam--right">\n          <line x1="128.09" y1="159.01" x2="162.15" y2="124.95" class="steam-part"></line>\n          <line x1="130.88" y1="148.79" x2="138.31" y2="156.22" class="steam-part"></line>\n          <line x1="136.14" y1="143.53" x2="143.57" y2="150.96" class="steam-part"></line>\n          <line x1="141.4" y1="138.26" x2="148.84" y2="145.69" class="steam-part"></line>\n          <line x1="146.67" y1="133" x2="154.1" y2="140.43" class="steam-part"></line>\n          <line x1="151.93" y1="127.74" x2="159.36" y2="135.17" class="steam-part"></line>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/zombie/zombie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], ZombieComponent);
    return ZombieComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=zombie.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterPartDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonsterPartDirective = /** @class */ (function () {
    function MonsterPartDirective(el, viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.id = __WEBPACK_IMPORTED_MODULE_1_uuid___default()();
        this.element = el.nativeElement;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('part-type'),
        __metadata("design:type", String)
    ], MonsterPartDirective.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('part-name'),
        __metadata("design:type", String)
    ], MonsterPartDirective.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('part-name-mod'),
        __metadata("design:type", String)
    ], MonsterPartDirective.prototype, "mod", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('part-group'),
        __metadata("design:type", String)
    ], MonsterPartDirective.prototype, "group", void 0);
    MonsterPartDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[monster-part]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], MonsterPartDirective);
    return MonsterPartDirective;
}());

//# sourceMappingURL=monster-part.directive.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkeletonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(78);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkeletonComponent = /** @class */ (function (_super) {
    __extends(SkeletonComponent, _super);
    function SkeletonComponent(el, renderer) {
        var _this = _super.call(this, 'skeleton', el.nativeElement) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    SkeletonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'skeleton',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/skeleton/skeleton.html"*/'<svg class="skeleton svg-container" viewBox="0 0 200.62 322.01" width="auto" height="90%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n   <g class="">\n      <g class="head">\n         <ellipse class="head head--figure" cx="99.95" cy="67.37" rx="89.2" ry="67.38"></ellipse>\n         <g class="content">\n            <g class="jaws">\n               <g class="jaw jaw--top">\n                  <rect class="jaw" x="43.33" y="95.52" width="113.24" height="63.9"></rect>\n                  <g class="teeth">\n                     <rect class="tooth" x="53.24" y="143.29" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="69.77" y="143.29" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="86.3" y="143.29" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="102.83" y="143.29" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="119.37" y="143.29" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="135.9" y="143.29" width="10.75" height="10.75"></rect>\n                  </g>\n               </g>\n               <g class="jaw jaw--bottom">\n                  <rect class="jaw" x="43.33" y="169.54" width="113.24" height="28.52"></rect>\n                  <g class="teeth">\n                     <rect class="tooth" x="53.24" y="178.43" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="69.77" y="178.43" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="86.3" y="178.43" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="102.83" y="178.43" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="119.37" y="178.43" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="135.9" y="178.43" width="10.75" height="10.75"></rect>\n                  </g>\n               </g>\n            </g>\n            <g monster-part part-type="eyes" part-name="eyes" class="eyes">\n               <g monster-part part-type="eyeRight" class="eye eye--right">\n                  <circle class="eyeball" cx="129.44" cy="66.37" r="25.31"></circle>\n                  <circle class="pupil" cx="136.88" cy="58.14" r="10.09"></circle>\n               </g>\n               <g monster-part part-type="eyeLeft" class="eye eye--left">\n                  <circle class="eyeball" cx="70.45" cy="66.37" r="25.31"></circle>\n                  <circle class="pupil" cx="72.84" cy="76.61" r="10.09"></circle>\n               </g>\n            </g>\n            <g monster-part part-type="eyes" part-name="container"></g>\n            <polygon class="nose" points="99.95 91.72 112.37 113.24 124.8 134.76 99.95 134.76 75.09 134.76 87.52 113.24 99.95 91.72"></polygon>\n         </g>\n      </g>\n      <g class="body">\n         <rect class="rib" y="227.64" width="200.62" height="21.55"></rect>\n         <rect class="rib" y="264.11" width="200.62" height="21.55"></rect>\n         <rect class="rib" y="300.59" width="200.62" height="21.55"></rect>\n      </g>\n   </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/skeleton/skeleton.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], SkeletonComponent);
    return SkeletonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=skeleton.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlienComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(78);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlienComponent = /** @class */ (function (_super) {
    __extends(AlienComponent, _super);
    function AlienComponent(el, renderer) {
        var _this = _super.call(this, 'alien', el.nativeElement) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    AlienComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alien',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/alien/alien.html"*/'<svg class="alien svg-container" viewBox="0 0 165.37 302.36" width="80%" height="80%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n	<g class="">\n		<g class="head">\n			<path class="head head--figure" d="M82.67,153.65a39.12,39.12,0,0,1-33.88-19.56L5.25,58.69A39.13,39.13,0,0,1,39.13,0H126.2a39.13,39.13,0,0,1,33.88,58.69l-43.53,75.4A39.13,39.13,0,0,1,82.67,153.65Z"></path>\n			<g class="content">\n				<path class="mouth" d="M82.66,131.54a2.83,2.83,0,0,1-2.45-1.41l-3.15-5.45a2.83,2.83,0,0,1,2.45-4.24h6.29a2.83,2.83,0,0,1,2.45,4.24l-3.15,5.45A2.83,2.83,0,0,1,82.66,131.54Z"></path>\n				<g monster-part part-type="eyes" part-name="eyes" class="eyes">\n					<g monster-part part-type="eyeLeft" class="eye eye--left">\n						<path class="eyeball" d="M25.19,26.89A52.14,52.14,0,0,0,77.36,79.06,52.14,52.14,0,0,0,25.19,26.89Z"></path>\n						<circle class="iris" cx="51.86" cy="53.61" r="15.32"></circle>\n						<circle class="pupil" cx="51.86" cy="53.61" r="7.21"></circle>\n					</g>\n					<g monster-part part-type="eyeRight" class="eye eye--right">\n						<path class="eyeball" d="M140.14,26.89A52.14,52.14,0,0,0,88,79.06,52.14,52.14,0,0,0,140.14,26.89Z"></path>\n						<circle class="iris" cx="113.53" cy="53.61" r="15.32"></circle>\n						<circle class="pupil" cx="113.53" cy="53.61" r="4.75"></circle>\n					</g>\n				</g>\n        <g monster-part part-type="eyes" part-name="container"></g>\n				<g class="nose">\n					<circle class="nostril nostril--left" cx="76.75" cy="99.18" r="2.49"></circle>\n					<circle class="nostril nostril--right" cx="88.6" cy="99.18" r="2.49"></circle>\n				</g>\n			</g>\n		</g>\n		<ellipse class="body body--figure" cx="82.66" cy="285.78" rx="50.36" ry="139.24"></ellipse>\n	</g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/alien/alien.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], AlienComponent);
    return AlienComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=alien.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameFinistStateMachine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_javascript_state_machine__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_javascript_state_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_javascript_state_machine__);

var GameFinistStateMachine = /** @class */ (function () {
    function GameFinistStateMachine() {
        var _this = this;
        this.stateMethodsHandler = function (name) {
            return function (obj) {
                return _this.fnsRegister[name].forEach(function (fn) {
                    return fn(obj, _this);
                });
            };
        };
        this.fnsRegister = { select: [], grab: [], moveIn: [], moveOut: [], destroy: [], place: [], unselect: [] };
        this.state = new __WEBPACK_IMPORTED_MODULE_0_javascript_state_machine___default.a({
            init: 'idle',
            transitions: [
                { name: 'select', from: 'idle', to: 'itemSelected' },
                { name: 'unselect', from: 'itemSelected', to: 'idle' },
                { name: 'grab', from: 'itemSelected', to: 'draggedOut' },
                { name: 'moveIn', from: 'draggedOut', to: 'draggedIn' },
                { name: 'moveOut', from: 'draggedIn', to: 'draggedOut' },
                { name: 'destroy', from: 'draggedOut', to: 'idle' },
                { name: 'place', from: 'draggedIn', to: 'idle' },
            ],
            methods: {
                onSelect: this.stateMethodsHandler('select'),
                onUnselect: this.stateMethodsHandler('unselect'),
                onGrab: this.stateMethodsHandler('grab'),
                onMoveIn: this.stateMethodsHandler('moveIn'),
                onMoveOut: this.stateMethodsHandler('moveOut'),
                onDestroy: this.stateMethodsHandler('destroy'),
                onPlace: this.stateMethodsHandler('place'),
            }
        });
    }
    ;
    GameFinistStateMachine.prototype.setFns = function (name) {
        var fns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fns[_i - 1] = arguments[_i];
        }
        var oldFns = this.fnsRegister[name];
        this.fnsRegister[name] = oldFns.concat(fns);
        return this;
    };
    GameFinistStateMachine.prototype.next = function (fn) {
    };
    GameFinistStateMachine.prototype.select = function () {
        this.state.select();
        return this;
    };
    GameFinistStateMachine.prototype.unselect = function () {
        this.state.unselect();
        return this;
    };
    GameFinistStateMachine.prototype.grab = function () {
        this.state.grab();
        return this;
    };
    GameFinistStateMachine.prototype.moveOut = function () {
        this.state.moveOut();
        return this;
    };
    GameFinistStateMachine.prototype.moveIn = function () {
        this.state.moveIn();
        return this;
    };
    GameFinistStateMachine.prototype.destroy = function () {
        this.state.destroy();
        return this;
    };
    GameFinistStateMachine.prototype.place = function () {
        this.state.place();
        return this;
    };
    GameFinistStateMachine.prototype.isIdle = function () {
        return this.state.is('idle');
    };
    GameFinistStateMachine.prototype.isDraggedOut = function () {
        return this.state.is('draggedOut');
    };
    GameFinistStateMachine.prototype.isDraggedIn = function () {
        return this.state.is('draggedIn');
    };
    return GameFinistStateMachine;
}());

//# sourceMappingURL=game-fsm.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListnersHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listner_register_class__ = __webpack_require__(270);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var ListnersHandler = /** @class */ (function () {
    function ListnersHandler(r) {
        this.r = r;
        this.register = new __WEBPACK_IMPORTED_MODULE_0__listner_register_class__["a" /* ListnerRegister */]();
    }
    ;
    ListnersHandler.prototype.addListner = function (target, event, fn) {
        var config = { target: target, event: event, fn: fn };
        if (!this.register.has(config)) {
            var rmFunc = this.r.listen(target, event, fn);
            this.register.add(__assign({}, config, { rmFunc: rmFunc }), function (err, register) {
                if (err)
                    console.log(err);
                return;
            });
            return true;
        }
        ;
        return false;
    };
    ListnersHandler.prototype.removeListner = function (target, event, fn) {
        var config = { target: target, event: event, fn: fn };
        if (this.register.has(config)) {
            var config_1 = { target: target, event: event, fn: fn };
            this.register.remove(config_1).rmFunc();
            return true;
        }
        return false;
    };
    ListnersHandler.prototype.removeListners = function () {
        this.register.forEach(function (_a) {
            var rmFunc = _a.rmFunc;
            if (!rmFunc)
                return;
            return setTimeout(rmFunc, 0);
        });
        this.register.clear();
        return;
    };
    return ListnersHandler;
}());

//# sourceMappingURL=listners-handler.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemHolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_host_directive__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemHolderComponent = /** @class */ (function () {
    function ItemHolderComponent(componentFactoryResolver, r, el) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.r = r;
        this.el = el.nativeElement;
    }
    ItemHolderComponent.prototype.clear = function () {
        this.host.viewContainerRef.clear();
        return this;
    };
    ItemHolderComponent.prototype.loadComponent = function (component) {
        this.clear();
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        var instance = this.host.viewContainerRef.createComponent(componentFactory);
        return instance;
    };
    ItemHolderComponent.prototype.setAttributes = function (obj) {
        var _this = this;
        var attrs = Object.keys(obj);
        attrs.forEach(function (attr) { return _this.r.setAttribute(_this.el, attr, obj[attr]); });
        return;
    };
    ItemHolderComponent.prototype.getSize = function () {
        return { width: this.el.offsetWidth, height: this.el.offsetHeight };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__template_host_directive__["a" /* TemplateHostDriective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__template_host_directive__["a" /* TemplateHostDriective */])
    ], ItemHolderComponent.prototype, "host", void 0);
    ItemHolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'item-holder',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/item-holder/item-holder.html"*/'<ng-template template-host></ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/item-holder/item-holder.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ItemHolderComponent);
    return ItemHolderComponent;
}());

//# sourceMappingURL=item-holder.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateHostDriective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateHostDriective = /** @class */ (function () {
    function TemplateHostDriective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    TemplateHostDriective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[template-host]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], TemplateHostDriective);
    return TemplateHostDriective;
}());

//# sourceMappingURL=template-host.directive.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_model_module__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(305);
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
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__model_model_module__["a" /* ModelModule */]
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

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__glass_glass__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrinketsService = /** @class */ (function () {
    function TrinketsService() {
    }
    TrinketsService.prototype.getTrinkets = function () {
        return [
            {
                id: 1,
                component: __WEBPACK_IMPORTED_MODULE_1__glass_glass__["a" /* GlassComponent */],
            },
            {
                id: 2,
                component: __WEBPACK_IMPORTED_MODULE_1__glass_glass__["a" /* GlassComponent */],
            },
            {
                id: 3,
                component: __WEBPACK_IMPORTED_MODULE_1__glass_glass__["a" /* GlassComponent */],
            },
        ];
    };
    TrinketsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TrinketsService);
    return TrinketsService;
}());

//# sourceMappingURL=trinkets.service.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementComponentModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_repository__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__element_model__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElementComponentModel = /** @class */ (function () {
    function ElementComponentModel(name, node) {
        this.name = name;
        this.node = node;
        this.repo = __WEBPACK_IMPORTED_MODULE_1__element_repository__["b" /* default */];
    }
    ;
    ElementComponentModel.prototype.ngOnInit = function () {
        this.element = new __WEBPACK_IMPORTED_MODULE_2__element_model__["a" /* ElementModel */](this.name, this.node);
        this.add(this.element);
    };
    ;
    ElementComponentModel.prototype.ngOnDestroy = function () {
        this.repo.removeById(this.element.getId());
    };
    ;
    ElementComponentModel.prototype.add = function (element) {
        return this.repo.add(element);
    };
    ElementComponentModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({}),
        __metadata("design:paramtypes", [String, HTMLElement])
    ], ElementComponentModel);
    return ElementComponentModel;
}());

//# sourceMappingURL=element-component.model.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v4__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_v4__);

var ElementModel = /** @class */ (function () {
    function ElementModel(name, node, root) {
        this.name = name;
        this.node = node;
        this.id = __WEBPACK_IMPORTED_MODULE_0_uuid_v4___default()();
        this.root = root || this.node;
    }
    ;
    ElementModel.prototype.getId = function () {
        return this.id;
    };
    ElementModel.prototype.getName = function () {
        return this.name;
    };
    ElementModel.prototype.getRoot = function () {
        return this.root;
    };
    ElementModel.prototype.getNode = function () {
        return this.node;
    };
    ElementModel.prototype.isRoot = function () {
        return this.root.isSameNode(this.node);
    };
    return ElementModel;
}());

//# sourceMappingURL=element.model.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonstersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zombie_zombie__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skeleton_skeleton__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alien_alien__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MonstersService = /** @class */ (function () {
    function MonstersService() {
    }
    MonstersService.prototype.getMonsters = function () {
        return [
            {
                id: 1,
                component: __WEBPACK_IMPORTED_MODULE_3__alien_alien__["a" /* AlienComponent */],
            },
            {
                id: 2,
                component: __WEBPACK_IMPORTED_MODULE_1__zombie_zombie__["a" /* ZombieComponent */],
            },
            {
                id: 3,
                component: __WEBPACK_IMPORTED_MODULE_2__skeleton_skeleton__["a" /* SkeletonComponent */],
            },
        ];
    };
    MonstersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MonstersService);
    return MonstersService;
}());

//# sourceMappingURL=monsters.service.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cursor_position__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_fsm__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listners_handler__ = __webpack_require__(166);



var lib = {
    setPosition: function (register, ev) {
        return register.set(ev.clientX, ev.clientY);
    },
    nullifyPosition: function (register) {
        return register.set(undefined, undefined);
    },
    changeCursorStateToDown: function (cursor, ev) {
        cursor.down();
    },
    changeCursorStateToUp: function (cursor, ev) {
        cursor.up();
    },
    bind: function (name, context) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return (_a = (this[name])).bind.apply(_a, [context].concat(args));
        var _a;
    }
};
var Game = /** @class */ (function () {
    function Game(renderer) {
        this.cursor = new __WEBPACK_IMPORTED_MODULE_1__game_fsm__["a" /* GameFinistStateMachine */]();
        this.position = new __WEBPACK_IMPORTED_MODULE_0__cursor_position__["a" /* CursorPosition */]();
        this.r = renderer;
        this.listners = new __WEBPACK_IMPORTED_MODULE_2__listners_handler__["a" /* ListnersHandler */](this.r);
        // this.triggerOnMouseMove(lib.bind('setPosition', this, this.position));
        // this.triggerOnMouseOut(lib.bind('nullifyPosition', this, this.position));
        // this.triggerOnMouseUp(lib.changeCursorStateToUp.bind(null, this.cursor));
        // this.triggerOnMouseDown(lib.changeCursorStateToDown.bind(null, this.cursor));
        // this.cursor.setFns('down', (...args) => { console.log(args) });
    }
    return Game;
}());

;
//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursorPosition; });
var CursorPosition = /** @class */ (function () {
    function CursorPosition() {
        this.handlers = [];
    }
    ;
    CursorPosition.prototype.set = function (x, y) {
        var _this = this;
        this.positionX = x;
        this.positionY = y;
        if (this.handlers.length) {
            this.handlers.forEach(function (fn) {
                setTimeout(function () { return fn(_this.get()); }, 0);
                return;
            });
        }
        return this;
    };
    CursorPosition.prototype.get = function () {
        return this.positionX && this.positionX ?
            { x: this.positionX, y: this.positionY } :
            undefined;
    };
    CursorPosition.prototype.setHandler = function () {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i] = arguments[_i];
        }
        this.handlers = this.handlers.concat(fns);
        return this;
    };
    CursorPosition.prototype.rmHandler = function (fn) {
        this.handlers = this.handlers.filter(function (func) { return func !== fn; });
        return this;
    };
    return CursorPosition;
}());

//# sourceMappingURL=cursor-position.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListnerRegister; });
var Listner = /** @class */ (function () {
    function Listner(_a) {
        var target = _a.target, event = _a.event, fn = _a.fn, rmFunc = _a.rmFunc;
        this.target = target;
        this.event = event;
        this.fn = fn;
        this.rmFunc = rmFunc;
    }
    ;
    Listner.prototype.getConfig = function () {
        return {
            target: this.target,
            event: this.event,
            fn: this.fn,
            rmFunc: this.rmFunc,
        };
    };
    Listner.prototype.compare = function (listner) {
        var _this = this;
        return !Object.keys(listner).find(function (v) {
            return listner[v] !== _this[v];
        });
    };
    return Listner;
}());
var ListnerRegister = /** @class */ (function () {
    function ListnerRegister() {
        this.register = [];
    }
    ;
    Object.defineProperty(ListnerRegister.prototype, "length", {
        get: function () {
            return this.register.length;
        },
        enumerable: true,
        configurable: true
    });
    ListnerRegister.prototype.find = function (listner) {
        return this.register.find(function (v) { return v.compare(listner); });
    };
    ListnerRegister.prototype.add = function (listner, callback) {
        if (this.has(listner))
            return callback(new Error('Instance already exists'));
        var arr = this.register.slice();
        this.register = arr.concat([new Listner(listner)]);
        return callback(null, this);
    };
    ListnerRegister.prototype.has = function (listner) {
        return !!this.find(listner);
    };
    ListnerRegister.prototype.remove = function (listner) {
        var instance = this.find(listner);
        if (!instance)
            return false;
        this.register = this.register.filter(function (i) { return i !== instance; });
        return instance.getConfig();
    };
    ListnerRegister.prototype.clear = function () {
        this.register = [];
        return this;
    };
    ListnerRegister.prototype.forEach = function (fn) {
        this.register.slice().forEach(fn);
        return this;
    };
    return ListnerRegister;
}());

//# sourceMappingURL=listner-register.class.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameLogic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__active_element_model__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_fsm__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listners_handler__ = __webpack_require__(166);



var lib = {
    mouseEnterOnItem: function (item, ev) {
        // console.log('mouseEnter');
        this.next(item);
        this.fsm.select();
    },
    mouseLeaveFromItem: function (item, ev) {
        // console.log('mouseLeave');
        this.fsm.unselect();
    },
};
var GameLogic = /** @class */ (function () {
    function GameLogic(r, items, monster, dashboard, container) {
        var _this = this;
        this.r = r;
        this.monster = monster;
        this.dashboard = dashboard;
        this.fsm = new __WEBPACK_IMPORTED_MODULE_1__game_fsm__["a" /* GameFinistStateMachine */]();
        this.items = [];
        this.prev = function () { };
        this.next = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.prev = function () {
                return args;
            };
            return;
        };
        this.itemsMouseEnterListners = function (arg) {
            var items = _this.items.filter(function (item) { return item.isActive(); });
            return items.forEach(function (item) { return _this.makeListner(arg)(item.instance, 'mouseenter', item.getFn('mouseEnterOnItem')); });
        };
        this.itemMouseLeaveListner = function (arg, i) {
            var item = i || _this.prev()[0];
            return _this.makeListner(arg)(item.instance, 'mouseleave', item.getFn('mouseLeaveFromItem'));
        };
        this.itemMouseDownListner = function (arg) {
            return _this.makeListner(arg)(window, 'mousedown', _this.mouseDown);
        };
        this.itemMouseUpListner = function (arg) {
            return _this.makeListner(arg)(window, 'mouseup', _this.mouseUp);
        };
        this.listenCursorPosition = function (arg) {
            return _this.makeListner(arg)(window, 'mousemove', _this.handleCursorPosition);
        };
        this.handleCursorPosition = function (ev) {
            var item = _this.prev()[0];
            // console.log('cursor');
            var clientX = ev.clientX, clientY = ev.clientY;
            var top = _this.dashboard.offsetTop;
            var bottom = top + _this.dashboard.offsetHeight;
            var left = _this.dashboard.offsetLeft;
            var right = left + _this.dashboard.offsetWidth;
            var isOnDashboard = function () { return clientX > left && clientX < right && clientY > top && clientY < bottom; };
            _this.callbacks.onItemDragging.forEach(function (fn) { return fn(item, ev); });
            if (isOnDashboard()) {
                if (!_this.fsm.isDraggedOut()) {
                    _this.fsm.moveOut();
                }
            }
            else {
                if (!_this.fsm.isDraggedIn()) {
                    _this.fsm.moveIn();
                }
            }
        };
        this.mouseDown = function (ev) {
            // console.log('mouseDown');
            _this.fsm.grab();
            var item = _this.prev()[0];
            if (item.isCopy()) {
                _this.monster.clear('eyes');
                _this.removeActiveElement(item);
                return _this.callbacks.onContainerClick.forEach(function (fn) { return fn(item.parent, ev); });
            }
            _this.callbacks.onItemClick.forEach(function (fn) { return fn(item, ev); });
            return;
        };
        this.mouseUp = function (ev) {
            // console.log('mouseUp');
            var item = _this.prev()[0];
            _this.callbacks.afterItemDropped.forEach(function (fn) { return fn(_this, item, ev); });
            if (_this.fsm.isDraggedIn()) {
                if (item.isCopy()) {
                    _this.callbacks.afterItemPlaced.forEach(function (fn) { return fn(_this, item, ev); });
                    return _this.fsm.place();
                }
                if (_this.activeElement) {
                    _this.activateInstance(_this.activeElement.instance);
                }
                ;
                _this.setActiveElement(item);
                _this.callbacks.afterItemPlaced.forEach(function (fn) { return fn(_this, item, ev); });
                _this.fsm.place();
                return;
            }
            if (_this.fsm.isDraggedOut()) {
                if (item.isCopy()) {
                    _this.activateInstance(_this.activeElement.instance);
                    _this.setActiveElement(null);
                    _this.fsm.destroy();
                    return;
                }
                _this.activateInstance(item.instance);
                _this.fsm.destroy();
                return;
            }
            return;
        };
        this.listners = new __WEBPACK_IMPORTED_MODULE_2__listners_handler__["a" /* ListnersHandler */](this.r);
        this.callbacks = {
            onItemClick: [],
            afterItemDropped: [],
            afterItemPlaced: [],
            onItemDragging: [],
            onContainerClick: [],
        };
        items.forEach(function (item) {
            return _this.addActiveElement(new __WEBPACK_IMPORTED_MODULE_0__active_element_model__["a" /* ActiveElementModel */]({ instance: item.node, component: item.component }));
        });
        this.fsm.setFns('select', this.itemsMouseEnterListners.bind(this, false), this.itemMouseLeaveListner.bind(this, true, null), this.itemMouseDownListner.bind(this, true));
        this.fsm.setFns('unselect', this.itemMouseLeaveListner.bind(this, false, null), this.itemsMouseEnterListners.bind(this, true), this.itemMouseDownListner.bind(this, false));
        this.fsm.setFns('grab', this.itemMouseLeaveListner.bind(this, false, null), this.itemMouseDownListner.bind(this, false), this.itemMouseUpListner.bind(this, true), this.listenCursorPosition.bind(this, true));
        this.fsm.setFns('destroy', this.listenCursorPosition.bind(this, false), this.itemMouseUpListner.bind(this, false), this.itemsMouseEnterListners.bind(this, true));
        this.fsm.setFns('place', this.listenCursorPosition.bind(this, false), this.itemMouseUpListner.bind(this, false), this.itemsMouseEnterListners.bind(this, true));
    }
    ;
    GameLogic.prototype.start = function () {
        this.itemsMouseEnterListners(true);
        return this;
    };
    GameLogic.prototype.over = function () {
        this.listners.removeListners();
        return this;
    };
    GameLogic.prototype.addActiveElement = function (element) {
        element.addFn('mouseEnterOnItem', lib.mouseEnterOnItem.bind(this, element));
        element.addFn('mouseLeaveFromItem', lib.mouseLeaveFromItem.bind(this, element));
        this.items.push(element);
        return this;
    };
    GameLogic.prototype.AddActiveElementCopy = function (element, instance) {
        var copy = element.copy(instance);
        this.addActiveElement(copy);
        return this;
    };
    GameLogic.prototype.removeActiveElement = function (element) {
        var filtered = this.items.filter(function (e) { return e !== element; });
        this.items = filtered;
        return this;
    };
    GameLogic.prototype.makeListner = function (arg) {
        var _this = this;
        return function (e, ev, fn) {
            return _this.listners[arg ? 'addListner' : 'removeListner'](e, ev, fn);
        };
    };
    GameLogic.prototype.activateInstance = function (i) {
        var item = this.items.find(function (item) { return item.instance === i; });
        if (!item)
            return undefined;
        this.r.removeClass(item.instance, 'blocked');
        item.activate();
        return;
    };
    GameLogic.prototype.setActiveElement = function (i) {
        this.activeElement = i;
        return;
    };
    GameLogic.prototype.setFns = function (name) {
        var fns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fns[_i - 1] = arguments[_i];
        }
        var oldFns = this.callbacks[name];
        this.callbacks[name] = oldFns.concat(fns);
        return this;
    };
    return GameLogic;
}());

//# sourceMappingURL=game-logic.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveElementModel; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ActiveElementModel = /** @class */ (function () {
    function ActiveElementModel(obj) {
        this.state = 'activated';
        this.type = 'original';
        this.funcReg = new Map();
        this.children = [];
        this.instance = obj.instance;
        this.component = obj.component;
        this.breakpoints = { afterActivation: [], afterDeactivation: [] };
    }
    ;
    ActiveElementModel.prototype.addFn = function (name, fn) {
        this.funcReg.set(name, fn);
        return this;
    };
    ActiveElementModel.prototype.getFn = function (name) {
        return this.funcReg.get(name);
    };
    ActiveElementModel.prototype.setFns = function (name) {
        var fns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fns[_i - 1] = arguments[_i];
        }
        var oldFns = this.breakpoints[name];
        this.breakpoints[name] = oldFns.concat(fns);
        return this;
    };
    ActiveElementModel.prototype.copy = function (instance) {
        var child = new ActiveElementDescendentModel({
            instance: instance,
            component: this.component,
        }, this);
        this.children = this.children.concat([child]);
        return child;
    };
    ActiveElementModel.prototype.deleteCopy = function (instance) {
        this.children = this.children.filter(function (i) { return i === instance; });
        return this;
    };
    ActiveElementModel.prototype.isCopy = function () {
        return false;
    };
    ActiveElementModel.prototype.deactivate = function () {
        var _this = this;
        this.state = 'deactivated';
        this.breakpoints.afterDeactivation.forEach(function (fn) { return fn(_this.instance); });
        return;
    };
    ActiveElementModel.prototype.activate = function () {
        var _this = this;
        this.state = 'activated';
        this.breakpoints.afterActivation.forEach(function (fn) { return fn(_this.instance); });
        return;
    };
    ActiveElementModel.prototype.isActive = function () {
        if (this.state == 'activated')
            return true;
        return false;
    };
    return ActiveElementModel;
}());

var ActiveElementDescendentModel = /** @class */ (function (_super) {
    __extends(ActiveElementDescendentModel, _super);
    function ActiveElementDescendentModel(obj, parent) {
        var _this = _super.call(this, obj) || this;
        _this.parent = parent;
        _this.type = 'copy';
        return _this;
    }
    ActiveElementDescendentModel.prototype.copy = function (instance) {
        return this.parent.copy(instance);
    };
    ActiveElementDescendentModel.prototype.isCopy = function () {
        return this.parent;
    };
    ActiveElementDescendentModel.prototype.deleteCopy = function () {
        return this.parent.deleteCopy(this);
    };
    return ActiveElementDescendentModel;
}(ActiveElementModel));
//# sourceMappingURL=active-element.model.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monsters_monsters_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trinkets_trinkets_module__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_holder_item_holder_module__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1__monsters_monsters_module__["a" /* MonstersModule */], __WEBPACK_IMPORTED_MODULE_2__trinkets_trinkets_module__["a" /* TrinketsModule */], __WEBPACK_IMPORTED_MODULE_3__game_game_module__["a" /* GameModule */], __WEBPACK_IMPORTED_MODULE_4__item_holder_item_holder_module__["a" /* ItemHolderModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__monsters_monsters_module__["a" /* MonstersModule */], __WEBPACK_IMPORTED_MODULE_2__trinkets_trinkets_module__["a" /* TrinketsModule */], __WEBPACK_IMPORTED_MODULE_3__game_game_module__["a" /* GameModule */], __WEBPACK_IMPORTED_MODULE_4__item_holder_item_holder_module__["a" /* ItemHolderModule */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

;
//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonstersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alien_alien__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zombie_zombie__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skeleton_skeleton__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__monsters_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__monsters_host_directive__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__monster_part_directive__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// List of Monsters






var MonstersModule = /** @class */ (function () {
    function MonstersModule() {
    }
    MonstersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__zombie_zombie__["a" /* ZombieComponent */], __WEBPACK_IMPORTED_MODULE_3__skeleton_skeleton__["a" /* SkeletonComponent */], __WEBPACK_IMPORTED_MODULE_1__alien_alien__["a" /* AlienComponent */], __WEBPACK_IMPORTED_MODULE_4__monsters_component__["a" /* MonstersComponent */], __WEBPACK_IMPORTED_MODULE_5__monsters_host_directive__["a" /* MonstersHostDirective */], __WEBPACK_IMPORTED_MODULE_6__monster_part_directive__["a" /* MonsterPartDirective */]],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__zombie_zombie__["a" /* ZombieComponent */], __WEBPACK_IMPORTED_MODULE_3__skeleton_skeleton__["a" /* SkeletonComponent */], __WEBPACK_IMPORTED_MODULE_1__alien_alien__["a" /* AlienComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__monsters_component__["a" /* MonstersComponent */]]
        })
    ], MonstersModule);
    return MonstersModule;
}());

//# sourceMappingURL=monsters.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__glass_glass__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trinkets_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trinket_host_directive__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TrinketsModule = /** @class */ (function () {
    function TrinketsModule() {
    }
    TrinketsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__glass_glass__["a" /* GlassComponent */], __WEBPACK_IMPORTED_MODULE_3__trinkets_component__["a" /* TrinketsComponent */], __WEBPACK_IMPORTED_MODULE_4__trinket_host_directive__["a" /* TrinketHostDirective */]],
            providers: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__glass_glass__["a" /* GlassComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__trinkets_component__["a" /* TrinketsComponent */]]
        })
    ], TrinketsModule);
    return TrinketsModule;
}());

//# sourceMappingURL=trinkets.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CursorStateService } from './cursor-state.service';
var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            // providers: [GameService, CursorStateService],
            imports: [],
            entryComponents: [],
            exports: []
        })
    ], GameModule);
    return GameModule;
}());

//# sourceMappingURL=game.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemHolderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_holder_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_host_directive__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemHolderModule = /** @class */ (function () {
    function ItemHolderModule() {
    }
    ItemHolderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__item_holder_component__["a" /* ItemHolderComponent */], __WEBPACK_IMPORTED_MODULE_2__template_host_directive__["a" /* TemplateHostDriective */]],
            providers: [],
            imports: [],
            entryComponents: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__item_holder_component__["a" /* ItemHolderComponent */], __WEBPACK_IMPORTED_MODULE_2__template_host_directive__["a" /* TemplateHostDriective */]]
        })
    ], ItemHolderModule);
    return ItemHolderModule;
}());

//# sourceMappingURL=item-holder.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_repository__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_1__element_repository__["a" /* ElementRepository */]]
        })
    ], ModelModule);
    return ModelModule;
}());

;
//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_trinkets_trinkets_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_monsters_monsters_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game_game_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_game_game_logic__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_item_holder_item_holder_component__ = __webpack_require__(167);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GamePage = /** @class */ (function (_super) {
    __extends(GamePage, _super);
    function GamePage(navCtrl, navParams, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, renderer) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.renderer = renderer;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.injector = injector;
        _this.app = app;
        _this.glasses = null;
        _this.monsterId = 2;
        return _this;
        // this.monsterId = Math.round(Math.random() * (3 - 1) + 1);
        //
    }
    GamePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        var instances = this.trinkets.getInstances();
        var parts = this.monsters.getCurrentMonster().getParts();
        var innerEyes = {
            renderer: this.renderer,
            // eyeLeft: parts.find(p => p.type === 'eyeLeft').element,
            // eyeRight: parts.find(p => p.type === 'eyeRight').element,
            close: function () {
                this.renderer.setAttribute(this.eyeLeft, 'visibility', 'hidden');
                this.renderer.setAttribute(this.eyeRight, 'visibility', 'hidden');
            },
            open: function () {
                this.renderer.setAttribute(this.eyeLeft, 'visibility', 'visible');
                this.renderer.setAttribute(this.eyeRight, 'visibility', 'visible');
            },
        };
        var monster = this.monsters.getCurrentMonster();
        var eyes = monster.getGroup('eyes');
        var eyesContainer = monster.getContainer('eyes');
        var dashboard = document.getElementById('panel');
        this.logic = new __WEBPACK_IMPORTED_MODULE_5__components_game_game_logic__["a" /* GameLogic */](this.renderer, instances, this.monsters.getCurrentMonster(), dashboard, eyesContainer.element);
        var setHolderPosition = function (item, event) {
            var _a = event, x = _a.clientX, y = _a.clientY;
            var _b = _this.holder.getSize(), width = _b.width, height = _b.height;
            _this.holder.setAttributes({
                style: "left: " + (x - width / 2) + "px; top: " + (y - height / 2) + "px",
            });
        };
        this.logic.setFns('onItemDragging', setHolderPosition);
        this.logic.setFns('onItemClick', function (item, ev) {
            item.deactivate();
            _this.renderer.addClass(item.instance, 'blocked');
            _this.holder.loadComponent(item.component);
        }, setHolderPosition);
        this.logic.setFns('afterItemDropped', function () {
            _this.holder.clear();
        });
        this.logic.setFns('onContainerClick', function (_a, ev) {
            var component = _a.component;
            _this.holder.loadComponent(component);
        }, function () {
            // innerEyes.open();
        });
        this.logic.setFns('afterItemPlaced', function (ref, item) {
            // innerEyes.close();
            var _a = eyes.element.getBBox(), width = _a.width, height = _a.height, x = _a.x, y = _a.y;
            monster.render(item.component, 'eyes', function (instance) {
                _this.renderer.setAttribute(instance, 'width', (width * 2).toString());
                _this.renderer.setAttribute(instance, 'height', (height * 2).toString());
                _this.renderer.setAttribute(instance, 'x', (x - width / 2).toString());
                _this.renderer.setAttribute(instance, 'y', (y - height / 2).toString());
                ref.AddActiveElementCopy(item, instance);
                return;
            });
        });
        this.logic.start();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__components_trinkets_trinkets_component__["a" /* TrinketsComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__components_trinkets_trinkets_component__["a" /* TrinketsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__components_trinkets_trinkets_component__["a" /* TrinketsComponent */]) === "function" && _a || Object)
    ], GamePage.prototype, "trinkets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__components_monsters_monsters_component__["a" /* MonstersComponent */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__components_monsters_monsters_component__["a" /* MonstersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_monsters_monsters_component__["a" /* MonstersComponent */]) === "function" && _b || Object)
    ], GamePage.prototype, "monsters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__components_item_holder_item_holder_component__["a" /* ItemHolderComponent */]),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__components_item_holder_item_holder_component__["a" /* ItemHolderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__components_item_holder_item_holder_component__["a" /* ItemHolderComponent */]) === "function" && _c || Object)
    ], GamePage.prototype, "holder", void 0);
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/pages/game/game.html"*/'<ion-content fixed no-bounce>\n  <div id="container" class="container">\n    <item-holder></item-holder>\n    <div id="nb-target" class="screen zombie__screen">\n      <div id="on-screen">\n        <monster [monsterId]="monsterId"></monster>\n      </div>\n      <button ion-button icon-only outline class="btn-close" (click)="endGame()">\n        <ion-icon name="close" class="icon-close"></ion-icon>\n      </button>\n\n      <button ion-button icon-only outline class="btn-reset" (click)="reset()">\n        <ion-icon name="refresh" class="icon-reset"></ion-icon>\n      </button>\n    </div>\n    <div id="panel" class="panel-container">\n      <trinkets></trinkets>\n    </div>\n  </div>\n  <div id="active-ct"></div>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/pages/game/game.html"*/,
            providers: [],
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]) === "function" && _j || Object])
    ], GamePage);
    return GamePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}(__WEBPACK_IMPORTED_MODULE_4__components_game_game_service__["a" /* Game */]));

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_part_directive__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonsterModel = /** @class */ (function () {
    function MonsterModel(name, element, componentFactoryResolver, injector, app) {
        this.name = name;
        this.element = element;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.app = app;
    }
    MonsterModel.prototype.ngAfterViewInit = function () { };
    MonsterModel.prototype.getPartsArray = function () {
        return this.parts.toArray();
    };
    MonsterModel.prototype.getParts = function (fn) {
        if (fn === void 0) { fn = function (el) { return true; }; }
        var parts = this.getPartsArray();
        return parts.filter(fn);
    };
    MonsterModel.prototype.getPart = function (arg) {
        var parts = this.getPartsArray();
        var fn = arg || (function (p) { return p.name === arg; });
        return parts.find(fn);
    };
    MonsterModel.prototype.getContainer = function (name) {
        return this.getPart(function (p) { return p.group === name && p.type === 'container'; });
    };
    MonsterModel.prototype.getGroup = function (name) {
        return this.getPart(function (p) { return p.name === name && p.type === 'group'; });
    };
    MonsterModel.prototype.getContainers = function () {
        return this.getParts(function (p) { return p.type === 'container'; });
    };
    MonsterModel.prototype.render = function (component, name, callback) {
        if (callback === void 0) { callback = function (instance) { }; }
        var _a = this.getContainer(name), container = _a.viewContainerRef, element = _a.element;
        this.clear(name);
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        var ref = factory.create(this.injector, [], element);
        // this.app.attachView(ref.hostView);
        var instance = ref.instance.node.firstChild;
        return callback(instance);
    };
    MonsterModel.prototype.clear = function (name) {
        var _this = this;
        var element = this.getContainer(name).element;
        var children = Array.from(element.children).forEach(function (e) {
            return _this.renderer.removeChild(element, e);
        });
        return this;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__monster_part_directive__["a" /* MonsterPartDirective */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */]) === "function" && _a || Object)
    ], MonsterModel.prototype, "parts", void 0);
    MonsterModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({}),
        __metadata("design:paramtypes", [Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]) === "function" && _d || Object])
    ], MonsterModel);
    return MonsterModel;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=monster.model.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map