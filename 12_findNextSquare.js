// Завершите findNextSquareметод, который находит следующий целочисленный идеальный квадрат после квадрата,
//     переданного в качестве параметра.Напомним, что целочисленный совершенный квадрат — это целое число n,
//         такое что sqrt(n) также является целым числом.

// Если параметр сам по себе не является идеальным квадратом - 1, его следует вернуть.Вы можете предположить,
//     что параметр неотрицательный.

// 121 -- > 144
// 625 -- > 676
// 114 -- > -1 since 114 is not a perfect square


function findNextSquare(sq) {
    let num = Math.sqrt(sq)

    if (Number.isInteger(num)) return (num + 1) ** 2;//проверить на целое число можно и num%1 if ===0 то челое число или num==Math.trunc(num)--отрезает после запятой
    return -1;
}

console.log(findNextSquare(114))

// ==========================================

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}