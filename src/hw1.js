// task1
// let a = 10;
// alert(a);
// a = 20;
// alert(a);

// task2
// let a = 9;
// let b = 2;
// alert(a % b);

// task7
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);

let user = {
  userName: 'Paul',
  userAge: 21,
  isAdmin: false,
};
console.log(user);
user['city of residence'] = 'Moscow';
console.log(user);
user.userAge = 33;
console.log(user);
delete user['city of residence'];
console.log(user);
user.isAdmin = true;
console.log(user);

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);
