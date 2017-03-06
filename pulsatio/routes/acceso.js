var express = require('express');
var router = express.Router();

/* GET register page */
router.get('/registro', function(req, res) {
    res.render('acceso/registro', {title: 'Registro'});
})

/* GET access page */
router.get('/acceso', function(req, res) {
    res.render('acceso/acceso', {title: 'Acceso'});
})

module.exports = router;