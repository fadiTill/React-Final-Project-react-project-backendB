class House < ApplicationRecord
    has_many :guests
    validates :house_address, presence: true
end
