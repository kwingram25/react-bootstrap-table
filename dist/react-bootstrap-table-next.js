(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrapTable2"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _propTypes = __webpack_require__(4);

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

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
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

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

var _rows = __webpack_require__(6);

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

var _container = __webpack_require__(42);

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

var _propsResolver = __webpack_require__(40);

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



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
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

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _row = __webpack_require__(35);

var _row2 = _interopRequireDefault(_row);

var _rowSection = __webpack_require__(39);

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

var _Transition = __webpack_require__(9);

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

var _Transition = __webpack_require__(9);

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



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
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

var _reactDom = __webpack_require__(10);

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

var _cell = __webpack_require__(36);

var _cell2 = _interopRequireDefault(_cell);

var _selectionCell = __webpack_require__(37);

var _selectionCell2 = _interopRequireDefault(_selectionCell);

var _rowEventDelegater = __webpack_require__(38);

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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _columnResolver = __webpack_require__(41);

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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(43);

var _store2 = _interopRequireDefault(_store);

var _wrapper = __webpack_require__(45);

var _wrapper2 = _interopRequireDefault(_wrapper);

var _wrapper3 = __webpack_require__(46);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-underscore-dangle: 0 */


var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _sort = __webpack_require__(44);

var _rows = __webpack_require__(6);

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
/* 44 */
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
/* 45 */
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

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _selection = __webpack_require__(13);

var _rows = __webpack_require__(6);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYWZiOWVjZmY1ODQyMjA4YWU0YSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3Jvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL3JlbW90ZS1yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Jvb3RzdHJhcC10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L2NhcmV0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NhcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9oYXNDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvUmVwbGFjZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvQ2hpbGRNYXBwaW5nLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV2ZW50LWRlbGVnYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9jb2x1bW4tcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC93cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vd3JhcHBlci5qcyJdLCJuYW1lcyI6WyJTT1JUX0FTQyIsIlNPUlRfREVTQyIsIlJPV19TRUxFQ1RfU0lOR0xFIiwiUk9XX1NFTEVDVF9NVUxUSVBMRSIsIlJPV19TRUxFQ1RfRElTQUJMRUQiLCJDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRCIsIkNIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFIiwiQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRCIsInNwbGl0TmVzdGVkIiwic3RyIiwiam9pbiIsInJlcGxhY2UiLCJzcGxpdCIsImdldCIsInRhcmdldCIsImZpZWxkIiwicGF0aEFycmF5IiwicmVzdWx0IiwicmVkdWNlIiwiY3VyciIsInBhdGgiLCJlIiwic2V0IiwidmFsdWUiLCJzYWZlIiwibGV2ZWwiLCJhIiwiYiIsIkVycm9yIiwibGVuZ3RoIiwiaXNGdW5jdGlvbiIsIm9iaiIsImlzT2JqZWN0IiwidHlwZSIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwiaXNFbXB0eU9iamVjdCIsImhhc093blByb3BlcnR5IiwicHJvdG90eXBlIiwia2V5cyIsImkiLCJjYWxsIiwiaXNEZWZpbmVkIiwic2xlZXAiLCJmbiIsIm1zIiwic2V0VGltZW91dCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJhcHB5IiwibWF0Y2hSb3ciLCJrZXlGaWVsZCIsImlkIiwicm93IiwiZ2V0Um93QnlSb3dJZCIsImRhdGEiLCJmaW5kIiwiaXNTZWxlY3RlZEFsbCIsInNlbGVjdGVkIiwiaXNBbnlTZWxlY3RlZFJvdyIsInNraXBzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJ4Iiwic2VsZWN0YWJsZUtleXMiLCJtYXAiLCJfIiwidW5TZWxlY3RhYmxlS2V5cyIsImdldFNlbGVjdGVkUm93cyIsInN0b3JlIiwiZ2V0Um93IiwiayIsInN0YXRlIiwicHJvcHMiLCJwYWdlIiwic2l6ZVBlclBhZ2UiLCJmaWx0ZXJzIiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwiZ2V0QWxsRGF0YSIsInJlbW90ZSIsInBhZ2luYXRpb24iLCJzb3J0IiwiY2VsbEVkaXQiLCJvblRhYmxlQ2hhbmdlIiwiZ2V0TmV3ZXN0U3RhdGUiLCJuZXdTdGF0ZSIsImlzUmVtb3RlUGFnaW5hdGlvbiIsIm9wdGlvbnMiLCJwYWdlU3RhcnRJbmRleCIsInJvd0lkIiwiZGF0YUZpZWxkIiwibmV3VmFsdWUiLCJFeHRlbmRCYXNlIiwiQm9vdHN0cmFwVGFibGUiLCJ2YWxpZGF0ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJsb2FkaW5nIiwib3ZlcmxheSIsInRhYmxlIiwicmVuZGVyVGFibGUiLCJMb2FkaW5nT3ZlcmxheSIsImNvbHVtbnMiLCJjbGFzc2VzIiwic3RyaXBlZCIsImhvdmVyIiwiYm9yZGVyZWQiLCJjb25kZW5zZWQiLCJub0RhdGFJbmRpY2F0aW9uIiwiY2FwdGlvbiIsInJvd1N0eWxlIiwicm93Q2xhc3NlcyIsIndyYXBwZXJDbGFzc2VzIiwicm93RXZlbnRzIiwidGFibGVXcmFwcGVyQ2xhc3MiLCJ0YWJsZUNsYXNzIiwiY2VsbFNlbGVjdGlvbkluZm8iLCJyZXNvbHZlU2VsZWN0Um93UHJvcHMiLCJvblJvd1NlbGVjdCIsImhlYWRlckNlbGxTZWxlY3Rpb25JbmZvIiwicmVzb2x2ZVNlbGVjdFJvd1Byb3BzRm9ySGVhZGVyIiwib25BbGxSb3dzU2VsZWN0IiwiYWxsUm93c1NlbGVjdGVkIiwidGFibGVDYXB0aW9uIiwib25Tb3J0Iiwib25GaWx0ZXIiLCJpc0VtcHR5IiwidmlzaWJsZUNvbHVtblNpemUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJvbmVPZlR5cGUiLCJib29sIiwic2hhcGUiLCJvYmplY3QiLCJub2RlIiwic2VsZWN0Um93IiwibW9kZSIsIm9uZU9mIiwiQ29uc3QiLCJjbGlja1RvU2VsZWN0IiwiY2xpY2tUb0VkaXQiLCJvblNlbGVjdCIsIm9uU2VsZWN0QWxsIiwic3R5bGUiLCJub25TZWxlY3RhYmxlIiwiYmdDb2xvciIsImhpZGVTZWxlY3RDb2x1bW4iLCJkZWZhdWx0U29ydGVkIiwiYXJyYXlPZiIsIm9yZGVyIiwiZGVmYXVsdFNvcnREaXJlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJIZWFkZXIiLCJjb2x1bW4iLCJoaWRkZW4iLCJjdXJyU29ydCIsImlzTGFzdFNvcnRpbmciLCJIZWFkZXJDZWxsIiwiaW5kZXgiLCJzb3J0aW5nIiwidGV4dCIsImhlYWRlclRpdGxlIiwiaGVhZGVyQWxpZ24iLCJoZWFkZXJGb3JtYXR0ZXIiLCJoZWFkZXJFdmVudHMiLCJoZWFkZXJDbGFzc2VzIiwiaGVhZGVyU3R5bGUiLCJoZWFkZXJBdHRycyIsImhlYWRlclNvcnRpbmdDbGFzc2VzIiwiaGVhZGVyU29ydGluZ1N0eWxlIiwiY2VsbEF0dHJzIiwic29ydFN5bWJvbCIsImZpbHRlckVsbSIsImNlbGxTdHlsZSIsImNlbGxDbGFzc2VzIiwidGl0bGUiLCJ0ZXh0QWxpZ24iLCJjdXN0b21DbGljayIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInNvcnRFbGVtZW50IiwiZmlsdGVyRWxlbWVudCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImZvcm1hdHRlciIsImZvcm1hdEV4dHJhRGF0YSIsImFueSIsImV2ZW50cyIsImFsaWduIiwiYXR0cnMiLCJzb3J0RnVuYyIsImVkaXRvciIsImVkaXRhYmxlIiwiZWRpdENlbGxTdHlsZSIsImVkaXRDZWxsQ2xhc3NlcyIsImVkaXRvclN0eWxlIiwiZWRpdG9yQ2xhc3NlcyIsImVkaXRvclJlbmRlcmVyIiwidmFsaWRhdG9yIiwiZmlsdGVyVmFsdWUiLCJudW1iZXIiLCJTb3J0U3ltYm9sIiwiU29ydENhcmV0Iiwib3JkZXJDbGFzcyIsImRyb3B1cCIsIkNoZWNrQm94IiwiY2hlY2tlZCIsImluZGV0ZXJtaW5hdGUiLCJpbnB1dCIsIlNlbGVjdGlvbkhlYWRlckNlbGwiLCJoYW5kbGVDaGVja0JveENsaWNrIiwiYmluZCIsImNoZWNrZWRTdGF0dXMiLCJDYXB0aW9uIiwiQm9keSIsInNlbGVjdGVkUm93S2V5cyIsImNvbnRlbnQiLCJpbmRpY2F0aW9uIiwibm9uRWRpdGFibGVSb3dzIiwia2V5IiwiaW5kZXhPZiIsInNlbGVjdGVkU3R5bGUiLCJzZWxlY3RlZENsYXNzZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RhYmxlIiwiUm93Iiwicm93SW5kZXgiLCJlZGl0YWJsZVJvdyIsIm9uU3RhcnQiLCJFZGl0aW5nQ2VsbCIsImVkaXRpbmdSb3dJZHgiLCJyaWR4IiwiZWRpdGluZ0NvbElkeCIsImNpZHgiLCJDTElDS19UT19DRUxMX0VESVQiLCJEQkNMSUNLX1RPX0NFTExfRURJVCIsInJlc3QiLCJ0ckF0dHJzIiwiZGVsZWdhdGUiLCJlZGl0Q2VsbHN0eWxlIiwiZWRpdENlbGxjbGFzc2VzIiwiQ2VsbCIsImhhbmRsZUVkaXRpbmdDZWxsIiwiY29sdW1uSW5kZXgiLCJkYmNsaWNrVG9FZGl0IiwiY3VzdG9tRGJDbGljayIsIm9uRG91YmxlQ2xpY2siLCJjZWxsVGl0bGUiLCJTZWxlY3Rpb25DZWxsIiwiaGFuZGxlQ2xpY2siLCJpbnB1dFR5cGUiLCJyb3dLZXkiLCJkaXNhYmxlZCIsImNsaWNrTnVtIiwiY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlciIsImNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyIiwiY2IiLCJERUxBWV9GT1JfREJDTElDSyIsImNsaWNrRm4iLCJuZXdBdHRycyIsImZvckVhY2giLCJhdHRyIiwiUm93U2VjdGlvbiIsImNvbFNwYW4iLCJpbmNsdWRlU2VsZWN0Q29sdW1uIiwiY29sdW1uTGVuIiwiYyIsIndpdGhEYXRhU3RvcmUiLCJTdG9yZSIsIndyYXBDb21wb25lbnRzIiwic2V0QWxsRGF0YSIsIkJhc2VDb21wb25lbnQiLCJCYXNlIiwid3JhcHBlckZhY3RvcnkiLCJyZW1vdGVSZXNvbHZlciIsImNvbCIsImJhc2VQcm9wcyIsIl9kYXRhIiwiX2ZpbHRlcmVkRGF0YSIsIl9rZXlGaWVsZCIsIl9zb3J0T3JkZXIiLCJ1bmRlZmluZWQiLCJfc29ydEZpZWxkIiwiX3NlbGVjdGVkIiwiX2ZpbHRlcnMiLCJfcGFnZSIsIl9zaXplUGVyUGFnZSIsImRlZmF1bHRPcmRlciIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImZpbHRlcmVkRGF0YSIsImNvbXBhcmF0b3IiLCJsb2NhbGVDb21wYXJlIiwidmFsdWVBIiwidmFsdWVCIiwibmV4dE9yZGVyIiwiaGFuZGxlU29ydCIsInNldFNvcnQiLCJpc1JlbW90ZVNvcnQiLCJoYW5kbGVTb3J0Q2hhbmdlIiwic29ydEJ5Iiwic29ydGVkQ29sdW1uIiwiZm9yY2VVcGRhdGUiLCJoYW5kbGVSb3dTZWxlY3QiLCJoYW5kbGVBbGxSb3dzU2VsZWN0IiwiY3VyclNlbGVjdGVkIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7a0JDN0JlO0FBQ2JBLFlBQVUsS0FERztBQUViQyxhQUFXLE1BRkU7QUFHYkMscUJBQW1CLE9BSE47QUFJYkMsdUJBQXFCLFVBSlI7QUFLYkMsdUJBQXFCLHFCQUxSO0FBTWJDLDJCQUF5QixTQU5aO0FBT2JDLGlDQUErQixlQVBsQjtBQVFiQyw2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R0UsMkJBQWtCLEtBQUtDO0FBSHpCLFdBREY7QUFPRDtBQTVGVTs7QUFBQTtBQUFBLElBQ3FCdEwsZ0JBRHJCLFVBRUpDLFNBRkksR0FFUTtBQUNqQjdELFdBQU84RCxvQkFBVU8sTUFBVixDQUFpQkwsVUFEUDtBQUVqQk8sZUFBV1Qsb0JBQVVPLE1BQVYsQ0FBaUJMO0FBRlgsR0FGUjtBQUFBLEMiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZS1uZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZhZmI5ZWNmZjU4NDIyMDhhZTRhIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNPUlRfQVNDOiAnYXNjJyxcbiAgU09SVF9ERVNDOiAnZGVzYycsXG4gIFJPV19TRUxFQ1RfU0lOR0xFOiAncmFkaW8nLFxuICBST1dfU0VMRUNUX01VTFRJUExFOiAnY2hlY2tib3gnLFxuICBST1dfU0VMRUNUX0RJU0FCTEVEOiAnUk9XX1NFTEVDVF9ESVNBQkxFRCcsXG4gIENIRUNLQk9YX1NUQVRVU19DSEVDS0VEOiAnY2hlY2tlZCcsXG4gIENIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFOiAnaW5kZXRlcm1pbmF0ZScsXG4gIENIRUNLQk9YX1NUQVRVU19VTkNIRUNLRUQ6ICd1bmNoZWNrZWQnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29uc3QuanMiLCIvKiBlc2xpbnQgbm8tZW1wdHk6IDAgKi9cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuLyogZXNsaW50IHByZWZlci1yZXN0LXBhcmFtczogMCAqL1xuXG5mdW5jdGlvbiBzcGxpdE5lc3RlZChzdHIpIHtcbiAgcmV0dXJuIFtzdHJdXG4gICAgLmpvaW4oJy4nKVxuICAgIC5yZXBsYWNlKC9cXFsvZywgJy4nKVxuICAgIC5yZXBsYWNlKC9cXF0vZywgJycpXG4gICAgLnNwbGl0KCcuJyk7XG59XG5cbmZ1bmN0aW9uIGdldCh0YXJnZXQsIGZpZWxkKSB7XG4gIGNvbnN0IHBhdGhBcnJheSA9IHNwbGl0TmVzdGVkKGZpZWxkKTtcbiAgbGV0IHJlc3VsdDtcbiAgdHJ5IHtcbiAgICByZXN1bHQgPSBwYXRoQXJyYXkucmVkdWNlKChjdXJyLCBwYXRoKSA9PiBjdXJyW3BhdGhdLCB0YXJnZXQpO1xuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBmaWVsZCwgdmFsdWUsIHNhZmUgPSBmYWxzZSkge1xuICBjb25zdCBwYXRoQXJyYXkgPSBzcGxpdE5lc3RlZChmaWVsZCk7XG4gIGxldCBsZXZlbCA9IDA7XG4gIHBhdGhBcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICBsZXZlbCArPSAxO1xuICAgIGlmICh0eXBlb2YgYVtiXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICghc2FmZSkgdGhyb3cgbmV3IEVycm9yKGAke2F9LiR7Yn0gaXMgdW5kZWZpbmVkYCk7XG4gICAgICBhW2JdID0ge307XG4gICAgICByZXR1cm4gYVtiXTtcbiAgICB9XG5cbiAgICBpZiAobGV2ZWwgPT09IHBhdGhBcnJheS5sZW5ndGgpIHtcbiAgICAgIGFbYl0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGFbYl07XG4gIH0sIHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBPYmplY3QuIHRoZSBgT2JqZWN0YCBleGNlcHQgYEZ1bmN0aW9uYCBhbmQgYEFycmF5LmBcbiAqXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRoZSB2YWx1ZSBnb25uYSBjaGVja1xuICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmo7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZSA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmplY3Qob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIGZhbHNlO1xuXG4gIGNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gc2xlZXAoZm4sIG1zKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGZuKCksIG1zKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0O1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IHx8IDApO1xuXG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBweSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHNldCxcbiAgaXNGdW5jdGlvbixcbiAgaXNPYmplY3QsXG4gIGlzRW1wdHlPYmplY3QsXG4gIGlzRGVmaW5lZCxcbiAgc2xlZXAsXG4gIGRlYm91bmNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvdXRpbHMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbmV4cG9ydCBjb25zdCBtYXRjaFJvdyA9IChrZXlGaWVsZCwgaWQpID0+IHJvdyA9PiByb3dba2V5RmllbGRdID09PSBpZDtcblxuZXhwb3J0IGNvbnN0IGdldFJvd0J5Um93SWQgPSAoeyBkYXRhLCBrZXlGaWVsZCB9KSA9PiBpZCA9PiBkYXRhLmZpbmQobWF0Y2hSb3coa2V5RmllbGQsIGlkKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9yb3dzLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkVYSVRJTkcgPSBleHBvcnRzLkVOVEVSRUQgPSBleHBvcnRzLkVOVEVSSU5HID0gZXhwb3J0cy5FWElURUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9IHVuZGVmaW5lZDtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVU5NT1VOVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSAndW5tb3VudGVkJztcbnZhciBFWElURUQgPSBleHBvcnRzLkVYSVRFRCA9ICdleGl0ZWQnO1xudmFyIEVOVEVSSU5HID0gZXhwb3J0cy5FTlRFUklORyA9ICdlbnRlcmluZyc7XG52YXIgRU5URVJFRCA9IGV4cG9ydHMuRU5URVJFRCA9ICdlbnRlcmVkJztcbnZhciBFWElUSU5HID0gZXhwb3J0cy5FWElUSU5HID0gJ2V4aXRpbmcnO1xuXG4vKipcbiAqIFRoZSBUcmFuc2l0aW9uIGNvbXBvbmVudCBsZXRzIHlvdSBkZXNjcmliZSBhIHRyYW5zaXRpb24gZnJvbSBvbmUgY29tcG9uZW50XG4gKiBzdGF0ZSB0byBhbm90aGVyIF9vdmVyIHRpbWVfIHdpdGggYSBzaW1wbGUgZGVjbGFyYXRpdmUgQVBJLiBNb3N0IGNvbW1vbmx5XG4gKiBpdCdzIHVzZWQgdG8gYW5pbWF0ZSB0aGUgbW91bnRpbmcgYW5kIHVubW91bnRpbmcgb2YgYSBjb21wb25lbnQsIGJ1dCBjYW4gYWxzb1xuICogYmUgdXNlZCB0byBkZXNjcmliZSBpbi1wbGFjZSB0cmFuc2l0aW9uIHN0YXRlcyBhcyB3ZWxsLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lcyBub3QgYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHRoZVxuICogY29tcG9uZW50IGl0IHJlbmRlcnMsIGl0IG9ubHkgdHJhY2tzIFwiZW50ZXJcIiBhbmQgXCJleGl0XCIgc3RhdGVzIGZvciB0aGUgY29tcG9uZW50cy5cbiAqIEl0J3MgdXAgdG8geW91IHRvIGdpdmUgbWVhbmluZyBhbmQgZWZmZWN0IHRvIHRob3NlIHN0YXRlcy4gRm9yIGV4YW1wbGUgd2UgY2FuXG4gKiBhZGQgc3R5bGVzIHRvIGEgY29tcG9uZW50IHdoZW4gaXQgZW50ZXJzIG9yIGV4aXRzOlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJztcbiAqXG4gKiBjb25zdCBkdXJhdGlvbiA9IDMwMDtcbiAqXG4gKiBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gKiAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7ZHVyYXRpb259bXMgZWFzZS1pbi1vdXRgLFxuICogICBvcGFjaXR5OiAwLFxuICogfVxuICpcbiAqIGNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XG4gKiAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAqICAgZW50ZXJlZDogIHsgb3BhY2l0eTogMSB9LFxuICogfTtcbiAqXG4gKiBjb25zdCBGYWRlID0gKHsgaW46IGluUHJvcCB9KSA9PiAoXG4gKiAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9e2R1cmF0aW9ufT5cbiAqICAgICB7KHN0YXRlKSA9PiAoXG4gKiAgICAgICA8ZGl2IHN0eWxlPXt7XG4gKiAgICAgICAgIC4uLmRlZmF1bHRTdHlsZSxcbiAqICAgICAgICAgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV1cbiAqICAgICAgIH19PlxuICogICAgICAgICBJJ20gYSBmYWRlIFRyYW5zaXRpb24hXG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICApfVxuICogICA8L1RyYW5zaXRpb24+XG4gKiApO1xuICogYGBgXG4gKlxuICogQXMgbm90ZWQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lc24ndCBfZG9fIGFueXRoaW5nIGJ5IGl0c2VsZiB0byBpdHMgY2hpbGQgY29tcG9uZW50LlxuICogV2hhdCBpdCBkb2VzIGRvIGlzIHRyYWNrIHRyYW5zaXRpb24gc3RhdGVzIG92ZXIgdGltZSBzbyB5b3UgY2FuIHVwZGF0ZSB0aGVcbiAqIGNvbXBvbmVudCAoc3VjaCBhcyBieSBhZGRpbmcgc3R5bGVzIG9yIGNsYXNzZXMpIHdoZW4gaXQgY2hhbmdlcyBzdGF0ZXMuXG4gKlxuICogVGhlcmUgYXJlIDQgbWFpbiBzdGF0ZXMgYSBUcmFuc2l0aW9uIGNhbiBiZSBpbjpcbiAqICAtIGAnZW50ZXJpbmcnYFxuICogIC0gYCdlbnRlcmVkJ2BcbiAqICAtIGAnZXhpdGluZydgXG4gKiAgLSBgJ2V4aXRlZCdgXG4gKlxuICogVHJhbnNpdGlvbiBzdGF0ZSBpcyB0b2dnbGVkIHZpYSB0aGUgYGluYCBwcm9wLiBXaGVuIGB0cnVlYCB0aGUgY29tcG9uZW50IGJlZ2lucyB0aGVcbiAqIFwiRW50ZXJcIiBzdGFnZS4gRHVyaW5nIHRoaXMgc3RhZ2UsIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCBmcm9tIGl0cyBjdXJyZW50IHRyYW5zaXRpb24gc3RhdGUsXG4gKiB0byBgJ2VudGVyaW5nJ2AgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiBhbmQgdGhlbiB0byB0aGUgYCdlbnRlcmVkJ2Agc3RhZ2Ugb25jZVxuICogaXQncyBjb21wbGV0ZS4gTGV0J3MgdGFrZSB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XG4gKlxuICogYGBganN4XG4gKiBzdGF0ZSA9IHsgaW46IGZhbHNlIH07XG4gKlxuICogdG9nZ2xlRW50ZXJTdGF0ZSA9ICgpID0+IHtcbiAqICAgdGhpcy5zZXRTdGF0ZSh7IGluOiB0cnVlIH0pO1xuICogfVxuICpcbiAqIHJlbmRlcigpIHtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPFRyYW5zaXRpb24gaW49e3RoaXMuc3RhdGUuaW59IHRpbWVvdXQ9ezUwMH0gLz5cbiAqICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVFbnRlclN0YXRlfT5DbGljayB0byBFbnRlcjwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IHRvIHRoZSBgJ2VudGVyaW5nJ2Agc3RhdGUgYW5kXG4gKiBzdGF5IHRoZXJlIGZvciA1MDBtcyAodGhlIHZhbHVlIG9mIGB0aW1lb3V0YCkgYmVmb3JlIGl0IGZpbmFsbHkgc3dpdGNoZXMgdG8gYCdlbnRlcmVkJ2AuXG4gKlxuICogV2hlbiBgaW5gIGlzIGBmYWxzZWAgdGhlIHNhbWUgdGhpbmcgaGFwcGVucyBleGNlcHQgdGhlIHN0YXRlIG1vdmVzIGZyb20gYCdleGl0aW5nJ2AgdG8gYCdleGl0ZWQnYC5cbiAqXG4gKiAjIyBUaW1pbmdcbiAqXG4gKiBUaW1pbmcgaXMgb2Z0ZW4gdGhlIHRyaWNraWVzdCBwYXJ0IG9mIGFuaW1hdGlvbiwgbWlzdGFrZXMgY2FuIHJlc3VsdCBpbiBzbGlnaHQgZGVsYXlzXG4gKiB0aGF0IGFyZSBoYXJkIHRvIHBpbiBkb3duLiBBIGNvbW1vbiBleGFtcGxlIGlzIHdoZW4geW91IHdhbnQgdG8gYWRkIGFuIGV4aXQgdHJhbnNpdGlvbixcbiAqIHlvdSBzaG91bGQgc2V0IHRoZSBkZXNpcmVkIGZpbmFsIHN0eWxlcyB3aGVuIHRoZSBzdGF0ZSBpcyBgJ2V4aXRpbmcnYC4gVGhhdCdzIHdoZW4gdGhlXG4gKiB0cmFuc2l0aW9uIHRvIHRob3NlIHN0eWxlcyB3aWxsIHN0YXJ0IGFuZCwgaWYgeW91IG1hdGNoZWQgdGhlIGB0aW1lb3V0YCBwcm9wIHdpdGggdGhlXG4gKiBDU1MgVHJhbnNpdGlvbiBkdXJhdGlvbiwgaXQgd2lsbCBlbmQgZXhhY3RseSB3aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzIHRvIGAnZXhpdGVkJ2AuXG4gKlxuICogPiAqKk5vdGUqKjogRm9yIHNpbXBsZXIgdHJhbnNpdGlvbnMgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgbWlnaHQgYmUgZW5vdWdoLCBidXRcbiAqID4gdGFrZSBpbnRvIGFjY291bnQgdGhhdCBpdCdzIHBsYXRmb3JtLWFnbm9zdGljLCB3aGlsZSB0aGUgYENTU1RyYW5zaXRpb25gIGNvbXBvbmVudFxuICogPiBbZm9yY2VzIHJlZmxvd3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvYmxvYi81MDA3MzAzZTcyOWE3NGJlNjZhMjFjM2UyMjA1ZTQ5MTY4MjE1MjRiL3NyYy9DU1NUcmFuc2l0aW9uLmpzI0wyMDgtTDIxNSlcbiAqID4gaW4gb3JkZXIgdG8gbWFrZSBtb3JlIGNvbXBsZXggdHJhbnNpdGlvbnMgbW9yZSBwcmVkaWN0YWJsZS4gRm9yIGV4YW1wbGUsIGV2ZW4gdGhvdWdoXG4gKiA+IGNsYXNzZXMgYGV4YW1wbGUtZW50ZXJgIGFuZCBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIGFyZSBhcHBsaWVkIGltbWVkaWF0ZWx5IG9uZSBhZnRlclxuICogPiBhbm90aGVyLCB5b3UgY2FuIHN0aWxsIHRyYW5zaXRpb24gZnJvbSBvbmUgdG8gdGhlIG90aGVyIGJlY2F1c2Ugb2YgdGhlIGZvcmNlZCByZWZsb3dcbiAqID4gKHJlYWQgW3RoaXMgaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvaXNzdWVzLzE1OSNpc3N1ZWNvbW1lbnQtMzIyNzYxMTcxKVxuICogPiBmb3IgbW9yZSBpbmZvKS4gVGFrZSB0aGlzIGludG8gYWNjb3VudCB3aGVuIGNob29zaW5nIGJldHdlZW4gYFRyYW5zaXRpb25gIGFuZFxuICogPiBgQ1NTVHJhbnNpdGlvbmAuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC83NDFvcDRtbWowP2ZvbnRzaXplPTE0XCIgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIiBzYW5kYm94PVwiYWxsb3ctbW9kYWxzIGFsbG93LWZvcm1zIGFsbG93LXBvcHVwcyBhbGxvdy1zY3JpcHRzIGFsbG93LXNhbWUtb3JpZ2luXCI+PC9pZnJhbWU+XG4gKlxuICovXG5cbnZhciBUcmFuc2l0aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNpdGlvbik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIHZhciBwYXJlbnRHcm91cCA9IGNvbnRleHQudHJhbnNpdGlvbkdyb3VwO1xuICAgIC8vIEluIHRoZSBjb250ZXh0IG9mIGEgVHJhbnNpdGlvbkdyb3VwIGFsbCBlbnRlcnMgYXJlIHJlYWxseSBhcHBlYXJzXG4gICAgdmFyIGFwcGVhciA9IHBhcmVudEdyb3VwICYmICFwYXJlbnRHcm91cC5pc01vdW50aW5nID8gcHJvcHMuZW50ZXIgOiBwcm9wcy5hcHBlYXI7XG5cbiAgICB2YXIgaW5pdGlhbFN0YXR1cyA9IHZvaWQgMDtcbiAgICBfdGhpcy5uZXh0U3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcm9wcy5pbikge1xuICAgICAgaWYgKGFwcGVhcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgICBfdGhpcy5uZXh0U3RhdHVzID0gRU5URVJJTkc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRU5URVJFRDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb3BzLnVubW91bnRPbkV4aXQgfHwgcHJvcHMubW91bnRPbkVudGVyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBVTk1PVU5URUQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0geyBzdGF0dXM6IGluaXRpYWxTdGF0dXMgfTtcblxuICAgIF90aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7IHRyYW5zaXRpb25Hcm91cDogbnVsbCB9OyAvLyBhbGxvd3MgZm9yIG5lc3RlZCBUcmFuc2l0aW9uc1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0dXModHJ1ZSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIF9yZWYgPSB0aGlzLnBlbmRpbmdTdGF0ZSB8fCB0aGlzLnN0YXRlLFxuICAgICAgICBzdGF0dXMgPSBfcmVmLnN0YXR1cztcblxuICAgIGlmIChuZXh0UHJvcHMuaW4pIHtcbiAgICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBFWElURUQgfSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgICAgICAgdGhpcy5uZXh0U3RhdHVzID0gRU5URVJJTkc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgICB0aGlzLm5leHRTdGF0dXMgPSBFWElUSU5HO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuZ2V0VGltZW91dHMgPSBmdW5jdGlvbiBnZXRUaW1lb3V0cygpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXMucHJvcHMudGltZW91dDtcblxuICAgIHZhciBleGl0ID0gdm9pZCAwLFxuICAgICAgICBlbnRlciA9IHZvaWQgMCxcbiAgICAgICAgYXBwZWFyID0gdm9pZCAwO1xuXG4gICAgZXhpdCA9IGVudGVyID0gYXBwZWFyID0gdGltZW91dDtcblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwgJiYgdHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICBleGl0ID0gdGltZW91dC5leGl0O1xuICAgICAgZW50ZXIgPSB0aW1lb3V0LmVudGVyO1xuICAgICAgYXBwZWFyID0gdGltZW91dC5hcHBlYXI7XG4gICAgfVxuICAgIHJldHVybiB7IGV4aXQ6IGV4aXQsIGVudGVyOiBlbnRlciwgYXBwZWFyOiBhcHBlYXIgfTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiB1cGRhdGVTdGF0dXMoKSB7XG4gICAgdmFyIG1vdW50aW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIHZhciBuZXh0U3RhdHVzID0gdGhpcy5uZXh0U3RhdHVzO1xuXG4gICAgaWYgKG5leHRTdGF0dXMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubmV4dFN0YXR1cyA9IG51bGw7XG4gICAgICAvLyBuZXh0U3RhdHVzIHdpbGwgYWx3YXlzIGJlIEVOVEVSSU5HIG9yIEVYSVRJTkcuXG4gICAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICAgICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSBFTlRFUklORykge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBlcmZvcm1FeGl0KG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHRoaXMuc3RhdGUuc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFVOTU9VTlRFRCB9KTtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gcGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgZW50ZXIgPSB0aGlzLnByb3BzLmVudGVyO1xuXG4gICAgdmFyIGFwcGVhcmluZyA9IHRoaXMuY29udGV4dC50cmFuc2l0aW9uR3JvdXAgPyB0aGlzLmNvbnRleHQudHJhbnNpdGlvbkdyb3VwLmlzTW91bnRpbmcgOiBtb3VudGluZztcblxuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTtcblxuICAgIC8vIG5vIGVudGVyIGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVOVEVSRURcbiAgICAvLyBpZiB3ZSBhcmUgbW91bnRpbmcgYW5kIHJ1bm5pbmcgdGhpcyBpdCBtZWFucyBhcHBlYXIgX211c3RfIGJlIHNldFxuICAgIGlmICghbW91bnRpbmcgJiYgIWVudGVyKSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRU5URVJFRCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRW50ZXIobm9kZSwgYXBwZWFyaW5nKTtcblxuICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFTlRFUklORyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucHJvcHMub25FbnRlcmluZyhub2RlLCBhcHBlYXJpbmcpO1xuXG4gICAgICAvLyBGSVhNRTogYXBwZWFyIHRpbWVvdXQ/XG4gICAgICBfdGhpczIub25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXRzLmVudGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVOVEVSRUQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5wZXJmb3JtRXhpdCA9IGZ1bmN0aW9uIHBlcmZvcm1FeGl0KG5vZGUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBleGl0ID0gdGhpcy5wcm9wcy5leGl0O1xuXG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpO1xuXG4gICAgLy8gbm8gZXhpdCBhbmltYXRpb24gc2tpcCByaWdodCB0byBFWElURURcbiAgICBpZiAoIWV4aXQpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElURUQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG5cbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRVhJVElORyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuXG4gICAgICBfdGhpczMub25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXRzLmV4aXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRVhJVEVEIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY2FuY2VsTmV4dENhbGxiYWNrID0gZnVuY3Rpb24gY2FuY2VsTmV4dENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLm5leHRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnNhZmVTZXRTdGF0ZSA9IGZ1bmN0aW9uIHNhZmVTZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyYWNrIHBlbmRpbmcgdXBkYXRlcyBmb3IgaW5zdGFuY2VzIHdoZXJlIGEgY1dSUCBmaXJlcyBxdWlja2x5XG4gICAgLy8gYWZ0ZXIgY0RNIGFuZCBiZWZvcmUgdGhlIHN0YXRlIGZsdXNoZXMsIHdoaWNoIHdvdWxkIGRvdWJsZSB0cmlnZ2VyIGFcbiAgICAvLyB0cmFuc2l0aW9uXG4gICAgdGhpcy5wZW5kaW5nU3RhdGUgPSBuZXh0U3RhdGU7XG5cbiAgICAvLyBUaGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnksIGJ1dCB0aGVyZSBhcmUgd2VpcmQgcmFjZSBjb25kaXRpb25zIHdpdGhcbiAgICAvLyBzZXRTdGF0ZSBjYWxsYmFja3MgYW5kIHVubW91bnRpbmcgaW4gdGVzdGluZywgc28gYWx3YXlzIG1ha2Ugc3VyZSB0aGF0XG4gICAgLy8gd2UgY2FuIGNhbmNlbCBhbnkgcGVuZGluZyBzZXRTdGF0ZSBjYWxsYmFja3MgYWZ0ZXIgd2UgdW5tb3VudC5cbiAgICBjYWxsYmFjayA9IHRoaXMuc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM0LnBlbmRpbmdTdGF0ZSA9IG51bGw7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnNldE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIHNldE5leHRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXM1Lm5leHRDYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMubmV4dENhbGxiYWNrO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5zZXROZXh0Q2FsbGJhY2soaGFuZGxlcik7XG5cbiAgICBpZiAobm9kZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcihub2RlLCB0aGlzLm5leHRDYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCAwKTtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcbiAgICBpZiAoc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nXSk7XG4gICAgLy8gZmlsdGVyIHByb3BzIGZvciBUcmFuc3RpdGlvblxuXG5cbiAgICBkZWxldGUgY2hpbGRQcm9wcy5pbjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5tb3VudE9uRW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudW5tb3VudE9uRXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy50aW1lb3V0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFkZEVuZExpc3RlbmVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmluZztcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyZWQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGluZztcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXRlZDtcblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbihzdGF0dXMsIGNoaWxkUHJvcHMpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb247XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLmNvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuVHJhbnNpdGlvbi5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBmdW5jdGlvbiB0cmFuc2l0aW9uR3JvdXAoKSB7fVxufTtcblxuXG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEEgYGZ1bmN0aW9uYCBjaGlsZCBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIGEgUmVhY3QgZWxlbWVudC5cbiAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB0cmFuc2l0aW9uIHN0YXR1c1xuICAgKiAoJ2VudGVyaW5nJywgJ2VudGVyZWQnLCAnZXhpdGluZycsICdleGl0ZWQnLCAndW5tb3VudGVkJyksIHdoaWNoIGNhbiBiZSB1c2VkXG4gICAqIHRvIGFwcGx5IGNvbnRleHQgc3BlY2lmaWMgcHJvcHMgdG8gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiA8VHJhbnNpdGlvbiB0aW1lb3V0PXsxNTB9PlxuICAgKiAgIHsoc3RhdHVzKSA9PiAoXG4gICAqICAgICA8TXlDb21wb25lbnQgY2xhc3NOYW1lPXtgZmFkZSBmYWRlLSR7c3RhdHVzfWB9IC8+XG4gICAqICAgKX1cbiAgICogPC9UcmFuc2l0aW9uPlxuICAgKiBgYGBcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXNcbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGlzIG1vdW50ZWQgaW1tZWRpYXRlbHkgYWxvbmcgd2l0aFxuICAgKiB0aGUgcGFyZW50IGBUcmFuc2l0aW9uYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIFwibGF6eSBtb3VudFwiIHRoZSBjb21wb25lbnQgb24gdGhlXG4gICAqIGZpcnN0IGBpbj17dHJ1ZX1gIHlvdSBjYW4gc2V0IGBtb3VudE9uRW50ZXJgLiBBZnRlciB0aGUgZmlyc3QgZW50ZXIgdHJhbnNpdGlvbiB0aGUgY29tcG9uZW50IHdpbGwgc3RheVxuICAgKiBtb3VudGVkLCBldmVuIG9uIFwiZXhpdGVkXCIsIHVubGVzcyB5b3UgYWxzbyBzcGVjaWZ5IGB1bm1vdW50T25FeGl0YC5cbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBzdGF5cyBtb3VudGVkIGFmdGVyIGl0IHJlYWNoZXMgdGhlIGAnZXhpdGVkJ2Agc3RhdGUuXG4gICAqIFNldCBgdW5tb3VudE9uRXhpdGAgaWYgeW91J2QgcHJlZmVyIHRvIHVubW91bnQgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBmaW5pc2hlcyBleGl0aW5nLlxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5vcm1hbGx5IGEgY29tcG9uZW50IGlzIG5vdCB0cmFuc2l0aW9uZWQgaWYgaXQgaXMgc2hvd24gd2hlbiB0aGUgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50IG1vdW50cy5cbiAgICogSWYgeW91IHdhbnQgdG8gdHJhbnNpdGlvbiBvbiB0aGUgZmlyc3QgbW91bnQgc2V0IGBhcHBlYXJgIHRvIGB0cnVlYCwgYW5kIHRoZVxuICAgKiBjb21wb25lbnQgd2lsbCB0cmFuc2l0aW9uIGluIGFzIHNvb24gYXMgdGhlIGA8VHJhbnNpdGlvbj5gIG1vdW50cy5cbiAgICpcbiAgICogPiBOb3RlOiB0aGVyZSBhcmUgbm8gc3BlY2lmaWMgXCJhcHBlYXJcIiBzdGF0ZXMuIGBhcHBlYXJgIG9ubHkgYWRkcyBhbiBhZGRpdGlvbmFsIGBlbnRlcmAgdHJhbnNpdGlvbi5cbiAgICovXG4gIGFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGVudGVyIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBleGl0IHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBSZXF1aXJlZCB1bmxlc3MgYGFkZEVuZExpc3RlbmVyYCBpcyBwcm92aWRlZFxuICAgKlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zIGxpa2U6IGB0aW1lb3V0PXs1MDB9YCxcbiAgICogb3IgaW5kaXZpZHVhbGx5IGxpa2U6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiB0aW1lb3V0PXt7XG4gICAqICBlbnRlcjogMzAwLFxuICAgKiAgZXhpdDogNTAwLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge251bWJlciB8IHsgZW50ZXI/OiBudW1iZXIsIGV4aXQ/OiBudW1iZXIgfX1cbiAgICovXG4gIHRpbWVvdXQ6IGZ1bmN0aW9uIHRpbWVvdXQocHJvcHMpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBwdCA9IF9Qcm9wVHlwZXMudGltZW91dHNTaGFwZTtcbiAgICBpZiAoIXByb3BzLmFkZEVuZExpc3RlbmVyKSBwdCA9IHB0LmlzUmVxdWlyZWQ7XG4gICAgcmV0dXJuIHB0LmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzXS5jb25jYXQoYXJncykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gdHJhbnNpdGlvbiBlbmQgdHJpZ2dlci4gQ2FsbGVkIHdpdGggdGhlIHRyYW5zaXRpb25pbmdcbiAgICogRE9NIG5vZGUgYW5kIGEgYGRvbmVgIGNhbGxiYWNrLiBBbGxvd3MgZm9yIG1vcmUgZmluZSBncmFpbmVkIHRyYW5zaXRpb24gZW5kXG4gICAqIGxvZ2ljLiAqKk5vdGU6KiogVGltZW91dHMgYXJlIHN0aWxsIHVzZWQgYXMgYSBmYWxsYmFjayBpZiBwcm92aWRlZC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4ge1xuICAgKiAgIC8vIHVzZSB0aGUgY3NzIHRyYW5zaXRpb25lbmQgZXZlbnQgdG8gbWFyayB0aGUgZmluaXNoIG9mIGEgdHJhbnNpdGlvblxuICAgKiAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGRvbmUsIGZhbHNlKTtcbiAgICogfX1cbiAgICogYGBgXG4gICAqL1xuICBhZGRFbmRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyZWRcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuY1xufSA6IHt9O1xuXG4vLyBOYW1lIHRoZSBmdW5jdGlvbiBzbyBpdCBpcyBjbGVhcmVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG5mdW5jdGlvbiBub29wKCkge31cblxuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGluOiBmYWxzZSxcbiAgbW91bnRPbkVudGVyOiBmYWxzZSxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIGFwcGVhcjogZmFsc2UsXG4gIGVudGVyOiB0cnVlLFxuICBleGl0OiB0cnVlLFxuXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uRW50ZXJpbmc6IG5vb3AsXG4gIG9uRW50ZXJlZDogbm9vcCxcblxuICBvbkV4aXQ6IG5vb3AsXG4gIG9uRXhpdGluZzogbm9vcCxcbiAgb25FeGl0ZWQ6IG5vb3Bcbn07XG5cblRyYW5zaXRpb24uVU5NT1VOVEVEID0gMDtcblRyYW5zaXRpb24uRVhJVEVEID0gMTtcblRyYW5zaXRpb24uRU5URVJJTkcgPSAyO1xuVHJhbnNpdGlvbi5FTlRFUkVEID0gMztcblRyYW5zaXRpb24uRVhJVElORyA9IDQ7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYW5zaXRpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNsYXNzTmFtZXNTaGFwZSA9IGV4cG9ydHMudGltZW91dHNTaGFwZSA9IHVuZGVmaW5lZDtcbmV4cG9ydHMudHJhbnNpdGlvblRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25UaW1lb3V0KHRyYW5zaXRpb25UeXBlKSB7XG4gIHZhciB0aW1lb3V0UHJvcE5hbWUgPSAndHJhbnNpdGlvbicgKyB0cmFuc2l0aW9uVHlwZSArICdUaW1lb3V0JztcbiAgdmFyIGVuYWJsZWRQcm9wTmFtZSA9ICd0cmFuc2l0aW9uJyArIHRyYW5zaXRpb25UeXBlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAvLyBJZiB0aGUgdHJhbnNpdGlvbiBpcyBlbmFibGVkXG4gICAgaWYgKHByb3BzW2VuYWJsZWRQcm9wTmFtZV0pIHtcbiAgICAgIC8vIElmIG5vIHRpbWVvdXQgZHVyYXRpb24gaXMgcHJvdmlkZWRcbiAgICAgIGlmIChwcm9wc1t0aW1lb3V0UHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcih0aW1lb3V0UHJvcE5hbWUgKyAnIHdhc25cXCd0IHN1cHBsaWVkIHRvIENTU1RyYW5zaXRpb25Hcm91cDogJyArICd0aGlzIGNhbiBjYXVzZSB1bnJlbGlhYmxlIGFuaW1hdGlvbnMgYW5kIHdvblxcJ3QgYmUgc3VwcG9ydGVkIGluICcgKyAnYSBmdXR1cmUgdmVyc2lvbiBvZiBSZWFjdC4gU2VlICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hbmltYXRpb24tdHJhbnNpdGlvbi1ncm91cC10aW1lb3V0IGZvciBtb3JlICcgKyAnaW5mb3JtYXRpb24uJyk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGR1cmF0aW9uIGlzbid0IGEgbnVtYmVyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wc1t0aW1lb3V0UHJvcE5hbWVdICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKHRpbWVvdXRQcm9wTmFtZSArICcgbXVzdCBiZSBhIG51bWJlciAoaW4gbWlsbGlzZWNvbmRzKScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgdGltZW91dHNTaGFwZSA9IGV4cG9ydHMudGltZW91dHNTaGFwZSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgZXhpdDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbn0pLmlzUmVxdWlyZWRdKTtcblxudmFyIGNsYXNzTmFtZXNTaGFwZSA9IGV4cG9ydHMuY2xhc3NOYW1lc1NoYXBlID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufSksIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyRG9uZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyQWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXREb25lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdEFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn0pXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0NoaWxkTWFwcGluZyA9IHJlcXVpcmUoJy4vdXRpbHMvQ2hpbGRNYXBwaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBvYmpba107XG4gIH0pO1xufTtcblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIGA8VHJhbnNpdGlvbkdyb3VwPmAgcmVuZGVycyBhIGA8ZGl2PmAgYnkgZGVmYXVsdC4gWW91IGNhbiBjaGFuZ2UgdGhpc1xuICAgKiBiZWhhdmlvciBieSBwcm92aWRpbmcgYSBgY29tcG9uZW50YCBwcm9wLlxuICAgKiBJZiB5b3UgdXNlIFJlYWN0IHYxNisgYW5kIHdvdWxkIGxpa2UgdG8gYXZvaWQgYSB3cmFwcGluZyBgPGRpdj5gIGVsZW1lbnRcbiAgICogeW91IGNhbiBwYXNzIGluIGBjb21wb25lbnQ9e251bGx9YC4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIHdyYXBwaW5nIGRpdlxuICAgKiBib3JrcyB5b3VyIGNzcyBzdHlsZXMuXG4gICAqL1xuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICAvKipcbiAgICogQSBzZXQgb2YgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50cywgdGhhdCBhcmUgdG9nZ2xlZCBgaW5gIGFuZCBvdXQgYXMgdGhleVxuICAgKiBsZWF2ZS4gdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgd2lsbCBpbmplY3Qgc3BlY2lmaWMgdHJhbnNpdGlvbiBwcm9wcywgc29cbiAgICogcmVtZW1iZXIgdG8gc3ByZWFkIHRoZW0gdGhyb3VnaCBpZiB5b3UgYXJlIHdyYXBwaW5nIHRoZSBgPFRyYW5zaXRpb24+YCBhc1xuICAgKiB3aXRoIG91ciBgPEZhZGU+YCBleGFtcGxlLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBhcHBlYXIgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgYXBwZWFyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGVudGVyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBleGl0IGFuaW1hdGlvbnNcbiAgICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgICovXG4gIGV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogWW91IG1heSBuZWVkIHRvIGFwcGx5IHJlYWN0aXZlIHVwZGF0ZXMgdG8gYSBjaGlsZCBhcyBpdCBpcyBleGl0aW5nLlxuICAgKiBUaGlzIGlzIGdlbmVyYWxseSBkb25lIGJ5IHVzaW5nIGBjbG9uZUVsZW1lbnRgIGhvd2V2ZXIgaW4gdGhlIGNhc2Ugb2YgYW4gZXhpdGluZ1xuICAgKiBjaGlsZCB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIHJlbW92ZWQgYW5kIG5vdCBhY2Nlc3NpYmxlIHRvIHRoZSBjb25zdW1lci5cbiAgICpcbiAgICogSWYgeW91IGRvIG5lZWQgdG8gdXBkYXRlIGEgY2hpbGQgYXMgaXQgbGVhdmVzIHlvdSBjYW4gcHJvdmlkZSBhIGBjaGlsZEZhY3RvcnlgXG4gICAqIHRvIHdyYXAgZXZlcnkgY2hpbGQsIGV2ZW4gdGhlIG9uZXMgdGhhdCBhcmUgbGVhdmluZy5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24oY2hpbGQ6IFJlYWN0RWxlbWVudCkgLT4gUmVhY3RFbGVtZW50XG4gICAqL1xuICBjaGlsZEZhY3Rvcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnZGl2JyxcbiAgY2hpbGRGYWN0b3J5OiBmdW5jdGlvbiBjaGlsZEZhY3RvcnkoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbn07XG5cbi8qKlxuICogVGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgY29tcG9uZW50IG1hbmFnZXMgYSBzZXQgb2YgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50c1xuICogaW4gYSBsaXN0LiBMaWtlIHdpdGggdGhlIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudCwgYDxUcmFuc2l0aW9uR3JvdXA+YCwgaXMgYVxuICogc3RhdGUgbWFjaGluZSBmb3IgbWFuYWdpbmcgdGhlIG1vdW50aW5nIGFuZCB1bm1vdW50aW5nIG9mIGNvbXBvbmVudHMgb3ZlclxuICogdGltZS5cbiAqXG4gKiBDb25zaWRlciB0aGUgZXhhbXBsZSBiZWxvdyB1c2luZyB0aGUgYEZhZGVgIENTUyB0cmFuc2l0aW9uIGZyb20gYmVmb3JlLlxuICogQXMgaXRlbXMgYXJlIHJlbW92ZWQgb3IgYWRkZWQgdG8gdGhlIFRvZG9MaXN0IHRoZSBgaW5gIHByb3AgaXMgdG9nZ2xlZFxuICogYXV0b21hdGljYWxseSBieSB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YC4gWW91IGNhbiB1c2UgX2FueV8gYDxUcmFuc2l0aW9uPmBcbiAqIGNvbXBvbmVudCBpbiBhIGA8VHJhbnNpdGlvbkdyb3VwPmAsIG5vdCBqdXN0IGNzcy5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkLzAwcnF5bzI2a24/Zm9udHNpemU9MTRcIiBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiIHNhbmRib3g9XCJhbGxvdy1tb2RhbHMgYWxsb3ctZm9ybXMgYWxsb3ctcG9wdXBzIGFsbG93LXNjcmlwdHMgYWxsb3ctc2FtZS1vcmlnaW5cIj48L2lmcmFtZT5cbiAqXG4gKiBOb3RlIHRoYXQgYDxUcmFuc2l0aW9uR3JvdXA+YCAgZG9lcyBub3QgZGVmaW5lIGFueSBhbmltYXRpb24gYmVoYXZpb3IhXG4gKiBFeGFjdGx5IF9ob3dfIGEgbGlzdCBpdGVtIGFuaW1hdGVzIGlzIHVwIHRvIHRoZSBpbmRpdmlkdWFsIGA8VHJhbnNpdGlvbj5gXG4gKiBjb21wb25lbnRzLiBUaGlzIG1lYW5zIHlvdSBjYW4gbWl4IGFuZCBtYXRjaCBhbmltYXRpb25zIGFjcm9zcyBkaWZmZXJlbnRcbiAqIGxpc3QgaXRlbXMuXG4gKi9cblxudmFyIFRyYW5zaXRpb25Hcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUcmFuc2l0aW9uR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb25Hcm91cChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uR3JvdXApO1xuXG4gICAgLy8gSW5pdGlhbCBjaGlsZHJlbiBzaG91bGQgYWxsIGJlIGVudGVyaW5nLCBkZXBlbmRlbnQgb24gYXBwZWFyXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoaWxkcmVuOiAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICAgIG9uRXhpdGVkOiBfdGhpcy5oYW5kbGVFeGl0ZWQuYmluZChfdGhpcywgY2hpbGQpLFxuICAgICAgICAgIGluOiB0cnVlLFxuICAgICAgICAgIGFwcGVhcjogX3RoaXMuZ2V0UHJvcChjaGlsZCwgJ2FwcGVhcicpLFxuICAgICAgICAgIGVudGVyOiBfdGhpcy5nZXRQcm9wKGNoaWxkLCAnZW50ZXInKSxcbiAgICAgICAgICBleGl0OiBfdGhpcy5nZXRQcm9wKGNoaWxkLCAnZXhpdCcpXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uR3JvdXA6IHsgaXNNb3VudGluZzogIXRoaXMuYXBwZWFyZWQgfVxuICAgIH07XG4gIH07XG4gIC8vIHVzZSBjaGlsZCBjb25maWcgdW5sZXNzIGV4cGxpY3RseSBzZXQgYnkgdGhlIEdyb3VwXG5cblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmdldFByb3AgPSBmdW5jdGlvbiBnZXRQcm9wKGNoaWxkLCBwcm9wKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHByb3BzW3Byb3BdICE9IG51bGwgPyBwcm9wc1twcm9wXSA6IGNoaWxkLnByb3BzW3Byb3BdO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmFwcGVhcmVkID0gdHJ1ZTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgIHZhciBuZXh0Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShuZXh0UHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gKDAsIF9DaGlsZE1hcHBpbmcubWVyZ2VDaGlsZE1hcHBpbmdzKShwcmV2Q2hpbGRNYXBwaW5nLCBuZXh0Q2hpbGRNYXBwaW5nKTtcblxuICAgIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2tleV07XG5cbiAgICAgIGlmICghKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoY2hpbGQpKSByZXR1cm47XG5cbiAgICAgIHZhciBoYXNQcmV2ID0ga2V5IGluIHByZXZDaGlsZE1hcHBpbmc7XG4gICAgICB2YXIgaGFzTmV4dCA9IGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nO1xuXG4gICAgICB2YXIgcHJldkNoaWxkID0gcHJldkNoaWxkTWFwcGluZ1trZXldO1xuICAgICAgdmFyIGlzTGVhdmluZyA9ICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKHByZXZDaGlsZCkgJiYgIXByZXZDaGlsZC5wcm9wcy5pbjtcblxuICAgICAgLy8gaXRlbSBpcyBuZXcgKGVudGVyaW5nKVxuICAgICAgaWYgKGhhc05leHQgJiYgKCFoYXNQcmV2IHx8IGlzTGVhdmluZykpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGVyaW5nJywga2V5KVxuICAgICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgICAgb25FeGl0ZWQ6IF90aGlzMi5oYW5kbGVFeGl0ZWQuYmluZChfdGhpczIsIGNoaWxkKSxcbiAgICAgICAgICBpbjogdHJ1ZSxcbiAgICAgICAgICBleGl0OiBfdGhpczIuZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICAgIGVudGVyOiBfdGhpczIuZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGl0ZW0gaXMgb2xkIChleGl0aW5nKVxuICAgICAgZWxzZSBpZiAoIWhhc05leHQgJiYgaGFzUHJldiAmJiAhaXNMZWF2aW5nKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xlYXZpbmcnLCBrZXkpXG4gICAgICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgeyBpbjogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXRlbSBoYXNuJ3QgY2hhbmdlZCB0cmFuc2l0aW9uIHN0YXRlc1xuICAgICAgICAvLyBjb3B5IG92ZXIgdGhlIGxhc3QgdHJhbnNpdGlvbiBwcm9wcztcbiAgICAgICAgZWxzZSBpZiAoaGFzTmV4dCAmJiBoYXNQcmV2ICYmICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKHByZXZDaGlsZCkpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1bmNoYW5nZWQnLCBrZXkpXG4gICAgICAgICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgICAgICAgIG9uRXhpdGVkOiBfdGhpczIuaGFuZGxlRXhpdGVkLmJpbmQoX3RoaXMyLCBjaGlsZCksXG4gICAgICAgICAgICAgIGluOiBwcmV2Q2hpbGQucHJvcHMuaW4sXG4gICAgICAgICAgICAgIGV4aXQ6IF90aGlzMi5nZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgICAgICAgIGVudGVyOiBfdGhpczIuZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZChjaGlsZCwgbm9kZSkge1xuICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgIGlmIChjaGlsZC5rZXkgaW4gY3VycmVudENoaWxkTWFwcGluZykgcmV0dXJuO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gX2V4dGVuZHMoe30sIHN0YXRlLmNoaWxkcmVuKTtcblxuICAgICAgZGVsZXRlIGNoaWxkcmVuW2NoaWxkLmtleV07XG4gICAgICByZXR1cm4geyBjaGlsZHJlbjogY2hpbGRyZW4gfTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3Byb3BzLmNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRGYWN0b3J5ID0gX3Byb3BzLmNoaWxkRmFjdG9yeSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbXBvbmVudCcsICdjaGlsZEZhY3RvcnknXSk7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB2YWx1ZXModGhpcy5zdGF0ZS5jaGlsZHJlbikubWFwKGNoaWxkRmFjdG9yeSk7XG5cbiAgICBkZWxldGUgcHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBwcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgcHJvcHMuZXhpdDtcblxuICAgIGlmIChDb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcHJvcHMsXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb25Hcm91cDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb25Hcm91cC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5cblRyYW5zaXRpb25Hcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYW5zaXRpb25Hcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuL3Jvd3MnO1xuXG5leHBvcnQgY29uc3QgaXNTZWxlY3RlZEFsbCA9ICh7IGRhdGEsIHNlbGVjdGVkIH0pID0+IGRhdGEubGVuZ3RoID09PSBzZWxlY3RlZC5sZW5ndGg7XG5cbmV4cG9ydCBjb25zdCBpc0FueVNlbGVjdGVkUm93ID0gKHsgc2VsZWN0ZWQgfSkgPT4gKHNraXBzID0gW10pID0+IHtcbiAgaWYgKHNraXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBzZWxlY3RlZC5sZW5ndGggPiAwO1xuICB9XG4gIHJldHVybiBzZWxlY3RlZC5maWx0ZXIoeCA9PiAhc2tpcHMuaW5jbHVkZXMoeCkpLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RhYmxlS2V5cyA9ICh7IGRhdGEsIGtleUZpZWxkIH0pID0+IChza2lwcyA9IFtdKSA9PiB7XG4gIGlmIChza2lwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZGF0YS5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbiAgfVxuICByZXR1cm4gZGF0YVxuICAgIC5maWx0ZXIocm93ID0+ICFza2lwcy5pbmNsdWRlcyhfLmdldChyb3csIGtleUZpZWxkKSkpXG4gICAgLm1hcChyb3cgPT4gXy5nZXQocm93LCBrZXlGaWVsZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVuU2VsZWN0YWJsZUtleXMgPSAoeyBzZWxlY3RlZCB9KSA9PiAoc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBzZWxlY3RlZC5maWx0ZXIoeCA9PiBza2lwcy5pbmNsdWRlcyh4KSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRSb3dzID0gKHN0b3JlKSA9PiB7XG4gIGNvbnN0IGdldFJvdyA9IGdldFJvd0J5Um93SWQoc3RvcmUpO1xuICByZXR1cm4gc3RvcmUuc2VsZWN0ZWQubWFwKGsgPT4gZ2V0Um93KGspKTtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NlbGVjdGlvbi5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBSZW1vdGVSZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIGdldE5ld2VzdFN0YXRlKHN0YXRlID0ge30pIHtcbiAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdG9yZSB8fCB0aGlzLnByb3BzLnN0b3JlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZTogc3RvcmUucGFnZSxcbiAgICAgICAgc2l6ZVBlclBhZ2U6IHN0b3JlLnNpemVQZXJQYWdlLFxuICAgICAgICBmaWx0ZXJzOiBzdG9yZS5maWx0ZXJzLFxuICAgICAgICBzb3J0RmllbGQ6IHN0b3JlLnNvcnRGaWVsZCxcbiAgICAgICAgc29ydE9yZGVyOiBzdG9yZS5zb3J0T3JkZXIsXG4gICAgICAgIGRhdGE6IHN0b3JlLmdldEFsbERhdGEoKSxcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaXNSZW1vdGVQYWdpbmF0aW9uKCkge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLnBhZ2luYXRpb24pO1xuICAgIH1cblxuICAgIGlzUmVtb3RlRmlsdGVyaW5nKCkge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLmZpbHRlcik7XG4gICAgfVxuXG4gICAgaXNSZW1vdGVTb3J0KCkge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLnNvcnQpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlQ2VsbEVkaXQoKSB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuY2VsbEVkaXQpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UoKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ3BhZ2luYXRpb24nLCB0aGlzLmdldE5ld2VzdFN0YXRlKCkpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZUZpbHRlckNoYW5nZSgpIHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge307XG4gICAgICBpZiAodGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wcm9wcy5wYWdpbmF0aW9uLm9wdGlvbnMgfHwge307XG4gICAgICAgIG5ld1N0YXRlLnBhZ2UgPSBfLmlzRGVmaW5lZChvcHRpb25zLnBhZ2VTdGFydEluZGV4KSA/IG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggOiAxO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdmaWx0ZXInLCB0aGlzLmdldE5ld2VzdFN0YXRlKG5ld1N0YXRlKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU29ydENoYW5nZSgpIHtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgnc29ydCcsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2VsbENoYW5nZShyb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSkge1xuICAgICAgY29uc3QgY2VsbEVkaXQgPSB7IHJvd0lkLCBkYXRhRmllbGQsIG5ld1ZhbHVlIH07XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ2NlbGxFZGl0JywgdGhpcy5nZXROZXdlc3RTdGF0ZSh7IGNlbGxFZGl0IH0pKTtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9yZW1vdGUtcmVzb2x2ZXIuanMiLCJpbXBvcnQgQm9vdHN0cmFwVGFibGUgZnJvbSAnLi9zcmMvYm9vdHN0cmFwLXRhYmxlJztcbmltcG9ydCB3aXRoRGF0YVN0b3JlIGZyb20gJy4vc3JjL2NvbnRhaW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhU3RvcmUoQm9vdHN0cmFwVGFibGUpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL2luZGV4LmpzIiwiLyogZXNsaW50IGFycm93LWJvZHktc3R5bGU6IDAgKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IENhcHRpb24gZnJvbSAnLi9jYXB0aW9uJztcbmltcG9ydCBCb2R5IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgUHJvcHNCYXNlUmVzb2x2ZXIgZnJvbSAnLi9wcm9wcy1yZXNvbHZlcic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgeyBpc1NlbGVjdGVkQWxsIH0gZnJvbSAnLi9zdG9yZS9zZWxlY3Rpb24nO1xuXG5jbGFzcyBCb290c3RyYXBUYWJsZSBleHRlbmRzIFByb3BzQmFzZVJlc29sdmVyKENvbXBvbmVudCkge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBwcm9wcy5kYXRhXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBuZXh0UHJvcHMuZGF0YVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgb3ZlcmxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0YWJsZSA9IHRoaXMucmVuZGVyVGFibGUoKTtcbiAgICBpZiAobG9hZGluZyAmJiBvdmVybGF5KSB7XG4gICAgICBjb25zdCBMb2FkaW5nT3ZlcmxheSA9IG92ZXJsYXkodGFibGUsIGxvYWRpbmcpO1xuICAgICAgcmV0dXJuIDxMb2FkaW5nT3ZlcmxheSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG5cbiAgcmVuZGVyVGFibGUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RvcmUsXG4gICAgICBjb2x1bW5zLFxuICAgICAga2V5RmllbGQsXG4gICAgICBpZCxcbiAgICAgIGNsYXNzZXMsXG4gICAgICBzdHJpcGVkLFxuICAgICAgaG92ZXIsXG4gICAgICBib3JkZXJlZCxcbiAgICAgIGNvbmRlbnNlZCxcbiAgICAgIG5vRGF0YUluZGljYXRpb24sXG4gICAgICBjYXB0aW9uLFxuICAgICAgcm93U3R5bGUsXG4gICAgICByb3dDbGFzc2VzLFxuICAgICAgd3JhcHBlckNsYXNzZXMsXG4gICAgICByb3dFdmVudHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRhYmxlV3JhcHBlckNsYXNzID0gY3MoJ3JlYWN0LWJvb3RzdHJhcC10YWJsZScsIHdyYXBwZXJDbGFzc2VzKTtcblxuICAgIGNvbnN0IHRhYmxlQ2xhc3MgPSBjcygndGFibGUnLCB7XG4gICAgICAndGFibGUtc3RyaXBlZCc6IHN0cmlwZWQsXG4gICAgICAndGFibGUtaG92ZXInOiBob3ZlcixcbiAgICAgICd0YWJsZS1ib3JkZXJlZCc6IGJvcmRlcmVkLFxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IGNvbmRlbnNlZFxuICAgIH0sIGNsYXNzZXMpO1xuXG4gICAgY29uc3QgY2VsbFNlbGVjdGlvbkluZm8gPSB0aGlzLnJlc29sdmVTZWxlY3RSb3dQcm9wcyh7XG4gICAgICBvblJvd1NlbGVjdDogdGhpcy5wcm9wcy5vblJvd1NlbGVjdFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVyQ2VsbFNlbGVjdGlvbkluZm8gPSB0aGlzLnJlc29sdmVTZWxlY3RSb3dQcm9wc0ZvckhlYWRlcih7XG4gICAgICBvbkFsbFJvd3NTZWxlY3Q6IHRoaXMucHJvcHMub25BbGxSb3dzU2VsZWN0LFxuICAgICAgc2VsZWN0ZWQ6IHN0b3JlLnNlbGVjdGVkLFxuICAgICAgYWxsUm93c1NlbGVjdGVkOiBpc1NlbGVjdGVkQWxsKHN0b3JlKVxuICAgIH0pO1xuXG4gICAgY29uc3QgdGFibGVDYXB0aW9uID0gKGNhcHRpb24gJiYgPENhcHRpb24+eyBjYXB0aW9uIH08L0NhcHRpb24+KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRhYmxlV3JhcHBlckNsYXNzIH0+XG4gICAgICAgIDx0YWJsZSBpZD17IGlkIH0gY2xhc3NOYW1lPXsgdGFibGVDbGFzcyB9PlxuICAgICAgICAgIHsgdGFibGVDYXB0aW9uIH1cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBjb2x1bW5zPXsgY29sdW1ucyB9XG4gICAgICAgICAgICBzb3J0RmllbGQ9eyBzdG9yZS5zb3J0RmllbGQgfVxuICAgICAgICAgICAgc29ydE9yZGVyPXsgc3RvcmUuc29ydE9yZGVyIH1cbiAgICAgICAgICAgIG9uU29ydD17IHRoaXMucHJvcHMub25Tb3J0IH1cbiAgICAgICAgICAgIG9uRmlsdGVyPXsgdGhpcy5wcm9wcy5vbkZpbHRlciB9XG4gICAgICAgICAgICBzZWxlY3RSb3c9eyBoZWFkZXJDZWxsU2VsZWN0aW9uSW5mbyB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm9keVxuICAgICAgICAgICAgZGF0YT17IHRoaXMuc3RhdGUuZGF0YSB9XG4gICAgICAgICAgICBrZXlGaWVsZD17IGtleUZpZWxkIH1cbiAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgIGlzRW1wdHk9eyB0aGlzLmlzRW1wdHkoKSB9XG4gICAgICAgICAgICB2aXNpYmxlQ29sdW1uU2l6ZT17IHRoaXMudmlzaWJsZUNvbHVtblNpemUoKSB9XG4gICAgICAgICAgICBub0RhdGFJbmRpY2F0aW9uPXsgbm9EYXRhSW5kaWNhdGlvbiB9XG4gICAgICAgICAgICBjZWxsRWRpdD17IHRoaXMucHJvcHMuY2VsbEVkaXQgfHwge30gfVxuICAgICAgICAgICAgc2VsZWN0Um93PXsgY2VsbFNlbGVjdGlvbkluZm8gfVxuICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzPXsgc3RvcmUuc2VsZWN0ZWQgfVxuICAgICAgICAgICAgcm93U3R5bGU9eyByb3dTdHlsZSB9XG4gICAgICAgICAgICByb3dDbGFzc2VzPXsgcm93Q2xhc3NlcyB9XG4gICAgICAgICAgICByb3dFdmVudHM9eyByb3dFdmVudHMgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJvb3RzdHJhcFRhYmxlLnByb3BUeXBlcyA9IHtcbiAga2V5RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICByZW1vdGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhZ2luYXRpb246IFByb3BUeXBlcy5ib29sXG4gIH0pXSksXG4gIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBub0RhdGFJbmRpY2F0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29uZGVuc2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2FwdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xuICBdKSxcbiAgcGFnaW5hdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjZWxsRWRpdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1vZGU6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUsIENvbnN0LlJPV19TRUxFQ1RfTVVMVElQTEVdKS5pc1JlcXVpcmVkLFxuICAgIGNsaWNrVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrVG9FZGl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgbm9uU2VsZWN0YWJsZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGlkZVNlbGVjdENvbHVtbjogUHJvcFR5cGVzLmJvb2xcbiAgfSksXG4gIG9uUm93U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25BbGxSb3dzU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgcm93U3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gIHJvd0V2ZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgcm93Q2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgZGVmYXVsdFNvcnRlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkYXRhRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSkuaXNSZXF1aXJlZFxuICB9KSksXG4gIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfREVTQywgQ29uc3QuU09SVF9BU0NdKSxcbiAgb3ZlcmxheTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGFibGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkJvb3RzdHJhcFRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVtb3RlOiBmYWxzZSxcbiAgc3RyaXBlZDogZmFsc2UsXG4gIGJvcmRlcmVkOiB0cnVlLFxuICBob3ZlcjogZmFsc2UsXG4gIGNvbmRlbnNlZDogZmFsc2UsXG4gIG5vRGF0YUluZGljYXRpb246IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3RzdHJhcFRhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9vdHN0cmFwLXRhYmxlLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmltcG9ydCBIZWFkZXJDZWxsIGZyb20gJy4vaGVhZGVyLWNlbGwnO1xuaW1wb3J0IFNlbGVjdGlvbkhlYWRlckNlbGwgZnJvbSAnLi9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbCc7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IFJPV19TRUxFQ1RfRElTQUJMRUQgfSA9IENvbnN0O1xuXG4gIGNvbnN0IHtcbiAgICBjb2x1bW5zLFxuICAgIG9uU29ydCxcbiAgICBvbkZpbHRlcixcbiAgICBzb3J0RmllbGQsXG4gICAgc29ydE9yZGVyLFxuICAgIHNlbGVjdFJvd1xuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIHtcbiAgICAgICAgICAoc2VsZWN0Um93Lm1vZGUgIT09IFJPV19TRUxFQ1RfRElTQUJMRUQgJiYgIXNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uKVxuICAgICAgICAgICAgPyA8U2VsZWN0aW9uSGVhZGVyQ2VsbCB7IC4uLnNlbGVjdFJvdyB9IC8+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBjb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvbHVtbi5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VyclNvcnQgPSBjb2x1bW4uZGF0YUZpZWxkID09PSBzb3J0RmllbGQ7XG4gICAgICAgICAgICAgIGNvbnN0IGlzTGFzdFNvcnRpbmcgPSBjb2x1bW4uZGF0YUZpZWxkID09PSBzb3J0RmllbGQ7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbFxuICAgICAgICAgICAgICAgICAgaW5kZXg9eyBpIH1cbiAgICAgICAgICAgICAgICAgIGtleT17IGNvbHVtbi5kYXRhRmllbGQgfVxuICAgICAgICAgICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICAgICAgICAgIG9uU29ydD17IG9uU29ydCB9XG4gICAgICAgICAgICAgICAgICBzb3J0aW5nPXsgY3VyclNvcnQgfVxuICAgICAgICAgICAgICAgICAgb25GaWx0ZXI9eyBvbkZpbHRlciB9XG4gICAgICAgICAgICAgICAgICBzb3J0T3JkZXI9eyBzb3J0T3JkZXIgfVxuICAgICAgICAgICAgICAgICAgaXNMYXN0U29ydGluZz17IGlzTGFzdFNvcnRpbmcgfVxuICAgICAgICAgICAgICAgIC8+KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICk7XG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBzb3J0RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNvcnRPcmRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IFNvcnRTeW1ib2wgZnJvbSAnLi9zb3J0L3N5bWJvbCc7XG5pbXBvcnQgU29ydENhcmV0IGZyb20gJy4vc29ydC9jYXJldCc7XG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuXG5jb25zdCBIZWFkZXJDZWxsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2x1bW4sXG4gICAgaW5kZXgsXG4gICAgb25Tb3J0LFxuICAgIHNvcnRpbmcsXG4gICAgc29ydE9yZGVyLFxuICAgIGlzTGFzdFNvcnRpbmcsXG4gICAgb25GaWx0ZXJcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICB0ZXh0LFxuICAgIHNvcnQsXG4gICAgZmlsdGVyLFxuICAgIGhlYWRlclRpdGxlLFxuICAgIGhlYWRlckFsaWduLFxuICAgIGhlYWRlckZvcm1hdHRlcixcbiAgICBoZWFkZXJFdmVudHMsXG4gICAgaGVhZGVyQ2xhc3NlcyxcbiAgICBoZWFkZXJTdHlsZSxcbiAgICBoZWFkZXJBdHRycyxcbiAgICBoZWFkZXJTb3J0aW5nQ2xhc3NlcyxcbiAgICBoZWFkZXJTb3J0aW5nU3R5bGVcbiAgfSA9IGNvbHVtbjtcblxuICBjb25zdCBjZWxsQXR0cnMgPSB7XG4gICAgLi4uXy5pc0Z1bmN0aW9uKGhlYWRlckF0dHJzKSA/IGhlYWRlckF0dHJzKGNvbHVtbiwgaW5kZXgpIDogaGVhZGVyQXR0cnMsXG4gICAgLi4uaGVhZGVyRXZlbnRzXG4gIH07XG5cbiAgbGV0IHNvcnRTeW1ib2w7XG4gIGxldCBmaWx0ZXJFbG07XG4gIGxldCBjZWxsU3R5bGUgPSB7fTtcbiAgbGV0IGNlbGxDbGFzc2VzID0gXy5pc0Z1bmN0aW9uKGhlYWRlckNsYXNzZXMpID8gaGVhZGVyQ2xhc3Nlcyhjb2x1bW4sIGluZGV4KSA6IGhlYWRlckNsYXNzZXM7XG5cbiAgaWYgKGhlYWRlclN0eWxlKSB7XG4gICAgY2VsbFN0eWxlID0gXy5pc0Z1bmN0aW9uKGhlYWRlclN0eWxlKSA/IGhlYWRlclN0eWxlKGNvbHVtbiwgaW5kZXgpIDogaGVhZGVyU3R5bGU7XG4gIH1cblxuICBpZiAoaGVhZGVyVGl0bGUpIHtcbiAgICBjZWxsQXR0cnMudGl0bGUgPSBfLmlzRnVuY3Rpb24oaGVhZGVyVGl0bGUpID8gaGVhZGVyVGl0bGUoY29sdW1uLCBpbmRleCkgOiB0ZXh0O1xuICB9XG5cbiAgaWYgKGhlYWRlckFsaWduKSB7XG4gICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9IF8uaXNGdW5jdGlvbihoZWFkZXJBbGlnbikgPyBoZWFkZXJBbGlnbihjb2x1bW4sIGluZGV4KSA6IGhlYWRlckFsaWduO1xuICB9XG5cbiAgaWYgKHNvcnQpIHtcbiAgICBjb25zdCBjdXN0b21DbGljayA9IGNlbGxBdHRycy5vbkNsaWNrO1xuICAgIGNlbGxBdHRycy5vbkNsaWNrID0gKGUpID0+IHtcbiAgICAgIG9uU29ydChjb2x1bW4pO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21DbGljaykpIGN1c3RvbUNsaWNrKGUpO1xuICAgIH07XG4gICAgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNzKGNlbGxBdHRycy5jbGFzc05hbWUsICdzb3J0YWJsZScpO1xuXG4gICAgaWYgKHNvcnRpbmcpIHtcbiAgICAgIHNvcnRTeW1ib2wgPSA8U29ydENhcmV0IG9yZGVyPXsgc29ydE9yZGVyIH0gLz47XG5cbiAgICAgIC8vIGFwcGVuZCBjdXN0b21pemVkIGNsYXNzZXMgb3Igc3R5bGUgaWYgdGFibGUgd2FzIHNvcnRpbmcgYmFzZWQgb24gdGhlIGN1cnJlbnQgY29sdW1uLlxuICAgICAgY2VsbENsYXNzZXMgPSBjcyhcbiAgICAgICAgY2VsbENsYXNzZXMsXG4gICAgICAgIF8uaXNGdW5jdGlvbihoZWFkZXJTb3J0aW5nQ2xhc3NlcylcbiAgICAgICAgICA/IGhlYWRlclNvcnRpbmdDbGFzc2VzKGNvbHVtbiwgc29ydE9yZGVyLCBpc0xhc3RTb3J0aW5nLCBpbmRleClcbiAgICAgICAgICA6IGhlYWRlclNvcnRpbmdDbGFzc2VzXG4gICAgICApO1xuXG4gICAgICBjZWxsU3R5bGUgPSB7XG4gICAgICAgIC4uLmNlbGxTdHlsZSxcbiAgICAgICAgLi4uXy5pc0Z1bmN0aW9uKGhlYWRlclNvcnRpbmdTdHlsZSlcbiAgICAgICAgICA/IGhlYWRlclNvcnRpbmdTdHlsZShjb2x1bW4sIHNvcnRPcmRlciwgaXNMYXN0U29ydGluZywgaW5kZXgpXG4gICAgICAgICAgOiBoZWFkZXJTb3J0aW5nU3R5bGVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRTeW1ib2wgPSA8U29ydFN5bWJvbCAvPjtcbiAgICB9XG4gIH1cblxuICBpZiAoY2VsbENsYXNzZXMpIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjcyhjZWxsQXR0cnMuY2xhc3NOYW1lLCBjZWxsQ2xhc3Nlcyk7XG4gIGlmICghXy5pc0VtcHR5T2JqZWN0KGNlbGxTdHlsZSkpIGNlbGxBdHRycy5zdHlsZSA9IGNlbGxTdHlsZTtcbiAgaWYgKGZpbHRlcikge1xuICAgIGZpbHRlckVsbSA9IDxmaWx0ZXIuRmlsdGVyIHsgLi4uZmlsdGVyLnByb3BzIH0gb25GaWx0ZXI9eyBvbkZpbHRlciB9IGNvbHVtbj17IGNvbHVtbiB9IC8+O1xuICB9XG5cbiAgY29uc3QgY2hpbGRyZW4gPSBoZWFkZXJGb3JtYXR0ZXIgP1xuICAgIGhlYWRlckZvcm1hdHRlcihjb2x1bW4sIGluZGV4LCB7IHNvcnRFbGVtZW50OiBzb3J0U3ltYm9sLCBmaWx0ZXJFbGVtZW50OiBmaWx0ZXJFbG0gfSkgOlxuICAgIHRleHQ7XG5cbiAgaWYgKGhlYWRlckZvcm1hdHRlcikge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIGNlbGxBdHRycywgY2hpbGRyZW4pO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBjaGlsZHJlbiwgc29ydFN5bWJvbCwgZmlsdGVyRWxtKTtcbn07XG5cbkhlYWRlckNlbGwucHJvcFR5cGVzID0ge1xuICBjb2x1bW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyRm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZvcm1hdEV4dHJhRGF0YTogUHJvcFR5cGVzLmFueSxcbiAgICBoZWFkZXJDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyVGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJFdmVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZXZlbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGhlYWRlckFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlckF0dHJzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGF0dHJzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHNvcnQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNvcnRGdW5jOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGVkaXRvcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBlZGl0YWJsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdENlbGxTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0Q2VsbENsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdG9yU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdG9yQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0b3JSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZmlsdGVyVmFsdWU6IFByb3BUeXBlcy5mdW5jXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIHNvcnRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzb3J0T3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9BU0MsIENvbnN0LlNPUlRfREVTQ10pLFxuICBpc0xhc3RTb3J0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDZWxsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLWNlbGwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTb3J0U3ltYm9sID0gKCkgPT4gKFxuICA8c3BhbiBjbGFzc05hbWU9XCJvcmRlclwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIC8+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3B1cFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgIDwvc3Bhbj5cbiAgPC9zcGFuPik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L3N5bWJvbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuXG5jb25zdCBTb3J0Q2FyZXQgPSAoeyBvcmRlciB9KSA9PiB7XG4gIGNvbnN0IG9yZGVyQ2xhc3MgPSBjcygncmVhY3QtYm9vdHN0cmFwLXRhYmxlLXNvcnQtb3JkZXInLCB7XG4gICAgZHJvcHVwOiBvcmRlciA9PT0gQ29uc3QuU09SVF9BU0NcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPXsgb3JkZXJDbGFzcyB9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cblNvcnRDYXJldC5wcm9wVHlwZXMgPSB7XG4gIG9yZGVyOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfQVNDLCBDb25zdC5TT1JUX0RFU0NdKS5pc1JlcXVpcmVkXG59O1xuZXhwb3J0IGRlZmF1bHQgU29ydENhcmV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9jYXJldC5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZXhwb3J0IGNvbnN0IENoZWNrQm94ID0gKHsgY2hlY2tlZCwgaW5kZXRlcm1pbmF0ZSB9KSA9PiAoXG4gIDxpbnB1dFxuICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgY2hlY2tlZD17IGNoZWNrZWQgfVxuICAgIHJlZj17IChpbnB1dCkgPT4ge1xuICAgICAgaWYgKGlucHV0KSBpbnB1dC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH0gfVxuICAvPlxuKTtcblxuQ2hlY2tCb3gucHJvcFR5cGVzID0ge1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpbmRldGVybWluYXRlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Rpb25IZWFkZXJDZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtb2RlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tlZFN0YXR1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkFsbFJvd3NTZWxlY3Q6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIGF2b2lkIHVwZGF0aW5nIGlmIGJ1dHRvbiBpc1xuICAgKiAxLiByYWRpb1xuICAgKiAyLiBzdGF0dXMgd2FzIG5vdCBjaGFuZ2VkLlxuICAgKi9cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHsgUk9XX1NFTEVDVF9TSU5HTEUgfSA9IENvbnN0O1xuICAgIGNvbnN0IHsgbW9kZSwgY2hlY2tlZFN0YXR1cyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChtb2RlID09PSBST1dfU0VMRUNUX1NJTkdMRSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5leHRQcm9wcy5jaGVja2VkU3RhdHVzICE9PSBjaGVja2VkU3RhdHVzO1xuICB9XG5cbiAgaGFuZGxlQ2hlY2tCb3hDbGljayhlKSB7XG4gICAgY29uc3QgeyBvbkFsbFJvd3NTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBvbkFsbFJvd3NTZWxlY3QoZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQsIENIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFLCBST1dfU0VMRUNUX1NJTkdMRVxuICAgIH0gPSBDb25zdDtcblxuICAgIGNvbnN0IHsgbW9kZSwgY2hlY2tlZFN0YXR1cyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNoZWNrZWQgPSBjaGVja2VkU3RhdHVzID09PSBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRDtcblxuICAgIGNvbnN0IGluZGV0ZXJtaW5hdGUgPSBjaGVja2VkU3RhdHVzID09PSBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgIHJldHVybiBtb2RlID09PSBST1dfU0VMRUNUX1NJTkdMRVxuICAgICAgPyA8dGggZGF0YS1yb3ctc2VsZWN0aW9uIC8+XG4gICAgICA6IChcbiAgICAgICAgPHRoIGRhdGEtcm93LXNlbGVjdGlvbiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDaGVja0JveENsaWNrIH0+XG4gICAgICAgICAgPENoZWNrQm94XG4gICAgICAgICAgICB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgICAgY2hlY2tlZD17IGNoZWNrZWQgfVxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17IGluZGV0ZXJtaW5hdGUgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGg+XG4gICAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBDYXB0aW9uID0gKHByb3BzKSA9PiB7XG4gIGlmICghcHJvcHMuY2hpbGRyZW4pIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxjYXB0aW9uPnsgcHJvcHMuY2hpbGRyZW4gfTwvY2FwdGlvbj5cbiAgKTtcbn07XG5cbkNhcHRpb24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xuICBdKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NhcHRpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IENTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBSb3cgZnJvbSAnLi9yb3cnO1xuaW1wb3J0IFJvd1NlY3Rpb24gZnJvbSAnLi9yb3ctc2VjdGlvbic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmNvbnN0IEJvZHkgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbHVtbnMsXG4gICAgZGF0YSxcbiAgICBrZXlGaWVsZCxcbiAgICBpc0VtcHR5LFxuICAgIG5vRGF0YUluZGljYXRpb24sXG4gICAgdmlzaWJsZUNvbHVtblNpemUsXG4gICAgY2VsbEVkaXQsXG4gICAgc2VsZWN0Um93LFxuICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICByb3dTdHlsZSxcbiAgICByb3dDbGFzc2VzLFxuICAgIHJvd0V2ZW50c1xuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIGJnQ29sb3IsXG4gICAgbm9uU2VsZWN0YWJsZVxuICB9ID0gc2VsZWN0Um93O1xuXG4gIGxldCBjb250ZW50O1xuXG4gIGlmIChpc0VtcHR5KSB7XG4gICAgY29uc3QgaW5kaWNhdGlvbiA9IF8uaXNGdW5jdGlvbihub0RhdGFJbmRpY2F0aW9uKSA/IG5vRGF0YUluZGljYXRpb24oKSA6IG5vRGF0YUluZGljYXRpb247XG4gICAgaWYgKCFpbmRpY2F0aW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29udGVudCA9IDxSb3dTZWN0aW9uIGNvbnRlbnQ9eyBpbmRpY2F0aW9uIH0gY29sU3Bhbj17IHZpc2libGVDb2x1bW5TaXplIH0gLz47XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uRWRpdGFibGVSb3dzID0gY2VsbEVkaXQubm9uRWRpdGFibGVSb3dzIHx8IFtdO1xuICAgIGNvbnRlbnQgPSBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gXy5nZXQocm93LCBrZXlGaWVsZCk7XG4gICAgICBjb25zdCBlZGl0YWJsZSA9ICEobm9uRWRpdGFibGVSb3dzLmxlbmd0aCA+IDAgJiYgbm9uRWRpdGFibGVSb3dzLmluZGV4T2Yoa2V5KSA+IC0xKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RSb3cubW9kZSAhPT0gQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRFxuICAgICAgICA/IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpXG4gICAgICAgIDogbnVsbDtcblxuICAgICAgY29uc3QgYXR0cnMgPSByb3dFdmVudHMgfHwge307XG4gICAgICBsZXQgc3R5bGUgPSBfLmlzRnVuY3Rpb24ocm93U3R5bGUpID8gcm93U3R5bGUocm93LCBpbmRleCkgOiByb3dTdHlsZTtcbiAgICAgIGxldCBjbGFzc2VzID0gKF8uaXNGdW5jdGlvbihyb3dDbGFzc2VzKSA/IHJvd0NsYXNzZXMocm93LCBpbmRleCkgOiByb3dDbGFzc2VzKTtcbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFN0eWxlID0gXy5pc0Z1bmN0aW9uKHNlbGVjdFJvdy5zdHlsZSlcbiAgICAgICAgICA/IHNlbGVjdFJvdy5zdHlsZShyb3csIGluZGV4KVxuICAgICAgICAgIDogc2VsZWN0Um93LnN0eWxlO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cuY2xhc3NlcylcbiAgICAgICAgICA/IHNlbGVjdFJvdy5jbGFzc2VzKHJvdywgaW5kZXgpXG4gICAgICAgICAgOiBzZWxlY3RSb3cuY2xhc3NlcztcblxuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAuLi5zZWxlY3RlZFN0eWxlXG4gICAgICAgIH07XG4gICAgICAgIGNsYXNzZXMgPSBjcyhjbGFzc2VzLCBzZWxlY3RlZENsYXNzZXMpO1xuXG4gICAgICAgIGlmIChiZ0NvbG9yKSB7XG4gICAgICAgICAgc3R5bGUgPSBzdHlsZSB8fCB7fTtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBfLmlzRnVuY3Rpb24oYmdDb2xvcikgPyBiZ0NvbG9yKHJvdywgaW5kZXgpIDogYmdDb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RhYmxlID0gIW5vblNlbGVjdGFibGUgfHwgIW5vblNlbGVjdGFibGUuaW5jbHVkZXMoa2V5KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBrZXk9eyBgY3NzLXRyYW5zaXRpb24tJHtrZXl9YCB9XG4gICAgICAgICAgY2xhc3NOYW1lcz1cInRyXCJcbiAgICAgICAgICB0aW1lb3V0PXsgNTAwIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgIGtleT17IGtleSB9XG4gICAgICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICAgICAga2V5RmllbGQ9eyBrZXlGaWVsZCB9XG4gICAgICAgICAgICByb3dJbmRleD17IGluZGV4IH1cbiAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgIGNlbGxFZGl0PXsgY2VsbEVkaXQgfVxuICAgICAgICAgICAgZWRpdGFibGU9eyBlZGl0YWJsZSB9XG4gICAgICAgICAgICBzZWxlY3RhYmxlPXsgc2VsZWN0YWJsZSB9XG4gICAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzZXMgfVxuICAgICAgICAgICAgYXR0cnM9eyBhdHRycyB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb25Hcm91cFxuICAgICAgY29tcG9uZW50PVwidGJvZHlcIlxuICAgID5cbiAgICAgIHsgY29udGVudCB9XG4gICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICk7XG59O1xuXG5Cb2R5LnByb3BUeXBlcyA9IHtcbiAga2V5RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBzZWxlY3RSb3c6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlbGVjdGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9keS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9DU1NUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9DU1NUcmFuc2l0aW9uJyk7XG5cbnZhciBfQ1NTVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DU1NUcmFuc2l0aW9uKTtcblxudmFyIF9SZXBsYWNlVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vUmVwbGFjZVRyYW5zaXRpb24nKTtcblxudmFyIF9SZXBsYWNlVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZXBsYWNlVHJhbnNpdGlvbik7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uR3JvdXAnKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbkdyb3VwKTtcblxudmFyIF9UcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uJyk7XG5cbnZhciBfVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFuc2l0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRyYW5zaXRpb246IF9UcmFuc2l0aW9uMi5kZWZhdWx0LFxuICBUcmFuc2l0aW9uR3JvdXA6IF9UcmFuc2l0aW9uR3JvdXAyLmRlZmF1bHQsXG4gIFJlcGxhY2VUcmFuc2l0aW9uOiBfUmVwbGFjZVRyYW5zaXRpb24yLmRlZmF1bHQsXG4gIENTU1RyYW5zaXRpb246IF9DU1NUcmFuc2l0aW9uMi5kZWZhdWx0XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wcm9wVHlwZXMpO1xuXG52YXIgX2FkZENsYXNzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MnKTtcblxudmFyIF9hZGRDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRDbGFzcyk7XG5cbnZhciBfcmVtb3ZlQ2xhc3MgPSByZXF1aXJlKCdkb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcycpO1xuXG52YXIgX3JlbW92ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbW92ZUNsYXNzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICgwLCBfYWRkQ2xhc3MyLmRlZmF1bHQpKG5vZGUsIGMpO1xuICB9KTtcbn07XG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gKDAsIF9yZW1vdmVDbGFzczIuZGVmYXVsdCkobm9kZSwgYyk7XG4gIH0pO1xufTtcblxudmFyIHByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBfVHJhbnNpdGlvbjIuZGVmYXVsdC5wcm9wVHlwZXMsIHtcblxuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiBjbGFzc05hbWVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBhcyBpdCBlbnRlcnMsIGV4aXRzIG9yIGhhcyBmaW5pc2hlZCB0aGUgdHJhbnNpdGlvbi5cbiAgICogQSBzaW5nbGUgbmFtZSBjYW4gYmUgcHJvdmlkZWQgYW5kIGl0IHdpbGwgYmUgc3VmZml4ZWQgZm9yIGVhY2ggc3RhZ2U6IGUuZy5cbiAgICpcbiAgICogYGNsYXNzTmFtZXM9XCJmYWRlXCJgIGFwcGxpZXMgYGZhZGUtZW50ZXJgLCBgZmFkZS1lbnRlci1hY3RpdmVgLCBgZmFkZS1lbnRlci1kb25lYCxcbiAgICogYGZhZGUtZXhpdGAsIGBmYWRlLWV4aXQtYWN0aXZlYCwgYGZhZGUtZXhpdC1kb25lYCwgYGZhZGUtYXBwZWFyYCwgYW5kIGBmYWRlLWFwcGVhci1hY3RpdmVgLlxuICAgKiBFYWNoIGluZGl2aWR1YWwgY2xhc3NOYW1lcyBjYW4gYWxzbyBiZSBzcGVjaWZpZWQgaW5kZXBlbmRlbnRseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7XG4gICAqICBhcHBlYXI6ICdteS1hcHBlYXInLFxuICAgKiAgYXBwZWFyQWN0aXZlOiAnbXktYWN0aXZlLWFwcGVhcicsXG4gICAqICBlbnRlcjogJ215LWVudGVyJyxcbiAgICogIGVudGVyQWN0aXZlOiAnbXktYWN0aXZlLWVudGVyJyxcbiAgICogIGVudGVyRG9uZTogJ215LWRvbmUtZW50ZXInLFxuICAgKiAgZXhpdDogJ215LWV4aXQnLFxuICAgKiAgZXhpdEFjdGl2ZTogJ215LWFjdGl2ZS1leGl0JyxcbiAgICogIGV4aXREb25lOiAnbXktZG9uZS1leGl0JyxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB7XG4gICAqICBhcHBlYXI/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBlbnRlcj86IHN0cmluZyxcbiAgICogIGVudGVyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZW50ZXJEb25lPzogc3RyaW5nLFxuICAgKiAgZXhpdD86IHN0cmluZyxcbiAgICogIGV4aXRBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBleGl0RG9uZT86IHN0cmluZyxcbiAgICogfX1cbiAgICovXG4gIGNsYXNzTmFtZXM6IF9Qcm9wVHlwZXMuY2xhc3NOYW1lc1NoYXBlLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yICdhcHBlYXInIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXItYWN0aXZlJyBvclxuICAgKiAnYXBwZWFyLWFjdGl2ZScgY2xhc3MgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3JcbiAgICogJ2FwcGVhcicgY2xhc3NlcyBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdC1hY3RpdmUnIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50XG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3Nlc1xuICAgKiBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZXhpdC1kb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59KTtcblxuLyoqXG4gKiBBIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgdXNpbmcgQ1NTIHRyYW5zaXRpb25zIGFuZCBhbmltYXRpb25zLlxuICogSXQncyBpbnNwaXJlZCBieSB0aGUgZXhjZWxsZW50IFtuZy1hbmltYXRlXShodHRwOi8vd3d3Lm5nYW5pbWF0ZS5vcmcvKSBsaWJyYXJ5LlxuICpcbiAqIGBDU1NUcmFuc2l0aW9uYCBhcHBsaWVzIGEgcGFpciBvZiBjbGFzcyBuYW1lcyBkdXJpbmcgdGhlIGBhcHBlYXJgLCBgZW50ZXJgLFxuICogYW5kIGBleGl0YCBzdGFnZXMgb2YgdGhlIHRyYW5zaXRpb24uIFRoZSBmaXJzdCBjbGFzcyBpcyBhcHBsaWVkIGFuZCB0aGVuIGFcbiAqIHNlY29uZCBcImFjdGl2ZVwiIGNsYXNzIGluIG9yZGVyIHRvIGFjdGl2YXRlIHRoZSBjc3MgYW5pbWF0aW9uLiBBZnRlciB0aGUgYW5pbWF0aW9uLFxuICogbWF0Y2hpbmcgYGRvbmVgIGNsYXNzIG5hbWVzIGFyZSBhcHBsaWVkIHRvIHBlcnNpc3QgdGhlIGFuaW1hdGlvbiBzdGF0ZS5cbiAqXG4gKiBXaGVuIHRoZSBgaW5gIHByb3AgaXMgdG9nZ2xlZCB0byBgdHJ1ZWAgdGhlIENvbXBvbmVudCB3aWxsIGdldFxuICogdGhlIGBleGFtcGxlLWVudGVyYCBDU1MgY2xhc3MgYW5kIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIENTUyBjbGFzc1xuICogYWRkZWQgaW4gdGhlIG5leHQgdGljay4gVGhpcyBpcyBhIGNvbnZlbnRpb24gYmFzZWQgb24gdGhlIGBjbGFzc05hbWVzYCBwcm9wLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvbTc3bDJ2cDAweD9mb250c2l6ZT0xNFwiIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCIgc2FuZGJveD1cImFsbG93LW1vZGFscyBhbGxvdy1mb3JtcyBhbGxvdy1wb3B1cHMgYWxsb3ctc2NyaXB0cyBhbGxvdy1zYW1lLW9yaWdpblwiPjwvaWZyYW1lPlxuICovXG5cbnZhciBDU1NUcmFuc2l0aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENTU1RyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENTU1RyYW5zaXRpb24oKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NUcmFuc2l0aW9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5vbkVudGVyID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMgPSBfdGhpcy5nZXRDbGFzc05hbWVzKGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lcy5jbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXIobm9kZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25FbnRlcmluZyA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMiA9IF90aGlzLmdldENsYXNzTmFtZXMoYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzMi5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyaW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25FbnRlcmVkID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMzID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZW50ZXInKSxcbiAgICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczMuZG9uZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCBhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpO1xuICAgICAgYWRkQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmVkKG5vZGUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uRXhpdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczQgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczQuY2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdhcHBlYXInKTtcbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2VudGVyJyk7XG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vbkV4aXRpbmcgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM1ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM1LmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25FeGl0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM2ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNi5kb25lQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG4gICAgICBhZGRDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBfdGhpcy5wcm9wcy5jbGFzc05hbWVzO1xuXG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGVdIDogY2xhc3NOYW1lcyArICctJyArIHR5cGU7XG5cbiAgICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGUgKyAnQWN0aXZlJ10gOiBjbGFzc05hbWUgKyAnLWFjdGl2ZSc7XG5cbiAgICAgIHZhciBkb25lQ2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZXMgIT09ICdzdHJpbmcnID8gY2xhc3NOYW1lc1t0eXBlICsgJ0RvbmUnXSA6IGNsYXNzTmFtZSArICctZG9uZSc7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWU6IGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZTogZG9uZUNsYXNzTmFtZVxuICAgICAgfTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIENTU1RyYW5zaXRpb24ucHJvdG90eXBlLnJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpIHtcbiAgICB2YXIgX2dldENsYXNzTmFtZXMgPSB0aGlzLmdldENsYXNzTmFtZXModHlwZSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF9nZXRDbGFzc05hbWVzLmNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX2dldENsYXNzTmFtZXMuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lID0gX2dldENsYXNzTmFtZXMuZG9uZUNsYXNzTmFtZTtcblxuICAgIGNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgIGFjdGl2ZUNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuICAgIGRvbmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGUucmVmbG93QW5kQWRkQ2xhc3MgPSBmdW5jdGlvbiByZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGZvciB0byBmb3JjZSBhIHJlcGFpbnQsXG4gICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIHRyYW5zaXRpb24gc3R5bGVzIHdoZW4gYWRkaW5nIGEgY2xhc3MgbmFtZS5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICBub2RlICYmIG5vZGUuc2Nyb2xsVG9wO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgfTtcblxuICBDU1NUcmFuc2l0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZXM7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24yLmRlZmF1bHQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdDogdGhpcy5vbkV4aXQsXG4gICAgICBvbkV4aXRpbmc6IHRoaXMub25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25FeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIENTU1RyYW5zaXRpb247XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDU1NUcmFuc2l0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRDbGFzcztcblxudmFyIF9oYXNDbGFzcyA9IHJlcXVpcmUoJy4vaGFzQ2xhc3MnKTtcblxudmFyIF9oYXNDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNDbGFzcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO2Vsc2UgaWYgKCEoMCwgX2hhc0NsYXNzMi5kZWZhdWx0KShlbGVtZW50LCBjbGFzc05hbWUpKSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnKSArICcgJyArIGNsYXNzTmFtZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9hZGRDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhhc0NsYXNzO1xuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgcmV0dXJuICEhY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7ZWxzZSByZXR1cm4gKFwiIFwiICsgKGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgZWxlbWVudC5jbGFzc05hbWUpICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIikgIT09IC0xO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9oYXNDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHJlcGxhY2VDbGFzc05hbWUob3JpZ0NsYXNzLCBjbGFzc1RvUmVtb3ZlKSB7XG4gIHJldHVybiBvcmlnQ2xhc3MucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NUb1JlbW92ZSArICcoPzpcXFxcc3wkKScsICdnJyksICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7ZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO2Vsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnLCBjbGFzc05hbWUpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uR3JvdXAnKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbkdyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGluOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIGlmIChfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uY291bnQocHJvcHNbcHJvcE5hbWVdKSAhPT0gMikgcmV0dXJuIG5ldyBFcnJvcignXCInICsgcHJvcE5hbWUgKyAnXCIgbXVzdCBiZSBleGFjdGx5IHR3byB0cmFuc2l0aW9uIGNvbXBvbmVudHMuJyk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgYDxSZXBsYWNlVHJhbnNpdGlvbj5gIGNvbXBvbmVudCBpcyBhIHNwZWNpYWxpemVkIGBUcmFuc2l0aW9uYCBjb21wb25lbnRcbiAqIHRoYXQgYW5pbWF0ZXMgYmV0d2VlbiB0d28gY2hpbGRyZW4uXG4gKlxuICogYGBganN4XG4gKiA8UmVwbGFjZVRyYW5zaXRpb24gaW4+XG4gKiAgIDxGYWRlPjxkaXY+SSBhcHBlYXIgZmlyc3Q8L2Rpdj48L0ZhZGU+XG4gKiAgIDxGYWRlPjxkaXY+SSByZXBsYWNlIHRoZSBhYm92ZTwvZGl2PjwvRmFkZT5cbiAqIDwvUmVwbGFjZVRyYW5zaXRpb24+XG4gKiBgYGBcbiAqL1xuXG52YXIgUmVwbGFjZVRyYW5zaXRpb24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVwbGFjZVRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlcGxhY2VUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVwbGFjZVRyYW5zaXRpb24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgUmVwbGFjZVRyYW5zaXRpb24ucHJvdG90eXBlLmhhbmRsZUxpZmVjeWNsZSA9IGZ1bmN0aW9uIGhhbmRsZUxpZmVjeWNsZShoYW5kbGVyLCBpZHgsIG9yaWdpbmFsQXJncykge1xuICAgIHZhciBfY2hpbGQkcHJvcHM7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pW2lkeF07XG5cbiAgICBpZiAoY2hpbGQucHJvcHNbaGFuZGxlcl0pIChfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcylbaGFuZGxlcl0uYXBwbHkoX2NoaWxkJHByb3BzLCBvcmlnaW5hbEFyZ3MpO1xuICAgIGlmICh0aGlzLnByb3BzW2hhbmRsZXJdKSB0aGlzLnByb3BzW2hhbmRsZXJdKCgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpKTtcbiAgfTtcblxuICBSZXBsYWNlVHJhbnNpdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaW5Qcm9wID0gX3Byb3BzLmluLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nLCAnaW4nXSk7XG5cbiAgICB2YXIgX1JlYWN0JENoaWxkcmVuJHRvQXJyID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLFxuICAgICAgICBmaXJzdCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclswXSxcbiAgICAgICAgc2Vjb25kID0gX1JlYWN0JENoaWxkcmVuJHRvQXJyWzFdO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdGVkO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX1RyYW5zaXRpb25Hcm91cDIuZGVmYXVsdCxcbiAgICAgIHByb3BzLFxuICAgICAgaW5Qcm9wID8gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChmaXJzdCwge1xuICAgICAgICBrZXk6ICdmaXJzdCcsXG4gICAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRW50ZXIsXG4gICAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRW50ZXJpbmcsXG4gICAgICAgIG9uRW50ZXJlZDogdGhpcy5oYW5kbGVFbnRlcmVkXG5cbiAgICAgIH0pIDogX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChzZWNvbmQsIHtcbiAgICAgICAga2V5OiAnc2Vjb25kJyxcbiAgICAgICAgb25FbnRlcjogdGhpcy5oYW5kbGVFeGl0LFxuICAgICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUV4aXRpbmcsXG4gICAgICAgIG9uRW50ZXJlZDogdGhpcy5oYW5kbGVFeGl0ZWRcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUmVwbGFjZVRyYW5zaXRpb247XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHRoaXMuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcicsIDAsIGFyZ3MpO1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlRW50ZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmluZycsIDAsIGFyZ3MpO1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlRW50ZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpczIuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyZWQnLCAwLCBhcmdzKTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZUV4aXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0JywgMSwgYXJncyk7XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVFeGl0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW42KSwgX2tleTYgPSAwOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzMi5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdGluZycsIDEsIGFyZ3MpO1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgICBhcmdzW19rZXk3XSA9IGFyZ3VtZW50c1tfa2V5N107XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzMi5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdGVkJywgMSwgYXJncyk7XG4gIH07XG59O1xuXG5SZXBsYWNlVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVwbGFjZVRyYW5zaXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1JlcGxhY2VUcmFuc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nO1xuZXhwb3J0cy5tZXJnZUNoaWxkTWFwcGluZ3MgPSBtZXJnZUNoaWxkTWFwcGluZ3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIEdpdmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYCwgcmV0dXJuIGFuIG9iamVjdCBtYXBwaW5nIGtleSB0byBjaGlsZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICogQHJldHVybiB7b2JqZWN0fSBNYXBwaW5nIG9mIGtleSB0byBjaGlsZFxuICovXG5mdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4sIG1hcEZuKSB7XG4gIHZhciBtYXBwZXIgPSBmdW5jdGlvbiBtYXBwZXIoY2hpbGQpIHtcbiAgICByZXR1cm4gbWFwRm4gJiYgKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoY2hpbGQpID8gbWFwRm4oY2hpbGQpIDogY2hpbGQ7XG4gIH07XG5cbiAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmIChjaGlsZHJlbikgX3JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYztcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAvLyBydW4gdGhlIG1hcCBmdW5jdGlvbiBoZXJlIGluc3RlYWQgc28gdGhhdCB0aGUga2V5IGlzIHRoZSBjb21wdXRlZCBvbmVcbiAgICByZXN1bHRbY2hpbGQua2V5XSA9IG1hcHBlcihjaGlsZCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZW4geW91J3JlIGFkZGluZyBvciByZW1vdmluZyBjaGlsZHJlbiBzb21lIG1heSBiZSBhZGRlZCBvciByZW1vdmVkIGluIHRoZVxuICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gKiBhbmltYXRlIGVsZW1lbnRzIGluIGFuZCBvdXQuIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBwcmV2aW91cyBzZXQgb2Yga2V5c1xuICogYW5kIGEgbmV3IHNldCBvZiBrZXlzIGFuZCBtZXJnZXMgdGhlbSB3aXRoIGl0cyBiZXN0IGd1ZXNzIG9mIHRoZSBjb3JyZWN0XG4gKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICogUmVhY3RNdWx0aUNoaWxkIHRvIG1ha2UgdGhpcyBlYXN5LCBidXQgZm9yIG5vdyBSZWFjdCBpdHNlbGYgZG9lcyBub3RcbiAqIGRpcmVjdGx5IGhhdmUgdGhpcyBjb25jZXB0IG9mIHRoZSB1bmlvbiBvZiBwcmV2Q2hpbGRyZW4gYW5kIG5leHRDaGlsZHJlblxuICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByZXYgcHJldiBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0IG5leHQgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAqIGluIGBuZXh0YCBpbiBhIHJlYXNvbmFibGUgb3JkZXIuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2LCBuZXh0KSB7XG4gIHByZXYgPSBwcmV2IHx8IHt9O1xuICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZUZvcktleShrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG5leHQgPyBuZXh0W2tleV0gOiBwcmV2W2tleV07XG4gIH1cblxuICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcbiAgdmFyIG5leHRLZXlzUGVuZGluZyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgIGlmIChwcmV2S2V5IGluIG5leHQpIHtcbiAgICAgIGlmIChwZW5kaW5nS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgbmV4dEtleXNQZW5kaW5nW3ByZXZLZXldID0gcGVuZGluZ0tleXM7XG4gICAgICAgIHBlbmRpbmdLZXlzID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdLZXlzLnB1c2gocHJldktleSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGkgPSB2b2lkIDA7XG4gIHZhciBjaGlsZE1hcHBpbmcgPSB7fTtcbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgfVxuXG4gIC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuICBmb3IgKGkgPSAwOyBpIDwgcGVuZGluZ0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjaGlsZE1hcHBpbmdbcGVuZGluZ0tleXNbaV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ0tleXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkTWFwcGluZztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25DZWxsIGZyb20gJy4vcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24tY2VsbCc7XG5pbXBvcnQgZXZlbnREZWxlZ2F0ZXIgZnJvbSAnLi9yb3ctZXZlbnQtZGVsZWdhdGVyJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuY2xhc3MgUm93IGV4dGVuZHMgZXZlbnREZWxlZ2F0ZXIoQ29tcG9uZW50KSB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByb3csXG4gICAgICBjb2x1bW5zLFxuICAgICAga2V5RmllbGQsXG4gICAgICByb3dJbmRleCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgYXR0cnMsXG4gICAgICBjZWxsRWRpdCxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgc2VsZWN0Um93LFxuICAgICAgc2VsZWN0YWJsZSxcbiAgICAgIGVkaXRhYmxlOiBlZGl0YWJsZVJvd1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgbW9kZSxcbiAgICAgIG9uU3RhcnQsXG4gICAgICBFZGl0aW5nQ2VsbCxcbiAgICAgIHJpZHg6IGVkaXRpbmdSb3dJZHgsXG4gICAgICBjaWR4OiBlZGl0aW5nQ29sSWR4LFxuICAgICAgQ0xJQ0tfVE9fQ0VMTF9FRElULFxuICAgICAgREJDTElDS19UT19DRUxMX0VESVQsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IGNlbGxFZGl0O1xuXG4gICAgY29uc3Qga2V5ID0gXy5nZXQocm93LCBrZXlGaWVsZCk7XG4gICAgY29uc3QgeyBoaWRlU2VsZWN0Q29sdW1uIH0gPSBzZWxlY3RSb3c7XG4gICAgY29uc3QgdHJBdHRycyA9IHRoaXMuZGVsZWdhdGUoYXR0cnMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBzdHlsZT17IHN0eWxlIH0gY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0geyAuLi50ckF0dHJzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICAoc2VsZWN0Um93Lm1vZGUgIT09IENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRUQgJiYgIWhpZGVTZWxlY3RDb2x1bW4pXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPFNlbGVjdGlvbkNlbGxcbiAgICAgICAgICAgICAgICB7IC4uLnNlbGVjdFJvdyB9XG4gICAgICAgICAgICAgICAgcm93S2V5PXsga2V5IH1cbiAgICAgICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ICFzZWxlY3RhYmxlIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb2x1bW4uaGlkZGVuKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgZGF0YUZpZWxkIH0gPSBjb2x1bW47XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBfLmdldChyb3csIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICAgIGxldCBlZGl0YWJsZSA9IF8uaXNEZWZpbmVkKGNvbHVtbi5lZGl0YWJsZSkgPyBjb2x1bW4uZWRpdGFibGUgOiB0cnVlO1xuICAgICAgICAgICAgICBpZiAoZGF0YUZpZWxkID09PSBrZXlGaWVsZCB8fCAhZWRpdGFibGVSb3cpIGVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRhYmxlKSkge1xuICAgICAgICAgICAgICAgIGVkaXRhYmxlID0gY29sdW1uLmVkaXRhYmxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IGVkaXRpbmdSb3dJZHggJiYgaW5kZXggPT09IGVkaXRpbmdDb2xJZHgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWRpdENlbGxzdHlsZSA9IGNvbHVtbi5lZGl0Q2VsbFN0eWxlIHx8IHt9O1xuICAgICAgICAgICAgICAgIGxldCBlZGl0Q2VsbGNsYXNzZXMgPSBjb2x1bW4uZWRpdENlbGxDbGFzc2VzO1xuICAgICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRDZWxsU3R5bGUpKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0Q2VsbHN0eWxlID0gY29sdW1uLmVkaXRDZWxsU3R5bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi5lZGl0Q2VsbENsYXNzZXMpKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0Q2VsbGNsYXNzZXMgPSBjb2x1bW4uZWRpdENlbGxDbGFzc2VzKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxFZGl0aW5nQ2VsbFxuICAgICAgICAgICAgICAgICAgICBrZXk9eyBgJHtjb250ZW50fS0ke2luZGV4fWAgfVxuICAgICAgICAgICAgICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICAgICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg9eyBpbmRleCB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGVkaXRDZWxsY2xhc3NlcyB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgZWRpdENlbGxzdHlsZSB9XG4gICAgICAgICAgICAgICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q2VsbFxuICAgICAgICAgICAgICAgICAga2V5PXsgYCR7Y29udGVudH0tJHtpbmRleH1gIH1cbiAgICAgICAgICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4PXsgaW5kZXggfVxuICAgICAgICAgICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICAgICAgICAgIG9uU3RhcnQ9eyBvblN0YXJ0IH1cbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXsgZWRpdGFibGUgfVxuICAgICAgICAgICAgICAgICAgY2xpY2tUb0VkaXQ9eyBtb2RlID09PSBDTElDS19UT19DRUxMX0VESVQgfVxuICAgICAgICAgICAgICAgICAgZGJjbGlja1RvRWRpdD17IG1vZGUgPT09IERCQ0xJQ0tfVE9fQ0VMTF9FRElUIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5Sb3cucHJvcFR5cGVzID0ge1xuICByb3c6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF0dHJzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5Sb3cuZGVmYXVsdFByb3BzID0ge1xuICBlZGl0YWJsZTogdHJ1ZSxcbiAgc3R5bGU6IHt9LFxuICBjbGFzc05hbWU6IG51bGwsXG4gIGF0dHJzOiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlRWRpdGluZ0NlbGwgPSB0aGlzLmhhbmRsZUVkaXRpbmdDZWxsLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVFZGl0aW5nQ2VsbChlKSB7XG4gICAgY29uc3QgeyBjb2x1bW4sIG9uU3RhcnQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCwgY2xpY2tUb0VkaXQsIGRiY2xpY2tUb0VkaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IGNvbHVtbjtcbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICBpZiAoY2xpY2tUb0VkaXQpIHtcbiAgICAgICAgY29uc3QgY3VzdG9tQ2xpY2sgPSBldmVudHMub25DbGljaztcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21DbGljaykpIGN1c3RvbUNsaWNrKGUpO1xuICAgICAgfSBlbHNlIGlmIChkYmNsaWNrVG9FZGl0KSB7XG4gICAgICAgIGNvbnN0IGN1c3RvbURiQ2xpY2sgPSBldmVudHMub25Eb3VibGVDbGljaztcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21EYkNsaWNrKSkgY3VzdG9tRGJDbGljayhlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9uU3RhcnQpIHtcbiAgICAgIG9uU3RhcnQocm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93LFxuICAgICAgcm93SW5kZXgsXG4gICAgICBjb2x1bW4sXG4gICAgICBjb2x1bW5JbmRleCxcbiAgICAgIGVkaXRhYmxlLFxuICAgICAgY2xpY2tUb0VkaXQsXG4gICAgICBkYmNsaWNrVG9FZGl0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YUZpZWxkLFxuICAgICAgZm9ybWF0dGVyLFxuICAgICAgZm9ybWF0RXh0cmFEYXRhLFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc2VzLFxuICAgICAgdGl0bGUsXG4gICAgICBldmVudHMsXG4gICAgICBhbGlnbixcbiAgICAgIGF0dHJzXG4gICAgfSA9IGNvbHVtbjtcbiAgICBsZXQgY2VsbFRpdGxlO1xuICAgIGxldCBjZWxsU3R5bGUgPSB7fTtcbiAgICBsZXQgY29udGVudCA9IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcblxuICAgIGNvbnN0IGNlbGxBdHRycyA9IHtcbiAgICAgIC4uLl8uaXNGdW5jdGlvbihhdHRycykgPyBhdHRycyhjb250ZW50LCByb3csIHJvd0luZGV4LCBjb2x1bW5JbmRleCkgOiBhdHRycyxcbiAgICAgIC4uLmV2ZW50c1xuICAgIH07XG5cbiAgICBjb25zdCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihjbGFzc2VzKVxuICAgICAgPyBjbGFzc2VzKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGNvbHVtbkluZGV4KVxuICAgICAgOiBjbGFzc2VzO1xuXG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oc3R5bGUpID8gc3R5bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgY29sdW1uSW5kZXgpIDogc3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBjZWxsVGl0bGUgPSBfLmlzRnVuY3Rpb24odGl0bGUpID8gdGl0bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgY29sdW1uSW5kZXgpIDogY29udGVudDtcbiAgICAgIGNlbGxBdHRycy50aXRsZSA9IGNlbGxUaXRsZTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBjb250ZW50ID0gY29sdW1uLmZvcm1hdHRlcihjb250ZW50LCByb3csIHJvd0luZGV4LCBmb3JtYXRFeHRyYURhdGEpO1xuICAgIH1cblxuICAgIGlmIChhbGlnbikge1xuICAgICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9XG4gICAgICAgIF8uaXNGdW5jdGlvbihhbGlnbikgPyBhbGlnbihjb250ZW50LCByb3csIHJvd0luZGV4LCBjb2x1bW5JbmRleCkgOiBhbGlnbjtcbiAgICB9XG5cbiAgICBpZiAoY2VsbENsYXNzZXMpIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjZWxsQ2xhc3NlcztcblxuICAgIGlmICghXy5pc0VtcHR5T2JqZWN0KGNlbGxTdHlsZSkpIGNlbGxBdHRycy5zdHlsZSA9IGNlbGxTdHlsZTtcbiAgICBpZiAoY2xpY2tUb0VkaXQgJiYgZWRpdGFibGUpIHtcbiAgICAgIGNlbGxBdHRycy5vbkNsaWNrID0gdGhpcy5oYW5kbGVFZGl0aW5nQ2VsbDtcbiAgICB9IGVsc2UgaWYgKGRiY2xpY2tUb0VkaXQgJiYgZWRpdGFibGUpIHtcbiAgICAgIGNlbGxBdHRycy5vbkRvdWJsZUNsaWNrID0gdGhpcy5oYW5kbGVFZGl0aW5nQ2VsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZCB7IC4uLmNlbGxBdHRycyB9PnsgY29udGVudCB9PC90ZD5cbiAgICApO1xuICB9XG59XG5cbkNlbGwucHJvcFR5cGVzID0ge1xuICByb3c6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY29sdW1uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbHVtbkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jZWxsLmpzIiwiLyogZXNsaW50XG4gIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMFxuICBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9uczogMFxuKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJvd0tleTogUHJvcFR5cGVzLmFueSxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25Sb3dTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjbGlja1RvU2VsZWN0OiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gbmV4dFByb3BzLnNlbGVjdGVkICE9PSBzZWxlY3RlZDtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBtb2RlOiBpbnB1dFR5cGUsXG4gICAgICByb3dLZXksXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIG9uUm93U2VsZWN0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dJbmRleCxcbiAgICAgIGNsaWNrVG9TZWxlY3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgIGlmIChjbGlja1RvU2VsZWN0KSByZXR1cm47XG5cbiAgICBjb25zdCBjaGVja2VkID0gaW5wdXRUeXBlID09PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRVxuICAgICAgPyB0cnVlXG4gICAgICA6ICFzZWxlY3RlZDtcblxuICAgIG9uUm93U2VsZWN0KHJvd0tleSwgY2hlY2tlZCwgcm93SW5kZXgsIGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vZGU6IGlucHV0VHlwZSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8dGQgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT17IGlucHV0VHlwZSB9XG4gICAgICAgICAgY2hlY2tlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICBkaXNhYmxlZD17IGRpc2FibGVkIH1cbiAgICAgICAgLz5cbiAgICAgIDwvdGQ+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24tY2VsbC5qcyIsImltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBldmVudHMgPSBbXG4gICdvbkNsaWNrJyxcbiAgJ29uRG91YmxlQ2xpY2snLFxuICAnb25Nb3VzZUVudGVyJyxcbiAgJ29uTW91c2VMZWF2ZSdcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgUm93RXZlbnREZWxlZ2F0ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgICB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIgPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIgPSB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlcihjYikge1xuICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcm93LCByb3dJbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY2IoZSwgcm93LCByb3dJbmRleCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyKGNiKSB7XG4gICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICBrZXlGaWVsZCxcbiAgICAgICAgICBzZWxlY3RhYmxlLFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIHNlbGVjdFJvdzoge1xuICAgICAgICAgICAgb25Sb3dTZWxlY3QsXG4gICAgICAgICAgICBjbGlja1RvRWRpdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2VsbEVkaXQ6IHtcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICBEQkNMSUNLX1RPX0NFTExfRURJVCxcbiAgICAgICAgICAgIERFTEFZX0ZPUl9EQkNMSUNLXG4gICAgICAgICAgfVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBjbGlja0ZuID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IoZSwgcm93LCByb3dJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBfLmdldChyb3csIGtleUZpZWxkKTtcbiAgICAgICAgICAgIG9uUm93U2VsZWN0KGtleSwgIXNlbGVjdGVkLCByb3dJbmRleCwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtb2RlID09PSBEQkNMSUNLX1RPX0NFTExfRURJVCAmJiBjbGlja1RvRWRpdCkge1xuICAgICAgICAgIHRoaXMuY2xpY2tOdW0gKz0gMTtcbiAgICAgICAgICBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrTnVtID09PSAxKSB7XG4gICAgICAgICAgICAgIGNsaWNrRm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xuICAgICAgICAgIH0sIERFTEFZX0ZPUl9EQkNMSUNLKSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsaWNrRm4oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWxlZ2F0ZShhdHRycyA9IHt9KSB7XG4gICAgICBjb25zdCBuZXdBdHRycyA9IHt9O1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93ICYmIHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QpIHtcbiAgICAgICAgbmV3QXR0cnMub25DbGljayA9IHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIoYXR0cnMub25DbGljayk7XG4gICAgICB9XG4gICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoIW5ld0F0dHJzW2F0dHJdKSB7XG4gICAgICAgICAgaWYgKGV2ZW50cy5pbmNsdWRlcyhhdHRyKSkge1xuICAgICAgICAgICAgbmV3QXR0cnNbYXR0cl0gPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoYXR0cnNbYXR0cl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdBdHRyc1thdHRyXSA9IGF0dHJzW2F0dHJdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3QXR0cnM7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV2ZW50LWRlbGVnYXRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBSb3dTZWN0aW9uID0gKHsgY29udGVudCwgY29sU3BhbiB9KSA9PiAoXG4gIDx0cj5cbiAgICA8dGRcbiAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgY29sU3Bhbj17IGNvbFNwYW4gfVxuICAgICAgY2xhc3NOYW1lPVwicmVhY3QtYnMtdGFibGUtbm8tZGF0YVwiXG4gICAgPlxuICAgICAgeyBjb250ZW50IH1cbiAgICA8L3RkPlxuICA8L3RyPlxuKTtcblxuUm93U2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gIGNvbFNwYW46IFByb3BUeXBlcy5udW1iZXJcbn07XG5cblJvd1NlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50OiBudWxsLFxuICBjb2xTcGFuOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3dTZWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlY3Rpb24uanMiLCJpbXBvcnQgQ29sdW1uUmVzb2x2ZXIgZnJvbSAnLi9jb2x1bW4tcmVzb2x2ZXInO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBUYWJsZVJlc29sdmVyIGV4dGVuZHMgQ29sdW1uUmVzb2x2ZXIoRXh0ZW5kQmFzZSkge1xuICAgIHZhbGlkYXRlUHJvcHMoKSB7XG4gICAgICBjb25zdCB7IGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFrZXlGaWVsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBzcGVjaWZ5IGEgZmllbGQgYXMga2V5IHZpYSBrZXlGaWVsZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmlzaWJsZUNvbHVtblNpemUoZmFsc2UpIDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB2aXNpYmxlIGNvbHVtbnMgZGV0ZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJvcHMgcmVzb2x2ZXIgZm9yIGNlbGwgc2VsZWN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBhZGR0aW9uYWwgb3B0aW9ucyBsaWtlIGNhbGxiYWNrIHdoaWNoIGFyZSBhYm91dCB0byBtZXJnZSBpbnRvIHByb3BzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZXN1bHQgLSBwcm9wcyBmb3IgY2VsbCBzZWxlY3Rpb25zXG4gICAgICogQHJldHVybnMge1N0cmluZ30gcmVzdWx0Lm1vZGUgLSBpbnB1dCB0eXBlIG9mIHJvdyBzZWxlY3Rpb24gb3IgZGlzYWJsZWQuXG4gICAgICovXG4gICAgcmVzb2x2ZVNlbGVjdFJvd1Byb3BzKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0Um93IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBST1dfU0VMRUNUX0RJU0FCTEVEIH0gPSBDb25zdDtcblxuICAgICAgaWYgKF8uaXNEZWZpbmVkKHNlbGVjdFJvdykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zZWxlY3RSb3csXG4gICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtb2RlOiBST1dfU0VMRUNUX0RJU0FCTEVEXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByb3BzIHJlc29sdmVyIGZvciBoZWFkZXIgY2VsbCBzZWxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGFkZHRpb25hbCBvcHRpb25zIGxpa2UgY2FsbGJhY2sgd2hpY2ggYXJlIGFib3V0IHRvIG1lcmdlIGludG8gcHJvcHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlc3VsdCAtIHByb3BzIGZvciBjZWxsIHNlbGVjdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSByZXN1bHQubW9kZSAtIGlucHV0IHR5cGUgb2Ygcm93IHNlbGVjdGlvbiBvciBkaXNhYmxlZC5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSByZXN1bHQuY2hlY2tlZFN0YXR1cyAtIGNoZWNrYm94IHN0YXR1cyBkZXBlbmRpbmcgb24gc2VsZWN0ZWQgcm93cyBjb3VudHNcbiAgICAgKi9cbiAgICByZXNvbHZlU2VsZWN0Um93UHJvcHNGb3JIZWFkZXIob3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCB7IHNlbGVjdFJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgYWxsUm93c1NlbGVjdGVkLCBzZWxlY3RlZCA9IFtdLCAuLi5yZXN0IH0gPSBvcHRpb25zO1xuICAgICAgY29uc3Qge1xuICAgICAgICBST1dfU0VMRUNUX0RJU0FCTEVELCBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRCxcbiAgICAgICAgQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUsIENIRUNLQk9YX1NUQVRVU19VTkNIRUNLRURcbiAgICAgIH0gPSBDb25zdDtcblxuICAgICAgaWYgKF8uaXNEZWZpbmVkKHNlbGVjdFJvdykpIHtcbiAgICAgICAgbGV0IGNoZWNrZWRTdGF0dXM7XG5cbiAgICAgICAgLy8gY2hlY2tib3ggc3RhdHVzIGRlcGVuZGluZyBvbiBzZWxlY3RlZCByb3dzIGNvdW50c1xuICAgICAgICBpZiAoYWxsUm93c1NlbGVjdGVkKSBjaGVja2VkU3RhdHVzID0gQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ7XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMCkgY2hlY2tlZFN0YXR1cyA9IENIRUNLQk9YX1NUQVRVU19VTkNIRUNLRUQ7XG4gICAgICAgIGVsc2UgY2hlY2tlZFN0YXR1cyA9IENIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2VsZWN0Um93LFxuICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgY2hlY2tlZFN0YXR1c1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtb2RlOiBST1dfU0VMRUNUX0RJU0FCTEVEXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBDb2x1bW5SZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIHZpc2libGVDb2x1bW5TaXplKGluY2x1ZGVTZWxlY3RDb2x1bW4gPSB0cnVlKSB7XG4gICAgICBjb25zdCBjb2x1bW5MZW4gPSB0aGlzLnByb3BzLmNvbHVtbnMuZmlsdGVyKGMgPT4gIWMuaGlkZGVuKS5sZW5ndGg7XG4gICAgICBpZiAoIWluY2x1ZGVTZWxlY3RDb2x1bW4pIHJldHVybiBjb2x1bW5MZW47XG4gICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cgJiYgIXRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbkxlbiArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29sdW1uTGVuO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2NvbHVtbi1yZXNvbHZlci5qcyIsIi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB3aXRoU29ydCBmcm9tICcuL3NvcnQvd3JhcHBlcic7XG5pbXBvcnQgd2l0aFNlbGVjdGlvbiBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vd3JhcHBlcic7XG5cbmltcG9ydCByZW1vdGVSZXNvbHZlciBmcm9tICcuL3Byb3BzLXJlc29sdmVyL3JlbW90ZS1yZXNvbHZlcic7XG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuY29uc3Qgd2l0aERhdGFTdG9yZSA9IEJhc2UgPT5cbiAgY2xhc3MgQm9vdHN0cmFwVGFibGVDb250YWluZXIgZXh0ZW5kcyByZW1vdGVSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdG9yZSA9IG5ldyBTdG9yZShwcm9wcy5rZXlGaWVsZCk7XG4gICAgICB0aGlzLnN0b3JlLmRhdGEgPSBwcm9wcy5kYXRhO1xuICAgICAgdGhpcy53cmFwQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnN0b3JlLnNldEFsbERhdGEobmV4dFByb3BzLmRhdGEpO1xuICAgIH1cblxuICAgIHdyYXBDb21wb25lbnRzKCkge1xuICAgICAgdGhpcy5CYXNlQ29tcG9uZW50ID0gQmFzZTtcbiAgICAgIGNvbnN0IHsgcGFnaW5hdGlvbiwgY29sdW1ucywgZmlsdGVyLCBzZWxlY3RSb3csIGNlbGxFZGl0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKHBhZ2luYXRpb24pIHtcbiAgICAgICAgY29uc3QgeyB3cmFwcGVyRmFjdG9yeSB9ID0gcGFnaW5hdGlvbjtcbiAgICAgICAgdGhpcy5CYXNlQ29tcG9uZW50ID0gd3JhcHBlckZhY3RvcnkodGhpcy5CYXNlQ29tcG9uZW50LCB7XG4gICAgICAgICAgcmVtb3RlUmVzb2x2ZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLnNvcnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5CYXNlQ29tcG9uZW50ID0gd2l0aFNvcnQodGhpcy5CYXNlQ29tcG9uZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICBjb25zdCB7IHdyYXBwZXJGYWN0b3J5IH0gPSBmaWx0ZXI7XG4gICAgICAgIHRoaXMuQmFzZUNvbXBvbmVudCA9IHdyYXBwZXJGYWN0b3J5KHRoaXMuQmFzZUNvbXBvbmVudCwge1xuICAgICAgICAgIF8sXG4gICAgICAgICAgcmVtb3RlUmVzb2x2ZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZWxsRWRpdCkge1xuICAgICAgICBjb25zdCB7IHdyYXBwZXJGYWN0b3J5IH0gPSBjZWxsRWRpdDtcbiAgICAgICAgdGhpcy5CYXNlQ29tcG9uZW50ID0gd3JhcHBlckZhY3RvcnkodGhpcy5CYXNlQ29tcG9uZW50LCB7XG4gICAgICAgICAgXyxcbiAgICAgICAgICByZW1vdGVSZXNvbHZlclxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdFJvdykge1xuICAgICAgICB0aGlzLkJhc2VDb21wb25lbnQgPSB3aXRoU2VsZWN0aW9uKHRoaXMuQmFzZUNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgYmFzZVByb3BzID0ge1xuICAgICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgICBzdG9yZTogdGhpcy5zdG9yZVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRoaXMuQmFzZUNvbXBvbmVudCB7IC4uLmJhc2VQcm9wcyB9IC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGFTdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRhaW5lci5qcyIsIi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogMCAqL1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgc29ydCwgbmV4dE9yZGVyIH0gZnJvbSAnLi9zb3J0JztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuL3Jvd3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGtleUZpZWxkKSB7XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSA9IFtdO1xuICAgIHRoaXMuX2tleUZpZWxkID0ga2V5RmllbGQ7XG4gICAgdGhpcy5fc29ydE9yZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NvcnRGaWVsZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IFtdO1xuICAgIHRoaXMuX2ZpbHRlcnMgPSB7fTtcbiAgICB0aGlzLl9wYWdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NpemVQZXJQYWdlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZWRpdChyb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSkge1xuICAgIGNvbnN0IHJvdyA9IGdldFJvd0J5Um93SWQodGhpcykocm93SWQpO1xuICAgIGlmIChyb3cpIF8uc2V0KHJvdywgZGF0YUZpZWxkLCBuZXdWYWx1ZSk7XG4gIH1cblxuICBzZXRTb3J0KHsgZGF0YUZpZWxkIH0sIG9yZGVyLCBkZWZhdWx0T3JkZXIpIHtcbiAgICB0aGlzLnNvcnRPcmRlciA9IG5leHRPcmRlcih0aGlzKShkYXRhRmllbGQsIG9yZGVyLCBkZWZhdWx0T3JkZXIpO1xuICAgIHRoaXMuc29ydEZpZWxkID0gZGF0YUZpZWxkO1xuICB9XG5cbiAgc29ydEJ5KHsgc29ydEZ1bmMgfSkge1xuICAgIHRoaXMuZGF0YSA9IHNvcnQodGhpcykoc29ydEZ1bmMpO1xuICB9XG5cbiAgZ2V0QWxsRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHNldEFsbERhdGEoZGF0YSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX2ZpbHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZERhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIHNldCBkYXRhKGRhdGEpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fZmlsdGVycykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fZmlsdGVyZWREYXRhID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9IChkYXRhID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSkgOiBbXSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGZpbHRlcmVkRGF0YSgpIHsgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkRGF0YTsgfVxuICBzZXQgZmlsdGVyZWREYXRhKGZpbHRlcmVkRGF0YSkgeyB0aGlzLl9maWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGE7IH1cblxuICBnZXQga2V5RmllbGQoKSB7IHJldHVybiB0aGlzLl9rZXlGaWVsZDsgfVxuICBzZXQga2V5RmllbGQoa2V5RmllbGQpIHsgdGhpcy5fa2V5RmllbGQgPSBrZXlGaWVsZDsgfVxuXG4gIGdldCBzb3J0T3JkZXIoKSB7IHJldHVybiB0aGlzLl9zb3J0T3JkZXI7IH1cbiAgc2V0IHNvcnRPcmRlcihzb3J0T3JkZXIpIHsgdGhpcy5fc29ydE9yZGVyID0gc29ydE9yZGVyOyB9XG5cbiAgZ2V0IHBhZ2UoKSB7IHJldHVybiB0aGlzLl9wYWdlOyB9XG4gIHNldCBwYWdlKHBhZ2UpIHsgdGhpcy5fcGFnZSA9IHBhZ2U7IH1cblxuICBnZXQgc2l6ZVBlclBhZ2UoKSB7IHJldHVybiB0aGlzLl9zaXplUGVyUGFnZTsgfVxuICBzZXQgc2l6ZVBlclBhZ2Uoc2l6ZVBlclBhZ2UpIHsgdGhpcy5fc2l6ZVBlclBhZ2UgPSBzaXplUGVyUGFnZTsgfVxuXG4gIGdldCBzb3J0RmllbGQoKSB7IHJldHVybiB0aGlzLl9zb3J0RmllbGQ7IH1cbiAgc2V0IHNvcnRGaWVsZChzb3J0RmllbGQpIHsgdGhpcy5fc29ydEZpZWxkID0gc29ydEZpZWxkOyB9XG5cbiAgZ2V0IHNlbGVjdGVkKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7IHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7IH1cblxuICBnZXQgZmlsdGVycygpIHsgcmV0dXJuIHRoaXMuX2ZpbHRlcnM7IH1cbiAgc2V0IGZpbHRlcnMoZmlsdGVycykgeyB0aGlzLl9maWx0ZXJzID0gZmlsdGVyczsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvaW5kZXguanMiLCIvKiBlc2xpbnQgbm8tbmVzdGVkLXRlcm5hcnk6IDAgKi9cbi8qIGVzbGludCBuby1sb25lbHktaWY6IDAgKi9cbi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogMCAqL1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZnVuY3Rpb24gY29tcGFyYXRvcihhLCBiKSB7XG4gIGxldCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgYiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSBiLmxvY2FsZUNvbXBhcmUoYSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gYSA+IGIgPyAtMSA6ICgoYSA8IGIpID8gMSA6IDApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gKHsgZGF0YSwgc29ydE9yZGVyLCBzb3J0RmllbGQgfSkgPT4gKHNvcnRGdW5jKSA9PiB7XG4gIGNvbnN0IF9kYXRhID0gWy4uLmRhdGFdO1xuICBfZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgdmFsdWVBID0gXy5nZXQoYSwgc29ydEZpZWxkKTtcbiAgICBsZXQgdmFsdWVCID0gXy5nZXQoYiwgc29ydEZpZWxkKTtcbiAgICB2YWx1ZUEgPSBfLmlzRGVmaW5lZCh2YWx1ZUEpID8gdmFsdWVBIDogJyc7XG4gICAgdmFsdWVCID0gXy5pc0RlZmluZWQodmFsdWVCKSA/IHZhbHVlQiA6ICcnO1xuXG4gICAgaWYgKHNvcnRGdW5jKSB7XG4gICAgICByZXN1bHQgPSBzb3J0RnVuYyh2YWx1ZUEsIHZhbHVlQiwgc29ydE9yZGVyLCBzb3J0RmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc29ydE9yZGVyID09PSBDb25zdC5TT1JUX0RFU0MpIHtcbiAgICAgICAgcmVzdWx0ID0gY29tcGFyYXRvcih2YWx1ZUEsIHZhbHVlQik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBjb21wYXJhdG9yKHZhbHVlQiwgdmFsdWVBKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG4gIHJldHVybiBfZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBuZXh0T3JkZXIgPSBzdG9yZSA9PiAoZmllbGQsIG9yZGVyLCBkZWZhdWx0T3JkZXIgPSBDb25zdC5TT1JUX0RFU0MpID0+IHtcbiAgaWYgKG9yZGVyKSByZXR1cm4gb3JkZXI7XG5cbiAgaWYgKGZpZWxkICE9PSBzdG9yZS5zb3J0RmllbGQpIHtcbiAgICByZXR1cm4gZGVmYXVsdE9yZGVyO1xuICB9XG4gIHJldHVybiBzdG9yZS5zb3J0T3JkZXIgPT09IENvbnN0LlNPUlRfREVTQyA/IENvbnN0LlNPUlRfQVNDIDogQ29uc3QuU09SVF9ERVNDO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NvcnQuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgcmVtb3RlUmVzb2x2ZXIgZnJvbSAnLi4vcHJvcHMtcmVzb2x2ZXIvcmVtb3RlLXJlc29sdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgQmFzZSA9PlxuICBjbGFzcyBTb3J0V3JhcHBlciBleHRlbmRzIHJlbW90ZVJlc29sdmVyKENvbXBvbmVudCkge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuaGFuZGxlU29ydCA9IHRoaXMuaGFuZGxlU29ydC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgY29sdW1ucywgZGVmYXVsdFNvcnRlZCwgZGVmYXVsdFNvcnREaXJlY3Rpb24sIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgLy8gZGVmYXVsdFNvcnRlZCBpcyBhbiBhcnJheSwgaXQncyByZWFkeSB0byB1c2UgYXMgbXVsdGkgLyBzaW5nbGUgc29ydFxuICAgICAgLy8gd2hlbiB3ZSBzdGFydCB0byBzdXBwb3J0IG11bHRpIHNvcnQsIHBsZWFzZSB1cGRhdGUgZm9sbG93aW5nIGNvZGUgdG8gdXNlIGFycmF5LmZvckVhY2hcbiAgICAgIGlmIChkZWZhdWx0U29ydGVkICYmIGRlZmF1bHRTb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBkYXRhRmllbGQgPSBkZWZhdWx0U29ydGVkWzBdLmRhdGFGaWVsZDtcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBkZWZhdWx0U29ydGVkWzBdLm9yZGVyO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLmRhdGFGaWVsZCA9PT0gZGF0YUZpZWxkKTtcbiAgICAgICAgaWYgKGNvbHVtbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3RvcmUuc2V0U29ydChjb2x1bW5bMF0sIG9yZGVyLCBkZWZhdWx0U29ydERpcmVjdGlvbik7XG5cbiAgICAgICAgICBpZiAoY29sdW1uWzBdLm9uU29ydCkge1xuICAgICAgICAgICAgY29sdW1uWzBdLm9uU29ydChzdG9yZS5zb3J0RmllbGQsIHN0b3JlLnNvcnRPcmRlcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuaXNSZW1vdGVTb3J0KCkgfHwgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTb3J0Q2hhbmdlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JlLnNvcnRCeShjb2x1bW5bMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBsZXQgc29ydGVkQ29sdW1uO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXh0UHJvcHMuY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAobmV4dFByb3BzLmNvbHVtbnNbaV0uZGF0YUZpZWxkID09PSBuZXh0UHJvcHMuc3RvcmUuc29ydEZpZWxkKSB7XG4gICAgICAgICAgc29ydGVkQ29sdW1uID0gbmV4dFByb3BzLmNvbHVtbnNbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzb3J0ZWRDb2x1bW4gJiYgc29ydGVkQ29sdW1uLnNvcnQpIHtcbiAgICAgICAgbmV4dFByb3BzLnN0b3JlLnNvcnRCeShzb3J0ZWRDb2x1bW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVNvcnQoY29sdW1uKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgc3RvcmUuc2V0U29ydChjb2x1bW4sIHVuZGVmaW5lZCwgdGhpcy5wcm9wcy5kZWZhdWx0U29ydERpcmVjdGlvbik7XG5cbiAgICAgIGlmIChjb2x1bW4ub25Tb3J0KSB7XG4gICAgICAgIGNvbHVtbi5vblNvcnQoc3RvcmUuc29ydEZpZWxkLCBzdG9yZS5zb3J0T3JkZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc1JlbW90ZVNvcnQoKSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU29ydENoYW5nZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmUuc29ydEJ5KGNvbHVtbik7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QmFzZVxuICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgb25Tb3J0PXsgdGhpcy5oYW5kbGVTb3J0IH1cbiAgICAgICAgICBkYXRhPXsgdGhpcy5wcm9wcy5zdG9yZS5kYXRhIH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC93cmFwcGVyLmpzIiwiLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCB7XG4gIGlzQW55U2VsZWN0ZWRSb3csXG4gIHNlbGVjdGFibGVLZXlzLFxuICB1blNlbGVjdGFibGVLZXlzLFxuICBnZXRTZWxlY3RlZFJvd3Ncbn0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0aW9uJztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuLi9zdG9yZS9yb3dzJztcblxuZXhwb3J0IGRlZmF1bHQgQmFzZSA9PlxuICBjbGFzcyBSb3dTZWxlY3Rpb25XcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuaGFuZGxlUm93U2VsZWN0ID0gdGhpcy5oYW5kbGVSb3dTZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlQWxsUm93c1NlbGVjdCA9IHRoaXMuaGFuZGxlQWxsUm93c1NlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgICBwcm9wcy5zdG9yZS5zZWxlY3RlZCA9IHByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCB8fCBbXTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogcHJvcHMuc3RvcmUuc2VsZWN0ZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIG5leHRQcm9wcy5zdG9yZS5zZWxlY3RlZCA9IG5leHRQcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQgfHwgW107XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogbmV4dFByb3BzLnN0b3JlLnNlbGVjdGVkXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcm93IHNlbGVjdGlvbiBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHJvd0tleSAtIHJvdyBrZXkgb2Ygd2hhdCB3YXMgc2VsZWN0ZWQuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjaGVja2VkIC0gbmV4dCBjaGVja2VkIHN0YXR1cyBvZiBpbnB1dCBidXR0b24uXG4gICAgICovXG4gICAgaGFuZGxlUm93U2VsZWN0KHJvd0tleSwgY2hlY2tlZCwgcm93SW5kZXgsIGUpIHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0Um93OiB7IG1vZGUsIG9uU2VsZWN0IH0sIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBST1dfU0VMRUNUX1NJTkdMRSB9ID0gQ29uc3Q7XG5cbiAgICAgIGxldCBjdXJyU2VsZWN0ZWQgPSBbLi4uc3RvcmUuc2VsZWN0ZWRdO1xuXG4gICAgICBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9TSU5HTEUpIHsgLy8gd2hlbiBzZWxlY3QgbW9kZSBpcyByYWRpb1xuICAgICAgICBjdXJyU2VsZWN0ZWQgPSBbcm93S2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2tlZCkgeyAvLyB3aGVuIHNlbGVjdCBtb2RlIGlzIGNoZWNrYm94XG4gICAgICAgIGN1cnJTZWxlY3RlZC5wdXNoKHJvd0tleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyU2VsZWN0ZWQgPSBjdXJyU2VsZWN0ZWQuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSByb3dLZXkpO1xuICAgICAgfVxuXG4gICAgICBzdG9yZS5zZWxlY3RlZCA9IGN1cnJTZWxlY3RlZDtcblxuICAgICAgaWYgKG9uU2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGdldFJvd0J5Um93SWQoc3RvcmUpKHJvd0tleSk7XG4gICAgICAgIG9uU2VsZWN0KHJvdywgY2hlY2tlZCwgcm93SW5kZXgsIGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogY3VyclNlbGVjdGVkXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaGFuZGxlIGFsbCByb3dzIHNlbGVjdGlvbiBvbiBoZWFkZXIgY2VsbCBieSBzdG9yZS5zZWxlY3RlZFxuICAgICAqL1xuICAgIGhhbmRsZUFsbFJvd3NTZWxlY3QoZSkge1xuICAgICAgY29uc3QgeyBzdG9yZSwgc2VsZWN0Um93OiB7XG4gICAgICAgIG9uU2VsZWN0QWxsLFxuICAgICAgICBub25TZWxlY3RhYmxlXG4gICAgICB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBpc0FueVNlbGVjdGVkUm93KHN0b3JlKShub25TZWxlY3RhYmxlKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gIXNlbGVjdGVkO1xuXG4gICAgICBjb25zdCBjdXJyU2VsZWN0ZWQgPSByZXN1bHQgP1xuICAgICAgICBzZWxlY3RhYmxlS2V5cyhzdG9yZSkobm9uU2VsZWN0YWJsZSkgOlxuICAgICAgICB1blNlbGVjdGFibGVLZXlzKHN0b3JlKShub25TZWxlY3RhYmxlKTtcblxuXG4gICAgICBzdG9yZS5zZWxlY3RlZCA9IGN1cnJTZWxlY3RlZDtcblxuICAgICAgaWYgKG9uU2VsZWN0QWxsKSB7XG4gICAgICAgIG9uU2VsZWN0QWxsKHJlc3VsdCwgZ2V0U2VsZWN0ZWRSb3dzKHN0b3JlKSwgZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBjdXJyU2VsZWN0ZWRcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QmFzZVxuICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgb25Sb3dTZWxlY3Q9eyB0aGlzLmhhbmRsZVJvd1NlbGVjdCB9XG4gICAgICAgICAgb25BbGxSb3dzU2VsZWN0PXsgdGhpcy5oYW5kbGVBbGxSb3dzU2VsZWN0IH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi93cmFwcGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=react-bootstrap-table-next.js.map