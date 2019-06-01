//if( window.FormData ){
//  alert("対応しています");
//} else {
//  alert("対応していません");
//}

$(function(){
  function buildHTML(message) {
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
                      </div>          
                    </div>`
        return html;
      }
  $("#new_message").on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $('this').attr('action'); //<- これでも良い
    $('.message').animate()
    $.ajax({
      url: url,   //"/groups/#{group_id}/messages", //ここに上の変数urlでも良い
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
  });
});

//var formdata = Components.classes["@mozilla.org/files/formdata;1"].createInstance(Components.interfaces.nsIDOMFormData); <- formdataの定義
//$(function() {
//  function buildHTML() {
//    var html = $('<div class="message">').append(message.content);
//    return html;
//  }
//
//  $('#new_message').on('submit', function(e) {
//    e.preventDefault();
//    var formData = new FormData(this);
//    var url = $('this').attr('action')
//    var message = textField.val();
//    $.ajax({
//      type: 'POST',
//      url: '/messages.json',
//      data: formData,
//      dataType: 'json'
//    })
//    .done(function(data) {
//      var html = buildHTML(data);
//      $('.messages').append(html);
//      textField.val('') <- なにこれ
//    })
//    .fail(function() {
//      alert('error');
//    });
//  });
//});

    //message = $('.form__submit').val();
    // var formdata = new Formdata(this);
    //var url = $('this').attr('action')
    //var message = formData.val();
    //$.ajax({
    //  type: 'POST',
    //  url: "/groups/#{group_id}/messages.json",
    //  data: formData,
    //  dataType: 'json'
    //})