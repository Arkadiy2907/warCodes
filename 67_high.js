// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Учитывая строку слов, вам нужно найти слово с наибольшим количеством очков.

// Каждая буква слова набирает очки в зависимости от ее положения в алфавите a = 1, b = 2, c = 3и т.д.

//   Например, оценка равна abad(81 + 2 + 1 + 4).

// Вам нужно вернуть слово с наивысшим баллом в виде строки.

// Если два слова имеют одинаковую оценку, верните слово, которое встречается первым в исходной строке.

// Все буквы будут строчными, и все вводимые данные будут действительными.

const chair = ['first', 'a', 'b', 'c', 'd', 'e', 'f', 'j', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'w', 'x', 'v', 'z']

// console.log(chair[2]);

console.log('i'.charCodeAt() - 96);

function high(x) {
  let buf = x.toLowerCase().split(' ')
  let index = [];
  let sum = 0;

  for (let i = 0; i < buf.length; i++) {
    let keys = buf[i].split('')

    for (let key of keys) {
      sum += (key.charCodeAt() - 96)
    }

    index.push(sum)
    sum = 0;
  }

  let maxI = Math.max(...index)
  let resI = index.indexOf(maxI)

  console.log(buf[resI]);
  return buf[resI]
}

high('man i')//, 'taxi');
high('man i need a taxi up to ubud')//, 'taxi');
// ======

function high(x) {
  return x.split(' ').reduce((accum, current) => {
    return score(current) > score(accum) ? current : accum;
  })
}

function score(word) {
  return word.split('').reduce((accum, current) => { return accum + (current.charCodeAt() - 96) }, 0)
}

// ==========================================================