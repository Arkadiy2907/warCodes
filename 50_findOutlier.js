// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

// Вам дан массив(длина которого не менее 3, но может быть очень большим),
//   содержащий целые числа.Массив либо полностью состоит из нечетных целых чисел,
//   либо полностью состоит из четных целых чисел, за исключением одного целого числа N.
//   Напишите метод, который принимает массив в качестве аргумента и возвращает этот «выброс» N.

function findOutlier(integers) {
  let arr;

  arr = integers.map((el) => el % 2 === 0).filter(Boolean).length;

  if (arr === 1) {
    res = integers.find((el) => el % 2 === 0);
  } else {
    res = integers.find((el) => el % 2 !== 0);
  }
  return arr === 1
    ? integers.find((el) => el % 2 === 0)
    : (res = integers.find((el) => el % 2 !== 0));
}

findOutlier([0, 1, 2]); //, 1);
findOutlier([1, 2, 3]); //, 2;
findOutlier([2, 6, 8, 10, 3]); //, 3);
findOutlier([0, 0, 3, 0, 0]); //, 3);
findOutlier([1, 1, 0, 1, 1]); //, 0);

// ==================================================================================

function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
