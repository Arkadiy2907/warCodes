// найти пересеч в объекты

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 3, c: 4 };

const getNewObj = (o1, o2) => {
  let resObj = {}
  const arr1 = Object.keys(o1);

  arr1.forEach(el => {
    if (o2.hasOwnProperty(el)) {
      if (o2[el] === o1[el]) {
        resObj[el] = o2[el]
      }
    }
  })

  return resObj;
}


// console.log("a")

// console.log("a")
// ============================================================
// проверить объект на наличие false значений если в одном из value что либо есть true то вернуть true

const obj = {
  unde: '',
  aa: 's',
}

const isObj = o => {
  let res = true;
  if (Object.keys(o).length === 0) res = false;

  Object.values(o).forEach(el => {
    if (el === '') res = false;
    if (el === undefined) res = false;
    if (isNaN(el)) res = false;
  })

  let arr = []

  Object.values(o).forEach(el => {
    if (el !== '' || el !== undefined || !isNaN(el)) {
      arr.push(el);
    }
    // else {
    //   res = false;
    // }
  })

  if (arr.length !== 0) res = true;


  return res
}


console.log(isObj(obj))
// ============================================

// получить порядковый номер дня в году и номер недели

const getNumDay = (d, m, y) => {
  let myDate = new Date(y, m, d);
  let startDate = new Date(myDate.getFullYear(), 0, 0);
  let buf = myDate - startDate;

  let numDay = Math.floor(buf / (1000 * 60 * 60 * 24));
  let numWeek = Math.floor(buf / (1000 * 60 * 60 * 24 * 7));

  return `номер дня в году:${numDay}, номер недели в году:${numWeek}`
};

console.log(getNumDay(31, 7, 2023));


