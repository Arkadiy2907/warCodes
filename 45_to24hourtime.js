// https://www.codewars.com/kata/59b0a6da44a4b7080300008a/train/javascript

// Преобразование обычного(12 - часового) времени, например, «8: 30 утра» или «20: 30» в 24 - часовое
// время(например, «08: 30» или «20: 30») звучит достаточно просто, не так ли ?
//   Что ж, посмотрим, сможешь ли ты это сделать!

// Вам нужно будет определить функцию с именем «to24hourtime», 
// и вам будет предоставлен час(всегда в диапазоне от 1 до 12 включительно),
//   минута(всегда в диапазоне от 0 до 59 включительно) и период(или "am" или "pm") в качестве входных данных.

// Ваша задача — вернуть четырехзначную строку, которая кодирует это время в 24 - часовом формате.
function to24hourtime(hour, minute, period) {
  // hour will always range from 1 to 12 (inclusive)
  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"

  function getTen(num) {
    return num < 10 ? `0${num}` : num;
  }

  if (hour === 12 && minute === 0 && period === "am") return `00${getTen(minute)}`;
  if (hour === 12 && minute === 0 && period === "pm") return `12${getTen(minute)}`;
  if (hour === 12 && minute > 0 && period === "pm") period === "am";
  if (hour === 12 && minute > 0 && period === "am") period === "pm";
  if (period === "am") return `${getTen(hour)}${getTen(minute)}`;


  let h;

  switch (hour) {

    case 1:
      h = 13
      break;
    case 2:
      h = 14
      break;
    case 3:
      h = 15
      break;
    case 4:
      h = 16
      break;
    case 5:
      h = 17
      break;
    case 6:
      h = 18
      break;
    case 7:
      h = 19
      break;
    case 8:
      h = 20
      break;
    case 9:
      h = 21
      break;
    case 10:
      h = 22
      break;
    case 11:
      h = 23
      break;
  }

  return `${getTen(h)}${getTen(minute)}`;

  // return "0000";
}

console.log(to24hourtime(1, 0, "am"));
console.log(to24hourtime(1, 0, "pm"));
console.log(to24hourtime(12, 0, "pm"));
console.log(to24hourtime(6, 30, "am"));
console.log(to24hourtime(9, 45, "pm"));
console.log(to24hourtime(12, 58, "pm"));
