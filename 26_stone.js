// Даны две строки строчных латинских символов: строка J и строка S.Символы, входящие в строку J, — «драгоценности», входящие в строку S — «камни».
//  Нужно определить, какое количество символов из S одновременно являются «драгоценностями». Проще говоря, нужно проверить, какое количество символов из S входит в J.

const findJules = (stone, jules) => {
  let res = 0
  for (let i = 0; i < stone.length; i++) {
    if (jules.includes(stone[i])) ++res;
  }
  return res
}

console.log(findJules('assasa', 'a'));


