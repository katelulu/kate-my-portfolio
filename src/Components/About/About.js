import React from "react"
import "./About.css"
import about from "../Images/about.jpg"
import { Icon } from "@iconify/react"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"

export default function AboutMe() {
  return (
    <section id="about" className="about sections">
      <Row className="about-wrapper">
        <img src={about} alt="About" className="about-img" />

        <div className="heading about-content">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </Row>

      <div className="scroll-down">
        <h5>Scroll down to see more.</h5>
        <a href="#portfolio">
          <Icon icon="fa:angle-double-down" />
        </a>
      </div>
    </section>
  )
}
