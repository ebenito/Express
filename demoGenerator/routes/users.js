var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', function(req, res, next) {
  let email = req.body.email || '';

  if (email != ''){
    res.render('profile', { email: email });
  }else{
    res.send('El login no es correcto; <a href="/login" target="_parent">pruebe de nuevo</a>');
  }
});


module.exports = router;
