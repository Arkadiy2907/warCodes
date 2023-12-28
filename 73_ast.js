//1) https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

const opposite = (number) =>
  typeof number === 'number' && !isNaN(number) ? -number : 'this is not number';

// function opposite(number) {
//   if (typeof number === 'number' && !isNaN(number)) {
//     return -number;
//   } else {
//     return 'this is not number';
//   }
// }

console.log(opposite(1));
console.log(opposite(0));
console.log(opposite(4.25));
console.log(opposite(3.3333333));
