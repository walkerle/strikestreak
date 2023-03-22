class OverallStatsController < ApplicationController

  before_action :set_overall_stat, only: :show

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      overall_stats = user.overall_stat
    else
      overall_stats = OverallStat.all
    end
    render json: overall_stats, status: :ok
  end

  def show
    render json: @overall_stat, status: :ok
  end

  private

  def set_overall_stat
    @overall_stat = OverallStat.find(params[:id])
  end

end
