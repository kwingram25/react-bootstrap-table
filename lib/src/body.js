'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTransitionGroup = require('react-transition-group');

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _rowSection = require('./row-section');

var _rowSection2 = _interopRequireDefault(_rowSection);

var _const = require('./const');

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