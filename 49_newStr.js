// даны список и число создать новый с список который соодержит каждое число списка не более N раз, без изменения порядка

const arr1 = [1, 2, 3, 4, 54, 4, 3, 3, 2, 1];

const getNewStr = (arr, n) => {
  let obj = {};

  return arr
    .map((el) => {
      if (!obj[el]) {
        obj[el] = 1;
      } else {
        obj[el]++;
      }

      // arr.reduce(function(o,v){ o[v] ? o[v]++ : (o[v] = 1); return o; }, {});

      if (obj[el] <= n) {
        return el;
      } else {
        return null;
      }
    })
    .filter(Boolean);
};
// -------------------------------
const getNewStr2 = (arr, n) => {
  let obj = {};

  return arr.filter(
    (el) => (!obj[el] ? (obj[el] = 1) : obj[el]++, obj[el] <= n && el)
  );
};

console.log(getNewStr2(arr1, 2));
