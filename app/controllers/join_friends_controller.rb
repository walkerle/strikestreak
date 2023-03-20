class JoinFriendsController < ApplicationController

  def index
    render json: JoinFriend.all, status: :ok
  end

end
