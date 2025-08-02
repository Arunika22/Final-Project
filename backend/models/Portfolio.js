const db = require('../config/database');

class Portfolio {
  static async findAll() {
    const [rows] = await db.execute(`
      SELECT p.*, u.username 
      FROM portfolios p 
      LEFT JOIN users u ON p.user_id = u.id 
      ORDER BY p.created_at DESC
    `);
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute(`
      SELECT p.*, u.username 
      FROM portfolios p 
      LEFT JOIN users u ON p.user_id = u.id 
      WHERE p.id = ?
    `, [id]);
    return rows[0];
  }

  static async findByUserId(userId) {
    const [rows] = await db.execute(
      'SELECT * FROM portfolios WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );
    return rows;
  }

  static async create(data) {
    const { user_id, name, total_value, total_gain_loss, total_gain_loss_percent } = data;
    const [result] = await db.execute(
      'INSERT INTO portfolios (user_id, name, total_value, total_gain_loss, total_gain_loss_percent) VALUES (?, ?, ?, ?, ?)',
      [user_id, name, total_value || 0, total_gain_loss || 0, total_gain_loss_percent || 0]
    );
    return { id: result.insertId, ...data };
  }

  static async update(id, data) {
    const { user_id, name, total_value, total_gain_loss, total_gain_loss_percent } = data;
    await db.execute(
      'UPDATE portfolios SET user_id = ?, name = ?, total_value = ?, total_gain_loss = ?, total_gain_loss_percent = ? WHERE id = ?',
      [user_id, name, total_value, total_gain_loss, total_gain_loss_percent, id]
    );
    return this.findById(id);
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM portfolios WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Portfolio;