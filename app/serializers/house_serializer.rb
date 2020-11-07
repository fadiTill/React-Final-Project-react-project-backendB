class HouseSerializer < ActiveModel::Serializer
  attributes :id, :house_address

  has_many :guests
  has_one :guest
end
