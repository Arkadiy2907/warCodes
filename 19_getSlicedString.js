// https://www.youtube.com/watch?v=AkkgdwPYLfI

// вернуть промис из функции принимающей 2 аргумента: строку - 
// надо вернуть из каждого второго слова со 2 - й буквы остаток слова
// и число - это индекс надо вернуть число Фибоначи 

const st = 'asdf, asfgsd, dffdggh, djbn';


const getSlicedString = (str) => {
    return str.split(', ').reduce((acc, el, i) => {
        if (i % 2 !== 0) {
            acc.push(el.slice(1))
        }
        return acc
    }, []
    ).join(' ')
}

console.log(getSlicedString(st))//sfgsd jbn

// f = 1 + 1 + 2 + 3 + 5 + 8 + 13 
// n = 0   1   2   3   4   5   6 

const n = 6

const getFibonach = num => {
    let f1 = 1
    let f2 = 2;

    for (let index = 3; index <= num; index++) {
        const f3 = f1 + f2;
        f1 = f2
        f2 = f3
    }
    return f2
}

console.log(getFibonach(n))//13

getSomeData = (str, num) => {
    let strPromice = new Promise((res, rej) => {
        res(getSlicedString(str))
    });

    let numPromice = new Promise((res, rej) => {
        res(getFibonach(num))
    });

    return Promise.all([strPromice, numPromice])

}

getSomeData(st, n).then(res => console.log(res))