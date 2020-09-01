import React from "react"
import Menu from "./components/Menu"
import { Route, Router, Switch, useHistory } from "react-router"
import Home from "./components/Home"
import Lists from "./components/Lists"
import SearchView from "./components/SearchView"
import "./index.css"

const App = () => {
  const history = useHistory()

  return (
    <div id="app">
      <Menu />
      <Router history={history}>
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