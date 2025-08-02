const PortfolioHistory = require('../models/PortfolioHistory');

const portfolioHistoryController = {
  async getAll(req, res, next) {
    try {
      const history = await PortfolioHistory.findAll();
      res.json(history);
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const history = await PortfolioHistory.findById(req.params.id);
      if (!history) {
        return res.status(404).json({ error: 'Portfolio history not found' });
      }
      res.json(history);
    } catch (error) {
      next(error);
    }
  },

  async getByPortfolioId(req, res, next) {
    try {
      const history = await PortfolioHistory.findByPortfolioId(req.params.portfolioId);
      res.json(history);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const history = await PortfolioHistory.create(req.body);
      res.status(201).json(history);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const history = await PortfolioHistory.update(req.params.id, req.body);
      if (!history) {
        return res.status(404).json({ error: 'Portfolio history not found' });
      }
      res.json(history);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const deleted = await PortfolioHistory.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Portfolio history not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = portfolioHistoryController;