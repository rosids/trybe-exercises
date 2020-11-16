const states = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

const stateList = document.querySelector('#state');

function insertStates() {
  for (let state in states) {
    const itemState = document.createElement('option');
    itemState.value = state;
    itemState.innerHTML = states[state];
    stateList.appendChild(itemState);
  }
}

insertStates();

function dateValidation() {
  const inputDate = document.querySelector('#date');
  const date = inputDate.value;
  const arrayDate = date.split('/');
  const day = parseInt(arrayDate[0]);
  const month = parseInt(arrayDate[1]);
  const year = parseInt(arrayDate[2]);

  if (!(day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0)) {
    inputDate.classList.add('error');
    return 'Erro na validação da data \n';
  }
  return '';

}

const inputText = document.querySelectorAll('input[type=text], input[type=email], select, textarea');

function fieldValidation() {
  let erro = dateValidation();
  let erros = '';

  if (erro != '') {
    erros += `${erro} \n`;
  }

  for(let index = 0; index < inputText.length; index += 1) {
    const input = inputText[index];
    if(input.required) {
      if(input.value === '') {
        input.classList.add('error');
        erros += `O campo ${input.name} é obrigatório \n`;
      }
      if (input.minlength && input.minlength.length < input.minlength) {
        input.classList.add('error');
        erros += `O campo ${input.id} deve possuir no mínimo ${input.length} caracteres \n`;
      }
    }
  }

  if(erros != '') {
    alert(erros);
  } else {
    const form = document.querySelector('form')
    form.reset();
    for(let index = 0; index < inputText.length; index += 1) {
      inputText[index].classList.remove('error');
    }
  }
}

const buttonSubmit = document.querySelector('#submit');

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  fieldValidation();
  
});