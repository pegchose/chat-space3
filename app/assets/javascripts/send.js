//if( window.FormData ){
//  alert("対応しています");
//} else {
//  alert("対応していません");
//}

$(function(){
  $("#new_message").on('submit',function(e){
    e.preventDefault();
    //var formdata = Components.classes["@mozilla.org/files/formdata;1"].createInstance(Components.interfaces.nsIDOMFormData);
    var formdata = new FormData(this);
    $.ajax({
      url: "/groups/#{group_id}/messages.json",
      type: "POST",
      data: formdata,
      datatype: 'json',
      processData: false,
      contentType: false
    })
  });
})


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