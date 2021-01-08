const { upperCase, firstLetterOfTheWord, concatenateString } = require('./mockFunctions');

jest.mock('./mockFunctions');

describe('upperCase test', () => {
  it('should return the lowercase string', () => {
    upperCase.mockImplementation(string => string.toLowerCase());
    
    expect(upperCase('CASA')).toBe('casa');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase).toHaveBeenCalledWith('CASA');
  });
});

describe('firsLetterOfTheWord test', () => {
  it('should return the last letter of a string', () => {
    firstLetterOfTheWord.mockImplementation(string => string[string.length - 1]);
    
    expect(firstLetterOfTheWord('celular')).toBe('r');
    expect(firstLetterOfTheWord).toHaveBeenCalled();
    expect(firstLetterOfTheWord).toHaveBeenCalledTimes(1);
    expect(firstLetterOfTheWord).toHaveBeenCalledWith('celular');
  });
});

describe('concatenateString test', () => {
  it('should receive three strings and concatenate them', () => {
    concatenateString.mockImplementation((str1, str2, str3) => str1 + str2 + str3);

    expect(concatenateString('ca', 's', 'a')).toBe('casa');
    expect(concatenateString).toHaveBeenCalled();
    expect(concatenateString).toHaveBeenCalledTimes(1);
    expect(concatenateString).toHaveBeenCalledWith('ca', 's', 'a');
  });

});