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

  words.split(" ").forEach((el) => {
    let buf = el.split("").filter((num) => !isNaN(+num));
    obj[buf] = el;
  });

  arr.push(Object.values(obj));

  return arr.flat(1).join(" ");

  // ...
}

console.log(order("is2 Thi1s T4est 3a")); //, "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //, "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order("")); //,  "empty input should return empty string")

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
      res.push(`${i + 1}|${"#".repeat(results[i])} ${results[i]}\n`);
    } else {
      res.push(`${i + 1}|\n`);
    }
  }

  return res.reverse().toString().split(",").join("");
}

var hist = histogram([7, 3, 10, 1, 0, 5]);

console.log(hist);

// ==================================

//www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/javascript

// В этой Ката вам будет предоставлена ​​строка, состоящая из строчных букв и цифр.
// Ваша задача — сравнить группировки чисел и вернуть наибольшее число.Числа не будут иметь ведущих нулей.

// Например, solve("gh12cdy695m1") = 695потому что это самая большая из всех групп чисел.

// Удачи!

https: function solve(s) {
  let arr = s
    .split(``)
    .map((el) => (!isNaN(+el) ? el : false))
    .join("")
    .split("false")
    .filter((el) => el !== "");

  return Math.max(...arr);
}

function solve(s) {
  let tab = s.split("");
  for (i = 0; i < tab.length; i++) {
    tab[i] = tab[i] - 0;
  }
  tab = tab.join("").split("NaN");
  return Math.max(...tab);
}

function solve(s) {
  return Math.max(...s.split(/[a-z]+/));
}

function solve(s) {
  let arr = s.replace(/[^0-9/]/g, " ").split(" ");
  return Math.max(...arr);
}

solve("gh12cdy695m1"); //, 695);

// ================
// www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
// Завершите функцию, которая преобразует двоичное число (заданное в виде строки) в десятичное число.

function binToDec(bin) {
  // return +(parseInt(bin).toString());
  return parseInt(bin, 2);
}

console.log(binToDec("1001001"));

// =======================================================
// https://www.codewars.com/kata/52b5247074ea613a09000164/train/javascript

// Реализуйте функцию, которая принимает неотрицательное целое число, обозначающее количество яиц,
//  которые нужно сварить.Он должен вернуть время в минутах(целое число), необходимое для варки всех яиц.

// Правила
// в кастрюлю можно положить не более 8 яиц одновременно
// яйцо нужно 5 минут, чтобы сварить
// предполагаем, что вода все время кипит (не успевает нагреться)
// для простоты мы также не учитываем время, необходимое, чтобы положить яйца в кастрюлю или вытащить их из нее.

function cookingTime(eggs) {
  if (eggs === 0) return 0;
  if (eggs <= 8) return 5;
  let buf = 0.625;

  let allTime = (eggs * buf) / 5;

  return parseInt(allTime) === allTime
    ? allTime * 5
    : parseInt(allTime) * 5 + 5;
}

function cookingTime(eggs) {
  return 5 * Math.ceil(eggs / 8);
}

function cookingTime(eggs) {
  var min = 0;
  for (var i = 0; i < eggs; i += 8) min += 5;
  return min;
}

console.log(cookingTime(20));
// ==============

// Напишем функцию, которая инвертирует биты в целом числе. Вот пример:
// Число 417 в двоичной системе счисления равно 110100001.
//  Если инвертировать биты, то получится 100001011, что в десятичной системе равно 267.
// Мы предполагаем, что число неотрицательно

function getRevNum(num) {
  return parseInt(num.toString(2).split("").reverse().join(""), 2).toString(10);
}

console.log(getRevNum(417));
