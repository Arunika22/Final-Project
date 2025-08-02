const db = require('../config/database');

class AssetHistory {
  static async findAll() {
    const [rows] = await db.execute(`
      SELECT ah.*, a.name, a.symbol 
      FROM asset_history ah 
      JOIN assets a ON ah.asset_id = a.id 
      ORDER BY ah.recorded_date DESC
    `);
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute(`
      SELECT ah.*, a.name, a.symbol 
      FROM asset_history ah 
      JOIN assets a ON ah.asset_id = a.id 
      WHERE ah.id = ?
    `, [id]);
    return rows[0];
  }

  static async findByAssetId(assetId) {
    const [rows] = await db.execute(
      'SELECT * FROM asset_history WHERE asset_id = ? ORDER BY recorded_date DESC',
      [assetId]
    );
    return rows;
  }

  static async create(data) {
    const { asset_id, price, recorded_date } = data;
    const [result] = await db.execute(
      'INSERT INTO asset_history (asset_id, price, recorded_date) VALUES (?, ?, ?)',
      [asset_id, price, recorded_date]
    );
    return { id: result.insertId, ...data };
  }

  static async update(id, data) {
    const { asset_id, price, recorded_date } = data;
    await db.execute(
      'UPDATE asset_history SET asset_id = ?, price = ?, recorded_date = ? WHERE id = ?',
      [asset_id, price, recorded_date, id]
    );
    return this.findById(id);
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM asset_history WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = AssetHistory;