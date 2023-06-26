// В этом простом упражнении вы создадите программу, которая принимает значение, integer
//  и возвращает список его кратных до другого значения, limit.Если limitкратно integer,
//     оно также должно быть включено.В функцию всегда будут передаваться только положительные 
//     целые числа, не состоящие из 0. Предел всегда будет выше основания.

//     Например, если переданы параметры(2, 6), функция должна возвращать
//      значения[2, 4, 6]2, 4 и 6, кратные от 2 до 6.

// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
    //your code here

    let res = []

    let num = integer;
    while (num <= limit) {
        res.push(num);
        num += integer;
    }
    return res
}

console.log(findMultiples(2, 25));

// =======================

function findMultiples(int, limit) {
    let result = []

    for (let i = int; i <= limit; i += int)
        result.push(i)

    return result
}

// ======================

function findMultiples(int, limit) {
    return Array(Math.floor(limit / int)).fill(1).map((x, i) => int * (i + 1));
}
