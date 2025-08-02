const Transaction = require('../models/Transaction');

const transactionController = {
  async getAll(req, res, next) {
    try {
      const transactions = await Transaction.findAll();
      res.json(transactions);
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const transaction = await Transaction.findById(req.params.id);
      if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
      }
      res.json(transaction);
    } catch (error) {
      next(error);
    }
  },

  async getByPortfolioId(req, res, next) {
    try {
      const transactions = await Transaction.findByPortfolioId(req.params.portfolioId);
      res.json(transactions);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const transaction = await Transaction.create(req.body);
      res.status(201).json(transaction);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const transaction = await Transaction.update(req.params.id, req.body);
      if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
      }
      res.json(transaction);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const deleted = await Transaction.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Transaction not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = transactionController;