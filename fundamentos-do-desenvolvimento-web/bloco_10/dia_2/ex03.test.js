const getUserName = require('./users');

describe('test async/await - getUserName', () => {
  describe('When the user ID exists', () => {
    it('must return the user name', async () => {
      expect.assertions(1);
      await expect(getUserName(4)).resolves.toEqual('Mark');
    });
  });

  describe(`When the user ID doesn't exist`, () => {
    it('returns an error', async () => {
      expect.assertions(1);
      const id = 3;
      await expect(getUserName(id)).rejects.toEqual({ error: `User with ${id} not found.` })
    });
  });
}); 