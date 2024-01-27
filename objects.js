let arr = [1, 2, 3, 4];
console.log(Object.getOwnPropertyNames(arr)); //['0', '1', '2', '3', 'length']
console.log(Object.keys(arr)); //['0', '1', '2', '3']

let obje = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
console.log(Object.getOwnPropertyNames(obje)); //['0', '1', '2', '3','4']
console.log(Object.keys(obje)); //['0', '1', '2', '3','4']

// ====================================
let person = {
  name: 'John',
  age: 21,
};

// console.log(person[name]); //name is not defined
// console.log(person['name']);//John

let obj = {
  name: 'piter',
  logger() {
    console.log('keys:', Object.keys(this));
  },

  logArray() {
    Object.keys(this).forEach((el) => console.log(`${el}: ${this[el]}`));
  },

  logFunc() {
    let x = this; // this в function создает свой контекст потому надо передать его через переменную
    Object.keys(this).forEach(function (key) {
      console.log(`${key}: ${x[key]}`);
    });
  },
  paint(st = false, mid = false, end = false) {
    if (st) {
      console.log('===start===');
    }

    Object.keys(this).forEach((key, index, arr) => {
      console.log(`${key}: ${this[key]}`);
      if (mid && index !== arr.length - 1) {
        console.log('=====');
      }
    });

    if (end) {
      console.log('===end===');
    }
  },
};

obj.logger(); //keys: [ 'name', 'logger', 'logArray', 'logFunc', 'paint' ]

obj.paint.call(person, true, true, true);
//===start===
//name: John
//=====
//age: 21
//===end===

// obj.logArray.call(person)
// obj.logFunc.call(person)

// obj.paint.call(person, true, true, true)

// log()
// obj.logger.call(person)

let persons = {
  name: 'John',
  age: 21,
};

function log() {
  // console.log(Object.keys(this).forEach(el => console.log(`${el}: ${this[el]}`)))
  console.log(this.name);
}

// log()

log.call(persons);
// let b = log.bind(persons)

// b()

// ========================================

// проверка на объеткы т е через var a ={a:1}
let b = a.a;

//написать ф-ю гет получения через фетч данных и если 5 раз не прошло то фэлс

// написать функцию компоузe

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;
const times3 = (x) => x * 3;

// console.log(compose(square, times2)(2) === square(times2(2))); //true
// console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));
// console.log(compose(square, times2, times3, sum)(3, 4) === square(times2(times3(sum(3, 4)))));

// function compose(...arg) {
//   // let arr = ...arguments
//   let res = arg.reduce((acc, el) => acc + el, 0)
//   return function (x) {
//     return x + res
//   }
// }

const compose =
  (...funcs) =>
  (arg) =>
    funcs.reduceRight((prevResult, func) => func(prevResult), arg);

console.log(compose(square, times2)(2));

// =====================================================
//https://www.youtube.com/watch?v=aFxQvCqrUC0&t=442s

// 1) глобальный контекст
console.log(this); //window

// 2) контекст внутри функции
('use strict');

function foo() {
  console.log(this);
}

foo(); //window, а если с use strict то undefined

// 3) функция как метод в объекте

const obj1 = {
  a: 111,
  foo1() {
    console.log(this);
  },
  foo2() {
    console.log(this.a);
  },
  foo3: () => {
    console.log(this);
  },
  foo4: () => {
    console.log(this.a);
  },
};

obj1.foo1(); //{ a: 111, foo1: [Function: foo1], foo2: [Function: foo2], foo3: [Function: foo3], foo4: [Function: foo4] }
obj1.foo2(); //111
obj1.foo3(); //window
obj1.foo4(); //undefined

// 4) вызов функции с привязкой к контексту

const obj3 = {
  a: 100,
};

function foo3(x = 10) {
  if (x < 0) {
    console.log(this.a);
  } else {
    console.log(this.a / 2);
  }
}

foo3(); //NaN

foo3.call(obj3, 10); //50
foo3.apply(obj3, [-10]); //100

let a3 = foo3.bind(obj3, 10);
a3(); //50

// 5) вызов функции как конструктора с исп new

function Foo4(title, price) {
  this.title = title;
  this.price = price;
  // console.log(this);
  // return this;//писать не обязательно т к ф-я с new возвращает созданный объект
}

let a4 = new Foo4('aaa0', 2);
let a5 = new Foo4('aaa', 3);
console.log(a4); //Foo4 { title: 'aaa0', price: 2 }
console.log(a5); //Foo4 { title: 'aaa', price: 3 }

