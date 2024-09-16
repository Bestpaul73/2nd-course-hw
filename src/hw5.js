// function multiply(a, b) {
//   return a * b;
// }
// console.log(`Произведение двух чисел равняется ${multiply(2, 3)}`);
// ============================================================================

// sayHi();
// const sayHi = function() {
// 	console.log('Hi!');
// }

// ============================================================================
// const test = () => {
//   confirm('y/n') ? console.log('yes') : console.log('no');
// };
// ============================================================================

// const user = {
//   'user Name': 'Paul',
//   city: 'Moscow',
//   age: 50,
//   getInfo() {
//     return(`Пользователь ${user['user Name']}, возраст ${user['age']}, проживает в городе ${user.city}`);
//   },
// };
// console.log(user.getInfo());

// console.log(`Пользователь ${user.userName}, возраст ${user.age}, проживает в городе ${user.city}`);

// for (const key in user) {
//   console.log(`${key} - ${user[key]}`);
// }
// ============================================================================

// let user1 = {
//   name: 'John',
//   age: 30,
// };
// let key = prompt('Что вы хотите узнать о пользователе?', 'name');
// alert(user1[key]);
// ============================================================================

// function getRectangleArea() {
//   return this.width * this.hight;
// }
// const getRectanglePerimeter = function () {
//   return (this.width + this.hight) * 2;
// };

// const square1 = {
//   width: 100,
//   hight: 150,
//   getRectangleArea,
//   getRectanglePerimeter,
// };
// const square2 = {
//   width: 200,
//   hight: 250,
//   getRectangleArea,
//   getRectanglePerimeter,
// };

// console.log(square1.getRectangleArea());
// console.log(square1.getRectanglePerimeter());
// console.log(square2.getRectangleArea());
// console.log(square2.getRectanglePerimeter());
// ============================================================================

// function isPrime(number) {
//   if (number <= 1) return false;
//   for (let i = 2; i ** 2 <= number; i++) {
//     console.log(i);
//     if (number % i === 0) return false;
//   }

//   return true;
// }
// // console.log(isPrime(6));
// // console.log(isPrime(7));
// // console.log(isPrime(8));
// // console.log(isPrime(9));
// // console.log(isPrime(10));
// console.log(isPrime(11));
// ============================================================================

// task1
// const min = (a, b) => {
//   if (a <= b) return a;
//   else return b;
// };
// console.log(min(8, -14));
// ============================================================================

// task2
// function isEven(number) {
//   return number % 2 === 0;
// }

// let a = prompt('Введите число: ');

// if (a === null || !a.trim() || Number.isNaN(+a) || a === undefined) {
//   console.log('вы ввели НЕ число');
// } else {
//   let evenFlag = isEven(a) ? '' : 'не';
//   console.log(`Число ${evenFlag}четное`);
// }
// ============================================================================

// task3
// const sqr = (a) => a * a;

// console.log(sqr(7));
// ============================================================================

// task4
// const age = prompt('Сколько вам лет?');
// if (age === null || !age.trim() || Number.isNaN(+age) || age === undefined) {
//   console.log('вы ввели НЕ число');
// } else {
//   if (age <= 0) {
//     console.log('Вы ввели неправильное значение');
//   } else {
//     age <= 12 ? console.log('Привет, друг!') : console.log('Добро пожаловать!');
//   }
// }
// ============================================================================

// task5
// const number1 = prompt('Введите первое число');
// const number2 = prompt('Введите второе число');
// if (
//   number1 === null ||
//   !number1.trim() ||
//   Number.isNaN(+number1) ||
//   number1 === undefined ||
//   number2 === null ||
//   !number2.trim() ||
//   Number.isNaN(+number2) ||
//   number2 === undefined
// ) {
//   console.log('Одно или оба значения не являются числом');
// } else {
//   console.log(number1 * number2);
// }

// ============================================================================
// task6
// const cubing = (number) => {
//   //   const number = prompt('Введите число');
//   if (number === null || Number.isNaN(+number) || number === undefined) {
//     return 'вы ввели НЕ число';
//   } else {
//     return `${number} в кубе равняется ${number ** 3}`;
//   }
// };

// for (let i = 1; i <= 10; i++) {
//   console.log(cubing(i));
// }

// ============================================================================
// task7
// function getArea() {
//   return (Math.PI * this.radius ** 2) / 2;
// }

// function getPerimeter() {
//   return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//   radius: 10,
//   getArea,
//   getPerimeter,
// };

// const circle2 = {
//   radius: 20,
//   getArea,
//   getPerimeter,
// };

// console.log(circle1.getArea().toFixed(0), circle1.getPerimeter().toFixed(0));
// console.log(circle2.getArea().toFixed(0), circle2.getPerimeter().toFixed(0));
// ===============================================================

// game1
const playGameSeasons = () => {
  let repeatGame = true;
  do {
    let monthNumber = prompt('Введите номер месяца');
    if (monthNumber === null || !monthNumber.trim() || Number.isNaN(+monthNumber) || monthNumber === undefined) {
      console.log('вы ввели НЕ число');
    } else {
      switch (+monthNumber) {
        case 12:
        case 1:
        case 2:
          console.log('Winter');
          break;
        case 3:
        case 4:
        case 5:
          console.log('Spring');
          break;
        case 6:
        case 7:
        case 8:
          console.log('Summer');
          break;
        case 9:
        case 10:
        case 11:
          console.log('Autumn');
          break;
        default:
          console.log('Вы ввели некорректный номер месяца');
          break;
      }
    }
    repeatGame = confirm('Желаете сыграть еще раз?');
  } while (repeatGame);
};
