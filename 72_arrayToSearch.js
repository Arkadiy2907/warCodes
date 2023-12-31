// https://www.codewars.com/kata/5783ef69202c0ee4cb000265/train/javascript
// JavaScript indexOf не работает с массивами в качестве входных данных. Это связано с тем, что [1,2] === [1,2] вернет false в JavaScript. Многие другие языки имеют схожие особенности.

// const { json } = require('node:stream/consumers');

// Однако иногда бывает полезно найти массив. Напишите функцию, которая ищет массив внутри двумерного массива и возвращает индекс первого совпадающего элемента. Если совпадения нет, ваша функция должна вернуть -1.

// См. несколько примеров:

// var arrayToSearch = [[1,2],[3,4],[5,6]];
// var query = [1,2]; // => 0
// query = [5,6]; // => 2
// query = [9,2]; // => -1
// Вам необходимо будет проверить введенные данные по следующим критериям:

// каждый элемент искомого массива должен быть массивом;
// каждый подмассив двумерного массива должен иметь длину два; и
// запрос должен представлять собой массив длиной два.
// Если входные данные недействительны, вы должны выдать ошибку.

// См. несколько примеров:

// var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
// arrayToSearch = [1,2,3,4,5,6]; // => throw Error
// arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
// var query = [1,2]; // => valid input
// query = 5; // => throw Error
// query = [9,2,1]; // => throw Error

var bigArray = [
  [2, 3],
  [7, 2],
  [9, 20],
  [1, 2],
  [7, 2],
  [45, 4],
  [7, 87],
  [4, 5],
  [2, 7],
  [6, 32],
];

var searchFor = [9, 20];

var searchArray = function (arrayToSearch, query) {
  const isCheck = (x) => {
    if (!Array.isArray(x) || (Array.isArray(x) && x.length !== 2)) {
      throw new Error('throw Error');
    }
  };

  isCheck(query);

  if (
    !Array.isArray(arrayToSearch) ||
    (Array.isArray(arrayToSearch) && arrayToSearch.length === 0)
  ) {
    throw new Error('throw Error');
  }

  arrayToSearch.forEach((el) => isCheck(el));

  return arrayToSearch
    .map((el) => JSON.stringify(el))
    .indexOf(JSON.stringify(query));
};

console.log(searchArray(bigArray, searchFor));

var searchArray = function (arrayToSearch, query) {
  let res = -1;
  if (!Array.isArray(query) || (Array.isArray(query) && query.length !== 2)) {
    throw new Error('throw Error');
  }

  if (
    !Array.isArray(arrayToSearch) ||
    (Array.isArray(arrayToSearch) && arrayToSearch.length === 0)
  ) {
    throw new Error('throw Error');
  }

  arrayToSearch.forEach((el) => {
    if (!Array.isArray(el) || (Array.isArray(el) && el.length !== 2)) {
      throw new Error('throw Error');
    }
  });

  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
      return (res = i);
    }
  }

  return res;
};

// console.log(searchArray([], [0, 1]));

console.log(searchArray(bigArray, searchFor));

var searchArray = function (arrayToSearch, query) {
  var wrongArray = (array) => !Array.isArray(array) || array.length !== 2;

  if (wrongArray(query) || !Array.isArray(arrayToSearch)) {
    throw new Error();
  }

  let index = -1;

  for (let i = 0; i < arrayToSearch.length; i++) {
    if (wrongArray(arrayToSearch[i])) {
      throw new Error();
    }

    if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
      return i;
    }
  }

  return index;
};

const searchArray = function (array, query) {
  if ([...array, query].some((i) => !Array.isArray(i) || i.length !== 2))
    throw Error();
  return array.map(JSON.stringify).indexOf(JSON.stringify(query));
};

// ================================================================
// https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b/train/javascript

console.log('abababab'.split('ab').filter(Boolean));

// let str = 'abbaabbaabba';

// function hasSubpattern(string) {
//   let pattern = [string[0]];
//   if (string.length === 1) return false;
//   for (let i = 1; i < string.length; i++) {
//     if (string[0] !== string[i]) {
//       pattern.push(string[i]);
//     } else {
//       break;
//     }
//   }
//   if (pattern.join('') === string) return false;
//   return string.split(pattern.join('')).filter(Boolean).length === 0;
// }

// console.log(hasSubpattern(str));

