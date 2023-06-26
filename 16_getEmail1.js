//для проверки регулярных выражений https://regex101.com/
// https://learn.javascript.ru/regexp-introduction

// приходит строка двух видов или ввиде емэйл или строки с емэйл вставленным в скобки вида < > надо получить емэйл
// 1) vova <vovan@await.uu>
// 2) <vovan@await.uu>
const fullStr = "vova <vovan@await.uu>"
const smallStr = "<vovan@await.uu>"

const getEmail1 = (str) => {
    let i = str.indexOf("<")
    if (i !== -1) {
        return str.slice(i + 1, str.length - 1)
    }
    return str;
}

console.log(getEmail1(fullStr))
console.log(getEmail1(smallStr))

// =======================================================

// через регулярные выражения (опережающие и ретроспективные проверки)
//     (?<=\ нужный символ)  --поиск нужного символа в строке не включая саму позицию этого сивола

// пример:  (?<=| )  'getEma|il'  возьмется 'il'


//(?=символ)  --до какого символа не включая его

//    /(?<=\<)(\S+)(?=\>)/g   --получим  vovan@await.uu тут перед '<' стоит '\' -это экранирование символа

const fullStr2 = "vova <vovan@await.uu>"
const smallStr2 = "<vovan@await.uu>"


const getEmail2 = (str) => {
    // let i = str.replace(/(?<=\<)(\S+)(?=\>)/g, '***')//замена емэйла на ***
    const regexp = /(?<=\<)(\S+)(?=\>)/g;
    const matches = str.match(regexp);
    if (matches !== null) return matches[0];

    return str;
    // return i //vova <***>
}

console.log(getEmail2(fullStr2));
console.log(getEmail2(smallStr2));