class JoinFriend < ApplicationRecord
  belongs_to :friender, class_name: "User"
  belongs_to :friendee, class_name: "User"

  # Review validations, do not allow duplicate friends
  validates :friendee_id, uniqueness: { scope: :friender }
  validates :friendee_id, comparison: { other_than: :friender_id }
end
