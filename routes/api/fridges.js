const express = require('express');
const router = express.Router();

// Fridge model
const Fridge = require('../../models/Fridge.js');

// @route GET api/fridges
router.get('/', (req, res) => {
  Fridge.find()
    .sort({ date: -1 })
    .then(fridges => res.json(fridges))
});

// @route GET api/fridges/:id
router.get('/:id',  (req, res) => {
  Fridge.findById(req.params.id)
    .then( fridge => res.json(fridge))
    .catch( error => res.status(404).json({success: false}));
});

// @route POST api/fridges
router.post('/', (req, res) => {
  const newFridge = new Fridge({

  });
  newFridge.save().then(fridge => res.json(fridge));
});

// @route DELETE api/fridges/:id
router.delete('/:id', (req, res) => {
  Fridge.findById(req.params.id)
    .then( fridge => fridge.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;