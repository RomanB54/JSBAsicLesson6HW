//exercise_1
export function calculateSM(a, b) {
  const sumAB = a + b;
  const multiplicationAB = a * b;
  return console.log(multiplicationAB, sumAB);
}
//exercise_2
export function calculateLength(first, second) {
  const sumOfLengths = first.length + second.length;
  return console.log(sumOfLengths);
}
//exercise_3
export function calculate3Digit() {
  const inputNum = prompt('Enter three-digit number');
  const splittedInput = inputNum.split('');
  const sum =
    Number(splittedInput[0]) +
    Number(splittedInput[1]) +
    Number(splittedInput[2]);
  return console.log(sum);
}
