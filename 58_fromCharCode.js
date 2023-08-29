// https://www.codewars.com/kata/57a23c2acf1fa514d0001034/train/javascript

// Вы проснулись от сильной головной боли и не можете найти ключи от машины.
// Вы найдете записку с подсказкой, в которой говорится:

// «Если вы читаете это, значит, я покинул штат и нахожусь на пути к свободе.
// Просто чтобы вам было интересно, я также предоставил вам кое - что, чтобы вы могли меня выследить.Да начнется погоня…»

// Учитывая массив двоичных чисел, выясните и верните сообщение преступника, чтобы узнать, кто взял пропавший ключ от машины.

// ['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010'] =>
// 'Alexander'

function whoTookTheCarKey(message) {
  let password = "";

  for (let i = 0; i < message.length; i++) {
    password += String.fromCharCode(parseInt(message[i], 2));
  }

  return password;
}

console.log(
  whoTookTheCarKey([
    "01000001",
    "01101100",
    "01100101",
    "01111000",
    "01100001",
    "01101110",
    "01100100",
    "01100101",
    "01110010",
  ])
); //'Alexander'

var whoTookTheCarKey = (arr) =>
  arr.map((el) => String.fromCodePoint(parseInt(el, 2))).join("");

console.log(a);

// ==============================================
//https://www.codewars.com/kata/5a0d38c9697598b67a000041/train/javascript

// Вам дана строка, представляющая число в двоичном виде.
// Ваша задача — удалить все неустановленные биты в этой строке
// и вернуть соответствующее число(оставив только «1»).

// На практике вы должны реализовать эту функцию:

// function eliminateUnsetBits(number);
// Примеры
// eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
// eliminateUnsetBits("111") ->  7
// eliminateUnsetBits("1000000") -> 1
// eliminateUnsetBits("000") -> 0

function eliminateUnsetBits(number) {
  // your code here
  let result = [];
  let str;

  number.split("").forEach((el) => {
    if (+el === 1) result.push(el);
  });
  str = result.join("");
  if (str.length === 0) return 0;

  return parseInt(str, 2);
}

console.log(eliminateUnsetBits("11010101010101"));
console.log(eliminateUnsetBits("000"));

function eliminateUnsetBits(number) {
  return (number = parseInt(number.split("0").join(""), 2) || 0);
}

// ==============================================

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

https: function amicableNumbers(num1, num2) {
  return getOwnDivisors(num1) === num2 && num1 === getOwnDivisors(num2);
}

function getOwnDivisors(num) {
  let result = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result.reduce((a, e) => a + e, 0);
}

function amicableNumbers(num1, num2) {
  var s1 = 0,
    s2 = 0;
  for (var i = 1; i < num1; ++i) if (num1 % i == 0) s1 += i;
  for (var i = 1; i < num2; ++i) if (num2 % i == 0) s2 += i;
  return s1 == num2 && s2 == num1;
}

console.log(amicableNumbers(220, 284));


// ==============================================

// https://www.codewars.com/kata/58845748bd5733f1b300001f/train/javascript

// Вам даны два числа aи bгде 0 ≤ a ≤ b.
// Представьте, что вы создаете массив всех целых чисел от aдо bвключительно.
// Вам нужно посчитать количество 1s в двоичном представлении всех чисел массива.

//   Пример
// Для a = 2 и b = 7 выход должен быть11

// Учитывая a = 2 и b = 7, массив имеет вид: [2, 3, 4, 5, 6, 7].
// Преобразовав числа в двоичные, получим[10, 11, 100, 101, 110, 111], в котором содержится 1 + 2 + 1 + 2 + 2 + 3 = 11 единиц.

//   Ввод, вывод
//   [input]целое числоa
// Ограничения: 0 ≤ a ≤ b.

// [input]целое числоb
// Ограничения: a ≤ b ≤ 100.

// [output]целое число

function rangeBitCount(a, b) {
  let arr = []

  for (let i = a; i <= b; i++) {
    arr.push(i.toString(2).split('').reduce((a, el) => a + +el, 0))

  }
  return arr.reduce((a, el) => a + el, 0)
}

console.log(rangeBitCount(2, 7))

function rangeBitCount(a, b) {
  let output = 0
  for (let x = a; x <= b; x++) {
    output += x.toString(2).split('1').length - 1
  }
  return output
}