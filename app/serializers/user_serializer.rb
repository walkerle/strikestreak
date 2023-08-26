class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_one :overall_stat
  
  has_many :join_friends # may need this for DELETING friend

end
