const express = require('express');
const router = express.Router();

// Meal model
const Meal = require('../../models/Meal.js');

// @route GET api/meals
router.get('/', (req, res) => {
  Meal.find()
    .sort({ date: -1 })
    .then(meals => res.json(meals))
});

// @route GET api/meals/:id
router.get('/:id',  (req, res) => {
  Meal.findById(req.params.id)
    .then( meal => res.json(meal))
    .catch( error => res.status(404).json({success: false}));
});

// @route POST api/meals
router.post('/', (req, res) => {
  const newMeal = new Meal({

  });
  newMeal.save().then(meal => res.json(meal));
});

// @route DELETE api/meals/:id
router.delete('/:id', (req, res) => {
  Meal.findById(req.params.id)
    .then( meal => meal.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;