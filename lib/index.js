'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = verifyAction;
function verifyAction() {
  var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    return true;
  };
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return function () {
    return function (next) {
      return function (action) {
        if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object' || strict) {
          if (predicate(action)) return next(action);
          console.error('redux-action-validator: attempting to use non-standard-compliant Redux action: ' + JSON.stringify(action));
          return null;
        }
        console.log('redux-action-validator: could not validate action (not an object), skipping: ' + JSON.stringify(action));
        return next(action);
      };
    };
  };
}