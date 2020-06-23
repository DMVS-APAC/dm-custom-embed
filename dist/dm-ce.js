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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/dm-embed.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/main.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/main.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dailymotion-cpe {\n  /* Show the video player responsive based on 16:9 ratio*/ }\n  .dailymotion-cpe:before {\n    content: \"\";\n    padding-top: 56.25%;\n    background: #000;\n    display: block;\n    -webkit-animation: slideInDown;\n    animation: slideInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1; }\n\n/* Keyframe for animate the player*/\n@-webkit-keyframes slideInDown {\n  from {\n    padding-top: 0; }\n  to {\n    padding-top: 56.25%; } }\n\n@keyframes slideInDown {\n  from {\n    padding-top: 0; }\n  to {\n    padding-top: 56.25%; } }\n\n.dm__pre-video-title {\n  text-align: var(--dm-video-align, center) !important;\n  margin: var(--dm-video-margin, 8px 0) !important;\n  font-style: var(--dm-video-style, normal) !important;\n  color: var(--dm-video-color, #000) !important;\n  font-size: var(--dm-video-size, 1.2em) !important;\n  font-weight: var(--dm-video-weight, 700) !important; }\n\n.dm__info-card {\n  background: var(--dm-info-card-bg, #eee) !important;\n  padding: var(--dm-info-card-padding, 8px 13px) !important;\n  display: flex;\n  text-align: var(--dm-info-card-align, left) !important;\n  /* Title*/\n  --dm-title-align: left;\n  --dm-title-weight: 700;\n  --dm-title-size: 1.1em; }\n\n.dm__text-wrapper {\n  width: calc(100% - 80px);\n  padding-right: 13px; }\n\n.dm__video-title {\n  text-align: var(--dm-title-align, center) !important;\n  margin: var(--dm-title-margin, 8px 0) !important;\n  font-style: var(--dm-title-style, normal) !important;\n  color: var(--dm-title-color, inherit) !important;\n  font-size: var(--dm-title-size, 1em) !important;\n  font-weight: var(--dm-title-weight, 400) !important;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%; }\n\n.dm__video-desc {\n  text-align: var(--dm-desc-align, left) !important;\n  margin: var(--dm-desc-margin, 0 0 8px) !important;\n  font-style: var(--dm-desc-style, normal) !important;\n  color: var(--dm-desc-color, inherit) !important;\n  font-size: var(--dm-desc-size, 0.9em) !important;\n  font-weight: var(--dm-desc-weight, inherit) !important;\n  padding-top: 13px;\n  border-top: solid #666 1px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1; }\n\n.dm__ava-wrapper {\n  width: 80px; }\n\n.dm__owner-ava {\n  width: 100%;\n  height: auto; }\n\n.dm-player {\n  /* Cover the video that not playing yet when ad is playing*/ }\n  .dm-player .insider.dm-disabled:after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./src/api/apiCall.ts":
/*!****************************!*\
  !*** ./src/api/apiCall.ts ***!
  \****************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/vars */ "./src/global/vars.ts");
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
        if (_global_vars__WEBPACK_IMPORTED_MODULE_0__["debugMode"] === true) {
            console.log("API calling error");
        }
    });
}


/***/ }),

/***/ "./src/dm/dm-manager.ts":
/*!******************************!*\
  !*** ./src/dm/dm-manager.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_wait_for__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/wait-for */ "./src/utilities/wait-for.ts");
/* harmony import */ var _player_player_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/player-manager */ "./src/player/player-manager.ts");
/* harmony import */ var _player_player_events_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/player-events-manager */ "./src/player/player-events-manager.ts");
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



