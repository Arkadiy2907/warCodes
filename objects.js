let arr = [1, 2, 3, 4]
console.log(Object.getOwnPropertyNames(arr))//['0', '1', '2', '3', 'length']
console.log(Object.keys(arr))//['0', '1', '2', '3']

let obje = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }
console.log(Object.getOwnPropertyNames(obje))//['0', '1', '2', '3','4']
console.log(Object.keys(obje))//['0', '1', '2', '3','4']

// ====================================
let person = {
  name: 'John',
  age: 21
}


let obj = {
  name: 'piter',
  logger() {
    console.log("keys:", Object.keys(this))
  },

  logArray() {
    Object.keys(this).forEach(el => console.log(`${el}: ${this[el]}`))
  },

  logFunc() {
    let x = this// this в function создает свой контекст потому надо передать его через переменную
    Object.keys(this).forEach(function (key) {
      console.log(`${key}: ${x[key]}`)
    })
  },
  paint(st = false, mid = false, end = false) {
    if (st) {
      console.log('===start===')
    }


    Object.keys(this).forEach((key, index, arr) => {
      console.log(`${key}: ${this[key]}`)
      if (mid && index !== arr.length - 1) {
        console.log('=====')
      }
    })

    if (end) {
      console.log('===end===')
    }

  }

}

obj.logger()

obj.paint.call(person, true, true, true)




// obj.logArray.call(person)
// obj.logFunc.call(person)

// obj.paint.call(person, true, true, true)

// log()
// obj.logger.call(person)



let persons = {
  name: 'John',
  age: 21
}

function log() {

  // console.log(Object.keys(this).forEach(el => console.log(`${el}: ${this[el]}`)))
  console.log(this.name)
}

// log()


log.call(persons)
// let b = log.bind(persons)

// b()




// ========================================

// проверка на объеткы т е через var a ={a:1}
let b = a.a


//написать ф-ю гет получения через фетч данных и если 5 раз не прошло то фэлс


// написать функцию компоузe

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;
const times3 = (x) => x * 3;




// console.log(compose(square, times2)(2) === square(times2(2))); //true
// console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));
// console.log(compose(square, times2, times3, sum)(3, 4) === square(times2(times3(sum(3, 4)))));

// function compose(...arg) {
//   // let arr = ...arguments
//   let res = arg.reduce((acc, el) => acc + el, 0)
//   return function (x) {
//     return x + res
//   }
// }

const compose = (...funcs) => arg => funcs.reduceRight((prevResult, func) => func(prevResult), arg);

console.log(compose(square, times2)(2))

