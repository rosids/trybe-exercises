const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const array = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );

    const sum = array.map(number => number * number).reduce((acc, cur) => acc + cur, 0);
    console.log(sum);

    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromise
  .then(div => console.log([2, 3, 5, 10].map(number => div / number)))
  .catch(() => console.log('Deu ruim!'));
};

fetchPromise();