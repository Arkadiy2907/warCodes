// https://www.codewars.com/kata/563c13853b07a8f17c000022/solutions/javascript

// проверить день сегодня и день полученный на совпадение

function isToday(date) {
  let dateToday = new Date();
  let myDate = new Date(date);
  if (dateToday.getFullYear() !== myDate.getFullYear()) return false;
  if (dateToday.getMonth() !== myDate.getMonth()) return false;
  return dateToday.getDate() === myDate.getDate();
}

function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}

function isToday(date) {
  var d = new Date();
  return (
    d.getDate() == date.getDate() &&
    d.getFullYear() == date.getFullYear() &&
    d.getMonth() == date.getMonth()
  );
}

// ==================================================
// https://www.codewars.com/kata/56fac4cfda8ca6ec0f001746/train/javascript

// Напишите функцию, которая принимает отрицательное или положительное целое число,
//  представляющее количество минут до(-) или после(+) полуночи воскресенья,
//  и возвращает текущий день недели и текущее время в 24 - часовом формате('чч:мм') в виде строки.

//   Примеры
// 0  =>  should return 'Sunday 00:00'
//   - 3  =>  should return 'Saturday 23:57'
// 45  =>  should return 'Sunday 00:45'
// 759  =>  should return 'Sunday 12:39'
// 1236  =>  should return 'Sunday 20:36'
// 1447  =>  should return 'Monday 00:07'
// 7832  =>  should return 'Friday 10:32'
// 18876  =>  should return 'Saturday 02:36'
// 259180  =>  should return 'Thursday 23:40'
//   - 349000  =>  should return 'Tuesday 15:20'

function dayAndTime(n) {
  let dateSun = new Date(2023, 8, 10, 0, 0, 0, 0);
  // let dateSun = new Date(`2023-9-12`)
  dateSun.setMinutes(dateSun.getMinutes() + n);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let monthNum = dateSun.getMonth();

  // const [day, monthNum, year] = d.split('.');
  const month = months[parseInt(monthNum) - 1];
  const day = days[dateSun.getDay()];
  const hour =
    dateSun.getHours() < 10 ? `0${dateSun.getHours()}` : dateSun.getHours();
  const min =
    dateSun.getMinutes() < 10
      ? `0${dateSun.getMinutes()}`
      : dateSun.getMinutes();

  //enter your code here
  return `${month} ${dateSun.getDate()}  ${day} ${hour}:${min}`;
  // return dateSun.getDay()
}

function dayAndTime(n) {
  const date = new Date('March 17, 2019 00:00:00');
  date.setTime(date.getTime() + n * 60 * 1000);
  return date.toLocaleDateString('en', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
}

console.log(dayAndTime(1));

// ============================================

// получить порядковый номер дня в году и номер недели

const getNumDay = (d, m, y) => {
  let myDate = new Date(y, m, d);
  let startDate = new Date(myDate.getFullYear(), 0, 0);
  let buf = myDate - startDate;

  let numDay = Math.floor(buf / (1000 * 60 * 60 * 24));
  let numWeek = Math.floor(buf / (1000 * 60 * 60 * 24 * 7));

  return `номер дня в году:${numDay}, номер недели в году:${numWeek}`;
};

console.log(getNumDay(31, 7, 2023));

// =============================================
// https://www.codewars.com/kata/56eb16655250549e4b0013f4/train/javascript

// Какой твой любимый день недели? Проверьте, является ли это самый частый день недели в году.
// Вам дан год в виде целого числа (например, 2001). Вы должны вернуть наиболее часто встречающиеся дни недели в этом году. Результатом должен быть список дней, отсортированный по порядку дней недели (например ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], , ['Monday', 'Sunday']). Неделя начинается с понедельника.
// Входные данные: Год как целое число .
// Вывод: список наиболее частых дней, отсортированный по порядку дней недели (с понедельника по воскресенье).
// Предварительные условия:
// Неделя начинается в понедельник.
// Год между 1583 и 4000.
// Календарь григорианский.
// Примеры (ввод -> вывод):
// * 2427 -> ['Friday']
// * 2185 -> ['Saturday']
// * 2860 -> ['Thursday', 'Friday']

function mostFrequentDays(year) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const obj = {};

  for (let i = 0; i < 12; i++) {
    for (let d = 1; d <= new Date(year, i + 1, 0).getDate(); d++) {
      const dayOfWeek = new Date(year, i, d).getDay();
      const dayName = days[dayOfWeek];

      if (!obj[dayName]) {
        obj[dayName] = 1;
      } else {
        obj[dayName]++;
      }
    }
  }

  const res = Object.keys(obj).filter((el) => obj[el] > 52);

  return res[0] === 'Sunday' && res[1] === 'Monday' ? [res[1], res[0]] : res;
}

console.log(mostFrequentDays(1984)); //, ['Thursday', 'Friday'])
