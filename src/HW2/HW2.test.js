import { a, b, result, defineMonth, fitCircleAndSquare } from './HW2';

describe('sum and multiplication a,b', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Check a,b is a number', () => {
    expect(typeof a).toEqual('number');
    expect(typeof b).toEqual('number');
  });

  it('console.log shows biggest variable value', () => {
    const logSpy = jest.spyOn(console, 'log');
    console.log(result);
    expect(logSpy).toHaveBeenCalledWith(5);
    expect(result).toBe(5);
    expect(result).not.toBe(a);
    expect(a < b).toBeTruthy();
  });
});

describe('Function to get month name from user input', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  const testCases = [
    {
      inputData: '1',
      expectedData: 'January',
    },
    {
      inputData: '2',
      expectedData: 'February',
    },
    {
      inputData: '3',
      expectedData: 'March',
    },
    {
      inputData: '4',
      expectedData: 'April',
    },
    {
      inputData: '5',
      expectedData: 'May',
    },
    {
      inputData: '6',
      expectedData: 'June',
    },
    {
      inputData: '7',
      expectedData: 'July',
    },
    {
      inputData: '8',
      expectedData: 'August',
    },
    {
      inputData: '9',
      expectedData: 'September',
    },
    {
      inputData: '10',
      expectedData: 'October',
    },
    {
      inputData: '11',
      expectedData: 'November',
    },
    {
      inputData: '12',
      expectedData: 'December',
    },
    {
      inputData: 'A wrong Data',
      expectedData: 'You entered a wrong data',
    },
  ];
  testCases.forEach((test) => {
    it(`Input ${test.inputData}, output ${test.expectedData}`, () => {
      jest.spyOn(window, 'prompt').mockReturnValue(test.inputData);
      const logSpy = jest.spyOn(console, 'log');
      defineMonth();
      expect(logSpy).toHaveBeenCalledWith(test.expectedData);
    });
  });
});

describe('Function to check possibility to fit circle to a square', () => {
  it('Check possibility to fit circle into square with areas 2,1', () => {
    expect(fitCircleAndSquare(2, 1)).toBe('NO');
  });

  it('Check possibility to fit circle into square with areas 1,2', () => {
    expect(fitCircleAndSquare(1, 2)).toBe('YES');
  });

  it('Check possibility to fit circle into square with undefined areas', () => {
    expect(fitCircleAndSquare()).toBe('NO');
  });
});
