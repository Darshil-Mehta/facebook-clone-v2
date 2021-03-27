import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginHeader from './LoginHeader.js';
import Login from './Login';
import RegisterHeader from './RegisterHeader.js';
import Register from './Register.js';
import { auth } from './firebase.js';
import HomeHeader from './HomeHeader.js';


function App() {

  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser)
    } else {
      setUser(false);
    }
  })
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
          <Route path="/register">
            <RegisterHeader />
            <Register />
          </Route>
          <Route path="/">
            <HomeHeader user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
