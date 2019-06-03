$(function(){
  $("user-search-field").on('keyup', function(e){
    var LL = $('user-search-field').val()
    console.log(LL)
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function() {

    })
    .fail(function() {
      alert('該当ユーザーはいません');
    })
  });
});