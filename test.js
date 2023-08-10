let obj = {
  0: 1,
  0: 2,
};

console.log(obj["0"] + obj[0]);
// ----------------------------------------
function User() { }

let vasya = new User();

vasya.__proto__.name = "Vasya";

// ------------------------------------------

let f = (function (x) {
  console.log(x);
})(
  (function () {
    f(1);
  })()
);

MyObj = function (name) {
  this._myParam = 8;
};

MyObj.prototype = {
  init: function (params) {
    if (params.hasOwnProperty("myParam")) {
      this._myParam = params.myParam;
    }
  },
  incParam: function () {
    this._myParam++;
    setTimeout(function () {
      console.log(this._myParam);
    });
  },
};

MyObj.create = function (params) {
  var self = new MyObj();
  self.init(params);
  return self;
};

let params = { myParam: 10 };
let as = MyObj.create(params);
console.log(as.incParam());

let arr = [22, 501, 13, 612, 11];

let sum = arr.reduce((a, c) => (c % 2 !== 0 && c > a ? c : a), 0);

console.log(sum);

// ============================

console.log(1);
const aaa = new Promise((res, rej) => res(console.log(2)));

aaa.then((res) => console.log(3));

setTimeout(() => {
  console.log(4);
}, 10);

aaa.then((res) => console.log(5));

console.log(6);

// ============================

var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); //456

// В данном фрагменте кода объекты b и c имеют свойства key со значениями «b» и «c» соответственно.
// В JavaScript, когда объект используется в качестве ключа свойства, он преобразуется в строку
//  с помощью метода объекта toString. Метод объекта toString по умолчанию возвращает строку вида[object Object].
// Итак, a[b] = 123 задает значение 123 для свойства[object Object] объекта a, а a[c] = 456 устанавливает значение 456
//  для свойства[object Object] того же объекта a.Поэтому при выполнении console.log(a[b])
// он извлекает значение свойства[object Object] из объекта a, равное 456.
// Следовательно, вывод приведенного выше кода равен 456.

// ============================

// Создайте функцию, которая принимает строку и один символ и возвращает целое число,
// соответствующее количеству вхождений второго аргумента в первом.Если вхождений не найдено, должно быть возвращено число 0.

function strCount(str, letter) {
  let pos = 0;
  let res = [];

  while (true) {
    let foundPos = str.indexOf(letter, pos);
    if (foundPos == -1) break;

    pos = foundPos + 1;

    res.push(foundPos);
  }

  return res.length !== undefined ? res.length : 0;
}

function strCount(str, letter) {
  return str.split(letter).length - 1;
}

function strCount(str, letter) {
  return str.split("").filter((c) => c == letter).length;
}

console.log(strCount("Helloo", "o"));

// ============================

function isLeapYear(year) {
  // TODO

  // let one = parseInt(String(year / 4)) == year / 4;
  // let two = (year % 4 == 0)
  // console.log(one, two)
  let one = year % 4 == 0;
  let two = year % 100 == 0;
  let three = year % 400 == 0;

  // let res = year % 100 == 0 ? false : true;

  return one && !two && three ? true : false;
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2000));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));

// ==================================

// Тестовое задание

// Доктор принимает с 9 утра до 9 вечера.
// Часть времени у него занята: приемы, обед, уборка кабинета.
// Требуется сформировать список свободных окон по 30 минут.

//   busy = [
//     {
//       'start': '10:30',
//       'stop': '10:50'
//     },
//     {
//       'start': '18:40',
//       'stop': '18:50'
//     },
//     {
//       'start': '14:40',
//       'stop': '15:50'
//     },
//     {
//       'start': '16:40',
//       'stop': '17:20'
//     },
//     {
//       'start': '20:05',
//       'stop': '20:20'
//     }
//   ]

const start = "09:00";
const end = "21:00";
const interval = 30;

