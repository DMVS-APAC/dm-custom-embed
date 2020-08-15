/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Entries/dm-custom-embed.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/Player/Scss/main.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/Player/Scss/main.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap);"]);
// Module
exports.push([module.i, ".dailymotion-cpe:before {\n  content: \"\";\n  padding-top: 56.25%;\n  background: #000;\n  display: block;\n  -webkit-animation: slideInDown;\n  animation: slideInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1; }\n\n.dm__pre-video-title {\n  text-align: var(--dm-video-align, center) !important;\n  margin: var(--dm-video-margin, 8px 0) !important;\n  font-style: var(--dm-video-style, normal) !important;\n  color: var(--dm-video-color, #000) !important;\n  font-size: var(--dm-video-size, 1.2em) !important;\n  font-weight: var(--dm-video-weight, 700) !important; }\n\n.dm__info-card {\n  background: var(--dm-info-card-bg, #eee) !important;\n  padding: var(--dm-info-card-padding, 8px 13px) !important;\n  display: flex;\n  text-align: var(--dm-info-card-align, left) !important;\n  /* Title*/\n  --dm-title-align: left;\n  --dm-title-weight: 700;\n  --dm-title-size: 1.1em; }\n\n.dm__text-wrapper {\n  width: calc(100% - 80px);\n  padding-right: 13px; }\n\n.dm__video-title {\n  text-align: var(--dm-title-align, center) !important;\n  margin: var(--dm-title-margin, 8px 0) !important;\n  font-style: var(--dm-title-style, normal) !important;\n  color: var(--dm-title-color, inherit) !important;\n  font-size: var(--dm-title-size, 1em) !important;\n  font-weight: var(--dm-title-weight, 400) !important;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%; }\n\n.dm__video-desc {\n  text-align: var(--dm-desc-align, left) !important;\n  margin: var(--dm-desc-margin, 0 0 8px) !important;\n  font-style: var(--dm-desc-style, normal) !important;\n  color: var(--dm-desc-color, inherit) !important;\n  font-size: var(--dm-desc-size, 0.9em) !important;\n  font-weight: var(--dm-desc-weight, inherit) !important;\n  padding-top: 13px;\n  border-top: solid #666 1px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1; }\n\n.dm__ava-wrapper {\n  width: 80px; }\n\n.dm__owner-ava {\n  width: 100%;\n  height: auto; }\n\n.dm-player {\n  overflow: hidden;\n  height: 0;\n  /* Cover the video that not playing yet when ad is playing*/ }\n  .dm-player .insider {\n    display: none; }\n  .dm-player.dm-playback-ready {\n    height: auto;\n    -webkit-animation: showPlayer 1 1s;\n    animation: showPlayer 1 1s;\n    transform-origin: top; }\n    .dm-player.dm-playback-ready .insider {\n      display: block; }\n  .dm-player .insider.dm-disabled:after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6); }\n\n/* Keyframe for animate the player*/\n@-webkit-keyframes slideInDown {\n  from {\n    padding-top: 0; }\n  to {\n    padding-top: 56.25%; } }\n\n@keyframes slideInDown {\n  from {\n    padding-top: 0; }\n  to {\n    padding-top: 56.25%; } }\n\n@-webkit-keyframes showPlayer {\n  from {\n    transform: scaleY(0); }\n  to {\n    transform: scaleY(1); } }\n\n@keyframes showPlayer {\n  from {\n    transform: scaleY(0); }\n  to {\n    transform: scaleY(1); } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/Playlist/Scss/playlist.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/Playlist/Scss/playlist.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dm-playlist {\n  background: var(--dm-playlist-bg, #232323) !important;\n  padding: 0 40px !important; }\n  .dm-playlist .slider {\n    position: relative !important; }\n  .dm-playlist .frame {\n    width: 100% !important;\n    position: relative !important;\n    overflow: hidden !important;\n    white-space: nowrap !important; }\n  .dm-playlist .slides {\n    display: inline-block !important;\n    width: 100% !important;\n    padding: 0 !important; }\n  .dm-playlist .prev, .dm-playlist .next {\n    position: absolute;\n    top: 50%;\n    margin-top: -25px;\n    display: block;\n    cursor: pointer;\n    background: none;\n    padding: 0;\n    border: 0; }\n\n/*.dm__now-playing-status {*/\n/*  --dm-now-playing-text-color: #fff;*/\n/*  --dm-now-playing-text-size: .8em;*/\n/*  --dm-now-playing-title-color: #fff;*/\n/*  --dm-now-playing-title-size: 1em;*/\n/*  --dm-now-playing-bg: transparent;*/\n/**/\n/*  padding: 10px 0;*/\n/*}*/\n/**/\n/*.dm__now-playing-text {*/\n/*  color: var(--dm-now-playing-text-color);*/\n/*  font-size: var(--dm-now-playing-text-size);*/\n/*  margin-bottom: 10px;*/\n/*}*/\n/*.dm__now-playing-title {*/\n/*  color: var(--dm-now-playing-title-color);*/\n/*  font-size: var(--dm-now-playing-title-size);*/\n/*  white-space: nowrap;*/\n/*  overflow: hidden;*/\n/*  text-overflow: ellipsis;*/\n/*}*/\n.dm__playlist-slide {\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  width: 133px;\n  vertical-align: top; }\n  .dm__playlist-slide:after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0; }\n\n.dm__slide-wrapper {\n  padding: 5px; }\n\n.dm__playlist-active .dm__playlist-cont-thumbnail:after {\n  content: \"Playing now\";\n  display: block; }\n\n.dm__playlist-active + .dm__playlist-slide .dm__playlist-cont-thumbnail:after {\n  content: \"Playing next\";\n  background: var(--dm-next-playing-bg, rgba(35, 35, 35, 0.95));\n  display: block; }\n\n.dm__playlist-active .dm__playlist-duration, .dm__playlist-active + .dm__playlist-slide .dm__playlist-duration {\n  background: none !important; }\n\n.dm__playlist-cont-thumbnail {\n  width: 100%;\n  position: relative;\n  margin: 0;\n  overflow: hidden; }\n  .dm__playlist-cont-thumbnail:before {\n    content: \"\";\n    padding-top: 56.25%;\n    background: #ddd;\n    display: block;\n    -webkit-animation: slideInDown;\n    animation: slideInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1; }\n  .dm__playlist-cont-thumbnail:after {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: var(--dm-now-playing-bg, #56c7ff);\n    color: var(--dm-now-playing-color, #fff) !important;\n    padding: 4px 10px;\n    font-size: var(--dm-playlist-publisher-size, 0.6em) !important;\n    font-family: \"Noto Sans\", Arial, sans-serif;\n    display: none; }\n\n.dm__playlist-thumbnail {\n  width: 100%;\n  height: auto;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.dm__playlist-duration {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  color: #fff !important;\n  background: rgba(0, 0, 0, 0.6) !important;\n  padding: 4px !important;\n  font-size: .6em !important;\n  font-family: \"Noto Sans\", Arial, sans-serif !important;\n  z-index: 1; }\n\n.dm__playlist-info-container {\n  background: var(--dm-playlist-info-bg, #414141) !important;\n  padding: 6px 10px !important;\n  font-family: var(--dm-playlist-font-family, \"Noto Sans\", Arial, sans-serif) !important;\n  font-weight: var(--dm-playlist-weight, 700) !important;\n  color: var(--dm-playlist-color, #fff) !important; }\n\n.dm__playlist-publisher-name {\n  margin: 12px 0 0 !important;\n  color: inherit !important;\n  font-size: var(--dm-playlist-publisher-size, 0.6em) !important;\n  line-height: 1.3em !important;\n  display: flex; }\n\n.dm__playlist-publisher-ava {\n  width: 12px;\n  margin-right: 8px; }\n\n.dm__playlist-title {\n  margin: 0 !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  -webkit-font-smoothing: antialiased;\n  white-space: normal !important;\n  font-size: var(--dm-playlist-title-size, 0.7em) !important;\n  font-width: inherit !important;\n  line-height: 1.3em !important;\n  height: 3.87em !important; }\n\n.next {\n  right: -40px; }\n\n.prev {\n  left: -40px; }\n\n.next svg, .prev svg {\n  width: 25px; }\n\n/* SVG style*/\n.arrow {\n  fill: var(--arrow-color, #ddd); }\n\n.dm-playlist--right-side {\n  --dm-playlist-display: flex;\n  --dm-player-size: 50%;\n  --dm-player-ratio: 29%;\n  --dm-playlist-size: 40%;\n  --dm-playlist-bg: #000;\n  display: var(--dm-playlist-display);\n  justify-content: flex-start;\n  align-items: flex-start;\n  background: var(--dm-playlist-bg); }\n  .dm-playlist--right-side .dailymotion-cpe {\n    width: var(--dm-player-size);\n    padding-bottom: var(--dm-player-ratio); }\n  .dm-playlist--right-side .dm-playlist {\n    width: var(--dm-playlist-size); }\n\n@media (max-width: 767px) {\n  .dm-playlist--right-side {\n    --dm-playlist-display: block;\n    --dm-player-size: 100%;\n    --dm-player-ratio: 56.25%;\n    --dm-playlist-size: calc(100% - 80px); } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/lory.js/dist/lory.js":
/*!*******************************************!*\
  !*** ./node_modules/lory.js/dist/lory.js ***!
  \*******************************************/
/*! no static exports found */
/*! exports used: lory */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* globals jQuery */

exports.lory = lory;

var _detectPrefixes = __webpack_require__(1);

var _detectPrefixes2 = _interopRequireDefault(_detectPrefixes);

var _detectSupportsPassive = __webpack_require__(2);

var _detectSupportsPassive2 = _interopRequireDefault(_detectSupportsPassive);

var _dispatchEvent = __webpack_require__(3);

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _defaults = __webpack_require__(6);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slice = Array.prototype.slice;

function lory(slider, opts) {
    var position = void 0;
    var slidesWidth = void 0;
    var frameWidth = void 0;
    var slides = void 0;

    /**
     * slider DOM elements
     */
    var frame = void 0;
    var slideContainer = void 0;
    var prevCtrl = void 0;
    var nextCtrl = void 0;
    var prefixes = void 0;
    var transitionEndCallback = void 0;

    var index = 0;
    var options = {};
    var touchEventParams = (0, _detectSupportsPassive2.default)() ? { passive: true } : false;

    /**
     * if object is jQuery convert to native DOM element
     */
    if (typeof jQuery !== 'undefined' && slider instanceof jQuery) {
        slider = slider[0];
    }

    /**
     * private
     * set active class to element which is the current slide
     */
    function setActiveElement(slides, currentIndex) {
        var _options = options,
            classNameActiveSlide = _options.classNameActiveSlide;


        slides.forEach(function (element, index) {
            if (element.classList.contains(classNameActiveSlide)) {
                element.classList.remove(classNameActiveSlide);
            }
        });

        slides[currentIndex].classList.add(classNameActiveSlide);
    }

    /**
     * private
     * setupInfinite: function to setup if infinite is set
     *
     * @param  {array} slideArray
     * @return {array} array of updated slideContainer elements
     */
    function setupInfinite(slideArray) {
        var _options2 = options,
            infinite = _options2.infinite;


        var front = slideArray.slice(0, infinite);
        var back = slideArray.slice(slideArray.length - infinite, slideArray.length);

        front.forEach(function (element) {
            var cloned = element.cloneNode(true);

            slideContainer.appendChild(cloned);
        });

        back.reverse().forEach(function (element) {
            var cloned = element.cloneNode(true);

            slideContainer.insertBefore(cloned, slideContainer.firstChild);
        });

        slideContainer.addEventListener(prefixes.transitionEnd, onTransitionEnd);

        return slice.call(slideContainer.children);
    }

    /**
     * [dispatchSliderEvent description]
     * @return {[type]} [description]
     */
    function dispatchSliderEvent(phase, type, detail) {
        (0, _dispatchEvent2.default)(slider, phase + '.lory.' + type, detail);
    }

    /**
     * translates to a given position in a given time in milliseconds
     *
     * @to        {number} number in pixels where to translate to
     * @duration  {number} time in milliseconds for the transistion
     * @ease      {string} easing css property
     */
    function translate(to, duration, ease) {
        var style = slideContainer && slideContainer.style;

        if (style) {
            style[prefixes.transition + 'TimingFunction'] = ease;
            style[prefixes.transition + 'Duration'] = duration + 'ms';
            style[prefixes.transform] = 'translateX(' + to + 'px)';
        }
    }

    /**
     * returns an element's width
     */
    function elementWidth(element) {
        return element.getBoundingClientRect().width || element.offsetWidth;
    }

    /**
     * slidefunction called by prev, next & touchend
     *
     * determine nextIndex and slide to next postion
     * under restrictions of the defined options
     *
     * @direction  {boolean}
     */
    function slide(nextIndex, direction) {
        var _options3 = options,
            slideSpeed = _options3.slideSpeed,
            slidesToScroll = _options3.slidesToScroll,
            infinite = _options3.infinite,
            rewind = _options3.rewind,
            rewindPrev = _options3.rewindPrev,
            rewindSpeed = _options3.rewindSpeed,
            ease = _options3.ease,
            classNameActiveSlide = _options3.classNameActiveSlide,
            _options3$classNameDi = _options3.classNameDisabledNextCtrl,
            classNameDisabledNextCtrl = _options3$classNameDi === undefined ? 'disabled' : _options3$classNameDi,
            _options3$classNameDi2 = _options3.classNameDisabledPrevCtrl,
            classNameDisabledPrevCtrl = _options3$classNameDi2 === undefined ? 'disabled' : _options3$classNameDi2;


        var duration = slideSpeed;

        var nextSlide = direction ? index + 1 : index - 1;
        var maxOffset = Math.round(slidesWidth - frameWidth);

        dispatchSliderEvent('before', 'slide', {
            index: index,
            nextSlide: nextSlide
        });

        /**
         * Reset control classes
         */
        if (prevCtrl) {
            prevCtrl.classList.remove(classNameDisabledPrevCtrl);
        }
        if (nextCtrl) {
            nextCtrl.classList.remove(classNameDisabledNextCtrl);
        }

        if (typeof nextIndex !== 'number') {
            if (direction) {
                if (infinite && index + infinite * 2 !== slides.length) {
                    nextIndex = index + (infinite - index % infinite);
                } else {
                    nextIndex = index + slidesToScroll;
                }
            } else {
                if (infinite && index % infinite !== 0) {
                    nextIndex = index - index % infinite;
                } else {
                    nextIndex = index - slidesToScroll;
                }
            }
        }

        nextIndex = Math.min(Math.max(nextIndex, 0), slides.length - 1);

        if (infinite && direction === undefined) {
            nextIndex += infinite;
        }

        if (rewindPrev && Math.abs(position.x) === 0 && direction === false) {
            nextIndex = slides.length - 1;
            duration = rewindSpeed;
        }

        var nextOffset = Math.min(Math.max(slides[nextIndex].offsetLeft * -1, maxOffset * -1), 0);

        if (rewind && Math.abs(position.x) === maxOffset && direction) {
            nextOffset = 0;
            nextIndex = 0;
            duration = rewindSpeed;
        }

        /**
         * translate to the nextOffset by a defined duration and ease function
         */
        translate(nextOffset, duration, ease);

        /**
         * update the position with the next position
         */
        position.x = nextOffset;

        /**
         * update the index with the nextIndex only if
         * the offset of the nextIndex is in the range of the maxOffset
         */
        if (slides[nextIndex].offsetLeft <= maxOffset) {
            index = nextIndex;
        }

        if (infinite && (nextIndex === slides.length - infinite || nextIndex === slides.length - slides.length % infinite || nextIndex === 0)) {
            if (direction) {
                index = infinite;
            }

            if (!direction) {
                index = slides.length - infinite * 2;
            }

            position.x = slides[index].offsetLeft * -1;

            transitionEndCallback = function transitionEndCallback() {
                translate(slides[index].offsetLeft * -1, 0, undefined);
            };
        }

        if (classNameActiveSlide) {
            setActiveElement(slice.call(slides), index);
        }

        /**
         * update classes for next and prev arrows
         * based on user settings
         */
        if (prevCtrl && !infinite && !rewindPrev && nextIndex === 0) {
            prevCtrl.classList.add(classNameDisabledPrevCtrl);
        }

        if (nextCtrl && !infinite && !rewind && nextIndex + 1 === slides.length) {
            nextCtrl.classList.add(classNameDisabledNextCtrl);
        }

        dispatchSliderEvent('after', 'slide', {
            currentSlide: index
        });
    }

    /**
     * public
     * setup function
     */
    function setup() {
        dispatchSliderEvent('before', 'init');

        prefixes = (0, _detectPrefixes2.default)();
        options = _extends({}, _defaults2.default, opts);

        var _options4 = options,
            classNameFrame = _options4.classNameFrame,
            classNameSlideContainer = _options4.classNameSlideContainer,
            classNamePrevCtrl = _options4.classNamePrevCtrl,
            classNameNextCtrl = _options4.classNameNextCtrl,
            _options4$classNameDi = _options4.classNameDisabledNextCtrl,
            classNameDisabledNextCtrl = _options4$classNameDi === undefined ? 'disabled' : _options4$classNameDi,
            _options4$classNameDi2 = _options4.classNameDisabledPrevCtrl,
            classNameDisabledPrevCtrl = _options4$classNameDi2 === undefined ? 'disabled' : _options4$classNameDi2,
            enableMouseEvents = _options4.enableMouseEvents,
            classNameActiveSlide = _options4.classNameActiveSlide,
            initialIndex = _options4.initialIndex;


        index = initialIndex;
        frame = slider.getElementsByClassName(classNameFrame)[0];
        slideContainer = frame.getElementsByClassName(classNameSlideContainer)[0];
        prevCtrl = slider.getElementsByClassName(classNamePrevCtrl)[0];
        nextCtrl = slider.getElementsByClassName(classNameNextCtrl)[0];

        position = {
            x: slideContainer.offsetLeft,
            y: slideContainer.offsetTop
        };

        if (options.infinite) {
            slides = setupInfinite(slice.call(slideContainer.children));
        } else {
            slides = slice.call(slideContainer.children);

            if (prevCtrl && !options.rewindPrev) {
                prevCtrl.classList.add(classNameDisabledPrevCtrl);
            }

            if (nextCtrl && slides.length === 1 && !options.rewind) {
                nextCtrl.classList.add(classNameDisabledNextCtrl);
            }
        }

        reset();

        if (classNameActiveSlide) {
            setActiveElement(slides, index);
        }

        if (prevCtrl && nextCtrl) {
            prevCtrl.addEventListener('click', prev);
            nextCtrl.addEventListener('click', next);
        }

        frame.addEventListener('touchstart', onTouchstart, touchEventParams);

        if (enableMouseEvents) {
            frame.addEventListener('mousedown', onTouchstart);
            frame.addEventListener('click', onClick);
        }

        options.window.addEventListener('resize', onResize);

        dispatchSliderEvent('after', 'init');
    }

    /**
     * public
     * reset function: called on resize
     */
    function reset() {
        var _options5 = options,
            infinite = _options5.infinite,
            ease = _options5.ease,
            rewindSpeed = _options5.rewindSpeed,
            rewindOnResize = _options5.rewindOnResize,
            classNameActiveSlide = _options5.classNameActiveSlide,
            initialIndex = _options5.initialIndex;


        slidesWidth = elementWidth(slideContainer);
        frameWidth = elementWidth(frame);

        if (frameWidth === slidesWidth) {
            slidesWidth = slides.reduce(function (previousValue, slide) {
                return previousValue + elementWidth(slide);
            }, 0);
        }

        if (rewindOnResize) {
            index = initialIndex;
        } else {
            ease = null;
            rewindSpeed = 0;
        }

        if (infinite) {
            translate(slides[index + infinite].offsetLeft * -1, 0, null);

            index = index + infinite;
            position.x = slides[index].offsetLeft * -1;
        } else {
            translate(slides[index].offsetLeft * -1, rewindSpeed, ease);
            position.x = slides[index].offsetLeft * -1;
        }

        if (classNameActiveSlide) {
            setActiveElement(slice.call(slides), index);
        }
    }

    /**
     * public
     * slideTo: called on clickhandler
     */
    function slideTo(index) {
        slide(index);
    }

    /**
     * public
     * returnIndex function: called on clickhandler
     */
    function returnIndex() {
        return index - options.infinite || 0;
    }

    /**
     * public
     * prev function: called on clickhandler
     */
    function prev() {
        slide(false, false);
    }

    /**
     * public
     * next function: called on clickhandler
     */
    function next() {
        slide(false, true);
    }

    /**
     * public
     * destroy function: called to gracefully destroy the lory instance
     */
    function destroy() {
        dispatchSliderEvent('before', 'destroy');

        // remove event listeners
        frame.removeEventListener(prefixes.transitionEnd, onTransitionEnd);
        frame.removeEventListener('touchstart', onTouchstart, touchEventParams);
        frame.removeEventListener('touchmove', onTouchmove, touchEventParams);
        frame.removeEventListener('touchend', onTouchend);
        frame.removeEventListener('mousemove', onTouchmove);
        frame.removeEventListener('mousedown', onTouchstart);
        frame.removeEventListener('mouseup', onTouchend);
        frame.removeEventListener('mouseleave', onTouchend);
        frame.removeEventListener('click', onClick);

        options.window.removeEventListener('resize', onResize);

        if (prevCtrl) {
            prevCtrl.removeEventListener('click', prev);
        }

        if (nextCtrl) {
            nextCtrl.removeEventListener('click', next);
        }

        // remove cloned slides if infinite is set
        if (options.infinite) {
            Array.apply(null, Array(options.infinite)).forEach(function () {
                slideContainer.removeChild(slideContainer.firstChild);
                slideContainer.removeChild(slideContainer.lastChild);
            });
        }

        dispatchSliderEvent('after', 'destroy');
    }

    // event handling

    var touchOffset = void 0;
    var delta = void 0;
    var isScrolling = void 0;

    function onTransitionEnd() {
        if (transitionEndCallback) {
            transitionEndCallback();

            transitionEndCallback = undefined;
        }
    }

    function onTouchstart(event) {
        var _options6 = options,
            enableMouseEvents = _options6.enableMouseEvents;

        var touches = event.touches ? event.touches[0] : event;

        if (enableMouseEvents) {
            frame.addEventListener('mousemove', onTouchmove);
            frame.addEventListener('mouseup', onTouchend);
            frame.addEventListener('mouseleave', onTouchend);
        }

        frame.addEventListener('touchmove', onTouchmove, touchEventParams);
        frame.addEventListener('touchend', onTouchend);

        var pageX = touches.pageX,
            pageY = touches.pageY;


        touchOffset = {
            x: pageX,
            y: pageY,
            time: Date.now()
        };

        isScrolling = undefined;

        delta = {};

        dispatchSliderEvent('on', 'touchstart', {
            event: event
        });
    }

    function onTouchmove(event) {
        var touches = event.touches ? event.touches[0] : event;
        var pageX = touches.pageX,
            pageY = touches.pageY;


        delta = {
            x: pageX - touchOffset.x,
            y: pageY - touchOffset.y
        };

        if (typeof isScrolling === 'undefined') {
            isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
        }

        if (!isScrolling && touchOffset) {
            translate(position.x + delta.x, 0, null);
        }

        // may be
        dispatchSliderEvent('on', 'touchmove', {
            event: event
        });
    }

    function onTouchend(event) {
        /**
         * time between touchstart and touchend in milliseconds
         * @duration {number}
         */
        var duration = touchOffset ? Date.now() - touchOffset.time : undefined;

        /**
         * is valid if:
         *
         * -> swipe attempt time is over 300 ms
         * and
         * -> swipe distance is greater than 25px
         * or
         * -> swipe distance is more then a third of the swipe area
         *
         * @isValidSlide {Boolean}
         */
        var isValid = Number(duration) < 300 && Math.abs(delta.x) > 25 || Math.abs(delta.x) > frameWidth / 3;

        /**
         * is out of bounds if:
         *
         * -> index is 0 and delta x is greater than 0
         * or
         * -> index is the last slide and delta is smaller than 0
         *
         * @isOutOfBounds {Boolean}
         */
        var isOutOfBounds = !index && delta.x > 0 || index === slides.length - 1 && delta.x < 0;

        var direction = delta.x < 0;

        if (!isScrolling) {
            if (isValid && !isOutOfBounds) {
                slide(false, direction);
            } else {
                translate(position.x, options.snapBackSpeed);
            }
        }

        touchOffset = undefined;

        /**
         * remove eventlisteners after swipe attempt
         */
        frame.removeEventListener('touchmove', onTouchmove);
        frame.removeEventListener('touchend', onTouchend);
        frame.removeEventListener('mousemove', onTouchmove);
        frame.removeEventListener('mouseup', onTouchend);
        frame.removeEventListener('mouseleave', onTouchend);

        dispatchSliderEvent('on', 'touchend', {
            event: event
        });
    }

    function onClick(event) {
        if (delta.x) {
            event.preventDefault();
        }
    }

    function onResize(event) {
        if (frameWidth !== elementWidth(frame)) {
            reset();

            dispatchSliderEvent('on', 'resize', {
                event: event
            });
        }
    }

    // trigger initial setup
    setup();

    // expose public api
    return {
        setup: setup,
        reset: reset,
        slideTo: slideTo,
        returnIndex: returnIndex,
        prev: prev,
        next: next,
        destroy: destroy
    };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = detectPrefixes;
/**
 * Detecting prefixes for saving time and bytes
 */
function detectPrefixes() {
    var transform = void 0;
    var transition = void 0;
    var transitionEnd = void 0;

    (function () {
        var el = document.createElement('_');
        var style = el.style;

        var prop = void 0;

        if (style[prop = 'webkitTransition'] === '') {
            transitionEnd = 'webkitTransitionEnd';
            transition = prop;
        }

        if (style[prop = 'transition'] === '') {
            transitionEnd = 'transitionend';
            transition = prop;
        }

        if (style[prop = 'webkitTransform'] === '') {
            transform = prop;
        }

        if (style[prop = 'msTransform'] === '') {
            transform = prop;
        }

        if (style[prop = 'transform'] === '') {
            transform = prop;
        }

        document.body.insertBefore(el, null);
        style[transform] = 'translateX(0)';
        document.body.removeChild(el);
    })();

    return {
        transform: transform,
        transition: transition,
        transitionEnd: transitionEnd
    };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = detectSupportsPassive;
function detectSupportsPassive() {
    var supportsPassive = false;

    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
                supportsPassive = true;
            }
        });

        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts);
    } catch (e) {}

    return supportsPassive;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = dispatchEvent;

