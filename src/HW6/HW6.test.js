import { diff, isWord, pow } from './HW6';

describe('Define differences between variables', () => {
  it('Difference 4 between 6 and 10', () => {
    expect(diff(6, 10)).toBe(4);
  });
  it('Difference 4 between 10 and 6', () => {
    expect(diff(10, 6)).toBe(4);
  });
});

describe('Define Boolean value for one word check', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Return true for one word', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('word');
    expect(isWord()).toBe('True');
  });
  it('Return false for two word', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('word word');
    expect(isWord()).toBe('False');
  });
});

describe('Raise a to the power x', () => {
  it('Raise 2 to the power 5, result 32', () => {
    expect(pow(2, 5)).toBe(32);
  });
  it('Raise 5 to the power 2, result 25', () => {
    expect(pow(5, 2)).toBe(25);
  });
});
