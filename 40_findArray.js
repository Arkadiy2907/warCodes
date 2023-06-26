// https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055/train/javascript
// даны два массива arr1и arr2, где arr2всегда содержатся целые числа.

// Напишите такую ​​функцию, что:
// Для arr1 = ['a', 'a', 'a', 'a', 'a']функция arr2 = [2, 4] возвращает['a', 'a']

// Для arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5]функция arr2 = [1, 4, 7] возвращает[1, 1, 1]

// Для arr1 = [0, 3, 4]функция arr2 = [2, 6] возвращает[4]

// Для arr1=["a","b","c","d"], arr2=[2,2,2]функция возвращает["c","c","c"]

// Для arr1=["a","b","c","d"]функция arr2=[3,0,2] возвращает["d","a","c"]

// Обратите внимание, что когда элемент внутри arr2 больше, чем индекс последнего элемента,
// arr1 ни один элемент не arr1 должен добавляться к результирующему массиву.Если arr1или arr2пусто,
//  вы должны вернуть пустой arr(пустой список в python, пустой вектор в c++).Примечание для С++ используйте std::vector arr1, arr2.

function findArray(arr1, arr2) {
  let res = [];
  if (arr1.length === 0 || arr2.length === 0) return res;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > arr1.length - 1) {
      continue;
    }
    res.push(arr1[arr2[i]]);
  }

  return res;
}

console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 8, 7]));

// ===========

function findArray(arr1, arr2) {
  return arr1.length ? arr2.map((e) => arr1[e]) : [];
}