var _customEvent = __webpack_require__(4);

var _customEvent2 = _interopRequireDefault(_customEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * dispatch custom events
 *
 * @param  {element} el         slideshow element
 * @param  {string}  type       custom event name
 * @param  {object}  detail     custom detail information
 */
function dispatchEvent(target, type, detail) {
    var event = new _customEvent2.default(type, {
        bubbles: true,
        cancelable: true,
        detail: detail
    });

    target.dispatchEvent(event);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /**
   * slides scrolled at once
   * @slidesToScroll {Number}
   */
  slidesToScroll: 1,

  /**
   * time in milliseconds for the animation of a valid slide attempt
   * @slideSpeed {Number}
   */
  slideSpeed: 300,

  /**
   * time in milliseconds for the animation of the rewind after the last slide
   * @rewindSpeed {Number}
   */
  rewindSpeed: 600,

  /**
   * time for the snapBack of the slider if the slide attempt was not valid
   * @snapBackSpeed {Number}
   */
  snapBackSpeed: 200,

  /**
   * Basic easing functions: https://developer.mozilla.org/de/docs/Web/CSS/transition-timing-function
   * cubic bezier easing functions: http://easings.net/de
   * @ease {String}
   */
  ease: 'ease',

  /**
   * if slider reached the last slide, with next click the slider goes back to the startindex.
   * use infinite or rewind, not both
   * @rewind {Boolean}
   */
  rewind: false,

  /**
   * number of visible slides or false
   * use infinite or rewind, not both
   * @infinite {number}
   */
  infinite: false,

  /**
   * the slide index to show when the slider is initialized.
   * @initialIndex {number}
   */
  initialIndex: 0,

  /**
   * class name for slider frame
   * @classNameFrame {string}
   */
  classNameFrame: 'js_frame',

  /**
   * class name for slides container
   * @classNameSlideContainer {string}
   */
  classNameSlideContainer: 'js_slides',

  /**
   * class name for slider prev control
   * @classNamePrevCtrl {string}
   */
  classNamePrevCtrl: 'js_prev',

  /**
   * class name for slider next control
   * @classNameNextCtrl {string}
   */
  classNameNextCtrl: 'js_next',

  /**
   * class name for current active slide
   * if emptyString then no class is set
   * @classNameActiveSlide {string}
   */
  classNameActiveSlide: 'active',

  /**
   * enables mouse events for swiping on desktop devices
   * @enableMouseEvents {boolean}
   */
  enableMouseEvents: false,

  /**
   * window instance
   * @window {object}
   */
  window: typeof window !== 'undefined' ? window : null,

  /**
   * If false, slides lory to the first slide on window resize.
   * @rewindOnResize {boolean}
   */
  rewindOnResize: true
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/CustomEmbed/custom-embed-manager.ts":
/*!*************************************************!*\
  !*** ./src/CustomEmbed/custom-embed-manager.ts ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Libraries_Utilities_waitFor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Libraries/Utilities/waitFor */ "./src/Libraries/Utilities/waitFor.ts");
/* harmony import */ var _Player_player_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Player/player-manager */ "./src/Player/player-manager.ts");
/* harmony import */ var _Player_player_events_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Player/player-events-manager */ "./src/Player/player-events-manager.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// utilities



