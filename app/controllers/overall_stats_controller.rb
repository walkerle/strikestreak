class OverallStatsController < ApplicationController

  def index
    render json: OverallStat.all, status: :ok
  end

end
