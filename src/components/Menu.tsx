import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Ruoka-apustaja</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/shops">Kaupat</Nav.Link>
          <Nav.Link href="/create">Luo ostoslista</Nav.Link>
          <Nav.Link href="/lists">Ostoslistani</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu