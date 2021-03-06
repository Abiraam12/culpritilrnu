(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("Swiper"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "Swiper"], factory);
	else if(typeof exports === 'object')
		exports["ReactIdSwiper"] = factory(require("React"), require("Swiper"));
	else
		root["ReactIdSwiper"] = factory(root["React"], root["Swiper"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var swiper_1 = __importDefault(__webpack_require__(2));
var object_assign_1 = __importDefault(__webpack_require__(3));
var utils_1 = __webpack_require__(4);
var ReactIdSwiper = function (props) {
    var swiperRef = react_1.createRef();
    var swiper = null;
    var activeSlideKey = props.activeSlideKey, ContainerEl = props.ContainerEl, children = props.children, containerClass = props.containerClass, getSwiper = props.getSwiper, navigation = props.navigation, noSwiping = props.noSwiping, pagination = props.pagination, parallax = props.parallax, parallaxEl = props.parallaxEl, WrapperEl = props.WrapperEl, wrapperClass = props.wrapperClass, rebuildOnUpdate = props.rebuildOnUpdate, renderScrollbar = props.renderScrollbar, renderPagination = props.renderPagination, renderPrevButton = props.renderPrevButton, renderNextButton = props.renderNextButton, renderParallax = props.renderParallax, rtl = props.rtl, scrollbar = props.scrollbar, shouldSwiperUpdate = props.shouldSwiperUpdate, slideClass = props.slideClass, loop = props.loop;
    // No render if wrapper elements are not provided
    if (!children || !ContainerEl || !WrapperEl) {
        return null;
    }
    // Validate children props
    if (!utils_1.validateChildren(children)) {
        console.warn('Children should be react element or an array of react element!!');
        return null;
    }
    // Get current active slide key
    var getActiveSlideIndexFromProps = function () {
        if (!activeSlideKey) {
            return null;
        }
        var activeSlideId = 0;
        // In loop mode first slide index should be 1
        var id = loop ? 1 : 0;
        react_1.Children.forEach(children, function (child) {
            if (react_1.isValidElement(child)) {
                if (child.key === activeSlideKey) {
                    activeSlideId = id;
                }
                id += 1;
            }
        });
        return activeSlideId;
    };
    // Get swiper instance
    var getSwiperInstance = function (swiperInstance) {
        if (typeof getSwiper === 'function') {
            getSwiper(swiperInstance);
        }
    };
    // Destroy swiper
    var destroySwiper = function () {
        if (swiper !== null) {
            swiper.destroy(true, true);
            swiper = null;
            getSwiperInstance(swiper);
        }
    };
    // Initialize swiper
    var buildSwiper = function () {
        if (swiperRef.current && swiper === null) {
            swiper = new swiper_1.default(swiperRef.current, object_assign_1.default({}, props));
            getSwiperInstance(swiper);
        }
    };
    // Rebuild swiper
    var rebuildSwiper = function () {
        destroySwiper();
        buildSwiper();
    };
    // Update swiper
    var updateSwiper = function () {
        if (swiper !== null) {
            swiper.update();
            getSwiperInstance(swiper);
        }
    };
    // Render slides
    var renderContent = function (e) {
        if (!utils_1.isReactElement(e)) {
            return null;
        }
        var slideClassNames = [slideClass, e.props.className];
        if (noSwiping) {
            slideClassNames.push('swiper-no-swiping');
        }
        return react_1.cloneElement(e, __assign({}, e.props, { className: slideClassNames.join(' ').trim() }));
    };
    // Only execute when component is mounted or unmounted
    react_1.useEffect(function () {
        buildSwiper();
        var slideToIndex = getActiveSlideIndexFromProps();
        if (swiper !== null && slideToIndex !== null) {
            swiper.slideTo(slideToIndex);
        }
        return function () { return destroySwiper(); };
    }, []);
    // Execute each time when props are updated
    react_1.useEffect(function () {
        if (swiper !== null) {
            if (rebuildOnUpdate) {
                rebuildSwiper();
            }
            else if (shouldSwiperUpdate) {
                updateSwiper();
                var numSlides = swiper.slides.length;
                if (numSlides <= swiper.activeIndex) {
                    var index = Math.max(numSlides - 1, 0);
                    swiper.slideTo(index);
                }
            }
            var slideToIndex = getActiveSlideIndexFromProps();
            if (slideToIndex !== null) {
                swiper.slideTo(slideToIndex);
            }
        }
    });
    return (react_1.default.createElement(ContainerEl, { className: containerClass, dir: rtl && 'rtl', ref: swiperRef },
        parallax && parallaxEl && renderParallax && renderParallax(props),
        react_1.default.createElement(WrapperEl, { className: wrapperClass }, react_1.Children.map(children, renderContent)),
        pagination && pagination.el && renderPagination && renderPagination(props),
        scrollbar && scrollbar.el && renderScrollbar && renderScrollbar(props),
        navigation && navigation.nextEl && renderNextButton && renderNextButton(props),
        navigation && navigation.prevEl && renderPrevButton && renderPrevButton(props)));
};
// Default props
ReactIdSwiper.defaultProps = {
    containerClass: 'swiper-container',
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    ContainerEl: 'div',
    WrapperEl: 'div',
    renderScrollbar: function (_a) {
        var scrollbar = _a.scrollbar;
        return scrollbar ? react_1.default.createElement("div", { className: utils_1.classNames(scrollbar.el) }) : null;
    },
    renderPagination: function (_a) {
        var pagination = _a.pagination;
        return pagination ? react_1.default.createElement("div", { className: utils_1.classNames(pagination.el) }) : null;
    },
    renderPrevButton: function (_a) {
        var navigation = _a.navigation;
        return navigation ? react_1.default.createElement("div", { className: utils_1.classNames(navigation.prevEl) }) : null;
    },
    renderNextButton: function (_a) {
        var navigation = _a.navigation;
        return navigation ? react_1.default.createElement("div", { className: utils_1.classNames(navigation.nextEl) }) : null;
    },
    renderParallax: function (_a) {
        var parallaxEl = _a.parallaxEl;
        return parallaxEl ? (react_1.default.createElement("div", { className: utils_1.classNames(parallaxEl.el), "data-swiper-parallax": parallaxEl.value })) : null;
    }
};
exports.default = ReactIdSwiper;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
exports.classNames = function (el) {
    if (typeof el === 'string') {
        return el
            .split('.')
            .join(' ')
            .trim();
    }
    else if (el instanceof HTMLElement) {
        return el.className;
    }
    return '';
};
exports.validateChildren = function (children) {
    var isValid = true;
    if (Array.isArray(children)) {
        react_1.Children.forEach(children, function (child) {
            if (!react_1.isValidElement(child)) {
                isValid = false;
            }
        });
    }
    else {
        isValid = react_1.isValidElement(children);
    }
    return isValid;
};
exports.isReactElement = function (element) {
    return react_1.isValidElement(element) &&
        (typeof element.type === 'string' ||
            typeof element.type === 'function' ||
            typeof element.type === 'object');
};
exports.isModuleAvailable = function (modules, moduleName) {
    var moduleAvailable = false;
    for (var i = 0; i < modules.length; i++) {
        if (modules[i].name === moduleName) {
            moduleAvailable = true;
            break;
        }
    }
    return moduleAvailable;
};


/***/ })
/******/ ]);
});