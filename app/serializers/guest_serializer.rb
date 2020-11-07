class GuestSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :guest_address, :email, :time_line, :comment, :house_id
end
