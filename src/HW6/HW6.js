export function diff(a, b) {
  return Math.abs(a - b);
}

export function isWord() {
  const str = prompt('Please enter a string :');
  const arr = str.split(' ');
  const len = arr.filter(String).length;
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
