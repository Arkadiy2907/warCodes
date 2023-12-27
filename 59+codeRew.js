// отсортировать не чет по возрос а четные оставить на месте

const arr1 = [999, 22, 3, -47, 5, 2, 58, 7, 4];

const sortArr = (arr) => {
  let oddArr = [];
  let evenArr = [];

  arr.forEach((el) => (el % 2 === 0 ? evenArr.push(el) : oddArr.push(el)));

  oddArr.sort((a, b) => a - b);

  return arr.map((el) => (el % 2 === 0 ? evenArr.shift() : oddArr.shift()));
};

// ===============================

// найти пересеч в объекты

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 3, c: 4 };

const getNewObj = (o1, o2) => {
  let resObj = {};
  const arr1 = Object.keys(o1);

  arr1.forEach((el) => {
    if (o2.hasOwnProperty(el)) {
      if (o2[el] === o1[el]) {
        resObj[el] = o2[el];
      }
    }
  });

  return resObj;
};

// console.log("a")

// console.log("a")
// ============================================================
// проверить объект на наличие false значений если в одном из value что либо есть true то вернуть true

const obj = {
  unde: '',
  aa: 's',
};

const isObj = (o) => {
  let res = true;
  if (Object.keys(o).length === 0) res = false;

  Object.values(o).forEach((el) => {
    if (el === '') res = false;
    if (el === undefined) res = false;
    if (isNaN(el)) res = false;
  });

  let arr = [];

  Object.values(o).forEach((el) => {
    if (el !== '' || el !== undefined || !isNaN(el)) {
      arr.push(el);
    }
    // else {
    //   res = false;
    // }
  });

  if (arr.length !== 0) res = true;

  return res;
};

console.log(isObj(obj));
// ============================================

// получить порядковый номер дня в году и номер недели

const getNumDay = (d, m, y) => {
  let myDate = new Date(y, m, d);
  let startDate = new Date(myDate.getFullYear(), 0, 0);
  let buf = myDate - startDate;

  let numDay = Math.floor(buf / (1000 * 60 * 60 * 24));
  let numWeek = Math.floor(buf / (1000 * 60 * 60 * 24 * 7));

  return `номер дня в году:${numDay}, номер недели в году:${numWeek}`;
};

console.log(getNumDay(31, 7, 2023));

// ==============================================================
// Дан массив чисел. Необходимо найти самую длинную последовательность из одинаковых чисел.
// Вывести на экран длину этой последовательности, ее значение, индекс ее начала и конца.
// Если таких последовательностей несколько, подсчитать и вывести их количество.
// Если таких последовательностей нет, вывести сообщение об этом.

const getMaxLength = (a) => {
  let lengthArr = 1;
  let startIndex = 0;
  let endIndex = 0;
  let maxSring = 'последовательностей нет';
  let maxLength = 1;
  let maxCount = 0;

  if (!a.length) return maxSring;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      lengthArr++;
    } else {
      startIndex = i - lengthArr + 1;
      endIndex = i;
      if (maxLength < lengthArr) {
        maxSring = `длина max последовательности ${lengthArr}, значение ${a[i]}, индекс начала ${startIndex} и конца ${endIndex}`;
        maxLength = lengthArr;
        maxCount = 0;
      }
      if (maxLength === lengthArr) {
        maxCount++;
      }
      lengthArr = 1;
    }
  }

  return maxCount === 1 ? maxSring : maxCount;
};

// getMaxLength([1, 2, 2, 2, 3, 3, 3, 2, 2]);

console.log(getMaxLength([1, 2, 2, 2, 3, 3, 3, 2, 2]));
console.log(getMaxLength([]));
console.log(getMaxLength([1, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2]));
// =================================================================
// Есть два массива чисел. Требуется создать объект, в котором представлены
// только числа повторяющиеся в обоих массивах и количество их повторений.

const getObj = (arr, obj) => {
  arr.forEach((el) => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  });
};

