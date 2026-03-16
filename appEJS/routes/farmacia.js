var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('farmacias', { title: 'Farmacias' });
});

router.get('/drogas', function(req, res, next) {
  res.render('drogas', { title: 'Drogas' });
});

module.exports = router;