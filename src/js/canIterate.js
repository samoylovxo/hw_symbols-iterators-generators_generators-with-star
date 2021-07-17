/* eslint-disable linebreak-style */
/* eslint-disable no-console */

function canIterate(obj) {
  if (obj === null || obj === undefined) {
    return false;
  }

  return typeof obj[Symbol.iterator] === 'function';
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(undefined)); // false
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
