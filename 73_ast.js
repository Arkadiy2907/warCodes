//1) https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

const opposite = (number) =>
  typeof number === 'number' && !isNaN(number) ? -number : 'this is not number';

// function opposite(number) {
//   if (typeof number === 'number' && !isNaN(number)) {
//     return -number;
//   } else {
//     return 'this is not number';
//   }
// }

console.log(opposite(1));
console.log(opposite(0));
console.log(opposite(4.25));
console.log(opposite(3.3333333));

// =============================================
//2) https://www.codewars.com/kata/basic-mathematical-operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  return operations[operation]
    ? operations[operation](value1, value2)
    : 'bed operation';
}

console.log(basicOp('+++', 4, 7));

// =============================================
//4) https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript
// В качестве входных данных вы получите массив с продолжительностью времени в виде строки в следующем формате: HH:MM:SS. Каждая длительность представляет собой время, затраченное Сантой на доставку подарка. Определите, сможет ли он сделать это за 24 часа или нет. Если время, необходимое для доставки всех подарков, составляет ровно 24 часа, Санта может завершить доставку ;-) .

function determineTime(durations) {
  if (!Array.isArray(durations)) {
    return 'bad args';
  }

  const needTime = 24 * 3600;
  let useTime = 0;

  for (let i = 0; i < durations.length; i++) {
    const [h = 0, m = 0, s = 0] = durations[i].split(':');
    useTime += +h * 3600 + +m * 60 + +s;
  }

  return needTime >= useTime;
}

console.log(determineTime(['00:30:00', '02:30:00', '00:15:00']));
console.log(determineTime('16:00:00'));
console.log(determineTime(['04:30:00', '02:00:00', '01:30:00', '16:00:00']));
console.log(determineTime(['06:00:00', '12:00:00', '06:30:00']));

// =============================================
//5) https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// Вам будет предоставлено слово. Ваша задача — вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, верните 2 средних символа.
// #Примеры:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  if (typeof s !== 'string' || s.length === 0) return 'bad arg';

  const middleIdx = Math.floor(s.length / 2);

  return s.length % 2 !== 0
    ? s[middleIdx]
    : s.slice(middleIdx - 1, middleIdx + 1);
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));

// =============================================
//6) https://www.codewars.com/kata/534fcca5edb124cfe6000f60
// В разработке программного обеспечения шаблон синглтон — это шаблон проектирования, который ограничивает создание экземпляра класса одним объектом. Это полезно, когда для координации действий в системе требуется ровно один объект.

// Создайте шаблон Singleton, чтобы в системе был один объект.

var Singleton = function () {
  if (Singleton.__instance) {
    return Singleton.__instance;
  }

  Singleton.__instance = this;
};

let obj1 = Singleton.getInstance();
let obj2 = Singleton.getInstance();
console.log(obj1 === obj2);
obj1.test = 1;
console.log(obj2.test);

// =============================================
//yes 7) https://www.codewars.com/kata/remove-first-and-last-character-part-two

// Напишите функцию, которая возвращает новую строку, содержащую ту же последовательность символов, за исключением первой и последней, но на этот раз разделенных пробелами.

// Если входная строка пуста или удаление первого и последнего элементов приведет к тому, что результирующая строка станет пустой, верните пустое значение (представленное в виде общего значения NULLв примерах ниже).

// function array(arr) {
//   return arr.split(',').slice(1, -1).join(' ') || null;
// }
const array = (arr) => arr.split(',').slice(1, -1).join(' ') || null;
