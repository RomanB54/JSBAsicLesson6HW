import { calculateSM, calculateLength, calculate3Digit } from './HW1';

describe('Console.log for sum and multiplication a,b', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('console.log shows sumAB', () => {
    const logSpy = jest.spyOn(console, 'log');
    calculateSM(3, 5);
    expect(logSpy).toHaveBeenCalledWith(15, 8);
  });
});

describe('Lengths of first and second strings sum', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Check first and second are strings', () => {
    const logSpy = jest.spyOn(console, 'log');
    const first = '12345';
    const second = 'Onetwo';
    calculateLength(first, second);
    expect(logSpy).toHaveBeenCalledWith(11);
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
