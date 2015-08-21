var express = require('express');
var router = express.Router();
var https = require('https');
var api_key= "trnsl.1.1.20150820T040838Z.cdae7e8ec407f220.bac22282d71d50f4763ce7dfc8f28e0357536ed3";
var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key='+api_key+'&lang=vi-en&text=';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Translate Chat'});
});
router.post('/translate', function(req, res, next) {
  text = req.body.message.split(" ").join("+");
  console.log(text);
  api_url = url + text;
  https.get(api_url, function(response){
    response.setEncoding('utf-8');
    var responseString = '';
    response.on('data', function(data) {
      responseString = data;  
    });
    response.on('end', function() {
      var responseObject = JSON.parse(responseString);
      console.log(responseObject);
      res.send(responseObject);
      return false
    });
  }).end();
});

module.exports = router;
