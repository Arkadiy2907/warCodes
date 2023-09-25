// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Ваша задача — отсортировать заданную строку.
// Каждое слово в строке будет содержать одно число.
// Это число обозначает позицию, которую слово должно занимать в результате.

//   Примечание.Числа могут быть от 1 до 9. Таким образом, первым словом будет 1(а не 0).

// Если входная строка пуста, верните пустую строку.
// Слова во входной строке будут содержать только допустимые последовательные числа.

//   Примеры
// "is2 Thi1s T4est 3a"  -- > "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -- > "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -- > ""

function order(words) {
  if (!words.length) return "";

  let arr = [];
  let obj = {};

  words.split(' ').forEach(el => {
    let buf = el.split('').filter(num => !isNaN(+num));
    obj[buf] = el
  })

  arr.push(Object.values(obj))

  return arr.flat(1).join(' ')

  // ...
}

console.log(order("is2 Thi1s T4est 3a"))//, "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))//, "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order(""))//,  "empty input should return empty string")