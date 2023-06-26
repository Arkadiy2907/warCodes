// В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». Ваша функция получает одну сторону ДНК(строка, кроме Haskell); вам нужно вернуть другую дополнительную сторону.
// Нить ДНК никогда не бывает пустой или ДНК вообще не существует(опять же, кроме Haskell).

// "ATTGC" -- > "TAACG"
// "GTAT" -- > "CATA"

function DNAStrand(dna) {
    let res = [];
    let arr = dna.split('');



    // arr.map(el => {
    //      if (el === A) {

    //     }
    // });
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            res.push('T')
        }
        if (arr[i] === 'T') {
            res.push('A')
        }
        if (arr[i] === 'G') {
            res.push('C')
        }
        if (arr[i] === 'C') {
            res.push('G')
        }
    }

    return res.join('')

}

console.log(DNAStrand('ATTGC'));


// =============================

function DNAStrand(dna) {
    return dna.split('').map(function (v) { return { A: 'T', T: 'A', C: 'G', G: 'C' }[v]; }).join('');
}

console.log(DNAStrand('ATTGC'));

// ===========================

function DNAStrand(dna) {
    //your code here
    var res = "";
    for (var i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                res += "T";
                break;
            case 'T':
                res += "A";
                break;
            case 'G':
                res += "C";
                break;
            case 'C':
                res += "G";
                break;
        }
    }
    return res;
}