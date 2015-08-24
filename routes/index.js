var express = require('express'),
    router = express.Router();
 
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Translate Chat'});
});

router.post('/translate', function(req, res, next) {

});
//Filter text
module.exports = router;
