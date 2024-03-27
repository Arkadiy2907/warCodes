// https://www.codewars.com/kata/53b138b3b987275b46000115/train/javascript
// Компания Карана производит программное обеспечение, предоставляющее различные функции в зависимости от версии операционной системы пользователя.

// Для сравнения версий Каран в настоящее время анализирует оба номера версий как числа с плавающей запятой.

// Хотя это работало для версий ОС 10.6, 10.7, 10.8 и 10.9, компания-производитель операционной системы только что выпустила версию ОС 10.10. Это приводит к сбою его метода, поскольку 10,9 больше, чем 10,10 при интерпретации обоих как чисел, несмотря на то, что это меньшая версия.

// Помогите Карану, написав ему функцию, которая сравнивает две версии и возвращает, больше или равна первая версия второй.

// Примечания к спецификации:

// Версии предоставляются в виде строк из одного или нескольких целых чисел, разделенных ..
// Строки версии никогда не будут пустыми.
// Не гарантируется, что две версии будут иметь одинаковое количество подверсий. В этом случае предполагается, что все отсутствующие подверсии равны нулю.
// Две версии, которые отличаются только конечными нулевыми подверсиями, никогда не будут предоставлены.
// Верните True, если v1 больше или равно v2, иначе False

function compareVersions(version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');

  let minLength = v1 <= v2 ? v1.length : v2.length;

  for (let i = 0; i < minLength; i++) {
    if (+v1[i] > +v2[i]) {
      return true;
    } else if (+v1[i] < +v2[i]) return false;
  }

  return v1.length >= v2.length;
}

console.log(compareVersions('11', '10')); //isTrue
console.log(compareVersions('11', '11')); //isTrue
console.log(compareVersions('10.4.6', '10.4')); //isTrue;
console.log(compareVersions('10.4', '11')); //isFalse;
// =======================================

// 29) https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript
// Определите следующие классы, которые наследуются от Animal.

// И. Акула
// Функция-конструктор для Shark должна принимать всего 3 аргумента в следующем порядке: name, age, status. У всех акул должно быть количество ног 0(поскольку у них, очевидно, нет ног) и должно speciesбыть "shark".

// II. Кот
// Функция-конструктор Cat должна принимать те же три аргумента, что и Shark: name, age, status. У кошек всегда должно быть количество ног 4и вид "cat".

// Кроме того, метод introduce/ должен быть идентичен оригиналу, за исключением того, что после фразы должно быть ровно два пробела и слова . Например:IntroduceCat"Meow meow!"

// var example = new Cat("Example", 10, "Happy");
// example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
// III. Собака
// Конструктор Dog должен принимать 4 аргумента в указанном порядке: name, age, status, master. master это имя хозяина собаки, которое будет строкой. Кроме того, у собак должны быть 4ноги и разновидность "dog".

// У собак есть тот же метод introduce/ Introduce, что и у любого другого животного, но у них есть собственный метод greetMaster/ GreetMaster, который не принимает аргументов и возвращает результат "Hello (insert_master_name_here)"(конечно, не буквальную строку, а замените (insert_master_name_here)на имя хозяина собаки).

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return super.introduce() + '  Meow meow!';
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return 'Hello ' + this.master;
  }
}

var example = new Cat('Example', 10, 'Happy');
console.log(example.introduce()); // "Hello, my name is Example and I am 10 years old.  Meow meow!"

// ====================================================
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

// Учитывая список и число, создайте новый список, который будет содержать каждое число listмаксимум Nраз,
// без переупорядочения.
// Например, если входной номер равен 2, а входной список равен [1,2,3,1,2,1,2,3], вы берете [1,2,3,1,2],
// отбрасываете следующий, [1, 2]так как это приведет к 1и 2попаданию в результат 3раз, а затем берете 3, что приводит к[1, 2, 3, 1, 2, 3].
// Если использовать список [20,37,20,21]и номер 1, результат будет таким [20,37,21].

function deleteNth(arr, n) {
  let myArr = arr.slice();
  let buf = [];
  let obj = {};

  myArr.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });

  buf = Object.keys(obj).filter((el) => obj[el] > n);

  for (let i = 0; i < buf.length; i++) {
    for (let j = 0; j < obj[buf[i]] - n; j++) {
      let idx = myArr.lastIndexOf(+buf[i]);
      myArr.splice(idx, 1);
    }
  }
  return myArr;
}

