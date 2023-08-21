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
  let count = -Infinity;
  let sum = 0;
  for (let k = 0; k < range.length; k++) {
    for (let i = range[k][0]; i <= range[k][1]; i++) {
      // console.log(sum);
      sum += arr[i];
    }
    console.log(sum);
    if (sum > count) count = sum;
    sum = 0;
  }

  return count < 0 ? +0 : count;
}

let arr = [
  52128, 46187, 97340, 13394, -14475, -29558, 31120, -18195, -33157, -41739,
  3356, 29071, -91620, 97248, -22633, 52955, -26155, 69573, -88603, 54712,
  -78152, 97931, -76426, -58708, 2007, 52372, -97240, 1038, -34888, -54533,
  72308, -51687, 4255, 76165, -64915, -9418, 27643, -28167, 33526, -66514,
  34623, -65354, -96433, -74348, 76375, -31520, -86984, 43642, -70321, 25991,
  89333, -48662, 36108, 86583, 19188, 2434, -20736, 89209, -13919, -4202,
  -79400, -84379, 34423, 95891, 28687, 69705, -43412, 41984, -88049, 68457,
  98684, 3172, 63843, -12263, 36497, -18069, -71557, -65330, -66739, -78788,
  -58238, -77341, -24678, 3737, 17443, -32858,
];
let range = [
  [29, 80],
  [31, 63],
];

console.log(maxSum(arr, range)); //

function maxSum(arr, range) {
  let result = -Infinity;

  for (let i = 0; i < range.length; i++) {
    let temp = 0;

    for (let j = range[i][0]; j <= range[i][1]; j++) {
      temp += arr[j];
    }

    result = Math.max(result, temp);
  }

  return result;
}

function maxSum(arr, range) {
  return Math.max(
    ...range.map((i) => arr.slice(i[0], i[1] + 1).reduce((a, b) => a + b))
  );
}
