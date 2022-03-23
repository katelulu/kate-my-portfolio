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
                  Hey! I'm Kate, Junior Frontend Developer.
                  <br /> I am a girl who loves to learn new and interesting
                  skills. For many years I have worked with people
                  <br /> as a psychologist. For several years, I managed a
                  psychological practice and organized trainings. <br />
                  After moving to Germany, I decided to take a risk and change
                  my life, test myself with something that has fascinated me for
                  a long time. I recently graduated from Fullstack Web and App
                  Developer Bootcamp organized by WBS Coding School in Berlin.
                  <br />
                  Because of my love for beauty and design, I am Front End
                  oriented.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={office} alt="About" className="about-img2" />
              <Carousel.Caption className="about-textBox">
                <p className="about-text">
                  I like order, simplicity and friendly communication with other
                  people. <br /> Privately, I like to travel. I collect memories
                  from each place in the form of photos.
                  <br /> Good music and detective stories inspire me, and just
                  like in the latter,
                  <br /> I am always eager to discover the right solutions to
                  various problems.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Row>
      <Row className="about-text2">
        <p>
          Hey! I'm Kate, Junior Frontend Developer.
          <br /> I am a girl who loves to learn new and interesting skills. For
          many years I have worked with people
          <br /> as a psychologist. For several years, I managed a psychological
          practice and organized trainings. <br />
          After moving to Germany, I decided to take a risk and change my life,
          test myself with something that has fascinated me for a long time. I
          recently graduated from Fullstack Web and App Developer Bootcamp
          organized by WBS Coding School in Berlin.
          <br />
          Because of my love for beauty and design, I am Front End oriented.
          <br />I like order, simplicity and friendly communication with other
          people. <br /> Privately, I like to travel. I collect memories from
          each place in the form of photos.
          <br /> Good music and detective stories inspire me, and just like in
          the latter,
          <br /> I am always eager to discover the right solutions to various
          problems.
        </p>
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
