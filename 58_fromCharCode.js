// https://www.codewars.com/kata/57a23c2acf1fa514d0001034/train/javascript

// Вы проснулись от сильной головной боли и не можете найти ключи от машины.
// Вы найдете записку с подсказкой, в которой говорится:

// «Если вы читаете это, значит, я покинул штат и нахожусь на пути к свободе.
// Просто чтобы вам было интересно, я также предоставил вам кое - что, чтобы вы могли меня выследить.Да начнется погоня…»

// Учитывая массив двоичных чисел, выясните и верните сообщение преступника, чтобы узнать, кто взял пропавший ключ от машины.

// ['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010'] =>
// 'Alexander'

function whoTookTheCarKey(message) {
  let password = '';

  for (let i = 0; i < message.length; i++) {
    password += String.fromCharCode(parseInt(message[i], 2));
  }

  return password
}

console.log(
  whoTookTheCarKey(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010'])
)//'Alexander'

var whoTookTheCarKey = (arr) => arr.map(el => String.fromCodePoint(parseInt(el, 2))).join('')

console.log(a)