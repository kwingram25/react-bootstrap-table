'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

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