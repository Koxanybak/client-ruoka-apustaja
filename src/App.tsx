import React from "react"
import Menu from "./components/Menu"
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom"
import Home from "./components/Home"
import Lists from "./components/Lists"
import SearchResults from "./components/SearchResults"
import ProductSearchForm from "./components/ProductSearchForm"
import RegisterForm from "./components/RegisterForm"
import Notification from "./components/Notification"

const App = () => {
  return (
    <div id="app">
      <Menu />
      <Router>
        <Switch>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="/new">
            <ProductSearchForm />
          </Route>
          <Route path="/shoppinglists">
            <Lists show />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Notification />
    </div>
  )
}

export default App