var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inicio', (req, res, next) =>{
  res.render('vista.jade',
  {
    title:'Primera Vista',
    page: 'Página variable'
  });
});
  

module.exports = router;
