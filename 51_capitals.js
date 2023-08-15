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


// console.log("a")

// console.log("a")
// ============================================================
// проверить объект на наличие false значений если в одном из value что либо есть true то вернуть true

const obj = {
  unde: '',
  aa: 's',
}

const isObj = o => {
  let res = true;
  if (Object.keys(o).length === 0) res = false;

  Object.values(o).forEach(el => {
    if (el === '') res = false;
    if (el === undefined) res = false;
    if (isNaN(el)) res = false;
  })

  let arr = []

  Object.values(o).forEach(el => {
    if (el !== '' || el !== undefined || !isNaN(el)) {
      arr.push(el);
    }
    // else {
    //   res = false;
    // }
  })

  if (arr.length !== 0) res = true;


  return res
}


console.log(isObj(obj))