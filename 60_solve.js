// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

// В этом Ката вам будет дан массив целых чисел, элементы которого имеют как отрицательное, 
// так и положительное значение, за исключением одного целого числа, которое либо только отрицательное, 
// либо только положительное.Ваша задача будет найти это целое число.

//   Примеры:

// [1, -1, 2, -2, 3] => 3

// 3не имеет соответствующего отрицательного внешнего вида

// [-3, 1, 2, 3, -1, -4, -2] => -4

//   - 4не имеет соответствующего положительного внешнего вида

//   [1, -1, 2, -2, 3, 3] => 3

//     (только положительное или только отрицательное целое число может встречаться более одного раза)

function solve(arr) {
  let res;
  let num1;
  let num2;

  for (let i = 0; i < arr.length; i++) {
    num1 = arr[i]
    if (num1 >= 0) num2 = Number(`-${num1}`)
    if (num1 <= 0) num2 = Math.abs(num1)

    // console.log('num1', num1, "num2", num2);

    for (let k = 0; k < arr.length; k++) {
      // console.log('num1', num1, "num2", num2);
      if (num2 !== arr[k]) {
        console.log('num1', num1, "num2", num2);
        res = num1
      }
    }

  }
  return res
  //..
};

// console.log();
// console.log(solve([1, -1, 2, -2, 3]))//, 3);
console.log(solve([-3, 1, 2, 3, -1, -4, -2]))//, -4);
console.log(solve([1, -1, 2, -2, 3, 3]))//, 3);
console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]))//, -38);
console.log(solve([-9, -105, -9, -9, -9, -9, 105]))//, -9);

// ==================================
// https://www.codewars.com/kata/570e8ec4127ad143660001fd/solutions/javascript
function billboard(name, price = 30) {
  let count = 0
  for (let i = 0; i < name.length; i++) {
    count += price
  }
  return count;
}

console.log(billboard("Jeong-Ho Aristotelis"));

// =======================================
// https://www.codewars.com/kata/5868812b15f0057e05000001/train/javascript

// Вам будет предоставлен список из двух строк, каждая из которых будет содержать ровно одно двоеточие ( ":")
//  в середине(но не в начале или в конце).Длина строк до и после двоеточия является случайной.

// Ваша задача состоит в том, чтобы вернуть список из двух строк(в том же порядке,
//  что и исходный список), но с заменой символов после каждого двоеточия.

//   Примеры
// ["abc:123", "cde:456"]-- > ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]-- > ["a:xyz", "777:12345"]

function tailSwap(arr) {
  let arr0 = arr[0].split(':');
  let arr1 = arr[1].split(':');

  return [`${arr0[0]}:${arr1[1]}`, `${arr1[0]}:${arr0[1]}`];
}

console.log(tailSwap(['abc:123', 'cde:456']))//, ['abc:456', 'cde:123']);
console.log(tailSwap(['a:12345', '777:xyz']))//, ['a:xyz', '777:12345']);

function tailSwap(arr) {
  const [[a, b], [c, d]] = arr.map(x => x.split(':'))
  return [`${a}:${d}`, `${c}:${b}`]
}