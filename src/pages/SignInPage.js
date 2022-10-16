import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignInPage() {
  const [username, setUsername] = useState("tony@stark.com")
  const [password, setPassword] = useState("password123")

  const navigate = useNavigate()

  function signIn() {
    axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        // Je suis connecte
        // 1. je prends mon token
        // 2. je save mon token => pour le reutiliser apres
        // 3. naviguer vers la home page
        navigate('/')
        
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            signIn()
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
