//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

let friendArr = ['Ryan', 'Kieran', ' Mark', '999']; //`shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
  let res = [];

  let regexp = /[a-zA-Z]/g;

  for (let el of friends) {
    let buf = el
      .split('')
      .filter((ele) => isNaN(+ele))
      .join('');
    // console.log(buf);
    // if (regexp.test(el.toString())) {
    //   // console.log(el);
    //   // el.trim();

    //   if (el.length === 4) {
    //     res.push(el);
    //   }
    // }
    if (buf.length === 4) {
      res.push(buf);
    }
  }
  console.log(res);

  // let res = friends.filter((el) => el.test(regexp));
  // //your code here
  // console.log(res);
}

// // friend(friendArr);
// friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']);
// friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']);
friend(['This', 'TEst', 'CaSe']);
friend(['Bart', 'Kyle', 'Lisa', 'Alex']);

function friend(friends) {
  return friends.filter((n) => n.length === 4);
}

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

function abbreviate(string) {
  return string.replace(/\w{4,}/g, function (word) {
    return word[0] + (word.length - 2) + word.slice(-1);
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
// =============================
// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

// Вход:

// строкаstrng
// массив строкarr
// Вывод функции contain_all_rots(string, arr) (or containAllRots or contain-all-rots):

// логическое значение true, если все вращения strngвключены вarr
// falseв противном случае
// Примеры:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Примечание:
// Хоть и неверно в математическом смысле

// будем считать, что вращений нет strng == ""
// и для любого массива arr:contain_all_rots("", arr) --> true

function containAllRots(str, arr) {
  if (str === '') return true;
  str = str.split('').sort().join('');
  let res = arr.filter((el) => str === el.split('').sort().join(''));

  console.log(arr.length === res.length);
}

function containAllRots(strng, arr) {
  if (strng === '') {
    return true;
  }
  let rotations = [];
  // цикл for для генерации всех поворотов строки.
  //  На каждой итерации мы разрезаем строку от индекса i до конца и объединяем ее с нарезанной частью от начала до индекса i
  //     .Это генерирует вращения.

  for (let i = 0; i < strng.length; i++) {
    rotations.push(strng.slice(i) + strng.slice(0, i));
  }
  return rotations.every((rot) => arr.includes(rot));
}
containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']);

// ==================
// https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript
// Вы любите кофе и хотите знать, какие зерна вы можете себе позволить купить.

// Первым аргументом функции поиска будет число, обозначающее ваш бюджет.

// Вторым аргументом будет массив цен на кофейные зерна.

// Ваша функция «поиска» должна возвращать магазины, продающие кофе в рамках вашего бюджета.

// Функция поиска должна возвращать строку цен на кофейные зерна, которые вы можете себе позволить.
// Цены в этой строке должны быть отсортированы по возрастанию.

function search(budget, prices) {
  return budget === 0
    ? ''
    : prices
        .filter((el) => el <= budget)
        .sort((a, b) => a - b)
        .join(',');
}

function search(budget, prices) {
  return prices
    .filter(function (elem) {
      if (elem <= budget) {
        return true;
      }
    })
    .sort((a, b) => a - b)
    .toString();
}

search(3, [6, 1, 2, 9, 2]); //, '1,2,2';
search(14, [7, 3, 23, 9, 14, 20, 7]); //, "3,7,7,9,14")
