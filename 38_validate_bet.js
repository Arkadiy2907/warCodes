// Вас попросили написать простой валидатор для компании, которая планирует ввести ставки на лотерею
//  с помощью текстовых сообщений.Один и тот же валидатор будет использоваться
//   для нескольких игр: например, 5 из 90, 7 из 35 и т.д. (Nиз M)

// Текстовые сообщения должны содержать абсолютно Nуникальные числа между 1и M(включая оба),
//  разделенные запятой( ,) и / или пробелами.Любой другой символ делает ставку недействительной.

// Твое задание
// На вход вы получаете тип игры и текстовое сообщение пользователя, и вам нужно проверить,
//  действительна ли ставка или нет.Если это допустимо, верните выбранные числа в виде списка,
//  отсортированного в порядке возрастания.Если он недействителен, верните None, null, nilв соответствии с вашим языком.

//   Примечание.Начальные и конечные пробелы не проверяются.Табуляции, новые строки и другие пробелы также не проверяются.
// Подумайте о классическом пользователе Nokia 3310 для справки: -)

// Примеры

// validate_bet([5, 90], "1 2 3 4 5")-- > [1, 2, 3, 4, 5]
// validate_bet([5, 90], "5 , 3, 1  4,2")-- > [1, 2, 3, 4, 5]
// validate_bet([5, 90], "1, 2; 3, 4, 5")-- > None / null / nil
// validate_bet([5, 90], "1, 2, 3, 4")-- > None / null / nil
// validate_bet([5, 90], "1, 2, 3, 4, 95")-- > None / null / nil

function validateBet(game, text) {
  let arr = []
  let str = text.split(' ').filter(el => el !== "").map(el => el.split(','))
  str = flatDeep(str, Infinity).filter(Boolean)

  for (let i = 0; i < str.length; i++) {
    if (isNaN(Number(str[i]))) return null;
    if (Number(str[i] <= game[1]) && (str[i]) !== '0') {
      arr.push(Number(str[i]))
    } else return null;
  }
  if (new Set(arr).size !== arr.length) return null;

  if (game[0] !== arr.length) {
    return null;
  } else return arr.sort((a, b) => a - b);
}

function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
    : arr.slice();
};


console.log(validateBet([5, 90], "1 2 3 4 5"))
console.log(validateBet([5, 90], "5 , 3, 1  4,2"))
console.log(validateBet([5, 90], "1, 2; 3, 4, 5"))
console.log(validateBet([5, 90], "1, 2, 3, 4"))
console.log(validateBet([5, 90], "0 1, 2, 3, 4"))
console.log(validateBet([5, 90], "1 1, 2, 3, 4"))
console.log(validateBet([3, 42], "8  18,22"))

// =====================================================

function validateBet(game, text) {
  let [n, range] = game
  let arr = (text.match(/\d+/g) || []).map(x => +x)
  if (/[^\d ,]/.test(text) || arr.length != n || new Set(arr).size != n || arr.some(x => x > range || x < 1))
    return null
  return arr.sort((a, b) => a - b)
}

// ====================================================

function validateBet(game, text) {
  let error = false;
  const [n, m] = game;

  let textArray = text.split(/[ ,]+/).map((item) => {
    const temp = Number(item);
    if (!Number.isNaN(temp) && temp >= 1 && temp <= m) {
      return Number(item);
    } else error = true;
  });

  if (textArray.length !== n) return null;

  console.log(new Set(textArray));

  if (new Set(textArray).size !== n) return null;


  if (error) return null;

  return textArray.sort((a, b) => a - b);
}