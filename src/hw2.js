// task1
// let password = 'пароль';
// let answer = prompt('Введите пароль: ');

// if (password === answer) {
//   console.log('Пароль введен верно');
// } else {
//   console.log('Пароль введен неверно');
// }

// task2
// let c = 2;
// if (c > 0 && c < 10) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }

// task3
// const d = 121;
// const e = 722;
// if (d > 100 || e > 100) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }

// task4
// let a = '2';
// let b = '3';
// alert(+a + +b);

// task5
// let monthNumber = +prompt('Введите номер месяца')
// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         console.log('Winter');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Spring');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Summer');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Autumn');
//         break;
//     default:
//         console.log('Вы ввели некорректный номер месяца');
//         break;
// }

// task7
// const a = prompt('Пожалуйста, введите любое число');
// if (a === null || !a.trim() || Number.isNaN(+a) || a === undefined) {
//   console.log('вы ввели НЕ число');
// } else {
//   if (a % 2) {
//     console.log('Число нечетное');
//   } else {
//     console.log('Число четное');
//   }
// }
// console.log(a, typeof a);

// task8,9
// let clientOS = prompt('Выберите платформу. iOS - 0, Андроид - 1');
// let clientDeviceYear = prompt('Укажите год выпуска вашего телефона');
// if (
//   clientOS === null ||
//   !clientOS.trim() ||
//   Number.isNaN(+clientOS) ||
//   clientOS === undefined ||
//   clientOS < 0 ||
//   clientOS > 1 ||
//   clientDeviceYear === null ||
//   !clientDeviceYear.trim() ||
//   Number.isNaN(+clientDeviceYear) ||
//   clientDeviceYear === undefined
// ) {
//   console.log('Неверный ввод');
// } else {
//   let light = clientDeviceYear < 2015 ? ' облегченную' : '';
//   //   let light = (clientDeviceYear < 2015) && ' облегченную';
//   +clientOS === 0
//     ? console.log(`Установите${light} версию приложения для iOS по ссылке`)
//     : console.log(`Установите${light} версию приложения для Android по ссылке`);
// }

// task10
// let userName = '';
// console.log(userName !== '' && 'NAME')
