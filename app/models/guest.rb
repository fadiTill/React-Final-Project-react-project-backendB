class Guest < ApplicationRecord
    belongs_to :house
    validates :name, :phone_number, :email, presence: true
end

