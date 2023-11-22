// Есть строка, состоящая из разных скобок, проверить закрыты ли все.  Пример строки: "())({}}{()][]["
function validBraces(str) {
  let arrOpenSymbols = [],
    result = false,
    countOpenSymbols;
  if (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
        arrOpenSymbols.push(str[i]);
      } else {
        countOpenSymbols = arrOpenSymbols.length;
        if (
          (str[i] === '}' && arrOpenSymbols[countOpenSymbols - 1] === '{') ||
          (str[i] === ']' && arrOpenSymbols[countOpenSymbols - 1] === '[') ||
          (str[i] === ')' && arrOpenSymbols[countOpenSymbols - 1] === '(')
        ) {
          arrOpenSymbols.pop();
        }
      }
    }

    if (arrOpenSymbols.length === 0) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}
console.log('');
console.log(validBraces('()'));
console.log(validBraces('[)'));
console.log(validBraces('{}[]()'));
console.log(validBraces('([{}])'));
console.log(validBraces('())({}}{()][]['));
