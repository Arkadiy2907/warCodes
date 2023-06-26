// разворот строки 'world'  => 'dlrow'

function solution1(str) {
    return str.split('').reverse().join('');
}

// ===========

const solution2 = str => str.split('').reverse().join('');

// ===========

console.log(solution1('hi'));

console.log(solution2('hi'));