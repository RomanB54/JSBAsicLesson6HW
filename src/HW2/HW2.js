//exercise_1
export const a = 3;
export const b = 5;
export let result;

if (a > b) {
  result = a;
} else {
  result = b;
}

console.log(result);

//exercise_2
export function defineMonth(userInput) {
  let month;
  userInput = prompt('Enter a number of month from 1 to 12');
  switch (userInput) {
    case '1':
      month = 'January';
      break;

    case '2':
      month = 'February';
      break;

    case '3':
      month = 'March';
      break;

    case '4':
      month = 'April';
      break;

    case '5':
      month = 'May';
      break;

    case '6':
      month = 'June';
      break;

    case '7':
      month = 'July';
      break;

    case '8':
      month = 'August';
      break;

    case '9':
      month = 'September';
      break;

    case '10':
      month = 'October';
      break;

    case '11':
      month = 'November';
      break;

    case '12':
      month = 'December';
      break;
    default:
      month = 'You entered a wrong data';
      break;
  }
  return console.log(month);
}

//exercise_3
export function fitCircleAndSquare(circle, square) {
  const circleDiameter = 2 * Math.sqrt(circle / Math.PI);
  const squareSide = Math.sqrt(square);
  if (circleDiameter < squareSide) {
    return 'YES';
  } else {
    return 'NO';
  }
}
