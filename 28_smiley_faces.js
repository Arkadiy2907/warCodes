// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

// Учитывая массив(arr) в качестве аргумента, завершите функцию countSmileys, которая должна вернуть общее количество улыбающихся лиц.

// Правила улыбающегося лица:

// Каждый смайлик должен содержать допустимую пару глаз.Глаза могут быть отмечены как: или;
// У смайлика может быть нос, но не обязательно.Допустимые символы для носа - или~
//   Каждое улыбающееся лицо должно иметь улыбающийся рот, который должен быть отмечен либо значком, ) либоD
// Не допускается использование дополнительных символов, кроме упомянутых.

// Примеры допустимых смайликов: :) : D; -D : ~)
// Недопустимые смайлики: ; ( :> :} :]

// Пример:
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {

  let count = 0;
  if (arr.length === 0) return 0;

  for (let item of arr) {
    let spl = item.split('')

    // if (spl.length === 1) count;    

    if (spl.length === 2) {
      count = (spl[0] === ':' || spl[0] === ';') && (spl[1] === ')' || spl[1] === 'D') ? count + 1 : count;
    }

    if (spl.length === 3) {
      count = (spl[0] === ':' || spl[0] === ';') && (spl[1] === '-' || spl[1] === '~') && (spl[2] === ')' || spl[2] === 'D') ? count + 1 : count;
    }

  }



  return count;
}


console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;
// ===================================================================================================

function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

// ================================================================

const SMILING = /[:;]{1}[-~]?[)D]{1}/;

const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length;