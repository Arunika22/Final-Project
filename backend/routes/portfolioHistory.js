const express = require('express');
const router = express.Router();
const portfolioHistoryController = require('../controllers/portfolioHistoryController');

router.get('/', portfolioHistoryController.getAll);
router.get('/portfolio/:portfolioId', portfolioHistoryController.getByPortfolioId);
router.get('/:id', portfolioHistoryController.getById);
router.post('/', portfolioHistoryController.create);
router.put('/:id', portfolioHistoryController.update);
router.delete('/:id', portfolioHistoryController.delete);

module.exports = router;