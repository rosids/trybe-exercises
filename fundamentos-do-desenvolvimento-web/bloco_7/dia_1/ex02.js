const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortNumbers = () => {
  const a = [];
  a[0] = oddsAndEvens[5];
  a[1] = oddsAndEvens[1];
  a[2] = oddsAndEvens[2];
  a[3] = oddsAndEvens[4];
  a[4] = oddsAndEvens[3];
  a[5] = oddsAndEvens[0];
  return a;
}

const arraySort = sortNumbers();

// console.log(`Os números ${arraySort} se encontram ordenados de forma crescente!`);

// BÔNUS
const sortBonus = bonusSort(oddsAndEvens)
console.log(`Os números ${oddsAndEvens.sort((a,b) => a - b)} se encontram ordenados de forma crescente!`);