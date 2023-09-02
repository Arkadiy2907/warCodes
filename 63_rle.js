// https://www.codewars.com/kata/578bf2d8daa01a4ee8000046/train/javascript

// Кодирование длин серий(RLE) — это очень простая форма сжатия данных без потерь,
//  при которой серии данных сохраняются как одно значение и количество данных.

// Простая форма RLE кодирует строку "AAABBBCCCD"как "3A3B3C1D"означающую:
//  сначала есть 3 A, затем 3 B, затем 3 Cи наконец есть 1 D.

// Ваша задача — написать кодировщик и декодер RLE, используя эту технику.
// Кодируемый текст всегда будет состоять только из символов верхнего регистра и без цифр.

function encode(input) {
  let arr = input.split('')
  let res = []
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++
    } else {
      res.push(`${count}${arr[i]}`)
      count = 1
    }
  }
  return res.join('')
}

console.log(encode('AAAAAAAAAAB'))//, '1A');10A1B
// console.log(encode('AAA'))//, '3A');
// console.log(encode('AB'))//, '1A1B');
// console.log(encode('AAABBBCCCA'))//, '3A3B3C1A')

function decode(input) {
  let arr = input.split('');
  let buf = []

  for (let k = 0; k < arr.length; k++) {
    if (isNaN(parseInt(arr[k]))) {
      buf.push("true")
      buf.push(`${arr[k]}`)
      buf.push("true")
    } else {
      buf.push(`${arr[k]}`)
    }
  }

  let buf2 = buf.join('').split('true')
  if (buf2.at(-1) === '') buf2.pop()

  let res = []

  for (let i = 0; i < buf2.length; i += 2) {
    if (buf2[i + 1]) {
      res.push(buf2[i + 1].repeat(+buf2[i]))
    }
  }
  return res.join('')
}

console.log(decode('100A1B'))//, 'A');
// console.log(decode('3A'))//, 'AAA');
// console.log(decode('1A1B'))//, 'AB');
// console.log(decode('3A3B3C1A'))//, 'AAABBBCCCA');

console.log(decode(encode('AAAAAAAAAAB')))//, 'AAAAAAAAAAB');
console.log(decode(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ')))//, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log(encode(decode('10A1B')))//, '10A1B');
console.log(encode(decode('1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z')))//, '1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z');


// =========================

function encode(input) {
  var ans = '';
  var ct = 1;
  var i = 0;
  while (i + 1 <= input.length) {
    if (input[i] == input[i + 1]) {
      ct += 1
    }
    else {
      ans += (ct + input[i])
      ct = 1
    }
    i += 1;
  }
  return ans
}

function decode(input) {
  var ans = '';
  var match = input.match(/\d+[A-Z]/g);
  for (i in match) {
    ans += match[i].slice(-1).repeat(Number(match[i].slice(0, -1)))
  }
  return ans
}