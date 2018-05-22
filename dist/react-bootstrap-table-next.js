(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrapTable2"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(17)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SORT_ASC: 'asc',
  SORT_DESC: 'desc',
  ROW_SELECT_SINGLE: 'radio',
  ROW_SELECT_MULTIPLE: 'checkbox',
  ROW_SELECT_DISABLED: 'ROW_SELECT_DISABLED',
  CHECKBOX_STATUS_CHECKED: 'checked',
  CHECKBOX_STATUS_INDETERMINATE: 'indeterminate',
  CHECKBOX_STATUS_UNCHECKED: 'unchecked'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint no-empty: 0 */
/* eslint no-param-reassign: 0 */
/* eslint prefer-rest-params: 0 */

function splitNested(str) {
  return [str].join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

function get(target, field) {
  var pathArray = splitNested(field);
  var result = void 0;
  try {
    result = pathArray.reduce(function (curr, path) {
      return curr[path];
    }, target);
  } catch (e) {}
  return result;
}

function set(target, field, value) {
  var safe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var pathArray = splitNested(field);
  var level = 0;
  pathArray.reduce(function (a, b) {
    level += 1;
    if (typeof a[b] === 'undefined') {
      if (!safe) throw new Error(a + '.' + b + ' is undefined');
      a[b] = {};
      return a[b];
    }

    if (level === pathArray.length) {
      a[b] = value;
      return value;
    }
    return a[b];
  }, target);
}

function isFunction(obj) {
  return obj && typeof obj === 'function';
}

/**
 * Checks if `value` is the Object. the `Object` except `Function` and `Array.`
 *
 * @param {*} obj - The value gonna check
 */
function isObject(obj) {
  var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  return obj !== null && type === 'object' && obj.constructor === Object;
}

function isEmptyObject(obj) {
  if (!isObject(obj)) return false;

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i += 1) {
    if (hasOwnProperty.call(obj, keys[i])) return false;
  }

  return true;
}

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

function sleep(fn, ms) {
  return setTimeout(function () {
    return fn();
  }, ms);
}

function debounce(func, wait, immediate) {
  var _this = this,
      _arguments = arguments;

  var timeout = void 0;

  return function () {
    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(_this, _arguments);
      }
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 0);

    if (callNow) {
      func.appy(_this, _arguments);
    }
  };
}

exports.default = {
  get: get,
  set: set,
  isFunction: isFunction,
  isObject: isObject,
  isEmptyObject: isEmptyObject,
  isDefined: isDefined,
  sleep: sleep,
  debounce: debounce
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(28)();
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var matchRow = exports.matchRow = function matchRow(keyField, id) {
  return function (row) {
    return row[keyField] === id;
  };
};

var getRowByRowId = exports.getRowByRowId = function getRowByRowId(_ref) {
  var data = _ref.data,
      keyField = _ref.keyField;
  return function (id) {
    return data.find(matchRow(keyField, id));
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _propTypes = __webpack_require__(4);

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PropTypes = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
var EXITED = exports.EXITED = 'exited';
var ENTERING = exports.ENTERING = 'entering';
var ENTERED = exports.ENTERED = 'entered';
var EXITING = exports.EXITING = 'exiting';

/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 *
 */

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    var parentGroup = context.transitionGroup;
    // In the context of a TransitionGroup all enters are really appears
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

    var initialStatus = void 0;
    _this.nextStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.nextStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  Transition.prototype.getChildContext = function getChildContext() {
    return { transitionGroup: null }; // allows for nested Transitions
  };

  Transition.prototype.componentDidMount = function componentDidMount() {
    this.updateStatus(true);
  };

  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _ref = this.pendingState || this.state,
        status = _ref.status;

    if (nextProps.in) {
      if (status === UNMOUNTED) {
        this.setState({ status: EXITED });
      }
      if (status !== ENTERING && status !== ENTERED) {
        this.nextStatus = ENTERING;
      }
    } else {
      if (status === ENTERING || status === ENTERED) {
        this.nextStatus = EXITING;
      }
    }
  };

  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateStatus();
  };

  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  Transition.prototype.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;

    var exit = void 0,
        enter = void 0,
        appear = void 0;

    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }
    return { exit: exit, enter: enter, appear: appear };
  };

  Transition.prototype.updateStatus = function updateStatus() {
    var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var nextStatus = this.nextStatus;

    if (nextStatus !== null) {
      this.nextStatus = null;
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  };

  Transition.prototype.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;

    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

    var timeouts = this.getTimeouts();

    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if (!mounting && !enter) {
      this.safeSetState({ status: ENTERED }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);

    this.safeSetState({ status: ENTERING }, function () {
      _this2.props.onEntering(node, appearing);

      // FIXME: appear timeout?
      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  Transition.prototype.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;

    var timeouts = this.getTimeouts();

    // no exit animation skip right to EXITED
    if (!exit) {
      this.safeSetState({ status: EXITED }, function () {
        _this3.props.onExited(node);
      });
      return;
    }
    this.props.onExit(node);

    this.safeSetState({ status: EXITING }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    var _this4 = this;

    // We need to track pending updates for instances where a cWRP fires quickly
    // after cDM and before the state flushes, which would double trigger a
    // transition
    this.pendingState = nextState;

    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, function () {
      _this4.pendingState = null;
      callback();
    });
  };

  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this5 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this5.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    var _props = this.props,
        children = _props.children,
        childProps = _objectWithoutProperties(_props, ['children']);
    // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react2.default.Children.only(children);
    return _react2.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react2.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};


Transition.propTypes =  false ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt.apply(undefined, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

exports.default = Transition;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
  enter: _propTypes2.default.number,
  exit: _propTypes2.default.number
}).isRequired]);

var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterDone: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  exitDone: _propTypes2.default.string,
  exitActive: _propTypes2.default.string
})]);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ChildMapping = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var propTypes = {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes2.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   */
  children: _propTypes2.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes2.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes2.default.bool,
  /**
    * A convenience prop that enables or disables exit animations
    * for all children. Note that specifying this will override any defaults set
    * on individual children Transitions.
    */
  exit: _propTypes2.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes2.default.func
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};

/**
 * The `<TransitionGroup>` component manages a set of `<Transition>` components
 * in a list. Like with the `<Transition>` component, `<TransitionGroup>`, is a
 * state machine for managing the mounting and unmounting of components over
 * time.
 *
 * Consider the example below using the `Fade` CSS transition from before.
 * As items are removed or added to the TodoList the `in` prop is toggled
 * automatically by the `<TransitionGroup>`. You can use _any_ `<Transition>`
 * component in a `<TransitionGroup>`, not just css.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/00rqyo26kn?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual `<Transition>`
 * components. This means you can mix and match animations across different
 * list items.
 */

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    // Initial children should all be entering, dependent on appear
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children, function (child) {
        return (0, _react.cloneElement)(child, {
          onExited: _this.handleExited.bind(_this, child),
          in: true,
          appear: _this.getProp(child, 'appear'),
          enter: _this.getProp(child, 'enter'),
          exit: _this.getProp(child, 'exit')
        });
      })
    };
    return _this;
  }

  TransitionGroup.prototype.getChildContext = function getChildContext() {
    return {
      transitionGroup: { isMounting: !this.appeared }
    };
  };
  // use child config unless explictly set by the Group


  TransitionGroup.prototype.getProp = function getProp(child, prop) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props;

    return props[prop] != null ? props[prop] : child.props[prop];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var prevChildMapping = this.state.children;
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);

    var children = (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping);

    Object.keys(children).forEach(function (key) {
      var child = children[key];

      if (!(0, _react.isValidElement)(child)) return;

      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;

      var prevChild = prevChildMapping[key];
      var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in;

      // item is new (entering)
      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = (0, _react.cloneElement)(child, {
          onExited: _this2.handleExited.bind(_this2, child),
          in: true,
          exit: _this2.getProp(child, 'exit', nextProps),
          enter: _this2.getProp(child, 'enter', nextProps)
        });
      }
      // item is old (exiting)
      else if (!hasNext && hasPrev && !isLeaving) {
          // console.log('leaving', key)
          children[key] = (0, _react.cloneElement)(child, { in: false });
        }
        // item hasn't changed transition states
        // copy over the last transition props;
        else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
            // console.log('unchanged', key)
            children[key] = (0, _react.cloneElement)(child, {
              onExited: _this2.handleExited.bind(_this2, child),
              in: prevChild.props.in,
              exit: _this2.getProp(child, 'exit', nextProps),
              enter: _this2.getProp(child, 'enter', nextProps)
            });
          }
    });

    this.setState({ children: children });
  };

  TransitionGroup.prototype.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);

    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    this.setState(function (state) {
      var children = _extends({}, state.children);

      delete children[child.key];
      return { children: children };
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _props = this.props,
        Component = _props.component,
        childFactory = _props.childFactory,
        props = _objectWithoutProperties(_props, ['component', 'childFactory']);

    var children = values(this.state.children).map(childFactory);

    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes2.default.object.isRequired
};


TransitionGroup.propTypes =  false ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedRows = exports.unSelectableKeys = exports.selectableKeys = exports.isAnySelectedRow = exports.isSelectedAll = undefined;

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isSelectedAll = exports.isSelectedAll = function isSelectedAll(_ref) {
  var data = _ref.data,
      selected = _ref.selected;
  return data.length === selected.length;
};

var isAnySelectedRow = exports.isAnySelectedRow = function isAnySelectedRow(_ref2) {
  var selected = _ref2.selected;
  return function () {
    var skips = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (skips.length === 0) {
      return selected.length > 0;
    }
    return selected.filter(function (x) {
      return !skips.includes(x);
    }).length;
  };
};

var selectableKeys = exports.selectableKeys = function selectableKeys(_ref3) {
  var data = _ref3.data,
      keyField = _ref3.keyField;
  return function () {
    var skips = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (skips.length === 0) {
      return data.map(function (row) {
        return _utils2.default.get(row, keyField);
      });
    }
    return data.filter(function (row) {
      return !skips.includes(_utils2.default.get(row, keyField));
    }).map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  };
};

var unSelectableKeys = exports.unSelectableKeys = function unSelectableKeys(_ref4) {
  var selected = _ref4.selected;
  return function () {
    var skips = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (skips.length === 0) {
      return [];
    }
    return selected.filter(function (x) {
      return skips.includes(x);
    });
  };
};

var getSelectedRows = exports.getSelectedRows = function getSelectedRows(store) {
  var getRow = (0, _rows.getRowByRowId)(store);
  return store.selected.map(function (k) {
    return getRow(k);
  });
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RemoteResolver, _ExtendBase);

    function RemoteResolver() {
      _classCallCheck(this, RemoteResolver);

      return _possibleConstructorReturn(this, (RemoteResolver.__proto__ || Object.getPrototypeOf(RemoteResolver)).apply(this, arguments));
    }

    _createClass(RemoteResolver, [{
      key: 'getNewestState',
      value: function getNewestState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var store = this.store || this.props.store;
        return _extends({
          page: store.page,
          sizePerPage: store.sizePerPage,
          filters: store.filters,
          sortField: store.sortField,
          sortOrder: store.sortOrder,
          data: store.getAllData()
        }, state);
      }
    }, {
      key: 'isRemotePagination',
      value: function isRemotePagination() {
        var remote = this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.pagination;
      }
    }, {
      key: 'isRemoteFiltering',
      value: function isRemoteFiltering() {
        var remote = this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.filter;
      }
    }, {
      key: 'isRemoteSort',
      value: function isRemoteSort() {
        var remote = this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.sort;
      }
    }, {
      key: 'isRemoteCellEdit',
      value: function isRemoteCellEdit() {
        var remote = this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.cellEdit;
      }
    }, {
      key: 'handleRemotePageChange',
      value: function handleRemotePageChange() {
        this.props.onTableChange('pagination', this.getNewestState());
      }
    }, {
      key: 'handleRemoteFilterChange',
      value: function handleRemoteFilterChange() {
        var newState = {};
        if (this.isRemotePagination()) {
          var options = this.props.pagination.options || {};
          newState.page = _utils2.default.isDefined(options.pageStartIndex) ? options.pageStartIndex : 1;
        }
        this.props.onTableChange('filter', this.getNewestState(newState));
      }
    }, {
      key: 'handleSortChange',
      value: function handleSortChange() {
        this.props.onTableChange('sort', this.getNewestState());
      }
    }, {
      key: 'handleCellChange',
      value: function handleCellChange(rowId, dataField, newValue) {
        var cellEdit = { rowId: rowId, dataField: dataField, newValue: newValue };
        this.props.onTableChange('cellEdit', this.getNewestState({ cellEdit: cellEdit }));
      }
    }]);

    return RemoteResolver;
  }(ExtendBase);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bootstrapTable = __webpack_require__(16);

var _bootstrapTable2 = _interopRequireDefault(_bootstrapTable);

var _container = __webpack_require__(43);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _container2.default)(_bootstrapTable2.default);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _header = __webpack_require__(19);

var _header2 = _interopRequireDefault(_header);

var _caption = __webpack_require__(24);

var _caption2 = _interopRequireDefault(_caption);

var _body = __webpack_require__(25);

var _body2 = _interopRequireDefault(_body);

var _propsResolver = __webpack_require__(41);

var _propsResolver2 = _interopRequireDefault(_propsResolver);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _selection = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint arrow-body-style: 0 */

var BootstrapTable = function (_PropsBaseResolver) {
  _inherits(BootstrapTable, _PropsBaseResolver);

  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    var _this = _possibleConstructorReturn(this, (BootstrapTable.__proto__ || Object.getPrototypeOf(BootstrapTable)).call(this, props));

    _this.validateProps();

    _this.state = {
      data: props.data
    };
    return _this;
  }

  _createClass(BootstrapTable, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        data: nextProps.data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          overlay = _props.overlay;

      var table = this.renderTable();
      if (loading && overlay) {
        var LoadingOverlay = overlay(table, loading);
        return _react2.default.createElement(LoadingOverlay, null);
      }
      return table;
    }
  }, {
    key: 'renderTable',
    value: function renderTable() {
      var _props2 = this.props,
          store = _props2.store,
          columns = _props2.columns,
          keyField = _props2.keyField,
          id = _props2.id,
          classes = _props2.classes,
          striped = _props2.striped,
          hover = _props2.hover,
          bordered = _props2.bordered,
          condensed = _props2.condensed,
          noDataIndication = _props2.noDataIndication,
          caption = _props2.caption,
          rowStyle = _props2.rowStyle,
          rowClasses = _props2.rowClasses,
          wrapperClasses = _props2.wrapperClasses,
          rowEvents = _props2.rowEvents;


      var tableWrapperClass = (0, _classnames2.default)('react-bootstrap-table', wrapperClasses);

      var tableClass = (0, _classnames2.default)('table', {
        'table-striped': striped,
        'table-hover': hover,
        'table-bordered': bordered,
        'table-condensed': condensed
      }, classes);

      var cellSelectionInfo = this.resolveSelectRowProps({
        onRowSelect: this.props.onRowSelect
      });

      var headerCellSelectionInfo = this.resolveSelectRowPropsForHeader({
        onAllRowsSelect: this.props.onAllRowsSelect,
        selected: store.selected,
        allRowsSelected: (0, _selection.isSelectedAll)(store)
      });

      var tableCaption = caption && _react2.default.createElement(
        _caption2.default,
        null,
        caption
      );

      return _react2.default.createElement(
        'div',
        { className: tableWrapperClass },
        _react2.default.createElement(
          'table',
          { id: id, className: tableClass },
          tableCaption,
          _react2.default.createElement(_header2.default, {
            columns: columns,
            sortField: store.sortField,
            sortOrder: store.sortOrder,
            onSort: this.props.onSort,
            onFilter: this.props.onFilter,
            selectRow: headerCellSelectionInfo
          }),
          _react2.default.createElement(_body2.default, {
            data: this.state.data,
            keyField: keyField,
            columns: columns,
            isEmpty: this.isEmpty(),
            visibleColumnSize: this.visibleColumnSize(),
            noDataIndication: noDataIndication,
            cellEdit: this.props.cellEdit || {},
            selectRow: cellSelectionInfo,
            selectedRowKeys: store.selected,
            rowStyle: rowStyle,
            rowClasses: rowClasses,
            rowEvents: rowEvents
          })
        )
      );
    }
  }]);

  return BootstrapTable;
}((0, _propsResolver2.default)(_react.Component));

BootstrapTable.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  remote: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    pagination: _propTypes2.default.bool
  })]),
  store: _propTypes2.default.object,
  noDataIndication: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  striped: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  hover: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  classes: _propTypes2.default.string,
  wrapperClasses: _propTypes2.default.string,
  condensed: _propTypes2.default.bool,
  caption: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  pagination: _propTypes2.default.object,
  filter: _propTypes2.default.object,
  cellEdit: _propTypes2.default.object,
  selectRow: _propTypes2.default.shape({
    mode: _propTypes2.default.oneOf([_const2.default.ROW_SELECT_SINGLE, _const2.default.ROW_SELECT_MULTIPLE]).isRequired,
    clickToSelect: _propTypes2.default.bool,
    clickToEdit: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    onSelectAll: _propTypes2.default.func,
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    nonSelectable: _propTypes2.default.array,
    bgColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    hideSelectColumn: _propTypes2.default.bool
  }),
  onRowSelect: _propTypes2.default.func,
  onAllRowsSelect: _propTypes2.default.func,
  rowStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  rowEvents: _propTypes2.default.object,
  rowClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
  })),
  defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
  overlay: _propTypes2.default.func,
  onTableChange: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func
};

BootstrapTable.defaultProps = {
  remote: false,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  noDataIndication: null
};

exports.default = BootstrapTable;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(8);
var invariant = __webpack_require__(9);
var ReactPropTypesSecret = __webpack_require__(18);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _headerCell = __webpack_require__(20);

var _headerCell2 = _interopRequireDefault(_headerCell);

var _selectionHeaderCell = __webpack_require__(23);

var _selectionHeaderCell2 = _interopRequireDefault(_selectionHeaderCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var ROW_SELECT_DISABLED = _const2.default.ROW_SELECT_DISABLED;
  var columns = props.columns,
      onSort = props.onSort,
      onFilter = props.onFilter,
      sortField = props.sortField,
      sortOrder = props.sortOrder,
      selectRow = props.selectRow;


  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      null,
      selectRow.mode !== ROW_SELECT_DISABLED && !selectRow.hideSelectColumn ? _react2.default.createElement(_selectionHeaderCell2.default, selectRow) : null,
      columns.map(function (column, i) {
        if (!column.hidden) {
          var currSort = column.dataField === sortField;
          var isLastSorting = column.dataField === sortField;

          return _react2.default.createElement(_headerCell2.default, {
            index: i,
            key: column.dataField,
            column: column,
            onSort: onSort,
            sorting: currSort,
            onFilter: onFilter,
            sortOrder: sortOrder,
            isLastSorting: isLastSorting
          });
        }
        return false;
      })
    )
  );
}; /* eslint react/require-default-props: 0 */


Header.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  sortField: _propTypes2.default.string,
  sortOrder: _propTypes2.default.string,
  selectRow: _propTypes2.default.object
};

exports.default = Header;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/require-default-props: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _symbol = __webpack_require__(21);

var _symbol2 = _interopRequireDefault(_symbol);

var _caret = __webpack_require__(22);

var _caret2 = _interopRequireDefault(_caret);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderCell = function HeaderCell(props) {
  var column = props.column,
      index = props.index,
      onSort = props.onSort,
      sorting = props.sorting,
      sortOrder = props.sortOrder,
      isLastSorting = props.isLastSorting,
      onFilter = props.onFilter;
  var text = column.text,
      sort = column.sort,
      filter = column.filter,
      headerTitle = column.headerTitle,
      headerAlign = column.headerAlign,
      headerFormatter = column.headerFormatter,
      headerEvents = column.headerEvents,
      headerClasses = column.headerClasses,
      headerStyle = column.headerStyle,
      headerAttrs = column.headerAttrs,
      headerSortingClasses = column.headerSortingClasses,
      headerSortingStyle = column.headerSortingStyle;


  var cellAttrs = _extends({}, _utils2.default.isFunction(headerAttrs) ? headerAttrs(column, index) : headerAttrs, headerEvents);

  var sortSymbol = void 0;
  var filterElm = void 0;
  var cellStyle = {};
  var cellClasses = _utils2.default.isFunction(headerClasses) ? headerClasses(column, index) : headerClasses;

  if (headerStyle) {
    cellStyle = _utils2.default.isFunction(headerStyle) ? headerStyle(column, index) : headerStyle;
  }

  if (headerTitle) {
    cellAttrs.title = _utils2.default.isFunction(headerTitle) ? headerTitle(column, index) : text;
  }

  if (headerAlign) {
    cellStyle.textAlign = _utils2.default.isFunction(headerAlign) ? headerAlign(column, index) : headerAlign;
  }

  if (sort) {
    var customClick = cellAttrs.onClick;
    cellAttrs.onClick = function (e) {
      onSort(column);
      if (_utils2.default.isFunction(customClick)) customClick(e);
    };
    cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, 'sortable');

    if (sorting) {
      sortSymbol = _react2.default.createElement(_caret2.default, { order: sortOrder });

      // append customized classes or style if table was sorting based on the current column.
      cellClasses = (0, _classnames2.default)(cellClasses, _utils2.default.isFunction(headerSortingClasses) ? headerSortingClasses(column, sortOrder, isLastSorting, index) : headerSortingClasses);

      cellStyle = _extends({}, cellStyle, _utils2.default.isFunction(headerSortingStyle) ? headerSortingStyle(column, sortOrder, isLastSorting, index) : headerSortingStyle);
    } else {
      sortSymbol = _react2.default.createElement(_symbol2.default, null);
    }
  }

  if (cellClasses) cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, cellClasses);
  if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;
  if (filter) {
    filterElm = _react2.default.createElement(filter.Filter, _extends({}, filter.props, { onFilter: onFilter, column: column }));
  }

  var children = headerFormatter ? headerFormatter(column, index, { sortElement: sortSymbol, filterElement: filterElm }) : text;

  if (headerFormatter) {
    return _react2.default.createElement('th', cellAttrs, children);
  }

  return _react2.default.createElement('th', cellAttrs, children, sortSymbol, filterElm);
};

HeaderCell.propTypes = {
  column: _propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    hidden: _propTypes2.default.bool,
    headerFormatter: _propTypes2.default.func,
    formatter: _propTypes2.default.func,
    formatExtraData: _propTypes2.default.any,
    headerClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    headerTitle: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    title: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    headerEvents: _propTypes2.default.object,
    events: _propTypes2.default.object,
    headerAlign: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerAttrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    attrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    sort: _propTypes2.default.bool,
    sortFunc: _propTypes2.default.func,
    onSort: _propTypes2.default.func,
    editor: _propTypes2.default.object,
    editable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    editCellStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editCellClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editorClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorRenderer: _propTypes2.default.func,
    validator: _propTypes2.default.func,
    filter: _propTypes2.default.object,
    filterValue: _propTypes2.default.func
  }).isRequired,
  index: _propTypes2.default.number.isRequired,
  onSort: _propTypes2.default.func,
  sorting: _propTypes2.default.bool,
  sortOrder: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]),
  isLastSorting: _propTypes2.default.bool,
  onFilter: _propTypes2.default.func
};

exports.default = HeaderCell;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortSymbol = function SortSymbol() {
  return _react2.default.createElement(
    "span",
    { className: "order" },
    _react2.default.createElement(
      "span",
      { className: "dropdown" },
      _react2.default.createElement("span", { className: "caret" })
    ),
    _react2.default.createElement(
      "span",
      { className: "dropup" },
      _react2.default.createElement("span", { className: "caret" })
    )
  );
};

exports.default = SortSymbol;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortCaret = function SortCaret(_ref) {
  var order = _ref.order;

  var orderClass = (0, _classnames2.default)('react-bootstrap-table-sort-order', {
    dropup: order === _const2.default.SORT_ASC
  });
  return _react2.default.createElement(
    'span',
    { className: orderClass },
    _react2.default.createElement('span', { className: 'caret' })
  );
};

SortCaret.propTypes = {
  order: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]).isRequired
};
exports.default = SortCaret;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var CheckBox = exports.CheckBox = function CheckBox(_ref) {
  var checked = _ref.checked,
      indeterminate = _ref.indeterminate;
  return _react2.default.createElement('input', {
    type: 'checkbox',
    checked: checked,
    ref: function ref(input) {
      if (input) input.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
    }
  });
};

CheckBox.propTypes = {
  checked: _propTypes2.default.bool.isRequired,
  indeterminate: _propTypes2.default.bool.isRequired
};

var SelectionHeaderCell = function (_Component) {
  _inherits(SelectionHeaderCell, _Component);

  function SelectionHeaderCell() {
    _classCallCheck(this, SelectionHeaderCell);

    var _this = _possibleConstructorReturn(this, (SelectionHeaderCell.__proto__ || Object.getPrototypeOf(SelectionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  /**
   * avoid updating if button is
   * 1. radio
   * 2. status was not changed.
   */


  _createClass(SelectionHeaderCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;
      var _props = this.props,
          mode = _props.mode,
          checkedStatus = _props.checkedStatus;


      if (mode === ROW_SELECT_SINGLE) return false;

      return nextProps.checkedStatus !== checkedStatus;
    }
  }, {
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var onAllRowsSelect = this.props.onAllRowsSelect;


      onAllRowsSelect(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var CHECKBOX_STATUS_CHECKED = _const2.default.CHECKBOX_STATUS_CHECKED,
          CHECKBOX_STATUS_INDETERMINATE = _const2.default.CHECKBOX_STATUS_INDETERMINATE,
          ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;
      var _props2 = this.props,
          mode = _props2.mode,
          checkedStatus = _props2.checkedStatus;


      var checked = checkedStatus === CHECKBOX_STATUS_CHECKED;

      var indeterminate = checkedStatus === CHECKBOX_STATUS_INDETERMINATE;

      return mode === ROW_SELECT_SINGLE ? _react2.default.createElement('th', { 'data-row-selection': true }) : _react2.default.createElement(
        'th',
        { 'data-row-selection': true, onClick: this.handleCheckBoxClick },
        _react2.default.createElement(CheckBox, _extends({}, this.props, {
          checked: checked,
          indeterminate: indeterminate
        }))
      );
    }
  }]);

  return SelectionHeaderCell;
}(_react.Component);

SelectionHeaderCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  checkedStatus: _propTypes2.default.string,
  onAllRowsSelect: _propTypes2.default.func
};
exports.default = SelectionHeaderCell;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Caption = function Caption(props) {
  if (!props.children) return null;
  return _react2.default.createElement(
    'caption',
    null,
    props.children
  );
};

Caption.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string])
};

exports.default = Caption;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTransitionGroup = __webpack_require__(26);

var _reactFlipMove = __webpack_require__(35);

var _reactFlipMove2 = _interopRequireDefault(_reactFlipMove);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _row = __webpack_require__(36);

var _row2 = _interopRequireDefault(_row);

var _rowSection = __webpack_require__(40);

var _rowSection2 = _interopRequireDefault(_rowSection);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(props) {
  var columns = props.columns,
      data = props.data,
      keyField = props.keyField,
      isEmpty = props.isEmpty,
      noDataIndication = props.noDataIndication,
      visibleColumnSize = props.visibleColumnSize,
      cellEdit = props.cellEdit,
      selectRow = props.selectRow,
      selectedRowKeys = props.selectedRowKeys,
      rowStyle = props.rowStyle,
      rowClasses = props.rowClasses,
      rowEvents = props.rowEvents;
  var bgColor = selectRow.bgColor,
      nonSelectable = selectRow.nonSelectable;


  var content = void 0;

  if (isEmpty) {
    var indication = _utils2.default.isFunction(noDataIndication) ? noDataIndication() : noDataIndication;
    if (!indication) {
      return null;
    }
    content = _react2.default.createElement(_rowSection2.default, { content: indication, colSpan: visibleColumnSize });
  } else {
    var nonEditableRows = cellEdit.nonEditableRows || [];
    content = data.map(function (row, index) {
      var key = _utils2.default.get(row, keyField);
      var editable = !(nonEditableRows.length > 0 && nonEditableRows.indexOf(key) > -1);

      var selected = selectRow.mode !== _const2.default.ROW_SELECT_DISABLED ? selectedRowKeys.includes(key) : null;

      var attrs = rowEvents || {};
      var style = _utils2.default.isFunction(rowStyle) ? rowStyle(row, index) : rowStyle;
      var classes = _utils2.default.isFunction(rowClasses) ? rowClasses(row, index) : rowClasses;
      if (selected) {
        var selectedStyle = _utils2.default.isFunction(selectRow.style) ? selectRow.style(row, index) : selectRow.style;

        var selectedClasses = _utils2.default.isFunction(selectRow.classes) ? selectRow.classes(row, index) : selectRow.classes;

        style = _extends({}, style, selectedStyle);
        classes = (0, _classnames2.default)(classes, selectedClasses);

        if (bgColor) {
          style = style || {};
          style.backgroundColor = _utils2.default.isFunction(bgColor) ? bgColor(row, index) : bgColor;
        }
      }

      var selectable = !nonSelectable || !nonSelectable.includes(key);

      return _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        {
          key: 'css-transition-' + key,
          classNames: 'tr',
          timeout: 500
        },
        _react2.default.createElement(
          _reactFlipMove2.default,
          { typeName: null },
          _react2.default.createElement(_row2.default, {
            key: key,
            row: row,
            keyField: keyField,
            rowIndex: index,
            columns: columns,
            cellEdit: cellEdit,
            editable: editable,
            selectable: selectable,
            selected: selected,
            selectRow: selectRow,
            style: style,
            className: classes,
            attrs: attrs
          })
        )
      );
    });
  }

  return _react2.default.createElement(
    _reactTransitionGroup.TransitionGroup,
    {
      component: 'tbody'
    },
    content
  );
};

Body.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  selectRow: _propTypes2.default.object,
  selectedRowKeys: _propTypes2.default.array
};

exports.default = Body;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = __webpack_require__(27);

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

var _ReplaceTransition = __webpack_require__(33);

var _ReplaceTransition2 = _interopRequireDefault(_ReplaceTransition);

var _TransitionGroup = __webpack_require__(12);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _Transition = __webpack_require__(10);

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition2.default,
  TransitionGroup: _TransitionGroup2.default,
  ReplaceTransition: _ReplaceTransition2.default,
  CSSTransition: _CSSTransition2.default
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(4);

var PropTypes = _interopRequireWildcard(_propTypes);

var _addClass = __webpack_require__(30);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(32);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Transition = __webpack_require__(10);

var _Transition2 = _interopRequireDefault(_Transition);

var _PropTypes = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass2.default)(node, c);
  });
};
var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass2.default)(node, c);
  });
};

var propTypes = _extends({}, _Transition2.default.propTypes, {

  /**
   * The animation classNames applied to the component as it enters, exits or has finished the transition.
   * A single name can be provided and it will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
});

/**
 * A `Transition` component using CSS transitions and animations.
 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` stages of the transition. The first class is applied and then a
 * second "active" class in order to activate the css animation. After the animation,
 * matching `done` class names are applied to persist the animation state.
 *
 * When the `in` prop is toggled to `true` the Component will get
 * the `example-enter` CSS class and the `example-enter-active` CSS class
 * added in the next tick. This is a convention based on the `classNames` prop.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/m77l2vp00x?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 */

var CSSTransition = function (_React$Component) {
  _inherits(CSSTransition, _React$Component);

  function CSSTransition() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');
      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');
      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    }, _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');
      _this.removeClasses(node, 'enter');
      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    }, _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');
      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    }, _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;


      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;

      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';

      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';

      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransition.prototype.removeClasses = function removeClasses(node, type) {
    var _getClassNames = this.getClassNames(type),
        className = _getClassNames.className,
        activeClassName = _getClassNames.activeClassName,
        doneClassName = _getClassNames.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  CSSTransition.prototype.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    /* eslint-disable no-unused-expressions */
    node && node.scrollTop;
    /* eslint-enable no-unused-expressions */
    addClass(node, className);
  };

  CSSTransition.prototype.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;

    return _react2.default.createElement(_Transition2.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react2.default.Component);

CSSTransition.propTypes =  false ? propTypes : {};

exports.default = CSSTransition;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(8);
var invariant = __webpack_require__(9);
var ReactPropTypesSecret = __webpack_require__(29);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(31);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _TransitionGroup = __webpack_require__(12);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  in: _propTypes2.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react2.default.Children.count(props[propName]) !== 2) return new Error('"' + propName + '" must be exactly two transition components.');

    return null;
  }
};

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = function (_React$Component) {
  _inherits(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _temp, _this, _ret;

    _classCallCheck(this, ReplaceTransition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  ReplaceTransition.prototype.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react2.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  ReplaceTransition.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        inProp = _props.in,
        props = _objectWithoutProperties(_props, ['children', 'in']);

    var _React$Children$toArr = _react2.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;

    return _react2.default.createElement(
      _TransitionGroup2.default,
      props,
      inProp ? _react2.default.cloneElement(first, {
        key: 'first',
        onEnter: this.handleEnter,
        onEntering: this.handleEntering,
        onEntered: this.handleEntered

      }) : _react2.default.cloneElement(second, {
        key: 'second',
        onEnter: this.handleExit,
        onEntering: this.handleExiting,
        onEntered: this.handleExited
      })
    );
  };

  return ReplaceTransition;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleEnter = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _this2.handleLifecycle('onEnter', 0, args);
  };

  this.handleEntering = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _this2.handleLifecycle('onEntering', 0, args);
  };

  this.handleEntered = function () {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _this2.handleLifecycle('onEntered', 0, args);
  };

  this.handleExit = function () {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return _this2.handleLifecycle('onExit', 1, args);
  };

  this.handleExiting = function () {
    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return _this2.handleLifecycle('onExiting', 1, args);
  };

  this.handleExited = function () {
    for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    return _this2.handleLifecycle('onExited', 1, args);
  };
};

ReplaceTransition.propTypes =  false ? propTypes : {};

exports.default = ReplaceTransition;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = Object.create(null);

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);



function warnOnce(msg) {
  var hasWarned = false;
  return function () {
    if (!hasWarned) {
      console.warn(msg);
      hasWarned = true;
    }
  };
}


var statelessFunctionalComponentSupplied = warnOnce('\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren\'t supported, because Flip Move needs access to the backing instances via refs, and SFCs don\'t have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n');

var primitiveNodeSupplied = warnOnce('\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n');

var invalidTypeForTimingProp = function invalidTypeForTimingProp(args
// prettier-ignore
) {
  return console.error('\n>> Error, via react-flip-move <<\n\nThe prop you provided for \'' + args.prop + '\' is invalid. It needs to be a positive integer, or a string that can be resolved to a number. The value you provided is \'' + args.value + '\'.\n\nAs a result,  the default value for this parameter will be used, which is \'' + args.defaultValue + '\'.\n');
};

var invalidEnterLeavePreset = function invalidEnterLeavePreset(args
// prettier-ignore
) {
  return console.error('\n>> Error, via react-flip-move <<\n\nThe enter/leave preset you provided is invalid. We don\'t currently have a \'' + args.value + ' preset.\'\n\nAcceptable values are ' + args.acceptableValues + '. The default value of \'' + args.defaultValue + '\' will be used.\n');
};

var parentNodePositionStatic = warnOnce('\n>> Warning, via react-flip-move <<\n\nWhen using "wrapperless" mode (by supplying \'typeName\' of \'null\'), strange things happen when the direct parent has the default "static" position.\n\nFlipMove has added \'position: relative\' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n');

var childIsDisabled = warnOnce('\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move\'s child elements have the html attribute \'disabled\' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set \'animation\' to false.\n');

var enterPresets = {
  elevator: {
    from: { transform: 'scale(0)', opacity: '0' },
    to: { transform: '', opacity: '' }
  },
  fade: {
    from: { opacity: '0' },
    to: { opacity: '' }
  },
  accordionVertical: {
    from: { transform: 'scaleY(0)', transformOrigin: 'center top' },
    to: { transform: '', transformOrigin: 'center top' }
  },
  accordionHorizontal: {
    from: { transform: 'scaleX(0)', transformOrigin: 'left center' },
    to: { transform: '', transformOrigin: 'left center' }
  },
  none: null
};
/**
 * React Flip Move | enterLeavePresets
 * (c) 2016-present Joshua Comeau
 *
 * This contains the master list of presets available for enter/leave animations,
 * along with the mapping between preset and styles.
 */


var leavePresets = {
  elevator: {
    from: { transform: 'scale(1)', opacity: '1' },
    to: { transform: 'scale(0)', opacity: '0' }
  },
  fade: {
    from: { opacity: '1' },
    to: { opacity: '0' }
  },
  accordionVertical: {
    from: { transform: 'scaleY(1)', transformOrigin: 'center top' },
    to: { transform: 'scaleY(0)', transformOrigin: 'center top' }
  },
  accordionHorizontal: {
    from: { transform: 'scaleX(1)', transformOrigin: 'left center' },
    to: { transform: 'scaleX(0)', transformOrigin: 'left center' }
  },
  none: null
};

// For now, appearPresets will be identical to enterPresets.
// Assigning a custom export in case we ever want to add appear-specific ones.
var appearPresets = enterPresets;

var defaultPreset = 'elevator';
var disablePreset = 'none';

var find = function find(predicate, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }

  return undefined;
};


var every = function every(predicate, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!predicate(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line import/no-mutable-exports
var _isArray = function isArray(arr) {
  _isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
  return _isArray(arr);
};

var isElementAnSFC = function isElementAnSFC(element) {
  var isNativeDOMElement = typeof element.type === 'string';

  if (isNativeDOMElement) {
    return false;
  }

  return !element.type.prototype.isReactComponent;
};

function omit(obj) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (attrs.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

function arraysEqual(a, b) {
  var sameObject = a === b;
  if (sameObject) {
    return true;
  }

  var notBothArrays = !_isArray(a) || !_isArray(b);
  var differentLengths = a.length !== b.length;

  if (notBothArrays || differentLengths) {
    return false;
  }

  return every(function (element, index) {
    return element === b[index];
  }, a);
}

function memoizeString(fn) {
  var cache = {};

  return function (str) {
    if (!cache[str]) {
      cache[str] = fn(str);
    }
    return cache[str];
  };
}

var hyphenate = memoizeString(function (str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * React Flip Move | propConverter
 * (c) 2016-present Joshua Comeau
 *
 * Abstracted away a bunch of the messy business with props.
 *   - props flow types and defaultProps
 *   - Type conversion (We accept 'string' and 'number' values for duration,
 *     delay, and other fields, but we actually need them to be ints.)
 *   - Children conversion (we need the children to be an array. May not always
 *     be, if a single child is passed in.)
 *   - Resolving animation presets into their base CSS styles
 */
/* eslint-disable block-scoped-var */

// eslint-disable-next-line no-duplicate-imports


function propConverter(ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(FlipMovePropConverter, _Component);

    function FlipMovePropConverter() {
      classCallCheck(this, FlipMovePropConverter);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    // eslint-disable-next-line class-methods-use-this
    FlipMovePropConverter.prototype.checkChildren = function checkChildren(children) {
      // Skip all console warnings in production.
      // Bail early, to avoid unnecessary work.
      if (true) {
        return;
      }

      // same as React.Node, but without fragments, see https://github.com/facebook/flow/issues/4781


      // FlipMove does not support stateless functional components.
      // Check to see if any supplied components won't work.
      // If the child doesn't have a key, it means we aren't animating it.
      // It's allowed to be an SFC, since we ignore it.
      __WEBPACK_IMPORTED_MODULE_0_react__["Children"].forEach(children, function (child) {
        // null, undefined, and booleans will be filtered out by Children.toArray
        if (child == null || typeof child === 'boolean') {
          return;
        }

        if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object') {
          primitiveNodeSupplied();
          return;
        }

        if (isElementAnSFC(child) && child.key != null) {
          statelessFunctionalComponentSupplied();
        }
      });
    };

    FlipMovePropConverter.prototype.convertProps = function convertProps(props) {
      var workingProps = {
        // explicitly bypass the props that don't need conversion
        children: props.children,
        easing: props.easing,
        onStart: props.onStart,
        onFinish: props.onFinish,
        onStartAll: props.onStartAll,
        onFinishAll: props.onFinishAll,
        typeName: props.typeName,
        disableAllAnimations: props.disableAllAnimations,
        getPosition: props.getPosition,
        maintainContainerHeight: props.maintainContainerHeight,
        verticalAlignment: props.verticalAlignment,

        // Do string-to-int conversion for all timing-related props
        duration: this.convertTimingProp('duration'),
        delay: this.convertTimingProp('delay'),
        staggerDurationBy: this.convertTimingProp('staggerDurationBy'),
        staggerDelayBy: this.convertTimingProp('staggerDelayBy'),

        // Our enter/leave animations can be specified as boolean (default or
        // disabled), string (preset name), or object (actual animation values).
        // Let's standardize this so that they're always objects
        appearAnimation: this.convertAnimationProp(props.appearAnimation, appearPresets),
        enterAnimation: this.convertAnimationProp(props.enterAnimation, enterPresets),
        leaveAnimation: this.convertAnimationProp(props.leaveAnimation, leavePresets),

        delegated: {}
      };

      this.checkChildren(workingProps.children);

      // Gather any additional props;
      // they will be delegated to the ReactElement created.
      var primaryPropKeys = Object.keys(workingProps);
      var delegatedProps = omit(this.props, primaryPropKeys);

      // The FlipMove container element needs to have a non-static position.
      // We use `relative` by default, but it can be overridden by the user.
      // Now that we're delegating props, we need to merge this in.
      delegatedProps.style = _extends({
        position: 'relative'
      }, delegatedProps.style);

      workingProps.delegated = delegatedProps;

      return workingProps;
    };

    FlipMovePropConverter.prototype.convertTimingProp = function convertTimingProp(prop) {
      var rawValue = this.props[prop];

      var value = typeof rawValue === 'number' ? rawValue : parseInt(rawValue, 10);

      if (isNaN(value)) {
        var defaultValue = FlipMovePropConverter.defaultProps[prop];

        if (false) {
          invalidTypeForTimingProp({
            prop: prop,
            value: rawValue,
            defaultValue: defaultValue
          });
        }

        return defaultValue;
      }

      return value;
    };

    // eslint-disable-next-line class-methods-use-this


    FlipMovePropConverter.prototype.convertAnimationProp = function convertAnimationProp(animation, presets) {
      switch (typeof animation === 'undefined' ? 'undefined' : _typeof(animation)) {
        case 'boolean':
          {
            // If it's true, we want to use the default preset.
            // If it's false, we want to use the 'none' preset.
            return presets[animation ? defaultPreset : disablePreset];
          }

        case 'string':
          {
            var presetKeys = Object.keys(presets);

            if (presetKeys.indexOf(animation) === -1) {
              if (false) {
                invalidEnterLeavePreset({
                  value: animation,
                  acceptableValues: presetKeys.join(', '),
                  defaultValue: defaultPreset
                });
              }

              return presets[defaultPreset];
            }

            return presets[animation];
          }

        default:
          {
            return animation;
          }
      }
    };

    FlipMovePropConverter.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComposedComponent, this.convertProps(this.props));
    };

    return FlipMovePropConverter;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.defaultProps = {
    easing: 'ease-in-out',
    duration: 350,
    delay: 0,
    staggerDurationBy: 0,
    staggerDelayBy: 0,
    typeName: 'div',
    enterAnimation: defaultPreset,
    leaveAnimation: defaultPreset,
    disableAllAnimations: false,
    getPosition: function getPosition(node) {
      return node.getBoundingClientRect();
    },
    maintainContainerHeight: false,
    verticalAlignment: 'top'
  }, _temp;
}

/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 *
 * These methods read from and write to the DOM.
 * They almost always have side effects, and will hopefully become the
 * only spot in the codebase with impure functions.
 */
function applyStylesToDOMNode(_ref) {
  var domNode = _ref.domNode,
      styles = _ref.styles;

  // Can't just do an object merge because domNode.styles is no regular object.
  // Need to do it this way for the engine to fire its `set` listeners.
  Object.keys(styles).forEach(function (key) {
    domNode.style.setProperty(hyphenate(key), styles[key]);
  });
}

// Modified from Modernizr
function whichTransitionEvent() {
  var transitions = {
    transition: 'transitionend',
    '-o-transition': 'oTransitionEnd',
    '-moz-transition': 'transitionend',
    '-webkit-transition': 'webkitTransitionEnd'
  };

  // If we're running in a browserless environment (eg. SSR), it doesn't apply.
  // Return a placeholder string, for consistent type return.
  if (typeof document === 'undefined') return '';

  var el = document.createElement('fakeelement');

  var match = find(function (t) {
    return el.style.getPropertyValue(t) !== undefined;
  }, Object.keys(transitions));

  // If no `transition` is found, we must be running in a browser so ancient,
  // React itself won't run. Return an empty string, for consistent type return
  return match ? transitions[match] : '';
}

var getRelativeBoundingBox = function getRelativeBoundingBox(_ref2) {
  var childDomNode = _ref2.childDomNode,
      parentDomNode = _ref2.parentDomNode,
      getPosition = _ref2.getPosition;

  var parentBox = getPosition(parentDomNode);

  var _getPosition = getPosition(childDomNode),
      top = _getPosition.top,
      left = _getPosition.left,
      right = _getPosition.right,
      bottom = _getPosition.bottom,
      width = _getPosition.width,
      height = _getPosition.height;

  return {
    top: top - parentBox.top,
    left: left - parentBox.left,
    right: parentBox.right - right,
    bottom: parentBox.bottom - bottom,
    width: width,
    height: height
  };
};

/** getPositionDelta
 * This method returns the delta between two bounding boxes, to figure out
 * how many pixels on each axis the element has moved.
 *
 */
var getPositionDelta = function getPositionDelta(_ref3) {
  var childDomNode = _ref3.childDomNode,
      childBoundingBox = _ref3.childBoundingBox,
      parentBoundingBox = _ref3.parentBoundingBox,
      getPosition = _ref3.getPosition;

  // TEMP: A mystery bug is sometimes causing unnecessary boundingBoxes to
  var defaultBox = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 0,
    width: 0
  };

  // Our old box is its last calculated position, derived on mount or at the
  // start of the previous animation.
  var oldRelativeBox = childBoundingBox || defaultBox;
  var parentBox = parentBoundingBox || defaultBox;

  // Our new box is the new final resting place: Where we expect it to wind up
  // after the animation. First we get the box in absolute terms (AKA relative
  // to the viewport), and then we calculate its relative box (relative to the
  // parent container)
  var newAbsoluteBox = getPosition(childDomNode);
  var newRelativeBox = {
    top: newAbsoluteBox.top - parentBox.top,
    left: newAbsoluteBox.left - parentBox.left
  };

  return [oldRelativeBox.left - newRelativeBox.left, oldRelativeBox.top - newRelativeBox.top];
};

/** removeNodeFromDOMFlow
 * This method does something very sneaky: it removes a DOM node from the
 * document flow, but without actually changing its on-screen position.
 *
 * It works by calculating where the node is, and then applying styles
 * so that it winds up being positioned absolutely, but in exactly the
 * same place.
 *
 * This is a vital part of the FLIP technique.
 */
var removeNodeFromDOMFlow = function removeNodeFromDOMFlow(childData, verticalAlignment) {
  var domNode = childData.domNode,
      boundingBox = childData.boundingBox;


  if (!domNode || !boundingBox) {
    return;
  }

  // For this to work, we have to offset any given `margin`.
  var computed = window.getComputedStyle(domNode);

  // We need to clean up margins, by converting and removing suffix:
  // eg. '21px' -> 21
  var marginAttrs = ['margin-top', 'margin-left', 'margin-right'];
  var margins = marginAttrs.reduce(function (acc, margin) {
    var _babelHelpers$extends;

    var propertyVal = computed.getPropertyValue(margin);

    return _extends({}, acc, (_babelHelpers$extends = {}, _babelHelpers$extends[margin] = Number(propertyVal.replace('px', '')), _babelHelpers$extends));
  }, {});

  // If we're bottom-aligned, we need to add the height of the child to its
  // top offset. This is because, when the container is bottom-aligned, its
  // height shrinks from the top, not the bottom. We're removing this node
  // from the flow, so the top is going to drop by its height.
  var topOffset = verticalAlignment === 'bottom' ? boundingBox.top - boundingBox.height : boundingBox.top;

  var styles = {
    position: 'absolute',
    top: topOffset - margins['margin-top'] + 'px',
    left: boundingBox.left - margins['margin-left'] + 'px',
    right: boundingBox.right - margins['margin-right'] + 'px'
  };

  applyStylesToDOMNode({ domNode: domNode, styles: styles });
};

/** updateHeightPlaceholder
 * An optional property to FlipMove is a `maintainContainerHeight` boolean.
 * This property creates a node that fills space, so that the parent
 * container doesn't collapse when its children are removed from the
 * document flow.
 */
var updateHeightPlaceholder = function updateHeightPlaceholder(_ref4) {
  var domNode = _ref4.domNode,
      parentData = _ref4.parentData,
      getPosition = _ref4.getPosition;

  var parentDomNode = parentData.domNode;
  var parentBoundingBox = parentData.boundingBox;

  if (!parentDomNode || !parentBoundingBox) {
    return;
  }

  // We need to find the height of the container *without* the placeholder.
  // Since it's possible that the placeholder might already be present,
  // we first set its height to 0.
  // This allows the container to collapse down to the size of just its
  // content (plus container padding or borders if any).
  applyStylesToDOMNode({ domNode: domNode, styles: { height: '0' } });

  // Find the distance by which the container would be collapsed by elements
  // leaving. We compare the freshly-available parent height with the original,
  // cached container height.
  var originalParentHeight = parentBoundingBox.height;
  var collapsedParentHeight = getPosition(parentDomNode).height;
  var reductionInHeight = originalParentHeight - collapsedParentHeight;

  // If the container has become shorter, update the padding element's
  // height to take up the difference. Otherwise set its height to zero,
  // so that it has no effect.
  var styles = {
    height: reductionInHeight > 0 ? reductionInHeight + 'px' : '0'
  };

  applyStylesToDOMNode({ domNode: domNode, styles: styles });
};

var getNativeNode = function getNativeNode(element) {
  // When running in a windowless environment, abort!
  if (typeof HTMLElement === 'undefined') {
    return null;
  }

  // `element` may already be a native node.
  if (element instanceof HTMLElement) {
    return element;
  }

  // While ReactDOM's `findDOMNode` is discouraged, it's the only
  // publicly-exposed way to find the underlying DOM node for
  // composite components.
  var foundNode = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(element);

  if (foundNode && foundNode.nodeType === Node.TEXT_NODE) {
    // Text nodes are not supported
    return null;
  }
  // eslint-disable-next-line flowtype/no-weak-types
  return foundNode;
};

var createTransitionString = function createTransitionString(index, props) {
  var delay = props.delay,
      duration = props.duration;
  var staggerDurationBy = props.staggerDurationBy,
      staggerDelayBy = props.staggerDelayBy,
      easing = props.easing;


  delay += index * staggerDelayBy;
  duration += index * staggerDurationBy;

  var cssProperties = ['transform', 'opacity'];

  return cssProperties.map(function (prop) {
    return prop + ' ' + duration + 'ms ' + easing + ' ' + delay + 'ms';
  }).join(', ');
};

/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 *
 * For information on how this code is laid out, check out CODE_TOUR.md
 */

/* eslint-disable react/prop-types */

// eslint-disable-next-line no-duplicate-imports


var transitionEnd = whichTransitionEvent();
var noBrowserSupport = !transitionEnd;

function getKey(childData) {
  return childData.key || '';
}

function getElementChildren(children) {
  // Fix incomplete typing of Children.toArray
  // eslint-disable-next-line flowtype/no-weak-types
  return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].toArray(children);
}

var FlipMove$1 = function (_Component) {
  inherits(FlipMove, _Component);

  function FlipMove() {
    var _temp, _this, _ret;

    classCallCheck(this, FlipMove);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      children: getElementChildren(
      // `this.props` ought to always be defined at this point, but a report
      // was made about it not being defined in IE10.
      // TODO: Test in IE10, to see if there's an underlying cause that can
      // be addressed.
      _this.props ? _this.props.children : []).map(function (element) {
        return _extends({}, element, {
          element: element,
          appearing: true
        });
      })
    }, _this.childrenData = {}, _this.parentData = {
      domNode: null,
      boundingBox: null
    }, _this.heightPlaceholderData = {
      domNode: null
    }, _this.remainingAnimations = 0, _this.childrenToAnimate = [], _this.findDOMContainer = function () {
      // eslint-disable-next-line react/no-find-dom-node
      var domNode = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(_this);
      var parentNode = domNode && domNode.parentNode;

      // This ought to be impossible, but handling it for Flow's sake.
      if (!parentNode || !(parentNode instanceof HTMLElement)) {
        return;
      }

      // If the parent node has static positioning, leave animations might look
      // really funky. Let's automatically apply `position: relative` in this
      // case, to prevent any quirkiness.
      if (window.getComputedStyle(parentNode).position === 'static') {
        parentNode.style.position = 'relative';
        parentNodePositionStatic();
      }

      _this.parentData.domNode = parentNode;
    }, _this.runAnimation = function () {
      var dynamicChildren = _this.state.children.filter(_this.doesChildNeedToBeAnimated);

      // Splitting DOM reads and writes to be peformed in batches
      var childrenInitialStyles = dynamicChildren.map(function (child) {
        return _this.computeInitialStyles(child);
      });
      dynamicChildren.forEach(function (child, index) {
        _this.remainingAnimations += 1;
        _this.childrenToAnimate.push(getKey(child));
        _this.animateChild(child, index, childrenInitialStyles[index]);
      });

      if (typeof _this.props.onStartAll === 'function') {
        _this.callChildrenHook(_this.props.onStartAll);
      }
    }, _this.doesChildNeedToBeAnimated = function (child) {
      // If the child doesn't have a key, it's an immovable child (one that we
      // do not want to do FLIP stuff to.)
      if (!getKey(child)) {
        return false;
      }

      var childData = _this.getChildData(getKey(child));
      var childDomNode = childData.domNode;
      var childBoundingBox = childData.boundingBox;
      var parentBoundingBox = _this.parentData.boundingBox;

      if (!childDomNode) {
        return false;
      }

      var _this$props = _this.props,
          appearAnimation = _this$props.appearAnimation,
          enterAnimation = _this$props.enterAnimation,
          leaveAnimation = _this$props.leaveAnimation,
          getPosition = _this$props.getPosition;


      var isAppearingWithAnimation = child.appearing && appearAnimation;
      var isEnteringWithAnimation = child.entering && enterAnimation;
      var isLeavingWithAnimation = child.leaving && leaveAnimation;

      if (isAppearingWithAnimation || isEnteringWithAnimation || isLeavingWithAnimation) {
        return true;
      }

      // If it isn't entering/leaving, we want to animate it if it's
      // on-screen position has changed.

      var _getPositionDelta = getPositionDelta({
        childDomNode: childDomNode,
        childBoundingBox: childBoundingBox,
        parentBoundingBox: parentBoundingBox,
        getPosition: getPosition
      }),
          dX = _getPositionDelta[0],
          dY = _getPositionDelta[1];

      return dX !== 0 || dY !== 0;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // Copy props.children into state.
  // To understand why this is important (and not an anti-pattern), consider
  // how "leave" animations work. An item has "left" when the component
  // receives a new set of props that do NOT contain the item.
  // If we just render the props as-is, the item would instantly disappear.
  // We want to keep the item rendered for a little while, until its animation
  // can complete. Because we cannot mutate props, we make `state` the source
  // of truth.


  // FlipMove needs to know quite a bit about its children in order to do
  // its job. We store these as a property on the instance. We're not using
  // state, because we don't want changes to trigger re-renders, we just
  // need a place to keep the data for reference, when changes happen.
  // This field should not be accessed directly. Instead, use getChildData,
  // putChildData, etc...


  // Similarly, track the dom node and box of our parent element.


  // If `maintainContainerHeight` prop is set to true, we'll create a
  // placeholder element which occupies space so that the parent height
  // doesn't change when items are removed from the document flow (which
  // happens during leave animations)


  // Keep track of remaining animations so we know when to fire the
  // all-finished callback, and clean up after ourselves.
  // NOTE: we can't simply use childrenToAnimate.length to track remaining
  // animations, because we need to maintain the list of animating children,
  // to pass to the `onFinishAll` handler.


  FlipMove.prototype.componentDidMount = function componentDidMount() {
    // Because React 16 no longer requires wrapping elements, Flip Move can opt
    // to not wrap the children in an element. In that case, find the parent
    // element using `findDOMNode`.
    if (this.props.typeName === null) {
      this.findDOMContainer();
    }

    // Run our `appearAnimation` if it was requested, right after the
    // component mounts.
    var shouldTriggerFLIP = this.props.appearAnimation && !this.isAnimationDisabled(this.props);

    if (shouldTriggerFLIP) {
      this.prepForAnimation();
      this.runAnimation();
    }
  };

  FlipMove.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // When the component is handed new props, we need to figure out the
    // "resting" position of all currently-rendered DOM nodes.
    // We store that data in this.parent and this.children,
    // so it can be used later to work out the animation.
    this.updateBoundingBoxCaches();

    // Convert opaque children object to array.
    var nextChildren = getElementChildren(nextProps.children);

    // Next, we need to update our state, so that it contains our new set of
    // children. If animation is disabled or unsupported, this is easy;
    // we just copy our props into state.
    // Assuming that we can animate, though, we have to do some work.
    // Essentially, we want to keep just-deleted nodes in the DOM for a bit
    // longer, so that we can animate them away.
    this.setState({
      children: this.isAnimationDisabled(nextProps) ? nextChildren.map(function (element) {
        return _extends({}, element, { element: element });
      }) : this.calculateNextSetOfChildren(nextChildren)
    });
  };

  FlipMove.prototype.componentDidUpdate = function componentDidUpdate(previousProps) {
    if (this.props.typeName === null) {
      this.findDOMContainer();
    }
    // If the children have been re-arranged, moved, or added/removed,
    // trigger the main FLIP animation.
    //
    // IMPORTANT: We need to make sure that the children have actually changed.
    // At the end of the transition, we clean up nodes that need to be removed.
    // We DON'T want this cleanup to trigger another update.

    var oldChildrenKeys = getElementChildren(this.props.children).map(function (d) {
      return d.key;
    });
    var nextChildrenKeys = getElementChildren(previousProps.children).map(function (d) {
      return d.key;
    });

    var shouldTriggerFLIP = !arraysEqual(oldChildrenKeys, nextChildrenKeys) && !this.isAnimationDisabled(this.props);

    if (shouldTriggerFLIP) {
      this.prepForAnimation();
      this.runAnimation();
    }
  };

  FlipMove.prototype.calculateNextSetOfChildren = function calculateNextSetOfChildren(nextChildren) {
    var _this2 = this;

    // We want to:
    //   - Mark all new children as `entering`
    //   - Pull in previous children that aren't in nextChildren, and mark them
    //     as `leaving`
    //   - Preserve the nextChildren list order, with leaving children in their
    //     appropriate places.
    //

    var updatedChildren = nextChildren.map(function (nextChild) {
      var child = _this2.findChildByKey(nextChild.key);

      // If the current child did exist, but it was in the midst of leaving,
      // we want to treat it as though it's entering
      var isEntering = !child || child.leaving;

      return _extends({}, nextChild, { element: nextChild, entering: isEntering });
    });

    // This is tricky. We want to keep the nextChildren's ordering, but with
    // any just-removed items maintaining their original position.
    // eg.
    //   this.state.children  = [ 1, 2, 3, 4 ]
    //   nextChildren         = [ 3, 1 ]
    //
    // In this example, we've removed the '2' & '4'
    // We want to end up with:  [ 2, 3, 1, 4 ]
    //
    // To accomplish that, we'll iterate through this.state.children. whenever
    // we find a match, we'll append our `leaving` flag to it, and insert it
    // into the nextChildren in its ORIGINAL position. Note that, as we keep
    // inserting old items into the new list, the "original" position will
    // keep incrementing.
    var numOfChildrenLeaving = 0;
    this.state.children.forEach(function (child, index) {
      var isLeaving = !find(function (_ref) {
        var key = _ref.key;
        return key === getKey(child);
      }, nextChildren);

      // If the child isn't leaving (or, if there is no leave animation),
      // we don't need to add it into the state children.
      if (!isLeaving || !_this2.props.leaveAnimation) return;

      var nextChild = _extends({}, child, { leaving: true });
      var nextChildIndex = index + numOfChildrenLeaving;

      updatedChildren.splice(nextChildIndex, 0, nextChild);
      numOfChildrenLeaving += 1;
    });

    return updatedChildren;
  };

  FlipMove.prototype.prepForAnimation = function prepForAnimation() {
    var _this3 = this;

    // Our animation prep consists of:
    // - remove children that are leaving from the DOM flow, so that the new
    //   layout can be accurately calculated,
    // - update the placeholder container height, if needed, to ensure that
    //   the parent's height doesn't collapse.

    var _props = this.props,
        leaveAnimation = _props.leaveAnimation,
        maintainContainerHeight = _props.maintainContainerHeight,
        getPosition = _props.getPosition;

    // we need to make all leaving nodes "invisible" to the layout calculations
    // that will take place in the next step (this.runAnimation).

    if (leaveAnimation) {
      var leavingChildren = this.state.children.filter(function (child) {
        return child.leaving;
      });

      leavingChildren.forEach(function (leavingChild) {
        var childData = _this3.getChildData(getKey(leavingChild));

        // Warn if child is disabled
        if (!_this3.isAnimationDisabled(_this3.props) && childData.domNode && childData.domNode.disabled) {
          childIsDisabled();
        }

        // We need to take the items out of the "flow" of the document, so that
        // its siblings can move to take its place.
        if (childData.boundingBox) {
          removeNodeFromDOMFlow(childData, _this3.props.verticalAlignment);
        }
      });

      if (maintainContainerHeight && this.heightPlaceholderData.domNode) {
        updateHeightPlaceholder({
          domNode: this.heightPlaceholderData.domNode,
          parentData: this.parentData,
          getPosition: getPosition
        });
      }
    }

    // For all children not in the middle of entering or leaving,
    // we need to reset the transition, so that the NEW shuffle starts from
    // the right place.
    this.state.children.forEach(function (child) {
      var _getChildData = _this3.getChildData(getKey(child)),
          domNode = _getChildData.domNode;

      // Ignore children that don't render DOM nodes (eg. by returning null)


      if (!domNode) {
        return;
      }

      if (!child.entering && !child.leaving) {
        applyStylesToDOMNode({
          domNode: domNode,
          styles: {
            transition: ''
          }
        });
      }
    });
  };

  FlipMove.prototype.animateChild = function animateChild(child, index, childInitialStyles) {
    var _this4 = this;

    var _getChildData2 = this.getChildData(getKey(child)),
        domNode = _getChildData2.domNode;

    if (!domNode) {
      return;
    }

    // Apply the relevant style for this DOM node
    // This is the offset from its actual DOM position.
    // eg. if an item has been re-rendered 20px lower, we want to apply a
    // style of 'transform: translate(-20px)', so that it appears to be where
    // it started.
    // In FLIP terminology, this is the 'Invert' stage.
    applyStylesToDOMNode({
      domNode: domNode,
      styles: childInitialStyles
    });

    // Start by invoking the onStart callback for this child.
    if (this.props.onStart) this.props.onStart(child, domNode);

    // Next, animate the item from it's artificially-offset position to its
    // new, natural position.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        // NOTE, RE: the double-requestAnimationFrame:
        // Sadly, this is the most browser-compatible way to do this I've found.
        // Essentially we need to set the initial styles outside of any request
        // callbacks to avoid batching them. Then, a frame needs to pass with
        // the styles above rendered. Then, on the second frame, we can apply
        // our final styles to perform the animation.

        // Our first order of business is to "undo" the styles applied in the
        // previous frames, while also adding a `transition` property.
        // This way, the item will smoothly transition from its old position
        // to its new position.

        // eslint-disable-next-line flowtype/require-variable-type
        var styles = {
          transition: createTransitionString(index, _this4.props),
          transform: '',
          opacity: ''
        };

        if (child.appearing && _this4.props.appearAnimation) {
          styles = _extends({}, styles, _this4.props.appearAnimation.to);
        } else if (child.entering && _this4.props.enterAnimation) {
          styles = _extends({}, styles, _this4.props.enterAnimation.to);
        } else if (child.leaving && _this4.props.leaveAnimation) {
          styles = _extends({}, styles, _this4.props.leaveAnimation.to);
        }

        // In FLIP terminology, this is the 'Play' stage.
        applyStylesToDOMNode({ domNode: domNode, styles: styles });
      });
    });

    this.bindTransitionEndHandler(child);
  };

  FlipMove.prototype.bindTransitionEndHandler = function bindTransitionEndHandler(child) {
    var _this5 = this;

    var _getChildData3 = this.getChildData(getKey(child)),
        domNode = _getChildData3.domNode;

    if (!domNode) {
      return;
    }

    // The onFinish callback needs to be bound to the transitionEnd event.
    // We also need to unbind it when the transition completes, so this ugly
    // inline function is required (we need it here so it closes over
    // dependent variables `child` and `domNode`)
    var transitionEndHandler = function transitionEndHandler(ev) {
      // It's possible that this handler is fired not on our primary transition,
      // but on a nested transition (eg. a hover effect). Ignore these cases.
      if (ev.target !== domNode) return;

      // Remove the 'transition' inline style we added. This is cleanup.
      domNode.style.transition = '';

      // Trigger any applicable onFinish/onFinishAll hooks
      _this5.triggerFinishHooks(child, domNode);

      domNode.removeEventListener(transitionEnd, transitionEndHandler);

      if (child.leaving) {
        _this5.removeChildData(getKey(child));
      }
    };

    domNode.addEventListener(transitionEnd, transitionEndHandler);
  };

  FlipMove.prototype.triggerFinishHooks = function triggerFinishHooks(child, domNode) {
    var _this6 = this;

    if (this.props.onFinish) this.props.onFinish(child, domNode);

    // Reduce the number of children we need to animate by 1,
    // so that we can tell when all children have finished.
    this.remainingAnimations -= 1;

    if (this.remainingAnimations === 0) {
      // Remove any items from the DOM that have left, and reset `entering`.
      var nextChildren = this.state.children.filter(function (_ref2) {
        var leaving = _ref2.leaving;
        return !leaving;
      }).map(function (item) {
        return _extends({}, item, {
          // fix for Flow
          element: item.element,
          appearing: false,
          entering: false
        });
      });

      this.setState({ children: nextChildren }, function () {
        if (typeof _this6.props.onFinishAll === 'function') {
          _this6.callChildrenHook(_this6.props.onFinishAll);
        }

        // Reset our variables for the next iteration
        _this6.childrenToAnimate = [];
      });

      // If the placeholder was holding the container open while elements were
      // leaving, we we can now set its height to zero.
      if (this.heightPlaceholderData.domNode) {
        this.heightPlaceholderData.domNode.style.height = '0';
      }
    }
  };

  FlipMove.prototype.callChildrenHook = function callChildrenHook(hook) {
    var _this7 = this;

    var elements = [];
    var domNodes = [];

    this.childrenToAnimate.forEach(function (childKey) {
      // If this was an exit animation, the child may no longer exist.
      // If so, skip it.
      var child = _this7.findChildByKey(childKey);

      if (!child) {
        return;
      }

      elements.push(child);

      if (_this7.hasChildData(childKey)) {
        domNodes.push(_this7.getChildData(childKey).domNode);
      }
    });

    hook(elements, domNodes);
  };

  FlipMove.prototype.updateBoundingBoxCaches = function updateBoundingBoxCaches() {
    var _this8 = this;

    // This is the ONLY place that parentData and childrenData's
    // bounding boxes are updated. They will be calculated at other times
    // to be compared to this value, but it's important that the cache is
    // updated once per update.
    var parentDomNode = this.parentData.domNode;

    if (!parentDomNode) {
      return;
    }

    this.parentData.boundingBox = this.props.getPosition(parentDomNode);

    // Splitting DOM reads and writes to be peformed in batches
    var childrenBoundingBoxes = [];

    this.state.children.forEach(function (child) {
      var childKey = getKey(child);

      // It is possible that a child does not have a `key` property;
      // Ignore these children, they don't need to be moved.
      if (!childKey) {
        childrenBoundingBoxes.push(null);
        return;
      }

      // In very rare circumstances, for reasons unknown, the ref is never
      // populated for certain children. In this case, avoid doing this update.
      // see: https://github.com/joshwcomeau/react-flip-move/pull/91
      if (!_this8.hasChildData(childKey)) {
        childrenBoundingBoxes.push(null);
        return;
      }

      var childData = _this8.getChildData(childKey);

      // If the child element returns null, we need to avoid trying to
      // account for it
      if (!childData.domNode || !child) {
        childrenBoundingBoxes.push(null);
        return;
      }

      childrenBoundingBoxes.push(getRelativeBoundingBox({
        childDomNode: childData.domNode,
        parentDomNode: parentDomNode,
        getPosition: _this8.props.getPosition
      }));
    });

    this.state.children.forEach(function (child, index) {
      var childKey = getKey(child);

      var childBoundingBox = childrenBoundingBoxes[index];

      if (!childKey) {
        return;
      }

      _this8.setChildData(childKey, {
        boundingBox: childBoundingBox
      });
    });
  };

  FlipMove.prototype.computeInitialStyles = function computeInitialStyles(child) {
    if (child.appearing) {
      return this.props.appearAnimation ? this.props.appearAnimation.from : {};
    } else if (child.entering) {
      if (!this.props.enterAnimation) {
        return {};
      }
      // If this child was in the middle of leaving, it still has its
      // absolute positioning styles applied. We need to undo those.
      return _extends({
        position: '',
        top: '',
        left: '',
        right: '',
        bottom: ''
      }, this.props.enterAnimation.from);
    } else if (child.leaving) {
      return this.props.leaveAnimation ? this.props.leaveAnimation.from : {};
    }

    var childData = this.getChildData(getKey(child));
    var childDomNode = childData.domNode;
    var childBoundingBox = childData.boundingBox;
    var parentBoundingBox = this.parentData.boundingBox;

    if (!childDomNode) {
      return {};
    }

    var _getPositionDelta2 = getPositionDelta({
      childDomNode: childDomNode,
      childBoundingBox: childBoundingBox,
      parentBoundingBox: parentBoundingBox,
      getPosition: this.props.getPosition
    }),
        dX = _getPositionDelta2[0],
        dY = _getPositionDelta2[1];

    return {
      transform: 'translate(' + dX + 'px, ' + dY + 'px)'
    };
  };

  // eslint-disable-next-line class-methods-use-this


  FlipMove.prototype.isAnimationDisabled = function isAnimationDisabled(props) {
    // If the component is explicitly passed a `disableAllAnimations` flag,
    // we can skip this whole process. Similarly, if all of the numbers have
    // been set to 0, there is no point in trying to animate; doing so would
    // only cause a flicker (and the intent is probably to disable animations)
    // We can also skip this rigamarole if there's no browser support for it.
    return noBrowserSupport || props.disableAllAnimations || props.duration === 0 && props.delay === 0 && props.staggerDurationBy === 0 && props.staggerDelayBy === 0;
  };

  FlipMove.prototype.findChildByKey = function findChildByKey(key) {
    return find(function (child) {
      return getKey(child) === key;
    }, this.state.children);
  };

  FlipMove.prototype.hasChildData = function hasChildData(key) {
    // Object has some built-in properties on its prototype, such as toString.  hasOwnProperty makes
    // sure that key is present on childrenData itself, not on its prototype.
    return Object.prototype.hasOwnProperty.call(this.childrenData, key);
  };

  FlipMove.prototype.getChildData = function getChildData(key) {
    return this.hasChildData(key) ? this.childrenData[key] : {};
  };

  FlipMove.prototype.setChildData = function setChildData(key, data) {
    this.childrenData[key] = _extends({}, this.getChildData(key), data);
  };

  FlipMove.prototype.removeChildData = function removeChildData(key) {
    delete this.childrenData[key];
    this.setState(function (prevState) {
      return _extends({}, prevState, {
        children: prevState.children.filter(function (child) {
          return child.element.key !== key;
        })
      });
    });
  };

  FlipMove.prototype.createHeightPlaceholder = function createHeightPlaceholder() {
    var _this9 = this;

    var typeName = this.props.typeName;

    // If requested, create an invisible element at the end of the list.
    // Its height will be modified to prevent the container from collapsing
    // prematurely.

    var isContainerAList = typeName === 'ul' || typeName === 'ol';
    var placeholderType = isContainerAList ? 'li' : 'div';

    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(placeholderType, {
      key: 'height-placeholder',
      ref: function ref(domNode) {
        _this9.heightPlaceholderData.domNode = domNode;
      },
      style: { visibility: 'hidden', height: 0 }
    });
  };

  FlipMove.prototype.childrenWithRefs = function childrenWithRefs() {
    var _this10 = this;

    // We need to clone the provided children, capturing a reference to the
    // underlying DOM node. Flip Move needs to use the React escape hatches to
    // be able to do its calculations.
    return this.state.children.map(function (child) {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child.element, {
        ref: function ref(element) {
          // Stateless Functional Components are not supported by FlipMove,
          // because they don't have instances.
          if (!element) {
            return;
          }

          var domNode = getNativeNode(element);
          _this10.setChildData(getKey(child), { domNode: domNode });
        }
      });
    });
  };

  FlipMove.prototype.render = function render() {
    var _this11 = this;

    var _props2 = this.props,
        typeName = _props2.typeName,
        delegated = _props2.delegated,
        leaveAnimation = _props2.leaveAnimation,
        maintainContainerHeight = _props2.maintainContainerHeight;


    var children = this.childrenWithRefs();
    if (leaveAnimation && maintainContainerHeight) {
      children.push(this.createHeightPlaceholder());
    }

    if (!typeName) return children;

    var props = _extends({}, delegated, {
      children: children,
      ref: function ref(node) {
        _this11.parentData.domNode = node;
      }
    });

    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(typeName, props);
  };

  return FlipMove;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var enhancedFlipMove = /* #__PURE__ */propConverter(FlipMove$1);

/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 */

/* harmony default export */ __webpack_exports__["default"] = (enhancedFlipMove);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _cell = __webpack_require__(37);

var _cell2 = _interopRequireDefault(_cell);

var _selectionCell = __webpack_require__(38);

var _selectionCell2 = _interopRequireDefault(_selectionCell);

var _rowEventDelegater = __webpack_require__(39);

var _rowEventDelegater2 = _interopRequireDefault(_rowEventDelegater);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */


var Row = function (_eventDelegater) {
  _inherits(Row, _eventDelegater);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          columns = _props.columns,
          keyField = _props.keyField,
          rowIndex = _props.rowIndex,
          className = _props.className,
          style = _props.style,
          attrs = _props.attrs,
          cellEdit = _props.cellEdit,
          selected = _props.selected,
          selectRow = _props.selectRow,
          selectable = _props.selectable,
          editableRow = _props.editable;

      var mode = cellEdit.mode,
          onStart = cellEdit.onStart,
          EditingCell = cellEdit.EditingCell,
          editingRowIdx = cellEdit.ridx,
          editingColIdx = cellEdit.cidx,
          CLICK_TO_CELL_EDIT = cellEdit.CLICK_TO_CELL_EDIT,
          DBCLICK_TO_CELL_EDIT = cellEdit.DBCLICK_TO_CELL_EDIT,
          rest = _objectWithoutProperties(cellEdit, ['mode', 'onStart', 'EditingCell', 'ridx', 'cidx', 'CLICK_TO_CELL_EDIT', 'DBCLICK_TO_CELL_EDIT']);

      var key = _utils2.default.get(row, keyField);
      var hideSelectColumn = selectRow.hideSelectColumn;

      var trAttrs = this.delegate(attrs);

      return _react2.default.createElement(
        'tr',
        _extends({ style: style, className: className }, trAttrs),
        selectRow.mode !== _const2.default.ROW_SELECT_DISABLED && !hideSelectColumn ? _react2.default.createElement(_selectionCell2.default, _extends({}, selectRow, {
          rowKey: key,
          rowIndex: rowIndex,
          selected: selected,
          disabled: !selectable
        })) : null,
        columns.map(function (column, index) {
          if (!column.hidden) {
            var dataField = column.dataField;

            var content = _utils2.default.get(row, dataField);
            var editable = _utils2.default.isDefined(column.editable) ? column.editable : true;
            if (dataField === keyField || !editableRow) editable = false;
            if (_utils2.default.isFunction(column.editable)) {
              editable = column.editable(content, row, rowIndex, index);
            }
            if (rowIndex === editingRowIdx && index === editingColIdx) {
              var editCellstyle = column.editCellStyle || {};
              var editCellclasses = column.editCellClasses;
              if (_utils2.default.isFunction(column.editCellStyle)) {
                editCellstyle = column.editCellStyle(content, row, rowIndex, index);
              }
              if (_utils2.default.isFunction(column.editCellClasses)) {
                editCellclasses = column.editCellClasses(content, row, rowIndex, index);
              }
              return _react2.default.createElement(EditingCell, _extends({
                key: content + '-' + index,
                row: row,
                rowIndex: rowIndex,
                column: column,
                columnIndex: index,
                className: editCellclasses,
                style: editCellstyle
              }, rest));
            }
            return _react2.default.createElement(_cell2.default, {
              key: content + '-' + index,
              row: row,
              rowIndex: rowIndex,
              columnIndex: index,
              column: column,
              onStart: onStart,
              editable: editable,
              clickToEdit: mode === CLICK_TO_CELL_EDIT,
              dbclickToEdit: mode === DBCLICK_TO_CELL_EDIT
            });
          }
          return false;
        })
      );
    }
  }]);

  return Row;
}((0, _rowEventDelegater2.default)(_react.Component));

Row.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  columns: _propTypes2.default.array.isRequired,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  attrs: _propTypes2.default.object
};

Row.defaultProps = {
  editable: true,
  style: {},
  className: null,
  attrs: {}
};

exports.default = Row;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


var Cell = function (_Component) {
  _inherits(Cell, _Component);

  function Cell(props) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

    _this.handleEditingCell = _this.handleEditingCell.bind(_this);
    return _this;
  }

  _createClass(Cell, [{
    key: 'handleEditingCell',
    value: function handleEditingCell(e) {
      var _props = this.props,
          column = _props.column,
          onStart = _props.onStart,
          rowIndex = _props.rowIndex,
          columnIndex = _props.columnIndex,
          clickToEdit = _props.clickToEdit,
          dbclickToEdit = _props.dbclickToEdit;
      var events = column.events;

      if (events) {
        if (clickToEdit) {
          var customClick = events.onClick;
          if (_utils2.default.isFunction(customClick)) customClick(e);
        } else if (dbclickToEdit) {
          var customDbClick = events.onDoubleClick;
          if (_utils2.default.isFunction(customDbClick)) customDbClick(e);
        }
      }
      if (onStart) {
        onStart(rowIndex, columnIndex);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          row = _props2.row,
          rowIndex = _props2.rowIndex,
          column = _props2.column,
          columnIndex = _props2.columnIndex,
          editable = _props2.editable,
          clickToEdit = _props2.clickToEdit,
          dbclickToEdit = _props2.dbclickToEdit;
      var dataField = column.dataField,
          formatter = column.formatter,
          formatExtraData = column.formatExtraData,
          style = column.style,
          classes = column.classes,
          title = column.title,
          events = column.events,
          align = column.align,
          attrs = column.attrs;

      var cellTitle = void 0;
      var cellStyle = {};
      var content = _utils2.default.get(row, dataField);

      var cellAttrs = _extends({}, _utils2.default.isFunction(attrs) ? attrs(content, row, rowIndex, columnIndex) : attrs, events);

      var cellClasses = _utils2.default.isFunction(classes) ? classes(content, row, rowIndex, columnIndex) : classes;

      if (style) {
        cellStyle = _utils2.default.isFunction(style) ? style(content, row, rowIndex, columnIndex) : style;
      }

      if (title) {
        cellTitle = _utils2.default.isFunction(title) ? title(content, row, rowIndex, columnIndex) : content;
        cellAttrs.title = cellTitle;
      }

      if (formatter) {
        content = column.formatter(content, row, rowIndex, formatExtraData);
      }

      if (align) {
        cellStyle.textAlign = _utils2.default.isFunction(align) ? align(content, row, rowIndex, columnIndex) : align;
      }

      if (cellClasses) cellAttrs.className = cellClasses;

      if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;
      if (clickToEdit && editable) {
        cellAttrs.onClick = this.handleEditingCell;
      } else if (dbclickToEdit && editable) {
        cellAttrs.onDoubleClick = this.handleEditingCell;
      }
      return _react2.default.createElement(
        'td',
        cellAttrs,
        content
      );
    }
  }]);

  return Cell;
}(_react.Component);

Cell.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  column: _propTypes2.default.object.isRequired,
  columnIndex: _propTypes2.default.number.isRequired
};

exports.default = Cell;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var SelectionCell = function (_Component) {
  _inherits(SelectionCell, _Component);

  function SelectionCell() {
    _classCallCheck(this, SelectionCell);

    var _this = _possibleConstructorReturn(this, (SelectionCell.__proto__ || Object.getPrototypeOf(SelectionCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SelectionCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var selected = this.props.selected;


      return nextProps.selected !== selected;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          inputType = _props.mode,
          rowKey = _props.rowKey,
          selected = _props.selected,
          onRowSelect = _props.onRowSelect,
          disabled = _props.disabled,
          rowIndex = _props.rowIndex,
          clickToSelect = _props.clickToSelect;


      if (disabled) return;
      if (clickToSelect) return;

      var checked = inputType === _const2.default.ROW_SELECT_SINGLE ? true : !selected;

      onRowSelect(rowKey, checked, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          inputType = _props2.mode,
          selected = _props2.selected,
          disabled = _props2.disabled;


      return _react2.default.createElement(
        'td',
        { onClick: this.handleClick },
        _react2.default.createElement('input', {
          type: inputType,
          checked: selected,
          disabled: disabled
        })
      );
    }
  }]);

  return SelectionCell;
}(_react.Component);

SelectionCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  rowKey: _propTypes2.default.any,
  selected: _propTypes2.default.bool,
  onRowSelect: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  rowIndex: _propTypes2.default.number,
  clickToSelect: _propTypes2.default.bool
};
exports.default = SelectionCell;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['onClick', 'onDoubleClick', 'onMouseEnter', 'onMouseLeave'];

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RowEventDelegater, _ExtendBase);

    function RowEventDelegater(props) {
      _classCallCheck(this, RowEventDelegater);

      var _this = _possibleConstructorReturn(this, (RowEventDelegater.__proto__ || Object.getPrototypeOf(RowEventDelegater)).call(this, props));

      _this.clickNum = 0;
      _this.createDefaultEventHandler = _this.createDefaultEventHandler.bind(_this);
      _this.createClickEventHandler = _this.createClickEventHandler.bind(_this);
      return _this;
    }

    _createClass(RowEventDelegater, [{
      key: 'createDefaultEventHandler',
      value: function createDefaultEventHandler(cb) {
        var _this2 = this;

        return function (e) {
          var _props = _this2.props,
              row = _props.row,
              rowIndex = _props.rowIndex;

          cb(e, row, rowIndex);
        };
      }
    }, {
      key: 'createClickEventHandler',
      value: function createClickEventHandler(cb) {
        var _this3 = this;

        return function (e) {
          var _props2 = _this3.props,
              row = _props2.row,
              selected = _props2.selected,
              keyField = _props2.keyField,
              selectable = _props2.selectable,
              rowIndex = _props2.rowIndex,
              _props2$selectRow = _props2.selectRow,
              onRowSelect = _props2$selectRow.onRowSelect,
              clickToEdit = _props2$selectRow.clickToEdit,
              _props2$cellEdit = _props2.cellEdit,
              mode = _props2$cellEdit.mode,
              DBCLICK_TO_CELL_EDIT = _props2$cellEdit.DBCLICK_TO_CELL_EDIT,
              DELAY_FOR_DBCLICK = _props2$cellEdit.DELAY_FOR_DBCLICK;


          var clickFn = function clickFn() {
            if (cb) {
              cb(e, row, rowIndex);
            }
            if (selectable) {
              var key = _utils2.default.get(row, keyField);
              onRowSelect(key, !selected, rowIndex, e);
            }
          };

          if (mode === DBCLICK_TO_CELL_EDIT && clickToEdit) {
            _this3.clickNum += 1;
            _utils2.default.debounce(function () {
              if (_this3.clickNum === 1) {
                clickFn();
              }
              _this3.clickNum = 0;
            }, DELAY_FOR_DBCLICK)();
          } else {
            clickFn();
          }
        };
      }
    }, {
      key: 'delegate',
      value: function delegate() {
        var _this4 = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newAttrs = {};
        if (this.props.selectRow && this.props.selectRow.clickToSelect) {
          newAttrs.onClick = this.createClickEventHandler(attrs.onClick);
        }
        Object.keys(attrs).forEach(function (attr) {
          if (!newAttrs[attr]) {
            if (events.includes(attr)) {
              newAttrs[attr] = _this4.createDefaultEventHandler(attrs[attr]);
            } else {
              newAttrs[attr] = attrs[attr];
            }
          }
        });
        return newAttrs;
      }
    }]);

    return RowEventDelegater;
  }(ExtendBase);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowSection = function RowSection(_ref) {
  var content = _ref.content,
      colSpan = _ref.colSpan;
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      {
        'data-toggle': 'collapse',
        colSpan: colSpan,
        className: 'react-bs-table-no-data'
      },
      content
    )
  );
};

RowSection.propTypes = {
  content: _propTypes2.default.any,
  colSpan: _propTypes2.default.number
};

RowSection.defaultProps = {
  content: null,
  colSpan: 1
};

exports.default = RowSection;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _columnResolver = __webpack_require__(42);

var _columnResolver2 = _interopRequireDefault(_columnResolver);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ColumnResolver) {
    _inherits(TableResolver, _ColumnResolver);

    function TableResolver() {
      _classCallCheck(this, TableResolver);

      return _possibleConstructorReturn(this, (TableResolver.__proto__ || Object.getPrototypeOf(TableResolver)).apply(this, arguments));
    }

    _createClass(TableResolver, [{
      key: 'validateProps',
      value: function validateProps() {
        var keyField = this.props.keyField;

        if (!keyField) {
          throw new Error('Please specify a field as key via keyField');
        }
        if (this.visibleColumnSize(false) <= 0) {
          throw new Error('No visible columns detected');
        }
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        return this.props.data.length === 0;
      }

      /**
       * props resolver for cell selection
       * @param {Object} options - addtional options like callback which are about to merge into props
       *
       * @returns {Object} result - props for cell selections
       * @returns {String} result.mode - input type of row selection or disabled.
       */

    }, {
      key: 'resolveSelectRowProps',
      value: function resolveSelectRowProps(options) {
        var selectRow = this.props.selectRow;
        var ROW_SELECT_DISABLED = _const2.default.ROW_SELECT_DISABLED;


        if (_utils2.default.isDefined(selectRow)) {
          return _extends({}, selectRow, options);
        }

        return {
          mode: ROW_SELECT_DISABLED
        };
      }

      /**
       * props resolver for header cell selection
       * @param {Object} options - addtional options like callback which are about to merge into props
       *
       * @returns {Object} result - props for cell selections
       * @returns {String} result.mode - input type of row selection or disabled.
       * @returns {String} result.checkedStatus - checkbox status depending on selected rows counts
       */

    }, {
      key: 'resolveSelectRowPropsForHeader',
      value: function resolveSelectRowPropsForHeader() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var selectRow = this.props.selectRow;

        var allRowsSelected = options.allRowsSelected,
            _options$selected = options.selected,
            selected = _options$selected === undefined ? [] : _options$selected,
            rest = _objectWithoutProperties(options, ['allRowsSelected', 'selected']);

        var ROW_SELECT_DISABLED = _const2.default.ROW_SELECT_DISABLED,
            CHECKBOX_STATUS_CHECKED = _const2.default.CHECKBOX_STATUS_CHECKED,
            CHECKBOX_STATUS_INDETERMINATE = _const2.default.CHECKBOX_STATUS_INDETERMINATE,
            CHECKBOX_STATUS_UNCHECKED = _const2.default.CHECKBOX_STATUS_UNCHECKED;


        if (_utils2.default.isDefined(selectRow)) {
          var checkedStatus = void 0;

          // checkbox status depending on selected rows counts
          if (allRowsSelected) checkedStatus = CHECKBOX_STATUS_CHECKED;else if (selected.length === 0) checkedStatus = CHECKBOX_STATUS_UNCHECKED;else checkedStatus = CHECKBOX_STATUS_INDETERMINATE;

          return _extends({}, selectRow, rest, {
            checkedStatus: checkedStatus
          });
        }

        return {
          mode: ROW_SELECT_DISABLED
        };
      }
    }]);

    return TableResolver;
  }((0, _columnResolver2.default)(ExtendBase));
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(ColumnResolver, _ExtendBase);

    function ColumnResolver() {
      _classCallCheck(this, ColumnResolver);

      return _possibleConstructorReturn(this, (ColumnResolver.__proto__ || Object.getPrototypeOf(ColumnResolver)).apply(this, arguments));
    }

    _createClass(ColumnResolver, [{
      key: "visibleColumnSize",
      value: function visibleColumnSize() {
        var includeSelectColumn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        var columnLen = this.props.columns.filter(function (c) {
          return !c.hidden;
        }).length;
        if (!includeSelectColumn) return columnLen;
        if (this.props.selectRow && !this.props.selectRow.hideSelectColumn) {
          return columnLen + 1;
        }
        return columnLen;
      }
    }]);

    return ColumnResolver;
  }(ExtendBase);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(44);

var _store2 = _interopRequireDefault(_store);

var _wrapper = __webpack_require__(46);

var _wrapper2 = _interopRequireDefault(_wrapper);

var _wrapper3 = __webpack_require__(47);

var _wrapper4 = _interopRequireDefault(_wrapper3);

var _remoteResolver2 = __webpack_require__(14);

var _remoteResolver3 = _interopRequireDefault(_remoteResolver2);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */
/* eslint react/prop-types: 0 */


var withDataStore = function withDataStore(Base) {
  return function (_remoteResolver) {
    _inherits(BootstrapTableContainer, _remoteResolver);

    function BootstrapTableContainer(props) {
      _classCallCheck(this, BootstrapTableContainer);

      var _this = _possibleConstructorReturn(this, (BootstrapTableContainer.__proto__ || Object.getPrototypeOf(BootstrapTableContainer)).call(this, props));

      _this.store = new _store2.default(props.keyField);
      _this.store.data = props.data;
      _this.wrapComponents();
      return _this;
    }

    _createClass(BootstrapTableContainer, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.store.setAllData(nextProps.data);
      }
    }, {
      key: 'wrapComponents',
      value: function wrapComponents() {
        this.BaseComponent = Base;
        var _props = this.props,
            pagination = _props.pagination,
            columns = _props.columns,
            filter = _props.filter,
            selectRow = _props.selectRow,
            cellEdit = _props.cellEdit;

        if (pagination) {
          var wrapperFactory = pagination.wrapperFactory;

          this.BaseComponent = wrapperFactory(this.BaseComponent, {
            remoteResolver: _remoteResolver3.default
          });
        }

        if (columns.filter(function (col) {
          return col.sort;
        }).length > 0) {
          this.BaseComponent = (0, _wrapper2.default)(this.BaseComponent);
        }

        if (filter) {
          var _wrapperFactory = filter.wrapperFactory;

          this.BaseComponent = _wrapperFactory(this.BaseComponent, {
            _: _utils2.default,
            remoteResolver: _remoteResolver3.default
          });
        }

        if (cellEdit) {
          var _wrapperFactory2 = cellEdit.wrapperFactory;

          this.BaseComponent = _wrapperFactory2(this.BaseComponent, {
            _: _utils2.default,
            remoteResolver: _remoteResolver3.default
          });
        }

        if (selectRow) {
          this.BaseComponent = (0, _wrapper4.default)(this.BaseComponent);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var baseProps = _extends({}, this.props, {
          store: this.store
        });

        return _react2.default.createElement(this.BaseComponent, baseProps);
      }
    }]);

    return BootstrapTableContainer;
  }((0, _remoteResolver3.default)(_react.Component));
};

exports.default = withDataStore;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-underscore-dangle: 0 */


var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _sort = __webpack_require__(45);

var _rows = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store(keyField) {
    _classCallCheck(this, Store);

    this._data = [];
    this._filteredData = [];
    this._keyField = keyField;
    this._sortOrder = undefined;
    this._sortField = undefined;
    this._selected = [];
    this._filters = {};
    this._page = undefined;
    this._sizePerPage = undefined;
  }

  _createClass(Store, [{
    key: 'edit',
    value: function edit(rowId, dataField, newValue) {
      var row = (0, _rows.getRowByRowId)(this)(rowId);
      if (row) _utils2.default.set(row, dataField, newValue);
    }
  }, {
    key: 'setSort',
    value: function setSort(_ref, order, defaultOrder) {
      var dataField = _ref.dataField;

      this.sortOrder = (0, _sort.nextOrder)(this)(dataField, order, defaultOrder);
      this.sortField = dataField;
    }
  }, {
    key: 'sortBy',
    value: function sortBy(_ref2) {
      var sortFunc = _ref2.sortFunc;

      this.data = (0, _sort.sort)(this)(sortFunc);
    }
  }, {
    key: 'getAllData',
    value: function getAllData() {
      return this._data;
    }
  }, {
    key: 'setAllData',
    value: function setAllData(data) {
      this._data = data;
    }
  }, {
    key: 'data',
    get: function get() {
      if (Object.keys(this._filters).length > 0) {
        return this._filteredData;
      }
      return this._data;
    },
    set: function set(data) {
      if (Object.keys(this._filters).length > 0) {
        this._filteredData = data;
      } else {
        this._data = data ? JSON.parse(JSON.stringify(data)) : [];
      }
    }
  }, {
    key: 'filteredData',
    get: function get() {
      return this._filteredData;
    },
    set: function set(filteredData) {
      this._filteredData = filteredData;
    }
  }, {
    key: 'keyField',
    get: function get() {
      return this._keyField;
    },
    set: function set(keyField) {
      this._keyField = keyField;
    }
  }, {
    key: 'sortOrder',
    get: function get() {
      return this._sortOrder;
    },
    set: function set(sortOrder) {
      this._sortOrder = sortOrder;
    }
  }, {
    key: 'page',
    get: function get() {
      return this._page;
    },
    set: function set(page) {
      this._page = page;
    }
  }, {
    key: 'sizePerPage',
    get: function get() {
      return this._sizePerPage;
    },
    set: function set(sizePerPage) {
      this._sizePerPage = sizePerPage;
    }
  }, {
    key: 'sortField',
    get: function get() {
      return this._sortField;
    },
    set: function set(sortField) {
      this._sortField = sortField;
    }
  }, {
    key: 'selected',
    get: function get() {
      return this._selected;
    },
    set: function set(selected) {
      this._selected = selected;
    }
  }, {
    key: 'filters',
    get: function get() {
      return this._filters;
    },
    set: function set(filters) {
      this._filters = filters;
    }
  }]);

  return Store;
}();

exports.default = Store;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextOrder = exports.sort = undefined;

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint no-nested-ternary: 0 */
/* eslint no-lonely-if: 0 */
/* eslint no-underscore-dangle: 0 */


function comparator(a, b) {
  var result = void 0;
  if (typeof b === 'string') {
    result = b.localeCompare(a);
  } else {
    result = a > b ? -1 : a < b ? 1 : 0;
  }
  return result;
}

var sort = exports.sort = function sort(_ref) {
  var data = _ref.data,
      sortOrder = _ref.sortOrder,
      sortField = _ref.sortField;
  return function (sortFunc) {
    var _data = [].concat(_toConsumableArray(data));
    _data.sort(function (a, b) {
      var result = void 0;
      var valueA = _utils2.default.get(a, sortField);
      var valueB = _utils2.default.get(b, sortField);
      valueA = _utils2.default.isDefined(valueA) ? valueA : '';
      valueB = _utils2.default.isDefined(valueB) ? valueB : '';

      if (sortFunc) {
        result = sortFunc(valueA, valueB, sortOrder, sortField);
      } else {
        if (sortOrder === _const2.default.SORT_DESC) {
          result = comparator(valueA, valueB);
        } else {
          result = comparator(valueB, valueA);
        }
      }
      return result;
    });
    return _data;
  };
};

var nextOrder = exports.nextOrder = function nextOrder(store) {
  return function (field, order) {
    var defaultOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const2.default.SORT_DESC;

    if (order) return order;

    if (field !== store.sortField) {
      return defaultOrder;
    }
    return store.sortOrder === _const2.default.SORT_DESC ? _const2.default.SORT_ASC : _const2.default.SORT_DESC;
  };
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _remoteResolver2 = __webpack_require__(14);

var _remoteResolver3 = _interopRequireDefault(_remoteResolver2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (Base) {
  var _class, _temp;

  return _temp = _class = function (_remoteResolver) {
    _inherits(SortWrapper, _remoteResolver);

    function SortWrapper(props) {
      _classCallCheck(this, SortWrapper);

      var _this = _possibleConstructorReturn(this, (SortWrapper.__proto__ || Object.getPrototypeOf(SortWrapper)).call(this, props));

      _this.handleSort = _this.handleSort.bind(_this);
      return _this;
    }

    _createClass(SortWrapper, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props = this.props,
            columns = _props.columns,
            defaultSorted = _props.defaultSorted,
            defaultSortDirection = _props.defaultSortDirection,
            store = _props.store;
        // defaultSorted is an array, it's ready to use as multi / single sort
        // when we start to support multi sort, please update following code to use array.forEach

        if (defaultSorted && defaultSorted.length > 0) {
          var dataField = defaultSorted[0].dataField;
          var order = defaultSorted[0].order;
          var column = columns.filter(function (col) {
            return col.dataField === dataField;
          });
          if (column.length > 0) {
            store.setSort(column[0], order, defaultSortDirection);

            if (column[0].onSort) {
              column[0].onSort(store.sortField, store.sortOrder);
            }

            if (this.isRemoteSort() || this.isRemotePagination()) {
              this.handleSortChange();
            } else {
              store.sortBy(column[0]);
            }
          }
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var sortedColumn = void 0;
        for (var i = 0; i < nextProps.columns.length; i += 1) {
          if (nextProps.columns[i].dataField === nextProps.store.sortField) {
            sortedColumn = nextProps.columns[i];
            break;
          }
        }
        if (sortedColumn && sortedColumn.sort) {
          nextProps.store.sortBy(sortedColumn);
        }
      }
    }, {
      key: 'handleSort',
      value: function handleSort(column) {
        var store = this.props.store;

        store.setSort(column, undefined, this.props.defaultSortDirection);

        if (column.onSort) {
          column.onSort(store.sortField, store.sortOrder);
        }

        if (this.isRemoteSort() || this.isRemotePagination()) {
          this.handleSortChange();
        } else {
          store.sortBy(column);
          this.forceUpdate();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Base, _extends({}, this.props, {
          onSort: this.handleSort,
          data: this.props.store.data
        }));
      }
    }]);

    return SortWrapper;
  }((0, _remoteResolver3.default)(_react.Component)), _class.propTypes = {
    store: _propTypes2.default.object.isRequired
  }, _temp;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _selection = __webpack_require__(13);

var _rows = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-param-reassign: 0 */


exports.default = function (Base) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(RowSelectionWrapper, _Component);

    function RowSelectionWrapper(props) {
      _classCallCheck(this, RowSelectionWrapper);

      var _this = _possibleConstructorReturn(this, (RowSelectionWrapper.__proto__ || Object.getPrototypeOf(RowSelectionWrapper)).call(this, props));

      _this.handleRowSelect = _this.handleRowSelect.bind(_this);
      _this.handleAllRowsSelect = _this.handleAllRowsSelect.bind(_this);

      props.store.selected = props.selectRow.selected || [];
      _this.state = {
        selectedRowKeys: props.store.selected
      };
      return _this;
    }

    _createClass(RowSelectionWrapper, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        nextProps.store.selected = nextProps.selectRow.selected || [];
        this.setState(function () {
          return {
            selectedRowKeys: nextProps.store.selected
          };
        });
      }

      /**
       * row selection handler
       * @param {String} rowKey - row key of what was selected.
       * @param {Boolean} checked - next checked status of input button.
       */

    }, {
      key: 'handleRowSelect',
      value: function handleRowSelect(rowKey, checked, rowIndex, e) {
        var _props = this.props,
            _props$selectRow = _props.selectRow,
            mode = _props$selectRow.mode,
            onSelect = _props$selectRow.onSelect,
            store = _props.store;
        var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;


        var currSelected = [].concat(_toConsumableArray(store.selected));

        if (mode === ROW_SELECT_SINGLE) {
          // when select mode is radio
          currSelected = [rowKey];
        } else if (checked) {
          // when select mode is checkbox
          currSelected.push(rowKey);
        } else {
          currSelected = currSelected.filter(function (value) {
            return value !== rowKey;
          });
        }

        store.selected = currSelected;

        if (onSelect) {
          var row = (0, _rows.getRowByRowId)(store)(rowKey);
          onSelect(row, checked, rowIndex, e);
        }

        this.setState(function () {
          return {
            selectedRowKeys: currSelected
          };
        });
      }

      /**
       * handle all rows selection on header cell by store.selected
       */

    }, {
      key: 'handleAllRowsSelect',
      value: function handleAllRowsSelect(e) {
        var _props2 = this.props,
            store = _props2.store,
            _props2$selectRow = _props2.selectRow,
            onSelectAll = _props2$selectRow.onSelectAll,
            nonSelectable = _props2$selectRow.nonSelectable;

        var selected = (0, _selection.isAnySelectedRow)(store)(nonSelectable);

        var result = !selected;

        var currSelected = result ? (0, _selection.selectableKeys)(store)(nonSelectable) : (0, _selection.unSelectableKeys)(store)(nonSelectable);

        store.selected = currSelected;

        if (onSelectAll) {
          onSelectAll(result, (0, _selection.getSelectedRows)(store), e);
        }

        this.setState(function () {
          return {
            selectedRowKeys: currSelected
          };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Base, _extends({}, this.props, {
          onRowSelect: this.handleRowSelect,
          onAllRowsSelect: this.handleAllRowsSelect
        }));
      }
    }]);

    return RowSelectionWrapper;
  }(_react.Component), _class.propTypes = {
    store: _propTypes2.default.object.isRequired,
    selectRow: _propTypes2.default.object.isRequired
  }, _temp;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1MWY4MmVhNjdiMjQwYjQ4NzZkYSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9Iiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3Jvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL3JlbW90ZS1yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Jvb3RzdHJhcC10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L2NhcmV0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NhcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9oYXNDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvUmVwbGFjZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvQ2hpbGRNYXBwaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1mbGlwLW1vdmUvZGlzdC9yZWFjdC1mbGlwLW1vdmUuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24tY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXZlbnQtZGVsZWdhdGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2NvbHVtbi1yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L3dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi93cmFwcGVyLmpzIl0sIm5hbWVzIjpbIlNPUlRfQVNDIiwiU09SVF9ERVNDIiwiUk9XX1NFTEVDVF9TSU5HTEUiLCJST1dfU0VMRUNUX01VTFRJUExFIiwiUk9XX1NFTEVDVF9ESVNBQkxFRCIsIkNIRUNLQk9YX1NUQVRVU19DSEVDS0VEIiwiQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUiLCJDSEVDS0JPWF9TVEFUVVNfVU5DSEVDS0VEIiwic3BsaXROZXN0ZWQiLCJzdHIiLCJqb2luIiwicmVwbGFjZSIsInNwbGl0IiwiZ2V0IiwidGFyZ2V0IiwiZmllbGQiLCJwYXRoQXJyYXkiLCJyZXN1bHQiLCJyZWR1Y2UiLCJjdXJyIiwicGF0aCIsImUiLCJzZXQiLCJ2YWx1ZSIsInNhZmUiLCJsZXZlbCIsImEiLCJiIiwiRXJyb3IiLCJsZW5ndGgiLCJpc0Z1bmN0aW9uIiwib2JqIiwiaXNPYmplY3QiLCJ0eXBlIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJpc0VtcHR5T2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJrZXlzIiwiaSIsImNhbGwiLCJpc0RlZmluZWQiLCJzbGVlcCIsImZuIiwibXMiLCJzZXRUaW1lb3V0IiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsImFwcHkiLCJtYXRjaFJvdyIsImtleUZpZWxkIiwiaWQiLCJyb3ciLCJnZXRSb3dCeVJvd0lkIiwiZGF0YSIsImZpbmQiLCJpc1NlbGVjdGVkQWxsIiwic2VsZWN0ZWQiLCJpc0FueVNlbGVjdGVkUm93Iiwic2tpcHMiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsIngiLCJzZWxlY3RhYmxlS2V5cyIsIm1hcCIsIl8iLCJ1blNlbGVjdGFibGVLZXlzIiwiZ2V0U2VsZWN0ZWRSb3dzIiwic3RvcmUiLCJnZXRSb3ciLCJrIiwic3RhdGUiLCJwcm9wcyIsInBhZ2UiLCJzaXplUGVyUGFnZSIsImZpbHRlcnMiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJnZXRBbGxEYXRhIiwicmVtb3RlIiwicGFnaW5hdGlvbiIsInNvcnQiLCJjZWxsRWRpdCIsIm9uVGFibGVDaGFuZ2UiLCJnZXROZXdlc3RTdGF0ZSIsIm5ld1N0YXRlIiwiaXNSZW1vdGVQYWdpbmF0aW9uIiwib3B0aW9ucyIsInBhZ2VTdGFydEluZGV4Iiwicm93SWQiLCJkYXRhRmllbGQiLCJuZXdWYWx1ZSIsIkV4dGVuZEJhc2UiLCJCb290c3RyYXBUYWJsZSIsInZhbGlkYXRlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJvdmVybGF5IiwidGFibGUiLCJyZW5kZXJUYWJsZSIsIkxvYWRpbmdPdmVybGF5IiwiY29sdW1ucyIsImNsYXNzZXMiLCJzdHJpcGVkIiwiaG92ZXIiLCJib3JkZXJlZCIsImNvbmRlbnNlZCIsIm5vRGF0YUluZGljYXRpb24iLCJjYXB0aW9uIiwicm93U3R5bGUiLCJyb3dDbGFzc2VzIiwid3JhcHBlckNsYXNzZXMiLCJyb3dFdmVudHMiLCJ0YWJsZVdyYXBwZXJDbGFzcyIsInRhYmxlQ2xhc3MiLCJjZWxsU2VsZWN0aW9uSW5mbyIsInJlc29sdmVTZWxlY3RSb3dQcm9wcyIsIm9uUm93U2VsZWN0IiwiaGVhZGVyQ2VsbFNlbGVjdGlvbkluZm8iLCJyZXNvbHZlU2VsZWN0Um93UHJvcHNGb3JIZWFkZXIiLCJvbkFsbFJvd3NTZWxlY3QiLCJhbGxSb3dzU2VsZWN0ZWQiLCJ0YWJsZUNhcHRpb24iLCJvblNvcnQiLCJvbkZpbHRlciIsImlzRW1wdHkiLCJ2aXNpYmxlQ29sdW1uU2l6ZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm9uZU9mVHlwZSIsImJvb2wiLCJzaGFwZSIsIm9iamVjdCIsIm5vZGUiLCJzZWxlY3RSb3ciLCJtb2RlIiwib25lT2YiLCJDb25zdCIsImNsaWNrVG9TZWxlY3QiLCJjbGlja1RvRWRpdCIsIm9uU2VsZWN0Iiwib25TZWxlY3RBbGwiLCJzdHlsZSIsIm5vblNlbGVjdGFibGUiLCJiZ0NvbG9yIiwiaGlkZVNlbGVjdENvbHVtbiIsImRlZmF1bHRTb3J0ZWQiLCJhcnJheU9mIiwib3JkZXIiLCJkZWZhdWx0U29ydERpcmVjdGlvbiIsImRlZmF1bHRQcm9wcyIsIkhlYWRlciIsImNvbHVtbiIsImhpZGRlbiIsImN1cnJTb3J0IiwiaXNMYXN0U29ydGluZyIsIkhlYWRlckNlbGwiLCJpbmRleCIsInNvcnRpbmciLCJ0ZXh0IiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJBbGlnbiIsImhlYWRlckZvcm1hdHRlciIsImhlYWRlckV2ZW50cyIsImhlYWRlckNsYXNzZXMiLCJoZWFkZXJTdHlsZSIsImhlYWRlckF0dHJzIiwiaGVhZGVyU29ydGluZ0NsYXNzZXMiLCJoZWFkZXJTb3J0aW5nU3R5bGUiLCJjZWxsQXR0cnMiLCJzb3J0U3ltYm9sIiwiZmlsdGVyRWxtIiwiY2VsbFN0eWxlIiwiY2VsbENsYXNzZXMiLCJ0aXRsZSIsInRleHRBbGlnbiIsImN1c3RvbUNsaWNrIiwib25DbGljayIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwic29ydEVsZW1lbnQiLCJmaWx0ZXJFbGVtZW50IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiZm9ybWF0dGVyIiwiZm9ybWF0RXh0cmFEYXRhIiwiYW55IiwiZXZlbnRzIiwiYWxpZ24iLCJhdHRycyIsInNvcnRGdW5jIiwiZWRpdG9yIiwiZWRpdGFibGUiLCJlZGl0Q2VsbFN0eWxlIiwiZWRpdENlbGxDbGFzc2VzIiwiZWRpdG9yU3R5bGUiLCJlZGl0b3JDbGFzc2VzIiwiZWRpdG9yUmVuZGVyZXIiLCJ2YWxpZGF0b3IiLCJmaWx0ZXJWYWx1ZSIsIm51bWJlciIsIlNvcnRTeW1ib2wiLCJTb3J0Q2FyZXQiLCJvcmRlckNsYXNzIiwiZHJvcHVwIiwiQ2hlY2tCb3giLCJjaGVja2VkIiwiaW5kZXRlcm1pbmF0ZSIsImlucHV0IiwiU2VsZWN0aW9uSGVhZGVyQ2VsbCIsImhhbmRsZUNoZWNrQm94Q2xpY2siLCJiaW5kIiwiY2hlY2tlZFN0YXR1cyIsIkNhcHRpb24iLCJCb2R5Iiwic2VsZWN0ZWRSb3dLZXlzIiwiY29udGVudCIsImluZGljYXRpb24iLCJub25FZGl0YWJsZVJvd3MiLCJrZXkiLCJpbmRleE9mIiwic2VsZWN0ZWRTdHlsZSIsInNlbGVjdGVkQ2xhc3NlcyIsImJhY2tncm91bmRDb2xvciIsInNlbGVjdGFibGUiLCJSb3ciLCJyb3dJbmRleCIsImVkaXRhYmxlUm93Iiwib25TdGFydCIsIkVkaXRpbmdDZWxsIiwiZWRpdGluZ1Jvd0lkeCIsInJpZHgiLCJlZGl0aW5nQ29sSWR4IiwiY2lkeCIsIkNMSUNLX1RPX0NFTExfRURJVCIsIkRCQ0xJQ0tfVE9fQ0VMTF9FRElUIiwicmVzdCIsInRyQXR0cnMiLCJkZWxlZ2F0ZSIsImVkaXRDZWxsc3R5bGUiLCJlZGl0Q2VsbGNsYXNzZXMiLCJDZWxsIiwiaGFuZGxlRWRpdGluZ0NlbGwiLCJjb2x1bW5JbmRleCIsImRiY2xpY2tUb0VkaXQiLCJjdXN0b21EYkNsaWNrIiwib25Eb3VibGVDbGljayIsImNlbGxUaXRsZSIsIlNlbGVjdGlvbkNlbGwiLCJoYW5kbGVDbGljayIsImlucHV0VHlwZSIsInJvd0tleSIsImRpc2FibGVkIiwiY2xpY2tOdW0iLCJjcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyIiwiY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIiLCJjYiIsIkRFTEFZX0ZPUl9EQkNMSUNLIiwiY2xpY2tGbiIsIm5ld0F0dHJzIiwiZm9yRWFjaCIsImF0dHIiLCJSb3dTZWN0aW9uIiwiY29sU3BhbiIsImluY2x1ZGVTZWxlY3RDb2x1bW4iLCJjb2x1bW5MZW4iLCJjIiwid2l0aERhdGFTdG9yZSIsIlN0b3JlIiwid3JhcENvbXBvbmVudHMiLCJzZXRBbGxEYXRhIiwiQmFzZUNvbXBvbmVudCIsIkJhc2UiLCJ3cmFwcGVyRmFjdG9yeSIsInJlbW90ZVJlc29sdmVyIiwiY29sIiwiYmFzZVByb3BzIiwiX2RhdGEiLCJfZmlsdGVyZWREYXRhIiwiX2tleUZpZWxkIiwiX3NvcnRPcmRlciIsInVuZGVmaW5lZCIsIl9zb3J0RmllbGQiLCJfc2VsZWN0ZWQiLCJfZmlsdGVycyIsIl9wYWdlIiwiX3NpemVQZXJQYWdlIiwiZGVmYXVsdE9yZGVyIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmlsdGVyZWREYXRhIiwiY29tcGFyYXRvciIsImxvY2FsZUNvbXBhcmUiLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJuZXh0T3JkZXIiLCJoYW5kbGVTb3J0Iiwic2V0U29ydCIsImlzUmVtb3RlU29ydCIsImhhbmRsZVNvcnRDaGFuZ2UiLCJzb3J0QnkiLCJzb3J0ZWRDb2x1bW4iLCJmb3JjZVVwZGF0ZSIsImhhbmRsZVJvd1NlbGVjdCIsImhhbmRsZUFsbFJvd3NTZWxlY3QiLCJjdXJyU2VsZWN0ZWQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLCtDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztrQkM3QmU7QUFDYkEsWUFBVSxLQURHO0FBRWJDLGFBQVcsTUFGRTtBQUdiQyxxQkFBbUIsT0FITjtBQUliQyx1QkFB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9DOzs7Ozs7O0FDeEtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUNBQXFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN4RmtFO0FBQ2xDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDakQsU0FBUztBQUNULEdBQUc7QUFDSDtBQUNBLFdBQVcsZUFBZTtBQUMxQixTQUFTO0FBQ1QsR0FBRztBQUNIO0FBQ0EsV0FBVyx3REFBd0Q7QUFDbkUsU0FBUztBQUNULEdBQUc7QUFDSDtBQUNBLFdBQVcseURBQXlEO0FBQ3BFLFNBQVM7QUFDVCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDakQsU0FBUztBQUNULEdBQUc7QUFDSDtBQUNBLFdBQVcsZUFBZTtBQUMxQixTQUFTO0FBQ1QsR0FBRztBQUNIO0FBQ0EsV0FBVyx3REFBd0Q7QUFDbkUsU0FBUztBQUNULEdBQUc7QUFDSDtBQUNBLFdBQVcseURBQXlEO0FBQ3BFLFNBQVM7QUFDVCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQixrQ0FBa0M7QUFDeEQsR0FBRyxJQUFJOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQ0FBbUM7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEIsY0FBYyxFQUFFOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQ0FBbUM7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSyx5QkFBeUI7QUFDOUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVksbUJBQW1CO0FBQ3pELE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGNBQWMsMkNBQTJDO0FBQ2pGLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsVUFBVSxnQkFBZ0I7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsU0FBUztBQUNULDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7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dHN0cmFwLXRhYmxlMi9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZS1uZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTFmODJlYTY3YjI0MGI0ODc2ZGEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU09SVF9BU0M6ICdhc2MnLFxuICBTT1JUX0RFU0M6ICdkZXNjJyxcbiAgUk9XX1NFTEVDVF9TSU5HTEU6ICdyYWRpbycsXG4gIFJPV19TRUxFQ1RfTVVMVElQTEU6ICdjaGVja2JveCcsXG4gIFJPV19TRUxFQ1RfRElTQUJMRUQ6ICdST1dfU0VMRUNUX0RJU0FCTEVEJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ6ICdjaGVja2VkJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEU6ICdpbmRldGVybWluYXRlJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRDogJ3VuY2hlY2tlZCdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb25zdC5qcyIsIi8qIGVzbGludCBuby1lbXB0eTogMCAqL1xuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG4vKiBlc2xpbnQgcHJlZmVyLXJlc3QtcGFyYW1zOiAwICovXG5cbmZ1bmN0aW9uIHNwbGl0TmVzdGVkKHN0cikge1xuICByZXR1cm4gW3N0cl1cbiAgICAuam9pbignLicpXG4gICAgLnJlcGxhY2UoL1xcWy9nLCAnLicpXG4gICAgLnJlcGxhY2UoL1xcXS9nLCAnJylcbiAgICAuc3BsaXQoJy4nKTtcbn1cblxuZnVuY3Rpb24gZ2V0KHRhcmdldCwgZmllbGQpIHtcbiAgY29uc3QgcGF0aEFycmF5ID0gc3BsaXROZXN0ZWQoZmllbGQpO1xuICBsZXQgcmVzdWx0O1xuICB0cnkge1xuICAgIHJlc3VsdCA9IHBhdGhBcnJheS5yZWR1Y2UoKGN1cnIsIHBhdGgpID0+IGN1cnJbcGF0aF0sIHRhcmdldCk7XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIGZpZWxkLCB2YWx1ZSwgc2FmZSA9IGZhbHNlKSB7XG4gIGNvbnN0IHBhdGhBcnJheSA9IHNwbGl0TmVzdGVkKGZpZWxkKTtcbiAgbGV0IGxldmVsID0gMDtcbiAgcGF0aEFycmF5LnJlZHVjZSgoYSwgYikgPT4ge1xuICAgIGxldmVsICs9IDE7XG4gICAgaWYgKHR5cGVvZiBhW2JdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKCFzYWZlKSB0aHJvdyBuZXcgRXJyb3IoYCR7YX0uJHtifSBpcyB1bmRlZmluZWRgKTtcbiAgICAgIGFbYl0gPSB7fTtcbiAgICAgIHJldHVybiBhW2JdO1xuICAgIH1cblxuICAgIGlmIChsZXZlbCA9PT0gcGF0aEFycmF5Lmxlbmd0aCkge1xuICAgICAgYVtiXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gYVtiXTtcbiAgfSwgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIE9iamVjdC4gdGhlIGBPYmplY3RgIGV4Y2VwdCBgRnVuY3Rpb25gIGFuZCBgQXJyYXkuYFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGhlIHZhbHVlIGdvbm5hIGNoZWNrXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIG9iajtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlID09PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eU9iamVjdChvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBzbGVlcChmbiwgbXMpIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gZm4oKSwgbXMpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXQ7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgfHwgMCk7XG5cbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgZnVuYy5hcHB5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldCxcbiAgc2V0LFxuICBpc0Z1bmN0aW9uLFxuICBpc09iamVjdCxcbiAgaXNFbXB0eU9iamVjdCxcbiAgaXNEZWZpbmVkLFxuICBzbGVlcCxcbiAgZGVib3VuY2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy91dGlscy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwifVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlxuZXhwb3J0IGNvbnN0IG1hdGNoUm93ID0gKGtleUZpZWxkLCBpZCkgPT4gcm93ID0+IHJvd1trZXlGaWVsZF0gPT09IGlkO1xuXG5leHBvcnQgY29uc3QgZ2V0Um93QnlSb3dJZCA9ICh7IGRhdGEsIGtleUZpZWxkIH0pID0+IGlkID0+IGRhdGEuZmluZChtYXRjaFJvdyhrZXlGaWVsZCwgaWQpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3Jvd3MuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuRVhJVElORyA9IGV4cG9ydHMuRU5URVJFRCA9IGV4cG9ydHMuRU5URVJJTkcgPSBleHBvcnRzLkVYSVRFRCA9IGV4cG9ydHMuVU5NT1VOVEVEID0gdW5kZWZpbmVkO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9Qcm9wVHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBVTk1PVU5URUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9ICd1bm1vdW50ZWQnO1xudmFyIEVYSVRFRCA9IGV4cG9ydHMuRVhJVEVEID0gJ2V4aXRlZCc7XG52YXIgRU5URVJJTkcgPSBleHBvcnRzLkVOVEVSSU5HID0gJ2VudGVyaW5nJztcbnZhciBFTlRFUkVEID0gZXhwb3J0cy5FTlRFUkVEID0gJ2VudGVyZWQnO1xudmFyIEVYSVRJTkcgPSBleHBvcnRzLkVYSVRJTkcgPSAnZXhpdGluZyc7XG5cbi8qKlxuICogVGhlIFRyYW5zaXRpb24gY29tcG9uZW50IGxldHMgeW91IGRlc2NyaWJlIGEgdHJhbnNpdGlvbiBmcm9tIG9uZSBjb21wb25lbnRcbiAqIHN0YXRlIHRvIGFub3RoZXIgX292ZXIgdGltZV8gd2l0aCBhIHNpbXBsZSBkZWNsYXJhdGl2ZSBBUEkuIE1vc3QgY29tbW9ubHlcbiAqIGl0J3MgdXNlZCB0byBhbmltYXRlIHRoZSBtb3VudGluZyBhbmQgdW5tb3VudGluZyBvZiBhIGNvbXBvbmVudCwgYnV0IGNhbiBhbHNvXG4gKiBiZSB1c2VkIHRvIGRlc2NyaWJlIGluLXBsYWNlIHRyYW5zaXRpb24gc3RhdGVzIGFzIHdlbGwuXG4gKlxuICogQnkgZGVmYXVsdCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2VzIG5vdCBhbHRlciB0aGUgYmVoYXZpb3Igb2YgdGhlXG4gKiBjb21wb25lbnQgaXQgcmVuZGVycywgaXQgb25seSB0cmFja3MgXCJlbnRlclwiIGFuZCBcImV4aXRcIiBzdGF0ZXMgZm9yIHRoZSBjb21wb25lbnRzLlxuICogSXQncyB1cCB0byB5b3UgdG8gZ2l2ZSBtZWFuaW5nIGFuZCBlZmZlY3QgdG8gdGhvc2Ugc3RhdGVzLiBGb3IgZXhhbXBsZSB3ZSBjYW5cbiAqIGFkZCBzdHlsZXMgdG8gYSBjb21wb25lbnQgd2hlbiBpdCBlbnRlcnMgb3IgZXhpdHM6XG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nO1xuICpcbiAqIGNvbnN0IGR1cmF0aW9uID0gMzAwO1xuICpcbiAqIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAqICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyBlYXNlLWluLW91dGAsXG4gKiAgIG9wYWNpdHk6IDAsXG4gKiB9XG4gKlxuICogY29uc3QgdHJhbnNpdGlvblN0eWxlcyA9IHtcbiAqICAgZW50ZXJpbmc6IHsgb3BhY2l0eTogMCB9LFxuICogICBlbnRlcmVkOiAgeyBvcGFjaXR5OiAxIH0sXG4gKiB9O1xuICpcbiAqIGNvbnN0IEZhZGUgPSAoeyBpbjogaW5Qcm9wIH0pID0+IChcbiAqICAgPFRyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17ZHVyYXRpb259PlxuICogICAgIHsoc3RhdGUpID0+IChcbiAqICAgICAgIDxkaXYgc3R5bGU9e3tcbiAqICAgICAgICAgLi4uZGVmYXVsdFN0eWxlLFxuICogICAgICAgICAuLi50cmFuc2l0aW9uU3R5bGVzW3N0YXRlXVxuICogICAgICAgfX0+XG4gKiAgICAgICAgIEknbSBhIGZhZGUgVHJhbnNpdGlvbiFcbiAqICAgICAgIDwvZGl2PlxuICogICAgICl9XG4gKiAgIDwvVHJhbnNpdGlvbj5cbiAqICk7XG4gKiBgYGBcbiAqXG4gKiBBcyBub3RlZCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2Vzbid0IF9kb18gYW55dGhpbmcgYnkgaXRzZWxmIHRvIGl0cyBjaGlsZCBjb21wb25lbnQuXG4gKiBXaGF0IGl0IGRvZXMgZG8gaXMgdHJhY2sgdHJhbnNpdGlvbiBzdGF0ZXMgb3ZlciB0aW1lIHNvIHlvdSBjYW4gdXBkYXRlIHRoZVxuICogY29tcG9uZW50IChzdWNoIGFzIGJ5IGFkZGluZyBzdHlsZXMgb3IgY2xhc3Nlcykgd2hlbiBpdCBjaGFuZ2VzIHN0YXRlcy5cbiAqXG4gKiBUaGVyZSBhcmUgNCBtYWluIHN0YXRlcyBhIFRyYW5zaXRpb24gY2FuIGJlIGluOlxuICogIC0gYCdlbnRlcmluZydgXG4gKiAgLSBgJ2VudGVyZWQnYFxuICogIC0gYCdleGl0aW5nJ2BcbiAqICAtIGAnZXhpdGVkJ2BcbiAqXG4gKiBUcmFuc2l0aW9uIHN0YXRlIGlzIHRvZ2dsZWQgdmlhIHRoZSBgaW5gIHByb3AuIFdoZW4gYHRydWVgIHRoZSBjb21wb25lbnQgYmVnaW5zIHRoZVxuICogXCJFbnRlclwiIHN0YWdlLiBEdXJpbmcgdGhpcyBzdGFnZSwgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IGZyb20gaXRzIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0ZSxcbiAqIHRvIGAnZW50ZXJpbmcnYCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uIGFuZCB0aGVuIHRvIHRoZSBgJ2VudGVyZWQnYCBzdGFnZSBvbmNlXG4gKiBpdCdzIGNvbXBsZXRlLiBMZXQncyB0YWtlIHRoZSBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc3hcbiAqIHN0YXRlID0geyBpbjogZmFsc2UgfTtcbiAqXG4gKiB0b2dnbGVFbnRlclN0YXRlID0gKCkgPT4ge1xuICogICB0aGlzLnNldFN0YXRlKHsgaW46IHRydWUgfSk7XG4gKiB9XG4gKlxuICogcmVuZGVyKCkge1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8VHJhbnNpdGlvbiBpbj17dGhpcy5zdGF0ZS5pbn0gdGltZW91dD17NTAwfSAvPlxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVudGVyU3RhdGV9PkNsaWNrIHRvIEVudGVyPC9idXR0b24+XG4gKiAgICAgPC9kaXY+XG4gKiAgICk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBXaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgdG8gdGhlIGAnZW50ZXJpbmcnYCBzdGF0ZSBhbmRcbiAqIHN0YXkgdGhlcmUgZm9yIDUwMG1zICh0aGUgdmFsdWUgb2YgYHRpbWVvdXRgKSBiZWZvcmUgaXQgZmluYWxseSBzd2l0Y2hlcyB0byBgJ2VudGVyZWQnYC5cbiAqXG4gKiBXaGVuIGBpbmAgaXMgYGZhbHNlYCB0aGUgc2FtZSB0aGluZyBoYXBwZW5zIGV4Y2VwdCB0aGUgc3RhdGUgbW92ZXMgZnJvbSBgJ2V4aXRpbmcnYCB0byBgJ2V4aXRlZCdgLlxuICpcbiAqICMjIFRpbWluZ1xuICpcbiAqIFRpbWluZyBpcyBvZnRlbiB0aGUgdHJpY2tpZXN0IHBhcnQgb2YgYW5pbWF0aW9uLCBtaXN0YWtlcyBjYW4gcmVzdWx0IGluIHNsaWdodCBkZWxheXNcbiAqIHRoYXQgYXJlIGhhcmQgdG8gcGluIGRvd24uIEEgY29tbW9uIGV4YW1wbGUgaXMgd2hlbiB5b3Ugd2FudCB0byBhZGQgYW4gZXhpdCB0cmFuc2l0aW9uLFxuICogeW91IHNob3VsZCBzZXQgdGhlIGRlc2lyZWQgZmluYWwgc3R5bGVzIHdoZW4gdGhlIHN0YXRlIGlzIGAnZXhpdGluZydgLiBUaGF0J3Mgd2hlbiB0aGVcbiAqIHRyYW5zaXRpb24gdG8gdGhvc2Ugc3R5bGVzIHdpbGwgc3RhcnQgYW5kLCBpZiB5b3UgbWF0Y2hlZCB0aGUgYHRpbWVvdXRgIHByb3Agd2l0aCB0aGVcbiAqIENTUyBUcmFuc2l0aW9uIGR1cmF0aW9uLCBpdCB3aWxsIGVuZCBleGFjdGx5IHdoZW4gdGhlIHN0YXRlIGNoYW5nZXMgdG8gYCdleGl0ZWQnYC5cbiAqXG4gKiA+ICoqTm90ZSoqOiBGb3Igc2ltcGxlciB0cmFuc2l0aW9ucyB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBtaWdodCBiZSBlbm91Z2gsIGJ1dFxuICogPiB0YWtlIGludG8gYWNjb3VudCB0aGF0IGl0J3MgcGxhdGZvcm0tYWdub3N0aWMsIHdoaWxlIHRoZSBgQ1NTVHJhbnNpdGlvbmAgY29tcG9uZW50XG4gKiA+IFtmb3JjZXMgcmVmbG93c10oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ibG9iLzUwMDczMDNlNzI5YTc0YmU2NmEyMWMzZTIyMDVlNDkxNjgyMTUyNGIvc3JjL0NTU1RyYW5zaXRpb24uanMjTDIwOC1MMjE1KVxuICogPiBpbiBvcmRlciB0byBtYWtlIG1vcmUgY29tcGxleCB0cmFuc2l0aW9ucyBtb3JlIHByZWRpY3RhYmxlLiBGb3IgZXhhbXBsZSwgZXZlbiB0aG91Z2hcbiAqID4gY2xhc3NlcyBgZXhhbXBsZS1lbnRlcmAgYW5kIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgYXJlIGFwcGxpZWQgaW1tZWRpYXRlbHkgb25lIGFmdGVyXG4gKiA+IGFub3RoZXIsIHlvdSBjYW4gc3RpbGwgdHJhbnNpdGlvbiBmcm9tIG9uZSB0byB0aGUgb3RoZXIgYmVjYXVzZSBvZiB0aGUgZm9yY2VkIHJlZmxvd1xuICogPiAocmVhZCBbdGhpcyBpc3N1ZV0oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9pc3N1ZXMvMTU5I2lzc3VlY29tbWVudC0zMjI3NjExNzEpXG4gKiA+IGZvciBtb3JlIGluZm8pLiBUYWtlIHRoaXMgaW50byBhY2NvdW50IHdoZW4gY2hvb3NpbmcgYmV0d2VlbiBgVHJhbnNpdGlvbmAgYW5kXG4gKiA+IGBDU1NUcmFuc2l0aW9uYC5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkLzc0MW9wNG1tajA/Zm9udHNpemU9MTRcIiBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiIHNhbmRib3g9XCJhbGxvdy1tb2RhbHMgYWxsb3ctZm9ybXMgYWxsb3ctcG9wdXBzIGFsbG93LXNjcmlwdHMgYWxsb3ctc2FtZS1vcmlnaW5cIj48L2lmcmFtZT5cbiAqXG4gKi9cblxudmFyIFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgdmFyIHBhcmVudEdyb3VwID0gY29udGV4dC50cmFuc2l0aW9uR3JvdXA7XG4gICAgLy8gSW4gdGhlIGNvbnRleHQgb2YgYSBUcmFuc2l0aW9uR3JvdXAgYWxsIGVudGVycyBhcmUgcmVhbGx5IGFwcGVhcnNcbiAgICB2YXIgYXBwZWFyID0gcGFyZW50R3JvdXAgJiYgIXBhcmVudEdyb3VwLmlzTW91bnRpbmcgPyBwcm9wcy5lbnRlciA6IHByb3BzLmFwcGVhcjtcblxuICAgIHZhciBpbml0aWFsU3RhdHVzID0gdm9pZCAwO1xuICAgIF90aGlzLm5leHRTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByb3BzLmluKSB7XG4gICAgICBpZiAoYXBwZWFyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICAgIF90aGlzLm5leHRTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFTlRFUkVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcHMudW5tb3VudE9uRXhpdCB8fCBwcm9wcy5tb3VudE9uRW50ZXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IFVOTU9VTlRFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7IHN0YXR1czogaW5pdGlhbFN0YXR1cyB9O1xuXG4gICAgX3RoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHsgdHJhbnNpdGlvbkdyb3VwOiBudWxsIH07IC8vIGFsbG93cyBmb3IgbmVzdGVkIFRyYW5zaXRpb25zXG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0cnVlKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgX3JlZiA9IHRoaXMucGVuZGluZ1N0YXRlIHx8IHRoaXMuc3RhdGUsXG4gICAgICAgIHN0YXR1cyA9IF9yZWYuc3RhdHVzO1xuXG4gICAgaWYgKG5leHRQcm9wcy5pbikge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRFRCB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAgICAgICB0aGlzLm5leHRTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICAgIHRoaXMubmV4dFN0YXR1cyA9IEVYSVRJTkc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5nZXRUaW1lb3V0cyA9IGZ1bmN0aW9uIGdldFRpbWVvdXRzKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpcy5wcm9wcy50aW1lb3V0O1xuXG4gICAgdmFyIGV4aXQgPSB2b2lkIDAsXG4gICAgICAgIGVudGVyID0gdm9pZCAwLFxuICAgICAgICBhcHBlYXIgPSB2b2lkIDA7XG5cbiAgICBleGl0ID0gZW50ZXIgPSBhcHBlYXIgPSB0aW1lb3V0O1xuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCAmJiB0eXBlb2YgdGltZW91dCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGV4aXQgPSB0aW1lb3V0LmV4aXQ7XG4gICAgICBlbnRlciA9IHRpbWVvdXQuZW50ZXI7XG4gICAgICBhcHBlYXIgPSB0aW1lb3V0LmFwcGVhcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgZXhpdDogZXhpdCwgZW50ZXI6IGVudGVyLCBhcHBlYXI6IGFwcGVhciB9O1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cygpIHtcbiAgICB2YXIgbW91bnRpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIG5leHRTdGF0dXMgPSB0aGlzLm5leHRTdGF0dXM7XG5cbiAgICBpZiAobmV4dFN0YXR1cyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0U3RhdHVzID0gbnVsbDtcbiAgICAgIC8vIG5leHRTdGF0dXMgd2lsbCBhbHdheXMgYmUgRU5URVJJTkcgb3IgRVhJVElORy5cbiAgICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gICAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKG5leHRTdGF0dXMgPT09IEVOVEVSSU5HKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnVubW91bnRPbkV4aXQgJiYgdGhpcy5zdGF0ZS5zdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogVU5NT1VOVEVEIH0pO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBlbnRlciA9IHRoaXMucHJvcHMuZW50ZXI7XG5cbiAgICB2YXIgYXBwZWFyaW5nID0gdGhpcy5jb250ZXh0LnRyYW5zaXRpb25Hcm91cCA/IHRoaXMuY29udGV4dC50cmFuc2l0aW9uR3JvdXAuaXNNb3VudGluZyA6IG1vdW50aW5nO1xuXG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpO1xuXG4gICAgLy8gbm8gZW50ZXIgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRU5URVJFRFxuICAgIC8vIGlmIHdlIGFyZSBtb3VudGluZyBhbmQgcnVubmluZyB0aGlzIGl0IG1lYW5zIGFwcGVhciBfbXVzdF8gYmUgc2V0XG4gICAgaWYgKCFtb3VudGluZyAmJiAhZW50ZXIpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFTlRFUkVEIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xuXG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVOVEVSSU5HIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7XG5cbiAgICAgIC8vIEZJWE1FOiBhcHBlYXIgdGltZW91dD9cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZW50ZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRU5URVJFRCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnBlcmZvcm1FeGl0ID0gZnVuY3Rpb24gcGVyZm9ybUV4aXQobm9kZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGV4aXQgPSB0aGlzLnByb3BzLmV4aXQ7XG5cbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7XG5cbiAgICAvLyBubyBleGl0IGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVYSVRFRFxuICAgIGlmICghZXhpdCkge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRFRCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcblxuICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElUSU5HIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMy5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZXhpdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElURUQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMubmV4dENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIC8vIFdlIG5lZWQgdG8gdHJhY2sgcGVuZGluZyB1cGRhdGVzIGZvciBpbnN0YW5jZXMgd2hlcmUgYSBjV1JQIGZpcmVzIHF1aWNrbHlcbiAgICAvLyBhZnRlciBjRE0gYW5kIGJlZm9yZSB0aGUgc3RhdGUgZmx1c2hlcywgd2hpY2ggd291bGQgZG91YmxlIHRyaWdnZXIgYVxuICAgIC8vIHRyYW5zaXRpb25cbiAgICB0aGlzLnBlbmRpbmdTdGF0ZSA9IG5leHRTdGF0ZTtcblxuICAgIC8vIFRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSwgYnV0IHRoZXJlIGFyZSB3ZWlyZCByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgIC8vIHNldFN0YXRlIGNhbGxiYWNrcyBhbmQgdW5tb3VudGluZyBpbiB0ZXN0aW5nLCBzbyBhbHdheXMgbWFrZSBzdXJlIHRoYXRcbiAgICAvLyB3ZSBjYW4gY2FuY2VsIGFueSBwZW5kaW5nIHNldFN0YXRlIGNhbGxiYWNrcyBhZnRlciB3ZSB1bm1vdW50LlxuICAgIGNhbGxiYWNrID0gdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spO1xuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczQucGVuZGluZ1N0YXRlID0gbnVsbDtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc2V0TmV4dENhbGxiYWNrID0gZnVuY3Rpb24gc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpczUubmV4dENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5uZXh0Q2FsbGJhY2s7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnNldE5leHRDYWxsYmFjayhoYW5kbGVyKTtcblxuICAgIGlmIChub2RlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKG5vZGUsIHRoaXMubmV4dENhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgdGltZW91dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIDApO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjaGlsZHJlbiddKTtcbiAgICAvLyBmaWx0ZXIgcHJvcHMgZm9yIFRyYW5zdGl0aW9uXG5cblxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmluO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm1vdW50T25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy51bm1vdW50T25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5leGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnRpbWVvdXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYWRkRW5kTGlzdGVuZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyaW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0aW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGVkO1xuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHN0YXR1cywgY2hpbGRQcm9wcyk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb24uY29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5UcmFuc2l0aW9uLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IGZ1bmN0aW9uIHRyYW5zaXRpb25Hcm91cCgpIHt9XG59O1xuXG5cblRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQSBgZnVuY3Rpb25gIGNoaWxkIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgYSBSZWFjdCBlbGVtZW50LlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHRyYW5zaXRpb24gc3RhdHVzXG4gICAqICgnZW50ZXJpbmcnLCAnZW50ZXJlZCcsICdleGl0aW5nJywgJ2V4aXRlZCcsICd1bm1vdW50ZWQnKSwgd2hpY2ggY2FuIGJlIHVzZWRcbiAgICogdG8gYXBwbHkgY29udGV4dCBzcGVjaWZpYyBwcm9wcyB0byBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIDxUcmFuc2l0aW9uIHRpbWVvdXQ9ezE1MH0+XG4gICAqICAgeyhzdGF0dXMpID0+IChcbiAgICogICAgIDxNeUNvbXBvbmVudCBjbGFzc05hbWU9e2BmYWRlIGZhZGUtJHtzdGF0dXN9YH0gLz5cbiAgICogICApfVxuICAgKiA8L1RyYW5zaXRpb24+XG4gICAqIGBgYFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlc1xuICAgKi9cbiAgaW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgaXMgbW91bnRlZCBpbW1lZGlhdGVseSBhbG9uZyB3aXRoXG4gICAqIHRoZSBwYXJlbnQgYFRyYW5zaXRpb25gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gXCJsYXp5IG1vdW50XCIgdGhlIGNvbXBvbmVudCBvbiB0aGVcbiAgICogZmlyc3QgYGluPXt0cnVlfWAgeW91IGNhbiBzZXQgYG1vdW50T25FbnRlcmAuIEFmdGVyIHRoZSBmaXJzdCBlbnRlciB0cmFuc2l0aW9uIHRoZSBjb21wb25lbnQgd2lsbCBzdGF5XG4gICAqIG1vdW50ZWQsIGV2ZW4gb24gXCJleGl0ZWRcIiwgdW5sZXNzIHlvdSBhbHNvIHNwZWNpZnkgYHVubW91bnRPbkV4aXRgLlxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IHN0YXlzIG1vdW50ZWQgYWZ0ZXIgaXQgcmVhY2hlcyB0aGUgYCdleGl0ZWQnYCBzdGF0ZS5cbiAgICogU2V0IGB1bm1vdW50T25FeGl0YCBpZiB5b3UnZCBwcmVmZXIgdG8gdW5tb3VudCB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGZpbmlzaGVzIGV4aXRpbmcuXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTm9ybWFsbHkgYSBjb21wb25lbnQgaXMgbm90IHRyYW5zaXRpb25lZCBpZiBpdCBpcyBzaG93biB3aGVuIHRoZSBgPFRyYW5zaXRpb24+YCBjb21wb25lbnQgbW91bnRzLlxuICAgKiBJZiB5b3Ugd2FudCB0byB0cmFuc2l0aW9uIG9uIHRoZSBmaXJzdCBtb3VudCBzZXQgYGFwcGVhcmAgdG8gYHRydWVgLCBhbmQgdGhlXG4gICAqIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4gYXMgc29vbiBhcyB0aGUgYDxUcmFuc2l0aW9uPmAgbW91bnRzLlxuICAgKlxuICAgKiA+IE5vdGU6IHRoZXJlIGFyZSBubyBzcGVjaWZpYyBcImFwcGVhclwiIHN0YXRlcy4gYGFwcGVhcmAgb25seSBhZGRzIGFuIGFkZGl0aW9uYWwgYGVudGVyYCB0cmFuc2l0aW9uLlxuICAgKi9cbiAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZW50ZXIgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGV4aXQgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFJlcXVpcmVkIHVubGVzcyBgYWRkRW5kTGlzdGVuZXJgIGlzIHByb3ZpZGVkXG4gICAqXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMgbGlrZTogYHRpbWVvdXQ9ezUwMH1gLFxuICAgKiBvciBpbmRpdmlkdWFsbHkgbGlrZTpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9e3tcbiAgICogIGVudGVyOiAzMDAsXG4gICAqICBleGl0OiA1MDAsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyIHwgeyBlbnRlcj86IG51bWJlciwgZXhpdD86IG51bWJlciB9fVxuICAgKi9cbiAgdGltZW91dDogZnVuY3Rpb24gdGltZW91dChwcm9wcykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHB0ID0gX1Byb3BUeXBlcy50aW1lb3V0c1NoYXBlO1xuICAgIGlmICghcHJvcHMuYWRkRW5kTGlzdGVuZXIpIHB0ID0gcHQuaXNSZXF1aXJlZDtcbiAgICByZXR1cm4gcHQuYXBwbHkodW5kZWZpbmVkLCBbcHJvcHNdLmNvbmNhdChhcmdzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCBhIGN1c3RvbSB0cmFuc2l0aW9uIGVuZCB0cmlnZ2VyLiBDYWxsZWQgd2l0aCB0aGUgdHJhbnNpdGlvbmluZ1xuICAgKiBET00gbm9kZSBhbmQgYSBgZG9uZWAgY2FsbGJhY2suIEFsbG93cyBmb3IgbW9yZSBmaW5lIGdyYWluZWQgdHJhbnNpdGlvbiBlbmRcbiAgICogbG9naWMuICoqTm90ZToqKiBUaW1lb3V0cyBhcmUgc3RpbGwgdXNlZCBhcyBhIGZhbGxiYWNrIGlmIHByb3ZpZGVkLlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PiB7XG4gICAqICAgLy8gdXNlIHRoZSBjc3MgdHJhbnNpdGlvbmVuZCBldmVudCB0byBtYXJrIHRoZSBmaW5pc2ggb2YgYSB0cmFuc2l0aW9uXG4gICAqICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZG9uZSwgZmFsc2UpO1xuICAgKiB9fVxuICAgKiBgYGBcbiAgICovXG4gIGFkZEVuZExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59IDoge307XG5cbi8vIE5hbWUgdGhlIGZ1bmN0aW9uIHNvIGl0IGlzIGNsZWFyZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW46IGZhbHNlLFxuICBtb3VudE9uRW50ZXI6IGZhbHNlLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG5cbiAgb25FbnRlcjogbm9vcCxcbiAgb25FbnRlcmluZzogbm9vcCxcbiAgb25FbnRlcmVkOiBub29wLFxuXG4gIG9uRXhpdDogbm9vcCxcbiAgb25FeGl0aW5nOiBub29wLFxuICBvbkV4aXRlZDogbm9vcFxufTtcblxuVHJhbnNpdGlvbi5VTk1PVU5URUQgPSAwO1xuVHJhbnNpdGlvbi5FWElURUQgPSAxO1xuVHJhbnNpdGlvbi5FTlRFUklORyA9IDI7XG5UcmFuc2l0aW9uLkVOVEVSRUQgPSAzO1xuVHJhbnNpdGlvbi5FWElUSU5HID0gNDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBleHBvcnRzLnRpbWVvdXRzU2hhcGUgPSB1bmRlZmluZWQ7XG5leHBvcnRzLnRyYW5zaXRpb25UaW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uVGltZW91dCh0cmFuc2l0aW9uVHlwZSkge1xuICB2YXIgdGltZW91dFByb3BOYW1lID0gJ3RyYW5zaXRpb24nICsgdHJhbnNpdGlvblR5cGUgKyAnVGltZW91dCc7XG4gIHZhciBlbmFibGVkUHJvcE5hbWUgPSAndHJhbnNpdGlvbicgKyB0cmFuc2l0aW9uVHlwZTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgLy8gSWYgdGhlIHRyYW5zaXRpb24gaXMgZW5hYmxlZFxuICAgIGlmIChwcm9wc1tlbmFibGVkUHJvcE5hbWVdKSB7XG4gICAgICAvLyBJZiBubyB0aW1lb3V0IGR1cmF0aW9uIGlzIHByb3ZpZGVkXG4gICAgICBpZiAocHJvcHNbdGltZW91dFByb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IodGltZW91dFByb3BOYW1lICsgJyB3YXNuXFwndCBzdXBwbGllZCB0byBDU1NUcmFuc2l0aW9uR3JvdXA6ICcgKyAndGhpcyBjYW4gY2F1c2UgdW5yZWxpYWJsZSBhbmltYXRpb25zIGFuZCB3b25cXCd0IGJlIHN1cHBvcnRlZCBpbiAnICsgJ2EgZnV0dXJlIHZlcnNpb24gb2YgUmVhY3QuIFNlZSAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYW5pbWF0aW9uLXRyYW5zaXRpb24tZ3JvdXAtdGltZW91dCBmb3IgbW9yZSAnICsgJ2luZm9ybWF0aW9uLicpO1xuXG4gICAgICAgIC8vIElmIHRoZSBkdXJhdGlvbiBpc24ndCBhIG51bWJlclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcHNbdGltZW91dFByb3BOYW1lXSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcih0aW1lb3V0UHJvcE5hbWUgKyAnIG11c3QgYmUgYSBudW1iZXIgKGluIG1pbGxpc2Vjb25kcyknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxudmFyIHRpbWVvdXRzU2hhcGUgPSBleHBvcnRzLnRpbWVvdXRzU2hhcGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG59KS5pc1JlcXVpcmVkXSk7XG5cbnZhciBjbGFzc05hbWVzU2hhcGUgPSBleHBvcnRzLmNsYXNzTmFtZXNTaGFwZSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn0pLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBlbnRlckRvbmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBlbnRlckFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0RG9uZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXRBY3RpdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59KV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvUHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9DaGlsZE1hcHBpbmcgPSByZXF1aXJlKCcuL3V0aWxzL0NoaWxkTWFwcGluZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn07XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBgPFRyYW5zaXRpb25Hcm91cD5gIHJlbmRlcnMgYSBgPGRpdj5gIGJ5IGRlZmF1bHQuIFlvdSBjYW4gY2hhbmdlIHRoaXNcbiAgICogYmVoYXZpb3IgYnkgcHJvdmlkaW5nIGEgYGNvbXBvbmVudGAgcHJvcC5cbiAgICogSWYgeW91IHVzZSBSZWFjdCB2MTYrIGFuZCB3b3VsZCBsaWtlIHRvIGF2b2lkIGEgd3JhcHBpbmcgYDxkaXY+YCBlbGVtZW50XG4gICAqIHlvdSBjYW4gcGFzcyBpbiBgY29tcG9uZW50PXtudWxsfWAuIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSB3cmFwcGluZyBkaXZcbiAgICogYm9ya3MgeW91ciBjc3Mgc3R5bGVzLlxuICAgKi9cbiAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgLyoqXG4gICAqIEEgc2V0IG9mIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudHMsIHRoYXQgYXJlIHRvZ2dsZWQgYGluYCBhbmQgb3V0IGFzIHRoZXlcbiAgICogbGVhdmUuIHRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIHdpbGwgaW5qZWN0IHNwZWNpZmljIHRyYW5zaXRpb24gcHJvcHMsIHNvXG4gICAqIHJlbWVtYmVyIHRvIHNwcmVhZCB0aGVtIHRocm91Z2ggaWYgeW91IGFyZSB3cmFwcGluZyB0aGUgYDxUcmFuc2l0aW9uPmAgYXNcbiAgICogd2l0aCBvdXIgYDxGYWRlPmAgZXhhbXBsZS5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgYXBwZWFyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGFwcGVhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBlbnRlciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgZXhpdCBhbmltYXRpb25zXG4gICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICAqL1xuICBleGl0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgbmVlZCB0byBhcHBseSByZWFjdGl2ZSB1cGRhdGVzIHRvIGEgY2hpbGQgYXMgaXQgaXMgZXhpdGluZy5cbiAgICogVGhpcyBpcyBnZW5lcmFsbHkgZG9uZSBieSB1c2luZyBgY2xvbmVFbGVtZW50YCBob3dldmVyIGluIHRoZSBjYXNlIG9mIGFuIGV4aXRpbmdcbiAgICogY2hpbGQgdGhlIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiByZW1vdmVkIGFuZCBub3QgYWNjZXNzaWJsZSB0byB0aGUgY29uc3VtZXIuXG4gICAqXG4gICAqIElmIHlvdSBkbyBuZWVkIHRvIHVwZGF0ZSBhIGNoaWxkIGFzIGl0IGxlYXZlcyB5b3UgY2FuIHByb3ZpZGUgYSBgY2hpbGRGYWN0b3J5YFxuICAgKiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlIGxlYXZpbmcuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKGNoaWxkOiBSZWFjdEVsZW1lbnQpIC0+IFJlYWN0RWxlbWVudFxuICAgKi9cbiAgY2hpbGRGYWN0b3J5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG59O1xuXG4vKipcbiAqIFRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIGNvbXBvbmVudCBtYW5hZ2VzIGEgc2V0IG9mIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudHNcbiAqIGluIGEgbGlzdC4gTGlrZSB3aXRoIHRoZSBgPFRyYW5zaXRpb24+YCBjb21wb25lbnQsIGA8VHJhbnNpdGlvbkdyb3VwPmAsIGlzIGFcbiAqIHN0YXRlIG1hY2hpbmUgZm9yIG1hbmFnaW5nIHRoZSBtb3VudGluZyBhbmQgdW5tb3VudGluZyBvZiBjb21wb25lbnRzIG92ZXJcbiAqIHRpbWUuXG4gKlxuICogQ29uc2lkZXIgdGhlIGV4YW1wbGUgYmVsb3cgdXNpbmcgdGhlIGBGYWRlYCBDU1MgdHJhbnNpdGlvbiBmcm9tIGJlZm9yZS5cbiAqIEFzIGl0ZW1zIGFyZSByZW1vdmVkIG9yIGFkZGVkIHRvIHRoZSBUb2RvTGlzdCB0aGUgYGluYCBwcm9wIGlzIHRvZ2dsZWRcbiAqIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAuIFlvdSBjYW4gdXNlIF9hbnlfIGA8VHJhbnNpdGlvbj5gXG4gKiBjb21wb25lbnQgaW4gYSBgPFRyYW5zaXRpb25Hcm91cD5gLCBub3QganVzdCBjc3MuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC8wMHJxeW8yNmtuP2ZvbnRzaXplPTE0XCIgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIiBzYW5kYm94PVwiYWxsb3ctbW9kYWxzIGFsbG93LWZvcm1zIGFsbG93LXBvcHVwcyBhbGxvdy1zY3JpcHRzIGFsbG93LXNhbWUtb3JpZ2luXCI+PC9pZnJhbWU+XG4gKlxuICogTm90ZSB0aGF0IGA8VHJhbnNpdGlvbkdyb3VwPmAgIGRvZXMgbm90IGRlZmluZSBhbnkgYW5pbWF0aW9uIGJlaGF2aW9yIVxuICogRXhhY3RseSBfaG93XyBhIGxpc3QgaXRlbSBhbmltYXRlcyBpcyB1cCB0byB0aGUgaW5kaXZpZHVhbCBgPFRyYW5zaXRpb24+YFxuICogY29tcG9uZW50cy4gVGhpcyBtZWFucyB5b3UgY2FuIG1peCBhbmQgbWF0Y2ggYW5pbWF0aW9ucyBhY3Jvc3MgZGlmZmVyZW50XG4gKiBsaXN0IGl0ZW1zLlxuICovXG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNpdGlvbkdyb3VwKTtcblxuICAgIC8vIEluaXRpYWwgY2hpbGRyZW4gc2hvdWxkIGFsbCBiZSBlbnRlcmluZywgZGVwZW5kZW50IG9uIGFwcGVhclxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgICBvbkV4aXRlZDogX3RoaXMuaGFuZGxlRXhpdGVkLmJpbmQoX3RoaXMsIGNoaWxkKSxcbiAgICAgICAgICBpbjogdHJ1ZSxcbiAgICAgICAgICBhcHBlYXI6IF90aGlzLmdldFByb3AoY2hpbGQsICdhcHBlYXInKSxcbiAgICAgICAgICBlbnRlcjogX3RoaXMuZ2V0UHJvcChjaGlsZCwgJ2VudGVyJyksXG4gICAgICAgICAgZXhpdDogX3RoaXMuZ2V0UHJvcChjaGlsZCwgJ2V4aXQnKVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbkdyb3VwOiB7IGlzTW91bnRpbmc6ICF0aGlzLmFwcGVhcmVkIH1cbiAgICB9O1xuICB9O1xuICAvLyB1c2UgY2hpbGQgY29uZmlnIHVubGVzcyBleHBsaWN0bHkgc2V0IGJ5IHRoZSBHcm91cFxuXG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5nZXRQcm9wID0gZnVuY3Rpb24gZ2V0UHJvcChjaGlsZCwgcHJvcCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsID8gcHJvcHNbcHJvcF0gOiBjaGlsZC5wcm9wc1twcm9wXTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hcHBlYXJlZCA9IHRydWU7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICB2YXIgbmV4dENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykobmV4dFByb3BzLmNoaWxkcmVuKTtcblxuICAgIHZhciBjaGlsZHJlbiA9ICgwLCBfQ2hpbGRNYXBwaW5nLm1lcmdlQ2hpbGRNYXBwaW5ncykocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG5cbiAgICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuXG4gICAgICBpZiAoISgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSkgcmV0dXJuO1xuXG4gICAgICB2YXIgaGFzUHJldiA9IGtleSBpbiBwcmV2Q2hpbGRNYXBwaW5nO1xuICAgICAgdmFyIGhhc05leHQgPSBrZXkgaW4gbmV4dENoaWxkTWFwcGluZztcblxuICAgICAgdmFyIHByZXZDaGlsZCA9IHByZXZDaGlsZE1hcHBpbmdba2V5XTtcbiAgICAgIHZhciBpc0xlYXZpbmcgPSAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpICYmICFwcmV2Q2hpbGQucHJvcHMuaW47XG5cbiAgICAgIC8vIGl0ZW0gaXMgbmV3IChlbnRlcmluZylcbiAgICAgIGlmIChoYXNOZXh0ICYmICghaGFzUHJldiB8fCBpc0xlYXZpbmcpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcmluZycsIGtleSlcbiAgICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICAgIG9uRXhpdGVkOiBfdGhpczIuaGFuZGxlRXhpdGVkLmJpbmQoX3RoaXMyLCBjaGlsZCksXG4gICAgICAgICAgaW46IHRydWUsXG4gICAgICAgICAgZXhpdDogX3RoaXMyLmdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgICBlbnRlcjogX3RoaXMyLmdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBpdGVtIGlzIG9sZCAoZXhpdGluZylcbiAgICAgIGVsc2UgaWYgKCFoYXNOZXh0ICYmIGhhc1ByZXYgJiYgIWlzTGVhdmluZykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2aW5nJywga2V5KVxuICAgICAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHsgaW46IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGl0ZW0gaGFzbid0IGNoYW5nZWQgdHJhbnNpdGlvbiBzdGF0ZXNcbiAgICAgICAgLy8gY29weSBvdmVyIHRoZSBsYXN0IHRyYW5zaXRpb24gcHJvcHM7XG4gICAgICAgIGVsc2UgaWYgKGhhc05leHQgJiYgaGFzUHJldiAmJiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndW5jaGFuZ2VkJywga2V5KVxuICAgICAgICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICAgICAgICBvbkV4aXRlZDogX3RoaXMyLmhhbmRsZUV4aXRlZC5iaW5kKF90aGlzMiwgY2hpbGQpLFxuICAgICAgICAgICAgICBpbjogcHJldkNoaWxkLnByb3BzLmluLFxuICAgICAgICAgICAgICBleGl0OiBfdGhpczIuZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICAgICAgICBlbnRlcjogX3RoaXMyLmdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGlsZHJlbjogY2hpbGRyZW4gfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiBoYW5kbGVFeGl0ZWQoY2hpbGQsIG5vZGUpIHtcbiAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICBpZiAoY2hpbGQua2V5IGluIGN1cnJlbnRDaGlsZE1hcHBpbmcpIHJldHVybjtcblxuICAgIGlmIChjaGlsZC5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgY2hpbGQucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IF9leHRlbmRzKHt9LCBzdGF0ZS5jaGlsZHJlbik7XG5cbiAgICAgIGRlbGV0ZSBjaGlsZHJlbltjaGlsZC5rZXldO1xuICAgICAgcmV0dXJuIHsgY2hpbGRyZW46IGNoaWxkcmVuIH07XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIENvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGNoaWxkRmFjdG9yeSA9IF9wcm9wcy5jaGlsZEZhY3RvcnksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjb21wb25lbnQnLCAnY2hpbGRGYWN0b3J5J10pO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdmFsdWVzKHRoaXMuc3RhdGUuY2hpbGRyZW4pLm1hcChjaGlsZEZhY3RvcnkpO1xuXG4gICAgZGVsZXRlIHByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmV4aXQ7XG5cbiAgICBpZiAoQ29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHByb3BzLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuXG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gcHJvcFR5cGVzIDoge307XG5UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2l0aW9uR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGNvbnN0IGlzU2VsZWN0ZWRBbGwgPSAoeyBkYXRhLCBzZWxlY3RlZCB9KSA9PiBkYXRhLmxlbmd0aCA9PT0gc2VsZWN0ZWQubGVuZ3RoO1xuXG5leHBvcnQgY29uc3QgaXNBbnlTZWxlY3RlZFJvdyA9ICh7IHNlbGVjdGVkIH0pID0+IChza2lwcyA9IFtdKSA9PiB7XG4gIGlmIChza2lwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gc2VsZWN0ZWQubGVuZ3RoID4gMDtcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWQuZmlsdGVyKHggPT4gIXNraXBzLmluY2x1ZGVzKHgpKS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0YWJsZUtleXMgPSAoeyBkYXRhLCBrZXlGaWVsZCB9KSA9PiAoc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKHJvdyA9PiBfLmdldChyb3csIGtleUZpZWxkKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbiAgICAuZmlsdGVyKHJvdyA9PiAhc2tpcHMuaW5jbHVkZXMoXy5nZXQocm93LCBrZXlGaWVsZCkpKVxuICAgIC5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1blNlbGVjdGFibGVLZXlzID0gKHsgc2VsZWN0ZWQgfSkgPT4gKHNraXBzID0gW10pID0+IHtcbiAgaWYgKHNraXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWQuZmlsdGVyKHggPT4gc2tpcHMuaW5jbHVkZXMoeCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUm93cyA9IChzdG9yZSkgPT4ge1xuICBjb25zdCBnZXRSb3cgPSBnZXRSb3dCeVJvd0lkKHN0b3JlKTtcbiAgcmV0dXJuIHN0b3JlLnNlbGVjdGVkLm1hcChrID0+IGdldFJvdyhrKSk7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zZWxlY3Rpb24uanMiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgUmVtb3RlUmVzb2x2ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBnZXROZXdlc3RTdGF0ZShzdGF0ZSA9IHt9KSB7XG4gICAgICBjb25zdCBzdG9yZSA9IHRoaXMuc3RvcmUgfHwgdGhpcy5wcm9wcy5zdG9yZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2U6IHN0b3JlLnBhZ2UsXG4gICAgICAgIHNpemVQZXJQYWdlOiBzdG9yZS5zaXplUGVyUGFnZSxcbiAgICAgICAgZmlsdGVyczogc3RvcmUuZmlsdGVycyxcbiAgICAgICAgc29ydEZpZWxkOiBzdG9yZS5zb3J0RmllbGQsXG4gICAgICAgIHNvcnRPcmRlcjogc3RvcmUuc29ydE9yZGVyLFxuICAgICAgICBkYXRhOiBzdG9yZS5nZXRBbGxEYXRhKCksXG4gICAgICAgIC4uLnN0YXRlXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlzUmVtb3RlUGFnaW5hdGlvbigpIHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5wYWdpbmF0aW9uKTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZUZpbHRlcmluZygpIHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5maWx0ZXIpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlU29ydCgpIHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5zb3J0KTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZUNlbGxFZGl0KCkge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLmNlbGxFZGl0KTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVQYWdlQ2hhbmdlKCkge1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdwYWdpbmF0aW9uJywgdGhpcy5nZXROZXdlc3RTdGF0ZSgpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVGaWx0ZXJDaGFuZ2UoKSB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuICAgICAgaWYgKHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucHJvcHMucGFnaW5hdGlvbi5vcHRpb25zIHx8IHt9O1xuICAgICAgICBuZXdTdGF0ZS5wYWdlID0gXy5pc0RlZmluZWQob3B0aW9ucy5wYWdlU3RhcnRJbmRleCkgPyBvcHRpb25zLnBhZ2VTdGFydEluZGV4IDogMTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgnZmlsdGVyJywgdGhpcy5nZXROZXdlc3RTdGF0ZShuZXdTdGF0ZSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVNvcnRDaGFuZ2UoKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ3NvcnQnLCB0aGlzLmdldE5ld2VzdFN0YXRlKCkpO1xuICAgIH1cblxuICAgIGhhbmRsZUNlbGxDaGFuZ2Uocm93SWQsIGRhdGFGaWVsZCwgbmV3VmFsdWUpIHtcbiAgICAgIGNvbnN0IGNlbGxFZGl0ID0geyByb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSB9O1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdjZWxsRWRpdCcsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBjZWxsRWRpdCB9KSk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvcmVtb3RlLXJlc29sdmVyLmpzIiwiaW1wb3J0IEJvb3RzdHJhcFRhYmxlIGZyb20gJy4vc3JjL2Jvb3RzdHJhcC10YWJsZSc7XG5pbXBvcnQgd2l0aERhdGFTdG9yZSBmcm9tICcuL3NyYy9jb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YVN0b3JlKEJvb3RzdHJhcFRhYmxlKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9pbmRleC5qcyIsIi8qIGVzbGludCBhcnJvdy1ib2R5LXN0eWxlOiAwICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBDYXB0aW9uIGZyb20gJy4vY2FwdGlvbic7XG5pbXBvcnQgQm9keSBmcm9tICcuL2JvZHknO1xuaW1wb3J0IFByb3BzQmFzZVJlc29sdmVyIGZyb20gJy4vcHJvcHMtcmVzb2x2ZXInO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IHsgaXNTZWxlY3RlZEFsbCB9IGZyb20gJy4vc3RvcmUvc2VsZWN0aW9uJztcblxuY2xhc3MgQm9vdHN0cmFwVGFibGUgZXh0ZW5kcyBQcm9wc0Jhc2VSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy52YWxpZGF0ZVByb3BzKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogcHJvcHMuZGF0YVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogbmV4dFByb3BzLmRhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIG92ZXJsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGFibGUgPSB0aGlzLnJlbmRlclRhYmxlKCk7XG4gICAgaWYgKGxvYWRpbmcgJiYgb3ZlcmxheSkge1xuICAgICAgY29uc3QgTG9hZGluZ092ZXJsYXkgPSBvdmVybGF5KHRhYmxlLCBsb2FkaW5nKTtcbiAgICAgIHJldHVybiA8TG9hZGluZ092ZXJsYXkgLz47XG4gICAgfVxuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuXG4gIHJlbmRlclRhYmxlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0b3JlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgaWQsXG4gICAgICBjbGFzc2VzLFxuICAgICAgc3RyaXBlZCxcbiAgICAgIGhvdmVyLFxuICAgICAgYm9yZGVyZWQsXG4gICAgICBjb25kZW5zZWQsXG4gICAgICBub0RhdGFJbmRpY2F0aW9uLFxuICAgICAgY2FwdGlvbixcbiAgICAgIHJvd1N0eWxlLFxuICAgICAgcm93Q2xhc3NlcyxcbiAgICAgIHdyYXBwZXJDbGFzc2VzLFxuICAgICAgcm93RXZlbnRzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0YWJsZVdyYXBwZXJDbGFzcyA9IGNzKCdyZWFjdC1ib290c3RyYXAtdGFibGUnLCB3cmFwcGVyQ2xhc3Nlcyk7XG5cbiAgICBjb25zdCB0YWJsZUNsYXNzID0gY3MoJ3RhYmxlJywge1xuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiBzdHJpcGVkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogaG92ZXIsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiBib3JkZXJlZCxcbiAgICAgICd0YWJsZS1jb25kZW5zZWQnOiBjb25kZW5zZWRcbiAgICB9LCBjbGFzc2VzKTtcblxuICAgIGNvbnN0IGNlbGxTZWxlY3Rpb25JbmZvID0gdGhpcy5yZXNvbHZlU2VsZWN0Um93UHJvcHMoe1xuICAgICAgb25Sb3dTZWxlY3Q6IHRoaXMucHJvcHMub25Sb3dTZWxlY3RcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlckNlbGxTZWxlY3Rpb25JbmZvID0gdGhpcy5yZXNvbHZlU2VsZWN0Um93UHJvcHNGb3JIZWFkZXIoe1xuICAgICAgb25BbGxSb3dzU2VsZWN0OiB0aGlzLnByb3BzLm9uQWxsUm93c1NlbGVjdCxcbiAgICAgIHNlbGVjdGVkOiBzdG9yZS5zZWxlY3RlZCxcbiAgICAgIGFsbFJvd3NTZWxlY3RlZDogaXNTZWxlY3RlZEFsbChzdG9yZSlcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhYmxlQ2FwdGlvbiA9IChjYXB0aW9uICYmIDxDYXB0aW9uPnsgY2FwdGlvbiB9PC9DYXB0aW9uPik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyB0YWJsZVdyYXBwZXJDbGFzcyB9PlxuICAgICAgICA8dGFibGUgaWQ9eyBpZCB9IGNsYXNzTmFtZT17IHRhYmxlQ2xhc3MgfT5cbiAgICAgICAgICB7IHRhYmxlQ2FwdGlvbiB9XG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICAgICAgc29ydEZpZWxkPXsgc3RvcmUuc29ydEZpZWxkIH1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17IHN0b3JlLnNvcnRPcmRlciB9XG4gICAgICAgICAgICBvblNvcnQ9eyB0aGlzLnByb3BzLm9uU29ydCB9XG4gICAgICAgICAgICBvbkZpbHRlcj17IHRoaXMucHJvcHMub25GaWx0ZXIgfVxuICAgICAgICAgICAgc2VsZWN0Um93PXsgaGVhZGVyQ2VsbFNlbGVjdGlvbkluZm8gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJvZHlcbiAgICAgICAgICAgIGRhdGE9eyB0aGlzLnN0YXRlLmRhdGEgfVxuICAgICAgICAgICAga2V5RmllbGQ9eyBrZXlGaWVsZCB9XG4gICAgICAgICAgICBjb2x1bW5zPXsgY29sdW1ucyB9XG4gICAgICAgICAgICBpc0VtcHR5PXsgdGhpcy5pc0VtcHR5KCkgfVxuICAgICAgICAgICAgdmlzaWJsZUNvbHVtblNpemU9eyB0aGlzLnZpc2libGVDb2x1bW5TaXplKCkgfVxuICAgICAgICAgICAgbm9EYXRhSW5kaWNhdGlvbj17IG5vRGF0YUluZGljYXRpb24gfVxuICAgICAgICAgICAgY2VsbEVkaXQ9eyB0aGlzLnByb3BzLmNlbGxFZGl0IHx8IHt9IH1cbiAgICAgICAgICAgIHNlbGVjdFJvdz17IGNlbGxTZWxlY3Rpb25JbmZvIH1cbiAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5cz17IHN0b3JlLnNlbGVjdGVkIH1cbiAgICAgICAgICAgIHJvd1N0eWxlPXsgcm93U3R5bGUgfVxuICAgICAgICAgICAgcm93Q2xhc3Nlcz17IHJvd0NsYXNzZXMgfVxuICAgICAgICAgICAgcm93RXZlbnRzPXsgcm93RXZlbnRzIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Cb290c3RyYXBUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgcmVtb3RlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMuYm9vbFxuICB9KV0pLFxuICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgbm9EYXRhSW5kaWNhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgc3RyaXBlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGJvcmRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaG92ZXI6IFByb3BUeXBlcy5ib29sLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbmRlbnNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNhcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSksXG4gIHBhZ2luYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2VsbEVkaXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtb2RlOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlJPV19TRUxFQ1RfU0lOR0xFLCBDb25zdC5ST1dfU0VMRUNUX01VTFRJUExFXSkuaXNSZXF1aXJlZCxcbiAgICBjbGlja1RvU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGlja1RvRWRpdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0QWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIG5vblNlbGVjdGFibGU6IFByb3BUeXBlcy5hcnJheSxcbiAgICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhpZGVTZWxlY3RDb2x1bW46IFByb3BUeXBlcy5ib29sXG4gIH0pLFxuICBvblJvd1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQWxsUm93c1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHJvd1N0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICByb3dFdmVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJvd0NsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pLmlzUmVxdWlyZWRcbiAgfSkpLFxuICBkZWZhdWx0U29ydERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSksXG4gIG92ZXJsYXk6IFByb3BUeXBlcy5mdW5jLFxuICBvblRhYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Cb290c3RyYXBUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlbW90ZTogZmFsc2UsXG4gIHN0cmlwZWQ6IGZhbHNlLFxuICBib3JkZXJlZDogdHJ1ZSxcbiAgaG92ZXI6IGZhbHNlLFxuICBjb25kZW5zZWQ6IGZhbHNlLFxuICBub0RhdGFJbmRpY2F0aW9uOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb290c3RyYXBUYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Jvb3RzdHJhcC10YWJsZS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuXG5pbXBvcnQgSGVhZGVyQ2VsbCBmcm9tICcuL2hlYWRlci1jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25IZWFkZXJDZWxsIGZyb20gJy4vcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24taGVhZGVyLWNlbGwnO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBST1dfU0VMRUNUX0RJU0FCTEVEIH0gPSBDb25zdDtcblxuICBjb25zdCB7XG4gICAgY29sdW1ucyxcbiAgICBvblNvcnQsXG4gICAgb25GaWx0ZXIsXG4gICAgc29ydEZpZWxkLFxuICAgIHNvcnRPcmRlcixcbiAgICBzZWxlY3RSb3dcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPHRoZWFkPlxuICAgICAgPHRyPlxuICAgICAgICB7XG4gICAgICAgICAgKHNlbGVjdFJvdy5tb2RlICE9PSBST1dfU0VMRUNUX0RJU0FCTEVEICYmICFzZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbilcbiAgICAgICAgICAgID8gPFNlbGVjdGlvbkhlYWRlckNlbGwgeyAuLi5zZWxlY3RSb3cgfSAvPiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgY29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb2x1bW4uaGlkZGVuKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJTb3J0ID0gY29sdW1uLmRhdGFGaWVsZCA9PT0gc29ydEZpZWxkO1xuICAgICAgICAgICAgICBjb25zdCBpc0xhc3RTb3J0aW5nID0gY29sdW1uLmRhdGFGaWVsZCA9PT0gc29ydEZpZWxkO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEhlYWRlckNlbGxcbiAgICAgICAgICAgICAgICAgIGluZGV4PXsgaSB9XG4gICAgICAgICAgICAgICAgICBrZXk9eyBjb2x1bW4uZGF0YUZpZWxkIH1cbiAgICAgICAgICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgICAgICAgICBvblNvcnQ9eyBvblNvcnQgfVxuICAgICAgICAgICAgICAgICAgc29ydGluZz17IGN1cnJTb3J0IH1cbiAgICAgICAgICAgICAgICAgIG9uRmlsdGVyPXsgb25GaWx0ZXIgfVxuICAgICAgICAgICAgICAgICAgc29ydE9yZGVyPXsgc29ydE9yZGVyIH1cbiAgICAgICAgICAgICAgICAgIGlzTGFzdFNvcnRpbmc9eyBpc0xhc3RTb3J0aW5nIH1cbiAgICAgICAgICAgICAgICAvPik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICApO1xufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc29ydEZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzb3J0T3JkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBTb3J0U3ltYm9sIGZyb20gJy4vc29ydC9zeW1ib2wnO1xuaW1wb3J0IFNvcnRDYXJldCBmcm9tICcuL3NvcnQvY2FyZXQnO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cblxuY29uc3QgSGVhZGVyQ2VsbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY29sdW1uLFxuICAgIGluZGV4LFxuICAgIG9uU29ydCxcbiAgICBzb3J0aW5nLFxuICAgIHNvcnRPcmRlcixcbiAgICBpc0xhc3RTb3J0aW5nLFxuICAgIG9uRmlsdGVyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgdGV4dCxcbiAgICBzb3J0LFxuICAgIGZpbHRlcixcbiAgICBoZWFkZXJUaXRsZSxcbiAgICBoZWFkZXJBbGlnbixcbiAgICBoZWFkZXJGb3JtYXR0ZXIsXG4gICAgaGVhZGVyRXZlbnRzLFxuICAgIGhlYWRlckNsYXNzZXMsXG4gICAgaGVhZGVyU3R5bGUsXG4gICAgaGVhZGVyQXR0cnMsXG4gICAgaGVhZGVyU29ydGluZ0NsYXNzZXMsXG4gICAgaGVhZGVyU29ydGluZ1N0eWxlXG4gIH0gPSBjb2x1bW47XG5cbiAgY29uc3QgY2VsbEF0dHJzID0ge1xuICAgIC4uLl8uaXNGdW5jdGlvbihoZWFkZXJBdHRycykgPyBoZWFkZXJBdHRycyhjb2x1bW4sIGluZGV4KSA6IGhlYWRlckF0dHJzLFxuICAgIC4uLmhlYWRlckV2ZW50c1xuICB9O1xuXG4gIGxldCBzb3J0U3ltYm9sO1xuICBsZXQgZmlsdGVyRWxtO1xuICBsZXQgY2VsbFN0eWxlID0ge307XG4gIGxldCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihoZWFkZXJDbGFzc2VzKSA/IGhlYWRlckNsYXNzZXMoY29sdW1uLCBpbmRleCkgOiBoZWFkZXJDbGFzc2VzO1xuXG4gIGlmIChoZWFkZXJTdHlsZSkge1xuICAgIGNlbGxTdHlsZSA9IF8uaXNGdW5jdGlvbihoZWFkZXJTdHlsZSkgPyBoZWFkZXJTdHlsZShjb2x1bW4sIGluZGV4KSA6IGhlYWRlclN0eWxlO1xuICB9XG5cbiAgaWYgKGhlYWRlclRpdGxlKSB7XG4gICAgY2VsbEF0dHJzLnRpdGxlID0gXy5pc0Z1bmN0aW9uKGhlYWRlclRpdGxlKSA/IGhlYWRlclRpdGxlKGNvbHVtbiwgaW5kZXgpIDogdGV4dDtcbiAgfVxuXG4gIGlmIChoZWFkZXJBbGlnbikge1xuICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPSBfLmlzRnVuY3Rpb24oaGVhZGVyQWxpZ24pID8gaGVhZGVyQWxpZ24oY29sdW1uLCBpbmRleCkgOiBoZWFkZXJBbGlnbjtcbiAgfVxuXG4gIGlmIChzb3J0KSB7XG4gICAgY29uc3QgY3VzdG9tQ2xpY2sgPSBjZWxsQXR0cnMub25DbGljaztcbiAgICBjZWxsQXR0cnMub25DbGljayA9IChlKSA9PiB7XG4gICAgICBvblNvcnQoY29sdW1uKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY3VzdG9tQ2xpY2spKSBjdXN0b21DbGljayhlKTtcbiAgICB9O1xuICAgIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjcyhjZWxsQXR0cnMuY2xhc3NOYW1lLCAnc29ydGFibGUnKTtcblxuICAgIGlmIChzb3J0aW5nKSB7XG4gICAgICBzb3J0U3ltYm9sID0gPFNvcnRDYXJldCBvcmRlcj17IHNvcnRPcmRlciB9IC8+O1xuXG4gICAgICAvLyBhcHBlbmQgY3VzdG9taXplZCBjbGFzc2VzIG9yIHN0eWxlIGlmIHRhYmxlIHdhcyBzb3J0aW5nIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvbHVtbi5cbiAgICAgIGNlbGxDbGFzc2VzID0gY3MoXG4gICAgICAgIGNlbGxDbGFzc2VzLFxuICAgICAgICBfLmlzRnVuY3Rpb24oaGVhZGVyU29ydGluZ0NsYXNzZXMpXG4gICAgICAgICAgPyBoZWFkZXJTb3J0aW5nQ2xhc3Nlcyhjb2x1bW4sIHNvcnRPcmRlciwgaXNMYXN0U29ydGluZywgaW5kZXgpXG4gICAgICAgICAgOiBoZWFkZXJTb3J0aW5nQ2xhc3Nlc1xuICAgICAgKTtcblxuICAgICAgY2VsbFN0eWxlID0ge1xuICAgICAgICAuLi5jZWxsU3R5bGUsXG4gICAgICAgIC4uLl8uaXNGdW5jdGlvbihoZWFkZXJTb3J0aW5nU3R5bGUpXG4gICAgICAgICAgPyBoZWFkZXJTb3J0aW5nU3R5bGUoY29sdW1uLCBzb3J0T3JkZXIsIGlzTGFzdFNvcnRpbmcsIGluZGV4KVxuICAgICAgICAgIDogaGVhZGVyU29ydGluZ1N0eWxlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0U3ltYm9sID0gPFNvcnRTeW1ib2wgLz47XG4gICAgfVxuICB9XG5cbiAgaWYgKGNlbGxDbGFzc2VzKSBjZWxsQXR0cnMuY2xhc3NOYW1lID0gY3MoY2VsbEF0dHJzLmNsYXNzTmFtZSwgY2VsbENsYXNzZXMpO1xuICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG4gIGlmIChmaWx0ZXIpIHtcbiAgICBmaWx0ZXJFbG0gPSA8ZmlsdGVyLkZpbHRlciB7IC4uLmZpbHRlci5wcm9wcyB9IG9uRmlsdGVyPXsgb25GaWx0ZXIgfSBjb2x1bW49eyBjb2x1bW4gfSAvPjtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkcmVuID0gaGVhZGVyRm9ybWF0dGVyID9cbiAgICBoZWFkZXJGb3JtYXR0ZXIoY29sdW1uLCBpbmRleCwgeyBzb3J0RWxlbWVudDogc29ydFN5bWJvbCwgZmlsdGVyRWxlbWVudDogZmlsdGVyRWxtIH0pIDpcbiAgICB0ZXh0O1xuXG4gIGlmIChoZWFkZXJGb3JtYXR0ZXIpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCBjZWxsQXR0cnMsIGNoaWxkcmVuKTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIGNlbGxBdHRycywgY2hpbGRyZW4sIHNvcnRTeW1ib2wsIGZpbHRlckVsbSk7XG59O1xuXG5IZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGhlYWRlckZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmb3JtYXRFeHRyYURhdGE6IFByb3BUeXBlcy5hbnksXG4gICAgaGVhZGVyQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlclRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyRXZlbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGV2ZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBoZWFkZXJBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJBdHRyczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBhdHRyczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBzb3J0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzb3J0RnVuYzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBlZGl0b3I6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZWRpdGFibGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRDZWxsU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdENlbGxDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvclN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvckNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdG9yUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZhbGlkYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZpbHRlclZhbHVlOiBQcm9wVHlwZXMuZnVuY1xuICB9KS5pc1JlcXVpcmVkLFxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzb3J0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc29ydE9yZGVyOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfQVNDLCBDb25zdC5TT1JUX0RFU0NdKSxcbiAgaXNMYXN0U29ydGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ2VsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci1jZWxsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU29ydFN5bWJvbCA9ICgpID0+IChcbiAgPHNwYW4gY2xhc3NOYW1lPVwib3JkZXJcIj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wdXBcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgLz5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj4pO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0U3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9zeW1ib2wuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuY29uc3QgU29ydENhcmV0ID0gKHsgb3JkZXIgfSkgPT4ge1xuICBjb25zdCBvcmRlckNsYXNzID0gY3MoJ3JlYWN0LWJvb3RzdHJhcC10YWJsZS1zb3J0LW9yZGVyJywge1xuICAgIGRyb3B1cDogb3JkZXIgPT09IENvbnN0LlNPUlRfQVNDXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17IG9yZGVyQ2xhc3MgfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgLz5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5Tb3J0Q2FyZXQucHJvcFR5cGVzID0ge1xuICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0FTQywgQ29uc3QuU09SVF9ERVNDXSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydCBkZWZhdWx0IFNvcnRDYXJldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvY2FyZXQuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmV4cG9ydCBjb25zdCBDaGVja0JveCA9ICh7IGNoZWNrZWQsIGluZGV0ZXJtaW5hdGUgfSkgPT4gKFxuICA8aW5wdXRcbiAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICByZWY9eyAoaW5wdXQpID0+IHtcbiAgICAgIGlmIChpbnB1dCkgaW5wdXQuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9IH1cbiAgLz5cbik7XG5cbkNoZWNrQm94LnByb3BUeXBlcyA9IHtcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uSGVhZGVyQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWRTdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25BbGxSb3dzU2VsZWN0OiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhdm9pZCB1cGRhdGluZyBpZiBidXR0b24gaXNcbiAgICogMS4gcmFkaW9cbiAgICogMi4gc3RhdHVzIHdhcyBub3QgY2hhbmdlZC5cbiAgICovXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IFJPV19TRUxFQ1RfU0lOR0xFIH0gPSBDb25zdDtcbiAgICBjb25zdCB7IG1vZGUsIGNoZWNrZWRTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9TSU5HTEUpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXh0UHJvcHMuY2hlY2tlZFN0YXR1cyAhPT0gY2hlY2tlZFN0YXR1cztcbiAgfVxuXG4gIGhhbmRsZUNoZWNrQm94Q2xpY2soZSkge1xuICAgIGNvbnN0IHsgb25BbGxSb3dzU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgb25BbGxSb3dzU2VsZWN0KGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIENIRUNLQk9YX1NUQVRVU19DSEVDS0VELCBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURSwgUk9XX1NFTEVDVF9TSU5HTEVcbiAgICB9ID0gQ29uc3Q7XG5cbiAgICBjb25zdCB7IG1vZGUsIGNoZWNrZWRTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjaGVja2VkID0gY2hlY2tlZFN0YXR1cyA9PT0gQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ7XG5cbiAgICBjb25zdCBpbmRldGVybWluYXRlID0gY2hlY2tlZFN0YXR1cyA9PT0gQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEU7XG5cbiAgICByZXR1cm4gbW9kZSA9PT0gUk9XX1NFTEVDVF9TSU5HTEVcbiAgICAgID8gPHRoIGRhdGEtcm93LXNlbGVjdGlvbiAvPlxuICAgICAgOiAoXG4gICAgICAgIDx0aCBkYXRhLXJvdy1zZWxlY3Rpb24gb25DbGljaz17IHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljayB9PlxuICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9eyBpbmRldGVybWluYXRlIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RoPlxuICAgICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24taGVhZGVyLWNlbGwuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQ2FwdGlvbiA9IChwcm9wcykgPT4ge1xuICBpZiAoIXByb3BzLmNoaWxkcmVuKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8Y2FwdGlvbj57IHByb3BzLmNoaWxkcmVuIH08L2NhcHRpb24+XG4gICk7XG59O1xuXG5DYXB0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jYXB0aW9uLmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBGbGlwTW92ZSBmcm9tICdyZWFjdC1mbGlwLW1vdmUnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBSb3cgZnJvbSAnLi9yb3cnO1xuaW1wb3J0IFJvd1NlY3Rpb24gZnJvbSAnLi9yb3ctc2VjdGlvbic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmNvbnN0IEJvZHkgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbHVtbnMsXG4gICAgZGF0YSxcbiAgICBrZXlGaWVsZCxcbiAgICBpc0VtcHR5LFxuICAgIG5vRGF0YUluZGljYXRpb24sXG4gICAgdmlzaWJsZUNvbHVtblNpemUsXG4gICAgY2VsbEVkaXQsXG4gICAgc2VsZWN0Um93LFxuICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICByb3dTdHlsZSxcbiAgICByb3dDbGFzc2VzLFxuICAgIHJvd0V2ZW50c1xuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIGJnQ29sb3IsXG4gICAgbm9uU2VsZWN0YWJsZVxuICB9ID0gc2VsZWN0Um93O1xuXG4gIGxldCBjb250ZW50O1xuXG4gIGlmIChpc0VtcHR5KSB7XG4gICAgY29uc3QgaW5kaWNhdGlvbiA9IF8uaXNGdW5jdGlvbihub0RhdGFJbmRpY2F0aW9uKSA/IG5vRGF0YUluZGljYXRpb24oKSA6IG5vRGF0YUluZGljYXRpb247XG4gICAgaWYgKCFpbmRpY2F0aW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29udGVudCA9IDxSb3dTZWN0aW9uIGNvbnRlbnQ9eyBpbmRpY2F0aW9uIH0gY29sU3Bhbj17IHZpc2libGVDb2x1bW5TaXplIH0gLz47XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uRWRpdGFibGVSb3dzID0gY2VsbEVkaXQubm9uRWRpdGFibGVSb3dzIHx8IFtdO1xuICAgIGNvbnRlbnQgPSBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gXy5nZXQocm93LCBrZXlGaWVsZCk7XG4gICAgICBjb25zdCBlZGl0YWJsZSA9ICEobm9uRWRpdGFibGVSb3dzLmxlbmd0aCA+IDAgJiYgbm9uRWRpdGFibGVSb3dzLmluZGV4T2Yoa2V5KSA+IC0xKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RSb3cubW9kZSAhPT0gQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRFxuICAgICAgICA/IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpXG4gICAgICAgIDogbnVsbDtcblxuICAgICAgY29uc3QgYXR0cnMgPSByb3dFdmVudHMgfHwge307XG4gICAgICBsZXQgc3R5bGUgPSBfLmlzRnVuY3Rpb24ocm93U3R5bGUpID8gcm93U3R5bGUocm93LCBpbmRleCkgOiByb3dTdHlsZTtcbiAgICAgIGxldCBjbGFzc2VzID0gKF8uaXNGdW5jdGlvbihyb3dDbGFzc2VzKSA/IHJvd0NsYXNzZXMocm93LCBpbmRleCkgOiByb3dDbGFzc2VzKTtcbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFN0eWxlID0gXy5pc0Z1bmN0aW9uKHNlbGVjdFJvdy5zdHlsZSlcbiAgICAgICAgICA/IHNlbGVjdFJvdy5zdHlsZShyb3csIGluZGV4KVxuICAgICAgICAgIDogc2VsZWN0Um93LnN0eWxlO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cuY2xhc3NlcylcbiAgICAgICAgICA/IHNlbGVjdFJvdy5jbGFzc2VzKHJvdywgaW5kZXgpXG4gICAgICAgICAgOiBzZWxlY3RSb3cuY2xhc3NlcztcblxuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAuLi5zZWxlY3RlZFN0eWxlXG4gICAgICAgIH07XG4gICAgICAgIGNsYXNzZXMgPSBjcyhjbGFzc2VzLCBzZWxlY3RlZENsYXNzZXMpO1xuXG4gICAgICAgIGlmIChiZ0NvbG9yKSB7XG4gICAgICAgICAgc3R5bGUgPSBzdHlsZSB8fCB7fTtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBfLmlzRnVuY3Rpb24oYmdDb2xvcikgPyBiZ0NvbG9yKHJvdywgaW5kZXgpIDogYmdDb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RhYmxlID0gIW5vblNlbGVjdGFibGUgfHwgIW5vblNlbGVjdGFibGUuaW5jbHVkZXMoa2V5KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBrZXk9eyBgY3NzLXRyYW5zaXRpb24tJHtrZXl9YCB9XG4gICAgICAgICAgY2xhc3NOYW1lcz1cInRyXCJcbiAgICAgICAgICB0aW1lb3V0PXsgNTAwIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxGbGlwTW92ZSB0eXBlTmFtZT17IG51bGwgfT5cbiAgICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgICAga2V5PXsga2V5IH1cbiAgICAgICAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgICAgICAga2V5RmllbGQ9eyBrZXlGaWVsZCB9XG4gICAgICAgICAgICAgIHJvd0luZGV4PXsgaW5kZXggfVxuICAgICAgICAgICAgICBjb2x1bW5zPXsgY29sdW1ucyB9XG4gICAgICAgICAgICAgIGNlbGxFZGl0PXsgY2VsbEVkaXQgfVxuICAgICAgICAgICAgICBlZGl0YWJsZT17IGVkaXRhYmxlIH1cbiAgICAgICAgICAgICAgc2VsZWN0YWJsZT17IHNlbGVjdGFibGUgfVxuICAgICAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzZXMgfVxuICAgICAgICAgICAgICBhdHRycz17IGF0dHJzIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GbGlwTW92ZT5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb25Hcm91cFxuICAgICAgY29tcG9uZW50PVwidGJvZHlcIlxuICAgID5cbiAgICAgIHsgY29udGVudCB9XG4gICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICk7XG59O1xuXG5Cb2R5LnByb3BUeXBlcyA9IHtcbiAga2V5RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBzZWxlY3RSb3c6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlbGVjdGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9keS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9DU1NUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9DU1NUcmFuc2l0aW9uJyk7XG5cbnZhciBfQ1NTVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DU1NUcmFuc2l0aW9uKTtcblxudmFyIF9SZXBsYWNlVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vUmVwbGFjZVRyYW5zaXRpb24nKTtcblxudmFyIF9SZXBsYWNlVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZXBsYWNlVHJhbnNpdGlvbik7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uR3JvdXAnKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbkdyb3VwKTtcblxudmFyIF9UcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uJyk7XG5cbnZhciBfVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFuc2l0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRyYW5zaXRpb246IF9UcmFuc2l0aW9uMi5kZWZhdWx0LFxuICBUcmFuc2l0aW9uR3JvdXA6IF9UcmFuc2l0aW9uR3JvdXAyLmRlZmF1bHQsXG4gIFJlcGxhY2VUcmFuc2l0aW9uOiBfUmVwbGFjZVRyYW5zaXRpb24yLmRlZmF1bHQsXG4gIENTU1RyYW5zaXRpb246IF9DU1NUcmFuc2l0aW9uMi5kZWZhdWx0XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wcm9wVHlwZXMpO1xuXG52YXIgX2FkZENsYXNzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MnKTtcblxudmFyIF9hZGRDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRDbGFzcyk7XG5cbnZhciBfcmVtb3ZlQ2xhc3MgPSByZXF1aXJlKCdkb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcycpO1xuXG52YXIgX3JlbW92ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbW92ZUNsYXNzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICgwLCBfYWRkQ2xhc3MyLmRlZmF1bHQpKG5vZGUsIGMpO1xuICB9KTtcbn07XG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gKDAsIF9yZW1vdmVDbGFzczIuZGVmYXVsdCkobm9kZSwgYyk7XG4gIH0pO1xufTtcblxudmFyIHByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBfVHJhbnNpdGlvbjIuZGVmYXVsdC5wcm9wVHlwZXMsIHtcblxuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiBjbGFzc05hbWVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBhcyBpdCBlbnRlcnMsIGV4aXRzIG9yIGhhcyBmaW5pc2hlZCB0aGUgdHJhbnNpdGlvbi5cbiAgICogQSBzaW5nbGUgbmFtZSBjYW4gYmUgcHJvdmlkZWQgYW5kIGl0IHdpbGwgYmUgc3VmZml4ZWQgZm9yIGVhY2ggc3RhZ2U6IGUuZy5cbiAgICpcbiAgICogYGNsYXNzTmFtZXM9XCJmYWRlXCJgIGFwcGxpZXMgYGZhZGUtZW50ZXJgLCBgZmFkZS1lbnRlci1hY3RpdmVgLCBgZmFkZS1lbnRlci1kb25lYCxcbiAgICogYGZhZGUtZXhpdGAsIGBmYWRlLWV4aXQtYWN0aXZlYCwgYGZhZGUtZXhpdC1kb25lYCwgYGZhZGUtYXBwZWFyYCwgYW5kIGBmYWRlLWFwcGVhci1hY3RpdmVgLlxuICAgKiBFYWNoIGluZGl2aWR1YWwgY2xhc3NOYW1lcyBjYW4gYWxzbyBiZSBzcGVjaWZpZWQgaW5kZXBlbmRlbnRseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7XG4gICAqICBhcHBlYXI6ICdteS1hcHBlYXInLFxuICAgKiAgYXBwZWFyQWN0aXZlOiAnbXktYWN0aXZlLWFwcGVhcicsXG4gICAqICBlbnRlcjogJ215LWVudGVyJyxcbiAgICogIGVudGVyQWN0aXZlOiAnbXktYWN0aXZlLWVudGVyJyxcbiAgICogIGVudGVyRG9uZTogJ215LWRvbmUtZW50ZXInLFxuICAgKiAgZXhpdDogJ215LWV4aXQnLFxuICAgKiAgZXhpdEFjdGl2ZTogJ215LWFjdGl2ZS1leGl0JyxcbiAgICogIGV4aXREb25lOiAnbXktZG9uZS1leGl0JyxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB7XG4gICAqICBhcHBlYXI/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBlbnRlcj86IHN0cmluZyxcbiAgICogIGVudGVyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZW50ZXJEb25lPzogc3RyaW5nLFxuICAgKiAgZXhpdD86IHN0cmluZyxcbiAgICogIGV4aXRBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBleGl0RG9uZT86IHN0cmluZyxcbiAgICogfX1cbiAgICovXG4gIGNsYXNzTmFtZXM6IF9Qcm9wVHlwZXMuY2xhc3NOYW1lc1NoYXBlLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yICdhcHBlYXInIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXItYWN0aXZlJyBvclxuICAgKiAnYXBwZWFyLWFjdGl2ZScgY2xhc3MgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3JcbiAgICogJ2FwcGVhcicgY2xhc3NlcyBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdC1hY3RpdmUnIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50XG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3Nlc1xuICAgKiBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZXhpdC1kb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59KTtcblxuLyoqXG4gKiBBIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgdXNpbmcgQ1NTIHRyYW5zaXRpb25zIGFuZCBhbmltYXRpb25zLlxuICogSXQncyBpbnNwaXJlZCBieSB0aGUgZXhjZWxsZW50IFtuZy1hbmltYXRlXShodHRwOi8vd3d3Lm5nYW5pbWF0ZS5vcmcvKSBsaWJyYXJ5LlxuICpcbiAqIGBDU1NUcmFuc2l0aW9uYCBhcHBsaWVzIGEgcGFpciBvZiBjbGFzcyBuYW1lcyBkdXJpbmcgdGhlIGBhcHBlYXJgLCBgZW50ZXJgLFxuICogYW5kIGBleGl0YCBzdGFnZXMgb2YgdGhlIHRyYW5zaXRpb24uIFRoZSBmaXJzdCBjbGFzcyBpcyBhcHBsaWVkIGFuZCB0aGVuIGFcbiAqIHNlY29uZCBcImFjdGl2ZVwiIGNsYXNzIGluIG9yZGVyIHRvIGFjdGl2YXRlIHRoZSBjc3MgYW5pbWF0aW9uLiBBZnRlciB0aGUgYW5pbWF0aW9uLFxuICogbWF0Y2hpbmcgYGRvbmVgIGNsYXNzIG5hbWVzIGFyZSBhcHBsaWVkIHRvIHBlcnNpc3QgdGhlIGFuaW1hdGlvbiBzdGF0ZS5cbiAqXG4gKiBXaGVuIHRoZSBgaW5gIHByb3AgaXMgdG9nZ2xlZCB0byBgdHJ1ZWAgdGhlIENvbXBvbmVudCB3aWxsIGdldFxuICogdGhlIGBleGFtcGxlLWVudGVyYCBDU1MgY2xhc3MgYW5kIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIENTUyBjbGFzc1xuICogYWRkZWQgaW4gdGhlIG5leHQgdGljay4gVGhpcyBpcyBhIGNvbnZlbnRpb24gYmFzZWQgb24gdGhlIGBjbGFzc05hbWVzYCBwcm9wLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvbTc3bDJ2cDAweD9mb250c2l6ZT0xNFwiIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCIgc2FuZGJveD1cImFsbG93LW1vZGFscyBhbGxvdy1mb3JtcyBhbGxvdy1wb3B1cHMgYWxsb3ctc2NyaXB0cyBhbGxvdy1zYW1lLW9yaWdpblwiPjwvaWZyYW1lPlxuICovXG5cbnZhciBDU1NUcmFuc2l0aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENTU1RyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENTU1RyYW5zaXRpb24oKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NUcmFuc2l0aW9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5vbkVudGVyID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMgPSBfdGhpcy5nZXRDbGFzc05hbWVzKGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lcy5jbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXIobm9kZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25FbnRlcmluZyA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMiA9IF90aGlzLmdldENsYXNzTmFtZXMoYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzMi5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyaW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25FbnRlcmVkID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMzID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZW50ZXInKSxcbiAgICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczMuZG9uZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCBhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpO1xuICAgICAgYWRkQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmVkKG5vZGUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uRXhpdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczQgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczQuY2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdhcHBlYXInKTtcbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2VudGVyJyk7XG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vbkV4aXRpbmcgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM1ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM1LmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25FeGl0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM2ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNi5kb25lQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG4gICAgICBhZGRDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBfdGhpcy5wcm9wcy5jbGFzc05hbWVzO1xuXG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGVdIDogY2xhc3NOYW1lcyArICctJyArIHR5cGU7XG5cbiAgICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGUgKyAnQWN0aXZlJ10gOiBjbGFzc05hbWUgKyAnLWFjdGl2ZSc7XG5cbiAgICAgIHZhciBkb25lQ2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZXMgIT09ICdzdHJpbmcnID8gY2xhc3NOYW1lc1t0eXBlICsgJ0RvbmUnXSA6IGNsYXNzTmFtZSArICctZG9uZSc7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWU6IGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZTogZG9uZUNsYXNzTmFtZVxuICAgICAgfTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIENTU1RyYW5zaXRpb24ucHJvdG90eXBlLnJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpIHtcbiAgICB2YXIgX2dldENsYXNzTmFtZXMgPSB0aGlzLmdldENsYXNzTmFtZXModHlwZSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF9nZXRDbGFzc05hbWVzLmNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX2dldENsYXNzTmFtZXMuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lID0gX2dldENsYXNzTmFtZXMuZG9uZUNsYXNzTmFtZTtcblxuICAgIGNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgIGFjdGl2ZUNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuICAgIGRvbmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGUucmVmbG93QW5kQWRkQ2xhc3MgPSBmdW5jdGlvbiByZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGZvciB0byBmb3JjZSBhIHJlcGFpbnQsXG4gICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIHRyYW5zaXRpb24gc3R5bGVzIHdoZW4gYWRkaW5nIGEgY2xhc3MgbmFtZS5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICBub2RlICYmIG5vZGUuc2Nyb2xsVG9wO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgfTtcblxuICBDU1NUcmFuc2l0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZXM7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24yLmRlZmF1bHQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdDogdGhpcy5vbkV4aXQsXG4gICAgICBvbkV4aXRpbmc6IHRoaXMub25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25FeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIENTU1RyYW5zaXRpb247XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDU1NUcmFuc2l0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRDbGFzcztcblxudmFyIF9oYXNDbGFzcyA9IHJlcXVpcmUoJy4vaGFzQ2xhc3MnKTtcblxudmFyIF9oYXNDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNDbGFzcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO2Vsc2UgaWYgKCEoMCwgX2hhc0NsYXNzMi5kZWZhdWx0KShlbGVtZW50LCBjbGFzc05hbWUpKSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnKSArICcgJyArIGNsYXNzTmFtZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9hZGRDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhhc0NsYXNzO1xuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgcmV0dXJuICEhY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7ZWxzZSByZXR1cm4gKFwiIFwiICsgKGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgZWxlbWVudC5jbGFzc05hbWUpICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIikgIT09IC0xO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9oYXNDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHJlcGxhY2VDbGFzc05hbWUob3JpZ0NsYXNzLCBjbGFzc1RvUmVtb3ZlKSB7XG4gIHJldHVybiBvcmlnQ2xhc3MucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NUb1JlbW92ZSArICcoPzpcXFxcc3wkKScsICdnJyksICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7ZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO2Vsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnLCBjbGFzc05hbWUpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uR3JvdXAnKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbkdyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGluOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIGlmIChfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uY291bnQocHJvcHNbcHJvcE5hbWVdKSAhPT0gMikgcmV0dXJuIG5ldyBFcnJvcignXCInICsgcHJvcE5hbWUgKyAnXCIgbXVzdCBiZSBleGFjdGx5IHR3byB0cmFuc2l0aW9uIGNvbXBvbmVudHMuJyk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgYDxSZXBsYWNlVHJhbnNpdGlvbj5gIGNvbXBvbmVudCBpcyBhIHNwZWNpYWxpemVkIGBUcmFuc2l0aW9uYCBjb21wb25lbnRcbiAqIHRoYXQgYW5pbWF0ZXMgYmV0d2VlbiB0d28gY2hpbGRyZW4uXG4gKlxuICogYGBganN4XG4gKiA8UmVwbGFjZVRyYW5zaXRpb24gaW4+XG4gKiAgIDxGYWRlPjxkaXY+SSBhcHBlYXIgZmlyc3Q8L2Rpdj48L0ZhZGU+XG4gKiAgIDxGYWRlPjxkaXY+SSByZXBsYWNlIHRoZSBhYm92ZTwvZGl2PjwvRmFkZT5cbiAqIDwvUmVwbGFjZVRyYW5zaXRpb24+XG4gKiBgYGBcbiAqL1xuXG52YXIgUmVwbGFjZVRyYW5zaXRpb24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVwbGFjZVRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlcGxhY2VUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVwbGFjZVRyYW5zaXRpb24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgUmVwbGFjZVRyYW5zaXRpb24ucHJvdG90eXBlLmhhbmRsZUxpZmVjeWNsZSA9IGZ1bmN0aW9uIGhhbmRsZUxpZmVjeWNsZShoYW5kbGVyLCBpZHgsIG9yaWdpbmFsQXJncykge1xuICAgIHZhciBfY2hpbGQkcHJvcHM7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pW2lkeF07XG5cbiAgICBpZiAoY2hpbGQucHJvcHNbaGFuZGxlcl0pIChfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcylbaGFuZGxlcl0uYXBwbHkoX2NoaWxkJHByb3BzLCBvcmlnaW5hbEFyZ3MpO1xuICAgIGlmICh0aGlzLnByb3BzW2hhbmRsZXJdKSB0aGlzLnByb3BzW2hhbmRsZXJdKCgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpKTtcbiAgfTtcblxuICBSZXBsYWNlVHJhbnNpdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaW5Qcm9wID0gX3Byb3BzLmluLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nLCAnaW4nXSk7XG5cbiAgICB2YXIgX1JlYWN0JENoaWxkcmVuJHRvQXJyID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLFxuICAgICAgICBmaXJzdCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclswXSxcbiAgICAgICAgc2Vjb25kID0gX1JlYWN0JENoaWxkcmVuJHRvQXJyWzFdO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdGVkO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX1RyYW5zaXRpb25Hcm91cDIuZGVmYXVsdCxcbiAgICAgIHByb3BzLFxuICAgICAgaW5Qcm9wID8gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChmaXJzdCwge1xuICAgICAgICBrZXk6ICdmaXJzdCcsXG4gICAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRW50ZXIsXG4gICAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRW50ZXJpbmcsXG4gICAgICAgIG9uRW50ZXJlZDogdGhpcy5oYW5kbGVFbnRlcmVkXG5cbiAgICAgIH0pIDogX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChzZWNvbmQsIHtcbiAgICAgICAga2V5OiAnc2Vjb25kJyxcbiAgICAgICAgb25FbnRlcjogdGhpcy5oYW5kbGVFeGl0LFxuICAgICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUV4aXRpbmcsXG4gICAgICAgIG9uRW50ZXJlZDogdGhpcy5oYW5kbGVFeGl0ZWRcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUmVwbGFjZVRyYW5zaXRpb247XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHRoaXMuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcicsIDAsIGFyZ3MpO1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlRW50ZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmluZycsIDAsIGFyZ3MpO1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlRW50ZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpczIuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyZWQnLCAwLCBhcmdzKTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZUV4aXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0JywgMSwgYXJncyk7XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVFeGl0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW42KSwgX2tleTYgPSAwOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzMi5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdGluZycsIDEsIGFyZ3MpO1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgICBhcmdzW19rZXk3XSA9IGFyZ3VtZW50c1tfa2V5N107XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzMi5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdGVkJywgMSwgYXJncyk7XG4gIH07XG59O1xuXG5SZXBsYWNlVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVwbGFjZVRyYW5zaXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1JlcGxhY2VUcmFuc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nO1xuZXhwb3J0cy5tZXJnZUNoaWxkTWFwcGluZ3MgPSBtZXJnZUNoaWxkTWFwcGluZ3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIEdpdmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYCwgcmV0dXJuIGFuIG9iamVjdCBtYXBwaW5nIGtleSB0byBjaGlsZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICogQHJldHVybiB7b2JqZWN0fSBNYXBwaW5nIG9mIGtleSB0byBjaGlsZFxuICovXG5mdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4sIG1hcEZuKSB7XG4gIHZhciBtYXBwZXIgPSBmdW5jdGlvbiBtYXBwZXIoY2hpbGQpIHtcbiAgICByZXR1cm4gbWFwRm4gJiYgKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoY2hpbGQpID8gbWFwRm4oY2hpbGQpIDogY2hpbGQ7XG4gIH07XG5cbiAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmIChjaGlsZHJlbikgX3JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYztcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAvLyBydW4gdGhlIG1hcCBmdW5jdGlvbiBoZXJlIGluc3RlYWQgc28gdGhhdCB0aGUga2V5IGlzIHRoZSBjb21wdXRlZCBvbmVcbiAgICByZXN1bHRbY2hpbGQua2V5XSA9IG1hcHBlcihjaGlsZCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZW4geW91J3JlIGFkZGluZyBvciByZW1vdmluZyBjaGlsZHJlbiBzb21lIG1heSBiZSBhZGRlZCBvciByZW1vdmVkIGluIHRoZVxuICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gKiBhbmltYXRlIGVsZW1lbnRzIGluIGFuZCBvdXQuIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBwcmV2aW91cyBzZXQgb2Yga2V5c1xuICogYW5kIGEgbmV3IHNldCBvZiBrZXlzIGFuZCBtZXJnZXMgdGhlbSB3aXRoIGl0cyBiZXN0IGd1ZXNzIG9mIHRoZSBjb3JyZWN0XG4gKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICogUmVhY3RNdWx0aUNoaWxkIHRvIG1ha2UgdGhpcyBlYXN5LCBidXQgZm9yIG5vdyBSZWFjdCBpdHNlbGYgZG9lcyBub3RcbiAqIGRpcmVjdGx5IGhhdmUgdGhpcyBjb25jZXB0IG9mIHRoZSB1bmlvbiBvZiBwcmV2Q2hpbGRyZW4gYW5kIG5leHRDaGlsZHJlblxuICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByZXYgcHJldiBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0IG5leHQgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAqIGluIGBuZXh0YCBpbiBhIHJlYXNvbmFibGUgb3JkZXIuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2LCBuZXh0KSB7XG4gIHByZXYgPSBwcmV2IHx8IHt9O1xuICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZUZvcktleShrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG5leHQgPyBuZXh0W2tleV0gOiBwcmV2W2tleV07XG4gIH1cblxuICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcbiAgdmFyIG5leHRLZXlzUGVuZGluZyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgIGlmIChwcmV2S2V5IGluIG5leHQpIHtcbiAgICAgIGlmIChwZW5kaW5nS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgbmV4dEtleXNQZW5kaW5nW3ByZXZLZXldID0gcGVuZGluZ0tleXM7XG4gICAgICAgIHBlbmRpbmdLZXlzID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdLZXlzLnB1c2gocHJldktleSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGkgPSB2b2lkIDA7XG4gIHZhciBjaGlsZE1hcHBpbmcgPSB7fTtcbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgfVxuXG4gIC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuICBmb3IgKGkgPSAwOyBpIDwgcGVuZGluZ0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjaGlsZE1hcHBpbmdbcGVuZGluZ0tleXNbaV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ0tleXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkTWFwcGluZztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCwgY2xvbmVFbGVtZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NLCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gd2Fybk9uY2UobXNnKSB7XG4gIHZhciBoYXNXYXJuZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWhhc1dhcm5lZCkge1xuICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICBoYXNXYXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcbn1cblxuXG52YXIgc3RhdGVsZXNzRnVuY3Rpb25hbENvbXBvbmVudFN1cHBsaWVkID0gd2Fybk9uY2UoJ1xcbj4+IEVycm9yLCB2aWEgcmVhY3QtZmxpcC1tb3ZlIDw8XFxuXFxuWW91IHByb3ZpZGVkIGEgc3RhdGVsZXNzIGZ1bmN0aW9uYWwgY29tcG9uZW50IGFzIGEgY2hpbGQgdG8gPEZsaXBNb3ZlPi4gVW5mb3J0dW5hdGVseSwgU0ZDcyBhcmVuXFwndCBzdXBwb3J0ZWQsIGJlY2F1c2UgRmxpcCBNb3ZlIG5lZWRzIGFjY2VzcyB0byB0aGUgYmFja2luZyBpbnN0YW5jZXMgdmlhIHJlZnMsIGFuZCBTRkNzIGRvblxcJ3QgaGF2ZSBhIHB1YmxpYyBpbnN0YW5jZSB0aGF0IGhvbGRzIHRoYXQgaW5mby5cXG5cXG5QbGVhc2Ugd3JhcCB5b3VyIGNvbXBvbmVudHMgaW4gYSBuYXRpdmUgZWxlbWVudCAoZWcuIDxkaXY+KSwgb3IgYSBub24tZnVuY3Rpb25hbCBjb21wb25lbnQuXFxuJyk7XG5cbnZhciBwcmltaXRpdmVOb2RlU3VwcGxpZWQgPSB3YXJuT25jZSgnXFxuPj4gRXJyb3IsIHZpYSByZWFjdC1mbGlwLW1vdmUgPDxcXG5cXG5Zb3UgcHJvdmlkZWQgYSBwcmltaXRpdmUgKHRleHQgb3IgbnVtYmVyKSBub2RlIGFzIGEgY2hpbGQgdG8gPEZsaXBNb3ZlPi4gRmxpcCBNb3ZlIG5lZWRzIGNvbnRhaW5lcnMgd2l0aCB1bmlxdWUga2V5cyB0byBtb3ZlIGNoaWxkcmVuIGFyb3VuZC5cXG5cXG5QbGVhc2Ugd3JhcCB5b3VyIHZhbHVlIGluIGEgbmF0aXZlIGVsZW1lbnQgKGVnLiA8c3Bhbj4pLCBvciBhIGNvbXBvbmVudC5cXG4nKTtcblxudmFyIGludmFsaWRUeXBlRm9yVGltaW5nUHJvcCA9IGZ1bmN0aW9uIGludmFsaWRUeXBlRm9yVGltaW5nUHJvcChhcmdzXG4vLyBwcmV0dGllci1pZ25vcmVcbikge1xuICByZXR1cm4gY29uc29sZS5lcnJvcignXFxuPj4gRXJyb3IsIHZpYSByZWFjdC1mbGlwLW1vdmUgPDxcXG5cXG5UaGUgcHJvcCB5b3UgcHJvdmlkZWQgZm9yIFxcJycgKyBhcmdzLnByb3AgKyAnXFwnIGlzIGludmFsaWQuIEl0IG5lZWRzIHRvIGJlIGEgcG9zaXRpdmUgaW50ZWdlciwgb3IgYSBzdHJpbmcgdGhhdCBjYW4gYmUgcmVzb2x2ZWQgdG8gYSBudW1iZXIuIFRoZSB2YWx1ZSB5b3UgcHJvdmlkZWQgaXMgXFwnJyArIGFyZ3MudmFsdWUgKyAnXFwnLlxcblxcbkFzIGEgcmVzdWx0LCAgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgdXNlZCwgd2hpY2ggaXMgXFwnJyArIGFyZ3MuZGVmYXVsdFZhbHVlICsgJ1xcJy5cXG4nKTtcbn07XG5cbnZhciBpbnZhbGlkRW50ZXJMZWF2ZVByZXNldCA9IGZ1bmN0aW9uIGludmFsaWRFbnRlckxlYXZlUHJlc2V0KGFyZ3Ncbi8vIHByZXR0aWVyLWlnbm9yZVxuKSB7XG4gIHJldHVybiBjb25zb2xlLmVycm9yKCdcXG4+PiBFcnJvciwgdmlhIHJlYWN0LWZsaXAtbW92ZSA8PFxcblxcblRoZSBlbnRlci9sZWF2ZSBwcmVzZXQgeW91IHByb3ZpZGVkIGlzIGludmFsaWQuIFdlIGRvblxcJ3QgY3VycmVudGx5IGhhdmUgYSBcXCcnICsgYXJncy52YWx1ZSArICcgcHJlc2V0LlxcJ1xcblxcbkFjY2VwdGFibGUgdmFsdWVzIGFyZSAnICsgYXJncy5hY2NlcHRhYmxlVmFsdWVzICsgJy4gVGhlIGRlZmF1bHQgdmFsdWUgb2YgXFwnJyArIGFyZ3MuZGVmYXVsdFZhbHVlICsgJ1xcJyB3aWxsIGJlIHVzZWQuXFxuJyk7XG59O1xuXG52YXIgcGFyZW50Tm9kZVBvc2l0aW9uU3RhdGljID0gd2Fybk9uY2UoJ1xcbj4+IFdhcm5pbmcsIHZpYSByZWFjdC1mbGlwLW1vdmUgPDxcXG5cXG5XaGVuIHVzaW5nIFwid3JhcHBlcmxlc3NcIiBtb2RlIChieSBzdXBwbHlpbmcgXFwndHlwZU5hbWVcXCcgb2YgXFwnbnVsbFxcJyksIHN0cmFuZ2UgdGhpbmdzIGhhcHBlbiB3aGVuIHRoZSBkaXJlY3QgcGFyZW50IGhhcyB0aGUgZGVmYXVsdCBcInN0YXRpY1wiIHBvc2l0aW9uLlxcblxcbkZsaXBNb3ZlIGhhcyBhZGRlZCBcXCdwb3NpdGlvbjogcmVsYXRpdmVcXCcgdG8gdGhpcyBub2RlLCB0byBlbnN1cmUgRmxpcCBNb3ZlIGFuaW1hdGVzIGNvcnJlY3RseS5cXG5cXG5UbyBhdm9pZCBzZWVpbmcgdGhpcyB3YXJuaW5nLCBzaW1wbHkgYXBwbHkgYSBub24tc3RhdGljIHBvc2l0aW9uIHRvIHRoYXQgcGFyZW50IG5vZGUuXFxuJyk7XG5cbnZhciBjaGlsZElzRGlzYWJsZWQgPSB3YXJuT25jZSgnXFxuPj4gV2FybmluZywgdmlhIHJlYWN0LWZsaXAtbW92ZSA8PFxcblxcbk9uZSBvciBtb3JlIG9mIEZsaXAgTW92ZVxcJ3MgY2hpbGQgZWxlbWVudHMgaGF2ZSB0aGUgaHRtbCBhdHRyaWJ1dGUgXFwnZGlzYWJsZWRcXCcgc2V0IHRvIHRydWUuXFxuXFxuUGxlYXNlIG5vdGUgdGhhdCB0aGlzIHdpbGwgY2F1c2UgYW5pbWF0aW9ucyB0byBicmVhayBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMSBhbmQgYmVsb3cuIEVpdGhlciByZW1vdmUgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBvciBzZXQgXFwnYW5pbWF0aW9uXFwnIHRvIGZhbHNlLlxcbicpO1xuXG52YXIgZW50ZXJQcmVzZXRzID0ge1xuICBlbGV2YXRvcjoge1xuICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknLCBvcGFjaXR5OiAnMCcgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICcnLCBvcGFjaXR5OiAnJyB9XG4gIH0sXG4gIGZhZGU6IHtcbiAgICBmcm9tOiB7IG9wYWNpdHk6ICcwJyB9LFxuICAgIHRvOiB7IG9wYWNpdHk6ICcnIH1cbiAgfSxcbiAgYWNjb3JkaW9uVmVydGljYWw6IHtcbiAgICBmcm9tOiB7IHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciB0b3AnIH0sXG4gICAgdG86IHsgdHJhbnNmb3JtOiAnJywgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIHRvcCcgfVxuICB9LFxuICBhY2NvcmRpb25Ib3Jpem9udGFsOiB7XG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICdzY2FsZVgoMCknLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IGNlbnRlcicgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICcnLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IGNlbnRlcicgfVxuICB9LFxuICBub25lOiBudWxsXG59O1xuLyoqXG4gKiBSZWFjdCBGbGlwIE1vdmUgfCBlbnRlckxlYXZlUHJlc2V0c1xuICogKGMpIDIwMTYtcHJlc2VudCBKb3NodWEgQ29tZWF1XG4gKlxuICogVGhpcyBjb250YWlucyB0aGUgbWFzdGVyIGxpc3Qgb2YgcHJlc2V0cyBhdmFpbGFibGUgZm9yIGVudGVyL2xlYXZlIGFuaW1hdGlvbnMsXG4gKiBhbG9uZyB3aXRoIHRoZSBtYXBwaW5nIGJldHdlZW4gcHJlc2V0IGFuZCBzdHlsZXMuXG4gKi9cblxuXG52YXIgbGVhdmVQcmVzZXRzID0ge1xuICBlbGV2YXRvcjoge1xuICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvcGFjaXR5OiAnMScgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScsIG9wYWNpdHk6ICcwJyB9XG4gIH0sXG4gIGZhZGU6IHtcbiAgICBmcm9tOiB7IG9wYWNpdHk6ICcxJyB9LFxuICAgIHRvOiB7IG9wYWNpdHk6ICcwJyB9XG4gIH0sXG4gIGFjY29yZGlvblZlcnRpY2FsOiB7XG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgdG9wJyB9LFxuICAgIHRvOiB7IHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciB0b3AnIH1cbiAgfSxcbiAgYWNjb3JkaW9uSG9yaXpvbnRhbDoge1xuICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCBjZW50ZXInIH0sXG4gICAgdG86IHsgdHJhbnNmb3JtOiAnc2NhbGVYKDApJywgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCBjZW50ZXInIH1cbiAgfSxcbiAgbm9uZTogbnVsbFxufTtcblxuLy8gRm9yIG5vdywgYXBwZWFyUHJlc2V0cyB3aWxsIGJlIGlkZW50aWNhbCB0byBlbnRlclByZXNldHMuXG4vLyBBc3NpZ25pbmcgYSBjdXN0b20gZXhwb3J0IGluIGNhc2Ugd2UgZXZlciB3YW50IHRvIGFkZCBhcHBlYXItc3BlY2lmaWMgb25lcy5cbnZhciBhcHBlYXJQcmVzZXRzID0gZW50ZXJQcmVzZXRzO1xuXG52YXIgZGVmYXVsdFByZXNldCA9ICdlbGV2YXRvcic7XG52YXIgZGlzYWJsZVByZXNldCA9ICdub25lJztcblxudmFyIGZpbmQgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSwgYXJyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJbaV0sIGksIGFycikpIHtcbiAgICAgIHJldHVybiBhcnJbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cblxudmFyIGV2ZXJ5ID0gZnVuY3Rpb24gZXZlcnkocHJlZGljYXRlLCBhcnIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXByZWRpY2F0ZShhcnJbaV0sIGksIGFycikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xudmFyIF9pc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcbiAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG4gIHJldHVybiBfaXNBcnJheShhcnIpO1xufTtcblxudmFyIGlzRWxlbWVudEFuU0ZDID0gZnVuY3Rpb24gaXNFbGVtZW50QW5TRkMoZWxlbWVudCkge1xuICB2YXIgaXNOYXRpdmVET01FbGVtZW50ID0gdHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZyc7XG5cbiAgaWYgKGlzTmF0aXZlRE9NRWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhZWxlbWVudC50eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50O1xufTtcblxuZnVuY3Rpb24gb21pdChvYmopIHtcbiAgdmFyIGF0dHJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcblxuICB2YXIgcmVzdWx0ID0ge307XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGF0dHJzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gYXJyYXlzRXF1YWwoYSwgYikge1xuICB2YXIgc2FtZU9iamVjdCA9IGEgPT09IGI7XG4gIGlmIChzYW1lT2JqZWN0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgbm90Qm90aEFycmF5cyA9ICFfaXNBcnJheShhKSB8fCAhX2lzQXJyYXkoYik7XG4gIHZhciBkaWZmZXJlbnRMZW5ndGhzID0gYS5sZW5ndGggIT09IGIubGVuZ3RoO1xuXG4gIGlmIChub3RCb3RoQXJyYXlzIHx8IGRpZmZlcmVudExlbmd0aHMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZXZlcnkoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPT09IGJbaW5kZXhdO1xuICB9LCBhKTtcbn1cblxuZnVuY3Rpb24gbWVtb2l6ZVN0cmluZyhmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHN0cikge1xuICAgIGlmICghY2FjaGVbc3RyXSkge1xuICAgICAgY2FjaGVbc3RyXSA9IGZuKHN0cik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZVtzdHJdO1xuICB9O1xufVxuXG52YXIgaHlwaGVuYXRlID0gbWVtb2l6ZVN0cmluZyhmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG5cblxuXG5cblxuXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuLyoqXG4gKiBSZWFjdCBGbGlwIE1vdmUgfCBwcm9wQ29udmVydGVyXG4gKiAoYykgMjAxNi1wcmVzZW50IEpvc2h1YSBDb21lYXVcbiAqXG4gKiBBYnN0cmFjdGVkIGF3YXkgYSBidW5jaCBvZiB0aGUgbWVzc3kgYnVzaW5lc3Mgd2l0aCBwcm9wcy5cbiAqICAgLSBwcm9wcyBmbG93IHR5cGVzIGFuZCBkZWZhdWx0UHJvcHNcbiAqICAgLSBUeXBlIGNvbnZlcnNpb24gKFdlIGFjY2VwdCAnc3RyaW5nJyBhbmQgJ251bWJlcicgdmFsdWVzIGZvciBkdXJhdGlvbixcbiAqICAgICBkZWxheSwgYW5kIG90aGVyIGZpZWxkcywgYnV0IHdlIGFjdHVhbGx5IG5lZWQgdGhlbSB0byBiZSBpbnRzLilcbiAqICAgLSBDaGlsZHJlbiBjb252ZXJzaW9uICh3ZSBuZWVkIHRoZSBjaGlsZHJlbiB0byBiZSBhbiBhcnJheS4gTWF5IG5vdCBhbHdheXNcbiAqICAgICBiZSwgaWYgYSBzaW5nbGUgY2hpbGQgaXMgcGFzc2VkIGluLilcbiAqICAgLSBSZXNvbHZpbmcgYW5pbWF0aW9uIHByZXNldHMgaW50byB0aGVpciBiYXNlIENTUyBzdHlsZXNcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgYmxvY2stc2NvcGVkLXZhciAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZHVwbGljYXRlLWltcG9ydHNcblxuXG5mdW5jdGlvbiBwcm9wQ29udmVydGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgaW5oZXJpdHMoRmxpcE1vdmVQcm9wQ29udmVydGVyLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEZsaXBNb3ZlUHJvcENvbnZlcnRlcigpIHtcbiAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEZsaXBNb3ZlUHJvcENvbnZlcnRlcik7XG4gICAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgRmxpcE1vdmVQcm9wQ29udmVydGVyLnByb3RvdHlwZS5jaGVja0NoaWxkcmVuID0gZnVuY3Rpb24gY2hlY2tDaGlsZHJlbihjaGlsZHJlbikge1xuICAgICAgLy8gU2tpcCBhbGwgY29uc29sZSB3YXJuaW5ncyBpbiBwcm9kdWN0aW9uLlxuICAgICAgLy8gQmFpbCBlYXJseSwgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd29yay5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gc2FtZSBhcyBSZWFjdC5Ob2RlLCBidXQgd2l0aG91dCBmcmFnbWVudHMsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvNDc4MVxuXG5cbiAgICAgIC8vIEZsaXBNb3ZlIGRvZXMgbm90IHN1cHBvcnQgc3RhdGVsZXNzIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBhbnkgc3VwcGxpZWQgY29tcG9uZW50cyB3b24ndCB3b3JrLlxuICAgICAgLy8gSWYgdGhlIGNoaWxkIGRvZXNuJ3QgaGF2ZSBhIGtleSwgaXQgbWVhbnMgd2UgYXJlbid0IGFuaW1hdGluZyBpdC5cbiAgICAgIC8vIEl0J3MgYWxsb3dlZCB0byBiZSBhbiBTRkMsIHNpbmNlIHdlIGlnbm9yZSBpdC5cbiAgICAgIENoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAvLyBudWxsLCB1bmRlZmluZWQsIGFuZCBib29sZWFucyB3aWxsIGJlIGZpbHRlcmVkIG91dCBieSBDaGlsZHJlbi50b0FycmF5XG4gICAgICAgIGlmIChjaGlsZCA9PSBudWxsIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCh0eXBlb2YgY2hpbGQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNoaWxkKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcHJpbWl0aXZlTm9kZVN1cHBsaWVkKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRWxlbWVudEFuU0ZDKGNoaWxkKSAmJiBjaGlsZC5rZXkgIT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlbGVzc0Z1bmN0aW9uYWxDb21wb25lbnRTdXBwbGllZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgRmxpcE1vdmVQcm9wQ29udmVydGVyLnByb3RvdHlwZS5jb252ZXJ0UHJvcHMgPSBmdW5jdGlvbiBjb252ZXJ0UHJvcHMocHJvcHMpIHtcbiAgICAgIHZhciB3b3JraW5nUHJvcHMgPSB7XG4gICAgICAgIC8vIGV4cGxpY2l0bHkgYnlwYXNzIHRoZSBwcm9wcyB0aGF0IGRvbid0IG5lZWQgY29udmVyc2lvblxuICAgICAgICBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGVhc2luZzogcHJvcHMuZWFzaW5nLFxuICAgICAgICBvblN0YXJ0OiBwcm9wcy5vblN0YXJ0LFxuICAgICAgICBvbkZpbmlzaDogcHJvcHMub25GaW5pc2gsXG4gICAgICAgIG9uU3RhcnRBbGw6IHByb3BzLm9uU3RhcnRBbGwsXG4gICAgICAgIG9uRmluaXNoQWxsOiBwcm9wcy5vbkZpbmlzaEFsbCxcbiAgICAgICAgdHlwZU5hbWU6IHByb3BzLnR5cGVOYW1lLFxuICAgICAgICBkaXNhYmxlQWxsQW5pbWF0aW9uczogcHJvcHMuZGlzYWJsZUFsbEFuaW1hdGlvbnMsXG4gICAgICAgIGdldFBvc2l0aW9uOiBwcm9wcy5nZXRQb3NpdGlvbixcbiAgICAgICAgbWFpbnRhaW5Db250YWluZXJIZWlnaHQ6IHByb3BzLm1haW50YWluQ29udGFpbmVySGVpZ2h0LFxuICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogcHJvcHMudmVydGljYWxBbGlnbm1lbnQsXG5cbiAgICAgICAgLy8gRG8gc3RyaW5nLXRvLWludCBjb252ZXJzaW9uIGZvciBhbGwgdGltaW5nLXJlbGF0ZWQgcHJvcHNcbiAgICAgICAgZHVyYXRpb246IHRoaXMuY29udmVydFRpbWluZ1Byb3AoJ2R1cmF0aW9uJyksXG4gICAgICAgIGRlbGF5OiB0aGlzLmNvbnZlcnRUaW1pbmdQcm9wKCdkZWxheScpLFxuICAgICAgICBzdGFnZ2VyRHVyYXRpb25CeTogdGhpcy5jb252ZXJ0VGltaW5nUHJvcCgnc3RhZ2dlckR1cmF0aW9uQnknKSxcbiAgICAgICAgc3RhZ2dlckRlbGF5Qnk6IHRoaXMuY29udmVydFRpbWluZ1Byb3AoJ3N0YWdnZXJEZWxheUJ5JyksXG5cbiAgICAgICAgLy8gT3VyIGVudGVyL2xlYXZlIGFuaW1hdGlvbnMgY2FuIGJlIHNwZWNpZmllZCBhcyBib29sZWFuIChkZWZhdWx0IG9yXG4gICAgICAgIC8vIGRpc2FibGVkKSwgc3RyaW5nIChwcmVzZXQgbmFtZSksIG9yIG9iamVjdCAoYWN0dWFsIGFuaW1hdGlvbiB2YWx1ZXMpLlxuICAgICAgICAvLyBMZXQncyBzdGFuZGFyZGl6ZSB0aGlzIHNvIHRoYXQgdGhleSdyZSBhbHdheXMgb2JqZWN0c1xuICAgICAgICBhcHBlYXJBbmltYXRpb246IHRoaXMuY29udmVydEFuaW1hdGlvblByb3AocHJvcHMuYXBwZWFyQW5pbWF0aW9uLCBhcHBlYXJQcmVzZXRzKSxcbiAgICAgICAgZW50ZXJBbmltYXRpb246IHRoaXMuY29udmVydEFuaW1hdGlvblByb3AocHJvcHMuZW50ZXJBbmltYXRpb24sIGVudGVyUHJlc2V0cyksXG4gICAgICAgIGxlYXZlQW5pbWF0aW9uOiB0aGlzLmNvbnZlcnRBbmltYXRpb25Qcm9wKHByb3BzLmxlYXZlQW5pbWF0aW9uLCBsZWF2ZVByZXNldHMpLFxuXG4gICAgICAgIGRlbGVnYXRlZDoge31cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2hlY2tDaGlsZHJlbih3b3JraW5nUHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICAvLyBHYXRoZXIgYW55IGFkZGl0aW9uYWwgcHJvcHM7XG4gICAgICAvLyB0aGV5IHdpbGwgYmUgZGVsZWdhdGVkIHRvIHRoZSBSZWFjdEVsZW1lbnQgY3JlYXRlZC5cbiAgICAgIHZhciBwcmltYXJ5UHJvcEtleXMgPSBPYmplY3Qua2V5cyh3b3JraW5nUHJvcHMpO1xuICAgICAgdmFyIGRlbGVnYXRlZFByb3BzID0gb21pdCh0aGlzLnByb3BzLCBwcmltYXJ5UHJvcEtleXMpO1xuXG4gICAgICAvLyBUaGUgRmxpcE1vdmUgY29udGFpbmVyIGVsZW1lbnQgbmVlZHMgdG8gaGF2ZSBhIG5vbi1zdGF0aWMgcG9zaXRpb24uXG4gICAgICAvLyBXZSB1c2UgYHJlbGF0aXZlYCBieSBkZWZhdWx0LCBidXQgaXQgY2FuIGJlIG92ZXJyaWRkZW4gYnkgdGhlIHVzZXIuXG4gICAgICAvLyBOb3cgdGhhdCB3ZSdyZSBkZWxlZ2F0aW5nIHByb3BzLCB3ZSBuZWVkIHRvIG1lcmdlIHRoaXMgaW4uXG4gICAgICBkZWxlZ2F0ZWRQcm9wcy5zdHlsZSA9IF9leHRlbmRzKHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgIH0sIGRlbGVnYXRlZFByb3BzLnN0eWxlKTtcblxuICAgICAgd29ya2luZ1Byb3BzLmRlbGVnYXRlZCA9IGRlbGVnYXRlZFByb3BzO1xuXG4gICAgICByZXR1cm4gd29ya2luZ1Byb3BzO1xuICAgIH07XG5cbiAgICBGbGlwTW92ZVByb3BDb252ZXJ0ZXIucHJvdG90eXBlLmNvbnZlcnRUaW1pbmdQcm9wID0gZnVuY3Rpb24gY29udmVydFRpbWluZ1Byb3AocHJvcCkge1xuICAgICAgdmFyIHJhd1ZhbHVlID0gdGhpcy5wcm9wc1twcm9wXTtcblxuICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIHJhd1ZhbHVlID09PSAnbnVtYmVyJyA/IHJhd1ZhbHVlIDogcGFyc2VJbnQocmF3VmFsdWUsIDEwKTtcblxuICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gRmxpcE1vdmVQcm9wQ29udmVydGVyLmRlZmF1bHRQcm9wc1twcm9wXTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGludmFsaWRUeXBlRm9yVGltaW5nUHJvcCh7XG4gICAgICAgICAgICBwcm9wOiBwcm9wLFxuICAgICAgICAgICAgdmFsdWU6IHJhd1ZhbHVlLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblxuXG4gICAgRmxpcE1vdmVQcm9wQ29udmVydGVyLnByb3RvdHlwZS5jb252ZXJ0QW5pbWF0aW9uUHJvcCA9IGZ1bmN0aW9uIGNvbnZlcnRBbmltYXRpb25Qcm9wKGFuaW1hdGlvbiwgcHJlc2V0cykge1xuICAgICAgc3dpdGNoICh0eXBlb2YgYW5pbWF0aW9uID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhbmltYXRpb24pKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIElmIGl0J3MgdHJ1ZSwgd2Ugd2FudCB0byB1c2UgdGhlIGRlZmF1bHQgcHJlc2V0LlxuICAgICAgICAgICAgLy8gSWYgaXQncyBmYWxzZSwgd2Ugd2FudCB0byB1c2UgdGhlICdub25lJyBwcmVzZXQuXG4gICAgICAgICAgICByZXR1cm4gcHJlc2V0c1thbmltYXRpb24gPyBkZWZhdWx0UHJlc2V0IDogZGlzYWJsZVByZXNldF07XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHByZXNldEtleXMgPSBPYmplY3Qua2V5cyhwcmVzZXRzKTtcblxuICAgICAgICAgICAgaWYgKHByZXNldEtleXMuaW5kZXhPZihhbmltYXRpb24pID09PSAtMSkge1xuICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGludmFsaWRFbnRlckxlYXZlUHJlc2V0KHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBhbmltYXRpb24sXG4gICAgICAgICAgICAgICAgICBhY2NlcHRhYmxlVmFsdWVzOiBwcmVzZXRLZXlzLmpvaW4oJywgJyksXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRQcmVzZXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBwcmVzZXRzW2RlZmF1bHRQcmVzZXRdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJlc2V0c1thbmltYXRpb25dO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb247XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBGbGlwTW92ZVByb3BDb252ZXJ0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCB0aGlzLmNvbnZlcnRQcm9wcyh0aGlzLnByb3BzKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBGbGlwTW92ZVByb3BDb252ZXJ0ZXI7XG4gIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBlYXNpbmc6ICdlYXNlLWluLW91dCcsXG4gICAgZHVyYXRpb246IDM1MCxcbiAgICBkZWxheTogMCxcbiAgICBzdGFnZ2VyRHVyYXRpb25CeTogMCxcbiAgICBzdGFnZ2VyRGVsYXlCeTogMCxcbiAgICB0eXBlTmFtZTogJ2RpdicsXG4gICAgZW50ZXJBbmltYXRpb246IGRlZmF1bHRQcmVzZXQsXG4gICAgbGVhdmVBbmltYXRpb246IGRlZmF1bHRQcmVzZXQsXG4gICAgZGlzYWJsZUFsbEFuaW1hdGlvbnM6IGZhbHNlLFxuICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbiBnZXRQb3NpdGlvbihub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9LFxuICAgIG1haW50YWluQ29udGFpbmVySGVpZ2h0OiBmYWxzZSxcbiAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ3RvcCdcbiAgfSwgX3RlbXA7XG59XG5cbi8qKlxuICogUmVhY3QgRmxpcCBNb3ZlXG4gKiAoYykgMjAxNi1wcmVzZW50IEpvc2h1YSBDb21lYXVcbiAqXG4gKiBUaGVzZSBtZXRob2RzIHJlYWQgZnJvbSBhbmQgd3JpdGUgdG8gdGhlIERPTS5cbiAqIFRoZXkgYWxtb3N0IGFsd2F5cyBoYXZlIHNpZGUgZWZmZWN0cywgYW5kIHdpbGwgaG9wZWZ1bGx5IGJlY29tZSB0aGVcbiAqIG9ubHkgc3BvdCBpbiB0aGUgY29kZWJhc2Ugd2l0aCBpbXB1cmUgZnVuY3Rpb25zLlxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlc1RvRE9NTm9kZShfcmVmKSB7XG4gIHZhciBkb21Ob2RlID0gX3JlZi5kb21Ob2RlLFxuICAgICAgc3R5bGVzID0gX3JlZi5zdHlsZXM7XG5cbiAgLy8gQ2FuJ3QganVzdCBkbyBhbiBvYmplY3QgbWVyZ2UgYmVjYXVzZSBkb21Ob2RlLnN0eWxlcyBpcyBubyByZWd1bGFyIG9iamVjdC5cbiAgLy8gTmVlZCB0byBkbyBpdCB0aGlzIHdheSBmb3IgdGhlIGVuZ2luZSB0byBmaXJlIGl0cyBgc2V0YCBsaXN0ZW5lcnMuXG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZG9tTm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShoeXBoZW5hdGUoa2V5KSwgc3R5bGVzW2tleV0pO1xuICB9KTtcbn1cblxuLy8gTW9kaWZpZWQgZnJvbSBNb2Rlcm5penJcbmZ1bmN0aW9uIHdoaWNoVHJhbnNpdGlvbkV2ZW50KCkge1xuICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgICctby10cmFuc2l0aW9uJzogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAnLW1vei10cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICctd2Via2l0LXRyYW5zaXRpb24nOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgfTtcblxuICAvLyBJZiB3ZSdyZSBydW5uaW5nIGluIGEgYnJvd3Nlcmxlc3MgZW52aXJvbm1lbnQgKGVnLiBTU1IpLCBpdCBkb2Vzbid0IGFwcGx5LlxuICAvLyBSZXR1cm4gYSBwbGFjZWhvbGRlciBzdHJpbmcsIGZvciBjb25zaXN0ZW50IHR5cGUgcmV0dXJuLlxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuICcnO1xuXG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG5cbiAgdmFyIG1hdGNoID0gZmluZChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiBlbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHQpICE9PSB1bmRlZmluZWQ7XG4gIH0sIE9iamVjdC5rZXlzKHRyYW5zaXRpb25zKSk7XG5cbiAgLy8gSWYgbm8gYHRyYW5zaXRpb25gIGlzIGZvdW5kLCB3ZSBtdXN0IGJlIHJ1bm5pbmcgaW4gYSBicm93c2VyIHNvIGFuY2llbnQsXG4gIC8vIFJlYWN0IGl0c2VsZiB3b24ndCBydW4uIFJldHVybiBhbiBlbXB0eSBzdHJpbmcsIGZvciBjb25zaXN0ZW50IHR5cGUgcmV0dXJuXG4gIHJldHVybiBtYXRjaCA/IHRyYW5zaXRpb25zW21hdGNoXSA6ICcnO1xufVxuXG52YXIgZ2V0UmVsYXRpdmVCb3VuZGluZ0JveCA9IGZ1bmN0aW9uIGdldFJlbGF0aXZlQm91bmRpbmdCb3goX3JlZjIpIHtcbiAgdmFyIGNoaWxkRG9tTm9kZSA9IF9yZWYyLmNoaWxkRG9tTm9kZSxcbiAgICAgIHBhcmVudERvbU5vZGUgPSBfcmVmMi5wYXJlbnREb21Ob2RlLFxuICAgICAgZ2V0UG9zaXRpb24gPSBfcmVmMi5nZXRQb3NpdGlvbjtcblxuICB2YXIgcGFyZW50Qm94ID0gZ2V0UG9zaXRpb24ocGFyZW50RG9tTm9kZSk7XG5cbiAgdmFyIF9nZXRQb3NpdGlvbiA9IGdldFBvc2l0aW9uKGNoaWxkRG9tTm9kZSksXG4gICAgICB0b3AgPSBfZ2V0UG9zaXRpb24udG9wLFxuICAgICAgbGVmdCA9IF9nZXRQb3NpdGlvbi5sZWZ0LFxuICAgICAgcmlnaHQgPSBfZ2V0UG9zaXRpb24ucmlnaHQsXG4gICAgICBib3R0b20gPSBfZ2V0UG9zaXRpb24uYm90dG9tLFxuICAgICAgd2lkdGggPSBfZ2V0UG9zaXRpb24ud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfZ2V0UG9zaXRpb24uaGVpZ2h0O1xuXG4gIHJldHVybiB7XG4gICAgdG9wOiB0b3AgLSBwYXJlbnRCb3gudG9wLFxuICAgIGxlZnQ6IGxlZnQgLSBwYXJlbnRCb3gubGVmdCxcbiAgICByaWdodDogcGFyZW50Qm94LnJpZ2h0IC0gcmlnaHQsXG4gICAgYm90dG9tOiBwYXJlbnRCb3guYm90dG9tIC0gYm90dG9tLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufTtcblxuLyoqIGdldFBvc2l0aW9uRGVsdGFcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGRlbHRhIGJldHdlZW4gdHdvIGJvdW5kaW5nIGJveGVzLCB0byBmaWd1cmUgb3V0XG4gKiBob3cgbWFueSBwaXhlbHMgb24gZWFjaCBheGlzIHRoZSBlbGVtZW50IGhhcyBtb3ZlZC5cbiAqXG4gKi9cbnZhciBnZXRQb3NpdGlvbkRlbHRhID0gZnVuY3Rpb24gZ2V0UG9zaXRpb25EZWx0YShfcmVmMykge1xuICB2YXIgY2hpbGREb21Ob2RlID0gX3JlZjMuY2hpbGREb21Ob2RlLFxuICAgICAgY2hpbGRCb3VuZGluZ0JveCA9IF9yZWYzLmNoaWxkQm91bmRpbmdCb3gsXG4gICAgICBwYXJlbnRCb3VuZGluZ0JveCA9IF9yZWYzLnBhcmVudEJvdW5kaW5nQm94LFxuICAgICAgZ2V0UG9zaXRpb24gPSBfcmVmMy5nZXRQb3NpdGlvbjtcblxuICAvLyBURU1QOiBBIG15c3RlcnkgYnVnIGlzIHNvbWV0aW1lcyBjYXVzaW5nIHVubmVjZXNzYXJ5IGJvdW5kaW5nQm94ZXMgdG9cbiAgdmFyIGRlZmF1bHRCb3ggPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9O1xuXG4gIC8vIE91ciBvbGQgYm94IGlzIGl0cyBsYXN0IGNhbGN1bGF0ZWQgcG9zaXRpb24sIGRlcml2ZWQgb24gbW91bnQgb3IgYXQgdGhlXG4gIC8vIHN0YXJ0IG9mIHRoZSBwcmV2aW91cyBhbmltYXRpb24uXG4gIHZhciBvbGRSZWxhdGl2ZUJveCA9IGNoaWxkQm91bmRpbmdCb3ggfHwgZGVmYXVsdEJveDtcbiAgdmFyIHBhcmVudEJveCA9IHBhcmVudEJvdW5kaW5nQm94IHx8IGRlZmF1bHRCb3g7XG5cbiAgLy8gT3VyIG5ldyBib3ggaXMgdGhlIG5ldyBmaW5hbCByZXN0aW5nIHBsYWNlOiBXaGVyZSB3ZSBleHBlY3QgaXQgdG8gd2luZCB1cFxuICAvLyBhZnRlciB0aGUgYW5pbWF0aW9uLiBGaXJzdCB3ZSBnZXQgdGhlIGJveCBpbiBhYnNvbHV0ZSB0ZXJtcyAoQUtBIHJlbGF0aXZlXG4gIC8vIHRvIHRoZSB2aWV3cG9ydCksIGFuZCB0aGVuIHdlIGNhbGN1bGF0ZSBpdHMgcmVsYXRpdmUgYm94IChyZWxhdGl2ZSB0byB0aGVcbiAgLy8gcGFyZW50IGNvbnRhaW5lcilcbiAgdmFyIG5ld0Fic29sdXRlQm94ID0gZ2V0UG9zaXRpb24oY2hpbGREb21Ob2RlKTtcbiAgdmFyIG5ld1JlbGF0aXZlQm94ID0ge1xuICAgIHRvcDogbmV3QWJzb2x1dGVCb3gudG9wIC0gcGFyZW50Qm94LnRvcCxcbiAgICBsZWZ0OiBuZXdBYnNvbHV0ZUJveC5sZWZ0IC0gcGFyZW50Qm94LmxlZnRcbiAgfTtcblxuICByZXR1cm4gW29sZFJlbGF0aXZlQm94LmxlZnQgLSBuZXdSZWxhdGl2ZUJveC5sZWZ0LCBvbGRSZWxhdGl2ZUJveC50b3AgLSBuZXdSZWxhdGl2ZUJveC50b3BdO1xufTtcblxuLyoqIHJlbW92ZU5vZGVGcm9tRE9NRmxvd1xuICogVGhpcyBtZXRob2QgZG9lcyBzb21ldGhpbmcgdmVyeSBzbmVha3k6IGl0IHJlbW92ZXMgYSBET00gbm9kZSBmcm9tIHRoZVxuICogZG9jdW1lbnQgZmxvdywgYnV0IHdpdGhvdXQgYWN0dWFsbHkgY2hhbmdpbmcgaXRzIG9uLXNjcmVlbiBwb3NpdGlvbi5cbiAqXG4gKiBJdCB3b3JrcyBieSBjYWxjdWxhdGluZyB3aGVyZSB0aGUgbm9kZSBpcywgYW5kIHRoZW4gYXBwbHlpbmcgc3R5bGVzXG4gKiBzbyB0aGF0IGl0IHdpbmRzIHVwIGJlaW5nIHBvc2l0aW9uZWQgYWJzb2x1dGVseSwgYnV0IGluIGV4YWN0bHkgdGhlXG4gKiBzYW1lIHBsYWNlLlxuICpcbiAqIFRoaXMgaXMgYSB2aXRhbCBwYXJ0IG9mIHRoZSBGTElQIHRlY2huaXF1ZS5cbiAqL1xudmFyIHJlbW92ZU5vZGVGcm9tRE9NRmxvdyA9IGZ1bmN0aW9uIHJlbW92ZU5vZGVGcm9tRE9NRmxvdyhjaGlsZERhdGEsIHZlcnRpY2FsQWxpZ25tZW50KSB7XG4gIHZhciBkb21Ob2RlID0gY2hpbGREYXRhLmRvbU5vZGUsXG4gICAgICBib3VuZGluZ0JveCA9IGNoaWxkRGF0YS5ib3VuZGluZ0JveDtcblxuXG4gIGlmICghZG9tTm9kZSB8fCAhYm91bmRpbmdCb3gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3IgdGhpcyB0byB3b3JrLCB3ZSBoYXZlIHRvIG9mZnNldCBhbnkgZ2l2ZW4gYG1hcmdpbmAuXG4gIHZhciBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvbU5vZGUpO1xuXG4gIC8vIFdlIG5lZWQgdG8gY2xlYW4gdXAgbWFyZ2lucywgYnkgY29udmVydGluZyBhbmQgcmVtb3Zpbmcgc3VmZml4OlxuICAvLyBlZy4gJzIxcHgnIC0+IDIxXG4gIHZhciBtYXJnaW5BdHRycyA9IFsnbWFyZ2luLXRvcCcsICdtYXJnaW4tbGVmdCcsICdtYXJnaW4tcmlnaHQnXTtcbiAgdmFyIG1hcmdpbnMgPSBtYXJnaW5BdHRycy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbWFyZ2luKSB7XG4gICAgdmFyIF9iYWJlbEhlbHBlcnMkZXh0ZW5kcztcblxuICAgIHZhciBwcm9wZXJ0eVZhbCA9IGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUobWFyZ2luKTtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYWNjLCAoX2JhYmVsSGVscGVycyRleHRlbmRzID0ge30sIF9iYWJlbEhlbHBlcnMkZXh0ZW5kc1ttYXJnaW5dID0gTnVtYmVyKHByb3BlcnR5VmFsLnJlcGxhY2UoJ3B4JywgJycpKSwgX2JhYmVsSGVscGVycyRleHRlbmRzKSk7XG4gIH0sIHt9KTtcblxuICAvLyBJZiB3ZSdyZSBib3R0b20tYWxpZ25lZCwgd2UgbmVlZCB0byBhZGQgdGhlIGhlaWdodCBvZiB0aGUgY2hpbGQgdG8gaXRzXG4gIC8vIHRvcCBvZmZzZXQuIFRoaXMgaXMgYmVjYXVzZSwgd2hlbiB0aGUgY29udGFpbmVyIGlzIGJvdHRvbS1hbGlnbmVkLCBpdHNcbiAgLy8gaGVpZ2h0IHNocmlua3MgZnJvbSB0aGUgdG9wLCBub3QgdGhlIGJvdHRvbS4gV2UncmUgcmVtb3ZpbmcgdGhpcyBub2RlXG4gIC8vIGZyb20gdGhlIGZsb3csIHNvIHRoZSB0b3AgaXMgZ29pbmcgdG8gZHJvcCBieSBpdHMgaGVpZ2h0LlxuICB2YXIgdG9wT2Zmc2V0ID0gdmVydGljYWxBbGlnbm1lbnQgPT09ICdib3R0b20nID8gYm91bmRpbmdCb3gudG9wIC0gYm91bmRpbmdCb3guaGVpZ2h0IDogYm91bmRpbmdCb3gudG9wO1xuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiB0b3BPZmZzZXQgLSBtYXJnaW5zWydtYXJnaW4tdG9wJ10gKyAncHgnLFxuICAgIGxlZnQ6IGJvdW5kaW5nQm94LmxlZnQgLSBtYXJnaW5zWydtYXJnaW4tbGVmdCddICsgJ3B4JyxcbiAgICByaWdodDogYm91bmRpbmdCb3gucmlnaHQgLSBtYXJnaW5zWydtYXJnaW4tcmlnaHQnXSArICdweCdcbiAgfTtcblxuICBhcHBseVN0eWxlc1RvRE9NTm9kZSh7IGRvbU5vZGU6IGRvbU5vZGUsIHN0eWxlczogc3R5bGVzIH0pO1xufTtcblxuLyoqIHVwZGF0ZUhlaWdodFBsYWNlaG9sZGVyXG4gKiBBbiBvcHRpb25hbCBwcm9wZXJ0eSB0byBGbGlwTW92ZSBpcyBhIGBtYWludGFpbkNvbnRhaW5lckhlaWdodGAgYm9vbGVhbi5cbiAqIFRoaXMgcHJvcGVydHkgY3JlYXRlcyBhIG5vZGUgdGhhdCBmaWxscyBzcGFjZSwgc28gdGhhdCB0aGUgcGFyZW50XG4gKiBjb250YWluZXIgZG9lc24ndCBjb2xsYXBzZSB3aGVuIGl0cyBjaGlsZHJlbiBhcmUgcmVtb3ZlZCBmcm9tIHRoZVxuICogZG9jdW1lbnQgZmxvdy5cbiAqL1xudmFyIHVwZGF0ZUhlaWdodFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gdXBkYXRlSGVpZ2h0UGxhY2Vob2xkZXIoX3JlZjQpIHtcbiAgdmFyIGRvbU5vZGUgPSBfcmVmNC5kb21Ob2RlLFxuICAgICAgcGFyZW50RGF0YSA9IF9yZWY0LnBhcmVudERhdGEsXG4gICAgICBnZXRQb3NpdGlvbiA9IF9yZWY0LmdldFBvc2l0aW9uO1xuXG4gIHZhciBwYXJlbnREb21Ob2RlID0gcGFyZW50RGF0YS5kb21Ob2RlO1xuICB2YXIgcGFyZW50Qm91bmRpbmdCb3ggPSBwYXJlbnREYXRhLmJvdW5kaW5nQm94O1xuXG4gIGlmICghcGFyZW50RG9tTm9kZSB8fCAhcGFyZW50Qm91bmRpbmdCb3gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBXZSBuZWVkIHRvIGZpbmQgdGhlIGhlaWdodCBvZiB0aGUgY29udGFpbmVyICp3aXRob3V0KiB0aGUgcGxhY2Vob2xkZXIuXG4gIC8vIFNpbmNlIGl0J3MgcG9zc2libGUgdGhhdCB0aGUgcGxhY2Vob2xkZXIgbWlnaHQgYWxyZWFkeSBiZSBwcmVzZW50LFxuICAvLyB3ZSBmaXJzdCBzZXQgaXRzIGhlaWdodCB0byAwLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgY29udGFpbmVyIHRvIGNvbGxhcHNlIGRvd24gdG8gdGhlIHNpemUgb2YganVzdCBpdHNcbiAgLy8gY29udGVudCAocGx1cyBjb250YWluZXIgcGFkZGluZyBvciBib3JkZXJzIGlmIGFueSkuXG4gIGFwcGx5U3R5bGVzVG9ET01Ob2RlKHsgZG9tTm9kZTogZG9tTm9kZSwgc3R5bGVzOiB7IGhlaWdodDogJzAnIH0gfSk7XG5cbiAgLy8gRmluZCB0aGUgZGlzdGFuY2UgYnkgd2hpY2ggdGhlIGNvbnRhaW5lciB3b3VsZCBiZSBjb2xsYXBzZWQgYnkgZWxlbWVudHNcbiAgLy8gbGVhdmluZy4gV2UgY29tcGFyZSB0aGUgZnJlc2hseS1hdmFpbGFibGUgcGFyZW50IGhlaWdodCB3aXRoIHRoZSBvcmlnaW5hbCxcbiAgLy8gY2FjaGVkIGNvbnRhaW5lciBoZWlnaHQuXG4gIHZhciBvcmlnaW5hbFBhcmVudEhlaWdodCA9IHBhcmVudEJvdW5kaW5nQm94LmhlaWdodDtcbiAgdmFyIGNvbGxhcHNlZFBhcmVudEhlaWdodCA9IGdldFBvc2l0aW9uKHBhcmVudERvbU5vZGUpLmhlaWdodDtcbiAgdmFyIHJlZHVjdGlvbkluSGVpZ2h0ID0gb3JpZ2luYWxQYXJlbnRIZWlnaHQgLSBjb2xsYXBzZWRQYXJlbnRIZWlnaHQ7XG5cbiAgLy8gSWYgdGhlIGNvbnRhaW5lciBoYXMgYmVjb21lIHNob3J0ZXIsIHVwZGF0ZSB0aGUgcGFkZGluZyBlbGVtZW50J3NcbiAgLy8gaGVpZ2h0IHRvIHRha2UgdXAgdGhlIGRpZmZlcmVuY2UuIE90aGVyd2lzZSBzZXQgaXRzIGhlaWdodCB0byB6ZXJvLFxuICAvLyBzbyB0aGF0IGl0IGhhcyBubyBlZmZlY3QuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgaGVpZ2h0OiByZWR1Y3Rpb25JbkhlaWdodCA+IDAgPyByZWR1Y3Rpb25JbkhlaWdodCArICdweCcgOiAnMCdcbiAgfTtcblxuICBhcHBseVN0eWxlc1RvRE9NTm9kZSh7IGRvbU5vZGU6IGRvbU5vZGUsIHN0eWxlczogc3R5bGVzIH0pO1xufTtcblxudmFyIGdldE5hdGl2ZU5vZGUgPSBmdW5jdGlvbiBnZXROYXRpdmVOb2RlKGVsZW1lbnQpIHtcbiAgLy8gV2hlbiBydW5uaW5nIGluIGEgd2luZG93bGVzcyBlbnZpcm9ubWVudCwgYWJvcnQhXG4gIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBgZWxlbWVudGAgbWF5IGFscmVhZHkgYmUgYSBuYXRpdmUgbm9kZS5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLy8gV2hpbGUgUmVhY3RET00ncyBgZmluZERPTU5vZGVgIGlzIGRpc2NvdXJhZ2VkLCBpdCdzIHRoZSBvbmx5XG4gIC8vIHB1YmxpY2x5LWV4cG9zZWQgd2F5IHRvIGZpbmQgdGhlIHVuZGVybHlpbmcgRE9NIG5vZGUgZm9yXG4gIC8vIGNvbXBvc2l0ZSBjb21wb25lbnRzLlxuICB2YXIgZm91bmROb2RlID0gZmluZERPTU5vZGUoZWxlbWVudCk7XG5cbiAgaWYgKGZvdW5kTm9kZSAmJiBmb3VuZE5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgLy8gVGV4dCBub2RlcyBhcmUgbm90IHN1cHBvcnRlZFxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmbG93dHlwZS9uby13ZWFrLXR5cGVzXG4gIHJldHVybiBmb3VuZE5vZGU7XG59O1xuXG52YXIgY3JlYXRlVHJhbnNpdGlvblN0cmluZyA9IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25TdHJpbmcoaW5kZXgsIHByb3BzKSB7XG4gIHZhciBkZWxheSA9IHByb3BzLmRlbGF5LFxuICAgICAgZHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbjtcbiAgdmFyIHN0YWdnZXJEdXJhdGlvbkJ5ID0gcHJvcHMuc3RhZ2dlckR1cmF0aW9uQnksXG4gICAgICBzdGFnZ2VyRGVsYXlCeSA9IHByb3BzLnN0YWdnZXJEZWxheUJ5LFxuICAgICAgZWFzaW5nID0gcHJvcHMuZWFzaW5nO1xuXG5cbiAgZGVsYXkgKz0gaW5kZXggKiBzdGFnZ2VyRGVsYXlCeTtcbiAgZHVyYXRpb24gKz0gaW5kZXggKiBzdGFnZ2VyRHVyYXRpb25CeTtcblxuICB2YXIgY3NzUHJvcGVydGllcyA9IFsndHJhbnNmb3JtJywgJ29wYWNpdHknXTtcblxuICByZXR1cm4gY3NzUHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICByZXR1cm4gcHJvcCArICcgJyArIGR1cmF0aW9uICsgJ21zICcgKyBlYXNpbmcgKyAnICcgKyBkZWxheSArICdtcyc7XG4gIH0pLmpvaW4oJywgJyk7XG59O1xuXG4vKipcbiAqIFJlYWN0IEZsaXAgTW92ZVxuICogKGMpIDIwMTYtcHJlc2VudCBKb3NodWEgQ29tZWF1XG4gKlxuICogRm9yIGluZm9ybWF0aW9uIG9uIGhvdyB0aGlzIGNvZGUgaXMgbGFpZCBvdXQsIGNoZWNrIG91dCBDT0RFX1RPVVIubWRcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1kdXBsaWNhdGUtaW1wb3J0c1xuXG5cbnZhciB0cmFuc2l0aW9uRW5kID0gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKTtcbnZhciBub0Jyb3dzZXJTdXBwb3J0ID0gIXRyYW5zaXRpb25FbmQ7XG5cbmZ1bmN0aW9uIGdldEtleShjaGlsZERhdGEpIHtcbiAgcmV0dXJuIGNoaWxkRGF0YS5rZXkgfHwgJyc7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRDaGlsZHJlbihjaGlsZHJlbikge1xuICAvLyBGaXggaW5jb21wbGV0ZSB0eXBpbmcgb2YgQ2hpbGRyZW4udG9BcnJheVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmxvd3R5cGUvbm8td2Vhay10eXBlc1xuICByZXR1cm4gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG59XG5cbnZhciBGbGlwTW92ZSQxID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgaW5oZXJpdHMoRmxpcE1vdmUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZsaXBNb3ZlKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBGbGlwTW92ZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoaWxkcmVuOiBnZXRFbGVtZW50Q2hpbGRyZW4oXG4gICAgICAvLyBgdGhpcy5wcm9wc2Agb3VnaHQgdG8gYWx3YXlzIGJlIGRlZmluZWQgYXQgdGhpcyBwb2ludCwgYnV0IGEgcmVwb3J0XG4gICAgICAvLyB3YXMgbWFkZSBhYm91dCBpdCBub3QgYmVpbmcgZGVmaW5lZCBpbiBJRTEwLlxuICAgICAgLy8gVE9ETzogVGVzdCBpbiBJRTEwLCB0byBzZWUgaWYgdGhlcmUncyBhbiB1bmRlcmx5aW5nIGNhdXNlIHRoYXQgY2FuXG4gICAgICAvLyBiZSBhZGRyZXNzZWQuXG4gICAgICBfdGhpcy5wcm9wcyA/IF90aGlzLnByb3BzLmNoaWxkcmVuIDogW10pLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGVsZW1lbnQsIHtcbiAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgIGFwcGVhcmluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfSwgX3RoaXMuY2hpbGRyZW5EYXRhID0ge30sIF90aGlzLnBhcmVudERhdGEgPSB7XG4gICAgICBkb21Ob2RlOiBudWxsLFxuICAgICAgYm91bmRpbmdCb3g6IG51bGxcbiAgICB9LCBfdGhpcy5oZWlnaHRQbGFjZWhvbGRlckRhdGEgPSB7XG4gICAgICBkb21Ob2RlOiBudWxsXG4gICAgfSwgX3RoaXMucmVtYWluaW5nQW5pbWF0aW9ucyA9IDAsIF90aGlzLmNoaWxkcmVuVG9BbmltYXRlID0gW10sIF90aGlzLmZpbmRET01Db250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZmluZC1kb20tbm9kZVxuICAgICAgdmFyIGRvbU5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyk7XG4gICAgICB2YXIgcGFyZW50Tm9kZSA9IGRvbU5vZGUgJiYgZG9tTm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAvLyBUaGlzIG91Z2h0IHRvIGJlIGltcG9zc2libGUsIGJ1dCBoYW5kbGluZyBpdCBmb3IgRmxvdydzIHNha2UuXG4gICAgICBpZiAoIXBhcmVudE5vZGUgfHwgIShwYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHBhcmVudCBub2RlIGhhcyBzdGF0aWMgcG9zaXRpb25pbmcsIGxlYXZlIGFuaW1hdGlvbnMgbWlnaHQgbG9va1xuICAgICAgLy8gcmVhbGx5IGZ1bmt5LiBMZXQncyBhdXRvbWF0aWNhbGx5IGFwcGx5IGBwb3NpdGlvbjogcmVsYXRpdmVgIGluIHRoaXNcbiAgICAgIC8vIGNhc2UsIHRvIHByZXZlbnQgYW55IHF1aXJraW5lc3MuXG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50Tm9kZSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHBhcmVudE5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICBwYXJlbnROb2RlUG9zaXRpb25TdGF0aWMoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucGFyZW50RGF0YS5kb21Ob2RlID0gcGFyZW50Tm9kZTtcbiAgICB9LCBfdGhpcy5ydW5BbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZHluYW1pY0NoaWxkcmVuID0gX3RoaXMuc3RhdGUuY2hpbGRyZW4uZmlsdGVyKF90aGlzLmRvZXNDaGlsZE5lZWRUb0JlQW5pbWF0ZWQpO1xuXG4gICAgICAvLyBTcGxpdHRpbmcgRE9NIHJlYWRzIGFuZCB3cml0ZXMgdG8gYmUgcGVmb3JtZWQgaW4gYmF0Y2hlc1xuICAgICAgdmFyIGNoaWxkcmVuSW5pdGlhbFN0eWxlcyA9IGR5bmFtaWNDaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jb21wdXRlSW5pdGlhbFN0eWxlcyhjaGlsZCk7XG4gICAgICB9KTtcbiAgICAgIGR5bmFtaWNDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgX3RoaXMucmVtYWluaW5nQW5pbWF0aW9ucyArPSAxO1xuICAgICAgICBfdGhpcy5jaGlsZHJlblRvQW5pbWF0ZS5wdXNoKGdldEtleShjaGlsZCkpO1xuICAgICAgICBfdGhpcy5hbmltYXRlQ2hpbGQoY2hpbGQsIGluZGV4LCBjaGlsZHJlbkluaXRpYWxTdHlsZXNbaW5kZXhdKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLm9uU3RhcnRBbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX3RoaXMuY2FsbENoaWxkcmVuSG9vayhfdGhpcy5wcm9wcy5vblN0YXJ0QWxsKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5kb2VzQ2hpbGROZWVkVG9CZUFuaW1hdGVkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAvLyBJZiB0aGUgY2hpbGQgZG9lc24ndCBoYXZlIGEga2V5LCBpdCdzIGFuIGltbW92YWJsZSBjaGlsZCAob25lIHRoYXQgd2VcbiAgICAgIC8vIGRvIG5vdCB3YW50IHRvIGRvIEZMSVAgc3R1ZmYgdG8uKVxuICAgICAgaWYgKCFnZXRLZXkoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkRGF0YSA9IF90aGlzLmdldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpKTtcbiAgICAgIHZhciBjaGlsZERvbU5vZGUgPSBjaGlsZERhdGEuZG9tTm9kZTtcbiAgICAgIHZhciBjaGlsZEJvdW5kaW5nQm94ID0gY2hpbGREYXRhLmJvdW5kaW5nQm94O1xuICAgICAgdmFyIHBhcmVudEJvdW5kaW5nQm94ID0gX3RoaXMucGFyZW50RGF0YS5ib3VuZGluZ0JveDtcblxuICAgICAgaWYgKCFjaGlsZERvbU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBhcHBlYXJBbmltYXRpb24gPSBfdGhpcyRwcm9wcy5hcHBlYXJBbmltYXRpb24sXG4gICAgICAgICAgZW50ZXJBbmltYXRpb24gPSBfdGhpcyRwcm9wcy5lbnRlckFuaW1hdGlvbixcbiAgICAgICAgICBsZWF2ZUFuaW1hdGlvbiA9IF90aGlzJHByb3BzLmxlYXZlQW5pbWF0aW9uLFxuICAgICAgICAgIGdldFBvc2l0aW9uID0gX3RoaXMkcHJvcHMuZ2V0UG9zaXRpb247XG5cblxuICAgICAgdmFyIGlzQXBwZWFyaW5nV2l0aEFuaW1hdGlvbiA9IGNoaWxkLmFwcGVhcmluZyAmJiBhcHBlYXJBbmltYXRpb247XG4gICAgICB2YXIgaXNFbnRlcmluZ1dpdGhBbmltYXRpb24gPSBjaGlsZC5lbnRlcmluZyAmJiBlbnRlckFuaW1hdGlvbjtcbiAgICAgIHZhciBpc0xlYXZpbmdXaXRoQW5pbWF0aW9uID0gY2hpbGQubGVhdmluZyAmJiBsZWF2ZUFuaW1hdGlvbjtcblxuICAgICAgaWYgKGlzQXBwZWFyaW5nV2l0aEFuaW1hdGlvbiB8fCBpc0VudGVyaW5nV2l0aEFuaW1hdGlvbiB8fCBpc0xlYXZpbmdXaXRoQW5pbWF0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpc24ndCBlbnRlcmluZy9sZWF2aW5nLCB3ZSB3YW50IHRvIGFuaW1hdGUgaXQgaWYgaXQnc1xuICAgICAgLy8gb24tc2NyZWVuIHBvc2l0aW9uIGhhcyBjaGFuZ2VkLlxuXG4gICAgICB2YXIgX2dldFBvc2l0aW9uRGVsdGEgPSBnZXRQb3NpdGlvbkRlbHRhKHtcbiAgICAgICAgY2hpbGREb21Ob2RlOiBjaGlsZERvbU5vZGUsXG4gICAgICAgIGNoaWxkQm91bmRpbmdCb3g6IGNoaWxkQm91bmRpbmdCb3gsXG4gICAgICAgIHBhcmVudEJvdW5kaW5nQm94OiBwYXJlbnRCb3VuZGluZ0JveCxcbiAgICAgICAgZ2V0UG9zaXRpb246IGdldFBvc2l0aW9uXG4gICAgICB9KSxcbiAgICAgICAgICBkWCA9IF9nZXRQb3NpdGlvbkRlbHRhWzBdLFxuICAgICAgICAgIGRZID0gX2dldFBvc2l0aW9uRGVsdGFbMV07XG5cbiAgICAgIHJldHVybiBkWCAhPT0gMCB8fCBkWSAhPT0gMDtcbiAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG4gIC8vIENvcHkgcHJvcHMuY2hpbGRyZW4gaW50byBzdGF0ZS5cbiAgLy8gVG8gdW5kZXJzdGFuZCB3aHkgdGhpcyBpcyBpbXBvcnRhbnQgKGFuZCBub3QgYW4gYW50aS1wYXR0ZXJuKSwgY29uc2lkZXJcbiAgLy8gaG93IFwibGVhdmVcIiBhbmltYXRpb25zIHdvcmsuIEFuIGl0ZW0gaGFzIFwibGVmdFwiIHdoZW4gdGhlIGNvbXBvbmVudFxuICAvLyByZWNlaXZlcyBhIG5ldyBzZXQgb2YgcHJvcHMgdGhhdCBkbyBOT1QgY29udGFpbiB0aGUgaXRlbS5cbiAgLy8gSWYgd2UganVzdCByZW5kZXIgdGhlIHByb3BzIGFzLWlzLCB0aGUgaXRlbSB3b3VsZCBpbnN0YW50bHkgZGlzYXBwZWFyLlxuICAvLyBXZSB3YW50IHRvIGtlZXAgdGhlIGl0ZW0gcmVuZGVyZWQgZm9yIGEgbGl0dGxlIHdoaWxlLCB1bnRpbCBpdHMgYW5pbWF0aW9uXG4gIC8vIGNhbiBjb21wbGV0ZS4gQmVjYXVzZSB3ZSBjYW5ub3QgbXV0YXRlIHByb3BzLCB3ZSBtYWtlIGBzdGF0ZWAgdGhlIHNvdXJjZVxuICAvLyBvZiB0cnV0aC5cblxuXG4gIC8vIEZsaXBNb3ZlIG5lZWRzIHRvIGtub3cgcXVpdGUgYSBiaXQgYWJvdXQgaXRzIGNoaWxkcmVuIGluIG9yZGVyIHRvIGRvXG4gIC8vIGl0cyBqb2IuIFdlIHN0b3JlIHRoZXNlIGFzIGEgcHJvcGVydHkgb24gdGhlIGluc3RhbmNlLiBXZSdyZSBub3QgdXNpbmdcbiAgLy8gc3RhdGUsIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBjaGFuZ2VzIHRvIHRyaWdnZXIgcmUtcmVuZGVycywgd2UganVzdFxuICAvLyBuZWVkIGEgcGxhY2UgdG8ga2VlcCB0aGUgZGF0YSBmb3IgcmVmZXJlbmNlLCB3aGVuIGNoYW5nZXMgaGFwcGVuLlxuICAvLyBUaGlzIGZpZWxkIHNob3VsZCBub3QgYmUgYWNjZXNzZWQgZGlyZWN0bHkuIEluc3RlYWQsIHVzZSBnZXRDaGlsZERhdGEsXG4gIC8vIHB1dENoaWxkRGF0YSwgZXRjLi4uXG5cblxuICAvLyBTaW1pbGFybHksIHRyYWNrIHRoZSBkb20gbm9kZSBhbmQgYm94IG9mIG91ciBwYXJlbnQgZWxlbWVudC5cblxuXG4gIC8vIElmIGBtYWludGFpbkNvbnRhaW5lckhlaWdodGAgcHJvcCBpcyBzZXQgdG8gdHJ1ZSwgd2UnbGwgY3JlYXRlIGFcbiAgLy8gcGxhY2Vob2xkZXIgZWxlbWVudCB3aGljaCBvY2N1cGllcyBzcGFjZSBzbyB0aGF0IHRoZSBwYXJlbnQgaGVpZ2h0XG4gIC8vIGRvZXNuJ3QgY2hhbmdlIHdoZW4gaXRlbXMgYXJlIHJlbW92ZWQgZnJvbSB0aGUgZG9jdW1lbnQgZmxvdyAod2hpY2hcbiAgLy8gaGFwcGVucyBkdXJpbmcgbGVhdmUgYW5pbWF0aW9ucylcblxuXG4gIC8vIEtlZXAgdHJhY2sgb2YgcmVtYWluaW5nIGFuaW1hdGlvbnMgc28gd2Uga25vdyB3aGVuIHRvIGZpcmUgdGhlXG4gIC8vIGFsbC1maW5pc2hlZCBjYWxsYmFjaywgYW5kIGNsZWFuIHVwIGFmdGVyIG91cnNlbHZlcy5cbiAgLy8gTk9URTogd2UgY2FuJ3Qgc2ltcGx5IHVzZSBjaGlsZHJlblRvQW5pbWF0ZS5sZW5ndGggdG8gdHJhY2sgcmVtYWluaW5nXG4gIC8vIGFuaW1hdGlvbnMsIGJlY2F1c2Ugd2UgbmVlZCB0byBtYWludGFpbiB0aGUgbGlzdCBvZiBhbmltYXRpbmcgY2hpbGRyZW4sXG4gIC8vIHRvIHBhc3MgdG8gdGhlIGBvbkZpbmlzaEFsbGAgaGFuZGxlci5cblxuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIEJlY2F1c2UgUmVhY3QgMTYgbm8gbG9uZ2VyIHJlcXVpcmVzIHdyYXBwaW5nIGVsZW1lbnRzLCBGbGlwIE1vdmUgY2FuIG9wdFxuICAgIC8vIHRvIG5vdCB3cmFwIHRoZSBjaGlsZHJlbiBpbiBhbiBlbGVtZW50LiBJbiB0aGF0IGNhc2UsIGZpbmQgdGhlIHBhcmVudFxuICAgIC8vIGVsZW1lbnQgdXNpbmcgYGZpbmRET01Ob2RlYC5cbiAgICBpZiAodGhpcy5wcm9wcy50eXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5maW5kRE9NQ29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgLy8gUnVuIG91ciBgYXBwZWFyQW5pbWF0aW9uYCBpZiBpdCB3YXMgcmVxdWVzdGVkLCByaWdodCBhZnRlciB0aGVcbiAgICAvLyBjb21wb25lbnQgbW91bnRzLlxuICAgIHZhciBzaG91bGRUcmlnZ2VyRkxJUCA9IHRoaXMucHJvcHMuYXBwZWFyQW5pbWF0aW9uICYmICF0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQodGhpcy5wcm9wcyk7XG5cbiAgICBpZiAoc2hvdWxkVHJpZ2dlckZMSVApIHtcbiAgICAgIHRoaXMucHJlcEZvckFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5ydW5BbmltYXRpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIC8vIFdoZW4gdGhlIGNvbXBvbmVudCBpcyBoYW5kZWQgbmV3IHByb3BzLCB3ZSBuZWVkIHRvIGZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gXCJyZXN0aW5nXCIgcG9zaXRpb24gb2YgYWxsIGN1cnJlbnRseS1yZW5kZXJlZCBET00gbm9kZXMuXG4gICAgLy8gV2Ugc3RvcmUgdGhhdCBkYXRhIGluIHRoaXMucGFyZW50IGFuZCB0aGlzLmNoaWxkcmVuLFxuICAgIC8vIHNvIGl0IGNhbiBiZSB1c2VkIGxhdGVyIHRvIHdvcmsgb3V0IHRoZSBhbmltYXRpb24uXG4gICAgdGhpcy51cGRhdGVCb3VuZGluZ0JveENhY2hlcygpO1xuXG4gICAgLy8gQ29udmVydCBvcGFxdWUgY2hpbGRyZW4gb2JqZWN0IHRvIGFycmF5LlxuICAgIHZhciBuZXh0Q2hpbGRyZW4gPSBnZXRFbGVtZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuKTtcblxuICAgIC8vIE5leHQsIHdlIG5lZWQgdG8gdXBkYXRlIG91ciBzdGF0ZSwgc28gdGhhdCBpdCBjb250YWlucyBvdXIgbmV3IHNldCBvZlxuICAgIC8vIGNoaWxkcmVuLiBJZiBhbmltYXRpb24gaXMgZGlzYWJsZWQgb3IgdW5zdXBwb3J0ZWQsIHRoaXMgaXMgZWFzeTtcbiAgICAvLyB3ZSBqdXN0IGNvcHkgb3VyIHByb3BzIGludG8gc3RhdGUuXG4gICAgLy8gQXNzdW1pbmcgdGhhdCB3ZSBjYW4gYW5pbWF0ZSwgdGhvdWdoLCB3ZSBoYXZlIHRvIGRvIHNvbWUgd29yay5cbiAgICAvLyBFc3NlbnRpYWxseSwgd2Ugd2FudCB0byBrZWVwIGp1c3QtZGVsZXRlZCBub2RlcyBpbiB0aGUgRE9NIGZvciBhIGJpdFxuICAgIC8vIGxvbmdlciwgc28gdGhhdCB3ZSBjYW4gYW5pbWF0ZSB0aGVtIGF3YXkuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGlsZHJlbjogdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkKG5leHRQcm9wcykgPyBuZXh0Q2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZWxlbWVudCwgeyBlbGVtZW50OiBlbGVtZW50IH0pO1xuICAgICAgfSkgOiB0aGlzLmNhbGN1bGF0ZU5leHRTZXRPZkNoaWxkcmVuKG5leHRDaGlsZHJlbilcbiAgICB9KTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZpb3VzUHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50eXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5maW5kRE9NQ29udGFpbmVyKCk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBjaGlsZHJlbiBoYXZlIGJlZW4gcmUtYXJyYW5nZWQsIG1vdmVkLCBvciBhZGRlZC9yZW1vdmVkLFxuICAgIC8vIHRyaWdnZXIgdGhlIG1haW4gRkxJUCBhbmltYXRpb24uXG4gICAgLy9cbiAgICAvLyBJTVBPUlRBTlQ6IFdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGNoaWxkcmVuIGhhdmUgYWN0dWFsbHkgY2hhbmdlZC5cbiAgICAvLyBBdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2l0aW9uLCB3ZSBjbGVhbiB1cCBub2RlcyB0aGF0IG5lZWQgdG8gYmUgcmVtb3ZlZC5cbiAgICAvLyBXZSBET04nVCB3YW50IHRoaXMgY2xlYW51cCB0byB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuXG4gICAgdmFyIG9sZENoaWxkcmVuS2V5cyA9IGdldEVsZW1lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmtleTtcbiAgICB9KTtcbiAgICB2YXIgbmV4dENoaWxkcmVuS2V5cyA9IGdldEVsZW1lbnRDaGlsZHJlbihwcmV2aW91c1Byb3BzLmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmtleTtcbiAgICB9KTtcblxuICAgIHZhciBzaG91bGRUcmlnZ2VyRkxJUCA9ICFhcnJheXNFcXVhbChvbGRDaGlsZHJlbktleXMsIG5leHRDaGlsZHJlbktleXMpICYmICF0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQodGhpcy5wcm9wcyk7XG5cbiAgICBpZiAoc2hvdWxkVHJpZ2dlckZMSVApIHtcbiAgICAgIHRoaXMucHJlcEZvckFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5ydW5BbmltYXRpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNhbGN1bGF0ZU5leHRTZXRPZkNoaWxkcmVuID0gZnVuY3Rpb24gY2FsY3VsYXRlTmV4dFNldE9mQ2hpbGRyZW4obmV4dENoaWxkcmVuKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAvLyBXZSB3YW50IHRvOlxuICAgIC8vICAgLSBNYXJrIGFsbCBuZXcgY2hpbGRyZW4gYXMgYGVudGVyaW5nYFxuICAgIC8vICAgLSBQdWxsIGluIHByZXZpb3VzIGNoaWxkcmVuIHRoYXQgYXJlbid0IGluIG5leHRDaGlsZHJlbiwgYW5kIG1hcmsgdGhlbVxuICAgIC8vICAgICBhcyBgbGVhdmluZ2BcbiAgICAvLyAgIC0gUHJlc2VydmUgdGhlIG5leHRDaGlsZHJlbiBsaXN0IG9yZGVyLCB3aXRoIGxlYXZpbmcgY2hpbGRyZW4gaW4gdGhlaXJcbiAgICAvLyAgICAgYXBwcm9wcmlhdGUgcGxhY2VzLlxuICAgIC8vXG5cbiAgICB2YXIgdXBkYXRlZENoaWxkcmVuID0gbmV4dENoaWxkcmVuLm1hcChmdW5jdGlvbiAobmV4dENoaWxkKSB7XG4gICAgICB2YXIgY2hpbGQgPSBfdGhpczIuZmluZENoaWxkQnlLZXkobmV4dENoaWxkLmtleSk7XG5cbiAgICAgIC8vIElmIHRoZSBjdXJyZW50IGNoaWxkIGRpZCBleGlzdCwgYnV0IGl0IHdhcyBpbiB0aGUgbWlkc3Qgb2YgbGVhdmluZyxcbiAgICAgIC8vIHdlIHdhbnQgdG8gdHJlYXQgaXQgYXMgdGhvdWdoIGl0J3MgZW50ZXJpbmdcbiAgICAgIHZhciBpc0VudGVyaW5nID0gIWNoaWxkIHx8IGNoaWxkLmxlYXZpbmc7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV4dENoaWxkLCB7IGVsZW1lbnQ6IG5leHRDaGlsZCwgZW50ZXJpbmc6IGlzRW50ZXJpbmcgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBUaGlzIGlzIHRyaWNreS4gV2Ugd2FudCB0byBrZWVwIHRoZSBuZXh0Q2hpbGRyZW4ncyBvcmRlcmluZywgYnV0IHdpdGhcbiAgICAvLyBhbnkganVzdC1yZW1vdmVkIGl0ZW1zIG1haW50YWluaW5nIHRoZWlyIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgIC8vIGVnLlxuICAgIC8vICAgdGhpcy5zdGF0ZS5jaGlsZHJlbiAgPSBbIDEsIDIsIDMsIDQgXVxuICAgIC8vICAgbmV4dENoaWxkcmVuICAgICAgICAgPSBbIDMsIDEgXVxuICAgIC8vXG4gICAgLy8gSW4gdGhpcyBleGFtcGxlLCB3ZSd2ZSByZW1vdmVkIHRoZSAnMicgJiAnNCdcbiAgICAvLyBXZSB3YW50IHRvIGVuZCB1cCB3aXRoOiAgWyAyLCAzLCAxLCA0IF1cbiAgICAvL1xuICAgIC8vIFRvIGFjY29tcGxpc2ggdGhhdCwgd2UnbGwgaXRlcmF0ZSB0aHJvdWdoIHRoaXMuc3RhdGUuY2hpbGRyZW4uIHdoZW5ldmVyXG4gICAgLy8gd2UgZmluZCBhIG1hdGNoLCB3ZSdsbCBhcHBlbmQgb3VyIGBsZWF2aW5nYCBmbGFnIHRvIGl0LCBhbmQgaW5zZXJ0IGl0XG4gICAgLy8gaW50byB0aGUgbmV4dENoaWxkcmVuIGluIGl0cyBPUklHSU5BTCBwb3NpdGlvbi4gTm90ZSB0aGF0LCBhcyB3ZSBrZWVwXG4gICAgLy8gaW5zZXJ0aW5nIG9sZCBpdGVtcyBpbnRvIHRoZSBuZXcgbGlzdCwgdGhlIFwib3JpZ2luYWxcIiBwb3NpdGlvbiB3aWxsXG4gICAgLy8ga2VlcCBpbmNyZW1lbnRpbmcuXG4gICAgdmFyIG51bU9mQ2hpbGRyZW5MZWF2aW5nID0gMDtcbiAgICB0aGlzLnN0YXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgdmFyIGlzTGVhdmluZyA9ICFmaW5kKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleTtcbiAgICAgICAgcmV0dXJuIGtleSA9PT0gZ2V0S2V5KGNoaWxkKTtcbiAgICAgIH0sIG5leHRDaGlsZHJlbik7XG5cbiAgICAgIC8vIElmIHRoZSBjaGlsZCBpc24ndCBsZWF2aW5nIChvciwgaWYgdGhlcmUgaXMgbm8gbGVhdmUgYW5pbWF0aW9uKSxcbiAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gYWRkIGl0IGludG8gdGhlIHN0YXRlIGNoaWxkcmVuLlxuICAgICAgaWYgKCFpc0xlYXZpbmcgfHwgIV90aGlzMi5wcm9wcy5sZWF2ZUFuaW1hdGlvbikgcmV0dXJuO1xuXG4gICAgICB2YXIgbmV4dENoaWxkID0gX2V4dGVuZHMoe30sIGNoaWxkLCB7IGxlYXZpbmc6IHRydWUgfSk7XG4gICAgICB2YXIgbmV4dENoaWxkSW5kZXggPSBpbmRleCArIG51bU9mQ2hpbGRyZW5MZWF2aW5nO1xuXG4gICAgICB1cGRhdGVkQ2hpbGRyZW4uc3BsaWNlKG5leHRDaGlsZEluZGV4LCAwLCBuZXh0Q2hpbGQpO1xuICAgICAgbnVtT2ZDaGlsZHJlbkxlYXZpbmcgKz0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1cGRhdGVkQ2hpbGRyZW47XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLnByZXBGb3JBbmltYXRpb24gPSBmdW5jdGlvbiBwcmVwRm9yQW5pbWF0aW9uKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgLy8gT3VyIGFuaW1hdGlvbiBwcmVwIGNvbnNpc3RzIG9mOlxuICAgIC8vIC0gcmVtb3ZlIGNoaWxkcmVuIHRoYXQgYXJlIGxlYXZpbmcgZnJvbSB0aGUgRE9NIGZsb3csIHNvIHRoYXQgdGhlIG5ld1xuICAgIC8vICAgbGF5b3V0IGNhbiBiZSBhY2N1cmF0ZWx5IGNhbGN1bGF0ZWQsXG4gICAgLy8gLSB1cGRhdGUgdGhlIHBsYWNlaG9sZGVyIGNvbnRhaW5lciBoZWlnaHQsIGlmIG5lZWRlZCwgdG8gZW5zdXJlIHRoYXRcbiAgICAvLyAgIHRoZSBwYXJlbnQncyBoZWlnaHQgZG9lc24ndCBjb2xsYXBzZS5cblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBsZWF2ZUFuaW1hdGlvbiA9IF9wcm9wcy5sZWF2ZUFuaW1hdGlvbixcbiAgICAgICAgbWFpbnRhaW5Db250YWluZXJIZWlnaHQgPSBfcHJvcHMubWFpbnRhaW5Db250YWluZXJIZWlnaHQsXG4gICAgICAgIGdldFBvc2l0aW9uID0gX3Byb3BzLmdldFBvc2l0aW9uO1xuXG4gICAgLy8gd2UgbmVlZCB0byBtYWtlIGFsbCBsZWF2aW5nIG5vZGVzIFwiaW52aXNpYmxlXCIgdG8gdGhlIGxheW91dCBjYWxjdWxhdGlvbnNcbiAgICAvLyB0aGF0IHdpbGwgdGFrZSBwbGFjZSBpbiB0aGUgbmV4dCBzdGVwICh0aGlzLnJ1bkFuaW1hdGlvbikuXG5cbiAgICBpZiAobGVhdmVBbmltYXRpb24pIHtcbiAgICAgIHZhciBsZWF2aW5nQ2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmxlYXZpbmc7XG4gICAgICB9KTtcblxuICAgICAgbGVhdmluZ0NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGxlYXZpbmdDaGlsZCkge1xuICAgICAgICB2YXIgY2hpbGREYXRhID0gX3RoaXMzLmdldENoaWxkRGF0YShnZXRLZXkobGVhdmluZ0NoaWxkKSk7XG5cbiAgICAgICAgLy8gV2FybiBpZiBjaGlsZCBpcyBkaXNhYmxlZFxuICAgICAgICBpZiAoIV90aGlzMy5pc0FuaW1hdGlvbkRpc2FibGVkKF90aGlzMy5wcm9wcykgJiYgY2hpbGREYXRhLmRvbU5vZGUgJiYgY2hpbGREYXRhLmRvbU5vZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZElzRGlzYWJsZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdGFrZSB0aGUgaXRlbXMgb3V0IG9mIHRoZSBcImZsb3dcIiBvZiB0aGUgZG9jdW1lbnQsIHNvIHRoYXRcbiAgICAgICAgLy8gaXRzIHNpYmxpbmdzIGNhbiBtb3ZlIHRvIHRha2UgaXRzIHBsYWNlLlxuICAgICAgICBpZiAoY2hpbGREYXRhLmJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgcmVtb3ZlTm9kZUZyb21ET01GbG93KGNoaWxkRGF0YSwgX3RoaXMzLnByb3BzLnZlcnRpY2FsQWxpZ25tZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChtYWludGFpbkNvbnRhaW5lckhlaWdodCAmJiB0aGlzLmhlaWdodFBsYWNlaG9sZGVyRGF0YS5kb21Ob2RlKSB7XG4gICAgICAgIHVwZGF0ZUhlaWdodFBsYWNlaG9sZGVyKHtcbiAgICAgICAgICBkb21Ob2RlOiB0aGlzLmhlaWdodFBsYWNlaG9sZGVyRGF0YS5kb21Ob2RlLFxuICAgICAgICAgIHBhcmVudERhdGE6IHRoaXMucGFyZW50RGF0YSxcbiAgICAgICAgICBnZXRQb3NpdGlvbjogZ2V0UG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRm9yIGFsbCBjaGlsZHJlbiBub3QgaW4gdGhlIG1pZGRsZSBvZiBlbnRlcmluZyBvciBsZWF2aW5nLFxuICAgIC8vIHdlIG5lZWQgdG8gcmVzZXQgdGhlIHRyYW5zaXRpb24sIHNvIHRoYXQgdGhlIE5FVyBzaHVmZmxlIHN0YXJ0cyBmcm9tXG4gICAgLy8gdGhlIHJpZ2h0IHBsYWNlLlxuICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBfZ2V0Q2hpbGREYXRhID0gX3RoaXMzLmdldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpKSxcbiAgICAgICAgICBkb21Ob2RlID0gX2dldENoaWxkRGF0YS5kb21Ob2RlO1xuXG4gICAgICAvLyBJZ25vcmUgY2hpbGRyZW4gdGhhdCBkb24ndCByZW5kZXIgRE9NIG5vZGVzIChlZy4gYnkgcmV0dXJuaW5nIG51bGwpXG5cblxuICAgICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGlsZC5lbnRlcmluZyAmJiAhY2hpbGQubGVhdmluZykge1xuICAgICAgICBhcHBseVN0eWxlc1RvRE9NTm9kZSh7XG4gICAgICAgICAgZG9tTm9kZTogZG9tTm9kZSxcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuYW5pbWF0ZUNoaWxkID0gZnVuY3Rpb24gYW5pbWF0ZUNoaWxkKGNoaWxkLCBpbmRleCwgY2hpbGRJbml0aWFsU3R5bGVzKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgX2dldENoaWxkRGF0YTIgPSB0aGlzLmdldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpKSxcbiAgICAgICAgZG9tTm9kZSA9IF9nZXRDaGlsZERhdGEyLmRvbU5vZGU7XG5cbiAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0aGUgcmVsZXZhbnQgc3R5bGUgZm9yIHRoaXMgRE9NIG5vZGVcbiAgICAvLyBUaGlzIGlzIHRoZSBvZmZzZXQgZnJvbSBpdHMgYWN0dWFsIERPTSBwb3NpdGlvbi5cbiAgICAvLyBlZy4gaWYgYW4gaXRlbSBoYXMgYmVlbiByZS1yZW5kZXJlZCAyMHB4IGxvd2VyLCB3ZSB3YW50IHRvIGFwcGx5IGFcbiAgICAvLyBzdHlsZSBvZiAndHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgpJywgc28gdGhhdCBpdCBhcHBlYXJzIHRvIGJlIHdoZXJlXG4gICAgLy8gaXQgc3RhcnRlZC5cbiAgICAvLyBJbiBGTElQIHRlcm1pbm9sb2d5LCB0aGlzIGlzIHRoZSAnSW52ZXJ0JyBzdGFnZS5cbiAgICBhcHBseVN0eWxlc1RvRE9NTm9kZSh7XG4gICAgICBkb21Ob2RlOiBkb21Ob2RlLFxuICAgICAgc3R5bGVzOiBjaGlsZEluaXRpYWxTdHlsZXNcbiAgICB9KTtcblxuICAgIC8vIFN0YXJ0IGJ5IGludm9raW5nIHRoZSBvblN0YXJ0IGNhbGxiYWNrIGZvciB0aGlzIGNoaWxkLlxuICAgIGlmICh0aGlzLnByb3BzLm9uU3RhcnQpIHRoaXMucHJvcHMub25TdGFydChjaGlsZCwgZG9tTm9kZSk7XG5cbiAgICAvLyBOZXh0LCBhbmltYXRlIHRoZSBpdGVtIGZyb20gaXQncyBhcnRpZmljaWFsbHktb2Zmc2V0IHBvc2l0aW9uIHRvIGl0c1xuICAgIC8vIG5ldywgbmF0dXJhbCBwb3NpdGlvbi5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTk9URSwgUkU6IHRoZSBkb3VibGUtcmVxdWVzdEFuaW1hdGlvbkZyYW1lOlxuICAgICAgICAvLyBTYWRseSwgdGhpcyBpcyB0aGUgbW9zdCBicm93c2VyLWNvbXBhdGlibGUgd2F5IHRvIGRvIHRoaXMgSSd2ZSBmb3VuZC5cbiAgICAgICAgLy8gRXNzZW50aWFsbHkgd2UgbmVlZCB0byBzZXQgdGhlIGluaXRpYWwgc3R5bGVzIG91dHNpZGUgb2YgYW55IHJlcXVlc3RcbiAgICAgICAgLy8gY2FsbGJhY2tzIHRvIGF2b2lkIGJhdGNoaW5nIHRoZW0uIFRoZW4sIGEgZnJhbWUgbmVlZHMgdG8gcGFzcyB3aXRoXG4gICAgICAgIC8vIHRoZSBzdHlsZXMgYWJvdmUgcmVuZGVyZWQuIFRoZW4sIG9uIHRoZSBzZWNvbmQgZnJhbWUsIHdlIGNhbiBhcHBseVxuICAgICAgICAvLyBvdXIgZmluYWwgc3R5bGVzIHRvIHBlcmZvcm0gdGhlIGFuaW1hdGlvbi5cblxuICAgICAgICAvLyBPdXIgZmlyc3Qgb3JkZXIgb2YgYnVzaW5lc3MgaXMgdG8gXCJ1bmRvXCIgdGhlIHN0eWxlcyBhcHBsaWVkIGluIHRoZVxuICAgICAgICAvLyBwcmV2aW91cyBmcmFtZXMsIHdoaWxlIGFsc28gYWRkaW5nIGEgYHRyYW5zaXRpb25gIHByb3BlcnR5LlxuICAgICAgICAvLyBUaGlzIHdheSwgdGhlIGl0ZW0gd2lsbCBzbW9vdGhseSB0cmFuc2l0aW9uIGZyb20gaXRzIG9sZCBwb3NpdGlvblxuICAgICAgICAvLyB0byBpdHMgbmV3IHBvc2l0aW9uLlxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmbG93dHlwZS9yZXF1aXJlLXZhcmlhYmxlLXR5cGVcbiAgICAgICAgdmFyIHN0eWxlcyA9IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjcmVhdGVUcmFuc2l0aW9uU3RyaW5nKGluZGV4LCBfdGhpczQucHJvcHMpLFxuICAgICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgICAgb3BhY2l0eTogJydcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2hpbGQuYXBwZWFyaW5nICYmIF90aGlzNC5wcm9wcy5hcHBlYXJBbmltYXRpb24pIHtcbiAgICAgICAgICBzdHlsZXMgPSBfZXh0ZW5kcyh7fSwgc3R5bGVzLCBfdGhpczQucHJvcHMuYXBwZWFyQW5pbWF0aW9uLnRvKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5lbnRlcmluZyAmJiBfdGhpczQucHJvcHMuZW50ZXJBbmltYXRpb24pIHtcbiAgICAgICAgICBzdHlsZXMgPSBfZXh0ZW5kcyh7fSwgc3R5bGVzLCBfdGhpczQucHJvcHMuZW50ZXJBbmltYXRpb24udG8pO1xuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmxlYXZpbmcgJiYgX3RoaXM0LnByb3BzLmxlYXZlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgc3R5bGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcywgX3RoaXM0LnByb3BzLmxlYXZlQW5pbWF0aW9uLnRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIEZMSVAgdGVybWlub2xvZ3ksIHRoaXMgaXMgdGhlICdQbGF5JyBzdGFnZS5cbiAgICAgICAgYXBwbHlTdHlsZXNUb0RPTU5vZGUoeyBkb21Ob2RlOiBkb21Ob2RlLCBzdHlsZXM6IHN0eWxlcyB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5iaW5kVHJhbnNpdGlvbkVuZEhhbmRsZXIoY2hpbGQpO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5iaW5kVHJhbnNpdGlvbkVuZEhhbmRsZXIgPSBmdW5jdGlvbiBiaW5kVHJhbnNpdGlvbkVuZEhhbmRsZXIoY2hpbGQpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBfZ2V0Q2hpbGREYXRhMyA9IHRoaXMuZ2V0Q2hpbGREYXRhKGdldEtleShjaGlsZCkpLFxuICAgICAgICBkb21Ob2RlID0gX2dldENoaWxkRGF0YTMuZG9tTm9kZTtcblxuICAgIGlmICghZG9tTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZSBvbkZpbmlzaCBjYWxsYmFjayBuZWVkcyB0byBiZSBib3VuZCB0byB0aGUgdHJhbnNpdGlvbkVuZCBldmVudC5cbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gdW5iaW5kIGl0IHdoZW4gdGhlIHRyYW5zaXRpb24gY29tcGxldGVzLCBzbyB0aGlzIHVnbHlcbiAgICAvLyBpbmxpbmUgZnVuY3Rpb24gaXMgcmVxdWlyZWQgKHdlIG5lZWQgaXQgaGVyZSBzbyBpdCBjbG9zZXMgb3ZlclxuICAgIC8vIGRlcGVuZGVudCB2YXJpYWJsZXMgYGNoaWxkYCBhbmQgYGRvbU5vZGVgKVxuICAgIHZhciB0cmFuc2l0aW9uRW5kSGFuZGxlciA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRIYW5kbGVyKGV2KSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBoYW5kbGVyIGlzIGZpcmVkIG5vdCBvbiBvdXIgcHJpbWFyeSB0cmFuc2l0aW9uLFxuICAgICAgLy8gYnV0IG9uIGEgbmVzdGVkIHRyYW5zaXRpb24gKGVnLiBhIGhvdmVyIGVmZmVjdCkuIElnbm9yZSB0aGVzZSBjYXNlcy5cbiAgICAgIGlmIChldi50YXJnZXQgIT09IGRvbU5vZGUpIHJldHVybjtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSAndHJhbnNpdGlvbicgaW5saW5lIHN0eWxlIHdlIGFkZGVkLiBUaGlzIGlzIGNsZWFudXAuXG4gICAgICBkb21Ob2RlLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcblxuICAgICAgLy8gVHJpZ2dlciBhbnkgYXBwbGljYWJsZSBvbkZpbmlzaC9vbkZpbmlzaEFsbCBob29rc1xuICAgICAgX3RoaXM1LnRyaWdnZXJGaW5pc2hIb29rcyhjaGlsZCwgZG9tTm9kZSk7XG5cbiAgICAgIGRvbU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCB0cmFuc2l0aW9uRW5kSGFuZGxlcik7XG5cbiAgICAgIGlmIChjaGlsZC5sZWF2aW5nKSB7XG4gICAgICAgIF90aGlzNS5yZW1vdmVDaGlsZERhdGEoZ2V0S2V5KGNoaWxkKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCB0cmFuc2l0aW9uRW5kSGFuZGxlcik7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLnRyaWdnZXJGaW5pc2hIb29rcyA9IGZ1bmN0aW9uIHRyaWdnZXJGaW5pc2hIb29rcyhjaGlsZCwgZG9tTm9kZSkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25GaW5pc2gpIHRoaXMucHJvcHMub25GaW5pc2goY2hpbGQsIGRvbU5vZGUpO1xuXG4gICAgLy8gUmVkdWNlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gd2UgbmVlZCB0byBhbmltYXRlIGJ5IDEsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gdGVsbCB3aGVuIGFsbCBjaGlsZHJlbiBoYXZlIGZpbmlzaGVkLlxuICAgIHRoaXMucmVtYWluaW5nQW5pbWF0aW9ucyAtPSAxO1xuXG4gICAgaWYgKHRoaXMucmVtYWluaW5nQW5pbWF0aW9ucyA9PT0gMCkge1xuICAgICAgLy8gUmVtb3ZlIGFueSBpdGVtcyBmcm9tIHRoZSBET00gdGhhdCBoYXZlIGxlZnQsIGFuZCByZXNldCBgZW50ZXJpbmdgLlxuICAgICAgdmFyIG5leHRDaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgbGVhdmluZyA9IF9yZWYyLmxlYXZpbmc7XG4gICAgICAgIHJldHVybiAhbGVhdmluZztcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGl0ZW0sIHtcbiAgICAgICAgICAvLyBmaXggZm9yIEZsb3dcbiAgICAgICAgICBlbGVtZW50OiBpdGVtLmVsZW1lbnQsXG4gICAgICAgICAgYXBwZWFyaW5nOiBmYWxzZSxcbiAgICAgICAgICBlbnRlcmluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoaWxkcmVuOiBuZXh0Q2hpbGRyZW4gfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIF90aGlzNi5wcm9wcy5vbkZpbmlzaEFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIF90aGlzNi5jYWxsQ2hpbGRyZW5Ib29rKF90aGlzNi5wcm9wcy5vbkZpbmlzaEFsbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBvdXIgdmFyaWFibGVzIGZvciB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgICAgX3RoaXM2LmNoaWxkcmVuVG9BbmltYXRlID0gW107XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgdGhlIHBsYWNlaG9sZGVyIHdhcyBob2xkaW5nIHRoZSBjb250YWluZXIgb3BlbiB3aGlsZSBlbGVtZW50cyB3ZXJlXG4gICAgICAvLyBsZWF2aW5nLCB3ZSB3ZSBjYW4gbm93IHNldCBpdHMgaGVpZ2h0IHRvIHplcm8uXG4gICAgICBpZiAodGhpcy5oZWlnaHRQbGFjZWhvbGRlckRhdGEuZG9tTm9kZSkge1xuICAgICAgICB0aGlzLmhlaWdodFBsYWNlaG9sZGVyRGF0YS5kb21Ob2RlLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNhbGxDaGlsZHJlbkhvb2sgPSBmdW5jdGlvbiBjYWxsQ2hpbGRyZW5Ib29rKGhvb2spIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuICAgIHZhciBkb21Ob2RlcyA9IFtdO1xuXG4gICAgdGhpcy5jaGlsZHJlblRvQW5pbWF0ZS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZEtleSkge1xuICAgICAgLy8gSWYgdGhpcyB3YXMgYW4gZXhpdCBhbmltYXRpb24sIHRoZSBjaGlsZCBtYXkgbm8gbG9uZ2VyIGV4aXN0LlxuICAgICAgLy8gSWYgc28sIHNraXAgaXQuXG4gICAgICB2YXIgY2hpbGQgPSBfdGhpczcuZmluZENoaWxkQnlLZXkoY2hpbGRLZXkpO1xuXG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudHMucHVzaChjaGlsZCk7XG5cbiAgICAgIGlmIChfdGhpczcuaGFzQ2hpbGREYXRhKGNoaWxkS2V5KSkge1xuICAgICAgICBkb21Ob2Rlcy5wdXNoKF90aGlzNy5nZXRDaGlsZERhdGEoY2hpbGRLZXkpLmRvbU5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaG9vayhlbGVtZW50cywgZG9tTm9kZXMpO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS51cGRhdGVCb3VuZGluZ0JveENhY2hlcyA9IGZ1bmN0aW9uIHVwZGF0ZUJvdW5kaW5nQm94Q2FjaGVzKCkge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgT05MWSBwbGFjZSB0aGF0IHBhcmVudERhdGEgYW5kIGNoaWxkcmVuRGF0YSdzXG4gICAgLy8gYm91bmRpbmcgYm94ZXMgYXJlIHVwZGF0ZWQuIFRoZXkgd2lsbCBiZSBjYWxjdWxhdGVkIGF0IG90aGVyIHRpbWVzXG4gICAgLy8gdG8gYmUgY29tcGFyZWQgdG8gdGhpcyB2YWx1ZSwgYnV0IGl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIGNhY2hlIGlzXG4gICAgLy8gdXBkYXRlZCBvbmNlIHBlciB1cGRhdGUuXG4gICAgdmFyIHBhcmVudERvbU5vZGUgPSB0aGlzLnBhcmVudERhdGEuZG9tTm9kZTtcblxuICAgIGlmICghcGFyZW50RG9tTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGFyZW50RGF0YS5ib3VuZGluZ0JveCA9IHRoaXMucHJvcHMuZ2V0UG9zaXRpb24ocGFyZW50RG9tTm9kZSk7XG5cbiAgICAvLyBTcGxpdHRpbmcgRE9NIHJlYWRzIGFuZCB3cml0ZXMgdG8gYmUgcGVmb3JtZWQgaW4gYmF0Y2hlc1xuICAgIHZhciBjaGlsZHJlbkJvdW5kaW5nQm94ZXMgPSBbXTtcblxuICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBjaGlsZEtleSA9IGdldEtleShjaGlsZCk7XG5cbiAgICAgIC8vIEl0IGlzIHBvc3NpYmxlIHRoYXQgYSBjaGlsZCBkb2VzIG5vdCBoYXZlIGEgYGtleWAgcHJvcGVydHk7XG4gICAgICAvLyBJZ25vcmUgdGhlc2UgY2hpbGRyZW4sIHRoZXkgZG9uJ3QgbmVlZCB0byBiZSBtb3ZlZC5cbiAgICAgIGlmICghY2hpbGRLZXkpIHtcbiAgICAgICAgY2hpbGRyZW5Cb3VuZGluZ0JveGVzLnB1c2gobnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSW4gdmVyeSByYXJlIGNpcmN1bXN0YW5jZXMsIGZvciByZWFzb25zIHVua25vd24sIHRoZSByZWYgaXMgbmV2ZXJcbiAgICAgIC8vIHBvcHVsYXRlZCBmb3IgY2VydGFpbiBjaGlsZHJlbi4gSW4gdGhpcyBjYXNlLCBhdm9pZCBkb2luZyB0aGlzIHVwZGF0ZS5cbiAgICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pvc2h3Y29tZWF1L3JlYWN0LWZsaXAtbW92ZS9wdWxsLzkxXG4gICAgICBpZiAoIV90aGlzOC5oYXNDaGlsZERhdGEoY2hpbGRLZXkpKSB7XG4gICAgICAgIGNoaWxkcmVuQm91bmRpbmdCb3hlcy5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZERhdGEgPSBfdGhpczguZ2V0Q2hpbGREYXRhKGNoaWxkS2V5KTtcblxuICAgICAgLy8gSWYgdGhlIGNoaWxkIGVsZW1lbnQgcmV0dXJucyBudWxsLCB3ZSBuZWVkIHRvIGF2b2lkIHRyeWluZyB0b1xuICAgICAgLy8gYWNjb3VudCBmb3IgaXRcbiAgICAgIGlmICghY2hpbGREYXRhLmRvbU5vZGUgfHwgIWNoaWxkKSB7XG4gICAgICAgIGNoaWxkcmVuQm91bmRpbmdCb3hlcy5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNoaWxkcmVuQm91bmRpbmdCb3hlcy5wdXNoKGdldFJlbGF0aXZlQm91bmRpbmdCb3goe1xuICAgICAgICBjaGlsZERvbU5vZGU6IGNoaWxkRGF0YS5kb21Ob2RlLFxuICAgICAgICBwYXJlbnREb21Ob2RlOiBwYXJlbnREb21Ob2RlLFxuICAgICAgICBnZXRQb3NpdGlvbjogX3RoaXM4LnByb3BzLmdldFBvc2l0aW9uXG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgdmFyIGNoaWxkS2V5ID0gZ2V0S2V5KGNoaWxkKTtcblxuICAgICAgdmFyIGNoaWxkQm91bmRpbmdCb3ggPSBjaGlsZHJlbkJvdW5kaW5nQm94ZXNbaW5kZXhdO1xuXG4gICAgICBpZiAoIWNoaWxkS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXM4LnNldENoaWxkRGF0YShjaGlsZEtleSwge1xuICAgICAgICBib3VuZGluZ0JveDogY2hpbGRCb3VuZGluZ0JveFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNvbXB1dGVJbml0aWFsU3R5bGVzID0gZnVuY3Rpb24gY29tcHV0ZUluaXRpYWxTdHlsZXMoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQuYXBwZWFyaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5hcHBlYXJBbmltYXRpb24gPyB0aGlzLnByb3BzLmFwcGVhckFuaW1hdGlvbi5mcm9tIDoge307XG4gICAgfSBlbHNlIGlmIChjaGlsZC5lbnRlcmluZykge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmVudGVyQW5pbWF0aW9uKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoaXMgY2hpbGQgd2FzIGluIHRoZSBtaWRkbGUgb2YgbGVhdmluZywgaXQgc3RpbGwgaGFzIGl0c1xuICAgICAgLy8gYWJzb2x1dGUgcG9zaXRpb25pbmcgc3R5bGVzIGFwcGxpZWQuIFdlIG5lZWQgdG8gdW5kbyB0aG9zZS5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgbGVmdDogJycsXG4gICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgYm90dG9tOiAnJ1xuICAgICAgfSwgdGhpcy5wcm9wcy5lbnRlckFuaW1hdGlvbi5mcm9tKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLmxlYXZpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmxlYXZlQW5pbWF0aW9uID8gdGhpcy5wcm9wcy5sZWF2ZUFuaW1hdGlvbi5mcm9tIDoge307XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkRGF0YSA9IHRoaXMuZ2V0Q2hpbGREYXRhKGdldEtleShjaGlsZCkpO1xuICAgIHZhciBjaGlsZERvbU5vZGUgPSBjaGlsZERhdGEuZG9tTm9kZTtcbiAgICB2YXIgY2hpbGRCb3VuZGluZ0JveCA9IGNoaWxkRGF0YS5ib3VuZGluZ0JveDtcbiAgICB2YXIgcGFyZW50Qm91bmRpbmdCb3ggPSB0aGlzLnBhcmVudERhdGEuYm91bmRpbmdCb3g7XG5cbiAgICBpZiAoIWNoaWxkRG9tTm9kZSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHZhciBfZ2V0UG9zaXRpb25EZWx0YTIgPSBnZXRQb3NpdGlvbkRlbHRhKHtcbiAgICAgIGNoaWxkRG9tTm9kZTogY2hpbGREb21Ob2RlLFxuICAgICAgY2hpbGRCb3VuZGluZ0JveDogY2hpbGRCb3VuZGluZ0JveCxcbiAgICAgIHBhcmVudEJvdW5kaW5nQm94OiBwYXJlbnRCb3VuZGluZ0JveCxcbiAgICAgIGdldFBvc2l0aW9uOiB0aGlzLnByb3BzLmdldFBvc2l0aW9uXG4gICAgfSksXG4gICAgICAgIGRYID0gX2dldFBvc2l0aW9uRGVsdGEyWzBdLFxuICAgICAgICBkWSA9IF9nZXRQb3NpdGlvbkRlbHRhMlsxXTtcblxuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoJyArIGRYICsgJ3B4LCAnICsgZFkgKyAncHgpJ1xuICAgIH07XG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblxuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5pc0FuaW1hdGlvbkRpc2FibGVkID0gZnVuY3Rpb24gaXNBbmltYXRpb25EaXNhYmxlZChwcm9wcykge1xuICAgIC8vIElmIHRoZSBjb21wb25lbnQgaXMgZXhwbGljaXRseSBwYXNzZWQgYSBgZGlzYWJsZUFsbEFuaW1hdGlvbnNgIGZsYWcsXG4gICAgLy8gd2UgY2FuIHNraXAgdGhpcyB3aG9sZSBwcm9jZXNzLiBTaW1pbGFybHksIGlmIGFsbCBvZiB0aGUgbnVtYmVycyBoYXZlXG4gICAgLy8gYmVlbiBzZXQgdG8gMCwgdGhlcmUgaXMgbm8gcG9pbnQgaW4gdHJ5aW5nIHRvIGFuaW1hdGU7IGRvaW5nIHNvIHdvdWxkXG4gICAgLy8gb25seSBjYXVzZSBhIGZsaWNrZXIgKGFuZCB0aGUgaW50ZW50IGlzIHByb2JhYmx5IHRvIGRpc2FibGUgYW5pbWF0aW9ucylcbiAgICAvLyBXZSBjYW4gYWxzbyBza2lwIHRoaXMgcmlnYW1hcm9sZSBpZiB0aGVyZSdzIG5vIGJyb3dzZXIgc3VwcG9ydCBmb3IgaXQuXG4gICAgcmV0dXJuIG5vQnJvd3NlclN1cHBvcnQgfHwgcHJvcHMuZGlzYWJsZUFsbEFuaW1hdGlvbnMgfHwgcHJvcHMuZHVyYXRpb24gPT09IDAgJiYgcHJvcHMuZGVsYXkgPT09IDAgJiYgcHJvcHMuc3RhZ2dlckR1cmF0aW9uQnkgPT09IDAgJiYgcHJvcHMuc3RhZ2dlckRlbGF5QnkgPT09IDA7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmZpbmRDaGlsZEJ5S2V5ID0gZnVuY3Rpb24gZmluZENoaWxkQnlLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGZpbmQoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gZ2V0S2V5KGNoaWxkKSA9PT0ga2V5O1xuICAgIH0sIHRoaXMuc3RhdGUuY2hpbGRyZW4pO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5oYXNDaGlsZERhdGEgPSBmdW5jdGlvbiBoYXNDaGlsZERhdGEoa2V5KSB7XG4gICAgLy8gT2JqZWN0IGhhcyBzb21lIGJ1aWx0LWluIHByb3BlcnRpZXMgb24gaXRzIHByb3RvdHlwZSwgc3VjaCBhcyB0b1N0cmluZy4gIGhhc093blByb3BlcnR5IG1ha2VzXG4gICAgLy8gc3VyZSB0aGF0IGtleSBpcyBwcmVzZW50IG9uIGNoaWxkcmVuRGF0YSBpdHNlbGYsIG5vdCBvbiBpdHMgcHJvdG90eXBlLlxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jaGlsZHJlbkRhdGEsIGtleSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmdldENoaWxkRGF0YSA9IGZ1bmN0aW9uIGdldENoaWxkRGF0YShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNDaGlsZERhdGEoa2V5KSA/IHRoaXMuY2hpbGRyZW5EYXRhW2tleV0gOiB7fTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuc2V0Q2hpbGREYXRhID0gZnVuY3Rpb24gc2V0Q2hpbGREYXRhKGtleSwgZGF0YSkge1xuICAgIHRoaXMuY2hpbGRyZW5EYXRhW2tleV0gPSBfZXh0ZW5kcyh7fSwgdGhpcy5nZXRDaGlsZERhdGEoa2V5KSwgZGF0YSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLnJlbW92ZUNoaWxkRGF0YSA9IGZ1bmN0aW9uIHJlbW92ZUNoaWxkRGF0YShrZXkpIHtcbiAgICBkZWxldGUgdGhpcy5jaGlsZHJlbkRhdGFba2V5XTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgIGNoaWxkcmVuOiBwcmV2U3RhdGUuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZC5lbGVtZW50LmtleSAhPT0ga2V5O1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNyZWF0ZUhlaWdodFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gY3JlYXRlSGVpZ2h0UGxhY2Vob2xkZXIoKSB7XG4gICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICB2YXIgdHlwZU5hbWUgPSB0aGlzLnByb3BzLnR5cGVOYW1lO1xuXG4gICAgLy8gSWYgcmVxdWVzdGVkLCBjcmVhdGUgYW4gaW52aXNpYmxlIGVsZW1lbnQgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICAvLyBJdHMgaGVpZ2h0IHdpbGwgYmUgbW9kaWZpZWQgdG8gcHJldmVudCB0aGUgY29udGFpbmVyIGZyb20gY29sbGFwc2luZ1xuICAgIC8vIHByZW1hdHVyZWx5LlxuXG4gICAgdmFyIGlzQ29udGFpbmVyQUxpc3QgPSB0eXBlTmFtZSA9PT0gJ3VsJyB8fCB0eXBlTmFtZSA9PT0gJ29sJztcbiAgICB2YXIgcGxhY2Vob2xkZXJUeXBlID0gaXNDb250YWluZXJBTGlzdCA/ICdsaScgOiAnZGl2JztcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHBsYWNlaG9sZGVyVHlwZSwge1xuICAgICAga2V5OiAnaGVpZ2h0LXBsYWNlaG9sZGVyJyxcbiAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGRvbU5vZGUpIHtcbiAgICAgICAgX3RoaXM5LmhlaWdodFBsYWNlaG9sZGVyRGF0YS5kb21Ob2RlID0gZG9tTm9kZTtcbiAgICAgIH0sXG4gICAgICBzdHlsZTogeyB2aXNpYmlsaXR5OiAnaGlkZGVuJywgaGVpZ2h0OiAwIH1cbiAgICB9KTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuY2hpbGRyZW5XaXRoUmVmcyA9IGZ1bmN0aW9uIGNoaWxkcmVuV2l0aFJlZnMoKSB7XG4gICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgLy8gV2UgbmVlZCB0byBjbG9uZSB0aGUgcHJvdmlkZWQgY2hpbGRyZW4sIGNhcHR1cmluZyBhIHJlZmVyZW5jZSB0byB0aGVcbiAgICAvLyB1bmRlcmx5aW5nIERPTSBub2RlLiBGbGlwIE1vdmUgbmVlZHMgdG8gdXNlIHRoZSBSZWFjdCBlc2NhcGUgaGF0Y2hlcyB0b1xuICAgIC8vIGJlIGFibGUgdG8gZG8gaXRzIGNhbGN1bGF0aW9ucy5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLmVsZW1lbnQsIHtcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWxlbWVudCkge1xuICAgICAgICAgIC8vIFN0YXRlbGVzcyBGdW5jdGlvbmFsIENvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRmxpcE1vdmUsXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGV5IGRvbid0IGhhdmUgaW5zdGFuY2VzLlxuICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBkb21Ob2RlID0gZ2V0TmF0aXZlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICBfdGhpczEwLnNldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpLCB7IGRvbU5vZGU6IGRvbU5vZGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICB0eXBlTmFtZSA9IF9wcm9wczIudHlwZU5hbWUsXG4gICAgICAgIGRlbGVnYXRlZCA9IF9wcm9wczIuZGVsZWdhdGVkLFxuICAgICAgICBsZWF2ZUFuaW1hdGlvbiA9IF9wcm9wczIubGVhdmVBbmltYXRpb24sXG4gICAgICAgIG1haW50YWluQ29udGFpbmVySGVpZ2h0ID0gX3Byb3BzMi5tYWludGFpbkNvbnRhaW5lckhlaWdodDtcblxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbldpdGhSZWZzKCk7XG4gICAgaWYgKGxlYXZlQW5pbWF0aW9uICYmIG1haW50YWluQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuY3JlYXRlSGVpZ2h0UGxhY2Vob2xkZXIoKSk7XG4gICAgfVxuXG4gICAgaWYgKCF0eXBlTmFtZSkgcmV0dXJuIGNoaWxkcmVuO1xuXG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIGRlbGVnYXRlZCwge1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICBfdGhpczExLnBhcmVudERhdGEuZG9tTm9kZSA9IG5vZGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh0eXBlTmFtZSwgcHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBGbGlwTW92ZTtcbn0oQ29tcG9uZW50KTtcblxudmFyIGVuaGFuY2VkRmxpcE1vdmUgPSAvKiAjX19QVVJFX18gKi9wcm9wQ29udmVydGVyKEZsaXBNb3ZlJDEpO1xuXG4vKipcbiAqIFJlYWN0IEZsaXAgTW92ZVxuICogKGMpIDIwMTYtcHJlc2VudCBKb3NodWEgQ29tZWF1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZWRGbGlwTW92ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsaXAtbW92ZS9kaXN0L3JlYWN0LWZsaXAtbW92ZS5lcy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25DZWxsIGZyb20gJy4vcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24tY2VsbCc7XG5pbXBvcnQgZXZlbnREZWxlZ2F0ZXIgZnJvbSAnLi9yb3ctZXZlbnQtZGVsZWdhdGVyJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuY2xhc3MgUm93IGV4dGVuZHMgZXZlbnREZWxlZ2F0ZXIoQ29tcG9uZW50KSB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByb3csXG4gICAgICBjb2x1bW5zLFxuICAgICAga2V5RmllbGQsXG4gICAgICByb3dJbmRleCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgYXR0cnMsXG4gICAgICBjZWxsRWRpdCxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgc2VsZWN0Um93LFxuICAgICAgc2VsZWN0YWJsZSxcbiAgICAgIGVkaXRhYmxlOiBlZGl0YWJsZVJvd1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgbW9kZSxcbiAgICAgIG9uU3RhcnQsXG4gICAgICBFZGl0aW5nQ2VsbCxcbiAgICAgIHJpZHg6IGVkaXRpbmdSb3dJZHgsXG4gICAgICBjaWR4OiBlZGl0aW5nQ29sSWR4LFxuICAgICAgQ0xJQ0tfVE9fQ0VMTF9FRElULFxuICAgICAgREJDTElDS19UT19DRUxMX0VESVQsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IGNlbGxFZGl0O1xuXG4gICAgY29uc3Qga2V5ID0gXy5nZXQocm93LCBrZXlGaWVsZCk7XG4gICAgY29uc3QgeyBoaWRlU2VsZWN0Q29sdW1uIH0gPSBzZWxlY3RSb3c7XG4gICAgY29uc3QgdHJBdHRycyA9IHRoaXMuZGVsZWdhdGUoYXR0cnMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBzdHlsZT17IHN0eWxlIH0gY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0geyAuLi50ckF0dHJzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICAoc2VsZWN0Um93Lm1vZGUgIT09IENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRUQgJiYgIWhpZGVTZWxlY3RDb2x1bW4pXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPFNlbGVjdGlvbkNlbGxcbiAgICAgICAgICAgICAgICB7IC4uLnNlbGVjdFJvdyB9XG4gICAgICAgICAgICAgICAgcm93S2V5PXsga2V5IH1cbiAgICAgICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ICFzZWxlY3RhYmxlIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb2x1bW4uaGlkZGVuKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgZGF0YUZpZWxkIH0gPSBjb2x1bW47XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBfLmdldChyb3csIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICAgIGxldCBlZGl0YWJsZSA9IF8uaXNEZWZpbmVkKGNvbHVtbi5lZGl0YWJsZSkgPyBjb2x1bW4uZWRpdGFibGUgOiB0cnVlO1xuICAgICAgICAgICAgICBpZiAoZGF0YUZpZWxkID09PSBrZXlGaWVsZCB8fCAhZWRpdGFibGVSb3cpIGVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRhYmxlKSkge1xuICAgICAgICAgICAgICAgIGVkaXRhYmxlID0gY29sdW1uLmVkaXRhYmxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IGVkaXRpbmdSb3dJZHggJiYgaW5kZXggPT09IGVkaXRpbmdDb2xJZHgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWRpdENlbGxzdHlsZSA9IGNvbHVtbi5lZGl0Q2VsbFN0eWxlIHx8IHt9O1xuICAgICAgICAgICAgICAgIGxldCBlZGl0Q2VsbGNsYXNzZXMgPSBjb2x1bW4uZWRpdENlbGxDbGFzc2VzO1xuICAgICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRDZWxsU3R5bGUpKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0Q2VsbHN0eWxlID0gY29sdW1uLmVkaXRDZWxsU3R5bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi5lZGl0Q2VsbENsYXNzZXMpKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0Q2VsbGNsYXNzZXMgPSBjb2x1bW4uZWRpdENlbGxDbGFzc2VzKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxFZGl0aW5nQ2VsbFxuICAgICAgICAgICAgICAgICAgICBrZXk9eyBgJHtjb250ZW50fS0ke2luZGV4fWAgfVxuICAgICAgICAgICAgICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICAgICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg9eyBpbmRleCB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGVkaXRDZWxsY2xhc3NlcyB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgZWRpdENlbGxzdHlsZSB9XG4gICAgICAgICAgICAgICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q2VsbFxuICAgICAgICAgICAgICAgICAga2V5PXsgYCR7Y29udGVudH0tJHtpbmRleH1gIH1cbiAgICAgICAgICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4PXsgaW5kZXggfVxuICAgICAgICAgICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICAgICAgICAgIG9uU3RhcnQ9eyBvblN0YXJ0IH1cbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXsgZWRpdGFibGUgfVxuICAgICAgICAgICAgICAgICAgY2xpY2tUb0VkaXQ9eyBtb2RlID09PSBDTElDS19UT19DRUxMX0VESVQgfVxuICAgICAgICAgICAgICAgICAgZGJjbGlja1RvRWRpdD17IG1vZGUgPT09IERCQ0xJQ0tfVE9fQ0VMTF9FRElUIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5Sb3cucHJvcFR5cGVzID0ge1xuICByb3c6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF0dHJzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5Sb3cuZGVmYXVsdFByb3BzID0ge1xuICBlZGl0YWJsZTogdHJ1ZSxcbiAgc3R5bGU6IHt9LFxuICBjbGFzc05hbWU6IG51bGwsXG4gIGF0dHJzOiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlRWRpdGluZ0NlbGwgPSB0aGlzLmhhbmRsZUVkaXRpbmdDZWxsLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVFZGl0aW5nQ2VsbChlKSB7XG4gICAgY29uc3QgeyBjb2x1bW4sIG9uU3RhcnQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCwgY2xpY2tUb0VkaXQsIGRiY2xpY2tUb0VkaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IGNvbHVtbjtcbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICBpZiAoY2xpY2tUb0VkaXQpIHtcbiAgICAgICAgY29uc3QgY3VzdG9tQ2xpY2sgPSBldmVudHMub25DbGljaztcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21DbGljaykpIGN1c3RvbUNsaWNrKGUpO1xuICAgICAgfSBlbHNlIGlmIChkYmNsaWNrVG9FZGl0KSB7XG4gICAgICAgIGNvbnN0IGN1c3RvbURiQ2xpY2sgPSBldmVudHMub25Eb3VibGVDbGljaztcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21EYkNsaWNrKSkgY3VzdG9tRGJDbGljayhlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9uU3RhcnQpIHtcbiAgICAgIG9uU3RhcnQocm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93LFxuICAgICAgcm93SW5kZXgsXG4gICAgICBjb2x1bW4sXG4gICAgICBjb2x1bW5JbmRleCxcbiAgICAgIGVkaXRhYmxlLFxuICAgICAgY2xpY2tUb0VkaXQsXG4gICAgICBkYmNsaWNrVG9FZGl0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YUZpZWxkLFxuICAgICAgZm9ybWF0dGVyLFxuICAgICAgZm9ybWF0RXh0cmFEYXRhLFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc2VzLFxuICAgICAgdGl0bGUsXG4gICAgICBldmVudHMsXG4gICAgICBhbGlnbixcbiAgICAgIGF0dHJzXG4gICAgfSA9IGNvbHVtbjtcbiAgICBsZXQgY2VsbFRpdGxlO1xuICAgIGxldCBjZWxsU3R5bGUgPSB7fTtcbiAgICBsZXQgY29udGVudCA9IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcblxuICAgIGNvbnN0IGNlbGxBdHRycyA9IHtcbiAgICAgIC4uLl8uaXNGdW5jdGlvbihhdHRycykgPyBhdHRycyhjb250ZW50LCByb3csIHJvd0luZGV4LCBjb2x1bW5JbmRleCkgOiBhdHRycyxcbiAgICAgIC4uLmV2ZW50c1xuICAgIH07XG5cbiAgICBjb25zdCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihjbGFzc2VzKVxuICAgICAgPyBjbGFzc2VzKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGNvbHVtbkluZGV4KVxuICAgICAgOiBjbGFzc2VzO1xuXG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oc3R5bGUpID8gc3R5bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgY29sdW1uSW5kZXgpIDogc3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBjZWxsVGl0bGUgPSBfLmlzRnVuY3Rpb24odGl0bGUpID8gdGl0bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgY29sdW1uSW5kZXgpIDogY29udGVudDtcbiAgICAgIGNlbGxBdHRycy50aXRsZSA9IGNlbGxUaXRsZTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBjb250ZW50ID0gY29sdW1uLmZvcm1hdHRlcihjb250ZW50LCByb3csIHJvd0luZGV4LCBmb3JtYXRFeHRyYURhdGEpO1xuICAgIH1cblxuICAgIGlmIChhbGlnbikge1xuICAgICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9XG4gICAgICAgIF8uaXNGdW5jdGlvbihhbGlnbikgPyBhbGlnbihjb250ZW50LCByb3csIHJvd0luZGV4LCBjb2x1bW5JbmRleCkgOiBhbGlnbjtcbiAgICB9XG5cbiAgICBpZiAoY2VsbENsYXNzZXMpIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjZWxsQ2xhc3NlcztcblxuICAgIGlmICghXy5pc0VtcHR5T2JqZWN0KGNlbGxTdHlsZSkpIGNlbGxBdHRycy5zdHlsZSA9IGNlbGxTdHlsZTtcbiAgICBpZiAoY2xpY2tUb0VkaXQgJiYgZWRpdGFibGUpIHtcbiAgICAgIGNlbGxBdHRycy5vbkNsaWNrID0gdGhpcy5oYW5kbGVFZGl0aW5nQ2VsbDtcbiAgICB9IGVsc2UgaWYgKGRiY2xpY2tUb0VkaXQgJiYgZWRpdGFibGUpIHtcbiAgICAgIGNlbGxBdHRycy5vbkRvdWJsZUNsaWNrID0gdGhpcy5oYW5kbGVFZGl0aW5nQ2VsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZCB7IC4uLmNlbGxBdHRycyB9PnsgY29udGVudCB9PC90ZD5cbiAgICApO1xuICB9XG59XG5cbkNlbGwucHJvcFR5cGVzID0ge1xuICByb3c6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY29sdW1uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbHVtbkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jZWxsLmpzIiwiLyogZXNsaW50XG4gIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMFxuICBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9uczogMFxuKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJvd0tleTogUHJvcFR5cGVzLmFueSxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25Sb3dTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjbGlja1RvU2VsZWN0OiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gbmV4dFByb3BzLnNlbGVjdGVkICE9PSBzZWxlY3RlZDtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBtb2RlOiBpbnB1dFR5cGUsXG4gICAgICByb3dLZXksXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIG9uUm93U2VsZWN0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dJbmRleCxcbiAgICAgIGNsaWNrVG9TZWxlY3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgIGlmIChjbGlja1RvU2VsZWN0KSByZXR1cm47XG5cbiAgICBjb25zdCBjaGVja2VkID0gaW5wdXRUeXBlID09PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRVxuICAgICAgPyB0cnVlXG4gICAgICA6ICFzZWxlY3RlZDtcblxuICAgIG9uUm93U2VsZWN0KHJvd0tleSwgY2hlY2tlZCwgcm93SW5kZXgsIGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vZGU6IGlucHV0VHlwZSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8dGQgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT17IGlucHV0VHlwZSB9XG4gICAgICAgICAgY2hlY2tlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICBkaXNhYmxlZD17IGRpc2FibGVkIH1cbiAgICAgICAgLz5cbiAgICAgIDwvdGQ+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24tY2VsbC5qcyIsImltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBldmVudHMgPSBbXG4gICdvbkNsaWNrJyxcbiAgJ29uRG91YmxlQ2xpY2snLFxuICAnb25Nb3VzZUVudGVyJyxcbiAgJ29uTW91c2VMZWF2ZSdcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgUm93RXZlbnREZWxlZ2F0ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgICB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIgPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIgPSB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlcihjYikge1xuICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcm93LCByb3dJbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY2IoZSwgcm93LCByb3dJbmRleCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyKGNiKSB7XG4gICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICBrZXlGaWVsZCxcbiAgICAgICAgICBzZWxlY3RhYmxlLFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIHNlbGVjdFJvdzoge1xuICAgICAgICAgICAgb25Sb3dTZWxlY3QsXG4gICAgICAgICAgICBjbGlja1RvRWRpdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2VsbEVkaXQ6IHtcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICBEQkNMSUNLX1RPX0NFTExfRURJVCxcbiAgICAgICAgICAgIERFTEFZX0ZPUl9EQkNMSUNLXG4gICAgICAgICAgfVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBjbGlja0ZuID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IoZSwgcm93LCByb3dJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBfLmdldChyb3csIGtleUZpZWxkKTtcbiAgICAgICAgICAgIG9uUm93U2VsZWN0KGtleSwgIXNlbGVjdGVkLCByb3dJbmRleCwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtb2RlID09PSBEQkNMSUNLX1RPX0NFTExfRURJVCAmJiBjbGlja1RvRWRpdCkge1xuICAgICAgICAgIHRoaXMuY2xpY2tOdW0gKz0gMTtcbiAgICAgICAgICBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrTnVtID09PSAxKSB7XG4gICAgICAgICAgICAgIGNsaWNrRm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xuICAgICAgICAgIH0sIERFTEFZX0ZPUl9EQkNMSUNLKSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsaWNrRm4oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWxlZ2F0ZShhdHRycyA9IHt9KSB7XG4gICAgICBjb25zdCBuZXdBdHRycyA9IHt9O1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93ICYmIHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QpIHtcbiAgICAgICAgbmV3QXR0cnMub25DbGljayA9IHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIoYXR0cnMub25DbGljayk7XG4gICAgICB9XG4gICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoIW5ld0F0dHJzW2F0dHJdKSB7XG4gICAgICAgICAgaWYgKGV2ZW50cy5pbmNsdWRlcyhhdHRyKSkge1xuICAgICAgICAgICAgbmV3QXR0cnNbYXR0cl0gPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoYXR0cnNbYXR0cl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdBdHRyc1thdHRyXSA9IGF0dHJzW2F0dHJdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3QXR0cnM7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV2ZW50LWRlbGVnYXRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBSb3dTZWN0aW9uID0gKHsgY29udGVudCwgY29sU3BhbiB9KSA9PiAoXG4gIDx0cj5cbiAgICA8dGRcbiAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgY29sU3Bhbj17IGNvbFNwYW4gfVxuICAgICAgY2xhc3NOYW1lPVwicmVhY3QtYnMtdGFibGUtbm8tZGF0YVwiXG4gICAgPlxuICAgICAgeyBjb250ZW50IH1cbiAgICA8L3RkPlxuICA8L3RyPlxuKTtcblxuUm93U2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gIGNvbFNwYW46IFByb3BUeXBlcy5udW1iZXJcbn07XG5cblJvd1NlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50OiBudWxsLFxuICBjb2xTcGFuOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3dTZWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlY3Rpb24uanMiLCJpbXBvcnQgQ29sdW1uUmVzb2x2ZXIgZnJvbSAnLi9jb2x1bW4tcmVzb2x2ZXInO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBUYWJsZVJlc29sdmVyIGV4dGVuZHMgQ29sdW1uUmVzb2x2ZXIoRXh0ZW5kQmFzZSkge1xuICAgIHZhbGlkYXRlUHJvcHMoKSB7XG4gICAgICBjb25zdCB7IGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFrZXlGaWVsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBzcGVjaWZ5IGEgZmllbGQgYXMga2V5IHZpYSBrZXlGaWVsZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmlzaWJsZUNvbHVtblNpemUoZmFsc2UpIDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB2aXNpYmxlIGNvbHVtbnMgZGV0ZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJvcHMgcmVzb2x2ZXIgZm9yIGNlbGwgc2VsZWN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBhZGR0aW9uYWwgb3B0aW9ucyBsaWtlIGNhbGxiYWNrIHdoaWNoIGFyZSBhYm91dCB0byBtZXJnZSBpbnRvIHByb3BzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZXN1bHQgLSBwcm9wcyBmb3IgY2VsbCBzZWxlY3Rpb25zXG4gICAgICogQHJldHVybnMge1N0cmluZ30gcmVzdWx0Lm1vZGUgLSBpbnB1dCB0eXBlIG9mIHJvdyBzZWxlY3Rpb24gb3IgZGlzYWJsZWQuXG4gICAgICovXG4gICAgcmVzb2x2ZVNlbGVjdFJvd1Byb3BzKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0Um93IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBST1dfU0VMRUNUX0RJU0FCTEVEIH0gPSBDb25zdDtcblxuICAgICAgaWYgKF8uaXNEZWZpbmVkKHNlbGVjdFJvdykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zZWxlY3RSb3csXG4gICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtb2RlOiBST1dfU0VMRUNUX0RJU0FCTEVEXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByb3BzIHJlc29sdmVyIGZvciBoZWFkZXIgY2VsbCBzZWxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGFkZHRpb25hbCBvcHRpb25zIGxpa2UgY2FsbGJhY2sgd2hpY2ggYXJlIGFib3V0IHRvIG1lcmdlIGludG8gcHJvcHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlc3VsdCAtIHByb3BzIGZvciBjZWxsIHNlbGVjdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSByZXN1bHQubW9kZSAtIGlucHV0IHR5cGUgb2Ygcm93IHNlbGVjdGlvbiBvciBkaXNhYmxlZC5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSByZXN1bHQuY2hlY2tlZFN0YXR1cyAtIGNoZWNrYm94IHN0YXR1cyBkZXBlbmRpbmcgb24gc2VsZWN0ZWQgcm93cyBjb3VudHNcbiAgICAgKi9cbiAgICByZXNvbHZlU2VsZWN0Um93UHJvcHNGb3JIZWFkZXIob3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCB7IHNlbGVjdFJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgYWxsUm93c1NlbGVjdGVkLCBzZWxlY3RlZCA9IFtdLCAuLi5yZXN0IH0gPSBvcHRpb25zO1xuICAgICAgY29uc3Qge1xuICAgICAgICBST1dfU0VMRUNUX0RJU0FCTEVELCBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRCxcbiAgICAgICAgQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUsIENIRUNLQk9YX1NUQVRVU19VTkNIRUNLRURcbiAgICAgIH0gPSBDb25zdDtcblxuICAgICAgaWYgKF8uaXNEZWZpbmVkKHNlbGVjdFJvdykpIHtcbiAgICAgICAgbGV0IGNoZWNrZWRTdGF0dXM7XG5cbiAgICAgICAgLy8gY2hlY2tib3ggc3RhdHVzIGRlcGVuZGluZyBvbiBzZWxlY3RlZCByb3dzIGNvdW50c1xuICAgICAgICBpZiAoYWxsUm93c1NlbGVjdGVkKSBjaGVja2VkU3RhdHVzID0gQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ7XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMCkgY2hlY2tlZFN0YXR1cyA9IENIRUNLQk9YX1NUQVRVU19VTkNIRUNLRUQ7XG4gICAgICAgIGVsc2UgY2hlY2tlZFN0YXR1cyA9IENIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2VsZWN0Um93LFxuICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgY2hlY2tlZFN0YXR1c1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtb2RlOiBST1dfU0VMRUNUX0RJU0FCTEVEXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBDb2x1bW5SZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIHZpc2libGVDb2x1bW5TaXplKGluY2x1ZGVTZWxlY3RDb2x1bW4gPSB0cnVlKSB7XG4gICAgICBjb25zdCBjb2x1bW5MZW4gPSB0aGlzLnByb3BzLmNvbHVtbnMuZmlsdGVyKGMgPT4gIWMuaGlkZGVuKS5sZW5ndGg7XG4gICAgICBpZiAoIWluY2x1ZGVTZWxlY3RDb2x1bW4pIHJldHVybiBjb2x1bW5MZW47XG4gICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cgJiYgIXRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbkxlbiArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29sdW1uTGVuO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2NvbHVtbi1yZXNvbHZlci5qcyIsIi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB3aXRoU29ydCBmcm9tICcuL3NvcnQvd3JhcHBlcic7XG5pbXBvcnQgd2l0aFNlbGVjdGlvbiBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vd3JhcHBlcic7XG5cbmltcG9ydCByZW1vdGVSZXNvbHZlciBmcm9tICcuL3Byb3BzLXJlc29sdmVyL3JlbW90ZS1yZXNvbHZlcic7XG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuY29uc3Qgd2l0aERhdGFTdG9yZSA9IEJhc2UgPT5cbiAgY2xhc3MgQm9vdHN0cmFwVGFibGVDb250YWluZXIgZXh0ZW5kcyByZW1vdGVSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdG9yZSA9IG5ldyBTdG9yZShwcm9wcy5rZXlGaWVsZCk7XG4gICAgICB0aGlzLnN0b3JlLmRhdGEgPSBwcm9wcy5kYXRhO1xuICAgICAgdGhpcy53cmFwQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnN0b3JlLnNldEFsbERhdGEobmV4dFByb3BzLmRhdGEpO1xuICAgIH1cblxuICAgIHdyYXBDb21wb25lbnRzKCkge1xuICAgICAgdGhpcy5CYXNlQ29tcG9uZW50ID0gQmFzZTtcbiAgICAgIGNvbnN0IHsgcGFnaW5hdGlvbiwgY29sdW1ucywgZmlsdGVyLCBzZWxlY3RSb3csIGNlbGxFZGl0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKHBhZ2luYXRpb24pIHtcbiAgICAgICAgY29uc3QgeyB3cmFwcGVyRmFjdG9yeSB9ID0gcGFnaW5hdGlvbjtcbiAgICAgICAgdGhpcy5CYXNlQ29tcG9uZW50ID0gd3JhcHBlckZhY3RvcnkodGhpcy5CYXNlQ29tcG9uZW50LCB7XG4gICAgICAgICAgcmVtb3RlUmVzb2x2ZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLnNvcnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5CYXNlQ29tcG9uZW50ID0gd2l0aFNvcnQodGhpcy5CYXNlQ29tcG9uZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICBjb25zdCB7IHdyYXBwZXJGYWN0b3J5IH0gPSBmaWx0ZXI7XG4gICAgICAgIHRoaXMuQmFzZUNvbXBvbmVudCA9IHdyYXBwZXJGYWN0b3J5KHRoaXMuQmFzZUNvbXBvbmVudCwge1xuICAgICAgICAgIF8sXG4gICAgICAgICAgcmVtb3RlUmVzb2x2ZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZWxsRWRpdCkge1xuICAgICAgICBjb25zdCB7IHdyYXBwZXJGYWN0b3J5IH0gPSBjZWxsRWRpdDtcbiAgICAgICAgdGhpcy5CYXNlQ29tcG9uZW50ID0gd3JhcHBlckZhY3RvcnkodGhpcy5CYXNlQ29tcG9uZW50LCB7XG4gICAgICAgICAgXyxcbiAgICAgICAgICByZW1vdGVSZXNvbHZlclxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdFJvdykge1xuICAgICAgICB0aGlzLkJhc2VDb21wb25lbnQgPSB3aXRoU2VsZWN0aW9uKHRoaXMuQmFzZUNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgYmFzZVByb3BzID0ge1xuICAgICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgICBzdG9yZTogdGhpcy5zdG9yZVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRoaXMuQmFzZUNvbXBvbmVudCB7IC4uLmJhc2VQcm9wcyB9IC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGFTdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRhaW5lci5qcyIsIi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogMCAqL1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgc29ydCwgbmV4dE9yZGVyIH0gZnJvbSAnLi9zb3J0JztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuL3Jvd3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGtleUZpZWxkKSB7XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSA9IFtdO1xuICAgIHRoaXMuX2tleUZpZWxkID0ga2V5RmllbGQ7XG4gICAgdGhpcy5fc29ydE9yZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NvcnRGaWVsZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IFtdO1xuICAgIHRoaXMuX2ZpbHRlcnMgPSB7fTtcbiAgICB0aGlzLl9wYWdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NpemVQZXJQYWdlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZWRpdChyb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSkge1xuICAgIGNvbnN0IHJvdyA9IGdldFJvd0J5Um93SWQodGhpcykocm93SWQpO1xuICAgIGlmIChyb3cpIF8uc2V0KHJvdywgZGF0YUZpZWxkLCBuZXdWYWx1ZSk7XG4gIH1cblxuICBzZXRTb3J0KHsgZGF0YUZpZWxkIH0sIG9yZGVyLCBkZWZhdWx0T3JkZXIpIHtcbiAgICB0aGlzLnNvcnRPcmRlciA9IG5leHRPcmRlcih0aGlzKShkYXRhRmllbGQsIG9yZGVyLCBkZWZhdWx0T3JkZXIpO1xuICAgIHRoaXMuc29ydEZpZWxkID0gZGF0YUZpZWxkO1xuICB9XG5cbiAgc29ydEJ5KHsgc29ydEZ1bmMgfSkge1xuICAgIHRoaXMuZGF0YSA9IHNvcnQodGhpcykoc29ydEZ1bmMpO1xuICB9XG5cbiAgZ2V0QWxsRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHNldEFsbERhdGEoZGF0YSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX2ZpbHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZERhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIHNldCBkYXRhKGRhdGEpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fZmlsdGVycykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fZmlsdGVyZWREYXRhID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9IChkYXRhID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSkgOiBbXSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGZpbHRlcmVkRGF0YSgpIHsgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkRGF0YTsgfVxuICBzZXQgZmlsdGVyZWREYXRhKGZpbHRlcmVkRGF0YSkgeyB0aGlzLl9maWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGE7IH1cblxuICBnZXQga2V5RmllbGQoKSB7IHJldHVybiB0aGlzLl9rZXlGaWVsZDsgfVxuICBzZXQga2V5RmllbGQoa2V5RmllbGQpIHsgdGhpcy5fa2V5RmllbGQgPSBrZXlGaWVsZDsgfVxuXG4gIGdldCBzb3J0T3JkZXIoKSB7IHJldHVybiB0aGlzLl9zb3J0T3JkZXI7IH1cbiAgc2V0IHNvcnRPcmRlcihzb3J0T3JkZXIpIHsgdGhpcy5fc29ydE9yZGVyID0gc29ydE9yZGVyOyB9XG5cbiAgZ2V0IHBhZ2UoKSB7IHJldHVybiB0aGlzLl9wYWdlOyB9XG4gIHNldCBwYWdlKHBhZ2UpIHsgdGhpcy5fcGFnZSA9IHBhZ2U7IH1cblxuICBnZXQgc2l6ZVBlclBhZ2UoKSB7IHJldHVybiB0aGlzLl9zaXplUGVyUGFnZTsgfVxuICBzZXQgc2l6ZVBlclBhZ2Uoc2l6ZVBlclBhZ2UpIHsgdGhpcy5fc2l6ZVBlclBhZ2UgPSBzaXplUGVyUGFnZTsgfVxuXG4gIGdldCBzb3J0RmllbGQoKSB7IHJldHVybiB0aGlzLl9zb3J0RmllbGQ7IH1cbiAgc2V0IHNvcnRGaWVsZChzb3J0RmllbGQpIHsgdGhpcy5fc29ydEZpZWxkID0gc29ydEZpZWxkOyB9XG5cbiAgZ2V0IHNlbGVjdGVkKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7IHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7IH1cblxuICBnZXQgZmlsdGVycygpIHsgcmV0dXJuIHRoaXMuX2ZpbHRlcnM7IH1cbiAgc2V0IGZpbHRlcnMoZmlsdGVycykgeyB0aGlzLl9maWx0ZXJzID0gZmlsdGVyczsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvaW5kZXguanMiLCIvKiBlc2xpbnQgbm8tbmVzdGVkLXRlcm5hcnk6IDAgKi9cbi8qIGVzbGludCBuby1sb25lbHktaWY6IDAgKi9cbi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogMCAqL1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZnVuY3Rpb24gY29tcGFyYXRvcihhLCBiKSB7XG4gIGxldCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgYiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSBiLmxvY2FsZUNvbXBhcmUoYSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gYSA+IGIgPyAtMSA6ICgoYSA8IGIpID8gMSA6IDApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gKHsgZGF0YSwgc29ydE9yZGVyLCBzb3J0RmllbGQgfSkgPT4gKHNvcnRGdW5jKSA9PiB7XG4gIGNvbnN0IF9kYXRhID0gWy4uLmRhdGFdO1xuICBfZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgdmFsdWVBID0gXy5nZXQoYSwgc29ydEZpZWxkKTtcbiAgICBsZXQgdmFsdWVCID0gXy5nZXQoYiwgc29ydEZpZWxkKTtcbiAgICB2YWx1ZUEgPSBfLmlzRGVmaW5lZCh2YWx1ZUEpID8gdmFsdWVBIDogJyc7XG4gICAgdmFsdWVCID0gXy5pc0RlZmluZWQodmFsdWVCKSA/IHZhbHVlQiA6ICcnO1xuXG4gICAgaWYgKHNvcnRGdW5jKSB7XG4gICAgICByZXN1bHQgPSBzb3J0RnVuYyh2YWx1ZUEsIHZhbHVlQiwgc29ydE9yZGVyLCBzb3J0RmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc29ydE9yZGVyID09PSBDb25zdC5TT1JUX0RFU0MpIHtcbiAgICAgICAgcmVzdWx0ID0gY29tcGFyYXRvcih2YWx1ZUEsIHZhbHVlQik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBjb21wYXJhdG9yKHZhbHVlQiwgdmFsdWVBKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG4gIHJldHVybiBfZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBuZXh0T3JkZXIgPSBzdG9yZSA9PiAoZmllbGQsIG9yZGVyLCBkZWZhdWx0T3JkZXIgPSBDb25zdC5TT1JUX0RFU0MpID0+IHtcbiAgaWYgKG9yZGVyKSByZXR1cm4gb3JkZXI7XG5cbiAgaWYgKGZpZWxkICE9PSBzdG9yZS5zb3J0RmllbGQpIHtcbiAgICByZXR1cm4gZGVmYXVsdE9yZGVyO1xuICB9XG4gIHJldHVybiBzdG9yZS5zb3J0T3JkZXIgPT09IENvbnN0LlNPUlRfREVTQyA/IENvbnN0LlNPUlRfQVNDIDogQ29uc3QuU09SVF9ERVNDO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NvcnQuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgcmVtb3RlUmVzb2x2ZXIgZnJvbSAnLi4vcHJvcHMtcmVzb2x2ZXIvcmVtb3RlLXJlc29sdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgQmFzZSA9PlxuICBjbGFzcyBTb3J0V3JhcHBlciBleHRlbmRzIHJlbW90ZVJlc29sdmVyKENvbXBvbmVudCkge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuaGFuZGxlU29ydCA9IHRoaXMuaGFuZGxlU29ydC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgY29sdW1ucywgZGVmYXVsdFNvcnRlZCwgZGVmYXVsdFNvcnREaXJlY3Rpb24sIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgLy8gZGVmYXVsdFNvcnRlZCBpcyBhbiBhcnJheSwgaXQncyByZWFkeSB0byB1c2UgYXMgbXVsdGkgLyBzaW5nbGUgc29ydFxuICAgICAgLy8gd2hlbiB3ZSBzdGFydCB0byBzdXBwb3J0IG11bHRpIHNvcnQsIHBsZWFzZSB1cGRhdGUgZm9sbG93aW5nIGNvZGUgdG8gdXNlIGFycmF5LmZvckVhY2hcbiAgICAgIGlmIChkZWZhdWx0U29ydGVkICYmIGRlZmF1bHRTb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBkYXRhRmllbGQgPSBkZWZhdWx0U29ydGVkWzBdLmRhdGFGaWVsZDtcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBkZWZhdWx0U29ydGVkWzBdLm9yZGVyO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLmRhdGFGaWVsZCA9PT0gZGF0YUZpZWxkKTtcbiAgICAgICAgaWYgKGNvbHVtbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3RvcmUuc2V0U29ydChjb2x1bW5bMF0sIG9yZGVyLCBkZWZhdWx0U29ydERpcmVjdGlvbik7XG5cbiAgICAgICAgICBpZiAoY29sdW1uWzBdLm9uU29ydCkge1xuICAgICAgICAgICAgY29sdW1uWzBdLm9uU29ydChzdG9yZS5zb3J0RmllbGQsIHN0b3JlLnNvcnRPcmRlcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuaXNSZW1vdGVTb3J0KCkgfHwgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTb3J0Q2hhbmdlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JlLnNvcnRCeShjb2x1bW5bMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBsZXQgc29ydGVkQ29sdW1uO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXh0UHJvcHMuY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAobmV4dFByb3BzLmNvbHVtbnNbaV0uZGF0YUZpZWxkID09PSBuZXh0UHJvcHMuc3RvcmUuc29ydEZpZWxkKSB7XG4gICAgICAgICAgc29ydGVkQ29sdW1uID0gbmV4dFByb3BzLmNvbHVtbnNbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzb3J0ZWRDb2x1bW4gJiYgc29ydGVkQ29sdW1uLnNvcnQpIHtcbiAgICAgICAgbmV4dFByb3BzLnN0b3JlLnNvcnRCeShzb3J0ZWRDb2x1bW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVNvcnQoY29sdW1uKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgc3RvcmUuc2V0U29ydChjb2x1bW4sIHVuZGVmaW5lZCwgdGhpcy5wcm9wcy5kZWZhdWx0U29ydERpcmVjdGlvbik7XG5cbiAgICAgIGlmIChjb2x1bW4ub25Tb3J0KSB7XG4gICAgICAgIGNvbHVtbi5vblNvcnQoc3RvcmUuc29ydEZpZWxkLCBzdG9yZS5zb3J0T3JkZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc1JlbW90ZVNvcnQoKSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU29ydENoYW5nZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmUuc29ydEJ5KGNvbHVtbik7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QmFzZVxuICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgb25Tb3J0PXsgdGhpcy5oYW5kbGVTb3J0IH1cbiAgICAgICAgICBkYXRhPXsgdGhpcy5wcm9wcy5zdG9yZS5kYXRhIH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC93cmFwcGVyLmpzIiwiLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCB7XG4gIGlzQW55U2VsZWN0ZWRSb3csXG4gIHNlbGVjdGFibGVLZXlzLFxuICB1blNlbGVjdGFibGVLZXlzLFxuICBnZXRTZWxlY3RlZFJvd3Ncbn0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0aW9uJztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuLi9zdG9yZS9yb3dzJztcblxuZXhwb3J0IGRlZmF1bHQgQmFzZSA9PlxuICBjbGFzcyBSb3dTZWxlY3Rpb25XcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuaGFuZGxlUm93U2VsZWN0ID0gdGhpcy5oYW5kbGVSb3dTZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlQWxsUm93c1NlbGVjdCA9IHRoaXMuaGFuZGxlQWxsUm93c1NlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgICBwcm9wcy5zdG9yZS5zZWxlY3RlZCA9IHByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCB8fCBbXTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogcHJvcHMuc3RvcmUuc2VsZWN0ZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIG5leHRQcm9wcy5zdG9yZS5zZWxlY3RlZCA9IG5leHRQcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQgfHwgW107XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogbmV4dFByb3BzLnN0b3JlLnNlbGVjdGVkXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcm93IHNlbGVjdGlvbiBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHJvd0tleSAtIHJvdyBrZXkgb2Ygd2hhdCB3YXMgc2VsZWN0ZWQuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjaGVja2VkIC0gbmV4dCBjaGVja2VkIHN0YXR1cyBvZiBpbnB1dCBidXR0b24uXG4gICAgICovXG4gICAgaGFuZGxlUm93U2VsZWN0KHJvd0tleSwgY2hlY2tlZCwgcm93SW5kZXgsIGUpIHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0Um93OiB7IG1vZGUsIG9uU2VsZWN0IH0sIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBST1dfU0VMRUNUX1NJTkdMRSB9ID0gQ29uc3Q7XG5cbiAgICAgIGxldCBjdXJyU2VsZWN0ZWQgPSBbLi4uc3RvcmUuc2VsZWN0ZWRdO1xuXG4gICAgICBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9TSU5HTEUpIHsgLy8gd2hlbiBzZWxlY3QgbW9kZSBpcyByYWRpb1xuICAgICAgICBjdXJyU2VsZWN0ZWQgPSBbcm93S2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2tlZCkgeyAvLyB3aGVuIHNlbGVjdCBtb2RlIGlzIGNoZWNrYm94XG4gICAgICAgIGN1cnJTZWxlY3RlZC5wdXNoKHJvd0tleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyU2VsZWN0ZWQgPSBjdXJyU2VsZWN0ZWQuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSByb3dLZXkpO1xuICAgICAgfVxuXG4gICAgICBzdG9yZS5zZWxlY3RlZCA9IGN1cnJTZWxlY3RlZDtcblxuICAgICAgaWYgKG9uU2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGdldFJvd0J5Um93SWQoc3RvcmUpKHJvd0tleSk7XG4gICAgICAgIG9uU2VsZWN0KHJvdywgY2hlY2tlZCwgcm93SW5kZXgsIGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogY3VyclNlbGVjdGVkXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaGFuZGxlIGFsbCByb3dzIHNlbGVjdGlvbiBvbiBoZWFkZXIgY2VsbCBieSBzdG9yZS5zZWxlY3RlZFxuICAgICAqL1xuICAgIGhhbmRsZUFsbFJvd3NTZWxlY3QoZSkge1xuICAgICAgY29uc3QgeyBzdG9yZSwgc2VsZWN0Um93OiB7XG4gICAgICAgIG9uU2VsZWN0QWxsLFxuICAgICAgICBub25TZWxlY3RhYmxlXG4gICAgICB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBpc0FueVNlbGVjdGVkUm93KHN0b3JlKShub25TZWxlY3RhYmxlKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gIXNlbGVjdGVkO1xuXG4gICAgICBjb25zdCBjdXJyU2VsZWN0ZWQgPSByZXN1bHQgP1xuICAgICAgICBzZWxlY3RhYmxlS2V5cyhzdG9yZSkobm9uU2VsZWN0YWJsZSkgOlxuICAgICAgICB1blNlbGVjdGFibGVLZXlzKHN0b3JlKShub25TZWxlY3RhYmxlKTtcblxuXG4gICAgICBzdG9yZS5zZWxlY3RlZCA9IGN1cnJTZWxlY3RlZDtcblxuICAgICAgaWYgKG9uU2VsZWN0QWxsKSB7XG4gICAgICAgIG9uU2VsZWN0QWxsKHJlc3VsdCwgZ2V0U2VsZWN0ZWRSb3dzKHN0b3JlKSwgZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBjdXJyU2VsZWN0ZWRcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QmFzZVxuICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgb25Sb3dTZWxlY3Q9eyB0aGlzLmhhbmRsZVJvd1NlbGVjdCB9XG4gICAgICAgICAgb25BbGxSb3dzU2VsZWN0PXsgdGhpcy5oYW5kbGVBbGxSb3dzU2VsZWN0IH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi93cmFwcGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=react-bootstrap-table-next.js.map