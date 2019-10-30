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
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }


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
  event.preventDefault();
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
        tweets = response.slice(0, request().queryNum);
        console.log(tweets);

        for (var i = 0; i < tweets.length; i++) {
          totalSent += (_readOnlyError("totalSent"), tweets.tesxt.sentimentScore);
          console.log(totalSent / i + 1);
        }
      }

      if (tweets.length >= request().queryNum) {
        clearInterval(call);
      }
    });
  }, 500);
  var totalSent = 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVyeV9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJ0d2VldFN0cmVhbSIsInByb3BzIiwic2VhcmNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aXRsZSIsImluc2VydEJlZm9yZSIsInF1ZXJ5RmllbGQiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5SW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwidHlwaW5nV29yZCIsImFwcGVuZENoaWxkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVR5cGluZyIsIm9wdGlvbnMiLCJzdHIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJpIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInJhbmQiLCJzbGljZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGVhcklucHV0IiwiY2xlYXJJbnRlcnZhbCIsInZhbHVlIiwicmVxdWVzdCIsInBhcnRzIiwic3BsaXQiLCJvYmoiLCJxdWVyeVN0ciIsInF1ZXJ5TnVtIiwicGFyc2VJbnQiLCJ0d2VldHMiLCJjYWxsIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInRvdGFsU2VudCIsInRlc3h0Iiwic2VudGltZW50U2NvcmUiLCJzdG9wQ2FsbCIsImRlYm91bmNlIiwiZGVsYXkiLCJmbiIsInRpbWVySWQiLCJhcmdzIiwiY2xlYXJUaW1lb3V0IiwiZGVib3VuY2VkVHlwaW5nIiwiZGF0YSIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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LFFBQTlCLEVBQXVDO0FBQ25DUCxtQkFBYSxDQUFDVSxJQUFELENBQWI7QUFDSDtBQUNKLEdBSkQ7QUFNSCxDQXJDRCxDLENBd0NBOzs7QUFDQSxJQUFNUyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVFDLEVBQVIsRUFBZTtBQUM1QixNQUFJQyxPQUFKO0FBQ0EsU0FBTyxZQUFtQjtBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDdEIsUUFBSUQsT0FBSixFQUFhO0FBQ1RFLGtCQUFZLENBQUNGLE9BQUQsQ0FBWjtBQUNIOztBQUNEQSxXQUFPLEdBQUd6QyxVQUFVLENBQUMsWUFBTTtBQUN2QndDLFFBQUUsTUFBRixTQUFNRSxJQUFOO0FBQ0FELGFBQU8sR0FBRyxJQUFWO0FBQ0gsS0FIbUIsRUFHakJGLEtBSGlCLENBQXBCO0FBSUgsR0FSRDtBQVNILENBWEQ7O0FBYUEsSUFBTUssZUFBZSxHQUFHTixRQUFRLENBQUMsR0FBRCxFQUFNakMsWUFBTixDQUFoQyxDOzs7Ozs7Ozs7Ozs7QUM5SEE7QUFBQTtBQUFBO0FBRU8sSUFBTWhCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUN3RCxJQUFEO0FBQUEsU0FDdkJDLENBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRSxTQURGO0FBRUhDLFVBQU0sRUFBRSxLQUZMO0FBR0hKLFFBQUksRUFBRUE7QUFISCxHQUFQLENBRHVCO0FBQUEsQ0FBcEIsQyxDQVFQLHFCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuaW1wb3J0IHsgdHdlZXRTdHJlYW0gfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgcXVlcnlGaWVsZCBmcm9tIFwiLi9xdWVyeV9maWVsZFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgd2luZG93LnR3ZWV0U3RyZWFtID0gdHdlZXRTdHJlYW07XG4gICAgY29uc3QgcHJvcHMgPSB7fVxuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS0xXCIpO1xuICAgIHNlYXJjaC5pbnNlcnRCZWZvcmUocXVlcnlGaWVsZChwcm9wcyksIHRpdGxlKVxufSkiLCJpbXBvcnQgeyB0d2VldFN0cmVhbSB9IGZyb20gXCIuL3V0aWxcIlxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgcXVlcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJxdWVyeS1maWVsZFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInotaW5kZXhcIiwgXCIxMDBcIik7XG5cblxuICAgIHNldFRpbWVvdXQoICgpID0+e1xuICAgICAgICB0eXBpbmdXb3JkKHF1ZXJ5SW5wdXQpO1xuICAgIH0sIDEwMDApXG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChxdWVyeUlucHV0KVxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBoYW5kbGVUeXBpbmcoZXZlbnQsIHByb3BzLCBxdWVyeUlucHV0KVxuICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgZm9ybVxuICAgIClcbn1cblxuY29uc3QgdHlwaW5nV29yZCA9IChxdWVyeUlucHV0KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgXCJMb25kb24sIDI1XCIsXG4gICAgICAgIFwiQW50cywgNTBcIixcbiAgICAgICAgXCJCZWFycywgMzNcIixcbiAgICAgICAgXCJCZWV0cywgMTAwXCIsXG4gICAgICAgIFwiQ29uZ3Jlc3MsIDIzMFwiLFxuICAgICAgICBcIkJhbmFuYXMsIDQ1XCIsXG4gICAgICAgIFwiQ2hlZXNlLCA3N1wiLFxuICAgICAgICBcIlRydW1wLCAxMDAwXCIsXG4gICAgICAgIFwiUGVuZ3VpbnMsIDIwXCIsXG4gICAgICAgIFwiVGhlIHNlbmF0ZSwgMTAwXCIsXG4gICAgICAgIFwiR29vZ2xlLCAxMjBcIixcbiAgICAgICAgXCJTcGFjZSBUcmF2ZWwsIDUwXCIsXG4gICAgICAgIFwiVGVzbGEsIDQ1XCIsXG4gICAgICAgIFwiQk1XLCAxMDBcIixcbiAgICAgICAgXCJTdXByYSwgMjBcIixcbiAgICAgICAgXCJEb2dzLCAxMDBcIlxuICAgIF1cbiAgICBjb25zdCBzdHIgPSBvcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wdGlvbnMubGVuZ3RoKV1cbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBjeWNsZSA9IHNldEludGVydmFsKCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5yYW5kb20oKVxuICAgICAgICBpZiAocmFuZCA+IDAuMykge1xuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHN0ci5zbGljZSgwLCBpKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA+PSBzdHIubGVuZ3RoKXtcbiAgICAgICAgICAgIHF1ZXJ5SW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGNsZWFySW5wdXQocXVlcnlJbnB1dCwgY3ljbGUpKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY3ljbGUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKVxuICAgICAgICAgICAgICAgIHR5cGluZ1dvcmQocXVlcnlJbnB1dClcbiAgICAgICAgICAgIH0sIDE1MDApXG4gICAgICAgIH1cbiAgICB9LCAyMDApXG4gICAgcXVlcnlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgY2xlYXJJbnB1dChxdWVyeUlucHV0LCBjeWNsZSkpXG59XG5cbmNvbnN0IGNsZWFySW5wdXQgPSAocXVlcnlJbnB1dCwgY3ljbGUpID0+ICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGN5Y2xlKVxuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIilcbn1cblxuY29uc3QgaGFuZGxlVHlwaW5nID0gKGV2ZW50LHByb3BzLCBxdWVyeUlucHV0KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5SW5wdXQudmFsdWU7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgY29uc3Qgb2JqID0geyBxdWVyeVN0cjogcGFydHNbMF0sIHF1ZXJ5TnVtOiBwYXJzZUludChwYXJ0c1sxXSkgfTtcbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH0gXG5cblxuICAgIGxldCB0d2VldHMgPSBbXTtcbiAgICBjb25zdCBjYWxsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0d2VldFN0cmVhbShyZXF1ZXN0KCkpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UubGVuZ3RoID4gdHdlZXRzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWV0cyA9IHJlc3BvbnNlLnNsaWNlKDAsIHJlcXVlc3QoKS5xdWVyeU51bSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR3ZWV0cyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPHR3ZWV0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFNlbnQgKz0gdHdlZXRzLnRlc3h0LnNlbnRpbWVudFNjb3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG90YWxTZW50IC8gaSArIDEpOyAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmICh0d2VldHMubGVuZ3RoID49IHJlcXVlc3QoKS5xdWVyeU51bSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNhbGwpXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0pICAgXG4gICAgfSwgNTAwKTtcblxuICAgIGNvbnN0IHRvdGFsU2VudCA9IDA7XG5cbiAgICBjb25zdCBzdG9wQ2FsbCA9ICgpID0+IHtcbiAgICAgICAgaWYodHdlZXRzLmxlbmd0aCA+PSByZXF1ZXN0KCkucXVlcnlOdW0pe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjYWxsKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5cbi8vIFVzZSBmb3IgdGVzdGluZyBmdW5jdGlvbmFsaXR5LCBzb3VyY2VkIGZyb206IGh0dHBzOi8vY29kZWJ1cnN0LmlvL3Rocm90dGxpbmctYW5kLWRlYm91bmNpbmctaW4tamF2YXNjcmlwdC02NDZkMDc2ZDBhNDRcbmNvbnN0IGRlYm91bmNlID0gKGRlbGF5LCBmbikgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAodGltZXJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59XG5cbmNvbnN0IGRlYm91bmNlZFR5cGluZyA9IGRlYm91bmNlKDcwMCwgaGFuZGxlVHlwaW5nKTsiLCIvLyBuZWVkIHRvIGFkZCBhamF4IGNhbGxzIGhlcmUgdG8gZ3JhYiB0d2VldHMgZnJvbSB0aCBmcm9udCBlbmQgXG5cbmV4cG9ydCBjb25zdCB0d2VldFN0cmVhbSA9IChkYXRhKSA9PiAoXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBcIi90d2VldHNcIixcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbilcblxuLy8gbmVlZWQgdG8gdGVzdCB0aGlzXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=