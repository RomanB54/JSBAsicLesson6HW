import { defineType } from './HW10';

describe('Define type of entered data', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Define email address by input  bars@mail.ru', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('bars@mail.ru');
    const logSpy = jest.spyOn(console, 'log');
    defineType();
    expect(logSpy).toHaveBeenCalledWith('Your input is a email address');
  });
  it('Define phone number by input bars@mail.ru', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('89237330104');
    const logSpy = jest.spyOn(console, 'log');
    defineType();
    expect(logSpy).toHaveBeenCalledWith('Your input is a phone number');
  });
  it('Define email address by bars@mail.ru', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('25.11.2024');
    const logSpy = jest.spyOn(console, 'log');
    defineType();
    expect(logSpy).toHaveBeenCalledWith('Your input is a date');
  });
  it('Define wrong input', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('asfafdasfasfsafasfd');
    const logSpy = jest.spyOn(console, 'log');
    defineType();
    expect(logSpy).toHaveBeenCalledWith(
      'Please input a correct phone number or email or date',
    );
  });
});
