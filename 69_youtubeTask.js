// https://www.youtube.com/watch?v=G7pAP1TvZSw&t=9s

//1) реализовать ф-ю кот будет сумировать числа и выводить в логи

function sum(a) {
  console.log(a);
  return function (b) {
    return sum(b + a);
  };
}

sum(2)(3)(4);

// 2) ф-я принимает два объекта с разными ключами некоторы из которых могут пересекаться.
// надо вернуть первый объект с обновленными значениями из второго (которые пересекаются)

let obj1 = {
  a: 'foo',
  b: 'boo',
};

let obj2 = {
  a: 'boo',
  c: 'boo',
};

function changeObj(o1, o2) {
  for (let key in o1) {
    if (o2.hasOwnProperty(key)) {
      o1[key] = o2[key];
    }
  }
  return o1;
}

console.log(changeObj(obj1, obj2));
// =========
// 3) реализовать ф-ю кот принимает 2 параметра:
// массив и колбэк по результатам которого будут групироваться значения
//  ф-я должна возвращать объект где ключи это названия групп а значения сами группы

let arr = [6.1, 4.2, 6.3];
let callbackFun = Math.floor;
// result = {
//   '4': [4.2],
//   '6':[6.1, 6.3]
// }

function groupBy(arr, fun) {
  let obj = {};
  arr.forEach((el) => {
    let res = fun(el);
    // console.log(Math.trunc(el));
    if (!obj[res]) {
      // console.log("new=", Math.trunc(el));
      obj[res] = [el];
      // el;
    } else {
      obj[res].push(el);
    }
    // console.log(obj);
  });

  return obj;
}

console.log(groupBy(arr, callbackFun));

function check() {
  var a = '1',
    b = 0,
    c = 'false';
  console.log(!!c);
  console.log(b + !!c == a);

  return a || b ? b + !!c == a : c;
}

console.log(check());

// Замыкания
// Что такое замыкания?
// Замыкания - это особенность в языке программирования, которая позволяет функции запоминать и иметь доступ к переменным из внешней области видимости, в которой они были объявлены. Функция, вместе с данными, которые она использует (переменные), образует замыкание.

// Опасности замыканий:

// Утечка памяти: Если замыкание содержит ссылку на большой объем данных или объектов, которые больше не нужны, они могут оставаться в памяти, не освобождаясь для сборки мусора.
// Неожиданное поведение: Использование замыканий может привести к неожиданному поведению, особенно при работе с асинхронными операциями или циклами.
// Преимущества замыканий:

// Сокрытие данных: Замыкания позволяют скрыть переменные и функции внутри функции, что способствует созданию приватных переменных и методов.
// Сохранение состояния: Замыкания позволяют функции сохранять состояние и использовать его при последующих вызовах. Это особенно полезно при работе с функциями обратного вызова или асинхронными операциями.

(async () => {
  var funcs = [];
  for (var i = 0; i < 5; i++) {
    var delay = function (ms) {
      return new Promise((resolve) => setTimeout(resolve, i * ms));
    };
    funcs.push(async () => {
      delay(1000);
      console.log(i);
      await delay(1000);
      console.log(i);
    });
  }
  await funcs[1]();
})();

const promise1 = Promise.resolve('First');
const promise2 = Promise.resolve('Second');
const promise3 = Promise.reject('Third');
const promise4 = Promise.resolve('Fourth');

const runPromises = async () => {
  const res1 = await Promise.all([promise1, promise2]);
  const res2 = await Promise.all([promise3, promise4]);
  return [res1, res2];
};

runPromises()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// Код выведет "Third" потому, что в функции runPromises используется await с Promise.all,
//  чтобы дождаться разрешения или отклонения нескольких промисов.

// В коде promise1 и promise2 - это разрешенные промисы,
//  в то время как promise3 - это отклоненный промис, а promise4 - разрешенный промис.

// Когда вызывается Promise.all с [promise1, promise2],
//  он ожидает разрешения или отклонения обоих промисов.
// Поскольку и promise1, и promise2 разрешены, переменная res1 будет содержать массив с разрешенными значениями обоих промисов.

// Однако, когда Promise.all вызывается с [promise3, promise4],
// он также ожидает разрешения или отклонения обоих промисов.Поскольку promise3 - это отклоненный промис,
//  переменная res2 будет содержать причину отклонения promise3, которая равна "Third".

