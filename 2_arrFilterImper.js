// удадиль все ложные значения

let arr = [1, undefined, 'd', NaN, 0, , '', null, 7]

//функциональный подход (императивный)

let arrFilterImper = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        arrFilterImper.push(arr[i])
    }
}


//деклоративный подход (деклоративный)

const arrFilterDecl = arr.filter(Boolean);

console.log(arrFilterImper)
console.log(arrFilterDecl)