const getCountNum = (a1, a2) => {
  let obj = {};
  let obj1 = {};
  let obj2 = {};

  getObj(a1, obj1);
  getObj(a2, obj2);

  const arr = Object.keys(obj1).filter((el) => Object.keys(obj2).includes(el));

  for (let key of arr) {
    obj[key] = obj1[key] + obj2[key];
  }

  return obj;
};

console.log(getCountNum([1, 2, 3, 5, 5, 7], [2, 3, 5, 6, 2, 5]));
// ========================
// дана квадратная матрица, найти сумму двух главной диагонали

const m = [
  [1, 2, 3, 4],
  [2, 3, 4, 4],
  [4, 5, 6, 4],
  [4, 5, 6, 4],
];

const getSum = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 'no work';
  const len = arr[0].length;
  let buf = arr.flat(1);
  let sum = 0;
  for (let i = 0; i < buf.length; i += len + 1) {
    sum += buf[i];
  }

  return sum;
};

const getSum1 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 'no work';
  const len = arr[0].length - 1;
  // let buf = arr.flat(1);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i] + arr[i][len - i];
  }

  console.log(len);
  return sum;
};

console.log(getSum1(m));
// ==================

// подобрать сумму двух элементов равную целевому элементу
// если нет вернуть -1

function twoSum(arr, tar) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    let diff = tar - curr;
    if (seen[diff] !== undefined) {
      let indPrev = seen[diff];
      return [indPrev, i];
    }

    seen[curr] = i;
  }

  return [-1, -1];
}

console.log(twoSum([1, 2, 3, 4, 45], 5));

// ======================House Robber
// www.codewars.com/kata/5c6f9cbe4185db000c4f1d61/javascript

//вор обворовывает дома но не может обработать рядом стоящие
//найти оптимальный вариант работы вора у домов разная ценность

// [h0, h1, h2, h3, h4, h5, h6, h7, h8]
// [(1, 4, 2, 6, 7, 3, 5, 3, 3)];

// s(n) = max(
//   H(n) + s(n - 2),
//   0+s(n-1)
// )

function steal(houses) {
  if (houses.length === 0) {
    return 0;
  }

  if (houses.length === 1) {
    return houses[0];
  }

  if (houses.length === 2) {
    return Math.max(houses[0], houses[1]);
  }

  var know = {};
  know[0] = houses[0];
  know[1] = Math.max(houses[0], houses[1]);
  return solve(houses, houses.length - 1, know);
}

function solve(houses, cur, know) {
  if (know[cur] !== undefined) {
    return know[cur];
  }

  var s2 = solve(houses, cur - 2, know);
  var s1 = solve(houses, cur - 1, know);
  var treasure = Math.max(houses[cur] + s2, 0 + s1);
  know[cur] = treasure;
  return treasure;
}

function steal2(houses) {
  if (houses.length === 0) {
    return 0;
  }

  if (houses.length === 1) {
    return houses[0];
  }

  if (houses.length === 2) {
    return Math.max(houses[0], houses[1]);
  }

  var s2 = houses[0];
  var s1 = houses[1];

  for (let i = 2; i < houses.length; i++) {
    var cur = Math.max(houses[i] + s2, s1);
    s2 = s1;
    s1 = cur;
  }
  return s1;
}
// millenniumevil

// =================
// проверить на уникальность строки

// const isNewStr = (str) => {
//   if (
//     typeof str === 'undefined' ||
//     typeof str === 'null' ||
//     typeof str === 'object'
//   )
//     return false;

//   const buf = str && str.toString().toLowerCase().split('');
//   return str.toString() === [...new Set(buf)].join('');
// };

const isNewStr = (str) => {
  if (typeof str === 'string' || typeof str === 'number') {
    const buf = str && str.toString().toLowerCase().split('');
    return str.toString() === [...new Set(buf)].join('');
  }
  return false;
};