// Поэтому, когда функция runPromises выполняется, она вернет массив [res1, res2],
// где res1 содержит разрешенные значения promise1 и promise2,
// а res2 содержит причину отклонения promise3, которая равна "Third".Вот почему код выводит "Third".

// У вас есть страница, состоящая из многих компонентов, один из них - форма. Вам нужно отображать состояние этой формы (сохраняем... / успешно сохранено! / ошибка сохранения) в хедере страницы. Как вы это сделаете?
// можно использовать useContext, сделал бы как то так (уже делал подобное):
// 1)Создаю файл FormContext.js с контекстом формы:
// import React, { createContext, useState } from 'react';

// export const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [formState, setFormState] = useState('');

//   return (
//     <FormContext.Provider value={{ formState, setFormState }}>
//       {children}
//     </FormContext.Provider>
//   );
// };
// 2)Оборачиваю куда надо отправить значение
// import { FormProvider } from './FormContext';
// const App = () => {
//   return (
//     <FormProvider>
//       {/* компоненты */}
//     </FormProvider>
//   );
// };
// export default App;
// 3) В компоненте формы обновляю состояние
// import React, { useContext } from 'react';
// import { FormContext } from './FormContext';

// const FormComponent = () => {
//   const { formState, setFormState } = useContext(FormContext);

//   const handleSubmit = () => {
//     // Логика состояния формы
//     setFormState('успешно сохранено!');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/*  форма */}
//     </form>
//   );
// };
// export default FormComponent;
// 4) добавим в хедер состояние
// import React, { useContext } from 'react';
// import { FormContext } from './FormContext';

// const Header = () => {
//   const { formState } = useContext(FormContext);

//   return (
//     <header>
//       <h1>{formState}</h1>
//     </header>
//   );
// };

// export default Header;

//  У вас есть компонент, который в зависимости от размера окна будет показывать разный контент (разный набор блоков). Как бы вы это реализовали?
// тоже подобное делал использовал свойство window. innerWidth у меня получилось так:
// import React, { useState, useEffect } from 'react';

// const WindowSizeComponent = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       {windowWidth < 768 ? (
//         <div>
//           {/*  для маленького окна */}
//         </div>
//       ) : (
//         <div>
//           {/* для большого окна */}
//         </div>
//       )}
//     </div>
//   );
// };

// У вас есть компонент - табличка с пагинацией, сортировкой, фильтрами,
//   и вам необходимо сохранять текущую страницу, значение фильтров и направление сортировок
//   при перезагрузке страницы.Как бы вы это организовали ?
const [currentPage, setCurrentPage] = useState(1);
const [filters, setFilters] = useState({});
const [sortDirection, setSortDirection] = useState('');

useEffect(() => {
  // Восстановление состояния из localStorage при загрузке страницы
  const savedPage = localStorage.getItem('currentPage');
  const savedFilters = localStorage.getItem('filters');
  const savedSortDirection = localStorage.getItem('sortDirection');

  if (savedPage) {
    setCurrentPage(parseInt(savedPage));
  }

  if (savedFilters) {
    setFilters(JSON.parse(savedFilters));
  }

  if (savedSortDirection) {
    setSortDirection(savedSortDirection);
  }
}, []);

useEffect(() => {
  // Сохранение состояния в localStorage при изменении параметров
  localStorage.setItem('currentPage', currentPage);
  localStorage.setItem('filters', JSON.stringify(filters));
  localStorage.setItem('sortDirection', sortDirection);
}, [currentPage, filters, sortDirection]);

// 4.3. /Если вы работали со styled components/ Расскажите, как создать вариацию кнопки,
//  которая у вас уже есть.Например, кнопка синяя с белым текстом, а вам нужна еще и прозрачная с синим текстом.

const Button = styled.button`
  //стиль кнопки
`;

// синяя с белым текстом
const BlueButton = styled(Button)`
  background-color: blue;
  color: white;
`;

// прозрачная с синим текстом
const TransparentButton = styled(Button)`
  background-color: transparent;
  color: blue;
`;

function MyComponent() {
  return (
    <>
      <BlueButton>Синяя кнопка</BlueButton>
      <TransparentButton>Прозрачная кнопка</TransparentButton>
    </>
  );
}
