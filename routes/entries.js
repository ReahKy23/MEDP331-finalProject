const express = require('express');
const router = express.Router();
const { getDb } = require('../config/db');

// GET /entries
router.get('/', async (req, res) => {
  const db = getDb();
  const entries = await db.collection('entries').find({}).toArray();
  res.render('entries', { entries });
});


module.exports = router;
