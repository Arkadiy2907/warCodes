// https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript

// Вы получаете несколько случайных элементов в виде строки,
// разделенной пробелами.Проверьте, являются ли элементы частью возрастающей
//  последовательности целых чисел, начиная с 1, с шагом 1(например, 1, 2, 3, 4).

// Возвращаться:

// 0если элементы могут образовывать такую ​​последовательность, и ни один номер не пропущен («не нарушен», например "1 2 4 3")
// 1если во входных данных есть какие-либо нечисловые элементы («недопустимые», например "1 2 a")
// nесли элементы являются частью такой последовательности, но некоторые числа отсутствуют и nявляется наименьшим из них («сломанным», например "1 2 4"или "1 5")
// Примеры
// "1 2 3 4"  ==>  return 0, because the sequence is complete

// "1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

// "2 1 3 a"  ==>  return 1, because it contains a non numerical character

// "1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

// "1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest

function findMissingNumber(sequence) {
  //your code here
  if (sequence === "") return 0;
  let arr = sequence.split(" ").map((el) => parseInt(el));
  let arrNum = arr.filter((el) => !isNaN(el)).sort((a, b) => a - b);
  // console.log(arr, arrNum);
  if (arr.length !== arrNum.length) return 1;
  if (arrNum[0] !== 1) return 1;

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] + 1 !== arrNum[i + 1]) {
      if (arrNum[i] !== arrNum.length) {
        return arrNum[i] + 1;
      } else {
        return 0;
      }
    }
  }

  return 0;
  // console.log(res);
}

console.log(findMissingNumber("1 2 3 5"));
console.log(findMissingNumber("2 1 4 3 a"));
console.log(findMissingNumber("1 2 3 4 5"));

function findMissingNumber(sequence) {
  if (sequence.length == 0) return 0;
  sequence = sequence.split(" ").map(Number);
  for (i = 1; i <= sequence.length; i++) if (i != sequence[i - 1]) return i;
  return 0;
}
