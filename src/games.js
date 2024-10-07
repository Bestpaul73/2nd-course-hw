const playGameFruits = () => {
  const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

  do {
    fruits.sort(() => Math.random() - 0.5);
    alert(`Запомни слова: ${fruits}`);

    const fruitsFirst = String(prompt(`Какое было первое слово?`).toLowerCase());
    const fruitsLast = String(prompt(`Какое было последнее слово?`).toLowerCase());

    if (fruitsFirst === fruits[0].toLowerCase() && fruitsLast === fruits[fruits.length - 1].toLowerCase()) {
      alert(`Угадал`);
    } else if (fruitsFirst === fruits[0].toLowerCase() || fruitsLast === fruits[fruits.length - 1].toLowerCase()) {
      alert(`Вы были близки к победе!`);
    } else {
      alert(`Не угадал.`);
    }
  } while (confirm('Сыграем еще раз?'));
};

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

const playGameRiddle = () => {
  const riddle = [
    `Что может путешествовать по свету, оставаясь в одном и том же углу?
    `,
    `Это что-то маленькое, что можно наклеить.`,
    `Это используется для отправки писем.`,
  ];
  const answer = `Марка`;
  let userAnswer;

  for (let i = 0; i < riddle.length; i++) {
    userAnswer = prompt(riddle[i]);
    if (userAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
      alert(`Поздравляем с победой!`);
      break;
    } else {
      if (i < riddle.length-1) {
        alert(`Неверно. Подсказка:`);
      } else alert(`Вы проиграли`);
    }
  }
};
