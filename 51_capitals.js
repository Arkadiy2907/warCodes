// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// Напишите функцию, которая принимает одну строку(word) в качестве аргумента.
// Функция должна возвращать упорядоченный список, содержащий индексы всех заглавных букв в строке.

// Пример
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
  // Write your code here
  let arr = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(capitals("CodEWaRs"));

// ==========================================================
// найти пересеч в объекты

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 3, c: 4 };

const getNewObj = (o1, o2) => {
  let resObj = {}
  const arr1 = Object.keys(o1);

  arr1.forEach(el => {
    if (o2.hasOwnProperty(el)) {
      if (o2[el] === o1[el]) {
        resObj[el] = o2[el]
      }
    }
  })
  return resObj;

} 
