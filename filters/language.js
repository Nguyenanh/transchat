var https = require('https');
var api_key= "trnsl.1.1.20150820T040838Z.cdae7e8ec407f220.bac22282d71d50f4763ce7dfc8f28e0357536ed3";
var url_vi = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key='+api_key+'&lang=vi-en&text=';
var url_en = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key='+api_key+'&lang=en-vi&text=';
exports.vi = function (message, io) {
  var text = message.message.split(" ").join("+");
  if (message.lang === 'vi'){
    //Trans to en
    api_url_vi = url_vi + text;
    https.get(api_url_vi, function(response){
      response.setEncoding('utf-8');
      var responseString = '';
      response.on('data', function(data) {
        responseString = data;  
      });
      response.on('end', function() {
        var responseObject = JSON.parse(responseString);
        var resutl = {
          message : responseObject,
          lang : 'en',
          from : message.message
        }
        console.log(resutl);
        io.sockets.emit('chat-message-on', resutl);
      });
    }).end();
  }else {
      //Trans to vi
  api_url_en = url_en + text;
  https.get(api_url_en, function(response){
    response.setEncoding('utf-8');
    var responseString = '';
    response.on('data', function(data) {
      responseString = data;  
    });
    response.on('end', function() {
      var responseObject = JSON.parse(responseString);
      var resutl = {
          message : responseObject,
          lang : 'vi',
          from : message.message
        }
      console.log(resutl);
      io.sockets.emit('chat-message-on', resutl);
    });
  }).end();
  }
}