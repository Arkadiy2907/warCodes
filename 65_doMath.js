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
  const arr = string.split(' ')
  let res = []
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i].split('').filter(el => isNaN(+el)).join('')
    let num = arr[i].split('').filter(el => !isNaN(+el)).join('')
    newArr.push({
      letter: `${letter}`,
      num: `${num}`
    })
  }
  let sortArr = (newArr.sort((a, b) => {
    if (a.letter < b.letter) {
      return -1;
    }
    if (a.letter > b.letter) {
      return 1;
    }
    return 0;
  }));

  let numArr = []
  sortArr.forEach(el => numArr.push(+el.num))

  // console.log(numArr);
  for (let j = 0, k = 0; j < numArr.length; j++, k += 4) {
    // res.push(fuu(numArr[j], numArr[j + 1], numArr[j + 2], numArr[j + 3], numArr[j + 4]))
    console.log(numArr[j], numArr[j + 1], numArr[j + 2], numArr[j + 3], numArr[j + 4])
  }

  function fuu(a, b = 0, c = 0, d = 1, e = 1) {
    return Math.round((((a + b) - c) * d) / e)
  }


  return res;
}
// doMath("24z6 1z23 y369 89z 900b")

console.log(doMath("24z6 1z23 y369 89z 900b"))//, 1414);
// console.log(doMath("111a 222c 444y 777u 999a 888p"))//, 1459);