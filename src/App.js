import React from "react"
import TopBar from "./components/topbar/TopBar"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "./app.css"
import UserList from "./pages/home/userList/UserList"

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
        </Switch>
      </div>
    </Router>
  )
}

export default App
