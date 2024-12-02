import {
  sum50to100,
  showMultiplicationTableOf7,
  calculateArithmeticMean,
} from './HW3';

describe('sum50to100', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('console.log shows sum', () => {
    console.log = jest.fn();
    sum50to100();
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});

describe('Check Multiplication Table of 7', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('console.log shows table', () => {
    console.log = jest.fn();
    showMultiplicationTableOf7();
    expect(console.log).not.toBeNull();
  });
});

describe('Calculate arithmetic mean', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calculate arithmetic mean for 5 to return', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('5');
    const logSpy = jest.spyOn(console, 'log');
    calculateArithmeticMean();
    expect(logSpy).toHaveBeenCalledWith(3);
  });
});
