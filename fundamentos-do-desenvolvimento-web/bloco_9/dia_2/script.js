const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = data.joke;
  });
};

window.onload = () => fetchJoke();