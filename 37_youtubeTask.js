// https://www.youtube.com/watch?v=x-EZy6gu_38&t=273s

// 1) уникальность всех символов в строке
// регистр должен учитываться 'a' != 'A'; на выходе если все уник-e то true 

// my code
const str1 = "kiwsdFfF";

const isUniqueMy = str => (str.length === [...new Set(str)].length) ? true : false;

//his code

const isUniqueHis = str => (str.length === new Set(str).size) ? true : false;

console.log(isUniqueMy(str1));
console.log(isUniqueHis(str1));

// ==============================================================

// 2) плоский массив
// функция принимает массив с вложенными массивами надо распаковать в одномерный массив 

// my code
const arr1 = [[1], [[2, 3]], [[[4]]]];

const flattenMy = arr => arr.flat(Infinity);

// //his code

let flattenHis = arr => {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flat = flattenHis(arr[i])

      for (let k = 0; k < flat.length; k++) {
        res.push(flat[k])
      }
    } else {
      res.push(arr[i])
    }
  }
  return res
}

// console.log(flattenMy(arr1));
console.log(flattenHis(arr1));

// ==============================================================

// 2) удаление всех повторяющихся символов
// функция принимает массив с вложенными массивами надо распаковать в одномерный массив 

// my code
const str2 = "kiwsdFfF";

const getUniqueStrMy1 = str => [...new Set(str)].join('');

const getUniqueStrMy2 = str => {
  let obj = {};

  str.split('').forEach(el => {
    if (!obj[el]) {
      obj[el] = 'dddd'
    }
  });

  return Object.keys(obj).join('')
}

//his code

const getUniqueStrHis = str => Array.from(new Set(str)).join('');

console.log(getUniqueStrMy1(str2));
console.log(getUniqueStrHis(str2));

// ==============================================================

// 3) какая строка встречается чаще всего
// функция принимает массив с строк и возвращает самую чаще встречающуюся 
// если таких несколько то вернуть первую идя слево на право

// my code

const arr3 = ['a', 'd', 's', 'd', 'a', 'd'];
const arr4 = ['a', 'd', 's'];
const arr5 = ['abs', 'dev', 'abs', 'dev', 'abs', 'dev'];

function getString(arr) {
  let obj = {};
  let res = [];
  let max = 1;

  arr.forEach(el => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++
    }
  })

  for (let key in obj) {
    if (obj[key] > max) {
      res.push(key)
      max = obj[key]
    }
  }

  return res.at(-1) ?? arr[0];
}

console.log(getString(arr5));

// ==============================================================

// 4) повернута ли строка
// функция принимает 2 строки вернуть тру если вторая строка является как первая 

// my code
function isStrRotatedMy(str1, str2) {
  if (str1.length !== str2.length) return false;

  return str1.split('').sort().join('') === str2.split('').sort().join('') ? true : false;
}


//his code

function isStrRotatedHis(str1, str2) {
  return str1 + str1.includes(str2) && str1.length === str2.length;
}

console.log(isStrRotatedMy('asd', 'das'))
console.log(isStrRotatedHis('asd', 'das'))

// ==============================================================

// 4) является ли массив подммножеством другого массива
// т е есть ли элементы второго массива в первом 

// my code

function arrSubset(arr1, arr2) {
  return arr1.sort((a, b) => a - b).join('') === arr2.sort((a, b) => a - b).join('') ? true : false;
}

//his code

function arrSubsetHis(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr2.length; i++) {
    const index = arr1.indexOf(arr2[i])
    if (index === -1) return false;
  }

  return true;
}

console.log(arrSubset([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(arrSubsetHis([1, 2, 3, 4], [1, 2, 3, 4]))


// ==============================================================

// 4) анаграмма является все элементы в  массиве анаграммами друг друга

// my code

function isAnnagramMy(arr) {
  let res = [];

  res = arr.map(el => el.split('').sort().join(''))

  // for (let i = 0; i < arr.length; i++) {
  //   res.push(arr[i].split('').sort().join(''))
  // }

  return new Set(res).size === 1 ? true : false;
}

console.log(isAnnagramMy(['asd', 'sad', 'sda']))