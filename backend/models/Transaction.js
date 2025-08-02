const db = require('../config/database');

class Transaction {
  static async findAll() {
    const [rows] = await db.execute(`
      SELECT t.*, a.name, a.symbol, p.name as portfolio_name 
      FROM transactions t 
      LEFT JOIN assets a ON t.asset_id = a.id 
      LEFT JOIN portfolios p ON t.portfolio_id = p.id 
      ORDER BY t.transaction_date DESC
    `);
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute(`
      SELECT t.*, a.name, a.symbol, p.name as portfolio_name 
      FROM transactions t 
      LEFT JOIN assets a ON t.asset_id = a.id 
      LEFT JOIN portfolios p ON t.portfolio_id = p.id 
      WHERE t.id = ?
    `, [id]);
    return rows[0];
  }

  static async findByPortfolioId(portfolioId) {
    const [rows] = await db.execute(`
      SELECT t.*, a.name, a.symbol 
      FROM transactions t 
      LEFT JOIN assets a ON t.asset_id = a.id 
      WHERE t.portfolio_id = ? 
      ORDER BY t.transaction_date DESC
    `, [portfolioId]);
    return rows;
  }

  static async create(data) {
    const { portfolio_id, asset_id, transaction_type, quantity, price_per_unit, total_amount, transaction_date, fees } = data;
    const [result] = await db.execute(
      'INSERT INTO transactions (portfolio_id, asset_id, transaction_type, quantity, price_per_unit, total_amount, transaction_date, fees) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [portfolio_id, asset_id, transaction_type, quantity, price_per_unit, total_amount, transaction_date, fees || 0]
    );
    return { id: result.insertId, ...data };
  }

  static async update(id, data) {
    const { portfolio_id, asset_id, transaction_type, quantity, price_per_unit, total_amount, transaction_date, fees } = data;
    await db.execute(
      'UPDATE transactions SET portfolio_id = ?, asset_id = ?, transaction_type = ?, quantity = ?, price_per_unit = ?, total_amount = ?, transaction_date = ?, fees = ? WHERE id = ?',
      [portfolio_id, asset_id, transaction_type, quantity, price_per_unit, total_amount, transaction_date, fees, id]
    );
    return this.findById(id);
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM transactions WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Transaction;