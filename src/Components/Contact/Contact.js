import React from "react"
import "./Contact.css"
import { Icon } from "@iconify/react"
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"

export default function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h5 className="contact-text">Want to contact me?</h5>
      <Form className="contact-form">
        <Form.Group className="contact-name">
          <Form.Control type="text" placeholder="YOUR NAME" />
        </Form.Group>

        <Form.Group className="contact-email">
          <Form.Control type="email" placeholder="YOUR EMAIL" />
        </Form.Group>

        <Form.Group className="contact-massage">
          <Form.Control
            as="textarea"
            type="textarea"
            placeholder="MASSAGE"
            rows={3}
          />
        </Form.Group>
      </Form>
      <div className="SM-smBox">
        <h4 className="SM-Title">SOCIAL MEDIA:</h4>
        <div className="SM-socialMedia">
          <a href="https://github.com/katelulu">
            <Icon icon="fa-brands:github" />
          </a>
          <a href="https://www.linkedin.com/in/katarzyna-lukoszek-2147ab206/">
            <Icon icon="fa-brands:linkedin" />
          </a>
          <a href="https://www.instagram.com/katelulu00/">
            <Icon icon="fa-brands:instagram-square" />
          </a>
        </div>
      </div>
    </section>
  )
}
