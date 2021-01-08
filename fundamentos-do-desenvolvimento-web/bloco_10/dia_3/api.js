const api = async () => {
  return fetch('https://dog.ceo/dog/breeds/image/random')
  .then(response => response.json())
  .then(data => data);
}

module.exports = { api };