class JoinFriendsController < ApplicationController

  before_action :set_join_friend, only: [:show, :destroy]

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      join_friends = user.join_friends
    else
      join_friends = JoinFriend.all
    end
    render json: join_friends, status: :ok
  end

  def show
    render json: @join_friend, status: :ok
  end

  def create
    join_friend = JoinFriend.create!(join_friend_params)
    render json: join_friend, status: :created
  end

  def destroy
    @join_friend.destroy
    head :no_content
  end

  private

  def set_join_friend
    @join_friend = JoinFriend.find(params[:id])
  end

  def join_friend_params
    params.permit(:friender_id, :friendee_id)
  end

end
