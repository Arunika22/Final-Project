const express = require('express');
const router = express.Router();
const assetHistoryController = require('../controllers/assetHistoryController');

router.get('/', assetHistoryController.getAll);
router.get('/asset/:assetId', assetHistoryController.getByAssetId);
router.get('/:id', assetHistoryController.getById);
router.post('/', assetHistoryController.create);
router.put('/:id', assetHistoryController.update);
router.delete('/:id', assetHistoryController.delete);

module.exports = router;