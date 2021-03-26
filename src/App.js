import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css'
import Login from "./Login"
import Register from "./Register"

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
