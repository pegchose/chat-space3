$(function(){
  function buildHTML(message) {
    //console.log(message)
        var imageTag = (typeof message.image !== null )? `<img src="${message.image}" class="lower-message__image">` : ""
        //console.log(imageTag)
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
        return html
      }
      $("#new_message").on('submit',function(e){
        e.preventDefault();
        var formData = new FormData(this);
        console.log(formData);
        var url = $(this).attr('action');
        
        $.ajax({
          url: url,   //"/groups/#{group_id}/messages.json", 
          type: "POST",
          data: formData,
          dataType: 'json',
          processData: false,
          contentType: false
        })
        .done(function(data)  {
          var html = buildHTML(data);
          $('.messages').append(html);
          $('#new_message')[0].reset();
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          console.log("ajax通信に失敗しました");
          console.log("jqXHR          : " + jqXHR.status); // HTTPステータスが取得
          console.log("textStatus     : " + textStatus);    // タイムアウト、パースエラー
          console.log("errorThrown    : " + errorThrown.message); // 例外情報
          console.log("URL            : " + url);
      });
    return false;
  });
});