import "./App.css"
import React from "react"
import Navigation from "./Components/Navigation/Navigation"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import PortfolioCards from "./Components/Portfolio/PortfolioCards"
import Skills from "./Components/Skills/Skills"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <body>
      <Navigation />
      <Home />
      <About />
      <PortfolioCards />
      <Skills />
      <Contact />
      <Footer />
    </body>
  )
}

export default App
