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

/***/ "../node_modules/jquery/dist/jquery.js":
/*!*********************************************!*\
  !*** ../node_modules/jquery/dist/jquery.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
(function (global, factory) {
  "use strict";

  if ( true && typeof module.exports === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var document = window.document;
  var getProto = Object.getPrototypeOf;
  var slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.4.1",
      // Define a local copy of jQuery
  jQuery = function (selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  },
      // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function () {
      return slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function (num) {
      // Return all the elements in a clean array
      if (num == null) {
        return slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function (elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function (callback) {
      return jQuery.each(this, callback);
    },
    map: function (callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function () {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (typeof target !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function (msg) {
      throw new Error(msg);
    },
    noop: function () {},
    isPlainObject: function (obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function (obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a global context
    globalEval: function (code, options) {
      DOMEval(code, {
        nonce: options && options.nonce
      });
    },
    each: function (obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // Support: Android <=4.0 only
    trim: function (text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    // results is for internal usage only
    makeArray: function (arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function (elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function (first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function (elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function (elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return concat.apply([], ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.4
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2019-04-08
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function (a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function (list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function (_, escaped, escapedWhitespace) {
      var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
      // Support: Firefox<24
      // Workaround erroneous numeric interpretation of +"0x"

      return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
      String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function (ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function () {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          push_native.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }

        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && rdescend.test(selector)) {
              // Capture the context ID, setting it first if necessary
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(","); // Expand context for sibling selectors

              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem.namespaceURI,
          docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected

      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

      if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      }
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)


      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359
          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document


        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }

          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function (match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function (match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function (match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function (nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function (className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function (name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function (type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function (pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function (elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function (elem) {
          return elem === docElem;
        },
        "focus": function (elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function (elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function (elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function (elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function (elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function (elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function (elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function (elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function (elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function (seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          outermostContext = context === document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0;

            if (!context && elem.ownerDocument !== document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function (elem, dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var siblings = function (n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function (selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function (selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function (selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function (selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function (target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function (selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function (elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function (selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function (selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function (elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function (elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function (elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function (elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function (elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function (elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function (elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function (elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function (elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function (elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function (elem) {
      return siblings(elem.firstChild);
    },
    contents: function (elem) {
      if (typeof elem.contentDocument !== "undefined") {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    fired,
        // Flag to prevent firing
    locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function () {
      // Enforce single-firing
      locked = locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function () {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function () {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function (fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function () {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function () {
        locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function () {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function () {
        locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function () {
        return !!locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function (context, args) {
        if (!locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function () {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function () {
        return !!fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function (func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          state = "pending",
          promise = {
        state: function () {
          return state;
        },
        always: function () {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function (fn) {
          return promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function ()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function (onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function () {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                typeof returned === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function (obj) {
          return obj != null ? jQuery.extend(obj, promise) : promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      promise.promise(deferred); // Call given func if any

      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function (singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function (i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch(function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function (wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function (elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function (owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function (owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function (owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function (owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function (owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function (owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function (owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function (elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function (elem, name, data) {
      return dataUser.access(elem, name, data);
    },
    removeData: function (elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function (elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function (elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function (key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (typeof key === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function (key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function (elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function (elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function () {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function (elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function (type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function (type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function (type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function (type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function () {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function (elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function (elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function (elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  var swap = function (elem, options, callback, args) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function () {
      return showHide(this, true);
    },
    hide: function () {
      return showHide(this);
    },
    toggle: function (state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)

  var wrapMap = {
    // Support: IE <=9 only
    option: [1, "<select multiple='multiple'>", "</select>"],
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  }; // Support: IE <=9 only

  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (typeof types === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function (event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function (elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)

      if (!elemData) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function (elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function (nativeEvent) {
      // Make a writable jQuery.Event from the native event object
      var event = jQuery.event.fix(nativeEvent);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function (event, handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function (name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function (value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function (originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function (data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function (data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function (event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function (event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function (event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function () {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function () {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function (event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function (types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function (types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function (types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (typeof types === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var
  /* eslint-disable max-len */
  // See https://github.com/eslint/eslint/issues/3229
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

  /* eslint-enable */
  // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;

      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  });
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function (html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function (elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function (selector) {
      return remove(this, selector, true);
    },
    remove: function (selector) {
      return remove(this, selector);
    },
    text: function (value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function () {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function () {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function () {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function () {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function () {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function (dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function (value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function () {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function (elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function () {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function () {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function () {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function () {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function () {
        computeStyleTests();
        return scrollboxSizeVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function () {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var final = jQuery.cssProps[name] || vendorProps[name];

    if (final) {
      return final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    // Support: IE 9-11 only
    // Also use offsetWidth/offsetHeight for when box sizing is unreliable
    // We use getClientRects() to check for hidden/disconnected.
    // In those cases, the computed value can be trusted to be border-box


    if ((!support.boxSizingReliable() && isBorderBox || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function (elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = typeof value; // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function (elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function (elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function (elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function (value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function (name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function () {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function (percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function (tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function (tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function (p) {
      return p;
    },
    swing: function (p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function () {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function (prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function (gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function (props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function (callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function (prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function () {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function (type, clearQueue, gotoEnd) {
      var stopQueue = function (hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function (type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function (name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function (name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function (elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function (elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function (elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function (elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function (name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function (name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function (elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function (elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function (elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function (elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function (value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function (value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function (value, stateVal) {
      var type = typeof value,
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function (selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function (value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function (elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function (elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function (elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function (e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function (event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function (type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function (type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function (type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function (event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function () {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function () {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = Date.now();
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function (key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function (target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function (url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (typeof url === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};
      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function (key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function () {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function (name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function (type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function (map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                statusCode[code] = [statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function (statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds

      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(statusCode);
        statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function (url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function (url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });

  jQuery._evalUrl = function (url, options) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function () {}
      },
      dataFilter: function (response) {
        jQuery.globalEval(response, options);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function (html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function (html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function (html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function (selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest

    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function (headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          callback = function (type) {
            return function () {
              if (callback) {
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = callback();
          errorCallback = xhr.onerror = xhr.ontimeout = callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          callback = callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (callback) {
              throw e;
            }
          }
        },
        abort: function () {
          if (callback) {
            callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, callback;
      return {
        send: function (_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function (evt) {
            script.remove();
            callback = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function () {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && typeof params === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  }; // Attach a bunch of functions for handling common AJAX events


  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function (elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function (options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function () {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function () {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover: function (fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.fn.extend({
    bind: function (types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function (types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function (selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function (selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  }); // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = slice.call(arguments, 2);

    proxy = function () {
      return fn.apply(context || this, args.concat(slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});

/***/ }),

/***/ "./src/chart_util.js":
/*!***************************!*\
  !*** ./src/chart_util.js ***!
  \***************************/
/*! exports provided: tweetsRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweetsRender", function() { return tweetsRender; });
// const conditionalTitleColor = (total) => {
//     d3.select(".title-1")
//         .data([total])
//         .transition()
//         .ease(d3.easeExp)
//         .duration(2000)
//         .style("color", d => {
//             if (d.average > 0.13) {
//                 return `rgba(${32 * Math.sqrt(d.average)}, ${196 * Math.sqrt(d.average)}, ${168 * Math.sqrt(d.average)}, 0.97)`
//             } else if (d.average < -0.13) {
//                 return `rgba(${128 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, 0.97)`
//             } else {
//                 return `rgba(255,255,255,0.8)`
//             }
//         })
//     d3.select(".title-2")
//         .data([total])
//         .transition()
//         .ease(d3.easeExp)
//         .duration(2000)
//         .style("color", d => {
//             if (d.average > 0.13) {
//                 return `rgba(${32 * Math.sqrt(d.average)}, ${196 * Math.sqrt(d.average)}, ${168 * Math.sqrt(d.average)}, 0.97)`
//             } else if (d.average < -0.13) {
//                 return `rgba(${128 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, 0.97)`
//             } else {
//                 return `rgba(255,255,255,0.8)`
//             }
//         })
// }
var tweetsRender = function tweetsRender(data) {
  d3.select(".chart").data(data).enter().append("p");
};

/***/ }),

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
/* harmony import */ var _chart_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart_util */ "./src/chart_util.js");


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
        tweets = response.slice(0, request().queryNum); // console.log(tweets);
      }

      if (tweets.length >= request().queryNum) {
        clearInterval(call);
        clearInterval(tweetslog);
        console.log(tweets);
      }
    });
  }, 500);
  var totalSent = 0;

  var stopCall = function stopCall() {
    if (tweets.length >= request().queryNum) {
      clearInterval(call);
    }
  }; // setInterval(() => {
  //  d3.select('body')
  // .selectAll('p')
  // .data(tweets)
  // .enter()
  // .append('p') 
  // .text(`${tweets.text}`);
  // }, 50);


  var tweetslog = setInterval(function () {
    console.log(tweets);
  }, 510);
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var tweetStream = function tweetStream(data) {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    url: "/tweets",
    method: "GET",
    data: data
  });
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0X3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVyeV9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJ0d2VldHNSZW5kZXIiLCJkYXRhIiwiZDMiLCJzZWxlY3QiLCJlbnRlciIsImFwcGVuZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInR3ZWV0U3RyZWFtIiwicHJvcHMiLCJzZWFyY2giLCJnZXRFbGVtZW50QnlJZCIsInRpdGxlIiwiaW5zZXJ0QmVmb3JlIiwicXVlcnlGaWVsZCIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwicXVlcnlJbnB1dCIsInNldEF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJ0eXBpbmdXb3JkIiwiYXBwZW5kQ2hpbGQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlVHlwaW5nIiwib3B0aW9ucyIsInN0ciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImkiLCJjeWNsZSIsInNldEludGVydmFsIiwicmFuZCIsInNsaWNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFySW5wdXQiLCJjbGVhckludGVydmFsIiwidmFsdWUiLCJyZXF1ZXN0IiwicGFydHMiLCJzcGxpdCIsIm9iaiIsInF1ZXJ5U3RyIiwicXVlcnlOdW0iLCJwYXJzZUludCIsInR3ZWV0cyIsImNhbGwiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0d2VldHNsb2ciLCJjb25zb2xlIiwibG9nIiwidG90YWxTZW50Iiwic3RvcENhbGwiLCJkZWJvdW5jZSIsImRlbGF5IiwiZm4iLCJ0aW1lcklkIiwiYXJncyIsImNsZWFyVGltZW91dCIs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O0FBQ0EsT0FBTzs7O0FBR1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLElBQUk7QUFDOUM7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTs7QUFFekU7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87OztBQUdQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRyxFQUFFO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtB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SUFBVjtBQUNILEtBSG1CLEVBR2pCRixLQUhpQixDQUFwQjtBQUlILEdBUkQ7QUFTSCxDQVhEOztBQWFBLElBQU1LLGVBQWUsR0FBR04sUUFBUSxDQUFDLEdBQUQsRUFBTWhDLFlBQU4sQ0FBaEMsQzs7Ozs7Ozs7Ozs7O0FDeklBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNaEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1IsSUFBRDtBQUFBLFNBQ3ZCK0QsNkNBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRSxTQURGO0FBRUhDLFVBQU0sRUFBRSxLQUZMO0FBR0hsRSxRQUFJLEVBQUVBO0FBSEgsR0FBUCxDQUR1QjtBQUFBLENBQXBCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohXG4gKiBqUXVlcnkgSmF2YVNjcmlwdCBMaWJyYXJ5IHYzLjQuMVxuICogaHR0cHM6Ly9qcXVlcnkuY29tL1xuICpcbiAqIEluY2x1ZGVzIFNpenpsZS5qc1xuICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTktMDUtMDFUMjE6MDRaXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIEZvciBDb21tb25KUyBhbmQgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgd2hlcmUgYSBwcm9wZXIgYHdpbmRvd2BcbiAgICAvLyBpcyBwcmVzZW50LCBleGVjdXRlIHRoZSBmYWN0b3J5IGFuZCBnZXQgalF1ZXJ5LlxuICAgIC8vIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3QgaGF2ZSBhIGB3aW5kb3dgIHdpdGggYSBgZG9jdW1lbnRgXG4gICAgLy8gKHN1Y2ggYXMgTm9kZS5qcyksIGV4cG9zZSBhIGZhY3RvcnkgYXMgbW9kdWxlLmV4cG9ydHMuXG4gICAgLy8gVGhpcyBhY2NlbnR1YXRlcyB0aGUgbmVlZCBmb3IgdGhlIGNyZWF0aW9uIG9mIGEgcmVhbCBgd2luZG93YC5cbiAgICAvLyBlLmcuIHZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpKHdpbmRvdyk7XG4gICAgLy8gU2VlIHRpY2tldCAjMTQ1NDkgZm9yIG1vcmUgaW5mby5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/IGZhY3RvcnkoZ2xvYmFsLCB0cnVlKSA6IGZ1bmN0aW9uICh3KSB7XG4gICAgICBpZiAoIXcuZG9jdW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhY3Rvcnkodyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KGdsb2JhbCk7XG4gIH0gLy8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcblxufSkodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uICh3aW5kb3csIG5vR2xvYmFsKSB7XG4gIC8vIEVkZ2UgPD0gMTIgLSAxMyssIEZpcmVmb3ggPD0xOCAtIDQ1KywgSUUgMTAgLSAxMSwgU2FmYXJpIDUuMSAtIDkrLCBpT1MgNiAtIDkuMVxuICAvLyB0aHJvdyBleGNlcHRpb25zIHdoZW4gbm9uLXN0cmljdCBjb2RlIChlLmcuLCBBU1AuTkVUIDQuNSkgYWNjZXNzZXMgc3RyaWN0IG1vZGVcbiAgLy8gYXJndW1lbnRzLmNhbGxlZS5jYWxsZXIgKHRyYWMtMTMzMzUpLiBCdXQgYXMgb2YgalF1ZXJ5IDMuMCAoMjAxNiksIHN0cmljdCBtb2RlIHNob3VsZCBiZSBjb21tb25cbiAgLy8gZW5vdWdoIHRoYXQgYWxsIHN1Y2ggYXR0ZW1wdHMgYXJlIGd1YXJkZWQgaW4gYSB0cnkgYmxvY2suXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBhcnIgPSBbXTtcbiAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBzbGljZSA9IGFyci5zbGljZTtcbiAgdmFyIGNvbmNhdCA9IGFyci5jb25jYXQ7XG4gIHZhciBwdXNoID0gYXJyLnB1c2g7XG4gIHZhciBpbmRleE9mID0gYXJyLmluZGV4T2Y7XG4gIHZhciBjbGFzczJ0eXBlID0ge307XG4gIHZhciB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmc7XG4gIHZhciBoYXNPd24gPSBjbGFzczJ0eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgZm5Ub1N0cmluZyA9IGhhc093bi50b1N0cmluZztcbiAgdmFyIE9iamVjdEZ1bmN0aW9uU3RyaW5nID0gZm5Ub1N0cmluZy5jYWxsKE9iamVjdCk7XG4gIHZhciBzdXBwb3J0ID0ge307XG5cbiAgdmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIC8vIFN1cHBvcnQ6IENocm9tZSA8PTU3LCBGaXJlZm94IDw9NTJcbiAgICAvLyBJbiBzb21lIGJyb3dzZXJzLCB0eXBlb2YgcmV0dXJucyBcImZ1bmN0aW9uXCIgZm9yIEhUTUwgPG9iamVjdD4gZWxlbWVudHNcbiAgICAvLyAoaS5lLiwgYHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcIm9iamVjdFwiICkgPT09IFwiZnVuY3Rpb25cImApLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gY2xhc3NpZnkgKmFueSogRE9NIG5vZGUgYXMgYSBmdW5jdGlvbi5cbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09IFwibnVtYmVyXCI7XG4gIH07XG5cbiAgdmFyIGlzV2luZG93ID0gZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcbiAgfTtcblxuICB2YXIgcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyA9IHtcbiAgICB0eXBlOiB0cnVlLFxuICAgIHNyYzogdHJ1ZSxcbiAgICBub25jZTogdHJ1ZSxcbiAgICBub01vZHVsZTogdHJ1ZVxuICB9O1xuXG4gIGZ1bmN0aW9uIERPTUV2YWwoY29kZSwgbm9kZSwgZG9jKSB7XG4gICAgZG9jID0gZG9jIHx8IGRvY3VtZW50O1xuICAgIHZhciBpLFxuICAgICAgICB2YWwsXG4gICAgICAgIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHNjcmlwdC50ZXh0ID0gY29kZTtcblxuICAgIGlmIChub2RlKSB7XG4gICAgICBmb3IgKGkgaW4gcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcykge1xuICAgICAgICAvLyBTdXBwb3J0OiBGaXJlZm94IDY0KywgRWRnZSAxOCtcbiAgICAgICAgLy8gU29tZSBicm93c2VycyBkb24ndCBzdXBwb3J0IHRoZSBcIm5vbmNlXCIgcHJvcGVydHkgb24gc2NyaXB0cy5cbiAgICAgICAgLy8gT24gdGhlIG90aGVyIGhhbmQsIGp1c3QgdXNpbmcgYGdldEF0dHJpYnV0ZWAgaXMgbm90IGVub3VnaCBhc1xuICAgICAgICAvLyB0aGUgYG5vbmNlYCBhdHRyaWJ1dGUgaXMgcmVzZXQgdG8gYW4gZW1wdHkgc3RyaW5nIHdoZW5ldmVyIGl0XG4gICAgICAgIC8vIGJlY29tZXMgYnJvd3NpbmctY29udGV4dCBjb25uZWN0ZWQuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzIzNjlcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI25vbmNlLWF0dHJpYnV0ZXNcbiAgICAgICAgLy8gVGhlIGBub2RlLmdldEF0dHJpYnV0ZWAgY2hlY2sgd2FzIGFkZGVkIGZvciB0aGUgc2FrZSBvZlxuICAgICAgICAvLyBgalF1ZXJ5Lmdsb2JhbEV2YWxgIHNvIHRoYXQgaXQgY2FuIGZha2UgYSBub25jZS1jb250YWluaW5nIG5vZGVcbiAgICAgICAgLy8gdmlhIGFuIG9iamVjdC5cbiAgICAgICAgdmFsID0gbm9kZVtpXSB8fCBub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZShpKTtcblxuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShpLCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b1R5cGUob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gb2JqICsgXCJcIjtcbiAgICB9IC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seSAoZnVuY3Rpb25pc2ggUmVnRXhwKVxuXG5cbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgPyBjbGFzczJ0eXBlW3RvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIiA6IHR5cGVvZiBvYmo7XG4gIH1cbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICAvLyBEZWZpbmluZyB0aGlzIGdsb2JhbCBpbiAuZXNsaW50cmMuanNvbiB3b3VsZCBjcmVhdGUgYSBkYW5nZXIgb2YgdXNpbmcgdGhlIGdsb2JhbFxuICAvLyB1bmd1YXJkZWQgaW4gYW5vdGhlciBwbGFjZSwgaXQgc2VlbXMgc2FmZXIgdG8gZGVmaW5lIGdsb2JhbCBvbmx5IGZvciB0aGlzIG1vZHVsZVxuXG5cbiAgdmFyIHZlcnNpb24gPSBcIjMuNC4xXCIsXG4gICAgICAvLyBEZWZpbmUgYSBsb2NhbCBjb3B5IG9mIGpRdWVyeVxuICBqUXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcbiAgICAvLyBOZWVkIGluaXQgaWYgalF1ZXJ5IGlzIGNhbGxlZCAoanVzdCBhbGxvdyBlcnJvciB0byBiZSB0aHJvd24gaWYgbm90IGluY2x1ZGVkKVxuICAgIHJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoc2VsZWN0b3IsIGNvbnRleHQpO1xuICB9LFxuICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5XG4gIC8vIE1ha2Ugc3VyZSB3ZSB0cmltIEJPTSBhbmQgTkJTUFxuICBydHJpbSA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztcblxuICBqUXVlcnkuZm4gPSBqUXVlcnkucHJvdG90eXBlID0ge1xuICAgIC8vIFRoZSBjdXJyZW50IHZlcnNpb24gb2YgalF1ZXJ5IGJlaW5nIHVzZWRcbiAgICBqcXVlcnk6IHZlcnNpb24sXG4gICAgY29uc3RydWN0b3I6IGpRdWVyeSxcbiAgICAvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcbiAgICBsZW5ndGg6IDAsXG4gICAgdG9BcnJheTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNsaWNlLmNhbGwodGhpcyk7XG4gICAgfSxcbiAgICAvLyBHZXQgdGhlIE50aCBlbGVtZW50IGluIHRoZSBtYXRjaGVkIGVsZW1lbnQgc2V0IE9SXG4gICAgLy8gR2V0IHRoZSB3aG9sZSBtYXRjaGVkIGVsZW1lbnQgc2V0IGFzIGEgY2xlYW4gYXJyYXlcbiAgICBnZXQ6IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGluIGEgY2xlYW4gYXJyYXlcbiAgICAgIGlmIChudW0gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gc2xpY2UuY2FsbCh0aGlzKTtcbiAgICAgIH0gLy8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuXG5cbiAgICAgIHJldHVybiBudW0gPCAwID8gdGhpc1tudW0gKyB0aGlzLmxlbmd0aF0gOiB0aGlzW251bV07XG4gICAgfSxcbiAgICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGFuZCBwdXNoIGl0IG9udG8gdGhlIHN0YWNrXG4gICAgLy8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG4gICAgcHVzaFN0YWNrOiBmdW5jdGlvbiAoZWxlbXMpIHtcbiAgICAgIC8vIEJ1aWxkIGEgbmV3IGpRdWVyeSBtYXRjaGVkIGVsZW1lbnQgc2V0XG4gICAgICB2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSwgZWxlbXMpOyAvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXG4gICAgICByZXQucHJldk9iamVjdCA9IHRoaXM7IC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICAvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGpRdWVyeS5lYWNoKHRoaXMsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIG1hcDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soalF1ZXJ5Lm1hcCh0aGlzLCBmdW5jdGlvbiAoZWxlbSwgaSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbChlbGVtLCBpLCBlbGVtKTtcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIHNsaWNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soc2xpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfSxcbiAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXEoMCk7XG4gICAgfSxcbiAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcSgtMSk7XG4gICAgfSxcbiAgICBlcTogZnVuY3Rpb24gKGkpIHtcbiAgICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgICBqID0gK2kgKyAoaSA8IDAgPyBsZW4gOiAwKTtcbiAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhqID49IDAgJiYgaiA8IGxlbiA/IFt0aGlzW2pdXSA6IFtdKTtcbiAgICB9LFxuICAgIGVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJldk9iamVjdCB8fCB0aGlzLmNvbnN0cnVjdG9yKCk7XG4gICAgfSxcbiAgICAvLyBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAgLy8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG4gICAgcHVzaDogcHVzaCxcbiAgICBzb3J0OiBhcnIuc29ydCxcbiAgICBzcGxpY2U6IGFyci5zcGxpY2VcbiAgfTtcblxuICBqUXVlcnkuZXh0ZW5kID0galF1ZXJ5LmZuLmV4dGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3JjLFxuICAgICAgICBjb3B5LFxuICAgICAgICBjb3B5SXNBcnJheSxcbiAgICAgICAgY2xvbmUsXG4gICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1swXSB8fCB7fSxcbiAgICAgICAgaSA9IDEsXG4gICAgICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGRlZXAgPSBmYWxzZTsgLy8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBkZWVwID0gdGFyZ2V0OyAvLyBTa2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cbiAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1tpXSB8fCB7fTtcbiAgICAgIGkrKztcbiAgICB9IC8vIEhhbmRsZSBjYXNlIHdoZW4gdGFyZ2V0IGlzIGEgc3RyaW5nIG9yIHNvbWV0aGluZyAocG9zc2libGUgaW4gZGVlcCBjb3B5KVxuXG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIiAmJiAhaXNGdW5jdGlvbih0YXJnZXQpKSB7XG4gICAgICB0YXJnZXQgPSB7fTtcbiAgICB9IC8vIEV4dGVuZCBqUXVlcnkgaXRzZWxmIGlmIG9ubHkgb25lIGFyZ3VtZW50IGlzIHBhc3NlZFxuXG5cbiAgICBpZiAoaSA9PT0gbGVuZ3RoKSB7XG4gICAgICB0YXJnZXQgPSB0aGlzO1xuICAgICAgaS0tO1xuICAgIH1cblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcbiAgICAgIGlmICgob3B0aW9ucyA9IGFyZ3VtZW50c1tpXSkgIT0gbnVsbCkge1xuICAgICAgICAvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG4gICAgICAgIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgY29weSA9IG9wdGlvbnNbbmFtZV07IC8vIFByZXZlbnQgT2JqZWN0LnByb3RvdHlwZSBwb2xsdXRpb25cbiAgICAgICAgICAvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cbiAgICAgICAgICBpZiAobmFtZSA9PT0gXCJfX3Byb3RvX19cIiB8fCB0YXJnZXQgPT09IGNvcHkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gLy8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cblxuICAgICAgICAgIGlmIChkZWVwICYmIGNvcHkgJiYgKGpRdWVyeS5pc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IEFycmF5LmlzQXJyYXkoY29weSkpKSkge1xuICAgICAgICAgICAgc3JjID0gdGFyZ2V0W25hbWVdOyAvLyBFbnN1cmUgcHJvcGVyIHR5cGUgZm9yIHRoZSBzb3VyY2UgdmFsdWVcblxuICAgICAgICAgICAgaWYgKGNvcHlJc0FycmF5ICYmICFBcnJheS5pc0FycmF5KHNyYykpIHtcbiAgICAgICAgICAgICAgY2xvbmUgPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNvcHlJc0FycmF5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdChzcmMpKSB7XG4gICAgICAgICAgICAgIGNsb25lID0ge307XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjbG9uZSA9IHNyYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29weUlzQXJyYXkgPSBmYWxzZTsgLy8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGpRdWVyeS5leHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpOyAvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG4gICAgICAgICAgfSBlbHNlIGlmIChjb3B5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGNvcHk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIGpRdWVyeS5leHRlbmQoe1xuICAgIC8vIFVuaXF1ZSBmb3IgZWFjaCBjb3B5IG9mIGpRdWVyeSBvbiB0aGUgcGFnZVxuICAgIGV4cGFuZG86IFwialF1ZXJ5XCIgKyAodmVyc2lvbiArIE1hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLCBcIlwiKSxcbiAgICAvLyBBc3N1bWUgalF1ZXJ5IGlzIHJlYWR5IHdpdGhvdXQgdGhlIHJlYWR5IG1vZHVsZVxuICAgIGlzUmVhZHk6IHRydWUsXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH0sXG4gICAgbm9vcDogZnVuY3Rpb24gKCkge30sXG4gICAgaXNQbGFpbk9iamVjdDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgdmFyIHByb3RvLCBDdG9yOyAvLyBEZXRlY3Qgb2J2aW91cyBuZWdhdGl2ZXNcbiAgICAgIC8vIFVzZSB0b1N0cmluZyBpbnN0ZWFkIG9mIGpRdWVyeS50eXBlIHRvIGNhdGNoIGhvc3Qgb2JqZWN0c1xuXG4gICAgICBpZiAoIW9iaiB8fCB0b1N0cmluZy5jYWxsKG9iaikgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBwcm90byA9IGdldFByb3RvKG9iaik7IC8vIE9iamVjdHMgd2l0aCBubyBwcm90b3R5cGUgKGUuZy4sIGBPYmplY3QuY3JlYXRlKCBudWxsIClgKSBhcmUgcGxhaW5cblxuICAgICAgaWYgKCFwcm90bykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gLy8gT2JqZWN0cyB3aXRoIHByb3RvdHlwZSBhcmUgcGxhaW4gaWZmIHRoZXkgd2VyZSBjb25zdHJ1Y3RlZCBieSBhIGdsb2JhbCBPYmplY3QgZnVuY3Rpb25cblxuXG4gICAgICBDdG9yID0gaGFzT3duLmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gICAgICByZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBmblRvU3RyaW5nLmNhbGwoQ3RvcikgPT09IE9iamVjdEZ1bmN0aW9uU3RyaW5nO1xuICAgIH0sXG4gICAgaXNFbXB0eU9iamVjdDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgdmFyIG5hbWU7XG5cbiAgICAgIGZvciAobmFtZSBpbiBvYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIEV2YWx1YXRlcyBhIHNjcmlwdCBpbiBhIGdsb2JhbCBjb250ZXh0XG4gICAgZ2xvYmFsRXZhbDogZnVuY3Rpb24gKGNvZGUsIG9wdGlvbnMpIHtcbiAgICAgIERPTUV2YWwoY29kZSwge1xuICAgICAgICBub25jZTogb3B0aW9ucyAmJiBvcHRpb25zLm5vbmNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVhY2g6IGZ1bmN0aW9uIChvYmosIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgbGVuZ3RoLFxuICAgICAgICAgIGkgPSAwO1xuXG4gICAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAgICBsZW5ndGggPSBvYmoubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChvYmpbaV0sIGksIG9ialtpXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChvYmpbaV0sIGksIG9ialtpXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuICAgIHRyaW06IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGV4dCA9PSBudWxsID8gXCJcIiA6ICh0ZXh0ICsgXCJcIikucmVwbGFjZShydHJpbSwgXCJcIik7XG4gICAgfSxcbiAgICAvLyByZXN1bHRzIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG4gICAgbWFrZUFycmF5OiBmdW5jdGlvbiAoYXJyLCByZXN1bHRzKSB7XG4gICAgICB2YXIgcmV0ID0gcmVzdWx0cyB8fCBbXTtcblxuICAgICAgaWYgKGFyciAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc0FycmF5TGlrZShPYmplY3QoYXJyKSkpIHtcbiAgICAgICAgICBqUXVlcnkubWVyZ2UocmV0LCB0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID8gW2Fycl0gOiBhcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHB1c2guY2FsbChyZXQsIGFycik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuICAgIGluQXJyYXk6IGZ1bmN0aW9uIChlbGVtLCBhcnIsIGkpIHtcbiAgICAgIHJldHVybiBhcnIgPT0gbnVsbCA/IC0xIDogaW5kZXhPZi5jYWxsKGFyciwgZWxlbSwgaSk7XG4gICAgfSxcbiAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcbiAgICAvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG4gICAgbWVyZ2U6IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgICB2YXIgbGVuID0gK3NlY29uZC5sZW5ndGgsXG4gICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgaSA9IGZpcnN0Lmxlbmd0aDtcblxuICAgICAgZm9yICg7IGogPCBsZW47IGorKykge1xuICAgICAgICBmaXJzdFtpKytdID0gc2Vjb25kW2pdO1xuICAgICAgfVxuXG4gICAgICBmaXJzdC5sZW5ndGggPSBpO1xuICAgICAgcmV0dXJuIGZpcnN0O1xuICAgIH0sXG4gICAgZ3JlcDogZnVuY3Rpb24gKGVsZW1zLCBjYWxsYmFjaywgaW52ZXJ0KSB7XG4gICAgICB2YXIgY2FsbGJhY2tJbnZlcnNlLFxuICAgICAgICAgIG1hdGNoZXMgPSBbXSxcbiAgICAgICAgICBpID0gMCxcbiAgICAgICAgICBsZW5ndGggPSBlbGVtcy5sZW5ndGgsXG4gICAgICAgICAgY2FsbGJhY2tFeHBlY3QgPSAhaW52ZXJ0OyAvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgb25seSBzYXZpbmcgdGhlIGl0ZW1zXG4gICAgICAvLyB0aGF0IHBhc3MgdGhlIHZhbGlkYXRvciBmdW5jdGlvblxuXG4gICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxiYWNrSW52ZXJzZSA9ICFjYWxsYmFjayhlbGVtc1tpXSwgaSk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrSW52ZXJzZSAhPT0gY2FsbGJhY2tFeHBlY3QpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goZWxlbXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH0sXG4gICAgLy8gYXJnIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG4gICAgbWFwOiBmdW5jdGlvbiAoZWxlbXMsIGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgIHZhciBsZW5ndGgsXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgcmV0ID0gW107IC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCB0cmFuc2xhdGluZyBlYWNoIG9mIHRoZSBpdGVtcyB0byB0aGVpciBuZXcgdmFsdWVzXG5cbiAgICAgIGlmIChpc0FycmF5TGlrZShlbGVtcykpIHtcbiAgICAgICAgbGVuZ3RoID0gZWxlbXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKGVsZW1zW2ldLCBpLCBhcmcpO1xuXG4gICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gR28gdGhyb3VnaCBldmVyeSBrZXkgb24gdGhlIG9iamVjdCxcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpIGluIGVsZW1zKSB7XG4gICAgICAgICAgdmFsdWUgPSBjYWxsYmFjayhlbGVtc1tpXSwgaSwgYXJnKTtcblxuICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblxuXG4gICAgICByZXR1cm4gY29uY2F0LmFwcGx5KFtdLCByZXQpO1xuICAgIH0sXG4gICAgLy8gQSBnbG9iYWwgR1VJRCBjb3VudGVyIGZvciBvYmplY3RzXG4gICAgZ3VpZDogMSxcbiAgICAvLyBqUXVlcnkuc3VwcG9ydCBpcyBub3QgdXNlZCBpbiBDb3JlIGJ1dCBvdGhlciBwcm9qZWN0cyBhdHRhY2ggdGhlaXJcbiAgICAvLyBwcm9wZXJ0aWVzIHRvIGl0IHNvIGl0IG5lZWRzIHRvIGV4aXN0LlxuICAgIHN1cHBvcnQ6IHN1cHBvcnRcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGpRdWVyeS5mbltTeW1ib2wuaXRlcmF0b3JdID0gYXJyW1N5bWJvbC5pdGVyYXRvcl07XG4gIH0gLy8gUG9wdWxhdGUgdGhlIGNsYXNzMnR5cGUgbWFwXG5cblxuICBqUXVlcnkuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLCBmdW5jdGlvbiAoaSwgbmFtZSkge1xuICAgIGNsYXNzMnR5cGVbXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaXNBcnJheUxpa2Uob2JqKSB7XG4gICAgLy8gU3VwcG9ydDogcmVhbCBpT1MgOC4yIG9ubHkgKG5vdCByZXByb2R1Y2libGUgaW4gc2ltdWxhdG9yKVxuICAgIC8vIGBpbmAgY2hlY2sgdXNlZCB0byBwcmV2ZW50IEpJVCBlcnJvciAoZ2gtMjE0NSlcbiAgICAvLyBoYXNPd24gaXNuJ3QgdXNlZCBoZXJlIGR1ZSB0byBmYWxzZSBuZWdhdGl2ZXNcbiAgICAvLyByZWdhcmRpbmcgTm9kZWxpc3QgbGVuZ3RoIGluIElFXG4gICAgdmFyIGxlbmd0aCA9ICEhb2JqICYmIFwibGVuZ3RoXCIgaW4gb2JqICYmIG9iai5sZW5ndGgsXG4gICAgICAgIHR5cGUgPSB0b1R5cGUob2JqKTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikgfHwgaXNXaW5kb3cob2JqKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlID09PSBcImFycmF5XCIgfHwgbGVuZ3RoID09PSAwIHx8IHR5cGVvZiBsZW5ndGggPT09IFwibnVtYmVyXCIgJiYgbGVuZ3RoID4gMCAmJiBsZW5ndGggLSAxIGluIG9iajtcbiAgfVxuXG4gIHZhciBTaXp6bGUgPVxuICAvKiFcbiAgICogU2l6emxlIENTUyBTZWxlY3RvciBFbmdpbmUgdjIuMy40XG4gICAqIGh0dHBzOi8vc2l6emxlanMuY29tL1xuICAgKlxuICAgKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gICAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICAgKiBodHRwczovL2pzLmZvdW5kYXRpb24vXG4gICAqXG4gICAqIERhdGU6IDIwMTktMDQtMDhcbiAgICovXG4gIGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgc3VwcG9ydCxcbiAgICAgICAgRXhwcixcbiAgICAgICAgZ2V0VGV4dCxcbiAgICAgICAgaXNYTUwsXG4gICAgICAgIHRva2VuaXplLFxuICAgICAgICBjb21waWxlLFxuICAgICAgICBzZWxlY3QsXG4gICAgICAgIG91dGVybW9zdENvbnRleHQsXG4gICAgICAgIHNvcnRJbnB1dCxcbiAgICAgICAgaGFzRHVwbGljYXRlLFxuICAgICAgICAvLyBMb2NhbCBkb2N1bWVudCB2YXJzXG4gICAgc2V0RG9jdW1lbnQsXG4gICAgICAgIGRvY3VtZW50LFxuICAgICAgICBkb2NFbGVtLFxuICAgICAgICBkb2N1bWVudElzSFRNTCxcbiAgICAgICAgcmJ1Z2d5UVNBLFxuICAgICAgICByYnVnZ3lNYXRjaGVzLFxuICAgICAgICBtYXRjaGVzLFxuICAgICAgICBjb250YWlucyxcbiAgICAgICAgLy8gSW5zdGFuY2Utc3BlY2lmaWMgZGF0YVxuICAgIGV4cGFuZG8gPSBcInNpenpsZVwiICsgMSAqIG5ldyBEYXRlKCksXG4gICAgICAgIHByZWZlcnJlZERvYyA9IHdpbmRvdy5kb2N1bWVudCxcbiAgICAgICAgZGlycnVucyA9IDAsXG4gICAgICAgIGRvbmUgPSAwLFxuICAgICAgICBjbGFzc0NhY2hlID0gY3JlYXRlQ2FjaGUoKSxcbiAgICAgICAgdG9rZW5DYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG4gICAgICAgIGNvbXBpbGVyQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuICAgICAgICBub25uYXRpdmVTZWxlY3RvckNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcbiAgICAgICAgc29ydE9yZGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIGhhc0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG4gICAgICAgIC8vIEluc3RhbmNlIG1ldGhvZHNcbiAgICBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgYXJyID0gW10sXG4gICAgICAgIHBvcCA9IGFyci5wb3AsXG4gICAgICAgIHB1c2hfbmF0aXZlID0gYXJyLnB1c2gsXG4gICAgICAgIHB1c2ggPSBhcnIucHVzaCxcbiAgICAgICAgc2xpY2UgPSBhcnIuc2xpY2UsXG4gICAgICAgIC8vIFVzZSBhIHN0cmlwcGVkLWRvd24gaW5kZXhPZiBhcyBpdCdzIGZhc3RlciB0aGFuIG5hdGl2ZVxuICAgIC8vIGh0dHBzOi8vanNwZXJmLmNvbS90aG9yLWluZGV4b2YtdnMtZm9yLzVcbiAgICBpbmRleE9mID0gZnVuY3Rpb24gKGxpc3QsIGVsZW0pIHtcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICBsZW4gPSBsaXN0Lmxlbmd0aDtcblxuICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAobGlzdFtpXSA9PT0gZWxlbSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAtMTtcbiAgICB9LFxuICAgICAgICBib29sZWFucyA9IFwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixcbiAgICAgICAgLy8gUmVndWxhciBleHByZXNzaW9uc1xuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc2VsZWN0b3JzLyN3aGl0ZXNwYWNlXG4gICAgd2hpdGVzcGFjZSA9IFwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixcbiAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI3ZhbHVlLWRlZi1pZGVudGlmaWVyXG4gICAgaWRlbnRpZmllciA9IFwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixcbiAgICAgICAgLy8gQXR0cmlidXRlIHNlbGVjdG9yczogaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXG4gICAgYXR0cmlidXRlcyA9IFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XCIgKyB3aGl0ZXNwYWNlICsgLy8gT3BlcmF0b3IgKGNhcHR1cmUgMilcbiAgICBcIiooWypeJHwhfl0/PSlcIiArIHdoaXRlc3BhY2UgKyAvLyBcIkF0dHJpYnV0ZSB2YWx1ZXMgbXVzdCBiZSBDU1MgaWRlbnRpZmllcnMgW2NhcHR1cmUgNV0gb3Igc3RyaW5ncyBbY2FwdHVyZSAzIG9yIGNhcHR1cmUgNF1cIlxuICAgIFwiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIgKyBpZGVudGlmaWVyICsgXCIpKXwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXF1cIixcbiAgICAgICAgcHNldWRvcyA9IFwiOihcIiArIGlkZW50aWZpZXIgKyBcIikoPzpcXFxcKChcIiArIC8vIFRvIHJlZHVjZSB0aGUgbnVtYmVyIG9mIHNlbGVjdG9ycyBuZWVkaW5nIHRva2VuaXplIGluIHRoZSBwcmVGaWx0ZXIsIHByZWZlciBhcmd1bWVudHM6XG4gICAgLy8gMS4gcXVvdGVkIChjYXB0dXJlIDM7IGNhcHR1cmUgNCBvciBjYXB0dXJlIDUpXG4gICAgXCIoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXxcIiArIC8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxuICAgIFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiICsgYXR0cmlidXRlcyArIFwiKSopfFwiICsgLy8gMy4gYW55dGhpbmcgZWxzZSAoY2FwdHVyZSAyKVxuICAgIFwiLipcIiArIFwiKVxcXFwpfClcIixcbiAgICAgICAgLy8gTGVhZGluZyBhbmQgbm9uLWVzY2FwZWQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FwdHVyaW5nIHNvbWUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycyBwcmVjZWRpbmcgdGhlIGxhdHRlclxuICAgIHJ3aGl0ZXNwYWNlID0gbmV3IFJlZ0V4cCh3aGl0ZXNwYWNlICsgXCIrXCIsIFwiZ1wiKSxcbiAgICAgICAgcnRyaW0gPSBuZXcgUmVnRXhwKFwiXlwiICsgd2hpdGVzcGFjZSArIFwiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIiArIHdoaXRlc3BhY2UgKyBcIiskXCIsIFwiZ1wiKSxcbiAgICAgICAgcmNvbW1hID0gbmV3IFJlZ0V4cChcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiosXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIpLFxuICAgICAgICByY29tYmluYXRvcnMgPSBuZXcgUmVnRXhwKFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKihbPit+XXxcIiArIHdoaXRlc3BhY2UgKyBcIilcIiArIHdoaXRlc3BhY2UgKyBcIipcIiksXG4gICAgICAgIHJkZXNjZW5kID0gbmV3IFJlZ0V4cCh3aGl0ZXNwYWNlICsgXCJ8PlwiKSxcbiAgICAgICAgcnBzZXVkbyA9IG5ldyBSZWdFeHAocHNldWRvcyksXG4gICAgICAgIHJpZGVudGlmaWVyID0gbmV3IFJlZ0V4cChcIl5cIiArIGlkZW50aWZpZXIgKyBcIiRcIiksXG4gICAgICAgIG1hdGNoRXhwciA9IHtcbiAgICAgIFwiSURcIjogbmV3IFJlZ0V4cChcIl4jKFwiICsgaWRlbnRpZmllciArIFwiKVwiKSxcbiAgICAgIFwiQ0xBU1NcIjogbmV3IFJlZ0V4cChcIl5cXFxcLihcIiArIGlkZW50aWZpZXIgKyBcIilcIiksXG4gICAgICBcIlRBR1wiOiBuZXcgUmVnRXhwKFwiXihcIiArIGlkZW50aWZpZXIgKyBcInxbKl0pXCIpLFxuICAgICAgXCJBVFRSXCI6IG5ldyBSZWdFeHAoXCJeXCIgKyBhdHRyaWJ1dGVzKSxcbiAgICAgIFwiUFNFVURPXCI6IG5ldyBSZWdFeHAoXCJeXCIgKyBwc2V1ZG9zKSxcbiAgICAgIFwiQ0hJTERcIjogbmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIgKyB3aGl0ZXNwYWNlICsgXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIiArIHdoaXRlc3BhY2UgKyBcIiooPzooWystXXwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFxcXFxkKyl8KSlcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpXCIsIFwiaVwiKSxcbiAgICAgIFwiYm9vbFwiOiBuZXcgUmVnRXhwKFwiXig/OlwiICsgYm9vbGVhbnMgKyBcIikkXCIsIFwiaVwiKSxcbiAgICAgIC8vIEZvciB1c2UgaW4gbGlicmFyaWVzIGltcGxlbWVudGluZyAuaXMoKVxuICAgICAgLy8gV2UgdXNlIHRoaXMgZm9yIFBPUyBtYXRjaGluZyBpbiBgc2VsZWN0YFxuICAgICAgXCJuZWVkc0NvbnRleHRcIjogbmV3IFJlZ0V4cChcIl5cIiArIHdoaXRlc3BhY2UgKyBcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIgKyB3aGl0ZXNwYWNlICsgXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfCkoPz1bXi1dfCQpXCIsIFwiaVwiKVxuICAgIH0sXG4gICAgICAgIHJodG1sID0gL0hUTUwkL2ksXG4gICAgICAgIHJpbnB1dHMgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuICAgICAgICByaGVhZGVyID0gL15oXFxkJC9pLFxuICAgICAgICBybmF0aXZlID0gL15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxcbiAgICAgICAgLy8gRWFzaWx5LXBhcnNlYWJsZS9yZXRyaWV2YWJsZSBJRCBvciBUQUcgb3IgQ0xBU1Mgc2VsZWN0b3JzXG4gICAgcnF1aWNrRXhwciA9IC9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLFxuICAgICAgICByc2libGluZyA9IC9bK35dLyxcbiAgICAgICAgLy8gQ1NTIGVzY2FwZXNcbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjZXNjYXBlZC1jaGFyYWN0ZXJzXG4gICAgcnVuZXNjYXBlID0gbmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiICsgd2hpdGVzcGFjZSArIFwiP3woXCIgKyB3aGl0ZXNwYWNlICsgXCIpfC4pXCIsIFwiaWdcIiksXG4gICAgICAgIGZ1bmVzY2FwZSA9IGZ1bmN0aW9uIChfLCBlc2NhcGVkLCBlc2NhcGVkV2hpdGVzcGFjZSkge1xuICAgICAgdmFyIGhpZ2ggPSBcIjB4XCIgKyBlc2NhcGVkIC0gMHgxMDAwMDsgLy8gTmFOIG1lYW5zIG5vbi1jb2RlcG9pbnRcbiAgICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjRcbiAgICAgIC8vIFdvcmthcm91bmQgZXJyb25lb3VzIG51bWVyaWMgaW50ZXJwcmV0YXRpb24gb2YgK1wiMHhcIlxuXG4gICAgICByZXR1cm4gaGlnaCAhPT0gaGlnaCB8fCBlc2NhcGVkV2hpdGVzcGFjZSA/IGVzY2FwZWQgOiBoaWdoIDwgMCA/IC8vIEJNUCBjb2RlcG9pbnRcbiAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoaGlnaCArIDB4MTAwMDApIDogLy8gU3VwcGxlbWVudGFsIFBsYW5lIGNvZGVwb2ludCAoc3Vycm9nYXRlIHBhaXIpXG4gICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGhpZ2ggPj4gMTAgfCAweEQ4MDAsIGhpZ2ggJiAweDNGRiB8IDB4REMwMCk7XG4gICAgfSxcbiAgICAgICAgLy8gQ1NTIHN0cmluZy9pZGVudGlmaWVyIHNlcmlhbGl6YXRpb25cbiAgICAvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI2NvbW1vbi1zZXJpYWxpemluZy1pZGlvbXNcbiAgICByY3NzZXNjYXBlID0gLyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csXG4gICAgICAgIGZjc3Nlc2NhcGUgPSBmdW5jdGlvbiAoY2gsIGFzQ29kZVBvaW50KSB7XG4gICAgICBpZiAoYXNDb2RlUG9pbnQpIHtcbiAgICAgICAgLy8gVSswMDAwIE5VTEwgYmVjb21lcyBVK0ZGRkQgUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXG4gICAgICAgIGlmIChjaCA9PT0gXCJcXDBcIikge1xuICAgICAgICAgIHJldHVybiBcIlxcdUZGRkRcIjtcbiAgICAgICAgfSAvLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIChkZXBlbmRlbnQgdXBvbiBwb3NpdGlvbikgbnVtYmVycyBnZXQgZXNjYXBlZCBhcyBjb2RlIHBvaW50c1xuXG5cbiAgICAgICAgcmV0dXJuIGNoLnNsaWNlKDAsIC0xKSArIFwiXFxcXFwiICsgY2guY2hhckNvZGVBdChjaC5sZW5ndGggLSAxKS50b1N0cmluZygxNikgKyBcIiBcIjtcbiAgICAgIH0gLy8gT3RoZXIgcG90ZW50aWFsbHktc3BlY2lhbCBBU0NJSSBjaGFyYWN0ZXJzIGdldCBiYWNrc2xhc2gtZXNjYXBlZFxuXG5cbiAgICAgIHJldHVybiBcIlxcXFxcIiArIGNoO1xuICAgIH0sXG4gICAgICAgIC8vIFVzZWQgZm9yIGlmcmFtZXNcbiAgICAvLyBTZWUgc2V0RG9jdW1lbnQoKVxuICAgIC8vIFJlbW92aW5nIHRoZSBmdW5jdGlvbiB3cmFwcGVyIGNhdXNlcyBhIFwiUGVybWlzc2lvbiBEZW5pZWRcIlxuICAgIC8vIGVycm9yIGluIElFXG4gICAgdW5sb2FkSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldERvY3VtZW50KCk7XG4gICAgfSxcbiAgICAgICAgaW5EaXNhYmxlZEZpZWxkc2V0ID0gYWRkQ29tYmluYXRvcihmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IHRydWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImZpZWxkc2V0XCI7XG4gICAgfSwge1xuICAgICAgZGlyOiBcInBhcmVudE5vZGVcIixcbiAgICAgIG5leHQ6IFwibGVnZW5kXCJcbiAgICB9KTsgLy8gT3B0aW1pemUgZm9yIHB1c2guYXBwbHkoIF8sIE5vZGVMaXN0IClcblxuXG4gICAgdHJ5IHtcbiAgICAgIHB1c2guYXBwbHkoYXJyID0gc2xpY2UuY2FsbChwcmVmZXJyZWREb2MuY2hpbGROb2RlcyksIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzKTsgLy8gU3VwcG9ydDogQW5kcm9pZDw0LjBcbiAgICAgIC8vIERldGVjdCBzaWxlbnRseSBmYWlsaW5nIHB1c2guYXBwbHlcblxuICAgICAgYXJyW3ByZWZlcnJlZERvYy5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcHVzaCA9IHtcbiAgICAgICAgYXBwbHk6IGFyci5sZW5ndGggPyAvLyBMZXZlcmFnZSBzbGljZSBpZiBwb3NzaWJsZVxuICAgICAgICBmdW5jdGlvbiAodGFyZ2V0LCBlbHMpIHtcbiAgICAgICAgICBwdXNoX25hdGl2ZS5hcHBseSh0YXJnZXQsIHNsaWNlLmNhbGwoZWxzKSk7XG4gICAgICAgIH0gOiAvLyBTdXBwb3J0OiBJRTw5XG4gICAgICAgIC8vIE90aGVyd2lzZSBhcHBlbmQgZGlyZWN0bHlcbiAgICAgICAgZnVuY3Rpb24gKHRhcmdldCwgZWxzKSB7XG4gICAgICAgICAgdmFyIGogPSB0YXJnZXQubGVuZ3RoLFxuICAgICAgICAgICAgICBpID0gMDsgLy8gQ2FuJ3QgdHJ1c3QgTm9kZUxpc3QubGVuZ3RoXG5cbiAgICAgICAgICB3aGlsZSAodGFyZ2V0W2orK10gPSBlbHNbaSsrXSkge31cblxuICAgICAgICAgIHRhcmdldC5sZW5ndGggPSBqIC0gMTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTaXp6bGUoc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQpIHtcbiAgICAgIHZhciBtLFxuICAgICAgICAgIGksXG4gICAgICAgICAgZWxlbSxcbiAgICAgICAgICBuaWQsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgZ3JvdXBzLFxuICAgICAgICAgIG5ld1NlbGVjdG9yLFxuICAgICAgICAgIG5ld0NvbnRleHQgPSBjb250ZXh0ICYmIGNvbnRleHQub3duZXJEb2N1bWVudCxcbiAgICAgICAgICAvLyBub2RlVHlwZSBkZWZhdWx0cyB0byA5LCBzaW5jZSBjb250ZXh0IGRlZmF1bHRzIHRvIGRvY3VtZW50XG4gICAgICBub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdOyAvLyBSZXR1cm4gZWFybHkgZnJvbSBjYWxscyB3aXRoIGludmFsaWQgc2VsZWN0b3Igb3IgY29udGV4dFxuXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiIHx8ICFzZWxlY3RvciB8fCBub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9IC8vIFRyeSB0byBzaG9ydGN1dCBmaW5kIG9wZXJhdGlvbnMgKGFzIG9wcG9zZWQgdG8gZmlsdGVycykgaW4gSFRNTCBkb2N1bWVudHNcblxuXG4gICAgICBpZiAoIXNlZWQpIHtcbiAgICAgICAgaWYgKChjb250ZXh0ID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBwcmVmZXJyZWREb2MpICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgIHNldERvY3VtZW50KGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50SXNIVE1MKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGlzIHN1ZmZpY2llbnRseSBzaW1wbGUsIHRyeSB1c2luZyBhIFwiZ2V0KkJ5KlwiIERPTSBtZXRob2RcbiAgICAgICAgICAvLyAoZXhjZXB0aW5nIERvY3VtZW50RnJhZ21lbnQgY29udGV4dCwgd2hlcmUgdGhlIG1ldGhvZHMgZG9uJ3QgZXhpc3QpXG4gICAgICAgICAgaWYgKG5vZGVUeXBlICE9PSAxMSAmJiAobWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoc2VsZWN0b3IpKSkge1xuICAgICAgICAgICAgLy8gSUQgc2VsZWN0b3JcbiAgICAgICAgICAgIGlmIChtID0gbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgLy8gRG9jdW1lbnQgY29udGV4dFxuICAgICAgICAgICAgICBpZiAobm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQobSkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG4gICAgICAgICAgICAgICAgICAvLyBUT0RPOiBpZGVudGlmeSB2ZXJzaW9uc1xuICAgICAgICAgICAgICAgICAgLy8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uaWQgPT09IG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgfSAvLyBFbGVtZW50IGNvbnRleHRcblxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaWRlbnRpZnkgdmVyc2lvbnNcbiAgICAgICAgICAgICAgICAvLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG4gICAgICAgICAgICAgICAgaWYgKG5ld0NvbnRleHQgJiYgKGVsZW0gPSBuZXdDb250ZXh0LmdldEVsZW1lbnRCeUlkKG0pKSAmJiBjb250YWlucyhjb250ZXh0LCBlbGVtKSAmJiBlbGVtLmlkID09PSBtKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZWxlbSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gLy8gVHlwZSBzZWxlY3RvclxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoWzJdKSB7XG4gICAgICAgICAgICAgIHB1c2guYXBwbHkocmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcikpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0czsgLy8gQ2xhc3Mgc2VsZWN0b3JcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG0gPSBtYXRjaFszXSkgJiYgc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICBwdXNoLmFwcGx5KHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShtKSk7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gVGFrZSBhZHZhbnRhZ2Ugb2YgcXVlcnlTZWxlY3RvckFsbFxuXG5cbiAgICAgICAgICBpZiAoc3VwcG9ydC5xc2EgJiYgIW5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGVbc2VsZWN0b3IgKyBcIiBcIl0gJiYgKCFyYnVnZ3lRU0EgfHwgIXJidWdneVFTQS50ZXN0KHNlbGVjdG9yKSkgJiYgKCAvLyBTdXBwb3J0OiBJRSA4IG9ubHlcbiAgICAgICAgICAvLyBFeGNsdWRlIG9iamVjdCBlbGVtZW50c1xuICAgICAgICAgIG5vZGVUeXBlICE9PSAxIHx8IGNvbnRleHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBuZXdDb250ZXh0ID0gY29udGV4dDsgLy8gcVNBIGNvbnNpZGVycyBlbGVtZW50cyBvdXRzaWRlIGEgc2NvcGluZyByb290IHdoZW4gZXZhbHVhdGluZyBjaGlsZCBvclxuICAgICAgICAgICAgLy8gZGVzY2VuZGFudCBjb21iaW5hdG9ycywgd2hpY2ggaXMgbm90IHdoYXQgd2Ugd2FudC5cbiAgICAgICAgICAgIC8vIEluIHN1Y2ggY2FzZXMsIHdlIHdvcmsgYXJvdW5kIHRoZSBiZWhhdmlvciBieSBwcmVmaXhpbmcgZXZlcnkgc2VsZWN0b3IgaW4gdGhlXG4gICAgICAgICAgICAvLyBsaXN0IHdpdGggYW4gSUQgc2VsZWN0b3IgcmVmZXJlbmNpbmcgdGhlIHNjb3BlIGNvbnRleHQuXG4gICAgICAgICAgICAvLyBUaGFua3MgdG8gQW5kcmV3IER1cG9udCBmb3IgdGhpcyB0ZWNobmlxdWUuXG5cbiAgICAgICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSAmJiByZGVzY2VuZC50ZXN0KHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAvLyBDYXB0dXJlIHRoZSBjb250ZXh0IElELCBzZXR0aW5nIGl0IGZpcnN0IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICBpZiAobmlkID0gY29udGV4dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgIG5pZCA9IG5pZC5yZXBsYWNlKHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgbmlkID0gZXhwYW5kbyk7XG4gICAgICAgICAgICAgIH0gLy8gUHJlZml4IGV2ZXJ5IHNlbGVjdG9yIGluIHRoZSBsaXN0XG5cblxuICAgICAgICAgICAgICBncm91cHMgPSB0b2tlbml6ZShzZWxlY3Rvcik7XG4gICAgICAgICAgICAgIGkgPSBncm91cHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICBncm91cHNbaV0gPSBcIiNcIiArIG5pZCArIFwiIFwiICsgdG9TZWxlY3Rvcihncm91cHNbaV0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbmV3U2VsZWN0b3IgPSBncm91cHMuam9pbihcIixcIik7IC8vIEV4cGFuZCBjb250ZXh0IGZvciBzaWJsaW5nIHNlbGVjdG9yc1xuXG4gICAgICAgICAgICAgIG5ld0NvbnRleHQgPSByc2libGluZy50ZXN0KHNlbGVjdG9yKSAmJiB0ZXN0Q29udGV4dChjb250ZXh0LnBhcmVudE5vZGUpIHx8IGNvbnRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHB1c2guYXBwbHkocmVzdWx0cywgbmV3Q29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKG5ld1NlbGVjdG9yKSk7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgfSBjYXRjaCAocXNhRXJyb3IpIHtcbiAgICAgICAgICAgICAgbm9ubmF0aXZlU2VsZWN0b3JDYWNoZShzZWxlY3RvciwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBpZiAobmlkID09PSBleHBhbmRvKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBBbGwgb3RoZXJzXG5cblxuICAgICAgcmV0dXJuIHNlbGVjdChzZWxlY3Rvci5yZXBsYWNlKHJ0cmltLCBcIiQxXCIpLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGtleS12YWx1ZSBjYWNoZXMgb2YgbGltaXRlZCBzaXplXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKHN0cmluZywgb2JqZWN0KX0gUmV0dXJucyB0aGUgT2JqZWN0IGRhdGEgYWZ0ZXIgc3RvcmluZyBpdCBvbiBpdHNlbGYgd2l0aFxuICAgICAqXHRwcm9wZXJ0eSBuYW1lIHRoZSAoc3BhY2Utc3VmZml4ZWQpIHN0cmluZyBhbmQgKGlmIHRoZSBjYWNoZSBpcyBsYXJnZXIgdGhhbiBFeHByLmNhY2hlTGVuZ3RoKVxuICAgICAqXHRkZWxldGluZyB0aGUgb2xkZXN0IGVudHJ5XG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgZnVuY3Rpb24gY2FjaGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICAvLyBVc2UgKGtleSArIFwiIFwiKSB0byBhdm9pZCBjb2xsaXNpb24gd2l0aCBuYXRpdmUgcHJvdG90eXBlIHByb3BlcnRpZXMgKHNlZSBJc3N1ZSAjMTU3KVxuICAgICAgICBpZiAoa2V5cy5wdXNoKGtleSArIFwiIFwiKSA+IEV4cHIuY2FjaGVMZW5ndGgpIHtcbiAgICAgICAgICAvLyBPbmx5IGtlZXAgdGhlIG1vc3QgcmVjZW50IGVudHJpZXNcbiAgICAgICAgICBkZWxldGUgY2FjaGVba2V5cy5zaGlmdCgpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWNoZVtrZXkgKyBcIiBcIl0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYXJrIGEgZnVuY3Rpb24gZm9yIHNwZWNpYWwgdXNlIGJ5IFNpenpsZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtYXJrXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIG1hcmtGdW5jdGlvbihmbikge1xuICAgICAgZm5bZXhwYW5kb10gPSB0cnVlO1xuICAgICAgcmV0dXJuIGZuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IHRlc3RpbmcgdXNpbmcgYW4gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFBhc3NlZCB0aGUgY3JlYXRlZCBlbGVtZW50IGFuZCByZXR1cm5zIGEgYm9vbGVhbiByZXN1bHRcbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gYXNzZXJ0KGZuKSB7XG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIWZuKGVsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gaXRzIHBhcmVudCBieSBkZWZhdWx0XG4gICAgICAgIGlmIChlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIH0gLy8gcmVsZWFzZSBtZW1vcnkgaW4gSUVcblxuXG4gICAgICAgIGVsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgc2FtZSBoYW5kbGVyIGZvciBhbGwgb2YgdGhlIHNwZWNpZmllZCBhdHRyc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhdHRycyBQaXBlLXNlcGFyYXRlZCBsaXN0IG9mIGF0dHJpYnV0ZXNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIGFwcGxpZWRcbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gYWRkSGFuZGxlKGF0dHJzLCBoYW5kbGVyKSB7XG4gICAgICB2YXIgYXJyID0gYXR0cnMuc3BsaXQoXCJ8XCIpLFxuICAgICAgICAgIGkgPSBhcnIubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIEV4cHIuYXR0ckhhbmRsZVthcnJbaV1dID0gaGFuZGxlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGRvY3VtZW50IG9yZGVyIG9mIHR3byBzaWJsaW5nc1xuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gYVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gYlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IFJldHVybnMgbGVzcyB0aGFuIDAgaWYgYSBwcmVjZWRlcyBiLCBncmVhdGVyIHRoYW4gMCBpZiBhIGZvbGxvd3MgYlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBzaWJsaW5nQ2hlY2soYSwgYikge1xuICAgICAgdmFyIGN1ciA9IGIgJiYgYSxcbiAgICAgICAgICBkaWZmID0gY3VyICYmIGEubm9kZVR5cGUgPT09IDEgJiYgYi5ub2RlVHlwZSA9PT0gMSAmJiBhLnNvdXJjZUluZGV4IC0gYi5zb3VyY2VJbmRleDsgLy8gVXNlIElFIHNvdXJjZUluZGV4IGlmIGF2YWlsYWJsZSBvbiBib3RoIG5vZGVzXG5cbiAgICAgIGlmIChkaWZmKSB7XG4gICAgICAgIHJldHVybiBkaWZmO1xuICAgICAgfSAvLyBDaGVjayBpZiBiIGZvbGxvd3MgYVxuXG5cbiAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgd2hpbGUgKGN1ciA9IGN1ci5uZXh0U2libGluZykge1xuICAgICAgICAgIGlmIChjdXIgPT09IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGEgPyAxIDogLTE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgaW5wdXQgdHlwZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbnB1dFBzZXVkbyh0eXBlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBidXR0b25zXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQnV0dG9uUHNldWRvKHR5cGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICB2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIChuYW1lID09PSBcImlucHV0XCIgfHwgbmFtZSA9PT0gXCJidXR0b25cIikgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciA6ZW5hYmxlZC86ZGlzYWJsZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRpc2FibGVkIHRydWUgZm9yIDpkaXNhYmxlZDsgZmFsc2UgZm9yIDplbmFibGVkXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURpc2FibGVkUHNldWRvKGRpc2FibGVkKSB7XG4gICAgICAvLyBLbm93biA6ZGlzYWJsZWQgZmFsc2UgcG9zaXRpdmVzOiBmaWVsZHNldFtkaXNhYmxlZF0gPiBsZWdlbmQ6bnRoLW9mLXR5cGUobisyKSA6Y2FuLWRpc2FibGVcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAvLyBPbmx5IGNlcnRhaW4gZWxlbWVudHMgY2FuIG1hdGNoIDplbmFibGVkIG9yIDpkaXNhYmxlZFxuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1lbmFibGVkXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWRpc2FibGVkXG4gICAgICAgIGlmIChcImZvcm1cIiBpbiBlbGVtKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIGluaGVyaXRlZCBkaXNhYmxlZG5lc3Mgb24gcmVsZXZhbnQgbm9uLWRpc2FibGVkIGVsZW1lbnRzOlxuICAgICAgICAgIC8vICogbGlzdGVkIGZvcm0tYXNzb2NpYXRlZCBlbGVtZW50cyBpbiBhIGRpc2FibGVkIGZpZWxkc2V0XG4gICAgICAgICAgLy8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuICAgICAgICAgIC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LWZlLWRpc2FibGVkXG4gICAgICAgICAgLy8gKiBvcHRpb24gZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuICAgICAgICAgIC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuICAgICAgICAgIC8vIEFsbCBzdWNoIGVsZW1lbnRzIGhhdmUgYSBcImZvcm1cIiBwcm9wZXJ0eS5cbiAgICAgICAgICBpZiAoZWxlbS5wYXJlbnROb2RlICYmIGVsZW0uZGlzYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBPcHRpb24gZWxlbWVudHMgZGVmZXIgdG8gYSBwYXJlbnQgb3B0Z3JvdXAgaWYgcHJlc2VudFxuICAgICAgICAgICAgaWYgKFwibGFiZWxcIiBpbiBlbGVtKSB7XG4gICAgICAgICAgICAgIGlmIChcImxhYmVsXCIgaW4gZWxlbS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ucGFyZW50Tm9kZS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIFN1cHBvcnQ6IElFIDYgLSAxMVxuICAgICAgICAgICAgLy8gVXNlIHRoZSBpc0Rpc2FibGVkIHNob3J0Y3V0IHByb3BlcnR5IHRvIGNoZWNrIGZvciBkaXNhYmxlZCBmaWVsZHNldCBhbmNlc3RvcnNcblxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbS5pc0Rpc2FibGVkID09PSBkaXNhYmxlZCB8fCAvLyBXaGVyZSB0aGVyZSBpcyBubyBpc0Rpc2FibGVkLCBjaGVjayBtYW51YWxseVxuXG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwMTggKi9cbiAgICAgICAgICAgIGVsZW0uaXNEaXNhYmxlZCAhPT0gIWRpc2FibGVkICYmIGluRGlzYWJsZWRGaWVsZHNldChlbGVtKSA9PT0gZGlzYWJsZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkOyAvLyBUcnkgdG8gd2lubm93IG91dCBlbGVtZW50cyB0aGF0IGNhbid0IGJlIGRpc2FibGVkIGJlZm9yZSB0cnVzdGluZyB0aGUgZGlzYWJsZWQgcHJvcGVydHkuXG4gICAgICAgICAgLy8gU29tZSB2aWN0aW1zIGdldCBjYXVnaHQgaW4gb3VyIG5ldCAobGFiZWwsIGxlZ2VuZCwgbWVudSwgdHJhY2spLCBidXQgaXQgc2hvdWxkbid0XG4gICAgICAgICAgLy8gZXZlbiBleGlzdCBvbiB0aGVtLCBsZXQgYWxvbmUgaGF2ZSBhIGJvb2xlYW4gdmFsdWUuXG4gICAgICAgIH0gZWxzZSBpZiAoXCJsYWJlbFwiIGluIGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG4gICAgICAgIH0gLy8gUmVtYWluaW5nIGVsZW1lbnRzIGFyZSBuZWl0aGVyIDplbmFibGVkIG5vciA6ZGlzYWJsZWRcblxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgcG9zaXRpb25hbHNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZuKSB7XG4gICAgICByZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgICBhcmd1bWVudCA9ICthcmd1bWVudDtcbiAgICAgICAgcmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiAoc2VlZCwgbWF0Y2hlcykge1xuICAgICAgICAgIHZhciBqLFxuICAgICAgICAgICAgICBtYXRjaEluZGV4ZXMgPSBmbihbXSwgc2VlZC5sZW5ndGgsIGFyZ3VtZW50KSxcbiAgICAgICAgICAgICAgaSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7IC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xuXG4gICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgaWYgKHNlZWRbaiA9IG1hdGNoSW5kZXhlc1tpXV0pIHtcbiAgICAgICAgICAgICAgc2VlZFtqXSA9ICEobWF0Y2hlc1tqXSA9IHNlZWRbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGEgbm9kZSBmb3IgdmFsaWRpdHkgYXMgYSBTaXp6bGUgY29udGV4dFxuICAgICAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3Q9fSBjb250ZXh0XG4gICAgICogQHJldHVybnMge0VsZW1lbnR8T2JqZWN0fEJvb2xlYW59IFRoZSBpbnB1dCBub2RlIGlmIGFjY2VwdGFibGUsIG90aGVyd2lzZSBhIGZhbHN5IHZhbHVlXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHRlc3RDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnRleHQ7XG4gICAgfSAvLyBFeHBvc2Ugc3VwcG9ydCB2YXJzIGZvciBjb252ZW5pZW5jZVxuXG5cbiAgICBzdXBwb3J0ID0gU2l6emxlLnN1cHBvcnQgPSB7fTtcbiAgICAvKipcbiAgICAgKiBEZXRlY3RzIFhNTCBub2Rlc1xuICAgICAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IGVsZW0gQW4gZWxlbWVudCBvciBhIGRvY3VtZW50XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWZmIGVsZW0gaXMgYSBub24tSFRNTCBYTUwgbm9kZVxuICAgICAqL1xuXG4gICAgaXNYTUwgPSBTaXp6bGUuaXNYTUwgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgdmFyIG5hbWVzcGFjZSA9IGVsZW0ubmFtZXNwYWNlVVJJLFxuICAgICAgICAgIGRvY0VsZW0gPSAoZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0pLmRvY3VtZW50RWxlbWVudDsgLy8gU3VwcG9ydDogSUUgPD04XG4gICAgICAvLyBBc3N1bWUgSFRNTCB3aGVuIGRvY3VtZW50RWxlbWVudCBkb2Vzbid0IHlldCBleGlzdCwgc3VjaCBhcyBpbnNpZGUgbG9hZGluZyBpZnJhbWVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvNDgzM1xuXG4gICAgICByZXR1cm4gIXJodG1sLnRlc3QobmFtZXNwYWNlIHx8IGRvY0VsZW0gJiYgZG9jRWxlbS5ub2RlTmFtZSB8fCBcIkhUTUxcIik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGRvY3VtZW50LXJlbGF0ZWQgdmFyaWFibGVzIG9uY2UgYmFzZWQgb24gdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBbZG9jXSBBbiBlbGVtZW50IG9yIGRvY3VtZW50IG9iamVjdCB0byB1c2UgdG8gc2V0IHRoZSBkb2N1bWVudFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAgICAgKi9cblxuXG4gICAgc2V0RG9jdW1lbnQgPSBTaXp6bGUuc2V0RG9jdW1lbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGhhc0NvbXBhcmUsXG4gICAgICAgICAgc3ViV2luZG93LFxuICAgICAgICAgIGRvYyA9IG5vZGUgPyBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZSA6IHByZWZlcnJlZERvYzsgLy8gUmV0dXJuIGVhcmx5IGlmIGRvYyBpcyBpbnZhbGlkIG9yIGFscmVhZHkgc2VsZWN0ZWRcblxuICAgICAgaWYgKGRvYyA9PT0gZG9jdW1lbnQgfHwgZG9jLm5vZGVUeXBlICE9PSA5IHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgIH0gLy8gVXBkYXRlIGdsb2JhbCB2YXJpYWJsZXNcblxuXG4gICAgICBkb2N1bWVudCA9IGRvYztcbiAgICAgIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBkb2N1bWVudElzSFRNTCA9ICFpc1hNTChkb2N1bWVudCk7IC8vIFN1cHBvcnQ6IElFIDktMTEsIEVkZ2VcbiAgICAgIC8vIEFjY2Vzc2luZyBpZnJhbWUgZG9jdW1lbnRzIGFmdGVyIHVubG9hZCB0aHJvd3MgXCJwZXJtaXNzaW9uIGRlbmllZFwiIGVycm9ycyAoalF1ZXJ5ICMxMzkzNilcblxuICAgICAgaWYgKHByZWZlcnJlZERvYyAhPT0gZG9jdW1lbnQgJiYgKHN1YldpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3KSAmJiBzdWJXaW5kb3cudG9wICE9PSBzdWJXaW5kb3cpIHtcbiAgICAgICAgLy8gU3VwcG9ydDogSUUgMTEsIEVkZ2VcbiAgICAgICAgaWYgKHN1YldpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgc3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgdW5sb2FkSGFuZGxlciwgZmFsc2UpOyAvLyBTdXBwb3J0OiBJRSA5IC0gMTAgb25seVxuICAgICAgICB9IGVsc2UgaWYgKHN1YldpbmRvdy5hdHRhY2hFdmVudCkge1xuICAgICAgICAgIHN1YldpbmRvdy5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsIHVubG9hZEhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiBBdHRyaWJ1dGVzXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgICAvLyBTdXBwb3J0OiBJRTw4XG4gICAgICAvLyBWZXJpZnkgdGhhdCBnZXRBdHRyaWJ1dGUgcmVhbGx5IHJldHVybnMgYXR0cmlidXRlcyBhbmQgbm90IHByb3BlcnRpZXNcbiAgICAgIC8vIChleGNlcHRpbmcgSUU4IGJvb2xlYW5zKVxuXG5cbiAgICAgIHN1cHBvcnQuYXR0cmlidXRlcyA9IGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gXCJpXCI7XG4gICAgICAgIHJldHVybiAhZWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpO1xuICAgICAgfSk7XG4gICAgICAvKiBnZXRFbGVtZW50KHMpQnkqXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgICAvLyBDaGVjayBpZiBnZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikgcmV0dXJucyBvbmx5IGVsZW1lbnRzXG5cbiAgICAgIHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJcIikpO1xuICAgICAgICByZXR1cm4gIWVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XG4gICAgICB9KTsgLy8gU3VwcG9ydDogSUU8OVxuXG4gICAgICBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSBybmF0aXZlLnRlc3QoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSk7IC8vIFN1cHBvcnQ6IElFPDEwXG4gICAgICAvLyBDaGVjayBpZiBnZXRFbGVtZW50QnlJZCByZXR1cm5zIGVsZW1lbnRzIGJ5IG5hbWVcbiAgICAgIC8vIFRoZSBicm9rZW4gZ2V0RWxlbWVudEJ5SWQgbWV0aG9kcyBkb24ndCBwaWNrIHVwIHByb2dyYW1tYXRpY2FsbHktc2V0IG5hbWVzLFxuICAgICAgLy8gc28gdXNlIGEgcm91bmRhYm91dCBnZXRFbGVtZW50c0J5TmFtZSB0ZXN0XG5cbiAgICAgIHN1cHBvcnQuZ2V0QnlJZCA9IGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZG9jRWxlbS5hcHBlbmRDaGlsZChlbCkuaWQgPSBleHBhbmRvO1xuICAgICAgICByZXR1cm4gIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lIHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShleHBhbmRvKS5sZW5ndGg7XG4gICAgICB9KTsgLy8gSUQgZmlsdGVyIGFuZCBmaW5kXG5cbiAgICAgIGlmIChzdXBwb3J0LmdldEJ5SWQpIHtcbiAgICAgICAgRXhwci5maWx0ZXJbXCJJRFwiXSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIHZhciBhdHRySWQgPSBpZC5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKTtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBhdHRySWQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBFeHByLmZpbmRbXCJJRFwiXSA9IGZ1bmN0aW9uIChpZCwgY29udGV4dCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCkge1xuICAgICAgICAgICAgdmFyIGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtID8gW2VsZW1dIDogW107XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRXhwci5maWx0ZXJbXCJJRFwiXSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIHZhciBhdHRySWQgPSBpZC5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKTtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlTm9kZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlICYmIG5vZGUudmFsdWUgPT09IGF0dHJJZDtcbiAgICAgICAgICB9O1xuICAgICAgICB9OyAvLyBTdXBwb3J0OiBJRSA2IC0gNyBvbmx5XG4gICAgICAgIC8vIGdldEVsZW1lbnRCeUlkIGlzIG5vdCByZWxpYWJsZSBhcyBhIGZpbmQgc2hvcnRjdXRcblxuXG4gICAgICAgIEV4cHIuZmluZFtcIklEXCJdID0gZnVuY3Rpb24gKGlkLCBjb250ZXh0KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIGVsZW1zLFxuICAgICAgICAgICAgICAgIGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgICAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICAgICAgLy8gVmVyaWZ5IHRoZSBpZCBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgbm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuXG4gICAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUudmFsdWUgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtlbGVtXTtcbiAgICAgICAgICAgICAgfSAvLyBGYWxsIGJhY2sgb24gZ2V0RWxlbWVudHNCeU5hbWVcblxuXG4gICAgICAgICAgICAgIGVsZW1zID0gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZShpZCk7XG4gICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgIHdoaWxlIChlbGVtID0gZWxlbXNbaSsrXSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUudmFsdWUgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW2VsZW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSAvLyBUYWdcblxuXG4gICAgICBFeHByLmZpbmRbXCJUQUdcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlUYWdOYW1lID8gZnVuY3Rpb24gKHRhZywgY29udGV4dCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpOyAvLyBEb2N1bWVudEZyYWdtZW50IG5vZGVzIGRvbid0IGhhdmUgZ0VCVE5cbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnFzYSkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwodGFnKTtcbiAgICAgICAgfVxuICAgICAgfSA6IGZ1bmN0aW9uICh0YWcsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGVsZW0sXG4gICAgICAgICAgICB0bXAgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgLy8gQnkgaGFwcHkgY29pbmNpZGVuY2UsIGEgKGJyb2tlbikgZ0VCVE4gYXBwZWFycyBvbiBEb2N1bWVudEZyYWdtZW50IG5vZGVzIHRvb1xuICAgICAgICByZXN1bHRzID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpOyAvLyBGaWx0ZXIgb3V0IHBvc3NpYmxlIGNvbW1lbnRzXG5cbiAgICAgICAgaWYgKHRhZyA9PT0gXCIqXCIpIHtcbiAgICAgICAgICB3aGlsZSAoZWxlbSA9IHJlc3VsdHNbaSsrXSkge1xuICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgdG1wLnB1c2goZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfTsgLy8gQ2xhc3NcblxuICAgICAgRXhwci5maW5kW1wiQ0xBU1NcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgZnVuY3Rpb24gKGNsYXNzTmFtZSwgY29udGV4dCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIC8qIFFTQS9tYXRjaGVzU2VsZWN0b3JcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAgIC8vIFFTQSBhbmQgbWF0Y2hlc1NlbGVjdG9yIHN1cHBvcnRcbiAgICAgIC8vIG1hdGNoZXNTZWxlY3Rvcig6YWN0aXZlKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoSUU5L09wZXJhIDExLjUpXG5cblxuICAgICAgcmJ1Z2d5TWF0Y2hlcyA9IFtdOyAvLyBxU2EoOmZvY3VzKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoQ2hyb21lIDIxKVxuICAgICAgLy8gV2UgYWxsb3cgdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIElFOC85IHRoYXQgdGhyb3dzIGFuIGVycm9yXG4gICAgICAvLyB3aGVuZXZlciBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgaXMgYWNjZXNzZWQgb24gYW4gaWZyYW1lXG4gICAgICAvLyBTbywgd2UgYWxsb3cgOmZvY3VzIHRvIHBhc3MgdGhyb3VnaCBRU0EgYWxsIHRoZSB0aW1lIHRvIGF2b2lkIHRoZSBJRSBlcnJvclxuICAgICAgLy8gU2VlIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMzM3OFxuXG4gICAgICByYnVnZ3lRU0EgPSBbXTtcblxuICAgICAgaWYgKHN1cHBvcnQucXNhID0gcm5hdGl2ZS50ZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpKSB7XG4gICAgICAgIC8vIEJ1aWxkIFFTQSByZWdleFxuICAgICAgICAvLyBSZWdleCBzdHJhdGVneSBhZG9wdGVkIGZyb20gRGllZ28gUGVyaW5pXG4gICAgICAgIGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAvLyBTZWxlY3QgaXMgc2V0IHRvIGVtcHR5IHN0cmluZyBvbiBwdXJwb3NlXG4gICAgICAgICAgLy8gVGhpcyBpcyB0byB0ZXN0IElFJ3MgdHJlYXRtZW50IG9mIG5vdCBleHBsaWNpdGx5XG4gICAgICAgICAgLy8gc2V0dGluZyBhIGJvb2xlYW4gY29udGVudCBhdHRyaWJ1dGUsXG4gICAgICAgICAgLy8gc2luY2UgaXRzIHByZXNlbmNlIHNob3VsZCBiZSBlbm91Z2hcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTIzNTlcbiAgICAgICAgICBkb2NFbGVtLmFwcGVuZENoaWxkKGVsKS5pbm5lckhUTUwgPSBcIjxhIGlkPSdcIiArIGV4cGFuZG8gKyBcIic+PC9hPlwiICsgXCI8c2VsZWN0IGlkPSdcIiArIGV4cGFuZG8gKyBcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz5cIiArIFwiPG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIjsgLy8gU3VwcG9ydDogSUU4LCBPcGVyYSAxMS0xMi4xNlxuICAgICAgICAgIC8vIE5vdGhpbmcgc2hvdWxkIGJlIHNlbGVjdGVkIHdoZW4gZW1wdHkgc3RyaW5ncyBmb2xsb3cgXj0gb3IgJD0gb3IgKj1cbiAgICAgICAgICAvLyBUaGUgdGVzdCBhdHRyaWJ1dGUgbXVzdCBiZSB1bmtub3duIGluIE9wZXJhIGJ1dCBcInNhZmVcIiBmb3IgV2luUlRcbiAgICAgICAgICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2hoNDY1Mzg4LmFzcHgjYXR0cmlidXRlX3NlY3Rpb25cblxuICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIlsqXiRdPVwiICsgd2hpdGVzcGFjZSArIFwiKig/OicnfFxcXCJcXFwiKVwiKTtcbiAgICAgICAgICB9IC8vIFN1cHBvcnQ6IElFOFxuICAgICAgICAgIC8vIEJvb2xlYW4gYXR0cmlidXRlcyBhbmQgXCJ2YWx1ZVwiIGFyZSBub3QgdHJlYXRlZCBjb3JyZWN0bHlcblxuXG4gICAgICAgICAgaWYgKCFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooPzp2YWx1ZXxcIiArIGJvb2xlYW5zICsgXCIpXCIpO1xuICAgICAgICAgIH0gLy8gU3VwcG9ydDogQ2hyb21lPDI5LCBBbmRyb2lkPDQuNCwgU2FmYXJpPDcuMCssIGlPUzw3LjArLCBQaGFudG9tSlM8MS45LjgrXG5cblxuICAgICAgICAgIGlmICghZWwucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIgKyBleHBhbmRvICsgXCItXVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwifj1cIik7XG4gICAgICAgICAgfSAvLyBXZWJraXQvT3BlcmEgLSA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIHNlbGVjdGVkIG9wdGlvbiBlbGVtZW50c1xuICAgICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXG4gICAgICAgICAgLy8gSUU4IHRocm93cyBlcnJvciBoZXJlIGFuZCB3aWxsIG5vdCBzZWUgbGF0ZXIgdGVzdHNcblxuXG4gICAgICAgICAgaWYgKCFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIjpjaGVja2VkXCIpO1xuICAgICAgICAgIH0gLy8gU3VwcG9ydDogU2FmYXJpIDgrLCBpT1MgOCtcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM2ODUxXG4gICAgICAgICAgLy8gSW4tcGFnZSBgc2VsZWN0b3IjaWQgc2libGluZy1jb21iaW5hdG9yIHNlbGVjdG9yYCBmYWlsc1xuXG5cbiAgICAgICAgICBpZiAoIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiICsgZXhwYW5kbyArIFwiKypcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIi4jLitbK35dXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+XCIgKyBcIjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjsgLy8gU3VwcG9ydDogV2luZG93cyA4IE5hdGl2ZSBBcHBzXG4gICAgICAgICAgLy8gVGhlIHR5cGUgYW5kIG5hbWUgYXR0cmlidXRlcyBhcmUgcmVzdHJpY3RlZCBkdXJpbmcgLmlubmVySFRNTCBhc3NpZ25tZW50XG5cbiAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChpbnB1dCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkRcIik7IC8vIFN1cHBvcnQ6IElFOFxuICAgICAgICAgIC8vIEVuZm9yY2UgY2FzZS1zZW5zaXRpdml0eSBvZiBuYW1lIGF0dHJpYnV0ZVxuXG4gICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwibmFtZVwiICsgd2hpdGVzcGFjZSArIFwiKlsqXiR8IX5dPz1cIik7XG4gICAgICAgICAgfSAvLyBGRiAzLjUgLSA6ZW5hYmxlZC86ZGlzYWJsZWQgYW5kIGhpZGRlbiBlbGVtZW50cyAoaGlkZGVuIGVsZW1lbnRzIGFyZSBzdGlsbCBlbmFibGVkKVxuICAgICAgICAgIC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cblxuICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIpO1xuICAgICAgICAgIH0gLy8gU3VwcG9ydDogSUU5LTExK1xuICAgICAgICAgIC8vIElFJ3MgOmRpc2FibGVkIHNlbGVjdG9yIGRvZXMgbm90IHBpY2sgdXAgdGhlIGNoaWxkcmVuIG9mIGRpc2FibGVkIGZpZWxkc2V0c1xuXG5cbiAgICAgICAgICBkb2NFbGVtLmFwcGVuZENoaWxkKGVsKS5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIik7XG4gICAgICAgICAgfSAvLyBPcGVyYSAxMC0xMSBkb2VzIG5vdCB0aHJvdyBvbiBwb3N0LWNvbW1hIGludmFsaWQgcHNldWRvc1xuXG5cbiAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKTtcbiAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIiwuKjpcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgPSBybmF0aXZlLnRlc3QobWF0Y2hlcyA9IGRvY0VsZW0ubWF0Y2hlcyB8fCBkb2NFbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBkb2NFbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBkb2NFbGVtLm9NYXRjaGVzU2VsZWN0b3IgfHwgZG9jRWxlbS5tc01hdGNoZXNTZWxlY3RvcikpIHtcbiAgICAgICAgYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIGRvIG1hdGNoZXNTZWxlY3RvclxuICAgICAgICAgIC8vIG9uIGEgZGlzY29ubmVjdGVkIG5vZGUgKElFIDkpXG4gICAgICAgICAgc3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCA9IG1hdGNoZXMuY2FsbChlbCwgXCIqXCIpOyAvLyBUaGlzIHNob3VsZCBmYWlsIHdpdGggYW4gZXhjZXB0aW9uXG4gICAgICAgICAgLy8gR2Vja28gZG9lcyBub3QgZXJyb3IsIHJldHVybnMgZmFsc2UgaW5zdGVhZFxuXG4gICAgICAgICAgbWF0Y2hlcy5jYWxsKGVsLCBcIltzIT0nJ106eFwiKTtcbiAgICAgICAgICByYnVnZ3lNYXRjaGVzLnB1c2goXCIhPVwiLCBwc2V1ZG9zKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJidWdneVFTQSA9IHJidWdneVFTQS5sZW5ndGggJiYgbmV3IFJlZ0V4cChyYnVnZ3lRU0Euam9pbihcInxcIikpO1xuICAgICAgcmJ1Z2d5TWF0Y2hlcyA9IHJidWdneU1hdGNoZXMubGVuZ3RoICYmIG5ldyBSZWdFeHAocmJ1Z2d5TWF0Y2hlcy5qb2luKFwifFwiKSk7XG4gICAgICAvKiBDb250YWluc1xuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgICBoYXNDb21wYXJlID0gcm5hdGl2ZS50ZXN0KGRvY0VsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24pOyAvLyBFbGVtZW50IGNvbnRhaW5zIGFub3RoZXJcbiAgICAgIC8vIFB1cnBvc2VmdWxseSBzZWxmLWV4Y2x1c2l2ZVxuICAgICAgLy8gQXMgaW4sIGFuIGVsZW1lbnQgZG9lcyBub3QgY29udGFpbiBpdHNlbGZcblxuICAgICAgY29udGFpbnMgPSBoYXNDb21wYXJlIHx8IHJuYXRpdmUudGVzdChkb2NFbGVtLmNvbnRhaW5zKSA/IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBhZG93biA9IGEubm9kZVR5cGUgPT09IDkgPyBhLmRvY3VtZW50RWxlbWVudCA6IGEsXG4gICAgICAgICAgICBidXAgPSBiICYmIGIucGFyZW50Tm9kZTtcbiAgICAgICAgcmV0dXJuIGEgPT09IGJ1cCB8fCAhIShidXAgJiYgYnVwLm5vZGVUeXBlID09PSAxICYmIChhZG93bi5jb250YWlucyA/IGFkb3duLmNvbnRhaW5zKGJ1cCkgOiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYnVwKSAmIDE2KSk7XG4gICAgICB9IDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICB3aGlsZSAoYiA9IGIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKGIgPT09IGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICAgIC8qIFNvcnRpbmdcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAgIC8vIERvY3VtZW50IG9yZGVyIHNvcnRpbmdcblxuICAgICAgc29ydE9yZGVyID0gaGFzQ29tcGFyZSA/IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIC8vIEZsYWcgZm9yIGR1cGxpY2F0ZSByZW1vdmFsXG4gICAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgICAgaGFzRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSAvLyBTb3J0IG9uIG1ldGhvZCBleGlzdGVuY2UgaWYgb25seSBvbmUgaW5wdXQgaGFzIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uXG5cblxuICAgICAgICB2YXIgY29tcGFyZSA9ICFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIC0gIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247XG5cbiAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGFyZTtcbiAgICAgICAgfSAvLyBDYWxjdWxhdGUgcG9zaXRpb24gaWYgYm90aCBpbnB1dHMgYmVsb25nIHRvIHRoZSBzYW1lIGRvY3VtZW50XG5cblxuICAgICAgICBjb21wYXJlID0gKGEub3duZXJEb2N1bWVudCB8fCBhKSA9PT0gKGIub3duZXJEb2N1bWVudCB8fCBiKSA/IGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikgOiAvLyBPdGhlcndpc2Ugd2Uga25vdyB0aGV5IGFyZSBkaXNjb25uZWN0ZWRcbiAgICAgICAgMTsgLy8gRGlzY29ubmVjdGVkIG5vZGVzXG5cbiAgICAgICAgaWYgKGNvbXBhcmUgJiAxIHx8ICFzdXBwb3J0LnNvcnREZXRhY2hlZCAmJiBiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpID09PSBjb21wYXJlKSB7XG4gICAgICAgICAgLy8gQ2hvb3NlIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaXMgcmVsYXRlZCB0byBvdXIgcHJlZmVycmVkIGRvY3VtZW50XG4gICAgICAgICAgaWYgKGEgPT09IGRvY3VtZW50IHx8IGEub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYSkpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYiA9PT0gZG9jdW1lbnQgfHwgYi5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBiKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfSAvLyBNYWludGFpbiBvcmlnaW5hbCBvcmRlclxuXG5cbiAgICAgICAgICByZXR1cm4gc29ydElucHV0ID8gaW5kZXhPZihzb3J0SW5wdXQsIGEpIC0gaW5kZXhPZihzb3J0SW5wdXQsIGIpIDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wYXJlICYgNCA/IC0xIDogMTtcbiAgICAgIH0gOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyBFeGl0IGVhcmx5IGlmIHRoZSBub2RlcyBhcmUgaWRlbnRpY2FsXG4gICAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgICAgaGFzRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXIsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGF1cCA9IGEucGFyZW50Tm9kZSxcbiAgICAgICAgICAgIGJ1cCA9IGIucGFyZW50Tm9kZSxcbiAgICAgICAgICAgIGFwID0gW2FdLFxuICAgICAgICAgICAgYnAgPSBbYl07IC8vIFBhcmVudGxlc3Mgbm9kZXMgYXJlIGVpdGhlciBkb2N1bWVudHMgb3IgZGlzY29ubmVjdGVkXG5cbiAgICAgICAgaWYgKCFhdXAgfHwgIWJ1cCkge1xuICAgICAgICAgIHJldHVybiBhID09PSBkb2N1bWVudCA/IC0xIDogYiA9PT0gZG9jdW1lbnQgPyAxIDogYXVwID8gLTEgOiBidXAgPyAxIDogc29ydElucHV0ID8gaW5kZXhPZihzb3J0SW5wdXQsIGEpIC0gaW5kZXhPZihzb3J0SW5wdXQsIGIpIDogMDsgLy8gSWYgdGhlIG5vZGVzIGFyZSBzaWJsaW5ncywgd2UgY2FuIGRvIGEgcXVpY2sgY2hlY2tcbiAgICAgICAgfSBlbHNlIGlmIChhdXAgPT09IGJ1cCkge1xuICAgICAgICAgIHJldHVybiBzaWJsaW5nQ2hlY2soYSwgYik7XG4gICAgICAgIH0gLy8gT3RoZXJ3aXNlIHdlIG5lZWQgZnVsbCBsaXN0cyBvZiB0aGVpciBhbmNlc3RvcnMgZm9yIGNvbXBhcmlzb25cblxuXG4gICAgICAgIGN1ciA9IGE7XG5cbiAgICAgICAgd2hpbGUgKGN1ciA9IGN1ci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgYXAudW5zaGlmdChjdXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyID0gYjtcblxuICAgICAgICB3aGlsZSAoY3VyID0gY3VyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBicC51bnNoaWZ0KGN1cik7XG4gICAgICAgIH0gLy8gV2FsayBkb3duIHRoZSB0cmVlIGxvb2tpbmcgZm9yIGEgZGlzY3JlcGFuY3lcblxuXG4gICAgICAgIHdoaWxlIChhcFtpXSA9PT0gYnBbaV0pIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaSA/IC8vIERvIGEgc2libGluZyBjaGVjayBpZiB0aGUgbm9kZXMgaGF2ZSBhIGNvbW1vbiBhbmNlc3RvclxuICAgICAgICBzaWJsaW5nQ2hlY2soYXBbaV0sIGJwW2ldKSA6IC8vIE90aGVyd2lzZSBub2RlcyBpbiBvdXIgZG9jdW1lbnQgc29ydCBmaXJzdFxuICAgICAgICBhcFtpXSA9PT0gcHJlZmVycmVkRG9jID8gLTEgOiBicFtpXSA9PT0gcHJlZmVycmVkRG9jID8gMSA6IDA7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH07XG5cbiAgICBTaXp6bGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChleHByLCBlbGVtZW50cykge1xuICAgICAgcmV0dXJuIFNpenpsZShleHByLCBudWxsLCBudWxsLCBlbGVtZW50cyk7XG4gICAgfTtcblxuICAgIFNpenpsZS5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiAoZWxlbSwgZXhwcikge1xuICAgICAgLy8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG4gICAgICBpZiAoKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKSAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgc2V0RG9jdW1lbnQoZWxlbSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciAmJiBkb2N1bWVudElzSFRNTCAmJiAhbm9ubmF0aXZlU2VsZWN0b3JDYWNoZVtleHByICsgXCIgXCJdICYmICghcmJ1Z2d5TWF0Y2hlcyB8fCAhcmJ1Z2d5TWF0Y2hlcy50ZXN0KGV4cHIpKSAmJiAoIXJidWdneVFTQSB8fCAhcmJ1Z2d5UVNBLnRlc3QoZXhwcikpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHJldCA9IG1hdGNoZXMuY2FsbChlbGVtLCBleHByKTsgLy8gSUUgOSdzIG1hdGNoZXNTZWxlY3RvciByZXR1cm5zIGZhbHNlIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuXG4gICAgICAgICAgaWYgKHJldCB8fCBzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoIHx8IC8vIEFzIHdlbGwsIGRpc2Nvbm5lY3RlZCBub2RlcyBhcmUgc2FpZCB0byBiZSBpbiBhIGRvY3VtZW50XG4gICAgICAgICAgLy8gZnJhZ21lbnQgaW4gSUUgOVxuICAgICAgICAgIGVsZW0uZG9jdW1lbnQgJiYgZWxlbS5kb2N1bWVudC5ub2RlVHlwZSAhPT0gMTEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbm9ubmF0aXZlU2VsZWN0b3JDYWNoZShleHByLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gU2l6emxlKGV4cHIsIGRvY3VtZW50LCBudWxsLCBbZWxlbV0pLmxlbmd0aCA+IDA7XG4gICAgfTtcblxuICAgIFNpenpsZS5jb250YWlucyA9IGZ1bmN0aW9uIChjb250ZXh0LCBlbGVtKSB7XG4gICAgICAvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcbiAgICAgIGlmICgoY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQpICE9PSBkb2N1bWVudCkge1xuICAgICAgICBzZXREb2N1bWVudChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRhaW5zKGNvbnRleHQsIGVsZW0pO1xuICAgIH07XG5cbiAgICBTaXp6bGUuYXR0ciA9IGZ1bmN0aW9uIChlbGVtLCBuYW1lKSB7XG4gICAgICAvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcbiAgICAgIGlmICgoZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0pICE9PSBkb2N1bWVudCkge1xuICAgICAgICBzZXREb2N1bWVudChlbGVtKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZuID0gRXhwci5hdHRySGFuZGxlW25hbWUudG9Mb3dlckNhc2UoKV0sXG4gICAgICAgICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKGpRdWVyeSAjMTM4MDcpXG4gICAgICB2YWwgPSBmbiAmJiBoYXNPd24uY2FsbChFeHByLmF0dHJIYW5kbGUsIG5hbWUudG9Mb3dlckNhc2UoKSkgPyBmbihlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwpIDogdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDogc3VwcG9ydC5hdHRyaWJ1dGVzIHx8ICFkb2N1bWVudElzSFRNTCA/IGVsZW0uZ2V0QXR0cmlidXRlKG5hbWUpIDogKHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShuYW1lKSkgJiYgdmFsLnNwZWNpZmllZCA/IHZhbC52YWx1ZSA6IG51bGw7XG4gICAgfTtcblxuICAgIFNpenpsZS5lc2NhcGUgPSBmdW5jdGlvbiAoc2VsKSB7XG4gICAgICByZXR1cm4gKHNlbCArIFwiXCIpLnJlcGxhY2UocmNzc2VzY2FwZSwgZmNzc2VzY2FwZSk7XG4gICAgfTtcblxuICAgIFNpenpsZS5lcnJvciA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiICsgbXNnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERvY3VtZW50IHNvcnRpbmcgYW5kIHJlbW92aW5nIGR1cGxpY2F0ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5TGlrZX0gcmVzdWx0c1xuICAgICAqL1xuXG5cbiAgICBTaXp6bGUudW5pcXVlU29ydCA9IGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICB2YXIgZWxlbSxcbiAgICAgICAgICBkdXBsaWNhdGVzID0gW10sXG4gICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgaSA9IDA7IC8vIFVubGVzcyB3ZSAqa25vdyogd2UgY2FuIGRldGVjdCBkdXBsaWNhdGVzLCBhc3N1bWUgdGhlaXIgcHJlc2VuY2VcblxuICAgICAgaGFzRHVwbGljYXRlID0gIXN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcztcbiAgICAgIHNvcnRJbnB1dCA9ICFzdXBwb3J0LnNvcnRTdGFibGUgJiYgcmVzdWx0cy5zbGljZSgwKTtcbiAgICAgIHJlc3VsdHMuc29ydChzb3J0T3JkZXIpO1xuXG4gICAgICBpZiAoaGFzRHVwbGljYXRlKSB7XG4gICAgICAgIHdoaWxlIChlbGVtID0gcmVzdWx0c1tpKytdKSB7XG4gICAgICAgICAgaWYgKGVsZW0gPT09IHJlc3VsdHNbaV0pIHtcbiAgICAgICAgICAgIGogPSBkdXBsaWNhdGVzLnB1c2goaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAgIHJlc3VsdHMuc3BsaWNlKGR1cGxpY2F0ZXNbal0sIDEpO1xuICAgICAgICB9XG4gICAgICB9IC8vIENsZWFyIGlucHV0IGFmdGVyIHNvcnRpbmcgdG8gcmVsZWFzZSBvYmplY3RzXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvcHVsbC8yMjVcblxuXG4gICAgICBzb3J0SW5wdXQgPSBudWxsO1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIGZvciByZXRyaWV2aW5nIHRoZSB0ZXh0IHZhbHVlIG9mIGFuIGFycmF5IG9mIERPTSBub2Rlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl8RWxlbWVudH0gZWxlbVxuICAgICAqL1xuXG5cbiAgICBnZXRUZXh0ID0gU2l6emxlLmdldFRleHQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgdmFyIG5vZGUsXG4gICAgICAgICAgcmV0ID0gXCJcIixcbiAgICAgICAgICBpID0gMCxcbiAgICAgICAgICBub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cbiAgICAgIGlmICghbm9kZVR5cGUpIHtcbiAgICAgICAgLy8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcbiAgICAgICAgd2hpbGUgKG5vZGUgPSBlbGVtW2krK10pIHtcbiAgICAgICAgICAvLyBEbyBub3QgdHJhdmVyc2UgY29tbWVudCBub2Rlc1xuICAgICAgICAgIHJldCArPSBnZXRUZXh0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGVUeXBlID09PSAxIHx8IG5vZGVUeXBlID09PSA5IHx8IG5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAvLyBVc2UgdGV4dENvbnRlbnQgZm9yIGVsZW1lbnRzXG4gICAgICAgIC8vIGlubmVyVGV4dCB1c2FnZSByZW1vdmVkIGZvciBjb25zaXN0ZW5jeSBvZiBuZXcgbGluZXMgKGpRdWVyeSAjMTExNTMpXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHJldHVybiBlbGVtLnRleHRDb250ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRyYXZlcnNlIGl0cyBjaGlsZHJlblxuICAgICAgICAgIGZvciAoZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIHJldCArPSBnZXRUZXh0KGVsZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlVHlwZSA9PT0gMyB8fCBub2RlVHlwZSA9PT0gNCkge1xuICAgICAgICByZXR1cm4gZWxlbS5ub2RlVmFsdWU7XG4gICAgICB9IC8vIERvIG5vdCBpbmNsdWRlIGNvbW1lbnQgb3IgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiBub2Rlc1xuXG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIEV4cHIgPSBTaXp6bGUuc2VsZWN0b3JzID0ge1xuICAgICAgLy8gQ2FuIGJlIGFkanVzdGVkIGJ5IHRoZSB1c2VyXG4gICAgICBjYWNoZUxlbmd0aDogNTAsXG4gICAgICBjcmVhdGVQc2V1ZG86IG1hcmtGdW5jdGlvbixcbiAgICAgIG1hdGNoOiBtYXRjaEV4cHIsXG4gICAgICBhdHRySGFuZGxlOiB7fSxcbiAgICAgIGZpbmQ6IHt9LFxuICAgICAgcmVsYXRpdmU6IHtcbiAgICAgICAgXCI+XCI6IHtcbiAgICAgICAgICBkaXI6IFwicGFyZW50Tm9kZVwiLFxuICAgICAgICAgIGZpcnN0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiIFwiOiB7XG4gICAgICAgICAgZGlyOiBcInBhcmVudE5vZGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIitcIjoge1xuICAgICAgICAgIGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIixcbiAgICAgICAgICBmaXJzdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIn5cIjoge1xuICAgICAgICAgIGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlRmlsdGVyOiB7XG4gICAgICAgIFwiQVRUUlwiOiBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICBtYXRjaFsxXSA9IG1hdGNoWzFdLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpOyAvLyBNb3ZlIHRoZSBnaXZlbiB2YWx1ZSB0byBtYXRjaFszXSB3aGV0aGVyIHF1b3RlZCBvciB1bnF1b3RlZFxuXG4gICAgICAgICAgbWF0Y2hbM10gPSAobWF0Y2hbM10gfHwgbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIikucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG5cbiAgICAgICAgICBpZiAobWF0Y2hbMl0gPT09IFwifj1cIikge1xuICAgICAgICAgICAgbWF0Y2hbM10gPSBcIiBcIiArIG1hdGNoWzNdICsgXCIgXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnNsaWNlKDAsIDQpO1xuICAgICAgICB9LFxuICAgICAgICBcIkNISUxEXCI6IGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgIC8qIG1hdGNoZXMgZnJvbSBtYXRjaEV4cHJbXCJDSElMRFwiXVxuICAgICAgICAgIFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXG4gICAgICAgICAgXHQyIHdoYXQgKGNoaWxkfG9mLXR5cGUpXG4gICAgICAgICAgXHQzIGFyZ3VtZW50IChldmVufG9kZHxcXGQqfFxcZCpuKFsrLV1cXGQrKT98Li4uKVxuICAgICAgICAgIFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXG4gICAgICAgICAgXHQ1IHNpZ24gb2YgeG4tY29tcG9uZW50XG4gICAgICAgICAgXHQ2IHggb2YgeG4tY29tcG9uZW50XG4gICAgICAgICAgXHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcbiAgICAgICAgICBcdDggeSBvZiB5LWNvbXBvbmVudFxuICAgICAgICAgICovXG4gICAgICAgICAgbWF0Y2hbMV0gPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKG1hdGNoWzFdLnNsaWNlKDAsIDMpID09PSBcIm50aFwiKSB7XG4gICAgICAgICAgICAvLyBudGgtKiByZXF1aXJlcyBhcmd1bWVudFxuICAgICAgICAgICAgaWYgKCFtYXRjaFszXSkge1xuICAgICAgICAgICAgICBTaXp6bGUuZXJyb3IobWF0Y2hbMF0pO1xuICAgICAgICAgICAgfSAvLyBudW1lcmljIHggYW5kIHkgcGFyYW1ldGVycyBmb3IgRXhwci5maWx0ZXIuQ0hJTERcbiAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoYXQgZmFsc2UvdHJ1ZSBjYXN0IHJlc3BlY3RpdmVseSB0byAwLzFcblxuXG4gICAgICAgICAgICBtYXRjaFs0XSA9ICsobWF0Y2hbNF0gPyBtYXRjaFs1XSArIChtYXRjaFs2XSB8fCAxKSA6IDIgKiAobWF0Y2hbM10gPT09IFwiZXZlblwiIHx8IG1hdGNoWzNdID09PSBcIm9kZFwiKSk7XG4gICAgICAgICAgICBtYXRjaFs1XSA9ICsobWF0Y2hbN10gKyBtYXRjaFs4XSB8fCBtYXRjaFszXSA9PT0gXCJvZGRcIik7IC8vIG90aGVyIHR5cGVzIHByb2hpYml0IGFyZ3VtZW50c1xuICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2hbM10pIHtcbiAgICAgICAgICAgIFNpenpsZS5lcnJvcihtYXRjaFswXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9LFxuICAgICAgICBcIlBTRVVET1wiOiBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICB2YXIgZXhjZXNzLFxuICAgICAgICAgICAgICB1bnF1b3RlZCA9ICFtYXRjaFs2XSAmJiBtYXRjaFsyXTtcblxuICAgICAgICAgIGlmIChtYXRjaEV4cHJbXCJDSElMRFwiXS50ZXN0KG1hdGNoWzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSAvLyBBY2NlcHQgcXVvdGVkIGFyZ3VtZW50cyBhcy1pc1xuXG5cbiAgICAgICAgICBpZiAobWF0Y2hbM10pIHtcbiAgICAgICAgICAgIG1hdGNoWzJdID0gbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIjsgLy8gU3RyaXAgZXhjZXNzIGNoYXJhY3RlcnMgZnJvbSB1bnF1b3RlZCBhcmd1bWVudHNcbiAgICAgICAgICB9IGVsc2UgaWYgKHVucXVvdGVkICYmIHJwc2V1ZG8udGVzdCh1bnF1b3RlZCkgJiYgKCAvLyBHZXQgZXhjZXNzIGZyb20gdG9rZW5pemUgKHJlY3Vyc2l2ZWx5KVxuICAgICAgICAgIGV4Y2VzcyA9IHRva2VuaXplKHVucXVvdGVkLCB0cnVlKSkgJiYgKCAvLyBhZHZhbmNlIHRvIHRoZSBuZXh0IGNsb3NpbmcgcGFyZW50aGVzaXNcbiAgICAgICAgICBleGNlc3MgPSB1bnF1b3RlZC5pbmRleE9mKFwiKVwiLCB1bnF1b3RlZC5sZW5ndGggLSBleGNlc3MpIC0gdW5xdW90ZWQubGVuZ3RoKSkge1xuICAgICAgICAgICAgLy8gZXhjZXNzIGlzIGEgbmVnYXRpdmUgaW5kZXhcbiAgICAgICAgICAgIG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoMCwgZXhjZXNzKTtcbiAgICAgICAgICAgIG1hdGNoWzJdID0gdW5xdW90ZWQuc2xpY2UoMCwgZXhjZXNzKTtcbiAgICAgICAgICB9IC8vIFJldHVybiBvbmx5IGNhcHR1cmVzIG5lZWRlZCBieSB0aGUgcHNldWRvIGZpbHRlciBtZXRob2QgKHR5cGUgYW5kIGFyZ3VtZW50KVxuXG5cbiAgICAgICAgICByZXR1cm4gbWF0Y2guc2xpY2UoMCwgMyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmaWx0ZXI6IHtcbiAgICAgICAgXCJUQUdcIjogZnVuY3Rpb24gKG5vZGVOYW1lU2VsZWN0b3IpIHtcbiAgICAgICAgICB2YXIgbm9kZU5hbWUgPSBub2RlTmFtZVNlbGVjdG9yLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIG5vZGVOYW1lU2VsZWN0b3IgPT09IFwiKlwiID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSA6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5vZGVOYW1lO1xuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIFwiQ0xBU1NcIjogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgIHZhciBwYXR0ZXJuID0gY2xhc3NDYWNoZVtjbGFzc05hbWUgKyBcIiBcIl07XG4gICAgICAgICAgcmV0dXJuIHBhdHRlcm4gfHwgKHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwiKF58XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyBjbGFzc05hbWUgKyBcIihcIiArIHdoaXRlc3BhY2UgKyBcInwkKVwiKSkgJiYgY2xhc3NDYWNoZShjbGFzc05hbWUsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KHR5cGVvZiBlbGVtLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtLmNsYXNzTmFtZSB8fCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJBVFRSXCI6IGZ1bmN0aW9uIChuYW1lLCBvcGVyYXRvciwgY2hlY2spIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBTaXp6bGUuYXR0cihlbGVtLCBuYW1lKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvcGVyYXRvciA9PT0gXCIhPVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgKz0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiBvcGVyYXRvciA9PT0gXCI9XCIgPyByZXN1bHQgPT09IGNoZWNrIDogb3BlcmF0b3IgPT09IFwiIT1cIiA/IHJlc3VsdCAhPT0gY2hlY2sgOiBvcGVyYXRvciA9PT0gXCJePVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoY2hlY2spID09PSAwIDogb3BlcmF0b3IgPT09IFwiKj1cIiA/IGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKGNoZWNrKSA+IC0xIDogb3BlcmF0b3IgPT09IFwiJD1cIiA/IGNoZWNrICYmIHJlc3VsdC5zbGljZSgtY2hlY2subGVuZ3RoKSA9PT0gY2hlY2sgOiBvcGVyYXRvciA9PT0gXCJ+PVwiID8gKFwiIFwiICsgcmVzdWx0LnJlcGxhY2UocndoaXRlc3BhY2UsIFwiIFwiKSArIFwiIFwiKS5pbmRleE9mKGNoZWNrKSA+IC0xIDogb3BlcmF0b3IgPT09IFwifD1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgfHwgcmVzdWx0LnNsaWNlKDAsIGNoZWNrLmxlbmd0aCArIDEpID09PSBjaGVjayArIFwiLVwiIDogZmFsc2U7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJDSElMRFwiOiBmdW5jdGlvbiAodHlwZSwgd2hhdCwgYXJndW1lbnQsIGZpcnN0LCBsYXN0KSB7XG4gICAgICAgICAgdmFyIHNpbXBsZSA9IHR5cGUuc2xpY2UoMCwgMykgIT09IFwibnRoXCIsXG4gICAgICAgICAgICAgIGZvcndhcmQgPSB0eXBlLnNsaWNlKC00KSAhPT0gXCJsYXN0XCIsXG4gICAgICAgICAgICAgIG9mVHlwZSA9IHdoYXQgPT09IFwib2YtdHlwZVwiO1xuICAgICAgICAgIHJldHVybiBmaXJzdCA9PT0gMSAmJiBsYXN0ID09PSAwID8gLy8gU2hvcnRjdXQgZm9yIDpudGgtKihuKVxuICAgICAgICAgIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gISFlbGVtLnBhcmVudE5vZGU7XG4gICAgICAgICAgfSA6IGZ1bmN0aW9uIChlbGVtLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZSxcbiAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZSxcbiAgICAgICAgICAgICAgICBvdXRlckNhY2hlLFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgIGRpciA9IHNpbXBsZSAhPT0gZm9yd2FyZCA/IFwibmV4dFNpYmxpbmdcIiA6IFwicHJldmlvdXNTaWJsaW5nXCIsXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIG5hbWUgPSBvZlR5cGUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHVzZUNhY2hlID0gIXhtbCAmJiAhb2ZUeXBlLFxuICAgICAgICAgICAgICAgIGRpZmYgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAvLyA6KGZpcnN0fGxhc3R8b25seSktKGNoaWxkfG9mLXR5cGUpXG4gICAgICAgICAgICAgIGlmIChzaW1wbGUpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoZGlyKSB7XG4gICAgICAgICAgICAgICAgICBub2RlID0gZWxlbTtcblxuICAgICAgICAgICAgICAgICAgd2hpbGUgKG5vZGUgPSBub2RlW2Rpcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9mVHlwZSA/IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6IG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gLy8gUmV2ZXJzZSBkaXJlY3Rpb24gZm9yIDpvbmx5LSogKGlmIHdlIGhhdmVuJ3QgeWV0IGRvbmUgc28pXG5cblxuICAgICAgICAgICAgICAgICAgc3RhcnQgPSBkaXIgPSB0eXBlID09PSBcIm9ubHlcIiAmJiAhc3RhcnQgJiYgXCJuZXh0U2libGluZ1wiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3RhcnQgPSBbZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZF07IC8vIG5vbi14bWwgOm50aC1jaGlsZCguLi4pIHN0b3JlcyBjYWNoZSBkYXRhIG9uIGBwYXJlbnRgXG5cbiAgICAgICAgICAgICAgaWYgKGZvcndhcmQgJiYgdXNlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWVrIGBlbGVtYCBmcm9tIGEgcHJldmlvdXNseS1jYWNoZWQgaW5kZXhcbiAgICAgICAgICAgICAgICAvLyAuLi5pbiBhIGd6aXAtZnJpZW5kbHkgd2F5XG4gICAgICAgICAgICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICBvdXRlckNhY2hlID0gbm9kZVtleHBhbmRvXSB8fCAobm9kZVtleHBhbmRvXSA9IHt9KTsgLy8gU3VwcG9ydDogSUUgPDkgb25seVxuICAgICAgICAgICAgICAgIC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXG4gICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlW25vZGUudW5pcXVlSURdIHx8IChvdXRlckNhY2hlW25vZGUudW5pcXVlSURdID0ge30pO1xuICAgICAgICAgICAgICAgIGNhY2hlID0gdW5pcXVlQ2FjaGVbdHlwZV0gfHwgW107XG4gICAgICAgICAgICAgICAgbm9kZUluZGV4ID0gY2FjaGVbMF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbMV07XG4gICAgICAgICAgICAgICAgZGlmZiA9IG5vZGVJbmRleCAmJiBjYWNoZVsyXTtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZUluZGV4ICYmIHBhcmVudC5jaGlsZE5vZGVzW25vZGVJbmRleF07XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVtkaXJdIHx8ICggLy8gRmFsbGJhY2sgdG8gc2Vla2luZyBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICBkaWZmID0gbm9kZUluZGV4ID0gMCkgfHwgc3RhcnQucG9wKCkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFdoZW4gZm91bmQsIGNhY2hlIGluZGV4ZXMgb24gYHBhcmVudGAgYW5kIGJyZWFrXG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiArK2RpZmYgJiYgbm9kZSA9PT0gZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZVt0eXBlXSA9IFtkaXJydW5zLCBub2RlSW5kZXgsIGRpZmZdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlIHByZXZpb3VzbHktY2FjaGVkIGVsZW1lbnQgaW5kZXggaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgaWYgKHVzZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAvLyAuLi5pbiBhIGd6aXAtZnJpZW5kbHkgd2F5XG4gICAgICAgICAgICAgICAgICBub2RlID0gZWxlbTtcbiAgICAgICAgICAgICAgICAgIG91dGVyQ2FjaGUgPSBub2RlW2V4cGFuZG9dIHx8IChub2RlW2V4cGFuZG9dID0ge30pOyAvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG4gICAgICAgICAgICAgICAgICAvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblxuICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlW25vZGUudW5pcXVlSURdIHx8IChvdXRlckNhY2hlW25vZGUudW5pcXVlSURdID0ge30pO1xuICAgICAgICAgICAgICAgICAgY2FjaGUgPSB1bmlxdWVDYWNoZVt0eXBlXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgIG5vZGVJbmRleCA9IGNhY2hlWzBdID09PSBkaXJydW5zICYmIGNhY2hlWzFdO1xuICAgICAgICAgICAgICAgICAgZGlmZiA9IG5vZGVJbmRleDtcbiAgICAgICAgICAgICAgICB9IC8vIHhtbCA6bnRoLWNoaWxkKC4uLilcbiAgICAgICAgICAgICAgICAvLyBvciA6bnRoLWxhc3QtY2hpbGQoLi4uKSBvciA6bnRoKC1sYXN0KT8tb2YtdHlwZSguLi4pXG5cblxuICAgICAgICAgICAgICAgIGlmIChkaWZmID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBzYW1lIGxvb3AgYXMgYWJvdmUgdG8gc2VlayBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICAgIHdoaWxlIChub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlW2Rpcl0gfHwgKGRpZmYgPSBub2RlSW5kZXggPSAwKSB8fCBzdGFydC5wb3AoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKG9mVHlwZSA/IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6IG5vZGUubm9kZVR5cGUgPT09IDEpICYmICsrZGlmZikge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIENhY2hlIHRoZSBpbmRleCBvZiBlYWNoIGVuY291bnRlcmVkIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyQ2FjaGUgPSBub2RlW2V4cGFuZG9dIHx8IChub2RlW2V4cGFuZG9dID0ge30pOyAvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlW25vZGUudW5pcXVlSURdIHx8IChvdXRlckNhY2hlW25vZGUudW5pcXVlSURdID0ge30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGVbdHlwZV0gPSBbZGlycnVucywgZGlmZl07XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSAvLyBJbmNvcnBvcmF0ZSB0aGUgb2Zmc2V0LCB0aGVuIGNoZWNrIGFnYWluc3QgY3ljbGUgc2l6ZVxuXG5cbiAgICAgICAgICAgICAgZGlmZiAtPSBsYXN0O1xuICAgICAgICAgICAgICByZXR1cm4gZGlmZiA9PT0gZmlyc3QgfHwgZGlmZiAlIGZpcnN0ID09PSAwICYmIGRpZmYgLyBmaXJzdCA+PSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIFwiUFNFVURPXCI6IGZ1bmN0aW9uIChwc2V1ZG8sIGFyZ3VtZW50KSB7XG4gICAgICAgICAgLy8gcHNldWRvLWNsYXNzIG5hbWVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlXG4gICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNwc2V1ZG8tY2xhc3Nlc1xuICAgICAgICAgIC8vIFByaW9yaXRpemUgYnkgY2FzZSBzZW5zaXRpdml0eSBpbiBjYXNlIGN1c3RvbSBwc2V1ZG9zIGFyZSBhZGRlZCB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJzXG4gICAgICAgICAgLy8gUmVtZW1iZXIgdGhhdCBzZXRGaWx0ZXJzIGluaGVyaXRzIGZyb20gcHNldWRvc1xuICAgICAgICAgIHZhciBhcmdzLFxuICAgICAgICAgICAgICBmbiA9IEV4cHIucHNldWRvc1twc2V1ZG9dIHx8IEV4cHIuc2V0RmlsdGVyc1twc2V1ZG8udG9Mb3dlckNhc2UoKV0gfHwgU2l6emxlLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIiArIHBzZXVkbyk7IC8vIFRoZSB1c2VyIG1heSB1c2UgY3JlYXRlUHNldWRvIHRvIGluZGljYXRlIHRoYXRcbiAgICAgICAgICAvLyBhcmd1bWVudHMgYXJlIG5lZWRlZCB0byBjcmVhdGUgdGhlIGZpbHRlciBmdW5jdGlvblxuICAgICAgICAgIC8vIGp1c3QgYXMgU2l6emxlIGRvZXNcblxuICAgICAgICAgIGlmIChmbltleHBhbmRvXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZuKGFyZ3VtZW50KTtcbiAgICAgICAgICB9IC8vIEJ1dCBtYWludGFpbiBzdXBwb3J0IGZvciBvbGQgc2lnbmF0dXJlc1xuXG5cbiAgICAgICAgICBpZiAoZm4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgYXJncyA9IFtwc2V1ZG8sIHBzZXVkbywgXCJcIiwgYXJndW1lbnRdO1xuICAgICAgICAgICAgcmV0dXJuIEV4cHIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShwc2V1ZG8udG9Mb3dlckNhc2UoKSkgPyBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlZWQsIG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgdmFyIGlkeCxcbiAgICAgICAgICAgICAgICAgIG1hdGNoZWQgPSBmbihzZWVkLCBhcmd1bWVudCksXG4gICAgICAgICAgICAgICAgICBpID0gbWF0Y2hlZC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIGlkeCA9IGluZGV4T2Yoc2VlZCwgbWF0Y2hlZFtpXSk7XG4gICAgICAgICAgICAgICAgc2VlZFtpZHhdID0gIShtYXRjaGVzW2lkeF0gPSBtYXRjaGVkW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gZm4oZWxlbSwgMCwgYXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBzZXVkb3M6IHtcbiAgICAgICAgLy8gUG90ZW50aWFsbHkgY29tcGxleCBwc2V1ZG9zXG4gICAgICAgIFwibm90XCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAvLyBUcmltIHRoZSBzZWxlY3RvciBwYXNzZWQgdG8gY29tcGlsZVxuICAgICAgICAgIC8vIHRvIGF2b2lkIHRyZWF0aW5nIGxlYWRpbmcgYW5kIHRyYWlsaW5nXG4gICAgICAgICAgLy8gc3BhY2VzIGFzIGNvbWJpbmF0b3JzXG4gICAgICAgICAgdmFyIGlucHV0ID0gW10sXG4gICAgICAgICAgICAgIHJlc3VsdHMgPSBbXSxcbiAgICAgICAgICAgICAgbWF0Y2hlciA9IGNvbXBpbGUoc2VsZWN0b3IucmVwbGFjZShydHJpbSwgXCIkMVwiKSk7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXJbZXhwYW5kb10gPyBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlZWQsIG1hdGNoZXMsIGNvbnRleHQsIHhtbCkge1xuICAgICAgICAgICAgdmFyIGVsZW0sXG4gICAgICAgICAgICAgICAgdW5tYXRjaGVkID0gbWF0Y2hlcihzZWVkLCBudWxsLCB4bWwsIFtdKSxcbiAgICAgICAgICAgICAgICBpID0gc2VlZC5sZW5ndGg7IC8vIE1hdGNoIGVsZW1lbnRzIHVubWF0Y2hlZCBieSBgbWF0Y2hlcmBcblxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICBpZiAoZWxlbSA9IHVubWF0Y2hlZFtpXSkge1xuICAgICAgICAgICAgICAgIHNlZWRbaV0gPSAhKG1hdGNoZXNbaV0gPSBlbGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIDogZnVuY3Rpb24gKGVsZW0sIGNvbnRleHQsIHhtbCkge1xuICAgICAgICAgICAgaW5wdXRbMF0gPSBlbGVtO1xuICAgICAgICAgICAgbWF0Y2hlcihpbnB1dCwgbnVsbCwgeG1sLCByZXN1bHRzKTsgLy8gRG9uJ3Qga2VlcCB0aGUgZWxlbWVudCAoaXNzdWUgIzI5OSlcblxuICAgICAgICAgICAgaW5wdXRbMF0gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuICFyZXN1bHRzLnBvcCgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBcImhhc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gU2l6emxlKHNlbGVjdG9yLCBlbGVtKS5sZW5ndGggPiAwO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBcImNvbnRhaW5zXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpO1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIChlbGVtLnRleHRDb250ZW50IHx8IGdldFRleHQoZWxlbSkpLmluZGV4T2YodGV4dCkgPiAtMTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgLy8gXCJXaGV0aGVyIGFuIGVsZW1lbnQgaXMgcmVwcmVzZW50ZWQgYnkgYSA6bGFuZygpIHNlbGVjdG9yXG4gICAgICAgIC8vIGlzIGJhc2VkIHNvbGVseSBvbiB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlXG4gICAgICAgIC8vIGJlaW5nIGVxdWFsIHRvIHRoZSBpZGVudGlmaWVyIEMsXG4gICAgICAgIC8vIG9yIGJlZ2lubmluZyB3aXRoIHRoZSBpZGVudGlmaWVyIEMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgXCItXCIuXG4gICAgICAgIC8vIFRoZSBtYXRjaGluZyBvZiBDIGFnYWluc3QgdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZSBpcyBwZXJmb3JtZWQgY2FzZS1pbnNlbnNpdGl2ZWx5LlxuICAgICAgICAvLyBUaGUgaWRlbnRpZmllciBDIGRvZXMgbm90IGhhdmUgdG8gYmUgYSB2YWxpZCBsYW5ndWFnZSBuYW1lLlwiXG4gICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jbGFuZy1wc2V1ZG9cbiAgICAgICAgXCJsYW5nXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiAobGFuZykge1xuICAgICAgICAgIC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcbiAgICAgICAgICBpZiAoIXJpZGVudGlmaWVyLnRlc3QobGFuZyB8fCBcIlwiKSkge1xuICAgICAgICAgICAgU2l6emxlLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsYW5nID0gbGFuZy5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgdmFyIGVsZW1MYW5nO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIGlmIChlbGVtTGFuZyA9IGRvY3VtZW50SXNIVE1MID8gZWxlbS5sYW5nIDogZWxlbS5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKSB8fCBlbGVtLmdldEF0dHJpYnV0ZShcImxhbmdcIikpIHtcbiAgICAgICAgICAgICAgICBlbGVtTGFuZyA9IGVsZW1MYW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1MYW5nID09PSBsYW5nIHx8IGVsZW1MYW5nLmluZGV4T2YobGFuZyArIFwiLVwiKSA9PT0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAoKGVsZW0gPSBlbGVtLnBhcmVudE5vZGUpICYmIGVsZW0ubm9kZVR5cGUgPT09IDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIE1pc2NlbGxhbmVvdXNcbiAgICAgICAgXCJ0YXJnZXRcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgICByZXR1cm4gaGFzaCAmJiBoYXNoLnNsaWNlKDEpID09PSBlbGVtLmlkO1xuICAgICAgICB9LFxuICAgICAgICBcInJvb3RcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gZWxlbSA9PT0gZG9jRWxlbTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJmb2N1c1wiOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIHJldHVybiBlbGVtID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICghZG9jdW1lbnQuaGFzRm9jdXMgfHwgZG9jdW1lbnQuaGFzRm9jdXMoKSkgJiYgISEoZWxlbS50eXBlIHx8IGVsZW0uaHJlZiB8fCB+ZWxlbS50YWJJbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEJvb2xlYW4gcHJvcGVydGllc1xuICAgICAgICBcImVuYWJsZWRcIjogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oZmFsc2UpLFxuICAgICAgICBcImRpc2FibGVkXCI6IGNyZWF0ZURpc2FibGVkUHNldWRvKHRydWUpLFxuICAgICAgICBcImNoZWNrZWRcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAvLyBJbiBDU1MzLCA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIGJvdGggY2hlY2tlZCBhbmQgc2VsZWN0ZWQgZWxlbWVudHNcbiAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuICAgICAgICAgIHZhciBub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICByZXR1cm4gbm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiAhIWVsZW0uY2hlY2tlZCB8fCBub2RlTmFtZSA9PT0gXCJvcHRpb25cIiAmJiAhIWVsZW0uc2VsZWN0ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIFwic2VsZWN0ZWRcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAvLyBBY2Nlc3NpbmcgdGhpcyBwcm9wZXJ0eSBtYWtlcyBzZWxlY3RlZC1ieS1kZWZhdWx0XG4gICAgICAgICAgLy8gb3B0aW9ucyBpbiBTYWZhcmkgd29yayBwcm9wZXJseVxuICAgICAgICAgIGlmIChlbGVtLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGVsZW0ucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLnNlbGVjdGVkID09PSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICAvLyBDb250ZW50c1xuICAgICAgICBcImVtcHR5XCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNlbXB0eS1wc2V1ZG9cbiAgICAgICAgICAvLyA6ZW1wdHkgaXMgbmVnYXRlZCBieSBlbGVtZW50ICgxKSBvciBjb250ZW50IG5vZGVzICh0ZXh0OiAzOyBjZGF0YTogNDsgZW50aXR5IHJlZjogNSksXG4gICAgICAgICAgLy8gICBidXQgbm90IGJ5IG90aGVycyAoY29tbWVudDogODsgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbjogNzsgZXRjLilcbiAgICAgICAgICAvLyBub2RlVHlwZSA8IDYgd29ya3MgYmVjYXVzZSBhdHRyaWJ1dGVzICgyKSBkbyBub3QgYXBwZWFyIGFzIGNoaWxkcmVuXG4gICAgICAgICAgZm9yIChlbGVtID0gZWxlbS5maXJzdENoaWxkOyBlbGVtOyBlbGVtID0gZWxlbS5uZXh0U2libGluZykge1xuICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPCA2KSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXJlbnRcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gIUV4cHIucHNldWRvc1tcImVtcHR5XCJdKGVsZW0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBFbGVtZW50L2lucHV0IHR5cGVzXG4gICAgICAgIFwiaGVhZGVyXCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIHJoZWFkZXIudGVzdChlbGVtLm5vZGVOYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIHJldHVybiByaW5wdXRzLnRlc3QoZWxlbS5ub2RlTmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnV0dG9uXCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIG5hbWUgPT09IFwiaW5wdXRcIiAmJiBlbGVtLnR5cGUgPT09IFwiYnV0dG9uXCIgfHwgbmFtZSA9PT0gXCJidXR0b25cIjtcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0ZXh0XCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgdmFyIGF0dHI7XG4gICAgICAgICAgcmV0dXJuIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCIgJiYgKCAvLyBTdXBwb3J0OiBJRTw4XG4gICAgICAgICAgLy8gTmV3IEhUTUw1IGF0dHJpYnV0ZSB2YWx1ZXMgKGUuZy4sIFwic2VhcmNoXCIpIGFwcGVhciB3aXRoIGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCJcbiAgICAgICAgICAoYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkgPT0gbnVsbCB8fCBhdHRyLnRvTG93ZXJDYXNlKCkgPT09IFwidGV4dFwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUG9zaXRpb24taW4tY29sbGVjdGlvblxuICAgICAgICBcImZpcnN0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbMF07XG4gICAgICAgIH0pLFxuICAgICAgICBcImxhc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiAobWF0Y2hJbmRleGVzLCBsZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gW2xlbmd0aCAtIDFdO1xuICAgICAgICB9KSxcbiAgICAgICAgXCJlcVwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uIChtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gW2FyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnRdO1xuICAgICAgICB9KSxcbiAgICAgICAgXCJldmVuXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgbWF0Y2hJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1hdGNoSW5kZXhlcztcbiAgICAgICAgfSksXG4gICAgICAgIFwib2RkXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGkgPSAxO1xuXG4gICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgbWF0Y2hJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1hdGNoSW5kZXhlcztcbiAgICAgICAgfSksXG4gICAgICAgIFwibHRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiAobWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50KSB7XG4gICAgICAgICAgdmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50ID4gbGVuZ3RoID8gbGVuZ3RoIDogYXJndW1lbnQ7XG5cbiAgICAgICAgICBmb3IgKDsgLS1pID49IDA7KSB7XG4gICAgICAgICAgICBtYXRjaEluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbWF0Y2hJbmRleGVzO1xuICAgICAgICB9KSxcbiAgICAgICAgXCJndFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uIChtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQpIHtcbiAgICAgICAgICB2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XG5cbiAgICAgICAgICBmb3IgKDsgKytpIDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgbWF0Y2hJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1hdGNoSW5kZXhlcztcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9O1xuICAgIEV4cHIucHNldWRvc1tcIm50aFwiXSA9IEV4cHIucHNldWRvc1tcImVxXCJdOyAvLyBBZGQgYnV0dG9uL2lucHV0IHR5cGUgcHNldWRvc1xuXG4gICAgZm9yIChpIGluIHtcbiAgICAgIHJhZGlvOiB0cnVlLFxuICAgICAgY2hlY2tib3g6IHRydWUsXG4gICAgICBmaWxlOiB0cnVlLFxuICAgICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgICBpbWFnZTogdHJ1ZVxuICAgIH0pIHtcbiAgICAgIEV4cHIucHNldWRvc1tpXSA9IGNyZWF0ZUlucHV0UHNldWRvKGkpO1xuICAgIH1cblxuICAgIGZvciAoaSBpbiB7XG4gICAgICBzdWJtaXQ6IHRydWUsXG4gICAgICByZXNldDogdHJ1ZVxuICAgIH0pIHtcbiAgICAgIEV4cHIucHNldWRvc1tpXSA9IGNyZWF0ZUJ1dHRvblBzZXVkbyhpKTtcbiAgICB9IC8vIEVhc3kgQVBJIGZvciBjcmVhdGluZyBuZXcgc2V0RmlsdGVyc1xuXG5cbiAgICBmdW5jdGlvbiBzZXRGaWx0ZXJzKCkge31cblxuICAgIHNldEZpbHRlcnMucHJvdG90eXBlID0gRXhwci5maWx0ZXJzID0gRXhwci5wc2V1ZG9zO1xuICAgIEV4cHIuc2V0RmlsdGVycyA9IG5ldyBzZXRGaWx0ZXJzKCk7XG5cbiAgICB0b2tlbml6ZSA9IFNpenpsZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcGFyc2VPbmx5KSB7XG4gICAgICB2YXIgbWF0Y2hlZCxcbiAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBzb0ZhcixcbiAgICAgICAgICBncm91cHMsXG4gICAgICAgICAgcHJlRmlsdGVycyxcbiAgICAgICAgICBjYWNoZWQgPSB0b2tlbkNhY2hlW3NlbGVjdG9yICsgXCIgXCJdO1xuXG4gICAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgIHJldHVybiBwYXJzZU9ubHkgPyAwIDogY2FjaGVkLnNsaWNlKDApO1xuICAgICAgfVxuXG4gICAgICBzb0ZhciA9IHNlbGVjdG9yO1xuICAgICAgZ3JvdXBzID0gW107XG4gICAgICBwcmVGaWx0ZXJzID0gRXhwci5wcmVGaWx0ZXI7XG5cbiAgICAgIHdoaWxlIChzb0Zhcikge1xuICAgICAgICAvLyBDb21tYSBhbmQgZmlyc3QgcnVuXG4gICAgICAgIGlmICghbWF0Y2hlZCB8fCAobWF0Y2ggPSByY29tbWEuZXhlYyhzb0ZhcikpKSB7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBjb25zdW1lIHRyYWlsaW5nIGNvbW1hcyBhcyB2YWxpZFxuICAgICAgICAgICAgc29GYXIgPSBzb0Zhci5zbGljZShtYXRjaFswXS5sZW5ndGgpIHx8IHNvRmFyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGdyb3Vwcy5wdXNoKHRva2VucyA9IFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGNoZWQgPSBmYWxzZTsgLy8gQ29tYmluYXRvcnNcblxuICAgICAgICBpZiAobWF0Y2ggPSByY29tYmluYXRvcnMuZXhlYyhzb0ZhcikpIHtcbiAgICAgICAgICBtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcbiAgICAgICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZTogbWF0Y2hlZCxcbiAgICAgICAgICAgIC8vIENhc3QgZGVzY2VuZGFudCBjb21iaW5hdG9ycyB0byBzcGFjZVxuICAgICAgICAgICAgdHlwZTogbWF0Y2hbMF0ucmVwbGFjZShydHJpbSwgXCIgXCIpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc29GYXIgPSBzb0Zhci5zbGljZShtYXRjaGVkLmxlbmd0aCk7XG4gICAgICAgIH0gLy8gRmlsdGVyc1xuXG5cbiAgICAgICAgZm9yICh0eXBlIGluIEV4cHIuZmlsdGVyKSB7XG4gICAgICAgICAgaWYgKChtYXRjaCA9IG1hdGNoRXhwclt0eXBlXS5leGVjKHNvRmFyKSkgJiYgKCFwcmVGaWx0ZXJzW3R5cGVdIHx8IChtYXRjaCA9IHByZUZpbHRlcnNbdHlwZV0obWF0Y2gpKSkpIHtcbiAgICAgICAgICAgIG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICB2YWx1ZTogbWF0Y2hlZCxcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgbWF0Y2hlczogbWF0Y2hcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc29GYXIgPSBzb0Zhci5zbGljZShtYXRjaGVkLmxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGludmFsaWQgZXhjZXNzXG4gICAgICAvLyBpZiB3ZSdyZSBqdXN0IHBhcnNpbmdcbiAgICAgIC8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3Igb3IgcmV0dXJuIHRva2Vuc1xuXG5cbiAgICAgIHJldHVybiBwYXJzZU9ubHkgPyBzb0Zhci5sZW5ndGggOiBzb0ZhciA/IFNpenpsZS5lcnJvcihzZWxlY3RvcikgOiAvLyBDYWNoZSB0aGUgdG9rZW5zXG4gICAgICB0b2tlbkNhY2hlKHNlbGVjdG9yLCBncm91cHMpLnNsaWNlKDApO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB0b1NlbGVjdG9yKHRva2Vucykge1xuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgIGxlbiA9IHRva2Vucy5sZW5ndGgsXG4gICAgICAgICAgc2VsZWN0b3IgPSBcIlwiO1xuXG4gICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHNlbGVjdG9yICs9IHRva2Vuc1tpXS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZENvbWJpbmF0b3IobWF0Y2hlciwgY29tYmluYXRvciwgYmFzZSkge1xuICAgICAgdmFyIGRpciA9IGNvbWJpbmF0b3IuZGlyLFxuICAgICAgICAgIHNraXAgPSBjb21iaW5hdG9yLm5leHQsXG4gICAgICAgICAga2V5ID0gc2tpcCB8fCBkaXIsXG4gICAgICAgICAgY2hlY2tOb25FbGVtZW50cyA9IGJhc2UgJiYga2V5ID09PSBcInBhcmVudE5vZGVcIixcbiAgICAgICAgICBkb25lTmFtZSA9IGRvbmUrKztcbiAgICAgIHJldHVybiBjb21iaW5hdG9yLmZpcnN0ID8gLy8gQ2hlY2sgYWdhaW5zdCBjbG9zZXN0IGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50XG4gICAgICBmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgIHdoaWxlIChlbGVtID0gZWxlbVtkaXJdKSB7XG4gICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIoZWxlbSwgY29udGV4dCwgeG1sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IDogLy8gQ2hlY2sgYWdhaW5zdCBhbGwgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRzXG4gICAgICBmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgIHZhciBvbGRDYWNoZSxcbiAgICAgICAgICAgIHVuaXF1ZUNhY2hlLFxuICAgICAgICAgICAgb3V0ZXJDYWNoZSxcbiAgICAgICAgICAgIG5ld0NhY2hlID0gW2RpcnJ1bnMsIGRvbmVOYW1lXTsgLy8gV2UgY2FuJ3Qgc2V0IGFyYml0cmFyeSBkYXRhIG9uIFhNTCBub2Rlcywgc28gdGhleSBkb24ndCBiZW5lZml0IGZyb20gY29tYmluYXRvciBjYWNoaW5nXG5cbiAgICAgICAgaWYgKHhtbCkge1xuICAgICAgICAgIHdoaWxlIChlbGVtID0gZWxlbVtkaXJdKSB7XG4gICAgICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgIGlmIChtYXRjaGVyKGVsZW0sIGNvbnRleHQsIHhtbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aGlsZSAoZWxlbSA9IGVsZW1bZGlyXSkge1xuICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cykge1xuICAgICAgICAgICAgICBvdXRlckNhY2hlID0gZWxlbVtleHBhbmRvXSB8fCAoZWxlbVtleHBhbmRvXSA9IHt9KTsgLy8gU3VwcG9ydDogSUUgPDkgb25seVxuICAgICAgICAgICAgICAvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblxuICAgICAgICAgICAgICB1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbZWxlbS51bmlxdWVJRF0gfHwgKG91dGVyQ2FjaGVbZWxlbS51bmlxdWVJRF0gPSB7fSk7XG5cbiAgICAgICAgICAgICAgaWYgKHNraXAgJiYgc2tpcCA9PT0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW1bZGlyXSB8fCBlbGVtO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKChvbGRDYWNoZSA9IHVuaXF1ZUNhY2hlW2tleV0pICYmIG9sZENhY2hlWzBdID09PSBkaXJydW5zICYmIG9sZENhY2hlWzFdID09PSBkb25lTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB0byBuZXdDYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NhY2hlWzJdID0gb2xkQ2FjaGVbMl07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmV1c2UgbmV3Y2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHVuaXF1ZUNhY2hlW2tleV0gPSBuZXdDYWNoZTsgLy8gQSBtYXRjaCBtZWFucyB3ZSdyZSBkb25lOyBhIGZhaWwgbWVhbnMgd2UgaGF2ZSB0byBrZWVwIGNoZWNraW5nXG5cbiAgICAgICAgICAgICAgICBpZiAobmV3Q2FjaGVbMl0gPSBtYXRjaGVyKGVsZW0sIGNvbnRleHQsIHhtbCkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpIHtcbiAgICAgIHJldHVybiBtYXRjaGVycy5sZW5ndGggPiAxID8gZnVuY3Rpb24gKGVsZW0sIGNvbnRleHQsIHhtbCkge1xuICAgICAgICB2YXIgaSA9IG1hdGNoZXJzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgaWYgKCFtYXRjaGVyc1tpXShlbGVtLCBjb250ZXh0LCB4bWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IDogbWF0Y2hlcnNbMF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbXVsdGlwbGVDb250ZXh0cyhzZWxlY3RvciwgY29udGV4dHMsIHJlc3VsdHMpIHtcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICBsZW4gPSBjb250ZXh0cy5sZW5ndGg7XG5cbiAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgU2l6emxlKHNlbGVjdG9yLCBjb250ZXh0c1tpXSwgcmVzdWx0cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmRlbnNlKHVubWF0Y2hlZCwgbWFwLCBmaWx0ZXIsIGNvbnRleHQsIHhtbCkge1xuICAgICAgdmFyIGVsZW0sXG4gICAgICAgICAgbmV3VW5tYXRjaGVkID0gW10sXG4gICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgbGVuID0gdW5tYXRjaGVkLmxlbmd0aCxcbiAgICAgICAgICBtYXBwZWQgPSBtYXAgIT0gbnVsbDtcblxuICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZWxlbSA9IHVubWF0Y2hlZFtpXSkge1xuICAgICAgICAgIGlmICghZmlsdGVyIHx8IGZpbHRlcihlbGVtLCBjb250ZXh0LCB4bWwpKSB7XG4gICAgICAgICAgICBuZXdVbm1hdGNoZWQucHVzaChlbGVtKTtcblxuICAgICAgICAgICAgaWYgKG1hcHBlZCkge1xuICAgICAgICAgICAgICBtYXAucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1VubWF0Y2hlZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRNYXRjaGVyKHByZUZpbHRlciwgc2VsZWN0b3IsIG1hdGNoZXIsIHBvc3RGaWx0ZXIsIHBvc3RGaW5kZXIsIHBvc3RTZWxlY3Rvcikge1xuICAgICAgaWYgKHBvc3RGaWx0ZXIgJiYgIXBvc3RGaWx0ZXJbZXhwYW5kb10pIHtcbiAgICAgICAgcG9zdEZpbHRlciA9IHNldE1hdGNoZXIocG9zdEZpbHRlcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3N0RmluZGVyICYmICFwb3N0RmluZGVyW2V4cGFuZG9dKSB7XG4gICAgICAgIHBvc3RGaW5kZXIgPSBzZXRNYXRjaGVyKHBvc3RGaW5kZXIsIHBvc3RTZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlZWQsIHJlc3VsdHMsIGNvbnRleHQsIHhtbCkge1xuICAgICAgICB2YXIgdGVtcCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBlbGVtLFxuICAgICAgICAgICAgcHJlTWFwID0gW10sXG4gICAgICAgICAgICBwb3N0TWFwID0gW10sXG4gICAgICAgICAgICBwcmVleGlzdGluZyA9IHJlc3VsdHMubGVuZ3RoLFxuICAgICAgICAgICAgLy8gR2V0IGluaXRpYWwgZWxlbWVudHMgZnJvbSBzZWVkIG9yIGNvbnRleHRcbiAgICAgICAgZWxlbXMgPSBzZWVkIHx8IG11bHRpcGxlQ29udGV4dHMoc2VsZWN0b3IgfHwgXCIqXCIsIGNvbnRleHQubm9kZVR5cGUgPyBbY29udGV4dF0gOiBjb250ZXh0LCBbXSksXG4gICAgICAgICAgICAvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cbiAgICAgICAgbWF0Y2hlckluID0gcHJlRmlsdGVyICYmIChzZWVkIHx8ICFzZWxlY3RvcikgPyBjb25kZW5zZShlbGVtcywgcHJlTWFwLCBwcmVGaWx0ZXIsIGNvbnRleHQsIHhtbCkgOiBlbGVtcyxcbiAgICAgICAgICAgIG1hdGNoZXJPdXQgPSBtYXRjaGVyID8gLy8gSWYgd2UgaGF2ZSBhIHBvc3RGaW5kZXIsIG9yIGZpbHRlcmVkIHNlZWQsIG9yIG5vbi1zZWVkIHBvc3RGaWx0ZXIgb3IgcHJlZXhpc3RpbmcgcmVzdWx0cyxcbiAgICAgICAgcG9zdEZpbmRlciB8fCAoc2VlZCA/IHByZUZpbHRlciA6IHByZWV4aXN0aW5nIHx8IHBvc3RGaWx0ZXIpID8gLy8gLi4uaW50ZXJtZWRpYXRlIHByb2Nlc3NpbmcgaXMgbmVjZXNzYXJ5XG4gICAgICAgIFtdIDogLy8gLi4ub3RoZXJ3aXNlIHVzZSByZXN1bHRzIGRpcmVjdGx5XG4gICAgICAgIHJlc3VsdHMgOiBtYXRjaGVySW47IC8vIEZpbmQgcHJpbWFyeSBtYXRjaGVzXG5cbiAgICAgICAgaWYgKG1hdGNoZXIpIHtcbiAgICAgICAgICBtYXRjaGVyKG1hdGNoZXJJbiwgbWF0Y2hlck91dCwgY29udGV4dCwgeG1sKTtcbiAgICAgICAgfSAvLyBBcHBseSBwb3N0RmlsdGVyXG5cblxuICAgICAgICBpZiAocG9zdEZpbHRlcikge1xuICAgICAgICAgIHRlbXAgPSBjb25kZW5zZShtYXRjaGVyT3V0LCBwb3N0TWFwKTtcbiAgICAgICAgICBwb3N0RmlsdGVyKHRlbXAsIFtdLCBjb250ZXh0LCB4bWwpOyAvLyBVbi1tYXRjaCBmYWlsaW5nIGVsZW1lbnRzIGJ5IG1vdmluZyB0aGVtIGJhY2sgdG8gbWF0Y2hlckluXG5cbiAgICAgICAgICBpID0gdGVtcC5sZW5ndGg7XG5cbiAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBpZiAoZWxlbSA9IHRlbXBbaV0pIHtcbiAgICAgICAgICAgICAgbWF0Y2hlck91dFtwb3N0TWFwW2ldXSA9ICEobWF0Y2hlckluW3Bvc3RNYXBbaV1dID0gZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlZWQpIHtcbiAgICAgICAgICBpZiAocG9zdEZpbmRlciB8fCBwcmVGaWx0ZXIpIHtcbiAgICAgICAgICAgIGlmIChwb3N0RmluZGVyKSB7XG4gICAgICAgICAgICAgIC8vIEdldCB0aGUgZmluYWwgbWF0Y2hlck91dCBieSBjb25kZW5zaW5nIHRoaXMgaW50ZXJtZWRpYXRlIGludG8gcG9zdEZpbmRlciBjb250ZXh0c1xuICAgICAgICAgICAgICB0ZW1wID0gW107XG4gICAgICAgICAgICAgIGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblxuICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0gPSBtYXRjaGVyT3V0W2ldKSB7XG4gICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG1hdGNoZXJJbiBzaW5jZSBlbGVtIGlzIG5vdCB5ZXQgYSBmaW5hbCBtYXRjaFxuICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKG1hdGNoZXJJbltpXSA9IGVsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHBvc3RGaW5kZXIobnVsbCwgbWF0Y2hlck91dCA9IFtdLCB0ZW1wLCB4bWwpO1xuICAgICAgICAgICAgfSAvLyBNb3ZlIG1hdGNoZWQgZWxlbWVudHMgZnJvbSBzZWVkIHRvIHJlc3VsdHMgdG8ga2VlcCB0aGVtIHN5bmNocm9uaXplZFxuXG5cbiAgICAgICAgICAgIGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICBpZiAoKGVsZW0gPSBtYXRjaGVyT3V0W2ldKSAmJiAodGVtcCA9IHBvc3RGaW5kZXIgPyBpbmRleE9mKHNlZWQsIGVsZW0pIDogcHJlTWFwW2ldKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgc2VlZFt0ZW1wXSA9ICEocmVzdWx0c1t0ZW1wXSA9IGVsZW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBBZGQgZWxlbWVudHMgdG8gcmVzdWx0cywgdGhyb3VnaCBwb3N0RmluZGVyIGlmIGRlZmluZWRcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoZXJPdXQgPSBjb25kZW5zZShtYXRjaGVyT3V0ID09PSByZXN1bHRzID8gbWF0Y2hlck91dC5zcGxpY2UocHJlZXhpc3RpbmcsIG1hdGNoZXJPdXQubGVuZ3RoKSA6IG1hdGNoZXJPdXQpO1xuXG4gICAgICAgICAgaWYgKHBvc3RGaW5kZXIpIHtcbiAgICAgICAgICAgIHBvc3RGaW5kZXIobnVsbCwgcmVzdWx0cywgbWF0Y2hlck91dCwgeG1sKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVzaC5hcHBseShyZXN1bHRzLCBtYXRjaGVyT3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoZXJGcm9tVG9rZW5zKHRva2Vucykge1xuICAgICAgdmFyIGNoZWNrQ29udGV4dCxcbiAgICAgICAgICBtYXRjaGVyLFxuICAgICAgICAgIGosXG4gICAgICAgICAgbGVuID0gdG9rZW5zLmxlbmd0aCxcbiAgICAgICAgICBsZWFkaW5nUmVsYXRpdmUgPSBFeHByLnJlbGF0aXZlW3Rva2Vuc1swXS50eXBlXSxcbiAgICAgICAgICBpbXBsaWNpdFJlbGF0aXZlID0gbGVhZGluZ1JlbGF0aXZlIHx8IEV4cHIucmVsYXRpdmVbXCIgXCJdLFxuICAgICAgICAgIGkgPSBsZWFkaW5nUmVsYXRpdmUgPyAxIDogMCxcbiAgICAgICAgICAvLyBUaGUgZm91bmRhdGlvbmFsIG1hdGNoZXIgZW5zdXJlcyB0aGF0IGVsZW1lbnRzIGFyZSByZWFjaGFibGUgZnJvbSB0b3AtbGV2ZWwgY29udGV4dChzKVxuICAgICAgbWF0Y2hDb250ZXh0ID0gYWRkQ29tYmluYXRvcihmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZXR1cm4gZWxlbSA9PT0gY2hlY2tDb250ZXh0O1xuICAgICAgfSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSksXG4gICAgICAgICAgbWF0Y2hBbnlDb250ZXh0ID0gYWRkQ29tYmluYXRvcihmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZXR1cm4gaW5kZXhPZihjaGVja0NvbnRleHQsIGVsZW0pID4gLTE7XG4gICAgICB9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlKSxcbiAgICAgICAgICBtYXRjaGVycyA9IFtmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgIHZhciByZXQgPSAhbGVhZGluZ1JlbGF0aXZlICYmICh4bWwgfHwgY29udGV4dCAhPT0gb3V0ZXJtb3N0Q29udGV4dCkgfHwgKChjaGVja0NvbnRleHQgPSBjb250ZXh0KS5ub2RlVHlwZSA/IG1hdGNoQ29udGV4dChlbGVtLCBjb250ZXh0LCB4bWwpIDogbWF0Y2hBbnlDb250ZXh0KGVsZW0sIGNvbnRleHQsIHhtbCkpOyAvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudCAoaXNzdWUgIzI5OSlcblxuICAgICAgICBjaGVja0NvbnRleHQgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfV07XG5cbiAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKG1hdGNoZXIgPSBFeHByLnJlbGF0aXZlW3Rva2Vuc1tpXS50eXBlXSkge1xuICAgICAgICAgIG1hdGNoZXJzID0gW2FkZENvbWJpbmF0b3IoZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpLCBtYXRjaGVyKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlciA9IEV4cHIuZmlsdGVyW3Rva2Vuc1tpXS50eXBlXS5hcHBseShudWxsLCB0b2tlbnNbaV0ubWF0Y2hlcyk7IC8vIFJldHVybiBzcGVjaWFsIHVwb24gc2VlaW5nIGEgcG9zaXRpb25hbCBtYXRjaGVyXG5cbiAgICAgICAgICBpZiAobWF0Y2hlcltleHBhbmRvXSkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgbmV4dCByZWxhdGl2ZSBvcGVyYXRvciAoaWYgYW55KSBmb3IgcHJvcGVyIGhhbmRsaW5nXG4gICAgICAgICAgICBqID0gKytpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChFeHByLnJlbGF0aXZlW3Rva2Vuc1tqXS50eXBlXSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZXRNYXRjaGVyKGkgPiAxICYmIGVsZW1lbnRNYXRjaGVyKG1hdGNoZXJzKSwgaSA+IDEgJiYgdG9TZWxlY3RvciggLy8gSWYgdGhlIHByZWNlZGluZyB0b2tlbiB3YXMgYSBkZXNjZW5kYW50IGNvbWJpbmF0b3IsIGluc2VydCBhbiBpbXBsaWNpdCBhbnktZWxlbWVudCBgKmBcbiAgICAgICAgICAgIHRva2Vucy5zbGljZSgwLCBpIC0gMSkuY29uY2F0KHtcbiAgICAgICAgICAgICAgdmFsdWU6IHRva2Vuc1tpIC0gMl0udHlwZSA9PT0gXCIgXCIgPyBcIipcIiA6IFwiXCJcbiAgICAgICAgICAgIH0pKS5yZXBsYWNlKHJ0cmltLCBcIiQxXCIpLCBtYXRjaGVyLCBpIDwgaiAmJiBtYXRjaGVyRnJvbVRva2Vucyh0b2tlbnMuc2xpY2UoaSwgaikpLCBqIDwgbGVuICYmIG1hdGNoZXJGcm9tVG9rZW5zKHRva2VucyA9IHRva2Vucy5zbGljZShqKSksIGogPCBsZW4gJiYgdG9TZWxlY3Rvcih0b2tlbnMpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXRjaGVycy5wdXNoKG1hdGNoZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50TWF0Y2hlcihtYXRjaGVycyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMpIHtcbiAgICAgIHZhciBieVNldCA9IHNldE1hdGNoZXJzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgYnlFbGVtZW50ID0gZWxlbWVudE1hdGNoZXJzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgc3VwZXJNYXRjaGVyID0gZnVuY3Rpb24gKHNlZWQsIGNvbnRleHQsIHhtbCwgcmVzdWx0cywgb3V0ZXJtb3N0KSB7XG4gICAgICAgIHZhciBlbGVtLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIG1hdGNoZXIsXG4gICAgICAgICAgICBtYXRjaGVkQ291bnQgPSAwLFxuICAgICAgICAgICAgaSA9IFwiMFwiLFxuICAgICAgICAgICAgdW5tYXRjaGVkID0gc2VlZCAmJiBbXSxcbiAgICAgICAgICAgIHNldE1hdGNoZWQgPSBbXSxcbiAgICAgICAgICAgIGNvbnRleHRCYWNrdXAgPSBvdXRlcm1vc3RDb250ZXh0LFxuICAgICAgICAgICAgLy8gV2UgbXVzdCBhbHdheXMgaGF2ZSBlaXRoZXIgc2VlZCBlbGVtZW50cyBvciBvdXRlcm1vc3QgY29udGV4dFxuICAgICAgICBlbGVtcyA9IHNlZWQgfHwgYnlFbGVtZW50ICYmIEV4cHIuZmluZFtcIlRBR1wiXShcIipcIiwgb3V0ZXJtb3N0KSxcbiAgICAgICAgICAgIC8vIFVzZSBpbnRlZ2VyIGRpcnJ1bnMgaWZmIHRoaXMgaXMgdGhlIG91dGVybW9zdCBtYXRjaGVyXG4gICAgICAgIGRpcnJ1bnNVbmlxdWUgPSBkaXJydW5zICs9IGNvbnRleHRCYWNrdXAgPT0gbnVsbCA/IDEgOiBNYXRoLnJhbmRvbSgpIHx8IDAuMSxcbiAgICAgICAgICAgIGxlbiA9IGVsZW1zLmxlbmd0aDtcblxuICAgICAgICBpZiAob3V0ZXJtb3N0KSB7XG4gICAgICAgICAgb3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHQgPT09IGRvY3VtZW50IHx8IGNvbnRleHQgfHwgb3V0ZXJtb3N0O1xuICAgICAgICB9IC8vIEFkZCBlbGVtZW50cyBwYXNzaW5nIGVsZW1lbnRNYXRjaGVycyBkaXJlY3RseSB0byByZXN1bHRzXG4gICAgICAgIC8vIFN1cHBvcnQ6IElFPDksIFNhZmFyaVxuICAgICAgICAvLyBUb2xlcmF0ZSBOb2RlTGlzdCBwcm9wZXJ0aWVzIChJRTogXCJsZW5ndGhcIjsgU2FmYXJpOiA8bnVtYmVyPikgbWF0Y2hpbmcgZWxlbWVudHMgYnkgaWRcblxuXG4gICAgICAgIGZvciAoOyBpICE9PSBsZW4gJiYgKGVsZW0gPSBlbGVtc1tpXSkgIT0gbnVsbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGJ5RWxlbWVudCAmJiBlbGVtKSB7XG4gICAgICAgICAgICBqID0gMDtcblxuICAgICAgICAgICAgaWYgKCFjb250ZXh0ICYmIGVsZW0ub3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgc2V0RG9jdW1lbnQoZWxlbSk7XG4gICAgICAgICAgICAgIHhtbCA9ICFkb2N1bWVudElzSFRNTDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoZXIgPSBlbGVtZW50TWF0Y2hlcnNbaisrXSkge1xuICAgICAgICAgICAgICBpZiAobWF0Y2hlcihlbGVtLCBjb250ZXh0IHx8IGRvY3VtZW50LCB4bWwpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvdXRlcm1vc3QpIHtcbiAgICAgICAgICAgICAgZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBUcmFjayB1bm1hdGNoZWQgZWxlbWVudHMgZm9yIHNldCBmaWx0ZXJzXG5cblxuICAgICAgICAgIGlmIChieVNldCkge1xuICAgICAgICAgICAgLy8gVGhleSB3aWxsIGhhdmUgZ29uZSB0aHJvdWdoIGFsbCBwb3NzaWJsZSBtYXRjaGVyc1xuICAgICAgICAgICAgaWYgKGVsZW0gPSAhbWF0Y2hlciAmJiBlbGVtKSB7XG4gICAgICAgICAgICAgIG1hdGNoZWRDb3VudC0tO1xuICAgICAgICAgICAgfSAvLyBMZW5ndGhlbiB0aGUgYXJyYXkgZm9yIGV2ZXJ5IGVsZW1lbnQsIG1hdGNoZWQgb3Igbm90XG5cblxuICAgICAgICAgICAgaWYgKHNlZWQpIHtcbiAgICAgICAgICAgICAgdW5tYXRjaGVkLnB1c2goZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGBpYCBpcyBub3cgdGhlIGNvdW50IG9mIGVsZW1lbnRzIHZpc2l0ZWQgYWJvdmUsIGFuZCBhZGRpbmcgaXQgdG8gYG1hdGNoZWRDb3VudGBcbiAgICAgICAgLy8gbWFrZXMgdGhlIGxhdHRlciBub25uZWdhdGl2ZS5cblxuXG4gICAgICAgIG1hdGNoZWRDb3VudCArPSBpOyAvLyBBcHBseSBzZXQgZmlsdGVycyB0byB1bm1hdGNoZWQgZWxlbWVudHNcbiAgICAgICAgLy8gTk9URTogVGhpcyBjYW4gYmUgc2tpcHBlZCBpZiB0aGVyZSBhcmUgbm8gdW5tYXRjaGVkIGVsZW1lbnRzIChpLmUuLCBgbWF0Y2hlZENvdW50YFxuICAgICAgICAvLyBlcXVhbHMgYGlgKSwgdW5sZXNzIHdlIGRpZG4ndCB2aXNpdCBfYW55XyBlbGVtZW50cyBpbiB0aGUgYWJvdmUgbG9vcCBiZWNhdXNlIHdlIGhhdmVcbiAgICAgICAgLy8gbm8gZWxlbWVudCBtYXRjaGVycyBhbmQgbm8gc2VlZC5cbiAgICAgICAgLy8gSW5jcmVtZW50aW5nIGFuIGluaXRpYWxseS1zdHJpbmcgXCIwXCIgYGlgIGFsbG93cyBgaWAgdG8gcmVtYWluIGEgc3RyaW5nIG9ubHkgaW4gdGhhdFxuICAgICAgICAvLyBjYXNlLCB3aGljaCB3aWxsIHJlc3VsdCBpbiBhIFwiMDBcIiBgbWF0Y2hlZENvdW50YCB0aGF0IGRpZmZlcnMgZnJvbSBgaWAgYnV0IGlzIGFsc29cbiAgICAgICAgLy8gbnVtZXJpY2FsbHkgemVyby5cblxuICAgICAgICBpZiAoYnlTZXQgJiYgaSAhPT0gbWF0Y2hlZENvdW50KSB7XG4gICAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgICB3aGlsZSAobWF0Y2hlciA9IHNldE1hdGNoZXJzW2orK10pIHtcbiAgICAgICAgICAgIG1hdGNoZXIodW5tYXRjaGVkLCBzZXRNYXRjaGVkLCBjb250ZXh0LCB4bWwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWVkKSB7XG4gICAgICAgICAgICAvLyBSZWludGVncmF0ZSBlbGVtZW50IG1hdGNoZXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciBzb3J0aW5nXG4gICAgICAgICAgICBpZiAobWF0Y2hlZENvdW50ID4gMCkge1xuICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEodW5tYXRjaGVkW2ldIHx8IHNldE1hdGNoZWRbaV0pKSB7XG4gICAgICAgICAgICAgICAgICBzZXRNYXRjaGVkW2ldID0gcG9wLmNhbGwocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIERpc2NhcmQgaW5kZXggcGxhY2Vob2xkZXIgdmFsdWVzIHRvIGdldCBvbmx5IGFjdHVhbCBtYXRjaGVzXG5cblxuICAgICAgICAgICAgc2V0TWF0Y2hlZCA9IGNvbmRlbnNlKHNldE1hdGNoZWQpO1xuICAgICAgICAgIH0gLy8gQWRkIG1hdGNoZXMgdG8gcmVzdWx0c1xuXG5cbiAgICAgICAgICBwdXNoLmFwcGx5KHJlc3VsdHMsIHNldE1hdGNoZWQpOyAvLyBTZWVkbGVzcyBzZXQgbWF0Y2hlcyBzdWNjZWVkaW5nIG11bHRpcGxlIHN1Y2Nlc3NmdWwgbWF0Y2hlcnMgc3RpcHVsYXRlIHNvcnRpbmdcblxuICAgICAgICAgIGlmIChvdXRlcm1vc3QgJiYgIXNlZWQgJiYgc2V0TWF0Y2hlZC5sZW5ndGggPiAwICYmIG1hdGNoZWRDb3VudCArIHNldE1hdGNoZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIFNpenpsZS51bmlxdWVTb3J0KHJlc3VsdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBPdmVycmlkZSBtYW5pcHVsYXRpb24gb2YgZ2xvYmFscyBieSBuZXN0ZWQgbWF0Y2hlcnNcblxuXG4gICAgICAgIGlmIChvdXRlcm1vc3QpIHtcbiAgICAgICAgICBkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcbiAgICAgICAgICBvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dEJhY2t1cDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bm1hdGNoZWQ7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gYnlTZXQgPyBtYXJrRnVuY3Rpb24oc3VwZXJNYXRjaGVyKSA6IHN1cGVyTWF0Y2hlcjtcbiAgICB9XG5cbiAgICBjb21waWxlID0gU2l6emxlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIG1hdGNoXG4gICAgLyogSW50ZXJuYWwgVXNlIE9ubHkgKi9cbiAgICApIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIHNldE1hdGNoZXJzID0gW10sXG4gICAgICAgICAgZWxlbWVudE1hdGNoZXJzID0gW10sXG4gICAgICAgICAgY2FjaGVkID0gY29tcGlsZXJDYWNoZVtzZWxlY3RvciArIFwiIFwiXTtcblxuICAgICAgaWYgKCFjYWNoZWQpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgYSBmdW5jdGlvbiBvZiByZWN1cnNpdmUgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gY2hlY2sgZWFjaCBlbGVtZW50XG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICBtYXRjaCA9IHRva2VuaXplKHNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPSBtYXRjaC5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGNhY2hlZCA9IG1hdGNoZXJGcm9tVG9rZW5zKG1hdGNoW2ldKTtcblxuICAgICAgICAgIGlmIChjYWNoZWRbZXhwYW5kb10pIHtcbiAgICAgICAgICAgIHNldE1hdGNoZXJzLnB1c2goY2FjaGVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudE1hdGNoZXJzLnB1c2goY2FjaGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gQ2FjaGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uXG5cblxuICAgICAgICBjYWNoZWQgPSBjb21waWxlckNhY2hlKHNlbGVjdG9yLCBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycykpOyAvLyBTYXZlIHNlbGVjdG9yIGFuZCB0b2tlbml6YXRpb25cblxuICAgICAgICBjYWNoZWQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgbG93LWxldmVsIHNlbGVjdGlvbiBmdW5jdGlvbiB0aGF0IHdvcmtzIHdpdGggU2l6emxlJ3MgY29tcGlsZWRcbiAgICAgKiAgc2VsZWN0b3IgZnVuY3Rpb25zXG4gICAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yIEEgc2VsZWN0b3Igb3IgYSBwcmUtY29tcGlsZWRcbiAgICAgKiAgc2VsZWN0b3IgZnVuY3Rpb24gYnVpbHQgd2l0aCBTaXp6bGUuY29tcGlsZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHRzXVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFtzZWVkXSBBIHNldCBvZiBlbGVtZW50cyB0byBtYXRjaCBhZ2FpbnN0XG4gICAgICovXG5cblxuICAgIHNlbGVjdCA9IFNpenpsZS5zZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICB0b2tlbixcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGZpbmQsXG4gICAgICAgICAgY29tcGlsZWQgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBzZWxlY3RvcixcbiAgICAgICAgICBtYXRjaCA9ICFzZWVkICYmIHRva2VuaXplKHNlbGVjdG9yID0gY29tcGlsZWQuc2VsZWN0b3IgfHwgc2VsZWN0b3IpO1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgW107IC8vIFRyeSB0byBtaW5pbWl6ZSBvcGVyYXRpb25zIGlmIHRoZXJlIGlzIG9ubHkgb25lIHNlbGVjdG9yIGluIHRoZSBsaXN0IGFuZCBubyBzZWVkXG4gICAgICAvLyAodGhlIGxhdHRlciBvZiB3aGljaCBndWFyYW50ZWVzIHVzIGNvbnRleHQpXG5cbiAgICAgIGlmIChtYXRjaC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gUmVkdWNlIGNvbnRleHQgaWYgdGhlIGxlYWRpbmcgY29tcG91bmQgc2VsZWN0b3IgaXMgYW4gSURcbiAgICAgICAgdG9rZW5zID0gbWF0Y2hbMF0gPSBtYXRjaFswXS5zbGljZSgwKTtcblxuICAgICAgICBpZiAodG9rZW5zLmxlbmd0aCA+IDIgJiYgKHRva2VuID0gdG9rZW5zWzBdKS50eXBlID09PSBcIklEXCIgJiYgY29udGV4dC5ub2RlVHlwZSA9PT0gOSAmJiBkb2N1bWVudElzSFRNTCAmJiBFeHByLnJlbGF0aXZlW3Rva2Vuc1sxXS50eXBlXSkge1xuICAgICAgICAgIGNvbnRleHQgPSAoRXhwci5maW5kW1wiSURcIl0odG9rZW4ubWF0Y2hlc1swXS5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKSwgY29udGV4dCkgfHwgW10pWzBdO1xuXG4gICAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0czsgLy8gUHJlY29tcGlsZWQgbWF0Y2hlcnMgd2lsbCBzdGlsbCB2ZXJpZnkgYW5jZXN0cnksIHNvIHN0ZXAgdXAgYSBsZXZlbFxuICAgICAgICAgIH0gZWxzZSBpZiAoY29tcGlsZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0LnBhcmVudE5vZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSh0b2tlbnMuc2hpZnQoKS52YWx1ZS5sZW5ndGgpO1xuICAgICAgICB9IC8vIEZldGNoIGEgc2VlZCBzZXQgZm9yIHJpZ2h0LXRvLWxlZnQgbWF0Y2hpbmdcblxuXG4gICAgICAgIGkgPSBtYXRjaEV4cHJbXCJuZWVkc0NvbnRleHRcIl0udGVzdChzZWxlY3RvcikgPyAwIDogdG9rZW5zLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07IC8vIEFib3J0IGlmIHdlIGhpdCBhIGNvbWJpbmF0b3JcblxuICAgICAgICAgIGlmIChFeHByLnJlbGF0aXZlW3R5cGUgPSB0b2tlbi50eXBlXSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZpbmQgPSBFeHByLmZpbmRbdHlwZV0pIHtcbiAgICAgICAgICAgIC8vIFNlYXJjaCwgZXhwYW5kaW5nIGNvbnRleHQgZm9yIGxlYWRpbmcgc2libGluZyBjb21iaW5hdG9yc1xuICAgICAgICAgICAgaWYgKHNlZWQgPSBmaW5kKHRva2VuLm1hdGNoZXNbMF0ucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSksIHJzaWJsaW5nLnRlc3QodG9rZW5zWzBdLnR5cGUpICYmIHRlc3RDb250ZXh0KGNvbnRleHQucGFyZW50Tm9kZSkgfHwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgLy8gSWYgc2VlZCBpcyBlbXB0eSBvciBubyB0b2tlbnMgcmVtYWluLCB3ZSBjYW4gcmV0dXJuIGVhcmx5XG4gICAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VlZC5sZW5ndGggJiYgdG9TZWxlY3Rvcih0b2tlbnMpO1xuXG4gICAgICAgICAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBwdXNoLmFwcGx5KHJlc3VsdHMsIHNlZWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIENvbXBpbGUgYW5kIGV4ZWN1dGUgYSBmaWx0ZXJpbmcgZnVuY3Rpb24gaWYgb25lIGlzIG5vdCBwcm92aWRlZFxuICAgICAgLy8gUHJvdmlkZSBgbWF0Y2hgIHRvIGF2b2lkIHJldG9rZW5pemF0aW9uIGlmIHdlIG1vZGlmaWVkIHRoZSBzZWxlY3RvciBhYm92ZVxuXG5cbiAgICAgIChjb21waWxlZCB8fCBjb21waWxlKHNlbGVjdG9yLCBtYXRjaCkpKHNlZWQsIGNvbnRleHQsICFkb2N1bWVudElzSFRNTCwgcmVzdWx0cywgIWNvbnRleHQgfHwgcnNpYmxpbmcudGVzdChzZWxlY3RvcikgJiYgdGVzdENvbnRleHQoY29udGV4dC5wYXJlbnROb2RlKSB8fCBjb250ZXh0KTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07IC8vIE9uZS10aW1lIGFzc2lnbm1lbnRzXG4gICAgLy8gU29ydCBzdGFiaWxpdHlcblxuXG4gICAgc3VwcG9ydC5zb3J0U3RhYmxlID0gZXhwYW5kby5zcGxpdChcIlwiKS5zb3J0KHNvcnRPcmRlcikuam9pbihcIlwiKSA9PT0gZXhwYW5kbzsgLy8gU3VwcG9ydDogQ2hyb21lIDE0LTM1K1xuICAgIC8vIEFsd2F5cyBhc3N1bWUgZHVwbGljYXRlcyBpZiB0aGV5IGFyZW4ndCBwYXNzZWQgdG8gdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cblxuICAgIHN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcyA9ICEhaGFzRHVwbGljYXRlOyAvLyBJbml0aWFsaXplIGFnYWluc3QgdGhlIGRlZmF1bHQgZG9jdW1lbnRcblxuICAgIHNldERvY3VtZW50KCk7IC8vIFN1cHBvcnQ6IFdlYmtpdDw1MzcuMzIgLSBTYWZhcmkgNi4wLjMvQ2hyb21lIDI1IChmaXhlZCBpbiBDaHJvbWUgMjcpXG4gICAgLy8gRGV0YWNoZWQgbm9kZXMgY29uZm91bmRpbmdseSBmb2xsb3cgKmVhY2ggb3RoZXIqXG5cbiAgICBzdXBwb3J0LnNvcnREZXRhY2hlZCA9IGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIC8vIFNob3VsZCByZXR1cm4gMSwgYnV0IHJldHVybnMgNCAoZm9sbG93aW5nKVxuICAgICAgcmV0dXJuIGVsLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSkgJiAxO1xuICAgIH0pOyAvLyBTdXBwb3J0OiBJRTw4XG4gICAgLy8gUHJldmVudCBhdHRyaWJ1dGUvcHJvcGVydHkgXCJpbnRlcnBvbGF0aW9uXCJcbiAgICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM2NDI5JTI4VlMuODUlMjkuYXNweFxuXG4gICAgaWYgKCFhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JyMnPjwvYT5cIjtcbiAgICAgIHJldHVybiBlbC5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT09IFwiI1wiO1xuICAgIH0pKSB7XG4gICAgICBhZGRIYW5kbGUoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsIGZ1bmN0aW9uIChlbGVtLCBuYW1lLCBpc1hNTCkge1xuICAgICAgICBpZiAoIWlzWE1MKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKG5hbWUsIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0eXBlXCIgPyAxIDogMik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gU3VwcG9ydDogSUU8OVxuICAgIC8vIFVzZSBkZWZhdWx0VmFsdWUgaW4gcGxhY2Ugb2YgZ2V0QXR0cmlidXRlKFwidmFsdWVcIilcblxuXG4gICAgaWYgKCFzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLmlubmVySFRNTCA9IFwiPGlucHV0Lz5cIjtcbiAgICAgIGVsLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG4gICAgICByZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA9PT0gXCJcIjtcbiAgICB9KSkge1xuICAgICAgYWRkSGFuZGxlKFwidmFsdWVcIiwgZnVuY3Rpb24gKGVsZW0sIG5hbWUsIGlzWE1MKSB7XG4gICAgICAgIGlmICghaXNYTUwgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gU3VwcG9ydDogSUU8OVxuICAgIC8vIFVzZSBnZXRBdHRyaWJ1dGVOb2RlIHRvIGZldGNoIGJvb2xlYW5zIHdoZW4gZ2V0QXR0cmlidXRlIGxpZXNcblxuXG4gICAgaWYgKCFhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbDtcbiAgICB9KSkge1xuICAgICAgYWRkSGFuZGxlKGJvb2xlYW5zLCBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgaXNYTUwpIHtcbiAgICAgICAgdmFyIHZhbDtcblxuICAgICAgICBpZiAoIWlzWE1MKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1bbmFtZV0gPT09IHRydWUgPyBuYW1lLnRvTG93ZXJDYXNlKCkgOiAodmFsID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpKSAmJiB2YWwuc3BlY2lmaWVkID8gdmFsLnZhbHVlIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFNpenpsZTtcbiAgfSh3aW5kb3cpO1xuXG4gIGpRdWVyeS5maW5kID0gU2l6emxlO1xuICBqUXVlcnkuZXhwciA9IFNpenpsZS5zZWxlY3RvcnM7IC8vIERlcHJlY2F0ZWRcblxuICBqUXVlcnkuZXhwcltcIjpcIl0gPSBqUXVlcnkuZXhwci5wc2V1ZG9zO1xuICBqUXVlcnkudW5pcXVlU29ydCA9IGpRdWVyeS51bmlxdWUgPSBTaXp6bGUudW5pcXVlU29ydDtcbiAgalF1ZXJ5LnRleHQgPSBTaXp6bGUuZ2V0VGV4dDtcbiAgalF1ZXJ5LmlzWE1MRG9jID0gU2l6emxlLmlzWE1MO1xuICBqUXVlcnkuY29udGFpbnMgPSBTaXp6bGUuY29udGFpbnM7XG4gIGpRdWVyeS5lc2NhcGVTZWxlY3RvciA9IFNpenpsZS5lc2NhcGU7XG5cbiAgdmFyIGRpciA9IGZ1bmN0aW9uIChlbGVtLCBkaXIsIHVudGlsKSB7XG4gICAgdmFyIG1hdGNoZWQgPSBbXSxcbiAgICAgICAgdHJ1bmNhdGUgPSB1bnRpbCAhPT0gdW5kZWZpbmVkO1xuXG4gICAgd2hpbGUgKChlbGVtID0gZWxlbVtkaXJdKSAmJiBlbGVtLm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBpZiAodHJ1bmNhdGUgJiYgalF1ZXJ5KGVsZW0pLmlzKHVudGlsKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0Y2hlZC5wdXNoKGVsZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVkO1xuICB9O1xuXG4gIHZhciBzaWJsaW5ncyA9IGZ1bmN0aW9uIChuLCBlbGVtKSB7XG4gICAgdmFyIG1hdGNoZWQgPSBbXTtcblxuICAgIGZvciAoOyBuOyBuID0gbi5uZXh0U2libGluZykge1xuICAgICAgaWYgKG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gZWxlbSkge1xuICAgICAgICBtYXRjaGVkLnB1c2gobik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZWQ7XG4gIH07XG5cbiAgdmFyIHJuZWVkc0NvbnRleHQgPSBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7XG5cbiAgZnVuY3Rpb24gbm9kZU5hbWUoZWxlbSwgbmFtZSkge1xuICAgIHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgO1xuICB2YXIgcnNpbmdsZVRhZyA9IC9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pOyAvLyBJbXBsZW1lbnQgdGhlIGlkZW50aWNhbCBmdW5jdGlvbmFsaXR5IGZvciBmaWx0ZXIgYW5kIG5vdFxuXG4gIGZ1bmN0aW9uIHdpbm5vdyhlbGVtZW50cywgcXVhbGlmaWVyLCBub3QpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihxdWFsaWZpZXIpKSB7XG4gICAgICByZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtLCBpKSB7XG4gICAgICAgIHJldHVybiAhIXF1YWxpZmllci5jYWxsKGVsZW0sIGksIGVsZW0pICE9PSBub3Q7XG4gICAgICB9KTtcbiAgICB9IC8vIFNpbmdsZSBlbGVtZW50XG5cblxuICAgIGlmIChxdWFsaWZpZXIubm9kZVR5cGUpIHtcbiAgICAgIHJldHVybiBqUXVlcnkuZ3JlcChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gPT09IHF1YWxpZmllciAhPT0gbm90O1xuICAgICAgfSk7XG4gICAgfSAvLyBBcnJheWxpa2Ugb2YgZWxlbWVudHMgKGpRdWVyeSwgYXJndW1lbnRzLCBBcnJheSlcblxuXG4gICAgaWYgKHR5cGVvZiBxdWFsaWZpZXIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBqUXVlcnkuZ3JlcChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGluZGV4T2YuY2FsbChxdWFsaWZpZXIsIGVsZW0pID4gLTEgIT09IG5vdDtcbiAgICAgIH0pO1xuICAgIH0gLy8gRmlsdGVyZWQgZGlyZWN0bHkgZm9yIGJvdGggc2ltcGxlIGFuZCBjb21wbGV4IHNlbGVjdG9yc1xuXG5cbiAgICByZXR1cm4galF1ZXJ5LmZpbHRlcihxdWFsaWZpZXIsIGVsZW1lbnRzLCBub3QpO1xuICB9XG5cbiAgalF1ZXJ5LmZpbHRlciA9IGZ1bmN0aW9uIChleHByLCBlbGVtcywgbm90KSB7XG4gICAgdmFyIGVsZW0gPSBlbGVtc1swXTtcblxuICAgIGlmIChub3QpIHtcbiAgICAgIGV4cHIgPSBcIjpub3QoXCIgKyBleHByICsgXCIpXCI7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1zLmxlbmd0aCA9PT0gMSAmJiBlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKGVsZW0sIGV4cHIpID8gW2VsZW1dIDogW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXMoZXhwciwgalF1ZXJ5LmdyZXAoZWxlbXMsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbS5ub2RlVHlwZSA9PT0gMTtcbiAgICB9KSk7XG4gIH07XG5cbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgZmluZDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICByZXQsXG4gICAgICAgICAgbGVuID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKGpRdWVyeShzZWxlY3RvcikuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChqUXVlcnkuY29udGFpbnMoc2VsZltpXSwgdGhpcykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHRoaXMucHVzaFN0YWNrKFtdKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGpRdWVyeS5maW5kKHNlbGVjdG9yLCBzZWxmW2ldLCByZXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVuID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KHJldCkgOiByZXQ7XG4gICAgfSxcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKHdpbm5vdyh0aGlzLCBzZWxlY3RvciB8fCBbXSwgZmFsc2UpKTtcbiAgICB9LFxuICAgIG5vdDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2sod2lubm93KHRoaXMsIHNlbGVjdG9yIHx8IFtdLCB0cnVlKSk7XG4gICAgfSxcbiAgICBpczogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gISF3aW5ub3codGhpcywgLy8gSWYgdGhpcyBpcyBhIHBvc2l0aW9uYWwvcmVsYXRpdmUgc2VsZWN0b3IsIGNoZWNrIG1lbWJlcnNoaXAgaW4gdGhlIHJldHVybmVkIHNldFxuICAgICAgLy8gc28gJChcInA6Zmlyc3RcIikuaXMoXCJwOmxhc3RcIikgd29uJ3QgcmV0dXJuIHRydWUgZm9yIGEgZG9jIHdpdGggdHdvIFwicFwiLlxuICAgICAgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICYmIHJuZWVkc0NvbnRleHQudGVzdChzZWxlY3RvcikgPyBqUXVlcnkoc2VsZWN0b3IpIDogc2VsZWN0b3IgfHwgW10sIGZhbHNlKS5sZW5ndGg7XG4gICAgfVxuICB9KTsgLy8gSW5pdGlhbGl6ZSBhIGpRdWVyeSBvYmplY3RcbiAgLy8gQSBjZW50cmFsIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBqUXVlcnkoZG9jdW1lbnQpXG5cbiAgdmFyIHJvb3RqUXVlcnksXG4gICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAvLyBQcmlvcml0aXplICNpZCBvdmVyIDx0YWc+IHRvIGF2b2lkIFhTUyB2aWEgbG9jYXRpb24uaGFzaCAoIzk1MjEpXG4gIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uICgjMTEyOTA6IG11c3Qgc3RhcnQgd2l0aCA8KVxuICAvLyBTaG9ydGN1dCBzaW1wbGUgI2lkIGNhc2UgZm9yIHNwZWVkXG4gIHJxdWlja0V4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLyxcbiAgICAgIGluaXQgPSBqUXVlcnkuZm4uaW5pdCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCwgcm9vdCkge1xuICAgIHZhciBtYXRjaCwgZWxlbTsgLy8gSEFORExFOiAkKFwiXCIpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IC8vIE1ldGhvZCBpbml0KCkgYWNjZXB0cyBhbiBhbHRlcm5hdGUgcm9vdGpRdWVyeVxuICAgIC8vIHNvIG1pZ3JhdGUgY2FuIHN1cHBvcnQgalF1ZXJ5LnN1YiAoZ2gtMjEwMSlcblxuXG4gICAgcm9vdCA9IHJvb3QgfHwgcm9vdGpRdWVyeTsgLy8gSGFuZGxlIEhUTUwgc3RyaW5nc1xuXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHNlbGVjdG9yWzBdID09PSBcIjxcIiAmJiBzZWxlY3RvcltzZWxlY3Rvci5sZW5ndGggLSAxXSA9PT0gXCI+XCIgJiYgc2VsZWN0b3IubGVuZ3RoID49IDMpIHtcbiAgICAgICAgLy8gQXNzdW1lIHRoYXQgc3RyaW5ncyB0aGF0IHN0YXJ0IGFuZCBlbmQgd2l0aCA8PiBhcmUgSFRNTCBhbmQgc2tpcCB0aGUgcmVnZXggY2hlY2tcbiAgICAgICAgbWF0Y2ggPSBbbnVsbCwgc2VsZWN0b3IsIG51bGxdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoc2VsZWN0b3IpO1xuICAgICAgfSAvLyBNYXRjaCBodG1sIG9yIG1ha2Ugc3VyZSBubyBjb250ZXh0IGlzIHNwZWNpZmllZCBmb3IgI2lkXG5cblxuICAgICAgaWYgKG1hdGNoICYmIChtYXRjaFsxXSB8fCAhY29udGV4dCkpIHtcbiAgICAgICAgLy8gSEFORExFOiAkKGh0bWwpIC0+ICQoYXJyYXkpXG4gICAgICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGV4dFswXSA6IGNvbnRleHQ7IC8vIE9wdGlvbiB0byBydW4gc2NyaXB0cyBpcyB0cnVlIGZvciBiYWNrLWNvbXBhdFxuICAgICAgICAgIC8vIEludGVudGlvbmFsbHkgbGV0IHRoZSBlcnJvciBiZSB0aHJvd24gaWYgcGFyc2VIVE1MIGlzIG5vdCBwcmVzZW50XG5cbiAgICAgICAgICBqUXVlcnkubWVyZ2UodGhpcywgalF1ZXJ5LnBhcnNlSFRNTChtYXRjaFsxXSwgY29udGV4dCAmJiBjb250ZXh0Lm5vZGVUeXBlID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBkb2N1bWVudCwgdHJ1ZSkpOyAvLyBIQU5ETEU6ICQoaHRtbCwgcHJvcHMpXG5cbiAgICAgICAgICBpZiAocnNpbmdsZVRhZy50ZXN0KG1hdGNoWzFdKSAmJiBqUXVlcnkuaXNQbGFpbk9iamVjdChjb250ZXh0KSkge1xuICAgICAgICAgICAgZm9yIChtYXRjaCBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICAgIC8vIFByb3BlcnRpZXMgb2YgY29udGV4dCBhcmUgY2FsbGVkIGFzIG1ldGhvZHMgaWYgcG9zc2libGVcbiAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpc1ttYXRjaF0pKSB7XG4gICAgICAgICAgICAgICAgdGhpc1ttYXRjaF0oY29udGV4dFttYXRjaF0pOyAvLyAuLi5hbmQgb3RoZXJ3aXNlIHNldCBhcyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyKG1hdGNoLCBjb250ZXh0W21hdGNoXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpczsgLy8gSEFORExFOiAkKCNpZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWF0Y2hbMl0pO1xuXG4gICAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICAgIC8vIEluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XG4gICAgICAgICAgICB0aGlzWzBdID0gZWxlbTtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSAvLyBIQU5ETEU6ICQoZXhwciwgJCguLi4pKVxuXG4gICAgICB9IGVsc2UgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuanF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiAoY29udGV4dCB8fCByb290KS5maW5kKHNlbGVjdG9yKTsgLy8gSEFORExFOiAkKGV4cHIsIGNvbnRleHQpXG4gICAgICAgIC8vICh3aGljaCBpcyBqdXN0IGVxdWl2YWxlbnQgdG86ICQoY29udGV4dCkuZmluZChleHByKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoY29udGV4dCkuZmluZChzZWxlY3Rvcik7XG4gICAgICB9IC8vIEhBTkRMRTogJChET01FbGVtZW50KVxuXG4gICAgfSBlbHNlIGlmIChzZWxlY3Rvci5ub2RlVHlwZSkge1xuICAgICAgdGhpc1swXSA9IHNlbGVjdG9yO1xuICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgICAgcmV0dXJuIHRoaXM7IC8vIEhBTkRMRTogJChmdW5jdGlvbilcbiAgICAgIC8vIFNob3J0Y3V0IGZvciBkb2N1bWVudCByZWFkeVxuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiByb290LnJlYWR5ICE9PSB1bmRlZmluZWQgPyByb290LnJlYWR5KHNlbGVjdG9yKSA6IC8vIEV4ZWN1dGUgaW1tZWRpYXRlbHkgaWYgcmVhZHkgaXMgbm90IHByZXNlbnRcbiAgICAgIHNlbGVjdG9yKGpRdWVyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpRdWVyeS5tYWtlQXJyYXkoc2VsZWN0b3IsIHRoaXMpO1xuICB9OyAvLyBHaXZlIHRoZSBpbml0IGZ1bmN0aW9uIHRoZSBqUXVlcnkgcHJvdG90eXBlIGZvciBsYXRlciBpbnN0YW50aWF0aW9uXG5cblxuICBpbml0LnByb3RvdHlwZSA9IGpRdWVyeS5mbjsgLy8gSW5pdGlhbGl6ZSBjZW50cmFsIHJlZmVyZW5jZVxuXG4gIHJvb3RqUXVlcnkgPSBqUXVlcnkoZG9jdW1lbnQpO1xuICB2YXIgcnBhcmVudHNwcmV2ID0gL14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sXG4gICAgICAvLyBNZXRob2RzIGd1YXJhbnRlZWQgdG8gcHJvZHVjZSBhIHVuaXF1ZSBzZXQgd2hlbiBzdGFydGluZyBmcm9tIGEgdW5pcXVlIHNldFxuICBndWFyYW50ZWVkVW5pcXVlID0ge1xuICAgIGNoaWxkcmVuOiB0cnVlLFxuICAgIGNvbnRlbnRzOiB0cnVlLFxuICAgIG5leHQ6IHRydWUsXG4gICAgcHJldjogdHJ1ZVxuICB9O1xuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICBoYXM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHZhciB0YXJnZXRzID0galF1ZXJ5KHRhcmdldCwgdGhpcyksXG4gICAgICAgICAgbCA9IHRhcmdldHMubGVuZ3RoO1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGpRdWVyeS5jb250YWlucyh0aGlzLCB0YXJnZXRzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uIChzZWxlY3RvcnMsIGNvbnRleHQpIHtcbiAgICAgIHZhciBjdXIsXG4gICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgbCA9IHRoaXMubGVuZ3RoLFxuICAgICAgICAgIG1hdGNoZWQgPSBbXSxcbiAgICAgICAgICB0YXJnZXRzID0gdHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBqUXVlcnkoc2VsZWN0b3JzKTsgLy8gUG9zaXRpb25hbCBzZWxlY3RvcnMgbmV2ZXIgbWF0Y2gsIHNpbmNlIHRoZXJlJ3Mgbm8gX3NlbGVjdGlvbl8gY29udGV4dFxuXG4gICAgICBpZiAoIXJuZWVkc0NvbnRleHQudGVzdChzZWxlY3RvcnMpKSB7XG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgZm9yIChjdXIgPSB0aGlzW2ldOyBjdXIgJiYgY3VyICE9PSBjb250ZXh0OyBjdXIgPSBjdXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgLy8gQWx3YXlzIHNraXAgZG9jdW1lbnQgZnJhZ21lbnRzXG4gICAgICAgICAgICBpZiAoY3VyLm5vZGVUeXBlIDwgMTEgJiYgKHRhcmdldHMgPyB0YXJnZXRzLmluZGV4KGN1cikgPiAtMSA6IC8vIERvbid0IHBhc3Mgbm9uLWVsZW1lbnRzIHRvIFNpenpsZVxuICAgICAgICAgICAgY3VyLm5vZGVUeXBlID09PSAxICYmIGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvcihjdXIsIHNlbGVjdG9ycykpKSB7XG4gICAgICAgICAgICAgIG1hdGNoZWQucHVzaChjdXIpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKG1hdGNoZWQubGVuZ3RoID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KG1hdGNoZWQpIDogbWF0Y2hlZCk7XG4gICAgfSxcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgd2l0aGluIHRoZSBzZXRcbiAgICBpbmRleDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIC8vIE5vIGFyZ3VtZW50LCByZXR1cm4gaW5kZXggaW4gcGFyZW50XG4gICAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0gJiYgdGhpc1swXS5wYXJlbnROb2RlID8gdGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGggOiAtMTtcbiAgICAgIH0gLy8gSW5kZXggaW4gc2VsZWN0b3JcblxuXG4gICAgICBpZiAodHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4T2YuY2FsbChqUXVlcnkoZWxlbSksIHRoaXNbMF0pO1xuICAgICAgfSAvLyBMb2NhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBkZXNpcmVkIGVsZW1lbnRcblxuXG4gICAgICByZXR1cm4gaW5kZXhPZi5jYWxsKHRoaXMsIC8vIElmIGl0IHJlY2VpdmVzIGEgalF1ZXJ5IG9iamVjdCwgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdXNlZFxuICAgICAgZWxlbS5qcXVlcnkgPyBlbGVtWzBdIDogZWxlbSk7XG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKGpRdWVyeS51bmlxdWVTb3J0KGpRdWVyeS5tZXJnZSh0aGlzLmdldCgpLCBqUXVlcnkoc2VsZWN0b3IsIGNvbnRleHQpKSkpO1xuICAgIH0sXG4gICAgYWRkQmFjazogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGQoc2VsZWN0b3IgPT0gbnVsbCA/IHRoaXMucHJldk9iamVjdCA6IHRoaXMucHJldk9iamVjdC5maWx0ZXIoc2VsZWN0b3IpKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNpYmxpbmcoY3VyLCBkaXIpIHtcbiAgICB3aGlsZSAoKGN1ciA9IGN1cltkaXJdKSAmJiBjdXIubm9kZVR5cGUgIT09IDEpIHt9XG5cbiAgICByZXR1cm4gY3VyO1xuICB9XG5cbiAgalF1ZXJ5LmVhY2goe1xuICAgIHBhcmVudDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMTEgPyBwYXJlbnQgOiBudWxsO1xuICAgIH0sXG4gICAgcGFyZW50czogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHJldHVybiBkaXIoZWxlbSwgXCJwYXJlbnROb2RlXCIpO1xuICAgIH0sXG4gICAgcGFyZW50c1VudGlsOiBmdW5jdGlvbiAoZWxlbSwgaSwgdW50aWwpIHtcbiAgICAgIHJldHVybiBkaXIoZWxlbSwgXCJwYXJlbnROb2RlXCIsIHVudGlsKTtcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICByZXR1cm4gc2libGluZyhlbGVtLCBcIm5leHRTaWJsaW5nXCIpO1xuICAgIH0sXG4gICAgcHJldjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHJldHVybiBzaWJsaW5nKGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIpO1xuICAgIH0sXG4gICAgbmV4dEFsbDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHJldHVybiBkaXIoZWxlbSwgXCJuZXh0U2libGluZ1wiKTtcbiAgICB9LFxuICAgIHByZXZBbGw6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICByZXR1cm4gZGlyKGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIpO1xuICAgIH0sXG4gICAgbmV4dFVudGlsOiBmdW5jdGlvbiAoZWxlbSwgaSwgdW50aWwpIHtcbiAgICAgIHJldHVybiBkaXIoZWxlbSwgXCJuZXh0U2libGluZ1wiLCB1bnRpbCk7XG4gICAgfSxcbiAgICBwcmV2VW50aWw6IGZ1bmN0aW9uIChlbGVtLCBpLCB1bnRpbCkge1xuICAgICAgcmV0dXJuIGRpcihlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCk7XG4gICAgfSxcbiAgICBzaWJsaW5nczogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHJldHVybiBzaWJsaW5ncygoZWxlbS5wYXJlbnROb2RlIHx8IHt9KS5maXJzdENoaWxkLCBlbGVtKTtcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgcmV0dXJuIHNpYmxpbmdzKGVsZW0uZmlyc3RDaGlsZCk7XG4gICAgfSxcbiAgICBjb250ZW50czogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIGlmICh0eXBlb2YgZWxlbS5jb250ZW50RG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIGVsZW0uY29udGVudERvY3VtZW50O1xuICAgICAgfSAvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seSwgaU9TIDcgb25seSwgQW5kcm9pZCBCcm93c2VyIDw9NC4zIG9ubHlcbiAgICAgIC8vIFRyZWF0IHRoZSB0ZW1wbGF0ZSBlbGVtZW50IGFzIGEgcmVndWxhciBvbmUgaW4gYnJvd3NlcnMgdGhhdFxuICAgICAgLy8gZG9uJ3Qgc3VwcG9ydCBpdC5cblxuXG4gICAgICBpZiAobm9kZU5hbWUoZWxlbSwgXCJ0ZW1wbGF0ZVwiKSkge1xuICAgICAgICBlbGVtID0gZWxlbS5jb250ZW50IHx8IGVsZW07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBqUXVlcnkubWVyZ2UoW10sIGVsZW0uY2hpbGROb2Rlcyk7XG4gICAgfVxuICB9LCBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBqUXVlcnkuZm5bbmFtZV0gPSBmdW5jdGlvbiAodW50aWwsIHNlbGVjdG9yKSB7XG4gICAgICB2YXIgbWF0Y2hlZCA9IGpRdWVyeS5tYXAodGhpcywgZm4sIHVudGlsKTtcblxuICAgICAgaWYgKG5hbWUuc2xpY2UoLTUpICE9PSBcIlVudGlsXCIpIHtcbiAgICAgICAgc2VsZWN0b3IgPSB1bnRpbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdG9yICYmIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBtYXRjaGVkID0galF1ZXJ5LmZpbHRlcihzZWxlY3RvciwgbWF0Y2hlZCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZXNcbiAgICAgICAgaWYgKCFndWFyYW50ZWVkVW5pcXVlW25hbWVdKSB7XG4gICAgICAgICAgalF1ZXJ5LnVuaXF1ZVNvcnQobWF0Y2hlZCk7XG4gICAgICAgIH0gLy8gUmV2ZXJzZSBvcmRlciBmb3IgcGFyZW50cyogYW5kIHByZXYtZGVyaXZhdGl2ZXNcblxuXG4gICAgICAgIGlmIChycGFyZW50c3ByZXYudGVzdChuYW1lKSkge1xuICAgICAgICAgIG1hdGNoZWQucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhtYXRjaGVkKTtcbiAgICB9O1xuICB9KTtcbiAgdmFyIHJub3RodG1sd2hpdGUgPSAvW15cXHgyMFxcdFxcclxcblxcZl0rL2c7IC8vIENvbnZlcnQgU3RyaW5nLWZvcm1hdHRlZCBvcHRpb25zIGludG8gT2JqZWN0LWZvcm1hdHRlZCBvbmVzXG5cbiAgZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIGpRdWVyeS5lYWNoKG9wdGlvbnMubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW10sIGZ1bmN0aW9uIChfLCBmbGFnKSB7XG4gICAgICBvYmplY3RbZmxhZ10gPSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgLypcbiAgICogQ3JlYXRlIGEgY2FsbGJhY2sgbGlzdCB1c2luZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gICAqXG4gICAqXHRvcHRpb25zOiBhbiBvcHRpb25hbCBsaXN0IG9mIHNwYWNlLXNlcGFyYXRlZCBvcHRpb25zIHRoYXQgd2lsbCBjaGFuZ2UgaG93XG4gICAqXHRcdFx0dGhlIGNhbGxiYWNrIGxpc3QgYmVoYXZlcyBvciBhIG1vcmUgdHJhZGl0aW9uYWwgb3B0aW9uIG9iamVjdFxuICAgKlxuICAgKiBCeSBkZWZhdWx0IGEgY2FsbGJhY2sgbGlzdCB3aWxsIGFjdCBsaWtlIGFuIGV2ZW50IGNhbGxiYWNrIGxpc3QgYW5kIGNhbiBiZVxuICAgKiBcImZpcmVkXCIgbXVsdGlwbGUgdGltZXMuXG4gICAqXG4gICAqIFBvc3NpYmxlIG9wdGlvbnM6XG4gICAqXG4gICAqXHRvbmNlOlx0XHRcdHdpbGwgZW5zdXJlIHRoZSBjYWxsYmFjayBsaXN0IGNhbiBvbmx5IGJlIGZpcmVkIG9uY2UgKGxpa2UgYSBEZWZlcnJlZClcbiAgICpcbiAgICpcdG1lbW9yeTpcdFx0XHR3aWxsIGtlZXAgdHJhY2sgb2YgcHJldmlvdXMgdmFsdWVzIGFuZCB3aWxsIGNhbGwgYW55IGNhbGxiYWNrIGFkZGVkXG4gICAqXHRcdFx0XHRcdGFmdGVyIHRoZSBsaXN0IGhhcyBiZWVuIGZpcmVkIHJpZ2h0IGF3YXkgd2l0aCB0aGUgbGF0ZXN0IFwibWVtb3JpemVkXCJcbiAgICpcdFx0XHRcdFx0dmFsdWVzIChsaWtlIGEgRGVmZXJyZWQpXG4gICAqXG4gICAqXHR1bmlxdWU6XHRcdFx0d2lsbCBlbnN1cmUgYSBjYWxsYmFjayBjYW4gb25seSBiZSBhZGRlZCBvbmNlIChubyBkdXBsaWNhdGUgaW4gdGhlIGxpc3QpXG4gICAqXG4gICAqXHRzdG9wT25GYWxzZTpcdGludGVycnVwdCBjYWxsaW5ncyB3aGVuIGEgY2FsbGJhY2sgcmV0dXJucyBmYWxzZVxuICAgKlxuICAgKi9cblxuXG4gIGpRdWVyeS5DYWxsYmFja3MgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIC8vIENvbnZlcnQgb3B0aW9ucyBmcm9tIFN0cmluZy1mb3JtYXR0ZWQgdG8gT2JqZWN0LWZvcm1hdHRlZCBpZiBuZWVkZWRcbiAgICAvLyAod2UgY2hlY2sgaW4gY2FjaGUgZmlyc3QpXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiID8gY3JlYXRlT3B0aW9ucyhvcHRpb25zKSA6IGpRdWVyeS5leHRlbmQoe30sIG9wdGlvbnMpO1xuXG4gICAgdmFyIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcbiAgICBmaXJpbmcsXG4gICAgICAgIC8vIExhc3QgZmlyZSB2YWx1ZSBmb3Igbm9uLWZvcmdldHRhYmxlIGxpc3RzXG4gICAgbWVtb3J5LFxuICAgICAgICAvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCB3YXMgYWxyZWFkeSBmaXJlZFxuICAgIGZpcmVkLFxuICAgICAgICAvLyBGbGFnIHRvIHByZXZlbnQgZmlyaW5nXG4gICAgbG9ja2VkLFxuICAgICAgICAvLyBBY3R1YWwgY2FsbGJhY2sgbGlzdFxuICAgIGxpc3QgPSBbXSxcbiAgICAgICAgLy8gUXVldWUgb2YgZXhlY3V0aW9uIGRhdGEgZm9yIHJlcGVhdGFibGUgbGlzdHNcbiAgICBxdWV1ZSA9IFtdLFxuICAgICAgICAvLyBJbmRleCBvZiBjdXJyZW50bHkgZmlyaW5nIGNhbGxiYWNrIChtb2RpZmllZCBieSBhZGQvcmVtb3ZlIGFzIG5lZWRlZClcbiAgICBmaXJpbmdJbmRleCA9IC0xLFxuICAgICAgICAvLyBGaXJlIGNhbGxiYWNrc1xuICAgIGZpcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBFbmZvcmNlIHNpbmdsZS1maXJpbmdcbiAgICAgIGxvY2tlZCA9IGxvY2tlZCB8fCBvcHRpb25zLm9uY2U7IC8vIEV4ZWN1dGUgY2FsbGJhY2tzIGZvciBhbGwgcGVuZGluZyBleGVjdXRpb25zLFxuICAgICAgLy8gcmVzcGVjdGluZyBmaXJpbmdJbmRleCBvdmVycmlkZXMgYW5kIHJ1bnRpbWUgY2hhbmdlc1xuXG4gICAgICBmaXJlZCA9IGZpcmluZyA9IHRydWU7XG5cbiAgICAgIGZvciAoOyBxdWV1ZS5sZW5ndGg7IGZpcmluZ0luZGV4ID0gLTEpIHtcbiAgICAgICAgbWVtb3J5ID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgICB3aGlsZSAoKytmaXJpbmdJbmRleCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gUnVuIGNhbGxiYWNrIGFuZCBjaGVjayBmb3IgZWFybHkgdGVybWluYXRpb25cbiAgICAgICAgICBpZiAobGlzdFtmaXJpbmdJbmRleF0uYXBwbHkobWVtb3J5WzBdLCBtZW1vcnlbMV0pID09PSBmYWxzZSAmJiBvcHRpb25zLnN0b3BPbkZhbHNlKSB7XG4gICAgICAgICAgICAvLyBKdW1wIHRvIGVuZCBhbmQgZm9yZ2V0IHRoZSBkYXRhIHNvIC5hZGQgZG9lc24ndCByZS1maXJlXG4gICAgICAgICAgICBmaXJpbmdJbmRleCA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgbWVtb3J5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIEZvcmdldCB0aGUgZGF0YSBpZiB3ZSdyZSBkb25lIHdpdGggaXRcblxuXG4gICAgICBpZiAoIW9wdGlvbnMubWVtb3J5KSB7XG4gICAgICAgIG1lbW9yeSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmaXJpbmcgPSBmYWxzZTsgLy8gQ2xlYW4gdXAgaWYgd2UncmUgZG9uZSBmaXJpbmcgZm9yIGdvb2RcblxuICAgICAgaWYgKGxvY2tlZCkge1xuICAgICAgICAvLyBLZWVwIGFuIGVtcHR5IGxpc3QgaWYgd2UgaGF2ZSBkYXRhIGZvciBmdXR1cmUgYWRkIGNhbGxzXG4gICAgICAgIGlmIChtZW1vcnkpIHtcbiAgICAgICAgICBsaXN0ID0gW107IC8vIE90aGVyd2lzZSwgdGhpcyBvYmplY3QgaXMgc3BlbnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgICAgIC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XG4gICAgc2VsZiA9IHtcbiAgICAgIC8vIEFkZCBhIGNhbGxiYWNrIG9yIGEgY29sbGVjdGlvbiBvZiBjYWxsYmFja3MgdG8gdGhlIGxpc3RcbiAgICAgIGFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgIC8vIElmIHdlIGhhdmUgbWVtb3J5IGZyb20gYSBwYXN0IHJ1biwgd2Ugc2hvdWxkIGZpcmUgYWZ0ZXIgYWRkaW5nXG4gICAgICAgICAgaWYgKG1lbW9yeSAmJiAhZmlyaW5nKSB7XG4gICAgICAgICAgICBmaXJpbmdJbmRleCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2gobWVtb3J5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAoZnVuY3Rpb24gYWRkKGFyZ3MpIHtcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKGFyZ3MsIGZ1bmN0aW9uIChfLCBhcmcpIHtcbiAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oYXJnKSkge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy51bmlxdWUgfHwgIXNlbGYuaGFzKGFyZykpIHtcbiAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChhcmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmcgJiYgYXJnLmxlbmd0aCAmJiB0b1R5cGUoYXJnKSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIC8vIEluc3BlY3QgcmVjdXJzaXZlbHlcbiAgICAgICAgICAgICAgICBhZGQoYXJnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkoYXJndW1lbnRzKTtcblxuICAgICAgICAgIGlmIChtZW1vcnkgJiYgIWZpcmluZykge1xuICAgICAgICAgICAgZmlyZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIFJlbW92ZSBhIGNhbGxiYWNrIGZyb20gdGhlIGxpc3RcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkuZWFjaChhcmd1bWVudHMsIGZ1bmN0aW9uIChfLCBhcmcpIHtcbiAgICAgICAgICB2YXIgaW5kZXg7XG5cbiAgICAgICAgICB3aGlsZSAoKGluZGV4ID0galF1ZXJ5LmluQXJyYXkoYXJnLCBsaXN0LCBpbmRleCkpID4gLTEpIHtcbiAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTsgLy8gSGFuZGxlIGZpcmluZyBpbmRleGVzXG5cbiAgICAgICAgICAgIGlmIChpbmRleCA8PSBmaXJpbmdJbmRleCkge1xuICAgICAgICAgICAgICBmaXJpbmdJbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIENoZWNrIGlmIGEgZ2l2ZW4gY2FsbGJhY2sgaXMgaW4gdGhlIGxpc3QuXG4gICAgICAvLyBJZiBubyBhcmd1bWVudCBpcyBnaXZlbiwgcmV0dXJuIHdoZXRoZXIgb3Igbm90IGxpc3QgaGFzIGNhbGxiYWNrcyBhdHRhY2hlZC5cbiAgICAgIGhhczogZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbiA/IGpRdWVyeS5pbkFycmF5KGZuLCBsaXN0KSA+IC0xIDogbGlzdC5sZW5ndGggPiAwO1xuICAgICAgfSxcbiAgICAgIC8vIFJlbW92ZSBhbGwgY2FsbGJhY2tzIGZyb20gdGhlIGxpc3RcbiAgICAgIGVtcHR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gRGlzYWJsZSAuZmlyZSBhbmQgLmFkZFxuICAgICAgLy8gQWJvcnQgYW55IGN1cnJlbnQvcGVuZGluZyBleGVjdXRpb25zXG4gICAgICAvLyBDbGVhciBhbGwgY2FsbGJhY2tzIGFuZCB2YWx1ZXNcbiAgICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9ja2VkID0gcXVldWUgPSBbXTtcbiAgICAgICAgbGlzdCA9IG1lbW9yeSA9IFwiXCI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIGRpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhbGlzdDtcbiAgICAgIH0sXG4gICAgICAvLyBEaXNhYmxlIC5maXJlXG4gICAgICAvLyBBbHNvIGRpc2FibGUgLmFkZCB1bmxlc3Mgd2UgaGF2ZSBtZW1vcnkgKHNpbmNlIGl0IHdvdWxkIGhhdmUgbm8gZWZmZWN0KVxuICAgICAgLy8gQWJvcnQgYW55IHBlbmRpbmcgZXhlY3V0aW9uc1xuICAgICAgbG9jazogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NrZWQgPSBxdWV1ZSA9IFtdO1xuXG4gICAgICAgIGlmICghbWVtb3J5ICYmICFmaXJpbmcpIHtcbiAgICAgICAgICBsaXN0ID0gbWVtb3J5ID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIGxvY2tlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFsb2NrZWQ7XG4gICAgICB9LFxuICAgICAgLy8gQ2FsbCBhbGwgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGNvbnRleHQgYW5kIGFyZ3VtZW50c1xuICAgICAgZmlyZVdpdGg6IGZ1bmN0aW9uIChjb250ZXh0LCBhcmdzKSB7XG4gICAgICAgIGlmICghbG9ja2VkKSB7XG4gICAgICAgICAgYXJncyA9IGFyZ3MgfHwgW107XG4gICAgICAgICAgYXJncyA9IFtjb250ZXh0LCBhcmdzLnNsaWNlID8gYXJncy5zbGljZSgpIDogYXJnc107XG4gICAgICAgICAgcXVldWUucHVzaChhcmdzKTtcblxuICAgICAgICAgIGlmICghZmlyaW5nKSB7XG4gICAgICAgICAgICBmaXJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gQ2FsbCBhbGwgdGhlIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBhcmd1bWVudHNcbiAgICAgIGZpcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5maXJlV2l0aCh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBUbyBrbm93IGlmIHRoZSBjYWxsYmFja3MgaGF2ZSBhbHJlYWR5IGJlZW4gY2FsbGVkIGF0IGxlYXN0IG9uY2VcbiAgICAgIGZpcmVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhIWZpcmVkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICBmdW5jdGlvbiBJZGVudGl0eSh2KSB7XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICBmdW5jdGlvbiBUaHJvd2VyKGV4KSB7XG4gICAgdGhyb3cgZXg7XG4gIH1cblxuICBmdW5jdGlvbiBhZG9wdFZhbHVlKHZhbHVlLCByZXNvbHZlLCByZWplY3QsIG5vVmFsdWUpIHtcbiAgICB2YXIgbWV0aG9kO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIENoZWNrIGZvciBwcm9taXNlIGFzcGVjdCBmaXJzdCB0byBwcml2aWxlZ2Ugc3luY2hyb25vdXMgYmVoYXZpb3JcbiAgICAgIGlmICh2YWx1ZSAmJiBpc0Z1bmN0aW9uKG1ldGhvZCA9IHZhbHVlLnByb21pc2UpKSB7XG4gICAgICAgIG1ldGhvZC5jYWxsKHZhbHVlKS5kb25lKHJlc29sdmUpLmZhaWwocmVqZWN0KTsgLy8gT3RoZXIgdGhlbmFibGVzXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIGlzRnVuY3Rpb24obWV0aG9kID0gdmFsdWUudGhlbikpIHtcbiAgICAgICAgbWV0aG9kLmNhbGwodmFsdWUsIHJlc29sdmUsIHJlamVjdCk7IC8vIE90aGVyIG5vbi10aGVuYWJsZXNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvbnRyb2wgYHJlc29sdmVgIGFyZ3VtZW50cyBieSBsZXR0aW5nIEFycmF5I3NsaWNlIGNhc3QgYm9vbGVhbiBgbm9WYWx1ZWAgdG8gaW50ZWdlcjpcbiAgICAgICAgLy8gKiBmYWxzZTogWyB2YWx1ZSBdLnNsaWNlKCAwICkgPT4gcmVzb2x2ZSggdmFsdWUgKVxuICAgICAgICAvLyAqIHRydWU6IFsgdmFsdWUgXS5zbGljZSggMSApID0+IHJlc29sdmUoKVxuICAgICAgICByZXNvbHZlLmFwcGx5KHVuZGVmaW5lZCwgW3ZhbHVlXS5zbGljZShub1ZhbHVlKSk7XG4gICAgICB9IC8vIEZvciBQcm9taXNlcy9BKywgY29udmVydCBleGNlcHRpb25zIGludG8gcmVqZWN0aW9uc1xuICAgICAgLy8gU2luY2UgalF1ZXJ5LndoZW4gZG9lc24ndCB1bndyYXAgdGhlbmFibGVzLCB3ZSBjYW4gc2tpcCB0aGUgZXh0cmEgY2hlY2tzIGFwcGVhcmluZyBpblxuICAgICAgLy8gRGVmZXJyZWQjdGhlbiB0byBjb25kaXRpb25hbGx5IHN1cHByZXNzIHJlamVjdGlvbi5cblxuICAgIH0gY2F0Y2ggKHZhbHVlKSB7XG4gICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCBvbmx5XG4gICAgICAvLyBTdHJpY3QgbW9kZSBmdW5jdGlvbnMgaW52b2tlZCB3aXRob3V0IC5jYWxsLy5hcHBseSBnZXQgZ2xvYmFsLW9iamVjdCBjb250ZXh0XG4gICAgICByZWplY3QuYXBwbHkodW5kZWZpbmVkLCBbdmFsdWVdKTtcbiAgICB9XG4gIH1cblxuICBqUXVlcnkuZXh0ZW5kKHtcbiAgICBEZWZlcnJlZDogZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgIHZhciB0dXBsZXMgPSBbLy8gYWN0aW9uLCBhZGQgbGlzdGVuZXIsIGNhbGxiYWNrcyxcbiAgICAgIC8vIC4uLiAudGhlbiBoYW5kbGVycywgYXJndW1lbnQgaW5kZXgsIFtmaW5hbCBzdGF0ZV1cbiAgICAgIFtcIm5vdGlmeVwiLCBcInByb2dyZXNzXCIsIGpRdWVyeS5DYWxsYmFja3MoXCJtZW1vcnlcIiksIGpRdWVyeS5DYWxsYmFja3MoXCJtZW1vcnlcIiksIDJdLCBbXCJyZXNvbHZlXCIsIFwiZG9uZVwiLCBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwgMCwgXCJyZXNvbHZlZFwiXSwgW1wicmVqZWN0XCIsIFwiZmFpbFwiLCBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwgMSwgXCJyZWplY3RlZFwiXV0sXG4gICAgICAgICAgc3RhdGUgPSBcInBlbmRpbmdcIixcbiAgICAgICAgICBwcm9taXNlID0ge1xuICAgICAgICBzdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWx3YXlzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGVmZXJyZWQuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgXCJjYXRjaFwiOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKG51bGwsIGZuKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gS2VlcCBwaXBlIGZvciBiYWNrLWNvbXBhdFxuICAgICAgICBwaXBlOiBmdW5jdGlvbiAoKVxuICAgICAgICAvKiBmbkRvbmUsIGZuRmFpbCwgZm5Qcm9ncmVzcyAqL1xuICAgICAgICB7XG4gICAgICAgICAgdmFyIGZucyA9IGFyZ3VtZW50cztcbiAgICAgICAgICByZXR1cm4galF1ZXJ5LkRlZmVycmVkKGZ1bmN0aW9uIChuZXdEZWZlcikge1xuICAgICAgICAgICAgalF1ZXJ5LmVhY2godHVwbGVzLCBmdW5jdGlvbiAoaSwgdHVwbGUpIHtcbiAgICAgICAgICAgICAgLy8gTWFwIHR1cGxlcyAocHJvZ3Jlc3MsIGRvbmUsIGZhaWwpIHRvIGFyZ3VtZW50cyAoZG9uZSwgZmFpbCwgcHJvZ3Jlc3MpXG4gICAgICAgICAgICAgIHZhciBmbiA9IGlzRnVuY3Rpb24oZm5zW3R1cGxlWzRdXSkgJiYgZm5zW3R1cGxlWzRdXTsgLy8gZGVmZXJyZWQucHJvZ3Jlc3MoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIubm90aWZ5IH0pXG4gICAgICAgICAgICAgIC8vIGRlZmVycmVkLmRvbmUoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVzb2x2ZSB9KVxuICAgICAgICAgICAgICAvLyBkZWZlcnJlZC5mYWlsKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLnJlamVjdCB9KVxuXG4gICAgICAgICAgICAgIGRlZmVycmVkW3R1cGxlWzFdXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVybmVkID0gZm4gJiYgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5lZCAmJiBpc0Z1bmN0aW9uKHJldHVybmVkLnByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5lZC5wcm9taXNlKCkucHJvZ3Jlc3MobmV3RGVmZXIubm90aWZ5KS5kb25lKG5ld0RlZmVyLnJlc29sdmUpLmZhaWwobmV3RGVmZXIucmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3RGVmZXJbdHVwbGVbMF0gKyBcIldpdGhcIl0odGhpcywgZm4gPyBbcmV0dXJuZWRdIDogYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmbnMgPSBudWxsO1xuICAgICAgICAgIH0pLnByb21pc2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGhlbjogZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzKSB7XG4gICAgICAgICAgdmFyIG1heERlcHRoID0gMDtcblxuICAgICAgICAgIGZ1bmN0aW9uIHJlc29sdmUoZGVwdGgsIGRlZmVycmVkLCBoYW5kbGVyLCBzcGVjaWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgbWlnaHRUaHJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZWQsIHRoZW47IC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4zXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTlcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgZG91YmxlLXJlc29sdXRpb24gYXR0ZW1wdHNcblxuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA8IG1heERlcHRoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuZWQgPSBoYW5kbGVyLmFwcGx5KHRoYXQsIGFyZ3MpOyAvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4xXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNDhcblxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5lZCA9PT0gZGVmZXJyZWQucHJvbWlzZSgpKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO1xuICAgICAgICAgICAgICAgIH0gLy8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbnMgMi4zLjMuMSwgMy41XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTRcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC03NVxuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIGB0aGVuYCBvbmx5IG9uY2VcblxuXG4gICAgICAgICAgICAgICAgdGhlbiA9IHJldHVybmVkICYmICggLy8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuNFxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTY0XG4gICAgICAgICAgICAgICAgLy8gT25seSBjaGVjayBvYmplY3RzIGFuZCBmdW5jdGlvbnMgZm9yIHRoZW5hYmlsaXR5XG4gICAgICAgICAgICAgICAgdHlwZW9mIHJldHVybmVkID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiByZXR1cm5lZCA9PT0gXCJmdW5jdGlvblwiKSAmJiByZXR1cm5lZC50aGVuOyAvLyBIYW5kbGUgYSByZXR1cm5lZCB0aGVuYWJsZVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhlbikpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgcHJvY2Vzc29ycyAobm90aWZ5KSBqdXN0IHdhaXQgZm9yIHJlc29sdXRpb25cbiAgICAgICAgICAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoZW4uY2FsbChyZXR1cm5lZCwgcmVzb2x2ZShtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsKSwgcmVzb2x2ZShtYXhEZXB0aCwgZGVmZXJyZWQsIFRocm93ZXIsIHNwZWNpYWwpKTsgLy8gTm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGFsc28gaG9vayBpbnRvIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAuLi5hbmQgZGlzcmVnYXJkIG9sZGVyIHJlc29sdXRpb24gdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIG1heERlcHRoKys7XG4gICAgICAgICAgICAgICAgICAgIHRoZW4uY2FsbChyZXR1cm5lZCwgcmVzb2x2ZShtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsKSwgcmVzb2x2ZShtYXhEZXB0aCwgZGVmZXJyZWQsIFRocm93ZXIsIHNwZWNpYWwpLCByZXNvbHZlKG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksIGRlZmVycmVkLm5vdGlmeVdpdGgpKTtcbiAgICAgICAgICAgICAgICAgIH0gLy8gSGFuZGxlIGFsbCBvdGhlciByZXR1cm5lZCB2YWx1ZXNcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAvLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcbiAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyICE9PSBJZGVudGl0eSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBhcmdzID0gW3JldHVybmVkXTtcbiAgICAgICAgICAgICAgICAgIH0gLy8gUHJvY2VzcyB0aGUgdmFsdWUocylcbiAgICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvY2VzcyBpcyByZXNvbHZlXG5cblxuICAgICAgICAgICAgICAgICAgKHNwZWNpYWwgfHwgZGVmZXJyZWQucmVzb2x2ZVdpdGgpKHRoYXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIC8vIE9ubHkgbm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGNhdGNoIGFuZCByZWplY3QgZXhjZXB0aW9uc1xuICAgICAgICAgICAgICBwcm9jZXNzID0gc3BlY2lhbCA/IG1pZ2h0VGhyb3cgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIG1pZ2h0VGhyb3coKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2spIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSwgcHJvY2Vzcy5zdGFja1RyYWNlKTtcbiAgICAgICAgICAgICAgICAgIH0gLy8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjQuMVxuICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjFcbiAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBwb3N0LXJlc29sdXRpb24gZXhjZXB0aW9uc1xuXG5cbiAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCArIDEgPj0gbWF4RGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIgIT09IFRocm93ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGF0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBbZV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3RXaXRoKHRoYXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTsgLy8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjFcbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTdcbiAgICAgICAgICAgICAgLy8gUmUtcmVzb2x2ZSBwcm9taXNlcyBpbW1lZGlhdGVseSB0byBkb2RnZSBmYWxzZSByZWplY3Rpb24gZnJvbVxuICAgICAgICAgICAgICAvLyBzdWJzZXF1ZW50IGVycm9yc1xuXG5cbiAgICAgICAgICAgICAgaWYgKGRlcHRoKSB7XG4gICAgICAgICAgICAgICAgcHJvY2VzcygpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIENhbGwgYW4gb3B0aW9uYWwgaG9vayB0byByZWNvcmQgdGhlIHN0YWNrLCBpbiBjYXNlIG9mIGV4Y2VwdGlvblxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0J3Mgb3RoZXJ3aXNlIGxvc3Qgd2hlbiBleGVjdXRpb24gZ29lcyBhc3luY1xuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKSB7XG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLnN0YWNrVHJhY2UgPSBqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQocHJvY2Vzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGpRdWVyeS5EZWZlcnJlZChmdW5jdGlvbiAobmV3RGVmZXIpIHtcbiAgICAgICAgICAgIC8vIHByb2dyZXNzX2hhbmRsZXJzLmFkZCggLi4uIClcbiAgICAgICAgICAgIHR1cGxlc1swXVszXS5hZGQocmVzb2x2ZSgwLCBuZXdEZWZlciwgaXNGdW5jdGlvbihvblByb2dyZXNzKSA/IG9uUHJvZ3Jlc3MgOiBJZGVudGl0eSwgbmV3RGVmZXIubm90aWZ5V2l0aCkpOyAvLyBmdWxmaWxsZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXG4gICAgICAgICAgICB0dXBsZXNbMV1bM10uYWRkKHJlc29sdmUoMCwgbmV3RGVmZXIsIGlzRnVuY3Rpb24ob25GdWxmaWxsZWQpID8gb25GdWxmaWxsZWQgOiBJZGVudGl0eSkpOyAvLyByZWplY3RlZF9oYW5kbGVycy5hZGQoIC4uLiApXG5cbiAgICAgICAgICAgIHR1cGxlc1syXVszXS5hZGQocmVzb2x2ZSgwLCBuZXdEZWZlciwgaXNGdW5jdGlvbihvblJlamVjdGVkKSA/IG9uUmVqZWN0ZWQgOiBUaHJvd2VyKSk7XG4gICAgICAgICAgfSkucHJvbWlzZSgpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBHZXQgYSBwcm9taXNlIGZvciB0aGlzIGRlZmVycmVkXG4gICAgICAgIC8vIElmIG9iaiBpcyBwcm92aWRlZCwgdGhlIHByb21pc2UgYXNwZWN0IGlzIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAgICAgICAgcHJvbWlzZTogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmogIT0gbnVsbCA/IGpRdWVyeS5leHRlbmQob2JqLCBwcm9taXNlKSA6IHByb21pc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAgICAgZGVmZXJyZWQgPSB7fTsgLy8gQWRkIGxpc3Qtc3BlY2lmaWMgbWV0aG9kc1xuXG4gICAgICBqUXVlcnkuZWFjaCh0dXBsZXMsIGZ1bmN0aW9uIChpLCB0dXBsZSkge1xuICAgICAgICB2YXIgbGlzdCA9IHR1cGxlWzJdLFxuICAgICAgICAgICAgc3RhdGVTdHJpbmcgPSB0dXBsZVs1XTsgLy8gcHJvbWlzZS5wcm9ncmVzcyA9IGxpc3QuYWRkXG4gICAgICAgIC8vIHByb21pc2UuZG9uZSA9IGxpc3QuYWRkXG4gICAgICAgIC8vIHByb21pc2UuZmFpbCA9IGxpc3QuYWRkXG5cbiAgICAgICAgcHJvbWlzZVt0dXBsZVsxXV0gPSBsaXN0LmFkZDsgLy8gSGFuZGxlIHN0YXRlXG5cbiAgICAgICAgaWYgKHN0YXRlU3RyaW5nKSB7XG4gICAgICAgICAgbGlzdC5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gc3RhdGUgPSBcInJlc29sdmVkXCIgKGkuZS4sIGZ1bGZpbGxlZClcbiAgICAgICAgICAgIC8vIHN0YXRlID0gXCJyZWplY3RlZFwiXG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlU3RyaW5nO1xuICAgICAgICAgIH0sIC8vIHJlamVjdGVkX2NhbGxiYWNrcy5kaXNhYmxlXG4gICAgICAgICAgLy8gZnVsZmlsbGVkX2NhbGxiYWNrcy5kaXNhYmxlXG4gICAgICAgICAgdHVwbGVzWzMgLSBpXVsyXS5kaXNhYmxlLCAvLyByZWplY3RlZF9oYW5kbGVycy5kaXNhYmxlXG4gICAgICAgICAgLy8gZnVsZmlsbGVkX2hhbmRsZXJzLmRpc2FibGVcbiAgICAgICAgICB0dXBsZXNbMyAtIGldWzNdLmRpc2FibGUsIC8vIHByb2dyZXNzX2NhbGxiYWNrcy5sb2NrXG4gICAgICAgICAgdHVwbGVzWzBdWzJdLmxvY2ssIC8vIHByb2dyZXNzX2hhbmRsZXJzLmxvY2tcbiAgICAgICAgICB0dXBsZXNbMF1bM10ubG9jayk7XG4gICAgICAgIH0gLy8gcHJvZ3Jlc3NfaGFuZGxlcnMuZmlyZVxuICAgICAgICAvLyBmdWxmaWxsZWRfaGFuZGxlcnMuZmlyZVxuICAgICAgICAvLyByZWplY3RlZF9oYW5kbGVycy5maXJlXG5cblxuICAgICAgICBsaXN0LmFkZCh0dXBsZVszXS5maXJlKTsgLy8gZGVmZXJyZWQubm90aWZ5ID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLm5vdGlmeVdpdGgoLi4uKSB9XG4gICAgICAgIC8vIGRlZmVycmVkLnJlc29sdmUgPSBmdW5jdGlvbigpIHsgZGVmZXJyZWQucmVzb2x2ZVdpdGgoLi4uKSB9XG4gICAgICAgIC8vIGRlZmVycmVkLnJlamVjdCA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZWplY3RXaXRoKC4uLikgfVxuXG4gICAgICAgIGRlZmVycmVkW3R1cGxlWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkZWZlcnJlZFt0dXBsZVswXSArIFwiV2l0aFwiXSh0aGlzID09PSBkZWZlcnJlZCA/IHVuZGVmaW5lZCA6IHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07IC8vIGRlZmVycmVkLm5vdGlmeVdpdGggPSBsaXN0LmZpcmVXaXRoXG4gICAgICAgIC8vIGRlZmVycmVkLnJlc29sdmVXaXRoID0gbGlzdC5maXJlV2l0aFxuICAgICAgICAvLyBkZWZlcnJlZC5yZWplY3RXaXRoID0gbGlzdC5maXJlV2l0aFxuXG5cbiAgICAgICAgZGVmZXJyZWRbdHVwbGVbMF0gKyBcIldpdGhcIl0gPSBsaXN0LmZpcmVXaXRoO1xuICAgICAgfSk7IC8vIE1ha2UgdGhlIGRlZmVycmVkIGEgcHJvbWlzZVxuXG4gICAgICBwcm9taXNlLnByb21pc2UoZGVmZXJyZWQpOyAvLyBDYWxsIGdpdmVuIGZ1bmMgaWYgYW55XG5cbiAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgIGZ1bmMuY2FsbChkZWZlcnJlZCwgZGVmZXJyZWQpO1xuICAgICAgfSAvLyBBbGwgZG9uZSFcblxuXG4gICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgfSxcbiAgICAvLyBEZWZlcnJlZCBoZWxwZXJcbiAgICB3aGVuOiBmdW5jdGlvbiAoc2luZ2xlVmFsdWUpIHtcbiAgICAgIHZhciAvLyBjb3VudCBvZiB1bmNvbXBsZXRlZCBzdWJvcmRpbmF0ZXNcbiAgICAgIHJlbWFpbmluZyA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgLy8gY291bnQgb2YgdW5wcm9jZXNzZWQgYXJndW1lbnRzXG4gICAgICBpID0gcmVtYWluaW5nLFxuICAgICAgICAgIC8vIHN1Ym9yZGluYXRlIGZ1bGZpbGxtZW50IGRhdGFcbiAgICAgIHJlc29sdmVDb250ZXh0cyA9IEFycmF5KGkpLFxuICAgICAgICAgIHJlc29sdmVWYWx1ZXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgLy8gdGhlIG1hc3RlciBEZWZlcnJlZFxuICAgICAgbWFzdGVyID0galF1ZXJ5LkRlZmVycmVkKCksXG4gICAgICAgICAgLy8gc3Vib3JkaW5hdGUgY2FsbGJhY2sgZmFjdG9yeVxuICAgICAgdXBkYXRlRnVuYyA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXNvbHZlQ29udGV4dHNbaV0gPSB0aGlzO1xuICAgICAgICAgIHJlc29sdmVWYWx1ZXNbaV0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlLmNhbGwoYXJndW1lbnRzKSA6IHZhbHVlO1xuXG4gICAgICAgICAgaWYgKCEgLS1yZW1haW5pbmcpIHtcbiAgICAgICAgICAgIG1hc3Rlci5yZXNvbHZlV2l0aChyZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07IC8vIFNpbmdsZS0gYW5kIGVtcHR5IGFyZ3VtZW50cyBhcmUgYWRvcHRlZCBsaWtlIFByb21pc2UucmVzb2x2ZVxuXG5cbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMSkge1xuICAgICAgICBhZG9wdFZhbHVlKHNpbmdsZVZhbHVlLCBtYXN0ZXIuZG9uZSh1cGRhdGVGdW5jKGkpKS5yZXNvbHZlLCBtYXN0ZXIucmVqZWN0LCAhcmVtYWluaW5nKTsgLy8gVXNlIC50aGVuKCkgdG8gdW53cmFwIHNlY29uZGFyeSB0aGVuYWJsZXMgKGNmLiBnaC0zMDAwKVxuXG4gICAgICAgIGlmIChtYXN0ZXIuc3RhdGUoKSA9PT0gXCJwZW5kaW5nXCIgfHwgaXNGdW5jdGlvbihyZXNvbHZlVmFsdWVzW2ldICYmIHJlc29sdmVWYWx1ZXNbaV0udGhlbikpIHtcbiAgICAgICAgICByZXR1cm4gbWFzdGVyLnRoZW4oKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBNdWx0aXBsZSBhcmd1bWVudHMgYXJlIGFnZ3JlZ2F0ZWQgbGlrZSBQcm9taXNlLmFsbCBhcnJheSBlbGVtZW50c1xuXG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgYWRvcHRWYWx1ZShyZXNvbHZlVmFsdWVzW2ldLCB1cGRhdGVGdW5jKGkpLCBtYXN0ZXIucmVqZWN0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hc3Rlci5wcm9taXNlKCk7XG4gICAgfVxuICB9KTsgLy8gVGhlc2UgdXN1YWxseSBpbmRpY2F0ZSBhIHByb2dyYW1tZXIgbWlzdGFrZSBkdXJpbmcgZGV2ZWxvcG1lbnQsXG4gIC8vIHdhcm4gYWJvdXQgdGhlbSBBU0FQIHJhdGhlciB0aGFuIHN3YWxsb3dpbmcgdGhlbSBieSBkZWZhdWx0LlxuXG4gIHZhciByZXJyb3JOYW1lcyA9IC9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO1xuXG4gIGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rID0gZnVuY3Rpb24gKGVycm9yLCBzdGFjaykge1xuICAgIC8vIFN1cHBvcnQ6IElFIDggLSA5IG9ubHlcbiAgICAvLyBDb25zb2xlIGV4aXN0cyB3aGVuIGRldiB0b29scyBhcmUgb3Blbiwgd2hpY2ggY2FuIGhhcHBlbiBhdCBhbnkgdGltZVxuICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS53YXJuICYmIGVycm9yICYmIHJlcnJvck5hbWVzLnRlc3QoZXJyb3IubmFtZSkpIHtcbiAgICAgIHdpbmRvdy5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIiArIGVycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrLCBzdGFjayk7XG4gICAgfVxuICB9O1xuXG4gIGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0pO1xuICB9OyAvLyBUaGUgZGVmZXJyZWQgdXNlZCBvbiBET00gcmVhZHlcblxuXG4gIHZhciByZWFkeUxpc3QgPSBqUXVlcnkuRGVmZXJyZWQoKTtcblxuICBqUXVlcnkuZm4ucmVhZHkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZWFkeUxpc3QudGhlbihmbikgLy8gV3JhcCBqUXVlcnkucmVhZHlFeGNlcHRpb24gaW4gYSBmdW5jdGlvbiBzbyB0aGF0IHRoZSBsb29rdXBcbiAgICAvLyBoYXBwZW5zIGF0IHRoZSB0aW1lIG9mIGVycm9yIGhhbmRsaW5nIGluc3RlYWQgb2YgY2FsbGJhY2tcbiAgICAvLyByZWdpc3RyYXRpb24uXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgalF1ZXJ5LnJlYWR5RXhjZXB0aW9uKGVycm9yKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBqUXVlcnkuZXh0ZW5kKHtcbiAgICAvLyBJcyB0aGUgRE9NIHJlYWR5IHRvIGJlIHVzZWQ/IFNldCB0byB0cnVlIG9uY2UgaXQgb2NjdXJzLlxuICAgIGlzUmVhZHk6IGZhbHNlLFxuICAgIC8vIEEgY291bnRlciB0byB0cmFjayBob3cgbWFueSBpdGVtcyB0byB3YWl0IGZvciBiZWZvcmVcbiAgICAvLyB0aGUgcmVhZHkgZXZlbnQgZmlyZXMuIFNlZSAjNjc4MVxuICAgIHJlYWR5V2FpdDogMSxcbiAgICAvLyBIYW5kbGUgd2hlbiB0aGUgRE9NIGlzIHJlYWR5XG4gICAgcmVhZHk6IGZ1bmN0aW9uICh3YWl0KSB7XG4gICAgICAvLyBBYm9ydCBpZiB0aGVyZSBhcmUgcGVuZGluZyBob2xkcyBvciB3ZSdyZSBhbHJlYWR5IHJlYWR5XG4gICAgICBpZiAod2FpdCA9PT0gdHJ1ZSA/IC0talF1ZXJ5LnJlYWR5V2FpdCA6IGpRdWVyeS5pc1JlYWR5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gUmVtZW1iZXIgdGhhdCB0aGUgRE9NIGlzIHJlYWR5XG5cblxuICAgICAgalF1ZXJ5LmlzUmVhZHkgPSB0cnVlOyAvLyBJZiBhIG5vcm1hbCBET00gUmVhZHkgZXZlbnQgZmlyZWQsIGRlY3JlbWVudCwgYW5kIHdhaXQgaWYgbmVlZCBiZVxuXG4gICAgICBpZiAod2FpdCAhPT0gdHJ1ZSAmJiAtLWpRdWVyeS5yZWFkeVdhaXQgPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gSWYgdGhlcmUgYXJlIGZ1bmN0aW9ucyBib3VuZCwgdG8gZXhlY3V0ZVxuXG5cbiAgICAgIHJlYWR5TGlzdC5yZXNvbHZlV2l0aChkb2N1bWVudCwgW2pRdWVyeV0pO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5yZWFkeS50aGVuID0gcmVhZHlMaXN0LnRoZW47IC8vIFRoZSByZWFkeSBldmVudCBoYW5kbGVyIGFuZCBzZWxmIGNsZWFudXAgbWV0aG9kXG5cbiAgZnVuY3Rpb24gY29tcGxldGVkKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNvbXBsZXRlZCk7XG4gICAgalF1ZXJ5LnJlYWR5KCk7XG4gIH0gLy8gQ2F0Y2ggY2FzZXMgd2hlcmUgJChkb2N1bWVudCkucmVhZHkoKSBpcyBjYWxsZWRcbiAgLy8gYWZ0ZXIgdGhlIGJyb3dzZXIgZXZlbnQgaGFzIGFscmVhZHkgb2NjdXJyZWQuXG4gIC8vIFN1cHBvcnQ6IElFIDw9OSAtIDEwIG9ubHlcbiAgLy8gT2xkZXIgSUUgc29tZXRpbWVzIHNpZ25hbHMgXCJpbnRlcmFjdGl2ZVwiIHRvbyBzb29uXG5cblxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwpIHtcbiAgICAvLyBIYW5kbGUgaXQgYXN5bmNocm9ub3VzbHkgdG8gYWxsb3cgc2NyaXB0cyB0aGUgb3Bwb3J0dW5pdHkgdG8gZGVsYXkgcmVhZHlcbiAgICB3aW5kb3cuc2V0VGltZW91dChqUXVlcnkucmVhZHkpO1xuICB9IGVsc2Uge1xuICAgIC8vIFVzZSB0aGUgaGFuZHkgZXZlbnQgY2FsbGJhY2tcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQpOyAvLyBBIGZhbGxiYWNrIHRvIHdpbmRvdy5vbmxvYWQsIHRoYXQgd2lsbCBhbHdheXMgd29ya1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNvbXBsZXRlZCk7XG4gIH0gLy8gTXVsdGlmdW5jdGlvbmFsIG1ldGhvZCB0byBnZXQgYW5kIHNldCB2YWx1ZXMgb2YgYSBjb2xsZWN0aW9uXG4gIC8vIFRoZSB2YWx1ZS9zIGNhbiBvcHRpb25hbGx5IGJlIGV4ZWN1dGVkIGlmIGl0J3MgYSBmdW5jdGlvblxuXG5cbiAgdmFyIGFjY2VzcyA9IGZ1bmN0aW9uIChlbGVtcywgZm4sIGtleSwgdmFsdWUsIGNoYWluYWJsZSwgZW1wdHlHZXQsIHJhdykge1xuICAgIHZhciBpID0gMCxcbiAgICAgICAgbGVuID0gZWxlbXMubGVuZ3RoLFxuICAgICAgICBidWxrID0ga2V5ID09IG51bGw7IC8vIFNldHMgbWFueSB2YWx1ZXNcblxuICAgIGlmICh0b1R5cGUoa2V5KSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY2hhaW5hYmxlID0gdHJ1ZTtcblxuICAgICAgZm9yIChpIGluIGtleSkge1xuICAgICAgICBhY2Nlc3MoZWxlbXMsIGZuLCBpLCBrZXlbaV0sIHRydWUsIGVtcHR5R2V0LCByYXcpO1xuICAgICAgfSAvLyBTZXRzIG9uZSB2YWx1ZVxuXG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGFpbmFibGUgPSB0cnVlO1xuXG4gICAgICBpZiAoIWlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIHJhdyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChidWxrKSB7XG4gICAgICAgIC8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxuICAgICAgICBpZiAocmF3KSB7XG4gICAgICAgICAgZm4uY2FsbChlbGVtcywgdmFsdWUpO1xuICAgICAgICAgIGZuID0gbnVsbDsgLy8gLi4uZXhjZXB0IHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uIHZhbHVlc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1bGsgPSBmbjtcblxuICAgICAgICAgIGZuID0gZnVuY3Rpb24gKGVsZW0sIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBidWxrLmNhbGwoalF1ZXJ5KGVsZW0pLCB2YWx1ZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGZuKGVsZW1zW2ldLCBrZXksIHJhdyA/IHZhbHVlIDogdmFsdWUuY2FsbChlbGVtc1tpXSwgaSwgZm4oZWxlbXNbaV0sIGtleSkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFpbmFibGUpIHtcbiAgICAgIHJldHVybiBlbGVtcztcbiAgICB9IC8vIEdldHNcblxuXG4gICAgaWYgKGJ1bGspIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKGVsZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVuID8gZm4oZWxlbXNbMF0sIGtleSkgOiBlbXB0eUdldDtcbiAgfTsgLy8gTWF0Y2hlcyBkYXNoZWQgc3RyaW5nIGZvciBjYW1lbGl6aW5nXG5cblxuICB2YXIgcm1zUHJlZml4ID0gL14tbXMtLyxcbiAgICAgIHJkYXNoQWxwaGEgPSAvLShbYS16XSkvZzsgLy8gVXNlZCBieSBjYW1lbENhc2UgYXMgY2FsbGJhY2sgdG8gcmVwbGFjZSgpXG5cbiAgZnVuY3Rpb24gZmNhbWVsQ2FzZShhbGwsIGxldHRlcikge1xuICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSAvLyBDb252ZXJ0IGRhc2hlZCB0byBjYW1lbENhc2U7IHVzZWQgYnkgdGhlIGNzcyBhbmQgZGF0YSBtb2R1bGVzXG4gIC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExLCBFZGdlIDEyIC0gMTVcbiAgLy8gTWljcm9zb2Z0IGZvcmdvdCB0byBodW1wIHRoZWlyIHZlbmRvciBwcmVmaXggKCM5NTcyKVxuXG5cbiAgZnVuY3Rpb24gY2FtZWxDYXNlKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShybXNQcmVmaXgsIFwibXMtXCIpLnJlcGxhY2UocmRhc2hBbHBoYSwgZmNhbWVsQ2FzZSk7XG4gIH1cblxuICB2YXIgYWNjZXB0RGF0YSA9IGZ1bmN0aW9uIChvd25lcikge1xuICAgIC8vIEFjY2VwdHMgb25seTpcbiAgICAvLyAgLSBOb2RlXG4gICAgLy8gICAgLSBOb2RlLkVMRU1FTlRfTk9ERVxuICAgIC8vICAgIC0gTm9kZS5ET0NVTUVOVF9OT0RFXG4gICAgLy8gIC0gT2JqZWN0XG4gICAgLy8gICAgLSBBbnlcbiAgICByZXR1cm4gb3duZXIubm9kZVR5cGUgPT09IDEgfHwgb3duZXIubm9kZVR5cGUgPT09IDkgfHwgIStvd25lci5ub2RlVHlwZTtcbiAgfTtcblxuICBmdW5jdGlvbiBEYXRhKCkge1xuICAgIHRoaXMuZXhwYW5kbyA9IGpRdWVyeS5leHBhbmRvICsgRGF0YS51aWQrKztcbiAgfVxuXG4gIERhdGEudWlkID0gMTtcbiAgRGF0YS5wcm90b3R5cGUgPSB7XG4gICAgY2FjaGU6IGZ1bmN0aW9uIChvd25lcikge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIG93bmVyIG9iamVjdCBhbHJlYWR5IGhhcyBhIGNhY2hlXG4gICAgICB2YXIgdmFsdWUgPSBvd25lclt0aGlzLmV4cGFuZG9dOyAvLyBJZiBub3QsIGNyZWF0ZSBvbmVcblxuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IHt9OyAvLyBXZSBjYW4gYWNjZXB0IGRhdGEgZm9yIG5vbi1lbGVtZW50IG5vZGVzIGluIG1vZGVybiBicm93c2VycyxcbiAgICAgICAgLy8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSAjODMzNS5cbiAgICAgICAgLy8gQWx3YXlzIHJldHVybiBhbiBlbXB0eSBvYmplY3QuXG5cbiAgICAgICAgaWYgKGFjY2VwdERhdGEob3duZXIpKSB7XG4gICAgICAgICAgLy8gSWYgaXQgaXMgYSBub2RlIHVubGlrZWx5IHRvIGJlIHN0cmluZ2lmeS1lZCBvciBsb29wZWQgb3ZlclxuICAgICAgICAgIC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG4gICAgICAgICAgaWYgKG93bmVyLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBvd25lclt0aGlzLmV4cGFuZG9dID0gdmFsdWU7IC8vIE90aGVyd2lzZSBzZWN1cmUgaXQgaW4gYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eVxuICAgICAgICAgICAgLy8gY29uZmlndXJhYmxlIG11c3QgYmUgdHJ1ZSB0byBhbGxvdyB0aGUgcHJvcGVydHkgdG8gYmVcbiAgICAgICAgICAgIC8vIGRlbGV0ZWQgd2hlbiBkYXRhIGlzIHJlbW92ZWRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG93bmVyLCB0aGlzLmV4cGFuZG8sIHtcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIChvd25lciwgZGF0YSwgdmFsdWUpIHtcbiAgICAgIHZhciBwcm9wLFxuICAgICAgICAgIGNhY2hlID0gdGhpcy5jYWNoZShvd25lcik7IC8vIEhhbmRsZTogWyBvd25lciwga2V5LCB2YWx1ZSBdIGFyZ3NcbiAgICAgIC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1NylcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNhY2hlW2NhbWVsQ2FzZShkYXRhKV0gPSB2YWx1ZTsgLy8gSGFuZGxlOiBbIG93bmVyLCB7IHByb3BlcnRpZXMgfSBdIGFyZ3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvcHkgdGhlIHByb3BlcnRpZXMgb25lLWJ5LW9uZSB0byB0aGUgY2FjaGUgb2JqZWN0XG4gICAgICAgIGZvciAocHJvcCBpbiBkYXRhKSB7XG4gICAgICAgICAgY2FjaGVbY2FtZWxDYXNlKHByb3ApXSA9IGRhdGFbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiAob3duZXIsIGtleSkge1xuICAgICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWNoZShvd25lcikgOiAvLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG4gICAgICBvd25lclt0aGlzLmV4cGFuZG9dICYmIG93bmVyW3RoaXMuZXhwYW5kb11bY2FtZWxDYXNlKGtleSldO1xuICAgIH0sXG4gICAgYWNjZXNzOiBmdW5jdGlvbiAob3duZXIsIGtleSwgdmFsdWUpIHtcbiAgICAgIC8vIEluIGNhc2VzIHdoZXJlIGVpdGhlcjpcbiAgICAgIC8vXG4gICAgICAvLyAgIDEuIE5vIGtleSB3YXMgc3BlY2lmaWVkXG4gICAgICAvLyAgIDIuIEEgc3RyaW5nIGtleSB3YXMgc3BlY2lmaWVkLCBidXQgbm8gdmFsdWUgcHJvdmlkZWRcbiAgICAgIC8vXG4gICAgICAvLyBUYWtlIHRoZSBcInJlYWRcIiBwYXRoIGFuZCBhbGxvdyB0aGUgZ2V0IG1ldGhvZCB0byBkZXRlcm1pbmVcbiAgICAgIC8vIHdoaWNoIHZhbHVlIHRvIHJldHVybiwgcmVzcGVjdGl2ZWx5IGVpdGhlcjpcbiAgICAgIC8vXG4gICAgICAvLyAgIDEuIFRoZSBlbnRpcmUgY2FjaGUgb2JqZWN0XG4gICAgICAvLyAgIDIuIFRoZSBkYXRhIHN0b3JlZCBhdCB0aGUga2V5XG4gICAgICAvL1xuICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGtleSAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG93bmVyLCBrZXkpO1xuICAgICAgfSAvLyBXaGVuIHRoZSBrZXkgaXMgbm90IGEgc3RyaW5nLCBvciBib3RoIGEga2V5IGFuZCB2YWx1ZVxuICAgICAgLy8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG4gICAgICAvL1xuICAgICAgLy8gICAxLiBBbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICAgICAgLy8gICAyLiBBIGtleSBhbmQgdmFsdWVcbiAgICAgIC8vXG5cblxuICAgICAgdGhpcy5zZXQob3duZXIsIGtleSwgdmFsdWUpOyAvLyBTaW5jZSB0aGUgXCJzZXRcIiBwYXRoIGNhbiBoYXZlIHR3byBwb3NzaWJsZSBlbnRyeSBwb2ludHNcbiAgICAgIC8vIHJldHVybiB0aGUgZXhwZWN0ZWQgZGF0YSBiYXNlZCBvbiB3aGljaCBwYXRoIHdhcyB0YWtlblsqXVxuXG4gICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoga2V5O1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAob3duZXIsIGtleSkge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgY2FjaGUgPSBvd25lclt0aGlzLmV4cGFuZG9dO1xuXG4gICAgICBpZiAoY2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBTdXBwb3J0IGFycmF5IG9yIHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcgb2Yga2V5c1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgLy8gSWYga2V5IGlzIGFuIGFycmF5IG9mIGtleXMuLi5cbiAgICAgICAgICAvLyBXZSBhbHdheXMgc2V0IGNhbWVsQ2FzZSBrZXlzLCBzbyByZW1vdmUgdGhhdC5cbiAgICAgICAgICBrZXkgPSBrZXkubWFwKGNhbWVsQ2FzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAga2V5ID0gY2FtZWxDYXNlKGtleSk7IC8vIElmIGEga2V5IHdpdGggdGhlIHNwYWNlcyBleGlzdHMsIHVzZSBpdC5cbiAgICAgICAgICAvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuXG4gICAgICAgICAga2V5ID0ga2V5IGluIGNhY2hlID8gW2tleV0gOiBrZXkubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW107XG4gICAgICAgIH1cblxuICAgICAgICBpID0ga2V5Lmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgZGVsZXRlIGNhY2hlW2tleVtpXV07XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUmVtb3ZlIHRoZSBleHBhbmRvIGlmIHRoZXJlJ3Mgbm8gbW9yZSBkYXRhXG5cblxuICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGpRdWVyeS5pc0VtcHR5T2JqZWN0KGNhY2hlKSkge1xuICAgICAgICAvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1XG4gICAgICAgIC8vIFdlYmtpdCAmIEJsaW5rIHBlcmZvcm1hbmNlIHN1ZmZlcnMgd2hlbiBkZWxldGluZyBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIGZyb20gRE9NIG5vZGVzLCBzbyBzZXQgdG8gdW5kZWZpbmVkIGluc3RlYWRcbiAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzc4NjA3IChidWcgcmVzdHJpY3RlZClcbiAgICAgICAgaWYgKG93bmVyLm5vZGVUeXBlKSB7XG4gICAgICAgICAgb3duZXJbdGhpcy5leHBhbmRvXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgb3duZXJbdGhpcy5leHBhbmRvXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaGFzRGF0YTogZnVuY3Rpb24gKG93bmVyKSB7XG4gICAgICB2YXIgY2FjaGUgPSBvd25lclt0aGlzLmV4cGFuZG9dO1xuICAgICAgcmV0dXJuIGNhY2hlICE9PSB1bmRlZmluZWQgJiYgIWpRdWVyeS5pc0VtcHR5T2JqZWN0KGNhY2hlKTtcbiAgICB9XG4gIH07XG4gIHZhciBkYXRhUHJpdiA9IG5ldyBEYXRhKCk7XG4gIHZhciBkYXRhVXNlciA9IG5ldyBEYXRhKCk7IC8vXHRJbXBsZW1lbnRhdGlvbiBTdW1tYXJ5XG4gIC8vXG4gIC8vXHQxLiBFbmZvcmNlIEFQSSBzdXJmYWNlIGFuZCBzZW1hbnRpYyBjb21wYXRpYmlsaXR5IHdpdGggMS45LnggYnJhbmNoXG4gIC8vXHQyLiBJbXByb3ZlIHRoZSBtb2R1bGUncyBtYWludGFpbmFiaWxpdHkgYnkgcmVkdWNpbmcgdGhlIHN0b3JhZ2VcbiAgLy9cdFx0cGF0aHMgdG8gYSBzaW5nbGUgbWVjaGFuaXNtLlxuICAvL1x0My4gVXNlIHRoZSBzYW1lIHNpbmdsZSBtZWNoYW5pc20gdG8gc3VwcG9ydCBcInByaXZhdGVcIiBhbmQgXCJ1c2VyXCIgZGF0YS5cbiAgLy9cdDQuIF9OZXZlcl8gZXhwb3NlIFwicHJpdmF0ZVwiIGRhdGEgdG8gdXNlciBjb2RlIChUT0RPOiBEcm9wIF9kYXRhLCBfcmVtb3ZlRGF0YSlcbiAgLy9cdDUuIEF2b2lkIGV4cG9zaW5nIGltcGxlbWVudGF0aW9uIGRldGFpbHMgb24gdXNlciBvYmplY3RzIChlZy4gZXhwYW5kbyBwcm9wZXJ0aWVzKVxuICAvL1x0Ni4gUHJvdmlkZSBhIGNsZWFyIHBhdGggZm9yIGltcGxlbWVudGF0aW9uIHVwZ3JhZGUgdG8gV2Vha01hcCBpbiAyMDE0XG5cbiAgdmFyIHJicmFjZSA9IC9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxcbiAgICAgIHJtdWx0aURhc2ggPSAvW0EtWl0vZztcblxuICBmdW5jdGlvbiBnZXREYXRhKGRhdGEpIHtcbiAgICBpZiAoZGF0YSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChkYXRhID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSA9PT0gXCJudWxsXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gLy8gT25seSBjb252ZXJ0IHRvIGEgbnVtYmVyIGlmIGl0IGRvZXNuJ3QgY2hhbmdlIHRoZSBzdHJpbmdcblxuXG4gICAgaWYgKGRhdGEgPT09ICtkYXRhICsgXCJcIikge1xuICAgICAgcmV0dXJuICtkYXRhO1xuICAgIH1cblxuICAgIGlmIChyYnJhY2UudGVzdChkYXRhKSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBmdW5jdGlvbiBkYXRhQXR0cihlbGVtLCBrZXksIGRhdGEpIHtcbiAgICB2YXIgbmFtZTsgLy8gSWYgbm90aGluZyB3YXMgZm91bmQgaW50ZXJuYWxseSwgdHJ5IHRvIGZldGNoIGFueVxuICAgIC8vIGRhdGEgZnJvbSB0aGUgSFRNTDUgZGF0YS0qIGF0dHJpYnV0ZVxuXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBuYW1lID0gXCJkYXRhLVwiICsga2V5LnJlcGxhY2Uocm11bHRpRGFzaCwgXCItJCZcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgIGRhdGEgPSBlbGVtLmdldEF0dHJpYnV0ZShuYW1lKTtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGF0YSA9IGdldERhdGEoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9IC8vIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGRhdGEgc28gaXQgaXNuJ3QgY2hhbmdlZCBsYXRlclxuXG5cbiAgICAgICAgZGF0YVVzZXIuc2V0KGVsZW0sIGtleSwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgaGFzRGF0YTogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHJldHVybiBkYXRhVXNlci5oYXNEYXRhKGVsZW0pIHx8IGRhdGFQcml2Lmhhc0RhdGEoZWxlbSk7XG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGFVc2VyLmFjY2VzcyhlbGVtLCBuYW1lLCBkYXRhKTtcbiAgICB9LFxuICAgIHJlbW92ZURhdGE6IGZ1bmN0aW9uIChlbGVtLCBuYW1lKSB7XG4gICAgICBkYXRhVXNlci5yZW1vdmUoZWxlbSwgbmFtZSk7XG4gICAgfSxcbiAgICAvLyBUT0RPOiBOb3cgdGhhdCBhbGwgY2FsbHMgdG8gX2RhdGEgYW5kIF9yZW1vdmVEYXRhIGhhdmUgYmVlbiByZXBsYWNlZFxuICAgIC8vIHdpdGggZGlyZWN0IGNhbGxzIHRvIGRhdGFQcml2IG1ldGhvZHMsIHRoZXNlIGNhbiBiZSBkZXByZWNhdGVkLlxuICAgIF9kYXRhOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGFQcml2LmFjY2VzcyhlbGVtLCBuYW1lLCBkYXRhKTtcbiAgICB9LFxuICAgIF9yZW1vdmVEYXRhOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSkge1xuICAgICAgZGF0YVByaXYucmVtb3ZlKGVsZW0sIG5hbWUpO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIGRhdGE6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgZWxlbSA9IHRoaXNbMF0sXG4gICAgICAgICAgYXR0cnMgPSBlbGVtICYmIGVsZW0uYXR0cmlidXRlczsgLy8gR2V0cyBhbGwgdmFsdWVzXG5cbiAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICBkYXRhID0gZGF0YVVzZXIuZ2V0KGVsZW0pO1xuXG4gICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgIWRhdGFQcml2LmdldChlbGVtLCBcImhhc0RhdGFBdHRyc1wiKSkge1xuICAgICAgICAgICAgaSA9IGF0dHJzLmxlbmd0aDtcblxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG4gICAgICAgICAgICAgIC8vIFRoZSBhdHRycyBlbGVtZW50cyBjYW4gYmUgbnVsbCAoIzE0ODk0KVxuICAgICAgICAgICAgICBpZiAoYXR0cnNbaV0pIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gYXR0cnNbaV0ubmFtZTtcblxuICAgICAgICAgICAgICAgIGlmIChuYW1lLmluZGV4T2YoXCJkYXRhLVwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgbmFtZSA9IGNhbWVsQ2FzZShuYW1lLnNsaWNlKDUpKTtcbiAgICAgICAgICAgICAgICAgIGRhdGFBdHRyKGVsZW0sIG5hbWUsIGRhdGFbbmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRhUHJpdi5zZXQoZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IC8vIFNldHMgbXVsdGlwbGUgdmFsdWVzXG5cblxuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGF0YVVzZXIuc2V0KHRoaXMsIGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGF0YTsgLy8gVGhlIGNhbGxpbmcgalF1ZXJ5IG9iamVjdCAoZWxlbWVudCBtYXRjaGVzKSBpcyBub3QgZW1wdHlcbiAgICAgICAgLy8gKGFuZCB0aGVyZWZvcmUgaGFzIGFuIGVsZW1lbnQgYXBwZWFycyBhdCB0aGlzWyAwIF0pIGFuZCB0aGVcbiAgICAgICAgLy8gYHZhbHVlYCBwYXJhbWV0ZXIgd2FzIG5vdCB1bmRlZmluZWQuIEFuIGVtcHR5IGpRdWVyeSBvYmplY3RcbiAgICAgICAgLy8gd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgZm9yIGVsZW0gPSB0aGlzWyAwIF0gd2hpY2ggd2lsbFxuICAgICAgICAvLyB0aHJvdyBhbiBleGNlcHRpb24gaWYgYW4gYXR0ZW1wdCB0byByZWFkIGEgZGF0YSBjYWNoZSBpcyBtYWRlLlxuXG4gICAgICAgIGlmIChlbGVtICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBBdHRlbXB0IHRvIGdldCBkYXRhIGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgLy8gVGhlIGtleSB3aWxsIGFsd2F5cyBiZSBjYW1lbENhc2VkIGluIERhdGFcbiAgICAgICAgICBkYXRhID0gZGF0YVVzZXIuZ2V0KGVsZW0sIGtleSk7XG5cbiAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICB9IC8vIEF0dGVtcHQgdG8gXCJkaXNjb3ZlclwiIHRoZSBkYXRhIGluXG4gICAgICAgICAgLy8gSFRNTDUgY3VzdG9tIGRhdGEtKiBhdHRyc1xuXG5cbiAgICAgICAgICBkYXRhID0gZGF0YUF0dHIoZWxlbSwga2V5KTtcblxuICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0gLy8gV2UgdHJpZWQgcmVhbGx5IGhhcmQsIGJ1dCB0aGUgZGF0YSBkb2Vzbid0IGV4aXN0LlxuXG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU2V0IHRoZSBkYXRhLi4uXG5cblxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIGFsd2F5cyBzdG9yZSB0aGUgY2FtZWxDYXNlZCBrZXlcbiAgICAgICAgICBkYXRhVXNlci5zZXQodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxLCBudWxsLCB0cnVlKTtcbiAgICB9LFxuICAgIHJlbW92ZURhdGE6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBkYXRhVXNlci5yZW1vdmUodGhpcywga2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5leHRlbmQoe1xuICAgIHF1ZXVlOiBmdW5jdGlvbiAoZWxlbSwgdHlwZSwgZGF0YSkge1xuICAgICAgdmFyIHF1ZXVlO1xuXG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICB0eXBlID0gKHR5cGUgfHwgXCJmeFwiKSArIFwicXVldWVcIjtcbiAgICAgICAgcXVldWUgPSBkYXRhUHJpdi5nZXQoZWxlbSwgdHlwZSk7IC8vIFNwZWVkIHVwIGRlcXVldWUgYnkgZ2V0dGluZyBvdXQgcXVpY2tseSBpZiB0aGlzIGlzIGp1c3QgYSBsb29rdXBcblxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIGlmICghcXVldWUgfHwgQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgcXVldWUgPSBkYXRhUHJpdi5hY2Nlc3MoZWxlbSwgdHlwZSwgalF1ZXJ5Lm1ha2VBcnJheShkYXRhKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHF1ZXVlIHx8IFtdO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVxdWV1ZTogZnVuY3Rpb24gKGVsZW0sIHR5cGUpIHtcbiAgICAgIHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuICAgICAgdmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKGVsZW0sIHR5cGUpLFxuICAgICAgICAgIHN0YXJ0TGVuZ3RoID0gcXVldWUubGVuZ3RoLFxuICAgICAgICAgIGZuID0gcXVldWUuc2hpZnQoKSxcbiAgICAgICAgICBob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyhlbGVtLCB0eXBlKSxcbiAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkuZGVxdWV1ZShlbGVtLCB0eXBlKTtcbiAgICAgIH07IC8vIElmIHRoZSBmeCBxdWV1ZSBpcyBkZXF1ZXVlZCwgYWx3YXlzIHJlbW92ZSB0aGUgcHJvZ3Jlc3Mgc2VudGluZWxcblxuXG4gICAgICBpZiAoZm4gPT09IFwiaW5wcm9ncmVzc1wiKSB7XG4gICAgICAgIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgc3RhcnRMZW5ndGgtLTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIC8vIEFkZCBhIHByb2dyZXNzIHNlbnRpbmVsIHRvIHByZXZlbnQgdGhlIGZ4IHF1ZXVlIGZyb20gYmVpbmdcbiAgICAgICAgLy8gYXV0b21hdGljYWxseSBkZXF1ZXVlZFxuICAgICAgICBpZiAodHlwZSA9PT0gXCJmeFwiKSB7XG4gICAgICAgICAgcXVldWUudW5zaGlmdChcImlucHJvZ3Jlc3NcIik7XG4gICAgICAgIH0gLy8gQ2xlYXIgdXAgdGhlIGxhc3QgcXVldWUgc3RvcCBmdW5jdGlvblxuXG5cbiAgICAgICAgZGVsZXRlIGhvb2tzLnN0b3A7XG4gICAgICAgIGZuLmNhbGwoZWxlbSwgbmV4dCwgaG9va3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN0YXJ0TGVuZ3RoICYmIGhvb2tzKSB7XG4gICAgICAgIGhvb2tzLmVtcHR5LmZpcmUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIE5vdCBwdWJsaWMgLSBnZW5lcmF0ZSBhIHF1ZXVlSG9va3Mgb2JqZWN0LCBvciByZXR1cm4gdGhlIGN1cnJlbnQgb25lXG4gICAgX3F1ZXVlSG9va3M6IGZ1bmN0aW9uIChlbGVtLCB0eXBlKSB7XG4gICAgICB2YXIga2V5ID0gdHlwZSArIFwicXVldWVIb29rc1wiO1xuICAgICAgcmV0dXJuIGRhdGFQcml2LmdldChlbGVtLCBrZXkpIHx8IGRhdGFQcml2LmFjY2VzcyhlbGVtLCBrZXksIHtcbiAgICAgICAgZW1wdHk6IGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRhdGFQcml2LnJlbW92ZShlbGVtLCBbdHlwZSArIFwicXVldWVcIiwga2V5XSk7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICBxdWV1ZTogZnVuY3Rpb24gKHR5cGUsIGRhdGEpIHtcbiAgICAgIHZhciBzZXR0ZXIgPSAyO1xuXG4gICAgICBpZiAodHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZGF0YSA9IHR5cGU7XG4gICAgICAgIHR5cGUgPSBcImZ4XCI7XG4gICAgICAgIHNldHRlci0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IHNldHRlcikge1xuICAgICAgICByZXR1cm4galF1ZXJ5LnF1ZXVlKHRoaXNbMF0sIHR5cGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSh0aGlzLCB0eXBlLCBkYXRhKTsgLy8gRW5zdXJlIGEgaG9va3MgZm9yIHRoaXMgcXVldWVcblxuICAgICAgICBqUXVlcnkuX3F1ZXVlSG9va3ModGhpcywgdHlwZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZnhcIiAmJiBxdWV1ZVswXSAhPT0gXCJpbnByb2dyZXNzXCIpIHtcbiAgICAgICAgICBqUXVlcnkuZGVxdWV1ZSh0aGlzLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBkZXF1ZXVlOiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeS5kZXF1ZXVlKHRoaXMsIHR5cGUpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBjbGVhclF1ZXVlOiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMucXVldWUodHlwZSB8fCBcImZ4XCIsIFtdKTtcbiAgICB9LFxuICAgIC8vIEdldCBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiBxdWV1ZXMgb2YgYSBjZXJ0YWluIHR5cGVcbiAgICAvLyBhcmUgZW1wdGllZCAoZnggaXMgdGhlIHR5cGUgYnkgZGVmYXVsdClcbiAgICBwcm9taXNlOiBmdW5jdGlvbiAodHlwZSwgb2JqKSB7XG4gICAgICB2YXIgdG1wLFxuICAgICAgICAgIGNvdW50ID0gMSxcbiAgICAgICAgICBkZWZlciA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuICAgICAgICAgIGVsZW1lbnRzID0gdGhpcyxcbiAgICAgICAgICBpID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgcmVzb2x2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgLS1jb3VudCkge1xuICAgICAgICAgIGRlZmVyLnJlc29sdmVXaXRoKGVsZW1lbnRzLCBbZWxlbWVudHNdKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG9iaiA9IHR5cGU7XG4gICAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB0bXAgPSBkYXRhUHJpdi5nZXQoZWxlbWVudHNbaV0sIHR5cGUgKyBcInF1ZXVlSG9va3NcIik7XG5cbiAgICAgICAgaWYgKHRtcCAmJiB0bXAuZW1wdHkpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIHRtcC5lbXB0eS5hZGQocmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2Uob2JqKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgcG51bSA9IC9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZTtcbiAgdmFyIHJjc3NOdW0gPSBuZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIiArIHBudW0gKyBcIikoW2EteiVdKikkXCIsIFwiaVwiKTtcbiAgdmFyIGNzc0V4cGFuZCA9IFtcIlRvcFwiLCBcIlJpZ2h0XCIsIFwiQm90dG9tXCIsIFwiTGVmdFwiXTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICB2YXIgaXNBdHRhY2hlZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgcmV0dXJuIGpRdWVyeS5jb250YWlucyhlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0pO1xuICB9LFxuICAgICAgY29tcG9zZWQgPSB7XG4gICAgY29tcG9zZWQ6IHRydWVcbiAgfTsgLy8gU3VwcG9ydDogSUUgOSAtIDExKywgRWRnZSAxMiAtIDE4KywgaU9TIDEwLjAgLSAxMC4yIG9ubHlcbiAgLy8gQ2hlY2sgYXR0YWNobWVudCBhY3Jvc3Mgc2hhZG93IERPTSBib3VuZGFyaWVzIHdoZW4gcG9zc2libGUgKGdoLTM1MDQpXG4gIC8vIFN1cHBvcnQ6IGlPUyAxMC4wLTEwLjIgb25seVxuICAvLyBFYXJseSBpT1MgMTAgdmVyc2lvbnMgc3VwcG9ydCBgYXR0YWNoU2hhZG93YCBidXQgbm90IGBnZXRSb290Tm9kZWAsXG4gIC8vIGxlYWRpbmcgdG8gZXJyb3JzLiBXZSBuZWVkIHRvIGNoZWNrIGZvciBgZ2V0Um9vdE5vZGVgLlxuXG5cbiAgaWYgKGRvY3VtZW50RWxlbWVudC5nZXRSb290Tm9kZSkge1xuICAgIGlzQXR0YWNoZWQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgcmV0dXJuIGpRdWVyeS5jb250YWlucyhlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0pIHx8IGVsZW0uZ2V0Um9vdE5vZGUoY29tcG9zZWQpID09PSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBpc0hpZGRlbldpdGhpblRyZWUgPSBmdW5jdGlvbiAoZWxlbSwgZWwpIHtcbiAgICAvLyBpc0hpZGRlbldpdGhpblRyZWUgbWlnaHQgYmUgY2FsbGVkIGZyb20galF1ZXJ5I2ZpbHRlciBmdW5jdGlvbjtcbiAgICAvLyBpbiB0aGF0IGNhc2UsIGVsZW1lbnQgd2lsbCBiZSBzZWNvbmQgYXJndW1lbnRcbiAgICBlbGVtID0gZWwgfHwgZWxlbTsgLy8gSW5saW5lIHN0eWxlIHRydW1wcyBhbGxcblxuICAgIHJldHVybiBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIHx8IGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJiAvLyBPdGhlcndpc2UsIGNoZWNrIGNvbXB1dGVkIHN0eWxlXG4gICAgLy8gU3VwcG9ydDogRmlyZWZveCA8PTQzIC0gNDVcbiAgICAvLyBEaXNjb25uZWN0ZWQgZWxlbWVudHMgY2FuIGhhdmUgY29tcHV0ZWQgZGlzcGxheTogbm9uZSwgc28gZmlyc3QgY29uZmlybSB0aGF0IGVsZW0gaXNcbiAgICAvLyBpbiB0aGUgZG9jdW1lbnQuXG4gICAgaXNBdHRhY2hlZChlbGVtKSAmJiBqUXVlcnkuY3NzKGVsZW0sIFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCI7XG4gIH07XG5cbiAgdmFyIHN3YXAgPSBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucywgY2FsbGJhY2ssIGFyZ3MpIHtcbiAgICB2YXIgcmV0LFxuICAgICAgICBuYW1lLFxuICAgICAgICBvbGQgPSB7fTsgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG5cbiAgICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgb2xkW25hbWVdID0gZWxlbS5zdHlsZVtuYW1lXTtcbiAgICAgIGVsZW0uc3R5bGVbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgIH1cblxuICAgIHJldCA9IGNhbGxiYWNrLmFwcGx5KGVsZW0sIGFyZ3MgfHwgW10pOyAvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcblxuICAgIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICBlbGVtLnN0eWxlW25hbWVdID0gb2xkW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRqdXN0Q1NTKGVsZW0sIHByb3AsIHZhbHVlUGFydHMsIHR3ZWVuKSB7XG4gICAgdmFyIGFkanVzdGVkLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgbWF4SXRlcmF0aW9ucyA9IDIwLFxuICAgICAgICBjdXJyZW50VmFsdWUgPSB0d2VlbiA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0d2Vlbi5jdXIoKTtcbiAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGpRdWVyeS5jc3MoZWxlbSwgcHJvcCwgXCJcIik7XG4gICAgfSxcbiAgICAgICAgaW5pdGlhbCA9IGN1cnJlbnRWYWx1ZSgpLFxuICAgICAgICB1bml0ID0gdmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzWzNdIHx8IChqUXVlcnkuY3NzTnVtYmVyW3Byb3BdID8gXCJcIiA6IFwicHhcIiksXG4gICAgICAgIC8vIFN0YXJ0aW5nIHZhbHVlIGNvbXB1dGF0aW9uIGlzIHJlcXVpcmVkIGZvciBwb3RlbnRpYWwgdW5pdCBtaXNtYXRjaGVzXG4gICAgaW5pdGlhbEluVW5pdCA9IGVsZW0ubm9kZVR5cGUgJiYgKGpRdWVyeS5jc3NOdW1iZXJbcHJvcF0gfHwgdW5pdCAhPT0gXCJweFwiICYmICtpbml0aWFsKSAmJiByY3NzTnVtLmV4ZWMoalF1ZXJ5LmNzcyhlbGVtLCBwcm9wKSk7XG5cbiAgICBpZiAoaW5pdGlhbEluVW5pdCAmJiBpbml0aWFsSW5Vbml0WzNdICE9PSB1bml0KSB7XG4gICAgICAvLyBTdXBwb3J0OiBGaXJlZm94IDw9NTRcbiAgICAgIC8vIEhhbHZlIHRoZSBpdGVyYXRpb24gdGFyZ2V0IHZhbHVlIHRvIHByZXZlbnQgaW50ZXJmZXJlbmNlIGZyb20gQ1NTIHVwcGVyIGJvdW5kcyAoZ2gtMjE0NClcbiAgICAgIGluaXRpYWwgPSBpbml0aWFsIC8gMjsgLy8gVHJ1c3QgdW5pdHMgcmVwb3J0ZWQgYnkgalF1ZXJ5LmNzc1xuXG4gICAgICB1bml0ID0gdW5pdCB8fCBpbml0aWFsSW5Vbml0WzNdOyAvLyBJdGVyYXRpdmVseSBhcHByb3hpbWF0ZSBmcm9tIGEgbm9uemVybyBzdGFydGluZyBwb2ludFxuXG4gICAgICBpbml0aWFsSW5Vbml0ID0gK2luaXRpYWwgfHwgMTtcblxuICAgICAgd2hpbGUgKG1heEl0ZXJhdGlvbnMtLSkge1xuICAgICAgICAvLyBFdmFsdWF0ZSBhbmQgdXBkYXRlIG91ciBiZXN0IGd1ZXNzIChkb3VibGluZyBndWVzc2VzIHRoYXQgemVybyBvdXQpLlxuICAgICAgICAvLyBGaW5pc2ggaWYgdGhlIHNjYWxlIGVxdWFscyBvciBjcm9zc2VzIDEgKG1ha2luZyB0aGUgb2xkKm5ldyBwcm9kdWN0IG5vbi1wb3NpdGl2ZSkuXG4gICAgICAgIGpRdWVyeS5zdHlsZShlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCk7XG5cbiAgICAgICAgaWYgKCgxIC0gc2NhbGUpICogKDEgLSAoc2NhbGUgPSBjdXJyZW50VmFsdWUoKSAvIGluaXRpYWwgfHwgMC41KSkgPD0gMCkge1xuICAgICAgICAgIG1heEl0ZXJhdGlvbnMgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgLyBzY2FsZTtcbiAgICAgIH1cblxuICAgICAgaW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgKiAyO1xuICAgICAgalF1ZXJ5LnN0eWxlKGVsZW0sIHByb3AsIGluaXRpYWxJblVuaXQgKyB1bml0KTsgLy8gTWFrZSBzdXJlIHdlIHVwZGF0ZSB0aGUgdHdlZW4gcHJvcGVydGllcyBsYXRlciBvblxuXG4gICAgICB2YWx1ZVBhcnRzID0gdmFsdWVQYXJ0cyB8fCBbXTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVQYXJ0cykge1xuICAgICAgaW5pdGlhbEluVW5pdCA9ICtpbml0aWFsSW5Vbml0IHx8ICtpbml0aWFsIHx8IDA7IC8vIEFwcGx5IHJlbGF0aXZlIG9mZnNldCAoKz0vLT0pIGlmIHNwZWNpZmllZFxuXG4gICAgICBhZGp1c3RlZCA9IHZhbHVlUGFydHNbMV0gPyBpbml0aWFsSW5Vbml0ICsgKHZhbHVlUGFydHNbMV0gKyAxKSAqIHZhbHVlUGFydHNbMl0gOiArdmFsdWVQYXJ0c1syXTtcblxuICAgICAgaWYgKHR3ZWVuKSB7XG4gICAgICAgIHR3ZWVuLnVuaXQgPSB1bml0O1xuICAgICAgICB0d2Vlbi5zdGFydCA9IGluaXRpYWxJblVuaXQ7XG4gICAgICAgIHR3ZWVuLmVuZCA9IGFkanVzdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhZGp1c3RlZDtcbiAgfVxuXG4gIHZhciBkZWZhdWx0RGlzcGxheU1hcCA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHREaXNwbGF5KGVsZW0pIHtcbiAgICB2YXIgdGVtcCxcbiAgICAgICAgZG9jID0gZWxlbS5vd25lckRvY3VtZW50LFxuICAgICAgICBub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUsXG4gICAgICAgIGRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheU1hcFtub2RlTmFtZV07XG5cbiAgICBpZiAoZGlzcGxheSkge1xuICAgICAgcmV0dXJuIGRpc3BsYXk7XG4gICAgfVxuXG4gICAgdGVtcCA9IGRvYy5ib2R5LmFwcGVuZENoaWxkKGRvYy5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKSk7XG4gICAgZGlzcGxheSA9IGpRdWVyeS5jc3ModGVtcCwgXCJkaXNwbGF5XCIpO1xuICAgIHRlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wKTtcblxuICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBkZWZhdWx0RGlzcGxheU1hcFtub2RlTmFtZV0gPSBkaXNwbGF5O1xuICAgIHJldHVybiBkaXNwbGF5O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0hpZGUoZWxlbWVudHMsIHNob3cpIHtcbiAgICB2YXIgZGlzcGxheSxcbiAgICAgICAgZWxlbSxcbiAgICAgICAgdmFsdWVzID0gW10sXG4gICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgbGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoOyAvLyBEZXRlcm1pbmUgbmV3IGRpc3BsYXkgdmFsdWUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byBjaGFuZ2VcblxuICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgZWxlbSA9IGVsZW1lbnRzW2luZGV4XTtcblxuICAgICAgaWYgKCFlbGVtLnN0eWxlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBkaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5O1xuXG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICAvLyBTaW5jZSB3ZSBmb3JjZSB2aXNpYmlsaXR5IHVwb24gY2FzY2FkZS1oaWRkZW4gZWxlbWVudHMsIGFuIGltbWVkaWF0ZSAoYW5kIHNsb3cpXG4gICAgICAgIC8vIGNoZWNrIGlzIHJlcXVpcmVkIGluIHRoaXMgZmlyc3QgbG9vcCB1bmxlc3Mgd2UgaGF2ZSBhIG5vbmVtcHR5IGRpc3BsYXkgdmFsdWUgKGVpdGhlclxuICAgICAgICAvLyBpbmxpbmUgb3IgYWJvdXQtdG8tYmUtcmVzdG9yZWQpXG4gICAgICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBkYXRhUHJpdi5nZXQoZWxlbSwgXCJkaXNwbGF5XCIpIHx8IG51bGw7XG5cbiAgICAgICAgICBpZiAoIXZhbHVlc1tpbmRleF0pIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJiBpc0hpZGRlbldpdGhpblRyZWUoZWxlbSkpIHtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gZ2V0RGVmYXVsdERpc3BsYXkoZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBcIm5vbmVcIjsgLy8gUmVtZW1iZXIgd2hhdCB3ZSdyZSBvdmVyd3JpdGluZ1xuXG4gICAgICAgICAgZGF0YVByaXYuc2V0KGVsZW0sIFwiZGlzcGxheVwiLCBkaXNwbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gU2V0IHRoZSBkaXNwbGF5IG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlY29uZCBsb29wIHRvIGF2b2lkIGNvbnN0YW50IHJlZmxvd1xuXG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmICh2YWx1ZXNbaW5kZXhdICE9IG51bGwpIHtcbiAgICAgICAgZWxlbWVudHNbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZXNbaW5kZXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzaG93SGlkZSh0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzaG93SGlkZSh0aGlzKTtcbiAgICB9LFxuICAgIHRvZ2dsZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gc3RhdGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzSGlkZGVuV2l0aGluVHJlZSh0aGlzKSkge1xuICAgICAgICAgIGpRdWVyeSh0aGlzKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5KHRoaXMpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIHJjaGVja2FibGVUeXBlID0gL14oPzpjaGVja2JveHxyYWRpbykkL2k7XG4gIHZhciBydGFnTmFtZSA9IC88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaTtcbiAgdmFyIHJzY3JpcHRUeXBlID0gL14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaTsgLy8gV2UgaGF2ZSB0byBjbG9zZSB0aGVzZSB0YWdzIHRvIHN1cHBvcnQgWEhUTUwgKCMxMzIwMClcblxuICB2YXIgd3JhcE1hcCA9IHtcbiAgICAvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuICAgIG9wdGlvbjogWzEsIFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLCBcIjwvc2VsZWN0PlwiXSxcbiAgICAvLyBYSFRNTCBwYXJzZXJzIGRvIG5vdCBtYWdpY2FsbHkgaW5zZXJ0IGVsZW1lbnRzIGluIHRoZVxuICAgIC8vIHNhbWUgd2F5IHRoYXQgdGFnIHNvdXAgcGFyc2VycyBkby4gU28gd2UgY2Fubm90IHNob3J0ZW5cbiAgICAvLyB0aGlzIGJ5IG9taXR0aW5nIDx0Ym9keT4gb3Igb3RoZXIgcmVxdWlyZWQgZWxlbWVudHMuXG4gICAgdGhlYWQ6IFsxLCBcIjx0YWJsZT5cIiwgXCI8L3RhYmxlPlwiXSxcbiAgICBjb2w6IFsyLCBcIjx0YWJsZT48Y29sZ3JvdXA+XCIsIFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSxcbiAgICB0cjogWzIsIFwiPHRhYmxlPjx0Ym9keT5cIiwgXCI8L3Rib2R5PjwvdGFibGU+XCJdLFxuICAgIHRkOiBbMywgXCI8dGFibGU+PHRib2R5Pjx0cj5cIiwgXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sXG4gICAgX2RlZmF1bHQ6IFswLCBcIlwiLCBcIlwiXVxuICB9OyAvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXG4gIHdyYXBNYXAub3B0Z3JvdXAgPSB3cmFwTWFwLm9wdGlvbjtcbiAgd3JhcE1hcC50Ym9keSA9IHdyYXBNYXAudGZvb3QgPSB3cmFwTWFwLmNvbGdyb3VwID0gd3JhcE1hcC5jYXB0aW9uID0gd3JhcE1hcC50aGVhZDtcbiAgd3JhcE1hcC50aCA9IHdyYXBNYXAudGQ7XG5cbiAgZnVuY3Rpb24gZ2V0QWxsKGNvbnRleHQsIHRhZykge1xuICAgIC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcbiAgICAvLyBVc2UgdHlwZW9mIHRvIGF2b2lkIHplcm8tYXJndW1lbnQgbWV0aG9kIGludm9jYXRpb24gb24gaG9zdCBvYmplY3RzICgjMTUxNTEpXG4gICAgdmFyIHJldDtcblxuICAgIGlmICh0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0ID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcgfHwgXCIqXCIpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHRhZyB8fCBcIipcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldCA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0YWcgPT09IHVuZGVmaW5lZCB8fCB0YWcgJiYgbm9kZU5hbWUoY29udGV4dCwgdGFnKSkge1xuICAgICAgcmV0dXJuIGpRdWVyeS5tZXJnZShbY29udGV4dF0sIHJldCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSAvLyBNYXJrIHNjcmlwdHMgYXMgaGF2aW5nIGFscmVhZHkgYmVlbiBldmFsdWF0ZWRcblxuXG4gIGZ1bmN0aW9uIHNldEdsb2JhbEV2YWwoZWxlbXMsIHJlZkVsZW1lbnRzKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBsID0gZWxlbXMubGVuZ3RoO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGRhdGFQcml2LnNldChlbGVtc1tpXSwgXCJnbG9iYWxFdmFsXCIsICFyZWZFbGVtZW50cyB8fCBkYXRhUHJpdi5nZXQocmVmRWxlbWVudHNbaV0sIFwiZ2xvYmFsRXZhbFwiKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJodG1sID0gLzx8JiM/XFx3KzsvO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoZWxlbXMsIGNvbnRleHQsIHNjcmlwdHMsIHNlbGVjdGlvbiwgaWdub3JlZCkge1xuICAgIHZhciBlbGVtLFxuICAgICAgICB0bXAsXG4gICAgICAgIHRhZyxcbiAgICAgICAgd3JhcCxcbiAgICAgICAgYXR0YWNoZWQsXG4gICAgICAgIGosXG4gICAgICAgIGZyYWdtZW50ID0gY29udGV4dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgIG5vZGVzID0gW10sXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsID0gZWxlbXMubGVuZ3RoO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGVsZW0gPSBlbGVtc1tpXTtcblxuICAgICAgaWYgKGVsZW0gfHwgZWxlbSA9PT0gMCkge1xuICAgICAgICAvLyBBZGQgbm9kZXMgZGlyZWN0bHlcbiAgICAgICAgaWYgKHRvVHlwZShlbGVtKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuICAgICAgICAgIC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcbiAgICAgICAgICBqUXVlcnkubWVyZ2Uobm9kZXMsIGVsZW0ubm9kZVR5cGUgPyBbZWxlbV0gOiBlbGVtKTsgLy8gQ29udmVydCBub24taHRtbCBpbnRvIGEgdGV4dCBub2RlXG4gICAgICAgIH0gZWxzZSBpZiAoIXJodG1sLnRlc3QoZWxlbSkpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKGNvbnRleHQuY3JlYXRlVGV4dE5vZGUoZWxlbSkpOyAvLyBDb252ZXJ0IGh0bWwgaW50byBET00gbm9kZXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0bXAgPSB0bXAgfHwgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29udGV4dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTsgLy8gRGVzZXJpYWxpemUgYSBzdGFuZGFyZCByZXByZXNlbnRhdGlvblxuXG4gICAgICAgICAgdGFnID0gKHJ0YWdOYW1lLmV4ZWMoZWxlbSkgfHwgW1wiXCIsIFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHdyYXAgPSB3cmFwTWFwW3RhZ10gfHwgd3JhcE1hcC5fZGVmYXVsdDtcbiAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gd3JhcFsxXSArIGpRdWVyeS5odG1sUHJlZmlsdGVyKGVsZW0pICsgd3JhcFsyXTsgLy8gRGVzY2VuZCB0aHJvdWdoIHdyYXBwZXJzIHRvIHRoZSByaWdodCBjb250ZW50XG5cbiAgICAgICAgICBqID0gd3JhcFswXTtcblxuICAgICAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgICAgIHRtcCA9IHRtcC5sYXN0Q2hpbGQ7XG4gICAgICAgICAgfSAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcbiAgICAgICAgICAvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cblxuICAgICAgICAgIGpRdWVyeS5tZXJnZShub2RlcywgdG1wLmNoaWxkTm9kZXMpOyAvLyBSZW1lbWJlciB0aGUgdG9wLWxldmVsIGNvbnRhaW5lclxuXG4gICAgICAgICAgdG1wID0gZnJhZ21lbnQuZmlyc3RDaGlsZDsgLy8gRW5zdXJlIHRoZSBjcmVhdGVkIG5vZGVzIGFyZSBvcnBoYW5lZCAoIzEyMzkyKVxuXG4gICAgICAgICAgdG1wLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gUmVtb3ZlIHdyYXBwZXIgZnJvbSBmcmFnbWVudFxuXG5cbiAgICBmcmFnbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgaSA9IDA7XG5cbiAgICB3aGlsZSAoZWxlbSA9IG5vZGVzW2krK10pIHtcbiAgICAgIC8vIFNraXAgZWxlbWVudHMgYWxyZWFkeSBpbiB0aGUgY29udGV4dCBjb2xsZWN0aW9uICh0cmFjLTQwODcpXG4gICAgICBpZiAoc2VsZWN0aW9uICYmIGpRdWVyeS5pbkFycmF5KGVsZW0sIHNlbGVjdGlvbikgPiAtMSkge1xuICAgICAgICBpZiAoaWdub3JlZCkge1xuICAgICAgICAgIGlnbm9yZWQucHVzaChlbGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhdHRhY2hlZCA9IGlzQXR0YWNoZWQoZWxlbSk7IC8vIEFwcGVuZCB0byBmcmFnbWVudFxuXG4gICAgICB0bXAgPSBnZXRBbGwoZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbSksIFwic2NyaXB0XCIpOyAvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cbiAgICAgIGlmIChhdHRhY2hlZCkge1xuICAgICAgICBzZXRHbG9iYWxFdmFsKHRtcCk7XG4gICAgICB9IC8vIENhcHR1cmUgZXhlY3V0YWJsZXNcblxuXG4gICAgICBpZiAoc2NyaXB0cykge1xuICAgICAgICBqID0gMDtcblxuICAgICAgICB3aGlsZSAoZWxlbSA9IHRtcFtqKytdKSB7XG4gICAgICAgICAgaWYgKHJzY3JpcHRUeXBlLnRlc3QoZWxlbS50eXBlIHx8IFwiXCIpKSB7XG4gICAgICAgICAgICBzY3JpcHRzLnB1c2goZWxlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgIGRpdiA9IGZyYWdtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLFxuICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgLy8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seVxuICAgIC8vIENoZWNrIHN0YXRlIGxvc3QgaWYgdGhlIG5hbWUgaXMgc2V0ICgjMTEyMTcpXG4gICAgLy8gU3VwcG9ydDogV2luZG93cyBXZWIgQXBwcyAoV1dBKVxuICAgIC8vIGBuYW1lYCBhbmQgYHR5cGVgIG11c3QgdXNlIC5zZXRBdHRyaWJ1dGUgZm9yIFdXQSAoIzE0OTAxKVxuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0XCIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7IC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgb25seVxuICAgIC8vIE9sZGVyIFdlYktpdCBkb2Vzbid0IGNsb25lIGNoZWNrZWQgc3RhdGUgY29ycmVjdGx5IGluIGZyYWdtZW50c1xuXG4gICAgc3VwcG9ydC5jaGVja0Nsb25lID0gZGl2LmNsb25lTm9kZSh0cnVlKS5jbG9uZU5vZGUodHJ1ZSkubGFzdENoaWxkLmNoZWNrZWQ7IC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuICAgIC8vIE1ha2Ugc3VyZSB0ZXh0YXJlYSAoYW5kIGNoZWNrYm94KSBkZWZhdWx0VmFsdWUgaXMgcHJvcGVybHkgY2xvbmVkXG5cbiAgICBkaXYuaW5uZXJIVE1MID0gXCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCI7XG4gICAgc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCA9ICEhZGl2LmNsb25lTm9kZSh0cnVlKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO1xuICB9KSgpO1xuXG4gIHZhciBya2V5RXZlbnQgPSAvXmtleS8sXG4gICAgICBybW91c2VFdmVudCA9IC9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxcbiAgICAgIHJ0eXBlbmFtZXNwYWNlID0gL14oW14uXSopKD86XFwuKC4rKXwpLztcblxuICBmdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExK1xuICAvLyBmb2N1cygpIGFuZCBibHVyKCkgYXJlIGFzeW5jaHJvbm91cywgZXhjZXB0IHdoZW4gdGhleSBhcmUgbm8tb3AuXG4gIC8vIFNvIGV4cGVjdCBmb2N1cyB0byBiZSBzeW5jaHJvbm91cyB3aGVuIHRoZSBlbGVtZW50IGlzIGFscmVhZHkgYWN0aXZlLFxuICAvLyBhbmQgYmx1ciB0byBiZSBzeW5jaHJvbm91cyB3aGVuIHRoZSBlbGVtZW50IGlzIG5vdCBhbHJlYWR5IGFjdGl2ZS5cbiAgLy8gKGZvY3VzIGFuZCBibHVyIGFyZSBhbHdheXMgc3luY2hyb25vdXMgaW4gb3RoZXIgc3VwcG9ydGVkIGJyb3dzZXJzLFxuICAvLyB0aGlzIGp1c3QgZGVmaW5lcyB3aGVuIHdlIGNhbiBjb3VudCBvbiBpdCkuXG5cblxuICBmdW5jdGlvbiBleHBlY3RTeW5jKGVsZW0sIHR5cGUpIHtcbiAgICByZXR1cm4gZWxlbSA9PT0gc2FmZUFjdGl2ZUVsZW1lbnQoKSA9PT0gKHR5cGUgPT09IFwiZm9jdXNcIik7XG4gIH0gLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbiAgLy8gQWNjZXNzaW5nIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgY2FuIHRocm93IHVuZXhwZWN0ZWRseVxuICAvLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzOTNcblxuXG4gIGZ1bmN0aW9uIHNhZmVBY3RpdmVFbGVtZW50KCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gIH1cblxuICBmdW5jdGlvbiBvbihlbGVtLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCBvbmUpIHtcbiAgICB2YXIgb3JpZ0ZuLCB0eXBlOyAvLyBUeXBlcyBjYW4gYmUgYSBtYXAgb2YgdHlwZXMvaGFuZGxlcnNcblxuICAgIGlmICh0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIC8vICggdHlwZXMtT2JqZWN0LCBzZWxlY3RvciwgZGF0YSApXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vICggdHlwZXMtT2JqZWN0LCBkYXRhIClcbiAgICAgICAgZGF0YSA9IGRhdGEgfHwgc2VsZWN0b3I7XG4gICAgICAgIHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHR5cGUgaW4gdHlwZXMpIHtcbiAgICAgICAgb24oZWxlbSwgdHlwZSwgc2VsZWN0b3IsIGRhdGEsIHR5cGVzW3R5cGVdLCBvbmUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSA9PSBudWxsICYmIGZuID09IG51bGwpIHtcbiAgICAgIC8vICggdHlwZXMsIGZuIClcbiAgICAgIGZuID0gc2VsZWN0b3I7XG4gICAgICBkYXRhID0gc2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmIChmbiA9PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vICggdHlwZXMsIHNlbGVjdG9yLCBmbiApXG4gICAgICAgIGZuID0gZGF0YTtcbiAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICggdHlwZXMsIGRhdGEsIGZuIClcbiAgICAgICAgZm4gPSBkYXRhO1xuICAgICAgICBkYXRhID0gc2VsZWN0b3I7XG4gICAgICAgIHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmbiA9PT0gZmFsc2UpIHtcbiAgICAgIGZuID0gcmV0dXJuRmFsc2U7XG4gICAgfSBlbHNlIGlmICghZm4pIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cblxuICAgIGlmIChvbmUgPT09IDEpIHtcbiAgICAgIG9yaWdGbiA9IGZuO1xuXG4gICAgICBmbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBDYW4gdXNlIGFuIGVtcHR5IHNldCwgc2luY2UgZXZlbnQgY29udGFpbnMgdGhlIGluZm9cbiAgICAgICAgalF1ZXJ5KCkub2ZmKGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIG9yaWdGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTsgLy8gVXNlIHNhbWUgZ3VpZCBzbyBjYWxsZXIgY2FuIHJlbW92ZSB1c2luZyBvcmlnRm5cblxuXG4gICAgICBmbi5ndWlkID0gb3JpZ0ZuLmd1aWQgfHwgKG9yaWdGbi5ndWlkID0galF1ZXJ5Lmd1aWQrKyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW0uZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBqUXVlcnkuZXZlbnQuYWRkKHRoaXMsIHR5cGVzLCBmbiwgZGF0YSwgc2VsZWN0b3IpO1xuICAgIH0pO1xuICB9XG4gIC8qXG4gICAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIGV2ZW50cyAtLSBub3QgcGFydCBvZiB0aGUgcHVibGljIGludGVyZmFjZS5cbiAgICogUHJvcHMgdG8gRGVhbiBFZHdhcmRzJyBhZGRFdmVudCBsaWJyYXJ5IGZvciBtYW55IG9mIHRoZSBpZGVhcy5cbiAgICovXG5cblxuICBqUXVlcnkuZXZlbnQgPSB7XG4gICAgZ2xvYmFsOiB7fSxcbiAgICBhZGQ6IGZ1bmN0aW9uIChlbGVtLCB0eXBlcywgaGFuZGxlciwgZGF0YSwgc2VsZWN0b3IpIHtcbiAgICAgIHZhciBoYW5kbGVPYmpJbixcbiAgICAgICAgICBldmVudEhhbmRsZSxcbiAgICAgICAgICB0bXAsXG4gICAgICAgICAgZXZlbnRzLFxuICAgICAgICAgIHQsXG4gICAgICAgICAgaGFuZGxlT2JqLFxuICAgICAgICAgIHNwZWNpYWwsXG4gICAgICAgICAgaGFuZGxlcnMsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBuYW1lc3BhY2VzLFxuICAgICAgICAgIG9yaWdUeXBlLFxuICAgICAgICAgIGVsZW1EYXRhID0gZGF0YVByaXYuZ2V0KGVsZW0pOyAvLyBEb24ndCBhdHRhY2ggZXZlbnRzIHRvIG5vRGF0YSBvciB0ZXh0L2NvbW1lbnQgbm9kZXMgKGJ1dCBhbGxvdyBwbGFpbiBvYmplY3RzKVxuXG4gICAgICBpZiAoIWVsZW1EYXRhKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gQ2FsbGVyIGNhbiBwYXNzIGluIGFuIG9iamVjdCBvZiBjdXN0b20gZGF0YSBpbiBsaWV1IG9mIHRoZSBoYW5kbGVyXG5cblxuICAgICAgaWYgKGhhbmRsZXIuaGFuZGxlcikge1xuICAgICAgICBoYW5kbGVPYmpJbiA9IGhhbmRsZXI7XG4gICAgICAgIGhhbmRsZXIgPSBoYW5kbGVPYmpJbi5oYW5kbGVyO1xuICAgICAgICBzZWxlY3RvciA9IGhhbmRsZU9iakluLnNlbGVjdG9yO1xuICAgICAgfSAvLyBFbnN1cmUgdGhhdCBpbnZhbGlkIHNlbGVjdG9ycyB0aHJvdyBleGNlcHRpb25zIGF0IGF0dGFjaCB0aW1lXG4gICAgICAvLyBFdmFsdWF0ZSBhZ2FpbnN0IGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGVsZW0gaXMgYSBub24tZWxlbWVudCBub2RlIChlLmcuLCBkb2N1bWVudClcblxuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgalF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKGRvY3VtZW50RWxlbWVudCwgc2VsZWN0b3IpO1xuICAgICAgfSAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgaGFuZGxlciBoYXMgYSB1bmlxdWUgSUQsIHVzZWQgdG8gZmluZC9yZW1vdmUgaXQgbGF0ZXJcblxuXG4gICAgICBpZiAoIWhhbmRsZXIuZ3VpZCkge1xuICAgICAgICBoYW5kbGVyLmd1aWQgPSBqUXVlcnkuZ3VpZCsrO1xuICAgICAgfSAvLyBJbml0IHRoZSBlbGVtZW50J3MgZXZlbnQgc3RydWN0dXJlIGFuZCBtYWluIGhhbmRsZXIsIGlmIHRoaXMgaXMgdGhlIGZpcnN0XG5cblxuICAgICAgaWYgKCEoZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzKSkge1xuICAgICAgICBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUpKSB7XG4gICAgICAgIGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuICAgICAgICAgIC8vIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIGFmdGVyIGEgcGFnZSBoYXMgdW5sb2FkZWRcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGpRdWVyeSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICE9PSBlLnR5cGUgPyBqUXVlcnkuZXZlbnQuZGlzcGF0Y2guYXBwbHkoZWxlbSwgYXJndW1lbnRzKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gSGFuZGxlIG11bHRpcGxlIGV2ZW50cyBzZXBhcmF0ZWQgYnkgYSBzcGFjZVxuXG5cbiAgICAgIHR5cGVzID0gKHR5cGVzIHx8IFwiXCIpLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtcIlwiXTtcbiAgICAgIHQgPSB0eXBlcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlICh0LS0pIHtcbiAgICAgICAgdG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyh0eXBlc1t0XSkgfHwgW107XG4gICAgICAgIHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsxXTtcbiAgICAgICAgbmFtZXNwYWNlcyA9ICh0bXBbMl0gfHwgXCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKTsgLy8gVGhlcmUgKm11c3QqIGJlIGEgdHlwZSwgbm8gYXR0YWNoaW5nIG5hbWVzcGFjZS1vbmx5IGhhbmRsZXJzXG5cbiAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gSWYgZXZlbnQgY2hhbmdlcyBpdHMgdHlwZSwgdXNlIHRoZSBzcGVjaWFsIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgY2hhbmdlZCB0eXBlXG5cblxuICAgICAgICBzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbdHlwZV0gfHwge307IC8vIElmIHNlbGVjdG9yIGRlZmluZWQsIGRldGVybWluZSBzcGVjaWFsIGV2ZW50IGFwaSB0eXBlLCBvdGhlcndpc2UgZ2l2ZW4gdHlwZVxuXG4gICAgICAgIHR5cGUgPSAoc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUpIHx8IHR5cGU7IC8vIFVwZGF0ZSBzcGVjaWFsIGJhc2VkIG9uIG5ld2x5IHJlc2V0IHR5cGVcblxuICAgICAgICBzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbdHlwZV0gfHwge307IC8vIGhhbmRsZU9iaiBpcyBwYXNzZWQgdG8gYWxsIGV2ZW50IGhhbmRsZXJzXG5cbiAgICAgICAgaGFuZGxlT2JqID0galF1ZXJ5LmV4dGVuZCh7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBvcmlnVHlwZTogb3JpZ1R5cGUsXG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgIGd1aWQ6IGhhbmRsZXIuZ3VpZCxcbiAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgICAgbmVlZHNDb250ZXh0OiBzZWxlY3RvciAmJiBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChzZWxlY3RvciksXG4gICAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VzLmpvaW4oXCIuXCIpXG4gICAgICAgIH0sIGhhbmRsZU9iakluKTsgLy8gSW5pdCB0aGUgZXZlbnQgaGFuZGxlciBxdWV1ZSBpZiB3ZSdyZSB0aGUgZmlyc3RcblxuICAgICAgICBpZiAoIShoYW5kbGVycyA9IGV2ZW50c1t0eXBlXSkpIHtcbiAgICAgICAgICBoYW5kbGVycyA9IGV2ZW50c1t0eXBlXSA9IFtdO1xuICAgICAgICAgIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQgPSAwOyAvLyBPbmx5IHVzZSBhZGRFdmVudExpc3RlbmVyIGlmIHRoZSBzcGVjaWFsIGV2ZW50cyBoYW5kbGVyIHJldHVybnMgZmFsc2VcblxuICAgICAgICAgIGlmICghc3BlY2lhbC5zZXR1cCB8fCBzcGVjaWFsLnNldHVwLmNhbGwoZWxlbSwgZGF0YSwgbmFtZXNwYWNlcywgZXZlbnRIYW5kbGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKGVsZW0uYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRIYW5kbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGVjaWFsLmFkZCkge1xuICAgICAgICAgIHNwZWNpYWwuYWRkLmNhbGwoZWxlbSwgaGFuZGxlT2JqKTtcblxuICAgICAgICAgIGlmICghaGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCkge1xuICAgICAgICAgICAgaGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCA9IGhhbmRsZXIuZ3VpZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gQWRkIHRvIHRoZSBlbGVtZW50J3MgaGFuZGxlciBsaXN0LCBkZWxlZ2F0ZXMgaW4gZnJvbnRcblxuXG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShoYW5kbGVycy5kZWxlZ2F0ZUNvdW50KyssIDAsIGhhbmRsZU9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVPYmopO1xuICAgICAgICB9IC8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnRzIGhhdmUgZXZlciBiZWVuIHVzZWQsIGZvciBldmVudCBvcHRpbWl6YXRpb25cblxuXG4gICAgICAgIGpRdWVyeS5ldmVudC5nbG9iYWxbdHlwZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gRGV0YWNoIGFuIGV2ZW50IG9yIHNldCBvZiBldmVudHMgZnJvbSBhbiBlbGVtZW50XG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoZWxlbSwgdHlwZXMsIGhhbmRsZXIsIHNlbGVjdG9yLCBtYXBwZWRUeXBlcykge1xuICAgICAgdmFyIGosXG4gICAgICAgICAgb3JpZ0NvdW50LFxuICAgICAgICAgIHRtcCxcbiAgICAgICAgICBldmVudHMsXG4gICAgICAgICAgdCxcbiAgICAgICAgICBoYW5kbGVPYmosXG4gICAgICAgICAgc3BlY2lhbCxcbiAgICAgICAgICBoYW5kbGVycyxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIG5hbWVzcGFjZXMsXG4gICAgICAgICAgb3JpZ1R5cGUsXG4gICAgICAgICAgZWxlbURhdGEgPSBkYXRhUHJpdi5oYXNEYXRhKGVsZW0pICYmIGRhdGFQcml2LmdldChlbGVtKTtcblxuICAgICAgaWYgKCFlbGVtRGF0YSB8fCAhKGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBPbmNlIGZvciBlYWNoIHR5cGUubmFtZXNwYWNlIGluIHR5cGVzOyB0eXBlIG1heSBiZSBvbWl0dGVkXG5cblxuICAgICAgdHlwZXMgPSAodHlwZXMgfHwgXCJcIikubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW1wiXCJdO1xuICAgICAgdCA9IHR5cGVzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKHQtLSkge1xuICAgICAgICB0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKHR5cGVzW3RdKSB8fCBbXTtcbiAgICAgICAgdHlwZSA9IG9yaWdUeXBlID0gdG1wWzFdO1xuICAgICAgICBuYW1lc3BhY2VzID0gKHRtcFsyXSB8fCBcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpOyAvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcblxuICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICBmb3IgKHR5cGUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBqUXVlcnkuZXZlbnQucmVtb3ZlKGVsZW0sIHR5cGUgKyB0eXBlc1t0XSwgaGFuZGxlciwgc2VsZWN0b3IsIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9O1xuICAgICAgICB0eXBlID0gKHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlKSB8fCB0eXBlO1xuICAgICAgICBoYW5kbGVycyA9IGV2ZW50c1t0eXBlXSB8fCBbXTtcbiAgICAgICAgdG1wID0gdG1wWzJdICYmIG5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpICsgXCIoXFxcXC58JClcIik7IC8vIFJlbW92ZSBtYXRjaGluZyBldmVudHNcblxuICAgICAgICBvcmlnQ291bnQgPSBqID0gaGFuZGxlcnMubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgICBoYW5kbGVPYmogPSBoYW5kbGVyc1tqXTtcblxuICAgICAgICAgIGlmICgobWFwcGVkVHlwZXMgfHwgb3JpZ1R5cGUgPT09IGhhbmRsZU9iai5vcmlnVHlwZSkgJiYgKCFoYW5kbGVyIHx8IGhhbmRsZXIuZ3VpZCA9PT0gaGFuZGxlT2JqLmd1aWQpICYmICghdG1wIHx8IHRtcC50ZXN0KGhhbmRsZU9iai5uYW1lc3BhY2UpKSAmJiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBoYW5kbGVPYmouc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09IFwiKipcIiAmJiBoYW5kbGVPYmouc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaiwgMSk7XG5cbiAgICAgICAgICAgIGlmIChoYW5kbGVPYmouc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaGFuZGxlcnMuZGVsZWdhdGVDb3VudC0tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3BlY2lhbC5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgc3BlY2lhbC5yZW1vdmUuY2FsbChlbGVtLCBoYW5kbGVPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBSZW1vdmUgZ2VuZXJpYyBldmVudCBoYW5kbGVyIGlmIHdlIHJlbW92ZWQgc29tZXRoaW5nIGFuZCBubyBtb3JlIGhhbmRsZXJzIGV4aXN0XG4gICAgICAgIC8vIChhdm9pZHMgcG90ZW50aWFsIGZvciBlbmRsZXNzIHJlY3Vyc2lvbiBkdXJpbmcgcmVtb3ZhbCBvZiBzcGVjaWFsIGV2ZW50IGhhbmRsZXJzKVxuXG5cbiAgICAgICAgaWYgKG9yaWdDb3VudCAmJiAhaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKCFzcGVjaWFsLnRlYXJkb3duIHx8IHNwZWNpYWwudGVhcmRvd24uY2FsbChlbGVtLCBuYW1lc3BhY2VzLCBlbGVtRGF0YS5oYW5kbGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUV2ZW50KGVsZW0sIHR5cGUsIGVsZW1EYXRhLmhhbmRsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZW1vdmUgZGF0YSBhbmQgdGhlIGV4cGFuZG8gaWYgaXQncyBubyBsb25nZXIgdXNlZFxuXG5cbiAgICAgIGlmIChqUXVlcnkuaXNFbXB0eU9iamVjdChldmVudHMpKSB7XG4gICAgICAgIGRhdGFQcml2LnJlbW92ZShlbGVtLCBcImhhbmRsZSBldmVudHNcIik7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNwYXRjaDogZnVuY3Rpb24gKG5hdGl2ZUV2ZW50KSB7XG4gICAgICAvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3RcbiAgICAgIHZhciBldmVudCA9IGpRdWVyeS5ldmVudC5maXgobmF0aXZlRXZlbnQpO1xuICAgICAgdmFyIGksXG4gICAgICAgICAgaixcbiAgICAgICAgICByZXQsXG4gICAgICAgICAgbWF0Y2hlZCxcbiAgICAgICAgICBoYW5kbGVPYmosXG4gICAgICAgICAgaGFuZGxlclF1ZXVlLFxuICAgICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksXG4gICAgICAgICAgaGFuZGxlcnMgPSAoZGF0YVByaXYuZ2V0KHRoaXMsIFwiZXZlbnRzXCIpIHx8IHt9KVtldmVudC50eXBlXSB8fCBbXSxcbiAgICAgICAgICBzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbZXZlbnQudHlwZV0gfHwge307IC8vIFVzZSB0aGUgZml4LWVkIGpRdWVyeS5FdmVudCByYXRoZXIgdGhhbiB0aGUgKHJlYWQtb25seSkgbmF0aXZlIGV2ZW50XG5cbiAgICAgIGFyZ3NbMF0gPSBldmVudDtcblxuICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgfVxuXG4gICAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7IC8vIENhbGwgdGhlIHByZURpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZSwgYW5kIGxldCBpdCBiYWlsIGlmIGRlc2lyZWRcblxuICAgICAgaWYgKHNwZWNpYWwucHJlRGlzcGF0Y2ggJiYgc3BlY2lhbC5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsIGV2ZW50KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBEZXRlcm1pbmUgaGFuZGxlcnNcblxuXG4gICAgICBoYW5kbGVyUXVldWUgPSBqUXVlcnkuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLCBldmVudCwgaGFuZGxlcnMpOyAvLyBSdW4gZGVsZWdhdGVzIGZpcnN0OyB0aGV5IG1heSB3YW50IHRvIHN0b3AgcHJvcGFnYXRpb24gYmVuZWF0aCB1c1xuXG4gICAgICBpID0gMDtcblxuICAgICAgd2hpbGUgKChtYXRjaGVkID0gaGFuZGxlclF1ZXVlW2krK10pICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG4gICAgICAgIGogPSAwO1xuXG4gICAgICAgIHdoaWxlICgoaGFuZGxlT2JqID0gbWF0Y2hlZC5oYW5kbGVyc1tqKytdKSAmJiAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgIC8vIElmIHRoZSBldmVudCBpcyBuYW1lc3BhY2VkLCB0aGVuIGVhY2ggaGFuZGxlciBpcyBvbmx5IGludm9rZWQgaWYgaXQgaXNcbiAgICAgICAgICAvLyBzcGVjaWFsbHkgdW5pdmVyc2FsIG9yIGl0cyBuYW1lc3BhY2VzIGFyZSBhIHN1cGVyc2V0IG9mIHRoZSBldmVudCdzLlxuICAgICAgICAgIGlmICghZXZlbnQucm5hbWVzcGFjZSB8fCBoYW5kbGVPYmoubmFtZXNwYWNlID09PSBmYWxzZSB8fCBldmVudC5ybmFtZXNwYWNlLnRlc3QoaGFuZGxlT2JqLm5hbWVzcGFjZSkpIHtcbiAgICAgICAgICAgIGV2ZW50LmhhbmRsZU9iaiA9IGhhbmRsZU9iajtcbiAgICAgICAgICAgIGV2ZW50LmRhdGEgPSBoYW5kbGVPYmouZGF0YTtcbiAgICAgICAgICAgIHJldCA9ICgoalF1ZXJ5LmV2ZW50LnNwZWNpYWxbaGFuZGxlT2JqLm9yaWdUeXBlXSB8fCB7fSkuaGFuZGxlIHx8IGhhbmRsZU9iai5oYW5kbGVyKS5hcHBseShtYXRjaGVkLmVsZW0sIGFyZ3MpO1xuXG4gICAgICAgICAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKChldmVudC5yZXN1bHQgPSByZXQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxuXG5cbiAgICAgIGlmIChzcGVjaWFsLnBvc3REaXNwYXRjaCkge1xuICAgICAgICBzcGVjaWFsLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50LnJlc3VsdDtcbiAgICB9LFxuICAgIGhhbmRsZXJzOiBmdW5jdGlvbiAoZXZlbnQsIGhhbmRsZXJzKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICBoYW5kbGVPYmosXG4gICAgICAgICAgc2VsLFxuICAgICAgICAgIG1hdGNoZWRIYW5kbGVycyxcbiAgICAgICAgICBtYXRjaGVkU2VsZWN0b3JzLFxuICAgICAgICAgIGhhbmRsZXJRdWV1ZSA9IFtdLFxuICAgICAgICAgIGRlbGVnYXRlQ291bnQgPSBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LFxuICAgICAgICAgIGN1ciA9IGV2ZW50LnRhcmdldDsgLy8gRmluZCBkZWxlZ2F0ZSBoYW5kbGVyc1xuXG4gICAgICBpZiAoZGVsZWdhdGVDb3VudCAmJiAvLyBTdXBwb3J0OiBJRSA8PTlcbiAgICAgIC8vIEJsYWNrLWhvbGUgU1ZHIDx1c2U+IGluc3RhbmNlIHRyZWVzICh0cmFjLTEzMTgwKVxuICAgICAgY3VyLm5vZGVUeXBlICYmIC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MlxuICAgICAgLy8gU3VwcHJlc3Mgc3BlYy12aW9sYXRpbmcgY2xpY2tzIGluZGljYXRpbmcgYSBub24tcHJpbWFyeSBwb2ludGVyIGJ1dHRvbiAodHJhYy0zODYxKVxuICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnQtdHlwZS1jbGlja1xuICAgICAgLy8gU3VwcG9ydDogSUUgMTEgb25seVxuICAgICAgLy8gLi4uYnV0IG5vdCBhcnJvdyBrZXkgXCJjbGlja3NcIiBvZiByYWRpbyBpbnB1dHMsIHdoaWNoIGNhbiBoYXZlIGBidXR0b25gIC0xIChnaC0yMzQzKVxuICAgICAgIShldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgZXZlbnQuYnV0dG9uID49IDEpKSB7XG4gICAgICAgIGZvciAoOyBjdXIgIT09IHRoaXM7IGN1ciA9IGN1ci5wYXJlbnROb2RlIHx8IHRoaXMpIHtcbiAgICAgICAgICAvLyBEb24ndCBjaGVjayBub24tZWxlbWVudHMgKCMxMzIwOClcbiAgICAgICAgICAvLyBEb24ndCBwcm9jZXNzIGNsaWNrcyBvbiBkaXNhYmxlZCBlbGVtZW50cyAoIzY5MTEsICM4MTY1LCAjMTEzODIsICMxMTc2NClcbiAgICAgICAgICBpZiAoY3VyLm5vZGVUeXBlID09PSAxICYmICEoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGN1ci5kaXNhYmxlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIG1hdGNoZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICAgICAgbWF0Y2hlZFNlbGVjdG9ycyA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgIGhhbmRsZU9iaiA9IGhhbmRsZXJzW2ldOyAvLyBEb24ndCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoIzEzMjAzKVxuXG4gICAgICAgICAgICAgIHNlbCA9IGhhbmRsZU9iai5zZWxlY3RvciArIFwiIFwiO1xuXG4gICAgICAgICAgICAgIGlmIChtYXRjaGVkU2VsZWN0b3JzW3NlbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRTZWxlY3RvcnNbc2VsXSA9IGhhbmRsZU9iai5uZWVkc0NvbnRleHQgPyBqUXVlcnkoc2VsLCB0aGlzKS5pbmRleChjdXIpID4gLTEgOiBqUXVlcnkuZmluZChzZWwsIHRoaXMsIG51bGwsIFtjdXJdKS5sZW5ndGg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAobWF0Y2hlZFNlbGVjdG9yc1tzZWxdKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZEhhbmRsZXJzLnB1c2goaGFuZGxlT2JqKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2hlZEhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBoYW5kbGVyUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgZWxlbTogY3VyLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJzOiBtYXRjaGVkSGFuZGxlcnNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIEFkZCB0aGUgcmVtYWluaW5nIChkaXJlY3RseS1ib3VuZCkgaGFuZGxlcnNcblxuXG4gICAgICBjdXIgPSB0aGlzO1xuXG4gICAgICBpZiAoZGVsZWdhdGVDb3VudCA8IGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICBoYW5kbGVyUXVldWUucHVzaCh7XG4gICAgICAgICAgZWxlbTogY3VyLFxuICAgICAgICAgIGhhbmRsZXJzOiBoYW5kbGVycy5zbGljZShkZWxlZ2F0ZUNvdW50KVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhhbmRsZXJRdWV1ZTtcbiAgICB9LFxuICAgIGFkZFByb3A6IGZ1bmN0aW9uIChuYW1lLCBob29rKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogaXNGdW5jdGlvbihob29rKSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaG9vayh0aGlzLm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W25hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZml4OiBmdW5jdGlvbiAob3JpZ2luYWxFdmVudCkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsRXZlbnRbalF1ZXJ5LmV4cGFuZG9dID8gb3JpZ2luYWxFdmVudCA6IG5ldyBqUXVlcnkuRXZlbnQob3JpZ2luYWxFdmVudCk7XG4gICAgfSxcbiAgICBzcGVjaWFsOiB7XG4gICAgICBsb2FkOiB7XG4gICAgICAgIC8vIFByZXZlbnQgdHJpZ2dlcmVkIGltYWdlLmxvYWQgZXZlbnRzIGZyb20gYnViYmxpbmcgdG8gd2luZG93LmxvYWRcbiAgICAgICAgbm9CdWJibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBjbGljazoge1xuICAgICAgICAvLyBVdGlsaXplIG5hdGl2ZSBldmVudCB0byBlbnN1cmUgY29ycmVjdCBzdGF0ZSBmb3IgY2hlY2thYmxlIGlucHV0c1xuICAgICAgICBzZXR1cDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAvLyBGb3IgbXV0dWFsIGNvbXByZXNzaWJpbGl0eSB3aXRoIF9kZWZhdWx0LCByZXBsYWNlIGB0aGlzYCBhY2Nlc3Mgd2l0aCBhIGxvY2FsIHZhci5cbiAgICAgICAgICAvLyBgfHwgZGF0YWAgaXMgZGVhZCBjb2RlIG1lYW50IG9ubHkgdG8gcHJlc2VydmUgdGhlIHZhcmlhYmxlIHRocm91Z2ggbWluaWZpY2F0aW9uLlxuICAgICAgICAgIHZhciBlbCA9IHRoaXMgfHwgZGF0YTsgLy8gQ2xhaW0gdGhlIGZpcnN0IGhhbmRsZXJcblxuICAgICAgICAgIGlmIChyY2hlY2thYmxlVHlwZS50ZXN0KGVsLnR5cGUpICYmIGVsLmNsaWNrICYmIG5vZGVOYW1lKGVsLCBcImlucHV0XCIpKSB7XG4gICAgICAgICAgICAvLyBkYXRhUHJpdi5zZXQoIGVsLCBcImNsaWNrXCIsIC4uLiApXG4gICAgICAgICAgICBsZXZlcmFnZU5hdGl2ZShlbCwgXCJjbGlja1wiLCByZXR1cm5UcnVlKTtcbiAgICAgICAgICB9IC8vIFJldHVybiBmYWxzZSB0byBhbGxvdyBub3JtYWwgcHJvY2Vzc2luZyBpbiB0aGUgY2FsbGVyXG5cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAvLyBGb3IgbXV0dWFsIGNvbXByZXNzaWJpbGl0eSB3aXRoIF9kZWZhdWx0LCByZXBsYWNlIGB0aGlzYCBhY2Nlc3Mgd2l0aCBhIGxvY2FsIHZhci5cbiAgICAgICAgICAvLyBgfHwgZGF0YWAgaXMgZGVhZCBjb2RlIG1lYW50IG9ubHkgdG8gcHJlc2VydmUgdGhlIHZhcmlhYmxlIHRocm91Z2ggbWluaWZpY2F0aW9uLlxuICAgICAgICAgIHZhciBlbCA9IHRoaXMgfHwgZGF0YTsgLy8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJpbmcgYSBjbGlja1xuXG4gICAgICAgICAgaWYgKHJjaGVja2FibGVUeXBlLnRlc3QoZWwudHlwZSkgJiYgZWwuY2xpY2sgJiYgbm9kZU5hbWUoZWwsIFwiaW5wdXRcIikpIHtcbiAgICAgICAgICAgIGxldmVyYWdlTmF0aXZlKGVsLCBcImNsaWNrXCIpO1xuICAgICAgICAgIH0gLy8gUmV0dXJuIG5vbi1mYWxzZSB0byBhbGxvdyBub3JtYWwgZXZlbnQtcGF0aCBwcm9wYWdhdGlvblxuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gRm9yIGNyb3NzLWJyb3dzZXIgY29uc2lzdGVuY3ksIHN1cHByZXNzIG5hdGl2ZSAuY2xpY2soKSBvbiBsaW5rc1xuICAgICAgICAvLyBBbHNvIHByZXZlbnQgaXQgaWYgd2UncmUgY3VycmVudGx5IGluc2lkZSBhIGxldmVyYWdlZCBuYXRpdmUtZXZlbnQgc3RhY2tcbiAgICAgICAgX2RlZmF1bHQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgcmV0dXJuIHJjaGVja2FibGVUeXBlLnRlc3QodGFyZ2V0LnR5cGUpICYmIHRhcmdldC5jbGljayAmJiBub2RlTmFtZSh0YXJnZXQsIFwiaW5wdXRcIikgJiYgZGF0YVByaXYuZ2V0KHRhcmdldCwgXCJjbGlja1wiKSB8fCBub2RlTmFtZSh0YXJnZXQsIFwiYVwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJlZm9yZXVubG9hZDoge1xuICAgICAgICBwb3N0RGlzcGF0Y2g6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3ggMjArXG4gICAgICAgICAgLy8gRmlyZWZveCBkb2Vzbid0IGFsZXJ0IGlmIHRoZSByZXR1cm5WYWx1ZSBmaWVsZCBpcyBub3Qgc2V0LlxuICAgICAgICAgIGlmIChldmVudC5yZXN1bHQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZXZlbnQucmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTsgLy8gRW5zdXJlIHRoZSBwcmVzZW5jZSBvZiBhbiBldmVudCBsaXN0ZW5lciB0aGF0IGhhbmRsZXMgbWFudWFsbHktdHJpZ2dlcmVkXG4gIC8vIHN5bnRoZXRpYyBldmVudHMgYnkgaW50ZXJydXB0aW5nIHByb2dyZXNzIHVudGlsIHJlaW52b2tlZCBpbiByZXNwb25zZSB0b1xuICAvLyAqbmF0aXZlKiBldmVudHMgdGhhdCBpdCBmaXJlcyBkaXJlY3RseSwgZW5zdXJpbmcgdGhhdCBzdGF0ZSBjaGFuZ2VzIGhhdmVcbiAgLy8gYWxyZWFkeSBvY2N1cnJlZCBiZWZvcmUgb3RoZXIgbGlzdGVuZXJzIGFyZSBpbnZva2VkLlxuXG4gIGZ1bmN0aW9uIGxldmVyYWdlTmF0aXZlKGVsLCB0eXBlLCBleHBlY3RTeW5jKSB7XG4gICAgLy8gTWlzc2luZyBleHBlY3RTeW5jIGluZGljYXRlcyBhIHRyaWdnZXIgY2FsbCwgd2hpY2ggbXVzdCBmb3JjZSBzZXR1cCB0aHJvdWdoIGpRdWVyeS5ldmVudC5hZGRcbiAgICBpZiAoIWV4cGVjdFN5bmMpIHtcbiAgICAgIGlmIChkYXRhUHJpdi5nZXQoZWwsIHR5cGUpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgalF1ZXJ5LmV2ZW50LmFkZChlbCwgdHlwZSwgcmV0dXJuVHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFJlZ2lzdGVyIHRoZSBjb250cm9sbGVyIGFzIGEgc3BlY2lhbCB1bml2ZXJzYWwgaGFuZGxlciBmb3IgYWxsIGV2ZW50IG5hbWVzcGFjZXNcblxuXG4gICAgZGF0YVByaXYuc2V0KGVsLCB0eXBlLCBmYWxzZSk7XG4gICAgalF1ZXJ5LmV2ZW50LmFkZChlbCwgdHlwZSwge1xuICAgICAgbmFtZXNwYWNlOiBmYWxzZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgbm90QXN5bmMsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBzYXZlZCA9IGRhdGFQcml2LmdldCh0aGlzLCB0eXBlKTtcblxuICAgICAgICBpZiAoZXZlbnQuaXNUcmlnZ2VyICYgMSAmJiB0aGlzW3R5cGVdKSB7XG4gICAgICAgICAgLy8gSW50ZXJydXB0IHByb2Nlc3Npbmcgb2YgdGhlIG91dGVyIHN5bnRoZXRpYyAudHJpZ2dlcigpZWQgZXZlbnRcbiAgICAgICAgICAvLyBTYXZlZCBkYXRhIHNob3VsZCBiZSBmYWxzZSBpbiBzdWNoIGNhc2VzLCBidXQgbWlnaHQgYmUgYSBsZWZ0b3ZlciBjYXB0dXJlIG9iamVjdFxuICAgICAgICAgIC8vIGZyb20gYW4gYXN5bmMgbmF0aXZlIGhhbmRsZXIgKGdoLTQzNTApXG4gICAgICAgICAgaWYgKCFzYXZlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFN0b3JlIGFyZ3VtZW50cyBmb3IgdXNlIHdoZW4gaGFuZGxpbmcgdGhlIGlubmVyIG5hdGl2ZSBldmVudFxuICAgICAgICAgICAgLy8gVGhlcmUgd2lsbCBhbHdheXMgYmUgYXQgbGVhc3Qgb25lIGFyZ3VtZW50IChhbiBldmVudCBvYmplY3QpLCBzbyB0aGlzIGFycmF5XG4gICAgICAgICAgICAvLyB3aWxsIG5vdCBiZSBjb25mdXNlZCB3aXRoIGEgbGVmdG92ZXIgY2FwdHVyZSBvYmplY3QuXG4gICAgICAgICAgICBzYXZlZCA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGRhdGFQcml2LnNldCh0aGlzLCB0eXBlLCBzYXZlZCk7IC8vIFRyaWdnZXIgdGhlIG5hdGl2ZSBldmVudCBhbmQgY2FwdHVyZSBpdHMgcmVzdWx0XG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMStcbiAgICAgICAgICAgIC8vIGZvY3VzKCkgYW5kIGJsdXIoKSBhcmUgYXN5bmNocm9ub3VzXG5cbiAgICAgICAgICAgIG5vdEFzeW5jID0gZXhwZWN0U3luYyh0aGlzLCB0eXBlKTtcbiAgICAgICAgICAgIHRoaXNbdHlwZV0oKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGRhdGFQcml2LmdldCh0aGlzLCB0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHNhdmVkICE9PSByZXN1bHQgfHwgbm90QXN5bmMpIHtcbiAgICAgICAgICAgICAgZGF0YVByaXYuc2V0KHRoaXMsIHR5cGUsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2F2ZWQgIT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAvLyBDYW5jZWwgdGhlIG91dGVyIHN5bnRoZXRpYyBldmVudFxuICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIH0gLy8gSWYgdGhpcyBpcyBhbiBpbm5lciBzeW50aGV0aWMgZXZlbnQgZm9yIGFuIGV2ZW50IHdpdGggYSBidWJibGluZyBzdXJyb2dhdGVcbiAgICAgICAgICAgIC8vIChmb2N1cyBvciBibHVyKSwgYXNzdW1lIHRoYXQgdGhlIHN1cnJvZ2F0ZSBhbHJlYWR5IHByb3BhZ2F0ZWQgZnJvbSB0cmlnZ2VyaW5nIHRoZVxuICAgICAgICAgICAgLy8gbmF0aXZlIGV2ZW50IGFuZCBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcgYWdhaW4gaGVyZS5cbiAgICAgICAgICAgIC8vIFRoaXMgdGVjaG5pY2FsbHkgZ2V0cyB0aGUgb3JkZXJpbmcgd3Jvbmcgdy5yLnQuIHRvIGAudHJpZ2dlcigpYCAoaW4gd2hpY2ggdGhlXG4gICAgICAgICAgICAvLyBidWJibGluZyBzdXJyb2dhdGUgcHJvcGFnYXRlcyAqYWZ0ZXIqIHRoZSBub24tYnViYmxpbmcgYmFzZSksIGJ1dCB0aGF0IHNlZW1zXG4gICAgICAgICAgICAvLyBsZXNzIGJhZCB0aGFuIGR1cGxpY2F0aW9uLlxuXG4gICAgICAgICAgfSBlbHNlIGlmICgoalF1ZXJ5LmV2ZW50LnNwZWNpYWxbdHlwZV0gfHwge30pLmRlbGVnYXRlVHlwZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfSAvLyBJZiB0aGlzIGlzIGEgbmF0aXZlIGV2ZW50IHRyaWdnZXJlZCBhYm92ZSwgZXZlcnl0aGluZyBpcyBub3cgaW4gb3JkZXJcbiAgICAgICAgICAvLyBGaXJlIGFuIGlubmVyIHN5bnRoZXRpYyBldmVudCB3aXRoIHRoZSBvcmlnaW5hbCBhcmd1bWVudHNcblxuICAgICAgICB9IGVsc2UgaWYgKHNhdmVkLmxlbmd0aCkge1xuICAgICAgICAgIC8vIC4uLmFuZCBjYXB0dXJlIHRoZSByZXN1bHRcbiAgICAgICAgICBkYXRhUHJpdi5zZXQodGhpcywgdHlwZSwge1xuICAgICAgICAgICAgdmFsdWU6IGpRdWVyeS5ldmVudC50cmlnZ2VyKCAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMStcbiAgICAgICAgICAgIC8vIEV4dGVuZCB3aXRoIHRoZSBwcm90b3R5cGUgdG8gcmVzZXQgdGhlIGFib3ZlIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKHNhdmVkWzBdLCBqUXVlcnkuRXZlbnQucHJvdG90eXBlKSwgc2F2ZWQuc2xpY2UoMSksIHRoaXMpXG4gICAgICAgICAgfSk7IC8vIEFib3J0IGhhbmRsaW5nIG9mIHRoZSBuYXRpdmUgZXZlbnRcblxuICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBqUXVlcnkucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAoZWxlbSwgdHlwZSwgaGFuZGxlKSB7XG4gICAgLy8gVGhpcyBcImlmXCIgaXMgbmVlZGVkIGZvciBwbGFpbiBvYmplY3RzXG4gICAgaWYgKGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZSk7XG4gICAgfVxuICB9O1xuXG4gIGpRdWVyeS5FdmVudCA9IGZ1bmN0aW9uIChzcmMsIHByb3BzKSB7XG4gICAgLy8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IHRoZSAnbmV3JyBrZXl3b3JkXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGpRdWVyeS5FdmVudCkpIHtcbiAgICAgIHJldHVybiBuZXcgalF1ZXJ5LkV2ZW50KHNyYywgcHJvcHMpO1xuICAgIH0gLy8gRXZlbnQgb2JqZWN0XG5cblxuICAgIGlmIChzcmMgJiYgc3JjLnR5cGUpIHtcbiAgICAgIHRoaXMub3JpZ2luYWxFdmVudCA9IHNyYztcbiAgICAgIHRoaXMudHlwZSA9IHNyYy50eXBlOyAvLyBFdmVudHMgYnViYmxpbmcgdXAgdGhlIGRvY3VtZW50IG1heSBoYXZlIGJlZW4gbWFya2VkIGFzIHByZXZlbnRlZFxuICAgICAgLy8gYnkgYSBoYW5kbGVyIGxvd2VyIGRvd24gdGhlIHRyZWU7IHJlZmxlY3QgdGhlIGNvcnJlY3QgdmFsdWUuXG5cbiAgICAgIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gc3JjLmRlZmF1bHRQcmV2ZW50ZWQgfHwgc3JjLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHVuZGVmaW5lZCAmJiAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9Mi4zIG9ubHlcbiAgICAgIHNyYy5yZXR1cm5WYWx1ZSA9PT0gZmFsc2UgPyByZXR1cm5UcnVlIDogcmV0dXJuRmFsc2U7IC8vIENyZWF0ZSB0YXJnZXQgcHJvcGVydGllc1xuICAgICAgLy8gU3VwcG9ydDogU2FmYXJpIDw9NiAtIDcgb25seVxuICAgICAgLy8gVGFyZ2V0IHNob3VsZCBub3QgYmUgYSB0ZXh0IG5vZGUgKCM1MDQsICMxMzE0MylcblxuICAgICAgdGhpcy50YXJnZXQgPSBzcmMudGFyZ2V0ICYmIHNyYy50YXJnZXQubm9kZVR5cGUgPT09IDMgPyBzcmMudGFyZ2V0LnBhcmVudE5vZGUgOiBzcmMudGFyZ2V0O1xuICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gc3JjLmN1cnJlbnRUYXJnZXQ7XG4gICAgICB0aGlzLnJlbGF0ZWRUYXJnZXQgPSBzcmMucmVsYXRlZFRhcmdldDsgLy8gRXZlbnQgdHlwZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSBzcmM7XG4gICAgfSAvLyBQdXQgZXhwbGljaXRseSBwcm92aWRlZCBwcm9wZXJ0aWVzIG9udG8gdGhlIGV2ZW50IG9iamVjdFxuXG5cbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGpRdWVyeS5leHRlbmQodGhpcywgcHJvcHMpO1xuICAgIH0gLy8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcblxuXG4gICAgdGhpcy50aW1lU3RhbXAgPSBzcmMgJiYgc3JjLnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpOyAvLyBNYXJrIGl0IGFzIGZpeGVkXG5cbiAgICB0aGlzW2pRdWVyeS5leHBhbmRvXSA9IHRydWU7XG4gIH07IC8vIGpRdWVyeS5FdmVudCBpcyBiYXNlZCBvbiBET00zIEV2ZW50cyBhcyBzcGVjaWZpZWQgYnkgdGhlIEVDTUFTY3JpcHQgTGFuZ3VhZ2UgQmluZGluZ1xuICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAwMy9XRC1ET00tTGV2ZWwtMy1FdmVudHMtMjAwMzAzMzEvZWNtYS1zY3JpcHQtYmluZGluZy5odG1sXG5cblxuICBqUXVlcnkuRXZlbnQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBqUXVlcnkuRXZlbnQsXG4gICAgaXNEZWZhdWx0UHJldmVudGVkOiByZXR1cm5GYWxzZSxcbiAgICBpc1Byb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG4gICAgaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuICAgIGlzU2ltdWxhdGVkOiBmYWxzZSxcbiAgICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG4gICAgICB0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWU7XG5cbiAgICAgIGlmIChlICYmICF0aGlzLmlzU2ltdWxhdGVkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG4gICAgICB0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuICAgICAgaWYgKGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG4gICAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuICAgICAgaWYgKGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH07IC8vIEluY2x1ZGVzIGFsbCBjb21tb24gZXZlbnQgcHJvcHMgaW5jbHVkaW5nIEtleUV2ZW50IGFuZCBNb3VzZUV2ZW50IHNwZWNpZmljIHByb3BzXG5cbiAgalF1ZXJ5LmVhY2goe1xuICAgIGFsdEtleTogdHJ1ZSxcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgY2hhbmdlZFRvdWNoZXM6IHRydWUsXG4gICAgY3RybEtleTogdHJ1ZSxcbiAgICBkZXRhaWw6IHRydWUsXG4gICAgZXZlbnRQaGFzZTogdHJ1ZSxcbiAgICBtZXRhS2V5OiB0cnVlLFxuICAgIHBhZ2VYOiB0cnVlLFxuICAgIHBhZ2VZOiB0cnVlLFxuICAgIHNoaWZ0S2V5OiB0cnVlLFxuICAgIHZpZXc6IHRydWUsXG4gICAgXCJjaGFyXCI6IHRydWUsXG4gICAgY29kZTogdHJ1ZSxcbiAgICBjaGFyQ29kZTogdHJ1ZSxcbiAgICBrZXk6IHRydWUsXG4gICAga2V5Q29kZTogdHJ1ZSxcbiAgICBidXR0b246IHRydWUsXG4gICAgYnV0dG9uczogdHJ1ZSxcbiAgICBjbGllbnRYOiB0cnVlLFxuICAgIGNsaWVudFk6IHRydWUsXG4gICAgb2Zmc2V0WDogdHJ1ZSxcbiAgICBvZmZzZXRZOiB0cnVlLFxuICAgIHBvaW50ZXJJZDogdHJ1ZSxcbiAgICBwb2ludGVyVHlwZTogdHJ1ZSxcbiAgICBzY3JlZW5YOiB0cnVlLFxuICAgIHNjcmVlblk6IHRydWUsXG4gICAgdGFyZ2V0VG91Y2hlczogdHJ1ZSxcbiAgICB0b0VsZW1lbnQ6IHRydWUsXG4gICAgdG91Y2hlczogdHJ1ZSxcbiAgICB3aGljaDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgYnV0dG9uID0gZXZlbnQuYnV0dG9uOyAvLyBBZGQgd2hpY2ggZm9yIGtleSBldmVudHNcblxuICAgICAgaWYgKGV2ZW50LndoaWNoID09IG51bGwgJiYgcmtleUV2ZW50LnRlc3QoZXZlbnQudHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmNoYXJDb2RlICE9IG51bGwgPyBldmVudC5jaGFyQ29kZSA6IGV2ZW50LmtleUNvZGU7XG4gICAgICB9IC8vIEFkZCB3aGljaCBmb3IgY2xpY2s6IDEgPT09IGxlZnQ7IDIgPT09IG1pZGRsZTsgMyA9PT0gcmlnaHRcblxuXG4gICAgICBpZiAoIWV2ZW50LndoaWNoICYmIGJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIHJtb3VzZUV2ZW50LnRlc3QoZXZlbnQudHlwZSkpIHtcbiAgICAgICAgaWYgKGJ1dHRvbiAmIDEpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidXR0b24gJiAyKSB7XG4gICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnV0dG9uICYgNCkge1xuICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudC53aGljaDtcbiAgICB9XG4gIH0sIGpRdWVyeS5ldmVudC5hZGRQcm9wKTtcbiAgalF1ZXJ5LmVhY2goe1xuICAgIGZvY3VzOiBcImZvY3VzaW5cIixcbiAgICBibHVyOiBcImZvY3Vzb3V0XCJcbiAgfSwgZnVuY3Rpb24gKHR5cGUsIGRlbGVnYXRlVHlwZSkge1xuICAgIGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdID0ge1xuICAgICAgLy8gVXRpbGl6ZSBuYXRpdmUgZXZlbnQgaWYgcG9zc2libGUgc28gYmx1ci9mb2N1cyBzZXF1ZW5jZSBpcyBjb3JyZWN0XG4gICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBDbGFpbSB0aGUgZmlyc3QgaGFuZGxlclxuICAgICAgICAvLyBkYXRhUHJpdi5zZXQoIHRoaXMsIFwiZm9jdXNcIiwgLi4uIClcbiAgICAgICAgLy8gZGF0YVByaXYuc2V0KCB0aGlzLCBcImJsdXJcIiwgLi4uIClcbiAgICAgICAgbGV2ZXJhZ2VOYXRpdmUodGhpcywgdHlwZSwgZXhwZWN0U3luYyk7IC8vIFJldHVybiBmYWxzZSB0byBhbGxvdyBub3JtYWwgcHJvY2Vzc2luZyBpbiB0aGUgY2FsbGVyXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJcbiAgICAgICAgbGV2ZXJhZ2VOYXRpdmUodGhpcywgdHlwZSk7IC8vIFJldHVybiBub24tZmFsc2UgdG8gYWxsb3cgbm9ybWFsIGV2ZW50LXBhdGggcHJvcGFnYXRpb25cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxlZ2F0ZVR5cGU6IGRlbGVnYXRlVHlwZVxuICAgIH07XG4gIH0pOyAvLyBDcmVhdGUgbW91c2VlbnRlci9sZWF2ZSBldmVudHMgdXNpbmcgbW91c2VvdmVyL291dCBhbmQgZXZlbnQtdGltZSBjaGVja3NcbiAgLy8gc28gdGhhdCBldmVudCBkZWxlZ2F0aW9uIHdvcmtzIGluIGpRdWVyeS5cbiAgLy8gRG8gdGhlIHNhbWUgZm9yIHBvaW50ZXJlbnRlci9wb2ludGVybGVhdmUgYW5kIHBvaW50ZXJvdmVyL3BvaW50ZXJvdXRcbiAgLy9cbiAgLy8gU3VwcG9ydDogU2FmYXJpIDcgb25seVxuICAvLyBTYWZhcmkgc2VuZHMgbW91c2VlbnRlciB0b28gb2Z0ZW47IHNlZTpcbiAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDcwMjU4XG4gIC8vIGZvciB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGJ1ZyAoaXQgZXhpc3RlZCBpbiBvbGRlciBDaHJvbWUgdmVyc2lvbnMgYXMgd2VsbCkuXG5cbiAgalF1ZXJ5LmVhY2goe1xuICAgIG1vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsXG4gICAgbW91c2VsZWF2ZTogXCJtb3VzZW91dFwiLFxuICAgIHBvaW50ZXJlbnRlcjogXCJwb2ludGVyb3ZlclwiLFxuICAgIHBvaW50ZXJsZWF2ZTogXCJwb2ludGVyb3V0XCJcbiAgfSwgZnVuY3Rpb24gKG9yaWcsIGZpeCkge1xuICAgIGpRdWVyeS5ldmVudC5zcGVjaWFsW29yaWddID0ge1xuICAgICAgZGVsZWdhdGVUeXBlOiBmaXgsXG4gICAgICBiaW5kVHlwZTogZml4LFxuICAgICAgaGFuZGxlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHJldCxcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMsXG4gICAgICAgICAgICByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldCxcbiAgICAgICAgICAgIGhhbmRsZU9iaiA9IGV2ZW50LmhhbmRsZU9iajsgLy8gRm9yIG1vdXNlZW50ZXIvbGVhdmUgY2FsbCB0aGUgaGFuZGxlciBpZiByZWxhdGVkIGlzIG91dHNpZGUgdGhlIHRhcmdldC5cbiAgICAgICAgLy8gTkI6IE5vIHJlbGF0ZWRUYXJnZXQgaWYgdGhlIG1vdXNlIGxlZnQvZW50ZXJlZCB0aGUgYnJvd3NlciB3aW5kb3dcblxuICAgICAgICBpZiAoIXJlbGF0ZWQgfHwgcmVsYXRlZCAhPT0gdGFyZ2V0ICYmICFqUXVlcnkuY29udGFpbnModGFyZ2V0LCByZWxhdGVkKSkge1xuICAgICAgICAgIGV2ZW50LnR5cGUgPSBoYW5kbGVPYmoub3JpZ1R5cGU7XG4gICAgICAgICAgcmV0ID0gaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICBldmVudC50eXBlID0gZml4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgb246IGZ1bmN0aW9uICh0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuKSB7XG4gICAgICByZXR1cm4gb24odGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbik7XG4gICAgfSxcbiAgICBvbmU6IGZ1bmN0aW9uICh0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuKSB7XG4gICAgICByZXR1cm4gb24odGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgMSk7XG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uICh0eXBlcywgc2VsZWN0b3IsIGZuKSB7XG4gICAgICB2YXIgaGFuZGxlT2JqLCB0eXBlO1xuXG4gICAgICBpZiAodHlwZXMgJiYgdHlwZXMucHJldmVudERlZmF1bHQgJiYgdHlwZXMuaGFuZGxlT2JqKSB7XG4gICAgICAgIC8vICggZXZlbnQgKSAgZGlzcGF0Y2hlZCBqUXVlcnkuRXZlbnRcbiAgICAgICAgaGFuZGxlT2JqID0gdHlwZXMuaGFuZGxlT2JqO1xuICAgICAgICBqUXVlcnkodHlwZXMuZGVsZWdhdGVUYXJnZXQpLm9mZihoYW5kbGVPYmoubmFtZXNwYWNlID8gaGFuZGxlT2JqLm9yaWdUeXBlICsgXCIuXCIgKyBoYW5kbGVPYmoubmFtZXNwYWNlIDogaGFuZGxlT2JqLm9yaWdUeXBlLCBoYW5kbGVPYmouc2VsZWN0b3IsIGhhbmRsZU9iai5oYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgLy8gKCB0eXBlcy1vYmplY3QgWywgc2VsZWN0b3JdIClcbiAgICAgICAgZm9yICh0eXBlIGluIHR5cGVzKSB7XG4gICAgICAgICAgdGhpcy5vZmYodHlwZSwgc2VsZWN0b3IsIHR5cGVzW3R5cGVdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0b3IgPT09IGZhbHNlIHx8IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIC8vICggdHlwZXMgWywgZm5dIClcbiAgICAgICAgZm4gPSBzZWxlY3RvcjtcbiAgICAgICAgc2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChmbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm4gPSByZXR1cm5GYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeS5ldmVudC5yZW1vdmUodGhpcywgdHlwZXMsIGZuLCBzZWxlY3Rvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2YXJcbiAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQvaXNzdWVzLzMyMjlcbiAgcnhodG1sVGFnID0gLzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksXG5cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAvLyBTdXBwb3J0OiBJRSA8PTEwIC0gMTEsIEVkZ2UgMTIgLSAxMyBvbmx5XG4gIC8vIEluIElFL0VkZ2UgdXNpbmcgcmVnZXggZ3JvdXBzIGhlcmUgY2F1c2VzIHNldmVyZSBzbG93ZG93bnMuXG4gIC8vIFNlZSBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzE3MzY1MTIvXG4gIHJub0lubmVyaHRtbCA9IC88c2NyaXB0fDxzdHlsZXw8bGluay9pLFxuICAgICAgLy8gY2hlY2tlZD1cImNoZWNrZWRcIiBvciBjaGVja2VkXG4gIHJjaGVja2VkID0gL2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxcbiAgICAgIHJjbGVhblNjcmlwdCA9IC9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZzsgLy8gUHJlZmVyIGEgdGJvZHkgb3ZlciBpdHMgcGFyZW50IHRhYmxlIGZvciBjb250YWluaW5nIG5ldyByb3dzXG5cbiAgZnVuY3Rpb24gbWFuaXB1bGF0aW9uVGFyZ2V0KGVsZW0sIGNvbnRlbnQpIHtcbiAgICBpZiAobm9kZU5hbWUoZWxlbSwgXCJ0YWJsZVwiKSAmJiBub2RlTmFtZShjb250ZW50Lm5vZGVUeXBlICE9PSAxMSA/IGNvbnRlbnQgOiBjb250ZW50LmZpcnN0Q2hpbGQsIFwidHJcIikpIHtcbiAgICAgIHJldHVybiBqUXVlcnkoZWxlbSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXSB8fCBlbGVtO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtO1xuICB9IC8vIFJlcGxhY2UvcmVzdG9yZSB0aGUgdHlwZSBhdHRyaWJ1dGUgb2Ygc2NyaXB0IGVsZW1lbnRzIGZvciBzYWZlIERPTSBtYW5pcHVsYXRpb25cblxuXG4gIGZ1bmN0aW9uIGRpc2FibGVTY3JpcHQoZWxlbSkge1xuICAgIGVsZW0udHlwZSA9IChlbGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikgIT09IG51bGwpICsgXCIvXCIgKyBlbGVtLnR5cGU7XG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlU2NyaXB0KGVsZW0pIHtcbiAgICBpZiAoKGVsZW0udHlwZSB8fCBcIlwiKS5zbGljZSgwLCA1KSA9PT0gXCJ0cnVlL1wiKSB7XG4gICAgICBlbGVtLnR5cGUgPSBlbGVtLnR5cGUuc2xpY2UoNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lQ29weUV2ZW50KHNyYywgZGVzdCkge1xuICAgIHZhciBpLCBsLCB0eXBlLCBwZGF0YU9sZCwgcGRhdGFDdXIsIHVkYXRhT2xkLCB1ZGF0YUN1ciwgZXZlbnRzO1xuXG4gICAgaWYgKGRlc3Qubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIDEuIENvcHkgcHJpdmF0ZSBkYXRhOiBldmVudHMsIGhhbmRsZXJzLCBldGMuXG5cblxuICAgIGlmIChkYXRhUHJpdi5oYXNEYXRhKHNyYykpIHtcbiAgICAgIHBkYXRhT2xkID0gZGF0YVByaXYuYWNjZXNzKHNyYyk7XG4gICAgICBwZGF0YUN1ciA9IGRhdGFQcml2LnNldChkZXN0LCBwZGF0YU9sZCk7XG4gICAgICBldmVudHMgPSBwZGF0YU9sZC5ldmVudHM7XG5cbiAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgZGVsZXRlIHBkYXRhQ3VyLmhhbmRsZTtcbiAgICAgICAgcGRhdGFDdXIuZXZlbnRzID0ge307XG5cbiAgICAgICAgZm9yICh0eXBlIGluIGV2ZW50cykge1xuICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBldmVudHNbdHlwZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBqUXVlcnkuZXZlbnQuYWRkKGRlc3QsIHR5cGUsIGV2ZW50c1t0eXBlXVtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyAyLiBDb3B5IHVzZXIgZGF0YVxuXG5cbiAgICBpZiAoZGF0YVVzZXIuaGFzRGF0YShzcmMpKSB7XG4gICAgICB1ZGF0YU9sZCA9IGRhdGFVc2VyLmFjY2VzcyhzcmMpO1xuICAgICAgdWRhdGFDdXIgPSBqUXVlcnkuZXh0ZW5kKHt9LCB1ZGF0YU9sZCk7XG4gICAgICBkYXRhVXNlci5zZXQoZGVzdCwgdWRhdGFDdXIpO1xuICAgIH1cbiAgfSAvLyBGaXggSUUgYnVncywgc2VlIHN1cHBvcnQgdGVzdHNcblxuXG4gIGZ1bmN0aW9uIGZpeElucHV0KHNyYywgZGVzdCkge1xuICAgIHZhciBub2RlTmFtZSA9IGRlc3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKTsgLy8gRmFpbHMgdG8gcGVyc2lzdCB0aGUgY2hlY2tlZCBzdGF0ZSBvZiBhIGNsb25lZCBjaGVja2JveCBvciByYWRpbyBidXR0b24uXG5cbiAgICBpZiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiByY2hlY2thYmxlVHlwZS50ZXN0KHNyYy50eXBlKSkge1xuICAgICAgZGVzdC5jaGVja2VkID0gc3JjLmNoZWNrZWQ7IC8vIEZhaWxzIHRvIHJldHVybiB0aGUgc2VsZWN0ZWQgb3B0aW9uIHRvIHRoZSBkZWZhdWx0IHNlbGVjdGVkIHN0YXRlIHdoZW4gY2xvbmluZyBvcHRpb25zXG4gICAgfSBlbHNlIGlmIChub2RlTmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5vZGVOYW1lID09PSBcInRleHRhcmVhXCIpIHtcbiAgICAgIGRlc3QuZGVmYXVsdFZhbHVlID0gc3JjLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkb21NYW5pcChjb2xsZWN0aW9uLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCkge1xuICAgIC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcbiAgICBhcmdzID0gY29uY2F0LmFwcGx5KFtdLCBhcmdzKTtcbiAgICB2YXIgZnJhZ21lbnQsXG4gICAgICAgIGZpcnN0LFxuICAgICAgICBzY3JpcHRzLFxuICAgICAgICBoYXNTY3JpcHRzLFxuICAgICAgICBub2RlLFxuICAgICAgICBkb2MsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGlOb0Nsb25lID0gbCAtIDEsXG4gICAgICAgIHZhbHVlID0gYXJnc1swXSxcbiAgICAgICAgdmFsdWVJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbih2YWx1ZSk7IC8vIFdlIGNhbid0IGNsb25lTm9kZSBmcmFnbWVudHMgdGhhdCBjb250YWluIGNoZWNrZWQsIGluIFdlYktpdFxuXG4gICAgaWYgKHZhbHVlSXNGdW5jdGlvbiB8fCBsID4gMSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgIXN1cHBvcnQuY2hlY2tDbG9uZSAmJiByY2hlY2tlZC50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSBjb2xsZWN0aW9uLmVxKGluZGV4KTtcblxuICAgICAgICBpZiAodmFsdWVJc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgYXJnc1swXSA9IHZhbHVlLmNhbGwodGhpcywgaW5kZXgsIHNlbGYuaHRtbCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbU1hbmlwKHNlbGYsIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChsKSB7XG4gICAgICBmcmFnbWVudCA9IGJ1aWxkRnJhZ21lbnQoYXJncywgY29sbGVjdGlvblswXS5vd25lckRvY3VtZW50LCBmYWxzZSwgY29sbGVjdGlvbiwgaWdub3JlZCk7XG4gICAgICBmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICAgIGlmIChmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBmcmFnbWVudCA9IGZpcnN0O1xuICAgICAgfSAvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcblxuXG4gICAgICBpZiAoZmlyc3QgfHwgaWdub3JlZCkge1xuICAgICAgICBzY3JpcHRzID0galF1ZXJ5Lm1hcChnZXRBbGwoZnJhZ21lbnQsIFwic2NyaXB0XCIpLCBkaXNhYmxlU2NyaXB0KTtcbiAgICAgICAgaGFzU2NyaXB0cyA9IHNjcmlwdHMubGVuZ3RoOyAvLyBVc2UgdGhlIG9yaWdpbmFsIGZyYWdtZW50IGZvciB0aGUgbGFzdCBpdGVtXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGZpcnN0IGJlY2F1c2UgaXQgY2FuIGVuZCB1cFxuICAgICAgICAvLyBiZWluZyBlbXB0aWVkIGluY29ycmVjdGx5IGluIGNlcnRhaW4gc2l0dWF0aW9ucyAoIzgwNzApLlxuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgbm9kZSA9IGZyYWdtZW50O1xuXG4gICAgICAgICAgaWYgKGkgIT09IGlOb0Nsb25lKSB7XG4gICAgICAgICAgICBub2RlID0galF1ZXJ5LmNsb25lKG5vZGUsIHRydWUsIHRydWUpOyAvLyBLZWVwIHJlZmVyZW5jZXMgdG8gY2xvbmVkIHNjcmlwdHMgZm9yIGxhdGVyIHJlc3RvcmF0aW9uXG5cbiAgICAgICAgICAgIGlmIChoYXNTY3JpcHRzKSB7XG4gICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuICAgICAgICAgICAgICAvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG4gICAgICAgICAgICAgIGpRdWVyeS5tZXJnZShzY3JpcHRzLCBnZXRBbGwobm9kZSwgXCJzY3JpcHRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY29sbGVjdGlvbltpXSwgbm9kZSwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzU2NyaXB0cykge1xuICAgICAgICAgIGRvYyA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5vd25lckRvY3VtZW50OyAvLyBSZWVuYWJsZSBzY3JpcHRzXG5cbiAgICAgICAgICBqUXVlcnkubWFwKHNjcmlwdHMsIHJlc3RvcmVTY3JpcHQpOyAvLyBFdmFsdWF0ZSBleGVjdXRhYmxlIHNjcmlwdHMgb24gZmlyc3QgZG9jdW1lbnQgaW5zZXJ0aW9uXG5cbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaGFzU2NyaXB0czsgaSsrKSB7XG4gICAgICAgICAgICBub2RlID0gc2NyaXB0c1tpXTtcblxuICAgICAgICAgICAgaWYgKHJzY3JpcHRUeXBlLnRlc3Qobm9kZS50eXBlIHx8IFwiXCIpICYmICFkYXRhUHJpdi5hY2Nlc3Mobm9kZSwgXCJnbG9iYWxFdmFsXCIpICYmIGpRdWVyeS5jb250YWlucyhkb2MsIG5vZGUpKSB7XG4gICAgICAgICAgICAgIGlmIChub2RlLnNyYyAmJiAobm9kZS50eXBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkgIT09IFwibW9kdWxlXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBPcHRpb25hbCBBSkFYIGRlcGVuZGVuY3ksIGJ1dCB3b24ndCBydW4gc2NyaXB0cyBpZiBub3QgcHJlc2VudFxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkuX2V2YWxVcmwgJiYgIW5vZGUubm9Nb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgIGpRdWVyeS5fZXZhbFVybChub2RlLnNyYywge1xuICAgICAgICAgICAgICAgICAgICBub25jZTogbm9kZS5ub25jZSB8fCBub2RlLmdldEF0dHJpYnV0ZShcIm5vbmNlXCIpXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRE9NRXZhbChub2RlLnRleHRDb250ZW50LnJlcGxhY2UocmNsZWFuU2NyaXB0LCBcIlwiKSwgbm9kZSwgZG9jKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlKGVsZW0sIHNlbGVjdG9yLCBrZWVwRGF0YSkge1xuICAgIHZhciBub2RlLFxuICAgICAgICBub2RlcyA9IHNlbGVjdG9yID8galF1ZXJ5LmZpbHRlcihzZWxlY3RvciwgZWxlbSkgOiBlbGVtLFxuICAgICAgICBpID0gMDtcblxuICAgIGZvciAoOyAobm9kZSA9IG5vZGVzW2ldKSAhPSBudWxsOyBpKyspIHtcbiAgICAgIGlmICgha2VlcERhdGEgJiYgbm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBqUXVlcnkuY2xlYW5EYXRhKGdldEFsbChub2RlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgaWYgKGtlZXBEYXRhICYmIGlzQXR0YWNoZWQobm9kZSkpIHtcbiAgICAgICAgICBzZXRHbG9iYWxFdmFsKGdldEFsbChub2RlLCBcInNjcmlwdFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICBqUXVlcnkuZXh0ZW5kKHtcbiAgICBodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZShyeGh0bWxUYWcsIFwiPCQxPjwvJDI+XCIpO1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uIChlbGVtLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cykge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgbCxcbiAgICAgICAgICBzcmNFbGVtZW50cyxcbiAgICAgICAgICBkZXN0RWxlbWVudHMsXG4gICAgICAgICAgY2xvbmUgPSBlbGVtLmNsb25lTm9kZSh0cnVlKSxcbiAgICAgICAgICBpblBhZ2UgPSBpc0F0dGFjaGVkKGVsZW0pOyAvLyBGaXggSUUgY2xvbmluZyBpc3N1ZXNcblxuICAgICAgaWYgKCFzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkICYmIChlbGVtLm5vZGVUeXBlID09PSAxIHx8IGVsZW0ubm9kZVR5cGUgPT09IDExKSAmJiAhalF1ZXJ5LmlzWE1MRG9jKGVsZW0pKSB7XG4gICAgICAgIC8vIFdlIGVzY2hldyBTaXp6bGUgaGVyZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uczogaHR0cHM6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuICAgICAgICBkZXN0RWxlbWVudHMgPSBnZXRBbGwoY2xvbmUpO1xuICAgICAgICBzcmNFbGVtZW50cyA9IGdldEFsbChlbGVtKTtcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgZml4SW5wdXQoc3JjRWxlbWVudHNbaV0sIGRlc3RFbGVtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQ29weSB0aGUgZXZlbnRzIGZyb20gdGhlIG9yaWdpbmFsIHRvIHRoZSBjbG9uZVxuXG5cbiAgICAgIGlmIChkYXRhQW5kRXZlbnRzKSB7XG4gICAgICAgIGlmIChkZWVwRGF0YUFuZEV2ZW50cykge1xuICAgICAgICAgIHNyY0VsZW1lbnRzID0gc3JjRWxlbWVudHMgfHwgZ2V0QWxsKGVsZW0pO1xuICAgICAgICAgIGRlc3RFbGVtZW50cyA9IGRlc3RFbGVtZW50cyB8fCBnZXRBbGwoY2xvbmUpO1xuXG4gICAgICAgICAgZm9yIChpID0gMCwgbCA9IHNyY0VsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgY2xvbmVDb3B5RXZlbnQoc3JjRWxlbWVudHNbaV0sIGRlc3RFbGVtZW50c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb25lQ29weUV2ZW50KGVsZW0sIGNsb25lKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cblxuICAgICAgZGVzdEVsZW1lbnRzID0gZ2V0QWxsKGNsb25lLCBcInNjcmlwdFwiKTtcblxuICAgICAgaWYgKGRlc3RFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldEdsb2JhbEV2YWwoZGVzdEVsZW1lbnRzLCAhaW5QYWdlICYmIGdldEFsbChlbGVtLCBcInNjcmlwdFwiKSk7XG4gICAgICB9IC8vIFJldHVybiB0aGUgY2xvbmVkIHNldFxuXG5cbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9LFxuICAgIGNsZWFuRGF0YTogZnVuY3Rpb24gKGVsZW1zKSB7XG4gICAgICB2YXIgZGF0YSxcbiAgICAgICAgICBlbGVtLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsLFxuICAgICAgICAgIGkgPSAwO1xuXG4gICAgICBmb3IgKDsgKGVsZW0gPSBlbGVtc1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgIGlmIChhY2NlcHREYXRhKGVsZW0pKSB7XG4gICAgICAgICAgaWYgKGRhdGEgPSBlbGVtW2RhdGFQcml2LmV4cGFuZG9dKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5ldmVudHMpIHtcbiAgICAgICAgICAgICAgZm9yICh0eXBlIGluIGRhdGEuZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwZWNpYWxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC5yZW1vdmUoZWxlbSwgdHlwZSk7IC8vIFRoaXMgaXMgYSBzaG9ydGN1dCB0byBhdm9pZCBqUXVlcnkuZXZlbnQucmVtb3ZlJ3Mgb3ZlcmhlYWRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUV2ZW50KGVsZW0sIHR5cGUsIGRhdGEuaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gLy8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcbiAgICAgICAgICAgIC8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuXG5cbiAgICAgICAgICAgIGVsZW1bZGF0YVByaXYuZXhwYW5kb10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVsZW1bZGF0YVVzZXIuZXhwYW5kb10pIHtcbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG4gICAgICAgICAgICAvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcbiAgICAgICAgICAgIGVsZW1bZGF0YVVzZXIuZXhwYW5kb10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgZGV0YWNoOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiByZW1vdmUodGhpcywgc2VsZWN0b3IsIHRydWUpO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiByZW1vdmUodGhpcywgc2VsZWN0b3IpO1xuICAgIH0sXG4gICAgdGV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IGpRdWVyeS50ZXh0KHRoaXMpIDogdGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIH0sXG4gICAgYXBwZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9tTWFuaXAodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IG1hbmlwdWxhdGlvblRhcmdldCh0aGlzLCBlbGVtKTtcbiAgICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcHJlcGVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSkge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQodGhpcywgZWxlbSk7XG4gICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShlbGVtLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYmVmb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9tTWFuaXAodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbSwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbGVtLFxuICAgICAgICAgIGkgPSAwO1xuXG4gICAgICBmb3IgKDsgKGVsZW0gPSB0aGlzW2ldKSAhPSBudWxsOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAvLyBQcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgICAgICAgIGpRdWVyeS5jbGVhbkRhdGEoZ2V0QWxsKGVsZW0sIGZhbHNlKSk7IC8vIFJlbW92ZSBhbnkgcmVtYWluaW5nIG5vZGVzXG5cbiAgICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGNsb25lOiBmdW5jdGlvbiAoZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMpIHtcbiAgICAgIGRhdGFBbmRFdmVudHMgPSBkYXRhQW5kRXZlbnRzID09IG51bGwgPyBmYWxzZSA6IGRhdGFBbmRFdmVudHM7XG4gICAgICBkZWVwRGF0YUFuZEV2ZW50cyA9IGRlZXBEYXRhQW5kRXZlbnRzID09IG51bGwgPyBkYXRhQW5kRXZlbnRzIDogZGVlcERhdGFBbmRFdmVudHM7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4galF1ZXJ5LmNsb25lKHRoaXMsIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaHRtbDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZWxlbSA9IHRoaXNbMF0gfHwge30sXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGwgPSB0aGlzLmxlbmd0aDtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0uaW5uZXJIVE1MO1xuICAgICAgICB9IC8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcblxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgIXJub0lubmVyaHRtbC50ZXN0KHZhbHVlKSAmJiAhd3JhcE1hcFsocnRhZ05hbWUuZXhlYyh2YWx1ZSkgfHwgW1wiXCIsIFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAgIHZhbHVlID0galF1ZXJ5Lmh0bWxQcmVmaWx0ZXIodmFsdWUpO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgIGVsZW0gPSB0aGlzW2ldIHx8IHt9OyAvLyBSZW1vdmUgZWxlbWVudCBub2RlcyBhbmQgcHJldmVudCBtZW1vcnkgbGVha3NcblxuICAgICAgICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5jbGVhbkRhdGEoZ2V0QWxsKGVsZW0sIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtID0gMDsgLy8gSWYgdXNpbmcgaW5uZXJIVE1MIHRocm93cyBhbiBleGNlcHRpb24sIHVzZSB0aGUgZmFsbGJhY2sgbWV0aG9kXG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgdGhpcy5lbXB0eSgpLmFwcGVuZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICB9LFxuICAgIHJlcGxhY2VXaXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaWdub3JlZCA9IFtdOyAvLyBNYWtlIHRoZSBjaGFuZ2VzLCByZXBsYWNpbmcgZWFjaCBub24taWdub3JlZCBjb250ZXh0IGVsZW1lbnQgd2l0aCB0aGUgbmV3IGNvbnRlbnRcblxuICAgICAgcmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgICAgICBpZiAoalF1ZXJ5LmluQXJyYXkodGhpcywgaWdub3JlZCkgPCAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmNsZWFuRGF0YShnZXRBbGwodGhpcykpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZChlbGVtLCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gRm9yY2UgY2FsbGJhY2sgaW52b2NhdGlvblxuXG4gICAgICB9LCBpZ25vcmVkKTtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZWFjaCh7XG4gICAgYXBwZW5kVG86IFwiYXBwZW5kXCIsXG4gICAgcHJlcGVuZFRvOiBcInByZXBlbmRcIixcbiAgICBpbnNlcnRCZWZvcmU6IFwiYmVmb3JlXCIsXG4gICAgaW5zZXJ0QWZ0ZXI6IFwiYWZ0ZXJcIixcbiAgICByZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcbiAgfSwgZnVuY3Rpb24gKG5hbWUsIG9yaWdpbmFsKSB7XG4gICAgalF1ZXJ5LmZuW25hbWVdID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICB2YXIgZWxlbXMsXG4gICAgICAgICAgcmV0ID0gW10sXG4gICAgICAgICAgaW5zZXJ0ID0galF1ZXJ5KHNlbGVjdG9yKSxcbiAgICAgICAgICBsYXN0ID0gaW5zZXJ0Lmxlbmd0aCAtIDEsXG4gICAgICAgICAgaSA9IDA7XG5cbiAgICAgIGZvciAoOyBpIDw9IGxhc3Q7IGkrKykge1xuICAgICAgICBlbGVtcyA9IGkgPT09IGxhc3QgPyB0aGlzIDogdGhpcy5jbG9uZSh0cnVlKTtcbiAgICAgICAgalF1ZXJ5KGluc2VydFtpXSlbb3JpZ2luYWxdKGVsZW1zKTsgLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG4gICAgICAgIC8vIC5nZXQoKSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblxuICAgICAgICBwdXNoLmFwcGx5KHJldCwgZWxlbXMuZ2V0KCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2socmV0KTtcbiAgICB9O1xuICB9KTtcbiAgdmFyIHJudW1ub25weCA9IG5ldyBSZWdFeHAoXCJeKFwiICsgcG51bSArIFwiKSg/IXB4KVthLXolXSskXCIsIFwiaVwiKTtcblxuICB2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHksIEZpcmVmb3ggPD0zMCAoIzE1MDk4LCAjMTQxNTApXG4gICAgLy8gSUUgdGhyb3dzIG9uIGVsZW1lbnRzIGNyZWF0ZWQgaW4gcG9wdXBzXG4gICAgLy8gRkYgbWVhbndoaWxlIHRocm93cyBvbiBmcmFtZSBlbGVtZW50cyB0aHJvdWdoIFwiZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZVwiXG4gICAgdmFyIHZpZXcgPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cbiAgICBpZiAoIXZpZXcgfHwgIXZpZXcub3BlbmVyKSB7XG4gICAgICB2aWV3ID0gd2luZG93O1xuICAgIH1cblxuICAgIHJldHVybiB2aWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gIH07XG5cbiAgdmFyIHJib3hTdHlsZSA9IG5ldyBSZWdFeHAoY3NzRXhwYW5kLmpvaW4oXCJ8XCIpLCBcImlcIik7XG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBFeGVjdXRpbmcgYm90aCBwaXhlbFBvc2l0aW9uICYgYm94U2l6aW5nUmVsaWFibGUgdGVzdHMgcmVxdWlyZSBvbmx5IG9uZSBsYXlvdXRcbiAgICAvLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuICAgIGZ1bmN0aW9uIGNvbXB1dGVTdHlsZVRlc3RzKCkge1xuICAgICAgLy8gVGhpcyBpcyBhIHNpbmdsZXRvbiwgd2UgbmVlZCB0byBleGVjdXRlIGl0IG9ubHkgb25jZVxuICAgICAgaWYgKCFkaXYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O1wiICsgXCJtYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjBcIjtcbiAgICAgIGRpdi5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7XCIgKyBcIm1hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7XCIgKyBcIndpZHRoOjYwJTt0b3A6MSVcIjtcbiAgICAgIGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB2YXIgZGl2U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkaXYpO1xuICAgICAgcGl4ZWxQb3NpdGlvblZhbCA9IGRpdlN0eWxlLnRvcCAhPT0gXCIxJVwiOyAvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5LCBGaXJlZm94IDw9MyAtIDQ0XG5cbiAgICAgIHJlbGlhYmxlTWFyZ2luTGVmdFZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyhkaXZTdHlsZS5tYXJnaW5MZWZ0KSA9PT0gMTI7IC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHksIFNhZmFyaSA8PTkuMSAtIDEwLjEsIGlPUyA8PTcuMCAtIDkuM1xuICAgICAgLy8gU29tZSBzdHlsZXMgY29tZSBiYWNrIHdpdGggcGVyY2VudGFnZSB2YWx1ZXMsIGV2ZW4gdGhvdWdoIHRoZXkgc2hvdWxkbid0XG5cbiAgICAgIGRpdi5zdHlsZS5yaWdodCA9IFwiNjAlXCI7XG4gICAgICBwaXhlbEJveFN0eWxlc1ZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyhkaXZTdHlsZS5yaWdodCkgPT09IDM2OyAvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuICAgICAgLy8gRGV0ZWN0IG1pc3JlcG9ydGluZyBvZiBjb250ZW50IGRpbWVuc2lvbnMgZm9yIGJveC1zaXppbmc6Ym9yZGVyLWJveCBlbGVtZW50c1xuXG4gICAgICBib3hTaXppbmdSZWxpYWJsZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyhkaXZTdHlsZS53aWR0aCkgPT09IDM2OyAvLyBTdXBwb3J0OiBJRSA5IG9ubHlcbiAgICAgIC8vIERldGVjdCBvdmVyZmxvdzpzY3JvbGwgc2NyZXdpbmVzcyAoZ2gtMzY5OSlcbiAgICAgIC8vIFN1cHBvcnQ6IENocm9tZSA8PTY0XG4gICAgICAvLyBEb24ndCBnZXQgdHJpY2tlZCB3aGVuIHpvb20gYWZmZWN0cyBvZmZzZXRXaWR0aCAoZ2gtNDAyOSlcblxuICAgICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgc2Nyb2xsYm94U2l6ZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyhkaXYub2Zmc2V0V2lkdGggLyAzKSA9PT0gMTI7XG4gICAgICBkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTsgLy8gTnVsbGlmeSB0aGUgZGl2IHNvIGl0IHdvdWxkbid0IGJlIHN0b3JlZCBpbiB0aGUgbWVtb3J5IGFuZFxuICAgICAgLy8gaXQgd2lsbCBhbHNvIGJlIGEgc2lnbiB0aGF0IGNoZWNrcyBhbHJlYWR5IHBlcmZvcm1lZFxuXG4gICAgICBkaXYgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJvdW5kUGl4ZWxNZWFzdXJlcyhtZWFzdXJlKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1lYXN1cmUpKTtcbiAgICB9XG5cbiAgICB2YXIgcGl4ZWxQb3NpdGlvblZhbCxcbiAgICAgICAgYm94U2l6aW5nUmVsaWFibGVWYWwsXG4gICAgICAgIHNjcm9sbGJveFNpemVWYWwsXG4gICAgICAgIHBpeGVsQm94U3R5bGVzVmFsLFxuICAgICAgICByZWxpYWJsZU1hcmdpbkxlZnRWYWwsXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIEZpbmlzaCBlYXJseSBpbiBsaW1pdGVkIChub24tYnJvd3NlcikgZW52aXJvbm1lbnRzXG5cbiAgICBpZiAoIWRpdi5zdHlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuICAgIC8vIFN0eWxlIG9mIGNsb25lZCBlbGVtZW50IGFmZmVjdHMgc291cmNlIGVsZW1lbnQgY2xvbmVkICgjODkwOClcblxuXG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJjb250ZW50LWJveFwiO1xuICAgIGRpdi5jbG9uZU5vZGUodHJ1ZSkuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcIlwiO1xuICAgIHN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlID0gZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID09PSBcImNvbnRlbnQtYm94XCI7XG4gICAgalF1ZXJ5LmV4dGVuZChzdXBwb3J0LCB7XG4gICAgICBib3hTaXppbmdSZWxpYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb21wdXRlU3R5bGVUZXN0cygpO1xuICAgICAgICByZXR1cm4gYm94U2l6aW5nUmVsaWFibGVWYWw7XG4gICAgICB9LFxuICAgICAgcGl4ZWxCb3hTdHlsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcHV0ZVN0eWxlVGVzdHMoKTtcbiAgICAgICAgcmV0dXJuIHBpeGVsQm94U3R5bGVzVmFsO1xuICAgICAgfSxcbiAgICAgIHBpeGVsUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcHV0ZVN0eWxlVGVzdHMoKTtcbiAgICAgICAgcmV0dXJuIHBpeGVsUG9zaXRpb25WYWw7XG4gICAgICB9LFxuICAgICAgcmVsaWFibGVNYXJnaW5MZWZ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbXB1dGVTdHlsZVRlc3RzKCk7XG4gICAgICAgIHJldHVybiByZWxpYWJsZU1hcmdpbkxlZnRWYWw7XG4gICAgICB9LFxuICAgICAgc2Nyb2xsYm94U2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb21wdXRlU3R5bGVUZXN0cygpO1xuICAgICAgICByZXR1cm4gc2Nyb2xsYm94U2l6ZVZhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBjdXJDU1MoZWxlbSwgbmFtZSwgY29tcHV0ZWQpIHtcbiAgICB2YXIgd2lkdGgsXG4gICAgICAgIG1pbldpZHRoLFxuICAgICAgICBtYXhXaWR0aCxcbiAgICAgICAgcmV0LFxuICAgICAgICAvLyBTdXBwb3J0OiBGaXJlZm94IDUxK1xuICAgIC8vIFJldHJpZXZpbmcgc3R5bGUgYmVmb3JlIGNvbXB1dGVkIHNvbWVob3dcbiAgICAvLyBmaXhlcyBhbiBpc3N1ZSB3aXRoIGdldHRpbmcgd3JvbmcgdmFsdWVzXG4gICAgLy8gb24gZGV0YWNoZWQgZWxlbWVudHNcbiAgICBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgY29tcHV0ZWQgPSBjb21wdXRlZCB8fCBnZXRTdHlsZXMoZWxlbSk7IC8vIGdldFByb3BlcnR5VmFsdWUgaXMgbmVlZGVkIGZvcjpcbiAgICAvLyAgIC5jc3MoJ2ZpbHRlcicpIChJRSA5IG9ubHksICMxMjUzNylcbiAgICAvLyAgIC5jc3MoJy0tY3VzdG9tUHJvcGVydHkpICgjMzE0NClcblxuICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgcmV0ID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSB8fCBjb21wdXRlZFtuYW1lXTtcblxuICAgICAgaWYgKHJldCA9PT0gXCJcIiAmJiAhaXNBdHRhY2hlZChlbGVtKSkge1xuICAgICAgICByZXQgPSBqUXVlcnkuc3R5bGUoZWxlbSwgbmFtZSk7XG4gICAgICB9IC8vIEEgdHJpYnV0ZSB0byB0aGUgXCJhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXCJcbiAgICAgIC8vIEFuZHJvaWQgQnJvd3NlciByZXR1cm5zIHBlcmNlbnRhZ2UgZm9yIHNvbWUgdmFsdWVzLFxuICAgICAgLy8gYnV0IHdpZHRoIHNlZW1zIHRvIGJlIHJlbGlhYmx5IHBpeGVscy5cbiAgICAgIC8vIFRoaXMgaXMgYWdhaW5zdCB0aGUgQ1NTT00gZHJhZnQgc3BlYzpcbiAgICAgIC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jcmVzb2x2ZWQtdmFsdWVzXG5cblxuICAgICAgaWYgKCFzdXBwb3J0LnBpeGVsQm94U3R5bGVzKCkgJiYgcm51bW5vbnB4LnRlc3QocmV0KSAmJiByYm94U3R5bGUudGVzdChuYW1lKSkge1xuICAgICAgICAvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG4gICAgICAgIHdpZHRoID0gc3R5bGUud2lkdGg7XG4gICAgICAgIG1pbldpZHRoID0gc3R5bGUubWluV2lkdGg7XG4gICAgICAgIG1heFdpZHRoID0gc3R5bGUubWF4V2lkdGg7IC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcblxuICAgICAgICBzdHlsZS5taW5XaWR0aCA9IHN0eWxlLm1heFdpZHRoID0gc3R5bGUud2lkdGggPSByZXQ7XG4gICAgICAgIHJldCA9IGNvbXB1dGVkLndpZHRoOyAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG5cbiAgICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgc3R5bGUubWluV2lkdGggPSBtaW5XaWR0aDtcbiAgICAgICAgc3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0ICE9PSB1bmRlZmluZWQgPyAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG4gICAgLy8gSUUgcmV0dXJucyB6SW5kZXggdmFsdWUgYXMgYW4gaW50ZWdlci5cbiAgICByZXQgKyBcIlwiIDogcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkR2V0SG9va0lmKGNvbmRpdGlvbkZuLCBob29rRm4pIHtcbiAgICAvLyBEZWZpbmUgdGhlIGhvb2ssIHdlJ2xsIGNoZWNrIG9uIHRoZSBmaXJzdCBydW4gaWYgaXQncyByZWFsbHkgbmVlZGVkLlxuICAgIHJldHVybiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbkZuKCkpIHtcbiAgICAgICAgICAvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcbiAgICAgICAgICAvLyB0byBtaXNzaW5nIGRlcGVuZGVuY3kpLCByZW1vdmUgaXQuXG4gICAgICAgICAgZGVsZXRlIHRoaXMuZ2V0O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBIb29rIG5lZWRlZDsgcmVkZWZpbmUgaXQgc28gdGhhdCB0aGUgc3VwcG9ydCB0ZXN0IGlzIG5vdCBleGVjdXRlZCBhZ2Fpbi5cblxuXG4gICAgICAgIHJldHVybiAodGhpcy5nZXQgPSBob29rRm4pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBjc3NQcmVmaXhlcyA9IFtcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCJdLFxuICAgICAgZW1wdHlTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsXG4gICAgICB2ZW5kb3JQcm9wcyA9IHt9OyAvLyBSZXR1cm4gYSB2ZW5kb3ItcHJlZml4ZWQgcHJvcGVydHkgb3IgdW5kZWZpbmVkXG5cbiAgZnVuY3Rpb24gdmVuZG9yUHJvcE5hbWUobmFtZSkge1xuICAgIC8vIENoZWNrIGZvciB2ZW5kb3IgcHJlZml4ZWQgbmFtZXNcbiAgICB2YXIgY2FwTmFtZSA9IG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSksXG4gICAgICAgIGkgPSBjc3NQcmVmaXhlcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBuYW1lID0gY3NzUHJlZml4ZXNbaV0gKyBjYXBOYW1lO1xuXG4gICAgICBpZiAobmFtZSBpbiBlbXB0eVN0eWxlKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZXR1cm4gYSBwb3RlbnRpYWxseS1tYXBwZWQgalF1ZXJ5LmNzc1Byb3BzIG9yIHZlbmRvciBwcmVmaXhlZCBwcm9wZXJ0eVxuXG5cbiAgZnVuY3Rpb24gZmluYWxQcm9wTmFtZShuYW1lKSB7XG4gICAgdmFyIGZpbmFsID0galF1ZXJ5LmNzc1Byb3BzW25hbWVdIHx8IHZlbmRvclByb3BzW25hbWVdO1xuXG4gICAgaWYgKGZpbmFsKSB7XG4gICAgICByZXR1cm4gZmluYWw7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgaW4gZW1wdHlTdHlsZSkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlbmRvclByb3BzW25hbWVdID0gdmVuZG9yUHJvcE5hbWUobmFtZSkgfHwgbmFtZTtcbiAgfVxuXG4gIHZhciAvLyBTd2FwcGFibGUgaWYgZGlzcGxheSBpcyBub25lIG9yIHN0YXJ0cyB3aXRoIHRhYmxlXG4gIC8vIGV4Y2VwdCBcInRhYmxlXCIsIFwidGFibGUtY2VsbFwiLCBvciBcInRhYmxlLWNhcHRpb25cIlxuICAvLyBTZWUgaGVyZSBmb3IgZGlzcGxheSB2YWx1ZXM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvQ1NTL2Rpc3BsYXlcbiAgcmRpc3BsYXlzd2FwID0gL14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFxuICAgICAgcmN1c3RvbVByb3AgPSAvXi0tLyxcbiAgICAgIGNzc1Nob3cgPSB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICB9LFxuICAgICAgY3NzTm9ybWFsVHJhbnNmb3JtID0ge1xuICAgIGxldHRlclNwYWNpbmc6IFwiMFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCJcbiAgfTtcblxuICBmdW5jdGlvbiBzZXRQb3NpdGl2ZU51bWJlcihlbGVtLCB2YWx1ZSwgc3VidHJhY3QpIHtcbiAgICAvLyBBbnkgcmVsYXRpdmUgKCsvLSkgdmFsdWVzIGhhdmUgYWxyZWFkeSBiZWVuXG4gICAgLy8gbm9ybWFsaXplZCBhdCB0aGlzIHBvaW50XG4gICAgdmFyIG1hdGNoZXMgPSByY3NzTnVtLmV4ZWModmFsdWUpO1xuICAgIHJldHVybiBtYXRjaGVzID8gLy8gR3VhcmQgYWdhaW5zdCB1bmRlZmluZWQgXCJzdWJ0cmFjdFwiLCBlLmcuLCB3aGVuIHVzZWQgYXMgaW4gY3NzSG9va3NcbiAgICBNYXRoLm1heCgwLCBtYXRjaGVzWzJdIC0gKHN1YnRyYWN0IHx8IDApKSArIChtYXRjaGVzWzNdIHx8IFwicHhcIikgOiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJveE1vZGVsQWRqdXN0bWVudChlbGVtLCBkaW1lbnNpb24sIGJveCwgaXNCb3JkZXJCb3gsIHN0eWxlcywgY29tcHV0ZWRWYWwpIHtcbiAgICB2YXIgaSA9IGRpbWVuc2lvbiA9PT0gXCJ3aWR0aFwiID8gMSA6IDAsXG4gICAgICAgIGV4dHJhID0gMCxcbiAgICAgICAgZGVsdGEgPSAwOyAvLyBBZGp1c3RtZW50IG1heSBub3QgYmUgbmVjZXNzYXJ5XG5cbiAgICBpZiAoYm94ID09PSAoaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IDQ7IGkgKz0gMikge1xuICAgICAgLy8gQm90aCBib3ggbW9kZWxzIGV4Y2x1ZGUgbWFyZ2luXG4gICAgICBpZiAoYm94ID09PSBcIm1hcmdpblwiKSB7XG4gICAgICAgIGRlbHRhICs9IGpRdWVyeS5jc3MoZWxlbSwgYm94ICsgY3NzRXhwYW5kW2ldLCB0cnVlLCBzdHlsZXMpO1xuICAgICAgfSAvLyBJZiB3ZSBnZXQgaGVyZSB3aXRoIGEgY29udGVudC1ib3gsIHdlJ3JlIHNlZWtpbmcgXCJwYWRkaW5nXCIgb3IgXCJib3JkZXJcIiBvciBcIm1hcmdpblwiXG5cblxuICAgICAgaWYgKCFpc0JvcmRlckJveCkge1xuICAgICAgICAvLyBBZGQgcGFkZGluZ1xuICAgICAgICBkZWx0YSArPSBqUXVlcnkuY3NzKGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kW2ldLCB0cnVlLCBzdHlsZXMpOyAvLyBGb3IgXCJib3JkZXJcIiBvciBcIm1hcmdpblwiLCBhZGQgYm9yZGVyXG5cbiAgICAgICAgaWYgKGJveCAhPT0gXCJwYWRkaW5nXCIpIHtcbiAgICAgICAgICBkZWx0YSArPSBqUXVlcnkuY3NzKGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbaV0gKyBcIldpZHRoXCIsIHRydWUsIHN0eWxlcyk7IC8vIEJ1dCBzdGlsbCBrZWVwIHRyYWNrIG9mIGl0IG90aGVyd2lzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4dHJhICs9IGpRdWVyeS5jc3MoZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFtpXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzKTtcbiAgICAgICAgfSAvLyBJZiB3ZSBnZXQgaGVyZSB3aXRoIGEgYm9yZGVyLWJveCAoY29udGVudCArIHBhZGRpbmcgKyBib3JkZXIpLCB3ZSdyZSBzZWVraW5nIFwiY29udGVudFwiIG9yXG4gICAgICAgIC8vIFwicGFkZGluZ1wiIG9yIFwibWFyZ2luXCJcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIFwiY29udGVudFwiLCBzdWJ0cmFjdCBwYWRkaW5nXG4gICAgICAgIGlmIChib3ggPT09IFwiY29udGVudFwiKSB7XG4gICAgICAgICAgZGVsdGEgLT0galF1ZXJ5LmNzcyhlbGVtLCBcInBhZGRpbmdcIiArIGNzc0V4cGFuZFtpXSwgdHJ1ZSwgc3R5bGVzKTtcbiAgICAgICAgfSAvLyBGb3IgXCJjb250ZW50XCIgb3IgXCJwYWRkaW5nXCIsIHN1YnRyYWN0IGJvcmRlclxuXG5cbiAgICAgICAgaWYgKGJveCAhPT0gXCJtYXJnaW5cIikge1xuICAgICAgICAgIGRlbHRhIC09IGpRdWVyeS5jc3MoZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFtpXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gQWNjb3VudCBmb3IgcG9zaXRpdmUgY29udGVudC1ib3ggc2Nyb2xsIGd1dHRlciB3aGVuIHJlcXVlc3RlZCBieSBwcm92aWRpbmcgY29tcHV0ZWRWYWxcblxuXG4gICAgaWYgKCFpc0JvcmRlckJveCAmJiBjb21wdXRlZFZhbCA+PSAwKSB7XG4gICAgICAvLyBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgaXMgYSByb3VuZGVkIHN1bSBvZiBjb250ZW50LCBwYWRkaW5nLCBzY3JvbGwgZ3V0dGVyLCBhbmQgYm9yZGVyXG4gICAgICAvLyBBc3N1bWluZyBpbnRlZ2VyIHNjcm9sbCBndXR0ZXIsIHN1YnRyYWN0IHRoZSByZXN0IGFuZCByb3VuZCBkb3duXG4gICAgICBkZWx0YSArPSBNYXRoLm1heCgwLCBNYXRoLmNlaWwoZWxlbVtcIm9mZnNldFwiICsgZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSldIC0gY29tcHV0ZWRWYWwgLSBkZWx0YSAtIGV4dHJhIC0gMC41IC8vIElmIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBpcyB1bmtub3duLCB0aGVuIHdlIGNhbid0IGRldGVybWluZSBjb250ZW50LWJveCBzY3JvbGwgZ3V0dGVyXG4gICAgICAvLyBVc2UgYW4gZXhwbGljaXQgemVybyB0byBhdm9pZCBOYU4gKGdoLTM5NjQpXG4gICAgICApKSB8fCAwO1xuICAgIH1cblxuICAgIHJldHVybiBkZWx0YTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpZHRoT3JIZWlnaHQoZWxlbSwgZGltZW5zaW9uLCBleHRyYSkge1xuICAgIC8vIFN0YXJ0IHdpdGggY29tcHV0ZWQgc3R5bGVcbiAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKGVsZW0pLFxuICAgICAgICAvLyBUbyBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LCBvbmx5IGZldGNoIGJveFNpemluZyBpZiB3ZSBuZWVkIGl0IChnaC00MzIyKS5cbiAgICAvLyBGYWtlIGNvbnRlbnQtYm94IHVudGlsIHdlIGtub3cgaXQncyBuZWVkZWQgdG8ga25vdyB0aGUgdHJ1ZSB2YWx1ZS5cbiAgICBib3hTaXppbmdOZWVkZWQgPSAhc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpIHx8IGV4dHJhLFxuICAgICAgICBpc0JvcmRlckJveCA9IGJveFNpemluZ05lZWRlZCAmJiBqUXVlcnkuY3NzKGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMpID09PSBcImJvcmRlci1ib3hcIixcbiAgICAgICAgdmFsdWVJc0JvcmRlckJveCA9IGlzQm9yZGVyQm94LFxuICAgICAgICB2YWwgPSBjdXJDU1MoZWxlbSwgZGltZW5zaW9uLCBzdHlsZXMpLFxuICAgICAgICBvZmZzZXRQcm9wID0gXCJvZmZzZXRcIiArIGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpOyAvLyBTdXBwb3J0OiBGaXJlZm94IDw9NTRcbiAgICAvLyBSZXR1cm4gYSBjb25mb3VuZGluZyBub24tcGl4ZWwgdmFsdWUgb3IgZmVpZ24gaWdub3JhbmNlLCBhcyBhcHByb3ByaWF0ZS5cblxuICAgIGlmIChybnVtbm9ucHgudGVzdCh2YWwpKSB7XG4gICAgICBpZiAoIWV4dHJhKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG5cbiAgICAgIHZhbCA9IFwiYXV0b1wiO1xuICAgIH0gLy8gRmFsbCBiYWNrIHRvIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCB3aGVuIHZhbHVlIGlzIFwiYXV0b1wiXG4gICAgLy8gVGhpcyBoYXBwZW5zIGZvciBpbmxpbmUgZWxlbWVudHMgd2l0aCBubyBleHBsaWNpdCBzZXR0aW5nIChnaC0zNTcxKVxuICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgLSA0LjMgb25seVxuICAgIC8vIEFsc28gdXNlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBmb3IgbWlzcmVwb3J0ZWQgaW5saW5lIGRpbWVuc2lvbnMgKGdoLTM2MDIpXG4gICAgLy8gU3VwcG9ydDogSUUgOS0xMSBvbmx5XG4gICAgLy8gQWxzbyB1c2Ugb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGZvciB3aGVuIGJveCBzaXppbmcgaXMgdW5yZWxpYWJsZVxuICAgIC8vIFdlIHVzZSBnZXRDbGllbnRSZWN0cygpIHRvIGNoZWNrIGZvciBoaWRkZW4vZGlzY29ubmVjdGVkLlxuICAgIC8vIEluIHRob3NlIGNhc2VzLCB0aGUgY29tcHV0ZWQgdmFsdWUgY2FuIGJlIHRydXN0ZWQgdG8gYmUgYm9yZGVyLWJveFxuXG5cbiAgICBpZiAoKCFzdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlKCkgJiYgaXNCb3JkZXJCb3ggfHwgdmFsID09PSBcImF1dG9cIiB8fCAhcGFyc2VGbG9hdCh2YWwpICYmIGpRdWVyeS5jc3MoZWxlbSwgXCJkaXNwbGF5XCIsIGZhbHNlLCBzdHlsZXMpID09PSBcImlubGluZVwiKSAmJiBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XG4gICAgICBpc0JvcmRlckJveCA9IGpRdWVyeS5jc3MoZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcykgPT09IFwiYm9yZGVyLWJveFwiOyAvLyBXaGVyZSBhdmFpbGFibGUsIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBhcHByb3hpbWF0ZSBib3JkZXIgYm94IGRpbWVuc2lvbnMuXG4gICAgICAvLyBXaGVyZSBub3QgYXZhaWxhYmxlIChlLmcuLCBTVkcpLCBhc3N1bWUgdW5yZWxpYWJsZSBib3gtc2l6aW5nIGFuZCBpbnRlcnByZXQgdGhlXG4gICAgICAvLyByZXRyaWV2ZWQgdmFsdWUgYXMgYSBjb250ZW50IGJveCBkaW1lbnNpb24uXG5cbiAgICAgIHZhbHVlSXNCb3JkZXJCb3ggPSBvZmZzZXRQcm9wIGluIGVsZW07XG5cbiAgICAgIGlmICh2YWx1ZUlzQm9yZGVyQm94KSB7XG4gICAgICAgIHZhbCA9IGVsZW1bb2Zmc2V0UHJvcF07XG4gICAgICB9XG4gICAgfSAvLyBOb3JtYWxpemUgXCJcIiBhbmQgYXV0b1xuXG5cbiAgICB2YWwgPSBwYXJzZUZsb2F0KHZhbCkgfHwgMDsgLy8gQWRqdXN0IGZvciB0aGUgZWxlbWVudCdzIGJveCBtb2RlbFxuXG4gICAgcmV0dXJuIHZhbCArIGJveE1vZGVsQWRqdXN0bWVudChlbGVtLCBkaW1lbnNpb24sIGV4dHJhIHx8IChpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiksIHZhbHVlSXNCb3JkZXJCb3gsIHN0eWxlcywgLy8gUHJvdmlkZSB0aGUgY3VycmVudCBjb21wdXRlZCBzaXplIHRvIHJlcXVlc3Qgc2Nyb2xsIGd1dHRlciBjYWxjdWxhdGlvbiAoZ2gtMzU4OSlcbiAgICB2YWwpICsgXCJweFwiO1xuICB9XG5cbiAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgLy8gQWRkIGluIHN0eWxlIHByb3BlcnR5IGhvb2tzIGZvciBvdmVycmlkaW5nIHRoZSBkZWZhdWx0XG4gICAgLy8gYmVoYXZpb3Igb2YgZ2V0dGluZyBhbmQgc2V0dGluZyBhIHN0eWxlIHByb3BlcnR5XG4gICAgY3NzSG9va3M6IHtcbiAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZWxlbSwgY29tcHV0ZWQpIHtcbiAgICAgICAgICBpZiAoY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBhbHdheXMgZ2V0IGEgbnVtYmVyIGJhY2sgZnJvbSBvcGFjaXR5XG4gICAgICAgICAgICB2YXIgcmV0ID0gY3VyQ1NTKGVsZW0sIFwib3BhY2l0eVwiKTtcbiAgICAgICAgICAgIHJldHVybiByZXQgPT09IFwiXCIgPyBcIjFcIiA6IHJldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIERvbid0IGF1dG9tYXRpY2FsbHkgYWRkIFwicHhcIiB0byB0aGVzZSBwb3NzaWJseS11bml0bGVzcyBwcm9wZXJ0aWVzXG4gICAgY3NzTnVtYmVyOiB7XG4gICAgICBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsXG4gICAgICBcImNvbHVtbkNvdW50XCI6IHRydWUsXG4gICAgICBcImZpbGxPcGFjaXR5XCI6IHRydWUsXG4gICAgICBcImZsZXhHcm93XCI6IHRydWUsXG4gICAgICBcImZsZXhTaHJpbmtcIjogdHJ1ZSxcbiAgICAgIFwiZm9udFdlaWdodFwiOiB0cnVlLFxuICAgICAgXCJncmlkQXJlYVwiOiB0cnVlLFxuICAgICAgXCJncmlkQ29sdW1uXCI6IHRydWUsXG4gICAgICBcImdyaWRDb2x1bW5FbmRcIjogdHJ1ZSxcbiAgICAgIFwiZ3JpZENvbHVtblN0YXJ0XCI6IHRydWUsXG4gICAgICBcImdyaWRSb3dcIjogdHJ1ZSxcbiAgICAgIFwiZ3JpZFJvd0VuZFwiOiB0cnVlLFxuICAgICAgXCJncmlkUm93U3RhcnRcIjogdHJ1ZSxcbiAgICAgIFwibGluZUhlaWdodFwiOiB0cnVlLFxuICAgICAgXCJvcGFjaXR5XCI6IHRydWUsXG4gICAgICBcIm9yZGVyXCI6IHRydWUsXG4gICAgICBcIm9ycGhhbnNcIjogdHJ1ZSxcbiAgICAgIFwid2lkb3dzXCI6IHRydWUsXG4gICAgICBcInpJbmRleFwiOiB0cnVlLFxuICAgICAgXCJ6b29tXCI6IHRydWVcbiAgICB9LFxuICAgIC8vIEFkZCBpbiBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIHlvdSB3aXNoIHRvIGZpeCBiZWZvcmVcbiAgICAvLyBzZXR0aW5nIG9yIGdldHRpbmcgdGhlIHZhbHVlXG4gICAgY3NzUHJvcHM6IHt9LFxuICAgIC8vIEdldCBhbmQgc2V0IHRoZSBzdHlsZSBwcm9wZXJ0eSBvbiBhIERPTSBOb2RlXG4gICAgc3R5bGU6IGZ1bmN0aW9uIChlbGVtLCBuYW1lLCB2YWx1ZSwgZXh0cmEpIHtcbiAgICAgIC8vIERvbid0IHNldCBzdHlsZXMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuICAgICAgaWYgKCFlbGVtIHx8IGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCB8fCAhZWxlbS5zdHlsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZVxuXG5cbiAgICAgIHZhciByZXQsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBob29rcyxcbiAgICAgICAgICBvcmlnTmFtZSA9IGNhbWVsQ2FzZShuYW1lKSxcbiAgICAgICAgICBpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KG5hbWUpLFxuICAgICAgICAgIHN0eWxlID0gZWxlbS5zdHlsZTsgLy8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuICAgICAgLy8gd2FudCB0byBxdWVyeSB0aGUgdmFsdWUgaWYgaXQgaXMgYSBDU1MgY3VzdG9tIHByb3BlcnR5XG4gICAgICAvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cbiAgICAgIGlmICghaXNDdXN0b21Qcm9wKSB7XG4gICAgICAgIG5hbWUgPSBmaW5hbFByb3BOYW1lKG9yaWdOYW1lKTtcbiAgICAgIH0gLy8gR2V0cyBob29rIGZvciB0aGUgcHJlZml4ZWQgdmVyc2lvbiwgdGhlbiB1bnByZWZpeGVkIHZlcnNpb25cblxuXG4gICAgICBob29rcyA9IGpRdWVyeS5jc3NIb29rc1tuYW1lXSB8fCBqUXVlcnkuY3NzSG9va3Nbb3JpZ05hbWVdOyAvLyBDaGVjayBpZiB3ZSdyZSBzZXR0aW5nIGEgdmFsdWVcblxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdHlwZSA9IHR5cGVvZiB2YWx1ZTsgLy8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKCM3MzQ1KVxuXG4gICAgICAgIGlmICh0eXBlID09PSBcInN0cmluZ1wiICYmIChyZXQgPSByY3NzTnVtLmV4ZWModmFsdWUpKSAmJiByZXRbMV0pIHtcbiAgICAgICAgICB2YWx1ZSA9IGFkanVzdENTUyhlbGVtLCBuYW1lLCByZXQpOyAvLyBGaXhlcyBidWcgIzkyMzdcblxuICAgICAgICAgIHR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICB9IC8vIE1ha2Ugc3VyZSB0aGF0IG51bGwgYW5kIE5hTiB2YWx1ZXMgYXJlbid0IHNldCAoIzcxMTYpXG5cblxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gSWYgYSBudW1iZXIgd2FzIHBhc3NlZCBpbiwgYWRkIHRoZSB1bml0IChleGNlcHQgZm9yIGNlcnRhaW4gQ1NTIHByb3BlcnRpZXMpXG4gICAgICAgIC8vIFRoZSBpc0N1c3RvbVByb3AgY2hlY2sgY2FuIGJlIHJlbW92ZWQgaW4galF1ZXJ5IDQuMCB3aGVuIHdlIG9ubHkgYXV0by1hcHBlbmRcbiAgICAgICAgLy8gXCJweFwiIHRvIGEgZmV3IGhhcmRjb2RlZCB2YWx1ZXMuXG5cblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJudW1iZXJcIiAmJiAhaXNDdXN0b21Qcm9wKSB7XG4gICAgICAgICAgdmFsdWUgKz0gcmV0ICYmIHJldFszXSB8fCAoalF1ZXJ5LmNzc051bWJlcltvcmlnTmFtZV0gPyBcIlwiIDogXCJweFwiKTtcbiAgICAgICAgfSAvLyBiYWNrZ3JvdW5kLSogcHJvcHMgYWZmZWN0IG9yaWdpbmFsIGNsb25lJ3MgdmFsdWVzXG5cblxuICAgICAgICBpZiAoIXN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlICYmIHZhbHVlID09PSBcIlwiICYmIG5hbWUuaW5kZXhPZihcImJhY2tncm91bmRcIikgPT09IDApIHtcbiAgICAgICAgICBzdHlsZVtuYW1lXSA9IFwiaW5oZXJpdFwiO1xuICAgICAgICB9IC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQsIHVzZSB0aGF0IHZhbHVlLCBvdGhlcndpc2UganVzdCBzZXQgdGhlIHNwZWNpZmllZCB2YWx1ZVxuXG5cbiAgICAgICAgaWYgKCFob29rcyB8fCAhKFwic2V0XCIgaW4gaG9va3MpIHx8ICh2YWx1ZSA9IGhvb2tzLnNldChlbGVtLCB2YWx1ZSwgZXh0cmEpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKGlzQ3VzdG9tUHJvcCkge1xuICAgICAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIG5vbi1jb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG4gICAgICAgIGlmIChob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoZWxlbSwgZmFsc2UsIGV4dHJhKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0gLy8gT3RoZXJ3aXNlIGp1c3QgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBvYmplY3RcblxuXG4gICAgICAgIHJldHVybiBzdHlsZVtuYW1lXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNzczogZnVuY3Rpb24gKGVsZW0sIG5hbWUsIGV4dHJhLCBzdHlsZXMpIHtcbiAgICAgIHZhciB2YWwsXG4gICAgICAgICAgbnVtLFxuICAgICAgICAgIGhvb2tzLFxuICAgICAgICAgIG9yaWdOYW1lID0gY2FtZWxDYXNlKG5hbWUpLFxuICAgICAgICAgIGlzQ3VzdG9tUHJvcCA9IHJjdXN0b21Qcm9wLnRlc3QobmFtZSk7IC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZS4gV2UgZG9uJ3RcbiAgICAgIC8vIHdhbnQgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCBpcyBhIENTUyBjdXN0b20gcHJvcGVydHlcbiAgICAgIC8vIHNpbmNlIHRoZXkgYXJlIHVzZXItZGVmaW5lZC5cblxuICAgICAgaWYgKCFpc0N1c3RvbVByb3ApIHtcbiAgICAgICAgbmFtZSA9IGZpbmFsUHJvcE5hbWUob3JpZ05hbWUpO1xuICAgICAgfSAvLyBUcnkgcHJlZml4ZWQgbmFtZSBmb2xsb3dlZCBieSB0aGUgdW5wcmVmaXhlZCBuYW1lXG5cblxuICAgICAgaG9va3MgPSBqUXVlcnkuY3NzSG9va3NbbmFtZV0gfHwgalF1ZXJ5LmNzc0hvb2tzW29yaWdOYW1lXTsgLy8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblxuICAgICAgaWYgKGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MpIHtcbiAgICAgICAgdmFsID0gaG9va3MuZ2V0KGVsZW0sIHRydWUsIGV4dHJhKTtcbiAgICAgIH0gLy8gT3RoZXJ3aXNlLCBpZiBhIHdheSB0byBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGV4aXN0cywgdXNlIHRoYXRcblxuXG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsID0gY3VyQ1NTKGVsZW0sIG5hbWUsIHN0eWxlcyk7XG4gICAgICB9IC8vIENvbnZlcnQgXCJub3JtYWxcIiB0byBjb21wdXRlZCB2YWx1ZVxuXG5cbiAgICAgIGlmICh2YWwgPT09IFwibm9ybWFsXCIgJiYgbmFtZSBpbiBjc3NOb3JtYWxUcmFuc2Zvcm0pIHtcbiAgICAgICAgdmFsID0gY3NzTm9ybWFsVHJhbnNmb3JtW25hbWVdO1xuICAgICAgfSAvLyBNYWtlIG51bWVyaWMgaWYgZm9yY2VkIG9yIGEgcXVhbGlmaWVyIHdhcyBwcm92aWRlZCBhbmQgdmFsIGxvb2tzIG51bWVyaWNcblxuXG4gICAgICBpZiAoZXh0cmEgPT09IFwiXCIgfHwgZXh0cmEpIHtcbiAgICAgICAgbnVtID0gcGFyc2VGbG9hdCh2YWwpO1xuICAgICAgICByZXR1cm4gZXh0cmEgPT09IHRydWUgfHwgaXNGaW5pdGUobnVtKSA/IG51bSB8fCAwIDogdmFsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5lYWNoKFtcImhlaWdodFwiLCBcIndpZHRoXCJdLCBmdW5jdGlvbiAoaSwgZGltZW5zaW9uKSB7XG4gICAgalF1ZXJ5LmNzc0hvb2tzW2RpbWVuc2lvbl0gPSB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtLCBjb21wdXRlZCwgZXh0cmEpIHtcbiAgICAgICAgaWYgKGNvbXB1dGVkKSB7XG4gICAgICAgICAgLy8gQ2VydGFpbiBlbGVtZW50cyBjYW4gaGF2ZSBkaW1lbnNpb24gaW5mbyBpZiB3ZSBpbnZpc2libHkgc2hvdyB0aGVtXG4gICAgICAgICAgLy8gYnV0IGl0IG11c3QgaGF2ZSBhIGN1cnJlbnQgZGlzcGxheSBzdHlsZSB0aGF0IHdvdWxkIGJlbmVmaXRcbiAgICAgICAgICByZXR1cm4gcmRpc3BsYXlzd2FwLnRlc3QoalF1ZXJ5LmNzcyhlbGVtLCBcImRpc3BsYXlcIikpICYmICggLy8gU3VwcG9ydDogU2FmYXJpIDgrXG4gICAgICAgICAgLy8gVGFibGUgY29sdW1ucyBpbiBTYWZhcmkgaGF2ZSBub24temVybyBvZmZzZXRXaWR0aCAmIHplcm9cbiAgICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB1bmxlc3MgZGlzcGxheSBpcyBjaGFuZ2VkLlxuICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuICAgICAgICAgIC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGEgZGlzY29ubmVjdGVkIG5vZGVcbiAgICAgICAgICAvLyBpbiBJRSB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICAgICAgIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggfHwgIWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpID8gc3dhcChlbGVtLCBjc3NTaG93LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0V2lkdGhPckhlaWdodChlbGVtLCBkaW1lbnNpb24sIGV4dHJhKTtcbiAgICAgICAgICB9KSA6IGdldFdpZHRoT3JIZWlnaHQoZWxlbSwgZGltZW5zaW9uLCBleHRyYSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtLCB2YWx1ZSwgZXh0cmEpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMsXG4gICAgICAgICAgICBzdHlsZXMgPSBnZXRTdHlsZXMoZWxlbSksXG4gICAgICAgICAgICAvLyBPbmx5IHJlYWQgc3R5bGVzLnBvc2l0aW9uIGlmIHRoZSB0ZXN0IGhhcyBhIGNoYW5jZSB0byBmYWlsXG4gICAgICAgIC8vIHRvIGF2b2lkIGZvcmNpbmcgYSByZWZsb3cuXG4gICAgICAgIHNjcm9sbGJveFNpemVCdWdneSA9ICFzdXBwb3J0LnNjcm9sbGJveFNpemUoKSAmJiBzdHlsZXMucG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIC8vIFRvIGF2b2lkIGZvcmNpbmcgYSByZWZsb3csIG9ubHkgZmV0Y2ggYm94U2l6aW5nIGlmIHdlIG5lZWQgaXQgKGdoLTM5OTEpXG4gICAgICAgIGJveFNpemluZ05lZWRlZCA9IHNjcm9sbGJveFNpemVCdWdneSB8fCBleHRyYSxcbiAgICAgICAgICAgIGlzQm9yZGVyQm94ID0gYm94U2l6aW5nTmVlZGVkICYmIGpRdWVyeS5jc3MoZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcykgPT09IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgc3VidHJhY3QgPSBleHRyYSA/IGJveE1vZGVsQWRqdXN0bWVudChlbGVtLCBkaW1lbnNpb24sIGV4dHJhLCBpc0JvcmRlckJveCwgc3R5bGVzKSA6IDA7IC8vIEFjY291bnQgZm9yIHVucmVsaWFibGUgYm9yZGVyLWJveCBkaW1lbnNpb25zIGJ5IGNvbXBhcmluZyBvZmZzZXQqIHRvIGNvbXB1dGVkIGFuZFxuICAgICAgICAvLyBmYWtpbmcgYSBjb250ZW50LWJveCB0byBnZXQgYm9yZGVyIGFuZCBwYWRkaW5nIChnaC0zNjk5KVxuXG4gICAgICAgIGlmIChpc0JvcmRlckJveCAmJiBzY3JvbGxib3hTaXplQnVnZ3kpIHtcbiAgICAgICAgICBzdWJ0cmFjdCAtPSBNYXRoLmNlaWwoZWxlbVtcIm9mZnNldFwiICsgZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSldIC0gcGFyc2VGbG9hdChzdHlsZXNbZGltZW5zaW9uXSkgLSBib3hNb2RlbEFkanVzdG1lbnQoZWxlbSwgZGltZW5zaW9uLCBcImJvcmRlclwiLCBmYWxzZSwgc3R5bGVzKSAtIDAuNSk7XG4gICAgICAgIH0gLy8gQ29udmVydCB0byBwaXhlbHMgaWYgdmFsdWUgYWRqdXN0bWVudCBpcyBuZWVkZWRcblxuXG4gICAgICAgIGlmIChzdWJ0cmFjdCAmJiAobWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyh2YWx1ZSkpICYmIChtYXRjaGVzWzNdIHx8IFwicHhcIikgIT09IFwicHhcIikge1xuICAgICAgICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9IHZhbHVlO1xuICAgICAgICAgIHZhbHVlID0galF1ZXJ5LmNzcyhlbGVtLCBkaW1lbnNpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNldFBvc2l0aXZlTnVtYmVyKGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIGpRdWVyeS5jc3NIb29rcy5tYXJnaW5MZWZ0ID0gYWRkR2V0SG9va0lmKHN1cHBvcnQucmVsaWFibGVNYXJnaW5MZWZ0LCBmdW5jdGlvbiAoZWxlbSwgY29tcHV0ZWQpIHtcbiAgICBpZiAoY29tcHV0ZWQpIHtcbiAgICAgIHJldHVybiAocGFyc2VGbG9hdChjdXJDU1MoZWxlbSwgXCJtYXJnaW5MZWZ0XCIpKSB8fCBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSBzd2FwKGVsZW0sIHtcbiAgICAgICAgbWFyZ2luTGVmdDogMFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgfSkpICsgXCJweFwiO1xuICAgIH1cbiAgfSk7IC8vIFRoZXNlIGhvb2tzIGFyZSB1c2VkIGJ5IGFuaW1hdGUgdG8gZXhwYW5kIHByb3BlcnRpZXNcblxuICBqUXVlcnkuZWFjaCh7XG4gICAgbWFyZ2luOiBcIlwiLFxuICAgIHBhZGRpbmc6IFwiXCIsXG4gICAgYm9yZGVyOiBcIldpZHRoXCJcbiAgfSwgZnVuY3Rpb24gKHByZWZpeCwgc3VmZml4KSB7XG4gICAgalF1ZXJ5LmNzc0hvb2tzW3ByZWZpeCArIHN1ZmZpeF0gPSB7XG4gICAgICBleHBhbmQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBleHBhbmRlZCA9IHt9LFxuICAgICAgICAgICAgLy8gQXNzdW1lcyBhIHNpbmdsZSBudW1iZXIgaWYgbm90IGEgc3RyaW5nXG4gICAgICAgIHBhcnRzID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUuc3BsaXQoXCIgXCIpIDogW3ZhbHVlXTtcblxuICAgICAgICBmb3IgKDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgIGV4cGFuZGVkW3ByZWZpeCArIGNzc0V4cGFuZFtpXSArIHN1ZmZpeF0gPSBwYXJ0c1tpXSB8fCBwYXJ0c1tpIC0gMl0gfHwgcGFydHNbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwYW5kZWQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChwcmVmaXggIT09IFwibWFyZ2luXCIpIHtcbiAgICAgIGpRdWVyeS5jc3NIb29rc1twcmVmaXggKyBzdWZmaXhdLnNldCA9IHNldFBvc2l0aXZlTnVtYmVyO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIGNzczogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uIChlbGVtLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgc3R5bGVzLFxuICAgICAgICAgICAgbGVuLFxuICAgICAgICAgICAgbWFwID0ge30sXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgICAgICAgIHN0eWxlcyA9IGdldFN0eWxlcyhlbGVtKTtcbiAgICAgICAgICBsZW4gPSBuYW1lLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIG1hcFtuYW1lW2ldXSA9IGpRdWVyeS5jc3MoZWxlbSwgbmFtZVtpXSwgZmFsc2UsIHN0eWxlcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8galF1ZXJ5LnN0eWxlKGVsZW0sIG5hbWUsIHZhbHVlKSA6IGpRdWVyeS5jc3MoZWxlbSwgbmFtZSk7XG4gICAgICB9LCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gVHdlZW4oZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuLnByb3RvdHlwZS5pbml0KGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nKTtcbiAgfVxuXG4gIGpRdWVyeS5Ud2VlbiA9IFR3ZWVuO1xuICBUd2Vlbi5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IFR3ZWVuLFxuICAgIGluaXQ6IGZ1bmN0aW9uIChlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZywgdW5pdCkge1xuICAgICAgdGhpcy5lbGVtID0gZWxlbTtcbiAgICAgIHRoaXMucHJvcCA9IHByb3A7XG4gICAgICB0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0O1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLm5vdyA9IHRoaXMuY3VyKCk7XG4gICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgIHRoaXMudW5pdCA9IHVuaXQgfHwgKGpRdWVyeS5jc3NOdW1iZXJbcHJvcF0gPyBcIlwiIDogXCJweFwiKTtcbiAgICB9LFxuICAgIGN1cjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzW3RoaXMucHJvcF07XG4gICAgICByZXR1cm4gaG9va3MgJiYgaG9va3MuZ2V0ID8gaG9va3MuZ2V0KHRoaXMpIDogVHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKTtcbiAgICB9LFxuICAgIHJ1bjogZnVuY3Rpb24gKHBlcmNlbnQpIHtcbiAgICAgIHZhciBlYXNlZCxcbiAgICAgICAgICBob29rcyA9IFR3ZWVuLnByb3BIb29rc1t0aGlzLnByb3BdO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zID0gZWFzZWQgPSBqUXVlcnkuZWFzaW5nW3RoaXMuZWFzaW5nXShwZXJjZW50LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKiBwZXJjZW50LCAwLCAxLCB0aGlzLm9wdGlvbnMuZHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3MgPSBlYXNlZCA9IHBlcmNlbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubm93ID0gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RlcCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSwgdGhpcy5ub3csIHRoaXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaG9va3MgJiYgaG9va3Muc2V0KSB7XG4gICAgICAgIGhvb2tzLnNldCh0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcbiAgVHdlZW4ucHJvdG90eXBlLmluaXQucHJvdG90eXBlID0gVHdlZW4ucHJvdG90eXBlO1xuICBUd2Vlbi5wcm9wSG9va3MgPSB7XG4gICAgX2RlZmF1bHQ6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgIHZhciByZXN1bHQ7IC8vIFVzZSBhIHByb3BlcnR5IG9uIHRoZSBlbGVtZW50IGRpcmVjdGx5IHdoZW4gaXQgaXMgbm90IGEgRE9NIGVsZW1lbnQsXG4gICAgICAgIC8vIG9yIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc3R5bGUgcHJvcGVydHkgdGhhdCBleGlzdHMuXG5cbiAgICAgICAgaWYgKHR3ZWVuLmVsZW0ubm9kZVR5cGUgIT09IDEgfHwgdHdlZW4uZWxlbVt0d2Vlbi5wcm9wXSAhPSBudWxsICYmIHR3ZWVuLmVsZW0uc3R5bGVbdHdlZW4ucHJvcF0gPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0d2Vlbi5lbGVtW3R3ZWVuLnByb3BdO1xuICAgICAgICB9IC8vIFBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIGFzIGEgM3JkIHBhcmFtZXRlciB0byAuY3NzIHdpbGwgYXV0b21hdGljYWxseVxuICAgICAgICAvLyBhdHRlbXB0IGEgcGFyc2VGbG9hdCBhbmQgZmFsbGJhY2sgdG8gYSBzdHJpbmcgaWYgdGhlIHBhcnNlIGZhaWxzLlxuICAgICAgICAvLyBTaW1wbGUgdmFsdWVzIHN1Y2ggYXMgXCIxMHB4XCIgYXJlIHBhcnNlZCB0byBGbG9hdDtcbiAgICAgICAgLy8gY29tcGxleCB2YWx1ZXMgc3VjaCBhcyBcInJvdGF0ZSgxcmFkKVwiIGFyZSByZXR1cm5lZCBhcy1pcy5cblxuXG4gICAgICAgIHJlc3VsdCA9IGpRdWVyeS5jc3ModHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgXCJcIik7IC8vIEVtcHR5IHN0cmluZ3MsIG51bGwsIHVuZGVmaW5lZCBhbmQgXCJhdXRvXCIgYXJlIGNvbnZlcnRlZCB0byAwLlxuXG4gICAgICAgIHJldHVybiAhcmVzdWx0IHx8IHJlc3VsdCA9PT0gXCJhdXRvXCIgPyAwIDogcmVzdWx0O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgIC8vIFVzZSBzdGVwIGhvb2sgZm9yIGJhY2sgY29tcGF0LlxuICAgICAgICAvLyBVc2UgY3NzSG9vayBpZiBpdHMgdGhlcmUuXG4gICAgICAgIC8vIFVzZSAuc3R5bGUgaWYgYXZhaWxhYmxlIGFuZCB1c2UgcGxhaW4gcHJvcGVydGllcyB3aGVyZSBhdmFpbGFibGUuXG4gICAgICAgIGlmIChqUXVlcnkuZnguc3RlcFt0d2Vlbi5wcm9wXSkge1xuICAgICAgICAgIGpRdWVyeS5meC5zdGVwW3R3ZWVuLnByb3BdKHR3ZWVuKTtcbiAgICAgICAgfSBlbHNlIGlmICh0d2Vlbi5lbGVtLm5vZGVUeXBlID09PSAxICYmIChqUXVlcnkuY3NzSG9va3NbdHdlZW4ucHJvcF0gfHwgdHdlZW4uZWxlbS5zdHlsZVtmaW5hbFByb3BOYW1lKHR3ZWVuLnByb3ApXSAhPSBudWxsKSkge1xuICAgICAgICAgIGpRdWVyeS5zdHlsZSh0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCB0d2Vlbi5ub3cgKyB0d2Vlbi51bml0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0d2Vlbi5lbGVtW3R3ZWVuLnByb3BdID0gdHdlZW4ubm93O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9OyAvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuICAvLyBQYW5pYyBiYXNlZCBhcHByb2FjaCB0byBzZXR0aW5nIHRoaW5ncyBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcblxuICBUd2Vlbi5wcm9wSG9va3Muc2Nyb2xsVG9wID0gVHdlZW4ucHJvcEhvb2tzLnNjcm9sbExlZnQgPSB7XG4gICAgc2V0OiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgIGlmICh0d2Vlbi5lbGVtLm5vZGVUeXBlICYmIHR3ZWVuLmVsZW0ucGFyZW50Tm9kZSkge1xuICAgICAgICB0d2Vlbi5lbGVtW3R3ZWVuLnByb3BdID0gdHdlZW4ubm93O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgalF1ZXJ5LmVhc2luZyA9IHtcbiAgICBsaW5lYXI6IGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcDtcbiAgICB9LFxuICAgIHN3aW5nOiBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIDAuNSAtIE1hdGguY29zKHAgKiBNYXRoLlBJKSAvIDI7XG4gICAgfSxcbiAgICBfZGVmYXVsdDogXCJzd2luZ1wiXG4gIH07XG4gIGpRdWVyeS5meCA9IFR3ZWVuLnByb3RvdHlwZS5pbml0OyAvLyBCYWNrIGNvbXBhdCA8MS44IGV4dGVuc2lvbiBwb2ludFxuXG4gIGpRdWVyeS5meC5zdGVwID0ge307XG4gIHZhciBmeE5vdyxcbiAgICAgIGluUHJvZ3Jlc3MsXG4gICAgICByZnh0eXBlcyA9IC9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxcbiAgICAgIHJydW4gPSAvcXVldWVIb29rcyQvO1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlKCkge1xuICAgIGlmIChpblByb2dyZXNzKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuID09PSBmYWxzZSAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2NoZWR1bGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoc2NoZWR1bGUsIGpRdWVyeS5meC5pbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIGpRdWVyeS5meC50aWNrKCk7XG4gICAgfVxuICB9IC8vIEFuaW1hdGlvbnMgY3JlYXRlZCBzeW5jaHJvbm91c2x5IHdpbGwgcnVuIHN5bmNocm9ub3VzbHlcblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUZ4Tm93KCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ4Tm93ID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIHJldHVybiBmeE5vdyA9IERhdGUubm93KCk7XG4gIH0gLy8gR2VuZXJhdGUgcGFyYW1ldGVycyB0byBjcmVhdGUgYSBzdGFuZGFyZCBhbmltYXRpb25cblxuXG4gIGZ1bmN0aW9uIGdlbkZ4KHR5cGUsIGluY2x1ZGVXaWR0aCkge1xuICAgIHZhciB3aGljaCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGF0dHJzID0ge1xuICAgICAgaGVpZ2h0OiB0eXBlXG4gICAgfTsgLy8gSWYgd2UgaW5jbHVkZSB3aWR0aCwgc3RlcCB2YWx1ZSBpcyAxIHRvIGRvIGFsbCBjc3NFeHBhbmQgdmFsdWVzLFxuICAgIC8vIG90aGVyd2lzZSBzdGVwIHZhbHVlIGlzIDIgdG8gc2tpcCBvdmVyIExlZnQgYW5kIFJpZ2h0XG5cbiAgICBpbmNsdWRlV2lkdGggPSBpbmNsdWRlV2lkdGggPyAxIDogMDtcblxuICAgIGZvciAoOyBpIDwgNDsgaSArPSAyIC0gaW5jbHVkZVdpZHRoKSB7XG4gICAgICB3aGljaCA9IGNzc0V4cGFuZFtpXTtcbiAgICAgIGF0dHJzW1wibWFyZ2luXCIgKyB3aGljaF0gPSBhdHRyc1tcInBhZGRpbmdcIiArIHdoaWNoXSA9IHR5cGU7XG4gICAgfVxuXG4gICAgaWYgKGluY2x1ZGVXaWR0aCkge1xuICAgICAgYXR0cnMub3BhY2l0eSA9IGF0dHJzLndpZHRoID0gdHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUd2Vlbih2YWx1ZSwgcHJvcCwgYW5pbWF0aW9uKSB7XG4gICAgdmFyIHR3ZWVuLFxuICAgICAgICBjb2xsZWN0aW9uID0gKEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXSB8fCBbXSkuY29uY2F0KEFuaW1hdGlvbi50d2VlbmVyc1tcIipcIl0pLFxuICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXG4gICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAodHdlZW4gPSBjb2xsZWN0aW9uW2luZGV4XS5jYWxsKGFuaW1hdGlvbiwgcHJvcCwgdmFsdWUpKSB7XG4gICAgICAgIC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHByb3BlcnR5XG4gICAgICAgIHJldHVybiB0d2VlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0UHJlZmlsdGVyKGVsZW0sIHByb3BzLCBvcHRzKSB7XG4gICAgdmFyIHByb3AsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB0b2dnbGUsXG4gICAgICAgIGhvb2tzLFxuICAgICAgICBvbGRmaXJlLFxuICAgICAgICBwcm9wVHdlZW4sXG4gICAgICAgIHJlc3RvcmVEaXNwbGF5LFxuICAgICAgICBkaXNwbGF5LFxuICAgICAgICBpc0JveCA9IFwid2lkdGhcIiBpbiBwcm9wcyB8fCBcImhlaWdodFwiIGluIHByb3BzLFxuICAgICAgICBhbmltID0gdGhpcyxcbiAgICAgICAgb3JpZyA9IHt9LFxuICAgICAgICBzdHlsZSA9IGVsZW0uc3R5bGUsXG4gICAgICAgIGhpZGRlbiA9IGVsZW0ubm9kZVR5cGUgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKGVsZW0pLFxuICAgICAgICBkYXRhU2hvdyA9IGRhdGFQcml2LmdldChlbGVtLCBcImZ4c2hvd1wiKTsgLy8gUXVldWUtc2tpcHBpbmcgYW5pbWF0aW9ucyBoaWphY2sgdGhlIGZ4IGhvb2tzXG5cbiAgICBpZiAoIW9wdHMucXVldWUpIHtcbiAgICAgIGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKGVsZW0sIFwiZnhcIik7XG5cbiAgICAgIGlmIChob29rcy51bnF1ZXVlZCA9PSBudWxsKSB7XG4gICAgICAgIGhvb2tzLnVucXVldWVkID0gMDtcbiAgICAgICAgb2xkZmlyZSA9IGhvb2tzLmVtcHR5LmZpcmU7XG5cbiAgICAgICAgaG9va3MuZW1wdHkuZmlyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhvb2tzLnVucXVldWVkKSB7XG4gICAgICAgICAgICBvbGRmaXJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBob29rcy51bnF1ZXVlZCsrO1xuICAgICAgYW5pbS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBFbnN1cmUgdGhlIGNvbXBsZXRlIGhhbmRsZXIgaXMgY2FsbGVkIGJlZm9yZSB0aGlzIGNvbXBsZXRlc1xuICAgICAgICBhbmltLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaG9va3MudW5xdWV1ZWQtLTtcblxuICAgICAgICAgIGlmICghalF1ZXJ5LnF1ZXVlKGVsZW0sIFwiZnhcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICBob29rcy5lbXB0eS5maXJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gLy8gRGV0ZWN0IHNob3cvaGlkZSBhbmltYXRpb25zXG5cblxuICAgIGZvciAocHJvcCBpbiBwcm9wcykge1xuICAgICAgdmFsdWUgPSBwcm9wc1twcm9wXTtcblxuICAgICAgaWYgKHJmeHR5cGVzLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIGRlbGV0ZSBwcm9wc1twcm9wXTtcbiAgICAgICAgdG9nZ2xlID0gdG9nZ2xlIHx8IHZhbHVlID09PSBcInRvZ2dsZVwiO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gKGhpZGRlbiA/IFwiaGlkZVwiIDogXCJzaG93XCIpKSB7XG4gICAgICAgICAgLy8gUHJldGVuZCB0byBiZSBoaWRkZW4gaWYgdGhpcyBpcyBhIFwic2hvd1wiIGFuZFxuICAgICAgICAgIC8vIHRoZXJlIGlzIHN0aWxsIGRhdGEgZnJvbSBhIHN0b3BwZWQgc2hvdy9oaWRlXG4gICAgICAgICAgaWYgKHZhbHVlID09PSBcInNob3dcIiAmJiBkYXRhU2hvdyAmJiBkYXRhU2hvd1twcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoaWRkZW4gPSB0cnVlOyAvLyBJZ25vcmUgYWxsIG90aGVyIG5vLW9wIHNob3cvaGlkZSBkYXRhXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdbcHJvcF0gPSBkYXRhU2hvdyAmJiBkYXRhU2hvd1twcm9wXSB8fCBqUXVlcnkuc3R5bGUoZWxlbSwgcHJvcCk7XG4gICAgICB9XG4gICAgfSAvLyBCYWlsIG91dCBpZiB0aGlzIGlzIGEgbm8tb3AgbGlrZSAuaGlkZSgpLmhpZGUoKVxuXG5cbiAgICBwcm9wVHdlZW4gPSAhalF1ZXJ5LmlzRW1wdHlPYmplY3QocHJvcHMpO1xuXG4gICAgaWYgKCFwcm9wVHdlZW4gJiYgalF1ZXJ5LmlzRW1wdHlPYmplY3Qob3JpZykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFJlc3RyaWN0IFwib3ZlcmZsb3dcIiBhbmQgXCJkaXNwbGF5XCIgc3R5bGVzIGR1cmluZyBib3ggYW5pbWF0aW9uc1xuXG5cbiAgICBpZiAoaXNCb3ggJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgLy8gU3VwcG9ydDogSUUgPD05IC0gMTEsIEVkZ2UgMTIgLSAxNVxuICAgICAgLy8gUmVjb3JkIGFsbCAzIG92ZXJmbG93IGF0dHJpYnV0ZXMgYmVjYXVzZSBJRSBkb2VzIG5vdCBpbmZlciB0aGUgc2hvcnRoYW5kXG4gICAgICAvLyBmcm9tIGlkZW50aWNhbGx5LXZhbHVlZCBvdmVyZmxvd1ggYW5kIG92ZXJmbG93WSBhbmQgRWRnZSBqdXN0IG1pcnJvcnNcbiAgICAgIC8vIHRoZSBvdmVyZmxvd1ggdmFsdWUgdGhlcmUuXG4gICAgICBvcHRzLm92ZXJmbG93ID0gW3N0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WV07IC8vIElkZW50aWZ5IGEgZGlzcGxheSB0eXBlLCBwcmVmZXJyaW5nIG9sZCBzaG93L2hpZGUgZGF0YSBvdmVyIHRoZSBDU1MgY2FzY2FkZVxuXG4gICAgICByZXN0b3JlRGlzcGxheSA9IGRhdGFTaG93ICYmIGRhdGFTaG93LmRpc3BsYXk7XG5cbiAgICAgIGlmIChyZXN0b3JlRGlzcGxheSA9PSBudWxsKSB7XG4gICAgICAgIHJlc3RvcmVEaXNwbGF5ID0gZGF0YVByaXYuZ2V0KGVsZW0sIFwiZGlzcGxheVwiKTtcbiAgICAgIH1cblxuICAgICAgZGlzcGxheSA9IGpRdWVyeS5jc3MoZWxlbSwgXCJkaXNwbGF5XCIpO1xuXG4gICAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgaWYgKHJlc3RvcmVEaXNwbGF5KSB7XG4gICAgICAgICAgZGlzcGxheSA9IHJlc3RvcmVEaXNwbGF5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEdldCBub25lbXB0eSB2YWx1ZShzKSBieSB0ZW1wb3JhcmlseSBmb3JjaW5nIHZpc2liaWxpdHlcbiAgICAgICAgICBzaG93SGlkZShbZWxlbV0sIHRydWUpO1xuICAgICAgICAgIHJlc3RvcmVEaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5IHx8IHJlc3RvcmVEaXNwbGF5O1xuICAgICAgICAgIGRpc3BsYXkgPSBqUXVlcnkuY3NzKGVsZW0sIFwiZGlzcGxheVwiKTtcbiAgICAgICAgICBzaG93SGlkZShbZWxlbV0pO1xuICAgICAgICB9XG4gICAgICB9IC8vIEFuaW1hdGUgaW5saW5lIGVsZW1lbnRzIGFzIGlubGluZS1ibG9ja1xuXG5cbiAgICAgIGlmIChkaXNwbGF5ID09PSBcImlubGluZVwiIHx8IGRpc3BsYXkgPT09IFwiaW5saW5lLWJsb2NrXCIgJiYgcmVzdG9yZURpc3BsYXkgIT0gbnVsbCkge1xuICAgICAgICBpZiAoalF1ZXJ5LmNzcyhlbGVtLCBcImZsb2F0XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGRpc3BsYXkgdmFsdWUgYXQgdGhlIGVuZCBvZiBwdXJlIHNob3cvaGlkZSBhbmltYXRpb25zXG4gICAgICAgICAgaWYgKCFwcm9wVHdlZW4pIHtcbiAgICAgICAgICAgIGFuaW0uZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzdG9yZURpc3BsYXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICBkaXNwbGF5ID0gc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgICAgcmVzdG9yZURpc3BsYXkgPSBkaXNwbGF5ID09PSBcIm5vbmVcIiA/IFwiXCIgOiBkaXNwbGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdHMub3ZlcmZsb3cpIHtcbiAgICAgIHN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgIGFuaW0uYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3R5bGUub3ZlcmZsb3cgPSBvcHRzLm92ZXJmbG93WzBdO1xuICAgICAgICBzdHlsZS5vdmVyZmxvd1ggPSBvcHRzLm92ZXJmbG93WzFdO1xuICAgICAgICBzdHlsZS5vdmVyZmxvd1kgPSBvcHRzLm92ZXJmbG93WzJdO1xuICAgICAgfSk7XG4gICAgfSAvLyBJbXBsZW1lbnQgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblxuXG4gICAgcHJvcFR3ZWVuID0gZmFsc2U7XG5cbiAgICBmb3IgKHByb3AgaW4gb3JpZykge1xuICAgICAgLy8gR2VuZXJhbCBzaG93L2hpZGUgc2V0dXAgZm9yIHRoaXMgZWxlbWVudCBhbmltYXRpb25cbiAgICAgIGlmICghcHJvcFR3ZWVuKSB7XG4gICAgICAgIGlmIChkYXRhU2hvdykge1xuICAgICAgICAgIGlmIChcImhpZGRlblwiIGluIGRhdGFTaG93KSB7XG4gICAgICAgICAgICBoaWRkZW4gPSBkYXRhU2hvdy5oaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGFTaG93ID0gZGF0YVByaXYuYWNjZXNzKGVsZW0sIFwiZnhzaG93XCIsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHJlc3RvcmVEaXNwbGF5XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gLy8gU3RvcmUgaGlkZGVuL3Zpc2libGUgZm9yIHRvZ2dsZSBzbyBgLnN0b3AoKS50b2dnbGUoKWAgXCJyZXZlcnNlc1wiXG5cblxuICAgICAgICBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgZGF0YVNob3cuaGlkZGVuID0gIWhpZGRlbjtcbiAgICAgICAgfSAvLyBTaG93IGVsZW1lbnRzIGJlZm9yZSBhbmltYXRpbmcgdGhlbVxuXG5cbiAgICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICAgIHNob3dIaWRlKFtlbGVtXSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cblxuICAgICAgICBhbmltLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG4gICAgICAgICAgLy8gVGhlIGZpbmFsIHN0ZXAgb2YgYSBcImhpZGVcIiBhbmltYXRpb24gaXMgYWN0dWFsbHkgaGlkaW5nIHRoZSBlbGVtZW50XG4gICAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICAgIHNob3dIaWRlKFtlbGVtXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVByaXYucmVtb3ZlKGVsZW0sIFwiZnhzaG93XCIpO1xuXG4gICAgICAgICAgZm9yIChwcm9wIGluIG9yaWcpIHtcbiAgICAgICAgICAgIGpRdWVyeS5zdHlsZShlbGVtLCBwcm9wLCBvcmlnW3Byb3BdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBQZXItcHJvcGVydHkgc2V0dXBcblxuXG4gICAgICBwcm9wVHdlZW4gPSBjcmVhdGVUd2VlbihoaWRkZW4gPyBkYXRhU2hvd1twcm9wXSA6IDAsIHByb3AsIGFuaW0pO1xuXG4gICAgICBpZiAoIShwcm9wIGluIGRhdGFTaG93KSkge1xuICAgICAgICBkYXRhU2hvd1twcm9wXSA9IHByb3BUd2Vlbi5zdGFydDtcblxuICAgICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgICAgcHJvcFR3ZWVuLmVuZCA9IHByb3BUd2Vlbi5zdGFydDtcbiAgICAgICAgICBwcm9wVHdlZW4uc3RhcnQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvcEZpbHRlcihwcm9wcywgc3BlY2lhbEVhc2luZykge1xuICAgIHZhciBpbmRleCwgbmFtZSwgZWFzaW5nLCB2YWx1ZSwgaG9va3M7IC8vIGNhbWVsQ2FzZSwgc3BlY2lhbEVhc2luZyBhbmQgZXhwYW5kIGNzc0hvb2sgcGFzc1xuXG4gICAgZm9yIChpbmRleCBpbiBwcm9wcykge1xuICAgICAgbmFtZSA9IGNhbWVsQ2FzZShpbmRleCk7XG4gICAgICBlYXNpbmcgPSBzcGVjaWFsRWFzaW5nW25hbWVdO1xuICAgICAgdmFsdWUgPSBwcm9wc1tpbmRleF07XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBlYXNpbmcgPSB2YWx1ZVsxXTtcbiAgICAgICAgdmFsdWUgPSBwcm9wc1tpbmRleF0gPSB2YWx1ZVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ICE9PSBuYW1lKSB7XG4gICAgICAgIHByb3BzW25hbWVdID0gdmFsdWU7XG4gICAgICAgIGRlbGV0ZSBwcm9wc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzW25hbWVdO1xuXG4gICAgICBpZiAoaG9va3MgJiYgXCJleHBhbmRcIiBpbiBob29rcykge1xuICAgICAgICB2YWx1ZSA9IGhvb2tzLmV4cGFuZCh2YWx1ZSk7XG4gICAgICAgIGRlbGV0ZSBwcm9wc1tuYW1lXTsgLy8gTm90IHF1aXRlICQuZXh0ZW5kLCB0aGlzIHdvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBrZXlzLlxuICAgICAgICAvLyBSZXVzaW5nICdpbmRleCcgYmVjYXVzZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IFwibmFtZVwiXG5cbiAgICAgICAgZm9yIChpbmRleCBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmICghKGluZGV4IGluIHByb3BzKSkge1xuICAgICAgICAgICAgcHJvcHNbaW5kZXhdID0gdmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgc3BlY2lhbEVhc2luZ1tpbmRleF0gPSBlYXNpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGVjaWFsRWFzaW5nW25hbWVdID0gZWFzaW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEFuaW1hdGlvbihlbGVtLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCxcbiAgICAgICAgc3RvcHBlZCxcbiAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICBsZW5ndGggPSBBbmltYXRpb24ucHJlZmlsdGVycy5sZW5ndGgsXG4gICAgICAgIGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIERvbid0IG1hdGNoIGVsZW0gaW4gdGhlIDphbmltYXRlZCBzZWxlY3RvclxuICAgICAgZGVsZXRlIHRpY2suZWxlbTtcbiAgICB9KSxcbiAgICAgICAgdGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzdG9wcGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcbiAgICAgICAgICByZW1haW5pbmcgPSBNYXRoLm1heCgwLCBhbmltYXRpb24uc3RhcnRUaW1lICsgYW5pbWF0aW9uLmR1cmF0aW9uIC0gY3VycmVudFRpbWUpLFxuICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zIG9ubHlcbiAgICAgIC8vIEFyY2hhaWMgY3Jhc2ggYnVnIHdvbid0IGFsbG93IHVzIHRvIHVzZSBgMSAtICggMC41IHx8IDAgKWAgKCMxMjQ5NylcbiAgICAgIHRlbXAgPSByZW1haW5pbmcgLyBhbmltYXRpb24uZHVyYXRpb24gfHwgMCxcbiAgICAgICAgICBwZXJjZW50ID0gMSAtIHRlbXAsXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIGxlbmd0aCA9IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoO1xuXG4gICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgYW5pbWF0aW9uLnR3ZWVuc1tpbmRleF0ucnVuKHBlcmNlbnQpO1xuICAgICAgfVxuXG4gICAgICBkZWZlcnJlZC5ub3RpZnlXaXRoKGVsZW0sIFthbmltYXRpb24sIHBlcmNlbnQsIHJlbWFpbmluZ10pOyAvLyBJZiB0aGVyZSdzIG1vcmUgdG8gZG8sIHlpZWxkXG5cbiAgICAgIGlmIChwZXJjZW50IDwgMSAmJiBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICAgIH0gLy8gSWYgdGhpcyB3YXMgYW4gZW1wdHkgYW5pbWF0aW9uLCBzeW50aGVzaXplIGEgZmluYWwgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9uXG5cblxuICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgZGVmZXJyZWQubm90aWZ5V2l0aChlbGVtLCBbYW5pbWF0aW9uLCAxLCAwXSk7XG4gICAgICB9IC8vIFJlc29sdmUgdGhlIGFuaW1hdGlvbiBhbmQgcmVwb3J0IGl0cyBjb25jbHVzaW9uXG5cblxuICAgICAgZGVmZXJyZWQucmVzb2x2ZVdpdGgoZWxlbSwgW2FuaW1hdGlvbl0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgICAgIGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2Uoe1xuICAgICAgZWxlbTogZWxlbSxcbiAgICAgIHByb3BzOiBqUXVlcnkuZXh0ZW5kKHt9LCBwcm9wZXJ0aWVzKSxcbiAgICAgIG9wdHM6IGpRdWVyeS5leHRlbmQodHJ1ZSwge1xuICAgICAgICBzcGVjaWFsRWFzaW5nOiB7fSxcbiAgICAgICAgZWFzaW5nOiBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0XG4gICAgICB9LCBvcHRpb25zKSxcbiAgICAgIG9yaWdpbmFsUHJvcGVydGllczogcHJvcGVydGllcyxcbiAgICAgIG9yaWdpbmFsT3B0aW9uczogb3B0aW9ucyxcbiAgICAgIHN0YXJ0VGltZTogZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcbiAgICAgIGR1cmF0aW9uOiBvcHRpb25zLmR1cmF0aW9uLFxuICAgICAgdHdlZW5zOiBbXSxcbiAgICAgIGNyZWF0ZVR3ZWVuOiBmdW5jdGlvbiAocHJvcCwgZW5kKSB7XG4gICAgICAgIHZhciB0d2VlbiA9IGpRdWVyeS5Ud2VlbihlbGVtLCBhbmltYXRpb24ub3B0cywgcHJvcCwgZW5kLCBhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nW3Byb3BdIHx8IGFuaW1hdGlvbi5vcHRzLmVhc2luZyk7XG4gICAgICAgIGFuaW1hdGlvbi50d2VlbnMucHVzaCh0d2Vlbik7XG4gICAgICAgIHJldHVybiB0d2VlbjtcbiAgICAgIH0sXG4gICAgICBzdG9wOiBmdW5jdGlvbiAoZ290b0VuZCkge1xuICAgICAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGdvaW5nIHRvIHRoZSBlbmQsIHdlIHdhbnQgdG8gcnVuIGFsbCB0aGUgdHdlZW5zXG4gICAgICAgIC8vIG90aGVyd2lzZSB3ZSBza2lwIHRoaXMgcGFydFxuICAgICAgICBsZW5ndGggPSBnb3RvRW5kID8gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGggOiAwO1xuXG4gICAgICAgIGlmIChzdG9wcGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBhbmltYXRpb24udHdlZW5zW2luZGV4XS5ydW4oMSk7XG4gICAgICAgIH0gLy8gUmVzb2x2ZSB3aGVuIHdlIHBsYXllZCB0aGUgbGFzdCBmcmFtZTsgb3RoZXJ3aXNlLCByZWplY3RcblxuXG4gICAgICAgIGlmIChnb3RvRW5kKSB7XG4gICAgICAgICAgZGVmZXJyZWQubm90aWZ5V2l0aChlbGVtLCBbYW5pbWF0aW9uLCAxLCAwXSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZVdpdGgoZWxlbSwgW2FuaW1hdGlvbiwgZ290b0VuZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdFdpdGgoZWxlbSwgW2FuaW1hdGlvbiwgZ290b0VuZF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfSksXG4gICAgICAgIHByb3BzID0gYW5pbWF0aW9uLnByb3BzO1xuXG4gICAgcHJvcEZpbHRlcihwcm9wcywgYW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZyk7XG5cbiAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJlc3VsdCA9IEFuaW1hdGlvbi5wcmVmaWx0ZXJzW2luZGV4XS5jYWxsKGFuaW1hdGlvbiwgZWxlbSwgcHJvcHMsIGFuaW1hdGlvbi5vcHRzKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihyZXN1bHQuc3RvcCkpIHtcbiAgICAgICAgICBqUXVlcnkuX3F1ZXVlSG9va3MoYW5pbWF0aW9uLmVsZW0sIGFuaW1hdGlvbi5vcHRzLnF1ZXVlKS5zdG9wID0gcmVzdWx0LnN0b3AuYmluZChyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBqUXVlcnkubWFwKHByb3BzLCBjcmVhdGVUd2VlbiwgYW5pbWF0aW9uKTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGFuaW1hdGlvbi5vcHRzLnN0YXJ0KSkge1xuICAgICAgYW5pbWF0aW9uLm9wdHMuc3RhcnQuY2FsbChlbGVtLCBhbmltYXRpb24pO1xuICAgIH0gLy8gQXR0YWNoIGNhbGxiYWNrcyBmcm9tIG9wdGlvbnNcblxuXG4gICAgYW5pbWF0aW9uLnByb2dyZXNzKGFuaW1hdGlvbi5vcHRzLnByb2dyZXNzKS5kb25lKGFuaW1hdGlvbi5vcHRzLmRvbmUsIGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlKS5mYWlsKGFuaW1hdGlvbi5vcHRzLmZhaWwpLmFsd2F5cyhhbmltYXRpb24ub3B0cy5hbHdheXMpO1xuICAgIGpRdWVyeS5meC50aW1lcihqUXVlcnkuZXh0ZW5kKHRpY2ssIHtcbiAgICAgIGVsZW06IGVsZW0sXG4gICAgICBhbmltOiBhbmltYXRpb24sXG4gICAgICBxdWV1ZTogYW5pbWF0aW9uLm9wdHMucXVldWVcbiAgICB9KSk7XG4gICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgfVxuXG4gIGpRdWVyeS5BbmltYXRpb24gPSBqUXVlcnkuZXh0ZW5kKEFuaW1hdGlvbiwge1xuICAgIHR3ZWVuZXJzOiB7XG4gICAgICBcIipcIjogW2Z1bmN0aW9uIChwcm9wLCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHdlZW4gPSB0aGlzLmNyZWF0ZVR3ZWVuKHByb3AsIHZhbHVlKTtcbiAgICAgICAgYWRqdXN0Q1NTKHR3ZWVuLmVsZW0sIHByb3AsIHJjc3NOdW0uZXhlYyh2YWx1ZSksIHR3ZWVuKTtcbiAgICAgICAgcmV0dXJuIHR3ZWVuO1xuICAgICAgfV1cbiAgICB9LFxuICAgIHR3ZWVuZXI6IGZ1bmN0aW9uIChwcm9wcywgY2FsbGJhY2spIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHByb3BzKSkge1xuICAgICAgICBjYWxsYmFjayA9IHByb3BzO1xuICAgICAgICBwcm9wcyA9IFtcIipcIl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcyA9IHByb3BzLm1hdGNoKHJub3RodG1sd2hpdGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcCxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgcHJvcCA9IHByb3BzW2luZGV4XTtcbiAgICAgICAgQW5pbWF0aW9uLnR3ZWVuZXJzW3Byb3BdID0gQW5pbWF0aW9uLnR3ZWVuZXJzW3Byb3BdIHx8IFtdO1xuICAgICAgICBBbmltYXRpb24udHdlZW5lcnNbcHJvcF0udW5zaGlmdChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcbiAgICBwcmVmaWx0ZXJzOiBbZGVmYXVsdFByZWZpbHRlcl0sXG4gICAgcHJlZmlsdGVyOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHByZXBlbmQpIHtcbiAgICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICAgIEFuaW1hdGlvbi5wcmVmaWx0ZXJzLnVuc2hpZnQoY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQW5pbWF0aW9uLnByZWZpbHRlcnMucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBqUXVlcnkuc3BlZWQgPSBmdW5jdGlvbiAoc3BlZWQsIGVhc2luZywgZm4pIHtcbiAgICB2YXIgb3B0ID0gc3BlZWQgJiYgdHlwZW9mIHNwZWVkID09PSBcIm9iamVjdFwiID8galF1ZXJ5LmV4dGVuZCh7fSwgc3BlZWQpIDoge1xuICAgICAgY29tcGxldGU6IGZuIHx8ICFmbiAmJiBlYXNpbmcgfHwgaXNGdW5jdGlvbihzcGVlZCkgJiYgc3BlZWQsXG4gICAgICBkdXJhdGlvbjogc3BlZWQsXG4gICAgICBlYXNpbmc6IGZuICYmIGVhc2luZyB8fCBlYXNpbmcgJiYgIWlzRnVuY3Rpb24oZWFzaW5nKSAmJiBlYXNpbmdcbiAgICB9OyAvLyBHbyB0byB0aGUgZW5kIHN0YXRlIGlmIGZ4IGFyZSBvZmZcblxuICAgIGlmIChqUXVlcnkuZngub2ZmKSB7XG4gICAgICBvcHQuZHVyYXRpb24gPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIG9wdC5kdXJhdGlvbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBpZiAob3B0LmR1cmF0aW9uIGluIGpRdWVyeS5meC5zcGVlZHMpIHtcbiAgICAgICAgICBvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzW29wdC5kdXJhdGlvbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkcy5fZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gTm9ybWFsaXplIG9wdC5xdWV1ZSAtIHRydWUvdW5kZWZpbmVkL251bGwgLT4gXCJmeFwiXG5cblxuICAgIGlmIChvcHQucXVldWUgPT0gbnVsbCB8fCBvcHQucXVldWUgPT09IHRydWUpIHtcbiAgICAgIG9wdC5xdWV1ZSA9IFwiZnhcIjtcbiAgICB9IC8vIFF1ZXVlaW5nXG5cblxuICAgIG9wdC5vbGQgPSBvcHQuY29tcGxldGU7XG5cbiAgICBvcHQuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHQub2xkKSkge1xuICAgICAgICBvcHQub2xkLmNhbGwodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHQucXVldWUpIHtcbiAgICAgICAgalF1ZXJ5LmRlcXVldWUodGhpcywgb3B0LnF1ZXVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG9wdDtcbiAgfTtcblxuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICBmYWRlVG86IGZ1bmN0aW9uIChzcGVlZCwgdG8sIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgIC8vIFNob3cgYW55IGhpZGRlbiBlbGVtZW50cyBhZnRlciBzZXR0aW5nIG9wYWNpdHkgdG8gMFxuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKGlzSGlkZGVuV2l0aGluVHJlZSkuY3NzKFwib3BhY2l0eVwiLCAwKS5zaG93KCkgLy8gQW5pbWF0ZSB0byB0aGUgdmFsdWUgc3BlY2lmaWVkXG4gICAgICAuZW5kKCkuYW5pbWF0ZSh7XG4gICAgICAgIG9wYWNpdHk6IHRvXG4gICAgICB9LCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICBhbmltYXRlOiBmdW5jdGlvbiAocHJvcCwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgIHZhciBlbXB0eSA9IGpRdWVyeS5pc0VtcHR5T2JqZWN0KHByb3ApLFxuICAgICAgICAgIG9wdGFsbCA9IGpRdWVyeS5zcGVlZChzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayksXG4gICAgICAgICAgZG9BbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE9wZXJhdGUgb24gYSBjb3B5IG9mIHByb3Agc28gcGVyLXByb3BlcnR5IGVhc2luZyB3b24ndCBiZSBsb3N0XG4gICAgICAgIHZhciBhbmltID0gQW5pbWF0aW9uKHRoaXMsIGpRdWVyeS5leHRlbmQoe30sIHByb3ApLCBvcHRhbGwpOyAvLyBFbXB0eSBhbmltYXRpb25zLCBvciBmaW5pc2hpbmcgcmVzb2x2ZXMgaW1tZWRpYXRlbHlcblxuICAgICAgICBpZiAoZW1wdHkgfHwgZGF0YVByaXYuZ2V0KHRoaXMsIFwiZmluaXNoXCIpKSB7XG4gICAgICAgICAgYW5pbS5zdG9wKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkb0FuaW1hdGlvbi5maW5pc2ggPSBkb0FuaW1hdGlvbjtcbiAgICAgIHJldHVybiBlbXB0eSB8fCBvcHRhbGwucXVldWUgPT09IGZhbHNlID8gdGhpcy5lYWNoKGRvQW5pbWF0aW9uKSA6IHRoaXMucXVldWUob3B0YWxsLnF1ZXVlLCBkb0FuaW1hdGlvbik7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiAodHlwZSwgY2xlYXJRdWV1ZSwgZ290b0VuZCkge1xuICAgICAgdmFyIHN0b3BRdWV1ZSA9IGZ1bmN0aW9uIChob29rcykge1xuICAgICAgICB2YXIgc3RvcCA9IGhvb2tzLnN0b3A7XG4gICAgICAgIGRlbGV0ZSBob29rcy5zdG9wO1xuICAgICAgICBzdG9wKGdvdG9FbmQpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGdvdG9FbmQgPSBjbGVhclF1ZXVlO1xuICAgICAgICBjbGVhclF1ZXVlID0gdHlwZTtcbiAgICAgICAgdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsZWFyUXVldWUgJiYgdHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5xdWV1ZSh0eXBlIHx8IFwiZnhcIiwgW10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlcXVldWUgPSB0cnVlLFxuICAgICAgICAgICAgaW5kZXggPSB0eXBlICE9IG51bGwgJiYgdHlwZSArIFwicXVldWVIb29rc1wiLFxuICAgICAgICAgICAgdGltZXJzID0galF1ZXJ5LnRpbWVycyxcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhUHJpdi5nZXQodGhpcyk7XG5cbiAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgaWYgKGRhdGFbaW5kZXhdICYmIGRhdGFbaW5kZXhdLnN0b3ApIHtcbiAgICAgICAgICAgIHN0b3BRdWV1ZShkYXRhW2luZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoaW5kZXggaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaW5kZXhdICYmIGRhdGFbaW5kZXhdLnN0b3AgJiYgcnJ1bi50ZXN0KGluZGV4KSkge1xuICAgICAgICAgICAgICBzdG9wUXVldWUoZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOykge1xuICAgICAgICAgIGlmICh0aW1lcnNbaW5kZXhdLmVsZW0gPT09IHRoaXMgJiYgKHR5cGUgPT0gbnVsbCB8fCB0aW1lcnNbaW5kZXhdLnF1ZXVlID09PSB0eXBlKSkge1xuICAgICAgICAgICAgdGltZXJzW2luZGV4XS5hbmltLnN0b3AoZ290b0VuZCk7XG4gICAgICAgICAgICBkZXF1ZXVlID0gZmFsc2U7XG4gICAgICAgICAgICB0aW1lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gU3RhcnQgdGhlIG5leHQgaW4gdGhlIHF1ZXVlIGlmIHRoZSBsYXN0IHN0ZXAgd2Fzbid0IGZvcmNlZC5cbiAgICAgICAgLy8gVGltZXJzIGN1cnJlbnRseSB3aWxsIGNhbGwgdGhlaXIgY29tcGxldGUgY2FsbGJhY2tzLCB3aGljaFxuICAgICAgICAvLyB3aWxsIGRlcXVldWUgYnV0IG9ubHkgaWYgdGhleSB3ZXJlIGdvdG9FbmQuXG5cblxuICAgICAgICBpZiAoZGVxdWV1ZSB8fCAhZ290b0VuZCkge1xuICAgICAgICAgIGpRdWVyeS5kZXF1ZXVlKHRoaXMsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIGlmICh0eXBlICE9PSBmYWxzZSkge1xuICAgICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXgsXG4gICAgICAgICAgICBkYXRhID0gZGF0YVByaXYuZ2V0KHRoaXMpLFxuICAgICAgICAgICAgcXVldWUgPSBkYXRhW3R5cGUgKyBcInF1ZXVlXCJdLFxuICAgICAgICAgICAgaG9va3MgPSBkYXRhW3R5cGUgKyBcInF1ZXVlSG9va3NcIl0sXG4gICAgICAgICAgICB0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuICAgICAgICAgICAgbGVuZ3RoID0gcXVldWUgPyBxdWV1ZS5sZW5ndGggOiAwOyAvLyBFbmFibGUgZmluaXNoaW5nIGZsYWcgb24gcHJpdmF0ZSBkYXRhXG5cbiAgICAgICAgZGF0YS5maW5pc2ggPSB0cnVlOyAvLyBFbXB0eSB0aGUgcXVldWUgZmlyc3RcblxuICAgICAgICBqUXVlcnkucXVldWUodGhpcywgdHlwZSwgW10pO1xuXG4gICAgICAgIGlmIChob29rcyAmJiBob29rcy5zdG9wKSB7XG4gICAgICAgICAgaG9va3Muc3RvcC5jYWxsKHRoaXMsIHRydWUpO1xuICAgICAgICB9IC8vIExvb2sgZm9yIGFueSBhY3RpdmUgYW5pbWF0aW9ucywgYW5kIGZpbmlzaCB0aGVtXG5cblxuICAgICAgICBmb3IgKGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTspIHtcbiAgICAgICAgICBpZiAodGltZXJzW2luZGV4XS5lbGVtID09PSB0aGlzICYmIHRpbWVyc1tpbmRleF0ucXVldWUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHRpbWVyc1tpbmRleF0uYW5pbS5zdG9wKHRydWUpO1xuICAgICAgICAgICAgdGltZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIExvb2sgZm9yIGFueSBhbmltYXRpb25zIGluIHRoZSBvbGQgcXVldWUgYW5kIGZpbmlzaCB0aGVtXG5cblxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAocXVldWVbaW5kZXhdICYmIHF1ZXVlW2luZGV4XS5maW5pc2gpIHtcbiAgICAgICAgICAgIHF1ZXVlW2luZGV4XS5maW5pc2guY2FsbCh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gVHVybiBvZmYgZmluaXNoaW5nIGZsYWdcblxuXG4gICAgICAgIGRlbGV0ZSBkYXRhLmZpbmlzaDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5lYWNoKFtcInRvZ2dsZVwiLCBcInNob3dcIiwgXCJoaWRlXCJdLCBmdW5jdGlvbiAoaSwgbmFtZSkge1xuICAgIHZhciBjc3NGbiA9IGpRdWVyeS5mbltuYW1lXTtcblxuICAgIGpRdWVyeS5mbltuYW1lXSA9IGZ1bmN0aW9uIChzcGVlZCwgZWFzaW5nLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHNwZWVkID09IG51bGwgfHwgdHlwZW9mIHNwZWVkID09PSBcImJvb2xlYW5cIiA/IGNzc0ZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiB0aGlzLmFuaW1hdGUoZ2VuRngobmFtZSwgdHJ1ZSksIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrKTtcbiAgICB9O1xuICB9KTsgLy8gR2VuZXJhdGUgc2hvcnRjdXRzIGZvciBjdXN0b20gYW5pbWF0aW9uc1xuXG4gIGpRdWVyeS5lYWNoKHtcbiAgICBzbGlkZURvd246IGdlbkZ4KFwic2hvd1wiKSxcbiAgICBzbGlkZVVwOiBnZW5GeChcImhpZGVcIiksXG4gICAgc2xpZGVUb2dnbGU6IGdlbkZ4KFwidG9nZ2xlXCIpLFxuICAgIGZhZGVJbjoge1xuICAgICAgb3BhY2l0eTogXCJzaG93XCJcbiAgICB9LFxuICAgIGZhZGVPdXQ6IHtcbiAgICAgIG9wYWNpdHk6IFwiaGlkZVwiXG4gICAgfSxcbiAgICBmYWRlVG9nZ2xlOiB7XG4gICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXG4gICAgfVxuICB9LCBmdW5jdGlvbiAobmFtZSwgcHJvcHMpIHtcbiAgICBqUXVlcnkuZm5bbmFtZV0gPSBmdW5jdGlvbiAoc3BlZWQsIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUocHJvcHMsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrKTtcbiAgICB9O1xuICB9KTtcbiAgalF1ZXJ5LnRpbWVycyA9IFtdO1xuXG4gIGpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aW1lcixcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHRpbWVycyA9IGpRdWVyeS50aW1lcnM7XG4gICAgZnhOb3cgPSBEYXRlLm5vdygpO1xuXG4gICAgZm9yICg7IGkgPCB0aW1lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRpbWVyID0gdGltZXJzW2ldOyAvLyBSdW4gdGhlIHRpbWVyIGFuZCBzYWZlbHkgcmVtb3ZlIGl0IHdoZW4gZG9uZSAoYWxsb3dpbmcgZm9yIGV4dGVybmFsIHJlbW92YWwpXG5cbiAgICAgIGlmICghdGltZXIoKSAmJiB0aW1lcnNbaV0gPT09IHRpbWVyKSB7XG4gICAgICAgIHRpbWVycy5zcGxpY2UoaS0tLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRpbWVycy5sZW5ndGgpIHtcbiAgICAgIGpRdWVyeS5meC5zdG9wKCk7XG4gICAgfVxuXG4gICAgZnhOb3cgPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgalF1ZXJ5LmZ4LnRpbWVyID0gZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgalF1ZXJ5LnRpbWVycy5wdXNoKHRpbWVyKTtcbiAgICBqUXVlcnkuZnguc3RhcnQoKTtcbiAgfTtcblxuICBqUXVlcnkuZnguaW50ZXJ2YWwgPSAxMztcblxuICBqUXVlcnkuZnguc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGluUHJvZ3Jlc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpblByb2dyZXNzID0gdHJ1ZTtcbiAgICBzY2hlZHVsZSgpO1xuICB9O1xuXG4gIGpRdWVyeS5meC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGluUHJvZ3Jlc3MgPSBudWxsO1xuICB9O1xuXG4gIGpRdWVyeS5meC5zcGVlZHMgPSB7XG4gICAgc2xvdzogNjAwLFxuICAgIGZhc3Q6IDIwMCxcbiAgICAvLyBEZWZhdWx0IHNwZWVkXG4gICAgX2RlZmF1bHQ6IDQwMFxuICB9OyAvLyBCYXNlZCBvZmYgb2YgdGhlIHBsdWdpbiBieSBDbGludCBIZWxmZXJzLCB3aXRoIHBlcm1pc3Npb24uXG4gIC8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDEwMDMyNDAxNDc0Ny9odHRwOi8vYmxpbmRzaWduYWxzLmNvbS9pbmRleC5waHAvMjAwOS8wNy9qcXVlcnktZGVsYXkvXG5cbiAgalF1ZXJ5LmZuLmRlbGF5ID0gZnVuY3Rpb24gKHRpbWUsIHR5cGUpIHtcbiAgICB0aW1lID0galF1ZXJ5LmZ4ID8galF1ZXJ5LmZ4LnNwZWVkc1t0aW1lXSB8fCB0aW1lIDogdGltZTtcbiAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG4gICAgcmV0dXJuIHRoaXMucXVldWUodHlwZSwgZnVuY3Rpb24gKG5leHQsIGhvb2tzKSB7XG4gICAgICB2YXIgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KG5leHQsIHRpbWUpO1xuXG4gICAgICBob29rcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgICAgICAgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcbiAgICAgICAgb3B0ID0gc2VsZWN0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO1xuICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7IC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjMgb25seVxuICAgIC8vIERlZmF1bHQgdmFsdWUgZm9yIGEgY2hlY2tib3ggc2hvdWxkIGJlIFwib25cIlxuXG4gICAgc3VwcG9ydC5jaGVja09uID0gaW5wdXQudmFsdWUgIT09IFwiXCI7IC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuICAgIC8vIE11c3QgYWNjZXNzIHNlbGVjdGVkSW5kZXggdG8gbWFrZSBkZWZhdWx0IG9wdGlvbnMgc2VsZWN0XG5cbiAgICBzdXBwb3J0Lm9wdFNlbGVjdGVkID0gb3B0LnNlbGVjdGVkOyAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbiAgICAvLyBBbiBpbnB1dCBsb3NlcyBpdHMgdmFsdWUgYWZ0ZXIgYmVjb21pbmcgYSByYWRpb1xuXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudmFsdWUgPSBcInRcIjtcbiAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgIHN1cHBvcnQucmFkaW9WYWx1ZSA9IGlucHV0LnZhbHVlID09PSBcInRcIjtcbiAgfSkoKTtcblxuICB2YXIgYm9vbEhvb2ssXG4gICAgICBhdHRySGFuZGxlID0galF1ZXJ5LmV4cHIuYXR0ckhhbmRsZTtcbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgYXR0cjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGpRdWVyeS5hdHRyLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEpO1xuICAgIH0sXG4gICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkucmVtb3ZlQXR0cih0aGlzLCBuYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5leHRlbmQoe1xuICAgIGF0dHI6IGZ1bmN0aW9uIChlbGVtLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIHJldCxcbiAgICAgICAgICBob29rcyxcbiAgICAgICAgICBuVHlwZSA9IGVsZW0ubm9kZVR5cGU7IC8vIERvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblxuICAgICAgaWYgKG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRmFsbGJhY2sgdG8gcHJvcCB3aGVuIGF0dHJpYnV0ZXMgYXJlIG5vdCBzdXBwb3J0ZWRcblxuXG4gICAgICBpZiAodHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkucHJvcChlbGVtLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9IC8vIEF0dHJpYnV0ZSBob29rcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgbG93ZXJjYXNlIHZlcnNpb25cbiAgICAgIC8vIEdyYWIgbmVjZXNzYXJ5IGhvb2sgaWYgb25lIGlzIGRlZmluZWRcblxuXG4gICAgICBpZiAoblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyhlbGVtKSkge1xuICAgICAgICBob29rcyA9IGpRdWVyeS5hdHRySG9va3NbbmFtZS50b0xvd2VyQ2FzZSgpXSB8fCAoalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC50ZXN0KG5hbWUpID8gYm9vbEhvb2sgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBqUXVlcnkucmVtb3ZlQXR0cihlbGVtLCBuYW1lKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3Muc2V0KGVsZW0sIHZhbHVlLCBuYW1lKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSArIFwiXCIpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoZWxlbSwgbmFtZSkpICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGpRdWVyeS5maW5kLmF0dHIoZWxlbSwgbmFtZSk7IC8vIE5vbi1leGlzdGVudCBhdHRyaWJ1dGVzIHJldHVybiBudWxsLCB3ZSBub3JtYWxpemUgdG8gdW5kZWZpbmVkXG5cbiAgICAgIHJldHVybiByZXQgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJldDtcbiAgICB9LFxuICAgIGF0dHJIb29rczoge1xuICAgICAgdHlwZToge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtLCB2YWx1ZSkge1xuICAgICAgICAgIGlmICghc3VwcG9ydC5yYWRpb1ZhbHVlICYmIHZhbHVlID09PSBcInJhZGlvXCIgJiYgbm9kZU5hbWUoZWxlbSwgXCJpbnB1dFwiKSkge1xuICAgICAgICAgICAgdmFyIHZhbCA9IGVsZW0udmFsdWU7XG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgIGVsZW0udmFsdWUgPSB2YWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIChlbGVtLCB2YWx1ZSkge1xuICAgICAgdmFyIG5hbWUsXG4gICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgLy8gQXR0cmlidXRlIG5hbWVzIGNhbiBjb250YWluIG5vbi1IVE1MIHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG4gICAgICBhdHRyTmFtZXMgPSB2YWx1ZSAmJiB2YWx1ZS5tYXRjaChybm90aHRtbHdoaXRlKTtcblxuICAgICAgaWYgKGF0dHJOYW1lcyAmJiBlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHdoaWxlIChuYW1lID0gYXR0ck5hbWVzW2krK10pIHtcbiAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIEhvb2tzIGZvciBib29sZWFuIGF0dHJpYnV0ZXNcblxuICBib29sSG9vayA9IHtcbiAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtLCB2YWx1ZSwgbmFtZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAvLyBSZW1vdmUgYm9vbGVhbiBhdHRyaWJ1dGVzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICAgIGpRdWVyeS5yZW1vdmVBdHRyKGVsZW0sIG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgfTtcbiAgalF1ZXJ5LmVhY2goalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksIGZ1bmN0aW9uIChpLCBuYW1lKSB7XG4gICAgdmFyIGdldHRlciA9IGF0dHJIYW5kbGVbbmFtZV0gfHwgalF1ZXJ5LmZpbmQuYXR0cjtcblxuICAgIGF0dHJIYW5kbGVbbmFtZV0gPSBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgaXNYTUwpIHtcbiAgICAgIHZhciByZXQsXG4gICAgICAgICAgaGFuZGxlLFxuICAgICAgICAgIGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmICghaXNYTUwpIHtcbiAgICAgICAgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcCBieSB0ZW1wb3JhcmlseSByZW1vdmluZyB0aGlzIGZ1bmN0aW9uIGZyb20gdGhlIGdldHRlclxuICAgICAgICBoYW5kbGUgPSBhdHRySGFuZGxlW2xvd2VyY2FzZU5hbWVdO1xuICAgICAgICBhdHRySGFuZGxlW2xvd2VyY2FzZU5hbWVdID0gcmV0O1xuICAgICAgICByZXQgPSBnZXR0ZXIoZWxlbSwgbmFtZSwgaXNYTUwpICE9IG51bGwgPyBsb3dlcmNhc2VOYW1lIDogbnVsbDtcbiAgICAgICAgYXR0ckhhbmRsZVtsb3dlcmNhc2VOYW1lXSA9IGhhbmRsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICB9KTtcbiAgdmFyIHJmb2N1c2FibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuICAgICAgcmNsaWNrYWJsZSA9IC9eKD86YXxhcmVhKSQvaTtcbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgcHJvcDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGpRdWVyeS5wcm9wLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEpO1xuICAgIH0sXG4gICAgcmVtb3ZlUHJvcDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWxldGUgdGhpc1tqUXVlcnkucHJvcEZpeFtuYW1lXSB8fCBuYW1lXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5leHRlbmQoe1xuICAgIHByb3A6IGZ1bmN0aW9uIChlbGVtLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIHJldCxcbiAgICAgICAgICBob29rcyxcbiAgICAgICAgICBuVHlwZSA9IGVsZW0ubm9kZVR5cGU7IC8vIERvbid0IGdldC9zZXQgcHJvcGVydGllcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblxuICAgICAgaWYgKG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoZWxlbSkpIHtcbiAgICAgICAgLy8gRml4IG5hbWUgYW5kIGF0dGFjaCBob29rc1xuICAgICAgICBuYW1lID0galF1ZXJ5LnByb3BGaXhbbmFtZV0gfHwgbmFtZTtcbiAgICAgICAgaG9va3MgPSBqUXVlcnkucHJvcEhvb2tzW25hbWVdO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3Muc2V0KGVsZW0sIHZhbHVlLCBuYW1lKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KGVsZW0sIG5hbWUpKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbVtuYW1lXTtcbiAgICB9LFxuICAgIHByb3BIb29rczoge1xuICAgICAgdGFiSW5kZXg6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcbiAgICAgICAgICAvLyBlbGVtLnRhYkluZGV4IGRvZXNuJ3QgYWx3YXlzIHJldHVybiB0aGVcbiAgICAgICAgICAvLyBjb3JyZWN0IHZhbHVlIHdoZW4gaXQgaGFzbid0IGJlZW4gZXhwbGljaXRseSBzZXRcbiAgICAgICAgICAvLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNDExMTYyMzMzNDcvaHR0cDovL2ZsdWlkcHJvamVjdC5vcmcvYmxvZy8yMDA4LzAxLzA5L2dldHRpbmctc2V0dGluZy1hbmQtcmVtb3ZpbmctdGFiaW5kZXgtdmFsdWVzLXdpdGgtamF2YXNjcmlwdC9cbiAgICAgICAgICAvLyBVc2UgcHJvcGVyIGF0dHJpYnV0ZSByZXRyaWV2YWwoIzEyMDcyKVxuICAgICAgICAgIHZhciB0YWJpbmRleCA9IGpRdWVyeS5maW5kLmF0dHIoZWxlbSwgXCJ0YWJpbmRleFwiKTtcblxuICAgICAgICAgIGlmICh0YWJpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRhYmluZGV4LCAxMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJmb2N1c2FibGUudGVzdChlbGVtLm5vZGVOYW1lKSB8fCByY2xpY2thYmxlLnRlc3QoZWxlbS5ub2RlTmFtZSkgJiYgZWxlbS5ocmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BGaXg6IHtcbiAgICAgIFwiZm9yXCI6IFwiaHRtbEZvclwiLFxuICAgICAgXCJjbGFzc1wiOiBcImNsYXNzTmFtZVwiXG4gICAgfVxuICB9KTsgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4gIC8vIEFjY2Vzc2luZyB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eVxuICAvLyBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gcmVzcGVjdCBzZXR0aW5nIHNlbGVjdGVkXG4gIC8vIG9uIHRoZSBvcHRpb25cbiAgLy8gVGhlIGdldHRlciBlbnN1cmVzIGEgZGVmYXVsdCBvcHRpb24gaXMgc2VsZWN0ZWRcbiAgLy8gd2hlbiBpbiBhbiBvcHRncm91cFxuICAvLyBlc2xpbnQgcnVsZSBcIm5vLXVudXNlZC1leHByZXNzaW9uc1wiIGlzIGRpc2FibGVkIGZvciB0aGlzIGNvZGVcbiAgLy8gc2luY2UgaXQgY29uc2lkZXJzIHN1Y2ggYWNjZXNzaW9ucyBub29wXG5cbiAgaWYgKCFzdXBwb3J0Lm9wdFNlbGVjdGVkKSB7XG4gICAgalF1ZXJ5LnByb3BIb29rcy5zZWxlY3RlZCA9IHtcbiAgICAgIGdldDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgLyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuICAgICAgICB2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAvKiBlc2xpbnQgbm8tdW51c2VkLWV4cHJlc3Npb25zOiBcIm9mZlwiICovXG4gICAgICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIHBhcmVudC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgaWYgKHBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBqUXVlcnkuZWFjaChbXCJ0YWJJbmRleFwiLCBcInJlYWRPbmx5XCIsIFwibWF4TGVuZ3RoXCIsIFwiY2VsbFNwYWNpbmdcIiwgXCJjZWxsUGFkZGluZ1wiLCBcInJvd1NwYW5cIiwgXCJjb2xTcGFuXCIsIFwidXNlTWFwXCIsIFwiZnJhbWVCb3JkZXJcIiwgXCJjb250ZW50RWRpdGFibGVcIl0sIGZ1bmN0aW9uICgpIHtcbiAgICBqUXVlcnkucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldID0gdGhpcztcbiAgfSk7IC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFjY29yZGluZyB0byBIVE1MIHNwZWNcbiAgLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS1hc2NpaS13aGl0ZXNwYWNlXG5cbiAgZnVuY3Rpb24gc3RyaXBBbmRDb2xsYXBzZSh2YWx1ZSkge1xuICAgIHZhciB0b2tlbnMgPSB2YWx1ZS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXTtcbiAgICByZXR1cm4gdG9rZW5zLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3MoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSAmJiBlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiBjbGFzc2VzVG9BcnJheSh2YWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICBhZGRDbGFzczogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgY2xhc3NlcyxcbiAgICAgICAgICBlbGVtLFxuICAgICAgICAgIGN1cixcbiAgICAgICAgICBjdXJWYWx1ZSxcbiAgICAgICAgICBjbGF6eixcbiAgICAgICAgICBqLFxuICAgICAgICAgIGZpbmFsVmFsdWUsXG4gICAgICAgICAgaSA9IDA7XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChqKSB7XG4gICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKHZhbHVlLmNhbGwodGhpcywgaiwgZ2V0Q2xhc3ModGhpcykpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNsYXNzZXMgPSBjbGFzc2VzVG9BcnJheSh2YWx1ZSk7XG5cbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICB3aGlsZSAoZWxlbSA9IHRoaXNbaSsrXSkge1xuICAgICAgICAgIGN1clZhbHVlID0gZ2V0Q2xhc3MoZWxlbSk7XG4gICAgICAgICAgY3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoY3VyVmFsdWUpICsgXCIgXCI7XG5cbiAgICAgICAgICBpZiAoY3VyKSB7XG4gICAgICAgICAgICBqID0gMDtcblxuICAgICAgICAgICAgd2hpbGUgKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSB7XG4gICAgICAgICAgICAgIGlmIChjdXIuaW5kZXhPZihcIiBcIiArIGNsYXp6ICsgXCIgXCIpIDwgMCkge1xuICAgICAgICAgICAgICAgIGN1ciArPSBjbGF6eiArIFwiIFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cblxuICAgICAgICAgICAgZmluYWxWYWx1ZSA9IHN0cmlwQW5kQ29sbGFwc2UoY3VyKTtcblxuICAgICAgICAgICAgaWYgKGN1clZhbHVlICE9PSBmaW5hbFZhbHVlKSB7XG4gICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZmluYWxWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIGNsYXNzZXMsXG4gICAgICAgICAgZWxlbSxcbiAgICAgICAgICBjdXIsXG4gICAgICAgICAgY3VyVmFsdWUsXG4gICAgICAgICAgY2xhenosXG4gICAgICAgICAgaixcbiAgICAgICAgICBmaW5hbFZhbHVlLFxuICAgICAgICAgIGkgPSAwO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaikge1xuICAgICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcyh2YWx1ZS5jYWxsKHRoaXMsIGosIGdldENsYXNzKHRoaXMpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsIFwiXCIpO1xuICAgICAgfVxuXG4gICAgICBjbGFzc2VzID0gY2xhc3Nlc1RvQXJyYXkodmFsdWUpO1xuXG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgd2hpbGUgKGVsZW0gPSB0aGlzW2krK10pIHtcbiAgICAgICAgICBjdXJWYWx1ZSA9IGdldENsYXNzKGVsZW0pOyAvLyBUaGlzIGV4cHJlc3Npb24gaXMgaGVyZSBmb3IgYmV0dGVyIGNvbXByZXNzaWJpbGl0eSAoc2VlIGFkZENsYXNzKVxuXG4gICAgICAgICAgY3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoY3VyVmFsdWUpICsgXCIgXCI7XG5cbiAgICAgICAgICBpZiAoY3VyKSB7XG4gICAgICAgICAgICBqID0gMDtcblxuICAgICAgICAgICAgd2hpbGUgKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSB7XG4gICAgICAgICAgICAgIC8vIFJlbW92ZSAqYWxsKiBpbnN0YW5jZXNcbiAgICAgICAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKFwiIFwiICsgY2xhenogKyBcIiBcIikgPiAtMSkge1xuICAgICAgICAgICAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKFwiIFwiICsgY2xhenogKyBcIiBcIiwgXCIgXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cblxuICAgICAgICAgICAgZmluYWxWYWx1ZSA9IHN0cmlwQW5kQ29sbGFwc2UoY3VyKTtcblxuICAgICAgICAgICAgaWYgKGN1clZhbHVlICE9PSBmaW5hbFZhbHVlKSB7XG4gICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZmluYWxWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uICh2YWx1ZSwgc3RhdGVWYWwpIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlLFxuICAgICAgICAgIGlzVmFsaWRWYWx1ZSA9IHR5cGUgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG5cbiAgICAgIGlmICh0eXBlb2Ygc3RhdGVWYWwgPT09IFwiYm9vbGVhblwiICYmIGlzVmFsaWRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKHZhbHVlKSA6IHRoaXMucmVtb3ZlQ2xhc3ModmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcyh2YWx1ZS5jYWxsKHRoaXMsIGksIGdldENsYXNzKHRoaXMpLCBzdGF0ZVZhbCksIHN0YXRlVmFsKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2xhc3NOYW1lLCBpLCBzZWxmLCBjbGFzc05hbWVzO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkVmFsdWUpIHtcbiAgICAgICAgICAvLyBUb2dnbGUgaW5kaXZpZHVhbCBjbGFzcyBuYW1lc1xuICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgIHNlbGYgPSBqUXVlcnkodGhpcyk7XG4gICAgICAgICAgY2xhc3NOYW1lcyA9IGNsYXNzZXNUb0FycmF5KHZhbHVlKTtcblxuICAgICAgICAgIHdoaWxlIChjbGFzc05hbWUgPSBjbGFzc05hbWVzW2krK10pIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGVhY2ggY2xhc3NOYW1lIGdpdmVuLCBzcGFjZSBzZXBhcmF0ZWQgbGlzdFxuICAgICAgICAgICAgaWYgKHNlbGYuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICBzZWxmLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBUb2dnbGUgd2hvbGUgY2xhc3MgbmFtZVxuXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IGdldENsYXNzKHRoaXMpO1xuXG4gICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgLy8gU3RvcmUgY2xhc3NOYW1lIGlmIHNldFxuICAgICAgICAgICAgZGF0YVByaXYuc2V0KHRoaXMsIFwiX19jbGFzc05hbWVfX1wiLCBjbGFzc05hbWUpO1xuICAgICAgICAgIH0gLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZSBvciBpZiB3ZSdyZSBwYXNzZWQgYGZhbHNlYCxcbiAgICAgICAgICAvLyB0aGVuIHJlbW92ZSB0aGUgd2hvbGUgY2xhc3NuYW1lIChpZiB0aGVyZSB3YXMgb25lLCB0aGUgYWJvdmUgc2F2ZWQgaXQpLlxuICAgICAgICAgIC8vIE90aGVyd2lzZSBicmluZyBiYWNrIHdoYXRldmVyIHdhcyBwcmV2aW91c2x5IHNhdmVkIChpZiBhbnl0aGluZyksXG4gICAgICAgICAgLy8gZmFsbGluZyBiYWNrIHRvIHRoZSBlbXB0eSBzdHJpbmcgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuXG5cbiAgICAgICAgICBpZiAodGhpcy5zZXRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xhc3NOYW1lIHx8IHZhbHVlID09PSBmYWxzZSA/IFwiXCIgOiBkYXRhUHJpdi5nZXQodGhpcywgXCJfX2NsYXNzTmFtZV9fXCIpIHx8IFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBoYXNDbGFzczogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lLFxuICAgICAgICAgIGVsZW0sXG4gICAgICAgICAgaSA9IDA7XG4gICAgICBjbGFzc05hbWUgPSBcIiBcIiArIHNlbGVjdG9yICsgXCIgXCI7XG5cbiAgICAgIHdoaWxlIChlbGVtID0gdGhpc1tpKytdKSB7XG4gICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxICYmIChcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoZ2V0Q2xhc3MoZWxlbSkpICsgXCIgXCIpLmluZGV4T2YoY2xhc3NOYW1lKSA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHZhciBycmV0dXJuID0gL1xcci9nO1xuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICB2YWw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIGhvb2tzLFxuICAgICAgICAgIHJldCxcbiAgICAgICAgICB2YWx1ZUlzRnVuY3Rpb24sXG4gICAgICAgICAgZWxlbSA9IHRoaXNbMF07XG5cbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgIGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzW2VsZW0udHlwZV0gfHwgalF1ZXJ5LnZhbEhvb2tzW2VsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgICBpZiAoaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KGVsZW0sIFwidmFsdWVcIikpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0ID0gZWxlbS52YWx1ZTsgLy8gSGFuZGxlIG1vc3QgY29tbW9uIHN0cmluZyBjYXNlc1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiByZXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXQucmVwbGFjZShycmV0dXJuLCBcIlwiKTtcbiAgICAgICAgICB9IC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB2YWx1ZSBpcyBudWxsL3VuZGVmIG9yIG51bWJlclxuXG5cbiAgICAgICAgICByZXR1cm4gcmV0ID09IG51bGwgPyBcIlwiIDogcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YWx1ZUlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIHZhbDtcblxuICAgICAgICBpZiAodGhpcy5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZUlzRnVuY3Rpb24pIHtcbiAgICAgICAgICB2YWwgPSB2YWx1ZS5jYWxsKHRoaXMsIGksIGpRdWVyeSh0aGlzKS52YWwoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsID0gdmFsdWU7XG4gICAgICAgIH0gLy8gVHJlYXQgbnVsbC91bmRlZmluZWQgYXMgXCJcIjsgY29udmVydCBudW1iZXJzIHRvIHN0cmluZ1xuXG5cbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgdmFsID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgdmFsICs9IFwiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgdmFsID0galF1ZXJ5Lm1hcCh2YWwsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaG9va3MgPSBqUXVlcnkudmFsSG9va3NbdGhpcy50eXBlXSB8fCBqUXVlcnkudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXTsgLy8gSWYgc2V0IHJldHVybnMgdW5kZWZpbmVkLCBmYWxsIGJhY2sgdG8gbm9ybWFsIHNldHRpbmdcblxuICAgICAgICBpZiAoIWhvb2tzIHx8ICEoXCJzZXRcIiBpbiBob29rcykgfHwgaG9va3Muc2V0KHRoaXMsIHZhbCwgXCJ2YWx1ZVwiKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgdmFsSG9va3M6IHtcbiAgICAgIG9wdGlvbjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IGpRdWVyeS5maW5kLmF0dHIoZWxlbSwgXCJ2YWx1ZVwiKTtcbiAgICAgICAgICByZXR1cm4gdmFsICE9IG51bGwgPyB2YWwgOiAvLyBTdXBwb3J0OiBJRSA8PTEwIC0gMTEgb25seVxuICAgICAgICAgIC8vIG9wdGlvbi50ZXh0IHRocm93cyBleGNlcHRpb25zICgjMTQ2ODYsICMxNDg1OClcbiAgICAgICAgICAvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZVxuICAgICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS13aGl0ZXNwYWNlXG4gICAgICAgICAgc3RyaXBBbmRDb2xsYXBzZShqUXVlcnkudGV4dChlbGVtKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIHZhciB2YWx1ZSxcbiAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICBvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuICAgICAgICAgICAgICBpbmRleCA9IGVsZW0uc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgICAgICAgb25lID0gZWxlbS50eXBlID09PSBcInNlbGVjdC1vbmVcIixcbiAgICAgICAgICAgICAgdmFsdWVzID0gb25lID8gbnVsbCA6IFtdLFxuICAgICAgICAgICAgICBtYXggPSBvbmUgPyBpbmRleCArIDEgOiBvcHRpb25zLmxlbmd0aDtcblxuICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGkgPSBtYXg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkgPSBvbmUgPyBpbmRleCA6IDA7XG4gICAgICAgICAgfSAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBzZWxlY3RlZCBvcHRpb25zXG5cblxuICAgICAgICAgIGZvciAoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbnNbaV07IC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gICAgICAgICAgICAvLyBJRTgtOSBkb2Vzbid0IHVwZGF0ZSBzZWxlY3RlZCBhZnRlciBmb3JtIHJlc2V0ICgjMjU1MSlcblxuICAgICAgICAgICAgaWYgKChvcHRpb24uc2VsZWN0ZWQgfHwgaSA9PT0gaW5kZXgpICYmIC8vIERvbid0IHJldHVybiBvcHRpb25zIHRoYXQgYXJlIGRpc2FibGVkIG9yIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcbiAgICAgICAgICAgICFvcHRpb24uZGlzYWJsZWQgJiYgKCFvcHRpb24ucGFyZW50Tm9kZS5kaXNhYmxlZCB8fCAhbm9kZU5hbWUob3B0aW9uLnBhcmVudE5vZGUsIFwib3B0Z3JvdXBcIikpKSB7XG4gICAgICAgICAgICAgIC8vIEdldCB0aGUgc3BlY2lmaWMgdmFsdWUgZm9yIHRoZSBvcHRpb25cbiAgICAgICAgICAgICAgdmFsdWUgPSBqUXVlcnkob3B0aW9uKS52YWwoKTsgLy8gV2UgZG9uJ3QgbmVlZCBhbiBhcnJheSBmb3Igb25lIHNlbGVjdHNcblxuICAgICAgICAgICAgICBpZiAob25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICB9IC8vIE11bHRpLVNlbGVjdHMgcmV0dXJuIGFuIGFycmF5XG5cblxuICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZWxlbSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgb3B0aW9uU2V0LFxuICAgICAgICAgICAgICBvcHRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG4gICAgICAgICAgICAgIHZhbHVlcyA9IGpRdWVyeS5tYWtlQXJyYXkodmFsdWUpLFxuICAgICAgICAgICAgICBpID0gb3B0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBvcHRpb24gPSBvcHRpb25zW2ldO1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuICAgICAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCA9IGpRdWVyeS5pbkFycmF5KGpRdWVyeS52YWxIb29rcy5vcHRpb24uZ2V0KG9wdGlvbiksIHZhbHVlcykgPiAtMSkge1xuICAgICAgICAgICAgICBvcHRpb25TZXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXG4gICAgICAgICAgfSAvLyBGb3JjZSBicm93c2VycyB0byBiZWhhdmUgY29uc2lzdGVudGx5IHdoZW4gbm9uLW1hdGNoaW5nIHZhbHVlIGlzIHNldFxuXG5cbiAgICAgICAgICBpZiAoIW9wdGlvblNldCkge1xuICAgICAgICAgICAgZWxlbS5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG5cbiAgalF1ZXJ5LmVhY2goW1wicmFkaW9cIiwgXCJjaGVja2JveFwiXSwgZnVuY3Rpb24gKCkge1xuICAgIGpRdWVyeS52YWxIb29rc1t0aGlzXSA9IHtcbiAgICAgIHNldDogZnVuY3Rpb24gKGVsZW0sIHZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtLmNoZWNrZWQgPSBqUXVlcnkuaW5BcnJheShqUXVlcnkoZWxlbSkudmFsKCksIHZhbHVlKSA+IC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghc3VwcG9ydC5jaGVja09uKSB7XG4gICAgICBqUXVlcnkudmFsSG9va3NbdGhpc10uZ2V0ID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgPT09IG51bGwgPyBcIm9uXCIgOiBlbGVtLnZhbHVlO1xuICAgICAgfTtcbiAgICB9XG4gIH0pOyAvLyBSZXR1cm4galF1ZXJ5IGZvciBhdHRyaWJ1dGVzLW9ubHkgaW5jbHVzaW9uXG5cbiAgc3VwcG9ydC5mb2N1c2luID0gXCJvbmZvY3VzaW5cIiBpbiB3aW5kb3c7XG5cbiAgdmFyIHJmb2N1c01vcnBoID0gL14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFxuICAgICAgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgalF1ZXJ5LmV4dGVuZChqUXVlcnkuZXZlbnQsIHtcbiAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoZXZlbnQsIGRhdGEsIGVsZW0sIG9ubHlIYW5kbGVycykge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgY3VyLFxuICAgICAgICAgIHRtcCxcbiAgICAgICAgICBidWJibGVUeXBlLFxuICAgICAgICAgIG9udHlwZSxcbiAgICAgICAgICBoYW5kbGUsXG4gICAgICAgICAgc3BlY2lhbCxcbiAgICAgICAgICBsYXN0RWxlbWVudCxcbiAgICAgICAgICBldmVudFBhdGggPSBbZWxlbSB8fCBkb2N1bWVudF0sXG4gICAgICAgICAgdHlwZSA9IGhhc093bi5jYWxsKGV2ZW50LCBcInR5cGVcIikgPyBldmVudC50eXBlIDogZXZlbnQsXG4gICAgICAgICAgbmFtZXNwYWNlcyA9IGhhc093bi5jYWxsKGV2ZW50LCBcIm5hbWVzcGFjZVwiKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdChcIi5cIikgOiBbXTtcbiAgICAgIGN1ciA9IGxhc3RFbGVtZW50ID0gdG1wID0gZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQ7IC8vIERvbid0IGRvIGV2ZW50cyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cbiAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBmb2N1cy9ibHVyIG1vcnBocyB0byBmb2N1c2luL291dDsgZW5zdXJlIHdlJ3JlIG5vdCBmaXJpbmcgdGhlbSByaWdodCBub3dcblxuXG4gICAgICBpZiAocmZvY3VzTW9ycGgudGVzdCh0eXBlICsgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZS5pbmRleE9mKFwiLlwiKSA+IC0xKSB7XG4gICAgICAgIC8vIE5hbWVzcGFjZWQgdHJpZ2dlcjsgY3JlYXRlIGEgcmVnZXhwIHRvIG1hdGNoIGV2ZW50IHR5cGUgaW4gaGFuZGxlKClcbiAgICAgICAgbmFtZXNwYWNlcyA9IHR5cGUuc3BsaXQoXCIuXCIpO1xuICAgICAgICB0eXBlID0gbmFtZXNwYWNlcy5zaGlmdCgpO1xuICAgICAgICBuYW1lc3BhY2VzLnNvcnQoKTtcbiAgICAgIH1cblxuICAgICAgb250eXBlID0gdHlwZS5pbmRleE9mKFwiOlwiKSA8IDAgJiYgXCJvblwiICsgdHlwZTsgLy8gQ2FsbGVyIGNhbiBwYXNzIGluIGEgalF1ZXJ5LkV2ZW50IG9iamVjdCwgT2JqZWN0LCBvciBqdXN0IGFuIGV2ZW50IHR5cGUgc3RyaW5nXG5cbiAgICAgIGV2ZW50ID0gZXZlbnRbalF1ZXJ5LmV4cGFuZG9dID8gZXZlbnQgOiBuZXcgalF1ZXJ5LkV2ZW50KHR5cGUsIHR5cGVvZiBldmVudCA9PT0gXCJvYmplY3RcIiAmJiBldmVudCk7IC8vIFRyaWdnZXIgYml0bWFzazogJiAxIGZvciBuYXRpdmUgaGFuZGxlcnM7ICYgMiBmb3IgalF1ZXJ5IChhbHdheXMgdHJ1ZSlcblxuICAgICAgZXZlbnQuaXNUcmlnZ2VyID0gb25seUhhbmRsZXJzID8gMiA6IDM7XG4gICAgICBldmVudC5uYW1lc3BhY2UgPSBuYW1lc3BhY2VzLmpvaW4oXCIuXCIpO1xuICAgICAgZXZlbnQucm5hbWVzcGFjZSA9IGV2ZW50Lm5hbWVzcGFjZSA/IG5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpICsgXCIoXFxcXC58JClcIikgOiBudWxsOyAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgaW4gY2FzZSBpdCBpcyBiZWluZyByZXVzZWRcblxuICAgICAgZXZlbnQucmVzdWx0ID0gdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoIWV2ZW50LnRhcmdldCkge1xuICAgICAgICBldmVudC50YXJnZXQgPSBlbGVtO1xuICAgICAgfSAvLyBDbG9uZSBhbnkgaW5jb21pbmcgZGF0YSBhbmQgcHJlcGVuZCB0aGUgZXZlbnQsIGNyZWF0aW5nIHRoZSBoYW5kbGVyIGFyZyBsaXN0XG5cblxuICAgICAgZGF0YSA9IGRhdGEgPT0gbnVsbCA/IFtldmVudF0gOiBqUXVlcnkubWFrZUFycmF5KGRhdGEsIFtldmVudF0pOyAvLyBBbGxvdyBzcGVjaWFsIGV2ZW50cyB0byBkcmF3IG91dHNpZGUgdGhlIGxpbmVzXG5cbiAgICAgIHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFt0eXBlXSB8fCB7fTtcblxuICAgICAgaWYgKCFvbmx5SGFuZGxlcnMgJiYgc3BlY2lhbC50cmlnZ2VyICYmIHNwZWNpYWwudHJpZ2dlci5hcHBseShlbGVtLCBkYXRhKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBEZXRlcm1pbmUgZXZlbnQgcHJvcGFnYXRpb24gcGF0aCBpbiBhZHZhbmNlLCBwZXIgVzNDIGV2ZW50cyBzcGVjICgjOTk1MSlcbiAgICAgIC8vIEJ1YmJsZSB1cCB0byBkb2N1bWVudCwgdGhlbiB0byB3aW5kb3c7IHdhdGNoIGZvciBhIGdsb2JhbCBvd25lckRvY3VtZW50IHZhciAoIzk3MjQpXG5cblxuICAgICAgaWYgKCFvbmx5SGFuZGxlcnMgJiYgIXNwZWNpYWwubm9CdWJibGUgJiYgIWlzV2luZG93KGVsZW0pKSB7XG4gICAgICAgIGJ1YmJsZVR5cGUgPSBzcGVjaWFsLmRlbGVnYXRlVHlwZSB8fCB0eXBlO1xuXG4gICAgICAgIGlmICghcmZvY3VzTW9ycGgudGVzdChidWJibGVUeXBlICsgdHlwZSkpIHtcbiAgICAgICAgICBjdXIgPSBjdXIucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBjdXI7IGN1ciA9IGN1ci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgZXZlbnRQYXRoLnB1c2goY3VyKTtcbiAgICAgICAgICB0bXAgPSBjdXI7XG4gICAgICAgIH0gLy8gT25seSBhZGQgd2luZG93IGlmIHdlIGdvdCB0byBkb2N1bWVudCAoZS5nLiwgbm90IHBsYWluIG9iaiBvciBkZXRhY2hlZCBET00pXG5cblxuICAgICAgICBpZiAodG1wID09PSAoZWxlbS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KSkge1xuICAgICAgICAgIGV2ZW50UGF0aC5wdXNoKHRtcC5kZWZhdWx0VmlldyB8fCB0bXAucGFyZW50V2luZG93IHx8IHdpbmRvdyk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRmlyZSBoYW5kbGVycyBvbiB0aGUgZXZlbnQgcGF0aFxuXG5cbiAgICAgIGkgPSAwO1xuXG4gICAgICB3aGlsZSAoKGN1ciA9IGV2ZW50UGF0aFtpKytdKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICBsYXN0RWxlbWVudCA9IGN1cjtcbiAgICAgICAgZXZlbnQudHlwZSA9IGkgPiAxID8gYnViYmxlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgfHwgdHlwZTsgLy8galF1ZXJ5IGhhbmRsZXJcblxuICAgICAgICBoYW5kbGUgPSAoZGF0YVByaXYuZ2V0KGN1ciwgXCJldmVudHNcIikgfHwge30pW2V2ZW50LnR5cGVdICYmIGRhdGFQcml2LmdldChjdXIsIFwiaGFuZGxlXCIpO1xuXG4gICAgICAgIGlmIChoYW5kbGUpIHtcbiAgICAgICAgICBoYW5kbGUuYXBwbHkoY3VyLCBkYXRhKTtcbiAgICAgICAgfSAvLyBOYXRpdmUgaGFuZGxlclxuXG5cbiAgICAgICAgaGFuZGxlID0gb250eXBlICYmIGN1cltvbnR5cGVdO1xuXG4gICAgICAgIGlmIChoYW5kbGUgJiYgaGFuZGxlLmFwcGx5ICYmIGFjY2VwdERhdGEoY3VyKSkge1xuICAgICAgICAgIGV2ZW50LnJlc3VsdCA9IGhhbmRsZS5hcHBseShjdXIsIGRhdGEpO1xuXG4gICAgICAgICAgaWYgKGV2ZW50LnJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnR5cGUgPSB0eXBlOyAvLyBJZiBub2JvZHkgcHJldmVudGVkIHRoZSBkZWZhdWx0IGFjdGlvbiwgZG8gaXQgbm93XG5cbiAgICAgIGlmICghb25seUhhbmRsZXJzICYmICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICBpZiAoKCFzcGVjaWFsLl9kZWZhdWx0IHx8IHNwZWNpYWwuX2RlZmF1bHQuYXBwbHkoZXZlbnRQYXRoLnBvcCgpLCBkYXRhKSA9PT0gZmFsc2UpICYmIGFjY2VwdERhdGEoZWxlbSkpIHtcbiAgICAgICAgICAvLyBDYWxsIGEgbmF0aXZlIERPTSBtZXRob2Qgb24gdGhlIHRhcmdldCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGV2ZW50LlxuICAgICAgICAgIC8vIERvbid0IGRvIGRlZmF1bHQgYWN0aW9ucyBvbiB3aW5kb3csIHRoYXQncyB3aGVyZSBnbG9iYWwgdmFyaWFibGVzIGJlICgjNjE3MClcbiAgICAgICAgICBpZiAob250eXBlICYmIGlzRnVuY3Rpb24oZWxlbVt0eXBlXSkgJiYgIWlzV2luZG93KGVsZW0pKSB7XG4gICAgICAgICAgICAvLyBEb24ndCByZS10cmlnZ2VyIGFuIG9uRk9PIGV2ZW50IHdoZW4gd2UgY2FsbCBpdHMgRk9PKCkgbWV0aG9kXG4gICAgICAgICAgICB0bXAgPSBlbGVtW29udHlwZV07XG5cbiAgICAgICAgICAgIGlmICh0bXApIHtcbiAgICAgICAgICAgICAgZWxlbVtvbnR5cGVdID0gbnVsbDtcbiAgICAgICAgICAgIH0gLy8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcblxuXG4gICAgICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdHlwZTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICAgICAgbGFzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBzdG9wUHJvcGFnYXRpb25DYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1bdHlwZV0oKTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICAgICAgbGFzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBzdG9wUHJvcGFnYXRpb25DYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmICh0bXApIHtcbiAgICAgICAgICAgICAgZWxlbVtvbnR5cGVdID0gdG1wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnQucmVzdWx0O1xuICAgIH0sXG4gICAgLy8gUGlnZ3liYWNrIG9uIGEgZG9ub3IgZXZlbnQgdG8gc2ltdWxhdGUgYSBkaWZmZXJlbnQgb25lXG4gICAgLy8gVXNlZCBvbmx5IGZvciBgZm9jdXMoaW4gfCBvdXQpYCBldmVudHNcbiAgICBzaW11bGF0ZTogZnVuY3Rpb24gKHR5cGUsIGVsZW0sIGV2ZW50KSB7XG4gICAgICB2YXIgZSA9IGpRdWVyeS5leHRlbmQobmV3IGpRdWVyeS5FdmVudCgpLCBldmVudCwge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBpc1NpbXVsYXRlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcihlLCBudWxsLCBlbGVtKTtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICB0cmlnZ2VyOiBmdW5jdGlvbiAodHlwZSwgZGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyKHR5cGUsIGRhdGEsIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB0cmlnZ2VySGFuZGxlcjogZnVuY3Rpb24gKHR5cGUsIGRhdGEpIHtcbiAgICAgIHZhciBlbGVtID0gdGhpc1swXTtcblxuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGpRdWVyeS5ldmVudC50cmlnZ2VyKHR5cGUsIGRhdGEsIGVsZW0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00NFxuICAvLyBGaXJlZm94IGRvZXNuJ3QgaGF2ZSBmb2N1cyhpbiB8IG91dCkgZXZlbnRzXG4gIC8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njg3Nzg3XG4gIC8vXG4gIC8vIFN1cHBvcnQ6IENocm9tZSA8PTQ4IC0gNDksIFNhZmFyaSA8PTkuMCAtIDkuMVxuICAvLyBmb2N1cyhpbiB8IG91dCkgZXZlbnRzIGZpcmUgYWZ0ZXIgZm9jdXMgJiBibHVyIGV2ZW50cyxcbiAgLy8gd2hpY2ggaXMgc3BlYyB2aW9sYXRpb24gLSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50cy1mb2N1c2V2ZW50LWV2ZW50LW9yZGVyXG4gIC8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ5ODU3XG5cbiAgaWYgKCFzdXBwb3J0LmZvY3VzaW4pIHtcbiAgICBqUXVlcnkuZWFjaCh7XG4gICAgICBmb2N1czogXCJmb2N1c2luXCIsXG4gICAgICBibHVyOiBcImZvY3Vzb3V0XCJcbiAgICB9LCBmdW5jdGlvbiAob3JpZywgZml4KSB7XG4gICAgICAvLyBBdHRhY2ggYSBzaW5nbGUgY2FwdHVyaW5nIGhhbmRsZXIgb24gdGhlIGRvY3VtZW50IHdoaWxlIHNvbWVvbmUgd2FudHMgZm9jdXNpbi9mb2N1c291dFxuICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgalF1ZXJ5LmV2ZW50LnNpbXVsYXRlKGZpeCwgZXZlbnQudGFyZ2V0LCBqUXVlcnkuZXZlbnQuZml4KGV2ZW50KSk7XG4gICAgICB9O1xuXG4gICAgICBqUXVlcnkuZXZlbnQuc3BlY2lhbFtmaXhdID0ge1xuICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcyxcbiAgICAgICAgICAgICAgYXR0YWNoZXMgPSBkYXRhUHJpdi5hY2Nlc3MoZG9jLCBmaXgpO1xuXG4gICAgICAgICAgaWYgKCFhdHRhY2hlcykge1xuICAgICAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIob3JpZywgaGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVByaXYuYWNjZXNzKGRvYywgZml4LCAoYXR0YWNoZXMgfHwgMCkgKyAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGVhcmRvd246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG4gICAgICAgICAgICAgIGF0dGFjaGVzID0gZGF0YVByaXYuYWNjZXNzKGRvYywgZml4KSAtIDE7XG5cbiAgICAgICAgICBpZiAoIWF0dGFjaGVzKSB7XG4gICAgICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihvcmlnLCBoYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgICAgIGRhdGFQcml2LnJlbW92ZShkb2MsIGZpeCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGFQcml2LmFjY2Vzcyhkb2MsIGZpeCwgYXR0YWNoZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgdmFyIG5vbmNlID0gRGF0ZS5ub3coKTtcbiAgdmFyIHJxdWVyeSA9IC9cXD8vOyAvLyBDcm9zcy1icm93c2VyIHhtbCBwYXJzaW5nXG5cbiAgalF1ZXJ5LnBhcnNlWE1MID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgeG1sO1xuXG4gICAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IC8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5XG4gICAgLy8gSUUgdGhyb3dzIG9uIHBhcnNlRnJvbVN0cmluZyB3aXRoIGludmFsaWQgaW5wdXQuXG5cblxuICAgIHRyeSB7XG4gICAgICB4bWwgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkYXRhLCBcInRleHQveG1sXCIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHhtbCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoIXhtbCB8fCB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGgpIHtcbiAgICAgIGpRdWVyeS5lcnJvcihcIkludmFsaWQgWE1MOiBcIiArIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB4bWw7XG4gIH07XG5cbiAgdmFyIHJicmFja2V0ID0gL1xcW1xcXSQvLFxuICAgICAgckNSTEYgPSAvXFxyP1xcbi9nLFxuICAgICAgcnN1Ym1pdHRlclR5cGVzID0gL14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFxuICAgICAgcnN1Ym1pdHRhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkUGFyYW1zKHByZWZpeCwgb2JqLCB0cmFkaXRpb25hbCwgYWRkKSB7XG4gICAgdmFyIG5hbWU7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAvLyBTZXJpYWxpemUgYXJyYXkgaXRlbS5cbiAgICAgIGpRdWVyeS5lYWNoKG9iaiwgZnVuY3Rpb24gKGksIHYpIHtcbiAgICAgICAgaWYgKHRyYWRpdGlvbmFsIHx8IHJicmFja2V0LnRlc3QocHJlZml4KSkge1xuICAgICAgICAgIC8vIFRyZWF0IGVhY2ggYXJyYXkgaXRlbSBhcyBhIHNjYWxhci5cbiAgICAgICAgICBhZGQocHJlZml4LCB2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJdGVtIGlzIG5vbi1zY2FsYXIgKGFycmF5IG9yIG9iamVjdCksIGVuY29kZSBpdHMgbnVtZXJpYyBpbmRleC5cbiAgICAgICAgICBidWlsZFBhcmFtcyhwcmVmaXggKyBcIltcIiArICh0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJiB2ICE9IG51bGwgPyBpIDogXCJcIikgKyBcIl1cIiwgdiwgdHJhZGl0aW9uYWwsIGFkZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXRyYWRpdGlvbmFsICYmIHRvVHlwZShvYmopID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAvLyBTZXJpYWxpemUgb2JqZWN0IGl0ZW0uXG4gICAgICBmb3IgKG5hbWUgaW4gb2JqKSB7XG4gICAgICAgIGJ1aWxkUGFyYW1zKHByZWZpeCArIFwiW1wiICsgbmFtZSArIFwiXVwiLCBvYmpbbmFtZV0sIHRyYWRpdGlvbmFsLCBhZGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXJpYWxpemUgc2NhbGFyIGl0ZW0uXG4gICAgICBhZGQocHJlZml4LCBvYmopO1xuICAgIH1cbiAgfSAvLyBTZXJpYWxpemUgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cyBvciBhIHNldCBvZlxuICAvLyBrZXkvdmFsdWVzIGludG8gYSBxdWVyeSBzdHJpbmdcblxuXG4gIGpRdWVyeS5wYXJhbSA9IGZ1bmN0aW9uIChhLCB0cmFkaXRpb25hbCkge1xuICAgIHZhciBwcmVmaXgsXG4gICAgICAgIHMgPSBbXSxcbiAgICAgICAgYWRkID0gZnVuY3Rpb24gKGtleSwgdmFsdWVPckZ1bmN0aW9uKSB7XG4gICAgICAvLyBJZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCBpbnZva2UgaXQgYW5kIHVzZSBpdHMgcmV0dXJuIHZhbHVlXG4gICAgICB2YXIgdmFsdWUgPSBpc0Z1bmN0aW9uKHZhbHVlT3JGdW5jdGlvbikgPyB2YWx1ZU9yRnVuY3Rpb24oKSA6IHZhbHVlT3JGdW5jdGlvbjtcbiAgICAgIHNbcy5sZW5ndGhdID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlKTtcbiAgICB9O1xuXG4gICAgaWYgKGEgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfSAvLyBJZiBhbiBhcnJheSB3YXMgcGFzc2VkIGluLCBhc3N1bWUgdGhhdCBpdCBpcyBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzLlxuXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSB8fCBhLmpxdWVyeSAmJiAhalF1ZXJ5LmlzUGxhaW5PYmplY3QoYSkpIHtcbiAgICAgIC8vIFNlcmlhbGl6ZSB0aGUgZm9ybSBlbGVtZW50c1xuICAgICAgalF1ZXJ5LmVhY2goYSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGQodGhpcy5uYW1lLCB0aGlzLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0cmFkaXRpb25hbCwgZW5jb2RlIHRoZSBcIm9sZFwiIHdheSAodGhlIHdheSAxLjMuMiBvciBvbGRlclxuICAgICAgLy8gZGlkIGl0KSwgb3RoZXJ3aXNlIGVuY29kZSBwYXJhbXMgcmVjdXJzaXZlbHkuXG4gICAgICBmb3IgKHByZWZpeCBpbiBhKSB7XG4gICAgICAgIGJ1aWxkUGFyYW1zKHByZWZpeCwgYVtwcmVmaXhdLCB0cmFkaXRpb25hbCwgYWRkKTtcbiAgICAgIH1cbiAgICB9IC8vIFJldHVybiB0aGUgcmVzdWx0aW5nIHNlcmlhbGl6YXRpb25cblxuXG4gICAgcmV0dXJuIHMuam9pbihcIiZcIik7XG4gIH07XG5cbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4galF1ZXJ5LnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSk7XG4gICAgfSxcbiAgICBzZXJpYWxpemVBcnJheTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ2FuIGFkZCBwcm9wSG9vayBmb3IgXCJlbGVtZW50c1wiIHRvIGZpbHRlciBvciBhZGQgZm9ybSBlbGVtZW50c1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBqUXVlcnkucHJvcCh0aGlzLCBcImVsZW1lbnRzXCIpO1xuICAgICAgICByZXR1cm4gZWxlbWVudHMgPyBqUXVlcnkubWFrZUFycmF5KGVsZW1lbnRzKSA6IHRoaXM7XG4gICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHlwZSA9IHRoaXMudHlwZTsgLy8gVXNlIC5pcyggXCI6ZGlzYWJsZWRcIiApIHNvIHRoYXQgZmllbGRzZXRbZGlzYWJsZWRdIHdvcmtzXG5cbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSAmJiAhalF1ZXJ5KHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpICYmIHJzdWJtaXR0YWJsZS50ZXN0KHRoaXMubm9kZU5hbWUpICYmICFyc3VibWl0dGVyVHlwZXMudGVzdCh0eXBlKSAmJiAodGhpcy5jaGVja2VkIHx8ICFyY2hlY2thYmxlVHlwZS50ZXN0KHR5cGUpKTtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoaSwgZWxlbSkge1xuICAgICAgICB2YXIgdmFsID0galF1ZXJ5KHRoaXMpLnZhbCgpO1xuXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgIHJldHVybiBqUXVlcnkubWFwKHZhbCwgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogZWxlbS5uYW1lLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsLnJlcGxhY2UockNSTEYsIFwiXFxyXFxuXCIpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiBlbGVtLm5hbWUsXG4gICAgICAgICAgdmFsdWU6IHZhbC5yZXBsYWNlKHJDUkxGLCBcIlxcclxcblwiKVxuICAgICAgICB9O1xuICAgICAgfSkuZ2V0KCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIHIyMCA9IC8lMjAvZyxcbiAgICAgIHJoYXNoID0gLyMuKiQvLFxuICAgICAgcmFudGlDYWNoZSA9IC8oWz8mXSlfPVteJl0qLyxcbiAgICAgIHJoZWFkZXJzID0gL14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9tZyxcbiAgICAgIC8vICM3NjUzLCAjODEyNSwgIzgxNTI6IGxvY2FsIHByb3RvY29sIGRldGVjdGlvblxuICBybG9jYWxQcm90b2NvbCA9IC9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLFxuICAgICAgcm5vQ29udGVudCA9IC9eKD86R0VUfEhFQUQpJC8sXG4gICAgICBycHJvdG9jb2wgPSAvXlxcL1xcLy8sXG5cbiAgLyogUHJlZmlsdGVyc1xuICAgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuICAgKiAyKSBUaGVzZSBhcmUgY2FsbGVkOlxuICAgKiAgICAtIEJFRk9SRSBhc2tpbmcgZm9yIGEgdHJhbnNwb3J0XG4gICAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcbiAgICogMykga2V5IGlzIHRoZSBkYXRhVHlwZVxuICAgKiA0KSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG4gICAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG4gICAqL1xuICBwcmVmaWx0ZXJzID0ge30sXG5cbiAgLyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuICAgKiAxKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG4gICAqIDIpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcbiAgICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG4gICAqL1xuICB0cmFuc3BvcnRzID0ge30sXG4gICAgICAvLyBBdm9pZCBjb21tZW50LXByb2xvZyBjaGFyIHNlcXVlbmNlICgjMTAwOTgpOyBtdXN0IGFwcGVhc2UgbGludCBhbmQgZXZhZGUgY29tcHJlc3Npb25cbiAgYWxsVHlwZXMgPSBcIiovXCIuY29uY2F0KFwiKlwiKSxcbiAgICAgIC8vIEFuY2hvciB0YWcgZm9yIHBhcnNpbmcgdGhlIGRvY3VtZW50IG9yaWdpblxuICBvcmlnaW5BbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgb3JpZ2luQW5jaG9yLmhyZWYgPSBsb2NhdGlvbi5ocmVmOyAvLyBCYXNlIFwiY29uc3RydWN0b3JcIiBmb3IgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIgYW5kIGpRdWVyeS5hamF4VHJhbnNwb3J0XG5cbiAgZnVuY3Rpb24gYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHN0cnVjdHVyZSkge1xuICAgIC8vIGRhdGFUeXBlRXhwcmVzc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIqXCJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGFUeXBlRXhwcmVzc2lvbiwgZnVuYykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhVHlwZUV4cHJlc3Npb24gIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZnVuYyA9IGRhdGFUeXBlRXhwcmVzc2lvbjtcbiAgICAgICAgZGF0YVR5cGVFeHByZXNzaW9uID0gXCIqXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhVHlwZSxcbiAgICAgICAgICBpID0gMCxcbiAgICAgICAgICBkYXRhVHlwZXMgPSBkYXRhVHlwZUV4cHJlc3Npb24udG9Mb3dlckNhc2UoKS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXTtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24oZnVuYykpIHtcbiAgICAgICAgLy8gRm9yIGVhY2ggZGF0YVR5cGUgaW4gdGhlIGRhdGFUeXBlRXhwcmVzc2lvblxuICAgICAgICB3aGlsZSAoZGF0YVR5cGUgPSBkYXRhVHlwZXNbaSsrXSkge1xuICAgICAgICAgIC8vIFByZXBlbmQgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgaWYgKGRhdGFUeXBlWzBdID09PSBcIitcIikge1xuICAgICAgICAgICAgZGF0YVR5cGUgPSBkYXRhVHlwZS5zbGljZSgxKSB8fCBcIipcIjtcbiAgICAgICAgICAgIChzdHJ1Y3R1cmVbZGF0YVR5cGVdID0gc3RydWN0dXJlW2RhdGFUeXBlXSB8fCBbXSkudW5zaGlmdChmdW5jKTsgLy8gT3RoZXJ3aXNlIGFwcGVuZFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAoc3RydWN0dXJlW2RhdGFUeXBlXSA9IHN0cnVjdHVyZVtkYXRhVHlwZV0gfHwgW10pLnB1c2goZnVuYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSAvLyBCYXNlIGluc3BlY3Rpb24gZnVuY3Rpb24gZm9yIHByZWZpbHRlcnMgYW5kIHRyYW5zcG9ydHNcblxuXG4gIGZ1bmN0aW9uIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHN0cnVjdHVyZSwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUikge1xuICAgIHZhciBpbnNwZWN0ZWQgPSB7fSxcbiAgICAgICAgc2Vla2luZ1RyYW5zcG9ydCA9IHN0cnVjdHVyZSA9PT0gdHJhbnNwb3J0cztcblxuICAgIGZ1bmN0aW9uIGluc3BlY3QoZGF0YVR5cGUpIHtcbiAgICAgIHZhciBzZWxlY3RlZDtcbiAgICAgIGluc3BlY3RlZFtkYXRhVHlwZV0gPSB0cnVlO1xuICAgICAgalF1ZXJ5LmVhY2goc3RydWN0dXJlW2RhdGFUeXBlXSB8fCBbXSwgZnVuY3Rpb24gKF8sIHByZWZpbHRlck9yRmFjdG9yeSkge1xuICAgICAgICB2YXIgZGF0YVR5cGVPclRyYW5zcG9ydCA9IHByZWZpbHRlck9yRmFjdG9yeShvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSKTtcblxuICAgICAgICBpZiAodHlwZW9mIGRhdGFUeXBlT3JUcmFuc3BvcnQgPT09IFwic3RyaW5nXCIgJiYgIXNlZWtpbmdUcmFuc3BvcnQgJiYgIWluc3BlY3RlZFtkYXRhVHlwZU9yVHJhbnNwb3J0XSkge1xuICAgICAgICAgIG9wdGlvbnMuZGF0YVR5cGVzLnVuc2hpZnQoZGF0YVR5cGVPclRyYW5zcG9ydCk7XG4gICAgICAgICAgaW5zcGVjdChkYXRhVHlwZU9yVHJhbnNwb3J0KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc2Vla2luZ1RyYW5zcG9ydCkge1xuICAgICAgICAgIHJldHVybiAhKHNlbGVjdGVkID0gZGF0YVR5cGVPclRyYW5zcG9ydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgIH1cblxuICAgIHJldHVybiBpbnNwZWN0KG9wdGlvbnMuZGF0YVR5cGVzWzBdKSB8fCAhaW5zcGVjdGVkW1wiKlwiXSAmJiBpbnNwZWN0KFwiKlwiKTtcbiAgfSAvLyBBIHNwZWNpYWwgZXh0ZW5kIGZvciBhamF4IG9wdGlvbnNcbiAgLy8gdGhhdCB0YWtlcyBcImZsYXRcIiBvcHRpb25zIChub3QgdG8gYmUgZGVlcCBleHRlbmRlZClcbiAgLy8gRml4ZXMgIzk4ODdcblxuXG4gIGZ1bmN0aW9uIGFqYXhFeHRlbmQodGFyZ2V0LCBzcmMpIHtcbiAgICB2YXIga2V5LFxuICAgICAgICBkZWVwLFxuICAgICAgICBmbGF0T3B0aW9ucyA9IGpRdWVyeS5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnMgfHwge307XG5cbiAgICBmb3IgKGtleSBpbiBzcmMpIHtcbiAgICAgIGlmIChzcmNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIChmbGF0T3B0aW9uc1trZXldID8gdGFyZ2V0IDogZGVlcCB8fCAoZGVlcCA9IHt9KSlba2V5XSA9IHNyY1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICBqUXVlcnkuZXh0ZW5kKHRydWUsIHRhcmdldCwgZGVlcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICAvKiBIYW5kbGVzIHJlc3BvbnNlcyB0byBhbiBhamF4IHJlcXVlc3Q6XG4gICAqIC0gZmluZHMgdGhlIHJpZ2h0IGRhdGFUeXBlIChtZWRpYXRlcyBiZXR3ZWVuIGNvbnRlbnQtdHlwZSBhbmQgZXhwZWN0ZWQgZGF0YVR5cGUpXG4gICAqIC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGFqYXhIYW5kbGVSZXNwb25zZXMocywganFYSFIsIHJlc3BvbnNlcykge1xuICAgIHZhciBjdCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZmluYWxEYXRhVHlwZSxcbiAgICAgICAgZmlyc3REYXRhVHlwZSxcbiAgICAgICAgY29udGVudHMgPSBzLmNvbnRlbnRzLFxuICAgICAgICBkYXRhVHlwZXMgPSBzLmRhdGFUeXBlczsgLy8gUmVtb3ZlIGF1dG8gZGF0YVR5cGUgYW5kIGdldCBjb250ZW50LXR5cGUgaW4gdGhlIHByb2Nlc3NcblxuICAgIHdoaWxlIChkYXRhVHlwZXNbMF0gPT09IFwiKlwiKSB7XG4gICAgICBkYXRhVHlwZXMuc2hpZnQoKTtcblxuICAgICAgaWYgKGN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3QgPSBzLm1pbWVUeXBlIHx8IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpO1xuICAgICAgfVxuICAgIH0gLy8gQ2hlY2sgaWYgd2UncmUgZGVhbGluZyB3aXRoIGEga25vd24gY29udGVudC10eXBlXG5cblxuICAgIGlmIChjdCkge1xuICAgICAgZm9yICh0eXBlIGluIGNvbnRlbnRzKSB7XG4gICAgICAgIGlmIChjb250ZW50c1t0eXBlXSAmJiBjb250ZW50c1t0eXBlXS50ZXN0KGN0KSkge1xuICAgICAgICAgIGRhdGFUeXBlcy51bnNoaWZ0KHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIHJlc3BvbnNlIGZvciB0aGUgZXhwZWN0ZWQgZGF0YVR5cGVcblxuXG4gICAgaWYgKGRhdGFUeXBlc1swXSBpbiByZXNwb25zZXMpIHtcbiAgICAgIGZpbmFsRGF0YVR5cGUgPSBkYXRhVHlwZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSBjb252ZXJ0aWJsZSBkYXRhVHlwZXNcbiAgICAgIGZvciAodHlwZSBpbiByZXNwb25zZXMpIHtcbiAgICAgICAgaWYgKCFkYXRhVHlwZXNbMF0gfHwgcy5jb252ZXJ0ZXJzW3R5cGUgKyBcIiBcIiArIGRhdGFUeXBlc1swXV0pIHtcbiAgICAgICAgICBmaW5hbERhdGFUeXBlID0gdHlwZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZmlyc3REYXRhVHlwZSkge1xuICAgICAgICAgIGZpcnN0RGF0YVR5cGUgPSB0eXBlO1xuICAgICAgICB9XG4gICAgICB9IC8vIE9yIGp1c3QgdXNlIGZpcnN0IG9uZVxuXG5cbiAgICAgIGZpbmFsRGF0YVR5cGUgPSBmaW5hbERhdGFUeXBlIHx8IGZpcnN0RGF0YVR5cGU7XG4gICAgfSAvLyBJZiB3ZSBmb3VuZCBhIGRhdGFUeXBlXG4gICAgLy8gV2UgYWRkIHRoZSBkYXRhVHlwZSB0byB0aGUgbGlzdCBpZiBuZWVkZWRcbiAgICAvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG5cblxuICAgIGlmIChmaW5hbERhdGFUeXBlKSB7XG4gICAgICBpZiAoZmluYWxEYXRhVHlwZSAhPT0gZGF0YVR5cGVzWzBdKSB7XG4gICAgICAgIGRhdGFUeXBlcy51bnNoaWZ0KGZpbmFsRGF0YVR5cGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2VzW2ZpbmFsRGF0YVR5cGVdO1xuICAgIH1cbiAgfVxuICAvKiBDaGFpbiBjb252ZXJzaW9ucyBnaXZlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIG9yaWdpbmFsIHJlc3BvbnNlXG4gICAqIEFsc28gc2V0cyB0aGUgcmVzcG9uc2VYWFggZmllbGRzIG9uIHRoZSBqcVhIUiBpbnN0YW5jZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGFqYXhDb252ZXJ0KHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzKSB7XG4gICAgdmFyIGNvbnYyLFxuICAgICAgICBjdXJyZW50LFxuICAgICAgICBjb252LFxuICAgICAgICB0bXAsXG4gICAgICAgIHByZXYsXG4gICAgICAgIGNvbnZlcnRlcnMgPSB7fSxcbiAgICAgICAgLy8gV29yayB3aXRoIGEgY29weSBvZiBkYXRhVHlwZXMgaW4gY2FzZSB3ZSBuZWVkIHRvIG1vZGlmeSBpdCBmb3IgY29udmVyc2lvblxuICAgIGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzLnNsaWNlKCk7IC8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuXG4gICAgaWYgKGRhdGFUeXBlc1sxXSkge1xuICAgICAgZm9yIChjb252IGluIHMuY29udmVydGVycykge1xuICAgICAgICBjb252ZXJ0ZXJzW2NvbnYudG9Mb3dlckNhc2UoKV0gPSBzLmNvbnZlcnRlcnNbY29udl07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpOyAvLyBDb252ZXJ0IHRvIGVhY2ggc2VxdWVudGlhbCBkYXRhVHlwZVxuXG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIGlmIChzLnJlc3BvbnNlRmllbGRzW2N1cnJlbnRdKSB7XG4gICAgICAgIGpxWEhSW3MucmVzcG9uc2VGaWVsZHNbY3VycmVudF1dID0gcmVzcG9uc2U7XG4gICAgICB9IC8vIEFwcGx5IHRoZSBkYXRhRmlsdGVyIGlmIHByb3ZpZGVkXG5cblxuICAgICAgaWYgKCFwcmV2ICYmIGlzU3VjY2VzcyAmJiBzLmRhdGFGaWx0ZXIpIHtcbiAgICAgICAgcmVzcG9uc2UgPSBzLmRhdGFGaWx0ZXIocmVzcG9uc2UsIHMuZGF0YVR5cGUpO1xuICAgICAgfVxuXG4gICAgICBwcmV2ID0gY3VycmVudDtcbiAgICAgIGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgLy8gVGhlcmUncyBvbmx5IHdvcmsgdG8gZG8gaWYgY3VycmVudCBkYXRhVHlwZSBpcyBub24tYXV0b1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gXCIqXCIpIHtcbiAgICAgICAgICBjdXJyZW50ID0gcHJldjsgLy8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxuICAgICAgICB9IGVsc2UgaWYgKHByZXYgIT09IFwiKlwiICYmIHByZXYgIT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxuICAgICAgICAgIGNvbnYgPSBjb252ZXJ0ZXJzW3ByZXYgKyBcIiBcIiArIGN1cnJlbnRdIHx8IGNvbnZlcnRlcnNbXCIqIFwiICsgY3VycmVudF07IC8vIElmIG5vbmUgZm91bmQsIHNlZWsgYSBwYWlyXG5cbiAgICAgICAgICBpZiAoIWNvbnYpIHtcbiAgICAgICAgICAgIGZvciAoY29udjIgaW4gY29udmVydGVycykge1xuICAgICAgICAgICAgICAvLyBJZiBjb252MiBvdXRwdXRzIGN1cnJlbnRcbiAgICAgICAgICAgICAgdG1wID0gY29udjIuc3BsaXQoXCIgXCIpO1xuXG4gICAgICAgICAgICAgIGlmICh0bXBbMV0gPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcbiAgICAgICAgICAgICAgICBjb252ID0gY29udmVydGVyc1twcmV2ICsgXCIgXCIgKyB0bXBbMF1dIHx8IGNvbnZlcnRlcnNbXCIqIFwiICsgdG1wWzBdXTtcblxuICAgICAgICAgICAgICAgIGlmIChjb252KSB7XG4gICAgICAgICAgICAgICAgICAvLyBDb25kZW5zZSBlcXVpdmFsZW5jZSBjb252ZXJ0ZXJzXG4gICAgICAgICAgICAgICAgICBpZiAoY29udiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb252ID0gY29udmVydGVyc1tjb252Ml07IC8vIE90aGVyd2lzZSwgaW5zZXJ0IHRoZSBpbnRlcm1lZGlhdGUgZGF0YVR5cGVcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udmVydGVyc1tjb252Ml0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHRtcFswXTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGVzLnVuc2hpZnQodG1wWzFdKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBBcHBseSBjb252ZXJ0ZXIgKGlmIG5vdCBhbiBlcXVpdmFsZW5jZSlcblxuXG4gICAgICAgICAgaWYgKGNvbnYgIT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIFVubGVzcyBlcnJvcnMgYXJlIGFsbG93ZWQgdG8gYnViYmxlLCBjYXRjaCBhbmQgcmV0dXJuIHRoZW1cbiAgICAgICAgICAgIGlmIChjb252ICYmIHMudGhyb3dzKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gY29udihyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gY29udihyZXNwb25zZSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgc3RhdGU6IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBjb252ID8gZSA6IFwiTm8gY29udmVyc2lvbiBmcm9tIFwiICsgcHJldiArIFwiIHRvIFwiICsgY3VycmVudFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IFwic3VjY2Vzc1wiLFxuICAgICAgZGF0YTogcmVzcG9uc2VcbiAgICB9O1xuICB9XG5cbiAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgLy8gQ291bnRlciBmb3IgaG9sZGluZyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBxdWVyaWVzXG4gICAgYWN0aXZlOiAwLFxuICAgIC8vIExhc3QtTW9kaWZpZWQgaGVhZGVyIGNhY2hlIGZvciBuZXh0IHJlcXVlc3RcbiAgICBsYXN0TW9kaWZpZWQ6IHt9LFxuICAgIGV0YWc6IHt9LFxuICAgIGFqYXhTZXR0aW5nczoge1xuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgIGlzTG9jYWw6IHJsb2NhbFByb3RvY29sLnRlc3QobG9jYXRpb24ucHJvdG9jb2wpLFxuICAgICAgZ2xvYmFsOiB0cnVlLFxuICAgICAgcHJvY2Vzc0RhdGE6IHRydWUsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLFxuXG4gICAgICAvKlxuICAgICAgdGltZW91dDogMCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBkYXRhVHlwZTogbnVsbCxcbiAgICAgIHVzZXJuYW1lOiBudWxsLFxuICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICBjYWNoZTogbnVsbCxcbiAgICAgIHRocm93czogZmFsc2UsXG4gICAgICB0cmFkaXRpb25hbDogZmFsc2UsXG4gICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICovXG4gICAgICBhY2NlcHRzOiB7XG4gICAgICAgIFwiKlwiOiBhbGxUeXBlcyxcbiAgICAgICAgdGV4dDogXCJ0ZXh0L3BsYWluXCIsXG4gICAgICAgIGh0bWw6IFwidGV4dC9odG1sXCIsXG4gICAgICAgIHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXG4gICAgICAgIGpzb246IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgIH0sXG4gICAgICBjb250ZW50czoge1xuICAgICAgICB4bWw6IC9cXGJ4bWxcXGIvLFxuICAgICAgICBodG1sOiAvXFxiaHRtbC8sXG4gICAgICAgIGpzb246IC9cXGJqc29uXFxiL1xuICAgICAgfSxcbiAgICAgIHJlc3BvbnNlRmllbGRzOiB7XG4gICAgICAgIHhtbDogXCJyZXNwb25zZVhNTFwiLFxuICAgICAgICB0ZXh0OiBcInJlc3BvbnNlVGV4dFwiLFxuICAgICAgICBqc29uOiBcInJlc3BvbnNlSlNPTlwiXG4gICAgICB9LFxuICAgICAgLy8gRGF0YSBjb252ZXJ0ZXJzXG4gICAgICAvLyBLZXlzIHNlcGFyYXRlIHNvdXJjZSAob3IgY2F0Y2hhbGwgXCIqXCIpIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gICAgICBjb252ZXJ0ZXJzOiB7XG4gICAgICAgIC8vIENvbnZlcnQgYW55dGhpbmcgdG8gdGV4dFxuICAgICAgICBcIiogdGV4dFwiOiBTdHJpbmcsXG4gICAgICAgIC8vIFRleHQgdG8gaHRtbCAodHJ1ZSA9IG5vIHRyYW5zZm9ybWF0aW9uKVxuICAgICAgICBcInRleHQgaHRtbFwiOiB0cnVlLFxuICAgICAgICAvLyBFdmFsdWF0ZSB0ZXh0IGFzIGEganNvbiBleHByZXNzaW9uXG4gICAgICAgIFwidGV4dCBqc29uXCI6IEpTT04ucGFyc2UsXG4gICAgICAgIC8vIFBhcnNlIHRleHQgYXMgeG1sXG4gICAgICAgIFwidGV4dCB4bWxcIjogalF1ZXJ5LnBhcnNlWE1MXG4gICAgICB9LFxuICAgICAgLy8gRm9yIG9wdGlvbnMgdGhhdCBzaG91bGRuJ3QgYmUgZGVlcCBleHRlbmRlZDpcbiAgICAgIC8vIHlvdSBjYW4gYWRkIHlvdXIgb3duIGN1c3RvbSBvcHRpb25zIGhlcmUgaWZcbiAgICAgIC8vIGFuZCB3aGVuIHlvdSBjcmVhdGUgb25lIHRoYXQgc2hvdWxkbid0IGJlXG4gICAgICAvLyBkZWVwIGV4dGVuZGVkIChzZWUgYWpheEV4dGVuZClcbiAgICAgIGZsYXRPcHRpb25zOiB7XG4gICAgICAgIHVybDogdHJ1ZSxcbiAgICAgICAgY29udGV4dDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gQ3JlYXRlcyBhIGZ1bGwgZmxlZGdlZCBzZXR0aW5ncyBvYmplY3QgaW50byB0YXJnZXRcbiAgICAvLyB3aXRoIGJvdGggYWpheFNldHRpbmdzIGFuZCBzZXR0aW5ncyBmaWVsZHMuXG4gICAgLy8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cbiAgICBhamF4U2V0dXA6IGZ1bmN0aW9uICh0YXJnZXQsIHNldHRpbmdzKSB7XG4gICAgICByZXR1cm4gc2V0dGluZ3MgPyAvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuICAgICAgYWpheEV4dGVuZChhamF4RXh0ZW5kKHRhcmdldCwgalF1ZXJ5LmFqYXhTZXR0aW5ncyksIHNldHRpbmdzKSA6IC8vIEV4dGVuZGluZyBhamF4U2V0dGluZ3NcbiAgICAgIGFqYXhFeHRlbmQoalF1ZXJ5LmFqYXhTZXR0aW5ncywgdGFyZ2V0KTtcbiAgICB9LFxuICAgIGFqYXhQcmVmaWx0ZXI6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyhwcmVmaWx0ZXJzKSxcbiAgICBhamF4VHJhbnNwb3J0OiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHModHJhbnNwb3J0cyksXG4gICAgLy8gTWFpbiBtZXRob2RcbiAgICBhamF4OiBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAvLyBJZiB1cmwgaXMgYW4gb2JqZWN0LCBzaW11bGF0ZSBwcmUtMS41IHNpZ25hdHVyZVxuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHVybDtcbiAgICAgICAgdXJsID0gdW5kZWZpbmVkO1xuICAgICAgfSAvLyBGb3JjZSBvcHRpb25zIHRvIGJlIGFuIG9iamVjdFxuXG5cbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgdmFyIHRyYW5zcG9ydCxcbiAgICAgICAgICAvLyBVUkwgd2l0aG91dCBhbnRpLWNhY2hlIHBhcmFtXG4gICAgICBjYWNoZVVSTCxcbiAgICAgICAgICAvLyBSZXNwb25zZSBoZWFkZXJzXG4gICAgICByZXNwb25zZUhlYWRlcnNTdHJpbmcsXG4gICAgICAgICAgcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICAgIC8vIHRpbWVvdXQgaGFuZGxlXG4gICAgICB0aW1lb3V0VGltZXIsXG4gICAgICAgICAgLy8gVXJsIGNsZWFudXAgdmFyXG4gICAgICB1cmxBbmNob3IsXG4gICAgICAgICAgLy8gUmVxdWVzdCBzdGF0ZSAoYmVjb21lcyBmYWxzZSB1cG9uIHNlbmQgYW5kIHRydWUgdXBvbiBjb21wbGV0aW9uKVxuICAgICAgY29tcGxldGVkLFxuICAgICAgICAgIC8vIFRvIGtub3cgaWYgZ2xvYmFsIGV2ZW50cyBhcmUgdG8gYmUgZGlzcGF0Y2hlZFxuICAgICAgZmlyZUdsb2JhbHMsXG4gICAgICAgICAgLy8gTG9vcCB2YXJpYWJsZVxuICAgICAgaSxcbiAgICAgICAgICAvLyB1bmNhY2hlZCBwYXJ0IG9mIHRoZSB1cmxcbiAgICAgIHVuY2FjaGVkLFxuICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZmluYWwgb3B0aW9ucyBvYmplY3RcbiAgICAgIHMgPSBqUXVlcnkuYWpheFNldHVwKHt9LCBvcHRpb25zKSxcbiAgICAgICAgICAvLyBDYWxsYmFja3MgY29udGV4dFxuICAgICAgY2FsbGJhY2tDb250ZXh0ID0gcy5jb250ZXh0IHx8IHMsXG4gICAgICAgICAgLy8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxuICAgICAgZ2xvYmFsRXZlbnRDb250ZXh0ID0gcy5jb250ZXh0ICYmIChjYWxsYmFja0NvbnRleHQubm9kZVR5cGUgfHwgY2FsbGJhY2tDb250ZXh0LmpxdWVyeSkgPyBqUXVlcnkoY2FsbGJhY2tDb250ZXh0KSA6IGpRdWVyeS5ldmVudCxcbiAgICAgICAgICAvLyBEZWZlcnJlZHNcbiAgICAgIGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCksXG4gICAgICAgICAgY29tcGxldGVEZWZlcnJlZCA9IGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcbiAgICAgICAgICAvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuICAgICAgc3RhdHVzQ29kZSA9IHMuc3RhdHVzQ29kZSB8fCB7fSxcbiAgICAgICAgICAvLyBIZWFkZXJzICh0aGV5IGFyZSBzZW50IGFsbCBhdCBvbmNlKVxuICAgICAgcmVxdWVzdEhlYWRlcnMgPSB7fSxcbiAgICAgICAgICByZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXG4gICAgICAgICAgLy8gRGVmYXVsdCBhYm9ydCBtZXNzYWdlXG4gICAgICBzdHJBYm9ydCA9IFwiY2FuY2VsZWRcIixcbiAgICAgICAgICAvLyBGYWtlIHhoclxuICAgICAganFYSFIgPSB7XG4gICAgICAgIHJlYWR5U3RhdGU6IDAsXG4gICAgICAgIC8vIEJ1aWxkcyBoZWFkZXJzIGhhc2h0YWJsZSBpZiBuZWVkZWRcbiAgICAgICAgZ2V0UmVzcG9uc2VIZWFkZXI6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgbWF0Y2g7XG5cbiAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlSGVhZGVycykge1xuICAgICAgICAgICAgICByZXNwb25zZUhlYWRlcnMgPSB7fTtcblxuICAgICAgICAgICAgICB3aGlsZSAobWF0Y2ggPSByaGVhZGVycy5leGVjKHJlc3BvbnNlSGVhZGVyc1N0cmluZykpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZUhlYWRlcnNbbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSArIFwiIFwiXSA9IChyZXNwb25zZUhlYWRlcnNbbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSArIFwiIFwiXSB8fCBbXSkuY29uY2F0KG1hdGNoWzJdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaCA9IHJlc3BvbnNlSGVhZGVyc1trZXkudG9Mb3dlckNhc2UoKSArIFwiIFwiXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbWF0Y2ggPT0gbnVsbCA/IG51bGwgOiBtYXRjaC5qb2luKFwiLCBcIik7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJhdyBzdHJpbmdcbiAgICAgICAgZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCA/IHJlc3BvbnNlSGVhZGVyc1N0cmluZyA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIENhY2hlcyB0aGUgaGVhZGVyXG4gICAgICAgIHNldFJlcXVlc3RIZWFkZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgIGlmIChjb21wbGV0ZWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgbmFtZSA9IHJlcXVlc3RIZWFkZXJzTmFtZXNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IHJlcXVlc3RIZWFkZXJzTmFtZXNbbmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBuYW1lO1xuICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gT3ZlcnJpZGVzIHJlc3BvbnNlIGNvbnRlbnQtdHlwZSBoZWFkZXJcbiAgICAgICAgb3ZlcnJpZGVNaW1lVHlwZTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICBpZiAoY29tcGxldGVkID09IG51bGwpIHtcbiAgICAgICAgICAgIHMubWltZVR5cGUgPSB0eXBlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICAvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuICAgICAgICBzdGF0dXNDb2RlOiBmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgICAgdmFyIGNvZGU7XG5cbiAgICAgICAgICBpZiAobWFwKSB7XG4gICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgIC8vIEV4ZWN1dGUgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrc1xuICAgICAgICAgICAgICBqcVhIUi5hbHdheXMobWFwW2pxWEhSLnN0YXR1c10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gTGF6eS1hZGQgdGhlIG5ldyBjYWxsYmFja3MgaW4gYSB3YXkgdGhhdCBwcmVzZXJ2ZXMgb2xkIG9uZXNcbiAgICAgICAgICAgICAgZm9yIChjb2RlIGluIG1hcCkge1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGVbY29kZV0gPSBbc3RhdHVzQ29kZVtjb2RlXSwgbWFwW2NvZGVdXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICAvLyBDYW5jZWwgdGhlIHJlcXVlc3RcbiAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIChzdGF0dXNUZXh0KSB7XG4gICAgICAgICAgdmFyIGZpbmFsVGV4dCA9IHN0YXR1c1RleHQgfHwgc3RyQWJvcnQ7XG5cbiAgICAgICAgICBpZiAodHJhbnNwb3J0KSB7XG4gICAgICAgICAgICB0cmFuc3BvcnQuYWJvcnQoZmluYWxUZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb25lKDAsIGZpbmFsVGV4dCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH07IC8vIEF0dGFjaCBkZWZlcnJlZHNcblxuICAgICAgZGVmZXJyZWQucHJvbWlzZShqcVhIUik7IC8vIEFkZCBwcm90b2NvbCBpZiBub3QgcHJvdmlkZWQgKHByZWZpbHRlcnMgbWlnaHQgZXhwZWN0IGl0KVxuICAgICAgLy8gSGFuZGxlIGZhbHN5IHVybCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0ICgjMTAwOTM6IGNvbnNpc3RlbmN5IHdpdGggb2xkIHNpZ25hdHVyZSlcbiAgICAgIC8vIFdlIGFsc28gdXNlIHRoZSB1cmwgcGFyYW1ldGVyIGlmIGF2YWlsYWJsZVxuXG4gICAgICBzLnVybCA9ICgodXJsIHx8IHMudXJsIHx8IGxvY2F0aW9uLmhyZWYpICsgXCJcIikucmVwbGFjZShycHJvdG9jb2wsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiKTsgLy8gQWxpYXMgbWV0aG9kIG9wdGlvbiB0byB0eXBlIGFzIHBlciB0aWNrZXQgIzEyMDA0XG5cbiAgICAgIHMudHlwZSA9IG9wdGlvbnMubWV0aG9kIHx8IG9wdGlvbnMudHlwZSB8fCBzLm1ldGhvZCB8fCBzLnR5cGU7IC8vIEV4dHJhY3QgZGF0YVR5cGVzIGxpc3RcblxuICAgICAgcy5kYXRhVHlwZXMgPSAocy5kYXRhVHlwZSB8fCBcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXCJcIl07IC8vIEEgY3Jvc3MtZG9tYWluIHJlcXVlc3QgaXMgaW4gb3JkZXIgd2hlbiB0aGUgb3JpZ2luIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgb3JpZ2luLlxuXG4gICAgICBpZiAocy5jcm9zc0RvbWFpbiA9PSBudWxsKSB7XG4gICAgICAgIHVybEFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpOyAvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSwgRWRnZSAxMiAtIDE1XG4gICAgICAgIC8vIElFIHRocm93cyBleGNlcHRpb24gb24gYWNjZXNzaW5nIHRoZSBocmVmIHByb3BlcnR5IGlmIHVybCBpcyBtYWxmb3JtZWQsXG4gICAgICAgIC8vIGUuZy4gaHR0cDovL2V4YW1wbGUuY29tOjgweC9cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHVybEFuY2hvci5ocmVmID0gcy51cmw7IC8vIFN1cHBvcnQ6IElFIDw9OCAtIDExIG9ubHlcbiAgICAgICAgICAvLyBBbmNob3IncyBob3N0IHByb3BlcnR5IGlzbid0IGNvcnJlY3RseSBzZXQgd2hlbiBzLnVybCBpcyByZWxhdGl2ZVxuXG4gICAgICAgICAgdXJsQW5jaG9yLmhyZWYgPSB1cmxBbmNob3IuaHJlZjtcbiAgICAgICAgICBzLmNyb3NzRG9tYWluID0gb3JpZ2luQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgb3JpZ2luQW5jaG9yLmhvc3QgIT09IHVybEFuY2hvci5wcm90b2NvbCArIFwiLy9cIiArIHVybEFuY2hvci5ob3N0O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IgcGFyc2luZyB0aGUgVVJMLCBhc3N1bWUgaXQgaXMgY3Jvc3NEb21haW4sXG4gICAgICAgICAgLy8gaXQgY2FuIGJlIHJlamVjdGVkIGJ5IHRoZSB0cmFuc3BvcnQgaWYgaXQgaXMgaW52YWxpZFxuICAgICAgICAgIHMuY3Jvc3NEb21haW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IC8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuXG5cbiAgICAgIGlmIChzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJiB0eXBlb2Ygcy5kYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHMuZGF0YSA9IGpRdWVyeS5wYXJhbShzLmRhdGEsIHMudHJhZGl0aW9uYWwpO1xuICAgICAgfSAvLyBBcHBseSBwcmVmaWx0ZXJzXG5cblxuICAgICAgaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMocHJlZmlsdGVycywgcywgb3B0aW9ucywganFYSFIpOyAvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhIHByZWZpbHRlciwgc3RvcCB0aGVyZVxuXG4gICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIHJldHVybiBqcVhIUjtcbiAgICAgIH0gLy8gV2UgY2FuIGZpcmUgZ2xvYmFsIGV2ZW50cyBhcyBvZiBub3cgaWYgYXNrZWQgdG9cbiAgICAgIC8vIERvbid0IGZpcmUgZXZlbnRzIGlmIGpRdWVyeS5ldmVudCBpcyB1bmRlZmluZWQgaW4gYW4gQU1ELXVzYWdlIHNjZW5hcmlvICgjMTUxMTgpXG5cblxuICAgICAgZmlyZUdsb2JhbHMgPSBqUXVlcnkuZXZlbnQgJiYgcy5nbG9iYWw7IC8vIFdhdGNoIGZvciBhIG5ldyBzZXQgb2YgcmVxdWVzdHNcblxuICAgICAgaWYgKGZpcmVHbG9iYWxzICYmIGpRdWVyeS5hY3RpdmUrKyA9PT0gMCkge1xuICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKTtcbiAgICAgIH0gLy8gVXBwZXJjYXNlIHRoZSB0eXBlXG5cblxuICAgICAgcy50eXBlID0gcy50eXBlLnRvVXBwZXJDYXNlKCk7IC8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG5cbiAgICAgIHMuaGFzQ29udGVudCA9ICFybm9Db250ZW50LnRlc3Qocy50eXBlKTsgLy8gU2F2ZSB0aGUgVVJMIGluIGNhc2Ugd2UncmUgdG95aW5nIHdpdGggdGhlIElmLU1vZGlmaWVkLVNpbmNlXG4gICAgICAvLyBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIgbGF0ZXIgb25cbiAgICAgIC8vIFJlbW92ZSBoYXNoIHRvIHNpbXBsaWZ5IHVybCBtYW5pcHVsYXRpb25cblxuICAgICAgY2FjaGVVUkwgPSBzLnVybC5yZXBsYWNlKHJoYXNoLCBcIlwiKTsgLy8gTW9yZSBvcHRpb25zIGhhbmRsaW5nIGZvciByZXF1ZXN0cyB3aXRoIG5vIGNvbnRlbnRcblxuICAgICAgaWYgKCFzLmhhc0NvbnRlbnQpIHtcbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIGhhc2ggc28gd2UgY2FuIHB1dCBpdCBiYWNrXG4gICAgICAgIHVuY2FjaGVkID0gcy51cmwuc2xpY2UoY2FjaGVVUkwubGVuZ3RoKTsgLy8gSWYgZGF0YSBpcyBhdmFpbGFibGUgYW5kIHNob3VsZCBiZSBwcm9jZXNzZWQsIGFwcGVuZCBkYXRhIHRvIHVybFxuXG4gICAgICAgIGlmIChzLmRhdGEgJiYgKHMucHJvY2Vzc0RhdGEgfHwgdHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICBjYWNoZVVSTCArPSAocnF1ZXJ5LnRlc3QoY2FjaGVVUkwpID8gXCImXCIgOiBcIj9cIikgKyBzLmRhdGE7IC8vICM5NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcblxuICAgICAgICAgIGRlbGV0ZSBzLmRhdGE7XG4gICAgICAgIH0gLy8gQWRkIG9yIHVwZGF0ZSBhbnRpLWNhY2hlIHBhcmFtIGlmIG5lZWRlZFxuXG5cbiAgICAgICAgaWYgKHMuY2FjaGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY2FjaGVVUkwgPSBjYWNoZVVSTC5yZXBsYWNlKHJhbnRpQ2FjaGUsIFwiJDFcIik7XG4gICAgICAgICAgdW5jYWNoZWQgPSAocnF1ZXJ5LnRlc3QoY2FjaGVVUkwpID8gXCImXCIgOiBcIj9cIikgKyBcIl89XCIgKyBub25jZSsrICsgdW5jYWNoZWQ7XG4gICAgICAgIH0gLy8gUHV0IGhhc2ggYW5kIGFudGktY2FjaGUgb24gdGhlIFVSTCB0aGF0IHdpbGwgYmUgcmVxdWVzdGVkIChnaC0xNzMyKVxuXG5cbiAgICAgICAgcy51cmwgPSBjYWNoZVVSTCArIHVuY2FjaGVkOyAvLyBDaGFuZ2UgJyUyMCcgdG8gJysnIGlmIHRoaXMgaXMgZW5jb2RlZCBmb3JtIGJvZHkgY29udGVudCAoZ2gtMjY1OClcbiAgICAgIH0gZWxzZSBpZiAocy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiYgKHMuY29udGVudFR5cGUgfHwgXCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSA9PT0gMCkge1xuICAgICAgICBzLmRhdGEgPSBzLmRhdGEucmVwbGFjZShyMjAsIFwiK1wiKTtcbiAgICAgIH0gLy8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblxuXG4gICAgICBpZiAocy5pZk1vZGlmaWVkKSB7XG4gICAgICAgIGlmIChqUXVlcnkubGFzdE1vZGlmaWVkW2NhY2hlVVJMXSkge1xuICAgICAgICAgIGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLCBqUXVlcnkubGFzdE1vZGlmaWVkW2NhY2hlVVJMXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoalF1ZXJ5LmV0YWdbY2FjaGVVUkxdKSB7XG4gICAgICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIiwgalF1ZXJ5LmV0YWdbY2FjaGVVUkxdKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcblxuXG4gICAgICBpZiAocy5kYXRhICYmIHMuaGFzQ29udGVudCAmJiBzLmNvbnRlbnRUeXBlICE9PSBmYWxzZSB8fCBvcHRpb25zLmNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgcy5jb250ZW50VHlwZSk7XG4gICAgICB9IC8vIFNldCB0aGUgQWNjZXB0cyBoZWFkZXIgZm9yIHRoZSBzZXJ2ZXIsIGRlcGVuZGluZyBvbiB0aGUgZGF0YVR5cGVcblxuXG4gICAgICBqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIHMuZGF0YVR5cGVzWzBdICYmIHMuYWNjZXB0c1tzLmRhdGFUeXBlc1swXV0gPyBzLmFjY2VwdHNbcy5kYXRhVHlwZXNbMF1dICsgKHMuZGF0YVR5cGVzWzBdICE9PSBcIipcIiA/IFwiLCBcIiArIGFsbFR5cGVzICsgXCI7IHE9MC4wMVwiIDogXCJcIikgOiBzLmFjY2VwdHNbXCIqXCJdKTsgLy8gQ2hlY2sgZm9yIGhlYWRlcnMgb3B0aW9uXG5cbiAgICAgIGZvciAoaSBpbiBzLmhlYWRlcnMpIHtcbiAgICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlcihpLCBzLmhlYWRlcnNbaV0pO1xuICAgICAgfSAvLyBBbGxvdyBjdXN0b20gaGVhZGVycy9taW1ldHlwZXMgYW5kIGVhcmx5IGFib3J0XG5cblxuICAgICAgaWYgKHMuYmVmb3JlU2VuZCAmJiAocy5iZWZvcmVTZW5kLmNhbGwoY2FsbGJhY2tDb250ZXh0LCBqcVhIUiwgcykgPT09IGZhbHNlIHx8IGNvbXBsZXRlZCkpIHtcbiAgICAgICAgLy8gQWJvcnQgaWYgbm90IGRvbmUgYWxyZWFkeSBhbmQgcmV0dXJuXG4gICAgICAgIHJldHVybiBqcVhIUi5hYm9ydCgpO1xuICAgICAgfSAvLyBBYm9ydGluZyBpcyBubyBsb25nZXIgYSBjYW5jZWxsYXRpb25cblxuXG4gICAgICBzdHJBYm9ydCA9IFwiYWJvcnRcIjsgLy8gSW5zdGFsbCBjYWxsYmFja3Mgb24gZGVmZXJyZWRzXG5cbiAgICAgIGNvbXBsZXRlRGVmZXJyZWQuYWRkKHMuY29tcGxldGUpO1xuICAgICAganFYSFIuZG9uZShzLnN1Y2Nlc3MpO1xuICAgICAganFYSFIuZmFpbChzLmVycm9yKTsgLy8gR2V0IHRyYW5zcG9ydFxuXG4gICAgICB0cmFuc3BvcnQgPSBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyh0cmFuc3BvcnRzLCBzLCBvcHRpb25zLCBqcVhIUik7IC8vIElmIG5vIHRyYW5zcG9ydCwgd2UgYXV0by1hYm9ydFxuXG4gICAgICBpZiAoIXRyYW5zcG9ydCkge1xuICAgICAgICBkb25lKC0xLCBcIk5vIFRyYW5zcG9ydFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGpxWEhSLnJlYWR5U3RhdGUgPSAxOyAvLyBTZW5kIGdsb2JhbCBldmVudFxuXG4gICAgICAgIGlmIChmaXJlR2xvYmFscykge1xuICAgICAgICAgIGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKFwiYWpheFNlbmRcIiwgW2pxWEhSLCBzXSk7XG4gICAgICAgIH0gLy8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYWpheFNlbmQsIHN0b3AgdGhlcmVcblxuXG4gICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICByZXR1cm4ganFYSFI7XG4gICAgICAgIH0gLy8gVGltZW91dFxuXG5cbiAgICAgICAgaWYgKHMuYXN5bmMgJiYgcy50aW1lb3V0ID4gMCkge1xuICAgICAgICAgIHRpbWVvdXRUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpxWEhSLmFib3J0KFwidGltZW91dFwiKTtcbiAgICAgICAgICB9LCBzLnRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB0cmFuc3BvcnQuc2VuZChyZXF1ZXN0SGVhZGVycywgZG9uZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBSZXRocm93IHBvc3QtY29tcGxldGlvbiBleGNlcHRpb25zXG4gICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9IC8vIFByb3BhZ2F0ZSBvdGhlcnMgYXMgcmVzdWx0c1xuXG5cbiAgICAgICAgICBkb25lKC0xLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBDYWxsYmFjayBmb3Igd2hlbiBldmVyeXRoaW5nIGlzIGRvbmVcblxuXG4gICAgICBmdW5jdGlvbiBkb25lKHN0YXR1cywgbmF0aXZlU3RhdHVzVGV4dCwgcmVzcG9uc2VzLCBoZWFkZXJzKSB7XG4gICAgICAgIHZhciBpc1N1Y2Nlc3MsXG4gICAgICAgICAgICBzdWNjZXNzLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIG1vZGlmaWVkLFxuICAgICAgICAgICAgc3RhdHVzVGV4dCA9IG5hdGl2ZVN0YXR1c1RleHQ7IC8vIElnbm9yZSByZXBlYXQgaW52b2NhdGlvbnNcblxuICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcGxldGVkID0gdHJ1ZTsgLy8gQ2xlYXIgdGltZW91dCBpZiBpdCBleGlzdHNcblxuICAgICAgICBpZiAodGltZW91dFRpbWVyKSB7XG4gICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpO1xuICAgICAgICB9IC8vIERlcmVmZXJlbmNlIHRyYW5zcG9ydCBmb3IgZWFybHkgZ2FyYmFnZSBjb2xsZWN0aW9uXG4gICAgICAgIC8vIChubyBtYXR0ZXIgaG93IGxvbmcgdGhlIGpxWEhSIG9iamVjdCB3aWxsIGJlIHVzZWQpXG5cblxuICAgICAgICB0cmFuc3BvcnQgPSB1bmRlZmluZWQ7IC8vIENhY2hlIHJlc3BvbnNlIGhlYWRlcnNcblxuICAgICAgICByZXNwb25zZUhlYWRlcnNTdHJpbmcgPSBoZWFkZXJzIHx8IFwiXCI7IC8vIFNldCByZWFkeVN0YXRlXG5cbiAgICAgICAganFYSFIucmVhZHlTdGF0ZSA9IHN0YXR1cyA+IDAgPyA0IDogMDsgLy8gRGV0ZXJtaW5lIGlmIHN1Y2Nlc3NmdWxcblxuICAgICAgICBpc1N1Y2Nlc3MgPSBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCB8fCBzdGF0dXMgPT09IDMwNDsgLy8gR2V0IHJlc3BvbnNlIGRhdGFcblxuICAgICAgICBpZiAocmVzcG9uc2VzKSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBhamF4SGFuZGxlUmVzcG9uc2VzKHMsIGpxWEhSLCByZXNwb25zZXMpO1xuICAgICAgICB9IC8vIENvbnZlcnQgbm8gbWF0dGVyIHdoYXQgKHRoYXQgd2F5IHJlc3BvbnNlWFhYIGZpZWxkcyBhcmUgYWx3YXlzIHNldClcblxuXG4gICAgICAgIHJlc3BvbnNlID0gYWpheENvbnZlcnQocywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MpOyAvLyBJZiBzdWNjZXNzZnVsLCBoYW5kbGUgdHlwZSBjaGFpbmluZ1xuXG4gICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuICAgICAgICAgIGlmIChzLmlmTW9kaWZpZWQpIHtcbiAgICAgICAgICAgIG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpO1xuXG4gICAgICAgICAgICBpZiAobW9kaWZpZWQpIHtcbiAgICAgICAgICAgICAgalF1ZXJ5Lmxhc3RNb2RpZmllZFtjYWNoZVVSTF0gPSBtb2RpZmllZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIik7XG5cbiAgICAgICAgICAgIGlmIChtb2RpZmllZCkge1xuICAgICAgICAgICAgICBqUXVlcnkuZXRhZ1tjYWNoZVVSTF0gPSBtb2RpZmllZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIGlmIG5vIGNvbnRlbnRcblxuXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjA0IHx8IHMudHlwZSA9PT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSBcIm5vY29udGVudFwiOyAvLyBpZiBub3QgbW9kaWZpZWRcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMzA0KSB7XG4gICAgICAgICAgICBzdGF0dXNUZXh0ID0gXCJub3Rtb2RpZmllZFwiOyAvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXRlO1xuICAgICAgICAgICAgc3VjY2VzcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBlcnJvciA9IHJlc3BvbnNlLmVycm9yO1xuICAgICAgICAgICAgaXNTdWNjZXNzID0gIWVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBFeHRyYWN0IGVycm9yIGZyb20gc3RhdHVzVGV4dCBhbmQgbm9ybWFsaXplIGZvciBub24tYWJvcnRzXG4gICAgICAgICAgZXJyb3IgPSBzdGF0dXNUZXh0O1xuXG4gICAgICAgICAgaWYgKHN0YXR1cyB8fCAhc3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgc3RhdHVzVGV4dCA9IFwiZXJyb3JcIjtcblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA8IDApIHtcbiAgICAgICAgICAgICAgc3RhdHVzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gU2V0IGRhdGEgZm9yIHRoZSBmYWtlIHhociBvYmplY3RcblxuXG4gICAgICAgIGpxWEhSLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAganFYSFIuc3RhdHVzVGV4dCA9IChuYXRpdmVTdGF0dXNUZXh0IHx8IHN0YXR1c1RleHQpICsgXCJcIjsgLy8gU3VjY2Vzcy9FcnJvclxuXG4gICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlV2l0aChjYWxsYmFja0NvbnRleHQsIFtzdWNjZXNzLCBzdGF0dXNUZXh0LCBqcVhIUl0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdFdpdGgoY2FsbGJhY2tDb250ZXh0LCBbanFYSFIsIHN0YXR1c1RleHQsIGVycm9yXSk7XG4gICAgICAgIH0gLy8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3NcblxuXG4gICAgICAgIGpxWEhSLnN0YXR1c0NvZGUoc3RhdHVzQ29kZSk7XG4gICAgICAgIHN0YXR1c0NvZGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKGZpcmVHbG9iYWxzKSB7XG4gICAgICAgICAgZ2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoaXNTdWNjZXNzID8gXCJhamF4U3VjY2Vzc1wiIDogXCJhamF4RXJyb3JcIiwgW2pxWEhSLCBzLCBpc1N1Y2Nlc3MgPyBzdWNjZXNzIDogZXJyb3JdKTtcbiAgICAgICAgfSAvLyBDb21wbGV0ZVxuXG5cbiAgICAgICAgY29tcGxldGVEZWZlcnJlZC5maXJlV2l0aChjYWxsYmFja0NvbnRleHQsIFtqcVhIUiwgc3RhdHVzVGV4dF0pO1xuXG4gICAgICAgIGlmIChmaXJlR2xvYmFscykge1xuICAgICAgICAgIGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsIFtqcVhIUiwgc10pOyAvLyBIYW5kbGUgdGhlIGdsb2JhbCBBSkFYIGNvdW50ZXJcblxuICAgICAgICAgIGlmICghIC0talF1ZXJ5LmFjdGl2ZSkge1xuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGpxWEhSO1xuICAgIH0sXG4gICAgZ2V0SlNPTjogZnVuY3Rpb24gKHVybCwgZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBqUXVlcnkuZ2V0KHVybCwgZGF0YSwgY2FsbGJhY2ssIFwianNvblwiKTtcbiAgICB9LFxuICAgIGdldFNjcmlwdDogZnVuY3Rpb24gKHVybCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBqUXVlcnkuZ2V0KHVybCwgdW5kZWZpbmVkLCBjYWxsYmFjaywgXCJzY3JpcHRcIik7XG4gICAgfVxuICB9KTtcbiAgalF1ZXJ5LmVhY2goW1wiZ2V0XCIsIFwicG9zdFwiXSwgZnVuY3Rpb24gKGksIG1ldGhvZCkge1xuICAgIGpRdWVyeVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY2FsbGJhY2ssIHR5cGUpIHtcbiAgICAgIC8vIFNoaWZ0IGFyZ3VtZW50cyBpZiBkYXRhIGFyZ3VtZW50IHdhcyBvbWl0dGVkXG4gICAgICBpZiAoaXNGdW5jdGlvbihkYXRhKSkge1xuICAgICAgICB0eXBlID0gdHlwZSB8fCBjYWxsYmFjaztcbiAgICAgICAgY2FsbGJhY2sgPSBkYXRhO1xuICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfSAvLyBUaGUgdXJsIGNhbiBiZSBhbiBvcHRpb25zIG9iamVjdCAod2hpY2ggdGhlbiBtdXN0IGhhdmUgLnVybClcblxuXG4gICAgICByZXR1cm4galF1ZXJ5LmFqYXgoalF1ZXJ5LmV4dGVuZCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiBtZXRob2QsXG4gICAgICAgIGRhdGFUeXBlOiB0eXBlLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBzdWNjZXNzOiBjYWxsYmFja1xuICAgICAgfSwgalF1ZXJ5LmlzUGxhaW5PYmplY3QodXJsKSAmJiB1cmwpKTtcbiAgICB9O1xuICB9KTtcblxuICBqUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGpRdWVyeS5hamF4KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgLy8gTWFrZSB0aGlzIGV4cGxpY2l0LCBzaW5jZSB1c2VyIGNhbiBvdmVycmlkZSB0aGlzIHRocm91Z2ggYWpheFNldHVwICgjMTEyNjQpXG4gICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgZGF0YVR5cGU6IFwic2NyaXB0XCIsXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgIGFzeW5jOiBmYWxzZSxcbiAgICAgIGdsb2JhbDogZmFsc2UsXG4gICAgICAvLyBPbmx5IGV2YWx1YXRlIHRoZSByZXNwb25zZSBpZiBpdCBpcyBzdWNjZXNzZnVsIChnaC00MTI2KVxuICAgICAgLy8gZGF0YUZpbHRlciBpcyBub3QgaW52b2tlZCBmb3IgZmFpbHVyZSByZXNwb25zZXMsIHNvIHVzaW5nIGl0IGluc3RlYWRcbiAgICAgIC8vIG9mIHRoZSBkZWZhdWx0IGNvbnZlcnRlciBpcyBrbHVkZ3kgYnV0IGl0IHdvcmtzLlxuICAgICAgY29udmVydGVyczoge1xuICAgICAgICBcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uICgpIHt9XG4gICAgICB9LFxuICAgICAgZGF0YUZpbHRlcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGpRdWVyeS5nbG9iYWxFdmFsKHJlc3BvbnNlLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICB3cmFwQWxsOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgdmFyIHdyYXA7XG5cbiAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGh0bWwpKSB7XG4gICAgICAgICAgaHRtbCA9IGh0bWwuY2FsbCh0aGlzWzBdKTtcbiAgICAgICAgfSAvLyBUaGUgZWxlbWVudHMgdG8gd3JhcCB0aGUgdGFyZ2V0IGFyb3VuZFxuXG5cbiAgICAgICAgd3JhcCA9IGpRdWVyeShodG1sLCB0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKHRydWUpO1xuXG4gICAgICAgIGlmICh0aGlzWzBdLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICB3cmFwLmluc2VydEJlZm9yZSh0aGlzWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdyYXAubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZWxlbSA9IHRoaXM7XG5cbiAgICAgICAgICB3aGlsZSAoZWxlbS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgZWxlbSA9IGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH0pLmFwcGVuZCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB3cmFwSW5uZXI6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihodG1sKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgalF1ZXJ5KHRoaXMpLndyYXBJbm5lcihodG1sLmNhbGwodGhpcywgaSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0galF1ZXJ5KHRoaXMpLFxuICAgICAgICAgICAgY29udGVudHMgPSBzZWxmLmNvbnRlbnRzKCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRlbnRzLndyYXBBbGwoaHRtbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5hcHBlbmQoaHRtbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgd3JhcDogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgIHZhciBodG1sSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oaHRtbCk7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzKS53cmFwQWxsKGh0bWxJc0Z1bmN0aW9uID8gaHRtbC5jYWxsKHRoaXMsIGkpIDogaHRtbCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHVud3JhcDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICB0aGlzLnBhcmVudChzZWxlY3Rvcikubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSk7XG5cbiAgalF1ZXJ5LmV4cHIucHNldWRvcy5oaWRkZW4gPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIHJldHVybiAhalF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlKGVsZW0pO1xuICB9O1xuXG4gIGpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgcmV0dXJuICEhKGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG4gIH07XG5cbiAgalF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfTtcblxuICB2YXIgeGhyU3VjY2Vzc1N0YXR1cyA9IHtcbiAgICAvLyBGaWxlIHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIGNvZGUgMCwgYXNzdW1lIDIwMFxuICAgIDA6IDIwMCxcbiAgICAvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuICAgIC8vICMxNDUwOiBzb21ldGltZXMgSUUgcmV0dXJucyAxMjIzIHdoZW4gaXQgc2hvdWxkIGJlIDIwNFxuICAgIDEyMjM6IDIwNFxuICB9LFxuICAgICAgeGhyU3VwcG9ydGVkID0galF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIoKTtcbiAgc3VwcG9ydC5jb3JzID0gISF4aHJTdXBwb3J0ZWQgJiYgXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHJTdXBwb3J0ZWQ7XG4gIHN1cHBvcnQuYWpheCA9IHhoclN1cHBvcnRlZCA9ICEheGhyU3VwcG9ydGVkO1xuICBqUXVlcnkuYWpheFRyYW5zcG9ydChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBjYWxsYmFjaywgZXJyb3JDYWxsYmFjazsgLy8gQ3Jvc3MgZG9tYWluIG9ubHkgYWxsb3dlZCBpZiBzdXBwb3J0ZWQgdGhyb3VnaCBYTUxIdHRwUmVxdWVzdFxuXG4gICAgaWYgKHN1cHBvcnQuY29ycyB8fCB4aHJTdXBwb3J0ZWQgJiYgIW9wdGlvbnMuY3Jvc3NEb21haW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlbmQ6IGZ1bmN0aW9uIChoZWFkZXJzLCBjb21wbGV0ZSkge1xuICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICB4aHIgPSBvcHRpb25zLnhocigpO1xuICAgICAgICAgIHhoci5vcGVuKG9wdGlvbnMudHlwZSwgb3B0aW9ucy51cmwsIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlcm5hbWUsIG9wdGlvbnMucGFzc3dvcmQpOyAvLyBBcHBseSBjdXN0b20gZmllbGRzIGlmIHByb3ZpZGVkXG5cbiAgICAgICAgICBpZiAob3B0aW9ucy54aHJGaWVsZHMpIHtcbiAgICAgICAgICAgIGZvciAoaSBpbiBvcHRpb25zLnhockZpZWxkcykge1xuICAgICAgICAgICAgICB4aHJbaV0gPSBvcHRpb25zLnhockZpZWxkc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIE92ZXJyaWRlIG1pbWUgdHlwZSBpZiBuZWVkZWRcblxuXG4gICAgICAgICAgaWYgKG9wdGlvbnMubWltZVR5cGUgJiYgeGhyLm92ZXJyaWRlTWltZVR5cGUpIHtcbiAgICAgICAgICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKG9wdGlvbnMubWltZVR5cGUpO1xuICAgICAgICAgIH0gLy8gWC1SZXF1ZXN0ZWQtV2l0aCBoZWFkZXJcbiAgICAgICAgICAvLyBGb3IgY3Jvc3MtZG9tYWluIHJlcXVlc3RzLCBzZWVpbmcgYXMgY29uZGl0aW9ucyBmb3IgYSBwcmVmbGlnaHQgYXJlXG4gICAgICAgICAgLy8gYWtpbiB0byBhIGppZ3NhdyBwdXp6bGUsIHdlIHNpbXBseSBuZXZlciBzZXQgaXQgdG8gYmUgc3VyZS5cbiAgICAgICAgICAvLyAoaXQgY2FuIGFsd2F5cyBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcyBvciBldmVuIHVzaW5nIGFqYXhTZXR1cClcbiAgICAgICAgICAvLyBGb3Igc2FtZS1kb21haW4gcmVxdWVzdHMsIHdvbid0IGNoYW5nZSBoZWFkZXIgaWYgYWxyZWFkeSBwcm92aWRlZC5cblxuXG4gICAgICAgICAgaWYgKCFvcHRpb25zLmNyb3NzRG9tYWluICYmICFoZWFkZXJzW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXSkge1xuICAgICAgICAgICAgaGVhZGVyc1tcIlgtUmVxdWVzdGVkLVdpdGhcIl0gPSBcIlhNTEh0dHBSZXF1ZXN0XCI7XG4gICAgICAgICAgfSAvLyBTZXQgaGVhZGVyc1xuXG5cbiAgICAgICAgICBmb3IgKGkgaW4gaGVhZGVycykge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgaGVhZGVyc1tpXSk7XG4gICAgICAgICAgfSAvLyBDYWxsYmFja1xuXG5cbiAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGVycm9yQ2FsbGJhY2sgPSB4aHIub25sb2FkID0geGhyLm9uZXJyb3IgPSB4aHIub25hYm9ydCA9IHhoci5vbnRpbWVvdXQgPSB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcImFib3J0XCIpIHtcbiAgICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuICAgICAgICAgICAgICAgICAgLy8gT24gYSBtYW51YWwgbmF0aXZlIGFib3J0LCBJRTkgdGhyb3dzXG4gICAgICAgICAgICAgICAgICAvLyBlcnJvcnMgb24gYW55IHByb3BlcnR5IGFjY2VzcyB0aGF0IGlzIG5vdCByZWFkeVN0YXRlXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHhoci5zdGF0dXMgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoMCwgXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCAvLyBGaWxlOiBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyAwOyBzZWUgIzg2MDUsICMxNDIwN1xuICAgICAgICAgICAgICAgICAgICB4aHIuc3RhdHVzLCB4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKHhoclN1Y2Nlc3NTdGF0dXNbeGhyLnN0YXR1c10gfHwgeGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQsIC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gICAgICAgICAgICAgICAgICAvLyBJRTkgaGFzIG5vIFhIUjIgYnV0IHRocm93cyBvbiBiaW5hcnkgKHRyYWMtMTE0MjYpXG4gICAgICAgICAgICAgICAgICAvLyBGb3IgWEhSMiBub24tdGV4dCwgbGV0IHRoZSBjYWxsZXIgaGFuZGxlIGl0IChnaC0yNDk4KVxuICAgICAgICAgICAgICAgICAgKHhoci5yZXNwb25zZVR5cGUgfHwgXCJ0ZXh0XCIpICE9PSBcInRleHRcIiB8fCB0eXBlb2YgeGhyLnJlc3BvbnNlVGV4dCAhPT0gXCJzdHJpbmdcIiA/IHtcbiAgICAgICAgICAgICAgICAgICAgYmluYXJ5OiB4aHIucmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgICAgIH0sIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07IC8vIExpc3RlbiB0byBldmVudHNcblxuXG4gICAgICAgICAgeGhyLm9ubG9hZCA9IGNhbGxiYWNrKCk7XG4gICAgICAgICAgZXJyb3JDYWxsYmFjayA9IHhoci5vbmVycm9yID0geGhyLm9udGltZW91dCA9IGNhbGxiYWNrKFwiZXJyb3JcIik7IC8vIFN1cHBvcnQ6IElFIDkgb25seVxuICAgICAgICAgIC8vIFVzZSBvbnJlYWR5c3RhdGVjaGFuZ2UgdG8gcmVwbGFjZSBvbmFib3J0XG4gICAgICAgICAgLy8gdG8gaGFuZGxlIHVuY2F1Z2h0IGFib3J0c1xuXG4gICAgICAgICAgaWYgKHhoci5vbmFib3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHhoci5vbmFib3J0ID0gZXJyb3JDYWxsYmFjaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgcmVhZHlTdGF0ZSBiZWZvcmUgdGltZW91dCBhcyBpdCBjaGFuZ2VzXG4gICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIC8vIEFsbG93IG9uZXJyb3IgdG8gYmUgY2FsbGVkIGZpcnN0LFxuICAgICAgICAgICAgICAgIC8vIGJ1dCB0aGF0IHdpbGwgbm90IGhhbmRsZSBhIG5hdGl2ZSBhYm9ydFxuICAgICAgICAgICAgICAgIC8vIEFsc28sIHNhdmUgZXJyb3JDYWxsYmFjayB0byBhIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgLy8gYXMgeGhyLm9uZXJyb3IgY2Fubm90IGJlIGFjY2Vzc2VkXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IC8vIENyZWF0ZSB0aGUgYWJvcnQgY2FsbGJhY2tcblxuXG4gICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayhcImFib3J0XCIpO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHNlbmQgdGhlIHJlcXVlc3QgKHRoaXMgbWF5IHJhaXNlIGFuIGV4Y2VwdGlvbilcbiAgICAgICAgICAgIHhoci5zZW5kKG9wdGlvbnMuaGFzQ29udGVudCAmJiBvcHRpb25zLmRhdGEgfHwgbnVsbCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gIzE0NjgzOiBPbmx5IHJldGhyb3cgaWYgdGhpcyBoYXNuJ3QgYmVlbiBub3RpZmllZCBhcyBhbiBlcnJvciB5ZXRcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSk7IC8vIFByZXZlbnQgYXV0by1leGVjdXRpb24gb2Ygc2NyaXB0cyB3aGVuIG5vIGV4cGxpY2l0IGRhdGFUeXBlIHdhcyBwcm92aWRlZCAoU2VlIGdoLTI0MzIpXG5cbiAgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICBpZiAocy5jcm9zc0RvbWFpbikge1xuICAgICAgcy5jb250ZW50cy5zY3JpcHQgPSBmYWxzZTtcbiAgICB9XG4gIH0pOyAvLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxuXG4gIGpRdWVyeS5hamF4U2V0dXAoe1xuICAgIGFjY2VwdHM6IHtcbiAgICAgIHNjcmlwdDogXCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIFwiICsgXCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxuICAgIH0sXG4gICAgY29udGVudHM6IHtcbiAgICAgIHNjcmlwdDogL1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvXG4gICAgfSxcbiAgICBjb252ZXJ0ZXJzOiB7XG4gICAgICBcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIGpRdWVyeS5nbG9iYWxFdmFsKHRleHQpO1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5cbiAgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIiwgZnVuY3Rpb24gKHMpIHtcbiAgICBpZiAocy5jYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzLmNhY2hlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHMuY3Jvc3NEb21haW4pIHtcbiAgICAgIHMudHlwZSA9IFwiR0VUXCI7XG4gICAgfVxuICB9KTsgLy8gQmluZCBzY3JpcHQgdGFnIGhhY2sgdHJhbnNwb3J0XG5cbiAgalF1ZXJ5LmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIiwgZnVuY3Rpb24gKHMpIHtcbiAgICAvLyBUaGlzIHRyYW5zcG9ydCBvbmx5IGRlYWxzIHdpdGggY3Jvc3MgZG9tYWluIG9yIGZvcmNlZC1ieS1hdHRycyByZXF1ZXN0c1xuICAgIGlmIChzLmNyb3NzRG9tYWluIHx8IHMuc2NyaXB0QXR0cnMpIHtcbiAgICAgIHZhciBzY3JpcHQsIGNhbGxiYWNrO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VuZDogZnVuY3Rpb24gKF8sIGNvbXBsZXRlKSB7XG4gICAgICAgICAgc2NyaXB0ID0galF1ZXJ5KFwiPHNjcmlwdD5cIikuYXR0cihzLnNjcmlwdEF0dHJzIHx8IHt9KS5wcm9wKHtcbiAgICAgICAgICAgIGNoYXJzZXQ6IHMuc2NyaXB0Q2hhcnNldCxcbiAgICAgICAgICAgIHNyYzogcy51cmxcbiAgICAgICAgICB9KS5vbihcImxvYWQgZXJyb3JcIiwgY2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgICAgY29tcGxldGUoZXZ0LnR5cGUgPT09IFwiZXJyb3JcIiA/IDQwNCA6IDIwMCwgZXZ0LnR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pOyAvLyBVc2UgbmF0aXZlIERPTSBtYW5pcHVsYXRpb24gdG8gYXZvaWQgb3VyIGRvbU1hbmlwIEFKQVggdHJpY2tlcnlcblxuICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0WzBdKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG4gIHZhciBvbGRDYWxsYmFja3MgPSBbXSxcbiAgICAgIHJqc29ucCA9IC8oPSlcXD8oPz0mfCQpfFxcP1xcPy87IC8vIERlZmF1bHQganNvbnAgc2V0dGluZ3NcblxuICBqUXVlcnkuYWpheFNldHVwKHtcbiAgICBqc29ucDogXCJjYWxsYmFja1wiLFxuICAgIGpzb25wQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IG9sZENhbGxiYWNrcy5wb3AoKSB8fCBqUXVlcnkuZXhwYW5kbyArIFwiX1wiICsgbm9uY2UrKztcbiAgICAgIHRoaXNbY2FsbGJhY2tdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBjYWxsYmFjaztcbiAgICB9XG4gIH0pOyAvLyBEZXRlY3QsIG5vcm1hbGl6ZSBvcHRpb25zIGFuZCBpbnN0YWxsIGNhbGxiYWNrcyBmb3IganNvbnAgcmVxdWVzdHNcblxuICBqUXVlcnkuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIiwgZnVuY3Rpb24gKHMsIG9yaWdpbmFsU2V0dGluZ3MsIGpxWEhSKSB7XG4gICAgdmFyIGNhbGxiYWNrTmFtZSxcbiAgICAgICAgb3ZlcndyaXR0ZW4sXG4gICAgICAgIHJlc3BvbnNlQ29udGFpbmVyLFxuICAgICAgICBqc29uUHJvcCA9IHMuanNvbnAgIT09IGZhbHNlICYmIChyanNvbnAudGVzdChzLnVybCkgPyBcInVybFwiIDogdHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJiAocy5jb250ZW50VHlwZSB8fCBcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpID09PSAwICYmIHJqc29ucC50ZXN0KHMuZGF0YSkgJiYgXCJkYXRhXCIpOyAvLyBIYW5kbGUgaWZmIHRoZSBleHBlY3RlZCBkYXRhIHR5cGUgaXMgXCJqc29ucFwiIG9yIHdlIGhhdmUgYSBwYXJhbWV0ZXIgdG8gc2V0XG5cbiAgICBpZiAoanNvblByb3AgfHwgcy5kYXRhVHlwZXNbMF0gPT09IFwianNvbnBcIikge1xuICAgICAgLy8gR2V0IGNhbGxiYWNrIG5hbWUsIHJlbWVtYmVyaW5nIHByZWV4aXN0aW5nIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBpdFxuICAgICAgY2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0gaXNGdW5jdGlvbihzLmpzb25wQ2FsbGJhY2spID8gcy5qc29ucENhbGxiYWNrKCkgOiBzLmpzb25wQ2FsbGJhY2s7IC8vIEluc2VydCBjYWxsYmFjayBpbnRvIHVybCBvciBmb3JtIGRhdGFcblxuICAgICAgaWYgKGpzb25Qcm9wKSB7XG4gICAgICAgIHNbanNvblByb3BdID0gc1tqc29uUHJvcF0ucmVwbGFjZShyanNvbnAsIFwiJDFcIiArIGNhbGxiYWNrTmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKHMuanNvbnAgIT09IGZhbHNlKSB7XG4gICAgICAgIHMudXJsICs9IChycXVlcnkudGVzdChzLnVybCkgPyBcIiZcIiA6IFwiP1wiKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcbiAgICAgIH0gLy8gVXNlIGRhdGEgY29udmVydGVyIHRvIHJldHJpZXZlIGpzb24gYWZ0ZXIgc2NyaXB0IGV4ZWN1dGlvblxuXG5cbiAgICAgIHMuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlQ29udGFpbmVyKSB7XG4gICAgICAgICAgalF1ZXJ5LmVycm9yKGNhbGxiYWNrTmFtZSArIFwiIHdhcyBub3QgY2FsbGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlQ29udGFpbmVyWzBdO1xuICAgICAgfTsgLy8gRm9yY2UganNvbiBkYXRhVHlwZVxuXG5cbiAgICAgIHMuZGF0YVR5cGVzWzBdID0gXCJqc29uXCI7IC8vIEluc3RhbGwgY2FsbGJhY2tcblxuICAgICAgb3ZlcndyaXR0ZW4gPSB3aW5kb3dbY2FsbGJhY2tOYW1lXTtcblxuICAgICAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc3BvbnNlQ29udGFpbmVyID0gYXJndW1lbnRzO1xuICAgICAgfTsgLy8gQ2xlYW4tdXAgZnVuY3Rpb24gKGZpcmVzIGFmdGVyIGNvbnZlcnRlcnMpXG5cblxuICAgICAganFYSFIuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSWYgcHJldmlvdXMgdmFsdWUgZGlkbid0IGV4aXN0IC0gcmVtb3ZlIGl0XG4gICAgICAgIGlmIChvdmVyd3JpdHRlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgalF1ZXJ5KHdpbmRvdykucmVtb3ZlUHJvcChjYWxsYmFja05hbWUpOyAvLyBPdGhlcndpc2UgcmVzdG9yZSBwcmVleGlzdGluZyB2YWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gb3ZlcndyaXR0ZW47XG4gICAgICAgIH0gLy8gU2F2ZSBiYWNrIGFzIGZyZWVcblxuXG4gICAgICAgIGlmIChzW2NhbGxiYWNrTmFtZV0pIHtcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCByZS11c2luZyB0aGUgb3B0aW9ucyBkb2Vzbid0IHNjcmV3IHRoaW5ncyBhcm91bmRcbiAgICAgICAgICBzLmpzb25wQ2FsbGJhY2sgPSBvcmlnaW5hbFNldHRpbmdzLmpzb25wQ2FsbGJhY2s7IC8vIFNhdmUgdGhlIGNhbGxiYWNrIG5hbWUgZm9yIGZ1dHVyZSB1c2VcblxuICAgICAgICAgIG9sZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrTmFtZSk7XG4gICAgICAgIH0gLy8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG5cblxuICAgICAgICBpZiAocmVzcG9uc2VDb250YWluZXIgJiYgaXNGdW5jdGlvbihvdmVyd3JpdHRlbikpIHtcbiAgICAgICAgICBvdmVyd3JpdHRlbihyZXNwb25zZUNvbnRhaW5lclswXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXNwb25zZUNvbnRhaW5lciA9IG92ZXJ3cml0dGVuID0gdW5kZWZpbmVkO1xuICAgICAgfSk7IC8vIERlbGVnYXRlIHRvIHNjcmlwdFxuXG4gICAgICByZXR1cm4gXCJzY3JpcHRcIjtcbiAgICB9XG4gIH0pOyAvLyBTdXBwb3J0OiBTYWZhcmkgOCBvbmx5XG4gIC8vIEluIFNhZmFyaSA4IGRvY3VtZW50cyBjcmVhdGVkIHZpYSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnRcbiAgLy8gY29sbGFwc2Ugc2libGluZyBmb3JtczogdGhlIHNlY29uZCBvbmUgYmVjb21lcyBhIGNoaWxkIG9mIHRoZSBmaXJzdCBvbmUuXG4gIC8vIEJlY2F1c2Ugb2YgdGhhdCwgdGhpcyBzZWN1cml0eSBtZWFzdXJlIGhhcyB0byBiZSBkaXNhYmxlZCBpbiBTYWZhcmkgOC5cbiAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzMzN1xuXG4gIHN1cHBvcnQuY3JlYXRlSFRNTERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHk7XG4gICAgYm9keS5pbm5lckhUTUwgPSBcIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCI7XG4gICAgcmV0dXJuIGJvZHkuY2hpbGROb2Rlcy5sZW5ndGggPT09IDI7XG4gIH0oKTsgLy8gQXJndW1lbnQgXCJkYXRhXCIgc2hvdWxkIGJlIHN0cmluZyBvZiBodG1sXG4gIC8vIGNvbnRleHQgKG9wdGlvbmFsKTogSWYgc3BlY2lmaWVkLCB0aGUgZnJhZ21lbnQgd2lsbCBiZSBjcmVhdGVkIGluIHRoaXMgY29udGV4dCxcbiAgLy8gZGVmYXVsdHMgdG8gZG9jdW1lbnRcbiAgLy8ga2VlcFNjcmlwdHMgKG9wdGlvbmFsKTogSWYgdHJ1ZSwgd2lsbCBpbmNsdWRlIHNjcmlwdHMgcGFzc2VkIGluIHRoZSBodG1sIHN0cmluZ1xuXG5cbiAgalF1ZXJ5LnBhcnNlSFRNTCA9IGZ1bmN0aW9uIChkYXRhLCBjb250ZXh0LCBrZWVwU2NyaXB0cykge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29udGV4dCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIGtlZXBTY3JpcHRzID0gY29udGV4dDtcbiAgICAgIGNvbnRleHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgYmFzZSwgcGFyc2VkLCBzY3JpcHRzO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAvLyBTdG9wIHNjcmlwdHMgb3IgaW5saW5lIGV2ZW50IGhhbmRsZXJzIGZyb20gYmVpbmcgZXhlY3V0ZWQgaW1tZWRpYXRlbHlcbiAgICAgIC8vIGJ5IHVzaW5nIGRvY3VtZW50LmltcGxlbWVudGF0aW9uXG4gICAgICBpZiAoc3VwcG9ydC5jcmVhdGVIVE1MRG9jdW1lbnQpIHtcbiAgICAgICAgY29udGV4dCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKTsgLy8gU2V0IHRoZSBiYXNlIGhyZWYgZm9yIHRoZSBjcmVhdGVkIGRvY3VtZW50XG4gICAgICAgIC8vIHNvIGFueSBwYXJzZWQgZWxlbWVudHMgd2l0aCBVUkxzXG4gICAgICAgIC8vIGFyZSBiYXNlZCBvbiB0aGUgZG9jdW1lbnQncyBVUkwgKGdoLTI5NjUpXG5cbiAgICAgICAgYmFzZSA9IGNvbnRleHQuY3JlYXRlRWxlbWVudChcImJhc2VcIik7XG4gICAgICAgIGJhc2UuaHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIGNvbnRleHQuaGVhZC5hcHBlbmRDaGlsZChiYXNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQgPSBkb2N1bWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSByc2luZ2xlVGFnLmV4ZWMoZGF0YSk7XG4gICAgc2NyaXB0cyA9ICFrZWVwU2NyaXB0cyAmJiBbXTsgLy8gU2luZ2xlIHRhZ1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcmV0dXJuIFtjb250ZXh0LmNyZWF0ZUVsZW1lbnQocGFyc2VkWzFdKV07XG4gICAgfVxuXG4gICAgcGFyc2VkID0gYnVpbGRGcmFnbWVudChbZGF0YV0sIGNvbnRleHQsIHNjcmlwdHMpO1xuXG4gICAgaWYgKHNjcmlwdHMgJiYgc2NyaXB0cy5sZW5ndGgpIHtcbiAgICAgIGpRdWVyeShzY3JpcHRzKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4galF1ZXJ5Lm1lcmdlKFtdLCBwYXJzZWQuY2hpbGROb2Rlcyk7XG4gIH07XG4gIC8qKlxuICAgKiBMb2FkIGEgdXJsIGludG8gYSBwYWdlXG4gICAqL1xuXG5cbiAgalF1ZXJ5LmZuLmxvYWQgPSBmdW5jdGlvbiAodXJsLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGVjdG9yLFxuICAgICAgICB0eXBlLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIG9mZiA9IHVybC5pbmRleE9mKFwiIFwiKTtcblxuICAgIGlmIChvZmYgPiAtMSkge1xuICAgICAgc2VsZWN0b3IgPSBzdHJpcEFuZENvbGxhcHNlKHVybC5zbGljZShvZmYpKTtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBvZmYpO1xuICAgIH0gLy8gSWYgaXQncyBhIGZ1bmN0aW9uXG5cblxuICAgIGlmIChpc0Z1bmN0aW9uKHBhcmFtcykpIHtcbiAgICAgIC8vIFdlIGFzc3VtZSB0aGF0IGl0J3MgdGhlIGNhbGxiYWNrXG4gICAgICBjYWxsYmFjayA9IHBhcmFtcztcbiAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDsgLy8gT3RoZXJ3aXNlLCBidWlsZCBhIHBhcmFtIHN0cmluZ1xuICAgIH0gZWxzZSBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHR5cGUgPSBcIlBPU1RcIjtcbiAgICB9IC8vIElmIHdlIGhhdmUgZWxlbWVudHMgdG8gbW9kaWZ5LCBtYWtlIHRoZSByZXF1ZXN0XG5cblxuICAgIGlmIChzZWxmLmxlbmd0aCA+IDApIHtcbiAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIC8vIElmIFwidHlwZVwiIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCwgdGhlbiBcIkdFVFwiIG1ldGhvZCB3aWxsIGJlIHVzZWQuXG4gICAgICAgIC8vIE1ha2UgdmFsdWUgb2YgdGhpcyBmaWVsZCBleHBsaWNpdCBzaW5jZVxuICAgICAgICAvLyB1c2VyIGNhbiBvdmVycmlkZSBpdCB0aHJvdWdoIGFqYXhTZXR1cCBtZXRob2RcbiAgICAgICAgdHlwZTogdHlwZSB8fCBcIkdFVFwiLFxuICAgICAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gICAgICAgIGRhdGE6IHBhcmFtc1xuICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2VUZXh0KSB7XG4gICAgICAgIC8vIFNhdmUgcmVzcG9uc2UgZm9yIHVzZSBpbiBjb21wbGV0ZSBjYWxsYmFja1xuICAgICAgICByZXNwb25zZSA9IGFyZ3VtZW50cztcbiAgICAgICAgc2VsZi5odG1sKHNlbGVjdG9yID8gLy8gSWYgYSBzZWxlY3RvciB3YXMgc3BlY2lmaWVkLCBsb2NhdGUgdGhlIHJpZ2h0IGVsZW1lbnRzIGluIGEgZHVtbXkgZGl2XG4gICAgICAgIC8vIEV4Y2x1ZGUgc2NyaXB0cyB0byBhdm9pZCBJRSAnUGVybWlzc2lvbiBEZW5pZWQnIGVycm9yc1xuICAgICAgICBqUXVlcnkoXCI8ZGl2PlwiKS5hcHBlbmQoalF1ZXJ5LnBhcnNlSFRNTChyZXNwb25zZVRleHQpKS5maW5kKHNlbGVjdG9yKSA6IC8vIE90aGVyd2lzZSB1c2UgdGhlIGZ1bGwgcmVzdWx0XG4gICAgICAgIHJlc3BvbnNlVGV4dCk7IC8vIElmIHRoZSByZXF1ZXN0IHN1Y2NlZWRzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJkYXRhXCIsIFwic3RhdHVzXCIsIFwianFYSFJcIlxuICAgICAgICAvLyBidXQgdGhleSBhcmUgaWdub3JlZCBiZWNhdXNlIHJlc3BvbnNlIHdhcyBzZXQgYWJvdmUuXG4gICAgICAgIC8vIElmIGl0IGZhaWxzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJqcVhIUlwiLCBcInN0YXR1c1wiLCBcImVycm9yXCJcbiAgICAgIH0pLmFsd2F5cyhjYWxsYmFjayAmJiBmdW5jdGlvbiAoanFYSFIsIHN0YXR1cykge1xuICAgICAgICBzZWxmLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIHJlc3BvbnNlIHx8IFtqcVhIUi5yZXNwb25zZVRleHQsIHN0YXR1cywganFYSFJdKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTsgLy8gQXR0YWNoIGEgYnVuY2ggb2YgZnVuY3Rpb25zIGZvciBoYW5kbGluZyBjb21tb24gQUpBWCBldmVudHNcblxuXG4gIGpRdWVyeS5lYWNoKFtcImFqYXhTdGFydFwiLCBcImFqYXhTdG9wXCIsIFwiYWpheENvbXBsZXRlXCIsIFwiYWpheEVycm9yXCIsIFwiYWpheFN1Y2Nlc3NcIiwgXCJhamF4U2VuZFwiXSwgZnVuY3Rpb24gKGksIHR5cGUpIHtcbiAgICBqUXVlcnkuZm5bdHlwZV0gPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiB0aGlzLm9uKHR5cGUsIGZuKTtcbiAgICB9O1xuICB9KTtcblxuICBqUXVlcnkuZXhwci5wc2V1ZG9zLmFuaW1hdGVkID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICByZXR1cm4galF1ZXJ5LmdyZXAoalF1ZXJ5LnRpbWVycywgZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZWxlbSA9PT0gZm4uZWxlbTtcbiAgICB9KS5sZW5ndGg7XG4gIH07XG5cbiAgalF1ZXJ5Lm9mZnNldCA9IHtcbiAgICBzZXRPZmZzZXQ6IGZ1bmN0aW9uIChlbGVtLCBvcHRpb25zLCBpKSB7XG4gICAgICB2YXIgY3VyUG9zaXRpb24sXG4gICAgICAgICAgY3VyTGVmdCxcbiAgICAgICAgICBjdXJDU1NUb3AsXG4gICAgICAgICAgY3VyVG9wLFxuICAgICAgICAgIGN1ck9mZnNldCxcbiAgICAgICAgICBjdXJDU1NMZWZ0LFxuICAgICAgICAgIGNhbGN1bGF0ZVBvc2l0aW9uLFxuICAgICAgICAgIHBvc2l0aW9uID0galF1ZXJ5LmNzcyhlbGVtLCBcInBvc2l0aW9uXCIpLFxuICAgICAgICAgIGN1ckVsZW0gPSBqUXVlcnkoZWxlbSksXG4gICAgICAgICAgcHJvcHMgPSB7fTsgLy8gU2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuXG4gICAgICBpZiAocG9zaXRpb24gPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgIH1cblxuICAgICAgY3VyT2Zmc2V0ID0gY3VyRWxlbS5vZmZzZXQoKTtcbiAgICAgIGN1ckNTU1RvcCA9IGpRdWVyeS5jc3MoZWxlbSwgXCJ0b3BcIik7XG4gICAgICBjdXJDU1NMZWZ0ID0galF1ZXJ5LmNzcyhlbGVtLCBcImxlZnRcIik7XG4gICAgICBjYWxjdWxhdGVQb3NpdGlvbiA9IChwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiIHx8IHBvc2l0aW9uID09PSBcImZpeGVkXCIpICYmIChjdXJDU1NUb3AgKyBjdXJDU1NMZWZ0KS5pbmRleE9mKFwiYXV0b1wiKSA+IC0xOyAvLyBOZWVkIHRvIGJlIGFibGUgdG8gY2FsY3VsYXRlIHBvc2l0aW9uIGlmIGVpdGhlclxuICAgICAgLy8gdG9wIG9yIGxlZnQgaXMgYXV0byBhbmQgcG9zaXRpb24gaXMgZWl0aGVyIGFic29sdXRlIG9yIGZpeGVkXG5cbiAgICAgIGlmIChjYWxjdWxhdGVQb3NpdGlvbikge1xuICAgICAgICBjdXJQb3NpdGlvbiA9IGN1ckVsZW0ucG9zaXRpb24oKTtcbiAgICAgICAgY3VyVG9wID0gY3VyUG9zaXRpb24udG9wO1xuICAgICAgICBjdXJMZWZ0ID0gY3VyUG9zaXRpb24ubGVmdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1clRvcCA9IHBhcnNlRmxvYXQoY3VyQ1NTVG9wKSB8fCAwO1xuICAgICAgICBjdXJMZWZ0ID0gcGFyc2VGbG9hdChjdXJDU1NMZWZ0KSB8fCAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICAvLyBVc2UgalF1ZXJ5LmV4dGVuZCBoZXJlIHRvIGFsbG93IG1vZGlmaWNhdGlvbiBvZiBjb29yZGluYXRlcyBhcmd1bWVudCAoZ2gtMTg0OClcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMuY2FsbChlbGVtLCBpLCBqUXVlcnkuZXh0ZW5kKHt9LCBjdXJPZmZzZXQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudG9wICE9IG51bGwpIHtcbiAgICAgICAgcHJvcHMudG9wID0gb3B0aW9ucy50b3AgLSBjdXJPZmZzZXQudG9wICsgY3VyVG9wO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5sZWZ0ICE9IG51bGwpIHtcbiAgICAgICAgcHJvcHMubGVmdCA9IG9wdGlvbnMubGVmdCAtIGN1ck9mZnNldC5sZWZ0ICsgY3VyTGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKFwidXNpbmdcIiBpbiBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMudXNpbmcuY2FsbChlbGVtLCBwcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJFbGVtLmNzcyhwcm9wcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAvLyBvZmZzZXQoKSByZWxhdGVzIGFuIGVsZW1lbnQncyBib3JkZXIgYm94IHRvIHRoZSBkb2N1bWVudCBvcmlnaW5cbiAgICBvZmZzZXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAvLyBQcmVzZXJ2ZSBjaGFpbmluZyBmb3Igc2V0dGVyXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucyA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIGpRdWVyeS5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsIG9wdGlvbnMsIGkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY3QsXG4gICAgICAgICAgd2luLFxuICAgICAgICAgIGVsZW0gPSB0aGlzWzBdO1xuXG4gICAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBSZXR1cm4gemVyb3MgZm9yIGRpc2Nvbm5lY3RlZCBhbmQgaGlkZGVuIChkaXNwbGF5OiBub25lKSBlbGVtZW50cyAoZ2gtMjMxMClcbiAgICAgIC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuICAgICAgLy8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxuICAgICAgLy8gZGlzY29ubmVjdGVkIG5vZGUgaW4gSUUgdGhyb3dzIGFuIGVycm9yXG5cblxuICAgICAgaWYgKCFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxuXG5cbiAgICAgIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgd2luID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0XG4gICAgICB9O1xuICAgIH0sXG4gICAgLy8gcG9zaXRpb24oKSByZWxhdGVzIGFuIGVsZW1lbnQncyBtYXJnaW4gYm94IHRvIGl0cyBvZmZzZXQgcGFyZW50J3MgcGFkZGluZyBib3hcbiAgICAvLyBUaGlzIGNvcnJlc3BvbmRzIHRvIHRoZSBiZWhhdmlvciBvZiBDU1MgYWJzb2x1dGUgcG9zaXRpb25pbmdcbiAgICBwb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzWzBdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldFBhcmVudCxcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgZG9jLFxuICAgICAgICAgIGVsZW0gPSB0aGlzWzBdLFxuICAgICAgICAgIHBhcmVudE9mZnNldCA9IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9OyAvLyBwb3NpdGlvbjpmaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gdGhlIHZpZXdwb3J0LCB3aGljaCBpdHNlbGYgYWx3YXlzIGhhcyB6ZXJvIG9mZnNldFxuXG4gICAgICBpZiAoalF1ZXJ5LmNzcyhlbGVtLCBcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgLy8gQXNzdW1lIHBvc2l0aW9uOmZpeGVkIGltcGxpZXMgYXZhaWxhYmlsaXR5IG9mIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICAgICAgICBvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0ID0gdGhpcy5vZmZzZXQoKTsgLy8gQWNjb3VudCBmb3IgdGhlICpyZWFsKiBvZmZzZXQgcGFyZW50LCB3aGljaCBjYW4gYmUgdGhlIGRvY3VtZW50IG9yIGl0cyByb290IGVsZW1lbnRcbiAgICAgICAgLy8gd2hlbiBhIHN0YXRpY2FsbHkgcG9zaXRpb25lZCBlbGVtZW50IGlzIGlkZW50aWZpZWRcblxuICAgICAgICBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIG9mZnNldFBhcmVudCA9IGVsZW0ub2Zmc2V0UGFyZW50IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiAob2Zmc2V0UGFyZW50ID09PSBkb2MuYm9keSB8fCBvZmZzZXRQYXJlbnQgPT09IGRvYy5kb2N1bWVudEVsZW1lbnQpICYmIGpRdWVyeS5jc3Mob2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIpID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gZWxlbSAmJiBvZmZzZXRQYXJlbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAvLyBJbmNvcnBvcmF0ZSBib3JkZXJzIGludG8gaXRzIG9mZnNldCwgc2luY2UgdGhleSBhcmUgb3V0c2lkZSBpdHMgY29udGVudCBvcmlnaW5cbiAgICAgICAgICBwYXJlbnRPZmZzZXQgPSBqUXVlcnkob2Zmc2V0UGFyZW50KS5vZmZzZXQoKTtcbiAgICAgICAgICBwYXJlbnRPZmZzZXQudG9wICs9IGpRdWVyeS5jc3Mob2Zmc2V0UGFyZW50LCBcImJvcmRlclRvcFdpZHRoXCIsIHRydWUpO1xuICAgICAgICAgIHBhcmVudE9mZnNldC5sZWZ0ICs9IGpRdWVyeS5jc3Mob2Zmc2V0UGFyZW50LCBcImJvcmRlckxlZnRXaWR0aFwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBTdWJ0cmFjdCBwYXJlbnQgb2Zmc2V0cyBhbmQgZWxlbWVudCBtYXJnaW5zXG5cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGpRdWVyeS5jc3MoZWxlbSwgXCJtYXJnaW5Ub3BcIiwgdHJ1ZSksXG4gICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgLSBqUXVlcnkuY3NzKGVsZW0sIFwibWFyZ2luTGVmdFwiLCB0cnVlKVxuICAgICAgfTtcbiAgICB9LFxuICAgIC8vIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGRvY3VtZW50RWxlbWVudCBpbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICAgIC8vIDEpIEZvciB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZSB3aXRob3V0IG9mZnNldFBhcmVudCwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm5cbiAgICAvLyAgICBkb2N1bWVudEVsZW1lbnQgb2YgdGhlIHBhcmVudCB3aW5kb3dcbiAgICAvLyAyKSBGb3IgdGhlIGhpZGRlbiBvciBkZXRhY2hlZCBlbGVtZW50XG4gICAgLy8gMykgRm9yIGJvZHkgb3IgaHRtbCBlbGVtZW50LCBpLmUuIGluIGNhc2Ugb2YgdGhlIGh0bWwgbm9kZSAtIGl0IHdpbGwgcmV0dXJuIGl0c2VsZlxuICAgIC8vXG4gICAgLy8gYnV0IHRob3NlIGV4Y2VwdGlvbnMgd2VyZSBuZXZlciBwcmVzZW50ZWQgYXMgYSByZWFsIGxpZmUgdXNlLWNhc2VzXG4gICAgLy8gYW5kIG1pZ2h0IGJlIGNvbnNpZGVyZWQgYXMgbW9yZSBwcmVmZXJhYmxlIHJlc3VsdHMuXG4gICAgLy9cbiAgICAvLyBUaGlzIGxvZ2ljLCBob3dldmVyLCBpcyBub3QgZ3VhcmFudGVlZCBhbmQgY2FuIGNoYW5nZSBhdCBhbnkgcG9pbnQgaW4gdGhlIGZ1dHVyZVxuICAgIG9mZnNldFBhcmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50O1xuXG4gICAgICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgalF1ZXJ5LmNzcyhvZmZzZXRQYXJlbnQsIFwicG9zaXRpb25cIikgPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pOyAvLyBDcmVhdGUgc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wIG1ldGhvZHNcblxuICBqUXVlcnkuZWFjaCh7XG4gICAgc2Nyb2xsTGVmdDogXCJwYWdlWE9mZnNldFwiLFxuICAgIHNjcm9sbFRvcDogXCJwYWdlWU9mZnNldFwiXG4gIH0sIGZ1bmN0aW9uIChtZXRob2QsIHByb3ApIHtcbiAgICB2YXIgdG9wID0gXCJwYWdlWU9mZnNldFwiID09PSBwcm9wO1xuXG4gICAgalF1ZXJ5LmZuW21ldGhvZF0gPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uIChlbGVtLCBtZXRob2QsIHZhbCkge1xuICAgICAgICAvLyBDb2FsZXNjZSBkb2N1bWVudHMgYW5kIHdpbmRvd3NcbiAgICAgICAgdmFyIHdpbjtcblxuICAgICAgICBpZiAoaXNXaW5kb3coZWxlbSkpIHtcbiAgICAgICAgICB3aW4gPSBlbGVtO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICB3aW4gPSBlbGVtLmRlZmF1bHRWaWV3O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbiA/IHdpbltwcm9wXSA6IGVsZW1bbWV0aG9kXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW4pIHtcbiAgICAgICAgICB3aW4uc2Nyb2xsVG8oIXRvcCA/IHZhbCA6IHdpbi5wYWdlWE9mZnNldCwgdG9wID8gdmFsIDogd2luLnBhZ2VZT2Zmc2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtW21ldGhvZF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0sIG1ldGhvZCwgdmFsLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICB9O1xuICB9KTsgLy8gU3VwcG9ydDogU2FmYXJpIDw9NyAtIDkuMSwgQ2hyb21lIDw9MzcgLSA0OVxuICAvLyBBZGQgdGhlIHRvcC9sZWZ0IGNzc0hvb2tzIHVzaW5nIGpRdWVyeS5mbi5wb3NpdGlvblxuICAvLyBXZWJraXQgYnVnOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkwODRcbiAgLy8gQmxpbmsgYnVnOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD01ODkzNDdcbiAgLy8gZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIHBlcmNlbnQgd2hlbiBzcGVjaWZpZWQgZm9yIHRvcC9sZWZ0L2JvdHRvbS9yaWdodDtcbiAgLy8gcmF0aGVyIHRoYW4gbWFrZSB0aGUgY3NzIG1vZHVsZSBkZXBlbmQgb24gdGhlIG9mZnNldCBtb2R1bGUsIGp1c3QgY2hlY2sgZm9yIGl0IGhlcmVcblxuICBqUXVlcnkuZWFjaChbXCJ0b3BcIiwgXCJsZWZ0XCJdLCBmdW5jdGlvbiAoaSwgcHJvcCkge1xuICAgIGpRdWVyeS5jc3NIb29rc1twcm9wXSA9IGFkZEdldEhvb2tJZihzdXBwb3J0LnBpeGVsUG9zaXRpb24sIGZ1bmN0aW9uIChlbGVtLCBjb21wdXRlZCkge1xuICAgICAgaWYgKGNvbXB1dGVkKSB7XG4gICAgICAgIGNvbXB1dGVkID0gY3VyQ1NTKGVsZW0sIHByb3ApOyAvLyBJZiBjdXJDU1MgcmV0dXJucyBwZXJjZW50YWdlLCBmYWxsYmFjayB0byBvZmZzZXRcblxuICAgICAgICByZXR1cm4gcm51bW5vbnB4LnRlc3QoY29tcHV0ZWQpID8galF1ZXJ5KGVsZW0pLnBvc2l0aW9uKClbcHJvcF0gKyBcInB4XCIgOiBjb21wdXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7IC8vIENyZWF0ZSBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCwgaGVpZ2h0LCB3aWR0aCwgb3V0ZXJIZWlnaHQgYW5kIG91dGVyV2lkdGggbWV0aG9kc1xuXG4gIGpRdWVyeS5lYWNoKHtcbiAgICBIZWlnaHQ6IFwiaGVpZ2h0XCIsXG4gICAgV2lkdGg6IFwid2lkdGhcIlxuICB9LCBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuICAgIGpRdWVyeS5lYWNoKHtcbiAgICAgIHBhZGRpbmc6IFwiaW5uZXJcIiArIG5hbWUsXG4gICAgICBjb250ZW50OiB0eXBlLFxuICAgICAgXCJcIjogXCJvdXRlclwiICsgbmFtZVxuICAgIH0sIGZ1bmN0aW9uIChkZWZhdWx0RXh0cmEsIGZ1bmNOYW1lKSB7XG4gICAgICAvLyBNYXJnaW4gaXMgb25seSBmb3Igb3V0ZXJIZWlnaHQsIG91dGVyV2lkdGhcbiAgICAgIGpRdWVyeS5mbltmdW5jTmFtZV0gPSBmdW5jdGlvbiAobWFyZ2luLCB2YWx1ZSkge1xuICAgICAgICB2YXIgY2hhaW5hYmxlID0gYXJndW1lbnRzLmxlbmd0aCAmJiAoZGVmYXVsdEV4dHJhIHx8IHR5cGVvZiBtYXJnaW4gIT09IFwiYm9vbGVhblwiKSxcbiAgICAgICAgICAgIGV4dHJhID0gZGVmYXVsdEV4dHJhIHx8IChtYXJnaW4gPT09IHRydWUgfHwgdmFsdWUgPT09IHRydWUgPyBcIm1hcmdpblwiIDogXCJib3JkZXJcIik7XG4gICAgICAgIHJldHVybiBhY2Nlc3ModGhpcywgZnVuY3Rpb24gKGVsZW0sIHR5cGUsIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIGRvYztcblxuICAgICAgICAgIGlmIChpc1dpbmRvdyhlbGVtKSkge1xuICAgICAgICAgICAgLy8gJCggd2luZG93ICkub3V0ZXJXaWR0aC9IZWlnaHQgcmV0dXJuIHcvaCBpbmNsdWRpbmcgc2Nyb2xsYmFycyAoZ2gtMTcyOSlcbiAgICAgICAgICAgIHJldHVybiBmdW5jTmFtZS5pbmRleE9mKFwib3V0ZXJcIikgPT09IDAgPyBlbGVtW1wiaW5uZXJcIiArIG5hbWVdIDogZWxlbS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIiArIG5hbWVdO1xuICAgICAgICAgIH0gLy8gR2V0IGRvY3VtZW50IHdpZHRoIG9yIGhlaWdodFxuXG5cbiAgICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgICAgICAgICAgZG9jID0gZWxlbS5kb2N1bWVudEVsZW1lbnQ7IC8vIEVpdGhlciBzY3JvbGxbV2lkdGgvSGVpZ2h0XSBvciBvZmZzZXRbV2lkdGgvSGVpZ2h0XSBvciBjbGllbnRbV2lkdGgvSGVpZ2h0XSxcbiAgICAgICAgICAgIC8vIHdoaWNoZXZlciBpcyBncmVhdGVzdFxuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoZWxlbS5ib2R5W1wic2Nyb2xsXCIgKyBuYW1lXSwgZG9jW1wic2Nyb2xsXCIgKyBuYW1lXSwgZWxlbS5ib2R5W1wib2Zmc2V0XCIgKyBuYW1lXSwgZG9jW1wib2Zmc2V0XCIgKyBuYW1lXSwgZG9jW1wiY2xpZW50XCIgKyBuYW1lXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyAvLyBHZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50LCByZXF1ZXN0aW5nIGJ1dCBub3QgZm9yY2luZyBwYXJzZUZsb2F0XG4gICAgICAgICAgalF1ZXJ5LmNzcyhlbGVtLCB0eXBlLCBleHRyYSkgOiAvLyBTZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50XG4gICAgICAgICAgalF1ZXJ5LnN0eWxlKGVsZW0sIHR5cGUsIHZhbHVlLCBleHRyYSk7XG4gICAgICAgIH0sIHR5cGUsIGNoYWluYWJsZSA/IG1hcmdpbiA6IHVuZGVmaW5lZCwgY2hhaW5hYmxlKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuICBqUXVlcnkuZWFjaCgoXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBcIiArIFwibW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgXCIgKyBcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIikuc3BsaXQoXCIgXCIpLCBmdW5jdGlvbiAoaSwgbmFtZSkge1xuICAgIC8vIEhhbmRsZSBldmVudCBiaW5kaW5nXG4gICAgalF1ZXJ5LmZuW25hbWVdID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgPyB0aGlzLm9uKG5hbWUsIG51bGwsIGRhdGEsIGZuKSA6IHRoaXMudHJpZ2dlcihuYW1lKTtcbiAgICB9O1xuICB9KTtcbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgaG92ZXI6IGZ1bmN0aW9uIChmbk92ZXIsIGZuT3V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5tb3VzZWVudGVyKGZuT3ZlcikubW91c2VsZWF2ZShmbk91dCB8fCBmbk92ZXIpO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIGJpbmQ6IGZ1bmN0aW9uICh0eXBlcywgZGF0YSwgZm4pIHtcbiAgICAgIHJldHVybiB0aGlzLm9uKHR5cGVzLCBudWxsLCBkYXRhLCBmbik7XG4gICAgfSxcbiAgICB1bmJpbmQ6IGZ1bmN0aW9uICh0eXBlcywgZm4pIHtcbiAgICAgIHJldHVybiB0aGlzLm9mZih0eXBlcywgbnVsbCwgZm4pO1xuICAgIH0sXG4gICAgZGVsZWdhdGU6IGZ1bmN0aW9uIChzZWxlY3RvciwgdHlwZXMsIGRhdGEsIGZuKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbih0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuKTtcbiAgICB9LFxuICAgIHVuZGVsZWdhdGU6IGZ1bmN0aW9uIChzZWxlY3RvciwgdHlwZXMsIGZuKSB7XG4gICAgICAvLyAoIG5hbWVzcGFjZSApIG9yICggc2VsZWN0b3IsIHR5cGVzIFssIGZuXSApXG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IHRoaXMub2ZmKHNlbGVjdG9yLCBcIioqXCIpIDogdGhpcy5vZmYodHlwZXMsIHNlbGVjdG9yIHx8IFwiKipcIiwgZm4pO1xuICAgIH1cbiAgfSk7IC8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQsIG9wdGlvbmFsbHkgcGFydGlhbGx5IGFwcGx5aW5nIGFueVxuICAvLyBhcmd1bWVudHMuXG4gIC8vIGpRdWVyeS5wcm94eSBpcyBkZXByZWNhdGVkIHRvIHByb21vdGUgc3RhbmRhcmRzIChzcGVjaWZpY2FsbHkgRnVuY3Rpb24jYmluZClcbiAgLy8gSG93ZXZlciwgaXQgaXMgbm90IHNsYXRlZCBmb3IgcmVtb3ZhbCBhbnkgdGltZSBzb29uXG5cbiAgalF1ZXJ5LnByb3h5ID0gZnVuY3Rpb24gKGZuLCBjb250ZXh0KSB7XG4gICAgdmFyIHRtcCwgYXJncywgcHJveHk7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRtcCA9IGZuW2NvbnRleHRdO1xuICAgICAgY29udGV4dCA9IGZuO1xuICAgICAgZm4gPSB0bXA7XG4gICAgfSAvLyBRdWljayBjaGVjayB0byBkZXRlcm1pbmUgaWYgdGFyZ2V0IGlzIGNhbGxhYmxlLCBpbiB0aGUgc3BlY1xuICAgIC8vIHRoaXMgdGhyb3dzIGEgVHlwZUVycm9yLCBidXQgd2Ugd2lsbCBqdXN0IHJldHVybiB1bmRlZmluZWQuXG5cblxuICAgIGlmICghaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSAvLyBTaW11bGF0ZWQgYmluZFxuXG5cbiAgICBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuXG4gICAgcHJveHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9OyAvLyBTZXQgdGhlIGd1aWQgb2YgdW5pcXVlIGhhbmRsZXIgdG8gdGhlIHNhbWUgb2Ygb3JpZ2luYWwgaGFuZGxlciwgc28gaXQgY2FuIGJlIHJlbW92ZWRcblxuXG4gICAgcHJveHkuZ3VpZCA9IGZuLmd1aWQgPSBmbi5ndWlkIHx8IGpRdWVyeS5ndWlkKys7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xuXG4gIGpRdWVyeS5ob2xkUmVhZHkgPSBmdW5jdGlvbiAoaG9sZCkge1xuICAgIGlmIChob2xkKSB7XG4gICAgICBqUXVlcnkucmVhZHlXYWl0Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeS5yZWFkeSh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgalF1ZXJ5LmlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICBqUXVlcnkucGFyc2VKU09OID0gSlNPTi5wYXJzZTtcbiAgalF1ZXJ5Lm5vZGVOYW1lID0gbm9kZU5hbWU7XG4gIGpRdWVyeS5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbiAgalF1ZXJ5LmlzV2luZG93ID0gaXNXaW5kb3c7XG4gIGpRdWVyeS5jYW1lbENhc2UgPSBjYW1lbENhc2U7XG4gIGpRdWVyeS50eXBlID0gdG9UeXBlO1xuICBqUXVlcnkubm93ID0gRGF0ZS5ub3c7XG5cbiAgalF1ZXJ5LmlzTnVtZXJpYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAvLyBBcyBvZiBqUXVlcnkgMy4wLCBpc051bWVyaWMgaXMgbGltaXRlZCB0b1xuICAgIC8vIHN0cmluZ3MgYW5kIG51bWJlcnMgKHByaW1pdGl2ZXMgb3Igb2JqZWN0cylcbiAgICAvLyB0aGF0IGNhbiBiZSBjb2VyY2VkIHRvIGZpbml0ZSBudW1iZXJzIChnaC0yNjYyKVxuICAgIHZhciB0eXBlID0galF1ZXJ5LnR5cGUob2JqKTtcbiAgICByZXR1cm4gKHR5cGUgPT09IFwibnVtYmVyXCIgfHwgdHlwZSA9PT0gXCJzdHJpbmdcIikgJiYgLy8gcGFyc2VGbG9hdCBOYU5zIG51bWVyaWMtY2FzdCBmYWxzZSBwb3NpdGl2ZXMgKFwiXCIpXG4gICAgLy8gLi4uYnV0IG1pc2ludGVycHJldHMgbGVhZGluZy1udW1iZXIgc3RyaW5ncywgcGFydGljdWxhcmx5IGhleCBsaXRlcmFscyAoXCIweC4uLlwiKVxuICAgIC8vIHN1YnRyYWN0aW9uIGZvcmNlcyBpbmZpbml0aWVzIHRvIE5hTlxuICAgICFpc05hTihvYmogLSBwYXJzZUZsb2F0KG9iaikpO1xuICB9OyAvLyBSZWdpc3RlciBhcyBhIG5hbWVkIEFNRCBtb2R1bGUsIHNpbmNlIGpRdWVyeSBjYW4gYmUgY29uY2F0ZW5hdGVkIHdpdGggb3RoZXJcbiAgLy8gZmlsZXMgdGhhdCBtYXkgdXNlIGRlZmluZSwgYnV0IG5vdCB2aWEgYSBwcm9wZXIgY29uY2F0ZW5hdGlvbiBzY3JpcHQgdGhhdFxuICAvLyB1bmRlcnN0YW5kcyBhbm9ueW1vdXMgQU1EIG1vZHVsZXMuIEEgbmFtZWQgQU1EIGlzIHNhZmVzdCBhbmQgbW9zdCByb2J1c3RcbiAgLy8gd2F5IHRvIHJlZ2lzdGVyLiBMb3dlcmNhc2UganF1ZXJ5IGlzIHVzZWQgYmVjYXVzZSBBTUQgbW9kdWxlIG5hbWVzIGFyZVxuICAvLyBkZXJpdmVkIGZyb20gZmlsZSBuYW1lcywgYW5kIGpRdWVyeSBpcyBub3JtYWxseSBkZWxpdmVyZWQgaW4gYSBsb3dlcmNhc2VcbiAgLy8gZmlsZSBuYW1lLiBEbyB0aGlzIGFmdGVyIGNyZWF0aW5nIHRoZSBnbG9iYWwgc28gdGhhdCBpZiBhbiBBTUQgbW9kdWxlIHdhbnRzXG4gIC8vIHRvIGNhbGwgbm9Db25mbGljdCB0byBoaWRlIHRoaXMgdmVyc2lvbiBvZiBqUXVlcnksIGl0IHdpbGwgd29yay5cbiAgLy8gTm90ZSB0aGF0IGZvciBtYXhpbXVtIHBvcnRhYmlsaXR5LCBsaWJyYXJpZXMgdGhhdCBhcmUgbm90IGpRdWVyeSBzaG91bGRcbiAgLy8gZGVjbGFyZSB0aGVtc2VsdmVzIGFzIGFub255bW91cyBtb2R1bGVzLCBhbmQgYXZvaWQgc2V0dGluZyBhIGdsb2JhbCBpZiBhblxuICAvLyBBTUQgbG9hZGVyIGlzIHByZXNlbnQuIGpRdWVyeSBpcyBhIHNwZWNpYWwgY2FzZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vanJidXJrZS9yZXF1aXJlanMvd2lraS9VcGRhdGluZy1leGlzdGluZy1saWJyYXJpZXMjd2lraS1hbm9uXG5cblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJqcXVlcnlcIiwgW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBqUXVlcnk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgLy8gTWFwIG92ZXIgalF1ZXJ5IGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gIF9qUXVlcnkgPSB3aW5kb3cualF1ZXJ5LFxuICAgICAgLy8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcbiAgXyQgPSB3aW5kb3cuJDtcblxuICBqUXVlcnkubm9Db25mbGljdCA9IGZ1bmN0aW9uIChkZWVwKSB7XG4gICAgaWYgKHdpbmRvdy4kID09PSBqUXVlcnkpIHtcbiAgICAgIHdpbmRvdy4kID0gXyQ7XG4gICAgfVxuXG4gICAgaWYgKGRlZXAgJiYgd2luZG93LmpRdWVyeSA9PT0galF1ZXJ5KSB7XG4gICAgICB3aW5kb3cualF1ZXJ5ID0gX2pRdWVyeTtcbiAgICB9XG5cbiAgICByZXR1cm4galF1ZXJ5O1xuICB9OyAvLyBFeHBvc2UgalF1ZXJ5IGFuZCAkIGlkZW50aWZpZXJzLCBldmVuIGluIEFNRFxuICAvLyAoIzcxMDIjY29tbWVudDoxMCwgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvcHVsbC81NTcpXG4gIC8vIGFuZCBDb21tb25KUyBmb3IgYnJvd3NlciBlbXVsYXRvcnMgKCMxMzU2NilcblxuXG4gIGlmICghbm9HbG9iYWwpIHtcbiAgICB3aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSBqUXVlcnk7XG4gIH1cblxuICByZXR1cm4galF1ZXJ5O1xufSk7IiwiLy8gY29uc3QgY29uZGl0aW9uYWxUaXRsZUNvbG9yID0gKHRvdGFsKSA9PiB7XG4vLyAgICAgZDMuc2VsZWN0KFwiLnRpdGxlLTFcIilcbi8vICAgICAgICAgLmRhdGEoW3RvdGFsXSlcbi8vICAgICAgICAgLnRyYW5zaXRpb24oKVxuLy8gICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuLy8gICAgICAgICAuZHVyYXRpb24oMjAwMClcbi8vICAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgZCA9PiB7XG4vLyAgICAgICAgICAgICBpZiAoZC5hdmVyYWdlID4gMC4xMykge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezMyICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAkezE5NiAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHsxNjggKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sIDAuOTcpYFxuLy8gICAgICAgICAgICAgfSBlbHNlIGlmIChkLmF2ZXJhZ2UgPCAtMC4xMykge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezEyOCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7NDAgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgMC45NylgXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgyNTUsMjU1LDI1NSwwLjgpYFxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuLy8gICAgIGQzLnNlbGVjdChcIi50aXRsZS0yXCIpXG4vLyAgICAgICAgIC5kYXRhKFt0b3RhbF0pXG4vLyAgICAgICAgIC50cmFuc2l0aW9uKClcbi8vICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbi8vICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4vLyAgICAgICAgIC5zdHlsZShcImNvbG9yXCIsIGQgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKGQuYXZlcmFnZSA+IDAuMTMpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHszMiAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHsxOTYgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7MTY4ICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAwLjk3KWBcbi8vICAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5hdmVyYWdlIDwgLTAuMTMpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsxMjggKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHs0MCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sIDAuOTcpYFxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoMjU1LDI1NSwyNTUsMC44KWBcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcbi8vIH1cblxuZXhwb3J0IGNvbnN0IHR3ZWV0c1JlbmRlciA9IChkYXRhKSA9PiB7XG4gICAgZDMuc2VsZWN0KFwiLmNoYXJ0XCIpXG4gICAgLmRhdGEoZGF0YSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJwXCIpXG59IiwiXG5pbXBvcnQgeyB0d2VldFN0cmVhbSB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBxdWVyeUZpZWxkIGZyb20gXCIuL3F1ZXJ5X2ZpZWxkXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICB3aW5kb3cudHdlZXRTdHJlYW0gPSB0d2VldFN0cmVhbTtcbiAgICBjb25zdCBwcm9wcyA9IHt9XG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLTFcIik7XG4gICAgc2VhcmNoLmluc2VydEJlZm9yZShxdWVyeUZpZWxkKHByb3BzKSwgdGl0bGUpXG59KSIsImltcG9ydCB7IHR3ZWV0U3RyZWFtIH0gZnJvbSBcIi4vdXRpbFwiXG5pbXBvcnQgeyB0d2VldHNSZW5kZXIgfSBmcm9tIFwiLi9jaGFydF91dGlsXCI7XG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgcXVlcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJxdWVyeS1maWVsZFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInotaW5kZXhcIiwgXCIxMDBcIik7XG5cblxuICAgIHNldFRpbWVvdXQoICgpID0+e1xuICAgICAgICB0eXBpbmdXb3JkKHF1ZXJ5SW5wdXQpO1xuICAgIH0sIDEwMDApXG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChxdWVyeUlucHV0KVxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBoYW5kbGVUeXBpbmcoZXZlbnQsIHByb3BzLCBxdWVyeUlucHV0KVxuICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgZm9ybVxuICAgIClcbn1cblxuY29uc3QgdHlwaW5nV29yZCA9IChxdWVyeUlucHV0KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgXCJMb25kb24sIDI1XCIsXG4gICAgICAgIFwiQW50cywgNTBcIixcbiAgICAgICAgXCJCZWFycywgMzNcIixcbiAgICAgICAgXCJCZWV0cywgMTAwXCIsXG4gICAgICAgIFwiQ29uZ3Jlc3MsIDIzMFwiLFxuICAgICAgICBcIkJhbmFuYXMsIDQ1XCIsXG4gICAgICAgIFwiQ2hlZXNlLCA3N1wiLFxuICAgICAgICBcIlRydW1wLCAxMDAwXCIsXG4gICAgICAgIFwiUGVuZ3VpbnMsIDIwXCIsXG4gICAgICAgIFwiVGhlIHNlbmF0ZSwgMTAwXCIsXG4gICAgICAgIFwiR29vZ2xlLCAxMjBcIixcbiAgICAgICAgXCJTcGFjZSBUcmF2ZWwsIDUwXCIsXG4gICAgICAgIFwiVGVzbGEsIDQ1XCIsXG4gICAgICAgIFwiQk1XLCAxMDBcIixcbiAgICAgICAgXCJTdXByYSwgMjBcIixcbiAgICAgICAgXCJEb2dzLCAxMDBcIlxuICAgIF1cbiAgICBjb25zdCBzdHIgPSBvcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wdGlvbnMubGVuZ3RoKV1cbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBjeWNsZSA9IHNldEludGVydmFsKCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5yYW5kb20oKVxuICAgICAgICBpZiAocmFuZCA+IDAuMykge1xuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHN0ci5zbGljZSgwLCBpKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA+PSBzdHIubGVuZ3RoKXtcbiAgICAgICAgICAgIHF1ZXJ5SW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGNsZWFySW5wdXQocXVlcnlJbnB1dCwgY3ljbGUpKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY3ljbGUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKVxuICAgICAgICAgICAgICAgIHR5cGluZ1dvcmQocXVlcnlJbnB1dClcbiAgICAgICAgICAgIH0sIDE1MDApXG4gICAgICAgIH1cbiAgICB9LCAyMDApXG4gICAgcXVlcnlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgY2xlYXJJbnB1dChxdWVyeUlucHV0LCBjeWNsZSkpXG59XG5cbmNvbnN0IGNsZWFySW5wdXQgPSAocXVlcnlJbnB1dCwgY3ljbGUpID0+ICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGN5Y2xlKVxuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIilcbn1cblxuY29uc3QgaGFuZGxlVHlwaW5nID0gKGV2ZW50LHByb3BzLCBxdWVyeUlucHV0KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5SW5wdXQudmFsdWU7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgY29uc3Qgb2JqID0geyBxdWVyeVN0cjogcGFydHNbMF0sIHF1ZXJ5TnVtOiBwYXJzZUludChwYXJ0c1sxXSkgfTtcbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH0gXG5cblxuICAgIGxldCB0d2VldHMgPSBbXTtcbiAgICBjb25zdCBjYWxsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0d2VldFN0cmVhbShyZXF1ZXN0KCkpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UubGVuZ3RoID4gdHdlZXRzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWV0cyA9IHJlc3BvbnNlLnNsaWNlKDAsIHJlcXVlc3QoKS5xdWVyeU51bSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR3ZWV0cyk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZiAodHdlZXRzLmxlbmd0aCA+PSByZXF1ZXN0KCkucXVlcnlOdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjYWxsKVxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHR3ZWV0c2xvZylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codHdlZXRzKVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9KSAgIFxuICAgIH0sIDUwMCk7XG5cbiAgICBjb25zdCB0b3RhbFNlbnQgPSAwO1xuXG4gICAgY29uc3Qgc3RvcENhbGwgPSAoKSA9PiB7XG4gICAgICAgIGlmKHR3ZWV0cy5sZW5ndGggPj0gcmVxdWVzdCgpLnF1ZXJ5TnVtKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2FsbClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgIFxuICAgIC8vIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgLy8gIGQzLnNlbGVjdCgnYm9keScpXG4gICAgICAgIC8vIC5zZWxlY3RBbGwoJ3AnKVxuICAgICAgICAvLyAuZGF0YSh0d2VldHMpXG4gICAgICAgIC8vIC5lbnRlcigpXG4gICAgICAgIC8vIC5hcHBlbmQoJ3AnKSBcbiAgICAgICAgLy8gLnRleHQoYCR7dHdlZXRzLnRleHR9YCk7XG4gICAgLy8gfSwgNTApO1xuICAgIGNvbnN0IHR3ZWV0c2xvZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codHdlZXRzKVxuICAgIH0sIDUxMCk7XG4gICBcbn1cblxuXG4vLyBVc2UgZm9yIHRlc3RpbmcgZnVuY3Rpb25hbGl0eSwgc291cmNlZCBmcm9tOiBodHRwczovL2NvZGVidXJzdC5pby90aHJvdHRsaW5nLWFuZC1kZWJvdW5jaW5nLWluLWphdmFzY3JpcHQtNjQ2ZDA3NmQwYTQ0XG5jb25zdCBkZWJvdW5jZSA9IChkZWxheSwgZm4pID0+IHtcbiAgICBsZXQgdGltZXJJZDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHRpbWVySWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgfVxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHRpbWVySWQgPSBudWxsO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxufVxuXG5jb25zdCBkZWJvdW5jZWRUeXBpbmcgPSBkZWJvdW5jZSg3MDAsIGhhbmRsZVR5cGluZyk7IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXG5cbmV4cG9ydCBjb25zdCB0d2VldFN0cmVhbSA9IChkYXRhKSA9PiAoXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBcIi90d2VldHNcIixcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbilcbiJdLCJzb3VyY2VSb290IjoiIn0=