console.log(deleteNth([20, 37, 20, 21], 1)); //, [20, 37, 21];
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); //, [1, 1, 3, 3, 7, 2, 2, 2];
deleteNth([12, 39, 19, 39, 39, 19, 12], 1); //, [12, 39, 19];

function deleteNth(arr, n) {
  let map = new Map();
  let result = [];
  arr.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }

    if (map.get(num) <= n) result.push(num);
  });
  return result;
}

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

// ==========================================================
// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

// В этом ката вы будете сортировать элементы массива по уменьшению частоты элементов. Если два элемента имеют одинаковую частоту, отсортируйте их по возрастанию значения.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.

function solve(arr) {
  let obj = {};

  arr.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });

  let buf = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  let arrr = [];
  for (let i = 0; i < buf.length; i++) {
    for (let j = 0; j < obj[buf[i]]; j++) {
      arrr.push(buf[i]);
    }
  }

  // return bu;
  // });
  // .toString()
  // .split('')
  // .filter((el) => !isNaN(+el))
  // .map((el) => +el);
  console.log(arrr);
  return arrr.map((el) => +el);
}

function solve(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  arr = arr.sort((a, b) => (obj[b] === obj[a] ? a - b : obj[b] - obj[a]));
  return arr;
}

// solve([2, 3, 5, 3, 7, 9, 5, 3, 7]); //,[3,3,3,5,5,7,7,2,9])
// solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]); // [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9];
// solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]); //,[9,9,9,9,4,4,5,5,6,6])
// solve([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]); //,[1,1,2,2,3,3,4,4,5,8])
solve([
  17, 17, 17, 2, 2, 29, 29, 33, 33, 36, 36, 48, 48, 3, 6, 11, 12, 16, 18, 19,
  21, 23, 25, 30, 31, 37, 42, 49,
]);

// ========================================================
//https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

// В этой Ката вам будет предоставлен массив целых чисел, элементы которого имеют как отрицательное, так и положительное значение, за исключением одного целого числа, которое либо только отрицательное, либо только положительное. Ваша задача — найти это целое число.

// Примеры:

// [1, -1, 2, -2, 3] => 3

// 3не имеет соответствующего негативного внешнего вида

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4не имеет соответствующего положительного внешнего вида

// [1, -1, 2, -2, 3, 3] => 3

// (единственное положительное или только отрицательное целое число может встречаться более одного раза)

function solve(arr) {
  let buf = arr.sort((a, b) => a - b);

  let mySet = Array.from(new Set(arr));

  if (mySet.length !== arr.length) {
    for (let i = 0; i < buf.length; i++) {
      if (buf[i] === buf[i + 1]) {
        return buf[i];
      }
    }
  }

  let arrr = arr.map((el) => Math.abs(el));

  let obj = {};
  arrr.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });

  let a = Object.keys(obj).filter((el) => obj[el] === 1)[0];

  let min_a = Number(`-${a}`);

  return arr.includes(+a) ? +a : min_a;
}

const solve = (a) => a.find((e) => !a.includes(-e));

console.log(solve([1, -1, 2, -2, 3])); //, 3;
console.log(solve([-3, 1, 2, 3, -1, -4, -2])); //,-4);
solve([1, -1, 2, -2, 3, 3]); //,3);
solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]); //,-38);
solve([-9, -105, -9, -9, -9, -9, 105]); //,-9);

// ==============================================================
// https://www.codewars.com/kata/5a6d3bd238f80014a2000187/train/javascript
// У меня есть кошка и собака, которых я приобрела котенком/щенком.

// Я забыл, когда это было, но знаю их нынешний возраст как catYearsи dogYears.

// Найдите, как долго я владею каждым из своих домашних животных, и верните результат в виде списка [ ownedCat, ownedDog]

// ПРИМЕЧАНИЯ:

