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
