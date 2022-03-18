/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dynamicAdapt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dynamicAdapt.js */ \"./src/js/modules/dynamicAdapt.js\");\n/* harmony import */ var _modules_first_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/first.js */ \"./src/js/modules/first.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_topSlider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/topSlider.js */ \"./src/js/modules/topSlider.js\");\n/* harmony import */ var _modules_stepsSlider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/stepsSlider.js */ \"./src/js/modules/stepsSlider.js\");\n/* harmony import */ var _modules_problemsSlider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/problemsSlider.js */ \"./src/js/modules/problemsSlider.js\");\n/* harmony import */ var _modules_problemsSliderAdaptive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/problemsSliderAdaptive.js */ \"./src/js/modules/problemsSliderAdaptive.js\");\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll.js */ \"./src/js/modules/scroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_first_js__WEBPACK_IMPORTED_MODULE_1__.sum)();\r\n(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_2__.tabs)();\r\n(0,_modules_topSlider_js__WEBPACK_IMPORTED_MODULE_3__.topSlider)();\r\n(0,_modules_stepsSlider_js__WEBPACK_IMPORTED_MODULE_4__.stepsSlider)();\r\n(0,_modules_problemsSlider_js__WEBPACK_IMPORTED_MODULE_5__.problemsSlider)();\r\n(0,_modules_problemsSliderAdaptive_js__WEBPACK_IMPORTED_MODULE_6__.problemsSliderAdaptive)();\r\n(0,_modules_scroll_js__WEBPACK_IMPORTED_MODULE_7__.scroll)();\r\n\n\n//# sourceURL=webpack://gulpStart/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/dynamicAdapt.js":
/*!****************************************!*\
  !*** ./src/js/modules/dynamicAdapt.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// Dynamic Adapt v.1\r\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\r\n// e.x. data-da=\".item,992,2\"\r\n// Andrikanych Yevhen 2020\r\n// https://www.youtube.com/c/freelancerlifestyle\r\n\r\n\r\nfunction DynamicAdapt(type) {\r\n\tthis.type = type;\r\n}\r\nDynamicAdapt.prototype.init = function () {\r\n\tconst _this = this;\r\n\t// массив объектов\r\n\tthis.оbjects = [];\r\n\tthis.daClassname = \"_dynamic_adapt_\";\r\n\t// массив DOM-элементов\r\n\tthis.nodes = document.querySelectorAll(\"[data-da]\");\r\n\t// наполнение оbjects объктами\r\n\tfor (let i = 0; i < this.nodes.length; i++) {\r\n\t\tconst node = this.nodes[i];\r\n\t\tconst data = node.dataset.da.trim();\r\n\t\tconst dataArray = data.split(\",\");\r\n\t\tconst оbject = {};\r\n\t\tоbject.element = node;\r\n\t\tоbject.parent = node.parentNode;\r\n\t\tоbject.destination = document.querySelector(dataArray[0].trim());\r\n\t\tоbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\r\n\t\tоbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\r\n\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\r\n\t\tthis.оbjects.push(оbject);\r\n\t\t\r\n\t}\r\n\tthis.arraySort(this.оbjects);\r\n\t// массив уникальных медиа-запросов\r\n\tthis.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\r\n\t\treturn '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\r\n\t}, this);\r\n\tthis.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\r\n\t\treturn Array.prototype.indexOf.call(self, item) === index;\r\n\t});\r\n\t// навешивание слушателя на медиа-запрос\r\n\t// и вызов обработчика при первом запуске\r\n\tfor (let i = 0; i < this.mediaQueries.length; i++) {\r\n\t\tconst media = this.mediaQueries[i];\r\n\t\tconst mediaSplit = String.prototype.split.call(media, ',');\r\n\t\tconst matchMedia = window.matchMedia(mediaSplit[0]);\r\n\t\tconst mediaBreakpoint = mediaSplit[1];\r\n\t\t// массив объектов с подходящим брейкпоинтом\r\n\t\tconst оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {\r\n\t\t\treturn item.breakpoint === mediaBreakpoint;\r\n\t\t});\r\n\t\tmatchMedia.addListener(function () {\r\n\t\t\t_this.mediaHandler(matchMedia, оbjectsFilter);\r\n\t\t});\r\n\t\tthis.mediaHandler(matchMedia, оbjectsFilter);\r\n\t}\r\n};\r\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\r\n\tif (matchMedia.matches) {\r\n\t\tfor (let i = 0; i < оbjects.length; i++) {\r\n\t\t\tconst оbject = оbjects[i];\r\n\t\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\r\n\t\t\tthis.moveTo(оbject.place, оbject.element, оbject.destination);\r\n\t\t}\r\n\t} else {\r\n\t\t//for (let i = 0; i < оbjects.length; i++) {\r\n\t\tfor (let i = оbjects.length - 1; i >= 0; i--) {\r\n\t\t\tconst оbject = оbjects[i];\r\n\t\t\tif (оbject.element.classList.contains(this.daClassname)) {\r\n\t\t\t\tthis.moveBack(оbject.parent, оbject.element, оbject.index);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n};\r\n// Функция перемещения\r\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\r\n\telement.classList.add(this.daClassname);\r\n\tif (place === 'last' || place >= destination.children.length) {\r\n\t\tdestination.insertAdjacentElement('beforeend', element);\r\n\t\treturn;\r\n\t}\r\n\tif (place === 'first') {\r\n\t\tdestination.insertAdjacentElement('afterbegin', element);\r\n\t\treturn;\r\n\t}\r\n\tdestination.children[place].insertAdjacentElement('beforebegin', element);\r\n};\r\n// Функция возврата\r\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\r\n\telement.classList.remove(this.daClassname);\r\n\tif (parent.children[index] !== undefined) {\r\n\t\tparent.children[index].insertAdjacentElement('beforebegin', element);\r\n\t} else {\r\n\t\tparent.insertAdjacentElement('beforeend', element);\r\n\t}\r\n};\r\n// Функция получения индекса внутри родителя\r\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\r\n\tconst array = Array.prototype.slice.call(parent.children);\r\n\treturn Array.prototype.indexOf.call(array, element);\r\n};\r\n// Функция сортировки массива по breakpoint и place \r\n// по возрастанию для this.type = min\r\n// по убыванию для this.type = max\r\nDynamicAdapt.prototype.arraySort = function (arr) {\r\n\tif (this.type === \"min\") {\r\n\t\tArray.prototype.sort.call(arr, function (a, b) {\r\n\t\t\tif (a.breakpoint === b.breakpoint) {\r\n\t\t\t\tif (a.place === b.place) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\r\n\t\t\t\t\treturn -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn a.place - b.place;\r\n\t\t\t}\r\n\r\n\t\t\treturn a.breakpoint - b.breakpoint;\r\n\t\t});\r\n\t} else {\r\n\t\tArray.prototype.sort.call(arr, function (a, b) {\r\n\t\t\tif (a.breakpoint === b.breakpoint) {\r\n\t\t\t\tif (a.place === b.place) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\r\n\t\t\t\t\treturn -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn b.place - a.place;\r\n\t\t\t}\r\n\r\n\t\t\treturn b.breakpoint - a.breakpoint;\r\n\t\t});\r\n\t\treturn;\r\n\t}\r\n};\r\nconst da = new DynamicAdapt(\"max\");\r\nda.init();\r\n\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/dynamicAdapt.js?");

/***/ }),