const isNewStr1 = (str) => {
  if (typeof str === 'string' || typeof str === 'number') {
    return (
      new Set(str && str.toString().toLowerCase()).size ===
      (str && str.toString().length)
    );
  }
  return false;
};

const isNewStr2 = (str) => {
  if (!!str && typeof str !== 'object') {
    const buf = str && str.toString().toLowerCase().split('');
    return str.toString() === [...new Set(buf)].join('');
  }
  return false;
};

console.log(isNewStr('12345')); //true
console.log(isNewStr(12345)); //true
console.log(isNewStr(123455)); //false
console.log(isNewStr()); //false
console.log(isNewStr(null)); //false
console.log(isNewStr({})); //false
console.log(isNewStr([])); //false

// ======================================
// дан двумерный массив, создать объект в который попадут первые уникальные элементы
// первой строки если их нет то null

const arr1111 = [
  [1, 2, 2, 1],
  [2, 4, 5, 6],
  [23, 4, 5, 67],
];

let getObject = (arr) => {
  let buf = [];
  let resObj = {};

  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    arr[i].forEach((el) => {
      if (!obj[el]) {
        obj[el] = 1;
      } else {
        obj[el]++;
      }
    });

    buf = Object.keys(obj).filter((el) => obj[el] === 1);

    // buf = Object.keys(obj)
    //   .map((el) => (obj[el] === 1 ? el : null))
    //   .filter(Boolean);

    resObj[i] = buf.length === 0 ? null : buf[0];
  }
  return resObj;
};

console.log(getObject(arr1111)); //{ '0': null, '1': '2', '2': '4' }

const arr112 = [
  [1, 2, 2, 2, 1],
  [2, 4, 5, 2, 6],
  [23, 4, 5, 23, 67],
];

let getObject1 = (arr) => {
  let res = {};
  for (let i = 0; i < arr[0].length; i++) {
    let el = arr[0][i];
    console.log(arr[0], el);
    if (!res[el]) {
      res[i] = el;
    }
  }
  return res;
};

console.log(getObject1(arr112)); //{ '0': null, '1': '2', '2': '4' }

const arr113 = [
  [1, 2, 2, 1],
  [2, 4, 5, 6],
  [23, 4, 5, 67],
];

let getObject3 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let buf = null;
    for (let j = 0; j < arr[i].length; j++) {
      let count = arr[i].filter((item) => item === arr[i][j]).length;
      if (count === 1) {
        buf = arr[i][j];
        break;
      }
    }
    obj[i] = buf;
  }
  return obj;
};

console.log(getObject3(arr113)); // { '0': null, '1': 2, '2': 23 }

const arr114 = [
  [1, 2, 2, 1],
  [2, 4, 5, 6],
  [23, 4, 5, 67],
];

// const getEl = (arr) => {
//   let buf = null;
//   for (let j = 0; j < arr.length && buf === null; j++) {
//     const count = arr.filter((item) => item === arr[j]).length;
//     if (count === 1) {
//       buf = arr[j];
//     }
//   }
//   return buf;
// };

// const getEl = (arr) =>
//   arr.find((item) => arr.filter((el) => el === item).length === 1) || null;

const arr115 = [
  [1, 2, 2, 1],
  [2, 4, 5, 6],
  [23, 4, 5, 67],
];

const getEl = (arr) => {
  const obj = {};
  for (const item of arr) {
    obj[item] = (obj[item] || 0) + 1;
  }
  console.log(obj);

  for (const item of arr) {
    if (obj[item] === 1) {
      return item;
    }
  }
  return null;
};

const getObject4 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = getEl(arr[i]);
  }
  return obj;
};

console.log(getObject4(arr115)); // { '0': null, '1': 2, '2': 23 }
// ============
// 1- Дан двумерный массив из чисел. Необходимо создать объект, где ключами будут номера строк, а значениями:
// 1) первое оригинальное значение строки или null, если такого нет
// 2) максимальное значение в строке
// 3) сумма нечетных элементов в строке
// 4) количество отрицательных элементов в строке
// 5) сумма первого и последнего элементов строки

