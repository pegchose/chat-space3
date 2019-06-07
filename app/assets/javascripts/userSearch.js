$(function(){
  var search_list = $('#user-search-result')
  function appendUser(user){
    
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    search_list.append(html)
  };
  
  //var add_list = $('#user-search-result')
  function addUser(user){
   // console.log(user)
    var userID = user.attr("data-user-id");
    var add_html = `<div class= 'chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                     <input name='group[user_ids][]' type='hidden' value='${userID}'></input>
                     <p class='chat-group-user__name'>${user.attr("data-user-name")}</p>
                     <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                    </div>`
    return add_html;
  };

  $("#user-search-field").on('keyup', function(){
    var input = $('#user-search-field').val()
    console.log("aaa");
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $('#user-search-result').empty();
      if (users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        })
      }else {
        alert('いませんでした')
      }
    })
    .fail(function() {
      alert('非同期通信に失敗しました');
    })
  });
  
  $(document).on('click', '.user-search-add', function(){   //追加ボタンを押した時
    var input1 = $(this);
    console.log("aaaa");
    var add_user_html = addUser(input1);
    $("#search-users").append(add_user_html);
      input1.parent()[0].remove();
  });

  $(document).on('click', '.user-search-remove', function(){ //削除ボタンを押した時、  
    var input2 = $(this);
    input2.parent().remove();       //「チャットメンバーを追加」から追加したものをなくす
  });
});