class SingleSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :price, :avg_score, :reviews
  has_many :reviews, serializer: ReviewSerializer, dependent: :destroy
end
