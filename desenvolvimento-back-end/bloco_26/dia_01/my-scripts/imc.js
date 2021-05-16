function calculaImc() {
  const peso = 70;
  const altura = 1.69;

  const imc = (peso / altura ** 2).toFixed(2);
  
  console.log(`Seu IMC é ${imc}`);
}

calculaImc();
