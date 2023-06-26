//создать ф-ю палиндром проверяющую строки с символами с ограничением по памяти O(1)
//https://www.youtube.com/watch?v=8pRGuvkzK7Y&t=3325s

const str = 'kjbhklj kjhkjhn! kh;kh'
const test = 'казак'


const isEquals = (str1, str2) => str1.toLowerCase() === str2.toLowerCase()
const isLetter = char => char.toLowerCase() !== char.toUpperCase()//при символе он остается таким же

//производим перебор и сравнение строки из начала и конца
const isPalendrom = str => {
  let start = 0
  let end = str.length - 1;

  while (start < end) {
    const firstChar = str[start];
    const endChar = str[end];

    if (!isLetter(firstChar)) {
      start += 1;
      continue;
    }

    if (!isLetter(endChar)) {
      end -= 1;
      continue;
    }

    if (!isEquals(firstChar, endChar)) return false;

    start += 1;
    end -= 1;
  }

  return true
}

console.log(isPalendrom(test))
console.log(isPalendrom(str))

