const AssetHistory = require('../models/AssetHistory');

const assetHistoryController = {
  async getAll(req, res, next) {
    try {
      const history = await AssetHistory.findAll();
      res.json(history);
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const history = await AssetHistory.findById(req.params.id);
      if (!history) {
        return res.status(404).json({ error: 'Asset history not found' });
      }
      res.json(history);
    } catch (error) {
      next(error);
    }
  },

  async getByAssetId(req, res, next) {
    try {
      const history = await AssetHistory.findByAssetId(req.params.assetId);
      res.json(history);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const history = await AssetHistory.create(req.body);
      res.status(201).json(history);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const history = await AssetHistory.update(req.params.id, req.body);
      if (!history) {
        return res.status(404).json({ error: 'Asset history not found' });
      }
      res.json(history);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const deleted = await AssetHistory.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Asset history not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = assetHistoryController;