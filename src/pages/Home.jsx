import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    
     <div className="home">
      <div className="container">
        <h1 className="home_heading">You got the travel plans, we got the travel vans.</h1>
        <p className="home_text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="" className="home_btn">Find your van</Link>
      </div>
     </div>
    
  )
}