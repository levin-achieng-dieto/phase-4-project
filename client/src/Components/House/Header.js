import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:30px;
  img {
    margin-right: 10px;
    height: 350px;
    width: 380px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    margin-bottom: 3px;
  }
`

const UserReviewCount = styled.div`
  font-size: 18px;
  padding:10px 0;
`

const ScoreOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`

const Header = ({house, reviews}) => {
  return(
    <Wrapper className='container-fluid'>
      <h1>
        <img src={house.image_url} height="50" width="50" alt={house.name} />
      </h1>
      <h2>{house.name}</h2>
      <h4>ksh {house.price}/=</h4>
      <div>
        <UserReviewCount>
          <span className="review-count">{reviews ? reviews.length : 0}</span> user reviews
        </UserReviewCount>
        <Rating score={house.avg_score}/> 
        <ScoreOutOf>{house.avg_score.toFixed(1)} out of 5 stars</ScoreOutOf>       
      </div>
    </Wrapper>
  ) 
}

export default Header

