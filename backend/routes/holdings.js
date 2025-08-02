const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT h.*, a.name, a.symbol, a.type, a.current_price, a.logo_url
      FROM user_holdings h
      JOIN assets a ON h.asset_id = a.id
      WHERE h.amount > 0
      ORDER BY h.amount * a.current_price DESC
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;