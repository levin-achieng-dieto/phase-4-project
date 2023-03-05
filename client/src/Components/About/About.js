import React from "react"
import "./About.css"
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Footer from "../Footer"


const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex mtop'>
          <div className="text-center">
            <h1>Our Agency Story</h1>
            <h2>Check out our company story and work process</h2>
            <p className="text-5xl">Buying a property vs renting is a never-ending debate, but the outcome depends largely on your income and circumstances. If you are looking to move houses, and want to find a suitable rental property or shared accommodation, we can help you find the right fit.   </p>
          </div>
          <div className='right-row column'>
            <img src='https://img.freepik.com/free-photo/house-isolated-field_1303-23772.jpg?w=826&t=st=1670613299~exp=1670613899~hmac=39a393dc74e2f5c904ad526a399c0eb0317c3edaf5a3e4d28e9e483644773f90' alt='sth' />
            <br/>
            <button className='btn2 mt-3'>
              <Link to={`/`} className="link" >
               Back to HomePage
              </Link>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About