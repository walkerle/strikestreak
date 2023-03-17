class UsersController < ApplicationController

  skip_before_action :authorized_user, only: [:create]
  before_action :set_user, only: [:show, :destroy]

  # Review actions to keep
  def index
    render json: User.all, status: :ok
    # working code for sessions
    # user = current_user
    # render json: user, status: :ok
  end

  def show
    render json: @user, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def destroy
    @user.destroy
    head :no_content
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def user_params
    params.permit(:username, :password)
  end

end
