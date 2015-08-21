function transMessage() {
  var message  = $('.text').val();
  var content = $('.content');
  $.ajax({
    type : "POST",
    url : "/translate",
    data : { message: message },
    success: function(data) {
      if(data.code == 200) {
        var tag_meg = '';
        for(var i = 0; i< data.text.length; i++) {
          tag_meg = '<p>'+ data.text[i]+'</p>';
        }
        content.append(tag_meg);
      }
    },
    complete: function() {
      $('.text').val("");
    }
  });
  return false;
}
function pressEnter(e) {
  if(e.which){
      var keycode = e.which
    } else {
      var keycode = e.keyCode
    }
  if(keycode == 13)
    transMessage();
}