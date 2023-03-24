class GameSession < ApplicationRecord
  belongs_to :overall_stat
  has_many :games, dependent: :destroy
  # has_one :user, through: :overall_stat #?
end
