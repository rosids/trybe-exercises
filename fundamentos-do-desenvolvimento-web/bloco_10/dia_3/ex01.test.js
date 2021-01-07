const { randomNumber } = require('./ex01');

jest.mock('./ex01');

describe('randomNumber test', () => {
  it('checks function return and call', () => {
    randomNumber.mockReturnValue(10);
    
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});