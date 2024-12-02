export function diff(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

export function isWord() {
  const str = prompt('Please enter a string :');
  const arr = str.split(' ');
  const len = arr.length;
  if (len == 1) {
    return 'True';
  } else {
    return 'False';
  }
}

export function pow(a, x) {
  let res = 1;

  for (let i = 1; i <= x; i++) {
    res = res * a;
  }
  return res;
}
