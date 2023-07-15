// отсортировать не чет по возрос а четные оставить на месте

const arr1 = [999, 22, 3, -47, 5, 2, 58, 7, 4];

// const sortArr = arr => {

//   let oddArr = [];
//   let evenArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenArr.push(arr[i]);
//     } else {
//       oddArr.push(arr[i]);
//     }
//   }

//   oddArr.sort((a, b) => a - b);

//   let resultArr = [];

//   for (let i = 0, j = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       resultArr.push(evenArr[j]);
//       j++;
//     } else {
//       resultArr.push(oddArr.shift());
//     }
//   }
//   return resultArr;
// }


// ------------------------------------------------

// const sortArr = arr => {

//   let oddArr = [];
//   let evenArr = [];

//   arr.forEach(el => el % 2 === 0 ? evenArr.push(el) : oddArr.push(el))

//   oddArr.sort((a, b) => a - b);

//   return arr.map(el => el % 2 === 0 ? evenArr.shift() : oddArr.shift());
// }

// ----------------------------------------------------

const sortArr = (arr) => {
  const oddArr = arr.filter(el => el % 2 !== 0).sort((a, b) => a - b);
  return arr.map(el => el % 2 !== 0 ? oddArr.shift() : el);
};

// const sortArr = arr => arr.filter(el => el % 2 === 0).map(el => arr.filter(el => el % 2 !== 0).sort((a, b) => a - b).shift() || el);


// const sortArr = arr => arr.reduce((acc, val) => val % 2 === 0 ? [...acc.slice(0, i), val, ...acc.slice(i)] : acc, []).reverse();


console.log(sortArr(arr1));