class HouseSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :price, :avg_score
end
