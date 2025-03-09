import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {

  return (
    <BrowserRouter>
      <nav>
        <div className="container">
          <Link className="nav_home" to="/">#VANLIFE</Link>
          <Link className="nav_about" to="/about">About</Link>
          <Link className="nav_vans" to="">Vans</Link>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer> <p>&copy; 2022 #VANLIFE</p> </footer>
    </BrowserRouter>
  )
}