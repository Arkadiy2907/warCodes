// // https://www.codewars.com/kata/53907ac3cd51b69f790006c5/train/javascript

// В этой ката вы должны вычислить тип треугольника с тремя заданными сторонами aи(данными в любом порядке).bc

// Если каждый угол меньше 90°, этот треугольник равен, acuteи функция должна вернуть значение 1.

// Если один угол строго 90°, то этот треугольник есть rightи функция должна вернуть значение 2.

// Если один угол больше 90°, то этот треугольник равен, obtuseи функция должна вернуть значение 3.

// Если три стороны не могут образовать треугольник, или есть один угол 180°(который превращает треугольник в отрезок) 
// — функция должна вернуть 0.

// Три входных параметра принадлежат sidesзаданному треугольнику.
// Все входные значения представляют собой неотрицательные числа с плавающей запятой или целые
// числа(или и то, и другое, в зависимости от языка).

function triangleType(a, b, c) {
  let cosA, cosB, cosC, angleA, angleB, angleC;

  cosA = (b * b + c * c - a * a) / (2 * b * c);
  cosB = (a * a + c * c - b * b) / (2 * a * c);
  cosC = (a * a + b * b - c * c) / (2 * a * b);

  angleA = Math.acos(cosA) * 180 / Math.PI;
  angleB = Math.acos(cosB) * 180 / Math.PI;
  angleC = Math.acos(cosC) * 180 / Math.PI;

  if (isNaN(angleA) || isNaN(angleB) || isNaN(angleC)) return 0;
  if ((angleA >= 180) || (angleB >= 180) || (angleC >= 180)) return 0;
  if ((angleA < 90) && (angleB < 90) && (angleC < 90)) return 1;
  if ((angleA === 90) || (angleB === 90) || (angleC === 90)) return 2;
  return 3;
}

console.log(triangleType(7, 3, 2)); //0 Not triangle
console.log(triangleType(2, 4, 6)); //0 Not triangle
console.log(triangleType(8, 5, 7)); //1 Acute
console.log(triangleType(3, 4, 5));//2 // Right
console.log(triangleType(7, 12, 8))//3


function triangleType(a, b, c) {
  var max = Math.max(a, b, c);

  if (a + b + c <= 2 * max) return 0;
  if (2 * max * max == a * a + b * b + c * c) return 2;
  if (2 * max * max > a * a + b * b + c * c) return 3;
  return 1;
}


