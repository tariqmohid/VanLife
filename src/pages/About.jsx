import React from "react"
import { Link } from "react-router-dom"
import bgImg from "/van-about.png"

export default function About() {
  return (

    <div className="about">

      <img className="about_img" src={bgImg} alt="a man is sitting on top of the van" />

      <div className="container">
        <h1 className="about_heading">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className="about_text">
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        
        
          <div className="about_container">
            <h2 className="about_sub-heading">Your destination is waiting. <br/>
            Your van is ready.</h2>
            <Link className="about_btn" to="">Explore our vans</Link>
          </div>
      </div>

    </div>

  )
}