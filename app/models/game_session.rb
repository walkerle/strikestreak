class GameSession < ApplicationRecord
  belongs_to :overall_stat
  has_many :games
end
