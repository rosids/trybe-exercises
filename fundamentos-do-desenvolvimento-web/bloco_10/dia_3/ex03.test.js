const { randomNumber } = require('./ex01');

jest.mock('./ex01');

describe('randomNumber test', () => {
  beforeEach(() => randomNumber.mockReset());
  
  it('should receive three parameters and return their multiplication', () => {
    randomNumber.mockImplementation((a, b, c) => a * b* c);

    expect(randomNumber(2, 4, 8)).toBe(64);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2, 4, 8);
  });

  it('should receive a parameter and return its double', () => {
    expect(randomNumber).toHaveBeenCalledTimes(0);
    
    randomNumber.mockImplementation(a => a * 2);

    expect(randomNumber(4)).toBe(8);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(4);
  });
});