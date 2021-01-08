const mockFunctions = require('./mockFunctions');


describe('upperCase test', () => {
  it('should do the implementation, restore the original implementation and create the necessary tests to validate.', () => {
    const lowerCase = jest.spyOn(mockFunctions, 'upperCase').mockImplementation(string => string.toLowerCase());

    expect(lowerCase('CASA')).toBe('casa');
    expect(lowerCase).toHaveBeenCalled();
    expect(lowerCase).toHaveBeenCalledTimes(1);
    expect(lowerCase).toHaveBeenCalledWith('CASA');

    mockFunctions.upperCase.mockRestore();
    expect(mockFunctions.upperCase('casa')).toBe('CASA');
  });
});