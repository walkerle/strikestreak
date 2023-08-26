class UsersController < ApplicationController

  # skip_before_action :authorized_user, only: :create
  before_action :set_user, only: :show

  # View all users => 'Find a Friend' feature
  def index
    render json: User.all, status: :ok
  end

  # View specific user => View friend's stats => before_action #set_user (@user) in users_controller overrides #current__user (@user) in app_controller
  def show
    render json: @user, status: :ok, include: ['stat.game_sessions.games', 'join_friends.friendee']
  end

  # User signup
  def create
    user = User.create!(user_params)
    user.create_overall_stat()
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # ***FUTURE*** Update user
  def update

  end

  # ***FUTURE*** Delete user
  def destroy

  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:username, :email, :password)
  end

end
