import { checkTriangle, calculateCircle, calculateRoots } from './HW9';

describe('Check triangle', () => {
  it('Check right triangle', () => {
    expect(checkTriangle(3, 4, 5)).toBeTruthy();
  });
  it('Check wrong triangle', () => {
    expect(checkTriangle(2, 3, 4)).toBeFalsy();
  });
});

describe('Calculate circle parameters', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Calculate S and L , 78.54 and 31.42', () => {
    jest.spyOn(window, 'prompt').mockReturnValue(5);
    const logSpy = jest.spyOn(console, 'log');
    calculateCircle();
    expect(logSpy).toHaveBeenCalledWith('Length = 31.42 , area = 78.54');
  });

  it('Calculate S and L , 3.14 and 6.28', () => {
    jest.spyOn(window, 'prompt').mockReturnValue(1);
    const logSpy = jest.spyOn(console, 'log');
    calculateCircle();
    expect(logSpy).toHaveBeenCalledWith('Length = 6.28 , area = 3.14');
  });
});

describe('Calculate roots', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Calculate roots for coefficient 1,2,3', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('1,2,3');
    const logSpy = jest.spyOn(console, 'log');
    calculateRoots();
    expect(logSpy).toHaveBeenCalledWith('No real roots');
  });

  it('Calculate roots for coefficient 1,2,1', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('1,2,1');
    const logSpy = jest.spyOn(console, 'log');
    calculateRoots();
    expect(logSpy).toHaveBeenCalledWith('x = -1');
  });

  it('Calculate roots for coefficient -1,5,-3', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('-1,5,-3');
    const logSpy = jest.spyOn(console, 'log');
    calculateRoots();
    expect(logSpy).toHaveBeenCalledWith('x1 = 0.70 , x2 = 4.30');
  });
});