//стрелочные нет своего this берется из внешней ф-и если ее нет то win

const obj6 = {
  a: 111,
  foo1() {
    console.log(this);
  },

  foo2: () => {
    console.log(this);
  },
};

obj6.foo1(); //{ a: 111, foo1: [Function: foo1], foo2: [Function: foo2] }
obj6.foo2(); //window

const obj7 = {
  hello: 'hi',
  first: ['peter', 'ivan'],
  foo1() {
    this.first.forEach(function (name) {
      console.log(`${this.hello} ${name}`);
    });
  },
  foo11() {
    this.first.forEach(function (name) {
      console.log(`${this.hello} ${name}`);
    }, this);
  },
  foo2() {
    this.first.forEach((name) => {
      console.log(`${this.hello} ${name}`);
    });
  },
};

obj7.foo1(); //undefined peter   undefined ivan
obj7.foo11(); //hi peter   hi ivan
obj7.foo2(); //hi peter   hi ivan

const obj8 = {
  hello: 'hi',
  getHi: function () {
    setTimeout(function () {
      console.log(`oh ${this.hello}`);
    }, 0);
  },
};

obj8.getHi(); // oh undefined т к макротаск вызывается уже после а в this обьект window у которого нет свойства hello

const obj81 = {
  hello: 'hi',
  getHi: function () {
    setTimeout(
      function () {
        console.log(`oh ${this.hello}`);
      }.bind(this),
      0
    );
  },
};

obj81.getHi(); // oh hi тут привязали bind через (this)

const obj9 = {
  hello: 'hi',
  getHi: function () {
    setTimeout(() => {
      console.log(`oh ${this.hello}`);
    }, 0);
  },
};

obj9.getHi(); // oh hi тут берется this с родительской getHi у кот видит hello

//стрелочные функции нельзя использовать с new
const Foo10 = (title, price) => {
  this.title = title;
  this.price = price;
  console.log(this);
  return this;
};

let a10 = new Foo10('aaa0', 2); //TypeError: Foo10 is not a constructor

// ------------------------------------------Descriptors
const obj11 = { a: 12 };

console.log(Object.getOwnPropertyDescriptors(obj11)); //a: { value: 12, writable: true, enumerable: true, configurable: true }

console.log(Object.keys(obj11)); //[ 'a' ]

// Object.seal(obj11); // предотвращая добавление новых свойств к объекту. Предотвращает удаление свойств объекта
// console.log(Object.getOwnPropertyDescriptors(obj11));//a: { value: 12, writable: true, enumerable: true, configurable: false }
// console.log(Object.isSealed(obj11)); //true

// Object.freeze(obj11);
// console.log(Object.getOwnPropertyDescriptors(obj11));// a: { value: 12, writable: false, enumerable: true, configurable: false }
// console.log(Object.isFrozen(obj11));//true

Object.preventExtensions(obj11); //предотвращает добавление новых свойств к объекту
obj11.b = 4;
console.log(obj11);

// после seal freeze - дескрипторы не поменять появляется ошибка

console.log(obj11); //{ a: 12 }

Object.defineProperty(obj11, 'a', {
  value: 0,
  writable: false, // свойство может быть изменено?
  enumerable: false, // свойство будет перечисляемым при итерации ?
  configurable: true, // свойство может быть удалено и его дескриптор может быть изменен?
});

console.log(Object.getOwnPropertyDescriptors(obj11)); //a: { value: 0, writable: false, enumerable: false, configurable: true }

obj11.a = 15;
console.log(obj11.a); //0
console.log(Object.keys(obj11)); //[]
// ---------------

const obj12 = {
  a: 1,
  b: 2,
};

console.log(Object.keys(obj12)); //[ 'a', 'b' ]

Object.defineProperties(obj12, {
  a: {
    value: true,
    enumerable: false,
  },
  b: {
    value: 'Hello',
    writable: false,
    enumerable: true,
  },
});

console.log(Object.getOwnPropertyDescriptors(obj12)); //a:{ value: true, writable: true, enumerable: false, configurable: true }, b:{ value: 'Hello', writable: false, enumerable: true, configurable: true}
console.log(Object.keys(obj12)); //[b] т к /a:{ enumerable: false }
console.log(Object.getOwnPropertyNames(obj12)); //['a', 'b']; работает перечисление несмотря на enumerable: false