/***/ "./src/js/modules/first.js":
/*!*********************************!*\
  !*** ./src/js/modules/first.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sum\": function() { return /* binding */ sum; }\n/* harmony export */ });\nfunction sum () {\r\n    console.log('first');\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/first.js?");

/***/ }),

/***/ "./src/js/modules/problemsSlider.js":
/*!******************************************!*\
  !*** ./src/js/modules/problemsSlider.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"problemsSlider\": function() { return /* binding */ problemsSlider; }\n/* harmony export */ });\nconst problemsSlider = () => {\r\n    const slides = document.querySelectorAll('.wrapper-problems');\r\n    const prev = document.querySelector('.problems-arrow__prev');\r\n    const next = document.querySelector('.problems-arrow__next');\r\n\r\n    const total = document.querySelector('.problems-number__total');\r\n    const current = document.querySelector('.problems-number__curr');\r\n    total.textContent = slides.length;\r\n    current.textContent = 1;\r\n    let slideIndex = 1;\r\n        const showSlides = (n) => {\r\n            if(n > slides.length) {\r\n                slideIndex = 1;\r\n            }\r\n            if(n < 1) {\r\n                slideIndex = slides.length;\r\n            }\r\n            slides.forEach(item => {\r\n                item.style.display = 'none';\r\n            });\r\n            slides[slideIndex - 1].style.display = 'flex';\r\n            current.textContent = slideIndex;\r\n        };\r\n    const plusSlides = (n) => {\r\n        showSlides(slideIndex += n);\r\n    };\r\n    prev.addEventListener('click', () => {\r\n        plusSlides(-1);\r\n    });\r\n    next.addEventListener('click', () => {\r\n        plusSlides(1);\r\n    });\r\n    window.addEventListener('resize', () => {\r\n        if(window.innerWidth < 576) {\r\n            slides.forEach(item => {\r\n                item.style.display = 'none';\r\n            });\r\n        }\r\n        if(window.innerWidth > 576 && window.innerWidth < 768) {\r\n            slides.forEach(item => {\r\n                item.style.display = 'flex';\r\n            });\r\n            current.textContent = slideIndex = 1;\r\n        }\r\n\r\n    }); \r\n};\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/problemsSlider.js?");

