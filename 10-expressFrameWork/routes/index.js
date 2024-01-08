var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', show:'Image Dragons' });
});

router.get('/prod', function(req, res, next) {
  res.render('produtos', { coisa: 'Bolsa' });
});
router.get('/fale', function(req, res, next) {
  res.render('contatos', { cont: 'Anitta' });
});

module.exports = router;
