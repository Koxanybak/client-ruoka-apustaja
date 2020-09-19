import React from "react"
import Menu from "./components/Menu"
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom"
import Home from "./components/Home"
import ShoppingLists from "./components/ShoppingLists"
import SearchResults from "./components/SearchResults"
import ProductSearchForm from "./components/ProductSearchForm"
import RegisterForm from "./components/RegisterForm"
import Notification from "./components/Notification"
import { useUser } from "./hooks/use-user"

const App = () => {
  const { user_error, user_loading } = useUser()

  if (user_loading && !user_error) {
    return <h1>Ladataan...</h1>
  }

  return (
    <div id="app">
      <Router>
        <Menu />
        <Switch>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="/new">
            <ProductSearchForm />
          </Route>
          <Route path="/shoppinglists">
            <ShoppingLists />
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