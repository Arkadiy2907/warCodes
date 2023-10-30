// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Учитывая строку слов, вам нужно найти слово с наибольшим количеством очков.

// Каждая буква слова набирает очки в зависимости от ее положения в алфавите a = 1, b = 2, c = 3и т.д.

//   Например, оценка равна abad(81 + 2 + 1 + 4).

// Вам нужно вернуть слово с наивысшим баллом в виде строки.

// Если два слова имеют одинаковую оценку, верните слово, которое встречается первым в исходной строке.

// Все буквы будут строчными, и все вводимые данные будут действительными.

const chair = [
  'first',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'j',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'w',
  'x',
  'v',
  'z',
];

// console.log(chair[2]);

console.log('i'.charCodeAt() - 96);

function high(x) {
  let buf = x.toLowerCase().split(' ');
  let index = [];
  let sum = 0;

  for (let i = 0; i < buf.length; i++) {
    let keys = buf[i].split('');

    for (let key of keys) {
      sum += key.charCodeAt() - 96;
    }

    index.push(sum);
    sum = 0;
  }

  let maxI = Math.max(...index);
  let resI = index.indexOf(maxI);

  console.log(buf[resI]);
  return buf[resI];
}

high('man i'); //, 'taxi');
high('man i need a taxi up to ubud'); //, 'taxi');
// ======

function high(x) {
  return x.split(' ').reduce((accum, current) => {
    return score(current) > score(accum) ? current : accum;
  });
}

function score(word) {
  return word.split('').reduce((accum, current) => {
    return accum + (current.charCodeAt() - 96);
  }, 0);
}

// ==========================================================

// https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript

// В основе Bubblesort лежит так называемый проход.
// Давайте посмотрим на примере, как работает пропуск.
// Рассмотрим следующий список:

// 9, 7, 5, 3, 1, 2, 4, 6, 8
// Мы инициируем проход, сравнивая первые два элемента списка.Является ли первый элемент больше второго ? Если да, то мы меняем местами два элемента.Поскольку 9больше, чем 7в этом случае, мы меняем их местами, чтобы дать 7, 9. Тогда список становится:

// 7, 9, 5, 3, 1, 2, 4, 6, 8
// Затем мы продолжаем процесс для 2 - го и 3 - го элементов, 3 - го и 4 - го элементов...
// вплоть до двух последних элементов.Когда проход завершен, наш список становится следующим:

// 7, 5, 3, 1, 2, 4, 6, 8, 9
// Обратите внимание, что наибольшее значение 9«всплыло» в конец списка.
// Именно поэтому Bubblesort получил свое название.

//   Задача
// Учитывая массив целых чисел,
//  ваша функция bubblesortOnce / bubblesort_once / BubblesortOnce(или ее эквивалент,
// в зависимости от соглашений об именах вашего языка) должна возвращать новый массив,
//  эквивалентный выполнению ровно одного полного прохода над исходным массивом.
// Ваша функция должна быть чистой, т.е.она не должна изменять входной массив.

function bubblesortOnce(a) {
  let buf;
  let arr = a.slice();
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      buf = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = buf;
    }
  }

  return arr;
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));

function bubblesortOnce(arr) {
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
    }
  }
  return newArr;
}

function bubblesortOnce(a) {
  return [...a].map((e, i, arr) =>
    e > arr[i + 1] ? ((arr[i] = arr[i + 1]), (arr[i + 1] = e), arr[i]) : e
  );
}

// =======================
// https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript

// Завершите функцию, чтобы найти количество наиболее часто встречающихся элементов массива.
//  Вы можете предположить, что входные данные представляют собой массив целых чисел.Для возврата пустого массива0

// Пример
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5
// Наиболее частое число в массиве — это -1число, которое встречается 5раз.

function mostFrequentItemCount(collection) {
  // Do your magic. :)
  if (collection.length === 0) return 0;

  let obj = {};
  let max = -Infinity;

  collection.forEach((el) => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }

    if (obj[el] > max) {
      max = obj[el];
    }
  });
  return max;
}

mostFrequentItemCount([3, -1, -1]); //, 2)

function mostFrequentItemCount(c) {
  return c.length
    ? Math.max(...c.map((x) => c.filter((y) => y == x).length))
    : 0;
}

// ============================
// https://www.codewars.com/kata/578b44a47c77f5a1bd000011/train/javascript

