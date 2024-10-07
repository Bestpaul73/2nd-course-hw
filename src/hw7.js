// const currentDate = new Date();
// console.log(currentDate.getFullYear());
// console.log(currentDate.getUTCFullYear());
// console.log(currentDate.getUTCMonth());
// console.log(currentDate.getMonth());
// console.log(currentDate.getUTCDay());
// console.log(currentDate.getDay());
// console.log(currentDate.getUTCDate());
// console.log(currentDate.getDate());

// console.log(currentDate.toISOString())
// // 2022-08-14T11:15:30.000Z

// currentDate.setMonth(10, 3)
// console.log(currentDate.toLocaleDateString())

// console.log(currentDate.getHours());
// console.log(currentDate.getUTCHours());

// const currentDate = new Date('August 14, 2022 14:15:30');

// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
//   timeZoneName: 'long',
// };

// console.log(currentDate.toLocaleDateString('ru-RU', options));
// // 14.08.2022, 14:15:30 Москва, стандартное время

// console.log(currentDate.toLocaleDateString('en-US', options));
// // 8/14/2022, 2:15:30 PM Moscow Standard Time

// const newDate = new Date('August 14, 2022 14:15:30')

// newDate.setDate(-1)

// console.log(newDate.toISOString())
// 2022-07-31T11:15:30.000Z

// today = new Date();
// today.setMonth(0, 1);
// today.setDate(256);
// console.log(today.toISOString());

// вот тебе и день программиста;)

// const date = Date.now();

// const formatter = new Intl.DateTimeFormat('ru', {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'numeric',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
//   hour12: true,
//   timeZone: 'UTC',
// });
// console.log(formatter.format(date));
// // суббота, 27.05.2023 г., 10:55:18 PM
// console.log(formatter.formatToParts(date));
// console.log(formatter.formatToParts(date)[8].value);

// formatter.formatToParts(date).forEach((el) => {
//   if (el.type === 'year') console.log(`${el.type}: ${el.value}`);
// });

// const userYear = 2024;
// const userMonth = 8;
// const daysInMonth = new Date(userYear, userMonth + 1, 0).getDate();

// let userMonthDay, userDate;
// do {
//   userMonthDay = Math.ceil(Math.random() * daysInMonth);
//   userDate = new Date(userYear, userMonth, userMonthDay);
// } while (userDate.getDay() > 0 && userDate.getDay() <= 5);

// console.log('первый случайный выходной: ', userDate);

// do {
//   userMonthDay = Math.ceil(Math.random() * daysInMonth);
//   userDate = new Date(userYear, userMonth, userMonthDay);
// } while (userDate.getDay() == 0 || userDate.getDay() == 6);

// console.log('первый случайный будний: ', userDate);

// homework
// task1
// console.log('js'.toLocaleUpperCase());

// task2
// const arr = ['one', 'two', 'tWotwo', 'three'];
// const str = 'Tw';
// const resultArr = [];
// arr.forEach((el) => {
//   if (el.toLocaleLowerCase().startsWith(str.toLocaleLowerCase())) resultArr.push(el);
// });
// console.log(resultArr);

// task3
// const num = 32.58884;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// task4
// const arr = [52, 53, 49, 77, 21, 32];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// task5
// console.log(Math.round(Math.random() * 10));

// task6
// const num = 26;
// const arr = [];
// for (let i = 0; i < num - 1; i += 2) {
//   arr.push(Math.round(Math.random() * num));
// }
// console.log(arr);

// task7
// const min = 7;
// const max = 8;
// console.log(Math.round(Math.random() * (max - min)) + min);

// task8
// const today = new Date()
// console.log(today.toISOString());

// task9
// const currentDate = new Date();
// const date73 = new Date(+currentDate + 73 * 24 * 60 * 60 * 1000);
// console.log('73: ', date73);
// console.log(date73.toISOString());

// task10
// const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// const months = [
//   'Январь',
//   'Февраль',
//   'Март',
//   'Апрель',
//   'Май',
//   'Июнь',
//   'Июль',
//   'Август',
//   'Сентябрь',
//   'Октябрь',
//   'Ноябрь',
//   'Декабрь',
// ];

// let myDate = new Date(2024, 8, 25, 19, 8, 7, 10);
// console.log(`Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} — это ${
//   days[myDate.getDay()]
// }.
// Время: ${myDate.getHours().toString().padStart(2, '0')}:${myDate.getMinutes().toString().padStart(2, '0')}:${myDate
//   .getSeconds()
//   .toString()
//   .padStart(2, '0')}`);

// task11
