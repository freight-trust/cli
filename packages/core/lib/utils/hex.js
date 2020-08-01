"use strict";
Object.defineProperty(exports, "__esModule", {value : true});
exports.hexOrQuantifier = exports.hex = void 0;
const quantifiers = new Set([ 'latest', 'earliest', 'pending' ]);
function hex(value) {
  if (typeof value === 'string') {
    return value.startsWith('0x') ? value : `0x${value}`;
  }
  return `0x${value.toString(16)}`;
}
exports.hex = hex;
function hexOrQuantifier(value) {
  if (typeof value === 'string' && quantifiers.has(value))
    return value;
  return hex(value);
}
exports.hexOrQuantifier = hexOrQuantifier;
//# sourceMappingURL=hex.js.map