var CustomEmbedManager = /** @class */ (function () {
    function CustomEmbedManager(rootEls, keywords) {
        this.rootEls = null;
        this.scriptLoaded = false;
        this.keywords = null;
        // Pass rootEls to local variable
        this.rootEls = rootEls;
        this.keywords = keywords;
        this.eventListeners();
        this.renderElement();
    }
    CustomEmbedManager.prototype.eventListeners = function () {
        var _this = this;
        document.addEventListener('dm-video-holder-ready', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_Libraries_Utilities_waitFor__WEBPACK_IMPORTED_MODULE_0__[/* waitFor */ "b"])(function () { return CustomEmbedManager.player[0] !== null; }, 500, 2000, "Timeout waiting player ready")];
                    case 1:
                        _a.sent();
                        /**
                         * Waiting for the first instance filled and only load script once
                         */
                        if (this.scriptLoaded !== true) {
                            this.loadScript(CustomEmbedManager.player[0].cpeId, CustomEmbedManager.player[0].cpeParams);
                            // Set scriptLoaded status
                            this.scriptLoaded = true;
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    CustomEmbedManager.prototype.listenVideoEvents = function () {
        // It's start to listen to the video events
        new _Player_player_events_manager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](CustomEmbedManager.player[0].playerParams, CustomEmbedManager.player[0].multiplayerParams);
    };
    CustomEmbedManager.prototype.renderElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                for (i = 0; i < this.rootEls.length; i++) {
                    CustomEmbedManager.player[i] = new _Player_player_manager__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]("dm_" + i, this.rootEls[i], (i === 0 && this.keywords !== null) ? this.keywords : null);
                }
                this.listenVideoEvents();
                return [2 /*return*/];
            });
        });
    };
    CustomEmbedManager.renderOnDemand = function (el, keywords) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.player.push(new _Player_player_manager__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]("dm_" + this.player.length + 1, el, keywords));
                        return [4 /*yield*/, Object(_Libraries_Utilities_waitFor__WEBPACK_IMPORTED_MODULE_0__[/* sleep */ "a"])(1000)];
                    case 1:
                        _a.sent();
                        window.cpe.parse();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Load CPE script
     * @param cpeId
     * @param cpeParams
     */
    CustomEmbedManager.prototype.loadScript = function (cpeId, cpeParams) {
        var cpe = cpeId[0];
        // Set different cpeId for mobile
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            cpe = cpeId[1] ? cpeId[1] : cpeId[0];
        // Avoid error while building
        var date = new Date();
        // Load the CPE script
        (function (w, d, s, u, n, i, f, g, e, c) { w.WDMObject = n; w[n] = w[n] || function () { (w[n].q = w[n].q || []).push(arguments); }; w[n].l = 1 * date; w[n].i = i; w[n].f = f; w[n].g = g; e = d.createElement(s); e.async = 1; e.src = u; c = d.getElementsByTagName(s)[0]; c.parentNode.insertBefore(e, c); })(window, document, "script", "//api.dmcdn.net/pxl/cpe/client.min.js", "cpe", cpe, cpeParams);
    };
    /**
     * Extracted CPE function
     */
    CustomEmbedManager.prototype.loadCpeScript = function () {
        // (function(w, d, s, u, n, i, f, g, e, c) {
        //     w.WDMObject = n;
        //     w[n] = w[n] || function() {
        //         (w[n].q = w[n].q || []).push(arguments);
        //     };
        //     w[n].l = 1 * date;
        //     w[n].i = i;
        //     w[n].f = f;
        //     w[n].g = g;
        //     e = d.createElement(s);
        //     e.async = 1;
        //     e.src = u;
        //     c = d.getElementsByTagName(s)[0];
        //     c.parentNode.insertBefore(e, c);
        // })(window, document, "script", "//api.dmcdn.net/pxl/cpe/client.min.js", "cpe", cpe, cpeParams);
    };
    // TODO: Find best practice to do static variable and function
    CustomEmbedManager.player = [];
    return CustomEmbedManager;
}());
/* harmony default export */ __webpack_exports__["a"] = (CustomEmbedManager);


