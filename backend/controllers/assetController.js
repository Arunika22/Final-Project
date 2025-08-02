const Asset = require('../models/Asset');

const assetController = {
  async getAll(req, res, next) {
    try {
      const assets = await Asset.findAll();
      res.json(assets);
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const asset = await Asset.findById(req.params.id);
      if (!asset) {
        return res.status(404).json({ error: 'Asset not found' });
      }
      res.json(asset);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const asset = await Asset.create(req.body);
      res.status(201).json(asset);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const asset = await Asset.update(req.params.id, req.body);
      if (!asset) {
        return res.status(404).json({ error: 'Asset not found' });
      }
      res.json(asset);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const deleted = await Asset.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Asset not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = assetController;