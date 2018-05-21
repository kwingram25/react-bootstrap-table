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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYWZiOWVjZmY1ODQyMjA4YWU0YSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9yb3dzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9yZW1vdGUtcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9ib290c3RyYXAtdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9jYXJldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jYXB0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvaGFzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1JlcGxhY2VUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1ldmVudC1kZWxlZ2F0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvY29sdW1uLXJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zb3J0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3dyYXBwZXIuanMiXSwibmFtZXMiOlsiU09SVF9BU0MiLCJTT1JUX0RFU0MiLCJST1dfU0VMRUNUX1NJTkdMRSIsIlJPV19TRUxFQ1RfTVVMVElQTEUiLCJST1dfU0VMRUNUX0RJU0FCTEVEIiwiQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQiLCJDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURSIsIkNIRUNLQk9YX1NUQVRVU19VTkNIRUNLRUQiLCJzcGxpdE5lc3RlZCIsInN0ciIsImpvaW4iLCJyZXBsYWNlIiwic3BsaXQiLCJnZXQiLCJ0YXJnZXQiLCJmaWVsZCIsInBhdGhBcnJheSIsInJlc3VsdCIsInJlZHVjZSIsImN1cnIiLCJwYXRoIiwiZSIsInNldCIsInZhbHVlIiwic2FmZSIsImxldmVsIiwiYSIsImIiLCJFcnJvciIsImxlbmd0aCIsImlzRnVuY3Rpb24iLCJvYmoiLCJpc09iamVjdCIsInR5cGUiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsImlzRW1wdHlPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImtleXMiLCJpIiwiY2FsbCIsImlzRGVmaW5lZCIsInNsZWVwIiwiZm4iLCJtcyIsInNldFRpbWVvdXQiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0IiwiYXBweSIsIm1hdGNoUm93Iiwia2V5RmllbGQiLCJpZCIsInJvdyIsImdldFJvd0J5Um93SWQiLCJkYXRhIiwiZmluZCIsImlzU2VsZWN0ZWRBbGwiLCJzZWxlY3RlZCIsImlzQW55U2VsZWN0ZWRSb3ciLCJza2lwcyIsImZpbHRlciIsImluY2x1ZGVzIiwieCIsInNlbGVjdGFibGVLZXlzIiwibWFwIiwidW5TZWxlY3RhYmxlS2V5cyIsImdldFNlbGVjdGVkUm93cyIsInN0b3JlIiwiZ2V0Um93IiwiayIsInN0YXRlIiwicHJvcHMiLCJwYWdlIiwic2l6ZVBlclBhZ2UiLCJmaWx0ZXJzIiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwiZ2V0QWxsRGF0YSIsInJlbW90ZSIsInBhZ2luYXRpb24iLCJzb3J0IiwiY2VsbEVkaXQiLCJvblRhYmxlQ2hhbmdlIiwiZ2V0TmV3ZXN0U3RhdGUiLCJuZXdTdGF0ZSIsImlzUmVtb3RlUGFnaW5hdGlvbiIsIm9wdGlvbnMiLCJwYWdlU3RhcnRJbmRleCIsInJvd0lkIiwiZGF0YUZpZWxkIiwibmV3VmFsdWUiLCJFeHRlbmRCYXNlIiwiQm9vdHN0cmFwVGFibGUiLCJ2YWxpZGF0ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJsb2FkaW5nIiwib3ZlcmxheSIsInRhYmxlIiwicmVuZGVyVGFibGUiLCJMb2FkaW5nT3ZlcmxheSIsImNvbHVtbnMiLCJjbGFzc2VzIiwic3RyaXBlZCIsImhvdmVyIiwiYm9yZGVyZWQiLCJjb25kZW5zZWQiLCJub0RhdGFJbmRpY2F0aW9uIiwiY2FwdGlvbiIsInJvd1N0eWxlIiwicm93Q2xhc3NlcyIsIndyYXBwZXJDbGFzc2VzIiwicm93RXZlbnRzIiwidGFibGVXcmFwcGVyQ2xhc3MiLCJ0YWJsZUNsYXNzIiwiY2VsbFNlbGVjdGlvbkluZm8iLCJyZXNvbHZlU2VsZWN0Um93UHJvcHMiLCJvblJvd1NlbGVjdCIsImhlYWRlckNlbGxTZWxlY3Rpb25JbmZvIiwicmVzb2x2ZVNlbGVjdFJvd1Byb3BzRm9ySGVhZGVyIiwib25BbGxSb3dzU2VsZWN0IiwiYWxsUm93c1NlbGVjdGVkIiwidGFibGVDYXB0aW9uIiwib25Tb3J0Iiwib25GaWx0ZXIiLCJpc0VtcHR5IiwidmlzaWJsZUNvbHVtblNpemUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJvbmVPZlR5cGUiLCJib29sIiwic2hhcGUiLCJvYmplY3QiLCJub2RlIiwic2VsZWN0Um93IiwibW9kZSIsIm9uZU9mIiwiY2xpY2tUb1NlbGVjdCIsImNsaWNrVG9FZGl0Iiwib25TZWxlY3QiLCJvblNlbGVjdEFsbCIsInN0eWxlIiwibm9uU2VsZWN0YWJsZSIsImJnQ29sb3IiLCJoaWRlU2VsZWN0Q29sdW1uIiwiZGVmYXVsdFNvcnRlZCIsImFycmF5T2YiLCJvcmRlciIsImRlZmF1bHRTb3J0RGlyZWN0aW9uIiwiZGVmYXVsdFByb3BzIiwiSGVhZGVyIiwiY29sdW1uIiwiaGlkZGVuIiwiY3VyclNvcnQiLCJpc0xhc3RTb3J0aW5nIiwiSGVhZGVyQ2VsbCIsImluZGV4Iiwic29ydGluZyIsInRleHQiLCJoZWFkZXJUaXRsZSIsImhlYWRlckFsaWduIiwiaGVhZGVyRm9ybWF0dGVyIiwiaGVhZGVyRXZlbnRzIiwiaGVhZGVyQ2xhc3NlcyIsImhlYWRlclN0eWxlIiwiaGVhZGVyQXR0cnMiLCJoZWFkZXJTb3J0aW5nQ2xhc3NlcyIsImhlYWRlclNvcnRpbmdTdHlsZSIsImNlbGxBdHRycyIsInNvcnRTeW1ib2wiLCJmaWx0ZXJFbG0iLCJjZWxsU3R5bGUiLCJjZWxsQ2xhc3NlcyIsInRpdGxlIiwidGV4dEFsaWduIiwiY3VzdG9tQ2xpY2siLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJzb3J0RWxlbWVudCIsImZpbHRlckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZm9ybWF0dGVyIiwiZm9ybWF0RXh0cmFEYXRhIiwiYW55IiwiZXZlbnRzIiwiYWxpZ24iLCJhdHRycyIsInNvcnRGdW5jIiwiZWRpdG9yIiwiZWRpdGFibGUiLCJlZGl0Q2VsbFN0eWxlIiwiZWRpdENlbGxDbGFzc2VzIiwiZWRpdG9yU3R5bGUiLCJlZGl0b3JDbGFzc2VzIiwiZWRpdG9yUmVuZGVyZXIiLCJ2YWxpZGF0b3IiLCJmaWx0ZXJWYWx1ZSIsIm51bWJlciIsIlNvcnRTeW1ib2wiLCJTb3J0Q2FyZXQiLCJvcmRlckNsYXNzIiwiZHJvcHVwIiwiQ2hlY2tCb3giLCJjaGVja2VkIiwiaW5kZXRlcm1pbmF0ZSIsImlucHV0IiwiU2VsZWN0aW9uSGVhZGVyQ2VsbCIsImhhbmRsZUNoZWNrQm94Q2xpY2siLCJiaW5kIiwiY2hlY2tlZFN0YXR1cyIsIkNhcHRpb24iLCJCb2R5Iiwic2VsZWN0ZWRSb3dLZXlzIiwiY29udGVudCIsImluZGljYXRpb24iLCJub25FZGl0YWJsZVJvd3MiLCJrZXkiLCJpbmRleE9mIiwic2VsZWN0ZWRTdHlsZSIsInNlbGVjdGVkQ2xhc3NlcyIsImJhY2tncm91bmRDb2xvciIsInNlbGVjdGFibGUiLCJSb3ciLCJyb3dJbmRleCIsImVkaXRhYmxlUm93Iiwib25TdGFydCIsIkVkaXRpbmdDZWxsIiwiZWRpdGluZ1Jvd0lkeCIsInJpZHgiLCJlZGl0aW5nQ29sSWR4IiwiY2lkeCIsIkNMSUNLX1RPX0NFTExfRURJVCIsIkRCQ0xJQ0tfVE9fQ0VMTF9FRElUIiwicmVzdCIsInRyQXR0cnMiLCJkZWxlZ2F0ZSIsImVkaXRDZWxsc3R5bGUiLCJlZGl0Q2VsbGNsYXNzZXMiLCJDZWxsIiwiaGFuZGxlRWRpdGluZ0NlbGwiLCJjb2x1bW5JbmRleCIsImRiY2xpY2tUb0VkaXQiLCJjdXN0b21EYkNsaWNrIiwib25Eb3VibGVDbGljayIsImNlbGxUaXRsZSIsIlNlbGVjdGlvbkNlbGwiLCJoYW5kbGVDbGljayIsImlucHV0VHlwZSIsInJvd0tleSIsImRpc2FibGVkIiwiY2xpY2tOdW0iLCJjcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyIiwiY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIiLCJjYiIsIkRFTEFZX0ZPUl9EQkNMSUNLIiwiY2xpY2tGbiIsIm5ld0F0dHJzIiwiZm9yRWFjaCIsImF0dHIiLCJSb3dTZWN0aW9uIiwiY29sU3BhbiIsImluY2x1ZGVTZWxlY3RDb2x1bW4iLCJjb2x1bW5MZW4iLCJjIiwid2l0aERhdGFTdG9yZSIsIndyYXBDb21wb25lbnRzIiwic2V0QWxsRGF0YSIsIkJhc2VDb21wb25lbnQiLCJCYXNlIiwid3JhcHBlckZhY3RvcnkiLCJyZW1vdGVSZXNvbHZlciIsImNvbCIsIl8iLCJiYXNlUHJvcHMiLCJTdG9yZSIsIl9kYXRhIiwiX2ZpbHRlcmVkRGF0YSIsIl9rZXlGaWVsZCIsIl9zb3J0T3JkZXIiLCJ1bmRlZmluZWQiLCJfc29ydEZpZWxkIiwiX3NlbGVjdGVkIiwiX2ZpbHRlcnMiLCJfcGFnZSIsIl9zaXplUGVyUGFnZSIsImRlZmF1bHRPcmRlciIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImZpbHRlcmVkRGF0YSIsImNvbXBhcmF0b3IiLCJsb2NhbGVDb21wYXJlIiwidmFsdWVBIiwidmFsdWVCIiwibmV4dE9yZGVyIiwiaGFuZGxlU29ydCIsInNldFNvcnQiLCJpc1JlbW90ZVNvcnQiLCJoYW5kbGVTb3J0Q2hhbmdlIiwic29ydEJ5Iiwic29ydGVkQ29sdW1uIiwiZm9yY2VVcGRhdGUiLCJoYW5kbGVSb3dTZWxlY3QiLCJoYW5kbGVBbGxSb3dzU2VsZWN0IiwiY3VyclNlbGVjdGVkIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7a0JDN0JlO0FBQ2JBLFlBQVUsS0FERztBQUViQyxhQUFXLE1BRkU7QUFHYkMscUJBQW1CLE9BSE47QUFJYkMsdUJBQXFCLFVBSlI7QUFLYkMsdUJBQXFCLHFCQUxSO0FBTWJDLDJCQUF5QixTQU5aO0FBT2JDLGlDQUErQixlQVBsQjtBQVFiQyw2QkFBMkI7QUFSZCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNBZjtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDeEIsU0FBTyxDQUFDQSxHQUFELEVBQ0pDLElBREksQ0FDQyxHQURELEVBRUpDLE9BRkksQ0FFSSxLQUZKLEVBRVcsR0FGWCxFQUdKQSxPQUhJLENBR0ksS0FISixFQUdXLEVBSFgsRUFJSkMsS0FKSSxDQUlFLEdBSkYsQ0FBUDtBQUtEOztBQUVELFNBQVNDLEdBQVQsQ0FBYUMsTUFBYixFQUFxQkMsS0FBckIsRUFBNEI7QUFDMUIsTUFBTUMsWUFBWVIsWUFBWU8sS0FBWixDQUFsQjtBQUNBLE1BQUlFLGVBQUo7QUFDQSxNQUFJO0FBQ0ZBLGFBQVNELFVBQVVFLE1BQVYsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsYUFBZ0JELEtBQUtDLElBQUwsQ0FBaEI7QUFBQSxLQUFqQixFQUE2Q04sTUFBN0MsQ0FBVDtBQUNELEdBRkQsQ0FFRSxPQUFPTyxDQUFQLEVBQVUsQ0FBRTtBQUNkLFNBQU9KLE1BQVA7QUFDRDs7QUFFRCxTQUFTSyxHQUFULENBQWFSLE1BQWIsRUFBcUJDLEtBQXJCLEVBQTRCUSxLQUE1QixFQUFpRDtBQUFBLE1BQWRDLElBQWMsdUVBQVAsS0FBTzs7QUFDL0MsTUFBTVIsWUFBWVIsWUFBWU8sS0FBWixDQUFsQjtBQUNBLE1BQUlVLFFBQVEsQ0FBWjtBQUNBVCxZQUFVRSxNQUFWLENBQWlCLFVBQUNRLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3pCRixhQUFTLENBQVQ7QUFDQSxRQUFJLE9BQU9DLEVBQUVDLENBQUYsQ0FBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQixVQUFJLENBQUNILElBQUwsRUFBVyxNQUFNLElBQUlJLEtBQUosQ0FBYUYsQ0FBYixTQUFrQkMsQ0FBbEIsbUJBQU47QUFDWEQsUUFBRUMsQ0FBRixJQUFPLEVBQVA7QUFDQSxhQUFPRCxFQUFFQyxDQUFGLENBQVA7QUFDRDs7QUFFRCxRQUFJRixVQUFVVCxVQUFVYSxNQUF4QixFQUFnQztBQUM5QkgsUUFBRUMsQ0FBRixJQUFPSixLQUFQO0FBQ0EsYUFBT0EsS0FBUDtBQUNEO0FBQ0QsV0FBT0csRUFBRUMsQ0FBRixDQUFQO0FBQ0QsR0FiRCxFQWFHYixNQWJIO0FBY0Q7O0FBRUQsU0FBU2dCLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3ZCLFNBQU9BLE9BQVEsT0FBT0EsR0FBUCxLQUFlLFVBQTlCO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0EsU0FBU0MsUUFBVCxDQUFrQkQsR0FBbEIsRUFBdUI7QUFDckIsTUFBTUUsY0FBY0YsR0FBZCx5Q0FBY0EsR0FBZCxDQUFOO0FBQ0EsU0FBT0EsUUFBUSxJQUFSLElBQWdCRSxTQUFTLFFBQXpCLElBQXFDRixJQUFJRyxXQUFKLEtBQW9CQyxNQUFoRTtBQUNEOztBQUVELFNBQVNDLGFBQVQsQ0FBdUJMLEdBQXZCLEVBQTRCO0FBQzFCLE1BQUksQ0FBQ0MsU0FBU0QsR0FBVCxDQUFMLEVBQW9CLE9BQU8sS0FBUDs7QUFFcEIsTUFBTU0saUJBQWlCRixPQUFPRyxTQUFQLENBQWlCRCxjQUF4QztBQUNBLE1BQU1FLE9BQU9KLE9BQU9JLElBQVAsQ0FBWVIsR0FBWixDQUFiOztBQUVBLE9BQUssSUFBSVMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxLQUFLVixNQUF6QixFQUFpQ1csS0FBSyxDQUF0QyxFQUF5QztBQUN2QyxRQUFJSCxlQUFlSSxJQUFmLENBQW9CVixHQUFwQixFQUF5QlEsS0FBS0MsQ0FBTCxDQUF6QixDQUFKLEVBQXVDLE9BQU8sS0FBUDtBQUN4Qzs7QUFFRCxTQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFTRSxTQUFULENBQW1CbkIsS0FBbkIsRUFBMEI7QUFDeEIsU0FBTyxPQUFPQSxLQUFQLEtBQWlCLFdBQWpCLElBQWdDQSxVQUFVLElBQWpEO0FBQ0Q7O0FBRUQsU0FBU29CLEtBQVQsQ0FBZUMsRUFBZixFQUFtQkMsRUFBbkIsRUFBdUI7QUFDckIsU0FBT0MsV0FBVztBQUFBLFdBQU1GLElBQU47QUFBQSxHQUFYLEVBQXVCQyxFQUF2QixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0JDLElBQXhCLEVBQThCQyxTQUE5QixFQUF5QztBQUFBO0FBQUE7O0FBQ3ZDLE1BQUlDLGdCQUFKOztBQUVBLFNBQU8sWUFBTTtBQUNYLFFBQU1DLFFBQVEsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCRCxnQkFBVSxJQUFWOztBQUVBLFVBQUksQ0FBQ0QsU0FBTCxFQUFnQjtBQUNkRixhQUFLSyxLQUFMO0FBQ0Q7QUFDRixLQU5EOztBQVFBLFFBQU1DLFVBQVVKLGFBQWEsQ0FBQ0MsT0FBOUI7O0FBRUFJLGlCQUFhSixPQUFiO0FBQ0FBLGNBQVVMLFdBQVdNLEtBQVgsRUFBa0JILFFBQVEsQ0FBMUIsQ0FBVjs7QUFFQSxRQUFJSyxPQUFKLEVBQWE7QUFDWE4sV0FBS1EsSUFBTDtBQUNEO0FBQ0YsR0FqQkQ7QUFrQkQ7O2tCQUVjO0FBQ2IzQyxVQURhO0FBRWJTLFVBRmE7QUFHYlEsd0JBSGE7QUFJYkUsb0JBSmE7QUFLYkksOEJBTGE7QUFNYk0sc0JBTmE7QUFPYkMsY0FQYTtBQVFiSTtBQVJhLEM7Ozs7OztBQ2xHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUNNLElBQU1VLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYO0FBQUEsU0FBa0I7QUFBQSxXQUFPQyxJQUFJRixRQUFKLE1BQWtCQyxFQUF6QjtBQUFBLEdBQWxCO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUUsd0NBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNKLFFBQVQsUUFBU0EsUUFBVDtBQUFBLFNBQXdCO0FBQUEsV0FBTUksS0FBS0MsSUFBTCxDQUFVTixTQUFTQyxRQUFULEVBQW1CQyxFQUFuQixDQUFWLENBQU47QUFBQSxHQUF4QjtBQUFBLENBQXRCLEM7Ozs7Ozs7QUNIUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0I7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSwyQjs7Ozs7OztBQ3BEQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix1Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1EsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0IsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CLHFCQUFxQixPQUFPLFVBQVUsU0FBUztBQUMvQyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYyxVQUFVLElBQUk7QUFDckQsMEJBQTBCLHNCQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsY0FBYyxVQUFVLG9CQUFvQixpQkFBaUI7QUFDcEo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVkseUJBQXlCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0JBQWtCO0FBQzNDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLG1CQUFtQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixpQkFBaUI7QUFDMUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixrQkFBa0I7QUFDekM7O0FBRUE7QUFDQSw2QkFBNkIsaUJBQWlCO0FBQzlDO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsSUFBSTtBQUM5QixRQUFRO0FBQ1IsaUNBQWlDLGFBQWEsT0FBTyxFQUFFO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLElBQUk7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qjs7Ozs7O0FDbmtCQSxnRDs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJOzs7Ozs7O0FDakREOztBQUVBOztBQUVBLG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw4Q0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RixjQUFjLFVBQVUsb0JBQW9CLGlCQUFpQjtBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFlBQVk7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMLG1CQUFtQixxQkFBcUI7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLG9DOzs7Ozs7Ozs7Ozs7OztBQzNQQTs7OztBQUNBOzs7O0FBRU8sSUFBTUssd0NBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUdGLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNHLFFBQVQsUUFBU0EsUUFBVDtBQUFBLFNBQXdCSCxLQUFLakMsTUFBTCxLQUFnQm9DLFNBQVNwQyxNQUFqRDtBQUFBLENBQXRCOztBQUVBLElBQU1xQyw4Q0FBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQWtCLFlBQWdCO0FBQUEsUUFBZkUsS0FBZSx1RUFBUCxFQUFPOztBQUNoRSxRQUFJQSxNQUFNdEMsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixhQUFPb0MsU0FBU3BDLE1BQVQsR0FBa0IsQ0FBekI7QUFDRDtBQUNELFdBQU9vQyxTQUFTRyxNQUFULENBQWdCO0FBQUEsYUFBSyxDQUFDRCxNQUFNRSxRQUFOLENBQWVDLENBQWYsQ0FBTjtBQUFBLEtBQWhCLEVBQXlDekMsTUFBaEQ7QUFDRCxHQUwrQjtBQUFBLENBQXpCOztBQU9BLElBQU0wQywwQ0FBaUIsU0FBakJBLGNBQWlCO0FBQUEsTUFBR1QsSUFBSCxTQUFHQSxJQUFIO0FBQUEsTUFBU0osUUFBVCxTQUFTQSxRQUFUO0FBQUEsU0FBd0IsWUFBZ0I7QUFBQSxRQUFmUyxLQUFlLHVFQUFQLEVBQU87O0FBQ3BFLFFBQUlBLE1BQU10QyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGFBQU9pQyxLQUFLVSxHQUFMLENBQVM7QUFBQSxlQUFPLGdCQUFFM0QsR0FBRixDQUFNK0MsR0FBTixFQUFXRixRQUFYLENBQVA7QUFBQSxPQUFULENBQVA7QUFDRDtBQUNELFdBQU9JLEtBQ0pNLE1BREksQ0FDRztBQUFBLGFBQU8sQ0FBQ0QsTUFBTUUsUUFBTixDQUFlLGdCQUFFeEQsR0FBRixDQUFNK0MsR0FBTixFQUFXRixRQUFYLENBQWYsQ0FBUjtBQUFBLEtBREgsRUFFSmMsR0FGSSxDQUVBO0FBQUEsYUFBTyxnQkFBRTNELEdBQUYsQ0FBTStDLEdBQU4sRUFBV0YsUUFBWCxDQUFQO0FBQUEsS0FGQSxDQUFQO0FBR0QsR0FQNkI7QUFBQSxDQUF2Qjs7QUFTQSxJQUFNZSw4Q0FBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdSLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQWtCLFlBQWdCO0FBQUEsUUFBZkUsS0FBZSx1RUFBUCxFQUFPOztBQUNoRSxRQUFJQSxNQUFNdEMsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixhQUFPLEVBQVA7QUFDRDtBQUNELFdBQU9vQyxTQUFTRyxNQUFULENBQWdCO0FBQUEsYUFBS0QsTUFBTUUsUUFBTixDQUFlQyxDQUFmLENBQUw7QUFBQSxLQUFoQixDQUFQO0FBQ0QsR0FMK0I7QUFBQSxDQUF6Qjs7QUFPQSxJQUFNSSw0Q0FBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUN4QyxNQUFNQyxTQUFTLHlCQUFjRCxLQUFkLENBQWY7QUFDQSxTQUFPQSxNQUFNVixRQUFOLENBQWVPLEdBQWYsQ0FBbUI7QUFBQSxXQUFLSSxPQUFPQyxDQUFQLENBQUw7QUFBQSxHQUFuQixDQUFQO0FBQ0QsQ0FITSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCUDs7Ozs7Ozs7Ozs7O2tCQUVlO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVDQUVnQjtBQUFBLFlBQVpDLEtBQVksdUVBQUosRUFBSTs7QUFDekIsWUFBTUgsUUFBUSxLQUFLQSxLQUFMLElBQWMsS0FBS0ksS0FBTCxDQUFXSixLQUF2QztBQUNBO0FBQ0VLLGdCQUFNTCxNQUFNSyxJQURkO0FBRUVDLHVCQUFhTixNQUFNTSxXQUZyQjtBQUdFQyxtQkFBU1AsTUFBTU8sT0FIakI7QUFJRUMscUJBQVdSLE1BQU1RLFNBSm5CO0FBS0VDLHFCQUFXVCxNQUFNUyxTQUxuQjtBQU1FdEIsZ0JBQU1hLE1BQU1VLFVBQU47QUFOUixXQU9LUCxLQVBMO0FBU0Q7QUFiVTtBQUFBO0FBQUEsMkNBZVU7QUFBQSxZQUNYUSxNQURXLEdBQ0EsS0FBS1AsS0FETCxDQUNYTyxNQURXOztBQUVuQixlQUFPQSxXQUFXLElBQVgsSUFBb0IsZ0JBQUV0RCxRQUFGLENBQVdzRCxNQUFYLEtBQXNCQSxPQUFPQyxVQUF4RDtBQUNEO0FBbEJVO0FBQUE7QUFBQSwwQ0FvQlM7QUFBQSxZQUNWRCxNQURVLEdBQ0MsS0FBS1AsS0FETixDQUNWTyxNQURVOztBQUVsQixlQUFPQSxXQUFXLElBQVgsSUFBb0IsZ0JBQUV0RCxRQUFGLENBQVdzRCxNQUFYLEtBQXNCQSxPQUFPbEIsTUFBeEQ7QUFDRDtBQXZCVTtBQUFBO0FBQUEscUNBeUJJO0FBQUEsWUFDTGtCLE1BREssR0FDTSxLQUFLUCxLQURYLENBQ0xPLE1BREs7O0FBRWIsZUFBT0EsV0FBVyxJQUFYLElBQW9CLGdCQUFFdEQsUUFBRixDQUFXc0QsTUFBWCxLQUFzQkEsT0FBT0UsSUFBeEQ7QUFDRDtBQTVCVTtBQUFBO0FBQUEseUNBOEJRO0FBQUEsWUFDVEYsTUFEUyxHQUNFLEtBQUtQLEtBRFAsQ0FDVE8sTUFEUzs7QUFFakIsZUFBT0EsV0FBVyxJQUFYLElBQW9CLGdCQUFFdEQsUUFBRixDQUFXc0QsTUFBWCxLQUFzQkEsT0FBT0csUUFBeEQ7QUFDRDtBQWpDVTtBQUFBO0FBQUEsK0NBbUNjO0FBQ3ZCLGFBQUtWLEtBQUwsQ0FBV1csYUFBWCxDQUF5QixZQUF6QixFQUF1QyxLQUFLQyxjQUFMLEVBQXZDO0FBQ0Q7QUFyQ1U7QUFBQTtBQUFBLGlEQXVDZ0I7QUFDekIsWUFBTUMsV0FBVyxFQUFqQjtBQUNBLFlBQUksS0FBS0Msa0JBQUwsRUFBSixFQUErQjtBQUM3QixjQUFNQyxVQUFVLEtBQUtmLEtBQUwsQ0FBV1EsVUFBWCxDQUFzQk8sT0FBdEIsSUFBaUMsRUFBakQ7QUFDQUYsbUJBQVNaLElBQVQsR0FBZ0IsZ0JBQUV0QyxTQUFGLENBQVlvRCxRQUFRQyxjQUFwQixJQUFzQ0QsUUFBUUMsY0FBOUMsR0FBK0QsQ0FBL0U7QUFDRDtBQUNELGFBQUtoQixLQUFMLENBQVdXLGFBQVgsQ0FBeUIsUUFBekIsRUFBbUMsS0FBS0MsY0FBTCxDQUFvQkMsUUFBcEIsQ0FBbkM7QUFDRDtBQTlDVTtBQUFBO0FBQUEseUNBZ0RRO0FBQ2pCLGFBQUtiLEtBQUwsQ0FBV1csYUFBWCxDQUF5QixNQUF6QixFQUFpQyxLQUFLQyxjQUFMLEVBQWpDO0FBQ0Q7QUFsRFU7QUFBQTtBQUFBLHVDQW9ETUssS0FwRE4sRUFvRGFDLFNBcERiLEVBb0R3QkMsUUFwRHhCLEVBb0RrQztBQUMzQyxZQUFNVCxXQUFXLEVBQUVPLFlBQUYsRUFBU0Msb0JBQVQsRUFBb0JDLGtCQUFwQixFQUFqQjtBQUNBLGFBQUtuQixLQUFMLENBQVdXLGFBQVgsQ0FBeUIsVUFBekIsRUFBcUMsS0FBS0MsY0FBTCxDQUFvQixFQUFFRixrQkFBRixFQUFwQixDQUFyQztBQUNEO0FBdkRVOztBQUFBO0FBQUEsSUFDZ0JVLFVBRGhCO0FBQUEsQzs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7Ozs7OztrQkFFZSxrRDs7Ozs7Ozs7Ozs7Ozs7O0FDRGY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OzsrZUFYQTs7SUFhTUMsYzs7O0FBQ0osMEJBQVlyQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtzQixhQUFMOztBQUVBLFVBQUt2QixLQUFMLEdBQWE7QUFDWGhCLFlBQU1pQixNQUFNakI7QUFERCxLQUFiO0FBSmlCO0FBT2xCOzs7OzhDQUV5QndDLFMsRUFBVztBQUNuQyxXQUFLQyxRQUFMLENBQWM7QUFDWnpDLGNBQU13QyxVQUFVeEM7QUFESixPQUFkO0FBR0Q7Ozs2QkFFUTtBQUFBLG1CQUNzQixLQUFLaUIsS0FEM0I7QUFBQSxVQUNDeUIsT0FERCxVQUNDQSxPQUREO0FBQUEsVUFDVUMsT0FEVixVQUNVQSxPQURWOztBQUVQLFVBQU1DLFFBQVEsS0FBS0MsV0FBTCxFQUFkO0FBQ0EsVUFBSUgsV0FBV0MsT0FBZixFQUF3QjtBQUN0QixZQUFNRyxpQkFBaUJILFFBQVFDLEtBQVIsRUFBZUYsT0FBZixDQUF2QjtBQUNBLGVBQU8sOEJBQUMsY0FBRCxPQUFQO0FBQ0Q7QUFDRCxhQUFPRSxLQUFQO0FBQ0Q7OztrQ0FFYTtBQUFBLG9CQWlCUixLQUFLM0IsS0FqQkc7QUFBQSxVQUVWSixLQUZVLFdBRVZBLEtBRlU7QUFBQSxVQUdWa0MsT0FIVSxXQUdWQSxPQUhVO0FBQUEsVUFJVm5ELFFBSlUsV0FJVkEsUUFKVTtBQUFBLFVBS1ZDLEVBTFUsV0FLVkEsRUFMVTtBQUFBLFVBTVZtRCxPQU5VLFdBTVZBLE9BTlU7QUFBQSxVQU9WQyxPQVBVLFdBT1ZBLE9BUFU7QUFBQSxVQVFWQyxLQVJVLFdBUVZBLEtBUlU7QUFBQSxVQVNWQyxRQVRVLFdBU1ZBLFFBVFU7QUFBQSxVQVVWQyxTQVZVLFdBVVZBLFNBVlU7QUFBQSxVQVdWQyxnQkFYVSxXQVdWQSxnQkFYVTtBQUFBLFVBWVZDLE9BWlUsV0FZVkEsT0FaVTtBQUFBLFVBYVZDLFFBYlUsV0FhVkEsUUFiVTtBQUFBLFVBY1ZDLFVBZFUsV0FjVkEsVUFkVTtBQUFBLFVBZVZDLGNBZlUsV0FlVkEsY0FmVTtBQUFBLFVBZ0JWQyxTQWhCVSxXQWdCVkEsU0FoQlU7OztBQW1CWixVQUFNQyxvQkFBb0IsMEJBQUcsdUJBQUgsRUFBNEJGLGNBQTVCLENBQTFCOztBQUVBLFVBQU1HLGFBQWEsMEJBQUcsT0FBSCxFQUFZO0FBQzdCLHlCQUFpQlgsT0FEWTtBQUU3Qix1QkFBZUMsS0FGYztBQUc3QiwwQkFBa0JDLFFBSFc7QUFJN0IsMkJBQW1CQztBQUpVLE9BQVosRUFLaEJKLE9BTGdCLENBQW5COztBQU9BLFVBQU1hLG9CQUFvQixLQUFLQyxxQkFBTCxDQUEyQjtBQUNuREMscUJBQWEsS0FBSzlDLEtBQUwsQ0FBVzhDO0FBRDJCLE9BQTNCLENBQTFCOztBQUlBLFVBQU1DLDBCQUEwQixLQUFLQyw4QkFBTCxDQUFvQztBQUNsRUMseUJBQWlCLEtBQUtqRCxLQUFMLENBQVdpRCxlQURzQztBQUVsRS9ELGtCQUFVVSxNQUFNVixRQUZrRDtBQUdsRWdFLHlCQUFpQiw4QkFBY3RELEtBQWQ7QUFIaUQsT0FBcEMsQ0FBaEM7O0FBTUEsVUFBTXVELGVBQWdCZCxXQUFXO0FBQUE7QUFBQTtBQUFXQTtBQUFYLE9BQWpDOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBWUssaUJBQWpCO0FBQ0U7QUFBQTtBQUFBLFlBQU8sSUFBSzlELEVBQVosRUFBaUIsV0FBWStELFVBQTdCO0FBQ0lRLHNCQURKO0FBRUU7QUFDRSxxQkFBVXJCLE9BRFo7QUFFRSx1QkFBWWxDLE1BQU1RLFNBRnBCO0FBR0UsdUJBQVlSLE1BQU1TLFNBSHBCO0FBSUUsb0JBQVMsS0FBS0wsS0FBTCxDQUFXb0QsTUFKdEI7QUFLRSxzQkFBVyxLQUFLcEQsS0FBTCxDQUFXcUQsUUFMeEI7QUFNRSx1QkFBWU47QUFOZCxZQUZGO0FBVUU7QUFDRSxrQkFBTyxLQUFLaEQsS0FBTCxDQUFXaEIsSUFEcEI7QUFFRSxzQkFBV0osUUFGYjtBQUdFLHFCQUFVbUQsT0FIWjtBQUlFLHFCQUFVLEtBQUt3QixPQUFMLEVBSlo7QUFLRSwrQkFBb0IsS0FBS0MsaUJBQUwsRUFMdEI7QUFNRSw4QkFBbUJuQixnQkFOckI7QUFPRSxzQkFBVyxLQUFLcEMsS0FBTCxDQUFXVSxRQUFYLElBQXVCLEVBUHBDO0FBUUUsdUJBQVlrQyxpQkFSZDtBQVNFLDZCQUFrQmhELE1BQU1WLFFBVDFCO0FBVUUsc0JBQVdvRCxRQVZiO0FBV0Usd0JBQWFDLFVBWGY7QUFZRSx1QkFBWUU7QUFaZDtBQVZGO0FBREYsT0FERjtBQTZCRDs7OztFQS9GMEIsOEM7O0FBa0c3QnBCLGVBQWVtQyxTQUFmLEdBQTJCO0FBQ3pCN0UsWUFBVSxvQkFBVThFLE1BQVYsQ0FBaUJDLFVBREY7QUFFekIzRSxRQUFNLG9CQUFVNEUsS0FBVixDQUFnQkQsVUFGRztBQUd6QjVCLFdBQVMsb0JBQVU2QixLQUFWLENBQWdCRCxVQUhBO0FBSXpCbkQsVUFBUSxvQkFBVXFELFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUMsSUFBWCxFQUFpQixvQkFBVUMsS0FBVixDQUFnQjtBQUMzRHRELGdCQUFZLG9CQUFVcUQ7QUFEcUMsR0FBaEIsQ0FBakIsQ0FBcEIsQ0FKaUI7QUFPekJqRSxTQUFPLG9CQUFVbUUsTUFQUTtBQVF6QjNCLG9CQUFrQixvQkFBVXdCLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUgsTUFBWCxFQUFtQixvQkFBVXhGLElBQTdCLENBQXBCLENBUk87QUFTekIrRCxXQUFTLG9CQUFVNkIsSUFUTTtBQVV6QjNCLFlBQVUsb0JBQVUyQixJQVZLO0FBV3pCNUIsU0FBTyxvQkFBVTRCLElBWFE7QUFZekJqRixNQUFJLG9CQUFVNkUsTUFaVztBQWF6QjFCLFdBQVMsb0JBQVUwQixNQWJNO0FBY3pCakIsa0JBQWdCLG9CQUFVaUIsTUFkRDtBQWV6QnRCLGFBQVcsb0JBQVUwQixJQWZJO0FBZ0J6QnhCLFdBQVMsb0JBQVV1QixTQUFWLENBQW9CLENBQzNCLG9CQUFVSSxJQURpQixFQUUzQixvQkFBVVAsTUFGaUIsQ0FBcEIsQ0FoQmdCO0FBb0J6QmpELGNBQVksb0JBQVV1RCxNQXBCRztBQXFCekIxRSxVQUFRLG9CQUFVMEUsTUFyQk87QUFzQnpCckQsWUFBVSxvQkFBVXFELE1BdEJLO0FBdUJ6QkUsYUFBVyxvQkFBVUgsS0FBVixDQUFnQjtBQUN6QkksVUFBTSxvQkFBVUMsS0FBVixDQUFnQixDQUFDLGdCQUFNaEosaUJBQVAsRUFBMEIsZ0JBQU1DLG1CQUFoQyxDQUFoQixFQUFzRXNJLFVBRG5EO0FBRXpCVSxtQkFBZSxvQkFBVVAsSUFGQTtBQUd6QlEsaUJBQWEsb0JBQVVSLElBSEU7QUFJekJTLGNBQVUsb0JBQVVyRyxJQUpLO0FBS3pCc0csaUJBQWEsb0JBQVV0RyxJQUxFO0FBTXpCdUcsV0FBTyxvQkFBVVosU0FBVixDQUFvQixDQUFDLG9CQUFVRyxNQUFYLEVBQW1CLG9CQUFVOUYsSUFBN0IsQ0FBcEIsQ0FOa0I7QUFPekI4RCxhQUFTLG9CQUFVNkIsU0FBVixDQUFvQixDQUFDLG9CQUFVSCxNQUFYLEVBQW1CLG9CQUFVeEYsSUFBN0IsQ0FBcEIsQ0FQZ0I7QUFRekJ3RyxtQkFBZSxvQkFBVWQsS0FSQTtBQVN6QmUsYUFBUyxvQkFBVWQsU0FBVixDQUFvQixDQUFDLG9CQUFVSCxNQUFYLEVBQW1CLG9CQUFVeEYsSUFBN0IsQ0FBcEIsQ0FUZ0I7QUFVekIwRyxzQkFBa0Isb0JBQVVkO0FBVkgsR0FBaEIsQ0F2QmM7QUFtQ3pCZixlQUFhLG9CQUFVN0UsSUFuQ0U7QUFvQ3pCZ0YsbUJBQWlCLG9CQUFVaEYsSUFwQ0Y7QUFxQ3pCcUUsWUFBVSxvQkFBVXNCLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUcsTUFBWCxFQUFtQixvQkFBVTlGLElBQTdCLENBQXBCLENBckNlO0FBc0N6QndFLGFBQVcsb0JBQVVzQixNQXRDSTtBQXVDekJ4QixjQUFZLG9CQUFVcUIsU0FBVixDQUFvQixDQUFDLG9CQUFVSCxNQUFYLEVBQW1CLG9CQUFVeEYsSUFBN0IsQ0FBcEIsQ0F2Q2E7QUF3Q3pCMkcsaUJBQWUsb0JBQVVDLE9BQVYsQ0FBa0Isb0JBQVVmLEtBQVYsQ0FBZ0I7QUFDL0M1QyxlQUFXLG9CQUFVdUMsTUFBVixDQUFpQkMsVUFEbUI7QUFFL0NvQixXQUFPLG9CQUFVWCxLQUFWLENBQWdCLENBQUMsZ0JBQU1qSixTQUFQLEVBQWtCLGdCQUFNRCxRQUF4QixDQUFoQixFQUFtRHlJO0FBRlgsR0FBaEIsQ0FBbEIsQ0F4Q1U7QUE0Q3pCcUIsd0JBQXNCLG9CQUFVWixLQUFWLENBQWdCLENBQUMsZ0JBQU1qSixTQUFQLEVBQWtCLGdCQUFNRCxRQUF4QixDQUFoQixDQTVDRztBQTZDekJ5RyxXQUFTLG9CQUFVekQsSUE3Q007QUE4Q3pCMEMsaUJBQWUsb0JBQVUxQyxJQTlDQTtBQStDekJtRixVQUFRLG9CQUFVbkYsSUEvQ087QUFnRHpCb0YsWUFBVSxvQkFBVXBGO0FBaERLLENBQTNCOztBQW1EQW9ELGVBQWUyRCxZQUFmLEdBQThCO0FBQzVCekUsVUFBUSxLQURvQjtBQUU1QnlCLFdBQVMsS0FGbUI7QUFHNUJFLFlBQVUsSUFIa0I7QUFJNUJELFNBQU8sS0FKcUI7QUFLNUJFLGFBQVcsS0FMaUI7QUFNNUJDLG9CQUFrQjtBQU5VLENBQTlCOztrQkFTZWYsYzs7Ozs7OztBQzNLZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ1pBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU00RCxTQUFTLFNBQVRBLE1BQVMsQ0FBQ2pGLEtBQUQsRUFBVztBQUFBLE1BQ2hCM0UsbUJBRGdCLG1CQUNoQkEsbUJBRGdCO0FBQUEsTUFJdEJ5RyxPQUpzQixHQVVwQjlCLEtBVm9CLENBSXRCOEIsT0FKc0I7QUFBQSxNQUt0QnNCLE1BTHNCLEdBVXBCcEQsS0FWb0IsQ0FLdEJvRCxNQUxzQjtBQUFBLE1BTXRCQyxRQU5zQixHQVVwQnJELEtBVm9CLENBTXRCcUQsUUFOc0I7QUFBQSxNQU90QmpELFNBUHNCLEdBVXBCSixLQVZvQixDQU90QkksU0FQc0I7QUFBQSxNQVF0QkMsU0FSc0IsR0FVcEJMLEtBVm9CLENBUXRCSyxTQVJzQjtBQUFBLE1BU3RCNEQsU0FUc0IsR0FVcEJqRSxLQVZvQixDQVN0QmlFLFNBVHNCOzs7QUFZeEIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFFS0EsZ0JBQVVDLElBQVYsS0FBbUI3SSxtQkFBbkIsSUFBMEMsQ0FBQzRJLFVBQVVVLGdCQUF0RCxHQUNJLDZEQUEwQlYsU0FBMUIsQ0FESixHQUMrQyxJQUhuRDtBQU1JbkMsY0FBUXJDLEdBQVIsQ0FBWSxVQUFDeUYsTUFBRCxFQUFTekgsQ0FBVCxFQUFlO0FBQ3pCLFlBQUksQ0FBQ3lILE9BQU9DLE1BQVosRUFBb0I7QUFDbEIsY0FBTUMsV0FBV0YsT0FBT2hFLFNBQVAsS0FBcUJkLFNBQXRDO0FBQ0EsY0FBTWlGLGdCQUFnQkgsT0FBT2hFLFNBQVAsS0FBcUJkLFNBQTNDOztBQUVBLGlCQUNFO0FBQ0UsbUJBQVEzQyxDQURWO0FBRUUsaUJBQU15SCxPQUFPaEUsU0FGZjtBQUdFLG9CQUFTZ0UsTUFIWDtBQUlFLG9CQUFTOUIsTUFKWDtBQUtFLHFCQUFVZ0MsUUFMWjtBQU1FLHNCQUFXL0IsUUFOYjtBQU9FLHVCQUFZaEQsU0FQZDtBQVFFLDJCQUFnQmdGO0FBUmxCLFlBREY7QUFXRDtBQUNELGVBQU8sS0FBUDtBQUNELE9BbEJEO0FBTko7QUFERixHQURGO0FBK0JELENBM0NELEMsQ0FSQTs7O0FBcURBSixPQUFPekIsU0FBUCxHQUFtQjtBQUNqQjFCLFdBQVMsb0JBQVU2QixLQUFWLENBQWdCRCxVQURSO0FBRWpCTixVQUFRLG9CQUFVbkYsSUFGRDtBQUdqQm9GLFlBQVUsb0JBQVVwRixJQUhIO0FBSWpCbUMsYUFBVyxvQkFBVXFELE1BSko7QUFLakJwRCxhQUFXLG9CQUFVb0QsTUFMSjtBQU1qQlEsYUFBVyxvQkFBVUY7QUFOSixDQUFuQjs7a0JBU2VrQixNOzs7Ozs7Ozs7Ozs7O2tRQzlEZjs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU1LLGFBQWEsU0FBYkEsVUFBYSxDQUFDdEYsS0FBRCxFQUFXO0FBQUEsTUFFMUJrRixNQUYwQixHQVN4QmxGLEtBVHdCLENBRTFCa0YsTUFGMEI7QUFBQSxNQUcxQkssS0FIMEIsR0FTeEJ2RixLQVR3QixDQUcxQnVGLEtBSDBCO0FBQUEsTUFJMUJuQyxNQUowQixHQVN4QnBELEtBVHdCLENBSTFCb0QsTUFKMEI7QUFBQSxNQUsxQm9DLE9BTDBCLEdBU3hCeEYsS0FUd0IsQ0FLMUJ3RixPQUwwQjtBQUFBLE1BTTFCbkYsU0FOMEIsR0FTeEJMLEtBVHdCLENBTTFCSyxTQU4wQjtBQUFBLE1BTzFCZ0YsYUFQMEIsR0FTeEJyRixLQVR3QixDQU8xQnFGLGFBUDBCO0FBQUEsTUFRMUJoQyxRQVIwQixHQVN4QnJELEtBVHdCLENBUTFCcUQsUUFSMEI7QUFBQSxNQVkxQm9DLElBWjBCLEdBd0J4QlAsTUF4QndCLENBWTFCTyxJQVowQjtBQUFBLE1BYTFCaEYsSUFiMEIsR0F3QnhCeUUsTUF4QndCLENBYTFCekUsSUFiMEI7QUFBQSxNQWMxQnBCLE1BZDBCLEdBd0J4QjZGLE1BeEJ3QixDQWMxQjdGLE1BZDBCO0FBQUEsTUFlMUJxRyxXQWYwQixHQXdCeEJSLE1BeEJ3QixDQWUxQlEsV0FmMEI7QUFBQSxNQWdCMUJDLFdBaEIwQixHQXdCeEJULE1BeEJ3QixDQWdCMUJTLFdBaEIwQjtBQUFBLE1BaUIxQkMsZUFqQjBCLEdBd0J4QlYsTUF4QndCLENBaUIxQlUsZUFqQjBCO0FBQUEsTUFrQjFCQyxZQWxCMEIsR0F3QnhCWCxNQXhCd0IsQ0FrQjFCVyxZQWxCMEI7QUFBQSxNQW1CMUJDLGFBbkIwQixHQXdCeEJaLE1BeEJ3QixDQW1CMUJZLGFBbkIwQjtBQUFBLE1Bb0IxQkMsV0FwQjBCLEdBd0J4QmIsTUF4QndCLENBb0IxQmEsV0FwQjBCO0FBQUEsTUFxQjFCQyxXQXJCMEIsR0F3QnhCZCxNQXhCd0IsQ0FxQjFCYyxXQXJCMEI7QUFBQSxNQXNCMUJDLG9CQXRCMEIsR0F3QnhCZixNQXhCd0IsQ0FzQjFCZSxvQkF0QjBCO0FBQUEsTUF1QjFCQyxrQkF2QjBCLEdBd0J4QmhCLE1BeEJ3QixDQXVCMUJnQixrQkF2QjBCOzs7QUEwQjVCLE1BQU1DLHlCQUNELGdCQUFFcEosVUFBRixDQUFhaUosV0FBYixJQUE0QkEsWUFBWWQsTUFBWixFQUFvQkssS0FBcEIsQ0FBNUIsR0FBeURTLFdBRHhELEVBRURILFlBRkMsQ0FBTjs7QUFLQSxNQUFJTyxtQkFBSjtBQUNBLE1BQUlDLGtCQUFKO0FBQ0EsTUFBSUMsWUFBWSxFQUFoQjtBQUNBLE1BQUlDLGNBQWMsZ0JBQUV4SixVQUFGLENBQWErSSxhQUFiLElBQThCQSxjQUFjWixNQUFkLEVBQXNCSyxLQUF0QixDQUE5QixHQUE2RE8sYUFBL0U7O0FBRUEsTUFBSUMsV0FBSixFQUFpQjtBQUNmTyxnQkFBWSxnQkFBRXZKLFVBQUYsQ0FBYWdKLFdBQWIsSUFBNEJBLFlBQVliLE1BQVosRUFBb0JLLEtBQXBCLENBQTVCLEdBQXlEUSxXQUFyRTtBQUNEOztBQUVELE1BQUlMLFdBQUosRUFBaUI7QUFDZlMsY0FBVUssS0FBVixHQUFrQixnQkFBRXpKLFVBQUYsQ0FBYTJJLFdBQWIsSUFBNEJBLFlBQVlSLE1BQVosRUFBb0JLLEtBQXBCLENBQTVCLEdBQXlERSxJQUEzRTtBQUNEOztBQUVELE1BQUlFLFdBQUosRUFBaUI7QUFDZlcsY0FBVUcsU0FBVixHQUFzQixnQkFBRTFKLFVBQUYsQ0FBYTRJLFdBQWIsSUFBNEJBLFlBQVlULE1BQVosRUFBb0JLLEtBQXBCLENBQTVCLEdBQXlESSxXQUEvRTtBQUNEOztBQUVELE1BQUlsRixJQUFKLEVBQVU7QUFDUixRQUFNaUcsY0FBY1AsVUFBVVEsT0FBOUI7QUFDQVIsY0FBVVEsT0FBVixHQUFvQixVQUFDckssQ0FBRCxFQUFPO0FBQ3pCOEcsYUFBTzhCLE1BQVA7QUFDQSxVQUFJLGdCQUFFbkksVUFBRixDQUFhMkosV0FBYixDQUFKLEVBQStCQSxZQUFZcEssQ0FBWjtBQUNoQyxLQUhEO0FBSUE2SixjQUFVUyxTQUFWLEdBQXNCLDBCQUFHVCxVQUFVUyxTQUFiLEVBQXdCLFVBQXhCLENBQXRCOztBQUVBLFFBQUlwQixPQUFKLEVBQWE7QUFDWFksbUJBQWEsaURBQVcsT0FBUS9GLFNBQW5CLEdBQWI7O0FBRUE7QUFDQWtHLG9CQUFjLDBCQUNaQSxXQURZLEVBRVosZ0JBQUV4SixVQUFGLENBQWFrSixvQkFBYixJQUNJQSxxQkFBcUJmLE1BQXJCLEVBQTZCN0UsU0FBN0IsRUFBd0NnRixhQUF4QyxFQUF1REUsS0FBdkQsQ0FESixHQUVJVSxvQkFKUSxDQUFkOztBQU9BSywrQkFDS0EsU0FETCxFQUVLLGdCQUFFdkosVUFBRixDQUFhbUosa0JBQWIsSUFDQ0EsbUJBQW1CaEIsTUFBbkIsRUFBMkI3RSxTQUEzQixFQUFzQ2dGLGFBQXRDLEVBQXFERSxLQUFyRCxDQURELEdBRUNXLGtCQUpOO0FBTUQsS0FqQkQsTUFpQk87QUFDTEUsbUJBQWEscURBQWI7QUFDRDtBQUNGOztBQUVELE1BQUlHLFdBQUosRUFBaUJKLFVBQVVTLFNBQVYsR0FBc0IsMEJBQUdULFVBQVVTLFNBQWIsRUFBd0JMLFdBQXhCLENBQXRCO0FBQ2pCLE1BQUksQ0FBQyxnQkFBRWxKLGFBQUYsQ0FBZ0JpSixTQUFoQixDQUFMLEVBQWlDSCxVQUFVM0IsS0FBVixHQUFrQjhCLFNBQWxCO0FBQ2pDLE1BQUlqSCxNQUFKLEVBQVk7QUFDVmdILGdCQUFZLDhCQUFDLE1BQUQsQ0FBUSxNQUFSLGVBQW9CaEgsT0FBT1csS0FBM0IsSUFBbUMsVUFBV3FELFFBQTlDLEVBQXlELFFBQVM2QixNQUFsRSxJQUFaO0FBQ0Q7O0FBRUQsTUFBTTJCLFdBQVdqQixrQkFDZkEsZ0JBQWdCVixNQUFoQixFQUF3QkssS0FBeEIsRUFBK0IsRUFBRXVCLGFBQWFWLFVBQWYsRUFBMkJXLGVBQWVWLFNBQTFDLEVBQS9CLENBRGUsR0FFZlosSUFGRjs7QUFJQSxNQUFJRyxlQUFKLEVBQXFCO0FBQ25CLFdBQU8sZ0JBQU1vQixhQUFOLENBQW9CLElBQXBCLEVBQTBCYixTQUExQixFQUFxQ1UsUUFBckMsQ0FBUDtBQUNEOztBQUVELFNBQU8sZ0JBQU1HLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEJiLFNBQTFCLEVBQXFDVSxRQUFyQyxFQUErQ1QsVUFBL0MsRUFBMkRDLFNBQTNELENBQVA7QUFDRCxDQTdGRDs7QUErRkFmLFdBQVc5QixTQUFYLEdBQXVCO0FBQ3JCMEIsVUFBUSxvQkFBVXBCLEtBQVYsQ0FBZ0I7QUFDdEI1QyxlQUFXLG9CQUFVdUMsTUFBVixDQUFpQkMsVUFETjtBQUV0QitCLFVBQU0sb0JBQVVoQyxNQUFWLENBQWlCQyxVQUZEO0FBR3RCeUIsWUFBUSxvQkFBVXRCLElBSEk7QUFJdEIrQixxQkFBaUIsb0JBQVUzSCxJQUpMO0FBS3RCZ0osZUFBVyxvQkFBVWhKLElBTEM7QUFNdEJpSixxQkFBaUIsb0JBQVVDLEdBTkw7QUFPdEJyQixtQkFBZSxvQkFBVWxDLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUgsTUFBWCxFQUFtQixvQkFBVXhGLElBQTdCLENBQXBCLENBUE87QUFRdEI4RCxhQUFTLG9CQUFVNkIsU0FBVixDQUFvQixDQUFDLG9CQUFVSCxNQUFYLEVBQW1CLG9CQUFVeEYsSUFBN0IsQ0FBcEIsQ0FSYTtBQVN0QjhILGlCQUFhLG9CQUFVbkMsU0FBVixDQUFvQixDQUFDLG9CQUFVRyxNQUFYLEVBQW1CLG9CQUFVOUYsSUFBN0IsQ0FBcEIsQ0FUUztBQVV0QnVHLFdBQU8sb0JBQVVaLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUcsTUFBWCxFQUFtQixvQkFBVTlGLElBQTdCLENBQXBCLENBVmU7QUFXdEJ5SCxpQkFBYSxvQkFBVTlCLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUMsSUFBWCxFQUFpQixvQkFBVTVGLElBQTNCLENBQXBCLENBWFM7QUFZdEJ1SSxXQUFPLG9CQUFVNUMsU0FBVixDQUFvQixDQUFDLG9CQUFVQyxJQUFYLEVBQWlCLG9CQUFVNUYsSUFBM0IsQ0FBcEIsQ0FaZTtBQWF0QjRILGtCQUFjLG9CQUFVOUIsTUFiRjtBQWN0QnFELFlBQVEsb0JBQVVyRCxNQWRJO0FBZXRCNEIsaUJBQWEsb0JBQVUvQixTQUFWLENBQW9CLENBQUMsb0JBQVVILE1BQVgsRUFBbUIsb0JBQVV4RixJQUE3QixDQUFwQixDQWZTO0FBZ0J0Qm9KLFdBQU8sb0JBQVV6RCxTQUFWLENBQW9CLENBQUMsb0JBQVVILE1BQVgsRUFBbUIsb0JBQVV4RixJQUE3QixDQUFwQixDQWhCZTtBQWlCdEIrSCxpQkFBYSxvQkFBVXBDLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUcsTUFBWCxFQUFtQixvQkFBVTlGLElBQTdCLENBQXBCLENBakJTO0FBa0J0QnFKLFdBQU8sb0JBQVUxRCxTQUFWLENBQW9CLENBQUMsb0JBQVVHLE1BQVgsRUFBbUIsb0JBQVU5RixJQUE3QixDQUFwQixDQWxCZTtBQW1CdEJ3QyxVQUFNLG9CQUFVb0QsSUFuQk07QUFvQnRCMEQsY0FBVSxvQkFBVXRKLElBcEJFO0FBcUJ0Qm1GLFlBQVEsb0JBQVVuRixJQXJCSTtBQXNCdEJ1SixZQUFRLG9CQUFVekQsTUF0Qkk7QUF1QnRCMEQsY0FBVSxvQkFBVTdELFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUMsSUFBWCxFQUFpQixvQkFBVTVGLElBQTNCLENBQXBCLENBdkJZO0FBd0J0QnlKLG1CQUFlLG9CQUFVOUQsU0FBVixDQUFvQixDQUFDLG9CQUFVRyxNQUFYLEVBQW1CLG9CQUFVOUYsSUFBN0IsQ0FBcEIsQ0F4Qk87QUF5QnRCMEoscUJBQWlCLG9CQUFVL0QsU0FBVixDQUFvQixDQUFDLG9CQUFVSCxNQUFYLEVBQW1CLG9CQUFVeEYsSUFBN0IsQ0FBcEIsQ0F6Qks7QUEwQnRCMkosaUJBQWEsb0JBQVVoRSxTQUFWLENBQW9CLENBQUMsb0JBQVVHLE1BQVgsRUFBbUIsb0JBQVU5RixJQUE3QixDQUFwQixDQTFCUztBQTJCdEI0SixtQkFBZSxvQkFBVWpFLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUgsTUFBWCxFQUFtQixvQkFBVXhGLElBQTdCLENBQXBCLENBM0JPO0FBNEJ0QjZKLG9CQUFnQixvQkFBVTdKLElBNUJKO0FBNkJ0QjhKLGVBQVcsb0JBQVU5SixJQTdCQztBQThCdEJvQixZQUFRLG9CQUFVMEUsTUE5Qkk7QUErQnRCaUUsaUJBQWEsb0JBQVUvSjtBQS9CRCxHQUFoQixFQWdDTHlGLFVBakNrQjtBQWtDckI2QixTQUFPLG9CQUFVMEMsTUFBVixDQUFpQnZFLFVBbENIO0FBbUNyQk4sVUFBUSxvQkFBVW5GLElBbkNHO0FBb0NyQnVILFdBQVMsb0JBQVUzQixJQXBDRTtBQXFDckJ4RCxhQUFXLG9CQUFVOEQsS0FBVixDQUFnQixDQUFDLGdCQUFNbEosUUFBUCxFQUFpQixnQkFBTUMsU0FBdkIsQ0FBaEIsQ0FyQ1U7QUFzQ3JCbUssaUJBQWUsb0JBQVV4QixJQXRDSjtBQXVDckJSLFlBQVUsb0JBQVVwRjtBQXZDQyxDQUF2Qjs7a0JBMENlcUgsVTs7Ozs7Ozs7Ozs7OztBQ3BKZjs7Ozs7O0FBRUEsSUFBTTRDLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQ2pCO0FBQUE7QUFBQSxNQUFNLFdBQVUsT0FBaEI7QUFDRTtBQUFBO0FBQUEsUUFBTSxXQUFVLFVBQWhCO0FBQ0UsOENBQU0sV0FBVSxPQUFoQjtBQURGLEtBREY7QUFJRTtBQUFBO0FBQUEsUUFBTSxXQUFVLFFBQWhCO0FBQ0UsOENBQU0sV0FBVSxPQUFoQjtBQURGO0FBSkYsR0FEaUI7QUFBQSxDQUFuQjs7a0JBVWVBLFU7Ozs7Ozs7Ozs7Ozs7QUNaZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLE9BQWU7QUFBQSxNQUFackQsS0FBWSxRQUFaQSxLQUFZOztBQUMvQixNQUFNc0QsYUFBYSwwQkFBRyxrQ0FBSCxFQUF1QztBQUN4REMsWUFBUXZELFVBQVUsZ0JBQU03SjtBQURnQyxHQUF2QyxDQUFuQjtBQUdBLFNBQ0U7QUFBQTtBQUFBLE1BQU0sV0FBWW1OLFVBQWxCO0FBQ0UsNENBQU0sV0FBVSxPQUFoQjtBQURGLEdBREY7QUFLRCxDQVREOztBQVdBRCxVQUFVM0UsU0FBVixHQUFzQjtBQUNwQnNCLFNBQU8sb0JBQVVYLEtBQVYsQ0FBZ0IsQ0FBQyxnQkFBTWxKLFFBQVAsRUFBaUIsZ0JBQU1DLFNBQXZCLENBQWhCLEVBQW1Ed0k7QUFEdEMsQ0FBdEI7a0JBR2V5RSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUhBOzs7QUFLTyxJQUFNRyw4QkFBVyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsYUFBWixRQUFZQSxhQUFaO0FBQUEsU0FDdEI7QUFDRSxVQUFLLFVBRFA7QUFFRSxhQUFVRCxPQUZaO0FBR0UsU0FBTSxhQUFDRSxLQUFELEVBQVc7QUFDZixVQUFJQSxLQUFKLEVBQVdBLE1BQU1ELGFBQU4sR0FBc0JBLGFBQXRCLENBREksQ0FDaUM7QUFDakQ7QUFMSCxJQURzQjtBQUFBLENBQWpCOztBQVVQRixTQUFTOUUsU0FBVCxHQUFxQjtBQUNuQitFLFdBQVMsb0JBQVUxRSxJQUFWLENBQWVILFVBREw7QUFFbkI4RSxpQkFBZSxvQkFBVTNFLElBQVYsQ0FBZUg7QUFGWCxDQUFyQjs7SUFLcUJnRixtQjs7O0FBT25CLGlDQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsbUJBQUwsR0FBMkIsTUFBS0EsbUJBQUwsQ0FBeUJDLElBQXpCLE9BQTNCO0FBRlk7QUFHYjs7QUFFRDs7Ozs7Ozs7OzBDQUtzQnJILFMsRUFBVztBQUFBLFVBQ3ZCcEcsaUJBRHVCLG1CQUN2QkEsaUJBRHVCO0FBQUEsbUJBRUMsS0FBSzZFLEtBRk47QUFBQSxVQUV2QmtFLElBRnVCLFVBRXZCQSxJQUZ1QjtBQUFBLFVBRWpCMkUsYUFGaUIsVUFFakJBLGFBRmlCOzs7QUFJL0IsVUFBSTNFLFNBQVMvSSxpQkFBYixFQUFnQyxPQUFPLEtBQVA7O0FBRWhDLGFBQU9vRyxVQUFVc0gsYUFBVixLQUE0QkEsYUFBbkM7QUFDRDs7O3dDQUVtQnZNLEMsRUFBRztBQUFBLFVBQ2IyRyxlQURhLEdBQ08sS0FBS2pELEtBRFosQ0FDYmlELGVBRGE7OztBQUdyQkEsc0JBQWdCM0csQ0FBaEI7QUFDRDs7OzZCQUVRO0FBQUEsVUFFTGhCLHVCQUZLLG1CQUVMQSx1QkFGSztBQUFBLFVBRW9CQyw2QkFGcEIsbUJBRW9CQSw2QkFGcEI7QUFBQSxVQUVtREosaUJBRm5ELG1CQUVtREEsaUJBRm5EO0FBQUEsb0JBS3lCLEtBQUs2RSxLQUw5QjtBQUFBLFVBS0NrRSxJQUxELFdBS0NBLElBTEQ7QUFBQSxVQUtPMkUsYUFMUCxXQUtPQSxhQUxQOzs7QUFPUCxVQUFNTixVQUFVTSxrQkFBa0J2Tix1QkFBbEM7O0FBRUEsVUFBTWtOLGdCQUFnQkssa0JBQWtCdE4sNkJBQXhDOztBQUVBLGFBQU8ySSxTQUFTL0ksaUJBQVQsR0FDSCxzQ0FBSSwwQkFBSixHQURHLEdBR0g7QUFBQTtBQUFBLFVBQUksMEJBQUosRUFBdUIsU0FBVSxLQUFLd04sbUJBQXRDO0FBQ0Usc0NBQUMsUUFBRCxlQUNPLEtBQUszSSxLQURaO0FBRUUsbUJBQVV1SSxPQUZaO0FBR0UseUJBQWdCQztBQUhsQjtBQURGLE9BSEo7QUFXRDs7Ozs7O0FBdERrQkUsbUIsQ0FDWmxGLFMsR0FBWTtBQUNqQlUsUUFBTSxvQkFBVVQsTUFBVixDQUFpQkMsVUFETjtBQUVqQm1GLGlCQUFlLG9CQUFVcEYsTUFGUjtBQUdqQlIsbUJBQWlCLG9CQUFVaEY7QUFIVixDO2tCQURBeUssbUI7Ozs7Ozs7Ozs7Ozs7QUNuQnJCOzs7O0FBQ0E7Ozs7OztBQUZBO0FBSUEsSUFBTUksVUFBVSxTQUFWQSxPQUFVLENBQUM5SSxLQUFELEVBQVc7QUFDekIsTUFBSSxDQUFDQSxNQUFNNkcsUUFBWCxFQUFxQixPQUFPLElBQVA7QUFDckIsU0FDRTtBQUFBO0FBQUE7QUFBVzdHLFVBQU02RztBQUFqQixHQURGO0FBR0QsQ0FMRDs7QUFPQWlDLFFBQVF0RixTQUFSLEdBQW9CO0FBQ2xCcUQsWUFBVSxvQkFBVWpELFNBQVYsQ0FBb0IsQ0FDNUIsb0JBQVVJLElBRGtCLEVBRTVCLG9CQUFVUCxNQUZrQixDQUFwQjtBQURRLENBQXBCOztrQkFPZXFGLE87Ozs7Ozs7Ozs7Ozs7a1FDbEJmO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDL0ksS0FBRCxFQUFXO0FBQUEsTUFFcEI4QixPQUZvQixHQWNsQjlCLEtBZGtCLENBRXBCOEIsT0FGb0I7QUFBQSxNQUdwQi9DLElBSG9CLEdBY2xCaUIsS0Fka0IsQ0FHcEJqQixJQUhvQjtBQUFBLE1BSXBCSixRQUpvQixHQWNsQnFCLEtBZGtCLENBSXBCckIsUUFKb0I7QUFBQSxNQUtwQjJFLE9BTG9CLEdBY2xCdEQsS0Fka0IsQ0FLcEJzRCxPQUxvQjtBQUFBLE1BTXBCbEIsZ0JBTm9CLEdBY2xCcEMsS0Fka0IsQ0FNcEJvQyxnQkFOb0I7QUFBQSxNQU9wQm1CLGlCQVBvQixHQWNsQnZELEtBZGtCLENBT3BCdUQsaUJBUG9CO0FBQUEsTUFRcEI3QyxRQVJvQixHQWNsQlYsS0Fka0IsQ0FRcEJVLFFBUm9CO0FBQUEsTUFTcEJ1RCxTQVRvQixHQWNsQmpFLEtBZGtCLENBU3BCaUUsU0FUb0I7QUFBQSxNQVVwQitFLGVBVm9CLEdBY2xCaEosS0Fka0IsQ0FVcEJnSixlQVZvQjtBQUFBLE1BV3BCMUcsUUFYb0IsR0FjbEJ0QyxLQWRrQixDQVdwQnNDLFFBWG9CO0FBQUEsTUFZcEJDLFVBWm9CLEdBY2xCdkMsS0Fka0IsQ0FZcEJ1QyxVQVpvQjtBQUFBLE1BYXBCRSxTQWJvQixHQWNsQnpDLEtBZGtCLENBYXBCeUMsU0Fib0I7QUFBQSxNQWlCcEJpQyxPQWpCb0IsR0FtQmxCVCxTQW5Ca0IsQ0FpQnBCUyxPQWpCb0I7QUFBQSxNQWtCcEJELGFBbEJvQixHQW1CbEJSLFNBbkJrQixDQWtCcEJRLGFBbEJvQjs7O0FBcUJ0QixNQUFJd0UsZ0JBQUo7O0FBRUEsTUFBSTNGLE9BQUosRUFBYTtBQUNYLFFBQU00RixhQUFhLGdCQUFFbk0sVUFBRixDQUFhcUYsZ0JBQWIsSUFBaUNBLGtCQUFqQyxHQUFzREEsZ0JBQXpFO0FBQ0EsUUFBSSxDQUFDOEcsVUFBTCxFQUFpQjtBQUNmLGFBQU8sSUFBUDtBQUNEO0FBQ0RELGNBQVUsc0RBQVksU0FBVUMsVUFBdEIsRUFBbUMsU0FBVTNGLGlCQUE3QyxHQUFWO0FBQ0QsR0FORCxNQU1PO0FBQ0wsUUFBTTRGLGtCQUFrQnpJLFNBQVN5SSxlQUFULElBQTRCLEVBQXBEO0FBQ0FGLGNBQVVsSyxLQUFLVSxHQUFMLENBQVMsVUFBQ1osR0FBRCxFQUFNMEcsS0FBTixFQUFnQjtBQUNqQyxVQUFNNkQsTUFBTSxnQkFBRXROLEdBQUYsQ0FBTStDLEdBQU4sRUFBV0YsUUFBWCxDQUFaO0FBQ0EsVUFBTThJLFdBQVcsRUFBRTBCLGdCQUFnQnJNLE1BQWhCLEdBQXlCLENBQXpCLElBQThCcU0sZ0JBQWdCRSxPQUFoQixDQUF3QkQsR0FBeEIsSUFBK0IsQ0FBQyxDQUFoRSxDQUFqQjs7QUFFQSxVQUFNbEssV0FBVytFLFVBQVVDLElBQVYsS0FBbUIsZ0JBQU03SSxtQkFBekIsR0FDYjJOLGdCQUFnQjFKLFFBQWhCLENBQXlCOEosR0FBekIsQ0FEYSxHQUViLElBRko7O0FBSUEsVUFBTTlCLFFBQVE3RSxhQUFhLEVBQTNCO0FBQ0EsVUFBSStCLFFBQVEsZ0JBQUV6SCxVQUFGLENBQWF1RixRQUFiLElBQXlCQSxTQUFTekQsR0FBVCxFQUFjMEcsS0FBZCxDQUF6QixHQUFnRGpELFFBQTVEO0FBQ0EsVUFBSVAsVUFBVyxnQkFBRWhGLFVBQUYsQ0FBYXdGLFVBQWIsSUFBMkJBLFdBQVcxRCxHQUFYLEVBQWdCMEcsS0FBaEIsQ0FBM0IsR0FBb0RoRCxVQUFuRTtBQUNBLFVBQUlyRCxRQUFKLEVBQWM7QUFDWixZQUFNb0ssZ0JBQWdCLGdCQUFFdk0sVUFBRixDQUFha0gsVUFBVU8sS0FBdkIsSUFDbEJQLFVBQVVPLEtBQVYsQ0FBZ0IzRixHQUFoQixFQUFxQjBHLEtBQXJCLENBRGtCLEdBRWxCdEIsVUFBVU8sS0FGZDs7QUFJQSxZQUFNK0Usa0JBQWtCLGdCQUFFeE0sVUFBRixDQUFha0gsVUFBVWxDLE9BQXZCLElBQ3BCa0MsVUFBVWxDLE9BQVYsQ0FBa0JsRCxHQUFsQixFQUF1QjBHLEtBQXZCLENBRG9CLEdBRXBCdEIsVUFBVWxDLE9BRmQ7O0FBSUF5Qyw2QkFDS0EsS0FETCxFQUVLOEUsYUFGTDtBQUlBdkgsa0JBQVUsMEJBQUdBLE9BQUgsRUFBWXdILGVBQVosQ0FBVjs7QUFFQSxZQUFJN0UsT0FBSixFQUFhO0FBQ1hGLGtCQUFRQSxTQUFTLEVBQWpCO0FBQ0FBLGdCQUFNZ0YsZUFBTixHQUF3QixnQkFBRXpNLFVBQUYsQ0FBYTJILE9BQWIsSUFBd0JBLFFBQVE3RixHQUFSLEVBQWEwRyxLQUFiLENBQXhCLEdBQThDYixPQUF0RTtBQUNEO0FBQ0Y7O0FBRUQsVUFBTStFLGFBQWEsQ0FBQ2hGLGFBQUQsSUFBa0IsQ0FBQ0EsY0FBY25GLFFBQWQsQ0FBdUI4SixHQUF2QixDQUF0Qzs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFLG1DQUF3QkEsR0FEMUI7QUFFRSxzQkFBVyxJQUZiO0FBR0UsbUJBQVU7QUFIWjtBQUtFO0FBQ0UsZUFBTUEsR0FEUjtBQUVFLGVBQU12SyxHQUZSO0FBR0Usb0JBQVdGLFFBSGI7QUFJRSxvQkFBVzRHLEtBSmI7QUFLRSxtQkFBVXpELE9BTFo7QUFNRSxvQkFBV3BCLFFBTmI7QUFPRSxvQkFBVytHLFFBUGI7QUFRRSxzQkFBYWdDLFVBUmY7QUFTRSxvQkFBV3ZLLFFBVGI7QUFVRSxxQkFBWStFLFNBVmQ7QUFXRSxpQkFBUU8sS0FYVjtBQVlFLHFCQUFZekMsT0FaZDtBQWFFLGlCQUFRdUY7QUFiVjtBQUxGLE9BREY7QUF1QkQsS0F6RFMsQ0FBVjtBQTBERDs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFVO0FBRFo7QUFHSTJCO0FBSEosR0FERjtBQU9ELENBbEdEOztBQW9HQUYsS0FBS3ZGLFNBQUwsR0FBaUI7QUFDZjdFLFlBQVUsb0JBQVU4RSxNQUFWLENBQWlCQyxVQURaO0FBRWYzRSxRQUFNLG9CQUFVNEUsS0FBVixDQUFnQkQsVUFGUDtBQUdmNUIsV0FBUyxvQkFBVTZCLEtBQVYsQ0FBZ0JELFVBSFY7QUFJZk8sYUFBVyxvQkFBVUYsTUFKTjtBQUtmaUYsbUJBQWlCLG9CQUFVckY7QUFMWixDQUFqQjs7a0JBUWVvRixJOzs7Ozs7O0FDekhmOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3pCQTs7QUFFQTs7QUFFQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsdUNBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsY0FBYyxVQUFVLG9CQUFvQixpQkFBaUI7QUFDcEo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCOztBQUUzQjs7QUFFQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLG9DOzs7Ozs7O0FDelJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FDWEE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQSwwREFBMEQsMEpBQTBKO0FBQ3BOO0FBQ0Esb0M7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0Esb0M7Ozs7Ozs7QUNUQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQsbUhBQW1IO0FBQ2hMLEU7Ozs7Ozs7QUNSQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9DOzs7Ozs7O0FDeEtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUNBQXFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OytlQVRBO0FBQ0E7OztJQVVNVyxHOzs7Ozs7Ozs7Ozs2QkFDSztBQUFBLG1CQWNILEtBQUsxSixLQWRGO0FBQUEsVUFFTG5CLEdBRkssVUFFTEEsR0FGSztBQUFBLFVBR0xpRCxPQUhLLFVBR0xBLE9BSEs7QUFBQSxVQUlMbkQsUUFKSyxVQUlMQSxRQUpLO0FBQUEsVUFLTGdMLFFBTEssVUFLTEEsUUFMSztBQUFBLFVBTUwvQyxTQU5LLFVBTUxBLFNBTks7QUFBQSxVQU9McEMsS0FQSyxVQU9MQSxLQVBLO0FBQUEsVUFRTDhDLEtBUkssVUFRTEEsS0FSSztBQUFBLFVBU0w1RyxRQVRLLFVBU0xBLFFBVEs7QUFBQSxVQVVMeEIsUUFWSyxVQVVMQSxRQVZLO0FBQUEsVUFXTCtFLFNBWEssVUFXTEEsU0FYSztBQUFBLFVBWUx3RixVQVpLLFVBWUxBLFVBWks7QUFBQSxVQWFLRyxXQWJMLFVBYUxuQyxRQWJLOztBQUFBLFVBaUJMdkQsSUFqQkssR0F5Qkh4RCxRQXpCRyxDQWlCTHdELElBakJLO0FBQUEsVUFrQkwyRixPQWxCSyxHQXlCSG5KLFFBekJHLENBa0JMbUosT0FsQks7QUFBQSxVQW1CTEMsV0FuQkssR0F5QkhwSixRQXpCRyxDQW1CTG9KLFdBbkJLO0FBQUEsVUFvQkNDLGFBcEJELEdBeUJIckosUUF6QkcsQ0FvQkxzSixJQXBCSztBQUFBLFVBcUJDQyxhQXJCRCxHQXlCSHZKLFFBekJHLENBcUJMd0osSUFyQks7QUFBQSxVQXNCTEMsa0JBdEJLLEdBeUJIekosUUF6QkcsQ0FzQkx5SixrQkF0Qks7QUFBQSxVQXVCTEMsb0JBdkJLLEdBeUJIMUosUUF6QkcsQ0F1QkwwSixvQkF2Qks7QUFBQSxVQXdCRkMsSUF4QkUsNEJBeUJIM0osUUF6Qkc7O0FBMkJQLFVBQU0wSSxNQUFNLGdCQUFFdE4sR0FBRixDQUFNK0MsR0FBTixFQUFXRixRQUFYLENBQVo7QUEzQk8sVUE0QkNnRyxnQkE1QkQsR0E0QnNCVixTQTVCdEIsQ0E0QkNVLGdCQTVCRDs7QUE2QlAsVUFBTTJGLFVBQVUsS0FBS0MsUUFBTCxDQUFjakQsS0FBZCxDQUFoQjs7QUFFQSxhQUNFO0FBQUE7QUFBQSxtQkFBSSxPQUFROUMsS0FBWixFQUFvQixXQUFZb0MsU0FBaEMsSUFBaUQwRCxPQUFqRDtBQUVLckcsa0JBQVVDLElBQVYsS0FBbUIsZ0JBQU03SSxtQkFBekIsSUFBZ0QsQ0FBQ3NKLGdCQUFsRCxHQUVJLG9FQUNPVixTQURQO0FBRUUsa0JBQVNtRixHQUZYO0FBR0Usb0JBQVdPLFFBSGI7QUFJRSxvQkFBV3pLLFFBSmI7QUFLRSxvQkFBVyxDQUFDdUs7QUFMZCxXQUZKLEdBVUksSUFaUjtBQWVJM0gsZ0JBQVFyQyxHQUFSLENBQVksVUFBQ3lGLE1BQUQsRUFBU0ssS0FBVCxFQUFtQjtBQUM3QixjQUFJLENBQUNMLE9BQU9DLE1BQVosRUFBb0I7QUFBQSxnQkFDVmpFLFNBRFUsR0FDSWdFLE1BREosQ0FDVmhFLFNBRFU7O0FBRWxCLGdCQUFNK0gsVUFBVSxnQkFBRW5OLEdBQUYsQ0FBTStDLEdBQU4sRUFBV3FDLFNBQVgsQ0FBaEI7QUFDQSxnQkFBSXVHLFdBQVcsZ0JBQUU5SixTQUFGLENBQVl1SCxPQUFPdUMsUUFBbkIsSUFBK0J2QyxPQUFPdUMsUUFBdEMsR0FBaUQsSUFBaEU7QUFDQSxnQkFBSXZHLGNBQWN2QyxRQUFkLElBQTBCLENBQUNpTCxXQUEvQixFQUE0Q25DLFdBQVcsS0FBWDtBQUM1QyxnQkFBSSxnQkFBRTFLLFVBQUYsQ0FBYW1JLE9BQU91QyxRQUFwQixDQUFKLEVBQW1DO0FBQ2pDQSx5QkFBV3ZDLE9BQU91QyxRQUFQLENBQWdCd0IsT0FBaEIsRUFBeUJwSyxHQUF6QixFQUE4QjhLLFFBQTlCLEVBQXdDcEUsS0FBeEMsQ0FBWDtBQUNEO0FBQ0QsZ0JBQUlvRSxhQUFhSSxhQUFiLElBQThCeEUsVUFBVTBFLGFBQTVDLEVBQTJEO0FBQ3pELGtCQUFJTyxnQkFBZ0J0RixPQUFPd0MsYUFBUCxJQUF3QixFQUE1QztBQUNBLGtCQUFJK0Msa0JBQWtCdkYsT0FBT3lDLGVBQTdCO0FBQ0Esa0JBQUksZ0JBQUU1SyxVQUFGLENBQWFtSSxPQUFPd0MsYUFBcEIsQ0FBSixFQUF3QztBQUN0QzhDLGdDQUFnQnRGLE9BQU93QyxhQUFQLENBQXFCdUIsT0FBckIsRUFBOEJwSyxHQUE5QixFQUFtQzhLLFFBQW5DLEVBQTZDcEUsS0FBN0MsQ0FBaEI7QUFDRDtBQUNELGtCQUFJLGdCQUFFeEksVUFBRixDQUFhbUksT0FBT3lDLGVBQXBCLENBQUosRUFBMEM7QUFDeEM4QyxrQ0FBa0J2RixPQUFPeUMsZUFBUCxDQUF1QnNCLE9BQXZCLEVBQWdDcEssR0FBaEMsRUFBcUM4SyxRQUFyQyxFQUErQ3BFLEtBQS9DLENBQWxCO0FBQ0Q7QUFDRCxxQkFDRSw4QkFBQyxXQUFEO0FBQ0UscUJBQVMwRCxPQUFULFNBQW9CMUQsS0FEdEI7QUFFRSxxQkFBTTFHLEdBRlI7QUFHRSwwQkFBVzhLLFFBSGI7QUFJRSx3QkFBU3pFLE1BSlg7QUFLRSw2QkFBY0ssS0FMaEI7QUFNRSwyQkFBWWtGLGVBTmQ7QUFPRSx1QkFBUUQ7QUFQVixpQkFRT0gsSUFSUCxFQURGO0FBWUQ7QUFDRCxtQkFDRTtBQUNFLG1CQUFTcEIsT0FBVCxTQUFvQjFELEtBRHRCO0FBRUUsbUJBQU0xRyxHQUZSO0FBR0Usd0JBQVc4SyxRQUhiO0FBSUUsMkJBQWNwRSxLQUpoQjtBQUtFLHNCQUFTTCxNQUxYO0FBTUUsdUJBQVUyRSxPQU5aO0FBT0Usd0JBQVdwQyxRQVBiO0FBUUUsMkJBQWN2RCxTQUFTaUcsa0JBUnpCO0FBU0UsNkJBQWdCakcsU0FBU2tHO0FBVDNCLGNBREY7QUFhRDtBQUNELGlCQUFPLEtBQVA7QUFDRCxTQTlDRDtBQWZKLE9BREY7QUFrRUQ7Ozs7RUFsR2Usa0Q7O0FBcUdsQlYsSUFBSWxHLFNBQUosR0FBZ0I7QUFDZDNFLE9BQUssb0JBQVVrRixNQUFWLENBQWlCTCxVQURSO0FBRWRpRyxZQUFVLG9CQUFVMUIsTUFBVixDQUFpQnZFLFVBRmI7QUFHZDVCLFdBQVMsb0JBQVU2QixLQUFWLENBQWdCRCxVQUhYO0FBSWRjLFNBQU8sb0JBQVVULE1BSkg7QUFLZDZDLGFBQVcsb0JBQVVuRCxNQUxQO0FBTWQ2RCxTQUFPLG9CQUFVdkQ7QUFOSCxDQUFoQjs7QUFTQTJGLElBQUkxRSxZQUFKLEdBQW1CO0FBQ2pCeUMsWUFBVSxJQURPO0FBRWpCakQsU0FBTyxFQUZVO0FBR2pCb0MsYUFBVyxJQUhNO0FBSWpCVSxTQUFPO0FBSlUsQ0FBbkI7O2tCQU9lb0MsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSGY7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7OytlQUpBOzs7SUFNTWdCLEk7OztBQUNKLGdCQUFZMUssS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNYQSxLQURXOztBQUVqQixVQUFLMkssaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUIvQixJQUF2QixPQUF6QjtBQUZpQjtBQUdsQjs7OztzQ0FFaUJ0TSxDLEVBQUc7QUFBQSxtQkFDNEQsS0FBSzBELEtBRGpFO0FBQUEsVUFDWGtGLE1BRFcsVUFDWEEsTUFEVztBQUFBLFVBQ0gyRSxPQURHLFVBQ0hBLE9BREc7QUFBQSxVQUNNRixRQUROLFVBQ01BLFFBRE47QUFBQSxVQUNnQmlCLFdBRGhCLFVBQ2dCQSxXQURoQjtBQUFBLFVBQzZCdkcsV0FEN0IsVUFDNkJBLFdBRDdCO0FBQUEsVUFDMEN3RyxhQUQxQyxVQUMwQ0EsYUFEMUM7QUFBQSxVQUVYekQsTUFGVyxHQUVBbEMsTUFGQSxDQUVYa0MsTUFGVzs7QUFHbkIsVUFBSUEsTUFBSixFQUFZO0FBQ1YsWUFBSS9DLFdBQUosRUFBaUI7QUFDZixjQUFNcUMsY0FBY1UsT0FBT1QsT0FBM0I7QUFDQSxjQUFJLGdCQUFFNUosVUFBRixDQUFhMkosV0FBYixDQUFKLEVBQStCQSxZQUFZcEssQ0FBWjtBQUNoQyxTQUhELE1BR08sSUFBSXVPLGFBQUosRUFBbUI7QUFDeEIsY0FBTUMsZ0JBQWdCMUQsT0FBTzJELGFBQTdCO0FBQ0EsY0FBSSxnQkFBRWhPLFVBQUYsQ0FBYStOLGFBQWIsQ0FBSixFQUFpQ0EsY0FBY3hPLENBQWQ7QUFDbEM7QUFDRjtBQUNELFVBQUl1TixPQUFKLEVBQWE7QUFDWEEsZ0JBQVFGLFFBQVIsRUFBa0JpQixXQUFsQjtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBLG9CQVNILEtBQUs1SyxLQVRGO0FBQUEsVUFFTG5CLEdBRkssV0FFTEEsR0FGSztBQUFBLFVBR0w4SyxRQUhLLFdBR0xBLFFBSEs7QUFBQSxVQUlMekUsTUFKSyxXQUlMQSxNQUpLO0FBQUEsVUFLTDBGLFdBTEssV0FLTEEsV0FMSztBQUFBLFVBTUxuRCxRQU5LLFdBTUxBLFFBTks7QUFBQSxVQU9McEQsV0FQSyxXQU9MQSxXQVBLO0FBQUEsVUFRTHdHLGFBUkssV0FRTEEsYUFSSztBQUFBLFVBV0wzSixTQVhLLEdBb0JIZ0UsTUFwQkcsQ0FXTGhFLFNBWEs7QUFBQSxVQVlMK0YsU0FaSyxHQW9CSC9CLE1BcEJHLENBWUwrQixTQVpLO0FBQUEsVUFhTEMsZUFiSyxHQW9CSGhDLE1BcEJHLENBYUxnQyxlQWJLO0FBQUEsVUFjTDFDLEtBZEssR0FvQkhVLE1BcEJHLENBY0xWLEtBZEs7QUFBQSxVQWVMekMsT0FmSyxHQW9CSG1ELE1BcEJHLENBZUxuRCxPQWZLO0FBQUEsVUFnQkx5RSxLQWhCSyxHQW9CSHRCLE1BcEJHLENBZ0JMc0IsS0FoQks7QUFBQSxVQWlCTFksTUFqQkssR0FvQkhsQyxNQXBCRyxDQWlCTGtDLE1BakJLO0FBQUEsVUFrQkxDLEtBbEJLLEdBb0JIbkMsTUFwQkcsQ0FrQkxtQyxLQWxCSztBQUFBLFVBbUJMQyxLQW5CSyxHQW9CSHBDLE1BcEJHLENBbUJMb0MsS0FuQks7O0FBcUJQLFVBQUkwRCxrQkFBSjtBQUNBLFVBQUkxRSxZQUFZLEVBQWhCO0FBQ0EsVUFBSTJDLFVBQVUsZ0JBQUVuTixHQUFGLENBQU0rQyxHQUFOLEVBQVdxQyxTQUFYLENBQWQ7O0FBRUEsVUFBTWlGLHlCQUNELGdCQUFFcEosVUFBRixDQUFhdUssS0FBYixJQUFzQkEsTUFBTTJCLE9BQU4sRUFBZXBLLEdBQWYsRUFBb0I4SyxRQUFwQixFQUE4QmlCLFdBQTlCLENBQXRCLEdBQW1FdEQsS0FEbEUsRUFFREYsTUFGQyxDQUFOOztBQUtBLFVBQU1iLGNBQWMsZ0JBQUV4SixVQUFGLENBQWFnRixPQUFiLElBQ2hCQSxRQUFRa0gsT0FBUixFQUFpQnBLLEdBQWpCLEVBQXNCOEssUUFBdEIsRUFBZ0NpQixXQUFoQyxDQURnQixHQUVoQjdJLE9BRko7O0FBSUEsVUFBSXlDLEtBQUosRUFBVztBQUNUOEIsb0JBQVksZ0JBQUV2SixVQUFGLENBQWF5SCxLQUFiLElBQXNCQSxNQUFNeUUsT0FBTixFQUFlcEssR0FBZixFQUFvQjhLLFFBQXBCLEVBQThCaUIsV0FBOUIsQ0FBdEIsR0FBbUVwRyxLQUEvRTtBQUNEOztBQUVELFVBQUlnQyxLQUFKLEVBQVc7QUFDVHdFLG9CQUFZLGdCQUFFak8sVUFBRixDQUFheUosS0FBYixJQUFzQkEsTUFBTXlDLE9BQU4sRUFBZXBLLEdBQWYsRUFBb0I4SyxRQUFwQixFQUE4QmlCLFdBQTlCLENBQXRCLEdBQW1FM0IsT0FBL0U7QUFDQTlDLGtCQUFVSyxLQUFWLEdBQWtCd0UsU0FBbEI7QUFDRDs7QUFFRCxVQUFJL0QsU0FBSixFQUFlO0FBQ2JnQyxrQkFBVS9ELE9BQU8rQixTQUFQLENBQWlCZ0MsT0FBakIsRUFBMEJwSyxHQUExQixFQUErQjhLLFFBQS9CLEVBQXlDekMsZUFBekMsQ0FBVjtBQUNEOztBQUVELFVBQUlHLEtBQUosRUFBVztBQUNUZixrQkFBVUcsU0FBVixHQUNFLGdCQUFFMUosVUFBRixDQUFhc0ssS0FBYixJQUFzQkEsTUFBTTRCLE9BQU4sRUFBZXBLLEdBQWYsRUFBb0I4SyxRQUFwQixFQUE4QmlCLFdBQTlCLENBQXRCLEdBQW1FdkQsS0FEckU7QUFFRDs7QUFFRCxVQUFJZCxXQUFKLEVBQWlCSixVQUFVUyxTQUFWLEdBQXNCTCxXQUF0Qjs7QUFFakIsVUFBSSxDQUFDLGdCQUFFbEosYUFBRixDQUFnQmlKLFNBQWhCLENBQUwsRUFBaUNILFVBQVUzQixLQUFWLEdBQWtCOEIsU0FBbEI7QUFDakMsVUFBSWpDLGVBQWVvRCxRQUFuQixFQUE2QjtBQUMzQnRCLGtCQUFVUSxPQUFWLEdBQW9CLEtBQUtnRSxpQkFBekI7QUFDRCxPQUZELE1BRU8sSUFBSUUsaUJBQWlCcEQsUUFBckIsRUFBK0I7QUFDcEN0QixrQkFBVTRFLGFBQVYsR0FBMEIsS0FBS0osaUJBQS9CO0FBQ0Q7QUFDRCxhQUNFO0FBQUE7QUFBU3hFLGlCQUFUO0FBQXVCOEM7QUFBdkIsT0FERjtBQUdEOzs7Ozs7QUFHSHlCLEtBQUtsSCxTQUFMLEdBQWlCO0FBQ2YzRSxPQUFLLG9CQUFVa0YsTUFBVixDQUFpQkwsVUFEUDtBQUVmaUcsWUFBVSxvQkFBVTFCLE1BQVYsQ0FBaUJ2RSxVQUZaO0FBR2Z3QixVQUFRLG9CQUFVbkIsTUFBVixDQUFpQkwsVUFIVjtBQUlma0gsZUFBYSxvQkFBVTNDLE1BQVYsQ0FBaUJ2RTtBQUpmLENBQWpCOztrQkFPZWdILEk7Ozs7Ozs7Ozs7Ozs7OztBQ2xHZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBTkE7Ozs7OztJQVFxQk8sYTs7O0FBV25CLDJCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCdEMsSUFBakIsT0FBbkI7QUFGWTtBQUdiOzs7OzBDQUVxQnJILFMsRUFBVztBQUFBLFVBQ3ZCckMsUUFEdUIsR0FDVixLQUFLYyxLQURLLENBQ3ZCZCxRQUR1Qjs7O0FBRy9CLGFBQU9xQyxVQUFVckMsUUFBVixLQUF1QkEsUUFBOUI7QUFDRDs7O2dDQUVXNUMsQyxFQUFHO0FBQUEsbUJBU1QsS0FBSzBELEtBVEk7QUFBQSxVQUVMbUwsU0FGSyxVQUVYakgsSUFGVztBQUFBLFVBR1hrSCxNQUhXLFVBR1hBLE1BSFc7QUFBQSxVQUlYbE0sUUFKVyxVQUlYQSxRQUpXO0FBQUEsVUFLWDRELFdBTFcsVUFLWEEsV0FMVztBQUFBLFVBTVh1SSxRQU5XLFVBTVhBLFFBTlc7QUFBQSxVQU9YMUIsUUFQVyxVQU9YQSxRQVBXO0FBQUEsVUFRWHZGLGFBUlcsVUFRWEEsYUFSVzs7O0FBV2IsVUFBSWlILFFBQUosRUFBYztBQUNkLFVBQUlqSCxhQUFKLEVBQW1COztBQUVuQixVQUFNbUUsVUFBVTRDLGNBQWMsZ0JBQU1oUSxpQkFBcEIsR0FDWixJQURZLEdBRVosQ0FBQytELFFBRkw7O0FBSUE0RCxrQkFBWXNJLE1BQVosRUFBb0I3QyxPQUFwQixFQUE2Qm9CLFFBQTdCLEVBQXVDck4sQ0FBdkM7QUFDRDs7OzZCQUVRO0FBQUEsb0JBS0gsS0FBSzBELEtBTEY7QUFBQSxVQUVDbUwsU0FGRCxXQUVMakgsSUFGSztBQUFBLFVBR0xoRixRQUhLLFdBR0xBLFFBSEs7QUFBQSxVQUlMbU0sUUFKSyxXQUlMQSxRQUpLOzs7QUFPUCxhQUNFO0FBQUE7QUFBQSxVQUFJLFNBQVUsS0FBS0gsV0FBbkI7QUFDRTtBQUNFLGdCQUFPQyxTQURUO0FBRUUsbUJBQVVqTSxRQUZaO0FBR0Usb0JBQVdtTTtBQUhiO0FBREYsT0FERjtBQVNEOzs7Ozs7QUEzRGtCSixhLENBQ1p6SCxTLEdBQVk7QUFDakJVLFFBQU0sb0JBQVVULE1BQVYsQ0FBaUJDLFVBRE47QUFFakIwSCxVQUFRLG9CQUFVakUsR0FGRDtBQUdqQmpJLFlBQVUsb0JBQVUyRSxJQUhIO0FBSWpCZixlQUFhLG9CQUFVN0UsSUFKTjtBQUtqQm9OLFlBQVUsb0JBQVV4SCxJQUxIO0FBTWpCOEYsWUFBVSxvQkFBVTFCLE1BTkg7QUFPakI3RCxpQkFBZSxvQkFBVVA7QUFQUixDO2tCQURBb0gsYTs7Ozs7Ozs7Ozs7Ozs7O0FDUnJCOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNN0QsU0FBUyxDQUNiLFNBRGEsRUFFYixlQUZhLEVBR2IsY0FIYSxFQUliLGNBSmEsQ0FBZjs7a0JBT2U7QUFBQTtBQUFBOztBQUVYLCtCQUFZcEgsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdJQUNYQSxLQURXOztBQUVqQixZQUFLc0wsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFlBQUtDLHlCQUFMLEdBQWlDLE1BQUtBLHlCQUFMLENBQStCM0MsSUFBL0IsT0FBakM7QUFDQSxZQUFLNEMsdUJBQUwsR0FBK0IsTUFBS0EsdUJBQUwsQ0FBNkI1QyxJQUE3QixPQUEvQjtBQUppQjtBQUtsQjs7QUFQVTtBQUFBO0FBQUEsZ0RBU2U2QyxFQVRmLEVBU21CO0FBQUE7O0FBQzVCLGVBQU8sVUFBQ25QLENBQUQsRUFBTztBQUFBLHVCQUNjLE9BQUswRCxLQURuQjtBQUFBLGNBQ0puQixHQURJLFVBQ0pBLEdBREk7QUFBQSxjQUNDOEssUUFERCxVQUNDQSxRQUREOztBQUVaOEIsYUFBR25QLENBQUgsRUFBTXVDLEdBQU4sRUFBVzhLLFFBQVg7QUFDRCxTQUhEO0FBSUQ7QUFkVTtBQUFBO0FBQUEsOENBZ0JhOEIsRUFoQmIsRUFnQmlCO0FBQUE7O0FBQzFCLGVBQU8sVUFBQ25QLENBQUQsRUFBTztBQUFBLHdCQWdCUixPQUFLMEQsS0FoQkc7QUFBQSxjQUVWbkIsR0FGVSxXQUVWQSxHQUZVO0FBQUEsY0FHVkssUUFIVSxXQUdWQSxRQUhVO0FBQUEsY0FJVlAsUUFKVSxXQUlWQSxRQUpVO0FBQUEsY0FLVjhLLFVBTFUsV0FLVkEsVUFMVTtBQUFBLGNBTVZFLFFBTlUsV0FNVkEsUUFOVTtBQUFBLDBDQU9WMUYsU0FQVTtBQUFBLGNBUVJuQixXQVJRLHFCQVFSQSxXQVJRO0FBQUEsY0FTUnVCLFdBVFEscUJBU1JBLFdBVFE7QUFBQSx5Q0FXVjNELFFBWFU7QUFBQSxjQVlSd0QsSUFaUSxvQkFZUkEsSUFaUTtBQUFBLGNBYVJrRyxvQkFiUSxvQkFhUkEsb0JBYlE7QUFBQSxjQWNSc0IsaUJBZFEsb0JBY1JBLGlCQWRROzs7QUFrQlosY0FBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDcEIsZ0JBQUlGLEVBQUosRUFBUTtBQUNOQSxpQkFBR25QLENBQUgsRUFBTXVDLEdBQU4sRUFBVzhLLFFBQVg7QUFDRDtBQUNELGdCQUFJRixVQUFKLEVBQWdCO0FBQ2Qsa0JBQU1MLE1BQU0sZ0JBQUV0TixHQUFGLENBQU0rQyxHQUFOLEVBQVdGLFFBQVgsQ0FBWjtBQUNBbUUsMEJBQVlzRyxHQUFaLEVBQWlCLENBQUNsSyxRQUFsQixFQUE0QnlLLFFBQTVCLEVBQXNDck4sQ0FBdEM7QUFDRDtBQUNGLFdBUkQ7O0FBVUEsY0FBSTRILFNBQVNrRyxvQkFBVCxJQUFpQy9GLFdBQXJDLEVBQWtEO0FBQ2hELG1CQUFLaUgsUUFBTCxJQUFpQixDQUFqQjtBQUNBLDRCQUFFdE4sUUFBRixDQUFXLFlBQU07QUFDZixrQkFBSSxPQUFLc04sUUFBTCxLQUFrQixDQUF0QixFQUF5QjtBQUN2Qks7QUFDRDtBQUNELHFCQUFLTCxRQUFMLEdBQWdCLENBQWhCO0FBQ0QsYUFMRCxFQUtHSSxpQkFMSDtBQU1ELFdBUkQsTUFRTztBQUNMQztBQUNEO0FBQ0YsU0F2Q0Q7QUF3Q0Q7QUF6RFU7QUFBQTtBQUFBLGlDQTJEVTtBQUFBOztBQUFBLFlBQVpyRSxLQUFZLHVFQUFKLEVBQUk7O0FBQ25CLFlBQU1zRSxXQUFXLEVBQWpCO0FBQ0EsWUFBSSxLQUFLNUwsS0FBTCxDQUFXaUUsU0FBWCxJQUF3QixLQUFLakUsS0FBTCxDQUFXaUUsU0FBWCxDQUFxQkcsYUFBakQsRUFBZ0U7QUFDOUR3SCxtQkFBU2pGLE9BQVQsR0FBbUIsS0FBSzZFLHVCQUFMLENBQTZCbEUsTUFBTVgsT0FBbkMsQ0FBbkI7QUFDRDtBQUNEdkosZUFBT0ksSUFBUCxDQUFZOEosS0FBWixFQUFtQnVFLE9BQW5CLENBQTJCLFVBQUNDLElBQUQsRUFBVTtBQUNuQyxjQUFJLENBQUNGLFNBQVNFLElBQVQsQ0FBTCxFQUFxQjtBQUNuQixnQkFBSTFFLE9BQU85SCxRQUFQLENBQWdCd00sSUFBaEIsQ0FBSixFQUEyQjtBQUN6QkYsdUJBQVNFLElBQVQsSUFBaUIsT0FBS1AseUJBQUwsQ0FBK0JqRSxNQUFNd0UsSUFBTixDQUEvQixDQUFqQjtBQUNELGFBRkQsTUFFTztBQUNMRix1QkFBU0UsSUFBVCxJQUFpQnhFLE1BQU13RSxJQUFOLENBQWpCO0FBQ0Q7QUFDRjtBQUNGLFNBUkQ7QUFTQSxlQUFPRixRQUFQO0FBQ0Q7QUExRVU7O0FBQUE7QUFBQSxJQUNtQnhLLFVBRG5CO0FBQUEsQzs7Ozs7Ozs7Ozs7OztBQ1RmOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0ySyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUFHOUMsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWStDLE9BQVosUUFBWUEsT0FBWjtBQUFBLFNBQ2pCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFZLFVBRGQ7QUFFRSxpQkFBVUEsT0FGWjtBQUdFLG1CQUFVO0FBSFo7QUFLSS9DO0FBTEo7QUFERixHQURpQjtBQUFBLENBQW5COztBQVlBOEMsV0FBV3ZJLFNBQVgsR0FBdUI7QUFDckJ5RixXQUFTLG9CQUFVOUIsR0FERTtBQUVyQjZFLFdBQVMsb0JBQVUvRDtBQUZFLENBQXZCOztBQUtBOEQsV0FBVy9HLFlBQVgsR0FBMEI7QUFDeEJpRSxXQUFTLElBRGU7QUFFeEIrQyxXQUFTO0FBRmUsQ0FBMUI7O2tCQUtlRCxVOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O2tCQUVlO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNDQUVLO0FBQUEsWUFDTnBOLFFBRE0sR0FDTyxLQUFLcUIsS0FEWixDQUNOckIsUUFETTs7QUFFZCxZQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiLGdCQUFNLElBQUk5QixLQUFKLENBQVUsNENBQVYsQ0FBTjtBQUNEO0FBQ0QsWUFBSSxLQUFLMEcsaUJBQUwsQ0FBdUIsS0FBdkIsS0FBaUMsQ0FBckMsRUFBd0M7QUFDdEMsZ0JBQU0sSUFBSTFHLEtBQUosQ0FBVSw2QkFBVixDQUFOO0FBQ0Q7QUFDRjtBQVZVO0FBQUE7QUFBQSxnQ0FZRDtBQUNSLGVBQU8sS0FBS21ELEtBQUwsQ0FBV2pCLElBQVgsQ0FBZ0JqQyxNQUFoQixLQUEyQixDQUFsQztBQUNEOztBQUVEOzs7Ozs7OztBQWhCVztBQUFBO0FBQUEsNENBdUJXaUUsT0F2QlgsRUF1Qm9CO0FBQUEsWUFDckJrRCxTQURxQixHQUNQLEtBQUtqRSxLQURFLENBQ3JCaUUsU0FEcUI7QUFBQSxZQUVyQjVJLG1CQUZxQixtQkFFckJBLG1CQUZxQjs7O0FBSTdCLFlBQUksZ0JBQUVzQyxTQUFGLENBQVlzRyxTQUFaLENBQUosRUFBNEI7QUFDMUIsOEJBQ0tBLFNBREwsRUFFS2xELE9BRkw7QUFJRDs7QUFFRCxlQUFPO0FBQ0xtRCxnQkFBTTdJO0FBREQsU0FBUDtBQUdEOztBQUVEOzs7Ozs7Ozs7QUF2Q1c7QUFBQTtBQUFBLHVEQStDa0M7QUFBQSxZQUFkMEYsT0FBYyx1RUFBSixFQUFJO0FBQUEsWUFDbkNrRCxTQURtQyxHQUNyQixLQUFLakUsS0FEZ0IsQ0FDbkNpRSxTQURtQzs7QUFBQSxZQUVuQ2YsZUFGbUMsR0FFU25DLE9BRlQsQ0FFbkNtQyxlQUZtQztBQUFBLGdDQUVTbkMsT0FGVCxDQUVsQjdCLFFBRmtCO0FBQUEsWUFFbEJBLFFBRmtCLHFDQUVQLEVBRk87QUFBQSxZQUVBbUwsSUFGQSw0QkFFU3RKLE9BRlQ7O0FBQUEsWUFJekMxRixtQkFKeUMsbUJBSXpDQSxtQkFKeUM7QUFBQSxZQUlwQkMsdUJBSm9CLG1CQUlwQkEsdUJBSm9CO0FBQUEsWUFLekNDLDZCQUx5QyxtQkFLekNBLDZCQUx5QztBQUFBLFlBS1ZDLHlCQUxVLG1CQUtWQSx5QkFMVTs7O0FBUTNDLFlBQUksZ0JBQUVtQyxTQUFGLENBQVlzRyxTQUFaLENBQUosRUFBNEI7QUFDMUIsY0FBSTRFLHNCQUFKOztBQUVBO0FBQ0EsY0FBSTNGLGVBQUosRUFBcUIyRixnQkFBZ0J2Tix1QkFBaEIsQ0FBckIsS0FDSyxJQUFJNEQsU0FBU3BDLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkIrTCxnQkFBZ0JyTix5QkFBaEIsQ0FBM0IsS0FDQXFOLGdCQUFnQnROLDZCQUFoQjs7QUFFTCw4QkFDSzBJLFNBREwsRUFFS29HLElBRkw7QUFHRXhCO0FBSEY7QUFLRDs7QUFFRCxlQUFPO0FBQ0wzRSxnQkFBTTdJO0FBREQsU0FBUDtBQUdEO0FBekVVOztBQUFBO0FBQUEsSUFDZSw4QkFBZStGLFVBQWYsQ0FEZjtBQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNKQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwwQ0FFbUM7QUFBQSxZQUE1QjZLLG1CQUE0Qix1RUFBTixJQUFNOztBQUM1QyxZQUFNQyxZQUFZLEtBQUtsTSxLQUFMLENBQVc4QixPQUFYLENBQW1CekMsTUFBbkIsQ0FBMEI7QUFBQSxpQkFBSyxDQUFDOE0sRUFBRWhILE1BQVI7QUFBQSxTQUExQixFQUEwQ3JJLE1BQTVEO0FBQ0EsWUFBSSxDQUFDbVAsbUJBQUwsRUFBMEIsT0FBT0MsU0FBUDtBQUMxQixZQUFJLEtBQUtsTSxLQUFMLENBQVdpRSxTQUFYLElBQXdCLENBQUMsS0FBS2pFLEtBQUwsQ0FBV2lFLFNBQVgsQ0FBcUJVLGdCQUFsRCxFQUFvRTtBQUNsRSxpQkFBT3VILFlBQVksQ0FBbkI7QUFDRDtBQUNELGVBQU9BLFNBQVA7QUFDRDtBQVRVOztBQUFBO0FBQUEsSUFDZ0I5SyxVQURoQjtBQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRWY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7OytlQVJBO0FBQ0E7OztBQVNBLElBQU1nTCxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUE7QUFBQTs7QUFFbEIscUNBQVlwTSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0pBQ1hBLEtBRFc7O0FBRWpCLFlBQUtKLEtBQUwsR0FBYSxvQkFBVUksTUFBTXJCLFFBQWhCLENBQWI7QUFDQSxZQUFLaUIsS0FBTCxDQUFXYixJQUFYLEdBQWtCaUIsTUFBTWpCLElBQXhCO0FBQ0EsWUFBS3NOLGNBQUw7QUFKaUI7QUFLbEI7O0FBUGlCO0FBQUE7QUFBQSxnREFTUTlLLFNBVFIsRUFTbUI7QUFDbkMsYUFBSzNCLEtBQUwsQ0FBVzBNLFVBQVgsQ0FBc0IvSyxVQUFVeEMsSUFBaEM7QUFDRDtBQVhpQjtBQUFBO0FBQUEsdUNBYUQ7QUFDZixhQUFLd04sYUFBTCxHQUFxQkMsSUFBckI7QUFEZSxxQkFFOEMsS0FBS3hNLEtBRm5EO0FBQUEsWUFFUFEsVUFGTyxVQUVQQSxVQUZPO0FBQUEsWUFFS3NCLE9BRkwsVUFFS0EsT0FGTDtBQUFBLFlBRWN6QyxNQUZkLFVBRWNBLE1BRmQ7QUFBQSxZQUVzQjRFLFNBRnRCLFVBRXNCQSxTQUZ0QjtBQUFBLFlBRWlDdkQsUUFGakMsVUFFaUNBLFFBRmpDOztBQUdmLFlBQUlGLFVBQUosRUFBZ0I7QUFBQSxjQUNOaU0sY0FETSxHQUNhak0sVUFEYixDQUNOaU0sY0FETTs7QUFFZCxlQUFLRixhQUFMLEdBQXFCRSxlQUFlLEtBQUtGLGFBQXBCLEVBQW1DO0FBQ3RERztBQURzRCxXQUFuQyxDQUFyQjtBQUdEOztBQUVELFlBQUk1SyxRQUFRekMsTUFBUixDQUFlO0FBQUEsaUJBQU9zTixJQUFJbE0sSUFBWDtBQUFBLFNBQWYsRUFBZ0MzRCxNQUFoQyxHQUF5QyxDQUE3QyxFQUFnRDtBQUM5QyxlQUFLeVAsYUFBTCxHQUFxQix1QkFBUyxLQUFLQSxhQUFkLENBQXJCO0FBQ0Q7O0FBRUQsWUFBSWxOLE1BQUosRUFBWTtBQUFBLGNBQ0ZvTixlQURFLEdBQ2lCcE4sTUFEakIsQ0FDRm9OLGNBREU7O0FBRVYsZUFBS0YsYUFBTCxHQUFxQkUsZ0JBQWUsS0FBS0YsYUFBcEIsRUFBbUM7QUFDdERLLDhCQURzRDtBQUV0REY7QUFGc0QsV0FBbkMsQ0FBckI7QUFJRDs7QUFFRCxZQUFJaE0sUUFBSixFQUFjO0FBQUEsY0FDSitMLGdCQURJLEdBQ2UvTCxRQURmLENBQ0orTCxjQURJOztBQUVaLGVBQUtGLGFBQUwsR0FBcUJFLGlCQUFlLEtBQUtGLGFBQXBCLEVBQW1DO0FBQ3RESyw4QkFEc0Q7QUFFdERGO0FBRnNELFdBQW5DLENBQXJCO0FBSUQ7O0FBRUQsWUFBSXpJLFNBQUosRUFBZTtBQUNiLGVBQUtzSSxhQUFMLEdBQXFCLHVCQUFjLEtBQUtBLGFBQW5CLENBQXJCO0FBQ0Q7QUFDRjtBQTlDaUI7QUFBQTtBQUFBLCtCQWdEVDtBQUNQLFlBQU1NLHlCQUNELEtBQUs3TSxLQURKO0FBRUpKLGlCQUFPLEtBQUtBO0FBRlIsVUFBTjs7QUFLQSxlQUNFLG1DQUFNLGFBQU4sRUFBeUJpTixTQUF6QixDQURGO0FBR0Q7QUF6RGlCOztBQUFBO0FBQUEsSUFDa0IsK0NBRGxCO0FBQUEsQ0FBdEI7O2tCQTREZVQsYTs7Ozs7Ozs7Ozs7OztxakJDdEVmOzs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFcUJVLEs7QUFDbkIsaUJBQVluTyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtvTyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCdE8sUUFBakI7QUFDQSxTQUFLdU8sVUFBTCxHQUFrQkMsU0FBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCRCxTQUFsQjtBQUNBLFNBQUtFLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhSixTQUFiO0FBQ0EsU0FBS0ssWUFBTCxHQUFvQkwsU0FBcEI7QUFDRDs7Ozt5QkFFSWxNLEssRUFBT0MsUyxFQUFXQyxRLEVBQVU7QUFDL0IsVUFBTXRDLE1BQU0seUJBQWMsSUFBZCxFQUFvQm9DLEtBQXBCLENBQVo7QUFDQSxVQUFJcEMsR0FBSixFQUFTLGdCQUFFdEMsR0FBRixDQUFNc0MsR0FBTixFQUFXcUMsU0FBWCxFQUFzQkMsUUFBdEI7QUFDVjs7O2tDQUVzQjJELEssRUFBTzJJLFksRUFBYztBQUFBLFVBQWxDdk0sU0FBa0MsUUFBbENBLFNBQWtDOztBQUMxQyxXQUFLYixTQUFMLEdBQWlCLHFCQUFVLElBQVYsRUFBZ0JhLFNBQWhCLEVBQTJCNEQsS0FBM0IsRUFBa0MySSxZQUFsQyxDQUFqQjtBQUNBLFdBQUtyTixTQUFMLEdBQWlCYyxTQUFqQjtBQUNEOzs7a0NBRW9CO0FBQUEsVUFBWnFHLFFBQVksU0FBWkEsUUFBWTs7QUFDbkIsV0FBS3hJLElBQUwsR0FBWSxnQkFBSyxJQUFMLEVBQVd3SSxRQUFYLENBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLd0YsS0FBWjtBQUNEOzs7K0JBRVVoTyxJLEVBQU07QUFDZixXQUFLZ08sS0FBTCxHQUFhaE8sSUFBYjtBQUNEOzs7d0JBRVU7QUFDVCxVQUFJM0IsT0FBT0ksSUFBUCxDQUFZLEtBQUs4UCxRQUFqQixFQUEyQnhRLE1BQTNCLEdBQW9DLENBQXhDLEVBQTJDO0FBQ3pDLGVBQU8sS0FBS2tRLGFBQVo7QUFDRDtBQUNELGFBQU8sS0FBS0QsS0FBWjtBQUNELEs7c0JBQ1FoTyxJLEVBQU07QUFDYixVQUFJM0IsT0FBT0ksSUFBUCxDQUFZLEtBQUs4UCxRQUFqQixFQUEyQnhRLE1BQTNCLEdBQW9DLENBQXhDLEVBQTJDO0FBQ3pDLGFBQUtrUSxhQUFMLEdBQXFCak8sSUFBckI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLZ08sS0FBTCxHQUFjaE8sT0FBTzJPLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsU0FBTCxDQUFlN08sSUFBZixDQUFYLENBQVAsR0FBMEMsRUFBeEQ7QUFDRDtBQUNGOzs7d0JBRWtCO0FBQUUsYUFBTyxLQUFLaU8sYUFBWjtBQUE0QixLO3NCQUNoQ2EsWSxFQUFjO0FBQUUsV0FBS2IsYUFBTCxHQUFxQmEsWUFBckI7QUFBb0M7Ozt3QkFFdEQ7QUFBRSxhQUFPLEtBQUtaLFNBQVo7QUFBd0IsSztzQkFDNUJ0TyxRLEVBQVU7QUFBRSxXQUFLc08sU0FBTCxHQUFpQnRPLFFBQWpCO0FBQTRCOzs7d0JBRXJDO0FBQUUsYUFBTyxLQUFLdU8sVUFBWjtBQUF5QixLO3NCQUM3QjdNLFMsRUFBVztBQUFFLFdBQUs2TSxVQUFMLEdBQWtCN00sU0FBbEI7QUFBOEI7Ozt3QkFFOUM7QUFBRSxhQUFPLEtBQUtrTixLQUFaO0FBQW9CLEs7c0JBQ3hCdE4sSSxFQUFNO0FBQUUsV0FBS3NOLEtBQUwsR0FBYXROLElBQWI7QUFBb0I7Ozt3QkFFbkI7QUFBRSxhQUFPLEtBQUt1TixZQUFaO0FBQTJCLEs7c0JBQy9CdE4sVyxFQUFhO0FBQUUsV0FBS3NOLFlBQUwsR0FBb0J0TixXQUFwQjtBQUFrQzs7O3dCQUVqRDtBQUFFLGFBQU8sS0FBS2tOLFVBQVo7QUFBeUIsSztzQkFDN0JoTixTLEVBQVc7QUFBRSxXQUFLZ04sVUFBTCxHQUFrQmhOLFNBQWxCO0FBQThCOzs7d0JBRTFDO0FBQUUsYUFBTyxLQUFLaU4sU0FBWjtBQUF3QixLO3NCQUM1Qm5PLFEsRUFBVTtBQUFFLFdBQUttTyxTQUFMLEdBQWlCbk8sUUFBakI7QUFBNEI7Ozt3QkFFdkM7QUFBRSxhQUFPLEtBQUtvTyxRQUFaO0FBQXVCLEs7c0JBQzNCbk4sTyxFQUFTO0FBQUUsV0FBS21OLFFBQUwsR0FBZ0JuTixPQUFoQjtBQUEwQjs7Ozs7O2tCQXZFOUIyTSxLOzs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7Ozs7b01BSkE7QUFDQTtBQUNBOzs7QUFJQSxTQUFTZ0IsVUFBVCxDQUFvQm5SLENBQXBCLEVBQXVCQyxDQUF2QixFQUEwQjtBQUN4QixNQUFJVixlQUFKO0FBQ0EsTUFBSSxPQUFPVSxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDekJWLGFBQVNVLEVBQUVtUixhQUFGLENBQWdCcFIsQ0FBaEIsQ0FBVDtBQUNELEdBRkQsTUFFTztBQUNMVCxhQUFTUyxJQUFJQyxDQUFKLEdBQVEsQ0FBQyxDQUFULEdBQWVELElBQUlDLENBQUwsR0FBVSxDQUFWLEdBQWMsQ0FBckM7QUFDRDtBQUNELFNBQU9WLE1BQVA7QUFDRDs7QUFFTSxJQUFNdUUsc0JBQU8sU0FBUEEsSUFBTztBQUFBLE1BQUcxQixJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTc0IsU0FBVCxRQUFTQSxTQUFUO0FBQUEsTUFBb0JELFNBQXBCLFFBQW9CQSxTQUFwQjtBQUFBLFNBQW9DLFVBQUNtSCxRQUFELEVBQWM7QUFDcEUsUUFBTXdGLHFDQUFZaE8sSUFBWixFQUFOO0FBQ0FnTyxVQUFNdE0sSUFBTixDQUFXLFVBQUM5RCxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNuQixVQUFJVixlQUFKO0FBQ0EsVUFBSThSLFNBQVMsZ0JBQUVsUyxHQUFGLENBQU1hLENBQU4sRUFBU3lELFNBQVQsQ0FBYjtBQUNBLFVBQUk2TixTQUFTLGdCQUFFblMsR0FBRixDQUFNYyxDQUFOLEVBQVN3RCxTQUFULENBQWI7QUFDQTROLGVBQVMsZ0JBQUVyUSxTQUFGLENBQVlxUSxNQUFaLElBQXNCQSxNQUF0QixHQUErQixFQUF4QztBQUNBQyxlQUFTLGdCQUFFdFEsU0FBRixDQUFZc1EsTUFBWixJQUFzQkEsTUFBdEIsR0FBK0IsRUFBeEM7O0FBRUEsVUFBSTFHLFFBQUosRUFBYztBQUNackwsaUJBQVNxTCxTQUFTeUcsTUFBVCxFQUFpQkMsTUFBakIsRUFBeUI1TixTQUF6QixFQUFvQ0QsU0FBcEMsQ0FBVDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUlDLGNBQWMsZ0JBQU1uRixTQUF4QixFQUFtQztBQUNqQ2dCLG1CQUFTNFIsV0FBV0UsTUFBWCxFQUFtQkMsTUFBbkIsQ0FBVDtBQUNELFNBRkQsTUFFTztBQUNML1IsbUJBQVM0UixXQUFXRyxNQUFYLEVBQW1CRCxNQUFuQixDQUFUO0FBQ0Q7QUFDRjtBQUNELGFBQU85UixNQUFQO0FBQ0QsS0FqQkQ7QUFrQkEsV0FBTzZRLEtBQVA7QUFDRCxHQXJCbUI7QUFBQSxDQUFiOztBQXVCQSxJQUFNbUIsZ0NBQVksU0FBWkEsU0FBWTtBQUFBLFNBQVMsVUFBQ2xTLEtBQUQsRUFBUThJLEtBQVIsRUFBa0Q7QUFBQSxRQUFuQzJJLFlBQW1DLHVFQUFwQixnQkFBTXZTLFNBQWM7O0FBQ2xGLFFBQUk0SixLQUFKLEVBQVcsT0FBT0EsS0FBUDs7QUFFWCxRQUFJOUksVUFBVTRELE1BQU1RLFNBQXBCLEVBQStCO0FBQzdCLGFBQU9xTixZQUFQO0FBQ0Q7QUFDRCxXQUFPN04sTUFBTVMsU0FBTixLQUFvQixnQkFBTW5GLFNBQTFCLEdBQXNDLGdCQUFNRCxRQUE1QyxHQUF1RCxnQkFBTUMsU0FBcEU7QUFDRCxHQVB3QjtBQUFBLENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENQOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFIQTs7O2tCQUtlO0FBQUE7O0FBQUE7QUFBQTs7QUFNWCx5QkFBWThFLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFFakIsWUFBS21PLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQnZGLElBQWhCLE9BQWxCO0FBRmlCO0FBR2xCOztBQVRVO0FBQUE7QUFBQSwyQ0FXVTtBQUFBLHFCQUM2QyxLQUFLNUksS0FEbEQ7QUFBQSxZQUNYOEIsT0FEVyxVQUNYQSxPQURXO0FBQUEsWUFDRjhDLGFBREUsVUFDRkEsYUFERTtBQUFBLFlBQ2FHLG9CQURiLFVBQ2FBLG9CQURiO0FBQUEsWUFDbUNuRixLQURuQyxVQUNtQ0EsS0FEbkM7QUFFbkI7QUFDQTs7QUFDQSxZQUFJZ0YsaUJBQWlCQSxjQUFjOUgsTUFBZCxHQUF1QixDQUE1QyxFQUErQztBQUM3QyxjQUFNb0UsWUFBWTBELGNBQWMsQ0FBZCxFQUFpQjFELFNBQW5DO0FBQ0EsY0FBTTRELFFBQVFGLGNBQWMsQ0FBZCxFQUFpQkUsS0FBL0I7QUFDQSxjQUFNSSxTQUFTcEQsUUFBUXpDLE1BQVIsQ0FBZTtBQUFBLG1CQUFPc04sSUFBSXpMLFNBQUosS0FBa0JBLFNBQXpCO0FBQUEsV0FBZixDQUFmO0FBQ0EsY0FBSWdFLE9BQU9wSSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCOEMsa0JBQU13TyxPQUFOLENBQWNsSixPQUFPLENBQVAsQ0FBZCxFQUF5QkosS0FBekIsRUFBZ0NDLG9CQUFoQzs7QUFFQSxnQkFBSUcsT0FBTyxDQUFQLEVBQVU5QixNQUFkLEVBQXNCO0FBQ3BCOEIscUJBQU8sQ0FBUCxFQUFVOUIsTUFBVixDQUFpQnhELE1BQU1RLFNBQXZCLEVBQWtDUixNQUFNUyxTQUF4QztBQUNEOztBQUVELGdCQUFJLEtBQUtnTyxZQUFMLE1BQXVCLEtBQUt2TixrQkFBTCxFQUEzQixFQUFzRDtBQUNwRCxtQkFBS3dOLGdCQUFMO0FBQ0QsYUFGRCxNQUVPO0FBQ0wxTyxvQkFBTTJPLE1BQU4sQ0FBYXJKLE9BQU8sQ0FBUCxDQUFiO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFqQ1U7QUFBQTtBQUFBLGdEQW1DZTNELFNBbkNmLEVBbUMwQjtBQUNuQyxZQUFJaU4scUJBQUo7QUFDQSxhQUFLLElBQUkvUSxJQUFJLENBQWIsRUFBZ0JBLElBQUk4RCxVQUFVTyxPQUFWLENBQWtCaEYsTUFBdEMsRUFBOENXLEtBQUssQ0FBbkQsRUFBc0Q7QUFDcEQsY0FBSThELFVBQVVPLE9BQVYsQ0FBa0JyRSxDQUFsQixFQUFxQnlELFNBQXJCLEtBQW1DSyxVQUFVM0IsS0FBVixDQUFnQlEsU0FBdkQsRUFBa0U7QUFDaEVvTywyQkFBZWpOLFVBQVVPLE9BQVYsQ0FBa0JyRSxDQUFsQixDQUFmO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsWUFBSStRLGdCQUFnQkEsYUFBYS9OLElBQWpDLEVBQXVDO0FBQ3JDYyxvQkFBVTNCLEtBQVYsQ0FBZ0IyTyxNQUFoQixDQUF1QkMsWUFBdkI7QUFDRDtBQUNGO0FBOUNVO0FBQUE7QUFBQSxpQ0FnREF0SixNQWhEQSxFQWdEUTtBQUFBLFlBQ1R0RixLQURTLEdBQ0MsS0FBS0ksS0FETixDQUNUSixLQURTOztBQUVqQkEsY0FBTXdPLE9BQU4sQ0FBY2xKLE1BQWQsRUFBc0JpSSxTQUF0QixFQUFpQyxLQUFLbk4sS0FBTCxDQUFXK0Usb0JBQTVDOztBQUVBLFlBQUlHLE9BQU85QixNQUFYLEVBQW1CO0FBQ2pCOEIsaUJBQU85QixNQUFQLENBQWN4RCxNQUFNUSxTQUFwQixFQUErQlIsTUFBTVMsU0FBckM7QUFDRDs7QUFFRCxZQUFJLEtBQUtnTyxZQUFMLE1BQXVCLEtBQUt2TixrQkFBTCxFQUEzQixFQUFzRDtBQUNwRCxlQUFLd04sZ0JBQUw7QUFDRCxTQUZELE1BRU87QUFDTDFPLGdCQUFNMk8sTUFBTixDQUFhckosTUFBYjtBQUNBLGVBQUt1SixXQUFMO0FBQ0Q7QUFDRjtBQTlEVTtBQUFBO0FBQUEsK0JBZ0VGO0FBQ1AsZUFDRSw4QkFBQyxJQUFELGVBQ08sS0FBS3pPLEtBRFo7QUFFRSxrQkFBUyxLQUFLbU8sVUFGaEI7QUFHRSxnQkFBTyxLQUFLbk8sS0FBTCxDQUFXSixLQUFYLENBQWlCYjtBQUgxQixXQURGO0FBT0Q7QUF4RVU7O0FBQUE7QUFBQSxJQUNhLCtDQURiLFVBRUp5RSxTQUZJLEdBRVE7QUFDakI1RCxXQUFPLG9CQUFVbUUsTUFBVixDQUFpQkw7QUFEUCxHQUZSO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKZjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFNQTs7Ozs7Ozs7OzsrZUFYQTs7O2tCQWFlO0FBQUE7O0FBQUE7QUFBQTs7QUFPWCxpQ0FBWTFELEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SUFDWEEsS0FEVzs7QUFFakIsWUFBSzBPLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQjlGLElBQXJCLE9BQXZCO0FBQ0EsWUFBSytGLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCL0YsSUFBekIsT0FBM0I7O0FBRUE1SSxZQUFNSixLQUFOLENBQVlWLFFBQVosR0FBdUJjLE1BQU1pRSxTQUFOLENBQWdCL0UsUUFBaEIsSUFBNEIsRUFBbkQ7QUFDQSxZQUFLYSxLQUFMLEdBQWE7QUFDWGlKLHlCQUFpQmhKLE1BQU1KLEtBQU4sQ0FBWVY7QUFEbEIsT0FBYjtBQU5pQjtBQVNsQjs7QUFoQlU7QUFBQTtBQUFBLGdEQWtCZXFDLFNBbEJmLEVBa0IwQjtBQUNuQ0Esa0JBQVUzQixLQUFWLENBQWdCVixRQUFoQixHQUEyQnFDLFVBQVUwQyxTQUFWLENBQW9CL0UsUUFBcEIsSUFBZ0MsRUFBM0Q7QUFDQSxhQUFLc0MsUUFBTCxDQUFjO0FBQUEsaUJBQU87QUFDbkJ3SCw2QkFBaUJ6SCxVQUFVM0IsS0FBVixDQUFnQlY7QUFEZCxXQUFQO0FBQUEsU0FBZDtBQUdEOztBQUVEOzs7Ozs7QUF6Qlc7QUFBQTtBQUFBLHNDQThCS2tNLE1BOUJMLEVBOEJhN0MsT0E5QmIsRUE4QnNCb0IsUUE5QnRCLEVBOEJnQ3JOLENBOUJoQyxFQThCbUM7QUFBQSxxQkFDSyxLQUFLMEQsS0FEVjtBQUFBLHNDQUNwQ2lFLFNBRG9DO0FBQUEsWUFDdkJDLElBRHVCLG9CQUN2QkEsSUFEdUI7QUFBQSxZQUNqQkksUUFEaUIsb0JBQ2pCQSxRQURpQjtBQUFBLFlBQ0wxRSxLQURLLFVBQ0xBLEtBREs7QUFBQSxZQUVwQ3pFLGlCQUZvQyxtQkFFcENBLGlCQUZvQzs7O0FBSTVDLFlBQUl5VCw0Q0FBbUJoUCxNQUFNVixRQUF6QixFQUFKOztBQUVBLFlBQUlnRixTQUFTL0ksaUJBQWIsRUFBZ0M7QUFBRTtBQUNoQ3lULHlCQUFlLENBQUN4RCxNQUFELENBQWY7QUFDRCxTQUZELE1BRU8sSUFBSTdDLE9BQUosRUFBYTtBQUFFO0FBQ3BCcUcsdUJBQWFDLElBQWIsQ0FBa0J6RCxNQUFsQjtBQUNELFNBRk0sTUFFQTtBQUNMd0QseUJBQWVBLGFBQWF2UCxNQUFiLENBQW9CO0FBQUEsbUJBQVM3QyxVQUFVNE8sTUFBbkI7QUFBQSxXQUFwQixDQUFmO0FBQ0Q7O0FBRUR4TCxjQUFNVixRQUFOLEdBQWlCMFAsWUFBakI7O0FBRUEsWUFBSXRLLFFBQUosRUFBYztBQUNaLGNBQU16RixNQUFNLHlCQUFjZSxLQUFkLEVBQXFCd0wsTUFBckIsQ0FBWjtBQUNBOUcsbUJBQVN6RixHQUFULEVBQWMwSixPQUFkLEVBQXVCb0IsUUFBdkIsRUFBaUNyTixDQUFqQztBQUNEOztBQUVELGFBQUtrRixRQUFMLENBQWM7QUFBQSxpQkFBTztBQUNuQndILDZCQUFpQjRGO0FBREUsV0FBUDtBQUFBLFNBQWQ7QUFHRDs7QUFFRDs7OztBQXhEVztBQUFBO0FBQUEsMENBMkRTdFMsQ0EzRFQsRUEyRFk7QUFBQSxzQkFJZixLQUFLMEQsS0FKVTtBQUFBLFlBQ2JKLEtBRGEsV0FDYkEsS0FEYTtBQUFBLHdDQUNOcUUsU0FETTtBQUFBLFlBRW5CTSxXQUZtQixxQkFFbkJBLFdBRm1CO0FBQUEsWUFHbkJFLGFBSG1CLHFCQUduQkEsYUFIbUI7O0FBS3JCLFlBQU12RixXQUFXLGlDQUFpQlUsS0FBakIsRUFBd0I2RSxhQUF4QixDQUFqQjs7QUFFQSxZQUFNdkksU0FBUyxDQUFDZ0QsUUFBaEI7O0FBRUEsWUFBTTBQLGVBQWUxUyxTQUNuQiwrQkFBZTBELEtBQWYsRUFBc0I2RSxhQUF0QixDQURtQixHQUVuQixpQ0FBaUI3RSxLQUFqQixFQUF3QjZFLGFBQXhCLENBRkY7O0FBS0E3RSxjQUFNVixRQUFOLEdBQWlCMFAsWUFBakI7O0FBRUEsWUFBSXJLLFdBQUosRUFBaUI7QUFDZkEsc0JBQVlySSxNQUFaLEVBQW9CLGdDQUFnQjBELEtBQWhCLENBQXBCLEVBQTRDdEQsQ0FBNUM7QUFDRDs7QUFFRCxhQUFLa0YsUUFBTCxDQUFjO0FBQUEsaUJBQU87QUFDbkJ3SCw2QkFBaUI0RjtBQURFLFdBQVA7QUFBQSxTQUFkO0FBR0Q7QUFsRlU7QUFBQTtBQUFBLCtCQW9GRjtBQUNQLGVBQ0UsOEJBQUMsSUFBRCxlQUNPLEtBQUs1TyxLQURaO0FBRUUsdUJBQWMsS0FBSzBPLGVBRnJCO0FBR0UsMkJBQWtCLEtBQUtDO0FBSHpCLFdBREY7QUFPRDtBQTVGVTs7QUFBQTtBQUFBLDhCQUVKbkwsU0FGSSxHQUVRO0FBQ2pCNUQsV0FBTyxvQkFBVW1FLE1BQVYsQ0FBaUJMLFVBRFA7QUFFakJPLGVBQVcsb0JBQVVGLE1BQVYsQ0FBaUJMO0FBRlgsR0FGUjtBQUFBLEMiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZS1uZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZhZmI5ZWNmZjU4NDIyMDhhZTRhIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNPUlRfQVNDOiAnYXNjJyxcbiAgU09SVF9ERVNDOiAnZGVzYycsXG4gIFJPV19TRUxFQ1RfU0lOR0xFOiAncmFkaW8nLFxuICBST1dfU0VMRUNUX01VTFRJUExFOiAnY2hlY2tib3gnLFxuICBST1dfU0VMRUNUX0RJU0FCTEVEOiAnUk9XX1NFTEVDVF9ESVNBQkxFRCcsXG4gIENIRUNLQk9YX1NUQVRVU19DSEVDS0VEOiAnY2hlY2tlZCcsXG4gIENIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFOiAnaW5kZXRlcm1pbmF0ZScsXG4gIENIRUNLQk9YX1NUQVRVU19VTkNIRUNLRUQ6ICd1bmNoZWNrZWQnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29uc3QuanMiLCIvKiBlc2xpbnQgbm8tZW1wdHk6IDAgKi9cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuLyogZXNsaW50IHByZWZlci1yZXN0LXBhcmFtczogMCAqL1xuXG5mdW5jdGlvbiBzcGxpdE5lc3RlZChzdHIpIHtcbiAgcmV0dXJuIFtzdHJdXG4gICAgLmpvaW4oJy4nKVxuICAgIC5yZXBsYWNlKC9cXFsvZywgJy4nKVxuICAgIC5yZXBsYWNlKC9cXF0vZywgJycpXG4gICAgLnNwbGl0KCcuJyk7XG59XG5cbmZ1bmN0aW9uIGdldCh0YXJnZXQsIGZpZWxkKSB7XG4gIGNvbnN0IHBhdGhBcnJheSA9IHNwbGl0TmVzdGVkKGZpZWxkKTtcbiAgbGV0IHJlc3VsdDtcbiAgdHJ5IHtcbiAgICByZXN1bHQgPSBwYXRoQXJyYXkucmVkdWNlKChjdXJyLCBwYXRoKSA9PiBjdXJyW3BhdGhdLCB0YXJnZXQpO1xuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBmaWVsZCwgdmFsdWUsIHNhZmUgPSBmYWxzZSkge1xuICBjb25zdCBwYXRoQXJyYXkgPSBzcGxpdE5lc3RlZChmaWVsZCk7XG4gIGxldCBsZXZlbCA9IDA7XG4gIHBhdGhBcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICBsZXZlbCArPSAxO1xuICAgIGlmICh0eXBlb2YgYVtiXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICghc2FmZSkgdGhyb3cgbmV3IEVycm9yKGAke2F9LiR7Yn0gaXMgdW5kZWZpbmVkYCk7XG4gICAgICBhW2JdID0ge307XG4gICAgICByZXR1cm4gYVtiXTtcbiAgICB9XG5cbiAgICBpZiAobGV2ZWwgPT09IHBhdGhBcnJheS5sZW5ndGgpIHtcbiAgICAgIGFbYl0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGFbYl07XG4gIH0sIHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBPYmplY3QuIHRoZSBgT2JqZWN0YCBleGNlcHQgYEZ1bmN0aW9uYCBhbmQgYEFycmF5LmBcbiAqXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRoZSB2YWx1ZSBnb25uYSBjaGVja1xuICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmo7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZSA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmplY3Qob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIGZhbHNlO1xuXG4gIGNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gc2xlZXAoZm4sIG1zKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGZuKCksIG1zKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0O1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IHx8IDApO1xuXG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBweSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHNldCxcbiAgaXNGdW5jdGlvbixcbiAgaXNPYmplY3QsXG4gIGlzRW1wdHlPYmplY3QsXG4gIGlzRGVmaW5lZCxcbiAgc2xlZXAsXG4gIGRlYm91bmNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvdXRpbHMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG5leHBvcnQgY29uc3QgbWF0Y2hSb3cgPSAoa2V5RmllbGQsIGlkKSA9PiByb3cgPT4gcm93W2tleUZpZWxkXSA9PT0gaWQ7XG5cbmV4cG9ydCBjb25zdCBnZXRSb3dCeVJvd0lkID0gKHsgZGF0YSwga2V5RmllbGQgfSkgPT4gaWQgPT4gZGF0YS5maW5kKG1hdGNoUm93KGtleUZpZWxkLCBpZCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvcm93cy5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5FWElUSU5HID0gZXhwb3J0cy5FTlRFUkVEID0gZXhwb3J0cy5FTlRFUklORyA9IGV4cG9ydHMuRVhJVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSB1bmRlZmluZWQ7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFVOTU9VTlRFRCA9IGV4cG9ydHMuVU5NT1VOVEVEID0gJ3VubW91bnRlZCc7XG52YXIgRVhJVEVEID0gZXhwb3J0cy5FWElURUQgPSAnZXhpdGVkJztcbnZhciBFTlRFUklORyA9IGV4cG9ydHMuRU5URVJJTkcgPSAnZW50ZXJpbmcnO1xudmFyIEVOVEVSRUQgPSBleHBvcnRzLkVOVEVSRUQgPSAnZW50ZXJlZCc7XG52YXIgRVhJVElORyA9IGV4cG9ydHMuRVhJVElORyA9ICdleGl0aW5nJztcblxuLyoqXG4gKiBUaGUgVHJhbnNpdGlvbiBjb21wb25lbnQgbGV0cyB5b3UgZGVzY3JpYmUgYSB0cmFuc2l0aW9uIGZyb20gb25lIGNvbXBvbmVudFxuICogc3RhdGUgdG8gYW5vdGhlciBfb3ZlciB0aW1lXyB3aXRoIGEgc2ltcGxlIGRlY2xhcmF0aXZlIEFQSS4gTW9zdCBjb21tb25seVxuICogaXQncyB1c2VkIHRvIGFuaW1hdGUgdGhlIG1vdW50aW5nIGFuZCB1bm1vdW50aW5nIG9mIGEgY29tcG9uZW50LCBidXQgY2FuIGFsc29cbiAqIGJlIHVzZWQgdG8gZGVzY3JpYmUgaW4tcGxhY2UgdHJhbnNpdGlvbiBzdGF0ZXMgYXMgd2VsbC5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IGRvZXMgbm90IGFsdGVyIHRoZSBiZWhhdmlvciBvZiB0aGVcbiAqIGNvbXBvbmVudCBpdCByZW5kZXJzLCBpdCBvbmx5IHRyYWNrcyBcImVudGVyXCIgYW5kIFwiZXhpdFwiIHN0YXRlcyBmb3IgdGhlIGNvbXBvbmVudHMuXG4gKiBJdCdzIHVwIHRvIHlvdSB0byBnaXZlIG1lYW5pbmcgYW5kIGVmZmVjdCB0byB0aG9zZSBzdGF0ZXMuIEZvciBleGFtcGxlIHdlIGNhblxuICogYWRkIHN0eWxlcyB0byBhIGNvbXBvbmVudCB3aGVuIGl0IGVudGVycyBvciBleGl0czpcbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbic7XG4gKlxuICogY29uc3QgZHVyYXRpb24gPSAzMDA7XG4gKlxuICogY29uc3QgZGVmYXVsdFN0eWxlID0ge1xuICogICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2R1cmF0aW9ufW1zIGVhc2UtaW4tb3V0YCxcbiAqICAgb3BhY2l0eTogMCxcbiAqIH1cbiAqXG4gKiBjb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICogICBlbnRlcmluZzogeyBvcGFjaXR5OiAwIH0sXG4gKiAgIGVudGVyZWQ6ICB7IG9wYWNpdHk6IDEgfSxcbiAqIH07XG4gKlxuICogY29uc3QgRmFkZSA9ICh7IGluOiBpblByb3AgfSkgPT4gKFxuICogICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXtkdXJhdGlvbn0+XG4gKiAgICAgeyhzdGF0ZSkgPT4gKFxuICogICAgICAgPGRpdiBzdHlsZT17e1xuICogICAgICAgICAuLi5kZWZhdWx0U3R5bGUsXG4gKiAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdXG4gKiAgICAgICB9fT5cbiAqICAgICAgICAgSSdtIGEgZmFkZSBUcmFuc2l0aW9uIVxuICogICAgICAgPC9kaXY+XG4gKiAgICAgKX1cbiAqICAgPC9UcmFuc2l0aW9uPlxuICogKTtcbiAqIGBgYFxuICpcbiAqIEFzIG5vdGVkIHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IGRvZXNuJ3QgX2RvXyBhbnl0aGluZyBieSBpdHNlbGYgdG8gaXRzIGNoaWxkIGNvbXBvbmVudC5cbiAqIFdoYXQgaXQgZG9lcyBkbyBpcyB0cmFjayB0cmFuc2l0aW9uIHN0YXRlcyBvdmVyIHRpbWUgc28geW91IGNhbiB1cGRhdGUgdGhlXG4gKiBjb21wb25lbnQgKHN1Y2ggYXMgYnkgYWRkaW5nIHN0eWxlcyBvciBjbGFzc2VzKSB3aGVuIGl0IGNoYW5nZXMgc3RhdGVzLlxuICpcbiAqIFRoZXJlIGFyZSA0IG1haW4gc3RhdGVzIGEgVHJhbnNpdGlvbiBjYW4gYmUgaW46XG4gKiAgLSBgJ2VudGVyaW5nJ2BcbiAqICAtIGAnZW50ZXJlZCdgXG4gKiAgLSBgJ2V4aXRpbmcnYFxuICogIC0gYCdleGl0ZWQnYFxuICpcbiAqIFRyYW5zaXRpb24gc3RhdGUgaXMgdG9nZ2xlZCB2aWEgdGhlIGBpbmAgcHJvcC4gV2hlbiBgdHJ1ZWAgdGhlIGNvbXBvbmVudCBiZWdpbnMgdGhlXG4gKiBcIkVudGVyXCIgc3RhZ2UuIER1cmluZyB0aGlzIHN0YWdlLCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgZnJvbSBpdHMgY3VycmVudCB0cmFuc2l0aW9uIHN0YXRlLFxuICogdG8gYCdlbnRlcmluZydgIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gYW5kIHRoZW4gdG8gdGhlIGAnZW50ZXJlZCdgIHN0YWdlIG9uY2VcbiAqIGl0J3MgY29tcGxldGUuIExldCdzIHRha2UgdGhlIGZvbGxvd2luZyBleGFtcGxlOlxuICpcbiAqIGBgYGpzeFxuICogc3RhdGUgPSB7IGluOiBmYWxzZSB9O1xuICpcbiAqIHRvZ2dsZUVudGVyU3RhdGUgPSAoKSA9PiB7XG4gKiAgIHRoaXMuc2V0U3RhdGUoeyBpbjogdHJ1ZSB9KTtcbiAqIH1cbiAqXG4gKiByZW5kZXIoKSB7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdj5cbiAqICAgICAgIDxUcmFuc2l0aW9uIGluPXt0aGlzLnN0YXRlLmlufSB0aW1lb3V0PXs1MDB9IC8+XG4gKiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRW50ZXJTdGF0ZX0+Q2xpY2sgdG8gRW50ZXI8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCB0byB0aGUgYCdlbnRlcmluZydgIHN0YXRlIGFuZFxuICogc3RheSB0aGVyZSBmb3IgNTAwbXMgKHRoZSB2YWx1ZSBvZiBgdGltZW91dGApIGJlZm9yZSBpdCBmaW5hbGx5IHN3aXRjaGVzIHRvIGAnZW50ZXJlZCdgLlxuICpcbiAqIFdoZW4gYGluYCBpcyBgZmFsc2VgIHRoZSBzYW1lIHRoaW5nIGhhcHBlbnMgZXhjZXB0IHRoZSBzdGF0ZSBtb3ZlcyBmcm9tIGAnZXhpdGluZydgIHRvIGAnZXhpdGVkJ2AuXG4gKlxuICogIyMgVGltaW5nXG4gKlxuICogVGltaW5nIGlzIG9mdGVuIHRoZSB0cmlja2llc3QgcGFydCBvZiBhbmltYXRpb24sIG1pc3Rha2VzIGNhbiByZXN1bHQgaW4gc2xpZ2h0IGRlbGF5c1xuICogdGhhdCBhcmUgaGFyZCB0byBwaW4gZG93bi4gQSBjb21tb24gZXhhbXBsZSBpcyB3aGVuIHlvdSB3YW50IHRvIGFkZCBhbiBleGl0IHRyYW5zaXRpb24sXG4gKiB5b3Ugc2hvdWxkIHNldCB0aGUgZGVzaXJlZCBmaW5hbCBzdHlsZXMgd2hlbiB0aGUgc3RhdGUgaXMgYCdleGl0aW5nJ2AuIFRoYXQncyB3aGVuIHRoZVxuICogdHJhbnNpdGlvbiB0byB0aG9zZSBzdHlsZXMgd2lsbCBzdGFydCBhbmQsIGlmIHlvdSBtYXRjaGVkIHRoZSBgdGltZW91dGAgcHJvcCB3aXRoIHRoZVxuICogQ1NTIFRyYW5zaXRpb24gZHVyYXRpb24sIGl0IHdpbGwgZW5kIGV4YWN0bHkgd2hlbiB0aGUgc3RhdGUgY2hhbmdlcyB0byBgJ2V4aXRlZCdgLlxuICpcbiAqID4gKipOb3RlKio6IEZvciBzaW1wbGVyIHRyYW5zaXRpb25zIHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IG1pZ2h0IGJlIGVub3VnaCwgYnV0XG4gKiA+IHRha2UgaW50byBhY2NvdW50IHRoYXQgaXQncyBwbGF0Zm9ybS1hZ25vc3RpYywgd2hpbGUgdGhlIGBDU1NUcmFuc2l0aW9uYCBjb21wb25lbnRcbiAqID4gW2ZvcmNlcyByZWZsb3dzXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Jsb2IvNTAwNzMwM2U3MjlhNzRiZTY2YTIxYzNlMjIwNWU0OTE2ODIxNTI0Yi9zcmMvQ1NTVHJhbnNpdGlvbi5qcyNMMjA4LUwyMTUpXG4gKiA+IGluIG9yZGVyIHRvIG1ha2UgbW9yZSBjb21wbGV4IHRyYW5zaXRpb25zIG1vcmUgcHJlZGljdGFibGUuIEZvciBleGFtcGxlLCBldmVuIHRob3VnaFxuICogPiBjbGFzc2VzIGBleGFtcGxlLWVudGVyYCBhbmQgYGV4YW1wbGUtZW50ZXItYWN0aXZlYCBhcmUgYXBwbGllZCBpbW1lZGlhdGVseSBvbmUgYWZ0ZXJcbiAqID4gYW5vdGhlciwgeW91IGNhbiBzdGlsbCB0cmFuc2l0aW9uIGZyb20gb25lIHRvIHRoZSBvdGhlciBiZWNhdXNlIG9mIHRoZSBmb3JjZWQgcmVmbG93XG4gKiA+IChyZWFkIFt0aGlzIGlzc3VlXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2lzc3Vlcy8xNTkjaXNzdWVjb21tZW50LTMyMjc2MTE3MSlcbiAqID4gZm9yIG1vcmUgaW5mbykuIFRha2UgdGhpcyBpbnRvIGFjY291bnQgd2hlbiBjaG9vc2luZyBiZXR3ZWVuIGBUcmFuc2l0aW9uYCBhbmRcbiAqID4gYENTU1RyYW5zaXRpb25gLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvNzQxb3A0bW1qMD9mb250c2l6ZT0xNFwiIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCIgc2FuZGJveD1cImFsbG93LW1vZGFscyBhbGxvdy1mb3JtcyBhbGxvdy1wb3B1cHMgYWxsb3ctc2NyaXB0cyBhbGxvdy1zYW1lLW9yaWdpblwiPjwvaWZyYW1lPlxuICpcbiAqL1xuXG52YXIgVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYW5zaXRpb24pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICB2YXIgcGFyZW50R3JvdXAgPSBjb250ZXh0LnRyYW5zaXRpb25Hcm91cDtcbiAgICAvLyBJbiB0aGUgY29udGV4dCBvZiBhIFRyYW5zaXRpb25Hcm91cCBhbGwgZW50ZXJzIGFyZSByZWFsbHkgYXBwZWFyc1xuICAgIHZhciBhcHBlYXIgPSBwYXJlbnRHcm91cCAmJiAhcGFyZW50R3JvdXAuaXNNb3VudGluZyA/IHByb3BzLmVudGVyIDogcHJvcHMuYXBwZWFyO1xuXG4gICAgdmFyIGluaXRpYWxTdGF0dXMgPSB2b2lkIDA7XG4gICAgX3RoaXMubmV4dFN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJvcHMuaW4pIHtcbiAgICAgIGlmIChhcHBlYXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgICAgX3RoaXMubmV4dFN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVOVEVSRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wcy51bm1vdW50T25FeGl0IHx8IHByb3BzLm1vdW50T25FbnRlcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gVU5NT1VOVEVEO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHsgc3RhdHVzOiBpbml0aWFsU3RhdHVzIH07XG5cbiAgICBfdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4geyB0cmFuc2l0aW9uR3JvdXA6IG51bGwgfTsgLy8gYWxsb3dzIGZvciBuZXN0ZWQgVHJhbnNpdGlvbnNcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlU3RhdHVzKHRydWUpO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBfcmVmID0gdGhpcy5wZW5kaW5nU3RhdGUgfHwgdGhpcy5zdGF0ZSxcbiAgICAgICAgc3RhdHVzID0gX3JlZi5zdGF0dXM7XG5cbiAgICBpZiAobmV4dFByb3BzLmluKSB7XG4gICAgICBpZiAoc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogRVhJVEVEIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXR1cyAhPT0gRU5URVJJTkcgJiYgc3RhdHVzICE9PSBFTlRFUkVEKSB7XG4gICAgICAgIHRoaXMubmV4dFN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgICAgICAgdGhpcy5uZXh0U3RhdHVzID0gRVhJVElORztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmdldFRpbWVvdXRzID0gZnVuY3Rpb24gZ2V0VGltZW91dHMoKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzLnByb3BzLnRpbWVvdXQ7XG5cbiAgICB2YXIgZXhpdCA9IHZvaWQgMCxcbiAgICAgICAgZW50ZXIgPSB2b2lkIDAsXG4gICAgICAgIGFwcGVhciA9IHZvaWQgMDtcblxuICAgIGV4aXQgPSBlbnRlciA9IGFwcGVhciA9IHRpbWVvdXQ7XG5cbiAgICBpZiAodGltZW91dCAhPSBudWxsICYmIHR5cGVvZiB0aW1lb3V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgZXhpdCA9IHRpbWVvdXQuZXhpdDtcbiAgICAgIGVudGVyID0gdGltZW91dC5lbnRlcjtcbiAgICAgIGFwcGVhciA9IHRpbWVvdXQuYXBwZWFyO1xuICAgIH1cbiAgICByZXR1cm4geyBleGl0OiBleGl0LCBlbnRlcjogZW50ZXIsIGFwcGVhcjogYXBwZWFyIH07XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUudXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gdXBkYXRlU3RhdHVzKCkge1xuICAgIHZhciBtb3VudGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICB2YXIgbmV4dFN0YXR1cyA9IHRoaXMubmV4dFN0YXR1cztcblxuICAgIGlmIChuZXh0U3RhdHVzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRTdGF0dXMgPSBudWxsO1xuICAgICAgLy8gbmV4dFN0YXR1cyB3aWxsIGFsd2F5cyBiZSBFTlRFUklORyBvciBFWElUSU5HLlxuICAgICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gRU5URVJJTkcpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCAmJiB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBVTk1PVU5URUQgfSk7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIHBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGVudGVyID0gdGhpcy5wcm9wcy5lbnRlcjtcblxuICAgIHZhciBhcHBlYXJpbmcgPSB0aGlzLmNvbnRleHQudHJhbnNpdGlvbkdyb3VwID8gdGhpcy5jb250ZXh0LnRyYW5zaXRpb25Hcm91cC5pc01vdW50aW5nIDogbW91bnRpbmc7XG5cbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7XG5cbiAgICAvLyBubyBlbnRlciBhbmltYXRpb24gc2tpcCByaWdodCB0byBFTlRFUkVEXG4gICAgLy8gaWYgd2UgYXJlIG1vdW50aW5nIGFuZCBydW5uaW5nIHRoaXMgaXQgbWVhbnMgYXBwZWFyIF9tdXN0XyBiZSBzZXRcbiAgICBpZiAoIW1vdW50aW5nICYmICFlbnRlcikge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVOVEVSRUQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGFwcGVhcmluZyk7XG5cbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRU5URVJJTkcgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgYXBwZWFyaW5nKTtcblxuICAgICAgLy8gRklYTUU6IGFwcGVhciB0aW1lb3V0P1xuICAgICAgX3RoaXMyLm9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0cy5lbnRlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFTlRFUkVEIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUucGVyZm9ybUV4aXQgPSBmdW5jdGlvbiBwZXJmb3JtRXhpdChub2RlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgZXhpdCA9IHRoaXMucHJvcHMuZXhpdDtcblxuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTtcblxuICAgIC8vIG5vIGV4aXQgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRVhJVEVEXG4gICAgaWYgKCFleGl0KSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRVhJVEVEIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuXG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRJTkcgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcblxuICAgICAgX3RoaXMzLm9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0cy5leGl0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRFRCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNhbmNlbE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIGNhbmNlbE5leHRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5uZXh0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5zYWZlU2V0U3RhdGUgPSBmdW5jdGlvbiBzYWZlU2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgLy8gV2UgbmVlZCB0byB0cmFjayBwZW5kaW5nIHVwZGF0ZXMgZm9yIGluc3RhbmNlcyB3aGVyZSBhIGNXUlAgZmlyZXMgcXVpY2tseVxuICAgIC8vIGFmdGVyIGNETSBhbmQgYmVmb3JlIHRoZSBzdGF0ZSBmbHVzaGVzLCB3aGljaCB3b3VsZCBkb3VibGUgdHJpZ2dlciBhXG4gICAgLy8gdHJhbnNpdGlvblxuICAgIHRoaXMucGVuZGluZ1N0YXRlID0gbmV4dFN0YXRlO1xuXG4gICAgLy8gVGhpcyBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5LCBidXQgdGhlcmUgYXJlIHdlaXJkIHJhY2UgY29uZGl0aW9ucyB3aXRoXG4gICAgLy8gc2V0U3RhdGUgY2FsbGJhY2tzIGFuZCB1bm1vdW50aW5nIGluIHRlc3RpbmcsIHNvIGFsd2F5cyBtYWtlIHN1cmUgdGhhdFxuICAgIC8vIHdlIGNhbiBjYW5jZWwgYW55IHBlbmRpbmcgc2V0U3RhdGUgY2FsbGJhY2tzIGFmdGVyIHdlIHVubW91bnQuXG4gICAgY2FsbGJhY2sgPSB0aGlzLnNldE5leHRDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNC5wZW5kaW5nU3RhdGUgPSBudWxsO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5zZXROZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBzZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzNS5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dCwgaGFuZGxlcikge1xuICAgIHRoaXMuc2V0TmV4dENhbGxiYWNrKGhhbmRsZXIpO1xuXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIobm9kZSwgdGhpcy5uZXh0Q2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NoaWxkcmVuJ10pO1xuICAgIC8vIGZpbHRlciBwcm9wcyBmb3IgVHJhbnN0aXRpb25cblxuXG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuaW47XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMubW91bnRPbkVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnVubW91bnRPbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudGltZW91dDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hZGRFbmRMaXN0ZW5lcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmVkO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0ZWQ7XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oc3RhdHVzLCBjaGlsZFByb3BzKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbi5jb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogUHJvcFR5cGVzLm9iamVjdFxufTtcblRyYW5zaXRpb24uY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogZnVuY3Rpb24gdHJhbnNpdGlvbkdyb3VwKCkge31cbn07XG5cblxuVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBBIGBmdW5jdGlvbmAgY2hpbGQgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBhIFJlYWN0IGVsZW1lbnQuXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0dXNcbiAgICogKCdlbnRlcmluZycsICdlbnRlcmVkJywgJ2V4aXRpbmcnLCAnZXhpdGVkJywgJ3VubW91bnRlZCcpLCB3aGljaCBjYW4gYmUgdXNlZFxuICAgKiB0byBhcHBseSBjb250ZXh0IHNwZWNpZmljIHByb3BzIHRvIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogPFRyYW5zaXRpb24gdGltZW91dD17MTUwfT5cbiAgICogICB7KHN0YXR1cykgPT4gKFxuICAgKiAgICAgPE15Q29tcG9uZW50IGNsYXNzTmFtZT17YGZhZGUgZmFkZS0ke3N0YXR1c31gfSAvPlxuICAgKiAgICl9XG4gICAqIDwvVHJhbnNpdGlvbj5cbiAgICogYGBgXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZF0pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGVudGVyIG9yIGV4aXQgc3RhdGVzXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBpcyBtb3VudGVkIGltbWVkaWF0ZWx5IGFsb25nIHdpdGhcbiAgICogdGhlIHBhcmVudCBgVHJhbnNpdGlvbmAgY29tcG9uZW50LiBJZiB5b3Ugd2FudCB0byBcImxhenkgbW91bnRcIiB0aGUgY29tcG9uZW50IG9uIHRoZVxuICAgKiBmaXJzdCBgaW49e3RydWV9YCB5b3UgY2FuIHNldCBgbW91bnRPbkVudGVyYC4gQWZ0ZXIgdGhlIGZpcnN0IGVudGVyIHRyYW5zaXRpb24gdGhlIGNvbXBvbmVudCB3aWxsIHN0YXlcbiAgICogbW91bnRlZCwgZXZlbiBvbiBcImV4aXRlZFwiLCB1bmxlc3MgeW91IGFsc28gc3BlY2lmeSBgdW5tb3VudE9uRXhpdGAuXG4gICAqL1xuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgc3RheXMgbW91bnRlZCBhZnRlciBpdCByZWFjaGVzIHRoZSBgJ2V4aXRlZCdgIHN0YXRlLlxuICAgKiBTZXQgYHVubW91bnRPbkV4aXRgIGlmIHlvdSdkIHByZWZlciB0byB1bm1vdW50IHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgZmluaXNoZXMgZXhpdGluZy5cbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOb3JtYWxseSBhIGNvbXBvbmVudCBpcyBub3QgdHJhbnNpdGlvbmVkIGlmIGl0IGlzIHNob3duIHdoZW4gdGhlIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudCBtb3VudHMuXG4gICAqIElmIHlvdSB3YW50IHRvIHRyYW5zaXRpb24gb24gdGhlIGZpcnN0IG1vdW50IHNldCBgYXBwZWFyYCB0byBgdHJ1ZWAsIGFuZCB0aGVcbiAgICogY29tcG9uZW50IHdpbGwgdHJhbnNpdGlvbiBpbiBhcyBzb29uIGFzIHRoZSBgPFRyYW5zaXRpb24+YCBtb3VudHMuXG4gICAqXG4gICAqID4gTm90ZTogdGhlcmUgYXJlIG5vIHNwZWNpZmljIFwiYXBwZWFyXCIgc3RhdGVzLiBgYXBwZWFyYCBvbmx5IGFkZHMgYW4gYWRkaXRpb25hbCBgZW50ZXJgIHRyYW5zaXRpb24uXG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBlbnRlciB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZXhpdCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogUmVxdWlyZWQgdW5sZXNzIGBhZGRFbmRMaXN0ZW5lcmAgaXMgcHJvdmlkZWRcbiAgICpcbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9ucyBsaWtlOiBgdGltZW91dD17NTAwfWAsXG4gICAqIG9yIGluZGl2aWR1YWxseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogdGltZW91dD17e1xuICAgKiAgZW50ZXI6IDMwMCxcbiAgICogIGV4aXQ6IDUwMCxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXIgfCB7IGVudGVyPzogbnVtYmVyLCBleGl0PzogbnVtYmVyIH19XG4gICAqL1xuICB0aW1lb3V0OiBmdW5jdGlvbiB0aW1lb3V0KHByb3BzKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgcHQgPSBfUHJvcFR5cGVzLnRpbWVvdXRzU2hhcGU7XG4gICAgaWYgKCFwcm9wcy5hZGRFbmRMaXN0ZW5lcikgcHQgPSBwdC5pc1JlcXVpcmVkO1xuICAgIHJldHVybiBwdC5hcHBseSh1bmRlZmluZWQsIFtwcm9wc10uY29uY2F0KGFyZ3MpKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIHRyYW5zaXRpb24gZW5kIHRyaWdnZXIuIENhbGxlZCB3aXRoIHRoZSB0cmFuc2l0aW9uaW5nXG4gICAqIERPTSBub2RlIGFuZCBhIGBkb25lYCBjYWxsYmFjay4gQWxsb3dzIGZvciBtb3JlIGZpbmUgZ3JhaW5lZCB0cmFuc2l0aW9uIGVuZFxuICAgKiBsb2dpYy4gKipOb3RlOioqIFRpbWVvdXRzIGFyZSBzdGlsbCB1c2VkIGFzIGEgZmFsbGJhY2sgaWYgcHJvdmlkZWQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiBhZGRFbmRMaXN0ZW5lcj17KG5vZGUsIGRvbmUpID0+IHtcbiAgICogICAvLyB1c2UgdGhlIGNzcyB0cmFuc2l0aW9uZW5kIGV2ZW50IHRvIG1hcmsgdGhlIGZpbmlzaCBvZiBhIHRyYW5zaXRpb25cbiAgICogICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBkb25lLCBmYWxzZSk7XG4gICAqIH19XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkRW5kTGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmNcbn0gOiB7fTtcblxuLy8gTmFtZSB0aGUgZnVuY3Rpb24gc28gaXQgaXMgY2xlYXJlciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBpbjogZmFsc2UsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcblxuICBvbkVudGVyOiBub29wLFxuICBvbkVudGVyaW5nOiBub29wLFxuICBvbkVudGVyZWQ6IG5vb3AsXG5cbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuXG5UcmFuc2l0aW9uLlVOTU9VTlRFRCA9IDA7XG5UcmFuc2l0aW9uLkVYSVRFRCA9IDE7XG5UcmFuc2l0aW9uLkVOVEVSSU5HID0gMjtcblRyYW5zaXRpb24uRU5URVJFRCA9IDM7XG5UcmFuc2l0aW9uLkVYSVRJTkcgPSA0O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2l0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn1cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBleHBvcnRzLnRpbWVvdXRzU2hhcGUgPSB1bmRlZmluZWQ7XG5leHBvcnRzLnRyYW5zaXRpb25UaW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uVGltZW91dCh0cmFuc2l0aW9uVHlwZSkge1xuICB2YXIgdGltZW91dFByb3BOYW1lID0gJ3RyYW5zaXRpb24nICsgdHJhbnNpdGlvblR5cGUgKyAnVGltZW91dCc7XG4gIHZhciBlbmFibGVkUHJvcE5hbWUgPSAndHJhbnNpdGlvbicgKyB0cmFuc2l0aW9uVHlwZTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgLy8gSWYgdGhlIHRyYW5zaXRpb24gaXMgZW5hYmxlZFxuICAgIGlmIChwcm9wc1tlbmFibGVkUHJvcE5hbWVdKSB7XG4gICAgICAvLyBJZiBubyB0aW1lb3V0IGR1cmF0aW9uIGlzIHByb3ZpZGVkXG4gICAgICBpZiAocHJvcHNbdGltZW91dFByb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IodGltZW91dFByb3BOYW1lICsgJyB3YXNuXFwndCBzdXBwbGllZCB0byBDU1NUcmFuc2l0aW9uR3JvdXA6ICcgKyAndGhpcyBjYW4gY2F1c2UgdW5yZWxpYWJsZSBhbmltYXRpb25zIGFuZCB3b25cXCd0IGJlIHN1cHBvcnRlZCBpbiAnICsgJ2EgZnV0dXJlIHZlcnNpb24gb2YgUmVhY3QuIFNlZSAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYW5pbWF0aW9uLXRyYW5zaXRpb24tZ3JvdXAtdGltZW91dCBmb3IgbW9yZSAnICsgJ2luZm9ybWF0aW9uLicpO1xuXG4gICAgICAgIC8vIElmIHRoZSBkdXJhdGlvbiBpc24ndCBhIG51bWJlclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcHNbdGltZW91dFByb3BOYW1lXSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcih0aW1lb3V0UHJvcE5hbWUgKyAnIG11c3QgYmUgYSBudW1iZXIgKGluIG1pbGxpc2Vjb25kcyknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxudmFyIHRpbWVvdXRzU2hhcGUgPSBleHBvcnRzLnRpbWVvdXRzU2hhcGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG59KS5pc1JlcXVpcmVkXSk7XG5cbnZhciBjbGFzc05hbWVzU2hhcGUgPSBleHBvcnRzLmNsYXNzTmFtZXNTaGFwZSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn0pLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBlbnRlckRvbmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBlbnRlckFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0RG9uZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXRBY3RpdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59KV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvUHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9DaGlsZE1hcHBpbmcgPSByZXF1aXJlKCcuL3V0aWxzL0NoaWxkTWFwcGluZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn07XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBgPFRyYW5zaXRpb25Hcm91cD5gIHJlbmRlcnMgYSBgPGRpdj5gIGJ5IGRlZmF1bHQuIFlvdSBjYW4gY2hhbmdlIHRoaXNcbiAgICogYmVoYXZpb3IgYnkgcHJvdmlkaW5nIGEgYGNvbXBvbmVudGAgcHJvcC5cbiAgICogSWYgeW91IHVzZSBSZWFjdCB2MTYrIGFuZCB3b3VsZCBsaWtlIHRvIGF2b2lkIGEgd3JhcHBpbmcgYDxkaXY+YCBlbGVtZW50XG4gICAqIHlvdSBjYW4gcGFzcyBpbiBgY29tcG9uZW50PXtudWxsfWAuIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSB3cmFwcGluZyBkaXZcbiAgICogYm9ya3MgeW91ciBjc3Mgc3R5bGVzLlxuICAgKi9cbiAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgLyoqXG4gICAqIEEgc2V0IG9mIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudHMsIHRoYXQgYXJlIHRvZ2dsZWQgYGluYCBhbmQgb3V0IGFzIHRoZXlcbiAgICogbGVhdmUuIHRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIHdpbGwgaW5qZWN0IHNwZWNpZmljIHRyYW5zaXRpb24gcHJvcHMsIHNvXG4gICAqIHJlbWVtYmVyIHRvIHNwcmVhZCB0aGVtIHRocm91Z2ggaWYgeW91IGFyZSB3cmFwcGluZyB0aGUgYDxUcmFuc2l0aW9uPmAgYXNcbiAgICogd2l0aCBvdXIgYDxGYWRlPmAgZXhhbXBsZS5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgYXBwZWFyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGFwcGVhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBlbnRlciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgZXhpdCBhbmltYXRpb25zXG4gICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICAqL1xuICBleGl0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgbmVlZCB0byBhcHBseSByZWFjdGl2ZSB1cGRhdGVzIHRvIGEgY2hpbGQgYXMgaXQgaXMgZXhpdGluZy5cbiAgICogVGhpcyBpcyBnZW5lcmFsbHkgZG9uZSBieSB1c2luZyBgY2xvbmVFbGVtZW50YCBob3dldmVyIGluIHRoZSBjYXNlIG9mIGFuIGV4aXRpbmdcbiAgICogY2hpbGQgdGhlIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiByZW1vdmVkIGFuZCBub3QgYWNjZXNzaWJsZSB0byB0aGUgY29uc3VtZXIuXG4gICAqXG4gICAqIElmIHlvdSBkbyBuZWVkIHRvIHVwZGF0ZSBhIGNoaWxkIGFzIGl0IGxlYXZlcyB5b3UgY2FuIHByb3ZpZGUgYSBgY2hpbGRGYWN0b3J5YFxuICAgKiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlIGxlYXZpbmcuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKGNoaWxkOiBSZWFjdEVsZW1lbnQpIC0+IFJlYWN0RWxlbWVudFxuICAgKi9cbiAgY2hpbGRGYWN0b3J5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG59O1xuXG4vKipcbiAqIFRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIGNvbXBvbmVudCBtYW5hZ2VzIGEgc2V0IG9mIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudHNcbiAqIGluIGEgbGlzdC4gTGlrZSB3aXRoIHRoZSBgPFRyYW5zaXRpb24+YCBjb21wb25lbnQsIGA8VHJhbnNpdGlvbkdyb3VwPmAsIGlzIGFcbiAqIHN0YXRlIG1hY2hpbmUgZm9yIG1hbmFnaW5nIHRoZSBtb3VudGluZyBhbmQgdW5tb3VudGluZyBvZiBjb21wb25lbnRzIG92ZXJcbiAqIHRpbWUuXG4gKlxuICogQ29uc2lkZXIgdGhlIGV4YW1wbGUgYmVsb3cgdXNpbmcgdGhlIGBGYWRlYCBDU1MgdHJhbnNpdGlvbiBmcm9tIGJlZm9yZS5cbiAqIEFzIGl0ZW1zIGFyZSByZW1vdmVkIG9yIGFkZGVkIHRvIHRoZSBUb2RvTGlzdCB0aGUgYGluYCBwcm9wIGlzIHRvZ2dsZWRcbiAqIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAuIFlvdSBjYW4gdXNlIF9hbnlfIGA8VHJhbnNpdGlvbj5gXG4gKiBjb21wb25lbnQgaW4gYSBgPFRyYW5zaXRpb25Hcm91cD5gLCBub3QganVzdCBjc3MuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC8wMHJxeW8yNmtuP2ZvbnRzaXplPTE0XCIgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIiBzYW5kYm94PVwiYWxsb3ctbW9kYWxzIGFsbG93LWZvcm1zIGFsbG93LXBvcHVwcyBhbGxvdy1zY3JpcHRzIGFsbG93LXNhbWUtb3JpZ2luXCI+PC9pZnJhbWU+XG4gKlxuICogTm90ZSB0aGF0IGA8VHJhbnNpdGlvbkdyb3VwPmAgIGRvZXMgbm90IGRlZmluZSBhbnkgYW5pbWF0aW9uIGJlaGF2aW9yIVxuICogRXhhY3RseSBfaG93XyBhIGxpc3QgaXRlbSBhbmltYXRlcyBpcyB1cCB0byB0aGUgaW5kaXZpZHVhbCBgPFRyYW5zaXRpb24+YFxuICogY29tcG9uZW50cy4gVGhpcyBtZWFucyB5b3UgY2FuIG1peCBhbmQgbWF0Y2ggYW5pbWF0aW9ucyBhY3Jvc3MgZGlmZmVyZW50XG4gKiBsaXN0IGl0ZW1zLlxuICovXG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNpdGlvbkdyb3VwKTtcblxuICAgIC8vIEluaXRpYWwgY2hpbGRyZW4gc2hvdWxkIGFsbCBiZSBlbnRlcmluZywgZGVwZW5kZW50IG9uIGFwcGVhclxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgICBvbkV4aXRlZDogX3RoaXMuaGFuZGxlRXhpdGVkLmJpbmQoX3RoaXMsIGNoaWxkKSxcbiAgICAgICAgICBpbjogdHJ1ZSxcbiAgICAgICAgICBhcHBlYXI6IF90aGlzLmdldFByb3AoY2hpbGQsICdhcHBlYXInKSxcbiAgICAgICAgICBlbnRlcjogX3RoaXMuZ2V0UHJvcChjaGlsZCwgJ2VudGVyJyksXG4gICAgICAgICAgZXhpdDogX3RoaXMuZ2V0UHJvcChjaGlsZCwgJ2V4aXQnKVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbkdyb3VwOiB7IGlzTW91bnRpbmc6ICF0aGlzLmFwcGVhcmVkIH1cbiAgICB9O1xuICB9O1xuICAvLyB1c2UgY2hpbGQgY29uZmlnIHVubGVzcyBleHBsaWN0bHkgc2V0IGJ5IHRoZSBHcm91cFxuXG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5nZXRQcm9wID0gZnVuY3Rpb24gZ2V0UHJvcChjaGlsZCwgcHJvcCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsID8gcHJvcHNbcHJvcF0gOiBjaGlsZC5wcm9wc1twcm9wXTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hcHBlYXJlZCA9IHRydWU7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICB2YXIgbmV4dENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykobmV4dFByb3BzLmNoaWxkcmVuKTtcblxuICAgIHZhciBjaGlsZHJlbiA9ICgwLCBfQ2hpbGRNYXBwaW5nLm1lcmdlQ2hpbGRNYXBwaW5ncykocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG5cbiAgICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuXG4gICAgICBpZiAoISgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSkgcmV0dXJuO1xuXG4gICAgICB2YXIgaGFzUHJldiA9IGtleSBpbiBwcmV2Q2hpbGRNYXBwaW5nO1xuICAgICAgdmFyIGhhc05leHQgPSBrZXkgaW4gbmV4dENoaWxkTWFwcGluZztcblxuICAgICAgdmFyIHByZXZDaGlsZCA9IHByZXZDaGlsZE1hcHBpbmdba2V5XTtcbiAgICAgIHZhciBpc0xlYXZpbmcgPSAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpICYmICFwcmV2Q2hpbGQucHJvcHMuaW47XG5cbiAgICAgIC8vIGl0ZW0gaXMgbmV3IChlbnRlcmluZylcbiAgICAgIGlmIChoYXNOZXh0ICYmICghaGFzUHJldiB8fCBpc0xlYXZpbmcpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcmluZycsIGtleSlcbiAgICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICAgIG9uRXhpdGVkOiBfdGhpczIuaGFuZGxlRXhpdGVkLmJpbmQoX3RoaXMyLCBjaGlsZCksXG4gICAgICAgICAgaW46IHRydWUsXG4gICAgICAgICAgZXhpdDogX3RoaXMyLmdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgICBlbnRlcjogX3RoaXMyLmdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBpdGVtIGlzIG9sZCAoZXhpdGluZylcbiAgICAgIGVsc2UgaWYgKCFoYXNOZXh0ICYmIGhhc1ByZXYgJiYgIWlzTGVhdmluZykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2aW5nJywga2V5KVxuICAgICAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHsgaW46IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGl0ZW0gaGFzbid0IGNoYW5nZWQgdHJhbnNpdGlvbiBzdGF0ZXNcbiAgICAgICAgLy8gY29weSBvdmVyIHRoZSBsYXN0IHRyYW5zaXRpb24gcHJvcHM7XG4gICAgICAgIGVsc2UgaWYgKGhhc05leHQgJiYgaGFzUHJldiAmJiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndW5jaGFuZ2VkJywga2V5KVxuICAgICAgICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICAgICAgICBvbkV4aXRlZDogX3RoaXMyLmhhbmRsZUV4aXRlZC5iaW5kKF90aGlzMiwgY2hpbGQpLFxuICAgICAgICAgICAgICBpbjogcHJldkNoaWxkLnByb3BzLmluLFxuICAgICAgICAgICAgICBleGl0OiBfdGhpczIuZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICAgICAgICBlbnRlcjogX3RoaXMyLmdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGlsZHJlbjogY2hpbGRyZW4gfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiBoYW5kbGVFeGl0ZWQoY2hpbGQsIG5vZGUpIHtcbiAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICBpZiAoY2hpbGQua2V5IGluIGN1cnJlbnRDaGlsZE1hcHBpbmcpIHJldHVybjtcblxuICAgIGlmIChjaGlsZC5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgY2hpbGQucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IF9leHRlbmRzKHt9LCBzdGF0ZS5jaGlsZHJlbik7XG5cbiAgICAgIGRlbGV0ZSBjaGlsZHJlbltjaGlsZC5rZXldO1xuICAgICAgcmV0dXJuIHsgY2hpbGRyZW46IGNoaWxkcmVuIH07XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIENvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGNoaWxkRmFjdG9yeSA9IF9wcm9wcy5jaGlsZEZhY3RvcnksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjb21wb25lbnQnLCAnY2hpbGRGYWN0b3J5J10pO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdmFsdWVzKHRoaXMuc3RhdGUuY2hpbGRyZW4pLm1hcChjaGlsZEZhY3RvcnkpO1xuXG4gICAgZGVsZXRlIHByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmV4aXQ7XG5cbiAgICBpZiAoQ29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHByb3BzLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuXG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gcHJvcFR5cGVzIDoge307XG5UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2l0aW9uR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGNvbnN0IGlzU2VsZWN0ZWRBbGwgPSAoeyBkYXRhLCBzZWxlY3RlZCB9KSA9PiBkYXRhLmxlbmd0aCA9PT0gc2VsZWN0ZWQubGVuZ3RoO1xuXG5leHBvcnQgY29uc3QgaXNBbnlTZWxlY3RlZFJvdyA9ICh7IHNlbGVjdGVkIH0pID0+IChza2lwcyA9IFtdKSA9PiB7XG4gIGlmIChza2lwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gc2VsZWN0ZWQubGVuZ3RoID4gMDtcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWQuZmlsdGVyKHggPT4gIXNraXBzLmluY2x1ZGVzKHgpKS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0YWJsZUtleXMgPSAoeyBkYXRhLCBrZXlGaWVsZCB9KSA9PiAoc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKHJvdyA9PiBfLmdldChyb3csIGtleUZpZWxkKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbiAgICAuZmlsdGVyKHJvdyA9PiAhc2tpcHMuaW5jbHVkZXMoXy5nZXQocm93LCBrZXlGaWVsZCkpKVxuICAgIC5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1blNlbGVjdGFibGVLZXlzID0gKHsgc2VsZWN0ZWQgfSkgPT4gKHNraXBzID0gW10pID0+IHtcbiAgaWYgKHNraXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWQuZmlsdGVyKHggPT4gc2tpcHMuaW5jbHVkZXMoeCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUm93cyA9IChzdG9yZSkgPT4ge1xuICBjb25zdCBnZXRSb3cgPSBnZXRSb3dCeVJvd0lkKHN0b3JlKTtcbiAgcmV0dXJuIHN0b3JlLnNlbGVjdGVkLm1hcChrID0+IGdldFJvdyhrKSk7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zZWxlY3Rpb24uanMiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgUmVtb3RlUmVzb2x2ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBnZXROZXdlc3RTdGF0ZShzdGF0ZSA9IHt9KSB7XG4gICAgICBjb25zdCBzdG9yZSA9IHRoaXMuc3RvcmUgfHwgdGhpcy5wcm9wcy5zdG9yZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2U6IHN0b3JlLnBhZ2UsXG4gICAgICAgIHNpemVQZXJQYWdlOiBzdG9yZS5zaXplUGVyUGFnZSxcbiAgICAgICAgZmlsdGVyczogc3RvcmUuZmlsdGVycyxcbiAgICAgICAgc29ydEZpZWxkOiBzdG9yZS5zb3J0RmllbGQsXG4gICAgICAgIHNvcnRPcmRlcjogc3RvcmUuc29ydE9yZGVyLFxuICAgICAgICBkYXRhOiBzdG9yZS5nZXRBbGxEYXRhKCksXG4gICAgICAgIC4uLnN0YXRlXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlzUmVtb3RlUGFnaW5hdGlvbigpIHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5wYWdpbmF0aW9uKTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZUZpbHRlcmluZygpIHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5maWx0ZXIpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlU29ydCgpIHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5zb3J0KTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZUNlbGxFZGl0KCkge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLmNlbGxFZGl0KTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVQYWdlQ2hhbmdlKCkge1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdwYWdpbmF0aW9uJywgdGhpcy5nZXROZXdlc3RTdGF0ZSgpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVGaWx0ZXJDaGFuZ2UoKSB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuICAgICAgaWYgKHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucHJvcHMucGFnaW5hdGlvbi5vcHRpb25zIHx8IHt9O1xuICAgICAgICBuZXdTdGF0ZS5wYWdlID0gXy5pc0RlZmluZWQob3B0aW9ucy5wYWdlU3RhcnRJbmRleCkgPyBvcHRpb25zLnBhZ2VTdGFydEluZGV4IDogMTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgnZmlsdGVyJywgdGhpcy5nZXROZXdlc3RTdGF0ZShuZXdTdGF0ZSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVNvcnRDaGFuZ2UoKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ3NvcnQnLCB0aGlzLmdldE5ld2VzdFN0YXRlKCkpO1xuICAgIH1cblxuICAgIGhhbmRsZUNlbGxDaGFuZ2Uocm93SWQsIGRhdGFGaWVsZCwgbmV3VmFsdWUpIHtcbiAgICAgIGNvbnN0IGNlbGxFZGl0ID0geyByb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSB9O1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdjZWxsRWRpdCcsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBjZWxsRWRpdCB9KSk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvcmVtb3RlLXJlc29sdmVyLmpzIiwiaW1wb3J0IEJvb3RzdHJhcFRhYmxlIGZyb20gJy4vc3JjL2Jvb3RzdHJhcC10YWJsZSc7XG5pbXBvcnQgd2l0aERhdGFTdG9yZSBmcm9tICcuL3NyYy9jb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YVN0b3JlKEJvb3RzdHJhcFRhYmxlKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9pbmRleC5qcyIsIi8qIGVzbGludCBhcnJvdy1ib2R5LXN0eWxlOiAwICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBDYXB0aW9uIGZyb20gJy4vY2FwdGlvbic7XG5pbXBvcnQgQm9keSBmcm9tICcuL2JvZHknO1xuaW1wb3J0IFByb3BzQmFzZVJlc29sdmVyIGZyb20gJy4vcHJvcHMtcmVzb2x2ZXInO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IHsgaXNTZWxlY3RlZEFsbCB9IGZyb20gJy4vc3RvcmUvc2VsZWN0aW9uJztcblxuY2xhc3MgQm9vdHN0cmFwVGFibGUgZXh0ZW5kcyBQcm9wc0Jhc2VSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy52YWxpZGF0ZVByb3BzKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogcHJvcHMuZGF0YVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogbmV4dFByb3BzLmRhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIG92ZXJsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGFibGUgPSB0aGlzLnJlbmRlclRhYmxlKCk7XG4gICAgaWYgKGxvYWRpbmcgJiYgb3ZlcmxheSkge1xuICAgICAgY29uc3QgTG9hZGluZ092ZXJsYXkgPSBvdmVybGF5KHRhYmxlLCBsb2FkaW5nKTtcbiAgICAgIHJldHVybiA8TG9hZGluZ092ZXJsYXkgLz47XG4gICAgfVxuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuXG4gIHJlbmRlclRhYmxlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0b3JlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgaWQsXG4gICAgICBjbGFzc2VzLFxuICAgICAgc3RyaXBlZCxcbiAgICAgIGhvdmVyLFxuICAgICAgYm9yZGVyZWQsXG4gICAgICBjb25kZW5zZWQsXG4gICAgICBub0RhdGFJbmRpY2F0aW9uLFxuICAgICAgY2FwdGlvbixcbiAgICAgIHJvd1N0eWxlLFxuICAgICAgcm93Q2xhc3NlcyxcbiAgICAgIHdyYXBwZXJDbGFzc2VzLFxuICAgICAgcm93RXZlbnRzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0YWJsZVdyYXBwZXJDbGFzcyA9IGNzKCdyZWFjdC1ib290c3RyYXAtdGFibGUnLCB3cmFwcGVyQ2xhc3Nlcyk7XG5cbiAgICBjb25zdCB0YWJsZUNsYXNzID0gY3MoJ3RhYmxlJywge1xuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiBzdHJpcGVkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogaG92ZXIsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiBib3JkZXJlZCxcbiAgICAgICd0YWJsZS1jb25kZW5zZWQnOiBjb25kZW5zZWRcbiAgICB9LCBjbGFzc2VzKTtcblxuICAgIGNvbnN0IGNlbGxTZWxlY3Rpb25JbmZvID0gdGhpcy5yZXNvbHZlU2VsZWN0Um93UHJvcHMoe1xuICAgICAgb25Sb3dTZWxlY3Q6IHRoaXMucHJvcHMub25Sb3dTZWxlY3RcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlckNlbGxTZWxlY3Rpb25JbmZvID0gdGhpcy5yZXNvbHZlU2VsZWN0Um93UHJvcHNGb3JIZWFkZXIoe1xuICAgICAgb25BbGxSb3dzU2VsZWN0OiB0aGlzLnByb3BzLm9uQWxsUm93c1NlbGVjdCxcbiAgICAgIHNlbGVjdGVkOiBzdG9yZS5zZWxlY3RlZCxcbiAgICAgIGFsbFJvd3NTZWxlY3RlZDogaXNTZWxlY3RlZEFsbChzdG9yZSlcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhYmxlQ2FwdGlvbiA9IChjYXB0aW9uICYmIDxDYXB0aW9uPnsgY2FwdGlvbiB9PC9DYXB0aW9uPik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyB0YWJsZVdyYXBwZXJDbGFzcyB9PlxuICAgICAgICA8dGFibGUgaWQ9eyBpZCB9IGNsYXNzTmFtZT17IHRhYmxlQ2xhc3MgfT5cbiAgICAgICAgICB7IHRhYmxlQ2FwdGlvbiB9XG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICAgICAgc29ydEZpZWxkPXsgc3RvcmUuc29ydEZpZWxkIH1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17IHN0b3JlLnNvcnRPcmRlciB9XG4gICAgICAgICAgICBvblNvcnQ9eyB0aGlzLnByb3BzLm9uU29ydCB9XG4gICAgICAgICAgICBvbkZpbHRlcj17IHRoaXMucHJvcHMub25GaWx0ZXIgfVxuICAgICAgICAgICAgc2VsZWN0Um93PXsgaGVhZGVyQ2VsbFNlbGVjdGlvbkluZm8gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJvZHlcbiAgICAgICAgICAgIGRhdGE9eyB0aGlzLnN0YXRlLmRhdGEgfVxuICAgICAgICAgICAga2V5RmllbGQ9eyBrZXlGaWVsZCB9XG4gICAgICAgICAgICBjb2x1bW5zPXsgY29sdW1ucyB9XG4gICAgICAgICAgICBpc0VtcHR5PXsgdGhpcy5pc0VtcHR5KCkgfVxuICAgICAgICAgICAgdmlzaWJsZUNvbHVtblNpemU9eyB0aGlzLnZpc2libGVDb2x1bW5TaXplKCkgfVxuICAgICAgICAgICAgbm9EYXRhSW5kaWNhdGlvbj17IG5vRGF0YUluZGljYXRpb24gfVxuICAgICAgICAgICAgY2VsbEVkaXQ9eyB0aGlzLnByb3BzLmNlbGxFZGl0IHx8IHt9IH1cbiAgICAgICAgICAgIHNlbGVjdFJvdz17IGNlbGxTZWxlY3Rpb25JbmZvIH1cbiAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5cz17IHN0b3JlLnNlbGVjdGVkIH1cbiAgICAgICAgICAgIHJvd1N0eWxlPXsgcm93U3R5bGUgfVxuICAgICAgICAgICAgcm93Q2xhc3Nlcz17IHJvd0NsYXNzZXMgfVxuICAgICAgICAgICAgcm93RXZlbnRzPXsgcm93RXZlbnRzIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Cb290c3RyYXBUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgcmVtb3RlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMuYm9vbFxuICB9KV0pLFxuICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgbm9EYXRhSW5kaWNhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgc3RyaXBlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGJvcmRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaG92ZXI6IFByb3BUeXBlcy5ib29sLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbmRlbnNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNhcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSksXG4gIHBhZ2luYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2VsbEVkaXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtb2RlOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlJPV19TRUxFQ1RfU0lOR0xFLCBDb25zdC5ST1dfU0VMRUNUX01VTFRJUExFXSkuaXNSZXF1aXJlZCxcbiAgICBjbGlja1RvU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGlja1RvRWRpdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0QWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIG5vblNlbGVjdGFibGU6IFByb3BUeXBlcy5hcnJheSxcbiAgICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhpZGVTZWxlY3RDb2x1bW46IFByb3BUeXBlcy5ib29sXG4gIH0pLFxuICBvblJvd1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQWxsUm93c1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHJvd1N0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICByb3dFdmVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJvd0NsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pLmlzUmVxdWlyZWRcbiAgfSkpLFxuICBkZWZhdWx0U29ydERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSksXG4gIG92ZXJsYXk6IFByb3BUeXBlcy5mdW5jLFxuICBvblRhYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Cb290c3RyYXBUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlbW90ZTogZmFsc2UsXG4gIHN0cmlwZWQ6IGZhbHNlLFxuICBib3JkZXJlZDogdHJ1ZSxcbiAgaG92ZXI6IGZhbHNlLFxuICBjb25kZW5zZWQ6IGZhbHNlLFxuICBub0RhdGFJbmRpY2F0aW9uOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb290c3RyYXBUYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Jvb3RzdHJhcC10YWJsZS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuXG5pbXBvcnQgSGVhZGVyQ2VsbCBmcm9tICcuL2hlYWRlci1jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25IZWFkZXJDZWxsIGZyb20gJy4vcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24taGVhZGVyLWNlbGwnO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBST1dfU0VMRUNUX0RJU0FCTEVEIH0gPSBDb25zdDtcblxuICBjb25zdCB7XG4gICAgY29sdW1ucyxcbiAgICBvblNvcnQsXG4gICAgb25GaWx0ZXIsXG4gICAgc29ydEZpZWxkLFxuICAgIHNvcnRPcmRlcixcbiAgICBzZWxlY3RSb3dcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPHRoZWFkPlxuICAgICAgPHRyPlxuICAgICAgICB7XG4gICAgICAgICAgKHNlbGVjdFJvdy5tb2RlICE9PSBST1dfU0VMRUNUX0RJU0FCTEVEICYmICFzZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbilcbiAgICAgICAgICAgID8gPFNlbGVjdGlvbkhlYWRlckNlbGwgeyAuLi5zZWxlY3RSb3cgfSAvPiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgY29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb2x1bW4uaGlkZGVuKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJTb3J0ID0gY29sdW1uLmRhdGFGaWVsZCA9PT0gc29ydEZpZWxkO1xuICAgICAgICAgICAgICBjb25zdCBpc0xhc3RTb3J0aW5nID0gY29sdW1uLmRhdGFGaWVsZCA9PT0gc29ydEZpZWxkO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEhlYWRlckNlbGxcbiAgICAgICAgICAgICAgICAgIGluZGV4PXsgaSB9XG4gICAgICAgICAgICAgICAgICBrZXk9eyBjb2x1bW4uZGF0YUZpZWxkIH1cbiAgICAgICAgICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgICAgICAgICBvblNvcnQ9eyBvblNvcnQgfVxuICAgICAgICAgICAgICAgICAgc29ydGluZz17IGN1cnJTb3J0IH1cbiAgICAgICAgICAgICAgICAgIG9uRmlsdGVyPXsgb25GaWx0ZXIgfVxuICAgICAgICAgICAgICAgICAgc29ydE9yZGVyPXsgc29ydE9yZGVyIH1cbiAgICAgICAgICAgICAgICAgIGlzTGFzdFNvcnRpbmc9eyBpc0xhc3RTb3J0aW5nIH1cbiAgICAgICAgICAgICAgICAvPik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICApO1xufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc29ydEZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzb3J0T3JkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBTb3J0U3ltYm9sIGZyb20gJy4vc29ydC9zeW1ib2wnO1xuaW1wb3J0IFNvcnRDYXJldCBmcm9tICcuL3NvcnQvY2FyZXQnO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cblxuY29uc3QgSGVhZGVyQ2VsbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY29sdW1uLFxuICAgIGluZGV4LFxuICAgIG9uU29ydCxcbiAgICBzb3J0aW5nLFxuICAgIHNvcnRPcmRlcixcbiAgICBpc0xhc3RTb3J0aW5nLFxuICAgIG9uRmlsdGVyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgdGV4dCxcbiAgICBzb3J0LFxuICAgIGZpbHRlcixcbiAgICBoZWFkZXJUaXRsZSxcbiAgICBoZWFkZXJBbGlnbixcbiAgICBoZWFkZXJGb3JtYXR0ZXIsXG4gICAgaGVhZGVyRXZlbnRzLFxuICAgIGhlYWRlckNsYXNzZXMsXG4gICAgaGVhZGVyU3R5bGUsXG4gICAgaGVhZGVyQXR0cnMsXG4gICAgaGVhZGVyU29ydGluZ0NsYXNzZXMsXG4gICAgaGVhZGVyU29ydGluZ1N0eWxlXG4gIH0gPSBjb2x1bW47XG5cbiAgY29uc3QgY2VsbEF0dHJzID0ge1xuICAgIC4uLl8uaXNGdW5jdGlvbihoZWFkZXJBdHRycykgPyBoZWFkZXJBdHRycyhjb2x1bW4sIGluZGV4KSA6IGhlYWRlckF0dHJzLFxuICAgIC4uLmhlYWRlckV2ZW50c1xuICB9O1xuXG4gIGxldCBzb3J0U3ltYm9sO1xuICBsZXQgZmlsdGVyRWxtO1xuICBsZXQgY2VsbFN0eWxlID0ge307XG4gIGxldCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihoZWFkZXJDbGFzc2VzKSA/IGhlYWRlckNsYXNzZXMoY29sdW1uLCBpbmRleCkgOiBoZWFkZXJDbGFzc2VzO1xuXG4gIGlmIChoZWFkZXJTdHlsZSkge1xuICAgIGNlbGxTdHlsZSA9IF8uaXNGdW5jdGlvbihoZWFkZXJTdHlsZSkgPyBoZWFkZXJTdHlsZShjb2x1bW4sIGluZGV4KSA6IGhlYWRlclN0eWxlO1xuICB9XG5cbiAgaWYgKGhlYWRlclRpdGxlKSB7XG4gICAgY2VsbEF0dHJzLnRpdGxlID0gXy5pc0Z1bmN0aW9uKGhlYWRlclRpdGxlKSA/IGhlYWRlclRpdGxlKGNvbHVtbiwgaW5kZXgpIDogdGV4dDtcbiAgfVxuXG4gIGlmIChoZWFkZXJBbGlnbikge1xuICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPSBfLmlzRnVuY3Rpb24oaGVhZGVyQWxpZ24pID8gaGVhZGVyQWxpZ24oY29sdW1uLCBpbmRleCkgOiBoZWFkZXJBbGlnbjtcbiAgfVxuXG4gIGlmIChzb3J0KSB7XG4gICAgY29uc3QgY3VzdG9tQ2xpY2sgPSBjZWxsQXR0cnMub25DbGljaztcbiAgICBjZWxsQXR0cnMub25DbGljayA9IChlKSA9PiB7XG4gICAgICBvblNvcnQoY29sdW1uKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY3VzdG9tQ2xpY2spKSBjdXN0b21DbGljayhlKTtcbiAgICB9O1xuICAgIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjcyhjZWxsQXR0cnMuY2xhc3NOYW1lLCAnc29ydGFibGUnKTtcblxuICAgIGlmIChzb3J0aW5nKSB7XG4gICAgICBzb3J0U3ltYm9sID0gPFNvcnRDYXJldCBvcmRlcj17IHNvcnRPcmRlciB9IC8+O1xuXG4gICAgICAvLyBhcHBlbmQgY3VzdG9taXplZCBjbGFzc2VzIG9yIHN0eWxlIGlmIHRhYmxlIHdhcyBzb3J0aW5nIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvbHVtbi5cbiAgICAgIGNlbGxDbGFzc2VzID0gY3MoXG4gICAgICAgIGNlbGxDbGFzc2VzLFxuICAgICAgICBfLmlzRnVuY3Rpb24oaGVhZGVyU29ydGluZ0NsYXNzZXMpXG4gICAgICAgICAgPyBoZWFkZXJTb3J0aW5nQ2xhc3Nlcyhjb2x1bW4sIHNvcnRPcmRlciwgaXNMYXN0U29ydGluZywgaW5kZXgpXG4gICAgICAgICAgOiBoZWFkZXJTb3J0aW5nQ2xhc3Nlc1xuICAgICAgKTtcblxuICAgICAgY2VsbFN0eWxlID0ge1xuICAgICAgICAuLi5jZWxsU3R5bGUsXG4gICAgICAgIC4uLl8uaXNGdW5jdGlvbihoZWFkZXJTb3J0aW5nU3R5bGUpXG4gICAgICAgICAgPyBoZWFkZXJTb3J0aW5nU3R5bGUoY29sdW1uLCBzb3J0T3JkZXIsIGlzTGFzdFNvcnRpbmcsIGluZGV4KVxuICAgICAgICAgIDogaGVhZGVyU29ydGluZ1N0eWxlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0U3ltYm9sID0gPFNvcnRTeW1ib2wgLz47XG4gICAgfVxuICB9XG5cbiAgaWYgKGNlbGxDbGFzc2VzKSBjZWxsQXR0cnMuY2xhc3NOYW1lID0gY3MoY2VsbEF0dHJzLmNsYXNzTmFtZSwgY2VsbENsYXNzZXMpO1xuICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG4gIGlmIChmaWx0ZXIpIHtcbiAgICBmaWx0ZXJFbG0gPSA8ZmlsdGVyLkZpbHRlciB7IC4uLmZpbHRlci5wcm9wcyB9IG9uRmlsdGVyPXsgb25GaWx0ZXIgfSBjb2x1bW49eyBjb2x1bW4gfSAvPjtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkcmVuID0gaGVhZGVyRm9ybWF0dGVyID9cbiAgICBoZWFkZXJGb3JtYXR0ZXIoY29sdW1uLCBpbmRleCwgeyBzb3J0RWxlbWVudDogc29ydFN5bWJvbCwgZmlsdGVyRWxlbWVudDogZmlsdGVyRWxtIH0pIDpcbiAgICB0ZXh0O1xuXG4gIGlmIChoZWFkZXJGb3JtYXR0ZXIpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCBjZWxsQXR0cnMsIGNoaWxkcmVuKTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIGNlbGxBdHRycywgY2hpbGRyZW4sIHNvcnRTeW1ib2wsIGZpbHRlckVsbSk7XG59O1xuXG5IZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGhlYWRlckZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmb3JtYXRFeHRyYURhdGE6IFByb3BUeXBlcy5hbnksXG4gICAgaGVhZGVyQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlclRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyRXZlbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGV2ZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBoZWFkZXJBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJBdHRyczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBhdHRyczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBzb3J0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzb3J0RnVuYzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBlZGl0b3I6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZWRpdGFibGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRDZWxsU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdENlbGxDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvclN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvckNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdG9yUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZhbGlkYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZpbHRlclZhbHVlOiBQcm9wVHlwZXMuZnVuY1xuICB9KS5pc1JlcXVpcmVkLFxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzb3J0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc29ydE9yZGVyOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfQVNDLCBDb25zdC5TT1JUX0RFU0NdKSxcbiAgaXNMYXN0U29ydGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ2VsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci1jZWxsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU29ydFN5bWJvbCA9ICgpID0+IChcbiAgPHNwYW4gY2xhc3NOYW1lPVwib3JkZXJcIj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wdXBcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgLz5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj4pO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0U3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9zeW1ib2wuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuY29uc3QgU29ydENhcmV0ID0gKHsgb3JkZXIgfSkgPT4ge1xuICBjb25zdCBvcmRlckNsYXNzID0gY3MoJ3JlYWN0LWJvb3RzdHJhcC10YWJsZS1zb3J0LW9yZGVyJywge1xuICAgIGRyb3B1cDogb3JkZXIgPT09IENvbnN0LlNPUlRfQVNDXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17IG9yZGVyQ2xhc3MgfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgLz5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5Tb3J0Q2FyZXQucHJvcFR5cGVzID0ge1xuICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0FTQywgQ29uc3QuU09SVF9ERVNDXSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydCBkZWZhdWx0IFNvcnRDYXJldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvY2FyZXQuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmV4cG9ydCBjb25zdCBDaGVja0JveCA9ICh7IGNoZWNrZWQsIGluZGV0ZXJtaW5hdGUgfSkgPT4gKFxuICA8aW5wdXRcbiAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICByZWY9eyAoaW5wdXQpID0+IHtcbiAgICAgIGlmIChpbnB1dCkgaW5wdXQuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9IH1cbiAgLz5cbik7XG5cbkNoZWNrQm94LnByb3BUeXBlcyA9IHtcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uSGVhZGVyQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWRTdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25BbGxSb3dzU2VsZWN0OiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhdm9pZCB1cGRhdGluZyBpZiBidXR0b24gaXNcbiAgICogMS4gcmFkaW9cbiAgICogMi4gc3RhdHVzIHdhcyBub3QgY2hhbmdlZC5cbiAgICovXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IFJPV19TRUxFQ1RfU0lOR0xFIH0gPSBDb25zdDtcbiAgICBjb25zdCB7IG1vZGUsIGNoZWNrZWRTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9TSU5HTEUpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXh0UHJvcHMuY2hlY2tlZFN0YXR1cyAhPT0gY2hlY2tlZFN0YXR1cztcbiAgfVxuXG4gIGhhbmRsZUNoZWNrQm94Q2xpY2soZSkge1xuICAgIGNvbnN0IHsgb25BbGxSb3dzU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgb25BbGxSb3dzU2VsZWN0KGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIENIRUNLQk9YX1NUQVRVU19DSEVDS0VELCBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURSwgUk9XX1NFTEVDVF9TSU5HTEVcbiAgICB9ID0gQ29uc3Q7XG5cbiAgICBjb25zdCB7IG1vZGUsIGNoZWNrZWRTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjaGVja2VkID0gY2hlY2tlZFN0YXR1cyA9PT0gQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ7XG5cbiAgICBjb25zdCBpbmRldGVybWluYXRlID0gY2hlY2tlZFN0YXR1cyA9PT0gQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEU7XG5cbiAgICByZXR1cm4gbW9kZSA9PT0gUk9XX1NFTEVDVF9TSU5HTEVcbiAgICAgID8gPHRoIGRhdGEtcm93LXNlbGVjdGlvbiAvPlxuICAgICAgOiAoXG4gICAgICAgIDx0aCBkYXRhLXJvdy1zZWxlY3Rpb24gb25DbGljaz17IHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljayB9PlxuICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9eyBpbmRldGVybWluYXRlIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RoPlxuICAgICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24taGVhZGVyLWNlbGwuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQ2FwdGlvbiA9IChwcm9wcykgPT4ge1xuICBpZiAoIXByb3BzLmNoaWxkcmVuKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8Y2FwdGlvbj57IHByb3BzLmNoaWxkcmVuIH08L2NhcHRpb24+XG4gICk7XG59O1xuXG5DYXB0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jYXB0aW9uLmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgUm93IGZyb20gJy4vcm93JztcbmltcG9ydCBSb3dTZWN0aW9uIGZyb20gJy4vcm93LXNlY3Rpb24nO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuXG5jb25zdCBCb2R5ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2x1bW5zLFxuICAgIGRhdGEsXG4gICAga2V5RmllbGQsXG4gICAgaXNFbXB0eSxcbiAgICBub0RhdGFJbmRpY2F0aW9uLFxuICAgIHZpc2libGVDb2x1bW5TaXplLFxuICAgIGNlbGxFZGl0LFxuICAgIHNlbGVjdFJvdyxcbiAgICBzZWxlY3RlZFJvd0tleXMsXG4gICAgcm93U3R5bGUsXG4gICAgcm93Q2xhc3NlcyxcbiAgICByb3dFdmVudHNcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICBiZ0NvbG9yLFxuICAgIG5vblNlbGVjdGFibGVcbiAgfSA9IHNlbGVjdFJvdztcblxuICBsZXQgY29udGVudDtcblxuICBpZiAoaXNFbXB0eSkge1xuICAgIGNvbnN0IGluZGljYXRpb24gPSBfLmlzRnVuY3Rpb24obm9EYXRhSW5kaWNhdGlvbikgPyBub0RhdGFJbmRpY2F0aW9uKCkgOiBub0RhdGFJbmRpY2F0aW9uO1xuICAgIGlmICghaW5kaWNhdGlvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnRlbnQgPSA8Um93U2VjdGlvbiBjb250ZW50PXsgaW5kaWNhdGlvbiB9IGNvbFNwYW49eyB2aXNpYmxlQ29sdW1uU2l6ZSB9IC8+O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vbkVkaXRhYmxlUm93cyA9IGNlbGxFZGl0Lm5vbkVkaXRhYmxlUm93cyB8fCBbXTtcbiAgICBjb250ZW50ID0gZGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgY29uc3QgZWRpdGFibGUgPSAhKG5vbkVkaXRhYmxlUm93cy5sZW5ndGggPiAwICYmIG5vbkVkaXRhYmxlUm93cy5pbmRleE9mKGtleSkgPiAtMSk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0Um93Lm1vZGUgIT09IENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRURcbiAgICAgICAgPyBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KVxuICAgICAgICA6IG51bGw7XG5cbiAgICAgIGNvbnN0IGF0dHJzID0gcm93RXZlbnRzIHx8IHt9O1xuICAgICAgbGV0IHN0eWxlID0gXy5pc0Z1bmN0aW9uKHJvd1N0eWxlKSA/IHJvd1N0eWxlKHJvdywgaW5kZXgpIDogcm93U3R5bGU7XG4gICAgICBsZXQgY2xhc3NlcyA9IChfLmlzRnVuY3Rpb24ocm93Q2xhc3NlcykgPyByb3dDbGFzc2VzKHJvdywgaW5kZXgpIDogcm93Q2xhc3Nlcyk7XG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRTdHlsZSA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cuc3R5bGUpXG4gICAgICAgICAgPyBzZWxlY3RSb3cuc3R5bGUocm93LCBpbmRleClcbiAgICAgICAgICA6IHNlbGVjdFJvdy5zdHlsZTtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZENsYXNzZXMgPSBfLmlzRnVuY3Rpb24oc2VsZWN0Um93LmNsYXNzZXMpXG4gICAgICAgICAgPyBzZWxlY3RSb3cuY2xhc3Nlcyhyb3csIGluZGV4KVxuICAgICAgICAgIDogc2VsZWN0Um93LmNsYXNzZXM7XG5cbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgLi4uc2VsZWN0ZWRTdHlsZVxuICAgICAgICB9O1xuICAgICAgICBjbGFzc2VzID0gY3MoY2xhc3Nlcywgc2VsZWN0ZWRDbGFzc2VzKTtcblxuICAgICAgICBpZiAoYmdDb2xvcikge1xuICAgICAgICAgIHN0eWxlID0gc3R5bGUgfHwge307XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXy5pc0Z1bmN0aW9uKGJnQ29sb3IpID8gYmdDb2xvcihyb3csIGluZGV4KSA6IGJnQ29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VsZWN0YWJsZSA9ICFub25TZWxlY3RhYmxlIHx8ICFub25TZWxlY3RhYmxlLmluY2x1ZGVzKGtleSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAga2V5PXsgYGNzcy10cmFuc2l0aW9uLSR7a2V5fWAgfVxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJ0clwiXG4gICAgICAgICAgdGltZW91dD17IDUwMCB9XG4gICAgICAgID5cbiAgICAgICAgICA8Um93XG4gICAgICAgICAgICBrZXk9eyBrZXkgfVxuICAgICAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgICAgIGtleUZpZWxkPXsga2V5RmllbGQgfVxuICAgICAgICAgICAgcm93SW5kZXg9eyBpbmRleCB9XG4gICAgICAgICAgICBjb2x1bW5zPXsgY29sdW1ucyB9XG4gICAgICAgICAgICBjZWxsRWRpdD17IGNlbGxFZGl0IH1cbiAgICAgICAgICAgIGVkaXRhYmxlPXsgZWRpdGFibGUgfVxuICAgICAgICAgICAgc2VsZWN0YWJsZT17IHNlbGVjdGFibGUgfVxuICAgICAgICAgICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgICBzZWxlY3RSb3c9eyBzZWxlY3RSb3cgfVxuICAgICAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyBjbGFzc2VzIH1cbiAgICAgICAgICAgIGF0dHJzPXsgYXR0cnMgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2l0aW9uR3JvdXBcbiAgICAgIGNvbXBvbmVudD1cInRib2R5XCJcbiAgICA+XG4gICAgICB7IGNvbnRlbnQgfVxuICAgIDwvVHJhbnNpdGlvbkdyb3VwPlxuICApO1xufTtcblxuQm9keS5wcm9wVHlwZXMgPSB7XG4gIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMub2JqZWN0LFxuICBzZWxlY3RlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfQ1NTVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vQ1NTVHJhbnNpdGlvbicpO1xuXG52YXIgX0NTU1RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ1NTVHJhbnNpdGlvbik7XG5cbnZhciBfUmVwbGFjZVRyYW5zaXRpb24gPSByZXF1aXJlKCcuL1JlcGxhY2VUcmFuc2l0aW9uJyk7XG5cbnZhciBfUmVwbGFjZVRyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVwbGFjZVRyYW5zaXRpb24pO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cCA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbkdyb3VwJyk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb25Hcm91cCk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xuXG52YXIgX1RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBUcmFuc2l0aW9uOiBfVHJhbnNpdGlvbjIuZGVmYXVsdCxcbiAgVHJhbnNpdGlvbkdyb3VwOiBfVHJhbnNpdGlvbkdyb3VwMi5kZWZhdWx0LFxuICBSZXBsYWNlVHJhbnNpdGlvbjogX1JlcGxhY2VUcmFuc2l0aW9uMi5kZWZhdWx0LFxuICBDU1NUcmFuc2l0aW9uOiBfQ1NTVHJhbnNpdGlvbjIuZGVmYXVsdFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcHJvcFR5cGVzKTtcblxudmFyIF9hZGRDbGFzcyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzJyk7XG5cbnZhciBfYWRkQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkQ2xhc3MpO1xuXG52YXIgX3JlbW92ZUNsYXNzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MnKTtcblxudmFyIF9yZW1vdmVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW1vdmVDbGFzcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9UcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uJyk7XG5cbnZhciBfVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFuc2l0aW9uKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAoMCwgX2FkZENsYXNzMi5kZWZhdWx0KShub2RlLCBjKTtcbiAgfSk7XG59O1xudmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICgwLCBfcmVtb3ZlQ2xhc3MyLmRlZmF1bHQpKG5vZGUsIGMpO1xuICB9KTtcbn07XG5cbnZhciBwcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgX1RyYW5zaXRpb24yLmRlZmF1bHQucHJvcFR5cGVzLCB7XG5cbiAgLyoqXG4gICAqIFRoZSBhbmltYXRpb24gY2xhc3NOYW1lcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgYXMgaXQgZW50ZXJzLCBleGl0cyBvciBoYXMgZmluaXNoZWQgdGhlIHRyYW5zaXRpb24uXG4gICAqIEEgc2luZ2xlIG5hbWUgY2FuIGJlIHByb3ZpZGVkIGFuZCBpdCB3aWxsIGJlIHN1ZmZpeGVkIGZvciBlYWNoIHN0YWdlOiBlLmcuXG4gICAqXG4gICAqIGBjbGFzc05hbWVzPVwiZmFkZVwiYCBhcHBsaWVzIGBmYWRlLWVudGVyYCwgYGZhZGUtZW50ZXItYWN0aXZlYCwgYGZhZGUtZW50ZXItZG9uZWAsXG4gICAqIGBmYWRlLWV4aXRgLCBgZmFkZS1leGl0LWFjdGl2ZWAsIGBmYWRlLWV4aXQtZG9uZWAsIGBmYWRlLWFwcGVhcmAsIGFuZCBgZmFkZS1hcHBlYXItYWN0aXZlYC5cbiAgICogRWFjaCBpbmRpdmlkdWFsIGNsYXNzTmFtZXMgY2FuIGFsc28gYmUgc3BlY2lmaWVkIGluZGVwZW5kZW50bHkgbGlrZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17e1xuICAgKiAgYXBwZWFyOiAnbXktYXBwZWFyJyxcbiAgICogIGFwcGVhckFjdGl2ZTogJ215LWFjdGl2ZS1hcHBlYXInLFxuICAgKiAgZW50ZXI6ICdteS1lbnRlcicsXG4gICAqICBlbnRlckFjdGl2ZTogJ215LWFjdGl2ZS1lbnRlcicsXG4gICAqICBlbnRlckRvbmU6ICdteS1kb25lLWVudGVyJyxcbiAgICogIGV4aXQ6ICdteS1leGl0JyxcbiAgICogIGV4aXRBY3RpdmU6ICdteS1hY3RpdmUtZXhpdCcsXG4gICAqICBleGl0RG9uZTogJ215LWRvbmUtZXhpdCcsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwge1xuICAgKiAgYXBwZWFyPzogc3RyaW5nLFxuICAgKiAgYXBwZWFyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZW50ZXI/OiBzdHJpbmcsXG4gICAqICBlbnRlckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGVudGVyRG9uZT86IHN0cmluZyxcbiAgICogIGV4aXQ/OiBzdHJpbmcsXG4gICAqICBleGl0QWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZXhpdERvbmU/OiBzdHJpbmcsXG4gICAqIH19XG4gICAqL1xuICBjbGFzc05hbWVzOiBfUHJvcFR5cGVzLmNsYXNzTmFtZXNTaGFwZSxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvciAnYXBwZWFyJyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyLWFjdGl2ZScgb3JcbiAgICogJ2FwcGVhci1hY3RpdmUnIGNsYXNzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yXG4gICAqICdhcHBlYXInIGNsYXNzZXMgYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQtYWN0aXZlJyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzZXNcbiAgICogYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGV4aXQtZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuY1xufSk7XG5cbi8qKlxuICogQSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IHVzaW5nIENTUyB0cmFuc2l0aW9ucyBhbmQgYW5pbWF0aW9ucy5cbiAqIEl0J3MgaW5zcGlyZWQgYnkgdGhlIGV4Y2VsbGVudCBbbmctYW5pbWF0ZV0oaHR0cDovL3d3dy5uZ2FuaW1hdGUub3JnLykgbGlicmFyeS5cbiAqXG4gKiBgQ1NTVHJhbnNpdGlvbmAgYXBwbGllcyBhIHBhaXIgb2YgY2xhc3MgbmFtZXMgZHVyaW5nIHRoZSBgYXBwZWFyYCwgYGVudGVyYCxcbiAqIGFuZCBgZXhpdGAgc3RhZ2VzIG9mIHRoZSB0cmFuc2l0aW9uLiBUaGUgZmlyc3QgY2xhc3MgaXMgYXBwbGllZCBhbmQgdGhlbiBhXG4gKiBzZWNvbmQgXCJhY3RpdmVcIiBjbGFzcyBpbiBvcmRlciB0byBhY3RpdmF0ZSB0aGUgY3NzIGFuaW1hdGlvbi4gQWZ0ZXIgdGhlIGFuaW1hdGlvbixcbiAqIG1hdGNoaW5nIGBkb25lYCBjbGFzcyBuYW1lcyBhcmUgYXBwbGllZCB0byBwZXJzaXN0IHRoZSBhbmltYXRpb24gc3RhdGUuXG4gKlxuICogV2hlbiB0aGUgYGluYCBwcm9wIGlzIHRvZ2dsZWQgdG8gYHRydWVgIHRoZSBDb21wb25lbnQgd2lsbCBnZXRcbiAqIHRoZSBgZXhhbXBsZS1lbnRlcmAgQ1NTIGNsYXNzIGFuZCB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYCBDU1MgY2xhc3NcbiAqIGFkZGVkIGluIHRoZSBuZXh0IHRpY2suIFRoaXMgaXMgYSBjb252ZW50aW9uIGJhc2VkIG9uIHRoZSBgY2xhc3NOYW1lc2AgcHJvcC5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL203N2wydnAwMHg/Zm9udHNpemU9MTRcIiBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiIHNhbmRib3g9XCJhbGxvdy1tb2RhbHMgYWxsb3ctZm9ybXMgYWxsb3ctcG9wdXBzIGFsbG93LXNjcmlwdHMgYWxsb3ctc2FtZS1vcmlnaW5cIj48L2lmcmFtZT5cbiAqL1xuXG52YXIgQ1NTVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDU1NUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTVHJhbnNpdGlvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMub25FbnRlciA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcyhhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMuY2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uRW50ZXJpbmcgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczIgPSBfdGhpcy5nZXRDbGFzc05hbWVzKGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyksXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczIuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyaW5nKG5vZGUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uRW50ZXJlZCA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMyA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2VudGVyJyksXG4gICAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMzLmRvbmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKTtcbiAgICAgIGFkZENsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJlZChub2RlKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vbkV4aXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM0ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM0LmNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnYXBwZWFyJyk7XG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdlbnRlcicpO1xuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25FeGl0aW5nID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNSA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNS5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uRXhpdGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNiA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcbiAgICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczYuZG9uZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuICAgICAgYWRkQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5nZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gX3RoaXMucHJvcHMuY2xhc3NOYW1lcztcblxuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZXMgIT09ICdzdHJpbmcnID8gY2xhc3NOYW1lc1t0eXBlXSA6IGNsYXNzTmFtZXMgKyAnLScgKyB0eXBlO1xuXG4gICAgICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZXMgIT09ICdzdHJpbmcnID8gY2xhc3NOYW1lc1t0eXBlICsgJ0FjdGl2ZSddIDogY2xhc3NOYW1lICsgJy1hY3RpdmUnO1xuXG4gICAgICB2YXIgZG9uZUNsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWVzICE9PSAnc3RyaW5nJyA/IGNsYXNzTmFtZXNbdHlwZSArICdEb25lJ10gOiBjbGFzc05hbWUgKyAnLWRvbmUnO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lOiBhY3RpdmVDbGFzc05hbWUsXG4gICAgICAgIGRvbmVDbGFzc05hbWU6IGRvbmVDbGFzc05hbWVcbiAgICAgIH07XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBDU1NUcmFuc2l0aW9uLnByb3RvdHlwZS5yZW1vdmVDbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Nlcyhub2RlLCB0eXBlKSB7XG4gICAgdmFyIF9nZXRDbGFzc05hbWVzID0gdGhpcy5nZXRDbGFzc05hbWVzKHR5cGUpLFxuICAgICAgICBjbGFzc05hbWUgPSBfZ2V0Q2xhc3NOYW1lcy5jbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9nZXRDbGFzc05hbWVzLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF9nZXRDbGFzc05hbWVzLmRvbmVDbGFzc05hbWU7XG5cbiAgICBjbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgICBhY3RpdmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcbiAgICBkb25lQ2xhc3NOYW1lICYmIHJlbW92ZUNsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuICB9O1xuXG4gIENTU1RyYW5zaXRpb24ucHJvdG90eXBlLnJlZmxvd0FuZEFkZENsYXNzID0gZnVuY3Rpb24gcmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBmb3IgdG8gZm9yY2UgYSByZXBhaW50LFxuICAgIC8vIHdoaWNoIGlzIG5lY2Vzc2FyeSBpbiBvcmRlciB0byB0cmFuc2l0aW9uIHN0eWxlcyB3aGVuIGFkZGluZyBhIGNsYXNzIG5hbWUuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgbm9kZSAmJiBub2RlLnNjcm9sbFRvcDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWVzO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uMi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIG9uRW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBDU1NUcmFuc2l0aW9uO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuQ1NTVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ1NTVHJhbnNpdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2xhc3M7XG5cbnZhciBfaGFzQ2xhc3MgPSByZXF1aXJlKCcuL2hhc0NsYXNzJyk7XG5cbnZhciBfaGFzQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzQ2xhc3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtlbHNlIGlmICghKDAsIF9oYXNDbGFzczIuZGVmYXVsdCkoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyAnICcgKyBjbGFzc05hbWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoYXNDbGFzcztcbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHJldHVybiAhIWNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO2Vsc2UgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvaGFzQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGNsYXNzVG9SZW1vdmUgKyAnKD86XFxcXHN8JCknLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO2Vsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cCA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbkdyb3VwJyk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb25Hcm91cCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBpbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihwcm9wcywgcHJvcE5hbWUpIHtcbiAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KHByb3BzW3Byb3BOYW1lXSkgIT09IDIpIHJldHVybiBuZXcgRXJyb3IoJ1wiJyArIHByb3BOYW1lICsgJ1wiIG11c3QgYmUgZXhhY3RseSB0d28gdHJhbnNpdGlvbiBjb21wb25lbnRzLicpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogVGhlIGA8UmVwbGFjZVRyYW5zaXRpb24+YCBjb21wb25lbnQgaXMgYSBzcGVjaWFsaXplZCBgVHJhbnNpdGlvbmAgY29tcG9uZW50XG4gKiB0aGF0IGFuaW1hdGVzIGJldHdlZW4gdHdvIGNoaWxkcmVuLlxuICpcbiAqIGBgYGpzeFxuICogPFJlcGxhY2VUcmFuc2l0aW9uIGluPlxuICogICA8RmFkZT48ZGl2PkkgYXBwZWFyIGZpcnN0PC9kaXY+PC9GYWRlPlxuICogICA8RmFkZT48ZGl2PkkgcmVwbGFjZSB0aGUgYWJvdmU8L2Rpdj48L0ZhZGU+XG4gKiA8L1JlcGxhY2VUcmFuc2l0aW9uPlxuICogYGBgXG4gKi9cblxudmFyIFJlcGxhY2VUcmFuc2l0aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJlcGxhY2VUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXBsYWNlVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlcGxhY2VUcmFuc2l0aW9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIFJlcGxhY2VUcmFuc2l0aW9uLnByb3RvdHlwZS5oYW5kbGVMaWZlY3ljbGUgPSBmdW5jdGlvbiBoYW5kbGVMaWZlY3ljbGUoaGFuZGxlciwgaWR4LCBvcmlnaW5hbEFyZ3MpIHtcbiAgICB2YXIgX2NoaWxkJHByb3BzO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVtpZHhdO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzW2hhbmRsZXJdKSAoX2NoaWxkJHByb3BzID0gY2hpbGQucHJvcHMpW2hhbmRsZXJdLmFwcGx5KF9jaGlsZCRwcm9wcywgb3JpZ2luYWxBcmdzKTtcbiAgICBpZiAodGhpcy5wcm9wc1toYW5kbGVyXSkgdGhpcy5wcm9wc1toYW5kbGVyXSgoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKSk7XG4gIH07XG5cbiAgUmVwbGFjZVRyYW5zaXRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGluUHJvcCA9IF9wcm9wcy5pbixcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ2luJ10pO1xuXG4gICAgdmFyIF9SZWFjdCRDaGlsZHJlbiR0b0FyciA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKSxcbiAgICAgICAgZmlyc3QgPSBfUmVhY3QkQ2hpbGRyZW4kdG9BcnJbMF0sXG4gICAgICAgIHNlY29uZCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclsxXTtcblxuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyaW5nO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyZWQ7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0aW5nO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRlZDtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIF9UcmFuc2l0aW9uR3JvdXAyLmRlZmF1bHQsXG4gICAgICBwcm9wcyxcbiAgICAgIGluUHJvcCA/IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoZmlyc3QsIHtcbiAgICAgICAga2V5OiAnZmlyc3QnLFxuICAgICAgICBvbkVudGVyOiB0aGlzLmhhbmRsZUVudGVyLFxuICAgICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUVudGVyaW5nLFxuICAgICAgICBvbkVudGVyZWQ6IHRoaXMuaGFuZGxlRW50ZXJlZFxuXG4gICAgICB9KSA6IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoc2Vjb25kLCB7XG4gICAgICAgIGtleTogJ3NlY29uZCcsXG4gICAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRXhpdCxcbiAgICAgICAgb25FbnRlcmluZzogdGhpcy5oYW5kbGVFeGl0aW5nLFxuICAgICAgICBvbkVudGVyZWQ6IHRoaXMuaGFuZGxlRXhpdGVkXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFJlcGxhY2VUcmFuc2l0aW9uO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB0aGlzLmhhbmRsZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzMi5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXInLCAwLCBhcmdzKTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzMi5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXJpbmcnLCAwLCBhcmdzKTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZUVudGVyZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmVkJywgMCwgYXJncyk7XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVFeGl0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICBhcmdzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzMi5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdCcsIDEsIGFyZ3MpO1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlRXhpdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgICAgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpczIuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRpbmcnLCAxLCBhcmdzKTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNyksIF9rZXk3ID0gMDsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpczIuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRlZCcsIDEsIGFyZ3MpO1xuICB9O1xufTtcblxuUmVwbGFjZVRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gcHJvcFR5cGVzIDoge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlcGxhY2VUcmFuc2l0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9SZXBsYWNlVHJhbnNpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZztcbmV4cG9ydHMubWVyZ2VDaGlsZE1hcHBpbmdzID0gbWVyZ2VDaGlsZE1hcHBpbmdzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBHaXZlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmAsIHJldHVybiBhbiBvYmplY3QgbWFwcGluZyBrZXkgdG8gY2hpbGQuXG4gKlxuICogQHBhcmFtIHsqfSBjaGlsZHJlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmBcbiAqIEByZXR1cm4ge29iamVjdH0gTWFwcGluZyBvZiBrZXkgdG8gY2hpbGRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRNYXBwaW5nKGNoaWxkcmVuLCBtYXBGbikge1xuICB2YXIgbWFwcGVyID0gZnVuY3Rpb24gbWFwcGVyKGNoaWxkKSB7XG4gICAgcmV0dXJuIG1hcEZuICYmICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSA/IG1hcEZuKGNoaWxkKSA6IGNoaWxkO1xuICB9O1xuXG4gIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoY2hpbGRyZW4pIF9yZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gcnVuIHRoZSBtYXAgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkIHNvIHRoYXQgdGhlIGtleSBpcyB0aGUgY29tcHV0ZWQgb25lXG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBtYXBwZXIoY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBXaGVuIHlvdSdyZSBhZGRpbmcgb3IgcmVtb3ZpbmcgY2hpbGRyZW4gc29tZSBtYXkgYmUgYWRkZWQgb3IgcmVtb3ZlZCBpbiB0aGVcbiAqIHNhbWUgcmVuZGVyIHBhc3MuIFdlIHdhbnQgdG8gc2hvdyAqYm90aCogc2luY2Ugd2Ugd2FudCB0byBzaW11bHRhbmVvdXNseVxuICogYW5pbWF0ZSBlbGVtZW50cyBpbiBhbmQgb3V0LiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgcHJldmlvdXMgc2V0IG9mIGtleXNcbiAqIGFuZCBhIG5ldyBzZXQgb2Yga2V5cyBhbmQgbWVyZ2VzIHRoZW0gd2l0aCBpdHMgYmVzdCBndWVzcyBvZiB0aGUgY29ycmVjdFxuICogb3JkZXJpbmcuIEluIHRoZSBmdXR1cmUgd2UgbWF5IGV4cG9zZSBzb21lIG9mIHRoZSB1dGlsaXRpZXMgaW5cbiAqIFJlYWN0TXVsdGlDaGlsZCB0byBtYWtlIHRoaXMgZWFzeSwgYnV0IGZvciBub3cgUmVhY3QgaXRzZWxmIGRvZXMgbm90XG4gKiBkaXJlY3RseSBoYXZlIHRoaXMgY29uY2VwdCBvZiB0aGUgdW5pb24gb2YgcHJldkNoaWxkcmVuIGFuZCBuZXh0Q2hpbGRyZW5cbiAqIHNvIHdlIGltcGxlbWVudCBpdCBoZXJlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2IHByZXYgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcGFyYW0ge29iamVjdH0gbmV4dCBuZXh0IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHJldHVybiB7b2JqZWN0fSBhIGtleSBzZXQgdGhhdCBjb250YWlucyBhbGwga2V5cyBpbiBgcHJldmAgYW5kIGFsbCBrZXlzXG4gKiBpbiBgbmV4dGAgaW4gYSByZWFzb25hYmxlIG9yZGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZUNoaWxkTWFwcGluZ3MocHJldiwgbmV4dCkge1xuICBwcmV2ID0gcHJldiB8fCB7fTtcbiAgbmV4dCA9IG5leHQgfHwge307XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWVGb3JLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSBpbiBuZXh0ID8gbmV4dFtrZXldIDogcHJldltrZXldO1xuICB9XG5cbiAgLy8gRm9yIGVhY2gga2V5IG9mIGBuZXh0YCwgdGhlIGxpc3Qgb2Yga2V5cyB0byBpbnNlcnQgYmVmb3JlIHRoYXQga2V5IGluXG4gIC8vIHRoZSBjb21iaW5lZCBsaXN0XG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIHZhciBwZW5kaW5nS2V5cyA9IFtdO1xuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAocHJldktleSBpbiBuZXh0KSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpID0gdm9pZCAwO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0pIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hpbGRNYXBwaW5nW25leHRLZXldID0gZ2V0VmFsdWVGb3JLZXkobmV4dEtleSk7XG4gIH1cblxuICAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9DaGlsZE1hcHBpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBDZWxsIGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgU2VsZWN0aW9uQ2VsbCBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwnO1xuaW1wb3J0IGV2ZW50RGVsZWdhdGVyIGZyb20gJy4vcm93LWV2ZW50LWRlbGVnYXRlcic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmNsYXNzIFJvdyBleHRlbmRzIGV2ZW50RGVsZWdhdGVyKENvbXBvbmVudCkge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93LFxuICAgICAgY29sdW1ucyxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGF0dHJzLFxuICAgICAgY2VsbEVkaXQsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHNlbGVjdFJvdyxcbiAgICAgIHNlbGVjdGFibGUsXG4gICAgICBlZGl0YWJsZTogZWRpdGFibGVSb3dcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtcbiAgICAgIG1vZGUsXG4gICAgICBvblN0YXJ0LFxuICAgICAgRWRpdGluZ0NlbGwsXG4gICAgICByaWR4OiBlZGl0aW5nUm93SWR4LFxuICAgICAgY2lkeDogZWRpdGluZ0NvbElkeCxcbiAgICAgIENMSUNLX1RPX0NFTExfRURJVCxcbiAgICAgIERCQ0xJQ0tfVE9fQ0VMTF9FRElULFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBjZWxsRWRpdDtcblxuICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgIGNvbnN0IHsgaGlkZVNlbGVjdENvbHVtbiB9ID0gc2VsZWN0Um93O1xuICAgIGNvbnN0IHRyQXR0cnMgPSB0aGlzLmRlbGVnYXRlKGF0dHJzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dHIgc3R5bGU9eyBzdHlsZSB9IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHsgLi4udHJBdHRycyB9PlxuICAgICAgICB7XG4gICAgICAgICAgKHNlbGVjdFJvdy5tb2RlICE9PSBDb25zdC5ST1dfU0VMRUNUX0RJU0FCTEVEICYmICFoaWRlU2VsZWN0Q29sdW1uKVxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxTZWxlY3Rpb25DZWxsXG4gICAgICAgICAgICAgICAgeyAuLi5zZWxlY3RSb3cgfVxuICAgICAgICAgICAgICAgIHJvd0tleT17IGtleSB9XG4gICAgICAgICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyAhc2VsZWN0YWJsZSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgY29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghY29sdW1uLmhpZGRlbikge1xuICAgICAgICAgICAgICBjb25zdCB7IGRhdGFGaWVsZCB9ID0gY29sdW1uO1xuICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gXy5nZXQocm93LCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgICBsZXQgZWRpdGFibGUgPSBfLmlzRGVmaW5lZChjb2x1bW4uZWRpdGFibGUpID8gY29sdW1uLmVkaXRhYmxlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgaWYgKGRhdGFGaWVsZCA9PT0ga2V5RmllbGQgfHwgIWVkaXRhYmxlUm93KSBlZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi5lZGl0YWJsZSkpIHtcbiAgICAgICAgICAgICAgICBlZGl0YWJsZSA9IGNvbHVtbi5lZGl0YWJsZShjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSBlZGl0aW5nUm93SWR4ICYmIGluZGV4ID09PSBlZGl0aW5nQ29sSWR4KSB7XG4gICAgICAgICAgICAgICAgbGV0IGVkaXRDZWxsc3R5bGUgPSBjb2x1bW4uZWRpdENlbGxTdHlsZSB8fCB7fTtcbiAgICAgICAgICAgICAgICBsZXQgZWRpdENlbGxjbGFzc2VzID0gY29sdW1uLmVkaXRDZWxsQ2xhc3NlcztcbiAgICAgICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi5lZGl0Q2VsbFN0eWxlKSkge1xuICAgICAgICAgICAgICAgICAgZWRpdENlbGxzdHlsZSA9IGNvbHVtbi5lZGl0Q2VsbFN0eWxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjb2x1bW4uZWRpdENlbGxDbGFzc2VzKSkge1xuICAgICAgICAgICAgICAgICAgZWRpdENlbGxjbGFzc2VzID0gY29sdW1uLmVkaXRDZWxsQ2xhc3Nlcyhjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8RWRpdGluZ0NlbGxcbiAgICAgICAgICAgICAgICAgICAga2V5PXsgYCR7Y29udGVudH0tJHtpbmRleH1gIH1cbiAgICAgICAgICAgICAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgICAgICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4PXsgaW5kZXggfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBlZGl0Q2VsbGNsYXNzZXMgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGVkaXRDZWxsc3R5bGUgfVxuICAgICAgICAgICAgICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENlbGxcbiAgICAgICAgICAgICAgICAgIGtleT17IGAke2NvbnRlbnR9LSR7aW5kZXh9YCB9XG4gICAgICAgICAgICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICAgICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleD17IGluZGV4IH1cbiAgICAgICAgICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgICAgICAgICBvblN0YXJ0PXsgb25TdGFydCB9XG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZT17IGVkaXRhYmxlIH1cbiAgICAgICAgICAgICAgICAgIGNsaWNrVG9FZGl0PXsgbW9kZSA9PT0gQ0xJQ0tfVE9fQ0VMTF9FRElUIH1cbiAgICAgICAgICAgICAgICAgIGRiY2xpY2tUb0VkaXQ9eyBtb2RlID09PSBEQkNMSUNLX1RPX0NFTExfRURJVCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbn1cblxuUm93LnByb3BUeXBlcyA9IHtcbiAgcm93OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdHRyczogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuUm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgZWRpdGFibGU6IHRydWUsXG4gIHN0eWxlOiB7fSxcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBhdHRyczoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIENlbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUVkaXRpbmdDZWxsID0gdGhpcy5oYW5kbGVFZGl0aW5nQ2VsbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlRWRpdGluZ0NlbGwoZSkge1xuICAgIGNvbnN0IHsgY29sdW1uLCBvblN0YXJ0LCByb3dJbmRleCwgY29sdW1uSW5kZXgsIGNsaWNrVG9FZGl0LCBkYmNsaWNrVG9FZGl0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZXZlbnRzIH0gPSBjb2x1bW47XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgaWYgKGNsaWNrVG9FZGl0KSB7XG4gICAgICAgIGNvbnN0IGN1c3RvbUNsaWNrID0gZXZlbnRzLm9uQ2xpY2s7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oY3VzdG9tQ2xpY2spKSBjdXN0b21DbGljayhlKTtcbiAgICAgIH0gZWxzZSBpZiAoZGJjbGlja1RvRWRpdCkge1xuICAgICAgICBjb25zdCBjdXN0b21EYkNsaWNrID0gZXZlbnRzLm9uRG91YmxlQ2xpY2s7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24oY3VzdG9tRGJDbGljaykpIGN1c3RvbURiQ2xpY2soZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvblN0YXJ0KSB7XG4gICAgICBvblN0YXJ0KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvdyxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgY29sdW1uLFxuICAgICAgY29sdW1uSW5kZXgsXG4gICAgICBlZGl0YWJsZSxcbiAgICAgIGNsaWNrVG9FZGl0LFxuICAgICAgZGJjbGlja1RvRWRpdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGFGaWVsZCxcbiAgICAgIGZvcm1hdHRlcixcbiAgICAgIGZvcm1hdEV4dHJhRGF0YSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIHRpdGxlLFxuICAgICAgZXZlbnRzLFxuICAgICAgYWxpZ24sXG4gICAgICBhdHRyc1xuICAgIH0gPSBjb2x1bW47XG4gICAgbGV0IGNlbGxUaXRsZTtcbiAgICBsZXQgY2VsbFN0eWxlID0ge307XG4gICAgbGV0IGNvbnRlbnQgPSBfLmdldChyb3csIGRhdGFGaWVsZCk7XG5cbiAgICBjb25zdCBjZWxsQXR0cnMgPSB7XG4gICAgICAuLi5fLmlzRnVuY3Rpb24oYXR0cnMpID8gYXR0cnMoY29udGVudCwgcm93LCByb3dJbmRleCwgY29sdW1uSW5kZXgpIDogYXR0cnMsXG4gICAgICAuLi5ldmVudHNcbiAgICB9O1xuXG4gICAgY29uc3QgY2VsbENsYXNzZXMgPSBfLmlzRnVuY3Rpb24oY2xhc3NlcylcbiAgICAgID8gY2xhc3Nlcyhjb250ZW50LCByb3csIHJvd0luZGV4LCBjb2x1bW5JbmRleClcbiAgICAgIDogY2xhc3NlcztcblxuICAgIGlmIChzdHlsZSkge1xuICAgICAgY2VsbFN0eWxlID0gXy5pc0Z1bmN0aW9uKHN0eWxlKSA/IHN0eWxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGNvbHVtbkluZGV4KSA6IHN0eWxlO1xuICAgIH1cblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgY2VsbFRpdGxlID0gXy5pc0Z1bmN0aW9uKHRpdGxlKSA/IHRpdGxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGNvbHVtbkluZGV4KSA6IGNvbnRlbnQ7XG4gICAgICBjZWxsQXR0cnMudGl0bGUgPSBjZWxsVGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgY29udGVudCA9IGNvbHVtbi5mb3JtYXR0ZXIoY29udGVudCwgcm93LCByb3dJbmRleCwgZm9ybWF0RXh0cmFEYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoYWxpZ24pIHtcbiAgICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPVxuICAgICAgICBfLmlzRnVuY3Rpb24oYWxpZ24pID8gYWxpZ24oY29udGVudCwgcm93LCByb3dJbmRleCwgY29sdW1uSW5kZXgpIDogYWxpZ247XG4gICAgfVxuXG4gICAgaWYgKGNlbGxDbGFzc2VzKSBjZWxsQXR0cnMuY2xhc3NOYW1lID0gY2VsbENsYXNzZXM7XG5cbiAgICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG4gICAgaWYgKGNsaWNrVG9FZGl0ICYmIGVkaXRhYmxlKSB7XG4gICAgICBjZWxsQXR0cnMub25DbGljayA9IHRoaXMuaGFuZGxlRWRpdGluZ0NlbGw7XG4gICAgfSBlbHNlIGlmIChkYmNsaWNrVG9FZGl0ICYmIGVkaXRhYmxlKSB7XG4gICAgICBjZWxsQXR0cnMub25Eb3VibGVDbGljayA9IHRoaXMuaGFuZGxlRWRpdGluZ0NlbGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8dGQgeyAuLi5jZWxsQXR0cnMgfT57IGNvbnRlbnQgfTwvdGQ+XG4gICAgKTtcbiAgfVxufVxuXG5DZWxsLnByb3BUeXBlcyA9IHtcbiAgcm93OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb2x1bW5JbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDZWxsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2VsbC5qcyIsIi8qIGVzbGludFxuICByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDBcbiAganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC1pbnRlcmFjdGlvbnM6IDBcbiovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbkNlbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1vZGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByb3dLZXk6IFByb3BUeXBlcy5hbnksXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uUm93U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2xpY2tUb1NlbGVjdDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIG5leHRQcm9wcy5zZWxlY3RlZCAhPT0gc2VsZWN0ZWQ7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgY29uc3Qge1xuICAgICAgbW9kZTogaW5wdXRUeXBlLFxuICAgICAgcm93S2V5LFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBvblJvd1NlbGVjdCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBjbGlja1RvU2VsZWN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICBpZiAoY2xpY2tUb1NlbGVjdCkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2hlY2tlZCA9IGlucHV0VHlwZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEVcbiAgICAgID8gdHJ1ZVxuICAgICAgOiAhc2VsZWN0ZWQ7XG5cbiAgICBvblJvd1NlbGVjdChyb3dLZXksIGNoZWNrZWQsIHJvd0luZGV4LCBlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtb2RlOiBpbnB1dFR5cGUsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGRpc2FibGVkXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRkIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9eyBpbnB1dFR5cGUgfVxuICAgICAgICAgIGNoZWNrZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgIC8+XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwuanMiLCJpbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZXZlbnRzID0gW1xuICAnb25DbGljaycsXG4gICdvbkRvdWJsZUNsaWNrJyxcbiAgJ29uTW91c2VFbnRlcicsXG4gICdvbk1vdXNlTGVhdmUnXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRCYXNlID0+XG4gIGNsYXNzIFJvd0V2ZW50RGVsZWdhdGVyIGV4dGVuZHMgRXh0ZW5kQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xuICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyID0gdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyID0gdGhpcy5jcmVhdGVDbGlja0V2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoY2IpIHtcbiAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IHJvdywgcm93SW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNiKGUsIHJvdywgcm93SW5kZXgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGlja0V2ZW50SGFuZGxlcihjYikge1xuICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICByb3csXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAga2V5RmllbGQsXG4gICAgICAgICAgc2VsZWN0YWJsZSxcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBzZWxlY3RSb3c6IHtcbiAgICAgICAgICAgIG9uUm93U2VsZWN0LFxuICAgICAgICAgICAgY2xpY2tUb0VkaXRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNlbGxFZGl0OiB7XG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgREJDTElDS19UT19DRUxMX0VESVQsXG4gICAgICAgICAgICBERUxBWV9GT1JfREJDTElDS1xuICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgY2xpY2tGbiA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiKGUsIHJvdywgcm93SW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gXy5nZXQocm93LCBrZXlGaWVsZCk7XG4gICAgICAgICAgICBvblJvd1NlbGVjdChrZXksICFzZWxlY3RlZCwgcm93SW5kZXgsIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobW9kZSA9PT0gREJDTElDS19UT19DRUxMX0VESVQgJiYgY2xpY2tUb0VkaXQpIHtcbiAgICAgICAgICB0aGlzLmNsaWNrTnVtICs9IDE7XG4gICAgICAgICAgXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGlja051bSA9PT0gMSkge1xuICAgICAgICAgICAgICBjbGlja0ZuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgICAgICAgICB9LCBERUxBWV9GT1JfREJDTElDSykoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGlja0ZuKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVsZWdhdGUoYXR0cnMgPSB7fSkge1xuICAgICAgY29uc3QgbmV3QXR0cnMgPSB7fTtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0KSB7XG4gICAgICAgIG5ld0F0dHJzLm9uQ2xpY2sgPSB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyKGF0dHJzLm9uQ2xpY2spO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgaWYgKCFuZXdBdHRyc1thdHRyXSkge1xuICAgICAgICAgIGlmIChldmVudHMuaW5jbHVkZXMoYXR0cikpIHtcbiAgICAgICAgICAgIG5ld0F0dHJzW2F0dHJdID0gdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyKGF0dHJzW2F0dHJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3QXR0cnNbYXR0cl0gPSBhdHRyc1thdHRyXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld0F0dHJzO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1ldmVudC1kZWxlZ2F0ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUm93U2VjdGlvbiA9ICh7IGNvbnRlbnQsIGNvbFNwYW4gfSkgPT4gKFxuICA8dHI+XG4gICAgPHRkXG4gICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgIGNvbFNwYW49eyBjb2xTcGFuIH1cbiAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWJzLXRhYmxlLW5vLWRhdGFcIlxuICAgID5cbiAgICAgIHsgY29udGVudCB9XG4gICAgPC90ZD5cbiAgPC90cj5cbik7XG5cblJvd1NlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuYW55LFxuICBjb2xTcGFuOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5Sb3dTZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGVudDogbnVsbCxcbiAgY29sU3BhbjogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93U2VjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWN0aW9uLmpzIiwiaW1wb3J0IENvbHVtblJlc29sdmVyIGZyb20gJy4vY29sdW1uLXJlc29sdmVyJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgVGFibGVSZXNvbHZlciBleHRlbmRzIENvbHVtblJlc29sdmVyKEV4dGVuZEJhc2UpIHtcbiAgICB2YWxpZGF0ZVByb3BzKCkge1xuICAgICAgY29uc3QgeyBrZXlGaWVsZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICgha2V5RmllbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2Ugc3BlY2lmeSBhIGZpZWxkIGFzIGtleSB2aWEga2V5RmllbGQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnZpc2libGVDb2x1bW5TaXplKGZhbHNlKSA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdmlzaWJsZSBjb2x1bW5zIGRldGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNFbXB0eSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByb3BzIHJlc29sdmVyIGZvciBjZWxsIHNlbGVjdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gYWRkdGlvbmFsIG9wdGlvbnMgbGlrZSBjYWxsYmFjayB3aGljaCBhcmUgYWJvdXQgdG8gbWVyZ2UgaW50byBwcm9wc1xuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH0gcmVzdWx0IC0gcHJvcHMgZm9yIGNlbGwgc2VsZWN0aW9uc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHJlc3VsdC5tb2RlIC0gaW5wdXQgdHlwZSBvZiByb3cgc2VsZWN0aW9uIG9yIGRpc2FibGVkLlxuICAgICAqL1xuICAgIHJlc29sdmVTZWxlY3RSb3dQcm9wcyhvcHRpb25zKSB7XG4gICAgICBjb25zdCB7IHNlbGVjdFJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgUk9XX1NFTEVDVF9ESVNBQkxFRCB9ID0gQ29uc3Q7XG5cbiAgICAgIGlmIChfLmlzRGVmaW5lZChzZWxlY3RSb3cpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2VsZWN0Um93LFxuICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbW9kZTogUk9XX1NFTEVDVF9ESVNBQkxFRFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwcm9wcyByZXNvbHZlciBmb3IgaGVhZGVyIGNlbGwgc2VsZWN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBhZGR0aW9uYWwgb3B0aW9ucyBsaWtlIGNhbGxiYWNrIHdoaWNoIGFyZSBhYm91dCB0byBtZXJnZSBpbnRvIHByb3BzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZXN1bHQgLSBwcm9wcyBmb3IgY2VsbCBzZWxlY3Rpb25zXG4gICAgICogQHJldHVybnMge1N0cmluZ30gcmVzdWx0Lm1vZGUgLSBpbnB1dCB0eXBlIG9mIHJvdyBzZWxlY3Rpb24gb3IgZGlzYWJsZWQuXG4gICAgICogQHJldHVybnMge1N0cmluZ30gcmVzdWx0LmNoZWNrZWRTdGF0dXMgLSBjaGVja2JveCBzdGF0dXMgZGVwZW5kaW5nIG9uIHNlbGVjdGVkIHJvd3MgY291bnRzXG4gICAgICovXG4gICAgcmVzb2x2ZVNlbGVjdFJvd1Byb3BzRm9ySGVhZGVyKG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgeyBzZWxlY3RSb3cgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGFsbFJvd3NTZWxlY3RlZCwgc2VsZWN0ZWQgPSBbXSwgLi4ucmVzdCB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgUk9XX1NFTEVDVF9ESVNBQkxFRCwgQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQsXG4gICAgICAgIENIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFLCBDSEVDS0JPWF9TVEFUVVNfVU5DSEVDS0VEXG4gICAgICB9ID0gQ29uc3Q7XG5cbiAgICAgIGlmIChfLmlzRGVmaW5lZChzZWxlY3RSb3cpKSB7XG4gICAgICAgIGxldCBjaGVja2VkU3RhdHVzO1xuXG4gICAgICAgIC8vIGNoZWNrYm94IHN0YXR1cyBkZXBlbmRpbmcgb24gc2VsZWN0ZWQgcm93cyBjb3VudHNcbiAgICAgICAgaWYgKGFsbFJvd3NTZWxlY3RlZCkgY2hlY2tlZFN0YXR1cyA9IENIRUNLQk9YX1NUQVRVU19DSEVDS0VEO1xuICAgICAgICBlbHNlIGlmIChzZWxlY3RlZC5sZW5ndGggPT09IDApIGNoZWNrZWRTdGF0dXMgPSBDSEVDS0JPWF9TVEFUVVNfVU5DSEVDS0VEO1xuICAgICAgICBlbHNlIGNoZWNrZWRTdGF0dXMgPSBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnNlbGVjdFJvdyxcbiAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgIGNoZWNrZWRTdGF0dXNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbW9kZTogUk9XX1NFTEVDVF9ESVNBQkxFRFxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgQ29sdW1uUmVzb2x2ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICB2aXNpYmxlQ29sdW1uU2l6ZShpbmNsdWRlU2VsZWN0Q29sdW1uID0gdHJ1ZSkge1xuICAgICAgY29uc3QgY29sdW1uTGVuID0gdGhpcy5wcm9wcy5jb2x1bW5zLmZpbHRlcihjID0+ICFjLmhpZGRlbikubGVuZ3RoO1xuICAgICAgaWYgKCFpbmNsdWRlU2VsZWN0Q29sdW1uKSByZXR1cm4gY29sdW1uTGVuO1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93ICYmICF0aGlzLnByb3BzLnNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW5MZW4gKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbHVtbkxlbjtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9jb2x1bW4tcmVzb2x2ZXIuanMiLCIvKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgd2l0aFNvcnQgZnJvbSAnLi9zb3J0L3dyYXBwZXInO1xuaW1wb3J0IHdpdGhTZWxlY3Rpb24gZnJvbSAnLi9yb3ctc2VsZWN0aW9uL3dyYXBwZXInO1xuXG5pbXBvcnQgcmVtb3RlUmVzb2x2ZXIgZnJvbSAnLi9wcm9wcy1yZXNvbHZlci9yZW1vdGUtcmVzb2x2ZXInO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IHdpdGhEYXRhU3RvcmUgPSBCYXNlID0+XG4gIGNsYXNzIEJvb3RzdHJhcFRhYmxlQ29udGFpbmVyIGV4dGVuZHMgcmVtb3RlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RvcmUgPSBuZXcgU3RvcmUocHJvcHMua2V5RmllbGQpO1xuICAgICAgdGhpcy5zdG9yZS5kYXRhID0gcHJvcHMuZGF0YTtcbiAgICAgIHRoaXMud3JhcENvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdGhpcy5zdG9yZS5zZXRBbGxEYXRhKG5leHRQcm9wcy5kYXRhKTtcbiAgICB9XG5cbiAgICB3cmFwQ29tcG9uZW50cygpIHtcbiAgICAgIHRoaXMuQmFzZUNvbXBvbmVudCA9IEJhc2U7XG4gICAgICBjb25zdCB7IHBhZ2luYXRpb24sIGNvbHVtbnMsIGZpbHRlciwgc2VsZWN0Um93LCBjZWxsRWRpdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmIChwYWdpbmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgd3JhcHBlckZhY3RvcnkgfSA9IHBhZ2luYXRpb247XG4gICAgICAgIHRoaXMuQmFzZUNvbXBvbmVudCA9IHdyYXBwZXJGYWN0b3J5KHRoaXMuQmFzZUNvbXBvbmVudCwge1xuICAgICAgICAgIHJlbW90ZVJlc29sdmVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sdW1ucy5maWx0ZXIoY29sID0+IGNvbC5zb3J0KS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuQmFzZUNvbXBvbmVudCA9IHdpdGhTb3J0KHRoaXMuQmFzZUNvbXBvbmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB3cmFwcGVyRmFjdG9yeSB9ID0gZmlsdGVyO1xuICAgICAgICB0aGlzLkJhc2VDb21wb25lbnQgPSB3cmFwcGVyRmFjdG9yeSh0aGlzLkJhc2VDb21wb25lbnQsIHtcbiAgICAgICAgICBfLFxuICAgICAgICAgIHJlbW90ZVJlc29sdmVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2VsbEVkaXQpIHtcbiAgICAgICAgY29uc3QgeyB3cmFwcGVyRmFjdG9yeSB9ID0gY2VsbEVkaXQ7XG4gICAgICAgIHRoaXMuQmFzZUNvbXBvbmVudCA9IHdyYXBwZXJGYWN0b3J5KHRoaXMuQmFzZUNvbXBvbmVudCwge1xuICAgICAgICAgIF8sXG4gICAgICAgICAgcmVtb3RlUmVzb2x2ZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RSb3cpIHtcbiAgICAgICAgdGhpcy5CYXNlQ29tcG9uZW50ID0gd2l0aFNlbGVjdGlvbih0aGlzLkJhc2VDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGJhc2VQcm9wcyA9IHtcbiAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgc3RvcmU6IHRoaXMuc3RvcmVcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx0aGlzLkJhc2VDb21wb25lbnQgeyAuLi5iYXNlUHJvcHMgfSAvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhU3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250YWluZXIuanMiLCIvKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IDAgKi9cbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHNvcnQsIG5leHRPcmRlciB9IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICBjb25zdHJ1Y3RvcihrZXlGaWVsZCkge1xuICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSBbXTtcbiAgICB0aGlzLl9rZXlGaWVsZCA9IGtleUZpZWxkO1xuICAgIHRoaXMuX3NvcnRPcmRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zb3J0RmllbGQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBbXTtcbiAgICB0aGlzLl9maWx0ZXJzID0ge307XG4gICAgdGhpcy5fcGFnZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zaXplUGVyUGFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGVkaXQocm93SWQsIGRhdGFGaWVsZCwgbmV3VmFsdWUpIHtcbiAgICBjb25zdCByb3cgPSBnZXRSb3dCeVJvd0lkKHRoaXMpKHJvd0lkKTtcbiAgICBpZiAocm93KSBfLnNldChyb3csIGRhdGFGaWVsZCwgbmV3VmFsdWUpO1xuICB9XG5cbiAgc2V0U29ydCh7IGRhdGFGaWVsZCB9LCBvcmRlciwgZGVmYXVsdE9yZGVyKSB7XG4gICAgdGhpcy5zb3J0T3JkZXIgPSBuZXh0T3JkZXIodGhpcykoZGF0YUZpZWxkLCBvcmRlciwgZGVmYXVsdE9yZGVyKTtcbiAgICB0aGlzLnNvcnRGaWVsZCA9IGRhdGFGaWVsZDtcbiAgfVxuXG4gIHNvcnRCeSh7IHNvcnRGdW5jIH0pIHtcbiAgICB0aGlzLmRhdGEgPSBzb3J0KHRoaXMpKHNvcnRGdW5jKTtcbiAgfVxuXG4gIGdldEFsbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBzZXRBbGxEYXRhKGRhdGEpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldCBkYXRhKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9maWx0ZXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWREYXRhO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuICBzZXQgZGF0YShkYXRhKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX2ZpbHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAoZGF0YSA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpIDogW10pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBmaWx0ZXJlZERhdGEoKSB7IHJldHVybiB0aGlzLl9maWx0ZXJlZERhdGE7IH1cbiAgc2V0IGZpbHRlcmVkRGF0YShmaWx0ZXJlZERhdGEpIHsgdGhpcy5fZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhOyB9XG5cbiAgZ2V0IGtleUZpZWxkKCkgeyByZXR1cm4gdGhpcy5fa2V5RmllbGQ7IH1cbiAgc2V0IGtleUZpZWxkKGtleUZpZWxkKSB7IHRoaXMuX2tleUZpZWxkID0ga2V5RmllbGQ7IH1cblxuICBnZXQgc29ydE9yZGVyKCkgeyByZXR1cm4gdGhpcy5fc29ydE9yZGVyOyB9XG4gIHNldCBzb3J0T3JkZXIoc29ydE9yZGVyKSB7IHRoaXMuX3NvcnRPcmRlciA9IHNvcnRPcmRlcjsgfVxuXG4gIGdldCBwYWdlKCkgeyByZXR1cm4gdGhpcy5fcGFnZTsgfVxuICBzZXQgcGFnZShwYWdlKSB7IHRoaXMuX3BhZ2UgPSBwYWdlOyB9XG5cbiAgZ2V0IHNpemVQZXJQYWdlKCkgeyByZXR1cm4gdGhpcy5fc2l6ZVBlclBhZ2U7IH1cbiAgc2V0IHNpemVQZXJQYWdlKHNpemVQZXJQYWdlKSB7IHRoaXMuX3NpemVQZXJQYWdlID0gc2l6ZVBlclBhZ2U7IH1cblxuICBnZXQgc29ydEZpZWxkKCkgeyByZXR1cm4gdGhpcy5fc29ydEZpZWxkOyB9XG4gIHNldCBzb3J0RmllbGQoc29ydEZpZWxkKSB7IHRoaXMuX3NvcnRGaWVsZCA9IHNvcnRGaWVsZDsgfVxuXG4gIGdldCBzZWxlY3RlZCgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkOyB9XG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZCkgeyB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkOyB9XG5cbiAgZ2V0IGZpbHRlcnMoKSB7IHJldHVybiB0aGlzLl9maWx0ZXJzOyB9XG4gIHNldCBmaWx0ZXJzKGZpbHRlcnMpIHsgdGhpcy5fZmlsdGVycyA9IGZpbHRlcnM7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL2luZGV4LmpzIiwiLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG4vKiBlc2xpbnQgbm8tbG9uZWx5LWlmOiAwICovXG4vKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IDAgKi9cbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmZ1bmN0aW9uIGNvbXBhcmF0b3IoYSwgYikge1xuICBsZXQgcmVzdWx0O1xuICBpZiAodHlwZW9mIGIgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gYi5sb2NhbGVDb21wYXJlKGEpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGEgPiBiID8gLTEgOiAoKGEgPCBiKSA/IDEgOiAwKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3Qgc29ydCA9ICh7IGRhdGEsIHNvcnRPcmRlciwgc29ydEZpZWxkIH0pID0+IChzb3J0RnVuYykgPT4ge1xuICBjb25zdCBfZGF0YSA9IFsuLi5kYXRhXTtcbiAgX2RhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IHZhbHVlQSA9IF8uZ2V0KGEsIHNvcnRGaWVsZCk7XG4gICAgbGV0IHZhbHVlQiA9IF8uZ2V0KGIsIHNvcnRGaWVsZCk7XG4gICAgdmFsdWVBID0gXy5pc0RlZmluZWQodmFsdWVBKSA/IHZhbHVlQSA6ICcnO1xuICAgIHZhbHVlQiA9IF8uaXNEZWZpbmVkKHZhbHVlQikgPyB2YWx1ZUIgOiAnJztcblxuICAgIGlmIChzb3J0RnVuYykge1xuICAgICAgcmVzdWx0ID0gc29ydEZ1bmModmFsdWVBLCB2YWx1ZUIsIHNvcnRPcmRlciwgc29ydEZpZWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gQ29uc3QuU09SVF9ERVNDKSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbXBhcmF0b3IodmFsdWVBLCB2YWx1ZUIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gY29tcGFyYXRvcih2YWx1ZUIsIHZhbHVlQSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xuICByZXR1cm4gX2RhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgbmV4dE9yZGVyID0gc3RvcmUgPT4gKGZpZWxkLCBvcmRlciwgZGVmYXVsdE9yZGVyID0gQ29uc3QuU09SVF9ERVNDKSA9PiB7XG4gIGlmIChvcmRlcikgcmV0dXJuIG9yZGVyO1xuXG4gIGlmIChmaWVsZCAhPT0gc3RvcmUuc29ydEZpZWxkKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRPcmRlcjtcbiAgfVxuICByZXR1cm4gc3RvcmUuc29ydE9yZGVyID09PSBDb25zdC5TT1JUX0RFU0MgPyBDb25zdC5TT1JUX0FTQyA6IENvbnN0LlNPUlRfREVTQztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zb3J0LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHJlbW90ZVJlc29sdmVyIGZyb20gJy4uL3Byb3BzLXJlc29sdmVyL3JlbW90ZS1yZXNvbHZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2UgPT5cbiAgY2xhc3MgU29ydFdyYXBwZXIgZXh0ZW5kcyByZW1vdGVSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmhhbmRsZVNvcnQgPSB0aGlzLmhhbmRsZVNvcnQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBjb25zdCB7IGNvbHVtbnMsIGRlZmF1bHRTb3J0ZWQsIGRlZmF1bHRTb3J0RGlyZWN0aW9uLCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIC8vIGRlZmF1bHRTb3J0ZWQgaXMgYW4gYXJyYXksIGl0J3MgcmVhZHkgdG8gdXNlIGFzIG11bHRpIC8gc2luZ2xlIHNvcnRcbiAgICAgIC8vIHdoZW4gd2Ugc3RhcnQgdG8gc3VwcG9ydCBtdWx0aSBzb3J0LCBwbGVhc2UgdXBkYXRlIGZvbGxvd2luZyBjb2RlIHRvIHVzZSBhcnJheS5mb3JFYWNoXG4gICAgICBpZiAoZGVmYXVsdFNvcnRlZCAmJiBkZWZhdWx0U29ydGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZGF0YUZpZWxkID0gZGVmYXVsdFNvcnRlZFswXS5kYXRhRmllbGQ7XG4gICAgICAgIGNvbnN0IG9yZGVyID0gZGVmYXVsdFNvcnRlZFswXS5vcmRlcjtcbiAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1ucy5maWx0ZXIoY29sID0+IGNvbC5kYXRhRmllbGQgPT09IGRhdGFGaWVsZCk7XG4gICAgICAgIGlmIChjb2x1bW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0b3JlLnNldFNvcnQoY29sdW1uWzBdLCBvcmRlciwgZGVmYXVsdFNvcnREaXJlY3Rpb24pO1xuXG4gICAgICAgICAgaWYgKGNvbHVtblswXS5vblNvcnQpIHtcbiAgICAgICAgICAgIGNvbHVtblswXS5vblNvcnQoc3RvcmUuc29ydEZpZWxkLCBzdG9yZS5zb3J0T3JkZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmlzUmVtb3RlU29ydCgpIHx8IHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU29ydENoYW5nZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9yZS5zb3J0QnkoY29sdW1uWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgbGV0IHNvcnRlZENvbHVtbjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV4dFByb3BzLmNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jb2x1bW5zW2ldLmRhdGFGaWVsZCA9PT0gbmV4dFByb3BzLnN0b3JlLnNvcnRGaWVsZCkge1xuICAgICAgICAgIHNvcnRlZENvbHVtbiA9IG5leHRQcm9wcy5jb2x1bW5zW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc29ydGVkQ29sdW1uICYmIHNvcnRlZENvbHVtbi5zb3J0KSB7XG4gICAgICAgIG5leHRQcm9wcy5zdG9yZS5zb3J0Qnkoc29ydGVkQ29sdW1uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTb3J0KGNvbHVtbikge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHN0b3JlLnNldFNvcnQoY29sdW1uLCB1bmRlZmluZWQsIHRoaXMucHJvcHMuZGVmYXVsdFNvcnREaXJlY3Rpb24pO1xuXG4gICAgICBpZiAoY29sdW1uLm9uU29ydCkge1xuICAgICAgICBjb2x1bW4ub25Tb3J0KHN0b3JlLnNvcnRGaWVsZCwgc3RvcmUuc29ydE9yZGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNSZW1vdGVTb3J0KCkgfHwgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgICB0aGlzLmhhbmRsZVNvcnRDaGFuZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLnNvcnRCeShjb2x1bW4pO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJhc2VcbiAgICAgICAgICB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgIG9uU29ydD17IHRoaXMuaGFuZGxlU29ydCB9XG4gICAgICAgICAgZGF0YT17IHRoaXMucHJvcHMuc3RvcmUuZGF0YSB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvd3JhcHBlci5qcyIsIi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQge1xuICBpc0FueVNlbGVjdGVkUm93LFxuICBzZWxlY3RhYmxlS2V5cyxcbiAgdW5TZWxlY3RhYmxlS2V5cyxcbiAgZ2V0U2VsZWN0ZWRSb3dzXG59IGZyb20gJy4uL3N0b3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi4vc3RvcmUvcm93cyc7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2UgPT5cbiAgY2xhc3MgUm93U2VsZWN0aW9uV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBzZWxlY3RSb3c6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmhhbmRsZVJvd1NlbGVjdCA9IHRoaXMuaGFuZGxlUm93U2VsZWN0LmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUFsbFJvd3NTZWxlY3QgPSB0aGlzLmhhbmRsZUFsbFJvd3NTZWxlY3QuYmluZCh0aGlzKTtcblxuICAgICAgcHJvcHMuc3RvcmUuc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQgfHwgW107XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHByb3BzLnN0b3JlLnNlbGVjdGVkXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBuZXh0UHJvcHMuc3RvcmUuc2VsZWN0ZWQgPSBuZXh0UHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkIHx8IFtdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IG5leHRQcm9wcy5zdG9yZS5zZWxlY3RlZFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJvdyBzZWxlY3Rpb24gaGFuZGxlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSByb3dLZXkgLSByb3cga2V5IG9mIHdoYXQgd2FzIHNlbGVjdGVkLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY2hlY2tlZCAtIG5leHQgY2hlY2tlZCBzdGF0dXMgb2YgaW5wdXQgYnV0dG9uLlxuICAgICAqL1xuICAgIGhhbmRsZVJvd1NlbGVjdChyb3dLZXksIGNoZWNrZWQsIHJvd0luZGV4LCBlKSB7XG4gICAgICBjb25zdCB7IHNlbGVjdFJvdzogeyBtb2RlLCBvblNlbGVjdCB9LCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgUk9XX1NFTEVDVF9TSU5HTEUgfSA9IENvbnN0O1xuXG4gICAgICBsZXQgY3VyclNlbGVjdGVkID0gWy4uLnN0b3JlLnNlbGVjdGVkXTtcblxuICAgICAgaWYgKG1vZGUgPT09IFJPV19TRUxFQ1RfU0lOR0xFKSB7IC8vIHdoZW4gc2VsZWN0IG1vZGUgaXMgcmFkaW9cbiAgICAgICAgY3VyclNlbGVjdGVkID0gW3Jvd0tleV07XG4gICAgICB9IGVsc2UgaWYgKGNoZWNrZWQpIHsgLy8gd2hlbiBzZWxlY3QgbW9kZSBpcyBjaGVja2JveFxuICAgICAgICBjdXJyU2VsZWN0ZWQucHVzaChyb3dLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyclNlbGVjdGVkID0gY3VyclNlbGVjdGVkLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gcm93S2V5KTtcbiAgICAgIH1cblxuICAgICAgc3RvcmUuc2VsZWN0ZWQgPSBjdXJyU2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChvblNlbGVjdCkge1xuICAgICAgICBjb25zdCByb3cgPSBnZXRSb3dCeVJvd0lkKHN0b3JlKShyb3dLZXkpO1xuICAgICAgICBvblNlbGVjdChyb3csIGNoZWNrZWQsIHJvd0luZGV4LCBlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IGN1cnJTZWxlY3RlZFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGhhbmRsZSBhbGwgcm93cyBzZWxlY3Rpb24gb24gaGVhZGVyIGNlbGwgYnkgc3RvcmUuc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBoYW5kbGVBbGxSb3dzU2VsZWN0KGUpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUsIHNlbGVjdFJvdzoge1xuICAgICAgICBvblNlbGVjdEFsbCxcbiAgICAgICAgbm9uU2VsZWN0YWJsZVxuICAgICAgfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gaXNBbnlTZWxlY3RlZFJvdyhzdG9yZSkobm9uU2VsZWN0YWJsZSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9ICFzZWxlY3RlZDtcblxuICAgICAgY29uc3QgY3VyclNlbGVjdGVkID0gcmVzdWx0ID9cbiAgICAgICAgc2VsZWN0YWJsZUtleXMoc3RvcmUpKG5vblNlbGVjdGFibGUpIDpcbiAgICAgICAgdW5TZWxlY3RhYmxlS2V5cyhzdG9yZSkobm9uU2VsZWN0YWJsZSk7XG5cblxuICAgICAgc3RvcmUuc2VsZWN0ZWQgPSBjdXJyU2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChvblNlbGVjdEFsbCkge1xuICAgICAgICBvblNlbGVjdEFsbChyZXN1bHQsIGdldFNlbGVjdGVkUm93cyhzdG9yZSksIGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogY3VyclNlbGVjdGVkXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJhc2VcbiAgICAgICAgICB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgIG9uUm93U2VsZWN0PXsgdGhpcy5oYW5kbGVSb3dTZWxlY3QgfVxuICAgICAgICAgIG9uQWxsUm93c1NlbGVjdD17IHRoaXMuaGFuZGxlQWxsUm93c1NlbGVjdCB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vd3JhcHBlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=react-bootstrap-table-next.js.map