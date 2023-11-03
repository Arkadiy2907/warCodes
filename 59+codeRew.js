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

  return count;
};

console.log(getSum(m));
