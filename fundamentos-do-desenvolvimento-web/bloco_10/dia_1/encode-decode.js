const encode = (string) => {
  return string.split('a')
    .join(1)
    .split('e')
    .join(2)
    .split('i')
    .join(3)
    .split('o')
    .join(4)
    .split('u')
    .join(5);
};

const decode = (string) => {
  return string.split(1)
    .join('a')
    .split(2)
    .join('e')
    .split(3)
    .join('i')
    .split(4)
    .join('o')
    .split(5)
    .join('u');
};

const functions = { encode, decode }

module.exports = functions;