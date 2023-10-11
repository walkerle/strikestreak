class FallbackController < ApplicationController

  skip_before_action :authorized_user, only: :index

  def index
    redirect_to "/"
    # render file: 'public/index'
    # puts '=============================================================================================='
    # puts "params: #{params}"
    # puts "params[:path]: #{params[:path]}"
    # puts "@req: #{@req}"
    # puts '=============================================================================================='
  end
end
