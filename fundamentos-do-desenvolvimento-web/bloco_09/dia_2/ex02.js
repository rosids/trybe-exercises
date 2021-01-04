const randomNumbers = () => Array.from({ length: 10 }, () =>  Math.floor(Math.random() * 50) + 1);
const sumNumbers = array => array.map(number => number * number).reduce((acc, cur) => acc + cur, 0);

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const array = randomNumbers();

    const sum = sumNumbers(array);
    console.log(sum);

    (sum < 8000) ? resolve() : reject();
  });

  myPromise
  .then(() => console.log('Deu bom!'))
  .catch(() => console.log('Deu ruim!'));
};

fetchPromise();