const getUserName = require('./users');

describe('test promise - findUserById', () => {
  describe('When the user ID exists', () => {
    it('should return the username', () => {
      expect.assertions(1);
      return expect(getUserName(5)).resolves.toEqual('Paul');
    });
  });

  describe(`When the user ID doesn't exist`, () => {
    it('should return the username', () => {
      expect.assertions(1);
      const id = 6;
      return expect(getUserName(id)).rejects.toEqual({ error: `User with ${id} not found.` });
    });
  });
});