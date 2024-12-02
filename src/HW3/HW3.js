//exercise 1
export function sum50to100() {
  let sum = 0;
  let number = 50;
  while (number <= 100) {
    sum = sum + number;
    number++;
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
  const N = +prompt('Enter a number N');
  let mean = 0;
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 2 != 0) {
      sum = sum + i;
      count++;
    }
  }
  mean = sum / count;
  return console.log(mean);
}