// Входные данные: прогноз погоды в формате JSON на 5 дней, состоящий из 5 массивов.
//  Каждый из 5 массивов включает 8 чисел, которые представляют собой 3 - часовой прогноз температуры на определенный день.

// Выходные данные: массив, включающий наиболее часто встречающееся число (температуру)
//  из каждого из 5 массивов(дней).В случае совпадения верните значение,
//  присутствующее позже в данном массиве(день).

// Пример ввода:

// var прогноз_01 = {
//    "температура": [
//        [15,17,19,21,21,21,20,16],
//        [16,17,22,22,22,22,20,16],
//        [12,17, 19,20,20,20,20,18],
//        [14,15,19,19,20,22,18,17],
//        [15,17,24,24,24,20,20,20]
//    ]
// } ;

// Пример вывода:

// getMostFrequent(forecast_01)  // should return [21,22,20,19,20]

// Пояснение к примеру выше:

// Результат таков [21,22,20,19,20], что дано 5 массивов,
// [15,17,19,21,21,21,20,16]21 является наиболее частым в 1-м массиве,
// [16,17,22,22,22,22,20,16]22 является наиболее частым во 2-м массиве,
// [12,17,19,20,20,20,20,18]20 является наиболее частым в 3-м массиве
// [14,15,19,19,20,22,18,17], 19 является наиболее частым в 4-м массиве,
// [15,17,24,24,24,20,20,20]24 и 20 появляются по 3 раза каждый в 5-м массиве.
//  поэтому 20 включается в выходные данные, поскольку последние 20 появляются позже последних 24.

var forecast_01 = {
  temperature: [
    [15, 17, 19, 21, 21, 21, 20, 16],
    [16, 17, 22, 22, 22, 22, 20, 16],
    [12, 17, 19, 20, 20, 20, 20, 18],
    [14, 15, 19, 19, 20, 22, 18, 17],
    [15, 17, 24, 24, 24, 20, 20, 20],
  ],
};

function getMostFrequent(json) {
  let obj1 = createObj(json.temperature[0]);
  let obj2 = createObj(json.temperature[1]);
  let obj3 = createObj(json.temperature[2]);
  let obj4 = createObj(json.temperature[3]);
  let obj5 = createObj(json.temperature[4]);

  return [obj1, obj2, obj3, obj4, obj5];
}

// function createObj(arr) {
//   let obj = {};
//   let max = -Infinity;

//   arr.forEach((el) => {
//     if (!obj[el]) {
//       obj[el] = 1;
//     } else {
//       obj[el]++;
//     }

//     if (obj[el] > max) {
//       max = obj[el];
//     }
//   });

//   let res = Object.keys(obj)
//     .map((el) => {
//       if (max === obj[el]) return +el;
//     })
//     .filter(Boolean)[0];

//   return res;
// }
function createObj(arr) {
  let obj = {};
  let max = -Infinity;
  let res = null;

  arr.forEach((el) => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }

    if (obj[el] >= max) {
      max = obj[el];
      res = el;
    }
  });

  return parseInt(res);
}

console.log(getMostFrequent(forecast_01));

function getMostFrequent(json) {
  return json['temperature'].map((arr) =>
    arr
      .sort(
        (a, b) =>
          arr.filter((el) => a === el).length -
          arr.filter((el) => b === el).length
      )
      .pop()
  );
}

// ======================
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let arr = numbers.split(' ').map((el) => parseInt(el));

  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

console.log(highAndLow('1 2 3 4 5')); // return "5 1"

// ========================
// https://www.codewars.com/kata/5631213916d70a0979000066

// Using n as a parameter in the function pattern, where n>0,
// complete the codes to get the pattern(take the help of examples):

// Note: There is no newline in the end (after the pattern ends)

// Examples
// pattern(3) should return "1\n1*2\n1**3", e.g. the following:

const pattern = (x) => {
  let buf = [];

  for (let i = 0; i < x; i++) {
    buf.push(`1${'*'.repeat(i)}${i === 0 ? '' : i + 1}\n`);
  }

  let last = buf.join('');

  return last.slice(0, last.length - 1);
};

console.log(pattern(3));

const pattern2 = (n) =>
  [...Array(n)].map((_, idx) => `${`*`.repeat(idx)}${++idx}`).join(`\n1`);
