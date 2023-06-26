// https://www.codewars.com/kata/5a1ebe0d46d843454100004c/train/javascript

// Определите, какое число дня в году.

// toDayOfYear([1, 1, 2000]) => 1
// Аргумент, переданный в функцию, представляет собой массив формата[D, M, YYYY], например[1, 2, 2000],
//   для 1 февраля 2000 г.или[22, 12, 1999]для 22 декабря 1999 г.

// Не забудьте проверить, високосный ли это год ! Для определения високосных лет необходимо учитывать три критерия:

// Год можно разделить на 4 поровну;
// Если год можно без остатка разделить на 100, это НЕ високосный год, если только;
// Год также без остатка делится на 400. Тогда это високосный год.

function toDayOfYear(arr) {
  let dataStartYear = new Date(arr[2], 0, 1).getTime();
  let dataCurrentYear = new Date(arr[2], arr[1] - 1, arr[0]).getTime();
  let allMsek = dataCurrentYear - dataStartYear;
  return parseInt(allMsek / (1000 * 60 * 60 * 24) + 1);
}

console.log(toDayOfYear([1, 1, 2000]));
console.log(toDayOfYear([25, 12, 2017]));
console.log(toDayOfYear([31, 10, 1991]));
console.log(toDayOfYear([1, 3, 2144]));

// =====

const toDayOfYear = ([d, m, y]) =>
  (new Date(`${m}, ${d}, ${y}`).getTime() - new Date(`1, 1, ${y}`).getTime()) /
    864e5 +
  1;
