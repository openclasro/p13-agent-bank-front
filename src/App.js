import { Outlet, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { selectMe } from './selectors'
import { logout } from './features/me'

function App() {
  const me = useSelector(selectMe)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleLogoutClick() {
    dispatch(logout())
    navigate("/")
  }
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
          {me && me.profile ? (
            <button className="main-nav-item" onClick={handleLogoutClick}>
              <i className="fa fa-sign-out"></i>
              Logout
            </button>
          ) : (
            <Link className="main-nav-item" to="/signin">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
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
