import db from '../config/db.js';

export const addPayment = async (userId, data) => {
  const [result] = await db.execute(
    `INSERT INTO payments (user_id, amount, currency, description, card_no, card_expiry, card_cvc) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [userId, data.amount, data.currency, data.description, data.card_no, data.card_expiry, data.card_cvc]
  );
  return { id: result.insertId, user_id: userId, ...data };
};

export const getPayments = async (userId) => {
  const [rows] = await db.execute('SELECT * FROM payments WHERE user_id = ?', [userId]);
  return rows;
};