const busy = [
  { start: "10:30", stop: "10:50" },
  { start: "18:40", stop: "18:50" },
  { start: "14:40", stop: "15:50" },
  { start: "16:40", stop: "17:20" },
  { start: "20:05", stop: "20:20" },
];

const busySlots = busy.map((slot) => ({
  start: new Date(`2022-01-01 ${slot.start}`).getTime(),
  end: new Date(`2022-01-01 ${slot.stop}`).getTime(),
}));

let freeSlots = [{ start: new Date(`2022-01-01 ${start}`).getTime(), end: 0 }];

busySlots.forEach((slot) => {
  const lastSlot = freeSlots[freeSlots.length - 1];

  if (slot.start > lastSlot.end) {
    freeSlots.push({ start: lastSlot.end, end: slot.start });
  }

  if (slot.end > lastSlot.end) {
    lastSlot.end = slot.end;
  }
});

freeSlots.push({ start: new Date(`2022-01-01 ${end}`).getTime(), end: 0 });

freeSlots = freeSlots.filter(
  (slot) => slot.end - slot.start >= interval * 60000
);

const freeSlotsFormatted = freeSlots.map((slot) => ({
  start: new Date(slot.start).toLocaleTimeString("ru-RU", {
    hour: "numeric",
    minute: "numeric",
  }),
  end: new Date(slot.end).toLocaleTimeString("ru-RU", {
    hour: "numeric",
    minute: "numeric",
  }),
}));

console.log(freeSlotsFormatted);

// =============================================

console.log("Start");

setTimeout(() => {
  console.log("Timeout1");
}, 0);

Promise.resolve().then(() => {
  console.log("Then1");
});

const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 1000);

myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 100);

myPromise(1000).then((res) => console.log("in Promise 3"));

Promise.resolve().then(() => setTimeout(() => console.log("Timeout2")));

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.reject(3).catch(console.log);

myPromise(2000).then((res) => console.log("in Promise 2"));

setTimeout(() => console.log("in setTimeout3"), 2000);

const p1 = new Promise((resolve) => {
  console.log("Promise2");
  resolve();
  console.log("Promise3");
});

p1.then(() => {
  console.log("Then2");
});

queueMicrotask(() => {
  console.log("QueueMicrotask");
});

console.log("End");

// Start
// Promise2
// Promise3
// End
// Then1
// 3
// Then2
// QueueMicrotask
// Timeout1
// 4
// Timeout2
//   in setTimeout2
//   in setTimeout1
//   in Promise 1
//   in Promise 3
//   in Promise 2
//   in setTimeout3
// ====================================================

// const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })
// setTimeout(() => console.log('in setTimeout1'), 1000);
// myPromise(1000).then(res => console.log('in Promise 1'));
// setTimeout(() => console.log('in setTimeout2'), 100);
// myPromise(2000).then(res => console.log('in Promise 2'));
// setTimeout(() => console.log('in setTimeout3'), 2000);
// myPromise(1000).then(res => console.log('in Promise 3'));
// setTimeout(() => console.log('in setTimeout4'), 1000);
// myPromise(5000).then(res => console.log('in Promise '));

// in setTimeout2
//   in setTimeout1
//   in Promise 1
//     in Promise 3
//       in setTimeout4
//       in Promise 2
//         in setTimeout3
//         in Promise

// ==================================

// const [isDark, setIsDark] = useState(true);

// useEffect(() => {
//   console.log("Effect");
// }, []);

// useEffect(() => {
//   console.log("Effect2");
// }, [isDark]);

// useLayoutEffect(() => {
//   console.log("LayoutEffect");
// }, []);

// console.log("Render");

// return (
//   <>
//     <div>{isDark.toString()}</div>
//     <button onClick={() => setIsDark((prev) => !prev)}>Toggle them</button>
//   </>
// );

// при первом рендоре
//  Render
//  LayoutEffect
//  Effect

