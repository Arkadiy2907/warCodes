// написать функцию на уникальные значения регистр тоже учит-я
// если есть одинковые то вернуть false
// https://www.youtube.com/watch?v=x-EZy6gu_38&t=328s

function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
        // console.log(str.indexOf(str[i]), `str= ${str[i]}`, `i= ${i}`)
        //тут ловится несовпадение т е получена по индексу буква str[i] в str.indexOf(str[i]) получили позицию ранее попавшуюся такуюже букву
        // но в индексе str[i] она должна быть на i позиции потому если есть не совпадение наличие буквы по индексу и полученной поиском буквы 
        //т е у меня под индексом одна буква а при этом же индексе через индекс офф находится другой индекс
        // console.log(str.lastIndexOf(str[i]), `str= ${str[i]}`, `i= ${i}`)
        if (str.lastIndexOf(str[i]) !== i) {
            // console.log(str.lastIndexOf(str[i]), `str= ${str[i]}`, `i==== ${i}`)
            return false
        }
    }

    return true
}




console.log(isUnique("Aasj"));
console.log(isUnique("aSAAsj"));
console.log(isUnique("AaSsj"));
console.log(isUnique("Ajasj"));
console.log(isUnique("Aasjsd"));