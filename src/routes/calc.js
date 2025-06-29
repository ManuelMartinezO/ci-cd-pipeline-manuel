const express = require('express');
const router = express.Router();

const { suma, resta, mult, div } = require('../utils/calc');

router.get('/suma', (req, res) => {
  const { a, b } = req.query;
  res.json({ resultado: suma(Number(a), Number(b)) });
});

router.get('/resta', (req, res) => {
  const { a, b } = req.query;
  res.json({ resultado: resta(Number(a), Number(b)) });
});

router.get('/mult', (req, res) => {
  const { a, b } = req.query;
  res.json({ resultado: mult(Number(a), Number(b)) });
});

router.get('/div', (req, res) => {
  const { a, b } = req.query;
  try {
    res.json({ resultado: div(Number(a), Number(b)) });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
