$(function(){
  function buildHTML(message) {
        var html = `<div class="message">
                      <div class="upper-message">
                        <div class="upper-message__user-name">
                          ${message.user}
                        </div>
                        <div class="upper-message__date">
                          ${message.created_at}
                        </div>
                      </div>
                      <div class="lower-message">
                        <p class="lower-message__content">
                          ${message.content}
                        </p>
                        <img class="lower-message__image" src="${message.image.url}" if ${message.immage}.present?>
                      </div>          
                    </div>`
        return html
      }
  $("#new_message").on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $('this').attr('action');
    var form = $('form').offset().top;
    $('html, body').animate({scrollTop:form});
    $.ajax({
      url: url,   //"/groups/#{group_id}/messages", 
      type: "POST",
      data: formData,
      datatype: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data)  {
      var html = buildHTML(data);
      $('.messages').append(html);
      
    })
    .fail(function() {
      alert('error');
    });
    return false;
  });
});