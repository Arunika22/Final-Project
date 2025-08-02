const Portfolio = require('../models/Portfolio');

const portfolioController = {
  async getAll(req, res, next) {
    try {
      const portfolios = await Portfolio.findAll();
      res.json(portfolios);
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const portfolio = await Portfolio.findById(req.params.id);
      if (!portfolio) {
        return res.status(404).json({ error: 'Portfolio not found' });
      }
      res.json(portfolio);
    } catch (error) {
      next(error);
    }
  },

  async getByUserId(req, res, next) {
    try {
      const portfolios = await Portfolio.findByUserId(req.params.userId);
      res.json(portfolios);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const portfolio = await Portfolio.create(req.body);
      res.status(201).json(portfolio);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const portfolio = await Portfolio.update(req.params.id, req.body);
      if (!portfolio) {
        return res.status(404).json({ error: 'Portfolio not found' });
      }
      res.json(portfolio);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const deleted = await Portfolio.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Portfolio not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = portfolioController;