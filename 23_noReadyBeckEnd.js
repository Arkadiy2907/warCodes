// https://www.youtube.com/watch?v=TDiO1IZ6cVw&t=2161s

// не готов бэк создать генератор создающий фио и дату рождения с 18-50лет 
// 1) getRandomPers()вернет объект с данными одного лица(случайно)
// 2) getRandomPers(n)вернет объект из n случайно сгенер-х лиц {count:n, pers:[...]  }


const manIm = ['Вася', 'Петя', 'Дима', 'Миша'];
const womanIm = ['Маша', 'Даша', 'Лена', 'Света'];

const manFm = ['Иванов', 'Петров', 'Сидоров', 'Смирнов'];
const womanFm = ['Иванова', 'Петрова', 'Сидорова', 'Смирнова'];

const manOt = ['Васильевич', 'Петрович', 'Дмитриевич', 'Михайлович'];
const womanOt = ['Васильевна', 'Петровна', 'Дмитриевна', 'Михайловна'];

const person = ['man', 'woman']

const randomNum = (arr) => Math.floor(Math.random() * arr.length)
const randomYear = (min = 18, max = 50) => Math.floor(Math.random() * (max + 1 - min)) + min


function getRandomPers(n = 1) {
  let result = {}
  let array = []

  for (let i = 0; i < n; i++) {
    if (randomNum(person) === 0) {
      array.push(` ${manIm[randomNum(manIm)]} ${manOt[randomNum(manOt)]} ${manFm[randomNum(manFm)]} ${randomYear()} yeas old`)
    } else {
      array.push(` ${womanIm[randomNum(womanIm)]} ${womanOt[randomNum(womanOt)]} ${manFm[randomNum(manFm)]} ${randomYear()} yeas old`)
    }
  }

  result.count = n;
  result.pers = array;

  return result;
}

console.log(getRandomPers())
console.log(getRandomPers(4))