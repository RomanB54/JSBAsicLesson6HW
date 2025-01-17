//exercise 1
export function sum50to100() {
  let sum = 0;
  for (let i = 50; i <= 100; i++) {
    sum = sum + i;
  }
  return console.log(sum);
}
//exercise 2
export function showMultiplicationTableOf7() {
  let output = '';
  let first = 0;
  for (let i = 1; i <= 9; i++) {
    first = i * 7;
    output = output + ('7 * ' + i + ' = ' + first + '\n');
  }
  return console.log(output);
}
//exercise 3

export function calculateArithmeticMean() {
  const inputNumber = +prompt('Enter a number N');
  let sum = 0;

  for (let i = 1; i <= inputNumber; i += 2) {
    sum += i;
  }

  const mean = sum / Math.round(inputNumber / 2);
  return console.log(mean);
}
