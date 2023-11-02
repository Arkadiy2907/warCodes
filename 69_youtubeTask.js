// https://www.youtube.com/watch?v=G7pAP1TvZSw&t=9s

//1) реализовать ф-ю кот будет сумировать числа и выводить в логи

function sum(a) {
  console.log(a);
  return function (b) {
    return sum(b + a);
  };
}

sum(2)(3)(4);

// 2) ф-я принимает два объекта с разными ключами некоторы из которых могут пересекаться.
// надо вернуть первый объект с обновленными значениями из второго (которые пересекаются)

let obj1 = {
  a: "foo",
  b: "boo",
};

let obj2 = {
  a: "boo",
  c: "boo",
};

function changeObj(o1, o2) {
  for (let key in o1) {
    if (o2.hasOwnProperty(key)) {
      o1[key] = o2[key];
    }
  }
  return o1;
}

console.log(changeObj(obj1, obj2));

// =========
