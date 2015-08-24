var socket = io();
$(document).ready(function(){
  var content = $('.content');
  var lang = 'vi';
  $('.lang').change(function() {
    lang = $('.lang-transt').val();
  });
  socket.on('chat-message-on', function(data) {
    console.log(data);
    if(data.message.code == 200 && lang == data.lang) {
      for(var i = 0; i< data.message.text.length; i++) {
        content.append(addMessage(data.message.text[i]));
      }
    }else{
      content.append(addMessage(data.from));
    }
  });
});

function addMessage(text) {
  return '<p>'+ text +'</p>';
}

function transMessage() {
  var content = $('.content');
  var lang = $('.lang-transt').val();
  var message  = $('.text').val();
  var data = {
    lang : lang,
    message : message
  };
  socket.emit('chat-message-emit', data);
  // content.append(addMessage(message));
  $('.text').val("");
  return false;
};

function pressEnter(e) {
  if(e.which){
      var keycode = e.which
    } else {
      var keycode = e.keyCode
    }
  if(keycode == 13)
    transMessage();
};
