const number = document.querySelector('.number-click');
const button = document.querySelector('.button');

let clickCount = 0;
const numberOfClicks = () => number.innerHTML = clickCount += 1;

button.addEventListener('click', numberOfClicks);