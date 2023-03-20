class JoinFriendSerializer < ActiveModel::Serializer
  attributes :id, :friender_id, :friendee_id
end