/***/ }),

/***/ "./src/Entries/dm-custom-embed.ts":
/*!****************************************!*\
  !*** ./src/Entries/dm-custom-embed.ts ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomEmbed_custom_embed_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CustomEmbed/custom-embed-manager */ "./src/CustomEmbed/custom-embed-manager.ts");
/* harmony import */ var _Libraries_Utilities_waitFor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Libraries/Utilities/waitFor */ "./src/Libraries/Utilities/waitFor.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var el;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Wait `.dm-player` to be ready first before get the element
            return [4 /*yield*/, Object(_Libraries_Utilities_waitFor__WEBPACK_IMPORTED_MODULE_1__[/* waitFor */ "b"])(function () { return document.querySelectorAll('.dm-player').length > 0; }, 500, 2000, "Timeout to get DM placeholder")];
            case 1:
                // Wait `.dm-player` to be ready first before get the element
                _a.sent();
                el = document.querySelectorAll('.dm-player');
                new _CustomEmbed_custom_embed_manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](el);
                return [2 /*return*/];
        }
    });
}); };
init();
/**
 * Expose dmce render method for `on-the-fly` rendering
 * This function idea is for infinite scroll purposes,
 * but it is not limited to only for infinite scroll
 */
var dmce = /** @class */ (function () {
    function dmce() {
    }
    dmce.prototype.render = function (el, keywords) {
        _CustomEmbed_custom_embed_manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].renderOnDemand(el, keywords);
    };
    ;
    return dmce;
}());
window.dmce = new dmce();


/***/ }),

/***/ "./src/Libraries/API/apiCall.ts":
/*!**************************************!*\
  !*** ./src/Libraries/API/apiCall.ts ***!
  \**************************************/
/*! exports provided: fetchData */
/*! exports used: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchData; });
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/vars */ "./src/Libraries/global/vars.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Global

function fetchData(urlParams) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(urlParams)];
                case 1:
                    response = _a.sent();
                    /**
                     * Only HTTP 200 is regarded as successful response
                     */
                    if (response.status === 200) {
                        resolve(response.json());
                    }
                    else {
                        reject();
                    }
                    return [2 /*return*/];
            }
        });
    }); }).catch(function (err) {
        // Do nothing, just don't show to user what's happened on player
        if (_global_vars__WEBPACK_IMPORTED_MODULE_0__[/* debugMode */ "b"] === true) {
            console.log("API calling error");
        }
    });
}


/***/ }),

/***/ "./src/Libraries/Utilities/get-query-params.ts":
/*!*****************************************************!*\
  !*** ./src/Libraries/Utilities/get-query-params.ts ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getParam; });
function getParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


/***/ }),

/***/ "./src/Libraries/Utilities/html-entities.ts":
/*!**************************************************!*\
  !*** ./src/Libraries/Utilities/html-entities.ts ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return htmlEntities; });
function htmlEntities(str) {
    return String(str).replace(/&/g, '%26').replace(/=/g, '%3d');
}


/***/ }),

/***/ "./src/Libraries/Utilities/waitFor.ts":
/*!********************************************!*\
  !*** ./src/Libraries/Utilities/waitFor.ts ***!
  \********************************************/
/*! exports provided: waitFor, sleep */
/*! exports used: sleep, waitFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return waitFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sleep; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function waitFor(condition, interval, timeout, timeoutMsg) {
    if (interval === void 0) { interval = 50; }
    if (timeout === void 0) { timeout = Infinity; }
    if (timeoutMsg === void 0) { timeoutMsg = ""; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var elapsedTime = 0;
                    var timerId = setInterval(function () {
                        var conditionFulfilled = condition();
                        var killTimer = (elapsedTime > timeout) || conditionFulfilled;
                        elapsedTime += interval;
                        if (conditionFulfilled) {
                            resolve();
                            clearInterval(timerId);
                        }
                        else if (killTimer) {
                            reject(new Error("waitFor(): " + timeoutMsg));
                            clearInterval(timerId);
                        }
                    }, interval);
                })];
        });
    });
}
function sleep(delay) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve();
                    }, delay);
                })];
        });
    });
}


/***/ }),

/***/ "./src/Libraries/global/vars.ts":
/*!**************************************!*\
  !*** ./src/Libraries/global/vars.ts ***!
  \**************************************/
/*! exports provided: debugMode, apiUrl */
/*! exports used: apiUrl, debugMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return debugMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
/* harmony import */ var _Utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/get-query-params */ "./src/Libraries/Utilities/get-query-params.ts");
// Utilities

