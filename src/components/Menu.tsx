import React, { useState, } from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
import { useHistory } from "react-router"
import { useUser } from "../hooks/use-user"
import CurrentStore from "./CurrentStore"
import LoginForm from "./LoginForm"
import Stores from "./Stores"

const Menu = () => {
  const [stores_show, set_stores_show] = useState(false)
  const [login_show, set_login_show] = useState(false)
  const { logged_user } = useUser()
  const history = useHistory()

  const switch_to = (route: string) => {
    history.push(route)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Ruoka-apustaja</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Button variant="link" onClick={() => switch_to("/new")}>Hae ostoslistaa</Button>
          <Button variant="primary" onClick={() => set_stores_show(true)}>
            Vaihda kauppaa
          </Button>
          {!logged_user
            ?
              <Button variant="secondary" onClick={() => set_login_show(true)}>
                Kirjaudu sisään
              </Button>
            :
              <Button variant="link" onClick={() => switch_to("/shoppinglists")}>Ostoslistani</Button>
          }
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