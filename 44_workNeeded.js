// https://www.codewars.com/kata/5b3e1dca3da310a4390000f3/train/javascript

// Вы лучший фрилансер в городе.Все знают вас, но чего они не знают, так это то,
//   что вы на самом деле перекладываете свою работу на других фрилансеров 
//   и вам редко приходится выполнять какую - либо работу.Ты живешь жизнью!

// Чтобы упростить этот процесс, вам нужно написать метод workNeeded,
//   чтобы выяснить, сколько времени вам нужно для участия в проекте.

// Указание количества времени, minutes необходимого для завершения проекта,
//   и массива парных значений, представляющих время других фрилансеров в[Hours, Minutes]формате,
//   т.е. [[2, 33], [3, 44]]
// подсчитайте, сколько времени вам понадобится для участия в проекте(если вообще) и верните строку в зависимости от случая.

// Если нам нужно уделить время проекту, вернитесь"I need to work x hour(s) and y minute(s)"
// Если нам не нужно вносить свой вклад в проект, вернитесь"Easy Money!"

function workNeeded(projectMinutes, freelancers) {
  let difTime = projectMinutes - freelancers.reduce((acc, [h, m]) => acc + ((h * 60) + m), 0);
  let hours = Math.trunc(difTime / 60);
  let minute = difTime - hours * 60;

  return difTime === 0 || difTime < 0 ? "Easy Money!" : `I need to work ${hours} hour(s) and ${minute} minute(s)`;
}

// ====================================================

const workNeeded = (p, f) => (p = f.reduce((s, [h, m]) => s - h * 60 - m, p)) <= 0 ?
  "Easy Money!" :
  `I need to work ${p / 60 | 0} hour(s) and ${p % 60} minute(s)`;



console.log(workNeeded(141, [[1, 55], [0, 25]]))