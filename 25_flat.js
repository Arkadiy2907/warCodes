//убрать вложенность массива не используя flat

const arr = [1, 2, [3, 4, [5]], 4, [5]]

// const arrFlat = (x) => x.flat(Infinity)

// console.log(arrFlat(arr))

const arrNoFlat1 = (x) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(x[i])) {
      newArr.push(...arrNoFlat(x[i]));
    } else {
      newArr.push(x[i]);
    }

  }
  return newArr.filter(i => i !== undefined)
}

// console.log(arrNoFlat1(arr))

const arrNoFlat2 = (x) => x
  .toString()
  .split(',')
  .map(i => +i)

console.log(arrNoFlat2(arr))