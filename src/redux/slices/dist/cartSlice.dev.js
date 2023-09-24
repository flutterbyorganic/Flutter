"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addItem = exports.getItemsSelector = void 0;

var _toolkit = require("@reduxjs/toolkit");

var cartSlice = (0, _toolkit.createSlice)({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: function addItem(state, action) {
      state.push(action.payload);
    }
  }
});
var getItemsSelector = (0, _toolkit.createSelector)(function (state) {
  return state.cart;
}, function (state) {
  return state;
});
exports.getItemsSelector = getItemsSelector;
var addItem = cartSlice.actions.addItem;
exports.addItem = addItem;
var _default = cartSlice.reducer;
exports["default"] = _default;