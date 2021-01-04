let angulo1 = 45
let angulo2 = 45
let angulo3 = 90

let soma = angulo1 + angulo2 + angulo3

if (typeof soma != "number") {
  console.log("Valor inválido")
}
else if (soma == 180) {
  console.log(true)
} else {
  console.log("false")
}