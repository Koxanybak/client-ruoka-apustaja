import React, { useState, } from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
import CurrentStore from "./CurrentStore"
import Stores from "./Stores"

const Menu = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Ruoka-apustaja</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/new">Hae ostoslistaa</Nav.Link>
          <Nav.Link href="/lists">Ostoslistani</Nav.Link>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Vaihda kauppaa
          </Button>
        </Nav>
      </Navbar.Collapse>
      <Stores
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <CurrentStore />
    </Navbar>
  )
}

export default Menu