// https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript
// Эти массивы слишком длинные! Давайте их уменьшим!

// Описание
// Напишите функцию, которая принимает массив целых чисел от 0 до 9 и возвращает новый массив:

// Числа без одинаковых чисел до или после него возвращают 1: 2, 4, 9  => 1, 1, 1
// Последовательные группы одинаковых чисел возвращают их количество: 6, 6, 6, 6 => 4
// Пример

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Затем ваша функция должна повторить процесс для результирующего массива и для результирующего массива этого, пока он не вернет одно целое число:

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

// Когда ваша функция уменьшит массив до одного целого числа, следуя этим правилам, она должна вернуть это целое число!!!!.

// [2] => 2

// Не решена!!!!!!!!! ищет все числа а тут надо только последовательные

function setReducer1(input) {
    let items = input.slice(0);
    let res = [];
    let start = items[0];
    let count = 1;
    let i = 1;

    while (items.length > 1) {
        if (items[0] === items[1]) {
            count++;
            // start = items[i];
            // i++
            items.shift();
            if (count >= 2) {
                count++
            }
            res.push(count);
        } else {
            count = 1;
            // start = items[i];
            // i++
            items.shift();
            res.push(count);
        }

    }
    console.log("items=", items, "res=", res)

}

console.log(setReducer1([1, 1, 1]))

function setReducer(input) {
    // code here
    let items = input.slice(0),  // клонируем исходный массив
        tested = [],            // список проверенных элементов
        item,                   // один элемент
        count = 0;              // кол-во элементов, имеющх дубли

    while (items.length) {
        // вырезаем первый элемент (что бы он нам больше не попадался)
        item = items.shift();
        // если его еще не проверяли
        if (tested.indexOf(item) === -1) {
            // добавляем в список
            tested.push(item);
            // и ищем дубли
            if (items.indexOf(item) >= 0) {
                count++;
            }
        }
    }
    return count;
}


console.log(setReducer([1, 1, 2, 3, 2, 2, 1]))



// const duplicates = input.filter((number, index, numbers) => {
//     // console.log(number); // number - элемент массива
//     // console.log(index); // index - индекс элемента массива
//     // console.log(numbers); // numbers - представление массива values
//     return numbers.indexOf(number) !== index;
// })

// return duplicates

function setReducer(input) {
    // code here
    let items = input.slice(0),  // клонируем исходный массив
        tested = [],            // список проверенных элементов
        item,                   // один элемент
        count = 0;              // кол-во элементов, имеющх дубли

    for (let i = 0; i < items.length; i++) {
        // вырезаем первый элемент (что бы он нам больше не попадался)
        item = items.shift();
        // если его еще не проверяли
        if (tested.indexOf(item) === -1) {
            // добавляем в список
            tested.push(item);
            // и ищем дубли
            if (items.indexOf(item) >= 0) {
                count++;
            }
        }
    }
    return count;
}


console.log(setReducer([1, 1, 2, 3, 2, 2, 1]))