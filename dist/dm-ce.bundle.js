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

/***/ "./src/dm-player/dm-player.ts":
/*!************************************!*\
  !*** ./src/dm-player/dm-player.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Libraries\n// import { waitFor } from '../utilities/wait-for';\nvar DmPlayer = /** @class */ (function () {\n    function DmPlayer(rootEls) {\n        this.rootEls = null;\n        this.playerParams = null;\n        this.searchParams = null;\n        this.videoParams = null;\n        this.rootEls = rootEls;\n        this.addEventListeners();\n        this.registerNewEvents();\n        this.extractAttrs();\n    }\n    DmPlayer.prototype.addEventListeners = function () {\n        var self = this;\n        document.addEventListener('dm-api-ready', function (e) {\n            self.loadDmPlayer();\n        });\n        document.addEventListener('dm-player-extracted', function (e) {\n            self.prepareSearchParams();\n        });\n        document.addEventListener('dm-search-params-ready', function (e) {\n            self.searchVideo();\n        });\n    };\n    DmPlayer.prototype.registerNewEvents = function () {\n        // listen to api to be ready\n        this.apiReady = new Event('dm-api-ready');\n        // listen to extract player attribute to be extracted\n        this.playerExtracted = new Event('dm-player-extracted');\n        // listen to search params to be ready\n        this.searchParamsReady = new Event('dm-search-params-ready');\n    };\n    DmPlayer.prototype.extractAttrs = function () {\n        var rootEl = this.rootEls[0];\n        this.playerParams = {\n            maxWordSearch: rootEl.getAttribute('maxWordSearch') ? Number(rootEl.getAttribute('maxWordSearch')) : 15,\n            minWordLength: rootEl.getAttribute('minWordLength') ? Number(rootEl.getAttribute('minWordLength')) : 4,\n            minWordSearch: rootEl.getAttribute('minWordSearch') ? Number(rootEl.getAttribute('minWordSearch')) : 2,\n            language: rootEl.getAttribute(\"language\") ? rootEl.getAttribute(\"language\") : \"\",\n            sort: rootEl.getAttribute(\"sort\") ? rootEl.getAttribute(\"sort\") : \"recent\",\n            owners: rootEl.getAttribute(\"owners\") ? rootEl.getAttribute(\"owners\") : \"\",\n            category: rootEl.getAttribute(\"category\") ? rootEl.getAttribute(\"category\") : \"\",\n            excludeIds: rootEl.getAttribute(\"excludeIds\") ? rootEl.getAttribute(\"excludeIds\") : \"\",\n            searchInPlaylist: rootEl.getAttribute(\"searchInPlaylist\") ? rootEl.getAttribute(\"searchInPlaylist\") : false,\n            syndication: rootEl.getAttribute(\"syndication\") ? rootEl.getAttribute(\"syndication\") : \"\",\n            autoPlayMute: (rootEl.getAttribute(\"autoPlayMute\") != 'false'),\n            queueEnable: (rootEl.getAttribute('queueEnable') != 'false'),\n            queueEnableNext: (rootEl.getAttribute('queueEnableNext') != 'false'),\n            controls: (rootEl.getAttribute('controls') != 'false'),\n            adsParams: rootEl.getAttribute('adsParams') ? rootEl.getAttribute('adsParams') : \"contextual\",\n            cpeId: rootEl.getAttribute('cpeId') ? rootEl.getAttribute('cpeId').split(',') : [''],\n            keywordsSelector: rootEl.getAttribute('keywordsSelector') ? rootEl.getAttribute('keywordsSelector') : null\n        };\n        // Tell the event listener that player parameters is extracted\n        document.dispatchEvent(this.playerExtracted);\n    };\n    DmPlayer.prototype.prepareSearchParams = function () {\n        var keywords = this.findKeywords(this.playerParams.keywordsSelector);\n        this.searchParams = {\n            fields: 'id,title',\n            limit: 1,\n            sort: this.playerParams.sort,\n            search: keywords ? keywords.sort(function (a, b) { return b.length - a.length; }).slice(0, this.playerParams.maxWordSearch).join(' ') : \"\",\n            language: this.playerParams.language ? this.playerParams.language : ''\n        };\n        if (!this.playerParams.searchInPlaylist) {\n            this.searchParams.private = 0;\n            this.searchParams.flags = \"no_live,exportable\" + (this.playerParams.owners.length > 0 ? \"\" : \",verified\");\n            this.searchParams.longer_than = 0.35; //21sec\n            if (this.playerParams.owners)\n                this.searchParams.owners = this.playerParams.owners;\n            if (this.playerParams.category)\n                this.searchParams.channel = this.playerParams.category;\n            if (this.playerParams.excludeIds)\n                this.searchParams.exclude_ids = this.playerParams.excludeIds;\n        }\n        if (this.playerParams.language)\n            this.searchParams.language = this.playerParams.language;\n        // Tell the event listener that search params is ready\n        document.dispatchEvent(this.searchParamsReady);\n    };\n    DmPlayer.prototype.htmlEntities = function (str) {\n        return String(str).replace(/&/g, '%26').replace(/=/g, '%3d');\n    };\n    DmPlayer.prototype.loadDmPlayer = function () {\n        var rootEl = this.rootEls[0];\n        var cpeEmbed = document.createElement(\"div\");\n        var queryString = \"\";\n        if (this.playerParams.adsParams === \"\") {\n            queryString += \"ads_params=contextual\";\n        }\n        else {\n            queryString += \"ads_params=\" + this.htmlEntities(this.playerParams.adsParams);\n        }\n        if (this.playerParams.syndication !== \"\")\n            queryString += \"&syndication=\" + this.playerParams.syndication;\n        if (this.playerParams.controls !== true)\n            queryString += \"&controls=\" + this.playerParams.controls;\n        cpeEmbed.setAttribute(\"class\", \"dailymotion-cpe\");\n        cpeEmbed.setAttribute(\"video-id\", this.videoParams.id);\n        cpeEmbed.setAttribute(\"query-string\", queryString);\n        if (rootEl.getAttribute(\"width\") !== null) {\n            this.playerParams.width = Number(rootEl.getAttribute(\"width\"));\n            cpeEmbed.setAttribute(\"width\", rootEl.getAttribute(\"width\"));\n        }\n        if (rootEl.getAttribute(\"height\") !== null) {\n            this.playerParams.height = Number(rootEl.getAttribute(\"height\"));\n            cpeEmbed.setAttribute(\"height\", rootEl.getAttribute(\"height\"));\n        }\n        var cpeId = this.playerParams.cpeId[0];\n        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))\n            cpeId = this.playerParams.cpeId[1] ? this.playerParams.cpeId[1] : this.playerParams.cpeId[0];\n        // Avoid error while building\n        var date = new Date();\n        // Append the element to the root player element\n        rootEl.appendChild(cpeEmbed);\n        // Load the script\n        (function (w, d, s, u, n, i, f, g, e, c) { w.WDMObject = n; w[n] = w[n] || function () { (w[n].q = w[n].q || []).push(arguments); }; w[n].l = 1 * date; w[n].i = i; w[n].f = f; w[n].g = g; e = d.createElement(s); e.async = 1; e.src = u; c = d.getElementsByTagName(s)[0]; c.parentNode.insertBefore(e, c); })(window, document, \"script\", \"//api.dmcdn.net/pxl/cpe/client.min.js\", \"cpe\", cpeId);\n    };\n    DmPlayer.prototype.setVideo = function (video) {\n        this.videoParams = video;\n        document.dispatchEvent(this.apiReady);\n    };\n    DmPlayer.prototype.searchVideo = function () {\n        var _this = this;\n        console.log(\"%c DM related \", \"background: #56C7FF; color: #232323\", \"Search: \" + this.searchParams.search);\n        var properties = Object.entries(this.searchParams).map(function (_a) {\n            var key = _a[0], value = _a[1];\n            return encodeURIComponent(key) + \"=\" + encodeURIComponent(value);\n        }).join('&');\n        var dmSearchUrl = \"https://api.dailymotion.com/\" + (this.playerParams.searchInPlaylist ? \"playlist/\" + this.playerParams.searchInPlaylist + \"/videos\" : \"videos\") + \"?\" + properties;\n        fetch(dmSearchUrl).then(function (response) {\n            return response.json();\n        }).then(function (data) {\n            if (data.total > 0) {\n                _this.setVideo(data.list[0]);\n            }\n            else {\n                // this.searchParams.search = this.searchParams.search.substring(0, this.searchParams.search.lastIndexOf(' '));\n                // if(this.searchParams.search.split(' ').length >= this.playerParams.minWordSearch && this.searchParams.search.length > 0)\n                //     this.searchVideo();\n                // else{\n                console.log(\"%c DM related \", \"background: #56C7FF; color: #232323\", \"Can not find related video. Fallback video used.\");\n                _this.getFallbackVideo();\n                // }\n            }\n        });\n    };\n    DmPlayer.prototype.getFallbackVideo = function () {\n        // Define current time and 30 days\n        var currentTime = Math.floor(Date.now() / 1000);\n        var thirtyDays = 2592000;\n        var url = \"https://api.dailymotion.com/\" + (this.playerParams.searchInPlaylist ? \"playlist/\" + this.playerParams.searchInPlaylist + \"/videos?\" : \"videos?owners=\" + this.playerParams.owners) + \"&created_after=\" + (currentTime - thirtyDays) + \"&sort=random&limit=1&fields=id,title\";\n        var self = this;\n        fetch(url).then(function (response) {\n            return response.json();\n        }).then(function (data) {\n            if (data.list.length > 0) {\n                /**\n                 * Data return array, get the first array and pass it to setVideo function\n                 */\n                self.setVideo(data.list[0]);\n            }\n            else {\n                console.warn(\"DM related Unable to find a fallback video\");\n            }\n        });\n    };\n    /**\n     * Find keywords strings on website\n     *\n     * Step find keywords string\n     * 1. Find meta keywords\n     * 2. Find\n     */\n    DmPlayer.prototype.findKeywords = function (selector) {\n        var keywords = [''];\n        if (selector !== null) {\n            var keywordContainer = document.querySelector(selector);\n            keywords = this.sanitizeKeywords(keywordContainer.getAttribute(\"content\"));\n        }\n        else if ((typeof selector === \"undefined\") && typeof document.getElementsByTagName(\"h1\")[0] !== \"undefined\") {\n            keywords = this.sanitizeKeywords(document.getElementsByTagName(\"h1\")[0].textContent);\n        }\n        return keywords;\n    };\n    /**\n     * Sanitize keywords based on language\n     *\n     * Hangul (Korea): \\u3131-\\uD79D\n     * Alphabet: a-zA-Z0-9\n     * Latin Character: \\u00C0-\\u00FF\n     * Devanagri (India): \\u0900-\\u097F\n     */\n    DmPlayer.prototype.sanitizeKeywords = function (keywords) {\n        var _this = this;\n        var splitWords = keywords.replace(/[^- \\u3131-\\uD79D a-zA-Z0-9 \\u00C0-\\u00FF \\u0153]/g, ' ')\n            .split(' ')\n            .filter(function (word) { return word.length >= _this.playerParams.minWordLength; });\n        return splitWords;\n    };\n    return DmPlayer;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (DmPlayer);\n\n\n//# sourceURL=webpack:///./src/dm-player/dm-player.ts?");

/***/ }),

/***/ "./src/entries/dm-embed.ts":
/*!*********************************!*\
  !*** ./src/entries/dm-embed.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dm_player_dm_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dm-player/dm-player */ \"./src/dm-player/dm-player.ts\");\n\nvar el = document.querySelectorAll('.dm-player');\nvar dmEmbed = new _dm_player_dm_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el);\n\n\n//# sourceURL=webpack:///./src/entries/dm-embed.ts?");

/***/ })

/******/ });