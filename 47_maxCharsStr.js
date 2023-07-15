let str1 = 'asdfadg'
function maxRecurringChar(str) {
  const obj = {};

  let countMax = 0;
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }

    if (countMax < obj[str[i]]) {
      countMax = obj[str[i]];
      res = str[i];
    }
  }

  return res;
}

console.log(maxRecurringChar(str1))

function maxRecurringChar(str) {
  const charMap = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;

    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

function maxRecurringChar(str) {
  return str.split('').reduce((acc, char) => {
    const count = str.split(char).length - 1;
    return count > acc.count ? { char, count } : acc;
  }, { char: '', count: 0 }).char;
}