/***/ }),

/***/ "./src/js/modules/problemsSliderAdaptive.js":
/*!**************************************************!*\
  !*** ./src/js/modules/problemsSliderAdaptive.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"problemsSliderAdaptive\": function() { return /* binding */ problemsSliderAdaptive; }\n/* harmony export */ });\nconst problemsSliderAdaptive = () => {\r\n    const slides = document.querySelectorAll('.wrapper-problems-adaptive');\r\n    const prev = document.querySelector('.problems-arrow__prev-adaptive');\r\n    const next = document.querySelector('.problems-arrow__next-adaptive');\r\n    const total = document.querySelector('.problems-number__total-adaptive');\r\n    const current = document.querySelector('.problems-number__curr-adaptive');\r\n    total.textContent = slides.length;\r\n    current.textContent = 1;\r\n    let slideIndex = 1;\r\n        const showSlides = (n) => {\r\n            if(n > slides.length) {\r\n                slideIndex = 1;\r\n            }\r\n            if(n < 1) {\r\n                slideIndex = slides.length;\r\n            }\r\n            slides.forEach(item => {\r\n                item.style.display = 'none';\r\n            });\r\n            slides[slideIndex - 1].style.display = 'flex';\r\n            current.textContent = slideIndex;\r\n        };\r\n    const plusSlides = (n) => {\r\n        showSlides(slideIndex += n);\r\n    };\r\n    prev.addEventListener('click', () => {\r\n        plusSlides(-1);\r\n    });\r\n    next.addEventListener('click', () => {\r\n        plusSlides(1);\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/problemsSliderAdaptive.js?");

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": function() { return /* binding */ scroll; }\n/* harmony export */ });\nconst scroll = () => {\r\n    const wrapper = document.querySelector('.section-result__container');\r\n    const scroller = document.querySelector('.block-section-result');\r\n    const container = document.querySelector('.wrapper-result');\r\n};\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/scroll.js?");

/***/ }),

