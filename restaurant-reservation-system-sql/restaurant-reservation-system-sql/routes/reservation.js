const express = require('express');
const router = express.Router();
const db = require('../db/mysql');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/reserve', (req, res) => {
  const { name, email, phone, guests, reservation_time } = req.body;
  const sql = 'INSERT INTO reservations (name, email, phone, guests, reservation_time) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, email, phone, guests, reservation_time], (err) => {
    if (err) throw err;
    res.redirect('/reservations');
  });
});

router.get('/reservations', (req, res) => {
  db.query('SELECT * FROM reservations', (err, results) => {
    if (err) throw err;
    res.render('reservations', { reservations: results });
  });
});

module.exports = router;
