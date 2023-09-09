class GameSessionsController < ApplicationController

  before_action :set_game_session, only: [:show, :update, :destroy]

  def index
    if params[:stat_id]
      stats = Stat.find(params[:stat_id])
      game_sessions = stats.game_sessions
    else
      game_sessions = GameSession.all
    end
    render json: game_sessions, status: :ok
  end

  def show
    render json: @game_session, status: :ok
  end

  def create
    game_session = GameSession.create!(game_session_params)
    # Need to update Stat and save
    render json: game_session, status: :created
  end

  def update
    @game_session.update!(game_session_params)
    render json: @game_session, status: :accepted
  end

  def destroy
    @game_session.destroy
    head :no_content
  end

  private

  def set_game_session
    @game_session = GameSession.find(params[:id])
  end

  def game_session_params
    params.permit(:stat_id, :date, :number_of_games, :pinfall, :average, :high_score, :low_score, :strikes, :spares, :open_frames, :notes)
  end

end