// при нажатии клавиши button
//  Render1
//  Effect2

//=====================================
let str1 = "asdfadg";
function maxRecurringChar(str) {
  const obj = {};

  let countMax = 0;
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }

    if (countMax < obj[str[i]]) {
      countMax = obj[str[i]];
      res = str[i];
    }
  }

  return res;
}

console.log(maxRecurringChar(str1));

// ===========================
//ф-я берет из переменной свое лексическое окружение результат msk

const city = "msk";
function getCity() {
  console.log(city);
}

setTimeout(() => {
  const city = "ekt";
  getCity();
}, 0);

// ============================

// Необходимо реализовать функционал передвижения красного квадрата по нажатию на кнопки(влево, вправо).
//   Требования:
// 1. При нажатии кнопки "вправо" квадрат будет перемещаться к правой границе экрана;
// 2. При нажатии кнопки "влево" квадрат будет перемещаться к левой границе экрана;
// 3. Перемещение должно быть анимированным, длительность анимации составляет одну секунду;
// 4. При изменении размера окна квадрат не должен выходить за границы окна.

//   <style>
//     #square {
//       position: absolute;
//       background-color: red;
//       width: 50px;
//       height: 50px;
//       transition: all 1s ease-in-out;
//     }
//   </style>
// </head>

// <body>
//   <button onclick="moveLeft()">Влево</button>
//   <button onclick="moveRight()">Вправо</button>
//   <div id="square"></div>

//   <script>
//     function moveRight() {
//       let square = document.getElementById("square");
//       let currentPosition = parseInt(square.style.left) || 0;
//       let newPostion = currentPosition + 50;

//       if (newPostion + square.offsetWidth <= window.innerWidth) {
//         square.style.left = newPostion + "px";
//       }
//     }

//     function moveLeft() {
//       let square = document.getElementById("square");
//       let currentPosition = parseInt(square.style.left) || 0;
//       let newPostion = currentPosition - 50;

//       if (newPostion >= 0) {
//         square.style.left = newPostion + "px";
//       }
//     }
//   </script>
// </body>

// ===============================
// отсортировать не чет по возрос а четные оставить на месте
// const arr1 = [999, 22, 3, -47, 5, 2, 58, 7, 4];

// const sortArr = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       let num = arr[i];

//       for (let k = i; k < arr.length; k++) {
//         if (arr[k] % 2 === 1) {
//           if (num > arr[k]) {
//             // console.log(arr[k], 'num=',num)
//             let a = num;
//             num = arr[k];
//             arr[k] = a;
//           }
//         }
//       }
//       // console.log("arr",arr)
//     }
//   }
//   return arr
// };

// console.log(sortArr(arr1))

// const arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// const sortArr = arr => {

//   let oddArr = [];
//   let evenArr = [];

//   arr.forEach(el => el % 2 === 0 ? evenArr.push(el) : oddArr.push(el))

//   oddArr.sort((a, b) => a - b);

//   return arr.map(el => el % 2 === 0 ? evenArr.shift() : oddArr.shift());
// }

const arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const sortArr = (arr) => {
  const oddArr = arr.filter((el) => el % 2 !== 0).sort((a, b) => a - b);
  return arr.map((el) => (el % 2 !== 0 ? oddArr.shift() : el));
};

// const sortArr = arr => arr.reduce((acc, val) => val % 2 === 0 ? [...acc.slice(0, i), val, ...acc.slice(i)] : acc, []).reverse();

console.log(sortArr(arr1));

// ==================================

const str5 = "asd";
const str6 = "dsa";
const str7 = "aqd";

let getBool = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  return changeStr(str1) === changeStr(str2);
};

function changeStr(str) {
  console.log(str.split("").sort((a, b) => a - b));
  console.log(str.split("").sort());

  return str
    .split("")
    .sort((a, b) => a - b)
    .join("");
}

console.log(changeStr(str5));

