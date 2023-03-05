class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record

    def index
        render json: Review.all, status: :ok
    end

    def create
      review = house.reviews.create!(review_params)
      render json: review, status: :created
    end

    def update
        review = Review.find_by(id: params[:id])
        review.update!(review_params)
        render json: review, status: :updated
    end

    def destroy 
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review, status: :ok 
    end

    private
    def review_params
        params.permit(:title, :description, :score, :house_id, :user_id)
    end

    def rescue_from_not_found_record
        render json: {error: "Review not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end

    def house
        @house ||= House.find(params[:house_id])
    end
end
