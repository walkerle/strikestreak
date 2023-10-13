class FallbackController < ApplicationController

  skip_before_action :authorized_user, only: :index

  def index
    # redirect_to "/"
    render html: File.read("public/index.html").html_safe, status: :ok
  end
end
