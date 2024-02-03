console.log('Start');

setTimeout(() => {
  console.log('Timeout1');
}, 0);

Promise.resolve().then(() => {
  console.log('Then1');
});

const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log('in setTimeout1'), 1000);

myPromise(1000).then((res) => console.log('in Promise 1'));

setTimeout(() => console.log('in setTimeout2'), 100);

myPromise(1000).then((res) => console.log('in Promise 3'));

Promise.resolve().then(() => setTimeout(() => console.log('Timeout2')));

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.reject(3).catch(console.log);

myPromise(2000).then((res) => console.log('in Promise 2'));

setTimeout(() => console.log('in setTimeout3'), 2000);

const p1 = new Promise((resolve) => {
  console.log('Promise2');
  resolve();
  console.log('Promise3');
});

p1.then(() => {
  console.log('Then2');
});

queueMicrotask(() => {
  console.log('QueueMicrotask');
});

console.log('End');

// Start
// Promise2
// Promise3
// End
// Then1
// 3
// Then2
// QueueMicrotask
// Timeout1
// 4
// Timeout2
//   in setTimeout2
//   in setTimeout1
//   in Promise 1
//   in Promise 3
//   in Promise 2
//   in setTimeout3
// ====================================================

// const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })
// setTimeout(() => console.log('in setTimeout1'), 1000);
// myPromise(1000).then(res => console.log('in Promise 1'));
// setTimeout(() => console.log('in setTimeout2'), 100);
// myPromise(2000).then(res => console.log('in Promise 2'));
// setTimeout(() => console.log('in setTimeout3'), 2000);
// myPromise(1000).then(res => console.log('in Promise 3'));
// setTimeout(() => console.log('in setTimeout4'), 1000);
// myPromise(5000).then(res => console.log('in Promise '));

// in setTimeout2
//   in setTimeout1
//   in Promise 1
//     in Promise 3
//       in setTimeout4
//       in Promise 2
//         in setTimeout3
//         in Promise

// ==================================

// const [isDark, setIsDark] = useState(true);

// useEffect(() => {
//   console.log("Effect");
// }, []);

// useEffect(() => {
//   console.log("Effect2");
// }, [isDark]);

// useLayoutEffect(() => {
//   console.log("LayoutEffect");
// }, []);

// console.log("Render");

// return (
//   <>
//     <div>{isDark.toString()}</div>
//     <button onClick={() => setIsDark((prev) => !prev)}>Toggle them</button>
//   </>
// );

// при первом рендоре
//  Render
//  LayoutEffect
//  Effect

// при нажатии клавиши button
//  Render1
//  Effect2

// -------------------------------------------------------
// 1)
let promiseTwo = new Promise((resolve, reject) => {
  resolve('a');
});

promiseTwo
  .then((res) => {
    return res + 'b'; //ab
  })
  .then((res) => {
    return res + 'с'; //abc
  })
  .finally((res) => {
    return res + '!!!!!!!'; //не влияет
  })
  .catch((res) => {
    return res + 'd'; //ошибок нет
  })
  .then((res) => {
    console.log(res); //abc
  });
//итог: abc
// ---------------------------------------------------
// 2)

function doSmth() {
  return Promise.resolve('123'); //возвращает промис со значением '123'
}

doSmth()
  .then(function (a) {
    console.log('1', a); //1 123
    return a;
  })
  .then(function (b) {
    //b=a
    console.log('2', b); //2 123
    return Promise.reject('321'); //возвращает отклоненный промис со значением '321'
  })
  .catch(function (err) {
    //обрабатывается reject
    console.log('3', err); //3 321
  })
  .then(function (c) {
    //т к  предыдущий промис был отклонен, c= undefined
    console.log('4', c); //4 undefined
    return c;
  });

// ---------------------------------------------------
console.log(1);
const aaa = new Promise((res, rej) => res(console.log(2)));

aaa.then((res) => console.log(3));

setTimeout(() => {
  console.log(4);
}, 10);

aaa.then((res) => console.log(5));

console.log(6);

// =============================

Promise.reject('a') // rejected -> a
  .catch((p) => p + 'b') // fulfilled -> ab
  .catch((p) => p + 'с') //
  .then((p) => p + 'd') // abd
  .then((p) => console.log(p));

console.log('f');
// Это связано с тем Promise.reject("a"), что при вызове создается обещание, которое немедленно отклоняется со значением «a».
//  Первый catch блок принимает это отклоненное обещание и возвращает новое обещание, которое выполняется со значением «ab».
// Второй catch блок не выполняется, поскольку предыдущий catch блок уже обработал отклонение.

// Первый then блок получает выполненное обещание со значением «ab» и возвращает новое обещание, выполненное со значением «abd».
// Второй then блок получает это обещание и записывает его значение в консоль.

/// Наконец, console.log("f")оператор выполняется, записывая «f» на консоль перед выполнением цепочки обещаний.

Promise.reject('a') // rejected -> a
  .catch((p) => p + 'b') // fulfilled -> ab
  .catch((p) => p + 'с') //Второй catch блок не выполняется, поскольку предыдущий catch блок уже обработал отклонение.
  .then((p) => p + 'd') // abd
  .finally((p) => p + 'e') // finally всегда выполняется, но он не изменяет разрешенное значение обещания.
  .then((p) => console.log(p)); //abd

