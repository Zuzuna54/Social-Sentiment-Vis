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
/*! exports provided: conditionalBackgroundColor, conditionalTitleColor, conditionalDisplay, conditionalOpacity, conditionalColor, fillArticleInfo, handleDotUX, generateDateRange, sortDate, mergeLineData, initialRender, handleArticleScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditionalBackgroundColor", function() { return conditionalBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditionalTitleColor", function() { return conditionalTitleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditionalDisplay", function() { return conditionalDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditionalOpacity", function() { return conditionalOpacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditionalColor", function() { return conditionalColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillArticleInfo", function() { return fillArticleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDotUX", function() { return handleDotUX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDateRange", function() { return generateDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDate", function() { return sortDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeLineData", function() { return mergeLineData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialRender", function() { return initialRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleArticleScroll", function() { return handleArticleScroll; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var conditionalTitleColor = function conditionalTitleColor(total) {
  d3.select(".chart-title").data([total]).transition().ease(d3.easeExp).duration(2000).style("color", function (d) {
    if (d.average > 0.13) {
      return "rgba(".concat(32 * Math.sqrt(d.average), ", ").concat(196 * Math.sqrt(d.average), ", ").concat(168 * Math.sqrt(d.average), ", 0.97)");
    } else if (d.average < -0.13) {
      return "rgba(".concat(128 * Math.sqrt(Math.abs(d.average)), ", ").concat(40 * Math.sqrt(Math.abs(d.average)), ", ").concat(40 * Math.sqrt(Math.abs(d.average)), ", 0.97)");
    } else {
      return "rgba(255,255,255,0.8)";
    }
  });
  d3.select("#second-title").data([total]).transition().ease(d3.easeExp).duration(2000).style("color", function (d) {
    if (d.average > 0.13) {
      return "rgba(".concat(32 * Math.sqrt(d.average), ", ").concat(196 * Math.sqrt(d.average), ", ").concat(168 * Math.sqrt(d.average), ", 0.97)");
    } else if (d.average < -0.13) {
      return "rgba(".concat(128 * Math.sqrt(Math.abs(d.average)), ", ").concat(40 * Math.sqrt(Math.abs(d.average)), ", ").concat(40 * Math.sqrt(Math.abs(d.average)), ", 0.97)");
    } else {
      return "rgba(255,255,255,0.8)";
    }
  });
};

var conditionalDisplay = function conditionalDisplay(attr_value, cutoff) {
  var greaterThan = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  switch (greaterThan) {
    case true:
      if (attr_value > cutoff) {
        return "none";
      } else {
        return "inherit";
      }

    case false:
      if (attr_value < cutoff) {
        return "none";
      } else {
        return "inherit";
      }

    default:
      return "inherit";
  }
};

var conditionalOpacity = function conditionalOpacity(d, good, bad) {
  if (d.y >= good) {
    return "0.8";
  } else if (d.y <= bad) {
    return "0.6";
  } else {
    return "0.3";
  }
};

var conditionalColor = function conditionalColor(d, good, bad) {
  var opacity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  if (d.y >= good) {
    return "rgba(32,196,168, ".concat(opacity);
  } else if (d.y <= bad) {
    return "rgba(255,0,0, ".concat(opacity);
  } else {
    return "rgba(255,255,255, ".concat(opacity);
  }
};

var fillArticleInfo = function fillArticleInfo(singleArticleInfo, d) {
  singleArticleInfo.select(".article-title").text("".concat(d.title)).transition().ease(d3.easeExp).duration(1700).style("color", "rgba(255,255,255, 0.5)");
  singleArticleInfo.select(".article-author").text("".concat(d.source)).transition().ease(d3.easeExp).duration(1700).style("color", "rgba(255,255,255, 0.5)");
  singleArticleInfo.select(".article-description").text("".concat(d.description)).transition().ease(d3.easeExp).duration(1700).style("color", "rgba(255,255,255, 0.5)");
  singleArticleInfo.select(".article-image").attr("src", "".concat(d.image));
  singleArticleInfo.select(".read-more").attr("href", "".concat(d.url));
};

var handleDotUX = function handleDotUX(d, bigDot, singleArticleInfo) {
  var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var intialize_duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var delay = 2000 + intialize_duration;

  if (speed >= 1) {
    bigDot.transition().delay(delay).ease(d3.easeElastic).duration(2500).attr("r", 8).style("fill", "darkblue").style("opacity", 1);

    if (speed >= 1) {
      singleArticleInfo.transition().delay(delay + 500).duration(800).style("background-color", "rgba(0, 0, 139, 0.5)");
      fillArticleInfo(singleArticleInfo, d);
      singleArticleInfo.transition().delay(delay + 1350).duration(800).style("background-color", "transparent");
    }
  } else {
    bigDot.style("fill", "darkblue").style("opacity", 1);
    bigDot.transition().ease(d3.easeLinear).duration(300).attr("r", 8);
    fillArticleInfo(singleArticleInfo, d);
  }
};

Date.prototype.addDay = function () {
  this.setDate(this.getDate() + 1);
};

var generateDateRange = function generateDateRange(startDate, endDate) {
  var dates = [];
  var currentDate = startDate;

  while (currentDate < endDate) {
    var date = new Date(currentDate);
    var formattedDate = "".concat(date.getFullYear()) + "-" + "0".concat(date.getMonth() + 1) + "-" + "".concat(date.getDate());
    dates.push(_defineProperty({}, formattedDate, {
      x: formattedDate,
      y: null
    }));
    currentDate.addDay();
  }

  return dates;
};

var sortDate = function sortDate(a, b) {
  var date1 = new Date(a.x);
  var date2 = new Date(b.x);

  if (date1 >= date2) {
    return 1;
  } else {
    return -1;
  }
};

var mergeLineData = function mergeLineData(dateRange, lineData) {
  var mergedData = Object.assign([], dateRange, lineData);
  var unkeyedData = [];
  mergedData.forEach(function (outerDatum) {
    unkeyedData.push(Object.values(outerDatum));
  });
  return unkeyedData.flat().sort(sortDate);
};

var initialRender = function initialRender(svg, intialize_duration, total) {
  d3.select("html").transition("appear").ease(d3.easeQuad).duration(intialize_duration - 1500).attr("background-image", "none");
  d3.select("#main").transition("appear").ease(d3.easeQuad).duration(intialize_duration - 1500).style("top", "0px");
  d3.select(".article-image").transition("appear").delay(800).ease(d3.easeExp).duration(intialize_duration + 1000).style("opacity", 1);
  d3.select(".info-container").transition("appear").delay(800).ease(d3.easeExp).duration(intialize_duration + 1000).style("opacity", 1);
  return false;
};

var handleArticleScroll = function handleArticleScroll(i) {
  document.getElementById("article_".concat(i)).scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
  d3.select("#article_".concat(i)).style("background", "rgba(0, 0, 139, 0.5)");
};

var conditionalBackgroundColor = function conditionalBackgroundColor(total) {
  d3.select("html").data([total]).transition().ease(d3.easeQuad).duration(2000).style("background-color", function (d) {
    if (d.average > 0.13) {
      return "rgba(".concat(32 * Math.sqrt(d.average), ", ").concat(196 * Math.sqrt(d.average), ", ").concat(168 * Math.sqrt(d.average), ", 0.97)");
    } else if (d.average < -0.13) {
      return "rgba(".concat(128 * Math.sqrt(Math.abs(d.average)), ", ").concat(40 * Math.sqrt(Math.abs(d.average)), ", ").concat(40 * Math.sqrt(Math.abs(d.average)), ", 0.97)");
    } else {
      return "rgba(50,50,50,0.8)";
    }
  });
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
/* harmony import */ var _query_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query_field */ "./src/query_field.js");

document.addEventListener("DOMContentLoaded", function () {
  var props = {};
  var search = document.getElementById("search");
  var title = document.getElementById("title-1");
  search.insertBefore(Object(_query_field__WEBPACK_IMPORTED_MODULE_0__["default"])(props), title);
  var chart = new Chart(props);
  props.chart = chart;
  var dummyData = chart.dummyData();
  chart.build(dummyData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0X3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVyeV9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJjb25kaXRpb25hbFRpdGxlQ29sb3IiLCJ0b3RhbCIsImQzIiwic2VsZWN0IiwiZGF0YSIsInRyYW5zaXRpb24iLCJlYXNlIiwiZWFzZUV4cCIsImR1cmF0aW9uIiwic3R5bGUiLCJkIiwiYXZlcmFnZSIsIk1hdGgiLCJzcXJ0IiwiYWJzIiwiY29uZGl0aW9uYWxEaXNwbGF5IiwiYXR0cl92YWx1ZSIsImN1dG9mZiIsImdyZWF0ZXJUaGFuIiwiY29uZGl0aW9uYWxPcGFjaXR5IiwiZ29vZCIsImJhZCIsInkiLCJjb25kaXRpb25hbENvbG9yIiwib3BhY2l0eSIsImZpbGxBcnRpY2xlSW5mbyIsInNpbmdsZUFydGljbGVJbmZvIiwidGV4dCIsInRpdGxlIiwic291cmNlIiwiZGVzY3JpcHRpb24iLCJhdHRyIiwiaW1hZ2UiLCJ1cmwiLCJoYW5kbGVEb3RVWCIsImJpZ0RvdCIsInNwZWVkIiwiaW50aWFsaXplX2R1cmF0aW9uIiwiZGVsYXkiLCJlYXNlRWxhc3RpYyIsImVhc2VMaW5lYXIiLCJEYXRlIiwicHJvdG90eXBlIiwiYWRkRGF5Iiwic2V0RGF0ZSIsImdldERhdGUiLCJnZW5lcmF0ZURhdGVSYW5nZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJkYXRlcyIsImN1cnJlbnREYXRlIiwiZGF0ZSIsImZvcm1hdHRlZERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwicHVzaCIsIngiLCJzb3J0RGF0ZSIsImEiLCJiIiwiZGF0ZTEiLCJkYXRlMiIsIm1lcmdlTGluZURhdGEiLCJkYXRlUmFuZ2UiLCJsaW5lRGF0YSIsIm1lcmdlZERhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ1bmtleWVkRGF0YSIsImZvckVhY2giLCJvdXRlckRhdHVtIiwidmFsdWVzIiwiZmxhdCIsInNvcnQiLCJpbml0aWFsUmVuZGVyIiwic3ZnIiwiZWFzZVF1YWQiLCJoYW5kbGVBcnRpY2xlU2Nyb2xsIiwiaSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJjb25kaXRpb25hbEJhY2tncm91bmRDb2xvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9wcyIsInNlYXJjaCIsImluc2VydEJlZm9yZSIsInF1ZXJ5RmllbGQiLCJjaGFydCIsIkNoYXJ0IiwiZHVtbXlEYXRhIiwiYnVpbGQiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5SW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwidHlwaW5nV29yZCIsImFwcGVuZENoaWxkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVR5cGluZyIsIm9wdGlvbnMiLCJzdHIiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImN5Y2xlIiwic2V0SW50ZXJ2YWwiLCJyYW5kIiwic2xpY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJJbnB1dCIsImNsZWFySW50ZXJ2YWwiLCJ2YWx1ZSIsInJlcXVlc3QiLCJwYXJ0cyIsInNwbGl0Iiwib2JqIiwicXVlcnlTdHIiLCJxdWVyeU51bSIsInBhcnNlSW50IiwidHdlZXRzIiwiY2FsbCIsInR3ZWV0U3RyZWFtIiwidGhlbiIsInJlc3BvbnNlIiwidHdlZXRzbG9nIiwiY29uc29sZSIsImxvZyIsInRvdGFsU2VudCIsInN0b3BDYWxsIiwiZGVib3VuY2UiLCJmbiIsInRpbWVySWQiLCJhcmdzIiwiY2xlYXJUaW1lb3V0IiwiZGVib3VuY2VkVHlwaW5nIiwiJCIsImFqYXgiLCJtZXRob2QiXSwibWFwcGluZ3Mi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Q0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQSxPQUFPOzs7QUFHUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSyxFQUFFOzs7QUFHUDtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjs7QUFFakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZixhQUFhO0FBQ2I7QUFDQSw2QkFBNkI7QUFDN0IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZUFBZTs7O0FBR2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLE9BQU87QUFDeEI7OztBQUdBO0FBQ0E7QUFDQSw4RkFBOEY7O0FBRTlGO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUSw2QkFBNkI7QUFDcEQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0IsaUJBQWlCLHVCQUF1QjtBQUN4Qzs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QixpQkFBaUIsUUFBUTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUIsaUJBQWlCLE9BQU87QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTs7QUFFakU7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVCxxRkFBcUY7QUFDckY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlOzs7QUFHZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUxBQWlMO0FBQ2pMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGtIQUFrSDtBQUNsSDs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7OztBQUdBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWlFO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7O0FBRUE7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQSwrSUFBK0k7QUFDL0ksU0FBUztBQUNUO0FBQ0EsU0FBUzs7O0FBR1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNDQUFzQyxNQUFNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7OztBQUdBO0FBQ0Esb0VBQW9FO0FBQ3BFLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQSxrREFBa0Q7QUFDbEQsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7O0FBR25CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLEVBQUU7QUFDbkU7O0FBRUEsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsRUFBRTtBQUNyRTs7QUFFQSw0RkFBNEY7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsRUFBRTtBQUMzRTs7QUFFQSxrR0FBa0c7QUFDbEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrSUFBa0k7QUFDbEk7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsVUFBVTtBQUNsRiw2Q0FBNkMsMkJBQTJCO0FBQ3hFO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLFNBQVM7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwrREFBK0QsRUFBRTtBQUNqRTs7QUFFQSx3RkFBd0Y7O0FBRXhGO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLDRDQUE0Qyw2QkFBNkI7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7O0FBR2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVgsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDRMQUE0TDs7QUFFNUw7QUFDQTtBQUNBLE9BQU87O0FBRVAsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0VBQStFOztBQUUvRTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNEQUFzRDs7O0FBR3RELGNBQWMsd0NBQXdDO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0EsV0FBVzs7O0FBR1gsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7OztBQUdULGlHQUFpRzs7QUFFakc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQixXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLFNBQVM7OztBQUdUOztBQUVBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQSxnRkFBZ0Y7QUFDaEY7O0FBRUEsOENBQThDOztBQUU5QyxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVLEdBQUc7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFGQUFxRjs7QUFFckY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFOztBQUVBLDBJQUEwSTs7QUFFMUk7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQsT0FBTztBQUNQLGdEQUFnRDtBQUNoRDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87O0FBRVAsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0osNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFOztBQUV2RTtBQUNBLGNBQWMsT0FBTztBQUNyQiw2QkFBNkIsd0JBQXdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0Q0FBNEM7QUFDNUMsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjs7QUFFckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQTs7QUFFQSxZQUFZLGNBQWM7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELE9BQU87QUFDUCw0Q0FBNEM7QUFDNUMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0Usa0NBQWtDLHNDQUFzQztBQUMxSSwyQ0FBMkMsdUNBQXVDO0FBQ2xGLDJDQUEyQyxzQ0FBc0M7O0FBRWpGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHOztBQUVqRztBQUNBO0FBQ0E7QUFDQSx1SUFBdUk7QUFDdkksbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7OztBQUdBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdIQUF3SDs7QUFFeEgscUdBQXFHOztBQUVyRztBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBLGdDQUFnQyxrQ0FBa0M7QUFDbEUsMENBQTBDO0FBQzFDLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7OztBQUdBO0FBQ0EsT0FBTyxFQUFFOztBQUVULGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQSwrRkFBK0Y7O0FBRS9GO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUCw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsR0FBRztBQUNILHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw2REFBNkQ7O0FBRTdEO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVAsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQSxHQUFHLGdDQUFnQztBQUNuQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBLHVDQUF1QyxzQkFBc0IsYUFBYTtBQUMxRSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWE7OztBQUd0QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsc0NBQXNDOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRDs7QUFFdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakMsVUFBVSxnQkFBZ0I7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLE9BQU87QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RCxTQUFTO0FBQ1QsbURBQW1EO0FBQ25ELFNBQVM7QUFDVCwwRUFBMEU7O0FBRTFFO0FBQ0E7QUFDQSx5RUFBeUU7O0FBRXpFOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7OztBQUdBLDhDQUE4Qzs7QUFFOUMsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtDQUFrQzs7QUFFbEMseURBQXlEOztBQUV6RDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBLCtFQUErRTtBQUMvRTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVCxtREFBbUQ7O0FBRW5ELDRFQUE0RTs7QUFFNUUsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGVBQWU7O0FBRXhCO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sMENBQTBDOzs7QUFHakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGOztBQUU3Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELDJEQUEyRDs7QUFFM0Q7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBLE9BQU87OztBQUdQLHVFQUF1RSx3QkFBd0I7O0FBRS9GOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixtQkFBbUI7QUFDMUMsc0NBQXNDOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVywyQ0FBMkM7QUFDdEQ7QUFDQSxXQUFXO0FBQ1g7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsMENBQTBDOztBQUUxQztBQUNBLDJEQUEyRDtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsS0FBSztBQUNMO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLEtBQUs7OztBQUdMLHdEQUF3RDs7QUFFeEQ7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQyxjQUFjOzs7QUFHekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0EsaUNBQWlDO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUEsY0FBYyxPQUFPO0FBQ3JCOztBQUVBO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDs7QUFFMUQsNkNBQTZDOztBQUU3QyxxQkFBcUIsZ0JBQWdCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsMkJBQTJCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGlDQUFpQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLFdBQVc7QUFDdkI7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsY0FBYyxXQUFXLG9CQUFvQixVQUFVO0FBQzFHLDZDQUE2QyxjQUFjLHNCQUFzQixnQkFBZ0IsaUJBQWlCLFdBQVcsWUFBWSxlQUFlO0FBQ3hKO0FBQ0E7QUFDQSwrQ0FBK0M7O0FBRS9DLDZFQUE2RTtBQUM3RTs7QUFFQTtBQUNBLG9FQUFvRTtBQUNwRTs7QUFFQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnQkFBZ0I7OztBQUd6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsMEVBQTBFOztBQUUxRTtBQUNBLHFGQUFxRjtBQUNyRixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUCxpRUFBaUU7O0FBRWpFO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1AsaUVBQWlFOztBQUVqRTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HO0FBQ25HOztBQUVBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUEsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7OztBQUdBLHdEQUF3RDs7QUFFeEQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBOztBQUVBLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLGdCQUFnQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFOztBQUV6RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7O0FBRUEsaUVBQWlFOztBQUVqRTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsY0FBYyxnQkFBZ0I7QUFDOUI7QUFDQSxTQUFTLDBDQUEwQzs7O0FBR25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUEsVUFBVSxnQkFBZ0I7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGlCQUFpQjs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUMsMkJBQTJCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1QsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVCx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLG1CQUFtQjtBQUM3Qix3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQSx5Q0FBeUM7QUFDekM7O0FBRUEsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxL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Ozs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUcsRUFBRTs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHLEVBQUU7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtB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LEVBQUUsS0FGTDtBQUdIMUksUUFBSSxFQUFFQTtBQUhILEdBQVAsQ0FEdUI7QUFBQSxDQUFwQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogalF1ZXJ5IEphdmFTY3JpcHQgTGlicmFyeSB2My40LjFcbiAqIGh0dHBzOi8vanF1ZXJ5LmNvbS9cbiAqXG4gKiBJbmNsdWRlcyBTaXp6bGUuanNcbiAqIGh0dHBzOi8vc2l6emxlanMuY29tL1xuICpcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDE5LTA1LTAxVDIxOjA0WlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAvLyBGb3IgQ29tbW9uSlMgYW5kIENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHdoZXJlIGEgcHJvcGVyIGB3aW5kb3dgXG4gICAgLy8gaXMgcHJlc2VudCwgZXhlY3V0ZSB0aGUgZmFjdG9yeSBhbmQgZ2V0IGpRdWVyeS5cbiAgICAvLyBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IGhhdmUgYSBgd2luZG93YCB3aXRoIGEgYGRvY3VtZW50YFxuICAgIC8vIChzdWNoIGFzIE5vZGUuanMpLCBleHBvc2UgYSBmYWN0b3J5IGFzIG1vZHVsZS5leHBvcnRzLlxuICAgIC8vIFRoaXMgYWNjZW50dWF0ZXMgdGhlIG5lZWQgZm9yIHRoZSBjcmVhdGlvbiBvZiBhIHJlYWwgYHdpbmRvd2AuXG4gICAgLy8gZS5nLiB2YXIgalF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKSh3aW5kb3cpO1xuICAgIC8vIFNlZSB0aWNrZXQgIzE0NTQ5IGZvciBtb3JlIGluZm8uXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuZG9jdW1lbnQgPyBmYWN0b3J5KGdsb2JhbCwgdHJ1ZSkgOiBmdW5jdGlvbiAodykge1xuICAgICAgaWYgKCF3LmRvY3VtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWN0b3J5KHcpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShnbG9iYWwpO1xuICB9IC8vIFBhc3MgdGhpcyBpZiB3aW5kb3cgaXMgbm90IGRlZmluZWQgeWV0XG5cbn0pKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiAod2luZG93LCBub0dsb2JhbCkge1xuICAvLyBFZGdlIDw9IDEyIC0gMTMrLCBGaXJlZm94IDw9MTggLSA0NSssIElFIDEwIC0gMTEsIFNhZmFyaSA1LjEgLSA5KywgaU9TIDYgLSA5LjFcbiAgLy8gdGhyb3cgZXhjZXB0aW9ucyB3aGVuIG5vbi1zdHJpY3QgY29kZSAoZS5nLiwgQVNQLk5FVCA0LjUpIGFjY2Vzc2VzIHN0cmljdCBtb2RlXG4gIC8vIGFyZ3VtZW50cy5jYWxsZWUuY2FsbGVyICh0cmFjLTEzMzM1KS4gQnV0IGFzIG9mIGpRdWVyeSAzLjAgKDIwMTYpLCBzdHJpY3QgbW9kZSBzaG91bGQgYmUgY29tbW9uXG4gIC8vIGVub3VnaCB0aGF0IGFsbCBzdWNoIGF0dGVtcHRzIGFyZSBndWFyZGVkIGluIGEgdHJ5IGJsb2NrLlxuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgYXJyID0gW107XG4gIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgc2xpY2UgPSBhcnIuc2xpY2U7XG4gIHZhciBjb25jYXQgPSBhcnIuY29uY2F0O1xuICB2YXIgcHVzaCA9IGFyci5wdXNoO1xuICB2YXIgaW5kZXhPZiA9IGFyci5pbmRleE9mO1xuICB2YXIgY2xhc3MydHlwZSA9IHt9O1xuICB2YXIgdG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nO1xuICB2YXIgaGFzT3duID0gY2xhc3MydHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGZuVG9TdHJpbmcgPSBoYXNPd24udG9TdHJpbmc7XG4gIHZhciBPYmplY3RGdW5jdGlvblN0cmluZyA9IGZuVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuICB2YXIgc3VwcG9ydCA9IHt9O1xuXG4gIHZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICAvLyBTdXBwb3J0OiBDaHJvbWUgPD01NywgRmlyZWZveCA8PTUyXG4gICAgLy8gSW4gc29tZSBicm93c2VycywgdHlwZW9mIHJldHVybnMgXCJmdW5jdGlvblwiIGZvciBIVE1MIDxvYmplY3Q+IGVsZW1lbnRzXG4gICAgLy8gKGkuZS4sIGB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJvYmplY3RcIiApID09PSBcImZ1bmN0aW9uXCJgKS5cbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIGNsYXNzaWZ5ICphbnkqIERPTSBub2RlIGFzIGEgZnVuY3Rpb24uXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygb2JqLm5vZGVUeXBlICE9PSBcIm51bWJlclwiO1xuICB9O1xuXG4gIHZhciBpc1dpbmRvdyA9IGZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG4gIH07XG5cbiAgdmFyIHByZXNlcnZlZFNjcmlwdEF0dHJpYnV0ZXMgPSB7XG4gICAgdHlwZTogdHJ1ZSxcbiAgICBzcmM6IHRydWUsXG4gICAgbm9uY2U6IHRydWUsXG4gICAgbm9Nb2R1bGU6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBET01FdmFsKGNvZGUsIG5vZGUsIGRvYykge1xuICAgIGRvYyA9IGRvYyB8fCBkb2N1bWVudDtcbiAgICB2YXIgaSxcbiAgICAgICAgdmFsLFxuICAgICAgICBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBzY3JpcHQudGV4dCA9IGNvZGU7XG5cbiAgICBpZiAobm9kZSkge1xuICAgICAgZm9yIChpIGluIHByZXNlcnZlZFNjcmlwdEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgLy8gU3VwcG9ydDogRmlyZWZveCA2NCssIEVkZ2UgMTgrXG4gICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCB0aGUgXCJub25jZVwiIHByb3BlcnR5IG9uIHNjcmlwdHMuXG4gICAgICAgIC8vIE9uIHRoZSBvdGhlciBoYW5kLCBqdXN0IHVzaW5nIGBnZXRBdHRyaWJ1dGVgIGlzIG5vdCBlbm91Z2ggYXNcbiAgICAgICAgLy8gdGhlIGBub25jZWAgYXR0cmlidXRlIGlzIHJlc2V0IHRvIGFuIGVtcHR5IHN0cmluZyB3aGVuZXZlciBpdFxuICAgICAgICAvLyBiZWNvbWVzIGJyb3dzaW5nLWNvbnRleHQgY29ubmVjdGVkLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy8yMzY5XG4gICAgICAgIC8vIFNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNub25jZS1hdHRyaWJ1dGVzXG4gICAgICAgIC8vIFRoZSBgbm9kZS5nZXRBdHRyaWJ1dGVgIGNoZWNrIHdhcyBhZGRlZCBmb3IgdGhlIHNha2Ugb2ZcbiAgICAgICAgLy8gYGpRdWVyeS5nbG9iYWxFdmFsYCBzbyB0aGF0IGl0IGNhbiBmYWtlIGEgbm9uY2UtY29udGFpbmluZyBub2RlXG4gICAgICAgIC8vIHZpYSBhbiBvYmplY3QuXG4gICAgICAgIHZhbCA9IG5vZGVbaV0gfHwgbm9kZS5nZXRBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoaSk7XG5cbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoaSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9UeXBlKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG9iaiArIFwiXCI7XG4gICAgfSAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9Mi4zIG9ubHkgKGZ1bmN0aW9uaXNoIFJlZ0V4cClcblxuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiID8gY2xhc3MydHlwZVt0b1N0cmluZy5jYWxsKG9iaildIHx8IFwib2JqZWN0XCIgOiB0eXBlb2Ygb2JqO1xuICB9XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgLy8gRGVmaW5pbmcgdGhpcyBnbG9iYWwgaW4gLmVzbGludHJjLmpzb24gd291bGQgY3JlYXRlIGEgZGFuZ2VyIG9mIHVzaW5nIHRoZSBnbG9iYWxcbiAgLy8gdW5ndWFyZGVkIGluIGFub3RoZXIgcGxhY2UsIGl0IHNlZW1zIHNhZmVyIHRvIGRlZmluZSBnbG9iYWwgb25seSBmb3IgdGhpcyBtb2R1bGVcblxuXG4gIHZhciB2ZXJzaW9uID0gXCIzLjQuMVwiLFxuICAgICAgLy8gRGVmaW5lIGEgbG9jYWwgY29weSBvZiBqUXVlcnlcbiAgalF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgLy8gVGhlIGpRdWVyeSBvYmplY3QgaXMgYWN0dWFsbHkganVzdCB0aGUgaW5pdCBjb25zdHJ1Y3RvciAnZW5oYW5jZWQnXG4gICAgLy8gTmVlZCBpbml0IGlmIGpRdWVyeSBpcyBjYWxsZWQgKGp1c3QgYWxsb3cgZXJyb3IgdG8gYmUgdGhyb3duIGlmIG5vdCBpbmNsdWRlZClcbiAgICByZXR1cm4gbmV3IGpRdWVyeS5mbi5pbml0KHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgfSxcbiAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuICAvLyBNYWtlIHN1cmUgd2UgdHJpbSBCT00gYW5kIE5CU1BcbiAgcnRyaW0gPSAvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7XG5cbiAgalF1ZXJ5LmZuID0galF1ZXJ5LnByb3RvdHlwZSA9IHtcbiAgICAvLyBUaGUgY3VycmVudCB2ZXJzaW9uIG9mIGpRdWVyeSBiZWluZyB1c2VkXG4gICAganF1ZXJ5OiB2ZXJzaW9uLFxuICAgIGNvbnN0cnVjdG9yOiBqUXVlcnksXG4gICAgLy8gVGhlIGRlZmF1bHQgbGVuZ3RoIG9mIGEgalF1ZXJ5IG9iamVjdCBpcyAwXG4gICAgbGVuZ3RoOiAwLFxuICAgIHRvQXJyYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzbGljZS5jYWxsKHRoaXMpO1xuICAgIH0sXG4gICAgLy8gR2V0IHRoZSBOdGggZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldCBPUlxuICAgIC8vIEdldCB0aGUgd2hvbGUgbWF0Y2hlZCBlbGVtZW50IHNldCBhcyBhIGNsZWFuIGFycmF5XG4gICAgZ2V0OiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG4gICAgICBpZiAobnVtID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHNsaWNlLmNhbGwodGhpcyk7XG4gICAgICB9IC8vIFJldHVybiBqdXN0IHRoZSBvbmUgZWxlbWVudCBmcm9tIHRoZSBzZXRcblxuXG4gICAgICByZXR1cm4gbnVtIDwgMCA/IHRoaXNbbnVtICsgdGhpcy5sZW5ndGhdIDogdGhpc1tudW1dO1xuICAgIH0sXG4gICAgLy8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBhbmQgcHVzaCBpdCBvbnRvIHRoZSBzdGFja1xuICAgIC8vIChyZXR1cm5pbmcgdGhlIG5ldyBtYXRjaGVkIGVsZW1lbnQgc2V0KVxuICAgIHB1c2hTdGFjazogZnVuY3Rpb24gKGVsZW1zKSB7XG4gICAgICAvLyBCdWlsZCBhIG5ldyBqUXVlcnkgbWF0Y2hlZCBlbGVtZW50IHNldFxuICAgICAgdmFyIHJldCA9IGpRdWVyeS5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zKTsgLy8gQWRkIHRoZSBvbGQgb2JqZWN0IG9udG8gdGhlIHN0YWNrIChhcyBhIHJlZmVyZW5jZSlcblxuICAgICAgcmV0LnByZXZPYmplY3QgPSB0aGlzOyAvLyBSZXR1cm4gdGhlIG5ld2x5LWZvcm1lZCBlbGVtZW50IHNldFxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG4gICAgLy8gRXhlY3V0ZSBhIGNhbGxiYWNrIGZvciBldmVyeSBlbGVtZW50IGluIHRoZSBtYXRjaGVkIHNldC5cbiAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBqUXVlcnkuZWFjaCh0aGlzLCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKGpRdWVyeS5tYXAodGhpcywgZnVuY3Rpb24gKGVsZW0sIGkpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwoZWxlbSwgaSwgZWxlbSk7XG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBzbGljZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKHNsaWNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH0sXG4gICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVxKDApO1xuICAgIH0sXG4gICAgbGFzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXEoLTEpO1xuICAgIH0sXG4gICAgZXE6IGZ1bmN0aW9uIChpKSB7XG4gICAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgaiA9ICtpICsgKGkgPCAwID8gbGVuIDogMCk7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soaiA+PSAwICYmIGogPCBsZW4gPyBbdGhpc1tqXV0gOiBbXSk7XG4gICAgfSxcbiAgICBlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuICAgIH0sXG4gICAgLy8gRm9yIGludGVybmFsIHVzZSBvbmx5LlxuICAgIC8vIEJlaGF2ZXMgbGlrZSBhbiBBcnJheSdzIG1ldGhvZCwgbm90IGxpa2UgYSBqUXVlcnkgbWV0aG9kLlxuICAgIHB1c2g6IHB1c2gsXG4gICAgc29ydDogYXJyLnNvcnQsXG4gICAgc3BsaWNlOiBhcnIuc3BsaWNlXG4gIH07XG5cbiAgalF1ZXJ5LmV4dGVuZCA9IGpRdWVyeS5mbi5leHRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHNyYyxcbiAgICAgICAgY29weSxcbiAgICAgICAgY29weUlzQXJyYXksXG4gICAgICAgIGNsb25lLFxuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbMF0gfHwge30sXG4gICAgICAgIGkgPSAxLFxuICAgICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICBkZWVwID0gZmFsc2U7IC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcImJvb2xlYW5cIikge1xuICAgICAgZGVlcCA9IHRhcmdldDsgLy8gU2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXG4gICAgICB0YXJnZXQgPSBhcmd1bWVudHNbaV0gfHwge307XG4gICAgICBpKys7XG4gICAgfSAvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIgJiYgIWlzRnVuY3Rpb24odGFyZ2V0KSkge1xuICAgICAgdGFyZ2V0ID0ge307XG4gICAgfSAvLyBFeHRlbmQgalF1ZXJ5IGl0c2VsZiBpZiBvbmx5IG9uZSBhcmd1bWVudCBpcyBwYXNzZWRcblxuXG4gICAgaWYgKGkgPT09IGxlbmd0aCkge1xuICAgICAgdGFyZ2V0ID0gdGhpcztcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG4gICAgICBpZiAoKG9wdGlvbnMgPSBhcmd1bWVudHNbaV0pICE9IG51bGwpIHtcbiAgICAgICAgLy8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuICAgICAgICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICAgIGNvcHkgPSBvcHRpb25zW25hbWVdOyAvLyBQcmV2ZW50IE9iamVjdC5wcm90b3R5cGUgcG9sbHV0aW9uXG4gICAgICAgICAgLy8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXG4gICAgICAgICAgaWYgKG5hbWUgPT09IFwiX19wcm90b19fXCIgfHwgdGFyZ2V0ID09PSBjb3B5KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXG5cbiAgICAgICAgICBpZiAoZGVlcCAmJiBjb3B5ICYmIChqUXVlcnkuaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGNvcHkpKSkpIHtcbiAgICAgICAgICAgIHNyYyA9IHRhcmdldFtuYW1lXTsgLy8gRW5zdXJlIHByb3BlciB0eXBlIGZvciB0aGUgc291cmNlIHZhbHVlXG5cbiAgICAgICAgICAgIGlmIChjb3B5SXNBcnJheSAmJiAhQXJyYXkuaXNBcnJheShzcmMpKSB7XG4gICAgICAgICAgICAgIGNsb25lID0gW107XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFjb3B5SXNBcnJheSAmJiAhalF1ZXJ5LmlzUGxhaW5PYmplY3Qoc3JjKSkge1xuICAgICAgICAgICAgICBjbG9uZSA9IHt9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2xvbmUgPSBzcmM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvcHlJc0FycmF5ID0gZmFsc2U7IC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBqUXVlcnkuZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTsgLy8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29weSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBjb3B5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3RcblxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBqUXVlcnkuZXh0ZW5kKHtcbiAgICAvLyBVbmlxdWUgZm9yIGVhY2ggY29weSBvZiBqUXVlcnkgb24gdGhlIHBhZ2VcbiAgICBleHBhbmRvOiBcImpRdWVyeVwiICsgKHZlcnNpb24gKyBNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZywgXCJcIiksXG4gICAgLy8gQXNzdW1lIGpRdWVyeSBpcyByZWFkeSB3aXRob3V0IHRoZSByZWFkeSBtb2R1bGVcbiAgICBpc1JlYWR5OiB0cnVlLFxuICAgIGVycm9yOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9LFxuICAgIG5vb3A6IGZ1bmN0aW9uICgpIHt9LFxuICAgIGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHZhciBwcm90bywgQ3RvcjsgLy8gRGV0ZWN0IG9idmlvdXMgbmVnYXRpdmVzXG4gICAgICAvLyBVc2UgdG9TdHJpbmcgaW5zdGVhZCBvZiBqUXVlcnkudHlwZSB0byBjYXRjaCBob3N0IG9iamVjdHNcblxuICAgICAgaWYgKCFvYmogfHwgdG9TdHJpbmcuY2FsbChvYmopICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcHJvdG8gPSBnZXRQcm90byhvYmopOyAvLyBPYmplY3RzIHdpdGggbm8gcHJvdG90eXBlIChlLmcuLCBgT2JqZWN0LmNyZWF0ZSggbnVsbCApYCkgYXJlIHBsYWluXG5cbiAgICAgIGlmICghcHJvdG8pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IC8vIE9iamVjdHMgd2l0aCBwcm90b3R5cGUgYXJlIHBsYWluIGlmZiB0aGV5IHdlcmUgY29uc3RydWN0ZWQgYnkgYSBnbG9iYWwgT2JqZWN0IGZ1bmN0aW9uXG5cblxuICAgICAgQ3RvciA9IGhhc093bi5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICAgICAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgZm5Ub1N0cmluZy5jYWxsKEN0b3IpID09PSBPYmplY3RGdW5jdGlvblN0cmluZztcbiAgICB9LFxuICAgIGlzRW1wdHlPYmplY3Q6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHZhciBuYW1lO1xuXG4gICAgICBmb3IgKG5hbWUgaW4gb2JqKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICAvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBnbG9iYWwgY29udGV4dFxuICAgIGdsb2JhbEV2YWw6IGZ1bmN0aW9uIChjb2RlLCBvcHRpb25zKSB7XG4gICAgICBET01FdmFsKGNvZGUsIHtcbiAgICAgICAgbm9uY2U6IG9wdGlvbnMgJiYgb3B0aW9ucy5ub25jZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBlYWNoOiBmdW5jdGlvbiAob2JqLCBjYWxsYmFjaykge1xuICAgICAgdmFyIGxlbmd0aCxcbiAgICAgICAgICBpID0gMDtcblxuICAgICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgICAgbGVuZ3RoID0gb2JqLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwob2JqW2ldLCBpLCBvYmpbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwob2JqW2ldLCBpLCBvYmpbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHlcbiAgICB0cmltOiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgcmV0dXJuIHRleHQgPT0gbnVsbCA/IFwiXCIgOiAodGV4dCArIFwiXCIpLnJlcGxhY2UocnRyaW0sIFwiXCIpO1xuICAgIH0sXG4gICAgLy8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuICAgIG1ha2VBcnJheTogZnVuY3Rpb24gKGFyciwgcmVzdWx0cykge1xuICAgICAgdmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cbiAgICAgIGlmIChhcnIgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNBcnJheUxpa2UoT2JqZWN0KGFycikpKSB7XG4gICAgICAgICAgalF1ZXJ5Lm1lcmdlKHJldCwgdHlwZW9mIGFyciA9PT0gXCJzdHJpbmdcIiA/IFthcnJdIDogYXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwdXNoLmNhbGwocmV0LCBhcnIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBpbkFycmF5OiBmdW5jdGlvbiAoZWxlbSwgYXJyLCBpKSB7XG4gICAgICByZXR1cm4gYXJyID09IG51bGwgPyAtMSA6IGluZGV4T2YuY2FsbChhcnIsIGVsZW0sIGkpO1xuICAgIH0sXG4gICAgLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG4gICAgLy8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuICAgIG1lcmdlOiBmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkge1xuICAgICAgdmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxuICAgICAgICAgIGogPSAwLFxuICAgICAgICAgIGkgPSBmaXJzdC5sZW5ndGg7XG5cbiAgICAgIGZvciAoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZmlyc3RbaSsrXSA9IHNlY29uZFtqXTtcbiAgICAgIH1cblxuICAgICAgZmlyc3QubGVuZ3RoID0gaTtcbiAgICAgIHJldHVybiBmaXJzdDtcbiAgICB9LFxuICAgIGdyZXA6IGZ1bmN0aW9uIChlbGVtcywgY2FsbGJhY2ssIGludmVydCkge1xuICAgICAgdmFyIGNhbGxiYWNrSW52ZXJzZSxcbiAgICAgICAgICBtYXRjaGVzID0gW10sXG4gICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgbGVuZ3RoID0gZWxlbXMubGVuZ3RoLFxuICAgICAgICAgIGNhbGxiYWNrRXhwZWN0ID0gIWludmVydDsgLy8gR28gdGhyb3VnaCB0aGUgYXJyYXksIG9ubHkgc2F2aW5nIHRoZSBpdGVtc1xuICAgICAgLy8gdGhhdCBwYXNzIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb25cblxuICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsYmFja0ludmVyc2UgPSAhY2FsbGJhY2soZWxlbXNbaV0sIGkpO1xuXG4gICAgICAgIGlmIChjYWxsYmFja0ludmVyc2UgIT09IGNhbGxiYWNrRXhwZWN0KSB7XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKGVsZW1zW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICB9LFxuICAgIC8vIGFyZyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuICAgIG1hcDogZnVuY3Rpb24gKGVsZW1zLCBjYWxsYmFjaywgYXJnKSB7XG4gICAgICB2YXIgbGVuZ3RoLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgIHJldCA9IFtdOyAvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgdHJhbnNsYXRpbmcgZWFjaCBvZiB0aGUgaXRlbXMgdG8gdGhlaXIgbmV3IHZhbHVlc1xuXG4gICAgICBpZiAoaXNBcnJheUxpa2UoZWxlbXMpKSB7XG4gICAgICAgIGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFsdWUgPSBjYWxsYmFjayhlbGVtc1tpXSwgaSwgYXJnKTtcblxuICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIEdvIHRocm91Z2ggZXZlcnkga2V5IG9uIHRoZSBvYmplY3QsXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSBpbiBlbGVtcykge1xuICAgICAgICAgIHZhbHVlID0gY2FsbGJhY2soZWxlbXNbaV0sIGksIGFyZyk7XG5cbiAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0LnB1c2godmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cblxuICAgICAgcmV0dXJuIGNvbmNhdC5hcHBseShbXSwgcmV0KTtcbiAgICB9LFxuICAgIC8vIEEgZ2xvYmFsIEdVSUQgY291bnRlciBmb3Igb2JqZWN0c1xuICAgIGd1aWQ6IDEsXG4gICAgLy8galF1ZXJ5LnN1cHBvcnQgaXMgbm90IHVzZWQgaW4gQ29yZSBidXQgb3RoZXIgcHJvamVjdHMgYXR0YWNoIHRoZWlyXG4gICAgLy8gcHJvcGVydGllcyB0byBpdCBzbyBpdCBuZWVkcyB0byBleGlzdC5cbiAgICBzdXBwb3J0OiBzdXBwb3J0XG4gIH0pO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBqUXVlcnkuZm5bU3ltYm9sLml0ZXJhdG9yXSA9IGFycltTeW1ib2wuaXRlcmF0b3JdO1xuICB9IC8vIFBvcHVsYXRlIHRoZSBjbGFzczJ0eXBlIG1hcFxuXG5cbiAgalF1ZXJ5LmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24gKGksIG5hbWUpIHtcbiAgICBjbGFzczJ0eXBlW1wiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIl0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGlzQXJyYXlMaWtlKG9iaikge1xuICAgIC8vIFN1cHBvcnQ6IHJlYWwgaU9TIDguMiBvbmx5IChub3QgcmVwcm9kdWNpYmxlIGluIHNpbXVsYXRvcilcbiAgICAvLyBgaW5gIGNoZWNrIHVzZWQgdG8gcHJldmVudCBKSVQgZXJyb3IgKGdoLTIxNDUpXG4gICAgLy8gaGFzT3duIGlzbid0IHVzZWQgaGVyZSBkdWUgdG8gZmFsc2UgbmVnYXRpdmVzXG4gICAgLy8gcmVnYXJkaW5nIE5vZGVsaXN0IGxlbmd0aCBpbiBJRVxuICAgIHZhciBsZW5ndGggPSAhIW9iaiAmJiBcImxlbmd0aFwiIGluIG9iaiAmJiBvYmoubGVuZ3RoLFxuICAgICAgICB0eXBlID0gdG9UeXBlKG9iaik7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihvYmopIHx8IGlzV2luZG93KG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fCB0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgbGVuZ3RoIC0gMSBpbiBvYmo7XG4gIH1cblxuICB2YXIgU2l6emxlID1cbiAgLyohXG4gICAqIFNpenpsZSBDU1MgU2VsZWN0b3IgRW5naW5lIHYyLjMuNFxuICAgKiBodHRwczovL3NpenpsZWpzLmNvbS9cbiAgICpcbiAgICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICAgKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAgICogaHR0cHM6Ly9qcy5mb3VuZGF0aW9uL1xuICAgKlxuICAgKiBEYXRlOiAyMDE5LTA0LTA4XG4gICAqL1xuICBmdW5jdGlvbiAod2luZG93KSB7XG4gICAgdmFyIGksXG4gICAgICAgIHN1cHBvcnQsXG4gICAgICAgIEV4cHIsXG4gICAgICAgIGdldFRleHQsXG4gICAgICAgIGlzWE1MLFxuICAgICAgICB0b2tlbml6ZSxcbiAgICAgICAgY29tcGlsZSxcbiAgICAgICAgc2VsZWN0LFxuICAgICAgICBvdXRlcm1vc3RDb250ZXh0LFxuICAgICAgICBzb3J0SW5wdXQsXG4gICAgICAgIGhhc0R1cGxpY2F0ZSxcbiAgICAgICAgLy8gTG9jYWwgZG9jdW1lbnQgdmFyc1xuICAgIHNldERvY3VtZW50LFxuICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgZG9jRWxlbSxcbiAgICAgICAgZG9jdW1lbnRJc0hUTUwsXG4gICAgICAgIHJidWdneVFTQSxcbiAgICAgICAgcmJ1Z2d5TWF0Y2hlcyxcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgY29udGFpbnMsXG4gICAgICAgIC8vIEluc3RhbmNlLXNwZWNpZmljIGRhdGFcbiAgICBleHBhbmRvID0gXCJzaXp6bGVcIiArIDEgKiBuZXcgRGF0ZSgpLFxuICAgICAgICBwcmVmZXJyZWREb2MgPSB3aW5kb3cuZG9jdW1lbnQsXG4gICAgICAgIGRpcnJ1bnMgPSAwLFxuICAgICAgICBkb25lID0gMCxcbiAgICAgICAgY2xhc3NDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG4gICAgICAgIHRva2VuQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuICAgICAgICBjb21waWxlckNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcbiAgICAgICAgbm9ubmF0aXZlU2VsZWN0b3JDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG4gICAgICAgIHNvcnRPcmRlciA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICBoYXNEdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgICAgICAvLyBJbnN0YW5jZSBtZXRob2RzXG4gICAgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgICAgIGFyciA9IFtdLFxuICAgICAgICBwb3AgPSBhcnIucG9wLFxuICAgICAgICBwdXNoX25hdGl2ZSA9IGFyci5wdXNoLFxuICAgICAgICBwdXNoID0gYXJyLnB1c2gsXG4gICAgICAgIHNsaWNlID0gYXJyLnNsaWNlLFxuICAgICAgICAvLyBVc2UgYSBzdHJpcHBlZC1kb3duIGluZGV4T2YgYXMgaXQncyBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAgICAvLyBodHRwczovL2pzcGVyZi5jb20vdGhvci1pbmRleG9mLXZzLWZvci81XG4gICAgaW5kZXhPZiA9IGZ1bmN0aW9uIChsaXN0LCBlbGVtKSB7XG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgbGVuID0gbGlzdC5sZW5ndGg7XG5cbiAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGxpc3RbaV0gPT09IGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfSxcbiAgICAgICAgYm9vbGVhbnMgPSBcImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsXG4gICAgICAgIC8vIFJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXNlbGVjdG9ycy8jd2hpdGVzcGFjZVxuICAgIHdoaXRlc3BhY2UgPSBcIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsXG4gICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCN2YWx1ZS1kZWYtaWRlbnRpZmllclxuICAgIGlkZW50aWZpZXIgPSBcIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsXG4gICAgICAgIC8vIEF0dHJpYnV0ZSBzZWxlY3RvcnM6IGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jYXR0cmlidXRlLXNlbGVjdG9yc1xuICAgIGF0dHJpYnV0ZXMgPSBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFwiICsgaWRlbnRpZmllciArIFwiKSg/OlwiICsgd2hpdGVzcGFjZSArIC8vIE9wZXJhdG9yIChjYXB0dXJlIDIpXG4gICAgXCIqKFsqXiR8IX5dPz0pXCIgKyB3aGl0ZXNwYWNlICsgLy8gXCJBdHRyaWJ1dGUgdmFsdWVzIG11c3QgYmUgQ1NTIGlkZW50aWZpZXJzIFtjYXB0dXJlIDVdIG9yIHN0cmluZ3MgW2NhcHR1cmUgMyBvciBjYXB0dXJlIDRdXCJcbiAgICBcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiICsgaWRlbnRpZmllciArIFwiKSl8KVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFxdXCIsXG4gICAgICAgIHBzZXVkb3MgPSBcIjooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XFxcXCgoXCIgKyAvLyBUbyByZWR1Y2UgdGhlIG51bWJlciBvZiBzZWxlY3RvcnMgbmVlZGluZyB0b2tlbml6ZSBpbiB0aGUgcHJlRmlsdGVyLCBwcmVmZXIgYXJndW1lbnRzOlxuICAgIC8vIDEuIHF1b3RlZCAoY2FwdHVyZSAzOyBjYXB0dXJlIDQgb3IgY2FwdHVyZSA1KVxuICAgIFwiKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8XCIgKyAvLyAyLiBzaW1wbGUgKGNhcHR1cmUgNilcbiAgICBcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIiArIGF0dHJpYnV0ZXMgKyBcIikqKXxcIiArIC8vIDMuIGFueXRoaW5nIGVsc2UgKGNhcHR1cmUgMilcbiAgICBcIi4qXCIgKyBcIilcXFxcKXwpXCIsXG4gICAgICAgIC8vIExlYWRpbmcgYW5kIG5vbi1lc2NhcGVkIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGNhcHR1cmluZyBzb21lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgcHJlY2VkaW5nIHRoZSBsYXR0ZXJcbiAgICByd2hpdGVzcGFjZSA9IG5ldyBSZWdFeHAod2hpdGVzcGFjZSArIFwiK1wiLCBcImdcIiksXG4gICAgICAgIHJ0cmltID0gbmV3IFJlZ0V4cChcIl5cIiArIHdoaXRlc3BhY2UgKyBcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIgKyB3aGl0ZXNwYWNlICsgXCIrJFwiLCBcImdcIiksXG4gICAgICAgIHJjb21tYSA9IG5ldyBSZWdFeHAoXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqLFwiICsgd2hpdGVzcGFjZSArIFwiKlwiKSxcbiAgICAgICAgcmNvbWJpbmF0b3JzID0gbmV3IFJlZ0V4cChcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiooWz4rfl18XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIpLFxuICAgICAgICByZGVzY2VuZCA9IG5ldyBSZWdFeHAod2hpdGVzcGFjZSArIFwifD5cIiksXG4gICAgICAgIHJwc2V1ZG8gPSBuZXcgUmVnRXhwKHBzZXVkb3MpLFxuICAgICAgICByaWRlbnRpZmllciA9IG5ldyBSZWdFeHAoXCJeXCIgKyBpZGVudGlmaWVyICsgXCIkXCIpLFxuICAgICAgICBtYXRjaEV4cHIgPSB7XG4gICAgICBcIklEXCI6IG5ldyBSZWdFeHAoXCJeIyhcIiArIGlkZW50aWZpZXIgKyBcIilcIiksXG4gICAgICBcIkNMQVNTXCI6IG5ldyBSZWdFeHAoXCJeXFxcXC4oXCIgKyBpZGVudGlmaWVyICsgXCIpXCIpLFxuICAgICAgXCJUQUdcIjogbmV3IFJlZ0V4cChcIl4oXCIgKyBpZGVudGlmaWVyICsgXCJ8WypdKVwiKSxcbiAgICAgIFwiQVRUUlwiOiBuZXcgUmVnRXhwKFwiXlwiICsgYXR0cmlidXRlcyksXG4gICAgICBcIlBTRVVET1wiOiBuZXcgUmVnRXhwKFwiXlwiICsgcHNldWRvcyksXG4gICAgICBcIkNISUxEXCI6IG5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiICsgd2hpdGVzcGFjZSArIFwiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86KFsrLV18KVwiICsgd2hpdGVzcGFjZSArIFwiKihcXFxcZCspfCkpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KVwiLCBcImlcIiksXG4gICAgICBcImJvb2xcIjogbmV3IFJlZ0V4cChcIl4oPzpcIiArIGJvb2xlYW5zICsgXCIpJFwiLCBcImlcIiksXG4gICAgICAvLyBGb3IgdXNlIGluIGxpYnJhcmllcyBpbXBsZW1lbnRpbmcgLmlzKClcbiAgICAgIC8vIFdlIHVzZSB0aGlzIGZvciBQT1MgbWF0Y2hpbmcgaW4gYHNlbGVjdGBcbiAgICAgIFwibmVlZHNDb250ZXh0XCI6IG5ldyBSZWdFeHAoXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiICsgd2hpdGVzcGFjZSArIFwiKigoPzotXFxcXGQpP1xcXFxkKilcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpKD89W14tXXwkKVwiLCBcImlcIilcbiAgICB9LFxuICAgICAgICByaHRtbCA9IC9IVE1MJC9pLFxuICAgICAgICByaW5wdXRzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcbiAgICAgICAgcmhlYWRlciA9IC9eaFxcZCQvaSxcbiAgICAgICAgcm5hdGl2ZSA9IC9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sXG4gICAgICAgIC8vIEVhc2lseS1wYXJzZWFibGUvcmV0cmlldmFibGUgSUQgb3IgVEFHIG9yIENMQVNTIHNlbGVjdG9yc1xuICAgIHJxdWlja0V4cHIgPSAvXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxcbiAgICAgICAgcnNpYmxpbmcgPSAvWyt+XS8sXG4gICAgICAgIC8vIENTUyBlc2NhcGVzXG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI2VzY2FwZWQtY2hhcmFjdGVyc1xuICAgIHJ1bmVzY2FwZSA9IG5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIiArIHdoaXRlc3BhY2UgKyBcIj98KFwiICsgd2hpdGVzcGFjZSArIFwiKXwuKVwiLCBcImlnXCIpLFxuICAgICAgICBmdW5lc2NhcGUgPSBmdW5jdGlvbiAoXywgZXNjYXBlZCwgZXNjYXBlZFdoaXRlc3BhY2UpIHtcbiAgICAgIHZhciBoaWdoID0gXCIweFwiICsgZXNjYXBlZCAtIDB4MTAwMDA7IC8vIE5hTiBtZWFucyBub24tY29kZXBvaW50XG4gICAgICAvLyBTdXBwb3J0OiBGaXJlZm94PDI0XG4gICAgICAvLyBXb3JrYXJvdW5kIGVycm9uZW91cyBudW1lcmljIGludGVycHJldGF0aW9uIG9mICtcIjB4XCJcblxuICAgICAgcmV0dXJuIGhpZ2ggIT09IGhpZ2ggfHwgZXNjYXBlZFdoaXRlc3BhY2UgPyBlc2NhcGVkIDogaGlnaCA8IDAgPyAvLyBCTVAgY29kZXBvaW50XG4gICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGhpZ2ggKyAweDEwMDAwKSA6IC8vIFN1cHBsZW1lbnRhbCBQbGFuZSBjb2RlcG9pbnQgKHN1cnJvZ2F0ZSBwYWlyKVxuICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDApO1xuICAgIH0sXG4gICAgICAgIC8vIENTUyBzdHJpbmcvaWRlbnRpZmllciBzZXJpYWxpemF0aW9uXG4gICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNjb21tb24tc2VyaWFsaXppbmctaWRpb21zXG4gICAgcmNzc2VzY2FwZSA9IC8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLFxuICAgICAgICBmY3NzZXNjYXBlID0gZnVuY3Rpb24gKGNoLCBhc0NvZGVQb2ludCkge1xuICAgICAgaWYgKGFzQ29kZVBvaW50KSB7XG4gICAgICAgIC8vIFUrMDAwMCBOVUxMIGJlY29tZXMgVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUlxuICAgICAgICBpZiAoY2ggPT09IFwiXFwwXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJcXHVGRkZEXCI7XG4gICAgICAgIH0gLy8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCAoZGVwZW5kZW50IHVwb24gcG9zaXRpb24pIG51bWJlcnMgZ2V0IGVzY2FwZWQgYXMgY29kZSBwb2ludHNcblxuXG4gICAgICAgIHJldHVybiBjaC5zbGljZSgwLCAtMSkgKyBcIlxcXFxcIiArIGNoLmNoYXJDb2RlQXQoY2gubGVuZ3RoIC0gMSkudG9TdHJpbmcoMTYpICsgXCIgXCI7XG4gICAgICB9IC8vIE90aGVyIHBvdGVudGlhbGx5LXNwZWNpYWwgQVNDSUkgY2hhcmFjdGVycyBnZXQgYmFja3NsYXNoLWVzY2FwZWRcblxuXG4gICAgICByZXR1cm4gXCJcXFxcXCIgKyBjaDtcbiAgICB9LFxuICAgICAgICAvLyBVc2VkIGZvciBpZnJhbWVzXG4gICAgLy8gU2VlIHNldERvY3VtZW50KClcbiAgICAvLyBSZW1vdmluZyB0aGUgZnVuY3Rpb24gd3JhcHBlciBjYXVzZXMgYSBcIlBlcm1pc3Npb24gRGVuaWVkXCJcbiAgICAvLyBlcnJvciBpbiBJRVxuICAgIHVubG9hZEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXREb2N1bWVudCgpO1xuICAgIH0sXG4gICAgICAgIGluRGlzYWJsZWRGaWVsZHNldCA9IGFkZENvbWJpbmF0b3IoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtLmRpc2FibGVkID09PSB0cnVlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJmaWVsZHNldFwiO1xuICAgIH0sIHtcbiAgICAgIGRpcjogXCJwYXJlbnROb2RlXCIsXG4gICAgICBuZXh0OiBcImxlZ2VuZFwiXG4gICAgfSk7IC8vIE9wdGltaXplIGZvciBwdXNoLmFwcGx5KCBfLCBOb2RlTGlzdCApXG5cblxuICAgIHRyeSB7XG4gICAgICBwdXNoLmFwcGx5KGFyciA9IHNsaWNlLmNhbGwocHJlZmVycmVkRG9jLmNoaWxkTm9kZXMpLCBwcmVmZXJyZWREb2MuY2hpbGROb2Rlcyk7IC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NC4wXG4gICAgICAvLyBEZXRlY3Qgc2lsZW50bHkgZmFpbGluZyBwdXNoLmFwcGx5XG5cbiAgICAgIGFycltwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHB1c2ggPSB7XG4gICAgICAgIGFwcGx5OiBhcnIubGVuZ3RoID8gLy8gTGV2ZXJhZ2Ugc2xpY2UgaWYgcG9zc2libGVcbiAgICAgICAgZnVuY3Rpb24gKHRhcmdldCwgZWxzKSB7XG4gICAgICAgICAgcHVzaF9uYXRpdmUuYXBwbHkodGFyZ2V0LCBzbGljZS5jYWxsKGVscykpO1xuICAgICAgICB9IDogLy8gU3VwcG9ydDogSUU8OVxuICAgICAgICAvLyBPdGhlcndpc2UgYXBwZW5kIGRpcmVjdGx5XG4gICAgICAgIGZ1bmN0aW9uICh0YXJnZXQsIGVscykge1xuICAgICAgICAgIHZhciBqID0gdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgaSA9IDA7IC8vIENhbid0IHRydXN0IE5vZGVMaXN0Lmxlbmd0aFxuXG4gICAgICAgICAgd2hpbGUgKHRhcmdldFtqKytdID0gZWxzW2krK10pIHt9XG5cbiAgICAgICAgICB0YXJnZXQubGVuZ3RoID0gaiAtIDE7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2l6emxlKHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkKSB7XG4gICAgICB2YXIgbSxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGVsZW0sXG4gICAgICAgICAgbmlkLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIGdyb3VwcyxcbiAgICAgICAgICBuZXdTZWxlY3RvcixcbiAgICAgICAgICBuZXdDb250ZXh0ID0gY29udGV4dCAmJiBjb250ZXh0Lm93bmVyRG9jdW1lbnQsXG4gICAgICAgICAgLy8gbm9kZVR5cGUgZGVmYXVsdHMgdG8gOSwgc2luY2UgY29udGV4dCBkZWZhdWx0cyB0byBkb2N1bWVudFxuICAgICAgbm9kZVR5cGUgPSBjb250ZXh0ID8gY29udGV4dC5ub2RlVHlwZSA6IDk7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cyB8fCBbXTsgLy8gUmV0dXJuIGVhcmx5IGZyb20gY2FsbHMgd2l0aCBpbnZhbGlkIHNlbGVjdG9yIG9yIGNvbnRleHRcblxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiB8fCAhc2VsZWN0b3IgfHwgbm9kZVR5cGUgIT09IDEgJiYgbm9kZVR5cGUgIT09IDkgJiYgbm9kZVR5cGUgIT09IDExKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSAvLyBUcnkgdG8gc2hvcnRjdXQgZmluZCBvcGVyYXRpb25zIChhcyBvcHBvc2VkIHRvIGZpbHRlcnMpIGluIEhUTUwgZG9jdW1lbnRzXG5cblxuICAgICAgaWYgKCFzZWVkKSB7XG4gICAgICAgIGlmICgoY29udGV4dCA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogcHJlZmVycmVkRG9jKSAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICBzZXREb2N1bWVudChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuXG4gICAgICAgIGlmIChkb2N1bWVudElzSFRNTCkge1xuICAgICAgICAgIC8vIElmIHRoZSBzZWxlY3RvciBpcyBzdWZmaWNpZW50bHkgc2ltcGxlLCB0cnkgdXNpbmcgYSBcImdldCpCeSpcIiBET00gbWV0aG9kXG4gICAgICAgICAgLy8gKGV4Y2VwdGluZyBEb2N1bWVudEZyYWdtZW50IGNvbnRleHQsIHdoZXJlIHRoZSBtZXRob2RzIGRvbid0IGV4aXN0KVxuICAgICAgICAgIGlmIChub2RlVHlwZSAhPT0gMTEgJiYgKG1hdGNoID0gcnF1aWNrRXhwci5leGVjKHNlbGVjdG9yKSkpIHtcbiAgICAgICAgICAgIC8vIElEIHNlbGVjdG9yXG4gICAgICAgICAgICBpZiAobSA9IG1hdGNoWzFdKSB7XG4gICAgICAgICAgICAgIC8vIERvY3VtZW50IGNvbnRleHRcbiAgICAgICAgICAgICAgaWYgKG5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKG0pKSB7XG4gICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSwgT3BlcmEsIFdlYmtpdFxuICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaWRlbnRpZnkgdmVyc2lvbnNcbiAgICAgICAgICAgICAgICAgIC8vIGdldEVsZW1lbnRCeUlkIGNhbiBtYXRjaCBlbGVtZW50cyBieSBuYW1lIGluc3RlYWQgb2YgSURcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmlkID09PSBtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgICAgIH0gLy8gRWxlbWVudCBjb250ZXh0XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSwgT3BlcmEsIFdlYmtpdFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGlkZW50aWZ5IHZlcnNpb25zXG4gICAgICAgICAgICAgICAgLy8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuICAgICAgICAgICAgICAgIGlmIChuZXdDb250ZXh0ICYmIChlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZChtKSkgJiYgY29udGFpbnMoY29udGV4dCwgZWxlbSkgJiYgZWxlbS5pZCA9PT0gbSkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IC8vIFR5cGUgc2VsZWN0b3JcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaFsyXSkge1xuICAgICAgICAgICAgICBwdXNoLmFwcGx5KHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7IC8vIENsYXNzIHNlbGVjdG9yXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChtID0gbWF0Y2hbM10pICYmIHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAmJiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgcHVzaC5hcHBseShyZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobSkpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIFRha2UgYWR2YW50YWdlIG9mIHF1ZXJ5U2VsZWN0b3JBbGxcblxuXG4gICAgICAgICAgaWYgKHN1cHBvcnQucXNhICYmICFub25uYXRpdmVTZWxlY3RvckNhY2hlW3NlbGVjdG9yICsgXCIgXCJdICYmICghcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdChzZWxlY3RvcikpICYmICggLy8gU3VwcG9ydDogSUUgOCBvbmx5XG4gICAgICAgICAgLy8gRXhjbHVkZSBvYmplY3QgZWxlbWVudHNcbiAgICAgICAgICBub2RlVHlwZSAhPT0gMSB8fCBjb250ZXh0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgbmV3Q29udGV4dCA9IGNvbnRleHQ7IC8vIHFTQSBjb25zaWRlcnMgZWxlbWVudHMgb3V0c2lkZSBhIHNjb3Bpbmcgcm9vdCB3aGVuIGV2YWx1YXRpbmcgY2hpbGQgb3JcbiAgICAgICAgICAgIC8vIGRlc2NlbmRhbnQgY29tYmluYXRvcnMsIHdoaWNoIGlzIG5vdCB3aGF0IHdlIHdhbnQuXG4gICAgICAgICAgICAvLyBJbiBzdWNoIGNhc2VzLCB3ZSB3b3JrIGFyb3VuZCB0aGUgYmVoYXZpb3IgYnkgcHJlZml4aW5nIGV2ZXJ5IHNlbGVjdG9yIGluIHRoZVxuICAgICAgICAgICAgLy8gbGlzdCB3aXRoIGFuIElEIHNlbGVjdG9yIHJlZmVyZW5jaW5nIHRoZSBzY29wZSBjb250ZXh0LlxuICAgICAgICAgICAgLy8gVGhhbmtzIHRvIEFuZHJldyBEdXBvbnQgZm9yIHRoaXMgdGVjaG5pcXVlLlxuXG4gICAgICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEgJiYgcmRlc2NlbmQudGVzdChzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgLy8gQ2FwdHVyZSB0aGUgY29udGV4dCBJRCwgc2V0dGluZyBpdCBmaXJzdCBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgaWYgKG5pZCA9IGNvbnRleHQuZ2V0QXR0cmlidXRlKFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICBuaWQgPSBuaWQucmVwbGFjZShyY3NzZXNjYXBlLCBmY3NzZXNjYXBlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIG5pZCA9IGV4cGFuZG8pO1xuICAgICAgICAgICAgICB9IC8vIFByZWZpeCBldmVyeSBzZWxlY3RvciBpbiB0aGUgbGlzdFxuXG5cbiAgICAgICAgICAgICAgZ3JvdXBzID0gdG9rZW5pemUoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICBpID0gZ3JvdXBzLmxlbmd0aDtcblxuICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzW2ldID0gXCIjXCIgKyBuaWQgKyBcIiBcIiArIHRvU2VsZWN0b3IoZ3JvdXBzW2ldKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG5ld1NlbGVjdG9yID0gZ3JvdXBzLmpvaW4oXCIsXCIpOyAvLyBFeHBhbmQgY29udGV4dCBmb3Igc2libGluZyBzZWxlY3RvcnNcblxuICAgICAgICAgICAgICBuZXdDb250ZXh0ID0gcnNpYmxpbmcudGVzdChzZWxlY3RvcikgJiYgdGVzdENvbnRleHQoY29udGV4dC5wYXJlbnROb2RlKSB8fCBjb250ZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBwdXNoLmFwcGx5KHJlc3VsdHMsIG5ld0NvbnRleHQucXVlcnlTZWxlY3RvckFsbChuZXdTZWxlY3RvcikpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgIH0gY2F0Y2ggKHFzYUVycm9yKSB7XG4gICAgICAgICAgICAgIG5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUoc2VsZWN0b3IsIHRydWUpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKG5pZCA9PT0gZXhwYW5kbykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQWxsIG90aGVyc1xuXG5cbiAgICAgIHJldHVybiBzZWxlY3Qoc2VsZWN0b3IucmVwbGFjZShydHJpbSwgXCIkMVwiKSwgY29udGV4dCwgcmVzdWx0cywgc2VlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBrZXktdmFsdWUgY2FjaGVzIG9mIGxpbWl0ZWQgc2l6ZVxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihzdHJpbmcsIG9iamVjdCl9IFJldHVybnMgdGhlIE9iamVjdCBkYXRhIGFmdGVyIHN0b3JpbmcgaXQgb24gaXRzZWxmIHdpdGhcbiAgICAgKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcbiAgICAgKlx0ZGVsZXRpbmcgdGhlIG9sZGVzdCBlbnRyeVxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcbiAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgIGZ1bmN0aW9uIGNhY2hlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgLy8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChzZWUgSXNzdWUgIzE1NylcbiAgICAgICAgaWYgKGtleXMucHVzaChrZXkgKyBcIiBcIikgPiBFeHByLmNhY2hlTGVuZ3RoKSB7XG4gICAgICAgICAgLy8gT25seSBrZWVwIHRoZSBtb3N0IHJlY2VudCBlbnRyaWVzXG4gICAgICAgICAgZGVsZXRlIGNhY2hlW2tleXMuc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FjaGVba2V5ICsgXCIgXCJdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWNoZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFyayBhIGZ1bmN0aW9uIGZvciBzcGVjaWFsIHVzZSBieSBTaXp6bGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbWFya1xuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBtYXJrRnVuY3Rpb24oZm4pIHtcbiAgICAgIGZuW2V4cGFuZG9dID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VwcG9ydCB0ZXN0aW5nIHVzaW5nIGFuIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBQYXNzZWQgdGhlIGNyZWF0ZWQgZWxlbWVudCBhbmQgcmV0dXJucyBhIGJvb2xlYW4gcmVzdWx0XG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGFzc2VydChmbikge1xuICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gISFmbihlbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGl0cyBwYXJlbnQgYnkgZGVmYXVsdFxuICAgICAgICBpZiAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9IC8vIHJlbGVhc2UgbWVtb3J5IGluIElFXG5cblxuICAgICAgICBlbCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIHNhbWUgaGFuZGxlciBmb3IgYWxsIG9mIHRoZSBzcGVjaWZpZWQgYXR0cnNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXR0cnMgUGlwZS1zZXBhcmF0ZWQgbGlzdCBvZiBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgbWV0aG9kIHRoYXQgd2lsbCBiZSBhcHBsaWVkXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGFkZEhhbmRsZShhdHRycywgaGFuZGxlcikge1xuICAgICAgdmFyIGFyciA9IGF0dHJzLnNwbGl0KFwifFwiKSxcbiAgICAgICAgICBpID0gYXJyLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBFeHByLmF0dHJIYW5kbGVbYXJyW2ldXSA9IGhhbmRsZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBkb2N1bWVudCBvcmRlciBvZiB0d28gc2libGluZ3NcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGFcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIGxlc3MgdGhhbiAwIGlmIGEgcHJlY2VkZXMgYiwgZ3JlYXRlciB0aGFuIDAgaWYgYSBmb2xsb3dzIGJcbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gc2libGluZ0NoZWNrKGEsIGIpIHtcbiAgICAgIHZhciBjdXIgPSBiICYmIGEsXG4gICAgICAgICAgZGlmZiA9IGN1ciAmJiBhLm5vZGVUeXBlID09PSAxICYmIGIubm9kZVR5cGUgPT09IDEgJiYgYS5zb3VyY2VJbmRleCAtIGIuc291cmNlSW5kZXg7IC8vIFVzZSBJRSBzb3VyY2VJbmRleCBpZiBhdmFpbGFibGUgb24gYm90aCBub2Rlc1xuXG4gICAgICBpZiAoZGlmZikge1xuICAgICAgICByZXR1cm4gZGlmZjtcbiAgICAgIH0gLy8gQ2hlY2sgaWYgYiBmb2xsb3dzIGFcblxuXG4gICAgICBpZiAoY3VyKSB7XG4gICAgICAgIHdoaWxlIChjdXIgPSBjdXIubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICBpZiAoY3VyID09PSBiKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhID8gMSA6IC0xO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGlucHV0IHR5cGVzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8odHlwZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgYnV0dG9uc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvblBzZXVkbyh0eXBlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiAobmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCIpICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgOmVuYWJsZWQvOmRpc2FibGVkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkaXNhYmxlZCB0cnVlIGZvciA6ZGlzYWJsZWQ7IGZhbHNlIGZvciA6ZW5hYmxlZFxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEaXNhYmxlZFBzZXVkbyhkaXNhYmxlZCkge1xuICAgICAgLy8gS25vd24gOmRpc2FibGVkIGZhbHNlIHBvc2l0aXZlczogZmllbGRzZXRbZGlzYWJsZWRdID4gbGVnZW5kOm50aC1vZi10eXBlKG4rMikgOmNhbi1kaXNhYmxlXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgLy8gT25seSBjZXJ0YWluIGVsZW1lbnRzIGNhbiBtYXRjaCA6ZW5hYmxlZCBvciA6ZGlzYWJsZWRcbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZW5hYmxlZFxuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1kaXNhYmxlZFxuICAgICAgICBpZiAoXCJmb3JtXCIgaW4gZWxlbSkge1xuICAgICAgICAgIC8vIENoZWNrIGZvciBpbmhlcml0ZWQgZGlzYWJsZWRuZXNzIG9uIHJlbGV2YW50IG5vbi1kaXNhYmxlZCBlbGVtZW50czpcbiAgICAgICAgICAvLyAqIGxpc3RlZCBmb3JtLWFzc29jaWF0ZWQgZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBmaWVsZHNldFxuICAgICAgICAgIC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjYXRlZ29yeS1saXN0ZWRcbiAgICAgICAgICAvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY29uY2VwdC1mZS1kaXNhYmxlZFxuICAgICAgICAgIC8vICogb3B0aW9uIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcbiAgICAgICAgICAvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY29uY2VwdC1vcHRpb24tZGlzYWJsZWRcbiAgICAgICAgICAvLyBBbGwgc3VjaCBlbGVtZW50cyBoYXZlIGEgXCJmb3JtXCIgcHJvcGVydHkuXG4gICAgICAgICAgaWYgKGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLmRpc2FibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gT3B0aW9uIGVsZW1lbnRzIGRlZmVyIHRvIGEgcGFyZW50IG9wdGdyb3VwIGlmIHByZXNlbnRcbiAgICAgICAgICAgIGlmIChcImxhYmVsXCIgaW4gZWxlbSkge1xuICAgICAgICAgICAgICBpZiAoXCJsYWJlbFwiIGluIGVsZW0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLnBhcmVudE5vZGUuZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmRpc2FibGVkID09PSBkaXNhYmxlZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBTdXBwb3J0OiBJRSA2IC0gMTFcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgaXNEaXNhYmxlZCBzaG9ydGN1dCBwcm9wZXJ0eSB0byBjaGVjayBmb3IgZGlzYWJsZWQgZmllbGRzZXQgYW5jZXN0b3JzXG5cblxuICAgICAgICAgICAgcmV0dXJuIGVsZW0uaXNEaXNhYmxlZCA9PT0gZGlzYWJsZWQgfHwgLy8gV2hlcmUgdGhlcmUgaXMgbm8gaXNEaXNhYmxlZCwgY2hlY2sgbWFudWFsbHlcblxuICAgICAgICAgICAgLyoganNoaW50IC1XMDE4ICovXG4gICAgICAgICAgICBlbGVtLmlzRGlzYWJsZWQgIT09ICFkaXNhYmxlZCAmJiBpbkRpc2FibGVkRmllbGRzZXQoZWxlbSkgPT09IGRpc2FibGVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLmRpc2FibGVkID09PSBkaXNhYmxlZDsgLy8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuICAgICAgICAgIC8vIFNvbWUgdmljdGltcyBnZXQgY2F1Z2h0IGluIG91ciBuZXQgKGxhYmVsLCBsZWdlbmQsIG1lbnUsIHRyYWNrKSwgYnV0IGl0IHNob3VsZG4ndFxuICAgICAgICAgIC8vIGV2ZW4gZXhpc3Qgb24gdGhlbSwgbGV0IGFsb25lIGhhdmUgYSBib29sZWFuIHZhbHVlLlxuICAgICAgICB9IGVsc2UgaWYgKFwibGFiZWxcIiBpbiBlbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuICAgICAgICB9IC8vIFJlbWFpbmluZyBlbGVtZW50cyBhcmUgbmVpdGhlciA6ZW5hYmxlZCBub3IgOmRpc2FibGVkXG5cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIHBvc2l0aW9uYWxzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmbikge1xuICAgICAgcmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgYXJndW1lbnQgPSArYXJndW1lbnQ7XG4gICAgICAgIHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlZWQsIG1hdGNoZXMpIHtcbiAgICAgICAgICB2YXIgaixcbiAgICAgICAgICAgICAgbWF0Y2hJbmRleGVzID0gZm4oW10sIHNlZWQubGVuZ3RoLCBhcmd1bWVudCksXG4gICAgICAgICAgICAgIGkgPSBtYXRjaEluZGV4ZXMubGVuZ3RoOyAvLyBNYXRjaCBlbGVtZW50cyBmb3VuZCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4ZXNcblxuICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIGlmIChzZWVkW2ogPSBtYXRjaEluZGV4ZXNbaV1dKSB7XG4gICAgICAgICAgICAgIHNlZWRbal0gPSAhKG1hdGNoZXNbal0gPSBzZWVkW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBhIG5vZGUgZm9yIHZhbGlkaXR5IGFzIGEgU2l6emxlIGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0PX0gY29udGV4dFxuICAgICAqIEByZXR1cm5zIHtFbGVtZW50fE9iamVjdHxCb29sZWFufSBUaGUgaW5wdXQgbm9kZSBpZiBhY2NlcHRhYmxlLCBvdGhlcndpc2UgYSBmYWxzeSB2YWx1ZVxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiB0ZXN0Q29udGV4dChjb250ZXh0KSB7XG4gICAgICByZXR1cm4gY29udGV4dCAmJiB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb250ZXh0O1xuICAgIH0gLy8gRXhwb3NlIHN1cHBvcnQgdmFycyBmb3IgY29udmVuaWVuY2VcblxuXG4gICAgc3VwcG9ydCA9IFNpenpsZS5zdXBwb3J0ID0ge307XG4gICAgLyoqXG4gICAgICogRGV0ZWN0cyBYTUwgbm9kZXNcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBlbGVtIEFuIGVsZW1lbnQgb3IgYSBkb2N1bWVudFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmZiBlbGVtIGlzIGEgbm9uLUhUTUwgWE1MIG5vZGVcbiAgICAgKi9cblxuICAgIGlzWE1MID0gU2l6emxlLmlzWE1MID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHZhciBuYW1lc3BhY2UgPSBlbGVtLm5hbWVzcGFjZVVSSSxcbiAgICAgICAgICBkb2NFbGVtID0gKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKS5kb2N1bWVudEVsZW1lbnQ7IC8vIFN1cHBvcnQ6IElFIDw9OFxuICAgICAgLy8gQXNzdW1lIEhUTUwgd2hlbiBkb2N1bWVudEVsZW1lbnQgZG9lc24ndCB5ZXQgZXhpc3QsIHN1Y2ggYXMgaW5zaWRlIGxvYWRpbmcgaWZyYW1lc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzQ4MzNcblxuICAgICAgcmV0dXJuICFyaHRtbC50ZXN0KG5hbWVzcGFjZSB8fCBkb2NFbGVtICYmIGRvY0VsZW0ubm9kZU5hbWUgfHwgXCJIVE1MXCIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBkb2N1bWVudC1yZWxhdGVkIHZhcmlhYmxlcyBvbmNlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gW2RvY10gQW4gZWxlbWVudCBvciBkb2N1bWVudCBvYmplY3QgdG8gdXNlIHRvIHNldCB0aGUgZG9jdW1lbnRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gICAgICovXG5cblxuICAgIHNldERvY3VtZW50ID0gU2l6emxlLnNldERvY3VtZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBoYXNDb21wYXJlLFxuICAgICAgICAgIHN1YldpbmRvdyxcbiAgICAgICAgICBkb2MgPSBub2RlID8gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUgOiBwcmVmZXJyZWREb2M7IC8vIFJldHVybiBlYXJseSBpZiBkb2MgaXMgaW52YWxpZCBvciBhbHJlYWR5IHNlbGVjdGVkXG5cbiAgICAgIGlmIChkb2MgPT09IGRvY3VtZW50IHx8IGRvYy5ub2RlVHlwZSAhPT0gOSB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICB9IC8vIFVwZGF0ZSBnbG9iYWwgdmFyaWFibGVzXG5cblxuICAgICAgZG9jdW1lbnQgPSBkb2M7XG4gICAgICBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgZG9jdW1lbnRJc0hUTUwgPSAhaXNYTUwoZG9jdW1lbnQpOyAvLyBTdXBwb3J0OiBJRSA5LTExLCBFZGdlXG4gICAgICAvLyBBY2Nlc3NpbmcgaWZyYW1lIGRvY3VtZW50cyBhZnRlciB1bmxvYWQgdGhyb3dzIFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvcnMgKGpRdWVyeSAjMTM5MzYpXG5cbiAgICAgIGlmIChwcmVmZXJyZWREb2MgIT09IGRvY3VtZW50ICYmIChzdWJXaW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldykgJiYgc3ViV2luZG93LnRvcCAhPT0gc3ViV2luZG93KSB7XG4gICAgICAgIC8vIFN1cHBvcnQ6IElFIDExLCBFZGdlXG4gICAgICAgIGlmIChzdWJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgIHN1YldpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsIHVubG9hZEhhbmRsZXIsIGZhbHNlKTsgLy8gU3VwcG9ydDogSUUgOSAtIDEwIG9ubHlcbiAgICAgICAgfSBlbHNlIGlmIChzdWJXaW5kb3cuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICBzdWJXaW5kb3cuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLCB1bmxvYWRIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogQXR0cmlidXRlc1xuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgICAgLy8gU3VwcG9ydDogSUU8OFxuICAgICAgLy8gVmVyaWZ5IHRoYXQgZ2V0QXR0cmlidXRlIHJlYWxseSByZXR1cm5zIGF0dHJpYnV0ZXMgYW5kIG5vdCBwcm9wZXJ0aWVzXG4gICAgICAvLyAoZXhjZXB0aW5nIElFOCBib29sZWFucylcblxuXG4gICAgICBzdXBwb3J0LmF0dHJpYnV0ZXMgPSBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IFwiaVwiO1xuICAgICAgICByZXR1cm4gIWVsLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKTtcbiAgICAgIH0pO1xuICAgICAgLyogZ2V0RWxlbWVudChzKUJ5KlxuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgICAgLy8gQ2hlY2sgaWYgZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpIHJldHVybnMgb25seSBlbGVtZW50c1xuXG4gICAgICBzdXBwb3J0LmdldEVsZW1lbnRzQnlUYWdOYW1lID0gYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiXCIpKTtcbiAgICAgICAgcmV0dXJuICFlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RoO1xuICAgICAgfSk7IC8vIFN1cHBvcnQ6IElFPDlcblxuICAgICAgc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gcm5hdGl2ZS50ZXN0KGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpOyAvLyBTdXBwb3J0OiBJRTwxMFxuICAgICAgLy8gQ2hlY2sgaWYgZ2V0RWxlbWVudEJ5SWQgcmV0dXJucyBlbGVtZW50cyBieSBuYW1lXG4gICAgICAvLyBUaGUgYnJva2VuIGdldEVsZW1lbnRCeUlkIG1ldGhvZHMgZG9uJ3QgcGljayB1cCBwcm9ncmFtbWF0aWNhbGx5LXNldCBuYW1lcyxcbiAgICAgIC8vIHNvIHVzZSBhIHJvdW5kYWJvdXQgZ2V0RWxlbWVudHNCeU5hbWUgdGVzdFxuXG4gICAgICBzdXBwb3J0LmdldEJ5SWQgPSBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGRvY0VsZW0uYXBwZW5kQ2hpbGQoZWwpLmlkID0gZXhwYW5kbztcbiAgICAgICAgcmV0dXJuICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSB8fCAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoZXhwYW5kbykubGVuZ3RoO1xuICAgICAgfSk7IC8vIElEIGZpbHRlciBhbmQgZmluZFxuXG4gICAgICBpZiAoc3VwcG9ydC5nZXRCeUlkKSB7XG4gICAgICAgIEV4cHIuZmlsdGVyW1wiSURcIl0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICB2YXIgYXR0cklkID0gaWQucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gYXR0cklkO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgRXhwci5maW5kW1wiSURcIl0gPSBmdW5jdGlvbiAoaWQsIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwpIHtcbiAgICAgICAgICAgIHZhciBlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbSA/IFtlbGVtXSA6IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV4cHIuZmlsdGVyW1wiSURcIl0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICB2YXIgYXR0cklkID0gaWQucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZU5vZGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG4gICAgICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLnZhbHVlID09PSBhdHRySWQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTsgLy8gU3VwcG9ydDogSUUgNiAtIDcgb25seVxuICAgICAgICAvLyBnZXRFbGVtZW50QnlJZCBpcyBub3QgcmVsaWFibGUgYXMgYSBmaW5kIHNob3J0Y3V0XG5cblxuICAgICAgICBFeHByLmZpbmRbXCJJRFwiXSA9IGZ1bmN0aW9uIChpZCwgY29udGV4dCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCkge1xuICAgICAgICAgICAgdmFyIG5vZGUsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBlbGVtcyxcbiAgICAgICAgICAgICAgICBlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgIC8vIFZlcmlmeSB0aGUgaWQgYXR0cmlidXRlXG4gICAgICAgICAgICAgIG5vZGUgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtcblxuICAgICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLnZhbHVlID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbZWxlbV07XG4gICAgICAgICAgICAgIH0gLy8gRmFsbCBiYWNrIG9uIGdldEVsZW1lbnRzQnlOYW1lXG5cblxuICAgICAgICAgICAgICBlbGVtcyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeU5hbWUoaWQpO1xuICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICB3aGlsZSAoZWxlbSA9IGVsZW1zW2krK10pIHtcbiAgICAgICAgICAgICAgICBub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLnZhbHVlID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtlbGVtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gLy8gVGFnXG5cblxuICAgICAgRXhwci5maW5kW1wiVEFHXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA/IGZ1bmN0aW9uICh0YWcsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTsgLy8gRG9jdW1lbnRGcmFnbWVudCBub2RlcyBkb24ndCBoYXZlIGdFQlROXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5xc2EpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHRhZyk7XG4gICAgICAgIH1cbiAgICAgIH0gOiBmdW5jdGlvbiAodGFnLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBlbGVtLFxuICAgICAgICAgICAgdG1wID0gW10sXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIC8vIEJ5IGhhcHB5IGNvaW5jaWRlbmNlLCBhIChicm9rZW4pIGdFQlROIGFwcGVhcnMgb24gRG9jdW1lbnRGcmFnbWVudCBub2RlcyB0b29cbiAgICAgICAgcmVzdWx0cyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTsgLy8gRmlsdGVyIG91dCBwb3NzaWJsZSBjb21tZW50c1xuXG4gICAgICAgIGlmICh0YWcgPT09IFwiKlwiKSB7XG4gICAgICAgICAgd2hpbGUgKGVsZW0gPSByZXN1bHRzW2krK10pIHtcbiAgICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgIHRtcC5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH07IC8vIENsYXNzXG5cbiAgICAgIEV4cHIuZmluZFtcIkNMQVNTXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmIGZ1bmN0aW9uIChjbGFzc05hbWUsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvKiBRU0EvbWF0Y2hlc1NlbGVjdG9yXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgICAvLyBRU0EgYW5kIG1hdGNoZXNTZWxlY3RvciBzdXBwb3J0XG4gICAgICAvLyBtYXRjaGVzU2VsZWN0b3IoOmFjdGl2ZSkgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKElFOS9PcGVyYSAxMS41KVxuXG5cbiAgICAgIHJidWdneU1hdGNoZXMgPSBbXTsgLy8gcVNhKDpmb2N1cykgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKENocm9tZSAyMSlcbiAgICAgIC8vIFdlIGFsbG93IHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBJRTgvOSB0aGF0IHRocm93cyBhbiBlcnJvclxuICAgICAgLy8gd2hlbmV2ZXIgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGFjY2Vzc2VkIG9uIGFuIGlmcmFtZVxuICAgICAgLy8gU28sIHdlIGFsbG93IDpmb2N1cyB0byBwYXNzIHRocm91Z2ggUVNBIGFsbCB0aGUgdGltZSB0byBhdm9pZCB0aGUgSUUgZXJyb3JcbiAgICAgIC8vIFNlZSBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzNzhcblxuICAgICAgcmJ1Z2d5UVNBID0gW107XG5cbiAgICAgIGlmIChzdXBwb3J0LnFzYSA9IHJuYXRpdmUudGVzdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKSkge1xuICAgICAgICAvLyBCdWlsZCBRU0EgcmVnZXhcbiAgICAgICAgLy8gUmVnZXggc3RyYXRlZ3kgYWRvcHRlZCBmcm9tIERpZWdvIFBlcmluaVxuICAgICAgICBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgLy8gU2VsZWN0IGlzIHNldCB0byBlbXB0eSBzdHJpbmcgb24gcHVycG9zZVxuICAgICAgICAgIC8vIFRoaXMgaXMgdG8gdGVzdCBJRSdzIHRyZWF0bWVudCBvZiBub3QgZXhwbGljaXRseVxuICAgICAgICAgIC8vIHNldHRpbmcgYSBib29sZWFuIGNvbnRlbnQgYXR0cmlidXRlLFxuICAgICAgICAgIC8vIHNpbmNlIGl0cyBwcmVzZW5jZSBzaG91bGQgYmUgZW5vdWdoXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEyMzU5XG4gICAgICAgICAgZG9jRWxlbS5hcHBlbmRDaGlsZChlbCkuaW5uZXJIVE1MID0gXCI8YSBpZD0nXCIgKyBleHBhbmRvICsgXCInPjwvYT5cIiArIFwiPHNlbGVjdCBpZD0nXCIgKyBleHBhbmRvICsgXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+XCIgKyBcIjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCI7IC8vIFN1cHBvcnQ6IElFOCwgT3BlcmEgMTEtMTIuMTZcbiAgICAgICAgICAvLyBOb3RoaW5nIHNob3VsZCBiZSBzZWxlY3RlZCB3aGVuIGVtcHR5IHN0cmluZ3MgZm9sbG93IF49IG9yICQ9IG9yICo9XG4gICAgICAgICAgLy8gVGhlIHRlc3QgYXR0cmlidXRlIG11c3QgYmUgdW5rbm93biBpbiBPcGVyYSBidXQgXCJzYWZlXCIgZm9yIFdpblJUXG4gICAgICAgICAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9oaDQ2NTM4OC5hc3B4I2F0dHJpYnV0ZV9zZWN0aW9uXG5cbiAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCJbKl4kXT1cIiArIHdoaXRlc3BhY2UgKyBcIiooPzonJ3xcXFwiXFxcIilcIik7XG4gICAgICAgICAgfSAvLyBTdXBwb3J0OiBJRThcbiAgICAgICAgICAvLyBCb29sZWFuIGF0dHJpYnV0ZXMgYW5kIFwidmFsdWVcIiBhcmUgbm90IHRyZWF0ZWQgY29ycmVjdGx5XG5cblxuICAgICAgICAgIGlmICghZWwucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86dmFsdWV8XCIgKyBib29sZWFucyArIFwiKVwiKTtcbiAgICAgICAgICB9IC8vIFN1cHBvcnQ6IENocm9tZTwyOSwgQW5kcm9pZDw0LjQsIFNhZmFyaTw3LjArLCBpT1M8Ny4wKywgUGhhbnRvbUpTPDEuOS44K1xuXG5cbiAgICAgICAgICBpZiAoIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiICsgZXhwYW5kbyArIFwiLV1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIn49XCIpO1xuICAgICAgICAgIH0gLy8gV2Via2l0L09wZXJhIC0gOmNoZWNrZWQgc2hvdWxkIHJldHVybiBzZWxlY3RlZCBvcHRpb24gZWxlbWVudHNcbiAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuICAgICAgICAgIC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cblxuICAgICAgICAgIGlmICghZWwucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCI6Y2hlY2tlZFwiKTtcbiAgICAgICAgICB9IC8vIFN1cHBvcnQ6IFNhZmFyaSA4KywgaU9TIDgrXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNjg1MVxuICAgICAgICAgIC8vIEluLXBhZ2UgYHNlbGVjdG9yI2lkIHNpYmxpbmctY29tYmluYXRvciBzZWxlY3RvcmAgZmFpbHNcblxuXG4gICAgICAgICAgaWYgKCFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIiArIGV4cGFuZG8gKyBcIisqXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCIuIy4rWyt+XVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPlwiICsgXCI8c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7IC8vIFN1cHBvcnQ6IFdpbmRvd3MgOCBOYXRpdmUgQXBwc1xuICAgICAgICAgIC8vIFRoZSB0eXBlIGFuZCBuYW1lIGF0dHJpYnV0ZXMgYXJlIHJlc3RyaWN0ZWQgZHVyaW5nIC5pbm5lckhUTUwgYXNzaWdubWVudFxuXG4gICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoaW5wdXQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJEXCIpOyAvLyBTdXBwb3J0OiBJRThcbiAgICAgICAgICAvLyBFbmZvcmNlIGNhc2Utc2Vuc2l0aXZpdHkgb2YgbmFtZSBhdHRyaWJ1dGVcblxuICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIm5hbWVcIiArIHdoaXRlc3BhY2UgKyBcIipbKl4kfCF+XT89XCIpO1xuICAgICAgICAgIH0gLy8gRkYgMy41IC0gOmVuYWJsZWQvOmRpc2FibGVkIGFuZCBoaWRkZW4gZWxlbWVudHMgKGhpZGRlbiBlbGVtZW50cyBhcmUgc3RpbGwgZW5hYmxlZClcbiAgICAgICAgICAvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuXG5cbiAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCAhPT0gMikge1xuICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCI6ZW5hYmxlZFwiLCBcIjpkaXNhYmxlZFwiKTtcbiAgICAgICAgICB9IC8vIFN1cHBvcnQ6IElFOS0xMStcbiAgICAgICAgICAvLyBJRSdzIDpkaXNhYmxlZCBzZWxlY3RvciBkb2VzIG5vdCBwaWNrIHVwIHRoZSBjaGlsZHJlbiBvZiBkaXNhYmxlZCBmaWVsZHNldHNcblxuXG4gICAgICAgICAgZG9jRWxlbS5hcHBlbmRDaGlsZChlbCkuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIpO1xuICAgICAgICAgIH0gLy8gT3BlcmEgMTAtMTEgZG9lcyBub3QgdGhyb3cgb24gcG9zdC1jb21tYSBpbnZhbGlkIHBzZXVkb3NcblxuXG4gICAgICAgICAgZWwucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIik7XG4gICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCIsLio6XCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnQubWF0Y2hlc1NlbGVjdG9yID0gcm5hdGl2ZS50ZXN0KG1hdGNoZXMgPSBkb2NFbGVtLm1hdGNoZXMgfHwgZG9jRWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZG9jRWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZG9jRWxlbS5vTWF0Y2hlc1NlbGVjdG9yIHx8IGRvY0VsZW0ubXNNYXRjaGVzU2VsZWN0b3IpKSB7XG4gICAgICAgIGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgaXQncyBwb3NzaWJsZSB0byBkbyBtYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgICAvLyBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlIChJRSA5KVxuICAgICAgICAgIHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggPSBtYXRjaGVzLmNhbGwoZWwsIFwiKlwiKTsgLy8gVGhpcyBzaG91bGQgZmFpbCB3aXRoIGFuIGV4Y2VwdGlvblxuICAgICAgICAgIC8vIEdlY2tvIGRvZXMgbm90IGVycm9yLCByZXR1cm5zIGZhbHNlIGluc3RlYWRcblxuICAgICAgICAgIG1hdGNoZXMuY2FsbChlbCwgXCJbcyE9JyddOnhcIik7XG4gICAgICAgICAgcmJ1Z2d5TWF0Y2hlcy5wdXNoKFwiIT1cIiwgcHNldWRvcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByYnVnZ3lRU0EgPSByYnVnZ3lRU0EubGVuZ3RoICYmIG5ldyBSZWdFeHAocmJ1Z2d5UVNBLmpvaW4oXCJ8XCIpKTtcbiAgICAgIHJidWdneU1hdGNoZXMgPSByYnVnZ3lNYXRjaGVzLmxlbmd0aCAmJiBuZXcgUmVnRXhwKHJidWdneU1hdGNoZXMuam9pbihcInxcIikpO1xuICAgICAgLyogQ29udGFpbnNcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgICAgaGFzQ29tcGFyZSA9IHJuYXRpdmUudGVzdChkb2NFbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKTsgLy8gRWxlbWVudCBjb250YWlucyBhbm90aGVyXG4gICAgICAvLyBQdXJwb3NlZnVsbHkgc2VsZi1leGNsdXNpdmVcbiAgICAgIC8vIEFzIGluLCBhbiBlbGVtZW50IGRvZXMgbm90IGNvbnRhaW4gaXRzZWxmXG5cbiAgICAgIGNvbnRhaW5zID0gaGFzQ29tcGFyZSB8fCBybmF0aXZlLnRlc3QoZG9jRWxlbS5jb250YWlucykgPyBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgYWRvd24gPSBhLm5vZGVUeXBlID09PSA5ID8gYS5kb2N1bWVudEVsZW1lbnQgOiBhLFxuICAgICAgICAgICAgYnVwID0gYiAmJiBiLnBhcmVudE5vZGU7XG4gICAgICAgIHJldHVybiBhID09PSBidXAgfHwgISEoYnVwICYmIGJ1cC5ub2RlVHlwZSA9PT0gMSAmJiAoYWRvd24uY29udGFpbnMgPyBhZG93bi5jb250YWlucyhidXApIDogYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGJ1cCkgJiAxNikpO1xuICAgICAgfSA6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgd2hpbGUgKGIgPSBiLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGlmIChiID09PSBhKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgICAvKiBTb3J0aW5nXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgICAvLyBEb2N1bWVudCBvcmRlciBzb3J0aW5nXG5cbiAgICAgIHNvcnRPcmRlciA9IGhhc0NvbXBhcmUgPyBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxuICAgICAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICAgIGhhc0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gLy8gU29ydCBvbiBtZXRob2QgZXhpc3RlbmNlIGlmIG9ubHkgb25lIGlucHV0IGhhcyBjb21wYXJlRG9jdW1lbnRQb3NpdGlvblxuXG5cbiAgICAgICAgdmFyIGNvbXBhcmUgPSAhYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAtICFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBhcmU7XG4gICAgICAgIH0gLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIGlmIGJvdGggaW5wdXRzIGJlbG9uZyB0byB0aGUgc2FtZSBkb2N1bWVudFxuXG5cbiAgICAgICAgY29tcGFyZSA9IChhLm93bmVyRG9jdW1lbnQgfHwgYSkgPT09IChiLm93bmVyRG9jdW1lbnQgfHwgYikgPyBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpIDogLy8gT3RoZXJ3aXNlIHdlIGtub3cgdGhleSBhcmUgZGlzY29ubmVjdGVkXG4gICAgICAgIDE7IC8vIERpc2Nvbm5lY3RlZCBub2Rlc1xuXG4gICAgICAgIGlmIChjb21wYXJlICYgMSB8fCAhc3VwcG9ydC5zb3J0RGV0YWNoZWQgJiYgYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKSA9PT0gY29tcGFyZSkge1xuICAgICAgICAgIC8vIENob29zZSB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IGlzIHJlbGF0ZWQgdG8gb3VyIHByZWZlcnJlZCBkb2N1bWVudFxuICAgICAgICAgIGlmIChhID09PSBkb2N1bWVudCB8fCBhLm93bmVyRG9jdW1lbnQgPT09IHByZWZlcnJlZERvYyAmJiBjb250YWlucyhwcmVmZXJyZWREb2MsIGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGIgPT09IGRvY3VtZW50IHx8IGIub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH0gLy8gTWFpbnRhaW4gb3JpZ2luYWwgb3JkZXJcblxuXG4gICAgICAgICAgcmV0dXJuIHNvcnRJbnB1dCA/IGluZGV4T2Yoc29ydElucHV0LCBhKSAtIGluZGV4T2Yoc29ydElucHV0LCBiKSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcGFyZSAmIDQgPyAtMSA6IDE7XG4gICAgICB9IDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgLy8gRXhpdCBlYXJseSBpZiB0aGUgbm9kZXMgYXJlIGlkZW50aWNhbFxuICAgICAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICAgIGhhc0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3VyLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBhdXAgPSBhLnBhcmVudE5vZGUsXG4gICAgICAgICAgICBidXAgPSBiLnBhcmVudE5vZGUsXG4gICAgICAgICAgICBhcCA9IFthXSxcbiAgICAgICAgICAgIGJwID0gW2JdOyAvLyBQYXJlbnRsZXNzIG5vZGVzIGFyZSBlaXRoZXIgZG9jdW1lbnRzIG9yIGRpc2Nvbm5lY3RlZFxuXG4gICAgICAgIGlmICghYXVwIHx8ICFidXApIHtcbiAgICAgICAgICByZXR1cm4gYSA9PT0gZG9jdW1lbnQgPyAtMSA6IGIgPT09IGRvY3VtZW50ID8gMSA6IGF1cCA/IC0xIDogYnVwID8gMSA6IHNvcnRJbnB1dCA/IGluZGV4T2Yoc29ydElucHV0LCBhKSAtIGluZGV4T2Yoc29ydElucHV0LCBiKSA6IDA7IC8vIElmIHRoZSBub2RlcyBhcmUgc2libGluZ3MsIHdlIGNhbiBkbyBhIHF1aWNrIGNoZWNrXG4gICAgICAgIH0gZWxzZSBpZiAoYXVwID09PSBidXApIHtcbiAgICAgICAgICByZXR1cm4gc2libGluZ0NoZWNrKGEsIGIpO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSB3ZSBuZWVkIGZ1bGwgbGlzdHMgb2YgdGhlaXIgYW5jZXN0b3JzIGZvciBjb21wYXJpc29uXG5cblxuICAgICAgICBjdXIgPSBhO1xuXG4gICAgICAgIHdoaWxlIChjdXIgPSBjdXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGFwLnVuc2hpZnQoY3VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ciA9IGI7XG5cbiAgICAgICAgd2hpbGUgKGN1ciA9IGN1ci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgYnAudW5zaGlmdChjdXIpO1xuICAgICAgICB9IC8vIFdhbGsgZG93biB0aGUgdHJlZSBsb29raW5nIGZvciBhIGRpc2NyZXBhbmN5XG5cblxuICAgICAgICB3aGlsZSAoYXBbaV0gPT09IGJwW2ldKSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGkgPyAvLyBEbyBhIHNpYmxpbmcgY2hlY2sgaWYgdGhlIG5vZGVzIGhhdmUgYSBjb21tb24gYW5jZXN0b3JcbiAgICAgICAgc2libGluZ0NoZWNrKGFwW2ldLCBicFtpXSkgOiAvLyBPdGhlcndpc2Ugbm9kZXMgaW4gb3VyIGRvY3VtZW50IHNvcnQgZmlyc3RcbiAgICAgICAgYXBbaV0gPT09IHByZWZlcnJlZERvYyA/IC0xIDogYnBbaV0gPT09IHByZWZlcnJlZERvYyA/IDEgOiAwO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuXG4gICAgU2l6emxlLm1hdGNoZXMgPSBmdW5jdGlvbiAoZXhwciwgZWxlbWVudHMpIHtcbiAgICAgIHJldHVybiBTaXp6bGUoZXhwciwgbnVsbCwgbnVsbCwgZWxlbWVudHMpO1xuICAgIH07XG5cbiAgICBTaXp6bGUubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gKGVsZW0sIGV4cHIpIHtcbiAgICAgIC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuICAgICAgaWYgKChlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSkgIT09IGRvY3VtZW50KSB7XG4gICAgICAgIHNldERvY3VtZW50KGVsZW0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgJiYgZG9jdW1lbnRJc0hUTUwgJiYgIW5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGVbZXhwciArIFwiIFwiXSAmJiAoIXJidWdneU1hdGNoZXMgfHwgIXJidWdneU1hdGNoZXMudGVzdChleHByKSkgJiYgKCFyYnVnZ3lRU0EgfHwgIXJidWdneVFTQS50ZXN0KGV4cHIpKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciByZXQgPSBtYXRjaGVzLmNhbGwoZWxlbSwgZXhwcik7IC8vIElFIDkncyBtYXRjaGVzU2VsZWN0b3IgcmV0dXJucyBmYWxzZSBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcblxuICAgICAgICAgIGlmIChyZXQgfHwgc3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCB8fCAvLyBBcyB3ZWxsLCBkaXNjb25uZWN0ZWQgbm9kZXMgYXJlIHNhaWQgdG8gYmUgaW4gYSBkb2N1bWVudFxuICAgICAgICAgIC8vIGZyYWdtZW50IGluIElFIDlcbiAgICAgICAgICBlbGVtLmRvY3VtZW50ICYmIGVsZW0uZG9jdW1lbnQubm9kZVR5cGUgIT09IDExKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUoZXhwciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFNpenpsZShleHByLCBkb2N1bWVudCwgbnVsbCwgW2VsZW1dKS5sZW5ndGggPiAwO1xuICAgIH07XG5cbiAgICBTaXp6bGUuY29udGFpbnMgPSBmdW5jdGlvbiAoY29udGV4dCwgZWxlbSkge1xuICAgICAgLy8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG4gICAgICBpZiAoKGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0KSAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgc2V0RG9jdW1lbnQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250YWlucyhjb250ZXh0LCBlbGVtKTtcbiAgICB9O1xuXG4gICAgU2l6emxlLmF0dHIgPSBmdW5jdGlvbiAoZWxlbSwgbmFtZSkge1xuICAgICAgLy8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG4gICAgICBpZiAoKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKSAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgc2V0RG9jdW1lbnQoZWxlbSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmbiA9IEV4cHIuYXR0ckhhbmRsZVtuYW1lLnRvTG93ZXJDYXNlKCldLFxuICAgICAgICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzIChqUXVlcnkgIzEzODA3KVxuICAgICAgdmFsID0gZm4gJiYgaGFzT3duLmNhbGwoRXhwci5hdHRySGFuZGxlLCBuYW1lLnRvTG93ZXJDYXNlKCkpID8gZm4oZWxlbSwgbmFtZSwgIWRvY3VtZW50SXNIVE1MKSA6IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA6IHN1cHBvcnQuYXR0cmlidXRlcyB8fCAhZG9jdW1lbnRJc0hUTUwgPyBlbGVtLmdldEF0dHJpYnV0ZShuYW1lKSA6ICh2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkpICYmIHZhbC5zcGVjaWZpZWQgPyB2YWwudmFsdWUgOiBudWxsO1xuICAgIH07XG5cbiAgICBTaXp6bGUuZXNjYXBlID0gZnVuY3Rpb24gKHNlbCkge1xuICAgICAgcmV0dXJuIChzZWwgKyBcIlwiKS5yZXBsYWNlKHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUpO1xuICAgIH07XG5cbiAgICBTaXp6bGUuZXJyb3IgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIiArIG1zZyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEb2N1bWVudCBzb3J0aW5nIGFuZCByZW1vdmluZyBkdXBsaWNhdGVzXG4gICAgICogQHBhcmFtIHtBcnJheUxpa2V9IHJlc3VsdHNcbiAgICAgKi9cblxuXG4gICAgU2l6emxlLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgdmFyIGVsZW0sXG4gICAgICAgICAgZHVwbGljYXRlcyA9IFtdLFxuICAgICAgICAgIGogPSAwLFxuICAgICAgICAgIGkgPSAwOyAvLyBVbmxlc3Mgd2UgKmtub3cqIHdlIGNhbiBkZXRlY3QgZHVwbGljYXRlcywgYXNzdW1lIHRoZWlyIHByZXNlbmNlXG5cbiAgICAgIGhhc0R1cGxpY2F0ZSA9ICFzdXBwb3J0LmRldGVjdER1cGxpY2F0ZXM7XG4gICAgICBzb3J0SW5wdXQgPSAhc3VwcG9ydC5zb3J0U3RhYmxlICYmIHJlc3VsdHMuc2xpY2UoMCk7XG4gICAgICByZXN1bHRzLnNvcnQoc29ydE9yZGVyKTtcblxuICAgICAgaWYgKGhhc0R1cGxpY2F0ZSkge1xuICAgICAgICB3aGlsZSAoZWxlbSA9IHJlc3VsdHNbaSsrXSkge1xuICAgICAgICAgIGlmIChlbGVtID09PSByZXN1bHRzW2ldKSB7XG4gICAgICAgICAgICBqID0gZHVwbGljYXRlcy5wdXNoKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnNwbGljZShkdXBsaWNhdGVzW2pdLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBDbGVhciBpbnB1dCBhZnRlciBzb3J0aW5nIHRvIHJlbGVhc2Ugb2JqZWN0c1xuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL3B1bGwvMjI1XG5cblxuICAgICAgc29ydElucHV0ID0gbnVsbDtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBmdW5jdGlvbiBmb3IgcmV0cmlldmluZyB0aGUgdGV4dCB2YWx1ZSBvZiBhbiBhcnJheSBvZiBET00gbm9kZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fEVsZW1lbnR9IGVsZW1cbiAgICAgKi9cblxuXG4gICAgZ2V0VGV4dCA9IFNpenpsZS5nZXRUZXh0ID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHZhciBub2RlLFxuICAgICAgICAgIHJldCA9IFwiXCIsXG4gICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgbm9kZVR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG4gICAgICBpZiAoIW5vZGVUeXBlKSB7XG4gICAgICAgIC8vIElmIG5vIG5vZGVUeXBlLCB0aGlzIGlzIGV4cGVjdGVkIHRvIGJlIGFuIGFycmF5XG4gICAgICAgIHdoaWxlIChub2RlID0gZWxlbVtpKytdKSB7XG4gICAgICAgICAgLy8gRG8gbm90IHRyYXZlcnNlIGNvbW1lbnQgbm9kZXNcbiAgICAgICAgICByZXQgKz0gZ2V0VGV4dChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlVHlwZSA9PT0gMSB8fCBub2RlVHlwZSA9PT0gOSB8fCBub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgLy8gVXNlIHRleHRDb250ZW50IGZvciBlbGVtZW50c1xuICAgICAgICAvLyBpbm5lclRleHQgdXNhZ2UgcmVtb3ZlZCBmb3IgY29uc2lzdGVuY3kgb2YgbmV3IGxpbmVzIChqUXVlcnkgIzExMTUzKVxuICAgICAgICBpZiAodHlwZW9mIGVsZW0udGV4dENvbnRlbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbS50ZXh0Q29udGVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUcmF2ZXJzZSBpdHMgY2hpbGRyZW5cbiAgICAgICAgICBmb3IgKGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICByZXQgKz0gZ2V0VGV4dChlbGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZVR5cGUgPT09IDMgfHwgbm9kZVR5cGUgPT09IDQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW0ubm9kZVZhbHVlO1xuICAgICAgfSAvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICBFeHByID0gU2l6emxlLnNlbGVjdG9ycyA9IHtcbiAgICAgIC8vIENhbiBiZSBhZGp1c3RlZCBieSB0aGUgdXNlclxuICAgICAgY2FjaGVMZW5ndGg6IDUwLFxuICAgICAgY3JlYXRlUHNldWRvOiBtYXJrRnVuY3Rpb24sXG4gICAgICBtYXRjaDogbWF0Y2hFeHByLFxuICAgICAgYXR0ckhhbmRsZToge30sXG4gICAgICBmaW5kOiB7fSxcbiAgICAgIHJlbGF0aXZlOiB7XG4gICAgICAgIFwiPlwiOiB7XG4gICAgICAgICAgZGlyOiBcInBhcmVudE5vZGVcIixcbiAgICAgICAgICBmaXJzdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIiBcIjoge1xuICAgICAgICAgIGRpcjogXCJwYXJlbnROb2RlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIrXCI6IHtcbiAgICAgICAgICBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIsXG4gICAgICAgICAgZmlyc3Q6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ+XCI6IHtcbiAgICAgICAgICBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZUZpbHRlcjoge1xuICAgICAgICBcIkFUVFJcIjogZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgbWF0Y2hbMV0gPSBtYXRjaFsxXS5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKTsgLy8gTW92ZSB0aGUgZ2l2ZW4gdmFsdWUgdG8gbWF0Y2hbM10gd2hldGhlciBxdW90ZWQgb3IgdW5xdW90ZWRcblxuICAgICAgICAgIG1hdGNoWzNdID0gKG1hdGNoWzNdIHx8IG1hdGNoWzRdIHx8IG1hdGNoWzVdIHx8IFwiXCIpLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpO1xuXG4gICAgICAgICAgaWYgKG1hdGNoWzJdID09PSBcIn49XCIpIHtcbiAgICAgICAgICAgIG1hdGNoWzNdID0gXCIgXCIgKyBtYXRjaFszXSArIFwiIFwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtYXRjaC5zbGljZSgwLCA0KTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJDSElMRFwiOiBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAvKiBtYXRjaGVzIGZyb20gbWF0Y2hFeHByW1wiQ0hJTERcIl1cbiAgICAgICAgICBcdDEgdHlwZSAob25seXxudGh8Li4uKVxuICAgICAgICAgIFx0MiB3aGF0IChjaGlsZHxvZi10eXBlKVxuICAgICAgICAgIFx0MyBhcmd1bWVudCAoZXZlbnxvZGR8XFxkKnxcXGQqbihbKy1dXFxkKyk/fC4uLilcbiAgICAgICAgICBcdDQgeG4tY29tcG9uZW50IG9mIHhuK3kgYXJndW1lbnQgKFsrLV0/XFxkKm58KVxuICAgICAgICAgIFx0NSBzaWduIG9mIHhuLWNvbXBvbmVudFxuICAgICAgICAgIFx0NiB4IG9mIHhuLWNvbXBvbmVudFxuICAgICAgICAgIFx0NyBzaWduIG9mIHktY29tcG9uZW50XG4gICAgICAgICAgXHQ4IHkgb2YgeS1jb21wb25lbnRcbiAgICAgICAgICAqL1xuICAgICAgICAgIG1hdGNoWzFdID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChtYXRjaFsxXS5zbGljZSgwLCAzKSA9PT0gXCJudGhcIikge1xuICAgICAgICAgICAgLy8gbnRoLSogcmVxdWlyZXMgYXJndW1lbnRcbiAgICAgICAgICAgIGlmICghbWF0Y2hbM10pIHtcbiAgICAgICAgICAgICAgU2l6emxlLmVycm9yKG1hdGNoWzBdKTtcbiAgICAgICAgICAgIH0gLy8gbnVtZXJpYyB4IGFuZCB5IHBhcmFtZXRlcnMgZm9yIEV4cHIuZmlsdGVyLkNISUxEXG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGF0IGZhbHNlL3RydWUgY2FzdCByZXNwZWN0aXZlbHkgdG8gMC8xXG5cblxuICAgICAgICAgICAgbWF0Y2hbNF0gPSArKG1hdGNoWzRdID8gbWF0Y2hbNV0gKyAobWF0Y2hbNl0gfHwgMSkgOiAyICogKG1hdGNoWzNdID09PSBcImV2ZW5cIiB8fCBtYXRjaFszXSA9PT0gXCJvZGRcIikpO1xuICAgICAgICAgICAgbWF0Y2hbNV0gPSArKG1hdGNoWzddICsgbWF0Y2hbOF0gfHwgbWF0Y2hbM10gPT09IFwib2RkXCIpOyAvLyBvdGhlciB0eXBlcyBwcm9oaWJpdCBhcmd1bWVudHNcbiAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICBTaXp6bGUuZXJyb3IobWF0Y2hbMF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfSxcbiAgICAgICAgXCJQU0VVRE9cIjogZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIGV4Y2VzcyxcbiAgICAgICAgICAgICAgdW5xdW90ZWQgPSAhbWF0Y2hbNl0gJiYgbWF0Y2hbMl07XG5cbiAgICAgICAgICBpZiAobWF0Y2hFeHByW1wiQ0hJTERcIl0udGVzdChtYXRjaFswXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0gLy8gQWNjZXB0IHF1b3RlZCBhcmd1bWVudHMgYXMtaXNcblxuXG4gICAgICAgICAgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICBtYXRjaFsyXSA9IG1hdGNoWzRdIHx8IG1hdGNoWzVdIHx8IFwiXCI7IC8vIFN0cmlwIGV4Y2VzcyBjaGFyYWN0ZXJzIGZyb20gdW5xdW90ZWQgYXJndW1lbnRzXG4gICAgICAgICAgfSBlbHNlIGlmICh1bnF1b3RlZCAmJiBycHNldWRvLnRlc3QodW5xdW90ZWQpICYmICggLy8gR2V0IGV4Y2VzcyBmcm9tIHRva2VuaXplIChyZWN1cnNpdmVseSlcbiAgICAgICAgICBleGNlc3MgPSB0b2tlbml6ZSh1bnF1b3RlZCwgdHJ1ZSkpICYmICggLy8gYWR2YW5jZSB0byB0aGUgbmV4dCBjbG9zaW5nIHBhcmVudGhlc2lzXG4gICAgICAgICAgZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZihcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzKSAtIHVucXVvdGVkLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIC8vIGV4Y2VzcyBpcyBhIG5lZ2F0aXZlIGluZGV4XG4gICAgICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKDAsIGV4Y2Vzcyk7XG4gICAgICAgICAgICBtYXRjaFsyXSA9IHVucXVvdGVkLnNsaWNlKDAsIGV4Y2Vzcyk7XG4gICAgICAgICAgfSAvLyBSZXR1cm4gb25seSBjYXB0dXJlcyBuZWVkZWQgYnkgdGhlIHBzZXVkbyBmaWx0ZXIgbWV0aG9kICh0eXBlIGFuZCBhcmd1bWVudClcblxuXG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnNsaWNlKDAsIDMpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmlsdGVyOiB7XG4gICAgICAgIFwiVEFHXCI6IGZ1bmN0aW9uIChub2RlTmFtZVNlbGVjdG9yKSB7XG4gICAgICAgICAgdmFyIG5vZGVOYW1lID0gbm9kZU5hbWVTZWxlY3Rvci5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBub2RlTmFtZVNlbGVjdG9yID09PSBcIipcIiA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZTtcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBcIkNMQVNTXCI6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICB2YXIgcGF0dGVybiA9IGNsYXNzQ2FjaGVbY2xhc3NOYW1lICsgXCIgXCJdO1xuICAgICAgICAgIHJldHVybiBwYXR0ZXJuIHx8IChwYXR0ZXJuID0gbmV3IFJlZ0V4cChcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICsgXCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIikpICYmIGNsYXNzQ2FjaGUoY2xhc3NOYW1lLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0eXBlb2YgZWxlbS5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbS5jbGFzc05hbWUgfHwgdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlICE9PSBcInVuZGVmaW5lZFwiICYmIGVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiQVRUUlwiOiBmdW5jdGlvbiAobmFtZSwgb3BlcmF0b3IsIGNoZWNrKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gU2l6emxlLmF0dHIoZWxlbSwgbmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gb3BlcmF0b3IgPT09IFwiIT1cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFvcGVyYXRvcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gb3BlcmF0b3IgPT09IFwiPVwiID8gcmVzdWx0ID09PSBjaGVjayA6IG9wZXJhdG9yID09PSBcIiE9XCIgPyByZXN1bHQgIT09IGNoZWNrIDogb3BlcmF0b3IgPT09IFwiXj1cIiA/IGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKGNoZWNrKSA9PT0gMCA6IG9wZXJhdG9yID09PSBcIio9XCIgPyBjaGVjayAmJiByZXN1bHQuaW5kZXhPZihjaGVjaykgPiAtMSA6IG9wZXJhdG9yID09PSBcIiQ9XCIgPyBjaGVjayAmJiByZXN1bHQuc2xpY2UoLWNoZWNrLmxlbmd0aCkgPT09IGNoZWNrIDogb3BlcmF0b3IgPT09IFwifj1cIiA/IChcIiBcIiArIHJlc3VsdC5yZXBsYWNlKHJ3aGl0ZXNwYWNlLCBcIiBcIikgKyBcIiBcIikuaW5kZXhPZihjaGVjaykgPiAtMSA6IG9wZXJhdG9yID09PSBcInw9XCIgPyByZXN1bHQgPT09IGNoZWNrIHx8IHJlc3VsdC5zbGljZSgwLCBjaGVjay5sZW5ndGggKyAxKSA9PT0gY2hlY2sgKyBcIi1cIiA6IGZhbHNlO1xuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIFwiQ0hJTERcIjogZnVuY3Rpb24gKHR5cGUsIHdoYXQsIGFyZ3VtZW50LCBmaXJzdCwgbGFzdCkge1xuICAgICAgICAgIHZhciBzaW1wbGUgPSB0eXBlLnNsaWNlKDAsIDMpICE9PSBcIm50aFwiLFxuICAgICAgICAgICAgICBmb3J3YXJkID0gdHlwZS5zbGljZSgtNCkgIT09IFwibGFzdFwiLFxuICAgICAgICAgICAgICBvZlR5cGUgPSB3aGF0ID09PSBcIm9mLXR5cGVcIjtcbiAgICAgICAgICByZXR1cm4gZmlyc3QgPT09IDEgJiYgbGFzdCA9PT0gMCA/IC8vIFNob3J0Y3V0IGZvciA6bnRoLSoobilcbiAgICAgICAgICBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuICEhZWxlbS5wYXJlbnROb2RlO1xuICAgICAgICAgIH0gOiBmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGUsXG4gICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGUsXG4gICAgICAgICAgICAgICAgb3V0ZXJDYWNoZSxcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgIG5vZGVJbmRleCxcbiAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICBkaXIgPSBzaW1wbGUgIT09IGZvcndhcmQgPyBcIm5leHRTaWJsaW5nXCIgOiBcInByZXZpb3VzU2libGluZ1wiLFxuICAgICAgICAgICAgICAgIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICBuYW1lID0gb2ZUeXBlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICB1c2VDYWNoZSA9ICF4bWwgJiYgIW9mVHlwZSxcbiAgICAgICAgICAgICAgICBkaWZmID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgLy8gOihmaXJzdHxsYXN0fG9ubHkpLShjaGlsZHxvZi10eXBlKVxuICAgICAgICAgICAgICBpZiAoc2ltcGxlKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGRpcikge1xuICAgICAgICAgICAgICAgICAgbm9kZSA9IGVsZW07XG5cbiAgICAgICAgICAgICAgICAgIHdoaWxlIChub2RlID0gbm9kZVtkaXJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvZlR5cGUgPyBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUgOiBub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IC8vIFJldmVyc2UgZGlyZWN0aW9uIGZvciA6b25seS0qIChpZiB3ZSBoYXZlbid0IHlldCBkb25lIHNvKVxuXG5cbiAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gZGlyID0gdHlwZSA9PT0gXCJvbmx5XCIgJiYgIXN0YXJ0ICYmIFwibmV4dFNpYmxpbmdcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN0YXJ0ID0gW2ZvcndhcmQgPyBwYXJlbnQuZmlyc3RDaGlsZCA6IHBhcmVudC5sYXN0Q2hpbGRdOyAvLyBub24teG1sIDpudGgtY2hpbGQoLi4uKSBzdG9yZXMgY2FjaGUgZGF0YSBvbiBgcGFyZW50YFxuXG4gICAgICAgICAgICAgIGlmIChmb3J3YXJkICYmIHVzZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VlayBgZWxlbWAgZnJvbSBhIHByZXZpb3VzbHktY2FjaGVkIGluZGV4XG4gICAgICAgICAgICAgICAgLy8gLi4uaW4gYSBnemlwLWZyaWVuZGx5IHdheVxuICAgICAgICAgICAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgb3V0ZXJDYWNoZSA9IG5vZGVbZXhwYW5kb10gfHwgKG5vZGVbZXhwYW5kb10gPSB7fSk7IC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcbiAgICAgICAgICAgICAgICAvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblxuICAgICAgICAgICAgICAgIHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXSB8fCAob3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXSA9IHt9KTtcbiAgICAgICAgICAgICAgICBjYWNoZSA9IHVuaXF1ZUNhY2hlW3R5cGVdIHx8IFtdO1xuICAgICAgICAgICAgICAgIG5vZGVJbmRleCA9IGNhY2hlWzBdID09PSBkaXJydW5zICYmIGNhY2hlWzFdO1xuICAgICAgICAgICAgICAgIGRpZmYgPSBub2RlSW5kZXggJiYgY2FjaGVbMl07XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGVJbmRleCAmJiBwYXJlbnQuY2hpbGROb2Rlc1tub2RlSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbZGlyXSB8fCAoIC8vIEZhbGxiYWNrIHRvIHNlZWtpbmcgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG4gICAgICAgICAgICAgICAgZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSB7XG4gICAgICAgICAgICAgICAgICAvLyBXaGVuIGZvdW5kLCBjYWNoZSBpbmRleGVzIG9uIGBwYXJlbnRgIGFuZCBicmVha1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgKytkaWZmICYmIG5vZGUgPT09IGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGVbdHlwZV0gPSBbZGlycnVucywgbm9kZUluZGV4LCBkaWZmXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFVzZSBwcmV2aW91c2x5LWNhY2hlZCBlbGVtZW50IGluZGV4IGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIGlmICh1c2VDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgLy8gLi4uaW4gYSBnemlwLWZyaWVuZGx5IHdheVxuICAgICAgICAgICAgICAgICAgbm9kZSA9IGVsZW07XG4gICAgICAgICAgICAgICAgICBvdXRlckNhY2hlID0gbm9kZVtleHBhbmRvXSB8fCAobm9kZVtleHBhbmRvXSA9IHt9KTsgLy8gU3VwcG9ydDogSUUgPDkgb25seVxuICAgICAgICAgICAgICAgICAgLy8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cbiAgICAgICAgICAgICAgICAgIHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXSB8fCAob3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXSA9IHt9KTtcbiAgICAgICAgICAgICAgICAgIGNhY2hlID0gdW5pcXVlQ2FjaGVbdHlwZV0gfHwgW107XG4gICAgICAgICAgICAgICAgICBub2RlSW5kZXggPSBjYWNoZVswXSA9PT0gZGlycnVucyAmJiBjYWNoZVsxXTtcbiAgICAgICAgICAgICAgICAgIGRpZmYgPSBub2RlSW5kZXg7XG4gICAgICAgICAgICAgICAgfSAvLyB4bWwgOm50aC1jaGlsZCguLi4pXG4gICAgICAgICAgICAgICAgLy8gb3IgOm50aC1sYXN0LWNoaWxkKC4uLikgb3IgOm50aCgtbGFzdCk/LW9mLXR5cGUoLi4uKVxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZGlmZiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2FtZSBsb29wIGFzIGFib3ZlIHRvIHNlZWsgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG4gICAgICAgICAgICAgICAgICB3aGlsZSAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVtkaXJdIHx8IChkaWZmID0gbm9kZUluZGV4ID0gMCkgfHwgc3RhcnQucG9wKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChvZlR5cGUgPyBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUgOiBub2RlLm5vZGVUeXBlID09PSAxKSAmJiArK2RpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBDYWNoZSB0aGUgaW5kZXggb2YgZWFjaCBlbmNvdW50ZXJlZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRlckNhY2hlID0gbm9kZVtleHBhbmRvXSB8fCAobm9kZVtleHBhbmRvXSA9IHt9KTsgLy8gU3VwcG9ydDogSUUgPDkgb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXSB8fCAob3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXSA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUNhY2hlW3R5cGVdID0gW2RpcnJ1bnMsIGRpZmZdO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlID09PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gLy8gSW5jb3Jwb3JhdGUgdGhlIG9mZnNldCwgdGhlbiBjaGVjayBhZ2FpbnN0IGN5Y2xlIHNpemVcblxuXG4gICAgICAgICAgICAgIGRpZmYgLT0gbGFzdDtcbiAgICAgICAgICAgICAgcmV0dXJuIGRpZmYgPT09IGZpcnN0IHx8IGRpZmYgJSBmaXJzdCA9PT0gMCAmJiBkaWZmIC8gZmlyc3QgPj0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBcIlBTRVVET1wiOiBmdW5jdGlvbiAocHNldWRvLCBhcmd1bWVudCkge1xuICAgICAgICAgIC8vIHBzZXVkby1jbGFzcyBuYW1lcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZVxuICAgICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jcHNldWRvLWNsYXNzZXNcbiAgICAgICAgICAvLyBQcmlvcml0aXplIGJ5IGNhc2Ugc2Vuc2l0aXZpdHkgaW4gY2FzZSBjdXN0b20gcHNldWRvcyBhcmUgYWRkZWQgd2l0aCB1cHBlcmNhc2UgbGV0dGVyc1xuICAgICAgICAgIC8vIFJlbWVtYmVyIHRoYXQgc2V0RmlsdGVycyBpbmhlcml0cyBmcm9tIHBzZXVkb3NcbiAgICAgICAgICB2YXIgYXJncyxcbiAgICAgICAgICAgICAgZm4gPSBFeHByLnBzZXVkb3NbcHNldWRvXSB8fCBFeHByLnNldEZpbHRlcnNbcHNldWRvLnRvTG93ZXJDYXNlKCldIHx8IFNpenpsZS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIgKyBwc2V1ZG8pOyAvLyBUaGUgdXNlciBtYXkgdXNlIGNyZWF0ZVBzZXVkbyB0byBpbmRpY2F0ZSB0aGF0XG4gICAgICAgICAgLy8gYXJndW1lbnRzIGFyZSBuZWVkZWQgdG8gY3JlYXRlIHRoZSBmaWx0ZXIgZnVuY3Rpb25cbiAgICAgICAgICAvLyBqdXN0IGFzIFNpenpsZSBkb2VzXG5cbiAgICAgICAgICBpZiAoZm5bZXhwYW5kb10pIHtcbiAgICAgICAgICAgIHJldHVybiBmbihhcmd1bWVudCk7XG4gICAgICAgICAgfSAvLyBCdXQgbWFpbnRhaW4gc3VwcG9ydCBmb3Igb2xkIHNpZ25hdHVyZXNcblxuXG4gICAgICAgICAgaWYgKGZuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBbcHNldWRvLCBwc2V1ZG8sIFwiXCIsIGFyZ3VtZW50XTtcbiAgICAgICAgICAgIHJldHVybiBFeHByLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkocHNldWRvLnRvTG93ZXJDYXNlKCkpID8gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChzZWVkLCBtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHZhciBpZHgsXG4gICAgICAgICAgICAgICAgICBtYXRjaGVkID0gZm4oc2VlZCwgYXJndW1lbnQpLFxuICAgICAgICAgICAgICAgICAgaSA9IG1hdGNoZWQubGVuZ3RoO1xuXG4gICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICBpZHggPSBpbmRleE9mKHNlZWQsIG1hdGNoZWRbaV0pO1xuICAgICAgICAgICAgICAgIHNlZWRbaWR4XSA9ICEobWF0Y2hlc1tpZHhdID0gbWF0Y2hlZFtpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZuKGVsZW0sIDAsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwc2V1ZG9zOiB7XG4gICAgICAgIC8vIFBvdGVudGlhbGx5IGNvbXBsZXggcHNldWRvc1xuICAgICAgICBcIm5vdFwiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgLy8gVHJpbSB0aGUgc2VsZWN0b3IgcGFzc2VkIHRvIGNvbXBpbGVcbiAgICAgICAgICAvLyB0byBhdm9pZCB0cmVhdGluZyBsZWFkaW5nIGFuZCB0cmFpbGluZ1xuICAgICAgICAgIC8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xuICAgICAgICAgIHZhciBpbnB1dCA9IFtdLFxuICAgICAgICAgICAgICByZXN1bHRzID0gW10sXG4gICAgICAgICAgICAgIG1hdGNoZXIgPSBjb21waWxlKHNlbGVjdG9yLnJlcGxhY2UocnRyaW0sIFwiJDFcIikpO1xuICAgICAgICAgIHJldHVybiBtYXRjaGVyW2V4cGFuZG9dID8gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChzZWVkLCBtYXRjaGVzLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgICAgIHZhciBlbGVtLFxuICAgICAgICAgICAgICAgIHVubWF0Y2hlZCA9IG1hdGNoZXIoc2VlZCwgbnVsbCwgeG1sLCBbXSksXG4gICAgICAgICAgICAgICAgaSA9IHNlZWQubGVuZ3RoOyAvLyBNYXRjaCBlbGVtZW50cyB1bm1hdGNoZWQgYnkgYG1hdGNoZXJgXG5cbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0gPSB1bm1hdGNoZWRbaV0pIHtcbiAgICAgICAgICAgICAgICBzZWVkW2ldID0gIShtYXRjaGVzW2ldID0gZWxlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSA6IGZ1bmN0aW9uIChlbGVtLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgICAgIGlucHV0WzBdID0gZWxlbTtcbiAgICAgICAgICAgIG1hdGNoZXIoaW5wdXQsIG51bGwsIHhtbCwgcmVzdWx0cyk7IC8vIERvbid0IGtlZXAgdGhlIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cbiAgICAgICAgICAgIGlucHV0WzBdID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiAhcmVzdWx0cy5wb3AoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgXCJoYXNcIjogbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIFNpenpsZShzZWxlY3RvciwgZWxlbSkubGVuZ3RoID4gMDtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgXCJjb250YWluc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKTtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAoZWxlbS50ZXh0Q29udGVudCB8fCBnZXRUZXh0KGVsZW0pKS5pbmRleE9mKHRleHQpID4gLTE7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIFwiV2hldGhlciBhbiBlbGVtZW50IGlzIHJlcHJlc2VudGVkIGJ5IGEgOmxhbmcoKSBzZWxlY3RvclxuICAgICAgICAvLyBpcyBiYXNlZCBzb2xlbHkgb24gdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZVxuICAgICAgICAvLyBiZWluZyBlcXVhbCB0byB0aGUgaWRlbnRpZmllciBDLFxuICAgICAgICAvLyBvciBiZWdpbm5pbmcgd2l0aCB0aGUgaWRlbnRpZmllciBDIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IFwiLVwiLlxuICAgICAgICAvLyBUaGUgbWF0Y2hpbmcgb2YgQyBhZ2FpbnN0IHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWUgaXMgcGVyZm9ybWVkIGNhc2UtaW5zZW5zaXRpdmVseS5cbiAgICAgICAgLy8gVGhlIGlkZW50aWZpZXIgQyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgdmFsaWQgbGFuZ3VhZ2UgbmFtZS5cIlxuICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2xhbmctcHNldWRvXG4gICAgICAgIFwibGFuZ1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgICAvLyBsYW5nIHZhbHVlIG11c3QgYmUgYSB2YWxpZCBpZGVudGlmaWVyXG4gICAgICAgICAgaWYgKCFyaWRlbnRpZmllci50ZXN0KGxhbmcgfHwgXCJcIikpIHtcbiAgICAgICAgICAgIFNpenpsZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiICsgbGFuZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGFuZyA9IGxhbmcucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIHZhciBlbGVtTGFuZztcblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBpZiAoZWxlbUxhbmcgPSBkb2N1bWVudElzSFRNTCA/IGVsZW0ubGFuZyA6IGVsZW0uZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIikgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgZWxlbUxhbmcgPSBlbGVtTGFuZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtTGFuZyA9PT0gbGFuZyB8fCBlbGVtTGFuZy5pbmRleE9mKGxhbmcgKyBcIi1cIikgPT09IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKChlbGVtID0gZWxlbS5wYXJlbnROb2RlKSAmJiBlbGVtLm5vZGVUeXBlID09PSAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICAvLyBNaXNjZWxsYW5lb3VzXG4gICAgICAgIFwidGFyZ2V0XCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgICAgcmV0dXJuIGhhc2ggJiYgaGFzaC5zbGljZSgxKSA9PT0gZWxlbS5pZDtcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb290XCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0gPT09IGRvY0VsZW07XG4gICAgICAgIH0sXG4gICAgICAgIFwiZm9jdXNcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAoIWRvY3VtZW50Lmhhc0ZvY3VzIHx8IGRvY3VtZW50Lmhhc0ZvY3VzKCkpICYmICEhKGVsZW0udHlwZSB8fCBlbGVtLmhyZWYgfHwgfmVsZW0udGFiSW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBCb29sZWFuIHByb3BlcnRpZXNcbiAgICAgICAgXCJlbmFibGVkXCI6IGNyZWF0ZURpc2FibGVkUHNldWRvKGZhbHNlKSxcbiAgICAgICAgXCJkaXNhYmxlZFwiOiBjcmVhdGVEaXNhYmxlZFBzZXVkbyh0cnVlKSxcbiAgICAgICAgXCJjaGVja2VkXCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgLy8gSW4gQ1NTMywgOmNoZWNrZWQgc2hvdWxkIHJldHVybiBib3RoIGNoZWNrZWQgYW5kIHNlbGVjdGVkIGVsZW1lbnRzXG4gICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcbiAgICAgICAgICB2YXIgbm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgISFlbGVtLmNoZWNrZWQgfHwgbm9kZU5hbWUgPT09IFwib3B0aW9uXCIgJiYgISFlbGVtLnNlbGVjdGVkO1xuICAgICAgICB9LFxuICAgICAgICBcInNlbGVjdGVkXCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgLy8gQWNjZXNzaW5nIHRoaXMgcHJvcGVydHkgbWFrZXMgc2VsZWN0ZWQtYnktZGVmYXVsdFxuICAgICAgICAgIC8vIG9wdGlvbnMgaW4gU2FmYXJpIHdvcmsgcHJvcGVybHlcbiAgICAgICAgICBpZiAoZWxlbS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBlbGVtLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbS5zZWxlY3RlZCA9PT0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gQ29udGVudHNcbiAgICAgICAgXCJlbXB0eVwiOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jZW1wdHktcHNldWRvXG4gICAgICAgICAgLy8gOmVtcHR5IGlzIG5lZ2F0ZWQgYnkgZWxlbWVudCAoMSkgb3IgY29udGVudCBub2RlcyAodGV4dDogMzsgY2RhdGE6IDQ7IGVudGl0eSByZWY6IDUpLFxuICAgICAgICAgIC8vICAgYnV0IG5vdCBieSBvdGhlcnMgKGNvbW1lbnQ6IDg7IHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb246IDc7IGV0Yy4pXG4gICAgICAgICAgLy8gbm9kZVR5cGUgPCA2IHdvcmtzIGJlY2F1c2UgYXR0cmlidXRlcyAoMikgZG8gbm90IGFwcGVhciBhcyBjaGlsZHJlblxuICAgICAgICAgIGZvciAoZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlIDwgNikge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFyZW50XCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgcmV0dXJuICFFeHByLnBzZXVkb3NbXCJlbXB0eVwiXShlbGVtKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gRWxlbWVudC9pbnB1dCB0eXBlc1xuICAgICAgICBcImhlYWRlclwiOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIHJldHVybiByaGVhZGVyLnRlc3QoZWxlbS5ub2RlTmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gcmlucHV0cy50ZXN0KGVsZW0ubm9kZU5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBcImJ1dHRvblwiOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSBcImJ1dHRvblwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCI7XG4gICAgICAgIH0sXG4gICAgICAgIFwidGV4dFwiOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIHZhciBhdHRyO1xuICAgICAgICAgIHJldHVybiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiAmJiBlbGVtLnR5cGUgPT09IFwidGV4dFwiICYmICggLy8gU3VwcG9ydDogSUU8OFxuICAgICAgICAgIC8vIE5ldyBIVE1MNSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuLCBcInNlYXJjaFwiKSBhcHBlYXIgd2l0aCBlbGVtLnR5cGUgPT09IFwidGV4dFwiXG4gICAgICAgICAgKGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikpID09IG51bGwgfHwgYXR0ci50b0xvd2VyQ2FzZSgpID09PSBcInRleHRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFBvc2l0aW9uLWluLWNvbGxlY3Rpb25cbiAgICAgICAgXCJmaXJzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gWzBdO1xuICAgICAgICB9KSxcbiAgICAgICAgXCJsYXN0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIFtsZW5ndGggLSAxXTtcbiAgICAgICAgfSksXG4gICAgICAgIFwiZXFcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiAobWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIFthcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50XTtcbiAgICAgICAgfSksXG4gICAgICAgIFwiZXZlblwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uIChtYXRjaEluZGV4ZXMsIGxlbmd0aCkge1xuICAgICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIG1hdGNoSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtYXRjaEluZGV4ZXM7XG4gICAgICAgIH0pLFxuICAgICAgICBcIm9kZFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uIChtYXRjaEluZGV4ZXMsIGxlbmd0aCkge1xuICAgICAgICAgIHZhciBpID0gMTtcblxuICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIG1hdGNoSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtYXRjaEluZGV4ZXM7XG4gICAgICAgIH0pLFxuICAgICAgICBcImx0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCkge1xuICAgICAgICAgIHZhciBpID0gYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudCA+IGxlbmd0aCA/IGxlbmd0aCA6IGFyZ3VtZW50O1xuXG4gICAgICAgICAgZm9yICg7IC0taSA+PSAwOykge1xuICAgICAgICAgICAgbWF0Y2hJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1hdGNoSW5kZXhlcztcbiAgICAgICAgfSksXG4gICAgICAgIFwiZ3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiAobWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50KSB7XG4gICAgICAgICAgdmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuXG4gICAgICAgICAgZm9yICg7ICsraSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgIG1hdGNoSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtYXRjaEluZGV4ZXM7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfTtcbiAgICBFeHByLnBzZXVkb3NbXCJudGhcIl0gPSBFeHByLnBzZXVkb3NbXCJlcVwiXTsgLy8gQWRkIGJ1dHRvbi9pbnB1dCB0eXBlIHBzZXVkb3NcblxuICAgIGZvciAoaSBpbiB7XG4gICAgICByYWRpbzogdHJ1ZSxcbiAgICAgIGNoZWNrYm94OiB0cnVlLFxuICAgICAgZmlsZTogdHJ1ZSxcbiAgICAgIHBhc3N3b3JkOiB0cnVlLFxuICAgICAgaW1hZ2U6IHRydWVcbiAgICB9KSB7XG4gICAgICBFeHByLnBzZXVkb3NbaV0gPSBjcmVhdGVJbnB1dFBzZXVkbyhpKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgaW4ge1xuICAgICAgc3VibWl0OiB0cnVlLFxuICAgICAgcmVzZXQ6IHRydWVcbiAgICB9KSB7XG4gICAgICBFeHByLnBzZXVkb3NbaV0gPSBjcmVhdGVCdXR0b25Qc2V1ZG8oaSk7XG4gICAgfSAvLyBFYXN5IEFQSSBmb3IgY3JlYXRpbmcgbmV3IHNldEZpbHRlcnNcblxuXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVycygpIHt9XG5cbiAgICBzZXRGaWx0ZXJzLnByb3RvdHlwZSA9IEV4cHIuZmlsdGVycyA9IEV4cHIucHNldWRvcztcbiAgICBFeHByLnNldEZpbHRlcnMgPSBuZXcgc2V0RmlsdGVycygpO1xuXG4gICAgdG9rZW5pemUgPSBTaXp6bGUudG9rZW5pemUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHBhcnNlT25seSkge1xuICAgICAgdmFyIG1hdGNoZWQsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgc29GYXIsXG4gICAgICAgICAgZ3JvdXBzLFxuICAgICAgICAgIHByZUZpbHRlcnMsXG4gICAgICAgICAgY2FjaGVkID0gdG9rZW5DYWNoZVtzZWxlY3RvciArIFwiIFwiXTtcblxuICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICByZXR1cm4gcGFyc2VPbmx5ID8gMCA6IGNhY2hlZC5zbGljZSgwKTtcbiAgICAgIH1cblxuICAgICAgc29GYXIgPSBzZWxlY3RvcjtcbiAgICAgIGdyb3VwcyA9IFtdO1xuICAgICAgcHJlRmlsdGVycyA9IEV4cHIucHJlRmlsdGVyO1xuXG4gICAgICB3aGlsZSAoc29GYXIpIHtcbiAgICAgICAgLy8gQ29tbWEgYW5kIGZpcnN0IHJ1blxuICAgICAgICBpZiAoIW1hdGNoZWQgfHwgKG1hdGNoID0gcmNvbW1hLmV4ZWMoc29GYXIpKSkge1xuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgY29uc3VtZSB0cmFpbGluZyBjb21tYXMgYXMgdmFsaWRcbiAgICAgICAgICAgIHNvRmFyID0gc29GYXIuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKSB8fCBzb0ZhcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBncm91cHMucHVzaCh0b2tlbnMgPSBbXSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXRjaGVkID0gZmFsc2U7IC8vIENvbWJpbmF0b3JzXG5cbiAgICAgICAgaWYgKG1hdGNoID0gcmNvbWJpbmF0b3JzLmV4ZWMoc29GYXIpKSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IG1hdGNoLnNoaWZ0KCk7XG4gICAgICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IG1hdGNoZWQsXG4gICAgICAgICAgICAvLyBDYXN0IGRlc2NlbmRhbnQgY29tYmluYXRvcnMgdG8gc3BhY2VcbiAgICAgICAgICAgIHR5cGU6IG1hdGNoWzBdLnJlcGxhY2UocnRyaW0sIFwiIFwiKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNvRmFyID0gc29GYXIuc2xpY2UobWF0Y2hlZC5sZW5ndGgpO1xuICAgICAgICB9IC8vIEZpbHRlcnNcblxuXG4gICAgICAgIGZvciAodHlwZSBpbiBFeHByLmZpbHRlcikge1xuICAgICAgICAgIGlmICgobWF0Y2ggPSBtYXRjaEV4cHJbdHlwZV0uZXhlYyhzb0ZhcikpICYmICghcHJlRmlsdGVyc1t0eXBlXSB8fCAobWF0Y2ggPSBwcmVGaWx0ZXJzW3R5cGVdKG1hdGNoKSkpKSB7XG4gICAgICAgICAgICBtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgdmFsdWU6IG1hdGNoZWQsXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgIG1hdGNoZXM6IG1hdGNoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNvRmFyID0gc29GYXIuc2xpY2UobWF0Y2hlZC5sZW5ndGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IC8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBpbnZhbGlkIGV4Y2Vzc1xuICAgICAgLy8gaWYgd2UncmUganVzdCBwYXJzaW5nXG4gICAgICAvLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yIG9yIHJldHVybiB0b2tlbnNcblxuXG4gICAgICByZXR1cm4gcGFyc2VPbmx5ID8gc29GYXIubGVuZ3RoIDogc29GYXIgPyBTaXp6bGUuZXJyb3Ioc2VsZWN0b3IpIDogLy8gQ2FjaGUgdGhlIHRva2Vuc1xuICAgICAgdG9rZW5DYWNoZShzZWxlY3RvciwgZ3JvdXBzKS5zbGljZSgwKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdG9TZWxlY3Rvcih0b2tlbnMpIHtcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICBsZW4gPSB0b2tlbnMubGVuZ3RoLFxuICAgICAgICAgIHNlbGVjdG9yID0gXCJcIjtcblxuICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBzZWxlY3RvciArPSB0b2tlbnNbaV0udmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDb21iaW5hdG9yKG1hdGNoZXIsIGNvbWJpbmF0b3IsIGJhc2UpIHtcbiAgICAgIHZhciBkaXIgPSBjb21iaW5hdG9yLmRpcixcbiAgICAgICAgICBza2lwID0gY29tYmluYXRvci5uZXh0LFxuICAgICAgICAgIGtleSA9IHNraXAgfHwgZGlyLFxuICAgICAgICAgIGNoZWNrTm9uRWxlbWVudHMgPSBiYXNlICYmIGtleSA9PT0gXCJwYXJlbnROb2RlXCIsXG4gICAgICAgICAgZG9uZU5hbWUgPSBkb25lKys7XG4gICAgICByZXR1cm4gY29tYmluYXRvci5maXJzdCA/IC8vIENoZWNrIGFnYWluc3QgY2xvc2VzdCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudFxuICAgICAgZnVuY3Rpb24gKGVsZW0sIGNvbnRleHQsIHhtbCkge1xuICAgICAgICB3aGlsZSAoZWxlbSA9IGVsZW1bZGlyXSkge1xuICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVyKGVsZW0sIGNvbnRleHQsIHhtbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSA6IC8vIENoZWNrIGFnYWluc3QgYWxsIGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50c1xuICAgICAgZnVuY3Rpb24gKGVsZW0sIGNvbnRleHQsIHhtbCkge1xuICAgICAgICB2YXIgb2xkQ2FjaGUsXG4gICAgICAgICAgICB1bmlxdWVDYWNoZSxcbiAgICAgICAgICAgIG91dGVyQ2FjaGUsXG4gICAgICAgICAgICBuZXdDYWNoZSA9IFtkaXJydW5zLCBkb25lTmFtZV07IC8vIFdlIGNhbid0IHNldCBhcmJpdHJhcnkgZGF0YSBvbiBYTUwgbm9kZXMsIHNvIHRoZXkgZG9uJ3QgYmVuZWZpdCBmcm9tIGNvbWJpbmF0b3IgY2FjaGluZ1xuXG4gICAgICAgIGlmICh4bWwpIHtcbiAgICAgICAgICB3aGlsZSAoZWxlbSA9IGVsZW1bZGlyXSkge1xuICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cykge1xuICAgICAgICAgICAgICBpZiAobWF0Y2hlcihlbGVtLCBjb250ZXh0LCB4bWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hpbGUgKGVsZW0gPSBlbGVtW2Rpcl0pIHtcbiAgICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgb3V0ZXJDYWNoZSA9IGVsZW1bZXhwYW5kb10gfHwgKGVsZW1bZXhwYW5kb10gPSB7fSk7IC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcbiAgICAgICAgICAgICAgLy8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cbiAgICAgICAgICAgICAgdW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlW2VsZW0udW5pcXVlSURdIHx8IChvdXRlckNhY2hlW2VsZW0udW5pcXVlSURdID0ge30pO1xuXG4gICAgICAgICAgICAgIGlmIChza2lwICYmIHNraXAgPT09IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtW2Rpcl0gfHwgZWxlbTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgob2xkQ2FjaGUgPSB1bmlxdWVDYWNoZVtrZXldKSAmJiBvbGRDYWNoZVswXSA9PT0gZGlycnVucyAmJiBvbGRDYWNoZVsxXSA9PT0gZG9uZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gdG8gbmV3Q2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDYWNoZVsyXSA9IG9sZENhY2hlWzJdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldXNlIG5ld2NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcbiAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZVtrZXldID0gbmV3Q2FjaGU7IC8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuXG4gICAgICAgICAgICAgICAgaWYgKG5ld0NhY2hlWzJdID0gbWF0Y2hlcihlbGVtLCBjb250ZXh0LCB4bWwpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnRNYXRjaGVyKG1hdGNoZXJzKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcnMubGVuZ3RoID4gMSA/IGZ1bmN0aW9uIChlbGVtLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgdmFyIGkgPSBtYXRjaGVycy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGlmICghbWF0Y2hlcnNbaV0oZWxlbSwgY29udGV4dCwgeG1sKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSA6IG1hdGNoZXJzWzBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG11bHRpcGxlQ29udGV4dHMoc2VsZWN0b3IsIGNvbnRleHRzLCByZXN1bHRzKSB7XG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgbGVuID0gY29udGV4dHMubGVuZ3RoO1xuXG4gICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIFNpenpsZShzZWxlY3RvciwgY29udGV4dHNbaV0sIHJlc3VsdHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25kZW5zZSh1bm1hdGNoZWQsIG1hcCwgZmlsdGVyLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgIHZhciBlbGVtLFxuICAgICAgICAgIG5ld1VubWF0Y2hlZCA9IFtdLFxuICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgIGxlbiA9IHVubWF0Y2hlZC5sZW5ndGgsXG4gICAgICAgICAgbWFwcGVkID0gbWFwICE9IG51bGw7XG5cbiAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW0gPSB1bm1hdGNoZWRbaV0pIHtcbiAgICAgICAgICBpZiAoIWZpbHRlciB8fCBmaWx0ZXIoZWxlbSwgY29udGV4dCwgeG1sKSkge1xuICAgICAgICAgICAgbmV3VW5tYXRjaGVkLnB1c2goZWxlbSk7XG5cbiAgICAgICAgICAgIGlmIChtYXBwZWQpIHtcbiAgICAgICAgICAgICAgbWFwLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdVbm1hdGNoZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TWF0Y2hlcihwcmVGaWx0ZXIsIHNlbGVjdG9yLCBtYXRjaGVyLCBwb3N0RmlsdGVyLCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IpIHtcbiAgICAgIGlmIChwb3N0RmlsdGVyICYmICFwb3N0RmlsdGVyW2V4cGFuZG9dKSB7XG4gICAgICAgIHBvc3RGaWx0ZXIgPSBzZXRNYXRjaGVyKHBvc3RGaWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocG9zdEZpbmRlciAmJiAhcG9zdEZpbmRlcltleHBhbmRvXSkge1xuICAgICAgICBwb3N0RmluZGVyID0gc2V0TWF0Y2hlcihwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChzZWVkLCByZXN1bHRzLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgdmFyIHRlbXAsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgZWxlbSxcbiAgICAgICAgICAgIHByZU1hcCA9IFtdLFxuICAgICAgICAgICAgcG9zdE1hcCA9IFtdLFxuICAgICAgICAgICAgcHJlZXhpc3RpbmcgPSByZXN1bHRzLmxlbmd0aCxcbiAgICAgICAgICAgIC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG4gICAgICAgIGVsZW1zID0gc2VlZCB8fCBtdWx0aXBsZUNvbnRleHRzKHNlbGVjdG9yIHx8IFwiKlwiLCBjb250ZXh0Lm5vZGVUeXBlID8gW2NvbnRleHRdIDogY29udGV4dCwgW10pLFxuICAgICAgICAgICAgLy8gUHJlZmlsdGVyIHRvIGdldCBtYXRjaGVyIGlucHV0LCBwcmVzZXJ2aW5nIGEgbWFwIGZvciBzZWVkLXJlc3VsdHMgc3luY2hyb25pemF0aW9uXG4gICAgICAgIG1hdGNoZXJJbiA9IHByZUZpbHRlciAmJiAoc2VlZCB8fCAhc2VsZWN0b3IpID8gY29uZGVuc2UoZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwpIDogZWxlbXMsXG4gICAgICAgICAgICBtYXRjaGVyT3V0ID0gbWF0Y2hlciA/IC8vIElmIHdlIGhhdmUgYSBwb3N0RmluZGVyLCBvciBmaWx0ZXJlZCBzZWVkLCBvciBub24tc2VlZCBwb3N0RmlsdGVyIG9yIHByZWV4aXN0aW5nIHJlc3VsdHMsXG4gICAgICAgIHBvc3RGaW5kZXIgfHwgKHNlZWQgPyBwcmVGaWx0ZXIgOiBwcmVleGlzdGluZyB8fCBwb3N0RmlsdGVyKSA/IC8vIC4uLmludGVybWVkaWF0ZSBwcm9jZXNzaW5nIGlzIG5lY2Vzc2FyeVxuICAgICAgICBbXSA6IC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxuICAgICAgICByZXN1bHRzIDogbWF0Y2hlckluOyAvLyBGaW5kIHByaW1hcnkgbWF0Y2hlc1xuXG4gICAgICAgIGlmIChtYXRjaGVyKSB7XG4gICAgICAgICAgbWF0Y2hlcihtYXRjaGVySW4sIG1hdGNoZXJPdXQsIGNvbnRleHQsIHhtbCk7XG4gICAgICAgIH0gLy8gQXBwbHkgcG9zdEZpbHRlclxuXG5cbiAgICAgICAgaWYgKHBvc3RGaWx0ZXIpIHtcbiAgICAgICAgICB0ZW1wID0gY29uZGVuc2UobWF0Y2hlck91dCwgcG9zdE1hcCk7XG4gICAgICAgICAgcG9zdEZpbHRlcih0ZW1wLCBbXSwgY29udGV4dCwgeG1sKTsgLy8gVW4tbWF0Y2ggZmFpbGluZyBlbGVtZW50cyBieSBtb3ZpbmcgdGhlbSBiYWNrIHRvIG1hdGNoZXJJblxuXG4gICAgICAgICAgaSA9IHRlbXAubGVuZ3RoO1xuXG4gICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgaWYgKGVsZW0gPSB0ZW1wW2ldKSB7XG4gICAgICAgICAgICAgIG1hdGNoZXJPdXRbcG9zdE1hcFtpXV0gPSAhKG1hdGNoZXJJbltwb3N0TWFwW2ldXSA9IGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWVkKSB7XG4gICAgICAgICAgaWYgKHBvc3RGaW5kZXIgfHwgcHJlRmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAocG9zdEZpbmRlcikge1xuICAgICAgICAgICAgICAvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcbiAgICAgICAgICAgICAgdGVtcCA9IFtdO1xuICAgICAgICAgICAgICBpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtID0gbWF0Y2hlck91dFtpXSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBtYXRjaGVySW4gc2luY2UgZWxlbSBpcyBub3QgeWV0IGEgZmluYWwgbWF0Y2hcbiAgICAgICAgICAgICAgICAgIHRlbXAucHVzaChtYXRjaGVySW5baV0gPSBlbGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBwb3N0RmluZGVyKG51bGwsIG1hdGNoZXJPdXQgPSBbXSwgdGVtcCwgeG1sKTtcbiAgICAgICAgICAgIH0gLy8gTW92ZSBtYXRjaGVkIGVsZW1lbnRzIGZyb20gc2VlZCB0byByZXN1bHRzIHRvIGtlZXAgdGhlbSBzeW5jaHJvbml6ZWRcblxuXG4gICAgICAgICAgICBpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgaWYgKChlbGVtID0gbWF0Y2hlck91dFtpXSkgJiYgKHRlbXAgPSBwb3N0RmluZGVyID8gaW5kZXhPZihzZWVkLCBlbGVtKSA6IHByZU1hcFtpXSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHNlZWRbdGVtcF0gPSAhKHJlc3VsdHNbdGVtcF0gPSBlbGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gQWRkIGVsZW1lbnRzIHRvIHJlc3VsdHMsIHRocm91Z2ggcG9zdEZpbmRlciBpZiBkZWZpbmVkXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaGVyT3V0ID0gY29uZGVuc2UobWF0Y2hlck91dCA9PT0gcmVzdWx0cyA/IG1hdGNoZXJPdXQuc3BsaWNlKHByZWV4aXN0aW5nLCBtYXRjaGVyT3V0Lmxlbmd0aCkgOiBtYXRjaGVyT3V0KTtcblxuICAgICAgICAgIGlmIChwb3N0RmluZGVyKSB7XG4gICAgICAgICAgICBwb3N0RmluZGVyKG51bGwsIHJlc3VsdHMsIG1hdGNoZXJPdXQsIHhtbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHB1c2guYXBwbHkocmVzdWx0cywgbWF0Y2hlck91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaGVyRnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgICAgIHZhciBjaGVja0NvbnRleHQsXG4gICAgICAgICAgbWF0Y2hlcixcbiAgICAgICAgICBqLFxuICAgICAgICAgIGxlbiA9IHRva2Vucy5sZW5ndGgsXG4gICAgICAgICAgbGVhZGluZ1JlbGF0aXZlID0gRXhwci5yZWxhdGl2ZVt0b2tlbnNbMF0udHlwZV0sXG4gICAgICAgICAgaW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBFeHByLnJlbGF0aXZlW1wiIFwiXSxcbiAgICAgICAgICBpID0gbGVhZGluZ1JlbGF0aXZlID8gMSA6IDAsXG4gICAgICAgICAgLy8gVGhlIGZvdW5kYXRpb25hbCBtYXRjaGVyIGVuc3VyZXMgdGhhdCBlbGVtZW50cyBhcmUgcmVhY2hhYmxlIGZyb20gdG9wLWxldmVsIGNvbnRleHQocylcbiAgICAgIG1hdGNoQ29udGV4dCA9IGFkZENvbWJpbmF0b3IoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gPT09IGNoZWNrQ29udGV4dDtcbiAgICAgIH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUpLFxuICAgICAgICAgIG1hdGNoQW55Q29udGV4dCA9IGFkZENvbWJpbmF0b3IoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGluZGV4T2YoY2hlY2tDb250ZXh0LCBlbGVtKSA+IC0xO1xuICAgICAgfSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSksXG4gICAgICAgICAgbWF0Y2hlcnMgPSBbZnVuY3Rpb24gKGVsZW0sIGNvbnRleHQsIHhtbCkge1xuICAgICAgICB2YXIgcmV0ID0gIWxlYWRpbmdSZWxhdGl2ZSAmJiAoeG1sIHx8IGNvbnRleHQgIT09IG91dGVybW9zdENvbnRleHQpIHx8ICgoY2hlY2tDb250ZXh0ID0gY29udGV4dCkubm9kZVR5cGUgPyBtYXRjaENvbnRleHQoZWxlbSwgY29udGV4dCwgeG1sKSA6IG1hdGNoQW55Q29udGV4dChlbGVtLCBjb250ZXh0LCB4bWwpKTsgLy8gQXZvaWQgaGFuZ2luZyBvbnRvIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cbiAgICAgICAgY2hlY2tDb250ZXh0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1dO1xuXG4gICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChtYXRjaGVyID0gRXhwci5yZWxhdGl2ZVt0b2tlbnNbaV0udHlwZV0pIHtcbiAgICAgICAgICBtYXRjaGVycyA9IFthZGRDb21iaW5hdG9yKGVsZW1lbnRNYXRjaGVyKG1hdGNoZXJzKSwgbWF0Y2hlcildO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoZXIgPSBFeHByLmZpbHRlclt0b2tlbnNbaV0udHlwZV0uYXBwbHkobnVsbCwgdG9rZW5zW2ldLm1hdGNoZXMpOyAvLyBSZXR1cm4gc3BlY2lhbCB1cG9uIHNlZWluZyBhIHBvc2l0aW9uYWwgbWF0Y2hlclxuXG4gICAgICAgICAgaWYgKG1hdGNoZXJbZXhwYW5kb10pIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuICAgICAgICAgICAgaiA9ICsraTtcblxuICAgICAgICAgICAgZm9yICg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgICBpZiAoRXhwci5yZWxhdGl2ZVt0b2tlbnNbal0udHlwZV0pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2V0TWF0Y2hlcihpID4gMSAmJiBlbGVtZW50TWF0Y2hlcihtYXRjaGVycyksIGkgPiAxICYmIHRvU2VsZWN0b3IoIC8vIElmIHRoZSBwcmVjZWRpbmcgdG9rZW4gd2FzIGEgZGVzY2VuZGFudCBjb21iaW5hdG9yLCBpbnNlcnQgYW4gaW1wbGljaXQgYW55LWVsZW1lbnQgYCpgXG4gICAgICAgICAgICB0b2tlbnMuc2xpY2UoMCwgaSAtIDEpLmNvbmNhdCh7XG4gICAgICAgICAgICAgIHZhbHVlOiB0b2tlbnNbaSAtIDJdLnR5cGUgPT09IFwiIFwiID8gXCIqXCIgOiBcIlwiXG4gICAgICAgICAgICB9KSkucmVwbGFjZShydHJpbSwgXCIkMVwiKSwgbWF0Y2hlciwgaSA8IGogJiYgbWF0Y2hlckZyb21Ub2tlbnModG9rZW5zLnNsaWNlKGksIGopKSwgaiA8IGxlbiAmJiBtYXRjaGVyRnJvbVRva2Vucyh0b2tlbnMgPSB0b2tlbnMuc2xpY2UoaikpLCBqIDwgbGVuICYmIHRvU2VsZWN0b3IodG9rZW5zKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0Y2hlcnMucHVzaChtYXRjaGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyhlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzKSB7XG4gICAgICB2YXIgYnlTZXQgPSBzZXRNYXRjaGVycy5sZW5ndGggPiAwLFxuICAgICAgICAgIGJ5RWxlbWVudCA9IGVsZW1lbnRNYXRjaGVycy5sZW5ndGggPiAwLFxuICAgICAgICAgIHN1cGVyTWF0Y2hlciA9IGZ1bmN0aW9uIChzZWVkLCBjb250ZXh0LCB4bWwsIHJlc3VsdHMsIG91dGVybW9zdCkge1xuICAgICAgICB2YXIgZWxlbSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBtYXRjaGVyLFxuICAgICAgICAgICAgbWF0Y2hlZENvdW50ID0gMCxcbiAgICAgICAgICAgIGkgPSBcIjBcIixcbiAgICAgICAgICAgIHVubWF0Y2hlZCA9IHNlZWQgJiYgW10sXG4gICAgICAgICAgICBzZXRNYXRjaGVkID0gW10sXG4gICAgICAgICAgICBjb250ZXh0QmFja3VwID0gb3V0ZXJtb3N0Q29udGV4dCxcbiAgICAgICAgICAgIC8vIFdlIG11c3QgYWx3YXlzIGhhdmUgZWl0aGVyIHNlZWQgZWxlbWVudHMgb3Igb3V0ZXJtb3N0IGNvbnRleHRcbiAgICAgICAgZWxlbXMgPSBzZWVkIHx8IGJ5RWxlbWVudCAmJiBFeHByLmZpbmRbXCJUQUdcIl0oXCIqXCIsIG91dGVybW9zdCksXG4gICAgICAgICAgICAvLyBVc2UgaW50ZWdlciBkaXJydW5zIGlmZiB0aGlzIGlzIHRoZSBvdXRlcm1vc3QgbWF0Y2hlclxuICAgICAgICBkaXJydW5zVW5pcXVlID0gZGlycnVucyArPSBjb250ZXh0QmFja3VwID09IG51bGwgPyAxIDogTWF0aC5yYW5kb20oKSB8fCAwLjEsXG4gICAgICAgICAgICBsZW4gPSBlbGVtcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG91dGVybW9zdCkge1xuICAgICAgICAgIG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0ID09PSBkb2N1bWVudCB8fCBjb250ZXh0IHx8IG91dGVybW9zdDtcbiAgICAgICAgfSAvLyBBZGQgZWxlbWVudHMgcGFzc2luZyBlbGVtZW50TWF0Y2hlcnMgZGlyZWN0bHkgdG8gcmVzdWx0c1xuICAgICAgICAvLyBTdXBwb3J0OiBJRTw5LCBTYWZhcmlcbiAgICAgICAgLy8gVG9sZXJhdGUgTm9kZUxpc3QgcHJvcGVydGllcyAoSUU6IFwibGVuZ3RoXCI7IFNhZmFyaTogPG51bWJlcj4pIG1hdGNoaW5nIGVsZW1lbnRzIGJ5IGlkXG5cblxuICAgICAgICBmb3IgKDsgaSAhPT0gbGVuICYmIChlbGVtID0gZWxlbXNbaV0pICE9IG51bGw7IGkrKykge1xuICAgICAgICAgIGlmIChieUVsZW1lbnQgJiYgZWxlbSkge1xuICAgICAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgICAgIGlmICghY29udGV4dCAmJiBlbGVtLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgIHNldERvY3VtZW50KGVsZW0pO1xuICAgICAgICAgICAgICB4bWwgPSAhZG9jdW1lbnRJc0hUTUw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdoaWxlIChtYXRjaGVyID0gZWxlbWVudE1hdGNoZXJzW2orK10pIHtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoZXIoZWxlbSwgY29udGV4dCB8fCBkb2N1bWVudCwgeG1sKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChlbGVtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3V0ZXJtb3N0KSB7XG4gICAgICAgICAgICAgIGRpcnJ1bnMgPSBkaXJydW5zVW5pcXVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gVHJhY2sgdW5tYXRjaGVkIGVsZW1lbnRzIGZvciBzZXQgZmlsdGVyc1xuXG5cbiAgICAgICAgICBpZiAoYnlTZXQpIHtcbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCBoYXZlIGdvbmUgdGhyb3VnaCBhbGwgcG9zc2libGUgbWF0Y2hlcnNcbiAgICAgICAgICAgIGlmIChlbGVtID0gIW1hdGNoZXIgJiYgZWxlbSkge1xuICAgICAgICAgICAgICBtYXRjaGVkQ291bnQtLTtcbiAgICAgICAgICAgIH0gLy8gTGVuZ3RoZW4gdGhlIGFycmF5IGZvciBldmVyeSBlbGVtZW50LCBtYXRjaGVkIG9yIG5vdFxuXG5cbiAgICAgICAgICAgIGlmIChzZWVkKSB7XG4gICAgICAgICAgICAgIHVubWF0Y2hlZC5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBgaWAgaXMgbm93IHRoZSBjb3VudCBvZiBlbGVtZW50cyB2aXNpdGVkIGFib3ZlLCBhbmQgYWRkaW5nIGl0IHRvIGBtYXRjaGVkQ291bnRgXG4gICAgICAgIC8vIG1ha2VzIHRoZSBsYXR0ZXIgbm9ubmVnYXRpdmUuXG5cblxuICAgICAgICBtYXRjaGVkQ291bnQgKz0gaTsgLy8gQXBwbHkgc2V0IGZpbHRlcnMgdG8gdW5tYXRjaGVkIGVsZW1lbnRzXG4gICAgICAgIC8vIE5PVEU6IFRoaXMgY2FuIGJlIHNraXBwZWQgaWYgdGhlcmUgYXJlIG5vIHVubWF0Y2hlZCBlbGVtZW50cyAoaS5lLiwgYG1hdGNoZWRDb3VudGBcbiAgICAgICAgLy8gZXF1YWxzIGBpYCksIHVubGVzcyB3ZSBkaWRuJ3QgdmlzaXQgX2FueV8gZWxlbWVudHMgaW4gdGhlIGFib3ZlIGxvb3AgYmVjYXVzZSB3ZSBoYXZlXG4gICAgICAgIC8vIG5vIGVsZW1lbnQgbWF0Y2hlcnMgYW5kIG5vIHNlZWQuXG4gICAgICAgIC8vIEluY3JlbWVudGluZyBhbiBpbml0aWFsbHktc3RyaW5nIFwiMFwiIGBpYCBhbGxvd3MgYGlgIHRvIHJlbWFpbiBhIHN0cmluZyBvbmx5IGluIHRoYXRcbiAgICAgICAgLy8gY2FzZSwgd2hpY2ggd2lsbCByZXN1bHQgaW4gYSBcIjAwXCIgYG1hdGNoZWRDb3VudGAgdGhhdCBkaWZmZXJzIGZyb20gYGlgIGJ1dCBpcyBhbHNvXG4gICAgICAgIC8vIG51bWVyaWNhbGx5IHplcm8uXG5cbiAgICAgICAgaWYgKGJ5U2V0ICYmIGkgIT09IG1hdGNoZWRDb3VudCkge1xuICAgICAgICAgIGogPSAwO1xuXG4gICAgICAgICAgd2hpbGUgKG1hdGNoZXIgPSBzZXRNYXRjaGVyc1tqKytdKSB7XG4gICAgICAgICAgICBtYXRjaGVyKHVubWF0Y2hlZCwgc2V0TWF0Y2hlZCwgY29udGV4dCwgeG1sKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VlZCkge1xuICAgICAgICAgICAgLy8gUmVpbnRlZ3JhdGUgZWxlbWVudCBtYXRjaGVzIHRvIGVsaW1pbmF0ZSB0aGUgbmVlZCBmb3Igc29ydGluZ1xuICAgICAgICAgICAgaWYgKG1hdGNoZWRDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIGlmICghKHVubWF0Y2hlZFtpXSB8fCBzZXRNYXRjaGVkW2ldKSkge1xuICAgICAgICAgICAgICAgICAgc2V0TWF0Y2hlZFtpXSA9IHBvcC5jYWxsKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBEaXNjYXJkIGluZGV4IHBsYWNlaG9sZGVyIHZhbHVlcyB0byBnZXQgb25seSBhY3R1YWwgbWF0Y2hlc1xuXG5cbiAgICAgICAgICAgIHNldE1hdGNoZWQgPSBjb25kZW5zZShzZXRNYXRjaGVkKTtcbiAgICAgICAgICB9IC8vIEFkZCBtYXRjaGVzIHRvIHJlc3VsdHNcblxuXG4gICAgICAgICAgcHVzaC5hcHBseShyZXN1bHRzLCBzZXRNYXRjaGVkKTsgLy8gU2VlZGxlc3Mgc2V0IG1hdGNoZXMgc3VjY2VlZGluZyBtdWx0aXBsZSBzdWNjZXNzZnVsIG1hdGNoZXJzIHN0aXB1bGF0ZSBzb3J0aW5nXG5cbiAgICAgICAgICBpZiAob3V0ZXJtb3N0ICYmICFzZWVkICYmIHNldE1hdGNoZWQubGVuZ3RoID4gMCAmJiBtYXRjaGVkQ291bnQgKyBzZXRNYXRjaGVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBTaXp6bGUudW5pcXVlU29ydChyZXN1bHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gT3ZlcnJpZGUgbWFuaXB1bGF0aW9uIG9mIGdsb2JhbHMgYnkgbmVzdGVkIG1hdGNoZXJzXG5cblxuICAgICAgICBpZiAob3V0ZXJtb3N0KSB7XG4gICAgICAgICAgZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG4gICAgICAgICAgb3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHRCYWNrdXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5tYXRjaGVkO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGJ5U2V0ID8gbWFya0Z1bmN0aW9uKHN1cGVyTWF0Y2hlcikgOiBzdXBlck1hdGNoZXI7XG4gICAgfVxuXG4gICAgY29tcGlsZSA9IFNpenpsZS5jb21waWxlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBtYXRjaFxuICAgIC8qIEludGVybmFsIFVzZSBPbmx5ICovXG4gICAgKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICBzZXRNYXRjaGVycyA9IFtdLFxuICAgICAgICAgIGVsZW1lbnRNYXRjaGVycyA9IFtdLFxuICAgICAgICAgIGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGVbc2VsZWN0b3IgKyBcIiBcIl07XG5cbiAgICAgIGlmICghY2FjaGVkKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIGEgZnVuY3Rpb24gb2YgcmVjdXJzaXZlIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNoZWNrIGVhY2ggZWxlbWVudFxuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgbWF0Y2ggPSB0b2tlbml6ZShzZWxlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpID0gbWF0Y2gubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICBjYWNoZWQgPSBtYXRjaGVyRnJvbVRva2VucyhtYXRjaFtpXSk7XG5cbiAgICAgICAgICBpZiAoY2FjaGVkW2V4cGFuZG9dKSB7XG4gICAgICAgICAgICBzZXRNYXRjaGVycy5wdXNoKGNhY2hlZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnRNYXRjaGVycy5wdXNoKGNhY2hlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIENhY2hlIHRoZSBjb21waWxlZCBmdW5jdGlvblxuXG5cbiAgICAgICAgY2FjaGVkID0gY29tcGlsZXJDYWNoZShzZWxlY3RvciwgbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMpKTsgLy8gU2F2ZSBzZWxlY3RvciBhbmQgdG9rZW5pemF0aW9uXG5cbiAgICAgICAgY2FjaGVkLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGxvdy1sZXZlbCBzZWxlY3Rpb24gZnVuY3Rpb24gdGhhdCB3b3JrcyB3aXRoIFNpenpsZSdzIGNvbXBpbGVkXG4gICAgICogIHNlbGVjdG9yIGZ1bmN0aW9uc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzZWxlY3RvciBBIHNlbGVjdG9yIG9yIGEgcHJlLWNvbXBpbGVkXG4gICAgICogIHNlbGVjdG9yIGZ1bmN0aW9uIGJ1aWx0IHdpdGggU2l6emxlLmNvbXBpbGVcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0c11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbc2VlZF0gQSBzZXQgb2YgZWxlbWVudHMgdG8gbWF0Y2ggYWdhaW5zdFxuICAgICAqL1xuXG5cbiAgICBzZWxlY3QgPSBTaXp6bGUuc2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBmaW5kLFxuICAgICAgICAgIGNvbXBpbGVkID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgc2VsZWN0b3IsXG4gICAgICAgICAgbWF0Y2ggPSAhc2VlZCAmJiB0b2tlbml6ZShzZWxlY3RvciA9IGNvbXBpbGVkLnNlbGVjdG9yIHx8IHNlbGVjdG9yKTtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdOyAvLyBUcnkgdG8gbWluaW1pemUgb3BlcmF0aW9ucyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBzZWxlY3RvciBpbiB0aGUgbGlzdCBhbmQgbm8gc2VlZFxuICAgICAgLy8gKHRoZSBsYXR0ZXIgb2Ygd2hpY2ggZ3VhcmFudGVlcyB1cyBjb250ZXh0KVxuXG4gICAgICBpZiAobWF0Y2gubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIFJlZHVjZSBjb250ZXh0IGlmIHRoZSBsZWFkaW5nIGNvbXBvdW5kIHNlbGVjdG9yIGlzIGFuIElEXG4gICAgICAgIHRva2VucyA9IG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoMCk7XG5cbiAgICAgICAgaWYgKHRva2Vucy5sZW5ndGggPiAyICYmICh0b2tlbiA9IHRva2Vuc1swXSkudHlwZSA9PT0gXCJJRFwiICYmIGNvbnRleHQubm9kZVR5cGUgPT09IDkgJiYgZG9jdW1lbnRJc0hUTUwgJiYgRXhwci5yZWxhdGl2ZVt0b2tlbnNbMV0udHlwZV0pIHtcbiAgICAgICAgICBjb250ZXh0ID0gKEV4cHIuZmluZFtcIklEXCJdKHRva2VuLm1hdGNoZXNbMF0ucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSksIGNvbnRleHQpIHx8IFtdKVswXTtcblxuICAgICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7IC8vIFByZWNvbXBpbGVkIG1hdGNoZXJzIHdpbGwgc3RpbGwgdmVyaWZ5IGFuY2VzdHJ5LCBzbyBzdGVwIHVwIGEgbGV2ZWxcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBpbGVkKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gY29udGV4dC5wYXJlbnROb2RlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3Iuc2xpY2UodG9rZW5zLnNoaWZ0KCkudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgfSAvLyBGZXRjaCBhIHNlZWQgc2V0IGZvciByaWdodC10by1sZWZ0IG1hdGNoaW5nXG5cblxuICAgICAgICBpID0gbWF0Y2hFeHByW1wibmVlZHNDb250ZXh0XCJdLnRlc3Qoc2VsZWN0b3IpID8gMCA6IHRva2Vucy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldOyAvLyBBYm9ydCBpZiB3ZSBoaXQgYSBjb21iaW5hdG9yXG5cbiAgICAgICAgICBpZiAoRXhwci5yZWxhdGl2ZVt0eXBlID0gdG9rZW4udHlwZV0pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmaW5kID0gRXhwci5maW5kW3R5cGVdKSB7XG4gICAgICAgICAgICAvLyBTZWFyY2gsIGV4cGFuZGluZyBjb250ZXh0IGZvciBsZWFkaW5nIHNpYmxpbmcgY29tYmluYXRvcnNcbiAgICAgICAgICAgIGlmIChzZWVkID0gZmluZCh0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpLCByc2libGluZy50ZXN0KHRva2Vuc1swXS50eXBlKSAmJiB0ZXN0Q29udGV4dChjb250ZXh0LnBhcmVudE5vZGUpIHx8IGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgIC8vIElmIHNlZWQgaXMgZW1wdHkgb3Igbm8gdG9rZW5zIHJlbWFpbiwgd2UgY2FuIHJldHVybiBlYXJseVxuICAgICAgICAgICAgICB0b2tlbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlZWQubGVuZ3RoICYmIHRvU2VsZWN0b3IodG9rZW5zKTtcblxuICAgICAgICAgICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcHVzaC5hcHBseShyZXN1bHRzLCBzZWVkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcbiAgICAgIC8vIFByb3ZpZGUgYG1hdGNoYCB0byBhdm9pZCByZXRva2VuaXphdGlvbiBpZiB3ZSBtb2RpZmllZCB0aGUgc2VsZWN0b3IgYWJvdmVcblxuXG4gICAgICAoY29tcGlsZWQgfHwgY29tcGlsZShzZWxlY3RvciwgbWF0Y2gpKShzZWVkLCBjb250ZXh0LCAhZG9jdW1lbnRJc0hUTUwsIHJlc3VsdHMsICFjb250ZXh0IHx8IHJzaWJsaW5nLnRlc3Qoc2VsZWN0b3IpICYmIHRlc3RDb250ZXh0KGNvbnRleHQucGFyZW50Tm9kZSkgfHwgY29udGV4dCk7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9OyAvLyBPbmUtdGltZSBhc3NpZ25tZW50c1xuICAgIC8vIFNvcnQgc3RhYmlsaXR5XG5cblxuICAgIHN1cHBvcnQuc29ydFN0YWJsZSA9IGV4cGFuZG8uc3BsaXQoXCJcIikuc29ydChzb3J0T3JkZXIpLmpvaW4oXCJcIikgPT09IGV4cGFuZG87IC8vIFN1cHBvcnQ6IENocm9tZSAxNC0zNStcbiAgICAvLyBBbHdheXMgYXNzdW1lIGR1cGxpY2F0ZXMgaWYgdGhleSBhcmVuJ3QgcGFzc2VkIHRvIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG5cbiAgICBzdXBwb3J0LmRldGVjdER1cGxpY2F0ZXMgPSAhIWhhc0R1cGxpY2F0ZTsgLy8gSW5pdGlhbGl6ZSBhZ2FpbnN0IHRoZSBkZWZhdWx0IGRvY3VtZW50XG5cbiAgICBzZXREb2N1bWVudCgpOyAvLyBTdXBwb3J0OiBXZWJraXQ8NTM3LjMyIC0gU2FmYXJpIDYuMC4zL0Nocm9tZSAyNSAoZml4ZWQgaW4gQ2hyb21lIDI3KVxuICAgIC8vIERldGFjaGVkIG5vZGVzIGNvbmZvdW5kaW5nbHkgZm9sbG93ICplYWNoIG90aGVyKlxuXG4gICAgc3VwcG9ydC5zb3J0RGV0YWNoZWQgPSBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAvLyBTaG91bGQgcmV0dXJuIDEsIGJ1dCByZXR1cm5zIDQgKGZvbGxvd2luZylcbiAgICAgIHJldHVybiBlbC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpICYgMTtcbiAgICB9KTsgLy8gU3VwcG9ydDogSUU8OFxuICAgIC8vIFByZXZlbnQgYXR0cmlidXRlL3Byb3BlcnR5IFwiaW50ZXJwb2xhdGlvblwiXG4gICAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNjQyOSUyOFZTLjg1JTI5LmFzcHhcblxuICAgIGlmICghYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScjJz48L2E+XCI7XG4gICAgICByZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpID09PSBcIiNcIjtcbiAgICB9KSkge1xuICAgICAgYWRkSGFuZGxlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLCBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgaXNYTUwpIHtcbiAgICAgICAgaWYgKCFpc1hNTCkge1xuICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZShuYW1lLCBuYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwidHlwZVwiID8gMSA6IDIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIFN1cHBvcnQ6IElFPDlcbiAgICAvLyBVc2UgZGVmYXVsdFZhbHVlIGluIHBsYWNlIG9mIGdldEF0dHJpYnV0ZShcInZhbHVlXCIpXG5cblxuICAgIGlmICghc3VwcG9ydC5hdHRyaWJ1dGVzIHx8ICFhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5pbm5lckhUTUwgPSBcIjxpbnB1dC8+XCI7XG4gICAgICBlbC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpO1xuICAgICAgcmV0dXJuIGVsLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgPT09IFwiXCI7XG4gICAgfSkpIHtcbiAgICAgIGFkZEhhbmRsZShcInZhbHVlXCIsIGZ1bmN0aW9uIChlbGVtLCBuYW1lLCBpc1hNTCkge1xuICAgICAgICBpZiAoIWlzWE1MICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0uZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIFN1cHBvcnQ6IElFPDlcbiAgICAvLyBVc2UgZ2V0QXR0cmlidXRlTm9kZSB0byBmZXRjaCBib29sZWFucyB3aGVuIGdldEF0dHJpYnV0ZSBsaWVzXG5cblxuICAgIGlmICghYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpID09IG51bGw7XG4gICAgfSkpIHtcbiAgICAgIGFkZEhhbmRsZShib29sZWFucywgZnVuY3Rpb24gKGVsZW0sIG5hbWUsIGlzWE1MKSB7XG4gICAgICAgIHZhciB2YWw7XG5cbiAgICAgICAgaWYgKCFpc1hNTCkge1xuICAgICAgICAgIHJldHVybiBlbGVtW25hbWVdID09PSB0cnVlID8gbmFtZS50b0xvd2VyQ2FzZSgpIDogKHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShuYW1lKSkgJiYgdmFsLnNwZWNpZmllZCA/IHZhbC52YWx1ZSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBTaXp6bGU7XG4gIH0od2luZG93KTtcblxuICBqUXVlcnkuZmluZCA9IFNpenpsZTtcbiAgalF1ZXJ5LmV4cHIgPSBTaXp6bGUuc2VsZWN0b3JzOyAvLyBEZXByZWNhdGVkXG5cbiAgalF1ZXJ5LmV4cHJbXCI6XCJdID0galF1ZXJ5LmV4cHIucHNldWRvcztcbiAgalF1ZXJ5LnVuaXF1ZVNvcnQgPSBqUXVlcnkudW5pcXVlID0gU2l6emxlLnVuaXF1ZVNvcnQ7XG4gIGpRdWVyeS50ZXh0ID0gU2l6emxlLmdldFRleHQ7XG4gIGpRdWVyeS5pc1hNTERvYyA9IFNpenpsZS5pc1hNTDtcbiAgalF1ZXJ5LmNvbnRhaW5zID0gU2l6emxlLmNvbnRhaW5zO1xuICBqUXVlcnkuZXNjYXBlU2VsZWN0b3IgPSBTaXp6bGUuZXNjYXBlO1xuXG4gIHZhciBkaXIgPSBmdW5jdGlvbiAoZWxlbSwgZGlyLCB1bnRpbCkge1xuICAgIHZhciBtYXRjaGVkID0gW10sXG4gICAgICAgIHRydW5jYXRlID0gdW50aWwgIT09IHVuZGVmaW5lZDtcblxuICAgIHdoaWxlICgoZWxlbSA9IGVsZW1bZGlyXSkgJiYgZWxlbS5ub2RlVHlwZSAhPT0gOSkge1xuICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgaWYgKHRydW5jYXRlICYmIGpRdWVyeShlbGVtKS5pcyh1bnRpbCkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGNoZWQucHVzaChlbGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlZDtcbiAgfTtcblxuICB2YXIgc2libGluZ3MgPSBmdW5jdGlvbiAobiwgZWxlbSkge1xuICAgIHZhciBtYXRjaGVkID0gW107XG5cbiAgICBmb3IgKDsgbjsgbiA9IG4ubmV4dFNpYmxpbmcpIHtcbiAgICAgIGlmIChuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IGVsZW0pIHtcbiAgICAgICAgbWF0Y2hlZC5wdXNoKG4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVkO1xuICB9O1xuXG4gIHZhciBybmVlZHNDb250ZXh0ID0galF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O1xuXG4gIGZ1bmN0aW9uIG5vZGVOYW1lKGVsZW0sIG5hbWUpIHtcbiAgICByZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIDtcbiAgdmFyIHJzaW5nbGVUYWcgPSAvXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaTsgLy8gSW1wbGVtZW50IHRoZSBpZGVudGljYWwgZnVuY3Rpb25hbGl0eSBmb3IgZmlsdGVyIGFuZCBub3RcblxuICBmdW5jdGlvbiB3aW5ub3coZWxlbWVudHMsIHF1YWxpZmllciwgbm90KSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ocXVhbGlmaWVyKSkge1xuICAgICAgcmV0dXJuIGpRdWVyeS5ncmVwKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbSwgaSkge1xuICAgICAgICByZXR1cm4gISFxdWFsaWZpZXIuY2FsbChlbGVtLCBpLCBlbGVtKSAhPT0gbm90O1xuICAgICAgfSk7XG4gICAgfSAvLyBTaW5nbGUgZWxlbWVudFxuXG5cbiAgICBpZiAocXVhbGlmaWVyLm5vZGVUeXBlKSB7XG4gICAgICByZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiBlbGVtID09PSBxdWFsaWZpZXIgIT09IG5vdDtcbiAgICAgIH0pO1xuICAgIH0gLy8gQXJyYXlsaWtlIG9mIGVsZW1lbnRzIChqUXVlcnksIGFyZ3VtZW50cywgQXJyYXkpXG5cblxuICAgIGlmICh0eXBlb2YgcXVhbGlmaWVyICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiBpbmRleE9mLmNhbGwocXVhbGlmaWVyLCBlbGVtKSA+IC0xICE9PSBub3Q7XG4gICAgICB9KTtcbiAgICB9IC8vIEZpbHRlcmVkIGRpcmVjdGx5IGZvciBib3RoIHNpbXBsZSBhbmQgY29tcGxleCBzZWxlY3RvcnNcblxuXG4gICAgcmV0dXJuIGpRdWVyeS5maWx0ZXIocXVhbGlmaWVyLCBlbGVtZW50cywgbm90KTtcbiAgfVxuXG4gIGpRdWVyeS5maWx0ZXIgPSBmdW5jdGlvbiAoZXhwciwgZWxlbXMsIG5vdCkge1xuICAgIHZhciBlbGVtID0gZWxlbXNbMF07XG5cbiAgICBpZiAobm90KSB7XG4gICAgICBleHByID0gXCI6bm90KFwiICsgZXhwciArIFwiKVwiO1xuICAgIH1cblxuICAgIGlmIChlbGVtcy5sZW5ndGggPT09IDEgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvcihlbGVtLCBleHByKSA/IFtlbGVtXSA6IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzKGV4cHIsIGpRdWVyeS5ncmVwKGVsZW1zLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0ubm9kZVR5cGUgPT09IDE7XG4gICAgfSkpO1xuICB9O1xuXG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIGZpbmQ6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgcmV0LFxuICAgICAgICAgIGxlbiA9IHRoaXMubGVuZ3RoLFxuICAgICAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhqUXVlcnkoc2VsZWN0b3IpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoalF1ZXJ5LmNvbnRhaW5zKHNlbGZbaV0sIHRoaXMpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXQgPSB0aGlzLnB1c2hTdGFjayhbXSk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBqUXVlcnkuZmluZChzZWxlY3Rvciwgc2VsZltpXSwgcmV0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxlbiA+IDEgPyBqUXVlcnkudW5pcXVlU29ydChyZXQpIDogcmV0O1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayh3aW5ub3codGhpcywgc2VsZWN0b3IgfHwgW10sIGZhbHNlKSk7XG4gICAgfSxcbiAgICBub3Q6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKHdpbm5vdyh0aGlzLCBzZWxlY3RvciB8fCBbXSwgdHJ1ZSkpO1xuICAgIH0sXG4gICAgaXM6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuICEhd2lubm93KHRoaXMsIC8vIElmIHRoaXMgaXMgYSBwb3NpdGlvbmFsL3JlbGF0aXZlIHNlbGVjdG9yLCBjaGVjayBtZW1iZXJzaGlwIGluIHRoZSByZXR1cm5lZCBzZXRcbiAgICAgIC8vIHNvICQoXCJwOmZpcnN0XCIpLmlzKFwicDpsYXN0XCIpIHdvbid0IHJldHVybiB0cnVlIGZvciBhIGRvYyB3aXRoIHR3byBcInBcIi5cbiAgICAgIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiAmJiBybmVlZHNDb250ZXh0LnRlc3Qoc2VsZWN0b3IpID8galF1ZXJ5KHNlbGVjdG9yKSA6IHNlbGVjdG9yIHx8IFtdLCBmYWxzZSkubGVuZ3RoO1xuICAgIH1cbiAgfSk7IC8vIEluaXRpYWxpemUgYSBqUXVlcnkgb2JqZWN0XG4gIC8vIEEgY2VudHJhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgalF1ZXJ5KGRvY3VtZW50KVxuXG4gIHZhciByb290alF1ZXJ5LFxuICAgICAgLy8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3NcbiAgLy8gUHJpb3JpdGl6ZSAjaWQgb3ZlciA8dGFnPiB0byBhdm9pZCBYU1MgdmlhIGxvY2F0aW9uLmhhc2ggKCM5NTIxKVxuICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAoIzExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcbiAgLy8gU2hvcnRjdXQgc2ltcGxlICNpZCBjYXNlIGZvciBzcGVlZFxuICBycXVpY2tFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sXG4gICAgICBpbml0ID0galF1ZXJ5LmZuLmluaXQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbnRleHQsIHJvb3QpIHtcbiAgICB2YXIgbWF0Y2gsIGVsZW07IC8vIEhBTkRMRTogJChcIlwiKSwgJChudWxsKSwgJCh1bmRlZmluZWQpLCAkKGZhbHNlKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSAvLyBNZXRob2QgaW5pdCgpIGFjY2VwdHMgYW4gYWx0ZXJuYXRlIHJvb3RqUXVlcnlcbiAgICAvLyBzbyBtaWdyYXRlIGNhbiBzdXBwb3J0IGpRdWVyeS5zdWIgKGdoLTIxMDEpXG5cblxuICAgIHJvb3QgPSByb290IHx8IHJvb3RqUXVlcnk7IC8vIEhhbmRsZSBIVE1MIHN0cmluZ3NcblxuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmIChzZWxlY3RvclswXSA9PT0gXCI8XCIgJiYgc2VsZWN0b3Jbc2VsZWN0b3IubGVuZ3RoIC0gMV0gPT09IFwiPlwiICYmIHNlbGVjdG9yLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgIC8vIEFzc3VtZSB0aGF0IHN0cmluZ3MgdGhhdCBzdGFydCBhbmQgZW5kIHdpdGggPD4gYXJlIEhUTUwgYW5kIHNraXAgdGhlIHJlZ2V4IGNoZWNrXG4gICAgICAgIG1hdGNoID0gW251bGwsIHNlbGVjdG9yLCBudWxsXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGNoID0gcnF1aWNrRXhwci5leGVjKHNlbGVjdG9yKTtcbiAgICAgIH0gLy8gTWF0Y2ggaHRtbCBvciBtYWtlIHN1cmUgbm8gY29udGV4dCBpcyBzcGVjaWZpZWQgZm9yICNpZFxuXG5cbiAgICAgIGlmIChtYXRjaCAmJiAobWF0Y2hbMV0gfHwgIWNvbnRleHQpKSB7XG4gICAgICAgIC8vIEhBTkRMRTogJChodG1sKSAtPiAkKGFycmF5KVxuICAgICAgICBpZiAobWF0Y2hbMV0pIHtcbiAgICAgICAgICBjb250ZXh0ID0gY29udGV4dCBpbnN0YW5jZW9mIGpRdWVyeSA/IGNvbnRleHRbMF0gOiBjb250ZXh0OyAvLyBPcHRpb24gdG8gcnVuIHNjcmlwdHMgaXMgdHJ1ZSBmb3IgYmFjay1jb21wYXRcbiAgICAgICAgICAvLyBJbnRlbnRpb25hbGx5IGxldCB0aGUgZXJyb3IgYmUgdGhyb3duIGlmIHBhcnNlSFRNTCBpcyBub3QgcHJlc2VudFxuXG4gICAgICAgICAgalF1ZXJ5Lm1lcmdlKHRoaXMsIGpRdWVyeS5wYXJzZUhUTUwobWF0Y2hbMV0sIGNvbnRleHQgJiYgY29udGV4dC5ub2RlVHlwZSA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogZG9jdW1lbnQsIHRydWUpKTsgLy8gSEFORExFOiAkKGh0bWwsIHByb3BzKVxuXG4gICAgICAgICAgaWYgKHJzaW5nbGVUYWcudGVzdChtYXRjaFsxXSkgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoY29udGV4dCkpIHtcbiAgICAgICAgICAgIGZvciAobWF0Y2ggaW4gY29udGV4dCkge1xuICAgICAgICAgICAgICAvLyBQcm9wZXJ0aWVzIG9mIGNvbnRleHQgYXJlIGNhbGxlZCBhcyBtZXRob2RzIGlmIHBvc3NpYmxlXG4gICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbbWF0Y2hdKSkge1xuICAgICAgICAgICAgICAgIHRoaXNbbWF0Y2hdKGNvbnRleHRbbWF0Y2hdKTsgLy8gLi4uYW5kIG90aGVyd2lzZSBzZXQgYXMgYXR0cmlidXRlc1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0cihtYXRjaCwgY29udGV4dFttYXRjaF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7IC8vIEhBTkRMRTogJCgjaWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hdGNoWzJdKTtcblxuICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAvLyBJbmplY3QgdGhlIGVsZW1lbnQgZGlyZWN0bHkgaW50byB0aGUgalF1ZXJ5IG9iamVjdFxuICAgICAgICAgICAgdGhpc1swXSA9IGVsZW07XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gLy8gSEFORExFOiAkKGV4cHIsICQoLi4uKSlcblxuICAgICAgfSBlbHNlIGlmICghY29udGV4dCB8fCBjb250ZXh0LmpxdWVyeSkge1xuICAgICAgICByZXR1cm4gKGNvbnRleHQgfHwgcm9vdCkuZmluZChzZWxlY3Rvcik7IC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuICAgICAgICAvLyAod2hpY2ggaXMganVzdCBlcXVpdmFsZW50IHRvOiAkKGNvbnRleHQpLmZpbmQoZXhwcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKGNvbnRleHQpLmZpbmQoc2VsZWN0b3IpO1xuICAgICAgfSAvLyBIQU5ETEU6ICQoRE9NRWxlbWVudClcblxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUpIHtcbiAgICAgIHRoaXNbMF0gPSBzZWxlY3RvcjtcbiAgICAgIHRoaXMubGVuZ3RoID0gMTtcbiAgICAgIHJldHVybiB0aGlzOyAvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXG4gICAgICAvLyBTaG9ydGN1dCBmb3IgZG9jdW1lbnQgcmVhZHlcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gcm9vdC5yZWFkeSAhPT0gdW5kZWZpbmVkID8gcm9vdC5yZWFkeShzZWxlY3RvcikgOiAvLyBFeGVjdXRlIGltbWVkaWF0ZWx5IGlmIHJlYWR5IGlzIG5vdCBwcmVzZW50XG4gICAgICBzZWxlY3RvcihqUXVlcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBqUXVlcnkubWFrZUFycmF5KHNlbGVjdG9yLCB0aGlzKTtcbiAgfTsgLy8gR2l2ZSB0aGUgaW5pdCBmdW5jdGlvbiB0aGUgalF1ZXJ5IHByb3RvdHlwZSBmb3IgbGF0ZXIgaW5zdGFudGlhdGlvblxuXG5cbiAgaW5pdC5wcm90b3R5cGUgPSBqUXVlcnkuZm47IC8vIEluaXRpYWxpemUgY2VudHJhbCByZWZlcmVuY2VcblxuICByb290alF1ZXJ5ID0galF1ZXJ5KGRvY3VtZW50KTtcbiAgdmFyIHJwYXJlbnRzcHJldiA9IC9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLFxuICAgICAgLy8gTWV0aG9kcyBndWFyYW50ZWVkIHRvIHByb2R1Y2UgYSB1bmlxdWUgc2V0IHdoZW4gc3RhcnRpbmcgZnJvbSBhIHVuaXF1ZSBzZXRcbiAgZ3VhcmFudGVlZFVuaXF1ZSA9IHtcbiAgICBjaGlsZHJlbjogdHJ1ZSxcbiAgICBjb250ZW50czogdHJ1ZSxcbiAgICBuZXh0OiB0cnVlLFxuICAgIHByZXY6IHRydWVcbiAgfTtcbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgaGFzOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0cyA9IGpRdWVyeSh0YXJnZXQsIHRoaXMpLFxuICAgICAgICAgIGwgPSB0YXJnZXRzLmxlbmd0aDtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmIChqUXVlcnkuY29udGFpbnModGhpcywgdGFyZ2V0c1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjbG9zZXN0OiBmdW5jdGlvbiAoc2VsZWN0b3JzLCBjb250ZXh0KSB7XG4gICAgICB2YXIgY3VyLFxuICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgIGwgPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgICBtYXRjaGVkID0gW10sXG4gICAgICAgICAgdGFyZ2V0cyA9IHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgJiYgalF1ZXJ5KHNlbGVjdG9ycyk7IC8vIFBvc2l0aW9uYWwgc2VsZWN0b3JzIG5ldmVyIG1hdGNoLCBzaW5jZSB0aGVyZSdzIG5vIF9zZWxlY3Rpb25fIGNvbnRleHRcblxuICAgICAgaWYgKCFybmVlZHNDb250ZXh0LnRlc3Qoc2VsZWN0b3JzKSkge1xuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGZvciAoY3VyID0gdGhpc1tpXTsgY3VyICYmIGN1ciAhPT0gY29udGV4dDsgY3VyID0gY3VyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIC8vIEFsd2F5cyBza2lwIGRvY3VtZW50IGZyYWdtZW50c1xuICAgICAgICAgICAgaWYgKGN1ci5ub2RlVHlwZSA8IDExICYmICh0YXJnZXRzID8gdGFyZ2V0cy5pbmRleChjdXIpID4gLTEgOiAvLyBEb24ndCBwYXNzIG5vbi1lbGVtZW50cyB0byBTaXp6bGVcbiAgICAgICAgICAgIGN1ci5ub2RlVHlwZSA9PT0gMSAmJiBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoY3VyLCBzZWxlY3RvcnMpKSkge1xuICAgICAgICAgICAgICBtYXRjaGVkLnB1c2goY3VyKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhtYXRjaGVkLmxlbmd0aCA+IDEgPyBqUXVlcnkudW5pcXVlU29ydChtYXRjaGVkKSA6IG1hdGNoZWQpO1xuICAgIH0sXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHdpdGhpbiB0aGUgc2V0XG4gICAgaW5kZXg6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAvLyBObyBhcmd1bWVudCwgcmV0dXJuIGluZGV4IGluIHBhcmVudFxuICAgICAgaWYgKCFlbGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdICYmIHRoaXNbMF0ucGFyZW50Tm9kZSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XG4gICAgICB9IC8vIEluZGV4IGluIHNlbGVjdG9yXG5cblxuICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBpbmRleE9mLmNhbGwoalF1ZXJ5KGVsZW0pLCB0aGlzWzBdKTtcbiAgICAgIH0gLy8gTG9jYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVzaXJlZCBlbGVtZW50XG5cblxuICAgICAgcmV0dXJuIGluZGV4T2YuY2FsbCh0aGlzLCAvLyBJZiBpdCByZWNlaXZlcyBhIGpRdWVyeSBvYmplY3QsIHRoZSBmaXJzdCBlbGVtZW50IGlzIHVzZWRcbiAgICAgIGVsZW0uanF1ZXJ5ID8gZWxlbVswXSA6IGVsZW0pO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhqUXVlcnkudW5pcXVlU29ydChqUXVlcnkubWVyZ2UodGhpcy5nZXQoKSwgalF1ZXJ5KHNlbGVjdG9yLCBjb250ZXh0KSkpKTtcbiAgICB9LFxuICAgIGFkZEJhY2s6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkKHNlbGVjdG9yID09IG51bGwgPyB0aGlzLnByZXZPYmplY3QgOiB0aGlzLnByZXZPYmplY3QuZmlsdGVyKHNlbGVjdG9yKSk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBzaWJsaW5nKGN1ciwgZGlyKSB7XG4gICAgd2hpbGUgKChjdXIgPSBjdXJbZGlyXSkgJiYgY3VyLm5vZGVUeXBlICE9PSAxKSB7fVxuXG4gICAgcmV0dXJuIGN1cjtcbiAgfVxuXG4gIGpRdWVyeS5lYWNoKHtcbiAgICBwYXJlbnQ6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICB2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuICAgICAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcbiAgICB9LFxuICAgIHBhcmVudHM6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICByZXR1cm4gZGlyKGVsZW0sIFwicGFyZW50Tm9kZVwiKTtcbiAgICB9LFxuICAgIHBhcmVudHNVbnRpbDogZnVuY3Rpb24gKGVsZW0sIGksIHVudGlsKSB7XG4gICAgICByZXR1cm4gZGlyKGVsZW0sIFwicGFyZW50Tm9kZVwiLCB1bnRpbCk7XG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgcmV0dXJuIHNpYmxpbmcoZWxlbSwgXCJuZXh0U2libGluZ1wiKTtcbiAgICB9LFxuICAgIHByZXY6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICByZXR1cm4gc2libGluZyhlbGVtLCBcInByZXZpb3VzU2libGluZ1wiKTtcbiAgICB9LFxuICAgIG5leHRBbGw6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICByZXR1cm4gZGlyKGVsZW0sIFwibmV4dFNpYmxpbmdcIik7XG4gICAgfSxcbiAgICBwcmV2QWxsOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgcmV0dXJuIGRpcihlbGVtLCBcInByZXZpb3VzU2libGluZ1wiKTtcbiAgICB9LFxuICAgIG5leHRVbnRpbDogZnVuY3Rpb24gKGVsZW0sIGksIHVudGlsKSB7XG4gICAgICByZXR1cm4gZGlyKGVsZW0sIFwibmV4dFNpYmxpbmdcIiwgdW50aWwpO1xuICAgIH0sXG4gICAgcHJldlVudGlsOiBmdW5jdGlvbiAoZWxlbSwgaSwgdW50aWwpIHtcbiAgICAgIHJldHVybiBkaXIoZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiwgdW50aWwpO1xuICAgIH0sXG4gICAgc2libGluZ3M6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICByZXR1cm4gc2libGluZ3MoKGVsZW0ucGFyZW50Tm9kZSB8fCB7fSkuZmlyc3RDaGlsZCwgZWxlbSk7XG4gICAgfSxcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHJldHVybiBzaWJsaW5ncyhlbGVtLmZpcnN0Q2hpbGQpO1xuICAgIH0sXG4gICAgY29udGVudHM6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW0uY29udGVudERvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBlbGVtLmNvbnRlbnREb2N1bWVudDtcbiAgICAgIH0gLy8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHksIGlPUyA3IG9ubHksIEFuZHJvaWQgQnJvd3NlciA8PTQuMyBvbmx5XG4gICAgICAvLyBUcmVhdCB0aGUgdGVtcGxhdGUgZWxlbWVudCBhcyBhIHJlZ3VsYXIgb25lIGluIGJyb3dzZXJzIHRoYXRcbiAgICAgIC8vIGRvbid0IHN1cHBvcnQgaXQuXG5cblxuICAgICAgaWYgKG5vZGVOYW1lKGVsZW0sIFwidGVtcGxhdGVcIikpIHtcbiAgICAgICAgZWxlbSA9IGVsZW0uY29udGVudCB8fCBlbGVtO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4galF1ZXJ5Lm1lcmdlKFtdLCBlbGVtLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgfSwgZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgalF1ZXJ5LmZuW25hbWVdID0gZnVuY3Rpb24gKHVudGlsLCBzZWxlY3Rvcikge1xuICAgICAgdmFyIG1hdGNoZWQgPSBqUXVlcnkubWFwKHRoaXMsIGZuLCB1bnRpbCk7XG5cbiAgICAgIGlmIChuYW1lLnNsaWNlKC01KSAhPT0gXCJVbnRpbFwiKSB7XG4gICAgICAgIHNlbGVjdG9yID0gdW50aWw7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RvciAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbWF0Y2hlZCA9IGpRdWVyeS5maWx0ZXIoc2VsZWN0b3IsIG1hdGNoZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVzXG4gICAgICAgIGlmICghZ3VhcmFudGVlZFVuaXF1ZVtuYW1lXSkge1xuICAgICAgICAgIGpRdWVyeS51bmlxdWVTb3J0KG1hdGNoZWQpO1xuICAgICAgICB9IC8vIFJldmVyc2Ugb3JkZXIgZm9yIHBhcmVudHMqIGFuZCBwcmV2LWRlcml2YXRpdmVzXG5cblxuICAgICAgICBpZiAocnBhcmVudHNwcmV2LnRlc3QobmFtZSkpIHtcbiAgICAgICAgICBtYXRjaGVkLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2sobWF0Y2hlZCk7XG4gICAgfTtcbiAgfSk7XG4gIHZhciBybm90aHRtbHdoaXRlID0gL1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nOyAvLyBDb252ZXJ0IFN0cmluZy1mb3JtYXR0ZWQgb3B0aW9ucyBpbnRvIE9iamVjdC1mb3JtYXR0ZWQgb25lc1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMob3B0aW9ucykge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBqUXVlcnkuZWFjaChvcHRpb25zLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtdLCBmdW5jdGlvbiAoXywgZmxhZykge1xuICAgICAgb2JqZWN0W2ZsYWddID0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIC8qXG4gICAqIENyZWF0ZSBhIGNhbGxiYWNrIGxpc3QgdXNpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICAgKlxuICAgKlx0b3B0aW9uczogYW4gb3B0aW9uYWwgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgb3B0aW9ucyB0aGF0IHdpbGwgY2hhbmdlIGhvd1xuICAgKlx0XHRcdHRoZSBjYWxsYmFjayBsaXN0IGJlaGF2ZXMgb3IgYSBtb3JlIHRyYWRpdGlvbmFsIG9wdGlvbiBvYmplY3RcbiAgICpcbiAgICogQnkgZGVmYXVsdCBhIGNhbGxiYWNrIGxpc3Qgd2lsbCBhY3QgbGlrZSBhbiBldmVudCBjYWxsYmFjayBsaXN0IGFuZCBjYW4gYmVcbiAgICogXCJmaXJlZFwiIG11bHRpcGxlIHRpbWVzLlxuICAgKlxuICAgKiBQb3NzaWJsZSBvcHRpb25zOlxuICAgKlxuICAgKlx0b25jZTpcdFx0XHR3aWxsIGVuc3VyZSB0aGUgY2FsbGJhY2sgbGlzdCBjYW4gb25seSBiZSBmaXJlZCBvbmNlIChsaWtlIGEgRGVmZXJyZWQpXG4gICAqXG4gICAqXHRtZW1vcnk6XHRcdFx0d2lsbCBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHZhbHVlcyBhbmQgd2lsbCBjYWxsIGFueSBjYWxsYmFjayBhZGRlZFxuICAgKlx0XHRcdFx0XHRhZnRlciB0aGUgbGlzdCBoYXMgYmVlbiBmaXJlZCByaWdodCBhd2F5IHdpdGggdGhlIGxhdGVzdCBcIm1lbW9yaXplZFwiXG4gICAqXHRcdFx0XHRcdHZhbHVlcyAobGlrZSBhIERlZmVycmVkKVxuICAgKlxuICAgKlx0dW5pcXVlOlx0XHRcdHdpbGwgZW5zdXJlIGEgY2FsbGJhY2sgY2FuIG9ubHkgYmUgYWRkZWQgb25jZSAobm8gZHVwbGljYXRlIGluIHRoZSBsaXN0KVxuICAgKlxuICAgKlx0c3RvcE9uRmFsc2U6XHRpbnRlcnJ1cHQgY2FsbGluZ3Mgd2hlbiBhIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAgICpcbiAgICovXG5cblxuICBqUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvLyBDb252ZXJ0IG9wdGlvbnMgZnJvbSBTdHJpbmctZm9ybWF0dGVkIHRvIE9iamVjdC1mb3JtYXR0ZWQgaWYgbmVlZGVkXG4gICAgLy8gKHdlIGNoZWNrIGluIGNhY2hlIGZpcnN0KVxuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/IGNyZWF0ZU9wdGlvbnMob3B0aW9ucykgOiBqUXVlcnkuZXh0ZW5kKHt9LCBvcHRpb25zKTtcblxuICAgIHZhciAvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCBpcyBjdXJyZW50bHkgZmlyaW5nXG4gICAgZmlyaW5nLFxuICAgICAgICAvLyBMYXN0IGZpcmUgdmFsdWUgZm9yIG5vbi1mb3JnZXR0YWJsZSBsaXN0c1xuICAgIG1lbW9yeSxcbiAgICAgICAgLy8gRmxhZyB0byBrbm93IGlmIGxpc3Qgd2FzIGFscmVhZHkgZmlyZWRcbiAgICBmaXJlZCxcbiAgICAgICAgLy8gRmxhZyB0byBwcmV2ZW50IGZpcmluZ1xuICAgIGxvY2tlZCxcbiAgICAgICAgLy8gQWN0dWFsIGNhbGxiYWNrIGxpc3RcbiAgICBsaXN0ID0gW10sXG4gICAgICAgIC8vIFF1ZXVlIG9mIGV4ZWN1dGlvbiBkYXRhIGZvciByZXBlYXRhYmxlIGxpc3RzXG4gICAgcXVldWUgPSBbXSxcbiAgICAgICAgLy8gSW5kZXggb2YgY3VycmVudGx5IGZpcmluZyBjYWxsYmFjayAobW9kaWZpZWQgYnkgYWRkL3JlbW92ZSBhcyBuZWVkZWQpXG4gICAgZmlyaW5nSW5kZXggPSAtMSxcbiAgICAgICAgLy8gRmlyZSBjYWxsYmFja3NcbiAgICBmaXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRW5mb3JjZSBzaW5nbGUtZmlyaW5nXG4gICAgICBsb2NrZWQgPSBsb2NrZWQgfHwgb3B0aW9ucy5vbmNlOyAvLyBFeGVjdXRlIGNhbGxiYWNrcyBmb3IgYWxsIHBlbmRpbmcgZXhlY3V0aW9ucyxcbiAgICAgIC8vIHJlc3BlY3RpbmcgZmlyaW5nSW5kZXggb3ZlcnJpZGVzIGFuZCBydW50aW1lIGNoYW5nZXNcblxuICAgICAgZmlyZWQgPSBmaXJpbmcgPSB0cnVlO1xuXG4gICAgICBmb3IgKDsgcXVldWUubGVuZ3RoOyBmaXJpbmdJbmRleCA9IC0xKSB7XG4gICAgICAgIG1lbW9yeSA9IHF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAgICAgd2hpbGUgKCsrZmlyaW5nSW5kZXggPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIC8vIFJ1biBjYWxsYmFjayBhbmQgY2hlY2sgZm9yIGVhcmx5IHRlcm1pbmF0aW9uXG4gICAgICAgICAgaWYgKGxpc3RbZmlyaW5nSW5kZXhdLmFwcGx5KG1lbW9yeVswXSwgbWVtb3J5WzFdKSA9PT0gZmFsc2UgJiYgb3B0aW9ucy5zdG9wT25GYWxzZSkge1xuICAgICAgICAgICAgLy8gSnVtcCB0byBlbmQgYW5kIGZvcmdldCB0aGUgZGF0YSBzbyAuYWRkIGRvZXNuJ3QgcmUtZmlyZVxuICAgICAgICAgICAgZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIG1lbW9yeSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBGb3JnZXQgdGhlIGRhdGEgaWYgd2UncmUgZG9uZSB3aXRoIGl0XG5cblxuICAgICAgaWYgKCFvcHRpb25zLm1lbW9yeSkge1xuICAgICAgICBtZW1vcnkgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZmlyaW5nID0gZmFsc2U7IC8vIENsZWFuIHVwIGlmIHdlJ3JlIGRvbmUgZmlyaW5nIGZvciBnb29kXG5cbiAgICAgIGlmIChsb2NrZWQpIHtcbiAgICAgICAgLy8gS2VlcCBhbiBlbXB0eSBsaXN0IGlmIHdlIGhhdmUgZGF0YSBmb3IgZnV0dXJlIGFkZCBjYWxsc1xuICAgICAgICBpZiAobWVtb3J5KSB7XG4gICAgICAgICAgbGlzdCA9IFtdOyAvLyBPdGhlcndpc2UsIHRoaXMgb2JqZWN0IGlzIHNwZW50XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICAgICAvLyBBY3R1YWwgQ2FsbGJhY2tzIG9iamVjdFxuICAgIHNlbGYgPSB7XG4gICAgICAvLyBBZGQgYSBjYWxsYmFjayBvciBhIGNvbGxlY3Rpb24gb2YgY2FsbGJhY2tzIHRvIHRoZSBsaXN0XG4gICAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIG1lbW9yeSBmcm9tIGEgcGFzdCBydW4sIHdlIHNob3VsZCBmaXJlIGFmdGVyIGFkZGluZ1xuICAgICAgICAgIGlmIChtZW1vcnkgJiYgIWZpcmluZykge1xuICAgICAgICAgICAgZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKG1lbW9yeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKGZ1bmN0aW9uIGFkZChhcmdzKSB7XG4gICAgICAgICAgICBqUXVlcnkuZWFjaChhcmdzLCBmdW5jdGlvbiAoXywgYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGFyZykpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMudW5pcXVlIHx8ICFzZWxmLmhhcyhhcmcpKSB7XG4gICAgICAgICAgICAgICAgICBsaXN0LnB1c2goYXJnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJnICYmIGFyZy5sZW5ndGggJiYgdG9UeXBlKGFyZykgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJbnNwZWN0IHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgICAgICAgYWRkKGFyZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICBpZiAobWVtb3J5ICYmICFmaXJpbmcpIHtcbiAgICAgICAgICAgIGZpcmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBSZW1vdmUgYSBjYWxsYmFjayBmcm9tIHRoZSBsaXN0XG4gICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgalF1ZXJ5LmVhY2goYXJndW1lbnRzLCBmdW5jdGlvbiAoXywgYXJnKSB7XG4gICAgICAgICAgdmFyIGluZGV4O1xuXG4gICAgICAgICAgd2hpbGUgKChpbmRleCA9IGpRdWVyeS5pbkFycmF5KGFyZywgbGlzdCwgaW5kZXgpKSA+IC0xKSB7XG4gICAgICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7IC8vIEhhbmRsZSBmaXJpbmcgaW5kZXhlc1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPD0gZmlyaW5nSW5kZXgpIHtcbiAgICAgICAgICAgICAgZmlyaW5nSW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICAvLyBDaGVjayBpZiBhIGdpdmVuIGNhbGxiYWNrIGlzIGluIHRoZSBsaXN0LlxuICAgICAgLy8gSWYgbm8gYXJndW1lbnQgaXMgZ2l2ZW4sIHJldHVybiB3aGV0aGVyIG9yIG5vdCBsaXN0IGhhcyBjYWxsYmFja3MgYXR0YWNoZWQuXG4gICAgICBoYXM6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4gPyBqUXVlcnkuaW5BcnJheShmbiwgbGlzdCkgPiAtMSA6IGxpc3QubGVuZ3RoID4gMDtcbiAgICAgIH0sXG4gICAgICAvLyBSZW1vdmUgYWxsIGNhbGxiYWNrcyBmcm9tIHRoZSBsaXN0XG4gICAgICBlbXB0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIERpc2FibGUgLmZpcmUgYW5kIC5hZGRcbiAgICAgIC8vIEFib3J0IGFueSBjdXJyZW50L3BlbmRpbmcgZXhlY3V0aW9uc1xuICAgICAgLy8gQ2xlYXIgYWxsIGNhbGxiYWNrcyBhbmQgdmFsdWVzXG4gICAgICBkaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvY2tlZCA9IHF1ZXVlID0gW107XG4gICAgICAgIGxpc3QgPSBtZW1vcnkgPSBcIlwiO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gIWxpc3Q7XG4gICAgICB9LFxuICAgICAgLy8gRGlzYWJsZSAuZmlyZVxuICAgICAgLy8gQWxzbyBkaXNhYmxlIC5hZGQgdW5sZXNzIHdlIGhhdmUgbWVtb3J5IChzaW5jZSBpdCB3b3VsZCBoYXZlIG5vIGVmZmVjdClcbiAgICAgIC8vIEFib3J0IGFueSBwZW5kaW5nIGV4ZWN1dGlvbnNcbiAgICAgIGxvY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9ja2VkID0gcXVldWUgPSBbXTtcblxuICAgICAgICBpZiAoIW1lbW9yeSAmJiAhZmlyaW5nKSB7XG4gICAgICAgICAgbGlzdCA9IG1lbW9yeSA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBsb2NrZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhbG9ja2VkO1xuICAgICAgfSxcbiAgICAgIC8vIENhbGwgYWxsIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBjb250ZXh0IGFuZCBhcmd1bWVudHNcbiAgICAgIGZpcmVXaXRoOiBmdW5jdGlvbiAoY29udGV4dCwgYXJncykge1xuICAgICAgICBpZiAoIWxvY2tlZCkge1xuICAgICAgICAgIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAgICAgICAgIGFyZ3MgPSBbY29udGV4dCwgYXJncy5zbGljZSA/IGFyZ3Muc2xpY2UoKSA6IGFyZ3NdO1xuICAgICAgICAgIHF1ZXVlLnB1c2goYXJncyk7XG5cbiAgICAgICAgICBpZiAoIWZpcmluZykge1xuICAgICAgICAgICAgZmlyZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIC8vIENhbGwgYWxsIHRoZSBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gYXJndW1lbnRzXG4gICAgICBmaXJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuZmlyZVdpdGgodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgLy8gVG8ga25vdyBpZiB0aGUgY2FsbGJhY2tzIGhhdmUgYWxyZWFkeSBiZWVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlXG4gICAgICBmaXJlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFmaXJlZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgZnVuY3Rpb24gSWRlbnRpdHkodikge1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgZnVuY3Rpb24gVGhyb3dlcihleCkge1xuICAgIHRocm93IGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRvcHRWYWx1ZSh2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0LCBub1ZhbHVlKSB7XG4gICAgdmFyIG1ldGhvZDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDaGVjayBmb3IgcHJvbWlzZSBhc3BlY3QgZmlyc3QgdG8gcHJpdmlsZWdlIHN5bmNocm9ub3VzIGJlaGF2aW9yXG4gICAgICBpZiAodmFsdWUgJiYgaXNGdW5jdGlvbihtZXRob2QgPSB2YWx1ZS5wcm9taXNlKSkge1xuICAgICAgICBtZXRob2QuY2FsbCh2YWx1ZSkuZG9uZShyZXNvbHZlKS5mYWlsKHJlamVjdCk7IC8vIE90aGVyIHRoZW5hYmxlc1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiBpc0Z1bmN0aW9uKG1ldGhvZCA9IHZhbHVlLnRoZW4pKSB7XG4gICAgICAgIG1ldGhvZC5jYWxsKHZhbHVlLCByZXNvbHZlLCByZWplY3QpOyAvLyBPdGhlciBub24tdGhlbmFibGVzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDb250cm9sIGByZXNvbHZlYCBhcmd1bWVudHMgYnkgbGV0dGluZyBBcnJheSNzbGljZSBjYXN0IGJvb2xlYW4gYG5vVmFsdWVgIHRvIGludGVnZXI6XG4gICAgICAgIC8vICogZmFsc2U6IFsgdmFsdWUgXS5zbGljZSggMCApID0+IHJlc29sdmUoIHZhbHVlIClcbiAgICAgICAgLy8gKiB0cnVlOiBbIHZhbHVlIF0uc2xpY2UoIDEgKSA9PiByZXNvbHZlKClcbiAgICAgICAgcmVzb2x2ZS5hcHBseSh1bmRlZmluZWQsIFt2YWx1ZV0uc2xpY2Uobm9WYWx1ZSkpO1xuICAgICAgfSAvLyBGb3IgUHJvbWlzZXMvQSssIGNvbnZlcnQgZXhjZXB0aW9ucyBpbnRvIHJlamVjdGlvbnNcbiAgICAgIC8vIFNpbmNlIGpRdWVyeS53aGVuIGRvZXNuJ3QgdW53cmFwIHRoZW5hYmxlcywgd2UgY2FuIHNraXAgdGhlIGV4dHJhIGNoZWNrcyBhcHBlYXJpbmcgaW5cbiAgICAgIC8vIERlZmVycmVkI3RoZW4gdG8gY29uZGl0aW9uYWxseSBzdXBwcmVzcyByZWplY3Rpb24uXG5cbiAgICB9IGNhdGNoICh2YWx1ZSkge1xuICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCA0LjAgb25seVxuICAgICAgLy8gU3RyaWN0IG1vZGUgZnVuY3Rpb25zIGludm9rZWQgd2l0aG91dCAuY2FsbC8uYXBwbHkgZ2V0IGdsb2JhbC1vYmplY3QgY29udGV4dFxuICAgICAgcmVqZWN0LmFwcGx5KHVuZGVmaW5lZCwgW3ZhbHVlXSk7XG4gICAgfVxuICB9XG5cbiAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgRGVmZXJyZWQ6IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICB2YXIgdHVwbGVzID0gWy8vIGFjdGlvbiwgYWRkIGxpc3RlbmVyLCBjYWxsYmFja3MsXG4gICAgICAvLyAuLi4gLnRoZW4gaGFuZGxlcnMsIGFyZ3VtZW50IGluZGV4LCBbZmluYWwgc3RhdGVdXG4gICAgICBbXCJub3RpZnlcIiwgXCJwcm9ncmVzc1wiLCBqUXVlcnkuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLCBqUXVlcnkuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLCAyXSwgW1wicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIDAsIFwicmVzb2x2ZWRcIl0sIFtcInJlamVjdFwiLCBcImZhaWxcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIDEsIFwicmVqZWN0ZWRcIl1dLFxuICAgICAgICAgIHN0YXRlID0gXCJwZW5kaW5nXCIsXG4gICAgICAgICAgcHJvbWlzZSA9IHtcbiAgICAgICAgc3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIGFsd2F5czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRlZmVycmVkLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihudWxsLCBmbik7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEtlZXAgcGlwZSBmb3IgYmFjay1jb21wYXRcbiAgICAgICAgcGlwZTogZnVuY3Rpb24gKClcbiAgICAgICAgLyogZm5Eb25lLCBmbkZhaWwsIGZuUHJvZ3Jlc3MgKi9cbiAgICAgICAge1xuICAgICAgICAgIHZhciBmbnMgPSBhcmd1bWVudHM7XG4gICAgICAgICAgcmV0dXJuIGpRdWVyeS5EZWZlcnJlZChmdW5jdGlvbiAobmV3RGVmZXIpIHtcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKHR1cGxlcywgZnVuY3Rpb24gKGksIHR1cGxlKSB7XG4gICAgICAgICAgICAgIC8vIE1hcCB0dXBsZXMgKHByb2dyZXNzLCBkb25lLCBmYWlsKSB0byBhcmd1bWVudHMgKGRvbmUsIGZhaWwsIHByb2dyZXNzKVxuICAgICAgICAgICAgICB2YXIgZm4gPSBpc0Z1bmN0aW9uKGZuc1t0dXBsZVs0XV0pICYmIGZuc1t0dXBsZVs0XV07IC8vIGRlZmVycmVkLnByb2dyZXNzKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLm5vdGlmeSB9KVxuICAgICAgICAgICAgICAvLyBkZWZlcnJlZC5kb25lKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLnJlc29sdmUgfSlcbiAgICAgICAgICAgICAgLy8gZGVmZXJyZWQuZmFpbChmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZWplY3QgfSlcblxuICAgICAgICAgICAgICBkZWZlcnJlZFt0dXBsZVsxXV0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5lZCA9IGZuICYmIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWQgJiYgaXNGdW5jdGlvbihyZXR1cm5lZC5wcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuZWQucHJvbWlzZSgpLnByb2dyZXNzKG5ld0RlZmVyLm5vdGlmeSkuZG9uZShuZXdEZWZlci5yZXNvbHZlKS5mYWlsKG5ld0RlZmVyLnJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld0RlZmVyW3R1cGxlWzBdICsgXCJXaXRoXCJdKHRoaXMsIGZuID8gW3JldHVybmVkXSA6IGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm5zID0gbnVsbDtcbiAgICAgICAgICB9KS5wcm9taXNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgb25Qcm9ncmVzcykge1xuICAgICAgICAgIHZhciBtYXhEZXB0aCA9IDA7XG5cbiAgICAgICAgICBmdW5jdGlvbiByZXNvbHZlKGRlcHRoLCBkZWZlcnJlZCwgaGFuZGxlciwgc3BlY2lhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgICAgICAgICAgIG1pZ2h0VGhyb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVybmVkLCB0aGVuOyAvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuM1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU5XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIGRvdWJsZS1yZXNvbHV0aW9uIGF0dGVtcHRzXG5cbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggPCBtYXhEZXB0aCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybmVkID0gaGFuZGxlci5hcHBseSh0aGF0LCBhcmdzKTsgLy8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTQ4XG5cbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWQgPT09IGRlZmVycmVkLnByb21pc2UoKSkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTtcbiAgICAgICAgICAgICAgICB9IC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb25zIDIuMy4zLjEsIDMuNVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU0XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNzVcbiAgICAgICAgICAgICAgICAvLyBSZXRyaWV2ZSBgdGhlbmAgb25seSBvbmNlXG5cblxuICAgICAgICAgICAgICAgIHRoZW4gPSByZXR1cm5lZCAmJiAoIC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjRcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC02NFxuICAgICAgICAgICAgICAgIC8vIE9ubHkgY2hlY2sgb2JqZWN0cyBhbmQgZnVuY3Rpb25zIGZvciB0aGVuYWJpbGl0eVxuICAgICAgICAgICAgICAgIHR5cGVvZiByZXR1cm5lZCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgcmV0dXJuZWQgPT09IFwiZnVuY3Rpb25cIikgJiYgcmV0dXJuZWQudGhlbjsgLy8gSGFuZGxlIGEgcmV0dXJuZWQgdGhlbmFibGVcblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoZW4pKSB7XG4gICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIHByb2Nlc3NvcnMgKG5vdGlmeSkganVzdCB3YWl0IGZvciByZXNvbHV0aW9uXG4gICAgICAgICAgICAgICAgICBpZiAoc3BlY2lhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGVuLmNhbGwocmV0dXJuZWQsIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCksIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsKSk7IC8vIE5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBhbHNvIGhvb2sgaW50byBwcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gLi4uYW5kIGRpc3JlZ2FyZCBvbGRlciByZXNvbHV0aW9uIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBtYXhEZXB0aCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGVuLmNhbGwocmV0dXJuZWQsIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCksIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsKSwgcmVzb2x2ZShtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBkZWZlcnJlZC5ub3RpZnlXaXRoKSk7XG4gICAgICAgICAgICAgICAgICB9IC8vIEhhbmRsZSBhbGwgb3RoZXIgcmV0dXJuZWQgdmFsdWVzXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuICAgICAgICAgICAgICAgICAgLy8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG4gICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlciAhPT0gSWRlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IFtyZXR1cm5lZF07XG4gICAgICAgICAgICAgICAgICB9IC8vIFByb2Nlc3MgdGhlIHZhbHVlKHMpXG4gICAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IHByb2Nlc3MgaXMgcmVzb2x2ZVxuXG5cbiAgICAgICAgICAgICAgICAgIChzcGVjaWFsIHx8IGRlZmVycmVkLnJlc29sdmVXaXRoKSh0aGF0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAvLyBPbmx5IG5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBjYXRjaCBhbmQgcmVqZWN0IGV4Y2VwdGlvbnNcbiAgICAgICAgICAgICAgcHJvY2VzcyA9IHNwZWNpYWwgPyBtaWdodFRocm93IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBtaWdodFRocm93KCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGUsIHByb2Nlc3Muc3RhY2tUcmFjZSk7XG4gICAgICAgICAgICAgICAgICB9IC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy40LjFcbiAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTYxXG4gICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcG9zdC1yZXNvbHV0aW9uIGV4Y2VwdGlvbnNcblxuXG4gICAgICAgICAgICAgICAgICBpZiAoZGVwdGggKyAxID49IG1heERlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyICE9PSBUaHJvd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhhdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gW2VdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0V2l0aCh0aGF0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07IC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4xXG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU3XG4gICAgICAgICAgICAgIC8vIFJlLXJlc29sdmUgcHJvbWlzZXMgaW1tZWRpYXRlbHkgdG8gZG9kZ2UgZmFsc2UgcmVqZWN0aW9uIGZyb21cbiAgICAgICAgICAgICAgLy8gc3Vic2VxdWVudCBlcnJvcnNcblxuXG4gICAgICAgICAgICAgIGlmIChkZXB0aCkge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDYWxsIGFuIG9wdGlvbmFsIGhvb2sgdG8gcmVjb3JkIHRoZSBzdGFjaywgaW4gY2FzZSBvZiBleGNlcHRpb25cbiAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCdzIG90aGVyd2lzZSBsb3N0IHdoZW4gZXhlY3V0aW9uIGdvZXMgYXN5bmNcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vaykge1xuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5zdGFja1RyYWNlID0galF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vaygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHByb2Nlc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBqUXVlcnkuRGVmZXJyZWQoZnVuY3Rpb24gKG5ld0RlZmVyKSB7XG4gICAgICAgICAgICAvLyBwcm9ncmVzc19oYW5kbGVycy5hZGQoIC4uLiApXG4gICAgICAgICAgICB0dXBsZXNbMF1bM10uYWRkKHJlc29sdmUoMCwgbmV3RGVmZXIsIGlzRnVuY3Rpb24ob25Qcm9ncmVzcykgPyBvblByb2dyZXNzIDogSWRlbnRpdHksIG5ld0RlZmVyLm5vdGlmeVdpdGgpKTsgLy8gZnVsZmlsbGVkX2hhbmRsZXJzLmFkZCggLi4uIClcblxuICAgICAgICAgICAgdHVwbGVzWzFdWzNdLmFkZChyZXNvbHZlKDAsIG5ld0RlZmVyLCBpc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogSWRlbnRpdHkpKTsgLy8gcmVqZWN0ZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXG4gICAgICAgICAgICB0dXBsZXNbMl1bM10uYWRkKHJlc29sdmUoMCwgbmV3RGVmZXIsIGlzRnVuY3Rpb24ob25SZWplY3RlZCkgPyBvblJlamVjdGVkIDogVGhyb3dlcikpO1xuICAgICAgICAgIH0pLnByb21pc2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuICAgICAgICAvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XG4gICAgICAgIHByb21pc2U6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqICE9IG51bGwgPyBqUXVlcnkuZXh0ZW5kKG9iaiwgcHJvbWlzZSkgOiBwcm9taXNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgICAgIGRlZmVycmVkID0ge307IC8vIEFkZCBsaXN0LXNwZWNpZmljIG1ldGhvZHNcblxuICAgICAgalF1ZXJ5LmVhY2godHVwbGVzLCBmdW5jdGlvbiAoaSwgdHVwbGUpIHtcbiAgICAgICAgdmFyIGxpc3QgPSB0dXBsZVsyXSxcbiAgICAgICAgICAgIHN0YXRlU3RyaW5nID0gdHVwbGVbNV07IC8vIHByb21pc2UucHJvZ3Jlc3MgPSBsaXN0LmFkZFxuICAgICAgICAvLyBwcm9taXNlLmRvbmUgPSBsaXN0LmFkZFxuICAgICAgICAvLyBwcm9taXNlLmZhaWwgPSBsaXN0LmFkZFxuXG4gICAgICAgIHByb21pc2VbdHVwbGVbMV1dID0gbGlzdC5hZGQ7IC8vIEhhbmRsZSBzdGF0ZVxuXG4gICAgICAgIGlmIChzdGF0ZVN0cmluZykge1xuICAgICAgICAgIGxpc3QuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHN0YXRlID0gXCJyZXNvbHZlZFwiIChpLmUuLCBmdWxmaWxsZWQpXG4gICAgICAgICAgICAvLyBzdGF0ZSA9IFwicmVqZWN0ZWRcIlxuICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZVN0cmluZztcbiAgICAgICAgICB9LCAvLyByZWplY3RlZF9jYWxsYmFja3MuZGlzYWJsZVxuICAgICAgICAgIC8vIGZ1bGZpbGxlZF9jYWxsYmFja3MuZGlzYWJsZVxuICAgICAgICAgIHR1cGxlc1szIC0gaV1bMl0uZGlzYWJsZSwgLy8gcmVqZWN0ZWRfaGFuZGxlcnMuZGlzYWJsZVxuICAgICAgICAgIC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5kaXNhYmxlXG4gICAgICAgICAgdHVwbGVzWzMgLSBpXVszXS5kaXNhYmxlLCAvLyBwcm9ncmVzc19jYWxsYmFja3MubG9ja1xuICAgICAgICAgIHR1cGxlc1swXVsyXS5sb2NrLCAvLyBwcm9ncmVzc19oYW5kbGVycy5sb2NrXG4gICAgICAgICAgdHVwbGVzWzBdWzNdLmxvY2spO1xuICAgICAgICB9IC8vIHByb2dyZXNzX2hhbmRsZXJzLmZpcmVcbiAgICAgICAgLy8gZnVsZmlsbGVkX2hhbmRsZXJzLmZpcmVcbiAgICAgICAgLy8gcmVqZWN0ZWRfaGFuZGxlcnMuZmlyZVxuXG5cbiAgICAgICAgbGlzdC5hZGQodHVwbGVbM10uZmlyZSk7IC8vIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5ub3RpZnlXaXRoKC4uLikgfVxuICAgICAgICAvLyBkZWZlcnJlZC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLnJlc29sdmVXaXRoKC4uLikgfVxuICAgICAgICAvLyBkZWZlcnJlZC5yZWplY3QgPSBmdW5jdGlvbigpIHsgZGVmZXJyZWQucmVqZWN0V2l0aCguLi4pIH1cblxuICAgICAgICBkZWZlcnJlZFt0dXBsZVswXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGVmZXJyZWRbdHVwbGVbMF0gKyBcIldpdGhcIl0odGhpcyA9PT0gZGVmZXJyZWQgPyB1bmRlZmluZWQgOiB0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9OyAvLyBkZWZlcnJlZC5ub3RpZnlXaXRoID0gbGlzdC5maXJlV2l0aFxuICAgICAgICAvLyBkZWZlcnJlZC5yZXNvbHZlV2l0aCA9IGxpc3QuZmlyZVdpdGhcbiAgICAgICAgLy8gZGVmZXJyZWQucmVqZWN0V2l0aCA9IGxpc3QuZmlyZVdpdGhcblxuXG4gICAgICAgIGRlZmVycmVkW3R1cGxlWzBdICsgXCJXaXRoXCJdID0gbGlzdC5maXJlV2l0aDtcbiAgICAgIH0pOyAvLyBNYWtlIHRoZSBkZWZlcnJlZCBhIHByb21pc2VcblxuICAgICAgcHJvbWlzZS5wcm9taXNlKGRlZmVycmVkKTsgLy8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxuXG4gICAgICBpZiAoZnVuYykge1xuICAgICAgICBmdW5jLmNhbGwoZGVmZXJyZWQsIGRlZmVycmVkKTtcbiAgICAgIH0gLy8gQWxsIGRvbmUhXG5cblxuICAgICAgcmV0dXJuIGRlZmVycmVkO1xuICAgIH0sXG4gICAgLy8gRGVmZXJyZWQgaGVscGVyXG4gICAgd2hlbjogZnVuY3Rpb24gKHNpbmdsZVZhbHVlKSB7XG4gICAgICB2YXIgLy8gY291bnQgb2YgdW5jb21wbGV0ZWQgc3Vib3JkaW5hdGVzXG4gICAgICByZW1haW5pbmcgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgIC8vIGNvdW50IG9mIHVucHJvY2Vzc2VkIGFyZ3VtZW50c1xuICAgICAgaSA9IHJlbWFpbmluZyxcbiAgICAgICAgICAvLyBzdWJvcmRpbmF0ZSBmdWxmaWxsbWVudCBkYXRhXG4gICAgICByZXNvbHZlQ29udGV4dHMgPSBBcnJheShpKSxcbiAgICAgICAgICByZXNvbHZlVmFsdWVzID0gc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgIC8vIHRoZSBtYXN0ZXIgRGVmZXJyZWRcbiAgICAgIG1hc3RlciA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuICAgICAgICAgIC8vIHN1Ym9yZGluYXRlIGNhbGxiYWNrIGZhY3RvcnlcbiAgICAgIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmVzb2x2ZUNvbnRleHRzW2ldID0gdGhpcztcbiAgICAgICAgICByZXNvbHZlVmFsdWVzW2ldID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBzbGljZS5jYWxsKGFyZ3VtZW50cykgOiB2YWx1ZTtcblxuICAgICAgICAgIGlmICghIC0tcmVtYWluaW5nKSB7XG4gICAgICAgICAgICBtYXN0ZXIucmVzb2x2ZVdpdGgocmVzb2x2ZUNvbnRleHRzLCByZXNvbHZlVmFsdWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9OyAvLyBTaW5nbGUtIGFuZCBlbXB0eSBhcmd1bWVudHMgYXJlIGFkb3B0ZWQgbGlrZSBQcm9taXNlLnJlc29sdmVcblxuXG4gICAgICBpZiAocmVtYWluaW5nIDw9IDEpIHtcbiAgICAgICAgYWRvcHRWYWx1ZShzaW5nbGVWYWx1ZSwgbWFzdGVyLmRvbmUodXBkYXRlRnVuYyhpKSkucmVzb2x2ZSwgbWFzdGVyLnJlamVjdCwgIXJlbWFpbmluZyk7IC8vIFVzZSAudGhlbigpIHRvIHVud3JhcCBzZWNvbmRhcnkgdGhlbmFibGVzIChjZi4gZ2gtMzAwMClcblxuICAgICAgICBpZiAobWFzdGVyLnN0YXRlKCkgPT09IFwicGVuZGluZ1wiIHx8IGlzRnVuY3Rpb24ocmVzb2x2ZVZhbHVlc1tpXSAmJiByZXNvbHZlVmFsdWVzW2ldLnRoZW4pKSB7XG4gICAgICAgICAgcmV0dXJuIG1hc3Rlci50aGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gTXVsdGlwbGUgYXJndW1lbnRzIGFyZSBhZ2dyZWdhdGVkIGxpa2UgUHJvbWlzZS5hbGwgYXJyYXkgZWxlbWVudHNcblxuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGFkb3B0VmFsdWUocmVzb2x2ZVZhbHVlc1tpXSwgdXBkYXRlRnVuYyhpKSwgbWFzdGVyLnJlamVjdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXN0ZXIucHJvbWlzZSgpO1xuICAgIH1cbiAgfSk7IC8vIFRoZXNlIHVzdWFsbHkgaW5kaWNhdGUgYSBwcm9ncmFtbWVyIG1pc3Rha2UgZHVyaW5nIGRldmVsb3BtZW50LFxuICAvLyB3YXJuIGFib3V0IHRoZW0gQVNBUCByYXRoZXIgdGhhbiBzd2FsbG93aW5nIHRoZW0gYnkgZGVmYXVsdC5cblxuICB2YXIgcmVycm9yTmFtZXMgPSAvXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztcblxuICBqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayA9IGZ1bmN0aW9uIChlcnJvciwgc3RhY2spIHtcbiAgICAvLyBTdXBwb3J0OiBJRSA4IC0gOSBvbmx5XG4gICAgLy8gQ29uc29sZSBleGlzdHMgd2hlbiBkZXYgdG9vbHMgYXJlIG9wZW4sIHdoaWNoIGNhbiBoYXBwZW4gYXQgYW55IHRpbWVcbiAgICBpZiAod2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUud2FybiAmJiBlcnJvciAmJiByZXJyb3JOYW1lcy50ZXN0KGVycm9yLm5hbWUpKSB7XG4gICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIgKyBlcnJvci5tZXNzYWdlLCBlcnJvci5zdGFjaywgc3RhY2spO1xuICAgIH1cbiAgfTtcblxuICBqUXVlcnkucmVhZHlFeGNlcHRpb24gPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcbiAgfTsgLy8gVGhlIGRlZmVycmVkIHVzZWQgb24gRE9NIHJlYWR5XG5cblxuICB2YXIgcmVhZHlMaXN0ID0galF1ZXJ5LkRlZmVycmVkKCk7XG5cbiAgalF1ZXJ5LmZuLnJlYWR5ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmVhZHlMaXN0LnRoZW4oZm4pIC8vIFdyYXAgalF1ZXJ5LnJlYWR5RXhjZXB0aW9uIGluIGEgZnVuY3Rpb24gc28gdGhhdCB0aGUgbG9va3VwXG4gICAgLy8gaGFwcGVucyBhdCB0aGUgdGltZSBvZiBlcnJvciBoYW5kbGluZyBpbnN0ZWFkIG9mIGNhbGxiYWNrXG4gICAgLy8gcmVnaXN0cmF0aW9uLlxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGpRdWVyeS5yZWFkeUV4Y2VwdGlvbihlcnJvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgLy8gSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cbiAgICBpc1JlYWR5OiBmYWxzZSxcbiAgICAvLyBBIGNvdW50ZXIgdG8gdHJhY2sgaG93IG1hbnkgaXRlbXMgdG8gd2FpdCBmb3IgYmVmb3JlXG4gICAgLy8gdGhlIHJlYWR5IGV2ZW50IGZpcmVzLiBTZWUgIzY3ODFcbiAgICByZWFkeVdhaXQ6IDEsXG4gICAgLy8gSGFuZGxlIHdoZW4gdGhlIERPTSBpcyByZWFkeVxuICAgIHJlYWR5OiBmdW5jdGlvbiAod2FpdCkge1xuICAgICAgLy8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuICAgICAgaWYgKHdhaXQgPT09IHRydWUgPyAtLWpRdWVyeS5yZWFkeVdhaXQgOiBqUXVlcnkuaXNSZWFkeSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFJlbWVtYmVyIHRoYXQgdGhlIERPTSBpcyByZWFkeVxuXG5cbiAgICAgIGpRdWVyeS5pc1JlYWR5ID0gdHJ1ZTsgLy8gSWYgYSBub3JtYWwgRE9NIFJlYWR5IGV2ZW50IGZpcmVkLCBkZWNyZW1lbnQsIGFuZCB3YWl0IGlmIG5lZWQgYmVcblxuICAgICAgaWYgKHdhaXQgIT09IHRydWUgJiYgLS1qUXVlcnkucmVhZHlXYWl0ID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIElmIHRoZXJlIGFyZSBmdW5jdGlvbnMgYm91bmQsIHRvIGV4ZWN1dGVcblxuXG4gICAgICByZWFkeUxpc3QucmVzb2x2ZVdpdGgoZG9jdW1lbnQsIFtqUXVlcnldKTtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkucmVhZHkudGhlbiA9IHJlYWR5TGlzdC50aGVuOyAvLyBUaGUgcmVhZHkgZXZlbnQgaGFuZGxlciBhbmQgc2VsZiBjbGVhbnVwIG1ldGhvZFxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjb21wbGV0ZWQpO1xuICAgIGpRdWVyeS5yZWFkeSgpO1xuICB9IC8vIENhdGNoIGNhc2VzIHdoZXJlICQoZG9jdW1lbnQpLnJlYWR5KCkgaXMgY2FsbGVkXG4gIC8vIGFmdGVyIHRoZSBicm93c2VyIGV2ZW50IGhhcyBhbHJlYWR5IG9jY3VycmVkLlxuICAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMCBvbmx5XG4gIC8vIE9sZGVyIElFIHNvbWV0aW1lcyBzaWduYWxzIFwiaW50ZXJhY3RpdmVcIiB0b28gc29vblxuXG5cbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIiAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsKSB7XG4gICAgLy8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XG4gICAgd2luZG93LnNldFRpbWVvdXQoalF1ZXJ5LnJlYWR5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2UgdGhlIGhhbmR5IGV2ZW50IGNhbGxiYWNrXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkKTsgLy8gQSBmYWxsYmFjayB0byB3aW5kb3cub25sb2FkLCB0aGF0IHdpbGwgYWx3YXlzIHdvcmtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjb21wbGV0ZWQpO1xuICB9IC8vIE11bHRpZnVuY3Rpb25hbCBtZXRob2QgdG8gZ2V0IGFuZCBzZXQgdmFsdWVzIG9mIGEgY29sbGVjdGlvblxuICAvLyBUaGUgdmFsdWUvcyBjYW4gb3B0aW9uYWxseSBiZSBleGVjdXRlZCBpZiBpdCdzIGEgZnVuY3Rpb25cblxuXG4gIHZhciBhY2Nlc3MgPSBmdW5jdGlvbiAoZWxlbXMsIGZuLCBrZXksIHZhbHVlLCBjaGFpbmFibGUsIGVtcHR5R2V0LCByYXcpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIGxlbiA9IGVsZW1zLmxlbmd0aCxcbiAgICAgICAgYnVsayA9IGtleSA9PSBudWxsOyAvLyBTZXRzIG1hbnkgdmFsdWVzXG5cbiAgICBpZiAodG9UeXBlKGtleSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNoYWluYWJsZSA9IHRydWU7XG5cbiAgICAgIGZvciAoaSBpbiBrZXkpIHtcbiAgICAgICAgYWNjZXNzKGVsZW1zLCBmbiwgaSwga2V5W2ldLCB0cnVlLCBlbXB0eUdldCwgcmF3KTtcbiAgICAgIH0gLy8gU2V0cyBvbmUgdmFsdWVcblxuICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hhaW5hYmxlID0gdHJ1ZTtcblxuICAgICAgaWYgKCFpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICByYXcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnVsaykge1xuICAgICAgICAvLyBCdWxrIG9wZXJhdGlvbnMgcnVuIGFnYWluc3QgdGhlIGVudGlyZSBzZXRcbiAgICAgICAgaWYgKHJhdykge1xuICAgICAgICAgIGZuLmNhbGwoZWxlbXMsIHZhbHVlKTtcbiAgICAgICAgICBmbiA9IG51bGw7IC8vIC4uLmV4Y2VwdCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvbiB2YWx1ZXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidWxrID0gZm47XG5cbiAgICAgICAgICBmbiA9IGZ1bmN0aW9uIChlbGVtLCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYnVsay5jYWxsKGpRdWVyeShlbGVtKSwgdmFsdWUpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBmbihlbGVtc1tpXSwga2V5LCByYXcgPyB2YWx1ZSA6IHZhbHVlLmNhbGwoZWxlbXNbaV0sIGksIGZuKGVsZW1zW2ldLCBrZXkpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hhaW5hYmxlKSB7XG4gICAgICByZXR1cm4gZWxlbXM7XG4gICAgfSAvLyBHZXRzXG5cblxuICAgIGlmIChidWxrKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbChlbGVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbiA/IGZuKGVsZW1zWzBdLCBrZXkpIDogZW1wdHlHZXQ7XG4gIH07IC8vIE1hdGNoZXMgZGFzaGVkIHN0cmluZyBmb3IgY2FtZWxpemluZ1xuXG5cbiAgdmFyIHJtc1ByZWZpeCA9IC9eLW1zLS8sXG4gICAgICByZGFzaEFscGhhID0gLy0oW2Etel0pL2c7IC8vIFVzZWQgYnkgY2FtZWxDYXNlIGFzIGNhbGxiYWNrIHRvIHJlcGxhY2UoKVxuXG4gIGZ1bmN0aW9uIGZjYW1lbENhc2UoYWxsLCBsZXR0ZXIpIHtcbiAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gIH0gLy8gQ29udmVydCBkYXNoZWQgdG8gY2FtZWxDYXNlOyB1c2VkIGJ5IHRoZSBjc3MgYW5kIGRhdGEgbW9kdWxlc1xuICAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDE1XG4gIC8vIE1pY3Jvc29mdCBmb3Jnb3QgdG8gaHVtcCB0aGVpciB2ZW5kb3IgcHJlZml4ICgjOTU3MilcblxuXG4gIGZ1bmN0aW9uIGNhbWVsQ2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uocm1zUHJlZml4LCBcIm1zLVwiKS5yZXBsYWNlKHJkYXNoQWxwaGEsIGZjYW1lbENhc2UpO1xuICB9XG5cbiAgdmFyIGFjY2VwdERhdGEgPSBmdW5jdGlvbiAob3duZXIpIHtcbiAgICAvLyBBY2NlcHRzIG9ubHk6XG4gICAgLy8gIC0gTm9kZVxuICAgIC8vICAgIC0gTm9kZS5FTEVNRU5UX05PREVcbiAgICAvLyAgICAtIE5vZGUuRE9DVU1FTlRfTk9ERVxuICAgIC8vICAtIE9iamVjdFxuICAgIC8vICAgIC0gQW55XG4gICAgcmV0dXJuIG93bmVyLm5vZGVUeXBlID09PSAxIHx8IG93bmVyLm5vZGVUeXBlID09PSA5IHx8ICErb3duZXIubm9kZVR5cGU7XG4gIH07XG5cbiAgZnVuY3Rpb24gRGF0YSgpIHtcbiAgICB0aGlzLmV4cGFuZG8gPSBqUXVlcnkuZXhwYW5kbyArIERhdGEudWlkKys7XG4gIH1cblxuICBEYXRhLnVpZCA9IDE7XG4gIERhdGEucHJvdG90eXBlID0ge1xuICAgIGNhY2hlOiBmdW5jdGlvbiAob3duZXIpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBvd25lciBvYmplY3QgYWxyZWFkeSBoYXMgYSBjYWNoZVxuICAgICAgdmFyIHZhbHVlID0gb3duZXJbdGhpcy5leHBhbmRvXTsgLy8gSWYgbm90LCBjcmVhdGUgb25lXG5cbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB7fTsgLy8gV2UgY2FuIGFjY2VwdCBkYXRhIGZvciBub24tZWxlbWVudCBub2RlcyBpbiBtb2Rlcm4gYnJvd3NlcnMsXG4gICAgICAgIC8vIGJ1dCB3ZSBzaG91bGQgbm90LCBzZWUgIzgzMzUuXG4gICAgICAgIC8vIEFsd2F5cyByZXR1cm4gYW4gZW1wdHkgb2JqZWN0LlxuXG4gICAgICAgIGlmIChhY2NlcHREYXRhKG93bmVyKSkge1xuICAgICAgICAgIC8vIElmIGl0IGlzIGEgbm9kZSB1bmxpa2VseSB0byBiZSBzdHJpbmdpZnktZWQgb3IgbG9vcGVkIG92ZXJcbiAgICAgICAgICAvLyB1c2UgcGxhaW4gYXNzaWdubWVudFxuICAgICAgICAgIGlmIChvd25lci5ub2RlVHlwZSkge1xuICAgICAgICAgICAgb3duZXJbdGhpcy5leHBhbmRvXSA9IHZhbHVlOyAvLyBPdGhlcndpc2Ugc2VjdXJlIGl0IGluIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHlcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyYWJsZSBtdXN0IGJlIHRydWUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXG4gICAgICAgICAgICAvLyBkZWxldGVkIHdoZW4gZGF0YSBpcyByZW1vdmVkXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvd25lciwgdGhpcy5leHBhbmRvLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAob3duZXIsIGRhdGEsIHZhbHVlKSB7XG4gICAgICB2YXIgcHJvcCxcbiAgICAgICAgICBjYWNoZSA9IHRoaXMuY2FjaGUob3duZXIpOyAvLyBIYW5kbGU6IFsgb3duZXIsIGtleSwgdmFsdWUgXSBhcmdzXG4gICAgICAvLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjYWNoZVtjYW1lbENhc2UoZGF0YSldID0gdmFsdWU7IC8vIEhhbmRsZTogWyBvd25lciwgeyBwcm9wZXJ0aWVzIH0gXSBhcmdzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDb3B5IHRoZSBwcm9wZXJ0aWVzIG9uZS1ieS1vbmUgdG8gdGhlIGNhY2hlIG9iamVjdFxuICAgICAgICBmb3IgKHByb3AgaW4gZGF0YSkge1xuICAgICAgICAgIGNhY2hlW2NhbWVsQ2FzZShwcm9wKV0gPSBkYXRhW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWNoZTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gKG93bmVyLCBrZXkpIHtcbiAgICAgIHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FjaGUob3duZXIpIDogLy8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuICAgICAgb3duZXJbdGhpcy5leHBhbmRvXSAmJiBvd25lclt0aGlzLmV4cGFuZG9dW2NhbWVsQ2FzZShrZXkpXTtcbiAgICB9LFxuICAgIGFjY2VzczogZnVuY3Rpb24gKG93bmVyLCBrZXksIHZhbHVlKSB7XG4gICAgICAvLyBJbiBjYXNlcyB3aGVyZSBlaXRoZXI6XG4gICAgICAvL1xuICAgICAgLy8gICAxLiBObyBrZXkgd2FzIHNwZWNpZmllZFxuICAgICAgLy8gICAyLiBBIHN0cmluZyBrZXkgd2FzIHNwZWNpZmllZCwgYnV0IG5vIHZhbHVlIHByb3ZpZGVkXG4gICAgICAvL1xuICAgICAgLy8gVGFrZSB0aGUgXCJyZWFkXCIgcGF0aCBhbmQgYWxsb3cgdGhlIGdldCBtZXRob2QgdG8gZGV0ZXJtaW5lXG4gICAgICAvLyB3aGljaCB2YWx1ZSB0byByZXR1cm4sIHJlc3BlY3RpdmVseSBlaXRoZXI6XG4gICAgICAvL1xuICAgICAgLy8gICAxLiBUaGUgZW50aXJlIGNhY2hlIG9iamVjdFxuICAgICAgLy8gICAyLiBUaGUgZGF0YSBzdG9yZWQgYXQgdGhlIGtleVxuICAgICAgLy9cbiAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChvd25lciwga2V5KTtcbiAgICAgIH0gLy8gV2hlbiB0aGUga2V5IGlzIG5vdCBhIHN0cmluZywgb3IgYm90aCBhIGtleSBhbmQgdmFsdWVcbiAgICAgIC8vIGFyZSBzcGVjaWZpZWQsIHNldCBvciBleHRlbmQgKGV4aXN0aW5nIG9iamVjdHMpIHdpdGggZWl0aGVyOlxuICAgICAgLy9cbiAgICAgIC8vICAgMS4gQW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAgICAgIC8vICAgMi4gQSBrZXkgYW5kIHZhbHVlXG4gICAgICAvL1xuXG5cbiAgICAgIHRoaXMuc2V0KG93bmVyLCBrZXksIHZhbHVlKTsgLy8gU2luY2UgdGhlIFwic2V0XCIgcGF0aCBjYW4gaGF2ZSB0d28gcG9zc2libGUgZW50cnkgcG9pbnRzXG4gICAgICAvLyByZXR1cm4gdGhlIGV4cGVjdGVkIGRhdGEgYmFzZWQgb24gd2hpY2ggcGF0aCB3YXMgdGFrZW5bKl1cblxuICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gKG93bmVyLCBrZXkpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGNhY2hlID0gb3duZXJbdGhpcy5leHBhbmRvXTtcblxuICAgICAgaWYgKGNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gU3VwcG9ydCBhcnJheSBvciBzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nIG9mIGtleXNcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgIC8vIElmIGtleSBpcyBhbiBhcnJheSBvZiBrZXlzLi4uXG4gICAgICAgICAgLy8gV2UgYWx3YXlzIHNldCBjYW1lbENhc2Uga2V5cywgc28gcmVtb3ZlIHRoYXQuXG4gICAgICAgICAga2V5ID0ga2V5Lm1hcChjYW1lbENhc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGtleSA9IGNhbWVsQ2FzZShrZXkpOyAvLyBJZiBhIGtleSB3aXRoIHRoZSBzcGFjZXMgZXhpc3RzLCB1c2UgaXQuXG4gICAgICAgICAgLy8gT3RoZXJ3aXNlLCBjcmVhdGUgYW4gYXJyYXkgYnkgbWF0Y2hpbmcgbm9uLXdoaXRlc3BhY2VcblxuICAgICAgICAgIGtleSA9IGtleSBpbiBjYWNoZSA/IFtrZXldIDoga2V5Lm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9IGtleS5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGRlbGV0ZSBjYWNoZVtrZXlbaV1dO1xuICAgICAgICB9XG4gICAgICB9IC8vIFJlbW92ZSB0aGUgZXhwYW5kbyBpZiB0aGVyZSdzIG5vIG1vcmUgZGF0YVxuXG5cbiAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBqUXVlcnkuaXNFbXB0eU9iamVjdChjYWNoZSkpIHtcbiAgICAgICAgLy8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NVxuICAgICAgICAvLyBXZWJraXQgJiBCbGluayBwZXJmb3JtYW5jZSBzdWZmZXJzIHdoZW4gZGVsZXRpbmcgcHJvcGVydGllc1xuICAgICAgICAvLyBmcm9tIERPTSBub2Rlcywgc28gc2V0IHRvIHVuZGVmaW5lZCBpbnN0ZWFkXG4gICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM3ODYwNyAoYnVnIHJlc3RyaWN0ZWQpXG4gICAgICAgIGlmIChvd25lci5ub2RlVHlwZSkge1xuICAgICAgICAgIG93bmVyW3RoaXMuZXhwYW5kb10gPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIG93bmVyW3RoaXMuZXhwYW5kb107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc0RhdGE6IGZ1bmN0aW9uIChvd25lcikge1xuICAgICAgdmFyIGNhY2hlID0gb3duZXJbdGhpcy5leHBhbmRvXTtcbiAgICAgIHJldHVybiBjYWNoZSAhPT0gdW5kZWZpbmVkICYmICFqUXVlcnkuaXNFbXB0eU9iamVjdChjYWNoZSk7XG4gICAgfVxuICB9O1xuICB2YXIgZGF0YVByaXYgPSBuZXcgRGF0YSgpO1xuICB2YXIgZGF0YVVzZXIgPSBuZXcgRGF0YSgpOyAvL1x0SW1wbGVtZW50YXRpb24gU3VtbWFyeVxuICAvL1xuICAvL1x0MS4gRW5mb3JjZSBBUEkgc3VyZmFjZSBhbmQgc2VtYW50aWMgY29tcGF0aWJpbGl0eSB3aXRoIDEuOS54IGJyYW5jaFxuICAvL1x0Mi4gSW1wcm92ZSB0aGUgbW9kdWxlJ3MgbWFpbnRhaW5hYmlsaXR5IGJ5IHJlZHVjaW5nIHRoZSBzdG9yYWdlXG4gIC8vXHRcdHBhdGhzIHRvIGEgc2luZ2xlIG1lY2hhbmlzbS5cbiAgLy9cdDMuIFVzZSB0aGUgc2FtZSBzaW5nbGUgbWVjaGFuaXNtIHRvIHN1cHBvcnQgXCJwcml2YXRlXCIgYW5kIFwidXNlclwiIGRhdGEuXG4gIC8vXHQ0LiBfTmV2ZXJfIGV4cG9zZSBcInByaXZhdGVcIiBkYXRhIHRvIHVzZXIgY29kZSAoVE9ETzogRHJvcCBfZGF0YSwgX3JlbW92ZURhdGEpXG4gIC8vXHQ1LiBBdm9pZCBleHBvc2luZyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIG9uIHVzZXIgb2JqZWN0cyAoZWcuIGV4cGFuZG8gcHJvcGVydGllcylcbiAgLy9cdDYuIFByb3ZpZGUgYSBjbGVhciBwYXRoIGZvciBpbXBsZW1lbnRhdGlvbiB1cGdyYWRlIHRvIFdlYWtNYXAgaW4gMjAxNFxuXG4gIHZhciByYnJhY2UgPSAvXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sXG4gICAgICBybXVsdGlEYXNoID0gL1tBLVpdL2c7XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YShkYXRhKSB7XG4gICAgaWYgKGRhdGEgPT09IFwidHJ1ZVwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEgPT09IFwibnVsbFwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IC8vIE9ubHkgY29udmVydCB0byBhIG51bWJlciBpZiBpdCBkb2Vzbid0IGNoYW5nZSB0aGUgc3RyaW5nXG5cblxuICAgIGlmIChkYXRhID09PSArZGF0YSArIFwiXCIpIHtcbiAgICAgIHJldHVybiArZGF0YTtcbiAgICB9XG5cbiAgICBpZiAocmJyYWNlLnRlc3QoZGF0YSkpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZnVuY3Rpb24gZGF0YUF0dHIoZWxlbSwga2V5LCBkYXRhKSB7XG4gICAgdmFyIG5hbWU7IC8vIElmIG5vdGhpbmcgd2FzIGZvdW5kIGludGVybmFsbHksIHRyeSB0byBmZXRjaCBhbnlcbiAgICAvLyBkYXRhIGZyb20gdGhlIEhUTUw1IGRhdGEtKiBhdHRyaWJ1dGVcblxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgbmFtZSA9IFwiZGF0YS1cIiArIGtleS5yZXBsYWNlKHJtdWx0aURhc2gsIFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBkYXRhID0gZWxlbS5nZXRBdHRyaWJ1dGUobmFtZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRhdGEgPSBnZXREYXRhKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fSAvLyBNYWtlIHN1cmUgd2Ugc2V0IHRoZSBkYXRhIHNvIGl0IGlzbid0IGNoYW5nZWQgbGF0ZXJcblxuXG4gICAgICAgIGRhdGFVc2VyLnNldChlbGVtLCBrZXksIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGpRdWVyeS5leHRlbmQoe1xuICAgIGhhc0RhdGE6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICByZXR1cm4gZGF0YVVzZXIuaGFzRGF0YShlbGVtKSB8fCBkYXRhUHJpdi5oYXNEYXRhKGVsZW0pO1xuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24gKGVsZW0sIG5hbWUsIGRhdGEpIHtcbiAgICAgIHJldHVybiBkYXRhVXNlci5hY2Nlc3MoZWxlbSwgbmFtZSwgZGF0YSk7XG4gICAgfSxcbiAgICByZW1vdmVEYXRhOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSkge1xuICAgICAgZGF0YVVzZXIucmVtb3ZlKGVsZW0sIG5hbWUpO1xuICAgIH0sXG4gICAgLy8gVE9ETzogTm93IHRoYXQgYWxsIGNhbGxzIHRvIF9kYXRhIGFuZCBfcmVtb3ZlRGF0YSBoYXZlIGJlZW4gcmVwbGFjZWRcbiAgICAvLyB3aXRoIGRpcmVjdCBjYWxscyB0byBkYXRhUHJpdiBtZXRob2RzLCB0aGVzZSBjYW4gYmUgZGVwcmVjYXRlZC5cbiAgICBfZGF0YTogZnVuY3Rpb24gKGVsZW0sIG5hbWUsIGRhdGEpIHtcbiAgICAgIHJldHVybiBkYXRhUHJpdi5hY2Nlc3MoZWxlbSwgbmFtZSwgZGF0YSk7XG4gICAgfSxcbiAgICBfcmVtb3ZlRGF0YTogZnVuY3Rpb24gKGVsZW0sIG5hbWUpIHtcbiAgICAgIGRhdGFQcml2LnJlbW92ZShlbGVtLCBuYW1lKTtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICBkYXRhOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGVsZW0gPSB0aGlzWzBdLFxuICAgICAgICAgIGF0dHJzID0gZWxlbSAmJiBlbGVtLmF0dHJpYnV0ZXM7IC8vIEdldHMgYWxsIHZhbHVlc1xuXG4gICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgZGF0YSA9IGRhdGFVc2VyLmdldChlbGVtKTtcblxuICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxICYmICFkYXRhUHJpdi5nZXQoZWxlbSwgXCJoYXNEYXRhQXR0cnNcIikpIHtcbiAgICAgICAgICAgIGkgPSBhdHRycy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgMTEgb25seVxuICAgICAgICAgICAgICAvLyBUaGUgYXR0cnMgZWxlbWVudHMgY2FuIGJlIG51bGwgKCMxNDg5NClcbiAgICAgICAgICAgICAgaWYgKGF0dHJzW2ldKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGF0dHJzW2ldLm5hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAobmFtZS5pbmRleE9mKFwiZGF0YS1cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIG5hbWUgPSBjYW1lbENhc2UobmFtZS5zbGljZSg1KSk7XG4gICAgICAgICAgICAgICAgICBkYXRhQXR0cihlbGVtLCBuYW1lLCBkYXRhW25hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0YVByaXYuc2V0KGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSAvLyBTZXRzIG11bHRpcGxlIHZhbHVlc1xuXG5cbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRhdGFVc2VyLnNldCh0aGlzLCBrZXkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRhdGE7IC8vIFRoZSBjYWxsaW5nIGpRdWVyeSBvYmplY3QgKGVsZW1lbnQgbWF0Y2hlcykgaXMgbm90IGVtcHR5XG4gICAgICAgIC8vIChhbmQgdGhlcmVmb3JlIGhhcyBhbiBlbGVtZW50IGFwcGVhcnMgYXQgdGhpc1sgMCBdKSBhbmQgdGhlXG4gICAgICAgIC8vIGB2YWx1ZWAgcGFyYW1ldGVyIHdhcyBub3QgdW5kZWZpbmVkLiBBbiBlbXB0eSBqUXVlcnkgb2JqZWN0XG4gICAgICAgIC8vIHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGZvciBlbGVtID0gdGhpc1sgMCBdIHdoaWNoIHdpbGxcbiAgICAgICAgLy8gdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFuIGF0dGVtcHQgdG8gcmVhZCBhIGRhdGEgY2FjaGUgaXMgbWFkZS5cblxuICAgICAgICBpZiAoZWxlbSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gQXR0ZW1wdCB0byBnZXQgZGF0YSBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgIC8vIFRoZSBrZXkgd2lsbCBhbHdheXMgYmUgY2FtZWxDYXNlZCBpbiBEYXRhXG4gICAgICAgICAgZGF0YSA9IGRhdGFVc2VyLmdldChlbGVtLCBrZXkpO1xuXG4gICAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgfSAvLyBBdHRlbXB0IHRvIFwiZGlzY292ZXJcIiB0aGUgZGF0YSBpblxuICAgICAgICAgIC8vIEhUTUw1IGN1c3RvbSBkYXRhLSogYXR0cnNcblxuXG4gICAgICAgICAgZGF0YSA9IGRhdGFBdHRyKGVsZW0sIGtleSk7XG5cbiAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICB9IC8vIFdlIHRyaWVkIHJlYWxseSBoYXJkLCBidXQgdGhlIGRhdGEgZG9lc24ndCBleGlzdC5cblxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFNldCB0aGUgZGF0YS4uLlxuXG5cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSBhbHdheXMgc3RvcmUgdGhlIGNhbWVsQ2FzZWQga2V5XG4gICAgICAgICAgZGF0YVVzZXIuc2V0KHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSwgbnVsbCwgdHJ1ZSk7XG4gICAgfSxcbiAgICByZW1vdmVEYXRhOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGF0YVVzZXIucmVtb3ZlKHRoaXMsIGtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZXh0ZW5kKHtcbiAgICBxdWV1ZTogZnVuY3Rpb24gKGVsZW0sIHR5cGUsIGRhdGEpIHtcbiAgICAgIHZhciBxdWV1ZTtcblxuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgdHlwZSA9ICh0eXBlIHx8IFwiZnhcIikgKyBcInF1ZXVlXCI7XG4gICAgICAgIHF1ZXVlID0gZGF0YVByaXYuZ2V0KGVsZW0sIHR5cGUpOyAvLyBTcGVlZCB1cCBkZXF1ZXVlIGJ5IGdldHRpbmcgb3V0IHF1aWNrbHkgaWYgdGhpcyBpcyBqdXN0IGEgbG9va3VwXG5cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBpZiAoIXF1ZXVlIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIHF1ZXVlID0gZGF0YVByaXYuYWNjZXNzKGVsZW0sIHR5cGUsIGpRdWVyeS5tYWtlQXJyYXkoZGF0YSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBxdWV1ZSB8fCBbXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlcXVldWU6IGZ1bmN0aW9uIChlbGVtLCB0eXBlKSB7XG4gICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cbiAgICAgIHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZShlbGVtLCB0eXBlKSxcbiAgICAgICAgICBzdGFydExlbmd0aCA9IHF1ZXVlLmxlbmd0aCxcbiAgICAgICAgICBmbiA9IHF1ZXVlLnNoaWZ0KCksXG4gICAgICAgICAgaG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoZWxlbSwgdHlwZSksXG4gICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgalF1ZXJ5LmRlcXVldWUoZWxlbSwgdHlwZSk7XG4gICAgICB9OyAvLyBJZiB0aGUgZnggcXVldWUgaXMgZGVxdWV1ZWQsIGFsd2F5cyByZW1vdmUgdGhlIHByb2dyZXNzIHNlbnRpbmVsXG5cblxuICAgICAgaWYgKGZuID09PSBcImlucHJvZ3Jlc3NcIikge1xuICAgICAgICBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIHN0YXJ0TGVuZ3RoLS07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbikge1xuICAgICAgICAvLyBBZGQgYSBwcm9ncmVzcyBzZW50aW5lbCB0byBwcmV2ZW50IHRoZSBmeCBxdWV1ZSBmcm9tIGJlaW5nXG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgZGVxdWV1ZWRcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZnhcIikge1xuICAgICAgICAgIHF1ZXVlLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpO1xuICAgICAgICB9IC8vIENsZWFyIHVwIHRoZSBsYXN0IHF1ZXVlIHN0b3AgZnVuY3Rpb25cblxuXG4gICAgICAgIGRlbGV0ZSBob29rcy5zdG9wO1xuICAgICAgICBmbi5jYWxsKGVsZW0sIG5leHQsIGhvb2tzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGFydExlbmd0aCAmJiBob29rcykge1xuICAgICAgICBob29rcy5lbXB0eS5maXJlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBOb3QgcHVibGljIC0gZ2VuZXJhdGUgYSBxdWV1ZUhvb2tzIG9iamVjdCwgb3IgcmV0dXJuIHRoZSBjdXJyZW50IG9uZVxuICAgIF9xdWV1ZUhvb2tzOiBmdW5jdGlvbiAoZWxlbSwgdHlwZSkge1xuICAgICAgdmFyIGtleSA9IHR5cGUgKyBcInF1ZXVlSG9va3NcIjtcbiAgICAgIHJldHVybiBkYXRhUHJpdi5nZXQoZWxlbSwga2V5KSB8fCBkYXRhUHJpdi5hY2Nlc3MoZWxlbSwga2V5LCB7XG4gICAgICAgIGVtcHR5OiBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkYXRhUHJpdi5yZW1vdmUoZWxlbSwgW3R5cGUgKyBcInF1ZXVlXCIsIGtleV0pO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgcXVldWU6IGZ1bmN0aW9uICh0eXBlLCBkYXRhKSB7XG4gICAgICB2YXIgc2V0dGVyID0gMjtcblxuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGRhdGEgPSB0eXBlO1xuICAgICAgICB0eXBlID0gXCJmeFwiO1xuICAgICAgICBzZXR0ZXItLTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCBzZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGpRdWVyeS5xdWV1ZSh0aGlzWzBdLCB0eXBlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcXVldWUgPSBqUXVlcnkucXVldWUodGhpcywgdHlwZSwgZGF0YSk7IC8vIEVuc3VyZSBhIGhvb2tzIGZvciB0aGlzIHF1ZXVlXG5cbiAgICAgICAgalF1ZXJ5Ll9xdWV1ZUhvb2tzKHRoaXMsIHR5cGUpO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBcImZ4XCIgJiYgcXVldWVbMF0gIT09IFwiaW5wcm9ncmVzc1wiKSB7XG4gICAgICAgICAgalF1ZXJ5LmRlcXVldWUodGhpcywgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVxdWV1ZTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkuZGVxdWV1ZSh0aGlzLCB0eXBlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xlYXJRdWV1ZTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXVlKHR5cGUgfHwgXCJmeFwiLCBbXSk7XG4gICAgfSxcbiAgICAvLyBHZXQgYSBwcm9taXNlIHJlc29sdmVkIHdoZW4gcXVldWVzIG9mIGEgY2VydGFpbiB0eXBlXG4gICAgLy8gYXJlIGVtcHRpZWQgKGZ4IGlzIHRoZSB0eXBlIGJ5IGRlZmF1bHQpXG4gICAgcHJvbWlzZTogZnVuY3Rpb24gKHR5cGUsIG9iaikge1xuICAgICAgdmFyIHRtcCxcbiAgICAgICAgICBjb3VudCA9IDEsXG4gICAgICAgICAgZGVmZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMsXG4gICAgICAgICAgaSA9IHRoaXMubGVuZ3RoLFxuICAgICAgICAgIHJlc29sdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghIC0tY291bnQpIHtcbiAgICAgICAgICBkZWZlci5yZXNvbHZlV2l0aChlbGVtZW50cywgW2VsZW1lbnRzXSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBvYmogPSB0eXBlO1xuICAgICAgICB0eXBlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdG1wID0gZGF0YVByaXYuZ2V0KGVsZW1lbnRzW2ldLCB0eXBlICsgXCJxdWV1ZUhvb2tzXCIpO1xuXG4gICAgICAgIGlmICh0bXAgJiYgdG1wLmVtcHR5KSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB0bXAuZW1wdHkuYWRkKHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUoKTtcbiAgICAgIHJldHVybiBkZWZlci5wcm9taXNlKG9iaik7XG4gICAgfVxuICB9KTtcbiAgdmFyIHBudW0gPSAvWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2U7XG4gIHZhciByY3NzTnVtID0gbmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIgKyBwbnVtICsgXCIpKFthLXolXSopJFwiLCBcImlcIik7XG4gIHZhciBjc3NFeHBhbmQgPSBbXCJUb3BcIiwgXCJSaWdodFwiLCBcIkJvdHRvbVwiLCBcIkxlZnRcIl07XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgdmFyIGlzQXR0YWNoZWQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIHJldHVybiBqUXVlcnkuY29udGFpbnMoZWxlbS5vd25lckRvY3VtZW50LCBlbGVtKTtcbiAgfSxcbiAgICAgIGNvbXBvc2VkID0ge1xuICAgIGNvbXBvc2VkOiB0cnVlXG4gIH07IC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTIgLSAxOCssIGlPUyAxMC4wIC0gMTAuMiBvbmx5XG4gIC8vIENoZWNrIGF0dGFjaG1lbnQgYWNyb3NzIHNoYWRvdyBET00gYm91bmRhcmllcyB3aGVuIHBvc3NpYmxlIChnaC0zNTA0KVxuICAvLyBTdXBwb3J0OiBpT1MgMTAuMC0xMC4yIG9ubHlcbiAgLy8gRWFybHkgaU9TIDEwIHZlcnNpb25zIHN1cHBvcnQgYGF0dGFjaFNoYWRvd2AgYnV0IG5vdCBgZ2V0Um9vdE5vZGVgLFxuICAvLyBsZWFkaW5nIHRvIGVycm9ycy4gV2UgbmVlZCB0byBjaGVjayBmb3IgYGdldFJvb3ROb2RlYC5cblxuXG4gIGlmIChkb2N1bWVudEVsZW1lbnQuZ2V0Um9vdE5vZGUpIHtcbiAgICBpc0F0dGFjaGVkID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHJldHVybiBqUXVlcnkuY29udGFpbnMoZWxlbS5vd25lckRvY3VtZW50LCBlbGVtKSB8fCBlbGVtLmdldFJvb3ROb2RlKGNvbXBvc2VkKSA9PT0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgIH07XG4gIH1cblxuICB2YXIgaXNIaWRkZW5XaXRoaW5UcmVlID0gZnVuY3Rpb24gKGVsZW0sIGVsKSB7XG4gICAgLy8gaXNIaWRkZW5XaXRoaW5UcmVlIG1pZ2h0IGJlIGNhbGxlZCBmcm9tIGpRdWVyeSNmaWx0ZXIgZnVuY3Rpb247XG4gICAgLy8gaW4gdGhhdCBjYXNlLCBlbGVtZW50IHdpbGwgYmUgc2Vjb25kIGFyZ3VtZW50XG4gICAgZWxlbSA9IGVsIHx8IGVsZW07IC8vIElubGluZSBzdHlsZSB0cnVtcHMgYWxsXG5cbiAgICByZXR1cm4gZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fCBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiYgLy8gT3RoZXJ3aXNlLCBjaGVjayBjb21wdXRlZCBzdHlsZVxuICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MyAtIDQ1XG4gICAgLy8gRGlzY29ubmVjdGVkIGVsZW1lbnRzIGNhbiBoYXZlIGNvbXB1dGVkIGRpc3BsYXk6IG5vbmUsIHNvIGZpcnN0IGNvbmZpcm0gdGhhdCBlbGVtIGlzXG4gICAgLy8gaW4gdGhlIGRvY3VtZW50LlxuICAgIGlzQXR0YWNoZWQoZWxlbSkgJiYgalF1ZXJ5LmNzcyhlbGVtLCBcImRpc3BsYXlcIikgPT09IFwibm9uZVwiO1xuICB9O1xuXG4gIHZhciBzd2FwID0gZnVuY3Rpb24gKGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrLCBhcmdzKSB7XG4gICAgdmFyIHJldCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgb2xkID0ge307IC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuXG4gICAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgIG9sZFtuYW1lXSA9IGVsZW0uc3R5bGVbbmFtZV07XG4gICAgICBlbGVtLnN0eWxlW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXQgPSBjYWxsYmFjay5hcHBseShlbGVtLCBhcmdzIHx8IFtdKTsgLy8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG5cbiAgICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgZWxlbS5zdHlsZVtuYW1lXSA9IG9sZFtuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFkanVzdENTUyhlbGVtLCBwcm9wLCB2YWx1ZVBhcnRzLCB0d2Vlbikge1xuICAgIHZhciBhZGp1c3RlZCxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIG1heEl0ZXJhdGlvbnMgPSAyMCxcbiAgICAgICAgY3VycmVudFZhbHVlID0gdHdlZW4gPyBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHdlZW4uY3VyKCk7XG4gICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBqUXVlcnkuY3NzKGVsZW0sIHByb3AsIFwiXCIpO1xuICAgIH0sXG4gICAgICAgIGluaXRpYWwgPSBjdXJyZW50VmFsdWUoKSxcbiAgICAgICAgdW5pdCA9IHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0c1szXSB8fCAoalF1ZXJ5LmNzc051bWJlcltwcm9wXSA/IFwiXCIgOiBcInB4XCIpLFxuICAgICAgICAvLyBTdGFydGluZyB2YWx1ZSBjb21wdXRhdGlvbiBpcyByZXF1aXJlZCBmb3IgcG90ZW50aWFsIHVuaXQgbWlzbWF0Y2hlc1xuICAgIGluaXRpYWxJblVuaXQgPSBlbGVtLm5vZGVUeXBlICYmIChqUXVlcnkuY3NzTnVtYmVyW3Byb3BdIHx8IHVuaXQgIT09IFwicHhcIiAmJiAraW5pdGlhbCkgJiYgcmNzc051bS5leGVjKGpRdWVyeS5jc3MoZWxlbSwgcHJvcCkpO1xuXG4gICAgaWYgKGluaXRpYWxJblVuaXQgJiYgaW5pdGlhbEluVW5pdFszXSAhPT0gdW5pdCkge1xuICAgICAgLy8gU3VwcG9ydDogRmlyZWZveCA8PTU0XG4gICAgICAvLyBIYWx2ZSB0aGUgaXRlcmF0aW9uIHRhcmdldCB2YWx1ZSB0byBwcmV2ZW50IGludGVyZmVyZW5jZSBmcm9tIENTUyB1cHBlciBib3VuZHMgKGdoLTIxNDQpXG4gICAgICBpbml0aWFsID0gaW5pdGlhbCAvIDI7IC8vIFRydXN0IHVuaXRzIHJlcG9ydGVkIGJ5IGpRdWVyeS5jc3NcblxuICAgICAgdW5pdCA9IHVuaXQgfHwgaW5pdGlhbEluVW5pdFszXTsgLy8gSXRlcmF0aXZlbHkgYXBwcm94aW1hdGUgZnJvbSBhIG5vbnplcm8gc3RhcnRpbmcgcG9pbnRcblxuICAgICAgaW5pdGlhbEluVW5pdCA9ICtpbml0aWFsIHx8IDE7XG5cbiAgICAgIHdoaWxlIChtYXhJdGVyYXRpb25zLS0pIHtcbiAgICAgICAgLy8gRXZhbHVhdGUgYW5kIHVwZGF0ZSBvdXIgYmVzdCBndWVzcyAoZG91YmxpbmcgZ3Vlc3NlcyB0aGF0IHplcm8gb3V0KS5cbiAgICAgICAgLy8gRmluaXNoIGlmIHRoZSBzY2FsZSBlcXVhbHMgb3IgY3Jvc3NlcyAxIChtYWtpbmcgdGhlIG9sZCpuZXcgcHJvZHVjdCBub24tcG9zaXRpdmUpLlxuICAgICAgICBqUXVlcnkuc3R5bGUoZWxlbSwgcHJvcCwgaW5pdGlhbEluVW5pdCArIHVuaXQpO1xuXG4gICAgICAgIGlmICgoMSAtIHNjYWxlKSAqICgxIC0gKHNjYWxlID0gY3VycmVudFZhbHVlKCkgLyBpbml0aWFsIHx8IDAuNSkpIDw9IDApIHtcbiAgICAgICAgICBtYXhJdGVyYXRpb25zID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRpYWxJblVuaXQgPSBpbml0aWFsSW5Vbml0IC8gc2NhbGU7XG4gICAgICB9XG5cbiAgICAgIGluaXRpYWxJblVuaXQgPSBpbml0aWFsSW5Vbml0ICogMjtcbiAgICAgIGpRdWVyeS5zdHlsZShlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCk7IC8vIE1ha2Ugc3VyZSB3ZSB1cGRhdGUgdGhlIHR3ZWVuIHByb3BlcnRpZXMgbGF0ZXIgb25cblxuICAgICAgdmFsdWVQYXJ0cyA9IHZhbHVlUGFydHMgfHwgW107XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlUGFydHMpIHtcbiAgICAgIGluaXRpYWxJblVuaXQgPSAraW5pdGlhbEluVW5pdCB8fCAraW5pdGlhbCB8fCAwOyAvLyBBcHBseSByZWxhdGl2ZSBvZmZzZXQgKCs9Ly09KSBpZiBzcGVjaWZpZWRcblxuICAgICAgYWRqdXN0ZWQgPSB2YWx1ZVBhcnRzWzFdID8gaW5pdGlhbEluVW5pdCArICh2YWx1ZVBhcnRzWzFdICsgMSkgKiB2YWx1ZVBhcnRzWzJdIDogK3ZhbHVlUGFydHNbMl07XG5cbiAgICAgIGlmICh0d2Vlbikge1xuICAgICAgICB0d2Vlbi51bml0ID0gdW5pdDtcbiAgICAgICAgdHdlZW4uc3RhcnQgPSBpbml0aWFsSW5Vbml0O1xuICAgICAgICB0d2Vlbi5lbmQgPSBhZGp1c3RlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWRqdXN0ZWQ7XG4gIH1cblxuICB2YXIgZGVmYXVsdERpc3BsYXlNYXAgPSB7fTtcblxuICBmdW5jdGlvbiBnZXREZWZhdWx0RGlzcGxheShlbGVtKSB7XG4gICAgdmFyIHRlbXAsXG4gICAgICAgIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudCxcbiAgICAgICAgbm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLFxuICAgICAgICBkaXNwbGF5ID0gZGVmYXVsdERpc3BsYXlNYXBbbm9kZU5hbWVdO1xuXG4gICAgaWYgKGRpc3BsYXkpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5O1xuICAgIH1cblxuICAgIHRlbXAgPSBkb2MuYm9keS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlRWxlbWVudChub2RlTmFtZSkpO1xuICAgIGRpc3BsYXkgPSBqUXVlcnkuY3NzKHRlbXAsIFwiZGlzcGxheVwiKTtcbiAgICB0ZW1wLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcCk7XG5cbiAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgZGVmYXVsdERpc3BsYXlNYXBbbm9kZU5hbWVdID0gZGlzcGxheTtcbiAgICByZXR1cm4gZGlzcGxheTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dIaWRlKGVsZW1lbnRzLCBzaG93KSB7XG4gICAgdmFyIGRpc3BsYXksXG4gICAgICAgIGVsZW0sXG4gICAgICAgIHZhbHVlcyA9IFtdLFxuICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aDsgLy8gRGV0ZXJtaW5lIG5ldyBkaXNwbGF5IHZhbHVlIGZvciBlbGVtZW50cyB0aGF0IG5lZWQgdG8gY2hhbmdlXG5cbiAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGVsZW0gPSBlbGVtZW50c1tpbmRleF07XG5cbiAgICAgIGlmICghZWxlbS5zdHlsZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcblxuICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgLy8gU2luY2Ugd2UgZm9yY2UgdmlzaWJpbGl0eSB1cG9uIGNhc2NhZGUtaGlkZGVuIGVsZW1lbnRzLCBhbiBpbW1lZGlhdGUgKGFuZCBzbG93KVxuICAgICAgICAvLyBjaGVjayBpcyByZXF1aXJlZCBpbiB0aGlzIGZpcnN0IGxvb3AgdW5sZXNzIHdlIGhhdmUgYSBub25lbXB0eSBkaXNwbGF5IHZhbHVlIChlaXRoZXJcbiAgICAgICAgLy8gaW5saW5lIG9yIGFib3V0LXRvLWJlLXJlc3RvcmVkKVxuICAgICAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gZGF0YVByaXYuZ2V0KGVsZW0sIFwiZGlzcGxheVwiKSB8fCBudWxsO1xuXG4gICAgICAgICAgaWYgKCF2YWx1ZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKGVsZW0pKSB7XG4gICAgICAgICAgdmFsdWVzW2luZGV4XSA9IGdldERlZmF1bHREaXNwbGF5KGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGlzcGxheSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gXCJub25lXCI7IC8vIFJlbWVtYmVyIHdoYXQgd2UncmUgb3ZlcndyaXRpbmdcblxuICAgICAgICAgIGRhdGFQcml2LnNldChlbGVtLCBcImRpc3BsYXlcIiwgZGlzcGxheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIFNldCB0aGUgZGlzcGxheSBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZWNvbmQgbG9vcCB0byBhdm9pZCBjb25zdGFudCByZWZsb3dcblxuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAodmFsdWVzW2luZGV4XSAhPSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnRzW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gdmFsdWVzW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cblxuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2hvd0hpZGUodGhpcywgdHJ1ZSk7XG4gICAgfSxcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2hvd0hpZGUodGhpcyk7XG4gICAgfSxcbiAgICB0b2dnbGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc0hpZGRlbldpdGhpblRyZWUodGhpcykpIHtcbiAgICAgICAgICBqUXVlcnkodGhpcykuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGpRdWVyeSh0aGlzKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHZhciByY2hlY2thYmxlVHlwZSA9IC9eKD86Y2hlY2tib3h8cmFkaW8pJC9pO1xuICB2YXIgcnRhZ05hbWUgPSAvPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2k7XG4gIHZhciByc2NyaXB0VHlwZSA9IC9eJHxebW9kdWxlJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2k7IC8vIFdlIGhhdmUgdG8gY2xvc2UgdGhlc2UgdGFncyB0byBzdXBwb3J0IFhIVE1MICgjMTMyMDApXG5cbiAgdmFyIHdyYXBNYXAgPSB7XG4gICAgLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbiAgICBvcHRpb246IFsxLCBcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIiwgXCI8L3NlbGVjdD5cIl0sXG4gICAgLy8gWEhUTUwgcGFyc2VycyBkbyBub3QgbWFnaWNhbGx5IGluc2VydCBlbGVtZW50cyBpbiB0aGVcbiAgICAvLyBzYW1lIHdheSB0aGF0IHRhZyBzb3VwIHBhcnNlcnMgZG8uIFNvIHdlIGNhbm5vdCBzaG9ydGVuXG4gICAgLy8gdGhpcyBieSBvbWl0dGluZyA8dGJvZHk+IG9yIG90aGVyIHJlcXVpcmVkIGVsZW1lbnRzLlxuICAgIHRoZWFkOiBbMSwgXCI8dGFibGU+XCIsIFwiPC90YWJsZT5cIl0sXG4gICAgY29sOiBbMiwgXCI8dGFibGU+PGNvbGdyb3VwPlwiLCBcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sXG4gICAgdHI6IFsyLCBcIjx0YWJsZT48dGJvZHk+XCIsIFwiPC90Ym9keT48L3RhYmxlPlwiXSxcbiAgICB0ZDogWzMsIFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsIFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLFxuICAgIF9kZWZhdWx0OiBbMCwgXCJcIiwgXCJcIl1cbiAgfTsgLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcblxuICB3cmFwTWFwLm9wdGdyb3VwID0gd3JhcE1hcC5vcHRpb247XG4gIHdyYXBNYXAudGJvZHkgPSB3cmFwTWFwLnRmb290ID0gd3JhcE1hcC5jb2xncm91cCA9IHdyYXBNYXAuY2FwdGlvbiA9IHdyYXBNYXAudGhlYWQ7XG4gIHdyYXBNYXAudGggPSB3cmFwTWFwLnRkO1xuXG4gIGZ1bmN0aW9uIGdldEFsbChjb250ZXh0LCB0YWcpIHtcbiAgICAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG4gICAgLy8gVXNlIHR5cGVvZiB0byBhdm9pZCB6ZXJvLWFyZ3VtZW50IG1ldGhvZCBpbnZvY2F0aW9uIG9uIGhvc3Qgb2JqZWN0cyAoIzE1MTUxKVxuICAgIHZhciByZXQ7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldCA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnIHx8IFwiKlwiKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldCA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCh0YWcgfHwgXCIqXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGFnID09PSB1bmRlZmluZWQgfHwgdGFnICYmIG5vZGVOYW1lKGNvbnRleHQsIHRhZykpIHtcbiAgICAgIHJldHVybiBqUXVlcnkubWVyZ2UoW2NvbnRleHRdLCByZXQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0gLy8gTWFyayBzY3JpcHRzIGFzIGhhdmluZyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkXG5cblxuICBmdW5jdGlvbiBzZXRHbG9iYWxFdmFsKGVsZW1zLCByZWZFbGVtZW50cykge1xuICAgIHZhciBpID0gMCxcbiAgICAgICAgbCA9IGVsZW1zLmxlbmd0aDtcblxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBkYXRhUHJpdi5zZXQoZWxlbXNbaV0sIFwiZ2xvYmFsRXZhbFwiLCAhcmVmRWxlbWVudHMgfHwgZGF0YVByaXYuZ2V0KHJlZkVsZW1lbnRzW2ldLCBcImdsb2JhbEV2YWxcIikpO1xuICAgIH1cbiAgfVxuXG4gIHZhciByaHRtbCA9IC88fCYjP1xcdys7LztcblxuICBmdW5jdGlvbiBidWlsZEZyYWdtZW50KGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQpIHtcbiAgICB2YXIgZWxlbSxcbiAgICAgICAgdG1wLFxuICAgICAgICB0YWcsXG4gICAgICAgIHdyYXAsXG4gICAgICAgIGF0dGFjaGVkLFxuICAgICAgICBqLFxuICAgICAgICBmcmFnbWVudCA9IGNvbnRleHQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICBub2RlcyA9IFtdLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbCA9IGVsZW1zLmxlbmd0aDtcblxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBlbGVtID0gZWxlbXNbaV07XG5cbiAgICAgIGlmIChlbGVtIHx8IGVsZW0gPT09IDApIHtcbiAgICAgICAgLy8gQWRkIG5vZGVzIGRpcmVjdGx5XG4gICAgICAgIGlmICh0b1R5cGUoZWxlbSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcbiAgICAgICAgICAvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG4gICAgICAgICAgalF1ZXJ5Lm1lcmdlKG5vZGVzLCBlbGVtLm5vZGVUeXBlID8gW2VsZW1dIDogZWxlbSk7IC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxuICAgICAgICB9IGVsc2UgaWYgKCFyaHRtbC50ZXN0KGVsZW0pKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjb250ZXh0LmNyZWF0ZVRleHROb2RlKGVsZW0pKTsgLy8gQ29udmVydCBodG1sIGludG8gRE9NIG5vZGVzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG1wID0gdG1wIHx8IGZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRleHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7IC8vIERlc2VyaWFsaXplIGEgc3RhbmRhcmQgcmVwcmVzZW50YXRpb25cblxuICAgICAgICAgIHRhZyA9IChydGFnTmFtZS5leGVjKGVsZW0pIHx8IFtcIlwiLCBcIlwiXSlbMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB3cmFwID0gd3JhcE1hcFt0YWddIHx8IHdyYXBNYXAuX2RlZmF1bHQ7XG4gICAgICAgICAgdG1wLmlubmVySFRNTCA9IHdyYXBbMV0gKyBqUXVlcnkuaHRtbFByZWZpbHRlcihlbGVtKSArIHdyYXBbMl07IC8vIERlc2NlbmQgdGhyb3VnaCB3cmFwcGVycyB0byB0aGUgcmlnaHQgY29udGVudFxuXG4gICAgICAgICAgaiA9IHdyYXBbMF07XG5cbiAgICAgICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgICAgICB0bXAgPSB0bXAubGFzdENoaWxkO1xuICAgICAgICAgIH0gLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG4gICAgICAgICAgLy8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXG5cbiAgICAgICAgICBqUXVlcnkubWVyZ2Uobm9kZXMsIHRtcC5jaGlsZE5vZGVzKTsgLy8gUmVtZW1iZXIgdGhlIHRvcC1sZXZlbCBjb250YWluZXJcblxuICAgICAgICAgIHRtcCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7IC8vIEVuc3VyZSB0aGUgY3JlYXRlZCBub2RlcyBhcmUgb3JwaGFuZWQgKCMxMjM5MilcblxuICAgICAgICAgIHRtcC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIFJlbW92ZSB3cmFwcGVyIGZyb20gZnJhZ21lbnRcblxuXG4gICAgZnJhZ21lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGkgPSAwO1xuXG4gICAgd2hpbGUgKGVsZW0gPSBub2Rlc1tpKytdKSB7XG4gICAgICAvLyBTa2lwIGVsZW1lbnRzIGFscmVhZHkgaW4gdGhlIGNvbnRleHQgY29sbGVjdGlvbiAodHJhYy00MDg3KVxuICAgICAgaWYgKHNlbGVjdGlvbiAmJiBqUXVlcnkuaW5BcnJheShlbGVtLCBzZWxlY3Rpb24pID4gLTEpIHtcbiAgICAgICAgaWYgKGlnbm9yZWQpIHtcbiAgICAgICAgICBpZ25vcmVkLnB1c2goZWxlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXR0YWNoZWQgPSBpc0F0dGFjaGVkKGVsZW0pOyAvLyBBcHBlbmQgdG8gZnJhZ21lbnRcblxuICAgICAgdG1wID0gZ2V0QWxsKGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW0pLCBcInNjcmlwdFwiKTsgLy8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXG4gICAgICBpZiAoYXR0YWNoZWQpIHtcbiAgICAgICAgc2V0R2xvYmFsRXZhbCh0bXApO1xuICAgICAgfSAvLyBDYXB0dXJlIGV4ZWN1dGFibGVzXG5cblxuICAgICAgaWYgKHNjcmlwdHMpIHtcbiAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGVsZW0gPSB0bXBbaisrXSkge1xuICAgICAgICAgIGlmIChyc2NyaXB0VHlwZS50ZXN0KGVsZW0udHlwZSB8fCBcIlwiKSkge1xuICAgICAgICAgICAgc2NyaXB0cy5wdXNoKGVsZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICBkaXYgPSBmcmFnbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxcbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcbiAgICAvLyBDaGVjayBzdGF0ZSBsb3N0IGlmIHRoZSBuYW1lIGlzIHNldCAoIzExMjE3KVxuICAgIC8vIFN1cHBvcnQ6IFdpbmRvd3MgV2ViIEFwcHMgKFdXQSlcbiAgICAvLyBgbmFtZWAgYW5kIGB0eXBlYCBtdXN0IHVzZSAuc2V0QXR0cmlidXRlIGZvciBXV0EgKCMxNDkwMSlcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidFwiKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpOyAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4xIG9ubHlcbiAgICAvLyBPbGRlciBXZWJLaXQgZG9lc24ndCBjbG9uZSBjaGVja2VkIHN0YXRlIGNvcnJlY3RseSBpbiBmcmFnbWVudHNcblxuICAgIHN1cHBvcnQuY2hlY2tDbG9uZSA9IGRpdi5jbG9uZU5vZGUodHJ1ZSkuY2xvbmVOb2RlKHRydWUpLmxhc3RDaGlsZC5jaGVja2VkOyAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbiAgICAvLyBNYWtlIHN1cmUgdGV4dGFyZWEgKGFuZCBjaGVja2JveCkgZGVmYXVsdFZhbHVlIGlzIHByb3Blcmx5IGNsb25lZFxuXG4gICAgZGl2LmlubmVySFRNTCA9IFwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiO1xuICAgIHN1cHBvcnQubm9DbG9uZUNoZWNrZWQgPSAhIWRpdi5jbG9uZU5vZGUodHJ1ZSkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZTtcbiAgfSkoKTtcblxuICB2YXIgcmtleUV2ZW50ID0gL15rZXkvLFxuICAgICAgcm1vdXNlRXZlbnQgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sXG4gICAgICBydHlwZW5hbWVzcGFjZSA9IC9eKFteLl0qKSg/OlxcLiguKyl8KS87XG5cbiAgZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMStcbiAgLy8gZm9jdXMoKSBhbmQgYmx1cigpIGFyZSBhc3luY2hyb25vdXMsIGV4Y2VwdCB3aGVuIHRoZXkgYXJlIG5vLW9wLlxuICAvLyBTbyBleHBlY3QgZm9jdXMgdG8gYmUgc3luY2hyb25vdXMgd2hlbiB0aGUgZWxlbWVudCBpcyBhbHJlYWR5IGFjdGl2ZSxcbiAgLy8gYW5kIGJsdXIgdG8gYmUgc3luY2hyb25vdXMgd2hlbiB0aGUgZWxlbWVudCBpcyBub3QgYWxyZWFkeSBhY3RpdmUuXG4gIC8vIChmb2N1cyBhbmQgYmx1ciBhcmUgYWx3YXlzIHN5bmNocm9ub3VzIGluIG90aGVyIHN1cHBvcnRlZCBicm93c2VycyxcbiAgLy8gdGhpcyBqdXN0IGRlZmluZXMgd2hlbiB3ZSBjYW4gY291bnQgb24gaXQpLlxuXG5cbiAgZnVuY3Rpb24gZXhwZWN0U3luYyhlbGVtLCB0eXBlKSB7XG4gICAgcmV0dXJuIGVsZW0gPT09IHNhZmVBY3RpdmVFbGVtZW50KCkgPT09ICh0eXBlID09PSBcImZvY3VzXCIpO1xuICB9IC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gIC8vIEFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGNhbiB0aHJvdyB1bmV4cGVjdGVkbHlcbiAgLy8gaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEzMzkzXG5cblxuICBmdW5jdGlvbiBzYWZlQWN0aXZlRWxlbWVudCgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9XG5cbiAgZnVuY3Rpb24gb24oZWxlbSwgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgb25lKSB7XG4gICAgdmFyIG9yaWdGbiwgdHlwZTsgLy8gVHlwZXMgY2FuIGJlIGEgbWFwIG9mIHR5cGVzL2hhbmRsZXJzXG5cbiAgICBpZiAodHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAvLyAoIHR5cGVzLU9iamVjdCwgc2VsZWN0b3IsIGRhdGEgKVxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyAoIHR5cGVzLU9iamVjdCwgZGF0YSApXG4gICAgICAgIGRhdGEgPSBkYXRhIHx8IHNlbGVjdG9yO1xuICAgICAgICBzZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZm9yICh0eXBlIGluIHR5cGVzKSB7XG4gICAgICAgIG9uKGVsZW0sIHR5cGUsIHNlbGVjdG9yLCBkYXRhLCB0eXBlc1t0eXBlXSwgb25lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuXG4gICAgaWYgKGRhdGEgPT0gbnVsbCAmJiBmbiA9PSBudWxsKSB7XG4gICAgICAvLyAoIHR5cGVzLCBmbiApXG4gICAgICBmbiA9IHNlbGVjdG9yO1xuICAgICAgZGF0YSA9IHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAoZm4gPT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyAoIHR5cGVzLCBzZWxlY3RvciwgZm4gKVxuICAgICAgICBmbiA9IGRhdGE7XG4gICAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAoIHR5cGVzLCBkYXRhLCBmbiApXG4gICAgICAgIGZuID0gZGF0YTtcbiAgICAgICAgZGF0YSA9IHNlbGVjdG9yO1xuICAgICAgICBzZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZm4gPT09IGZhbHNlKSB7XG4gICAgICBmbiA9IHJldHVybkZhbHNlO1xuICAgIH0gZWxzZSBpZiAoIWZuKSB7XG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG5cbiAgICBpZiAob25lID09PSAxKSB7XG4gICAgICBvcmlnRm4gPSBmbjtcblxuICAgICAgZm4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2FuIHVzZSBhbiBlbXB0eSBzZXQsIHNpbmNlIGV2ZW50IGNvbnRhaW5zIHRoZSBpbmZvXG4gICAgICAgIGpRdWVyeSgpLm9mZihldmVudCk7XG4gICAgICAgIHJldHVybiBvcmlnRm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07IC8vIFVzZSBzYW1lIGd1aWQgc28gY2FsbGVyIGNhbiByZW1vdmUgdXNpbmcgb3JpZ0ZuXG5cblxuICAgICAgZm4uZ3VpZCA9IG9yaWdGbi5ndWlkIHx8IChvcmlnRm4uZ3VpZCA9IGpRdWVyeS5ndWlkKyspO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgalF1ZXJ5LmV2ZW50LmFkZCh0aGlzLCB0eXBlcywgZm4sIGRhdGEsIHNlbGVjdG9yKTtcbiAgICB9KTtcbiAgfVxuICAvKlxuICAgKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBtYW5hZ2luZyBldmVudHMgLS0gbm90IHBhcnQgb2YgdGhlIHB1YmxpYyBpbnRlcmZhY2UuXG4gICAqIFByb3BzIHRvIERlYW4gRWR3YXJkcycgYWRkRXZlbnQgbGlicmFyeSBmb3IgbWFueSBvZiB0aGUgaWRlYXMuXG4gICAqL1xuXG5cbiAgalF1ZXJ5LmV2ZW50ID0ge1xuICAgIGdsb2JhbDoge30sXG4gICAgYWRkOiBmdW5jdGlvbiAoZWxlbSwgdHlwZXMsIGhhbmRsZXIsIGRhdGEsIHNlbGVjdG9yKSB7XG4gICAgICB2YXIgaGFuZGxlT2JqSW4sXG4gICAgICAgICAgZXZlbnRIYW5kbGUsXG4gICAgICAgICAgdG1wLFxuICAgICAgICAgIGV2ZW50cyxcbiAgICAgICAgICB0LFxuICAgICAgICAgIGhhbmRsZU9iaixcbiAgICAgICAgICBzcGVjaWFsLFxuICAgICAgICAgIGhhbmRsZXJzLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbmFtZXNwYWNlcyxcbiAgICAgICAgICBvcmlnVHlwZSxcbiAgICAgICAgICBlbGVtRGF0YSA9IGRhdGFQcml2LmdldChlbGVtKTsgLy8gRG9uJ3QgYXR0YWNoIGV2ZW50cyB0byBub0RhdGEgb3IgdGV4dC9jb21tZW50IG5vZGVzIChidXQgYWxsb3cgcGxhaW4gb2JqZWN0cylcblxuICAgICAgaWYgKCFlbGVtRGF0YSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIENhbGxlciBjYW4gcGFzcyBpbiBhbiBvYmplY3Qgb2YgY3VzdG9tIGRhdGEgaW4gbGlldSBvZiB0aGUgaGFuZGxlclxuXG5cbiAgICAgIGlmIChoYW5kbGVyLmhhbmRsZXIpIHtcbiAgICAgICAgaGFuZGxlT2JqSW4gPSBoYW5kbGVyO1xuICAgICAgICBoYW5kbGVyID0gaGFuZGxlT2JqSW4uaGFuZGxlcjtcbiAgICAgICAgc2VsZWN0b3IgPSBoYW5kbGVPYmpJbi5zZWxlY3RvcjtcbiAgICAgIH0gLy8gRW5zdXJlIHRoYXQgaW52YWxpZCBzZWxlY3RvcnMgdGhyb3cgZXhjZXB0aW9ucyBhdCBhdHRhY2ggdGltZVxuICAgICAgLy8gRXZhbHVhdGUgYWdhaW5zdCBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBlbGVtIGlzIGEgbm9uLWVsZW1lbnQgbm9kZSAoZS5nLiwgZG9jdW1lbnQpXG5cblxuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3Rvcihkb2N1bWVudEVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICAgIH0gLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGhhbmRsZXIgaGFzIGEgdW5pcXVlIElELCB1c2VkIHRvIGZpbmQvcmVtb3ZlIGl0IGxhdGVyXG5cblxuICAgICAgaWYgKCFoYW5kbGVyLmd1aWQpIHtcbiAgICAgICAgaGFuZGxlci5ndWlkID0galF1ZXJ5Lmd1aWQrKztcbiAgICAgIH0gLy8gSW5pdCB0aGUgZWxlbWVudCdzIGV2ZW50IHN0cnVjdHVyZSBhbmQgbWFpbiBoYW5kbGVyLCBpZiB0aGlzIGlzIHRoZSBmaXJzdFxuXG5cbiAgICAgIGlmICghKGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cykpIHtcbiAgICAgICAgZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghKGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlKSkge1xuICAgICAgICBldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy8gRGlzY2FyZCB0aGUgc2Vjb25kIGV2ZW50IG9mIGEgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoKSBhbmRcbiAgICAgICAgICAvLyB3aGVuIGFuIGV2ZW50IGlzIGNhbGxlZCBhZnRlciBhIHBhZ2UgaGFzIHVubG9hZGVkXG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIgJiYgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCAhPT0gZS50eXBlID8galF1ZXJ5LmV2ZW50LmRpc3BhdGNoLmFwcGx5KGVsZW0sIGFyZ3VtZW50cykgOiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgICB9IC8vIEhhbmRsZSBtdWx0aXBsZSBldmVudHMgc2VwYXJhdGVkIGJ5IGEgc3BhY2VcblxuXG4gICAgICB0eXBlcyA9ICh0eXBlcyB8fCBcIlwiKS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXCJcIl07XG4gICAgICB0ID0gdHlwZXMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAodC0tKSB7XG4gICAgICAgIHRtcCA9IHJ0eXBlbmFtZXNwYWNlLmV4ZWModHlwZXNbdF0pIHx8IFtdO1xuICAgICAgICB0eXBlID0gb3JpZ1R5cGUgPSB0bXBbMV07XG4gICAgICAgIG5hbWVzcGFjZXMgPSAodG1wWzJdIHx8IFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCk7IC8vIFRoZXJlICptdXN0KiBiZSBhIHR5cGUsIG5vIGF0dGFjaGluZyBuYW1lc3BhY2Utb25seSBoYW5kbGVyc1xuXG4gICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIElmIGV2ZW50IGNoYW5nZXMgaXRzIHR5cGUsIHVzZSB0aGUgc3BlY2lhbCBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNoYW5nZWQgdHlwZVxuXG5cbiAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9OyAvLyBJZiBzZWxlY3RvciBkZWZpbmVkLCBkZXRlcm1pbmUgc3BlY2lhbCBldmVudCBhcGkgdHlwZSwgb3RoZXJ3aXNlIGdpdmVuIHR5cGVcblxuICAgICAgICB0eXBlID0gKHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlKSB8fCB0eXBlOyAvLyBVcGRhdGUgc3BlY2lhbCBiYXNlZCBvbiBuZXdseSByZXNldCB0eXBlXG5cbiAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9OyAvLyBoYW5kbGVPYmogaXMgcGFzc2VkIHRvIGFsbCBldmVudCBoYW5kbGVyc1xuXG4gICAgICAgIGhhbmRsZU9iaiA9IGpRdWVyeS5leHRlbmQoe1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgb3JpZ1R5cGU6IG9yaWdUeXBlLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICBndWlkOiBoYW5kbGVyLmd1aWQsXG4gICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICAgIG5lZWRzQ29udGV4dDogc2VsZWN0b3IgJiYgalF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3Qoc2VsZWN0b3IpLFxuICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKFwiLlwiKVxuICAgICAgICB9LCBoYW5kbGVPYmpJbik7IC8vIEluaXQgdGhlIGV2ZW50IGhhbmRsZXIgcXVldWUgaWYgd2UncmUgdGhlIGZpcnN0XG5cbiAgICAgICAgaWYgKCEoaGFuZGxlcnMgPSBldmVudHNbdHlwZV0pKSB7XG4gICAgICAgICAgaGFuZGxlcnMgPSBldmVudHNbdHlwZV0gPSBbXTtcbiAgICAgICAgICBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50ID0gMDsgLy8gT25seSB1c2UgYWRkRXZlbnRMaXN0ZW5lciBpZiB0aGUgc3BlY2lhbCBldmVudHMgaGFuZGxlciByZXR1cm5zIGZhbHNlXG5cbiAgICAgICAgICBpZiAoIXNwZWNpYWwuc2V0dXAgfHwgc3BlY2lhbC5zZXR1cC5jYWxsKGVsZW0sIGRhdGEsIG5hbWVzcGFjZXMsIGV2ZW50SGFuZGxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChlbGVtLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGV2ZW50SGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BlY2lhbC5hZGQpIHtcbiAgICAgICAgICBzcGVjaWFsLmFkZC5jYWxsKGVsZW0sIGhhbmRsZU9iaik7XG5cbiAgICAgICAgICBpZiAoIWhhbmRsZU9iai5oYW5kbGVyLmd1aWQpIHtcbiAgICAgICAgICAgIGhhbmRsZU9iai5oYW5kbGVyLmd1aWQgPSBoYW5kbGVyLmd1aWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIEFkZCB0byB0aGUgZWxlbWVudCdzIGhhbmRsZXIgbGlzdCwgZGVsZWdhdGVzIGluIGZyb250XG5cblxuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcnMuZGVsZWdhdGVDb3VudCsrLCAwLCBoYW5kbGVPYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlT2JqKTtcbiAgICAgICAgfSAvLyBLZWVwIHRyYWNrIG9mIHdoaWNoIGV2ZW50cyBoYXZlIGV2ZXIgYmVlbiB1c2VkLCBmb3IgZXZlbnQgb3B0aW1pemF0aW9uXG5cblxuICAgICAgICBqUXVlcnkuZXZlbnQuZ2xvYmFsW3R5cGVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIERldGFjaCBhbiBldmVudCBvciBzZXQgb2YgZXZlbnRzIGZyb20gYW4gZWxlbWVudFxuICAgIHJlbW92ZTogZnVuY3Rpb24gKGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBzZWxlY3RvciwgbWFwcGVkVHlwZXMpIHtcbiAgICAgIHZhciBqLFxuICAgICAgICAgIG9yaWdDb3VudCxcbiAgICAgICAgICB0bXAsXG4gICAgICAgICAgZXZlbnRzLFxuICAgICAgICAgIHQsXG4gICAgICAgICAgaGFuZGxlT2JqLFxuICAgICAgICAgIHNwZWNpYWwsXG4gICAgICAgICAgaGFuZGxlcnMsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBuYW1lc3BhY2VzLFxuICAgICAgICAgIG9yaWdUeXBlLFxuICAgICAgICAgIGVsZW1EYXRhID0gZGF0YVByaXYuaGFzRGF0YShlbGVtKSAmJiBkYXRhUHJpdi5nZXQoZWxlbSk7XG5cbiAgICAgIGlmICghZWxlbURhdGEgfHwgIShldmVudHMgPSBlbGVtRGF0YS5ldmVudHMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gT25jZSBmb3IgZWFjaCB0eXBlLm5hbWVzcGFjZSBpbiB0eXBlczsgdHlwZSBtYXkgYmUgb21pdHRlZFxuXG5cbiAgICAgIHR5cGVzID0gKHR5cGVzIHx8IFwiXCIpLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtcIlwiXTtcbiAgICAgIHQgPSB0eXBlcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlICh0LS0pIHtcbiAgICAgICAgdG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyh0eXBlc1t0XSkgfHwgW107XG4gICAgICAgIHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsxXTtcbiAgICAgICAgbmFtZXNwYWNlcyA9ICh0bXBbMl0gfHwgXCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKTsgLy8gVW5iaW5kIGFsbCBldmVudHMgKG9uIHRoaXMgbmFtZXNwYWNlLCBpZiBwcm92aWRlZCkgZm9yIHRoZSBlbGVtZW50XG5cbiAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgZm9yICh0eXBlIGluIGV2ZW50cykge1xuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnJlbW92ZShlbGVtLCB0eXBlICsgdHlwZXNbdF0sIGhhbmRsZXIsIHNlbGVjdG9yLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFt0eXBlXSB8fCB7fTtcbiAgICAgICAgdHlwZSA9IChzZWxlY3RvciA/IHNwZWNpYWwuZGVsZWdhdGVUeXBlIDogc3BlY2lhbC5iaW5kVHlwZSkgfHwgdHlwZTtcbiAgICAgICAgaGFuZGxlcnMgPSBldmVudHNbdHlwZV0gfHwgW107XG4gICAgICAgIHRtcCA9IHRtcFsyXSAmJiBuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKSArIFwiKFxcXFwufCQpXCIpOyAvLyBSZW1vdmUgbWF0Y2hpbmcgZXZlbnRzXG5cbiAgICAgICAgb3JpZ0NvdW50ID0gaiA9IGhhbmRsZXJzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgICAgaGFuZGxlT2JqID0gaGFuZGxlcnNbal07XG5cbiAgICAgICAgICBpZiAoKG1hcHBlZFR5cGVzIHx8IG9yaWdUeXBlID09PSBoYW5kbGVPYmoub3JpZ1R5cGUpICYmICghaGFuZGxlciB8fCBoYW5kbGVyLmd1aWQgPT09IGhhbmRsZU9iai5ndWlkKSAmJiAoIXRtcCB8fCB0bXAudGVzdChoYW5kbGVPYmoubmFtZXNwYWNlKSkgJiYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gaGFuZGxlT2JqLnNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBcIioqXCIgJiYgaGFuZGxlT2JqLnNlbGVjdG9yKSkge1xuICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGosIDEpO1xuXG4gICAgICAgICAgICBpZiAoaGFuZGxlT2JqLnNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQtLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNwZWNpYWwucmVtb3ZlKSB7XG4gICAgICAgICAgICAgIHNwZWNpYWwucmVtb3ZlLmNhbGwoZWxlbSwgaGFuZGxlT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gUmVtb3ZlIGdlbmVyaWMgZXZlbnQgaGFuZGxlciBpZiB3ZSByZW1vdmVkIHNvbWV0aGluZyBhbmQgbm8gbW9yZSBoYW5kbGVycyBleGlzdFxuICAgICAgICAvLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcblxuXG4gICAgICAgIGlmIChvcmlnQ291bnQgJiYgIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICAgIGlmICghc3BlY2lhbC50ZWFyZG93biB8fCBzcGVjaWFsLnRlYXJkb3duLmNhbGwoZWxlbSwgbmFtZXNwYWNlcywgZWxlbURhdGEuaGFuZGxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGpRdWVyeS5yZW1vdmVFdmVudChlbGVtLCB0eXBlLCBlbGVtRGF0YS5oYW5kbGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUmVtb3ZlIGRhdGEgYW5kIHRoZSBleHBhbmRvIGlmIGl0J3Mgbm8gbG9uZ2VyIHVzZWRcblxuXG4gICAgICBpZiAoalF1ZXJ5LmlzRW1wdHlPYmplY3QoZXZlbnRzKSkge1xuICAgICAgICBkYXRhUHJpdi5yZW1vdmUoZWxlbSwgXCJoYW5kbGUgZXZlbnRzXCIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIChuYXRpdmVFdmVudCkge1xuICAgICAgLy8gTWFrZSBhIHdyaXRhYmxlIGpRdWVyeS5FdmVudCBmcm9tIHRoZSBuYXRpdmUgZXZlbnQgb2JqZWN0XG4gICAgICB2YXIgZXZlbnQgPSBqUXVlcnkuZXZlbnQuZml4KG5hdGl2ZUV2ZW50KTtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGosXG4gICAgICAgICAgcmV0LFxuICAgICAgICAgIG1hdGNoZWQsXG4gICAgICAgICAgaGFuZGxlT2JqLFxuICAgICAgICAgIGhhbmRsZXJRdWV1ZSxcbiAgICAgICAgICBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLFxuICAgICAgICAgIGhhbmRsZXJzID0gKGRhdGFQcml2LmdldCh0aGlzLCBcImV2ZW50c1wiKSB8fCB7fSlbZXZlbnQudHlwZV0gfHwgW10sXG4gICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW2V2ZW50LnR5cGVdIHx8IHt9OyAvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxuXG4gICAgICBhcmdzWzBdID0gZXZlbnQ7XG5cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0aGlzOyAvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG5cbiAgICAgIGlmIChzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCh0aGlzLCBldmVudCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRGV0ZXJtaW5lIGhhbmRsZXJzXG5cblxuICAgICAgaGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcywgZXZlbnQsIGhhbmRsZXJzKTsgLy8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblxuICAgICAgaSA9IDA7XG5cbiAgICAgIHdoaWxlICgobWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVtpKytdKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0ID0gbWF0Y2hlZC5lbGVtO1xuICAgICAgICBqID0gMDtcblxuICAgICAgICB3aGlsZSAoKGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbaisrXSkgJiYgIWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgaXMgbmFtZXNwYWNlZCwgdGhlbiBlYWNoIGhhbmRsZXIgaXMgb25seSBpbnZva2VkIGlmIGl0IGlzXG4gICAgICAgICAgLy8gc3BlY2lhbGx5IHVuaXZlcnNhbCBvciBpdHMgbmFtZXNwYWNlcyBhcmUgYSBzdXBlcnNldCBvZiB0aGUgZXZlbnQncy5cbiAgICAgICAgICBpZiAoIWV2ZW50LnJuYW1lc3BhY2UgfHwgaGFuZGxlT2JqLm5hbWVzcGFjZSA9PT0gZmFsc2UgfHwgZXZlbnQucm5hbWVzcGFjZS50ZXN0KGhhbmRsZU9iai5uYW1lc3BhY2UpKSB7XG4gICAgICAgICAgICBldmVudC5oYW5kbGVPYmogPSBoYW5kbGVPYmo7XG4gICAgICAgICAgICBldmVudC5kYXRhID0gaGFuZGxlT2JqLmRhdGE7XG4gICAgICAgICAgICByZXQgPSAoKGpRdWVyeS5ldmVudC5zcGVjaWFsW2hhbmRsZU9iai5vcmlnVHlwZV0gfHwge30pLmhhbmRsZSB8fCBoYW5kbGVPYmouaGFuZGxlcikuYXBwbHkobWF0Y2hlZC5lbGVtLCBhcmdzKTtcblxuICAgICAgICAgICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmICgoZXZlbnQucmVzdWx0ID0gcmV0KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIENhbGwgdGhlIHBvc3REaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGVcblxuXG4gICAgICBpZiAoc3BlY2lhbC5wb3N0RGlzcGF0Y2gpIHtcbiAgICAgICAgc3BlY2lhbC5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudC5yZXN1bHQ7XG4gICAgfSxcbiAgICBoYW5kbGVyczogZnVuY3Rpb24gKGV2ZW50LCBoYW5kbGVycykge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgaGFuZGxlT2JqLFxuICAgICAgICAgIHNlbCxcbiAgICAgICAgICBtYXRjaGVkSGFuZGxlcnMsXG4gICAgICAgICAgbWF0Y2hlZFNlbGVjdG9ycyxcbiAgICAgICAgICBoYW5kbGVyUXVldWUgPSBbXSxcbiAgICAgICAgICBkZWxlZ2F0ZUNvdW50ID0gaGFuZGxlcnMuZGVsZWdhdGVDb3VudCxcbiAgICAgICAgICBjdXIgPSBldmVudC50YXJnZXQ7IC8vIEZpbmQgZGVsZWdhdGUgaGFuZGxlcnNcblxuICAgICAgaWYgKGRlbGVnYXRlQ291bnQgJiYgLy8gU3VwcG9ydDogSUUgPD05XG4gICAgICAvLyBCbGFjay1ob2xlIFNWRyA8dXNlPiBpbnN0YW5jZSB0cmVlcyAodHJhYy0xMzE4MClcbiAgICAgIGN1ci5ub2RlVHlwZSAmJiAvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDJcbiAgICAgIC8vIFN1cHByZXNzIHNwZWMtdmlvbGF0aW5nIGNsaWNrcyBpbmRpY2F0aW5nIGEgbm9uLXByaW1hcnkgcG9pbnRlciBidXR0b24gKHRyYWMtMzg2MSlcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50LXR5cGUtY2xpY2tcbiAgICAgIC8vIFN1cHBvcnQ6IElFIDExIG9ubHlcbiAgICAgIC8vIC4uLmJ1dCBub3QgYXJyb3cga2V5IFwiY2xpY2tzXCIgb2YgcmFkaW8gaW5wdXRzLCB3aGljaCBjYW4gaGF2ZSBgYnV0dG9uYCAtMSAoZ2gtMjM0MylcbiAgICAgICEoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGV2ZW50LmJ1dHRvbiA+PSAxKSkge1xuICAgICAgICBmb3IgKDsgY3VyICE9PSB0aGlzOyBjdXIgPSBjdXIucGFyZW50Tm9kZSB8fCB0aGlzKSB7XG4gICAgICAgICAgLy8gRG9uJ3QgY2hlY2sgbm9uLWVsZW1lbnRzICgjMTMyMDgpXG4gICAgICAgICAgLy8gRG9uJ3QgcHJvY2VzcyBjbGlja3Mgb24gZGlzYWJsZWQgZWxlbWVudHMgKCM2OTExLCAjODE2NSwgIzExMzgyLCAjMTE3NjQpXG4gICAgICAgICAgaWYgKGN1ci5ub2RlVHlwZSA9PT0gMSAmJiAhKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIiAmJiBjdXIuZGlzYWJsZWQgPT09IHRydWUpKSB7XG4gICAgICAgICAgICBtYXRjaGVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgICAgIG1hdGNoZWRTZWxlY3RvcnMgPSB7fTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRlbGVnYXRlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICBoYW5kbGVPYmogPSBoYW5kbGVyc1tpXTsgLy8gRG9uJ3QgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKCMxMzIwMylcblxuICAgICAgICAgICAgICBzZWwgPSBoYW5kbGVPYmouc2VsZWN0b3IgKyBcIiBcIjtcblxuICAgICAgICAgICAgICBpZiAobWF0Y2hlZFNlbGVjdG9yc1tzZWxdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkU2VsZWN0b3JzW3NlbF0gPSBoYW5kbGVPYmoubmVlZHNDb250ZXh0ID8galF1ZXJ5KHNlbCwgdGhpcykuaW5kZXgoY3VyKSA+IC0xIDogalF1ZXJ5LmZpbmQoc2VsLCB0aGlzLCBudWxsLCBbY3VyXSkubGVuZ3RoO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG1hdGNoZWRTZWxlY3RvcnNbc2VsXSkge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRIYW5kbGVycy5wdXNoKGhhbmRsZU9iaik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoZWRIYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgaGFuZGxlclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW06IGN1cixcbiAgICAgICAgICAgICAgICBoYW5kbGVyczogbWF0Y2hlZEhhbmRsZXJzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBBZGQgdGhlIHJlbWFpbmluZyAoZGlyZWN0bHktYm91bmQpIGhhbmRsZXJzXG5cblxuICAgICAgY3VyID0gdGhpcztcblxuICAgICAgaWYgKGRlbGVnYXRlQ291bnQgPCBoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgaGFuZGxlclF1ZXVlLnB1c2goe1xuICAgICAgICAgIGVsZW06IGN1cixcbiAgICAgICAgICBoYW5kbGVyczogaGFuZGxlcnMuc2xpY2UoZGVsZWdhdGVDb3VudClcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoYW5kbGVyUXVldWU7XG4gICAgfSxcbiAgICBhZGRQcm9wOiBmdW5jdGlvbiAobmFtZSwgaG9vaykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGpRdWVyeS5FdmVudC5wcm90b3R5cGUsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGlzRnVuY3Rpb24oaG9vaykgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvb2sodGhpcy5vcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFtuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZpeDogZnVuY3Rpb24gKG9yaWdpbmFsRXZlbnQpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbEV2ZW50W2pRdWVyeS5leHBhbmRvXSA/IG9yaWdpbmFsRXZlbnQgOiBuZXcgalF1ZXJ5LkV2ZW50KG9yaWdpbmFsRXZlbnQpO1xuICAgIH0sXG4gICAgc3BlY2lhbDoge1xuICAgICAgbG9hZDoge1xuICAgICAgICAvLyBQcmV2ZW50IHRyaWdnZXJlZCBpbWFnZS5sb2FkIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHRvIHdpbmRvdy5sb2FkXG4gICAgICAgIG5vQnViYmxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgY2xpY2s6IHtcbiAgICAgICAgLy8gVXRpbGl6ZSBuYXRpdmUgZXZlbnQgdG8gZW5zdXJlIGNvcnJlY3Qgc3RhdGUgZm9yIGNoZWNrYWJsZSBpbnB1dHNcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgLy8gRm9yIG11dHVhbCBjb21wcmVzc2liaWxpdHkgd2l0aCBfZGVmYXVsdCwgcmVwbGFjZSBgdGhpc2AgYWNjZXNzIHdpdGggYSBsb2NhbCB2YXIuXG4gICAgICAgICAgLy8gYHx8IGRhdGFgIGlzIGRlYWQgY29kZSBtZWFudCBvbmx5IHRvIHByZXNlcnZlIHRoZSB2YXJpYWJsZSB0aHJvdWdoIG1pbmlmaWNhdGlvbi5cbiAgICAgICAgICB2YXIgZWwgPSB0aGlzIHx8IGRhdGE7IC8vIENsYWltIHRoZSBmaXJzdCBoYW5kbGVyXG5cbiAgICAgICAgICBpZiAocmNoZWNrYWJsZVR5cGUudGVzdChlbC50eXBlKSAmJiBlbC5jbGljayAmJiBub2RlTmFtZShlbCwgXCJpbnB1dFwiKSkge1xuICAgICAgICAgICAgLy8gZGF0YVByaXYuc2V0KCBlbCwgXCJjbGlja1wiLCAuLi4gKVxuICAgICAgICAgICAgbGV2ZXJhZ2VOYXRpdmUoZWwsIFwiY2xpY2tcIiwgcmV0dXJuVHJ1ZSk7XG4gICAgICAgICAgfSAvLyBSZXR1cm4gZmFsc2UgdG8gYWxsb3cgbm9ybWFsIHByb2Nlc3NpbmcgaW4gdGhlIGNhbGxlclxuXG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgLy8gRm9yIG11dHVhbCBjb21wcmVzc2liaWxpdHkgd2l0aCBfZGVmYXVsdCwgcmVwbGFjZSBgdGhpc2AgYWNjZXNzIHdpdGggYSBsb2NhbCB2YXIuXG4gICAgICAgICAgLy8gYHx8IGRhdGFgIGlzIGRlYWQgY29kZSBtZWFudCBvbmx5IHRvIHByZXNlcnZlIHRoZSB2YXJpYWJsZSB0aHJvdWdoIG1pbmlmaWNhdGlvbi5cbiAgICAgICAgICB2YXIgZWwgPSB0aGlzIHx8IGRhdGE7IC8vIEZvcmNlIHNldHVwIGJlZm9yZSB0cmlnZ2VyaW5nIGEgY2xpY2tcblxuICAgICAgICAgIGlmIChyY2hlY2thYmxlVHlwZS50ZXN0KGVsLnR5cGUpICYmIGVsLmNsaWNrICYmIG5vZGVOYW1lKGVsLCBcImlucHV0XCIpKSB7XG4gICAgICAgICAgICBsZXZlcmFnZU5hdGl2ZShlbCwgXCJjbGlja1wiKTtcbiAgICAgICAgICB9IC8vIFJldHVybiBub24tZmFsc2UgdG8gYWxsb3cgbm9ybWFsIGV2ZW50LXBhdGggcHJvcGFnYXRpb25cblxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEZvciBjcm9zcy1icm93c2VyIGNvbnNpc3RlbmN5LCBzdXBwcmVzcyBuYXRpdmUgLmNsaWNrKCkgb24gbGlua3NcbiAgICAgICAgLy8gQWxzbyBwcmV2ZW50IGl0IGlmIHdlJ3JlIGN1cnJlbnRseSBpbnNpZGUgYSBsZXZlcmFnZWQgbmF0aXZlLWV2ZW50IHN0YWNrXG4gICAgICAgIF9kZWZhdWx0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgIHJldHVybiByY2hlY2thYmxlVHlwZS50ZXN0KHRhcmdldC50eXBlKSAmJiB0YXJnZXQuY2xpY2sgJiYgbm9kZU5hbWUodGFyZ2V0LCBcImlucHV0XCIpICYmIGRhdGFQcml2LmdldCh0YXJnZXQsIFwiY2xpY2tcIikgfHwgbm9kZU5hbWUodGFyZ2V0LCBcImFcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiZWZvcmV1bmxvYWQ6IHtcbiAgICAgICAgcG9zdERpc3BhdGNoOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAvLyBTdXBwb3J0OiBGaXJlZm94IDIwK1xuICAgICAgICAgIC8vIEZpcmVmb3ggZG9lc24ndCBhbGVydCBpZiB0aGUgcmV0dXJuVmFsdWUgZmllbGQgaXMgbm90IHNldC5cbiAgICAgICAgICBpZiAoZXZlbnQucmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZSA9IGV2ZW50LnJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07IC8vIEVuc3VyZSB0aGUgcHJlc2VuY2Ugb2YgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBoYW5kbGVzIG1hbnVhbGx5LXRyaWdnZXJlZFxuICAvLyBzeW50aGV0aWMgZXZlbnRzIGJ5IGludGVycnVwdGluZyBwcm9ncmVzcyB1bnRpbCByZWludm9rZWQgaW4gcmVzcG9uc2UgdG9cbiAgLy8gKm5hdGl2ZSogZXZlbnRzIHRoYXQgaXQgZmlyZXMgZGlyZWN0bHksIGVuc3VyaW5nIHRoYXQgc3RhdGUgY2hhbmdlcyBoYXZlXG4gIC8vIGFscmVhZHkgb2NjdXJyZWQgYmVmb3JlIG90aGVyIGxpc3RlbmVycyBhcmUgaW52b2tlZC5cblxuICBmdW5jdGlvbiBsZXZlcmFnZU5hdGl2ZShlbCwgdHlwZSwgZXhwZWN0U3luYykge1xuICAgIC8vIE1pc3NpbmcgZXhwZWN0U3luYyBpbmRpY2F0ZXMgYSB0cmlnZ2VyIGNhbGwsIHdoaWNoIG11c3QgZm9yY2Ugc2V0dXAgdGhyb3VnaCBqUXVlcnkuZXZlbnQuYWRkXG4gICAgaWYgKCFleHBlY3RTeW5jKSB7XG4gICAgICBpZiAoZGF0YVByaXYuZ2V0KGVsLCB0eXBlKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGpRdWVyeS5ldmVudC5hZGQoZWwsIHR5cGUsIHJldHVyblRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBSZWdpc3RlciB0aGUgY29udHJvbGxlciBhcyBhIHNwZWNpYWwgdW5pdmVyc2FsIGhhbmRsZXIgZm9yIGFsbCBldmVudCBuYW1lc3BhY2VzXG5cblxuICAgIGRhdGFQcml2LnNldChlbCwgdHlwZSwgZmFsc2UpO1xuICAgIGpRdWVyeS5ldmVudC5hZGQoZWwsIHR5cGUsIHtcbiAgICAgIG5hbWVzcGFjZTogZmFsc2UsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIG5vdEFzeW5jLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgc2F2ZWQgPSBkYXRhUHJpdi5nZXQodGhpcywgdHlwZSk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmlzVHJpZ2dlciAmIDEgJiYgdGhpc1t0eXBlXSkge1xuICAgICAgICAgIC8vIEludGVycnVwdCBwcm9jZXNzaW5nIG9mIHRoZSBvdXRlciBzeW50aGV0aWMgLnRyaWdnZXIoKWVkIGV2ZW50XG4gICAgICAgICAgLy8gU2F2ZWQgZGF0YSBzaG91bGQgYmUgZmFsc2UgaW4gc3VjaCBjYXNlcywgYnV0IG1pZ2h0IGJlIGEgbGVmdG92ZXIgY2FwdHVyZSBvYmplY3RcbiAgICAgICAgICAvLyBmcm9tIGFuIGFzeW5jIG5hdGl2ZSBoYW5kbGVyIChnaC00MzUwKVxuICAgICAgICAgIGlmICghc2F2ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBTdG9yZSBhcmd1bWVudHMgZm9yIHVzZSB3aGVuIGhhbmRsaW5nIHRoZSBpbm5lciBuYXRpdmUgZXZlbnRcbiAgICAgICAgICAgIC8vIFRoZXJlIHdpbGwgYWx3YXlzIGJlIGF0IGxlYXN0IG9uZSBhcmd1bWVudCAoYW4gZXZlbnQgb2JqZWN0KSwgc28gdGhpcyBhcnJheVxuICAgICAgICAgICAgLy8gd2lsbCBub3QgYmUgY29uZnVzZWQgd2l0aCBhIGxlZnRvdmVyIGNhcHR1cmUgb2JqZWN0LlxuICAgICAgICAgICAgc2F2ZWQgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBkYXRhUHJpdi5zZXQodGhpcywgdHlwZSwgc2F2ZWQpOyAvLyBUcmlnZ2VyIHRoZSBuYXRpdmUgZXZlbnQgYW5kIGNhcHR1cmUgaXRzIHJlc3VsdFxuICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPD05IC0gMTErXG4gICAgICAgICAgICAvLyBmb2N1cygpIGFuZCBibHVyKCkgYXJlIGFzeW5jaHJvbm91c1xuXG4gICAgICAgICAgICBub3RBc3luYyA9IGV4cGVjdFN5bmModGhpcywgdHlwZSk7XG4gICAgICAgICAgICB0aGlzW3R5cGVdKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBkYXRhUHJpdi5nZXQodGhpcywgdHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChzYXZlZCAhPT0gcmVzdWx0IHx8IG5vdEFzeW5jKSB7XG4gICAgICAgICAgICAgIGRhdGFQcml2LnNldCh0aGlzLCB0eXBlLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNhdmVkICE9PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBvdXRlciBzeW50aGV0aWMgZXZlbnRcbiAgICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9IC8vIElmIHRoaXMgaXMgYW4gaW5uZXIgc3ludGhldGljIGV2ZW50IGZvciBhbiBldmVudCB3aXRoIGEgYnViYmxpbmcgc3Vycm9nYXRlXG4gICAgICAgICAgICAvLyAoZm9jdXMgb3IgYmx1ciksIGFzc3VtZSB0aGF0IHRoZSBzdXJyb2dhdGUgYWxyZWFkeSBwcm9wYWdhdGVkIGZyb20gdHJpZ2dlcmluZyB0aGVcbiAgICAgICAgICAgIC8vIG5hdGl2ZSBldmVudCBhbmQgcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nIGFnYWluIGhlcmUuXG4gICAgICAgICAgICAvLyBUaGlzIHRlY2huaWNhbGx5IGdldHMgdGhlIG9yZGVyaW5nIHdyb25nIHcuci50LiB0byBgLnRyaWdnZXIoKWAgKGluIHdoaWNoIHRoZVxuICAgICAgICAgICAgLy8gYnViYmxpbmcgc3Vycm9nYXRlIHByb3BhZ2F0ZXMgKmFmdGVyKiB0aGUgbm9uLWJ1YmJsaW5nIGJhc2UpLCBidXQgdGhhdCBzZWVtc1xuICAgICAgICAgICAgLy8gbGVzcyBiYWQgdGhhbiBkdXBsaWNhdGlvbi5cblxuICAgICAgICAgIH0gZWxzZSBpZiAoKGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9KS5kZWxlZ2F0ZVR5cGUpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH0gLy8gSWYgdGhpcyBpcyBhIG5hdGl2ZSBldmVudCB0cmlnZ2VyZWQgYWJvdmUsIGV2ZXJ5dGhpbmcgaXMgbm93IGluIG9yZGVyXG4gICAgICAgICAgLy8gRmlyZSBhbiBpbm5lciBzeW50aGV0aWMgZXZlbnQgd2l0aCB0aGUgb3JpZ2luYWwgYXJndW1lbnRzXG5cbiAgICAgICAgfSBlbHNlIGlmIChzYXZlZC5sZW5ndGgpIHtcbiAgICAgICAgICAvLyAuLi5hbmQgY2FwdHVyZSB0aGUgcmVzdWx0XG4gICAgICAgICAgZGF0YVByaXYuc2V0KHRoaXMsIHR5cGUsIHtcbiAgICAgICAgICAgIHZhbHVlOiBqUXVlcnkuZXZlbnQudHJpZ2dlciggLy8gU3VwcG9ydDogSUUgPD05IC0gMTErXG4gICAgICAgICAgICAvLyBFeHRlbmQgd2l0aCB0aGUgcHJvdG90eXBlIHRvIHJlc2V0IHRoZSBhYm92ZSBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgalF1ZXJ5LmV4dGVuZChzYXZlZFswXSwgalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSksIHNhdmVkLnNsaWNlKDEpLCB0aGlzKVxuICAgICAgICAgIH0pOyAvLyBBYm9ydCBoYW5kbGluZyBvZiB0aGUgbmF0aXZlIGV2ZW50XG5cbiAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgalF1ZXJ5LnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKGVsZW0sIHR5cGUsIGhhbmRsZSkge1xuICAgIC8vIFRoaXMgXCJpZlwiIGlzIG5lZWRlZCBmb3IgcGxhaW4gb2JqZWN0c1xuICAgIGlmIChlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGUpO1xuICAgIH1cbiAgfTtcblxuICBqUXVlcnkuRXZlbnQgPSBmdW5jdGlvbiAoc3JjLCBwcm9wcykge1xuICAgIC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCB0aGUgJ25ldycga2V5d29yZFxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBqUXVlcnkuRXZlbnQpKSB7XG4gICAgICByZXR1cm4gbmV3IGpRdWVyeS5FdmVudChzcmMsIHByb3BzKTtcbiAgICB9IC8vIEV2ZW50IG9iamVjdFxuXG5cbiAgICBpZiAoc3JjICYmIHNyYy50eXBlKSB7XG4gICAgICB0aGlzLm9yaWdpbmFsRXZlbnQgPSBzcmM7XG4gICAgICB0aGlzLnR5cGUgPSBzcmMudHlwZTsgLy8gRXZlbnRzIGJ1YmJsaW5nIHVwIHRoZSBkb2N1bWVudCBtYXkgaGF2ZSBiZWVuIG1hcmtlZCBhcyBwcmV2ZW50ZWRcbiAgICAgIC8vIGJ5IGEgaGFuZGxlciBsb3dlciBkb3duIHRoZSB0cmVlOyByZWZsZWN0IHRoZSBjb3JyZWN0IHZhbHVlLlxuXG4gICAgICB0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHNyYy5kZWZhdWx0UHJldmVudGVkIHx8IHNyYy5kZWZhdWx0UHJldmVudGVkID09PSB1bmRlZmluZWQgJiYgLy8gU3VwcG9ydDogQW5kcm9pZCA8PTIuMyBvbmx5XG4gICAgICBzcmMucmV0dXJuVmFsdWUgPT09IGZhbHNlID8gcmV0dXJuVHJ1ZSA6IHJldHVybkZhbHNlOyAvLyBDcmVhdGUgdGFyZ2V0IHByb3BlcnRpZXNcbiAgICAgIC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTYgLSA3IG9ubHlcbiAgICAgIC8vIFRhcmdldCBzaG91bGQgbm90IGJlIGEgdGV4dCBub2RlICgjNTA0LCAjMTMxNDMpXG5cbiAgICAgIHRoaXMudGFyZ2V0ID0gc3JjLnRhcmdldCAmJiBzcmMudGFyZ2V0Lm5vZGVUeXBlID09PSAzID8gc3JjLnRhcmdldC5wYXJlbnROb2RlIDogc3JjLnRhcmdldDtcbiAgICAgIHRoaXMuY3VycmVudFRhcmdldCA9IHNyYy5jdXJyZW50VGFyZ2V0O1xuICAgICAgdGhpcy5yZWxhdGVkVGFyZ2V0ID0gc3JjLnJlbGF0ZWRUYXJnZXQ7IC8vIEV2ZW50IHR5cGVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gc3JjO1xuICAgIH0gLy8gUHV0IGV4cGxpY2l0bHkgcHJvdmlkZWQgcHJvcGVydGllcyBvbnRvIHRoZSBldmVudCBvYmplY3RcblxuXG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBqUXVlcnkuZXh0ZW5kKHRoaXMsIHByb3BzKTtcbiAgICB9IC8vIENyZWF0ZSBhIHRpbWVzdGFtcCBpZiBpbmNvbWluZyBldmVudCBkb2Vzbid0IGhhdmUgb25lXG5cblxuICAgIHRoaXMudGltZVN0YW1wID0gc3JjICYmIHNyYy50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKTsgLy8gTWFyayBpdCBhcyBmaXhlZFxuXG4gICAgdGhpc1tqUXVlcnkuZXhwYW5kb10gPSB0cnVlO1xuICB9OyAvLyBqUXVlcnkuRXZlbnQgaXMgYmFzZWQgb24gRE9NMyBFdmVudHMgYXMgc3BlY2lmaWVkIGJ5IHRoZSBFQ01BU2NyaXB0IExhbmd1YWdlIEJpbmRpbmdcbiAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDMvV0QtRE9NLUxldmVsLTMtRXZlbnRzLTIwMDMwMzMxL2VjbWEtc2NyaXB0LWJpbmRpbmcuaHRtbFxuXG5cbiAgalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogalF1ZXJ5LkV2ZW50LFxuICAgIGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG4gICAgaXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuICAgIGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcbiAgICBpc1NpbXVsYXRlZDogZmFsc2UsXG4gICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuICAgICAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuXG4gICAgICBpZiAoZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuICAgICAgdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cbiAgICAgIGlmIChlICYmICF0aGlzLmlzU2ltdWxhdGVkKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cbiAgICAgIGlmIChlICYmICF0aGlzLmlzU2ltdWxhdGVkKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9OyAvLyBJbmNsdWRlcyBhbGwgY29tbW9uIGV2ZW50IHByb3BzIGluY2x1ZGluZyBLZXlFdmVudCBhbmQgTW91c2VFdmVudCBzcGVjaWZpYyBwcm9wc1xuXG4gIGpRdWVyeS5lYWNoKHtcbiAgICBhbHRLZXk6IHRydWUsXG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgIGNoYW5nZWRUb3VjaGVzOiB0cnVlLFxuICAgIGN0cmxLZXk6IHRydWUsXG4gICAgZGV0YWlsOiB0cnVlLFxuICAgIGV2ZW50UGhhc2U6IHRydWUsXG4gICAgbWV0YUtleTogdHJ1ZSxcbiAgICBwYWdlWDogdHJ1ZSxcbiAgICBwYWdlWTogdHJ1ZSxcbiAgICBzaGlmdEtleTogdHJ1ZSxcbiAgICB2aWV3OiB0cnVlLFxuICAgIFwiY2hhclwiOiB0cnVlLFxuICAgIGNvZGU6IHRydWUsXG4gICAgY2hhckNvZGU6IHRydWUsXG4gICAga2V5OiB0cnVlLFxuICAgIGtleUNvZGU6IHRydWUsXG4gICAgYnV0dG9uOiB0cnVlLFxuICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgY2xpZW50WDogdHJ1ZSxcbiAgICBjbGllbnRZOiB0cnVlLFxuICAgIG9mZnNldFg6IHRydWUsXG4gICAgb2Zmc2V0WTogdHJ1ZSxcbiAgICBwb2ludGVySWQ6IHRydWUsXG4gICAgcG9pbnRlclR5cGU6IHRydWUsXG4gICAgc2NyZWVuWDogdHJ1ZSxcbiAgICBzY3JlZW5ZOiB0cnVlLFxuICAgIHRhcmdldFRvdWNoZXM6IHRydWUsXG4gICAgdG9FbGVtZW50OiB0cnVlLFxuICAgIHRvdWNoZXM6IHRydWUsXG4gICAgd2hpY2g6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjsgLy8gQWRkIHdoaWNoIGZvciBrZXkgZXZlbnRzXG5cbiAgICAgIGlmIChldmVudC53aGljaCA9PSBudWxsICYmIHJrZXlFdmVudC50ZXN0KGV2ZW50LnR5cGUpKSB7XG4gICAgICAgIHJldHVybiBldmVudC5jaGFyQ29kZSAhPSBudWxsID8gZXZlbnQuY2hhckNvZGUgOiBldmVudC5rZXlDb2RlO1xuICAgICAgfSAvLyBBZGQgd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG5cblxuICAgICAgaWYgKCFldmVudC53aGljaCAmJiBidXR0b24gIT09IHVuZGVmaW5lZCAmJiBybW91c2VFdmVudC50ZXN0KGV2ZW50LnR5cGUpKSB7XG4gICAgICAgIGlmIChidXR0b24gJiAxKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnV0dG9uICYgMikge1xuICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ1dHRvbiAmIDQpIHtcbiAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnQud2hpY2g7XG4gICAgfVxuICB9LCBqUXVlcnkuZXZlbnQuYWRkUHJvcCk7XG4gIGpRdWVyeS5lYWNoKHtcbiAgICBmb2N1czogXCJmb2N1c2luXCIsXG4gICAgYmx1cjogXCJmb2N1c291dFwiXG4gIH0sIGZ1bmN0aW9uICh0eXBlLCBkZWxlZ2F0ZVR5cGUpIHtcbiAgICBqUXVlcnkuZXZlbnQuc3BlY2lhbFt0eXBlXSA9IHtcbiAgICAgIC8vIFV0aWxpemUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ2xhaW0gdGhlIGZpcnN0IGhhbmRsZXJcbiAgICAgICAgLy8gZGF0YVByaXYuc2V0KCB0aGlzLCBcImZvY3VzXCIsIC4uLiApXG4gICAgICAgIC8vIGRhdGFQcml2LnNldCggdGhpcywgXCJibHVyXCIsIC4uLiApXG4gICAgICAgIGxldmVyYWdlTmF0aXZlKHRoaXMsIHR5cGUsIGV4cGVjdFN5bmMpOyAvLyBSZXR1cm4gZmFsc2UgdG8gYWxsb3cgbm9ybWFsIHByb2Nlc3NpbmcgaW4gdGhlIGNhbGxlclxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEZvcmNlIHNldHVwIGJlZm9yZSB0cmlnZ2VyXG4gICAgICAgIGxldmVyYWdlTmF0aXZlKHRoaXMsIHR5cGUpOyAvLyBSZXR1cm4gbm9uLWZhbHNlIHRvIGFsbG93IG5vcm1hbCBldmVudC1wYXRoIHByb3BhZ2F0aW9uXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZWdhdGVUeXBlOiBkZWxlZ2F0ZVR5cGVcbiAgICB9O1xuICB9KTsgLy8gQ3JlYXRlIG1vdXNlZW50ZXIvbGVhdmUgZXZlbnRzIHVzaW5nIG1vdXNlb3Zlci9vdXQgYW5kIGV2ZW50LXRpbWUgY2hlY2tzXG4gIC8vIHNvIHRoYXQgZXZlbnQgZGVsZWdhdGlvbiB3b3JrcyBpbiBqUXVlcnkuXG4gIC8vIERvIHRoZSBzYW1lIGZvciBwb2ludGVyZW50ZXIvcG9pbnRlcmxlYXZlIGFuZCBwb2ludGVyb3Zlci9wb2ludGVyb3V0XG4gIC8vXG4gIC8vIFN1cHBvcnQ6IFNhZmFyaSA3IG9ubHlcbiAgLy8gU2FmYXJpIHNlbmRzIG1vdXNlZW50ZXIgdG9vIG9mdGVuOyBzZWU6XG4gIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ3MDI1OFxuICAvLyBmb3IgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBidWcgKGl0IGV4aXN0ZWQgaW4gb2xkZXIgQ2hyb21lIHZlcnNpb25zIGFzIHdlbGwpLlxuXG4gIGpRdWVyeS5lYWNoKHtcbiAgICBtb3VzZWVudGVyOiBcIm1vdXNlb3ZlclwiLFxuICAgIG1vdXNlbGVhdmU6IFwibW91c2VvdXRcIixcbiAgICBwb2ludGVyZW50ZXI6IFwicG9pbnRlcm92ZXJcIixcbiAgICBwb2ludGVybGVhdmU6IFwicG9pbnRlcm91dFwiXG4gIH0sIGZ1bmN0aW9uIChvcmlnLCBmaXgpIHtcbiAgICBqUXVlcnkuZXZlbnQuc3BlY2lhbFtvcmlnXSA9IHtcbiAgICAgIGRlbGVnYXRlVHlwZTogZml4LFxuICAgICAgYmluZFR5cGU6IGZpeCxcbiAgICAgIGhhbmRsZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciByZXQsXG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLFxuICAgICAgICAgICAgcmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQsXG4gICAgICAgICAgICBoYW5kbGVPYmogPSBldmVudC5oYW5kbGVPYmo7IC8vIEZvciBtb3VzZWVudGVyL2xlYXZlIGNhbGwgdGhlIGhhbmRsZXIgaWYgcmVsYXRlZCBpcyBvdXRzaWRlIHRoZSB0YXJnZXQuXG4gICAgICAgIC8vIE5COiBObyByZWxhdGVkVGFyZ2V0IGlmIHRoZSBtb3VzZSBsZWZ0L2VudGVyZWQgdGhlIGJyb3dzZXIgd2luZG93XG5cbiAgICAgICAgaWYgKCFyZWxhdGVkIHx8IHJlbGF0ZWQgIT09IHRhcmdldCAmJiAhalF1ZXJ5LmNvbnRhaW5zKHRhcmdldCwgcmVsYXRlZCkpIHtcbiAgICAgICAgICBldmVudC50eXBlID0gaGFuZGxlT2JqLm9yaWdUeXBlO1xuICAgICAgICAgIHJldCA9IGhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgZXZlbnQudHlwZSA9IGZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIG9uOiBmdW5jdGlvbiAodHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbikge1xuICAgICAgcmV0dXJuIG9uKHRoaXMsIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4pO1xuICAgIH0sXG4gICAgb25lOiBmdW5jdGlvbiAodHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbikge1xuICAgICAgcmV0dXJuIG9uKHRoaXMsIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIDEpO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbiAodHlwZXMsIHNlbGVjdG9yLCBmbikge1xuICAgICAgdmFyIGhhbmRsZU9iaiwgdHlwZTtcblxuICAgICAgaWYgKHR5cGVzICYmIHR5cGVzLnByZXZlbnREZWZhdWx0ICYmIHR5cGVzLmhhbmRsZU9iaikge1xuICAgICAgICAvLyAoIGV2ZW50ICkgIGRpc3BhdGNoZWQgalF1ZXJ5LkV2ZW50XG4gICAgICAgIGhhbmRsZU9iaiA9IHR5cGVzLmhhbmRsZU9iajtcbiAgICAgICAgalF1ZXJ5KHR5cGVzLmRlbGVnYXRlVGFyZ2V0KS5vZmYoaGFuZGxlT2JqLm5hbWVzcGFjZSA/IGhhbmRsZU9iai5vcmlnVHlwZSArIFwiLlwiICsgaGFuZGxlT2JqLm5hbWVzcGFjZSA6IGhhbmRsZU9iai5vcmlnVHlwZSwgaGFuZGxlT2JqLnNlbGVjdG9yLCBoYW5kbGVPYmouaGFuZGxlcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIC8vICggdHlwZXMtb2JqZWN0IFssIHNlbGVjdG9yXSApXG4gICAgICAgIGZvciAodHlwZSBpbiB0eXBlcykge1xuICAgICAgICAgIHRoaXMub2ZmKHR5cGUsIHNlbGVjdG9yLCB0eXBlc1t0eXBlXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdG9yID09PSBmYWxzZSB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAvLyAoIHR5cGVzIFssIGZuXSApXG4gICAgICAgIGZuID0gc2VsZWN0b3I7XG4gICAgICAgIHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm4gPT09IGZhbHNlKSB7XG4gICAgICAgIGZuID0gcmV0dXJuRmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkuZXZlbnQucmVtb3ZlKHRoaXMsIHR5cGVzLCBmbiwgc2VsZWN0b3IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdmFyXG4gIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy8zMjI5XG4gIHJ4aHRtbFRhZyA9IC88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLFxuXG4gIC8qIGVzbGludC1lbmFibGUgKi9cbiAgLy8gU3VwcG9ydDogSUUgPD0xMCAtIDExLCBFZGdlIDEyIC0gMTMgb25seVxuICAvLyBJbiBJRS9FZGdlIHVzaW5nIHJlZ2V4IGdyb3VwcyBoZXJlIGNhdXNlcyBzZXZlcmUgc2xvd2Rvd25zLlxuICAvLyBTZWUgaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy8xNzM2NTEyL1xuICBybm9Jbm5lcmh0bWwgPSAvPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxcbiAgICAgIC8vIGNoZWNrZWQ9XCJjaGVja2VkXCIgb3IgY2hlY2tlZFxuICByY2hlY2tlZCA9IC9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksXG4gICAgICByY2xlYW5TY3JpcHQgPSAvXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7IC8vIFByZWZlciBhIHRib2R5IG92ZXIgaXRzIHBhcmVudCB0YWJsZSBmb3IgY29udGFpbmluZyBuZXcgcm93c1xuXG4gIGZ1bmN0aW9uIG1hbmlwdWxhdGlvblRhcmdldChlbGVtLCBjb250ZW50KSB7XG4gICAgaWYgKG5vZGVOYW1lKGVsZW0sIFwidGFibGVcIikgJiYgbm9kZU5hbWUoY29udGVudC5ub2RlVHlwZSAhPT0gMTEgPyBjb250ZW50IDogY29udGVudC5maXJzdENoaWxkLCBcInRyXCIpKSB7XG4gICAgICByZXR1cm4galF1ZXJ5KGVsZW0pLmNoaWxkcmVuKFwidGJvZHlcIilbMF0gfHwgZWxlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfSAvLyBSZXBsYWNlL3Jlc3RvcmUgdGhlIHR5cGUgYXR0cmlidXRlIG9mIHNjcmlwdCBlbGVtZW50cyBmb3Igc2FmZSBET00gbWFuaXB1bGF0aW9uXG5cblxuICBmdW5jdGlvbiBkaXNhYmxlU2NyaXB0KGVsZW0pIHtcbiAgICBlbGVtLnR5cGUgPSAoZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpICE9PSBudWxsKSArIFwiL1wiICsgZWxlbS50eXBlO1xuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZVNjcmlwdChlbGVtKSB7XG4gICAgaWYgKChlbGVtLnR5cGUgfHwgXCJcIikuc2xpY2UoMCwgNSkgPT09IFwidHJ1ZS9cIikge1xuICAgICAgZWxlbS50eXBlID0gZWxlbS50eXBlLnNsaWNlKDUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZUNvcHlFdmVudChzcmMsIGRlc3QpIHtcbiAgICB2YXIgaSwgbCwgdHlwZSwgcGRhdGFPbGQsIHBkYXRhQ3VyLCB1ZGF0YU9sZCwgdWRhdGFDdXIsIGV2ZW50cztcblxuICAgIGlmIChkZXN0Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyAxLiBDb3B5IHByaXZhdGUgZGF0YTogZXZlbnRzLCBoYW5kbGVycywgZXRjLlxuXG5cbiAgICBpZiAoZGF0YVByaXYuaGFzRGF0YShzcmMpKSB7XG4gICAgICBwZGF0YU9sZCA9IGRhdGFQcml2LmFjY2VzcyhzcmMpO1xuICAgICAgcGRhdGFDdXIgPSBkYXRhUHJpdi5zZXQoZGVzdCwgcGRhdGFPbGQpO1xuICAgICAgZXZlbnRzID0gcGRhdGFPbGQuZXZlbnRzO1xuXG4gICAgICBpZiAoZXZlbnRzKSB7XG4gICAgICAgIGRlbGV0ZSBwZGF0YUN1ci5oYW5kbGU7XG4gICAgICAgIHBkYXRhQ3VyLmV2ZW50cyA9IHt9O1xuXG4gICAgICAgIGZvciAodHlwZSBpbiBldmVudHMpIHtcbiAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXZlbnRzW3R5cGVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LmFkZChkZXN0LCB0eXBlLCBldmVudHNbdHlwZV1baV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gMi4gQ29weSB1c2VyIGRhdGFcblxuXG4gICAgaWYgKGRhdGFVc2VyLmhhc0RhdGEoc3JjKSkge1xuICAgICAgdWRhdGFPbGQgPSBkYXRhVXNlci5hY2Nlc3Moc3JjKTtcbiAgICAgIHVkYXRhQ3VyID0galF1ZXJ5LmV4dGVuZCh7fSwgdWRhdGFPbGQpO1xuICAgICAgZGF0YVVzZXIuc2V0KGRlc3QsIHVkYXRhQ3VyKTtcbiAgICB9XG4gIH0gLy8gRml4IElFIGJ1Z3MsIHNlZSBzdXBwb3J0IHRlc3RzXG5cblxuICBmdW5jdGlvbiBmaXhJbnB1dChzcmMsIGRlc3QpIHtcbiAgICB2YXIgbm9kZU5hbWUgPSBkZXN0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7IC8vIEZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uLlxuXG4gICAgaWYgKG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgcmNoZWNrYWJsZVR5cGUudGVzdChzcmMudHlwZSkpIHtcbiAgICAgIGRlc3QuY2hlY2tlZCA9IHNyYy5jaGVja2VkOyAvLyBGYWlscyB0byByZXR1cm4gdGhlIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgZGVmYXVsdCBzZWxlY3RlZCBzdGF0ZSB3aGVuIGNsb25pbmcgb3B0aW9uc1xuICAgIH0gZWxzZSBpZiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiB8fCBub2RlTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICBkZXN0LmRlZmF1bHRWYWx1ZSA9IHNyYy5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZG9tTWFuaXAoY29sbGVjdGlvbiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQpIHtcbiAgICAvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG4gICAgYXJncyA9IGNvbmNhdC5hcHBseShbXSwgYXJncyk7XG4gICAgdmFyIGZyYWdtZW50LFxuICAgICAgICBmaXJzdCxcbiAgICAgICAgc2NyaXB0cyxcbiAgICAgICAgaGFzU2NyaXB0cyxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgZG9jLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICBpTm9DbG9uZSA9IGwgLSAxLFxuICAgICAgICB2YWx1ZSA9IGFyZ3NbMF0sXG4gICAgICAgIHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24odmFsdWUpOyAvLyBXZSBjYW4ndCBjbG9uZU5vZGUgZnJhZ21lbnRzIHRoYXQgY29udGFpbiBjaGVja2VkLCBpbiBXZWJLaXRcblxuICAgIGlmICh2YWx1ZUlzRnVuY3Rpb24gfHwgbCA+IDEgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFzdXBwb3J0LmNoZWNrQ2xvbmUgJiYgcmNoZWNrZWQudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBzZWxmID0gY29sbGVjdGlvbi5lcShpbmRleCk7XG5cbiAgICAgICAgaWYgKHZhbHVlSXNGdW5jdGlvbikge1xuICAgICAgICAgIGFyZ3NbMF0gPSB2YWx1ZS5jYWxsKHRoaXMsIGluZGV4LCBzZWxmLmh0bWwoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBkb21NYW5pcChzZWxmLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobCkge1xuICAgICAgZnJhZ21lbnQgPSBidWlsZEZyYWdtZW50KGFyZ3MsIGNvbGxlY3Rpb25bMF0ub3duZXJEb2N1bWVudCwgZmFsc2UsIGNvbGxlY3Rpb24sIGlnbm9yZWQpO1xuICAgICAgZmlyc3QgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuXG4gICAgICBpZiAoZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZnJhZ21lbnQgPSBmaXJzdDtcbiAgICAgIH0gLy8gUmVxdWlyZSBlaXRoZXIgbmV3IGNvbnRlbnQgb3IgYW4gaW50ZXJlc3QgaW4gaWdub3JlZCBlbGVtZW50cyB0byBpbnZva2UgdGhlIGNhbGxiYWNrXG5cblxuICAgICAgaWYgKGZpcnN0IHx8IGlnbm9yZWQpIHtcbiAgICAgICAgc2NyaXB0cyA9IGpRdWVyeS5tYXAoZ2V0QWxsKGZyYWdtZW50LCBcInNjcmlwdFwiKSwgZGlzYWJsZVNjcmlwdCk7XG4gICAgICAgIGhhc1NjcmlwdHMgPSBzY3JpcHRzLmxlbmd0aDsgLy8gVXNlIHRoZSBvcmlnaW5hbCBmcmFnbWVudCBmb3IgdGhlIGxhc3QgaXRlbVxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBmaXJzdCBiZWNhdXNlIGl0IGNhbiBlbmQgdXBcbiAgICAgICAgLy8gYmVpbmcgZW1wdGllZCBpbmNvcnJlY3RseSBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgKCM4MDcwKS5cblxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIG5vZGUgPSBmcmFnbWVudDtcblxuICAgICAgICAgIGlmIChpICE9PSBpTm9DbG9uZSkge1xuICAgICAgICAgICAgbm9kZSA9IGpRdWVyeS5jbG9uZShub2RlLCB0cnVlLCB0cnVlKTsgLy8gS2VlcCByZWZlcmVuY2VzIHRvIGNsb25lZCBzY3JpcHRzIGZvciBsYXRlciByZXN0b3JhdGlvblxuXG4gICAgICAgICAgICBpZiAoaGFzU2NyaXB0cykge1xuICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcbiAgICAgICAgICAgICAgLy8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuICAgICAgICAgICAgICBqUXVlcnkubWVyZ2Uoc2NyaXB0cywgZ2V0QWxsKG5vZGUsIFwic2NyaXB0XCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxsYmFjay5jYWxsKGNvbGxlY3Rpb25baV0sIG5vZGUsIGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc1NjcmlwdHMpIHtcbiAgICAgICAgICBkb2MgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0ub3duZXJEb2N1bWVudDsgLy8gUmVlbmFibGUgc2NyaXB0c1xuXG4gICAgICAgICAgalF1ZXJ5Lm1hcChzY3JpcHRzLCByZXN0b3JlU2NyaXB0KTsgLy8gRXZhbHVhdGUgZXhlY3V0YWJsZSBzY3JpcHRzIG9uIGZpcnN0IGRvY3VtZW50IGluc2VydGlvblxuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGhhc1NjcmlwdHM7IGkrKykge1xuICAgICAgICAgICAgbm9kZSA9IHNjcmlwdHNbaV07XG5cbiAgICAgICAgICAgIGlmIChyc2NyaXB0VHlwZS50ZXN0KG5vZGUudHlwZSB8fCBcIlwiKSAmJiAhZGF0YVByaXYuYWNjZXNzKG5vZGUsIFwiZ2xvYmFsRXZhbFwiKSAmJiBqUXVlcnkuY29udGFpbnMoZG9jLCBub2RlKSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5zcmMgJiYgKG5vZGUudHlwZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpICE9PSBcIm1vZHVsZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gT3B0aW9uYWwgQUpBWCBkZXBlbmRlbmN5LCBidXQgd29uJ3QgcnVuIHNjcmlwdHMgaWYgbm90IHByZXNlbnRcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5Ll9ldmFsVXJsICYmICFub2RlLm5vTW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICBqUXVlcnkuX2V2YWxVcmwobm9kZS5zcmMsIHtcbiAgICAgICAgICAgICAgICAgICAgbm9uY2U6IG5vZGUubm9uY2UgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIERPTUV2YWwobm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKHJjbGVhblNjcmlwdCwgXCJcIiksIG5vZGUsIGRvYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZShlbGVtLCBzZWxlY3Rvciwga2VlcERhdGEpIHtcbiAgICB2YXIgbm9kZSxcbiAgICAgICAgbm9kZXMgPSBzZWxlY3RvciA/IGpRdWVyeS5maWx0ZXIoc2VsZWN0b3IsIGVsZW0pIDogZWxlbSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgKG5vZGUgPSBub2Rlc1tpXSkgIT0gbnVsbDsgaSsrKSB7XG4gICAgICBpZiAoIWtlZXBEYXRhICYmIG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgalF1ZXJ5LmNsZWFuRGF0YShnZXRBbGwobm9kZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIGlmIChrZWVwRGF0YSAmJiBpc0F0dGFjaGVkKG5vZGUpKSB7XG4gICAgICAgICAgc2V0R2xvYmFsRXZhbChnZXRBbGwobm9kZSwgXCJzY3JpcHRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgaHRtbFByZWZpbHRlcjogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgIHJldHVybiBodG1sLnJlcGxhY2UocnhodG1sVGFnLCBcIjwkMT48LyQyPlwiKTtcbiAgICB9LFxuICAgIGNsb25lOiBmdW5jdGlvbiAoZWxlbSwgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGwsXG4gICAgICAgICAgc3JjRWxlbWVudHMsXG4gICAgICAgICAgZGVzdEVsZW1lbnRzLFxuICAgICAgICAgIGNsb25lID0gZWxlbS5jbG9uZU5vZGUodHJ1ZSksXG4gICAgICAgICAgaW5QYWdlID0gaXNBdHRhY2hlZChlbGVtKTsgLy8gRml4IElFIGNsb25pbmcgaXNzdWVzXG5cbiAgICAgIGlmICghc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBlbGVtLm5vZGVUeXBlID09PSAxMSkgJiYgIWpRdWVyeS5pc1hNTERvYyhlbGVtKSkge1xuICAgICAgICAvLyBXZSBlc2NoZXcgU2l6emxlIGhlcmUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnM6IGh0dHBzOi8vanNwZXJmLmNvbS9nZXRhbGwtdnMtc2l6emxlLzJcbiAgICAgICAgZGVzdEVsZW1lbnRzID0gZ2V0QWxsKGNsb25lKTtcbiAgICAgICAgc3JjRWxlbWVudHMgPSBnZXRBbGwoZWxlbSk7XG5cbiAgICAgICAgZm9yIChpID0gMCwgbCA9IHNyY0VsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGZpeElucHV0KHNyY0VsZW1lbnRzW2ldLCBkZXN0RWxlbWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9IC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcblxuXG4gICAgICBpZiAoZGF0YUFuZEV2ZW50cykge1xuICAgICAgICBpZiAoZGVlcERhdGFBbmRFdmVudHMpIHtcbiAgICAgICAgICBzcmNFbGVtZW50cyA9IHNyY0VsZW1lbnRzIHx8IGdldEFsbChlbGVtKTtcbiAgICAgICAgICBkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKGNsb25lKTtcblxuICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGNsb25lQ29weUV2ZW50KHNyY0VsZW1lbnRzW2ldLCBkZXN0RWxlbWVudHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9uZUNvcHlFdmVudChlbGVtLCBjbG9uZSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXG5cbiAgICAgIGRlc3RFbGVtZW50cyA9IGdldEFsbChjbG9uZSwgXCJzY3JpcHRcIik7XG5cbiAgICAgIGlmIChkZXN0RWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBzZXRHbG9iYWxFdmFsKGRlc3RFbGVtZW50cywgIWluUGFnZSAmJiBnZXRBbGwoZWxlbSwgXCJzY3JpcHRcIikpO1xuICAgICAgfSAvLyBSZXR1cm4gdGhlIGNsb25lZCBzZXRcblxuXG4gICAgICByZXR1cm4gY2xvbmU7XG4gICAgfSxcbiAgICBjbGVhbkRhdGE6IGZ1bmN0aW9uIChlbGVtcykge1xuICAgICAgdmFyIGRhdGEsXG4gICAgICAgICAgZWxlbSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbCxcbiAgICAgICAgICBpID0gMDtcblxuICAgICAgZm9yICg7IChlbGVtID0gZWxlbXNbaV0pICE9PSB1bmRlZmluZWQ7IGkrKykge1xuICAgICAgICBpZiAoYWNjZXB0RGF0YShlbGVtKSkge1xuICAgICAgICAgIGlmIChkYXRhID0gZWxlbVtkYXRhUHJpdi5leHBhbmRvXSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuZXZlbnRzKSB7XG4gICAgICAgICAgICAgIGZvciAodHlwZSBpbiBkYXRhLmV2ZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChzcGVjaWFsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQucmVtb3ZlKGVsZW0sIHR5cGUpOyAvLyBUaGlzIGlzIGEgc2hvcnRjdXQgdG8gYXZvaWQgalF1ZXJ5LmV2ZW50LnJlbW92ZSdzIG92ZXJoZWFkXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGpRdWVyeS5yZW1vdmVFdmVudChlbGVtLCB0eXBlLCBkYXRhLmhhbmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG4gICAgICAgICAgICAvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcblxuXG4gICAgICAgICAgICBlbGVtW2RhdGFQcml2LmV4cGFuZG9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbGVtW2RhdGFVc2VyLmV4cGFuZG9dKSB7XG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1K1xuICAgICAgICAgICAgLy8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG4gICAgICAgICAgICBlbGVtW2RhdGFVc2VyLmV4cGFuZG9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIGRldGFjaDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlKHRoaXMsIHNlbGVjdG9yLCB0cnVlKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlKHRoaXMsIHNlbGVjdG9yKTtcbiAgICB9LFxuICAgIHRleHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBqUXVlcnkudGV4dCh0aGlzKSA6IHRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICB9LFxuICAgIGFwcGVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSkge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQodGhpcywgZWxlbSk7XG4gICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHByZXBlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb21NYW5pcCh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KHRoaXMsIGVsZW0pO1xuICAgICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUoZWxlbSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGJlZm9yZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb21NYW5pcCh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW0sIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVtcHR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWxlbSxcbiAgICAgICAgICBpID0gMDtcblxuICAgICAgZm9yICg7IChlbGVtID0gdGhpc1tpXSkgIT0gbnVsbDsgaSsrKSB7XG4gICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgLy8gUHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgICBqUXVlcnkuY2xlYW5EYXRhKGdldEFsbChlbGVtLCBmYWxzZSkpOyAvLyBSZW1vdmUgYW55IHJlbWFpbmluZyBub2Rlc1xuXG4gICAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24gKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKSB7XG4gICAgICBkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuICAgICAgZGVlcERhdGFBbmRFdmVudHMgPSBkZWVwRGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZGF0YUFuZEV2ZW50cyA6IGRlZXBEYXRhQW5kRXZlbnRzO1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGpRdWVyeS5jbG9uZSh0aGlzLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGh0bWw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGVsZW0gPSB0aGlzWzBdIHx8IHt9LFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsID0gdGhpcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBlbGVtLmlubmVySFRNTDtcbiAgICAgICAgfSAvLyBTZWUgaWYgd2UgY2FuIHRha2UgYSBzaG9ydGN1dCBhbmQganVzdCB1c2UgaW5uZXJIVE1MXG5cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCh2YWx1ZSkgJiYgIXdyYXBNYXBbKHJ0YWdOYW1lLmV4ZWModmFsdWUpIHx8IFtcIlwiLCBcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICB2YWx1ZSA9IGpRdWVyeS5odG1sUHJlZmlsdGVyKHZhbHVlKTtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICBlbGVtID0gdGhpc1tpXSB8fCB7fTsgLy8gUmVtb3ZlIGVsZW1lbnQgbm9kZXMgYW5kIHByZXZlbnQgbWVtb3J5IGxlYWtzXG5cbiAgICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuY2xlYW5EYXRhKGdldEFsbChlbGVtLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbSA9IDA7IC8vIElmIHVzaW5nIGlubmVySFRNTCB0aHJvd3MgYW4gZXhjZXB0aW9uLCB1c2UgdGhlIGZhbGxiYWNrIG1ldGhvZFxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgIHRoaXMuZW1wdHkoKS5hcHBlbmQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgfSxcbiAgICByZXBsYWNlV2l0aDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlnbm9yZWQgPSBbXTsgLy8gTWFrZSB0aGUgY2hhbmdlcywgcmVwbGFjaW5nIGVhY2ggbm9uLWlnbm9yZWQgY29udGV4dCBlbGVtZW50IHdpdGggdGhlIG5ldyBjb250ZW50XG5cbiAgICAgIHJldHVybiBkb21NYW5pcCh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKGpRdWVyeS5pbkFycmF5KHRoaXMsIGlnbm9yZWQpIDwgMCkge1xuICAgICAgICAgIGpRdWVyeS5jbGVhbkRhdGEoZ2V0QWxsKHRoaXMpKTtcblxuICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQoZWxlbSwgdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIEZvcmNlIGNhbGxiYWNrIGludm9jYXRpb25cblxuICAgICAgfSwgaWdub3JlZCk7XG4gICAgfVxuICB9KTtcbiAgalF1ZXJ5LmVhY2goe1xuICAgIGFwcGVuZFRvOiBcImFwcGVuZFwiLFxuICAgIHByZXBlbmRUbzogXCJwcmVwZW5kXCIsXG4gICAgaW5zZXJ0QmVmb3JlOiBcImJlZm9yZVwiLFxuICAgIGluc2VydEFmdGVyOiBcImFmdGVyXCIsXG4gICAgcmVwbGFjZUFsbDogXCJyZXBsYWNlV2l0aFwiXG4gIH0sIGZ1bmN0aW9uIChuYW1lLCBvcmlnaW5hbCkge1xuICAgIGpRdWVyeS5mbltuYW1lXSA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIGVsZW1zLFxuICAgICAgICAgIHJldCA9IFtdLFxuICAgICAgICAgIGluc2VydCA9IGpRdWVyeShzZWxlY3RvciksXG4gICAgICAgICAgbGFzdCA9IGluc2VydC5sZW5ndGggLSAxLFxuICAgICAgICAgIGkgPSAwO1xuXG4gICAgICBmb3IgKDsgaSA8PSBsYXN0OyBpKyspIHtcbiAgICAgICAgZWxlbXMgPSBpID09PSBsYXN0ID8gdGhpcyA6IHRoaXMuY2xvbmUodHJ1ZSk7XG4gICAgICAgIGpRdWVyeShpbnNlcnRbaV0pW29yaWdpbmFsXShlbGVtcyk7IC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuICAgICAgICAvLyAuZ2V0KCkgYmVjYXVzZSBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cbiAgICAgICAgcHVzaC5hcHBseShyZXQsIGVsZW1zLmdldCgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKHJldCk7XG4gICAgfTtcbiAgfSk7XG4gIHZhciBybnVtbm9ucHggPSBuZXcgUmVnRXhwKFwiXihcIiArIHBudW0gKyBcIikoPyFweClbYS16JV0rJFwiLCBcImlcIik7XG5cbiAgdmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxuICAgIC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuICAgIC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuICAgIHZhciB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gICAgaWYgKCF2aWV3IHx8ICF2aWV3Lm9wZW5lcikge1xuICAgICAgdmlldyA9IHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICB9O1xuXG4gIHZhciByYm94U3R5bGUgPSBuZXcgUmVnRXhwKGNzc0V4cGFuZC5qb2luKFwifFwiKSwgXCJpXCIpO1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRXhlY3V0aW5nIGJvdGggcGl4ZWxQb3NpdGlvbiAmIGJveFNpemluZ1JlbGlhYmxlIHRlc3RzIHJlcXVpcmUgb25seSBvbmUgbGF5b3V0XG4gICAgLy8gc28gdGhleSdyZSBleGVjdXRlZCBhdCB0aGUgc2FtZSB0aW1lIHRvIHNhdmUgdGhlIHNlY29uZCBjb21wdXRhdGlvbi5cbiAgICBmdW5jdGlvbiBjb21wdXRlU3R5bGVUZXN0cygpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSBzaW5nbGV0b24sIHdlIG5lZWQgdG8gZXhlY3V0ZSBpdCBvbmx5IG9uY2VcbiAgICAgIGlmICghZGl2KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDtcIiArIFwibWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCI7XG4gICAgICBkaXYuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO1wiICsgXCJtYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O1wiICsgXCJ3aWR0aDo2MCU7dG9wOjElXCI7XG4gICAgICBkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgdmFyIGRpdlN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGl2KTtcbiAgICAgIHBpeGVsUG9zaXRpb25WYWwgPSBkaXZTdHlsZS50b3AgIT09IFwiMSVcIjsgLy8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgRmlyZWZveCA8PTMgLSA0NFxuXG4gICAgICByZWxpYWJsZU1hcmdpbkxlZnRWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoZGl2U3R5bGUubWFyZ2luTGVmdCkgPT09IDEyOyAvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5LCBTYWZhcmkgPD05LjEgLSAxMC4xLCBpT1MgPD03LjAgLSA5LjNcbiAgICAgIC8vIFNvbWUgc3R5bGVzIGNvbWUgYmFjayB3aXRoIHBlcmNlbnRhZ2UgdmFsdWVzLCBldmVuIHRob3VnaCB0aGV5IHNob3VsZG4ndFxuXG4gICAgICBkaXYuc3R5bGUucmlnaHQgPSBcIjYwJVwiO1xuICAgICAgcGl4ZWxCb3hTdHlsZXNWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoZGl2U3R5bGUucmlnaHQpID09PSAzNjsgLy8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcbiAgICAgIC8vIERldGVjdCBtaXNyZXBvcnRpbmcgb2YgY29udGVudCBkaW1lbnNpb25zIGZvciBib3gtc2l6aW5nOmJvcmRlci1ib3ggZWxlbWVudHNcblxuICAgICAgYm94U2l6aW5nUmVsaWFibGVWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoZGl2U3R5bGUud2lkdGgpID09PSAzNjsgLy8gU3VwcG9ydDogSUUgOSBvbmx5XG4gICAgICAvLyBEZXRlY3Qgb3ZlcmZsb3c6c2Nyb2xsIHNjcmV3aW5lc3MgKGdoLTM2OTkpXG4gICAgICAvLyBTdXBwb3J0OiBDaHJvbWUgPD02NFxuICAgICAgLy8gRG9uJ3QgZ2V0IHRyaWNrZWQgd2hlbiB6b29tIGFmZmVjdHMgb2Zmc2V0V2lkdGggKGdoLTQwMjkpXG5cbiAgICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgIHNjcm9sbGJveFNpemVWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoZGl2Lm9mZnNldFdpZHRoIC8gMykgPT09IDEyO1xuICAgICAgZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7IC8vIE51bGxpZnkgdGhlIGRpdiBzbyBpdCB3b3VsZG4ndCBiZSBzdG9yZWQgaW4gdGhlIG1lbW9yeSBhbmRcbiAgICAgIC8vIGl0IHdpbGwgYWxzbyBiZSBhIHNpZ24gdGhhdCBjaGVja3MgYWxyZWFkeSBwZXJmb3JtZWRcblxuICAgICAgZGl2ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByb3VuZFBpeGVsTWVhc3VyZXMobWVhc3VyZSkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChtZWFzdXJlKSk7XG4gICAgfVxuXG4gICAgdmFyIHBpeGVsUG9zaXRpb25WYWwsXG4gICAgICAgIGJveFNpemluZ1JlbGlhYmxlVmFsLFxuICAgICAgICBzY3JvbGxib3hTaXplVmFsLFxuICAgICAgICBwaXhlbEJveFN0eWxlc1ZhbCxcbiAgICAgICAgcmVsaWFibGVNYXJnaW5MZWZ0VmFsLFxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBGaW5pc2ggZWFybHkgaW4gbGltaXRlZCAobm9uLWJyb3dzZXIpIGVudmlyb25tZW50c1xuXG4gICAgaWYgKCFkaXYuc3R5bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcbiAgICAvLyBTdHlsZSBvZiBjbG9uZWQgZWxlbWVudCBhZmZlY3RzIHNvdXJjZSBlbGVtZW50IGNsb25lZCAoIzg5MDgpXG5cblxuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiY29udGVudC1ib3hcIjtcbiAgICBkaXYuY2xvbmVOb2RlKHRydWUpLnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJcIjtcbiAgICBzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSA9IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9PT0gXCJjb250ZW50LWJveFwiO1xuICAgIGpRdWVyeS5leHRlbmQoc3VwcG9ydCwge1xuICAgICAgYm94U2l6aW5nUmVsaWFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcHV0ZVN0eWxlVGVzdHMoKTtcbiAgICAgICAgcmV0dXJuIGJveFNpemluZ1JlbGlhYmxlVmFsO1xuICAgICAgfSxcbiAgICAgIHBpeGVsQm94U3R5bGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbXB1dGVTdHlsZVRlc3RzKCk7XG4gICAgICAgIHJldHVybiBwaXhlbEJveFN0eWxlc1ZhbDtcbiAgICAgIH0sXG4gICAgICBwaXhlbFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbXB1dGVTdHlsZVRlc3RzKCk7XG4gICAgICAgIHJldHVybiBwaXhlbFBvc2l0aW9uVmFsO1xuICAgICAgfSxcbiAgICAgIHJlbGlhYmxlTWFyZ2luTGVmdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb21wdXRlU3R5bGVUZXN0cygpO1xuICAgICAgICByZXR1cm4gcmVsaWFibGVNYXJnaW5MZWZ0VmFsO1xuICAgICAgfSxcbiAgICAgIHNjcm9sbGJveFNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcHV0ZVN0eWxlVGVzdHMoKTtcbiAgICAgICAgcmV0dXJuIHNjcm9sbGJveFNpemVWYWw7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gY3VyQ1NTKGVsZW0sIG5hbWUsIGNvbXB1dGVkKSB7XG4gICAgdmFyIHdpZHRoLFxuICAgICAgICBtaW5XaWR0aCxcbiAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgIHJldCxcbiAgICAgICAgLy8gU3VwcG9ydDogRmlyZWZveCA1MStcbiAgICAvLyBSZXRyaWV2aW5nIHN0eWxlIGJlZm9yZSBjb21wdXRlZCBzb21laG93XG4gICAgLy8gZml4ZXMgYW4gaXNzdWUgd2l0aCBnZXR0aW5nIHdyb25nIHZhbHVlc1xuICAgIC8vIG9uIGRldGFjaGVkIGVsZW1lbnRzXG4gICAgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICAgIGNvbXB1dGVkID0gY29tcHV0ZWQgfHwgZ2V0U3R5bGVzKGVsZW0pOyAvLyBnZXRQcm9wZXJ0eVZhbHVlIGlzIG5lZWRlZCBmb3I6XG4gICAgLy8gICAuY3NzKCdmaWx0ZXInKSAoSUUgOSBvbmx5LCAjMTI1MzcpXG4gICAgLy8gICAuY3NzKCctLWN1c3RvbVByb3BlcnR5KSAoIzMxNDQpXG5cbiAgICBpZiAoY29tcHV0ZWQpIHtcbiAgICAgIHJldCA9IGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUobmFtZSkgfHwgY29tcHV0ZWRbbmFtZV07XG5cbiAgICAgIGlmIChyZXQgPT09IFwiXCIgJiYgIWlzQXR0YWNoZWQoZWxlbSkpIHtcbiAgICAgICAgcmV0ID0galF1ZXJ5LnN0eWxlKGVsZW0sIG5hbWUpO1xuICAgICAgfSAvLyBBIHRyaWJ1dGUgdG8gdGhlIFwiYXdlc29tZSBoYWNrIGJ5IERlYW4gRWR3YXJkc1wiXG4gICAgICAvLyBBbmRyb2lkIEJyb3dzZXIgcmV0dXJucyBwZXJjZW50YWdlIGZvciBzb21lIHZhbHVlcyxcbiAgICAgIC8vIGJ1dCB3aWR0aCBzZWVtcyB0byBiZSByZWxpYWJseSBwaXhlbHMuXG4gICAgICAvLyBUaGlzIGlzIGFnYWluc3QgdGhlIENTU09NIGRyYWZ0IHNwZWM6XG4gICAgICAvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI3Jlc29sdmVkLXZhbHVlc1xuXG5cbiAgICAgIGlmICghc3VwcG9ydC5waXhlbEJveFN0eWxlcygpICYmIHJudW1ub25weC50ZXN0KHJldCkgJiYgcmJveFN0eWxlLnRlc3QobmFtZSkpIHtcbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgICAgICB3aWR0aCA9IHN0eWxlLndpZHRoO1xuICAgICAgICBtaW5XaWR0aCA9IHN0eWxlLm1pbldpZHRoO1xuICAgICAgICBtYXhXaWR0aCA9IHN0eWxlLm1heFdpZHRoOyAvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG5cbiAgICAgICAgc3R5bGUubWluV2lkdGggPSBzdHlsZS5tYXhXaWR0aCA9IHN0eWxlLndpZHRoID0gcmV0O1xuICAgICAgICByZXQgPSBjb21wdXRlZC53aWR0aDsgLy8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuXG4gICAgICAgIHN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG4gICAgICAgIHN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldCAhPT0gdW5kZWZpbmVkID8gLy8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuICAgIC8vIElFIHJldHVybnMgekluZGV4IHZhbHVlIGFzIGFuIGludGVnZXIuXG4gICAgcmV0ICsgXCJcIiA6IHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEdldEhvb2tJZihjb25kaXRpb25GbiwgaG9va0ZuKSB7XG4gICAgLy8gRGVmaW5lIHRoZSBob29rLCB3ZSdsbCBjaGVjayBvbiB0aGUgZmlyc3QgcnVuIGlmIGl0J3MgcmVhbGx5IG5lZWRlZC5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb25kaXRpb25GbigpKSB7XG4gICAgICAgICAgLy8gSG9vayBub3QgbmVlZGVkIChvciBpdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgaXQgZHVlXG4gICAgICAgICAgLy8gdG8gbWlzc2luZyBkZXBlbmRlbmN5KSwgcmVtb3ZlIGl0LlxuICAgICAgICAgIGRlbGV0ZSB0aGlzLmdldDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gSG9vayBuZWVkZWQ7IHJlZGVmaW5lIGl0IHNvIHRoYXQgdGhlIHN1cHBvcnQgdGVzdCBpcyBub3QgZXhlY3V0ZWQgYWdhaW4uXG5cblxuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0ID0gaG9va0ZuKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgY3NzUHJlZml4ZXMgPSBbXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiXSxcbiAgICAgIGVtcHR5U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFxuICAgICAgdmVuZG9yUHJvcHMgPSB7fTsgLy8gUmV0dXJuIGEgdmVuZG9yLXByZWZpeGVkIHByb3BlcnR5IG9yIHVuZGVmaW5lZFxuXG4gIGZ1bmN0aW9uIHZlbmRvclByb3BOYW1lKG5hbWUpIHtcbiAgICAvLyBDaGVjayBmb3IgdmVuZG9yIHByZWZpeGVkIG5hbWVzXG4gICAgdmFyIGNhcE5hbWUgPSBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpLFxuICAgICAgICBpID0gY3NzUHJlZml4ZXMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgbmFtZSA9IGNzc1ByZWZpeGVzW2ldICsgY2FwTmFtZTtcblxuICAgICAgaWYgKG5hbWUgaW4gZW1wdHlTdHlsZSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUmV0dXJuIGEgcG90ZW50aWFsbHktbWFwcGVkIGpRdWVyeS5jc3NQcm9wcyBvciB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcblxuXG4gIGZ1bmN0aW9uIGZpbmFsUHJvcE5hbWUobmFtZSkge1xuICAgIHZhciBmaW5hbCA9IGpRdWVyeS5jc3NQcm9wc1tuYW1lXSB8fCB2ZW5kb3JQcm9wc1tuYW1lXTtcblxuICAgIGlmIChmaW5hbCkge1xuICAgICAgcmV0dXJuIGZpbmFsO1xuICAgIH1cblxuICAgIGlmIChuYW1lIGluIGVtcHR5U3R5bGUpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB2ZW5kb3JQcm9wc1tuYW1lXSA9IHZlbmRvclByb3BOYW1lKG5hbWUpIHx8IG5hbWU7XG4gIH1cblxuICB2YXIgLy8gU3dhcHBhYmxlIGlmIGRpc3BsYXkgaXMgbm9uZSBvciBzdGFydHMgd2l0aCB0YWJsZVxuICAvLyBleGNlcHQgXCJ0YWJsZVwiLCBcInRhYmxlLWNlbGxcIiwgb3IgXCJ0YWJsZS1jYXB0aW9uXCJcbiAgLy8gU2VlIGhlcmUgZm9yIGRpc3BsYXkgdmFsdWVzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NTUy9kaXNwbGF5XG4gIHJkaXNwbGF5c3dhcCA9IC9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxcbiAgICAgIHJjdXN0b21Qcm9wID0gL14tLS8sXG4gICAgICBjc3NTaG93ID0ge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgfSxcbiAgICAgIGNzc05vcm1hbFRyYW5zZm9ybSA9IHtcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjBcIixcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiXG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0UG9zaXRpdmVOdW1iZXIoZWxlbSwgdmFsdWUsIHN1YnRyYWN0KSB7XG4gICAgLy8gQW55IHJlbGF0aXZlICgrLy0pIHZhbHVlcyBoYXZlIGFscmVhZHkgYmVlblxuICAgIC8vIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludFxuICAgIHZhciBtYXRjaGVzID0gcmNzc051bS5leGVjKHZhbHVlKTtcbiAgICByZXR1cm4gbWF0Y2hlcyA/IC8vIEd1YXJkIGFnYWluc3QgdW5kZWZpbmVkIFwic3VidHJhY3RcIiwgZS5nLiwgd2hlbiB1c2VkIGFzIGluIGNzc0hvb2tzXG4gICAgTWF0aC5tYXgoMCwgbWF0Y2hlc1syXSAtIChzdWJ0cmFjdCB8fCAwKSkgKyAobWF0Y2hlc1szXSB8fCBcInB4XCIpIDogdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBib3hNb2RlbEFkanVzdG1lbnQoZWxlbSwgZGltZW5zaW9uLCBib3gsIGlzQm9yZGVyQm94LCBzdHlsZXMsIGNvbXB1dGVkVmFsKSB7XG4gICAgdmFyIGkgPSBkaW1lbnNpb24gPT09IFwid2lkdGhcIiA/IDEgOiAwLFxuICAgICAgICBleHRyYSA9IDAsXG4gICAgICAgIGRlbHRhID0gMDsgLy8gQWRqdXN0bWVudCBtYXkgbm90IGJlIG5lY2Vzc2FyeVxuXG4gICAgaWYgKGJveCA9PT0gKGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZm9yICg7IGkgPCA0OyBpICs9IDIpIHtcbiAgICAgIC8vIEJvdGggYm94IG1vZGVscyBleGNsdWRlIG1hcmdpblxuICAgICAgaWYgKGJveCA9PT0gXCJtYXJnaW5cIikge1xuICAgICAgICBkZWx0YSArPSBqUXVlcnkuY3NzKGVsZW0sIGJveCArIGNzc0V4cGFuZFtpXSwgdHJ1ZSwgc3R5bGVzKTtcbiAgICAgIH0gLy8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGNvbnRlbnQtYm94LCB3ZSdyZSBzZWVraW5nIFwicGFkZGluZ1wiIG9yIFwiYm9yZGVyXCIgb3IgXCJtYXJnaW5cIlxuXG5cbiAgICAgIGlmICghaXNCb3JkZXJCb3gpIHtcbiAgICAgICAgLy8gQWRkIHBhZGRpbmdcbiAgICAgICAgZGVsdGEgKz0galF1ZXJ5LmNzcyhlbGVtLCBcInBhZGRpbmdcIiArIGNzc0V4cGFuZFtpXSwgdHJ1ZSwgc3R5bGVzKTsgLy8gRm9yIFwiYm9yZGVyXCIgb3IgXCJtYXJnaW5cIiwgYWRkIGJvcmRlclxuXG4gICAgICAgIGlmIChib3ggIT09IFwicGFkZGluZ1wiKSB7XG4gICAgICAgICAgZGVsdGEgKz0galF1ZXJ5LmNzcyhlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kW2ldICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMpOyAvLyBCdXQgc3RpbGwga2VlcCB0cmFjayBvZiBpdCBvdGhlcndpc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleHRyYSArPSBqUXVlcnkuY3NzKGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbaV0gKyBcIldpZHRoXCIsIHRydWUsIHN0eWxlcyk7XG4gICAgICAgIH0gLy8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGJvcmRlci1ib3ggKGNvbnRlbnQgKyBwYWRkaW5nICsgYm9yZGVyKSwgd2UncmUgc2Vla2luZyBcImNvbnRlbnRcIiBvclxuICAgICAgICAvLyBcInBhZGRpbmdcIiBvciBcIm1hcmdpblwiXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBcImNvbnRlbnRcIiwgc3VidHJhY3QgcGFkZGluZ1xuICAgICAgICBpZiAoYm94ID09PSBcImNvbnRlbnRcIikge1xuICAgICAgICAgIGRlbHRhIC09IGpRdWVyeS5jc3MoZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbaV0sIHRydWUsIHN0eWxlcyk7XG4gICAgICAgIH0gLy8gRm9yIFwiY29udGVudFwiIG9yIFwicGFkZGluZ1wiLCBzdWJ0cmFjdCBib3JkZXJcblxuXG4gICAgICAgIGlmIChib3ggIT09IFwibWFyZ2luXCIpIHtcbiAgICAgICAgICBkZWx0YSAtPSBqUXVlcnkuY3NzKGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbaV0gKyBcIldpZHRoXCIsIHRydWUsIHN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIEFjY291bnQgZm9yIHBvc2l0aXZlIGNvbnRlbnQtYm94IHNjcm9sbCBndXR0ZXIgd2hlbiByZXF1ZXN0ZWQgYnkgcHJvdmlkaW5nIGNvbXB1dGVkVmFsXG5cblxuICAgIGlmICghaXNCb3JkZXJCb3ggJiYgY29tcHV0ZWRWYWwgPj0gMCkge1xuICAgICAgLy8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIGEgcm91bmRlZCBzdW0gb2YgY29udGVudCwgcGFkZGluZywgc2Nyb2xsIGd1dHRlciwgYW5kIGJvcmRlclxuICAgICAgLy8gQXNzdW1pbmcgaW50ZWdlciBzY3JvbGwgZ3V0dGVyLCBzdWJ0cmFjdCB0aGUgcmVzdCBhbmQgcm91bmQgZG93blxuICAgICAgZGVsdGEgKz0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKGVsZW1bXCJvZmZzZXRcIiArIGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXSAtIGNvbXB1dGVkVmFsIC0gZGVsdGEgLSBleHRyYSAtIDAuNSAvLyBJZiBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgaXMgdW5rbm93biwgdGhlbiB3ZSBjYW4ndCBkZXRlcm1pbmUgY29udGVudC1ib3ggc2Nyb2xsIGd1dHRlclxuICAgICAgLy8gVXNlIGFuIGV4cGxpY2l0IHplcm8gdG8gYXZvaWQgTmFOIChnaC0zOTY0KVxuICAgICAgKSkgfHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsdGE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaWR0aE9ySGVpZ2h0KGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEpIHtcbiAgICAvLyBTdGFydCB3aXRoIGNvbXB1dGVkIHN0eWxlXG4gICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhlbGVtKSxcbiAgICAgICAgLy8gVG8gYXZvaWQgZm9yY2luZyBhIHJlZmxvdywgb25seSBmZXRjaCBib3hTaXppbmcgaWYgd2UgbmVlZCBpdCAoZ2gtNDMyMikuXG4gICAgLy8gRmFrZSBjb250ZW50LWJveCB1bnRpbCB3ZSBrbm93IGl0J3MgbmVlZGVkIHRvIGtub3cgdGhlIHRydWUgdmFsdWUuXG4gICAgYm94U2l6aW5nTmVlZGVkID0gIXN1cHBvcnQuYm94U2l6aW5nUmVsaWFibGUoKSB8fCBleHRyYSxcbiAgICAgICAgaXNCb3JkZXJCb3ggPSBib3hTaXppbmdOZWVkZWQgJiYgalF1ZXJ5LmNzcyhlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzKSA9PT0gXCJib3JkZXItYm94XCIsXG4gICAgICAgIHZhbHVlSXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveCxcbiAgICAgICAgdmFsID0gY3VyQ1NTKGVsZW0sIGRpbWVuc2lvbiwgc3R5bGVzKSxcbiAgICAgICAgb2Zmc2V0UHJvcCA9IFwib2Zmc2V0XCIgKyBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKTsgLy8gU3VwcG9ydDogRmlyZWZveCA8PTU0XG4gICAgLy8gUmV0dXJuIGEgY29uZm91bmRpbmcgbm9uLXBpeGVsIHZhbHVlIG9yIGZlaWduIGlnbm9yYW5jZSwgYXMgYXBwcm9wcmlhdGUuXG5cbiAgICBpZiAocm51bW5vbnB4LnRlc3QodmFsKSkge1xuICAgICAgaWYgKCFleHRyYSkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuXG4gICAgICB2YWwgPSBcImF1dG9cIjtcbiAgICB9IC8vIEZhbGwgYmFjayB0byBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgd2hlbiB2YWx1ZSBpcyBcImF1dG9cIlxuICAgIC8vIFRoaXMgaGFwcGVucyBmb3IgaW5saW5lIGVsZW1lbnRzIHdpdGggbm8gZXhwbGljaXQgc2V0dGluZyAoZ2gtMzU3MSlcbiAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4xIC0gNC4zIG9ubHlcbiAgICAvLyBBbHNvIHVzZSBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgZm9yIG1pc3JlcG9ydGVkIGlubGluZSBkaW1lbnNpb25zIChnaC0zNjAyKVxuICAgIC8vIFN1cHBvcnQ6IElFIDktMTEgb25seVxuICAgIC8vIEFsc28gdXNlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBmb3Igd2hlbiBib3ggc2l6aW5nIGlzIHVucmVsaWFibGVcbiAgICAvLyBXZSB1c2UgZ2V0Q2xpZW50UmVjdHMoKSB0byBjaGVjayBmb3IgaGlkZGVuL2Rpc2Nvbm5lY3RlZC5cbiAgICAvLyBJbiB0aG9zZSBjYXNlcywgdGhlIGNvbXB1dGVkIHZhbHVlIGNhbiBiZSB0cnVzdGVkIHRvIGJlIGJvcmRlci1ib3hcblxuXG4gICAgaWYgKCghc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpICYmIGlzQm9yZGVyQm94IHx8IHZhbCA9PT0gXCJhdXRvXCIgfHwgIXBhcnNlRmxvYXQodmFsKSAmJiBqUXVlcnkuY3NzKGVsZW0sIFwiZGlzcGxheVwiLCBmYWxzZSwgc3R5bGVzKSA9PT0gXCJpbmxpbmVcIikgJiYgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuICAgICAgaXNCb3JkZXJCb3ggPSBqUXVlcnkuY3NzKGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMpID09PSBcImJvcmRlci1ib3hcIjsgLy8gV2hlcmUgYXZhaWxhYmxlLCBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgYXBwcm94aW1hdGUgYm9yZGVyIGJveCBkaW1lbnNpb25zLlxuICAgICAgLy8gV2hlcmUgbm90IGF2YWlsYWJsZSAoZS5nLiwgU1ZHKSwgYXNzdW1lIHVucmVsaWFibGUgYm94LXNpemluZyBhbmQgaW50ZXJwcmV0IHRoZVxuICAgICAgLy8gcmV0cmlldmVkIHZhbHVlIGFzIGEgY29udGVudCBib3ggZGltZW5zaW9uLlxuXG4gICAgICB2YWx1ZUlzQm9yZGVyQm94ID0gb2Zmc2V0UHJvcCBpbiBlbGVtO1xuXG4gICAgICBpZiAodmFsdWVJc0JvcmRlckJveCkge1xuICAgICAgICB2YWwgPSBlbGVtW29mZnNldFByb3BdO1xuICAgICAgfVxuICAgIH0gLy8gTm9ybWFsaXplIFwiXCIgYW5kIGF1dG9cblxuXG4gICAgdmFsID0gcGFyc2VGbG9hdCh2YWwpIHx8IDA7IC8vIEFkanVzdCBmb3IgdGhlIGVsZW1lbnQncyBib3ggbW9kZWxcblxuICAgIHJldHVybiB2YWwgKyBib3hNb2RlbEFkanVzdG1lbnQoZWxlbSwgZGltZW5zaW9uLCBleHRyYSB8fCAoaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIpLCB2YWx1ZUlzQm9yZGVyQm94LCBzdHlsZXMsIC8vIFByb3ZpZGUgdGhlIGN1cnJlbnQgY29tcHV0ZWQgc2l6ZSB0byByZXF1ZXN0IHNjcm9sbCBndXR0ZXIgY2FsY3VsYXRpb24gKGdoLTM1ODkpXG4gICAgdmFsKSArIFwicHhcIjtcbiAgfVxuXG4gIGpRdWVyeS5leHRlbmQoe1xuICAgIC8vIEFkZCBpbiBzdHlsZSBwcm9wZXJ0eSBob29rcyBmb3Igb3ZlcnJpZGluZyB0aGUgZGVmYXVsdFxuICAgIC8vIGJlaGF2aW9yIG9mIGdldHRpbmcgYW5kIHNldHRpbmcgYSBzdHlsZSBwcm9wZXJ0eVxuICAgIGNzc0hvb2tzOiB7XG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKGVsZW0sIGNvbXB1dGVkKSB7XG4gICAgICAgICAgaWYgKGNvbXB1dGVkKSB7XG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgYWx3YXlzIGdldCBhIG51bWJlciBiYWNrIGZyb20gb3BhY2l0eVxuICAgICAgICAgICAgdmFyIHJldCA9IGN1ckNTUyhlbGVtLCBcIm9wYWNpdHlcIik7XG4gICAgICAgICAgICByZXR1cm4gcmV0ID09PSBcIlwiID8gXCIxXCIgOiByZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBEb24ndCBhdXRvbWF0aWNhbGx5IGFkZCBcInB4XCIgdG8gdGhlc2UgcG9zc2libHktdW5pdGxlc3MgcHJvcGVydGllc1xuICAgIGNzc051bWJlcjoge1xuICAgICAgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiB0cnVlLFxuICAgICAgXCJjb2x1bW5Db3VudFwiOiB0cnVlLFxuICAgICAgXCJmaWxsT3BhY2l0eVwiOiB0cnVlLFxuICAgICAgXCJmbGV4R3Jvd1wiOiB0cnVlLFxuICAgICAgXCJmbGV4U2hyaW5rXCI6IHRydWUsXG4gICAgICBcImZvbnRXZWlnaHRcIjogdHJ1ZSxcbiAgICAgIFwiZ3JpZEFyZWFcIjogdHJ1ZSxcbiAgICAgIFwiZ3JpZENvbHVtblwiOiB0cnVlLFxuICAgICAgXCJncmlkQ29sdW1uRW5kXCI6IHRydWUsXG4gICAgICBcImdyaWRDb2x1bW5TdGFydFwiOiB0cnVlLFxuICAgICAgXCJncmlkUm93XCI6IHRydWUsXG4gICAgICBcImdyaWRSb3dFbmRcIjogdHJ1ZSxcbiAgICAgIFwiZ3JpZFJvd1N0YXJ0XCI6IHRydWUsXG4gICAgICBcImxpbmVIZWlnaHRcIjogdHJ1ZSxcbiAgICAgIFwib3BhY2l0eVwiOiB0cnVlLFxuICAgICAgXCJvcmRlclwiOiB0cnVlLFxuICAgICAgXCJvcnBoYW5zXCI6IHRydWUsXG4gICAgICBcIndpZG93c1wiOiB0cnVlLFxuICAgICAgXCJ6SW5kZXhcIjogdHJ1ZSxcbiAgICAgIFwiem9vbVwiOiB0cnVlXG4gICAgfSxcbiAgICAvLyBBZGQgaW4gcHJvcGVydGllcyB3aG9zZSBuYW1lcyB5b3Ugd2lzaCB0byBmaXggYmVmb3JlXG4gICAgLy8gc2V0dGluZyBvciBnZXR0aW5nIHRoZSB2YWx1ZVxuICAgIGNzc1Byb3BzOiB7fSxcbiAgICAvLyBHZXQgYW5kIHNldCB0aGUgc3R5bGUgcHJvcGVydHkgb24gYSBET00gTm9kZVxuICAgIHN0eWxlOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgdmFsdWUsIGV4dHJhKSB7XG4gICAgICAvLyBEb24ndCBzZXQgc3R5bGVzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcbiAgICAgIGlmICghZWxlbSB8fCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggfHwgIWVsZW0uc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcblxuXG4gICAgICB2YXIgcmV0LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgaG9va3MsXG4gICAgICAgICAgb3JpZ05hbWUgPSBjYW1lbENhc2UobmFtZSksXG4gICAgICAgICAgaXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdChuYW1lKSxcbiAgICAgICAgICBzdHlsZSA9IGVsZW0uc3R5bGU7IC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZS4gV2UgZG9uJ3RcbiAgICAgIC8vIHdhbnQgdG8gcXVlcnkgdGhlIHZhbHVlIGlmIGl0IGlzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuICAgICAgLy8gc2luY2UgdGhleSBhcmUgdXNlci1kZWZpbmVkLlxuXG4gICAgICBpZiAoIWlzQ3VzdG9tUHJvcCkge1xuICAgICAgICBuYW1lID0gZmluYWxQcm9wTmFtZShvcmlnTmFtZSk7XG4gICAgICB9IC8vIEdldHMgaG9vayBmb3IgdGhlIHByZWZpeGVkIHZlcnNpb24sIHRoZW4gdW5wcmVmaXhlZCB2ZXJzaW9uXG5cblxuICAgICAgaG9va3MgPSBqUXVlcnkuY3NzSG9va3NbbmFtZV0gfHwgalF1ZXJ5LmNzc0hvb2tzW29yaWdOYW1lXTsgLy8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHR5cGUgPSB0eXBlb2YgdmFsdWU7IC8vIENvbnZlcnQgXCIrPVwiIG9yIFwiLT1cIiB0byByZWxhdGl2ZSBudW1iZXJzICgjNzM0NSlcblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIiAmJiAocmV0ID0gcmNzc051bS5leGVjKHZhbHVlKSkgJiYgcmV0WzFdKSB7XG4gICAgICAgICAgdmFsdWUgPSBhZGp1c3RDU1MoZWxlbSwgbmFtZSwgcmV0KTsgLy8gRml4ZXMgYnVnICM5MjM3XG5cbiAgICAgICAgICB0eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgfSAvLyBNYWtlIHN1cmUgdGhhdCBudWxsIGFuZCBOYU4gdmFsdWVzIGFyZW4ndCBzZXQgKCM3MTE2KVxuXG5cbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIElmIGEgbnVtYmVyIHdhcyBwYXNzZWQgaW4sIGFkZCB0aGUgdW5pdCAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxuICAgICAgICAvLyBUaGUgaXNDdXN0b21Qcm9wIGNoZWNrIGNhbiBiZSByZW1vdmVkIGluIGpRdWVyeSA0LjAgd2hlbiB3ZSBvbmx5IGF1dG8tYXBwZW5kXG4gICAgICAgIC8vIFwicHhcIiB0byBhIGZldyBoYXJkY29kZWQgdmFsdWVzLlxuXG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIgJiYgIWlzQ3VzdG9tUHJvcCkge1xuICAgICAgICAgIHZhbHVlICs9IHJldCAmJiByZXRbM10gfHwgKGpRdWVyeS5jc3NOdW1iZXJbb3JpZ05hbWVdID8gXCJcIiA6IFwicHhcIik7XG4gICAgICAgIH0gLy8gYmFja2dyb3VuZC0qIHByb3BzIGFmZmVjdCBvcmlnaW5hbCBjbG9uZSdzIHZhbHVlc1xuXG5cbiAgICAgICAgaWYgKCFzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSAmJiB2YWx1ZSA9PT0gXCJcIiAmJiBuYW1lLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpID09PSAwKSB7XG4gICAgICAgICAgc3R5bGVbbmFtZV0gPSBcImluaGVyaXRcIjtcbiAgICAgICAgfSAvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkLCB1c2UgdGhhdCB2YWx1ZSwgb3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSBzcGVjaWZpZWQgdmFsdWVcblxuXG4gICAgICAgIGlmICghaG9va3MgfHwgIShcInNldFwiIGluIGhvb2tzKSB8fCAodmFsdWUgPSBob29rcy5zZXQoZWxlbSwgdmFsdWUsIGV4dHJhKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChpc0N1c3RvbVByb3ApIHtcbiAgICAgICAgICAgIHN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBub24tY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuICAgICAgICBpZiAoaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KGVsZW0sIGZhbHNlLCBleHRyYSkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9IC8vIE90aGVyd2lzZSBqdXN0IGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgc3R5bGUgb2JqZWN0XG5cblxuICAgICAgICByZXR1cm4gc3R5bGVbbmFtZV07XG4gICAgICB9XG4gICAgfSxcbiAgICBjc3M6IGZ1bmN0aW9uIChlbGVtLCBuYW1lLCBleHRyYSwgc3R5bGVzKSB7XG4gICAgICB2YXIgdmFsLFxuICAgICAgICAgIG51bSxcbiAgICAgICAgICBob29rcyxcbiAgICAgICAgICBvcmlnTmFtZSA9IGNhbWVsQ2FzZShuYW1lKSxcbiAgICAgICAgICBpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KG5hbWUpOyAvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWUuIFdlIGRvbid0XG4gICAgICAvLyB3YW50IHRvIG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgaXMgYSBDU1MgY3VzdG9tIHByb3BlcnR5XG4gICAgICAvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cbiAgICAgIGlmICghaXNDdXN0b21Qcm9wKSB7XG4gICAgICAgIG5hbWUgPSBmaW5hbFByb3BOYW1lKG9yaWdOYW1lKTtcbiAgICAgIH0gLy8gVHJ5IHByZWZpeGVkIG5hbWUgZm9sbG93ZWQgYnkgdGhlIHVucHJlZml4ZWQgbmFtZVxuXG5cbiAgICAgIGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzW25hbWVdIHx8IGpRdWVyeS5jc3NIb29rc1tvcmlnTmFtZV07IC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cbiAgICAgIGlmIChob29rcyAmJiBcImdldFwiIGluIGhvb2tzKSB7XG4gICAgICAgIHZhbCA9IGhvb2tzLmdldChlbGVtLCB0cnVlLCBleHRyYSk7XG4gICAgICB9IC8vIE90aGVyd2lzZSwgaWYgYSB3YXkgdG8gZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBleGlzdHMsIHVzZSB0aGF0XG5cblxuICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbCA9IGN1ckNTUyhlbGVtLCBuYW1lLCBzdHlsZXMpO1xuICAgICAgfSAvLyBDb252ZXJ0IFwibm9ybWFsXCIgdG8gY29tcHV0ZWQgdmFsdWVcblxuXG4gICAgICBpZiAodmFsID09PSBcIm5vcm1hbFwiICYmIG5hbWUgaW4gY3NzTm9ybWFsVHJhbnNmb3JtKSB7XG4gICAgICAgIHZhbCA9IGNzc05vcm1hbFRyYW5zZm9ybVtuYW1lXTtcbiAgICAgIH0gLy8gTWFrZSBudW1lcmljIGlmIGZvcmNlZCBvciBhIHF1YWxpZmllciB3YXMgcHJvdmlkZWQgYW5kIHZhbCBsb29rcyBudW1lcmljXG5cblxuICAgICAgaWYgKGV4dHJhID09PSBcIlwiIHx8IGV4dHJhKSB7XG4gICAgICAgIG51bSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICAgICAgcmV0dXJuIGV4dHJhID09PSB0cnVlIHx8IGlzRmluaXRlKG51bSkgPyBudW0gfHwgMCA6IHZhbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZWFjaChbXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXSwgZnVuY3Rpb24gKGksIGRpbWVuc2lvbikge1xuICAgIGpRdWVyeS5jc3NIb29rc1tkaW1lbnNpb25dID0ge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoZWxlbSwgY29tcHV0ZWQsIGV4dHJhKSB7XG4gICAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICAgIC8vIENlcnRhaW4gZWxlbWVudHMgY2FuIGhhdmUgZGltZW5zaW9uIGluZm8gaWYgd2UgaW52aXNpYmx5IHNob3cgdGhlbVxuICAgICAgICAgIC8vIGJ1dCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0XG4gICAgICAgICAgcmV0dXJuIHJkaXNwbGF5c3dhcC50ZXN0KGpRdWVyeS5jc3MoZWxlbSwgXCJkaXNwbGF5XCIpKSAmJiAoIC8vIFN1cHBvcnQ6IFNhZmFyaSA4K1xuICAgICAgICAgIC8vIFRhYmxlIGNvbHVtbnMgaW4gU2FmYXJpIGhhdmUgbm9uLXplcm8gb2Zmc2V0V2lkdGggJiB6ZXJvXG4gICAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggdW5sZXNzIGRpc3BsYXkgaXMgY2hhbmdlZC5cbiAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbiAgICAgICAgICAvLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlXG4gICAgICAgICAgLy8gaW4gSUUgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICAgICFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoIHx8ICFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSA/IHN3YXAoZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldFdpZHRoT3JIZWlnaHQoZWxlbSwgZGltZW5zaW9uLCBleHRyYSk7XG4gICAgICAgICAgfSkgOiBnZXRXaWR0aE9ySGVpZ2h0KGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoZWxlbSwgdmFsdWUsIGV4dHJhKSB7XG4gICAgICAgIHZhciBtYXRjaGVzLFxuICAgICAgICAgICAgc3R5bGVzID0gZ2V0U3R5bGVzKGVsZW0pLFxuICAgICAgICAgICAgLy8gT25seSByZWFkIHN0eWxlcy5wb3NpdGlvbiBpZiB0aGUgdGVzdCBoYXMgYSBjaGFuY2UgdG8gZmFpbFxuICAgICAgICAvLyB0byBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LlxuICAgICAgICBzY3JvbGxib3hTaXplQnVnZ3kgPSAhc3VwcG9ydC5zY3JvbGxib3hTaXplKCkgJiYgc3R5bGVzLnBvc2l0aW9uID09PSBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAvLyBUbyBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LCBvbmx5IGZldGNoIGJveFNpemluZyBpZiB3ZSBuZWVkIGl0IChnaC0zOTkxKVxuICAgICAgICBib3hTaXppbmdOZWVkZWQgPSBzY3JvbGxib3hTaXplQnVnZ3kgfHwgZXh0cmEsXG4gICAgICAgICAgICBpc0JvcmRlckJveCA9IGJveFNpemluZ05lZWRlZCAmJiBqUXVlcnkuY3NzKGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMpID09PSBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgIHN1YnRyYWN0ID0gZXh0cmEgPyBib3hNb2RlbEFkanVzdG1lbnQoZWxlbSwgZGltZW5zaW9uLCBleHRyYSwgaXNCb3JkZXJCb3gsIHN0eWxlcykgOiAwOyAvLyBBY2NvdW50IGZvciB1bnJlbGlhYmxlIGJvcmRlci1ib3ggZGltZW5zaW9ucyBieSBjb21wYXJpbmcgb2Zmc2V0KiB0byBjb21wdXRlZCBhbmRcbiAgICAgICAgLy8gZmFraW5nIGEgY29udGVudC1ib3ggdG8gZ2V0IGJvcmRlciBhbmQgcGFkZGluZyAoZ2gtMzY5OSlcblxuICAgICAgICBpZiAoaXNCb3JkZXJCb3ggJiYgc2Nyb2xsYm94U2l6ZUJ1Z2d5KSB7XG4gICAgICAgICAgc3VidHJhY3QgLT0gTWF0aC5jZWlsKGVsZW1bXCJvZmZzZXRcIiArIGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXSAtIHBhcnNlRmxvYXQoc3R5bGVzW2RpbWVuc2lvbl0pIC0gYm94TW9kZWxBZGp1c3RtZW50KGVsZW0sIGRpbWVuc2lvbiwgXCJib3JkZXJcIiwgZmFsc2UsIHN0eWxlcykgLSAwLjUpO1xuICAgICAgICB9IC8vIENvbnZlcnQgdG8gcGl4ZWxzIGlmIHZhbHVlIGFkanVzdG1lbnQgaXMgbmVlZGVkXG5cblxuICAgICAgICBpZiAoc3VidHJhY3QgJiYgKG1hdGNoZXMgPSByY3NzTnVtLmV4ZWModmFsdWUpKSAmJiAobWF0Y2hlc1szXSB8fCBcInB4XCIpICE9PSBcInB4XCIpIHtcbiAgICAgICAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSB2YWx1ZTtcbiAgICAgICAgICB2YWx1ZSA9IGpRdWVyeS5jc3MoZWxlbSwgZGltZW5zaW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXRQb3NpdGl2ZU51bWJlcihlbGVtLCB2YWx1ZSwgc3VidHJhY3QpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICBqUXVlcnkuY3NzSG9va3MubWFyZ2luTGVmdCA9IGFkZEdldEhvb2tJZihzdXBwb3J0LnJlbGlhYmxlTWFyZ2luTGVmdCwgZnVuY3Rpb24gKGVsZW0sIGNvbXB1dGVkKSB7XG4gICAgaWYgKGNvbXB1dGVkKSB7XG4gICAgICByZXR1cm4gKHBhcnNlRmxvYXQoY3VyQ1NTKGVsZW0sIFwibWFyZ2luTGVmdFwiKSkgfHwgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gc3dhcChlbGVtLCB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IDBcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIH0pKSArIFwicHhcIjtcbiAgICB9XG4gIH0pOyAvLyBUaGVzZSBob29rcyBhcmUgdXNlZCBieSBhbmltYXRlIHRvIGV4cGFuZCBwcm9wZXJ0aWVzXG5cbiAgalF1ZXJ5LmVhY2goe1xuICAgIG1hcmdpbjogXCJcIixcbiAgICBwYWRkaW5nOiBcIlwiLFxuICAgIGJvcmRlcjogXCJXaWR0aFwiXG4gIH0sIGZ1bmN0aW9uIChwcmVmaXgsIHN1ZmZpeCkge1xuICAgIGpRdWVyeS5jc3NIb29rc1twcmVmaXggKyBzdWZmaXhdID0ge1xuICAgICAgZXhwYW5kOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgZXhwYW5kZWQgPSB7fSxcbiAgICAgICAgICAgIC8vIEFzc3VtZXMgYSBzaW5nbGUgbnVtYmVyIGlmIG5vdCBhIHN0cmluZ1xuICAgICAgICBwYXJ0cyA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlLnNwbGl0KFwiIFwiKSA6IFt2YWx1ZV07XG5cbiAgICAgICAgZm9yICg7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICBleHBhbmRlZFtwcmVmaXggKyBjc3NFeHBhbmRbaV0gKyBzdWZmaXhdID0gcGFydHNbaV0gfHwgcGFydHNbaSAtIDJdIHx8IHBhcnRzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAocHJlZml4ICE9PSBcIm1hcmdpblwiKSB7XG4gICAgICBqUXVlcnkuY3NzSG9va3NbcHJlZml4ICsgc3VmZml4XS5zZXQgPSBzZXRQb3NpdGl2ZU51bWJlcjtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICBjc3M6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHN0eWxlcyxcbiAgICAgICAgICAgIGxlbixcbiAgICAgICAgICAgIG1hcCA9IHt9LFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICAgICAgICBzdHlsZXMgPSBnZXRTdHlsZXMoZWxlbSk7XG4gICAgICAgICAgbGVuID0gbmFtZS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBtYXBbbmFtZVtpXV0gPSBqUXVlcnkuY3NzKGVsZW0sIG5hbWVbaV0sIGZhbHNlLCBzdHlsZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IGpRdWVyeS5zdHlsZShlbGVtLCBuYW1lLCB2YWx1ZSkgOiBqUXVlcnkuY3NzKGVsZW0sIG5hbWUpO1xuICAgICAgfSwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbi5wcm90b3R5cGUuaW5pdChlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyk7XG4gIH1cblxuICBqUXVlcnkuVHdlZW4gPSBUd2VlbjtcbiAgVHdlZW4ucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBUd2VlbixcbiAgICBpbml0OiBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcsIHVuaXQpIHtcbiAgICAgIHRoaXMuZWxlbSA9IGVsZW07XG4gICAgICB0aGlzLnByb3AgPSBwcm9wO1xuICAgICAgdGhpcy5lYXNpbmcgPSBlYXNpbmcgfHwgalF1ZXJ5LmVhc2luZy5fZGVmYXVsdDtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5ub3cgPSB0aGlzLmN1cigpO1xuICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICB0aGlzLnVuaXQgPSB1bml0IHx8IChqUXVlcnkuY3NzTnVtYmVyW3Byb3BdID8gXCJcIiA6IFwicHhcIik7XG4gICAgfSxcbiAgICBjdXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1t0aGlzLnByb3BdO1xuICAgICAgcmV0dXJuIGhvb2tzICYmIGhvb2tzLmdldCA/IGhvb2tzLmdldCh0aGlzKSA6IFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyk7XG4gICAgfSxcbiAgICBydW46IGZ1bmN0aW9uIChwZXJjZW50KSB7XG4gICAgICB2YXIgZWFzZWQsXG4gICAgICAgICAgaG9va3MgPSBUd2Vlbi5wcm9wSG9va3NbdGhpcy5wcm9wXTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvcyA9IGVhc2VkID0galF1ZXJ5LmVhc2luZ1t0aGlzLmVhc2luZ10ocGVyY2VudCwgdGhpcy5vcHRpb25zLmR1cmF0aW9uICogcGVyY2VudCwgMCwgMSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLm5vdyA9ICh0aGlzLmVuZCAtIHRoaXMuc3RhcnQpICogZWFzZWQgKyB0aGlzLnN0YXJ0O1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0ZXApIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sIHRoaXMubm93LCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhvb2tzICYmIGhvb2tzLnNldCkge1xuICAgICAgICBob29rcy5zZXQodGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG4gIFR3ZWVuLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZSA9IFR3ZWVuLnByb3RvdHlwZTtcbiAgVHdlZW4ucHJvcEhvb2tzID0ge1xuICAgIF9kZWZhdWx0OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgICAgICB2YXIgcmVzdWx0OyAvLyBVc2UgYSBwcm9wZXJ0eSBvbiB0aGUgZWxlbWVudCBkaXJlY3RseSB3aGVuIGl0IGlzIG5vdCBhIERPTSBlbGVtZW50LFxuICAgICAgICAvLyBvciB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHN0eWxlIHByb3BlcnR5IHRoYXQgZXhpc3RzLlxuXG4gICAgICAgIGlmICh0d2Vlbi5lbGVtLm5vZGVUeXBlICE9PSAxIHx8IHR3ZWVuLmVsZW1bdHdlZW4ucHJvcF0gIT0gbnVsbCAmJiB0d2Vlbi5lbGVtLnN0eWxlW3R3ZWVuLnByb3BdID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHdlZW4uZWxlbVt0d2Vlbi5wcm9wXTtcbiAgICAgICAgfSAvLyBQYXNzaW5nIGFuIGVtcHR5IHN0cmluZyBhcyBhIDNyZCBwYXJhbWV0ZXIgdG8gLmNzcyB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgLy8gYXR0ZW1wdCBhIHBhcnNlRmxvYXQgYW5kIGZhbGxiYWNrIHRvIGEgc3RyaW5nIGlmIHRoZSBwYXJzZSBmYWlscy5cbiAgICAgICAgLy8gU2ltcGxlIHZhbHVlcyBzdWNoIGFzIFwiMTBweFwiIGFyZSBwYXJzZWQgdG8gRmxvYXQ7XG4gICAgICAgIC8vIGNvbXBsZXggdmFsdWVzIHN1Y2ggYXMgXCJyb3RhdGUoMXJhZClcIiBhcmUgcmV0dXJuZWQgYXMtaXMuXG5cblxuICAgICAgICByZXN1bHQgPSBqUXVlcnkuY3NzKHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIFwiXCIpOyAvLyBFbXB0eSBzdHJpbmdzLCBudWxsLCB1bmRlZmluZWQgYW5kIFwiYXV0b1wiIGFyZSBjb252ZXJ0ZWQgdG8gMC5cblxuICAgICAgICByZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgICAgICAvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cbiAgICAgICAgLy8gVXNlIGNzc0hvb2sgaWYgaXRzIHRoZXJlLlxuICAgICAgICAvLyBVc2UgLnN0eWxlIGlmIGF2YWlsYWJsZSBhbmQgdXNlIHBsYWluIHByb3BlcnRpZXMgd2hlcmUgYXZhaWxhYmxlLlxuICAgICAgICBpZiAoalF1ZXJ5LmZ4LnN0ZXBbdHdlZW4ucHJvcF0pIHtcbiAgICAgICAgICBqUXVlcnkuZnguc3RlcFt0d2Vlbi5wcm9wXSh0d2Vlbik7XG4gICAgICAgIH0gZWxzZSBpZiAodHdlZW4uZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoalF1ZXJ5LmNzc0hvb2tzW3R3ZWVuLnByb3BdIHx8IHR3ZWVuLmVsZW0uc3R5bGVbZmluYWxQcm9wTmFtZSh0d2Vlbi5wcm9wKV0gIT0gbnVsbCkpIHtcbiAgICAgICAgICBqUXVlcnkuc3R5bGUodHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgdHdlZW4ubm93ICsgdHdlZW4udW5pdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHdlZW4uZWxlbVt0d2Vlbi5wcm9wXSA9IHR3ZWVuLm5vdztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTsgLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbiAgLy8gUGFuaWMgYmFzZWQgYXBwcm9hY2ggdG8gc2V0dGluZyB0aGluZ3Mgb24gZGlzY29ubmVjdGVkIG5vZGVzXG5cbiAgVHdlZW4ucHJvcEhvb2tzLnNjcm9sbFRvcCA9IFR3ZWVuLnByb3BIb29rcy5zY3JvbGxMZWZ0ID0ge1xuICAgIHNldDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICBpZiAodHdlZW4uZWxlbS5ub2RlVHlwZSAmJiB0d2Vlbi5lbGVtLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdHdlZW4uZWxlbVt0d2Vlbi5wcm9wXSA9IHR3ZWVuLm5vdztcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGpRdWVyeS5lYXNpbmcgPSB7XG4gICAgbGluZWFyOiBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICBzd2luZzogZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAwLjUgLSBNYXRoLmNvcyhwICogTWF0aC5QSSkgLyAyO1xuICAgIH0sXG4gICAgX2RlZmF1bHQ6IFwic3dpbmdcIlxuICB9O1xuICBqUXVlcnkuZnggPSBUd2Vlbi5wcm90b3R5cGUuaW5pdDsgLy8gQmFjayBjb21wYXQgPDEuOCBleHRlbnNpb24gcG9pbnRcblxuICBqUXVlcnkuZnguc3RlcCA9IHt9O1xuICB2YXIgZnhOb3csXG4gICAgICBpblByb2dyZXNzLFxuICAgICAgcmZ4dHlwZXMgPSAvXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sXG4gICAgICBycnVuID0gL3F1ZXVlSG9va3MkLztcblxuICBmdW5jdGlvbiBzY2hlZHVsZSgpIHtcbiAgICBpZiAoaW5Qcm9ncmVzcykge1xuICAgICAgaWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gZmFsc2UgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHNjaGVkdWxlLCBqUXVlcnkuZnguaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBqUXVlcnkuZngudGljaygpO1xuICAgIH1cbiAgfSAvLyBBbmltYXRpb25zIGNyZWF0ZWQgc3luY2hyb25vdXNseSB3aWxsIHJ1biBzeW5jaHJvbm91c2x5XG5cblxuICBmdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmeE5vdyA9IHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgICByZXR1cm4gZnhOb3cgPSBEYXRlLm5vdygpO1xuICB9IC8vIEdlbmVyYXRlIHBhcmFtZXRlcnMgdG8gY3JlYXRlIGEgc3RhbmRhcmQgYW5pbWF0aW9uXG5cblxuICBmdW5jdGlvbiBnZW5GeCh0eXBlLCBpbmNsdWRlV2lkdGgpIHtcbiAgICB2YXIgd2hpY2gsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBhdHRycyA9IHtcbiAgICAgIGhlaWdodDogdHlwZVxuICAgIH07IC8vIElmIHdlIGluY2x1ZGUgd2lkdGgsIHN0ZXAgdmFsdWUgaXMgMSB0byBkbyBhbGwgY3NzRXhwYW5kIHZhbHVlcyxcbiAgICAvLyBvdGhlcndpc2Ugc3RlcCB2YWx1ZSBpcyAyIHRvIHNraXAgb3ZlciBMZWZ0IGFuZCBSaWdodFxuXG4gICAgaW5jbHVkZVdpZHRoID0gaW5jbHVkZVdpZHRoID8gMSA6IDA7XG5cbiAgICBmb3IgKDsgaSA8IDQ7IGkgKz0gMiAtIGluY2x1ZGVXaWR0aCkge1xuICAgICAgd2hpY2ggPSBjc3NFeHBhbmRbaV07XG4gICAgICBhdHRyc1tcIm1hcmdpblwiICsgd2hpY2hdID0gYXR0cnNbXCJwYWRkaW5nXCIgKyB3aGljaF0gPSB0eXBlO1xuICAgIH1cblxuICAgIGlmIChpbmNsdWRlV2lkdGgpIHtcbiAgICAgIGF0dHJzLm9wYWNpdHkgPSBhdHRycy53aWR0aCA9IHR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVHdlZW4odmFsdWUsIHByb3AsIGFuaW1hdGlvbikge1xuICAgIHZhciB0d2VlbixcbiAgICAgICAgY29sbGVjdGlvbiA9IChBbmltYXRpb24udHdlZW5lcnNbcHJvcF0gfHwgW10pLmNvbmNhdChBbmltYXRpb24udHdlZW5lcnNbXCIqXCJdKSxcbiAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcblxuICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKHR3ZWVuID0gY29sbGVjdGlvbltpbmRleF0uY2FsbChhbmltYXRpb24sIHByb3AsIHZhbHVlKSkge1xuICAgICAgICAvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBwcm9wZXJ0eVxuICAgICAgICByZXR1cm4gdHdlZW47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdFByZWZpbHRlcihlbGVtLCBwcm9wcywgb3B0cykge1xuICAgIHZhciBwcm9wLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgdG9nZ2xlLFxuICAgICAgICBob29rcyxcbiAgICAgICAgb2xkZmlyZSxcbiAgICAgICAgcHJvcFR3ZWVuLFxuICAgICAgICByZXN0b3JlRGlzcGxheSxcbiAgICAgICAgZGlzcGxheSxcbiAgICAgICAgaXNCb3ggPSBcIndpZHRoXCIgaW4gcHJvcHMgfHwgXCJoZWlnaHRcIiBpbiBwcm9wcyxcbiAgICAgICAgYW5pbSA9IHRoaXMsXG4gICAgICAgIG9yaWcgPSB7fSxcbiAgICAgICAgc3R5bGUgPSBlbGVtLnN0eWxlLFxuICAgICAgICBoaWRkZW4gPSBlbGVtLm5vZGVUeXBlICYmIGlzSGlkZGVuV2l0aGluVHJlZShlbGVtKSxcbiAgICAgICAgZGF0YVNob3cgPSBkYXRhUHJpdi5nZXQoZWxlbSwgXCJmeHNob3dcIik7IC8vIFF1ZXVlLXNraXBwaW5nIGFuaW1hdGlvbnMgaGlqYWNrIHRoZSBmeCBob29rc1xuXG4gICAgaWYgKCFvcHRzLnF1ZXVlKSB7XG4gICAgICBob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyhlbGVtLCBcImZ4XCIpO1xuXG4gICAgICBpZiAoaG9va3MudW5xdWV1ZWQgPT0gbnVsbCkge1xuICAgICAgICBob29rcy51bnF1ZXVlZCA9IDA7XG4gICAgICAgIG9sZGZpcmUgPSBob29rcy5lbXB0eS5maXJlO1xuXG4gICAgICAgIGhvb2tzLmVtcHR5LmZpcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFob29rcy51bnF1ZXVlZCkge1xuICAgICAgICAgICAgb2xkZmlyZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaG9va3MudW5xdWV1ZWQrKztcbiAgICAgIGFuaW0uYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRW5zdXJlIHRoZSBjb21wbGV0ZSBoYW5kbGVyIGlzIGNhbGxlZCBiZWZvcmUgdGhpcyBjb21wbGV0ZXNcbiAgICAgICAgYW5pbS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGhvb2tzLnVucXVldWVkLS07XG5cbiAgICAgICAgICBpZiAoIWpRdWVyeS5xdWV1ZShlbGVtLCBcImZ4XCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgaG9va3MuZW1wdHkuZmlyZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IC8vIERldGVjdCBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXG5cbiAgICBmb3IgKHByb3AgaW4gcHJvcHMpIHtcbiAgICAgIHZhbHVlID0gcHJvcHNbcHJvcF07XG5cbiAgICAgIGlmIChyZnh0eXBlcy50ZXN0KHZhbHVlKSkge1xuICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICAgIHRvZ2dsZSA9IHRvZ2dsZSB8fCB2YWx1ZSA9PT0gXCJ0b2dnbGVcIjtcblxuICAgICAgICBpZiAodmFsdWUgPT09IChoaWRkZW4gPyBcImhpZGVcIiA6IFwic2hvd1wiKSkge1xuICAgICAgICAgIC8vIFByZXRlbmQgdG8gYmUgaGlkZGVuIGlmIHRoaXMgaXMgYSBcInNob3dcIiBhbmRcbiAgICAgICAgICAvLyB0aGVyZSBpcyBzdGlsbCBkYXRhIGZyb20gYSBzdG9wcGVkIHNob3cvaGlkZVxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJzaG93XCIgJiYgZGF0YVNob3cgJiYgZGF0YVNob3dbcHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGlkZGVuID0gdHJ1ZTsgLy8gSWdub3JlIGFsbCBvdGhlciBuby1vcCBzaG93L2hpZGUgZGF0YVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnW3Byb3BdID0gZGF0YVNob3cgJiYgZGF0YVNob3dbcHJvcF0gfHwgalF1ZXJ5LnN0eWxlKGVsZW0sIHByb3ApO1xuICAgICAgfVxuICAgIH0gLy8gQmFpbCBvdXQgaWYgdGhpcyBpcyBhIG5vLW9wIGxpa2UgLmhpZGUoKS5oaWRlKClcblxuXG4gICAgcHJvcFR3ZWVuID0gIWpRdWVyeS5pc0VtcHR5T2JqZWN0KHByb3BzKTtcblxuICAgIGlmICghcHJvcFR3ZWVuICYmIGpRdWVyeS5pc0VtcHR5T2JqZWN0KG9yaWcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBSZXN0cmljdCBcIm92ZXJmbG93XCIgYW5kIFwiZGlzcGxheVwiIHN0eWxlcyBkdXJpbmcgYm94IGFuaW1hdGlvbnNcblxuXG4gICAgaWYgKGlzQm94ICYmIGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExLCBFZGdlIDEyIC0gMTVcbiAgICAgIC8vIFJlY29yZCBhbGwgMyBvdmVyZmxvdyBhdHRyaWJ1dGVzIGJlY2F1c2UgSUUgZG9lcyBub3QgaW5mZXIgdGhlIHNob3J0aGFuZFxuICAgICAgLy8gZnJvbSBpZGVudGljYWxseS12YWx1ZWQgb3ZlcmZsb3dYIGFuZCBvdmVyZmxvd1kgYW5kIEVkZ2UganVzdCBtaXJyb3JzXG4gICAgICAvLyB0aGUgb3ZlcmZsb3dYIHZhbHVlIHRoZXJlLlxuICAgICAgb3B0cy5vdmVyZmxvdyA9IFtzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1ldOyAvLyBJZGVudGlmeSBhIGRpc3BsYXkgdHlwZSwgcHJlZmVycmluZyBvbGQgc2hvdy9oaWRlIGRhdGEgb3ZlciB0aGUgQ1NTIGNhc2NhZGVcblxuICAgICAgcmVzdG9yZURpc3BsYXkgPSBkYXRhU2hvdyAmJiBkYXRhU2hvdy5kaXNwbGF5O1xuXG4gICAgICBpZiAocmVzdG9yZURpc3BsYXkgPT0gbnVsbCkge1xuICAgICAgICByZXN0b3JlRGlzcGxheSA9IGRhdGFQcml2LmdldChlbGVtLCBcImRpc3BsYXlcIik7XG4gICAgICB9XG5cbiAgICAgIGRpc3BsYXkgPSBqUXVlcnkuY3NzKGVsZW0sIFwiZGlzcGxheVwiKTtcblxuICAgICAgaWYgKGRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIGlmIChyZXN0b3JlRGlzcGxheSkge1xuICAgICAgICAgIGRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBHZXQgbm9uZW1wdHkgdmFsdWUocykgYnkgdGVtcG9yYXJpbHkgZm9yY2luZyB2aXNpYmlsaXR5XG4gICAgICAgICAgc2hvd0hpZGUoW2VsZW1dLCB0cnVlKTtcbiAgICAgICAgICByZXN0b3JlRGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheSB8fCByZXN0b3JlRGlzcGxheTtcbiAgICAgICAgICBkaXNwbGF5ID0galF1ZXJ5LmNzcyhlbGVtLCBcImRpc3BsYXlcIik7XG4gICAgICAgICAgc2hvd0hpZGUoW2VsZW1dKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBBbmltYXRlIGlubGluZSBlbGVtZW50cyBhcyBpbmxpbmUtYmxvY2tcblxuXG4gICAgICBpZiAoZGlzcGxheSA9PT0gXCJpbmxpbmVcIiB8fCBkaXNwbGF5ID09PSBcImlubGluZS1ibG9ja1wiICYmIHJlc3RvcmVEaXNwbGF5ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGpRdWVyeS5jc3MoZWxlbSwgXCJmbG9hdFwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBkaXNwbGF5IHZhbHVlIGF0IHRoZSBlbmQgb2YgcHVyZSBzaG93L2hpZGUgYW5pbWF0aW9uc1xuICAgICAgICAgIGlmICghcHJvcFR3ZWVuKSB7XG4gICAgICAgICAgICBhbmltLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc3RvcmVEaXNwbGF5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgZGlzcGxheSA9IHN0eWxlLmRpc3BsYXk7XG4gICAgICAgICAgICAgIHJlc3RvcmVEaXNwbGF5ID0gZGlzcGxheSA9PT0gXCJub25lXCIgPyBcIlwiIDogZGlzcGxheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRzLm92ZXJmbG93KSB7XG4gICAgICBzdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICBhbmltLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0eWxlLm92ZXJmbG93ID0gb3B0cy5vdmVyZmxvd1swXTtcbiAgICAgICAgc3R5bGUub3ZlcmZsb3dYID0gb3B0cy5vdmVyZmxvd1sxXTtcbiAgICAgICAgc3R5bGUub3ZlcmZsb3dZID0gb3B0cy5vdmVyZmxvd1syXTtcbiAgICAgIH0pO1xuICAgIH0gLy8gSW1wbGVtZW50IHNob3cvaGlkZSBhbmltYXRpb25zXG5cblxuICAgIHByb3BUd2VlbiA9IGZhbHNlO1xuXG4gICAgZm9yIChwcm9wIGluIG9yaWcpIHtcbiAgICAgIC8vIEdlbmVyYWwgc2hvdy9oaWRlIHNldHVwIGZvciB0aGlzIGVsZW1lbnQgYW5pbWF0aW9uXG4gICAgICBpZiAoIXByb3BUd2Vlbikge1xuICAgICAgICBpZiAoZGF0YVNob3cpIHtcbiAgICAgICAgICBpZiAoXCJoaWRkZW5cIiBpbiBkYXRhU2hvdykge1xuICAgICAgICAgICAgaGlkZGVuID0gZGF0YVNob3cuaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhU2hvdyA9IGRhdGFQcml2LmFjY2VzcyhlbGVtLCBcImZ4c2hvd1wiLCB7XG4gICAgICAgICAgICBkaXNwbGF5OiByZXN0b3JlRGlzcGxheVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIFN0b3JlIGhpZGRlbi92aXNpYmxlIGZvciB0b2dnbGUgc28gYC5zdG9wKCkudG9nZ2xlKClgIFwicmV2ZXJzZXNcIlxuXG5cbiAgICAgICAgaWYgKHRvZ2dsZSkge1xuICAgICAgICAgIGRhdGFTaG93LmhpZGRlbiA9ICFoaWRkZW47XG4gICAgICAgIH0gLy8gU2hvdyBlbGVtZW50cyBiZWZvcmUgYW5pbWF0aW5nIHRoZW1cblxuXG4gICAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgICBzaG93SGlkZShbZWxlbV0sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG5cbiAgICAgICAgYW5pbS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xuICAgICAgICAgIC8vIFRoZSBmaW5hbCBzdGVwIG9mIGEgXCJoaWRlXCIgYW5pbWF0aW9uIGlzIGFjdHVhbGx5IGhpZGluZyB0aGUgZWxlbWVudFxuICAgICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgICBzaG93SGlkZShbZWxlbV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFQcml2LnJlbW92ZShlbGVtLCBcImZ4c2hvd1wiKTtcblxuICAgICAgICAgIGZvciAocHJvcCBpbiBvcmlnKSB7XG4gICAgICAgICAgICBqUXVlcnkuc3R5bGUoZWxlbSwgcHJvcCwgb3JpZ1twcm9wXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gUGVyLXByb3BlcnR5IHNldHVwXG5cblxuICAgICAgcHJvcFR3ZWVuID0gY3JlYXRlVHdlZW4oaGlkZGVuID8gZGF0YVNob3dbcHJvcF0gOiAwLCBwcm9wLCBhbmltKTtcblxuICAgICAgaWYgKCEocHJvcCBpbiBkYXRhU2hvdykpIHtcbiAgICAgICAgZGF0YVNob3dbcHJvcF0gPSBwcm9wVHdlZW4uc3RhcnQ7XG5cbiAgICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICAgIHByb3BUd2Vlbi5lbmQgPSBwcm9wVHdlZW4uc3RhcnQ7XG4gICAgICAgICAgcHJvcFR3ZWVuLnN0YXJ0ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3BGaWx0ZXIocHJvcHMsIHNwZWNpYWxFYXNpbmcpIHtcbiAgICB2YXIgaW5kZXgsIG5hbWUsIGVhc2luZywgdmFsdWUsIGhvb2tzOyAvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3NcblxuICAgIGZvciAoaW5kZXggaW4gcHJvcHMpIHtcbiAgICAgIG5hbWUgPSBjYW1lbENhc2UoaW5kZXgpO1xuICAgICAgZWFzaW5nID0gc3BlY2lhbEVhc2luZ1tuYW1lXTtcbiAgICAgIHZhbHVlID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgZWFzaW5nID0gdmFsdWVbMV07XG4gICAgICAgIHZhbHVlID0gcHJvcHNbaW5kZXhdID0gdmFsdWVbMF07XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCAhPT0gbmFtZSkge1xuICAgICAgICBwcm9wc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICBkZWxldGUgcHJvcHNbaW5kZXhdO1xuICAgICAgfVxuXG4gICAgICBob29rcyA9IGpRdWVyeS5jc3NIb29rc1tuYW1lXTtcblxuICAgICAgaWYgKGhvb2tzICYmIFwiZXhwYW5kXCIgaW4gaG9va3MpIHtcbiAgICAgICAgdmFsdWUgPSBob29rcy5leHBhbmQodmFsdWUpO1xuICAgICAgICBkZWxldGUgcHJvcHNbbmFtZV07IC8vIE5vdCBxdWl0ZSAkLmV4dGVuZCwgdGhpcyB3b24ndCBvdmVyd3JpdGUgZXhpc3Rpbmcga2V5cy5cbiAgICAgICAgLy8gUmV1c2luZyAnaW5kZXgnIGJlY2F1c2Ugd2UgaGF2ZSB0aGUgY29ycmVjdCBcIm5hbWVcIlxuXG4gICAgICAgIGZvciAoaW5kZXggaW4gdmFsdWUpIHtcbiAgICAgICAgICBpZiAoIShpbmRleCBpbiBwcm9wcykpIHtcbiAgICAgICAgICAgIHByb3BzW2luZGV4XSA9IHZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgIHNwZWNpYWxFYXNpbmdbaW5kZXhdID0gZWFzaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BlY2lhbEVhc2luZ1tuYW1lXSA9IGVhc2luZztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBBbmltYXRpb24oZWxlbSwgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQsXG4gICAgICAgIHN0b3BwZWQsXG4gICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgbGVuZ3RoID0gQW5pbWF0aW9uLnByZWZpbHRlcnMubGVuZ3RoLFxuICAgICAgICBkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBEb24ndCBtYXRjaCBlbGVtIGluIHRoZSA6YW5pbWF0ZWQgc2VsZWN0b3JcbiAgICAgIGRlbGV0ZSB0aWNrLmVsZW07XG4gICAgfSksXG4gICAgICAgIHRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc3RvcHBlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50VGltZSA9IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG4gICAgICAgICAgcmVtYWluaW5nID0gTWF0aC5tYXgoMCwgYW5pbWF0aW9uLnN0YXJ0VGltZSArIGFuaW1hdGlvbi5kdXJhdGlvbiAtIGN1cnJlbnRUaW1lKSxcbiAgICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDIuMyBvbmx5XG4gICAgICAvLyBBcmNoYWljIGNyYXNoIGJ1ZyB3b24ndCBhbGxvdyB1cyB0byB1c2UgYDEgLSAoIDAuNSB8fCAwIClgICgjMTI0OTcpXG4gICAgICB0ZW1wID0gcmVtYWluaW5nIC8gYW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAsXG4gICAgICAgICAgcGVyY2VudCA9IDEgLSB0ZW1wLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBsZW5ndGggPSBhbmltYXRpb24udHdlZW5zLmxlbmd0aDtcblxuICAgICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGFuaW1hdGlvbi50d2VlbnNbaW5kZXhdLnJ1bihwZXJjZW50KTtcbiAgICAgIH1cblxuICAgICAgZGVmZXJyZWQubm90aWZ5V2l0aChlbGVtLCBbYW5pbWF0aW9uLCBwZXJjZW50LCByZW1haW5pbmddKTsgLy8gSWYgdGhlcmUncyBtb3JlIHRvIGRvLCB5aWVsZFxuXG4gICAgICBpZiAocGVyY2VudCA8IDEgJiYgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiByZW1haW5pbmc7XG4gICAgICB9IC8vIElmIHRoaXMgd2FzIGFuIGVtcHR5IGFuaW1hdGlvbiwgc3ludGhlc2l6ZSBhIGZpbmFsIHByb2dyZXNzIG5vdGlmaWNhdGlvblxuXG5cbiAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgIGRlZmVycmVkLm5vdGlmeVdpdGgoZWxlbSwgW2FuaW1hdGlvbiwgMSwgMF0pO1xuICAgICAgfSAvLyBSZXNvbHZlIHRoZSBhbmltYXRpb24gYW5kIHJlcG9ydCBpdHMgY29uY2x1c2lvblxuXG5cbiAgICAgIGRlZmVycmVkLnJlc29sdmVXaXRoKGVsZW0sIFthbmltYXRpb25dKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICAgICBhbmltYXRpb24gPSBkZWZlcnJlZC5wcm9taXNlKHtcbiAgICAgIGVsZW06IGVsZW0sXG4gICAgICBwcm9wczogalF1ZXJ5LmV4dGVuZCh7fSwgcHJvcGVydGllcyksXG4gICAgICBvcHRzOiBqUXVlcnkuZXh0ZW5kKHRydWUsIHtcbiAgICAgICAgc3BlY2lhbEVhc2luZzoge30sXG4gICAgICAgIGVhc2luZzogalF1ZXJ5LmVhc2luZy5fZGVmYXVsdFxuICAgICAgfSwgb3B0aW9ucyksXG4gICAgICBvcmlnaW5hbFByb3BlcnRpZXM6IHByb3BlcnRpZXMsXG4gICAgICBvcmlnaW5hbE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBzdGFydFRpbWU6IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG4gICAgICBkdXJhdGlvbjogb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgIHR3ZWVuczogW10sXG4gICAgICBjcmVhdGVUd2VlbjogZnVuY3Rpb24gKHByb3AsIGVuZCkge1xuICAgICAgICB2YXIgdHdlZW4gPSBqUXVlcnkuVHdlZW4oZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCwgYW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZ1twcm9wXSB8fCBhbmltYXRpb24ub3B0cy5lYXNpbmcpO1xuICAgICAgICBhbmltYXRpb24udHdlZW5zLnB1c2godHdlZW4pO1xuICAgICAgICByZXR1cm4gdHdlZW47XG4gICAgICB9LFxuICAgICAgc3RvcDogZnVuY3Rpb24gKGdvdG9FbmQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBnb2luZyB0byB0aGUgZW5kLCB3ZSB3YW50IHRvIHJ1biBhbGwgdGhlIHR3ZWVuc1xuICAgICAgICAvLyBvdGhlcndpc2Ugd2Ugc2tpcCB0aGlzIHBhcnRcbiAgICAgICAgbGVuZ3RoID0gZ290b0VuZCA/IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoIDogMDtcblxuICAgICAgICBpZiAoc3RvcHBlZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RvcHBlZCA9IHRydWU7XG5cbiAgICAgICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnR3ZWVuc1tpbmRleF0ucnVuKDEpO1xuICAgICAgICB9IC8vIFJlc29sdmUgd2hlbiB3ZSBwbGF5ZWQgdGhlIGxhc3QgZnJhbWU7IG90aGVyd2lzZSwgcmVqZWN0XG5cblxuICAgICAgICBpZiAoZ290b0VuZCkge1xuICAgICAgICAgIGRlZmVycmVkLm5vdGlmeVdpdGgoZWxlbSwgW2FuaW1hdGlvbiwgMSwgMF0pO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmVXaXRoKGVsZW0sIFthbmltYXRpb24sIGdvdG9FbmRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3RXaXRoKGVsZW0sIFthbmltYXRpb24sIGdvdG9FbmRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH0pLFxuICAgICAgICBwcm9wcyA9IGFuaW1hdGlvbi5wcm9wcztcblxuICAgIHByb3BGaWx0ZXIocHJvcHMsIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmcpO1xuXG4gICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByZXN1bHQgPSBBbmltYXRpb24ucHJlZmlsdGVyc1tpbmRleF0uY2FsbChhbmltYXRpb24sIGVsZW0sIHByb3BzLCBhbmltYXRpb24ub3B0cyk7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmVzdWx0LnN0b3ApKSB7XG4gICAgICAgICAgalF1ZXJ5Ll9xdWV1ZUhvb2tzKGFuaW1hdGlvbi5lbGVtLCBhbmltYXRpb24ub3B0cy5xdWV1ZSkuc3RvcCA9IHJlc3VsdC5zdG9wLmJpbmQocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgalF1ZXJ5Lm1hcChwcm9wcywgY3JlYXRlVHdlZW4sIGFuaW1hdGlvbik7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihhbmltYXRpb24ub3B0cy5zdGFydCkpIHtcbiAgICAgIGFuaW1hdGlvbi5vcHRzLnN0YXJ0LmNhbGwoZWxlbSwgYW5pbWF0aW9uKTtcbiAgICB9IC8vIEF0dGFjaCBjYWxsYmFja3MgZnJvbSBvcHRpb25zXG5cblxuICAgIGFuaW1hdGlvbi5wcm9ncmVzcyhhbmltYXRpb24ub3B0cy5wcm9ncmVzcykuZG9uZShhbmltYXRpb24ub3B0cy5kb25lLCBhbmltYXRpb24ub3B0cy5jb21wbGV0ZSkuZmFpbChhbmltYXRpb24ub3B0cy5mYWlsKS5hbHdheXMoYW5pbWF0aW9uLm9wdHMuYWx3YXlzKTtcbiAgICBqUXVlcnkuZngudGltZXIoalF1ZXJ5LmV4dGVuZCh0aWNrLCB7XG4gICAgICBlbGVtOiBlbGVtLFxuICAgICAgYW5pbTogYW5pbWF0aW9uLFxuICAgICAgcXVldWU6IGFuaW1hdGlvbi5vcHRzLnF1ZXVlXG4gICAgfSkpO1xuICAgIHJldHVybiBhbmltYXRpb247XG4gIH1cblxuICBqUXVlcnkuQW5pbWF0aW9uID0galF1ZXJ5LmV4dGVuZChBbmltYXRpb24sIHtcbiAgICB0d2VlbmVyczoge1xuICAgICAgXCIqXCI6IFtmdW5jdGlvbiAocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR3ZWVuID0gdGhpcy5jcmVhdGVUd2Vlbihwcm9wLCB2YWx1ZSk7XG4gICAgICAgIGFkanVzdENTUyh0d2Vlbi5lbGVtLCBwcm9wLCByY3NzTnVtLmV4ZWModmFsdWUpLCB0d2Vlbik7XG4gICAgICAgIHJldHVybiB0d2VlbjtcbiAgICAgIH1dXG4gICAgfSxcbiAgICB0d2VlbmVyOiBmdW5jdGlvbiAocHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihwcm9wcykpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBwcm9wcztcbiAgICAgICAgcHJvcHMgPSBbXCIqXCJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMgPSBwcm9wcy5tYXRjaChybm90aHRtbHdoaXRlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3AsXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHByb3AgPSBwcm9wc1tpbmRleF07XG4gICAgICAgIEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXSA9IEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXSB8fCBbXTtcbiAgICAgICAgQW5pbWF0aW9uLnR3ZWVuZXJzW3Byb3BdLnVuc2hpZnQoY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJlZmlsdGVyczogW2RlZmF1bHRQcmVmaWx0ZXJdLFxuICAgIHByZWZpbHRlcjogZnVuY3Rpb24gKGNhbGxiYWNrLCBwcmVwZW5kKSB7XG4gICAgICBpZiAocHJlcGVuZCkge1xuICAgICAgICBBbmltYXRpb24ucHJlZmlsdGVycy51bnNoaWZ0KGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFuaW1hdGlvbi5wcmVmaWx0ZXJzLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgalF1ZXJ5LnNwZWVkID0gZnVuY3Rpb24gKHNwZWVkLCBlYXNpbmcsIGZuKSB7XG4gICAgdmFyIG9wdCA9IHNwZWVkICYmIHR5cGVvZiBzcGVlZCA9PT0gXCJvYmplY3RcIiA/IGpRdWVyeS5leHRlbmQoe30sIHNwZWVkKSA6IHtcbiAgICAgIGNvbXBsZXRlOiBmbiB8fCAhZm4gJiYgZWFzaW5nIHx8IGlzRnVuY3Rpb24oc3BlZWQpICYmIHNwZWVkLFxuICAgICAgZHVyYXRpb246IHNwZWVkLFxuICAgICAgZWFzaW5nOiBmbiAmJiBlYXNpbmcgfHwgZWFzaW5nICYmICFpc0Z1bmN0aW9uKGVhc2luZykgJiYgZWFzaW5nXG4gICAgfTsgLy8gR28gdG8gdGhlIGVuZCBzdGF0ZSBpZiBmeCBhcmUgb2ZmXG5cbiAgICBpZiAoalF1ZXJ5LmZ4Lm9mZikge1xuICAgICAgb3B0LmR1cmF0aW9uID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBvcHQuZHVyYXRpb24gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaWYgKG9wdC5kdXJhdGlvbiBpbiBqUXVlcnkuZnguc3BlZWRzKSB7XG4gICAgICAgICAgb3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkc1tvcHQuZHVyYXRpb25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdC5kdXJhdGlvbiA9IGpRdWVyeS5meC5zcGVlZHMuX2RlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIE5vcm1hbGl6ZSBvcHQucXVldWUgLSB0cnVlL3VuZGVmaW5lZC9udWxsIC0+IFwiZnhcIlxuXG5cbiAgICBpZiAob3B0LnF1ZXVlID09IG51bGwgfHwgb3B0LnF1ZXVlID09PSB0cnVlKSB7XG4gICAgICBvcHQucXVldWUgPSBcImZ4XCI7XG4gICAgfSAvLyBRdWV1ZWluZ1xuXG5cbiAgICBvcHQub2xkID0gb3B0LmNvbXBsZXRlO1xuXG4gICAgb3B0LmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0Lm9sZCkpIHtcbiAgICAgICAgb3B0Lm9sZC5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0LnF1ZXVlKSB7XG4gICAgICAgIGpRdWVyeS5kZXF1ZXVlKHRoaXMsIG9wdC5xdWV1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBvcHQ7XG4gIH07XG5cbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgZmFkZVRvOiBmdW5jdGlvbiAoc3BlZWQsIHRvLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAvLyBTaG93IGFueSBoaWRkZW4gZWxlbWVudHMgYWZ0ZXIgc2V0dGluZyBvcGFjaXR5IHRvIDBcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcihpc0hpZGRlbldpdGhpblRyZWUpLmNzcyhcIm9wYWNpdHlcIiwgMCkuc2hvdygpIC8vIEFuaW1hdGUgdG8gdGhlIHZhbHVlIHNwZWNpZmllZFxuICAgICAgLmVuZCgpLmFuaW1hdGUoe1xuICAgICAgICBvcGFjaXR5OiB0b1xuICAgICAgfSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gKHByb3AsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgZW1wdHkgPSBqUXVlcnkuaXNFbXB0eU9iamVjdChwcm9wKSxcbiAgICAgICAgICBvcHRhbGwgPSBqUXVlcnkuc3BlZWQoc3BlZWQsIGVhc2luZywgY2FsbGJhY2spLFxuICAgICAgICAgIGRvQW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBPcGVyYXRlIG9uIGEgY29weSBvZiBwcm9wIHNvIHBlci1wcm9wZXJ0eSBlYXNpbmcgd29uJ3QgYmUgbG9zdFxuICAgICAgICB2YXIgYW5pbSA9IEFuaW1hdGlvbih0aGlzLCBqUXVlcnkuZXh0ZW5kKHt9LCBwcm9wKSwgb3B0YWxsKTsgLy8gRW1wdHkgYW5pbWF0aW9ucywgb3IgZmluaXNoaW5nIHJlc29sdmVzIGltbWVkaWF0ZWx5XG5cbiAgICAgICAgaWYgKGVtcHR5IHx8IGRhdGFQcml2LmdldCh0aGlzLCBcImZpbmlzaFwiKSkge1xuICAgICAgICAgIGFuaW0uc3RvcCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9BbmltYXRpb24uZmluaXNoID0gZG9BbmltYXRpb247XG4gICAgICByZXR1cm4gZW1wdHkgfHwgb3B0YWxsLnF1ZXVlID09PSBmYWxzZSA/IHRoaXMuZWFjaChkb0FuaW1hdGlvbikgOiB0aGlzLnF1ZXVlKG9wdGFsbC5xdWV1ZSwgZG9BbmltYXRpb24pO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gKHR5cGUsIGNsZWFyUXVldWUsIGdvdG9FbmQpIHtcbiAgICAgIHZhciBzdG9wUXVldWUgPSBmdW5jdGlvbiAoaG9va3MpIHtcbiAgICAgICAgdmFyIHN0b3AgPSBob29rcy5zdG9wO1xuICAgICAgICBkZWxldGUgaG9va3Muc3RvcDtcbiAgICAgICAgc3RvcChnb3RvRW5kKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBnb3RvRW5kID0gY2xlYXJRdWV1ZTtcbiAgICAgICAgY2xlYXJRdWV1ZSA9IHR5cGU7XG4gICAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGVhclF1ZXVlICYmIHR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucXVldWUodHlwZSB8fCBcImZ4XCIsIFtdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZXF1ZXVlID0gdHJ1ZSxcbiAgICAgICAgICAgIGluZGV4ID0gdHlwZSAhPSBudWxsICYmIHR5cGUgKyBcInF1ZXVlSG9va3NcIixcbiAgICAgICAgICAgIHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG4gICAgICAgICAgICBkYXRhID0gZGF0YVByaXYuZ2V0KHRoaXMpO1xuXG4gICAgICAgIGlmIChpbmRleCkge1xuICAgICAgICAgIGlmIChkYXRhW2luZGV4XSAmJiBkYXRhW2luZGV4XS5zdG9wKSB7XG4gICAgICAgICAgICBzdG9wUXVldWUoZGF0YVtpbmRleF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGluZGV4IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2luZGV4XSAmJiBkYXRhW2luZGV4XS5zdG9wICYmIHJydW4udGVzdChpbmRleCkpIHtcbiAgICAgICAgICAgICAgc3RvcFF1ZXVlKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTspIHtcbiAgICAgICAgICBpZiAodGltZXJzW2luZGV4XS5lbGVtID09PSB0aGlzICYmICh0eXBlID09IG51bGwgfHwgdGltZXJzW2luZGV4XS5xdWV1ZSA9PT0gdHlwZSkpIHtcbiAgICAgICAgICAgIHRpbWVyc1tpbmRleF0uYW5pbS5zdG9wKGdvdG9FbmQpO1xuICAgICAgICAgICAgZGVxdWV1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGltZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFN0YXJ0IHRoZSBuZXh0IGluIHRoZSBxdWV1ZSBpZiB0aGUgbGFzdCBzdGVwIHdhc24ndCBmb3JjZWQuXG4gICAgICAgIC8vIFRpbWVycyBjdXJyZW50bHkgd2lsbCBjYWxsIHRoZWlyIGNvbXBsZXRlIGNhbGxiYWNrcywgd2hpY2hcbiAgICAgICAgLy8gd2lsbCBkZXF1ZXVlIGJ1dCBvbmx5IGlmIHRoZXkgd2VyZSBnb3RvRW5kLlxuXG5cbiAgICAgICAgaWYgKGRlcXVldWUgfHwgIWdvdG9FbmQpIHtcbiAgICAgICAgICBqUXVlcnkuZGVxdWV1ZSh0aGlzLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBpZiAodHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZGV4LFxuICAgICAgICAgICAgZGF0YSA9IGRhdGFQcml2LmdldCh0aGlzKSxcbiAgICAgICAgICAgIHF1ZXVlID0gZGF0YVt0eXBlICsgXCJxdWV1ZVwiXSxcbiAgICAgICAgICAgIGhvb2tzID0gZGF0YVt0eXBlICsgXCJxdWV1ZUhvb2tzXCJdLFxuICAgICAgICAgICAgdGltZXJzID0galF1ZXJ5LnRpbWVycyxcbiAgICAgICAgICAgIGxlbmd0aCA9IHF1ZXVlID8gcXVldWUubGVuZ3RoIDogMDsgLy8gRW5hYmxlIGZpbmlzaGluZyBmbGFnIG9uIHByaXZhdGUgZGF0YVxuXG4gICAgICAgIGRhdGEuZmluaXNoID0gdHJ1ZTsgLy8gRW1wdHkgdGhlIHF1ZXVlIGZpcnN0XG5cbiAgICAgICAgalF1ZXJ5LnF1ZXVlKHRoaXMsIHR5cGUsIFtdKTtcblxuICAgICAgICBpZiAoaG9va3MgJiYgaG9va3Muc3RvcCkge1xuICAgICAgICAgIGhvb2tzLnN0b3AuY2FsbCh0aGlzLCB0cnVlKTtcbiAgICAgICAgfSAvLyBMb29rIGZvciBhbnkgYWN0aXZlIGFuaW1hdGlvbnMsIGFuZCBmaW5pc2ggdGhlbVxuXG5cbiAgICAgICAgZm9yIChpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07KSB7XG4gICAgICAgICAgaWYgKHRpbWVyc1tpbmRleF0uZWxlbSA9PT0gdGhpcyAmJiB0aW1lcnNbaW5kZXhdLnF1ZXVlID09PSB0eXBlKSB7XG4gICAgICAgICAgICB0aW1lcnNbaW5kZXhdLmFuaW0uc3RvcCh0cnVlKTtcbiAgICAgICAgICAgIHRpbWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBMb29rIGZvciBhbnkgYW5pbWF0aW9ucyBpbiB0aGUgb2xkIHF1ZXVlIGFuZCBmaW5pc2ggdGhlbVxuXG5cbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHF1ZXVlW2luZGV4XSAmJiBxdWV1ZVtpbmRleF0uZmluaXNoKSB7XG4gICAgICAgICAgICBxdWV1ZVtpbmRleF0uZmluaXNoLmNhbGwodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFR1cm4gb2ZmIGZpbmlzaGluZyBmbGFnXG5cblxuICAgICAgICBkZWxldGUgZGF0YS5maW5pc2g7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZWFjaChbXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiXSwgZnVuY3Rpb24gKGksIG5hbWUpIHtcbiAgICB2YXIgY3NzRm4gPSBqUXVlcnkuZm5bbmFtZV07XG5cbiAgICBqUXVlcnkuZm5bbmFtZV0gPSBmdW5jdGlvbiAoc3BlZWQsIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBzcGVlZCA9PSBudWxsIHx8IHR5cGVvZiBzcGVlZCA9PT0gXCJib29sZWFuXCIgPyBjc3NGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogdGhpcy5hbmltYXRlKGdlbkZ4KG5hbWUsIHRydWUpLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgfSk7IC8vIEdlbmVyYXRlIHNob3J0Y3V0cyBmb3IgY3VzdG9tIGFuaW1hdGlvbnNcblxuICBqUXVlcnkuZWFjaCh7XG4gICAgc2xpZGVEb3duOiBnZW5GeChcInNob3dcIiksXG4gICAgc2xpZGVVcDogZ2VuRngoXCJoaWRlXCIpLFxuICAgIHNsaWRlVG9nZ2xlOiBnZW5GeChcInRvZ2dsZVwiKSxcbiAgICBmYWRlSW46IHtcbiAgICAgIG9wYWNpdHk6IFwic2hvd1wiXG4gICAgfSxcbiAgICBmYWRlT3V0OiB7XG4gICAgICBvcGFjaXR5OiBcImhpZGVcIlxuICAgIH0sXG4gICAgZmFkZVRvZ2dsZToge1xuICAgICAgb3BhY2l0eTogXCJ0b2dnbGVcIlxuICAgIH1cbiAgfSwgZnVuY3Rpb24gKG5hbWUsIHByb3BzKSB7XG4gICAgalF1ZXJ5LmZuW25hbWVdID0gZnVuY3Rpb24gKHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbmltYXRlKHByb3BzLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgfSk7XG4gIGpRdWVyeS50aW1lcnMgPSBbXTtcblxuICBqUXVlcnkuZngudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGltZXIsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICB0aW1lcnMgPSBqUXVlcnkudGltZXJzO1xuICAgIGZ4Tm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGZvciAoOyBpIDwgdGltZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aW1lciA9IHRpbWVyc1tpXTsgLy8gUnVuIHRoZSB0aW1lciBhbmQgc2FmZWx5IHJlbW92ZSBpdCB3aGVuIGRvbmUgKGFsbG93aW5nIGZvciBleHRlcm5hbCByZW1vdmFsKVxuXG4gICAgICBpZiAoIXRpbWVyKCkgJiYgdGltZXJzW2ldID09PSB0aW1lcikge1xuICAgICAgICB0aW1lcnMuc3BsaWNlKGktLSwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aW1lcnMubGVuZ3RoKSB7XG4gICAgICBqUXVlcnkuZnguc3RvcCgpO1xuICAgIH1cblxuICAgIGZ4Tm93ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIGpRdWVyeS5meC50aW1lciA9IGZ1bmN0aW9uICh0aW1lcikge1xuICAgIGpRdWVyeS50aW1lcnMucHVzaCh0aW1lcik7XG4gICAgalF1ZXJ5LmZ4LnN0YXJ0KCk7XG4gIH07XG5cbiAgalF1ZXJ5LmZ4LmludGVydmFsID0gMTM7XG5cbiAgalF1ZXJ5LmZ4LnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpblByb2dyZXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgc2NoZWR1bGUoKTtcbiAgfTtcblxuICBqUXVlcnkuZnguc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpblByb2dyZXNzID0gbnVsbDtcbiAgfTtcblxuICBqUXVlcnkuZnguc3BlZWRzID0ge1xuICAgIHNsb3c6IDYwMCxcbiAgICBmYXN0OiAyMDAsXG4gICAgLy8gRGVmYXVsdCBzcGVlZFxuICAgIF9kZWZhdWx0OiA0MDBcbiAgfTsgLy8gQmFzZWQgb2ZmIG9mIHRoZSBwbHVnaW4gYnkgQ2xpbnQgSGVsZmVycywgd2l0aCBwZXJtaXNzaW9uLlxuICAvLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxMDAzMjQwMTQ3NDcvaHR0cDovL2JsaW5kc2lnbmFscy5jb20vaW5kZXgucGhwLzIwMDkvMDcvanF1ZXJ5LWRlbGF5L1xuXG4gIGpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uICh0aW1lLCB0eXBlKSB7XG4gICAgdGltZSA9IGpRdWVyeS5meCA/IGpRdWVyeS5meC5zcGVlZHNbdGltZV0gfHwgdGltZSA6IHRpbWU7XG4gICAgdHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuICAgIHJldHVybiB0aGlzLnF1ZXVlKHR5cGUsIGZ1bmN0aW9uIChuZXh0LCBob29rcykge1xuICAgICAgdmFyIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChuZXh0LCB0aW1lKTtcblxuICAgICAgaG9va3Muc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gICAgICAgIHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXG4gICAgICAgIG9wdCA9IHNlbGVjdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTtcbiAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiOyAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4zIG9ubHlcbiAgICAvLyBEZWZhdWx0IHZhbHVlIGZvciBhIGNoZWNrYm94IHNob3VsZCBiZSBcIm9uXCJcblxuICAgIHN1cHBvcnQuY2hlY2tPbiA9IGlucHV0LnZhbHVlICE9PSBcIlwiOyAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbiAgICAvLyBNdXN0IGFjY2VzcyBzZWxlY3RlZEluZGV4IHRvIG1ha2UgZGVmYXVsdCBvcHRpb25zIHNlbGVjdFxuXG4gICAgc3VwcG9ydC5vcHRTZWxlY3RlZCA9IG9wdC5zZWxlY3RlZDsgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4gICAgLy8gQW4gaW5wdXQgbG9zZXMgaXRzIHZhbHVlIGFmdGVyIGJlY29taW5nIGEgcmFkaW9cblxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnZhbHVlID0gXCJ0XCI7XG4gICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcbiAgICBzdXBwb3J0LnJhZGlvVmFsdWUgPSBpbnB1dC52YWx1ZSA9PT0gXCJ0XCI7XG4gIH0pKCk7XG5cbiAgdmFyIGJvb2xIb29rLFxuICAgICAgYXR0ckhhbmRsZSA9IGpRdWVyeS5leHByLmF0dHJIYW5kbGU7XG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIGF0dHI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBqUXVlcnkuYXR0ciwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxKTtcbiAgICB9LFxuICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgalF1ZXJ5LnJlbW92ZUF0dHIodGhpcywgbmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZXh0ZW5kKHtcbiAgICBhdHRyOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciByZXQsXG4gICAgICAgICAgaG9va3MsXG4gICAgICAgICAgblR5cGUgPSBlbGVtLm5vZGVUeXBlOyAvLyBEb24ndCBnZXQvc2V0IGF0dHJpYnV0ZXMgb24gdGV4dCwgY29tbWVudCBhbmQgYXR0cmlidXRlIG5vZGVzXG5cbiAgICAgIGlmIChuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEZhbGxiYWNrIHRvIHByb3Agd2hlbiBhdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkXG5cblxuICAgICAgaWYgKHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4galF1ZXJ5LnByb3AoZWxlbSwgbmFtZSwgdmFsdWUpO1xuICAgICAgfSAvLyBBdHRyaWJ1dGUgaG9va3MgYXJlIGRldGVybWluZWQgYnkgdGhlIGxvd2VyY2FzZSB2ZXJzaW9uXG4gICAgICAvLyBHcmFiIG5lY2Vzc2FyeSBob29rIGlmIG9uZSBpcyBkZWZpbmVkXG5cblxuICAgICAgaWYgKG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoZWxlbSkpIHtcbiAgICAgICAgaG9va3MgPSBqUXVlcnkuYXR0ckhvb2tzW25hbWUudG9Mb3dlckNhc2UoKV0gfHwgKGpRdWVyeS5leHByLm1hdGNoLmJvb2wudGVzdChuYW1lKSA/IGJvb2xIb29rIDogdW5kZWZpbmVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgalF1ZXJ5LnJlbW92ZUF0dHIoZWxlbSwgbmFtZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLnNldChlbGVtLCB2YWx1ZSwgbmFtZSkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgKyBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KGVsZW0sIG5hbWUpKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgICByZXQgPSBqUXVlcnkuZmluZC5hdHRyKGVsZW0sIG5hbWUpOyAvLyBOb24tZXhpc3RlbnQgYXR0cmlidXRlcyByZXR1cm4gbnVsbCwgd2Ugbm9ybWFsaXplIHRvIHVuZGVmaW5lZFxuXG4gICAgICByZXR1cm4gcmV0ID09IG51bGwgPyB1bmRlZmluZWQgOiByZXQ7XG4gICAgfSxcbiAgICBhdHRySG9va3M6IHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZWxlbSwgdmFsdWUpIHtcbiAgICAgICAgICBpZiAoIXN1cHBvcnQucmFkaW9WYWx1ZSAmJiB2YWx1ZSA9PT0gXCJyYWRpb1wiICYmIG5vZGVOYW1lKGVsZW0sIFwiaW5wdXRcIikpIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBlbGVtLnZhbHVlO1xuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICBlbGVtLnZhbHVlID0gdmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoZWxlbSwgdmFsdWUpIHtcbiAgICAgIHZhciBuYW1lLFxuICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgIC8vIEF0dHJpYnV0ZSBuYW1lcyBjYW4gY29udGFpbiBub24tSFRNTCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcbiAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuICAgICAgYXR0ck5hbWVzID0gdmFsdWUgJiYgdmFsdWUubWF0Y2gocm5vdGh0bWx3aGl0ZSk7XG5cbiAgICAgIGlmIChhdHRyTmFtZXMgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICB3aGlsZSAobmFtZSA9IGF0dHJOYW1lc1tpKytdKSB7XG4gICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBIb29rcyBmb3IgYm9vbGVhbiBhdHRyaWJ1dGVzXG5cbiAgYm9vbEhvb2sgPSB7XG4gICAgc2V0OiBmdW5jdGlvbiAoZWxlbSwgdmFsdWUsIG5hbWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGJvb2xlYW4gYXR0cmlidXRlcyB3aGVuIHNldCB0byBmYWxzZVxuICAgICAgICBqUXVlcnkucmVtb3ZlQXR0cihlbGVtLCBuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gIH07XG4gIGpRdWVyeS5lYWNoKGpRdWVyeS5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLCBmdW5jdGlvbiAoaSwgbmFtZSkge1xuICAgIHZhciBnZXR0ZXIgPSBhdHRySGFuZGxlW25hbWVdIHx8IGpRdWVyeS5maW5kLmF0dHI7XG5cbiAgICBhdHRySGFuZGxlW25hbWVdID0gZnVuY3Rpb24gKGVsZW0sIG5hbWUsIGlzWE1MKSB7XG4gICAgICB2YXIgcmV0LFxuICAgICAgICAgIGhhbmRsZSxcbiAgICAgICAgICBsb3dlcmNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAoIWlzWE1MKSB7XG4gICAgICAgIC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3AgYnkgdGVtcG9yYXJpbHkgcmVtb3ZpbmcgdGhpcyBmdW5jdGlvbiBmcm9tIHRoZSBnZXR0ZXJcbiAgICAgICAgaGFuZGxlID0gYXR0ckhhbmRsZVtsb3dlcmNhc2VOYW1lXTtcbiAgICAgICAgYXR0ckhhbmRsZVtsb3dlcmNhc2VOYW1lXSA9IHJldDtcbiAgICAgICAgcmV0ID0gZ2V0dGVyKGVsZW0sIG5hbWUsIGlzWE1MKSAhPSBudWxsID8gbG93ZXJjYXNlTmFtZSA6IG51bGw7XG4gICAgICAgIGF0dHJIYW5kbGVbbG93ZXJjYXNlTmFtZV0gPSBoYW5kbGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgfSk7XG4gIHZhciByZm9jdXNhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcbiAgICAgIHJjbGlja2FibGUgPSAvXig/OmF8YXJlYSkkL2k7XG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIHByb3A6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBqUXVlcnkucHJvcCwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxKTtcbiAgICB9LFxuICAgIHJlbW92ZVByb3A6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNbalF1ZXJ5LnByb3BGaXhbbmFtZV0gfHwgbmFtZV07XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZXh0ZW5kKHtcbiAgICBwcm9wOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciByZXQsXG4gICAgICAgICAgaG9va3MsXG4gICAgICAgICAgblR5cGUgPSBlbGVtLm5vZGVUeXBlOyAvLyBEb24ndCBnZXQvc2V0IHByb3BlcnRpZXMgb24gdGV4dCwgY29tbWVudCBhbmQgYXR0cmlidXRlIG5vZGVzXG5cbiAgICAgIGlmIChuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKGVsZW0pKSB7XG4gICAgICAgIC8vIEZpeCBuYW1lIGFuZCBhdHRhY2ggaG9va3NcbiAgICAgICAgbmFtZSA9IGpRdWVyeS5wcm9wRml4W25hbWVdIHx8IG5hbWU7XG4gICAgICAgIGhvb2tzID0galF1ZXJ5LnByb3BIb29rc1tuYW1lXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLnNldChlbGVtLCB2YWx1ZSwgbmFtZSkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1bbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLmdldChlbGVtLCBuYW1lKSkgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1bbmFtZV07XG4gICAgfSxcbiAgICBwcm9wSG9va3M6IHtcbiAgICAgIHRhYkluZGV4OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG4gICAgICAgICAgLy8gZWxlbS50YWJJbmRleCBkb2Vzbid0IGFsd2F5cyByZXR1cm4gdGhlXG4gICAgICAgICAgLy8gY29ycmVjdCB2YWx1ZSB3aGVuIGl0IGhhc24ndCBiZWVuIGV4cGxpY2l0bHkgc2V0XG4gICAgICAgICAgLy8gaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTQxMTE2MjMzMzQ3L2h0dHA6Ly9mbHVpZHByb2plY3Qub3JnL2Jsb2cvMjAwOC8wMS8wOS9nZXR0aW5nLXNldHRpbmctYW5kLXJlbW92aW5nLXRhYmluZGV4LXZhbHVlcy13aXRoLWphdmFzY3JpcHQvXG4gICAgICAgICAgLy8gVXNlIHByb3BlciBhdHRyaWJ1dGUgcmV0cmlldmFsKCMxMjA3MilcbiAgICAgICAgICB2YXIgdGFiaW5kZXggPSBqUXVlcnkuZmluZC5hdHRyKGVsZW0sIFwidGFiaW5kZXhcIik7XG5cbiAgICAgICAgICBpZiAodGFiaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0YWJpbmRleCwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZm9jdXNhYmxlLnRlc3QoZWxlbS5ub2RlTmFtZSkgfHwgcmNsaWNrYWJsZS50ZXN0KGVsZW0ubm9kZU5hbWUpICYmIGVsZW0uaHJlZikge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9wRml4OiB7XG4gICAgICBcImZvclwiOiBcImh0bWxGb3JcIixcbiAgICAgIFwiY2xhc3NcIjogXCJjbGFzc05hbWVcIlxuICAgIH1cbiAgfSk7IC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuICAvLyBBY2Nlc3NpbmcgdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHlcbiAgLy8gZm9yY2VzIHRoZSBicm93c2VyIHRvIHJlc3BlY3Qgc2V0dGluZyBzZWxlY3RlZFxuICAvLyBvbiB0aGUgb3B0aW9uXG4gIC8vIFRoZSBnZXR0ZXIgZW5zdXJlcyBhIGRlZmF1bHQgb3B0aW9uIGlzIHNlbGVjdGVkXG4gIC8vIHdoZW4gaW4gYW4gb3B0Z3JvdXBcbiAgLy8gZXNsaW50IHJ1bGUgXCJuby11bnVzZWQtZXhwcmVzc2lvbnNcIiBpcyBkaXNhYmxlZCBmb3IgdGhpcyBjb2RlXG4gIC8vIHNpbmNlIGl0IGNvbnNpZGVycyBzdWNoIGFjY2Vzc2lvbnMgbm9vcFxuXG4gIGlmICghc3VwcG9ydC5vcHRTZWxlY3RlZCkge1xuICAgIGpRdWVyeS5wcm9wSG9va3Muc2VsZWN0ZWQgPSB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cbiAgICAgICAgdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblxuICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgcGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgLyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuICAgICAgICB2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBwYXJlbnQuc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAgIGlmIChwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgcGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgalF1ZXJ5LmVhY2goW1widGFiSW5kZXhcIiwgXCJyZWFkT25seVwiLCBcIm1heExlbmd0aFwiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJyb3dTcGFuXCIsIFwiY29sU3BhblwiLCBcInVzZU1hcFwiLCBcImZyYW1lQm9yZGVyXCIsIFwiY29udGVudEVkaXRhYmxlXCJdLCBmdW5jdGlvbiAoKSB7XG4gICAgalF1ZXJ5LnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXSA9IHRoaXM7XG4gIH0pOyAvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gSFRNTCBzcGVjXG4gIC8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2UtYXNjaWktd2hpdGVzcGFjZVxuXG4gIGZ1bmN0aW9uIHN0cmlwQW5kQ29sbGFwc2UodmFsdWUpIHtcbiAgICB2YXIgdG9rZW5zID0gdmFsdWUubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW107XG4gICAgcmV0dXJuIHRva2Vucy5qb2luKFwiIFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENsYXNzKGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xhc3Nlc1RvQXJyYXkodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gdmFsdWUubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIGNsYXNzZXMsXG4gICAgICAgICAgZWxlbSxcbiAgICAgICAgICBjdXIsXG4gICAgICAgICAgY3VyVmFsdWUsXG4gICAgICAgICAgY2xhenosXG4gICAgICAgICAgaixcbiAgICAgICAgICBmaW5hbFZhbHVlLFxuICAgICAgICAgIGkgPSAwO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaikge1xuICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcyh2YWx1ZS5jYWxsKHRoaXMsIGosIGdldENsYXNzKHRoaXMpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjbGFzc2VzID0gY2xhc3Nlc1RvQXJyYXkodmFsdWUpO1xuXG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgd2hpbGUgKGVsZW0gPSB0aGlzW2krK10pIHtcbiAgICAgICAgICBjdXJWYWx1ZSA9IGdldENsYXNzKGVsZW0pO1xuICAgICAgICAgIGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKGN1clZhbHVlKSArIFwiIFwiO1xuXG4gICAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChjbGF6eiA9IGNsYXNzZXNbaisrXSkge1xuICAgICAgICAgICAgICBpZiAoY3VyLmluZGV4T2YoXCIgXCIgKyBjbGF6eiArIFwiIFwiKSA8IDApIHtcbiAgICAgICAgICAgICAgICBjdXIgKz0gY2xhenogKyBcIiBcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXG5cbiAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKGN1cik7XG5cbiAgICAgICAgICAgIGlmIChjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSkge1xuICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGZpbmFsVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBjbGFzc2VzLFxuICAgICAgICAgIGVsZW0sXG4gICAgICAgICAgY3VyLFxuICAgICAgICAgIGN1clZhbHVlLFxuICAgICAgICAgIGNsYXp6LFxuICAgICAgICAgIGosXG4gICAgICAgICAgZmluYWxWYWx1ZSxcbiAgICAgICAgICBpID0gMDtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGopIHtcbiAgICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3ModmFsdWUuY2FsbCh0aGlzLCBqLCBnZXRDbGFzcyh0aGlzKSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICAgIH1cblxuICAgICAgY2xhc3NlcyA9IGNsYXNzZXNUb0FycmF5KHZhbHVlKTtcblxuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIHdoaWxlIChlbGVtID0gdGhpc1tpKytdKSB7XG4gICAgICAgICAgY3VyVmFsdWUgPSBnZXRDbGFzcyhlbGVtKTsgLy8gVGhpcyBleHByZXNzaW9uIGlzIGhlcmUgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSBhZGRDbGFzcylcblxuICAgICAgICAgIGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKGN1clZhbHVlKSArIFwiIFwiO1xuXG4gICAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChjbGF6eiA9IGNsYXNzZXNbaisrXSkge1xuICAgICAgICAgICAgICAvLyBSZW1vdmUgKmFsbCogaW5zdGFuY2VzXG4gICAgICAgICAgICAgIHdoaWxlIChjdXIuaW5kZXhPZihcIiBcIiArIGNsYXp6ICsgXCIgXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZShcIiBcIiArIGNsYXp6ICsgXCIgXCIsIFwiIFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXG5cbiAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKGN1cik7XG5cbiAgICAgICAgICAgIGlmIChjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSkge1xuICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGZpbmFsVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiAodmFsdWUsIHN0YXRlVmFsKSB7XG4gICAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZSxcbiAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0eXBlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuXG4gICAgICBpZiAodHlwZW9mIHN0YXRlVmFsID09PSBcImJvb2xlYW5cIiAmJiBpc1ZhbGlkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlVmFsID8gdGhpcy5hZGRDbGFzcyh2YWx1ZSkgOiB0aGlzLnJlbW92ZUNsYXNzKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3ModmFsdWUuY2FsbCh0aGlzLCBpLCBnZXRDbGFzcyh0aGlzKSwgc3RhdGVWYWwpLCBzdGF0ZVZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSwgaSwgc2VsZiwgY2xhc3NOYW1lcztcblxuICAgICAgICBpZiAoaXNWYWxpZFZhbHVlKSB7XG4gICAgICAgICAgLy8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcbiAgICAgICAgICBpID0gMDtcbiAgICAgICAgICBzZWxmID0galF1ZXJ5KHRoaXMpO1xuICAgICAgICAgIGNsYXNzTmFtZXMgPSBjbGFzc2VzVG9BcnJheSh2YWx1ZSk7XG5cbiAgICAgICAgICB3aGlsZSAoY2xhc3NOYW1lID0gY2xhc3NOYW1lc1tpKytdKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBlYWNoIGNsYXNzTmFtZSBnaXZlbiwgc3BhY2Ugc2VwYXJhdGVkIGxpc3RcbiAgICAgICAgICAgIGlmIChzZWxmLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgc2VsZi5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gVG9nZ2xlIHdob2xlIGNsYXNzIG5hbWVcblxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBnZXRDbGFzcyh0aGlzKTtcblxuICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIC8vIFN0b3JlIGNsYXNzTmFtZSBpZiBzZXRcbiAgICAgICAgICAgIGRhdGFQcml2LnNldCh0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiwgY2xhc3NOYW1lKTtcbiAgICAgICAgICB9IC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIGNsYXNzIG5hbWUgb3IgaWYgd2UncmUgcGFzc2VkIGBmYWxzZWAsXG4gICAgICAgICAgLy8gdGhlbiByZW1vdmUgdGhlIHdob2xlIGNsYXNzbmFtZSAoaWYgdGhlcmUgd2FzIG9uZSwgdGhlIGFib3ZlIHNhdmVkIGl0KS5cbiAgICAgICAgICAvLyBPdGhlcndpc2UgYnJpbmcgYmFjayB3aGF0ZXZlciB3YXMgcHJldmlvdXNseSBzYXZlZCAoaWYgYW55dGhpbmcpLFxuICAgICAgICAgIC8vIGZhbGxpbmcgYmFjayB0byB0aGUgZW1wdHkgc3RyaW5nIGlmIG5vdGhpbmcgd2FzIHN0b3JlZC5cblxuXG4gICAgICAgICAgaWYgKHRoaXMuc2V0QXR0cmlidXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSB8fCB2YWx1ZSA9PT0gZmFsc2UgPyBcIlwiIDogZGF0YVByaXYuZ2V0KHRoaXMsIFwiX19jbGFzc05hbWVfX1wiKSB8fCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIGNsYXNzTmFtZSxcbiAgICAgICAgICBlbGVtLFxuICAgICAgICAgIGkgPSAwO1xuICAgICAgY2xhc3NOYW1lID0gXCIgXCIgKyBzZWxlY3RvciArIFwiIFwiO1xuXG4gICAgICB3aGlsZSAoZWxlbSA9IHRoaXNbaSsrXSkge1xuICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKGdldENsYXNzKGVsZW0pKSArIFwiIFwiKS5pbmRleE9mKGNsYXNzTmFtZSkgPiAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICB2YXIgcnJldHVybiA9IC9cXHIvZztcbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgdmFsOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBob29rcyxcbiAgICAgICAgICByZXQsXG4gICAgICAgICAgdmFsdWVJc0Z1bmN0aW9uLFxuICAgICAgICAgIGVsZW0gPSB0aGlzWzBdO1xuXG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICBob29rcyA9IGpRdWVyeS52YWxIb29rc1tlbGVtLnR5cGVdIHx8IGpRdWVyeS52YWxIb29rc1tlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgICAgaWYgKGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLmdldChlbGVtLCBcInZhbHVlXCIpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldCA9IGVsZW0udmFsdWU7IC8vIEhhbmRsZSBtb3N0IGNvbW1vbiBzdHJpbmcgY2FzZXNcblxuICAgICAgICAgIGlmICh0eXBlb2YgcmV0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0LnJlcGxhY2UocnJldHVybiwgXCJcIik7XG4gICAgICAgICAgfSAvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdmFsdWUgaXMgbnVsbC91bmRlZiBvciBudW1iZXJcblxuXG4gICAgICAgICAgcmV0dXJuIHJldCA9PSBudWxsID8gXCJcIiA6IHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFsdWVJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciB2YWw7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWVJc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgdmFsID0gdmFsdWUuY2FsbCh0aGlzLCBpLCBqUXVlcnkodGhpcykudmFsKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbCA9IHZhbHVlO1xuICAgICAgICB9IC8vIFRyZWF0IG51bGwvdW5kZWZpbmVkIGFzIFwiXCI7IGNvbnZlcnQgbnVtYmVycyB0byBzdHJpbmdcblxuXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgIHZhbCA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHZhbCArPSBcIlwiO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgIHZhbCA9IGpRdWVyeS5tYXAodmFsLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICsgXCJcIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzW3RoaXMudHlwZV0gfHwgalF1ZXJ5LnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV07IC8vIElmIHNldCByZXR1cm5zIHVuZGVmaW5lZCwgZmFsbCBiYWNrIHRvIG5vcm1hbCBzZXR0aW5nXG5cbiAgICAgICAgaWYgKCFob29rcyB8fCAhKFwic2V0XCIgaW4gaG9va3MpIHx8IGhvb2tzLnNldCh0aGlzLCB2YWwsIFwidmFsdWVcIikgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5leHRlbmQoe1xuICAgIHZhbEhvb2tzOiB7XG4gICAgICBvcHRpb246IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIHZhciB2YWwgPSBqUXVlcnkuZmluZC5hdHRyKGVsZW0sIFwidmFsdWVcIik7XG4gICAgICAgICAgcmV0dXJuIHZhbCAhPSBudWxsID8gdmFsIDogLy8gU3VwcG9ydDogSUUgPD0xMCAtIDExIG9ubHlcbiAgICAgICAgICAvLyBvcHRpb24udGV4dCB0aHJvd3MgZXhjZXB0aW9ucyAoIzE0Njg2LCAjMTQ4NTgpXG4gICAgICAgICAgLy8gU3RyaXAgYW5kIGNvbGxhcHNlIHdoaXRlc3BhY2VcbiAgICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2Utd2hpdGVzcGFjZVxuICAgICAgICAgIHN0cmlwQW5kQ29sbGFwc2UoalF1ZXJ5LnRleHQoZWxlbSkpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcbiAgICAgICAgICAgICAgaW5kZXggPSBlbGVtLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgICAgICAgIG9uZSA9IGVsZW0udHlwZSA9PT0gXCJzZWxlY3Qtb25lXCIsXG4gICAgICAgICAgICAgIHZhbHVlcyA9IG9uZSA/IG51bGwgOiBbXSxcbiAgICAgICAgICAgICAgbWF4ID0gb25lID8gaW5kZXggKyAxIDogb3B0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBpID0gbWF4O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpID0gb25lID8gaW5kZXggOiAwO1xuICAgICAgICAgIH0gLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgc2VsZWN0ZWQgb3B0aW9uc1xuXG5cbiAgICAgICAgICBmb3IgKDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgICBvcHRpb24gPSBvcHRpb25zW2ldOyAvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuICAgICAgICAgICAgLy8gSUU4LTkgZG9lc24ndCB1cGRhdGUgc2VsZWN0ZWQgYWZ0ZXIgZm9ybSByZXNldCAoIzI1NTEpXG5cbiAgICAgICAgICAgIGlmICgob3B0aW9uLnNlbGVjdGVkIHx8IGkgPT09IGluZGV4KSAmJiAvLyBEb24ndCByZXR1cm4gb3B0aW9ucyB0aGF0IGFyZSBkaXNhYmxlZCBvciBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG4gICAgICAgICAgICAhb3B0aW9uLmRpc2FibGVkICYmICghb3B0aW9uLnBhcmVudE5vZGUuZGlzYWJsZWQgfHwgIW5vZGVOYW1lKG9wdGlvbi5wYXJlbnROb2RlLCBcIm9wdGdyb3VwXCIpKSkge1xuICAgICAgICAgICAgICAvLyBHZXQgdGhlIHNwZWNpZmljIHZhbHVlIGZvciB0aGUgb3B0aW9uXG4gICAgICAgICAgICAgIHZhbHVlID0galF1ZXJ5KG9wdGlvbikudmFsKCk7IC8vIFdlIGRvbid0IG5lZWQgYW4gYXJyYXkgZm9yIG9uZSBzZWxlY3RzXG5cbiAgICAgICAgICAgICAgaWYgKG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgfSAvLyBNdWx0aS1TZWxlY3RzIHJldHVybiBhbiBhcnJheVxuXG5cbiAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGVsZW0sIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIG9wdGlvblNldCxcbiAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuICAgICAgICAgICAgICB2YWx1ZXMgPSBqUXVlcnkubWFrZUFycmF5KHZhbHVlKSxcbiAgICAgICAgICAgICAgaSA9IG9wdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgb3B0aW9uID0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgPSBqUXVlcnkuaW5BcnJheShqUXVlcnkudmFsSG9va3Mub3B0aW9uLmdldChvcHRpb24pLCB2YWx1ZXMpID4gLTEpIHtcbiAgICAgICAgICAgICAgb3B0aW9uU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuICAgICAgICAgIH0gLy8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblxuXG4gICAgICAgICAgaWYgKCFvcHRpb25TZXQpIHtcbiAgICAgICAgICAgIGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBSYWRpb3MgYW5kIGNoZWNrYm94ZXMgZ2V0dGVyL3NldHRlclxuXG4gIGpRdWVyeS5lYWNoKFtcInJhZGlvXCIsIFwiY2hlY2tib3hcIl0sIGZ1bmN0aW9uICgpIHtcbiAgICBqUXVlcnkudmFsSG9va3NbdGhpc10gPSB7XG4gICAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtLCB2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbS5jaGVja2VkID0galF1ZXJ5LmluQXJyYXkoalF1ZXJ5KGVsZW0pLnZhbCgpLCB2YWx1ZSkgPiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIXN1cHBvcnQuY2hlY2tPbikge1xuICAgICAgalF1ZXJ5LnZhbEhvb2tzW3RoaXNdLmdldCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpID09PSBudWxsID8gXCJvblwiIDogZWxlbS52YWx1ZTtcbiAgICAgIH07XG4gICAgfVxuICB9KTsgLy8gUmV0dXJuIGpRdWVyeSBmb3IgYXR0cmlidXRlcy1vbmx5IGluY2x1c2lvblxuXG4gIHN1cHBvcnQuZm9jdXNpbiA9IFwib25mb2N1c2luXCIgaW4gd2luZG93O1xuXG4gIHZhciByZm9jdXNNb3JwaCA9IC9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxcbiAgICAgIHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIGpRdWVyeS5leHRlbmQoalF1ZXJ5LmV2ZW50LCB7XG4gICAgdHJpZ2dlcjogZnVuY3Rpb24gKGV2ZW50LCBkYXRhLCBlbGVtLCBvbmx5SGFuZGxlcnMpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGN1cixcbiAgICAgICAgICB0bXAsXG4gICAgICAgICAgYnViYmxlVHlwZSxcbiAgICAgICAgICBvbnR5cGUsXG4gICAgICAgICAgaGFuZGxlLFxuICAgICAgICAgIHNwZWNpYWwsXG4gICAgICAgICAgbGFzdEVsZW1lbnQsXG4gICAgICAgICAgZXZlbnRQYXRoID0gW2VsZW0gfHwgZG9jdW1lbnRdLFxuICAgICAgICAgIHR5cGUgPSBoYXNPd24uY2FsbChldmVudCwgXCJ0eXBlXCIpID8gZXZlbnQudHlwZSA6IGV2ZW50LFxuICAgICAgICAgIG5hbWVzcGFjZXMgPSBoYXNPd24uY2FsbChldmVudCwgXCJuYW1lc3BhY2VcIikgPyBldmVudC5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpIDogW107XG4gICAgICBjdXIgPSBsYXN0RWxlbWVudCA9IHRtcCA9IGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50OyAvLyBEb24ndCBkbyBldmVudHMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXG4gICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gZm9jdXMvYmx1ciBtb3JwaHMgdG8gZm9jdXNpbi9vdXQ7IGVuc3VyZSB3ZSdyZSBub3QgZmlyaW5nIHRoZW0gcmlnaHQgbm93XG5cblxuICAgICAgaWYgKHJmb2N1c01vcnBoLnRlc3QodHlwZSArIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUuaW5kZXhPZihcIi5cIikgPiAtMSkge1xuICAgICAgICAvLyBOYW1lc3BhY2VkIHRyaWdnZXI7IGNyZWF0ZSBhIHJlZ2V4cCB0byBtYXRjaCBldmVudCB0eXBlIGluIGhhbmRsZSgpXG4gICAgICAgIG5hbWVzcGFjZXMgPSB0eXBlLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgdHlwZSA9IG5hbWVzcGFjZXMuc2hpZnQoKTtcbiAgICAgICAgbmFtZXNwYWNlcy5zb3J0KCk7XG4gICAgICB9XG5cbiAgICAgIG9udHlwZSA9IHR5cGUuaW5kZXhPZihcIjpcIikgPCAwICYmIFwib25cIiArIHR5cGU7IC8vIENhbGxlciBjYW4gcGFzcyBpbiBhIGpRdWVyeS5FdmVudCBvYmplY3QsIE9iamVjdCwgb3IganVzdCBhbiBldmVudCB0eXBlIHN0cmluZ1xuXG4gICAgICBldmVudCA9IGV2ZW50W2pRdWVyeS5leHBhbmRvXSA/IGV2ZW50IDogbmV3IGpRdWVyeS5FdmVudCh0eXBlLCB0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIgJiYgZXZlbnQpOyAvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXG5cbiAgICAgIGV2ZW50LmlzVHJpZ2dlciA9IG9ubHlIYW5kbGVycyA/IDIgOiAzO1xuICAgICAgZXZlbnQubmFtZXNwYWNlID0gbmFtZXNwYWNlcy5qb2luKFwiLlwiKTtcbiAgICAgIGV2ZW50LnJuYW1lc3BhY2UgPSBldmVudC5uYW1lc3BhY2UgPyBuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKSArIFwiKFxcXFwufCQpXCIpIDogbnVsbDsgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGluIGNhc2UgaXQgaXMgYmVpbmcgcmV1c2VkXG5cbiAgICAgIGV2ZW50LnJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKCFldmVudC50YXJnZXQpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0ID0gZWxlbTtcbiAgICAgIH0gLy8gQ2xvbmUgYW55IGluY29taW5nIGRhdGEgYW5kIHByZXBlbmQgdGhlIGV2ZW50LCBjcmVhdGluZyB0aGUgaGFuZGxlciBhcmcgbGlzdFxuXG5cbiAgICAgIGRhdGEgPSBkYXRhID09IG51bGwgPyBbZXZlbnRdIDogalF1ZXJ5Lm1ha2VBcnJheShkYXRhLCBbZXZlbnRdKTsgLy8gQWxsb3cgc3BlY2lhbCBldmVudHMgdG8gZHJhdyBvdXRzaWRlIHRoZSBsaW5lc1xuXG4gICAgICBzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbdHlwZV0gfHwge307XG5cbiAgICAgIGlmICghb25seUhhbmRsZXJzICYmIHNwZWNpYWwudHJpZ2dlciAmJiBzcGVjaWFsLnRyaWdnZXIuYXBwbHkoZWxlbSwgZGF0YSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRGV0ZXJtaW5lIGV2ZW50IHByb3BhZ2F0aW9uIHBhdGggaW4gYWR2YW5jZSwgcGVyIFczQyBldmVudHMgc3BlYyAoIzk5NTEpXG4gICAgICAvLyBCdWJibGUgdXAgdG8gZG9jdW1lbnQsIHRoZW4gdG8gd2luZG93OyB3YXRjaCBmb3IgYSBnbG9iYWwgb3duZXJEb2N1bWVudCB2YXIgKCM5NzI0KVxuXG5cbiAgICAgIGlmICghb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFpc1dpbmRvdyhlbGVtKSkge1xuICAgICAgICBidWJibGVUeXBlID0gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgfHwgdHlwZTtcblxuICAgICAgICBpZiAoIXJmb2N1c01vcnBoLnRlc3QoYnViYmxlVHlwZSArIHR5cGUpKSB7XG4gICAgICAgICAgY3VyID0gY3VyLnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgY3VyOyBjdXIgPSBjdXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGV2ZW50UGF0aC5wdXNoKGN1cik7XG4gICAgICAgICAgdG1wID0gY3VyO1xuICAgICAgICB9IC8vIE9ubHkgYWRkIHdpbmRvdyBpZiB3ZSBnb3QgdG8gZG9jdW1lbnQgKGUuZy4sIG5vdCBwbGFpbiBvYmogb3IgZGV0YWNoZWQgRE9NKVxuXG5cbiAgICAgICAgaWYgKHRtcCA9PT0gKGVsZW0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkpIHtcbiAgICAgICAgICBldmVudFBhdGgucHVzaCh0bXAuZGVmYXVsdFZpZXcgfHwgdG1wLnBhcmVudFdpbmRvdyB8fCB3aW5kb3cpO1xuICAgICAgICB9XG4gICAgICB9IC8vIEZpcmUgaGFuZGxlcnMgb24gdGhlIGV2ZW50IHBhdGhcblxuXG4gICAgICBpID0gMDtcblxuICAgICAgd2hpbGUgKChjdXIgPSBldmVudFBhdGhbaSsrXSkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgbGFzdEVsZW1lbnQgPSBjdXI7XG4gICAgICAgIGV2ZW50LnR5cGUgPSBpID4gMSA/IGJ1YmJsZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlIHx8IHR5cGU7IC8vIGpRdWVyeSBoYW5kbGVyXG5cbiAgICAgICAgaGFuZGxlID0gKGRhdGFQcml2LmdldChjdXIsIFwiZXZlbnRzXCIpIHx8IHt9KVtldmVudC50eXBlXSAmJiBkYXRhUHJpdi5nZXQoY3VyLCBcImhhbmRsZVwiKTtcblxuICAgICAgICBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgaGFuZGxlLmFwcGx5KGN1ciwgZGF0YSk7XG4gICAgICAgIH0gLy8gTmF0aXZlIGhhbmRsZXJcblxuXG4gICAgICAgIGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbb250eXBlXTtcblxuICAgICAgICBpZiAoaGFuZGxlICYmIGhhbmRsZS5hcHBseSAmJiBhY2NlcHREYXRhKGN1cikpIHtcbiAgICAgICAgICBldmVudC5yZXN1bHQgPSBoYW5kbGUuYXBwbHkoY3VyLCBkYXRhKTtcblxuICAgICAgICAgIGlmIChldmVudC5yZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBldmVudC50eXBlID0gdHlwZTsgLy8gSWYgbm9ib2R5IHByZXZlbnRlZCB0aGUgZGVmYXVsdCBhY3Rpb24sIGRvIGl0IG5vd1xuXG4gICAgICBpZiAoIW9ubHlIYW5kbGVycyAmJiAhZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgaWYgKCghc3BlY2lhbC5fZGVmYXVsdCB8fCBzcGVjaWFsLl9kZWZhdWx0LmFwcGx5KGV2ZW50UGF0aC5wb3AoKSwgZGF0YSkgPT09IGZhbHNlKSAmJiBhY2NlcHREYXRhKGVsZW0pKSB7XG4gICAgICAgICAgLy8gQ2FsbCBhIG5hdGl2ZSBET00gbWV0aG9kIG9uIHRoZSB0YXJnZXQgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBldmVudC5cbiAgICAgICAgICAvLyBEb24ndCBkbyBkZWZhdWx0IGFjdGlvbnMgb24gd2luZG93LCB0aGF0J3Mgd2hlcmUgZ2xvYmFsIHZhcmlhYmxlcyBiZSAoIzYxNzApXG4gICAgICAgICAgaWYgKG9udHlwZSAmJiBpc0Z1bmN0aW9uKGVsZW1bdHlwZV0pICYmICFpc1dpbmRvdyhlbGVtKSkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxuICAgICAgICAgICAgdG1wID0gZWxlbVtvbnR5cGVdO1xuXG4gICAgICAgICAgICBpZiAodG1wKSB7XG4gICAgICAgICAgICAgIGVsZW1bb250eXBlXSA9IG51bGw7XG4gICAgICAgICAgICB9IC8vIFByZXZlbnQgcmUtdHJpZ2dlcmluZyBvZiB0aGUgc2FtZSBldmVudCwgc2luY2Ugd2UgYWxyZWFkeSBidWJibGVkIGl0IGFib3ZlXG5cblxuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHR5cGU7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgICAgIGxhc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtW3R5cGVdKCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgICAgIGxhc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBpZiAodG1wKSB7XG4gICAgICAgICAgICAgIGVsZW1bb250eXBlXSA9IHRtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50LnJlc3VsdDtcbiAgICB9LFxuICAgIC8vIFBpZ2d5YmFjayBvbiBhIGRvbm9yIGV2ZW50IHRvIHNpbXVsYXRlIGEgZGlmZmVyZW50IG9uZVxuICAgIC8vIFVzZWQgb25seSBmb3IgYGZvY3VzKGluIHwgb3V0KWAgZXZlbnRzXG4gICAgc2ltdWxhdGU6IGZ1bmN0aW9uICh0eXBlLCBlbGVtLCBldmVudCkge1xuICAgICAgdmFyIGUgPSBqUXVlcnkuZXh0ZW5kKG5ldyBqUXVlcnkuRXZlbnQoKSwgZXZlbnQsIHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgaXNTaW11bGF0ZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoZSwgbnVsbCwgZWxlbSk7XG4gICAgfVxuICB9KTtcbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgdHJpZ2dlcjogZnVuY3Rpb24gKHR5cGUsIGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcih0eXBlLCBkYXRhLCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdHJpZ2dlckhhbmRsZXI6IGZ1bmN0aW9uICh0eXBlLCBkYXRhKSB7XG4gICAgICB2YXIgZWxlbSA9IHRoaXNbMF07XG5cbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkuZXZlbnQudHJpZ2dlcih0eXBlLCBkYXRhLCBlbGVtLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDRcbiAgLy8gRmlyZWZveCBkb2Vzbid0IGhhdmUgZm9jdXMoaW4gfCBvdXQpIGV2ZW50c1xuICAvLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY4Nzc4N1xuICAvL1xuICAvLyBTdXBwb3J0OiBDaHJvbWUgPD00OCAtIDQ5LCBTYWZhcmkgPD05LjAgLSA5LjFcbiAgLy8gZm9jdXMoaW4gfCBvdXQpIGV2ZW50cyBmaXJlIGFmdGVyIGZvY3VzICYgYmx1ciBldmVudHMsXG4gIC8vIHdoaWNoIGlzIHNwZWMgdmlvbGF0aW9uIC0gaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtZm9jdXNldmVudC1ldmVudC1vcmRlclxuICAvLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0OTg1N1xuXG4gIGlmICghc3VwcG9ydC5mb2N1c2luKSB7XG4gICAgalF1ZXJ5LmVhY2goe1xuICAgICAgZm9jdXM6IFwiZm9jdXNpblwiLFxuICAgICAgYmx1cjogXCJmb2N1c291dFwiXG4gICAgfSwgZnVuY3Rpb24gKG9yaWcsIGZpeCkge1xuICAgICAgLy8gQXR0YWNoIGEgc2luZ2xlIGNhcHR1cmluZyBoYW5kbGVyIG9uIHRoZSBkb2N1bWVudCB3aGlsZSBzb21lb25lIHdhbnRzIGZvY3VzaW4vZm9jdXNvdXRcbiAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGpRdWVyeS5ldmVudC5zaW11bGF0ZShmaXgsIGV2ZW50LnRhcmdldCwgalF1ZXJ5LmV2ZW50LmZpeChldmVudCkpO1xuICAgICAgfTtcblxuICAgICAgalF1ZXJ5LmV2ZW50LnNwZWNpYWxbZml4XSA9IHtcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG4gICAgICAgICAgICAgIGF0dGFjaGVzID0gZGF0YVByaXYuYWNjZXNzKGRvYywgZml4KTtcblxuICAgICAgICAgIGlmICghYXR0YWNoZXMpIHtcbiAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKG9yaWcsIGhhbmRsZXIsIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFQcml2LmFjY2Vzcyhkb2MsIGZpeCwgKGF0dGFjaGVzIHx8IDApICsgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRlYXJkb3duOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxuICAgICAgICAgICAgICBhdHRhY2hlcyA9IGRhdGFQcml2LmFjY2Vzcyhkb2MsIGZpeCkgLSAxO1xuXG4gICAgICAgICAgaWYgKCFhdHRhY2hlcykge1xuICAgICAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIob3JpZywgaGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgICAgICBkYXRhUHJpdi5yZW1vdmUoZG9jLCBmaXgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhUHJpdi5hY2Nlc3MoZG9jLCBmaXgsIGF0dGFjaGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG4gIHZhciBub25jZSA9IERhdGUubm93KCk7XG4gIHZhciBycXVlcnkgPSAvXFw/LzsgLy8gQ3Jvc3MtYnJvd3NlciB4bWwgcGFyc2luZ1xuXG4gIGpRdWVyeS5wYXJzZVhNTCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHhtbDtcblxuICAgIGlmICghZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSAvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuICAgIC8vIElFIHRocm93cyBvbiBwYXJzZUZyb21TdHJpbmcgd2l0aCBpbnZhbGlkIGlucHV0LlxuXG5cbiAgICB0cnkge1xuICAgICAgeG1sID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGF0YSwgXCJ0ZXh0L3htbFwiKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB4bWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKCF4bWwgfHwgeG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoKSB7XG4gICAgICBqUXVlcnkuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIgKyBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4geG1sO1xuICB9O1xuXG4gIHZhciByYnJhY2tldCA9IC9cXFtcXF0kLyxcbiAgICAgIHJDUkxGID0gL1xccj9cXG4vZyxcbiAgICAgIHJzdWJtaXR0ZXJUeXBlcyA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxcbiAgICAgIHJzdWJtaXR0YWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtcblxuICBmdW5jdGlvbiBidWlsZFBhcmFtcyhwcmVmaXgsIG9iaiwgdHJhZGl0aW9uYWwsIGFkZCkge1xuICAgIHZhciBuYW1lO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgLy8gU2VyaWFsaXplIGFycmF5IGl0ZW0uXG4gICAgICBqUXVlcnkuZWFjaChvYmosIGZ1bmN0aW9uIChpLCB2KSB7XG4gICAgICAgIGlmICh0cmFkaXRpb25hbCB8fCByYnJhY2tldC50ZXN0KHByZWZpeCkpIHtcbiAgICAgICAgICAvLyBUcmVhdCBlYWNoIGFycmF5IGl0ZW0gYXMgYSBzY2FsYXIuXG4gICAgICAgICAgYWRkKHByZWZpeCwgdik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSXRlbSBpcyBub24tc2NhbGFyIChhcnJheSBvciBvYmplY3QpLCBlbmNvZGUgaXRzIG51bWVyaWMgaW5kZXguXG4gICAgICAgICAgYnVpbGRQYXJhbXMocHJlZml4ICsgXCJbXCIgKyAodHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdiAhPSBudWxsID8gaSA6IFwiXCIpICsgXCJdXCIsIHYsIHRyYWRpdGlvbmFsLCBhZGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCF0cmFkaXRpb25hbCAmJiB0b1R5cGUob2JqKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgLy8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuICAgICAgZm9yIChuYW1lIGluIG9iaikge1xuICAgICAgICBidWlsZFBhcmFtcyhwcmVmaXggKyBcIltcIiArIG5hbWUgKyBcIl1cIiwgb2JqW25hbWVdLCB0cmFkaXRpb25hbCwgYWRkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2VyaWFsaXplIHNjYWxhciBpdGVtLlxuICAgICAgYWRkKHByZWZpeCwgb2JqKTtcbiAgICB9XG4gIH0gLy8gU2VyaWFsaXplIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMgb3IgYSBzZXQgb2ZcbiAgLy8ga2V5L3ZhbHVlcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG5cblxuICBqUXVlcnkucGFyYW0gPSBmdW5jdGlvbiAoYSwgdHJhZGl0aW9uYWwpIHtcbiAgICB2YXIgcHJlZml4LFxuICAgICAgICBzID0gW10sXG4gICAgICAgIGFkZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlT3JGdW5jdGlvbikge1xuICAgICAgLy8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaW52b2tlIGl0IGFuZCB1c2UgaXRzIHJldHVybiB2YWx1ZVxuICAgICAgdmFyIHZhbHVlID0gaXNGdW5jdGlvbih2YWx1ZU9yRnVuY3Rpb24pID8gdmFsdWVPckZ1bmN0aW9uKCkgOiB2YWx1ZU9yRnVuY3Rpb247XG4gICAgICBzW3MubGVuZ3RoXSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSk7XG4gICAgfTtcblxuICAgIGlmIChhID09IG51bGwpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0gLy8gSWYgYW4gYXJyYXkgd2FzIHBhc3NlZCBpbiwgYXNzdW1lIHRoYXQgaXQgaXMgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cy5cblxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkgfHwgYS5qcXVlcnkgJiYgIWpRdWVyeS5pc1BsYWluT2JqZWN0KGEpKSB7XG4gICAgICAvLyBTZXJpYWxpemUgdGhlIGZvcm0gZWxlbWVudHNcbiAgICAgIGpRdWVyeS5lYWNoKGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkKHRoaXMubmFtZSwgdGhpcy52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdHJhZGl0aW9uYWwsIGVuY29kZSB0aGUgXCJvbGRcIiB3YXkgKHRoZSB3YXkgMS4zLjIgb3Igb2xkZXJcbiAgICAgIC8vIGRpZCBpdCksIG90aGVyd2lzZSBlbmNvZGUgcGFyYW1zIHJlY3Vyc2l2ZWx5LlxuICAgICAgZm9yIChwcmVmaXggaW4gYSkge1xuICAgICAgICBidWlsZFBhcmFtcyhwcmVmaXgsIGFbcHJlZml4XSwgdHJhZGl0aW9uYWwsIGFkZCk7XG4gICAgICB9XG4gICAgfSAvLyBSZXR1cm4gdGhlIHJlc3VsdGluZyBzZXJpYWxpemF0aW9uXG5cblxuICAgIHJldHVybiBzLmpvaW4oXCImXCIpO1xuICB9O1xuXG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGpRdWVyeS5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpO1xuICAgIH0sXG4gICAgc2VyaWFsaXplQXJyYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcbiAgICAgICAgdmFyIGVsZW1lbnRzID0galF1ZXJ5LnByb3AodGhpcywgXCJlbGVtZW50c1wiKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzID8galF1ZXJ5Lm1ha2VBcnJheShlbGVtZW50cykgOiB0aGlzO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0aGlzLnR5cGU7IC8vIFVzZSAuaXMoIFwiOmRpc2FibGVkXCIgKSBzbyB0aGF0IGZpZWxkc2V0W2Rpc2FibGVkXSB3b3Jrc1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgJiYgIWpRdWVyeSh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSAmJiByc3VibWl0dGFibGUudGVzdCh0aGlzLm5vZGVOYW1lKSAmJiAhcnN1Ym1pdHRlclR5cGVzLnRlc3QodHlwZSkgJiYgKHRoaXMuY2hlY2tlZCB8fCAhcmNoZWNrYWJsZVR5cGUudGVzdCh0eXBlKSk7XG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKGksIGVsZW0pIHtcbiAgICAgICAgdmFyIHZhbCA9IGpRdWVyeSh0aGlzKS52YWwoKTtcblxuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICByZXR1cm4galF1ZXJ5Lm1hcCh2YWwsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6IGVsZW0ubmFtZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbC5yZXBsYWNlKHJDUkxGLCBcIlxcclxcblwiKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogZWxlbS5uYW1lLFxuICAgICAgICAgIHZhbHVlOiB2YWwucmVwbGFjZShyQ1JMRiwgXCJcXHJcXG5cIilcbiAgICAgICAgfTtcbiAgICAgIH0pLmdldCgpO1xuICAgIH1cbiAgfSk7XG4gIHZhciByMjAgPSAvJTIwL2csXG4gICAgICByaGFzaCA9IC8jLiokLyxcbiAgICAgIHJhbnRpQ2FjaGUgPSAvKFs/Jl0pXz1bXiZdKi8sXG4gICAgICByaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvbWcsXG4gICAgICAvLyAjNzY1MywgIzgxMjUsICM4MTUyOiBsb2NhbCBwcm90b2NvbCBkZXRlY3Rpb25cbiAgcmxvY2FsUHJvdG9jb2wgPSAvXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxcbiAgICAgIHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxuICAgICAgcnByb3RvY29sID0gL15cXC9cXC8vLFxuXG4gIC8qIFByZWZpbHRlcnNcbiAgICogMSkgVGhleSBhcmUgdXNlZnVsIHRvIGludHJvZHVjZSBjdXN0b20gZGF0YVR5cGVzIChzZWUgYWpheC9qc29ucC5qcyBmb3IgYW4gZXhhbXBsZSlcbiAgICogMikgVGhlc2UgYXJlIGNhbGxlZDpcbiAgICogICAgLSBCRUZPUkUgYXNraW5nIGZvciBhIHRyYW5zcG9ydFxuICAgKiAgICAtIEFGVEVSIHBhcmFtIHNlcmlhbGl6YXRpb24gKHMuZGF0YSBpcyBhIHN0cmluZyBpZiBzLnByb2Nlc3NEYXRhIGlzIHRydWUpXG4gICAqIDMpIGtleSBpcyB0aGUgZGF0YVR5cGVcbiAgICogNCkgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuICAgKiA1KSBleGVjdXRpb24gd2lsbCBzdGFydCB3aXRoIHRyYW5zcG9ydCBkYXRhVHlwZSBhbmQgVEhFTiBjb250aW51ZSBkb3duIHRvIFwiKlwiIGlmIG5lZWRlZFxuICAgKi9cbiAgcHJlZmlsdGVycyA9IHt9LFxuXG4gIC8qIFRyYW5zcG9ydHMgYmluZGluZ3NcbiAgICogMSkga2V5IGlzIHRoZSBkYXRhVHlwZVxuICAgKiAyKSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG4gICAqIDMpIHNlbGVjdGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGdvIHRvIFwiKlwiIGlmIG5lZWRlZFxuICAgKi9cbiAgdHJhbnNwb3J0cyA9IHt9LFxuICAgICAgLy8gQXZvaWQgY29tbWVudC1wcm9sb2cgY2hhciBzZXF1ZW5jZSAoIzEwMDk4KTsgbXVzdCBhcHBlYXNlIGxpbnQgYW5kIGV2YWRlIGNvbXByZXNzaW9uXG4gIGFsbFR5cGVzID0gXCIqL1wiLmNvbmNhdChcIipcIiksXG4gICAgICAvLyBBbmNob3IgdGFnIGZvciBwYXJzaW5nIHRoZSBkb2N1bWVudCBvcmlnaW5cbiAgb3JpZ2luQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIG9yaWdpbkFuY2hvci5ocmVmID0gbG9jYXRpb24uaHJlZjsgLy8gQmFzZSBcImNvbnN0cnVjdG9yXCIgZm9yIGpRdWVyeS5hamF4UHJlZmlsdGVyIGFuZCBqUXVlcnkuYWpheFRyYW5zcG9ydFxuXG4gIGZ1bmN0aW9uIGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyhzdHJ1Y3R1cmUpIHtcbiAgICAvLyBkYXRhVHlwZUV4cHJlc3Npb24gaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIFwiKlwiXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhVHlwZUV4cHJlc3Npb24sIGZ1bmMpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVR5cGVFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGZ1bmMgPSBkYXRhVHlwZUV4cHJlc3Npb247XG4gICAgICAgIGRhdGFUeXBlRXhwcmVzc2lvbiA9IFwiKlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YVR5cGUsXG4gICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgZGF0YVR5cGVzID0gZGF0YVR5cGVFeHByZXNzaW9uLnRvTG93ZXJDYXNlKCkubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW107XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKGZ1bmMpKSB7XG4gICAgICAgIC8vIEZvciBlYWNoIGRhdGFUeXBlIGluIHRoZSBkYXRhVHlwZUV4cHJlc3Npb25cbiAgICAgICAgd2hpbGUgKGRhdGFUeXBlID0gZGF0YVR5cGVzW2krK10pIHtcbiAgICAgICAgICAvLyBQcmVwZW5kIGlmIHJlcXVlc3RlZFxuICAgICAgICAgIGlmIChkYXRhVHlwZVswXSA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgIGRhdGFUeXBlID0gZGF0YVR5cGUuc2xpY2UoMSkgfHwgXCIqXCI7XG4gICAgICAgICAgICAoc3RydWN0dXJlW2RhdGFUeXBlXSA9IHN0cnVjdHVyZVtkYXRhVHlwZV0gfHwgW10pLnVuc2hpZnQoZnVuYyk7IC8vIE90aGVyd2lzZSBhcHBlbmRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgKHN0cnVjdHVyZVtkYXRhVHlwZV0gPSBzdHJ1Y3R1cmVbZGF0YVR5cGVdIHx8IFtdKS5wdXNoKGZ1bmMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0gLy8gQmFzZSBpbnNwZWN0aW9uIGZ1bmN0aW9uIGZvciBwcmVmaWx0ZXJzIGFuZCB0cmFuc3BvcnRzXG5cblxuICBmdW5jdGlvbiBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyhzdHJ1Y3R1cmUsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIpIHtcbiAgICB2YXIgaW5zcGVjdGVkID0ge30sXG4gICAgICAgIHNlZWtpbmdUcmFuc3BvcnQgPSBzdHJ1Y3R1cmUgPT09IHRyYW5zcG9ydHM7XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0KGRhdGFUeXBlKSB7XG4gICAgICB2YXIgc2VsZWN0ZWQ7XG4gICAgICBpbnNwZWN0ZWRbZGF0YVR5cGVdID0gdHJ1ZTtcbiAgICAgIGpRdWVyeS5lYWNoKHN0cnVjdHVyZVtkYXRhVHlwZV0gfHwgW10sIGZ1bmN0aW9uIChfLCBwcmVmaWx0ZXJPckZhY3RvcnkpIHtcbiAgICAgICAgdmFyIGRhdGFUeXBlT3JUcmFuc3BvcnQgPSBwcmVmaWx0ZXJPckZhY3Rvcnkob3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhVHlwZU9yVHJhbnNwb3J0ID09PSBcInN0cmluZ1wiICYmICFzZWVraW5nVHJhbnNwb3J0ICYmICFpbnNwZWN0ZWRbZGF0YVR5cGVPclRyYW5zcG9ydF0pIHtcbiAgICAgICAgICBvcHRpb25zLmRhdGFUeXBlcy51bnNoaWZ0KGRhdGFUeXBlT3JUcmFuc3BvcnQpO1xuICAgICAgICAgIGluc3BlY3QoZGF0YVR5cGVPclRyYW5zcG9ydCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHNlZWtpbmdUcmFuc3BvcnQpIHtcbiAgICAgICAgICByZXR1cm4gIShzZWxlY3RlZCA9IGRhdGFUeXBlT3JUcmFuc3BvcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zcGVjdChvcHRpb25zLmRhdGFUeXBlc1swXSkgfHwgIWluc3BlY3RlZFtcIipcIl0gJiYgaW5zcGVjdChcIipcIik7XG4gIH0gLy8gQSBzcGVjaWFsIGV4dGVuZCBmb3IgYWpheCBvcHRpb25zXG4gIC8vIHRoYXQgdGFrZXMgXCJmbGF0XCIgb3B0aW9ucyAobm90IHRvIGJlIGRlZXAgZXh0ZW5kZWQpXG4gIC8vIEZpeGVzICM5ODg3XG5cblxuICBmdW5jdGlvbiBhamF4RXh0ZW5kKHRhcmdldCwgc3JjKSB7XG4gICAgdmFyIGtleSxcbiAgICAgICAgZGVlcCxcbiAgICAgICAgZmxhdE9wdGlvbnMgPSBqUXVlcnkuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zIHx8IHt9O1xuXG4gICAgZm9yIChrZXkgaW4gc3JjKSB7XG4gICAgICBpZiAoc3JjW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAoZmxhdE9wdGlvbnNba2V5XSA/IHRhcmdldCA6IGRlZXAgfHwgKGRlZXAgPSB7fSkpW2tleV0gPSBzcmNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgalF1ZXJ5LmV4dGVuZCh0cnVlLCB0YXJnZXQsIGRlZXApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgLyogSGFuZGxlcyByZXNwb25zZXMgdG8gYW4gYWpheCByZXF1ZXN0OlxuICAgKiAtIGZpbmRzIHRoZSByaWdodCBkYXRhVHlwZSAobWVkaWF0ZXMgYmV0d2VlbiBjb250ZW50LXR5cGUgYW5kIGV4cGVjdGVkIGRhdGFUeXBlKVxuICAgKiAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbiAgICovXG5cblxuICBmdW5jdGlvbiBhamF4SGFuZGxlUmVzcG9uc2VzKHMsIGpxWEhSLCByZXNwb25zZXMpIHtcbiAgICB2YXIgY3QsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGZpbmFsRGF0YVR5cGUsXG4gICAgICAgIGZpcnN0RGF0YVR5cGUsXG4gICAgICAgIGNvbnRlbnRzID0gcy5jb250ZW50cyxcbiAgICAgICAgZGF0YVR5cGVzID0gcy5kYXRhVHlwZXM7IC8vIFJlbW92ZSBhdXRvIGRhdGFUeXBlIGFuZCBnZXQgY29udGVudC10eXBlIGluIHRoZSBwcm9jZXNzXG5cbiAgICB3aGlsZSAoZGF0YVR5cGVzWzBdID09PSBcIipcIikge1xuICAgICAgZGF0YVR5cGVzLnNoaWZ0KCk7XG5cbiAgICAgIGlmIChjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcbiAgICAgIH1cbiAgICB9IC8vIENoZWNrIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGtub3duIGNvbnRlbnQtdHlwZVxuXG5cbiAgICBpZiAoY3QpIHtcbiAgICAgIGZvciAodHlwZSBpbiBjb250ZW50cykge1xuICAgICAgICBpZiAoY29udGVudHNbdHlwZV0gJiYgY29udGVudHNbdHlwZV0udGVzdChjdCkpIHtcbiAgICAgICAgICBkYXRhVHlwZXMudW5zaGlmdCh0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSByZXNwb25zZSBmb3IgdGhlIGV4cGVjdGVkIGRhdGFUeXBlXG5cblxuICAgIGlmIChkYXRhVHlwZXNbMF0gaW4gcmVzcG9uc2VzKSB7XG4gICAgICBmaW5hbERhdGFUeXBlID0gZGF0YVR5cGVzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcnkgY29udmVydGlibGUgZGF0YVR5cGVzXG4gICAgICBmb3IgKHR5cGUgaW4gcmVzcG9uc2VzKSB7XG4gICAgICAgIGlmICghZGF0YVR5cGVzWzBdIHx8IHMuY29udmVydGVyc1t0eXBlICsgXCIgXCIgKyBkYXRhVHlwZXNbMF1dKSB7XG4gICAgICAgICAgZmluYWxEYXRhVHlwZSA9IHR5cGU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZpcnN0RGF0YVR5cGUpIHtcbiAgICAgICAgICBmaXJzdERhdGFUeXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBPciBqdXN0IHVzZSBmaXJzdCBvbmVcblxuXG4gICAgICBmaW5hbERhdGFUeXBlID0gZmluYWxEYXRhVHlwZSB8fCBmaXJzdERhdGFUeXBlO1xuICAgIH0gLy8gSWYgd2UgZm91bmQgYSBkYXRhVHlwZVxuICAgIC8vIFdlIGFkZCB0aGUgZGF0YVR5cGUgdG8gdGhlIGxpc3QgaWYgbmVlZGVkXG4gICAgLy8gYW5kIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuXG5cbiAgICBpZiAoZmluYWxEYXRhVHlwZSkge1xuICAgICAgaWYgKGZpbmFsRGF0YVR5cGUgIT09IGRhdGFUeXBlc1swXSkge1xuICAgICAgICBkYXRhVHlwZXMudW5zaGlmdChmaW5hbERhdGFUeXBlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlc1tmaW5hbERhdGFUeXBlXTtcbiAgICB9XG4gIH1cbiAgLyogQ2hhaW4gY29udmVyc2lvbnMgZ2l2ZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBvcmlnaW5hbCByZXNwb25zZVxuICAgKiBBbHNvIHNldHMgdGhlIHJlc3BvbnNlWFhYIGZpZWxkcyBvbiB0aGUganFYSFIgaW5zdGFuY2VcbiAgICovXG5cblxuICBmdW5jdGlvbiBhamF4Q29udmVydChzLCByZXNwb25zZSwganFYSFIsIGlzU3VjY2Vzcykge1xuICAgIHZhciBjb252MixcbiAgICAgICAgY3VycmVudCxcbiAgICAgICAgY29udixcbiAgICAgICAgdG1wLFxuICAgICAgICBwcmV2LFxuICAgICAgICBjb252ZXJ0ZXJzID0ge30sXG4gICAgICAgIC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cbiAgICBkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcy5zbGljZSgpOyAvLyBDcmVhdGUgY29udmVydGVycyBtYXAgd2l0aCBsb3dlcmNhc2VkIGtleXNcblxuICAgIGlmIChkYXRhVHlwZXNbMV0pIHtcbiAgICAgIGZvciAoY29udiBpbiBzLmNvbnZlcnRlcnMpIHtcbiAgICAgICAgY29udmVydGVyc1tjb252LnRvTG93ZXJDYXNlKCldID0gcy5jb252ZXJ0ZXJzW2NvbnZdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTsgLy8gQ29udmVydCB0byBlYWNoIHNlcXVlbnRpYWwgZGF0YVR5cGVcblxuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBpZiAocy5yZXNwb25zZUZpZWxkc1tjdXJyZW50XSkge1xuICAgICAgICBqcVhIUltzLnJlc3BvbnNlRmllbGRzW2N1cnJlbnRdXSA9IHJlc3BvbnNlO1xuICAgICAgfSAvLyBBcHBseSB0aGUgZGF0YUZpbHRlciBpZiBwcm92aWRlZFxuXG5cbiAgICAgIGlmICghcHJldiAmJiBpc1N1Y2Nlc3MgJiYgcy5kYXRhRmlsdGVyKSB7XG4gICAgICAgIHJlc3BvbnNlID0gcy5kYXRhRmlsdGVyKHJlc3BvbnNlLCBzLmRhdGFUeXBlKTtcbiAgICAgIH1cblxuICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICBjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cbiAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgIC8vIFRoZXJlJ3Mgb25seSB3b3JrIHRvIGRvIGlmIGN1cnJlbnQgZGF0YVR5cGUgaXMgbm9uLWF1dG9cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IFwiKlwiKSB7XG4gICAgICAgICAgY3VycmVudCA9IHByZXY7IC8vIENvbnZlcnQgcmVzcG9uc2UgaWYgcHJldiBkYXRhVHlwZSBpcyBub24tYXV0byBhbmQgZGlmZmVycyBmcm9tIGN1cnJlbnRcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2ICE9PSBcIipcIiAmJiBwcmV2ICE9PSBjdXJyZW50KSB7XG4gICAgICAgICAgLy8gU2VlayBhIGRpcmVjdCBjb252ZXJ0ZXJcbiAgICAgICAgICBjb252ID0gY29udmVydGVyc1twcmV2ICsgXCIgXCIgKyBjdXJyZW50XSB8fCBjb252ZXJ0ZXJzW1wiKiBcIiArIGN1cnJlbnRdOyAvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxuXG4gICAgICAgICAgaWYgKCFjb252KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnYyIGluIGNvbnZlcnRlcnMpIHtcbiAgICAgICAgICAgICAgLy8gSWYgY29udjIgb3V0cHV0cyBjdXJyZW50XG4gICAgICAgICAgICAgIHRtcCA9IGNvbnYyLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgICAgICBpZiAodG1wWzFdID09PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcHJldiBjYW4gYmUgY29udmVydGVkIHRvIGFjY2VwdGVkIGlucHV0XG4gICAgICAgICAgICAgICAgY29udiA9IGNvbnZlcnRlcnNbcHJldiArIFwiIFwiICsgdG1wWzBdXSB8fCBjb252ZXJ0ZXJzW1wiKiBcIiArIHRtcFswXV07XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udikge1xuICAgICAgICAgICAgICAgICAgLy8gQ29uZGVuc2UgZXF1aXZhbGVuY2UgY29udmVydGVyc1xuICAgICAgICAgICAgICAgICAgaWYgKGNvbnYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udiA9IGNvbnZlcnRlcnNbY29udjJdOyAvLyBPdGhlcndpc2UsIGluc2VydCB0aGUgaW50ZXJtZWRpYXRlIGRhdGFUeXBlXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnRlcnNbY29udjJdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB0bXBbMF07XG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlcy51bnNoaWZ0KHRtcFsxXSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gQXBwbHkgY29udmVydGVyIChpZiBub3QgYW4gZXF1aXZhbGVuY2UpXG5cblxuICAgICAgICAgIGlmIChjb252ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBVbmxlc3MgZXJyb3JzIGFyZSBhbGxvd2VkIHRvIGJ1YmJsZSwgY2F0Y2ggYW5kIHJldHVybiB0aGVtXG4gICAgICAgICAgICBpZiAoY29udiAmJiBzLnRocm93cykge1xuICAgICAgICAgICAgICByZXNwb25zZSA9IGNvbnYocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGNvbnYocmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBcInBhcnNlcmVycm9yXCIsXG4gICAgICAgICAgICAgICAgICBlcnJvcjogY29udiA/IGUgOiBcIk5vIGNvbnZlcnNpb24gZnJvbSBcIiArIHByZXYgKyBcIiB0byBcIiArIGN1cnJlbnRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiBcInN1Y2Nlc3NcIixcbiAgICAgIGRhdGE6IHJlc3BvbnNlXG4gICAgfTtcbiAgfVxuXG4gIGpRdWVyeS5leHRlbmQoe1xuICAgIC8vIENvdW50ZXIgZm9yIGhvbGRpbmcgdGhlIG51bWJlciBvZiBhY3RpdmUgcXVlcmllc1xuICAgIGFjdGl2ZTogMCxcbiAgICAvLyBMYXN0LU1vZGlmaWVkIGhlYWRlciBjYWNoZSBmb3IgbmV4dCByZXF1ZXN0XG4gICAgbGFzdE1vZGlmaWVkOiB7fSxcbiAgICBldGFnOiB7fSxcbiAgICBhamF4U2V0dGluZ3M6IHtcbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICBpc0xvY2FsOiBybG9jYWxQcm90b2NvbC50ZXN0KGxvY2F0aW9uLnByb3RvY29sKSxcbiAgICAgIGdsb2JhbDogdHJ1ZSxcbiAgICAgIHByb2Nlc3NEYXRhOiB0cnVlLFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcblxuICAgICAgLypcbiAgICAgIHRpbWVvdXQ6IDAsXG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgZGF0YVR5cGU6IG51bGwsXG4gICAgICB1c2VybmFtZTogbnVsbCxcbiAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgY2FjaGU6IG51bGwsXG4gICAgICB0aHJvd3M6IGZhbHNlLFxuICAgICAgdHJhZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgaGVhZGVyczoge30sXG4gICAgICAqL1xuICAgICAgYWNjZXB0czoge1xuICAgICAgICBcIipcIjogYWxsVHlwZXMsXG4gICAgICAgIHRleHQ6IFwidGV4dC9wbGFpblwiLFxuICAgICAgICBodG1sOiBcInRleHQvaHRtbFwiLFxuICAgICAgICB4bWw6IFwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLFxuICAgICAgICBqc29uOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiXG4gICAgICB9LFxuICAgICAgY29udGVudHM6IHtcbiAgICAgICAgeG1sOiAvXFxieG1sXFxiLyxcbiAgICAgICAgaHRtbDogL1xcYmh0bWwvLFxuICAgICAgICBqc29uOiAvXFxianNvblxcYi9cbiAgICAgIH0sXG4gICAgICByZXNwb25zZUZpZWxkczoge1xuICAgICAgICB4bWw6IFwicmVzcG9uc2VYTUxcIixcbiAgICAgICAgdGV4dDogXCJyZXNwb25zZVRleHRcIixcbiAgICAgICAganNvbjogXCJyZXNwb25zZUpTT05cIlxuICAgICAgfSxcbiAgICAgIC8vIERhdGEgY29udmVydGVyc1xuICAgICAgLy8gS2V5cyBzZXBhcmF0ZSBzb3VyY2UgKG9yIGNhdGNoYWxsIFwiKlwiKSBhbmQgZGVzdGluYXRpb24gdHlwZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuICAgICAgY29udmVydGVyczoge1xuICAgICAgICAvLyBDb252ZXJ0IGFueXRoaW5nIHRvIHRleHRcbiAgICAgICAgXCIqIHRleHRcIjogU3RyaW5nLFxuICAgICAgICAvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcbiAgICAgICAgXCJ0ZXh0IGh0bWxcIjogdHJ1ZSxcbiAgICAgICAgLy8gRXZhbHVhdGUgdGV4dCBhcyBhIGpzb24gZXhwcmVzc2lvblxuICAgICAgICBcInRleHQganNvblwiOiBKU09OLnBhcnNlLFxuICAgICAgICAvLyBQYXJzZSB0ZXh0IGFzIHhtbFxuICAgICAgICBcInRleHQgeG1sXCI6IGpRdWVyeS5wYXJzZVhNTFxuICAgICAgfSxcbiAgICAgIC8vIEZvciBvcHRpb25zIHRoYXQgc2hvdWxkbid0IGJlIGRlZXAgZXh0ZW5kZWQ6XG4gICAgICAvLyB5b3UgY2FuIGFkZCB5b3VyIG93biBjdXN0b20gb3B0aW9ucyBoZXJlIGlmXG4gICAgICAvLyBhbmQgd2hlbiB5b3UgY3JlYXRlIG9uZSB0aGF0IHNob3VsZG4ndCBiZVxuICAgICAgLy8gZGVlcCBleHRlbmRlZCAoc2VlIGFqYXhFeHRlbmQpXG4gICAgICBmbGF0T3B0aW9uczoge1xuICAgICAgICB1cmw6IHRydWUsXG4gICAgICAgIGNvbnRleHQ6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIENyZWF0ZXMgYSBmdWxsIGZsZWRnZWQgc2V0dGluZ3Mgb2JqZWN0IGludG8gdGFyZ2V0XG4gICAgLy8gd2l0aCBib3RoIGFqYXhTZXR0aW5ncyBhbmQgc2V0dGluZ3MgZmllbGRzLlxuICAgIC8vIElmIHRhcmdldCBpcyBvbWl0dGVkLCB3cml0ZXMgaW50byBhamF4U2V0dGluZ3MuXG4gICAgYWpheFNldHVwOiBmdW5jdGlvbiAodGFyZ2V0LCBzZXR0aW5ncykge1xuICAgICAgcmV0dXJuIHNldHRpbmdzID8gLy8gQnVpbGRpbmcgYSBzZXR0aW5ncyBvYmplY3RcbiAgICAgIGFqYXhFeHRlbmQoYWpheEV4dGVuZCh0YXJnZXQsIGpRdWVyeS5hamF4U2V0dGluZ3MpLCBzZXR0aW5ncykgOiAvLyBFeHRlbmRpbmcgYWpheFNldHRpbmdzXG4gICAgICBhamF4RXh0ZW5kKGpRdWVyeS5hamF4U2V0dGluZ3MsIHRhcmdldCk7XG4gICAgfSxcbiAgICBhamF4UHJlZmlsdGVyOiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMocHJlZmlsdGVycyksXG4gICAgYWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHRyYW5zcG9ydHMpLFxuICAgIC8vIE1haW4gbWV0aG9kXG4gICAgYWpheDogZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAgICAgLy8gSWYgdXJsIGlzIGFuIG9iamVjdCwgc2ltdWxhdGUgcHJlLTEuNSBzaWduYXR1cmVcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG9wdGlvbnMgPSB1cmw7XG4gICAgICAgIHVybCA9IHVuZGVmaW5lZDtcbiAgICAgIH0gLy8gRm9yY2Ugb3B0aW9ucyB0byBiZSBhbiBvYmplY3RcblxuXG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIHZhciB0cmFuc3BvcnQsXG4gICAgICAgICAgLy8gVVJMIHdpdGhvdXQgYW50aS1jYWNoZSBwYXJhbVxuICAgICAgY2FjaGVVUkwsXG4gICAgICAgICAgLy8gUmVzcG9uc2UgaGVhZGVyc1xuICAgICAgcmVzcG9uc2VIZWFkZXJzU3RyaW5nLFxuICAgICAgICAgIHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgICAvLyB0aW1lb3V0IGhhbmRsZVxuICAgICAgdGltZW91dFRpbWVyLFxuICAgICAgICAgIC8vIFVybCBjbGVhbnVwIHZhclxuICAgICAgdXJsQW5jaG9yLFxuICAgICAgICAgIC8vIFJlcXVlc3Qgc3RhdGUgKGJlY29tZXMgZmFsc2UgdXBvbiBzZW5kIGFuZCB0cnVlIHVwb24gY29tcGxldGlvbilcbiAgICAgIGNvbXBsZXRlZCxcbiAgICAgICAgICAvLyBUbyBrbm93IGlmIGdsb2JhbCBldmVudHMgYXJlIHRvIGJlIGRpc3BhdGNoZWRcbiAgICAgIGZpcmVHbG9iYWxzLFxuICAgICAgICAgIC8vIExvb3AgdmFyaWFibGVcbiAgICAgIGksXG4gICAgICAgICAgLy8gdW5jYWNoZWQgcGFydCBvZiB0aGUgdXJsXG4gICAgICB1bmNhY2hlZCxcbiAgICAgICAgICAvLyBDcmVhdGUgdGhlIGZpbmFsIG9wdGlvbnMgb2JqZWN0XG4gICAgICBzID0galF1ZXJ5LmFqYXhTZXR1cCh7fSwgb3B0aW9ucyksXG4gICAgICAgICAgLy8gQ2FsbGJhY2tzIGNvbnRleHRcbiAgICAgIGNhbGxiYWNrQ29udGV4dCA9IHMuY29udGV4dCB8fCBzLFxuICAgICAgICAgIC8vIENvbnRleHQgZm9yIGdsb2JhbCBldmVudHMgaXMgY2FsbGJhY2tDb250ZXh0IGlmIGl0IGlzIGEgRE9NIG5vZGUgb3IgalF1ZXJ5IGNvbGxlY3Rpb25cbiAgICAgIGdsb2JhbEV2ZW50Q29udGV4dCA9IHMuY29udGV4dCAmJiAoY2FsbGJhY2tDb250ZXh0Lm5vZGVUeXBlIHx8IGNhbGxiYWNrQ29udGV4dC5qcXVlcnkpID8galF1ZXJ5KGNhbGxiYWNrQ29udGV4dCkgOiBqUXVlcnkuZXZlbnQsXG4gICAgICAgICAgLy8gRGVmZXJyZWRzXG4gICAgICBkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuICAgICAgICAgIGNvbXBsZXRlRGVmZXJyZWQgPSBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXG4gICAgICAgICAgLy8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3NcbiAgICAgIHN0YXR1c0NvZGUgPSBzLnN0YXR1c0NvZGUgfHwge30sXG4gICAgICAgICAgLy8gSGVhZGVycyAodGhleSBhcmUgc2VudCBhbGwgYXQgb25jZSlcbiAgICAgIHJlcXVlc3RIZWFkZXJzID0ge30sXG4gICAgICAgICAgcmVxdWVzdEhlYWRlcnNOYW1lcyA9IHt9LFxuICAgICAgICAgIC8vIERlZmF1bHQgYWJvcnQgbWVzc2FnZVxuICAgICAgc3RyQWJvcnQgPSBcImNhbmNlbGVkXCIsXG4gICAgICAgICAgLy8gRmFrZSB4aHJcbiAgICAgIGpxWEhSID0ge1xuICAgICAgICByZWFkeVN0YXRlOiAwLFxuICAgICAgICAvLyBCdWlsZHMgaGVhZGVycyBoYXNodGFibGUgaWYgbmVlZGVkXG4gICAgICAgIGdldFJlc3BvbnNlSGVhZGVyOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgdmFyIG1hdGNoO1xuXG4gICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZUhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2VIZWFkZXJzID0ge307XG5cbiAgICAgICAgICAgICAgd2hpbGUgKG1hdGNoID0gcmhlYWRlcnMuZXhlYyhyZXNwb25zZUhlYWRlcnNTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VIZWFkZXJzW21hdGNoWzFdLnRvTG93ZXJDYXNlKCkgKyBcIiBcIl0gPSAocmVzcG9uc2VIZWFkZXJzW21hdGNoWzFdLnRvTG93ZXJDYXNlKCkgKyBcIiBcIl0gfHwgW10pLmNvbmNhdChtYXRjaFsyXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0Y2ggPSByZXNwb25zZUhlYWRlcnNba2V5LnRvTG93ZXJDYXNlKCkgKyBcIiBcIl07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1hdGNoID09IG51bGwgPyBudWxsIDogbWF0Y2guam9pbihcIiwgXCIpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBSYXcgc3RyaW5nXG4gICAgICAgIGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQgPyByZXNwb25zZUhlYWRlcnNTdHJpbmcgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICAvLyBDYWNoZXMgdGhlIGhlYWRlclxuICAgICAgICBzZXRSZXF1ZXN0SGVhZGVyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICBpZiAoY29tcGxldGVkID09IG51bGwpIHtcbiAgICAgICAgICAgIG5hbWUgPSByZXF1ZXN0SGVhZGVyc05hbWVzW25hbWUudG9Mb3dlckNhc2UoKV0gPSByZXF1ZXN0SGVhZGVyc05hbWVzW25hbWUudG9Mb3dlckNhc2UoKV0gfHwgbmFtZTtcbiAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIE92ZXJyaWRlcyByZXNwb25zZSBjb250ZW50LXR5cGUgaGVhZGVyXG4gICAgICAgIG92ZXJyaWRlTWltZVR5cGU6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgaWYgKGNvbXBsZXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICBzLm1pbWVUeXBlID0gdHlwZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3NcbiAgICAgICAgc3RhdHVzQ29kZTogZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICAgIHZhciBjb2RlO1xuXG4gICAgICAgICAgaWYgKG1hcCkge1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAvLyBFeGVjdXRlIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja3NcbiAgICAgICAgICAgICAganFYSFIuYWx3YXlzKG1hcFtqcVhIUi5zdGF0dXNdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIExhenktYWRkIHRoZSBuZXcgY2FsbGJhY2tzIGluIGEgd2F5IHRoYXQgcHJlc2VydmVzIG9sZCBvbmVzXG4gICAgICAgICAgICAgIGZvciAoY29kZSBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlW2NvZGVdID0gW3N0YXR1c0NvZGVbY29kZV0sIG1hcFtjb2RlXV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSByZXF1ZXN0XG4gICAgICAgIGFib3J0OiBmdW5jdGlvbiAoc3RhdHVzVGV4dCkge1xuICAgICAgICAgIHZhciBmaW5hbFRleHQgPSBzdGF0dXNUZXh0IHx8IHN0ckFib3J0O1xuXG4gICAgICAgICAgaWYgKHRyYW5zcG9ydCkge1xuICAgICAgICAgICAgdHJhbnNwb3J0LmFib3J0KGZpbmFsVGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9uZSgwLCBmaW5hbFRleHQpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9OyAvLyBBdHRhY2ggZGVmZXJyZWRzXG5cbiAgICAgIGRlZmVycmVkLnByb21pc2UoanFYSFIpOyAvLyBBZGQgcHJvdG9jb2wgaWYgbm90IHByb3ZpZGVkIChwcmVmaWx0ZXJzIG1pZ2h0IGV4cGVjdCBpdClcbiAgICAgIC8vIEhhbmRsZSBmYWxzeSB1cmwgaW4gdGhlIHNldHRpbmdzIG9iamVjdCAoIzEwMDkzOiBjb25zaXN0ZW5jeSB3aXRoIG9sZCBzaWduYXR1cmUpXG4gICAgICAvLyBXZSBhbHNvIHVzZSB0aGUgdXJsIHBhcmFtZXRlciBpZiBhdmFpbGFibGVcblxuICAgICAgcy51cmwgPSAoKHVybCB8fCBzLnVybCB8fCBsb2NhdGlvbi5ocmVmKSArIFwiXCIpLnJlcGxhY2UocnByb3RvY29sLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIik7IC8vIEFsaWFzIG1ldGhvZCBvcHRpb24gdG8gdHlwZSBhcyBwZXIgdGlja2V0ICMxMjAwNFxuXG4gICAgICBzLnR5cGUgPSBvcHRpb25zLm1ldGhvZCB8fCBvcHRpb25zLnR5cGUgfHwgcy5tZXRob2QgfHwgcy50eXBlOyAvLyBFeHRyYWN0IGRhdGFUeXBlcyBsaXN0XG5cbiAgICAgIHMuZGF0YVR5cGVzID0gKHMuZGF0YVR5cGUgfHwgXCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW1wiXCJdOyAvLyBBIGNyb3NzLWRvbWFpbiByZXF1ZXN0IGlzIGluIG9yZGVyIHdoZW4gdGhlIG9yaWdpbiBkb2Vzbid0IG1hdGNoIHRoZSBjdXJyZW50IG9yaWdpbi5cblxuICAgICAgaWYgKHMuY3Jvc3NEb21haW4gPT0gbnVsbCkge1xuICAgICAgICB1cmxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTsgLy8gU3VwcG9ydDogSUUgPD04IC0gMTEsIEVkZ2UgMTIgLSAxNVxuICAgICAgICAvLyBJRSB0aHJvd3MgZXhjZXB0aW9uIG9uIGFjY2Vzc2luZyB0aGUgaHJlZiBwcm9wZXJ0eSBpZiB1cmwgaXMgbWFsZm9ybWVkLFxuICAgICAgICAvLyBlLmcuIGh0dHA6Ly9leGFtcGxlLmNvbTo4MHgvXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB1cmxBbmNob3IuaHJlZiA9IHMudXJsOyAvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSBvbmx5XG4gICAgICAgICAgLy8gQW5jaG9yJ3MgaG9zdCBwcm9wZXJ0eSBpc24ndCBjb3JyZWN0bHkgc2V0IHdoZW4gcy51cmwgaXMgcmVsYXRpdmVcblxuICAgICAgICAgIHVybEFuY2hvci5ocmVmID0gdXJsQW5jaG9yLmhyZWY7XG4gICAgICAgICAgcy5jcm9zc0RvbWFpbiA9IG9yaWdpbkFuY2hvci5wcm90b2NvbCArIFwiLy9cIiArIG9yaWdpbkFuY2hvci5ob3N0ICE9PSB1cmxBbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxBbmNob3IuaG9zdDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGFuIGVycm9yIHBhcnNpbmcgdGhlIFVSTCwgYXNzdW1lIGl0IGlzIGNyb3NzRG9tYWluLFxuICAgICAgICAgIC8vIGl0IGNhbiBiZSByZWplY3RlZCBieSB0aGUgdHJhbnNwb3J0IGlmIGl0IGlzIGludmFsaWRcbiAgICAgICAgICBzLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBDb252ZXJ0IGRhdGEgaWYgbm90IGFscmVhZHkgYSBzdHJpbmdcblxuXG4gICAgICBpZiAocy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiYgdHlwZW9mIHMuZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBzLmRhdGEgPSBqUXVlcnkucGFyYW0ocy5kYXRhLCBzLnRyYWRpdGlvbmFsKTtcbiAgICAgIH0gLy8gQXBwbHkgcHJlZmlsdGVyc1xuXG5cbiAgICAgIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHByZWZpbHRlcnMsIHMsIG9wdGlvbnMsIGpxWEhSKTsgLy8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYSBwcmVmaWx0ZXIsIHN0b3AgdGhlcmVcblxuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm4ganFYSFI7XG4gICAgICB9IC8vIFdlIGNhbiBmaXJlIGdsb2JhbCBldmVudHMgYXMgb2Ygbm93IGlmIGFza2VkIHRvXG4gICAgICAvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAoIzE1MTE4KVxuXG5cbiAgICAgIGZpcmVHbG9iYWxzID0galF1ZXJ5LmV2ZW50ICYmIHMuZ2xvYmFsOyAvLyBXYXRjaCBmb3IgYSBuZXcgc2V0IG9mIHJlcXVlc3RzXG5cbiAgICAgIGlmIChmaXJlR2xvYmFscyAmJiBqUXVlcnkuYWN0aXZlKysgPT09IDApIHtcbiAgICAgICAgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIik7XG4gICAgICB9IC8vIFVwcGVyY2FzZSB0aGUgdHlwZVxuXG5cbiAgICAgIHMudHlwZSA9IHMudHlwZS50b1VwcGVyQ2FzZSgpOyAvLyBEZXRlcm1pbmUgaWYgcmVxdWVzdCBoYXMgY29udGVudFxuXG4gICAgICBzLmhhc0NvbnRlbnQgPSAhcm5vQ29udGVudC50ZXN0KHMudHlwZSk7IC8vIFNhdmUgdGhlIFVSTCBpbiBjYXNlIHdlJ3JlIHRveWluZyB3aXRoIHRoZSBJZi1Nb2RpZmllZC1TaW5jZVxuICAgICAgLy8gYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyIGxhdGVyIG9uXG4gICAgICAvLyBSZW1vdmUgaGFzaCB0byBzaW1wbGlmeSB1cmwgbWFuaXB1bGF0aW9uXG5cbiAgICAgIGNhY2hlVVJMID0gcy51cmwucmVwbGFjZShyaGFzaCwgXCJcIik7IC8vIE1vcmUgb3B0aW9ucyBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBubyBjb250ZW50XG5cbiAgICAgIGlmICghcy5oYXNDb250ZW50KSB7XG4gICAgICAgIC8vIFJlbWVtYmVyIHRoZSBoYXNoIHNvIHdlIGNhbiBwdXQgaXQgYmFja1xuICAgICAgICB1bmNhY2hlZCA9IHMudXJsLnNsaWNlKGNhY2hlVVJMLmxlbmd0aCk7IC8vIElmIGRhdGEgaXMgYXZhaWxhYmxlIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkLCBhcHBlbmQgZGF0YSB0byB1cmxcblxuICAgICAgICBpZiAocy5kYXRhICYmIChzLnByb2Nlc3NEYXRhIHx8IHR5cGVvZiBzLmRhdGEgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgY2FjaGVVUkwgKz0gKHJxdWVyeS50ZXN0KGNhY2hlVVJMKSA/IFwiJlwiIDogXCI/XCIpICsgcy5kYXRhOyAvLyAjOTY4MjogcmVtb3ZlIGRhdGEgc28gdGhhdCBpdCdzIG5vdCB1c2VkIGluIGFuIGV2ZW50dWFsIHJldHJ5XG5cbiAgICAgICAgICBkZWxldGUgcy5kYXRhO1xuICAgICAgICB9IC8vIEFkZCBvciB1cGRhdGUgYW50aS1jYWNoZSBwYXJhbSBpZiBuZWVkZWRcblxuXG4gICAgICAgIGlmIChzLmNhY2hlID09PSBmYWxzZSkge1xuICAgICAgICAgIGNhY2hlVVJMID0gY2FjaGVVUkwucmVwbGFjZShyYW50aUNhY2hlLCBcIiQxXCIpO1xuICAgICAgICAgIHVuY2FjaGVkID0gKHJxdWVyeS50ZXN0KGNhY2hlVVJMKSA/IFwiJlwiIDogXCI/XCIpICsgXCJfPVwiICsgbm9uY2UrKyArIHVuY2FjaGVkO1xuICAgICAgICB9IC8vIFB1dCBoYXNoIGFuZCBhbnRpLWNhY2hlIG9uIHRoZSBVUkwgdGhhdCB3aWxsIGJlIHJlcXVlc3RlZCAoZ2gtMTczMilcblxuXG4gICAgICAgIHMudXJsID0gY2FjaGVVUkwgKyB1bmNhY2hlZDsgLy8gQ2hhbmdlICclMjAnIHRvICcrJyBpZiB0aGlzIGlzIGVuY29kZWQgZm9ybSBib2R5IGNvbnRlbnQgKGdoLTI2NTgpXG4gICAgICB9IGVsc2UgaWYgKHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmIChzLmNvbnRlbnRUeXBlIHx8IFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikgPT09IDApIHtcbiAgICAgICAgcy5kYXRhID0gcy5kYXRhLnJlcGxhY2UocjIwLCBcIitcIik7XG4gICAgICB9IC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cblxuICAgICAgaWYgKHMuaWZNb2RpZmllZCkge1xuICAgICAgICBpZiAoalF1ZXJ5Lmxhc3RNb2RpZmllZFtjYWNoZVVSTF0pIHtcbiAgICAgICAgICBqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgalF1ZXJ5Lmxhc3RNb2RpZmllZFtjYWNoZVVSTF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGpRdWVyeS5ldGFnW2NhY2hlVVJMXSkge1xuICAgICAgICAgIGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsIGpRdWVyeS5ldGFnW2NhY2hlVVJMXSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gU2V0IHRoZSBjb3JyZWN0IGhlYWRlciwgaWYgZGF0YSBpcyBiZWluZyBzZW50XG5cblxuICAgICAgaWYgKHMuZGF0YSAmJiBzLmhhc0NvbnRlbnQgJiYgcy5jb250ZW50VHlwZSAhPT0gZmFsc2UgfHwgb3B0aW9ucy5jb250ZW50VHlwZSkge1xuICAgICAgICBqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIHMuY29udGVudFR5cGUpO1xuICAgICAgfSAvLyBTZXQgdGhlIEFjY2VwdHMgaGVhZGVyIGZvciB0aGUgc2VydmVyLCBkZXBlbmRpbmcgb24gdGhlIGRhdGFUeXBlXG5cblxuICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBzLmRhdGFUeXBlc1swXSAmJiBzLmFjY2VwdHNbcy5kYXRhVHlwZXNbMF1dID8gcy5hY2NlcHRzW3MuZGF0YVR5cGVzWzBdXSArIChzLmRhdGFUeXBlc1swXSAhPT0gXCIqXCIgPyBcIiwgXCIgKyBhbGxUeXBlcyArIFwiOyBxPTAuMDFcIiA6IFwiXCIpIDogcy5hY2NlcHRzW1wiKlwiXSk7IC8vIENoZWNrIGZvciBoZWFkZXJzIG9wdGlvblxuXG4gICAgICBmb3IgKGkgaW4gcy5oZWFkZXJzKSB7XG4gICAgICAgIGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoaSwgcy5oZWFkZXJzW2ldKTtcbiAgICAgIH0gLy8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxuXG5cbiAgICAgIGlmIChzLmJlZm9yZVNlbmQgJiYgKHMuYmVmb3JlU2VuZC5jYWxsKGNhbGxiYWNrQ29udGV4dCwganFYSFIsIHMpID09PSBmYWxzZSB8fCBjb21wbGV0ZWQpKSB7XG4gICAgICAgIC8vIEFib3J0IGlmIG5vdCBkb25lIGFscmVhZHkgYW5kIHJldHVyblxuICAgICAgICByZXR1cm4ganFYSFIuYWJvcnQoKTtcbiAgICAgIH0gLy8gQWJvcnRpbmcgaXMgbm8gbG9uZ2VyIGEgY2FuY2VsbGF0aW9uXG5cblxuICAgICAgc3RyQWJvcnQgPSBcImFib3J0XCI7IC8vIEluc3RhbGwgY2FsbGJhY2tzIG9uIGRlZmVycmVkc1xuXG4gICAgICBjb21wbGV0ZURlZmVycmVkLmFkZChzLmNvbXBsZXRlKTtcbiAgICAgIGpxWEhSLmRvbmUocy5zdWNjZXNzKTtcbiAgICAgIGpxWEhSLmZhaWwocy5lcnJvcik7IC8vIEdldCB0cmFuc3BvcnRcblxuICAgICAgdHJhbnNwb3J0ID0gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHModHJhbnNwb3J0cywgcywgb3B0aW9ucywganFYSFIpOyAvLyBJZiBubyB0cmFuc3BvcnQsIHdlIGF1dG8tYWJvcnRcblxuICAgICAgaWYgKCF0cmFuc3BvcnQpIHtcbiAgICAgICAgZG9uZSgtMSwgXCJObyBUcmFuc3BvcnRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqcVhIUi5yZWFkeVN0YXRlID0gMTsgLy8gU2VuZCBnbG9iYWwgZXZlbnRcblxuICAgICAgICBpZiAoZmlyZUdsb2JhbHMpIHtcbiAgICAgICAgICBnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlcihcImFqYXhTZW5kXCIsIFtqcVhIUiwgc10pO1xuICAgICAgICB9IC8vIElmIHJlcXVlc3Qgd2FzIGFib3J0ZWQgaW5zaWRlIGFqYXhTZW5kLCBzdG9wIHRoZXJlXG5cblxuICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgcmV0dXJuIGpxWEhSO1xuICAgICAgICB9IC8vIFRpbWVvdXRcblxuXG4gICAgICAgIGlmIChzLmFzeW5jICYmIHMudGltZW91dCA+IDApIHtcbiAgICAgICAgICB0aW1lb3V0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqcVhIUi5hYm9ydChcInRpbWVvdXRcIik7XG4gICAgICAgICAgfSwgcy50aW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgdHJhbnNwb3J0LnNlbmQocmVxdWVzdEhlYWRlcnMsIGRvbmUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gUmV0aHJvdyBwb3N0LWNvbXBsZXRpb24gZXhjZXB0aW9uc1xuICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfSAvLyBQcm9wYWdhdGUgb3RoZXJzIGFzIHJlc3VsdHNcblxuXG4gICAgICAgICAgZG9uZSgtMSwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQ2FsbGJhY2sgZm9yIHdoZW4gZXZlcnl0aGluZyBpcyBkb25lXG5cblxuICAgICAgZnVuY3Rpb24gZG9uZShzdGF0dXMsIG5hdGl2ZVN0YXR1c1RleHQsIHJlc3BvbnNlcywgaGVhZGVycykge1xuICAgICAgICB2YXIgaXNTdWNjZXNzLFxuICAgICAgICAgICAgc3VjY2VzcyxcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICBtb2RpZmllZCxcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0OyAvLyBJZ25vcmUgcmVwZWF0IGludm9jYXRpb25zXG5cbiAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBsZXRlZCA9IHRydWU7IC8vIENsZWFyIHRpbWVvdXQgaWYgaXQgZXhpc3RzXG5cbiAgICAgICAgaWYgKHRpbWVvdXRUaW1lcikge1xuICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dFRpbWVyKTtcbiAgICAgICAgfSAvLyBEZXJlZmVyZW5jZSB0cmFuc3BvcnQgZm9yIGVhcmx5IGdhcmJhZ2UgY29sbGVjdGlvblxuICAgICAgICAvLyAobm8gbWF0dGVyIGhvdyBsb25nIHRoZSBqcVhIUiBvYmplY3Qgd2lsbCBiZSB1c2VkKVxuXG5cbiAgICAgICAgdHJhbnNwb3J0ID0gdW5kZWZpbmVkOyAvLyBDYWNoZSByZXNwb25zZSBoZWFkZXJzXG5cbiAgICAgICAgcmVzcG9uc2VIZWFkZXJzU3RyaW5nID0gaGVhZGVycyB8fCBcIlwiOyAvLyBTZXQgcmVhZHlTdGF0ZVxuXG4gICAgICAgIGpxWEhSLnJlYWR5U3RhdGUgPSBzdGF0dXMgPiAwID8gNCA6IDA7IC8vIERldGVybWluZSBpZiBzdWNjZXNzZnVsXG5cbiAgICAgICAgaXNTdWNjZXNzID0gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDAgfHwgc3RhdHVzID09PSAzMDQ7IC8vIEdldCByZXNwb25zZSBkYXRhXG5cbiAgICAgICAgaWYgKHJlc3BvbnNlcykge1xuICAgICAgICAgIHJlc3BvbnNlID0gYWpheEhhbmRsZVJlc3BvbnNlcyhzLCBqcVhIUiwgcmVzcG9uc2VzKTtcbiAgICAgICAgfSAvLyBDb252ZXJ0IG5vIG1hdHRlciB3aGF0ICh0aGF0IHdheSByZXNwb25zZVhYWCBmaWVsZHMgYXJlIGFsd2F5cyBzZXQpXG5cblxuICAgICAgICByZXNwb25zZSA9IGFqYXhDb252ZXJ0KHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzKTsgLy8gSWYgc3VjY2Vzc2Z1bCwgaGFuZGxlIHR5cGUgY2hhaW5pbmdcblxuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgLy8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cbiAgICAgICAgICBpZiAocy5pZk1vZGlmaWVkKSB7XG4gICAgICAgICAgICBtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKTtcblxuICAgICAgICAgICAgaWYgKG1vZGlmaWVkKSB7XG4gICAgICAgICAgICAgIGpRdWVyeS5sYXN0TW9kaWZpZWRbY2FjaGVVUkxdID0gbW9kaWZpZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpO1xuXG4gICAgICAgICAgICBpZiAobW9kaWZpZWQpIHtcbiAgICAgICAgICAgICAgalF1ZXJ5LmV0YWdbY2FjaGVVUkxdID0gbW9kaWZpZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBpZiBubyBjb250ZW50XG5cblxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwNCB8fCBzLnR5cGUgPT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBzdGF0dXNUZXh0ID0gXCJub2NvbnRlbnRcIjsgLy8gaWYgbm90IG1vZGlmaWVkXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDMwNCkge1xuICAgICAgICAgICAgc3RhdHVzVGV4dCA9IFwibm90bW9kaWZpZWRcIjsgLy8gSWYgd2UgaGF2ZSBkYXRhLCBsZXQncyBjb252ZXJ0IGl0XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0ZTtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcbiAgICAgICAgICAgIGlzU3VjY2VzcyA9ICFlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRXh0cmFjdCBlcnJvciBmcm9tIHN0YXR1c1RleHQgYW5kIG5vcm1hbGl6ZSBmb3Igbm9uLWFib3J0c1xuICAgICAgICAgIGVycm9yID0gc3RhdHVzVGV4dDtcblxuICAgICAgICAgIGlmIChzdGF0dXMgfHwgIXN0YXR1c1RleHQpIHtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSBcImVycm9yXCI7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPCAwKSB7XG4gICAgICAgICAgICAgIHN0YXR1cyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFNldCBkYXRhIGZvciB0aGUgZmFrZSB4aHIgb2JqZWN0XG5cblxuICAgICAgICBqcVhIUi5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIGpxWEhSLnN0YXR1c1RleHQgPSAobmF0aXZlU3RhdHVzVGV4dCB8fCBzdGF0dXNUZXh0KSArIFwiXCI7IC8vIFN1Y2Nlc3MvRXJyb3JcblxuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZVdpdGgoY2FsbGJhY2tDb250ZXh0LCBbc3VjY2Vzcywgc3RhdHVzVGV4dCwganFYSFJdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3RXaXRoKGNhbGxiYWNrQ29udGV4dCwgW2pxWEhSLCBzdGF0dXNUZXh0LCBlcnJvcl0pO1xuICAgICAgICB9IC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cblxuICAgICAgICBqcVhIUi5zdGF0dXNDb2RlKHN0YXR1c0NvZGUpO1xuICAgICAgICBzdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChmaXJlR2xvYmFscykge1xuICAgICAgICAgIGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKGlzU3VjY2VzcyA/IFwiYWpheFN1Y2Nlc3NcIiA6IFwiYWpheEVycm9yXCIsIFtqcVhIUiwgcywgaXNTdWNjZXNzID8gc3VjY2VzcyA6IGVycm9yXSk7XG4gICAgICAgIH0gLy8gQ29tcGxldGVcblxuXG4gICAgICAgIGNvbXBsZXRlRGVmZXJyZWQuZmlyZVdpdGgoY2FsbGJhY2tDb250ZXh0LCBbanFYSFIsIHN0YXR1c1RleHRdKTtcblxuICAgICAgICBpZiAoZmlyZUdsb2JhbHMpIHtcbiAgICAgICAgICBnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLCBbanFYSFIsIHNdKTsgLy8gSGFuZGxlIHRoZSBnbG9iYWwgQUpBWCBjb3VudGVyXG5cbiAgICAgICAgICBpZiAoISAtLWpRdWVyeS5hY3RpdmUpIHtcbiAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBqcVhIUjtcbiAgICB9LFxuICAgIGdldEpTT046IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4galF1ZXJ5LmdldCh1cmwsIGRhdGEsIGNhbGxiYWNrLCBcImpzb25cIik7XG4gICAgfSxcbiAgICBnZXRTY3JpcHQ6IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4galF1ZXJ5LmdldCh1cmwsIHVuZGVmaW5lZCwgY2FsbGJhY2ssIFwic2NyaXB0XCIpO1xuICAgIH1cbiAgfSk7XG4gIGpRdWVyeS5lYWNoKFtcImdldFwiLCBcInBvc3RcIl0sIGZ1bmN0aW9uIChpLCBtZXRob2QpIHtcbiAgICBqUXVlcnlbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGNhbGxiYWNrLCB0eXBlKSB7XG4gICAgICAvLyBTaGlmdCBhcmd1bWVudHMgaWYgZGF0YSBhcmd1bWVudCB3YXMgb21pdHRlZFxuICAgICAgaWYgKGlzRnVuY3Rpb24oZGF0YSkpIHtcbiAgICAgICAgdHlwZSA9IHR5cGUgfHwgY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrID0gZGF0YTtcbiAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gLy8gVGhlIHVybCBjYW4gYmUgYW4gb3B0aW9ucyBvYmplY3QgKHdoaWNoIHRoZW4gbXVzdCBoYXZlIC51cmwpXG5cblxuICAgICAgcmV0dXJuIGpRdWVyeS5hamF4KGpRdWVyeS5leHRlbmQoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogbWV0aG9kLFxuICAgICAgICBkYXRhVHlwZTogdHlwZSxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgc3VjY2VzczogY2FsbGJhY2tcbiAgICAgIH0sIGpRdWVyeS5pc1BsYWluT2JqZWN0KHVybCkgJiYgdXJsKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgalF1ZXJ5Ll9ldmFsVXJsID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAgIHJldHVybiBqUXVlcnkuYWpheCh7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIC8vIE1ha2UgdGhpcyBleHBsaWNpdCwgc2luY2UgdXNlciBjYW4gb3ZlcnJpZGUgdGhpcyB0aHJvdWdoIGFqYXhTZXR1cCAoIzExMjY0KVxuICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgIGRhdGFUeXBlOiBcInNjcmlwdFwiLFxuICAgICAgY2FjaGU6IHRydWUsXG4gICAgICBhc3luYzogZmFsc2UsXG4gICAgICBnbG9iYWw6IGZhbHNlLFxuICAgICAgLy8gT25seSBldmFsdWF0ZSB0aGUgcmVzcG9uc2UgaWYgaXQgaXMgc3VjY2Vzc2Z1bCAoZ2gtNDEyNilcbiAgICAgIC8vIGRhdGFGaWx0ZXIgaXMgbm90IGludm9rZWQgZm9yIGZhaWx1cmUgcmVzcG9uc2VzLCBzbyB1c2luZyBpdCBpbnN0ZWFkXG4gICAgICAvLyBvZiB0aGUgZGVmYXVsdCBjb252ZXJ0ZXIgaXMga2x1ZGd5IGJ1dCBpdCB3b3Jrcy5cbiAgICAgIGNvbnZlcnRlcnM6IHtcbiAgICAgICAgXCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbiAoKSB7fVxuICAgICAgfSxcbiAgICAgIGRhdGFGaWx0ZXI6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBqUXVlcnkuZ2xvYmFsRXZhbChyZXNwb25zZSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgd3JhcEFsbDogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgIHZhciB3cmFwO1xuXG4gICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihodG1sKSkge1xuICAgICAgICAgIGh0bWwgPSBodG1sLmNhbGwodGhpc1swXSk7XG4gICAgICAgIH0gLy8gVGhlIGVsZW1lbnRzIHRvIHdyYXAgdGhlIHRhcmdldCBhcm91bmRcblxuXG4gICAgICAgIHdyYXAgPSBqUXVlcnkoaHRtbCwgdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSh0cnVlKTtcblxuICAgICAgICBpZiAodGhpc1swXS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgd3JhcC5pbnNlcnRCZWZvcmUodGhpc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICB3cmFwLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGVsZW0gPSB0aGlzO1xuXG4gICAgICAgICAgd2hpbGUgKGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW0gPSBlbGVtLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICB9KS5hcHBlbmQodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgd3JhcElubmVyOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgaWYgKGlzRnVuY3Rpb24oaHRtbCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIGpRdWVyeSh0aGlzKS53cmFwSW5uZXIoaHRtbC5jYWxsKHRoaXMsIGkpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IGpRdWVyeSh0aGlzKSxcbiAgICAgICAgICAgIGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpO1xuXG4gICAgICAgIGlmIChjb250ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBjb250ZW50cy53cmFwQWxsKGh0bWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuYXBwZW5kKGh0bWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHdyYXA6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICB2YXIgaHRtbElzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uKGh0bWwpO1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBqUXVlcnkodGhpcykud3JhcEFsbChodG1sSXNGdW5jdGlvbiA/IGh0bWwuY2FsbCh0aGlzLCBpKSA6IGh0bWwpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB1bndyYXA6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdGhpcy5wYXJlbnQoc2VsZWN0b3IpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0pO1xuXG4gIGpRdWVyeS5leHByLnBzZXVkb3MuaGlkZGVuID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICByZXR1cm4gIWpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZShlbGVtKTtcbiAgfTtcblxuICBqUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIHJldHVybiAhIShlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xuICB9O1xuXG4gIGpRdWVyeS5hamF4U2V0dGluZ3MueGhyID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH07XG5cbiAgdmFyIHhoclN1Y2Nlc3NTdGF0dXMgPSB7XG4gICAgLy8gRmlsZSBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyBjb2RlIDAsIGFzc3VtZSAyMDBcbiAgICAwOiAyMDAsXG4gICAgLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbiAgICAvLyAjMTQ1MDogc29tZXRpbWVzIElFIHJldHVybnMgMTIyMyB3aGVuIGl0IHNob3VsZCBiZSAyMDRcbiAgICAxMjIzOiAyMDRcbiAgfSxcbiAgICAgIHhoclN1cHBvcnRlZCA9IGpRdWVyeS5hamF4U2V0dGluZ3MueGhyKCk7XG4gIHN1cHBvcnQuY29ycyA9ICEheGhyU3VwcG9ydGVkICYmIFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyU3VwcG9ydGVkO1xuICBzdXBwb3J0LmFqYXggPSB4aHJTdXBwb3J0ZWQgPSAhIXhoclN1cHBvcnRlZDtcbiAgalF1ZXJ5LmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s7IC8vIENyb3NzIGRvbWFpbiBvbmx5IGFsbG93ZWQgaWYgc3VwcG9ydGVkIHRocm91Z2ggWE1MSHR0cFJlcXVlc3RcblxuICAgIGlmIChzdXBwb3J0LmNvcnMgfHwgeGhyU3VwcG9ydGVkICYmICFvcHRpb25zLmNyb3NzRG9tYWluKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZW5kOiBmdW5jdGlvbiAoaGVhZGVycywgY29tcGxldGUpIHtcbiAgICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgICAgeGhyID0gb3B0aW9ucy54aHIoKTtcbiAgICAgICAgICB4aHIub3BlbihvcHRpb25zLnR5cGUsIG9wdGlvbnMudXJsLCBvcHRpb25zLmFzeW5jLCBvcHRpb25zLnVzZXJuYW1lLCBvcHRpb25zLnBhc3N3b3JkKTsgLy8gQXBwbHkgY3VzdG9tIGZpZWxkcyBpZiBwcm92aWRlZFxuXG4gICAgICAgICAgaWYgKG9wdGlvbnMueGhyRmllbGRzKSB7XG4gICAgICAgICAgICBmb3IgKGkgaW4gb3B0aW9ucy54aHJGaWVsZHMpIHtcbiAgICAgICAgICAgICAgeGhyW2ldID0gb3B0aW9ucy54aHJGaWVsZHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBPdmVycmlkZSBtaW1lIHR5cGUgaWYgbmVlZGVkXG5cblxuICAgICAgICAgIGlmIChvcHRpb25zLm1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlKSB7XG4gICAgICAgICAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShvcHRpb25zLm1pbWVUeXBlKTtcbiAgICAgICAgICB9IC8vIFgtUmVxdWVzdGVkLVdpdGggaGVhZGVyXG4gICAgICAgICAgLy8gRm9yIGNyb3NzLWRvbWFpbiByZXF1ZXN0cywgc2VlaW5nIGFzIGNvbmRpdGlvbnMgZm9yIGEgcHJlZmxpZ2h0IGFyZVxuICAgICAgICAgIC8vIGFraW4gdG8gYSBqaWdzYXcgcHV6emxlLCB3ZSBzaW1wbHkgbmV2ZXIgc2V0IGl0IHRvIGJlIHN1cmUuXG4gICAgICAgICAgLy8gKGl0IGNhbiBhbHdheXMgYmUgc2V0IG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgb3IgZXZlbiB1c2luZyBhamF4U2V0dXApXG4gICAgICAgICAgLy8gRm9yIHNhbWUtZG9tYWluIHJlcXVlc3RzLCB3b24ndCBjaGFuZ2UgaGVhZGVyIGlmIGFscmVhZHkgcHJvdmlkZWQuXG5cblxuICAgICAgICAgIGlmICghb3B0aW9ucy5jcm9zc0RvbWFpbiAmJiAhaGVhZGVyc1tcIlgtUmVxdWVzdGVkLVdpdGhcIl0pIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdID0gXCJYTUxIdHRwUmVxdWVzdFwiO1xuICAgICAgICAgIH0gLy8gU2V0IGhlYWRlcnNcblxuXG4gICAgICAgICAgZm9yIChpIGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGksIGhlYWRlcnNbaV0pO1xuICAgICAgICAgIH0gLy8gQ2FsbGJhY2tcblxuXG4gICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBlcnJvckNhbGxiYWNrID0geGhyLm9ubG9hZCA9IHhoci5vbmVycm9yID0geGhyLm9uYWJvcnQgPSB4aHIub250aW1lb3V0ID0geGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJhYm9ydFwiKSB7XG4gICAgICAgICAgICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbiAgICAgICAgICAgICAgICAgIC8vIE9uIGEgbWFudWFsIG5hdGl2ZSBhYm9ydCwgSUU5IHRocm93c1xuICAgICAgICAgICAgICAgICAgLy8gZXJyb3JzIG9uIGFueSBwcm9wZXJ0eSBhY2Nlc3MgdGhhdCBpcyBub3QgcmVhZHlTdGF0ZVxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB4aHIuc3RhdHVzICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKDAsIFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSggLy8gRmlsZTogcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgMDsgc2VlICM4NjA1LCAjMTQyMDdcbiAgICAgICAgICAgICAgICAgICAgeGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb21wbGV0ZSh4aHJTdWNjZXNzU3RhdHVzW3hoci5zdGF0dXNdIHx8IHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0LCAvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuICAgICAgICAgICAgICAgICAgLy8gSUU5IGhhcyBubyBYSFIyIGJ1dCB0aHJvd3Mgb24gYmluYXJ5ICh0cmFjLTExNDI2KVxuICAgICAgICAgICAgICAgICAgLy8gRm9yIFhIUjIgbm9uLXRleHQsIGxldCB0aGUgY2FsbGVyIGhhbmRsZSBpdCAoZ2gtMjQ5OClcbiAgICAgICAgICAgICAgICAgICh4aHIucmVzcG9uc2VUeXBlIHx8IFwidGV4dFwiKSAhPT0gXCJ0ZXh0XCIgfHwgdHlwZW9mIHhoci5yZXNwb25zZVRleHQgIT09IFwic3RyaW5nXCIgPyB7XG4gICAgICAgICAgICAgICAgICAgIGJpbmFyeTogeGhyLnJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICAgICAgICB9LCB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9OyAvLyBMaXN0ZW4gdG8gZXZlbnRzXG5cblxuICAgICAgICAgIHhoci5vbmxvYWQgPSBjYWxsYmFjaygpO1xuICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSB4aHIub25lcnJvciA9IHhoci5vbnRpbWVvdXQgPSBjYWxsYmFjayhcImVycm9yXCIpOyAvLyBTdXBwb3J0OiBJRSA5IG9ubHlcbiAgICAgICAgICAvLyBVc2Ugb25yZWFkeXN0YXRlY2hhbmdlIHRvIHJlcGxhY2Ugb25hYm9ydFxuICAgICAgICAgIC8vIHRvIGhhbmRsZSB1bmNhdWdodCBhYm9ydHNcblxuICAgICAgICAgIGlmICh4aHIub25hYm9ydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB4aHIub25hYm9ydCA9IGVycm9yQ2FsbGJhY2s7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIENoZWNrIHJlYWR5U3RhdGUgYmVmb3JlIHRpbWVvdXQgYXMgaXQgY2hhbmdlc1xuICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAvLyBBbGxvdyBvbmVycm9yIHRvIGJlIGNhbGxlZCBmaXJzdCxcbiAgICAgICAgICAgICAgICAvLyBidXQgdGhhdCB3aWxsIG5vdCBoYW5kbGUgYSBuYXRpdmUgYWJvcnRcbiAgICAgICAgICAgICAgICAvLyBBbHNvLCBzYXZlIGVycm9yQ2FsbGJhY2sgdG8gYSB2YXJpYWJsZVxuICAgICAgICAgICAgICAgIC8vIGFzIHhoci5vbmVycm9yIGNhbm5vdCBiZSBhY2Nlc3NlZFxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSAvLyBDcmVhdGUgdGhlIGFib3J0IGNhbGxiYWNrXG5cblxuICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2soXCJhYm9ydFwiKTtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBEbyBzZW5kIHRoZSByZXF1ZXN0ICh0aGlzIG1heSByYWlzZSBhbiBleGNlcHRpb24pXG4gICAgICAgICAgICB4aHIuc2VuZChvcHRpb25zLmhhc0NvbnRlbnQgJiYgb3B0aW9ucy5kYXRhIHx8IG51bGwpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vICMxNDY4MzogT25seSByZXRocm93IGlmIHRoaXMgaGFzbid0IGJlZW4gbm90aWZpZWQgYXMgYW4gZXJyb3IgeWV0XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0pOyAvLyBQcmV2ZW50IGF1dG8tZXhlY3V0aW9uIG9mIHNjcmlwdHMgd2hlbiBubyBleHBsaWNpdCBkYXRhVHlwZSB3YXMgcHJvdmlkZWQgKFNlZSBnaC0yNDMyKVxuXG4gIGpRdWVyeS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uIChzKSB7XG4gICAgaWYgKHMuY3Jvc3NEb21haW4pIHtcbiAgICAgIHMuY29udGVudHMuc2NyaXB0ID0gZmFsc2U7XG4gICAgfVxuICB9KTsgLy8gSW5zdGFsbCBzY3JpcHQgZGF0YVR5cGVcblxuICBqUXVlcnkuYWpheFNldHVwKHtcbiAgICBhY2NlcHRzOiB7XG4gICAgICBzY3JpcHQ6IFwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBcIiArIFwiYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJcbiAgICB9LFxuICAgIGNvbnRlbnRzOiB7XG4gICAgICBzY3JpcHQ6IC9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL1xuICAgIH0sXG4gICAgY29udmVydGVyczoge1xuICAgICAgXCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBqUXVlcnkuZ2xvYmFsRXZhbCh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9KTsgLy8gSGFuZGxlIGNhY2hlJ3Mgc3BlY2lhbCBjYXNlIGFuZCBjcm9zc0RvbWFpblxuXG4gIGpRdWVyeS5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsIGZ1bmN0aW9uIChzKSB7XG4gICAgaWYgKHMuY2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcy5jYWNoZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzLmNyb3NzRG9tYWluKSB7XG4gICAgICBzLnR5cGUgPSBcIkdFVFwiO1xuICAgIH1cbiAgfSk7IC8vIEJpbmQgc2NyaXB0IHRhZyBoYWNrIHRyYW5zcG9ydFxuXG4gIGpRdWVyeS5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsIGZ1bmN0aW9uIChzKSB7XG4gICAgLy8gVGhpcyB0cmFuc3BvcnQgb25seSBkZWFscyB3aXRoIGNyb3NzIGRvbWFpbiBvciBmb3JjZWQtYnktYXR0cnMgcmVxdWVzdHNcbiAgICBpZiAocy5jcm9zc0RvbWFpbiB8fCBzLnNjcmlwdEF0dHJzKSB7XG4gICAgICB2YXIgc2NyaXB0LCBjYWxsYmFjaztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlbmQ6IGZ1bmN0aW9uIChfLCBjb21wbGV0ZSkge1xuICAgICAgICAgIHNjcmlwdCA9IGpRdWVyeShcIjxzY3JpcHQ+XCIpLmF0dHIocy5zY3JpcHRBdHRycyB8fCB7fSkucHJvcCh7XG4gICAgICAgICAgICBjaGFyc2V0OiBzLnNjcmlwdENoYXJzZXQsXG4gICAgICAgICAgICBzcmM6IHMudXJsXG4gICAgICAgICAgfSkub24oXCJsb2FkIGVycm9yXCIsIGNhbGxiYWNrID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICAgIGNvbXBsZXRlKGV2dC50eXBlID09PSBcImVycm9yXCIgPyA0MDQgOiAyMDAsIGV2dC50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTsgLy8gVXNlIG5hdGl2ZSBET00gbWFuaXB1bGF0aW9uIHRvIGF2b2lkIG91ciBkb21NYW5pcCBBSkFYIHRyaWNrZXJ5XG5cbiAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFswXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuICB2YXIgb2xkQ2FsbGJhY2tzID0gW10sXG4gICAgICByanNvbnAgPSAvKD0pXFw/KD89JnwkKXxcXD9cXD8vOyAvLyBEZWZhdWx0IGpzb25wIHNldHRpbmdzXG5cbiAgalF1ZXJ5LmFqYXhTZXR1cCh7XG4gICAganNvbnA6IFwiY2FsbGJhY2tcIixcbiAgICBqc29ucENhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBvbGRDYWxsYmFja3MucG9wKCkgfHwgalF1ZXJ5LmV4cGFuZG8gKyBcIl9cIiArIG5vbmNlKys7XG4gICAgICB0aGlzW2NhbGxiYWNrXSA9IHRydWU7XG4gICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgfVxuICB9KTsgLy8gRGV0ZWN0LCBub3JtYWxpemUgb3B0aW9ucyBhbmQgaW5zdGFsbCBjYWxsYmFja3MgZm9yIGpzb25wIHJlcXVlc3RzXG5cbiAgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsIGZ1bmN0aW9uIChzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUikge1xuICAgIHZhciBjYWxsYmFja05hbWUsXG4gICAgICAgIG92ZXJ3cml0dGVuLFxuICAgICAgICByZXNwb25zZUNvbnRhaW5lcixcbiAgICAgICAganNvblByb3AgPSBzLmpzb25wICE9PSBmYWxzZSAmJiAocmpzb25wLnRlc3Qocy51cmwpID8gXCJ1cmxcIiA6IHR5cGVvZiBzLmRhdGEgPT09IFwic3RyaW5nXCIgJiYgKHMuY29udGVudFR5cGUgfHwgXCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSA9PT0gMCAmJiByanNvbnAudGVzdChzLmRhdGEpICYmIFwiZGF0YVwiKTsgLy8gSGFuZGxlIGlmZiB0aGUgZXhwZWN0ZWQgZGF0YSB0eXBlIGlzIFwianNvbnBcIiBvciB3ZSBoYXZlIGEgcGFyYW1ldGVyIHRvIHNldFxuXG4gICAgaWYgKGpzb25Qcm9wIHx8IHMuZGF0YVR5cGVzWzBdID09PSBcImpzb25wXCIpIHtcbiAgICAgIC8vIEdldCBjYWxsYmFjayBuYW1lLCByZW1lbWJlcmluZyBwcmVleGlzdGluZyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggaXRcbiAgICAgIGNhbGxiYWNrTmFtZSA9IHMuanNvbnBDYWxsYmFjayA9IGlzRnVuY3Rpb24ocy5qc29ucENhbGxiYWNrKSA/IHMuanNvbnBDYWxsYmFjaygpIDogcy5qc29ucENhbGxiYWNrOyAvLyBJbnNlcnQgY2FsbGJhY2sgaW50byB1cmwgb3IgZm9ybSBkYXRhXG5cbiAgICAgIGlmIChqc29uUHJvcCkge1xuICAgICAgICBzW2pzb25Qcm9wXSA9IHNbanNvblByb3BdLnJlcGxhY2Uocmpzb25wLCBcIiQxXCIgKyBjYWxsYmFja05hbWUpO1xuICAgICAgfSBlbHNlIGlmIChzLmpzb25wICE9PSBmYWxzZSkge1xuICAgICAgICBzLnVybCArPSAocnF1ZXJ5LnRlc3Qocy51cmwpID8gXCImXCIgOiBcIj9cIikgKyBzLmpzb25wICsgXCI9XCIgKyBjYWxsYmFja05hbWU7XG4gICAgICB9IC8vIFVzZSBkYXRhIGNvbnZlcnRlciB0byByZXRyaWV2ZSBqc29uIGFmdGVyIHNjcmlwdCBleGVjdXRpb25cblxuXG4gICAgICBzLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZUNvbnRhaW5lcikge1xuICAgICAgICAgIGpRdWVyeS5lcnJvcihjYWxsYmFja05hbWUgKyBcIiB3YXMgbm90IGNhbGxlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZUNvbnRhaW5lclswXTtcbiAgICAgIH07IC8vIEZvcmNlIGpzb24gZGF0YVR5cGVcblxuXG4gICAgICBzLmRhdGFUeXBlc1swXSA9IFwianNvblwiOyAvLyBJbnN0YWxsIGNhbGxiYWNrXG5cbiAgICAgIG92ZXJ3cml0dGVuID0gd2luZG93W2NhbGxiYWNrTmFtZV07XG5cbiAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNwb25zZUNvbnRhaW5lciA9IGFyZ3VtZW50cztcbiAgICAgIH07IC8vIENsZWFuLXVwIGZ1bmN0aW9uIChmaXJlcyBhZnRlciBjb252ZXJ0ZXJzKVxuXG5cbiAgICAgIGpxWEhSLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElmIHByZXZpb3VzIHZhbHVlIGRpZG4ndCBleGlzdCAtIHJlbW92ZSBpdFxuICAgICAgICBpZiAob3ZlcndyaXR0ZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGpRdWVyeSh3aW5kb3cpLnJlbW92ZVByb3AoY2FsbGJhY2tOYW1lKTsgLy8gT3RoZXJ3aXNlIHJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IG92ZXJ3cml0dGVuO1xuICAgICAgICB9IC8vIFNhdmUgYmFjayBhcyBmcmVlXG5cblxuICAgICAgICBpZiAoc1tjYWxsYmFja05hbWVdKSB7XG4gICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgcmUtdXNpbmcgdGhlIG9wdGlvbnMgZG9lc24ndCBzY3JldyB0aGluZ3MgYXJvdW5kXG4gICAgICAgICAgcy5qc29ucENhbGxiYWNrID0gb3JpZ2luYWxTZXR0aW5ncy5qc29ucENhbGxiYWNrOyAvLyBTYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG5cbiAgICAgICAgICBvbGRDYWxsYmFja3MucHVzaChjYWxsYmFja05hbWUpO1xuICAgICAgICB9IC8vIENhbGwgaWYgaXQgd2FzIGEgZnVuY3Rpb24gYW5kIHdlIGhhdmUgYSByZXNwb25zZVxuXG5cbiAgICAgICAgaWYgKHJlc3BvbnNlQ29udGFpbmVyICYmIGlzRnVuY3Rpb24ob3ZlcndyaXR0ZW4pKSB7XG4gICAgICAgICAgb3ZlcndyaXR0ZW4ocmVzcG9uc2VDb250YWluZXJbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzcG9uc2VDb250YWluZXIgPSBvdmVyd3JpdHRlbiA9IHVuZGVmaW5lZDtcbiAgICAgIH0pOyAvLyBEZWxlZ2F0ZSB0byBzY3JpcHRcblxuICAgICAgcmV0dXJuIFwic2NyaXB0XCI7XG4gICAgfVxuICB9KTsgLy8gU3VwcG9ydDogU2FmYXJpIDggb25seVxuICAvLyBJbiBTYWZhcmkgOCBkb2N1bWVudHMgY3JlYXRlZCB2aWEgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50XG4gIC8vIGNvbGxhcHNlIHNpYmxpbmcgZm9ybXM6IHRoZSBzZWNvbmQgb25lIGJlY29tZXMgYSBjaGlsZCBvZiB0aGUgZmlyc3Qgb25lLlxuICAvLyBCZWNhdXNlIG9mIHRoYXQsIHRoaXMgc2VjdXJpdHkgbWVhc3VyZSBoYXMgdG8gYmUgZGlzYWJsZWQgaW4gU2FmYXJpIDguXG4gIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzczMzdcblxuICBzdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O1xuICAgIGJvZHkuaW5uZXJIVE1MID0gXCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiO1xuICAgIHJldHVybiBib2R5LmNoaWxkTm9kZXMubGVuZ3RoID09PSAyO1xuICB9KCk7IC8vIEFyZ3VtZW50IFwiZGF0YVwiIHNob3VsZCBiZSBzdHJpbmcgb2YgaHRtbFxuICAvLyBjb250ZXh0IChvcHRpb25hbCk6IElmIHNwZWNpZmllZCwgdGhlIGZyYWdtZW50IHdpbGwgYmUgY3JlYXRlZCBpbiB0aGlzIGNvbnRleHQsXG4gIC8vIGRlZmF1bHRzIHRvIGRvY3VtZW50XG4gIC8vIGtlZXBTY3JpcHRzIChvcHRpb25hbCk6IElmIHRydWUsIHdpbGwgaW5jbHVkZSBzY3JpcHRzIHBhc3NlZCBpbiB0aGUgaHRtbCBzdHJpbmdcblxuXG4gIGpRdWVyeS5wYXJzZUhUTUwgPSBmdW5jdGlvbiAoZGF0YSwgY29udGV4dCwga2VlcFNjcmlwdHMpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBrZWVwU2NyaXB0cyA9IGNvbnRleHQ7XG4gICAgICBjb250ZXh0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGJhc2UsIHBhcnNlZCwgc2NyaXB0cztcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgLy8gU3RvcCBzY3JpcHRzIG9yIGlubGluZSBldmVudCBoYW5kbGVycyBmcm9tIGJlaW5nIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG4gICAgICAvLyBieSB1c2luZyBkb2N1bWVudC5pbXBsZW1lbnRhdGlvblxuICAgICAgaWYgKHN1cHBvcnQuY3JlYXRlSFRNTERvY3VtZW50KSB7XG4gICAgICAgIGNvbnRleHQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik7IC8vIFNldCB0aGUgYmFzZSBocmVmIGZvciB0aGUgY3JlYXRlZCBkb2N1bWVudFxuICAgICAgICAvLyBzbyBhbnkgcGFyc2VkIGVsZW1lbnRzIHdpdGggVVJMc1xuICAgICAgICAvLyBhcmUgYmFzZWQgb24gdGhlIGRvY3VtZW50J3MgVVJMIChnaC0yOTY1KVxuXG4gICAgICAgIGJhc2UgPSBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpO1xuICAgICAgICBiYXNlLmhyZWYgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBjb250ZXh0LmhlYWQuYXBwZW5kQ2hpbGQoYmFzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VkID0gcnNpbmdsZVRhZy5leGVjKGRhdGEpO1xuICAgIHNjcmlwdHMgPSAha2VlcFNjcmlwdHMgJiYgW107IC8vIFNpbmdsZSB0YWdcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHJldHVybiBbY29udGV4dC5jcmVhdGVFbGVtZW50KHBhcnNlZFsxXSldO1xuICAgIH1cblxuICAgIHBhcnNlZCA9IGJ1aWxkRnJhZ21lbnQoW2RhdGFdLCBjb250ZXh0LCBzY3JpcHRzKTtcblxuICAgIGlmIChzY3JpcHRzICYmIHNjcmlwdHMubGVuZ3RoKSB7XG4gICAgICBqUXVlcnkoc2NyaXB0cykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpRdWVyeS5tZXJnZShbXSwgcGFyc2VkLmNoaWxkTm9kZXMpO1xuICB9O1xuICAvKipcbiAgICogTG9hZCBhIHVybCBpbnRvIGEgcGFnZVxuICAgKi9cblxuXG4gIGpRdWVyeS5mbi5sb2FkID0gZnVuY3Rpb24gKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxlY3RvcixcbiAgICAgICAgdHlwZSxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBvZmYgPSB1cmwuaW5kZXhPZihcIiBcIik7XG5cbiAgICBpZiAob2ZmID4gLTEpIHtcbiAgICAgIHNlbGVjdG9yID0gc3RyaXBBbmRDb2xsYXBzZSh1cmwuc2xpY2Uob2ZmKSk7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgb2ZmKTtcbiAgICB9IC8vIElmIGl0J3MgYSBmdW5jdGlvblxuXG5cbiAgICBpZiAoaXNGdW5jdGlvbihwYXJhbXMpKSB7XG4gICAgICAvLyBXZSBhc3N1bWUgdGhhdCBpdCdzIHRoZSBjYWxsYmFja1xuICAgICAgY2FsbGJhY2sgPSBwYXJhbXM7XG4gICAgICBwYXJhbXMgPSB1bmRlZmluZWQ7IC8vIE90aGVyd2lzZSwgYnVpbGQgYSBwYXJhbSBzdHJpbmdcbiAgICB9IGVsc2UgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0eXBlID0gXCJQT1NUXCI7XG4gICAgfSAvLyBJZiB3ZSBoYXZlIGVsZW1lbnRzIHRvIG1vZGlmeSwgbWFrZSB0aGUgcmVxdWVzdFxuXG5cbiAgICBpZiAoc2VsZi5sZW5ndGggPiAwKSB7XG4gICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICAvLyBJZiBcInR5cGVcIiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHRoZW4gXCJHRVRcIiBtZXRob2Qgd2lsbCBiZSB1c2VkLlxuICAgICAgICAvLyBNYWtlIHZhbHVlIG9mIHRoaXMgZmllbGQgZXhwbGljaXQgc2luY2VcbiAgICAgICAgLy8gdXNlciBjYW4gb3ZlcnJpZGUgaXQgdGhyb3VnaCBhamF4U2V0dXAgbWV0aG9kXG4gICAgICAgIHR5cGU6IHR5cGUgfHwgXCJHRVRcIixcbiAgICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxuICAgICAgICBkYXRhOiBwYXJhbXNcbiAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlVGV4dCkge1xuICAgICAgICAvLyBTYXZlIHJlc3BvbnNlIGZvciB1c2UgaW4gY29tcGxldGUgY2FsbGJhY2tcbiAgICAgICAgcmVzcG9uc2UgPSBhcmd1bWVudHM7XG4gICAgICAgIHNlbGYuaHRtbChzZWxlY3RvciA/IC8vIElmIGEgc2VsZWN0b3Igd2FzIHNwZWNpZmllZCwgbG9jYXRlIHRoZSByaWdodCBlbGVtZW50cyBpbiBhIGR1bW15IGRpdlxuICAgICAgICAvLyBFeGNsdWRlIHNjcmlwdHMgdG8gYXZvaWQgSUUgJ1Blcm1pc3Npb24gRGVuaWVkJyBlcnJvcnNcbiAgICAgICAgalF1ZXJ5KFwiPGRpdj5cIikuYXBwZW5kKGpRdWVyeS5wYXJzZUhUTUwocmVzcG9uc2VUZXh0KSkuZmluZChzZWxlY3RvcikgOiAvLyBPdGhlcndpc2UgdXNlIHRoZSBmdWxsIHJlc3VsdFxuICAgICAgICByZXNwb25zZVRleHQpOyAvLyBJZiB0aGUgcmVxdWVzdCBzdWNjZWVkcywgdGhpcyBmdW5jdGlvbiBnZXRzIFwiZGF0YVwiLCBcInN0YXR1c1wiLCBcImpxWEhSXCJcbiAgICAgICAgLy8gYnV0IHRoZXkgYXJlIGlnbm9yZWQgYmVjYXVzZSByZXNwb25zZSB3YXMgc2V0IGFib3ZlLlxuICAgICAgICAvLyBJZiBpdCBmYWlscywgdGhpcyBmdW5jdGlvbiBnZXRzIFwianFYSFJcIiwgXCJzdGF0dXNcIiwgXCJlcnJvclwiXG4gICAgICB9KS5hbHdheXMoY2FsbGJhY2sgJiYgZnVuY3Rpb24gKGpxWEhSLCBzdGF0dXMpIHtcbiAgICAgICAgc2VsZi5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCByZXNwb25zZSB8fCBbanFYSFIucmVzcG9uc2VUZXh0LCBzdGF0dXMsIGpxWEhSXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07IC8vIEF0dGFjaCBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgY29tbW9uIEFKQVggZXZlbnRzXG5cblxuICBqUXVlcnkuZWFjaChbXCJhamF4U3RhcnRcIiwgXCJhamF4U3RvcFwiLCBcImFqYXhDb21wbGV0ZVwiLCBcImFqYXhFcnJvclwiLCBcImFqYXhTdWNjZXNzXCIsIFwiYWpheFNlbmRcIl0sIGZ1bmN0aW9uIChpLCB0eXBlKSB7XG4gICAgalF1ZXJ5LmZuW3R5cGVdID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbih0eXBlLCBmbik7XG4gICAgfTtcbiAgfSk7XG5cbiAgalF1ZXJ5LmV4cHIucHNldWRvcy5hbmltYXRlZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgcmV0dXJuIGpRdWVyeS5ncmVwKGpRdWVyeS50aW1lcnMsIGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGVsZW0gPT09IGZuLmVsZW07XG4gICAgfSkubGVuZ3RoO1xuICB9O1xuXG4gIGpRdWVyeS5vZmZzZXQgPSB7XG4gICAgc2V0T2Zmc2V0OiBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucywgaSkge1xuICAgICAgdmFyIGN1clBvc2l0aW9uLFxuICAgICAgICAgIGN1ckxlZnQsXG4gICAgICAgICAgY3VyQ1NTVG9wLFxuICAgICAgICAgIGN1clRvcCxcbiAgICAgICAgICBjdXJPZmZzZXQsXG4gICAgICAgICAgY3VyQ1NTTGVmdCxcbiAgICAgICAgICBjYWxjdWxhdGVQb3NpdGlvbixcbiAgICAgICAgICBwb3NpdGlvbiA9IGpRdWVyeS5jc3MoZWxlbSwgXCJwb3NpdGlvblwiKSxcbiAgICAgICAgICBjdXJFbGVtID0galF1ZXJ5KGVsZW0pLFxuICAgICAgICAgIHByb3BzID0ge307IC8vIFNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cblxuICAgICAgaWYgKHBvc2l0aW9uID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICB9XG5cbiAgICAgIGN1ck9mZnNldCA9IGN1ckVsZW0ub2Zmc2V0KCk7XG4gICAgICBjdXJDU1NUb3AgPSBqUXVlcnkuY3NzKGVsZW0sIFwidG9wXCIpO1xuICAgICAgY3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoZWxlbSwgXCJsZWZ0XCIpO1xuICAgICAgY2FsY3VsYXRlUG9zaXRpb24gPSAocG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiB8fCBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiKSAmJiAoY3VyQ1NTVG9wICsgY3VyQ1NTTGVmdCkuaW5kZXhPZihcImF1dG9cIikgPiAtMTsgLy8gTmVlZCB0byBiZSBhYmxlIHRvIGNhbGN1bGF0ZSBwb3NpdGlvbiBpZiBlaXRoZXJcbiAgICAgIC8vIHRvcCBvciBsZWZ0IGlzIGF1dG8gYW5kIHBvc2l0aW9uIGlzIGVpdGhlciBhYnNvbHV0ZSBvciBmaXhlZFxuXG4gICAgICBpZiAoY2FsY3VsYXRlUG9zaXRpb24pIHtcbiAgICAgICAgY3VyUG9zaXRpb24gPSBjdXJFbGVtLnBvc2l0aW9uKCk7XG4gICAgICAgIGN1clRvcCA9IGN1clBvc2l0aW9uLnRvcDtcbiAgICAgICAgY3VyTGVmdCA9IGN1clBvc2l0aW9uLmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJUb3AgPSBwYXJzZUZsb2F0KGN1ckNTU1RvcCkgfHwgMDtcbiAgICAgICAgY3VyTGVmdCA9IHBhcnNlRmxvYXQoY3VyQ1NTTGVmdCkgfHwgMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgLy8gVXNlIGpRdWVyeS5leHRlbmQgaGVyZSB0byBhbGxvdyBtb2RpZmljYXRpb24gb2YgY29vcmRpbmF0ZXMgYXJndW1lbnQgKGdoLTE4NDgpXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zLmNhbGwoZWxlbSwgaSwgalF1ZXJ5LmV4dGVuZCh7fSwgY3VyT2Zmc2V0KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnRvcCAhPSBudWxsKSB7XG4gICAgICAgIHByb3BzLnRvcCA9IG9wdGlvbnMudG9wIC0gY3VyT2Zmc2V0LnRvcCArIGN1clRvcDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubGVmdCAhPSBudWxsKSB7XG4gICAgICAgIHByb3BzLmxlZnQgPSBvcHRpb25zLmxlZnQgLSBjdXJPZmZzZXQubGVmdCArIGN1ckxlZnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChcInVzaW5nXCIgaW4gb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLnVzaW5nLmNhbGwoZWxlbSwgcHJvcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyRWxlbS5jc3MocHJvcHMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgLy8gb2Zmc2V0KCkgcmVsYXRlcyBhbiBlbGVtZW50J3MgYm9yZGVyIGJveCB0byB0aGUgZG9jdW1lbnQgb3JpZ2luXG4gICAgb2Zmc2V0OiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgLy8gUHJlc2VydmUgY2hhaW5pbmcgZm9yIHNldHRlclxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICBqUXVlcnkub2Zmc2V0LnNldE9mZnNldCh0aGlzLCBvcHRpb25zLCBpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWN0LFxuICAgICAgICAgIHdpbixcbiAgICAgICAgICBlbGVtID0gdGhpc1swXTtcblxuICAgICAgaWYgKCFlbGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiAoZGlzcGxheTogbm9uZSkgZWxlbWVudHMgKGdoLTIzMTApXG4gICAgICAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbiAgICAgIC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGFcbiAgICAgIC8vIGRpc2Nvbm5lY3RlZCBub2RlIGluIElFIHRocm93cyBhbiBlcnJvclxuXG5cbiAgICAgIGlmICghZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgIH07XG4gICAgICB9IC8vIEdldCBkb2N1bWVudC1yZWxhdGl2ZSBwb3NpdGlvbiBieSBhZGRpbmcgdmlld3BvcnQgc2Nyb2xsIHRvIHZpZXdwb3J0LXJlbGF0aXZlIGdCQ1JcblxuXG4gICAgICByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHdpbiA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldFxuICAgICAgfTtcbiAgICB9LFxuICAgIC8vIHBvc2l0aW9uKCkgcmVsYXRlcyBhbiBlbGVtZW50J3MgbWFyZ2luIGJveCB0byBpdHMgb2Zmc2V0IHBhcmVudCdzIHBhZGRpbmcgYm94XG4gICAgLy8gVGhpcyBjb3JyZXNwb25kcyB0byB0aGUgYmVoYXZpb3Igb2YgQ1NTIGFic29sdXRlIHBvc2l0aW9uaW5nXG4gICAgcG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpc1swXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvZmZzZXRQYXJlbnQsXG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIGRvYyxcbiAgICAgICAgICBlbGVtID0gdGhpc1swXSxcbiAgICAgICAgICBwYXJlbnRPZmZzZXQgPSB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfTsgLy8gcG9zaXRpb246Zml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHRoZSB2aWV3cG9ydCwgd2hpY2ggaXRzZWxmIGFsd2F5cyBoYXMgemVybyBvZmZzZXRcblxuICAgICAgaWYgKGpRdWVyeS5jc3MoZWxlbSwgXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgIC8vIEFzc3VtZSBwb3NpdGlvbjpmaXhlZCBpbXBsaWVzIGF2YWlsYWJpbGl0eSBvZiBnZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAgICAgICAgb2Zmc2V0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZnNldCA9IHRoaXMub2Zmc2V0KCk7IC8vIEFjY291bnQgZm9yIHRoZSAqcmVhbCogb2Zmc2V0IHBhcmVudCwgd2hpY2ggY2FuIGJlIHRoZSBkb2N1bWVudCBvciBpdHMgcm9vdCBlbGVtZW50XG4gICAgICAgIC8vIHdoZW4gYSBzdGF0aWNhbGx5IHBvc2l0aW9uZWQgZWxlbWVudCBpcyBpZGVudGlmaWVkXG5cbiAgICAgICAgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgICAgICBvZmZzZXRQYXJlbnQgPSBlbGVtLm9mZnNldFBhcmVudCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgKG9mZnNldFBhcmVudCA9PT0gZG9jLmJvZHkgfHwgb2Zmc2V0UGFyZW50ID09PSBkb2MuZG9jdW1lbnRFbGVtZW50KSAmJiBqUXVlcnkuY3NzKG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiKSA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQgIT09IGVsZW0gJiYgb2Zmc2V0UGFyZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgLy8gSW5jb3Jwb3JhdGUgYm9yZGVycyBpbnRvIGl0cyBvZmZzZXQsIHNpbmNlIHRoZXkgYXJlIG91dHNpZGUgaXRzIGNvbnRlbnQgb3JpZ2luXG4gICAgICAgICAgcGFyZW50T2Zmc2V0ID0galF1ZXJ5KG9mZnNldFBhcmVudCkub2Zmc2V0KCk7XG4gICAgICAgICAgcGFyZW50T2Zmc2V0LnRvcCArPSBqUXVlcnkuY3NzKG9mZnNldFBhcmVudCwgXCJib3JkZXJUb3BXaWR0aFwiLCB0cnVlKTtcbiAgICAgICAgICBwYXJlbnRPZmZzZXQubGVmdCArPSBqUXVlcnkuY3NzKG9mZnNldFBhcmVudCwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gU3VidHJhY3QgcGFyZW50IG9mZnNldHMgYW5kIGVsZW1lbnQgbWFyZ2luc1xuXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBqUXVlcnkuY3NzKGVsZW0sIFwibWFyZ2luVG9wXCIsIHRydWUpLFxuICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0IC0galF1ZXJ5LmNzcyhlbGVtLCBcIm1hcmdpbkxlZnRcIiwgdHJ1ZSlcbiAgICAgIH07XG4gICAgfSxcbiAgICAvLyBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBkb2N1bWVudEVsZW1lbnQgaW4gdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgICAvLyAxKSBGb3IgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWUgd2l0aG91dCBvZmZzZXRQYXJlbnQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuXG4gICAgLy8gICAgZG9jdW1lbnRFbGVtZW50IG9mIHRoZSBwYXJlbnQgd2luZG93XG4gICAgLy8gMikgRm9yIHRoZSBoaWRkZW4gb3IgZGV0YWNoZWQgZWxlbWVudFxuICAgIC8vIDMpIEZvciBib2R5IG9yIGh0bWwgZWxlbWVudCwgaS5lLiBpbiBjYXNlIG9mIHRoZSBodG1sIG5vZGUgLSBpdCB3aWxsIHJldHVybiBpdHNlbGZcbiAgICAvL1xuICAgIC8vIGJ1dCB0aG9zZSBleGNlcHRpb25zIHdlcmUgbmV2ZXIgcHJlc2VudGVkIGFzIGEgcmVhbCBsaWZlIHVzZS1jYXNlc1xuICAgIC8vIGFuZCBtaWdodCBiZSBjb25zaWRlcmVkIGFzIG1vcmUgcHJlZmVyYWJsZSByZXN1bHRzLlxuICAgIC8vXG4gICAgLy8gVGhpcyBsb2dpYywgaG93ZXZlciwgaXMgbm90IGd1YXJhbnRlZWQgYW5kIGNhbiBjaGFuZ2UgYXQgYW55IHBvaW50IGluIHRoZSBmdXR1cmVcbiAgICBvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudDtcblxuICAgICAgICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGpRdWVyeS5jc3Mob2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIpID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfSk7XG4gICAgfVxuICB9KTsgLy8gQ3JlYXRlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcCBtZXRob2RzXG5cbiAgalF1ZXJ5LmVhY2goe1xuICAgIHNjcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIixcbiAgICBzY3JvbGxUb3A6IFwicGFnZVlPZmZzZXRcIlxuICB9LCBmdW5jdGlvbiAobWV0aG9kLCBwcm9wKSB7XG4gICAgdmFyIHRvcCA9IFwicGFnZVlPZmZzZXRcIiA9PT0gcHJvcDtcblxuICAgIGpRdWVyeS5mblttZXRob2RdID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAoZWxlbSwgbWV0aG9kLCB2YWwpIHtcbiAgICAgICAgLy8gQ29hbGVzY2UgZG9jdW1lbnRzIGFuZCB3aW5kb3dzXG4gICAgICAgIHZhciB3aW47XG5cbiAgICAgICAgaWYgKGlzV2luZG93KGVsZW0pKSB7XG4gICAgICAgICAgd2luID0gZWxlbTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgICAgd2luID0gZWxlbS5kZWZhdWx0VmlldztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB3aW4gPyB3aW5bcHJvcF0gOiBlbGVtW21ldGhvZF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luKSB7XG4gICAgICAgICAgd2luLnNjcm9sbFRvKCF0b3AgPyB2YWwgOiB3aW4ucGFnZVhPZmZzZXQsIHRvcCA/IHZhbCA6IHdpbi5wYWdlWU9mZnNldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbVttZXRob2RdID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9LCBtZXRob2QsIHZhbCwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgfTtcbiAgfSk7IC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTcgLSA5LjEsIENocm9tZSA8PTM3IC0gNDlcbiAgLy8gQWRkIHRoZSB0b3AvbGVmdCBjc3NIb29rcyB1c2luZyBqUXVlcnkuZm4ucG9zaXRpb25cbiAgLy8gV2Via2l0IGJ1ZzogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MDg0XG4gIC8vIEJsaW5rIGJ1ZzogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTg5MzQ3XG4gIC8vIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBwZXJjZW50IHdoZW4gc3BlY2lmaWVkIGZvciB0b3AvbGVmdC9ib3R0b20vcmlnaHQ7XG4gIC8vIHJhdGhlciB0aGFuIG1ha2UgdGhlIGNzcyBtb2R1bGUgZGVwZW5kIG9uIHRoZSBvZmZzZXQgbW9kdWxlLCBqdXN0IGNoZWNrIGZvciBpdCBoZXJlXG5cbiAgalF1ZXJ5LmVhY2goW1widG9wXCIsIFwibGVmdFwiXSwgZnVuY3Rpb24gKGksIHByb3ApIHtcbiAgICBqUXVlcnkuY3NzSG9va3NbcHJvcF0gPSBhZGRHZXRIb29rSWYoc3VwcG9ydC5waXhlbFBvc2l0aW9uLCBmdW5jdGlvbiAoZWxlbSwgY29tcHV0ZWQpIHtcbiAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICBjb21wdXRlZCA9IGN1ckNTUyhlbGVtLCBwcm9wKTsgLy8gSWYgY3VyQ1NTIHJldHVybnMgcGVyY2VudGFnZSwgZmFsbGJhY2sgdG8gb2Zmc2V0XG5cbiAgICAgICAgcmV0dXJuIHJudW1ub25weC50ZXN0KGNvbXB1dGVkKSA/IGpRdWVyeShlbGVtKS5wb3NpdGlvbigpW3Byb3BdICsgXCJweFwiIDogY29tcHV0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pOyAvLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcblxuICBqUXVlcnkuZWFjaCh7XG4gICAgSGVpZ2h0OiBcImhlaWdodFwiLFxuICAgIFdpZHRoOiBcIndpZHRoXCJcbiAgfSwgZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcbiAgICBqUXVlcnkuZWFjaCh7XG4gICAgICBwYWRkaW5nOiBcImlubmVyXCIgKyBuYW1lLFxuICAgICAgY29udGVudDogdHlwZSxcbiAgICAgIFwiXCI6IFwib3V0ZXJcIiArIG5hbWVcbiAgICB9LCBmdW5jdGlvbiAoZGVmYXVsdEV4dHJhLCBmdW5jTmFtZSkge1xuICAgICAgLy8gTWFyZ2luIGlzIG9ubHkgZm9yIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoXG4gICAgICBqUXVlcnkuZm5bZnVuY05hbWVdID0gZnVuY3Rpb24gKG1hcmdpbiwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGNoYWluYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggJiYgKGRlZmF1bHRFeHRyYSB8fCB0eXBlb2YgbWFyZ2luICE9PSBcImJvb2xlYW5cIiksXG4gICAgICAgICAgICBleHRyYSA9IGRlZmF1bHRFeHRyYSB8fCAobWFyZ2luID09PSB0cnVlIHx8IHZhbHVlID09PSB0cnVlID8gXCJtYXJnaW5cIiA6IFwiYm9yZGVyXCIpO1xuICAgICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uIChlbGVtLCB0eXBlLCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBkb2M7XG5cbiAgICAgICAgICBpZiAoaXNXaW5kb3coZWxlbSkpIHtcbiAgICAgICAgICAgIC8vICQoIHdpbmRvdyApLm91dGVyV2lkdGgvSGVpZ2h0IHJldHVybiB3L2ggaW5jbHVkaW5nIHNjcm9sbGJhcnMgKGdoLTE3MjkpXG4gICAgICAgICAgICByZXR1cm4gZnVuY05hbWUuaW5kZXhPZihcIm91dGVyXCIpID09PSAwID8gZWxlbVtcImlubmVyXCIgKyBuYW1lXSA6IGVsZW0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIgKyBuYW1lXTtcbiAgICAgICAgICB9IC8vIEdldCBkb2N1bWVudCB3aWR0aCBvciBoZWlnaHRcblxuXG4gICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICAgIGRvYyA9IGVsZW0uZG9jdW1lbnRFbGVtZW50OyAvLyBFaXRoZXIgc2Nyb2xsW1dpZHRoL0hlaWdodF0gb3Igb2Zmc2V0W1dpZHRoL0hlaWdodF0gb3IgY2xpZW50W1dpZHRoL0hlaWdodF0sXG4gICAgICAgICAgICAvLyB3aGljaGV2ZXIgaXMgZ3JlYXRlc3RcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGVsZW0uYm9keVtcInNjcm9sbFwiICsgbmFtZV0sIGRvY1tcInNjcm9sbFwiICsgbmFtZV0sIGVsZW0uYm9keVtcIm9mZnNldFwiICsgbmFtZV0sIGRvY1tcIm9mZnNldFwiICsgbmFtZV0sIGRvY1tcImNsaWVudFwiICsgbmFtZV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gLy8gR2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudCwgcmVxdWVzdGluZyBidXQgbm90IGZvcmNpbmcgcGFyc2VGbG9hdFxuICAgICAgICAgIGpRdWVyeS5jc3MoZWxlbSwgdHlwZSwgZXh0cmEpIDogLy8gU2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudFxuICAgICAgICAgIGpRdWVyeS5zdHlsZShlbGVtLCB0eXBlLCB2YWx1ZSwgZXh0cmEpO1xuICAgICAgICB9LCB0eXBlLCBjaGFpbmFibGUgPyBtYXJnaW4gOiB1bmRlZmluZWQsIGNoYWluYWJsZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcbiAgalF1ZXJ5LmVhY2goKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgXCIgKyBcIm1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIFwiICsgXCJjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIpLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24gKGksIG5hbWUpIHtcbiAgICAvLyBIYW5kbGUgZXZlbnQgYmluZGluZ1xuICAgIGpRdWVyeS5mbltuYW1lXSA9IGZ1bmN0aW9uIChkYXRhLCBmbikge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gdGhpcy5vbihuYW1lLCBudWxsLCBkYXRhLCBmbikgOiB0aGlzLnRyaWdnZXIobmFtZSk7XG4gICAgfTtcbiAgfSk7XG4gIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgIGhvdmVyOiBmdW5jdGlvbiAoZm5PdmVyLCBmbk91dCkge1xuICAgICAgcmV0dXJuIHRoaXMubW91c2VlbnRlcihmbk92ZXIpLm1vdXNlbGVhdmUoZm5PdXQgfHwgZm5PdmVyKTtcbiAgICB9XG4gIH0pO1xuICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICBiaW5kOiBmdW5jdGlvbiAodHlwZXMsIGRhdGEsIGZuKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbih0eXBlcywgbnVsbCwgZGF0YSwgZm4pO1xuICAgIH0sXG4gICAgdW5iaW5kOiBmdW5jdGlvbiAodHlwZXMsIGZuKSB7XG4gICAgICByZXR1cm4gdGhpcy5vZmYodHlwZXMsIG51bGwsIGZuKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlOiBmdW5jdGlvbiAoc2VsZWN0b3IsIHR5cGVzLCBkYXRhLCBmbikge1xuICAgICAgcmV0dXJuIHRoaXMub24odHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbik7XG4gICAgfSxcbiAgICB1bmRlbGVnYXRlOiBmdW5jdGlvbiAoc2VsZWN0b3IsIHR5cGVzLCBmbikge1xuICAgICAgLy8gKCBuYW1lc3BhY2UgKSBvciAoIHNlbGVjdG9yLCB0eXBlcyBbLCBmbl0gKVxuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyB0aGlzLm9mZihzZWxlY3RvciwgXCIqKlwiKSA6IHRoaXMub2ZmKHR5cGVzLCBzZWxlY3RvciB8fCBcIioqXCIsIGZuKTtcbiAgICB9XG4gIH0pOyAvLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0LCBvcHRpb25hbGx5IHBhcnRpYWxseSBhcHBseWluZyBhbnlcbiAgLy8gYXJndW1lbnRzLlxuICAvLyBqUXVlcnkucHJveHkgaXMgZGVwcmVjYXRlZCB0byBwcm9tb3RlIHN0YW5kYXJkcyAoc3BlY2lmaWNhbGx5IEZ1bmN0aW9uI2JpbmQpXG4gIC8vIEhvd2V2ZXIsIGl0IGlzIG5vdCBzbGF0ZWQgZm9yIHJlbW92YWwgYW55IHRpbWUgc29vblxuXG4gIGpRdWVyeS5wcm94eSA9IGZ1bmN0aW9uIChmbiwgY29udGV4dCkge1xuICAgIHZhciB0bXAsIGFyZ3MsIHByb3h5O1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0bXAgPSBmbltjb250ZXh0XTtcbiAgICAgIGNvbnRleHQgPSBmbjtcbiAgICAgIGZuID0gdG1wO1xuICAgIH0gLy8gUXVpY2sgY2hlY2sgdG8gZGV0ZXJtaW5lIGlmIHRhcmdldCBpcyBjYWxsYWJsZSwgaW4gdGhlIHNwZWNcbiAgICAvLyB0aGlzIHRocm93cyBhIFR5cGVFcnJvciwgYnV0IHdlIHdpbGwganVzdCByZXR1cm4gdW5kZWZpbmVkLlxuXG5cbiAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gLy8gU2ltdWxhdGVkIGJpbmRcblxuXG4gICAgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcblxuICAgIHByb3h5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQgfHwgdGhpcywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTsgLy8gU2V0IHRoZSBndWlkIG9mIHVuaXF1ZSBoYW5kbGVyIHRvIHRoZSBzYW1lIG9mIG9yaWdpbmFsIGhhbmRsZXIsIHNvIGl0IGNhbiBiZSByZW1vdmVkXG5cblxuICAgIHByb3h5Lmd1aWQgPSBmbi5ndWlkID0gZm4uZ3VpZCB8fCBqUXVlcnkuZ3VpZCsrO1xuICAgIHJldHVybiBwcm94eTtcbiAgfTtcblxuICBqUXVlcnkuaG9sZFJlYWR5ID0gZnVuY3Rpb24gKGhvbGQpIHtcbiAgICBpZiAoaG9sZCkge1xuICAgICAgalF1ZXJ5LnJlYWR5V2FpdCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkucmVhZHkodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGpRdWVyeS5pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgalF1ZXJ5LnBhcnNlSlNPTiA9IEpTT04ucGFyc2U7XG4gIGpRdWVyeS5ub2RlTmFtZSA9IG5vZGVOYW1lO1xuICBqUXVlcnkuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG4gIGpRdWVyeS5pc1dpbmRvdyA9IGlzV2luZG93O1xuICBqUXVlcnkuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xuICBqUXVlcnkudHlwZSA9IHRvVHlwZTtcbiAgalF1ZXJ5Lm5vdyA9IERhdGUubm93O1xuXG4gIGpRdWVyeS5pc051bWVyaWMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgLy8gQXMgb2YgalF1ZXJ5IDMuMCwgaXNOdW1lcmljIGlzIGxpbWl0ZWQgdG9cbiAgICAvLyBzdHJpbmdzIGFuZCBudW1iZXJzIChwcmltaXRpdmVzIG9yIG9iamVjdHMpXG4gICAgLy8gdGhhdCBjYW4gYmUgY29lcmNlZCB0byBmaW5pdGUgbnVtYmVycyAoZ2gtMjY2MilcbiAgICB2YXIgdHlwZSA9IGpRdWVyeS50eXBlKG9iaik7XG4gICAgcmV0dXJuICh0eXBlID09PSBcIm51bWJlclwiIHx8IHR5cGUgPT09IFwic3RyaW5nXCIpICYmIC8vIHBhcnNlRmxvYXQgTmFOcyBudW1lcmljLWNhc3QgZmFsc2UgcG9zaXRpdmVzIChcIlwiKVxuICAgIC8vIC4uLmJ1dCBtaXNpbnRlcnByZXRzIGxlYWRpbmctbnVtYmVyIHN0cmluZ3MsIHBhcnRpY3VsYXJseSBoZXggbGl0ZXJhbHMgKFwiMHguLi5cIilcbiAgICAvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cbiAgICAhaXNOYU4ob2JqIC0gcGFyc2VGbG9hdChvYmopKTtcbiAgfTsgLy8gUmVnaXN0ZXIgYXMgYSBuYW1lZCBBTUQgbW9kdWxlLCBzaW5jZSBqUXVlcnkgY2FuIGJlIGNvbmNhdGVuYXRlZCB3aXRoIG90aGVyXG4gIC8vIGZpbGVzIHRoYXQgbWF5IHVzZSBkZWZpbmUsIGJ1dCBub3QgdmlhIGEgcHJvcGVyIGNvbmNhdGVuYXRpb24gc2NyaXB0IHRoYXRcbiAgLy8gdW5kZXJzdGFuZHMgYW5vbnltb3VzIEFNRCBtb2R1bGVzLiBBIG5hbWVkIEFNRCBpcyBzYWZlc3QgYW5kIG1vc3Qgcm9idXN0XG4gIC8vIHdheSB0byByZWdpc3Rlci4gTG93ZXJjYXNlIGpxdWVyeSBpcyB1c2VkIGJlY2F1c2UgQU1EIG1vZHVsZSBuYW1lcyBhcmVcbiAgLy8gZGVyaXZlZCBmcm9tIGZpbGUgbmFtZXMsIGFuZCBqUXVlcnkgaXMgbm9ybWFsbHkgZGVsaXZlcmVkIGluIGEgbG93ZXJjYXNlXG4gIC8vIGZpbGUgbmFtZS4gRG8gdGhpcyBhZnRlciBjcmVhdGluZyB0aGUgZ2xvYmFsIHNvIHRoYXQgaWYgYW4gQU1EIG1vZHVsZSB3YW50c1xuICAvLyB0byBjYWxsIG5vQ29uZmxpY3QgdG8gaGlkZSB0aGlzIHZlcnNpb24gb2YgalF1ZXJ5LCBpdCB3aWxsIHdvcmsuXG4gIC8vIE5vdGUgdGhhdCBmb3IgbWF4aW11bSBwb3J0YWJpbGl0eSwgbGlicmFyaWVzIHRoYXQgYXJlIG5vdCBqUXVlcnkgc2hvdWxkXG4gIC8vIGRlY2xhcmUgdGhlbXNlbHZlcyBhcyBhbm9ueW1vdXMgbW9kdWxlcywgYW5kIGF2b2lkIHNldHRpbmcgYSBnbG9iYWwgaWYgYW5cbiAgLy8gQU1EIGxvYWRlciBpcyBwcmVzZW50LiBqUXVlcnkgaXMgYSBzcGVjaWFsIGNhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pyYnVya2UvcmVxdWlyZWpzL3dpa2kvVXBkYXRpbmctZXhpc3RpbmctbGlicmFyaWVzI3dpa2ktYW5vblxuXG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwianF1ZXJ5XCIsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4galF1ZXJ5O1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIC8vIE1hcCBvdmVyIGpRdWVyeSBpbiBjYXNlIG9mIG92ZXJ3cml0ZVxuICBfalF1ZXJ5ID0gd2luZG93LmpRdWVyeSxcbiAgICAgIC8vIE1hcCBvdmVyIHRoZSAkIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gIF8kID0gd2luZG93LiQ7XG5cbiAgalF1ZXJ5Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoZGVlcCkge1xuICAgIGlmICh3aW5kb3cuJCA9PT0galF1ZXJ5KSB7XG4gICAgICB3aW5kb3cuJCA9IF8kO1xuICAgIH1cblxuICAgIGlmIChkZWVwICYmIHdpbmRvdy5qUXVlcnkgPT09IGpRdWVyeSkge1xuICAgICAgd2luZG93LmpRdWVyeSA9IF9qUXVlcnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpRdWVyeTtcbiAgfTsgLy8gRXhwb3NlIGpRdWVyeSBhbmQgJCBpZGVudGlmaWVycywgZXZlbiBpbiBBTURcbiAgLy8gKCM3MTAyI2NvbW1lbnQ6MTAsIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L3B1bGwvNTU3KVxuICAvLyBhbmQgQ29tbW9uSlMgZm9yIGJyb3dzZXIgZW11bGF0b3JzICgjMTM1NjYpXG5cblxuICBpZiAoIW5vR2xvYmFsKSB7XG4gICAgd2luZG93LmpRdWVyeSA9IHdpbmRvdy4kID0galF1ZXJ5O1xuICB9XG5cbiAgcmV0dXJuIGpRdWVyeTtcbn0pOyIsImNvbnN0IGNvbmRpdGlvbmFsVGl0bGVDb2xvciA9ICh0b3RhbCkgPT4ge1xuICAgIGQzLnNlbGVjdChcIi5jaGFydC10aXRsZVwiKVxuICAgICAgICAuZGF0YShbdG90YWxdKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBkID0+IHtcbiAgICAgICAgICAgIGlmIChkLmF2ZXJhZ2UgPiAwLjEzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7MzIgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7MTk2ICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAkezE2OCAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgMC45NylgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGQuYXZlcmFnZSA8IC0wLjEzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7MTI4ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHs0MCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7NDAgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAwLjk3KWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwyNTUsMjU1LDAuOClgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgZDMuc2VsZWN0KFwiI3NlY29uZC10aXRsZVwiKVxuICAgICAgICAuZGF0YShbdG90YWxdKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBkID0+IHtcbiAgICAgICAgICAgIGlmIChkLmF2ZXJhZ2UgPiAwLjEzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7MzIgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7MTk2ICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAkezE2OCAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgMC45NylgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGQuYXZlcmFnZSA8IC0wLjEzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7MTI4ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHs0MCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7NDAgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAwLjk3KWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwyNTUsMjU1LDAuOClgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG59XG5cbmNvbnN0IGNvbmRpdGlvbmFsRGlzcGxheSA9IChhdHRyX3ZhbHVlLCBjdXRvZmYsIGdyZWF0ZXJUaGFuID0gdHJ1ZSkgPT4ge1xuICAgIHN3aXRjaCAoZ3JlYXRlclRoYW4pIHtcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgaWYgKGF0dHJfdmFsdWUgPiBjdXRvZmYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub25lXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaW5oZXJpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICBpZiAoYXR0cl92YWx1ZSA8IGN1dG9mZikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vbmVcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJpbmhlcml0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcImluaGVyaXRcIlxuICAgIH1cbn1cblxuY29uc3QgY29uZGl0aW9uYWxPcGFjaXR5ID0gKGQsIGdvb2QsIGJhZCkgPT4ge1xuICAgIGlmIChkLnkgPj0gZ29vZCkge1xuICAgICAgICByZXR1cm4gXCIwLjhcIlxuICAgIH0gZWxzZSBpZiAoZC55IDw9IGJhZCkge1xuICAgICAgICByZXR1cm4gXCIwLjZcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIjAuM1wiXG4gICAgfVxufVxuXG5jb25zdCBjb25kaXRpb25hbENvbG9yID0gKGQsIGdvb2QsIGJhZCwgb3BhY2l0eSA9IDEpID0+IHtcbiAgICBpZiAoZC55ID49IGdvb2QpIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKDMyLDE5NiwxNjgsICR7b3BhY2l0eX1gXG4gICAgfSBlbHNlIGlmIChkLnkgPD0gYmFkKSB7XG4gICAgICAgIHJldHVybiBgcmdiYSgyNTUsMCwwLCAke29wYWNpdHl9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgcmdiYSgyNTUsMjU1LDI1NSwgJHtvcGFjaXR5fWBcbiAgICB9XG59XG5cbmNvbnN0IGZpbGxBcnRpY2xlSW5mbyA9IChzaW5nbGVBcnRpY2xlSW5mbywgZCkgPT4ge1xuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLXRpdGxlXCIpXG4gICAgICAgIC50ZXh0KFxuICAgICAgICAgICAgYCR7ZC50aXRsZX1gXG4gICAgICAgICkudHJhbnNpdGlvbigpXG4gICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBcInJnYmEoMjU1LDI1NSwyNTUsIDAuNSlcIik7XG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtYXV0aG9yXCIpXG4gICAgICAgIC50ZXh0KFxuICAgICAgICAgICAgYCR7ZC5zb3VyY2V9YFxuICAgICAgICApLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpXCIpO1xuXG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtZGVzY3JpcHRpb25cIilcbiAgICAgICAgLnRleHQoXG4gICAgICAgICAgICBgJHtkLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBcInJnYmEoMjU1LDI1NSwyNTUsIDAuNSlcIilcblxuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLWltYWdlXCIpXG4gICAgICAgIC5hdHRyKFwic3JjXCIsIGAke2QuaW1hZ2V9YClcbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIucmVhZC1tb3JlXCIpXG4gICAgICAgIC5hdHRyKFwiaHJlZlwiLCBgJHtkLnVybH1gKVxufVxuXG5jb25zdCBoYW5kbGVEb3RVWCA9IChkLCBiaWdEb3QsIHNpbmdsZUFydGljbGVJbmZvLCBzcGVlZCA9IDEsIGludGlhbGl6ZV9kdXJhdGlvbiA9IDApID0+IHtcbiAgICBjb25zdCBkZWxheSA9IDIwMDAgKyBpbnRpYWxpemVfZHVyYXRpb25cbiAgICBpZiAoc3BlZWQgPj0gMSkge1xuICAgICAgICBiaWdEb3RcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheShkZWxheSlcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFbGFzdGljKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MDApXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgOClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgaWYgKHNwZWVkID49IDEpIHtcbiAgICAgICAgICAgIHNpbmdsZUFydGljbGVJbmZvXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSArIDUwMClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oODAwKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJyZ2JhKDAsIDAsIDEzOSwgMC41KVwiKTtcblxuICAgICAgICAgICAgZmlsbEFydGljbGVJbmZvKHNpbmdsZUFydGljbGVJbmZvLCBkKTtcblxuICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm9cbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5ICsgMTM1MClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oODAwKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmlnRG90XG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiZGFya2JsdWVcIilcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG4gICAgICAgIGJpZ0RvdFxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUxpbmVhcilcbiAgICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgOClcbiAgICAgICAgZmlsbEFydGljbGVJbmZvKHNpbmdsZUFydGljbGVJbmZvLCBkKTtcbiAgICB9XG59XG5cbkRhdGUucHJvdG90eXBlLmFkZERheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyAxKVxufVxuXG5jb25zdCBnZW5lcmF0ZURhdGVSYW5nZSA9IChzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgICBjb25zdCBkYXRlcyA9IFtdXG4gICAgbGV0IGN1cnJlbnREYXRlID0gc3RhcnREYXRlXG4gICAgd2hpbGUgKGN1cnJlbnREYXRlIDwgZW5kRGF0ZSkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUpXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9YCArIFwiLVwiICsgYDAke2RhdGUuZ2V0TW9udGgoKSArIDF9YCArIFwiLVwiICsgYCR7ZGF0ZS5nZXREYXRlKCl9YFxuICAgICAgICBkYXRlcy5wdXNoKHsgW2Zvcm1hdHRlZERhdGVdOiB7IHg6IGZvcm1hdHRlZERhdGUsIHk6IG51bGwgfSB9KVxuICAgICAgICBjdXJyZW50RGF0ZS5hZGREYXkoKVxuICAgIH1cbiAgICByZXR1cm4gZGF0ZXNcbn1cblxuY29uc3Qgc29ydERhdGUgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoYS54KVxuICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoYi54KVxuICAgIGlmIChkYXRlMSA+PSBkYXRlMikge1xuICAgICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cbn1cblxuY29uc3QgbWVyZ2VMaW5lRGF0YSA9IChkYXRlUmFuZ2UsIGxpbmVEYXRhKSA9PiB7XG4gICAgY29uc3QgbWVyZ2VkRGF0YSA9IE9iamVjdC5hc3NpZ24oW10sIGRhdGVSYW5nZSwgbGluZURhdGEpXG4gICAgY29uc3QgdW5rZXllZERhdGEgPSBbXVxuICAgIG1lcmdlZERhdGEuZm9yRWFjaChvdXRlckRhdHVtID0+IHtcbiAgICAgICAgdW5rZXllZERhdGEucHVzaChPYmplY3QudmFsdWVzKG91dGVyRGF0dW0pKVxuICAgIH0pXG4gICAgcmV0dXJuIHVua2V5ZWREYXRhLmZsYXQoKS5zb3J0KHNvcnREYXRlKVxufVxuXG5cblxuY29uc3QgaW5pdGlhbFJlbmRlciA9IChzdmcsIGludGlhbGl6ZV9kdXJhdGlvbiwgdG90YWwpID0+IHtcblxuICAgIGQzLnNlbGVjdChcImh0bWxcIilcbiAgICAgICAgLnRyYW5zaXRpb24oXCJhcHBlYXJcIilcbiAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWQpXG4gICAgICAgIC5kdXJhdGlvbihpbnRpYWxpemVfZHVyYXRpb24gLSAxNTAwKVxuICAgICAgICAuYXR0cihcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJub25lXCIpXG4gICBcbiAgICBkMy5zZWxlY3QoXCIjbWFpblwiKVxuICAgICAgICAudHJhbnNpdGlvbihcImFwcGVhclwiKVxuICAgICAgICAuZWFzZShkMy5lYXNlUXVhZClcbiAgICAgICAgLmR1cmF0aW9uKGludGlhbGl6ZV9kdXJhdGlvbiAtIDE1MDApXG4gICAgICAgIC5zdHlsZShcInRvcFwiLCBcIjBweFwiKVxuXG5cbiAgICBkMy5zZWxlY3QoXCIuYXJ0aWNsZS1pbWFnZVwiKVxuICAgICAgICAudHJhbnNpdGlvbihcImFwcGVhclwiKVxuICAgICAgICAuZGVsYXkoODAwKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oaW50aWFsaXplX2R1cmF0aW9uICsgMTAwMClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuXG4gICAgZDMuc2VsZWN0KFwiLmluZm8tY29udGFpbmVyXCIpXG4gICAgICAgIC50cmFuc2l0aW9uKFwiYXBwZWFyXCIpXG4gICAgICAgIC5kZWxheSg4MDApXG4gICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgIC5kdXJhdGlvbihpbnRpYWxpemVfZHVyYXRpb24gKyAxMDAwKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG5cbiAgICByZXR1cm4gZmFsc2VcblxuXG59XG5cbmNvbnN0IGhhbmRsZUFydGljbGVTY3JvbGwgPSBpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXJ0aWNsZV8ke2l9YCkuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgYmxvY2s6IFwiY2VudGVyXCJcbiAgICB9KVxuXG4gICAgZDMuc2VsZWN0KGAjYXJ0aWNsZV8ke2l9YClcbiAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBcInJnYmEoMCwgMCwgMTM5LCAwLjUpXCIpXG5cbn1cblxuY29uc3QgY29uZGl0aW9uYWxCYWNrZ3JvdW5kQ29sb3IgPSAodG90YWwpID0+IHtcbiAgICBkMy5zZWxlY3QoXCJodG1sXCIpXG4gICAgICAgIC5kYXRhKFt0b3RhbF0pXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWQpXG4gICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIGQgPT4ge1xuICAgICAgICAgICAgaWYgKGQuYXZlcmFnZSA+IDAuMTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHszMiAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHsxOTYgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7MTY4ICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAwLjk3KWBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5hdmVyYWdlIDwgLTAuMTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsxMjggKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHs0MCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sIDAuOTcpYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoNTAsNTAsNTAsMC44KWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbn1cblxuZXhwb3J0IHtcbiAgICBjb25kaXRpb25hbEJhY2tncm91bmRDb2xvcixcbiAgICBjb25kaXRpb25hbFRpdGxlQ29sb3IsXG4gICAgY29uZGl0aW9uYWxEaXNwbGF5LFxuICAgIGNvbmRpdGlvbmFsT3BhY2l0eSxcbiAgICBjb25kaXRpb25hbENvbG9yLFxuICAgIGZpbGxBcnRpY2xlSW5mbyxcbiAgICBoYW5kbGVEb3RVWCxcbiAgICBnZW5lcmF0ZURhdGVSYW5nZSxcbiAgICBzb3J0RGF0ZSxcbiAgICBtZXJnZUxpbmVEYXRhLFxuICAgIGluaXRpYWxSZW5kZXIsXG4gICAgaGFuZGxlQXJ0aWNsZVNjcm9sbFxufSIsImltcG9ydCBxdWVyeUZpZWxkIGZyb20gXCIuL3F1ZXJ5X2ZpZWxkXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIGNvbnN0IHByb3BzID0ge31cbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtMVwiKTtcbiAgICBzZWFyY2guaW5zZXJ0QmVmb3JlKHF1ZXJ5RmllbGQocHJvcHMpLCB0aXRsZSk7XG5cbiAgICBjb25zdCBjaGFydCA9IG5ldyBDaGFydChwcm9wcylcbiAgICBwcm9wcy5jaGFydCA9IGNoYXJ0XG4gICAgXG4gICAgY29uc3QgZHVtbXlEYXRhID0gY2hhcnQuZHVtbXlEYXRhKCk7XG4gICAgY2hhcnQuYnVpbGQoZHVtbXlEYXRhKTtcblxufSkiLCJpbXBvcnQgeyB0d2VldFN0cmVhbSB9IGZyb20gXCIuL3V0aWxcIlxuaW1wb3J0IHsgdHdlZXRzUmVuZGVyIH0gZnJvbSBcIi4vY2hhcnRfdXRpbFwiO1xuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIFxuICAgIGNvbnN0IHF1ZXJ5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicXVlcnktZmllbGRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ6LWluZGV4XCIsIFwiMTAwXCIpO1xuXG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PntcbiAgICAgICAgdHlwaW5nV29yZChxdWVyeUlucHV0KTtcbiAgICB9LCAxMDAwKVxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocXVlcnlJbnB1dClcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgaGFuZGxlVHlwaW5nKGV2ZW50LCBwcm9wcywgcXVlcnlJbnB1dClcbiAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIGZvcm1cbiAgICApXG59XG5cbmNvbnN0IHR5cGluZ1dvcmQgPSAocXVlcnlJbnB1dCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIFwiTG9uZG9uLCAyNVwiLFxuICAgICAgICBcIkFudHMsIDUwXCIsXG4gICAgICAgIFwiQmVhcnMsIDMzXCIsXG4gICAgICAgIFwiQmVldHMsIDEwMFwiLFxuICAgICAgICBcIkNvbmdyZXNzLCAyMzBcIixcbiAgICAgICAgXCJCYW5hbmFzLCA0NVwiLFxuICAgICAgICBcIkNoZWVzZSwgNzdcIixcbiAgICAgICAgXCJUcnVtcCwgMTAwMFwiLFxuICAgICAgICBcIlBlbmd1aW5zLCAyMFwiLFxuICAgICAgICBcIlRoZSBzZW5hdGUsIDEwMFwiLFxuICAgICAgICBcIkdvb2dsZSwgMTIwXCIsXG4gICAgICAgIFwiU3BhY2UgVHJhdmVsLCA1MFwiLFxuICAgICAgICBcIlRlc2xhLCA0NVwiLFxuICAgICAgICBcIkJNVywgMTAwXCIsXG4gICAgICAgIFwiU3VwcmEsIDIwXCIsXG4gICAgICAgIFwiRG9ncywgMTAwXCJcbiAgICBdXG4gICAgY29uc3Qgc3RyID0gb3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aCldXG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY3ljbGUgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgaWYgKHJhbmQgPiAwLjMpIHtcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBzdHIuc2xpY2UoMCwgaSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPj0gc3RyLmxlbmd0aCl7XG4gICAgICAgICAgICBxdWVyeUlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBjbGVhcklucHV0KHF1ZXJ5SW5wdXQsIGN5Y2xlKSk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGN5Y2xlKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIilcbiAgICAgICAgICAgICAgICB0eXBpbmdXb3JkKHF1ZXJ5SW5wdXQpXG4gICAgICAgICAgICB9LCAxNTAwKVxuICAgICAgICB9XG4gICAgfSwgMjAwKVxuICAgIHF1ZXJ5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGNsZWFySW5wdXQocXVlcnlJbnB1dCwgY3ljbGUpKVxufVxuXG5jb25zdCBjbGVhcklucHV0ID0gKHF1ZXJ5SW5wdXQsIGN5Y2xlKSA9PiAoKSA9PiB7XG4gICAgY2xlYXJJbnRlcnZhbChjeWNsZSlcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiXCIpXG59XG5cbmNvbnN0IGhhbmRsZVR5cGluZyA9IChldmVudCxwcm9wcywgcXVlcnlJbnB1dCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdmFsdWUgPSBxdWVyeUlucHV0LnZhbHVlO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdChcIixcIik7XG4gICAgICAgIGNvbnN0IG9iaiA9IHsgcXVlcnlTdHI6IHBhcnRzWzBdLCBxdWVyeU51bTogcGFyc2VJbnQocGFydHNbMV0pIH07XG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9IFxuXG5cbiAgICBsZXQgdHdlZXRzID0gW107XG4gICAgY29uc3QgY2FsbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdHdlZXRTdHJlYW0ocmVxdWVzdCgpKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmxlbmd0aCA+IHR3ZWV0cy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICB0d2VldHMgPSByZXNwb25zZS5zbGljZSgwLCByZXF1ZXN0KCkucXVlcnlOdW0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0d2VldHMpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYgKHR3ZWV0cy5sZW5ndGggPj0gcmVxdWVzdCgpLnF1ZXJ5TnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2FsbClcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0d2VldHNsb2cpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR3ZWV0cylcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSkgICBcbiAgICB9LCA1MDApO1xuXG4gICAgY29uc3QgdG90YWxTZW50ID0gMDtcblxuICAgIGNvbnN0IHN0b3BDYWxsID0gKCkgPT4ge1xuICAgICAgICBpZih0d2VldHMubGVuZ3RoID49IHJlcXVlc3QoKS5xdWVyeU51bSl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGNhbGwpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cblxuLy8gVXNlIGZvciB0ZXN0aW5nIGZ1bmN0aW9uYWxpdHksIHNvdXJjZWQgZnJvbTogaHR0cHM6Ly9jb2RlYnVyc3QuaW8vdGhyb3R0bGluZy1hbmQtZGVib3VuY2luZy1pbi1qYXZhc2NyaXB0LTY0NmQwNzZkMGE0NFxuY29uc3QgZGVib3VuY2UgPSAoZGVsYXksIGZuKSA9PiB7XG4gICAgbGV0IHRpbWVySWQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aW1lcklkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZm4oLi4uYXJncyk7XG4gICAgICAgICAgICB0aW1lcklkID0gbnVsbDtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbn1cblxuY29uc3QgZGVib3VuY2VkVHlwaW5nID0gZGVib3VuY2UoNzAwLCBoYW5kbGVUeXBpbmcpOyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxuXG5leHBvcnQgY29uc3QgdHdlZXRTdHJlYW0gPSAoZGF0YSkgPT4gKFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogXCIvdHdlZXRzXCIsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4pXG4iXSwic291cmNlUm9vdCI6IiJ9