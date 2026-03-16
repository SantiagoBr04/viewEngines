var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computadores', { title: 'Computadores' });
});

router.get('/intel', function(req, res, next) {
  res.render('intel', { title: 'Intel' });
});

module.exports = router;
