const searchEmployee = require('./searchEmployee');

describe('Testa se tudo vai bem na função searchEmployee', () => {
  it('Verifica se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Checa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  it('Checa se searchEmployee(id, "lastName") retorna o último nome do usuário da id consultada', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
  })

  it('Checa se searchEmployee(id, "specialities") retorna as especialidades do usuário da id consultada', () => {
    const expected = ['Frontend', 'Redux', 'React', 'CSS'];
    expect(searchEmployee('5569-4', 'specialities')).toEqual(expected);
  });
});

describe('Testa erros na função searchEmployee', () => {
  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando o ID não existe', () => {
    expect(() => {
      searchEmployee('123456-89', 'firstName');
    }).toThrow();
  });
  
  it('Testa se um erro com a mensagem "Informação indisponível" é retornado quando a informação e ID não existem', () => {
    expect(() => searchEmployee()).toThrow();
  });

  it('Testa mensagem do erro de ID inexistente', () => {
    expect(() => {
      searchEmployee('123456-89', 'lastName');
    }).toThrowError(new Error('ID não identificada'));
  });

  it('Testa mensagem do erro de informação inexistente', () => {
    expect(() => {
      searchEmployee('9852-2-2', 'anything');
    }).toThrowError(new Error('Informação indisponível'));
  });
});
