let obj = {
  '0': 1,
  0: 2
}

console.log(obj['0'] + obj[0]);
// ----------------------------------------
function User() {

}

let vasya = new User();

vasya.__proto__.name = 'Vasya';

// ------------------------------------------

let f = function (x) {
  console.log(x);
}

  (function () {
    f(1)
  }())



MyObj = function (name) {
  this._myParam = 8;
}

MyObj.prototype = {
  init: function (params) {
    if (params.hasOwnProperty('myParam')) {
      this._myParam = params.myParam;
    }
  },
  incParam: function () {
    this._myParam++;
    setTimeout(function () {
      console.log(this._myParam);
    })
  }
}

MyObj.create = function (params) {
  var self = new MyObj();
  self.init(params);
  return self;
}

let params = { myParam: 10 };
let as = MyObj.create(params);
console.log(as.incParam())



let arr = [22, 501, 13, 612, 11]

let sum = arr.reduce((a, c) => c % 2 !== 0 && c > a ? c : a, 0)

console.log(sum)

// ============================

console.log(1);
const aaa = new Promise((res, rej) => res(console.log(2)));

aaa.then(res => console.log(3));

setTimeout(() => {
  console.log(4);
}, 10);

aaa.then(res => console.log(5));

console.log(6);

// ============================

var a = {},
  b = { key: 'b' },
  c = { key: 'c' }

a[b] = 123;
a[c] = 456;

console.log(a[b])//456

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
  return str.split(letter).length - 1
}

function strCount(str, letter) {
  return str.split('').filter(c => c == letter).length;
}


console.log(strCount('Helloo', 'o'))


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