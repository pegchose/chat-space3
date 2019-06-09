    
  json.id                @message.id
  json.user_name         @message.user.name
  json.content           @message.content
  json.created_at        @message.created_at.strftime('%Y/%m/%d %R')
  json.image             @message.image.url

#json.(@message, :content, :image)
#json.created_at   @message.created_at
#json.user_name    @message.user.name
#json.image        @message.image.url
#json.id           @message.id