class User < ApplicationRecord
  has_secure_password
  has_one :overall_stat
  
  has_many :join_friends, foreign_key: :friender_id
  has_many :friendees, through: :join_friends

  # Making the association in the other direction!
  # has_many :join_friends, foreign_key: :friendee_id
  # has_many :frienders, through: :join_friends

  validates :username, :email, uniqueness: true

end
