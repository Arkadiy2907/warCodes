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
