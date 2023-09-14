// =============================

(function () {
  console.log("start");
  for (var i = 0; i < 100; i++) {
    ((i) => setTimeout(() => console.log(i), 0))(i);
  }
  console.log("end");
})()(
  //start end 0,1,2-99

  // ================================

  function () {
    var f = [];
    for (var i = 0; i < 100; i++) {
      f[i] = () => console.log(i);
    }
    f[9]();
    f[8]();
  }
)(); //100 100

// ====================

setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");
//Создание промиса Конец скрипта Обработка промиса Таймаут
// =========================

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

//1 7 3 5 2 6 4

// =======================

console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);

//1 6 3 5 2 4 7
// =======================

const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });
setTimeout(() => console.log("in setTimeout1"), 1000);
myPromise(1000).then((res) => console.log("in Promise 1"));
setTimeout(() => console.log("in setTimeout2"), 100);
myPromise(2000).then((res) => console.log("in Promise 2"));
setTimeout(() => console.log("in setTimeout3"), 2000);
myPromise(1000).then((res) => console.log("in Promise 3"));
setTimeout(() => console.log("in setTimeout4"), 1000);
myPromise(5000).then((res) => console.log("in Promise "));

const bar = [1, 2, 3, 4];
let foo = bar;
foo.push(6);
console.log(bar);

console.log(undefined >= 0); //false
console.log(null <= 0); //true
console.log(NaN == 0); //false
console.log(!![]); //true
console.log(!!{}); //true

// =====================================
// если 3 раза плохой ответ то вывести console.log(bed res)

// let badResponseCount = 0;

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       badResponseCount++;
//       if (badResponseCount >= 3) {
//         console.log("bad res");
//       }
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Handle the fetched data
//   })
//   .catch(error => {
//     // Handle any errors that occur during the fetch
//     console.log(error);
//   });

let badResponseCount = 0;

async function fetchData() {
  try {
    const response = await fetch(url); // Асинхронный запрос
    if (!response.ok) {
      badResponseCount++;
      if (badResponseCount >= 3) {
        console.log("плохой ответ");
        return; // Выход из функции после 3 плохих ответов
      }
      await fetchData(); // Повторный запуск запроса
    } else {
      const data = await response.json(); // Асинхронное получение данных в формате JSON
      console.log(data); // Обработка данных
    }
  } catch (error) {
    console.log(error); // Обработка ошибок
  }
}

fetchData();

// ====================================================

// Все анаграммы собрать в массивы
// [["вертикаль", "кильватер"], ["апельсин", "спаниель"], ...]

// Надо постараться сделать оптимальный алгоритм

const arr = [
  "вертикаль",
  "кильватер",
  "апельсин",
  "спаниель",
  "австралопитек",
  "ватерполистка",
  "кластер",
  "сталкер",
  "стрелка",
  "корабль",
];

const getSr = (arr) => {
  let buf = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    buf.push(arr[i].split("").sort().join(""));
  }

  buf.forEach((el, i) => {
    if (!obj[el]) {
      arr[i + 1];
    }
  });
};

obj = {
  вертикаль: "кильватер",
  кластер: "",
};
// ==============================

// Дана коллекция чисел, необходимо реализовать функцию, которая находит в ней пару чисел, составляющие заданную сумму

// Надо решить за линейную сложность

// const hasPairWithSum = (arr, sum) => {
//   let res = false;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 1; k < arr.length; k++) {
//       if (arr[i] + arr[k] === sum) break
//       res.arr[i] + arr[k] === sum
//     }
//     return res
//   };
// }

const hasPairWithSum = (arr, sum) => {
  let res = false;
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === sum) {
        res = true;
        break;
      }
    }
    if (res) {
      break;
    }
  }
  return res;
};

console.log(hasPairWithSum([3, 4, 7, 10], 8)); // false
console.log(hasPairWithSum([1, 4, 4, 9], 8)); // true
console.log(hasPairWithSum([-8, 1, 4, 9, 16], 8)); // true

// =============================

Promise.reject("a") // rejected -> a
  .catch((p) => p + "b") // fulfilled -> ab
  .catch((p) => p + "с") //
  .then((p) => p + "d") // abd
  .then((p) => console.log(p));

console.log("f");
// Это связано с тем Promise.reject("a"), что при вызове создается обещание, которое немедленно отклоняется со значением «a».
//  Первый catchблок принимает это отклоненное обещание и возвращает новое обещание, которое выполняется со значением «ab».
// Второй catchблок не выполняется, поскольку предыдущий catchблок уже обработал отклонение.

// Первый thenблок получает выполненное обещание со значением «ab» и возвращает новое обещание, выполненное со значением «abd». Второй thenблок получает это обещание и записывает его значение в консоль.

/// Наконец, console.log("f")оператор выполняется, записывая «f» на консоль перед выполнением цепочки обещаний.

// while (true); будет ли блокировка проги и переполнение стека а при макро и микротаске с рекурсией

const getNumDay = (d, m, y) => {
  // let buf = new Date(y, m, d);
  // let count;
  // console.log('start');

  for (let i = 0; i < m; i++) {
    let myDate = new Date(y, i + 1, 1) - new Date(y, i, 1);

    console.log(new Date(myDate));
  }
};

getNumDay(1, 1, 2023);

// =============================

// Условие: Напишите функцию, которая принимает строку в качестве аргумента и возвращает количество гласных в этой строке.Гласные буквы — это ‘a’, ‘e’, ‘i’, ‘o’, ‘u’.

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// ========================

var globalVar = "global";
var outerVar = "outer";

function outerFunc(outerParam) {
  function innerFunc(innerParam) {
    console.log(globalVar, outerParam, innerParam);
  }
  return innerFunc;
}

const x = outerFunc(outerVar);
outerVar = "outer-2";
globalVar = "guess";
x("inner"); //guess outer inner
