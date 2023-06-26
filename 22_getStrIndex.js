// let str = "Aabab";
// const obj = {
//   a: [0,1,3]
//   b: [2,4]
// };

// вернуть массив, содержащий элементы ['a: 0,1,3', 'b: 2,4'] т е символ как ключ и на каком индексе находится

function getStrIndex(str) {
  const filterStr = str.toLowerCase().replace(/[^a-z]/g, '');
  const obj = {};
  const arr = []

  for (let i = 0; i < filterStr.length; i++) {

    // если в obj нет ключа то создаем его если есть то добавляем его

    const key = filterStr[i];
    if (!obj[key]) {
      obj[key] = [i];
    }
    else {
      obj[key].push(i);
    }
  }

  Object.entries(obj).forEach(([key, value]) => {
    arr.push(`${key}: ${value}`);
  })

  return arr


}


console.log(getStrIndex('Aabab'));