// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
// Вам даны два массива a1и a2строки. Каждая строка состоит из букв от aдо z. Пусть xэто любая строка из первого массива и yлюбая строка из второго массива.
// Find max(abs(length(x) − length(y)))
// Если a1и/или a2пусты, вернитесь -1на каждом языке, кроме Haskell (F#), где вы вернете Nothing(Нет).
// Пример:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Найдите максимум и минимум в обоих массивах
// Сравните максимум из массива1 с минимумом из массива2
// Сравните максимум из массива2 с минимумом из массива1
// Вернуть максимум из обоих сравнений

var s1 = [
  'hoqq',
  'bbllkw',
  'oox',
  'ejjuyyy',
  'plmiis',
  'xxxzgpsssa',
  'xxwwkktt',
  'znnnnfqknaz',
  'qqquuhii',
  'dvvvwz',
];
var s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return '-1';
  a1 = getNum(a1);
  a2 = getNum(a2);
  console.log(a1, a2);

  return Math.max(Math.abs(a1[0] - a2[1]), Math.abs(a1[1] - a2[0]));
}

function getNum(arr) {
  let max = arr[0].length;
  let min = arr[0].length;
  arr.forEach((el) => {
    if (max < el.length) {
      max = el.length;
    }
    if (min > el.length) {
      min = el.length;
    }
  });
  return [max, min];
}

console.log(mxdiflg(s1, s2));

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let l1 = a1.map((str) => str.length);
  let l2 = a2.map((str) => str.length);
  return Math.max(
    Math.max(...l1) - Math.min(...l2),
    Math.max(...l2) - Math.min(...l1)
  );
}

// =============================================
// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript
// В вашем ресторане начали работать новые кассиры.
// Они хорошо принимают заказы, но не умеют писать слова с заглавной буквы или использовать пробел!
// Все создаваемые ими заказы выглядят примерно так:
// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
// Кухонные работники грозятся уволиться из-за того, что сложно читать заказы.
// Они предпочитают получать заказы в виде красивой чистой строки с пробелами и заглавными буквами, например:
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
// Кухонный персонал ожидает, что блюда будут расположены в том же порядке, в котором они указаны в меню.
// Пункты меню достаточно простые, в названиях пунктов нет дублирования:
// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

const arr = [
  'Burger',
  'Fries',
  'Chicken',
  'Pizza',
  'Sandwich',
  'Onionrings',
  'Milkshake',
  'Coke',
];

function getOrder(input) {
  let buf = [];
  // let obj = {};

  arr.forEach((el) => {
    let pos = 0;
    while (true) {
      let foundPos = input.indexOf(el.toLowerCase(), pos);
      if (foundPos == -1) break;
      buf.push(el);
      // if (obj[el]) {
      //   obj[el]++;
      // } else {
      //   obj[el] = 1;
      // }
      pos = foundPos + 1;
    }
  });

  // let res = Object.keys(obj).map((el) => `${el} `.repeat(obj[el]));
  return buf.join(' ');
  // return res.join('');
}

console.log(
  getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza')
);

// =============================================
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
