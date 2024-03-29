class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  before_action :authorized_user

  # Find user_id in sessions hash and sets user as the current user
  def current_user
    @user = User.find_by(id: session[:user_id])
  end

  private

  # Check for user_id in sessions
  def authorized_user
    render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
  end

  def record_not_found exception
    render json: { error: "#{exception.model} not found" }, status: :not_found
  end

  def record_invalid exception
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
