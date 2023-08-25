class Game < ApplicationRecord
  belongs_to :game_session

  validates :f1b1, :f1b2, :f2b1, :f2b2, :f3b1, :f3b2, :f4b1, :f4b2, :f5b1, :f5b2, :f6b1, :f6b2, :f7b1, :f7b2, :f8b1, :f8b2, :f9b1, :f9b2, :f10b1, :f10b2, :f10b3, numericality: 0..10
end
