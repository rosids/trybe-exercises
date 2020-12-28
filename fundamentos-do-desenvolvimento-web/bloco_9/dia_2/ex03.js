const randomNumbers = () => Array.from({ length: 10 }, () =>  Math.floor(Math.random() * 50) + 1);
const sumNumbers = array => array.map(number => number * number).reduce((acc, cur) => acc + cur, 0);

const createArrayWithDivisionNumbers = (div, array) => array.map(number => div / number);

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const array = randomNumbers();

    const sum = sumNumbers(array);
    console.log(sum);

    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromise
  .then(div => console.log(createArrayWithDivisionNumbers(div, [2, 3, 5, 10])))
  .catch(() => console.log('Deu ruim!'));
};

fetchPromise();