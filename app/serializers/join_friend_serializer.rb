class JoinFriendSerializer < ActiveModel::Serializer
  attributes :id, :friender_id, :friendee_id
  belongs_to :friender
  belongs_to :friendee
end
