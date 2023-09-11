class GamesController < ApplicationController

  before_action :set_game, only: [:show, :update, :destroy]

  def index
    if params[:game_session_id]
      game_session = GameSession.find(params[:game_session_id])
      games = game_session.games
    else
      games = Game.all
    end
    render json: games, status: :ok
  end

  def show
    render json: @game, status: :ok
  end

  def create
    game = Game.create!(game_params)
    # Need to update GameSession and save
    render json: game, status: :created
  end

  def update
    @game.update!(game_params)
    render json: @game, status: :accepted
  end

  def destroy
    @game.destroy
    head :no_content
  end

  private

  def set_game
    @game = Game.find(params[:id])
  end

  def game_params
    params.permit(:game_session_id, :f1b1, :f1b2, :f2b1, :f2b2, :f3b1, :f3b2, :f4b1, :f4b2, :f5b1, :f5b2, :f6b1, :f6b2, :f7b1, :f7b2, :f8b1, :f8b2, :f9b1, :f9b2, :f10b1, :f10b2, :f10b3, :score, :strikes, :spares, :open_frames, :notes)
  end

end
