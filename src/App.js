import logo from "./logo.svg"
import "./App.css"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import UsersPage from "./pages/UsersPage"
import { Outlet } from "react-router-dom"

import { createBrowserRouter, Link } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
])

function App() {
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={require("./assets/images/argentBankLogo.png")}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <div>
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
      <Outlet />
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  )
}

export default App
