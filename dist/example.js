'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var grocery = {
  id: 'bananas',
  name: 'Bananas',
  units: 6,
  price: 10,
  currency: 'USD'
};
var groceries = _defineProperty({}, grocery.id, grocery);

var throwError = function throwError(message) {
  throw new Error(message);
};

var double = function double(value) {
  return value * 2;
};

console.log(double(3));
// <- 6