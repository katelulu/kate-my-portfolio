import React from "react"
import "./Portfolio.css"
import FlipData from "./FlipData"
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
            {FlipData.map((item, index) => {
              const { title, img, link, code, base, text, cName } = item
              return (
                <Col className="portfolio-item " xs={12} md={6}>
                  <div className={cName}>
                    <div className="card-inner">
                      <div className="card-front">
                        <img src={img} alt="Portfolio" className="P-image" />
                      </div>
                      <div className="card-back">
                        <h1>{item.title}</h1>
                        <ul>
                          <li>
                            <button className="visitButton">
                              <a
                                href={link}
                                className="portfolio-link container"
                              >
                                VISIT
                              </a>
                            </button>
                          </li>
                          <li>
                            <button className="visitButton">
                              <a
                                href={code}
                                className="portfolio-link container"
                              >
                                CODE
                              </a>
                            </button>
                          </li>
                          <li>{item.base}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
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
