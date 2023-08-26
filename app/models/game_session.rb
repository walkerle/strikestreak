class GameSession < ApplicationRecord
  belongs_to :stat
  has_many :games, dependent: :destroy
end
