//exercise 1
export function defineDayOfWeek() {
  const inputDate = prompt('Input a date in format DD.MM.YYYY.');
  const [day, month, year] = inputDate.split('.');
  const formattedDate = new Date(year, month - 1, day);

  const defDay = formattedDate.getDay();
  let dayName = '';
  switch (defDay) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
  }
  return dayName;
}
//exercise 2
export function calculateMinutesFromBegin(XDate) {
  XDate = new Date();
  const result = XDate.getHours() * 60 + XDate.getMinutes();
  return console.log(result);
}
//exercise 3

const user1 = {
  name: 'John',
  birthday: '05.09.2008',
};
const user2 = {
  name: 'Alex',
  birthday: '17.09.2009',
};

export function convertDate(text) {
  const [day, month, year] = text.split('.');
  const dateForm = new Date(`${year}-${month}-${day}`);
  const diff = Date.now() - Date.parse(dateForm);
  return diff;
}

export function defineYoungestGuy(A, B) {
  if (convertDate(A.birthday) < convertDate(B.birthday)) {
    return A.name;
  } else {
    return B.name;
  }
}

defineYoungestGuy(user1, user2);
