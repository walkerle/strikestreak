class UsersController < ApplicationController

  skip_before_action :authorized_user, only: :create
  before_action :set_user, only: :show

  def index
    render json: User.all, status: :ok
  end

  def show
    render json: @user, status: :ok # show the specified user, before_action :set_user overrides @user (current__user) in app_controller
  end

  def me
    render json: current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:username, :email, :password)
  end

end
