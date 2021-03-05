var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Fecha actual: ', Date.now());
    next();
});

//Definimos la ruta de la pagina de Home
router.get('/post', function (req, res) {
    res.send('Pagina inicial de los post.');
});
//Definimos la ruta de la pagina about
router.get('/post/about', function (req, res) {
    res.send('Página de about de los post.');
});

module.exports = router;