// Get debug mode params from url
var debugMode = (Object(_Utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('dmdebug') != null && Object(_Utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('dmdebug') != 'false');
var apiUrl = process.env.API_URL ? process.env.API_URL : "https://api.dailymotion.com/";

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/Player/Components/info-card.ts":
/*!********************************************!*\
  !*** ./src/Player/Components/info-card.ts ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var InfoCard = /** @class */ (function () {
    function InfoCard() {
        this.infoCardEl = null;
    }
    InfoCard.prototype.setInfoCard = function (data) {
        this.infoCardEl = document.createElement('div');
        this.infoCardEl.className = 'dm__info-card';
        var textWrapper = document.createElement('div');
        textWrapper.className = 'dm__text-wrapper';
        var videoTitle = document.createElement('p');
        videoTitle.innerHTML = data.title;
        videoTitle.className = 'dm__video-title';
        var videoDesc = document.createElement('p');
        videoDesc.innerHTML = data.description;
        videoDesc.className = 'dm__video-desc';
        textWrapper.append(videoTitle);
        textWrapper.append(videoDesc);
        var avaWrapper = document.createElement('picture');
        avaWrapper.className = 'dm__ava-wrapper';
        var ownerAva = document.createElement('img');
        ownerAva.src = data["owner.avatar_190_url"];
        ownerAva.className = 'dm__owner-ava';
        avaWrapper.append(ownerAva);
        this.infoCardEl.append(textWrapper);
        this.infoCardEl.append(avaWrapper);
        return this.infoCardEl;
    };
    InfoCard.prototype.cleanup = function () {
        if (this.infoCardEl) {
            this.infoCardEl.remove();
            delete this.infoCardEl;
        }
    };
    return InfoCard;
}());
/* harmony default export */ __webpack_exports__["a"] = (InfoCard);


/***/ }),

/***/ "./src/Player/Components/pre-video-title.ts":
/*!**************************************************!*\
  !*** ./src/Player/Components/pre-video-title.ts ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setPreVideoTitle; });
function setPreVideoTitle(text) {
    var preTitle = document.createElement('p');
    preTitle.innerHTML = text;
    preTitle.className = 'dm__pre-video-title';
    return preTitle;
}


/***/ }),

/***/ "./src/Player/Components/video-title.ts":
/*!**********************************************!*\
  !*** ./src/Player/Components/video-title.ts ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var VideoTitle = /** @class */ (function () {
    function VideoTitle() {
        this.titleEl = null;
    }
    VideoTitle.prototype.setVideoTitle = function (text) {
        this.titleEl = document.createElement('p');
        this.titleEl.innerHTML = text;
        this.titleEl.className = 'dm__video-title';
        return this.titleEl;
    };
    VideoTitle.prototype.cleanup = function () {
        delete this.titleEl;
        this.titleEl.remove();
    };
    return VideoTitle;
}());
/* harmony default export */ __webpack_exports__["a"] = (VideoTitle);


/***/ }),

/***/ "./src/Player/Scss/main.scss":
/*!***********************************!*\
  !*** ./src/Player/Scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/Player/Scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/Player/player-events-manager.ts":
/*!*********************************************!*\
  !*** ./src/Player/player-events-manager.ts ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Libraries_Utilities_waitFor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Libraries/Utilities/waitFor */ "./src/Libraries/Utilities/waitFor.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var PlayerEventsManager = /** @class */ (function () {
    function PlayerEventsManager(playerParams, multiplayer) {
        this.players = [];
        this.noFill = true;
        this.adPlaying = '';
        this.multiplayerParams = null;
        this.playerParams = null;
        this.videoEvents();
        this.playerParams = playerParams;
        this.multiplayerParams = multiplayer;
    }
    /**
     * Listen to video events from Dailymotion player
     */
    PlayerEventsManager.prototype.videoEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Ignore 'cpeready' event because this event is from outside the script
                // @ts-ignore
                window.addEventListener('cpeready', function (_a) {
                    var players = _a.detail.players;
                    _this.players = players;
                    var _loop_1 = function (i) {
                        var player = players[i];
                        player.addEventListener('videochange', function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var video, videoUpdated;
                            return __generator(this, function (_a) {
                                video = player.video;
                                videoUpdated = new CustomEvent('dm-video-updated', { detail: { videoId: video.videoId } });
                                document.dispatchEvent(videoUpdated);
                                return [2 /*return*/];
                            });
                        }); });
                        player.addEventListener('ad_start', function (e) {
                            _this.noFill = false;
                        });
                        /**
                         * Listen to an ad_play
                         *
                         * - Cover others player when the ad is played
                         */
                        player.addEventListener('ad_play', function (e) {
                            if (_this.adPlaying === '') {
                                _this.adPlaying = player.id;
                                // Disable the player that not playing yet
                                if (_this.multiplayerParams.adCoverPlay === true) {
                                    _this.toggleDisable();
                                }
                                // Toggle playing video and hide the PiP
                                if (_this.multiplayerParams.closePip === true) {
                                    _this.togglePlay(player.id);
                                }
                                if (_this.playerParams.adHideControls === true) {
                                    player.setControls(false);
                                }
                            }
                        });
                        /**
                         * Listen to an ad_end event
                         *
                         * - Remove player cover when the ad is ended
                         */
                        player.addEventListener('ad_end', function (e) {
                            if (_this.adPlaying !== '') {
                                _this.adPlaying = '';
                                // Toggle disabled player
                                if (_this.multiplayerParams.adCoverPlay) {
                                    _this.toggleDisable();
                                }
                                if (_this.playerParams.adHideControls === true) {
                                    player.setControls(true);
                                }
                            }
                        });
                        /**
                         * Listening to playing event
                         *
                         * - Close the PiP if there are multiple players and the closePip is true
                         */
                        player.addEventListener('playing', function (e) {
                            if (_this.multiplayerParams.closePip === true) {
                                _this.togglePlay(player.id);
                            }
                        });
                        /**
                         * Listen to video end, and process the next thing
                         * It will load new video from the playlist
                         */
                        player.addEventListener('end', function (e) {
                            var videoEnd = new CustomEvent("dm-video-end", { detail: player.video.videoId });
                            document.dispatchEvent(videoEnd);
                        });
                        /**
                         * Listen to `playback_ready` to show the player
                         */
                        player.addEventListener('playback_ready', function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var dmPlayer, showPlayer;
                            return __generator(this, function (_a) {
                                dmPlayer = player.parentNode.parentNode.parentNode;
                                /**
                                 * It's only to show video when ad is filled
                                 *
                                 * Because we don't showing the video at first, the video won't play anymway.
                                 * So we play it programmatically via JS and start to listen to `waitForAdStart`
                                 * to listen to ad request
                                 */
                                if (this.playerParams.showAdOnly === true) {
                                    dmPlayer.classList.add('dm-wait-for-ad');
                                    player.play();
                                    this.waitForAdStart();
                                }
                                else {
                                    showPlayer = new CustomEvent('dm-show-player');
                                    document.dispatchEvent(showPlayer);
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        /**
                         * Handle player error as well to avoid bad UX
                         */
                        player.addEventListener('error', function (e) {
                            console.log(e);
                        });
                    };
                    for (var i = 0; i < players.length; i++) {
                        _loop_1(i);
                    }
                });
                /**
                 * Listen to PiP close to pause the video player
                 */
                // @ts-ignore
                window.addEventListener('cpepipclose', function (_a) {
                    var player = _a.detail.player;
                    // Do pause when cpe PiP is closed
                    player.pause();
                });
                /**
                 * Listen to slide changes to set the video to play
                 */
                // TODO: support multiplayer for next development
                document.addEventListener('dm-slide-changes', function (e) {
                    // @ts-ignore
                    _this.players[0].load({ video: e.detail });
                });
                /**
                 * Destroy the player if there is no ad to serve
                 */
                document.addEventListener('dm-destroy-player', function (e) {
                    // @ts-ignore
                    _this.players[0].parentNode.parentNode.parentNode.remove(); // Get dm-player first
                });
                /**
                 * Add new class `dm-playback-ready` to show the player
                 */
                document.addEventListener('dm-show-player', function (e) {
                    _this.players[0].parentNode.parentNode.parentNode.classList.add('dm-playback-ready');
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Wait and check if noFill is true or not.
     * This function is related to `ad_start` listener as well
     */
    PlayerEventsManager.prototype.waitForAdStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var destroyPlayer, showPlayer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Waiting for 1 second to interact with ad
                    return [4 /*yield*/, Object(_Libraries_Utilities_waitFor__WEBPACK_IMPORTED_MODULE_0__[/* sleep */ "a"])(2000)];
                    case 1:
                        // Waiting for 1 second to interact with ad
                        _a.sent();
                        /**
                         * noFill means no ad to serve
                         * It will send a custom event that let
                         * the script continue show the player or destroy it
                         */
                        if (this.noFill === true) {
                            destroyPlayer = new CustomEvent('dm-destroy-player');
                            document.dispatchEvent(destroyPlayer);
                        }
                        else {
                            showPlayer = new CustomEvent('dm-show-player');
                            document.dispatchEvent(showPlayer);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Toggle play and remove all PiP active
     *
     * @param playerId
     */
    PlayerEventsManager.prototype.togglePlay = function (playerId) {
        // Check every player available
        for (var i = 0; i < this.players.length; i++) {
            // close the PiP if other player is start playing
            if (this.players[i].id !== playerId) {
                var parent_1 = this.players[i].parentNode;
                this.players[i].pause();
                parent_1.classList.remove('pip');
            }
        }
    };
    /**
     * Add cover to others player to be not clickable by the user
     */
    PlayerEventsManager.prototype.toggleDisable = function () {
        // Check every player available
        for (var i = 0; i < this.players.length; i++) {
            // get parent player
            var parent_2 = this.players[i].parentNode;
            if (this.adPlaying !== '' && this.adPlaying !== this.players[i].id) {
                parent_2.classList.add('dm-disabled');
            }
            else {
                parent_2.classList.remove('dm-disabled');
            }
        }
    };
    return PlayerEventsManager;
}());
/* harmony default export */ __webpack_exports__["a"] = (PlayerEventsManager);


/***/ }),

/***/ "./src/Player/player-manager.ts":
/*!**************************************!*\
  !*** ./src/Player/player-manager.ts ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Libraries_global_vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Libraries/global/vars */ "./src/Libraries/global/vars.ts");
