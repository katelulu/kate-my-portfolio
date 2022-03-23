import React from "react"
import "./Skills.css"
import { Icon } from "@iconify/react"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skillsWrapper">
        <header className="skillsHeader">
          <h3 className="skillTitle skillBackground">SKILLS</h3>

          <Row className="skillForeground skillsBox">
            <div className="skillsTech">
              <h3>TECH SKILLS</h3>
              <h5>
                <Icon icon="akar-icons:html-fill" />
                HTML5
              </h5>
              <h5>
                <Icon icon="akar-icons:css-fill" />
                CSS3
              </h5>
              <h5>
                <Icon icon="uil:java-script" />
                JAVA SCRIPT
              </h5>
              <h5>
                <Icon icon="akar-icons:react-fill" />
                REACT
              </h5>

              <h5>
                <Icon icon="akar-icons:bootstrap-fill" />
                BOOTSTRAP
              </h5>
              <h5>
                <Icon icon="simple-icons:mui" />
                MUI
              </h5>
              <h5>
                <Icon icon="fluent:phone-desktop-16-regular" />
                RESPONSIVE
              </h5>
            </div>

            <div className="skillsOther">
              <h3>OTHER SKILLS</h3>
              <h5>
                <Icon icon="bi:git" />
                GIT | GitHub
              </h5>
              <h5>
                <Icon icon="dashicons:rest-api" />
                REST API
              </h5>

              <h5>
                <Icon icon="cib:trello" />
                TRELLO
              </h5>
              <h5>
                <Icon icon="akar-icons:figma-fill" />
                FIGMA
              </h5>
              <h5>
                <Icon icon="simple-icons:contentful" />
                CONTENTFUL
              </h5>
              <h5>
                <Icon icon="clarity:talk-bubbles-line" />
                COMUNICATION
              </h5>
            </div>
          </Row>
        </header>
      </div>
    </section>
  )
}
