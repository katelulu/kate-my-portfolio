import React from "react"
import "./Contact.css"
import { Icon } from "@iconify/react"
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import emailjs from "@emailjs/browser"

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    alert("THANK YOU FOR YOUR MESSAGE!")
  }

  return (
    <section id="contact" className="contact-container">
      <h3 className="contact-text">Want to contact me?</h3>
      <Form
        id="myForm"
        className="contact-form"
        onSubmit={sendEmail}
        autoComplete="off"
      >
        <Form.Group className="contact-subject">
          <Form.Control
            type="subject"
            name="subject"
            class="form-control"
            placeholder="SUBJECT"
            required
          />
        </Form.Group>
        <Form.Group className="contact-name">
          <Form.Control
            type="name"
            name="name"
            class="form-control"
            placeholder="YOUR NAME"
            required
          />
        </Form.Group>
        <Form.Group className="contact-email">
          <Form.Control
            type="email"
            name="email"
            class="form-control"
            placeholder="YOUR EMAIL"
            required
          />
        </Form.Group>

        <Form.Group className="contact-massage">
          <Form.Control
            as="textarea"
            name="message"
            class="form-control"
            placeholder="MESSAGE"
            rows={3}
            required
          />
        </Form.Group>
        <Button
          variant="outline-secondary"
          type="submit"
          className="contact-btn"
        >
          Send Message
          <Icon icon="fa-brands:telegram-plane" className="contact-btnIcon" />
        </Button>
      </Form>
      <div className="SM-smBox">
        <h3 className="SM-Title">SOCIAL MEDIA:</h3>
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
