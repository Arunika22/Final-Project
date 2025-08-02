const db = require('../config/database');

class PortfolioItem {
  static async findAll() {
    const [rows] = await db.execute(`
      SELECT pi.*, a.name, a.symbol, a.current_price, a.type 
      FROM portfolio_items pi 
      JOIN assets a ON pi.asset_id = a.id 
      ORDER BY pi.created_at DESC
    `);
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute(`
      SELECT pi.*, a.name, a.symbol, a.current_price, a.type 
      FROM portfolio_items pi 
      JOIN assets a ON pi.asset_id = a.id 
      WHERE pi.id = ?
    `, [id]);
    return rows[0];
  }

  static async findByType(columnType) {
    const [rows] = await db.execute(`
      SELECT pi.*, a.name, a.symbol, a.current_price, a.type 
      FROM portfolio_items pi 
      JOIN assets a ON pi.asset_id = a.id 
      WHERE pi.column_type = ?
      ORDER BY pi.created_at DESC
    `, [columnType]);
    return rows;
  }

  static async create(data) {
    const { asset_id, amount, avg_purchase_price, column_type } = data;
    const [result] = await db.execute(
      'INSERT INTO portfolio_items (asset_id, amount, avg_purchase_price, column_type) VALUES (?, ?, ?, ?)',
      [asset_id, amount || 0, avg_purchase_price || 0, column_type]
    );
    return { id: result.insertId, ...data };
  }

  static async update(id, data) {
    const { asset_id, amount, avg_purchase_price, column_type } = data;
    await db.execute(
      'UPDATE portfolio_items SET asset_id = ?, amount = ?, avg_purchase_price = ?, column_type = ? WHERE id = ?',
      [asset_id, amount, avg_purchase_price, column_type, id]
    );
    return this.findById(id);
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM portfolio_items WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = PortfolioItem;