class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :score, :house_id, :user_id, :user, :house
  has_one :user
  belongs_to :house
end
