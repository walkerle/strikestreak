class GameSessionSerializer < ActiveModel::Serializer
  attributes :id, :stat_id, :date, :number_of_games, :pinfall, :average, :high_score, :low_score, :strikes, :spares, :open_frames, :notes
  has_many :games
end
