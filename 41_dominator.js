// https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript

// Дан массив с нулевым индексом, состоящий из n целых чисел.
// Доминатор массива arr— это значение, встречающееся более чем в половине элементов массива arr.
//   Например, рассмотрим массив arr, в котором arr = [3, 4, 3, 2, 3, 1, 3, 3]
// Доминатор arrравен 3, потому что он встречается в 5 из 8 элементов, arrа 5 больше половины 8.
// Напишите функцию dominator(arr), которая по массиву с нулевым индексом, arrсостоящему из n целых чисел,
//   возвращает доминант над arr.Функция должна возвращать - 1,
//     если массив не имеет доминатора.Все значения arrбудут >= 0.

let arr1 = [3, 4, 3, 2, 3, 1, 3, 3]

function dominator(arr) {
  let obj = {};
  let max = 1;
  let all = arr.length
  let dom = -1;

  arr.forEach(el => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++
    }
  });

  for (let key in obj) {
    if (obj[key] > max) {
      res = key;
      max = obj[key];
    }
  }

  if (max > (all - max)) {
    dom = res;
  }

  return +dom;
}

console.log(dominator(arr1))

// ========================================

const dominator = function (arr) {
  const dic = arr.reduce((a, i) => (a[i] = a[i] + 1 || 1, a), {})
  for (const i in dic) {
    if (dic[i] > arr.length / 2) {
      return Number(i)
    }
  }
  return -1
}

// =======================================

function dominator(arr) {
  arr.sort();
  for (var i = 0, v = 0, c = 0; i < arr.length; i++) {
    if (v == arr[i]) c++;
    else {
      v = arr[i];
      c = 1;
    }
    if (c > arr.length / 2) return v;
  }
  return -1;
}