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