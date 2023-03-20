class User < ApplicationRecord
  has_secure_password
  has_one :overall_stat
  # has_many :join_friends
  # has_many :xxx, through: :xxx

  validates :username, :email, uniqueness: true

end
