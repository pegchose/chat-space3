    
  json.id                @message.id
  json.user_name         @message.user.name
  json.content           @message.content
  json.created_at        @message.created_at.strftime('%Y/%m/%d %R')
  json.image             @message.image.url

# json.content @mesage.content
# json.image   @message.image
# json.name    @message.user.name
# json.id      @message.id
# json.date    @message.created_at.stftime('%Y/%m/%d %R')