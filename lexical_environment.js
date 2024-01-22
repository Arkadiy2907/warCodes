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
// Все функции помнят лексическое окружение, в котором они были созданы и смотрят переменные в этом лексич окр

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
