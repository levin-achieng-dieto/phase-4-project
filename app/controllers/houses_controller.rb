class HousesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record

    def index
        render json: House.all, status: :ok
    end

    def show
        house = House.find(params[:id])
        render json: house, serializer: SingleSerializer
    end

    private

    def rescue_from_not_found_record
        render json: {error: "House not found"}, status: :not_found
    end
end
