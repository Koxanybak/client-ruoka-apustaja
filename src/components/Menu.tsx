import React, { useState, } from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
import CurrentStore from "./CurrentStore"
import LoginForm from "./LoginForm"
import Stores from "./Stores"

const Menu = () => {
  const [stores_show, set_stores_show] = useState(false)
  const [login_show, set_login_show] = useState(false)

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Ruoka-apustaja</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/new">Hae ostoslistaa</Nav.Link>
          <Nav.Link href="/shoppinglists">Ostoslistani</Nav.Link>
          <Button variant="primary" onClick={() => set_stores_show(true)}>
            Vaihda kauppaa
          </Button>
          <Button variant="secondary" onClick={() => set_login_show(true)}>
            Kirjaudu sisään
          </Button>
        </Nav>
      </Navbar.Collapse>
      <Stores
        show={stores_show}
        onHide={() => set_stores_show(false)}
      />
      <LoginForm
        show={login_show}
        onHide={() => set_login_show(false)}
      />
      <CurrentStore />
    </Navbar>
  )
}

export default Menu