/* harmony import */ var _Libraries_Utilities_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Libraries/Utilities/html-entities */ "./src/Libraries/Utilities/html-entities.ts");
/* harmony import */ var _Libraries_API_apiCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Libraries/API/apiCall */ "./src/Libraries/API/apiCall.ts");
/* harmony import */ var _Libraries_Utilities_waitFor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Libraries/Utilities/waitFor */ "./src/Libraries/Utilities/waitFor.ts");
/* harmony import */ var _Player_Components_pre_video_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Player/Components/pre-video-title */ "./src/Player/Components/pre-video-title.ts");
/* harmony import */ var _Player_Components_video_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Player/Components/video-title */ "./src/Player/Components/video-title.ts");
/* harmony import */ var _Player_Components_info_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Player/Components/info-card */ "./src/Player/Components/info-card.ts");
/* harmony import */ var _Playlist_playlist_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Playlist/playlist-manager */ "./src/Playlist/playlist-manager.ts");
/* harmony import */ var _Player_Scss_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Player/Scss/main.scss */ "./src/Player/Scss/main.scss");
/* harmony import */ var _Player_Scss_main_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Player_Scss_main_scss__WEBPACK_IMPORTED_MODULE_8__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Global

// Utilities



// Components




// Styles

/**
 * An agnostic player renderer
 */
