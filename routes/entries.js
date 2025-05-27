const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', async (req, res) => {
  try {
    const { name, birthYear, deathYear, description } = req.body;

    if (!name || !birthYear || !deathYear || !description) {
      return res.status(400).send('All fields are required');
    }

    const database = db.getDb();
    const collection = database.collection('entries');

    await collection.insertOne({ name, birthYear, deathYear, description });

    res.redirect('/entries');
  } catch (err) {
    console.error('POST /entries error:', err);
    res.status(500).send('Error saving entry');
  }
});

router.get('/', async (req, res) => {
  try {
    const database = db.getDb();
    const collection = database.collection('entries');
    const entries = await collection.find().toArray();

    res.render('entries', { entries });
  } catch (err) {
    console.error('GET /entries error:', err);
    res.status(500).send('Error loading entries');
  }
});

module.exports = router;
