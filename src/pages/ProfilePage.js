import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function ProfilePage() {
  const me = useSelector((state) => state.me)
  const [firstname, setFirstname] = useState(me.profile.firstName)
  const [lastname, setLastname] = useState(me.profile.lastName)

  const navigate = useNavigate()

  const loggedIn = me && me.profile

  console.log(loggedIn)

  useEffect(() => {
    if (!loggedIn) {
      navigate("/signin")
    }
  }, [])

  async function save() {
    console.log("envoyer", firstname, lastname)

   await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      {
        firstName: firstname,
        lastName: lastname,
      },
      {
        headers: {
          Authorization: `Bearer ${me.token}`,
        },
      }
    )
    alert('Updated successfully!')
  }

  if (!loggedIn) return

  return (
    <section className="sign-in-content">
      <h1>Profile</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          save()
        }}
      >
        <div className="input-wrapper">
          <label htmlFor="firstname">Firstname</label>
          <input
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Lastname</label>
          <input
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  )
}
