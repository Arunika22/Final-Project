const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const errorHandler = require('./middleware/errorHandler');

// Import routes
const assetRoutes = require('./routes/assets');
const assetHistoryRoutes = require('./routes/assetHistory');
const portfolioItemRoutes = require('./routes/portfolioItems');
const portfolioRoutes = require('./routes/portfolios');
const portfolioHistoryRoutes = require('./routes/portfolioHistory');
const transactionRoutes = require('./routes/transactions');
const userRoutes = require('./routes/users');
const holdingsRoutes = require('./routes/holdings');
const verifyRoutes = require('./routes/verify');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));
app.use(express.json());
app.use(morgan('combined'));

// Routes
app.use('/api/assets', assetRoutes);
app.use('/api/asset-history', assetHistoryRoutes);
app.use('/api/portfolio-items', portfolioItemRoutes);
app.use('/api/portfolios', portfolioRoutes);
app.use('/api/portfolio-history', portfolioHistoryRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/holdings', holdingsRoutes);
app.use('/api/verify', verifyRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio Finance API is running' });
});

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;