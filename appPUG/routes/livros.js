var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('livros', { title: 'Livros' });
});

router.get('/Hobbit', function(req, res, next) {
  res.render('hobbit', { title: 'Hobbit' });
});

module.exports = router;
