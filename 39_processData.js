// У вас есть двумерный список в следующем формате:

// data = [[2, 5], [3, 4], [8, 7]]
// Каждый подсписок содержит два элемента, и каждый элемент в подсписках является целым числом.

// Напишите функцию process_data() / processData(), которая обрабатывает каждый подсписок следующим образом:

// [2, 5]-- > 2 - 5-- > -3
// [3, 4]-- > 3 - 4-- > -1
// [8, 7]-- > 8 - 7-- > 1
// а затем возвращает произведение всех обработанных подсписков: -3 * -1 * 1-- > 3.

// Для ввода вы можете быть уверены, что ни основной список, ни подсписки не будут пустыми.

const data2 = [[2, 5], [3, 4], [8, 7]];

function processData(data) {
  let midlArr = []

  for (let i = 0; i < data.length; i++) {
    midlArr.push(data[i][0] - data[i][1]);
    // midlArr.reduce((acc, el) => acc * el, 0)
  }

  // midlArr.forEach(el => )
  // console.log(midlArr.reduce((acc,el) => acc*el, 1));

  // data.forEach((el) => midlArr.push(map(el => +el)))
  return midlArr.reduce((acc, el) => acc * el, 1);
  //your code here
}

console.log(processData(data2))

// =================================

function processData(data) {
  return data.reduce((a, [b, c]) => a * (b - c), 1)
}

function processData(data) {
  return data.map(el => el[0] - el[1]).reduce((result, el) => result * el)
}