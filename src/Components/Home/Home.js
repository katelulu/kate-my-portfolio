import React from "react"
import "./Home.css"
import { Icon } from "@iconify/react"

export default function Home() {
  return (
    <header id="home" className="home-section">
      <div className="overlay sections">
        <div className="row">
          <div className="home-details text-center">
            <div className="home-title">
              <h1>
                <span>MY</span>PORTFOLIO
              </h1>
            </div>
            <div className="scroll-down">
              <a href="#about">
                <Icon icon="fa:angle-double-down" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
