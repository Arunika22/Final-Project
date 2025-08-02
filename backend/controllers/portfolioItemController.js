const PortfolioItem = require('../models/PortfolioItem');

const portfolioItemController = {
  async getAll(req, res, next) {
    try {
      const items = await PortfolioItem.findAll();
      res.json(items);
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const item = await PortfolioItem.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Portfolio item not found' });
      }
      res.json(item);
    } catch (error) {
      next(error);
    }
  },

  async getByType(req, res, next) {
    try {
      const items = await PortfolioItem.findByType(req.params.type);
      res.json(items);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const item = await PortfolioItem.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const item = await PortfolioItem.update(req.params.id, req.body);
      if (!item) {
        return res.status(404).json({ error: 'Portfolio item not found' });
      }
      res.json(item);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const deleted = await PortfolioItem.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Portfolio item not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = portfolioItemController;