var PlayerManager = /** @class */ (function () {
    function PlayerManager(id, rootEl, keywords) {
        this.id = "";
        this.searchParams = null;
        this.videoParams = null;
        this.keywords = null;
        this.videoTitle = null;
        this.infoCard = null;
        this.cpeId = [];
        this.cpeParams = {};
        this.multiplayerParams = null;
        this.playerParams = null;
        this.rootEl = null;
        this.rootEl = rootEl;
        this.id = id;
        this.keywords = keywords;
        this.addEventListeners();
        this.extractAttrs();
    }
    PlayerManager.prototype.addEventListeners = function () {
        var _this = this;
        /**
         * Listen to `dm-api-ready` to run `loadDmPlayer` to construct the player
         */
        document.addEventListener('dm-api-ready', function (e) {
            //@ts-ignore
            if (e.detail === _this.id) {
                _this.loadDmPlayer(_this.rootEl);
            }
        });
        /**
         * Listen to `player-extracted` to wait all attributes is extracted from the element
         * then prepare the search parameters
         */
        document.addEventListener('dm-player-extracted', function (e) {
            //@ts-ignore
            if (e.detail === _this.id) {
                _this.prepareSearchParams();
            }
        });
        /**
         * Listen to `dm-search-params-ready` after parameters is ready then start search
         * related/recent video
         */
        document.addEventListener('dm-search-params-ready', function (e) {
            //@ts-ignore
            if (e.detail === _this.id) {
                if (_this.playerParams.videoId === null) {
                    _this.searchVideo();
                }
                else {
                    _this.getVideoInfo(_this.playerParams.videoId, true);
                }
            }
        });
        document.addEventListener('dm-video-updated', function (e) {
            //@ts-ignore
            _this.getVideoInfo(e.detail.videoId, false);
        });
    };
    PlayerManager.prototype.extractAttrs = function () {
        var rootEl = this.rootEl;
        /**
         * See interfaces/infPlayer.ts to know further
         */
        this.playerParams = {
            maxWordSearch: rootEl.getAttribute('maxWordSearch') ? Number(rootEl.getAttribute('maxWordSearch')) : 15,
            minWordLength: rootEl.getAttribute('minWordLength') ? Number(rootEl.getAttribute('minWordLength')) : 4,
            minWordSearch: rootEl.getAttribute('minWordSearch') ? Number(rootEl.getAttribute('minWordSearch')) : 2,
            videoId: rootEl.getAttribute('videoId') ? rootEl.getAttribute('videoId') : null,
            language: rootEl.getAttribute("language") ? rootEl.getAttribute("language") : "",
            sort: rootEl.getAttribute("sort") ? rootEl.getAttribute("sort").split(',') : ["recent"],
            owners: rootEl.getAttribute("owners") ? rootEl.getAttribute("owners") : "",
            category: rootEl.getAttribute("category") ? rootEl.getAttribute("category") : "",
            excludeIds: rootEl.getAttribute("excludeIds") ? rootEl.getAttribute("excludeIds") : "",
            searchInPlaylist: rootEl.getAttribute("searchInPlaylist") ? rootEl.getAttribute("searchInPlaylist") : false,
            syndication: rootEl.getAttribute("syndication") ? rootEl.getAttribute("syndication") : "",
            controls: (rootEl.getAttribute('controls') != 'false'),
            adsParams: rootEl.getAttribute('adsParams') ? rootEl.getAttribute('adsParams') : "contextual",
            cpeId: rootEl.getAttribute('cpeId') ? rootEl.getAttribute('cpeId').split(',') : [''],
            keywordsSelector: rootEl.getAttribute('keywordsSelector') ? rootEl.getAttribute('keywordsSelector') : null,
            rangeDay: rootEl.getAttribute('rangeDay') ? rootEl.getAttribute('rangeDay').split(",") : [0],
            startDate: rootEl.getAttribute('startDate') ? rootEl.getAttribute('startDate') : null,
            getUpdatedVideo: (rootEl.getAttribute('getUpdatedVideo') != 'false'),
            preVideoTitle: rootEl.getAttribute('preVideoTitle') ? rootEl.getAttribute('preVideoTitle') : null,
            showVideoTitle: (rootEl.getAttribute('showVideoTitle') != 'false' && rootEl.getAttribute('showVideoTitle') != null),
            showInfoCard: (rootEl.getAttribute('showInfoCard') != 'false' && rootEl.getAttribute('showInfoCard') != null),
            showOutsidePlaylist: (rootEl.getAttribute('showOutsidePlaylist') === 'true'),
            showPlaynow: (rootEl.getAttribute('showPlaynow') === 'true'),
            showAdOnly: (rootEl.getAttribute('showAdOnly') === 'true'),
            adHideControls: (rootEl.getAttribute('adHideControls') === 'true'),
            autoPlayMute: (rootEl.getAttribute("autoPlayMute") != 'false'),
            queueEnable: (rootEl.getAttribute('queueEnable') != 'false'),
            queueEnableNext: (rootEl.getAttribute('queueEnableNext') != 'false'),
            pipAtStart: (rootEl.getAttribute('pipAtStart') != 'false' && rootEl.getAttribute('pipAtStart') != null),
            noStp: (rootEl.getAttribute('noStp') != 'false' && rootEl.getAttribute('noStp') != null),
            noPip: (rootEl.getAttribute('noPip') != 'false' && rootEl.getAttribute('noPip') != null),
            scrollToPause: (rootEl.getAttribute('scrollToPause') != 'false' && rootEl.getAttribute('scrollToPause') != null),
            stpSound: (rootEl.getAttribute('stpSound') != 'false' && rootEl.getAttribute('stpSound') != null),
            playerStyleEnable: (rootEl.getAttribute('playerStyleEnable') != 'false' && rootEl.getAttribute('playerStyleEnable') != null),
            playerStyleColor: rootEl.getAttribute('playerStyleColor') ? rootEl.getAttribute('playerStyleColor') : null
        };
        /**
         * Special multiple player params
         */
        this.multiplayerParams = {
            adCoverPlay: (rootEl.getAttribute('adCoverPlay') == 'true'),
            closePip: (rootEl.getAttribute('closePip') == 'true'),
        };
        if (_Libraries_global_vars__WEBPACK_IMPORTED_MODULE_0__[/* debugMode */ "b"] === true) {
            console.log("%c DM Player Params: ", "background: #56C7FF; color: #232323", this.playerParams);
        }
        // Tell the event listener that player parameters is extracted
        var playerExtracted = new CustomEvent('dm-player-extracted', { detail: this.id });
        document.dispatchEvent(playerExtracted);
    };
    /**
     * Set search parameters
     *
     * For all search parameters, please see interfaces/infSearch.ts
     */
    PlayerManager.prototype.prepareSearchParams = function () {
        this.cpeId = this.playerParams.cpeId;
        /**
         * There are 3 conditions fields:
         * 1. if outside playlist is true
         * 2. if the infocard is true
         * 3. last condition is default condition
         */
        var fields = this.playerParams.showOutsidePlaylist ? 'id,title,thumbnail_240_url,duration,owner.avatar_25_url,owner.screenname' : this.playerParams.showInfoCard ? 'id,title,description,owner.avatar_190_url' : 'id,title';
        this.searchParams = {
            fields: fields,
            limit: this.playerParams.showOutsidePlaylist ? 7 : 1,
        };
        var keywords = this.findKeywords(this.playerParams.keywordsSelector);
        this.keywords = this.keywords ? this.keywords : keywords.sort(function (a, b) { return b.length - a.length; }).slice(0, this.playerParams.maxWordSearch).join(' ');
        if (!this.playerParams.searchInPlaylist) {
            // TODO: test using private video
            this.searchParams.private = 0;
            this.searchParams.flags = "no_live,exportable" + (this.playerParams.owners.length > 0 ? "" : ",verified");
            this.searchParams.longer_than = 0.35; //21sec
            if (this.playerParams.owners)
                this.searchParams.owners = this.playerParams.owners;
            if (this.playerParams.category)
                this.searchParams.channel = this.playerParams.category;
            if (this.playerParams.excludeIds)
                this.searchParams.exclude_ids = this.playerParams.excludeIds;
        }
        if (this.playerParams.language)
            this.searchParams.language = this.playerParams.language;
        // Tell the event listener that search params is ready
        var searchParamsReady = new CustomEvent('dm-search-params-ready', { detail: this.id });
        document.dispatchEvent(searchParamsReady);
    };
    PlayerManager.prototype.loadDmPlayer = function (rootEl) {
        var cpeEmbed = document.createElement("div");
        /**
         * Set attributes part
         */
        var queryString = "";
        if (this.playerParams.adsParams === "") {
            queryString += "ads_params=contextual";
        }
        else {
            queryString += "ads_params=" + Object(_Libraries_Utilities_html_entities__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.playerParams.adsParams);
        }
        if (this.playerParams.syndication !== "")
            queryString += "&syndication=" + this.playerParams.syndication;
        if (this.playerParams.controls !== true)
            queryString += "&controls=" + this.playerParams.controls;
        cpeEmbed.setAttribute("class", "dailymotion-cpe");
        cpeEmbed.setAttribute("video-id", this.videoParams.private_id ? this.videoParams.private_id : this.videoParams.id);
        cpeEmbed.setAttribute("query-string", queryString);
        if (this.playerParams.pipAtStart === true)
            cpeEmbed.setAttribute("pip-at-start", "");
        if (this.playerParams.noStp === true)
            cpeEmbed.setAttribute("no-stp", "");
        if (this.playerParams.noPip === true)
            cpeEmbed.setAttribute("no-pip", "");
        if (this.playerParams.queueEnable === false || this.playerParams.showOutsidePlaylist === true)
            cpeEmbed.setAttribute("no-queue", "");
        if (this.playerParams.queueEnableNext === false)
            cpeEmbed.setAttribute("no-autonext", "");
        if (this.playerParams.searchInPlaylist !== false)
            cpeEmbed.setAttribute("Playlist-id", this.playerParams.searchInPlaylist);
        if (rootEl.getAttribute("width") !== null) {
            this.playerParams.width = Number(rootEl.getAttribute("width"));
            cpeEmbed.setAttribute("width", rootEl.getAttribute("width"));
        }
        if (rootEl.getAttribute("height") !== null) {
            this.playerParams.height = Number(rootEl.getAttribute("height"));
            cpeEmbed.setAttribute("height", rootEl.getAttribute("height"));
        }
        // end of set attributes
        var cpeParams = {};
        if (this.playerParams.scrollToPause === true)
            cpeParams['scroll_to_pause'] = true;
        if (this.playerParams.stpSound === true)
            cpeParams['stp_sound'] = true;
        if (this.playerParams.playerStyleEnable === true)
            cpeParams['player_style_enable'] = true;
        if (this.playerParams.playerStyleColor !== null)
            cpeParams['player_style_color'] = this.playerParams.playerStyleColor;
        this.cpeParams = cpeParams;
        // Append the element to the root player element
        rootEl.appendChild(cpeEmbed);
        /**
         * Set pre title for video
         */
        if (this.playerParams.preVideoTitle !== null) {
            var preTitle = Object(_Player_Components_pre_video_title__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this.playerParams.preVideoTitle);
            rootEl.insertAdjacentElement('afterbegin', preTitle);
        }
        // Send to DmManager that element already created
        var ElementCreated = new CustomEvent('dm-video-holder-ready');
        document.dispatchEvent(ElementCreated);
    };
    PlayerManager.prototype.setVideo = function (video, createNew) {
        this.videoParams = video;
        if (createNew) {
            var apiReady = new CustomEvent("dm-api-ready", { detail: this.id });
            document.dispatchEvent(apiReady);
        }
        this.updateVideoInfo();
    };
    PlayerManager.prototype.updateVideoInfo = function () {
        /**
         * Set a video title
         */
        if (this.playerParams.showVideoTitle === true) {
            var videoTitle = new _Player_Components_video_title__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]();
            if (this.videoTitle !== null) {
                this.videoTitle.remove();
            }
            this.videoTitle = videoTitle.setVideoTitle(this.videoParams.title);
            this.rootEl.insertAdjacentElement('afterend', this.videoTitle);
        }
        /**
         * Set an info card
         */
        if (this.playerParams.showInfoCard === true) {
            var infoCard = new _Player_Components_info_card__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]();
            if (this.infoCard !== null) {
                this.infoCard.remove();
            }
            this.infoCard = infoCard.setInfoCard(this.videoParams);
            this.rootEl.insertAdjacentElement('beforeend', this.infoCard);
        }
    };
    PlayerManager.prototype.getVideoInfo = function (videoId, createNew) {
        return __awaiter(this, void 0, void 0, function () {
            var url, video;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _Libraries_global_vars__WEBPACK_IMPORTED_MODULE_0__[/* apiUrl */ "a"] + "/video/" + videoId + '?fields=' + this.searchParams.fields;
                        return [4 /*yield*/, Object(_Libraries_API_apiCall__WEBPACK_IMPORTED_MODULE_2__[/* fetchData */ "a"])(url)];
                    case 1:
                        video = _a.sent();
                        this.setVideo(video, createNew);
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerManager.prototype.generateQuery = function (sort, rangeDay) {
        return __awaiter(this, void 0, void 0, function () {
            var currentTime, day, properties, addProps;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Waiting for search params to be ready
                    return [4 /*yield*/, Object(_Libraries_Utilities_waitFor__WEBPACK_IMPORTED_MODULE_3__[/* waitFor */ "b"])(function () { return _this.searchParams !== null; }, 100, 5000, "Timeout waiting for searchParams not null")];
                    case 1:
                        // Waiting for search params to be ready
                        _a.sent();
                        currentTime = Math.floor(Date.now() / 1000);
                        day = 86400;
                        if (this.playerParams.startDate !== null && (rangeDay === null || rangeDay === 0)) {
                            this.searchParams.created_after = new Date(this.playerParams.startDate).getTime() / 1000;
                        }
                        if (this.keywords !== '' && (sort === 'relevance' || sort === 'recent')) {
                            this.searchParams.search = this.keywords;
                        }
                        else {
                            delete this.searchParams.search;
                        }
                        properties = Object.entries(this.searchParams).map(function (_a) {
                            var key = _a[0], value = _a[1];
                            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
                        }).join('&');
                        addProps = '&sort=' + sort + ((typeof rangeDay !== 'undefined' && rangeDay !== 0) ? "&created_after=" + day * rangeDay : '');
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var url = _Libraries_global_vars__WEBPACK_IMPORTED_MODULE_0__[/* apiUrl */ "a"] + (_this.playerParams.searchInPlaylist ? "playlist/" + _this.playerParams.searchInPlaylist + "/videos" : "videos") + "?" + properties + addProps;
                                resolve(url);
                            })];
                }
            });
        });
    };
    PlayerManager.prototype.searchVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, video, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(i < this.playerParams.sort.length)) return [3 /*break*/, 10];
                        _a = _Libraries_API_apiCall__WEBPACK_IMPORTED_MODULE_2__[/* fetchData */ "a"];
                        return [4 /*yield*/, this.generateQuery(this.playerParams.sort[i], Number(this.playerParams.rangeDay[i]))];
                    case 2: return [4 /*yield*/, _a.apply(void 0, [_c.sent()])];
                    case 3:
                        video = _c.sent();
                        if (!video) return [3 /*break*/, 9];
                        if (!(video.total > 0)) return [3 /*break*/, 4];
                        this.setVideo(video.list[0], true);
                        if (this.playerParams.showOutsidePlaylist === true) {
                            new _Playlist_playlist_manager__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"](this.rootEl, video, this.playerParams.showPlaynow);
                        }
                        return [3 /*break*/, 10];
                    case 4:
                        if (!(this.playerParams.sort[i] === 'relevance' || this.playerParams.sort[i] === 'recent')) return [3 /*break*/, 8];
                        _c.label = 5;
                    case 5:
                        if (!(this.keywords.split(' ').length >= this.playerParams.minWordSearch && this.keywords.length > 0)) return [3 /*break*/, 8];
                        // Strip a string to try to get video one more time if there is no video found
                        this.keywords = this.keywords.substring(0, this.searchParams.search.lastIndexOf(' '));
                        _b = _Libraries_API_apiCall__WEBPACK_IMPORTED_MODULE_2__[/* fetchData */ "a"];
                        return [4 /*yield*/, this.generateQuery(this.playerParams.sort[i], Number(this.playerParams.rangeDay[i]))];
                    case 6: return [4 /*yield*/, _b.apply(void 0, [_c.sent()])];
                    case 7:
                        video = _c.sent();
                        if (video.total > 0) {
                            this.setVideo(video.list[0], true);
                            if (this.playerParams.showOutsidePlaylist === true) {
                                new _Playlist_playlist_manager__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"](this.rootEl, video, this.playerParams.showPlaynow);
                            }
                            return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 5];
                    case 8:
                        /**
                         * This condition is to check if no videos found
                         */
                        if (video.total === 0 && i === this.playerParams.sort.length - 1) {
                            this.getFallbackVideo();
                            return [3 /*break*/, 10];
                        }
                        _c.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 1];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    PlayerManager.prototype.getFallbackVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentTime, thirtyDays, url, video;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentTime = Math.floor(Date.now() / 1000);
                        thirtyDays = 2592000;
                        url = _Libraries_global_vars__WEBPACK_IMPORTED_MODULE_0__[/* apiUrl */ "a"] + (this.playerParams.searchInPlaylist ? "playlist/" + this.playerParams.searchInPlaylist + "/videos?" : "videos?owners=" + this.playerParams.owners) + (this.playerParams.getUpdatedVideo ? "&created_after=" + (currentTime - thirtyDays) : "") + "&sort=random&limit=1&fields=" + this.searchParams.fields;
                        return [4 /*yield*/, Object(_Libraries_API_apiCall__WEBPACK_IMPORTED_MODULE_2__[/* fetchData */ "a"])(url)];
                    case 1:
                        video = _a.sent();
                        if (video) {
                            if (video.list.length > 0) {
                                /**
                                 * Data return array, get the first array and pass it to setVideo function
                                 */
                                this.setVideo(video.list[0], true);
                            }
                            else {
                                if (_Libraries_global_vars__WEBPACK_IMPORTED_MODULE_0__[/* debugMode */ "b"] === true) {
                                    console.warn("DM related Unable to find a fallback video");
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Find keywords strings on website
     *
     * selector must be a meta tag placed in head
     */
    PlayerManager.prototype.findKeywords = function (selector) {
        var keywords = [''];
        if (selector !== null) {
            try {
                var keywordContainer = document.querySelector(selector);
                keywords = this.sanitizeKeywords(keywordContainer.textContent ? keywordContainer.textContent : keywordContainer.getAttribute("content"));
            }
            catch (e) {
                if (_Libraries_global_vars__WEBPACK_IMPORTED_MODULE_0__[/* debugMode */ "b"] === true) {
                    console.error("Can't find selector: ", selector);
                }
            }
        }
        else if (selector === null && typeof document.getElementsByTagName("h1")[0] !== "undefined") {
            keywords = this.sanitizeKeywords(document.getElementsByTagName("h1")[0].textContent);
        }
        return keywords;
    };
    /**
     * Sanitize keywords based on language
     *
     * Hangul (Korea): \u3131-\uD79D
     * Alphabet: a-zA-Z0-9
     * Latin Character: \u00C0-\u00FF
     * Devanagri (India): \u0900-\u097F
     * Urdu (Arab): \u0621-\u064A \u0660-\u0669
     * Thai: \u0E00-\u0E7F
     */
    // TODO: improve sanitize the keywords to strip duplicate string
    PlayerManager.prototype.sanitizeKeywords = function (keywords) {
        var _this = this;
        return keywords.replace(/[^- \u3131-\uD79D a-zA-Z0-9 \u00C0-\u00FF \u0900-\u097F \u0621-\u064A \u0660-\u0669 \u0E00-\u0E7F \u0153]/g, ' ')
            .split(' ')
            .filter(function (word) { return word.length >= _this.playerParams.minWordLength; });
    };
    return PlayerManager;
}());
/* harmony default export */ __webpack_exports__["a"] = (PlayerManager);


/***/ }),

