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
  '15',
  '15',
  '5',
  '5',
  '22',
  '13',
  '2',
  '20',
  '6',
  '27',
  '32',
  '34',
  '35',
  '41',
  '45',
]); //,[15, 15, 5, 5, 22, 13, 2, 20, 6, 27, 32, 34, 35, 41, 45]
solve([
  17, 17, 17, 2, 2, 29, 29, 33, 33, 36, 36, 48, 48, 3, 6, 11, 12, 16, 18, 19,
  21, 23, 25, 30, 31, 37, 42, 49,
]);
