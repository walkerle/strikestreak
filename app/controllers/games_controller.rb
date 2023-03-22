class GamesController < ApplicationController

  before_action :set_game, only: [:update, :destroy]

  def index
    if params[:game_session_id]
      game_session = GameSession.find(params[:game_session_id])
      games = game_session.games
    else
      games = Game.all
    end
    render json: games, status: :ok
  end

  def create
    game = Game.create!(game_params)
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
    params.permit(:game_session_id, :first_frame_1, :first_frame_2, :second_frame_1, :second_frame_2, :third_frame_1, :third_frame_2, :fourth_frame_1, :fourth_frame_2, :fifth_frame_1, :fifth_frame_2, :sixth_frame_1, :sixth_frame_2, :seventh_frame_1, :seventh_frame_2, :eighth_frame_1, :eighth_frame_2, :ninth_frame_1, :ninth_frame_2, :tenth_frame_1, :tenth_frame_2, :tenth_frame_3, :score, :notes)
  end

end
