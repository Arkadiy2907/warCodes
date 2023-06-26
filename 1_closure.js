//задача на замыкание исправить код  
// i: 6 = arr[undefined]
// i: 6 = arr[undefined]
// i: 6 = arr[undefined]
// i: 6 = arr[undefined]
// i: 6 = arr[undefined]
// i: 6 = arr[undefined]

let arr = [1, 2, 4, 6, 7, 9]

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log(`i:${i} = arr[${arr[i]}]`)
    })
}

// 1
for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log(`i:${i} = arr[${arr[i]}]`)
    }, 1000)
}

// 2

for (var i = 0; i < arr.length; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(`i:${j} = arr[${arr[j]}]`)
        }), 1000
    })(i)
}

//3

for (var i = 0; i < arr.length; i++) {

    setTimeout((function (i) {
        return function () {
            console.log(`i:${i} = arr[${arr[i]}]`)
        }
    })
        (i), 1000)
}

//4

for (var i = 0; i < arr.length; i++) {
    setTimeout((function (i) {
        console.log(`i:${i} = arr[${arr[i]}]`)
    }).bind(null, i), 1000);
}


// ===================================================