/***/ "./src/Playlist/Scss/playlist.scss":
/*!*****************************************!*\
  !*** ./src/Playlist/Scss/playlist.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./playlist.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/Playlist/Scss/playlist.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/Playlist/playlist-manager.ts":
/*!******************************************!*\
  !*** ./src/Playlist/playlist-manager.ts ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lory.js */ "./node_modules/lory.js/dist/lory.js");
/* harmony import */ var lory_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lory_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Playlist_Scss_playlist_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Playlist/Scss/playlist.scss */ "./src/Playlist/Scss/playlist.scss");
/* harmony import */ var _Playlist_Scss_playlist_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Playlist_Scss_playlist_scss__WEBPACK_IMPORTED_MODULE_1__);
// Plugins

// Styles

var PlaylistManager = /** @class */ (function () {
    function PlaylistManager(rootEl, videos, playnow) {
        this.dmPlaylist = null;
        this.rootEl = null;
        this.videos = null;
        this.slides = [];
        this.slideActive = '';
        this.nowPlayingTitle = null;
        this.rootEl = rootEl;
        this.videos = videos;
        this.addEventListeners();
        this.generateCarouselTag();
        if (playnow)
            this.generateNowPlaying();
    }
    PlaylistManager.prototype.addEventListeners = function () {
        var _this = this;
        document.addEventListener('dm-video-end', function (e) {
            // @ts-ignore
            _this.playNext(e.detail);
        });
    };
    PlaylistManager.prototype.generateNowPlaying = function () {
        var nowPlaying = document.createElement('div');
        nowPlaying.className = 'dm__now-playing-status';
        var statusText = document.createElement('div');
        statusText.className = 'dm__now-playing-text';
        statusText.innerText = 'Now playing:    ';
        nowPlaying.appendChild(statusText);
        this.nowPlayingTitle = document.createElement('div');
        this.nowPlayingTitle.className = 'dm__now-playing-title';
        this.nowPlayingTitle.innerText = this.videos.list[0].title;
        nowPlaying.appendChild(this.nowPlayingTitle);
        this.dmPlaylist.insertAdjacentElement('afterbegin', nowPlaying);
    };
    PlaylistManager.prototype.generateCarouselTag = function () {
        var _this = this;
        // Create the playlist container first
        this.dmPlaylist = document.createElement('div');
        this.dmPlaylist.className = 'dm-playlist';
        var carouselPlugin = document.createElement('div');
        carouselPlugin.className = 'slider js_slider';
        // Track for Carousel
        var carouselTrack = document.createElement('div');
        carouselTrack.className = 'frame js_frame';
        // carouselTrack.setAttribute('data-glide-el', 'track');
        // Slides
        var carouselSlides = document.createElement('ul');
        carouselSlides.className = 'slides js_slides';
        this.slideActive = this.videos.list[0].id;
        for (var i = 0; i < this.videos.list.length; i++) {
            // Slide
            this.slides[i] = document.createElement('li');
            this.slides[i].className = (i === 0) ? 'js_slide dm__playlist-slide dm__playlist-active' : 'js_slide dm__playlist-slide';
            this.slides[i].setAttribute('data-id', this.videos.list[i].id);
            var slideWrapper = document.createElement('div');
            slideWrapper.className = 'dm__slide-wrapper';
            // Thumbnail
            var contThumbnail = document.createElement('figure');
            contThumbnail.className = 'dm__playlist-cont-thumbnail';
            var thumbnail = new Image();
            thumbnail.className = 'dm__playlist-thumbnail';
            thumbnail.src = this.videos.list[i].thumbnail_240_url;
            contThumbnail.appendChild(thumbnail);
            var duration = document.createElement('span');
            duration.className = 'dm__playlist-duration';
            duration.innerText = this.durationFormat(this.videos.list[i].duration);
            contThumbnail.appendChild(duration);
            slideWrapper.appendChild(contThumbnail);
            var thumbInfo = document.createElement('div');
            thumbInfo.className = 'dm__playlist-info-container';
            // Title
            var title = document.createElement('h5');
            title.className = 'dm__playlist-title';
            var text = document.createTextNode(this.videos.list[i].title);
            title.appendChild(text);
            thumbInfo.appendChild(title);
            var publisherName = document.createElement('p');
            publisherName.className = 'dm__playlist-publisher-name';
            var publisherAva = new Image();
            publisherAva.className = 'dm__playlist-publisher-ava';
            publisherAva.src = this.videos.list[i]['owner.avatar_25_url'];
            publisherName.appendChild(publisherAva);
            var name_1 = document.createElement('span');
            name_1.innerText = "Anu ini kok panjang banget sih"; //this.videos.list[i]['owner.screenname'];
            publisherName.appendChild(name_1);
            thumbInfo.appendChild(publisherName);
            slideWrapper.appendChild(thumbInfo);
            this.slides[i].appendChild(slideWrapper);
            // Listen to the slide
            this.slides[i].addEventListener('click', function (e) {
                // @ts-ignore
                _this.toggleActive(e.target.dataset.id);
            });
            carouselSlides.appendChild(this.slides[i]);
        }
        /**
         * Left Arrow
         */
        var leftArrow = document.createElement('button');
        leftArrow.className = 'js_prev prev';
        // leftArrow.setAttribute('data-glide-dir', '<');
        leftArrow.setAttribute('aria-label', 'Previous');
        leftArrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path class="arrow" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>';
        /**
         * Right Arrow
         */
        var rightArrow = document.createElement('button');
        rightArrow.className = 'js_next next';
        // rightArrow.setAttribute('data-glide-dir', '>');
        rightArrow.setAttribute('aria-label', 'Next');
        rightArrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path class="arrow" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>';
        /**
         * Append component to its container
         */
        carouselTrack.appendChild(carouselSlides);
        carouselPlugin.appendChild(carouselTrack);
        carouselPlugin.appendChild(leftArrow);
        carouselPlugin.appendChild(rightArrow);
        this.dmPlaylist.appendChild(carouselPlugin);
        this.rootEl.appendChild(this.dmPlaylist);
        var self = this;
        /**
         * Execute the carousel
         */
        Object(lory_js__WEBPACK_IMPORTED_MODULE_0__["lory"])(self.dmPlaylist, {
            slidesToScroll: 2,
        });
    };
    PlaylistManager.prototype.toggleActive = function (videoId) {
        this.slideActive = videoId;
        for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].className = (this.slides[i].dataset.id === this.slideActive) ? 'glide__slide dm__playlist-slide dm__playlist-active' : 'glide__slide dm__playlist-slide';
        }
        // Seek the video active
        if (this.nowPlayingTitle) {
            for (var i = 0; i < this.videos.list.length; i++) {
                if (videoId === this.videos.list[i].id) {
                    this.nowPlayingTitle.innerText = this.videos.list[i].title;
                    break;
                }
            }
        }
        this.slideChanges(videoId);
    };
    PlaylistManager.prototype.playNext = function (videoId) {
        var slideActive = videoId;
        // Seek the video container first
        for (var i = 0; i < this.slides.length; i++) {
            if (this.slides[i].dataset.id === videoId && i !== this.slides.length - 1) {
                slideActive = this.slides[i + 1].dataset.id;
                break;
            }
            else if (i === this.slides.length - 1) {
                slideActive = this.slides[0].dataset.id;
                break;
            }
        }
        this.toggleActive(slideActive);
    };
    PlaylistManager.prototype.slideChanges = function (videoId) {
        var slideChanges = new CustomEvent("dm-slide-changes", { detail: videoId });
        document.dispatchEvent(slideChanges);
    };
    PlaylistManager.prototype.durationFormat = function (duration) {
        return new Date(duration * 1000).toISOString().substr(14, 5);
    };
    return PlaylistManager;
}());
/* harmony default export */ __webpack_exports__["a"] = (PlaylistManager);


/***/ })

/******/ });
//# sourceMappingURL=dm-ce.js.map