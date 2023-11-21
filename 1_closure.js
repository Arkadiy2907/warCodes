//задача на замыкание исправить код
// i: 6 = arr[undefined]
// i: 6 = arr[undefined]
// i: 6 = arr[undefined]
// i: 6 = arr[undefined]
// i: 6 = arr[undefined]
// i: 6 = arr[undefined]

let arr = [1, 2, 4, 6, 7, 9];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(`i:${i} = arr[${arr[i]}]`);
  });
}

// 1
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(`i:${i} = arr[${arr[i]}]`);
  }, 1000);
}

// 2

for (var i = 0; i < arr.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`i:${j} = arr[${arr[j]}]`);
    }),
      1000;
  })(i);
}

//3

for (var i = 0; i < arr.length; i++) {
  setTimeout(
    (function (i) {
      return function () {
        console.log(`i:${i} = arr[${arr[i]}]`);
      };
    })(i),
    1000
  );
}

//4

for (var i = 0; i < arr.length; i++) {
  setTimeout(
    function (i) {
      console.log(`i:${i} = arr[${arr[i]}]`);
    }.bind(null, i),
    1000
  );
}

// ===================================================
// www.codewars.com/kata/57126304cdbf63c6770012bd/solutions/javascript

https: function isDigit(s) {
  //   console.log(parseFloat(s));
  s = s.trim();
  // console.log(+(s));
  if (isNaN(+s) || s === '') return false;

  return typeof parseFloat(s) === 'number';
}

function isDigit(s) {
  return s == parseFloat(s);
}

console.log(isDigit(' '));
console.log(isDigit('-234.4'));
console.log(isDigit('3'));
console.log(isDigit(' 3 '));
console.log(isDigit('-3.4'));

console.log(isDigit('s2324'));

console.log(isDigit('3-4'));
console.log(isDigit('  3   5'));
console.log(isDigit('3 5'));
console.log(isDigit('zero'));

// ==============================

function foo() {
  let a = (b = 50);
}

foo();
console.log(b); //50

function foo() {
  let a = (b = 50);
}

foo();
console.log(b);

//  let a = (b = 50);
// console.log(a, b);

let obj = { name: 'aaa' };

let { aaa: my = 0 } = { aaa: 'sss' };
// let { aaa: my = 0 } = obj;
console.log(my); //sss

// ==============================

let global = 'global';
let outer = 'outer';

function outerF(outerP) {
  function innerF(innerP) {
    console.log(global, outerP, innerP);
  }

  return innerF;
}

const x = outerF(outer);
outer = '1';
global = '2';

x('3'); //2 outer 3

console.log({}.toString()); //[object Object]
console.log([].toString()); //''
console.log([] + null + 1); //null1
// ==================================

function foo() {
  const x = 10;

  return {
    x: 20,
    bar: () => {
      console.log(this.x);
    },
    baz: function () {
      console.log(this.x);
    },
  };
}

// const obj1 = foo();
// obj1.bar();//undefined т к берется значение из внешнего окружения для стрелки
// obj1.baz();//20

const obj2 = foo.call({ x: 30 });

let y = obj2.bar;
let z = obj2.baz;

y(); //30
// В данном случае, внешнее окружение определяется контекстом,
//  в котором была вызвана функция foo.
// При вызове foo с помощью foo.call({ x: 30 }), контекстом становится объект { x: 30 },
//  поэтому при вызове obj2.bar(), значение переменной x будет равно 30.

z(); //undefined

obj2.bar(); //30
obj2.baz(); //20

// =================
// Анаграмма;
// Нужно написать функцию, которая проверяет,
//  являются ли две строки анаграммами, причем регистр букв не имеет значения.
// Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
const str = (s) => s.toLowerCase().split('').sort().join('');

const anagram = (p1, p2) => (p1 && str(p1) === str(p2)) || false;

console.log(anagram('finder', 'Friend')); //--> true
console.log(anagram('hello', 'bye')); //--> false

//================
// Поиск гласных
// Нужно написать функцию, принимающую строку в качестве аргумента
//  возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».
const vowels = ['a', 'e', 'i', 'o', 'u'];

const findVowels = (s) => {
  let res = 0;
  for (let x of s.toLowerCase()) {
    if (vowels.includes(x)) {
      res++;
    }
  }
  return res;
};

const findVowels1 = (s) => {
  let match = s.match(/[aeiou]/gi);

  return match ? match.length : 0;
  console.log(match);
};

console.log(findVowels1('hello')); // --> 2
console.log(findVowels1('why')); // --> 0

var foo = { bar: 1 };
foo.bar === 1; // true
console.log(typeof foo.toString === 'function'); // true

// ===============
// глубокая проверка объектов на равенство

const deepEqual = (a, b) => {
  if (
    a === null ||
    b === null ||
    typeof a !== 'object' ||
    typeof b !== 'object'
  ) {
    return a === b;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every((key) => bKeys.includes(key) && deepEqual(a[key], b[key]));
};
