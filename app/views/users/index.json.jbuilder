json.array! @users do |user|
  json.name user.name
  json.id user.id 
  require 'pry'; binding.pry
end