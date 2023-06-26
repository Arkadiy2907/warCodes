// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// function alternateCase(s) {
//   s.split("").map((el) =>
//     el.toUpperCase === el ? el.toLowerCase : el.toUpperCase
//   );
// }

function alternateCase(s) {
  return s
    .split("")
    .map((el) =>
      el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()
    )
    .join("");
}

console.log(alternateCase("aaaSSS ggD"));
