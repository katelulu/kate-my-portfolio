import React from "react"
import "./About.css"
import about from "../Images/about.jpg"
import laptop from "../Images/laptop.jpg"
import office from "../Images/office.jpg"
import { Icon } from "@iconify/react"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Carousel from "react-bootstrap/Carousel"

export default function AboutMe() {
  return (
    <section id="about" className="about sections">
      <Row className="about-wrapper">
        <div className="heading about-content">
          <h3>About Me</h3>

          <Carousel variant="dark" interval={null} className="about-carousel">
            <Carousel.Item className="about-carItem">
              <img src={about} alt="About" className="about-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={laptop} alt="About" className="about-img2" />
              <Carousel.Caption className="about-textBox">
                <p className="about-text">
                  Hi! I'm Katarzyna, Junior Frontend Developer. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={office} alt="About" className="about-img2" />
              <Carousel.Caption className="about-textBox">
                <p className="about-text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
