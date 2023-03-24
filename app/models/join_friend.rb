class JoinFriend < ApplicationRecord
  belongs_to :friender, class_name: "User"
  belongs_to :friendee, class_name: "User"

  # Review validations, do not allow duplicate friends
  # validates :friendee_id, :friender_id, uniqueness: true
end
