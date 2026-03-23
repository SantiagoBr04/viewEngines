var express = require('express');
var router = express.Router();

const produtos = [
  {id: 1, nome: 'Barrinha de cereal', preco: 100.00},
  {id: 2, nome: 'Milho', preco: 150.00},
  {id: 3, nome: 'Tortas', preco: 120.00},
  {id: 4, nome: 'Maças', preco: 190.00},
  {id: 5, nome: 'Pimentão', preco: 190.00}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('produtos/index', {produtos});
});

module.exports = router;