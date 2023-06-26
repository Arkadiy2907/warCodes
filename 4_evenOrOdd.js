// Создайте функцию, которая принимает целое число
// в качестве аргумента и возвращает значение "Even"для четных или "Odd"нечетных чисел.

function evenOrOdd1(number) {
    return number % 2 ? "Odd" : "Even";
}

console.log(evenOrOdd1(5));
// ========

const evenOrOdd2 = number => number % 2 ? "Odd" : "Even";

console.log(evenOrOdd2(5));
