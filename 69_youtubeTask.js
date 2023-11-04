// https://www.youtube.com/watch?v=G7pAP1TvZSw&t=9s

//1) реализовать ф-ю кот будет сумировать числа и выводить в логи

function sum(a) {
  console.log(a);
  return function (b) {
    return sum(b + a);
  };
}

sum(2)(3)(4);

// 2) ф-я принимает два объекта с разными ключами некоторы из которых могут пересекаться.
// надо вернуть первый объект с обновленными значениями из второго (которые пересекаются)

let obj1 = {
  a: 'foo',
  b: 'boo',
};

let obj2 = {
  a: 'boo',
  c: 'boo',
};

function changeObj(o1, o2) {
  for (let key in o1) {
    if (o2.hasOwnProperty(key)) {
      o1[key] = o2[key];
    }
  }
  return o1;
}

console.log(changeObj(obj1, obj2));
// =========
// 3) реализовать ф-ю кот принимает 2 параметра:
// массив и колбэк по результатам которого будут групироваться значения
//  ф-я должна возвращать объект где ключи это названия групп а значения сами группы

let arr = [6.1, 4.2, 6.3];
let callbackFun = Math.floor;
// result = {
//   '4': [4.2],
//   '6':[6.1, 6.3]
// }

function groupBy(arr, fun) {
  let obj = {};
  arr.forEach((el) => {
    let res = fun(el);
    // console.log(Math.trunc(el));
    if (!obj[res]) {
      // console.log("new=", Math.trunc(el));
      obj[res] = [el];
      // el;
    } else {
      obj[res].push(el);
    }
    // console.log(obj);
  });

  return obj;
}

console.log(groupBy(arr, callbackFun));

// =========
//www.codewars.com/kata/5572f7c346eb58ae9c000047

// Вам нужно написать функцию pattern, которая возвращает следующий шаблон (см. «Шаблон и примеры») до nопределенного количества строк.

// Примечание: Returningрисунок не совпадает с Printingрисунком.
// Правила/Примечание:
// Если n < 1тогда он должен вернуть "", т.е. пустую строку.
// Есть no whitespacesв выкройке.
// Шаблон:
// 1
// 22
// 333
// ....
// .....
// nnnnnn

function getNum(n) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    let str = `${i}`;
    res.push(`${str.repeat(i)}\n`);
    // str.length = 0
    // console.log(str);
  }

  let lastEl = res.at(-1);
  let newlastEl = lastEl && lastEl.slice(0, lastEl.length - 1);
  console.log(newlastEl);
  res.pop();
  res.push(newlastEl);
  console.log(res.join(''));
}

getNum(3);

const pattern = (n) => {
  let out = [];
  for (let i = 1; i <= n; i++) {
    out.push(i.toString().repeat(i));
  }
  return out.join('\n');
};

// ====================
// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

// Это слово i18n— распространенное сокращение internationalization в сообществе разработчиков,
// которое используется вместо того, чтобы набирать слово целиком и пытаться написать его правильно.
//Аналогично, a11y это сокращение от accessibility.

// Напишите функцию, которая принимает строку и преобразует все без исключения «слова» (см. ниже)
// внутри этой строки длиной 4 или больше в аббревиатуру, следуя этим правилам:

// «Слово» — это последовательность букв алфавита. Согласно этому определению,
// любой другой символ, например пробел или дефис(например, «поездка на слоне»),
// разделит серию букв на два слова(например, «слон» и «поездка»).
// В сокращенном варианте слова должна быть первая буква, затем количество удаленных символов,
// затем последняя буква(например, «поездка на слоне» => «e6t r2e»).
// Пример
// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

function abbreviate(string) {
  return string.replace(/\b([a-zA-Z]{4,})\b/g, function (match) {
    var word = match;
    return word[0] + (word.length - 2) + word[word.length - 1];
  });
}

console.log(abbreviate('internationalization'));

// =============
// https://www.codewars.com/kata/5913152be0b295cf99000001/train/javascript

// Вычислите, во сколько раз число можно разделить на данное число.

// Пример
// Например, число 6можно разделить на 2два раза:

// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1
// 100можно разделить на 2шесть раз:

// 1. 100 / 2 = 50
// 2. 50 / 2 = 25
// 3. 25 / 2 = 12 remainder 1
// 4. 12 / 2 = 6
// 5. 6 / 2 = 3
// 6. 3 / 2 = 1 remainder 1

// const divisions = (n, divisor) => {
//   let res = 0;
//   let buf;

//   buf = n / divisor;
//   // console.log(buf);
//   while (buf === Math.trunc(buf)) {
//     // console.log(buf);
//     buf = buf / divisor;
//     res++;
//   }

//   return res;
// };

const divisions = (n, divisor) => {
  let countDivided = 0;
  while (n >= divisor) {
    countDivided += 1;
    n = Math.floor(n / divisor);
  }
  return countDivided;
};

// console.log(divisions(6, 2));
// console.log(divisions(100, 2));
console.log(divisions(2450, 5));

// =====================
// https://www.codewars.com/kata/559760bae64c31556c00006b/train/javascript
// Для каждого положительного целого числа N существует уникальная последовательность,
//   начинающаяся с 1 и заканчивающаяся N и такая, что каждое число в последовательности
//    является либо двойным числом предыдущего числа, либо двойным плюс 1.

// Например, при N = 13 последовательность будет [1, 3, 6, 13], потому что . . . :

//  3 =  2*1 +1
//  6 =  2*3
//  13 = 2*6 +1
// Напишите функцию, возвращающую эту последовательность по заданному числу N.
// Попробуйте сгенерировать элементы результирующего списка в порядке возрастания,
//   т.е.не прибегая к обращению списка и не добавляя элементы в начало списка.

// function climb(n) {
//   let arr = [1];
//   let buf = 1;
//   if (n === 1) {
//     return arr;
//   }

//   // let i = 1
//   let i = n % 2 === 0 ? 2 : 1;
//   // console.log(num);

//   while (n > buf) {
//     if (i % 2 === 0) {
//       // console.log('1');
//       buf = 2 * buf + 1;
//       arr.push(buf);
//       console.log('buf=', buf, arr, i);
//       //  if (buf >= n) return arr;
//       i++;
//     } else {
//       buf = 2 * buf;
//       arr.push(buf);
//       console.log('buf', buf, arr, i);
//       // console.log(arr);
//       //  if (buf >= n) return arr;
//       i++;
//     }
//   }
//   return arr;
// }

function climb(n) {
  let arr = [];
  let buf = n;

  while (buf >= 1) {
    arr.unshift(buf);
    if (buf % 2 === 0) {
      buf = buf / 2;
    } else {
      buf = (buf - 1) / 2;
    }
  }

  return arr;
}

console.log(climb(97938));
