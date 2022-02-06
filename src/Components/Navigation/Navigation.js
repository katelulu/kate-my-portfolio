import React from "react"
import "./Navigation.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav } from "react-bootstrap"
//import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <Navbar expand="md" variant="dark" className="nav-container">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse">
        <Nav className="me-auto nav-main">
          <Nav.Link href="#home" className="nav-links">
            HOME
          </Nav.Link>
          <Nav.Link href="#about" className="nav-links">
            ABOUT ME
          </Nav.Link>
          <Nav.Link href="#portfolio" className="nav-links">
            PORTFOLIO
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-links">
            CONTACT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
