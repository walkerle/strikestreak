class OverallStat < ApplicationRecord
  belongs_to :user
  has_many :game_sessions
end
