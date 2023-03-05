import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Rating from '../Rating'

const HousesCard = ({houses}) => {

  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img
            src={houses.image_url}
            className="card-img-top"
            alt="..."
            height={330}
          />
          <div className="card-body">
            <h4 className="card-title">{houses.name}</h4>
            <small className="text-muted">House to Let</small>
            <br/>
            <Rating score={houses.avg_score}/>
            <p className="card-text">ksh {houses.price}/=</p>
            <div className="card-button row d-flex justify-content-between">
              <button 
                className="btn btn-success ms-2 mb-1 justify-content-center"
                style={{ width: "180px" }}
              >
                <Link to={`/houses/${houses.id}`} className="link" >View House</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HousesCard