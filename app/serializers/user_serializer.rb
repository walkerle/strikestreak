class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password
  has_one :overall_stat
end
