let peca = "ABOBORA";

switch (peca.toLowerCase()) {
  case "rei":
    console.log("horizontal, vertical, diagonal e roque");
    break;
  case "rainha":
    console.log("linha reta nas fileiras, colunas e diagonais");
    break;
  case "torre":
    console.log("linha reta nas fileiras e colunas");
    break;
  case "bispo":
    console.log("diagonais");
    break;
  case "cavalo":
    console.log("L");
    break;
  case "peao":
    console.log("coluna");
    break;
    default:
      console.log("Peça inexistente");
}