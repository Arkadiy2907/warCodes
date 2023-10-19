// https://www.codewars.com/kata/5782dd86202c0e43410001f6/train/javascript

// Ваша задача — написать функцию, которая получает в качестве единственного аргумента строку,
// содержащую числа, разделенные одинарными пробелами.Внутри каждого числа есть одна буква алфавита.

//   Example : "24z6 1x23 y369 89a 900b"
// Как показано выше, эта буква алфавита может появляться в любом месте числа.
// Вам нужно извлечь буквы и отсортировать числа по соответствующим буквам.

//   Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246
// (ordered according to the alphabet letter)
// Вот и наступает самая сложная часть: теперь вам нужно выполнить серию вычислений
//  над извлеченными вами числами.

// Последовательность вычислений такова + - * /.
//  Основные математические правила НЕ применяются,
//  вы должны выполнять каждое вычисление именно в этом порядке.
// Это должно работать для любого размера отправленных чисел(после деления вернуться к сложению и т.д.).
// В случае повторяющихся букв алфавита их необходимо расположить по номеру,
// который появился первым во входной строке.
// Не забудьте также округлить окончательный ответ до ближайшего целого числа.
//   Examples :
// "24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
// "24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
// "10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

function doMath(string) {
  const arr = string.split(" ");
  let res = [];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i]
      .split("")
      .filter((el) => isNaN(+el))
      .join("");
    let num = arr[i]
      .split("")
      .filter((el) => !isNaN(+el))
      .join("");
    newArr.push({
      letter: `${letter}`,
      num: `${num}`,
    });
  }
  let sortArr = newArr.sort((a, b) => {
    if (a.letter < b.letter) {
      return -1;
    }
    if (a.letter > b.letter) {
      return 1;
    }
    return 0;
  });

  let numArr = [];
  sortArr.forEach((el) => numArr.push(+el.num));

  // console.log(numArr);
  for (let j = 0, k = 0; j < numArr.length; j++, k += 4) {
    // res.push(fuu(numArr[j], numArr[j + 1], numArr[j + 2], numArr[j + 3], numArr[j + 4]))
    console.log(
      numArr[j],
      numArr[j + 1],
      numArr[j + 2],
      numArr[j + 3],
      numArr[j + 4]
    );
  }

  function fuu(a, b = 0, c = 0, d = 1, e = 1) {
    return Math.round(((a + b - c) * d) / e);
  }

  return res;
}
// doMath("24z6 1z23 y369 89z 900b")

console.log(doMath("24z6 1z23 y369 89z 900b")); //, 1414);
// console.log(doMath("111a 222c 444y 777u 999a 888p"))//, 1459);

function doMath(str) {
  var operation = [
    (a, b) => {
      return a / b;
    },
    (a, b) => {
      return a + b;
    },
    (a, b) => {
      return a - b;
    },
    (a, b) => {
      return a * b;
    },
  ];

  var numbers = str.split(" ").map((s) => {
    return s[s.search(/[a-z]/)] + s.replace(/[a-z]/, "");
  });

  for (var i = 0, items = numbers.length; i < items; i++) {
    for (var j = 1; j < items - i; j++) {
      if (numbers[j].charAt(0) < numbers[j - 1].charAt(0)) {
        var temp = numbers[j];
        numbers[j] = numbers[j - 1];
        numbers[j - 1] = temp;
      }
    }
  }

  numbers = numbers.map((s) => {
    return +s.slice(1);
  });

  return Math.round(
    numbers.reduce((prev, cur, key) => {
      return operation[key % 4](prev, cur);
    })
  );
}

// ========================

// https://www.codewars.com/kata/58de08d376f875dbb40000f1/train/javascript

// Команды будут поданы как объект({}).
// Ключевым моментом будет их позиция по итогам прошлого сезона, а ценностью будет название клуба, например, «Арсенал».

// Выходными данными должен быть объект({}) с ключом в качестве начальной позиции клуба в новом сезоне,
//  а значением должно быть название клуба, например «Арсенал».

// Например.Если в прошлом сезоне турнирная таблица была:

// 1: «Лидс Юнайтед» 2: «Ливерпуль» 3: «Манчестер Сити» 4: «Ковентри» 5: «Арсенал»

// Тогда турнирная таблица нового сезона должна

// 1: «Лидс Юнайтед» (первый в прошлом сезоне)
// 2: «Арсенал» (в алфавитном порядке)
// 3: «Ковентри» (в алфавитном порядке)
// 4: «Ливерпуль» (в алфавитном порядке)
// 5: «Манчестер Сити» (в алфавитном порядке)

function premierLeagueStandings(teamStandings) {
  let res = {};

  res[1] = teamStandings[1];
  delete teamStandings[1];
  let arr = Object.values(teamStandings).sort();

  for (let i = 0; i < arr.length; i++) {
    res[i + 2] = arr[i];
  }

  console.log(res);
  return res;
}

premierLeagueStandings({ 1: "Arsenal" }); //, { 1: 'Arsenal' }, 'Should return Arsenal as position 1')
premierLeagueStandings({
  2: "Arsenal",
  3: "Accrington Stanley",
  1: "Leeds United",
}); //, { 3: 'Arsenal', 2: 'Accrington Stanley', 1: 'Leeds United' },
premierLeagueStandings({
  1: "Leeds United",
  2: "Liverpool",
  3: "Manchester City",
  4: "Coventry",
  5: "Arsenal",
}); //, { 1: 'Leeds United', 2: 'Arsenal', 3: 'Coventry', 4: 'Liverpool', 5: 'Manchester City' },

// ==============
// https://www.codewars.com/kata/5ba38ba180824a86850000f7

// Удалите дубликаты из списка целых чисел, сохранив последнее (крайнее правое) вхождение каждого элемента.

// Пример:
// Для ввода:[3, 4, 4, 3, 6, 3]

// удалить 3индекс at0
// удалить 4индекс at1
// удалить 3индекс at3
// Ожидаемый результат:[4, 6, 3]

function solve(arr) {
  let rev = arr.reverse();
  let uni = [...new Set(rev)].reverse();

  return uni;
}

solve([3, 4, 4, 3, 6, 3]); //,[4,6,3]);
solve([1, 2, 1, 2, 1, 2, 3]); //,[1,2,3]);
solve([1, 2, 3, 4]); //,[1,2,3,4]);
solve([1, 1, 4, 5, 1, 2, 1]); //,[4,5,2,1]);
solve([1, 2, 1, 2, 1, 1, 3]); //,[2,1,3]);
