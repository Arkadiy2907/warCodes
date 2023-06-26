// Ваша задача здесь состоит в том, чтобы написать функцию(keepOrderв JS / CoffeeScript, keep_orderв Ruby / Crystal / Python, keeporderв Julia),
//   которая принимает отсортированный массив aryи значение valи возвращает наименьший индекс, куда вы можете вставить val,
//     чтобы сохранить отсортированность массив.Входной массив всегда будет отсортирован в порядке возрастания.Он может содержать дубликаты.

// Не изменяйте ввод.

// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^ (index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//            ^ (index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^ (index 2)


const keepOrder = (ary, val) => {
  let index = 0

  for (let i = 0; i < ary.length; i++) {
    if (ary[i] >= val) {
      index = i;
      break;
    } else {
      index = i + 1;
    }


  }

  return index;
}


console.log(keepOrder([1, 2, 3, 4, 7], 5));//4
console.log(keepOrder([1, 2, 3, 4, 7], 0));//0
console.log(keepOrder([1, 1, 2, 2, 2], 2))//2
console.log(keepOrder([1, 2, 3, 4], 5))//4
console.log(keepOrder([1, 2, 3, 4], -1))//0
console.log(keepOrder([1, 2, 3, 4], 2))//1
console.log(keepOrder([1, 2, 3, 4], 0))//0

function keepOrder(ary, val) {
  let idx = ary.findIndex(x => val <= x)
  return idx < 0 ? ary.length : idx
}