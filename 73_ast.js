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
//www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript

function hexStringToRGB(hexColor) {
  hexColor = hexColor.replace('#', '');

  const red = parseInt(hexColor.substring(0, 2), 16);
  const green = parseInt(hexColor.substring(2, 4), 16);
  const blue = parseInt(hexColor.substring(4, 6), 16);

  const rgbMap = new Map();
  rgbMap.set('r', red);
  rgbMap.set('g', green);
  rgbMap.set('b', blue);
  return rgbMap;
}

function hexStringToRGB(hexColor) {
  hexColor = hexColor.replace('#', '');

  const red = parseInt(hexColor.substring(0, 2), 16);
  const green = parseInt(hexColor.substring(2, 4), 16);
  const blue = parseInt(hexColor.substring(4, 6), 16);

  const rgbMap = {};
  rgbMap.r = red;
  rgbMap.g = green;
  rgbMap.b = blue;
  return rgbMap;
}

function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1, 3), 16),
    g: parseInt(h.slice(3, 5), 16),
    b: parseInt(h.slice(5, 7), 16),
  };
}

console.log(hexStringToRGB('#FF9933'));

// =============================================
// https://www.codewars.com/kata/57b2e428d24156b312000114/train/javascript
// Найдите объем конуса, радиус и высота которого указаны в качестве параметров функции volume. Используйте значение PI, предоставленное вашим языком (например: Math.PIв JS, math.piPython или Math::PIRuby), и округлите объем до Interger.

https: function volume(r, h) {
  //your code here!
  return Math.floor((Math.PI * r ** 2 * h) / 3);
}

console.log(volume(7, 3));
console.log(volume(56, 30));
console.log(volume(0, 10));

// =============================================
// https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb/train/javascript
// Вы получите массив чисел.

// Каждое предыдущее число меньше следующего за ним.

// Некоторые цифры будут отсутствовать, например:

// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Ваша задача — вернуть массив недостающих чисел:

// [-1, 0, 2, 3, 4]

function findMissingNumbers(arr) {
  // let  arr1 = arr.slice()
  let buf = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    // console.log(arr[i]);
    buf.push(i);
  }
  return buf.filter((el) => !arr.includes(el));
}

console.log(findMissingNumbers([-3, -2, 1, 4]));

// =============================================
// // https://www.codewars.com/kata/5ac54bcbb925d9b437000001/train/javascript
// Учитывая строку символов, я хочу, чтобы функция findMiddle()/ find_middle()возвращала среднее число в произведении каждой цифры в строке.
// Пример: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, поэтому 0 следует возвращать как целое число.
// Не все строки будут содержать цифры. В этом случае и в случае любых нестроковых значений верните -1.
// Если в продукте четное количество цифр, верните две средние цифры.
// Пример: 1563 -> 56.
// ПРИМЕЧАНИЕ. Удалите ведущие нули, если произведение четное и первая цифра из двух — ноль. Пример 2016 -> 1

function findMiddle(str) {
  if (typeof str !== 'string') return -1;
  let arr1 = str.split('').filter((el) => !isNaN(el) && el !== ' ');
  if (arr1.length === 0) return -1;
  let arr = +arr1[0];
  for (let i = 1; i < arr1.length; i++) {
    arr *= +arr1[i];
  }
  arr = arr.toString();

  if (arr.length === 1) return +arr[0];
  if (arr.length === 0) return -1;
  let res =
    arr.length % 2 === 0
      ? `${arr[arr.length / 2 - 1]}${arr[arr.length / 2]}`
      : `${arr[(arr.length - 1) / 2]}`;

  return +res;
}

console.log(findMiddle('z&m '));
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
