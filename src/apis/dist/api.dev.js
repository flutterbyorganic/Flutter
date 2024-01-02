"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateData = exports.deleteData = exports.postData = exports.fetchData = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseURL = 'http://localhost:3001';

var fetchData = function fetchData(endpoint) {
  var response;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(baseURL + endpoint));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.fetchData = fetchData;

var postData = function postData(endpoint, data) {
  var response;
  return regeneratorRuntime.async(function postData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(baseURL + endpoint, data));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          throw _context2.t0;

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.postData = postData;

var deleteData = function deleteData(endpoint) {
  return regeneratorRuntime.async(function deleteData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"]["delete"](baseURL + endpoint));

        case 3:
          return _context3.abrupt("return", _context3.sent);

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          console.error("Error deleting data:", _context3.t0);
          throw _context3.t0;

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.deleteData = deleteData;

var updateData = function updateData(endpoint, data) {
  return regeneratorRuntime.async(function updateData$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].put(baseURL + endpoint, data));

        case 3:
          return _context4.abrupt("return", _context4.sent);

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          console.error("Error updating data:", _context4.t0);
          throw _context4.t0;

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.updateData = updateData;