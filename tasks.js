let a = [1, 2];
let b = a;
console.log(a === b)
b[0] = 0//тут присвоение к массиву
console.log(a, b)
b = [3, 4];// ТУТ создается присваивание к перменной нового массива с пом []
console.log(a === b)
console.log(a[0])// ЧТО ЗДЕСЬ БУДЕТ?     (1)

// ==============================================================================

console.log([2, 2, 2, 2].map(parseInt))// [ 2, NaN, NaN, 2 ]
//почуму так ? это можно переписать как
[2, 2, 2, 2].map((el, index) => parseInt(el, index))
//и тут index есть в parseInt как система исчисления а т к в двоичной системе нет 2 то возвращается NaN

//===============================================================================

//bind

function bind(callback, context) {
    return function () {
        return callback.apply(context, arguments)
    }
}

function foo(a, b) {
    console.log(a, b, this);
}

let foo1 = bind(foo, {});

foo1(2, 3)

// ==============================================================================
// вернуть eID localStorage


const getEID = () => {
    // let EID = []
    // sessionStorage.clear()
    const eID = JSON.parse(sessionStorage.getItem('localEID')) || null;
    if (eID === null) {

        let EID = ['aaa']

        sessionStorage.setItem('localEID', JSON.stringify(EID))
        return JSON.parse(sessionStorage.getItem('localEID')).at(-1)
    }
    return eID.at(-1)
}

console.log(getEID())

// =============================================

//Суммирование цифр числа

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function (a, b) { return +a + +b }, 0);
}

console.log(Math.abs(1).toString().split('').reduce((acc, el) => acc + +el, 0));

// =============================================