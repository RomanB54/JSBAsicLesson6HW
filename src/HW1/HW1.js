//exercise_1
export const a = 3;
export const b = 5;
export const sumAB = a + b;
export const multiplicationAB = a * b;
console.log(sumAB);
console.log(multiplicationAB);
//exercise_2
export const firstStr = '1First';
export const secondStr = '2Second';
console.log(firstStr.length + secondStr.length);
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
