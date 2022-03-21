import "./App.css"
import React from "react"
import Navigation from "./Components/Navigation/Navigation"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import PortfolioCards from "./Components/Portfolio/PortfolioCards"

function App() {
  return (
    <body>
      <Navigation />
      <Home />
      <About />
      <PortfolioCards />
      <Contact />
      <Footer />
    </body>
  )
}

export default App
