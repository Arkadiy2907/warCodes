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
// =============================
// https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/javascript

// GADERYPOLUKI — это простой шифр замены, используемый в разведке для шифрования сообщений.
//  Шифрование основано на коротком, легко запоминающемся ключе.
//  Ключ записывается в виде парных букв, которые в шифре имеют простую замену.
// The most frequently used key is "GA-DE-RY-PO-LU-KI".
//  G => A
//  g => a
//  a => g
//  A => G
//  D => E
//   etc.

function getStr(str) {
  let buf = [];
  for (let key of str) {
    switch (key) {
      case 'A':
        buf.push('G');
        break;
      case 'a':
        buf.push('g');
        break;
      case 'G':
        buf.push('A');
        break;
      case 'g':
        buf.push('a');
        break;
      case 'D':
        buf.push('E');
        break;
      case 'd':
        buf.push('e');
        break;
      case 'E':
        buf.push('D');
        break;
      case 'e':
        buf.push('d');
        break;
      case 'R':
        buf.push('Y');
        break;
      case 'r':
        buf.push('y');
        break;
      case 'Y':
        buf.push('R');
        break;
      case 'y':
        buf.push('r');
        break;
      case 'P':
        buf.push('O');
        break;
      case 'p':
        buf.push('o');
        break;
      case 'O':
        buf.push('P');
        break;
      case 'o':
        buf.push('p');
        break;
      case 'L':
        buf.push('U');
        break;
      case 'l':
        buf.push('u');
        break;
      case 'U':
        buf.push('L');
        break;
      case 'u':
        buf.push('l');
        break;
      case 'K':
        buf.push('I');
        break;
      case 'k':
        buf.push('i');
        break;
      case 'I':
        buf.push('K');
        break;
      case 'i':
        buf.push('k');
        break;
      default:
        buf.push(key);
        break;
    }
  }
  return buf.join('');
}

function encode(str) {
  return getStr(str);
}

console.log(encode('agedyropulik'));

function decode(str) {
  return getStr(str);
}

console.log(decode(encode('agedyropulik')));

let enocding = {
  a: 'g',
  A: 'G',
  D: 'E',
  d: 'e',
  R: 'Y',
  r: 'y',
  P: 'O',
  p: 'o',
  L: 'U',
  l: 'u',
  K: 'I',
  k: 'i',
  G: 'A',
  g: 'a',
  E: 'D',
  e: 'd',
  Y: 'R',
  y: 'r',
  O: 'P',
  o: 'p',
  U: 'L',
  u: 'l',
  I: 'K',
  i: 'k',
};

function encode(str) {
  return str
    .split('')
    .map((a) => enocding[a] || a)
    .join('');
}

function decode(str) {
  return encode(str);
}

// ====================
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

// Учитывая массив целых чисел, удалите наименьшее значение.Не изменяйте исходный массив / список.
// Если есть несколько элементов с одинаковым значением, удалите элемент с меньшим индексом.
// Если вы получили пустой массив / список, верните пустой массив / список.

// Не меняйте порядок оставшихся элементов.

// Примеры
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  if (numbers.length === 0) return numbers;
  // let min = Infinity;

  // for (let i of numbers) {
  //   if(i<min)min = i
  // }
  const min = Math.min(...numbers);
  // console.log('min',min);
  let arr = numbers.slice();
  let i = numbers.indexOf(Math.min(...numbers));
  arr.splice(i, 1);
  return arr;
}

const removeSmallest = (numbers) =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));

console.log(removeSmallest([1, 2, 3, 4, 5])); //, [2, 3, 4, 5],

console.log(Number.isFinite('0')); //false
console.log(typeof 1n); //bigint
console.log(null == undefined); //true

// ===================
// на замыкание при вызове ф-и возвращает

console.log(sum()); //0
console.log(sum(1)()); //1
console.log(sum(1)(2)()); //3
console.log(sum(2)(2)(3)()); //7

function sum(num) {
  let res = 0;
  if (num === undefined) {
    return res;
  }

  const calc = (num) => {
    if (num === undefined) {
      return res;
    }

    res += num;
    return calc;
  };

  res += num;
  return calc;
}
