const { randomNumber } = require('./ex01');

jest.mock('./ex01');

describe('randomNumber test', () => {
  it('should divide one number by the other', () => {
    randomNumber.mockImplementation((a, b) => a / b);

    expect(randomNumber(20, 5)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(20, 5);
  });
});