var DmManager = /** @class */ (function () {
    function DmManager(rootEls, keywords) {
        this.rootEls = null;
        this.scriptLoaded = false;
        this.keywords = null;
        // Pass rootEls to local variable
        this.rootEls = rootEls;
        this.keywords = keywords;
        this.eventListeners();
        this.renderElement();
    }
    DmManager.prototype.eventListeners = function () {
        var _this = this;
        document.addEventListener('dm-video-holder-ready', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_utilities_wait_for__WEBPACK_IMPORTED_MODULE_0__["waitFor"])(function () { return DmManager.player[0] !== null; }, 500, 2000, "Timeout waiting player ready")];
                    case 1:
                        _a.sent();
                        if (this.scriptLoaded !== true) {
                            // Waiting for the first instance filled
                            this.loadScript(DmManager.player[0].cpeId, DmManager.player[0].cpeParams);
                            this.scriptLoaded = true;
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DmManager.prototype.listenVideoEvents = function () {
        // It's start to listen to the video events
        new _player_player_events_manager__WEBPACK_IMPORTED_MODULE_2__["default"](DmManager.player[0].multiplayerParams);
    };
    DmManager.prototype.renderElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                for (i = 0; i < this.rootEls.length; i++) {
                    DmManager.player[i] = new _player_player_manager__WEBPACK_IMPORTED_MODULE_1__["default"]("dm_" + i, this.rootEls[i], (i === 0 && this.keywords !== null) ? this.keywords : null);
                }
                this.listenVideoEvents();
                return [2 /*return*/];
            });
        });
    };
    DmManager.renderOnDemand = function (el, keywords) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.player.push(new _player_player_manager__WEBPACK_IMPORTED_MODULE_1__["default"]("dm_" + this.player.length + 1, el, keywords));
                        return [4 /*yield*/, Object(_utilities_wait_for__WEBPACK_IMPORTED_MODULE_0__["sleep"])(1000)];
                    case 1:
                        _a.sent();
                        window.cpe.parse();
                        return [2 /*return*/];
                }
            });
        });
    };
    DmManager.prototype.loadScript = function (cpeId, cpeParams) {
        var cpe = cpeId[0];
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            cpe = cpeId[1] ? cpeId[1] : cpeId[0];
        // Avoid error while building
        var date = new Date();
        // Load the CPE script
        (function (w, d, s, u, n, i, f, g, e, c) { w.WDMObject = n; w[n] = w[n] || function () { (w[n].q = w[n].q || []).push(arguments); }; w[n].l = 1 * date; w[n].i = i; w[n].f = f; w[n].g = g; e = d.createElement(s); e.async = 1; e.src = u; c = d.getElementsByTagName(s)[0]; c.parentNode.insertBefore(e, c); })(window, document, "script", "//api.dmcdn.net/pxl/cpe/client.min.js", "cpe", cpe, cpeParams);
    };
    // TODO: Find best practice to do static variable and function
    DmManager.player = [];
    return DmManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (DmManager);


/***/ }),

/***/ "./src/entries/dm-embed.ts":
/*!*********************************!*\
  !*** ./src/entries/dm-embed.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dm_dm_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dm/dm-manager */ "./src/dm/dm-manager.ts");
/* harmony import */ var _utilities_wait_for__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/wait-for */ "./src/utilities/wait-for.ts");
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
            // Wait `.dm-player` to be ready first before do everything
            return [4 /*yield*/, Object(_utilities_wait_for__WEBPACK_IMPORTED_MODULE_1__["waitFor"])(function () { return document.querySelectorAll('.dm-player').length > 0; }, 500, 2000, "Timeout to get DM placeholder")];
            case 1:
                // Wait `.dm-player` to be ready first before do everything
                _a.sent();
                el = document.querySelectorAll('.dm-player');
                new _dm_dm_manager__WEBPACK_IMPORTED_MODULE_0__["default"](el);
                return [2 /*return*/];
        }
    });
}); };
init();
// Expose dmce method for `on the fly` rendering
var dmce = /** @class */ (function () {
    function dmce() {
    }
    dmce.prototype.render = function (el, keywords) {
        _dm_dm_manager__WEBPACK_IMPORTED_MODULE_0__["default"].renderOnDemand(el, keywords);
    };
    ;
    return dmce;
}());
window.dmce = new dmce();


/***/ }),

/***/ "./src/global/vars.ts":
/*!****************************!*\
  !*** ./src/global/vars.ts ***!
  \****************************/
