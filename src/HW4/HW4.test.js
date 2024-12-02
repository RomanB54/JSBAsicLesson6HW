import { addAgeByPrompt, assignRole, saveObjectKeyToVariables } from './HW4';

describe('Function to add user age property', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Add user age property', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('18');
    expect(addAgeByPrompt()).toEqual(
      expect.objectContaining({
        name: 'John',
        age: '18',
      }),
    );
  });
});

describe('Function to copy object add user role property', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Add role "admin"', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('18');
    expect(assignRole()).toEqual(
      expect.objectContaining({
        name: 'John',
        age: '18',
        role: 'admin',
      }),
    );
  });
});

describe('To create variables from a object keys', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Get name, age , role variables from object', () => {
    console.log = jest.fn();
    saveObjectKeyToVariables();
    expect(console.log).toHaveBeenCalledWith('John', '18', 'admin');
  });
});
