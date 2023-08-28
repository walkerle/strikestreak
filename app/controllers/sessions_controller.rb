class SessionsController < ApplicationController

  skip_before_action :authorized_user, only: [:create]

  # View current user => View current user's stats
  def show
    render json: @user, status: :ok, include: ['stat.game_sessions.games', 'join_friends.friendee']
  end

  # Login => Sets user_id to sessions hash and user to current user
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: {error: "Invalid Username and/or Password!"}, status: :unauthorized
    end
  end

  # Logout => Removes user from sessions hash
  def destroy
    session.delete :user_id
    head :no_content
  end

end
