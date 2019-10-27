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
      tweets = response; // console.log(response); 

      console.log(tweets);
    });

    if (tweets.length >= request().queryNum) {
      clearInterval(call);
    }
  }, 200); // setInterval(() => {
  //     console.log(tweets) 
  // }, 500);

  var stopCall = function stopCall() {
    // console.log(tweets);
    if (tweets.length >= request().queryNum) {
      clearInterval(call);
    }
  }; // tweetStream(request())
  //     .then(response => {
  //         // while(response.length < request().queryNum) {
  //         //     tweetStream(request()).then(response => {console.log(response)})
  //         // }
  //         console.log(response)
  //         // const payload = {}
  //         // payload.query = value
  //         // payload.articles = response.articles
  //         // return payload
  //     })
  //     // })
  //     // .then(payload => processData(payload)) 
  //     // .then((payload) => {
  //     //     chart.render(payload)
  //     // })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVyeV9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJ0d2VldFN0cmVhbSIsInByb3BzIiwic2VhcmNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aXRsZSIsImluc2VydEJlZm9yZSIsInF1ZXJ5RmllbGQiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5SW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwidHlwaW5nV29yZCIsImFwcGVuZENoaWxkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVR5cGluZyIsIm9wdGlvbnMiLCJzdHIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJpIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInJhbmQiLCJzbGljZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGVhcklucHV0IiwiY2xlYXJJbnRlcnZhbCIsInZhbHVlIiwicmVxdWVzdCIsInBhcnRzIiwic3BsaXQiLCJvYmoiLCJxdWVyeVN0ciIsInF1ZXJ5TnVtIiwicGFyc2VJbnQiLCJ0d2VldHMiLCJjYWxsIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0b3BDYWxsIiwiZGVib3VuY2UiLCJkZWxheSIsImZuIiwidGltZXJJZCIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJkZWJvdW5jZWRUeXBpbmciLCJkYXRhIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hEQyxRQUFNLENBQUNDLFdBQVAsR0FBcUJBLGlEQUFyQjtBQUNBLE1BQU1DLEtBQUssR0FBRyxFQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHTCxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLE1BQU1DLEtBQUssR0FBR1AsUUFBUSxDQUFDTSxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDQUQsUUFBTSxDQUFDRyxZQUFQLENBQW9CQyw0REFBVSxDQUFDTCxLQUFELENBQTlCLEVBQXVDRyxLQUF2QztBQUNILENBTkQsRTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBRWUseUVBQUNILEtBQUQsRUFBVztBQUN0QixNQUFNTSxJQUFJLEdBQUdWLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBRUEsTUFBTUMsVUFBVSxHQUFHWixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbkI7QUFDQUMsWUFBVSxDQUFDQyxZQUFYLENBQXdCLE1BQXhCLEVBQWdDLE1BQWhDO0FBQ0FELFlBQVUsQ0FBQ0MsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxhQUFqQztBQUNBRCxZQUFVLENBQUNDLFlBQVgsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBbkM7QUFHQUMsWUFBVSxDQUFFLFlBQUs7QUFDYkMsY0FBVSxDQUFDSCxVQUFELENBQVY7QUFDSCxHQUZTLEVBRVAsSUFGTyxDQUFWO0FBSUFGLE1BQUksQ0FBQ00sV0FBTCxDQUFpQkosVUFBakI7QUFDQUYsTUFBSSxDQUFDVCxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxZQUFNO0FBQ2xDZ0IsU0FBSyxDQUFDQyxjQUFOO0FBRUFDLGdCQUFZLENBQUNGLEtBQUQsRUFBUWIsS0FBUixFQUFlUSxVQUFmLENBQVo7QUFDSCxHQUpEO0FBTUEsU0FDSUYsSUFESjtBQUdILENBdkJEOztBQXlCQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDSCxVQUFELEVBQWdCO0FBQy9CLE1BQU1RLE9BQU8sR0FBRyxDQUNaLFlBRFksRUFFWixVQUZZLEVBR1osV0FIWSxFQUlaLFlBSlksRUFLWixlQUxZLEVBTVosYUFOWSxFQU9aLFlBUFksRUFRWixhQVJZLEVBU1osY0FUWSxFQVVaLGlCQVZZLEVBV1osYUFYWSxFQVlaLGtCQVpZLEVBYVosV0FiWSxFQWNaLFVBZFksRUFlWixXQWZZLEVBZ0JaLFdBaEJZLENBQWhCO0FBa0JBLE1BQU1DLEdBQUcsR0FBR0QsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixPQUFPLENBQUNLLE1BQW5DLENBQUQsQ0FBbkI7QUFDQSxNQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUVBLE1BQU1DLEtBQUssR0FBR0MsV0FBVyxDQUFFLFlBQVU7QUFDakMsUUFBTUMsSUFBSSxHQUFHUCxJQUFJLENBQUNFLE1BQUwsRUFBYjs7QUFDQSxRQUFJSyxJQUFJLEdBQUcsR0FBWCxFQUFnQjtBQUNaSCxPQUFDO0FBQ0RkLGdCQUFVLENBQUNDLFlBQVgsQ0FBd0IsYUFBeEIsRUFBdUNRLEdBQUcsQ0FBQ1MsS0FBSixDQUFVLENBQVYsRUFBYUosQ0FBYixDQUF2QztBQUNIOztBQUNELFFBQUlBLENBQUMsSUFBSUwsR0FBRyxDQUFDSSxNQUFiLEVBQW9CO0FBQ2hCYixnQkFBVSxDQUFDbUIsbUJBQVgsQ0FBK0IsT0FBL0IsRUFBd0NDLFVBQVUsQ0FBQ3BCLFVBQUQsRUFBYWUsS0FBYixDQUFsRDtBQUNBTSxtQkFBYSxDQUFDTixLQUFELENBQWI7QUFDQWIsZ0JBQVUsQ0FBQyxZQUFJO0FBQ1hGLGtCQUFVLENBQUNDLFlBQVgsQ0FBd0IsYUFBeEIsRUFBdUMsRUFBdkM7QUFDQUUsa0JBQVUsQ0FBQ0gsVUFBRCxDQUFWO0FBQ0gsT0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlIO0FBQ0osR0Fkd0IsRUFjdEIsR0Fkc0IsQ0FBekI7QUFlQUEsWUFBVSxDQUFDWCxnQkFBWCxDQUE0QixPQUE1QixFQUFxQytCLFVBQVUsQ0FBQ3BCLFVBQUQsRUFBYWUsS0FBYixDQUEvQztBQUNILENBdENEOztBQXdDQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDcEIsVUFBRCxFQUFhZSxLQUFiO0FBQUEsU0FBdUIsWUFBTTtBQUM1Q00saUJBQWEsQ0FBQ04sS0FBRCxDQUFiO0FBQ0FmLGNBQVUsQ0FBQ0MsWUFBWCxDQUF3QixhQUF4QixFQUF1QyxFQUF2QztBQUNILEdBSGtCO0FBQUEsQ0FBbkI7O0FBS0EsSUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0YsS0FBRCxFQUFPYixLQUFQLEVBQWNRLFVBQWQsRUFBNkI7QUFDOUNLLE9BQUssQ0FBQ0MsY0FBTixHQUQ4QyxDQUU5Qzs7QUFDQSxNQUFNZ0IsS0FBSyxHQUFHdEIsVUFBVSxDQUFDc0IsS0FBekI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixRQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixDQUFZLEdBQVosQ0FBZDtBQUNBLFFBQU1DLEdBQUcsR0FBRztBQUFFQyxjQUFRLEVBQUVILEtBQUssQ0FBQyxDQUFELENBQWpCO0FBQXNCSSxjQUFRLEVBQUVDLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDLENBQUQsQ0FBTjtBQUF4QyxLQUFaO0FBQ0EsV0FBT0UsR0FBUDtBQUNILEdBSkQ7O0FBS0EsTUFBSUksTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUdmLFdBQVcsQ0FBQyxZQUFNO0FBQzNCekIsNkRBQVcsQ0FBQ2dDLE9BQU8sRUFBUixDQUFYLENBQ0tTLElBREwsQ0FDVSxVQUFBQyxRQUFRLEVBQUk7QUFDZEgsWUFBTSxHQUFHRyxRQUFULENBRGMsQ0FFZDs7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7QUFDSCxLQUxMOztBQU1BLFFBQUlBLE1BQU0sQ0FBQ2pCLE1BQVAsSUFBaUJVLE9BQU8sR0FBR0ssUUFBL0IsRUFBeUM7QUFDckNQLG1CQUFhLENBQUNVLElBQUQsQ0FBYjtBQUNIO0FBQ0osR0FWdUIsRUFVckIsR0FWcUIsQ0FBeEIsQ0FYOEMsQ0FzQjlDO0FBQ0E7QUFDQTs7QUFFQSxNQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CO0FBQ0EsUUFBR04sTUFBTSxDQUFDakIsTUFBUCxJQUFpQlUsT0FBTyxHQUFHSyxRQUE5QixFQUF1QztBQUNuQ1AsbUJBQWEsQ0FBQ1UsSUFBRCxDQUFiO0FBQ0g7QUFDSixHQUxELENBMUI4QyxDQWlDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0gsQ0FqREQsQyxDQW9EQTs7O0FBQ0EsSUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxFQUFSLEVBQWU7QUFDNUIsTUFBSUMsT0FBSjtBQUNBLFNBQU8sWUFBbUI7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQ3RCLFFBQUlELE9BQUosRUFBYTtBQUNURSxrQkFBWSxDQUFDRixPQUFELENBQVo7QUFDSDs7QUFDREEsV0FBTyxHQUFHdEMsVUFBVSxDQUFDLFlBQU07QUFDdkJxQyxRQUFFLE1BQUYsU0FBTUUsSUFBTjtBQUNBRCxhQUFPLEdBQUcsSUFBVjtBQUNILEtBSG1CLEVBR2pCRixLQUhpQixDQUFwQjtBQUlILEdBUkQ7QUFTSCxDQVhEOztBQWFBLElBQU1LLGVBQWUsR0FBR04sUUFBUSxDQUFDLEdBQUQsRUFBTTlCLFlBQU4sQ0FBaEMsQzs7Ozs7Ozs7Ozs7O0FDMUlBO0FBQUE7QUFBQTtBQUVPLElBQU1oQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDcUQsSUFBRDtBQUFBLFNBQ3ZCQyxDQUFDLENBQUNDLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUUsU0FERjtBQUVIQyxVQUFNLEVBQUUsS0FGTDtBQUdISixRQUFJLEVBQUVBO0FBSEgsR0FBUCxDQUR1QjtBQUFBLENBQXBCLEMsQ0FRUCxxQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmltcG9ydCB7IHR3ZWV0U3RyZWFtIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHF1ZXJ5RmllbGQgZnJvbSBcIi4vcXVlcnlfZmllbGRcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHdpbmRvdy50d2VldFN0cmVhbSA9IHR3ZWV0U3RyZWFtO1xuICAgIGNvbnN0IHByb3BzID0ge31cbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtMVwiKTtcbiAgICBzZWFyY2guaW5zZXJ0QmVmb3JlKHF1ZXJ5RmllbGQocHJvcHMpLCB0aXRsZSlcbn0pIiwiaW1wb3J0IHsgdHdlZXRTdHJlYW0gfSBmcm9tIFwiLi91dGlsXCJcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIFxuICAgIGNvbnN0IHF1ZXJ5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicXVlcnktZmllbGRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ6LWluZGV4XCIsIFwiMTAwXCIpO1xuXG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PntcbiAgICAgICAgdHlwaW5nV29yZChxdWVyeUlucHV0KTtcbiAgICB9LCAxMDAwKVxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocXVlcnlJbnB1dClcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgaGFuZGxlVHlwaW5nKGV2ZW50LCBwcm9wcywgcXVlcnlJbnB1dClcbiAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIGZvcm1cbiAgICApXG59XG5cbmNvbnN0IHR5cGluZ1dvcmQgPSAocXVlcnlJbnB1dCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIFwiTG9uZG9uLCAyNVwiLFxuICAgICAgICBcIkFudHMsIDUwXCIsXG4gICAgICAgIFwiQmVhcnMsIDMzXCIsXG4gICAgICAgIFwiQmVldHMsIDEwMFwiLFxuICAgICAgICBcIkNvbmdyZXNzLCAyMzBcIixcbiAgICAgICAgXCJCYW5hbmFzLCA0NVwiLFxuICAgICAgICBcIkNoZWVzZSwgNzdcIixcbiAgICAgICAgXCJUcnVtcCwgMTAwMFwiLFxuICAgICAgICBcIlBlbmd1aW5zLCAyMFwiLFxuICAgICAgICBcIlRoZSBzZW5hdGUsIDEwMFwiLFxuICAgICAgICBcIkdvb2dsZSwgMTIwXCIsXG4gICAgICAgIFwiU3BhY2UgVHJhdmVsLCA1MFwiLFxuICAgICAgICBcIlRlc2xhLCA0NVwiLFxuICAgICAgICBcIkJNVywgMTAwXCIsXG4gICAgICAgIFwiU3VwcmEsIDIwXCIsXG4gICAgICAgIFwiRG9ncywgMTAwXCJcbiAgICBdXG4gICAgY29uc3Qgc3RyID0gb3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aCldXG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY3ljbGUgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgaWYgKHJhbmQgPiAwLjMpIHtcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBzdHIuc2xpY2UoMCwgaSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPj0gc3RyLmxlbmd0aCl7XG4gICAgICAgICAgICBxdWVyeUlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBjbGVhcklucHV0KHF1ZXJ5SW5wdXQsIGN5Y2xlKSk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGN5Y2xlKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIilcbiAgICAgICAgICAgICAgICB0eXBpbmdXb3JkKHF1ZXJ5SW5wdXQpXG4gICAgICAgICAgICB9LCAxNTAwKVxuICAgICAgICB9XG4gICAgfSwgMjAwKVxuICAgIHF1ZXJ5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGNsZWFySW5wdXQocXVlcnlJbnB1dCwgY3ljbGUpKVxufVxuXG5jb25zdCBjbGVhcklucHV0ID0gKHF1ZXJ5SW5wdXQsIGN5Y2xlKSA9PiAoKSA9PiB7XG4gICAgY2xlYXJJbnRlcnZhbChjeWNsZSlcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiXCIpXG59XG5cbmNvbnN0IGhhbmRsZVR5cGluZyA9IChldmVudCxwcm9wcywgcXVlcnlJbnB1dCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc3QgY2hhcnQgPSBwcm9wcy5jaGFydFxuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgICAgICBjb25zdCBvYmogPSB7IHF1ZXJ5U3RyOiBwYXJ0c1swXSwgcXVlcnlOdW06IHBhcnNlSW50KHBhcnRzWzFdKSB9O1xuICAgICAgICByZXR1cm4gb2JqXG4gICAgfSBcbiAgICBsZXQgdHdlZXRzID0gW107XG4gICAgY29uc3QgY2FsbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdHdlZXRTdHJlYW0ocmVxdWVzdCgpKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHR3ZWV0cyA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTsgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codHdlZXRzKTsgIFxuICAgICAgICAgICAgfSkgIFxuICAgICAgICBpZiAodHdlZXRzLmxlbmd0aCA+PSByZXF1ZXN0KCkucXVlcnlOdW0pIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2FsbClcbiAgICAgICAgfSBcbiAgICB9LCAyMDApO1xuICAgIC8vIHNldEludGVydmFsKCgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2codHdlZXRzKSBcbiAgICAvLyB9LCA1MDApO1xuXG4gICAgY29uc3Qgc3RvcENhbGwgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHR3ZWV0cyk7XG4gICAgICAgIGlmKHR3ZWV0cy5sZW5ndGggPj0gcmVxdWVzdCgpLnF1ZXJ5TnVtKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2FsbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHR3ZWV0U3RyZWFtKHJlcXVlc3QoKSlcbiAgICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIC8vICAgICAgICAgLy8gd2hpbGUocmVzcG9uc2UubGVuZ3RoIDwgcmVxdWVzdCgpLnF1ZXJ5TnVtKSB7XG4gICAgLy8gICAgICAgICAvLyAgICAgdHdlZXRTdHJlYW0ocmVxdWVzdCgpKS50aGVuKHJlc3BvbnNlID0+IHtjb25zb2xlLmxvZyhyZXNwb25zZSl9KVxuICAgIC8vICAgICAgICAgLy8gfVxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgLy8gICAgICAgICAvLyBjb25zdCBwYXlsb2FkID0ge31cbiAgICAvLyAgICAgICAgIC8vIHBheWxvYWQucXVlcnkgPSB2YWx1ZVxuICAgIC8vICAgICAgICAgLy8gcGF5bG9hZC5hcnRpY2xlcyA9IHJlc3BvbnNlLmFydGljbGVzXG4gICAgLy8gICAgICAgICAvLyByZXR1cm4gcGF5bG9hZFxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAvLyB9KVxuICAgIC8vICAgICAvLyAudGhlbihwYXlsb2FkID0+IHByb2Nlc3NEYXRhKHBheWxvYWQpKSBcbiAgICAvLyAgICAgLy8gLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAvLyAgICAgLy8gICAgIGNoYXJ0LnJlbmRlcihwYXlsb2FkKVxuICAgIC8vICAgICAvLyB9KVxufVxuXG5cbi8vIFVzZSBmb3IgdGVzdGluZyBmdW5jdGlvbmFsaXR5LCBzb3VyY2VkIGZyb206IGh0dHBzOi8vY29kZWJ1cnN0LmlvL3Rocm90dGxpbmctYW5kLWRlYm91bmNpbmctaW4tamF2YXNjcmlwdC02NDZkMDc2ZDBhNDRcbmNvbnN0IGRlYm91bmNlID0gKGRlbGF5LCBmbikgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAodGltZXJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59XG5cbmNvbnN0IGRlYm91bmNlZFR5cGluZyA9IGRlYm91bmNlKDcwMCwgaGFuZGxlVHlwaW5nKTsiLCIvLyBuZWVkIHRvIGFkZCBhamF4IGNhbGxzIGhlcmUgdG8gZ3JhYiB0d2VldHMgZnJvbSB0aCBmcm9udCBlbmQgXG5cbmV4cG9ydCBjb25zdCB0d2VldFN0cmVhbSA9IChkYXRhKSA9PiAoXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBcIi90d2VldHNcIixcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbilcblxuLy8gbmVlZWQgdG8gdGVzdCB0aGlzXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=