// Dados
const professionalBoard = require('./searchEmployeeData');

const checkId = id => professionalBoard.find(identifier => identifier.id === id);

// Pesquisa
const searchEmployee = (id, detail) => {
  const employee = checkId(id);

  if (!employee) {
    throw new Error("ID não identificada");
  };
  
  if (!employee[detail]) {
    throw new Error("Informação indisponível");
  };

  return employee[detail];
};

module.exports = searchEmployee;