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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _query_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query_field */ "./src/query_field.js");


document.addEventListener("DOMContentLoaded", function () {
  window.tweetStream = _util__WEBPACK_IMPORTED_MODULE_0__["tweetStream"];
  console.log("this and that");
  var props = {};
  var search = document.getElementById("search");
  var title2 = document.getElementById("title-2");
  search.insertBefore(Object(_query_field__WEBPACK_IMPORTED_MODULE_1__["default"])(props), title2);
});

/***/ }),

/***/ "./src/query_field.js":
/*!****************************!*\
  !*** ./src/query_field.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var form = document.createElement("form");
  var queryInput = document.createElement("input");
  queryInput.setAttribute("type", "text");
  queryInput.setAttribute("class", "query-field");
  queryInput.setAttribute("z-index", "100");
  setTimeout(function () {
    typingWord(queryInput);
  }, 1000);
  form.appendChild(queryInput);
  form.addEventListener("submit", function () {
    event.preventDefault();
    handleTyping(event, props, queryInput);
  });
  return form;
});

var typingWord = function typingWord(queryInput) {
  var options = ["London", "Ants", "Bears", "Beets", "Congress", "Bananas", "Cheese", "Trump", "Penguins", "The senate", "Google", "Space Travel", "Tesla", "BMW", "Supra", "Dogs"];
  var str = options[Math.floor(Math.random() * options.length)];
  var i = 0;
  var cycle = setInterval(function () {
    var rand = Math.random();

    if (rand > 0.3) {
      i++;
      queryInput.setAttribute("placeholder", str.slice(0, i));
    }

    if (i >= str.length) {
      queryInput.removeEventListener("focus", clearInput(queryInput, cycle));
      clearInterval(cycle);
      setTimeout(function () {
        queryInput.setAttribute("placeholder", "");
        typingWord(queryInput);
      }, 1500);
    }
  }, 200);
  queryInput.addEventListener("focus", clearInput(queryInput, cycle));
};

var clearInput = function clearInput(queryInput, cycle) {
  return function () {
    clearInterval(cycle);
    queryInput.setAttribute("placeholder", "");
  };
};

var handleTyping = function handleTyping(event, props, queryInput) {
  event.preventDefault(); // const chart = props.chart
  // const value = queryInput.value;

  Object(_util__WEBPACK_IMPORTED_MODULE_0__["tweetStream"])(value).then(function (response) {
    console.log(response); // const payload = {}
    // payload.query = value
    // payload.articles = response.articles
    // return payload
  }); // })
  // .then(payload => processData(payload)) 
  // .then((payload) => {
  //     chart.render(payload)
  // })
}; // Use for testing functionality, sourced from: https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44


var debounce = function debounce(delay, fn) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(function () {
      fn.apply(void 0, args);
      timerId = null;
    }, delay);
  };
};

var debouncedTyping = debounce(700, handleTyping);

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: tweetStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweetStream", function() { return tweetStream; });
// need to add ajax calls here to grab tweets from th front end 
var tweetStream = function tweetStream(data) {
  return $.ajax({
    url: "/",
    method: "GET",
    data: data
  });
}; // neeed to test this

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVyeV9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJ0d2VldFN0cmVhbSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInNlYXJjaCIsImdldEVsZW1lbnRCeUlkIiwidGl0bGUyIiwiaW5zZXJ0QmVmb3JlIiwicXVlc3J5RmllbGQiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5SW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwidHlwaW5nV29yZCIsImFwcGVuZENoaWxkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVR5cGluZyIsIm9wdGlvbnMiLCJzdHIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJpIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInJhbmQiLCJzbGljZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGVhcklucHV0IiwiY2xlYXJJbnRlcnZhbCIsInZhbHVlIiwidGhlbiIsInJlc3BvbnNlIiwiZGVib3VuY2UiLCJkZWxheSIsImZuIiwidGltZXJJZCIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJkZWJvdW5jZWRUeXBpbmciLCJkYXRhIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtR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LFFBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxFQUFSLEVBQWU7QUFDNUIsTUFBSUMsT0FBSjtBQUNBLFNBQU8sWUFBbUI7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQ3RCLFFBQUlELE9BQUosRUFBYTtBQUNURSxrQkFBWSxDQUFDRixPQUFELENBQVo7QUFDSDs7QUFDREEsV0FBTyxHQUFHMUIsVUFBVSxDQUFDLFlBQU07QUFDdkJ5QixRQUFFLE1BQUYsU0FBTUUsSUFBTjtBQUNBRCxhQUFPLEdBQUcsSUFBVjtBQUNILEtBSG1CLEVBR2pCRixLQUhpQixDQUFwQjtBQUlILEdBUkQ7QUFTSCxDQVhEOztBQWFBLElBQU1LLGVBQWUsR0FBR04sUUFBUSxDQUFDLEdBQUQsRUFBTWxCLFlBQU4sQ0FBaEMsQzs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQUE7QUFBQTtBQUVPLElBQU1sQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDMkMsSUFBRDtBQUFBLFNBQ3ZCQyxDQUFDLENBQUNDLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUUsR0FERjtBQUVIQyxVQUFNLEVBQUUsS0FGTDtBQUdISixRQUFJLEVBQUVBO0FBSEgsR0FBUCxDQUR1QjtBQUFBLENBQXBCLEMsQ0FRUCxxQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmltcG9ydCB7IHR3ZWV0U3RyZWFtIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHF1ZXNyeUZpZWxkIGZyb20gXCIuL3F1ZXJ5X2ZpZWxkXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHdpbmRvdy50d2VldFN0cmVhbSA9IHR3ZWV0U3RyZWFtO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBhbmQgdGhhdFwiKVxuICAgIGNvbnN0IHByb3BzID0ge31cbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbiAgICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLTJcIik7XG5cbiAgICBzZWFyY2guaW5zZXJ0QmVmb3JlKHF1ZXNyeUZpZWxkKHByb3BzKSwgdGl0bGUyKVxufSkiLCJpbXBvcnQgeyB0d2VldFN0cmVhbSB9IGZyb20gXCIuL3V0aWxcIlxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgcXVlcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJxdWVyeS1maWVsZFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInotaW5kZXhcIiwgXCIxMDBcIik7XG5cblxuICAgIHNldFRpbWVvdXQoICgpID0+e1xuICAgICAgICB0eXBpbmdXb3JkKHF1ZXJ5SW5wdXQpO1xuICAgIH0sIDEwMDApXG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChxdWVyeUlucHV0KVxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBoYW5kbGVUeXBpbmcoZXZlbnQsIHByb3BzLCBxdWVyeUlucHV0KVxuICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgZm9ybVxuICAgIClcbn1cblxuY29uc3QgdHlwaW5nV29yZCA9IChxdWVyeUlucHV0KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgXCJMb25kb25cIixcbiAgICAgICAgXCJBbnRzXCIsXG4gICAgICAgIFwiQmVhcnNcIixcbiAgICAgICAgXCJCZWV0c1wiLFxuICAgICAgICBcIkNvbmdyZXNzXCIsXG4gICAgICAgIFwiQmFuYW5hc1wiLFxuICAgICAgICBcIkNoZWVzZVwiLFxuICAgICAgICBcIlRydW1wXCIsXG4gICAgICAgIFwiUGVuZ3VpbnNcIixcbiAgICAgICAgXCJUaGUgc2VuYXRlXCIsXG4gICAgICAgIFwiR29vZ2xlXCIsXG4gICAgICAgIFwiU3BhY2UgVHJhdmVsXCIsXG4gICAgICAgIFwiVGVzbGFcIixcbiAgICAgICAgXCJCTVdcIixcbiAgICAgICAgXCJTdXByYVwiLFxuICAgICAgICBcIkRvZ3NcIlxuICAgIF1cbiAgICBjb25zdCBzdHIgPSBvcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wdGlvbnMubGVuZ3RoKV1cbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBjeWNsZSA9IHNldEludGVydmFsKCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5yYW5kb20oKVxuICAgICAgICBpZiAocmFuZCA+IDAuMykge1xuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHN0ci5zbGljZSgwLCBpKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA+PSBzdHIubGVuZ3RoKXtcbiAgICAgICAgICAgIHF1ZXJ5SW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGNsZWFySW5wdXQocXVlcnlJbnB1dCwgY3ljbGUpKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY3ljbGUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKVxuICAgICAgICAgICAgICAgIHR5cGluZ1dvcmQocXVlcnlJbnB1dClcbiAgICAgICAgICAgIH0sIDE1MDApXG4gICAgICAgIH1cbiAgICB9LCAyMDApXG4gICAgcXVlcnlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgY2xlYXJJbnB1dChxdWVyeUlucHV0LCBjeWNsZSkpXG59XG5cbmNvbnN0IGNsZWFySW5wdXQgPSAocXVlcnlJbnB1dCwgY3ljbGUpID0+ICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGN5Y2xlKVxuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIilcbn1cblxuY29uc3QgaGFuZGxlVHlwaW5nID0gKGV2ZW50LHByb3BzLCBxdWVyeUlucHV0KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zdCBjaGFydCA9IHByb3BzLmNoYXJ0XG4gICAgLy8gY29uc3QgdmFsdWUgPSBxdWVyeUlucHV0LnZhbHVlO1xuXG4gICAgdHdlZXRTdHJlYW0odmFsdWUpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgLy8gY29uc3QgcGF5bG9hZCA9IHt9XG4gICAgICAgICAgICAvLyBwYXlsb2FkLnF1ZXJ5ID0gdmFsdWVcbiAgICAgICAgICAgIC8vIHBheWxvYWQuYXJ0aWNsZXMgPSByZXNwb25zZS5hcnRpY2xlc1xuICAgICAgICAgICAgLy8gcmV0dXJuIHBheWxvYWRcbiAgICAgICAgfSlcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gLnRoZW4ocGF5bG9hZCA9PiBwcm9jZXNzRGF0YShwYXlsb2FkKSkgXG4gICAgICAgIC8vIC50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgICAgIC8vICAgICBjaGFydC5yZW5kZXIocGF5bG9hZClcbiAgICAgICAgLy8gfSlcbn1cblxuXG4vLyBVc2UgZm9yIHRlc3RpbmcgZnVuY3Rpb25hbGl0eSwgc291cmNlZCBmcm9tOiBodHRwczovL2NvZGVidXJzdC5pby90aHJvdHRsaW5nLWFuZC1kZWJvdW5jaW5nLWluLWphdmFzY3JpcHQtNjQ2ZDA3NmQwYTQ0XG5jb25zdCBkZWJvdW5jZSA9IChkZWxheSwgZm4pID0+IHtcbiAgICBsZXQgdGltZXJJZDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHRpbWVySWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgfVxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHRpbWVySWQgPSBudWxsO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxufVxuXG5jb25zdCBkZWJvdW5jZWRUeXBpbmcgPSBkZWJvdW5jZSg3MDAsIGhhbmRsZVR5cGluZyk7IiwiLy8gbmVlZCB0byBhZGQgYWpheCBjYWxscyBoZXJlIHRvIGdyYWIgdHdlZXRzIGZyb20gdGggZnJvbnQgZW5kIFxuXG5leHBvcnQgY29uc3QgdHdlZXRTdHJlYW0gPSAoZGF0YSkgPT4gKFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogXCIvXCIsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4pXG5cbi8vIG5lZWVkIHRvIHRlc3QgdGhpc1xuXG4iXSwic291cmNlUm9vdCI6IiJ9