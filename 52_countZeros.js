https://www.codewars.com/kata/58cbfe2516341cce1e000001/train/javascript

// Определите п!! как

// п!! = 1 * 3 * 5 * ... * n, если n нечетно,

//   п!! = 2 * 4 * 6 * ... * n, если n четно.

//     Отсюда 8!! = 2 * 4 * 6 * 8 = 384, нуля в конце нет. 30!! имеет 3 нуля в конце.

// Для положительного целого числа n посчитайте, пожалуйста, сколько нулей в конце числа n!!.

//   Пример:

// 30!! = 2 * 4 * 6 * 8 * 10 * ... * 22 * 24 * 26 * 28 * 30
// 30!! = 42849873690624000(3 zeros at the end)

function countZeros(n) {
  let arr = []
  let buf = [];
  let count = 0;
  let ns = []
  if (n === 0) return count = 1

  for (let i = n % 2 === 0 ? 2 : 1; i <= n; i += 2) {
    // num *= i
    arr.push(i)
  }

  let res = arr.reduce((acc, el) => acc * el, 1)
  buf = res.toString().split('')
  console.log(buf);
  for (let k = buf.length - 1; k >= 0; k--) {
    // ns.push(k)
    // console.log(ns, "+buf[k]=", +buf[k]);
    if (+buf[k] === 0) {
      count++
    }
    else {
      break
    }
  }
  return count
}

console.log(countZeros(30));

const countZeros = n => {
  var result = BigInt(1), count = 0;
  for (var i = n; i > 1; i = i - 2) result *= BigInt(i);
  var resultStr = result.toString().split("");
  for (var j = resultStr.length - 1; j >= 0; j--) {
    if (resultStr[j] === "0") count++; else return count;
  }
}