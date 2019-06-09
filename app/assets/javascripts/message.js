$(function()  {
  
  function addNewMessagesHTML(message){
    console.log(message);
    var imageTag = (typeof message.image !== null )? `<img src="${message.image}" class="lower-message__image" >` : ""
    var html = `<div class="message" data-messageid="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    ${imageTag}
                  </div>          
                </div>`
    return html;
  };
  var reloadMessages = function() {
    var last_message_id = $('.message').last().attr('data-messageid');

    $.ajax({
      url: '/api/messages.json',     //'/groups/#{group_id}/api/messages.json', //location.href,
      type: 'GET',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages)  {
      messages.forEach(function(message){
        if (message.id > last_message_id){
          var html = addNewMessagesHTML(message);
          $('.messages').append(html);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        };
      });
    })
    .fail(function()  {
      console.log('error');
    });
  };
  if (window.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessages, 5000);
  };
});