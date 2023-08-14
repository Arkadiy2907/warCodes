// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

// Напишите функцию, которая принимает массив чисел(целые числа для тестов) и целевое число.
// Он должен найти в массиве два разных элемента, которые при суммировании дают целевое значение.
// Затем индексы этих элементов должны быть возвращены в виде кортежа / списка(в зависимости от вашего языка)
//  следующим образом: (index1, index2).

// Для целей этого ката некоторые тесты могут иметь несколько ответов;
//  любые допустимые решения будут приняты.

// Ввод всегда будет действительным(числа будут массивом длины 2 или больше,
//  и все элементы будут числами; цель всегда будет суммой двух разных элементов из этого массива).

// На основе: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
  let res = []
  let arr = numbers

  for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < numbers.length; i++) {
      if ((arr[k] + numbers[i]) === target) {
        if (k !== i) return res = [k, i]
      }
    }
  }

  // return res
}

console.log(twoSum([1, 2, 3], 4))

function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

// =====================

// https://www.codewars.com/kata/583df40bf30065fa9900010c

// Напишите функцию, которая принимает в качестве параметров массив(arr) и 2 целых числа(x и y).
// Функция должна возвращать среднее значение между средним значением первых x элементов массива 
// и средним значением последних y элементов массива.

// Среднее значение должно быть вычислено, если значения x и y больше 1, 
// но меньше или равны длине массива.В противном случае функция должна вернуть - 1.

// Примеры
// [1, 3, 2, 4], 2, 3 => should return 2.5
// потому что: среднее значение первых 2 элементов массива равно(1 + 3) / 2=2, 
// а среднее значение последних 3 элементов массива равно(4 + 2 + 3) / 3=3, 
// поэтому среднее значение эти 2 означают(2 + 3) / 2=2, 5.

// [1, 3, 2, 4], 1, 2 => should return -1
// так как х не больше 1.

// [1, 3, 2, 4], 2, 8 => should return -1
// потому что 8 больше, чем длина массива.

function getMean(arr, x, y) {
  if ((x < 2) || (x > arr.length) || (y < 2) || (y > arr.length)) return -1;
  let added = arr.slice(0, x).reduce((acc, el) => (acc + el), 0) / x;
  let rear = arr.slice(-y).reduce((acc, el) => (acc + el), 0) / y;

  return (added + rear) / 2
}

console.log(getMean([1, 3, 2, 4], 2, 3));//, 2.5
console.log(getMean([1, 3, 2], 2, 2));//, 2.25
console.log(getMean([1, 3, 2, 4], 1, 2));//, -1
console.log(getMean([1, 3, 2, 4], 2, 8));//, -1

function getMean(arr, x, y) {
  if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) return -1;
  var m1 = 0, m2 = 0;
  for (var i = 0; i < x; ++i)
    m1 += arr[i];
  for (var i = arr.length - y; i < arr.length; ++i)
    m2 += arr[i];
  return (m1 / x + m2 / y) / 2;
}