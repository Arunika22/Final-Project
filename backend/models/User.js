const db = require('../config/database');

class User {
  static async findAll() {
    const [rows] = await db.execute('SELECT * FROM users ORDER BY created_at DESC');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(data) {
    const { username, email, password_hash, first_name, last_name } = data;
    const [result] = await db.execute(
      'INSERT INTO users (username, email, password_hash, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
      [username, email, password_hash, first_name, last_name]
    );
    return { id: result.insertId, ...data };
  }

  static async update(id, data) {
    const { username, email, password_hash, first_name, last_name } = data;
    await db.execute(
      'UPDATE users SET username = ?, email = ?, password_hash = ?, first_name = ?, last_name = ? WHERE id = ?',
      [username, email, password_hash, first_name, last_name, id]
    );
    return this.findById(id);
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = User;