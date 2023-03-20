class OverallStatSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total_games, :total_pinfall, :average, :high_score, :low_score, :total_strikes, :total_spares, :total_open_frames
  has_many :game_sessions
end
