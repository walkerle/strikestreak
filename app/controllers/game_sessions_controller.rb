class GameSessionsController < ApplicationController

  def index
    render json: GameSession.all, status: :ok
  end

end
