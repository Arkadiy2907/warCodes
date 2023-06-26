// Write a function to convert a name into initials.This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
    let arr = name.split(' ');
    let firstLatter = arr[0].split('')[0].toUpperCase();
    let secondLatter = arr[1].split('')[0].toUpperCase();

    return `${firstLatter}.${secondLatter}`;
}

// ============================

function abbrevName(name) {
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

// =============================

function abbrevName(name) {
    return name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase();
}

console.log(abbrevName('sTTGC ass'));