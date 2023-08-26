class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_one :stat
  
  has_many :join_friends # may need this for DELETING friend

end
