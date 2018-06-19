webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketUniqModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_part_directive__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_element_component_model__ = __webpack_require__(79);
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



var TrinketUniqModel = /** @class */ (function (_super) {
    __extends(TrinketUniqModel, _super);
    function TrinketUniqModel(name, element) {
        var _this = _super.call(this, name, element) || this;
        _this.afterInit = [];
        _this.initiated = false;
        return _this;
    }
    TrinketUniqModel.prototype.ngAfterViewInit = function () {
        this.initiated = true;
        if (!this.afterInit.length)
            this.load('default');
        this.afterInit.forEach(function (fn) { return fn(); });
    };
    TrinketUniqModel.prototype.load = function (name) {
        var _this = this;
        if (!this.initiated) {
            this.afterInit = this.afterInit.concat([function () { return _this.load(name); }]);
            return;
        }
        var part = this.parts.find(function (p) { return p.name === name; }) || this.parts.find(function (p) { return p.name === 'default'; });
        part.show();
        return;
    };
    TrinketUniqModel.prototype.getInstance = function (cb) {
        var _this = this;
        if (!this.initiated) {
            this.afterInit = this.afterInit.concat([function () { return _this.getInstance(cb); }]);
            return;
        }
        cb(this.node);
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_part_directive__["a" /* TrinketUniqPartDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], TrinketUniqModel.prototype, "parts", void 0);
    TrinketUniqModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({}),
        __metadata("design:paramtypes", [Object, Object])
    ], TrinketUniqModel);
    return TrinketUniqModel;
}(__WEBPACK_IMPORTED_MODULE_2__model_element_component_model__["a" /* ElementComponentModel */]));

//# sourceMappingURL=trinket-uniq.model.js.map

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_part_directive__ = __webpack_require__(187);
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
        this.emotion = 'default';
    }
    MonsterModel.prototype.ngAfterViewInit = function () { };
    MonsterModel.prototype.getPartsArray = function () {
        return this.parts.toArray();
    };
    MonsterModel.prototype.isOnMonster = function (_a) {
        var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
        var point = function (x, y) { return ({ x: x, y: y, }); };
        var rect = function (p1, p2) { return ({
            p1: p1, p2: p2,
            onRect: function (point) {
                var compareX = function (x) {
                    return (p1.x <= point.x) && (point.x <= p2.x);
                };
                var compareY = function (x) {
                    return (p1.y <= point.y) && (point.y <= p2.y);
                };
                return compareX(point.x) && compareY(point.y);
            }
        }); };
        var outline = this.getParts(function (p) { return p.outline; }).map(function (p) {
            var _a = p.element.getBoundingClientRect(), top = _a.top, right = _a.right, left = _a.left, bottom = _a.bottom;
            var point1 = point(Number(left), Number(top));
            var point2 = point(Number(right), Number(bottom));
            return rect(point1, point2);
        });
        var leftTop = point(Number(left), Number(top));
        var rightBottom = point(Number(right), Number(bottom));
        return outline.find(function (rect) { return rect.onRect(leftTop) || rect.onRect(rightBottom); }) ? true : false;
    };
    MonsterModel.prototype.getParts = function (fn) {
        if (fn === void 0) { fn = function (el) { return true; }; }
        var parts = this.getPartsArray();
        return parts.filter(fn);
    };
    MonsterModel.prototype.getRoot = function () {
        return this.getPart(function (p) { return p.type === 'root'; });
    };
    MonsterModel.prototype.getPart = function (arg) {
        var parts = this.getPartsArray();
        var fn = arg || (function (p) { return p.name === arg; });
        return parts.find(fn);
    };
    MonsterModel.prototype.getContainer = function (name, all) {
        var func = name instanceof Object ? (function (p) {
            return p.group === name.name &&
                p.type === 'container' &&
                p.mod === name.mod;
        }) :
            (function (p) { return p.group === name && p.type === 'container'; });
        return all ? this.getParts(func) : this.getPart(func);
    };
    MonsterModel.prototype.getGroup = function (name) {
        var n = name instanceof Object ? name.name : name;
        return this.getPart(function (p) { return p.name === n && p.type === 'group'; });
    };
    MonsterModel.prototype.getContainers = function () {
        return this.getParts(function (p) { return p.type === 'container'; });
    };
    MonsterModel.prototype.render = function (component, name, callback) {
        if (callback === void 0) { callback = function (instance, ref) { }; }
        var obj = this.getContainer(name);
        var _a = obj, container = _a.viewContainerRef, element = _a.element, content = _a.content;
        this.clear(name);
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        var ref = factory.create(this.injector, [], element);
        this.app.attachView(ref.hostView);
        var instance = ref.instance.node.children.item(0);
        obj.content = ref.instance;
        return callback(ref.instance, ref);
    };
    MonsterModel.prototype.clear = function (name) {
        var _this = this;
        var containers = this.getContainer(name, true);
        return containers.forEach(function (c) {
            var element = c.element;
            var children = Array.from(element.children).forEach(function (e) {
                return _this.renderer.removeChild(element, e);
            });
            c.content = null;
            return _this;
        });
    };
    MonsterModel.prototype.makeSad = function () {
        this.emotion = 'sad';
        return this;
    };
    MonsterModel.prototype.makeJoyjul = function () {
        this.emotion = 'joyful';
        return this;
    };
    MonsterModel.prototype.clearEmotion = function () {
        this.emotion = 'default';
        return this;
    };
    MonsterModel.prototype.getEmotion = function () {
        return this.emotion;
    };
    MonsterModel.prototype.trigger = function (name, fn) {
        var gr = this.getParts(function (p) { return p.name === name; });
        gr.forEach(function (_a) {
            var element = _a.element;
            return fn(element);
        });
    };
    MonsterModel.prototype.close = function (name) {
        var _this = this;
        this.trigger(name, function (element) {
            _this.renderer.setAttribute(element, 'visibility', 'hidden');
            return;
        });
        return function () { return _this.open(name); };
    };
    MonsterModel.prototype.open = function (name) {
        var _this = this;
        this.trigger(name, function (element) {
            element.removeAttribute('visibility');
        });
        return function () { return _this.close(name); };
        ;
    };
    MonsterModel.prototype.clearAll = function () {
        var _this = this;
        this.getContainers().forEach(function (_a) {
            var group = _a.group;
            return _this.clear(group);
        });
        this.getParts(function (p) { return p.type !== 'container'; }).forEach(function (_a) {
            var name = _a.name;
            _this.open(name);
        });
        this.getParts(function (p) { return p.hidden; }).forEach(function (_a) {
            var name = _a.name;
            _this.close(name);
        });
        return;
    };
    MonsterModel.prototype.animate = function (name, cb) {
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__monster_part_directive__["a" /* MonsterPartDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], MonsterModel.prototype, "parts", void 0);
    MonsterModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({}),
        __metadata("design:paramtypes", [Object, HTMLElement, __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], MonsterModel);
    return MonsterModel;
}());

//# sourceMappingURL=monster.model.js.map

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementComponentModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_repository__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__element_model__ = __webpack_require__(301);
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
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_trinkets_trinkets_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_monsters_monsters_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game_game_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_game_game_logic__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_item_holder_item_holder_component__ = __webpack_require__(201);
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
    function GamePage(navCtrl, params, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, renderer) || this;
        _this.navCtrl = navCtrl;
        _this.params = params;
        _this.renderer = renderer;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.injector = injector;
        _this.app = app;
        _this.monsterId = _this.params.get('monster');
        return _this;
    }
    GamePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.monster = this.monsterComponent.getCurrentMonster();
        var instances = this.trinkets.getInstances();
        var canPlace = function (ev) {
            var _a = ev, clientX = _a.clientX, clientY = _a.clientY;
            var dashboard = document.getElementById('panel');
            var top = dashboard.offsetTop;
            var bottom = top + dashboard.offsetHeight;
            var left = dashboard.offsetLeft;
            var right = left + dashboard.offsetWidth;
            var isOnDashboard = function () { return clientX > left && clientX < right && clientY > top && clientY < bottom; };
            var _b = document.getElementsByTagName('body').item(0), bodyH = _b.clientHeight, bodyW = _b.clientWidth;
            var isNearEdges = function (p) {
                return clientX < p || clientX > bodyW - p || clientY < p || clientY > bodyH - p;
            };
            return isOnDashboard() || isNearEdges(40);
        };
        this.logic = new __WEBPACK_IMPORTED_MODULE_5__components_game_game_logic__["a" /* GameLogic */](this.renderer, instances, canPlace);
        var setHolderPosition = function (ref, item, event) {
            var _a = event, x = _a.clientX, y = _a.clientY;
            var _b = _this.holder.getSize(), width = _b.width, height = _b.height;
            var _c = item.instance.getBoundingClientRect(), instanceW = _c.width, instanceH = _c.height;
            _this.holder.setAttributes({
                style: "left: " + x + "px; top: " + y + "px; transform: translate(-50%, -50%)",
            });
        };
        this.logic.setFns('onItemDragging', setHolderPosition);
        this.logic.setFns('onItemClick', function (items, item, ev) {
            var _a = item.meta, after = _a.after, multiple = _a.multiple, onScreen = _a.onScreen, random = _a.random;
            if (item.isCopy()) {
                var parent_1 = item.isCopy();
                if (!onScreen) {
                    _this.monster.clear(item.meta.getContainer(_this.monster.name));
                }
                else {
                    _this.monsterComponent.remove(item.instance);
                }
                var holderInstance_1 = _this.holder.loadComponent(parent_1.component);
                if (random) {
                    holderInstance_1.load(item.randomArr);
                }
                items.removeActiveElement(item);
                (item).deleteCopy();
                after ? after(_this.monster, items, item.instance) : null;
                return;
            }
            if (!multiple) {
                // item.deactivate();
                // this.renderer.addClass(item.instance, 'blocked');
            }
            var holderInstance = _this.holder.loadComponent(item.component);
            if (random) {
                var selected = holderInstance.randomize(function (selected) {
                    item.randomArr = selected;
                });
            }
            return;
        }, setHolderPosition);
        this.logic.setFns('afterItemDropped', function () {
            _this.holder.clear();
        });
        this.logic.setFns('afterItemPlaced', function (items, item, ev) {
            var _a = item.meta, before = _a.before, multiple = _a.multiple, onScreen = _a.onScreen;
            if (onScreen) {
                _this.monsterComponent.render(item.component, function (instance) {
                    var position = _this.holder.getAttributes().style;
                    var style = "position: absolute; z-index: 11; " + position;
                    _this.renderer.setAttribute(instance.node, 'style', style);
                    before ? before(_this.monster, items, instance.node) : null;
                    var copy = items.addActiveElementCopy(item, instance.node);
                    if (_this.monster.isOnMonster(instance.node.getBoundingClientRect())) {
                        copy.onMonster = true;
                    }
                    if (item.meta.random) {
                        instance.load(item.randomArr);
                        copy.randomArr = item.randomArr;
                        item.randomArr = null;
                    }
                });
                return;
            }
            item.meta.getContainer();
            var content = _this.monster.getContainer(item.meta.getContainer(_this.monster.name)).content;
            var element = _this.monster.getGroup(item.meta.getContainer(_this.monster.name)).element;
            if (content) {
                var contentElement = content.node.children.item(0);
                var active = items.findActiveElementByInstance(contentElement);
                var after = active.meta.after;
                var parent_2 = active.isCopy();
                // parent.activate();
                // this.renderer.removeClass(parent.instance, 'blocked');
                items.removeActiveElement(active);
                after ? after(_this.monster, items, item.instance) : null;
            }
            _this.monster.render(item.component, item.meta.getContainer(_this.monster.name), function (instance, ref) {
                var func = function (instance, async) {
                    before ? before(_this.monster, items, instance) : null;
                    var copy = items.addActiveElementCopy(item, instance);
                    var config = element.getBBox();
                    var attr = item.meta.attr;
                    Object.keys(attr).forEach(function (name) {
                        var funcs = attr[name];
                        var fn = funcs[_this.monster.name] || funcs['default'];
                        _this.renderer.setAttribute(instance, name, fn(config).toString());
                        return;
                    });
                    if (async) {
                        _this.logic.stop();
                        _this.logic.start();
                    }
                    return;
                };
                if (item.meta.uniq) {
                    ref.instance.load(_this.monster.name);
                    ref.instance.getInstance(function (node) {
                        var svg = node.children.item(0);
                        func(svg, true);
                    });
                }
                else {
                    var instanceElement = instance.node.children.item(0);
                    func(instanceElement);
                    return;
                }
            });
        });
        this.logic.setFns('afterItemDesroyed', function (ref, item) {
            var parent = item.isCopy();
            var el = parent ? parent : item;
            // el.activate();
            // this.renderer.removeClass(el.instance, 'blocked');
        });
        this.logic.setFns('afterClear', function (ref, items) {
            items.forEach(function (el) {
                // el.activate();
                // this.renderer.removeClass(el.instance, 'blocked');
            });
        });
        this.logic.start();
    };
    GamePage.prototype.endGame = function () {
        this.logic.over();
        this.holder.clear();
        this.monster.clearAll();
        this.monsterComponent.clearAll();
        this.navCtrl.pop();
    };
    GamePage.prototype.reset = function () {
        this.logic.over();
        this.holder.clear();
        this.monster.clearAll();
        this.monsterComponent.clearAll();
        this.logic.start();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__components_trinkets_trinkets_component__["a" /* TrinketsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__components_trinkets_trinkets_component__["a" /* TrinketsComponent */])
    ], GamePage.prototype, "trinkets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__components_monsters_monsters_component__["a" /* MonstersComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_monsters_monsters_component__["a" /* MonstersComponent */])
    ], GamePage.prototype, "monsterComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__components_item_holder_item_holder_component__["a" /* ItemHolderComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__components_item_holder_item_holder_component__["a" /* ItemHolderComponent */])
    ], GamePage.prototype, "holder", void 0);
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/pages/game/game.html"*/'<ion-content fixed no-bounce>\n  <div id="container" class="container">\n    <item-holder></item-holder>\n    <div id="nb-target" class="screen zombie__screen">\n      <div id="on-screen">\n        <monster [monsterId]="monsterId"></monster>\n      </div>\n      <button ion-button icon-only outline class="btn-close" (click)="endGame()">\n        <ion-icon name="close" class="icon-close"></ion-icon>\n      </button>\n\n      <button ion-button icon-only outline class="btn-reset" (click)="reset()">\n        <ion-icon name="refresh" class="icon-reset"></ion-icon>\n      </button>\n    </div>\n    <div id="panel" class="panel-container">\n      <trinkets></trinkets>\n    </div>\n  </div>\n  <div id="active-ct"></div>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/pages/game/game.html"*/,
            providers: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], GamePage);
    return GamePage;
}(__WEBPACK_IMPORTED_MODULE_4__components_game_game_service__["a" /* Game */]));

//# sourceMappingURL=game.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_select__ = __webpack_require__(203);
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
    HomePage.prototype.select = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__select_select__["a" /* SelectPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="container" padding fixed no-bounce>\n  <div class="image">\n    <img class="btn-play" (click)="select()" src="assets/imgs/home-page_play.svg" alt="hit the btn to play!" />\n  </div>\n  <img src="assets/imgs/home-page_logo.svg" alt="logotype" class="logo">\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
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
webpackEmptyAsyncContext.id = 113;

/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/game/game.module": [
		351,
		1
	],
	"../pages/home/home.module": [
		352,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_host_directive__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trinkets_service__ = __webpack_require__(300);
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
            return __assign({}, instance, { component: trinket.component, meta: trinket.meta });
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
/* 156 */
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
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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
            selector: 'glass',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/glass/glass.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg width="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 301.28 112.68" class="glass">\n    <path class="cls-1" d="M96.84,106.39l-39.23,-50.49a20.3,20.3,0,1,1,35.17,-20.3l4.07,7l4.07,-7a20.3,20.3,0,1,1,35.16,20.3z"/>\n    <path class="cls-1" d="M204.44,106.39l-39.23,-50.49a20.3,20.3,0,1,1,35.16,-20.3l4.07,7l4.07,-7a20.3,20.3,0,1,1,35.16,20.3z"/>\n    <path class="cls-2" d="M137.65,49.83a18.36,18.36,0,0,1,26,0"/>\n    <path class="cls-3" d="M6.16,22.4a11.53,11.53,0,0,1,-0.66,-16.24h0a11.53,11.53,0,0,1,16.24,-0.66l34.09,31.41"/>\n    <path class="cls-3" d="M295.12,22.4a11.53,11.53,0,0,0,0.66,-16.24h0a11.53,11.53,0,0,0,-16.24,-0.66l-34.09,31.41"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 147.71 128.24" class="glass glass--spider">\n    <path class="cls-1" d="M47.48,52.16,28.25,27.41a10,10,0,1,1,17.24-10l2,3.45,2-3.45a10,10,0,1,1,17.24,10Z"/>\n    <path class="cls-1" d="M100.23,52.16,81,27.41a10,10,0,1,1,17.24-10l2,3.45,2-3.45a10,10,0,1,1,17.24,10Z"/>\n    <path class="cls-2" d="M67.49,24.43a9,9,0,0,1,12.74,0"/>\n    <path class="cls-3" d="M3,11a5.65,5.65,0,0,1-.33-8h0a5.65,5.65,0,0,1,8-.33L27.37,18.1"/>\n    <path class="cls-3" d="M144.69,11A5.65,5.65,0,0,0,145,3h0a5.65,5.65,0,0,0-8-.33L120.34,18.1"/>\n    <path class="cls-1" d="M47.48,125.16,28.25,100.41a10,10,0,1,1,17.24-10l2,3.45,2-3.45a10,10,0,1,1,17.24,10Z"/>\n    <path class="cls-1" d="M100.23,125.16,81,100.41a10,10,0,1,1,17.24-10l2,3.45,2-3.45a10,10,0,1,1,17.24,10Z"/>\n    <path class="cls-2" d="M67.49,97.43a9,9,0,0,1,12.74,0"/>\n    <path class="cls-3" d="M3,84a5.65,5.65,0,0,1-.33-8h0a5.65,5.65,0,0,1,8-.33L27.37,91.1"/>\n    <path class="cls-3" d="M144.69,84a5.65,5.65,0,0,0,.33-8h0a5.65,5.65,0,0,0-8-.33L120.34,91.1"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/glass/glass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], GlassComponent);
    return GlassComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=glass.js.map

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketUniqPartDirective; });
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

var TrinketUniqPartDirective = /** @class */ (function () {
    function TrinketUniqPartDirective(el, templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.element = el.nativeElement;
    }
    TrinketUniqPartDirective.prototype.show = function () {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        return this;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('part-name'),
        __metadata("design:type", String)
    ], TrinketUniqPartDirective.prototype, "name", void 0);
    TrinketUniqPartDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[trinket-uniq-part]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], TrinketUniqPartDirective);
    return TrinketUniqPartDirective;
}());

//# sourceMappingURL=trinket-uniq-part.directive.js.map

/***/ }),
/* 159 */
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
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EyesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_element_component_model__ = __webpack_require__(79);
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


var EyesComponent = /** @class */ (function (_super) {
    __extends(EyesComponent, _super);
    function EyesComponent(element) {
        return _super.call(this, 'eyes', element.nativeElement) || this;
    }
    EyesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'eyes',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/eyes/eyes.html"*/'<svg width="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.99 42.03" class="eyes-trinket">\n         <path class="cls-1" d="M0.76,21c16.86,28,44.16,28,61,0c-16.85,-28,-44.14,-28,-61,0z"></path>\n         <path d="M0.18,7a14.15,14.15,0,0,0,1.16,3.1a10.71,10.71,0,0,0,1.86,2.52a10.75,10.75,0,0,0,2.52,1.86a14.25,14.25,0,0,0,3.1,1.17a7.15,7.15,0,0,1,-6.61,-2a7.17,7.17,0,0,1,-2.03,-6.65z"></path>\n         <path d="M4.09,5.05a14.15,14.15,0,0,0,1.16,3.1a10.71,10.71,0,0,0,1.86,2.52a10.76,10.76,0,0,0,2.52,1.86a14.25,14.25,0,0,0,3.1,1.17a7.15,7.15,0,0,1,-6.61,-2a7.17,7.17,0,0,1,-2.03,-6.65z"></path>\n         <path d="M8,3.59a14.15,14.15,0,0,0,1.16,3.1a10.69,10.69,0,0,0,1.84,2.52a10.77,10.77,0,0,0,2.52,1.86a14.27,14.27,0,0,0,3.1,1.17a7.15,7.15,0,0,1,-6.61,-2a7.17,7.17,0,0,1,-2.01,-6.65z"></path>\n         <path d="M11.91,1.6a14.15,14.15,0,0,0,1.16,3.1a10.69,10.69,0,0,0,1.86,2.52a10.77,10.77,0,0,0,2.52,1.86a14.27,14.27,0,0,0,3.1,1.17a7.15,7.15,0,0,1,-6.61,-2a7.17,7.17,0,0,1,-2.03,-6.65z"></path>\n         <path d="M15.82,0.67a14.15,14.15,0,0,0,1.18,3.09a10.7,10.7,0,0,0,1.86,2.52a10.74,10.74,0,0,0,2.52,1.86a14.25,14.25,0,0,0,3.1,1.17a7.15,7.15,0,0,1,-6.61,-2a7.17,7.17,0,0,1,-2.05,-6.64z"></path>\n         <path d="M19.72,0a14.15,14.15,0,0,0,1.16,3.1a10.7,10.7,0,0,0,1.86,2.52a10.77,10.77,0,0,0,2.52,1.86a14.27,14.27,0,0,0,3.1,1.17a7.15,7.15,0,0,1,-6.61,-2a7.17,7.17,0,0,1,-2.03,-6.65z"></path>\n         <path class="cls-2" d="M0.76,21a43.13,43.13,0,0,0,61,0a43.13,43.13,0,0,0,-61,0z"></path>\n         <path class="cls-3" d="M41.26,32.5a15.21,15.21,0,0,0,0,-23a43.31,43.31,0,0,0,-20,0a15.21,15.21,0,0,0,0,23a43.31,43.31,0,0,0,20,0z"></path>\n         <circle cx="31.27" cy="21.02" r="5.12"></circle>\n         <path class="cls-1" d="M131.24,21c-16.86,28,-44.16,28,-61,0c16.84,-28,44.13,-28,61,0z"></path>\n         <path d="M131.82,7a7.17,7.17,0,0,1,-2,6.61a7.15,7.15,0,0,1,-6.61,2a14.25,14.25,0,0,0,3.1,-1.17a10.75,10.75,0,0,0,2.52,-1.86a10.71,10.71,0,0,0,1.86,-2.52a14.15,14.15,0,0,0,1.13,-3.06z"></path>\n         <path d="M127.91,5.05a7.17,7.17,0,0,1,-2,6.61a7.15,7.15,0,0,1,-6.61,2a14.25,14.25,0,0,0,3.1,-1.17a10.76,10.76,0,0,0,2.52,-1.86a10.72,10.72,0,0,0,1.86,-2.52a14.15,14.15,0,0,0,1.13,-3.06z"></path>\n         <path d="M124,3.59a7.17,7.17,0,0,1,-2,6.61a7.15,7.15,0,0,1,-6.61,2a14.27,14.27,0,0,0,3.1,-1.17a10.77,10.77,0,0,0,2.51,-1.82a10.69,10.69,0,0,0,1.86,-2.52a14.16,14.16,0,0,0,1.14,-3.1z"></path>\n         <path d="M120.09,1.6a7.17,7.17,0,0,1,-2,6.61a7.15,7.15,0,0,1,-6.61,2a14.27,14.27,0,0,0,3.1,-1.17a10.77,10.77,0,0,0,2.52,-1.86a10.69,10.69,0,0,0,1.86,-2.52a14.15,14.15,0,0,0,1.13,-3.06z"></path>\n         <path d="M116.18,0.67a7.17,7.17,0,0,1,-2,6.61a7.15,7.15,0,0,1,-6.61,2a14.25,14.25,0,0,0,3.1,-1.17a10.74,10.74,0,0,0,2.52,-1.86a10.7,10.7,0,0,0,1.81,-2.49a14.15,14.15,0,0,0,1.18,-3.09z"></path>\n         <path d="M112.27,0a7.17,7.17,0,0,1,-2,6.61a7.15,7.15,0,0,1,-6.61,2a14.27,14.27,0,0,0,3.1,-1.17a10.77,10.77,0,0,0,2.52,-1.86a10.7,10.7,0,0,0,1.82,-2.48a14.15,14.15,0,0,0,1.17,-3.1z"></path>\n         <path class="cls-2" d="M131.24,21a43.13,43.13,0,0,1,-61,0a43.13,43.13,0,0,1,61,0z"></path>\n         <path class="cls-3" d="M90.73,32.5a15.21,15.21,0,0,1,0,-23a43.31,43.31,0,0,1,20,0a15.21,15.21,0,0,1,0,23a43.31,43.31,0,0,1,-20,0z"></path>\n         <circle cx="100.73" cy="21.02" r="5.12"></circle>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/eyes/eyes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], EyesComponent);
    return EyesComponent;
}(__WEBPACK_IMPORTED_MODULE_1__model_element_component_model__["a" /* ElementComponentModel */]));

//# sourceMappingURL=eyes.js.map

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var HoodComponent = /** @class */ (function (_super) {
    __extends(HoodComponent, _super);
    function HoodComponent(element) {
        return _super.call(this, 'hood', element.nativeElement) || this;
    }
    HoodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'hood',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/hood/hood.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg width="75" class="hood--color--blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.1 289.03">\n    <polygon class="cls-1" points="84.05 72.85 126.08 180.94 168.1 289.03 84.05 289.03 0 289.03 42.02 180.94 84.05 72.85"/>\n    <path class="cls-1" d="M85.93,78.09l-3.82-1.37C83.81,72,86.89,70.4,89.62,69c2.46-1.27,4.4-2.28,5.56-5.5s.3-5.23-.78-7.78c-1.2-2.82-2.56-6-.86-10.74s4.78-6.32,7.51-7.73c2.46-1.27,4.4-2.28,5.56-5.5s.3-5.23-.78-7.78c-1.2-2.82-2.56-6-.86-10.74s4.78-6.32,7.51-7.73c2.46-1.27,4.4-2.28,5.56-5.5l3.82,1.37c-1.7,4.72-4.78,6.32-7.51,7.73-2.46,1.27-4.4,2.28-5.56,5.5s-.3,5.23.78,7.78c1.2,2.82,2.56,6,.86,10.74s-4.78,6.32-7.51,7.73c-2.46,1.27-4.4,2.28-5.56,5.5s-.3,5.23.78,7.78c1.2,2.82,2.56,6,.86,10.74s-4.78,6.32-7.51,7.73C89,73.86,87.09,74.87,85.93,78.09Z"/>\n    <path class="cls-1" d="M84.81,81l-3-2.69c3.33-3.75,6.79-4.09,9.84-4.39,2.75-.27,4.93-.48,7.2-3S101,66.14,101,63.37c-.07-3.07-.14-6.54,3.18-10.29S110.95,49,114,48.69c2.75-.27,4.93-.48,7.2-3s2.22-4.75,2.16-7.51c-.07-3.07-.14-6.54,3.18-10.29s6.79-4.09,9.84-4.39c2.75-.27,4.93-.48,7.2-3l3,2.69c-3.33,3.75-6.79,4.09-9.84,4.39-2.75.27-4.93.48-7.2,3s-2.22,4.75-2.16,7.51c.07,3.07.14,6.54-3.18,10.29s-6.79,4.09-9.84,4.39c-2.75.27-4.93.48-7.2,3S105,60.52,105,63.29c.07,3.07.14,6.54-3.18,10.29S95.06,77.67,92,78C89.26,78.24,87.08,78.45,84.81,81Z"/>\n    <path class="cls-1" d="M85.35,79.79l-3.49-2.08c2.56-4.31,5.9-5.29,8.84-6.16,2.65-.78,4.75-1.4,6.5-4.34s1.29-5.08.71-7.78c-.64-3-1.37-6.4,1.2-10.71s5.9-5.29,8.84-6.16c2.65-.78,4.75-1.4,6.5-4.34s1.29-5.08.71-7.79c-.64-3-1.37-6.4,1.2-10.71s5.9-5.29,8.84-6.16c2.65-.78,4.75-1.4,6.5-4.34l3.49,2.08c-2.56,4.31-5.9,5.29-8.84,6.16-2.65.78-4.75,1.4-6.5,4.34s-1.29,5.08-.71,7.79c.64,3,1.37,6.4-1.2,10.71s-5.9,5.29-8.84,6.16c-2.65.78-4.75,1.4-6.5,4.34s-1.29,5.08-.71,7.78c.64,3,1.37,6.4-1.2,10.71s-5.9,5.29-8.84,6.16C89.19,76.23,87.1,76.85,85.35,79.79Z"/>\n    <circle class="cls-2" cx="83.89" cy="163.19" r="15.22"/>\n    <circle class="cls-3" cx="61.58" cy="220.03" r="22"/>\n    <circle class="cls-4" cx="115.7" cy="253.17" r="22"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="hood--color--yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.8 98.59">\n    <polygon class="cls-1" points="6.8 26.09 39.3 45.48 71.8 64.86 50.17 81.72 28.54 98.58 17.67 62.34 6.8 26.09"/>\n    <path class="cls-1" d="M8.34,27.07l-1.26.41A4.29,4.29,0,0,1,7.46,24,3,3,0,0,0,6,19.61a4.26,4.26,0,0,1-2-6.09A3,3,0,0,0,4.36,11,3,3,0,0,0,2.6,9.15a4.26,4.26,0,0,1-2-6.09A3,3,0,0,0,.93.53L2.19.12a4.29,4.29,0,0,1-.38,3.49,3,3,0,0,0-.33,2.53A3,3,0,0,0,3.24,8a4.26,4.26,0,0,1,2,6.09,3,3,0,0,0,1.43,4.37,4.26,4.26,0,0,1,2,6.09A3,3,0,0,0,8.34,27.07Z"/>\n    <path class="cls-1" d="M8.64,28,7.31,28A4.29,4.29,0,0,1,9,24.86a3,3,0,0,0,.29-4.59,4.26,4.26,0,0,1,.41-6.39A3,3,0,0,0,10,9.28a4.26,4.26,0,0,1,.41-6.39A3,3,0,0,0,11.6.66l1.32.08a4.29,4.29,0,0,1-1.65,3.1A3,3,0,0,0,10,6.07a3,3,0,0,0,1,2.37,4.26,4.26,0,0,1-.41,6.39,3,3,0,0,0-.29,4.59,4.26,4.26,0,0,1-.41,6.39A3,3,0,0,0,8.64,28Z"/>\n    <path class="cls-1" d="M8.53,27.62l-1.31.17a4.29,4.29,0,0,1,1-3.36,3,3,0,0,0-.58-4.57,4.26,4.26,0,0,1-.8-6.35A3,3,0,0,0,6.3,8.94a4.26,4.26,0,0,1-.8-6.35A3,3,0,0,0,6.3.17L7.62,0a4.29,4.29,0,0,1-1,3.36,3,3,0,0,0-.8,2.42A3,3,0,0,0,7.15,7.93,4.26,4.26,0,0,1,8,14.28a3,3,0,0,0,.58,4.57,4.26,4.26,0,0,1,.8,6.35A3,3,0,0,0,8.53,27.62Z"/>\n    <circle class="cls-2" cx="24.88" cy="49.38" r="4.97" transform="translate(-25.1 25.73) rotate(-37.94)"/>\n    <circle class="cls-3" cx="30.55" cy="68.48" r="7.18" transform="translate(-35.65 33.25) rotate(-37.94)"/>\n    <circle class="cls-4" cx="51.12" cy="66.15" r="7.18" transform="translate(-29.87 45.41) rotate(-37.94)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="hood--color--pink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.45 61.23">\n    <polygon class="cls-1" points="46.63 8.77 39.04 35 31.45 61.23 15.72 49.22 0 37.2 23.32 22.98 46.63 8.77"/>\n    <path class="cls-1" d="M46.24,10l-.52-.8a3.09,3.09,0,0,1,2.51-.37A2.14,2.14,0,0,0,51,7a3.07,3.07,0,0,1,3.88-2.5,2.19,2.19,0,0,0,1.83-.23,2.19,2.19,0,0,0,1-1.57A3.07,3.07,0,0,1,61.58.23,2.19,2.19,0,0,0,63.41,0l.52.8a3.1,3.1,0,0,1-2.51.37A2.14,2.14,0,0,0,58.62,3a3.07,3.07,0,0,1-3.88,2.5,2.14,2.14,0,0,0-2.79,1.8,3.07,3.07,0,0,1-3.88,2.5A2.19,2.19,0,0,0,46.24,10Z"/>\n    <path class="cls-1" d="M45.61,10.41l-.18-.94a3.1,3.1,0,0,1,2.47.59,2.14,2.14,0,0,0,3.26-.64,3.07,3.07,0,0,1,4.54-.88A2.14,2.14,0,0,0,59,7.9,3.07,3.07,0,0,1,63.49,7a2.19,2.19,0,0,0,1.78.46l.18.94A3.1,3.1,0,0,1,63,7.83a2.14,2.14,0,0,0-3.26.64,3.07,3.07,0,0,1-4.54.88,2.14,2.14,0,0,0-3.26.64,3.07,3.07,0,0,1-4.54.88A2.19,2.19,0,0,0,45.61,10.41Z"/>\n    <path class="cls-1" d="M45.88,10.26l-.36-.89a3.1,3.1,0,0,1,2.53.11,2.14,2.14,0,0,0,3.08-1.24,3.07,3.07,0,0,1,4.29-1.72,2.14,2.14,0,0,0,3.08-1.24,3.07,3.07,0,0,1,4.29-1.72,2.19,2.19,0,0,0,1.84.12l.36.89a3.1,3.1,0,0,1-2.53-.11A2.14,2.14,0,0,0,59.38,5.7a3.07,3.07,0,0,1-4.29,1.72A2.14,2.14,0,0,0,52,8.65a3.07,3.07,0,0,1-4.29,1.72A2.19,2.19,0,0,0,45.88,10.26Z"/>\n    <circle class="cls-2" cx="33.69" cy="25.65" r="3.58" transform="translate(-7.15 36.84) rotate(-52.61)"/>\n    <circle class="cls-3" cx="21.39" cy="33.09" r="5.18" transform="translate(-17.89 29.99) rotate(-52.61)"/>\n    <circle class="cls-4" cx="26.77" cy="47.03" r="5.18" transform="translate(-26.85 39.74) rotate(-52.61)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="hood--color--blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.88 57.3">\n    <polygon class="cls-1" points="20.29 5.8 35.07 31.55 49.86 57.3 63.37 40.55 76.89 23.8 48.59 14.8 20.29 5.8"/>\n    <path class="cls-1" d="M20.28,6.52l.32-.94A3.21,3.21,0,0,0,18,5.82a2.22,2.22,0,0,1-3.26-1.13,3.19,3.19,0,0,0-4.54-1.57,2.27,2.27,0,0,1-1.9.21A2.27,2.27,0,0,1,6.92,2,3.19,3.19,0,0,0,2.38.43,2.27,2.27,0,0,1,.48.64l-.32.94a3.22,3.22,0,0,0,2.62-.24,2.27,2.27,0,0,1,1.9-.21A2.27,2.27,0,0,1,6,2.46,3.19,3.19,0,0,0,10.58,4a2.22,2.22,0,0,1,3.26,1.13,3.19,3.19,0,0,0,4.54,1.57A2.27,2.27,0,0,1,20.28,6.52Z"/>\n    <path class="cls-1" d="M21,6.75l0-1A3.22,3.22,0,0,0,18.61,7a2.22,2.22,0,0,1-3.45.16,3.19,3.19,0,0,0-4.79.22,2.22,2.22,0,0,1-3.45.16,3.19,3.19,0,0,0-4.8.22,2.27,2.27,0,0,1-1.69.9l0,1a3.22,3.22,0,0,0,2.35-1.2,2.27,2.27,0,0,1,1.69-.9,2.27,2.27,0,0,1,1.76.74A3.19,3.19,0,0,0,11.08,8a2.22,2.22,0,0,1,3.45-.16,3.19,3.19,0,0,0,4.79-.22A2.27,2.27,0,0,1,21,6.75Z"/>\n    <path class="cls-1" d="M20.69,6.67l.14-1a3.22,3.22,0,0,0-2.53.74,2.22,2.22,0,0,1-3.42-.49,3.19,3.19,0,0,0-4.75-.68,2.22,2.22,0,0,1-3.42-.49A3.19,3.19,0,0,0,2,4.09a2.27,2.27,0,0,1-1.82.57L0,5.64a3.22,3.22,0,0,0,2.53-.74,2.27,2.27,0,0,1,1.82-.57A2.27,2.27,0,0,1,5.95,5.39a3.19,3.19,0,0,0,4.75.68,2.22,2.22,0,0,1,3.42.49,3.19,3.19,0,0,0,4.75.68A2.27,2.27,0,0,1,20.69,6.67Z"/>\n    <circle class="cls-2" cx="36.79" cy="19.2" r="3.72" transform="translate(-1.25 35.79) rotate(-51.12)"/>\n    <circle class="cls-3" cx="51.04" cy="23.68" r="5.38" transform="translate(0.57 48.54) rotate(-51.12)"/>\n    <circle class="cls-4" cx="51.14" cy="41.1" r="5.63" transform="translate(-12.95 55.11) rotate(-51.12)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="hood--color--blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.88 57.3">\n    <polygon class="cls-1" points="20.29 5.8 35.07 31.55 49.86 57.3 63.37 40.55 76.89 23.8 48.59 14.8 20.29 5.8"/>\n    <path class="cls-1" d="M20.28,6.52l.32-.94A3.21,3.21,0,0,0,18,5.82a2.22,2.22,0,0,1-3.26-1.13,3.19,3.19,0,0,0-4.54-1.57,2.27,2.27,0,0,1-1.9.21A2.27,2.27,0,0,1,6.92,2,3.19,3.19,0,0,0,2.38.43,2.27,2.27,0,0,1,.48.64l-.32.94a3.22,3.22,0,0,0,2.62-.24,2.27,2.27,0,0,1,1.9-.21A2.27,2.27,0,0,1,6,2.46,3.19,3.19,0,0,0,10.58,4a2.22,2.22,0,0,1,3.26,1.13,3.19,3.19,0,0,0,4.54,1.57A2.27,2.27,0,0,1,20.28,6.52Z"/>\n    <path class="cls-1" d="M21,6.75l0-1A3.22,3.22,0,0,0,18.61,7a2.22,2.22,0,0,1-3.45.16,3.19,3.19,0,0,0-4.79.22,2.22,2.22,0,0,1-3.45.16,3.19,3.19,0,0,0-4.8.22,2.27,2.27,0,0,1-1.69.9l0,1a3.22,3.22,0,0,0,2.35-1.2,2.27,2.27,0,0,1,1.69-.9,2.27,2.27,0,0,1,1.76.74A3.19,3.19,0,0,0,11.08,8a2.22,2.22,0,0,1,3.45-.16,3.19,3.19,0,0,0,4.79-.22A2.27,2.27,0,0,1,21,6.75Z"/>\n    <path class="cls-1" d="M20.69,6.67l.14-1a3.22,3.22,0,0,0-2.53.74,2.22,2.22,0,0,1-3.42-.49,3.19,3.19,0,0,0-4.75-.68,2.22,2.22,0,0,1-3.42-.49A3.19,3.19,0,0,0,2,4.09a2.27,2.27,0,0,1-1.82.57L0,5.64a3.22,3.22,0,0,0,2.53-.74,2.27,2.27,0,0,1,1.82-.57A2.27,2.27,0,0,1,5.95,5.39a3.19,3.19,0,0,0,4.75.68,2.22,2.22,0,0,1,3.42.49,3.19,3.19,0,0,0,4.75.68A2.27,2.27,0,0,1,20.69,6.67Z"/>\n    <circle class="cls-2" cx="36.79" cy="19.2" r="3.72" transform="translate(-1.25 35.79) rotate(-51.12)"/>\n    <circle class="cls-3" cx="51.04" cy="23.68" r="5.38" transform="translate(0.57 48.54) rotate(-51.12)"/>\n    <circle class="cls-4" cx="51.14" cy="41.1" r="5.63" transform="translate(-12.95 55.11) rotate(-51.12)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="hood--color--yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.15 64.75">\n    <polygon class="cls-1" points="4.47 17.14 25.81 29.87 47.15 42.6 32.95 53.67 18.75 64.75 11.61 40.94 4.47 17.14"/>\n    <path class="cls-1" d="M5.48,17.78,4.65,18a2.82,2.82,0,0,1,.25-2.3A1.94,1.94,0,0,0,4,12.88a2.8,2.8,0,0,1-1.31-4,2,2,0,0,0,.21-1.66A2,2,0,0,0,1.71,6,2.8,2.8,0,0,1,.4,2,2,2,0,0,0,.61.35L1.44.08a2.82,2.82,0,0,1-.25,2.3A2,2,0,0,0,1,4,2,2,0,0,0,2.13,5.25a2.8,2.8,0,0,1,1.31,4,1.94,1.94,0,0,0,.94,2.87,2.8,2.8,0,0,1,1.31,4A2,2,0,0,0,5.48,17.78Z"/>\n    <path class="cls-1" d="M5.67,18.42l-.87-.06a2.82,2.82,0,0,1,1.08-2,1.94,1.94,0,0,0,.19-3,2.8,2.8,0,0,1,.27-4.2,1.94,1.94,0,0,0,.19-3,2.8,2.8,0,0,1,.27-4.2A2,2,0,0,0,7.62.43l.87.06a2.82,2.82,0,0,1-1.08,2A2,2,0,0,0,6.59,4a2,2,0,0,0,.62,1.55,2.8,2.8,0,0,1-.27,4.2,1.94,1.94,0,0,0-.19,3A2.8,2.8,0,0,1,6.49,17,2,2,0,0,0,5.67,18.42Z"/>\n    <path class="cls-1" d="M5.6,18.14l-.86.11A2.82,2.82,0,0,1,5.42,16,1.94,1.94,0,0,0,5,13a2.8,2.8,0,0,1-.53-4.17,1.94,1.94,0,0,0-.38-3A2.8,2.8,0,0,1,3.61,1.7,2,2,0,0,0,4.14.11L5,0a2.82,2.82,0,0,1-.68,2.21A2,2,0,0,0,3.79,3.8a2,2,0,0,0,.9,1.41,2.8,2.8,0,0,1,.53,4.17,1.94,1.94,0,0,0,.38,3,2.8,2.8,0,0,1,.53,4.17A2,2,0,0,0,5.6,18.14Z"/>\n    <circle class="cls-2" cx="16.34" cy="32.43" r="3.26" transform="translate(-16.48 16.9) rotate(-37.94)"/>\n    <circle class="cls-3" cx="20.06" cy="44.97" r="4.71" transform="translate(-23.41 21.84) rotate(-37.94)"/>\n    <circle class="cls-4" cx="33.57" cy="43.44" r="4.71" transform="translate(-19.62 29.82) rotate(-37.94)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="hood--color--darkblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.41 85.19">\n    <polygon class="cls-1" points="57.63 13.88 51.22 49.53 44.8 85.19 22.4 71.49 0 57.79 28.82 35.83 57.63 13.88"/>\n    <path class="cls-1" d="M57.28,15.58l-.79-1a4.11,4.11,0,0,1,3.26-.84A2.83,2.83,0,0,0,63.18,11,4.08,4.08,0,0,1,68,7.16,2.84,2.84,0,0,0,71.4,4.4,4.08,4.08,0,0,1,76.18.56,2.9,2.9,0,0,0,78.56,0l.79,1a4.11,4.11,0,0,1-3.26.84,2.84,2.84,0,0,0-3.44,2.76,4.08,4.08,0,0,1-4.78,3.84,2.83,2.83,0,0,0-3.44,2.76A4.08,4.08,0,0,1,59.65,15,2.9,2.9,0,0,0,57.28,15.58Z"/>\n    <path class="cls-1" d="M56.5,16.18,56.13,15a4.11,4.11,0,0,1,3.34.43,2.83,2.83,0,0,0,4.22-1.29,4.08,4.08,0,0,1,5.86-1.79A2.84,2.84,0,0,0,73.76,11a4.08,4.08,0,0,1,5.86-1.79A2.9,2.9,0,0,0,82,9.61l.37,1.21a4.11,4.11,0,0,1-3.34-.43,2.84,2.84,0,0,0-4.22,1.29A4.08,4.08,0,0,1,69,13.46a2.83,2.83,0,0,0-4.22,1.29,4.08,4.08,0,0,1-5.86,1.79A2.9,2.9,0,0,0,56.5,16.18Z"/>\n    <path class="cls-1" d="M56.85,15.94l-.59-1.12a4.11,4.11,0,0,1,3.36-.2,2.84,2.84,0,0,0,3.9-2.06A4.08,4.08,0,0,1,68.94,9.7a2.83,2.83,0,0,0,3.9-2.06,4.08,4.08,0,0,1,5.42-2.86,2.9,2.9,0,0,0,2.44-.1l.59,1.12a4.11,4.11,0,0,1-3.36.2A2.84,2.84,0,0,0,74,8.07a4.08,4.08,0,0,1-5.42,2.86A2.83,2.83,0,0,0,64.71,13a4.08,4.08,0,0,1-5.42,2.86A2.9,2.9,0,0,0,56.85,15.94Z"/>\n    <circle class="cls-2" cx="42.86" cy="37.93" r="4.75" transform="translate(-11.86 54.71) rotate(-58.55)"/>\n    <circle class="cls-3" cx="27.66" cy="49.44" r="6.87" transform="translate(-28.95 47.24) rotate(-58.55)"/>\n    <circle class="cls-4" cx="36.68" cy="67.09" r="6.87" transform="translate(-39.69 63.37) rotate(-58.55)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="hood--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.67 58.78">\n    <polygon class="cls-1" points="92.04 14.78 90.77 36.59 89.49 58.41 75.09 51.82 60.69 45.23 76.37 30 92.04 14.78"/>\n    <path class="cls-1" d="M92,15.82l-.55-.53a2.48,2.48,0,0,1,1.89-.74,1.71,1.71,0,0,0,1.86-1.9A2.46,2.46,0,0,1,97.75,10a1.71,1.71,0,0,0,1.86-1.9,2.46,2.46,0,0,1,2.59-2.64A1.75,1.75,0,0,0,103.58,5l.55.53a2.48,2.48,0,0,1-1.89.74,1.71,1.71,0,0,0-1.86,1.9,2.46,2.46,0,0,1-2.59,2.64,1.71,1.71,0,0,0-1.86,1.9,2.46,2.46,0,0,1-2.59,2.64A1.75,1.75,0,0,0,92,15.82Z"/>\n    <path class="cls-1" d="M91.53,16.23l-.31-.7a2.48,2.48,0,0,1,2,0,1.71,1.71,0,0,0,2.43-1.07A2.46,2.46,0,0,1,99.07,13a1.71,1.71,0,0,0,2.43-1.07,2.46,2.46,0,0,1,3.38-1.49,1.75,1.75,0,0,0,1.47,0l.31.7a2.48,2.48,0,0,1-2,0,1.71,1.71,0,0,0-2.43,1.07,2.46,2.46,0,0,1-3.38,1.49,1.71,1.71,0,0,0-2.43,1.07A2.46,2.46,0,0,1,93,16.28,1.75,1.75,0,0,0,91.53,16.23Z"/>\n    <path class="cls-1" d="M91.72,16.07l-.43-.63a2.48,2.48,0,0,1,2-.36,1.71,1.71,0,0,0,2.19-1.51,2.46,2.46,0,0,1,3-2.1,1.71,1.71,0,0,0,2.19-1.51,2.46,2.46,0,0,1,3-2.1,1.75,1.75,0,0,0,1.45-.23l.43.63a2.48,2.48,0,0,1-2,.36,1.71,1.71,0,0,0-2.19,1.51,2.46,2.46,0,0,1-3,2.1,1.71,1.71,0,0,0-2.19,1.51,2.46,2.46,0,0,1-3,2.1A1.75,1.75,0,0,0,91.72,16.07Z"/>\n    <circle class="cls-2" cx="84.93" cy="30.24" r="2.87" transform="translate(22.08 94.88) rotate(-65.41)"/>\n    <circle class="cls-3" cx="76.65" cy="38.23" r="4.15" transform="translate(9.99 92.02) rotate(-65.41)"/>\n    <circle class="cls-4" cx="83.06" cy="47.29" r="4.15" transform="translate(5.49 103.13) rotate(-65.41)"/>\n    <polygon class="cls-5" points="1.41 15.23 17.46 30.05 33.52 44.88 19.29 51.83 5.05 58.78 3.23 37.01 1.41 15.23"/>\n    <path class="cls-5" d="M2.16,16,1.4,16A2.48,2.48,0,0,1,2,14.11a1.71,1.71,0,0,0-.29-2.64,2.46,2.46,0,0,1-.4-3.68A1.75,1.75,0,0,0,1.83,6.4a1.75,1.75,0,0,0-.78-1.25,2.46,2.46,0,0,1-.4-3.68A1.75,1.75,0,0,0,1.13.08L1.9,0a2.48,2.48,0,0,1-.63,1.93A1.75,1.75,0,0,0,.78,3.32a1.75,1.75,0,0,0,.78,1.25,2.48,2.48,0,0,1,1,1.75A2.48,2.48,0,0,1,2,8.25a1.71,1.71,0,0,0,.29,2.64,2.46,2.46,0,0,1,.4,3.68A1.75,1.75,0,0,0,2.16,16Z"/>\n    <path class="cls-5" d="M2.21,16.55l-.74-.21a2.48,2.48,0,0,1,1.3-1.56,1.71,1.71,0,0,0,.71-2.56,2.46,2.46,0,0,1,1-3.56A1.71,1.71,0,0,0,5.19,6.1a2.46,2.46,0,0,1,1-3.56,1.75,1.75,0,0,0,1-1.11l.74.2a2.48,2.48,0,0,1-1.3,1.56,1.71,1.71,0,0,0-.71,2.56,2.46,2.46,0,0,1-1,3.56,1.71,1.71,0,0,0-.71,2.56,2.46,2.46,0,0,1-1,3.56A1.75,1.75,0,0,0,2.21,16.55Z"/>\n    <path class="cls-5" d="M2.2,16.3l-.76-.06a2.48,2.48,0,0,1,1-1.77,1.71,1.71,0,0,0,.22-2.65A2.46,2.46,0,0,1,3,8.12a1.71,1.71,0,0,0,.22-2.65,2.46,2.46,0,0,1,.3-3.69A1.75,1.75,0,0,0,4.22.51L5,.58A2.48,2.48,0,0,1,4,2.35,1.71,1.71,0,0,0,3.77,5a2.46,2.46,0,0,1-.3,3.69,1.71,1.71,0,0,0-.22,2.65A2.46,2.46,0,0,1,2.94,15,1.75,1.75,0,0,0,2.2,16.3Z"/>\n    <circle class="cls-6" cx="8.85" cy="30.54" r="2.87" transform="translate(-12.5 6.98) rotate(-26.03)"/>\n    <circle class="cls-3" cx="9.78" cy="42.01" r="4.15" transform="translate(-17.44 8.55) rotate(-26.03)"/>\n    <circle class="cls-4" cx="20.84" cy="42.8" r="4.15" transform="translate(-16.67 13.49) rotate(-26.03)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="hood--alien hood--color--darkblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.86 56.43">\n    <polygon class="cls-1" points="34.51 10.11 32.32 33.27 30.14 56.43 15.07 48.87 0 41.31 17.25 25.71 34.51 10.11"/>\n    <path class="cls-1" d="M34.75,10.62l-.54-.56a2.52,2.52,0,0,1,1.95-.68,1.74,1.74,0,0,0,2-1.86,2.5,2.5,0,0,1,2.72-2.59,1.74,1.74,0,0,0,2-1.86A2.5,2.5,0,0,1,45.52.46,1.78,1.78,0,0,0,46.95,0l.54.56a2.52,2.52,0,0,1-1.95.68,1.74,1.74,0,0,0-2,1.86A2.5,2.5,0,0,1,40.85,5.7a1.74,1.74,0,0,0-2,1.86,2.5,2.5,0,0,1-2.72,2.59A1.78,1.78,0,0,0,34.75,10.62Z"/>\n    <path class="cls-1" d="M34.3,11,34,10.3a2.52,2.52,0,0,1,2.06.09,1.74,1.74,0,0,0,2.51-1A2.5,2.5,0,0,1,42.08,8a1.74,1.74,0,0,0,2.51-1,2.5,2.5,0,0,1,3.49-1.4,1.78,1.78,0,0,0,1.49.1l.29.72a2.52,2.52,0,0,1-2.06-.09,1.74,1.74,0,0,0-2.51,1,2.5,2.5,0,0,1-3.49,1.4,1.74,1.74,0,0,0-2.51,1,2.5,2.5,0,0,1-3.49,1.4A1.78,1.78,0,0,0,34.3,11Z"/>\n    <path class="cls-1" d="M34.5,10.86l-.42-.65a2.52,2.52,0,0,1,2-.3A1.74,1.74,0,0,0,38.4,8.45a2.5,2.5,0,0,1,3.17-2A1.74,1.74,0,0,0,43.84,5a2.5,2.5,0,0,1,3.17-2,1.78,1.78,0,0,0,1.49-.19l.42.65a2.52,2.52,0,0,1-2,.3A1.74,1.74,0,0,0,44.6,5.16a2.5,2.5,0,0,1-3.17,2,1.74,1.74,0,0,0-2.28,1.46,2.5,2.5,0,0,1-3.17,2A1.78,1.78,0,0,0,34.5,10.86Z"/>\n    <circle class="cls-2" cx="27.09" cy="25.02" r="2.92" transform="translate(-7.42 38.02) rotate(-63.37)"/>\n    <circle class="cls-3" cx="18.39" cy="32.83" r="4.21" transform="translate(-19.21 34.55) rotate(-63.37)"/>\n    <circle class="cls-4" cx="23.97" cy="45.29" r="4.41" transform="translate(-27.26 46.41) rotate(-63.37)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="hood--color--violet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.41 87.61">\n    <polygon class="cls-1" points="53.95 15.5 50.39 51.55 46.84 87.61 23.42 75.74 0 63.87 26.97 39.68 53.95 15.5"/>\n    <path class="cls-1" d="M53.73,17.23l-.87-.92A4.11,4.11,0,0,1,56,15.21a2.83,2.83,0,0,0,3.21-3A4.08,4.08,0,0,1,63.71,8a2.84,2.84,0,0,0,3.21-3A4.08,4.08,0,0,1,71.38.75,2.9,2.9,0,0,0,73.7,0l.87.92A4.11,4.11,0,0,1,71.39,2a2.84,2.84,0,0,0-3.21,3,4.08,4.08,0,0,1-4.46,4.21,2.83,2.83,0,0,0-3.21,3,4.08,4.08,0,0,1-4.46,4.21A2.9,2.9,0,0,0,53.73,17.23Z"/>\n    <path class="cls-1" d="M53,17.88l-.47-1.18a4.11,4.11,0,0,1,3.36.17A2.83,2.83,0,0,0,60,15.25,4.08,4.08,0,0,1,65.7,13a2.84,2.84,0,0,0,4.1-1.62,4.08,4.08,0,0,1,5.7-2.25,2.9,2.9,0,0,0,2.44.17l.47,1.18A4.11,4.11,0,0,1,75,10.31a2.84,2.84,0,0,0-4.1,1.62,4.08,4.08,0,0,1-5.7,2.25,2.83,2.83,0,0,0-4.1,1.62,4.08,4.08,0,0,1-5.7,2.25A2.9,2.9,0,0,0,53,17.88Z"/>\n    <path class="cls-1" d="M53.33,17.62l-.68-1.07A4.11,4.11,0,0,1,56,16.08a2.84,2.84,0,0,0,3.72-2.36,4.08,4.08,0,0,1,5.18-3.28,2.83,2.83,0,0,0,3.72-2.36A4.08,4.08,0,0,1,73.78,4.8a2.9,2.9,0,0,0,2.42-.29l.68,1.07A4.11,4.11,0,0,1,73.55,6,2.84,2.84,0,0,0,69.83,8.4a4.08,4.08,0,0,1-5.18,3.28A2.83,2.83,0,0,0,60.93,14a4.08,4.08,0,0,1-5.18,3.28A2.9,2.9,0,0,0,53.33,17.62Z"/>\n    <circle class="cls-2" cx="41.14" cy="40.65" r="4.75" transform="translate(-13.72 58.97) rotate(-63.12)"/>\n    <circle class="cls-3" cx="26.9" cy="53.34" r="6.87" transform="translate(-32.83 53.22) rotate(-63.12)"/>\n    <circle class="cls-4" cx="36.91" cy="68.76" r="6.87" transform="translate(-41.1 70.6) rotate(-63.12)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="hood--color--green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.35 76.6">\n    <polygon class="cls-1" points="65.47 9.49 51.81 43.05 38.16 76.6 19.08 58.57 0 40.53 32.73 25.01 65.47 9.49"/>\n    <path class="cls-1" d="M64.77,11.08,64.2,10a4.11,4.11,0,0,1,3.36-.14,2.83,2.83,0,0,0,3.93-2A4.08,4.08,0,0,1,77,5.05,2.9,2.9,0,0,0,79.4,5a2.9,2.9,0,0,0,1.49-1.93A4.08,4.08,0,0,1,86.37.29,2.9,2.9,0,0,0,88.81.24l.57,1.13A4.11,4.11,0,0,1,86,1.51a2.84,2.84,0,0,0-3.93,2,4.08,4.08,0,0,1-5.47,2.77,2.83,2.83,0,0,0-3.93,2A4.08,4.08,0,0,1,67.21,11,2.9,2.9,0,0,0,64.77,11.08Z"/>\n    <path class="cls-1" d="M63.89,11.51l-.11-1.26A4.11,4.11,0,0,1,67,11.36,2.83,2.83,0,0,0,71.34,11a4.08,4.08,0,0,1,6.11-.54A2.84,2.84,0,0,0,81.84,10a4.08,4.08,0,0,1,6.11-.54,2.9,2.9,0,0,0,2.29.85l.11,1.26a4.11,4.11,0,0,1-3.18-1.11,2.84,2.84,0,0,0-4.39.39,4.08,4.08,0,0,1-6.11.54,2.83,2.83,0,0,0-4.39.39,4.08,4.08,0,0,1-6.11.54A2.9,2.9,0,0,0,63.89,11.51Z"/>\n    <path class="cls-1" d="M64.27,11.34l-.35-1.22a4.11,4.11,0,0,1,3.33.5,2.84,2.84,0,0,0,4.24-1.2,4.08,4.08,0,0,1,5.9-1.68,2.83,2.83,0,0,0,4.24-1.2,4.08,4.08,0,0,1,5.9-1.68,2.9,2.9,0,0,0,2.41.41l.35,1.22A4.11,4.11,0,0,1,87,6,2.84,2.84,0,0,0,82.71,7.2a4.08,4.08,0,0,1-5.9,1.68,2.83,2.83,0,0,0-4.24,1.2,4.08,4.08,0,0,1-5.9,1.68A2.9,2.9,0,0,0,64.27,11.34Z"/>\n    <circle class="cls-2" cx="46.04" cy="29.96" r="4.75" transform="translate(-7.36 42.85) rotate(-46.62)"/>\n    <circle class="cls-3" cx="28.79" cy="38.08" r="6.87" transform="translate(-18.66 32.85) rotate(-46.62)"/>\n    <circle class="cls-4" cx="34" cy="55.71" r="6.87" transform="translate(-29.84 42.16) rotate(-46.62)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="hood--color--pink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.74 80.66">\n    <polygon class="cls-1" points="4.57 20.65 23.15 44.31 41.73 67.98 20.87 74.32 0 80.66 2.28 50.65 4.57 20.65"/>\n    <path class="cls-1" d="M5.43,21.81l-1.05-.05a3.41,3.41,0,0,1,1.28-2.48,2.35,2.35,0,0,0,.18-3.66,3.39,3.39,0,0,1,.26-5.09,2.36,2.36,0,0,0,.19-3.66,3.39,3.39,0,0,1,.26-5.09A2.41,2.41,0,0,0,7.51,0L8.56.05A3.41,3.41,0,0,1,7.28,2.54a2.41,2.41,0,0,0-1,1.78,2.41,2.41,0,0,0,.78,1.87,3.39,3.39,0,0,1-.26,5.09,2.35,2.35,0,0,0-.19,3.66A3.39,3.39,0,0,1,6.39,20,2.41,2.41,0,0,0,5.43,21.81Z"/>\n    <path class="cls-1" d="M5.37,22.62l-1-.44a3.41,3.41,0,0,1,2.11-1.83A2.35,2.35,0,0,0,8.06,17a3.39,3.39,0,0,1,2.13-4.63,2.35,2.35,0,0,0,1.53-3.33,3.39,3.39,0,0,1,2.13-4.63,2.41,2.41,0,0,0,1.56-1.3l1,.44a3.41,3.41,0,0,1-2.11,1.83,2.36,2.36,0,0,0-1.53,3.33,3.39,3.39,0,0,1-2.13,4.63,2.35,2.35,0,0,0-1.53,3.33,3.39,3.39,0,0,1-2.13,4.63A2.41,2.41,0,0,0,5.37,22.62Z"/>\n    <path class="cls-1" d="M5.41,22.27l-1-.25a3.41,3.41,0,0,1,1.73-2.2A2.35,2.35,0,0,0,7,16.27a3.39,3.39,0,0,1,1.22-4.94A2.35,2.35,0,0,0,9.1,7.77a3.39,3.39,0,0,1,1.22-4.94A2.41,2.41,0,0,0,11.6,1.26l1,.25a3.41,3.41,0,0,1-1.73,2.2A2.36,2.36,0,0,0,10,7.26,3.39,3.39,0,0,1,8.8,12.21a2.35,2.35,0,0,0-.88,3.55A3.39,3.39,0,0,1,6.7,20.71,2.41,2.41,0,0,0,5.41,22.27Z"/>\n    <circle cx="11.34" cy="43.09" r="3.95" transform="translate(-12.03 5.15) rotate(-16.89)"/>\n    <circle class="cls-2" cx="10.09" cy="58.88" r="5.71" transform="translate(-16.68 5.47) rotate(-16.89)"/>\n    <circle class="cls-3" cx="24.95" cy="62.38" r="5.71" transform="translate(-17.05 9.94) rotate(-16.89)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="hood--color--red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.59 54.77">\n    <polygon class="cls-1" points="46.8 6.78 37.05 30.77 27.29 54.77 13.64 41.87 0 28.98 23.4 17.88 46.8 6.78"/>\n    <path class="cls-1" d="M46.31,7.92l-.41-.81A2.94,2.94,0,0,1,48.3,7a2,2,0,0,0,2.81-1.42,2.91,2.91,0,0,1,3.91-2,2.07,2.07,0,0,0,1.75,0,2.07,2.07,0,0,0,1.07-1.38,2.91,2.91,0,0,1,3.91-2,2.07,2.07,0,0,0,1.75,0L63.9,1a2.94,2.94,0,0,1-2.4.1A2,2,0,0,0,58.68,2.5a2.91,2.91,0,0,1-3.91,2A2,2,0,0,0,52,5.9a2.91,2.91,0,0,1-3.91,2A2.07,2.07,0,0,0,46.31,7.92Z"/>\n    <path class="cls-1" d="M45.67,8.23l-.08-.9a2.94,2.94,0,0,1,2.27.8A2,2,0,0,0,51,7.84a2.91,2.91,0,0,1,4.37-.39,2,2,0,0,0,3.14-.28,2.91,2.91,0,0,1,4.37-.39,2.07,2.07,0,0,0,1.64.61l.08.9a2.94,2.94,0,0,1-2.27-.8,2,2,0,0,0-3.14.28,2.91,2.91,0,0,1-4.37.39,2,2,0,0,0-3.14.28,2.91,2.91,0,0,1-4.37.39A2.07,2.07,0,0,0,45.67,8.23Z"/>\n    <path class="cls-1" d="M45.95,8.11l-.25-.87a2.94,2.94,0,0,1,2.38.36,2,2,0,0,0,3-.86,2.91,2.91,0,0,1,4.22-1.2,2,2,0,0,0,3-.86,2.91,2.91,0,0,1,4.22-1.2,2.07,2.07,0,0,0,1.72.29l.25.87a2.94,2.94,0,0,1-2.38-.36,2,2,0,0,0-3,.86,2.91,2.91,0,0,1-4.22,1.2,2,2,0,0,0-3,.86,2.91,2.91,0,0,1-4.22,1.2A2.07,2.07,0,0,0,45.95,8.11Z"/>\n    <circle class="cls-2" cx="32.92" cy="21.42" r="3.4" transform="translate(-5.26 30.63) rotate(-46.62)"/>\n    <circle class="cls-3" cx="20.58" cy="27.23" r="4.91" transform="translate(-13.34 23.48) rotate(-46.62)"/>\n    <circle class="cls-4" cx="24.31" cy="39.83" r="4.91" transform="translate(-21.34 30.14) rotate(-46.62)"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/hood/hood.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HoodComponent);
    return HoodComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=hood.js.map

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_random_model__ = __webpack_require__(302);
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


var MoleComponent = /** @class */ (function (_super) {
    __extends(MoleComponent, _super);
    function MoleComponent(element) {
        return _super.call(this, 'mole', element.nativeElement) || this;
    }
    MoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mole',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/mole/mole.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg class="mole" width="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.86 63.82">\n      <g>\n        <circle class="cls-1" cx="15.45" cy="19.12" r="11.25"></circle>\n        <line class="cls-2" x1="19.58" y1="18.74" x2="41.4" y2="12.04"></line>\n        <line class="cls-2" x1="14.79" y1="0.03" x2="15.45" y2="19.12"></line>\n        <line class="cls-2" x1="0.47" y1="28.23" x2="10.58" y2="20.99"></line>\n      </g>\n      <g>\n         <circle class="cls-1" cx="44.61" cy="34.95" r="11.25" transform="translate(-11.8 40.41) rotate(-43.6)"></circle>\n         <line class="cls-2" x1="47.73" y1="37.68" x2="45" y2="55.89"></line>\n         <line class="cls-2" x1="27.68" y1="30.39" x2="39.89" y2="32.72"></line>\n       </g>\n      <g>\n       <circle class="cls-1" cx="11.25" cy="52.57" r="11.25" transform="translate(-33.15 22.26) rotate(-43.6)"></circle>\n      </g>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part>\n  <svg class="mole" width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.5 22.5">\n     <circle class="cls-1" cx="11.25" cy="11.25" r="11.25" transform="translate(-4.65 10.86) rotate(-43.6)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part>\n  <svg class="mole" width="42" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.32 32.29">\n    <g>\n      <circle class="cls-1" cx="17.07" cy="11.25" r="11.25" transform="translate(-3.05 14.87) rotate(-43.6)"/>\n      <line class="cls-2" x1="20.19" y1="13.98" x2="17.46" y2="32.18"/>\n      <line class="cls-2" x1="0.14" y1="6.68" x2="12.35" y2="9.01"/>\n    </g>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part>\n  <svg class="mole" width="63" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.59 30.36">\n    <circle class="cls-1" cx="15.42" cy="19.12" r="11.25"/>\n    <line class="cls-2" x1="19.54" y1="18.74" x2="41.37" y2="12.04"/>\n    <line class="cls-2" x1="14.75" y1="0.03" x2="15.42" y2="19.12"/>\n    <line class="cls-2" x1="0.44" y1="28.23" x2="10.54" y2="20.99"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/mole/mole.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], MoleComponent);
    return MoleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_random_model__["a" /* TrinketRandomModel */]));

//# sourceMappingURL=mole.js.map

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_element_component_model__ = __webpack_require__(79);
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


var HeartComponent = /** @class */ (function (_super) {
    __extends(HeartComponent, _super);
    function HeartComponent(element) {
        return _super.call(this, 'heart', element.nativeElement) || this;
    }
    HeartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'heart',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/heart/heart.svg"*/'<svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.6 138.47" class="heart">\n   <path class="cls-1" d="M51.65,133.57l-48.3,-62.16a25,25,0,1,1,43.29,-25l5,8.68l5,-8.68a25,25,0,1,1,43.29,25z"></path>\n   <line class="cls-2" x1="77.76" y1="63.18" x2="125.64" y2="15.3"></line>\n   <line class="cls-2" x1="8.59" y1="132.01" x2="32.54" y2="108.07"></line>\n   <line class="cls-2" x1="104.69" y1="13.3" x2="104.69" y2="36.58"></line>\n   <line class="cls-2" x1="111.34" y1="5.32" x2="111.34" y2="28.6"></line>\n   <line class="cls-2" x1="117.99" x2="117.99" y2="23.28"></line>\n   <line class="cls-2" x1="128.3" y1="35.58" x2="105.02" y2="35.58"></line>\n   <line class="cls-2" x1="136.28" y1="28.93" x2="113" y2="28.93"></line>\n   <line class="cls-2" x1="141.6" y1="22.28" x2="118.32" y2="22.28"></line>\n   <polygon points="2.11 138.47 7.99 127.95 13.87 117.43 18.51 122.07 23.16 126.72 12.64 132.6 2.11 138.47"></polygon>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/heart/heart.svg"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HeartComponent);
    return HeartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__model_element_component_model__["a" /* ElementComponentModel */]));

//# sourceMappingURL=heart.js.map

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var BeardComponent = /** @class */ (function (_super) {
    __extends(BeardComponent, _super);
    function BeardComponent(element) {
        return _super.call(this, 'beard', element.nativeElement) || this;
    }
    BeardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'beard',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/beard/beard.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg width="150" class="beard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.33 127.73">\n     <path class="cls-1" d="M144.35,33.21c0,-4.87,-20.48,-8.42,-21,-13.07a2.17,2.17,0,0,1,0.09,-0.87h-99.51a2.17,2.17,0,0,1,0.09,0.87c-0.57,4.65,-21,8.19,-21,13.06s20.48,8.42,21,13.07c0.6,4.85,-18.38,13.29,-17.22,17.82c1.2,4.74,21.9,2.91,23.67,7.22c1.87,4.54,-14,18,-11.54,21.92c2.57,4.2,21.57,-4,24.68,-0.61c3.31,3.65,-6.36,22,-2.54,24.6c4,2.77,17.23,-13,21.7,-11.52s6,22,10.89,22s6.37,-20.53,10.89,-22s17.68,14.3,21.69,11.52c3.82,-2.63,-5.85,-21,-2.54,-24.6c3.11,-3.43,22.11,4.81,24.68,0.61c2.42,-4,-13.41,-17.38,-11.54,-21.92c1.77,-4.31,22.46,-2.48,23.67,-7.22c1.16,-4.53,-17.81,-13,-17.22,-17.82c0.58,-4.64,21.06,-8.19,21.06,-13.06z"></path>\n     <path class="cls-2" d="M99.63,19.1c0,26.9,-51.93,26.9,-51.93,0z"></path>\n     <path class="cls-3" d="M80.78,20.68a62.4,62.4,0,0,1,-22.3,10.59a58.33,58.33,0,0,1,-23.26,1a54.7,54.7,0,0,1,-20.46,-7.73a51.16,51.16,0,0,1,-14.76,-14.2a47.44,47.44,0,0,0,17.56,7.42a43.61,43.61,0,0,0,17.66,-0.13a39.78,39.78,0,0,0,14.86,-6.63a36.51,36.51,0,0,0,10,-11z"></path>\n     <path class="cls-3" d="M87.23,0a36.51,36.51,0,0,0,10,11a39.78,39.78,0,0,0,14.86,6.62a43.61,43.61,0,0,0,17.66,0.13a47.44,47.44,0,0,0,17.56,-7.42a51.16,51.16,0,0,1,-14.76,14.18a54.7,54.7,0,0,1,-20.46,7.73a58.33,58.33,0,0,1,-23.26,-1a62.4,62.4,0,0,1,-22.3,-10.59z"></path>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="beard beard--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.65 170.56">\n    <path class="cls-1" d="M92.73,21.33c0-3.13-13.15-5.41-13.52-8.39a1.39,1.39,0,0,1,.06-.56H15.38a1.39,1.39,0,0,1,.06.56c-.37,3-13.52,5.26-13.52,8.39s13.15,5.41,13.52,8.39S3.63,38.27,4.37,41.17,18.44,43,19.58,45.81c1.2,2.92-9,11.54-7.42,14.08C13.81,62.59,26,57.3,28,59.5s-4.08,14.11-1.63,15.8S37.46,67,40.33,67.9s3.88,14.15,7,14.15,4.09-13.19,7-14.15,11.36,9.19,13.94,7.4S64.5,61.85,66.63,59.5s14.21,3.09,15.86.39c1.56-2.54-8.62-11.16-7.42-14.08C76.21,43,89.5,44.22,90.28,41.17S78.83,32.84,79.21,29.73,92.73,24.46,92.73,21.33Z"/>\n    <path class="cls-2" d="M64,12.27c0,17.27-33.36,17.27-33.36,0Z"/>\n    <path class="cls-3" d="M51.89,13.28a40.09,40.09,0,0,1-14.33,6.81,37.48,37.48,0,0,1-14.94.63,35.14,35.14,0,0,1-13.14-5A32.87,32.87,0,0,1,0,6.64a30.47,30.47,0,0,0,11.28,4.77,28,28,0,0,0,11.35-.09,25.56,25.56,0,0,0,9.55-4.25A23.46,23.46,0,0,0,38.61,0Z"/>\n    <path class="cls-3" d="M56,0a23.46,23.46,0,0,0,6.44,7.07A25.56,25.56,0,0,0,72,11.32a28,28,0,0,0,11.35.09A30.47,30.47,0,0,0,94.65,6.64a32.87,32.87,0,0,1-9.48,9.11,35.14,35.14,0,0,1-13.14,5,37.48,37.48,0,0,1-14.94-.63,40.09,40.09,0,0,1-14.33-6.81Z"/>\n    <path class="cls-1" d="M92.73,109.84c0-3.13-13.15-5.41-13.52-8.39a1.39,1.39,0,0,1,.06-.56H15.38a1.39,1.39,0,0,1,.06.56c-.37,3-13.52,5.26-13.52,8.39s13.15,5.41,13.52,8.39S3.63,126.77,4.37,129.68s14.07,1.87,15.21,4.64c1.2,2.92-9,11.54-7.42,14.08C13.81,151.1,26,145.8,28,148s-4.08,14.11-1.63,15.8,11.07-8.35,13.94-7.4,3.88,14.15,7,14.15,4.09-13.19,7-14.15,11.36,9.19,13.94,7.4S64.5,150.35,66.63,148s14.21,3.09,15.86.39c1.56-2.54-8.62-11.16-7.42-14.08,1.14-2.77,14.43-1.59,15.21-4.64s-11.44-8.33-11.06-11.45S92.73,113,92.73,109.84Z"/>\n    <path class="cls-2" d="M64,100.78c0,17.27-33.36,17.27-33.36,0Z"/>\n    <path class="cls-3" d="M51.89,101.79a40.09,40.09,0,0,1-14.33,6.81,37.48,37.48,0,0,1-14.94.63,35.14,35.14,0,0,1-13.14-5A32.87,32.87,0,0,1,0,95.15a30.47,30.47,0,0,0,11.28,4.77,28,28,0,0,0,11.35-.09,25.56,25.56,0,0,0,9.55-4.25,23.46,23.46,0,0,0,6.44-7.07Z"/>\n    <path class="cls-3" d="M56,88.51a23.46,23.46,0,0,0,6.44,7.07A25.56,25.56,0,0,0,72,99.83a28,28,0,0,0,11.35.09,30.47,30.47,0,0,0,11.28-4.77,32.87,32.87,0,0,1-9.48,9.11,35.14,35.14,0,0,1-13.14,5,37.48,37.48,0,0,1-14.94-.63,40.09,40.09,0,0,1-14.33-6.81Z"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/beard/beard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], BeardComponent);
    return BeardComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=beard.js.map

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoustacheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var MoustacheComponent = /** @class */ (function (_super) {
    __extends(MoustacheComponent, _super);
    function MoustacheComponent(element) {
        return _super.call(this, 'moustache', element.nativeElement) || this;
    }
    MoustacheComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'moustache',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/moustache/moustache.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg width="150" class="moustache" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.42 44.04">\n     <path class="cls-1" d="M27.26,34.7a27.27,27.27,0,0,1,-26.86,-22.59a27.27,27.27,0,1,0,54.13,4.67a27.44,27.44,0,0,0,-0.4,-4.67a27.27,27.27,0,0,1,-26.87,22.59z"></path>\n     <path class="cls-1" d="M23.7,28a25.89,25.89,0,0,1,-18.06,-28a25.89,25.89,0,1,0,47.81,19.36a26,26,0,0,0,0.94,-4.36a25.89,25.89,0,0,1,-30.69,13z"></path>\n     <path class="cls-1" d="M81.15,34.7a27.27,27.27,0,0,0,26.85,-22.59a27.26,27.26,0,1,1,-53.73,0a27.27,27.27,0,0,0,26.88,22.59z"></path>\n     <path class="cls-1" d="M84.71,28a25.89,25.89,0,0,0,18.07,-28a25.88,25.88,0,1,1,-48.78,15a25.89,25.89,0,0,0,30.71,13z"></path>\n     <path class="cls-1" d="M27.9,24.18a22.33,22.33,0,0,1,-15.59,-24.18a22.33,22.33,0,1,0,42.05,13a22.33,22.33,0,0,1,-26.46,11.18z"></path>\n     <path class="cls-1" d="M80.52,24.18a22.33,22.33,0,0,0,15.58,-24.18a22.33,22.33,0,1,1,-42.05,13a22.33,22.33,0,0,0,26.47,11.18z"></path>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="moustache" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.73 108.69">\n    <path class="cls-1" d="M25.26,16.24A12.76,12.76,0,0,1,12.69,5.66a12.76,12.76,0,1,0,25.14,0A12.76,12.76,0,0,1,25.26,16.24Z"/>\n    <path class="cls-1" d="M23.59,13.1A12.11,12.11,0,0,1,15.14,0,12.11,12.11,0,1,0,37.95,7,12.11,12.11,0,0,1,23.59,13.1Z"/>\n    <path class="cls-1" d="M50.47,16.24A12.76,12.76,0,0,0,63,5.66a12.76,12.76,0,1,1-25.14,0A12.76,12.76,0,0,0,50.47,16.24Z"/>\n    <path class="cls-1" d="M52.14,13.1A12.11,12.11,0,0,0,60.59,0,12.11,12.11,0,1,1,37.78,7,12.11,12.11,0,0,0,52.14,13.1Z"/>\n    <path class="cls-1" d="M25.55,11.31A10.45,10.45,0,0,1,18.26,0,10.45,10.45,0,1,0,37.94,6.07,10.45,10.45,0,0,1,25.55,11.31Z"/>\n    <path class="cls-1" d="M50.18,11.31A10.45,10.45,0,0,0,57.47,0,10.45,10.45,0,1,1,37.79,6.07,10.45,10.45,0,0,0,50.18,11.31Z"/>\n    <path class="cls-1" d="M19,102.16A19,19,0,0,1,.28,86.38a19,19,0,1,0,37.81,3.26,19.16,19.16,0,0,0-.28-3.26A19,19,0,0,1,19,102.16Z"/>\n    <path class="cls-1" d="M16.56,97.48A18.09,18.09,0,0,1,3.94,77.92a18.08,18.08,0,1,0,33.4,13.52,18.19,18.19,0,0,0,.66-3A18.09,18.09,0,0,1,16.56,97.48Z"/>\n    <path class="cls-1" d="M56.69,102.16A19,19,0,0,0,75.45,86.38a19,19,0,1,1-37.53,0A19,19,0,0,0,56.69,102.16Z"/>\n    <path class="cls-1" d="M59.18,97.48A18.09,18.09,0,0,0,71.79,77.92,18.08,18.08,0,1,1,37.74,88.41,18.09,18.09,0,0,0,59.18,97.48Z"/>\n    <path class="cls-1" d="M19.49,94.81A15.6,15.6,0,0,1,8.6,77.94,15.6,15.6,0,1,0,38,87,15.6,15.6,0,0,1,19.49,94.81Z"/>\n    <path class="cls-1" d="M56.25,94.81A15.6,15.6,0,0,0,67.13,77.94a15.6,15.6,0,1,1-29.37,9A15.6,15.6,0,0,0,56.25,94.81Z"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/moustache/moustache.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], MoustacheComponent);
    return MoustacheComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=moustache.js.map

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnivelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var SnivelComponent = /** @class */ (function (_super) {
    __extends(SnivelComponent, _super);
    function SnivelComponent(element) {
        return _super.call(this, 'snivel', element.nativeElement) || this;
    }
    SnivelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'snivel',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/snivel/snivel.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg width="25" class="snivel" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 32.49 121.17">\n    <path class="cls-1" d="M8.12,85.65c0,6.74,-0.82,8,-1.82,8s-1.82,-1.26,-1.82,-8a42.85,42.85,0,0,1,1.82,-12.2a42.85,42.85,0,0,1,1.82,12.2z"></path>\n    <path class="cls-1" d="M17.74,57.14c0,6.74,-0.82,8,-1.82,8s-1.82,-1.26,-1.82,-8a42.85,42.85,0,0,1,1.82,-12.2a42.85,42.85,0,0,1,1.82,12.2z"></path>\n    <path class="cls-1" d="M27.68,88.3c0,6.74,-0.82,8,-1.82,8s-1.86,-1.3,-1.86,-8a42.85,42.85,0,0,1,1.82,-12.2a42.85,42.85,0,0,1,1.86,12.2z"></path>\n    <path class="cls-1" d="M27.68,113.17c0,6.74,-0.82,8,-1.82,8s-1.82,-1.26,-1.82,-8a42.85,42.85,0,0,1,1.82,-12.17a42.85,42.85,0,0,1,1.82,12.17z"></path>\n    <path class="cls-1" d="M1.46,0a233.82,233.82,0,0,0,-1.46,27.35c0,23.9,2.89,43.27,6.47,43.27c3.09,0,5.67,-14.51,6.31,-33.91c-1.88,-7.47,-3.14,-21.1,-3.16,-36.71z"></path>\n    <path class="cls-1" d="M21.28,0h-9.8a233.79,233.79,0,0,1,1.46,27.35c0,3.21,-0.05,6.34,-0.15,9.35c1,3.85,2.1,6.06,3.3,6.06s2.53,-2.62,3.55,-7.1q-0.07,-3.1,-0.07,-6.32a224.61,224.61,0,0,1,1.71,-29.34z"></path>\n    <path class="cls-1" d="M11.47,0h-1.85c0,15.61,1.29,29.24,3.16,36.71c0.1,-3,0.15,-6.14,0.15,-9.35a233.79,233.79,0,0,0,-1.46,-27.36z"></path>\n    <path class="cls-1" d="M22.54,0c0,14.91,-1.18,28,-2.91,35.66c0.46,20.9,3.15,36.94,6.4,36.94c3.57,0,6.47,-19.37,6.47,-43.27a224.61,224.61,0,0,0,-1.72,-29.33z"></path>\n    <path class="cls-1" d="M21.28,0a224.61,224.61,0,0,0,-1.71,29.34q0,3.22,0.07,6.32c1.73,-7.66,2.88,-20.75,2.9,-35.66z"></path>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="snivel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.91 90.58">\n    <path class="cls-1" d="M31.95,34.67c0,2.73-.7,3.24-1.57,3.24s-1.57-.51-1.57-3.23a9.5,9.5,0,0,1,1.57-4.94A9.5,9.5,0,0,1,31.95,34.67Z"/>\n    <path class="cls-1" d="M40.22,23.13c0,2.73-.7,3.24-1.57,3.24s-1.57-.51-1.57-3.23a9.5,9.5,0,0,1,1.57-4.94A9.5,9.5,0,0,1,40.22,23.13Z"/>\n    <path class="cls-1" d="M48.79,35.73c0,2.73-.7,3.24-1.57,3.24s-1.57-.51-1.57-3.23a9.5,9.5,0,0,1,1.57-4.94A9.5,9.5,0,0,1,48.79,35.73Z"/>\n    <path class="cls-1" d="M48.79,45.79c0,2.73-.7,3.24-1.57,3.24s-1.57-.51-1.57-3.23a9.5,9.5,0,0,1,1.57-4.94A9.5,9.5,0,0,1,48.79,45.79Z"/>\n    <path class="cls-1" d="M26.19,0a45.3,45.3,0,0,0-1.25,11.07c0,9.67,2.5,17.5,5.58,17.5,2.66,0,4.88-5.88,5.43-13.72-1.62-3-2.71-8.53-2.73-14.85Z"/>\n    <path class="cls-1" d="M43.25,0H34.81a45.29,45.29,0,0,1,1.26,11.07c0,1.3,0,2.57-.13,3.78.83,1.56,1.81,2.45,2.84,2.45s2.18-1.06,3.05-2.88q-.06-1.25-.06-2.56A43.69,43.69,0,0,1,43.25,0Z"/>\n    <path class="cls-1" d="M34.81,0h-1.6c0,6.32,1.12,11.83,2.73,14.85.08-1.22.13-2.48.13-3.78A45.29,45.29,0,0,0,34.81,0Z"/>\n    <path class="cls-1" d="M44.34,0c0,6-1,11.33-2.5,14.43.4,8.45,2.72,14.95,5.52,14.94,3.07,0,5.56-7.84,5.55-17.51A43.69,43.69,0,0,0,51.43,0Z"/>\n    <path class="cls-1" d="M43.25,0a43.69,43.69,0,0,0-1.47,11.87q0,1.3.06,2.56C43.33,11.34,44.32,6,44.34,0Z"/>\n    <path class="cls-1" d="M7,76.22c0,2.73-.7,3.24-1.57,3.24S3.87,79,3.87,76.23a9.5,9.5,0,0,1,1.57-4.94A9.5,9.5,0,0,1,7,76.22Z"/>\n    <path class="cls-1" d="M15.28,64.68c0,2.73-.7,3.24-1.57,3.24s-1.57-.51-1.57-3.23a9.5,9.5,0,0,1,1.57-4.94A9.5,9.5,0,0,1,15.28,64.68Z"/>\n    <path class="cls-1" d="M23.85,77.29c0,2.73-.7,3.24-1.57,3.24s-1.57-.51-1.57-3.23a9.5,9.5,0,0,1,1.57-4.94A9.5,9.5,0,0,1,23.85,77.29Z"/>\n    <path class="cls-1" d="M23.85,87.35c0,2.73-.7,3.24-1.57,3.24s-1.57-.51-1.57-3.23a9.5,9.5,0,0,1,1.57-4.94A9.5,9.5,0,0,1,23.85,87.35Z"/>\n    <path class="cls-1" d="M1.25,41.57A45.3,45.3,0,0,0,0,52.64c0,9.67,2.5,17.5,5.58,17.5,2.66,0,4.88-5.88,5.43-13.72-1.62-3-2.71-8.53-2.73-14.85Z"/>\n    <path class="cls-1" d="M18.31,41.56H9.87a45.29,45.29,0,0,1,1.26,11.07c0,1.3,0,2.57-.13,3.78.83,1.56,1.81,2.45,2.84,2.45S16,57.81,16.9,56q-.06-1.25-.06-2.56A43.69,43.69,0,0,1,18.31,41.56Z"/>\n    <path class="cls-1" d="M9.87,41.57H8.27C8.3,47.89,9.39,53.4,11,56.42c.08-1.22.13-2.48.13-3.78A45.29,45.29,0,0,0,9.87,41.57Z"/>\n    <path class="cls-1" d="M19.4,41.56c0,6-1,11.33-2.5,14.43.4,8.45,2.72,14.95,5.52,14.94,3.07,0,5.56-7.84,5.55-17.51a43.69,43.69,0,0,0-1.48-11.87Z"/>\n    <path class="cls-1" d="M18.31,41.56a43.69,43.69,0,0,0-1.47,11.87q0,1.3.06,2.56c1.49-3.1,2.48-8.4,2.5-14.43Z"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/snivel/snivel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SnivelComponent);
    return SnivelComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=snivel.js.map

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var DressComponent = /** @class */ (function (_super) {
    __extends(DressComponent, _super);
    function DressComponent(element) {
        return _super.call(this, 'dress', element.nativeElement) || this;
    }
    DressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dress',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/dress/dress.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg width="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172.5 86.5" class="dress">\n     <path class="cls-1" d="M172.5,46.51a46.64,46.64,0,0,0,-46.5,-46.51h-79.5a46.64,46.64,0,0,0,-46.5,46.51v40h172.5z"></path>\n     <polygon class="cls-2" points="13.5 7.8 72.04 39 89.19 0 27.16 0 13.5 7.8"></polygon>\n     <polygon class="cls-2" points="159 7.8 100.46 39 83.31 0 145.34 0 159 7.8"></polygon>\n     <circle class="cls-3" cx="27.81" cy="7.53" r="2.05"></circle>\n     <circle class="cls-3" cx="37.31" cy="6.35" r="2.05"></circle>\n     <circle class="cls-3" cx="40.79" cy="13.8" r="2.05"></circle>\n     <circle class="cls-3" cx="52.57" cy="8.35" r="2.05"></circle>\n     <circle class="cls-3" cx="69.46" cy="9.33" r="2.05"></circle>\n     <circle class="cls-3" cx="109.21" cy="27.3" r="2.05"></circle>\n     <circle class="cls-3" cx="101.21" cy="13" r="2.05"></circle>\n     <circle class="cls-3" cx="86.21" cy="10.55" r="7.13" transform="translate(17.79 64.05) rotate(-45)"></circle>\n     <circle class="cls-1" cx="84.11" cy="8.44" r="1.24" transform="translate(18.66 61.95) rotate(-45)"></circle>\n     <circle class="cls-1" cx="88.16" cy="12.49" r="1.24" transform="translate(16.99 66) rotate(-45)"></circle>\n     <circle class="cls-1" cx="88.16" cy="8.44" r="1.24" transform="translate(19.85 64.81) rotate(-45)"></circle>\n     <circle class="cls-1" cx="84.11" cy="12.49" r="1.24" transform="translate(15.8 63.13) rotate(-45)"></circle>\n     <circle class="cls-3" cx="86.21" cy="37.05" r="7.13" transform="translate(-0.95 71.81) rotate(-45)"></circle>\n     <circle class="cls-3" cx="86.21" cy="63.55" r="7.13" transform="translate(-19.69 79.58) rotate(-45)"></circle>\n     <circle class="cls-3" cx="108.96" cy="6.25" r="2.05"></circle>\n     <circle class="cls-3" cx="119.21" cy="10.25" r="2.05"></circle>\n     <circle class="cls-3" cx="132.46" cy="5.25" r="2.05"></circle>\n     <circle class="cls-3" cx="143.66" cy="9" r="2.05"></circle>\n     <circle class="cls-3" cx="121.71" cy="22.5" r="2.05"></circle>\n     <circle class="cls-3" cx="57.46" cy="18.17" r="2.05"></circle>\n     <circle class="cls-3" cx="66.3" cy="27.83" r="2.05"></circle>\n     <circle class="cls-1" cx="84.11" cy="34.95" r="1.24" transform="translate(-0.08 69.71) rotate(-45)"></circle>\n     <circle class="cls-1" cx="88.16" cy="39" r="1.24" transform="translate(-1.75 73.76) rotate(-45)"></circle>\n     <circle class="cls-1" cx="88.16" cy="34.95" r="1.24" transform="translate(1.11 72.57) rotate(-45)"></circle>\n     <circle class="cls-1" cx="84.11" cy="39" r="1.24" transform="translate(-2.94 70.89) rotate(-45)"></circle>\n     <circle class="cls-1" cx="84.17" cy="61.39" r="1.24" transform="translate(-18.76 77.49) rotate(-45)"></circle>\n     <circle class="cls-1" cx="88.22" cy="65.44" r="1.24" transform="translate(-20.43 81.54) rotate(-45)"></circle>\n     <circle class="cls-1" cx="88.22" cy="61.39" r="1.24" transform="translate(-17.57 80.36) rotate(-45)"></circle>\n     <circle class="cls-1" cx="84.17" cy="65.44" r="1.24" transform="translate(-21.62 78.68) rotate(-45)"></circle>\n     <line class="cls-4" x1="84.11" y1="8.44" x2="88.16" y2="12.49"></line>\n     <line class="cls-4" x1="88.16" y1="8.44" x2="84.11" y2="12.49"></line>\n     <line class="cls-4" x1="84.11" y1="34.94" x2="88.16" y2="38.99"></line>\n     <line class="cls-4" x1="88.16" y1="34.94" x2="84.11" y2="38.99"></line>\n     <line class="cls-4" x1="84.06" y1="61.5" x2="88.11" y2="65.55"></line>\n     <line class="cls-4" x1="88.11" y1="61.5" x2="84.06" y2="65.55"></line>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 192.892 96" class="dress--mummy">\n    <path class="cls-3" d="M202.89,70a52.15,52.15,0,0,0,-52,-52h-88.89a52.15,52.15,0,0,0,-52,52v44.72h192.89z" transform="translate(-10 -18.02)"></path>\n    <polygon class="cls-4" points="15.1 8.72 80.56 43.61 99.73 0 30.37 0 15.1 8.72"></polygon>\n    <polygon class="cls-4" points="177.79 8.72 112.33 43.61 93.16 0 162.52 0 177.79 8.72"></polygon>\n    <circle class="cls-5" cx="31.1" cy="8.42" r="2.29"></circle>\n    <circle class="cls-5" cx="41.73" cy="7.1" r="2.29"></circle>\n    <circle class="cls-5" cx="45.61" cy="15.43" r="2.29"></circle>\n    <circle class="cls-5" cx="58.79" cy="9.33" r="2.29"></circle>\n    <circle class="cls-5" cx="77.68" cy="10.44" r="2.29"></circle>\n    <circle class="cls-5" cx="122.12" cy="30.53" r="2.29"></circle>\n    <circle class="cls-5" cx="113.18" cy="14.54" r="2.29"></circle>\n    <circle class="cls-5" cx="106.4" cy="29.82" r="7.97" transform="translate(0.08 65.95) rotate(-45)"></circle>\n    <circle class="cls-3" cx="104.05" cy="27.46" r="1.39" transform="translate(1.06 63.6) rotate(-45)"></circle>\n    <circle class="cls-3" cx="108.58" cy="31.99" r="1.39" transform="translate(-0.82 68.12) rotate(-45)"></circle>\n    <circle class="cls-3" cx="108.58" cy="27.46" r="1.39" transform="translate(2.38 66.8) rotate(-45)"></circle>\n    <circle class="cls-3" cx="104.05" cy="31.99" r="1.39" transform="translate(-2.15 64.92) rotate(-45)"></circle>\n    <circle class="cls-5" cx="106.4" cy="59.45" r="7.97" transform="translate(-20.87 74.63) rotate(-45)"></circle>\n    <circle class="cls-5" cx="106.4" cy="89.09" r="7.97" transform="translate(-41.83 83.31) rotate(-45)"></circle>\n    <circle class="cls-5" cx="121.84" cy="6.99" r="2.29"></circle>\n    <circle class="cls-5" cx="133.31" cy="11.46" r="2.29"></circle>\n    <circle class="cls-5" cx="148.12" cy="5.87" r="2.29"></circle>\n    <circle class="cls-5" cx="160.65" cy="10.06" r="2.29"></circle>\n    <circle class="cls-5" cx="136.1" cy="25.16" r="2.29"></circle>\n    <circle class="cls-5" cx="64.26" cy="20.31" r="2.29"></circle>\n    <circle class="cls-5" cx="74.13" cy="31.12" r="2.29"></circle>\n    <circle class="cls-3" cx="104.05" cy="57.1" r="1.39" transform="translate(-19.9 72.28) rotate(-45)"></circle>\n    <circle class="cls-3" cx="108.58" cy="61.63" r="1.39" transform="translate(-21.78 76.8) rotate(-45)"></circle>\n    <circle class="cls-3" cx="108.58" cy="57.1" r="1.39" transform="translate(-18.58 75.48) rotate(-45)"></circle>\n    <circle class="cls-3" cx="104.05" cy="61.63" r="1.39" transform="translate(-23.1 73.6) rotate(-45)"></circle>\n    <circle class="cls-3" cx="104.12" cy="86.67" r="1.39" transform="translate(-40.79 80.98) rotate(-45)"></circle>\n    <circle class="cls-3" cx="108.64" cy="91.2" r="1.39" transform="translate(-42.66 85.51) rotate(-45)"></circle>\n    <circle class="cls-3" cx="108.64" cy="86.67" r="1.39" transform="translate(-39.46 84.18) rotate(-45)"></circle>\n    <circle class="cls-3" cx="104.12" cy="91.2" r="1.39" transform="translate(-43.99 82.31) rotate(-45)"></circle>\n    <line class="cls-6" x1="94.05" y1="9.44" x2="98.58" y2="13.97"></line>\n    <line class="cls-6" x1="98.58" y1="9.44" x2="94.05" y2="13.97"></line>\n    <line class="cls-6" x1="94.05" y1="39.08" x2="98.58" y2="43.6"></line>\n    <line class="cls-6" x1="98.58" y1="39.08" x2="94.05" y2="43.6"></line>\n    <line class="cls-6" x1="93.99" y1="68.77" x2="98.52" y2="73.29"></line>\n    <line class="cls-6" x1="98.52" y1="68.77" x2="93.99" y2="73.29"></line>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="dress--zombie" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 261 191.33">\n    <path class="cls-3" d="M251,215.33l-243.67,-0.66l0.51,-81.75s-3.84,-61.92,44.16,-74.73l101.56,-26.19c9.86,-1.28,27.73,-2.05,46.46,6.65c44.68,20.75,50.66,75.13,51,78.58zm17.33,-32" transform="translate(-7.33 -24)"></path>\n    <polygon class="cls-4" points="5.03 55.01 90.1 75.61 99.17 20.13 22.17 36 5.03 55.01"></polygon>\n    <polygon class="cls-4" points="190.95 7.12 126.42 66.26 91.67 22.06 159.17 0 190.95 7.12"></polygon>\n    <circle class="cls-5" cx="30.56" cy="73.95" r="2.7" transform="translate(-24.81 -14.04) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="41.31" cy="72.32" r="2.7" transform="translate(-24.06 -11.41) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="52.12" cy="82.33" r="2.7" transform="translate(-26.22 -8.4) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="61.88" cy="79.67" r="2.7" transform="translate(-25.25 -6.05) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="170" cy="44" r="2.7" transform="translate(-12.94 19.79) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="135.67" cy="78.67" r="2.7" transform="translate(-22.67 12.32) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="126.16" cy="56.79" r="2.7" transform="translate(-17.51 9.26) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="106.18" cy="58.59" r="9.41" transform="matrix(0.51, -0.86, 0.86, 0.51, -5.59, 96.24)"></circle>\n    <circle class="cls-3" cx="102.8" cy="56.59" r="1.64" transform="translate(-5.53 92.34) rotate(-59.44)"></circle>\n    <circle class="cls-3" cx="109.3" cy="60.43" r="1.64" transform="matrix(0.51, -0.86, 0.86, 0.51, -5.64, 99.83)"></circle>\n    <circle class="cls-3" cx="107.97" cy="55.26" r="1.64" transform="translate(-1.84 96.14) rotate(-59.44)"></circle>\n    <circle class="cls-3" cx="104.13" cy="61.77" r="1.64" transform="translate(-9.33 96.03) rotate(-59.44)"></circle>\n    <circle class="cls-5" cx="114.9" cy="92.46" r="9.41" transform="translate(-30.47 120.4) rotate(-59.44)"></circle>\n    <circle class="cls-5" cx="123.63" cy="126.32" r="9.41" transform="translate(-55.34 144.55) rotate(-59.44)"></circle>\n    <circle class="cls-5" cx="133.84" cy="45.61" r="2.7" transform="translate(-14.48 10.82) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="148.25" cy="47.35" r="2.7" transform="translate(-14.46 14.47) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="159.95" cy="38.66" r="2.7" transform="translate(-11.92 17.11) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="180.73" cy="37.91" r="2.7" transform="translate(-11.08 22.27) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="144.62" cy="68.33" r="2.7" transform="translate(-19.8 14.23) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="156" cy="61.67" r="2.7" transform="translate(-17.78 16.85) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="80" cy="75" r="2.7" transform="translate(-23.51 -1.68) rotate(-14.44)"></circle>\n    <circle class="cls-5" cx="86.42" cy="87.23" r="2.7" transform="translate(-26.36 0.31) rotate(-14.44)"></circle>\n    <circle class="cls-3" cx="111.52" cy="90.46" r="1.64" transform="translate(-30.41 116.5) rotate(-59.44)"></circle>\n    <circle class="cls-3" cx="118.02" cy="94.3" r="1.64" transform="translate(-30.52 123.99) rotate(-59.44)"></circle>\n    <circle class="cls-3" cx="116.69" cy="89.13" r="1.64" transform="matrix(0.51, -0.86, 0.86, 0.51, -26.72, 120.3)"></circle>\n    <circle class="cls-3" cx="112.85" cy="95.64" r="1.64" transform="translate(-34.21 120.19) rotate(-59.44)"></circle>\n    <circle class="cls-3" cx="120.3" cy="124.23" r="1.64" transform="translate(-55.18 140.66) rotate(-59.44)"></circle>\n    <circle class="cls-3" cx="126.8" cy="128.07" r="1.64" transform="translate(-55.28 148.15) rotate(-59.44)"></circle>\n    <circle class="cls-3" cx="125.47" cy="122.9" r="1.64" transform="translate(-51.48 144.46) rotate(-59.44)"></circle>\n    <circle class="cls-3" cx="121.63" cy="129.41" r="1.64" transform="translate(-58.98 144.35) rotate(-59.44)"></circle>\n    <line class="cls-6" x1="95.46" y1="32.59" x2="101.97" y2="36.43"></line>\n    <line class="cls-6" x1="100.64" y1="31.26" x2="96.8" y2="37.77"></line>\n    <line class="cls-6" x1="104.19" y1="66.46" x2="110.69" y2="70.3"></line>\n    <line class="cls-6" x1="109.36" y1="65.13" x2="105.52" y2="71.63"></line>\n    <line class="cls-6" x1="112.86" y1="100.41" x2="119.37" y2="104.25"></line>\n    <line class="cls-6" x1="118.04" y1="99.07" x2="114.19" y2="105.58"></line>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="dress--skeleton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172.5 86.5">\n   <path class="cls-1" d="M172.5,46.51a46.64,46.64,0,0,0,-46.5,-46.51h-79.5a46.64,46.64,0,0,0,-46.5,46.51v40h172.5z"></path>\n   <polygon class="cls-2" points="13.5 7.8 72.04 39 89.19 0 27.16 0 13.5 7.8"></polygon>\n   <polygon class="cls-2" points="159 7.8 100.46 39 83.31 0 145.34 0 159 7.8"></polygon>\n   <circle class="cls-3" cx="27.81" cy="7.53" r="2.05"></circle>\n   <circle class="cls-3" cx="37.31" cy="6.35" r="2.05"></circle>\n   <circle class="cls-3" cx="40.79" cy="13.8" r="2.05"></circle>\n   <circle class="cls-3" cx="52.57" cy="8.35" r="2.05"></circle>\n   <circle class="cls-3" cx="69.46" cy="9.33" r="2.05"></circle>\n   <circle class="cls-3" cx="109.21" cy="27.3" r="2.05"></circle>\n   <circle class="cls-3" cx="101.21" cy="13" r="2.05"></circle>\n   <circle class="cls-3" cx="86.21" cy="10.55" r="7.13" transform="translate(17.79 64.05) rotate(-45)"></circle>\n   <circle class="cls-1" cx="84.11" cy="8.44" r="1.24" transform="translate(18.66 61.95) rotate(-45)"></circle>\n   <circle class="cls-1" cx="88.16" cy="12.49" r="1.24" transform="translate(16.99 66) rotate(-45)"></circle>\n   <circle class="cls-1" cx="88.16" cy="8.44" r="1.24" transform="translate(19.85 64.81) rotate(-45)"></circle>\n   <circle class="cls-1" cx="84.11" cy="12.49" r="1.24" transform="translate(15.8 63.13) rotate(-45)"></circle>\n   <circle class="cls-3" cx="86.21" cy="37.05" r="7.13" transform="translate(-0.95 71.81) rotate(-45)"></circle>\n   <circle class="cls-3" cx="86.21" cy="63.55" r="7.13" transform="translate(-19.69 79.58) rotate(-45)"></circle>\n   <circle class="cls-3" cx="108.96" cy="6.25" r="2.05"></circle>\n   <circle class="cls-3" cx="119.21" cy="10.25" r="2.05"></circle>\n   <circle class="cls-3" cx="132.46" cy="5.25" r="2.05"></circle>\n   <circle class="cls-3" cx="143.66" cy="9" r="2.05"></circle>\n   <circle class="cls-3" cx="121.71" cy="22.5" r="2.05"></circle>\n   <circle class="cls-3" cx="57.46" cy="18.17" r="2.05"></circle>\n   <circle class="cls-3" cx="66.3" cy="27.83" r="2.05"></circle>\n   <circle class="cls-1" cx="84.11" cy="34.95" r="1.24" transform="translate(-0.08 69.71) rotate(-45)"></circle>\n   <circle class="cls-1" cx="88.16" cy="39" r="1.24" transform="translate(-1.75 73.76) rotate(-45)"></circle>\n   <circle class="cls-1" cx="88.16" cy="34.95" r="1.24" transform="translate(1.11 72.57) rotate(-45)"></circle>\n   <circle class="cls-1" cx="84.11" cy="39" r="1.24" transform="translate(-2.94 70.89) rotate(-45)"></circle>\n   <circle class="cls-1" cx="84.17" cy="61.39" r="1.24" transform="translate(-18.76 77.49) rotate(-45)"></circle>\n   <circle class="cls-1" cx="88.22" cy="65.44" r="1.24" transform="translate(-20.43 81.54) rotate(-45)"></circle>\n   <circle class="cls-1" cx="88.22" cy="61.39" r="1.24" transform="translate(-17.57 80.36) rotate(-45)"></circle>\n   <circle class="cls-1" cx="84.17" cy="65.44" r="1.24" transform="translate(-21.62 78.68) rotate(-45)"></circle>\n   <line class="cls-4" x1="84.11" y1="8.44" x2="88.16" y2="12.49"></line>\n   <line class="cls-4" x1="88.16" y1="8.44" x2="84.11" y2="12.49"></line>\n   <line class="cls-4" x1="84.11" y1="34.94" x2="88.16" y2="38.99"></line>\n   <line class="cls-4" x1="88.16" y1="34.94" x2="84.11" y2="38.99"></line>\n   <line class="cls-4" x1="84.06" y1="61.5" x2="88.11" y2="65.55"></line>\n   <line class="cls-4" x1="88.11" y1="61.5" x2="84.06" y2="65.55"></line>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="dress--ghost" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 254.63 127.69">\n    <path class="cls-3" d="M267.83,92.44a68.84,68.84,0,0,0,-68.64,-68.64h-117.35a68.84,68.84,0,0,0,-68.64,68.64v59h254.63z" transform="translate(-13.2 -23.79)"></path>\n    <polygon class="cls-4" points="19.93 11.51 106.34 57.57 131.65 0 40.09 0 19.93 11.51"></polygon>\n    <polygon class="cls-4" points="234.7 11.51 148.29 57.57 122.98 0 214.54 0 234.7 11.51"></polygon>\n    <circle class="cls-5" cx="41.06" cy="11.11" r="3.03"></circle>\n    <circle class="cls-5" cx="55.08" cy="9.37" r="3.03"></circle>\n    <circle class="cls-5" cx="60.21" cy="20.37" r="3.03"></circle>\n    <circle class="cls-5" cx="77.61" cy="12.32" r="3.03"></circle>\n    <circle class="cls-5" cx="102.54" cy="13.78" r="3.03"></circle>\n    <circle class="cls-5" cx="161.21" cy="40.3" r="3.03"></circle>\n    <circle class="cls-5" cx="149.41" cy="19.19" r="3.03"></circle>\n    <circle class="cls-5" cx="140.46" cy="39.36" r="10.53" transform="translate(0.11 87.06) rotate(-45)"></circle>\n    <circle class="cls-3" cx="137.36" cy="36.26" r="1.83" transform="translate(1.39 83.95) rotate(-45)"></circle>\n    <circle class="cls-3" cx="143.33" cy="42.23" r="1.83" transform="translate(-1.08 89.93) rotate(-45)"></circle>\n    <circle class="cls-3" cx="143.33" cy="36.26" r="1.83" transform="translate(3.14 88.18) rotate(-45)"></circle>\n    <circle class="cls-3" cx="137.36" cy="42.23" r="1.83" transform="translate(-2.83 85.7) rotate(-45)"></circle>\n    <circle class="cls-5" cx="140.46" cy="78.48" r="10.53" transform="translate(-27.56 98.52) rotate(-45)"></circle>\n    <circle class="cls-5" cx="140.46" cy="117.6" r="10.53" transform="translate(-55.22 109.98) rotate(-45)"></circle>\n    <circle class="cls-5" cx="160.85" cy="9.23" r="3.03"></circle>\n    <circle class="cls-5" cx="175.98" cy="15.13" r="3.03"></circle>\n    <circle class="cls-5" cx="195.53" cy="7.75" r="3.03"></circle>\n    <circle class="cls-5" cx="212.07" cy="13.29" r="3.03"></circle>\n    <circle class="cls-5" cx="179.67" cy="33.21" r="3.03"></circle>\n    <circle class="cls-5" cx="84.82" cy="26.82" r="3.03"></circle>\n    <circle class="cls-5" cx="97.86" cy="41.09" r="3.03"></circle>\n    <circle class="cls-3" cx="137.35" cy="75.38" r="1.83" transform="translate(-26.27 95.41) rotate(-45)"></circle>\n    <circle class="cls-3" cx="143.33" cy="81.35" r="1.83" transform="translate(-28.75 101.39) rotate(-45)"></circle>\n    <circle class="cls-3" cx="143.33" cy="75.38" r="1.83" transform="translate(-24.52 99.64) rotate(-45)"></circle>\n    <circle class="cls-3" cx="137.35" cy="81.35" r="1.83" transform="translate(-30.5 97.16) rotate(-45)"></circle>\n    <circle class="cls-3" cx="137.44" cy="114.41" r="1.83" transform="translate(-53.84 106.9) rotate(-45)"></circle>\n    <circle class="cls-3" cx="143.42" cy="120.39" r="1.83" transform="translate(-56.32 112.88) rotate(-45)"></circle>\n    <circle class="cls-3" cx="143.42" cy="114.41" r="1.83" transform="translate(-52.09 111.13) rotate(-45)"></circle>\n    <circle class="cls-3" cx="137.44" cy="120.39" r="1.83" transform="translate(-58.07 108.66) rotate(-45)"></circle>\n    <line class="cls-6" x1="124.15" y1="12.46" x2="130.13" y2="18.44"></line>\n    <line class="cls-6" x1="130.13" y1="12.46" x2="124.15" y2="18.44"></line>\n    <line class="cls-6" x1="124.16" y1="51.58" x2="130.13" y2="57.56"></line>\n    <line class="cls-6" x1="130.13" y1="51.58" x2="124.16" y2="57.56"></line>\n    <line class="cls-6" x1="124.08" y1="90.78" x2="130.06" y2="96.75"></line>\n    <line class="cls-6" x1="130.06" y1="90.78" x2="124.08" y2="96.75"></line>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="dress--wolf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.5 274">\n    <path class="cls-1" d="M217.27,58.48A58.64,58.64,0,0,0,158.79,0h-100A58.64,58.64,0,0,0,.35,58.48Q.18,165,0,271.5L218.5,274Z"/>\n    <polygon class="cls-2" points="17.33 9.81 90.94 49.04 112.5 0 34.5 0 17.33 9.81"/>\n    <polygon class="cls-2" points="200.29 9.81 126.68 49.04 105.12 0 183.11 0 200.29 9.81"/>\n    <circle class="cls-3" cx="35.33" cy="9.47" r="2.58"/>\n    <circle class="cls-3" cx="47.27" cy="7.99" r="2.58"/>\n    <circle class="cls-3" cx="51.65" cy="17.36" r="2.58"/>\n    <circle class="cls-3" cx="66.46" cy="10.5" r="2.58"/>\n    <circle class="cls-3" cx="87.7" cy="11.74" r="2.58"/>\n    <circle class="cls-3" cx="137.69" cy="34.33" r="2.58"/>\n    <circle class="cls-3" cx="127.63" cy="16.35" r="2.58"/>\n    <circle class="cls-3" cx="108.76" cy="13.27" r="8.97" transform="translate(22.48 80.79) rotate(-45)"/>\n    <circle class="cls-1" cx="106.11" cy="10.62" r="1.56" transform="translate(23.57 78.14) rotate(-45)"/>\n    <circle class="cls-1" cx="111.21" cy="15.71" r="1.56" transform="translate(21.46 83.24) rotate(-45)"/>\n    <circle class="cls-1" cx="111.21" cy="10.62" r="1.56" transform="translate(25.06 81.74) rotate(-45)"/>\n    <circle class="cls-1" cx="106.11" cy="15.71" r="1.56" transform="translate(19.97 79.64) rotate(-45)"/>\n    <circle class="cls-3" cx="108.76" cy="46.59" r="8.97" transform="translate(-1.09 90.55) rotate(-45)"/>\n    <circle class="cls-3" cx="108.76" cy="79.92" r="8.97" transform="translate(-24.65 100.31) rotate(-45)"/>\n    <circle class="cls-3" cx="137.37" cy="7.86" r="2.58"/>\n    <circle class="cls-3" cx="150.26" cy="12.89" r="2.58"/>\n    <circle class="cls-3" cx="166.92" cy="6.6" r="2.58"/>\n    <circle class="cls-3" cx="181.01" cy="11.32" r="2.58"/>\n    <circle class="cls-3" cx="153.4" cy="28.29" r="2.58"/>\n    <circle class="cls-3" cx="72.61" cy="22.84" r="2.58"/>\n    <circle class="cls-3" cx="83.72" cy="35" r="2.58"/>\n    <circle class="cls-1" cx="106.11" cy="43.95" r="1.56" transform="translate(0.01 87.9) rotate(-45)"/>\n    <circle class="cls-1" cx="111.2" cy="49.04" r="1.56" transform="translate(-2.1 93) rotate(-45)"/>\n    <circle class="cls-1" cx="111.2" cy="43.95" r="1.56" transform="translate(1.5 91.5) rotate(-45)"/>\n    <circle class="cls-1" cx="106.11" cy="49.04" r="1.56" transform="translate(-3.59 89.4) rotate(-45)"/>\n    <circle class="cls-1" cx="106.19" cy="77.19" r="1.56" transform="translate(-23.48 97.7) rotate(-45)"/>\n    <circle class="cls-1" cx="111.28" cy="82.29" r="1.56" transform="translate(-25.59 102.79) rotate(-45)"/>\n    <circle class="cls-1" cx="111.28" cy="77.19" r="1.56" transform="translate(-21.99 101.3) rotate(-45)"/>\n    <circle class="cls-1" cx="106.19" cy="82.29" r="1.56" transform="translate(-27.08 99.19) rotate(-45)"/>\n    <line class="cls-4" x1="106.11" y1="10.62" x2="111.21" y2="15.71"/>\n    <line class="cls-4" x1="111.21" y1="10.62" x2="106.11" y2="15.71"/>\n    <line class="cls-4" x1="106.12" y1="43.94" x2="111.21" y2="49.03"/>\n    <line class="cls-4" x1="111.21" y1="43.94" x2="106.12" y2="49.03"/>\n    <line class="cls-4" x1="106.05" y1="77.33" x2="111.14" y2="82.42"/>\n    <line class="cls-4" x1="111.14" y1="77.33" x2="106.05" y2="82.42"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="dress--yaga" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.71 232.13">\n    <path class="cls-1" d="M0,232.13v-176.74a54.08,54.08,0,0,1,53.92,-53.92h34.79v230.08z"></path>\n    <circle class="cls-2" cx="77.43" cy="55.01" r="3.92" transform="translate(-16.11 71.47) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="76.26" cy="53.86" r="0.68" transform="translate(-15.64 70.3) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="78.5" cy="56.07" r="0.68" transform="translate(-16.55 72.55) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="78.49" cy="53.84" r="0.68" transform="translate(-14.97 71.88) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="76.28" cy="56.08" r="0.68" transform="translate(-17.22 70.97) rotate(-45.37)"></circle>\n    <line class="cls-3" x1="76.26" y1="53.86" x2="78.5" y2="56.07"></line>\n    <line class="cls-3" x1="78.49" y1="53.84" x2="76.28" y2="56.08"></line>\n    <circle class="cls-2" cx="77.52" cy="69.58" r="3.92" transform="translate(-26.45 75.87) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="76.36" cy="68.43" r="0.68" transform="translate(-25.98 74.7) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="78.6" cy="70.64" r="0.68" transform="translate(-26.89 76.96) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="78.58" cy="68.41" r="0.68" transform="translate(-25.31 76.28) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="76.37" cy="70.65" r="0.68" transform="translate(-27.56 75.38) rotate(-45.37)"></circle>\n    <line class="cls-3" x1="76.36" y1="68.43" x2="78.6" y2="70.64"></line>\n    <line class="cls-3" x1="78.58" y1="68.41" x2="76.37" y2="70.65"></line>\n    <circle class="cls-2" cx="77.62" cy="84.14" r="3.92" transform="translate(-36.79 80.28) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="76.48" cy="82.96" r="0.68" transform="translate(-36.29 79.12) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="78.72" cy="85.17" r="0.68" transform="translate(-37.2 81.37) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="78.71" cy="82.95" r="0.68" transform="translate(-35.62 80.7) rotate(-45.37)"></circle>\n    <circle class="cls-1" cx="76.5" cy="85.19" r="0.68" transform="translate(-37.87 79.79) rotate(-45.37)"></circle>\n    <line class="cls-3" x1="76.42" y1="83.02" x2="78.66" y2="85.23"></line>\n    <line class="cls-3" x1="78.65" y1="83.01" x2="76.44" y2="85.25"></line>\n    <polygon class="cls-4" points="22.11 7.34 40.1 46.09 69.32 28.83 49.61 0 22.11 7.34"></polygon>\n    <circle class="cls-2" cx="43.91" cy="7.91" r="1.63" transform="translate(11.86 38.95) rotate(-54.29)"></circle>\n    <circle class="cls-2" cx="29.16" cy="10.16" r="1.63" transform="translate(3.89 27.91) rotate(-54.29)"></circle>\n    <circle class="cls-2" cx="35.86" cy="21.09" r="1.63" transform="translate(-2.19 37.9) rotate(-54.29)"></circle>\n    <circle class="cls-2" cx="47.11" cy="16.84" r="1.63" transform="translate(5.94 45.27) rotate(-54.29)"></circle>\n    <circle class="cls-2" cx="52.23" cy="25.7" r="1.63" transform="translate(0.87 53.11) rotate(-54.29)"></circle>\n    <circle class="cls-2" cx="43.16" cy="25.66" r="1.63" transform="translate(-2.87 45.73) rotate(-54.29)"></circle>\n    <circle class="cls-2" cx="41.58" cy="36.2" r="1.63" transform="translate(-12.08 48.83) rotate(-54.29)"></circle>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="dress--doctor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.76 116.13">\n    <path class="cls-1" d="M93.13,33.41a25.18,25.18,0,0,0,-25.13,-25.11h-42.89a25.18,25.18,0,0,0,-25.11,25.11l1.09,82.72h92.67z"></path>\n    <polygon class="cls-2" points="7.29 12.51 38.89 29.36 48.15 8.3 22.96 0 7.29 12.51"></polygon>\n    <polygon class="cls-2" points="85.84 12.51 54.24 29.36 44.98 8.3 70.86 0.69 85.84 12.51"></polygon>\n    <circle class="cls-3" cx="15.02" cy="12.37" r="1.11"></circle>\n    <circle class="cls-3" cx="20.76" cy="6.9" r="1.11"></circle>\n    <circle class="cls-3" cx="22.02" cy="15.75" r="1.11"></circle>\n    <circle class="cls-3" cx="24.26" cy="11.8" r="1.11"></circle>\n    <circle class="cls-3" cx="37.5" cy="13.34" r="1.11"></circle>\n    <circle class="cls-3" cx="55.51" cy="22.8" r="1.11"></circle>\n    <circle class="cls-3" cx="54.65" cy="15.32" r="1.11"></circle>\n    <circle class="cls-3" cx="46.55" cy="14" r="3.85" transform="translate(3.74 37.01) rotate(-45)"></circle>\n    <circle class="cls-1" cx="45.41" cy="12.86" r="0.67" transform="translate(4.21 35.88) rotate(-45)"></circle>\n    <circle class="cls-1" cx="47.6" cy="15.05" r="0.67" transform="translate(3.3 38.06) rotate(-45)"></circle>\n    <circle class="cls-1" cx="47.6" cy="12.86" r="0.67" transform="translate(4.85 37.42) rotate(-45)"></circle>\n    <circle class="cls-1" cx="45.41" cy="15.05" r="0.67" transform="translate(2.66 36.52) rotate(-45)"></circle>\n    <circle class="cls-3" cx="46.55" cy="28.31" r="3.85" transform="translate(-6.38 41.2) rotate(-45)"></circle>\n    <circle class="cls-3" cx="46.55" cy="38.61" r="3.85" transform="translate(-13.67 44.22) rotate(-45)"></circle>\n    <circle class="cls-3" cx="58.83" cy="11.68" r="1.11"></circle>\n    <circle class="cls-3" cx="66.4" cy="14.3" r="1.11"></circle>\n    <circle class="cls-3" cx="71.65" cy="7.8" r="1.11"></circle>\n    <circle class="cls-3" cx="77.56" cy="13.16" r="1.11"></circle>\n    <circle class="cls-3" cx="62.01" cy="19.94" r="1.11"></circle>\n    <circle class="cls-3" cx="31.02" cy="18.11" r="1.11"></circle>\n    <circle class="cls-3" cx="35.79" cy="23.33" r="1.11"></circle>\n    <circle class="cls-1" cx="45.41" cy="27.17" r="0.67" transform="translate(-5.91 40.07) rotate(-45)"></circle>\n    <circle class="cls-1" cx="47.59" cy="29.36" r="0.67" transform="translate(-6.82 42.25) rotate(-45)"></circle>\n    <circle class="cls-1" cx="47.59" cy="27.17" r="0.67" transform="translate(-5.27 41.61) rotate(-45)"></circle>\n    <circle class="cls-1" cx="45.41" cy="29.36" r="0.67" transform="translate(-7.46 40.71) rotate(-45)"></circle>\n    <circle class="cls-1" cx="45.44" cy="37.44" r="0.67" transform="translate(-13.17 43.1) rotate(-45)"></circle>\n    <circle class="cls-1" cx="47.63" cy="39.63" r="0.67" transform="translate(-14.07 45.28) rotate(-45)"></circle>\n    <circle class="cls-1" cx="47.63" cy="37.44" r="0.67" transform="translate(-12.53 44.64) rotate(-45)"></circle>\n    <circle class="cls-1" cx="45.44" cy="39.63" r="0.67" transform="translate(-14.71 43.74) rotate(-45)"></circle>\n    <line class="cls-4" x1="45.41" y1="12.86" x2="47.6" y2="15.05"></line>\n    <line class="cls-4" x1="47.6" y1="12.86" x2="45.41" y2="15.05"></line>\n    <line class="cls-4" x1="45.41" y1="27.17" x2="47.6" y2="29.35"></line>\n    <line class="cls-4" x1="47.6" y1="27.17" x2="45.41" y2="29.35"></line>\n    <line class="cls-4" x1="45.38" y1="37.5" x2="47.57" y2="39.69"></line>\n    <line class="cls-4" x1="47.57" y1="37.5" x2="45.38" y2="39.69"></line>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="dress--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.33 243.73">\n    <path class="cls-1" d="M178.16,151.9a48,48,0,0,0,-47.86,-47.9h-81.83a48,48,0,0,0,-47.86,47.9l-0.61,91.83l178.33,-0.33q-0.08,-45.75,-0.17,-91.5z"></path>\n    <polygon class="cls-2" points="14.51 112.06 74.76 144.18 90.67 102.07 33.67 79.73 14.51 112.06"></polygon>\n    <polygon class="cls-2" points="164.27 112.06 104.01 144.18 86.67 101.73 145.33 79.07 164.27 112.06"></polygon>\n    <circle class="cls-3" cx="29.24" cy="111.78" r="2.11"></circle>\n    <circle class="cls-3" cx="38.67" cy="90.4" r="2.11"></circle>\n    <circle class="cls-3" cx="38.33" cy="102.07" r="2.11"></circle>\n    <circle class="cls-3" cx="55.67" cy="99.07" r="2.11"></circle>\n    <circle class="cls-3" cx="139.33" cy="90.07" r="2.11"></circle>\n    <circle class="cls-3" cx="129.33" cy="100.73" r="2.11"></circle>\n    <circle class="cls-3" cx="103.67" cy="102.4" r="2.11"></circle>\n    <circle class="cls-3" cx="42.6" cy="118.24" r="2.11"></circle>\n    <circle class="cls-3" cx="54.72" cy="112.62" r="2.11"></circle>\n    <circle class="cls-3" cx="72.11" cy="113.64" r="2.11"></circle>\n    <circle class="cls-3" cx="113.02" cy="132.13" r="2.11"></circle>\n    <circle class="cls-3" cx="104.79" cy="117.41" r="2.11"></circle>\n    <circle class="cls-3" cx="89.35" cy="114.89" r="7.34" transform="translate(-55.07 96.83) rotate(-45)"></circle>\n    <circle class="cls-1" cx="87.18" cy="112.72" r="1.28" transform="translate(-54.17 94.66) rotate(-45)"></circle>\n    <circle class="cls-1" cx="91.35" cy="116.89" r="1.28" transform="translate(-55.9 98.83) rotate(-45)"></circle>\n    <circle class="cls-1" cx="91.35" cy="112.72" r="1.28" transform="translate(-52.95 97.61) rotate(-45)"></circle>\n    <circle class="cls-1" cx="87.18" cy="116.89" r="1.28" transform="translate(-57.12 95.88) rotate(-45)"></circle>\n    <circle class="cls-3" cx="89.35" cy="142.17" r="7.34" transform="translate(-74.36 104.82) rotate(-45)"></circle>\n    <circle class="cls-3" cx="112.77" cy="110.47" r="2.11"></circle>\n    <circle class="cls-3" cx="123.32" cy="114.58" r="2.11"></circle>\n    <circle class="cls-3" cx="136.96" cy="109.44" r="2.11"></circle>\n    <circle class="cls-3" cx="148.48" cy="113.3" r="2.11"></circle>\n    <circle class="cls-3" cx="125.89" cy="127.19" r="2.11"></circle>\n    <circle class="cls-3" cx="59.76" cy="122.73" r="2.11"></circle>\n    <circle class="cls-3" cx="68.85" cy="132.68" r="2.11"></circle>\n    <circle class="cls-1" cx="87.18" cy="140" r="1.28" transform="translate(-73.46 102.65) rotate(-45)"></circle>\n    <circle class="cls-1" cx="91.35" cy="144.17" r="1.28" transform="translate(-75.19 106.82) rotate(-45)"></circle>\n    <circle class="cls-1" cx="91.35" cy="140" r="1.28" transform="translate(-72.24 105.6) rotate(-45)"></circle>\n    <circle class="cls-1" cx="87.18" cy="144.17" r="1.28" transform="translate(-76.41 103.87) rotate(-45)"></circle>\n    <line class="cls-4" x1="87.18" y1="112.72" x2="91.35" y2="116.89"></line>\n    <line class="cls-4" x1="91.35" y1="112.72" x2="87.18" y2="116.89"></line>\n    <line class="cls-4" x1="87.18" y1="140" x2="91.35" y2="144.17"></line>\n    <line class="cls-4" x1="91.35" y1="140" x2="87.18" y2="144.17"></line>\n    <polygon class="cls-2" points="14.88 32.99 75.13 65.11 91.03 23 34.03 0.67 14.88 32.99"></polygon>\n    <polygon class="cls-2" points="164.63 32.99 104.38 65.11 87.03 22.67 145.7 0 164.63 32.99"></polygon>\n    <circle class="cls-3" cx="29.6" cy="32.72" r="2.11"></circle>\n    <circle class="cls-3" cx="39.03" cy="11.33" r="2.11"></circle>\n    <circle class="cls-3" cx="38.7" cy="23" r="2.11"></circle>\n    <circle class="cls-3" cx="56.03" cy="20" r="2.11"></circle>\n    <circle class="cls-3" cx="139.7" cy="11" r="2.11"></circle>\n    <circle class="cls-3" cx="129.7" cy="21.67" r="2.11"></circle>\n    <circle class="cls-3" cx="104.03" cy="23.33" r="2.11"></circle>\n    <circle class="cls-3" cx="42.96" cy="39.17" r="2.11"></circle>\n    <circle class="cls-3" cx="55.09" cy="33.56" r="2.11"></circle>\n    <circle class="cls-3" cx="72.48" cy="34.57" r="2.11"></circle>\n    <circle class="cls-3" cx="113.39" cy="53.07" r="2.11"></circle>\n    <circle class="cls-3" cx="105.16" cy="38.35" r="2.11"></circle>\n    <circle class="cls-3" cx="89.72" cy="35.82" r="7.34" transform="translate(0.95 73.93) rotate(-45)"></circle>\n    <circle class="cls-1" cx="87.55" cy="33.66" r="1.28" transform="translate(1.84 71.76) rotate(-45)"></circle>\n    <circle class="cls-1" cx="91.72" cy="37.83" r="1.28" transform="translate(0.12 75.93) rotate(-45)"></circle>\n    <circle class="cls-1" cx="91.72" cy="33.66" r="1.28" transform="translate(3.06 74.71) rotate(-45)"></circle>\n    <circle class="cls-1" cx="87.55" cy="37.83" r="1.28" transform="translate(-1.1 72.98) rotate(-45)"></circle>\n    <circle class="cls-3" cx="89.72" cy="63.1" r="7.34" transform="translate(-18.34 81.92) rotate(-45)"></circle>\n    <circle class="cls-3" cx="113.13" cy="31.4" r="2.11"></circle>\n    <circle class="cls-3" cx="123.68" cy="35.52" r="2.11"></circle>\n    <circle class="cls-3" cx="137.32" cy="30.37" r="2.11"></circle>\n    <circle class="cls-3" cx="148.85" cy="34.23" r="2.11"></circle>\n    <circle class="cls-3" cx="126.26" cy="48.13" r="2.11"></circle>\n    <circle class="cls-3" cx="60.12" cy="43.67" r="2.11"></circle>\n    <circle class="cls-3" cx="69.22" cy="53.62" r="2.11"></circle>\n    <circle class="cls-1" cx="87.55" cy="60.94" r="1.28" transform="translate(-17.45 79.75) rotate(-45)"></circle>\n    <circle class="cls-1" cx="91.71" cy="65.11" r="1.28" transform="translate(-19.17 83.92) rotate(-45)"></circle>\n    <circle class="cls-1" cx="91.71" cy="60.94" r="1.28" transform="translate(-16.23 82.7) rotate(-45)"></circle>\n    <circle class="cls-1" cx="87.55" cy="65.11" r="1.28" transform="translate(-20.39 80.97) rotate(-45)"></circle>\n    <line class="cls-4" x1="87.55" y1="33.66" x2="91.72" y2="37.83"></line>\n    <line class="cls-4" x1="91.72" y1="33.66" x2="87.55" y2="37.83"></line>\n    <line class="cls-4" x1="87.55" y1="60.93" x2="91.72" y2="65.1"></line>\n    <line class="cls-4" x1="91.72" y1="60.93" x2="87.55" y2="65.1"></line>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="dress--alien" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.91 156.21">\n    <path class="cls-1" d="M129.91,35a35.12,35.12,0,0,0,-35,-35h-59.91a35.12,35.12,0,0,0,-35,35l0.57,120.88l130.33,0.33z"></path>\n    <polygon class="cls-2" points="10.17 5.87 54.25 29.37 67.16 0 20.45 0 10.17 5.87"></polygon>\n    <polygon class="cls-2" points="119.74 5.87 75.65 29.37 62.74 0 109.45 0 119.74 5.87"></polygon>\n    <circle class="cls-3" cx="20.95" cy="5.67" r="1.54"></circle>\n    <circle class="cls-3" cx="28.1" cy="4.78" r="1.54"></circle>\n    <circle class="cls-3" cx="30.72" cy="10.39" r="1.54"></circle>\n    <circle class="cls-3" cx="39.59" cy="6.29" r="1.54"></circle>\n    <circle class="cls-3" cx="52.31" cy="7.03" r="1.54"></circle>\n    <circle class="cls-3" cx="82.25" cy="20.56" r="1.54"></circle>\n    <circle class="cls-3" cx="76.22" cy="9.79" r="1.54"></circle>\n    <circle class="cls-3" cx="64.93" cy="7.94" r="5.37" transform="translate(13.4 48.24) rotate(-45)"></circle>\n    <circle class="cls-1" cx="63.34" cy="6.36" r="0.93" transform="translate(14.06 46.65) rotate(-45)"></circle>\n    <circle class="cls-1" cx="66.39" cy="9.41" r="0.93" transform="translate(12.79 49.7) rotate(-45)"></circle>\n    <circle class="cls-1" cx="66.39" cy="6.36" r="0.93" transform="translate(14.95 48.81) rotate(-45)"></circle>\n    <circle class="cls-1" cx="63.34" cy="9.41" r="0.93" transform="translate(11.9 47.54) rotate(-45)"></circle>\n    <circle class="cls-3" cx="64.93" cy="27.9" r="5.37" transform="translate(-0.71 54.08) rotate(-45)"></circle>\n    <circle class="cls-3" cx="64.93" cy="47.86" r="5.37" transform="translate(-14.83 59.93) rotate(-45)"></circle>\n    <circle class="cls-3" cx="82.06" cy="4.71" r="1.54"></circle>\n    <circle class="cls-3" cx="89.78" cy="7.72" r="1.54"></circle>\n    <circle class="cls-3" cx="99.76" cy="3.95" r="1.54"></circle>\n    <circle class="cls-3" cx="108.19" cy="6.78" r="1.54"></circle>\n    <circle class="cls-3" cx="91.66" cy="16.94" r="1.54"></circle>\n    <circle class="cls-3" cx="43.27" cy="13.68" r="1.54"></circle>\n    <circle class="cls-3" cx="49.93" cy="20.96" r="1.54"></circle>\n    <circle class="cls-1" cx="63.34" cy="26.32" r="0.93" transform="translate(-0.06 52.5) rotate(-45)"></circle>\n    <circle class="cls-1" cx="66.39" cy="29.37" r="0.93" transform="translate(-1.32 55.54) rotate(-45)"></circle>\n    <circle class="cls-1" cx="66.39" cy="26.32" r="0.93" transform="translate(0.83 54.65) rotate(-45)"></circle>\n    <circle class="cls-1" cx="63.34" cy="29.37" r="0.93" transform="translate(-2.21 53.39) rotate(-45)"></circle>\n    <circle class="cls-1" cx="63.38" cy="46.23" r="0.93" transform="translate(-14.13 58.36) rotate(-45)"></circle>\n    <circle class="cls-1" cx="66.43" cy="49.28" r="0.93" transform="translate(-15.39 61.41) rotate(-45)"></circle>\n    <circle class="cls-1" cx="66.43" cy="46.23" r="0.93" transform="translate(-13.23 60.52) rotate(-45)"></circle>\n    <circle class="cls-1" cx="63.38" cy="49.28" r="0.93" transform="translate(-16.28 59.25) rotate(-45)"></circle>\n    <line class="cls-4" x1="63.34" y1="6.36" x2="66.39" y2="9.41"></line>\n    <line class="cls-4" x1="66.39" y1="6.36" x2="63.34" y2="9.41"></line>\n    <line class="cls-4" x1="63.34" y1="26.32" x2="66.39" y2="29.37"></line>\n    <line class="cls-4" x1="66.39" y1="26.32" x2="63.34" y2="29.37"></line>\n    <line class="cls-4" x1="63.3" y1="46.31" x2="66.35" y2="49.36"></line>\n    <line class="cls-4" x1="66.35" y1="46.31" x2="63.3" y2="49.36"></line>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="dress--vampire" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 137.5 139.59">\n    <path class="cls-3" d="M137.5,37.22a37.07,37.07,0,0,0-37-37H37.35a37.07,37.07,0,0,0-37,37Q.2,88.54,0,139.85H137.25Q137.38,88.53,137.5,37.22Z" transform="translate(0 -0.26)"/>\n    <polygon class="cls-4" points="11.12 6.2 57.65 31 71.28 0 21.98 0 11.12 6.2"/>\n    <polygon class="cls-4" points="126.77 6.2 80.24 31 66.61 0 115.91 0 126.77 6.2"/>\n    <circle class="cls-5" cx="22.5" cy="5.98" r="1.63"/>\n    <circle class="cls-5" cx="30.05" cy="5.05" r="1.63"/>\n    <circle class="cls-5" cx="32.81" cy="10.97" r="1.63"/>\n    <circle class="cls-5" cx="42.18" cy="6.63" r="1.63"/>\n    <circle class="cls-5" cx="49.62" cy="8.73" r="1.63"/>\n    <circle class="cls-5" cx="87.2" cy="21.7" r="1.63"/>\n    <circle class="cls-5" cx="91.5" cy="3.86" r="1.63"/>\n    <circle class="cls-5" cx="68.92" cy="29.71" r="5.67" transform="translate(-0.82 57.18) rotate(-45)"/>\n    <circle class="cls-5" cx="68.92" cy="50.77" r="5.67" transform="translate(-15.71 63.35) rotate(-45)"/>\n    <circle class="cls-5" cx="88.13" cy="10.86" r="1.63"/>\n    <circle class="cls-5" cx="98" cy="9.23" r="1.63"/>\n    <circle class="cls-5" cx="105.68" cy="4.17" r="1.63"/>\n    <circle class="cls-5" cx="114.58" cy="7.15" r="1.63"/>\n    <circle class="cls-5" cx="97.13" cy="17.88" r="1.63"/>\n    <circle class="cls-5" cx="46.07" cy="14.44" r="1.63"/>\n    <circle class="cls-5" cx="53.09" cy="22.12" r="1.63"/>\n    <circle class="cls-3" cx="67.24" cy="28.03" r="0.99" transform="translate(-0.13 55.5) rotate(-45)"/>\n    <circle class="cls-3" cx="70.46" cy="31.25" r="0.99" transform="translate(-1.46 58.72) rotate(-45)"/>\n    <circle class="cls-3" cx="70.46" cy="28.03" r="0.99" transform="translate(0.81 57.78) rotate(-45)"/>\n    <circle class="cls-3" cx="67.24" cy="31.25" r="0.99" transform="translate(-2.4 56.44) rotate(-45)"/>\n    <circle class="cls-3" cx="67.29" cy="49.05" r="0.99" transform="translate(-14.97 61.69) rotate(-45)"/>\n    <circle class="cls-3" cx="70.51" cy="52.27" r="0.99" transform="translate(-16.31 64.91) rotate(-45)"/>\n    <circle class="cls-3" cx="70.51" cy="49.05" r="0.99" transform="translate(-14.03 63.97) rotate(-45)"/>\n    <circle class="cls-3" cx="67.29" cy="52.27" r="0.99" transform="translate(-17.25 62.63) rotate(-45)"/>\n    <line class="cls-6" x1="67.24" y1="27.77" x2="70.46" y2="30.99"/>\n    <line class="cls-6" x1="70.46" y1="27.77" x2="67.24" y2="30.99"/>\n    <line class="cls-6" x1="67.2" y1="48.88" x2="70.42" y2="52.1"/>\n    <line class="cls-6" x1="70.42" y1="48.88" x2="67.2" y2="52.1"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="dress--yeti" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 296.14 215.33">\n    <path class="cls-3" d="M296.14,107.39a80,80,0,0,0,-79.74,-79.74h-136.34a80,80,0,0,0,-79.74,79.74q-0.16,62.72,-0.32,125.43l295.33,2z" transform="translate(0 -19.49)"></path>\n    <polygon class="cls-4" points="20 16.67 62 132 153.26 59.48 54 0 20 16.67"></polygon>\n    <polygon class="cls-4" points="269.33 14 230 130.67 143.19 59.48 239.33 1.33 269.33 14"></polygon>\n    <circle class="cls-5" cx="47.33" cy="66.33" r="3.51"></circle>\n    <circle class="cls-5" cx="35.33" cy="37.83" r="3.51"></circle>\n    <circle class="cls-5" cx="57.33" cy="76.83" r="3.51"></circle>\n    <circle class="cls-5" cx="63.82" cy="95.83" r="3.51"></circle>\n    <circle class="cls-5" cx="65.33" cy="114.33" r="3.51"></circle>\n    <circle class="cls-5" cx="225.33" cy="114.82" r="3.51"></circle>\n    <circle class="cls-5" cx="148.17" cy="140.51" r="10.42" transform="translate(-55.96 126.43) rotate(-45)"></circle>\n    <circle class="cls-5" cx="148.17" cy="187.96" r="12.23" transform="translate(-89.51 140.33) rotate(-45)"></circle>\n    <circle class="cls-5" cx="247.32" cy="51.33" r="3.51"></circle>\n    <circle class="cls-5" cx="232.33" cy="76.32" r="3.51"></circle>\n    <circle class="cls-5" cx="228.33" cy="97.83" r="3.51"></circle>\n    <circle class="cls-5" cx="211.82" cy="98.83" r="3.51"></circle>\n    <circle class="cls-5" cx="78.33" cy="106.83" r="3.51"></circle>\n    <circle class="cls-3" cx="145.09" cy="137.43" r="1.81" transform="translate(-54.69 123.35) rotate(-45)"></circle>\n    <circle class="cls-3" cx="151" cy="143.35" r="1.81" transform="translate(-57.14 129.27) rotate(-45)"></circle>\n    <circle class="cls-3" cx="151" cy="137.43" r="1.81" transform="translate(-52.95 127.54) rotate(-45)"></circle>\n    <circle class="cls-3" cx="145.09" cy="143.35" r="1.81" transform="translate(-58.87 125.09) rotate(-45)"></circle>\n    <circle class="cls-3" cx="144.66" cy="184.25" r="2.13" transform="translate(-87.91 136.76) rotate(-45)"></circle>\n    <circle class="cls-3" cx="151.6" cy="191.19" r="2.13" transform="translate(-90.79 143.7) rotate(-45)"></circle>\n    <circle class="cls-3" cx="151.6" cy="184.25" r="2.13" transform="translate(-85.88 141.67) rotate(-45)"></circle>\n    <circle class="cls-3" cx="144.66" cy="191.19" r="2.13" transform="translate(-92.82 138.79) rotate(-45)"></circle>\n    <line class="cls-6" x1="145.09" y1="117.94" x2="151.01" y2="123.85"></line>\n    <line class="cls-6" x1="151.01" y1="117.94" x2="145.09" y2="123.85"></line>\n    <line class="cls-6" x1="144.47" y1="164.94" x2="151.41" y2="171.88"></line>\n    <line class="cls-6" x1="151.41" y1="164.94" x2="144.47" y2="171.88"></line>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="dress--bed" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 159.49 27.64">\n    <path class="cls-1" d="M2.39,26.77,26.51,1.33l132.94.29,0,25.83Z"/>\n    <polygon class="cls-2" points="0 27.64 18.54 23.24 14.82 11.58 1.46 23.36 0 27.64"/>\n    <polygon class="cls-2" points="31.34 0 24.66 17.84 13.56 12.7 26.92 0.91 31.34 0"/>\n    <circle class="cls-3" cx="3.03" cy="24.86" r="0.59" transform="translate(-15.68 8.22) rotate(-41.41)"/>\n    <circle class="cls-3" cx="4.85" cy="22.8" r="0.59" transform="translate(-13.87 8.91) rotate(-41.41)"/>\n    <circle class="cls-3" cx="7.02" cy="23.75" r="0.59" transform="translate(-13.95 10.58) rotate(-41.41)"/>\n    <circle class="cls-3" cx="8.52" cy="20.33" r="0.59" transform="translate(-11.32 10.72) rotate(-41.41)"/>\n    <circle class="cls-3" cx="12.35" cy="17.34" r="0.59" transform="translate(-8.38 12.5) rotate(-41.41)"/>\n    <circle class="cls-3" cx="24.32" cy="13.66" r="0.59" transform="translate(-2.95 19.5) rotate(-41.41)"/>\n    <circle class="cls-3" cx="19.88" cy="12.1" r="0.59" transform="translate(-3.03 16.17) rotate(-41.41)"/>\n    <circle class="cls-3" cx="16.18" cy="14.42" r="2.05" transform="translate(0.78 29.67) rotate(-86.41)"/>\n    <circle class="cls-1" cx="15.33" cy="14.36" r="0.36" transform="matrix(0.06, -1, 1, 0.06, 0.03, 28.76)"/>\n    <circle class="cls-1" cx="16.97" cy="14.47" r="0.36" transform="translate(1.47 30.5) rotate(-86.41)"/>\n    <circle class="cls-1" cx="16.2" cy="13.59" r="0.36" transform="translate(1.62 28.91) rotate(-86.41)"/>\n    <circle class="cls-1" cx="16.1" cy="15.24" r="0.36" transform="translate(-0.12 30.35) rotate(-86.41)"/>\n    <circle class="cls-3" cx="20.27" cy="9.17" r="0.59" transform="translate(-1 15.7) rotate(-41.41)"/>\n    <circle class="cls-3" cx="23.24" cy="8.08" r="0.59" transform="translate(0.46 17.39) rotate(-41.41)"/>\n    <circle class="cls-3" cx="25.14" cy="4.49" r="0.59" transform="translate(3.31 17.75) rotate(-41.41)"/>\n    <circle class="cls-3" cx="28.27" cy="3.17" r="0.59" transform="translate(4.97 19.49) rotate(-41.41)"/>\n    <circle class="cls-3" cx="26.1" cy="10.25" r="0.59" transform="translate(-0.25 19.83) rotate(-41.41)"/>\n    <circle class="cls-3" cx="11.44" cy="21.52" r="0.59" transform="translate(-11.37 12.94) rotate(-41.41)"/>\n    <circle class="cls-3" cx="15.18" cy="21.92" r="0.59" transform="translate(-10.71 15.52) rotate(-41.41)"/>\n    <line class="cls-4" x1="15.33" y1="14.36" x2="16.97" y2="14.47"/>\n    <line class="cls-4" x1="16.2" y1="13.59" x2="16.1" y2="15.24"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/dress/dress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], DressComponent);
    return DressComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=dress.js.map

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var BraComponent = /** @class */ (function (_super) {
    __extends(BraComponent, _super);
    function BraComponent(element) {
        return _super.call(this, 'bra', element.nativeElement) || this;
    }
    BraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bra',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/bra/bra.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg class="bra" width="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.76 152.07">\n      <rect class="cls-1" y="91.44" width="276.76" height="16.33"></rect>\n      <rect class="cls-1" x="60.01" width="18.78" height="100.42"></rect>\n      <rect class="cls-1" x="197.98" width="18.78" height="100.42"></rect>\n      <path class="cls-1" d="M136.34,103.68a48.39,48.39,0,0,1,-96.77,0"></path>\n      <path class="cls-1" d="M237.2,103.68a48.39,48.39,0,0,1,-96.77,0"></path>\n      <path class="cls-2" d="M57.43,118.43l-9.56,-12.31a4.95,4.95,0,1,1,8.57,-4.95l1,1.72l1,-1.72a4.95,4.95,0,1,1,8.56,4.96z"></path>\n      <path class="cls-2" d="M78.67,143.75l-9.57,-12.31a4.95,4.95,0,1,1,8.57,-4.95l1,1.72l1,-1.72a4.95,4.95,0,1,1,8.57,4.95z"></path>\n      <path class="cls-2" d="M103.57,120.07l-9.57,-12.31a4.95,4.95,0,1,1,8.57,-4.95l1,1.72l1,-1.72a4.95,4.95,0,1,1,8.57,4.95z"></path>\n      <path class="cls-2" d="M157.47,116.39l-9.56,-12.31a4.95,4.95,0,1,1,8.57,-4.95l1,1.72l1,-1.72a4.95,4.95,0,1,1,8.57,4.95z"></path>\n      <path class="cls-2" d="M173.81,142.93l-9.56,-12.31a4.95,4.95,0,1,1,8.57,-4.95l1,1.72l1,-1.72a4.95,4.95,0,1,1,8.57,4.95z"></path>\n      <path class="cls-2" d="M189.73,116l-9.56,-12.31a4.95,4.95,0,1,1,8.57,-4.95l1,1.72l1,-1.72a4.95,4.95,0,1,1,8.57,4.95z"></path>\n      <path class="cls-2" d="M210.56,135.58l-9.56,-12.3a4.95,4.95,0,1,1,8.57,-4.95l1,1.72l1,-1.72a4.95,4.95,0,1,1,8.57,4.95z"></path>\n</svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.64 71.08">\n      <polygon class="cls-1" points="160.64 50.37 0 50.37 4 42.74 160.64 42.74 160.64 50.37"/>\n      <rect class="cls-1" x="24.84" width="8.78" height="46.94"/>\n      <rect class="cls-1" x="89.33" width="8.78" height="46.94"/>\n      <path class="cls-1" d="M60.52,48.46a22.62,22.62,0,0,1-45.24,0"/>\n      <path class="cls-1" d="M107.66,48.46a22.62,22.62,0,0,1-45.24,0"/>\n      <path class="cls-2" d="M23.64,55.36l-4.47-5.75a2.31,2.31,0,1,1,4-2.31l.46.8.46-.8a2.31,2.31,0,1,1,4,2.31Z"/>\n      <path class="cls-2" d="M33.56,67.19l-4.47-5.75a2.31,2.31,0,1,1,4-2.31l.46.8.46-.8a2.31,2.31,0,1,1,4,2.31Z"/>\n      <path class="cls-2" d="M45.2,56.12l-4.47-5.75a2.31,2.31,0,1,1,4-2.31l.46.8.46-.8a2.31,2.31,0,1,1,4,2.31Z"/>\n      <path class="cls-2" d="M70.4,54.41l-4.47-5.75a2.31,2.31,0,1,1,4-2.31l.46.8.46-.8a2.31,2.31,0,1,1,4,2.31Z"/>\n      <path class="cls-2" d="M78,66.81l-4.47-5.75a2.31,2.31,0,1,1,4-2.31l.46.8.46-.8a2.31,2.31,0,1,1,4,2.31Z"/>\n      <path class="cls-2" d="M85.48,54.22,81,48.46a2.31,2.31,0,1,1,4-2.31l.46.8.46-.8a2.31,2.31,0,1,1,4,2.31Z"/>\n      <path class="cls-2" d="M95.21,63.38l-4.47-5.75a2.31,2.31,0,1,1,4-2.31l.46.8.46-.8a2.31,2.31,0,1,1,4,2.31Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.67 29.48">\n      <polygon class="cls-1" points="102.67 16.91 0 16.91 9.67 12.28 92.67 12.28 102.67 16.91"/>\n      <polygon class="cls-1" points="34.69 14.83 29.36 14.83 29.36 1 34.69 0.33 34.69 14.83"/>\n      <polygon class="cls-1" points="73.81 14.83 68.49 14.83 68.49 0 73.81 1 73.81 14.83"/>\n      <path class="cls-1" d="M51,15.75a13.72,13.72,0,1,1-27.44,0"/>\n      <path class="cls-1" d="M79.61,15.75a13.72,13.72,0,1,1-27.44,0"/>\n      <path class="cls-2" d="M28.63,19.94l-2.71-3.49A1.4,1.4,0,1,1,28.35,15l.28.49.28-.49a1.4,1.4,0,1,1,2.43,1.4Z"/>\n      <path class="cls-2" d="M34.65,27.12l-2.71-3.49a1.4,1.4,0,1,1,2.43-1.4l.28.49.28-.49a1.4,1.4,0,1,1,2.43,1.4Z"/>\n      <path class="cls-2" d="M41.72,20.4,39,16.91a1.4,1.4,0,1,1,2.43-1.4l.28.49.28-.49a1.4,1.4,0,1,1,2.43,1.4Z"/>\n      <path class="cls-2" d="M57,19.36l-2.71-3.49a1.4,1.4,0,1,1,2.43-1.4L57,15l.28-.49a1.4,1.4,0,1,1,2.43,1.4Z"/>\n      <path class="cls-2" d="M61.63,26.89,58.92,23.4A1.4,1.4,0,1,1,61.35,22l.28.49.28-.49a1.4,1.4,0,1,1,2.43,1.4Z"/>\n      <path class="cls-2" d="M66.15,19.24l-2.71-3.49a1.4,1.4,0,1,1,2.43-1.4l.28.49.28-.49a1.4,1.4,0,1,1,2.43,1.4Z"/>\n      <path class="cls-2" d="M72.06,24.8l-2.71-3.49a1.4,1.4,0,1,1,2.43-1.4l.28.49.28-.49a1.4,1.4,0,1,1,2.43,1.4Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.55 79.39">\n    <rect class="cls-1" y="62.4" width="109.55" height="4.57"/>\n    <polygon class="cls-1" points="54.08 64.92 48.82 64.92 48.82 0 54.08 9.5 54.08 64.92"/>\n    <rect class="cls-1" x="87.48" y="36.78" width="5.26" height="28.13"/>\n    <path class="cls-1" d="M70.21,65.83a13.56,13.56,0,1,1-27.11,0"/>\n    <path class="cls-1" d="M98.46,65.83a13.56,13.56,0,0,1-27.11,0"/>\n    <path class="cls-2" d="M48.1,70l-2.68-3.45a1.39,1.39,0,1,1,2.4-1.39l.28.48.28-.48a1.39,1.39,0,1,1,2.4,1.39Z"/>\n    <path class="cls-2" d="M54,77.06l-2.68-3.45a1.39,1.39,0,1,1,2.4-1.39l.28.48.28-.48a1.39,1.39,0,1,1,2.4,1.39Z"/>\n    <path class="cls-2" d="M61,70.42,58.35,67a1.39,1.39,0,1,1,2.4-1.39l.28.48.28-.48A1.39,1.39,0,1,1,63.71,67Z"/>\n    <path class="cls-2" d="M76.13,69.39l-2.68-3.45a1.39,1.39,0,1,1,2.4-1.39l.28.48.28-.48a1.39,1.39,0,1,1,2.4,1.39Z"/>\n    <path class="cls-2" d="M80.7,76.83,78,73.38A1.39,1.39,0,1,1,80.43,72l.28.48L81,72a1.39,1.39,0,1,1,2.4,1.39Z"/>\n    <path class="cls-2" d="M85.17,69.28l-2.68-3.45a1.39,1.39,0,1,1,2.4-1.39l.28.48.28-.48a1.39,1.39,0,1,1,2.4,1.39Z"/>\n    <path class="cls-2" d="M91,74.77l-2.68-3.45a1.39,1.39,0,1,1,2.4-1.39l.28.48.28-.48a1.39,1.39,0,1,1,2.4,1.39Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.3 36.88">\n    <rect class="cls-1" y="21.04" width="72.3" height="4.27"/>\n    <polygon class="cls-1" points="20.58 23.39 15.68 23.39 15.68 0 20.58 6.33 20.58 23.39"/>\n    <polygon class="cls-1" points="56.62 23.39 51.72 23.39 51.72 6.83 56.62 0.67 56.62 23.39"/>\n    <path class="cls-1" d="M35.62,24.24a12.64,12.64,0,1,1-25.28,0"/>\n    <path class="cls-1" d="M62,24.24a12.64,12.64,0,1,1-25.28,0"/>\n    <path class="cls-2" d="M15,28.09l-2.5-3.22a1.29,1.29,0,1,1,2.24-1.29L15,24l.26-.45a1.29,1.29,0,1,1,2.24,1.29Z"/>\n    <path class="cls-2" d="M20.55,34.71l-2.5-3.22a1.29,1.29,0,1,1,2.24-1.29l.26.45.26-.45A1.29,1.29,0,1,1,23,31.49Z"/>\n    <path class="cls-2" d="M27.06,28.52l-2.5-3.22A1.29,1.29,0,1,1,26.8,24l.26.45.26-.45a1.29,1.29,0,1,1,2.24,1.29Z"/>\n    <path class="cls-2" d="M41.14,27.56l-2.5-3.22a1.29,1.29,0,1,1,2.24-1.29l.26.45.26-.45a1.29,1.29,0,1,1,2.24,1.29Z"/>\n    <path class="cls-2" d="M45.4,34.49l-2.5-3.22A1.29,1.29,0,1,1,45.14,30l.26.45.26-.45a1.29,1.29,0,1,1,2.24,1.29Z"/>\n    <path class="cls-2" d="M49.56,27.45l-2.5-3.22a1.29,1.29,0,1,1,2.24-1.29l.26.45.26-.45a1.29,1.29,0,1,1,2.24,1.29Z"/>\n    <path class="cls-2" d="M55,32.57l-2.5-3.22a1.29,1.29,0,1,1,2.24-1.29l.26.45.26-.45a1.29,1.29,0,1,1,2.24,1.29Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.67 144.21">\n    <polygon class="cls-1" points="121.67 42.83 0 42.83 5.67 33.24 116 33.24 121.67 42.83"/>\n    <polygon class="cls-1" points="26.13 38.52 15.11 38.52 15.11 0.33 26.13 6 26.13 38.52"/>\n    <polygon class="cls-1" points="107.15 38.52 96.12 38.52 96.12 6.33 107.15 0 107.15 38.52"/>\n    <path class="cls-1" d="M59.93,40.43a28.41,28.41,0,0,1-56.82,0"/>\n    <path class="cls-1" d="M119.15,40.43a28.41,28.41,0,1,1-56.82,0"/>\n    <path class="cls-2" d="M13.59,49.1,8,41.87A2.91,2.91,0,1,1,13,39l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M26.06,64l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M40.69,50.06l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M72.34,47.9l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M81.93,63.48l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M91.28,47.66l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M103.51,59.17l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <rect class="cls-1" x="2.88" y="108.61" width="116.88" height="9.59"/>\n    <polygon class="cls-1" points="26.13 113.88 15.11 113.88 15.11 79.35 26.13 85.98 26.13 113.88"/>\n    <polygon class="cls-1" points="107.15 113.88 96.12 113.88 96.12 85.59 107.15 79.74 107.15 113.88"/>\n    <path class="cls-1" d="M59.93,115.79a28.41,28.41,0,0,1-56.82,0"/>\n    <path class="cls-1" d="M119.15,115.79a28.41,28.41,0,0,1-56.82,0"/>\n    <path class="cls-2" d="M13.59,124.46,8,117.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M26.06,139.32l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M40.69,125.42l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M72.34,123.26,66.72,116a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1A2.91,2.91,0,1,1,78,116Z"/>\n    <path class="cls-2" d="M81.93,138.84l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M91.28,123l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M103.51,134.53l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.13 58.25">\n    <polygon class="cls-1" points="79.13 44.12 0 44.12 1.5 38.91 77.38 38.91 79.13 44.12"/>\n    <polygon class="cls-1" points="20.45 41.77 14.46 41.77 14.46 8.38 20.63 0 20.45 41.77"/>\n    <polygon class="cls-1" points="64.48 41.77 58.49 41.77 58.49 0 64.48 7.75 64.48 41.77"/>\n    <path class="cls-1" d="M38.82,42.81a15.44,15.44,0,1,1-30.88,0"/>\n    <path class="cls-1" d="M71,42.81a15.44,15.44,0,1,1-30.88,0"/>\n    <path class="cls-2" d="M13.64,47.52l-3.05-3.93A1.58,1.58,0,1,1,13.32,42l.32.55L14,42a1.58,1.58,0,1,1,2.73,1.58Z"/>\n    <path class="cls-2" d="M20.42,55.6l-3.05-3.93a1.58,1.58,0,1,1,2.73-1.58l.32.55.32-.55a1.58,1.58,0,1,1,2.73,1.58Z"/>\n    <path class="cls-2" d="M28.36,48l-3.05-3.93A1.58,1.58,0,1,1,28,42.53l.32.55.32-.55a1.58,1.58,0,1,1,2.73,1.58Z"/>\n    <path class="cls-2" d="M45.56,46.87l-3.05-3.93a1.58,1.58,0,1,1,2.73-1.58l.32.55.32-.55a1.58,1.58,0,1,1,2.73,1.58Z"/>\n    <path class="cls-2" d="M50.77,55.34l-3.05-3.93a1.58,1.58,0,1,1,2.73-1.58l.32.55.32-.55a1.58,1.58,0,1,1,2.73,1.58Z"/>\n    <path class="cls-2" d="M55.85,46.74,52.8,42.81a1.58,1.58,0,1,1,2.73-1.58l.32.55.32-.55a1.58,1.58,0,1,1,2.73,1.58Z"/>\n    <path class="cls-2" d="M62.5,53l-3.05-3.93a1.58,1.58,0,1,1,2.73-1.58l.32.55.32-.55a1.58,1.58,0,1,1,2.73,1.58Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.87 45.46">\n    <rect class="cls-1" y="23.72" width="70.87" height="5.85"/>\n    <polygon class="cls-1" points="14.07 26.94 7.34 26.94 7.34 7 14.07 0 14.07 26.94"/>\n    <polygon class="cls-1" points="63.54 26.94 56.81 26.94 56.81 0.67 63.54 6.67 63.54 26.94"/>\n    <path class="cls-1" d="M34.71,28.11A17.35,17.35,0,1,1,0,28.11"/>\n    <path class="cls-1" d="M70.87,28.11a17.35,17.35,0,1,1-34.69,0"/>\n    <path class="cls-2" d="M6.42,33.4,3,29a1.77,1.77,0,1,1,3.07-1.77l.36.62.36-.62A1.77,1.77,0,1,1,9.85,29Z"/>\n    <path class="cls-2" d="M14,42.48,10.6,38.06a1.77,1.77,0,1,1,3.07-1.77l.36.62.36-.62a1.77,1.77,0,1,1,3.07,1.77Z"/>\n    <path class="cls-2" d="M23,34l-3.43-4.41a1.77,1.77,0,1,1,3.07-1.77l.36.62.36-.62a1.77,1.77,0,1,1,3.07,1.77Z"/>\n    <path class="cls-2" d="M42.28,32.67l-3.43-4.41a1.77,1.77,0,1,1,3.07-1.77l.36.62.36-.62a1.77,1.77,0,1,1,3.07,1.77Z"/>\n    <path class="cls-2" d="M48.14,42.18l-3.43-4.41A1.77,1.77,0,1,1,47.78,36l.36.62L48.5,36a1.77,1.77,0,1,1,3.07,1.77Z"/>\n    <path class="cls-2" d="M53.85,32.52l-3.43-4.41a1.77,1.77,0,1,1,3.07-1.77l.36.62.36-.62a1.77,1.77,0,1,1,3.07,1.77Z"/>\n    <path class="cls-2" d="M61.32,39.55l-3.43-4.41A1.77,1.77,0,1,1,61,33.36l.36.62.36-.62a1.77,1.77,0,1,1,3.07,1.77Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.83 137.75">\n    <path class="cls-1" d="M332.83,111.74,0,112l1.77-9.69,329.33-.08Z"/>\n    <polygon class="cls-1" points="158.35 107.43 147.33 107.43 67.84 4.67 75.53 0 158.35 107.43"/>\n    <polygon class="cls-1" points="239.37 107.43 228.34 107.43 292.5 28.33 298.2 35 239.37 107.43"/>\n    <path class="cls-1" d="M192.15,109.34a28.41,28.41,0,1,1-56.82,0"/>\n    <path class="cls-1" d="M251.37,109.34a28.41,28.41,0,1,1-56.82,0"/>\n    <path class="cls-2" d="M145.81,118l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M158.28,132.87l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M172.91,119l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M204.56,116.81l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M214.15,132.39l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M223.5,116.57l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M235.73,128.08l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 144.43">\n    <polygon class="cls-1" points="220 122.09 0 122.09 2 113.85 218.83 113.67 220 122.09"/>\n    <polygon class="cls-1" points="200.24 118.38 190.76 118.38 190.76 0 200.24 30 200.24 118.38"/>\n    <polygon class="cls-1" points="27.96 118.38 18.49 118.38 18.49 36.5 27.96 5.17 27.96 118.38"/>\n    <path class="cls-1" d="M110,120a24.4,24.4,0,0,1-48.8,0"/>\n    <path class="cls-1" d="M160.85,120a24.4,24.4,0,0,1-48.8,0"/>\n    <path class="cls-2" d="M70.19,127.47l-4.82-6.21a2.5,2.5,0,1,1,4.32-2.5l.5.87.5-.87a2.5,2.5,0,1,1,4.32,2.5Z"/>\n    <path class="cls-2" d="M80.9,140.23,76.08,134a2.5,2.5,0,1,1,4.32-2.5l.5.87.5-.87a2.5,2.5,0,1,1,4.32,2.5Z"/>\n    <path class="cls-2" d="M93.46,128.29l-4.82-6.21a2.5,2.5,0,1,1,4.32-2.5l.5.87.5-.87a2.5,2.5,0,1,1,4.32,2.5Z"/>\n    <path class="cls-2" d="M120.64,126.44l-4.82-6.21a2.5,2.5,0,1,1,4.32-2.5l.5.87.5-.87a2.5,2.5,0,1,1,4.32,2.5Z"/>\n    <path class="cls-2" d="M128.88,139.82l-4.82-6.21a2.5,2.5,0,1,1,4.32-2.5l.5.87.5-.87a2.5,2.5,0,1,1,4.32,2.5Z"/>\n    <path class="cls-2" d="M136.91,126.23,132.09,120a2.5,2.5,0,1,1,4.32-2.5l.5.87.5-.87a2.5,2.5,0,1,1,4.32,2.5Z"/>\n    <path class="cls-2" d="M147.41,136.12l-4.82-6.21a2.5,2.5,0,1,1,4.32-2.5l.5.87.5-.87a2.5,2.5,0,1,1,4.32,2.5Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174 62.44">\n    <rect class="cls-1" y="26.84" width="174" height="9.59"/>\n    <polygon class="cls-1" points="70.85 32.11 59.83 32.11 12.97 0 24 0 70.85 32.11"/>\n    <polygon class="cls-1" points="151.87 32.11 140.84 32.11 173.97 3.5 173.5 13.5 151.87 32.11"/>\n    <path class="cls-1" d="M104.65,34a28.41,28.41,0,1,1-56.82,0"/>\n    <path class="cls-1" d="M163.87,34A28.41,28.41,0,1,1,107,34"/>\n    <path class="cls-2" d="M58.32,42.69,52.7,35.46a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M70.78,57.55l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M85.41,43.65l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M117.06,41.49l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M126.65,57.07,121,49.85a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M136,41.25,130.38,34a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n    <path class="cls-2" d="M148.23,52.76l-5.62-7.23a2.91,2.91,0,1,1,5-2.91l.58,1,.58-1a2.91,2.91,0,1,1,5,2.91Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="bra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.47 35.97">\n    <rect class="cls-1" y="21.63" width="65.47" height="3.86"/>\n    <rect class="cls-1" x="14.2" width="4.44" height="23.76"/>\n    <rect class="cls-1" x="46.84" width="4.44" height="23.76"/>\n    <path class="cls-1" d="M32.25,24.53a11.45,11.45,0,1,1-22.89,0"/>\n    <path class="cls-1" d="M56.11,24.53a11.45,11.45,0,0,1-22.89,0"/>\n    <path class="cls-2" d="M13.59,28l-2.26-2.91a1.17,1.17,0,1,1,2-1.17l.23.41.23-.41a1.17,1.17,0,1,1,2,1.17Z"/>\n    <path class="cls-2" d="M18.61,34l-2.26-2.91a1.17,1.17,0,1,1,2-1.17l.23.41.23-.41a1.17,1.17,0,1,1,2,1.17Z"/>\n    <path class="cls-2" d="M24.5,28.4l-2.26-2.91a1.17,1.17,0,1,1,2-1.17l.23.41.23-.41a1.17,1.17,0,1,1,2,1.17Z"/>\n    <path class="cls-2" d="M37.25,27.53,35,24.62a1.17,1.17,0,1,1,2-1.17l.23.41.23-.41a1.17,1.17,0,1,1,2,1.17Z"/>\n    <path class="cls-2" d="M41.12,33.81,38.85,30.9a1.17,1.17,0,1,1,2-1.17l.23.41.23-.41a1.17,1.17,0,1,1,2,1.17Z"/>\n    <path class="cls-2" d="M44.88,27.44l-2.26-2.91a1.17,1.17,0,1,1,2-1.17l.23.41.23-.41a1.17,1.17,0,1,1,2,1.17Z"/>\n    <path class="cls-2" d="M49.81,32.07l-2.26-2.91a1.17,1.17,0,1,1,2-1.17l.23.41L50,28a1.17,1.17,0,1,1,2,1.17Z"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/bra/bra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], BraComponent);
    return BraComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=bra.js.map

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var WigComponent = /** @class */ (function (_super) {
    __extends(WigComponent, _super);
    function WigComponent(element) {
        return _super.call(this, 'wig', element.nativeElement) || this;
    }
    WigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'wig',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/wig/wig.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg class="wig" width="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.69 170.82">\n         <circle class="cls-1" cx="16.76" cy="65.74" r="13.24"/>\n         <circle class="cls-1" cx="91.76" cy="13.24" r="13.24"/>\n         <circle class="cls-1" cx="91.26" cy="31.74" r="13.24"/>\n         <circle class="cls-1" cx="108.76" cy="43.74" r="13.24"/>\n         <circle class="cls-1" cx="40.59" cy="20.57" r="15.26"/>\n         <circle class="cls-1" cx="20" cy="42.5" r="20"/>\n         <circle class="cls-1" cx="64.5" cy="21" r="20"/>\n         <circle class="cls-1" cx="116.5" cy="21.5" r="20"/>\n         <circle class="cls-1" cx="150.5" cy="45" r="20"/>\n         <circle class="cls-1" cx="129" cy="46" r="20"/>\n         <circle class="cls-1" cx="45.64" cy="39.34" r="12.03"/>\n         <circle class="cls-1" cx="143.64" cy="25.34" r="12.03"/>\n         <circle class="cls-1" cx="145.14" cy="37.84" r="12.03"/>\n         <circle class="cls-1" cx="149.14" cy="49.34" r="12.03"/>\n         <circle class="cls-1" cx="145.5" cy="63" r="12.03"/>\n         <circle class="cls-1" cx="159.36" cy="67.36" r="10.06"/>\n         <circle class="cls-1" cx="159.06" cy="82.06" r="7.61"/>\n         <circle class="cls-1" cx="160.5" cy="94" r="7.61"/>\n         <circle class="cls-1" cx="13" cy="100.5" r="5.22"/>\n         <circle class="cls-1" cx="13" cy="110.28" r="5.22"/>\n         <circle class="cls-1" cx="13" cy="118.86" r="5.22"/>\n         <circle class="cls-1" cx="161" cy="108.19" r="5.22"/>\n         <circle class="cls-1" cx="161" cy="117.43" r="5.22"/>\n         <ellipse class="cls-1" cx="161.1" cy="136.43" rx="5.32" ry="15.13"/>\n         <circle class="cls-1" cx="13.48" cy="84.45" r="8.89"/>\n         <polygon class="cls-2" points="16.48 96.46 3.48 101.17 3.48 88.17 16.48 92.88 16.48 96.46"/>\n         <polygon class="cls-2" points="9.69 92.88 22.69 88.17 22.69 101.17 9.69 96.46 9.69 92.88"/>\n         <polygon class="cls-2" points="164 102.74 151 107.46 151 94.46 164 99.17 164 102.74"/>\n         <polygon class="cls-2" points="157.21 99.17 170.21 94.46 170.21 107.46 157.21 102.74 157.21 99.17"/>\n         <path class="cls-1" d="M13,127.16c-10.58,0-6.43,17.89,0,24.32C19.45,145.05,24.07,127.16,13,127.16Z"/>\n         <polygon class="cls-2" points="16.48 128.46 3.48 133.17 3.48 120.17 16.48 124.88 16.48 128.46"/>\n         <polygon class="cls-2" points="9.69 124.88 22.69 120.17 22.69 133.17 9.69 128.46 9.69 124.88"/>\n         <path class="cls-1" d="M161,146.49c-10.58,0-6.43,17.89,0,24.32C167.45,164.38,172.07,146.49,161,146.49Z"/>\n         <polygon class="cls-2" points="164.48 147.79 151.48 152.5 151.48 139.5 164.48 144.21 164.48 147.79"/>\n         <polygon class="cls-2" points="157.69 144.21 170.69 139.5 170.69 152.5 157.69 147.79 157.69 144.21"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="wig--color--white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.71 203.3">\n   <circle class="cls-1" cx="15.83" cy="78.62" r="15.83"/>\n   <circle class="cls-1" cx="112.54" cy="15.83" r="15.83"/>\n   <circle class="cls-1" cx="111.94" cy="37.96" r="15.83"/>\n   <circle class="cls-1" cx="132.87" cy="52.31" r="15.83"/>\n   <circle class="cls-1" cx="51.34" cy="24.61" r="18.25"/>\n   <circle class="cls-1" cx="26.71" cy="50.83" r="23.92"/>\n   <circle class="cls-1" cx="79.94" cy="25.12" r="23.92"/>\n   <circle class="cls-1" cx="142.13" cy="25.71" r="23.92"/>\n   <circle class="cls-1" cx="182.79" cy="53.82" r="23.92"/>\n   <circle class="cls-1" cx="155.07" cy="60.02" r="23.92"/>\n   <circle class="cls-1" cx="57.38" cy="47.06" r="14.38"/>\n   <circle class="cls-1" cx="174.59" cy="30.31" r="14.38"/>\n   <circle class="cls-1" cx="176.38" cy="45.26" r="14.38"/>\n   <circle class="cls-1" cx="181.17" cy="59.02" r="14.38"/>\n   <circle class="cls-1" cx="176.81" cy="75.35" r="14.38"/>\n   <circle class="cls-1" cx="193.38" cy="80.56" r="12.03"/>\n   <circle class="cls-1" cx="183.02" cy="97.14" r="9.11"/>\n   <circle class="cls-1" cx="184.75" cy="111.42" r="9.11"/>\n   <circle class="cls-1" cx="185.34" cy="128.39" r="6.24"/>\n   <circle class="cls-1" cx="185.34" cy="139.44" r="6.24"/>\n   <ellipse class="cls-1" cx="185.46" cy="162.17" rx="6.36" ry="18.09"/>\n   <circle class="cls-1" cx="16.92" cy="101" r="10.64"/>\n   <polygon class="cls-2" points="188.93 121.88 173.38 127.52 173.38 111.97 188.93 117.6 188.93 121.88"/>\n   <polygon class="cls-2" points="180.8 117.6 196.35 111.97 196.35 127.52 180.8 121.88 180.8 117.6"/>\n   <path class="cls-1" d="M185.37,174.2c-12.65,0-7.69,21.4,0,29.09C193.06,195.6,198.58,174.2,185.37,174.2Z"/>\n   <polygon class="cls-2" points="189.51 175.76 173.96 181.39 173.96 165.84 189.51 171.48 189.51 175.76"/>\n   <polygon class="cls-2" points="181.38 171.48 196.93 165.84 196.93 181.39 181.38 175.76 181.38 171.48"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="wig--color--white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.31 256.13">\n   <circle class="cls-1" cx="16.76" cy="65.74" r="13.24"/>\n   <circle class="cls-1" cx="91.76" cy="13.24" r="13.24"/>\n   <circle class="cls-1" cx="91.26" cy="31.74" r="13.24"/>\n   <circle class="cls-1" cx="108.76" cy="43.74" r="13.24"/>\n   <circle class="cls-1" cx="40.59" cy="20.57" r="15.26"/>\n   <circle class="cls-1" cx="20" cy="42.5" r="20"/>\n   <circle class="cls-1" cx="64.5" cy="21" r="20"/>\n   <circle class="cls-1" cx="116.5" cy="21.5" r="20"/>\n   <circle class="cls-1" cx="150.5" cy="45" r="20"/>\n   <circle class="cls-1" cx="129" cy="46" r="20"/>\n   <circle class="cls-1" cx="45.64" cy="39.34" r="12.03"/>\n   <circle class="cls-1" cx="143.64" cy="25.34" r="12.03"/>\n   <circle class="cls-1" cx="145.14" cy="37.84" r="12.03"/>\n   <circle class="cls-1" cx="149.14" cy="49.34" r="12.03"/>\n   <circle class="cls-1" cx="145.5" cy="63" r="12.03"/>\n   <circle class="cls-1" cx="159.36" cy="67.36" r="10.06"/>\n   <circle class="cls-1" cx="155.98" cy="85.64" r="14.63"/>\n   <circle class="cls-1" cx="158.75" cy="108.57" r="14.63"/>\n   <circle class="cls-1" cx="13" cy="100.5" r="5.22"/>\n   <circle class="cls-1" cx="13" cy="110.28" r="5.22"/>\n   <circle class="cls-1" cx="13" cy="118.86" r="5.22"/>\n   <circle class="cls-1" cx="159.71" cy="135.83" r="10.03"/>\n   <circle class="cls-1" cx="159.71" cy="153.58" r="10.03"/>\n   <ellipse class="cls-1" cx="159.9" cy="190.08" rx="10.22" ry="29.06"/>\n   <circle class="cls-1" cx="13.48" cy="84.45" r="8.89"/>\n   <polygon class="cls-2" points="16.48 96.46 3.48 101.17 3.48 88.17 16.48 92.88 16.48 96.46"/>\n   <polygon class="cls-2" points="9.69 92.88 22.69 88.17 22.69 101.17 9.69 96.46 9.69 92.88"/>\n   <polygon class="cls-2" points="165.47 125.37 140.5 134.42 140.5 109.45 165.47 118.5 165.47 125.37"/>\n   <polygon class="cls-2" points="152.42 118.5 177.39 109.45 177.39 134.42 152.42 125.37 152.42 118.5"/>\n   <path class="cls-1" d="M13,127.16c-10.58,0-6.43,17.89,0,24.32C19.45,145.05,24.07,127.16,13,127.16Z"/>\n   <polygon class="cls-2" points="16.48 128.46 3.48 133.17 3.48 120.17 16.48 124.88 16.48 128.46"/>\n   <polygon class="cls-2" points="9.69 124.88 22.69 120.17 22.69 133.17 9.69 128.46 9.69 124.88"/>\n   <path class="cls-1" d="M159.74,209.4c-20.32,0-12.35,34.37,0,46.72C172.1,243.77,181,209.4,159.74,209.4Z"/>\n   <polygon class="cls-2" points="166.4 211.9 141.42 220.95 141.42 195.97 166.4 205.02 166.4 211.9"/>\n   <polygon class="cls-2" points="153.34 205.02 178.31 195.97 178.31 220.95 153.34 211.9 153.34 205.02"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="wig--color--yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.65 119.74">\n   <circle class="cls-1" cx="11.75" cy="46.08" r="9.28"/>\n   <circle class="cls-1" cx="64.32" cy="9.28" r="9.28"/>\n   <circle class="cls-1" cx="63.97" cy="22.25" r="9.28"/>\n   <circle class="cls-1" cx="76.24" cy="30.66" r="9.28"/>\n   <circle class="cls-1" cx="28.45" cy="14.42" r="10.69"/>\n   <circle class="cls-1" cx="14.02" cy="29.79" r="14.02"/>\n   <circle class="cls-1" cx="45.21" cy="14.72" r="14.02"/>\n   <circle class="cls-1" cx="81.66" cy="15.07" r="14.02"/>\n   <circle class="cls-1" cx="105.5" cy="31.54" r="14.02"/>\n   <circle class="cls-1" cx="90.42" cy="32.25" r="14.02"/>\n   <circle class="cls-1" cx="31.99" cy="27.58" r="8.43"/>\n   <circle class="cls-1" cx="100.69" cy="17.77" r="8.43"/>\n   <circle class="cls-1" cx="101.74" cy="26.53" r="8.43"/>\n   <circle class="cls-1" cx="104.55" cy="34.59" r="8.43"/>\n   <circle class="cls-1" cx="101.99" cy="44.16" r="8.43"/>\n   <circle class="cls-1" cx="108.7" cy="48.22" r="7.05"/>\n   <circle class="cls-1" cx="111.5" cy="57.52" r="5.34"/>\n   <circle class="cls-1" cx="112.51" cy="65.89" r="5.34"/>\n   <circle class="cls-1" cx="9.11" cy="70.45" r="3.66"/>\n   <circle class="cls-1" cx="9.11" cy="77.3" r="3.66"/>\n   <circle class="cls-1" cx="9.11" cy="83.32" r="3.66"/>\n   <circle class="cls-1" cx="112.86" cy="75.84" r="3.66"/>\n   <circle class="cls-1" cx="112.86" cy="82.32" r="3.66"/>\n   <ellipse class="cls-1" cx="112.93" cy="95.64" rx="3.73" ry="10.6"/>\n   <circle class="cls-1" cx="9.45" cy="59.2" r="6.23"/>\n   <polygon class="cls-2" points="11.55 67.61 2.44 70.92 2.44 61.8 11.55 65.11 11.55 67.61"/>\n   <polygon class="cls-2" points="6.79 65.11 15.9 61.8 15.9 70.92 6.79 67.61 6.79 65.11"/>\n   <polygon class="cls-2" points="114.96 72.02 105.85 75.33 105.85 66.21 114.96 69.51 114.96 72.02"/>\n   <polygon class="cls-2" points="110.2 69.51 119.31 66.21 119.31 75.33 110.2 72.02 110.2 69.51"/>\n   <path class="cls-1" d="M9.13,89.14c-7.41,0-4.51,12.54,0,17.05C13.63,101.68,16.87,89.14,9.13,89.14Z"/>\n   <polygon class="cls-2" points="11.55 90.05 2.44 93.35 2.44 84.23 11.55 87.54 11.55 90.05"/>\n   <polygon class="cls-2" points="6.79 87.54 15.9 84.23 15.9 93.35 6.79 90.05 6.79 87.54"/>\n   <path class="cls-1" d="M112.87,102.69c-7.41,0-4.51,12.54,0,17.05C117.38,115.23,120.62,102.69,112.87,102.69Z"/>\n   <polygon class="cls-2" points="115.3 103.6 106.19 106.9 106.19 97.79 115.3 101.09 115.3 103.6"/>\n   <polygon class="cls-2" points="110.53 101.09 119.65 97.79 119.65 106.9 110.53 103.6 110.53 101.09"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="wig--color--white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.64 186.86">\n   <circle class="cls-1" cx="14.53" cy="71.31" r="8.09"/>\n   <circle class="cls-1" cx="60.38" cy="39.21" r="8.09"/>\n   <circle class="cls-1" cx="60.08" cy="50.52" r="8.09"/>\n   <circle class="cls-1" cx="70.78" cy="57.86" r="8.09"/>\n   <circle class="cls-1" cx="29.1" cy="43.69" r="9.33"/>\n   <circle class="cls-1" cx="18.74" cy="60.23" r="12.23"/>\n   <circle class="cls-1" cx="41.74" cy="28.73" r="12.23"/>\n   <circle class="cls-1" cx="53.24" cy="12.23" r="12.23"/>\n   <circle class="cls-1" cx="53.97" cy="28.73" r="12.23"/>\n   <circle class="cls-1" cx="69.24" cy="24.73" r="12.23"/>\n   <circle class="cls-1" cx="86.24" cy="33.23" r="12.23"/>\n   <circle class="cls-1" cx="37.74" cy="15.23" r="12.23"/>\n   <circle class="cls-1" cx="25.74" cy="27.73" r="12.23"/>\n   <circle class="cls-1" cx="43.72" cy="43.95" r="12.23"/>\n   <circle class="cls-1" cx="75.51" cy="44.26" r="12.23"/>\n   <circle class="cls-1" cx="96.3" cy="58.63" r="12.23"/>\n   <circle class="cls-1" cx="83.15" cy="59.24" r="12.23"/>\n   <circle class="cls-1" cx="32.19" cy="55.17" r="7.35"/>\n   <circle class="cls-1" cx="92.1" cy="46.61" r="7.35"/>\n   <circle class="cls-1" cx="93.02" cy="54.25" r="7.35"/>\n   <circle class="cls-1" cx="95.47" cy="61.28" r="7.35"/>\n   <circle class="cls-1" cx="93.24" cy="69.63" r="7.35"/>\n   <circle class="cls-1" cx="99.24" cy="75.73" r="6.15"/>\n   <circle class="cls-1" cx="101.53" cy="81.29" r="4.66"/>\n   <circle class="cls-1" cx="102.41" cy="88.59" r="4.66"/>\n   <circle class="cls-1" cx="14.24" cy="110.58" r="7.81"/>\n   <circle class="cls-1" cx="14.24" cy="125.21" r="7.81"/>\n   <circle class="cls-1" cx="14.24" cy="138.05" r="7.81"/>\n   <circle class="cls-1" cx="102.72" cy="97.26" r="3.19"/>\n   <circle class="cls-1" cx="102.72" cy="102.91" r="3.19"/>\n   <ellipse class="cls-1" cx="102.78" cy="114.53" rx="3.25" ry="9.25"/>\n   <circle class="cls-1" cx="14.96" cy="86.57" r="13.3"/>\n   <polygon class="cls-2" points="19.45 104.53 0 111.58 0 92.13 19.45 99.18 19.45 104.53"/>\n   <polygon class="cls-2" points="9.28 99.18 28.73 92.13 28.73 111.58 9.28 104.53 9.28 99.18"/>\n   <polygon class="cls-2" points="104.55 93.93 96.6 96.81 96.6 88.86 104.55 91.75 104.55 93.93"/>\n   <polygon class="cls-2" points="100.4 91.75 108.34 88.86 108.34 96.81 100.4 93.93 100.4 91.75"/>\n   <path class="cls-1" d="M14.27,150.47c-15.83,0-9.62,26.77,0,36.39C23.89,177.24,30.8,150.47,14.27,150.47Z"/>\n   <polygon class="cls-2" points="19.45 152.41 0 159.46 0 140.01 19.45 147.06 19.45 152.41"/>\n   <polygon class="cls-2" points="9.28 147.06 28.73 140.01 28.73 159.46 9.28 152.41 9.28 147.06"/>\n   <path class="cls-1" d="M102.73,120.68c-6.47,0-3.93,10.94,0,14.87C106.66,131.62,109.48,120.68,102.73,120.68Z"/>\n   <polygon class="cls-2" points="104.85 121.47 96.9 124.35 96.9 116.41 104.85 119.29 104.85 121.47"/>\n   <polygon class="cls-2" points="100.69 119.29 108.64 116.41 108.64 124.35 100.69 121.47 100.69 119.29"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="wig" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188.17 188.32">\n   <circle class="cls-1" cx="18.48" cy="72.47" r="14.6"/>\n   <circle class="cls-1" cx="101.16" cy="14.6" r="14.6"/>\n   <circle class="cls-1" cx="100.61" cy="34.99" r="14.6"/>\n   <circle class="cls-1" cx="119.9" cy="48.22" r="14.6"/>\n   <circle class="cls-1" cx="44.75" cy="22.68" r="16.82"/>\n   <circle class="cls-1" cx="22.05" cy="46.85" r="22.05"/>\n   <circle class="cls-1" cx="71.11" cy="23.15" r="22.05"/>\n   <circle class="cls-1" cx="78.89" cy="44.33" r="22.05"/>\n   <circle class="cls-1" cx="105.39" cy="47.33" r="22.05"/>\n   <circle class="cls-1" cx="159.39" cy="78.83" r="22.05"/>\n   <circle class="cls-1" cx="128.44" cy="23.7" r="22.05"/>\n   <circle class="cls-1" cx="165.92" cy="49.61" r="22.05"/>\n   <circle class="cls-1" cx="142.21" cy="50.72" r="22.05"/>\n   <circle class="cls-1" cx="50.32" cy="43.37" r="13.26"/>\n   <circle class="cls-1" cx="38.73" cy="66.94" r="13.26"/>\n   <circle class="cls-1" cx="58.73" cy="56.94" r="13.26"/>\n   <circle class="cls-1" cx="158.36" cy="27.94" r="13.26"/>\n   <circle class="cls-1" cx="160.01" cy="41.72" r="13.26"/>\n   <circle class="cls-1" cx="164.42" cy="54.4" r="13.26"/>\n   <circle class="cls-1" cx="160.41" cy="69.45" r="13.26"/>\n   <circle class="cls-1" cx="27.89" cy="85.33" r="13.26"/>\n   <circle class="cls-1" cx="175.68" cy="74.26" r="11.09"/>\n   <circle class="cls-1" cx="175.35" cy="90.47" r="8.4"/>\n   <circle class="cls-1" cx="176.94" cy="103.63" r="8.4"/>\n   <circle class="cls-1" cx="177.49" cy="119.27" r="5.76"/>\n   <circle class="cls-1" cx="177.49" cy="129.46" r="5.76"/>\n   <ellipse class="cls-1" cx="177.6" cy="150.41" rx="5.86" ry="16.68"/>\n   <circle class="cls-1" cx="14.86" cy="93.1" r="9.8"/>\n   <polygon class="cls-2" points="180.8 113.27 166.47 118.46 166.47 104.13 180.8 109.33 180.8 113.27"/>\n   <polygon class="cls-2" points="173.31 109.33 187.64 104.13 187.64 118.46 173.31 113.27 173.31 109.33"/>\n   <path class="cls-1" d="M177.51,161.5c-11.66,0-7.09,19.73,0,26.82C184.6,181.23,189.69,161.5,177.51,161.5Z"/>\n   <polygon class="cls-2" points="181.33 162.93 167 168.12 167 153.79 181.33 158.99 181.33 162.93"/>\n   <polygon class="cls-2" points="173.84 158.99 188.17 153.79 188.17 168.12 173.84 162.93 173.84 158.99"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="wig" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.24 243.77">\n   <circle class="cls-1" cx="15.24" cy="59.78" r="12.04"/>\n   <circle class="cls-1" cx="83.44" cy="12.04" r="12.04"/>\n   <circle class="cls-1" cx="82.99" cy="28.86" r="12.04"/>\n   <circle class="cls-1" cx="98.9" cy="39.77" r="12.04"/>\n   <circle class="cls-1" cx="36.91" cy="18.71" r="13.87"/>\n   <circle class="cls-1" cx="18.19" cy="38.65" r="18.19"/>\n   <circle class="cls-1" cx="58.65" cy="19.1" r="18.19"/>\n   <circle class="cls-1" cx="105.94" cy="19.55" r="18.19"/>\n   <circle class="cls-1" cx="136.85" cy="40.92" r="18.19"/>\n   <circle class="cls-1" cx="117.3" cy="41.83" r="18.19"/>\n   <circle class="cls-1" cx="41.5" cy="35.78" r="10.94"/>\n   <circle class="cls-1" cx="130.62" cy="23.05" r="10.94"/>\n   <circle class="cls-1" cx="131.98" cy="34.41" r="10.94"/>\n   <circle class="cls-1" cx="135.62" cy="44.87" r="10.94"/>\n   <circle class="cls-1" cx="132.31" cy="57.29" r="10.94"/>\n   <circle class="cls-1" cx="144.91" cy="61.25" r="9.14"/>\n   <circle class="cls-1" cx="143" cy="81.61" r="13.91"/>\n   <circle class="cls-1" cx="145.63" cy="103.42" r="13.91"/>\n   <circle class="cls-1" cx="11.82" cy="91.39" r="4.75"/>\n   <circle class="cls-1" cx="11.82" cy="100.28" r="4.75"/>\n   <circle class="cls-1" cx="11.82" cy="108.08" r="4.75"/>\n   <circle class="cls-1" cx="146.55" cy="129.35" r="9.54"/>\n   <circle class="cls-1" cx="146.55" cy="146.23" r="9.54"/>\n   <ellipse class="cls-1" cx="146.72" cy="180.94" rx="9.72" ry="27.64"/>\n   <circle class="cls-1" cx="12.26" cy="76.79" r="8.09"/>\n   <polygon class="cls-2" points="14.99 87.71 3.17 91.99 3.17 80.17 14.99 84.46 14.99 87.71"/>\n   <polygon class="cls-2" points="8.81 84.46 20.63 80.17 20.63 91.99 8.81 87.71 8.81 84.46"/>\n   <polygon class="cls-2" points="152.03 119.4 128.28 128.01 128.28 104.26 152.03 112.86 152.03 119.4"/>\n   <polygon class="cls-2" points="139.61 112.86 163.36 104.26 163.36 128.01 139.61 119.4 139.61 112.86"/>\n   <path class="cls-1" d="M11.84,115.63c-9.62,0-5.85,16.27,0,22.12C17.69,131.9,21.88,115.63,11.84,115.63Z"/>\n   <polygon class="cls-2" points="14.99 116.81 3.17 121.09 3.17 109.27 14.99 113.56 14.99 116.81"/>\n   <polygon class="cls-2" points="8.81 113.56 20.63 109.27 20.63 121.09 8.81 116.81 8.81 113.56"/>\n   <path class="cls-1" d="M146.58,199.33c-19.33,0-11.75,32.69,0,44.44C158.33,232,166.77,199.33,146.58,199.33Z"/>\n   <polygon class="cls-2" points="152.91 201.7 129.16 210.3 129.16 186.55 152.91 195.16 152.91 201.7"/>\n   <polygon class="cls-2" points="140.49 195.16 164.24 186.55 164.24 210.3 140.49 201.7 140.49 195.16"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="wig" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.5 151.48">\n     <circle class="cls-1" cx="16.76" cy="65.74" r="13.24"/>\n     <circle class="cls-1" cx="91.76" cy="13.24" r="13.24"/>\n     <circle class="cls-1" cx="91.26" cy="31.74" r="13.24"/>\n     <circle class="cls-1" cx="108.76" cy="43.74" r="13.24"/>\n     <circle class="cls-1" cx="40.59" cy="20.57" r="15.26"/>\n     <circle class="cls-1" cx="20" cy="42.5" r="20"/>\n     <circle class="cls-1" cx="64.5" cy="21" r="20"/>\n     <circle class="cls-1" cx="116.5" cy="21.5" r="20"/>\n     <circle class="cls-1" cx="150.5" cy="45" r="20"/>\n     <circle class="cls-1" cx="140.5" cy="47" r="20"/>\n     <circle class="cls-1" cx="45.64" cy="39.34" r="12.03"/>\n     <circle class="cls-1" cx="143.64" cy="25.34" r="12.03"/>\n     <circle class="cls-1" cx="145.14" cy="37.84" r="12.03"/>\n     <circle class="cls-1" cx="149.14" cy="49.34" r="12.03"/>\n     <circle class="cls-1" cx="13" cy="100.5" r="5.22"/>\n     <circle class="cls-1" cx="13" cy="110.28" r="5.22"/>\n     <circle class="cls-1" cx="13" cy="118.86" r="5.22"/>\n     <circle class="cls-1" cx="13.48" cy="84.45" r="8.89"/>\n     <polygon class="cls-2" points="16.48 96.46 3.48 101.17 3.48 88.17 16.48 92.88 16.48 96.46"/>\n     <polygon class="cls-2" points="9.69 92.88 22.69 88.17 22.69 101.17 9.69 96.46 9.69 92.88"/>\n     <path class="cls-1" d="M13,127.16c-10.58,0-6.43,17.89,0,24.32C19.45,145.05,24.07,127.16,13,127.16Z"/>\n     <polygon class="cls-2" points="16.48 128.46 3.48 133.17 3.48 120.17 16.48 124.88 16.48 128.46"/>\n     <polygon class="cls-2" points="9.69 124.88 22.69 120.17 22.69 133.17 9.69 128.46 9.69 124.88"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="wig--bed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.11 90.18">\n    <circle class="cls-1" cx="8.85" cy="34.71" r="6.99"/>\n    <circle class="cls-1" cx="48.45" cy="6.99" r="6.99"/>\n    <circle class="cls-1" cx="48.18" cy="16.76" r="6.99"/>\n    <circle class="cls-1" cx="57.42" cy="23.09" r="6.99"/>\n    <circle class="cls-1" cx="21.43" cy="10.86" r="8.05"/>\n    <circle class="cls-1" cx="10.56" cy="22.44" r="10.56"/>\n    <circle class="cls-1" cx="34.05" cy="11.09" r="10.56"/>\n    <circle class="cls-1" cx="61.51" cy="11.35" r="10.56"/>\n    <circle class="cls-1" cx="79.46" cy="23.76" r="10.56"/>\n    <circle class="cls-1" cx="68.1" cy="24.29" r="10.56"/>\n    <circle class="cls-1" cx="24.1" cy="20.77" r="6.35"/>\n    <circle class="cls-1" cx="75.84" cy="13.38" r="6.35"/>\n    <circle class="cls-1" cx="76.63" cy="19.98" r="6.35"/>\n    <circle class="cls-1" cx="78.74" cy="26.05" r="6.35"/>\n    <circle class="cls-1" cx="76.82" cy="33.26" r="6.35"/>\n    <circle class="cls-1" cx="84.13" cy="35.56" r="5.31"/>\n    <circle class="cls-1" cx="83.98" cy="43.32" r="4.02"/>\n    <circle class="cls-1" cx="84.74" cy="49.63" r="4.02"/>\n    <circle class="cls-1" cx="6.86" cy="53.06" r="2.76"/>\n    <circle class="cls-1" cx="6.86" cy="58.22" r="2.76"/>\n    <circle class="cls-1" cx="6.86" cy="62.75" r="2.76"/>\n    <circle class="cls-1" cx="85" cy="57.12" r="2.76"/>\n    <circle class="cls-1" cx="85" cy="62" r="2.76"/>\n    <ellipse class="cls-1" cx="85.05" cy="72.03" rx="2.81" ry="7.99"/>\n    <circle class="cls-1" cx="7.12" cy="44.59" r="4.69"/>\n    <polygon class="cls-2" points="8.7 50.92 1.84 53.41 1.84 46.55 8.7 49.03 8.7 50.92"/>\n    <polygon class="cls-2" points="5.11 49.03 11.98 46.55 11.98 53.41 5.11 50.92 5.11 49.03"/>\n    <polygon class="cls-2" points="86.58 54.24 79.72 56.73 79.72 49.87 86.58 52.36 86.58 54.24"/>\n    <polygon class="cls-2" points="83 52.36 89.86 49.87 89.86 56.73 83 54.24 83 52.36"/>\n    <path class="cls-1" d="M6.87,67.13c-5.58,0-3.4,9.45,0,12.84C10.27,76.58,12.71,67.13,6.87,67.13Z"/>\n    <polygon class="cls-2" points="8.7 67.82 1.84 70.31 1.84 63.44 8.7 65.93 8.7 67.82"/>\n    <polygon class="cls-2" points="5.11 65.93 11.98 63.44 11.98 70.31 5.11 67.82 5.11 65.93"/>\n    <path class="cls-1" d="M85,77.34c-5.58,0-3.4,9.45,0,12.84C88.41,86.79,90.84,77.34,85,77.34Z"/>\n    <polygon class="cls-2" points="86.84 78.03 79.97 80.51 79.97 73.65 86.84 76.14 86.84 78.03"/>\n    <polygon class="cls-2" points="83.25 76.14 90.11 73.65 90.11 80.51 83.25 78.03 83.25 76.14"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/wig/wig.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], WigComponent);
    return WigComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=wig.js.map

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LipsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var LipsComponent = /** @class */ (function (_super) {
    __extends(LipsComponent, _super);
    function LipsComponent(element) {
        return _super.call(this, 'lips', element.nativeElement) || this;
    }
    LipsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lips',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/lips/lips.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg width="100" class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.16 54.06">\n   <path class="cls-1" d="M42.35,43.24a6.69,6.69,0,0,1,5.41-2.75H60.5A6.7,6.7,0,0,1,55.3,34v0A6.7,6.7,0,0,0,43.19,30,6.7,6.7,0,0,0,31.08,34a6.7,6.7,0,0,1-5.2,6.52H38A6.54,6.54,0,0,1,42.35,43.24Z"/>\n   <path class="cls-2" d="M62,40.66a6.7,6.7,0,0,1-1.49-.17H47.76a6.69,6.69,0,0,0-5.41,2.75A6.54,6.54,0,0,0,38,40.49H25.88a6.7,6.7,0,0,1-1.49.17h0a6.7,6.7,0,0,1,6.69,6.68v0a6.7,6.7,0,0,0,12.11,3.95A6.7,6.7,0,0,0,55.3,47.36,6.7,6.7,0,0,1,62,40.66h0Z"/>\n   <circle class="cls-3" cx="13.91" cy="13.91" r="13.91"/>\n   <circle class="cls-3" cx="72.24" cy="13.91" r="13.91"/>\n  </svg>\n\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.21 67.13">\n   <circle class="cls-1" cx="11.9" cy="11.9" r="11.9"/>\n   <circle class="cls-1" cx="71.31" cy="11.9" r="11.9"/>\n   <path class="cls-2" d="M40.86,56.31a6.69,6.69,0,0,1,5.41-2.75H59a6.7,6.7,0,0,1-5.2-6.51v0A6.7,6.7,0,0,0,41.7,43.08,6.7,6.7,0,0,0,29.59,47a6.7,6.7,0,0,1-5.2,6.52H36.48A6.54,6.54,0,0,1,40.86,56.31Z"/>\n   <path class="cls-3" d="M60.49,53.73A6.7,6.7,0,0,1,59,53.56H46.27a6.69,6.69,0,0,0-5.41,2.75,6.54,6.54,0,0,0-4.38-2.75H24.38a6.7,6.7,0,0,1-1.49.17h0a6.7,6.7,0,0,1,6.69,6.68v0a6.7,6.7,0,0,0,12.11,3.95A6.7,6.7,0,0,0,53.8,60.43a6.7,6.7,0,0,1,6.69-6.7h0Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.54 76.51">\n    <path class="cls-1" d="M18,65.69a6.69,6.69,0,0,1,5.41-2.75H36.12a6.7,6.7,0,0,1-5.2-6.51v0a6.7,6.7,0,0,0-12.11-3.95A6.7,6.7,0,0,0,6.7,56.41a6.7,6.7,0,0,1-5.2,6.52H13.59A6.54,6.54,0,0,1,18,65.69Z"/>\n    <path class="cls-2" d="M37.6,63.11a6.7,6.7,0,0,1-1.49-.17H23.38A6.69,6.69,0,0,0,18,65.69a6.54,6.54,0,0,0-4.38-2.75H1.5A6.7,6.7,0,0,1,0,63.11H0A6.7,6.7,0,0,1,6.7,69.79v0a6.7,6.7,0,0,0,12.11,3.95,6.7,6.7,0,0,0,12.11-3.95,6.7,6.7,0,0,1,6.69-6.7h0Z"/>\n    <circle class="cls-3" cx="75.63" cy="13.91" r="13.91"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.33 94.6">\n    <circle class="cls-1" cx="13.91" cy="13.91" r="13.91"/>\n    <circle class="cls-1" cx="108.41" cy="29.91" r="13.91"/>\n    <path class="cls-2" d="M59.47,83.77A6.69,6.69,0,0,1,64.88,81H77.62a6.7,6.7,0,0,1-5.2-6.51v0a6.7,6.7,0,0,0-12.11-3.95A6.7,6.7,0,0,0,48.2,74.5,6.7,6.7,0,0,1,43,81H55.09A6.54,6.54,0,0,1,59.47,83.77Z"/>\n    <path class="cls-3" d="M79.1,81.2A6.7,6.7,0,0,1,77.62,81H64.88a6.69,6.69,0,0,0-5.41,2.75A6.54,6.54,0,0,0,55.09,81H43a6.7,6.7,0,0,1-1.49.17h0a6.7,6.7,0,0,1,6.69,6.68v0a6.7,6.7,0,0,0,12.11,3.95A6.7,6.7,0,0,0,72.42,87.9a6.7,6.7,0,0,1,6.69-6.7h0Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.13 43.11">\n    <path class="cls-1" d="M28.13,34.9a5.08,5.08,0,0,1,4.11-2.09h9.67A5.09,5.09,0,0,1,38,27.87h0a5.09,5.09,0,0,0-9.2-3,5.09,5.09,0,0,0-9.2,3,5.09,5.09,0,0,1-3.95,5H24.8A5,5,0,0,1,28.13,34.9Z"/>\n    <path class="cls-2" d="M43,32.94a5.09,5.09,0,0,1-1.13-.13H32.24a5.08,5.08,0,0,0-4.11,2.09,5,5,0,0,0-3.33-2.09H15.62a5.09,5.09,0,0,1-1.13.13h0A5.09,5.09,0,0,1,19.57,38h0a5.09,5.09,0,0,0,9.2,3A5.09,5.09,0,0,0,38,38,5.09,5.09,0,0,1,43,32.94h0Z"/>\n    <circle class="cls-3" cx="10.48" cy="10.48" r="10.48"/>\n    <circle class="cls-3" cx="46.65" cy="10.48" r="10.48"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.83 85.62">\n    <path class="cls-1" d="M36.85,74.8A6.69,6.69,0,0,1,42.26,72H55a6.7,6.7,0,0,1-5.2-6.51v0a6.7,6.7,0,0,0-12.11-3.95,6.7,6.7,0,0,0-12.11,3.95A6.7,6.7,0,0,1,20.38,72H32.47A6.54,6.54,0,0,1,36.85,74.8Z"/>\n    <path class="cls-2" d="M56.49,72.22A6.7,6.7,0,0,1,55,72H42.26a6.69,6.69,0,0,0-5.41,2.75A6.54,6.54,0,0,0,32.47,72H20.38a6.7,6.7,0,0,1-1.49.17h0a6.7,6.7,0,0,1,6.69,6.68v0a6.7,6.7,0,0,0,12.11,3.95A6.7,6.7,0,0,0,49.8,78.92a6.7,6.7,0,0,1,6.69-6.7h0Z"/>\n    <circle class="cls-3" cx="13.91" cy="13.91" r="13.91"/>\n    <circle class="cls-3" cx="60.91" cy="13.91" r="13.91"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.16 108.73">\n    <path class="cls-1" d="M52.25,19.25a6.69,6.69,0,0,1,5.41-2.75H70.39A6.7,6.7,0,0,1,65.19,10v0A6.7,6.7,0,0,0,53.08,6,6.7,6.7,0,0,0,41,10a6.7,6.7,0,0,1-5.2,6.52H47.87A6.54,6.54,0,0,1,52.25,19.25Z"/>\n    <path class="cls-2" d="M71.88,16.67a6.7,6.7,0,0,1-1.49-.17H57.66a6.69,6.69,0,0,0-5.41,2.75,6.54,6.54,0,0,0-4.38-2.75H35.77a6.7,6.7,0,0,1-1.49.17h0A6.7,6.7,0,0,1,41,23.35v0a6.7,6.7,0,0,0,12.11,3.95,6.7,6.7,0,0,0,12.11-3.95,6.7,6.7,0,0,1,6.69-6.7h0Z"/>\n    <path class="cls-1" d="M51.91,97.91a6.69,6.69,0,0,1,5.41-2.75H70.06a6.7,6.7,0,0,1-5.2-6.51v0a6.7,6.7,0,0,0-12.11-3.95,6.7,6.7,0,0,0-12.11,3.95,6.7,6.7,0,0,1-5.2,6.52H47.53A6.54,6.54,0,0,1,51.91,97.91Z"/>\n    <path class="cls-2" d="M71.54,95.34a6.7,6.7,0,0,1-1.49-.17H57.32a6.69,6.69,0,0,0-5.41,2.75,6.54,6.54,0,0,0-4.38-2.75H35.44a6.7,6.7,0,0,1-1.49.17h0A6.7,6.7,0,0,1,40.64,102v0A6.7,6.7,0,0,0,52.75,106,6.7,6.7,0,0,0,64.86,102a6.7,6.7,0,0,1,6.69-6.7h0Z"/>\n    <circle class="cls-3" cx="13.91" cy="13.91" r="13.91"/>\n    <circle class="cls-3" cx="93.25" cy="13.91" r="13.91"/>\n    <circle class="cls-3" cx="13.91" cy="91" r="13.91"/>\n    <circle class="cls-3" cx="93.25" cy="93.66" r="13.91"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.16 108.73">\n    <path class="cls-1" d="M42.35,43.24a6.69,6.69,0,0,1,5.41-2.75H60.5A6.7,6.7,0,0,1,55.3,34v0A6.7,6.7,0,0,0,43.19,30,6.7,6.7,0,0,0,31.08,34a6.7,6.7,0,0,1-5.2,6.52H38A6.54,6.54,0,0,1,42.35,43.24Z"/>\n    <path class="cls-2" d="M62,40.66a6.7,6.7,0,0,1-1.49-.17H47.76a6.69,6.69,0,0,0-5.41,2.75A6.54,6.54,0,0,0,38,40.49H25.88a6.7,6.7,0,0,1-1.49.17h0a6.7,6.7,0,0,1,6.69,6.68v0a6.7,6.7,0,0,0,12.11,3.95A6.7,6.7,0,0,0,55.3,47.36,6.7,6.7,0,0,1,62,40.66h0Z"/>\n    <circle class="cls-3" cx="13.91" cy="13.91" r="13.91"/>\n    <circle class="cls-3" cx="72.24" cy="13.91" r="13.91"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.33 41.11">\n    <circle class="cls-1" cx="13.91" cy="13.91" r="13.91"/>\n    <circle class="cls-1" cx="79.41" cy="13.91" r="13.91"/>\n    <path class="cls-2" d="M46,30.29a6.69,6.69,0,0,1,5.41-2.75H64.11A6.7,6.7,0,0,1,58.91,21v0A6.7,6.7,0,0,0,46.8,17.06,6.7,6.7,0,0,0,34.69,21a6.7,6.7,0,0,1-5.2,6.52H41.59A6.54,6.54,0,0,1,46,30.29Z"/>\n    <path class="cls-3" d="M65.6,27.71a6.7,6.7,0,0,1-1.49-.17H51.38A6.69,6.69,0,0,0,46,30.29a6.54,6.54,0,0,0-4.38-2.75H29.49a6.7,6.7,0,0,1-1.49.17h0a6.7,6.7,0,0,1,6.69,6.68v0A6.7,6.7,0,0,0,46.8,38.36a6.7,6.7,0,0,0,12.11-3.95,6.7,6.7,0,0,1,6.69-6.7h0Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.74 90.24">\n    <circle class="cls-1" cx="13.91" cy="13.91" r="13.91"/>\n    <circle class="cls-1" cx="123.83" cy="13.91" r="13.91"/>\n    <path class="cls-2" d="M67.91,79.42a6.69,6.69,0,0,1,5.41-2.75H86.06a6.7,6.7,0,0,1-5.2-6.51v0A6.7,6.7,0,0,0,68.75,66.2a6.7,6.7,0,0,0-12.11,3.95,6.7,6.7,0,0,1-5.2,6.52H63.53A6.54,6.54,0,0,1,67.91,79.42Z"/>\n    <path class="cls-3" d="M87.54,76.84a6.7,6.7,0,0,1-1.49-.17H73.32a6.69,6.69,0,0,0-5.41,2.75,6.54,6.54,0,0,0-4.38-2.75H51.44a6.7,6.7,0,0,1-1.49.17h0a6.7,6.7,0,0,1,6.69,6.68v0a6.7,6.7,0,0,0,12.11,3.95,6.7,6.7,0,0,0,12.11-3.95,6.7,6.7,0,0,1,6.69-6.7h0Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="lips" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.76 31.79">\n    <path class="cls-1" d="M61.87,19.75a6.69,6.69,0,0,1,4.3-4.29l12.11-3.93a6.7,6.7,0,0,1-7-4.58v0a6.7,6.7,0,0,0-12.74,0,6.7,6.7,0,0,0-10.3,7.49,6.7,6.7,0,0,1-2.93,7.81l11.5-3.73A6.54,6.54,0,0,1,61.87,19.75Z"/>\n    <path class="cls-2" d="M79.75,11.24a6.7,6.7,0,0,1-1.47.29L66.16,15.46a6.69,6.69,0,0,0-4.3,4.29,6.54,6.54,0,0,0-5-1.26l-11.5,3.73a6.7,6.7,0,0,1-1.36.62h0a6.7,6.7,0,0,1,8.42,4.29v0a6.7,6.7,0,0,0,12.74,0,6.7,6.7,0,0,0,10.3-7.49,6.7,6.7,0,0,1,4.29-8.44h0Z"/>\n    <circle class="cls-3" cx="13.91" cy="13.91" r="13.91"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="lips--vampire" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.56 94.39">\n     <circle class="cls-1" cx="11.67" cy="11.67" r="11.67"/>\n     <circle class="cls-1" cx="44.89" cy="11.67" r="11.67"/>\n     <path class="cls-2" d="M27.3,58.88a6.69,6.69,0,0,1,5.41-2.75H45.44a6.7,6.7,0,0,1-5.2-6.51v0a6.7,6.7,0,0,0-12.11-3.95A6.7,6.7,0,0,0,16,49.6a6.7,6.7,0,0,1-5.2,6.52H22.92A6.54,6.54,0,0,1,27.3,58.88Z"/>\n     <path class="cls-3" d="M46.93,56.3a6.7,6.7,0,0,1-1.49-.17H32.71a6.69,6.69,0,0,0-5.41,2.75,6.54,6.54,0,0,0-4.38-2.75H10.82a6.7,6.7,0,0,1-1.49.17h0A6.7,6.7,0,0,1,16,63v0a6.7,6.7,0,0,0,12.11,3.95A6.7,6.7,0,0,0,40.24,63a6.7,6.7,0,0,1,6.69-6.7h0Z"/>\n     <polygon class="cls-4" points="18.2 94.39 13.6 56.29 22.79 56.29 18.2 94.39"/>\n     <polygon class="cls-4" points="38.01 94.39 33.42 56.29 42.6 56.29 38.01 94.39"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="lips--vampire" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.57 27.56">\n    <circle class="cls-1" cx="5.71" cy="5.71" r="5.71"/>\n    <circle class="cls-1" cx="35.86" cy="5.71" r="5.71"/>\n    <path class="cls-2" d="M20.67,21.66a3.64,3.64,0,0,1,2.95-1.5h6.94a3.65,3.65,0,0,1-2.83-3.54h0a3.65,3.65,0,0,0-6.6-2.15,3.65,3.65,0,0,0-6.6,2.15,3.65,3.65,0,0,1-2.83,3.55h6.59A3.56,3.56,0,0,1,20.67,21.66Z"/>\n    <path class="cls-3" d="M31.36,20.26a3.65,3.65,0,0,1-.81-.09H23.61a3.64,3.64,0,0,0-2.95,1.5,3.56,3.56,0,0,0-2.39-1.5H11.69a3.65,3.65,0,0,1-.81.09h0a3.65,3.65,0,0,1,3.64,3.64h0a3.65,3.65,0,0,0,6.6,2.15,3.65,3.65,0,0,0,6.6-2.15,3.65,3.65,0,0,1,3.64-3.65h0Z"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/lips/lips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], LipsComponent);
    return LipsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=lips.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LollipopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var LollipopComponent = /** @class */ (function (_super) {
    __extends(LollipopComponent, _super);
    function LollipopComponent(element) {
        return _super.call(this, 'lollipop', element.nativeElement) || this;
    }
    LollipopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lollipop',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/lollipop/lollipop.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg class="lollipop" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 177.13">\n    <rect class="cls-1" y="24.6" width="67" height="13"/>\n    <rect class="cls-2" x="30.72" y="53.32" width="6.96" height="123.81"/>\n    <circle class="cls-1" cx="33.5" cy="30.6" r="30.6"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="lollipop--color--green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.97 104.67">\n    <path class="cls-1" d="M32.78,10.06a11.53,11.53,0,0,0-16.34-9A11.53,11.53,0,0,0,0,10.79c0,.25,0,.49,0,.74s0,.5,0,.74V31.94a16.38,16.38,0,0,0,32.76,0V13a11.24,11.24,0,0,0,0-2.94Z"/>\n    <line class="cls-2" x1="16.44" y1="7.48" x2="16.44" y2="39.96"/>\n    <circle cx="10.12" cy="6.72" r="0.23"/>\n    <circle cx="12.88" cy="17.42" r="0.23"/>\n    <circle cx="4.41" cy="11.36" r="0.23"/>\n    <circle cx="9.64" cy="12.08" r="0.23"/>\n    <circle cx="3.01" cy="21.02" r="0.23"/>\n    <circle cx="25.91" cy="13.38" r="0.23"/>\n    <circle cx="28.67" cy="24.09" r="0.23"/>\n    <circle cx="20.2" cy="18.03" r="0.23"/>\n    <circle cx="25.43" cy="18.74" r="0.23"/>\n    <circle cx="18.79" cy="27.68" r="0.23"/>\n    <circle cx="5.75" cy="35.26" r="0.23" transform="translate(-29.79 38.86) rotate(-86.53)"/>\n    <circle cx="3.65" cy="24.4" r="0.23" transform="translate(-20.93 26.57) rotate(-86.53)"/>\n    <circle cx="11.74" cy="30.97" r="0.23" transform="translate(-19.88 40.81) rotate(-86.53)"/>\n    <circle cx="6.56" cy="29.93" r="0.23" transform="translate(-23.71 34.67) rotate(-86.53)"/>\n    <circle cx="13.72" cy="21.41" r="0.23" transform="translate(-8.48 33.81) rotate(-86.53)"/>\n    <circle cx="4.28" cy="20.8" r="0.23" transform="translate(-8.19 3.61) rotate(-24.33)"/>\n    <circle cx="12.9" cy="13.87" r="0.23" transform="translate(-4.57 6.55) rotate(-24.33)"/>\n    <circle cx="10.87" cy="24.09" r="0.23" transform="translate(-8.96 6.62) rotate(-24.33)"/>\n    <circle cx="9.37" cy="19.03" r="0.23" transform="translate(-7.01 5.55) rotate(-24.33)"/>\n    <circle cx="20.24" cy="21.39" r="0.23" transform="translate(-7.01 10.24) rotate(-24.33)"/>\n    <circle cx="26.4" cy="6.32" r="0.23" transform="translate(17.21 31.87) rotate(-83.69)"/>\n    <circle cx="27.96" cy="17.27" r="0.23" transform="translate(7.72 43.17) rotate(-83.69)"/>\n    <circle cx="20.21" cy="10.31" r="0.23" transform="translate(7.74 29.27) rotate(-83.69)"/>\n    <circle cx="25.33" cy="11.6" r="0.23" transform="translate(11.01 35.5) rotate(-83.69)"/>\n    <circle cx="17.75" cy="19.76" r="0.23" transform="translate(-3.83 35.23) rotate(-83.69)"/>\n    <circle cx="20.9" cy="35.39" r="0.23" transform="translate(-15.7 54.11) rotate(-86.53)"/>\n    <circle cx="18.8" cy="24.54" r="0.23" transform="translate(-6.84 41.82) rotate(-86.53)"/>\n    <circle cx="26.88" cy="31.1" r="0.23" transform="translate(-5.79 56.06) rotate(-86.53)"/>\n    <circle cx="21.71" cy="30.07" r="0.23" transform="translate(-9.62 49.92) rotate(-86.53)"/>\n    <circle cx="28.87" cy="21.55" r="0.23" transform="translate(5.61 49.06) rotate(-86.53)"/>\n    <circle cx="13.48" cy="45.25" r="0.23" transform="translate(-32.51 55.97) rotate(-86.53)"/>\n    <circle cx="11.37" cy="34.4" r="0.23" transform="translate(-23.65 43.67) rotate(-86.53)"/>\n    <circle cx="19.46" cy="40.96" r="0.23" transform="translate(-22.61 57.91) rotate(-86.53)"/>\n    <circle cx="14.28" cy="39.93" r="0.23" transform="translate(-26.44 51.77) rotate(-86.53)"/>\n    <circle cx="21.45" cy="31.41" r="0.23" transform="translate(-11.21 50.92) rotate(-86.53)"/>\n    <rect class="cls-3" x="5.73" y="35.63" width="36" height="6.99" transform="translate(-17.97 20.29) rotate(-34.45)"/>\n    <rect class="cls-4" x="47.74" y="42.92" width="3.74" height="66.52" transform="translate(-34.4 41.43) rotate(-34.45)"/>\n    <circle class="cls-3" cx="23.57" cy="38.9" r="16.44" transform="translate(-17.87 20.16) rotate(-34.45)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="lollipop--color--yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.11 72.6">\n    <path class="cls-1" d="M29.85,9.16A10.5,10.5,0,0,0,15,1,10.5,10.5,0,0,0,0,9.82c0,.22,0,.45,0,.67s0,.45,0,.67V29.09a14.91,14.91,0,1,0,29.83,0V11.84a10.24,10.24,0,0,0,0-2.68Z"/>\n    <line class="cls-2" x1="14.97" y1="6.82" x2="14.97" y2="36.39"/>\n    <circle cx="9.22" cy="6.12" r="0.21"/>\n    <circle cx="11.73" cy="15.87" r="0.21"/>\n    <circle cx="4.02" cy="10.35" r="0.21"/>\n    <circle cx="8.78" cy="11" r="0.21"/>\n    <circle cx="2.74" cy="19.14" r="0.21"/>\n    <circle cx="23.6" cy="12.19" r="0.21"/>\n    <circle cx="26.11" cy="21.94" r="0.21"/>\n    <circle cx="18.39" cy="16.42" r="0.21"/>\n    <circle cx="23.16" cy="17.07" r="0.21"/>\n    <circle cx="17.12" cy="25.21" r="0.21"/>\n    <circle cx="5.24" cy="32.11" r="0.21" transform="translate(-27.13 35.39) rotate(-86.53)"/>\n    <circle cx="3.32" cy="22.22" r="0.21" transform="translate(-19.06 24.19) rotate(-86.53)"/>\n    <circle cx="10.69" cy="28.2" r="0.21" transform="translate(-18.11 37.16) rotate(-86.53)"/>\n    <circle cx="5.97" cy="27.26" r="0.21" transform="translate(-21.6 31.57) rotate(-86.53)"/>\n    <circle cx="12.5" cy="19.5" r="0.21" transform="translate(-7.72 30.79) rotate(-86.53)"/>\n    <circle cx="3.9" cy="18.94" r="0.21" transform="translate(-7.46 3.29) rotate(-24.33)"/>\n    <circle cx="11.75" cy="12.63" r="0.21" transform="translate(-4.16 5.96) rotate(-24.33)"/>\n    <circle cx="9.9" cy="21.94" r="0.21" transform="translate(-8.16 6.03) rotate(-24.33)"/>\n    <circle cx="8.53" cy="17.33" r="0.21" transform="translate(-6.38 5.05) rotate(-24.33)"/>\n    <circle cx="18.44" cy="19.48" r="0.21" transform="translate(-6.39 9.33) rotate(-24.33)"/>\n    <circle cx="24.04" cy="5.76" r="0.21" transform="translate(15.67 29.02) rotate(-83.69)"/>\n    <circle cx="25.46" cy="15.73" r="0.21" transform="translate(7.03 39.31) rotate(-83.69)"/>\n    <circle cx="18.4" cy="9.39" r="0.21" transform="translate(7.05 26.65) rotate(-83.69)"/>\n    <circle cx="23.07" cy="10.57" r="0.21" transform="translate(10.03 32.33) rotate(-83.69)"/>\n    <circle cx="16.17" cy="17.99" r="0.21" transform="translate(-3.49 32.08) rotate(-83.69)"/>\n    <circle cx="19.03" cy="32.23" r="0.21" transform="translate(-14.29 49.28) rotate(-86.53)"/>\n    <circle cx="17.12" cy="22.35" r="0.21" transform="translate(-6.23 38.08) rotate(-86.53)"/>\n    <circle cx="24.48" cy="28.33" r="0.21" transform="translate(-5.27 51.05) rotate(-86.53)"/>\n    <circle cx="19.77" cy="27.39" r="0.21" transform="translate(-8.76 45.46) rotate(-86.53)"/>\n    <circle cx="26.29" cy="19.63" r="0.21" transform="translate(5.11 44.68) rotate(-86.53)"/>\n    <circle cx="12.27" cy="41.21" r="0.21" transform="translate(-29.61 50.97) rotate(-86.53)"/>\n    <circle cx="10.36" cy="31.33" r="0.21" transform="translate(-21.54 39.77) rotate(-86.53)"/>\n    <circle cx="17.72" cy="37.31" r="0.21" transform="translate(-20.59 52.74) rotate(-86.53)"/>\n    <circle cx="13.01" cy="36.36" r="0.21" transform="translate(-24.08 47.15) rotate(-86.53)"/>\n    <circle cx="19.53" cy="28.61" r="0.21" transform="translate(-10.2 46.37) rotate(-86.53)"/>\n    <rect class="cls-3" x="7.95" y="26.8" width="36" height="6.99" transform="translate(-13.44 36.57) rotate(-58.47)"/>\n    <polygon class="cls-4" points="99.11 72.51 92.05 72.6 35.35 37.81 37.3 34.62 99.11 72.51"/>\n    <circle class="cls-3" cx="25.72" cy="30.15" r="16.44" transform="translate(-13.43 36.31) rotate(-58.47)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="lollipop--color--blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.16 89.37">\n    <path class="cls-1" d="M93.32,5.63A10.5,10.5,0,0,0,76.53,3.15a10.5,10.5,0,0,0-11,13.47c.06.21.13.43.21.64s.17.42.26.62l6.22,16.8a14.91,14.91,0,1,0,28-10.36l-6-16.17a10.24,10.24,0,0,0-.93-2.51Z"/>\n    <line class="cls-2" x1="78.55" y1="8.6" x2="88.82" y2="36.34"/>\n    <circle cx="72.91" cy="9.94" r="0.21" transform="translate(1.09 25.94) rotate(-20.32)"/>\n    <circle cx="78.65" cy="18.22" r="0.21" transform="translate(-1.43 28.45) rotate(-20.32)"/>\n    <circle cx="69.5" cy="15.72" r="0.21" transform="translate(-1.13 25.12) rotate(-20.32)"/>\n    <circle cx="74.19" cy="14.68" r="0.21" transform="translate(-0.48 26.68) rotate(-20.32)"/>\n    <circle cx="71.36" cy="24.41" r="0.21" transform="translate(-4.03 26.3) rotate(-20.32)"/>\n    <circle cx="88.5" cy="10.64" r="0.21" transform="translate(1.81 31.4) rotate(-20.32)"/>\n    <circle cx="94.24" cy="18.92" r="0.21" transform="translate(-0.7 33.91) rotate(-20.32)"/>\n    <circle cx="85.09" cy="16.42" r="0.21" transform="translate(-0.4 30.57) rotate(-20.32)"/>\n    <circle cx="89.79" cy="15.37" r="0.21" transform="translate(0.25 32.14) rotate(-20.32)"/>\n    <circle cx="86.95" cy="25.11" r="0.21" transform="translate(-3.31 31.76) rotate(-20.32)"/>\n    <circle cx="78.21" cy="35.7" r="0.21" transform="translate(-6.99 24.21) rotate(-16.85)"/>\n    <circle cx="72.98" cy="27.09" r="0.21" transform="translate(-4.72 22.32) rotate(-16.85)"/>\n    <circle cx="81.96" cy="30.14" r="0.21" transform="translate(-5.22 25.06) rotate(-16.85)"/>\n    <circle cx="77.21" cy="30.9" r="0.21" transform="translate(-5.64 23.71) rotate(-16.85)"/>\n    <circle cx="80.63" cy="21.35" r="0.21" transform="translate(-2.73 24.29) rotate(-16.85)"/>\n    <circle cx="72.38" cy="23.81" r="0.21" transform="translate(4.15 57.74) rotate(-44.65)"/>\n    <circle cx="77.55" cy="15.17" r="0.21" transform="translate(11.72 58.88) rotate(-44.65)"/>\n    <circle cx="79.04" cy="24.54" r="0.21" transform="translate(5.56 62.64) rotate(-44.65)"/>\n    <circle cx="76.16" cy="20.7" r="0.21" transform="translate(7.44 59.5) rotate(-44.65)"/>\n    <circle cx="86.2" cy="19.27" r="0.21" transform="translate(11.33 66.14) rotate(-44.65)"/>\n    <circle cx="86.69" cy="4.46" r="0.21" transform="translate(1.5 21.12) rotate(-14.01)"/>\n    <circle cx="91.48" cy="13.32" r="0.21" transform="translate(-0.5 22.54) rotate(-14.01)"/>\n    <circle cx="82.66" cy="9.82" r="0.21" transform="translate(0.08 20.3) rotate(-14.01)"/>\n    <circle cx="87.44" cy="9.31" r="0.21" transform="translate(0.35 21.45) rotate(-14.01)"/>\n    <circle cx="83.55" cy="18.67" r="0.21" transform="translate(-2.03 20.78) rotate(-14.01)"/>\n    <circle cx="91.19" cy="31.03" r="0.21" transform="translate(-5.08 27.77) rotate(-16.85)"/>\n    <circle cx="85.96" cy="22.42" r="0.21" transform="translate(-2.81 25.88) rotate(-16.85)"/>\n    <circle cx="94.94" cy="25.47" r="0.21" transform="translate(-3.31 28.62) rotate(-16.85)"/>\n    <circle cx="90.19" cy="26.22" r="0.21" transform="translate(-3.73 27.27) rotate(-16.85)"/>\n    <circle cx="93.61" cy="16.68" r="0.21" transform="translate(-0.82 27.86) rotate(-16.85)"/>\n    <circle cx="87.96" cy="41.79" r="0.21" transform="translate(-8.34 27.3) rotate(-16.85)"/>\n    <circle cx="82.73" cy="33.19" r="0.21" transform="translate(-6.07 25.41) rotate(-16.85)"/>\n    <circle cx="91.72" cy="36.24" r="0.21" transform="translate(-6.57 28.15) rotate(-16.85)"/>\n    <circle cx="86.97" cy="36.99" r="0.21" transform="translate(-6.99 26.8) rotate(-16.85)"/>\n    <circle cx="90.39" cy="27.45" r="0.21" transform="translate(-4.08 27.38) rotate(-16.85)"/>\n    <rect class="cls-3" x="55.16" y="43.57" width="36" height="6.99" transform="matrix(-0.52, -0.85, 0.85, -0.52, 71.3, 134.03)"/>\n    <polygon class="cls-4" points="0 89.28 7.06 89.37 63.76 54.58 61.81 51.39 0 89.28"/>\n    <circle class="cls-3" cx="73.39" cy="46.92" r="16.44" transform="matrix(0.85, -0.52, 0.52, 0.85, -13.7, 45.31)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="lollipop--color--yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.07 124.89">\n    <path class="cls-1" d="M25.15,3.86a7.2,7.2,0,0,0-11.52-1.7A7.2,7.2,0,0,0,6.12,11.4c0,.15.09.29.15.44s.11.29.18.43l4.27,11.52A10.23,10.23,0,1,0,29.9,16.68L25.79,5.59a7,7,0,0,0-.64-1.72Z"/>\n    <line class="cls-2" x1="15.02" y1="5.9" x2="22.06" y2="24.93"/>\n    <circle cx="11.15" cy="6.82" r="0.15" transform="translate(-1.67 4.3) rotate(-20.32)"/>\n    <circle cx="15.09" cy="12.5" r="0.15" transform="translate(-3.4 6.02) rotate(-20.32)"/>\n    <circle cx="8.81" cy="10.78" r="0.15" transform="translate(-3.2 3.73) rotate(-20.32)"/>\n    <circle cx="12.03" cy="10.07" r="0.15" transform="translate(-2.75 4.8) rotate(-20.32)"/>\n    <circle cx="10.08" cy="16.74" r="0.15" transform="translate(-5.19 4.54) rotate(-20.32)"/>\n    <circle cx="21.85" cy="7.3" r="0.15" transform="translate(-1.18 8.04) rotate(-20.32)"/>\n    <circle cx="25.79" cy="12.98" r="0.15" transform="translate(-2.9 9.76) rotate(-20.32)"/>\n    <circle cx="19.51" cy="11.26" r="0.15" transform="translate(-2.7 7.48) rotate(-20.32)"/>\n    <circle cx="22.73" cy="10.55" r="0.15" transform="translate(-2.25 8.55) rotate(-20.32)"/>\n    <circle cx="20.78" cy="17.22" r="0.15" transform="translate(-4.69 8.29) rotate(-20.32)"/>\n    <circle cx="14.78" cy="24.49" r="0.15" transform="translate(-6.47 5.34) rotate(-16.85)"/>\n    <circle cx="11.19" cy="18.59" r="0.15" transform="translate(-4.91 4.04) rotate(-16.85)"/>\n    <circle cx="17.36" cy="20.68" r="0.15" transform="translate(-5.25 5.92) rotate(-16.85)"/>\n    <circle cx="14.1" cy="21.2" r="0.15" transform="translate(-5.54 5) rotate(-16.85)"/>\n    <circle cx="16.45" cy="14.65" r="0.15" transform="translate(-3.54 5.4) rotate(-16.85)"/>\n    <circle cx="10.78" cy="16.34" r="0.15" transform="translate(-8.37 12.29) rotate(-44.65)"/>\n    <circle cx="14.33" cy="10.41" r="0.15" transform="translate(-3.18 13.08) rotate(-44.65)"/>\n    <circle cx="15.36" cy="16.84" r="0.15" transform="translate(-7.4 15.65) rotate(-44.65)"/>\n    <circle cx="13.38" cy="14.2" r="0.15" transform="translate(-6.12 13.5) rotate(-44.65)"/>\n    <circle cx="20.26" cy="13.22" r="0.15" transform="translate(-3.44 18.06) rotate(-44.65)"/>\n    <circle cx="20.6" cy="3.06" r="0.15" transform="translate(-0.13 5.08) rotate(-14.01)"/>\n    <circle cx="23.89" cy="9.14" r="0.15" transform="translate(-1.5 6.06) rotate(-14.01)"/>\n    <circle cx="17.84" cy="6.74" r="0.15" transform="translate(-1.1 4.52) rotate(-14.01)"/>\n    <circle cx="21.12" cy="6.38" r="0.15" transform="translate(-0.92 5.3) rotate(-14.01)"/>\n    <circle cx="18.45" cy="12.81" r="0.15" transform="translate(-2.55 4.85) rotate(-14.01)"/>\n    <circle cx="23.69" cy="21.29" r="0.15" transform="translate(-5.15 7.78) rotate(-16.85)"/>\n    <circle cx="20.1" cy="15.38" r="0.15" transform="translate(-3.6 6.49) rotate(-16.85)"/>\n    <circle cx="26.26" cy="17.47" r="0.15" transform="translate(-3.94 8.36) rotate(-16.85)"/>\n    <circle cx="23.01" cy="17.99" r="0.15" transform="translate(-4.23 7.44) rotate(-16.85)"/>\n    <circle cx="25.35" cy="11.45" r="0.15" transform="translate(-2.23 7.84) rotate(-16.85)"/>\n    <circle cx="21.48" cy="28.67" r="0.15" transform="translate(-7.39 7.46) rotate(-16.85)"/>\n    <circle cx="17.89" cy="22.77" r="0.15" transform="translate(-5.83 6.16) rotate(-16.85)"/>\n    <circle cx="24.05" cy="24.86" r="0.15" transform="translate(-6.17 8.04) rotate(-16.85)"/>\n    <circle cx="20.8" cy="25.38" r="0.15" transform="translate(-6.46 7.12) rotate(-16.85)"/>\n    <circle cx="23.14" cy="18.83" r="0.15" transform="translate(-4.47 7.52) rotate(-16.85)"/>\n    <rect class="cls-3" x="0.04" y="33.12" width="36" height="6.99" transform="translate(35.69 73.41) rotate(-179.4)"/>\n    <polygon class="cls-4" points="14.87 124.64 18.71 124.89 19.41 48.56 15.67 48.53 14.87 124.64"/>\n    <circle class="cls-3" cx="18.04" cy="36.34" r="16.44" transform="translate(-18.49 54) rotate(-89.4)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="lollipop--color--green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.07 66.44">\n    <rect class="cls-3" x="0.04" y="13.22" width="36" height="6.99" transform="translate(35.89 33.61) rotate(-179.4)"/>\n    <polygon class="cls-4" points="14.87 66.19 18.71 66.44 19.41 28.67 15.67 28.63 14.87 66.19"/>\n    <circle class="cls-3" cx="18.04" cy="16.44" r="16.44" transform="translate(1.41 34.31) rotate(-89.4)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="lollipop--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 140.91">\n    <rect class="cls-1" x="48.76" y="13.17" width="36" height="6.99" transform="translate(2.28 40.69) rotate(-34.45)"/>\n    <rect class="cls-2" x="90.77" y="20.47" width="3.74" height="66.52" transform="translate(-14.15 61.83) rotate(-34.45)"/>\n    <circle class="cls-1" cx="66.61" cy="16.45" r="16.44" transform="translate(2.38 40.57) rotate(-34.45)"/>\n    <rect class="cls-3" x="48.38" y="92.44" width="36" height="6.99" transform="translate(110.07 -12.24) rotate(56.68)"/>\n    <rect class="cls-2" x="26.95" y="87.82" width="3.74" height="66.52" transform="translate(114.16 30.48) rotate(56.68)"/>\n    <circle class="cls-3" cx="66.61" cy="95.79" r="16.44" transform="translate(-41.67 52.34) rotate(-33.32)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="lollipop--color--yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.84 70.92">\n    <rect class="cls-3" x="-1.36" y="13.13" width="36" height="6.99" transform="translate(-6.86 17.59) rotate(-47.31)"/>\n    <rect class="cls-4" x="48.25" y="13.74" width="3.74" height="66.52" transform="translate(-18.41 51.98) rotate(-47.31)"/>\n    <circle class="cls-3" cx="16.44" cy="16.44" r="16.44" transform="translate(-6.79 17.38) rotate(-47.31)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="lollipop--color--green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.68 72.17">\n    <rect class="cls-3" x="40.04" y="13.14" width="36" height="6.99" transform="translate(30.24 -36.97) rotate(46.6)"/>\n    <rect class="cls-4" x="23.58" y="14.69" width="3.74" height="66.52" transform="translate(42.81 -3.49) rotate(46.6)"/>\n    <circle class="cls-3" cx="58.23" cy="16.44" r="16.44" transform="translate(4.62 44.51) rotate(-43.4)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="lollipop--color--darkblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.88 44.3">\n    <rect class="cls-3" x="-1.3" y="14.69" width="36" height="6.99" transform="translate(-5.81 28.31) rotate(-71.65)"/>\n    <rect class="cls-4" x="57.86" y="-1.2" width="3.74" height="66.52" transform="translate(10.49 78.66) rotate(-71.65)"/>\n    <circle class="cls-3" cx="16.45" cy="18.1" r="16.44" transform="translate(-5.91 28.01) rotate(-71.65)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="lollipop--color--green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.34 64.22">\n    <path class="cls-1" d="M49.78,22.4A14.53,14.53,0,0,0,34.61,4.48a14.53,14.53,0,0,0-23.68,4c-.13.28-.25.57-.37.86s-.21.59-.3.88L1.37,33.34A20.64,20.64,0,0,0,39.9,48.14l8.56-22.28a14.16,14.16,0,0,0,1.33-3.46Z"/>\n    <line class="cls-2" x1="31.72" y1="11.99" x2="17.05" y2="50.2"/>\n    <circle cx="24.64" cy="8.24" r="0.29" transform="translate(8.12 28.28) rotate(-68.98)"/>\n    <circle cx="23.04" cy="22.08" r="0.29" transform="matrix(0.36, -0.93, 0.93, 0.36, -5.83, 35.67)"/>\n    <circle cx="15.82" cy="11.12" r="0.29" transform="translate(-0.23 21.9) rotate(-68.98)"/>\n    <circle cx="21.65" cy="14.32" r="0.29" transform="matrix(0.36, -0.93, 0.93, 0.36, 0.51, 29.4)"/>\n    <circle cx="9.81" cy="21.84" r="0.29" transform="matrix(0.36, -0.93, 0.93, 0.36, -14.1, 23.16)"/>\n    <circle cx="40.2" cy="23.21" r="0.29" transform="matrix(0.36, -0.93, 0.93, 0.36, 4.12, 52.41)"/>\n    <circle cx="38.6" cy="37.05" r="0.29" transform="translate(-9.83 59.8) rotate(-68.98)"/>\n    <circle cx="31.38" cy="26.09" r="0.29" transform="translate(-4.23 46.03) rotate(-68.98)"/>\n    <circle cx="37.21" cy="29.3" r="0.29" transform="translate(-3.49 53.52) rotate(-68.98)"/>\n    <circle cx="25.37" cy="36.82" r="0.29" transform="translate(-18.1 47.29) rotate(-68.98)"/>\n    <circle cx="6.6" cy="39.83" r="0.29" transform="translate(-32.38 29.33) rotate(-65.52)"/>\n    <circle cx="9.03" cy="26.11" r="0.29" transform="translate(-18.47 23.51) rotate(-65.52)"/>\n    <circle cx="15.58" cy="37.49" r="0.29" transform="translate(-24.99 36.13) rotate(-65.52)"/>\n    <circle cx="9.96" cy="33.93" r="0.29" transform="translate(-25.05 28.93) rotate(-65.52)"/>\n    <circle cx="22.23" cy="27.15" r="0.29" transform="translate(-11.69 36.13) rotate(-65.52)"/>\n    <circle cx="11.41" cy="22.16" r="0.29" transform="translate(-1.26 0.7) rotate(-3.32)"/>\n    <circle cx="24.68" cy="17.91" r="0.29" transform="translate(-1 1.46) rotate(-3.32)"/>\n    <circle cx="17.66" cy="29.01" r="0.29" transform="translate(-1.65 1.07) rotate(-3.32)"/>\n    <circle cx="18.19" cy="22.38" r="0.29" transform="translate(-1.26 1.09) rotate(-3.32)"/>\n    <circle cx="29.91" cy="30.07" r="0.29" transform="translate(-1.69 1.78) rotate(-3.32)"/>\n    <circle cx="43.96" cy="15.13" r="0.29" transform="translate(10.34 47.24) rotate(-62.67)"/>\n    <circle cx="40.85" cy="28.71" r="0.29" transform="translate(-3.41 51.83) rotate(-62.67)"/>\n    <circle cx="34.88" cy="17.02" r="0.29" transform="translate(3.74 40.2) rotate(-62.67)"/>\n    <circle cx="40.32" cy="20.85" r="0.29" transform="translate(3.28 47.1) rotate(-62.67)"/>\n    <circle cx="27.72" cy="27.02" r="0.29" transform="translate(-9.01 39.25) rotate(-62.67)"/>\n    <circle cx="24.36" cy="46.84" r="0.29" transform="translate(-28.37 49.59) rotate(-65.52)"/>\n    <circle cx="26.79" cy="33.12" r="0.29" transform="translate(-14.46 43.77) rotate(-65.52)"/>\n    <circle cx="33.33" cy="44.5" r="0.29" transform="translate(-20.98 56.39) rotate(-65.52)"/>\n    <circle cx="27.71" cy="40.94" r="0.29" transform="translate(-21.03 49.2) rotate(-65.52)"/>\n    <circle cx="39.99" cy="34.16" r="0.29" transform="translate(-7.67 56.39) rotate(-65.52)"/>\n    <circle cx="11.17" cy="55.08" r="0.29" transform="translate(-43.59 42.42) rotate(-65.52)"/>\n    <circle cx="13.6" cy="41.36" r="0.29" transform="translate(-29.68 36.6) rotate(-65.52)"/>\n    <circle cx="20.15" cy="52.74" r="0.29" transform="translate(-36.2 49.22) rotate(-65.52)"/>\n    <circle cx="14.53" cy="49.19" r="0.29" transform="translate(-36.26 42.02) rotate(-65.52)"/>\n    <circle cx="26.8" cy="42.4" r="0.29" transform="translate(-22.89 49.22) rotate(-65.52)"/>\n    <rect class="cls-3" x="5.16" y="34.61" width="36" height="6.99" transform="matrix(0.31, -0.95, 0.95, 0.31, -20.3, 48.08)"/>\n    <rect class="cls-4" x="64.31" y="18.71" width="3.74" height="66.52" transform="translate(-3.99 98.42) rotate(-71.65)"/>\n    <circle class="cls-3" cx="22.9" cy="38.01" r="16.44" transform="translate(-20.39 47.78) rotate(-71.65)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="lollipop--color--yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.06 95.19">\n    <rect class="cls-3" x="0.03" y="13.22" width="36" height="6.99" transform="translate(0.16 -0.17) rotate(0.54)"/>\n    <rect class="cls-4" x="16.11" y="28.65" width="3.74" height="66.52" transform="translate(0.58 -0.17) rotate(0.54)"/>\n    <circle class="cls-3" cx="18.03" cy="16.44" r="16.44" transform="translate(1.42 34.32) rotate(-89.46)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="lollipop--color--yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.77 34.39">\n    <path class="cls-1" d="M19,5.83A6.68,6.68,0,0,0,9.52.64,6.68,6.68,0,0,0,0,6.25c0,.14,0,.28,0,.43S0,7,0,7.11V18.5a9.49,9.49,0,0,0,19,0v-11a6.51,6.51,0,0,0,0-1.7Z"/>\n    <line class="cls-2" x1="9.52" y1="4.34" x2="9.52" y2="23.15"/>\n    <circle cx="5.87" cy="3.89" r="0.14"/>\n    <circle cx="7.46" cy="10.09" r="0.14"/>\n    <circle cx="2.56" cy="6.58" r="0.14"/>\n    <circle cx="5.58" cy="7" r="0.14"/>\n    <circle cx="1.74" cy="12.18" r="0.14"/>\n    <circle cx="15.01" cy="7.75" r="0.14"/>\n    <circle cx="16.61" cy="13.96" r="0.14"/>\n    <circle cx="11.7" cy="10.44" r="0.14"/>\n    <circle cx="14.73" cy="10.86" r="0.14"/>\n    <circle cx="10.89" cy="16.04" r="0.14"/>\n    <circle cx="3.33" cy="20.43" r="0.14" transform="translate(-17.26 22.52) rotate(-86.53)"/>\n    <circle cx="2.11" cy="14.14" r="0.14" transform="translate(-12.12 15.39) rotate(-86.53)"/>\n    <circle cx="6.8" cy="17.94" r="0.14" transform="translate(-11.52 23.64) rotate(-86.53)"/>\n    <circle cx="3.8" cy="17.34" r="0.14" transform="translate(-13.74 20.09) rotate(-86.53)"/>\n    <circle cx="7.95" cy="12.4" r="0.14" transform="translate(-4.91 19.59) rotate(-86.53)"/>\n    <circle cx="2.48" cy="12.05" r="0.14" transform="translate(-4.74 2.09) rotate(-24.33)"/>\n    <circle cx="7.47" cy="8.04" r="0.14" transform="translate(-2.65 3.79) rotate(-24.33)"/>\n    <circle cx="6.3" cy="13.96" r="0.14" transform="translate(-5.19 3.83) rotate(-24.33)"/>\n    <circle cx="5.43" cy="11.02" r="0.14" transform="translate(-4.06 3.22) rotate(-24.33)"/>\n    <circle cx="11.73" cy="12.39" r="0.14" transform="translate(-4.06 5.93) rotate(-24.33)"/>\n    <circle cx="15.29" cy="3.66" r="0.14" transform="translate(9.97 18.46) rotate(-83.69)"/>\n    <circle cx="16.2" cy="10.01" r="0.14" transform="translate(4.47 25.01) rotate(-83.69)"/>\n    <circle cx="11.71" cy="5.97" r="0.14" transform="translate(4.48 16.96) rotate(-83.69)"/>\n    <circle cx="14.67" cy="6.72" r="0.14" transform="translate(6.38 20.57) rotate(-83.69)"/>\n    <circle cx="10.29" cy="11.45" r="0.14" transform="translate(-2.22 20.41) rotate(-83.69)"/>\n    <circle cx="12.11" cy="20.51" r="0.14" transform="translate(-9.09 31.35) rotate(-86.53)"/>\n    <circle cx="10.89" cy="14.22" r="0.14" transform="translate(-3.96 24.23) rotate(-86.53)"/>\n    <circle cx="15.57" cy="18.02" r="0.14" transform="translate(-3.35 32.48) rotate(-86.53)"/>\n    <circle cx="12.58" cy="17.42" r="0.14" transform="translate(-5.57 28.92) rotate(-86.53)"/>\n    <circle cx="16.72" cy="12.49" r="0.14" transform="matrix(0.06, -1, 1, 0.06, 3.25, 28.42)"/>\n    <circle cx="7.81" cy="26.22" r="0.14" transform="translate(-18.83 32.42) rotate(-86.53)"/>\n    <circle cx="6.59" cy="19.93" r="0.14" transform="translate(-13.7 25.3) rotate(-86.53)"/>\n    <circle cx="11.27" cy="23.73" r="0.14" transform="translate(-13.1 33.55) rotate(-86.53)"/>\n    <circle cx="8.28" cy="23.13" r="0.14" transform="translate(-15.32 29.99) rotate(-86.53)"/>\n    <circle cx="12.42" cy="18.2" r="0.14" transform="translate(-6.49 29.5) rotate(-86.53)"/>\n    <rect class="cls-3" x="10.08" y="22.15" width="20.17" height="3.91" transform="translate(-7.48 39.08) rotate(-78.52)"/>\n    <polygon class="cls-4" points="63.77 31.54 63.77 33.85 26.56 26.26 26.97 24.21 63.77 31.54"/>\n    <circle class="cls-3" cx="20.02" cy="24.08" r="9.21" transform="translate(-7.56 38.91) rotate(-78.52)"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/lollipop/lollipop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], LollipopComponent);
    return LollipopComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=lollipop.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EggComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var EggComponent = /** @class */ (function (_super) {
    __extends(EggComponent, _super);
    function EggComponent(element) {
        return _super.call(this, 'egg', element.nativeElement) || this;
    }
    EggComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'egg',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/egg/egg.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg class="egg" width="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.42 67.09">\n    <path class="cls-1" d="M29.91,28.28C23.78,37.27,22.08,61,40,60.89s16-23.78,9.78-32.7c-2.77-4-6.72-5.87-10-5.86S32.65,24.28,29.91,28.28Z"/>\n    <circle class="cls-2" cx="38.96" cy="50.4" r="11.9" transform="translate(-0.24 0.18) rotate(-0.27)"/>\n    <path class="cls-3" d="M46.7,38.35l-5.08-11.4-5.44,9.62L32.95,27.9l-8.18,6.64q0-.79,0-1.58C24.66,14.8,31.24,0,39.44,0c7.95,0,14.5,13.77,15,31.16l-5-5.16Z"/>\n    <path class="cls-3" d="M21.35,44,16.82,48.2l6.68,4.64-5.8,6.41,7.79,1.52-2.13,5.72-1,.2C11.66,68.62,1.73,63.33.2,54.86c-1.48-8.22,5.5-16.41,15.72-18.65Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225.91 266.42">\n    <path class="cls-1" d="M27,20.5c9.84,4.62,23.35,24.18,7.87,33.21S9,41.36,9.79,30.51c.37-4.84,2.81-8.47,5.61-10.11S22.57,18.44,27,20.5Z"/>\n    <circle class="cls-2" cx="30.4" cy="44.14" r="11.9" transform="matrix(0.86, -0.5, 0.5, 0.86, -18.1, 21.33)"/>\n    <path class="cls-3" d="M17.61,37.7,16.19,25.3l9.57,5.52-1.61-9.11,10.42,1.57q-.38-.69-.78-1.37C24.63,6.22,11.47-3.16,4.38,1-2.48,5-1.12,20.2,7.31,35.42l1.71-7Z"/>\n    <path class="cls-3" d="M42.31,29.66l6,1.34L45,38.4,53.21,41l-5.94,5.26L52,50.08l.94-.33C63.17,46,69,36.36,66.05,28.29,63.15,20.46,53,17,43,20.21Z"/>\n    <path class="cls-1" d="M209.19,177.46c.94,11.56-10,34.43-26.57,24.89s-2.27-30.48,8.2-35.47c4.67-2.23,9.33-1.89,12.33-.17S208.77,172.3,209.19,177.46Z"/>\n    <circle class="cls-2" cx="189.14" cy="193.18" r="12.69" transform="translate(-72.66 260.67) rotate(-60.06)"/>\n    <path class="cls-3" d="M188.32,177.92,199,170l0,11.79,7.58-6.32L210.65,186q.43-.72.86-1.45c9.67-16.79,11.37-33.95,3.79-38.31-7.35-4.23-20.71,5.1-30.33,21l7.39-2.13Z"/>\n    <path class="cls-3" d="M208.85,196.53l2,6.31-8.64.77,2,9-8-2.71-1,6.43.8.7c8.92,7.45,20.92,7.79,26.8.74,5.72-6.84,3.57-18.11-4.72-25.58Z"/>\n    <polygon class="cls-2" points="175.94 45.14 182.09 50.26 190.58 52.19 186.66 62.47 194.19 68.03 185.75 72.24 183 84.45 175.94 73.23 167.81 80.73 163.16 69.49 157.68 68.03 162.24 60.94 161.3 52.19 171.88 55.43 175.94 45.14"/>\n    <path class="cls-2" d="M183,94a9.53,9.53,0,0,1-8.07-4.46L174,88a9.53,9.53,0,0,1-15-3.62l-2.85-6.89-.92-.25a9.53,9.53,0,0,1-5.56-14.37l2.74-4.26-.58-5.41a9.53,9.53,0,0,1,12.27-10.14l2.15.66.83-2.1a9.53,9.53,0,0,1,15-3.83l4.39,3.66,6.27,1.43a9.53,9.53,0,0,1,6.79,12.69l-1.34,3.52,1.71,1.26a9.53,9.53,0,0,1-1.42,16.2l-4.39,2.19-1.75,7.79A9.54,9.54,0,0,1,183,94Zm-6.41-30.27.6.06h0c0-.14,0-.28,0-.43Z"/>\n    <circle class="cls-2" cx="166.82" cy="69.18" r="7.33"/>\n    <circle class="cls-2" cx="181.78" cy="58.19" r="7.33"/>\n    <polygon class="cls-2" points="63.64 225.07 72.09 222.18 78.87 215.2 86.39 224.9 96.07 220.95 95.18 231.45 105.23 241.16 90.43 241.38 92.87 253.49 79.44 251.4 74.87 255.77 70.76 247.31 61.86 243.13 71.09 234.92 63.64 225.07"/>\n    <path class="cls-2" d="M114.32,246.7a10.64,10.64,0,0,1-8.93,5.1l-2,0A10.64,10.64,0,0,1,91.23,264L83,262.72l-.77.74a10.64,10.64,0,0,1-16.93-3l-2.47-5.09-5.49-2.58a10.64,10.64,0,0,1-2.54-17.59l1.88-1.67-1.52-2a10.64,10.64,0,0,1,5-16.49l6-2.07,5-5.15a10.64,10.64,0,0,1,16,.89L89.85,212l2.2-.9a10.64,10.64,0,0,1,14.63,10.76l-.46,5.46,6.41,6.2a10.65,10.65,0,0,1,1.69,13.19ZM81.73,235.24q.19-.27.41-.54l0,0-.44-.2C81.74,234.73,81.74,235,81.73,235.24Z"/>\n    <circle class="cls-2" cx="81.28" cy="247.73" r="8.18" transform="translate(-172.58 188.3) rotate(-58.66)"/>\n    <circle class="cls-2" cx="79.48" cy="227.08" r="8.18" transform="translate(-155.81 176.86) rotate(-58.66)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.82 220.19">\n    <path class="cls-1" d="M41.77,23.38c15.39,3.4,40.74,26.75,21.73,44.46S23,58.61,20.69,43c-1-7,1.27-12.88,4.71-16.08S34.91,21.86,41.77,23.38Z"/>\n    <circle class="cls-2" cx="54.19" cy="55.71" r="17.24" transform="translate(-23.44 51.88) rotate(-42.97)"/>\n    <path class="cls-3" d="M34,50.68l-6-17.08,15.3,4.76L38.19,26l15.23-1.1q-.76-.85-1.54-1.69C33.93,3.92,12.32-5.13,3.62,3-4.81,10.82,2,31.91,18.75,50.75l.19-10.45Z"/>\n    <path class="cls-3" d="M66.41,31.44l9,0L72.93,42.95l12.49,1-6.72,9.34,7.93,3.93q.62-.37,1.23-.77c13.24-8.61,18.47-24.06,11.67-34.52-6.6-10.16-22.1-11.87-35.12-4.09Z"/>\n    <path class="cls-1" d="M211.52,77c3.05,15.29-8,47.54-31.61,37.37S172.13,74,185.34,65.74c5.89-3.7,12.17-4,16.44-2.14S210.16,70.19,211.52,77Z"/>\n    <circle class="cls-2" cx="187.17" cy="101.13" r="17.06" transform="translate(20.25 233.04) rotate(-66.7)"/>\n    <path class="cls-3" d="M183.71,80.88l13.1-12.19,1.78,15.75,9.14-9.62,7.06,13.36q.47-1,.92-2.07c10.31-23.93,9.91-47.1-.9-51.75-10.47-4.51-26.87,10-37.25,32.72l9.54-4Z"/>\n    <path class="cls-3" d="M214,102.54l3.6,8.12L206.2,113l4.07,11.71-11.13-2.37-.4,8.75q.58.41,1.18.81c13.07,8.57,29.14,7.15,35.91-3.17,6.57-10,1.95-24.74-10.28-33.43Z"/>\n    <polygon class="cls-1" points="176.62 177.38 185.37 174.38 192.39 167.16 200.18 177.2 210.21 173.12 209.28 183.98 219.69 194.04 204.36 194.27 206.89 206.81 192.98 204.64 188.25 209.17 183.99 200.41 174.78 196.07 184.34 187.58 176.62 177.38"/>\n    <path class="cls-1" d="M229.1,199.78a11,11,0,0,1-9.25,5.29l-2.08,0a11,11,0,0,1-12.58,12.6l-8.53-1.33-.8.76A11,11,0,0,1,178.34,214l-2.56-5.27L170.09,206a11,11,0,0,1-2.63-18.21l1.95-1.73L167.83,184a11,11,0,0,1,5.22-17.08l6.25-2.14,5.18-5.33a11,11,0,0,1,16.61.92l2.67,3.44,2.28-.93A11,11,0,0,1,221.19,174l-.48,5.65,6.64,6.42a11,11,0,0,1,1.75,13.66Zm-33.75-11.87q.2-.28.42-.56l0,0-.45-.21C195.36,187.38,195.36,187.64,195.36,187.91Z"/>\n    <circle class="cls-2" cx="194.88" cy="200.84" r="8.47" transform="translate(-78.02 262.83) rotate(-58.66)"/>\n    <circle class="cls-2" cx="193.02" cy="179.46" r="8.47" transform="translate(-60.64 250.98) rotate(-58.66)"/>\n    <polygon class="cls-1" points="17.4 128.4 22.46 126.66 26.52 122.49 31.03 128.3 36.83 125.93 36.29 132.22 42.31 138.03 33.45 138.16 34.91 145.42 26.87 144.16 24.13 146.78 21.66 141.71 16.34 139.21 21.87 134.29 17.4 128.4"/>\n    <path class="cls-1" d="M47.76,141.35a6.37,6.37,0,0,1-5.35,3.06l-1.2,0a6.37,6.37,0,0,1-7.28,7.29L29,150.95l-.46.44a6.37,6.37,0,0,1-10.14-1.82l-1.48-3L13.63,145a6.37,6.37,0,0,1-1.52-10.53l1.13-1-.91-1.2a6.37,6.37,0,0,1,3-9.88L19,121.13l3-3.08a6.37,6.37,0,0,1,9.61.53l1.54,2,1.32-.54a6.37,6.37,0,0,1,8.76,6.44l-.28,3.27,3.84,3.71a6.38,6.38,0,0,1,1,7.9Zm-19.52-6.86.24-.32v0l-.26-.12C28.24,134.18,28.24,134.33,28.24,134.49Z"/>\n    <circle class="cls-1" cx="27.97" cy="141.97" r="4.9" transform="matrix(0.52, -0.85, 0.85, 0.52, -107.83, 92.01)"/>\n    <circle class="cls-1" cx="26.89" cy="129.6" r="4.9" transform="matrix(0.52, -0.85, 0.85, 0.52, -97.79, 85.16)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.98 246.6">\n    <path class="cls-1" d="M28.81,16.13c10.62,2.34,28.1,18.45,15,30.67S15.86,40.43,14.27,29.67c-.71-4.8.88-8.88,3.25-11.09S24.08,15.08,28.81,16.13Z"/>\n    <circle class="cls-2" cx="37.38" cy="38.43" r="11.9" transform="translate(-16.17 35.79) rotate(-42.97)"/>\n    <path class="cls-3" d="M23.48,35,19.37,23.17l10.55,3.28-3.58-8.53,10.51-.76L35.79,16C23.4,2.7,8.5-3.54,2.5,2-3.32,7.47,1.37,22,12.93,35l.13-7.21Z"/>\n    <path class="cls-3" d="M45.81,21.69l6.19,0-1.69,8,8.62.69-4.64,6.44,5.47,2.71.85-.53c9.14-5.94,12.74-16.6,8.05-23.81-4.55-7-15.25-8.19-24.23-2.82Z"/>\n    <polygon class="cls-1" points="167.94 135.34 177.11 136.51 186.59 133.13 189.16 145.58 199.96 146.33 194.33 155.68 199.23 169.3 185.38 162.74 182.11 175.1 170.59 167.02 164.34 169 164.39 159.25 158.03 151.3 170.36 147.9 167.94 135.34"/>\n    <path class="cls-1" d="M205.15,178.6a11,11,0,0,1-10.63.66l-1.88-.89a11,11,0,0,1-16.85,5.76l-7.06-5-1.05.33a11,11,0,0,1-14.35-10.56l0-5.86-3.92-4.91a11,11,0,0,1,5.68-17.5l2.51-.69-.49-2.56a11,11,0,0,1,12.22-13l6.55.84,7-2.5a11,11,0,0,1,14.5,8.16l.88,4.26,2.46.17A11,11,0,0,1,209.4,152l-2.92,4.86,3.13,8.69a11,11,0,0,1-4.45,13Zm-25-25.54.62-.31,0,0-.31-.39C180.34,152.58,180.23,152.82,180.1,153.06Z"/>\n    <circle class="cls-2" cx="173.97" cy="164.45" r="8.47" transform="translate(-61.09 119.13) rotate(-32.48)"/>\n    <circle class="cls-2" cx="181.74" cy="144.44" r="8.47" transform="translate(-49.14 120.17) rotate(-32.48)"/>\n    <polygon class="cls-1" points="62.28 125.59 67.34 123.86 71.4 119.68 75.91 125.49 81.71 123.12 81.17 129.41 87.19 135.22 78.32 135.35 79.79 142.61 71.74 141.35 69.01 143.97 66.54 138.91 61.22 136.4 66.75 131.49 62.28 125.59"/>\n    <path class="cls-1" d="M92.63,138.54a6.37,6.37,0,0,1-5.35,3.06l-1.2,0a6.37,6.37,0,0,1-7.28,7.29l-4.93-.77-.46.44a6.37,6.37,0,0,1-10.14-1.82l-1.48-3-3.29-1.55A6.37,6.37,0,0,1,57,131.64l1.13-1-.91-1.2a6.37,6.37,0,0,1,3-9.88l3.62-1.24,3-3.08a6.37,6.37,0,0,1,9.61.53l1.54,2,1.32-.54a6.37,6.37,0,0,1,8.76,6.44l-.28,3.27,3.84,3.71a6.38,6.38,0,0,1,1,7.9Zm-19.52-6.86.24-.32v0l-.26-.12C73.12,131.37,73.12,131.52,73.12,131.68Z"/>\n    <circle class="cls-1" cx="72.84" cy="139.16" r="4.9" transform="matrix(0.52, -0.85, 0.85, 0.52, -83.9, 129)"/>\n    <circle class="cls-1" cx="71.77" cy="126.79" r="4.9" transform="matrix(0.52, -0.85, 0.85, 0.52, -73.85, 122.14)"/>\n    <polygon class="cls-1" points="13.19 213.49 19.73 208.9 23.81 201.21 32.7 207.67 40.03 201.86 41.88 211.1 52.94 216.94 40.28 220.82 45.4 230.62 33.34 232.17 30.5 237.07 24.85 230.83 16.16 229.45 22.05 220.09 13.19 213.49"/>\n    <path class="cls-1" d="M62.14,219.43a9.52,9.52,0,0,1-6.4,6.62l-1.72.53a9.52,9.52,0,0,1-7.4,13.49l-7.39,1-.48.83a9.52,9.52,0,0,1-15.31,1.62L20,239.71l-5.37-.85A9.52,9.52,0,0,1,8.1,224.38l1.2-1.91L7.5,221.13a9.52,9.52,0,0,1,.22-15.43l4.67-3.28,3-5.67a9.52,9.52,0,0,1,14-3.24l3,2.21,1.67-1.32A9.52,9.52,0,0,1,49.37,200l1,4.8,7.06,3.73a9.53,9.53,0,0,1,4.75,10.91Zm-30.86-1.72q.1-.28.22-.56v0l-.43-.06C31.15,217.27,31.22,217.49,31.27,217.71Z"/>\n    <circle class="cls-1" cx="34" cy="228.56" r="7.32" transform="translate(-195.51 201.65) rotate(-74.85)"/>\n    <circle class="cls-1" cx="27.3" cy="211.26" r="7.32" transform="translate(-183.76 182.41) rotate(-74.85)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222.23 212.07">\n    <path class="cls-1" d="M32.74,18.32c12.06,2.66,31.92,21,17,34.84S18,45.93,16.22,33.71c-.8-5.45,1-10.09,3.69-12.6S27.36,17.13,32.74,18.32Z"/>\n    <circle class="cls-2" cx="42.47" cy="43.66" r="13.51" transform="translate(-18.37 40.66) rotate(-42.97)"/>\n    <path class="cls-3" d="M26.67,39.72,22,26.33l12,3.73-4.06-9.69,11.94-.86-1.21-1.33C26.59,3.07,9.66-4,2.84,2.33-3.77,8.48,1.55,25,14.69,39.77l.15-8.19Z"/>\n    <path class="cls-3" d="M52,24.64l7,0-1.92,9,9.79.78-5.27,7.32,6.21,3.08,1-.6C79.24,37.5,83.34,25.38,78,17.19c-5.17-8-17.32-9.3-27.52-3.2Z"/>\n    <path class="cls-1" d="M207.39,58.71c-1.07,11.88-16.17,33.15-31.29,20.58s3-31.3,14.52-34.52c5.12-1.44,9.79-.28,12.52,2S207.87,53.41,207.39,58.71Z"/>\n    <circle class="cls-2" cx="184.3" cy="71.13" r="13.05" transform="translate(11.78 167.38) rotate(-50.26)"/>\n    <path class="cls-3" d="M186.15,55.52l12.25-6.11-2.1,11.94,8.79-5.08,2.29,11.33,1.12-1.32C221.24,50.95,226,33.86,219,28.11c-6.71-5.58-21.89,1.55-34.42,15.94l7.86-.86Z"/>\n    <path class="cls-3" d="M203.7,78l.89,6.74-8.9-.73.45,9.47-7.66-4.15-2.19,6.33q.34.43.69.85c7.73,9.12,19.84,11.56,27,5.45,7-5.93,6.79-17.73-.31-26.76Z"/>\n    <polygon class="cls-1" points="35.45 169.25 44.2 166.25 51.21 159.03 59.01 169.08 69.03 164.99 68.11 175.86 78.51 185.91 63.18 186.14 65.71 198.68 51.81 196.51 47.08 201.04 42.81 192.28 33.6 187.95 43.16 179.45 35.45 169.25"/>\n    <path class="cls-1" d="M87.93,191.65a11,11,0,0,1-9.25,5.29l-2.08,0A11,11,0,0,1,64,209.57l-8.53-1.33-.8.76a11,11,0,0,1-17.53-3.14L34.6,200.6l-5.69-2.68a11,11,0,0,1-2.63-18.21L28.23,178l-1.57-2.08a11,11,0,0,1,5.22-17.08l6.25-2.14,5.18-5.33a11,11,0,0,1,16.61.92l2.67,3.44,2.28-.93A11,11,0,0,1,80,165.92l-.48,5.65L86.17,178a11,11,0,0,1,1.75,13.66ZM54.18,179.78q.2-.28.42-.56l0,0-.45-.21C54.19,179.25,54.19,179.51,54.18,179.78Z"/>\n    <circle class="cls-2" cx="53.71" cy="192.71" r="8.47" transform="translate(-138.82 138.36) rotate(-58.66)"/>\n    <circle class="cls-2" cx="51.85" cy="171.33" r="8.47" transform="translate(-121.45 126.51) rotate(-58.66)"/>\n    <polygon class="cls-1" points="183.09 184.14 183.1 179.12 180.64 174.25 187.17 172.03 186.84 166.17 192.25 168.56 199.25 165.01 196.65 172.91 203.53 173.83 199.96 180.57 201.44 183.8 196.19 184.43 192.34 188.39 189.68 181.99 183.09 184.14"/>\n    <path class="cls-1" d="M203.85,161.2a6,6,0,0,1,1.07,5.68l-.35,1.07a6,6,0,0,1,4.24,8.68l-2.19,4.14.25.54a6,6,0,0,1-4.71,8.43l-3.15.38-2.38,2.44a6,6,0,0,1-9.8-1.87l-.54-1.3-1.34.44a6,6,0,0,1-7.83-5.7v-3.58l-1.82-3.6a6,6,0,0,1,3.41-8.35l2.23-.76-.07-1.33a6,6,0,0,1,8.39-5.79l2.81,1.25,4.46-2.27a6,6,0,0,1,7.31,1.52ZM191.8,176.4l-.21-.31v0l-.19.19Z"/>\n    <circle class="cls-1" cx="198.34" cy="178.93" r="4.59" transform="translate(-68.54 167.59) rotate(-39.62)"/>\n    <circle class="cls-1" cx="187.06" cy="176.1" r="4.59" transform="translate(-69.33 159.74) rotate(-39.62)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228.37 208.78">\n    <path class="cls-1" d="M28.81,27.78c10.62,2.34,28.1,18.45,15,30.67S15.86,52.09,14.27,41.33c-.71-4.8.88-8.88,3.25-11.09S24.08,26.74,28.81,27.78Z"/>\n    <circle class="cls-2" cx="37.38" cy="50.09" r="11.9" transform="translate(-24.11 38.92) rotate(-42.97)"/>\n    <path class="cls-3" d="M23.48,46.62,19.37,34.83l10.55,3.28-3.58-8.53,10.51-.76-1.06-1.17C23.4,14.36,8.5,8.12,2.5,13.71c-5.82,5.42-1.13,20,10.43,33l.13-7.21Z"/>\n    <path class="cls-3" d="M45.81,33.35l6.19,0-1.69,8,8.62.69-4.64,6.44,5.47,2.71.85-.53c9.14-5.94,12.74-16.6,8.05-23.81-4.55-7-15.25-8.19-24.23-2.82Z"/>\n    <path class="cls-1" d="M209.11,122.66c-1.39,15.42-21,43-40.6,26.71s3.94-40.61,18.84-44.79c6.65-1.87,12.7-.37,16.25,2.58S209.73,115.79,209.11,122.66Z"/>\n    <circle class="cls-2" cx="179.15" cy="138.79" r="16.94" transform="translate(-42.1 187.82) rotate(-50.26)"/>\n    <path class="cls-3" d="M181.55,118.53l15.9-7.93-2.73,15.49,11.4-6.59,3,14.7q.73-.84,1.46-1.71C227.09,112.6,233.21,90.42,224.23,83c-8.7-7.23-28.4,2-44.66,20.69l10.2-1.12Z"/>\n    <path class="cls-3" d="M204.32,147.66l1.15,8.74-11.55-.95.58,12.29-9.94-5.38-2.84,8.21q.44.56.9,1.1c10,11.83,25.74,15,35.08,7.07,9.07-7.69,8.81-23-.4-34.72Z"/>\n    <polygon class="cls-2" points="50.57 175.07 57.23 170.4 61.38 162.57 70.43 169.15 77.9 163.23 79.78 172.64 91.05 178.59 78.15 182.54 83.36 192.51 71.08 194.09 68.19 199.08 62.44 192.72 53.6 191.32 59.59 181.8 50.57 175.07"/>\n    <path class="cls-2" d="M100.41,181.12a9.7,9.7,0,0,1-6.52,6.74l-1.75.54a9.7,9.7,0,0,1-7.54,13.74l-7.53,1-.49.84A9.7,9.7,0,0,1,61,205.59l-3.45-3.82-5.46-.87a9.7,9.7,0,0,1-6.69-14.74l1.22-1.94-1.84-1.37A9.7,9.7,0,0,1,45,167.14l4.76-3.34L52.82,158a9.7,9.7,0,0,1,14.26-3.3l3.1,2.25,1.7-1.34a9.7,9.7,0,0,1,15.53,5.7l1,4.89L95.57,170a9.7,9.7,0,0,1,4.83,11.11ZM69,179.37q.1-.29.22-.58v0l-.43-.06C68.86,178.92,68.92,179.15,69,179.37Z"/>\n    <circle class="cls-2" cx="71.75" cy="190.42" r="7.45" transform="translate(-130.8 209.92) rotate(-74.85)"/>\n    <circle class="cls-2" cx="64.94" cy="172.81" r="7.45" transform="translate(-118.83 190.33) rotate(-74.85)"/>\n    <polygon class="cls-2" points="140.75 16.43 145.68 12.97 148.76 7.18 155.46 12.05 160.99 7.67 162.38 14.63 170.72 19.04 161.17 21.96 165.03 29.35 155.94 30.52 153.8 34.21 149.55 29.5 143 28.46 147.44 21.41 140.75 16.43"/>\n    <path class="cls-2" d="M177.65,20.91a7.18,7.18,0,0,1-4.83,5l-1.29.4A7.18,7.18,0,0,1,166,36.47l-5.57.72-.36.62A7.18,7.18,0,0,1,148.48,39l-2.56-2.83-4-.64a7.18,7.18,0,0,1-5-10.91l.9-1.44-1.36-1a7.18,7.18,0,0,1,.16-11.63l3.52-2.47,2.27-4.27A7.18,7.18,0,0,1,153,1.37L155.27,3l1.26-1A7.18,7.18,0,0,1,168,6.26l.73,3.62,5.32,2.81a7.18,7.18,0,0,1,3.58,8.23Zm-23.26-1.29q.07-.21.16-.43v0l-.32,0C154.29,19.29,154.34,19.45,154.39,19.62Z"/>\n    <circle class="cls-2" cx="156.44" cy="27.79" r="5.52" transform="translate(88.73 171.54) rotate(-74.85)"/>\n    <circle class="cls-2" cx="151.39" cy="14.76" r="5.52" transform="translate(97.59 157.03) rotate(-74.85)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.74 237.56">\n    <path class="cls-1" d="M16.13,110.48c2.34,10.62,18.45,28.1,30.67,15S40.43,97.52,29.67,95.94c-4.8-.71-8.88.88-11.09,3.25S15.08,105.74,16.13,110.48Z"/>\n    <circle class="cls-2" cx="38.43" cy="119.04" r="11.9" transform="translate(-74.87 66.03) rotate(-47.03)"/>\n    <path class="cls-3" d="M35,105.14,23.17,101l3.28,10.55L17.93,108l-.76,10.51L16,117.45C2.7,105.07-3.54,90.16,2,84.16,7.47,78.35,22,83,35,94.6l-7.21.13Z"/>\n    <path class="cls-3" d="M21.69,127.47l0,6.19,8-1.69.69,8.62L36.76,136l2.71,5.47q-.25.43-.53.85C33,151.41,22.34,155,15.13,150.33c-7-4.55-8.19-15.25-2.82-24.23Z"/>\n    <path class="cls-1" d="M116.5,18c-10.35,3.33-26.24,21-12,31.94s27.22-9,27.79-19.82c.25-4.84-1.71-8.76-4.27-10.74S121.11,16.54,116.5,18Z"/>\n    <circle class="cls-2" cx="110.07" cy="41.04" r="11.9" transform="translate(10.42 103.24) rotate(-52.42)"/>\n    <path class="cls-3" d="M123.58,36.27l3-12.12-10.2,4.26,2.76-8.83-10.53.23.95-1.26c11.08-14.4,25.33-22,31.83-17,6.3,4.85,3,19.77-7.29,33.79l-.81-7.16Z"/>\n    <path class="cls-3" d="M100.1,25.16l-6.17.56,2.43,7.77L87.85,35l5.22,6-5.19,3.21-.9-.45c-9.65-5.05-14.24-15.33-10.25-23,3.87-7.4,14.41-9.58,23.86-5.08Z"/>\n    <polygon class="cls-1" points="105.65 194.74 114.4 191.74 121.41 184.52 129.21 194.57 139.23 190.48 138.31 201.34 148.72 211.4 133.39 211.63 135.91 224.17 122.01 222 117.28 226.53 113.02 217.77 103.81 213.44 113.37 204.94 105.65 194.74"/>\n    <path class="cls-1" d="M158.13,217.14a11,11,0,0,1-9.25,5.29l-2.08,0a11,11,0,0,1-12.58,12.6l-8.53-1.33-.8.76a11,11,0,0,1-17.53-3.14l-2.56-5.27-5.69-2.68a11,11,0,0,1-2.63-18.21l1.95-1.73-1.57-2.08a11,11,0,0,1,5.22-17.08l6.25-2.14,5.18-5.33a11,11,0,0,1,16.61.92l2.67,3.44,2.28-.93a11,11,0,0,1,15.15,11.14l-.48,5.65,6.64,6.42a11,11,0,0,1,1.75,13.66Zm-33.75-11.87q.2-.28.42-.56l0,0-.45-.21C124.39,204.74,124.39,205,124.38,205.27Z"/>\n    <circle class="cls-2" cx="123.91" cy="218.2" r="8.47" transform="translate(-126.9 210.55) rotate(-58.66)"/>\n    <circle class="cls-2" cx="122.05" cy="196.82" r="8.47" transform="translate(-109.53 198.7) rotate(-58.66)"/>\n    <polygon class="cls-1" points="17.93 218.03 21.73 215.36 24.11 210.88 29.28 214.64 33.55 211.26 34.63 216.64 41.06 220.04 33.69 222.3 36.67 228 29.65 228.9 28 231.75 24.71 228.12 19.66 227.32 23.08 221.87 17.93 218.03"/>\n    <path class="cls-1" d="M46.41,221.49a5.54,5.54,0,0,1-3.73,3.85l-1,.31a5.54,5.54,0,0,1-4.31,7.85l-4.3.55-.28.48a5.54,5.54,0,0,1-8.91.94l-2-2.18-3.12-.49A5.54,5.54,0,0,1,15,224.37l.7-1.11-1.05-.78a5.54,5.54,0,0,1,.13-9l2.72-1.91,1.75-3.3a5.54,5.54,0,0,1,8.15-1.88l1.77,1.29,1-.77A5.54,5.54,0,0,1,39,210.17l.56,2.8,4.11,2.17a5.54,5.54,0,0,1,2.76,6.35Zm-18-1q.06-.17.13-.33v0l-.25,0C28.38,220.23,28.42,220.36,28.45,220.49Z"/>\n    <circle class="cls-1" cx="30.04" cy="226.8" r="4.26" transform="translate(-196.73 196.53) rotate(-74.85)"/>\n    <circle class="cls-1" cx="26.14" cy="216.73" r="4.26" transform="translate(-189.89 185.33) rotate(-74.85)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.88 246.75">\n    <path class="cls-1" d="M171.06,180.8c-10.62,2.34-28.1,18.45-15,30.67s27.94-6.36,29.53-17.12c.71-4.8-.88-8.88-3.25-11.09S175.8,179.75,171.06,180.8Z"/>\n    <circle class="cls-2" cx="162.5" cy="203.11" r="11.9" transform="translate(-96.88 183.58) rotate(-47.03)"/>\n    <path class="cls-3" d="M176.4,199.63l4.11-11.78L170,191.13l3.58-8.53L163,181.84l1.06-1.17c12.38-13.29,27.29-19.54,33.29-14,5.82,5.42,1.13,20-10.43,33l-.13-7.21Z"/>\n    <path class="cls-3" d="M185.07,142.36l-6.19,0,1.69,8-8.62.69,4.64,6.44-5.47,2.71-.85-.53c-9.14-5.94-12.74-16.6-8.05-23.81,4.55-7,15.25-8.19,24.23-2.82Z"/>\n    <path class="cls-1" d="M16.13,28.81c2.34,10.62,18.45,28.1,30.67,15S40.43,15.86,29.67,14.27c-4.8-.71-8.88.88-11.09,3.25S15.08,24.08,16.13,28.81Z"/>\n    <circle class="cls-2" cx="38.43" cy="37.38" r="11.9" transform="translate(-15.11 40.03) rotate(-47.03)"/>\n    <path class="cls-3" d="M35,23.48,23.17,19.37l3.28,10.55-8.53-3.58-.76,10.51L16,35.79C2.7,23.4-3.54,8.5,2,2.5,7.47-3.32,22,1.37,35,12.93l-7.21.13Z"/>\n    <path class="cls-3" d="M21.69,45.81l0,6.19,8-1.69.69,8.62,6.44-4.64,2.71,5.47q-.25.43-.53.85C33,69.75,22.34,73.36,15.13,68.67c-7-4.55-8.19-15.25-2.82-24.23Z"/>\n    <polygon class="cls-1" points="44.31 219.99 48.78 211.9 49.12 201.83 61.65 204.03 66.32 194.27 72.94 202.94 87.41 203.39 76.21 213.86 86.5 221.45 74.75 229.19 74.29 235.72 65.25 232.1 55.51 235.08 56.88 222.36 44.31 219.99"/>\n    <path class="cls-1" d="M98.23,201.31a11,11,0,0,1-3.3,10.13l-1.52,1.42a11,11,0,0,1-.85,17.79l-7.2,4.75-.08,1.1A11,11,0,0,1,70.19,246l-5.43-2.18-6,1.84A11,11,0,0,1,44.56,233.9l.28-2.59-2.56-.48a11,11,0,0,1-7.61-16.16l3.19-5.79.25-7.43A11,11,0,0,1,51,191l4.29.75,1.06-2.22a11,11,0,0,1,18.7-1.93l3.44,4.51,9.23.29a11,11,0,0,1,10.48,8.94Zm-33,13.89q0-.35-.06-.7v0l-.47.15C64.91,214.8,65.09,215,65.27,215.2Z"/>\n    <circle class="cls-2" cx="73.61" cy="225.1" r="8.47" transform="matrix(0.98, -0.19, 0.19, 0.98, -41.17, 17.94)"/>\n    <circle class="cls-2" cx="57.86" cy="210.51" r="8.47" transform="translate(-38.7 14.71) rotate(-10.88)"/>\n    <polygon class="cls-1" points="123.22 130.82 125.97 128.89 127.68 125.66 131.41 128.38 134.49 125.94 135.27 129.82 139.92 132.27 134.6 133.9 136.75 138.02 131.68 138.67 130.49 140.73 128.12 138.1 124.47 137.53 126.94 133.6 123.22 130.82"/>\n    <path class="cls-1" d="M143.78,133.32a4,4,0,0,1-2.69,2.78l-.72.22a4,4,0,0,1-3.11,5.67l-3.11.4-.2.35a4,4,0,0,1-6.43.68l-1.43-1.58-2.25-.36a4,4,0,0,1-2.76-6.08l.5-.8-.76-.57a4,4,0,0,1,.09-6.48l2-1.38,1.27-2.38a4,4,0,0,1,5.88-1.36l1.28.93.7-.55a4,4,0,0,1,6.41,2.35l.4,2,3,1.56a4,4,0,0,1,2,4.58Zm-13-.72.09-.24h0l-.18,0C130.76,132.41,130.79,132.5,130.82,132.6Z"/>\n    <circle class="cls-1" cx="131.96" cy="137.15" r="3.08" transform="translate(-34.91 228.69) rotate(-74.85)"/>\n    <circle class="cls-1" cx="129.15" cy="129.89" r="3.08" transform="matrix(0.26, -0.97, 0.97, 0.26, -29.97, 220.61)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.3 235.65">\n    <path class="cls-1" d="M205.48,82.32c-10.62,2.34-28.1,18.45-15,30.67s27.94-6.36,29.53-17.12c.71-4.8-.88-8.88-3.25-11.09S210.22,81.28,205.48,82.32Z"/>\n    <circle class="cls-2" cx="196.92" cy="104.63" r="11.9" transform="translate(-13.86 177.4) rotate(-47.03)"/>\n    <path class="cls-3" d="M210.82,101.15l4.11-11.78-10.55,3.28L208,84.12l-10.51-.76,1.06-1.17c12.38-13.29,27.29-19.54,33.29-14,5.82,5.42,1.13,20-10.43,33L221.23,94Z"/>\n    <path class="cls-3" d="M219.49,43.88l-6.19,0,1.69,8-8.62.69L211,59l-5.47,2.71-.85-.53c-9.14-5.94-12.74-16.6-8.05-23.81,4.55-7,15.25-8.19,24.23-2.82Z"/>\n    <path class="cls-1" d="M24.88,28.81c2.34,10.62,18.45,28.1,30.67,15S49.18,15.86,38.42,14.27c-4.8-.71-8.88.88-11.09,3.25S23.83,24.08,24.88,28.81Z"/>\n    <circle class="cls-2" cx="47.19" cy="37.38" r="11.9" transform="translate(-12.33 46.43) rotate(-47.03)"/>\n    <path class="cls-3" d="M43.71,23.48,31.93,19.37l3.28,10.55-8.53-3.58-.76,10.51-1.17-1.06C11.46,23.4,5.21,8.5,10.8,2.5c5.42-5.82,20-1.13,33,10.43l-7.21.13Z"/>\n    <path class="cls-3" d="M30.44,45.81l0,6.19,8-1.69.69,8.62,6.44-4.64,2.71,5.47q-.25.43-.53.85c-5.94,9.14-16.6,12.74-23.81,8.05-7-4.55-8.19-15.25-2.82-24.23Z"/>\n    <path class="cls-1" d="M16.13,152.84c2.34,10.62,18.45,28.1,30.67,15s-6.36-27.94-17.12-29.53c-4.8-.71-8.88.88-11.09,3.25S15.08,148.1,16.13,152.84Z"/>\n    <circle class="cls-2" cx="38.43" cy="161.4" r="11.9" transform="translate(-105.87 79.52) rotate(-47.03)"/>\n    <path class="cls-3" d="M35,147.5l-11.78-4.11,3.28,10.55-8.53-3.58-.76,10.51L16,159.81C2.7,147.43-3.54,132.53,2,126.52c5.42-5.82,20-1.13,33,10.43l-7.21.13Z"/>\n    <path class="cls-3" d="M21.69,169.83l0,6.19,8-1.69.69,8.62,6.44-4.64,2.71,5.47q-.25.43-.53.85c-5.94,9.14-16.6,12.74-23.81,8.05-7-4.55-8.19-15.25-2.82-24.23Z"/>\n    <polygon class="cls-1" points="169.77 183.65 178.52 180.66 185.54 173.44 193.34 183.48 203.36 179.39 202.43 190.26 212.84 200.32 197.51 200.54 200.04 213.08 186.13 210.92 181.4 215.45 177.14 206.68 167.93 202.35 177.49 193.85 169.77 183.65"/>\n    <path class="cls-1" d="M222.25,206.05a11,11,0,0,1-9.25,5.29l-2.08,0A11,11,0,0,1,198.34,224l-8.53-1.33-.8.76a11,11,0,0,1-17.53-3.14L168.93,215l-5.69-2.68a11,11,0,0,1-2.63-18.21l1.95-1.73L161,190.3a11,11,0,0,1,5.22-17.08l6.25-2.14,5.18-5.33a11,11,0,0,1,16.61.92l2.67,3.44,2.28-.93a11,11,0,0,1,15.15,11.14l-.48,5.65,6.64,6.42a11,11,0,0,1,1.75,13.66Zm-33.75-11.87q.2-.28.42-.56l0,0-.45-.21C188.51,193.65,188.52,193.92,188.51,194.19Z"/>\n    <circle class="cls-2" cx="188.03" cy="207.12" r="8.47" transform="translate(-86.66 260) rotate(-58.66)"/>\n    <circle class="cls-2" cx="186.18" cy="185.73" r="8.47" transform="translate(-69.29 248.15) rotate(-58.66)"/>\n    <polygon class="cls-2" points="57.61 219.52 60.8 217.28 62.78 213.54 67.11 216.69 70.69 213.86 71.59 218.36 76.97 221.2 70.8 223.09 73.3 227.87 67.42 228.62 66.04 231.01 63.29 227.97 59.06 227.29 61.93 222.74 57.61 219.52"/>\n    <path class="cls-2" d="M81.45,222.42a4.64,4.64,0,0,1-3.12,3.22l-.84.26a4.64,4.64,0,0,1-3.61,6.57l-3.6.46-.23.4a4.64,4.64,0,0,1-7.46.79l-1.65-1.83-2.61-.41a4.64,4.64,0,0,1-3.2-7.05l.58-.93-.88-.66a4.64,4.64,0,0,1,.11-7.52l2.28-1.6,1.47-2.76a4.64,4.64,0,0,1,6.82-1.58L67,210.86l.81-.64a4.64,4.64,0,0,1,7.43,2.72l.47,2.34,3.44,1.81a4.64,4.64,0,0,1,2.31,5.32Zm-15-.84.1-.28v0l-.21,0C66.36,221.36,66.39,221.47,66.42,221.58Z"/>\n    <circle class="cls-2" cx="67.75" cy="226.86" r="3.57" transform="translate(-168.94 232.97) rotate(-74.85)"/>\n    <circle class="cls-2" cx="64.48" cy="218.44" r="3.57" transform="translate(-163.21 223.6) rotate(-74.85)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.66 257.49">\n    <path class="cls-1" d="M219.38,12.47c-8.21,1.81-21.72,14.26-11.59,23.71s21.6-4.92,22.83-13.24a9.79,9.79,0,0,0-2.51-8.58A9.79,9.79,0,0,0,219.38,12.47Z"/>\n    <circle class="cls-2" cx="212.76" cy="29.71" r="9.2" transform="translate(46 165.15) rotate(-47.03)"/>\n    <path class="cls-3" d="M223.51,27l3.18-9.11-8.16,2.54,2.77-6.6-8.12-.59.82-.9c9.57-10.28,21.09-15.11,25.73-10.78s.88,15.43-8.07,25.48l-.1-5.57Z"/>\n    <path class="cls-3" d="M206.25,16.77l-4.79,0,1.31,6.15-6.66.53,3.58,5-4.23,2.1-.66-.41c-7.06-4.59-9.85-12.83-6.23-18.41,3.52-5.42,11.79-6.33,18.73-2.18Z"/>\n    <path class="cls-1" d="M64.27,54.21c15,1.36,41.94,20.45,26,39.58S50.71,90,46.64,75.42c-1.82-6.48-.36-12.39,2.52-15.84S57.56,53.61,64.27,54.21Z"/>\n    <circle class="cls-2" cx="79.99" cy="83.41" r="16.51" transform="translate(-35.29 91.6) rotate(-50.26)"/>\n    <path class="cls-3" d="M60.24,81.08l-7.73-15.5,15.11,2.66L61.18,57.13l14.33-2.9q-.82-.71-1.67-1.42c-19.39-16.12-41-22.09-48.29-13.34-7.05,8.48,2,27.69,20.17,43.54l-1.09-9.95Z"/>\n    <path class="cls-3" d="M88.64,58.88l8.52-1.12L96.24,69l12-.57L103,78.13l8,2.77q.54-.43,1.08-.88c11.53-9.78,14.62-25.1,6.89-34.2-7.5-8.84-22.43-8.59-33.85.39Z"/>\n    <polygon class="cls-1" points="12.86 214.67 21.61 211.68 28.63 204.45 36.43 214.5 46.45 210.41 45.52 221.28 55.93 231.34 40.6 231.56 43.13 244.1 29.23 241.94 24.49 246.47 20.23 237.7 11.02 233.37 20.58 224.87 12.86 214.67"/>\n    <path class="cls-1" d="M65.34,237.07a11,11,0,0,1-9.25,5.29l-2.08,0A11,11,0,0,1,41.44,255l-8.53-1.33-.8.76a11,11,0,0,1-17.53-3.14L12,246l-5.69-2.68A11,11,0,0,1,3.7,225.13l1.95-1.73-1.57-2.08A11,11,0,0,1,9.3,204.24l6.25-2.14,5.18-5.33a11,11,0,0,1,16.61.92L40,201.13l2.28-.93a11,11,0,0,1,15.15,11.14L57,217l6.64,6.42a11,11,0,0,1,1.75,13.66ZM31.6,225.2q.2-.28.42-.56l0,0-.45-.21C31.61,224.67,31.61,224.94,31.6,225.2Z"/>\n    <circle class="cls-2" cx="31.13" cy="238.13" r="8.47" transform="translate(-188.45 140.87) rotate(-58.66)"/>\n    <circle class="cls-2" cx="29.27" cy="216.75" r="8.47" transform="translate(-171.08 129.02) rotate(-58.66)"/>\n    <polygon class="cls-2" points="200.33 192.09 205.26 188.63 208.33 182.84 215.04 187.71 220.56 183.33 221.96 190.29 230.29 194.7 220.75 197.62 224.61 205 215.51 206.18 213.38 209.87 209.12 205.16 202.57 204.12 207.01 197.07 200.33 192.09"/>\n    <path class="cls-2" d="M237.22,196.57a7.18,7.18,0,0,1-4.83,5l-1.29.4a7.18,7.18,0,0,1-5.58,10.17l-5.57.72-.36.62a7.18,7.18,0,0,1-11.54,1.22l-2.56-2.83-4-.64a7.18,7.18,0,0,1-5-10.91l.9-1.44-1.36-1a7.18,7.18,0,0,1,.16-11.63l3.52-2.47,2.27-4.27A7.18,7.18,0,0,1,212.55,177l2.29,1.67,1.26-1a7.18,7.18,0,0,1,11.5,4.22l.73,3.62,5.32,2.81a7.18,7.18,0,0,1,3.58,8.23ZM214,195.28q.07-.21.16-.43v0l-.32,0C213.87,194.94,213.92,195.11,214,195.28Z"/>\n    <circle class="cls-2" cx="216.01" cy="203.45" r="5.52" transform="translate(-36.82 358.8) rotate(-74.85)"/>\n    <circle class="cls-2" cx="210.97" cy="190.42" r="5.52" transform="translate(-27.96 344.3) rotate(-74.85)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.64 259.42">\n    <path class="cls-1" d="M35.72,20C48.89,22.9,70.56,42.87,54.3,58S19.66,50.12,17.7,36.78c-.88-5.95,1.09-11,4-13.75S29.85,18.7,35.72,20Z"/>\n    <circle class="cls-2" cx="46.34" cy="47.65" r="14.75" transform="translate(-20.04 44.37) rotate(-42.97)"/>\n    <path class="cls-3" d="M29.1,43.34,24,28.73,37.09,32.8,32.66,22.22l13-.94q-.65-.73-1.32-1.45C29,3.35,10.54-4.39,3.1,2.54-4.11,9.26,1.69,27.29,16,43.4l.16-8.94Z"/>\n    <path class="cls-3" d="M56.79,26.89l7.68,0-2.1,9.87,10.68.86-5.75,8,6.78,3.36,1.05-.65c11.33-7.36,15.8-20.58,10-29.52-5.64-8.69-18.9-10.15-30-3.49Z"/>\n    <path class="cls-1" d="M192.11,133.36c-1,10.83-14.74,30.22-28.52,18.76s2.77-28.52,13.24-31.46c4.67-1.31,8.92-.26,11.41,1.81S192.55,128.53,192.11,133.36Z"/>\n    <circle class="cls-2" cx="171.07" cy="144.69" r="11.9" transform="translate(-49.56 183.74) rotate(-50.26)"/>\n    <path class="cls-3" d="M172.75,130.46l11.17-5.57L182,135.77l8-4.63,2.09,10.33,1-1.2c11.62-14,15.92-29.55,9.61-34.79-6.11-5.08-19.95,1.41-31.37,14.53l7.17-.79Z"/>\n    <path class="cls-3" d="M188.75,150.93l.81,6.14-8.11-.67.41,8.64-7-3.78-2,5.77q.31.39.63.78c7,8.31,18.08,10.53,24.64,5,6.37-5.4,6.19-16.16-.28-24.39Z"/>\n    <polygon class="cls-1" points="58.9 216.6 67.65 213.61 74.67 206.38 82.46 216.43 92.48 212.34 91.56 223.21 101.97 233.26 86.64 233.49 89.17 246.03 75.26 243.87 70.53 248.4 66.27 239.63 57.06 235.3 66.62 226.8 58.9 216.6"/>\n    <path class="cls-1" d="M111.38,239a11,11,0,0,1-9.25,5.29l-2.08,0a11,11,0,0,1-12.58,12.6l-8.53-1.33-.8.76a11,11,0,0,1-17.53-3.14l-2.56-5.27-5.69-2.68a11,11,0,0,1-2.63-18.21l1.95-1.73-1.57-2.08a11,11,0,0,1,5.22-17.08L61.58,204l5.18-5.33a11,11,0,0,1,16.61.92L86,203.06l2.28-.93a11,11,0,0,1,15.15,11.14l-.48,5.65,6.64,6.42A11,11,0,0,1,111.38,239ZM77.64,227.13q.2-.28.42-.56l0,0-.45-.21C77.64,226.6,77.64,226.87,77.64,227.13Z"/>\n    <circle class="cls-2" cx="77.16" cy="240.06" r="8.47" transform="translate(-168.01 181.11) rotate(-58.66)"/>\n    <circle class="cls-2" cx="75.3" cy="218.68" r="8.47" transform="translate(-150.64 169.26) rotate(-58.66)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228.77 233.32">\n    <path class="cls-1" d="M193.91,22.38C181.06,26.51,161.33,48.46,179,62s33.79-11.12,34.5-24.61c.31-6-2.12-10.88-5.31-13.33S199.64,20.53,193.91,22.38Z"/>\n    <circle class="cls-2" cx="185.93" cy="50.95" r="14.77" transform="translate(32.16 167.23) rotate(-52.42)"/>\n    <path class="cls-3" d="M202.71,45l3.7-15-12.66,5.29,3.43-11-13.08.29q.58-.79,1.18-1.57C199,5.15,216.73-4.3,224.8,1.91c7.82,6,3.73,24.54-9.05,42l-1-8.89Z"/>\n    <path class="cls-3" d="M173.56,31.23l-7.66.69,3,9.64-10.57,1.86,6.48,7.42-6.45,4-1.11-.55c-12-6.27-17.68-19-12.73-28.5,4.81-9.19,17.89-11.9,29.62-6.31Z"/>\n    <path class="cls-1" d="M83.8,182.34c2.34,10.62,18.45,28.1,30.67,15s-6.36-27.94-17.12-29.53c-4.8-.71-8.88.88-11.09,3.25S82.75,177.6,83.8,182.34Z"/>\n    <circle class="cls-2" cx="106.1" cy="190.9" r="11.9" transform="translate(-105.91 138.42) rotate(-47.03)"/>\n    <path class="cls-3" d="M102.63,177l-11.78-4.11,3.28,10.55-8.53-3.58-.76,10.51-1.17-1.06C70.37,176.93,64.13,162,69.72,156c5.42-5.82,20-1.13,33,10.43l-7.21.13Z"/>\n    <path class="cls-3" d="M89.36,199.33l0,6.19,8-1.69.69,8.62,6.44-4.64,2.71,5.47q-.25.43-.53.85c-5.94,9.14-16.6,12.74-23.81,8.05-7-4.55-8.19-15.25-2.82-24.23Z"/>\n    <polygon class="cls-1" points="35.56 84.75 44.31 81.76 51.33 74.53 59.13 84.58 69.15 80.49 68.23 91.36 78.63 101.42 63.3 101.64 65.83 114.18 51.93 112.02 47.19 116.55 42.93 107.78 33.72 103.45 43.28 94.95 35.56 84.75"/>\n    <path class="cls-1" d="M88,107.15a11,11,0,0,1-9.25,5.29l-2.08,0a11,11,0,0,1-12.58,12.6l-8.53-1.33-.8.76a11,11,0,0,1-17.53-3.14l-2.56-5.27L29,113.42A11,11,0,0,1,26.4,95.21l1.95-1.73L26.78,91.4A11,11,0,0,1,32,74.32l6.25-2.14,5.18-5.33A11,11,0,0,1,60,67.78l2.67,3.44L65,70.28A11,11,0,0,1,80.13,81.42l-.48,5.65,6.64,6.42A11,11,0,0,1,88,107.15ZM54.3,95.28q.2-.28.42-.56l0,0-.45-.21C54.31,94.75,54.31,95,54.3,95.28Z"/>\n    <circle class="cls-2" cx="53.83" cy="108.22" r="8.47" transform="translate(-66.6 97.91) rotate(-58.66)"/>\n    <circle class="cls-2" cx="51.97" cy="86.83" r="8.47" transform="translate(-49.22 86.06) rotate(-58.66)"/>\n    <polygon class="cls-2" points="8.84 202.6 14.9 198.34 18.69 191.2 26.94 197.2 33.74 191.81 35.46 200.38 45.73 205.8 33.97 209.4 38.72 218.49 27.53 219.93 24.9 224.48 19.66 218.68 11.6 217.41 17.06 208.72 8.84 202.6"/>\n    <path class="cls-2" d="M54.26,208.11a8.84,8.84,0,0,1-5.94,6.14l-1.59.49a8.84,8.84,0,0,1-6.87,12.52l-6.86.88-.44.77a8.84,8.84,0,0,1-14.2,1.5l-3.15-3.48-5-.79a8.84,8.84,0,0,1-6.1-13.43l1.11-1.77-1.68-1.25a8.84,8.84,0,0,1,.2-14.32l4.34-3,2.79-5.26a8.84,8.84,0,0,1,13-3l2.82,2.05,1.55-1.23a8.84,8.84,0,0,1,14.15,5.19l.89,4.46L49.85,198a8.84,8.84,0,0,1,4.4,10.13Zm-28.64-1.59q.09-.26.2-.52v0l-.39-.06C25.5,206.11,25.57,206.31,25.62,206.52Z"/>\n    <circle class="cls-2" cx="28.15" cy="216.58" r="6.79" transform="translate(-188.27 187.16) rotate(-74.85)"/>\n    <circle class="cls-2" cx="21.93" cy="200.53" r="6.79" transform="translate(-177.36 169.3) rotate(-74.85)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="egg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242.04 231.67">\n    <path class="cls-1" d="M23.89,143.74C30.33,152.51,52.12,162,58,145.06s-17.11-23-27.59-20.1c-4.67,1.29-7.77,4.39-8.84,7.45S21,139.83,23.89,143.74Z"/>\n    <circle class="cls-2" cx="47.76" cy="142.56" r="11.9" transform="translate(-102.58 140.93) rotate(-70.86)"/>\n    <path class="cls-3" d="M39,131.25l-12.44,1,7.27,8.33-9.25.17,3.55,9.92-1.5-.5c-17.16-6-28.9-17.07-26.21-24.82,2.61-7.51,17.81-9.1,34.37-3.77l-6.54,3Z"/>\n    <path class="cls-3" d="M35.85,157l2.48,5.68,6.6-4.76,4.11,7.6,4-6.84,4.69,3.91q-.06.49-.14,1c-1.74,10.76-10,18.36-18.53,17-8.25-1.33-13.65-10.64-12.37-21Z"/>\n    <path class="cls-1" d="M209,18C198.65,21.35,182.76,39,197,50s27.22-9,27.79-19.82c.25-4.84-1.71-8.76-4.27-10.74S213.62,16.54,209,18Z"/>\n    <circle class="cls-2" cx="202.57" cy="41.04" r="11.9" transform="translate(46.51 176.55) rotate(-52.42)"/>\n    <path class="cls-3" d="M216.08,36.27l3-12.12-10.2,4.26,2.76-8.83-10.53.23.95-1.26c11.08-14.4,25.33-22,31.83-17,6.3,4.85,3,19.77-7.29,33.79l-.81-7.16Z"/>\n    <path class="cls-3" d="M192.61,25.16l-6.17.56,2.43,7.77L180.35,35l5.22,6-5.19,3.21-.9-.45c-9.65-5.05-14.24-15.33-10.25-23,3.87-7.4,14.41-9.58,23.86-5.08Z"/>\n    <polygon class="cls-1" points="187.95 188.86 196.7 185.86 203.72 178.64 211.51 188.68 221.54 184.59 220.61 195.46 231.02 205.52 215.69 205.75 218.22 218.29 204.31 216.12 199.58 220.65 195.32 211.89 186.11 207.55 195.67 199.06 187.95 188.86"/>\n    <path class="cls-1" d="M240.43,211.26a11,11,0,0,1-9.25,5.29l-2.08,0a11,11,0,0,1-12.58,12.6L208,227.85l-.8.76a11,11,0,0,1-17.53-3.14l-2.56-5.27-5.69-2.68a11,11,0,0,1-2.63-18.21l1.95-1.73-1.57-2.08a11,11,0,0,1,5.22-17.08l6.25-2.14,5.18-5.33a11,11,0,0,1,16.61.92l2.67,3.44,2.28-.93a11,11,0,0,1,15.15,11.14l-.48,5.65,6.64,6.42a11,11,0,0,1,1.75,13.66Zm-33.75-11.87q.2-.28.42-.56l0,0-.45-.21C206.69,198.86,206.69,199.12,206.69,199.39Z"/>\n    <circle class="cls-2" cx="206.21" cy="212.32" r="8.47" transform="translate(-82.38 278.02) rotate(-58.66)"/>\n    <circle class="cls-2" cx="204.36" cy="190.94" r="8.47" transform="translate(-65.01 266.17) rotate(-58.66)"/>\n    <polygon class="cls-2" points="78.59 196.84 83.05 193.71 85.84 188.46 91.91 192.87 96.91 188.9 98.17 195.21 105.72 199.2 97.08 201.85 100.57 208.53 92.34 209.59 90.4 212.94 86.55 208.67 80.62 207.74 84.64 201.35 78.59 196.84"/>\n    <path class="cls-2" d="M112,200.9a6.5,6.5,0,0,1-4.37,4.52l-1.17.36A6.5,6.5,0,0,1,101.4,215l-5,.65-.33.56a6.5,6.5,0,0,1-10.45,1.1l-2.32-2.56-3.66-.58a6.5,6.5,0,0,1-4.49-9.88l.82-1.3-1.23-.92a6.5,6.5,0,0,1,.15-10.53L78,189.28l2.06-3.87a6.5,6.5,0,0,1,9.56-2.21l2.08,1.51,1.14-.9a6.5,6.5,0,0,1,10.41,3.82l.66,3.28,4.82,2.54A6.5,6.5,0,0,1,112,200.9Zm-21.07-1.17q.07-.19.15-.39v0l-.29,0C90.85,199.42,90.89,199.57,90.93,199.73Z"/>\n    <circle class="cls-2" cx="92.79" cy="207.13" r="5" transform="translate(-131.39 242.57) rotate(-74.85)"/>\n    <circle class="cls-2" cx="88.22" cy="195.32" r="5" transform="translate(-123.37 229.44) rotate(-74.85)"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/egg/egg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], EggComponent);
    return EggComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=egg.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarringsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var EarringsComponent = /** @class */ (function (_super) {
    __extends(EarringsComponent, _super);
    function EarringsComponent(element) {
        return _super.call(this, 'earrings', element.nativeElement) || this;
    }
    EarringsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'earrings',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/earrings/earrings.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg class="earrings--default" width="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.12 127.91">\n    <path class="cls-1" d="M49.78,21.17C49.78,10.36,45,1.59,39,1.59S28.32,10.36,28.32,21.17V51.73"/>\n    <ellipse class="cls-2" cx="28.42" cy="51.32" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="28.76" cy="120.84" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="38.79" cy="116.35" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="45.43" cy="107.61" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="48.75" cy="97.39" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="49.78" cy="86.16" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="48.5" cy="75.43" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="45.18" cy="64.95" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="38.54" cy="55.72" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="18.19" cy="116.51" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="11.55" cy="107.78" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="8.23" cy="97.55" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="7.21" cy="86.33" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="8.48" cy="75.6" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="11.8" cy="65.12" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="18.45" cy="55.89" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-3" cx="28.76" cy="85.91" rx="15.07" ry="29.19"/>\n    <path class="cls-1" d="M90.34,21.17c0-10.82,4.8-19.58,10.73-19.58s10.73,8.77,10.73,19.58V51.73"/>\n    <ellipse class="cls-2" cx="111.7" cy="51.32" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="111.36" cy="120.84" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="101.32" cy="116.35" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="94.68" cy="107.61" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="91.36" cy="97.39" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="90.34" cy="86.16" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="91.62" cy="75.43" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="94.94" cy="64.95" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="101.58" cy="55.72" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="121.92" cy="116.51" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="128.57" cy="107.78" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="131.89" cy="97.55" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="132.91" cy="86.33" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="131.63" cy="75.6" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="128.31" cy="65.12" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-2" cx="121.67" cy="55.89" rx="5.62" ry="5.49"/>\n    <ellipse class="cls-3" cx="111.36" cy="85.91" rx="15.07" ry="29.19"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="earrings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.03 27.95">\n    <ellipse class="cls-1" cx="9.49" cy="2.36" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="9.61" cy="25.58" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.96" cy="24.08" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.18" cy="21.17" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.28" cy="17.75" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.63" cy="14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.2" cy="10.42" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.09" cy="6.92" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.87" cy="3.84" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.08" cy="24.14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.86" cy="21.22" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.75" cy="17.81" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.41" cy="14.06" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.83" cy="10.47" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.94" cy="6.97" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.16" cy="3.89" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="9.6" cy="13.92" rx="5.03" ry="9.75"/>\n    <ellipse class="cls-1" cx="142.49" cy="2.36" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="142.61" cy="25.58" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="145.96" cy="24.08" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="148.18" cy="21.17" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="149.28" cy="17.75" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="149.63" cy="14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="149.2" cy="10.42" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="148.09" cy="6.92" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="145.87" cy="3.84" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="139.08" cy="24.14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="136.86" cy="21.22" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="135.75" cy="17.81" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="135.41" cy="14.06" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="135.83" cy="10.47" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="136.94" cy="6.97" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="139.16" cy="3.89" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="142.6" cy="13.92" rx="5.03" ry="9.75"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="earrings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.03 27.95">\n    <ellipse class="cls-1" cx="9.49" cy="2.36" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="9.61" cy="25.58" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.96" cy="24.08" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.18" cy="21.17" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.28" cy="17.75" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.63" cy="14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.2" cy="10.42" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.09" cy="6.92" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.87" cy="3.84" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.08" cy="24.14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.86" cy="21.22" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.75" cy="17.81" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.41" cy="14.06" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.83" cy="10.47" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.94" cy="6.97" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.16" cy="3.89" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="9.6" cy="13.92" rx="5.03" ry="9.75"/>\n    <ellipse class="cls-1" cx="142.49" cy="2.36" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="142.61" cy="25.58" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="145.96" cy="24.08" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="148.18" cy="21.17" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="149.28" cy="17.75" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="149.63" cy="14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="149.2" cy="10.42" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="148.09" cy="6.92" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="145.87" cy="3.84" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="139.08" cy="24.14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="136.86" cy="21.22" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="135.75" cy="17.81" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="135.41" cy="14.06" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="135.83" cy="10.47" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="136.94" cy="6.97" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="139.16" cy="3.89" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="142.6" cy="13.92" rx="5.03" ry="9.75"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="earrings earrings--zombie" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.72 48.05">\n    <ellipse class="cls-1" cx="16.32" cy="4.06" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="16.51" cy="43.98" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="22.28" cy="41.4" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="26.09" cy="36.39" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="28" cy="30.52" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="28.58" cy="24.07" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="27.85" cy="17.91" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="25.94" cy="11.89" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="22.13" cy="6.59" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="10.44" cy="41.5" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="6.63" cy="36.49" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="4.73" cy="30.61" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="4.14" cy="24.17" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="4.87" cy="18.01" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="6.78" cy="11.99" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="10.59" cy="6.69" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-2" cx="16.51" cy="23.93" rx="8.65" ry="16.76"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="earrings earrings--zombie" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.05 48.05">\n    <ellipse class="cls-1" cx="16.32" cy="4.06" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="16.51" cy="43.98" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="22.28" cy="41.4" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="26.09" cy="36.39" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="28" cy="30.52" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="28.58" cy="24.07" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="27.85" cy="17.91" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="25.94" cy="11.89" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="22.13" cy="6.59" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="10.44" cy="41.5" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="6.63" cy="36.49" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="4.73" cy="30.61" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="4.14" cy="24.17" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="4.87" cy="18.01" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="6.78" cy="11.99" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="10.59" cy="6.69" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-2" cx="16.51" cy="23.93" rx="8.65" ry="16.76"/>\n    <ellipse class="cls-1" cx="167.65" cy="4.06" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="167.85" cy="43.98" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="173.61" cy="41.4" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="177.42" cy="36.39" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="179.33" cy="30.52" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="179.92" cy="24.07" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="179.18" cy="17.91" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="177.28" cy="11.89" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="173.46" cy="6.59" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="161.78" cy="41.5" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="157.97" cy="36.49" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="156.06" cy="30.61" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="155.47" cy="24.17" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="156.21" cy="18.01" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="158.11" cy="11.99" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-1" cx="161.92" cy="6.69" rx="3.23" ry="3.15"/>\n    <ellipse class="cls-2" cx="167.85" cy="23.93" rx="8.65" ry="16.76"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="earrings earrings--yaga" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.88 20.66">\n    <ellipse class="cls-1" cx="64.32" cy="1.83" rx="1.45" ry="1.42" transform="translate(2.65 20.19) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="70" cy="18.83" rx="1.45" ry="1.42" transform="translate(-2.38 22.82) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="72.1" cy="16.92" rx="1.45" ry="1.42" transform="translate(-1.68 23.38) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="73.02" cy="14.25" rx="1.45" ry="1.42" transform="translate(-0.8 23.53) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="73.01" cy="11.48" rx="1.45" ry="1.42" transform="translate(0.07 23.39) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="72.36" cy="8.64" rx="1.45" ry="1.42" transform="translate(0.92 23.04) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="71.18" cy="6.12" rx="1.45" ry="1.42" transform="translate(1.65 22.55) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="69.52" cy="3.82" rx="1.45" ry="1.42" transform="translate(2.29 21.92) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="67.15" cy="2.09" rx="1.45" ry="1.42" transform="translate(2.71 21.09) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="67.07" cy="18.63" rx="1.45" ry="1.42" transform="translate(-2.46 21.89) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="64.74" cy="17.02" rx="1.45" ry="1.42" transform="translate(-2.08 21.08) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="63.1" cy="14.78" rx="1.45" ry="1.42" transform="translate(-1.46 20.46) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="61.94" cy="12.12" rx="1.45" ry="1.42" transform="translate(-0.68 19.96) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="61.39" cy="9.38" rx="1.45" ry="1.42" transform="translate(0.14 19.65) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="61.36" cy="6.55" rx="1.45" ry="1.42" transform="translate(1.03 19.5) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="62.24" cy="3.75" rx="1.45" ry="1.42" transform="matrix(0.95, -0.31, 0.31, 0.95, 1.94, 19.64)"/>\n    <ellipse class="cls-2" cx="67.19" cy="10.28" rx="3.89" ry="7.53" transform="translate(0.15 21.51) rotate(-18.21)"/>\n    <ellipse class="cls-1" cx="4.81" cy="18.83" rx="1.42" ry="1.45" transform="translate(-14.58 17.52) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="10.5" cy="1.83" rx="1.42" ry="1.45" transform="translate(5.48 11.23) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="12.6" cy="3.74" rx="1.42" ry="1.45" transform="translate(5.11 14.54) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="13.52" cy="6.41" rx="1.42" ry="1.45" transform="translate(3.2 17.25) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="13.51" cy="9.19" rx="1.42" ry="1.45" transform="translate(0.56 19.15) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="12.85" cy="12.02" rx="1.42" ry="1.45" transform="translate(-2.58 20.47) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="11.68" cy="14.54" rx="1.42" ry="1.45" transform="translate(-5.79 21.09) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="10.02" cy="16.84" rx="1.42" ry="1.45" transform="matrix(0.31, -0.95, 0.95, 0.31, -9.11, 21.1)"/>\n    <ellipse class="cls-1" cx="7.65" cy="18.57" rx="1.42" ry="1.45" transform="translate(-12.38 20.03) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="7.56" cy="2.04" rx="1.42" ry="1.45" transform="translate(3.26 8.58) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="5.23" cy="3.64" rx="1.42" ry="1.45" transform="translate(0.14 7.47) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="3.59" cy="5.88" rx="1.42" ry="1.45" transform="translate(-3.11 7.46) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="2.44" cy="8.55" rx="1.42" ry="1.45" transform="translate(-6.44 8.19) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="1.89" cy="11.28" rx="1.42" ry="1.45" transform="translate(-9.42 9.55) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="1.86" cy="14.11" rx="1.42" ry="1.45" transform="translate(-12.13 11.47) rotate(-71.79)"/>\n    <ellipse class="cls-1" cx="2.74" cy="16.91" rx="1.42" ry="1.45" transform="matrix(0.31, -0.95, 0.95, 0.31, -14.18, 14.23)"/>\n    <ellipse class="cls-2" cx="7.69" cy="10.39" rx="7.53" ry="3.89" transform="translate(-4.58 14.44) rotate(-71.79)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="earrings earrings--yaga" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.14 38.61">\n    <ellipse class="cls-1" cx="13.11" cy="3.27" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="13.27" cy="35.34" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="17.9" cy="33.27" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="20.96" cy="29.24" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="22.49" cy="24.52" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="22.97" cy="19.34" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="22.38" cy="14.39" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="20.84" cy="9.56" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="17.78" cy="5.3" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="8.39" cy="33.35" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="5.33" cy="29.32" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="3.8" cy="24.6" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="3.33" cy="19.42" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="3.91" cy="14.47" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="5.45" cy="9.63" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="8.51" cy="5.38" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-2" cx="13.27" cy="19.23" rx="6.95" ry="13.47"/>\n    <ellipse class="cls-1" cx="109.96" cy="3.27" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="110.12" cy="35.34" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="114.75" cy="33.27" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="117.81" cy="29.24" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="119.35" cy="24.52" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="119.82" cy="19.34" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="119.23" cy="14.39" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="117.7" cy="9.56" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="114.63" cy="5.3" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="105.24" cy="33.35" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="102.18" cy="29.32" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="100.65" cy="24.6" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="100.18" cy="19.42" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="100.77" cy="14.47" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="102.3" cy="9.63" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="105.36" cy="5.38" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-2" cx="110.12" cy="19.23" rx="6.95" ry="13.47"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="earrings earrings--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.37 101.52">\n    <ellipse class="cls-1" cx="9.49" cy="2.36" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="9.61" cy="25.58" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.96" cy="24.08" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.18" cy="21.17" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.28" cy="17.75" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.63" cy="14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.2" cy="10.42" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.09" cy="6.92" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.87" cy="3.84" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.08" cy="24.14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.86" cy="21.22" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.75" cy="17.81" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.41" cy="14.06" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.83" cy="10.47" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.94" cy="6.97" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.16" cy="3.89" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="9.6" cy="13.92" rx="5.03" ry="9.75"/>\n    <ellipse class="cls-1" cx="130.82" cy="2.36" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="130.94" cy="25.58" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="134.29" cy="24.08" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="136.51" cy="21.17" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="137.62" cy="17.75" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="137.96" cy="14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="137.53" cy="10.42" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="136.42" cy="6.92" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="134.21" cy="3.84" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="127.41" cy="24.14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="125.19" cy="21.22" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="124.08" cy="17.81" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="123.74" cy="14.06" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="124.17" cy="10.47" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="125.28" cy="6.97" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="127.49" cy="3.89" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="130.94" cy="13.92" rx="5.03" ry="9.75"/>\n    <ellipse class="cls-1" cx="9.49" cy="75.93" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="9.61" cy="99.15" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.96" cy="97.65" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.18" cy="94.74" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.28" cy="91.32" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.63" cy="87.57" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.2" cy="83.99" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.09" cy="80.49" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.87" cy="77.4" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.08" cy="97.71" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.86" cy="94.79" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.75" cy="91.37" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.41" cy="87.63" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.83" cy="84.04" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.94" cy="80.54" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.16" cy="77.46" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="9.6" cy="87.49" rx="5.03" ry="9.75"/>\n    <ellipse class="cls-1" cx="130.82" cy="75.93" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="130.94" cy="99.15" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="134.29" cy="97.65" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="136.51" cy="94.74" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="137.62" cy="91.32" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="137.96" cy="87.57" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="137.53" cy="83.99" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="136.42" cy="80.49" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="134.21" cy="77.4" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="127.41" cy="97.71" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="125.19" cy="94.79" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="124.08" cy="91.37" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="123.74" cy="87.63" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="124.17" cy="84.04" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="125.28" cy="80.54" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="127.49" cy="77.46" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="130.94" cy="87.49" rx="5.03" ry="9.75"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="earrings earrings--alien" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.01 27.95">\n    <ellipse class="cls-1" cx="9.49" cy="2.36" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="9.61" cy="25.58" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.96" cy="24.08" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.18" cy="21.17" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.28" cy="17.75" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.63" cy="14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.2" cy="10.42" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.09" cy="6.92" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.87" cy="3.84" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.08" cy="24.14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.86" cy="21.22" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.75" cy="17.81" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.41" cy="14.06" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.83" cy="10.47" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.94" cy="6.97" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.16" cy="3.89" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="9.6" cy="13.92" rx="5.03" ry="9.75"/>\n    <ellipse class="cls-1" cx="171.47" cy="2.36" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="171.58" cy="25.58" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="174.93" cy="24.08" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="177.15" cy="21.17" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="178.26" cy="17.75" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="178.6" cy="14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="178.17" cy="10.42" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="177.07" cy="6.92" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="174.85" cy="3.84" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="168.05" cy="24.14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="165.83" cy="21.22" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="164.72" cy="17.81" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="164.38" cy="14.06" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="164.81" cy="10.47" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="165.92" cy="6.97" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="168.14" cy="3.89" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="171.58" cy="13.92" rx="5.03" ry="9.75"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="earrings earrings--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.03 27.95">\n    <ellipse class="cls-1" cx="9.49" cy="2.36" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="9.61" cy="25.58" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.96" cy="24.08" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.18" cy="21.17" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.28" cy="17.75" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.63" cy="14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="16.2" cy="10.42" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="15.09" cy="6.92" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="12.87" cy="3.84" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.08" cy="24.14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.86" cy="21.22" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.75" cy="17.81" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.41" cy="14.06" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="2.83" cy="10.47" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="3.94" cy="6.97" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="6.16" cy="3.89" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="9.6" cy="13.92" rx="5.03" ry="9.75"/>\n    <ellipse class="cls-1" cx="76.49" cy="2.36" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="76.61" cy="25.58" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="79.96" cy="24.08" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="82.18" cy="21.17" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="83.28" cy="17.75" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="83.63" cy="14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="83.2" cy="10.42" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="82.09" cy="6.92" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="79.87" cy="3.84" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="73.08" cy="24.14" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="70.86" cy="21.22" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="69.75" cy="17.81" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="69.41" cy="14.06" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="69.83" cy="10.47" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="70.94" cy="6.97" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-1" cx="73.16" cy="3.89" rx="1.88" ry="1.83"/>\n    <ellipse class="cls-2" cx="76.6" cy="13.92" rx="5.03" ry="9.75"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="earrings earrings--doctor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.29 38.61">\n    <ellipse class="cls-1" cx="13.11" cy="3.27" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="13.27" cy="35.34" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="17.9" cy="33.27" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="20.96" cy="29.24" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="22.49" cy="24.52" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="22.97" cy="19.34" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="22.38" cy="14.39" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="20.84" cy="9.56" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="17.78" cy="5.3" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="8.39" cy="33.35" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="5.33" cy="29.32" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="3.8" cy="24.6" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="3.33" cy="19.42" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="3.91" cy="14.47" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="5.45" cy="9.63" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="8.51" cy="5.38" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-2" cx="13.27" cy="19.23" rx="6.95" ry="13.47"/>\n    <ellipse class="cls-1" cx="168.11" cy="3.27" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="168.27" cy="35.34" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="172.9" cy="33.27" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="175.96" cy="29.24" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="177.49" cy="24.52" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="177.97" cy="19.34" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="177.38" cy="14.39" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="175.84" cy="9.56" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="172.78" cy="5.3" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="163.39" cy="33.35" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="160.33" cy="29.32" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="158.8" cy="24.6" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="158.33" cy="19.42" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="158.91" cy="14.47" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="160.45" cy="9.63" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-1" cx="163.51" cy="5.38" rx="2.59" ry="2.53"/>\n    <ellipse class="cls-2" cx="168.27" cy="19.23" rx="6.95" ry="13.47"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="earrings earrings--ghost" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.42 45.78">\n    <ellipse class="cls-1" cx="15.55" cy="3.87" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="15.73" cy="41.91" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="21.23" cy="39.45" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="24.86" cy="34.67" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="26.68" cy="29.08" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="27.23" cy="22.94" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="26.54" cy="17.07" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="24.72" cy="11.33" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="21.09" cy="6.28" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="9.95" cy="39.54" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="6.32" cy="34.77" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="4.5" cy="29.17" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="3.94" cy="23.03" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="4.64" cy="17.16" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="6.46" cy="11.42" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="10.09" cy="6.37" rx="3.07" ry="3"/>\n    <ellipse class="cls-2" cx="15.73" cy="22.8" rx="8.25" ry="15.97"/>\n    <ellipse class="cls-1" cx="199.79" cy="3.87" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="199.98" cy="41.91" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="205.47" cy="39.45" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="209.11" cy="34.67" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="210.92" cy="29.08" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="211.48" cy="22.94" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="210.78" cy="17.07" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="208.97" cy="11.33" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="205.33" cy="6.28" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="194.2" cy="39.54" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="190.57" cy="34.77" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="188.75" cy="29.17" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="188.19" cy="23.03" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="188.89" cy="17.16" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="190.71" cy="11.42" rx="3.07" ry="3"/>\n    <ellipse class="cls-1" cx="194.34" cy="6.37" rx="3.07" ry="3"/>\n    <ellipse class="cls-2" cx="199.98" cy="22.8" rx="8.25" ry="15.97"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="earrings--wolf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.47 41.59">\n    <path class="cls-1" d="M26,10.22c1.42-3.44,1-6.86-.84-7.64S20.62,4,19.2,7.4l-4,9.72"/>\n    <ellipse class="cls-2" cx="15.26" cy="17" rx="1.89" ry="1.93" transform="translate(-6.27 24.61) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="6.23" cy="39.15" rx="1.89" ry="1.93" transform="translate(-32.33 29.95) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="10.01" cy="39.04" rx="1.89" ry="1.93" transform="matrix(0.38, -0.92, 0.92, 0.38, -29.89, 33.38)"/>\n    <ellipse class="cls-2" cx="13.27" cy="37.14" rx="1.89" ry="1.93" transform="translate(-26.12 35.22) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="15.67" cy="34.32" rx="1.89" ry="1.93" transform="translate(-22.03 35.69) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="17.48" cy="30.89" rx="1.89" ry="1.93" transform="translate(-17.74 35.24) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="18.48" cy="27.31" rx="1.89" ry="1.93" transform="translate(-13.82 33.95) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="18.8" cy="23.54" rx="1.89" ry="1.93" transform="translate(-10.13 31.92) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="17.9" cy="19.73" rx="1.89" ry="1.93" transform="translate(-7.17 28.74) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="3.44" cy="36.39" rx="1.89" ry="1.93" transform="translate(-31.5 25.66) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="2.47" cy="32.74" rx="1.89" ry="1.93" transform="translate(-28.72 22.52) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="2.76" cy="29.05" rx="1.89" ry="1.93" transform="translate(-25.14 20.5) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="3.91" cy="25.34" rx="1.89" ry="1.93" transform="translate(-21 19.28) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="5.73" cy="22.1" rx="1.89" ry="1.93" transform="translate(-16.88 18.95) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="8.16" cy="19.2" rx="1.89" ry="1.93" transform="translate(-12.7 19.41) rotate(-67.54)"/>\n    <ellipse class="cls-2" cx="11.49" cy="17.14" rx="1.89" ry="1.93" transform="translate(-8.74 21.21) rotate(-67.54)"/>\n    <ellipse class="cls-3" cx="10.82" cy="28.04" rx="10.05" ry="5.19" transform="translate(-19.23 27.33) rotate(-67.54)"/>\n    <path class="cls-1" d="M79.45,8.34c-1.42-3.44-1-6.86.84-7.64s4.56,1.38,6,4.82l4,9.72"/>\n    <ellipse class="cls-2" cx="90.21" cy="15.12" rx="1.93" ry="1.89" transform="translate(1.07 35.61) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="99.24" cy="37.28" rx="1.93" ry="1.89" transform="translate(-6.71 40.74) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="95.46" cy="37.17" rx="1.93" ry="1.89" transform="translate(-6.96 39.29) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="92.2" cy="35.27" rx="1.93" ry="1.89" transform="translate(-6.48 37.9) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="89.8" cy="32.45" rx="1.93" ry="1.89" transform="translate(-5.59 36.77) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="88" cy="29.01" rx="1.93" ry="1.89" transform="translate(-4.41 35.82) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="86.99" cy="25.43" rx="1.93" ry="1.89" transform="translate(-3.12 35.16) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="86.67" cy="21.66" rx="1.93" ry="1.89" transform="translate(-1.7 34.76) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="87.57" cy="17.86" rx="1.93" ry="1.89" transform="translate(-0.18 34.81) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="102.04" cy="34.51" rx="1.93" ry="1.89" transform="translate(-5.45 41.6) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="103" cy="30.86" rx="1.93" ry="1.89" transform="translate(-3.98 41.69) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="102.71" cy="27.17" rx="1.93" ry="1.89" transform="translate(-2.59 41.3) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="101.56" cy="23.47" rx="1.93" ry="1.89" transform="translate(-1.26 40.58) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="99.74" cy="20.23" rx="1.93" ry="1.89" transform="translate(-0.16 39.64) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="97.31" cy="17.33" rx="1.93" ry="1.89" transform="translate(0.76 38.49) rotate(-22.46)"/>\n    <ellipse class="cls-2" cx="93.98" cy="15.27" rx="1.93" ry="1.89" transform="translate(1.3 37.06) rotate(-22.46)"/>\n    <ellipse class="cls-3" cx="94.65" cy="26.17" rx="5.19" ry="10.05" transform="translate(-2.82 38.15) rotate(-22.46)"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="earrings earrings--bed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.58 24.1">\n    <ellipse class="cls-1" cx="8.19" cy="2.04" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="8.28" cy="22.06" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="11.17" cy="20.77" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="13.09" cy="18.25" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="14.04" cy="15.31" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="14.34" cy="12.07" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="13.97" cy="8.98" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="13.01" cy="5.97" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="11.1" cy="3.31" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="5.24" cy="20.82" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="3.33" cy="18.3" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="2.37" cy="15.36" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="2.08" cy="12.12" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="2.44" cy="9.03" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="3.4" cy="6.01" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="5.31" cy="3.36" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-2" cx="8.28" cy="12" rx="4.34" ry="8.41"/>\n    <ellipse class="cls-1" cx="72.35" cy="2.04" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="72.45" cy="22.06" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="75.34" cy="20.77" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="77.26" cy="18.25" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="78.21" cy="15.31" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="78.51" cy="12.07" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="78.14" cy="8.98" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="77.18" cy="5.97" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="75.27" cy="3.31" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="69.41" cy="20.82" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="67.49" cy="18.3" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="66.54" cy="15.36" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="66.24" cy="12.12" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="66.61" cy="9.03" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="67.57" cy="6.01" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-1" cx="69.48" cy="3.36" rx="1.62" ry="1.58"/>\n    <ellipse class="cls-2" cx="72.45" cy="12" rx="4.34" ry="8.41"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/earrings/earrings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], EarringsComponent);
    return EarringsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=earrings.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NecklaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var NecklaceComponent = /** @class */ (function (_super) {
    __extends(NecklaceComponent, _super);
    function NecklaceComponent(element) {
        return _super.call(this, 'necklace', element.nativeElement) || this;
    }
    NecklaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'necklace',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/necklace/necklace.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg width="125" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275.48 141.7" class="necklace">\n    <circle class="cls-1" cx="14.54" cy="14.91" r="14.54"/>\n    <circle class="cls-1" cx="21.73" cy="48.53" r="14.54"/>\n    <circle class="cls-1" cx="38.83" cy="79.1" r="14.54"/>\n    <circle class="cls-1" cx="67.38" cy="102.66" r="14.54"/>\n    <circle class="cls-1" cx="100.23" cy="118.55" r="14.54"/>\n    <circle class="cls-1" cx="136.85" cy="127.16" r="14.54"/>\n    <circle class="cls-1" cx="174.95" cy="118.95" r="14.54"/>\n    <circle class="cls-1" cx="209.82" cy="102.26" r="14.54"/>\n    <circle class="cls-1" cx="235.81" cy="77.89" r="14.54"/>\n    <circle class="cls-1" cx="253.58" cy="48.94" r="14.54"/>\n    <circle class="cls-1" cx="260.94" cy="14.54" r="14.54"/>\n    <path class="cls-1" d="M136.93,127.2A126.57,126.57,0,0,1,10.5.78h3.23a123.2,123.2,0,1,0,246.39,0h3.23A126.57,126.57,0,0,1,136.93,127.2Z"/>\n    <circle class="cls-2" cx="56.19" cy="10.88" r="9.63"/>\n    <circle class="cls-2" cx="60.95" cy="33.15" r="9.63"/>\n    <circle class="cls-2" cx="72.28" cy="53.39" r="9.63"/>\n    <circle class="cls-2" cx="91.18" cy="68.99" r="9.63"/>\n    <circle class="cls-2" cx="112.94" cy="79.52" r="9.63"/>\n    <circle class="cls-2" cx="137.19" cy="85.22" r="9.63"/>\n    <circle class="cls-2" cx="162.43" cy="79.78" r="9.63"/>\n    <circle class="cls-2" cx="185.53" cy="68.73" r="9.63"/>\n    <circle class="cls-2" cx="202.74" cy="52.59" r="9.63"/>\n    <circle class="cls-2" cx="214.51" cy="33.41" r="9.63"/>\n    <circle class="cls-2" cx="219.38" cy="10.63" r="9.63"/>\n    <path class="cls-2" d="M137.25,85.25A83.83,83.83,0,0,1,53.51,1.51h2.14a81.59,81.59,0,1,0,163.19,0H221A83.83,83.83,0,0,1,137.25,85.25Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.39 43.31" class="necklace">\n    <circle class="cls-1" cx="8.87" cy="3.5" r="3.42"/>\n    <circle class="cls-1" cx="10.56" cy="11.41" r="3.42"/>\n    <circle class="cls-1" cx="14.58" cy="18.59" r="3.42"/>\n    <circle class="cls-1" cx="21.29" cy="24.13" r="3.42"/>\n    <circle class="cls-1" cx="29.01" cy="27.86" r="3.42"/>\n    <circle class="cls-1" cx="37.62" cy="29.89" r="3.42"/>\n    <circle class="cls-1" cx="46.57" cy="27.96" r="3.42"/>\n    <circle class="cls-1" cx="54.77" cy="24.03" r="3.42"/>\n    <circle class="cls-1" cx="60.88" cy="18.3" r="3.42"/>\n    <circle class="cls-1" cx="65.05" cy="11.5" r="3.42"/>\n    <circle class="cls-1" cx="66.78" cy="3.42" r="3.42"/>\n    <path class="cls-1" d="M37.64,29.89A29.75,29.75,0,0,1,7.92.18h.76a29,29,0,1,0,57.91,0h.76A29.75,29.75,0,0,1,37.64,29.89Z"/>\n    <circle class="cls-2" cx="3.77" cy="10.45" r="3.77"/>\n    <circle class="cls-2" cx="5.63" cy="19.17" r="3.77"/>\n    <circle class="cls-2" cx="10.06" cy="27.09" r="3.77"/>\n    <circle class="cls-2" cx="17.46" cy="33.19" r="3.77"/>\n    <circle class="cls-2" cx="25.97" cy="37.31" r="3.77"/>\n    <circle class="cls-2" cx="35.46" cy="39.54" r="3.77"/>\n    <circle class="cls-2" cx="45.34" cy="37.42" r="3.77"/>\n    <circle class="cls-2" cx="54.38" cy="33.09" r="3.77"/>\n    <circle class="cls-2" cx="61.11" cy="26.77" r="3.77"/>\n    <circle class="cls-2" cx="65.71" cy="19.27" r="3.77"/>\n    <circle class="cls-2" cx="67.62" cy="10.36" r="3.77"/>\n    <path class="cls-2" d="M35.48,39.55A32.8,32.8,0,0,1,2.72,6.79h.84a31.93,31.93,0,1,0,63.85,0h.84A32.8,32.8,0,0,1,35.48,39.55Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161.66 146.57" class="necklace">\n    <circle class="cls-1" cx="8.2" cy="8.41" r="8.2"/>\n    <circle class="cls-1" cx="12.26" cy="27.37" r="8.2"/>\n    <circle class="cls-1" cx="21.9" cy="44.6" r="8.2"/>\n    <circle class="cls-1" cx="37.99" cy="57.89" r="8.2"/>\n    <circle class="cls-1" cx="56.52" cy="66.85" r="8.2"/>\n    <circle class="cls-1" cx="77.17" cy="71.71" r="8.2"/>\n    <circle class="cls-1" cx="98.66" cy="67.08" r="8.2"/>\n    <circle class="cls-1" cx="118.32" cy="57.66" r="8.2"/>\n    <circle class="cls-1" cx="132.98" cy="43.92" r="8.2"/>\n    <circle class="cls-1" cx="143" cy="27.6" r="8.2"/>\n    <circle class="cls-1" cx="147.14" cy="8.2" r="8.2"/>\n    <path class="cls-1" d="M77.21,71.73A71.37,71.37,0,0,1,5.92.44H7.74a69.47,69.47,0,1,0,138.94,0h1.82A71.37,71.37,0,0,1,77.21,71.73Z"/>\n    <circle class="cls-2" cx="31.68" cy="6.13" r="5.43"/>\n    <circle class="cls-2" cx="34.37" cy="18.69" r="5.43"/>\n    <circle class="cls-2" cx="40.76" cy="30.11" r="5.43"/>\n    <circle class="cls-2" cx="51.42" cy="38.91" r="5.43"/>\n    <circle class="cls-2" cx="63.69" cy="44.84" r="5.43"/>\n    <circle class="cls-2" cx="77.36" cy="48.06" r="5.43"/>\n    <circle class="cls-2" cx="91.6" cy="44.99" r="5.43"/>\n    <circle class="cls-2" cx="104.62" cy="38.75" r="5.43"/>\n    <circle class="cls-2" cx="114.32" cy="29.65" r="5.43"/>\n    <circle class="cls-2" cx="120.96" cy="18.84" r="5.43"/>\n    <circle class="cls-2" cx="123.71" cy="6" r="5.43"/>\n    <path class="cls-2" d="M77.39,48.07A47.27,47.27,0,0,1,30.18.85h1.21a46,46,0,1,0,92,0h1.21A47.27,47.27,0,0,1,77.39,48.07Z"/>\n    <circle class="cls-1" cx="27.48" cy="81.37" r="7.48"/>\n    <circle class="cls-1" cx="31.18" cy="98.66" r="7.48"/>\n    <circle class="cls-1" cx="39.97" cy="114.38" r="7.48"/>\n    <circle class="cls-1" cx="54.65" cy="126.5" r="7.48"/>\n    <circle class="cls-1" cx="71.54" cy="134.67" r="7.48"/>\n    <circle class="cls-1" cx="90.37" cy="139.1" r="7.48"/>\n    <circle class="cls-1" cx="109.97" cy="134.87" r="7.48"/>\n    <circle class="cls-1" cx="127.9" cy="126.29" r="7.48"/>\n    <circle class="cls-1" cx="141.26" cy="113.76" r="7.48"/>\n    <circle class="cls-1" cx="150.4" cy="98.87" r="7.48"/>\n    <circle class="cls-1" cx="154.19" cy="81.18" r="7.48"/>\n    <path class="cls-1" d="M90.41,139.12a65.09,65.09,0,0,1-65-65h1.66a63.35,63.35,0,0,0,126.71,0h1.66A65.09,65.09,0,0,1,90.41,139.12Z"/>\n    <circle class="cls-2" cx="48.89" cy="79.3" r="4.95"/>\n    <circle class="cls-2" cx="51.34" cy="90.75" r="4.95"/>\n    <circle class="cls-2" cx="57.17" cy="101.16" r="4.95"/>\n    <circle class="cls-2" cx="66.89" cy="109.18" r="4.95"/>\n    <circle class="cls-2" cx="78.08" cy="114.59" r="4.95"/>\n    <circle class="cls-2" cx="90.55" cy="117.53" r="4.95"/>\n    <circle class="cls-2" cx="103.53" cy="114.73" r="4.95"/>\n    <circle class="cls-2" cx="115.41" cy="109.05" r="4.95"/>\n    <circle class="cls-2" cx="124.26" cy="100.75" r="4.95"/>\n    <circle class="cls-2" cx="130.31" cy="90.89" r="4.95"/>\n    <circle class="cls-2" cx="132.81" cy="79.17" r="4.95"/>\n    <path class="cls-2" d="M90.58,117.54A43.11,43.11,0,0,1,47.52,74.48h1.1a42,42,0,1,0,83.92,0h1.1A43.11,43.11,0,0,1,90.58,117.54Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.43 67.6" class="necklace">\n    <circle class="cls-1" cx="5.04" cy="23.68" r="5.04"/>\n    <circle class="cls-1" cx="7.53" cy="35.33" r="5.04"/>\n    <circle class="cls-1" cx="13.45" cy="45.91" r="5.04"/>\n    <circle class="cls-1" cx="23.34" cy="54.07" r="5.04"/>\n    <circle class="cls-1" cx="34.72" cy="59.58" r="5.04"/>\n    <circle class="cls-1" cx="47.4" cy="62.56" r="5.04"/>\n    <circle class="cls-1" cx="60.6" cy="59.72" r="5.04"/>\n    <circle class="cls-1" cx="72.68" cy="53.93" r="5.04"/>\n    <circle class="cls-1" cx="81.68" cy="45.49" r="5.04"/>\n    <circle class="cls-1" cx="87.84" cy="35.47" r="5.04"/>\n    <circle class="cls-1" cx="90.39" cy="23.55" r="5.04"/>\n    <path class="cls-1" d="M47.43,62.58A43.84,43.84,0,0,1,3.64,18.78H4.76a42.67,42.67,0,1,0,85.35,0h1.12A43.84,43.84,0,0,1,47.43,62.58Z"/>\n    <circle class="cls-1" cx="10.67" cy="19.77" r="3.92"/>\n    <circle class="cls-1" cx="12.61" cy="28.83" r="3.92"/>\n    <circle class="cls-1" cx="17.22" cy="37.07" r="3.92"/>\n    <circle class="cls-1" cx="24.92" cy="43.43" r="3.92"/>\n    <circle class="cls-1" cx="33.78" cy="47.71" r="3.92"/>\n    <circle class="cls-1" cx="43.65" cy="50.03" r="3.92"/>\n    <circle class="cls-1" cx="53.93" cy="47.82" r="3.92"/>\n    <circle class="cls-1" cx="63.33" cy="43.32" r="3.92"/>\n    <circle class="cls-1" cx="70.33" cy="36.75" r="3.92"/>\n    <circle class="cls-1" cx="75.13" cy="28.94" r="3.92"/>\n    <circle class="cls-1" cx="77.11" cy="19.67" r="3.92"/>\n    <path class="cls-1" d="M43.67,50A34.13,34.13,0,0,1,9.58,16h.87a33.22,33.22,0,0,0,66.44,0h.87A34.13,34.13,0,0,1,43.67,50Z"/>\n    <circle class="cls-2" cx="12.23" cy="4.05" r="3.95"/>\n    <circle class="cls-2" cx="14.18" cy="13.17" r="3.95"/>\n    <circle class="cls-2" cx="18.82" cy="21.46" r="3.95"/>\n    <circle class="cls-2" cx="26.57" cy="27.85" r="3.95"/>\n    <circle class="cls-2" cx="35.48" cy="32.16" r="3.95"/>\n    <circle class="cls-2" cx="45.41" cy="34.5" r="3.95"/>\n    <circle class="cls-2" cx="55.75" cy="32.27" r="3.95"/>\n    <circle class="cls-2" cx="65.21" cy="27.74" r="3.95"/>\n    <circle class="cls-2" cx="72.26" cy="21.13" r="3.95"/>\n    <circle class="cls-2" cx="77.09" cy="13.28" r="3.95"/>\n    <circle class="cls-2" cx="79.08" cy="3.95" r="3.95"/>\n    <path class="cls-2" d="M45.44,34.51A34.34,34.34,0,0,1,11.13.21H12a33.42,33.42,0,1,0,66.85,0h.88A34.34,34.34,0,0,1,45.44,34.51Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214.32 112.98" class="necklace">\n    <circle class="cls-1" cx="11.31" cy="14.34" r="11.31"/>\n    <circle class="cls-1" cx="16.91" cy="40.5" r="11.31"/>\n    <circle class="cls-1" cx="30.21" cy="64.28" r="11.31"/>\n    <circle class="cls-1" cx="52.42" cy="82.61" r="11.31"/>\n    <circle class="cls-1" cx="77.98" cy="94.97" r="11.31"/>\n    <circle class="cls-1" cx="106.47" cy="101.67" r="11.31"/>\n    <circle class="cls-1" cx="136.11" cy="95.28" r="11.31"/>\n    <circle class="cls-1" cx="163.24" cy="82.29" r="11.31"/>\n    <circle class="cls-1" cx="183.46" cy="63.33" r="11.31"/>\n    <circle class="cls-1" cx="197.29" cy="40.81" r="11.31"/>\n    <circle class="cls-1" cx="203.01" cy="14.05" r="11.31"/>\n    <path class="cls-1" d="M106.53,101.7A98.47,98.47,0,0,1,8.17,3.34h2.51a95.85,95.85,0,0,0,191.69,0h2.51A98.47,98.47,0,0,1,106.53,101.7Z"/>\n    <circle class="cls-2" cx="13.06" cy="10.54" r="10.28"/>\n    <circle class="cls-2" cx="18.15" cy="34.31" r="10.28"/>\n    <circle class="cls-2" cx="30.23" cy="55.91" r="10.28"/>\n    <circle class="cls-2" cx="50.41" cy="72.57" r="10.28"/>\n    <circle class="cls-2" cx="73.63" cy="83.8" r="10.28"/>\n    <circle class="cls-2" cx="99.52" cy="89.89" r="10.28"/>\n    <circle class="cls-2" cx="126.45" cy="84.08" r="10.28"/>\n    <circle class="cls-2" cx="151.1" cy="72.28" r="10.28"/>\n    <circle class="cls-2" cx="169.47" cy="55.06" r="10.28"/>\n    <circle class="cls-2" cx="182.04" cy="34.59" r="10.28"/>\n    <circle class="cls-2" cx="187.23" cy="10.28" r="10.28"/>\n    <path class="cls-2" d="M99.58,89.92A89.47,89.47,0,0,1,10.21.55h2.28a87.08,87.08,0,1,0,174.17,0h2.28A89.47,89.47,0,0,1,99.58,89.92Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.67 107.84" class="necklace">\n    <circle class="cls-2" cx="10.08" cy="13.6" r="8.36" transform="translate(-5.88 19.24) rotate(-72.95)"/>\n    <circle class="cls-2" cx="8.36" cy="33.29" r="8.36" transform="translate(-25.92 31.53) rotate(-72.95)"/>\n    <circle class="cls-2" cx="12.61" cy="52.98" r="8.36" transform="translate(-41.73 49.5) rotate(-72.95)"/>\n    <circle class="cls-2" cx="24.33" cy="70.74" r="8.36" transform="translate(-50.44 73.26) rotate(-72.95)"/>\n    <circle class="cls-2" cx="39.71" cy="85.01" r="8.36" transform="translate(-53.21 98.05) rotate(-72.95)"/>\n    <circle class="cls-2" cx="58.39" cy="95.92" r="8.36" transform="translate(-50.44 123.62) rotate(-72.95)"/>\n    <circle class="cls-2" cx="80.72" cy="97.83" r="8.36" transform="translate(-36.48 146.32) rotate(-72.95)"/>\n    <circle class="cls-2" cx="102.7" cy="94.53" r="8.36" transform="translate(-17.79 165) rotate(-72.95)"/>\n    <circle class="cls-2" cx="121.09" cy="85.52" r="8.36" transform="translate(3.83 176.22) rotate(-72.95)"/>\n    <circle class="cls-2" cx="135.74" cy="72.6" r="8.36" transform="translate(26.53 181.09) rotate(-72.95)"/>\n    <circle class="cls-2" cx="145.59" cy="54.93" r="8.36" transform="translate(50.38 178.01) rotate(-72.95)"/>\n    <path class="cls-2" d="M58.42,96A72.78,72.78,0,0,1,10.24,5.14L12,5.69A70.83,70.83,0,1,0,147.46,47.23l1.78.54A72.78,72.78,0,0,1,58.42,96Z"/>\n    <circle class="cls-1" cx="18.13" cy="9.02" r="8.92" transform="translate(4.19 23.71) rotate(-72.95)"/>\n    <circle class="cls-1" cx="16.3" cy="30.04" r="8.92" transform="translate(-17.19 36.82) rotate(-72.95)"/>\n    <circle class="cls-1" cx="20.84" cy="51.04" r="8.92" transform="translate(-34.07 56) rotate(-72.95)"/>\n    <circle class="cls-1" cx="33.34" cy="70" r="8.92" transform="translate(-43.36 81.35) rotate(-72.95)"/>\n    <circle class="cls-1" cx="49.75" cy="85.23" r="8.92" transform="translate(-46.32 107.81) rotate(-72.95)"/>\n    <circle class="cls-1" cx="69.69" cy="96.87" r="8.92" transform="translate(-43.36 135.09) rotate(-72.95)"/>\n    <circle class="cls-1" cx="93.52" cy="98.91" r="8.92" transform="matrix(0.29, -0.96, 0.96, 0.29, -28.47, 159.32)"/>\n    <circle class="cls-1" cx="116.98" cy="95.39" r="8.92" transform="matrix(0.29, -0.96, 0.96, 0.29, -8.52, 179.26)"/>\n    <circle class="cls-1" cx="136.61" cy="85.77" r="8.92" transform="translate(14.55 191.22) rotate(-72.95)"/>\n    <circle class="cls-1" cx="152.24" cy="71.99" r="8.92" transform="translate(38.78 196.43) rotate(-72.95)"/>\n    <circle class="cls-1" cx="162.74" cy="53.13" r="8.92" transform="translate(64.23 193.14) rotate(-72.95)"/>\n    <path class="cls-1" d="M69.73,96.91A77.66,77.66,0,0,1,18.31,0l1.9.58A75.59,75.59,0,1,0,164.74,44.91l1.9.58A77.66,77.66,0,0,1,69.73,96.91Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.92 25.98" class="necklace">\n    <circle class="cls-1" cx="2.17" cy="12.63" r="2.17" transform="translate(-3.49 1.13) rotate(-16.48)"/>\n    <circle class="cls-1" cx="4.61" cy="17.13" r="2.17" transform="translate(-4.67 2.01) rotate(-16.48)"/>\n    <circle class="cls-1" cx="8.35" cy="20.77" r="2.17" transform="translate(-5.55 3.22) rotate(-16.48)"/>\n    <circle class="cls-1" cx="13.42" cy="22.93" r="2.17" transform="translate(-5.95 4.75) rotate(-16.48)"/>\n    <circle class="cls-1" cx="18.79" cy="23.81" r="2.17" transform="matrix(0.96, -0.28, 0.28, 0.96, -5.98, 6.31)"/>\n    <circle class="cls-1" cx="24.38" cy="23.5" r="2.17" transform="matrix(0.96, -0.28, 0.28, 0.96, -5.66, 7.88)"/>\n    <circle class="cls-1" cx="29.48" cy="20.71" r="2.17" transform="translate(-4.66 9.21) rotate(-16.48)"/>\n    <circle class="cls-1" cx="33.75" cy="16.86" r="2.17" transform="translate(-3.39 10.27) rotate(-16.48)"/>\n    <circle class="cls-1" cx="36.43" cy="12.28" r="2.17" transform="translate(-1.99 10.84) rotate(-16.48)"/>\n    <circle class="cls-1" cx="37.75" cy="7.39" r="2.17" transform="matrix(0.96, -0.28, 0.28, 0.96, -0.55, 11.01)"/>\n    <circle class="cls-1" cx="37.35" cy="2.17" r="2.17" transform="translate(0.92 10.68) rotate(-16.48)"/>\n    <path class="cls-1" d="M24.39,23.5A18.85,18.85,0,0,1,1,10.78l.46-.14A18.35,18.35,0,0,0,36.65.23L37.11.1A18.85,18.85,0,0,1,24.39,23.5Z"/>\n    <circle class="cls-2" cx="7.94" cy="10.29" r="1.43" transform="translate(-2.59 2.68) rotate(-16.48)"/>\n    <circle class="cls-2" cx="9.57" cy="13.27" r="1.43" transform="translate(-3.37 3.26) rotate(-16.48)"/>\n    <circle class="cls-2" cx="12.04" cy="15.69" r="1.43" transform="translate(-3.96 4.06) rotate(-16.48)"/>\n    <circle class="cls-2" cx="15.4" cy="17.12" r="1.43" transform="translate(-4.22 5.07) rotate(-16.48)"/>\n    <circle class="cls-2" cx="18.95" cy="17.7" r="1.43" transform="translate(-4.24 6.1) rotate(-16.48)"/>\n    <circle class="cls-2" cx="22.66" cy="17.49" r="1.43" transform="translate(-4.03 7.15) rotate(-16.48)"/>\n    <circle class="cls-2" cx="26.03" cy="15.65" r="1.43" transform="translate(-3.37 8.03) rotate(-16.48)"/>\n    <circle class="cls-2" cx="28.86" cy="13.09" r="1.43" transform="translate(-2.53 8.72) rotate(-16.48)"/>\n    <circle class="cls-2" cx="30.64" cy="10.06" r="1.43" transform="translate(-1.6 9.1) rotate(-16.48)"/>\n    <circle class="cls-2" cx="31.51" cy="6.82" r="1.43" transform="translate(-0.64 9.22) rotate(-16.48)"/>\n    <circle class="cls-2" cx="31.25" cy="3.36" r="1.43" transform="translate(0.33 9) rotate(-16.48)"/>\n    <path class="cls-2" d="M22.67,17.49A12.49,12.49,0,0,1,7.17,9.07L7.47,9A12.15,12.15,0,1,0,30.78,2.08L31.09,2A12.49,12.49,0,0,1,22.67,17.49Z"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/necklace/necklace.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], NecklaceComponent);
    return NecklaceComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=necklace.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatulenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var FlatulenceComponent = /** @class */ (function (_super) {
    __extends(FlatulenceComponent, _super);
    function FlatulenceComponent(element) {
        return _super.call(this, 'flatulence', element.nativeElement) || this;
    }
    FlatulenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'flatulence',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/flatulence/flatulence.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg class="flatulence--default" width="125" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.41 110.12">\n    <circle class="cls-1" cx="80.53" cy="39.36" r="18.78"/>\n    <circle class="cls-1" cx="103.68" cy="18.78" r="18.78"/>\n    <circle class="cls-1" cx="134.04" cy="23.41" r="18.78"/>\n    <circle class="cls-1" cx="154.62" cy="49.14" r="18.78"/>\n    <circle class="cls-1" cx="146.39" cy="80.53" r="18.78"/>\n    <circle class="cls-1" cx="110.89" cy="91.33" r="18.78"/>\n    <circle class="cls-1" cx="87.73" cy="73.32" r="18.78"/>\n    <ellipse class="cls-1" cx="113.33" cy="57.63" rx="35.12" ry="31.64"/>\n    <polygon class="cls-1" points="77.18 44.25 0 59.69 79.76 73.07 77.18 44.25"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="flatulence--skeleton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236.76 159.2">\n    <g class="cls-1">\n       <circle class="cls-2" cx="183.95" cy="114.86" r="10.58" transform="translate(-22.58 181) rotate(-49.74)"/>\n       <circle class="cls-2" cx="183.53" cy="97.41" r="10.58" transform="translate(-9.41 174.51) rotate(-49.74)"/>\n       <circle class="cls-2" cx="196.58" cy="86.04" r="10.58" transform="translate(3.88 180.44) rotate(-49.74)"/>\n       <circle class="cls-2" cx="215.13" cy="86.56" r="10.58" transform="translate(10.05 194.79) rotate(-49.74)"/>\n       <circle class="cls-2" cx="225.63" cy="101.53" r="10.58" transform="translate(2.34 208.09) rotate(-49.74)"/>\n       <circle class="cls-2" cx="217.35" cy="120.73" r="10.58" transform="translate(-15.25 208.56) rotate(-49.74)"/>\n       <circle class="cls-2" cx="201.17" cy="124.13" r="10.58" transform="translate(-23.56 197.42) rotate(-49.74)"/>\n       <ellipse class="cls-2" cx="203.75" cy="107.4" rx="19.79" ry="17.83" transform="translate(-9.89 193.47) rotate(-49.74)"/>\n       <polygon class="cls-2" points="184.83 118.08 163.36 156.88 198.16 127.46 184.83 118.08"/>\n    </g>\n    <g class="cls-1">\n       <circle class="cls-2" cx="30.83" cy="54.25" r="10.58" transform="translate(-18.19 15.64) rotate(-22.17)"/>\n       <circle class="cls-2" cx="15.17" cy="46.54" r="10.58" transform="translate(-16.44 9.16) rotate(-22.17)"/>\n       <circle class="cls-2" cx="11.13" cy="29.71" r="10.58" transform="translate(-10.39 6.39) rotate(-22.17)"/>\n       <circle class="cls-2" cx="20.18" cy="13.5" r="10.58" transform="translate(-3.6 8.61) rotate(-22.17)"/>\n       <circle class="cls-2" cx="38.31" cy="11.13" r="10.58" transform="translate(-1.37 15.28) rotate(-22.17)"/>\n       <circle class="cls-2" cx="51.49" cy="27.36" r="10.58" transform="translate(-6.52 21.45) rotate(-22.17)"/>\n       <circle class="cls-2" cx="47.02" cy="43.27" r="10.58" transform="translate(-12.85 20.94) rotate(-22.17)"/>\n       <ellipse class="cls-2" cx="33.39" cy="33.25" rx="17.83" ry="19.79" transform="translate(-10.08 15.05) rotate(-22.17)"/>\n       <polygon class="cls-2" points="34.09 54.95 58.55 91.95 48.58 47.49 34.09 54.95"/>\n    </g>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="flatulence--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.45 253.37">\n    <circle class="cls-1" cx="199.23" cy="52.51" r="10.58" transform="translate(-1.8 7.39) rotate(-2.12)"/>\n    <circle class="cls-1" cx="187.16" cy="39.9" r="10.58" transform="translate(-1.35 6.93) rotate(-2.12)"/>\n    <circle class="cls-1" cx="189.14" cy="22.71" r="10.58" transform="translate(-0.71 7) rotate(-2.12)"/>\n    <circle class="cls-1" cx="203.19" cy="10.58" r="10.58" transform="translate(-0.25 7.51) rotate(-2.12)"/>\n    <circle class="cls-1" cx="221.04" cy="14.57" r="10.58" transform="translate(-0.39 8.17) rotate(-2.12)"/>\n    <circle class="cls-1" cx="227.86" cy="34.33" r="10.58" transform="translate(-1.11 8.43) rotate(-2.12)"/>\n    <circle class="cls-1" cx="218.2" cy="47.75" r="10.58" transform="translate(-1.61 8.09) rotate(-2.12)"/>\n    <ellipse class="cls-1" cx="208.83" cy="33.66" rx="17.83" ry="19.79" transform="translate(-1.1 7.73) rotate(-2.12)"/>\n    <polygon class="cls-1" points="202.05 54.29 212.35 97.43 218.22 52.24 202.05 54.29"/>\n    <circle class="cls-1" cx="13.22" cy="227.16" r="6.18" transform="translate(-8.37 0.64) rotate(-2.12)"/>\n    <circle class="cls-1" cx="6.18" cy="219.8" r="6.18" transform="translate(-8.11 0.38) rotate(-2.12)"/>\n    <circle class="cls-1" cx="7.33" cy="209.77" r="6.18" transform="translate(-7.74 0.41) rotate(-2.12)"/>\n    <circle class="cls-1" cx="15.53" cy="202.69" r="6.18" transform="translate(-7.47 0.71) rotate(-2.12)"/>\n    <circle class="cls-1" cx="25.95" cy="205.02" r="6.18" transform="translate(-7.55 1.1) rotate(-2.12)"/>\n    <circle class="cls-1" cx="29.93" cy="216.55" r="6.18" transform="translate(-7.97 1.25) rotate(-2.12)"/>\n    <circle class="cls-1" cx="24.29" cy="224.38" r="6.18" transform="translate(-8.26 1.05) rotate(-2.12)"/>\n    <ellipse class="cls-1" cx="18.82" cy="216.16" rx="10.4" ry="11.55" transform="translate(-7.97 0.84) rotate(-2.12)"/>\n    <polygon class="cls-1" points="14.87 228.2 20.87 253.37 24.3 227 14.87 228.2"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="flatulence--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.88 72.69">\n    <circle class="cls-1" cx="24.68" cy="43.08" r="8.46" transform="translate(-15.14 13.43) rotate(-23.52)"/>\n    <circle class="cls-1" cx="12.01" cy="37.21" r="8.46" transform="translate(-13.85 7.89) rotate(-23.52)"/>\n    <circle class="cls-1" cx="8.46" cy="23.84" r="8.46" transform="translate(-8.81 5.36) rotate(-23.52)"/>\n    <circle class="cls-1" cx="15.39" cy="10.71" r="8.46" transform="translate(-2.99 7.03) rotate(-23.52)"/>\n    <circle class="cls-1" cx="29.84" cy="8.46" r="8.46" transform="translate(-0.9 12.61) rotate(-23.52)"/>\n    <circle class="cls-1" cx="40.69" cy="21.19" r="8.46" transform="translate(-5.08 18) rotate(-23.52)"/>\n    <circle class="cls-1" cx="37.41" cy="33.99" r="8.46" transform="translate(-10.46 17.76) rotate(-23.52)"/>\n    <ellipse class="cls-1" cx="26.32" cy="26.24" rx="14.26" ry="15.82" transform="translate(-8.29 12.69) rotate(-23.52)"/>\n    <polygon class="cls-1" points="27.3 43.58 47.55 72.69 38.74 37.33 27.3 43.58"/>\n    <circle class="cls-1" cx="199.71" cy="38.04" r="8.46" transform="translate(36.95 159.86) rotate(-47.6)"/>\n    <circle class="cls-1" cx="199.9" cy="24.08" r="8.46" transform="translate(47.32 155.45) rotate(-47.6)"/>\n    <circle class="cls-1" cx="210.67" cy="15.39" r="8.46" transform="translate(57.24 160.57) rotate(-47.6)"/>\n    <circle class="cls-1" cx="225.48" cy="16.36" r="8.46" transform="translate(61.35 171.82) rotate(-47.6)"/>\n    <circle class="cls-1" cx="233.42" cy="28.63" r="8.46" transform="translate(54.87 181.68) rotate(-47.6)"/>\n    <circle class="cls-1" cx="226.23" cy="43.73" r="8.46" transform="translate(41.38 181.29) rotate(-47.6)"/>\n    <circle class="cls-1" cx="213.2" cy="45.96" r="8.46" transform="translate(35.49 172.39) rotate(-47.6)"/>\n    <ellipse class="cls-1" cx="215.76" cy="32.67" rx="15.82" ry="14.26" transform="translate(46.13 169.96) rotate(-47.6)"/>\n    <polygon class="cls-1" points="200.32 40.63 182.01 71 210.69 48.53 200.32 40.63"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="flatulence--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.65 129.43">\n    <circle class="cls-1" cx="29.13" cy="63.37" r="12.73" transform="translate(-9.63 5.39) rotate(-9.07)"/>\n    <circle class="cls-1" cx="12.88" cy="50.07" r="12.73" transform="translate(-7.73 2.66) rotate(-9.07)"/>\n    <circle class="cls-1" cx="12.73" cy="29.26" r="12.73" transform="translate(-4.45 2.37) rotate(-9.07)"/>\n    <circle class="cls-1" cx="27.75" cy="12.73" r="12.73" transform="translate(-1.66 4.54) rotate(-9.07)"/>\n    <circle class="cls-1" cx="49.64" cy="14.89" r="12.73" transform="translate(-1.73 8.01) rotate(-9.07)"/>\n    <circle class="cls-1" cx="60.67" cy="37.5" r="12.73" transform="translate(-5.15 10.04) rotate(-9.07)"/>\n    <circle class="cls-1" cx="51.09" cy="54.92" r="12.73" transform="translate(-8.02 8.74) rotate(-9.07)"/>\n    <ellipse class="cls-1" cx="37.85" cy="39.46" rx="21.45" ry="23.8" transform="translate(-5.75 6.46) rotate(-9.07)"/>\n    <polygon class="cls-1" points="32.76 65.09 51.34 115.1 51.77 60.28 32.76 65.09"/>\n    <circle class="cls-1" cx="189.44" cy="84.84" r="10.72" transform="matrix(0.56, -0.83, 0.83, 0.56, 13.19, 194.48)"/>\n    <circle class="cls-1" cx="187.09" cy="67.32" r="10.72" transform="translate(26.68 184.8) rotate(-56.01)"/>\n    <circle class="cls-1" cx="198.97" cy="54.43" r="10.72" transform="translate(42.6 188.97) rotate(-56.01)"/>\n    <circle class="cls-1" cx="217.71" cy="52.9" r="10.72" transform="translate(52.13 203.83) rotate(-56.01)"/>\n    <circle class="cls-1" cx="229.93" cy="66.81" r="10.72" transform="translate(45.99 220.1) rotate(-56.01)"/>\n    <circle class="cls-1" cx="223.72" cy="87.06" r="10.72" transform="matrix(0.56, -0.83, 0.83, 0.56, 26.46, 223.88)"/>\n    <circle class="cls-1" cx="207.81" cy="92.27" r="10.72" transform="translate(15.13 212.99) rotate(-56.01)"/>\n    <ellipse class="cls-1" cx="208.55" cy="75.15" rx="20.04" ry="18.06" transform="translate(29.65 206.05) rotate(-56.01)"/>\n    <polygon class="cls-1" points="190.69 87.98 173.37 129.43 205.14 95.96 190.69 87.98"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="flatulence--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.85 119.31">\n    <circle class="cls-1" cx="32.86" cy="54.9" r="10.72" transform="translate(-21.58 21.28) rotate(-27.4)"/>\n    <circle class="cls-1" cx="16.35" cy="48.58" r="10.72" transform="translate(-20.52 12.97) rotate(-27.4)"/>\n    <circle class="cls-1" cx="10.72" cy="31.98" r="10.72" transform="translate(-13.51 8.52) rotate(-27.4)"/>\n    <circle class="cls-1" cx="18.35" cy="14.79" r="10.72" transform="translate(-4.75 10.1) rotate(-27.4)"/>\n    <circle class="cls-1" cx="36.42" cy="10.72" r="10.72" transform="translate(-0.85 17.96) rotate(-27.4)"/>\n    <circle class="cls-1" cx="51.21" cy="25.87" r="10.72" transform="translate(-6.16 26.47) rotate(-27.4)"/>\n    <circle class="cls-1" cx="48.17" cy="42.33" r="10.72" transform="translate(-14.08 26.92) rotate(-27.4)"/>\n    <ellipse class="cls-1" cx="33.5" cy="33.48" rx="18.06" ry="20.04" transform="translate(-11.65 19.17) rotate(-27.4)"/>\n    <polygon class="cls-1" points="36.21 55.31 64.31 90.36 50.14 46.44 36.21 55.31"/>\n    <circle class="cls-1" cx="198.14" cy="79.7" r="8.96" transform="translate(68.72 249.58) rotate(-74.61)"/>\n    <circle class="cls-1" cx="191.6" cy="66.44" r="8.96" transform="translate(76.7 233.54) rotate(-74.61)"/>\n    <circle class="cls-1" cx="197.57" cy="53.06" r="8.96" transform="translate(93.98 229.47) rotate(-74.61)"/>\n    <circle class="cls-1" cx="212.01" cy="46.85" r="8.96" transform="translate(110.58 238.83) rotate(-74.61)"/>\n    <circle class="cls-1" cx="225.41" cy="54.61" r="8.96" transform="translate(112.94 257.45) rotate(-74.61)"/>\n    <circle class="cls-1" cx="225.89" cy="72.31" r="8.96" transform="translate(96.22 270.91) rotate(-74.61)"/>\n    <circle class="cls-1" cx="214.67" cy="80.68" r="8.96" transform="translate(79.91 266.24) rotate(-74.61)"/>\n    <ellipse class="cls-1" cx="210.69" cy="66.92" rx="16.76" ry="15.1" transform="translate(90.26 252.3) rotate(-74.61)"/>\n    <polygon class="cls-1" points="199.96 81.85 197.29 119.31 213.54 84.32 199.96 81.85"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="flatulence--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.15 40.39">\n    <circle class="cls-1" cx="201.83" cy="13.34" r="6.42" transform="translate(124.01 200.03) rotate(-71.15)"/>\n    <circle class="cls-1" cx="211.6" cy="9.23" r="6.42" transform="translate(134.5 206.5) rotate(-71.15)"/>\n    <circle class="cls-1" cx="220.91" cy="14.09" r="6.42" transform="translate(136.21 218.6) rotate(-71.15)"/>\n    <circle class="cls-1" cx="224.73" cy="24.68" r="6.42" transform="translate(128.77 229.39) rotate(-71.15)"/>\n    <circle class="cls-1" cx="218.6" cy="33.93" r="6.42" transform="translate(115.86 229.84) rotate(-71.15)"/>\n    <circle class="cls-1" cx="205.91" cy="33.51" r="6.42" transform="translate(107.68 217.55) rotate(-71.15)"/>\n    <circle class="cls-1" cx="200.41" cy="25.12" r="6.42" transform="translate(111.89 206.67) rotate(-71.15)"/>\n    <ellipse class="cls-1" cx="210.43" cy="22.87" rx="10.82" ry="12.01" transform="translate(120.8 214.63) rotate(-71.15)"/>\n    <polygon class="cls-1" points="200.21 14.55 173.53 11.02 197.86 24.16 200.21 14.55"/>\n    <circle class="cls-1" cx="34.79" cy="21.73" r="6.94" transform="translate(-5.02 11.84) rotate(-18.04)"/>\n    <circle class="cls-1" cx="29.01" cy="31.6" r="6.94" transform="translate(-8.36 10.53) rotate(-18.04)"/>\n    <circle class="cls-1" cx="17.81" cy="33.45" r="6.94" transform="translate(-9.48 7.16) rotate(-18.04)"/>\n    <circle class="cls-1" cx="7.64" cy="26.77" r="6.94" transform="translate(-7.91 3.68) rotate(-18.04)"/>\n    <circle class="cls-1" cx="6.94" cy="14.8" r="6.94" transform="translate(-4.24 2.88) rotate(-18.04)"/>\n    <circle class="cls-1" cx="18.18" cy="6.94" r="6.94" transform="translate(-1.26 5.97) rotate(-18.04)"/>\n    <circle class="cls-1" cx="28.37" cy="10.62" r="6.94" transform="translate(-1.89 9.31) rotate(-18.04)"/>\n    <ellipse class="cls-1" cx="21.17" cy="19.06" rx="12.97" ry="11.69" transform="translate(-4.86 7.49) rotate(-18.04)"/>\n    <polygon class="cls-1" points="35.4 19.63 60.75 5.37 31.2 9.8 35.4 19.63"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="flatulence--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.63 135.7">\n    <circle class="cls-1" cx="29.13" cy="83.97" r="12.73" transform="translate(-12.88 5.64) rotate(-9.07)"/>\n    <circle class="cls-1" cx="12.88" cy="70.67" r="12.73" transform="translate(-10.98 2.91) rotate(-9.07)"/>\n    <circle class="cls-1" cx="12.73" cy="49.86" r="12.73" transform="matrix(0.99, -0.16, 0.16, 0.99, -7.7, 2.63)"/>\n    <circle class="cls-1" cx="27.75" cy="33.33" r="12.73" transform="translate(-4.91 4.79) rotate(-9.07)"/>\n    <circle class="cls-1" cx="49.64" cy="35.49" r="12.73" transform="translate(-4.97 8.27) rotate(-9.07)"/>\n    <circle class="cls-1" cx="60.67" cy="58.1" r="12.73" transform="translate(-8.4 10.29) rotate(-9.07)"/>\n    <circle class="cls-1" cx="51.09" cy="75.52" r="12.73" transform="translate(-11.27 9) rotate(-9.07)"/>\n    <ellipse class="cls-1" cx="37.85" cy="60.06" rx="21.45" ry="23.8" transform="translate(-9 6.72) rotate(-9.07)"/>\n    <polygon class="cls-1" points="32.76 85.69 51.34 135.7 51.77 80.89 32.76 85.69"/>\n    <circle class="cls-1" cx="183.42" cy="42.66" r="10.72" transform="translate(45.51 170.89) rotate(-56.01)"/>\n    <circle class="cls-1" cx="181.07" cy="25.14" r="10.72" transform="translate(59 161.21) rotate(-56.01)"/>\n    <circle class="cls-1" cx="192.95" cy="12.25" r="10.72" transform="matrix(0.56, -0.83, 0.83, 0.56, 74.92, 165.38)"/>\n    <circle class="cls-1" cx="211.69" cy="10.72" r="10.72" transform="translate(84.45 180.24) rotate(-56.01)"/>\n    <circle class="cls-1" cx="223.91" cy="24.63" r="10.72" transform="matrix(0.56, -0.83, 0.83, 0.56, 78.31, 196.51)"/>\n    <circle class="cls-1" cx="217.7" cy="44.88" r="10.72" transform="matrix(0.56, -0.83, 0.83, 0.56, 58.78, 200.29)"/>\n    <circle class="cls-1" cx="201.79" cy="50.09" r="10.72" transform="translate(47.45 189.39) rotate(-56.01)"/>\n    <ellipse class="cls-1" cx="202.53" cy="32.97" rx="20.04" ry="18.06" transform="translate(61.97 182.46) rotate(-56.01)"/>\n    <polygon class="cls-1" points="184.67 45.8 167.35 87.25 199.12 53.78 184.67 45.8"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="flatulence--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244.89 212.82">\n    <circle class="cls-1" cx="24.68" cy="183.21" r="8.46" transform="translate(-71.07 25.07) rotate(-23.52)"/>\n    <circle class="cls-1" cx="12.01" cy="177.34" r="8.46" transform="translate(-69.78 19.53) rotate(-23.52)"/>\n    <circle class="cls-1" cx="8.46" cy="163.97" r="8.46" transform="translate(-64.74 17) rotate(-23.52)"/>\n    <circle class="cls-1" cx="15.39" cy="150.84" r="8.46" transform="translate(-58.92 18.68) rotate(-23.52)"/>\n    <circle class="cls-1" cx="29.84" cy="148.6" r="8.46" transform="translate(-56.83 24.26) rotate(-23.52)"/>\n    <circle class="cls-1" cx="40.69" cy="161.32" r="8.46" transform="translate(-61 29.64) rotate(-23.52)"/>\n    <circle class="cls-1" cx="37.41" cy="174.12" r="8.46" transform="translate(-66.39 29.4) rotate(-23.52)"/>\n    <ellipse class="cls-1" cx="26.32" cy="166.37" rx="14.26" ry="15.82" transform="translate(-64.21 24.33) rotate(-23.52)"/>\n    <polygon class="cls-1" points="27.3 183.71 47.55 212.82 38.74 177.47 27.3 183.71"/>\n    <circle class="cls-1" cx="202.73" cy="176.54" r="8.46" transform="translate(-64.34 207.18) rotate(-47.6)"/>\n    <circle class="cls-1" cx="202.91" cy="162.58" r="8.46" transform="translate(-53.97 202.77) rotate(-47.6)"/>\n    <circle class="cls-1" cx="213.68" cy="153.89" r="8.46" transform="translate(-44.05 207.89) rotate(-47.6)"/>\n    <circle class="cls-1" cx="228.49" cy="154.86" r="8.46" transform="translate(-39.94 219.15) rotate(-47.6)"/>\n    <circle class="cls-1" cx="236.43" cy="167.13" r="8.46" transform="translate(-46.42 229.01) rotate(-47.6)"/>\n    <circle class="cls-1" cx="229.24" cy="182.23" r="8.46" transform="translate(-59.91 228.61) rotate(-47.6)"/>\n    <circle class="cls-1" cx="216.21" cy="184.46" r="8.46" transform="translate(-65.8 219.72) rotate(-47.6)"/>\n    <ellipse class="cls-1" cx="218.77" cy="171.18" rx="15.82" ry="14.26" transform="translate(-55.16 217.28) rotate(-47.6)"/>\n    <polygon class="cls-1" points="203.34 179.14 185.02 209.51 213.7 187.04 203.34 179.14"/>\n    <circle class="cls-1" cx="191.62" cy="46.91" r="10.05" transform="translate(95.54 219.21) rotate(-74.61)"/>\n    <circle class="cls-1" cx="184.28" cy="32.04" r="10.05" transform="translate(104.49 201.21) rotate(-74.61)"/>\n    <circle class="cls-1" cx="190.99" cy="17.03" r="10.05" transform="translate(123.89 196.65) rotate(-74.61)"/>\n    <circle class="cls-1" cx="207.19" cy="10.06" r="10.05" transform="translate(142.51 207.15) rotate(-74.61)"/>\n    <circle class="cls-1" cx="222.22" cy="18.77" r="10.05" transform="translate(145.16 228.04) rotate(-74.61)"/>\n    <circle class="cls-1" cx="222.76" cy="38.63" r="10.05" transform="translate(126.4 243.15) rotate(-74.61)"/>\n    <circle class="cls-1" cx="210.17" cy="48.02" r="10.05" transform="matrix(0.27, -0.96, 0.96, 0.27, 108.1, 237.91)"/>\n    <ellipse class="cls-1" cx="205.71" cy="32.58" rx="18.8" ry="16.94" transform="translate(119.71 222.26) rotate(-74.61)"/>\n    <polygon class="cls-1" points="193.67 49.34 190.67 91.37 208.91 52.1 193.67 49.34"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="flatulence--yeti" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254.75 127.06">\n    <circle class="cls-1" cx="25.97" cy="32.92" r="6.34" transform="translate(-11.4 13.91) rotate(-24.77)"/>\n    <circle class="cls-1" cx="16.38" cy="28.73" r="6.34" transform="translate(-10.53 9.51) rotate(-24.77)"/>\n    <circle class="cls-1" cx="13.51" cy="18.76" r="6.34" transform="translate(-6.62 7.39) rotate(-24.77)"/>\n    <circle class="cls-1" cx="18.48" cy="8.81" r="6.34" transform="translate(-1.99 8.56) rotate(-24.77)"/>\n    <circle class="cls-1" cx="29.28" cy="6.89" r="6.34" transform="translate(-0.19 12.9) rotate(-24.77)"/>\n    <circle class="cls-1" cx="37.62" cy="16.25" r="6.34" transform="translate(-3.35 17.26) rotate(-24.77)"/>\n    <circle class="cls-1" cx="35.37" cy="25.9" r="6.34" transform="translate(-7.6 17.2) rotate(-24.77)"/>\n    <ellipse class="cls-1" cx="26.93" cy="20.27" rx="10.69" ry="11.86" transform="translate(-6.02 13.15) rotate(-24.77)"/>\n    <polygon class="cls-1" points="27.95 33.25 43.61 54.74 36.42 28.38 27.95 33.25"/>\n    <circle class="cls-1" cx="222.71" cy="32.9" r="6.34" transform="translate(50.44 177.82) rotate(-48.48)"/>\n    <circle class="cls-1" cx="222.69" cy="22.43" r="6.34" transform="translate(58.27 174.28) rotate(-48.48)"/>\n    <circle class="cls-1" cx="230.66" cy="15.79" r="6.34" transform="translate(65.92 178.01) rotate(-48.48)"/>\n    <circle class="cls-1" cx="241.77" cy="16.35" r="6.34" transform="translate(69.25 186.52) rotate(-48.48)"/>\n    <circle class="cls-1" cx="247.87" cy="25.46" r="6.34" transform="translate(64.49 194.15) rotate(-48.48)"/>\n    <circle class="cls-1" cx="242.65" cy="36.86" r="6.34" transform="translate(54.19 194.09) rotate(-48.48)"/>\n    <circle class="cls-1" cx="232.91" cy="38.68" r="6.34" transform="translate(49.55 187.41) rotate(-48.48)"/>\n    <ellipse class="cls-1" cx="234.67" cy="28.69" rx="11.86" ry="10.69" transform="translate(57.62 185.36) rotate(-48.48)"/>\n    <polygon class="cls-1" points="223.19 34.84 209.81 57.82 231.06 40.64 223.19 34.84"/>\n    <circle class="cls-2" cx="12.12" cy="85.48" r="3.4" transform="translate(-52.17 27.85) rotate(-40.05)"/>\n    <circle class="cls-2" cx="6.58" cy="84.67" r="3.4" transform="translate(-52.94 24.09) rotate(-40.05)"/>\n    <circle class="cls-2" cx="3.69" cy="79.93" r="3.4" transform="matrix(0.77, -0.64, 0.64, 0.77, -50.57, 21.12)"/>\n    <circle class="cls-2" cx="4.85" cy="74.09" r="3.4" transform="translate(-46.54 20.5) rotate(-40.05)"/>\n    <circle class="cls-2" cx="10.16" cy="71.58" r="3.4" transform="translate(-43.68 23.32) rotate(-40.05)"/>\n    <circle class="cls-2" cx="15.79" cy="75.23" r="3.4" transform="translate(-44.71 27.8) rotate(-40.05)"/>\n    <circle class="cls-2" cx="15.99" cy="80.53" r="3.4" transform="matrix(0.77, -0.64, 0.64, 0.77, -48.07, 29.18)"/>\n    <ellipse class="cls-2" cx="10.83" cy="78.82" rx="5.72" ry="6.35" transform="translate(-48.18 25.46) rotate(-40.05)"/>\n    <polygon class="cls-2" points="13.19 85.38 24.31 94.27 16.88 81.67 13.19 85.38"/>\n    <circle class="cls-3" cx="13.51" cy="121.53" r="2.64" transform="translate(-108.66 126.99) rotate(-86.22)"/>\n    <circle class="cls-3" cx="10.07" cy="124.2" r="2.64" transform="translate(-114.52 126.06) rotate(-86.22)"/>\n    <circle class="cls-3" cx="5.86" cy="123.27" r="2.64" transform="translate(-117.53 120.99) rotate(-86.22)"/>\n    <circle class="cls-3" cx="3.22" cy="119.48" r="2.64" transform="translate(-116.21 114.81) rotate(-86.22)"/>\n    <circle class="cls-3" cx="4.66" cy="115.16" r="2.64" transform="translate(-110.55 112.22) rotate(-86.22)"/>\n    <circle class="cls-3" cx="9.74" cy="113.98" r="2.64" transform="translate(-104.63 116.17) rotate(-86.22)"/>\n    <circle class="cls-3" cx="12.81" cy="116.71" r="2.64" transform="translate(-104.49 121.8) rotate(-86.22)"/>\n    <ellipse class="cls-3" cx="9.08" cy="118.67" rx="4.44" ry="4.93" transform="translate(-109.93 119.91) rotate(-86.22)"/>\n    <polygon class="cls-3" points="14.02 120.88 24.97 119.43 13.93 116.82 14.02 120.88"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="flatulence--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.76 109.17">\n    <circle class="cls-1" cx="194.05" cy="41.81" r="8.96" transform="translate(102.24 217.8) rotate(-74.61)"/>\n    <circle class="cls-1" cx="187.51" cy="28.55" r="8.96" transform="translate(110.22 201.76) rotate(-74.61)"/>\n    <circle class="cls-1" cx="193.48" cy="15.17" r="8.96" transform="translate(127.51 197.69) rotate(-74.61)"/>\n    <circle class="cls-1" cx="207.93" cy="8.96" r="8.96" transform="translate(144.1 207.05) rotate(-74.61)"/>\n    <circle class="cls-1" cx="221.32" cy="16.72" r="8.96" transform="translate(146.46 225.67) rotate(-74.61)"/>\n    <circle class="cls-1" cx="221.8" cy="34.43" r="8.96" transform="translate(129.75 239.13) rotate(-74.61)"/>\n    <circle class="cls-1" cx="210.58" cy="42.8" r="8.96" transform="translate(113.43 234.47) rotate(-74.61)"/>\n    <ellipse class="cls-1" cx="206.6" cy="29.03" rx="16.76" ry="15.1" transform="translate(123.78 220.52) rotate(-74.61)"/>\n    <polygon class="cls-1" points="195.87 43.97 193.2 81.43 209.45 46.43 195.87 43.97"/>\n    <circle class="cls-1" cx="12.48" cy="84.31" r="5.85" transform="translate(-2.7 0.44) rotate(-1.84)"/>\n    <circle class="cls-1" cx="5.85" cy="77.31" r="5.85" transform="translate(-2.48 0.23) rotate(-1.84)"/>\n    <circle class="cls-1" cx="6.99" cy="67.82" r="5.85" transform="translate(-2.17 0.26) rotate(-1.84)"/>\n    <circle class="cls-1" cx="14.79" cy="61.15" r="5.85" transform="matrix(1, -0.03, 0.03, 1, -1.95, 0.51)"/>\n    <circle class="cls-1" cx="24.64" cy="63.4" r="5.85" transform="translate(-2.02 0.82) rotate(-1.84)"/>\n    <circle class="cls-1" cx="28.35" cy="74.34" r="5.85" transform="translate(-2.37 0.95) rotate(-1.84)"/>\n    <circle class="cls-1" cx="22.98" cy="81.73" r="5.85" transform="translate(-2.61 0.78) rotate(-1.84)"/>\n    <ellipse class="cls-1" cx="17.84" cy="73.92" rx="9.85" ry="10.93" transform="translate(-2.36 0.61) rotate(-1.84)"/>\n    <polygon class="cls-1" points="14.04 85.3 19.61 109.17 22.98 84.22 14.04 85.3"/>\n    <circle class="cls-1" cx="34.41" cy="30.47" r="5.85" transform="translate(-8.5 13.99) rotate(-20.52)"/>\n    <circle class="cls-1" cx="25.88" cy="25.96" r="5.85" transform="translate(-7.46 10.72) rotate(-20.52)"/>\n    <circle class="cls-1" cx="23.92" cy="16.61" r="5.85" transform="translate(-4.3 9.44) rotate(-20.52)"/>\n    <circle class="cls-1" cx="29.17" cy="7.8" r="5.85" transform="translate(-0.88 10.72) rotate(-20.52)"/>\n    <circle class="cls-1" cx="39.23" cy="6.77" r="5.85" transform="matrix(0.94, -0.35, 0.35, 0.94, 0.12, 14.18)"/>\n    <circle class="cls-1" cx="46.25" cy="15.95" r="5.85" transform="translate(-2.65 17.22) rotate(-20.52)"/>\n    <circle class="cls-1" cx="43.53" cy="24.66" r="5.85" transform="translate(-5.88 16.82) rotate(-20.52)"/>\n    <ellipse class="cls-1" cx="36.16" cy="18.91" rx="9.85" ry="10.93" transform="translate(-4.33 13.87) rotate(-20.52)"/>\n    <polygon class="cls-1" points="36.2 30.91 49.13 51.73 44.32 27.02 36.2 30.91"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="flatulence--wolf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.41 225.73">\n    <g class="cls-1">\n      <circle class="cls-2" cx="43.12" cy="135.72" r="10.14" transform="translate(-48.39 26.61) rotate(-22.36)"/>\n      <circle class="cls-2" cx="50.45" cy="120.7" r="10.14" transform="translate(-42.13 28.27) rotate(-22.36)"/>\n      <circle class="cls-2" cx="66.55" cy="116.77" r="10.14" transform="translate(-39.42 34.1) rotate(-22.36)"/>\n      <circle class="cls-2" cx="82.11" cy="125.39" r="10.14" transform="translate(-41.53 40.67) rotate(-22.36)"/>\n      <circle class="cls-2" cx="84.44" cy="142.74" r="10.14" transform="translate(-47.96 42.86) rotate(-22.36)"/>\n      <circle class="cls-2" cx="68.94" cy="155.43" r="10.14" transform="translate(-53.95 37.92) rotate(-22.36)"/>\n      <circle class="cls-2" cx="53.69" cy="151.19" r="10.14" transform="translate(-53.49 31.8) rotate(-22.36)"/>\n      <ellipse class="cls-2" cx="63.24" cy="138.1" rx="18.95" ry="17.08" transform="translate(-47.79 34.45) rotate(-22.36)"/>\n      <polygon class="cls-2" points="42.45 138.85 7.11 162.4 49.66 152.7 42.45 138.85"/>\n    </g>\n    <path class="cls-3" d="M129.82,23.59a7.39,7.39,0,0,0-4-4,7.4,7.4,0,0,0-8.51-12.1A7.41,7.41,0,0,0,103,4.71a7.4,7.4,0,0,0-11.32,9.23,7.41,7.41,0,1,0,2.61,14.57,7.4,7.4,0,0,0,10.54,10.07A7.41,7.41,0,1,0,118,31.89a7.41,7.41,0,0,0,11.83-8.3Z"/>\n    <path class="cls-3" d="M44.49,95.59a7.39,7.39,0,0,0-4-4A7.4,7.4,0,0,0,32,79.46a7.41,7.41,0,0,0-14.31-2.75A7.4,7.4,0,0,0,6.34,85.94a7.41,7.41,0,1,0,2.61,14.57,7.4,7.4,0,0,0,10.54,10.07,7.41,7.41,0,1,0,13.17-6.69,7.41,7.41,0,0,0,11.83-8.3Z"/>\n    <path class="cls-3" d="M96.92,115.34a11.38,11.38,0,0,0-6.19-6.2A11.41,11.41,0,0,0,77.62,90.49a11.41,11.41,0,0,0-22-4.23,11.4,11.4,0,0,0-17.44,14.22,11.41,11.41,0,1,0,4,22.45,11.41,11.41,0,0,0,16.23,15.51,11.42,11.42,0,1,0,20.3-10.32,11.41,11.41,0,0,0,18.23-12.79Z"/>\n    <path class="cls-3" d="M244.29,85.37a14.78,14.78,0,0,0-8-8.05,14.81,14.81,0,0,0-17-24.21,14.82,14.82,0,0,0-28.62-5.49A14.8,14.8,0,0,0,168,66.09a14.82,14.82,0,1,0,5.22,29.15,14.81,14.81,0,0,0,21.08,20.14A14.82,14.82,0,1,0,220.62,102a14.82,14.82,0,0,0,23.67-16.61Z"/>\n    <path class="cls-3" d="M184.92,64.78a14.78,14.78,0,0,0-8-8.05,14.81,14.81,0,0,0-17-24.21A14.82,14.82,0,0,0,131.24,27,14.8,14.8,0,0,0,108.6,45.5a14.82,14.82,0,1,0,5.22,29.15A14.81,14.81,0,0,0,134.9,94.78a14.82,14.82,0,1,0,26.35-13.39,14.82,14.82,0,0,0,23.67-16.61Z"/>\n    <path class="cls-3" d="M189,180a14.78,14.78,0,0,0-8-8.05,14.81,14.81,0,0,0-17-24.21,14.82,14.82,0,0,0-28.62-5.49,14.8,14.8,0,0,0-22.64,18.47,14.82,14.82,0,1,0,5.22,29.15A14.81,14.81,0,0,0,138.93,210a14.82,14.82,0,1,0,26.35-13.39A14.82,14.82,0,0,0,189,180Z"/>\n    <path class="cls-3" d="M209.64,200.44a9.58,9.58,0,0,0-5.21-5.22,9.6,9.6,0,0,0-11-15.69A9.6,9.6,0,0,0,174.85,176a9.59,9.59,0,0,0-14.67,12,9.6,9.6,0,1,0,3.38,18.89,9.6,9.6,0,0,0,13.66,13.05,9.61,9.61,0,1,0,17.08-8.68,9.6,9.6,0,0,0,15.34-10.77Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="flatulence--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.37 81.43">\n    <circle class="cls-1" cx="57.65" cy="41.81" r="8.96" transform="translate(2.04 86.3) rotate(-74.61)"/>\n    <circle class="cls-1" cx="51.11" cy="28.55" r="8.96" transform="translate(10.02 70.26) rotate(-74.61)"/>\n    <circle class="cls-1" cx="57.09" cy="15.17" r="8.96" transform="translate(27.31 66.19) rotate(-74.61)"/>\n    <circle class="cls-1" cx="71.53" cy="8.96" r="8.96" transform="translate(43.91 75.55) rotate(-74.61)"/>\n    <circle class="cls-1" cx="84.93" cy="16.72" r="8.96" transform="translate(46.26 94.17) rotate(-74.61)"/>\n    <circle class="cls-1" cx="85.4" cy="34.43" r="8.96" transform="translate(29.55 107.63) rotate(-74.61)"/>\n    <circle class="cls-1" cx="74.19" cy="42.8" r="8.96" transform="translate(13.24 102.97) rotate(-74.61)"/>\n    <ellipse class="cls-1" cx="70.21" cy="29.03" rx="16.76" ry="15.1" transform="translate(23.58 89.02) rotate(-74.61)"/>\n    <polygon class="cls-1" points="59.48 43.97 56.8 81.43 73.06 46.43 59.48 43.97"/>\n    <circle class="cls-1" cx="19.34" cy="60.52" r="6.16" transform="translate(-27.2 17.27) rotate(-29.37)"/>\n    <circle class="cls-1" cx="9.73" cy="57.21" r="6.16" transform="translate(-26.81 12.13) rotate(-29.37)"/>\n    <circle class="cls-1" cx="6.17" cy="47.78" r="6.16" transform="translate(-22.64 9.17) rotate(-29.37)"/>\n    <circle class="cls-1" cx="10.21" cy="37.75" r="6.16" transform="translate(-17.2 9.86) rotate(-29.37)"/>\n    <circle class="cls-1" cx="20.52" cy="35.05" r="6.16" transform="translate(-14.56 14.57) rotate(-29.37)"/>\n    <circle class="cls-1" cx="29.32" cy="43.47" r="6.16" transform="translate(-17.55 19.97) rotate(-29.37)"/>\n    <circle class="cls-1" cx="27.9" cy="52.99" r="6.16" transform="translate(-22.41 20.5) rotate(-29.37)"/>\n    <ellipse class="cls-1" cx="19.29" cy="48.2" rx="10.39" ry="11.53" transform="translate(-21.16 15.66) rotate(-29.37)"/>\n    <polygon class="cls-1" points="21.28 60.69 38.12 80.28 29.11 55.31 21.28 60.69"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/flatulence/flatulence.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], FlatulenceComponent);
    return FlatulenceComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=flatulence.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var FlowerComponent = /** @class */ (function (_super) {
    __extends(FlowerComponent, _super);
    function FlowerComponent(element) {
        return _super.call(this, 'flower', element.nativeElement) || this;
    }
    FlowerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'flower',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/flower/flower.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg width="125" class="flower" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.26 167.26">\n    <path class="cls-1" d="M47.07,56.81A107.12,107.12,0,0,0,154.26,164"/>\n    <polygon class="cls-2" points="46.35 16.61 55.54 35.23 76.09 38.22 61.22 52.71 64.73 73.17 46.35 63.51 27.97 73.17 31.48 52.71 16.61 38.22 37.16 35.23 46.35 16.61"/>\n    <path class="cls-2" d="M64.73,89.79A16.59,16.59,0,0,1,57,87.88l-10.65-5.6L35.7,87.88A16.61,16.61,0,0,1,11.6,70.37l2-11.86L5,50.11a16.61,16.61,0,0,1,9.21-28.34L26.13,20,31.45,9.26a16.61,16.61,0,0,1,29.8,0L66.57,20l11.9,1.73a16.61,16.61,0,0,1,9.21,28.34l-8.61,8.4,2,11.86A16.61,16.61,0,0,1,64.73,89.79Z"/>\n    <circle class="cls-3" cx="45.63" cy="48.12" r="17.38"/>\n    <path class="cls-4" d="M124,88a44,44,0,0,0-44,44A44,44,0,0,0,124,88Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="flower--skeleton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187.4 218.38">\n    <polygon class="cls-1" points="4.88 65.74 9.73 62.03 9.42 55.94 14.45 59.4 20.15 57.23 18.4 63.08 22.23 67.83 16.13 67.98 12.8 73.09 10.77 67.33 4.88 65.74"/>\n    <path class="cls-1" d="M24.94,56.29a4.87,4.87,0,0,1-.11,2.34l-1,3.39L26,64.76a4.88,4.88,0,0,1-3.68,7.94l-3.53.09-1.93,3a4.88,4.88,0,0,1-8.69-1L7,71.37l-3.41-.92a4.88,4.88,0,0,1-1.69-8.59l2.81-2.15-.18-3.53a4.88,4.88,0,0,1,7.65-4.26l2.91,2,3.3-1.26a4.88,4.88,0,0,1,6.53,3.62Z"/>\n    <circle class="cls-2" cx="14.01" cy="64.16" r="5.11" transform="translate(-12.13 3.91) rotate(-11.14)"/>\n    <path class="cls-3" d="M12.38,32.46A12.92,12.92,0,0,0,27.56,42.65,12.92,12.92,0,0,0,12.38,32.46Z"/>\n    <polygon class="cls-1" points="99.29 24.69 105.36 19.63 104.62 11.76 111.31 15.96 118.57 12.83 116.64 20.5 121.86 26.43 113.97 26.96 109.94 33.76 107 26.43 99.29 24.69"/>\n    <path class="cls-1" d="M124.72,11.35a6.31,6.31,0,0,1,0,3l-1.12,4.44,3,3.44a6.32,6.32,0,0,1-4.32,10.49l-4.57.31L115.38,37a6.32,6.32,0,0,1-11.31-.87l-1.71-4.25-4.47-1a6.32,6.32,0,0,1-2.67-11l3.51-2.93-.43-4.56A6.32,6.32,0,0,1,108,6.4l3.88,2.44L116.07,7a6.32,6.32,0,0,1,8.65,4.32Z"/>\n    <circle class="cls-2" cx="111.01" cy="22.14" r="6.62" transform="translate(-2.09 26.71) rotate(-13.59)"/>\n    <path class="cls-3" d="M82.42,6.24a16.74,16.74,0,0,0,20.22,12.34A16.74,16.74,0,0,0,82.42,6.24Z"/>\n    <polygon class="cls-1" points="133.38 38.07 139.45 33 138.72 25.13 145.41 29.34 152.67 26.2 150.74 33.87 155.96 39.8 148.07 40.34 144.04 47.13 141.09 39.8 133.38 38.07"/>\n    <path class="cls-1" d="M158.81,24.72a6.31,6.31,0,0,1,0,3l-1.12,4.44,3,3.44a6.32,6.32,0,0,1-4.32,10.49l-4.57.31-2.34,3.94a6.32,6.32,0,0,1-11.31-.87l-1.71-4.25-4.47-1a6.32,6.32,0,0,1-2.67-11l3.51-2.93-.43-4.56a6.32,6.32,0,0,1,9.66-5.94L146,22.21l4.2-1.81a6.32,6.32,0,0,1,8.65,4.32Z"/>\n    <circle class="cls-2" cx="145.11" cy="35.51" r="6.62" transform="translate(-4.28 35.1) rotate(-13.59)"/>\n    <path class="cls-3" d="M129.8,23.57A16.74,16.74,0,0,0,132.12,0,16.74,16.74,0,0,0,129.8,23.57Z"/>\n    <polygon class="cls-1" points="158.51 63.03 164.57 57.96 163.84 50.09 170.53 54.3 177.79 51.17 175.86 58.83 181.08 64.77 173.19 65.3 169.16 72.1 166.22 64.76 158.51 63.03"/>\n    <path class="cls-1" d="M183.94,49.68a6.31,6.31,0,0,1,0,3l-1.12,4.44,3,3.44a6.32,6.32,0,0,1-4.32,10.49l-4.57.31-2.34,3.94a6.32,6.32,0,0,1-11.31-.87l-1.71-4.25-4.47-1a6.32,6.32,0,0,1-2.67-11L158,55.24l-.43-4.56a6.32,6.32,0,0,1,9.66-5.94l3.88,2.44,4.2-1.81a6.32,6.32,0,0,1,8.65,4.32Z"/>\n    <circle class="cls-2" cx="170.23" cy="60.48" r="6.62" transform="translate(-9.45 41.71) rotate(-13.59)"/>\n    <path class="cls-3" d="M160.64,28.25a16.74,16.74,0,0,0,20.22,12.34A16.74,16.74,0,0,0,160.64,28.25Z"/>\n    <path class="cls-4" d="M17.91,161.5a40.78,40.78,0,0,0,14.63,55.82"/>\n    <polygon class="cls-1" points="25.39 148.15 24.84 156.03 31.02 160.96 23.35 162.86 20.57 170.26 16.39 163.56 8.49 163.2 13.57 157.15 11.47 149.53 18.8 152.5 25.39 148.15"/>\n    <path class="cls-1" d="M17.38,175.72a6.31,6.31,0,0,1-2.17-2.11l-2.42-3.88-4.57-.21a6.32,6.32,0,0,1-4.56-10.39l2.95-3.51-1.22-4.41a6.32,6.32,0,0,1,8.47-7.54l4.24,1.72,3.82-2.52a6.32,6.32,0,0,1,9.79,5.72l-.32,4.57L35,156a6.32,6.32,0,0,1-2.42,11.08l-4.44,1.1-1.61,4.29a6.32,6.32,0,0,1-9.11,3.24Z"/>\n    <circle class="cls-2" cx="19.1" cy="158.36" r="6.62" transform="translate(-127.25 94.93) rotate(-59.69)"/>\n    <path class="cls-3" d="M37.2,186.52a16.74,16.74,0,0,0-22.91,6A16.74,16.74,0,0,0,37.2,186.52Z"/>\n    <polygon class="cls-1" points="53.04 39.09 45.14 38.66 40.31 44.91 38.29 37.27 30.84 34.61 37.48 30.32 37.71 22.42 43.84 27.41 51.43 25.19 48.58 32.56 53.04 39.09"/>\n    <path class="cls-1" d="M25.34,31.51a6.31,6.31,0,0,1,2.08-2.21l3.85-2.48.13-4.58a6.32,6.32,0,0,1,10.31-4.72l3.55,2.89,4.39-1.29a6.32,6.32,0,0,1,7.68,8.35l-1.65,4.27,2.58,3.78a6.32,6.32,0,0,1-5.57,9.88l-4.57-.25-2.8,3.62A6.32,6.32,0,0,1,34.2,46.53L33,42.11l-4.31-1.54a6.32,6.32,0,0,1-3.38-9.06Z"/>\n    <circle class="cls-2" cx="42.72" cy="32.96" r="6.62" transform="translate(-6.97 53.99) rotate(-60.59)"/>\n    <path class="cls-3" d="M21.52,51.5a16.74,16.74,0,0,0-6.37-22.82A16.74,16.74,0,0,0,21.52,51.5Z"/>\n    <polygon class="cls-1" points="81.72 28.76 74.87 24.83 67.74 28.25 69.36 20.51 63.91 14.79 71.76 13.94 75.52 6.99 78.75 14.2 86.53 15.62 80.67 20.93 81.72 28.76"/>\n    <path class="cls-1" d="M60.38,9.54a6.31,6.31,0,0,1,2.85-1L67.78,8,70,4a6.32,6.32,0,0,1,11.33.41l1.87,4.18,4.5.82a6.32,6.32,0,0,1,3.11,10.91l-3.39,3.07L88,27.92a6.32,6.32,0,0,1-9.41,6.33l-4-2.28-4.13,2a6.32,6.32,0,0,1-8.93-7l.94-4.48-3.16-3.31a6.32,6.32,0,0,1,1-9.61Z"/>\n    <circle class="cls-2" cx="75.26" cy="18.65" r="6.62" transform="matrix(0.83, -0.56, 0.56, 0.83, 2.39, 45.15)"/>\n    <path class="cls-3" d="M51,24.69A16.74,16.74,0,0,0,55.59,1.45,16.74,16.74,0,0,0,51,24.69Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="flower flower--zombie" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.72 35.21">\n    <path class="cls-1" d="M58.47,15.9A40.78,40.78,0,0,0,.94,20.33"/>\n    <polygon class="cls-2" points="70.27 25.65 62.62 23.69 56.66 28.89 56.16 21 49.37 16.95 56.72 14.03 58.48 6.32 63.52 12.41 71.39 11.7 67.17 18.38 70.27 25.65"/>\n    <path class="cls-2" d="M44.57,12.83A6.31,6.31,0,0,1,47,11.07l4.26-1.69,1-4.46a6.32,6.32,0,0,1,11-2.63l2.92,3.52,4.56-.41a6.32,6.32,0,0,1,5.91,9.68L74.29,19l1.8,4.21a6.32,6.32,0,0,1-7.38,8.61l-4.44-1.13-3.45,3A6.32,6.32,0,0,1,50.35,29.3l-.29-4.57-3.93-2.35a6.32,6.32,0,0,1-1.56-9.54Z"/>\n    <circle class="cls-3" cx="61.34" cy="17.63" r="6.62" transform="translate(8.04 52.74) rotate(-49.41)"/>\n    <path class="cls-4" d="M30.41,30.41A16.74,16.74,0,0,0,28.59,6.79,16.74,16.74,0,0,0,30.41,30.41Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="flower flower--mummy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.93 46.7">\n    <path class="cls-1" d="M45,15.42A38,38,0,0,0,1.14,46.51"/>\n    <polygon class="cls-2" points="59.04 17.56 51.99 19.66 49.73 26.66 45.55 20.61 38.19 20.62 42.66 14.77 40.37 7.78 47.31 10.22 53.26 5.89 53.08 13.24 59.04 17.56"/>\n    <path class="cls-2" d="M32.38,19.63A5.88,5.88,0,0,1,33.51,17l2.59-3.39L34.77,9.61a5.89,5.89,0,0,1,7.55-7.38l4,1.41,3.44-2.51A5.89,5.89,0,0,1,59.14,6L59,10.29l3.45,2.5A5.89,5.89,0,0,1,60.72,23.2l-4.08,1.22-1.31,4.06A5.89,5.89,0,0,1,44.88,30L42.46,26.5H38.2a5.89,5.89,0,0,1-5.81-6.87Z"/>\n    <circle class="cls-3" cx="48.07" cy="15.44" r="6.16" transform="translate(24.8 60.24) rotate(-80.35)"/>\n    <path class="cls-4" d="M29.49,40.45a15.58,15.58,0,0,0-12.76-18A15.58,15.58,0,0,0,29.49,40.45Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="flower--yaga" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.01 48.55">\n    <polygon class="cls-1" points="3.92 38.46 7.8 35.49 7.56 30.6 11.58 33.38 16.16 31.63 14.76 36.32 17.83 40.13 12.94 40.25 10.26 44.35 8.64 39.73 3.92 38.46"/>\n    <path class="cls-1" d="M20,30.88a3.91,3.91,0,0,1-.09,1.87l-.81,2.72,1.78,2.21a3.91,3.91,0,0,1-3,6.37l-2.83.07-1.55,2.37a3.91,3.91,0,0,1-7-.84L5.63,43l-2.74-.74a3.91,3.91,0,0,1-1.36-6.89l2.25-1.72L3.65,30.8a3.91,3.91,0,0,1,6.13-3.42L12.11,29l2.65-1A3.91,3.91,0,0,1,20,30.88Z"/>\n    <circle class="cls-2" cx="11.23" cy="37.19" r="4.1" transform="translate(-6.97 2.87) rotate(-11.14)"/>\n    <path class="cls-3" d="M9.93,11.77A10.36,10.36,0,0,0,22.1,19.94,10.36,10.36,0,0,0,9.93,11.77Z"/>\n    <polygon class="cls-1" points="61.46 15.29 65.22 12.15 64.76 7.28 68.91 9.88 73.4 7.94 72.2 12.69 75.43 16.36 70.55 16.69 68.06 20.9 66.23 16.36 61.46 15.29"/>\n    <path class="cls-1" d="M77.2,7a3.91,3.91,0,0,1,0,1.88l-.69,2.75,1.87,2.13a3.91,3.91,0,0,1-2.68,6.49l-2.83.19L71.42,22.9a3.91,3.91,0,0,1-7-.54l-1.06-2.63-2.77-.62A3.91,3.91,0,0,1,59,12.28l2.18-1.82-.26-2.82a3.91,3.91,0,0,1,6-3.68l2.4,1.51,2.6-1.12A3.91,3.91,0,0,1,77.2,7Z"/>\n    <circle class="cls-2" cx="68.72" cy="13.71" r="4.1" transform="translate(-1.3 16.54) rotate(-13.59)"/>\n    <path class="cls-3" d="M51,3.86A10.36,10.36,0,0,0,63.53,11.5,10.36,10.36,0,0,0,51,3.86Z"/>\n    <polygon class="cls-1" points="82.57 23.56 86.32 20.43 85.87 15.56 90.01 18.16 94.5 16.22 93.31 20.97 96.54 24.64 91.66 24.97 89.16 29.18 87.34 24.64 82.57 23.56"/>\n    <path class="cls-1" d="M98.31,15.3a3.91,3.91,0,0,1,0,1.88l-.69,2.75,1.87,2.13a3.91,3.91,0,0,1-2.68,6.49L94,28.74l-1.45,2.44a3.91,3.91,0,0,1-7-.54L84.47,28l-2.77-.62a3.91,3.91,0,0,1-1.65-6.82l2.18-1.82L82,15.92a3.91,3.91,0,0,1,6-3.68l2.4,1.51L93,12.63a3.91,3.91,0,0,1,5.36,2.67Z"/>\n    <circle class="cls-2" cx="89.82" cy="21.98" r="4.1" transform="translate(-2.65 21.73) rotate(-13.59)"/>\n    <path class="cls-3" d="M80.35,14.59A10.36,10.36,0,0,0,81.78,0,10.36,10.36,0,0,0,80.35,14.59Z"/>\n    <polygon class="cls-1" points="98.12 39.02 101.88 35.88 101.42 31.01 105.56 33.61 110.06 31.68 108.86 36.42 112.09 40.09 107.21 40.42 104.72 44.63 102.89 40.09 98.12 39.02"/>\n    <path class="cls-1" d="M113.86,30.76a3.91,3.91,0,0,1,0,1.88l-.69,2.75L115,37.51A3.91,3.91,0,0,1,112.36,44l-2.83.19-1.45,2.44a3.91,3.91,0,0,1-7-.54L100,43.46l-2.77-.62A3.91,3.91,0,0,1,95.61,36l2.18-1.82-.26-2.82a3.91,3.91,0,0,1,6-3.68l2.4,1.51,2.6-1.12a3.91,3.91,0,0,1,5.36,2.67Z"/>\n    <circle class="cls-2" cx="105.38" cy="37.44" r="4.1" transform="translate(-5.85 25.82) rotate(-13.59)"/>\n    <path class="cls-3" d="M99.44,17.48A10.36,10.36,0,0,0,112,25.13,10.36,10.36,0,0,0,99.44,17.48Z"/>\n    <polygon class="cls-1" points="32.83 24.2 27.95 23.93 24.95 27.8 23.7 23.07 19.09 21.43 23.2 18.77 23.35 13.88 27.14 16.97 31.84 15.59 30.07 20.16 32.83 24.2"/>\n    <path class="cls-1" d="M15.68,19.5A3.91,3.91,0,0,1,17,18.14l2.38-1.54.08-2.83a3.91,3.91,0,0,1,6.38-2.92L28,12.63l2.72-.8A3.91,3.91,0,0,1,35.49,17l-1,2.64L36.06,22a3.91,3.91,0,0,1-3.45,6.12L29.79,28l-1.73,2.24a3.91,3.91,0,0,1-6.88-1.39l-.73-2.74-2.67-1a3.91,3.91,0,0,1-2.09-5.61Z"/>\n    <circle class="cls-2" cx="26.45" cy="20.4" r="4.1" transform="translate(-4.31 33.42) rotate(-60.59)"/>\n    <path class="cls-3" d="M13.32,31.88A10.36,10.36,0,0,0,9.38,17.75,10.36,10.36,0,0,0,13.32,31.88Z"/>\n    <polygon class="cls-1" points="50.59 17.8 46.34 15.37 41.93 17.49 42.94 12.7 39.56 9.16 44.42 8.63 46.75 4.33 48.75 8.79 53.56 9.67 49.94 12.95 50.59 17.8"/>\n    <path class="cls-1" d="M37.38,5.91a3.91,3.91,0,0,1,1.76-.64L42,5,43.3,2.47a3.91,3.91,0,0,1,7,.26l1.16,2.59,2.79.51a3.91,3.91,0,0,1,1.92,6.75l-2.1,1.9.38,2.81a3.91,3.91,0,0,1-5.83,3.92l-2.46-1.41L43.63,21a3.91,3.91,0,0,1-5.53-4.33l.58-2.77-2-2.05a3.91,3.91,0,0,1,.65-6Z"/>\n    <circle class="cls-2" cx="46.59" cy="11.54" r="4.1" transform="translate(1.48 27.95) rotate(-33.91)"/>\n    <path class="cls-3" d="M31.59,15.29A10.36,10.36,0,0,0,34.41.9,10.36,10.36,0,0,0,31.59,15.29Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="flower--doctor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.43 214.87">\n    <path class="cls-1" d="M118.21,11A27,27,0,0,0,87,33.1"/>\n    <polygon class="cls-2" points="128.24 12.5 123.22 14 121.61 18.98 118.64 14.67 113.4 14.68 116.58 10.52 114.95 5.54 119.89 7.28 124.13 4.19 124 9.43 128.24 12.5"/>\n    <path class="cls-2" d="M109.27,14a4.18,4.18,0,0,1,.8-1.84l1.84-2.41L111,6.84a4.19,4.19,0,0,1,5.37-5.25l2.86,1L121.66.8a4.19,4.19,0,0,1,6.66,3.49l-.07,3L130.7,9.1a4.19,4.19,0,0,1-1.26,7.41l-2.91.87-.93,2.89a4.19,4.19,0,0,1-7.44,1.09l-1.72-2.5h-3A4.19,4.19,0,0,1,109.27,14Z"/>\n    <circle class="cls-3" cx="120.43" cy="10.99" r="4.38" transform="translate(89.42 127.88) rotate(-80.35)"/>\n    <path class="cls-4" d="M107.2,28.79A11.09,11.09,0,0,0,98.12,16,11.09,11.09,0,0,0,107.2,28.79Z"/>\n    <polygon class="cls-2" points="112.09 176.41 108.21 179.39 108.45 184.27 104.42 181.5 99.85 183.24 101.25 178.55 98.18 174.74 103.07 174.62 105.74 170.52 107.37 175.14 112.09 176.41"/>\n    <path class="cls-2" d="M96,184a3.91,3.91,0,0,1,.09-1.87l.81-2.72-1.78-2.21a3.91,3.91,0,0,1,3-6.37l2.83-.07,1.55-2.37a3.91,3.91,0,0,1,7,.84l.94,2.67,2.74.74a3.91,3.91,0,0,1,1.36,6.89l-2.25,1.72.14,2.83a3.91,3.91,0,0,1-6.13,3.42l-2.33-1.61-2.65,1A3.91,3.91,0,0,1,96,184Z"/>\n    <circle class="cls-3" cx="104.77" cy="177.68" r="4.1" transform="translate(-32.35 23.59) rotate(-11.14)"/>\n    <path class="cls-4" d="M106.08,203.1a10.36,10.36,0,0,0-12.18-8.17A10.36,10.36,0,0,0,106.08,203.1Z"/>\n    <polygon class="cls-2" points="54.55 199.59 50.79 202.72 51.24 207.59 47.1 204.99 42.61 206.93 43.8 202.18 40.57 198.51 45.45 198.18 47.95 193.97 49.77 198.51 54.55 199.59"/>\n    <path class="cls-2" d="M38.8,207.85a3.91,3.91,0,0,1,0-1.88l.69-2.75-1.87-2.13a3.91,3.91,0,0,1,2.68-6.49l2.83-.19L44.58,192a3.91,3.91,0,0,1,7,.54l1.06,2.63,2.77.62a3.91,3.91,0,0,1,1.65,6.82l-2.18,1.82.26,2.82a3.91,3.91,0,0,1-6,3.68l-2.4-1.51-2.6,1.12a3.91,3.91,0,0,1-5.36-2.67Z"/>\n    <circle class="cls-3" cx="47.29" cy="201.17" r="4.1" transform="translate(-45.96 16.75) rotate(-13.59)"/>\n    <path class="cls-4" d="M65,211a10.36,10.36,0,0,0-12.51-7.64A10.36,10.36,0,0,0,65,211Z"/>\n    <polygon class="cls-2" points="33.44 191.31 29.68 194.44 30.14 199.32 26 196.71 21.5 198.65 22.7 193.91 19.47 190.23 24.35 189.9 26.84 185.69 28.67 190.24 33.44 191.31"/>\n    <path class="cls-2" d="M17.7,199.57a3.91,3.91,0,0,1,0-1.88l.69-2.75-1.87-2.13a3.91,3.91,0,0,1,2.68-6.49l2.83-.19,1.45-2.44a3.91,3.91,0,0,1,7,.54l1.06,2.63,2.77.62a3.91,3.91,0,0,1,1.65,6.82l-2.18,1.82L34,199a3.91,3.91,0,0,1-6,3.68l-2.4-1.51-2.6,1.12a3.91,3.91,0,0,1-5.36-2.67Z"/>\n    <circle class="cls-3" cx="26.18" cy="192.89" r="4.1" transform="translate(-44.61 11.56) rotate(-13.59)"/>\n    <path class="cls-4" d="M35.66,200.28a10.36,10.36,0,0,0-1.43,14.59A10.36,10.36,0,0,0,35.66,200.28Z"/>\n    <polygon class="cls-2" points="17.89 175.86 14.13 178.99 14.59 183.86 10.44 181.26 5.95 183.2 7.15 178.45 3.92 174.78 8.8 174.45 11.29 170.24 13.11 174.78 17.89 175.86"/>\n    <path class="cls-2" d="M2.15,184.12a3.91,3.91,0,0,1,0-1.88l.69-2.75L1,177.36a3.91,3.91,0,0,1,2.68-6.49l2.83-.19,1.45-2.44a3.91,3.91,0,0,1,7,.54L16,171.41l2.77.62a3.91,3.91,0,0,1,1.65,6.82l-2.18,1.82.26,2.82a3.91,3.91,0,0,1-6,3.68l-2.4-1.51-2.6,1.12a3.91,3.91,0,0,1-5.36-2.67Z"/>\n    <circle class="cls-3" cx="10.63" cy="177.44" r="4.1" transform="translate(-41.41 7.47) rotate(-13.59)"/>\n    <path class="cls-4" d="M16.57,197.39a10.36,10.36,0,0,0-12.51-7.64A10.36,10.36,0,0,0,16.57,197.39Z"/>\n    <polygon class="cls-2" points="83.18 190.68 88.06 190.94 91.05 187.07 92.31 191.8 96.91 193.45 92.81 196.1 92.66 200.99 88.87 197.9 84.17 199.28 85.94 194.72 83.18 190.68"/>\n    <path class="cls-2" d="M100.32,195.37A3.91,3.91,0,0,1,99,196.74l-2.38,1.54-.08,2.83A3.91,3.91,0,0,1,90.19,204L88,202.24l-2.72.8a3.91,3.91,0,0,1-4.75-5.17l1-2.64-1.6-2.34a3.91,3.91,0,0,1,3.45-6.12l2.83.16L88,184.68a3.91,3.91,0,0,1,6.88,1.39l.73,2.74,2.67,1a3.91,3.91,0,0,1,2.09,5.61Z"/>\n    <circle class="cls-3" cx="89.56" cy="194.47" r="4.1" transform="translate(-123.83 177) rotate(-60.59)"/>\n    <path class="cls-4" d="M102.69,183a10.36,10.36,0,0,0,3.94,14.12A10.36,10.36,0,0,0,102.69,183Z"/>\n    <polygon class="cls-2" points="65.42 197.07 69.66 199.5 74.07 197.39 73.07 202.18 76.45 205.72 71.58 206.24 69.26 210.55 67.26 206.08 62.44 205.2 66.07 201.92 65.42 197.07"/>\n    <path class="cls-2" d="M78.63,209a3.91,3.91,0,0,1-1.76.64l-2.82.3-1.35,2.49a3.91,3.91,0,0,1-7-.26l-1.16-2.59-2.79-.51a3.91,3.91,0,0,1-1.92-6.75l2.1-1.9-.38-2.81a3.91,3.91,0,0,1,5.83-3.92l2.46,1.41,2.56-1.23a3.91,3.91,0,0,1,5.53,4.33L77.33,201l2,2.05a3.91,3.91,0,0,1-.65,6Z"/>\n    <circle class="cls-3" cx="69.42" cy="203.33" r="4.1" transform="translate(-101.62 73.3) rotate(-33.91)"/>\n    <path class="cls-4" d="M84.42,199.59A10.36,10.36,0,0,0,81.6,214,10.36,10.36,0,0,0,84.42,199.59Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="flower--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.77 121.9">\n    <polygon class="cls-1" points="95.43 8.59 92.13 11.12 92.33 15.28 88.9 12.91 85.01 14.4 86.2 10.41 83.59 7.16 87.75 7.06 90.03 3.57 91.41 7.5 95.43 8.59"/>\n    <path class="cls-1" d="M81.74,15a3.33,3.33,0,0,1,.08-1.6l.69-2.31L81,9.26a3.33,3.33,0,0,1,2.51-5.42l2.41-.06,1.32-2a3.33,3.33,0,0,1,5.93.71L94,4.74l2.33.63a3.33,3.33,0,0,1,1.15,5.86L95.54,12.7l.12,2.41A3.33,3.33,0,0,1,90.44,18l-2-1.37-2.25.86A3.33,3.33,0,0,1,81.74,15Z"/>\n    <circle class="cls-2" cx="89.2" cy="9.67" r="3.49" transform="translate(-0.19 17.42) rotate(-11.14)"/>\n    <path class="cls-3" d="M90.31,31.31a8.82,8.82,0,0,0-10.37-7A8.82,8.82,0,0,0,90.31,31.31Z"/>\n    <polygon class="cls-1" points="46.44 28.32 43.24 30.99 43.63 35.13 40.1 32.92 36.28 34.57 37.29 30.53 34.54 27.4 38.7 27.12 40.82 23.54 42.38 27.4 46.44 28.32"/>\n    <path class="cls-1" d="M33,35.35a3.33,3.33,0,0,1,0-1.6l.59-2.34L32,29.6a3.33,3.33,0,0,1,2.28-5.53l2.41-.16L38,21.84a3.33,3.33,0,0,1,6,.46l.9,2.24,2.35.53a3.33,3.33,0,0,1,1.41,5.81l-1.85,1.55.22,2.4A3.33,3.33,0,0,1,41.86,38l-2-1.28-2.22,1A3.33,3.33,0,0,1,33,35.35Z"/>\n    <circle class="cls-2" cx="40.26" cy="29.66" r="3.49" transform="translate(-5.84 10.29) rotate(-13.59)"/>\n    <path class="cls-3" d="M55.33,38a8.82,8.82,0,0,0-10.65-6.51A8.82,8.82,0,0,0,55.33,38Z"/>\n    <polygon class="cls-1" points="28.47 21.27 25.27 23.94 25.66 28.09 22.13 25.87 18.31 27.52 19.32 23.48 16.57 20.35 20.73 20.07 22.86 16.49 24.41 20.36 28.47 21.27"/>\n    <path class="cls-1" d="M15.07,28.3a3.33,3.33,0,0,1,0-1.6l.59-2.34-1.59-1.81A3.33,3.33,0,0,1,16.35,17l2.41-.16L20,14.79a3.33,3.33,0,0,1,6,.46l.9,2.24L29.2,18a3.33,3.33,0,0,1,1.41,5.81l-1.85,1.55.22,2.4a3.33,3.33,0,0,1-5.09,3.13l-2-1.28-2.22,1a3.33,3.33,0,0,1-4.56-2.28Z"/>\n    <circle class="cls-2" cx="22.29" cy="22.61" r="3.49" transform="translate(-4.69 5.87) rotate(-13.59)"/>\n    <path class="cls-3" d="M30.36,28.91a8.82,8.82,0,0,0-1.22,12.42A8.82,8.82,0,0,0,30.36,28.91Z"/>\n    <polygon class="cls-1" points="15.23 8.11 12.03 10.78 12.42 14.93 8.89 12.71 5.07 14.36 6.08 10.32 3.33 7.2 7.49 6.92 9.61 3.33 11.16 7.2 15.23 8.11"/>\n    <path class="cls-1" d="M1.83,15.15a3.33,3.33,0,0,1,0-1.6l.59-2.34L.83,9.4A3.33,3.33,0,0,1,3.11,3.87l2.41-.16L6.75,1.63a3.33,3.33,0,0,1,6,.46l.9,2.24L16,4.86a3.33,3.33,0,0,1,1.41,5.81l-1.85,1.55.22,2.4a3.33,3.33,0,0,1-5.09,3.13l-2-1.28-2.22,1a3.33,3.33,0,0,1-4.56-2.28Z"/>\n    <circle class="cls-2" cx="9.05" cy="9.46" r="3.49" transform="translate(-1.97 2.39) rotate(-13.59)"/>\n    <path class="cls-3" d="M14.11,26.44A8.82,8.82,0,0,0,3.45,19.94,8.82,8.82,0,0,0,14.11,26.44Z"/>\n    <polygon class="cls-1" points="70.82 20.73 74.97 20.96 77.52 17.66 78.59 21.69 82.51 23.09 79.01 25.35 78.89 29.51 75.66 26.88 71.66 28.05 73.16 24.17 70.82 20.73"/>\n    <path class="cls-1" d="M85.41,24.73a3.33,3.33,0,0,1-1.1,1.16l-2,1.31-.07,2.41a3.33,3.33,0,0,1-5.44,2.49l-1.87-1.52-2.32.68a3.33,3.33,0,0,1-4-4.4l.87-2.25-1.36-2A3.33,3.33,0,0,1,71,17.4l2.41.13,1.47-1.91a3.33,3.33,0,0,1,5.86,1.18l.62,2.33,2.27.81a3.33,3.33,0,0,1,1.78,4.78Z"/>\n    <circle class="cls-2" cx="76.25" cy="23.96" r="3.49" transform="translate(17.94 78.62) rotate(-60.59)"/>\n    <path class="cls-3" d="M87.43,14.19a8.82,8.82,0,0,0,3.36,12A8.82,8.82,0,0,0,87.43,14.19Z"/>\n    <polygon class="cls-1" points="55.7 26.17 59.31 28.25 63.06 26.44 62.21 30.52 65.09 33.54 60.95 33.98 58.97 37.65 57.26 33.85 53.16 33.1 56.25 30.3 55.7 26.17"/>\n    <path class="cls-1" d="M66.95,36.3a3.33,3.33,0,0,1-1.5.55l-2.4.26L61.9,39.23a3.33,3.33,0,0,1-6-.22l-1-2.2-2.37-.43a3.33,3.33,0,0,1-1.64-5.75L52.71,29l-.32-2.39a3.33,3.33,0,0,1,5-3.33l2.09,1.2,2.18-1a3.33,3.33,0,0,1,4.7,3.69l-.49,2.36,1.67,1.75a3.33,3.33,0,0,1-.55,5.07Z"/>\n    <circle class="cls-2" cx="59.1" cy="31.5" r="3.49" transform="translate(-7.52 38.32) rotate(-33.91)"/>\n    <path class="cls-3" d="M71.87,28.32a8.82,8.82,0,0,0-2.4,12.25A8.82,8.82,0,0,0,71.87,28.32Z"/>\n    <polygon class="cls-1" points="95.43 89.16 92.13 91.69 92.33 95.85 88.9 93.49 85.01 94.97 86.2 90.98 83.59 87.74 87.75 87.63 90.03 84.14 91.41 88.07 95.43 89.16"/>\n    <path class="cls-1" d="M81.74,95.61a3.33,3.33,0,0,1,.08-1.6l.69-2.31L81,89.83a3.33,3.33,0,0,1,2.51-5.42l2.41-.06,1.32-2a3.33,3.33,0,0,1,5.93.71l.8,2.28,2.33.63a3.33,3.33,0,0,1,1.15,5.86l-1.92,1.47.12,2.41a3.33,3.33,0,0,1-5.22,2.91l-2-1.37-2.25.86a3.33,3.33,0,0,1-4.46-2.47Z"/>\n    <circle class="cls-2" cx="89.2" cy="90.24" r="3.49" transform="translate(-15.75 18.93) rotate(-11.14)"/>\n    <path class="cls-3" d="M90.31,111.88a8.82,8.82,0,0,0-10.37-7A8.82,8.82,0,0,0,90.31,111.88Z"/>\n    <polygon class="cls-1" points="46.44 108.89 43.24 111.56 43.63 115.71 40.1 113.49 36.28 115.14 37.29 111.1 34.54 107.97 38.7 107.69 40.82 104.11 42.38 107.98 46.44 108.89"/>\n    <path class="cls-1" d="M33,115.92a3.33,3.33,0,0,1,0-1.6l.59-2.34L32,110.17a3.33,3.33,0,0,1,2.28-5.53l2.41-.16L38,102.41a3.33,3.33,0,0,1,6,.46l.9,2.24,2.35.53a3.33,3.33,0,0,1,1.41,5.81L46.72,113l.22,2.4a3.33,3.33,0,0,1-5.09,3.13l-2-1.28-2.22,1A3.33,3.33,0,0,1,33,115.92Z"/>\n    <circle class="cls-2" cx="40.26" cy="110.23" r="3.49" transform="translate(-24.78 12.55) rotate(-13.59)"/>\n    <path class="cls-3" d="M55.33,118.61a8.82,8.82,0,0,0-10.65-6.51A8.82,8.82,0,0,0,55.33,118.61Z"/>\n    <polygon class="cls-1" points="28.47 101.84 25.27 104.51 25.66 108.66 22.13 106.44 18.31 108.09 19.32 104.05 16.57 100.92 20.73 100.64 22.86 97.06 24.41 100.93 28.47 101.84"/>\n    <path class="cls-1" d="M15.07,108.88a3.33,3.33,0,0,1,0-1.6l.59-2.34-1.59-1.81a3.33,3.33,0,0,1,2.28-5.53l2.41-.16L20,95.36a3.33,3.33,0,0,1,6,.46l.9,2.24,2.35.53a3.33,3.33,0,0,1,1.41,5.81l-1.85,1.55.22,2.4a3.33,3.33,0,0,1-5.09,3.13l-2-1.28-2.22,1a3.33,3.33,0,0,1-4.56-2.28Z"/>\n    <circle class="cls-2" cx="22.29" cy="103.19" r="3.49" transform="translate(-23.63 8.13) rotate(-13.59)"/>\n    <path class="cls-3" d="M30.36,109.48a8.82,8.82,0,0,0-1.22,12.42A8.82,8.82,0,0,0,30.36,109.48Z"/>\n    <polygon class="cls-1" points="15.23 88.69 12.03 91.36 12.42 95.5 8.89 93.29 5.07 94.94 6.08 90.9 3.33 87.77 7.49 87.49 9.61 83.91 11.16 87.77 15.23 88.69"/>\n    <path class="cls-1" d="M1.83,95.72a3.33,3.33,0,0,1,0-1.6l.59-2.34L.83,90a3.33,3.33,0,0,1,2.28-5.53l2.41-.16,1.23-2.08a3.33,3.33,0,0,1,6,.46l.9,2.24,2.35.53a3.33,3.33,0,0,1,1.41,5.81l-1.85,1.55.22,2.4a3.33,3.33,0,0,1-5.09,3.13L8.6,97,6.39,98a3.33,3.33,0,0,1-4.56-2.28Z"/>\n    <circle class="cls-2" cx="9.05" cy="90.03" r="3.49" transform="translate(-20.91 4.65) rotate(-13.59)"/>\n    <path class="cls-3" d="M14.11,107a8.82,8.82,0,0,0-10.65-6.51A8.82,8.82,0,0,0,14.11,107Z"/>\n    <polygon class="cls-1" points="70.82 101.3 74.97 101.53 77.52 98.23 78.59 102.26 82.51 103.66 79.01 105.92 78.89 110.09 75.66 107.46 71.66 108.63 73.16 104.74 70.82 101.3"/>\n    <path class="cls-1" d="M85.41,105.3a3.33,3.33,0,0,1-1.1,1.16l-2,1.31-.07,2.41a3.33,3.33,0,0,1-5.44,2.49l-1.87-1.52-2.32.68a3.33,3.33,0,0,1-4-4.4l.87-2.25-1.36-2A3.33,3.33,0,0,1,71,98l2.41.13,1.47-1.91a3.33,3.33,0,0,1,5.86,1.18l.62,2.33,2.27.81a3.33,3.33,0,0,1,1.78,4.78Z"/>\n    <circle class="cls-2" cx="76.25" cy="104.53" r="3.49" transform="translate(-52.25 119.63) rotate(-60.59)"/>\n    <path class="cls-3" d="M87.43,94.76a8.82,8.82,0,0,0,3.36,12A8.82,8.82,0,0,0,87.43,94.76Z"/>\n    <polygon class="cls-1" points="55.7 106.75 59.31 108.82 63.06 107.02 62.21 111.09 65.09 114.11 60.95 114.56 58.97 118.22 57.26 114.42 53.16 113.67 56.25 110.88 55.7 106.75"/>\n    <path class="cls-1" d="M66.95,116.87a3.33,3.33,0,0,1-1.5.55l-2.4.26L61.9,119.8a3.33,3.33,0,0,1-6-.22l-1-2.2L52.56,117a3.33,3.33,0,0,1-1.64-5.75l1.79-1.62-.32-2.39a3.33,3.33,0,0,1,5-3.33l2.09,1.2,2.18-1a3.33,3.33,0,0,1,4.7,3.69l-.49,2.36,1.67,1.75a3.33,3.33,0,0,1-.55,5.07Z"/>\n    <circle class="cls-2" cx="59.1" cy="112.07" r="3.49" transform="translate(-52.47 52.03) rotate(-33.91)"/>\n    <path class="cls-3" d="M71.87,108.89a8.82,8.82,0,0,0-2.4,12.25A8.82,8.82,0,0,0,71.87,108.89Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="flower--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.53 82.66">\n    <polygon class="cls-1" points="6.67 65.48 13.28 60.42 12.87 52.1 19.72 56.83 27.51 53.87 25.13 61.85 30.36 68.33 22.03 68.54 17.48 75.52 14.71 67.66 6.67 65.48"/>\n    <path class="cls-1" d="M34,52.58a6.66,6.66,0,0,1-.15,3.19l-1.38,4.63,3,3.76a6.67,6.67,0,0,1-5,10.85l-4.82.12-2.64,4a6.67,6.67,0,0,1-11.87-1.43l-1.6-4.55L4.93,71.92A6.67,6.67,0,0,1,2.62,60.19l3.83-2.93-.24-4.82a6.67,6.67,0,0,1,10.44-5.82l4,2.74,4.51-1.72A6.67,6.67,0,0,1,34,52.58Z"/>\n    <circle class="cls-2" cx="19.13" cy="63.33" r="6.97" transform="translate(-11.87 4.89) rotate(-11.14)"/>\n    <path class="cls-3" d="M16.91,20A17.64,17.64,0,0,0,37.64,34,17.64,17.64,0,0,0,16.91,20Z"/>\n    <polygon class="cls-1" points="104.66 26.03 111.05 20.69 110.28 12.39 117.33 16.82 124.98 13.53 122.95 21.61 128.45 27.86 120.14 28.42 115.89 35.59 112.78 27.86 104.66 26.03"/>\n    <path class="cls-1" d="M131.46,12a6.66,6.66,0,0,1,0,3.19l-1.18,4.68,3.19,3.62a6.67,6.67,0,0,1-4.56,11.05l-4.82.33L121.62,39a6.67,6.67,0,0,1-11.92-.92l-1.8-4.48-4.71-1.06a6.67,6.67,0,0,1-2.81-11.62l3.7-3.09L103.64,13a6.67,6.67,0,0,1,10.18-6.26l4.09,2.57,4.43-1.91A6.67,6.67,0,0,1,131.46,12Z"/>\n    <circle class="cls-2" cx="117.01" cy="23.34" r="6.97" transform="translate(-2.21 28.16) rotate(-13.59)"/>\n    <path class="cls-3" d="M86.88,6.58a17.64,17.64,0,0,0,21.31,13A17.64,17.64,0,0,0,86.88,6.58Z"/>\n    <polygon class="cls-1" points="140.59 40.12 146.99 34.78 146.22 26.49 153.27 30.92 160.92 27.62 158.88 35.7 164.38 41.96 156.07 42.52 151.82 49.68 148.72 41.95 140.59 40.12"/>\n    <path class="cls-1" d="M167.4,26.06a6.66,6.66,0,0,1,0,3.19l-1.18,4.68,3.19,3.62a6.67,6.67,0,0,1-4.56,11.05l-4.82.33-2.46,4.15a6.67,6.67,0,0,1-11.92-.92l-1.8-4.48-4.71-1.06A6.67,6.67,0,0,1,136.32,35l3.7-3.09-.45-4.81a6.67,6.67,0,0,1,10.18-6.26l4.09,2.57,4.43-1.91a6.67,6.67,0,0,1,9.12,4.55Z"/>\n    <circle class="cls-2" cx="152.95" cy="37.43" r="6.97" transform="translate(-4.51 37) rotate(-13.59)"/>\n    <path class="cls-3" d="M136.81,24.85A17.64,17.64,0,0,0,139.26,0,17.64,17.64,0,0,0,136.81,24.85Z"/>\n    <polygon class="cls-1" points="167.08 66.44 173.47 61.1 172.7 52.8 179.75 57.23 187.4 53.94 185.37 62.01 190.87 68.27 182.56 68.83 178.31 76 175.21 68.27 167.08 66.44"/>\n    <path class="cls-1" d="M193.88,52.37a6.66,6.66,0,0,1,0,3.19l-1.18,4.68,3.19,3.62a6.67,6.67,0,0,1-4.56,11.05l-4.82.33L184,79.4a6.67,6.67,0,0,1-11.92-.92L170.32,74l-4.71-1.06a6.67,6.67,0,0,1-2.81-11.62l3.7-3.09-.45-4.81a6.67,6.67,0,0,1,10.18-6.26l4.09,2.57,4.43-1.91a6.67,6.67,0,0,1,9.12,4.55Z"/>\n    <circle class="cls-2" cx="179.43" cy="63.75" r="6.97" transform="translate(-9.96 43.96) rotate(-13.59)"/>\n    <path class="cls-3" d="M169.32,29.77a17.64,17.64,0,0,0,21.31,13A17.64,17.64,0,0,0,169.32,29.77Z"/>\n    <polygon class="cls-1" points="55.9 41.2 47.58 40.75 42.49 47.34 40.36 39.29 32.51 36.48 39.51 31.96 39.75 23.64 46.21 28.89 54.21 26.55 51.2 34.32 55.9 41.2"/>\n    <path class="cls-1" d="M26.7,33.21a6.66,6.66,0,0,1,2.19-2.33l4.05-2.62.14-4.82a6.67,6.67,0,0,1,10.87-5l3.74,3,4.63-1.36A6.67,6.67,0,0,1,60.43,29l-1.74,4.5,2.72,4a6.67,6.67,0,0,1-5.87,10.41l-4.82-.26-2.95,3.82A6.67,6.67,0,0,1,36,49l-1.24-4.67-4.54-1.63a6.67,6.67,0,0,1-3.56-9.55Z"/>\n    <circle class="cls-2" cx="45.03" cy="34.74" r="6.97" transform="translate(-7.35 56.91) rotate(-60.59)"/>\n    <path class="cls-3" d="M22.68,54.28a17.64,17.64,0,0,0-6.71-24A17.64,17.64,0,0,0,22.68,54.28Z"/>\n    <polygon class="cls-1" points="86.14 30.31 78.91 26.17 71.4 29.77 73.11 21.62 67.36 15.59 75.64 14.7 79.6 7.36 83.01 14.96 91.21 16.46 85.03 22.06 86.14 30.31"/>\n    <path class="cls-1" d="M63.64,10.06a6.66,6.66,0,0,1,3-1.09l4.8-.52L73.74,4.2a6.67,6.67,0,0,1,11.95.44l2,4.4,4.75.87a6.67,6.67,0,0,1,3.28,11.5l-3.58,3.24.64,4.78a6.67,6.67,0,0,1-9.92,6.67l-4.19-2.4-4.35,2.09a6.67,6.67,0,0,1-9.41-7.38l1-4.72-3.33-3.49a6.67,6.67,0,0,1,1.11-10.13Z"/>\n    <circle class="cls-2" cx="79.33" cy="19.66" r="6.97" transform="translate(2.52 47.59) rotate(-33.91)"/>\n    <path class="cls-3" d="M53.79,26a17.64,17.64,0,0,0,4.8-24.5A17.64,17.64,0,0,0,53.79,26Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="flower--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.9 52.72">\n    <polygon class="cls-1" points="4.36 41.8 8.68 38.5 8.41 33.06 12.89 36.15 17.98 34.21 16.43 39.43 19.84 43.67 14.4 43.8 11.42 48.36 9.61 43.23 4.36 41.8"/>\n    <path class="cls-1" d="M22.26,33.37a4.35,4.35,0,0,1-.1,2.09l-.9,3,2,2.46A4.36,4.36,0,0,1,19.95,48l-3.15.08-1.72,2.64a4.36,4.36,0,0,1-7.76-.93l-1-3-3-.82a4.36,4.36,0,0,1-1.51-7.67l2.51-1.92-.16-3.15a4.36,4.36,0,0,1,6.83-3.8l2.6,1.79,2.95-1.12a4.36,4.36,0,0,1,5.83,3.23Z"/>\n    <circle class="cls-2" cx="12.5" cy="40.39" r="4.56" transform="translate(-7.57 3.18) rotate(-11.14)"/>\n    <path class="cls-3" d="M11,12.1A11.53,11.53,0,0,0,24.6,21.19,11.53,11.53,0,0,0,11,12.1Z"/>\n    <polygon class="cls-1" points="36.54 25.93 31.1 25.63 27.77 29.94 26.38 24.68 21.25 22.85 25.82 19.89 25.98 14.45 30.21 17.89 35.43 16.36 33.47 21.44 36.54 25.93"/>\n    <path class="cls-1" d="M17.45,20.71a4.35,4.35,0,0,1,1.43-1.52l2.65-1.71.09-3.15a4.36,4.36,0,0,1,7.11-3.25l2.45,2,3-.89a4.36,4.36,0,0,1,5.29,5.75l-1.14,2.94,1.78,2.61a4.36,4.36,0,0,1-3.84,6.81l-3.15-.17-1.93,2.5a4.36,4.36,0,0,1-7.66-1.55l-.81-3-3-1.06a4.36,4.36,0,0,1-2.33-6.24Z"/>\n    <circle class="cls-2" cx="29.43" cy="21.71" r="4.56" transform="translate(-3.93 36.69) rotate(-60.59)"/>\n    <path class="cls-3" d="M14.82,34.48a11.53,11.53,0,0,0-4.39-15.72A11.53,11.53,0,0,0,14.82,34.48Z"/>\n    <path class="cls-3" d="M35.16,16A11.53,11.53,0,0,0,38.3,0,11.53,11.53,0,0,0,35.16,16Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="flower--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.52 106.2">\n    <polygon class="cls-1" points="23.56 42.8 27.88 39.49 27.61 34.06 32.09 37.15 37.18 35.21 35.62 40.43 39.04 44.66 33.6 44.8 30.62 49.36 28.81 44.22 23.56 42.8"/>\n    <path class="cls-1" d="M41.45,34.37a4.35,4.35,0,0,1-.1,2.09l-.9,3,2,2.46A4.36,4.36,0,0,1,39.15,49L36,49.1l-1.72,2.64a4.36,4.36,0,0,1-7.76-.93l-1-3-3-.82a4.36,4.36,0,0,1-1.51-7.67l2.51-1.92-.16-3.15a4.36,4.36,0,0,1,6.83-3.8l2.6,1.79,2.95-1.12a4.36,4.36,0,0,1,5.83,3.23Z"/>\n    <circle class="cls-2" cx="31.7" cy="41.39" r="4.56" transform="translate(-7.4 6.9) rotate(-11.14)"/>\n    <path class="cls-3" d="M30.25,13.1A11.53,11.53,0,0,0,43.8,22.19,11.53,11.53,0,0,0,30.25,13.1Z"/>\n    <polygon class="cls-1" points="87.6 17.01 91.78 13.52 91.28 8.1 95.89 11 100.89 8.84 99.56 14.12 103.15 18.21 97.72 18.58 94.94 23.26 92.92 18.21 87.6 17.01"/>\n    <path class="cls-1" d="M105.12,7.82a4.35,4.35,0,0,1,0,2.09L104.34,13l2.08,2.37a4.36,4.36,0,0,1-3,7.22l-3.15.21-1.61,2.71a4.36,4.36,0,0,1-7.79-.6L89.73,22l-3.08-.69a4.36,4.36,0,0,1-1.84-7.6l2.42-2-.29-3.14A4.36,4.36,0,0,1,93.6,4.41l2.67,1.68,2.9-1.25a4.36,4.36,0,0,1,6,3Z"/>\n    <circle class="cls-2" cx="95.68" cy="15.25" r="4.56" transform="translate(-0.9 22.92) rotate(-13.59)"/>\n    <path class="cls-3" d="M76,4.3a11.53,11.53,0,0,0,13.93,8.5A11.53,11.53,0,0,0,76,4.3Z"/>\n    <polygon class="cls-1" points="111.09 26.23 115.27 22.73 114.77 17.31 119.38 20.21 124.38 18.05 123.05 23.33 126.64 27.42 121.21 27.79 118.43 32.47 116.41 27.42 111.09 26.23"/>\n    <path class="cls-1" d="M128.61,17a4.35,4.35,0,0,1,0,2.09l-.77,3.06,2.08,2.37a4.36,4.36,0,0,1-3,7.22l-3.15.21-1.61,2.71a4.36,4.36,0,0,1-7.79-.6l-1.17-2.93-3.08-.69a4.36,4.36,0,0,1-1.84-7.6l2.42-2-.29-3.14a4.36,4.36,0,0,1,6.66-4.09l2.67,1.68,2.9-1.25a4.36,4.36,0,0,1,6,3Z"/>\n    <circle class="cls-2" cx="119.17" cy="24.47" r="4.56" transform="translate(-2.41 28.7) rotate(-13.59)"/>\n    <path class="cls-3" d="M108.62,16.24A11.53,11.53,0,0,0,110.22,0,11.53,11.53,0,0,0,108.62,16.24Z"/>\n    <polygon class="cls-1" points="128.4 43.42 132.58 39.93 132.08 34.51 136.69 37.41 141.69 35.25 140.36 40.53 143.95 44.62 138.52 44.99 135.74 49.67 133.72 44.62 128.4 43.42"/>\n    <path class="cls-1" d="M145.92,34.23a4.35,4.35,0,0,1,0,2.09l-.77,3.06,2.08,2.37a4.36,4.36,0,0,1-3,7.22l-3.15.21-1.61,2.71a4.36,4.36,0,0,1-7.79-.6l-1.17-2.93-3.08-.69a4.36,4.36,0,0,1-1.84-7.6l2.42-2-.29-3.14a4.36,4.36,0,0,1,6.66-4.09l2.67,1.68,2.9-1.25a4.36,4.36,0,0,1,6,3Z"/>\n    <circle class="cls-2" cx="136.48" cy="41.67" r="4.56" transform="translate(-5.97 33.25) rotate(-13.59)"/>\n    <path class="cls-3" d="M129.87,19.46A11.53,11.53,0,0,0,143.8,28,11.53,11.53,0,0,0,129.87,19.46Z"/>\n    <polygon class="cls-1" points="55.74 26.93 50.3 26.63 46.97 30.94 45.58 25.68 40.45 23.85 45.02 20.89 45.18 15.45 49.41 18.89 54.63 17.36 52.67 22.43 55.74 26.93"/>\n    <path class="cls-1" d="M36.65,21.71a4.35,4.35,0,0,1,1.43-1.52l2.65-1.71.09-3.15a4.36,4.36,0,0,1,7.11-3.25l2.45,2,3-.89a4.36,4.36,0,0,1,5.29,5.75l-1.14,2.94,1.78,2.61a4.36,4.36,0,0,1-3.84,6.81l-3.15-.17-1.93,2.5a4.36,4.36,0,0,1-7.66-1.55L42,29l-3-1.06a4.36,4.36,0,0,1-2.33-6.24Z"/>\n    <circle class="cls-2" cx="48.63" cy="22.71" r="4.56" transform="translate(4.97 53.92) rotate(-60.59)"/>\n    <path class="cls-3" d="M34,35.48a11.53,11.53,0,0,0-4.39-15.72A11.53,11.53,0,0,0,34,35.48Z"/>\n    <polygon class="cls-1" points="75.5 19.81 70.78 17.11 65.87 19.46 66.98 14.13 63.23 10.19 68.64 9.61 71.23 4.81 73.46 9.78 78.81 10.76 74.78 14.42 75.5 19.81"/>\n    <path class="cls-1" d="M60.8,6.57a4.35,4.35,0,0,1,2-.72l3.14-.34,1.5-2.78A4.36,4.36,0,0,1,75.2,3l1.29,2.88,3.1.57A4.36,4.36,0,0,1,81.74,14L79.4,16.11l.42,3.13a4.36,4.36,0,0,1-6.49,4.36L70.6,22l-2.84,1.36a4.36,4.36,0,0,1-6.15-4.82l.65-3.09L60.07,13.2a4.36,4.36,0,0,1,.72-6.62Z"/>\n    <circle class="cls-2" cx="71.05" cy="12.85" r="4.56" transform="translate(4.91 41.82) rotate(-33.91)"/>\n    <path class="cls-3" d="M54.36,17A11.53,11.53,0,0,0,57.5,1,11.53,11.53,0,0,0,54.36,17Z"/>\n    <polygon class="cls-1" points="4.36 95.28 8.68 91.97 8.41 86.54 12.89 89.63 17.98 87.69 16.43 92.91 19.84 97.14 14.4 97.28 11.42 101.84 9.61 96.7 4.36 95.28"/>\n    <path class="cls-1" d="M22.26,86.85a4.35,4.35,0,0,1-.1,2.09l-.9,3,2,2.46a4.36,4.36,0,0,1-3.29,7.09l-3.15.08-1.72,2.64a4.36,4.36,0,0,1-7.76-.93l-1-3-3-.82a4.36,4.36,0,0,1-1.51-7.67L4.22,89.9l-.16-3.15a4.36,4.36,0,0,1,6.83-3.8l2.6,1.79,2.95-1.12a4.36,4.36,0,0,1,5.83,3.23Z"/>\n    <circle class="cls-2" cx="12.5" cy="93.87" r="4.56" transform="translate(-17.9 4.18) rotate(-11.14)"/>\n    <path class="cls-3" d="M14.82,88a11.53,11.53,0,0,0-4.39-15.72A11.53,11.53,0,0,0,14.82,88Z"/>\n    <polygon class="cls-1" points="151.33 77.92 154.12 82.6 159.56 82.95 155.97 87.05 157.31 92.32 152.31 90.18 147.7 93.09 148.19 87.67 144.01 84.19 149.32 82.98 151.33 77.92"/>\n    <path class="cls-1" d="M157.66,96.67a4.35,4.35,0,0,1-2.06-.34l-2.9-1.24L150,96.77a4.36,4.36,0,0,1-6.67-4.08l.29-3.14-2.43-2a4.36,4.36,0,0,1,1.82-7.6l3.08-.7,1.17-2.93a4.36,4.36,0,0,1,7.79-.62l1.62,2.71,3.15.2a4.36,4.36,0,0,1,3,7.22l-2.08,2.37.78,3.06a4.36,4.36,0,0,1-3.88,5.42Z"/>\n    <circle class="cls-2" cx="151.8" cy="86.17" r="4.56" transform="translate(-6.35 12.3) rotate(-4.55)"/>\n    <path class="cls-3" d="M157.41,89.16a11.53,11.53,0,0,0,16.12-2.55A11.53,11.53,0,0,0,157.41,89.16Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="flower--ghost" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.52 106.2">\n    <path class="cls-1" d="M51.76,80.58A43.72,43.72,0,0,0,1.31,116.37"/>\n    <polygon class="cls-2" points="67.99 83.03 59.87 85.46 57.26 93.52 52.45 86.55 43.98 86.56 49.12 79.83 46.49 71.77 54.48 74.58 61.33 69.59 61.13 78.06 67.99 83.03"/>\n    <path class="cls-2" d="M37.29,85.42a6.77,6.77,0,0,1,1.3-3l3-3.9L40,73.88a6.78,6.78,0,0,1,8.69-8.5L53.37,67l4-2.89a6.78,6.78,0,0,1,10.77,5.64L68,74.66l4,2.88a6.78,6.78,0,0,1-2,12l-4.7,1.4L63.71,95.6a6.78,6.78,0,0,1-12,1.77l-2.79-4H44a6.78,6.78,0,0,1-6.69-7.92Z"/>\n    <circle class="cls-3" cx="55.36" cy="80.59" r="7.09" transform="translate(-33.37 121.66) rotate(-80.35)"/>\n    <path class="cls-4" d="M34,109.39A18,18,0,0,0,19.26,88.68,18,18,0,0,0,34,109.39Z"/>\n    <polygon class="cls-2" points="13.32 42.8 17.65 39.49 17.38 34.06 21.86 37.15 26.95 35.21 25.39 40.43 28.81 44.66 23.36 44.8 20.39 49.36 18.58 44.22 13.32 42.8"/>\n    <path class="cls-2" d="M31.22,34.37a4.35,4.35,0,0,1-.1,2.09l-.9,3,2,2.46A4.36,4.36,0,0,1,28.92,49l-3.15.08L24,51.74a4.36,4.36,0,0,1-7.76-.93l-1-3-3-.82a4.36,4.36,0,0,1-1.51-7.67l2.51-1.92L13,34.27a4.36,4.36,0,0,1,6.83-3.8l2.6,1.79,2.95-1.12a4.36,4.36,0,0,1,5.83,3.23Z"/>\n    <circle class="cls-3" cx="21.47" cy="41.39" r="4.56" transform="translate(-7.59 4.93) rotate(-11.14)"/>\n    <path class="cls-4" d="M20,13.1a11.53,11.53,0,0,0,13.55,9.09A11.53,11.53,0,0,0,20,13.1Z"/>\n    <polygon class="cls-2" points="77.37 17.01 81.55 13.52 81.05 8.1 85.66 11 90.66 8.84 89.33 14.12 92.92 18.21 87.49 18.58 84.71 23.26 82.68 18.21 77.37 17.01"/>\n    <path class="cls-2" d="M94.89,7.82a4.35,4.35,0,0,1,0,2.09L94.11,13l2.08,2.37a4.36,4.36,0,0,1-3,7.22l-3.15.21-1.61,2.71a4.36,4.36,0,0,1-7.79-.6L79.49,22l-3.08-.69a4.36,4.36,0,0,1-1.84-7.6l2.42-2-.29-3.14a4.36,4.36,0,0,1,6.66-4.09L86,6.09l2.9-1.25a4.36,4.36,0,0,1,6,3Z"/>\n    <circle class="cls-3" cx="85.45" cy="15.25" r="4.56" transform="translate(-1.19 20.51) rotate(-13.59)"/>\n    <path class="cls-4" d="M65.75,4.3a11.53,11.53,0,0,0,13.93,8.5A11.53,11.53,0,0,0,65.75,4.3Z"/>\n    <polygon class="cls-2" points="100.86 26.23 105.04 22.73 104.53 17.31 109.14 20.21 114.14 18.05 112.81 23.33 116.41 27.42 110.98 27.79 108.2 32.47 106.17 27.42 100.86 26.23"/>\n    <path class="cls-2" d="M118.38,17a4.35,4.35,0,0,1,0,2.09l-.77,3.06,2.08,2.37a4.36,4.36,0,0,1-3,7.22l-3.15.21-1.61,2.71a4.36,4.36,0,0,1-7.79-.6L103,31.17l-3.08-.69a4.36,4.36,0,0,1-1.84-7.6l2.42-2-.29-3.14a4.36,4.36,0,0,1,6.66-4.09l2.67,1.68,2.9-1.25a4.36,4.36,0,0,1,6,3Z"/>\n    <circle class="cls-3" cx="108.94" cy="24.47" r="4.56" transform="translate(-2.7 26.29) rotate(-13.59)"/>\n    <path class="cls-4" d="M98.39,16.24A11.53,11.53,0,0,0,100,0,11.53,11.53,0,0,0,98.39,16.24Z"/>\n    <polygon class="cls-2" points="118.17 43.42 122.35 39.93 121.84 34.51 126.45 37.41 131.46 35.25 130.13 40.53 133.72 44.62 128.29 44.99 125.51 49.67 123.48 44.62 118.17 43.42"/>\n    <path class="cls-2" d="M135.69,34.23a4.35,4.35,0,0,1,0,2.09l-.77,3.06L137,41.75A4.36,4.36,0,0,1,134,49l-3.15.21-1.61,2.71a4.36,4.36,0,0,1-7.79-.6l-1.17-2.93-3.08-.69a4.36,4.36,0,0,1-1.84-7.6l2.42-2-.29-3.14a4.36,4.36,0,0,1,6.66-4.09l2.67,1.68,2.9-1.25a4.36,4.36,0,0,1,6,3Z"/>\n    <circle class="cls-3" cx="126.25" cy="41.67" r="4.56" transform="translate(-6.26 30.84) rotate(-13.59)"/>\n    <path class="cls-4" d="M119.64,19.46A11.53,11.53,0,0,0,133.57,28,11.53,11.53,0,0,0,119.64,19.46Z"/>\n    <polygon class="cls-2" points="45.51 26.93 40.07 26.63 36.74 30.94 35.34 25.68 30.22 23.85 34.79 20.89 34.95 15.45 39.17 18.89 44.4 17.36 42.43 22.43 45.51 26.93"/>\n    <path class="cls-2" d="M26.42,21.71a4.35,4.35,0,0,1,1.43-1.52l2.65-1.71.09-3.15a4.36,4.36,0,0,1,7.11-3.25l2.45,2,3-.89a4.36,4.36,0,0,1,5.29,5.75l-1.14,2.94,1.78,2.61a4.36,4.36,0,0,1-3.84,6.81l-3.15-.17-1.93,2.5a4.36,4.36,0,0,1-7.66-1.55l-.81-3-3-1.06a4.36,4.36,0,0,1-2.33-6.24Z"/>\n    <circle class="cls-3" cx="38.4" cy="22.71" r="4.56" transform="translate(-0.24 45.01) rotate(-60.59)"/>\n    <path class="cls-4" d="M23.79,35.48A11.53,11.53,0,0,0,19.4,19.76,11.53,11.53,0,0,0,23.79,35.48Z"/>\n    <polygon class="cls-2" points="65.27 19.81 60.55 17.11 55.64 19.46 56.75 14.13 52.99 10.19 58.41 9.61 60.99 4.81 63.22 9.78 68.58 10.76 64.55 14.42 65.27 19.81"/>\n    <path class="cls-2" d="M50.56,6.57a4.35,4.35,0,0,1,2-.72l3.14-.34,1.5-2.78A4.36,4.36,0,0,1,65,3l1.29,2.88,3.1.57A4.36,4.36,0,0,1,71.51,14l-2.34,2.12.42,3.13a4.36,4.36,0,0,1-6.49,4.36L60.37,22l-2.84,1.36a4.36,4.36,0,0,1-6.15-4.82L52,15.48,49.84,13.2a4.36,4.36,0,0,1,.72-6.62Z"/>\n    <circle class="cls-3" cx="60.82" cy="12.85" r="4.56" transform="translate(3.17 36.11) rotate(-33.91)"/>\n    <path class="cls-4" d="M44.12,17A11.53,11.53,0,0,0,47.27,1,11.53,11.53,0,0,0,44.12,17Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="flower--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.73 86.28">\n    <polygon class="cls-1" points="154.21 43.37 147.99 46.33 146.9 53.14 142.16 48.14 135.35 49.21 138.64 43.15 135.51 37.01 142.29 38.27 147.17 33.39 148.07 40.23 154.21 43.37"/>\n    <path class="cls-1" d="M129.83,49.14a5.51,5.51,0,0,1,.67-2.56l1.91-3.51-1.81-3.56a5.52,5.52,0,0,1,5.92-7.93l3.93.73,2.83-2.82a5.52,5.52,0,0,1,9.37,3.19l.52,4,3.56,1.82a5.52,5.52,0,0,1-.13,9.89L153,50.06,152.35,54a5.52,5.52,0,0,1-9.45,2.93L140.15,54l-3.95.62a5.52,5.52,0,0,1-6.38-5.53Z"/>\n    <circle class="cls-2" cx="143.75" cy="42.98" r="5.77" transform="translate(98.82 186.14) rotate(-89.22)"/>\n    <path class="cls-3" d="M138.15,78.42a14.6,14.6,0,0,0-14.41-14.81A14.6,14.6,0,0,0,138.15,78.42Z"/>\n    <polygon class="cls-1" points="68.11 58.57 62.02 61.8 61.23 68.65 56.28 63.86 49.52 65.22 52.55 59.03 49.16 53.02 55.99 53.99 60.65 48.91 61.84 55.7 68.11 58.57"/>\n    <path class="cls-1" d="M44,65.38a5.51,5.51,0,0,1,.56-2.58l1.75-3.59-2-3.48a5.52,5.52,0,0,1,5.58-8.17l4,.56,2.7-2.94A5.52,5.52,0,0,1,66.09,48l.69,3.93,3.63,1.66a5.52,5.52,0,0,1,.29,9.89l-3.53,1.87-.46,4a5.52,5.52,0,0,1-9.32,3.33l-2.87-2.78-3.92.79A5.52,5.52,0,0,1,44,65.38Z"/>\n    <circle class="cls-2" cx="57.65" cy="58.64" r="5.77" transform="translate(-1.69 1.71) rotate(-1.68)"/>\n    <path class="cls-3" d="M79.19,77.36a14.6,14.6,0,0,0-15-14.18A14.6,14.6,0,0,0,79.19,77.36Z"/>\n    <polygon class="cls-1" points="41.42 41.01 35.33 44.24 34.54 51.09 29.58 46.3 22.82 47.66 25.85 41.47 22.47 35.46 29.29 36.43 33.96 31.35 35.15 38.14 41.42 41.01"/>\n    <path class="cls-1" d="M17.31,47.82a5.51,5.51,0,0,1,.56-2.58l1.75-3.59-2-3.48A5.52,5.52,0,0,1,23.24,30l4,.56,2.7-2.94a5.52,5.52,0,0,1,9.5,2.78l.69,3.93L43.72,36A5.52,5.52,0,0,1,44,45.89l-3.53,1.87-.46,4a5.52,5.52,0,0,1-9.32,3.33l-2.87-2.78-3.92.79a5.52,5.52,0,0,1-6.61-5.25Z"/>\n    <circle class="cls-2" cx="30.95" cy="41.08" r="5.77" transform="translate(-1.19 0.92) rotate(-1.68)"/>\n    <path class="cls-3" d="M41.87,54a14.6,14.6,0,0,0-6.22,19.7A14.6,14.6,0,0,0,41.87,54Z"/>\n    <polygon class="cls-1" points="24.47 15.18 18.38 18.41 17.59 25.26 12.63 20.46 5.87 21.83 8.9 15.63 5.52 9.63 12.34 10.59 17.01 5.52 18.2 12.31 24.47 15.18"/>\n    <path class="cls-1" d="M.36,22A5.51,5.51,0,0,1,.92,19.4l1.75-3.59-2-3.48A5.52,5.52,0,0,1,6.29,4.16l4,.56,2.7-2.94a5.52,5.52,0,0,1,9.5,2.78l.69,3.93,3.63,1.66a5.52,5.52,0,0,1,.29,9.89l-3.53,1.87-.46,4a5.52,5.52,0,0,1-9.32,3.33l-2.87-2.78L7,27.24A5.52,5.52,0,0,1,.36,22Z"/>\n    <circle class="cls-2" cx="14" cy="15.24" r="5.77" transform="translate(-0.44 0.42) rotate(-1.68)"/>\n    <path class="cls-3" d="M16.39,44.49a14.6,14.6,0,0,0-15-14.18A14.6,14.6,0,0,0,16.39,44.49Z"/>\n    <polygon class="cls-1" points="110.19 54.61 116.85 56.41 122.1 51.94 122.45 58.82 128.32 62.43 121.89 64.9 120.27 71.6 115.93 66.24 109.06 66.77 112.82 60.99 110.19 54.61"/>\n    <path class="cls-1" d="M132.47,66.08a5.51,5.51,0,0,1-2.17,1.51L126.57,69l-.94,3.88A5.52,5.52,0,0,1,116,75.07L113.46,72l-4,.31a5.52,5.52,0,0,1-5-8.51l2.18-3.35-1.52-3.69a5.52,5.52,0,0,1,6.53-7.43l3.86,1,3-2.59a5.52,5.52,0,0,1,9.09,3.92l.21,4,3.4,2.09a5.52,5.52,0,0,1,1.25,8.34Z"/>\n    <circle class="cls-2" cx="117.89" cy="61.7" r="5.77" transform="translate(-6.3 109.49) rotate(-48.67)"/>\n    <path class="cls-3" d="M139.33,49.7a14.6,14.6,0,0,0,1.32,20.62A14.6,14.6,0,0,0,139.33,49.7Z"/>\n    <polygon class="cls-1" points="83.84 58.27 88.98 62.86 95.68 61.22 92.91 67.53 96.53 73.4 89.67 72.71 85.21 77.97 83.75 71.23 77.37 68.61 83.33 65.14 83.84 58.27"/>\n    <path class="cls-1" d="M98.6,78.51a5.51,5.51,0,0,1-2.62.37l-4-.4-2.58,3a5.52,5.52,0,0,1-9.6-2.4L79,75.23l-3.7-1.51a5.52,5.52,0,0,1-.69-9.87l3.45-2,.3-4a5.52,5.52,0,0,1,9.18-3.7l3,2.66,3.88-.95a5.52,5.52,0,0,1,6.36,7.58L99.13,67.1l2.1,3.4a5.52,5.52,0,0,1-2.63,8Z"/>\n    <circle class="cls-2" cx="87.54" cy="68.06" r="5.77" transform="translate(-19.11 37.72) rotate(-21.99)"/>\n    <path class="cls-3" d="M109.31,67.26a14.6,14.6,0,0,0-8.08,19A14.6,14.6,0,0,0,109.31,67.26Z"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="flower--bed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.16 34.81">\n    <path class="cls-1" d="M14.06,23.67A26.58,26.58,0,0,0,43.35.09"/>\n    <polygon class="cls-2" points="4.12 22.78 8.96 21.01 10.24 16.02 13.42 20.08 18.56 19.75 15.69 24.03 17.59 28.82 12.63 27.41 8.66 30.69 8.47 25.55 4.12 22.78"/>\n    <path class="cls-2" d="M22.66,20.2A4.12,4.12,0,0,1,22,22.05l-1.66,2.48,1.1,2.78a4.12,4.12,0,0,1-5,5.48L13.59,32l-2.3,1.9a4.12,4.12,0,0,1-6.75-3l-.11-3-2.52-1.6a4.12,4.12,0,0,1,.79-7.35l2.8-1L6.25,15a4.12,4.12,0,0,1,7.24-1.52l1.84,2.35,3-.19a4.12,4.12,0,0,1,4.36,4.56Z"/>\n    <circle class="cls-3" cx="11.88" cy="23.8" r="4.31" transform="translate(-13.06 33.05) rotate(-83.84)"/>\n    <path class="cls-4" d="M23.8,5.53a10.91,10.91,0,0,0,9.68,12A10.91,10.91,0,0,0,23.8,5.53Z"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/flower/flower.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], FlowerComponent);
    return FlowerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=flower.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BubbleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var BubbleComponent = /** @class */ (function (_super) {
    __extends(BubbleComponent, _super);
    function BubbleComponent(element) {
        return _super.call(this, 'bubble', element.nativeElement) || this;
    }
    BubbleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bubble',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/bubble/bubble.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg class="bubble" width="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.21 104.36">\n    <path class="cls-1" d="M116.71,80.5C127,72.06,133.29,61,133.29,48.8,133.29,22.36,103.66.92,67.1.92S.92,22.36.92,48.8,30.55,96.69,67.1,96.69a85.85,85.85,0,0,0,33.58-6.62l22.24,12.41Z"/>\n    <circle cx="25.45" cy="47.37" r="6.45"/>\n    <rect x="29.67" y="19.04" width="2.22" height="28.32"/>\n    <circle cx="45.33" cy="47.37" r="6.45"/>\n    <rect x="49.55" y="19.04" width="2.22" height="28.32"/>\n    <rect x="29.67" y="19.04" width="21.64" height="3.68"/>\n    <circle cx="82.58" cy="51.98" r="6.45"/>\n    <rect x="86.81" y="51.98" width="2.22" height="27.45"/>\n    <circle cx="102.47" cy="51.98" r="6.45"/>\n    <rect x="106.69" y="51.98" width="2.22" height="27.45"/>\n    <rect x="86.81" y="75.19" width="21.64" height="4.25"/>\n    <circle cx="59.67" cy="66.63" r="6.45"/>\n    <rect x="63.89" y="38.3" width="2.22" height="28.32"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="bubble--skeleton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.36 193.66">\n    <path class="cls-1" d="M59.27,40.9c5.24-4.29,8.42-9.92,8.42-16.09C67.69,11.38,52.65.5,34.09.5S.5,11.38.5,24.81s15,24.31,33.59,24.31a43.57,43.57,0,0,0,17-3.36l11.29,6.3Z"/>\n    <circle cx="12.95" cy="24.08" r="3.27"/>\n    <rect x="15.09" y="9.7" width="1.13" height="14.38"/>\n    <circle cx="23.04" cy="24.08" r="3.27"/>\n    <rect x="25.19" y="9.7" width="1.13" height="14.38"/>\n    <rect x="15.09" y="9.7" width="10.99" height="1.87"/>\n    <circle cx="41.95" cy="26.42" r="3.27"/>\n    <rect x="44.1" y="26.42" width="1.13" height="13.93"/>\n    <circle cx="52.04" cy="26.42" r="3.27"/>\n    <rect x="54.19" y="26.42" width="1.13" height="13.93"/>\n    <rect x="44.1" y="38.2" width="10.99" height="2.16"/>\n    <circle cx="30.32" cy="33.85" r="3.27"/>\n    <rect x="32.46" y="19.48" width="1.13" height="14.38"/>\n    <path class="cls-2" d="M159.09,152.77c-5.24,4.29-8.42,9.92-8.42,16.09,0,13.42,15,24.31,33.59,24.31s33.59-10.88,33.59-24.31-15-24.31-33.59-24.31a43.57,43.57,0,0,0-17,3.36l-11.29-6.3Z"/>\n    <circle cx="163.01" cy="167.35" r="3.27"/>\n    <rect x="165.15" y="152.97" width="1.13" height="14.38"/>\n    <circle cx="173.1" cy="167.35" r="3.27"/>\n    <rect x="175.25" y="152.97" width="1.13" height="14.38"/>\n    <rect x="165.15" y="152.97" width="10.99" height="1.87"/>\n    <circle cx="192.01" cy="169.69" r="3.27"/>\n    <rect x="194.16" y="169.69" width="1.13" height="13.93"/>\n    <circle cx="202.1" cy="169.69" r="3.27"/>\n    <rect x="204.25" y="169.69" width="1.13" height="13.93"/>\n    <rect x="194.16" y="181.47" width="10.99" height="2.16"/>\n    <circle cx="180.38" cy="177.12" r="3.27"/>\n    <rect x="182.52" y="162.75" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="bubble" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.19 53.08">\n    <path class="cls-1" d="M59.27,12.18c5.24,4.29,8.42,9.92,8.42,16.09,0,13.42-15,24.31-33.59,24.31S.5,41.7.5,28.27,15.54,4,34.09,4a43.57,43.57,0,0,1,17,3.36L62.43,1Z"/>\n    <circle cx="12.84" cy="26.77" r="3.27"/>\n    <rect x="14.98" y="12.39" width="1.13" height="14.38"/>\n    <circle cx="22.93" cy="26.77" r="3.27"/>\n    <rect x="25.07" y="12.39" width="1.13" height="14.38"/>\n    <rect x="14.98" y="12.39" width="10.99" height="1.87"/>\n    <circle cx="41.84" cy="29.11" r="3.27"/>\n    <rect x="43.98" y="29.11" width="1.13" height="13.93"/>\n    <circle cx="51.93" cy="29.11" r="3.27"/>\n    <rect x="54.07" y="29.11" width="1.13" height="13.93"/>\n    <rect x="43.98" y="40.89" width="10.99" height="2.16"/>\n    <circle cx="30.21" cy="36.54" r="3.27"/>\n    <rect x="32.35" y="22.16" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="bubble" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.19 53.08">\n    <path class="cls-1" d="M59.27,12.18c5.24,4.29,8.42,9.92,8.42,16.09,0,13.42-15,24.31-33.59,24.31S.5,41.7.5,28.27,15.54,4,34.09,4a43.57,43.57,0,0,1,17,3.36L62.43,1Z"/>\n    <circle cx="12.84" cy="26.77" r="3.27"/>\n    <rect x="14.98" y="12.39" width="1.13" height="14.38"/>\n    <circle cx="22.93" cy="26.77" r="3.27"/>\n    <rect x="25.07" y="12.39" width="1.13" height="14.38"/>\n    <rect x="14.98" y="12.39" width="10.99" height="1.87"/>\n    <circle cx="41.84" cy="29.11" r="3.27"/>\n    <rect x="43.98" y="29.11" width="1.13" height="13.93"/>\n    <circle cx="51.93" cy="29.11" r="3.27"/>\n    <rect x="54.07" y="29.11" width="1.13" height="13.93"/>\n    <rect x="43.98" y="40.89" width="10.99" height="2.16"/>\n    <circle cx="30.21" cy="36.54" r="3.27"/>\n    <rect x="32.35" y="22.16" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="bubble--mummy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.49 65.65">\n    <path class="cls-1" d="M118.22,24.75C113,29,109.8,34.67,109.8,40.84c0,13.42,15,24.31,33.59,24.31S177,54.26,177,40.84s-15-24.31-33.59-24.31a43.57,43.57,0,0,0-17,3.36l-11.29-6.3Z"/>\n    <circle cx="122.14" cy="39.33" r="3.27"/>\n    <rect x="124.28" y="24.96" width="1.13" height="14.38"/>\n    <circle cx="132.23" cy="39.33" r="3.27"/>\n    <rect x="134.37" y="24.96" width="1.13" height="14.38"/>\n    <rect x="124.28" y="24.96" width="10.99" height="1.87"/>\n    <circle cx="151.14" cy="41.68" r="3.27"/>\n    <rect x="153.28" y="41.68" width="1.13" height="13.93"/>\n    <circle cx="161.23" cy="41.68" r="3.27"/>\n    <rect x="163.37" y="41.68" width="1.13" height="13.93"/>\n    <rect x="153.28" y="53.46" width="10.99" height="2.16"/>\n    <circle cx="139.51" cy="49.11" r="3.27"/>\n    <rect x="141.65" y="34.73" width="1.13" height="14.38"/>\n    <path class="cls-2" d="M59.27,12.18c5.24,4.29,8.42,9.92,8.42,16.09,0,13.42-15,24.31-33.59,24.31S.5,41.7.5,28.27,15.54,4,34.09,4a43.57,43.57,0,0,1,17,3.36L62.43,1Z"/>\n    <circle cx="12.84" cy="26.77" r="3.27"/>\n    <rect x="14.98" y="12.39" width="1.13" height="14.38"/>\n    <circle cx="22.93" cy="26.77" r="3.27"/>\n    <rect x="25.07" y="12.39" width="1.13" height="14.38"/>\n    <rect x="14.98" y="12.39" width="10.99" height="1.87"/>\n    <circle cx="41.84" cy="29.11" r="3.27"/>\n    <rect x="43.98" y="29.11" width="1.13" height="13.93"/>\n    <circle cx="51.93" cy="29.11" r="3.27"/>\n    <rect x="54.07" y="29.11" width="1.13" height="13.93"/>\n    <rect x="43.98" y="40.89" width="10.99" height="2.16"/>\n    <circle cx="30.21" cy="36.54" r="3.27"/>\n    <rect x="32.35" y="22.16" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="bubble--yaga" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.7 178.23">\n    <path class="cls-1" d="M115.43,137.34c-5.24,4.29-8.42,9.92-8.42,16.09,0,13.42,15,24.31,33.59,24.31s33.59-10.88,33.59-24.31-15-24.31-33.59-24.31a43.57,43.57,0,0,0-17,3.36l-11.29-6.3Z"/>\n    <circle cx="119.35" cy="151.92" r="3.27"/>\n    <rect x="121.5" y="137.55" width="1.13" height="14.38"/>\n    <circle cx="129.44" cy="151.92" r="3.27"/>\n    <rect x="131.59" y="137.55" width="1.13" height="14.38"/>\n    <rect x="121.5" y="137.55" width="10.99" height="1.87"/>\n    <circle cx="148.35" cy="154.27" r="3.27"/>\n    <rect x="150.5" y="154.27" width="1.13" height="13.93"/>\n    <circle cx="158.44" cy="154.27" r="3.27"/>\n    <rect x="160.59" y="154.27" width="1.13" height="13.93"/>\n    <rect x="150.5" y="166.04" width="10.99" height="2.16"/>\n    <circle cx="136.72" cy="161.7" r="3.27"/>\n    <rect x="138.87" y="147.32" width="1.13" height="14.38"/>\n    <path class="cls-2" d="M59.27,40.9c5.24-4.29,8.42-9.92,8.42-16.09C67.69,11.38,52.65.5,34.09.5S.5,11.38.5,24.81s15,24.31,33.59,24.31a43.57,43.57,0,0,0,17-3.36l11.29,6.3Z"/>\n    <circle cx="13.74" cy="23.64" r="3.27"/>\n    <rect x="15.89" y="9.26" width="1.13" height="14.38"/>\n    <circle cx="23.84" cy="23.64" r="3.27"/>\n    <rect x="25.98" y="9.26" width="1.13" height="14.38"/>\n    <rect x="15.89" y="9.26" width="10.99" height="1.87"/>\n    <circle cx="42.75" cy="25.98" r="3.27"/>\n    <rect x="44.89" y="25.98" width="1.13" height="13.93"/>\n    <circle cx="52.84" cy="25.98" r="3.27"/>\n    <rect x="54.98" y="25.98" width="1.13" height="13.93"/>\n    <rect x="44.89" y="37.76" width="10.99" height="2.16"/>\n    <circle cx="31.11" cy="33.41" r="3.27"/>\n    <rect x="33.26" y="19.04" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="bubble--doctor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176.86 210.59">\n    <path class="cls-1" d="M117.59,137c-5.24-4.29-8.42-9.92-8.42-16.09,0-13.42,15-24.31,33.59-24.31s33.59,10.88,33.59,24.31-15,24.31-33.59,24.31a43.57,43.57,0,0,1-17-3.36l-11.29,6.3Z"/>\n    <circle cx="122.51" cy="119.32" r="3.27"/>\n    <rect x="124.65" y="104.95" width="1.13" height="14.38"/>\n    <circle cx="132.6" cy="119.32" r="3.27"/>\n    <rect x="134.74" y="104.95" width="1.13" height="14.38"/>\n    <rect x="124.65" y="104.95" width="10.99" height="1.87"/>\n    <circle cx="151.51" cy="121.67" r="3.27"/>\n    <rect x="153.65" y="121.67" width="1.13" height="13.93"/>\n    <circle cx="161.6" cy="121.67" r="3.27"/>\n    <rect x="163.75" y="121.67" width="1.13" height="13.93"/>\n    <rect x="153.65" y="133.44" width="10.99" height="2.16"/>\n    <circle cx="139.88" cy="129.1" r="3.27"/>\n    <rect x="142.02" y="114.72" width="1.13" height="14.38"/>\n    <path class="cls-2" d="M66,169.7c5.24,4.29,8.42,9.92,8.42,16.09,0,13.42-15,24.31-33.59,24.31S7.22,199.21,7.22,185.79s15-24.31,33.59-24.31a43.57,43.57,0,0,1,17,3.36l11.29-6.3Z"/>\n    <circle cx="19.55" cy="184.28" r="3.27"/>\n    <rect x="21.7" y="169.91" width="1.13" height="14.38"/>\n    <circle cx="29.64" cy="184.28" r="3.27"/>\n    <rect x="31.79" y="169.91" width="1.13" height="14.38"/>\n    <rect x="21.7" y="169.91" width="10.99" height="1.87"/>\n    <circle cx="48.55" cy="186.63" r="3.27"/>\n    <rect x="50.7" y="186.63" width="1.13" height="13.93"/>\n    <circle cx="58.65" cy="186.63" r="3.27"/>\n    <rect x="60.79" y="186.63" width="1.13" height="13.93"/>\n    <rect x="50.7" y="198.4" width="10.99" height="2.16"/>\n    <circle cx="36.92" cy="194.06" r="3.27"/>\n    <rect x="39.07" y="179.68" width="1.13" height="14.38"/>\n    <path class="cls-3" d="M59.27,40.9c5.24-4.29,8.42-9.92,8.42-16.09C67.69,11.38,52.65.5,34.09.5S.5,11.38.5,24.81s15,24.31,33.59,24.31a43.57,43.57,0,0,0,17-3.36l11.29,6.3Z"/>\n    <circle cx="13.74" cy="23.64" r="3.27"/>\n    <rect x="15.89" y="9.26" width="1.13" height="14.38"/>\n    <circle cx="23.84" cy="23.64" r="3.27"/>\n    <rect x="25.98" y="9.26" width="1.13" height="14.38"/>\n    <rect x="15.89" y="9.26" width="10.99" height="1.87"/>\n    <circle cx="42.75" cy="25.98" r="3.27"/>\n    <rect x="44.89" y="25.98" width="1.13" height="13.93"/>\n    <circle cx="52.84" cy="25.98" r="3.27"/>\n    <rect x="54.98" y="25.98" width="1.13" height="13.93"/>\n    <rect x="44.89" y="37.76" width="10.99" height="2.16"/>\n    <circle cx="31.11" cy="33.41" r="3.27"/>\n    <rect x="33.26" y="19.04" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="bubble--spider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151.09 144.57">\n    <path class="cls-1" d="M91.82,12.18c-5.24,4.29-8.42,9.92-8.42,16.09,0,13.42,15,24.31,33.59,24.31s33.59-10.88,33.59-24.31S135.55,4,117,4a43.57,43.57,0,0,0-17,3.36L88.67,1Z"/>\n    <circle cx="95.74" cy="26.77" r="3.27"/>\n    <rect x="97.89" y="12.39" width="1.13" height="14.38"/>\n    <circle cx="105.83" cy="26.77" r="3.27"/>\n    <rect x="107.98" y="12.39" width="1.13" height="14.38"/>\n    <rect x="97.89" y="12.39" width="10.99" height="1.87"/>\n    <circle cx="124.74" cy="29.11" r="3.27"/>\n    <rect x="126.89" y="29.11" width="1.13" height="13.93"/>\n    <circle cx="134.83" cy="29.11" r="3.27"/>\n    <rect x="136.98" y="29.11" width="1.13" height="13.93"/>\n    <rect x="126.89" y="40.89" width="10.99" height="2.16"/>\n    <circle cx="113.11" cy="36.54" r="3.27"/>\n    <rect x="115.25" y="22.16" width="1.13" height="14.38"/>\n    <path class="cls-2" d="M59.27,103.68c5.24,4.29,8.42,9.92,8.42,16.09,0,13.42-15,24.31-33.59,24.31S.5,133.19.5,119.77s15-24.31,33.59-24.31a43.57,43.57,0,0,1,17,3.36l11.29-6.3Z"/>\n    <circle cx="12.84" cy="118.26" r="3.27"/>\n    <rect x="14.98" y="103.89" width="1.13" height="14.38"/>\n    <circle cx="22.93" cy="118.26" r="3.27"/>\n    <rect x="25.07" y="103.89" width="1.13" height="14.38"/>\n    <rect x="14.98" y="103.89" width="10.99" height="1.87"/>\n    <circle cx="41.84" cy="120.6" r="3.27"/>\n    <rect x="43.98" y="120.6" width="1.13" height="13.93"/>\n    <circle cx="51.93" cy="120.6" r="3.27"/>\n    <rect x="54.07" y="120.6" width="1.13" height="13.93"/>\n    <rect x="43.98" y="132.38" width="10.99" height="2.16"/>\n    <circle cx="30.21" cy="128.04" r="3.27"/>\n    <rect x="32.35" y="113.66" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="bubble--vampire" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.1 174.5">\n    <path class="cls-1" d="M126.83,40.9c-5.24-4.29-8.42-9.92-8.42-16.09C118.41,11.38,133.45.5,152,.5S185.6,11.38,185.6,24.81s-15,24.31-33.59,24.31a43.57,43.57,0,0,1-17-3.36l-11.29,6.3Z"/>\n    <circle cx="131.75" cy="23.24" r="3.27"/>\n    <rect x="133.89" y="8.86" width="1.13" height="14.38"/>\n    <circle cx="141.84" cy="23.24" r="3.27"/>\n    <rect x="143.98" y="8.86" width="1.13" height="14.38"/>\n    <rect x="133.89" y="8.86" width="10.99" height="1.87"/>\n    <circle cx="160.75" cy="25.58" r="3.27"/>\n    <rect x="162.89" y="25.58" width="1.13" height="13.93"/>\n    <circle cx="170.84" cy="25.58" r="3.27"/>\n    <rect x="172.98" y="25.58" width="1.13" height="13.93"/>\n    <rect x="162.89" y="37.36" width="10.99" height="2.16"/>\n    <circle cx="149.12" cy="33.01" r="3.27"/>\n    <rect x="151.26" y="18.64" width="1.13" height="14.38"/>\n    <path class="cls-2" d="M59.27,133.6c5.24,4.29,8.42,9.92,8.42,16.09,0,13.42-15,24.31-33.59,24.31S.5,163.12.5,149.69s15-24.31,33.59-24.31a43.57,43.57,0,0,1,17,3.36l11.29-6.3Z"/>\n    <circle cx="12.84" cy="148.19" r="3.27"/>\n    <rect x="14.98" y="133.81" width="1.13" height="14.38"/>\n    <circle cx="22.93" cy="148.19" r="3.27"/>\n    <rect x="25.07" y="133.81" width="1.13" height="14.38"/>\n    <rect x="14.98" y="133.81" width="10.99" height="1.87"/>\n    <circle cx="41.84" cy="150.53" r="3.27"/>\n    <rect x="43.98" y="150.53" width="1.13" height="13.93"/>\n    <circle cx="51.93" cy="150.53" r="3.27"/>\n    <rect x="54.07" y="150.53" width="1.13" height="13.93"/>\n    <rect x="43.98" y="162.31" width="10.99" height="2.16"/>\n    <circle cx="30.21" cy="157.96" r="3.27"/>\n    <rect x="32.35" y="143.59" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="bubble--yeti" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.19 53.08">\n    <path class="cls-1" d="M8.92,40.9C3.68,36.61.5,31,.5,24.81.5,11.38,15.54.5,34.09.5S67.69,11.38,67.69,24.81s-15,24.31-33.59,24.31a43.57,43.57,0,0,1-17-3.36L5.76,52.05Z"/>\n    <circle cx="13.84" cy="23.24" r="3.27"/>\n    <rect x="15.98" y="8.86" width="1.13" height="14.38"/>\n    <circle cx="23.93" cy="23.24" r="3.27"/>\n    <rect x="26.07" y="8.86" width="1.13" height="14.38"/>\n    <rect x="15.98" y="8.86" width="10.99" height="1.87"/>\n    <circle cx="42.84" cy="25.58" r="3.27"/>\n    <rect x="44.98" y="25.58" width="1.13" height="13.93"/>\n    <circle cx="52.93" cy="25.58" r="3.27"/>\n    <rect x="55.07" y="25.58" width="1.13" height="13.93"/>\n    <rect x="44.98" y="37.36" width="10.99" height="2.16"/>\n    <circle cx="31.21" cy="33.01" r="3.27"/>\n    <rect x="33.35" y="18.64" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="bubble--ghost" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.3 135.7">\n    <path class="cls-1" d="M108,67.42c-5.24-4.29-8.42-9.92-8.42-16.09,0-13.42,15-24.31,33.59-24.31S166.8,37.91,166.8,51.33s-15,24.31-33.59,24.31a43.57,43.57,0,0,1-17-3.36l-11.29,6.3Z"/>\n    <circle cx="112.95" cy="49.76" r="3.27"/>\n    <rect x="115.09" y="35.39" width="1.13" height="14.38"/>\n    <circle cx="123.04" cy="49.76" r="3.27"/>\n    <rect x="125.18" y="35.39" width="1.13" height="14.38"/>\n    <rect x="115.09" y="35.39" width="10.99" height="1.87"/>\n    <circle cx="141.95" cy="52.11" r="3.27"/>\n    <rect x="144.09" y="52.11" width="1.13" height="13.93"/>\n    <circle cx="152.04" cy="52.11" r="3.27"/>\n    <rect x="154.19" y="52.11" width="1.13" height="13.93"/>\n    <rect x="144.09" y="63.89" width="10.99" height="2.16"/>\n    <circle cx="130.32" cy="59.54" r="3.27"/>\n    <rect x="132.46" y="45.16" width="1.13" height="14.38"/>\n    <path class="cls-2" d="M83.38,94.81c5.24,4.29,8.42,9.92,8.42,16.09,0,13.42-15,24.31-33.59,24.31S24.61,124.32,24.61,110.9s15-24.31,33.59-24.31a43.57,43.57,0,0,1,17,3.36l11.29-6.3Z"/>\n    <circle cx="36.95" cy="109.39" r="3.27"/>\n    <rect x="39.09" y="95.01" width="1.13" height="14.38"/>\n    <circle cx="47.04" cy="109.39" r="3.27"/>\n    <rect x="49.18" y="95.01" width="1.13" height="14.38"/>\n    <rect x="39.09" y="95.01" width="10.99" height="1.87"/>\n    <circle cx="65.95" cy="111.73" r="3.27"/>\n    <rect x="68.09" y="111.73" width="1.13" height="13.93"/>\n    <circle cx="76.04" cy="111.73" r="3.27"/>\n    <rect x="78.19" y="111.73" width="1.13" height="13.93"/>\n    <rect x="68.09" y="123.51" width="10.99" height="2.16"/>\n    <circle cx="54.32" cy="119.16" r="3.27"/>\n    <rect x="56.46" y="104.79" width="1.13" height="14.38"/>\n    <path class="cls-3" d="M59.27,40.9c5.24-4.29,8.42-9.92,8.42-16.09C67.69,11.38,52.65.5,34.09.5S.5,11.38.5,24.81s15,24.31,33.59,24.31a43.57,43.57,0,0,0,17-3.36l11.29,6.3Z"/>\n    <circle cx="13.74" cy="23.64" r="3.27"/>\n    <rect x="15.89" y="9.26" width="1.13" height="14.38"/>\n    <circle cx="23.84" cy="23.64" r="3.27"/>\n    <rect x="25.98" y="9.26" width="1.13" height="14.38"/>\n    <rect x="15.89" y="9.26" width="10.99" height="1.87"/>\n    <circle cx="42.75" cy="25.98" r="3.27"/>\n    <rect x="44.89" y="25.98" width="1.13" height="13.93"/>\n    <circle cx="52.84" cy="25.98" r="3.27"/>\n    <rect x="54.98" y="25.98" width="1.13" height="13.93"/>\n    <rect x="44.89" y="37.76" width="10.99" height="2.16"/>\n    <circle cx="31.11" cy="33.41" r="3.27"/>\n    <rect x="33.26" y="19.04" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="bubble--wolf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.11 218.65">\n    <path class="cls-1" d="M8.92,177.75C3.68,182,.5,187.67.5,193.84c0,13.42,15,24.31,33.59,24.31s33.59-10.88,33.59-24.31-15-24.31-33.59-24.31a43.57,43.57,0,0,0-17,3.36L5.76,166.6Z"/>\n    <circle cx="12.84" cy="192.34" r="3.27"/>\n    <rect x="14.98" y="177.96" width="1.13" height="14.38"/>\n    <circle cx="22.93" cy="192.34" r="3.27"/>\n    <rect x="25.07" y="177.96" width="1.13" height="14.38"/>\n    <rect x="14.98" y="177.96" width="10.99" height="1.87"/>\n    <circle cx="41.84" cy="194.68" r="3.27"/>\n    <rect x="43.98" y="194.68" width="1.13" height="13.93"/>\n    <circle cx="51.93" cy="194.68" r="3.27"/>\n    <rect x="54.07" y="194.68" width="1.13" height="13.93"/>\n    <rect x="43.98" y="206.46" width="10.99" height="2.16"/>\n    <circle cx="30.21" cy="202.11" r="3.27"/>\n    <rect x="32.35" y="187.74" width="1.13" height="14.38"/>\n    <path class="cls-2" d="M15.84,40.9C10.61,36.61,7.43,31,7.43,24.81,7.43,11.38,22.47.5,41,.5S74.61,11.38,74.61,24.81,59.57,49.11,41,49.11a43.57,43.57,0,0,1-17-3.36l-11.29,6.3Z"/>\n    <circle cx="20.76" cy="23.24" r="3.27"/>\n    <rect x="22.91" y="8.86" width="1.13" height="14.38"/>\n    <circle cx="30.86" cy="23.24" r="3.27"/>\n    <rect x="33" y="8.86" width="1.13" height="14.38"/>\n    <rect x="22.91" y="8.86" width="10.99" height="1.87"/>\n    <circle cx="49.77" cy="25.58" r="3.27"/>\n    <rect x="51.91" y="25.58" width="1.13" height="13.93"/>\n    <circle cx="59.86" cy="25.58" r="3.27"/>\n    <rect x="62" y="25.58" width="1.13" height="13.93"/>\n    <rect x="51.91" y="37.36" width="10.99" height="2.16"/>\n    <circle cx="38.13" cy="33.01" r="3.27"/>\n    <rect x="40.28" y="18.64" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="bubble--bed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.09 87.03">\n    <path class="cls-1" d="M59.27,46.13c5.24,4.29,8.42,9.92,8.42,16.09,0,13.42-15,24.31-33.59,24.31S.5,75.65.5,62.22s15-24.31,33.59-24.31a43.57,43.57,0,0,1,17,3.36L62.43,35Z"/>\n    <circle cx="12.84" cy="60.72" r="3.27"/>\n    <rect x="14.98" y="46.34" width="1.13" height="14.38"/>\n    <circle cx="22.93" cy="60.72" r="3.27"/>\n    <rect x="25.07" y="46.34" width="1.13" height="14.38"/>\n    <rect x="14.98" y="46.34" width="10.99" height="1.87"/>\n    <circle cx="41.84" cy="63.06" r="3.27"/>\n    <rect x="43.98" y="63.06" width="1.13" height="13.93"/>\n    <circle cx="51.93" cy="63.06" r="3.27"/>\n    <rect x="54.07" y="63.06" width="1.13" height="13.93"/>\n    <rect x="43.98" y="74.84" width="10.99" height="2.16"/>\n    <circle cx="30.21" cy="70.49" r="3.27"/>\n    <rect x="32.35" y="56.12" width="1.13" height="14.38"/>\n    <path class="cls-2" d="M115.81,40.9c-5.24-4.29-8.42-9.92-8.42-16.09C107.4,11.38,122.44.5,141,.5s33.59,10.88,33.59,24.31-15,24.31-33.59,24.31a43.57,43.57,0,0,1-17-3.36l-11.29,6.3Z"/>\n    <circle cx="120.74" cy="23.24" r="3.27"/>\n    <rect x="122.88" y="8.86" width="1.13" height="14.38"/>\n    <circle cx="130.83" cy="23.24" r="3.27"/>\n    <rect x="132.97" y="8.86" width="1.13" height="14.38"/>\n    <rect x="122.88" y="8.86" width="10.99" height="1.87"/>\n    <circle cx="149.74" cy="25.58" r="3.27"/>\n    <rect x="151.88" y="25.58" width="1.13" height="13.93"/>\n    <circle cx="159.83" cy="25.58" r="3.27"/>\n    <rect x="161.97" y="25.58" width="1.13" height="13.93"/>\n    <rect x="151.88" y="37.36" width="10.99" height="2.16"/>\n    <circle cx="138.1" cy="33.01" r="3.27"/>\n    <rect x="140.25" y="18.64" width="1.13" height="14.38"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/bubble/bubble.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], BubbleComponent);
    return BubbleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=bubble.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PigtailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var PigtailComponent = /** @class */ (function (_super) {
    __extends(PigtailComponent, _super);
    function PigtailComponent(element) {
        return _super.call(this, 'pigtail', element.nativeElement) || this;
    }
    PigtailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pigtail',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/pigtail/pigtail.html"*/'<ng-template trinket-uniq-part part-name="default">\n  <svg width="25" class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.42 189.58">\n    <path class="cls-1" d="M21.21,34.26,4.61,12.89A8.59,8.59,0,1,1,19.49,4.3l1.72,3,1.72-3a8.59,8.59,0,1,1,14.88,8.59Z"/>\n    <path class="cls-1" d="M21.21,47.95,4.61,26.58A8.59,8.59,0,1,1,19.49,18l1.72,3,1.72-3a8.59,8.59,0,1,1,14.88,8.59Z"/>\n    <path class="cls-1" d="M21.21,61.63,4.61,40.26a8.59,8.59,0,1,1,14.88-8.59l1.72,3,1.72-3a8.59,8.59,0,1,1,14.88,8.59Z"/>\n    <path class="cls-1" d="M21.21,75.32,4.61,54a8.59,8.59,0,1,1,14.88-8.59l1.72,3,1.72-3A8.59,8.59,0,1,1,37.81,54Z"/>\n    <path class="cls-1" d="M21.21,89,4.61,67.64A8.59,8.59,0,1,1,19.49,59l1.72,3,1.72-3a8.59,8.59,0,1,1,14.88,8.59Z"/>\n    <path class="cls-1" d="M21.21,102.7,4.61,81.33a8.59,8.59,0,1,1,14.88-8.59l1.72,3,1.72-3a8.59,8.59,0,1,1,14.88,8.59Z"/>\n    <path class="cls-1" d="M21.21,116.38,4.61,95a8.59,8.59,0,1,1,14.88-8.59l1.72,3,1.72-3A8.59,8.59,0,1,1,37.81,95Z"/>\n    <path class="cls-1" d="M21.21,130.07,4.61,108.7a8.59,8.59,0,1,1,14.88-8.59l1.72,3,1.72-3a8.59,8.59,0,1,1,14.88,8.59Z"/>\n    <path class="cls-1" d="M21.21,127.65a43.77,43.77,0,0,0,0,61.93A43.77,43.77,0,0,0,21.21,127.65Z"/>\n    <polygon class="cls-2" points="29.45 129.22 0 146.22 0 112.21 29.45 129.22"/>\n    <polygon class="cls-2" points="12.96 129.22 42.42 112.21 42.42 146.22 12.96 129.22"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="skeleton">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.09 102.02">\n    <path class="cls-1" d="M11.41,18.44,2.48,6.94a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M11.41,25.8,2.48,14.3a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M11.41,33.17,2.48,21.67a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M11.41,40.53,2.48,29a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M11.41,47.9,2.48,36.4a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M11.41,55.27,2.48,43.77a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M11.41,62.63,2.48,51.13a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M11.41,70,2.48,58.5a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M11.41,68.69a23.55,23.55,0,0,0,0,33.33A23.55,23.55,0,0,0,11.41,68.69Z"/>\n    <polygon class="cls-2" points="15.85 69.54 0 78.69 0 60.39 15.85 69.54"/>\n    <polygon class="cls-2" points="6.98 69.54 22.83 60.39 22.83 78.69 6.98 69.54"/>\n    <path class="cls-1" d="M151.67,18.44l-8.94-11.5a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M151.67,25.8l-8.94-11.5a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M151.67,33.17l-8.94-11.5a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M151.67,40.53,142.74,29a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M151.67,47.9l-8.94-11.5a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M151.67,55.27l-8.94-11.5a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M151.67,62.63l-8.94-11.5a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M151.67,70l-8.94-11.5a4.62,4.62,0,1,1,8-4.62l.93,1.6.93-1.6a4.62,4.62,0,1,1,8,4.62Z"/>\n    <path class="cls-1" d="M151.67,68.69a23.55,23.55,0,0,0,0,33.33A23.55,23.55,0,0,0,151.67,68.69Z"/>\n    <polygon class="cls-2" points="156.11 69.54 140.26 78.69 140.26 60.39 156.11 69.54"/>\n    <polygon class="cls-2" points="147.24 69.54 163.09 60.39 163.09 78.69 147.24 69.54"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="zombie">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.62 56.4">\n    <path class="cls-1" d="M6.31,46.21l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M6.31,42.14l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89A2.56,2.56,0,1,1,1.37,48.5Z"/>\n    <path class="cls-1" d="M6.31,38.07l4.94,6.36A2.56,2.56,0,1,1,6.82,47l-.51-.89L5.8,47a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M6.31,34l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56L6.31,42l-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M6.31,29.92l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M6.31,25.85l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M6.31,21.78l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M6.31,17.7l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M6.31,18.43A13,13,0,0,0,6.31,0,13,13,0,0,0,6.31,18.43Z"/>\n    <polygon class="cls-2" points="3.86 17.96 12.62 12.9 12.62 23.02 3.86 17.96"/>\n    <polygon class="cls-2" points="8.76 17.96 0 23.02 0 12.9 8.76 17.96"/>\n    <path class="cls-1" d="M24.31,46.21l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M24.31,42.14l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M24.31,38.07l4.94,6.36A2.56,2.56,0,1,1,24.82,47l-.51-.89L23.8,47a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M24.31,34l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56L24.31,42l-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M24.31,29.92l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M24.31,25.85l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M24.31,21.78l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M24.31,17.7l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M24.31,18.43A13,13,0,0,0,24.31,0,13,13,0,0,0,24.31,18.43Z"/>\n    <polygon class="cls-2" points="21.86 17.96 30.62 12.9 30.62 23.02 21.86 17.96"/>\n    <polygon class="cls-2" points="26.76 17.96 18 23.02 18 12.9 26.76 17.96"/>\n    <path class="cls-1" d="M42.31,46.21l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M42.31,42.14l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M42.31,38.07l4.94,6.36A2.56,2.56,0,1,1,42.82,47l-.51-.89L41.8,47a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M42.31,34l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56L42.31,42l-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M42.31,29.92l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M42.31,25.85l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M42.31,21.78l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M42.31,17.7l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M42.31,18.43A13,13,0,0,0,42.31,0,13,13,0,0,0,42.31,18.43Z"/>\n    <polygon class="cls-2" points="39.86 17.96 48.62 12.9 48.62 23.02 39.86 17.96"/>\n    <polygon class="cls-2" points="44.76 17.96 36 23.02 36 12.9 44.76 17.96"/>\n    <path class="cls-1" d="M60.31,46.21l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M60.31,42.14l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M60.31,38.07l4.94,6.36A2.56,2.56,0,1,1,60.82,47l-.51-.89L59.8,47a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M60.31,34l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56L60.31,42l-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M60.31,29.92l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M60.31,25.85l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M60.31,21.78l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M60.31,17.7l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M60.31,18.43A13,13,0,0,0,60.31,0,13,13,0,0,0,60.31,18.43Z"/>\n    <polygon class="cls-2" points="57.86 17.96 66.62 12.9 66.62 23.02 57.86 17.96"/>\n    <polygon class="cls-2" points="62.76 17.96 54 23.02 54 12.9 62.76 17.96"/>\n    <path class="cls-1" d="M78.31,46.21l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M78.31,42.14l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M78.31,38.07l4.94,6.36A2.56,2.56,0,1,1,78.82,47l-.51-.89L77.8,47a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M78.31,34l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56L78.31,42l-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M78.31,29.92l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M78.31,25.85l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M78.31,21.78l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M78.31,17.7l4.94,6.36a2.56,2.56,0,1,1-4.43,2.56l-.51-.89-.51.89a2.56,2.56,0,1,1-4.43-2.56Z"/>\n    <path class="cls-1" d="M78.31,18.43A13,13,0,0,0,78.31,0,13,13,0,0,0,78.31,18.43Z"/>\n    <polygon class="cls-2" points="75.86 17.96 84.62 12.9 84.62 23.02 75.86 17.96"/>\n    <polygon class="cls-2" points="80.76 17.96 72 23.02 72 12.9 80.76 17.96"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="mummy">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.55 120.57">\n    <path class="cls-1" d="M13.49,21.79,2.93,8.2a5.46,5.46,0,1,1,9.46-5.46l1.1,1.9,1.1-1.9A5.46,5.46,0,1,1,24,8.2Z"/>\n    <path class="cls-1" d="M13.49,30.49,2.93,16.9a5.46,5.46,0,1,1,9.46-5.46l1.1,1.9,1.1-1.9A5.46,5.46,0,1,1,24,16.9Z"/>\n    <path class="cls-1" d="M13.49,39.2,2.93,25.61a5.46,5.46,0,1,1,9.46-5.46l1.1,1.9,1.1-1.9A5.46,5.46,0,1,1,24,25.61Z"/>\n    <path class="cls-1" d="M13.49,47.9,2.93,34.31a5.46,5.46,0,1,1,9.46-5.46l1.1,1.9,1.1-1.9A5.46,5.46,0,1,1,24,34.31Z"/>\n    <path class="cls-1" d="M13.49,56.61,2.93,43a5.46,5.46,0,1,1,9.46-5.46l1.1,1.9,1.1-1.9A5.46,5.46,0,1,1,24,43Z"/>\n    <path class="cls-1" d="M13.49,65.31,2.93,51.72a5.46,5.46,0,1,1,9.46-5.46l1.1,1.9,1.1-1.9A5.46,5.46,0,1,1,24,51.72Z"/>\n    <path class="cls-1" d="M13.49,74,2.93,60.43A5.46,5.46,0,1,1,12.39,55l1.1,1.9,1.1-1.9A5.46,5.46,0,1,1,24,60.43Z"/>\n    <path class="cls-1" d="M13.49,82.72,2.93,69.13a5.46,5.46,0,1,1,9.46-5.46l1.1,1.9,1.1-1.9A5.46,5.46,0,1,1,24,69.13Z"/>\n    <path class="cls-1" d="M13.49,81.18a27.84,27.84,0,0,0,0,39.39A27.84,27.84,0,0,0,13.49,81.18Z"/>\n    <polygon class="cls-2" points="18.73 82.18 0 92.99 0 71.36 18.73 82.18"/>\n    <polygon class="cls-2" points="8.24 82.18 26.98 71.36 26.98 92.99 8.24 82.18"/>\n    <path class="cls-1" d="M150.06,21.79,139.5,8.2A5.46,5.46,0,1,1,149,2.73l1.1,1.9,1.1-1.9a5.46,5.46,0,1,1,9.46,5.46Z"/>\n    <path class="cls-1" d="M150.06,30.49,139.5,16.9A5.46,5.46,0,1,1,149,11.44l1.1,1.9,1.1-1.9a5.46,5.46,0,1,1,9.46,5.46Z"/>\n    <path class="cls-1" d="M150.06,39.2,139.5,25.61A5.46,5.46,0,1,1,149,20.14l1.1,1.9,1.1-1.9a5.46,5.46,0,1,1,9.46,5.46Z"/>\n    <path class="cls-1" d="M150.06,47.9,139.5,34.31A5.46,5.46,0,1,1,149,28.85l1.1,1.9,1.1-1.9a5.46,5.46,0,1,1,9.46,5.46Z"/>\n    <path class="cls-1" d="M150.06,56.61,139.5,43A5.46,5.46,0,1,1,149,37.55l1.1,1.9,1.1-1.9A5.46,5.46,0,1,1,160.62,43Z"/>\n    <path class="cls-1" d="M150.06,65.31,139.5,51.72A5.46,5.46,0,1,1,149,46.26l1.1,1.9,1.1-1.9a5.46,5.46,0,1,1,9.46,5.46Z"/>\n    <path class="cls-1" d="M150.06,74,139.5,60.43A5.46,5.46,0,1,1,149,55l1.1,1.9,1.1-1.9a5.46,5.46,0,1,1,9.46,5.46Z"/>\n    <path class="cls-1" d="M150.06,82.72,139.5,69.13A5.46,5.46,0,1,1,149,63.67l1.1,1.9,1.1-1.9a5.46,5.46,0,1,1,9.46,5.46Z"/>\n    <path class="cls-1" d="M150.06,81.18a27.84,27.84,0,0,0,0,39.39A27.84,27.84,0,0,0,150.06,81.18Z"/>\n    <polygon class="cls-2" points="155.3 82.18 136.57 92.99 136.57 71.36 155.3 82.18"/>\n    <polygon class="cls-2" points="144.81 82.18 163.54 71.36 163.54 92.99 144.81 82.18"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yaga">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.94 109.79">\n    <path class="cls-1" d="M47.66,22.61l-2.93-17a5.46,5.46,0,1,1,10.92-.37l.07,2.19,1.86-1.16a5.46,5.46,0,1,1,5.78,9.27Z"/>\n    <path class="cls-1" d="M43.57,30.29l-2.93-17A5.46,5.46,0,1,1,51.56,13l.07,2.19L53.49,14a5.46,5.46,0,1,1,5.78,9.27Z"/>\n    <path class="cls-1" d="M39.48,38,36.55,21a5.46,5.46,0,1,1,10.92-.37l.07,2.19,1.86-1.16a5.46,5.46,0,1,1,5.78,9.27Z"/>\n    <path class="cls-1" d="M35.38,45.66l-2.93-17a5.46,5.46,0,1,1,10.92-.37l.07,2.19,1.86-1.16a5.46,5.46,0,1,1,5.78,9.27Z"/>\n    <path class="cls-1" d="M31.29,53.34l-2.93-17A5.46,5.46,0,1,1,39.28,36l.07,2.19L41.22,37A5.46,5.46,0,1,1,47,46.31Z"/>\n    <path class="cls-1" d="M27.2,61l-2.93-17a5.46,5.46,0,1,1,10.92-.37l.07,2.19,1.86-1.16A5.46,5.46,0,1,1,42.91,54Z"/>\n    <path class="cls-1" d="M23.11,68.71l-2.93-17a5.46,5.46,0,1,1,10.92-.37l.07,2.19L33,52.41a5.46,5.46,0,1,1,5.78,9.27Z"/>\n    <path class="cls-1" d="M19,76.39l-2.93-17A5.46,5.46,0,1,1,27,59.06l.07,2.19,1.86-1.16a5.46,5.46,0,1,1,5.78,9.27Z"/>\n    <path class="cls-1" d="M19.74,75A27.84,27.84,0,0,0,1.22,109.79,27.84,27.84,0,0,0,19.74,75Z"/>\n    <polygon class="cls-2" points="23.9 78.38 2.28 79.11 12.45 60.02 23.9 78.38"/>\n    <polygon class="cls-2" points="14.64 73.44 36.26 72.71 26.09 91.8 14.64 73.44"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="doctor">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.55 86.35">\n    <path class="cls-1" d="M150.13,53l-2.93,13.95a4.53,4.53,0,1,1-8.52-3.06l.61-1.71-1.78.32a4.53,4.53,0,1,1-1.61-8.91Z"/>\n    <path class="cls-1" d="M155.63,48.3l-2.93,13.95a4.53,4.53,0,1,1-8.52-3.06l.61-1.71-1.78.32a4.53,4.53,0,1,1-1.61-8.91Z"/>\n    <path class="cls-1" d="M161.13,43.64l-2.93,13.95a4.53,4.53,0,1,1-8.52-3.06l.61-1.71-1.78.32a4.53,4.53,0,1,1-1.61-8.91Z"/>\n    <path class="cls-1" d="M166.63,39l-2.93,13.95a4.53,4.53,0,1,1-8.52-3.06l.61-1.71-1.78.32a4.53,4.53,0,1,1-1.61-8.91Z"/>\n    <path class="cls-1" d="M172.13,34.32,169.2,48.27a4.53,4.53,0,1,1-8.52-3.06l.61-1.71-1.78.32a4.53,4.53,0,1,1-1.61-8.91Z"/>\n    <path class="cls-1" d="M177.63,29.66,174.7,43.61a4.53,4.53,0,1,1-8.52-3.06l.61-1.71-1.78.32a4.53,4.53,0,1,1-1.61-8.91Z"/>\n    <path class="cls-1" d="M183.13,25,180.2,38.95a4.53,4.53,0,1,1-8.52-3.06l.61-1.71-1.78.32a4.53,4.53,0,1,1-1.61-8.91Z"/>\n    <path class="cls-1" d="M188.63,20.34,185.7,34.29a4.53,4.53,0,1,1-8.52-3.06l.61-1.71-1.78.32a4.53,4.53,0,1,1-1.61-8.91Z"/>\n    <path class="cls-1" d="M187.66,21.17A23.05,23.05,0,0,0,212.55.08,23.05,23.05,0,0,0,187.66,21.17Z"/>\n    <polygon class="cls-2" points="185.48 17.32 202.34 23.37 188.68 34.95 185.48 17.32"/>\n    <polygon class="cls-2" points="191.09 23.95 174.23 17.9 187.9 6.32 191.09 23.95"/>\n    <path class="cls-1" d="M54.86,68.56l14,2.49a4.53,4.53,0,1,1-2.78,8.61l-1.73-.56.38,1.77a4.53,4.53,0,1,1-8.85,1.89Z"/>\n    <path class="cls-1" d="M50,63.2l14,2.49a4.53,4.53,0,1,1-2.78,8.61l-1.73-.56.38,1.77a4.53,4.53,0,1,1-8.85,1.89Z"/>\n    <path class="cls-1" d="M45.19,57.85l14,2.49A4.53,4.53,0,1,1,56.44,69l-1.73-.56.38,1.77a4.53,4.53,0,1,1-8.85,1.89Z"/>\n    <path class="cls-1" d="M40.36,52.5,54.4,55a4.53,4.53,0,1,1-2.78,8.61L49.89,63l.38,1.77a4.53,4.53,0,1,1-8.85,1.89Z"/>\n    <path class="cls-1" d="M35.53,47.15l14,2.49a4.53,4.53,0,1,1-2.78,8.61l-1.73-.56.38,1.77a4.53,4.53,0,1,1-8.85,1.89Z"/>\n    <path class="cls-1" d="M30.7,41.8l14,2.49a4.53,4.53,0,1,1-2.78,8.61l-1.73-.56.38,1.77A4.53,4.53,0,1,1,31.75,56Z"/>\n    <path class="cls-1" d="M25.87,36.45l14,2.49a4.53,4.53,0,1,1-2.78,8.61L35.39,47l.38,1.77a4.53,4.53,0,1,1-8.85,1.89Z"/>\n    <path class="cls-1" d="M21,31.1l14,2.49a4.53,4.53,0,1,1-2.78,8.61l-1.73-.56.38,1.77a4.53,4.53,0,1,1-8.85,1.89Z"/>\n    <path class="cls-1" d="M21.89,32A23.05,23.05,0,0,0,0,7.84,23.05,23.05,0,0,0,21.89,32Z"/>\n    <polygon class="cls-2" points="18.11 34.34 23.63 17.3 35.63 30.6 18.11 34.34"/>\n    <polygon class="cls-2" points="24.56 28.52 19.05 45.57 7.04 32.27 24.56 28.52"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="spider">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.76 113.13">\n    <path class="cls-1" d="M127.52,20.64,118.18,7.49a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73A5.12,5.12,0,1,1,138,8.35Z"/>\n    <path class="cls-1" d="M127.17,28.79l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82L129,11a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M126.81,36.94l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M126.46,45.09l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M126.11,53.24l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M125.75,61.39l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M125.4,69.55l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M125,77.7l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M125.11,76.25a26.09,26.09,0,0,0-1.6,36.88A26.09,26.09,0,0,0,125.11,76.25Z"/>\n    <polygon class="cls-2" points="129.98 77.4 112 86.76 112.88 66.51 129.98 77.4"/>\n    <polygon class="cls-2" points="120.16 76.97 138.14 67.61 137.26 87.86 120.16 76.97"/>\n    <path class="cls-1" d="M15.52,20.64,6.18,7.49a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73A5.12,5.12,0,1,1,26,8.35Z"/>\n    <path class="cls-1" d="M15.17,28.79,5.83,15.64a5.12,5.12,0,1,1,9.08-4.73l.95,1.82L17,11a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M14.81,36.94,5.48,23.79a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M14.46,45.09,5.12,31.94a5.12,5.12,0,1,1,9.08-4.73L15.16,29l1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M14.11,53.24,4.77,40.09a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13.75,61.39,4.42,48.24a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13.4,69.55,4.06,56.39a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13,77.7,3.71,64.54a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13.11,76.25a26.09,26.09,0,0,0-1.6,36.88A26.09,26.09,0,0,0,13.11,76.25Z"/>\n    <polygon class="cls-2" points="17.98 77.4 0 86.76 0.88 66.51 17.98 77.4"/>\n    <polygon class="cls-2" points="8.16 76.97 26.14 67.61 25.26 87.86 8.16 76.97"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="alien">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.43 113.13">\n    <path class="cls-1" d="M156.19,20.64,146.85,7.49a5.12,5.12,0,1,1,9.08-4.73l.95,1.82L158,2.84a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M155.83,28.79,146.5,15.64a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M155.48,36.94l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M155.13,45.09l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M154.77,53.24l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M154.42,61.39l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M154.07,69.55l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M153.71,77.7l-9.34-13.15a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M153.78,76.25a26.09,26.09,0,0,0-1.6,36.88A26.09,26.09,0,0,0,153.78,76.25Z"/>\n    <polygon class="cls-2" points="158.65 77.4 140.67 86.76 141.54 66.51 158.65 77.4"/>\n    <polygon class="cls-2" points="148.82 76.97 166.8 67.61 165.93 87.86 148.82 76.97"/>\n    <path class="cls-1" d="M15.52,20.64,6.18,7.49a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73A5.12,5.12,0,1,1,26,8.35Z"/>\n    <path class="cls-1" d="M15.17,28.79,5.83,15.64a5.12,5.12,0,1,1,9.08-4.73l.95,1.82L17,11a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M14.81,36.94,5.48,23.79a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M14.46,45.09,5.12,31.94a5.12,5.12,0,1,1,9.08-4.73L15.16,29l1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M14.11,53.24,4.77,40.09a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13.75,61.39,4.42,48.24a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13.4,69.55,4.06,56.39a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13,77.7,3.71,64.54a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13.11,76.25a26.09,26.09,0,0,0-1.6,36.88A26.09,26.09,0,0,0,13.11,76.25Z"/>\n    <polygon class="cls-2" points="17.98 77.4 0 86.76 0.88 66.51 17.98 77.4"/>\n    <polygon class="cls-2" points="8.16 76.97 26.14 67.61 25.26 87.86 8.16 76.97"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="vampire">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.47 92.33">\n    <path class="cls-1" d="M58.47,20.44l.34-16.13A5.12,5.12,0,1,1,68.93,5.93L68.6,8l1.92-.73a5.12,5.12,0,1,1,3.66,9.57Z"/>\n    <path class="cls-1" d="M53.33,26.78l.34-16.13a5.12,5.12,0,1,1,10.11,1.61l-.32,2,1.92-.73A5.12,5.12,0,1,1,69,23.12Z"/>\n    <path class="cls-1" d="M48.19,33.11,48.53,17A5.12,5.12,0,1,1,58.65,18.6l-.32,2,1.92-.73a5.12,5.12,0,1,1,3.66,9.57Z"/>\n    <path class="cls-1" d="M43.05,39.45l.34-16.13a5.12,5.12,0,1,1,10.11,1.61l-.32,2,1.92-.73a5.12,5.12,0,1,1,3.66,9.57Z"/>\n    <path class="cls-1" d="M37.91,45.78l.34-16.13a5.12,5.12,0,1,1,10.11,1.61l-.32,2L50,32.56a5.12,5.12,0,1,1,3.66,9.57Z"/>\n    <path class="cls-1" d="M32.77,52.12,33.11,36A5.12,5.12,0,1,1,43.23,37.6l-.32,2,1.92-.73a5.12,5.12,0,1,1,3.66,9.57Z"/>\n    <path class="cls-1" d="M27.63,58.45,28,42.33a5.12,5.12,0,1,1,10.11,1.61l-.32,2,1.92-.73a5.12,5.12,0,1,1,3.66,9.57Z"/>\n    <path class="cls-1" d="M22.49,64.79l.34-16.13a5.12,5.12,0,1,1,10.11,1.61l-.32,2,1.92-.73a5.12,5.12,0,1,1,3.66,9.57Z"/>\n    <path class="cls-1" d="M23.4,63.67A26.09,26.09,0,0,0,.14,92.33,26.09,26.09,0,0,0,23.4,63.67Z"/>\n    <polygon class="cls-2" points="26.63 67.49 6.61 64.3 19.38 48.55 26.63 67.49"/>\n    <polygon class="cls-2" points="19 61.29 39.02 64.48 26.24 80.23 19 61.29"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="yeti">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.78 78.81">\n    <path class="cls-1" d="M16.29,21.77,12.78,13.5a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M15.13,26.16l-3.52-8.26a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M14,30.55l-3.52-8.26a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M12.81,34.94,9.3,26.68a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M11.65,39.34,8.14,31.07a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M10.49,43.73,7,35.46a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M9.33,48.12,5.82,39.86a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M8.17,52.51,4.66,44.25a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M8.38,51.73A14.53,14.53,0,0,0,3.13,71.61,14.53,14.53,0,0,0,8.38,51.73Z"/>\n    <polygon class="cls-2" points="10.89 52.94 0 55.9 2.88 44.98 10.89 52.94"/>\n    <polygon class="cls-2" points="5.6 51.54 16.49 48.58 13.61 59.49 5.6 51.54"/>\n    <path class="cls-1" d="M85.29,28.54l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M86.48,32.92l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1A2.85,2.85,0,1,1,90,24.64Z"/>\n    <path class="cls-1" d="M87.66,37.31,80.49,31.9a2.85,2.85,0,1,1,4-4l.81.81.29-1.1A2.85,2.85,0,1,1,91.13,29Z"/>\n    <path class="cls-1" d="M88.85,41.69l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M90,46.08l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M91.22,50.46,84,45.05a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M92.4,54.85l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M93.59,59.24l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1A2.85,2.85,0,1,1,97.06,51Z"/>\n    <path class="cls-1" d="M93.38,58.46A14.53,14.53,0,0,0,98.74,78.3,14.53,14.53,0,0,0,93.38,58.46Z"/>\n    <polygon class="cls-2" points="96.16 58.25 88.19 66.25 85.25 55.35 96.16 58.25"/>\n    <polygon class="cls-2" points="90.87 59.67 98.84 51.68 101.78 62.57 90.87 59.67"/>\n    <path class="cls-1" d="M153.29,11.87l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M154.48,16.25l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1A2.85,2.85,0,1,1,158,8Z"/>\n    <path class="cls-1" d="M155.66,20.64l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M156.85,25l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M158,29.41,150.86,24a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M159.22,33.8,152,28.39a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M160.4,38.18l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M161.59,42.57l-7.17-5.41a2.85,2.85,0,1,1,4-4l.81.81.29-1.1a2.85,2.85,0,1,1,5.51,1.47Z"/>\n    <path class="cls-1" d="M161.38,41.79a14.53,14.53,0,0,0,5.36,19.84A14.53,14.53,0,0,0,161.38,41.79Z"/>\n    <polygon class="cls-2" points="164.16 41.58 156.19 49.58 153.25 38.68 164.16 41.58"/>\n    <polygon class="cls-2" points="158.87 43.01 166.84 35.01 169.78 45.91 158.87 43.01"/>\n    <path class="cls-1" d="M41.66,29l-3.52-8.26a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M40.5,33.37,37,25.1a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M39.34,37.76l-3.52-8.26a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M38.18,42.15l-3.52-8.26a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M37,46.54,33.5,38.28a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M35.86,50.93l-3.52-8.26a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M34.7,55.33l-3.52-8.26a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M33.54,59.72,30,51.45a2.85,2.85,0,1,1,5.5-1.5l.3,1.1.81-.81a2.85,2.85,0,1,1,4,4Z"/>\n    <path class="cls-1" d="M33.74,58.94a14.53,14.53,0,0,0-5.25,19.87A14.53,14.53,0,0,0,33.74,58.94Z"/>\n    <polygon class="cls-2" points="36.26 60.14 25.36 63.1 28.25 52.19 36.26 60.14"/>\n    <polygon class="cls-2" points="30.96 58.74 41.86 55.78 38.98 66.7 30.96 58.74"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="ghost">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.01 123.43">\n    <path class="cls-1" d="M36.54,49.59,33.49,35.67a4.53,4.53,0,1,1,9-.71l.14,1.81,1.49-1a4.53,4.53,0,1,1,5.13,7.46Z"/>\n    <path class="cls-1" d="M33.44,56.1,30.39,42.17a4.53,4.53,0,1,1,9-.71l.14,1.81,1.49-1a4.53,4.53,0,1,1,5.13,7.46Z"/>\n    <path class="cls-1" d="M30.33,62.6,27.28,48.68a4.53,4.53,0,1,1,9-.71l.14,1.81,1.49-1a4.53,4.53,0,1,1,5.13,7.46Z"/>\n    <path class="cls-1" d="M27.23,69.11,24.18,55.19a4.53,4.53,0,1,1,9-.71l.14,1.81,1.49-1A4.53,4.53,0,1,1,40,62.72Z"/>\n    <path class="cls-1" d="M24.13,75.62,21.08,61.7a4.53,4.53,0,1,1,9-.71l.14,1.81,1.49-1a4.53,4.53,0,1,1,5.13,7.46Z"/>\n    <path class="cls-1" d="M21,82.13,18,68.2a4.53,4.53,0,1,1,9-.71l.14,1.81,1.49-1a4.53,4.53,0,1,1,5.13,7.46Z"/>\n    <path class="cls-1" d="M17.92,88.63,14.87,74.71a4.53,4.53,0,1,1,9-.71L24,75.81l1.49-1a4.53,4.53,0,1,1,5.13,7.46Z"/>\n    <path class="cls-1" d="M14.82,95.14,11.77,81.22a4.53,4.53,0,1,1,9-.71l.14,1.81,1.49-1a4.53,4.53,0,1,1,5.13,7.46Z"/>\n    <path class="cls-1" d="M15.37,94a23.05,23.05,0,0,0-14,29.45A23.05,23.05,0,0,0,15.37,94Z"/>\n    <polygon class="cls-2" points="18.94 96.6 1.08 98.01 8.79 81.84 18.94 96.6"/>\n    <polygon class="cls-2" points="11.1 92.87 28.95 91.46 21.25 107.63 11.1 92.87"/>\n    <path class="cls-1" d="M157.76,18.31l-13.68-4a4.53,4.53,0,1,1,3.7-8.26l1.66.74L149.25,5a4.53,4.53,0,1,1,9-.93Z"/>\n    <path class="cls-1" d="M162,24.15l-13.68-4a4.53,4.53,0,1,1,3.7-8.26l1.66.74-.19-1.8a4.53,4.53,0,1,1,9-.93Z"/>\n    <path class="cls-1" d="M166.22,30l-13.68-4a4.53,4.53,0,1,1,3.7-8.26l1.66.74-.19-1.8a4.53,4.53,0,1,1,9-.93Z"/>\n    <path class="cls-1" d="M170.44,35.83l-13.68-4a4.53,4.53,0,1,1,3.7-8.26l1.66.74-.19-1.8a4.53,4.53,0,1,1,9-.93Z"/>\n    <path class="cls-1" d="M174.67,41.67l-13.68-4a4.53,4.53,0,1,1,3.7-8.26l1.66.74-.19-1.8a4.53,4.53,0,1,1,9-.93Z"/>\n    <path class="cls-1" d="M178.89,47.51l-13.68-4a4.53,4.53,0,1,1,3.7-8.26l1.66.74-.19-1.8a4.53,4.53,0,1,1,9-.93Z"/>\n    <path class="cls-1" d="M183.12,53.35l-13.68-4a4.53,4.53,0,1,1,3.7-8.26l1.66.74L174.6,40a4.53,4.53,0,1,1,9-.93Z"/>\n    <path class="cls-1" d="M187.35,59.19l-13.68-4a4.53,4.53,0,1,1,3.7-8.26l1.66.74-.19-1.8a4.53,4.53,0,1,1,9-.93Z"/>\n    <path class="cls-1" d="M186.6,58.16a23.05,23.05,0,0,0,19.12,26.43A23.05,23.05,0,0,0,186.6,58.16Z"/>\n    <polygon class="cls-2" points="190.6 56.28 183.28 72.63 172.78 58.12 190.6 56.28"/>\n    <polygon class="cls-2" points="183.56 61.38 190.88 45.02 201.38 59.54 183.56 61.38"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="wolf">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.76 113.13">\n    <path class="cls-1" d="M15.52,20.64,6.18,7.49a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73A5.12,5.12,0,1,1,26,8.35Z"/>\n    <path class="cls-1" d="M15.17,28.79,5.83,15.64a5.12,5.12,0,1,1,9.08-4.73l.95,1.82L17,11a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M14.81,36.94,5.48,23.79a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M14.46,45.09,5.12,31.94a5.12,5.12,0,1,1,9.08-4.73L15.16,29l1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M14.11,53.24,4.77,40.09a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13.75,61.39,4.42,48.24a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13.4,69.55,4.06,56.39a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13,77.7,3.71,64.54a5.12,5.12,0,1,1,9.08-4.73l.95,1.82,1.1-1.73a5.12,5.12,0,1,1,8.64,5.5Z"/>\n    <path class="cls-1" d="M13.11,76.25a26.09,26.09,0,0,0-1.6,36.88A26.09,26.09,0,0,0,13.11,76.25Z"/>\n    <polygon class="cls-2" points="17.98 77.4 0 86.76 0.88 66.51 17.98 77.4"/>\n    <polygon class="cls-2" points="8.16 76.97 26.14 67.61 25.26 87.86 8.16 76.97"/>\n  </svg>\n</ng-template>\n\n<ng-template trinket-uniq-part part-name="bed">\n  <svg class="pigtail--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.07 75.54">\n    <path class="cls-1" d="M10.36,13.78,4.13,5A3.42,3.42,0,1,1,10.2,1.84l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M10.13,19.23,3.89,10.44A3.42,3.42,0,1,1,10,7.28l.63,1.22.74-1.16A3.42,3.42,0,1,1,17.1,11Z"/>\n    <path class="cls-1" d="M9.89,24.67,3.66,15.89a3.42,3.42,0,1,1,6.07-3.16l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M9.66,30.11,3.42,21.33a3.42,3.42,0,1,1,6.07-3.16l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M9.42,35.55,3.19,26.77a3.42,3.42,0,1,1,6.07-3.16l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M9.18,41,2.95,32.21A3.42,3.42,0,1,1,9,29.05l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M8.95,46.44,2.71,37.66A3.42,3.42,0,1,1,8.78,34.5l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M8.71,51.88,2.48,43.1a3.42,3.42,0,1,1,6.07-3.16l.63,1.22L9.91,40a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M8.75,50.92A17.42,17.42,0,0,0,7.69,75.54,17.42,17.42,0,0,0,8.75,50.92Z"/>\n    <polygon class="cls-2" points="12.01 51.68 0 57.94 0.59 44.41 12.01 51.68"/>\n    <polygon class="cls-2" points="5.45 51.4 17.45 45.15 16.87 58.67 5.45 51.4"/>\n    <path class="cls-1" d="M78.57,13.78,72.33,5A3.42,3.42,0,1,1,78.4,1.84L79,3.06l.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M78.33,19.23,72.1,10.44a3.42,3.42,0,1,1,6.07-3.16L78.8,8.5l.74-1.16A3.42,3.42,0,1,1,85.3,11Z"/>\n    <path class="cls-1" d="M78.09,24.67l-6.23-8.78a3.42,3.42,0,1,1,6.07-3.16l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M77.86,30.11l-6.23-8.78a3.42,3.42,0,1,1,6.07-3.16l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M77.62,35.55l-6.23-8.78a3.42,3.42,0,1,1,6.07-3.16l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M77.39,41l-6.23-8.78a3.42,3.42,0,1,1,6.07-3.16l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M77.15,46.44l-6.23-8.78A3.42,3.42,0,1,1,77,34.5l.63,1.22.74-1.16a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M76.91,51.88,70.68,43.1a3.42,3.42,0,1,1,6.07-3.16l.63,1.22L78.12,40a3.42,3.42,0,1,1,5.77,3.67Z"/>\n    <path class="cls-1" d="M77,50.92a17.42,17.42,0,0,0-1.07,24.63A17.42,17.42,0,0,0,77,50.92Z"/>\n    <polygon class="cls-2" points="80.21 51.68 68.2 57.94 68.79 44.41 80.21 51.68"/>\n    <polygon class="cls-2" points="73.65 51.4 85.66 45.15 85.07 58.67 73.65 51.4"/>\n  </svg>\n</ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/trinkets/pigtail/pigtail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], PigtailComponent);
    return PigtailComponent;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=pigtail.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonstersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monsters_host_directive__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monsters_screen_directive__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monsters_service__ = __webpack_require__(185);
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
    function MonstersComponent(componentFactoryResolver, monstersService, viewContainerRef, renderer) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.monstersService = monstersService;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.onScreen = [];
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
    MonstersComponent.prototype.render = function (component, cb) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        var viewContainerRef = this.screen.viewContainerRef;
        var _a = viewContainerRef.createComponent(componentFactory), hostView = _a.hostView, instance = _a.instance;
        this.addOnScreen(instance.node, hostView);
        return cb(instance);
    };
    MonstersComponent.prototype.addOnScreen = function (instance, host) {
        this.onScreen = this.onScreen.concat([{ instance: instance, host: host }]);
        return this;
    };
    MonstersComponent.prototype.remove = function (instance) {
        var host = this.onScreen.find(function (_a) {
            var i = _a.instance;
            return i === instance;
        }).host;
        var index = this.screen.viewContainerRef.indexOf(host);
        this.screen.viewContainerRef.remove(index);
        this.onScreen = this.onScreen.filter(function (_a) {
            var i = _a.instance;
            return i !== instance;
        });
        return this;
    };
    MonstersComponent.prototype.clearAll = function () {
        this.screen.viewContainerRef.clear();
        return this;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__monsters_screen_directive__["a" /* MonstersScreenDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__monsters_screen_directive__["a" /* MonstersScreenDirective */])
    ], MonstersComponent.prototype, "screen", void 0);
    MonstersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'monster',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/monsters.component.html"*/'<ng-template monster-host></ng-template>\n<ng-template monster-screen></ng-template>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/monsters.component.html"*/,
            // styleUrls: ['monsters.component.scss'],
            providers: [__WEBPACK_IMPORTED_MODULE_3__monsters_service__["a" /* MonstersService */]],
            host: {
                '[class]': 'monster.name + "__screen"',
                '[class.monster]': 'true',
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_3__monsters_service__["a" /* MonstersService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], MonstersComponent);
    return MonstersComponent;
}());

//# sourceMappingURL=monsters.component.js.map

/***/ }),
/* 183 */
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
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonstersScreenDirective; });
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

var MonstersScreenDirective = /** @class */ (function () {
    function MonstersScreenDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    MonstersScreenDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[monster-screen]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], MonstersScreenDirective);
    return MonstersScreenDirective;
}());

//# sourceMappingURL=monsters-screen.directive.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonstersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zombie_zombie__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skeleton_skeleton__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alien_alien__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bed_bed__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spider_spider__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vampire_vampire__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wolf_wolf__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mummy_mummy__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__yaga_yaga__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__doctor_doctor__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__yeti_yeti__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ghost_ghost__ = __webpack_require__(198);
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
                anchor: 1,
                name: 'alien',
                component: __WEBPACK_IMPORTED_MODULE_3__alien_alien__["a" /* AlienComponent */],
            },
            {
                id: 2,
                anchor: 12,
                name: 'zombie',
                component: __WEBPACK_IMPORTED_MODULE_1__zombie_zombie__["a" /* ZombieComponent */],
            },
            {
                id: 3,
                anchor: 6,
                name: 'skeleton',
                component: __WEBPACK_IMPORTED_MODULE_2__skeleton_skeleton__["a" /* SkeletonComponent */],
            },
            {
                id: 4,
                anchor: 5,
                name: 'spider',
                component: __WEBPACK_IMPORTED_MODULE_5__spider_spider__["a" /* SpiderComponent */],
            },
            {
                id: 5,
                anchor: 11,
                name: 'vampire',
                component: __WEBPACK_IMPORTED_MODULE_6__vampire_vampire__["a" /* VampireComponent */],
            },
            {
                id: 6,
                anchor: 9,
                name: 'wolf',
                component: __WEBPACK_IMPORTED_MODULE_7__wolf_wolf__["a" /* WolfComponent */],
            },
            {
                id: 7,
                name: 'mummy',
                component: __WEBPACK_IMPORTED_MODULE_8__mummy_mummy__["a" /* MummyComponent */],
            },
            {
                id: 8,
                name: 'yaga',
                component: __WEBPACK_IMPORTED_MODULE_9__yaga_yaga__["a" /* YagaComponent */],
            },
            {
                id: 9,
                name: 'doctor',
                component: __WEBPACK_IMPORTED_MODULE_10__doctor_doctor__["a" /* DoctorComponent */],
            },
            {
                id: 10,
                name: 'yeti',
                component: __WEBPACK_IMPORTED_MODULE_11__yeti_yeti__["a" /* YetiComponent */],
            },
            {
                id: 11,
                name: 'ghost',
                component: __WEBPACK_IMPORTED_MODULE_12__ghost_ghost__["a" /* GhostComponent */],
            },
            {
                id: 12,
                name: 'bed',
                component: __WEBPACK_IMPORTED_MODULE_4__bed_bed__["a" /* BedComponent */],
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
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZombieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_animation_set_controller__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_animation_sequence_controller__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_imports_loader_this_window_fix_module_exports_0_snapsvg_dist_snap_svg_js__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_imports_loader_this_window_fix_module_exports_0_snapsvg_dist_snap_svg_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_imports_loader_this_window_fix_module_exports_0_snapsvg_dist_snap_svg_js__);
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




// @ts-ignore: Unreachable code error

var aniamtions = function (instance) {
    var _this = this;
    var root = __WEBPACK_IMPORTED_MODULE_4_imports_loader_this_window_fix_module_exports_0_snapsvg_dist_snap_svg_js___default()(instance);
    var config = {
        pupilL: { begin: 74.18, end: 64.18 },
        pupilR: { begin: 142.93, end: 132.93 },
        lids: { begin: 64, end: 97.54 }
    };
    return {
        getRoot: function () {
            return root;
        },
        eyes: function (cb) {
            if (cb === void 0) { cb = function () { }; }
            var eyesMovement = _this.snap.eyesMovement();
            var blink = _this.snap.blink();
            var timeLine = function () {
                setTimeout(blink, 0);
                setTimeout(function () {
                    eyesMovement(cb);
                }, 0);
            };
            timeLine();
            return timeLine;
        },
        blink: function (cb) {
            if (cb === void 0) { cb = function () { }; }
            var lids = _this.getParts(function (p) { return p.name === 'lid'; })
                .map(function (_a) {
                var element = _a.element;
                return __WEBPACK_IMPORTED_MODULE_4_imports_loader_this_window_fix_module_exports_0_snapsvg_dist_snap_svg_js___default()(element);
            });
            return function () {
                lids.forEach(function (l) {
                    l.animate({ cy: config.lids.end, }, 42, function () {
                        l.animate({ cy: config.lids.begin, }, 84, cb);
                    });
                });
            };
        },
        eyesMovement: function (cb) {
            if (cb === void 0) { cb = function () { }; }
            var pupils = _this.getParts(function (p) { return p.name === 'pupil'; })
                .reduce(function (acc, _a) {
                var mod = _a.mod, element = _a.element;
                return __assign({}, acc, (_b = {}, _b[mod] = __WEBPACK_IMPORTED_MODULE_4_imports_loader_this_window_fix_module_exports_0_snapsvg_dist_snap_svg_js___default()(element), _b));
                var _b;
            }, {});
            var animatePupilRightForward = function () { return pupils.right.animate({ cx: config.pupilR.end, }, 100); };
            var animatePupilLeftForward = function () { return pupils.left.animate({ cx: config.pupilL.end, }, 100); };
            var animatePupilRightBackward = function () { return pupils.right.animate({ cx: config.pupilR.begin, }, 250, cb); };
            var animatePupilLeftBackward = function () { return pupils.left.animate({ cx: config.pupilL.begin, }, 250, cb); };
            return function () {
                animatePupilRightForward();
                animatePupilLeftForward();
                setTimeout(function () {
                    animatePupilRightBackward();
                    animatePupilLeftBackward();
                }, 588);
            };
        },
        smile: function (arg) {
            var el = _this.getPart(function (p) { return p.name == 'mouth' && p.type == "element"; }).element;
            var mouth = __WEBPACK_IMPORTED_MODULE_4_imports_loader_this_window_fix_module_exports_0_snapsvg_dist_snap_svg_js___default()(el);
            var value = 'M102.43,194c15.36,0,27.81-7.55,27.81-16.86H74.62C74.62,186.43,87.07,194,102.43,194Z';
            var smileForward = function (cb) {
                mouth.attr({ class: 'fadeIn ' });
                mouth.animate({
                    d: 'M134.5,197.76c22.39-6.56,37.32-22.88,33.34-36.45L86.76,185.05C90.74,198.63,112.11,204.31,134.5,197.76Z',
                }, 200, cb);
                return smileBackward;
            };
            var smileBackward = function (cb) {
                mouth.attr({ class: 'fadeOut' });
                mouth.animate({ d: value, }, 200, cb);
                return smileForward;
            };
            return arg ? smileForward : smileBackward;
        },
        smileLids: function (arg) {
            var lids = _this.getParts(function (p) { return p.name === 'lid'; })
                .map(function (_a) {
                var element = _a.element;
                return __WEBPACK_IMPORTED_MODULE_4_imports_loader_this_window_fix_module_exports_0_snapsvg_dist_snap_svg_js___default()(element);
            });
            var config = { original: 64, end: 118, begin: 132 };
            var smileForward = function (cb) {
                if (cb === void 0) { cb = function () { }; }
                lids.forEach(function (l) {
                    l.attr({ cy: config.begin });
                    l.animate({ cy: config.end }, 200, cb);
                });
                return smileBackward;
            };
            var smileBackward = function (cb) {
                if (cb === void 0) { cb = function () { }; }
                lids.forEach(function (l) {
                    l.animate({ cy: config.begin }, 200, function () {
                        l.attr({ cy: config.original });
                        cb();
                        return;
                    });
                });
            };
            return arg ? smileForward : smileBackward;
        }
    };
};
var ZombieComponent = /** @class */ (function (_super) {
    __extends(ZombieComponent, _super);
    function ZombieComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'zombie', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.renderer = renderer;
        return _this;
    }
    ZombieComponent.prototype.ngAfterViewInit = function () {
        this.snap = aniamtions.bind(this)(this.getRoot().element);
        var anims = {
            lid: {
                close: function (l, cb) { return l.animate({ cy: 97.54, }, 42, cb); },
                open: function (l, cb) { return l.animate({ cy: 64, }, 84, cb); },
            },
            pupil: {
                left: function (instance, cb) {
                    var cx = instance.attr().cx;
                    instance.animate({ cx: Number(cx) - 10 }, 100, cb);
                    return;
                },
                right: function (instance, cb) {
                    var cx = instance.attr().cx;
                    instance.animate({ cx: Number(cx) + 10 }, 250, cb);
                    return;
                }
            }
        };
        this.loadAnimations(anims);
        var pupils = this.getParts(function (p) { return p.name === 'pupil'; });
        var scheme = [
            'pupilsGoLeft',
            'pupilsGoRight'
        ];
        var animations = {
            pupilsGoLeft: function () { return pupils.forEach(function (l) {
                l.animations.run('left');
                return l.animations;
            }); },
            pupilsGoRight: function (cb) { return pupils.forEach(function (l) {
                l.animations.run('right');
                cb(l.animations);
                return;
            }); },
        };
        var seq = new __WEBPACK_IMPORTED_MODULE_3__animation_animation_sequence_controller__["a" /* AnimationSequenceController */](scheme, animations);
        // seq.run(1000);
        // console.time('clear');
        //
        // setTimeout(() => {
        //   seq.clear();
        //   console.timeEnd('clear');
        // }, 3200);
    };
    // isOnMonster(top, right, bootom, left) {
    //   console.log(Snap.getElementByPoint(top, left));
    //   return;
    // }
    ZombieComponent.prototype.loadAnimations = function (animations) {
        var _this = this;
        var partNames = Object.keys(animations);
        partNames.forEach(function (name) {
            _this.getParts(function (part) { return part.name === name; })
                .forEach(function (part) {
                return part.setAnimations(new __WEBPACK_IMPORTED_MODULE_2__animation_animation_set_controller__["a" /* AnimationSetController */](__WEBPACK_IMPORTED_MODULE_4_imports_loader_this_window_fix_module_exports_0_snapsvg_dist_snap_svg_js___default()(part.element), animations[name]));
            });
        });
    };
    ZombieComponent.prototype.animate = function (name) {
        return name ? this.snap[name] : true;
    };
    ZombieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'zombie',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/zombie/zombie.html"*/'<svg monster-part part-type="root" width="100%" height="100%" preserveAspectRatio="xMaxYMax meet" viewBox="-20 -30 273.58 339.24" class="zombie svg-container" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="290" height="290" y="-20" x="-35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.39 251.69">\n    <circle class="confetti--color--pink" cx="104.51" cy="15.18" r="4.97" transform="translate(12.76 67.46) rotate(-37.94)"/>\n    <circle class="confetti--color--pink" cx="9.18" cy="147.18" r="4.97" transform="translate(-88.55 36.75) rotate(-37.94)"/>\n    <circle class="confetti--color--pink" cx="219.18" cy="73.18" r="4.97" transform="translate(1.33 150.22) rotate(-37.94)"/>\n    <circle class="confetti--color--pink" cx="238.51" cy="133.85" r="4.97" transform="translate(-31.89 174.93) rotate(-37.94)"/>\n    <circle class="confetti--color--pink" cx="37.85" cy="246.51" r="4.97" transform="translate(-143.56 75.37) rotate(-37.94)"/>\n    <circle class="confetti--color--yellow" cx="66.6" cy="20.9" r="4.97" transform="translate(1.23 45.36) rotate(-37.94)"/>\n    <circle class="confetti--color--yellow" cx="15.18" cy="71.18" r="4.97" transform="translate(-40.55 24.38) rotate(-37.94)"/>\n    <circle class="confetti--color--yellow" cx="23.76" cy="125.46" r="4.97" transform="translate(-72.11 41.12) rotate(-37.94)"/>\n    <circle class="confetti--color--yellow" cx="13.76" cy="187.46" r="4.97" transform="translate(-112.35 48.08) rotate(-37.94)"/>\n    <circle class="confetti--color--yellow" cx="244.43" cy="185.46" r="4.97" transform="translate(-62.37 189.48) rotate(-37.94)"/>\n    <circle class="confetti--color--yellow" cx="235.76" cy="48.79" r="4.97" transform="translate(19.83 155.26) rotate(-37.94)"/>\n    <circle class="confetti--color--yellow" cx="196.43" cy="24.79" r="4.97" transform="translate(26.27 126.01) rotate(-37.94)"/>\n    <circle class="confetti--color--blue" cx="125.85" cy="10.51" r="7.18" transform="translate(20.13 79.59) rotate(-37.94)"/>\n    <circle class="confetti--color--blue" cx="44.51" cy="7.18" r="7.18" transform="translate(4.99 28.88) rotate(-37.94)"/>\n    <circle class="confetti--color--blue" cx="7.18" cy="212.51" r="7.18" transform="translate(-129.14 49.33) rotate(-37.94)"/>\n    <circle class="confetti--color--blue" cx="224.51" cy="121.85" r="7.18" transform="translate(-27.47 163.79) rotate(-37.94)"/>\n    <circle cx="87.85" cy="45.18" r="7.18" transform="translate(-9.21 63.56) rotate(-37.94)"/>\n    <circle cx="21.18" cy="100.51" r="7.18" transform="translate(-57.32 34.26) rotate(-37.94)"/>\n    <circle cx="29.85" cy="215.18" r="7.18" transform="translate(-125.99 63.83) rotate(-37.94)"/>\n    <circle cx="20.51" cy="244.51" r="7.18" transform="translate(-146 64.29) rotate(-37.94)"/>\n    <circle cx="220.51" cy="23.85" r="7.18" transform="translate(31.94 140.62) rotate(-37.94)"/>\n    <circle cx="199.85" cy="53.85" r="7.18" transform="translate(9.13 134.25) rotate(-37.94)"/>\n    <circle cx="233.85" cy="99.18" r="7.18" transform="translate(-11.56 164.74) rotate(-37.94)"/>\n    <circle cx="231.18" cy="168.51" r="7.18" transform="translate(-54.75 177.75) rotate(-37.94)"/>\n  </svg>\n\n      <g monster-part part-name="outer" part-type="group" class="">\n        <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n        <path monster-part part-name="body" part-type="group" part-outline="true" class="body" d="M260.9,280.8c0-64.94-53.13-118.07-118.07-118.07h0c-64.94,0-118.07,53.13-118.07,118.07V539.15H260.9Z"></path>\n        <g monster-part part-group="body" part-type="container"></g>\n        <g class="head" monster-part part-outline="true">\n          <g monster-part part-name="head-figure" part-type="group" class="head-figure">\n            <g monster-part part-name="hair" part-type="group"  class="hair">\n              <polygon points="132.33 -0.05 96.08 48.13 87.64 48.13 79.21 48.13 132.33 -0.05" class="hair-part"></polygon>\n              <polygon points="145.47 -0.05 109.21 48.13 100.78 48.13 92.34 48.13 145.47 -0.05" class="hair-part"></polygon>\n              <polygon points="158.6 -0.05 122.35 48.13 113.91 48.13 105.48 48.13 158.6 -0.05" class="hair-part"></polygon>\n            </g>\n            <rect x="18.13" y="47.84" width="168.14" height="168.14" rx="52.98" ry="52.98" class="face"></rect>\n          </g>\n\n          <g monster-part part-name="ears" part-type="group" part-hidden="true" visibility="hidden" class="ears">\n            <ellipse xmlns="http://www.w3.org/2000/svg" class="ear" cx="190" cy="127.84" rx="11" ry="13.33"/>\n          </g>\n          <g monster-part part-group="ears" part-type="container"></g>\n\n          <g monster-part part-name="eyes" part-type="group" class="eyes">\n            <g monster-part part-name="eye" part-name-mod="left" part-type="group" part-group="eyes" class="eye eye--left">\n              <ellipse class="eyeball" cx="66.08" cy="97.54" rx="27.81" ry="16.86"></ellipse>\n              <circle monster-part part-name="pupil" part-name-mod="left" part-type="element" part-group="eye" class="pupil pupil--left" cx="74.18" cy="97.32" r="8.32"></circle>\n            </g>\n            <g monster-part part-name="eye" part-name-mod="right" part-type="group" part-group="eyes" class="eye eye--right">\n              <ellipse class="eyeball" cx="135.7" cy="97.54" rx="27.81" ry="16.86"></ellipse>\n              <circle monster-part part-name="pupil" part-name-mod="right" part-type="element" part-group="eye" class="pupil pupil--right" cx="142.93" cy="97.32" r="8.32"></circle>\n            </g>\n          </g>\n\n          <svg width="151.25" height="27.66" x="25" y="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.93 26.58">\n            <g monster-part part-name="eyelashes" part-type="group" part-hidden="true" visibility="hidden" class="eyelashes">\n              <line class="eyelash" x1="0.71" y1="10.71" x2="15.87" y2="25.87"/>\n              <line class="eyelash" x1="2.37" y1="5.71" x2="17.54" y2="20.87"/>\n              <line class="eyelash" x1="4.04" y1="0.71" x2="19.21" y2="15.87"/>\n              <line class="eyelash" x1="119.72" y1="15.87" x2="134.89" y2="0.71"/>\n              <line class="eyelash" x1="121.39" y1="20.87" x2="136.55" y2="5.71"/>\n              <line class="eyelash" x1="123.05" y1="25.87" x2="138.22" y2="10.71"/>\n            </g>\n          </svg>\n\n          <g monster-part part-name="eyes-animation">\n            <clipPath id="eyeball--left-mask">\n              <ellipse class="" cx="66.08" cy="97.54" rx="27.81" ry="16.86"></ellipse>\n            </clipPath>\n            <ellipse monster-part part-name="lid" part-name-mod="left" part-type="element" part-group="eye" clip-path="url(#eyeball--left-mask)" class="eyeball eyeball--lid eyeball--left" cx="66.08" cy="64" rx="27.81" ry="16.86"></ellipse>\n\n            <clipPath id="eyeball--right-mask">\n              <ellipse class="" cx="135.7" cy="97.54" rx="27.81" ry="16.86"></ellipse>\n            </clipPath>\n            <ellipse monster-part part-name="lid" part-name-mod="right" part-type="element" part-group="eye" clip-path="url(#eyeball--right-mask)" class="eyeball eyeball--lid eyeball--right" cx="135.7" cy="64" rx="27.81" ry="16.86"></ellipse>\n          </g>\n          <g monster-part part-group="eyes" part-type="container"></g>\n          <g monster-part part-name="mouth" part-type="group">\n            <path monster-part part-name="mouth" part-type="element" d="M102.43,194c15.36,0,27.81-7.55,27.81-16.86H74.62C74.62,186.43,87.07,194,102.43,194Z" class="mouth"></path>\n          </g>\n          <g class="steams">\n            <g class="steam steam--left">\n             <line class="steam-part" x1="40.51" y1="170.93" x2="74.57" y2="204.99"></line>\n             <line class="steam-part" x1="50.73" y1="173.71" x2="43.3" y2="181.14"></line>\n             <line class="steam-part" x1="55.99" y1="178.98" x2="48.56" y2="186.41"></line>\n             <line class="steam-part" x1="61.26" y1="184.24" x2="53.84" y2="191.67"></line>\n             <line class="steam-part" x1="66.52" y1="189.5" x2="59.09" y2="196.94"></line>\n             <line class="steam-part" x1="71.79" y1="194.77" x2="64.35" y2="202.2"></line>\n            </g>\n\n            <g monster-part part-group="mouth" part-type="container"></g>\n\n            <g class="steam steam--right">\n              <line x1="128.09" y1="159.01" x2="162.15" y2="124.95" class="steam-part"></line>\n              <line x1="130.88" y1="148.79" x2="138.31" y2="156.22" class="steam-part"></line>\n              <line x1="136.14" y1="143.53" x2="143.57" y2="150.96" class="steam-part"></line>\n              <line x1="141.4" y1="138.26" x2="148.84" y2="145.69" class="steam-part"></line>\n              <line x1="146.67" y1="133" x2="154.1" y2="140.43" class="steam-part"></line>\n              <line x1="151.93" y1="127.74" x2="159.36" y2="135.17" class="steam-part"></line>\n            </g>\n          </g>\n          <g monster-part part-group="nose" part-type="container"></g>\n          <g monster-part part-name="nose" part-type="group">\n            <path monster-part part-outline="true" d="M19.21,122.49A19.3,19.3,0,0,0,0,141.74H0A19.3,19.3,0,0,0,19.21,161h83.43v-38.5Z" class="nose"></path>\n          </g>\n          <g monster-part part-group="head-figure" part-type="container"></g>\n\n        </g>\n\n        <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n      </g>\n    </svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/zombie/zombie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], ZombieComponent);
    return ZombieComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=zombie.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterPartDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__(303);
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
        this.hidden = false;
        this.id = __WEBPACK_IMPORTED_MODULE_1_uuid___default()();
        this.element = el.nativeElement;
    }
    MonsterPartDirective.prototype.setAnimations = function (controller) {
        this.animations = controller;
        return;
    };
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('part-outline'),
        __metadata("design:type", Boolean)
    ], MonsterPartDirective.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('part-hidden'),
        __metadata("design:type", Boolean)
    ], MonsterPartDirective.prototype, "hidden", void 0);
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
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkeletonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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
    function SkeletonComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'skeleton', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    SkeletonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'skeleton',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/skeleton/skeleton.html"*/'<svg class="skeleton svg-container" viewBox="-20 -30 240.62 352.01" preserveAspectRatio="xMidYMax meet" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="296.715" height="360" y="-20" x="-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226.5 274.1">\n    <circle class="confetti--color--yellow" cx="21.58" cy="35.85" r="3.58" transform="translate(-20 31.23) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="3.58" cy="67.85" r="3.58" transform="translate(-52.5 29.5) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="35.58" cy="88.51" r="3.58" transform="translate(-56.35 63.04) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="14.25" cy="135.18" r="3.58" transform="translate(-101.81 64.42) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="192.92" cy="100.51" r="3.58" transform="translate(-4.09 192.75) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="222.92" cy="96.51" r="3.58" transform="translate(10.87 215.02) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="198.25" cy="47.18" r="3.58" transform="translate(40.38 176.04) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="190.25" cy="133.18" r="3.58" transform="translate(-31.09 203.46) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="207.58" cy="151.85" r="3.58" transform="translate(-39.12 224.57) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="216.92" cy="205.85" r="3.58" transform="translate(-78.35 253.19) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="171.58" cy="183.18" r="3.58" transform="translate(-78.15 208.27) rotate(-52.61)"/>\n    <circle class="confetti--color--yellow" cx="212.92" cy="270.51" r="3.58" transform="translate(-131.3 275.41) rotate(-52.61)"/>\n    <circle class="confetti--color--blue" cx="33.58" cy="19.18" r="5.18" transform="translate(-2.05 34.22) rotate(-52.61)"/>\n    <circle class="confetti--color--blue" cx="11.58" cy="97.85" r="5.18" transform="translate(-73.19 47.63) rotate(-52.61)"/>\n    <circle class="confetti--color--blue" cx="42.92" cy="117.18" r="5.18" transform="translate(-76.25 80.12) rotate(-52.61)"/>\n    <circle class="confetti--color--blue" cx="11.58" cy="167.18" r="5.18" transform="translate(-128.28 74.87) rotate(-52.61)"/>\n    <circle class="confetti--color--blue" cx="184.92" cy="161.85" r="5.18" transform="translate(-55.96 210.49) rotate(-52.61)"/>\n    <circle class="confetti--color--blue" cx="214.25" cy="230.51" r="5.18" transform="translate(-99 260.76) rotate(-52.61)"/>\n    <circle class="confetti--color--blue" cx="12.92" cy="253.18" r="5.18" transform="translate(-196.08 109.7) rotate(-52.61)"/>\n    <circle class="confetti--color--blue" cx="209.58" cy="118.51" r="5.18" transform="translate(-11.85 213.07) rotate(-52.61)"/>\n    <circle class="confetti--color--red" cx="40.92" cy="149.18" r="5.18" transform="translate(-102.46 91.1) rotate(-52.61)"/>\n    <circle class="confetti--color--red" cx="22.92" cy="63.18" r="5.18" transform="translate(-41.2 43.02) rotate(-52.61)"/>\n    <circle class="confetti--color--red" cx="11.58" cy="13.18" r="5.18" transform="translate(-5.92 14.38) rotate(-52.61)"/>\n    <circle class="confetti--color--red" cx="70.92" cy="5.18" r="5.18" transform="translate(23.74 58.38) rotate(-52.61)"/>\n    <circle class="confetti--color--red" cx="212.92" cy="22.51" r="5.18" transform="translate(65.74 178.01) rotate(-52.61)"/>\n    <circle class="confetti--color--red" cx="211.58" cy="70.51" r="5.18" transform="translate(27.08 195.8) rotate(-52.61)"/>\n    <circle class="confetti--color--red" cx="172.92" cy="117.18" r="5.18" transform="translate(-25.19 183.41) rotate(-52.61)"/>\n    <circle class="confetti--color--red" cx="212.92" cy="177.18" r="5.18" transform="translate(-57.15 238.76) rotate(-52.61)"/>\n    <circle class="confetti--color--red" cx="12.92" cy="211.18" r="5.18" transform="translate(-162.71 93.21) rotate(-52.61)"/>\n  </svg>\n\n   <g monster-part part-name="outer" part-type="group" class="">\n    <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n    <g monster-part part-name="body" part-type="group" part-outline="true" class="body">\n        <rect class="rib" y="227.64" width="200.62" height="21.55"></rect>\n        <rect class="rib" y="264.11" width="200.62" height="21.55"></rect>\n        <rect class="rib" y="300.59" width="200.62" height="21.55"></rect>\n    </g>\n    <g monster-part part-group="body" part-type="container"></g>\n    <g class="head">\n         <ellipse monster-part part-name="head-figure" part-type="group" class="head head--figure" cx="99.95" cy="67.37" rx="89.2" ry="67.38"></ellipse>\n         <g class="content">\n          <g monster-part part-name="ears" part-type="group" part-hidden="true" visibility="hidden" part-outline="true" class="ears">\n            <ellipse class="ear" cx="15" cy="90" rx="11" ry="13.33"/>\n            <ellipse class="ear" cx="186" cy="90" rx="11" ry="13.33"/>\n          </g>\n          <g monster-part part-group="ears" part-type="container"></g>\n\n            <g monster-part part-name="mouth" part-type="group" class="jaws">\n               <g class="jaw jaw--top">\n                  <rect class="jaw" x="43.33" y="95.52" width="113.24" height="63.9"></rect>\n                  <g monster-part part-name="teeth" part-type="group" class="teeth">\n                     <rect class="tooth" x="53.24" y="143.29" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="69.77" y="143.29" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="86.3" y="143.29" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="102.83" y="143.29" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="119.37" y="143.29" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="135.9" y="143.29" width="10.75" height="10.75"></rect>\n                  </g>\n               </g>\n               <g class="jaw jaw--bottom">\n                  <rect class="jaw" x="43.33" y="169.54" width="113.24" height="28.52"></rect>\n                  <g monster-part part-name="hidden-jaw" part-type="group" part-hidden="true" visibility="hidden">\n                    <rect class="jaw" x="43.33" y="149.54" width="113.24" height="28.52"></rect>\n                  </g>\n                  <g monster-part part-name="teeth" part-type="group" class="teeth">\n                     <rect class="tooth" x="53.24" y="178.43" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="69.77" y="178.43" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="86.3" y="178.43" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="102.83" y="178.43" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="119.37" y="178.43" width="10.75" height="10.75"></rect>\n                     <rect class="tooth" x="135.9" y="178.43" width="10.75" height="10.75"></rect>\n                  </g>\n               </g>\n            </g>\n            <svg width="139.9" height="25.56" x="30" y="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.32 20.25">\n              <g monster-part part-name="eyelashes" part-type="group" part-hidden="true" visibility="hidden" class="eyelashes">\n                <line class="eyelash" x1="0.71" y1="8.19" x2="12.06" y2="19.54"/>\n                <line class="eyelash" x1="1.95" y1="4.45" x2="13.3" y2="15.8"/>\n                <line class="eyelash" x1="3.2" y1="0.71" x2="14.55" y2="12.06"/>\n                <line class="eyelash" x1="89.77" y1="12.06" x2="101.12" y2="0.71"/>\n                <line class="eyelash" x1="91.02" y1="15.8" x2="102.37" y2="4.45"/>\n                <line class="eyelash" x1="92.26" y1="19.54" x2="103.61" y2="8.19"/>\n              </g>\n            </svg>\n            <g monster-part part-name="eyes" part-type="group" class="eyes">\n               <g monster-part part-name="eye" part-name-mod="left" part-type="group" part-group="eyes" class="eye eye--right">\n                  <circle class="eyeball" cx="129.44" cy="66.37" r="25.31"></circle>\n                  <circle class="pupil" cx="136.88" cy="58.14" r="10.09"></circle>\n               </g>\n               <g monster-part part-name="eye" part-name-mod="right" part-type="group" part-group="eyes" class="eye eye--left">\n                  <circle class="eyeball" cx="70.45" cy="66.37" r="25.31"></circle>\n                  <circle class="pupil" cx="72.84" cy="76.61" r="10.09"></circle>\n               </g>\n            </g>\n            <g monster-part part-group="mouth" part-type="container"></g>\n            <g monster-part part-group="eyes" part-type="container"></g>\n            <g monster-part part-group="nose" part-type="container"></g>\n            <g monster-part part-name="nose" part-type="group">\n              <polygon class="nose" points="99.95 91.72 112.37 113.24 124.8 134.76 99.95 134.76 75.09 134.76 87.52 113.24 99.95 91.72"></polygon>\n            </g>\n         </g>\n         <g monster-part part-group="head-figure" part-type="container"></g>\n    </g>\n\n    <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n   </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/skeleton/skeleton.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], SkeletonComponent);
    return SkeletonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=skeleton.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlienComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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
    function AlienComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'alien', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    AlienComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alien',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/alien/alien.html"*/'<svg class="alien svg-container" preserveAspectRatio="xMidYMax meet" viewBox="-20 -40 205.37 342.36" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n	<svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="264.596" height="321.1" y="-60" x="-42" viewBox="0 0 228.1 276.81" xmlns="http://www.w3.org/2000/svg">\n		<circle class="confetti--color--purple" cx="175.8" cy="39.96" r="2.92" transform="translate(61.28 179.2) rotate(-63.37)"/>\n		<circle class="confetti--color--purple" cx="194.19" cy="132.36" r="2.92" transform="translate(-11.17 246.62) rotate(-63.37)"/>\n		<circle class="confetti--color--purple" cx="224.86" cy="111.15" r="2.92" transform="translate(24.71 262.33) rotate(-63.37)"/>\n		<circle class="confetti--color--purple" cx="187.58" cy="163.72" r="2.92" transform="translate(-42.85 258.01) rotate(-63.37)"/>\n		<circle class="confetti--color--purple" cx="61.52" cy="41.69" r="2.92" transform="translate(-3.32 78) rotate(-63.37)"/>\n		<circle class="confetti--color--purple" cx="2.92" cy="25.05" r="2.92" transform="translate(-20.79 16.43) rotate(-63.37)"/>\n		<circle class="confetti--color--purple" cx="46.86" cy="177.69" r="2.92" transform="translate(-132.99 139.93) rotate(-63.37)"/>\n		<circle class="confetti--color--purple" cx="165.5" cy="205.75" r="2.92" transform="translate(-92.61 261.46) rotate(-63.37)"/>\n		<circle class="confetti--color--purple" cx="37.5" cy="244.42" r="2.92" transform="translate(-197.8 168.38) rotate(-63.37)"/>\n		<circle class="confetti--color--purple" cx="203.62" cy="84.67" r="2.92" transform="translate(36.66 228.74) rotate(-63.37)"/>\n		<circle class="confetti--color--yellow" cx="176.17" cy="4.22" r="4.21" transform="translate(93.43 159.8) rotate(-63.37)"/>\n		<circle class="confetti--color--yellow" cx="100.62" cy="38.25" r="4.21" transform="translate(21.33 111.05) rotate(-63.37)"/>\n		<circle class="confetti--color--yellow" cx="192.28" cy="62.29" r="4.21" transform="translate(50.41 206.25) rotate(-63.37)"/>\n		<circle class="confetti--color--yellow" cx="11.09" cy="180.47" r="4.21" transform="translate(-155.21 109.49) rotate(-63.37)"/>\n		<circle class="confetti--color--yellow" cx="223.89" cy="137.99" r="4.21" transform="translate(0.18 276.27) rotate(-63.37)"/>\n		<circle class="confetti--color--yellow" cx="174.08" cy="244.59" r="4.21" transform="translate(-122.59 290.56) rotate(-63.37)"/>\n		<circle class="confetti--color--yellow" cx="208.08" cy="265.26" r="4.21" transform="translate(-122.31 332.36) rotate(-63.37)"/>\n		<circle class="confetti--color--yellow" cx="38.08" cy="272.59" r="4.21" transform="translate(-222.66 184.44) rotate(-63.37)"/>\n		<circle class="confetti--color--yellow" cx="29.52" cy="34.36" r="4.21" transform="translate(-14.42 45.35) rotate(-63.37)"/>\n		<circle class="confetti--color--yellow" cx="51.52" cy="215.03" r="4.21" transform="translate(-163.79 164.7) rotate(-63.37)"/>\n		<circle class="confetti--color--red" cx="214.86" cy="27.69" r="4.41" transform="translate(93.79 207.34) rotate(-63.37)"/>\n		<circle class="confetti--color--red" cx="6.19" cy="57.69" r="4.41" transform="translate(-48.16 37.36) rotate(-63.37)"/>\n		<circle class="confetti--color--red" cx="18.86" cy="136.36" r="4.41" transform="translate(-111.49 92.09) rotate(-63.37)"/>\n		<circle class="confetti--color--red" cx="195.52" cy="235.03" r="4.41" transform="translate(-102.21 304.45) rotate(-63.37)"/>\n		<circle class="confetti--color--red" cx="10.91" cy="231.71" r="4.41" transform="translate(-201.11 137.6) rotate(-63.37)"/>\n		<circle class="confetti--color--red" cx="222.6" cy="172.1" r="4.41" transform="translate(-31.02 293.94) rotate(-63.37)"/>\n		<circle class="confetti--color--red" cx="167.52" cy="176.36" r="4.41" transform="translate(-65.22 247.06) rotate(-63.37)"/>\n	</svg>\n\n	<g monster-part part-name="outer" part-type="group" class="">\n		<g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n		<g monster-part part-name="body" part-type="group" part-outline="true" >\n			<ellipse class="body body--figure" cx="82.66" cy="285.78" rx="50.36" ry="139.24"></ellipse>\n		</g>\n\n		<g class="head">\n			<path monster-part part-name="head-figure" part-type="group" class="head head--figure" d="M82.67,153.65a39.12,39.12,0,0,1-33.88-19.56L5.25,58.69A39.13,39.13,0,0,1,39.13,0H126.2a39.13,39.13,0,0,1,33.88,58.69l-43.53,75.4A39.13,39.13,0,0,1,82.67,153.65Z"></path>\n			<g class="content">\n				<g  monster-part part-name="ears" part-type="group" part-hidden="true" visibility="hidden" class="ears">\n					<ellipse class="ear" cx="2" cy="60" rx="11" ry="13.33"/>\n					<ellipse class="ear" cx="163" cy="60" rx="11" ry="13.33"/>\n				</g>\n        <g monster-part part-group="ears" part-type="container"></g>\n\n				<g monster-part part-name="mouth" part-type="group">\n					<path monster-part part-name="mouth" part-type="element" part-group="mouth" class="mouth" d="M82.66,131.54a2.83,2.83,0,0,1-2.45-1.41l-3.15-5.45a2.83,2.83,0,0,1,2.45-4.24h6.29a2.83,2.83,0,0,1,2.45,4.24l-3.15,5.45A2.83,2.83,0,0,1,82.66,131.54Z"></path>\n				</g>\n				<g monster-part part-name="eyes" part-type="group" class="eyes">\n					<g monster-part part-name="eye" part-name-mod="left" part-type="group" part-group="eyes" class="eye eye--left">\n						<path class="eyeball" d="M25.19,26.89A52.14,52.14,0,0,0,77.36,79.06,52.14,52.14,0,0,0,25.19,26.89Z"></path>\n						<circle class="iris" cx="51.86" cy="53.61" r="15.32"></circle>\n						<circle class="pupil" cx="51.86" cy="53.61" r="7.21"></circle>\n					</g>\n					<g monster-part part-name="eye" part-name-mod="right" part-type="group" part-group="eyes" class="eye eye--right">\n						<path class="eyeball" d="M140.14,26.89A52.14,52.14,0,0,0,88,79.06,52.14,52.14,0,0,0,140.14,26.89Z"></path>\n						<circle class="iris" cx="113.53" cy="53.61" r="15.32"></circle>\n						<circle class="pupil" cx="113.53" cy="53.61" r="4.75"></circle>\n					</g>\n				</g>\n        <g monster-part part-group="eyes" part-type="container"></g>\n				<g monster-part part-name="nose" part-type="group" class="nose">\n					<circle class="nostril nostril--left" cx="76.75" cy="99.18" r="2.49"></circle>\n					<circle class="nostril nostril--right" cx="88.6" cy="99.18" r="2.49"></circle>\n				</g>\n			</g>\n			<g monster-part part-group="head-figure" part-type="container"></g>\n			<g monster-part part-group="mouth" part-type="container"></g>\n			<g monster-part part-group="nose" part-type="container"></g>\n		</g>\n\n		<g monster-part part-group="body" part-type="container"></g>\n\n		<g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n	</g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/alien/alien.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], AlienComponent);
    return AlienComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=alien.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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


var BedComponent = /** @class */ (function (_super) {
    __extends(BedComponent, _super);
    function BedComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'bed', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    BedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bed',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/bed/bed.html"*/'<svg class="bed svg-container" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-10 -20 225.284 289.38">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="239.83" height="261.83" y="-25" x="0" viewBox="0 0 239.83 261.83" xmlns="http://www.w3.org/2000/svg">\n    <circle class="confetti--color--yellow" cx="89.41" cy="9.91" r="3.4" transform="translate(20.79 68.09) rotate(-46.62)"/>\n    <circle class="confetti--color--yellow" cx="187.41" cy="50.91" r="3.4" transform="translate(21.68 152.15) rotate(-46.62)"/>\n    <circle class="confetti--color--yellow" cx="133.88" cy="55.25" r="3.4" transform="translate(1.77 114.61) rotate(-46.62)"/>\n    <circle class="confetti--color--yellow" cx="158.88" cy="80.25" r="3.4" transform="translate(-8.57 140.6) rotate(-46.62)"/>\n    <circle class="confetti--color--yellow" cx="189.38" cy="254.75" r="3.4" transform="translate(-125.84 217.41) rotate(-46.62)"/>\n    <circle class="confetti--color--yellow" cx="226.91" cy="16.41" r="3.4" transform="translate(59.13 170.06) rotate(-46.62)"/>\n    <circle class="confetti--color--yellow" cx="11.91" cy="111.91" r="3.4" transform="translate(-77.61 43.7) rotate(-46.62)"/>\n    <circle class="confetti--color--yellow" cx="5.41" cy="54.91" r="3.4" transform="translate(-38.22 21.13) rotate(-46.62)"/>\n    <circle class="confetti--color--yellow" cx="56.41" cy="221.41" r="3.4" transform="translate(-143.26 110.33) rotate(-46.62)"/>\n    <circle class="confetti--color--yellow" cx="79.91" cy="245.41" r="3.4" transform="translate(-153.34 134.93) rotate(-46.62)"/>\n    <circle class="confetti--color--yellow" cx="10.41" cy="254.91" r="3.4" transform="translate(-182.01 87.39) rotate(-46.62)"/>\n    <circle class="confetti--color--blue" cx="128.41" cy="25.91" r="4.91" transform="translate(21.38 101.44) rotate(-46.62)"/>\n    <circle class="confetti--color--blue" cx="188.91" cy="9.91" r="4.91" transform="translate(51.95 140.4) rotate(-46.62)"/>\n    <circle class="confetti--color--blue" cx="229.41" cy="67.41" r="4.91" transform="translate(22.84 187.85) rotate(-46.62)"/>\n    <circle class="confetti--color--blue" cx="209.91" cy="245.91" r="4.91" transform="translate(-113 229.57) rotate(-46.62)"/>\n    <circle class="confetti--color--blue" cx="60.41" cy="181.41" r="4.91" transform="translate(-112.93 100.72) rotate(-46.62)"/>\n    <circle class="confetti--color--blue" cx="9.41" cy="203.41" r="4.91" transform="translate(-144.89 70.54) rotate(-46.62)"/>\n    <circle class="confetti--color--blue" cx="4.91" cy="19.41" r="4.91" transform="translate(-12.57 9.65) rotate(-46.62)"/>\n    <circle class="confetti--color--blue" cx="190.41" cy="80.41" r="4.91" transform="translate(1.18 163.57) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="110.41" cy="4.91" r="4.91" transform="translate(31 81.79) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="157.91" cy="48.41" r="4.91" transform="translate(14.26 129.93) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="228.91" cy="45.41" r="4.91" transform="translate(38.68 180.59) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="172.41" cy="21.91" r="4.91" transform="translate(38.06 132.17) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="234.91" cy="256.91" r="4.91" transform="translate(-113.16 251.18) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="133.41" cy="252.91" r="4.91" transform="translate(-142.04 176.16) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="56.91" cy="244.91" r="4.91" transform="translate(-160.18 118.06) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="11.91" cy="176.41" r="4.91" transform="translate(-124.48 63.9) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="15.41" cy="84.41" r="4.91" transform="translate(-56.52 37.64) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="4.91" cy="138.41" r="4.91" transform="translate(-99.06 46.91) rotate(-46.62)"/>\n  </svg>\n\n  <g monster-part part-name="outer" part-type="group" class="">\n    <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n    <g class="monster">\n      <g monster-part part-group="flower" part-type="container"></g>\n\n      <g monster-part part-group="body" part-type="container"></g>\n\n      <g monster-part part-name="body" part-type="group" part-outline="true" class="body">\n        <rect x="130.76" y="206.74" width="117.63" height="23.46" rx="11.73" ry="11.73"/>\n        <rect x="130.76" y="215.26" width="6.04" height="34.12" rx="3.02" ry="3.02"/>\n        <rect x="138.11" y="215.26" width="6.04" height="34.12" rx="3.02" ry="3.02"/>\n        <rect x="145.45" y="215.26" width="6.04" height="34.12" rx="3.02" ry="3.02"/>\n        <rect x="152.8" y="207.67" width="6.04" height="30.92" rx="3.02" ry="3.02"/>\n      </g>\n\n      <g monster-part part-name="flower" part-type="group">\n        <g monster-part part-name="head-figure" part-type="group">\n          <ellipse class="head-figure" cx="89.06" cy="176.45" rx="38.45" ry="62.44"/>\n        </g>\n      </g>\n\n      <g monster-part part-name="mouth" part-type="group" class="mouth">\n        <polygon class="tooth" points="72.44 221 70.86 211.2 74.03 211.2 72.44 221"/>\n        <polygon class="tooth" points="77.53 221 75.95 211.2 79.12 211.2 77.53 221"/>\n        <polygon class="tooth" points="82.63 221 81.04 211.2 84.21 211.2 82.63 221"/>\n      </g>\n\n      <g monster-part part-name="nose" part-type="group" class="nose">\n        <circle class="nostril" cx="74.79" cy="191.75" r="1.44"/>\n        <circle class="nostril" cx="80.28" cy="191.75" r="1.44"/>\n      </g>\n\n      <g monster-part part-name="eyes" part-type="group" class="eyes">\n        <g class="eye eye--left">\n          <path class="eyeball" d="M56.66,176.28a13.34,13.34,0,0,0,18.88,0A13.34,13.34,0,0,0,56.66,176.28Z" transform="translate(0 -0.4)"/>\n          <circle class="iris" cx="66.1" cy="175.87" r="3.99"/>\n        </g>\n\n         <g class="eye eye--right">\n          <path class="eyeball" d="M79.53,176.28a13.34,13.34,0,0,0,18.88,0A13.34,13.34,0,0,0,79.53,176.28Z" transform="translate(0 -0.4)"/>\n          <circle class="iris" cx="88.97" cy="175.87" r="3.99"/>\n        </g>\n      </g>\n\n      <g monster-part part-group="eyes" part-type="container"></g>\n\n\n    </g>\n\n    <g class="bed">\n      <g class="sheets">\n        <rect class="sheets" x="160.18" y="-29.29" width="15.05" height="311.22" transform="translate(294.02 -41.79) rotate(90)"/>\n        <rect class="sheets" x="159.92" y="-43.93" width="15.05" height="311.22" transform="translate(279.12 -56.17) rotate(90)"/>\n        <path class="sheets" d="M17.72,20.67A84.23,84.23,0,0,0,102,104.95,84.23,84.23,0,0,0,17.72,20.67Z" transform="translate(0 -0.4)"/>\n      </g>\n\n      <g class="frame">\n        <circle class="frame" cx="10.03" cy="10.03" r="10.03"/>\n        <rect class="frame" x="2.81" y="19.26" width="15.05" height="219.75"/>\n        <rect class="frame" x="159.92" y="-14.17" width="15.05" height="311.22" transform="translate(308.88 -26.4) rotate(90)"/>\n        <rect class="frame" x="319.84" y="46.22" width="15.05" height="192.8"/>\n        <rect class="blanket" x="155.67" y="52.54" width="120.11" height="208.48" transform="translate(372.5 -59.35) rotate(90)"/>\n      </g>\n    </g>\n\n    <g monster-part part-name="ears" part-type="group" part-hidden="true" visibility="hidden" part-outline="true" class="ears">\n      <ellipse cx="48" cy="180" rx="6.2" ry="11.97"/>\n      <ellipse cx="113" cy="180" rx="6.2" ry="11.97"/>\n    </g>\n    <g monster-part part-group="ears" part-type="container"></g>\n\n    <g monster-part part-group="head-figure" part-type="container"></g>\n    <g monster-part part-group="mouth" part-type="container"></g>\n  	<g monster-part part-group="nose" part-type="container"></g>\n\n    <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n  </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/bed/bed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], BedComponent);
    return BedComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=bed.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpiderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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


var SpiderComponent = /** @class */ (function (_super) {
    __extends(SpiderComponent, _super);
    function SpiderComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'spider', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    SpiderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'spider',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/spider/spider.html"*/'<svg class="spider svg-container" viewBox="-35 80 342 243" preserveAspectRatio="xMidYMid meet" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="291.8" height="309.24" y="20" x="-20" viewBox="0 0 241.16 255.57" xmlns="http://www.w3.org/2000/svg">\n    <circle class="confetti--color--pink" cx="4.54" cy="6.49" r="4.53" transform="translate(-2.39 2.65) rotate(-26.03)"/>\n    <circle class="confetti--color--pink" cx="12.11" cy="248.54" r="4.53" transform="translate(-107.84 30.52) rotate(-26.03)"/>\n    <circle class="confetti--color--pink" cx="85.61" cy="251.04" r="4.53" transform="translate(-101.48 63.03) rotate(-26.03)"/>\n    <circle class="confetti--color--pink" cx="215.61" cy="205.04" r="4.53" transform="translate(-68.11 115.42) rotate(-26.03)"/>\n    <circle class="confetti--color--red" cx="42.11" cy="115.04" r="4.53" transform="translate(-46.21 30.15) rotate(-26.03)"/>\n    <circle class="confetti--color--red" cx="96.61" cy="4.54" r="4.53" transform="translate(7.81 42.86) rotate(-26.03)"/>\n    <circle class="confetti--color--red" cx="134.61" cy="19.54" r="4.53" transform="translate(5.08 61.05) rotate(-26.03)"/>\n    <circle class="confetti--color--red" cx="195.61" cy="107.54" r="4.53" transform="translate(-27.35 96.75) rotate(-26.03)"/>\n    <circle class="confetti--color--red" cx="164.61" cy="251.04" r="4.53" transform="translate(-93.47 97.7) rotate(-26.03)"/>\n    <circle class="confetti--color--blue" cx="45.61" cy="19.54" r="6.56" transform="translate(-3.95 22) rotate(-26.03)"/>\n    <circle class="confetti--color--blue" cx="8.61" cy="99.54" r="6.56" transform="translate(-42.81 13.87) rotate(-26.03)"/>\n    <circle class="confetti--color--blue" cx="17.11" cy="209.04" r="6.56" transform="translate(-90 28.71) rotate(-26.03)"/>\n    <circle class="confetti--color--blue" cx="230.61" cy="42.54" r="6.56" transform="translate(4.73 105.52) rotate(-26.03)"/>\n    <circle class="confetti--color--blue" cx="231.61" cy="248.54" r="6.56" transform="translate(-85.58 126.85) rotate(-26.03)"/>\n    <circle class="confetti--color--dark-blue" cx="6.61" cy="46.54" r="6.56" transform="translate(-19.75 7.62) rotate(-26.03)"/>\n    <circle class="confetti--color--dark-blue" cx="53.61" cy="239.04" r="6.56" transform="translate(-99.46 47.77) rotate(-26.03)"/>\n    <circle class="confetti--color--dark-blue" cx="227.61" cy="12.04" r="6.56" transform="translate(17.81 101.11) rotate(-26.03)"/>\n    <circle class="confetti--color--dark-blue" cx="234.61" cy="101.04" r="6.56" transform="translate(-20.54 113.21) rotate(-26.03)"/>\n    <circle class="confetti--color--dark-blue" cx="206.11" cy="235.54" r="6.56" transform="translate(-82.46 114.34) rotate(-26.03)"/>\n  </svg>\n\n   <g monster-part part-name="outer" part-type="group" class="">\n     <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n      <line class="web decor__web" x1="131.28" y1="-370.69" x2="131.28" y2="73.95"></line>\n      <g class="body">\n         <g class="legs">\n            <g class="legs-pair legs-pair--top">\n               <polyline class="leg leg--left" points="16.65 99.33 51.1 64.87 85.55 99.33"></polyline>\n               <polyline class="leg leg--left" points="16.65 119.89 51.1 85.44 85.55 119.89"></polyline>\n               <polyline class="leg leg--left" points="16.65 140.45 51.1 106 85.55 140.45"></polyline>\n               <polyline class="leg leg--right" points="179.35 99.33 213.81 64.87 248.26 99.33"></polyline>\n               <polyline class="leg leg--right" points="179.35 119.89 213.81 85.44 248.26 119.89"></polyline>\n               <polyline class="leg leg--right" points="179.35 140.45 213.81 106 248.26 140.45"></polyline>\n            </g>\n            <g class="legs-pair legs-pair--bottom">\n               <polyline class="leg leg--left" points="-28.89 218.03 19.11 170.03 67.11 218.03"></polyline>\n               <polyline class="leg leg--left" points="-28.89 246.68 19.11 198.68 67.11 246.68"></polyline>\n               <polyline class="leg leg--left" points="-28.89 275.32 19.11 227.32 67.11 275.32"></polyline>\n               <polyline class="leg leg--right" points="197.79 218.03 245.79 170.03 293.79 218.03"></polyline>\n               <polyline class="leg leg--right" points="197.79 246.68 245.79 198.68 293.79 246.68"></polyline>\n               <polyline class="leg leg--right" points="197.79 275.32 245.79 227.32 293.79 275.32"></polyline>\n            </g>\n         </g>\n\n         <g monster-part part-name="body" part-type="group" part-outline="true" class="body-figure">\n            <ellipse class="body-part body-part--colored" cx="132.45" cy="259.43" rx="74.06" ry="47.7"></ellipse>\n            <ellipse class="body-part" cx="132.45" cy="209.44" rx="74.06" ry="47.7"></ellipse>\n            <ellipse class="body-part body-part--colored" cx="132.45" cy="163.61" rx="74.06" ry="47.7"></ellipse>\n            <ellipse class="body-part" cx="132.45" cy="115.29" rx="74.06" ry="47.7"></ellipse>\n            <g class="decor">\n               <g monster-part part-name="mouth-decor" part-type="element" class="mouth decor__mouth">\n                  <polygon class="tooth" points="112.44 244.6 109.19 224.94 115.68 224.94 112.44 244.6"></polygon>\n                  <polygon class="tooth" points="126.44 244.6 123.2 224.94 129.69 224.94 126.44 244.6"></polygon>\n                  <polygon class="tooth" points="139.93 244.6 136.69 224.94 143.18 224.94 139.93 244.6"></polygon>\n                  <polygon class="tooth" points="153.94 244.6 150.69 224.94 157.18 224.94 153.94 244.6"></polygon>\n               </g>\n               <polygon class="sting decor__sting" points="130.6 327.09 127.36 307.43 133.85 307.43 130.6 327.09"></polygon>\n            </g>\n         </g>\n         <g monster-part part-group="body" part-type="container"></g>\n      </g>\n      <g monster-part part-name="head-figure" part-type="group" class="head">\n        <svg width="119.23" height="28.95" x="73" y="42" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.07 26.22">\n          <g monster-part part-name="eyelashes" part-type="group" part-hidden="true" visibility="hidden" class="eyelashes">\n            <line class="eyelash" x1="0.69" y1="10.53" x2="12.24" y2="25.7"/>\n            <line class="eyelash" x1="1.96" y1="5.53" x2="13.51" y2="20.7"/>\n            <line class="eyelash" x1="3.23" y1="0.53" x2="14.78" y2="15.7"/>\n            <line class="eyelash" x1="91.29" y1="15.7" x2="102.84" y2="0.53"/>\n            <line class="eyelash" x1="92.56" y1="20.7" x2="104.1" y2="5.53"/>\n            <line class="eyelash" x1="93.83" y1="25.7" x2="105.37" y2="10.53"/>\n          </g>\n        </svg>\n\n         <g monster-part part-name="eyes" part-type="group" class="eyes">\n            <g monster-part part-name="eye" part-name-mod="left" part-type="group" class="eye eye--left">\n               <circle class="eyeball" cx="110.35" cy="104.04" r="17.91"></circle>\n               <circle class="pupil" cx="110.35" cy="104.04" r="9.83"></circle>\n            </g>\n            <g monster-part part-name="eye" part-name-mod="right" part-type="group" class="eye eye--right">\n               <circle class="eyeball" cx="154.55" cy="104.04" r="17.91"></circle>\n               <circle class="pupil" cx="154.55" cy="104.04" r="9.83"></circle>\n            </g>\n         </g>\n         <g monster-part part-name="mouth" part-type="group"  class="mouth">\n            <polygon class="tooth" points="124.93 145.45 121.69 125.79 128.18 125.79 124.93 145.45"></polygon>\n            <polygon class="tooth" points="138.93 145.45 135.69 125.79 142.18 125.79 138.93 145.45"></polygon>\n         </g>\n         <g monster-part part-group="eyes" part-type="container"></g>\n      </g>\n\n      <g  monster-part part-name="ears" part-type="group" part-hidden="true" visibility="hidden" class="ears">\n        <ellipse cx="60" cy="125" rx="11" ry="13.33"/>\n        <ellipse cx="205" cy="125" rx="11" ry="13.33"/>\n        <ellipse cx="60" cy="210" rx="11" ry="13.33"/>\n        <ellipse cx="205" cy="210" rx="11" ry="13.33"/>\n      </g>\n      <g monster-part part-group="ears" part-type="container"></g>\n\n\n      <g monster-part part-group="head-figure" part-type="container"></g>\n      <g monster-part part-group="mouth" part-type="container"></g>\n      <g monster-part part-name="nose" part-type="group">\n        <rect fill="rgba(0,0,0,0)" x="140" y="134" width="1" height="1"></rect>\n      </g>\n      <g monster-part part-group="nose" part-type="container"></g>\n\n      <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n   </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/spider/spider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], SpiderComponent);
    return SpiderComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=spider.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VampireComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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


var VampireComponent = /** @class */ (function (_super) {
    __extends(VampireComponent, _super);
    function VampireComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'vampire', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    VampireComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vampire',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/vampire/vampire.html"*/'<svg class="dracula svg-container" viewBox="-10 -10 226.58 344.71" preserveAspectRatio="xMidYMax meet" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="288.52" height="307.32" y="0" x="-45" viewBox="0 0 240.44 256.1" xmlns="http://www.w3.org/2000/svg">\n    <circle class="confetti--color--purple" cx="24.71" cy="52.71" r="3.72" transform="translate(-31.83 38.86) rotate(-51.12)"/>\n    <circle class="confetti--color--purple" cx="50.05" cy="77.38" r="3.72" transform="translate(-41.6 67.76) rotate(-51.12)"/>\n    <circle class="confetti--color--purple" cx="5.38" cy="161.38" r="3.72" transform="translate(-123.62 64.26) rotate(-51.12)"/>\n    <circle class="confetti--color--purple" cx="9.38" cy="238.05" r="3.72" transform="translate(-181.81 95.91) rotate(-51.12)"/>\n    <circle class="confetti--color--purple" cx="188.05" cy="72.71" r="3.72" transform="translate(13.4 173.45) rotate(-51.12)"/>\n    <circle class="confetti--color--purple" cx="234.71" cy="8.71" r="3.72" transform="translate(80.59 185.95) rotate(-51.12)"/>\n    <circle class="confetti--color--purple" cx="233.38" cy="132.05" r="3.72" transform="translate(-15.91 230.82) rotate(-51.12)"/>\n    <circle class="confetti--color--purple" cx="194.71" cy="217.38" r="3.72" transform="translate(-96.73 232.49) rotate(-51.12)"/>\n    <circle class="confetti--color--purple" cx="236.71" cy="247.38" r="3.72" transform="translate(-104.45 276.35) rotate(-51.12)"/>\n    <circle class="confetti--color--purple" cx="16.05" cy="119.38" r="3.72" transform="translate(-86.95 56.93) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="5.38" cy="11.38" r="5.38" transform="translate(-6.86 8.43) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="76.71" cy="5.38" r="5.38" transform="translate(24.37 61.72) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="17.38" cy="87.38" r="5.38" transform="translate(-61.55 46.06) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="217.38" cy="102.71" r="5.38" transform="translate(0.96 207.45) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="20.71" cy="192.05" r="5.38" transform="translate(-141.78 87.61) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="202.71" cy="250.71" r="5.38" transform="translate(-119.7 251.12) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="230.05" cy="175.38" r="5.38" transform="translate(-50.88 244.36) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="60.71" cy="117.38" r="5.63" transform="translate(-68.77 90.95) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="194.71" cy="14.71" r="5.63" transform="translate(61.03 157.04) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="219.38" cy="51.38" r="5.63" transform="translate(41.67 189.89) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="194.05" cy="122.05" r="5.63" transform="translate(-22.77 196.48) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="231.58" cy="211" r="5.63" transform="translate(-78.04 258.81) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="40.25" cy="231" r="5.63" transform="translate(-164.83 117.32) rotate(-51.12)"/>\n  </svg>\n\n   <g monster-part part-name="outer" part-type="group" class="">\n      <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n      <g monster-part part-name="body" part-type="group" part-outline="true" class="body">\n         <polygon class="body-part body-part--top" points="145.49 266.49 61.06 266.49 -0.03 166.71 206.59 166.71 145.49 266.49"></polygon>\n         <polygon class="body-part body-part--bottom" points="145 266.49 61.06 266.49 -34.33 620.09 240.88 620.09 145.49 266"></polygon>\n      </g>\n      <g monster-part part-group="body" part-type="container"></g>\n      <g class="head">\n         <g monster-part part-name="head-figure" part-type="group" class="head-figure">\n            <path class="hair-part hair-part--back" d="M79.78,3.64A30.21,30.21,0,0,1,69.23,51a30.2,30.2,0,1,0,34.49,48.06A49.66,49.66,0,1,0,79.78,3.64Z"></path>\n            <ellipse class="face" cx="103.28" cy="141.3" rx="32.84" ry="101.27"></ellipse>\n            <path class="hair-part hair-part--forward" d="M115,29.3a44.77,44.77,0,0,1-44.8,44.8l9-19.38,19-19.81Z"></path>\n         </g>\n\n         <g monster-part part-name="ears" part-type="group" class="ears">\n            <ellipse class="ear ear--left" cx="71.4" cy="115.56" rx="13.66" ry="18.22"></ellipse>\n            <ellipse class="ear ear--right" cx="135.15" cy="115.56" rx="13.66" ry="18.22"></ellipse>\n         </g>\n         <g monster-part part-group="ears" part-type="container"></g>\n\n\n         <g monster-part part-name="mouth" part-type="group" class="mouth">\n            <g monster-part part-name="teeth" part-type="group" class="teeth">\n               <polygon class="tooth tooth--left" points="90.39 244.06 84.3 193.54 96.48 193.54 90.39 244.06"></polygon>\n               <polygon class="tooth tooth--right" points="116.67 244.06 110.58 193.54 122.75 193.54 116.67 244.06"></polygon>\n            </g>\n            <rect monster-part part-name="mouth-figure" part-type="element" class="mouth-figure" x="82" y="190.5" width="42.86" height="6.03"></rect>\n            <path class="blood decor__blood" d="M120.05,267.44a2.51,2.51,0,1,1-5,.13c0-1.57.9-8.55,2.27-8.59S120,265.87,120.05,267.44Z"></path>\n         </g>\n\n         <g monster-part part-group="mouth" part-type="container"></g>\n         <g monster-part part-group="nose" part-type="container"></g>\n         <g monster-part part-name="nose" part-type="group">\n           <rect class="nose" x="99.92" y="93.91" width="6.03" height="87.44"></rect>\n         </g>\n         <g monster-part part-name="eyes" part-type="group" class="eyes">\n            <circle monster-part part-name="eye" part-name-mod="left" part-type="element" part-group="eyes" class="eye eye--left" cx="88.29" cy="108.56" r="6.46"></circle>\n            <circle monster-part part-name="eye" part-name-mod="right" part-type="element" part-group="eyes" class="eye eye--right" cx="118.01" cy="108.56" r="6.46"></circle>\n            <rect class="eyebrows" x="81.9" y="89.55" width="42.86" height="6.03"></rect>\n         </g>\n         <g monster-part part-group="eyes" part-type="container"></g>\n         <g monster-part part-group="head-figure" part-type="container"></g>\n      </g>\n\n      <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n   </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/vampire/vampire.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], VampireComponent);
    return VampireComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=vampire.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WolfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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


var WolfComponent = /** @class */ (function (_super) {
    __extends(WolfComponent, _super);
    function WolfComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'wolf', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    WolfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'wolf',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/wolf/wolf.html"*/'<svg class="wolf svg-container" viewBox="20 -20 274.56 342.51" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMax meet">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="273.92" height="287.1" y="-20" x="0" viewBox="0 0 251.31 263.4" xmlns="http://www.w3.org/2000/svg">\n    <circle cx="59.71" cy="5.67" r="3.95" transform="translate(0.93 17.6) rotate(-16.89)"/>\n    <circle cx="179.21" cy="9.67" r="3.95" transform="translate(4.92 52.49) rotate(-16.89)"/>\n    <circle cx="194.21" cy="73.67" r="3.95" transform="translate(-13.03 59.61) rotate(-16.89)"/>\n    <circle cx="234.21" cy="48.67" r="3.95" transform="translate(-4.04 70.16) rotate(-16.89)"/>\n    <circle cx="236.71" cy="119.67" r="3.95" transform="translate(-24.56 73.95) rotate(-16.89)"/>\n    <circle cx="242.71" cy="195.17" r="3.95" transform="translate(-46.24 78.95) rotate(-16.89)"/>\n    <circle cx="196.21" cy="256.67" r="3.95" transform="translate(-66.12 68.09) rotate(-16.89)"/>\n    <circle cx="5.71" cy="101.67" r="3.95" transform="translate(-29.3 6.05) rotate(-16.89)"/>\n    <circle class="confetti--color--pink" cx="106.71" cy="11.67" r="3.95" transform="translate(1.21 31.51) rotate(-16.89)"/>\n    <circle class="confetti--color--pink" cx="160.36" cy="90.95" r="3.95" transform="translate(-19.51 50.52) rotate(-16.89)"/>\n    <circle class="confetti--color--pink" cx="187.86" cy="36.95" r="3.95" transform="translate(-2.63 56.18) rotate(-16.89)"/>\n    <circle class="confetti--color--pink" cx="179.36" cy="222.95" r="3.95" transform="translate(-57.05 61.74) rotate(-16.89)"/>\n    <circle class="confetti--color--pink" cx="7.86" cy="167.95" r="3.95" transform="translate(-48.47 9.53) rotate(-16.89)"/>\n    <circle class="confetti--color--pink" cx="65.86" cy="31.45" r="3.95" transform="translate(-6.3 20.49) rotate(-16.89)"/>\n    <circle class="confetti--color--pink" cx="6.36" cy="3.95" r="3.95" transform="translate(-0.87 2.02) rotate(-16.89)"/>\n    <circle class="confetti--color--pink" cx="224.86" cy="72.45" r="3.95" transform="translate(-11.35 68.47) rotate(-16.89)"/>\n    <circle class="confetti--color--pink" cx="247.36" cy="259.45" r="3.95" transform="translate(-64.72 83.08) rotate(-16.89)"/>\n    <circle cx="116.71" cy="49.17" r="3.95" transform="translate(-9.25 36.04) rotate(-16.89)"/>\n    <circle class="confetti--color--dark-yellow" cx="131.38" cy="23.67" r="5.71" transform="translate(-1.21 39.2) rotate(-16.89)"/>\n    <circle class="confetti--color--dark-yellow" cx="214.71" cy="47.34" r="5.71" transform="translate(-4.49 64.44) rotate(-16.89)"/>\n    <circle class="confetti--color--dark-yellow" cx="5.71" cy="187.17" r="5.71" transform="translate(-54.14 9.74) rotate(-16.89)"/>\n    <circle class="confetti--color--dark-yellow" cx="193.21" cy="232.67" r="5.71" transform="translate(-59.27 66.19) rotate(-16.89)"/>\n    <circle class="confetti--color--dark-yellow" cx="224.75" cy="248.83" r="5.71" transform="translate(-62.61 76.05) rotate(-16.89)"/>\n    <circle class="confetti--color--dark-blue" cx="167.21" cy="59.17" r="5.71" transform="translate(-9.98 51.14) rotate(-16.89)"/>\n    <circle class="confetti--color--dark-blue" cx="7.21" cy="142.17" r="5.71" transform="translate(-41 8.23) rotate(-16.89)"/>\n    <circle class="confetti--color--dark-blue" cx="238.71" cy="94.17" r="5.71" transform="translate(-17.06 73.43) rotate(-16.89)"/>\n    <circle class="confetti--color--dark-blue" cx="231.71" cy="8.67" r="5.71" transform="translate(7.48 67.71) rotate(-16.89)"/>\n    <circle class="confetti--color--dark-blue" cx="236.71" cy="218.67" r="5.71" transform="translate(-53.33 78.22) rotate(-16.89)"/>\n  </svg>\n\n   <g monster-part part-name="outer" part-type="group" class="">\n     <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n     <g monster-part part-name="body" part-type="group" part-outline="true">\n       <rect class="body" x="-21" y="192.5" width="194.13" height="465.27"></rect>\n     </g>\n      <g class="head">\n         <g monster-part part-name="mouth" part-type="group" class="mouth">\n            <rect monster-part part-name="tongue" part-type="element" part-group="mouth" class="tongue" x="24.31" y="119.4" width="226.72" height="55.94" rx="27.93" ry="27.97"></rect>\n            <rect monster-part part-name="jaw" part-type="element" part-group="mouth" class="jaw" x="23.78" y="175.24" width="195.57" height="20.31"></rect>\n            <rect class="cheek" x="23.78" y="106.91" width="125.28" height="74.65"></rect>\n            <g monster-part part-name="teeth" part-type="group" part-group="mouth" class="teeth">\n               <polygon class="tooth" points="205.91 175.57 199.15 119.4 212.68 119.4 205.91 175.57"></polygon>\n               <polygon class="tooth" points="184.59 175.57 177.82 119.4 191.35 119.4 184.59 175.57"></polygon>\n               <polygon class="tooth" points="163.26 175.57 156.49 119.4 170.03 119.4 163.26 175.57"></polygon>\n            </g>\n            <g monster-part part-name="drooling" part-type="group" part-group="mouth" class="drooling decor__drooling">\n               <path class="saliva" d="M221.84,134.24a2.35,2.35,0,1,1-4.65.12c0-1.47.84-8,2.13-8S221.8,132.77,221.84,134.24Z"></path>\n               <path class="saliva" d="M229.73,188.83a2.35,2.35,0,1,1-4.65.12c0-1.47.84-8,2.13-8S229.7,187.36,229.73,188.83Z"></path>\n               <path class="saliva" d="M197.77,178.05a2.35,2.35,0,1,1-4.65.12c0-1.47.84-8,2.13-8S197.73,176.58,197.77,178.05Z"></path>\n               <path class="saliva" d="M176.22,161.17a2.35,2.35,0,1,1-4.65.12c0-1.47.84-8,2.13-8S176.19,159.7,176.22,161.17Z"></path>\n            </g>\n            <g monster-part part-name="jaw-closed" part-type="group" part-hidden="true" visibility="hidden">\n              <svg width="195.56" height="86.75" x="23.8" y="106" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.57 86.75">\n                <polygon class="jaw" points="195.57 31.96 0 84 0 11.66 195.57 11.66 195.57 31.96"/>\n                <rect class="jaw" width="149.14" height="86.75"/>\n              </svg>\n            </g>\n         </g>\n\n\n\n         <polygon class="snout" points="219.34 119.39 23.78 119.39 23.78 61.81 219.34 96.35 219.34 119.39"></polygon>\n         <g monster-part part-name="ears" part-type="group" class="ears">\n           <polygon class="ear ear--left" points="46.7 0.05 23.78 56.72 69.63 56.72 46.7 0.05"></polygon>\n           <polygon class="ear ear--right" points="91.45 0.05 68.53 56.72 114.38 56.72 91.45 0.05"></polygon>\n         </g>\n         <g monster-part part-group="ears" part-type="container"></g>\n\n        <rect monster-part part-name="head-figure" part-type="group" class="face" x="23.78" y="56.1" width="125.28" height="74.65"></rect>\n\n         <g monster-part part-name="eyes" part-type="group" class="eyes">\n            <g monster-part part-name="eye" part-name-mod="left" part-type="group" part-group="eyes" class="eye eye--left">\n               <g class="eyeball">\n                  <path class="eyeball-part eyeball-part--top" d="M53.75,82.9a22.69,22.69,0,0,0,32.1,0"></path>\n                  <path class="eyeball-part eyeball-part--bottom" d="M85.86,82.9a22.69,22.69,0,0,0-32.1,0"></path>\n               </g>\n               <g class="pupil">\n                  <path class="pupil-part pupil-part--top" d="M69.8,76.25a9.41,9.41,0,0,0,0,13.31"></path>\n                  <path class="pupil-part pupil-part--bottom" d="M69.8,89.56a9.41,9.41,0,0,0,0-13.31"></path>\n               </g>\n            </g>\n            <g monster-part part-name="eye" part-name-mod="right" part-type="group" part-group="eyes" class="eye eye--right">\n               <g class="eyeball">\n                  <path class="eyeball-part eyeball-part--top" d="M95,82.9a22.69,22.69,0,0,0,32.1,0"></path>\n                  <path class="eyeball-part eyeball-part--bottom" d="M127.11,82.9a22.69,22.69,0,0,0-32.1,0"></path>\n               </g>\n               <g class="pupil">\n                  <path class="pupil-part pupil-part--top" d="M111.06,76.25a9.41,9.41,0,0,0,0,13.31"></path>\n                  <path class="pupil-part pupil-part--bottom" d="M111.06,89.56a9.41,9.41,0,0,0,0-13.31"></path>\n               </g>\n            </g>\n         </g>\n         <g monster-part part-group="eyes" part-type="container"></g>\n         <g monster-part part-group="head-figure" part-type="container"></g>\n\n      </g>\n\n      <g monster-part part-group="body" part-type="container"></g>\n      <g monster-part part-group="mouth" part-type="container"></g>\n      <g monster-part part-group="nose" part-type="container"></g>\n      <g monster-part part-name="nose" part-type="group" class="nose">\n         <circle class="nose-figure" cx="218.98" cy="95.93" r="8.93"></circle>\n      </g>\n      <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n   </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/wolf/wolf.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], WolfComponent);
    return WolfComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=wolf.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MummyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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


var MummyComponent = /** @class */ (function (_super) {
    __extends(MummyComponent, _super);
    function MummyComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'mummy', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    MummyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mummy',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/mummy/mummy.html"*/'<svg monster-part part-type="root" width="100%" height="100%" preserveAspectRatio="xMidYMax meet" class="mummy svg-container" viewBox="-20 -20 292.32 320" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="252" height="287.2628" y="-18" x="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.6 267.47">\n    <circle class="confetti--color--dark-blue" cx="16.58" cy="43.63" r="3.9" transform="translate(-27.79 29.15) rotate(-51.12)"/>\n    <circle class="confetti--color--dark-blue" cx="35.92" cy="67.63" r="3.9" transform="translate(-39.28 53.13) rotate(-51.12)"/>\n    <circle class="confetti--color--dark-blue" cx="7.92" cy="154.97" r="3.9" transform="translate(-117.68 63.85) rotate(-51.12)"/>\n    <circle class="confetti--color--dark-blue" cx="35.25" cy="178.3" r="3.9" transform="translate(-125.67 93.81) rotate(-51.12)"/>\n    <circle class="confetti--color--dark-blue" cx="15.92" cy="228.97" r="3.9" transform="translate(-172.31 97.62) rotate(-51.12)"/>\n    <circle class="confetti--color--dark-blue" cx="214.58" cy="73.63" r="3.9" transform="translate(22.56 194.44) rotate(-51.12)"/>\n    <circle class="confetti--color--dark-blue" cx="229.92" cy="133.63" r="3.9" transform="translate(-18.44 228.71) rotate(-51.12)"/>\n    <circle class="confetti--color--dark-blue" cx="202.58" cy="176.97" r="3.9" transform="translate(-62.34 223.57) rotate(-51.12)"/>\n    <circle class="confetti--color--dark-blue" cx="221.92" cy="219.63" r="3.9" transform="translate(-88.36 254.5) rotate(-51.12)"/>\n    <circle class="confetti--color--dark-blue" cx="184.58" cy="223.63" r="3.9" transform="translate(-105.37 226.93) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="28.3" cy="87.84" r="5.63" transform="translate(-57.84 54.73) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="5.63" cy="124.5" r="5.63" transform="translate(-94.82 50.73) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="38.3" cy="208.5" r="5.63" transform="translate(-148.04 107.43) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="7.63" cy="261.84" r="5.63" transform="translate(-200.97 103.41) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="228.97" cy="59.84" r="5.63" transform="translate(38.65 200.5) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="206.97" cy="11.17" r="5.63" transform="translate(68.35 165.26) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="200.3" cy="208.5" r="5.63" transform="translate(-87.74 233.53) rotate(-51.12)"/>\n    <circle class="confetti--color--yellow" cx="202.97" cy="245.84" r="5.63" transform="translate(-115.81 249.5) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="10.2" cy="82.1" r="5.63" transform="translate(-60.11 38.5) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="23.25" cy="154.3" r="5.63" transform="translate(-111.45 75.53) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="15.92" cy="189.63" r="5.63" transform="translate(-141.69 82.98) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="47.92" cy="229.63" r="5.63" transform="translate(-160.91 122.78) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="194.58" cy="66.3" r="5.63" transform="translate(20.82 176.14) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="221.92" cy="96.97" r="5.63" transform="translate(7.13 208.84) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="227.92" cy="172.3" r="5.63" transform="translate(-49.28 241.55) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="226.58" cy="252.97" r="5.63" transform="translate(-112.57 270.54) rotate(-51.12)"/>\n    <circle class="confetti--color--red" cx="173.92" cy="5.63" r="5.63" transform="translate(60.35 137.47) rotate(-51.12)"/>\n  </svg>\n\n\n<!-- <svg monster-part part-type="root" width="80%" height="80%"  class="mummy svg-container" viewBox="0 0 266.33 334.62" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> -->\n   <g monster-part part-name="outer" part-type="group" class="">\n      <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n      <g monster-part part-name="body" part-type="group" part-outline="true" class="body">\n         <!-- <path class="bandage decor__bandage body__bandage" d="M364.14,242.55c-12.14,0-12.14,13.71-24.29,13.71s-12.14-13.71-24.29-13.71-12.14,13.71-24.27,13.71S279.17,242.55,267,242.55s-12.13,13.71-24.26,13.71-12.13-13.71-24.26-13.71-12.13,13.71-24.26,13.71S182.13,242.55,170,242.55V269.8c12.13,0,12.13,13.71,24.26,13.71s12.13-13.71,24.26-13.71,12.13,13.71,24.26,13.71S254.91,269.8,267,269.8s12.13,13.71,24.25,13.71,12.14-13.71,24.27-13.71,12.14,13.71,24.29,13.71S352,269.8,364.14,269.8Z"></path> -->\n         <path class="body-part" d="M216.21,255.72a163.68,163.68,0,0,0-83.74-23h0A164.49,164.49,0,0,0,17.82,279.36l48,20.83Z"></path>\n         <path class="body-part" d="M-11.92,318.07H5.39l60.45-17.88-48-20.83A166.73,166.73,0,0,0-11.92,318.07Z"></path>\n         <!-- <path class="body-part body-part--dark" d="M-15.12,324.14l20.51-6.07H-11.92C-13,320.07-14.09,322.1-15.12,324.14Z"></path> -->\n         <path class="body-part body-part--dark" d="M216.21,255.72,65.84,300.19,5.39,318.07l-20.51,6.07a163.48,163.48,0,0,0-17.35,67.41c0,.05,0,.11,0,.17l309.16-73.95A167,167,0,0,0,216.21,255.72Z"></path>\n         <!-- <path class="body-part" d="M276.88,318.07l-.19-.31L-32.47,391.72c-.08,2-.16,4.05-.16,6.1v7.94l171.23,15.94L257,391.55l12.28-3.13,27.52-7A163.59,163.59,0,0,0,276.88,318.07Z"></path> -->\n      </g>\n      <g class="head">\n         <path class="bandage bandage--head decor__bandage head__bandage" d="M270.44,14.09c-7.59,0-7.59,8.56-15.17,8.56s-7.59-8.56-15.17-8.56-7.58,8.56-15.16,8.56-7.58-8.56-15.15-8.56-7.58,8.56-15.16,8.56-7.58-8.56-15.15-8.56-7.58,8.56-15.15,8.56-7.58-8.56-15.15-8.56v17c7.58,0,7.58,8.56,15.15,8.56s7.58-8.56,15.15-8.56,7.58,8.56,15.15,8.56,7.58-8.56,15.16-8.56,7.58,8.56,15.15,8.56,7.58-8.56,15.16-8.56,7.59,8.56,15.17,8.56,7.59-8.56,15.17-8.56Z"></path>\n         <g monster-part part-name="ears" part-type="group" part-outline="true" class="ears">\n            <circle class="ear ear--ear-left" cx="61.37" cy="110.92" r="22.96"></circle>\n            <circle class="ear ear--ear-right" cx="203.59" cy="110.92" r="22.96"></circle>\n         </g>\n\n         <g monster-part part-name="head-figure" part-type="group" part-outline="true" class="head-figure">\n            <path class="head-part" d="M132.48,0C115,0,99,10.15,86.48,27L192.57,52.62C179.62,20.89,157.55,0,132.48,0Z"></path>\n            <path class="head-part head-part--dark" d="M192.57,52.62,86.48,27C75.15,42.38,66.74,63.27,62.78,87.16l130.41-33C193,53.67,192.79,53.14,192.57,52.62Z"></path>\n            <path class="head-part head-part--empty" d="M193.19,54.2,80.54,82.67l75.09,17.26,45.85-16.81A160.27,160.27,0,0,0,193.19,54.2Z"></path>\n            <path class="head-part" d="M62.78,87.16a189.68,189.68,0,0,0-2.53,31c0,5.6.26,11.11.72,16.5l94.65-34.71L80.54,82.67Z"></path>\n            <path class="head-part head-part--dark" d="M62.33,146.29,203,143.48a191.36,191.36,0,0,0,1.68-25.34,188.5,188.5,0,0,0-3.23-35L61,134.64Q61.48,140.56,62.33,146.29Z"></path>\n            <path class="head-part" d="M64.24,156.85l128.89,25.39A165.12,165.12,0,0,0,203,143.48L62.33,146.29Q63.14,151.67,64.24,156.85Z"></path>\n            <path class="head-part head-part--dark" d="M64.68,158.76a150.89,150.89,0,0,0,11.06,32.42l110,6.67c1.22-2.19,2.39-4.46,3.5-6.8Z"></path>\n            <path class="head-part" d="M132.48,236.28c21.11,0,40.09-14.82,53.3-38.43l-110-6.67C89,218.64,109.45,236.28,132.48,236.28Z"></path>\n         </g>\n\n         <g monster-part part-name="nose" part-type="group">\n           <rect fill="rgba(0,0,0,0)" x="132.5" y="144" width="1" height="1"></rect>\n         </g>\n\n         <g monster-part part-name="mouth" part-type="group" class="mouth">\n            <path monster-part part-name="mouth" part-type="element" part-group="mouth" class="mouth-figure" d="M193.13,182.24,64.24,156.85c.14.64.29,1.27.43,1.91l124.6,32.29Q191.32,186.79,193.13,182.24Z"></path>\n            <polygon class="tooth" points="145.34 186.66 134.48 186.66 134.48 170.68 145.34 172.81 145.34 186.66"></polygon>\n         </g>\n         <g monster-part part-name="mouth-fraud" part-type="group" part-hidden="true" visibility="hidden" class="mouth">\n            <path monster-part part-name="mouth--fraud" part-type="element" part-group="mouth" class="mouth-figure mouth-figure--dark" d="M193.13,182.24,64.24,156.85c.14.64.29,1.27.43,1.91l124.6,32.29Q191.32,186.79,193.13,182.24Z"></path>\n         </g>\n\n\n         <g monster-part part-group="ears" part-type="container"></g>\n\n\n         <svg width="18.5" height="25.16" x="85" y="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.91 26.58">\n           <g monster-part part-name="eyelashes" part-type="group" part-hidden="true" visibility="hidden" class="eyelashes">\n             <line class="eyelash" x1="0.71" y1="10.71" x2="15.87" y2="25.87"/>\n             <line class="eyelash" x1="2.37" y1="5.71" x2="17.54" y2="20.87"/>\n             <line class="eyelash" x1="4.04" y1="0.71" x2="19.21" y2="15.87"/>\n           </g>\n         </svg>\n\n         <g monster-part part-name="eyes" part-type="group" class="eyes">\n            <g monster-part part-name="eye" part-name-mod="left" part-type="group" part-group="eyes" class="eye eye--left">\n               <circle class="eyeball" cx="102.5" cy="82.46" r="8.94"></circle>\n               <circle class="pupil" cx="102.5" cy="82.46" r="4.41"></circle>\n            </g>\n            <g monster-part part-name="eye" part-name-mod="right" part-type="group" part-group="eyes" class="eye eye--right">\n               <circle class="eyeball" cx="161.09" cy="82.46" r="8.94"></circle>\n               <circle class="pupil" cx="161.09" cy="82.46" r="4.41"></circle>\n            </g>\n         </g>\n\n         <g monster-part part-group="eyes" part-type="container"></g>\n      </g>\n      <g monster-part part-group="body" part-type="container"></g>\n      <g monster-part part-group="head-figure" part-type="container"></g>\n\n      <g monster-part part-group="mouth" part-type="container"></g>\n      <g monster-part part-group="nose" part-type="container"></g>\n\n      <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n   </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/mummy/mummy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], MummyComponent);
    return MummyComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=mummy.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YagaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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


var YagaComponent = /** @class */ (function (_super) {
    __extends(YagaComponent, _super);
    function YagaComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'yaga', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    YagaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'yaga',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/yaga/yaga.html"*/'<svg width="100%" height="100%" class="yaga svg-container" preserveAspectRatio="xMidYMax meet" viewBox="-20 -20 273.58 344.24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="241.51" height="259.41" y="0" x="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.51 259.41">\n    <circle class="confetti--color--yellow" cx="103.62" cy="13.73" r="3.26" transform="matrix(0.79, -0.61, 0.61, 0.79, 13.46, 66.61)"/>\n    <circle class="confetti--color--yellow" cx="69.86" cy="46.75" r="3.26" transform="translate(-13.98 52.83) rotate(-37.94)"/>\n    <circle class="confetti--color--blue" cx="89.12" cy="4.71" r="4.71" transform="translate(15.94 55.79) rotate(-37.94)"/>\n    <circle class="confetti--color--pink" cx="39.42" cy="51.53" r="3.46" transform="translate(-23.35 35.13) rotate(-37.94)"/>\n    <circle class="confetti--color--pink" cx="52.91" cy="93.84" r="3.46" transform="translate(-46.52 52.36) rotate(-37.94)"/>\n    <circle class="confetti--color--yellow" cx="57.03" cy="129.84" r="3.46" transform="translate(-67.78 62.51) rotate(-37.94)"/>\n    <circle class="confetti--color--yellow" cx="50.99" cy="34.53" r="3.46" transform="translate(-10.45 38.65) rotate(-37.94)"/>\n    <circle class="confetti--color--yellow" cx="23.56" cy="17.79" r="3.46" transform="translate(-5.96 18.24) rotate(-37.94)"/>\n    <circle class="confetti--color--blue" cx="9.91" cy="88.39" r="5.01" transform="translate(-52.25 24.77) rotate(-37.94)"/>\n    <circle cx="40.35" cy="17.13" r="5.01" transform="translate(-2 28.43) rotate(-37.94)"/>\n    <circle cx="14.57" cy="51.72" r="5.01" transform="translate(-28.72 19.89) rotate(-37.94)"/>\n    <circle cx="49.65" cy="69.67" r="5.01" transform="translate(-32.34 45.25) rotate(-37.94)"/>\n    <circle cx="47.79" cy="118.02" r="5.01" transform="translate(-62.46 54.33) rotate(-37.94)"/>\n    <circle class="confetti--color--pink" cx="37.09" cy="197.68" r="3.46" transform="translate(-75.17 30.79) rotate(-23.3)"/>\n    <circle class="confetti--color--pink" cx="16.6" cy="159.75" r="3.46" transform="translate(-61.84 19.59) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="10.42" cy="118.35" r="3.46" transform="translate(-45.96 13.77) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="3.46" cy="217.63" r="3.46" transform="translate(-85.8 19.12) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="25.77" cy="240.76" r="3.46" transform="translate(-93.13 29.83) rotate(-23.3)"/>\n    <circle class="confetti--color--blue" cx="52.57" cy="167.72" r="5.01" transform="translate(-62.05 34.47) rotate(-23.3)"/>\n    <circle cx="9.36" cy="237.15" r="5.01" transform="matrix(0.92, -0.4, 0.4, 0.92, -93.04, 23.04)"/>\n    <circle cx="28.59" cy="220.55" r="5.01" transform="matrix(0.92, -0.4, 0.4, 0.92, -84.91, 29.3)"/>\n    <circle cx="13.64" cy="183.97" r="5.01" transform="translate(-71.66 20.4) rotate(-23.3)"/>\n    <circle cx="27.66" cy="137.65" r="5.01" transform="translate(-52.19 22.17) rotate(-23.3)"/>\n    <circle class="confetti--color--pink" cx="191.28" cy="218.23" r="3.46" transform="translate(-70.72 93.46) rotate(-23.3)"/>\n    <circle class="confetti--color--pink" cx="181.24" cy="167.05" r="3.46" transform="translate(-51.3 85.31) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="229.91" cy="125.05" r="3.46" transform="translate(-30.71 101.14) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="233.91" cy="206.39" r="3.46" transform="translate(-62.56 109.35) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="73.91" cy="170.39" r="3.46" transform="translate(-61.37 43.13) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="163.91" cy="198.39" r="3.46" transform="translate(-65.1 81.01) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="217.24" cy="251.67" r="3.46" transform="translate(-81.83 106.46) rotate(-23.3)"/>\n    <circle class="confetti--color--blue" cx="215.4" cy="181.24" r="5.01" transform="translate(-54.12 99.98) rotate(-23.3)"/>\n    <circle cx="200.83" cy="248.07" r="5.01" transform="translate(-81.75 99.67) rotate(-23.3)"/>\n    <circle cx="220.06" cy="231.47" r="5.01" transform="translate(-73.61 105.92) rotate(-23.3)"/>\n    <circle cx="205.11" cy="194.89" r="5.01" transform="matrix(0.92, -0.4, 0.4, 0.92, -60.36, 97.02)"/>\n    <circle cx="219.13" cy="148.57" r="5.01" transform="translate(-40.9 98.79) rotate(-23.3)"/>\n    <circle class="confetti--color--pink" cx="200.55" cy="88.51" r="3.46" transform="translate(-18.66 86.55) rotate(-23.3)"/>\n    <circle class="confetti--color--pink" cx="162.73" cy="25.09" r="3.46" transform="translate(3.35 66.41) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="203.31" cy="8.3" r="3.46" transform="translate(13.3 81.1) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="185.07" cy="102.05" r="3.46" transform="translate(-25.27 81.53) rotate(-23.3)"/>\n    <circle class="confetti--color--yellow" cx="207.38" cy="125.17" r="3.46" transform="translate(-32.6 92.24) rotate(-23.3)"/>\n    <circle class="confetti--color--blue" cx="205.53" cy="54.74" r="5.01" transform="translate(-4.89 85.76) rotate(-23.3)"/>\n    <circle class="confetti--color--blue" cx="189.17" cy="23.74" r="5.01" transform="translate(6.04 76.76) rotate(-23.3)"/>\n    <circle class="confetti--color--blue" cx="236.51" cy="53.74" r="5.01" transform="translate(-1.97 97.93) rotate(-23.3)"/>\n    <circle class="confetti--color--blue" cx="15.84" cy="254.4" r="5.01" transform="translate(-99.34 27.01) rotate(-23.3)"/>\n    <circle cx="190.96" cy="121.57" r="5.01" transform="translate(-32.51 85.45) rotate(-23.3)"/>\n    <circle cx="231.26" cy="93.12" r="5.01" transform="translate(-17.97 99.07) rotate(-23.3)"/>\n    <circle cx="179.91" cy="73.72" r="5.01" transform="translate(-14.49 77.17) rotate(-23.3)"/>\n    <circle cx="209.26" cy="22.07" r="5.01" transform="translate(8.34 84.57) rotate(-23.3)"/>\n  </svg>\n\n   <g monster-part part-name="outer" part-type="group" class="">\n    <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n    <g monster-part part-name="body" part-type="group" part-outline="true" class="body">\n         <path class="body-figure" d="M0,526.25V299.52a69.37,69.37,0,0,1,69.17-69.17h44.62V525.5Z"></path>\n         <g class="ornament decor__ornament">\n            <circle class="ornament-part" cx="31.56" cy="265.47" r="4.89"></circle>\n            <circle class="ornament-part" cx="54.23" cy="252.58" r="4.89"></circle>\n            <circle class="ornament-part" cx="17.78" cy="291.7" r="4.89"></circle>\n            <circle class="ornament-part" cx="94.23" cy="313.03" r="4.89"></circle>\n         </g>\n    </g>\n    <g monster-part part-group="body" part-type="container"></g>\n    <g class="head">\n        <g monster-part part-name="necklace" part-type="group">\n          <g monster-part part-name="head-figure" part-type="group" class="head-figure">\n             <g class="shawl shawl--decor__shawl">\n                <path class="shawl-part" d="M96.38.07a196.7,196.7,0,0,1,0,278.33A196.7,196.7,0,0,1,96.38.07Z"></path>\n                <path class="shawl-part" d="M26.33,330.41A73.62,73.62,0,0,1,100,256.75,73.62,73.62,0,0,1,26.33,330.41Z"></path>\n                <path class="shawl-part" d="M92.76,256.75a73.62,73.62,0,0,1,73.66,73.66A73.62,73.62,0,0,1,92.76,256.75Z"></path>\n                <circle class="shawl-part" cx="96.38" cy="269.15" r="26.63"></circle>\n             </g>\n             <rect class="face" x="72.11" y="38.2" width="48.53" height="202.49" rx="24.27" ry="24.27"></rect>\n          </g>\n        </g>\n        <g monster-part part-group="necklace" part-type="container"></g>\n\n\n         <g monster-part part-name="ears" part-type="group" part-hidden="true" visibility="hidden" part-outline="true" class="ears">\n          <ellipse class="ear" cx="122" cy="126" rx="5.12" ry="13.47" transform="translate(-65.15 -2.51) rotate(-5.81)"/>\n          <ellipse class="ear" cx="135" cy="133" rx="13.47" ry="5.12" transform="translate(-22.48 232.22) rotate(-84.19)"/>\n         </g>\n         <g monster-part part-group="ears" part-type="container"></g>\n\n         <svg width="44.52" height="17.22" x="74" y="54" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.13 12.33">\n           <g monster-part part-name="eyelashes" part-type="group" part-hidden="true" visibility="hidden" class="eyelashes">\n             <line class="eyelash" x1="26.14" x2="26.14" y2="9"/>\n             <line class="eyelash" x1="29.31" x2="29.31" y2="9"/>\n             <line class="eyelash" x1="32.48" x2="32.48" y2="9"/>\n             <line class="eyelash" x1="0.65" y1="3.33" x2="0.65" y2="12.33"/>\n             <line class="eyelash" x1="3.82" y1="3.33" x2="3.82" y2="12.33"/>\n             <line class="eyelash" x1="6.98" y1="3.33" x2="6.98" y2="12.33"/>\n           </g>\n         </svg>\n\n         <g monster-part part-name="eyes" part-type="group" class="eyes">\n            <g monster-part part-name="eye" part-name-mod="left" part-type="group" part-group="eyes" class="eye eye--left">\n               <circle class="eyeball" cx="79.94" cy="81" r="11.98"></circle>\n               <circle class="pupil" cx="79.94" cy="81" r="6.14"></circle>\n            </g>\n            <g monster-part part-name="eye" part-name-mod="right" part-type="group" part-group="eyes" class="eye eye--right">\n               <circle class="eyeball" cx="112.78" cy="81" r="15.2"></circle>\n               <circle class="pupil" cx="112.78" cy="81" r="7.79"></circle>\n            </g>\n         </g>\n				 <g monster-part part-group="eyes" part-type="container"></g>\n         <g monster-part part-name="mouth" part-type="group" class="mouth">\n            <rect class="mouth-figure" x="81.54" y="185.9" width="39.1" height="8.83"></rect>\n            <rect class="tooth" x="94.68" y="185.9" width="4.48" height="4.48"></rect>\n            <rect class="tooth" x="102.67" y="185.9" width="4.48" height="4.48"></rect>\n         </g>\n         <g monster-part part-group="head-figure" part-type="container"></g>\n         <g monster-part part-group="mouth" part-type="container"></g>\n         <g monster-part part-group="nose" part-type="container"></g>\n        <g monster-part part-name="nose" part-type="group">\n          <path class="nose" d="M96.62,109a13.69,13.69,0,0,1,12.54,13.6V157H96.62Z"></path>\n        </g>\n    </g>\n\n    <g monster-part part-group="necklace" part-type="container"></g>\n\n    <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n\n   </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/yaga/yaga.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], YagaComponent);
    return YagaComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=yaga.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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


var DoctorComponent = /** @class */ (function (_super) {
    __extends(DoctorComponent, _super);
    function DoctorComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'doctor', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    DoctorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'doctor',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/doctor/doctor.html"*/'<svg class="doctor svg-container" preserveAspectRatio="xMidYMax meet" viewBox="-20 -20 190.13 357.94" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="322.06" height="357.93" y="-20" x="-98" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244.28 271.49">\n    <circle class="confetti--color--green" cx="198.19" cy="97.69" r="3.46" transform="translate(-22.48 86.36) rotate(-23.3)"/>\n    <circle class="confetti--color--green" cx="189.49" cy="57.32" r="3.46" transform="translate(-7.22 79.63) rotate(-23.3)"/>\n    <circle class="confetti--color--green" cx="236.82" cy="4.51" r="3.46" transform="translate(17.53 94.04) rotate(-23.3)"/>\n    <circle class="confetti--color--green" cx="240.82" cy="85.84" r="3.46" transform="translate(-14.31 102.26) rotate(-23.3)"/>\n    <circle class="confetti--color--dark-yellow" cx="186.31" cy="16.69" r="3.46" transform="translate(8.59 75.06) rotate(-23.3)"/>\n    <circle class="confetti--color--dirty-yellow" cx="180.83" cy="111.32" r="3.46" transform="translate(-29.29 80.6) rotate(-23.3)"/>\n    <circle class="confetti--color--green" cx="224.16" cy="131.13" r="3.46" transform="translate(-33.59 99.36) rotate(-23.3)"/>\n    <circle class="confetti--color--green" cx="222.31" cy="60.69" r="5.01" transform="translate(-5.88 92.89) rotate(-23.3)"/>\n    <circle class="confetti--color--dark-yellow" cx="207.74" cy="127.52" r="5.01" transform="translate(-33.5 92.57) rotate(-23.3)"/>\n    <circle class="confetti--color--dark-blue" cx="226.97" cy="110.92" r="5.01" transform="translate(-25.37 98.82) rotate(-23.3)"/>\n    <circle class="confetti--color--dark-blue" cx="212.02" cy="74.34" r="5.01" transform="translate(-12.12 89.93) rotate(-23.3)"/>\n    <circle class="confetti--color--dark-blue" cx="226.04" cy="28.03" r="5.01" transform="translate(7.35 91.7) rotate(-23.3)"/>\n    <circle class="confetti--color--green" cx="62.19" cy="41.92" r="3.46" transform="translate(-6.45 11.69) rotate(-10.21)"/>\n    <circle class="confetti--color--green" cx="61.52" cy="83.2" r="3.46" transform="translate(-13.78 12.23) rotate(-10.21)"/>\n    <circle class="confetti--color--green" cx="3.46" cy="123.93" r="3.46" transform="translate(-21.92 2.58) rotate(-10.21)"/>\n    <circle class="confetti--color--green" cx="17.98" cy="43.8" r="3.46" transform="translate(-7.48 3.88) rotate(-10.21)"/>\n    <circle class="confetti--color--dark-yellow" cx="66.98" cy="109.36" r="3.46" transform="translate(-18.33 13.61) rotate(-10.21)"/>\n    <circle class="confetti--color--dirty-yellow" cx="82.19" cy="32.57" r="3.46" transform="translate(-4.47 15.09) rotate(-10.21)"/>\n    <circle class="confetti--color--green" cx="44.47" cy="3.46" r="3.46" transform="translate(0.09 7.94) rotate(-10.21)"/>\n    <circle class="confetti--color--green" cx="30.32" cy="72.49" r="5.01" transform="translate(-12.37 6.52) rotate(-10.21)"/>\n    <circle class="confetti--color--dark-yellow" cx="59.64" cy="10.69" r="5.01" transform="translate(-0.95 10.74) rotate(-10.21)"/>\n    <circle class="confetti--color--dark-blue" cx="37.15" cy="22.51" r="5.01" transform="matrix(0.98, -0.18, 0.18, 0.98, -3.4, 6.94)"/>\n    <circle class="confetti--color--dark-blue" cx="43.43" cy="61.52" r="5.01" transform="translate(-10.22 8.68) rotate(-10.21)"/>\n    <circle class="confetti--color--dark-blue" cx="19.29" cy="103.46" r="5.01" transform="translate(-18.04 5.06) rotate(-10.21)"/>\n    <circle class="confetti--color--green" cx="53.6" cy="158.07" r="3.46" transform="translate(-75.63 52.44) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="68.31" cy="196.66" r="3.46" transform="translate(-93.85 66.1) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="29.52" cy="256.03" r="3.46" transform="translate(-131.21 54.57) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="13.25" cy="176.24" r="3.46" transform="translate(-91.39 33.82) rotate(-32.01)"/>\n    <circle class="confetti--color--dark-yellow" cx="77.6" cy="236.34" r="3.46" transform="translate(-113.47 77.06) rotate(-32.01)"/>\n    <circle class="confetti--color--dirty-yellow" cx="68.7" cy="141.97" r="3.46" transform="translate(-64.8 57.99) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="34.31" cy="130.03" r="3.46" transform="translate(-63.7 37.95) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="35.36" cy="198.29" r="5.01" transform="translate(-99.73 48.88) rotate(-32.01)"/>\n    <circle class="confetti--color--dark-yellow" cx="41.64" cy="108.69" r="5.01" transform="translate(-51.28 38.6) rotate(-32.01)"/>\n    <circle class="confetti--color--dark-blue" cx="23.15" cy="149.35" r="5.01" transform="translate(-75.64 34.97) rotate(-32.01)"/>\n    <circle class="confetti--color--dark-blue" cx="43.46" cy="183.24" r="5.01" transform="translate(-90.52 50.89) rotate(-32.01)"/>\n    <circle class="confetti--color--dark-blue" cx="36.62" cy="231.15" r="5.01" transform="translate(-116.95 54.55) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="225.6" cy="193.41" r="3.46" transform="translate(-68.21 148.97) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="240.31" cy="231.99" r="3.46" transform="translate(-86.43 162.63) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="192.15" cy="143.63" r="3.46" transform="translate(-46.92 123.68) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="185.25" cy="211.57" r="3.46" transform="translate(-83.98 130.35) rotate(-32.01)"/>\n    <circle class="confetti--color--dark-yellow" cx="236.31" cy="259.36" r="3.46" transform="translate(-101.54 164.68) rotate(-32.01)"/>\n    <circle class="confetti--color--dirty-yellow" cx="240.7" cy="177.3" r="3.46" transform="translate(-57.38 154.53) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="194.87" cy="164.28" r="3.46" transform="translate(-57.45 128.26) rotate(-32.01)"/>\n    <circle class="confetti--color--green" cx="207.36" cy="233.63" r="5.01" transform="translate(-92.31 145.42) rotate(-32.01)"/>\n    <circle class="confetti--color--dark-yellow" cx="211.64" cy="165.36" r="5.01" transform="translate(-55.47 137.31) rotate(-32.01)"/>\n    <circle class="confetti--color--dark-blue" cx="195.15" cy="184.68" r="5.01" transform="translate(-68.22 131.51) rotate(-32.01)"/>\n    <circle class="confetti--color--dark-blue" cx="215.46" cy="218.58" r="5.01" transform="translate(-83.1 147.43) rotate(-32.01)"/>\n    <circle class="confetti--color--dark-blue" cx="208.62" cy="266.48" r="5.01" transform="translate(-109.53 151.08) rotate(-32.01)"/>\n  </svg>\n\n   <g monster-part part-name="outer" part-type="group" class="">\n     <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n     <g monster-part part-name="body" part-type="group" part-outline="true" >\n       <path class="body" d="M150.15,332a75.32,75.32,0,0,0-75.1-75.1h0A75.32,75.32,0,0,0,0,332V761.33h150.2Z"></path>\n     </g>\n      <g monster-part part-group="body" part-type="container"></g>\n      <g class="head">\n         <ellipse  monster-part part-name="head-figure" part-type="group" class="head-figure" cx="75.42" cy="173.19" rx="49.17" ry="117.42"></ellipse>\n         <g class="hat decor__hat">\n            <rect class="hat-figure" x="40.23" width="70.38" height="90.75"></rect>\n            <rect class="cross cross--vertical" x="69.55" y="22.99" width="11.74" height="51.37"></rect>\n            <rect class="cross cross--horizontal" x="50" y="42.8" width="51.37" height="11.74"></rect>\n         </g>\n\n         <g monster-part part-name="ears" part-type="group" part-outline="true" class="ears">\n            <ellipse class="ear ear--left" cx="25.38" cy="169.88" rx="11.3" ry="26.99"></ellipse>\n            <ellipse class="ear ear--right" cx="124.87" cy="169.88" rx="11.3" ry="26.99"></ellipse>\n         </g>\n         <g monster-part part-group="ears" part-type="container"></g>\n\n\n         <g monster-part part-name="eyes" part-type="group" class="eyes">\n            <circle monster-part part-name="eye" part-name-mod="left" part-type="element" part-group="eyes" class="eye eye--left" cx="55.81" cy="143.35" r="6.53"></circle>\n            <circle monster-part part-name="eye" part-name-mod="right" part-type="element" part-group="eyes" class="eye eye--right" cx="92.44" cy="137.48" r="12.06"></circle>\n         </g>\n				 <g monster-part part-group="eyes" part-type="container"></g>\n         <g monster-part part-group="head-figure" part-type="container"></g>\n         <g monster-part part-name="mouth" part-type="group" class="mouth">\n           <rect class="tooth" x="61.64" y="231.9" width="10.92" height="15.17"></rect>\n           <rect class="tooth" x="78.28" y="231.9" width="10.92" height="15.17"></rect>\n           <rect class="mouth-figure" x="52.67" y="225.05" width="45.5" height="7.34"></rect>\n         </g>\n         <g monster-part part-group="mouth" part-type="container"></g>\n         <g monster-part part-group="nose" part-type="container"></g>\n          <g monster-part part-name="nose" part-type="group">\n            <rect class="nose" x="69.96" y="161.94" width="10.92" height="53.82"></rect>\n          </g>\n      </g>\n\n      <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n   </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/doctor/doctor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], DoctorComponent);
    return DoctorComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=doctor.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YetiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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


var YetiComponent = /** @class */ (function (_super) {
    __extends(YetiComponent, _super);
    function YetiComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'yeti', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    YetiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'yeti',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/yeti/yeti.html"*/'<svg class="yeti svg-container" viewBox="-20 -20 304.56 342.51" preserveAspectRatio="xMidYMax meet" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="264.67" height="86.97" y="0" x="0" viewBox="0 0 245.75 80.75" xmlns="http://www.w3.org/2000/svg">\n    <circle class="confetti--color--dark-blue" cx="24.87" cy="14.87" r="4.75" transform="translate(0.36 30.34) rotate(-63.12)"/>\n    <circle class="confetti--color--dark-blue" cx="7.87" cy="57.87" r="4.75" transform="translate(-47.31 38.73) rotate(-63.12)"/>\n    <circle class="confetti--color--dark-blue" cx="214.87" cy="16.87" r="4.75" transform="translate(102.68 200.91) rotate(-63.12)"/>\n    <circle class="confetti--color--yellow" cx="6.87" cy="31.87" r="6.87" transform="translate(-24.66 23.6) rotate(-63.12)"/>\n    <circle class="confetti--color--yellow" cx="211.87" cy="34.87" r="6.87" transform="translate(84.98 208.09) rotate(-63.12)"/>\n    <circle class="confetti--color--yellow" cx="238.87" cy="73.87" r="6.87" transform="translate(64.99 253.55) rotate(-63.12)"/>\n    <circle class="confetti--color--green" cx="235.87" cy="47.87" r="6.87" transform="translate(86.54 236.63) rotate(-63.12)"/>\n    <circle class="confetti--color--green" cx="54.87" cy="6.87" r="6.87" transform="translate(23.94 52.71) rotate(-63.12)"/>\n    <circle class="confetti--color--green" cx="39.87" cy="26.87" r="6.87" transform="translate(-2.12 50.29) rotate(-63.12)"/>\n  </svg>\n\n   <g monster-part part-name="outer" part-type="group" class="">\n     <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n     <g monster-part part-name="body" part-type="group" part-outline="true">\n       <rect class="body" x="-47.31" y="96.49" width="336.14" height="556.92" rx="156.32" ry="156.32"></rect>\n     </g>\n     <g monster-part part-group="body" part-type="container"></g>\n      <g class="head">\n         <g monster-part part-name="head-figure" part-type="group" class="face-figure">\n            <polygon class="hair" points="133.72 -0.04 139.54 26.87 148.68 0.9 151.07 28.33 163.39 3.71 162.33 31.22 177.64 8.34 173.13 35.5 191.19 14.71 183.32 41.1 203.84 22.74 192.72 47.93 215.39 32.29 201.2 55.89 225.64 43.21 208.61 64.84 234.45 55.33 214.84 74.66 241.66 68.46 219.78 85.18 247.18 82.39 223.38 96.23 250.9 96.9 225.55 107.65 252.78 111.76 226.28 119.25 252.78 126.74 225.55 130.85 250.9 141.6 223.38 142.27 247.18 156.11 219.78 153.32 241.66 170.04 214.84 163.84 234.45 183.17 208.61 173.65 225.64 195.29 201.2 182.61 215.39 206.21 192.72 190.57 203.84 215.76 183.32 197.4 191.19 223.78 173.13 203 177.64 230.16 162.33 207.28 163.39 234.79 151.07 210.17 148.68 237.6 139.54 211.63 133.72 238.54 127.91 211.63 118.77 237.6 116.38 210.17 104.06 234.79 105.12 207.28 89.81 230.16 94.32 203 76.26 223.78 84.13 197.4 63.61 215.76 74.73 190.57 52.06 206.21 66.25 182.61 41.81 195.29 58.84 173.65 33 183.17 52.62 163.84 25.79 170.04 47.67 153.32 20.27 156.11 44.07 142.27 16.55 141.6 41.9 130.85 14.67 126.74 41.17 119.25 14.67 111.76 41.9 107.65 16.55 96.9 44.07 96.23 20.27 82.39 47.67 85.18 25.79 68.46 52.62 74.66 33 55.33 58.84 64.84 41.81 43.21 66.25 55.89 52.06 32.29 74.73 47.93 63.61 22.74 84.13 41.1 76.26 14.71 94.32 35.5 89.81 8.34 105.12 31.22 104.06 3.71 116.38 28.33 118.77 0.9 127.91 26.87 133.72 -0.04"></polygon>\n            <ellipse class="face" cx="133.73" cy="99.05" rx="70.61" ry="54.35"></ellipse>\n         </g>\n\n         <g monster-part part-name="ears" part-type="group" class="ears">\n            <ellipse class="ear ear--left" cx="68.67" cy="98.73" rx="16.3" ry="12.55"></ellipse>\n            <ellipse class="ear ear--right" cx="197.58" cy="98.73" rx="16.3" ry="12.55"></ellipse>\n         </g>\n         <g monster-part part-group="ears" part-type="container"></g>\n\n\n         <g>\n            <rect class="jaw" x="75.52" y="117.65" width="116.41" height="64.46"></rect>\n            <g monster-part part-name="mouth" part-type="group" class="mouth">\n              <rect class="mouth-figure" x="82.73" y="132.72" width="101.97" height="43.29"></rect>\n              <path class="lips" d="M182.79,134.64v39.44H84.66V134.64h98.13m3.85-3.85H80.81v47.14H186.64V130.79Z"></path>\n              <g class="tooth">\n                <g class="teeth-top">\n                  <polygon class="tooth" points="161.13 160.77 155.1 134.64 167.16 134.64 161.13 160.77"></polygon>\n                  <polygon class="tooth" points="142.13 160.77 136.1 134.64 148.16 134.64 142.13 160.77"></polygon>\n                  <polygon class="tooth" points="123.13 160.77 117.1 134.64 129.16 134.64 123.13 160.77"></polygon>\n                  <polygon class="tooth" points="104.13 160.77 98.1 134.64 110.16 134.64 104.13 160.77"></polygon>\n                </g>\n                <g class="teeth-bottom">\n                  <polygon class="tooth" points="94.75 147.96 100.78 174.09 88.72 174.09 94.75 147.96"></polygon>\n                  <polygon class="tooth" points="113.75 147.96 119.78 174.09 107.72 174.09 113.75 147.96"></polygon>\n                  <polygon class="tooth" points="132.75 147.96 138.78 174.09 126.72 174.09 132.75 147.96"></polygon>\n                  <polygon class="tooth" points="151.75 147.96 157.78 174.09 145.72 174.09 151.75 147.96"></polygon>\n                  <polygon class="tooth" points="170.75 147.96 176.78 174.09 164.72 174.09 170.75 147.96"></polygon>\n                </g>\n              </g>\n            </g>\n         </g>\n         <g monster-part part-group="mouth" part-type="container"></g>\n\n         <svg width="55.8" height="6.9" x="106" y="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.17 7.24">\n           <g monster-part part-name="eyelashes" part-type="group" part-hidden="true" visibility="hidden" class="eyelashes">\n             <line class="eyelash" x1="0.18" y1="2.91" x2="4.33" y2="7.06"/>\n             <line class="eyelash" x1="0.63" y1="1.55" x2="4.78" y2="5.7"/>\n             <line class="eyelash" x1="1.09" y1="0.18" x2="5.24" y2="4.33"/>\n             <line class="eyelash" x1="55.99" y1="2.91" x2="51.84" y2="7.06"/>\n             <line class="eyelash" x1="55.54" y1="1.55" x2="51.38" y2="5.7"/>\n             <line class="eyelash" x1="55.08" y1="0.18" x2="50.93" y2="4.33"/>\n           </g>\n         </svg>\n\n         <g monster-part part-name="eyes" part-type="group" class="eyes">\n            <circle monster-part part-name="eye" part-name-mod="left" part-type="element" part-group="eyes" class="eye eye--left" cx="114.32" cy="79.49" r="5.77"></circle>\n            <circle monster-part part-name="eye" part-name-mod="right" part-type="element" part-group="eyes" class="eye eye--right" cx="153.13" cy="79.49" r="5.77"></circle>\n         </g>\n				 <g monster-part part-group="eyes" part-type="container"></g>\n         <g monster-part part-group="nose" part-type="container"></g>\n         <g monster-part part-group="head-figure" part-type="container"></g>\n\n         <g monster-part part-name="nose" part-type="group">\n           <path class="nose" d="M160.8,101.61h-26V113.8h26a6.11,6.11,0,0,0,6.09-6.09h0A6.11,6.11,0,0,0,160.8,101.61Z"></path>\n         </g>\n      </g>\n\n    <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n   </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/yeti/yeti.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], YetiComponent);
    return YetiComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=yeti.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GhostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_model__ = __webpack_require__(13);
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


var GhostComponent = /** @class */ (function (_super) {
    __extends(GhostComponent, _super);
    function GhostComponent(el, renderer, componentFactoryResolver, injector, app) {
        var _this = _super.call(this, 'ghost', el.nativeElement, componentFactoryResolver, injector, app) || this;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    GhostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ghost',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/ghost/ghost.html"*/'<svg class="ghost svg-container" preserveAspectRatio="xMidYMax meet" viewBox="-20 -30 285.74 355.76" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <svg monster-part part-name="confetti" part-type="group" part-hidden="true" visibility="hidden" width="245" height="146.44" y="0" x="0" viewBox="0 0 218.75 130.75" xmlns="http://www.w3.org/2000/svg">\n    <circle class="confetti--color--pink" cx="197.87" cy="17.87" r="4.75" transform="translate(48.97 149.41) rotate(-46.62)"/>\n    <circle class="confetti--color--pink" cx="35.14" cy="42.42" r="4.75" transform="translate(-19.83 38.82) rotate(-46.62)"/>\n    <circle class="confetti--color--pink" cx="202.87" cy="81.87" r="4.75" transform="translate(4.02 173.08) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-yellow" cx="8.87" cy="17.87" r="6.87" transform="translate(-10.21 12.05) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-yellow" cx="6.87" cy="123.87" r="6.87" transform="translate(-87.88 43.78) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-yellow" cx="211.87" cy="120.87" r="6.87" transform="translate(-21.5 191.84) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="68.87" cy="6.87" r="6.87" transform="translate(16.57 52.21) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="189.15" cy="47.87" r="6.87" transform="translate(24.44 152.46) rotate(-46.62)"/>\n    <circle class="confetti--color--dark-blue" cx="20.87" cy="75.87" r="6.87" transform="translate(-48.61 38.93) rotate(-46.62)"/>\n  </svg>\n\n   <g monster-part part-name="outer" part-type="group" class="">\n      <defs class="defs">\n         <clipPath class="clipPath" id="mouth-clip-path">\n            <ellipse class="mouth-clip-path-figure" cx="122.87" cy="152.77" rx="28.28" ry="61.84"></ellipse>\n         </clipPath>\n      </defs>\n      <g monster-part part-group="outer" part-type="container" part-name-mod="behind"></g>\n\n      <g monster-part part-name="body" part-type="group" part-outline="true">\n        <path monster-part part-name="head-figure" part-type="group" class="body" d="M122.87,0C50.59,0-8,222.7-8,497.41q0,5.15,0,10.26c.32,0,.62.07.95.07,21.75,0,21.75-48.95,43.49-48.95S58.22,507.74,80,507.74s21.75-48.95,43.5-48.95,21.75,48.95,43.51,48.95,21.75-48.95,43.51-48.95,21.76,48.49,43.22,48.93q0-5.14,0-10.31C253.74,222.7,195.14,0,122.87,0Z"></path>\n      </g>\n      <g monster-part part-group="body" part-type="container"></g>\n\n      <g monster-part part-name="ears" part-type="group" part-hidden="true" visibility="hidden" part-outline="true" class="ears">\n        <ellipse class="ear" cx="45" cy="90" rx="18.02" ry="33.49"/>\n        <ellipse class="ear" cx="200" cy="90" rx="18.02" ry="33.49"/>\n      </g>\n      <g monster-part part-group="ears" part-type="container"></g>\n\n      <svg width="87.8" height="25.2" x="79" y="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.25 26.58">\n        <g monster-part part-name="eyelashes" part-type="group" part-hidden="true" visibility="hidden" class="eyelashes">\n          <line class="eyelash" x1="0.71" y1="10.71" x2="15.87" y2="25.87"/>\n          <line class="eyelash" x1="2.37" y1="5.71" x2="17.54" y2="20.87"/>\n          <line class="eyelash" x1="4.04" y1="0.71" x2="19.21" y2="15.87"/>\n          <line class="eyelash" x1="88.54" y1="10.71" x2="73.37" y2="25.87"/>\n          <line class="eyelash" x1="86.87" y1="5.71" x2="71.71" y2="20.87"/>\n          <line class="eyelash" x1="85.21" y1="0.71" x2="70.04" y2="15.87"/>\n        </g>\n      </svg>\n\n      <g monster-part part-name="eyes" part-type="group" class="eyes">\n         <g monster-part part-name="eye" part-name-mod="left" part-type="group" part-group="eyes" class="eye eye--left">\n            <path class="pupil" d="M104.3,76.32A10.75,10.75,0,1,1,115,65.57,10.76,10.76,0,0,1,104.3,76.32Z"></path>\n            <path class="eyeball" d="M104.3,58.58a7,7,0,1,1-7,7,7,7,0,0,1,7-7m0-7.52a14.51,14.51,0,1,0,14.51,14.51A14.51,14.51,0,0,0,104.3,51.06Z"></path>\n         </g>\n         <g monster-part part-name="eye" part-name-mod="right" part-type="group" part-group="eyes" class="eye eye--right">\n            <path class="pupil" d="M141.44,76.32a10.75,10.75,0,1,1,10.75-10.75A10.76,10.76,0,0,1,141.44,76.32Z"></path>\n            <path class="eyeball" d="M141.44,58.58a7,7,0,1,1-7,7,7,7,0,0,1,7-7m0-7.52a14.51,14.51,0,1,0,14.51,14.51,14.51,14.51,0,0,0-14.51-14.51Z"></path>\n         </g>\n      </g>\n			<g monster-part part-group="eyes" part-type="container"></g>\n      <g monster-part part-name="mouth" part-type="group" class="mouth">\n         <ellipse class="mouth-figure" cx="122.87" cy="152.77" rx="28.28" ry="61.84"></ellipse>\n         <path class="ubula" d="M148.48,125.93c-.46-.25-6-3.12-11.73-.12s-6.62,9.44-6.6,10.64a16.42,16.42,0,0,0,.53,3.55h0a12,12,0,0,0,2.26,4.15l.21.29a10.68,10.68,0,0,1,1.52,5.86,12,12,0,0,1-24,0,11.48,11.48,0,0,1,2.06-6.56l.22-.29a12,12,0,0,0,1.71-3.43h0a12.06,12.06,0,0,1,.54-3.57c.45-1.55-.73-8.54-5.58-10.64-4.17-1.8-10.2.39-13.23,5.9,3.69-21.4,12.94-40.07,26.25-40.76a26.29,26.29,0,0,1,2.71.13C140.48,93.34,147,119.22,148.48,125.93Z"></path>\n         <g class="teeth">\n            <path class="tooth" d="M121.8,105.44h-8.23L114,94.14a13.26,13.26,0,0,1,5.93-2.92A12.42,12.42,0,0,1,121.8,91Z"></path>\n            <path class="tooth" d="M132.42,105.44h-8.23L124.53,91a14.62,14.62,0,0,1,2.74.5,14.92,14.92,0,0,1,5.14,2.63q-.07,2.22-.09,4.53Q132.3,102.15,132.42,105.44Z"></path>\n         </g>\n      </g>\n      <g monster-part part-group="mouth" part-type="container"></g>\n      <g monster-part part-name="nose" part-type="group">\n        <rect fill="rgba(0,0,0,0)" x="116" y="110" width="1" height="1"></rect>\n      </g>\n      <g monster-part part-group="nose" part-type="container"></g>\n      <g monster-part part-group="head-figure" part-type="container"></g>\n\n      <g monster-part part-group="outer" part-type="container" part-name-mod="forward"></g>\n   </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/components/monsters/ghost/ghost.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], GhostComponent);
    return GhostComponent;
}(__WEBPACK_IMPORTED_MODULE_1__monster_model__["a" /* MonsterModel */]));

//# sourceMappingURL=ghost.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameFinistStateMachine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_javascript_state_machine__ = __webpack_require__(312);
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
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListnersHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listner_register_class__ = __webpack_require__(313);
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
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemHolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_host_directive__ = __webpack_require__(202);
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
        var instance = this.host.viewContainerRef.createComponent(componentFactory).instance;
        return instance;
    };
    ItemHolderComponent.prototype.getAttributes = function () {
        return this.attr;
    };
    ItemHolderComponent.prototype.setAttributes = function (obj) {
        var _this = this;
        this.attr = obj;
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
/* 202 */
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
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_monsters_monsters_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__background_background_tablet_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__background_background_mobile_component__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SelectPage = /** @class */ (function () {
    function SelectPage(navCtrl, repo, r, platform) {
        this.navCtrl = navCtrl;
        this.repo = repo;
        this.r = r;
        this.platform = platform;
        this.monsters = this.repo.getMonsters().map(function (m) { return ({ name: m.name, id: m.id }); });
    }
    SelectPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.monsters = this.repo.getMonsters().map(function (m) {
            var _a = _this.isIphone() ? _this.bgMobile.find(m.name) : _this.bg.find(m.name), top = _a.top, left = _a.left;
            return { name: m.name, top: Math.floor(top), left: Math.floor(left), id: m.id };
        });
        this.monsters.forEach(function (m) {
            var el = document.getElementById(m.name);
            // el.setAttribute('width', '100px');
            // console.log(el);
        });
    };
    SelectPage.prototype.isIphone = function () {
        return this.platform.is('iphone');
    };
    SelectPage.prototype.beginGame = function (monster) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__game_game__["a" /* GamePage */], { monster: monster });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__background_background_tablet_component__["a" /* BackgroundTabletComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__background_background_tablet_component__["a" /* BackgroundTabletComponent */])
    ], SelectPage.prototype, "bg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__background_background_mobile_component__["a" /* BackgroundMobileComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__background_background_mobile_component__["a" /* BackgroundMobileComponent */])
    ], SelectPage.prototype, "bgMobile", void 0);
    SelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'select-page',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/pages/select/select.html"*/'<ion-content class="container" fixed no-bounce>\n  <div class="bg">\n    <div class="list" [class.mobile]="isIphone()">\n        <img *ngFor="let monster of monsters" (click)="beginGame(monster.id)" src="assets/imgs/monsters/{{monster.name}}.svg" alt="placholder" class="monsters monsters__{{monster.name}}" [style.left.px]="monster.left" [style.top.px]="monster.top">\n    </div>\n\n    <background-mobile *ngIf="isIphone(); else tablet"></background-mobile>\n    <ng-template #tablet>\n      <background-tablet></background-tablet>\n    </ng-template>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/pages/select/select.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__components_monsters_monsters_service__["a" /* MonstersService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__components_monsters_monsters_service__["a" /* MonstersService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], SelectPage);
    return SelectPage;
}());

//# sourceMappingURL=select.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundTabletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bg_component__ = __webpack_require__(205);
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


var BackgroundTabletComponent = /** @class */ (function (_super) {
    __extends(BackgroundTabletComponent, _super);
    function BackgroundTabletComponent() {
        return _super.call(this) || this;
    }
    BackgroundTabletComponent.prototype.ngAfterViewInit = function () {
    };
    BackgroundTabletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'background-tablet',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/pages/select/background/background-tablet.component.html"*/'<svg class="bg__content" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="6.5 -14.25 267.5 347.5">\n    <!-- 0 0 274.02 335.2 -->\n      <rect x="85.42" y="75.81" width="131.4" height="258.09" />\n      <rect x="50.76" y="75.13" width="174.7" height="168.77" />\n      <rect class="cls-1" x="73.82" y="175.48" width="77.09" height="57.09" />\n      <rect class="cls-1" x="140.82" y="243.18" width="56.05" height="79.04" />\n      <polygon points="163 25.67 187.61 46.37 212.22 67.07 163 67.07 113.78 67.07 138.39 46.37 163 25.67" />\n      <polygon points="26.8 234.79 40.21 258.01 53.61 281.22 26.8 281.22 0 281.22 13.4 258.01 26.8 234.79" />\n      <polygon points="26.8 261.8 40.21 285.01 53.61 308.23 26.8 308.23 0 308.23 13.4 285.01 26.8 261.8" />\n      <polygon points="26.8 288.81 40.21 312.02 53.61 335.23 26.8 335.23 0 335.23 13.4 312.02 26.8 288.81" />\n      <ellipse cx="73.82" cy="27.19" rx="59.58" ry="15.53" />\n      <ellipse cx="73.82" cy="26.68" rx="32.87" ry="26.68" />\n      <circle class="cls-1" cx="36.49" cy="26.27" r="3.95" />\n      <circle class="cls-1" cx="51.42" cy="26.27" r="3.95" />\n      <circle class="cls-1" cx="66.36" cy="26.27" r="3.95" />\n      <circle class="cls-1" cx="96.23" cy="26.27" r="3.95" />\n      <circle class="cls-1" cx="111.16" cy="26.27" r="3.95" />\n      <rect x="132.5" y="65.79" width="116.11" height="12" />\n      <rect x="37.94" y="162.89" width="70" height="12" />\n      <rect x="186.61" y="213.5" width="70" height="12" />\n      <rect x="214.52" y="225.5" width="52.09" height="12" />\n      <rect x="206.61" y="237.5" width="67.41" height="12" />\n      <rect x="256.78" y="249.5" width="17.23" height="12" />\n      <rect x="269.77" y="261.5" width="4.24" height="12" />\n      <rect class="cls-1" x="150.9" y="87.05" width="56.83" height="78.24" />\n      <g>\n        <rect background-anchor monster-name="alien" id="anchor-1" class="alien" x="71.83" y="0" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="yaga" id="anchor-2" class="yaga" x="195.491" y="-25.384" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="ghost" id="anchor-3" class="ghost" x="110.237" y="30.116" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="mummy" id="anchor-4" class="mummy" x="24.82" y="86.707" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="spider" id="anchor-5" class="spider" x="228.048" y="59.216" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="skeleton" id="anchor-6" class="skeleton" x="153.74" y="127.33" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="doctor" id="anchor-7" class="doctor" x="219.4" y="130.811" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="bed" id="anchor-8" class="bed" x="82.255" y="179.489" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="wolf" id="anchor-9" class="wolf" x="8.137" y="282.876" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="yeti" id="anchor-10" class="yeti" x="94.566" y="256.423" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="vampire" id="anchor-11" class="vampire" x="162.25" y="242.469" width="0.001" height="1"></rect>\n        <rect background-anchor monster-name="zombie" id="anchor-12" class="zombie" x="213.094" y="248.342" width="0.001" height="1"></rect>\n      </g>\n  </svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/pages/select/background/background-tablet.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundTabletComponent);
    return BackgroundTabletComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bg_component__["a" /* BackgroundComponent */]));

//# sourceMappingURL=background-tablet.component.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bg_directive__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
    }
    ;
    BackgroundComponent.prototype.find = function (name) {
        return this.anchors.find(function (a) { return a.name === name; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__bg_directive__["a" /* BackgroundAnchorDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], BackgroundComponent.prototype, "anchors", void 0);
    BackgroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({}),
        __metadata("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());

//# sourceMappingURL=bg.component.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundAnchorDirective; });
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

var BackgroundAnchorDirective = /** @class */ (function () {
    function BackgroundAnchorDirective(element) {
        this.element = element.nativeElement;
    }
    BackgroundAnchorDirective.prototype.onResize = function (event) {
        this.update();
    };
    ;
    ;
    BackgroundAnchorDirective.prototype.ngAfterViewInit = function () {
        this.update();
    };
    BackgroundAnchorDirective.prototype.update = function () {
        var _a = this.element.getBoundingClientRect(), top = _a.top, left = _a.left;
        return this.set(top, left);
    };
    BackgroundAnchorDirective.prototype.set = function (top, left) {
        this.top = top;
        this.left = left;
        return this;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('monster-name'),
        __metadata("design:type", String)
    ], BackgroundAnchorDirective.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BackgroundAnchorDirective.prototype, "onResize", null);
    BackgroundAnchorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[background-anchor]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], BackgroundAnchorDirective);
    return BackgroundAnchorDirective;
}());

//# sourceMappingURL=bg.directive.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundMobileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bg_component__ = __webpack_require__(205);
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


var BackgroundMobileComponent = /** @class */ (function (_super) {
    __extends(BackgroundMobileComponent, _super);
    function BackgroundMobileComponent() {
        return _super.call(this) || this;
    }
    BackgroundMobileComponent.prototype.ngAfterViewInit = function () {
    };
    BackgroundMobileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'background-mobile',template:/*ion-inline-start:"/home/ned4ded/dev/monsters.v.2/src/pages/select/background/background-mobile.component.html"*/'<svg class="bg__content" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="4.15 0 163.06 289.77">\n  <rect class="cls-1" x="4.07" width="163.06" height="289.77" />\n  <rect x="52.28" y="74.52" width="80.03" height="216.05" />\n  <rect x="31.16" y="74.1" width="106.4" height="109.69" />\n  <rect class="cls-1" x="39.2" y="141.22" width="46.95" height="34.77" />\n  <rect class="cls-1" x="90.12" y="188.21" width="25.59" height="48.14" />\n  <polygon points="99.52 43.98 114.51 56.59 129.5 69.2 99.52 69.2 69.55 69.2 84.53 56.59 99.52 43.98" />\n  <polygon points="19.78 216.21 29.67 233.34 39.55 250.47 19.78 250.47 0 250.47 9.89 233.34 19.78 216.21" />\n  <polygon points="19.78 236.14 29.67 253.27 39.55 270.39 19.78 270.39 0 270.39 9.89 253.27 19.78 236.14" />\n  <polygon points="19.78 256.07 29.67 273.19 39.55 290.32 19.78 290.32 0 290.32 9.89 273.19 19.78 256.07" />\n  <ellipse cx="55.48" cy="26.47" rx="43.55" ry="11.35" />\n  <ellipse cx="55.48" cy="26.1" rx="24.02" ry="19.5" />\n  <circle class="cls-1" cx="28.19" cy="25.8" r="2.89" />\n  <circle class="cls-1" cx="39.1" cy="25.8" r="2.89" />\n  <circle class="cls-1" cx="50.02" cy="25.8" r="2.89" />\n  <circle class="cls-1" cx="60.69" cy="25.8" r="2.89" />\n  <circle class="cls-1" cx="71.85" cy="25.8" r="2.89" />\n  <circle class="cls-1" cx="82.76" cy="25.8" r="2.89" />\n  <rect x="80.95" y="68.42" width="70.71" height="7.31" />\n  <rect x="23.36" y="127.55" width="42.63" height="7.31" />\n  <rect x="110.4" y="162.38" width="42.63" height="7.31" />\n  <rect x="127.4" y="169.69" width="31.72" height="7.31" />\n  <rect x="122.58" y="177" width="42.63" height="7.31" />\n  <rect x="153.14" y="184.3" width="18.16" height="7.31" />\n  <rect x="161.05" y="191.61" width="6.88" height="7.31" />\n  <rect class="cls-1" x="92.16" y="81.37" width="34.61" height="47.65" />\n  <g>\n    <rect background-anchor monster-name="alien" id="anchor-1" class="alien" x="43.937" y="22.193" width="0.01" height="1"></rect>\n    <rect background-anchor monster-name="yaga" id="anchor-2" class="yaga" x="114.661" y="-2.828" width="0.01" height="1"></rect>\n    <rect background-anchor monster-name="ghost" id="anchor-3" class="ghost" x="59.11" y="50.17" width="0.01" height="1"></rect>\n    <rect background-anchor monster-name="mummy" id="anchor-4" class="mummy" x="15.31" y="75.16" width="0.01" height="1"></rect>\n    <rect background-anchor monster-name="spider" id="anchor-5" class="spider" x="142.74" y="58.42" width="0.01" height="1"></rect>\n    <rect background-anchor monster-name="skeleton" id="anchor-6" class="skeleton" x="90.823" y="99.902" width="0.01" height="1"></rect>\n    <rect background-anchor monster-name="doctor" id="anchor-7" class="doctor" x="133.814" y="106.024" width="0.001" height="1"></rect>\n    <rect background-anchor monster-name="bed" id="anchor-8" class="bed" x="44.16" y="137.673" width="0.001" height="1"></rect>\n    <rect background-anchor monster-name="wolf" id="anchor-9" class="wolf" x="5.69" y="253.105" width="0.001" height="1"></rect>\n    <rect background-anchor monster-name="yeti" id="anchor-10" class="yeti" x="69.567" y="236.835" width="0.001" height="1"></rect>\n    <rect background-anchor monster-name="vampire" id="anchor-11" class="vampire" x="93.66" y="181.61" width="0.001" height="1"></rect>\n    <rect background-anchor monster-name="zombie" id="anchor-12" class="zombie" x="129.554" y="232.395" width="0.001" height="1"></rect>\n  </g>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters.v.2/src/pages/select/background/background-mobile.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundMobileComponent);
    return BackgroundMobileComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bg_component__["a" /* BackgroundComponent */]));

//# sourceMappingURL=background-mobile.component.js.map

/***/ }),
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(274);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_select_background_bg_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_model_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_select_select__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_game_game__ = __webpack_require__(102);
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
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_game_game__["a" /* GamePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_select_background_bg_module__["a" /* BackgroundModule */],
                __WEBPACK_IMPORTED_MODULE_7__model_model_module__["a" /* ModelModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_game_game__["a" /* GamePage */],
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
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__glass_glass__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eyes_eyes__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hood_hood__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mole_mole__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__heart_heart__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__beard_beard__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__moustache_moustache__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__snivel_snivel__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dress_dress__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bra_bra__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wig_wig__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lips_lips__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lollipop_lollipop__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__egg_egg__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__earrings_earrings__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__necklace_necklace__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__flatulence_flatulence__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__flower_flower__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__bubble_bubble__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pigtail_pigtail__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var zombieJoyAnimBefore = function (monster, repo, instance) {
    var filtered = repo.getCopies().filter(function (i) {
        if (i.meta.onScreen) {
            return i.onMonster && i.meta.emotion === 'joyful';
        }
        return i.meta.emotion === 'joyful';
    });
    var onMonster = monster.isOnMonster(instance.getBoundingClientRect());
    if (monster.animate() && filtered.length === 0 && monster.getEmotion() !== 'joyful' && onMonster) {
        monster.makeJoyjul();
        var smile = monster.animate('smile')(true)();
        var smileLids = monster.animate('smileLids')(true)();
    }
    ;
    return;
};
var zombieJoyAnimAfter = function (monster, repo, instance) {
    var filtered = repo.getCopies().filter(function (i) {
        if (i.meta.onScreen) {
            return i.onMonster && i.meta.emotion === 'joyful';
        }
        return i.meta.emotion === 'joyful';
    });
    if (monster.animate() && filtered.length === 0 && monster.getEmotion() === 'joyful') {
        monster.clearEmotion();
        var smile = monster.animate('smile')(false)();
        var smileLids = monster.animate('smileLids')(false)();
    }
};
var TrinketsService = /** @class */ (function () {
    function TrinketsService() {
    }
    TrinketsService.prototype.getTrinkets = function () {
        return [
            {
                id: 20,
                component: __WEBPACK_IMPORTED_MODULE_20__pigtail_pigtail__["a" /* PigtailComponent */],
                meta: {
                    container: 'head-figure',
                    getContainer: function (name) {
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster, repo, instance) {
                        if (monster.name === 'zombie') {
                            monster.close('hair');
                        }
                    },
                    after: function (monster, repo, instance) {
                        if (monster.name === 'zombie') {
                            monster.open('hair');
                        }
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 163.087 * 1.2;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 84.62;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 163.545;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 65.945;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 212.546 * 1.2;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 138.76 * 1.2;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 167.427;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 77.475;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 169.779;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 206.012;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 26.76;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 86.072;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 102.023 * 1.2;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 56.403;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 120.569;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 109.793;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 86.35 * 1.2;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 113.13 * 1.2;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 113.13;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 92.33;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 78.814;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 123.434;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 113.13;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 75.543;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (163.087 * 1.2) / 2) + width / 2;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (84.62) / 2) + width / 2;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (163.545) / 2) + width / 2;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 45;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (212.546 * 1.2) / 2) + width / 2) + 5;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (138.76 * 1.2) / 2) + width / 2;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (167.427) / 2) + width / 2;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 77.475 + 26;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (169.779) / 2) + width / 2;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (206.012) / 2) + width / 2;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 10;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (86.072) / 2) + width / 2) - 10;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 60;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 6;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 76;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 150;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 10;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 75;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 66;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 80;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height - 78.814 + 18;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 32;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 35;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 35;
                            },
                        }
                    }
                }
            },
            {
                id: 19,
                component: __WEBPACK_IMPORTED_MODULE_19__bubble_bubble__["a" /* BubbleComponent */],
                meta: {
                    container: { name: 'outer', mod: 'forward' },
                    getContainer: function (name) {
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster, repo, instance) {
                    },
                    after: function (monster, repo, instance) {
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 217.362 * 1.2;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 67.189;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 176.488;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 173.703 * 1.1;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 175.86;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 150.093 * 1.2;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 67.189;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 185.098;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 67.189;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 166.299;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 74.115;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 174.086;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 192.661 * 1.2;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 51.553;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 64.122;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 177.235 * 1.1;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 209.593;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 143.048 * 1.2;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 51.553;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 173.499;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 51.553;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 134.702;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 217.648;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 86.03;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -35;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 30;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 50;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -10;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -15;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 40;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 15;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 20;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 170;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 40;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 150;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -10;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 0;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 190;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 170;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 58;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 80;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 145;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 135;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 100;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 100;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 100;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 15;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 170;
                            },
                        }
                    }
                }
            },
            {
                id: 18,
                component: __WEBPACK_IMPORTED_MODULE_18__flower_flower__["a" /* FlowerComponent */],
                meta: {
                    container: 'head-figure',
                    getContainer: function (name) {
                        if (['bed'].includes(name)) {
                            return 'flower';
                        }
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster, repo, instance) {
                    },
                    after: function (monster, repo, instance) {
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 188.404 * 1.2;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 76.766;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 63.789;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 116;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 132.431 * 1.2;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 98.766 * 1.2;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 197.535;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 40.896;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 173.523;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 136.767 * 1.2;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 159.729;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 43.352;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 217.311 * 1.2;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 35.215;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 46.505;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 48.546;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 214.873 * 1.2;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 121.903 * 1.2;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 82.662;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 52.717;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 106.196;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 116.366 * 1.2;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 86.284;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 34.728;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -13;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 102.2;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 150;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 38.375;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 6;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (98.766 * 1.2) / 2) + width / 2;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (197.535) / 2) + width / 2;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (173.523) / 2) + width / 2) + 2;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 51;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 10;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 100;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -30;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 160;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 130;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 30;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 51;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 150;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 30;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 20;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 25;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -31;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 160;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 225;
                            },
                        }
                    }
                }
            },
            {
                id: 17,
                component: __WEBPACK_IMPORTED_MODULE_17__flatulence_flatulence__["a" /* FlatulenceComponent */],
                meta: {
                    container: { name: 'outer', mod: 'forward' },
                    getContainer: function (name) {
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster, repo, instance) {
                    },
                    after: function (monster, repo, instance) {
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 235.672 * 1.2;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 238.446;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 241.883;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 240.651 * 1.1;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 234.85;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 231.152;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 234.631;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 244.895;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 253.92;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 230.76;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 245.405;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 94.365;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 156.342 * 1.2;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 253.37;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 72.688;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 129.431 * 1.1;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 119.315;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 40.39;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 135.696;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 212.819;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 126.296;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 109.169;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 225.729;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 81.429;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (235.672 * 1.2) / 2) + width / 2;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 0;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 10;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -45;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -50;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 20;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -30;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -20;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 0;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 10;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 0;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 130;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 50;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 0;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 160;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 120;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 150;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 300;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 110;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 70;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -30;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -10;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 20;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 0;
                            },
                        }
                    }
                }
            },
            {
                id: 16,
                component: __WEBPACK_IMPORTED_MODULE_16__necklace_necklace__["a" /* NecklaceComponent */],
                meta: {
                    container: 'body',
                    getContainer: function (name) {
                        if (['yaga'].includes(name)) {
                            return 'necklace';
                        }
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster, repo, instance) {
                    },
                    after: function (monster, repo, instance) {
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 201.947 * 1.2;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 107.787;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 47.372;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 71.389;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 96.519;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 161.664;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 95.425;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 112.848;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 133.37;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 214.32;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 171.669;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 39.916;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 103.88 * 1.2;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 55.445;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 24.368;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 43.312;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 49.649;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 146.575;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 67.599;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 58.048;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 68.605;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 112.984;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 107.837;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 25.98;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (201.947 * 1.2) / 2) + width / 2;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 30;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (47.372) / 2) + width / 2) + 6;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 32;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (96.519) / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (161.664) / 2) + width / 2) - 20;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (95.425) / 2) + width / 2;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (112.848) / 2) + width / 2;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (133.37) / 2) + width / 2) + 10;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (214.32) / 2) + width / 2;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + width - 171.669 + 10;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 50;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 40;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 35;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height - 43.312 - 60;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 8;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 75;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 2;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 60;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 95;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 140;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 30;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 12;
                            },
                        }
                    }
                }
            },
            {
                id: 15,
                component: __WEBPACK_IMPORTED_MODULE_15__earrings_earrings__["a" /* EarringsComponent */],
                meta: {
                    container: 'ears',
                    getContainer: function () {
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster, repo, instance) {
                        monster.open('ears');
                    },
                    after: function (monster, repo, instance) {
                        if (!['doctor', 'vampire', 'yeti', 'wolf'].includes(monster.name)) {
                            monster.close('ears');
                        }
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 150.972 * 1.4;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 30.9;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 182.231 * 1.1;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 74.1;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 121.678 * 1.2;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 139.306 * 1.2;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 179.948 * 1.05;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 84.972 * 1.1;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 179.827;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 213.687;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 104.50;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 79.667;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 26.887 * 1.4;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 46.233;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 46.233 * 1.1;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 19.844;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 37.141 * 1.2;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 100.455 * 1.2;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 26.887 * 1.05;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 26.887 * 1.1;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 37.141;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 44.04;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 40.501;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 23.187;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (150.972 * 1.4) / 2) + width / 2;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (30.9) / 2) + width / 2;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (74.062) / 2) + width / 2;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (74.1 * 1.1) / 2) + width / 2) + 3;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (121.678 * 1.2) / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (139.3 * 1.2) / 2) + width / 2;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (179.948 * 1.05) / 2) + width / 2;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (84.972 * 1.1) / 2) + width / 2;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (179.827) / 2) + width / 2;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (213.687) / 2) + width / 2;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (104.50) / 2) + width / 2;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (79.667) / 2) + width / 2;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 22;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 20;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 35;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 23;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 30;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 15;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 22;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 30;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 15;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 45;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 10;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 20;
                            },
                        }
                    }
                }
            },
            {
                id: 14,
                component: __WEBPACK_IMPORTED_MODULE_14__egg_egg__["a" /* EggComponent */],
                meta: {
                    container: { name: 'outer', mod: 'forward' },
                    getContainer: function () {
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster, repo, instance) {
                    },
                    after: function (monster, repo, instance) {
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 225.9 * 1.1;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 238.8;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 210.98;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 222.231;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 228.369;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 159.738;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 199.879;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 234.296;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 241.66;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 205.639;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 228.77;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 242.647;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 266.416 * 1.1;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 220.19;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 246.6;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 212.065;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 208.781;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 237.555;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 246.747;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 235.648;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 257.487;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 259.417;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 233.316;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 231.647;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -25;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -20;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 5;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -30;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -40;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 70;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -20;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -20;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 10;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 20;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 5;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return -20;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -10;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -10;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 30;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 80;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 50;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -20;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 40;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -20;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -10;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -5;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 20;
                            },
                        }
                    }
                }
            },
            {
                id: 13,
                component: __WEBPACK_IMPORTED_MODULE_13__lollipop_lollipop__["a" /* LollipopComponent */],
                meta: {
                    container: 'mouth',
                    getContainer: function () {
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster, repo, instance) {
                    },
                    after: function (monster, repo, instance) {
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 69.96;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 99.1;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 101.163;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 36;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 36.07;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 113;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 75.84;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 74.68;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 91.884;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 98.34;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 36.06;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 63.77;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 104.667;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 72.6;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 89.37;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 124.9;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 66.44;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 140.9;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 70.92;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 72.17;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 44.3;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 64.22;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 95.2;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 34.39;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (69.96) / 2) + width / 2) + 20;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 10;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 25;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + width - 26;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 36.07 / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - 113 / 2) + width / 2) - 7;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 5;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 55;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + (width / 2) - 2;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 10;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + width - 36.06 - 5;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 3;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 65;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 10;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 20;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height - 10;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 15;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 3;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 20;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 10;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + (height / 2) + 15;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height - 35;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 2;
                            },
                        }
                    }
                }
            },
            {
                id: 12,
                component: __WEBPACK_IMPORTED_MODULE_12__lips_lips__["a" /* LipsComponent */],
                meta: {
                    container: 'mouth',
                    getContainer: function () {
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster, repo, instance) {
                        monster.open('eyelashes');
                        if (monster.name === 'skeleton') {
                            monster.close('teeth');
                            monster.open('hidden-jaw');
                        }
                        if (monster.name === 'zombie') {
                            zombieJoyAnimBefore(monster, repo, instance);
                        }
                        if (monster.name === 'mummy') {
                            monster.open('mouth-fraud');
                        }
                        if (monster.name === 'spider') {
                            monster.close('mouth-decor');
                        }
                        if (monster.name === 'wolf') {
                            monster.close('tongue');
                            monster.close('drooling');
                            monster.close('jaw');
                            monster.close('teeth');
                            monster.open('jaw-closed');
                        }
                        if (monster.name === 'vampire') {
                            monster.close('mouth-figure');
                            monster.close('teeth');
                        }
                        if (!['skeleton', 'wolf', 'vampire'].includes(monster.name)) {
                            monster.close('mouth');
                        }
                    },
                    after: function (monster, repo, instance) {
                        monster.close('eyelashes');
                        if (monster.name === 'skeleton') {
                            monster.open('teeth');
                            monster.close('hidden-jaw');
                        }
                        if (monster.name === 'zombie') {
                            zombieJoyAnimAfter(monster, repo, instance);
                        }
                        if (monster.name === 'mummy') {
                            monster.close('mouth-fraud');
                        }
                        if (monster.name === 'spider') {
                            monster.open('mouth-decor');
                        }
                        if (monster.name === 'wolf') {
                            monster.open('tongue');
                            monster.open('drooling');
                            monster.open('jaw');
                            monster.open('teeth');
                            monster.close('jaw-closed');
                        }
                        if (monster.name === 'vampire') {
                            monster.open('mouth-figure');
                            monster.open('teeth');
                        }
                        if (!['skeleton', 'wolf', 'vampire'].includes(monster.name)) {
                            monster.open('mouth');
                        }
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 99.84;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 89.5;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 122.3;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 73.3;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 74.8;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 117.876;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 94.78;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 56.56;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 93.325;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 137.74;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 79.76;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 41.571;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 80.52;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 76.5;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 94.6;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 73.4;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 85.62;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 119.6;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 59.46;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 94.4;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 41.1;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 90.24;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 31.785;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 27.56;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (99.84) / 2) + width / 2;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 10;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (122.3) / 2) + width / 2) + 2;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 20;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 74.8 / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 117.876 / 2) + width / 2;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (94.78) / 2) + width / 2) + 5;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (56.56) / 2) + width / 2;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (93.325) / 2) + width / 2);
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (137.74) / 2) + width / 2);
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 50;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (41.57) / 2) + width / 2);
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 10;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 45;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 60;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 30;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 85.62 + 35;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 15;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 40;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 20;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 10;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 19;
                            },
                        }
                    }
                }
            },
            {
                id: 11,
                component: __WEBPACK_IMPORTED_MODULE_11__wig_wig__["a" /* WigComponent */],
                meta: {
                    container: 'head-figure',
                    getContainer: function () {
                        return this.container;
                    },
                    uniq: true,
                    emotion: 'joyful',
                    before: function (monster, repo, instance) {
                        zombieJoyAnimBefore(monster, repo, instance);
                        if (monster.name === 'zombie') {
                            monster.close('hair');
                        }
                    },
                    after: function (monster, repo, instance) {
                        zombieJoyAnimAfter(monster, repo, instance);
                        if (monster.name === 'zombie') {
                            monster.open('hair');
                        }
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 200;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 206.7;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 178.3;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 73.3;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 119.6;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 170.7;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 190.6;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 108.6;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 188.1;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 164.2;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 170.5;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 90.1;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 200;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 203.3;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 256.1;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 73.4;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 119.7;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 170.8;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 190.7;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 186.9;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 188.3;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 243.8;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 151.5;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 90.18;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 0;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (206.7) / 2) + width / 2;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (178.3) / 2) + width / 2) + 2;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (73.3) / 2) + width / 2;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 119.7 / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 45;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (190.7) / 2) + width / 2) - 3.5;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (108.6) / 2) + width / 2;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (188.1) / 2) + width / 2);
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (164.2) / 2) + width / 2) - 0.25;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 15;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (90.1) / 2) + width / 2) - 10;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 20;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 10;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 7;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 30;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 20;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 40;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 30;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 30;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 5;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 7;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 33;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 20;
                            },
                        }
                    }
                }
            },
            {
                id: 10,
                component: __WEBPACK_IMPORTED_MODULE_10__bra_bra__["a" /* BraComponent */],
                meta: {
                    container: 'body',
                    getContainer: function () {
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster) {
                        if (monster.name === 'bed') {
                            monster.close('eyes');
                        }
                        return;
                    },
                    after: function (monster) {
                        if (monster.name === 'bed') {
                            monster.open('eyes');
                        }
                        return;
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 160;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 204;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 79.1;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 200.69;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 139.95;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 93.99;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 146;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 70.86;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 194.5;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 220;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 332.8;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 65.47;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 71;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 50;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 58.25;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 110.29;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 101.45;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 47.97;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 173;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 45.46;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 69.8;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 145.5;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 137.75;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 35.973;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 10;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (204) / 2) + width / 2) + 9;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (71.9) / 2) + width / 2) - 3.5;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 0;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 93.99 / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (146) / 2) + width / 2);
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (70.86) / 2) + width / 2;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (220) / 2) + width / 2) - 0.25;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 1.5;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 85.5;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 105;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 20;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 2;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 10;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 20;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 15;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 80;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 82;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 22;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 60;
                            },
                        }
                    }
                }
            },
            {
                id: 9,
                component: __WEBPACK_IMPORTED_MODULE_9__dress_dress__["a" /* DressComponent */],
                meta: {
                    container: 'body',
                    getContainer: function () {
                        return this.container;
                    },
                    uniq: true,
                    before: function (monster) {
                        if (['mummy', 'yaga', 'yeti', 'doctor', 'vampire', 'zombie', 'wolf'].includes(monster.name)) {
                            monster.close('body');
                        }
                        return;
                    },
                    after: function (monster) {
                        if (['mummy', 'yaga', 'yeti', 'doctor', 'vampire', 'zombie', 'wolf'].includes(monster.name)) {
                            monster.open('body');
                        }
                        ;
                        return;
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 245;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return width * 0.7;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return width * 1.3;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return width * 1.3;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return width;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return width;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return width * 1.44;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 140;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 217;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 318.25;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 326;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 159.49;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 210;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 121.5;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return height * 0.56;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return height * 1.3;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return height;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 190;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return height * 1.1;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 120;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 274;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 159.6;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 237;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 27.637;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width) / 2) + width / 2;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 25;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.3) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.3) / 2) + width / 2;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - width / 2) + width / 2;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - width / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (width * 1.4) / 2) + width / 2) - 3;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (140) / 2) + width / 2;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (318.25) / 2) + width / 2;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - 326 / 2) + width / 2) + 7;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 37;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 220;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 10;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 10;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 20;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 71;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 57;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 8;
                            },
                        }
                    }
                }
            },
            {
                id: 8,
                component: __WEBPACK_IMPORTED_MODULE_8__snivel_snivel__["a" /* SnivelComponent */],
                meta: {
                    container: 'nose',
                    getContainer: function () {
                        return this.container;
                    },
                    emotion: 'sad',
                    uniq: true,
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 27;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 25;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 11;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 22;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 15;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 15;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 52.9;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 24;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 17;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 15;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 24;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 11.64;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 47;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 44;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 20;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 78;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 26;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 26;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 90.58;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 42;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 30;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 26;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 42;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 20.4;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 20;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + width + 12.5;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + width - 7;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + width - 22;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 15 / 2) + width / 2;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (15) / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (52.9) / 2) + width / 2) - 4.5;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 24 / 2) + width / 2;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 17 / 2) + width / 2;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 3.5) / 2) + width / 2;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 24 / 2) + width / 2;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 11.64 / 2) + width / 2;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 10;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height - 7;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + height;
                            },
                        }
                    }
                }
            },
            {
                id: 7,
                component: __WEBPACK_IMPORTED_MODULE_7__moustache_moustache__["a" /* MoustacheComponent */],
                meta: {
                    container: 'mouth',
                    getContainer: function () {
                        return this.container;
                    },
                    uniq: true,
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 155;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 155;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 50;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 75;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 72;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 127;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 75.732 * 1.2;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 50;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 71;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 127;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 127;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 95.74;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 63;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 63;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 20;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 30;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 29;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 51;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 108.69 * 1.2;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 20;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 28;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 51;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 51;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 38.9;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 155 / 2) + width / 2;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 155 / 2) + width / 2;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 50 / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 75 / 2) + width / 2;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 72 / 2) + width / 2;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 127 / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (75.732 * 1.2) / 2) + width / 2;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 50 / 2) + width / 2;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + width - 67;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 127 / 2) + width / 2;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 127 / 2) + width / 2;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - 95.74 / 2) + width / 2;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 40;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 30;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 20;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 22;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 25;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 30;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 18;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 11;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 10;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 18;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 26;
                            },
                        }
                    }
                }
            },
            {
                id: 6,
                component: __WEBPACK_IMPORTED_MODULE_6__beard_beard__["a" /* BeardComponent */],
                meta: {
                    container: 'mouth',
                    getContainer: function () {
                        return this.container;
                    },
                    before: function (monster) {
                        if (monster.name === 'wolf') {
                            monster.close('tongue');
                        }
                        else if (monster.name === 'skeleton') {
                            return;
                        }
                        else if (monster.name === 'spider') {
                            monster.close('mouth');
                            monster.close('mouth-decor');
                        }
                        else {
                            monster.close('mouth');
                        }
                        return;
                    },
                    after: function (monster) {
                        if (monster.name === 'wolf') {
                            monster.open('tongue');
                        }
                        else if (monster.name === 'skeleton') {
                            return;
                        }
                        else if (monster.name === 'spider') {
                            monster.open('mouth');
                            monster.open('mouth-decor');
                        }
                        else {
                            monster.open('mouth');
                        }
                        return;
                    },
                    uniq: true,
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            zombie: function () { return 114; },
                            mummy: function (_a) {
                                var width = _a.width;
                                return width * 3.5;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return width * 9.3;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return width * 1.6;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return width * 12.8;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return width * 5;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 94.648;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return width * 2.87;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return width * 1.6;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return width * 3.5;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return width * 2;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 58.36;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            zombie: function () { return 88; },
                            mummy: function (_a) {
                                var height = _a.height;
                                return height * 3.5;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return height * 9.3;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return height * 1.6;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return height * 12.8;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return height * 5;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 163.921;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return height * 1.83;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return height * 1.6;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return height * 1.76;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return height * 2;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 46.5;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (114) / 2) + width / 2;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 3.5) / 2) + width / 2;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 9.3) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.6) / 2) + width / 2;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 12.8) / 2) + width / 2;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 5) / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (94.648) / 2) + width / 2;
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 2.87) / 2) + width / 2;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 20;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 3.5) / 2) + width / 2;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 2) / 2) + width / 2;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (58.36) / 2) + width / 2;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 20;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 22;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 30;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 30;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 10;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 30;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 10;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 10;
                            },
                        }
                    }
                }
            },
            {
                id: 4,
                component: __WEBPACK_IMPORTED_MODULE_4__mole_mole__["a" /* MoleComponent */],
                meta: {
                    onScreen: true,
                    multiple: true,
                    random: true,
                    getContainer: function () {
                        return null;
                    },
                    before: function (monster, items, instance) {
                        if (monster.animate() && monster.isOnMonster(instance.getBoundingClientRect())) {
                            var smile = monster.animate('smile')(true)();
                            var smileLids = monster.animate('smileLids')(true)();
                        }
                    },
                    after: function (monster, items) {
                        if (monster.animate()) {
                            var smile = monster.animate('smile')(false)();
                            var smileLids = monster.animate('smileLids')(false)();
                        }
                    },
                }
            },
            {
                id: 5,
                component: __WEBPACK_IMPORTED_MODULE_5__heart_heart__["a" /* HeartComponent */],
                meta: {
                    getContainer: function () {
                        return null;
                    },
                    before: zombieJoyAnimBefore,
                    after: zombieJoyAnimAfter,
                    emotion: 'joyful',
                    onScreen: true,
                    multiple: true,
                }
            },
            {
                id: 1,
                component: __WEBPACK_IMPORTED_MODULE_2__eyes_eyes__["a" /* EyesComponent */],
                meta: {
                    container: 'eyes',
                    getContainer: function () {
                        return this.container;
                    },
                    before: function (monster) {
                        monster.close('eyes');
                        return;
                    },
                    after: function (monster) {
                        monster.open('eyes');
                        return;
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return width * 2.88;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 73.414;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return height * 2.88;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 23.414;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 2.88) / 2) + width / 2;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (73.414) / 2) + width / 2);
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 2.88) / 2) + height / 2;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return ((y - (23.414) / 2) + height / 2) - 5;
                            },
                        }
                    }
                }
            },
            {
                id: 2,
                component: __WEBPACK_IMPORTED_MODULE_1__glass_glass__["a" /* GlassComponent */],
                meta: {
                    container: 'eyes',
                    getContainer: function () {
                        return this.container;
                    },
                    uniq: true,
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 2;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return width * 2.113;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return width * 3.82;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 75.79;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 145.293 * 1.2;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 2;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return height * 2.113;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return height * 3.82;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 26.578;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 123.953 * 1.2;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - width / 2) - 6;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 3.82) / 2) + width / 2;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (75.79) / 2) + width / 2;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (145.293 * 1.2) / 2) + width / 2);
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - height / 2) + 15;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 3.82) / 2) + height / 2;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return ((y - (26.578) / 2) + height / 2) + 9;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 10;
                            },
                        }
                    }
                }
            },
            {
                id: 3,
                component: __WEBPACK_IMPORTED_MODULE_3__hood_hood__["a" /* HoodComponent */],
                meta: {
                    container: 'head-figure',
                    getContainer: function () {
                        return this.container;
                    },
                    emotion: 'joyful',
                    uniq: true,
                    before: function (monster, repo, instance) {
                        zombieJoyAnimBefore(monster, repo, instance);
                        monster.open('confetti');
                    },
                    after: function (monster, repo, instance) {
                        zombieJoyAnimAfter(monster, repo, instance);
                        monster.close('confetti');
                    },
                    attr: {
                        width: {
                            default: function (_a) {
                                var width = _a.width;
                                return width * 1.5;
                            },
                            skeleton: function (_a) {
                                var width = _a.width;
                                return 65.45;
                            },
                            zombie: function (_a) {
                                var width = _a.width;
                                return 71.8;
                            },
                            mummy: function (_a) {
                                var width = _a.width;
                                return 76.885;
                            },
                            yaga: function (_a) {
                                var width = _a.width;
                                return 47.154;
                            },
                            doctor: function (_a) {
                                var width = _a.width;
                                return 82.414;
                            },
                            spider: function (_a) {
                                var width = _a.width;
                                return 106.668;
                            },
                            alien: function (_a) {
                                var width = _a.width;
                                return 50.625;
                            },
                            vampire: function (_a) {
                                var width = _a.width;
                                return 76.885;
                            },
                            yeti: function (_a) {
                                var width = _a.width;
                                return 78.4;
                            },
                            ghost: function (_a) {
                                var width = _a.width;
                                return 90.345;
                            },
                            wolf: function (_a) {
                                var width = _a.width;
                                return 41.735;
                            },
                            bed: function (_a) {
                                var width = _a.width;
                                return 64.59;
                            },
                        },
                        height: {
                            default: function (_a) {
                                var height = _a.height;
                                return height * 1.5;
                            },
                            skeleton: function (_a) {
                                var height = _a.height;
                                return 61.23;
                            },
                            zombie: function (_a) {
                                var height = _a.height;
                                return 98.59;
                            },
                            mummy: function (_a) {
                                var height = _a.height;
                                return 57.304;
                            },
                            yaga: function (_a) {
                                var height = _a.height;
                                return 64.746;
                            },
                            doctor: function (_a) {
                                var height = _a.height;
                                return 85.186;
                            },
                            spider: function (_a) {
                                var height = _a.height;
                                return 58.784;
                            },
                            alien: function (_a) {
                                var height = _a.height;
                                return 56.281;
                            },
                            vampire: function (_a) {
                                var height = _a.height;
                                return 57.304;
                            },
                            yeti: function (_a) {
                                var height = _a.height;
                                return 87.6;
                            },
                            ghost: function (_a) {
                                var height = _a.height;
                                return 76.6;
                            },
                            wolf: function (_a) {
                                var height = _a.height;
                                return 80.656;
                            },
                            bed: function (_a) {
                                var height = _a.height;
                                return 54.76;
                            },
                        },
                        x: {
                            default: function (_a) {
                                var x = _a.x, width = _a.width;
                                return (x - (width * 1.5) / 2) + width / 2;
                            },
                            skeleton: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + width - 61.23 + 10;
                            },
                            zombie: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 24;
                            },
                            mummy: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 32;
                            },
                            yaga: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 15;
                            },
                            doctor: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 49;
                            },
                            spider: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - 106.668 / 2) + width / 2) + 4;
                            },
                            alien: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + (width / 2);
                            },
                            vampire: function (_a) {
                                var x = _a.x, width = _a.width;
                                return 1.5;
                            },
                            yeti: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + (width / 2) - 5;
                            },
                            ghost: function (_a) {
                                var x = _a.x, width = _a.width;
                                return ((x - (90.345) / 2) + width / 2) + 50;
                            },
                            wolf: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x - 10;
                            },
                            bed: function (_a) {
                                var x = _a.x, width = _a.width;
                                return x + 34;
                            },
                        },
                        y: {
                            default: function (_a) {
                                var y = _a.y, height = _a.height;
                                return (y - (height * 1.5) / 2) + height / 2;
                            },
                            skeleton: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 20;
                            },
                            zombie: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 16;
                            },
                            mummy: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 14;
                            },
                            yaga: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 10;
                            },
                            doctor: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 22;
                            },
                            spider: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 15;
                            },
                            alien: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 41;
                            },
                            vampire: function (_a) {
                                var y = _a.y, height = _a.height;
                                return 20;
                            },
                            yeti: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 10;
                            },
                            ghost: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y - 30;
                            },
                            wolf: function (_a) {
                                var y = _a.y, height = _a.height;
                                return -10;
                            },
                            bed: function (_a) {
                                var y = _a.y, height = _a.height;
                                return y + 6;
                            },
                        }
                    },
                }
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
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v4__ = __webpack_require__(160);
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
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketRandomModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__ = __webpack_require__(9);
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


var TrinketRandomModel = /** @class */ (function (_super) {
    __extends(TrinketRandomModel, _super);
    function TrinketRandomModel(name, element) {
        var _this = _super.call(this, name, element) || this;
        _this.randomize = function (cb) {
            if (!_this.initiated) {
                _this.afterInit = _this.afterInit.concat([function () { return _this.randomize(cb); }]);
                return;
            }
            var random = Math.round((_this.parts.length - 1) * Math.random());
            var parts = _this.parts.reduce(function (acc, el) { return acc.concat([el]); }, []);
            var randomParts = function (arr, acc, cur) {
                if (!cur)
                    return acc;
                var randomIndex = Math.round((arr.length - 1) * Math.random());
                var randomPart = arr[randomIndex];
                var partIndex = parts.indexOf(randomPart);
                var filteredArray = arr.slice(0, randomIndex).concat(arr.slice(randomIndex + 1, arr.length));
                return randomParts(filteredArray, acc.concat([partIndex]), cur - 1);
            };
            // const selected = randomParts(parts, [], random);
            var selected = Math.round((_this.parts.length - 2) * Math.random() + 1);
            _this.load(selected);
            return cb ? cb(selected) : selected;
        };
        return _this;
    }
    TrinketRandomModel.prototype.load = function (value) {
        var _this = this;
        if (!this.initiated) {
            this.afterInit = this.afterInit.concat([function () { return _this.load(value); }]);
            return;
        }
        var part = this.parts.find(function (p, i) {
            return (typeof (value) === 'number') ? i === value : p.name === value;
        }) || this.parts.find(function (p) { return p.name === 'default'; });
        part.show();
        return;
    };
    TrinketRandomModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({}),
        __metadata("design:paramtypes", [Object, Object])
    ], TrinketRandomModel);
    return TrinketRandomModel;
}(__WEBPACK_IMPORTED_MODULE_1__trinket_uniq_model__["a" /* TrinketUniqModel */]));

//# sourceMappingURL=trinket-random.model.js.map

/***/ }),
/* 303 */,
/* 304 */,
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationSetController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_model__ = __webpack_require__(306);


var once = function (fn) {
    var called = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (called)
            throw Error('AnimationSet has been configured already');
        called = true;
        return fn.apply(void 0, args);
    };
};
var AnimationSetController = /** @class */ (function () {
    function AnimationSetController(instance, animations, recoveryPoint, recoveryFn) {
        var _this = this;
        this.instance = instance;
        this.recoveryPoint = recoveryPoint;
        this.recoveryFn = recoveryFn;
        this.state = false;
        this.current = null;
        this.queue = [];
        this.queueCleared = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.end = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.config = once(function (animations) {
            _this.animations = Object.keys(animations).reduce(function (acc, k) {
                var animation = new __WEBPACK_IMPORTED_MODULE_1__animation_model__["a" /* AnimationModel */](_this.instance, animations[k]);
                animation.onStart(function (animation) {
                    _this.setState(true);
                    _this.setCurrent(animation);
                    return;
                });
                animation.onEnd(function (animation) {
                    _this.setState(false);
                    _this.setCurrent(null);
                    return;
                });
                return acc.set(k, animation);
            }, new Map());
            return;
        });
        this.recoveryPoint = this.instance.attr();
        this.recoveryFn = function (instance, recoveryPoint) { return instance.attr(recoveryPoint); };
        this.end.subscribe(function () {
            if (!_this.queue.length)
                return _this.queueCleared.emit(null);
            var _a = _this.queue, first = _a[0], rest = _a.slice(1);
            _this.queue = rest;
            first.run();
            return;
        });
        this.config(animations);
    }
    AnimationSetController.prototype.get = function (name) {
        return this.animations.get(name);
    };
    AnimationSetController.prototype.setState = function (arg) {
        this.state = arg;
        if (this.state === false)
            this.end.emit(null);
        return this;
    };
    AnimationSetController.prototype.setCurrent = function (animation) {
        this.current = animation;
        return this;
    };
    AnimationSetController.prototype.isAnimating = function () {
        return this.state;
    };
    AnimationSetController.prototype.getInQueue = function (animation) {
        this.queue.push(animation);
        return;
    };
    AnimationSetController.prototype.onDisengage = function (cb) {
        this.queueCleared.subscribe(cb);
        return this;
    };
    AnimationSetController.prototype.recovery = function () {
        var _this = this;
        var recovery = function () { return _this.recoveryFn(_this.instance, _this.recoveryPoint); };
        this.isAnimating() ? this.onDisengage(recovery) : recovery();
        return this;
    };
    AnimationSetController.prototype.getRecoveryPoint = function () {
        return this.recoveryPoint;
    };
    AnimationSetController.prototype.run = function (name) {
        var animation = this.animations.get(name);
        if (!animation)
            throw Error('AnimationSet: No animation was found');
        if (this.isAnimating()) {
            this.getInQueue(animation);
            return this;
        }
        animation.run();
        return this;
    };
    AnimationSetController.prototype.specify = function (name) {
        return new AnimationSetControllerSpecified(this, name);
    };
    return AnimationSetController;
}());

var AnimationSetControllerSpecified = /** @class */ (function () {
    function AnimationSetControllerSpecified(parent, name) {
        this.parent = parent;
        this.name = name;
    }
    ;
    AnimationSetControllerSpecified.prototype.run = function () {
        this.parent.run(this.name);
        return this;
    };
    AnimationSetControllerSpecified.prototype.specify = function (name) {
        return false;
    };
    return AnimationSetControllerSpecified;
}());
//# sourceMappingURL=animation-set.controller.js.map

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var AnimationModel = /** @class */ (function () {
    function AnimationModel(instance, fn) {
        this.instance = instance;
        this.fn = fn;
        this.start = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.end = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ;
    AnimationModel.prototype.run = function () {
        var _this = this;
        this.start.emit(this);
        this.fn(this.instance, function () { return _this.end.emit(_this); });
        return this;
    };
    AnimationModel.prototype.onEnd = function (fn) {
        this.end.subscribe(fn);
        return this;
    };
    AnimationModel.prototype.onStart = function (fn) {
        this.start.subscribe(fn);
        return this;
    };
    return AnimationModel;
}());

//# sourceMappingURL=animation.model.js.map

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationSequenceController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_sequence_model__ = __webpack_require__(308);


var AnimationSequenceController = /** @class */ (function () {
    function AnimationSequenceController(scheme, animations) {
        var _this = this;
        this.start = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.end = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.interval = false;
        this.state = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__animation_sequence_model__["a" /* AnimationSequenceModel */](scheme, animations);
        this.start.subscribe(function () { return _this.setState(true); });
        this.end.subscribe(function () { return _this.setState(false); });
    }
    AnimationSequenceController.prototype.setState = function (arg) {
        this.state = arg;
        return;
    };
    AnimationSequenceController.prototype.setInterval = function (fn, interval) {
        var _this = this;
        this.interval = true;
        var func = function () {
            if (!_this.interval)
                return;
            setTimeout(fn, interval);
        };
        this.end.subscribe(func);
        return fn();
    };
    AnimationSequenceController.prototype.isAnimating = function () {
        return this.state;
    };
    AnimationSequenceController.prototype.run = function (interval) {
        var _this = this;
        if (this.isAnimating())
            return false;
        this.start.emit(null);
        var rec = function (acc) {
            var first = acc[0], rest = acc.slice(1);
            if (!first)
                return _this.end.emit(null);
            var arr = first instanceof Array ? first : [first];
            return arr.forEach(function (name) {
                var set = _this.model.getFunction(name)(function (set) { return set; });
                return;
            });
        };
        var scheme = this.model.getScheme();
        var run = function () { return rec(scheme); };
        interval ? this.setInterval(run, interval) : setTimeout(run, 0);
        return this;
    };
    AnimationSequenceController.prototype.clear = function () {
        this.interval = false;
    };
    return AnimationSequenceController;
}());

//# sourceMappingURL=animation-sequence.controller.js.map

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationSequenceModel; });
var AnimationSequenceModel = /** @class */ (function () {
    function AnimationSequenceModel(scheme, animations) {
        var _this = this;
        this.scheme = scheme;
        this.animations = animations;
        var keys = Object.keys(this.animations);
        var rec = function (acc) {
            if (!acc.length)
                return true;
            var current = acc[0], rest = acc.slice(1);
            var child = current instanceof Array ? rec(current) : null;
            return keys.includes(current) ? rec(rest) : false;
        };
        var isCorrect = function () { return rec(_this.scheme); };
        if (!isCorrect())
            throw new Error('AnimationSequenceModel: Wrong Scheme Values');
    }
    AnimationSequenceModel.prototype.getScheme = function () {
        return this.scheme;
    };
    AnimationSequenceModel.prototype.getFunction = function (name) {
        return this.animations[name];
    };
    return AnimationSequenceModel;
}());

//# sourceMappingURL=animation-sequence.model.js.map

/***/ }),
/* 309 */,
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cursor_position__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_fsm__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listners_handler__ = __webpack_require__(200);



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
/* 311 */
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
/* 312 */,
/* 313 */
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
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameLogic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__active_element_repository__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_fsm__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listners_handler__ = __webpack_require__(200);



var GameLogic = /** @class */ (function () {
    function GameLogic(r, items, dashboard) {
        var _this = this;
        this.r = r;
        this.fsm = new __WEBPACK_IMPORTED_MODULE_1__game_fsm__["a" /* GameFinistStateMachine */]();
        this.items = [];
        this.itemsMouseEnterListners = function (arg) {
            var items = _this.repo.getActive();
            return items.forEach(function (item) { return _this.makeListner(arg)(item.instance, 'mouseenter', item.getFn('mouseEnterOnItem')); });
        };
        this.itemMouseLeaveListner = function (arg) {
            var item = _this.repo.getCurrent();
            return _this.makeListner(arg)(item.instance, 'mouseleave', item.getFn('mouseLeaveFromItem'));
        };
        this.itemMouseDownListner = function (arg) {
            var item = _this.repo.getCurrent();
            return _this.makeListner(arg)(window, 'mousedown', item.getFn('mouseDown'));
        };
        this.itemMouseUpListner = function (arg) {
            var item = _this.repo.getCurrent();
            return _this.makeListner(arg)(window, 'mouseup', item.getFn('mouseUp'));
        };
        this.listenCursorPosition = function (arg) {
            var item = _this.repo.getCurrent();
            return _this.makeListner(arg)(window, 'mousemove', item.getFn('handleCursorPosition'));
        };
        this.listners = new __WEBPACK_IMPORTED_MODULE_2__listners_handler__["a" /* ListnersHandler */](this.r);
        this.repo = new __WEBPACK_IMPORTED_MODULE_0__active_element_repository__["a" /* ActiveElementRepository */](this.fsm, dashboard, items);
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
    GameLogic.prototype.stop = function () {
        this.itemsMouseEnterListners(false);
        return this;
    };
    GameLogic.prototype.over = function () {
        this.listners.removeListners();
        this.repo.clear();
        return this;
    };
    GameLogic.prototype.makeListner = function (arg) {
        var _this = this;
        return function (e, ev, fn) {
            return _this.listners[arg ? 'addListner' : 'removeListner'](e, ev, fn);
        };
    };
    GameLogic.prototype.setFns = function (name) {
        var fns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fns[_i - 1] = arguments[_i];
        }
        (_a = this.repo).setFns.apply(_a, [name].concat(fns));
        return this;
        var _a;
    };
    return GameLogic;
}());

//# sourceMappingURL=game-logic.js.map

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveElementRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__active_element_model__ = __webpack_require__(316);

var lib = {
    mouseEnterOnItem: function (item, ev) {
        this.update(item);
        this.fsm.select();
        return;
    },
    mouseLeaveFromItem: function (item, ev) {
        this.fsm.unselect();
        return;
    },
    handleCursorPosition: function (item, ev) {
        var _this = this;
        this.callbacks.onItemDragging.forEach(function (fn) { return fn(_this, item, ev); });
        if (this.onDashboard(ev)) {
            if (!this.fsm.isDraggedOut()) {
                this.fsm.moveOut();
            }
        }
        else {
            if (!this.fsm.isDraggedIn()) {
                this.fsm.moveIn();
            }
        }
        return;
    },
    mouseDown: function (item, ev) {
        var _this = this;
        this.fsm.grab();
        this.callbacks.onItemClick.forEach(function (fn) { return fn(_this, item, ev); });
        return;
    },
    mouseUp: function (item, ev) {
        var _this = this;
        // console.log('mouseUp');
        this.callbacks.afterItemDropped.forEach(function (fn) { return fn(_this, item, ev); });
        if (this.fsm.isDraggedIn()) {
            this.callbacks.afterItemPlaced.forEach(function (fn) { return fn(_this, item, ev); });
            this.fsm.place();
            return;
        }
        if (this.fsm.isDraggedOut()) {
            this.callbacks.afterItemDesroyed.forEach(function (fn) { return fn(_this, item, ev); });
            this.fsm.destroy();
            return;
        }
    }
};
var ActiveElementRepository = /** @class */ (function () {
    function ActiveElementRepository(fsm, onDashboard, items) {
        var _this = this;
        this.fsm = fsm;
        this.onDashboard = onDashboard;
        this.items = [];
        this.callbacks = {
            onItemClick: [],
            afterItemDropped: [],
            afterItemPlaced: [],
            afterItemDesroyed: [],
            onItemDragging: [],
            afterClear: [],
        };
        items.forEach(function (item) { return _this.addActiveElement(new __WEBPACK_IMPORTED_MODULE_0__active_element_model__["a" /* ActiveElementModel */]({
            instance: item.node,
            component: item.component,
            meta: item.meta
        })); });
    }
    ActiveElementRepository.prototype.addActiveElement = function (element) {
        var _this = this;
        var functions = Object.keys(lib);
        functions.forEach(function (name) {
            var fn = lib[name].bind(_this, element);
            element.addFn(name, fn);
            return;
        });
        this.items.push(element);
        return this;
    };
    ActiveElementRepository.prototype.update = function (arg) {
        this.current = arg;
        return this;
    };
    ActiveElementRepository.prototype.addActiveElementCopy = function (element, instance) {
        var copy = element.copy(instance);
        this.addActiveElement(copy);
        return copy;
    };
    ActiveElementRepository.prototype.removeActiveElement = function (element) {
        var filtered = this.items.filter(function (e) { return e !== element; });
        this.items = filtered;
        return this;
    };
    ActiveElementRepository.prototype.findActiveElementByInstance = function (instance) {
        return this.items.find(function (e) { return e.instance === instance; });
    };
    ActiveElementRepository.prototype.getCurrent = function () {
        return this.current;
    };
    ActiveElementRepository.prototype.getActive = function () {
        return this.items.filter(function (item) { return item.isActive(); });
    };
    ActiveElementRepository.prototype.getCopies = function () {
        return this.items.filter(function (item) { return item.isCopy(); });
    };
    ActiveElementRepository.prototype.clear = function () {
        var _this = this;
        var filtered = this.items.filter(function (e) { return e.type === 'original'; });
        this.items = filtered;
        var originals = this.items.forEach(function (e) { return e.deleteAllCopies(); });
        this.callbacks.afterClear.forEach(function (fn) { return fn(_this, _this.items); });
        return;
    };
    ActiveElementRepository.prototype.setFns = function (name) {
        var fns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fns[_i - 1] = arguments[_i];
        }
        var oldFns = this.callbacks[name];
        this.callbacks[name] = oldFns.concat(fns);
        return this;
    };
    return ActiveElementRepository;
}());

//# sourceMappingURL=active-element.repository.js.map

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveElementModel; });
/* unused harmony export ActiveElementDescendentModel */
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
        this.meta = obj.meta;
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
            meta: this.meta,
        }, this);
        this.children = this.children.concat([child]);
        return child;
    };
    ActiveElementModel.prototype.deleteCopy = function (instance) {
        this.children = this.children.filter(function (i) { return i === instance; });
        return this;
    };
    ActiveElementModel.prototype.deleteAllCopies = function () {
        var _this = this;
        this.children.forEach(function (ch) { return _this.deleteCopy(ch); });
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
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monsters_monsters_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trinkets_trinkets_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_holder_item_holder_module__ = __webpack_require__(347);
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
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonstersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alien_alien__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skeleton_skeleton__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zombie_zombie__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bed_bed__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spider_spider__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vampire_vampire__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wolf_wolf__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mummy_mummy__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__yaga_yaga__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__doctor_doctor__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__yeti_yeti__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ghost_ghost__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__monsters_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__monsters_host_directive__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__monsters_screen_directive__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__monster_part_directive__ = __webpack_require__(187);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_3__zombie_zombie__["a" /* ZombieComponent */], __WEBPACK_IMPORTED_MODULE_2__skeleton_skeleton__["a" /* SkeletonComponent */], __WEBPACK_IMPORTED_MODULE_1__alien_alien__["a" /* AlienComponent */], __WEBPACK_IMPORTED_MODULE_4__bed_bed__["a" /* BedComponent */], __WEBPACK_IMPORTED_MODULE_5__spider_spider__["a" /* SpiderComponent */], __WEBPACK_IMPORTED_MODULE_6__vampire_vampire__["a" /* VampireComponent */], __WEBPACK_IMPORTED_MODULE_7__wolf_wolf__["a" /* WolfComponent */], __WEBPACK_IMPORTED_MODULE_8__mummy_mummy__["a" /* MummyComponent */], __WEBPACK_IMPORTED_MODULE_9__yaga_yaga__["a" /* YagaComponent */], __WEBPACK_IMPORTED_MODULE_10__doctor_doctor__["a" /* DoctorComponent */], __WEBPACK_IMPORTED_MODULE_11__yeti_yeti__["a" /* YetiComponent */], __WEBPACK_IMPORTED_MODULE_12__ghost_ghost__["a" /* GhostComponent */], __WEBPACK_IMPORTED_MODULE_13__monsters_component__["a" /* MonstersComponent */], __WEBPACK_IMPORTED_MODULE_14__monsters_host_directive__["a" /* MonstersHostDirective */], __WEBPACK_IMPORTED_MODULE_15__monsters_screen_directive__["a" /* MonstersScreenDirective */], __WEBPACK_IMPORTED_MODULE_16__monster_part_directive__["a" /* MonsterPartDirective */]],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__zombie_zombie__["a" /* ZombieComponent */], __WEBPACK_IMPORTED_MODULE_2__skeleton_skeleton__["a" /* SkeletonComponent */], __WEBPACK_IMPORTED_MODULE_1__alien_alien__["a" /* AlienComponent */], __WEBPACK_IMPORTED_MODULE_4__bed_bed__["a" /* BedComponent */], __WEBPACK_IMPORTED_MODULE_5__spider_spider__["a" /* SpiderComponent */], __WEBPACK_IMPORTED_MODULE_6__vampire_vampire__["a" /* VampireComponent */], __WEBPACK_IMPORTED_MODULE_7__wolf_wolf__["a" /* WolfComponent */], __WEBPACK_IMPORTED_MODULE_9__yaga_yaga__["a" /* YagaComponent */], __WEBPACK_IMPORTED_MODULE_10__doctor_doctor__["a" /* DoctorComponent */], __WEBPACK_IMPORTED_MODULE_11__yeti_yeti__["a" /* YetiComponent */], __WEBPACK_IMPORTED_MODULE_8__mummy_mummy__["a" /* MummyComponent */], __WEBPACK_IMPORTED_MODULE_12__ghost_ghost__["a" /* GhostComponent */],],
            exports: [__WEBPACK_IMPORTED_MODULE_13__monsters_component__["a" /* MonstersComponent */]]
        })
    ], MonstersModule);
    return MonstersModule;
}());

//# sourceMappingURL=monsters.module.js.map

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__glass_glass__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eyes_eyes__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hood_hood__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mole_mole__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__heart_heart__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__beard_beard__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__moustache_moustache__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__snivel_snivel__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dress_dress__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bra_bra__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wig_wig__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lips_lips__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lollipop_lollipop__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__egg_egg__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__earrings_earrings__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__necklace_necklace__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__flatulence_flatulence__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__flower_flower__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__bubble_bubble__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pigtail_pigtail__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__trinkets_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__trinket_host_directive__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__trinket_random_part_directive__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__trinket_uniq_part_directive__ = __webpack_require__(158);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_2__glass_glass__["a" /* GlassComponent */], __WEBPACK_IMPORTED_MODULE_3__eyes_eyes__["a" /* EyesComponent */], __WEBPACK_IMPORTED_MODULE_4__hood_hood__["a" /* HoodComponent */], __WEBPACK_IMPORTED_MODULE_5__mole_mole__["a" /* MoleComponent */], __WEBPACK_IMPORTED_MODULE_6__heart_heart__["a" /* HeartComponent */], __WEBPACK_IMPORTED_MODULE_7__beard_beard__["a" /* BeardComponent */], __WEBPACK_IMPORTED_MODULE_8__moustache_moustache__["a" /* MoustacheComponent */], __WEBPACK_IMPORTED_MODULE_9__snivel_snivel__["a" /* SnivelComponent */], __WEBPACK_IMPORTED_MODULE_10__dress_dress__["a" /* DressComponent */], __WEBPACK_IMPORTED_MODULE_11__bra_bra__["a" /* BraComponent */], __WEBPACK_IMPORTED_MODULE_12__wig_wig__["a" /* WigComponent */], __WEBPACK_IMPORTED_MODULE_13__lips_lips__["a" /* LipsComponent */], __WEBPACK_IMPORTED_MODULE_14__lollipop_lollipop__["a" /* LollipopComponent */], __WEBPACK_IMPORTED_MODULE_15__egg_egg__["a" /* EggComponent */], __WEBPACK_IMPORTED_MODULE_16__earrings_earrings__["a" /* EarringsComponent */], __WEBPACK_IMPORTED_MODULE_17__necklace_necklace__["a" /* NecklaceComponent */], __WEBPACK_IMPORTED_MODULE_18__flatulence_flatulence__["a" /* FlatulenceComponent */], __WEBPACK_IMPORTED_MODULE_19__flower_flower__["a" /* FlowerComponent */], __WEBPACK_IMPORTED_MODULE_20__bubble_bubble__["a" /* BubbleComponent */], __WEBPACK_IMPORTED_MODULE_21__pigtail_pigtail__["a" /* PigtailComponent */], __WEBPACK_IMPORTED_MODULE_22__trinkets_component__["a" /* TrinketsComponent */], __WEBPACK_IMPORTED_MODULE_23__trinket_host_directive__["a" /* TrinketHostDirective */], __WEBPACK_IMPORTED_MODULE_24__trinket_random_part_directive__["a" /* TrinketRandomPartDirective */], __WEBPACK_IMPORTED_MODULE_25__trinket_uniq_part_directive__["a" /* TrinketUniqPartDirective */]],
            providers: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__glass_glass__["a" /* GlassComponent */], __WEBPACK_IMPORTED_MODULE_3__eyes_eyes__["a" /* EyesComponent */], __WEBPACK_IMPORTED_MODULE_4__hood_hood__["a" /* HoodComponent */], __WEBPACK_IMPORTED_MODULE_5__mole_mole__["a" /* MoleComponent */], __WEBPACK_IMPORTED_MODULE_6__heart_heart__["a" /* HeartComponent */], __WEBPACK_IMPORTED_MODULE_7__beard_beard__["a" /* BeardComponent */], __WEBPACK_IMPORTED_MODULE_8__moustache_moustache__["a" /* MoustacheComponent */], __WEBPACK_IMPORTED_MODULE_9__snivel_snivel__["a" /* SnivelComponent */], __WEBPACK_IMPORTED_MODULE_10__dress_dress__["a" /* DressComponent */], __WEBPACK_IMPORTED_MODULE_11__bra_bra__["a" /* BraComponent */], __WEBPACK_IMPORTED_MODULE_12__wig_wig__["a" /* WigComponent */], __WEBPACK_IMPORTED_MODULE_13__lips_lips__["a" /* LipsComponent */], __WEBPACK_IMPORTED_MODULE_15__egg_egg__["a" /* EggComponent */], __WEBPACK_IMPORTED_MODULE_16__earrings_earrings__["a" /* EarringsComponent */], __WEBPACK_IMPORTED_MODULE_17__necklace_necklace__["a" /* NecklaceComponent */], __WEBPACK_IMPORTED_MODULE_18__flatulence_flatulence__["a" /* FlatulenceComponent */], __WEBPACK_IMPORTED_MODULE_20__bubble_bubble__["a" /* BubbleComponent */], __WEBPACK_IMPORTED_MODULE_14__lollipop_lollipop__["a" /* LollipopComponent */], __WEBPACK_IMPORTED_MODULE_21__pigtail_pigtail__["a" /* PigtailComponent */], __WEBPACK_IMPORTED_MODULE_19__flower_flower__["a" /* FlowerComponent */],],
            exports: [__WEBPACK_IMPORTED_MODULE_22__trinkets_component__["a" /* TrinketsComponent */]]
        })
    ], TrinketsModule);
    return TrinketsModule;
}());

//# sourceMappingURL=trinkets.module.js.map

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrinketRandomPartDirective; });
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

var TrinketRandomPartDirective = /** @class */ (function () {
    function TrinketRandomPartDirective(el, templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.shown = false;
        this.element = el.nativeElement;
        this.show();
    }
    TrinketRandomPartDirective.prototype.show = function () {
        if (!this.shown) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.shown = true;
        }
        return this;
    };
    TrinketRandomPartDirective.prototype.hide = function () {
        if (this.shown) {
            this.viewContainerRef.clear();
            this.shown = false;
        }
        return this;
    };
    TrinketRandomPartDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[trinket-random-part]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], TrinketRandomPartDirective);
    return TrinketRandomPartDirective;
}());

//# sourceMappingURL=trinket-random-part.directive.js.map

/***/ }),
/* 346 */
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
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemHolderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_holder_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_host_directive__ = __webpack_require__(202);
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
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bg_directive__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__background_tablet_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__background_mobile_component__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BackgroundModule = /** @class */ (function () {
    function BackgroundModule() {
    }
    BackgroundModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__background_tablet_component__["a" /* BackgroundTabletComponent */], __WEBPACK_IMPORTED_MODULE_3__background_mobile_component__["a" /* BackgroundMobileComponent */], __WEBPACK_IMPORTED_MODULE_1__bg_directive__["a" /* BackgroundAnchorDirective */]],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__background_tablet_component__["a" /* BackgroundTabletComponent */], __WEBPACK_IMPORTED_MODULE_3__background_mobile_component__["a" /* BackgroundMobileComponent */],],
            exports: [__WEBPACK_IMPORTED_MODULE_2__background_tablet_component__["a" /* BackgroundTabletComponent */], __WEBPACK_IMPORTED_MODULE_3__background_mobile_component__["a" /* BackgroundMobileComponent */]]
        })
    ], BackgroundModule);
    return BackgroundModule;
}());

//# sourceMappingURL=bg.module.js.map

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_repository__ = __webpack_require__(159);
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
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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

/***/ })
],[251]);
//# sourceMappingURL=main.js.map