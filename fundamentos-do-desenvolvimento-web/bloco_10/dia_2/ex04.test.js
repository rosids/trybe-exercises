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
    const data = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(data).toContain('sd-01-week4-5-project-todo-list');
    expect(data).toContain('sd-01-week4-5-project-meme-generator');
  });
});