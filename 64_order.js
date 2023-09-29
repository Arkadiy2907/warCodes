// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Ваша задача — отсортировать заданную строку.
// Каждое слово в строке будет содержать одно число.
// Это число обозначает позицию, которую слово должно занимать в результате.

//   Примечание.Числа могут быть от 1 до 9. Таким образом, первым словом будет 1(а не 0).

// Если входная строка пуста, верните пустую строку.
// Слова во входной строке будут содержать только допустимые последовательные числа.

//   Примеры
// "is2 Thi1s T4est 3a"  -- > "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -- > "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -- > ""

function order(words) {
  if (!words.length) return "";

  let arr = [];
  let obj = {};

  words.split(' ').forEach(el => {
    let buf = el.split('').filter(num => !isNaN(+num));
    obj[buf] = el
  })

  arr.push(Object.values(obj))

  return arr.flat(1).join(' ')

  // ...
}

console.log(order("is2 Thi1s T4est 3a"))//, "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))//, "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order(""))//,  "empty input should return empty string")

// ============================================

// https://www.codewars.com/kata/57d532d2164a67cded0001c7/train/javascript

// Шестигранный кубик бросают несколько раз, и результаты отображаются в виде символьной гистограммы.

//   Пример:

// 6 |##### 5
// 5 |
// 4 |# 1
// 3 |########## 10
// 2 |### 3
// 1 |####### 7

// Задача
// Вам будут переданы частоты значений кубика, и ваша задача — написать код, возвращающий строку,
//  представляющую гистограмму, чтобы при печати она имела тот же формат, что и пример.

//   Примечания
// В строках нет конечных пробелов
// Все строки(включая последнюю) заканчиваются новой строкой.\n
// Рядом с каждой полосой отображается счетчик, за исключением случаев, когда счетчик равен 0.
// Количество бросков может быть разным, но не более 100.

var hist = histogram([7, 3, 10, 1, 0, 5]);

function histogram(results) {
  let res = [];

  for (let i = 0; i < results.length; i++) {
    if (results[i] !== 0) {
      res.push(`${i + 1}|${'#'.repeat(results[i])} ${results[i]}\n`)
    } else {
      res.push(`${i + 1}|\n`)
    }
  }

  return res.reverse().toString().split(',').join('');
}

var hist = histogram([7, 3, 10, 1, 0, 5]);

console.log(hist);

// ==================================

https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/javascript

// В этой Ката вам будет предоставлена ​​строка, состоящая из строчных букв и цифр.
// Ваша задача — сравнить группировки чисел и вернуть наибольшее число.Числа не будут иметь ведущих нулей.

// Например, solve("gh12cdy695m1") = 695потому что это самая большая из всех групп чисел.

// Удачи!

function solve(s) {
  let arr = s.split(``).map(el => !isNaN(+el) ? el : false).join('').split('false').filter(el => el !== '');

  return Math.max(...arr);
};

function solve(s) {
  let tab = s.split("");
  for (i = 0; i < tab.length; i++) {
    tab[i] = tab[i] - 0;
  }
  tab = tab.join("").split("NaN");
  return Math.max(...tab);
}

function solve(s) {
  return Math.max(...s.split(/[a-z]+/))
};

function solve(s) {
  let arr = s.replace(/[^0-9/]/g, ' ').split(' ')
  return Math.max(...arr)
}

solve('gh12cdy695m1')//, 695);