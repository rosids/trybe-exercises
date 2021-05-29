const connection = require('./connection');

const isValid = ({ firstName, lastName, email, password }) => {
  const errors = [];
  if (!firstName) errors.push('O campo "firstname" é obrigatório.');
  if (!lastName) errors.push('O campo "lastName" é obrigatório.');
  if (!email) errors.push('O campo "email" é obrigatório.');
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.push('O "email" deve estar no formato email@email.com.');
  }
  if (!password) errors.push('O campo "password" é obrigatório.');
  if (password && password.length < 6) errors.push('O "password" deve ter no mínimo 6 caracteres.');
  return { error: errors.length ? errors : null };
};

const serialize = ({ id, first_name: firstName, last_name: lastName, email }) => ({
  id,
  firstName,
  lastName,
  email,
});

const addUser = async ({ firstName, lastName, email, password }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [ firstName, lastName, email, password]
  );

  return serialize({
    id: insertId,
    first_name: firstName,
    last_name: lastName,
    email,
  });
};

const getUsers = async () => {
  const [ users ] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM users'
  );

  return users.map(serialize);
};

const getUserById = async (id) => {
  const [ user ] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM users WHERE id = ?',
    [ id ]
  );

  if(!user.length) return null;

  return user.map(serialize);
};

const editUser = async (id, { firstName, lastName, email, password }) => {
  if (!await getUserById(id)) return null;
  await connection.execute(
    'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [ firstName, lastName, email, password, id ]
  );

  return await getUserById(id);
};

module.exports = {
  addUser,
  isValid,
  getUsers,
  getUserById,
  editUser,
}
