import React from "react"
import "./Portfolio.css"
import PortfolioData from "./PortfolioData"
import { Icon } from "@iconify/react"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="overlay sections">
        <div className="heading text-center">
          <div className="P-title">
            <h3>MY WORK</h3>
          </div>
        </div>

        <div className="portfolio-wrapper">
          <Row className="portfolio-main">
            {PortfolioData.map(({ title, link, img, cName }) => (
              <Col className="portfolio-item" xs={12} md={6}>
                <div className={cName}>
                  <a href={link} className="portfolio-link">
                    <img src={img} alt="Portfolio" />
                  </a>
                </div>
                <h4 className="portfolio-title">{title}</h4>
              </Col>
            ))}
          </Row>
          <div className="scroll-down">
            <a href="#contact">
              <Icon icon="fa:angle-double-down" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
