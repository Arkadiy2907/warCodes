// вывести сколько раз повторяется буква в строке

const str1 = 'asdfasd'

const getNewStr = str => {

  let obj = {};

  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char]++
    }
  }

  return Object.keys(obj).map(el => `${el}${obj[el]}`).join('')
}

getNewStr(str1)


const getNewStr2 = str => [...new Set(str)].map(char => `${char}${str.split(char).length - 1}`).join('');



console.log(getNewStr2(str1))