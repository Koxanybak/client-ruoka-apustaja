import React from "react"
import Menu from "./components/Menu"
import { Route, Router, Switch } from "react-router"
import { createBrowserHistory } from "history"
import Home from "./components/Home"
import Lists from "./components/Lists"
import SearchView from "./components/SearchView"

const history = createBrowserHistory()

const App = () => {
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