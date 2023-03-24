class Game < ApplicationRecord
  belongs_to :game_session
  # has_one :user, through: :game_session #?
end
