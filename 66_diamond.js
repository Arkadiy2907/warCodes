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
