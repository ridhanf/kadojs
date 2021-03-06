const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/give', (req, res) => res.render('pages/give'))
  .get('/receive', (req, res) => res.render('pages/receive'))
  .get('/about', (req, res) => res.render('pages/about'))
  .get('/account', (req, res) => res.render('pages/account'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
