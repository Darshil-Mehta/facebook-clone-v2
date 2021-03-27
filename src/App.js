import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginHeader from './LoginHeader.js';
import Login from './Login';
import RegisterHeader from './RegisterHeader.js';
import Register from './Register.js';
import './App.css';
import { auth } from './firebase.js';
import HomeHeader from './HomeHeader.js';
import SideBarLeft from "./SideBarLeft"
import SideBarRight from "./SideBarRight"
import Posts from './Posts.js';

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
            <div className="app__page">
              <SideBarLeft user={user} />
              <div className="app__posts">
                <Posts user={user} />
              </div>
              <SideBarRight />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
