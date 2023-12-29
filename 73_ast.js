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

// =============================================
//2) https://www.codewars.com/kata/basic-mathematical-operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  return operations[operation]
    ? operations[operation](value1, value2)
    : 'bed operation';
}

console.log(basicOp('+++', 4, 7));
