// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

// Завершите функцию scramble(str1, str2), которая возвращает значение true, если часть str1символов можно переставить для соответствия str2, и возвращает значение в противном случае false.

// Примечания:

// Будут использоваться только строчные буквы (az). Никакие знаки препинания и цифры не будут включены.
// Необходимо учитывать производительность.
// Примеры
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  let l1 = str1.length;
  let l2 = str2.length;
  let minLength = l1 <= l2 ? l1 : l2;

  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let res = arr1.filter((el) => arr2.includes(el));
  return res.length === minLength;
}

function scramble(str1, str2) {
  const frequencyCount1 = {};
  const frequencyCount2 = {};

  for (let char of str1) {
    frequencyCount1[char] = (frequencyCount1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCount2[char] = (frequencyCount2[char] || 0) + 1;
  }

  for (let char in frequencyCount2) {
    if (
      !frequencyCount1[char] ||
      frequencyCount1[char] < frequencyCount2[char]
    ) {
      return false;
    }
  }

  return true;
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
