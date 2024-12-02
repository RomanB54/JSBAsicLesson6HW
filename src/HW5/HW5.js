const arr = [12, 10, 12, 5, 5, 4, 5, 2, 4, 10];
let sum = 0;
let max = 0;
let min = Infinity;
const newArr = [];
//exercise 1
export function getSumArray() {
  arr.forEach(function (el) {
    sum = sum + el;
    return el;
  });
  return console.log(sum);
}

//exercise 2
export function createNewArray() {
  arr.forEach(function (el) {
    const modified = el * 2;
    newArr.push(modified);
  });
  return newArr;
}

//exercise 3
export function findLowestAndBiggest() {
  arr.forEach(function (el) {
    if (el > max) {
      max = el;
    } else {
      max = max;
    }
  });
  arr.forEach(function (el) {
    if (el < min) {
      min = el;
    } else {
      min = min;
    }
  });
  return console.log(min, max);
}
