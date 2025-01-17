import { getSumArray, createNewArray, findLowestAndBiggest } from './HW5';

describe('Functions to get sum, multiply by 2 and define min, max of array', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Calculate sum of array, expected 69', () => {
    console.log = jest.fn();
    const sumArr = [1, 2, 3, 4, 5];
    getSumArray(sumArr);
    expect(console.log).toHaveBeenCalledWith(15);
  });

  it('Return array with multiplied elements by two', () => {
    const secondArr = [1, 3, 5];
    expect(createNewArray(secondArr)).toEqual([2, 6, 10]);
  });

  it('Find min: and max: in array', () => {
    console.log = jest.fn();
    const thirdArr = [1, 10, 20];
    findLowestAndBiggest(thirdArr);
    expect(console.log).toHaveBeenCalledWith(1, 20);
  });
});
