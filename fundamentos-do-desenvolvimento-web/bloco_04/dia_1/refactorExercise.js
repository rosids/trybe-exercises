let a = 10;
let b = 5;
let c = 15;

function sum (a, b) {
  return a + b;
}

function subtraction (a, b) {
  return a - b;
}

function multiplication(a, b) { 
  return a * b;
}

function division (a, b) { 
  return a / b;
}

function module (a, b) {
  return a % b;
}

console.log(`A soma dos números é ${sum(a,b)}`);
console.log(`A subtração dos números é ${subtraction(a, b)}`);
console.log(`A multiplicação dos números é ${multiplication(a, b)}`);
console.log(`A divis dos números é ${division(a, b)}`);
console.log(`O resto dos números é ${module(a, b)}`);

function bigger (a, b) {
  if(a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(`O maior número é ${bigger(a, b)}`);

function greatherOf3(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(`O maior dos números 3 números é ${greatherOf3(a, b, c)}`);

function positiveNegativeOrZero(value) {
  if (value > 0) {
    return "positive"
  } else if (valor < 0) {
    return "negative"
  } else {
    return "zero"
  }
}

console.log(`O número é ${positiveNegativeOrZero(a)}`);

let angles = {
  angle1: 45,
  angle2: 45,
  angle3: 90
}

function triangle(angles) {
  let sum = angles.angle1 + angles.angle2 + angles.angle3;

  if (typeof angles.angle1 != "number" || typeof angles.angle2 != "number" || typeof angles.angle3 != "number") {
    return "Valor inválido";
  } else if (sum == 180) {
    return true;
  } else {
    return false;
  }
}

console.log(triangle(angles));

let piece = "REI";

function chessMovements(piece) {
  switch (piece.toLowerCase()) {
    case "rei":
      return "horizontal, vertical, diagonal e roque";
    case "rainha":
      return "linha reta nas fileiras, colunas e diagonais";
    case "torre":
      return "linha reta nas fileiras e colunas";
    case "bispo":
      return "diagonais";
    case "cavalo":
      return "L";
    case "peao":
      return "coluna";
    default:
      return "Peça inexistente";
  }
}

console.log(chessMovements(piece));

let percentage = 95;

function noteConversion(percentage){
  if (percentage >= 90 && percentage <= 100) {
  return "Sua nota é A";
  } else if (percentage >= 80 && percentage < 90) {
    return "Sua nota é B";
  } else if (percentage >= 70 && percentage < 80) {
    return "Sua nota é C";
  } else if (percentage >= 60 && percentage < 70) {
    return "Sua nota é D";
  } else if (percentage >= 50 && percentage < 60) {
    return "Sua nota é E";
  } else if (percentage < 50 && percentage >=0) {
    return "Sua nota é F";
  } else if (percentage < 0 || percentage > 100) {
    return "A nota possui algum erro";
  }
}

console.log(noteConversion(percentage));

function pair (a, b, c) {
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(pair(a, b, c));

function odd (a, b, c) {
  if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
    return true;
  } else return false;
}

console.log(odd(a, b, c));

let costValue = 10;
let saleValue = 50;
let costTax = 0.2;

function totalCostValue(costValue) { 
  return (costValue * costTax) + costValue;
}

function profit (saleValue) {
  let totalCost = totalCostValue(costValue);
  
  return (saleValue - totalCost) * 1000;
}

console.log(`Seu lucro é R$${profit(saleValue)}`);

let grossSalary = 3000;

function inss (grossSalary) {
  let inss;
  if (grossSalary <= 1556.94 ) {
    return inss = (grossSalary * 0.08);
   } else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
     return inss = grossSalary * 0.09;
   } else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
     return inss = grossSalary * 0.11;
   } else if (grossSalary > 5189.82) {
     return inss = 570.88;
   }
}

function baseSalary (grossSalary) {
  return grossSalary - inss(grossSalary);
}

function incomeTax () {
  let salary = baseSalary(grossSalary)
  if (salary <= 1903.98) {
    return 0;
  } else if (salary >= 1903.99 && salary <= 2826.65) {
    return ((salary*0.075) - 142.80).toFixed(2);
  } else if (salary >= 2826.66 && salary <= 3751.05) {
    return ((salary * 0.15) - 354.80).toFixed(2);
  } else if ( salary >= 3751.06 && salary <= 4664.68) {
    return ((salary * 0.225) - 636.13).toFixed(2);
  } else {
    return ((salary * 0.275) - 869.36).toFixed(2);
  }
}

function netSalary() {
  return baseSalary (grossSalary) - incomeTax();
}

console.log(`Seu salário líquido é R$${netSalary()}`);