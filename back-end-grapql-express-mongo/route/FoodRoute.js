const express = require('express');

const {
  getFoods,
  getFood,
  createFood,
  updateFood,
  deleteFood
} = require('../controllers/FoodControllers');

const router = express.Router();

router.get('/', getFoods);

router.get('/:foodId', getFood);

router.post('/', createFood);

router.put('/:foodId', updateFood);

router.delete('/:foodId', deleteFood);

module.exports = router;