/*! exports provided: debugMode, apiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugMode", function() { return debugMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony import */ var _utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/get-query-params */ "./src/utilities/get-query-params.ts");
// Utilities

// Get debug mode params from url
var debugMode = (Object(_utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__["default"])('dmdebug') != null && Object(_utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__["default"])('dmdebug') != 'false');
var apiUrl = process.env.API_URL ? process.env.API_URL : "https://api.dailymotion.com/";

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/player/components/info-card.ts":
/*!********************************************!*\
  !*** ./src/player/components/info-card.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (InfoCard);


/***/ }),

/***/ "./src/player/components/pre-video-title.ts":
/*!**************************************************!*\
  !*** ./src/player/components/pre-video-title.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setPreVideoTitle; });
function setPreVideoTitle(text) {
    var preTitle = document.createElement('p');
    preTitle.innerHTML = text;
    preTitle.className = 'dm__pre-video-title';
    return preTitle;
}


/***/ }),

/***/ "./src/player/components/video-title.ts":
/*!**********************************************!*\
  !*** ./src/player/components/video-title.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (VideoTitle);


/***/ }),

/***/ "./src/player/player-events-manager.ts":
/*!*********************************************!*\
  !*** ./src/player/player-events-manager.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    function PlayerEventsManager(multiplayer) {
        this.players = [];
        this.adPlaying = '';
        this.multiplayerParams = null;
        this.videoEvents();
        this.multiplayerParams = multiplayer;
    }
    PlayerEventsManager.prototype.videoEvents = function () {
        var _this = this;
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
                    }
                });
                player.addEventListener('ad_end', function (e) {
                    if (_this.adPlaying !== '') {
                        _this.adPlaying = '';
                        // Toggle disabled player
                        if (_this.multiplayerParams.adCoverPlay) {
                            _this.toggleDisable();
                        }
                    }
                });
                /**
                 * To handle multiple players in a page with scroll to play
                 */
                player.addEventListener('playing', function (e) {
                    if (_this.multiplayerParams.closePip === true) {
                        _this.togglePlay(player.id);
                    }
                });
            };
            for (var i = 0; i < players.length; i++) {
                _loop_1(i);
            }
        });
        // Listen to PiP close to pause the video player
        // @ts-ignore
        window.addEventListener('cpepipclose', function (_a) {
            var player = _a.detail.player;
            // Do pause when cpe PiP is closed
            player.pause();
        });
    };
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
/* harmony default export */ __webpack_exports__["default"] = (PlayerEventsManager);


/***/ }),

/***/ "./src/player/player-manager.ts":
/*!**************************************!*\
  !*** ./src/player/player-manager.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/vars */ "./src/global/vars.ts");
/* harmony import */ var _utilities_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/html-entities */ "./src/utilities/html-entities.ts");
/* harmony import */ var _api_apiCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/apiCall */ "./src/api/apiCall.ts");
/* harmony import */ var _utilities_wait_for__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/wait-for */ "./src/utilities/wait-for.ts");
/* harmony import */ var _components_pre_video_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pre-video-title */ "./src/player/components/pre-video-title.ts");
/* harmony import */ var _components_video_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/video-title */ "./src/player/components/video-title.ts");
/* harmony import */ var _components_info_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/info-card */ "./src/player/components/info-card.ts");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_7__);
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