// Результаты представляют собой усеченные целые числа «человеческих» лет.
// Кошачьи годы
// 15кошачьи годы за первый год
// +9кошачьи годы на второй год
// +4кошачьи годы за каждый год после этого
// Собачьи годы
// 15собачьи годы за первый год
// +9собачьи годы на второй год
// +5собачьи годы за каждый последующий год

var ownedCatAndDog = function (catYears, dogYears) {
  return [getYear('cat', catYears), getYear('dog', dogYears)];
};

function getYear(animal, years) {
  let year = +0;
  let add = animal === 'cat' ? 4 : 5;

  if (years === 15 || (years > 15 && years < 24)) {
    year = 1;
  } else if (years === 24) {
    year = 2;
  } else if (years > 24) {
    year = 2 + Math.floor((years - 24) / add);
  }

  return year;
}

const ownedCatAndDog = (catYears, dogYears) =>
  [
    catYears < 24 ? catYears / 15 : (catYears - 16) / 4,
    dogYears < 24 ? dogYears / 15 : (dogYears - 14) / 5,
  ].map(Math.floor);

console.log(ownedCatAndDog(17, 85)); //, [1, 1];
// console.log(ownedCatAndDog(24, 24)); //, [2, 2];
console.log(ownedCatAndDog(56, 64)); //, [10,10])

// ======================
// https://www.codewars.com/kata/56fbdda707cff41b68000de2/train/javascript
// Определите следующие классы.

// I. Кубовидная
// Объект constructorдля class Cuboidдолжен получить ровно три аргумента в следующем порядке: length, width, heightи сохранить эти три значения в this.length, this.widthи this.heightсоответственно.

// class CuboidЗатем у него должен быть геттер surfaceArea , который возвращает площадь поверхности кубоида, и геттер volume, который возвращает объем кубоида.

// II. Куб
// class Cubeявляется подклассом class Cuboid. Функция constructorдолжна Cubeполучать только один аргумент, его , и использовать это значение , lengthпереданное для установки this.lengthи this.width.this.height

// Подсказка: позвоните по адресу super, передав правильные аргументы, чтобы облегчить жизнь ;)

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.height * this.length)
    );
  }

  get volume() {
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}

const cuboid = new Cuboid(3, 4, 5);
console.log(cuboid.surfaceArea); // 94
console.log(cuboid.volume); //  60

const cube = new Cube(3);
console.log(cube.surfaceArea); // 54
console.log(cube.volume); //  27

// =========================================
// https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e/javascript

const withoutLast = (arr) => arr.slice(0, arr.length - 1);

console.log(withoutLast([90, 61, 33, 26, 54, 45, 52, 88, 19]));
//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

// Вы, наверное, знаете систему лайков по Facebook и другим страницам. Люди могут ставить лайки постам в блогах, изображениям и другим элементам. Мы хотим создать текст, который должен отображаться рядом с таким элементом.

// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился предмет. Он должен возвращать отображаемый текст, как показано в примерах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length === 0) return 'no one likes this';
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length >= 4)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

console.log(likes([])); //, 'no one likes this');
console.log(likes(['Peter'])); // 'Peter likes this');
console.log(likes(['Jacob', 'Alex'])); //, 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark'])); //   'Max, John and Mark like this' );
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //  'Alex, Jacob and 2 others like this'

// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

// Учитывая строку s, ваша задача — вернуть другую строку, в которой символы с четным и нечетным индексом s сгруппированы, а группы разделены пробелами. Первой идет группа с четным индексом, за ней следует пробел, а затем часть с нечетным индексом.

// Примеры
// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357
// Даже индексы 0, 2, 4, 6, значит у нас "CdWr"первая группа.
// Нечетные индексы — 1, 3, 5, 7, поэтому вторая группа — "oeas".
// И последняя возвращаемая строка: "Cdwr oeas".

function sortMyString(s) {
  let odd = [];
  let even = [];

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even.push(s[i]);
    } else {
      odd.push(s[i]);
    }
  }

  return `${even.join('')} ${odd.join('')}`;
}

function sortMyString(S) {
  let even = [],
    odd = [];
  S.split('').forEach((e, i) => {
    i % 2 === 0 ? even.push(e) : odd.push(e);
  });
  return `${even.join('')} ${odd.join('')}`;
}

console.log(sortMyString('CodeWars')); //, 'CdWr oeas';
