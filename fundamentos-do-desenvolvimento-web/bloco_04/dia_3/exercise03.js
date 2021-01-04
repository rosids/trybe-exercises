let n = 5;
let ast = "*";
let esp = " ";


for(let index = 1; index <= n; index += 1){
  let inverso = "";
  for (let espaco = n; espaco > index; espaco-= 1) {
    inverso+= esp;
  }

  for (let asterisco = 0; asterisco < index; asterisco += 1) {
    inverso += ast
  }
  console.log(inverso);
}
