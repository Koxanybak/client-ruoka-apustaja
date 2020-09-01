import React from "react"
import ReactDOM from "react-dom"
import thunk from "redux-thunk"
import App from "./App"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
//import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "./store";

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)