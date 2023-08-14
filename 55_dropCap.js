// https://www.codewars.com/kata/559e5b717dd758a3eb00005a/train/javascript

// DropCaps означает, что первая буква начального слова абзаца должна 
// быть заглавной, а остальные — строчными, как в газете.

// Но для разнообразия давайте проделаем это для каждого слова заданной строки.
// Ваша задача состоит в том, чтобы каждое слово, длина которого больше 2,
//  писать с заглавной буквы, оставляя меньшие слова такими, какие они есть.

// * должно также работать с начальными и конечными пробелами и заглавными буквами.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space 
// "   space WALK   " => "   Space Walk   "
// Примечание: вам будет предоставлено как минимум одно слово,
// и вы должны взять строку в качестве ввода и возвращаемую строку в качестве вывода.


function dropCap(n) {
  let arr = n.split(' ')
  let res = []

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] !== '') {


      arr[i].length > 2 ? res.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()) : res.push(arr[i]);
    } else {
      res.push(arr[i])
    }
  }

  return res
    .join(null)
    .replaceAll(null, ' ')
}

console.log(dropCap('  Revelation, of the CAPS outraged American public opinion, and helped generate'));

const dropCap = (str) => {
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      arr[i] = arr[i].toLowerCase();
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(' ')
}

// https://www.codewars.com/kata/558ee8415872565824000007
// Создайте функцию, которая проверяет, делится ли первый аргумент n на все остальные аргументы
//   (возвращает true, если нет других аргументов)

// Пример:

// (6, 1, 3)-- > true because 6 is divisible by 1 and 3
//   (12, 2)-- > true because 12 is divisible by 2
//     (100, 5, 4, 10, 25, 20)-- > true
//       (12, 7)-- > false because 12 is not divisible by 7

function isDivisible() {
  //Write your code here
  let num = arguments[0]
  let arr = [...arguments].slice(1)
  let res = true

  arr.forEach(el => {
    if (((num / el).toFixed(0)) != num / el) res = false
  })
  return res
}

function isDivisible(argument, ...arguments) {
  return arguments.every(e => argument % e === 0);
}


console.log((isDivisible(3, 3, 4), false))
console.log(isDivisible(12, 3, 4), true);
console.log(isDivisible(8, 3, 4, 2, 5), false);