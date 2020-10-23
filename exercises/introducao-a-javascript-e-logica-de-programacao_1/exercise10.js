let valorCusto = 10;
let valorVenda = 50;
let valorCustoTotal = (valorCusto * 0.2) + valorCusto;
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 ) {
  console.log("Valor de custo inválido!");
} else if (valorVenda < 0) {
  console.log("Valor de venda inválido!");
}

console.log(lucro)
console.log(valorCustoTotal)