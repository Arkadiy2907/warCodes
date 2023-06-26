// https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript
// Бесконечное количество полок расположены одна над другой в шахматном порядке.
// Кот может прыгать либо на одну, либо на три полки одновременно:
//  с полки iна полку i + 1или i + 3(кошка не может залезть на полку прямо над головой), согласно иллюстрации:

// Найдите минимальное количество прыжков, чтобы пройти от начала до конца

function solution(start, finish) {
  //Mew
  let count = 0

  // if (finish % 3 === 0)
  let arr = []

  if (finish - start === 2) return 2;
  if (finish - start === 1) return 1;

  for (let i = start; i <= finish; i++) {
    if (i % 3 === 0) {
      count++;
    }
  }

  // console.log('count*3', count * 3);
  // console.log('count', count);
  // console.log('finish - count * 3 === 1', finish - count * 3 === 1);

  if (count * 3 === finish) return count;
  else return finish - count * 3 === 1 ? count + 1 : count + 2;


}

console.log(solution(1, 5));//2

// console.log(1 % 1);


// for (let i = start; i <= finish; i++) {
//   if (i % 3 === 0) {
//     count++;
//   }
// }