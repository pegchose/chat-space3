class Api::MessagesController < ApplicationController
  def index
    @group = Group.find(params[:kgroup_id])   # kgroup_id で group_id取得
    @new_message = @group.messages.includes(:user)
    #binding.pry
    respond_to do |format|
      format.json {@messages = @new_message.where('id > ?', "%#{params[:messageid]}%")}
      format.html 
    end
  end
end