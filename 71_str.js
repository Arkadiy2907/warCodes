// Есть строка, состоящая из разных скобок, проверить закрыты ли все.  Пример строки: "())({}}{()][]["
function validBraces(str) {
  let arrOpenSymbols = [],
    result = false,
    countOpenSymbols;
  if (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
        arrOpenSymbols.push(str[i]);
      } else {
        countOpenSymbols = arrOpenSymbols.length;
        if (
          (str[i] === '}' && arrOpenSymbols[countOpenSymbols - 1] === '{') ||
          (str[i] === ']' && arrOpenSymbols[countOpenSymbols - 1] === '[') ||
          (str[i] === ')' && arrOpenSymbols[countOpenSymbols - 1] === '(')
        ) {
          arrOpenSymbols.pop();
        }
      }
    }

    if (arrOpenSymbols.length === 0) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

console.log('');
console.log(validBraces('()'));
console.log(validBraces('[)'));
console.log(validBraces('{}[]()'));
console.log(validBraces('([{}])'));
console.log(validBraces('())({}}{()][]['));

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// Напишите функцию, которая может возвращать наименьшее значение массива или индекс этого значения. Второй параметр функции скажет, должна ли она возвращать значение или индекс.

// Предположим, что первый параметр всегда будет массивом, заполненным как минимум одним числом и без дубликатов. Предположим, что второй параметр будет строкой, содержащей одно из двух значений: «значение» и «индекс».

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
  // TODO
  let res = Math.min(...arr);
  if (toReturn === 'value') {
    return Math.min(...arr);
  } else {
    return arr.indexOf(res);
  }
}

const min = (arr, toReturn) =>
  toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

// ============
//www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript

// Если мы запишем цифры «60» как английские слова, то получим «шесть-ноль»; количество букв в «шестьзеро» равно семи. Количество букв в слове «семь» — пять. Количество букв в слове «пять» — четыре. Количество букв в слове «четыре» — четыре: мы достигли устойчивого равновесия.

// Примечание: для целых чисел больше 9 запишите названия каждой цифры одним словом (вместо собственного названия числа на английском языке). Например, напишите 12 как «один два» (вместо двенадцати), а 999 — как «девять девять» (вместо девятисот девяноста девяти).

// Для любого целого числа от 0 до 999 верните массив, показывающий путь от этого целого числа к стабильному равновесию:

// Примеры

// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

function numbersOfLetters(integer) {
  const arrNum = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let res = [];

  let str = integer;
  while (true) {
    let el = str
      .toString()
      .split('')
      .map((el) => {
        if (arrNum.includes(arrNum[+el])) {
          return arrNum[+el];
        }
      })
      .join('');
    res.push(el);
    str = el.length;
    if (el === arrNum[4]) break;
  }
  // console.log(res, str);
  return res;
}

numbersOfLetters(60);
