https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

// Получив строку, сделайте заглавными буквы,
//  которые занимают четные и нечетные индексы отдельно,
//  и верните, как показано ниже.Индекс 0будет считаться четным.
// Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
// См.тестовые случаи для большего количества примеров.
// Ввод будет строчной строкой без пробелов.

function capitalize(s) {
  let res = []
  let even = []//четное
  let odd = []// нечет

  for (let i = 0; i < s.length; i++) {
    if ((i & 1) === 0) {
      even.push(s[i].toUpperCase())
      odd.push(s[i])
    } else {
      even.push(s[i])
      odd.push(s[i].toUpperCase())
    }


  }


  return [even.join(''), odd.join('')];
};

console.log(capitalize("abcdef"))

// ===================

function capitalize(s) {
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};

// =====================================================

// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

// Дана строка и массив целых чисел, представляющих индексы, 
// сделать все буквы в этих индексах заглавными.

//   Например:

// capitalize("abcdef", [1, 2, 5]) = "aBCdeF"
// capitalize("abcdef", [1, 2, 5, 100]) = "aBCdeF".Индекса 100 нет.
// Входными данными будет строчная строка без пробелов и массив цифр.

function capitalize(s, arr) {
  return s.split('').map((el, i) => arr.includes(i) ? el.toUpperCase() : el).join('')
};

console.log(capitalize("abcdef", [1, 2, 5]))

// ===========
function capitalize(s, arr) {
  return arr.reduce((a, b) => {
    if (a[b]) {
      a[b] = a[b].toUpperCase();
    }
    return a;
  }, [...s]).join('');
}

// ============================================================

// https://www.codewars.com/kata/59c62f1bdcc40560a2000060/train/javascript

// Учитывая массив, вернуть разницу между количеством
//  четных чисел и количеством нечетных чисел. 0 будет считаться четным числом.

// For example:
// solve([0, 1, 2, 3]) = 0 
// because there are two even numbers and two odd numbers.Even - Odd = 2 - 2 = 0.  
// Теперь добавим к последнему примеру две буквы:

// solve([0, 1, 2, 3, 'a', 'b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 
// Входными данными будет массив только строчных букв и цифр.

// В некоторых языках(Haskell, C++ и др.) вводом будет массив строк:

// solve["0", "1", "2", "3", "a", "b"] = 0 


function solve(a) {
  let even = []
  let odd = []

  let buf = a.filter(el => !isNaN(+el))
  buf.forEach(el => el % 2 === 0 ? even.push(el) : odd.push(el))
  return even.length - odd.length
};

function solve(a) {
  return a.reduce(((x, y) => Number.isInteger(y) ? (y % 2 === 0 ? x + 1 : x - 1) : x), 0);
}

console.log(solve([0, 1, 2, 3, 'a']))