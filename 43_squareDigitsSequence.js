// https://www.codewars.com/kata/5886d65e427c27afeb0000c1/train/javascript

// Рассмотрим последовательность чисел a 0, a 1, ..., an, в которой элемент равен сумме квадратов цифр предыдущего элемента.
// Последовательность заканчивается, как только элемент, который уже был в последовательности, появляется снова.

// По первому элементу a0найдите длину последовательности.

//   Пример
// Для a0 = 16 выход должен быть9

// Вот как строятся элементы последовательности:

// а0 = 16

// а1 = 1^ 2 + 6^ 2 = 37

// а2 = 3^ 2 + 7^ 2 = 58

// а3 = 5^ 2 + 8^ 2 = 89

// а4 = 8^ 2 + 9^ 2 = 145

// а5 = 1^ 2 + 4^ 2 + 5^ 2 = 42

// а6 = 4^ 2 + 2^ 2 = 20

// а7 = 2^ 2 + 0^ 2 = 4

// a8 = 4^ 2 = 16, что уже произошло до(a0)

// Таким образом, в последовательности 9 элементов.

// Для a0 = 103 выход должен быть4

// Последовательность выглядит следующим образом: 103 -> 10 -> 1 -> 1, всего 4 элемента.

//   Ввод, вывод
//   [input]целое числоa0

// Первый элемент последовательности, положительное целое число.

//   Ограничения: 1 ≤ a0 ≤ 650.

//   [output]целое число

// function getArr(n) {
//   return n.toString().split('').map(el => Number(el));
// }

// function squareDigitsSequence(a0) {
//   //coding and coding...
//   let arr = getArr(a0);
//   let sum
//   let count = 1;

//   // for (let i = 0; i < arr.length; i++) {
//   //   // console.log(index)
//   // }

//   // sum = arr.reduce((acc, el) => acc + (el * el), 0)

//   while (true) {
//     sum = arr.reduce((acc, el) => acc + (el * el), 0);
//     count++

//     if (sum === a0) {
//       return count;
//     }

//     arr = getArr(sum);
//   }
// }

// console.log(squareDigitsSequence(1))

// ===============================work
function squareDigitsSequence1(a0) {
  let sequence = [a0];

  while (true) {
    let nextElement = sequence[sequence.length - 1].toString().split('').reduce((sum, digit) => sum + digit ** 2, 0);
    if (sequence.includes(nextElement)) {
      return sequence.length + 1;
    } else {
      sequence.push(nextElement);
    }
  }
}

console.log(squareDigitsSequence1(103))

//   Затем он входит в цикл while, который будет продолжать добавлять элементы в массив последовательности,
//   пока не встретит элемент, который уже появился в массиве.В цикле функция вычисляет следующий элемент
// последовательности, преобразуя предыдущий элемент в строку, разбивая ее на отдельные цифры, возводя
//  каждую цифру в квадрат, а затем суммируя квадраты.
// Затем функция проверяет, существует ли уже элемент nextElement в массиве
// последовательности, используя метод include.Если это так, функция возвращает длину массива последовательности.
// В противном случае он добавляет nextElement в массив последовательности и продолжает итерацию.
// =========================

function squareDigitsSequence(a0, values = []) {
  values.push(a0)
  const value = (a0 + '').split('').reduce((prev, current) => prev + Math.pow(current, 2), 0)
  if (values.indexOf(value) === -1) {
    return squareDigitsSequence(value, values)
  }

  return values.length + 1
}

