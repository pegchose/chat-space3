$(function(){
  function buildHTML(message) {
        var imageTag = (typeof message.image !== null )? '<img src="${message.image.url}" class="lower-message__image" >' : ""
        var html = `<div class="message">
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
        console.log(formData)
        var url = $(this).attr('action');
        //var form = $('.message').offset().top;
        
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
          $('#new_message').val('')
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