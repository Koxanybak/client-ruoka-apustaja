import React from "react"
import Menu from "./components/Menu"
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom"
import Home from "./components/Home"
import Lists from "./components/Lists"
import SearchView from "./components/SearchView"

const App = () => {
  return (
    <div id="app">
      <Menu />
      <Router>
        <Switch>
          <Route path="/search">
            <SearchView />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App