var PlayerManager = /** @class */ (function () {
    function PlayerManager(id, rootEl, keywords) {
        this.id = "";
        this.rootEl = null;
        this.playerParams = null;
        this.searchParams = null;
        this.videoParams = null;
        this.keywords = null;
        this.videoTitle = null;
        this.infoCard = null;
        // From outside, it's a dailymotion player
        this.players = [];
        this.cpeId = [];
        this.cpeParams = {};
        this.multiplayerParams = null;
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
            sort: rootEl.getAttribute("sort") ? rootEl.getAttribute("sort") : "recent",
            owners: rootEl.getAttribute("owners") ? rootEl.getAttribute("owners") : "",
            category: rootEl.getAttribute("category") ? rootEl.getAttribute("category") : "",
            excludeIds: rootEl.getAttribute("excludeIds") ? rootEl.getAttribute("excludeIds") : "",
            searchInPlaylist: rootEl.getAttribute("searchInPlaylist") ? rootEl.getAttribute("searchInPlaylist") : false,
            syndication: rootEl.getAttribute("syndication") ? rootEl.getAttribute("syndication") : "",
            controls: (rootEl.getAttribute('controls') != 'false'),
            adsParams: rootEl.getAttribute('adsParams') ? rootEl.getAttribute('adsParams') : "contextual",
            cpeId: rootEl.getAttribute('cpeId') ? rootEl.getAttribute('cpeId').split(',') : [''],
            keywordsSelector: rootEl.getAttribute('keywordsSelector') ? rootEl.getAttribute('keywordsSelector') : null,
            startDate: rootEl.getAttribute('startDate') ? rootEl.getAttribute('startDate') : null,
            getUpdatedVideo: (rootEl.getAttribute('getUpdatedVideo') != 'false'),
            preVideoTitle: rootEl.getAttribute('preVideoTitle') ? rootEl.getAttribute('preVideoTitle') : null,
            showVideoTitle: (rootEl.getAttribute('showVideoTitle') != 'false' && rootEl.getAttribute('showVideoTitle') != null),
            showInfoCard: (rootEl.getAttribute('showInfoCard') != 'false' && rootEl.getAttribute('showInfoCard') != null),
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
        this.multiplayerParams = {
            adCoverPlay: (rootEl.getAttribute('adCoverPlay') == 'true'),
            closePip: (rootEl.getAttribute('closePip') == 'true'),
        };
        if (_global_vars__WEBPACK_IMPORTED_MODULE_0__["debugMode"] === true) {
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
        var keywords = this.findKeywords(this.playerParams.keywordsSelector);
        this.searchParams = {
            fields: this.playerParams.showInfoCard ? 'id,title,description,owner.avatar_190_url' : 'id,title',
            limit: 1,
            sort: this.playerParams.sort,
        };
        if (this.playerParams.sort === "relevance") {
            this.searchParams.search = this.keywords ? this.keywords : keywords.sort(function (a, b) { return b.length - a.length; }).slice(0, this.playerParams.maxWordSearch).join(' ');
        }
        if (this.playerParams.startDate !== null) {
            this.searchParams.created_after = new Date(this.playerParams.startDate).getTime() / 1000;
        }
        if (!this.playerParams.searchInPlaylist) {
            // TODO: test using private video
            this.searchParams.private = 1;
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
            queryString += "ads_params=" + Object(_utilities_html_entities__WEBPACK_IMPORTED_MODULE_1__["default"])(this.playerParams.adsParams);
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
        if (this.playerParams.queueEnable === false)
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
            var preTitle = Object(_components_pre_video_title__WEBPACK_IMPORTED_MODULE_4__["default"])(this.playerParams.preVideoTitle);
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
            var videoTitle = new _components_video_title__WEBPACK_IMPORTED_MODULE_5__["default"]();
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
            var infoCard = new _components_info_card__WEBPACK_IMPORTED_MODULE_6__["default"]();
            if (this.infoCard !== null) {
                this.infoCard.remove();
            }
            this.infoCard = infoCard.setInfoCard(this.videoParams);
            this.rootEl.insertAdjacentElement('afterend', this.infoCard);
        }
    };
    PlayerManager.prototype.getVideoInfo = function (videoId, createNew) {
        return __awaiter(this, void 0, void 0, function () {
            var url, video;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _global_vars__WEBPACK_IMPORTED_MODULE_0__["apiUrl"] + "/video/" + videoId + '?fields=' + this.searchParams.fields;
                        return [4 /*yield*/, Object(_api_apiCall__WEBPACK_IMPORTED_MODULE_2__["fetchData"])(url)];
                    case 1:
                        video = _a.sent();
                        this.setVideo(video, createNew);
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerManager.prototype.searchVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var properties, url, video;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (_global_vars__WEBPACK_IMPORTED_MODULE_0__["debugMode"] === true && this.playerParams.sort === 'relevance') {
                            console.log("%c DM related ", "background: #56C7FF; color: #232323", "Search: " + this.searchParams.search);
                        }
                        // Waiting for search params to be ready
                        return [4 /*yield*/, Object(_utilities_wait_for__WEBPACK_IMPORTED_MODULE_3__["waitFor"])(function () { return _this.searchParams !== null; }, 100, 5000, "Timeout waiting for searchParams not null")];
                    case 1:
                        // Waiting for search params to be ready
                        _a.sent();
                        properties = Object.entries(this.searchParams).map(function (_a) {
                            var key = _a[0], value = _a[1];
                            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
                        }).join('&');
                        url = _global_vars__WEBPACK_IMPORTED_MODULE_0__["apiUrl"] + (this.playerParams.searchInPlaylist ? "playlist/" + this.playerParams.searchInPlaylist + "/videos" : "videos") + "?" + properties;
                        return [4 /*yield*/, Object(_api_apiCall__WEBPACK_IMPORTED_MODULE_2__["fetchData"])(url)];
                    case 2:
                        video = _a.sent();
                        if (!video) return [3 /*break*/, 6];
                        if (!(video.total > 0)) return [3 /*break*/, 3];
                        this.setVideo(video.list[0], true);
                        return [3 /*break*/, 6];
                    case 3:
                        // Strip a string to try to get video one more time if there is no video found
                        this.searchParams.search = this.searchParams.search.substring(0, this.searchParams.search.lastIndexOf(' '));
                        if (!(this.searchParams.search.split(' ').length >= this.playerParams.minWordSearch && this.searchParams.search.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.searchVideo()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        // TODO: separate log module to utilities
                        if (_global_vars__WEBPACK_IMPORTED_MODULE_0__["debugMode"] === true) {
                            console.log("%c DM related ", "background: #56C7FF; color: #232323", "Can not find related video. Fallback video used.");
                        }
                        this.getFallbackVideo();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
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
                        url = _global_vars__WEBPACK_IMPORTED_MODULE_0__["apiUrl"] + (this.playerParams.searchInPlaylist ? "playlist/" + this.playerParams.searchInPlaylist + "/videos?" : "videos?owners=" + this.playerParams.owners) + (this.playerParams.getUpdatedVideo ? "&created_after=" + (currentTime - thirtyDays) : "") + "&sort=random&limit=1&fields=" + this.searchParams.fields;
                        return [4 /*yield*/, Object(_api_apiCall__WEBPACK_IMPORTED_MODULE_2__["fetchData"])(url)];
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
                                if (_global_vars__WEBPACK_IMPORTED_MODULE_0__["debugMode"] === true) {
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
                if (_global_vars__WEBPACK_IMPORTED_MODULE_0__["debugMode"] === true) {
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
     */
    // TODO: improve sanitize the keywords to strip duplicate string
    PlayerManager.prototype.sanitizeKeywords = function (keywords) {
        var _this = this;
        return keywords.replace(/[^- \u3131-\uD79D a-zA-Z0-9 \u00C0-\u00FF \u0900-\u097F \u0621-\u064A \u0660-\u0669 \u0153]/g, ' ')
            .split(' ')
            .filter(function (word) { return word.length >= _this.playerParams.minWordLength; });
    };
    return PlayerManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (PlayerManager);


/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/main.scss");

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

/***/ "./src/utilities/get-query-params.ts":
/*!*******************************************!*\
  !*** ./src/utilities/get-query-params.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParam; });
function getParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


/***/ }),

/***/ "./src/utilities/html-entities.ts":
/*!****************************************!*\
  !*** ./src/utilities/html-entities.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return htmlEntities; });
function htmlEntities(str) {
    return String(str).replace(/&/g, '%26').replace(/=/g, '%3d');
}


/***/ }),

/***/ "./src/utilities/wait-for.ts":
/*!***********************************!*\
  !*** ./src/utilities/wait-for.ts ***!
  \***********************************/
/*! exports provided: waitFor, sleep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitFor", function() { return waitFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
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


/***/ })

/******/ });
//# sourceMappingURL=dm-ce.js.map