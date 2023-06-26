// Ваша задача состоит в том, чтобы найти ближайшее квадратное число
// nearest_sq(n)или nearestSq(n)положительное целое число n.

// Например, если n = 111, то nearest\_sq(n)(nearestSq(n)) равно 121,
//  так как 111 ближе к 121, квадрату 11, чем 100, квадрату 10.

// Если nэто уже идеальный квадрат(например n = 144, n = 81, и т.д.), 
// вам нужно просто вернуть n.

//     Удачи :)

function nearestSq(n) {
    // your code
    let num = Math.sqrt(n)
    if (num % 1 === 0) return num ** 2

    return Math.round(Math.floor(num * 100) / 100) ** 2

}

console.log(nearestSq(111))


// =============================================

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);