let n = 5;
let ast = "*";
let espaço = "";

for (let coluna = 0; coluna < n; coluna += 1) {
  espaço += ast;
}

for(let linha = 0; linha < n; linha++){
  console.log(espaço);
}
