// Есть предложение «3 по цене 2» (или «2 + 1», если хотите) на манго.
// Для данного количества и цены(за манго) рассчитайте общую стоимость манго.

// mango(2, 3) ==> 6    # 1, 2; 
// # 2 mangoes for $3 per unit = $6; no mango for free

// mango(3, 3) ==> 6    # 1, 2, 3 (free); 
// # 2 mangoes for $3 per unit = $6; +1 mango for free

// mango(5, 3) ==> 12   # 1, 2, 3 (free), 4, 5
// # 4 mangoes for $3 per unit = $12; +1 mango for free

// mango(9, 5) ==> 30   # 1, 2, 3 (free), 4, 5, 6 (free), 7, 8, 9 (free)
// # 6 mangoes for $5 per unit = $30; +3 mangoes for free

function mango(quantity, price) {
    let free = 0;
    for (let i = 1; i < quantity + 1; i++) {
        if ((i % 3) === 0) free++;
    }

    return (quantity - free) * price;
}

console.log(mango(9, 5));

// =================

function mango(quantity, price) {
    return price * (quantity - Math.floor(quantity / 3));
}