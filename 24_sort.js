// сортировка Пузырьком

const array = [1, 2, 6, 3, 0]

const sort = (arr) => {

  for (let i = 0; i < arr.length; i++) {


    for (let j = 0; j < arr.length; j++) {
      let mid = arr[j];
      if (arr[j] > arr[j + 1]) {//если первый эл больше второго то поменять их местами
        arr[j] = arr[j + 1]
        arr[j + 1] = mid
      }
    }
  }
  return arr
}

console.log(sort(array))


