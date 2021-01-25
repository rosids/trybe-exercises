import React, { Component } from 'react';
import InputRadio from './InputRadio';

import InputText from './InputText';
import SelectForm from './SelectForm';

const states = ['Selecione seu estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná',  'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'São Paulo', 'Santa Catarina', 'Sergipe', 'Tocantis'];

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })
    console.log(this.state);
  }
  render() {
    const { name, email, cpf, address, city, countryState, addressType } = this.state;

    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <InputText name="name" maxLength="40" value={ name } onChange={this.handleChange}>Nome:</InputText>
          
          <InputText name="email" maxLength="50" value={ email } onChange={ this.handleChange }>Email: </InputText>
        
          <InputText name="cpf" maxLength="11" value={ cpf } onChange= { this.handleChange }>CPF: </InputText>

          <InputText name="address" maxLength="200" value={ address } onChange={ this.handleChange }>Endereço:</InputText>
          
          <InputText name="city" maxLength="28" vaue={ city } onChange={ this.handleChange }>Cidade:</InputText>

          <SelectForm name="countryState" value={ countryState } onChange={ this.handleChange } >
            {states}
          </SelectForm>

          <InputRadio name="addressType" value="apartamento" checked={ addressType === "apartamento"} onChange={ this.handleChange} >
            Apartamento
          </InputRadio>

          <InputRadio name="addressType" value="casa" checked={addressType === "casa"} onChange={ this.handleChange } >
            Casa
          </InputRadio>

          

        </fieldset>
      </form>
    );
  }
}

export default Form;
