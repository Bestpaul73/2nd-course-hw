// const fibonacci = [1, 1, 2, 3, 5, 8];
// const multipleByTwoFib = fibonacci.map((el) => el * 2);
// const plusTenFib = fibonacci.map((el) => el + 10);
// const onlyBigFib = fibonacci.filter((el) => el > 3);

// console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib); // => [5, 8]
// ======================================================================

// function functionWithCallback(callback) {
//   callback('Глеб', 'Фокин');
// }

// functionWithCallback((name, surname) => {
//   console.log(`Привет, ${name} ${surname}!`);
// }); // => Выведет в консоль «Привет, Глеб Фокин!»
// // ======================================================================

// const greet = (name, surname) => {
//   console.log(`Привет, ${name} ${surname}!`);
// };
// function functionWithoutCallback() {
//   greet('Глеб', 'Фокин');
// }
// functionWithoutCallback(); // => Выведет в консоль «Привет, Глеб Фокин!»
// ======================================================================

// function callbackWithArrayLength(arr, callback) {
//   callback(arr.length);
// }

// callbackWithArrayLength([1], (length) => {
//   console.log(length);
// });

// callbackWithArrayLength([1, 1], (len) => {
//   console.log(len);
// });
// callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//   console.log(l);
// });
// ======================================================================

// function log(arrItem) {
//     console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);
// ======================================================================

// function add(number1, number2) {
//   return number1 + number2;
// }

// function map(arr, ruleFunction) {
//   const output = [];

//   // Добавил консоль лог для отладки
//   //   console.log('ruleFunction', ruleFunction);

//   for (let i = 0; i < arr.length; i++) {
//     output.push(ruleFunction(arr[i]));
//   }

//   return output;
// }
// Функция map вызывает колбэк с одним аргументом,
// получается вызов add(arr[i]), nакой вызов вернет NaN,
// потому что попытается сложить число с undefined
// console.log(map([1, 4, 9, 16], add)); // [ NaN, NaN, NaN, NaN ]
// Такая же проблема, как в предыдущей ошибке
// console.log(map([1, 4, 9, 16], add(10)));
// console.log(map([1, 4, 9, 16], (item) => add(10, item)));

// ======================================================================

// console.log(`Начало загрузки файла`);
// let progress = 0;
// const timerId = setInterval(() => {
//   progress += Math.round(Math.random() * 10) + 15;
//   progress = progress > 100 ? 100 : progress;
//   console.log(progress);
//   if (progress >= 100) {
//     clearInterval(timerId);
//     console.log(`Загрузка завершена`);
//     console.log(`Файл обрабатывается`);
//     setTimeout(() => {
//       console.log(`Файл сохраняется`);
//       setTimeout(() => console.log(`Готово!`), 2000);
//     }, 2000);
//   }
// }, 1000);

// ======================================================================

// const fibonacci = [1, 1, 2, 3, 5, 8];

// const multipleByTwoFib = (arr) => arr.map((num) => num * 2);
// const plusTenFib = (arr) => arr.map((num) => num + 10);
// const onlyBigFib = (arr) => arr.filter((num) => num > 3);

// console.log(multipleByTwoFib(fibonacci));
// console.log(plusTenFib(fibonacci));
// console.log(onlyBigFib(fibonacci));

// ======================================================================

// const people = [
//   { name: 'Глеб', age: 29 },
//   { name: 'Анна', age: 17 },
//   { name: 'Олег', age: 7 },
//   { name: 'Оксана', age: 47 },
// ];

// console.log(people.sort((a, b) => a.age - b.age));

// ======================================================================

// function isPositive(item) {
//   return item > 0;
// }

// function isMale(item) {
//   return item.gender === 'male';
// }

// function filter(arr, ruleFunction) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (ruleFunction(arr[i])) newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//   { name: 'Глеб', gender: 'male' },
//   { name: 'Анна', gender: 'female' },
//   { name: 'Олег', gender: 'male' },
//   { name: 'Оксана', gender: 'female' },
// ];

// console.log(filter(people, isMale));

// ======================================================================

// const showDate = () => {
//   const currentDate = new Date();
//   console.log(currentDate.toISOString());
// };

// const intervalId = setInterval(() => {
// //   showDate();
// console.log(new Date());
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log(`20 sec gone`);
// }, 20000);

// ======================================================================

// function delayForSecond(callback) {
//   // Код писать можно только внутри этой функции
//   setTimeout(() => {
//     if (callback) callback();
//   }, 1000);
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// });

// ======================================================================

// Функция delayForSecond через 1 секунду пишет в консоль
// «Прошла одна секунда», а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//   setTimeout(() => {
//     console.log('Прошла одна секунда');
//     if (cb) {
//       cb();
//     }
//   }, 1000);
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi(name) {
//   console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(() => sayHi('Глеб'));

// ======================================================================

// let arr = [1, '4', false, 9, 'two'];
// arr = arr.filter(item => !isNaN(item));
// arr = arr.map(Number);
// console.log(arr); // [1, 4, 0, 9]

// =================================================================