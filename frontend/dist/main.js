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

  Object(_util__WEBPACK_IMPORTED_MODULE_0__["tweetStream"])(request()).then(function (response) {
    // while(response.length < request().queryNum) {
    //     tweetStream(request()).then(response => {console.log(response)})
    // }
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
    url: "/tweets",
    method: "GET",
    data: data
  });
}; // neeed to test this

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVyeV9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJ0d2VldFN0cmVhbSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInNlYXJjaCIsImdldEVsZW1lbnRCeUlkIiwidGl0bGUiLCJpbnNlcnRCZWZvcmUiLCJxdWVyeUZpZWxkIiwiZm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJxdWVyeUlucHV0Iiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInR5cGluZ1dvcmQiLCJhcHBlbmRDaGlsZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVUeXBpbmciLCJvcHRpb25zIiwic3RyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaSIsImN5Y2xlIiwic2V0SW50ZXJ2YWwiLCJyYW5kIiwic2xpY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJJbnB1dCIsImNsZWFySW50ZXJ2YWwiLCJ2YWx1ZSIsInJlcXVlc3QiLCJwYXJ0cyIsInNwbGl0Iiwib2JqIiwicXVlcnlTdHIiLCJxdWVyeU51bSIsInBhcnNlSW50IiwidGhlbiIsInJlc3BvbnNlIiwiZGVib3VuY2UiLCJkZWxheSIsImZuIiwidGltZXJJZCIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJkZWJvdW5jZWRUeXBpbmciLCJkYXRhIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7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LENBUVAscUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgeyB0d2VldFN0cmVhbSB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBxdWVyeUZpZWxkIGZyb20gXCIuL3F1ZXJ5X2ZpZWxkXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICB3aW5kb3cudHdlZXRTdHJlYW0gPSB0d2VldFN0cmVhbTtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgYW5kIHRoYXRcIilcblxuICAgIGNvbnN0IHByb3BzID0ge31cbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtMVwiKTtcbiAgICBzZWFyY2guaW5zZXJ0QmVmb3JlKHF1ZXJ5RmllbGQocHJvcHMpLCB0aXRsZSlcbn0pIiwiaW1wb3J0IHsgdHdlZXRTdHJlYW0gfSBmcm9tIFwiLi91dGlsXCJcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIFxuICAgIGNvbnN0IHF1ZXJ5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicXVlcnktZmllbGRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ6LWluZGV4XCIsIFwiMTAwXCIpO1xuXG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PntcbiAgICAgICAgdHlwaW5nV29yZChxdWVyeUlucHV0KTtcbiAgICB9LCAxMDAwKVxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocXVlcnlJbnB1dClcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgaGFuZGxlVHlwaW5nKGV2ZW50LCBwcm9wcywgcXVlcnlJbnB1dClcbiAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIGZvcm1cbiAgICApXG59XG5cbmNvbnN0IHR5cGluZ1dvcmQgPSAocXVlcnlJbnB1dCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIFwiTG9uZG9uLCAyNVwiLFxuICAgICAgICBcIkFudHMsIDUwXCIsXG4gICAgICAgIFwiQmVhcnMsIDMzXCIsXG4gICAgICAgIFwiQmVldHMsIDEwMFwiLFxuICAgICAgICBcIkNvbmdyZXNzLCAyMzBcIixcbiAgICAgICAgXCJCYW5hbmFzLCA0NVwiLFxuICAgICAgICBcIkNoZWVzZSwgNzdcIixcbiAgICAgICAgXCJUcnVtcCwgMTAwMFwiLFxuICAgICAgICBcIlBlbmd1aW5zLCAyMFwiLFxuICAgICAgICBcIlRoZSBzZW5hdGUsIDEwMFwiLFxuICAgICAgICBcIkdvb2dsZSwgMTIwXCIsXG4gICAgICAgIFwiU3BhY2UgVHJhdmVsLCA1MFwiLFxuICAgICAgICBcIlRlc2xhLCA0NVwiLFxuICAgICAgICBcIkJNVywgMTAwXCIsXG4gICAgICAgIFwiU3VwcmEsIDIwXCIsXG4gICAgICAgIFwiRG9ncywgMTAwXCJcbiAgICBdXG4gICAgY29uc3Qgc3RyID0gb3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aCldXG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY3ljbGUgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgaWYgKHJhbmQgPiAwLjMpIHtcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBzdHIuc2xpY2UoMCwgaSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPj0gc3RyLmxlbmd0aCl7XG4gICAgICAgICAgICBxdWVyeUlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBjbGVhcklucHV0KHF1ZXJ5SW5wdXQsIGN5Y2xlKSk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGN5Y2xlKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIilcbiAgICAgICAgICAgICAgICB0eXBpbmdXb3JkKHF1ZXJ5SW5wdXQpXG4gICAgICAgICAgICB9LCAxNTAwKVxuICAgICAgICB9XG4gICAgfSwgMjAwKVxuICAgIHF1ZXJ5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGNsZWFySW5wdXQocXVlcnlJbnB1dCwgY3ljbGUpKVxufVxuXG5jb25zdCBjbGVhcklucHV0ID0gKHF1ZXJ5SW5wdXQsIGN5Y2xlKSA9PiAoKSA9PiB7XG4gICAgY2xlYXJJbnRlcnZhbChjeWNsZSlcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiXCIpXG59XG5cbmNvbnN0IGhhbmRsZVR5cGluZyA9IChldmVudCxwcm9wcywgcXVlcnlJbnB1dCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc3QgY2hhcnQgPSBwcm9wcy5jaGFydFxuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgICAgICBjb25zdCBvYmogPSB7IHF1ZXJ5U3RyOiBwYXJ0c1swXSwgcXVlcnlOdW06IHBhcnNlSW50KHBhcnRzWzFdKSB9O1xuICAgICAgICByZXR1cm4gb2JqXG4gICAgfSBcblxuICAgIHR3ZWV0U3RyZWFtKHJlcXVlc3QoKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgLy8gd2hpbGUocmVzcG9uc2UubGVuZ3RoIDwgcmVxdWVzdCgpLnF1ZXJ5TnVtKSB7XG4gICAgICAgICAgICAvLyAgICAgdHdlZXRTdHJlYW0ocmVxdWVzdCgpKS50aGVuKHJlc3BvbnNlID0+IHtjb25zb2xlLmxvZyhyZXNwb25zZSl9KVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAvLyBjb25zdCBwYXlsb2FkID0ge31cbiAgICAgICAgICAgIC8vIHBheWxvYWQucXVlcnkgPSB2YWx1ZVxuICAgICAgICAgICAgLy8gcGF5bG9hZC5hcnRpY2xlcyA9IHJlc3BvbnNlLmFydGljbGVzXG4gICAgICAgICAgICAvLyByZXR1cm4gcGF5bG9hZFxuICAgICAgICB9KVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyAudGhlbihwYXlsb2FkID0+IHByb2Nlc3NEYXRhKHBheWxvYWQpKSBcbiAgICAgICAgLy8gLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgICAgLy8gICAgIGNoYXJ0LnJlbmRlcihwYXlsb2FkKVxuICAgICAgICAvLyB9KVxufVxuXG5cbi8vIFVzZSBmb3IgdGVzdGluZyBmdW5jdGlvbmFsaXR5LCBzb3VyY2VkIGZyb206IGh0dHBzOi8vY29kZWJ1cnN0LmlvL3Rocm90dGxpbmctYW5kLWRlYm91bmNpbmctaW4tamF2YXNjcmlwdC02NDZkMDc2ZDBhNDRcbmNvbnN0IGRlYm91bmNlID0gKGRlbGF5LCBmbikgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAodGltZXJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59XG5cbmNvbnN0IGRlYm91bmNlZFR5cGluZyA9IGRlYm91bmNlKDcwMCwgaGFuZGxlVHlwaW5nKTsiLCIvLyBuZWVkIHRvIGFkZCBhamF4IGNhbGxzIGhlcmUgdG8gZ3JhYiB0d2VldHMgZnJvbSB0aCBmcm9udCBlbmQgXG5cbmV4cG9ydCBjb25zdCB0d2VldFN0cmVhbSA9IChkYXRhKSA9PiAoXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBcIi90d2VldHNcIixcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbilcblxuLy8gbmVlZWQgdG8gdGVzdCB0aGlzXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=