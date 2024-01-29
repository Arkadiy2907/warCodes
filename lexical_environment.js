// https://www.youtube.com/watch?v=mI6Jcfsgma4&t=98s

//Замыкание это способность функции сохранять свое лексическое окружение в котором она была создана
//лексич окр - это скрытый объект который состоит из переменных в текущей области видимости и ссылка на внешнее
// лексическое окружение

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
// --------------

let c = 1;

//создание функции
function foo6() {
  console.log(c);
}

//создание функции
const foo7 = () => {
  console.log(c);
};

function foo8(foo) {
  let c = 11;
  foo();
}

foo8(foo6); //1
foo8(foo7); //1
c = 5;
foo8(foo6); //5
foo8(foo7); //5

// Function Declaration мгновенно инициализируется полностью
// Все функции помнят лексическое окружение, в котором они были созданы и смотрят переменные в это лексич окр не на моменте вызова а на моменте создания

// ====================================================================

var l = 25;
let p = 15;
var x = 11;

function bar(foo) {
  var x = 30;
  foo();
}

function foo() {
  console.log('x', x);
}

foo.x = 20;
bar.x = 40;

bar(foo); //11
l.x = 100;
p.c = 19;

console.log('foo.x', foo.x); //20
console.log('foo', foo); //[Function: foo] { x: 20 }
console.log(bar.l); //undefined
console.log(l.x); //undefined Попытка изменения или добавления свойств к примитиву ничего не сделает.
console.log(p.c); //undefined в переменную не добавляется свойство объекта
// При выполнении функции foo выводится значение переменной x, которая равна 11. Это происходит потому, что переменная x внутри функции foo ссылается на глобальную переменную x со значением 11, а не на локальную переменную x, объявленную внутри функции bar.
// У функции foo есть свойство x, которому присвоено значение 20. При обращении к foo.x возвращается значение 20.
// У функции bar нет свойства l, поэтому bar.l возвращает undefined.
// Переменная l не имеет свойства x, поэтому l.x также возвращает undefined.
// --------------

var x = 11;

function bar(foo) {
  x = 30; // тут изм-м глобальную x
  foo();
}

const foo = () => {
  console.log('x', x);
};

// function foo() {
//   console.log('x', x);
// }

bar(foo); //30

// -------------------

let x = 10;
let y = 20;
const foo = (z) => {
  let x = 100;
  return x + y + z;
};

foo(30); // 150
// ------------------

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
// ------------------------

//------привязка по умолчанию
function foo() {
  // console.log(this === window); //true
  console.log(this.aa);
}
var aa = 2;
//  window.aa добавили свойство aa
// черер var у объекта window добавляются к значения
foo(); //2 - не работает в node

//-------неявная привязка

function foo1() {
  console.log(this.aaa); //2
}

const obj1 = {
  aaa: 2,
};

obj1.foo1 = foo1;

obj1.foo1(); //2

//-------явная привязка

function foo2() {
  console.log(this.aaa); //2
}

const foo22 = () => {
  console.log(this.aaa); //2
};

const obj2 = {
  aaa: 2,
};

foo2.bind(obj2)(); //2 привязали и сразу вызвали при помощи ()
foo2.call(obj2); //2 привязали и сразу вызвали

foo22.bind(obj2)(); //undefined
foo22.call(obj2); //undefined
//Стрелочные функции не имеют собственного привязанного значения this и вместо этого наследуют значение this из окружающей области видимости. В данном случае окружающей областью видимости является глобальная область видимости, где у this нет свойства aaa

var aaa = 2; //добавили значене у window.aaa =2
foo22.bind(obj2)(); //2 -но это не работает в node
foo22.call(obj2); //2 -но это не работает в node

// ------- с new
function Foo3(aaaa) {
  this.aaaa = aaaa;
}

const obj3 = new Foo3(2);
console.log(obj3.aaaa); //2

// ------- потеря контекста
const obj10 = {
  aaa: 2,
  get() {
    return `context = ${this.aaa}`;
  },

  getArrow: () => `context = ${this.aaa}`,
};

console.log(obj10.get()); //context = 2
console.log(obj10.getArrow()); //context = undefined - потеря контекста т к стрелка
//Стрелочные функции не создают свой собственный контекст this и не могут быть привязаны к другому контексту с помощью методов bind, call или apply.

const myFun = obj10.get; //тут не передаем контекст
console.log(myFun()); //context = undefined - потеря контекста
console.log(myFun.call(obj10)); //context = 2; -явная привязка

const obj11 = {
  aaa: 2,
  get() {
    return `context = ${this.aaa}`;
  },
};

const getArrow = () => console.log(`context = ${this.aaa}`);

getArrow.bind(obj11)(); //context = undefined
obj11.getArrow = getArrow;
obj11.getArrow(); //context = undefined
