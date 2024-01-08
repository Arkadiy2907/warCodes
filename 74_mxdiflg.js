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
// https://www.codewars.com/kata/5963314a51c68a26600000ae/train/javascript

// Создайте функцию longer, которая принимает строку и сортирует содержащиеся в ней слова по их длине в порядке возрастания. Если есть два слова одинаковой длины, отсортируйте их по алфавиту. Для получения более подробной информации посмотрите примеры ниже.

// longer("Another Green World") => Green World Another
// longer("Darkness on the edge of Town") => of on the Town edge Darkness
// longer("Have you ever Seen the Rain") => the you Have Rain Seen ever
// Предположим, что в качестве входных данных будут введены только алфавиты. Символы верхнего регистра имеют приоритет над символами нижнего регистра. То есть,

// longer("hello Hello") => Hello hello

function longer(s) {
  let mass = {};
  s.split(' ').forEach((item) => {
    let get_item = mass[item.length] || [];
    mass[item.length] = [...get_item, item];
  });
  let res = [];
  Object.keys(mass)
    .sort((a, b) => a - b)
    .forEach((i) => {
      if (mass[i].length > 1) {
        res.push(...mass[i].sort());
      } else {
        res.push(mass[i][0]);
      }
    });
  return res.join(' ');
}

function longer(s) {
  return s
    .split(' ')
    .sort()
    .sort((a, b) => a.length - b.length || a > b)
    .join(' ');
}

console.log(longer('Another Green World')); // Output: Green World Another
console.log(longer('Darkness on the edge of Town')); // Output: of on the Town edge Darkness
console.log(longer('Have you ever Seen the Rain')); // Output: the you Have Rain Seen ever
console.log(longer('This will be our Year')); // Output: be our This Year will
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
// https://www.codewars.com/kata/59dbab4d7997cb350000007f/train/javascript
// Две строки aи b называются изоморфными, если существует взаимно-однозначное отображение каждого символа aв каждый символ b. И все вхождения каждого символа в aсопоставлении с тем же символом в b.
// Задача
// В этом ката вы создадите функцию, которая возвращает значение True, если две заданные строки изоморфны друг другу, и Falseв противном случае. Помните, что порядок важен.
// Ваше решение должно поддерживать слова длиной более 10 символов.
// Пример
// Истинный:
// CBAABC DEFFED
// XXX YYY
// RAMBUNCTIOUSLY THERMODYNAMICS
// ЛОЖЬ:
// AB CC
// XXY XYY
// ABAB CD

function isomorph(a, b) {
  let arr1 = a.split('');
  let arr2 = b.split('');
  if (a.length !== b.length) return false;
  let obj1 = {};
  let obj2 = {};
  let res = true;
  for (let i = 0; i < arr1.length; i++) {
    if (!obj1[arr1[i]]) {
      obj1[arr1[i]] = arr2[i];
    } else if (obj1[arr1[i]] !== arr2[i]) {
      return false;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!obj2[arr2[i]]) {
      obj2[arr2[i]] = arr1[i];
    } else if (obj2[arr2[i]] !== arr1[i]) {
      return false;
    }
  }

  return res;
}

// console.log(isomorph('ESTATE', 'DUELED')); //, true);
// console.log(isomorph('SEE', 'SAW'));
console.log(isomorph('vjbqxpmya', 'gjdekyyjo'));

const f = (a) => [...a].map((e) => a.indexOf(e)).join`,`;
const isomorph = (a, b) => f(a) == f(b);

// =============================================
// https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/javascript

// Напишите функцию, которая принимает 4 цифры и возвращает последнее время суток, которое можно построить с помощью этих цифр.

// Время должно быть в HH:MMформате.

// Примеры:

// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59"
// Примечания
// Результатом должно быть действительное 24-часовое время между 00:00и 23:59.
// Каждый ввод имеет действительный ответ.

function latestClock(...arr1) {
  let idx = 0;
  let arr = arr1.slice();
  do {
    let one = arr.filter((el) => el <= 2).sort((a, b) => b - a)[idx];
    arr.splice(arr.indexOf(one), 1);
    let two = arr
      .filter((el) => (one === 2 ? el <= 3 : el === 0 || el))
      .sort((a, b) => b - a)[0];
    arr.splice(arr.indexOf(two), 1);
    let three = Math.max(...arr.filter((el) => el <= 5));

    if (three === -Infinity) {
      idx++;
      arr.length = 0;
      arr = arr1.slice();
    } else {
      arr.splice(arr.indexOf(three), 1);
      let four = arr[0];
      return `${one}${two}:${three}${four}`;
    }
  } while (idx < arr.length);
}

// console.log(latestClock(0, 1, 2, 5)); //21:59
// console.log(latestClock(1, 9, 8, 3)); //19:38
// console.log(latestClock(9, 1, 2, 5)); //21:59
console.log(latestClock(1, 2, 8, 9)); //19:28
// console.log(latestClock(0, 0, 0, 0)); //00:00
// console.log(latestClock(2, 4, 0, 0)); //00:00
