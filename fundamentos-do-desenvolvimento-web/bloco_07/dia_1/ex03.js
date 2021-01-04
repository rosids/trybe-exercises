const fatorial = numero => (numero > 1) ? numero * fatorial(numero - 1) : 1;

console.log(fatorial(4))