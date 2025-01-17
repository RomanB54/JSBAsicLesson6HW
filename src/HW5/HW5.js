//exercise 1
export function getSumArray(arr) {
  let sum = 0;
  arr.forEach(function (el) {
    sum = sum + el;
    return el;
  });
  return console.log(sum);
}

//exercise 2
export function createNewArray(arr) {
  const newArr = [];
  arr.forEach(function (el) {
    const modified = el * 2;
    newArr.push(modified);
  });
  return newArr;
}

//exercise 3
export function findLowestAndBiggest(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return console.log(min, max);
}
