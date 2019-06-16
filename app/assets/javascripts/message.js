$(function()  {
  
  function addNewMessagesHTML(message){
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
    var group_id = window.location.href         //"/groups/#{group_id}/api/messages.json"  現在url取得
    
      //replace関数による文字列の削除
      var divText = group_id
      var divText = divText.replace("http://localhost:3000/groups/", "");
      var divtext = divText.replace("/messages", "");
      group_id = divtext           //これでも良い。下記と同じこと

    //group_id1 = group_id.match(/\d+/);        //urlの中からgroup_idを取得
    
    $.ajax({
      url: '/api/messages.json',           //"/api/messages.json",   //location.href, 
      type: 'GET',
      dataType: 'json',
      data: {id: last_message_id,
            kgroup_id: group_id}    //group_idを渡す
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
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("ajax通信に失敗しました");
      console.log("jqXHR          : " + jqXHR.status); // HTTPステータスが取得
      console.log("textStatus     : " + textStatus);    // タイムアウト、パースエラー
      console.log("errorThrown    : " + errorThrown.message); // 例外情報
      console.log("URL            : " + url);
    });
  };
  if (window.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessages, 5000);
  };
});