let str =
  'D6AkyUD4EEp69kSY1cUiGU9sgRTGwUvVS3rN1oete1Fk0Z4kFTrNPHDpNmDLHfBRDgk3NMtvQ801cvxWWXRN8j1j';

// function hasSubpattern(string) {
//   let pattern = [string[0]];

//   if (string.length === 1) return false;

//   for (let i = 1; i < string.length; i++) {
//     if (string.split(pattern.join('')).filter(Boolean).length === 0) {
//       return true;
//     } else {
//       pattern.push(string[i]);
//     }
//   }
//   if (pattern.join('') === string) return false;
// }

function hasSubpattern(string) {
  return /^(.+)\1+$/.test(string);
}

console.log(hasSubpattern(str));

function hasSubpattern(string) {
  console.log('string + string=', string + string); //abbaabbaabbaabba
  console.log(
    '(string + string).indexOf(string, 1)=',
    (string + string).indexOf(string, 1)
  ); //4
  console.log('string.length=', string.length); //8

  return (string + string).indexOf(string, 1) != string.length;
}

// console.log(hasSubpattern('aav'));
// string + string= aavaav
// (string + string).indexOf(string, 1)= 3
// string.length= 3
// false

console.log(hasSubpattern('abbaabba')); //true

// Функция hasSubpattern, использует метод indexOf для проверки наличия повторяющегося паттерна в строке. Вот как это работает:

// (string + string) объединяет исходную строку с самой собой. Это создает новую строку, в которой исходная строка появляется дважды подряд.

// indexOf(string, 1) ищет первое вхождение исходной строки в объединенной строке, начиная с индекса 1. Метод indexOf возвращает индекс первого вхождения указанной строки или -1, если строка не найдена.

// Функция затем сравнивает результат indexOf(string, 1) с string.length. Если результат не равен string.length, это означает, что паттерн существует в строке и повторяется как минимум один раз.

// Проверка, отличается ли индекс паттерна от длины исходной строки, позволяет определить наличие повторяющегося паттерна в строке.

// Следует отметить, что эта реализация предполагает, что входная строка не является пустой. Если входная строка пуста, функция может давать непредсказуемые результаты.

// ==========================================
// https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript
// Вам будет предоставлен массив, который будет включать как целые числа, так и символы.

// Возвращает массив длины 2, в котором a[0] представляет собой среднее из десяти целых чисел в виде числа с плавающей запятой.
//  Всегда будет 10 целых чисел и 10 символов.Создайте одну строку с символами и верните ее как[1], сохраняя исходный порядок.

// lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
// Вот пример вашего возврата

// [3.6, "udiwstagwo"]
var lst = [
  'u',
  '6',
  'd',
  '1',
  'i',
  'w',
  '6',
  's',
  't',
  '4',
  'a',
  '6',
  'g',
  '1',
  '2',
  'w',
  '8',
  'o',
  '2',
  '0',
];

function mean(lst) {
  let res = [];
  let num = 0;
  let str = '';

  lst.forEach((el) => {
    if (isNaN(+el)) {
      str += el;
    } else {
      num += +el;
    }
  });
  res[0] = num / 10;
  res[1] = str;

  return res;
}

console.log(mean(lst));

const mean = (lst) =>
  lst.reduce(
    ([num, str], val) =>
      isNaN(val) ? [num, str + val] : [(num * 10 + +val) / 10, str],
    [0, ``]
  );

// ================================
// https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript
// Учитывая angle(в градусах) часовую стрелку, верните время в 12-часовом формате ЧЧ:ММ. Округлите до ближайшей минуты.
// Примеры
// 12:00= 0 градусов
// 03:00= 90 градусов
// 06:00= 180 градусов
// 09:00= 270 градусов
// 12:00= 360 градусов
// 0 <= angle<= 360

// Не делайте никаких предположений об утреннем или послеобеденном времени для результата ЧЧ:ММ. Для этого Ката они неотличимы.

// 3 часа. 03:00, нет15:00
// 7 минут после полуночи это12:07
// 7 минут после полудня тоже12:07

//10d-20m 1deg -2мин 0.5deg-1min
//1h 60min

var whatTimeIsIt = function (angle) {
  if (angle <= 0.5) {
    return '12:00';
  }

  let hour = Math.trunc(angle / 0.5 / 60);
  let min = Math.floor(angle / 0.5 - hour * 60);

  hour = hour === 0 ? 12 : hour;
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;

  return `${hour}:${min}`;
};

console.log(whatTimeIsIt(7.353355807992958));

// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript
// Учитывая переменную n,

// Если n целое число, верните строку с дефисом '-'до и после каждого нечетного целого числа, но не начинайте и не заканчивайте строку дефисом. Если nотрицательно, то отрицательный знак следует убрать.

// Если n не целое число, верните строку "NaN".

// Бывший:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  if (num !== +num.toFixed() || isNaN(num)) {
    return 'NaN';
  }
  num = Math.abs(num);

  let buf = [];
  num
    .toString()
    .split('')
    .forEach((el) => {
      if (+el % 2 === 0) {
        buf.push(el);
      } else {
        buf.push(`-`);
        buf.push(el);
        buf.push(`-`);
      }
    });

  if (buf[0] === '-') {
    buf.splice(0, 1);
  }

  if (buf[buf.length - 1] === '-') {
    buf.splice(buf.length - 1, 1);
  }

  let res = [];

  for (let i = 0; i < buf.length; i++) {
    if (buf[i] === '-' && buf[i + 1] === '-') {
      res.push('-');
      buf.splice(buf[i + 1], 1);
    } else {
      res.push(buf[i]);
    }
  }

  return res.join('');
}

console.log(dashatize(274)); //2-7-4
console.log(dashatize(5311)); //5-3-1-1
console.log(dashatize(86320)); //86-3-20
console.log(dashatize(974302)); //9-7-4-3-02
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1)); //1
console.log(dashatize(-28369)); //28-3-6-9

function dashatize(num) {
  //get 'em
  const conv = (acc, val) => (val % 2 != 1 ? acc + val : acc + `-${val}-`);
  const trim = (str) => (str == '--' ? '-' : '');
  let [...numArr] = Math.abs(num).toString();

  let str = numArr.reduce(conv, '');
  return str.replace(/^-|--|-$/gi, trim);
}

// https://www.codewars.com/kata/57fa537f8b0760c7da000407/train/javascript

// По мотивам сказки Шарля Перро «Бриллианты и жабы» . В этом ката вам нужно будет выполнить функцию, которая принимает 2 аргумента:

// Строка, соответствующая тому, что говорит дочь.
// Строка, сообщающая вам, какую фею встретила девушка. Это может быть goodили evil.
// Функция должна возвращать следующий счетчик в виде хеша:

// Если девочка встретила goodфею:
// Считайте 1 rubyкаждый раз, когда видите а r, и 2 каждый раз, когда видитеR
// Считайте 1 crystalкаждый раз, когда видите а c, и 2 каждый раз, когда видитеC
// Если девочка встретила evilфею:
// Считай 1 pythonкаждый раз, когда видишь а p, и 2 каждый раз, когда видишьP
// Считайте 1 squirrelкаждый раз, когда видите а s, и 2 каждый раз, когда видитеS

function diamondsAndToads(sentence, fairy) {
  let sortObject = {};
  let str = sentence.split(' ');
  let ruby = 0;
  let crystal = 0;
  let python = 0;
  let squirrel = 0;

  for (let j of str) {
    for (let i of j) {
      if (i === 'r') {
        ruby++;
      }
      if (i === 'R') {
        ruby += 2;
      }

      if (i === 'c') {
        crystal++;
      }
      if (i === 'C') {
        crystal += 2;
      }
      if (i === 'p') {
        python++;
      }
      if (i === 'P') {
        python += 2;
      }

      if (i === 's') {
        squirrel++;
      }
      if (i === 'S') {
        squirrel += 2;
      }
    }
  }
  if (fairy === 'good') {
    sortObject.ruby = ruby;
    sortObject.crystal = crystal;
    return sortObject;
  }
  if (fairy === 'evil') {
    sortObject.python = python;
    sortObject.squirrel = squirrel;
    return sortObject;
  }
}

console.log(diamondsAndToads('Ruby and Crystal', 'good'));
console.log(
  diamondsAndToads(
    'This string contain some Ruby and some Crystal in it',
    'good'
  )
);
console.log(diamondsAndToads('Python and Squirrel', 'evil'));
console.log(
  diamondsAndToads(
    'This string contain some Python and some Squirrel in it',
    'evil'
  )
);

function diamondsAndToads(s, good) {
  const ct = (c) =>
    s.split(c).length - 1 + (s.split(c.toUpperCase()).length - 1) * 2;
  return good == 'good'
    ? { ruby: ct('r'), crystal: ct('c') }
    : { python: ct('p'), squirrel: ct('s') };
}
