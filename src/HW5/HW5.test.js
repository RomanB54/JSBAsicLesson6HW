import { getSumArray, createNewArray, findLowestAndBiggest } from './HW5';

describe('Functions to get sum, multiply by 2 and define min, max of array', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Calculate sum of array, expected 69', () => {
    console.log = jest.fn();
    getSumArray();
    expect(console.log).toHaveBeenCalledWith(69);
  });

  it('Return array with multiplied elements by two', () => {
    expect(createNewArray()).toEqual([24, 20, 24, 10, 10, 8, 10, 4, 8, 20]);
  });

  it('Find min: and max: in array', () => {
    console.log = jest.fn();
    findLowestAndBiggest();
    expect(console.log).toHaveBeenCalledWith(2, 12);
  });
});
