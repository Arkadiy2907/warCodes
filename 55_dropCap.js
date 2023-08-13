// https://www.codewars.com/kata/559e5b717dd758a3eb00005a/train/javascript

// DropCaps означает, что первая буква начального слова абзаца должна 
// быть заглавной, а остальные — строчными, как в газете.

// Но для разнообразия давайте проделаем это для каждого слова заданной строки.
// Ваша задача состоит в том, чтобы каждое слово, длина которого больше 2,
//  писать с заглавной буквы, оставляя меньшие слова такими, какие они есть.

// * должно также работать с начальными и конечными пробелами и заглавными буквами.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space 
// "   space WALK   " => "   Space Walk   "
// Примечание: вам будет предоставлено как минимум одно слово,
// и вы должны взять строку в качестве ввода и возвращаемую строку в качестве вывода.


function dropCap(n) {
  let arr = n.split(' ')
  let res = []

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] !== '') {


      arr[i].length > 2 ? res.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()) : res.push(arr[i]);
    } else {
      res.push(arr[i])
    }
  }

  return res
    .join(null)
    .replaceAll(null, ' ')
}

console.log(dropCap('  Revelation, of the CAPS outraged American public opinion, and helped generate'));

const dropCap = (str) => {
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      arr[i] = arr[i].toLowerCase();
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(' ')
}

