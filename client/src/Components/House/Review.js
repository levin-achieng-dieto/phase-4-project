import React from "react";
import Rating from "../Rating";

const Review = ({ review, reviews, setReviews, setLoading }) => {
    
    function handleDelete() {
    fetch(`/reviews/${review.id}`, {
        method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => {   
        const delCard = reviews.filter((rev) => rev.id !== review.id); 
        setReviews(delCard);
        setLoading(false)
      })
      .catch((error) => console.log('Error from deleteLogsByGlobalId() => ' + error));
  }

  return (
    <>
    <div className="card text-bg-light mb-3 me-4">
      <div className="card-header">
        <h5 className="card-title">{review.user.username}</h5>
      </div>
      <div className="card-body">
        <h5 className="card-title">{review.title}</h5>
        <p className="card-text">{review.description}</p>
        <div className="rating-con">
          <Rating score={review.score} />
        </div>
        <button
            onClick={() => handleDelete()}
            className="btn btn-danger ms-2 mb-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ width: "120px" }}
        >
          Delete
        </button>
      </div>
    </div>
    <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Deleted review
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">You have deleted this review. Refresh page to see changes</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
