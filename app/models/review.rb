class Review < ApplicationRecord
    belongs_to :house 
    belongs_to :user 

    validates :description, length: {maximum: 100}
    # validates :score, inclusion: {0..10}
end
