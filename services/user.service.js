import db from '../config/db.js';

export const createUser = async (data) => {
  const [result] = await db.execute(
    'INSERT INTO users (name, email, phone, country) VALUES (?, ?, ?, ?)',
    [data.name, data.email, data.phone, data.country]
  );
  return { id: result.insertId, ...data };
};

export const getUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  return rows;
};

export const updateUser = async (userId, data) => {
  const [result] = await db.execute(
    'UPDATE users SET name = ?, email = ?, phone = ?, country = ? WHERE id = ?',
    [data.name, data.email, data.phone, data.country, userId]
  );
  return result.affectedRows > 0;
};

export const deleteUser = async (userId) => {
  const [result] = await db.execute('DELETE FROM users WHERE id = ?', [userId]);
  return result.affectedRows > 0;
};
