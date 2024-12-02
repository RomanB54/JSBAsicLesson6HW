import {
  defineDayOfWeek,
  calculateMinutesFromBegin,
  defineYoungestGuy,
} from './HW8';

describe('Define day', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  const testCases = [
    {
      inputData: '17.11.2024',
      expectedData: 'Sunday',
    },
    {
      inputData: '18.11.2024',
      expectedData: 'Monday',
    },
    {
      inputData: '19.11.2024',
      expectedData: 'Tuesday',
    },
    {
      inputData: '20.11.2024',
      expectedData: 'Wednesday',
    },
    {
      inputData: '21.11.2024',
      expectedData: 'Thursday',
    },
    {
      inputData: '22.11.2024',
      expectedData: 'Friday',
    },
    {
      inputData: '23.11.2024',
      expectedData: 'Saturday',
    },
  ];
  testCases.forEach((test) => {
    it(`Input ${test.inputData}, output ${test.expectedData}`, () => {
      jest.spyOn(window, 'prompt').mockReturnValue(test.inputData);
      expect(defineDayOfWeek()).toBe(test.expectedData);
    });
  });
});
describe('Calculate minutes from beginning a day', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    console.log = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });
  const getFakeDate = () => {
    return Date.now();
  };

  it('Calculate 10 minutes', () => {
    jest.setSystemTime(new Date('2027-11-27T00:10:00'));
    calculateMinutesFromBegin(getFakeDate());
    expect(console.log).toHaveBeenCalledWith(10);
  });

  it('Calculate 90 minutes', () => {
    jest.setSystemTime(new Date('2027-11-27T01:30:00'));
    calculateMinutesFromBegin(getFakeDate());
    expect(console.log).toHaveBeenCalledWith(90);
  });
});

describe('Define a youngest guy', () => {
  const setBDvalue = (user, bD) => {
    user.birthday = bD;
  };
  const user1 = {
    name: 'User1',
  };
  const user2 = {
    name: 'User2',
  };

  it('User2 is younger', () => {
    // jest.setSystemTime(new Date('2027-11-27'));
    // getFakeDate();
    setBDvalue(user1, '05.11.1987');
    setBDvalue(user2, '13.11.1987');
    expect(defineYoungestGuy(user1, user2)).toBe('User2');
  });

  it('User1 is younger', () => {
    // jest.setSystemTime(new Date('2027-11-27'));
    // getFakeDate();
    setBDvalue(user1, '05.11.1987');
    setBDvalue(user2, '13.10.1987');
    expect(defineYoungestGuy(user1, user2)).toBe('User1');
  });
});
