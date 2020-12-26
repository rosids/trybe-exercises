let palavra = "arara";

function verificaPalindrome(palavra) {
  let palindromo = '';
  for(let index = palavra.length - 1; index >= 0; index -= 1) {
    palindromo += palavra[index];
  };

  if (palavra == palindromo) {
    return true;
  } else return false;
};

console.log(verificaPalindrome(palavra));