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
  var props = {};
  var search = document.getElementById("search");
  var title = document.getElementById("title-1");
  search.insertBefore(Object(_query_field__WEBPACK_IMPORTED_MODULE_1__["default"])(props), title);
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
  var options = ["London, 25", "Ants, 50", "Bears, 33", "Beets, 100", "Congress, 230", "Bananas, 45", "Cheese, 77", "Trump, 1000", "Penguins, 20", "The senate, 100", "Google, 120", "Space Travel, 50", "Tesla, 45", "BMW, 100", "Supra, 20", "Dogs, 100"];
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

  var value = queryInput.value;

  var request = function request() {
    var parts = value.split(",");
    var obj = {
      queryStr: parts[0],
      queryNum: parseInt(parts[1])
    };
    return obj;
  };

  var tweets = [];
  var call = setInterval(function () {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["tweetStream"])(request()).then(function (response) {
      if (response.length > tweets.length) {
        tweets = response;
        console.log(tweets);
      }

      if (tweets.length >= request().queryNum) {
        clearInterval(call);
      }
    });
  }, 500);

  var stopCall = function stopCall() {
    if (tweets.length >= request().queryNum) {
      clearInterval(call);
    }
  };
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
    url: "/tweets",
    method: "GET",
    data: data
  });
}; // neeed to test this

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVyeV9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJ0d2VldFN0cmVhbSIsInByb3BzIiwic2VhcmNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aXRsZSIsImluc2VydEJlZm9yZSIsInF1ZXJ5RmllbGQiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5SW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwidHlwaW5nV29yZCIsImFwcGVuZENoaWxkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVR5cGluZyIsIm9wdGlvbnMiLCJzdHIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJpIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInJhbmQiLCJzbGljZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGVhcklucHV0IiwiY2xlYXJJbnRlcnZhbCIsInZhbHVlIiwicmVxdWVzdCIsInBhcnRzIiwic3BsaXQiLCJvYmoiLCJxdWVyeVN0ciIsInF1ZXJ5TnVtIiwicGFyc2VJbnQiLCJ0d2VldHMiLCJjYWxsIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0b3BDYWxsIiwiZGVib3VuY2UiLCJkZWxheSIsImZuIiwidGltZXJJZCIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJkZWJvdW5jZWRUeXBpbmciLCJkYXRhIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztR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QUFGLFNBQU1FLElBQU47QUFDQUQsYUFBTyxHQUFHLElBQVY7QUFDSCxLQUhtQixFQUdqQkYsS0FIaUIsQ0FBcEI7QUFJSCxHQVJEO0FBU0gsQ0FYRDs7QUFhQSxJQUFNSyxlQUFlLEdBQUdOLFFBQVEsQ0FBQyxHQUFELEVBQU05QixZQUFOLENBQWhDLEM7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUFBO0FBQUE7QUFFTyxJQUFNaEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ3FELElBQUQ7QUFBQSxTQUN2QkMsQ0FBQyxDQUFDQyxJQUFGLENBQU87QUFDSEMsT0FBRyxFQUFFLFNBREY7QUFFSEMsVUFBTSxFQUFFLEtBRkw7QUFHSEosUUFBSSxFQUFFQTtBQUhILEdBQVAsQ0FEdUI7QUFBQSxDQUFwQixDLENBUVAscUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgeyB0d2VldFN0cmVhbSB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBxdWVyeUZpZWxkIGZyb20gXCIuL3F1ZXJ5X2ZpZWxkXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICB3aW5kb3cudHdlZXRTdHJlYW0gPSB0d2VldFN0cmVhbTtcbiAgICBjb25zdCBwcm9wcyA9IHt9XG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLTFcIik7XG4gICAgc2VhcmNoLmluc2VydEJlZm9yZShxdWVyeUZpZWxkKHByb3BzKSwgdGl0bGUpXG59KSIsImltcG9ydCB7IHR3ZWV0U3RyZWFtIH0gZnJvbSBcIi4vdXRpbFwiXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBcbiAgICBjb25zdCBxdWVyeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInF1ZXJ5LWZpZWxkXCIpO1xuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwiei1pbmRleFwiLCBcIjEwMFwiKTtcblxuXG4gICAgc2V0VGltZW91dCggKCkgPT57XG4gICAgICAgIHR5cGluZ1dvcmQocXVlcnlJbnB1dCk7XG4gICAgfSwgMTAwMClcbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKHF1ZXJ5SW5wdXQpXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGhhbmRsZVR5cGluZyhldmVudCwgcHJvcHMsIHF1ZXJ5SW5wdXQpXG4gICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICBmb3JtXG4gICAgKVxufVxuXG5jb25zdCB0eXBpbmdXb3JkID0gKHF1ZXJ5SW5wdXQpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICBcIkxvbmRvbiwgMjVcIixcbiAgICAgICAgXCJBbnRzLCA1MFwiLFxuICAgICAgICBcIkJlYXJzLCAzM1wiLFxuICAgICAgICBcIkJlZXRzLCAxMDBcIixcbiAgICAgICAgXCJDb25ncmVzcywgMjMwXCIsXG4gICAgICAgIFwiQmFuYW5hcywgNDVcIixcbiAgICAgICAgXCJDaGVlc2UsIDc3XCIsXG4gICAgICAgIFwiVHJ1bXAsIDEwMDBcIixcbiAgICAgICAgXCJQZW5ndWlucywgMjBcIixcbiAgICAgICAgXCJUaGUgc2VuYXRlLCAxMDBcIixcbiAgICAgICAgXCJHb29nbGUsIDEyMFwiLFxuICAgICAgICBcIlNwYWNlIFRyYXZlbCwgNTBcIixcbiAgICAgICAgXCJUZXNsYSwgNDVcIixcbiAgICAgICAgXCJCTVcsIDEwMFwiLFxuICAgICAgICBcIlN1cHJhLCAyMFwiLFxuICAgICAgICBcIkRvZ3MsIDEwMFwiXG4gICAgXVxuICAgIGNvbnN0IHN0ciA9IG9wdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3B0aW9ucy5sZW5ndGgpXVxuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGN5Y2xlID0gc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIGlmIChyYW5kID4gMC4zKSB7XG4gICAgICAgICAgICBpKytcbiAgICAgICAgICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgc3RyLnNsaWNlKDAsIGkpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID49IHN0ci5sZW5ndGgpe1xuICAgICAgICAgICAgcXVlcnlJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgY2xlYXJJbnB1dChxdWVyeUlucHV0LCBjeWNsZSkpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjeWNsZSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgdHlwaW5nV29yZChxdWVyeUlucHV0KVxuICAgICAgICAgICAgfSwgMTUwMClcbiAgICAgICAgfVxuICAgIH0sIDIwMClcbiAgICBxdWVyeUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBjbGVhcklucHV0KHF1ZXJ5SW5wdXQsIGN5Y2xlKSlcbn1cblxuY29uc3QgY2xlYXJJbnB1dCA9IChxdWVyeUlucHV0LCBjeWNsZSkgPT4gKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwoY3ljbGUpXG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKVxufVxuXG5jb25zdCBoYW5kbGVUeXBpbmcgPSAoZXZlbnQscHJvcHMsIHF1ZXJ5SW5wdXQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnN0IGNoYXJ0ID0gcHJvcHMuY2hhcnRcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5SW5wdXQudmFsdWU7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgY29uc3Qgb2JqID0geyBxdWVyeVN0cjogcGFydHNbMF0sIHF1ZXJ5TnVtOiBwYXJzZUludChwYXJ0c1sxXSkgfTtcbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH0gXG4gICAgbGV0IHR3ZWV0cyA9IFtdO1xuICAgIGNvbnN0IGNhbGwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHR3ZWV0U3RyZWFtKHJlcXVlc3QoKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5sZW5ndGggPiB0d2VldHMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0d2VldHMgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0d2VldHMpOyBcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmICh0d2VldHMubGVuZ3RoID49IHJlcXVlc3QoKS5xdWVyeU51bSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNhbGwpXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0pICBcbiAgICAgICAgXG4gICAgfSwgNTAwKTtcblxuICAgIGNvbnN0IHN0b3BDYWxsID0gKCkgPT4ge1xuICAgICAgICBpZih0d2VldHMubGVuZ3RoID49IHJlcXVlc3QoKS5xdWVyeU51bSl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGNhbGwpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4vLyBVc2UgZm9yIHRlc3RpbmcgZnVuY3Rpb25hbGl0eSwgc291cmNlZCBmcm9tOiBodHRwczovL2NvZGVidXJzdC5pby90aHJvdHRsaW5nLWFuZC1kZWJvdW5jaW5nLWluLWphdmFzY3JpcHQtNjQ2ZDA3NmQwYTQ0XG5jb25zdCBkZWJvdW5jZSA9IChkZWxheSwgZm4pID0+IHtcbiAgICBsZXQgdGltZXJJZDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHRpbWVySWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgfVxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHRpbWVySWQgPSBudWxsO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxufVxuXG5jb25zdCBkZWJvdW5jZWRUeXBpbmcgPSBkZWJvdW5jZSg3MDAsIGhhbmRsZVR5cGluZyk7IiwiLy8gbmVlZCB0byBhZGQgYWpheCBjYWxscyBoZXJlIHRvIGdyYWIgdHdlZXRzIGZyb20gdGggZnJvbnQgZW5kIFxuXG5leHBvcnQgY29uc3QgdHdlZXRTdHJlYW0gPSAoZGF0YSkgPT4gKFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogXCIvdHdlZXRzXCIsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4pXG5cbi8vIG5lZWVkIHRvIHRlc3QgdGhpc1xuXG4iXSwic291cmNlUm9vdCI6IiJ9