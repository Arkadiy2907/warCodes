// Напишите функцию, которая принимает целое число nи строку sв качестве параметров и возвращает строку, sповторяющуюся ровно столько nраз.
// 6, "I" -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
    let arr = []
    for (let i = 0; i < n; i++) {

        arr.push(s)

    }

    return arr.join('');
}

// =================

function repeatStr(n, s) {
    return s.repeat(n);
}

console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));