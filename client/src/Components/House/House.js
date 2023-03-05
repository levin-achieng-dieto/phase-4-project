import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";
import ReviewForm from "./ReviewForm";
import styled from "styled-components";
import Header from "./Header";
import { useParams } from "react-router-dom";
import Review from "./Review";

const Wrapper = styled.section`
  max-width: 100%;
  padding-left: 16px;
  display: flex;
`;

const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  height: 91vh;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: #000;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`

const Main = styled.div`
  padding-left: 60px;
`;

const House = ({user}) => {
  const [house, setHouse] = useState({});
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({
    title: "",
    description: "",
    score: 0,
  });
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetch(`/houses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHouse(data);
        setReviews(data.reviews);
        setLoading(true)
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
    console.log("review:", review);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const house_id = house.id;
    const user_id = user.id;
    
    fetch(`/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...review, house_id, user_id}),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews({...reviews, data});
        setError('')
        setReview({ title: '', description: '', score: 0 })
      });
  };

  const setRating = (score, e) => {
    e.preventDefault()  
    setReview({ ...review, score })
  }

  let userReviews

  if (loading && house.reviews) {
    userReviews = reviews.map( (rev) => {
      return (
        <Review 
          key={rev.id}
          review={rev}
          reviews={reviews}
          setReviews={setReviews}
          setLoading={setLoading}
        />
      )
    })
  }

  return (
    <Wrapper>
      {
      loading &&
      <>
      <Column>
      <Main>
        <Header 
        house={house} 
        reviews={reviews} 
        />
        <h2>Reviews</h2>
        {userReviews}
        <br />
      </Main>
      </Column>
      <Column>
        <ReviewForm
          name={house.name}
          review={review}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setRating={setRating}
          error={error}
          />
      </Column>
      </>
      }
    </Wrapper>
  );
};

export default House;
