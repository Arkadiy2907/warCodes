// https://www.youtube.com/watch?v=498UIks8UOk&t=19s

// 1) сколько раз каждый эл встречается в массиве ответ {kiwi: 3, banana:2, orange:1}
// my code
const fruits = ["kiwi", "kiwi", "banana", "kiwi", "banana", "orange"];

function getCountFruitsMy(arr) {
  let between = arr;
  let res = {};

  while (between.length > 0) {
    let start = between[0];
    res[start] = between.filter((el) => el === start).length;
    between = between.filter((el) => el !== start);
  }

  return res;
}
getCountFruitsMy(fruits);

//his code
function getCountFruitsHis(arr) {
  let res = {};
  // arr.forEach((el) => !res[el] ? res[el] = 1: res[el]++);

  arr.forEach((el) => {
    if (!res[el]) {
      res[el] = 1;
    } else {
      res[el]++;
    }
  });
  // console.log(res);
  return res;
}
getCountFruitsHis(fruits);
// =========================================================================

// 2) создать массив кото-й соодержит только уник значения

const myFruits = ["kiwi", "kiwi", "banana", "kiwi", "banana", "orange"];
// my code
const getUniqueFruitsMy = (arr) => [...new Set(arr)];
const getUniqueFruitsMy2 = (arr) => Array.from(new Set(arr));

//his code
const getUniqueFruitsHis = (arr) => {
  let obj = {};
  arr.forEach((el) => (obj[el] = "bla bla bla")); //одинаковые ключи просто перезапишутся
  return Object.keys(obj);
};

console.log(getUniqueFruitsMy2(myFruits));
console.log(getUniqueFruitsHis(myFruits));
// =========================================================================

// 3) сгрупировать студентов по возрасту, на выходе получить объект где ключ -возраст а значение массив студентов

// {
//   '18': [{ name: 'pit', age: 18 }],
//   '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
//   '24': [{ name: 'mike', age: 24 }]
// }

const students = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'pit', age: 18 },
]
// my code
function getAgeMy(arr) {
  let obj = {};
  arr.forEach(el => {
    if (!obj[el.age]) {
      obj[el.age] = [el]
    } else {
      obj[el.age] = [...obj[el.age], (el)]
    }
  })

  console.log(obj);
  return obj;
}

//his code
function getAgeHis(arr) {
  let obj = {};
  arr.forEach(el => {
    if (!obj[el.age]) {
      obj[el.age] = [el]
    } else {
      obj[el.age].push(el)
    }
  })

  console.log(obj)
  return obj;
}

// getAgeMy(students);
getAgeHis(students);

// =========================================================================

// 4) написать ф-ю которая принимает два аргумента:
// массив из чисел и сумма в виде целого числа,
// если сумма двух любых чисел массива из аргумента равна числу,
// который приходит вторым аргументом вернуть новый массив из этих
// двух чисел если нет таких вернуть пустой массив

//[-1, 11] => -1 + 10 = 10

const arrayNum = [3, 5, -4, 8, 11, 1, -12, 6]
const sumNum = 10

// my code

function getSumArrMy(arr, sum) {
  res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[i] === arr[k]) continue;
      if (arr[i] + arr[k] === sum) {
        return res = [arr[i], arr[k]];
      }
    }
  }

  return res
}

//his code

function getSumArrHis(arr, sum) {

  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === sum) {
        return [arr[i], arr[k]];
      }
    }
  }

  return [];
}

console.log(getSumArrMy(arrayNum, sumNum));
console.log(getSumArrHis(arrayNum, sumNum));

// =========================================================================

// 5) получить единый массив из любимых пицц каждого пользователя 

const users = [
  { name: "alex", pizzas: ['cheese', 'pepperoni'] },
  { name: "alex", pizzas: ['salami', 'margarita'] },
  { name: "alex", pizzas: ['meat'] },
  { name: "alex", pizzas: ['fish'] },
]

// my code
function getPizzasMy1(arr) {
  let obj = {};
  arr.forEach(el => obj[el.pizzas] = 'bla bla')

  return Object.keys(obj).join(',').split(',')
}

function getPizzasMy2(arr) {
  return arr.reduce((acc, el) => [...acc, el.pizzas], []).flat();
}

//his code

function getPizzasHis(arr) {
  return arr.reduce((acc, el) => [...acc, ...el.pizzas], []);
}

console.log(getPizzasHis(users))

// =========================================================================
// 6) записать строку в обратном порядке

const str1 = 'pizza';

// my code
const getReverseStrMy1 = str => str.split('').reverse().join('');

const getReverseStrMy2 = str => {
  let revStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
}

//his code

const getReverseStrHis1 = str => {
  let revStr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    revStr.push(str[i]);
  }

  return revStr.join('');
}

console.log(getReverseStrHis1(str1))