/***/ "./src/js/modules/stepsSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/stepsSlider.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stepsSlider\": function() { return /* binding */ stepsSlider; }\n/* harmony export */ });\nconst stepsSlider = () => {\r\n    const slides = document.querySelectorAll('.item-steps');\r\n    const prev = document.querySelector('.arrow-prev__button');\r\n    const next = document.querySelector('.arrow-next__button');\r\n    let slideIndex = 1;\r\n        const showSlides = (n) => {\r\n            if(n > slides.length) {\r\n                slideIndex = 1;\r\n            }\r\n            if(n < 1) {\r\n                slideIndex = slides.length;\r\n            }\r\n            slides.forEach(item => {\r\n                item.style.display = 'none';\r\n                item.classList.remove('active-card');\r\n            });\r\n            slides[slideIndex - 1].style.display = 'flex';\r\n            slides[slideIndex - 1].classList.add('active-card');\r\n        };\r\n    const plusSlides = (n) => {\r\n        showSlides(slideIndex += n);\r\n    };\r\n    prev.addEventListener('click', () => {\r\n        plusSlides(-1);\r\n    });\r\n    next.addEventListener('click', () => {\r\n        plusSlides(1);\r\n    });\r\n    window.addEventListener('resize', () => {\r\n        if(window.innerWidth > 576) {\r\n            slides.forEach(item => {\r\n                item.style.display = 'flex';\r\n            });\r\n        }\r\n        slideIndex = 1;\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/stepsSlider.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabs\": function() { return /* binding */ tabs; }\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabs = document.querySelectorAll('.tabs-steps__item');\r\n    const cardTabs = document.querySelectorAll('.item-steps');\r\n\r\n    if(window.innerWidth > 576 && window.innerWidth < 992) {\r\n        Array.from(cardTabs).reverse().forEach((tabCard, index) => {\r\n            tabCard.dataset.tab = index;\r\n        });\r\n            tabs.forEach((item, ind) => {\r\n                item.dataset.tab = ind;\r\n                item.addEventListener('click', (e) => {\r\n                    e.preventDefault();\r\n                    tabs.forEach(childItem => {\r\n                        childItem.classList.remove('active-tab');\r\n                    });\r\n                    Array.from(cardTabs).reverse().forEach((tabCard, index) => {\r\n                        tabCard.classList.remove('active-card');\r\n                        if(ind === index) {\r\n                            tabCard.classList.add('active-card');\r\n                        }\r\n                    });\r\n                    item.classList.add('active-tab');\r\n                });\r\n            });\r\n    }\r\n                    window.addEventListener('resize', () => {\r\n                    if(window.innerWidth < 576) {\r\n                        document.querySelectorAll('.tabs-steps__item')[5].click();\r\n                    }\r\n                });\r\n        const tab = document.querySelectorAll('.tabs-steps__item')[5].click();\r\n};\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/modules/topSlider.js":
/*!*************************************!*\
  !*** ./src/js/modules/topSlider.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"topSlider\": function() { return /* binding */ topSlider; }\n/* harmony export */ });\nconst topSlider = () => {\r\n    const slides = document.querySelectorAll('.item-result');\r\n    const prev = document.querySelector('.arrow-prev-top__button');\r\n    const next = document.querySelector('.arrow-next-top__button');\r\n    const total = document.querySelector('.result-number__total');\r\n    const current = document.querySelector('.result-number__curr');\r\n    let slideIndex = 1;\r\n    total.textContent = slides.length;\r\n    current.textContent = 1;\r\n\r\n        const showSlides = (n) => {\r\n            if(n > slides.length) {\r\n                slideIndex = 1;\r\n            }\r\n            if(n < 1) {\r\n                slideIndex = slides.length;\r\n            }\r\n            slides.forEach(item => {\r\n                item.style.display = 'none';\r\n            });\r\n            slides[slideIndex - 1].style.display = 'block';\r\n            current.textContent = slideIndex;\r\n        };\r\n    const plusSlides = (n) => {\r\n        showSlides(slideIndex += n);\r\n    };\r\n    prev.addEventListener('click', () => {\r\n        plusSlides(-1);\r\n    });\r\n    next.addEventListener('click', () => {\r\n        plusSlides(1);\r\n    });\r\n    window.addEventListener('resize', () => {\r\n        if(window.innerWidth > 375) {\r\n            slides.forEach(item => {\r\n                item.style.display = 'block';\r\n            });\r\n            current.textContent = slideIndex = 1;\r\n        }\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack://gulpStart/./src/js/modules/topSlider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;