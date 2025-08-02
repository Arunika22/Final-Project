const db = require('../config/database');

class Asset {
  static async findAll() {
    const [rows] = await db.execute('SELECT * FROM assets ORDER BY id');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute('SELECT * FROM assets WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(data) {
    const { name, symbol, type, current_price, daily_change_percent } = data;
    const [result] = await db.execute(
      'INSERT INTO assets (name, symbol, type, current_price, daily_change_percent) VALUES (?, ?, ?, ?, ?)',
      [name, symbol, type, current_price, daily_change_percent || 0]
    );
    return { id: result.insertId, ...data };
  }

  static async update(id, data) {
    const { name, symbol, type, current_price, daily_change_percent } = data;
    await db.execute(
      'UPDATE assets SET name = ?, symbol = ?, type = ?, current_price = ?, daily_change_percent = ? WHERE id = ?',
      [name, symbol, type, current_price, daily_change_percent, id]
    );
    return this.findById(id);
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM assets WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Asset;