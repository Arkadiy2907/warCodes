// https://www.codewars.com/kata/57a23c2acf1fa514d0001034/train/javascript

// Вы проснулись от сильной головной боли и не можете найти ключи от машины.
// Вы найдете записку с подсказкой, в которой говорится:

// «Если вы читаете это, значит, я покинул штат и нахожусь на пути к свободе.
// Просто чтобы вам было интересно, я также предоставил вам кое - что, чтобы вы могли меня выследить.Да начнется погоня…»

// Учитывая массив двоичных чисел, выясните и верните сообщение преступника, чтобы узнать, кто взял пропавший ключ от машины.

// ['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010'] =>
// 'Alexander'

function whoTookTheCarKey(message) {
  let password = '';

  for (let i = 0; i < message.length; i++) {
    password += String.fromCharCode(parseInt(message[i], 2));
  }

  return password
}

console.log(
  whoTookTheCarKey(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010'])
)//'Alexander'

var whoTookTheCarKey = (arr) => arr.map(el => String.fromCodePoint(parseInt(el, 2))).join('')

console.log(a)

// ==============================================
// https://www.codewars.com/kata/563c13853b07a8f17c000022/solutions/javascript

// проверить день сегодня и день полученный на совпадение

function isToday(date) {
  let dateToday = new Date();
  let myDate = new Date(date);
  if (dateToday.getFullYear() !== myDate.getFullYear()) return false;
  if (dateToday.getMonth() !== myDate.getMonth()) return false
  return dateToday.getDate() === myDate.getDate()
}

function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}

function isToday(date) {
  var d = new Date();
  return (d.getDate() == date.getDate() && d.getFullYear() == date.getFullYear() && d.getMonth() == date.getMonth());
}

// ==================================================
// https://www.codewars.com/kata/56b5ebaa26fd54188b000018/train/javascript

// Дружественные числа — это два разных числа, связанных так,
// что сумма правильных делителей каждого из них равна другому числу.
//  (Правильный делитель числа — это положительный делитель этого числа, отличный от самого числа.
// Например, правильными делителями числа 6 являются 1, 2 и 3.)

// Например, самая маленькая пара дружественных чисел — (220, 284);
//  ибо правильными делителями числа 220 являются 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 и 110,
//  сумма которых равна 284; а правильными делителями числа 284 являются 1, 2, 4, 71 и 142, сумма которых равна 220.

// Получите функцию amicableNumbers(num1, num2), которая возвращает, true / True
// если пара num1 num2 дружна, false / False если нет.

// Подробнее см.на https://en.wikipedia.org/wiki/Amicable_numbers.

function amicableNumbers(num1, num2) {
  return getOwnDivisors(num1) === num2 && num1 === getOwnDivisors(num2)
}

function getOwnDivisors(num) {
  let result = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      result.push(i)
    }
  }
  return result.reduce((a, e) => a + e, 0)
}

function amicableNumbers(num1, num2) {
  var s1 = 0, s2 = 0;
  for (var i = 1; i < num1; ++i)
    if (num1 % i == 0)
      s1 += i;
  for (var i = 1; i < num2; ++i)
    if (num2 % i == 0)
      s2 += i;
  return s1 == num2 && s2 == num1;
}

console.log(amicableNumbers(220, 284));