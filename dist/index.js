'use strict';

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _example = require('./src/example');

var _example2 = _interopRequireDefault(_example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// index.js
console.log("Hello from JavaScript!");
console.log((0, _moment2.default)().startOf('day').fromNow());

var name = "Bob",
    time = "today";
console.log('Hello ' + name + ', how are you ' + time + '?');