Promise.reject('a') // rejected -> a
  .then((p) => p + 'd')
  .catch((p) => p + 'b') // fulfilled -> ab
  .catch((p) => p + 'с') //Второй catch блок не выполняется, поскольку предыдущий catch блок уже обработал отклонение.
  .then((p) => p + 'd') // abd
  .then((p) => p + 'j') // abdj
  .catch((p) => console.log(p)) //
  .catch((p) => p + 'с') //
  .finally((p) => p + 'e') // finally всегда выполняется, но он не изменяет разрешенное значение обещания.
  .then((p) => console.log(p)); //abdj

Promise.reject('a') // rejected -> a
  .then(
    (p) => p + '1',
    (p) => p + '2'
  )
  .catch((p) => p + 'b') // fulfilled -> ab
  .catch((p) => p + 'с') //Второй catch блок не выполняется, поскольку предыдущий catch блок уже обработал отклонение.
  .then((p) => p + 'd1') // abd
  .then((p) => 'j') // j
  // .catch((p) => console.log(p)) //
  // .catch((p) => p + 'с') //
  .finally((p) => p + 'e') // finally всегда выполняется, но он не изменяет разрешенное значение обещания.
  .then((p) => console.log(p)); //j

Promise.reject('a') // rejected -> a
  .then(
    (p) => p + '1',
    (p) => p + '2'
  ) //одну для успешного выполнения промиса и другую для отклонения =>a2
  .catch((p) => p + 'b') // пред-й блок уже обработал отклонение
  .catch((p) => p + 'с') //Второй catch блок не выполняется, поскольку предыдущий блок уже обработал отклонение.
  .then((p) => p + 'd') // a2d
  // .then((p) => 'j') // j
  // .catch((p) => console.log(p)) //
  // .catch((p) => p + 'с') //
  .finally((p) => p + 'e') // finally всегда выполняется, но он не изменяет разрешенное значение обещания.
  .then((p) => console.log(p)); //a2d

// ====================

setTimeout(function timeout() {
  console.log('Таймаут');
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log('Создание промиса');
  resolve();
});

p.then(function () {
  console.log('Обработка промиса');
});

console.log('Конец скрипта');
//Создание промиса Конец скрипта Обработка промиса Таймаут
// =========================

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

//1 7 3 5 2 6 4

// =======================

console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);

//1 6 3 5 2 4 7
// =======================

// const myPromise = (delay) =>
//   new Promise((res, rej) => {
//     setTimeout(res, delay);
//   });
// setTimeout(() => console.log('in setTimeout1'), 1000);
// myPromise(1000).then((res) => console.log('in Promise 1'));
// setTimeout(() => console.log('in setTimeout2'), 100);
// myPromise(2000).then((res) => console.log('in Promise 2'));
// setTimeout(() => console.log('in setTimeout3'), 2000);
// myPromise(1000).then((res) => console.log('in Promise 3'));
// setTimeout(() => console.log('in setTimeout4'), 1000);
// myPromise(5000).then((res) => console.log('in Promise '));
// =================================

(function () {
  console.log('start');
  for (var i = 0; i < 100; i++) {
    ((i) => setTimeout(() => console.log(i), 0))(i);
  }
  console.log('end');
})();
//start end 0,1,2-99

// ====================================

function doSmth() {
  return Promise.resolve('123'); //возвращает промис со значением '123'
}

doSmth()
  .then(function (a) {
    console.log('1', a); //1 123
    return a;
  })
  .then(function (b) {
    //b=a
    console.log('2', b); //2 123
    return Promise.reject('321'); //возвращает отклоненный промис со значением '321'
  })
  .catch(function (err) {
    //обрабатывается reject
    console.log('3', err); //3 321
  })
  .then(function (c) {
    //т к  предыдущий промис был отклонен, c= undefined
    console.log('4', c); //4 undefined
    return c;
  });
// ====================================

// Если вы передаете в then() что-то отличное от функции (например, промис),
//  это интерпретируется как then(null) и в следующий по цепочке
// промис «проваливается» результат предыдущего

Promise.resolve('foo')
  .then(Promise.resolve('bar')) //Promise.resolve('bar') == null
  .then(function (res) {
    console.log(res);
  });

// ====================================

Promise.reject('a') // rejected -> a
  .catch((p) => p + 'b') // fulfilled -> ab
  .catch((p) => p + 'с') //Второй catch блок не выполняется, поскольку предыдущий catch блок уже обработал отклонение.
  .then((p) => p + 'd') // abd
  .then((p) => p + 'j') // abdj
  .catch((p) => console.log(p)) // no work
  .catch((p) => p + 'с') // no work
  .finally((p) => p + 'e') // finally всегда выполняется, но он не изменяет разрешенное значение обещания.
  .then((p) => console.log(p)); //abdj

// ====================================

console.log('1');
setTimeout(() => console.log('2'), 1); //но если туту будет 10 и больше то будет последним
let promise = new Promise((res, rej) => {
  console.log('3');
  res();
});
promise.then(() => console.log('4'));
setTimeout(() => console.log('5'));
console.log('6');
// 1;
// 3;
// 6;
// 4;
// 2;
// 5;
// ====================================

setTimeout(() => console.log('a'));
Promise.resolve()
  .then((first) => {
    console.log('first', first);
    return 'b';
  })
  .then(
    Promise.resolve().then((second) => {
      console.log('second', second);
      return 'c';
    })
  )
  .then((third) => console.log('third', third));
console.log('4');
//4
// first undefined
// second undefined
// third b
// a
// ====================================

let a = 5;
console.log(a);
setTimeout(() => {
  console.log(a);
  a = 10;
}, 0);

Promise.resolve().then(() => {
  console.log(a);
  a = 15;
});
console.log(a);

//5
//5
//5
//15
