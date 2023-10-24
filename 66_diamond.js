// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

// Вам нужно вернуть строку, которая при печати на экране выглядит как ромбовидная форма, используя *символы звездочки ( ). Конечные пробелы должны быть удалены, а каждая строка должна заканчиваться символом новой строки ( \n).

// Возврат null/nil/None/..., если введенное число четное или отрицательное, поскольку невозможно напечатать ромб четного или отрицательного размера.

// Примеры
// Бриллиант 3-го размера:

//  *
// ***
//  *
// ...который будет выглядеть как строка" *\n***\n *\n"

// Бриллиант 5-го размера:

//   *
//  ***
// *****
//  ***
//   *
// ...то есть:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;
  let str = "*";
  let space = " ";
  let center = `${str.repeat(n)}\n`;
  let left = [];
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < n; i += 2) {
    left.push(`${str.repeat(i)}\n`);
  }

  for (let j = 0; j < left.length; j++) {
    leftArr.push(`${space.repeat(left.length - j)}${left[j]}`);
  }

  rightArr = leftArr.slice().reverse();

  return [...leftArr, center, ...rightArr].join("");
}

diamond(5); //, "  *\n ***\n*****\n ***\n  *\n")
console.log(diamond(3)); //, " *\n***\n *\n")
diamond(1); //, "*\n")

function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = "";
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += " ".repeat(len);
    str += "*".repeat(n - 2 * len);
    str += "\n";
  }
  return str;
}

function diamond(n) {
  if (n % 2 == 0 || n < 1) return null;
  var x = 0,
    add,
    diam = line(x, n);
  while ((x += 2) < n) {
    add = line(x / 2, n - x);
    diam = add + diam + add;
  }
  return diam;
} //z.

function repeat(str, x) {
  return Array(x + 1).join(str);
}
function line(spaces, stars) {
  return repeat(" ", spaces) + repeat("*", stars) + "\n";
}

// ===============================
// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca/train/javascript

// Посчитайте, как часто меняется знак в массиве.

// результат
// номер от 0до ... . Возвращает пустой массив0

// пример
// const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

// catchSignChange(arr) == 2;

function catchSignChange(arr) {
  let count = 0;
  if (arr.length === 0 || (arr.length === 1 && arr[0] === 0)) return count;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] >= 0 && arr[i + 1] < 0) || (arr[i] < 0 && arr[i + 1] >= 0)) {
      count++;
    }
  }
  return count;
}
const arr = [1, -3, -4, 0, 5];
const arr1 = [1, -2, -7, -4, 4, -2, 0, -3, 3];

console.log(catchSignChange(arr));
console.log(catchSignChange(arr1));

// =====================================
// https://www.codewars.com/kata/65127141a5de2b1dcb40927e/train/javascript

// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made.Note that each word in the array counts as a 90° rotation in that direction.

// Worked Example
// ["right", "right", "right", "right", "left", "right"] ➞ 1
// # You spun right 4 times(90 * 4 = 360)
// # You spun left once(360 - 90 = 270)
// # But you spun right once more to make a full rotation(270 + 90 = 360)
// Examples
// ["left", "right", "left", "right"] ➞ 0

// ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

// ["left", "left", "left", "left"] ➞ 1
// Notes
// Return a positive number.
// All tests will only include the words "right" and "left".

function spinAround(turns) {
  let res = turns.reduce((acc, el) => {
    if (el === 'right') return acc + 90
    if (el === 'left') return acc - 90
  }, 0)

  return Math.trunc(Math.abs(res / 360))
}

// let turn = ["right", "right", "right", "right", "left", "right"]
// let turn =['left', 'right', 'left', 'right']
// let turn = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']
let turn = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left']
let turn1 = ["right", "right", "right"]

spinAround(turn)
console.log(spinAround(turn1));

function spinAround(turns) {

  let result = 0;

  turns.forEach(el => {
    (el === 'right') ? result += 0.25 : result -= 0.25
  });

  return Math.floor(Math.abs(result));

}

// =============================

// https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript

// Элемент массива является доминирующим, если он больше, 
// чем все элементы справа от него.Вам будет предоставлен массив,
//  и вашей задачей будет вернуть список всех доминирующих элементов.Например:

// solve([1, 21, 4, 7, 5]) = [21, 7, 5] because 21, 7 and 5 are greater than elments to their right.
//   solve([5, 4, 3, 2, 1]) = [5, 4, 3, 2, 1]

// Notice that the last element is always included.
// All numbers will be greater than 0.ars.com / kata / 5a04133e32b8b998dc000089 / train / javascript

// function solve(arr) {
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     // const element = array[index];
//     for (let j = i + 1; ;) {
//       if (arr[i] > arr[j]) {
//         j++
//         console.log(j, arr.length);
//         // break outer;
//         if (j === arr.length - 1) {
//           res.push(arr[i])
//         }
//       } else {
//         break
//         // break outer;
//         // res.push(arr[i])
//       }
//       // res.push(arr[i])
//     }

//   }
//   return (res)
//   // return [...new Set(res)]
// }


function solve(arr) {
  let res = [];
  let buf = []

  for (let i = 0; i < arr.length; i++) {
    buf = arr.slice(i, arr.length)
    buf.sort((a, b) => b - a)
    if (buf[0] === arr[i]) {
      res.push(arr[i])

    }
    buf.length = 0
  }

  return [...new Set(res)]
}


console.log(solve([16, 17, 14, 3, 14, 5, 2]));
console.log(solve([1, 21, 4, 7, 5]))
console.log(solve([92, 52, 93, 31, 89, 87, 77, 105]))
console.log(solve([75, 47, 42, 56, 13, 55]))

function solve(arr) {
  return arr.filter((e, i) => arr.slice(i + 1).every(x => x < e));
};

const solve = arr =>
  arr.filter((val, idx) => val > Math.max(...arr.slice(++idx)));