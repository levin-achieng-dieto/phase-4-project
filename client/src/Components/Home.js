import React from'react';
import Footer from './Footer';
import Houses from "./Houses/Houses";
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Home({ user, houses }) {

  if (user) {
    return (
      <>
        <div className="container mb-3">
          <div className="w-20 bg-black text-white text-center mb-3 mt-4 pb-3">
            <h2 className="pt-4">Welcome, {user.username}, and find yourself</h2>
            <h2 className="pb-4">a house to build a home</h2>
            <button className='btn2'>
              <Link to={`/about`} className="link" >
               More About us
              </Link>
            </button>
          </div>
          <Houses houses={houses}/>
        </div>
        <Footer />
      </>
      );
  } else {
    return (
      <>
        <div className="text-center">
            <h1>Choose us Everyday!</h1>
            <p className="pt-5 mb-20 text-4xl">OasisHomes is an exclusive chic estate of contemporary more than one </p>
            <p className="text-5xl">bedroom apartments sitting on 12 acres at the heart of Nairobi. The cool balconies, </p>
            <p>glass railings and floor to ceiling double-leaf doors make most of the homes' spectacular </p>
            <p>panoramic views to the park and the community's expansive outdoor amenities </p>
            <p>which are close by. Each apartment boasts of calming natural palettes and a modern kitchen </p>
            <p className="text-5xl">giving a lovely and quality indoor experience.</p>
            <h2 className="font-extrabold">Please Login or Sign Up</h2>
          </div>
          <Footer />
      </>
    );
  }
}

export default Home;
