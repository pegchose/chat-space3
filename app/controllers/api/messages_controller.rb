class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where('id > ?', "%#{params[:messageid]}%") #仮
    respond_to do |format|
      format.json 
      format.html 
    end
  end
end