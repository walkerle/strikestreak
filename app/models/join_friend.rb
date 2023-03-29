class JoinFriend < ApplicationRecord
  belongs_to :friender, class_name: "User"
  belongs_to :friendee, class_name: "User"

  # Does not allow duplicate friends or self as friend
  validates :friendee_id, uniqueness: { scope: :friender }
  validates :friendee_id, comparison: { other_than: :friender_id }
end
