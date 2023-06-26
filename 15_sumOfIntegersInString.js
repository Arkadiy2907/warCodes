// Ваша задача в этом ката — реализовать функцию, которая вычисляет сумму целых чисел внутри строки.Например,
//     в строке "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"сумма целых чисел равна 3635.

// Примечание: будут проверены только положительные целые числа.

function sumOfIntegersInString(s) {

    return s.replace(/[^\d]/g, '-').split('-').filter(Boolean).reduce((acc, el) => acc + +el, 0)
}

console.log(sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'));

console.log(sumOfIntegersInString("eh[a2044;iL!y(F3688VuZ)mE439whI"));


// ===============================================

function sumOfIntegersInString(s) {
    return s.replace(/[^0-9]/g, ' ').split(' ').reduce((a, b) => a + +b, 0)
}