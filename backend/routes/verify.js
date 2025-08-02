const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/assets', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM assets WHERE current_price > 0 ORDER BY id');
    res.json({
      message: 'Direct SQL query from projectData database',
      count: rows.length,
      data: rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/raw-sql', async (req, res) => {
  try {
    const [assets] = await db.execute('SELECT id, symbol, name, current_price, type FROM assets WHERE current_price > 0');
    const [holdings] = await db.execute('SELECT * FROM user_holdings LIMIT 5');
    
    res.json({
      message: 'Raw SQL data from projectData.sql',
      assets: assets,
      holdings: holdings,
      expectedFromSQL: {
        'btc-asset-id-001': { symbol: 'BTC', name: 'Bitcoin', price: '60000.00' },
        'eth-asset-id-002': { symbol: 'ETH', name: 'Ethereum', price: '4000.00' },
        'aapl-asset-id-004': { symbol: 'AAPL', name: 'Apple Inc', price: '150.00' },
        'tsla-asset-id-003': { symbol: 'TSLA', name: 'Tesla Inc', price: '700.00' },
        'mf-asset-id-005': { symbol: 'VFIAX', name: 'Vanguard 500 Index Fund', price: '350.00' }
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;