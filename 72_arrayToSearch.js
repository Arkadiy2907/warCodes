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
