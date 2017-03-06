var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pulsatio' });
});

/* GET register page */
router.get('/registro', function(req, res, next) {
    res.render('registro', {title: 'Registro'});
});

/* GET access page */
router.get('/acceso', function(req, res, next) {
    res.render('acceso', {title: 'Acceso'});
});

module.exports = router;