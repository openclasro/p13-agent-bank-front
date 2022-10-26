import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectMe } from "../selectors"
import { setMe } from "../features/me"

export default function SignInPage() {
  const [username, setUsername] = useState("tony@stark.com")
  const [password, setPassword] = useState("password123")

  const dispatch = useDispatch()
  const me = useSelector(selectMe)
  const navigate = useNavigate()

  function handleSignInClick() {
    axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: username,
        password: password,
      })
      .then((signInRes) => {
        axios
          .post("http://localhost:3001/api/v1/user/profile", null, {
            headers: {
              Authorization: `Bearer ${signInRes.data.body.token}`,
            },
          })
          .then((userRes) => {
            dispatch(
              setMe({ ...userRes.data.body, token: signInRes.data.body.token })
            )
            navigate("/profile")
          })
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSignInClick()
          }}
        >
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