console.log(getBool(str5, str6));

"asd".split("").sort((a, b) => a - b);
"asd".split("").sort();

// ==========
//www.codewars.com/kata/602db3215c22df000e8544f0/train/javascript

// Ваша задача состоит в том, чтобы написать функцию, которая принимает в качестве аргументов
// три целых числа a, , bи cи возвращает значение, True
// если ровно два из трех целых чисел являются положительными числами(больше нуля),
// и - Falseв противном случае.

function twoArePositive(a, b, c) {
  let buf = [...arguments].filter((el) => el > 0).length;
  return buf <= 1 || buf === 3 ? console.log(false) : console.log(true);

  // Happy Coding
}

function twoArePositive(a, b, c) {
  return (a > 0) + (b > 0) + (c > 0) == 2;
}

function twoArePositive(a, b, c) {
  return [...arguments].filter((i) => i > 0).length === 2;
}

function twoArePositive(a, b, c) {
  return [a, b, c].filter((val) => val > 0).length === 2;
}

const twoArePositive = (...a) => a.filter((b) => b > 0).length === 2;

twoArePositive(2, 4, -3); //== true;
twoArePositive(-4, 6, 8); //== true;
twoArePositive(4, -6, 9); //== true;
twoArePositive(-4, 6, 0); //== false;
twoArePositive(4, 6, 10); //== false;
twoArePositive(-14, -3, -4); // == false;

// console.log(twoArePositive(2, 4, -3));

// ====================================================================

// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

let sumMul = (a, b) => {
  let buf = a;
  let arr = [a];

  if (b <= a) return "INVALID";

  for (let i = 0; buf < b; i++) {
    buf += a;
    arr.push(buf);
  }

  return arr.slice(0, arr.length - 1).reduce((acc, el) => acc + el, 0);
};

function sumMul(n, m) {
  if (n >= m) return "INVALID";

  var sum = 0;
  for (var i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}

sumMul(2, 9); // ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13); // ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123); // ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7); //==> "INVALID"
// ===========================================

https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript

// Получив число n, нарисуйте лестницу, используя букву "I", n 
// высокую и nширокую, причем самая высокая из них находится вверху слева.

// Например, n = 3результат:

function drawStairs(n) {
  let answer = '';

  function myRepeat(str, k) {
    let res = ''
    for (let j = 0; j < k; j++) {
      res += str
    }

    return res;
  }


  let i = 0;
  let str = 'I'
  let spaseZero = ' '
  while (i < n) {
    answer += `${(myRepeat(spaseZero, i) + str)}\n`
    i++
  }

  return answer;
}


function drawStairs(n) {
  let answer = '';

  let i = 0;
  let str = 'I'
  let spaseZero = ' '
  while (i < n) {
    answer += `${(' '.repeat(i) + str)}\n`
    i++
  }

  return answer;
}

function drawStairs(n) {
  let answer = '';

  for (let i = 0; i < n; i++) {
    answer += ' '.repeat(i) + 'I\n';
  }

  return answer;
}

function drawStairs(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = `${' '.repeat(i)}I`;
  }

  return result.join('\n');
}

console.log(drawStairs(5))

// ============================================
// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

// О, нет! Номер перепутан с текстом.
// Ваша цель — извлечь число из текста, сможете ли вы вернуть число в исходное состояние ?

//   Задача
// Ваша задача — вернуть число из строки.

var filterString = function (value) {
  return +value.split('').filter(el => !isNaN(parseInt(el))).join("")
}

// var filterString = function (value) {
// return +value.match(/\d/g).join('');
// }


// var filterString = value => +value.split('').filter(el => !isNaN(parseFloat(el))).join("").toString();

console.log(filterString("6as5720byc0d4na15p400"))//
console.log(filterString("a1b2c3"))//, 123,
console.log(filterString("aa1bb2cc3dd"))

// console.log(isNaN(parseFloat('a')));