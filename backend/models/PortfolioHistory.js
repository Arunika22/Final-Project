const db = require('../config/database');

class PortfolioHistory {
  static async findAll() {
    const [rows] = await db.execute(`
      SELECT ph.*, p.name as portfolio_name 
      FROM portfolio_history ph 
      LEFT JOIN portfolios p ON ph.portfolio_id = p.id 
      ORDER BY ph.recorded_date DESC
    `);
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute(`
      SELECT ph.*, p.name as portfolio_name 
      FROM portfolio_history ph 
      LEFT JOIN portfolios p ON ph.portfolio_id = p.id 
      WHERE ph.id = ?
    `, [id]);
    return rows[0];
  }

  static async findByPortfolioId(portfolioId) {
    const [rows] = await db.execute(
      'SELECT * FROM portfolio_history WHERE portfolio_id = ? ORDER BY recorded_date DESC',
      [portfolioId]
    );
    return rows;
  }

  static async create(data) {
    const { portfolio_id, total_value, total_gain_loss, total_gain_loss_percent, recorded_date } = data;
    const [result] = await db.execute(
      'INSERT INTO portfolio_history (portfolio_id, total_value, total_gain_loss, total_gain_loss_percent, recorded_date) VALUES (?, ?, ?, ?, ?)',
      [portfolio_id, total_value, total_gain_loss, total_gain_loss_percent, recorded_date]
    );
    return { id: result.insertId, ...data };
  }

  static async update(id, data) {
    const { portfolio_id, total_value, total_gain_loss, total_gain_loss_percent, recorded_date } = data;
    await db.execute(
      'UPDATE portfolio_history SET portfolio_id = ?, total_value = ?, total_gain_loss = ?, total_gain_loss_percent = ?, recorded_date = ? WHERE id = ?',
      [portfolio_id, total_value, total_gain_loss, total_gain_loss_percent, recorded_date, id]
    );
    return this.findById(id);
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM portfolio_history WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = PortfolioHistory;