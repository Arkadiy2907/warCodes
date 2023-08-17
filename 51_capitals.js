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
