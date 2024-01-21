// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

// Завершите функцию scramble(str1, str2), которая возвращает значение true, если часть str1символов можно переставить для соответствия str2, и возвращает значение в противном случае false.

// Примечания:

// Будут использоваться только строчные буквы (az). Никакие знаки препинания и цифры не будут включены.
// Необходимо учитывать производительность.
// Примеры
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  let l1 = str1.length;
  let l2 = str2.length;
  let minLength = l1 <= l2 ? l1 : l2;

  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let res = arr1.filter((el) => arr2.includes(el));
  return res.length === minLength;
}

function scramble(str1, str2) {
  const frequencyCount1 = {};
  const frequencyCount2 = {};

  for (let char of str1) {
    frequencyCount1[char] = (frequencyCount1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCount2[char] = (frequencyCount2[char] || 0) + 1;
  }

  for (let char in frequencyCount2) {
    if (
      !frequencyCount1[char] ||
      frequencyCount1[char] < frequencyCount2[char]
    ) {
      return false;
    }
  }

  return true;
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));

// =================================================
// https://www.codewars.com/kata/5c942f40bc4575001a3ea7ec/train/javascript

// Умножьте все цифры неотрицательного целого числа nдруг на друга, повторяя это с произведением, пока не получите единственную цифру. Требуемое количество шагов известно как мультипликативная устойчивость .

// Создайте функцию, которая вычисляет отдельные результаты каждого шага, не включая исходное число, а включая одну цифру, и выводит результат в виде списка/массива. Если входные данные представляют собой одну цифру, верните пустой список/массив.

// Примеры
// per(1)  = []

// per(10) = [0]
// // 1*0 = 0

// per(69) = [54, 20, 0]
// // 6*9 = 54 --> 5*4 = 20 --> 2*0 = 0

// per(277777788888899) = [4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0]
// // 2*7*7*7*7*7*7*8*8*8*8*8*8*9*9 = 4996238671872 --> 4*9*9*6*2*3*8*6*7*1*8*7*2 = 4478976 --> ...

function per(n) {
  let res = [];

  if (n.toString().length === 1) return res;
  let buf = getNum(n);
  res.push(buf);

  while (buf.toString().length > 1) {
    buf = getNum(buf);

    res.push(buf);
  }

  return res;
}

function getNum(num) {
  let arr = num.toString().split('');
  let r = +arr[0];
  for (let i = 1; i < arr.length; i++) {
    r *= +arr[i];
  }

  return r;
}

function per(num) {
  const result = [];
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((acc, rec) => acc * +rec, 1);
    result.push(num);
  }
  return result;
}

// console.log(per(1));
console.log(per(10));
console.log(per(69));
console.log(per(277777788888899));

// =================================================
//www.codewars.com/kata/563f960e3c73813942000015/train/javascript

// Вы решаете создать небольшой скрипт для расчета наилучшего возможного значения.

// Функция принимает два аргумента:

// `points`: массив целых чисел, представляющий для каждой буквы от A до Z очки, которые он платит.
// `words`: массив строк, в верхнем регистре.

// Вы должны вернуть индекс самого короткого слова, получившего наивысший балл.
// Если длина и оценка одинаковы для двух элементов, верните индекс первого.

var points = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10,
  10,
];
var simpleWords = ['WHO', 'IS', 'THE', 'BEST', 'OF', 'US'];
var rndmWords = [
  'NOQ',
  'TXAY',
  'S',
  'OM',
  'ESFT',
  'CJUKQ',
  'QL',
  'QO',
  'ASTK',
  'Y',
];
var firstBestWord = ['JGPCWVWFW', 'JXHNKBJJG'];

function getBestWord(points, words) {
  let resObg = {};

  words.forEach((el) => {
    let count = getCount(points, el);
    if (!(count in resObg)) {
      resObg[count] = el;
    }
  });

  let maxCount = Math.max(...Object.keys(resObg));
  return words.indexOf(resObg[maxCount]);
}

function filterLength(arr) {
  let min = arr[0].length;
  // let max = arr[0].length;

  for (let el of arr) {
    if (min > el.length) min = el.length;
  }
  // for (let el of arr) {
  //   if (max < el.length) max = el.length;
  // }

  return arr.filter((el) => el.length === min);
}

function getObjChar(p) {
  let obj = {};
  let arr = [];

  for (let i = 65; i <= 90; i++) {
    arr.push(String.fromCodePoint(i));
  }

  arr.forEach((el, idx) => (obj[el] = p[idx]));
  // console.log(obj);
  return obj;
}

function getCount(points, str) {
  let arr = str.split('');
  let objChair = getObjChar(points);
  let arrChair = Object.keys(objChair);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arrChair.length; j++) {
      if (arr[i] === arrChair[j]) {
        count += objChair[arrChair[j]];
      }
    }
  }
  return count;
}

// console.log(getCount('AB'));
// getCount('AB');
let a = [
  'QLQWYQAPB',
  'QLQWYQAPB',
  'EKFXXXREZ',
  'EKFXXXREZ',
  'BWQNLJGWK',
  'BWQNLJGWK',
  'XJXNDX',
  'XJXNDX',
  'XJLXFIHZ',
  'BFKYHYTVM',
];

function getBestWord(points, words) {
  let maxScore = 0;
  let bestWordIndex = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let score = 0;

    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      let letterIndex = letter.charCodeAt(0) - 65; // Convert letter to index (A=0, B=1, ...)

      if (letterIndex >= 0 && letterIndex < points.length) {
        score += points[letterIndex];
      }
    }

    if (
      score > maxScore ||
      (score === maxScore && word.length < words[bestWordIndex].length)
    ) {
      maxScore = score;
      bestWordIndex = i;
    }
  }

  return bestWordIndex;
}

console.log(getBestWord(points, simpleWords));
// console.log(getBestWord(points, rndmWords));
// console.log(getBestWord(points, firstBestWord));
console.log(getBestWord(points, a));
