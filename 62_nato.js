// https://www.codewars.com/kata/54530f75699b53e558002076/train/javascript

// Завершите функцию word(string) и верните строку, состоящую из слов,
// написанных с использованием фонетического алфавита НАТО.

// Между каждым словом в возвращаемой строке должен быть пробел,
// а первая буква каждого слова должна быть заглавной.

// Для тех из вас, кто не хочет, чтобы ваши пальцы кровоточили,
//  в этом ката уже есть словарь, напечатанный для вас.

// Примеры
// "hi"      -->  "Hotel India"
// "abc"     -->  "Alpha Bravo Charlie"
// "babble"  -->  "Bravo Alpha Bravo Bravo Lima Echo"
// "Banana"  -->  "Bravo Alpha November Alpha November Alpha"

var nato = (function () {
  var letters = {
    A: "Alpha",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",
  };

  return function (word) {
    let arr = [];
    word.split("").forEach((el) => arr.push(letters[el.toUpperCase()]));
    return arr.join(" ");
  };
})();

console.log(nato("hi"));

return function (word) {
  return word
    .toUpperCase()
    .split("")
    .map((x) => letters[x])
    .join(" ");
};

return function (word) {
  return word
    .toUpperCase()
    .split("")
    .map(function (l) {
      return letters[l];
    })
    .join(" ");
};

// =================================================
// www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript

// Дайте вам две строки: s1и s2.
// Если они противоположны, return true; в противном случае возврат false.
// Примечание.Результатом должно быть логическое значение, а не строка.

// Средства opposite:
// Все буквы двух строк одинаковы, но регистр противоположен.вы можете предположить,
// что строка содержит только буквы или это пустая строка.
// Также обратите внимание на пограничный случай — если обе строки пусты,
// вы должны вернуть false / False.

// Примеры (ввод -> вывод)
// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false

function isOpposite(s1, s2) {
  if ((s1 === "") & (s2 === "")) return false;
  if (s1.length !== s2.length) return false;
  let str = s1
    .split("")
    .map((el) =>
      el.toLowerCase() === el ? el.toUpperCase() : el.toLowerCase()
    )
    .join("");
  console.log(str);
  return str === s2;
}

console.log(isOpposite("ab", "AB")); // , true);
console.log(isOpposite("aB", "Ab")); // , true);
console.log(isOpposite("aBcd", "AbCD")); // , true);
console.log(isOpposite("aBcde", "AbCD")); //, false);
console.log(isOpposite("AB", "Ab")); // , false);
console.log(isOpposite("", "")); //, false););

// ==========================================================
// https://www.codewars.com/kata/583d10c03f02f41462000137

// Учитывая массив arr, содержащий некоторые целые числа
// (положительные, отрицательные или 0), и rangeсписок, такой как
// [[start1, end1], [start2, end2], ...], начало и конец являются индексом,
//  arrа начало всегда меньше, чем конец.Ваша задача состоит в том,
// чтобы вычислить суммарное значение каждого диапазона(начальный и конечный индексы
// включительно) и вернуть максимальное суммарное значение.

// Например:

//  Given arr = [1,-2,3,4,-5,-4,3,2,1],
//        range = [[1,3],[0,4],[6,8]]
//  should return 6

//  calculation process:
//  range[1,3] = arr[1]+arr[2]+arr[3] = 5
//  range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
//  range[6,8] = arr[6]+arr[7]+arr[8] = 6
//  So the maximum sum value is 6
// Примечание:
// arr/ $aвсегда имеет не менее 5 элементов;
// range// $rangeвсегда rangesесть хотя бы 1 элемент;
// Все входы действительны;
// Это простая версия, если вы хотите бросить вызов, попробуйте версию с вызовом .
// Некоторые примеры
//  maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]) === 6
//  maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]) === 5
//  maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]) === 0

function maxSum(arr, range) {
  //coding and coding..
  let count = 0;
  let sum = 0;
  console.log(range[1][0], range[1][1]);
  for (let i = range[1][0]; i < range[1][1]; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(
  maxSum(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [
      [1, 3],
      [0, 4],
      [6, 8],
    ]
  )
); //  6;
