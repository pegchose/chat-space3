json.array! @group do |group|
  json.name  @group.user.name
  json.id    @group.user.id 
end