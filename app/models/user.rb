class User < ApplicationRecord
  has_secure_password
  has_one :overall_stat
  # has_many :game_sessions, through: :overall_stat #?
  # has_many :games, through: :game_sessions #?
  # has_many :join_friends

  validates :username, :email, uniqueness: true

end
