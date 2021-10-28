import React from "react"
import TopBar from "./components/topbar/TopBar"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newUser"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./app.css"

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
