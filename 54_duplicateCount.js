// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

// Подсчитайте количество дубликатов
// Напишите функцию, которая будет возвращать количество различных
//  буквенных символов и цифр, не зависящих от регистра, которые 
// встречаются во входной строке более одного раза.
// Можно предположить, что входная строка содержит только буквы(как прописные, так и строчные) и числовые цифры.

//   Пример
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice(`b` and`B`)
// "неделимость" -> 1 # 'i' occurs six times
// "неделимость" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
// !!!! в этой ф-и считается максимальный дубликат а надо считать КОЛИЧЕСТВО ДУБЛИКАТОВ
function duplicateCount(text) {
  //...
  let obj = {}
  let buf = text.toLowerCase()
  let count = 0

  if (text === '') return 0;
  for (let i = 0; i < buf.length; i++) {
    if (!obj[buf[i]]) {
      obj[buf[i]] = 1
    } else {
      ++obj[buf[i]]
      if (count < obj[buf[i]]) {
        count = obj[buf[i]]
      }
    }
  }
  return count
}

function duplicateCount(text) {
  //...
  let obj = {}
  let buf = text.toLowerCase()
  let count = 0

  if (text === '') return 0;
  for (let i = 0; i < buf.length; i++) {
    if (!obj[buf[i]]) {
      obj[buf[i]] = 1
    } else {
      ++obj[buf[i]]
      if (2 === obj[buf[i]]) {
        count++
      }
    }
  }
  return count
}

function duplicateCount(text) {
  var count = text.toLowerCase().split('').reduce((accum, curr) => {
    accum[curr] ? accum[curr] += 1 : accum[curr] = 1;
    return accum;
  }, {});
  return Object.keys(count).filter(key => count[key] > 1).length;
}

console.log(duplicateCount(""), 0);//0
console.log(duplicateCount("abcde"));//0
console.log(duplicateCount("aabbcde"));//2
console.log(duplicateCount("aabBcde"));//2
console.log(duplicateCount("Indivisibility"))//1
console.log(duplicateCount("Indivisibilities"))//2