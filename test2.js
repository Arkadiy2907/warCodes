// =============================

(function () {
  console.log('start');
  for (var i = 0; i < 100; i++) {
    ((i) => setTimeout(() => console.log(i), 0))(i);
  }
  console.log('end');
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

// ==========================================

const bar = [1, 2, 3, 4];
let foo = bar;
foo.push(6);
console.log(bar);

console.log(NaN + 0 + null + 1);
console.log(undefined >= 0); //false
console.log(null <= 0); //true
console.log(null == 0); //false
console.log(typeof null); //object
console.log(NaN == 0); //false
console.log(typeof NaN); //number
console.log(!![]); //true
console.log(!!{}); //true
console.log([] + null + 1); //null1
// [] is converted to '' (empty string) using the toString() method.
// '' + null results in the string 'null'.
// 'null' + 1 concatenates the string 'null' with the string representation of the number 1, resulting in the string 'null1'.
console.log([1, 2, 3].toString()); //123
console.log({}.toString()); //[object Object]
console.log({ a: 1 }.toString()); //[object Object]
console.log('' ?? 'a'); //'' т к не  null undefined

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
        console.log('плохой ответ');
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
  'вертикаль',
  'кильватер',
  'апельсин',
  'спаниель',
  'австралопитек',
  'ватерполистка',
  'кластер',
  'сталкер',
  'стрелка',
  'корабль',
];

const getSr = (arr) => {
  const sortedWords = arr.map((word) => word.split('').sort().join(''));
  const anagrams = {};
  sortedWords.forEach((word, index) => {
    if (anagrams[word]) {
      anagrams[word].push(arr[index]);
    } else {
      anagrams[word] = [arr[index]];
    }
  });
  return Object.values(anagrams).filter((group) => group.length > 1);
};

console.log(getSr(arr));

// const getSr = (arr) => {
//   let buf = [];
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     buf.push(arr[i].split("").sort().join(""));
//   }

//   buf.forEach((el, i) => {
//     if (!obj[el]) {
//       arr[i + 1];
//     }
//   });
// };

obj = {
  вертикаль: 'кильватер',
  кластер: '',
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
  const vowels = 'aeiou';
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// ========================

var globalVar = 'global';
var outerVar = 'outer';

function outerFunc(outerParam) {
  function innerFunc(innerParam) {
    console.log(globalVar, outerParam, innerParam);
  }
  return innerFunc;
}

const x1 = outerFunc(outerVar);
outerVar = 'outer-2';
globalVar = 'guess';
x1('inner'); //guess outer inner

// =======================
// есть два отсортированных массива надо их соединить отсоированнм и получить два
// минимальных и два максимальных со сложностью О(n)

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 9];

// const getArr = (x, y) => {
//   const buf = [...x, ...y].sort((a, b) => a - b);
//   return `min ${buf[0]} ${buf[1]} max ${buf.at(-2)} ${buf.at(-1)}`;
// };

// console.log(getArr(arr1, arr2));

const getArr1 = (x, y) => {
  let buf = [];
  let i = 0;
  let j = 0;
  while (i < x.length || j < y.length) {
    //  if (x[i] < y[j]) {
    if (i < x.length && (j >= y.length || x[i] < y[j])) {
      buf.push(x[i]);
      i++;
    } else {
      buf.push(y[j]);
      j++;
    }
  }
  return buf;
  return `min ${buf[0]} ${buf[1]} max ${buf[buf.length - 2]} ${
    buf[buf.length - 1]
  }`;
};

console.log(getArr1(arr1, arr2));

const getArr2 = (x, y) => {
  let buf = [];
  let i = 0;
  let j = 0;

  x.push(Infinity);
  y.push(Infinity);

  while (x[i] !== Infinity || y[j] !== Infinity) {
    if (x[i] <= y[j]) {
      buf.push(x[i]);
      i++;
    } else {
      buf.push(y[j]);
      j++;
    }
  }
  return buf;
};

console.log(getArr2(arr1, arr2));

// https://www.youtube.com/watch?v=mI6Jcfsgma4&t=98s

let a = 1;
function foo4() {
  console.log(a);
  let a = 2;
}
// a = 5;

foo4(); //ReferenceError: Cannot access 'a' before initialization

var b = 1;
function foo5() {
  console.log(b);
  var b = 2;
}
var b = 3;

foo5(); //undefined
// ====================================================================

var l = 25;
var x = 11;

function bar(foo) {
  var x = 30;
  foo();
}

function foo() {
  console.log('x', x); //11
}

foo.x = 20;
bar.x = 40;

bar(foo);
l.x = 100;

console.log('foo.x', foo.x); //20
console.log(bar.l); //undefined
console.log(l.x); //undefined
