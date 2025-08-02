const express = require('express');
const router = express.Router();
const portfolioItemController = require('../controllers/portfolioItemController');

router.get('/', portfolioItemController.getAll);
router.get('/type/:type', portfolioItemController.getByType);
router.get('/:id', portfolioItemController.getById);
router.post('/', portfolioItemController.create);
router.put('/:id', portfolioItemController.update);
router.delete('/:id', portfolioItemController.delete);

module.exports = router;