const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then((data) => {
    return data.map((repo) => repo.name)
  });
}

describe('Request user repository in the GitHub API', () => {
  it('Checks if user has the repository', async () => {
    const data = await getRepos('https://api.github.com/users/tryber/repos');
    expect(data).toContain('exercise-sequelize-associations');
    expect(data).toContain('Curso-Trybe');
  });
});