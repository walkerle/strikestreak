class StatsController < ApplicationController

  before_action :set_stat, only: :show

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      stats = user.stat
    else
      stats = Stat.all
    end
    render json: stats, status: :ok, include: ['stats']
  end

  def show
    render json: @stat, status: :ok, include: ['game_sessions.games']
  end

  private

  def set_stat
    @stat = Stat.find(params[:id])
  end

end
