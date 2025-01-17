//exercise 1
export function checkTriangle(A, B, C) {
  function calcHypotenuse(X1, X2) {
    return Math.sqrt(X1 * X1 + X2 * X2);
  }
  if (
    C === calcHypotenuse(A, B) ||
    B === calcHypotenuse(A, C) ||
    A === calcHypotenuse(B, C)
  ) {
    return true;
  } else {
    return false;
  }
}

//exercise 2

export function calculateCircle() {
  const R = +prompt('Enter a radius');
  const lengthOfCircle = Math.PI * 2 * R;
  const areaCircle = Math.PI * Math.pow(R, 2);
  const result = `Length = ${lengthOfCircle.toFixed(2)} , area = ${areaCircle.toFixed(2)}`;
  return console.log(result);
}

//exercise 3

export function calculateRoots() {
  const input = prompt('Enter a,b,c') + '';
  const formInput = input.split(',');
  const a = Number(formInput[0]);
  const b = Number(formInput[1]);
  const c = Number(formInput[2]);
  let x1 = 0;
  let x2 = 0;

  const discriminant = Math.pow(b, 2) - 4 * a * c;
  let result;
  if (discriminant >= 0) {
    if (discriminant == 0) {
      result = -(b / (2 * a));
      return console.log(`x = ${result}`);
    } else {
      x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      result = `x1 = ${x1.toFixed(2)} , x2 = ${x2.toFixed(2)}`;
      return console.log(result);
    }
  } else {
    return console.log('No real roots');
  }
}
