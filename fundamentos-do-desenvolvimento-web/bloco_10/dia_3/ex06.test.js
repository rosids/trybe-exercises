const { api } = require('./api');

jest.mock('./api');

describe('api request test', () => {
  beforeEach(() => {
    api.mockReset();
  });

  it('successful request', () => {
    api.mockResolvedValue('request sucess');

    api();
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api()).resolves.toBe('request sucess');
    expect(api).toHaveBeenCalledTimes(2);
  });

  it('unsuccessful request', () => {
    api.mockRejectedValue('request failed');

    expect(api()).rejects.toBe('request failed');
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(1);
  });
});