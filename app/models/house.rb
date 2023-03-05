class House < ApplicationRecord
    has_many :reviews

    validates :name, :image_url, :price, presence: true 

    def avg_score
        return 0 unless reviews.count.positive?
        reviews.average(:score).round(2).to_f
    end
end