// 1)первое оригинальное значение строки или null, если такого нет

const arr116 = [
  [1, 2, 2, 1],
  [2, 4, 5, 6],
  [23, 4, 5, 67],
];

const getEl1 = (arr) => {
  const obj = {};

  arr.forEach((el) => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  });
  console.log(obj);

  for (const item of arr) {
    if (obj[item] === 1) {
      return item;
    }
  }
  return null;
};

const getObject5 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = getEl1(arr[i]);
  }
  return obj;
};

console.log(getObject5(arr116)); // { '0': null, '1': 2, '2': 23 }

// 2) максимальное значение в строке

const arr2 = [
  [1, 2, 2, 1],
  [2, 4, 5, 6],
  [23, 4, 5, 67],
];

const getObject6 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = Math.max(...arr[i]);
  }
  return obj;
};

console.log(getObject6(arr2)); // { '0': 2, '1': 6, '2': 67 }

// 3) сумма нечетных элементов в строке

const arr3 = [
  [1, 2, 2, 1],
  [2, 4, 5, 6],
  [23, 4, 5, 67],
];

const getObject7 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i].reduce((acc, el) => acc + (el % 2 !== 0 ? el : 0), 0);
  }
  return obj;
};

console.log(getObject7(arr3)); // { '0': 2, '1': 5, '2': 95 }

// 4) количество отрицательных элементов в строке

const arr4 = [
  [1, -2, 2, 1],
  [2, -4, -5, 6],
  [23, -4, -5, -67],
];

const getObject8 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i].reduce((acc, el) => acc + (el < 0 ? 1 : 0), 0);
  }
  return obj;
};

console.log(getObject8(arr4)); // { '0': 1, '1': 2, '2': 3 }

// 5) сумма первого и последнего элементов строки

const arr5 = [
  [1, -2, 2, 1],
  [2, -4, -5, 6],
  [23, -4, -5, -67],
];

const getObject9 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i][0] + arr[i].at(-1);
  }
  return obj;
};

console.log(getObject9(arr5)); // { '0': 1, '1': 2, '2': 3 }

// 2 - Определить сколько недель и дней осталось до Нового Года

const getWeekDay = () => {
  const dateNow = new Date();

  const startDate = new Date(dateNow.getFullYear() + 1, 0, 2);
  const buf = startDate - dateNow;

  const numDay = Math.floor(buf / (1000 * 60 * 60 * 24));
  const numWeek = Math.floor(buf / (1000 * 60 * 60 * 24 * 7));

  return `осталось дней: ${numDay}, недель : ${numWeek} до конца года`;
};

console.log(getWeekDay()); //осталось дней: 32, недель : 4 до конца года

// =========

// Есть ладья, с произвольным местом на доске (задается изначально), поле input (text), кнопка "Переместить". В input вводится адрес клетки, куда надо переместить фигуру. При нажатии на кнопку, если перемещение возможно, меняется положение ладьи, если нет, то выводится сообщение

let start = 'a1';
const width = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const heigh = ['1', '2', '3', '4', '5', '6', '7', '8'];

function getCoord(str) {
  if (typeof str !== 'string') {
    console.log('no string');
    return;
  }

  const startBuf = start;
  const [w, h] = str.split('');
  if (!width.includes(w) || !heigh.includes(h)) {
    console.log('no address');
    return;
  }
  const [wS, hS] = start.split('');

  if (w !== wS && h === hS) start = `${w}${h}`;

  if (w === wS && h !== hS) start = `${w}${h}`;
  console.log(start === startBuf ? 'error' : ` ${startBuf}=> ${start}`);
}

getCoord('a2');
getCoord('b2');
getCoord('a9999');
getCoord({});
