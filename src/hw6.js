// let products = ['chair', 'table', 'bed'];
// console.log(products.pop());
// ===============================================================

// const nums = [1, 2, 3, 4, 5];
// const transformed = nums.map((num, i) => `${i}-${num}`);
// console.log(transformed);
// ===============================================================

// let arr = [3, 4, 5, 6];

// const sum = (a, b, c) => {
//   return a + b - c;
// };

// console.log(sum(...arr));
// console.log(Math.max(...arr));
// console.log(arr.reduce((a, b) => a + b));
// ===============================================================

// function funcSum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// console.log(funcSum([3, 5, 7, 6]));
// ===============================================================

// function funcSum(...array) {
//   let sum = 0;
//   for (item of array) {
//     sum += +item;
//   }
//   return sum;
// }

// console.log(funcSum(3, 5, 7, '6'));
// ===============================================================

// let arr = [3, 4, 5, 6];

// const sum = (a, b, ...rest) => {
//   console.log(a + b);
//   console.log(rest);
// };

// sum(...arr);
// ===============================================================

// function concatArr(arr, ...rest) {
//   console.log(rest);
//   console.log(...rest);
//   return [...arr, ...rest];
// }
// console.log(concatArr([1, 2], [3, 4, 5], [6, 7]));
// ===============================================================

// const salary = [45, 39, 105, 76, 77];
// search = salary.includes(39);
// console.log(search); //true
// ===============================================================

// const newspaper = {
//   sports: {
//     title: 'ARod Hits Home Run',
//     writers: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
//   },
//   business: {
//     title: 'GE Stock Dips Again',
//     writers: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
//   },
//   movies: {
//     title: 'Superman Is A Flop',
//     writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
//   },
// };
// console.log(newspaper.sports.title);
// console.log(newspaper['movies']['title']);
// console.log(newspaper.business.writers[0]);
// ===============================================================

// let arr = [];
// for (let i = 0; i < 100000; i++) {
//   arr.push(Math.round(Math.random() * 1000));
// }
// console.log(arr);
// let start;

// start = Date.now();
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, ':', arr[i]);
//   if (arr[i] === 10) break;
// }
// console.log(Date.now() - start);
// console.log('===============================================================');

// start = Date.now();
// let i = 0;
// do {
//   console.log(i, ':', arr[i]);
//   i++;
// } while (arr[i - 1] !== 10 || (i < 100));
// console.log(Date.now() - start);
// console.log('===============================================================');

// start = Date.now();
// let noConsole = false;
// arr.forEach((el) => {
//   if (!noConsole) console.log(el);
//   if (el === 10) noConsole = true;
// });
// console.log(Date.now() - start);
// ===============================================================

// const arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.indexOf(4));
// for (let i = 0; i < arr.length; i++) {
//   arr[i] === 4 ? console.log(i) : null;
// }
// console.log(arr.join(' '));
// ===============================================================

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr.push([]);
//   for (let j = 0; j < 3; j++) {
//     arr[i][j] = 1;
//   }
// }
// console.dir(arr);
// ===============================================================

// let arr = [1, 1, 1];
// let arr2 = [2, 2, 2];
// // for (i = 0; i < 3; i++) {
// //   arr.push(2)
// // }
// arr.push(...arr2)
// console.log(arr);
// ===============================================================

// let arr = [9, 8, 7, 'a', 6, 5];
// // arr.sort().pop();
// console.log(arr.sort().filter((el) => (el !== 'a')));
// ===============================================================

// Задание 7
// let arr = [9, 8, 7, 6, 5];
// let userAnswer = +prompt('Введите число:');
// arr.includes(userAnswer) ? console.log('Угадали') : console.log('Не угадали');
// ===============================================================

// Задание 8
// let str = 'abcdef'
// console.log(str.split('').reverse().join(''));
// ===============================================================

// Задание 9
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// let result = [...arr[0], ...arr[1]];
// console.log(result);

// let resultArr = arr[0].concat(arr[1]);
// console.log(resultArr);

// let result2 = arr.flat();
// console.log(result2);

// let flattenedArray = [].concat(...arr);
// console.log(flattenedArray);
// ===============================================================

// Задание 10
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.round(Math.random() * 10));
// }
// console.log(arr);

// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i] + (i < arr.length - 1 && arr[i + 1]));
// }
// console.log(result);

// result = [];
// const sum10_2 = (a, b) => a + b;
// const lengthArr = arr.length;
// for (let i = 0; i < lengthArr - 1; i++) {
//   result.push(sum10_2(...arr));
//   arr.shift();
// }
// console.log(result);

// ===============================================================

// Задание 11
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.round(Math.random() * 10));
// }
// console.log(arr);

// console.log(arr.map((el) => el ** 2));
// ===============================================================

// Задание 12
// const string = 'Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.';
// let stringArr = string.split(' ');
// console.log(stringArr);
// console.log(stringArr.map((el) => el.length));
// ===============================================================

// Задание 13
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.round((Math.random() - 0.5) * 20));
// }
// console.log(arr);

// let result = arr.filter((el) => el < 0);
// console.log(result);
// ===============================================================

// Задание 14
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.round(Math.random() * 10));
// }
// console.log(arr);

// let result = arr.filter((el) => el % 2 === 0);
// console.log(result);
// ===============================================================

// Задание 15
// let arr = [];
// for (let i = 0; i < 6; i++) {
//   arr.push(Math.round(Math.random() * 10));
// }
// console.log(arr);

// console.log(arr.reduce((a, b) => a + b) / arr.length);
// ===============================================================
