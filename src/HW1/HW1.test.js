import {
  a,
  b,
  sumAB,
  multiplicationAB,
  firstStr,
  secondStr,
  calculate3Digit,
} from './HW1';

describe('sum and multiplication a,b', () => {
  it('Check a,b is a number', () => {
    expect(typeof a).toEqual('number');
    expect(typeof b).toEqual('number');
  });
  it('Check sum a and b', () => {
    expect(sumAB).toBe(8);
  });
  it('Check multiplication a and b', () => {
    expect(multiplicationAB).toBe(15);
  });
});

describe('Console.log for sum and multiplication a,b', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('console.log shows sumAB', () => {
    const logSpy = jest.spyOn(console, 'log');
    console.log(sumAB);
    expect(logSpy).toHaveBeenCalledWith(8);
  });

  it('console.log shows multiplicationAB', () => {
    const logSpy = jest.spyOn(console, 'log');
    console.log(multiplicationAB);
    expect(logSpy).toHaveBeenCalledWith(15);
  });
});

describe('Lengths of first and second strings sum', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Check first and second are strings', () => {
    expect(typeof firstStr).toEqual('string');
    expect(typeof secondStr).toEqual('string');
  });

  it('console.log shows sum of first and second variables characters', () => {
    const logSpy = jest.spyOn(console, 'log');
    console.log(firstStr.length + secondStr.length);
    expect(logSpy).toHaveBeenCalledWith(13);
  });
});

describe('Check input and show sum of numbers', () => {
  it('returns 6 for 123', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('123');
    const logSpy = jest.spyOn(console, 'log');
    calculate3Digit();
    expect(logSpy).toHaveBeenCalledWith(6);
  });
});
